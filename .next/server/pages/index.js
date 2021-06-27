module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      if (key === 'as') {
        if (props[key] && typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: typeof props[key]
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && typeof props[key] !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const resolvedHref = (0, _router.resolveHref)(pathname, props.href);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)(as);
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/compiled/path-to-regexp/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/compiled/path-to-regexp/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return basePath && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(basePath) : basePath + path : path;
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname); // if the origin didn't change, it means we received a relative href

    return finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
  } catch (_) {
    return urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    const cleanedAs = hasBasePath(as) ? delBasePath(as) : as;
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to


    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      searchParams
    } = parsed;
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    }

    const query = (0, _querystring.searchParamsToUrlQuery)(searchParams); // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (true) {
      resolvedAs = (0, _resolveRewrites.default)(as, pages, basePath, rewrites, query, p => this._resolveHref({
        pathname: p
      }, pages).pathname);
    }

    resolvedAs = delBasePath(resolvedAs);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const {
        pathname: asPathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

      if (!routeMatch) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`);
        }
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error
      } = routeInfo;
      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component,
        styleSheets
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        styleSheets,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _denormalizePagePath.denormalizePagePath)(delBasePath(pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = addBasePath(page);
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;
    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (true) {
      return;
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    searchParams,
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/path-match.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.pathToRegexp = exports.default = exports.customRouteMatcherOptions = exports.matcherOptions = void 0;

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

exports.pathToRegexp = pathToRegexp;

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

const matcherOptions = {
  sensitive: false,
  delimiter: '/',
  decode: decodeParam
};
exports.matcherOptions = matcherOptions;

const customRouteMatcherOptions = _objectSpread(_objectSpread({}, matcherOptions), {}, {
  strict: true
});

exports.customRouteMatcherOptions = customRouteMatcherOptions;

var _default = (customRoute = false) => {
  return path => {
    const keys = [];
    const matcherRegex = pathToRegexp.pathToRegexp(path, keys, customRoute ? customRouteMatcherOptions : matcherOptions);
    const matcher = pathToRegexp.regexpToFunction(matcherRegex, keys, matcherOptions);
    return (pathname, params) => {
      const res = pathname == null ? false : matcher(pathname);

      if (!res) {
        return false;
      }

      if (customRoute) {
        for (const key of keys) {
          // unnamed params should be removed as they
          // are not allowed to be used in the destination
          if (typeof key.name === 'number') {
            delete res.params[key.name];
          }
        }
      }

      return _objectSpread(_objectSpread({}, params), res.params);
    };
  };
};

exports.default = _default;

function decodeParam(param) {
  try {
    return decodeURIComponent(param);
  } catch (_) {
    const err = new Error('failed to decode param');
    err.code = 'DECODE_FAILED';
    throw err;
  }
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.default = prepareDestination;

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _parseRelativeUrl = __webpack_require__(/*! ./parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function prepareDestination(destination, params, query, appendParamsToQuery, basePath) {
  let parsedDestination = {};

  if (destination.startsWith('/')) {
    parsedDestination = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
  } else {
    const {
      pathname,
      searchParams,
      hash,
      hostname,
      port,
      protocol,
      search,
      href
    } = new URL(destination);
    parsedDestination = {
      pathname,
      searchParams,
      hash,
      protocol,
      hostname,
      port,
      search,
      href
    };
  }

  parsedDestination.query = (0, _querystring.searchParamsToUrlQuery)(parsedDestination.searchParams);
  const destQuery = parsedDestination.query;
  const destPath = `${parsedDestination.pathname}${parsedDestination.hash || ''}`;
  const destPathParamKeys = [];
  pathToRegexp.pathToRegexp(destPath, destPathParamKeys);
  const destPathParams = destPathParamKeys.map(key => key.name);
  let destinationCompiler = pathToRegexp.compile(destPath, // we don't validate while compiling the destination since we should
  // have already validated before we got to this point and validating
  // breaks compiling destinations with named pattern params from the source
  // e.g. /something:hello(.*) -> /another/:hello is broken with validation
  // since compile validation is meant for reversing and not for inserting
  // params from a separate path-regex into another
  {
    validate: false
  });
  let newUrl; // update any params in query values

  for (const [key, strOrArray] of Object.entries(destQuery)) {
    let value = Array.isArray(strOrArray) ? strOrArray[0] : strOrArray;

    if (value) {
      // the value needs to start with a forward-slash to be compiled
      // correctly
      value = `/${value}`;
      const queryCompiler = pathToRegexp.compile(value, {
        validate: false
      });
      value = queryCompiler(params).substr(1);
    }

    destQuery[key] = value;
  } // add path params to query if it's not a redirect and not
  // already defined in destination query or path


  const paramKeys = Object.keys(params);

  if (appendParamsToQuery && !paramKeys.some(key => destPathParams.includes(key))) {
    for (const key of paramKeys) {
      if (!(key in destQuery)) {
        destQuery[key] = params[key];
      }
    }
  }

  const shouldAddBasePath = destination.startsWith('/') && basePath;

  try {
    newUrl = `${shouldAddBasePath ? basePath : ''}${encodeURI(destinationCompiler(params))}`;
    const [pathname, hash] = newUrl.split('#');
    parsedDestination.pathname = pathname;
    parsedDestination.hash = `${hash ? '#' : ''}${hash || ''}`;
    delete parsedDestination.search;
    delete parsedDestination.searchParams;
  } catch (err) {
    if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
      throw new Error(`To use a multi-match in the destination you must add \`*\` at the end of the param name to signify it should repeat. https://err.sh/vercel/next.js/invalid-multi-match`);
    }

    throw err;
  } // Query merge order lowest priority to highest
  // 1. initial URL query values
  // 2. path segment values
  // 3. destination specified query values


  parsedDestination.query = _objectSpread(_objectSpread({}, query), parsedDestination.query);
  return {
    newUrl,
    parsedDestination
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, item));
    } else {
      result.set(key, value);
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

var _pathMatch = _interopRequireDefault(__webpack_require__(/*! ./path-match */ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js"));

var _prepareDestination = _interopRequireDefault(__webpack_require__(/*! ./prepare-destination */ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const customRouteMatcher = (0, _pathMatch.default)(true);

function resolveRewrites(asPath, pages, basePath, rewrites, query, resolveHref) {
  if (!pages.includes(asPath)) {
    for (const rewrite of rewrites) {
      const matcher = customRouteMatcher(rewrite.source);
      const params = matcher(asPath);

      if (params) {
        if (!rewrite.destination) {
          // this is a proxied rewrite which isn't handled on the client
          break;
        }

        const destRes = (0, _prepareDestination.default)(rewrite.destination, params, query, true, rewrite.basePath === false ? '' : basePath);
        asPath = destRes.parsedDestination.pathname;
        Object.assign(query, destRes.parsedDestination.query);

        if (pages.includes(asPath)) {
          // check if we now match a page as this means we are done
          // resolving the rewrites
          break;
        } // check if we match a dynamic-route, if so we break the rewrites chain


        const resolvedHref = resolveHref(asPath);

        if (resolvedHref !== asPath && pages.includes(resolvedHref)) {
          break;
        }
      }
    }
  }

  return asPath;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) === null || _App$prototype === void 0 ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./src/assets/Success.png":
/*!********************************!*\
  !*** ./src/assets/Success.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/Success-ba655cc6f65a4f4cf7506f1bc109308f.png";

/***/ }),

/***/ "./src/assets/arrowEven.png":
/*!**********************************!*\
  !*** ./src/assets/arrowEven.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAAArCAYAAAA0Y2fIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAN9SURBVHgB7Z2LddowFIavezIAG9QblE5QdwNGYIOSCWAD2AA2YATIBJAJTCaATqDq4l+NYswjRAZs/d85irGk+IF1dR+STCKERIYxppMkyc7bz+wmw67mz/xyQqLDCsXUppVNW92WykbmI10hJAa0sds0hNbw8+dIE5t6J/6/U3U8IaSNqKBAS4wkAJ72yYSQNlLWEl89VkgBJKT1wPdZCCHkPFZYUiGEEELqRdVNSCeJkCYC575zoix1OxqbzmmnkVhBKFplYHqkvI9I2Xc3MJMzbEZiRSNgiIR1j5Tvx2L8jFQIiZRz7R9W2H46zZP+SZJkI4REQHnipXJB+3+16e3cgYf0bUib0DlkmHyZyZV8O1H2iu3eGaLgkKaCSLCO1M9tWksxhb+WE3W8yWe5ENIwICxbpIHcApz0NicjJDAIC6fySZxmMlwfQ8h54IqYYO4IggJj+jfk3sB9GGoIWAIA7XJ0MPOaA+oFzpx/w1Vp5F7YtvcHPooykQCY94VoqYQEkjgLebGEXAoGFQ18jUwCYuqcYwmJTIWQG4KpXZm0BY1QCCEBaH20yrMD82tDe4SgHS1q8SkOz5XfdSJy6WZzjueQS4G55drOFoPotfkVXmSsL/fGCw5kQsgFwCq5aQM2TVhMSSEijWiojwDUrjPXpvRz4gIm+xgmF4XmEvClubEcZSyk1Zhiqv3C808m7Cw/CfycgTnx7lvSDvCcV3U78tECtT1kL9QsTDGFKhNyWzz1bdAzDdgzPSYQkn7J5OKzujUw2dyD4IK2BwUBHH/shOtJHhFE3KZwKNmj1Qw6sLQiv0czrAFA+2w9023BBxcO54/An3RaZCSk2eChTuDr9CrKqX2uAJrDmVoL+JGpREQiEWKKl7KlUrxB5MWmZZIkS4kcdCSZTb90334nzxXl6o+s+aOpEYGe0mkgR6eiXjTOqmdi/Y9ECjkgSg1TRgXD9pjrUp4K0FaKd1i5d1m92HqNWlUKk0kFX7c/8Lln7+OtVG8k7/dKDXIECswRIDDq/2gD04am+zvbkH6X6mm5TuXRhvbXpo0UDW4tNYLr05Qi6edlheDPcR+KE4jnuq+PkEoQYFiVonPTino9mD05HOa901xRr++Vn6o3M4f0j1xf1zDQEYQnIV8CwYKfbv9E1Eh79yU+p17eJWwq8iY43gZpV2VGMZgRln8rkj18c34XqQAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/assets/arrowOdd.png":
/*!*********************************!*\
  !*** ./src/assets/arrowOdd.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAAArCAYAAAA0Y2fIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANvSURBVHgB7Z3rddpAEIWHnPyPS1hXEJegdOBUEFJBnAqggygVQAe4A9wBTgXgCsAVbGasK7PeCCyCHki63zl7JKQBCWln57G70khIpXjvHVZ3o9FoF+1LdfFJyxWK8bVAbhn/rsp8KTjWWBcbfNyozEZIrXwUcjZacWe6SLS4YLOt7yLRz8H2nZx3TFO4WbTNlOa6QC6RTKEehZwFFeYIWtluJKtsVtFt3Wn5rhXvPhJ91vKg5Un2yvAc/16RlSiijJxZJT2/a9krqTsgaue9sBWVt4UpzYN+/6eQkxkJeXWjYpcGLtQPydweq2imEGnXXB/9H4lkLqApjyn/k/6Hu0jG9n3T8kfLI60RecUqh5Y7LQstW5+RFshdwaXpPRYPBdfCY/1OCNGKcItKsbb4A5XlRkjemNj1mMMyxfsTXqueYS4WLMhSy6pg/2AsR9XY9Ywam1sh3QU30gc3NRVSGWiMxpE7y8bn0jl0k0xBYF2ckNopcs8CpXJC2gU+9C8GpZdLECN6uMVjWqGGgaJsgwxO6hl8XiywMmngIk+FNAcUZoElW6sOgXvmCrbzPp5LrhhCek+QaUuElAdp3knkcjkhvQX3fB64bLYcC3kfBIZ5gJgIGRRIClj/zkzI+yBAdEIGDWOagMDtYnxCShPEOU4aolXFLYhPlmxJSBlQd6ZBnFO74iATu5K2wAkwPiH/DVz2XHFqjXN81um6bq1R99no10QIORMoTu0VuRFlgfkcCyEN47s0bq0gRuFwFdIY8GDyvruJVEyl1ibw9xijkNaAqzYPOkArmaOD+HspVQFTSEUhFwGszboqLweJBs/6TUgJEG68jIzPt3044csTz/4T0kHgso3lRPCAxd+yf1hiqYMlQZzCCVukc/hswmEe3zipA5ij8ECJENJREG/nDX/l2bRcYdYIfOiKkc4TZNPWQggpx6kGANm35Zvsm+fwejJgjikRLJN/SRwEsQpnOZJBEijE5IhMll6GuXmTayZkSMBopFAad0DG4vlZ/sEJIQPnWCaYOkIIIYQQ0jqe01YIKQeGh3HUMuknVY9M8dnDN7wQ0kfQK7+tQnGCIf58yCDpJxhomUbbbHbwCrMop0f6W/55O90xeUJ6CeKQpd+/cjCJ9ofcH/odvnacDBKzIpggln+eBrvtteuFSvMXadYohob3r5wAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/bannerBg.png":
/*!*********************************!*\
  !*** ./src/assets/bannerBg.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/bannerBg-1b093524baa6f8bd1f9e295f26d6ece8.png";

/***/ }),

/***/ "./src/assets/core-feature/coaching.png":
/*!**********************************************!*\
  !*** ./src/assets/core-feature/coaching.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/core-feature/tent.png":
/*!******************************************!*\
  !*** ./src/assets/core-feature/tent.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/feature/assignment.png":
/*!*******************************************!*\
  !*** ./src/assets/feature/assignment.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/feature/businessman.png":
/*!********************************************!*\
  !*** ./src/assets/feature/businessman.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/feature/question.png":
/*!*****************************************!*\
  !*** ./src/assets/feature/question.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/feature/quiz.png":
/*!*************************************!*\
  !*** ./src/assets/feature/quiz.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/feature/teaching.png":
/*!*****************************************!*\
  !*** ./src/assets/feature/teaching.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/feature/video-tutorials.png":
/*!************************************************!*\
  !*** ./src/assets/feature/video-tutorials.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/goal.png":
/*!*****************************!*\
  !*** ./src/assets/goal.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/goal-50e0c5dd92e0afb0d29f749e17bd7c95.png";

/***/ }),

/***/ "./src/assets/key-feature/help (1).png":
/*!*********************************************!*\
  !*** ./src/assets/key-feature/help (1).png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/key-feature/practice (1).png":
/*!*************************************************!*\
  !*** ./src/assets/key-feature/practice (1).png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/key-feature/promotion (2).png":
/*!**************************************************!*\
  !*** ./src/assets/key-feature/promotion (2).png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/logo-dark.png":
/*!**********************************!*\
  !*** ./src/assets/logo-dark.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/logo-dark-2c953870e4e7562b0da0e2ffd0049822.png";

/***/ }),

/***/ "./src/assets/logo.png":
/*!*****************************!*\
  !*** ./src/assets/logo.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/logo-1af3b384257f8eb8ac6360cf6148f228.png";

/***/ }),

/***/ "./src/assets/partner.png":
/*!********************************!*\
  !*** ./src/assets/partner.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/partner-cdbc9a004b178b45f88e56b2eda0be20.png";

/***/ }),

/***/ "./src/assets/patternBG.png":
/*!**********************************!*\
  !*** ./src/assets/patternBG.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/patternBG-ba1ffd043708b4f2e4eb83c1ba76fbaa.png";

/***/ }),

/***/ "./src/assets/payment-pattern.png":
/*!****************************************!*\
  !*** ./src/assets/payment-pattern.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/payment-pattern-d04d510765c9c37847e7c734ed193a68.png";

/***/ }),

/***/ "./src/assets/paymentThumb.png":
/*!*************************************!*\
  !*** ./src/assets/paymentThumb.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/paymentThumb-89aa9642e6b34842653e2e861103c4ba.png";

/***/ }),

/***/ "./src/assets/testimonial/avatar1.png":
/*!********************************************!*\
  !*** ./src/assets/testimonial/avatar1.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/testimonial/avatar2.png":
/*!********************************************!*\
  !*** ./src/assets/testimonial/avatar2.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/testimonial/avatar3.png":
/*!********************************************!*\
  !*** ./src/assets/testimonial/avatar3.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/testimonial/avatar4.png":
/*!********************************************!*\
  !*** ./src/assets/testimonial/avatar4.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/components/accordion/accordion.js":
/*!***********************************************!*\
  !*** ./src/components/accordion/accordion.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Accordion; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _base_accordion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base-accordion */ "./src/components/accordion/base-accordion.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared */ "./src/components/accordion/shared.js");
var _jsxFileName = "C:\\reactprojects\\nexttry1\\src\\components\\accordion\\accordion.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




function Accordion(_ref) {
  let {
    items
  } = _ref,
      props = _objectWithoutProperties(_ref, ["items"]);

  return __jsx(_base_accordion__WEBPACK_IMPORTED_MODULE_1__["BaseAccordion"], _extends({
    stateReducer: Object(_shared__WEBPACK_IMPORTED_MODULE_2__["combineReducers"])(_shared__WEBPACK_IMPORTED_MODULE_2__["single"], _shared__WEBPACK_IMPORTED_MODULE_2__["preventClose"])
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }), ({
    openIndexes,
    handleItemClick
  }) => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, items.map((item, index) => __jsx(_shared__WEBPACK_IMPORTED_MODULE_2__["AccordionItem"], {
    key: item.title,
    isOpen: openIndexes.includes(index),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, __jsx(_shared__WEBPACK_IMPORTED_MODULE_2__["AccordionButton"], {
    onClick: () => handleItemClick(index),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 15
    }
  }, __jsx("span", {
    className: openIndexes.includes(index) ? 'open' : 'closed',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }), item.title), __jsx(_shared__WEBPACK_IMPORTED_MODULE_2__["AccordionContents"], {
    isOpen: openIndexes.includes(index),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 15
    }
  }, item.contents)))));
}

/***/ }),

/***/ "./src/components/accordion/base-accordion.js":
/*!****************************************************!*\
  !*** ./src/components/accordion/base-accordion.js ***!
  \****************************************************/
/*! exports provided: BaseAccordion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseAccordion", function() { return BaseAccordion; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class BaseAccordion extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      openIndexes: [0]
    });

    _defineProperty(this, "handleItemClick", index => {
      this.internalSetState(state => {
        const closing = state.openIndexes.includes(index);
        return {
          type: closing ? 'closing' : 'opening',
          openIndexes: closing ? state.openIndexes.filter(i => i !== index) : [...state.openIndexes, index]
        };
      });
      console.log('clicked');
    });
  }

  getState(state = this.state) {
    return {
      openIndexes: this.props.openIndexes === undefined ? state.openIndexes : this.props.openIndexes
    };
  }

  internalSetState(changes, callback = () => {}) {
    let allChanges;
    this.setState(state => {
      const actualState = this.getState(state);
      const changesObject = typeof changes === 'function' ? changes(actualState) : changes;
      allChanges = this.props.stateReducer(actualState, changesObject);
      return allChanges;
    }, () => {
      this.props.onStateChange(allChanges);
      callback();
    });
  }

  render() {
    return this.props.children({
      openIndexes: this.getState().openIndexes,
      handleItemClick: this.handleItemClick
    });
  }

}

_defineProperty(BaseAccordion, "defaultProps", {
  stateReducer: (state, changes) => changes,
  onStateChange: () => {}
});



/***/ }),

/***/ "./src/components/accordion/shared.js":
/*!********************************************!*\
  !*** ./src/components/accordion/shared.js ***!
  \********************************************/
/*! exports provided: AccordionButton, AccordionContents, AccordionItem, preventClose, single, combineReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionButton", function() { return AccordionButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionContents", function() { return AccordionContents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionItem", function() { return AccordionItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "preventClose", function() { return preventClose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "single", function() { return single; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combineReducers", function() { return combineReducers; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\reactprojects\\nexttry1\\src\\components\\accordion\\shared.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/** @jsx jsx */


const AccordionButton = _ref => {
  let {
    children
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["children"]);

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", _extends({
    sx: styles.buttonToggle
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 3
    }
  }), children);
};
const styles = {
  buttonToggle: {
    display: 'flex',
    color: 'heading_secondary',
    cursor: 'pointer',
    border: 'none',
    fontSize: [2, null, 3],
    fontWeight: 500,
    letterSpacing: -0.5,
    position: 'relative',
    paddingLeft: ['33px', null, '45px'],
    lineHeight: [1.5, null, 1.8],
    '& > span': {
      position: 'absolute',
      width: 20,
      height: 20,
      borderRadius: '50%',
      backgroundColor: '#25CB9E',
      top: ['2px', null, '6px'],
      left: [0, null, '13px'],
      '&.open:after': {
        opacity: 0
      },
      '&::before': {
        position: 'absolute',
        content: '""',
        height: '2px',
        width: 10,
        backgroundColor: 'white',
        top: '50%',
        left: '50%',
        transform: 'translate(-50% , -50%)'
      },
      '&::after': {
        position: 'absolute',
        content: '""',
        height: 10,
        width: '2px',
        backgroundColor: 'white',
        top: '50%',
        left: '50%',
        transform: 'translate(-50% , -50%)',
        transition: 'all 0.25s'
      }
    }
  }
};
const variants = {
  open: {
    height: 'auto',
    marginTop: 12
  },
  closed: {
    height: 0,
    marginTop: 0
  }
};
function AccordionContents(_ref2) {
  let {
    isOpen
  } = _ref2,
      props = _objectWithoutProperties(_ref2, ["isOpen"]);

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, _extends({
    initial: "closed",
    animate: isOpen ? 'open' : 'closed',
    variants: variants,
    sx: {
      overflowY: 'hidden',
      fontSize: [1, null, 2],
      lineHeight: [1.85, null, null, 1.9, 2],
      color: '#343D48',
      paddingLeft: ['33px', null, '45px'],
      ' > div ': {
        paddingBottom: [1, 2]
      }
    }
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 5
    }
  }));
}
const AccordionItem = _ref3 => {
  let {
    isOpen,
    children
  } = _ref3,
      rest = _objectWithoutProperties(_ref3, ["isOpen", "children"]);

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", _extends({
    css: {
      overflow: 'hidden',
      padding: '17px 0',
      borderBottom: '1px solid #E5ECF4',
      '&:last-child': {
        borderBottom: '0px solid'
      }
    }
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 3
    }
  }), children);
};
const preventClose = (state, changes) => changes.type === 'closing' && state.openIndexes.length < 2 ? _objectSpread(_objectSpread({}, changes), {}, {
  openIndexes: state.openIndexes
}) : changes;
const single = (state, changes) => changes.type === 'opening' ? _objectSpread(_objectSpread({}, changes), {}, {
  openIndexes: changes.openIndexes.slice(-1)
}) : changes;
const combineReducers = (...reducers) => (state, changes) => reducers.reduce((acc, reducer) => reducer(state, acc), changes);

/***/ }),

/***/ "./src/components/button-group.js":
/*!****************************************!*\
  !*** ./src/components/button-group.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ButtonGroup; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/io */ "react-icons/io");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\reactprojects\\nexttry1\\src\\components\\button-group.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */


function ButtonGroup({
  next,
  previous
}) {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    sx: {
      width: '100%'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.buttonGroup,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("button", {
    onClick: previous,
    "aria-label": "Previous",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_2__["IoIosArrowRoundBack"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("button", {
    onClick: next,
    "aria-label": "Next",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_2__["IoIosArrowRoundForward"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  })))));
}
const styles = {
  buttonGroup: {
    display: 'flex',
    justifyContent: 'center',
    mb: -4,
    button: {
      bg: 'transparent',
      border: '0px solid',
      fontSize: 40,
      cursor: 'pointer',
      px: '2px',
      color: '#BBC7D7',
      transition: 'all 0.25s',
      '&:focus': {
        outline: 0
      },
      '&:hover': {
        color: 'text'
      }
    }
  }
};

/***/ }),

/***/ "./src/components/drawer.js":
/*!**********************************!*\
  !*** ./src/components/drawer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rc_drawer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-drawer */ "rc-drawer");
/* harmony import */ var rc_drawer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rc_drawer__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\reactprojects\\nexttry1\\src\\components\\drawer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const Drawer = _ref => {
  let {
    className,
    children,
    closeButton,
    closeButtonStyle,
    drawerHandler,
    toggleHandler,
    open,
    width,
    placement,
    drawerStyle,
    closeBtnStyle
  } = _ref,
      props = _objectWithoutProperties(_ref, ["className", "children", "closeButton", "closeButtonStyle", "drawerHandler", "toggleHandler", "open", "width", "placement", "drawerStyle", "closeBtnStyle"]);

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, __jsx(rc_drawer__WEBPACK_IMPORTED_MODULE_2___default.a, _extends({
    open: open,
    onClose: toggleHandler,
    className: `drawer ${className ? className : ''}`.trim(),
    width: width,
    placement: placement,
    handler: false,
    level: null,
    duration: "0.4s"
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }), closeButton && __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "div",
    onClick: toggleHandler,
    sx: closeBtnStyle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, closeButton), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: drawerStyle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, children)), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    className: "drawer__handler",
    style: {
      display: 'inline-block'
    },
    onClick: toggleHandler,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, drawerHandler));
};

Drawer.defaultProps = {
  width: '320px',
  placement: 'left'
};
/* harmony default export */ __webpack_exports__["default"] = (Drawer);

/***/ }),

/***/ "./src/components/feature-card-column.js":
/*!***********************************************!*\
  !*** ./src/components/feature-card-column.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FeatureCardColumn; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\reactprojects\\nexttry1\\src\\components\\feature-card-column.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */

function FeatureCardColumn({
  src,
  altText = 'default alt text',
  title,
  text
}) {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.card,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: src,
    alt: altText,
    sx: styles.img,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.wrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    sx: styles.wrapper.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, title), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    sx: styles.wrapper.subTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, text)));
}
const styles = {
  card: {
    display: 'flex',
    alignItems: 'flex-start',
    textAlign: 'center',
    flexDirection: 'column'
  },
  img: {
    mx: 'auto',
    mb: [3, null, 4, null, null, 5],
    width: ['80px', '90px', null, null, null, '100px', 'auto']
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    title: {
      fontSize: [3, null, null, null, null, 4],
      color: 'heading_secondary',
      lineHeight: 1.4,
      fontWeight: 700,
      mb: [2, null, null, null, null, 3]
    },
    subTitle: {
      fontSize: 1,
      fontWeight: 400,
      lineHeight: [1.85, null, null, 1.9, 2]
    }
  }
};

/***/ }),

/***/ "./src/components/feature-card.js":
/*!****************************************!*\
  !*** ./src/components/feature-card.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FeatureCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\reactprojects\\nexttry1\\src\\components\\feature-card.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */

function FeatureCard({
  src,
  altText = 'default alt text',
  title,
  text
}) {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.card,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: src,
    alt: altText,
    sx: styles.img,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.wrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    sx: styles.wrapper.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, title), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    sx: styles.wrapper.subTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, text)));
}
const styles = {
  card: {
    display: 'flex',
    alignItems: 'flex-start'
  },
  img: {
    width: ['60px', null, null, null, '55px', '70px', null, '80px'],
    height: 'auto',
    flexShrink: 0,
    mr: [3, 4, null, null, 3, 4, null, 5]
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    mt: '-5px',
    title: {
      fontSize: [3, null, null, null, null, 4],
      color: 'heading_secondary',
      lineHeight: 1.4,
      fontWeight: 700,
      mb: [2, null, null, null, null, 3],
      mt: '2px'
    },
    subTitle: {
      fontSize: 1,
      fontWeight: 400,
      lineHeight: [1.85, null, 2]
    }
  }
};

/***/ }),

/***/ "./src/components/footer/footer.data.js":
/*!**********************************************!*\
  !*** ./src/components/footer/footer.data.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  header: 'About Us',
  items: [{
    path: '/',
    label: 'Support Center'
  }, {
    path: '/',
    label: 'Customer Support'
  }, {
    path: '/',
    label: 'About Us'
  }, {
    path: '/',
    label: 'Copyright'
  }, {
    path: '/',
    label: 'Popular Campaign'
  }]
}, {
  header: 'Our Information',
  items: [{
    path: '/',
    label: 'Return Policy '
  }, {
    path: '/',
    label: 'Privacy Policy'
  }, {
    path: '/',
    label: 'Terms & Conditions'
  }, {
    path: '/',
    label: 'Site Map'
  }, {
    path: '/',
    label: 'Store Hours'
  }]
}, {
  header: 'My Account',
  items: [{
    path: '/',
    label: 'Press inquiries'
  }, {
    path: '/',
    label: 'Social media '
  }, {
    path: '/',
    label: 'directories'
  }, {
    path: '/',
    label: 'Images & B-roll'
  }, {
    path: '/',
    label: 'Permissions'
  }]
}, {
  header: 'Policy',
  items: [{
    path: '/',
    label: 'Application security'
  }, {
    path: '/',
    label: 'Software principles'
  }, {
    path: '/',
    label: 'Unwanted software policy'
  }, {
    path: '/',
    label: 'Responsible supply chain'
  }]
}]);

/***/ }),

/***/ "./src/components/footer/footer.js":
/*!*****************************************!*\
  !*** ./src/components/footer/footer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/link */ "./src/components/link.js");
/* harmony import */ var _footer_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer.data */ "./src/components/footer/footer.data.js");
var _jsxFileName = "C:\\reactprojects\\nexttry1\\src\\components\\footer\\footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */



function Footer() {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("footer", {
    sx: styles.footer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    sx: styles.footer.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.footer.footerTopArea,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, _footer_data__WEBPACK_IMPORTED_MODULE_3__["default"].map(({
    header,
    items
  }, i) => Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.footer.menus,
    key: i,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    sx: styles.footer.heading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 15
    }
  }, header), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("nav", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 15
    }
  }, items.map(({
    path,
    label
  }, i) => Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_link__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    path: path,
    key: i,
    label: label,
    sx: styles.footer.link,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 19
    }
  }))))))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    sx: styles.footer.copyright,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, "All right reserved - Design & Developed by", Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_link__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    path: "https://redq.io/",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, "RedQ, Inc")));
}
const styles = {
  footer: {
    container: {
      width: '100%',
      alignItems: 'stretch'
    },
    footerTopArea: {
      borderTop: '1px solid',
      borderTopColor: 'border_color',
      display: 'flex',
      flexWrap: 'wrap',
      pt: [7, null, 8],
      pb: ['10px', null, null, '20px'],
      px: [0, null, null, null, 4]
    },
    menus: {
      width: ['50%', null, null, '25%'],
      display: 'flex',
      flexDirection: 'column',
      mb: ['40px', null, null, '60px']
    },
    heading: {
      fontSize: [3, null, null, 4],
      color: 'text_secondary',
      fontWeight: '500',
      mb: [3, 4, 5, null, 6],
      lineHeight: '1.35'
    },
    link: {
      fontSize: ['14px', null, 1],
      color: 'text',
      fontWeight: 'body',
      mb: 2,
      cursor: 'pointer',
      transition: 'all 0.35s',
      display: 'block',
      textDecoration: 'none',
      lineHeight: [1.5, null, null, 1.6, 1.8],
      ':hover': {
        color: 'primary'
      },
      ':last-child': {
        mb: '0px'
      }
    },
    copyright: {
      fontSize: ['14px', null, 1],
      width: '100%',
      textAlign: 'center',
      p: ['20px 20px'],
      backgroundColor: '#FCFDFE',
      color: 'text',
      a: {
        textDecoration: 'none',
        color: 'inherit',
        pl: 1,
        transition: 'all 0.25s',
        '&:hover': {
          color: 'primary'
        }
      }
    }
  }
};

/***/ }),

/***/ "./src/components/header/header.data.js":
/*!**********************************************!*\
  !*** ./src/components/header/header.data.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  path: 'home',
  label: 'Home'
}, {
  path: 'feature',
  label: 'Features'
}, {
  path: 'testimonial',
  label: 'Testimonial'
}, {
  path: 'pricing',
  label: 'Pricing'
}]);

/***/ }),

/***/ "./src/components/header/header.js":
/*!*****************************************!*\
  !*** ./src/components/header/header.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-scroll */ "react-scroll");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/logo */ "./src/components/logo.js");
/* harmony import */ var assets_logo_dark_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/logo-dark.png */ "./src/assets/logo-dark.png");
/* harmony import */ var assets_logo_dark_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_logo_dark_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var assets_logo_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/logo.png */ "./src/assets/logo.png");
/* harmony import */ var assets_logo_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_logo_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _contexts_drawer_drawer_provider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../contexts/drawer/drawer.provider */ "./src/contexts/drawer/drawer.provider.js");
/* harmony import */ var _mobile_drawer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mobile-drawer */ "./src/components/header/mobile-drawer.js");
/* harmony import */ var _header_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header.data */ "./src/components/header/header.data.js");
var _jsxFileName = "C:\\reactprojects\\nexttry1\\src\\components\\header\\header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */









function Header({
  className
}) {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_contexts_drawer_drawer_provider__WEBPACK_IMPORTED_MODULE_7__["DrawerProvider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("header", {
    sx: styles.header,
    className: className,
    id: "header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    sx: styles.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_logo__WEBPACK_IMPORTED_MODULE_4__["default"], {
    src: className === 'sticky' ? assets_logo_dark_png__WEBPACK_IMPORTED_MODULE_5___default.a : assets_logo_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("h1", {
    style: {
      fontSize: '1rem'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }, "The Way of Success"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    as: "nav",
    sx: styles.nav,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, _header_data__WEBPACK_IMPORTED_MODULE_9__["default"].map(({
    path,
    label
  }, i) => Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_scroll__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    activeClass: "active",
    to: path,
    spy: true,
    smooth: true,
    offset: -70,
    duration: 500,
    key: i,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 15
    }
  }, label))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "donate__btn",
    variant: "secondary",
    "aria-label": "Get Started",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, "Get Started"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_mobile_drawer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }))));
}
const positionAnim = _emotion_core__WEBPACK_IMPORTED_MODULE_2__["keyframes"]`
  from {
    position: fixed;
    opacity: 1;
  }
  to {
    position: absolute;
    opacity: 1;
    transition: all 0.4s ease;
  }
`;
const styles = {
  header: {
    color: 'white',
    fontWeight: 'normal',
    py: 4,
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'transparent',
    transition: 'all 0.5s ease',
    animation: `${positionAnim} 0.4s ease`,
    '.donate__btn': {
      flexShrink: 0,
      mr: [15, 20, null, null, 0],
      ml: ['auto', null, null, null, 0]
    },
    '&.sticky': {
      position: 'fixed',
      backgroundColor: 'background',
      color: '#000000',
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.06)',
      py: 3,
      'nev > a': {
        color: 'text'
      },
      '.donate__btn': {
        borderColor: 'primary',
        color: 'primary',
        '&:hover': {
          boxShadow: 'rgba(31, 62, 118, 0.57) 0px 9px 20px -5px',
          backgroundColor: 'primary',
          color: 'white'
        }
      }
    }
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  nav: {
    mx: 'auto',
    display: 'none',
    '@media screen and (min-width: 1024px)': {
      display: 'block'
    },
    a: {
      fontSize: '16px',
      fontWeight: '400',
      px: 25,
      cursor: 'pointer',
      lineHeight: '1.2',
      '&.active': {
        color: 'secondary'
      }
    }
  }
};

/***/ }),

/***/ "./src/components/header/mobile-drawer.js":
/*!************************************************!*\
  !*** ./src/components/header/mobile-drawer.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-custom-scrollbars */ "react-custom-scrollbars");
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_drawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/drawer */ "./src/components/drawer.js");
/* harmony import */ var _contexts_drawer_drawer_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../contexts/drawer/drawer.context */ "./src/contexts/drawer/drawer.context.js");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/io */ "react-icons/io");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-scroll */ "react-scroll");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _header_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header.data */ "./src/components/header/header.data.js");
var _jsxFileName = "C:\\reactprojects\\nexttry1\\src\\components\\header\\mobile-drawer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const social = [{
  path: '/',
  icon: __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__["FaFacebookF"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  })
}, {
  path: '/',
  icon: __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__["FaTwitter"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  })
}, {
  path: '/',
  icon: __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__["FaGithubAlt"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  })
}, {
  path: '/',
  icon: __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__["FaDribbble"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  })
}];

const MobileDrawer = () => {
  const {
    state,
    dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_drawer_drawer_context__WEBPACK_IMPORTED_MODULE_4__["DrawerContext"]); // Toggle drawer

  const toggleHandler = react__WEBPACK_IMPORTED_MODULE_0___default.a.useCallback(() => {
    dispatch({
      type: 'TOGGLE'
    });
  }, [dispatch]);
  return __jsx(components_drawer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    width: "320px",
    drawerHandler: __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      sx: styles.handler,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }
    }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_5__["IoMdMenu"], {
      size: "26px",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 11
      }
    })),
    open: state.isOpen,
    toggleHandler: toggleHandler,
    closeButton: __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_5__["IoMdClose"], {
      size: "24px",
      color: "#000000",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 20
      }
    }),
    drawerStyle: styles.drawer,
    closeBtnStyle: styles.close,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }
  }, __jsx(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_2__["Scrollbars"], {
    autoHide: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.content,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.menu,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }
  }, _header_data__WEBPACK_IMPORTED_MODULE_8__["default"].map(({
    path,
    label
  }, i) => __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_6__["Link"], {
    activeClass: "active",
    to: path,
    spy: true,
    smooth: true,
    offset: -70,
    duration: 500,
    key: i,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 15
    }
  }, label))), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.menuFooter,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 11
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.social,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }
  }, social.map(({
    path,
    icon
  }, i) => __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "span",
    key: i,
    sx: styles.social.icon,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 17
    }
  }, __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_6__["Link"], {
    to: path,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 19
    }
  }, icon))))))));
};

const styles = {
  handler: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: '0',
    width: '26px',
    cursor: 'pointer',
    '@media screen and (min-width: 1024px)': {
      display: 'none'
    }
  },
  drawer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'dark'
  },
  close: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '25px',
    right: '30px',
    zIndex: '1',
    cursor: 'pointer'
  },
  content: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    pt: '100px',
    pb: '40px',
    px: '30px'
  },
  menu: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    a: {
      fontSize: '16px',
      fontWeight: '500',
      color: 'text_white',
      py: '15px',
      cursor: 'pointer',
      borderBottom: '1px solid #e8e5e5',
      transition: 'all 0.25s',
      '&:hover': {
        color: 'secondary'
      },
      '&.active': {
        color: 'secondary'
      }
    }
  },
  menuFooter: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    mt: 'auto'
  },
  social: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    icon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'text',
      fontSize: 14,
      mr: '15px',
      transition: 'all 0.25s',
      cursor: 'pointer',
      ':last-child': {
        mr: '0'
      },
      '&:hover': {
        color: 'secondary'
      }
    }
  },
  button: {
    color: 'white',
    fontSize: '14px',
    fw: '700',
    height: '45px',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    py: '0'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (MobileDrawer);

/***/ }),

/***/ "./src/components/image.js":
/*!*********************************!*\
  !*** ./src/components/image.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Image; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\reactprojects\\nexttry1\\src\\components\\image.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function Image(_ref) {
  let {
    src
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["src"]);

  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], _extends({
    src: src
  }, rest, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 10
    }
  }));
}

/***/ }),

/***/ "./src/components/layout.js":
/*!**********************************!*\
  !*** ./src/components/layout.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_stickynode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-stickynode */ "react-stickynode");
/* harmony import */ var react_stickynode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_stickynode__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _header_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header */ "./src/components/header/header.js");
/* harmony import */ var _footer_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer */ "./src/components/footer/footer.js");
var _jsxFileName = "C:\\reactprojects\\nexttry1\\src\\components\\layout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/** @jsx jsx */





function Layout({
  children
}) {
  const {
    0: isSticky,
    1: setIsSticky
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const handleStateChange = status => {
    if (status.status === react_stickynode__WEBPACK_IMPORTED_MODULE_2___default.a.STATUS_FIXED) {
      setIsSticky(true);
    } else if (status.status === react_stickynode__WEBPACK_IMPORTED_MODULE_2___default.a.STATUS_ORIGINAL) {
      setIsSticky(false);
    }
  };

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_stickynode__WEBPACK_IMPORTED_MODULE_2___default.a, {
    innerZ: 1001,
    top: 0,
    onStateChange: handleStateChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_header_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: `${isSticky ? 'sticky' : 'unSticky'}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])("main", {
    sx: {
      variant: 'layout.main'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, children), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_footer_footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }));
}

/***/ }),

/***/ "./src/components/link.js":
/*!********************************!*\
  !*** ./src/components/link.js ***!
  \********************************/
/*! exports provided: NavLink, Link */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavLink", function() { return NavLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\reactprojects\\nexttry1\\src\\components\\link.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/** @jsx jsx */


function NavLink(_ref) {
  let {
    path,
    label,
    children
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["path", "label", "children"]);

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: path,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["NavLink"], _extends({}, rest, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }), children ? children : label));
}
function Link(_ref2) {
  let {
    path,
    label,
    children
  } = _ref2,
      rest = _objectWithoutProperties(_ref2, ["path", "label", "children"]);

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Link"], _extends({}, rest, {
    href: path,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }), children ? children : label);
}

/***/ }),

/***/ "./src/components/list.js":
/*!********************************!*\
  !*** ./src/components/list.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return List; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\reactprojects\\nexttry1\\src\\components\\list.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function List({
  items = [],
  parentStyle,
  childStyle
}) {
  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "ul",
    sx: _objectSpread({
      listStyleType: 'none',
      margin: 0,
      padding: 0
    }, parentStyle),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, items.map(({
    icon,
    text,
    isAvailable
  }, i) => __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    className: isAvailable ? 'open' : 'closed',
    as: "li",
    sx: _objectSpread({}, childStyle),
    key: i,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
    sx: styles.listIcon,
    "aria-label": "list icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }, icon), text)));
}
const styles = {
  listIcon: {
    width: [25, '35px'],
    height: 'auto',
    color: 'secondary',
    padding: 0,
    fontSize: [2, 5],
    marginLeft: '-1px',
    flexShrink: 0,
    justifyContent: 'flex-start',
    marginTop: [1, '2px']
  }
};

/***/ }),

/***/ "./src/components/logo.js":
/*!********************************!*\
  !*** ./src/components/logo.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Logo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/link */ "./src/components/link.js");
var _jsxFileName = "C:\\reactprojects\\nexttry1\\src\\components\\logo.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/** @jsx jsx */


function Logo(_ref) {
  let {
    src
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["src"]);

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_link__WEBPACK_IMPORTED_MODULE_2__["Link"], _extends({
    path: "/",
    sx: {
      variant: 'links.logo',
      display: 'flex',
      cursor: 'pointer',
      mr: 15
    }
  }, rest, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: src,
    alt: "startup landing logo",
    style: {
      maxWidth: '4rem'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }));
}

/***/ }),

/***/ "./src/components/price-card.js":
/*!**************************************!*\
  !*** ./src/components/price-card.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PriceCard; });
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list */ "./src/components/list.js");
var _jsxFileName = "C:\\reactprojects\\nexttry1\\src\\components\\price-card.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function PriceCard({
  data: {
    header,
    name,
    description,
    priceWithUnit,
    buttonText = 'Start Free Trial',
    points
  }
}) {
  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Card"], {
    className: header ? 'active' : null,
    sx: styles.pricingBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, header && __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Text"], {
    sx: styles.header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 18
    }
  }, header), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Flex"], {
    sx: styles.pricingHeader,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Heading"], {
    className: "package__name",
    sx: styles.heading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, name), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Text"], {
    as: "p",
    sx: {
      opacity: header ? 1 : 0.7,
      color: header ? 'text' : 'white',
      fontSize: [1, 2],
      lineHeight: 1.3
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, description)), header && __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Text"], {
    className: "package__price",
    sx: styles.price,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 15
    }
  }, "Starting from"), __jsx("div", {
    className: "price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 15
    }
  }, priceWithUnit, __jsx("sub", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }, "mo")))), __jsx(_list__WEBPACK_IMPORTED_MODULE_2__["default"], {
    items: points,
    childStyle: styles.listItem,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    sx: {
      textAlign: 'center',
      mt: ['40px', null, null, null, null, '70px']
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    variant: header ? 'primary' : 'whiteButton',
    "aria-label": buttonText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }, buttonText))));
}
const styles = {
  pricingBox: {
    flex: ['0 1 100%', null, null, '0 1 50%', '0 1 45%', '0 1 40%', '0 1 38.5%'],
    background: '#2F5392',
    borderRadius: 10,
    ml: [0, null, null, 5],
    position: 'relative',
    mt: ['40px', null, null, 0],
    p: ['50px 15px 50px', null, '62px 25px 50px 25px', null, '62px 70px 50px 40px'],
    '@media screen and (min-width: 420px) and (max-width: 767px)': {
      maxWidth: '380px'
    },
    '&:first-of-type': {
      ml: 0,
      mt: 0
    },
    '&.active': {
      backgroundColor: 'white',
      '.package__name': {
        color: 'heading_secondary'
      },
      '.package__price > span': {
        color: 'text'
      },
      '.open': {
        color: 'text'
      },
      '.closed': {
        color: 'text',
        opacity: 0.6
      }
    }
  },
  header: {
    height: ['28px', null, null, null, '32px'],
    backgroundColor: '#EF9E48',
    borderRadius: '5px',
    fontWeight: 'bold',
    fontSize: '14px',
    lineHeight: '18px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#FFFFFF',
    position: 'absolute',
    top: [3, null, 4],
    letterSpacing: '-.14px',
    px: '10px'
  },
  heading: {
    fontWeight: 'bold',
    fontSize: [4, null, null, null, 5],
    lineHeight: '23px',
    color: '#ffffff',
    marginBottom: [1, null, '12px']
  },
  pricingHeader: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    mb: ['35px', null, null, null, null, '50px']
  },
  price: {
    fontWeight: 'bold',
    fontSize: [4, null, 5, null, '26px'],
    lineHeight: 1,
    display: 'flex',
    letterSpacing: '-0.5px',
    color: '#0F2137',
    marginBottom: 0,
    flexWrap: 'wrap',
    flexDirection: 'column',
    textAlign: 'right',
    mt: ['-3px', null, '2px'],
    '> span': {
      fontWeight: 'body',
      fontSize: [1, 2],
      lineHeight: 1.25,
      display: 'block',
      marginBottom: '10px',
      color: 'white'
    },
    '> .price': {
      marginBottom: 0,
      color: 'secondary',
      '> sub': {
        position: 'relative',
        bottom: '6px'
      }
    }
  },
  listItem: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: [1, null, null, null, 2],
    lineHeight: [1.7, null, 1.65],
    marginBottom: [3, '22px'],
    alignItems: 'flex-start',
    color: 'white',
    pr: [2, null, null, null, 0, 6],
    '&.closed': {
      opacity: 0.55,
      button: {
        color: '#788FB5'
      }
    }
  }
};

/***/ }),

/***/ "./src/components/rating.js":
/*!**********************************!*\
  !*** ./src/components/rating.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\reactprojects\\nexttry1\\src\\components\\rating.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Rating = ({
  rating
}) => {
  const totalRating = [];

  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      totalRating.push(__jsx("li", {
        className: "star",
        key: `rating-key${i}`,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 9
        }
      }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaStar"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 11
        }
      })));
    } else {
      totalRating.push(__jsx("li", {
        className: "star-o",
        key: `rating-key${i}`,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 9
        }
      }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaStar"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }
      })));
    }
  }

  return __jsx("div", {
    className: "rating",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, totalRating));
};

/* harmony default export */ __webpack_exports__["default"] = (Rating);

/***/ }),

/***/ "./src/components/section-header.js":
/*!******************************************!*\
  !*** ./src/components/section-header.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SectionHeader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\reactprojects\\nexttry1\\src\\components\\section-header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function SectionHeader({
  title,
  slogan,
  isWhite
}) {
  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: {
      variant: 'sectionHeader'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "p",
    sx: {
      variant: 'sectionHeader.subTitle',
      color: isWhite ? 'white' : 'heading',
      opacity: isWhite ? 0.7 : 1
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, slogan), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    as: "h2",
    sx: {
      variant: 'sectionHeader.title',
      color: isWhite ? 'white' : 'heading_secondary'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, title));
}

/***/ }),

/***/ "./src/components/seo.js":
/*!*******************************!*\
  !*** ./src/components/seo.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SEO; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\reactprojects\\nexttry1\\src\\components\\seo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function SEO({
  description = 'startup apps landing page',
  author = 'RedQ, Inc',
  meta,
  title = 'startup landing title'
}) {
  const metaData = [{
    name: `description`,
    content: description
  }, {
    property: `og:title`,
    content: title
  }, {
    property: `og:description`,
    content: description
  }, {
    property: `og:type`,
    content: `website`
  }, {
    name: `twitter:card`,
    content: `summary`
  }, {
    name: `twitter:creator`,
    content: author
  }, {
    name: `twitter:title`,
    content: title
  }, {
    name: `twitter:description`,
    content: description
  }].concat(meta);
  return __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, title), metaData.map(({
    name,
    content
  }, i) => __jsx("meta", {
    key: i,
    name: name,
    content: content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  })));
}
SEO.defaultProps = {
  lang: `en`,
  meta: []
};

/***/ }),

/***/ "./src/components/text-feature.js":
/*!****************************************!*\
  !*** ./src/components/text-feature.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TextFeature; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\reactprojects\\nexttry1\\src\\components\\text-feature.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */

function TextFeature({
  subTitle,
  title,
  description,
  btnName,
  btnURL = '#'
}) {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.card,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.wrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "p",
    sx: styles.wrapper.subTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, subTitle), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    as: "h2",
    sx: styles.wrapper.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, title)), description && Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "p",
    className: "description",
    sx: styles.description,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, description), btnName && Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    href: btnURL,
    variant: "default",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "primary",
    "aria-label": btnName,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }, btnName)));
}
const styles = {
  card: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexShrink: 0,
    a: {
      m: ['0 auto', null, null, 0]
    }
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    mt: '-5px',
    title: {
      fontSize: ['24px', null, '28px', '32px', '36px', '42px', null, '46px'],
      color: 'heading_secondary',
      lineHeight: [1.35, null, null, 1.3, 1.2],
      fontWeight: '700',
      letterSpacing: '-.5px',
      mb: 5
    },
    subTitle: {
      fontSize: [0, null, '14px'],
      color: 'heading',
      letterSpacing: '2px',
      textTransform: 'uppercase',
      fontWeight: '700',
      mb: [2, null, null, null, 3],
      lineHeight: 1.5
    }
  },
  description: {
    fontSize: ['15px', 2, null, null, null, '17px', null, 3],
    fontWeight: 400,
    lineHeight: [1.85, null, null, 2, null, '2.2'],
    color: 'text_secondary',
    mb: '30px'
  }
};

/***/ }),

/***/ "./src/contexts/app/app.provider.js":
/*!******************************************!*\
  !*** ./src/contexts/app/app.provider.js ***!
  \******************************************/
/*! exports provided: useStickyState, useStickyDispatch, StickyProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStickyState", function() { return useStickyState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStickyDispatch", function() { return useStickyDispatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StickyProvider", function() { return StickyProvider; });
/* harmony import */ var _create_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../create-context */ "./src/contexts/create-context.js");
/* harmony import */ var _app_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.reducer */ "./src/contexts/app/app.reducer.js");


const [state, useDispatch, provider] = Object(_create_context__WEBPACK_IMPORTED_MODULE_0__["useCreateContext"])(_app_reducer__WEBPACK_IMPORTED_MODULE_1__["initialState"], _app_reducer__WEBPACK_IMPORTED_MODULE_1__["reducer"]);
const useStickyState = state;
const useStickyDispatch = useDispatch;
const StickyProvider = provider;

/***/ }),

/***/ "./src/contexts/app/app.reducer.js":
/*!*****************************************!*\
  !*** ./src/contexts/app/app.reducer.js ***!
  \*****************************************/
/*! exports provided: initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialState = {
  isSticky: false,
  isSidebarSticky: true
};
function reducer(state, {
  type
}) {
  switch (type) {
    case 'SET_STICKY':
      return _objectSpread(_objectSpread({}, state), {}, {
        isSticky: true
      });

    case 'REMOVE_STICKY':
      return _objectSpread(_objectSpread({}, state), {}, {
        isSticky: false
      });

    case 'SET_SIDEBAR_STICKY':
      return _objectSpread(_objectSpread({}, state), {}, {
        isSidebarSticky: true
      });

    case 'REMOVE_SIDEBAR_STICKY':
      return _objectSpread(_objectSpread({}, state), {}, {
        isSidebarSticky: false
      });

    default:
      {
        throw new Error(`Unsupported action type: ${type}`);
      }
  }
}

/***/ }),

/***/ "./src/contexts/create-context.js":
/*!****************************************!*\
  !*** ./src/contexts/create-context.js ***!
  \****************************************/
/*! exports provided: useCreateContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCreateContext", function() { return useCreateContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\reactprojects\\nexttry1\\src\\contexts\\create-context.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function useCreateContext(defaultValue, reducer) {
  const defaultDispatch = () => defaultValue;

  const stateCtx = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(defaultValue);
  const dispatchCtx = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(defaultDispatch);

  function useStateCtx(property) {
    const state = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(stateCtx);
    return state[property]; // only one depth selector for comparison
  }

  function useDispatchCtx() {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(dispatchCtx);
  }

  function Provider({
    children
  }) {
    const [state, dispatch] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useReducer(reducer, defaultValue);
    return __jsx(dispatchCtx.Provider, {
      value: dispatch,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 7
      }
    }, __jsx(stateCtx.Provider, {
      value: state,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }
    }, children));
  }

  return [useStateCtx, useDispatchCtx, Provider];
}

/***/ }),

/***/ "./src/contexts/drawer/drawer.context.js":
/*!***********************************************!*\
  !*** ./src/contexts/drawer/drawer.context.js ***!
  \***********************************************/
/*! exports provided: DrawerContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawerContext", function() { return DrawerContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const DrawerContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({});

/***/ }),

/***/ "./src/contexts/drawer/drawer.provider.js":
/*!************************************************!*\
  !*** ./src/contexts/drawer/drawer.provider.js ***!
  \************************************************/
/*! exports provided: DrawerProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawerProvider", function() { return DrawerProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _drawer_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drawer.context */ "./src/contexts/drawer/drawer.context.js");
var _jsxFileName = "C:\\reactprojects\\nexttry1\\src\\contexts\\drawer\\drawer.provider.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const initialState = {
  isOpen: false
};

function reducer(state, action) {
  switch (action.type) {
    case 'TOGGLE':
      return _objectSpread(_objectSpread({}, state), {}, {
        isOpen: !state.isOpen
      });

    default:
      return state;
  }
}

const DrawerProvider = ({
  children
}) => {
  const {
    0: state,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(reducer, initialState);
  return __jsx(_drawer_context__WEBPACK_IMPORTED_MODULE_1__["DrawerContext"].Provider, {
    value: {
      state,
      dispatch
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, children);
};

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IndexPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var contexts_app_app_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! contexts/app/app.provider */ "./src/contexts/app/app.provider.js");
/* harmony import */ var theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! theme */ "./src/theme/index.js");
/* harmony import */ var components_seo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/seo */ "./src/components/seo.js");
/* harmony import */ var components_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/layout */ "./src/components/layout.js");
/* harmony import */ var sections_banner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sections/banner */ "./src/sections/banner.js");
/* harmony import */ var sections_key_feature__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sections/key-feature */ "./src/sections/key-feature.js");
/* harmony import */ var sections_core_feature__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sections/core-feature */ "./src/sections/core-feature.js");
/* harmony import */ var sections_feature__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sections/feature */ "./src/sections/feature.js");
/* harmony import */ var sections_partner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! sections/partner */ "./src/sections/partner.js");
/* harmony import */ var sections_workflow__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! sections/workflow */ "./src/sections/workflow.js");
/* harmony import */ var sections_testimonial__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! sections/testimonial */ "./src/sections/testimonial.js");
/* harmony import */ var sections_secure_payment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! sections/secure-payment */ "./src/sections/secure-payment.js");
/* harmony import */ var sections_package__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! sections/package */ "./src/sections/package.js");
/* harmony import */ var sections_faq__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! sections/faq */ "./src/sections/faq.js");
var _jsxFileName = "C:\\reactprojects\\nexttry1\\src\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
















function IndexPage() {
  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
    theme: theme__WEBPACK_IMPORTED_MODULE_3__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, __jsx(contexts_app_app_provider__WEBPACK_IMPORTED_MODULE_2__["StickyProvider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, __jsx(components_layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx(components_seo__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Startup Landing 004",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }), __jsx(sections_banner__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }), __jsx(sections_key_feature__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }), __jsx(sections_core_feature__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }), __jsx(sections_feature__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }), __jsx(sections_partner__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }), __jsx(sections_workflow__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }), __jsx(sections_testimonial__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }), __jsx(sections_secure_payment__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }), __jsx(sections_package__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }), __jsx(sections_faq__WEBPACK_IMPORTED_MODULE_15__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }))));
}

/***/ }),

/***/ "./src/sections/banner.js":
/*!********************************!*\
  !*** ./src/sections/banner.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Banner; });
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-modal-video */ "react-modal-video");
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_modal_video__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var assets_bannerBg_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/bannerBg.png */ "./src/assets/bannerBg.png");
/* harmony import */ var assets_bannerBg_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_bannerBg_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var assets_goal_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/goal.png */ "./src/assets/goal.png");
/* harmony import */ var assets_goal_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_goal_png__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\reactprojects\\nexttry1\\src\\sections\\banner.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/** @jsx jsx */







function Banner() {
  const {
    0: videoOpen,
    1: setVideoOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const handleClick = e => {
    e.preventDefault();
    setVideoOpen(true);
  };

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])("section", {
    sx: styles.banner,
    id: "home",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Container"], {
    sx: styles.banner.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    sx: styles.banner.contentBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Heading"], {
    as: "h1",
    variant: "heroPrimary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }, "Discover Real Knowledge with experts"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Text"], {
    as: "p",
    variant: "heroSecondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, "The most difficult part of making a successful carrier is getting started. Give your career a boost by learning industry skills, work on real-life projects, internships, and expert guidance."), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Flex"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    variant: "whiteButton",
    "aria-label": "Get Started",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, "Get Started"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_modal_video__WEBPACK_IMPORTED_MODULE_2___default.a, {
    channel: "youtube",
    isOpen: videoOpen,
    videoId: "ZNA9rmDsYVE",
    onClose: () => setVideoOpen(false),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 15
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    variant: "textButton",
    "aria-label": "Watch Video",
    onClick: handleClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 15
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaPlayCircle"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }), " Watch Video")))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    sx: styles.banner.imageBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Image"], {
    src: assets_goal_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    alt: "banner",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }))));
}
const styles = {
  banner: {
    overflow: ['hidden', 'initial', null, 'hidden'],
    backgroundImage: `url(${assets_bannerBg_png__WEBPACK_IMPORTED_MODULE_4___default.a})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'top left',
    backgroundSize: 'cover',
    borderBottomRightRadius: [100, 150, null, null, null, 250],
    pt: ['150px', null, null, null, null, null, '140px', '130px'],
    pb: ['100px', null, null, '110px', null, 10, '150px'],
    backgroundColor: 'primary',
    container: {
      display: 'flex'
    },
    contentBox: {
      width: ['100%', null, '85%', '55%', '50%', '55%'],
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      flexShrink: 0,
      pt: [0, null, null, null, null, null, 5, 7]
    },
    imageBox: {
      display: ['none', null, null, 'block'],
      justifyContent: 'center',
      ml: [0, null, null, '-110px', '-115px', '-150px', '-210px', '-270px'],
      mr: [0, null, null, '-145px', '-160px', '-180px', '-220px', '-250px'],
      mt: [0, null, null, '40px', 4, 7, 0],
      mb: [0, null, null, null, '-45px', '-70px', null, '-115px'],
      overflow: 'hidden',
      textAlign: 'center',
      width: '100%'
    }
  },
  sponsorTitle: {
    color: 'white',
    fontSize: [1, 2],
    opacity: 0.6,
    pr: 20,
    flexShrink: 0,
    pb: [2, null, 0]
  },
  sponsorBox: {
    pt: ['35px', null, null, null, null, '45px'],
    flexDirection: ['column', null, 'row'],
    sponsor: {
      display: 'flex',
      alignItems: 'center',
      '> a': {
        mr: [5, null, null, 4, 6],
        display: 'flex',
        '&:last-of-type': {
          mr: 0
        }
      }
    }
  }
};

/***/ }),

/***/ "./src/sections/core-feature.js":
/*!**************************************!*\
  !*** ./src/sections/core-feature.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CoreFeature; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_text_feature__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/text-feature */ "./src/components/text-feature.js");
/* harmony import */ var components_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/image */ "./src/components/image.js");
/* harmony import */ var assets_Success_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/Success.png */ "./src/assets/Success.png");
/* harmony import */ var assets_Success_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_Success_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var assets_core_feature_coaching_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/core-feature/coaching.png */ "./src/assets/core-feature/coaching.png");
/* harmony import */ var assets_core_feature_coaching_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_core_feature_coaching_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var assets_core_feature_tent_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/core-feature/tent.png */ "./src/assets/core-feature/tent.png");
/* harmony import */ var assets_core_feature_tent_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_core_feature_tent_png__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\reactprojects\\nexttry1\\src\\sections\\core-feature.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */






const data = {
  subTitle: 'Core features',
  title: 'Learn,Practice and Get Placed',
  features: [{
    id: 1,
    imgSrc: assets_core_feature_coaching_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    altText: 'Mentorship',
    title: 'Mentorship',
    text: 'Get mentorship at each phase of your learning and learn the right way in a fast and effective manner  '
  }, {
    id: 2,
    imgSrc: assets_core_feature_tent_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    altText: 'World Class Training',
    title: 'Training Camps',
    text: 'A real-time learning and practice training camps with live mentorship and guidance to boost your learning and give you an edge over the rest of the competition '
  }]
};
function CoreFeature() {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("section", {
    sx: styles.coreFeature,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    sx: styles.containerBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.thumbnail,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_image__WEBPACK_IMPORTED_MODULE_3__["default"], {
    src: assets_Success_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: "Thumbnail",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.contentBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.headingTop,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_text_feature__WEBPACK_IMPORTED_MODULE_2__["default"], {
    subTitle: data.subTitle,
    title: data.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    gap: "15px 0",
    columns: 1,
    sx: styles.grid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }, data.features.map(item => Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.card,
    key: item.id,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 15
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_image__WEBPACK_IMPORTED_MODULE_3__["default"], {
    src: item.imgSrc,
    alt: item.altText,
    sx: styles.img,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.wrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    sx: styles.wrapper.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 19
    }
  }, item.title), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    sx: styles.wrapper.subTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 19
    }
  }, item.text))))))));
}
const styles = {
  coreFeature: {
    py: [0, null, null, 2, null, 7],
    position: 'relative',
    '&::before': {
      position: 'absolute',
      content: '""',
      top: ['auto', null, null, '50%'],
      bottom: ['100px', 0, null, 'auto'],
      left: 0,
      background: 'linear-gradient(-157deg, #F6FAFD, #F9FCFC, #FCFDFC)',
      height: [350, 550, '60%'],
      width: '50%',
      zIndex: -1,
      borderTopRightRadius: '50%',
      borderBottomRightRadius: '50%',
      transform: ['translateY(0)', null, null, 'translateY(-50%)']
    }
  },
  containerBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: ['column', null, null, 'row']
  },
  thumbnail: {
    width: '900px'
  },
  contentBox: {
    width: ['100%', 450, 550, 350, 500, 570],
    pr: [0, null, 'auto', null, null, 80],
    pl: 'auto',
    flexShrink: 0
  },
  headingTop: {
    pl: [0, null, null, null, '35px', null, '55px', 6],
    mb: [3, null, null, null, 1],
    textAlign: ['center', null, null, 'left']
  },
  grid: {
    p: ['0 0px 35px', null, null, null, '0 20px 40px', null, '0 40px 40px', 0]
  },
  card: {
    display: 'flex',
    alignItems: 'flex-start',
    p: ['0 17px 20px', null, null, '0 0 20px', '20px 15px 17px', null, null, '25px 30px 23px'],
    backgroundColor: 'white',
    borderRadius: '10px',
    transition: 'all 0.3s',
    width: ['100%', '85%', null, '100%'],
    mx: 'auto',
    '&:hover': {
      boxShadow: ['0px 0px 0px rgba(0, 0, 0, 0)', null, null, null, '0px 8px 24px rgba(69, 88, 157, 0.07)']
    }
  },
  img: {
    width: ['100px', null, '55px'],
    height: 'auto',
    flexShrink: 0,
    mr: [3, 4]
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    mt: '-5px',
    title: {
      fontSize: 3,
      color: 'heading_secondary',
      lineHeight: 1.4,
      fontWeight: 700,
      mb: [2, null, null, null, 3]
    },
    subTitle: {
      fontSize: 1,
      fontWeight: 400,
      lineHeight: [1.85, null, 2]
    }
  }
};

/***/ }),

/***/ "./src/sections/faq.js":
/*!*****************************!*\
  !*** ./src/sections/faq.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Faq; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_section_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/section-header */ "./src/components/section-header.js");
/* harmony import */ var components_accordion_accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/accordion/accordion */ "./src/components/accordion/accordion.js");
var _jsxFileName = "C:\\reactprojects\\nexttry1\\src\\sections\\faq.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */



const faqs = [{
  title: 'How to contact with riders emergency ?',
  contents: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, "Get your website ads tests delivered at let collect sample from the victory of the managements that supplies best design system which guidelines ever with multiple features.")
}, {
  title: 'App installation failed, how to update system information?',
  contents: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, "Rhino skin maybe thick but it can be quite sensitive to sunburns and insect bites which is why they like wallow so much \u2013 when the mud dries it acts as protection from the sunburns and insects.")
}, {
  title: `Website response taking time, how to improve?`,
  contents: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, "Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home.")
}, {
  title: `New update fixed all bug and issues`,
  contents: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, "If you\u2019re looking to hunt a unicorn, but don\u2019t know where to begin, try Lake Superior State University in Sault Ste. Marie, Michigan. Since 1971, the university has issued permits to unicorn questers.")
}];
function Faq() {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("section", {
    sx: {
      variant: 'section.faq'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_section_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Frequently asked question",
    slogan: "Get your question answer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: {
      display: 'flex',
      width: ['100%', null, null, '650px', '745px'],
      flexDirection: 'column',
      mx: 'auto',
      my: -4
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_accordion_accordion__WEBPACK_IMPORTED_MODULE_3__["default"], {
    items: faqs,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 11
    }
  }))));
}

/***/ }),

/***/ "./src/sections/feature.js":
/*!*********************************!*\
  !*** ./src/sections/feature.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Feature; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_section_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/section-header */ "./src/components/section-header.js");
/* harmony import */ var components_feature_card_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/feature-card.js */ "./src/components/feature-card.js");
/* harmony import */ var assets_feature_video_tutorials_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/feature/video-tutorials.png */ "./src/assets/feature/video-tutorials.png");
/* harmony import */ var assets_feature_video_tutorials_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_feature_video_tutorials_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var assets_feature_teaching_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/feature/teaching.png */ "./src/assets/feature/teaching.png");
/* harmony import */ var assets_feature_teaching_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_feature_teaching_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var assets_feature_quiz_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/feature/quiz.png */ "./src/assets/feature/quiz.png");
/* harmony import */ var assets_feature_quiz_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_feature_quiz_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var assets_feature_assignment_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/feature/assignment.png */ "./src/assets/feature/assignment.png");
/* harmony import */ var assets_feature_assignment_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_feature_assignment_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var assets_feature_question_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! assets/feature/question.png */ "./src/assets/feature/question.png");
/* harmony import */ var assets_feature_question_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(assets_feature_question_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var assets_feature_businessman_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! assets/feature/businessman.png */ "./src/assets/feature/businessman.png");
/* harmony import */ var assets_feature_businessman_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(assets_feature_businessman_png__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "C:\\reactprojects\\nexttry1\\src\\sections\\feature.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */










const data = [{
  id: 1,
  imgSrc: assets_feature_video_tutorials_png__WEBPACK_IMPORTED_MODULE_4___default.a,
  altText: 'Practical Learning',
  title: 'Practical Learning',
  text: 'To gain practical knowledge, you need to explore various options and see what works the best.'
}, {
  id: 2,
  imgSrc: assets_feature_teaching_png__WEBPACK_IMPORTED_MODULE_5___default.a,
  altText: 'Interaction With Expert',
  title: 'Interaction With Expert',
  text: 'Interactive one to one sessions with Expert will provide you with a great opportunity to plan out your time and efforts to make the most of it.'
}, {
  id: 3,
  imgSrc: assets_feature_quiz_png__WEBPACK_IMPORTED_MODULE_6___default.a,
  altText: 'Quizzes',
  title: 'Quizzes',
  text: 'The Best way to grow strong is to work on your weaknesses Quizzes will help you to know your weaknesses and can work on them accordingly'
}, {
  id: 4,
  imgSrc: assets_feature_assignment_png__WEBPACK_IMPORTED_MODULE_7___default.a,
  altText: 'Real-time Assignments',
  title: 'Real-time Assignments',
  text: 'Work on real-life projects which will help you get hands-on experience in building applications that are up to the standard of the industry '
}, {
  id: 5,
  imgSrc: assets_feature_question_png__WEBPACK_IMPORTED_MODULE_8___default.a,
  altText: 'Doubt Checking',
  title: 'Doubt Checking',
  text: 'The road to learning a new skill is not that easy you make come across a lot of problems with are letting you down and you are stuck. We wont let that happen.'
}, {
  id: 6,
  imgSrc: assets_feature_businessman_png__WEBPACK_IMPORTED_MODULE_9___default.a,
  altText: 'Internships',
  title: 'Internships',
  text: 'When it comes down to practice your skill and make it more useful the best way to get pass it by working in a real-life environment in which our internship program helps you to shapen your skills'
}];
function Feature() {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("section", {
    sx: {
      variant: 'section.feature'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_section_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    slogan: "Best Benefits",
    title: "Meet exciting features",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    sx: styles.grid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }, data.map(item => Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_feature_card_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    key: item.id,
    src: item.imgSrc,
    alt: item.title,
    title: item.title,
    text: item.text,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }
  })))));
}
const styles = {
  grid: {
    pt: [0, null, null, null, null, null, null, 3],
    gridGap: ['37px 0', null, '45px 30px', null, '50px 30px', null, null, '90px 70px'],
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)', null, 'repeat(3,1fr)']
  }
};

/***/ }),

/***/ "./src/sections/key-feature.js":
/*!*************************************!*\
  !*** ./src/sections/key-feature.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KeyFeature; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_section_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/section-header */ "./src/components/section-header.js");
/* harmony import */ var components_feature_card_column_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/feature-card-column.js */ "./src/components/feature-card-column.js");
/* harmony import */ var assets_key_feature_practice_1_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/key-feature/practice (1).png */ "./src/assets/key-feature/practice (1).png");
/* harmony import */ var assets_key_feature_practice_1_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_key_feature_practice_1_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var assets_key_feature_help_1_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/key-feature/help (1).png */ "./src/assets/key-feature/help (1).png");
/* harmony import */ var assets_key_feature_help_1_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_key_feature_help_1_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var assets_key_feature_promotion_2_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/key-feature/promotion (2).png */ "./src/assets/key-feature/promotion (2).png");
/* harmony import */ var assets_key_feature_promotion_2_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_key_feature_promotion_2_png__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\reactprojects\\nexttry1\\src\\sections\\key-feature.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */







const data = [{
  id: 1,
  imgSrc: assets_key_feature_practice_1_png__WEBPACK_IMPORTED_MODULE_4___default.a,
  altText: 'Practical Learning',
  title: 'Practical Learning',
  text: 'The theory is all about reading a given set of materials and understanding what the materials want to convey. Whereas to gain practical knowledge, you need to explore various options and see what works the best.'
}, {
  id: 2,
  imgSrc: assets_key_feature_help_1_png__WEBPACK_IMPORTED_MODULE_5___default.a,
  altText: ' 24 *7 Mentor Support',
  title: '24 *7 Mentor Support',
  text: 'the Path to success can be tough but the right guidance and an expert helping hand can make this path  enjoyable and make your efforts count'
}, {
  id: 3,
  imgSrc: assets_key_feature_promotion_2_png__WEBPACK_IMPORTED_MODULE_6___default.a,
  altText: 'Internships',
  title: 'Internships',
  text: 'Industry leading curriculum designed by expert developers turned educators who have invested time to create quality content infused with unique teaching methodology.'
}];
function KeyFeature() {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("section", {
    sx: {
      variant: 'section.keyFeature'
    },
    id: "feature",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_section_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    slogan: "Quality features",
    title: "EXCLUSIVE FEATURES",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    sx: styles.grid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, data.map(item => Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_feature_card_column_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    key: item.id,
    src: item.imgSrc,
    alt: item.title,
    title: item.title,
    text: item.text,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  })))));
}
const styles = {
  grid: {
    px: [0, null, null, '40px', null, '80px'],
    pt: [0, null, null, null, null, null, null, 3],
    gridGap: ['35px 0', null, '40px 0'],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)', null, 'repeat(3,1fr)'],
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    '& > div': {
      px: [0, '15px', null, '25px', null, '30px', '40px', '60px']
    }
  }
};

/***/ }),

/***/ "./src/sections/package.js":
/*!*********************************!*\
  !*** ./src/sections/package.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Package; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_price_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/price-card */ "./src/components/price-card.js");
/* harmony import */ var components_section_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/section-header */ "./src/components/section-header.js");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/io */ "react-icons/io");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var assets_patternBG_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/patternBG.png */ "./src/assets/patternBG.png");
/* harmony import */ var assets_patternBG_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_patternBG_png__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\reactprojects\\nexttry1\\src\\sections\\package.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */





const packages = [{
  name: 'Free Plan',
  description: 'For Small teams or office',
  buttonText: 'Signup Now',
  points: [{
    icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoIosCheckmarkCircle"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 15
      }
    }),
    text: 'Ultimate access to all course, exercises and assessments',
    isAvailable: true
  }, {
    icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoIosCheckmarkCircle"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 15
      }
    }),
    text: 'Free access for all kind of exercise corrections with downloads.',
    isAvailable: true
  }, {
    icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoIosCheckmarkCircle"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 15
      }
    }),
    text: 'Total assessment corrections with free download access system',
    isAvailable: true
  }, {
    icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoIosCloseCircle"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 15
      }
    }),
    text: 'Unlimited download of courses on the mobile app contents',
    isAvailable: false
  }, {
    icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoIosCloseCircle"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 15
      }
    }),
    text: 'Download and print courses and exercises in PDF',
    isAvailable: false
  }]
}, {
  header: 'Recommended',
  name: 'Premium',
  description: 'For startup enterprise',
  priceWithUnit: '$29.99/',
  buttonText: 'Signup Now',
  points: [{
    icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoIosCheckmarkCircle"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 15
      }
    }),
    text: 'Ultimate access to all course, exercises and assessments',
    isAvailable: true
  }, {
    icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoIosCheckmarkCircle"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 15
      }
    }),
    text: 'Free access for all kind of exercise corrections with downloads.',
    isAvailable: true
  }, {
    icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoIosCheckmarkCircle"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 15
      }
    }),
    text: 'Total assessment corrections with free download access system',
    isAvailable: true
  }, {
    icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoIosCheckmarkCircle"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 15
      }
    }),
    text: 'Unlimited download of courses on the mobile app contents',
    isAvailable: true
  }, {
    icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoIosCheckmarkCircle"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 15
      }
    }),
    text: 'Download and print courses and exercises in PDF',
    isAvailable: true
  }]
}, {
  name: 'Free Plan',
  description: 'For Small teams or office',
  buttonText: 'Signup Now',
  points: [{
    icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoIosCheckmarkCircle"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 15
      }
    }),
    text: 'Ultimate access to all course, exercises and assessments',
    isAvailable: true
  }, {
    icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoIosCheckmarkCircle"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 15
      }
    }),
    text: 'Free access for all kind of exercise corrections with downloads.',
    isAvailable: true
  }, {
    icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoIosCheckmarkCircle"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 15
      }
    }),
    text: 'Total assessment corrections with free download access system',
    isAvailable: true
  }, {
    icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoIosCloseCircle"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 15
      }
    }),
    text: 'Unlimited download of courses on the mobile app contents',
    isAvailable: false
  }, {
    icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoIosCloseCircle"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 15
      }
    }),
    text: 'Download and print courses and exercises in PDF',
    isAvailable: false
  }]
}];
function Package() {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("section", {
    id: "pricing",
    sx: styles.pricing,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_section_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Let\u2019s see how it works",
    slogan: "Whats the function",
    isWhite: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 9
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    sx: {
      justifyContent: 'center',
      flexWrap: ['wrap', null, null, 'nowrap']
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 9
    }
  }, packages.map(packageData => Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_price_card__WEBPACK_IMPORTED_MODULE_2__["default"], {
    data: packageData,
    key: packageData.name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 13
    }
  })))));
}
const styles = {
  pricing: {
    backgroundColor: 'primary',
    backgroundImage: `url(${assets_patternBG_png__WEBPACK_IMPORTED_MODULE_5___default.a})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    py: [8, null, 9, null, null, 10],
    position: 'relative',
    '&::before': {
      position: 'absolute',
      content: '""',
      top: 0,
      right: 0,
      background: 'linear-gradient(-45deg, rgba(42,72,125, 0.3) 25%, transparent 25%, transparent 50%, rgba(42,72,125, 0.3) 50%, rgba(42,72,125, 0.3) 75%, transparent 75%, transparent)',
      width: '100%',
      backgroundSize: '350px 350px',
      height: '100%',
      opacity: 0.3,
      zIndex: 0
    }
  }
};

/***/ }),

/***/ "./src/sections/partner.js":
/*!*********************************!*\
  !*** ./src/sections/partner.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PartnerSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_text_feature__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/text-feature */ "./src/components/text-feature.js");
/* harmony import */ var components_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/image */ "./src/components/image.js");
/* harmony import */ var assets_partner_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/partner.png */ "./src/assets/partner.png");
/* harmony import */ var assets_partner_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_partner_png__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\reactprojects\\nexttry1\\src\\sections\\partner.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */




const data = {
  subTitle: 'Core features',
  title: 'Smart Jackpots that you may love this anytime & anywhere',
  description: 'Get your tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever. Get your tests delivered at let home collect sample.',
  btnName: 'Get Started',
  btnURL: '#'
};
function PartnerSection() {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("section", {
    sx: {
      variant: 'section.partner'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    sx: styles.containerBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.contentBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_text_feature__WEBPACK_IMPORTED_MODULE_2__["default"], {
    subTitle: data.subTitle,
    title: data.title,
    description: data.description,
    btnName: data.btnName,
    btnURL: data.btnURL,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: {
      px: [0, null, '40px', 0]
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_image__WEBPACK_IMPORTED_MODULE_3__["default"], {
    src: assets_partner_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: "Partner",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }))));
}
const styles = {
  containerBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: ['wrap', null, null, 'nowrap']
  },
  contentBox: {
    flexShrink: 0,
    px: [0, null, '30px', 0],
    textAlign: ['center', null, null, 'left'],
    width: ['100%', 450, 550, '350px', '410px', '485px'],
    mx: 'auto',
    pb: ['30px', null, null, 0],
    '.description': {
      pr: [0, null, null, null, 4]
    }
  }
};

/***/ }),

/***/ "./src/sections/secure-payment.js":
/*!****************************************!*\
  !*** ./src/sections/secure-payment.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SecurePayment; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_text_feature__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/text-feature */ "./src/components/text-feature.js");
/* harmony import */ var components_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/image */ "./src/components/image.js");
/* harmony import */ var assets_paymentThumb_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/paymentThumb.png */ "./src/assets/paymentThumb.png");
/* harmony import */ var assets_paymentThumb_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_paymentThumb_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var assets_payment_pattern_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/payment-pattern.png */ "./src/assets/payment-pattern.png");
/* harmony import */ var assets_payment_pattern_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_payment_pattern_png__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\reactprojects\\nexttry1\\src\\sections\\secure-payment.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */






const data = {
  subTitle: 'PAYMENT SECURITY',
  title: 'Secure Payment Transaction System with #1 Ranking',
  description: 'Get your tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever. Get your tests delivered at let home collect sample.',
  btnName: 'Learn More',
  btnURL: '#'
};
function SecurePayment() {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("section", {
    sx: {
      variant: 'section.securePayment'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.bgOverlay,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    sx: styles.containerBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.thumbnail,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_image__WEBPACK_IMPORTED_MODULE_3__["default"], {
    src: assets_paymentThumb_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: data.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.contentBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_text_feature__WEBPACK_IMPORTED_MODULE_2__["default"], {
    subTitle: data.subTitle,
    title: data.title,
    description: data.description,
    btnName: data.btnName,
    btnURL: data.btnURL,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }))));
}
const styles = {
  bgOverlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    height: '100%',
    zIndex: -1,
    width: ['100%', null, null, 'calc(50% + 400px)', 'calc(50% + 480px)', 'calc(50% + 570px)', null, 'calc(50% + 625px)'],
    backgroundImage: `url(${assets_payment_pattern_png__WEBPACK_IMPORTED_MODULE_5___default.a})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'top left',
    backgroundSize: 'cover'
  },
  containerBox: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexWrap: ['wrap', null, null, 'nowrap']
  },
  thumbnail: {
    mb: -2,
    ml: [-4, '-40px', null, null, 0],
    order: [2, null, null, 0],
    pr: [6, null, 7, 0]
  },
  contentBox: {
    width: ['100%', 420, 480, 380, 500, 570],
    mx: 'auto',
    flexShrink: 0,
    textAlign: ['center', null, null, 'left'],
    pt: [0, null, null, 4, '50px', null, 4, '80px'],
    pl: [0, null, null, 40, '90px'],
    pb: [7, null, null, 9],
    pr: [0, null, null, null, null, 6]
  }
};

/***/ }),

/***/ "./src/sections/testimonial.js":
/*!*************************************!*\
  !*** ./src/sections/testimonial.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TestimonialCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_section_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/section-header */ "./src/components/section-header.js");
/* harmony import */ var components_rating__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/rating */ "./src/components/rating.js");
/* harmony import */ var components_button_group__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/button-group */ "./src/components/button-group.js");
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-multi-carousel */ "react-multi-carousel");
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var assets_testimonial_avatar1_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/testimonial/avatar1.png */ "./src/assets/testimonial/avatar1.png");
/* harmony import */ var assets_testimonial_avatar1_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_testimonial_avatar1_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var assets_testimonial_avatar2_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/testimonial/avatar2.png */ "./src/assets/testimonial/avatar2.png");
/* harmony import */ var assets_testimonial_avatar2_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_testimonial_avatar2_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var assets_testimonial_avatar3_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! assets/testimonial/avatar3.png */ "./src/assets/testimonial/avatar3.png");
/* harmony import */ var assets_testimonial_avatar3_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(assets_testimonial_avatar3_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var assets_testimonial_avatar4_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! assets/testimonial/avatar4.png */ "./src/assets/testimonial/avatar4.png");
/* harmony import */ var assets_testimonial_avatar4_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(assets_testimonial_avatar4_png__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "C:\\reactprojects\\nexttry1\\src\\sections\\testimonial.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */









const data = [{
  id: 1,
  title: 'Modern look & trending design',
  description: '"I  have worked with Dave’s Brothers Technology , As a Android Developer . Akash Dev Sir Always  helped  me  to whenever  I was Needed  to Learn new Technology For  The Project’s. My Work Experience was Extremely Good with Akash Dave Sir. Akash  Sir Always Care to Employees and as well as Clients. They Always try to Full fill all Requirements of the Clients. Akash Dave Doing Great Work. ”',
  avatar: assets_testimonial_avatar1_png__WEBPACK_IMPORTED_MODULE_6___default.a,
  name: 'Kalka Prashad',
  designation: '@KalkaPrashad',
  review: 4
}, {
  id: 2,
  title: 'Design Quality & performance',
  description: 'Daway is great platform to learn technologies, peoples who want to learn programming from scratch this is a awesome platform them ,they insure that every person can study comfortably according to their pace. Highly recommended for people who want to start their career in IT',
  avatar: assets_testimonial_avatar2_png__WEBPACK_IMPORTED_MODULE_7___default.a,
  name: 'Rishi Choubey',
  designation: '@RishiChoubey',
  review: 5
}, {
  id: 3,
  title: 'Layout and organized layers',
  description: 'Daway is a best platform for learning, Im doing my internship from here , Mentors are ready to guide\tech  any time whenever I stuck on perticular problem . Im getting to learn  new technologies in a perfect manner with perfect tutors , Along with teaching they also motivates us,  to create a curiosity to learn  more.',
  avatar: assets_testimonial_avatar3_png__WEBPACK_IMPORTED_MODULE_8___default.a,
  name: 'Gyatri Tiwari',
  designation: '@GyatriTiwari',
  review: 5
}, {
  id: 4,
  title: 'Modern look & trending design',
  description: ' learned a lot in Daway.  with doing self study, I also get the guidance of teachers which is very helpful.',
  avatar: assets_testimonial_avatar4_png__WEBPACK_IMPORTED_MODULE_9___default.a,
  name: 'ajeeta Sahu',
  designation: '@ajeetaSahu',
  review: 4
}, {
  id: 5,
  title: 'Modern look & trending design',
  description: ' I am working as a intern in daway technology form last 3 months and here is some points about my internship experience.They more focus on self learning rather then just teaching or explaining topics.They help to upgrade programming logics  They improved my Designing skills. Trainer and fellow interns are also very helpful and kind.',
  avatar: assets_testimonial_avatar4_png__WEBPACK_IMPORTED_MODULE_9___default.a,
  name: 'Aakansha Sahu',
  designation: '@AakanshaSahu',
  review: 5
}];
const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1619
    },
    items: 4,
    slidesToSlide: 4 // optional, default to 1.

  },
  laptop: {
    breakpoint: {
      max: 1619,
      min: 1024
    },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.

  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 640
    },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.

  },
  mobile: {
    breakpoint: {
      max: 639,
      min: 0
    },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.

  }
};
function TestimonialCard() {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("section", {
    id: "testimonial",
    sx: {
      variant: 'section.testimonial'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_section_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    slogan: "Testimonial",
    title: "WHAT OUR STUDENTS SAY ABOUT US",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.carouselWrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_multi_carousel__WEBPACK_IMPORTED_MODULE_5___default.a, {
    autoPlay: true,
    additionalTransfrom: 0,
    arrows: false,
    autoPlaySpeed: 3000,
    centerMode: false,
    className: "",
    containerClass: "carousel-container",
    customButtonGroup: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_button_group__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 30
      }
    }),
    dotListClass: "",
    draggable: true,
    focusOnSelect: false,
    infinite: true,
    itemClass: "",
    keyBoardControl: true,
    minimumTouchDrag: 80,
    renderButtonGroupOutside: true,
    renderDotsOutside: false,
    responsive: responsive,
    showDots: false,
    sliderClass: "",
    slidesToSlide: 1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }
  }, data.map(item => Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.reviewCard,
    key: `testimonial--key${item.id}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 13
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_rating__WEBPACK_IMPORTED_MODULE_3__["default"], {
    rating: item.review,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 15
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    as: "h3",
    sx: styles.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 15
    }
  }, item.title), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    sx: styles.description,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 15
    }
  }, item.description), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    className: "card-footer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 15
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    className: "image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 17
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: item.avatar,
    alt: "Client Image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 19
    }
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    className: "reviewer-info",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 17
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    as: "h4",
    sx: styles.heading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 19
    }
  }, item.name), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    sx: styles.designation,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 19
    }
  }, item.designation))))))));
}
const styles = {
  carouselWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    alignItems: 'flex-end',
    mt: '-35px',
    px: '15px',
    '.carousel-container': {
      width: '100%',
      maxWidth: ['100%', null, null, '750px', '1000px', '1180px', null, 'calc(50% + 865px)'],
      mr: ['auto', null, null, null, null, null, null, '-220px'],
      ml: 'auto',
      '.react-multi-carousel-item': {
        transition: 'all 0.25s'
      },
      '.react-multi-carousel-item--active:nth-of-type(4n)': {
        opacity: '0.5',
        '@media screen and (max-width: 1620px)': {
          opacity: 1
        }
      }
    }
  },
  reviewCard: {
    boxShadow: '0px 0px 1px rgba(38, 78, 118, 0.35)',
    transition: 'all 0.3s',
    borderRadius: '6px',
    p: ['30px 20px 35px', '30px 25px 35px', '30px 20px 35px', '35px 30px 40px 40px', '30px 30px 35px', '35px 30px 40px 40px'],
    bg: 'white',
    textAlign: 'left',
    m: ['28px 5px 30px 5px', '28px 20px 30px 20px', '28px 15px 30px 15px', '28px 15px 30px 15px', '30px 20px 40px'],
    '&:hover': {
      boxShadow: '0px 6px 47px rgba(38, 78, 118, 0.1)'
    },
    '.rating': {
      mb: [1, null, null, 2],
      ul: {
        pl: 0,
        listStyle: 'none',
        mb: 0,
        display: 'flex'
      },
      svg: {
        marginRight: '2px',
        '&:last-of-type': {
          marginRight: 0
        }
      },
      '.star': {
        color: 'yellow',
        mr: '1px'
      },
      '.star-o': {
        color: '#ddd',
        mr: '1px'
      }
    },
    '.card-footer': {
      display: 'flex',
      alignItems: 'center',
      marginTop: [5, null, null, '33px'],
      '.image': {
        flexShrink: 0,
        mr: [3, null, null, 4],
        display: 'flex',
        img: {
          width: '55px',
          height: '55px',
          borderRadius: '50%',
          objectFit: 'cover'
        }
      }
    }
  },
  title: {
    fontSize: [1, 2],
    fontWeight: 700,
    mb: [3, null, null, '22px'],
    color: 'text',
    lineHeight: 1.6
  },
  description: {
    fontSize: [1, null, null, 2],
    fontWeight: 'normal',
    color: 'text',
    lineHeight: [1.85, null, 2]
  },
  heading: {
    fontSize: [1, null, null, 2],
    fontWeight: 700,
    mb: '3px',
    color: 'text',
    lineHeight: 1.3
  },
  designation: {
    color: '#25A0FF',
    fontWeight: '500',
    fontSize: 1,
    lineHeight: 1.4
  }
};

/***/ }),

/***/ "./src/sections/workflow.js":
/*!**********************************!*\
  !*** ./src/sections/workflow.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WorkFlow; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_section_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/section-header */ "./src/components/section-header.js");
/* harmony import */ var assets_patternBG_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/patternBG.png */ "./src/assets/patternBG.png");
/* harmony import */ var assets_patternBG_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(assets_patternBG_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var assets_arrowOdd_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/arrowOdd.png */ "./src/assets/arrowOdd.png");
/* harmony import */ var assets_arrowOdd_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_arrowOdd_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var assets_arrowEven_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/arrowEven.png */ "./src/assets/arrowEven.png");
/* harmony import */ var assets_arrowEven_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_arrowEven_png__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\reactprojects\\nexttry1\\src\\sections\\workflow.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */






const data = [{
  id: 1,
  title: 'Set disbursement Instructions',
  text: 'Get your blood tests delivered at home collect a sample from the your blood tests.'
}, {
  id: 2,
  title: 'Assembly retrieves funds from your account',
  text: 'Get your blood tests delivered at home collect a sample from the your blood tests.'
}, {
  id: 3,
  title: 'Assembly initiates disbursement',
  text: 'Get your blood tests delivered at home collect a sample from the your blood tests.'
}, {
  id: 4,
  title: 'Customer receives funds payment',
  text: 'Get your blood tests delivered at home collect a sample from the your blood tests.'
}];
function WorkFlow() {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("section", {
    sx: styles.workflow,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_section_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    slogan: "Whats the function",
    title: "Let\u2019s see how it works",
    isWhite: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    sx: styles.grid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, data.map(item => Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.card,
    key: item.id,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.iconBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 15
    }
  }, `0${item.id}`), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.wrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 15
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    sx: styles.wrapper.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }, item.title), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    sx: styles.wrapper.subTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  }, item.text)))))));
}
const styles = {
  workflow: {
    backgroundColor: 'primary',
    backgroundImage: `url(${assets_patternBG_png__WEBPACK_IMPORTED_MODULE_3___default.a})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    position: 'relative',
    py: [8, null, 9, null, null, 10],
    '&::before': {
      position: 'absolute',
      content: '""',
      top: 0,
      right: 0,
      background: 'linear-gradient(-45deg, rgba(42,72,125, 0.3) 25%, transparent 25%, transparent 50%, rgba(42,72,125, 0.3) 50%, rgba(42,72,125, 0.3) 75%, transparent 75%, transparent)',
      width: '100%',
      backgroundSize: '350px 350px',
      height: '100%',
      opacity: 0.3,
      zIndex: 0
    }
  },
  grid: {
    mb: -1,
    pt: 0,
    gridGap: ['35px 0', null, '45px 50px', null, '50px 25px', null, null, '50px 65px'],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)', null, 'repeat(4,1fr)']
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    textAlign: ['center', null, 'left'],
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    '&::before': {
      position: 'absolute',
      content: '""',
      top: 0,
      left: [0, null, null, null, null, 75, null, 100],
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'center center',
      width: 215,
      height: 60,
      opacity: 0.3,
      '@media screen and (max-width:1220px)': {
        display: 'none'
      }
    },
    '&:nth-of-type(2n-1)::before': {
      backgroundImage: `url(${assets_arrowOdd_png__WEBPACK_IMPORTED_MODULE_4___default.a})`
    },
    '&:nth-of-type(2n)::before': {
      backgroundImage: `url(${assets_arrowEven_png__WEBPACK_IMPORTED_MODULE_5___default.a})`,
      top: 17
    },
    '&:last-child::before': {
      display: 'none'
    }
  },
  iconBox: {
    width: ['50px', null, '60px', null, null, '70px'],
    height: ['50px', null, '60px', null, null, '70px'],
    flexShrink: 0,
    borderRadius: [15, null, 23, null, null, 30],
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    mb: [5, null, null, null, null, 6],
    mx: ['auto', null, 0],
    fontSize: [6, null, 7, null, null, '30px'],
    fontWeight: 700,
    justifyContent: 'center',
    color: '#234582'
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    mt: '-5px',
    title: {
      fontSize: [3, null, 4, null, null, 5],
      color: 'white',
      lineHeight: [1.4, null, null, null, null, 1.55],
      pr: [0, null, null, null, null, 2],
      mb: [2, 3]
    },
    subTitle: {
      fontSize: 1,
      fontWeight: 400,
      lineHeight: [1.85, null, null, 1.9, 2],
      color: 'white',
      opacity: 0.65,
      pr: [0, null, null, null, null, 5]
    }
  }
};

/***/ }),

/***/ "./src/theme/index.js":
/*!****************************!*\
  !*** ./src/theme/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  // example colors with dark mode
  colors: {
    text: '#343D48',
    // body color and primary color
    text_secondary: '#02073E',
    // secondary body color
    heading: '#244886',
    // primary heading color
    heading_secondary: '#0F2137',
    // heading color
    background: '#FFFFFF',
    // body background color
    background_secondary: '#F9FBFD',
    // secondary background color
    border_color: '#E5ECF4',
    // border color
    primary: '#1F3E76',
    // primary button and link color
    secondary: '#25CB9E',
    // secondary color - can be used for hover states
    muted: '#7B8188',
    // muted color
    accent: '#609',
    // a contrast color for emphasizing UI
    yellow: '#F6C416',
    // highlight	a background color for highlighting text
    modes: {
      dark: {
        text: '#fff',
        background: '#000',
        primary: '#0cf',
        secondary: '#09c',
        muted: '#111'
      }
    }
  },
  breakpoints: ['480px', '640px', '768px', '1024px', '1220px', '1366px', '1620px'],
  fonts: {
    body: "'DM Sans', sans-serif",
    heading: "'DM Sans', sans-serif"
  },
  fontSizes: [12, 15, 16, 18, 20, 22, 24, 28, 32, 36, 42, 48, 52, 64],
  fontWeights: {
    body: 'normal',
    heading: 500,
    bold: 700
  },
  lineHeights: {
    body: 1.8,
    heading: 1.5
  },
  letterSpacings: {
    body: 'normal',
    caps: '0.2em',
    heading: '-0.5px'
  },
  space: [0, 5, 10, 15, 20, 25, 30, 50, 80, 100, 120, 150],
  // variants can use custom, user-defined names
  layout: {
    container: {
      maxWidth: ['100%', null, null, '780px', '1020px', '1200px', null, '1310px'],
      px: [4, 6]
    },
    header: {
      color: '#02073E',
      fontWeight: 'normal',
      py: 3,
      position: 'absolute',
      width: '100%'
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    main: {}
  },
  section: {
    keyFeature: {
      py: [8, null, 9, null, null, 10]
    },
    feature: {
      py: [8, null, 9, null, null, 10]
    },
    partner: {
      pt: [2, null, null, 5],
      pb: [8, null, 9, null, null, 10]
    },
    testimonial: {
      py: [8, null, 9, null, null, 10],
      overflow: 'hidden'
    },
    securePayment: {
      overflow: 'hidden',
      position: 'relative',
      pt: 9
    },
    faq: {
      py: [8, null, 9, null, null, 10]
    }
  },
  sectionHeader: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    mt: -1,
    marginBottom: ['50px', null, '60px', null, '65px', '75px'],
    title: {
      fontSize: ['24px', null, '28px', null, null, '32px', null, '36px'],
      color: 'heading_secondary',
      lineHeight: [1.3, null, null, 1.2],
      textAlign: 'center',
      fontWeight: '700',
      letterSpacing: '-.5px'
    },
    subTitle: {
      fontSize: [0, null, '14px'],
      color: 'heading',
      textAlign: 'center',
      letterSpacing: ['1.5px', null, '2px'],
      textTransform: 'uppercase',
      fontWeight: '700',
      mb: '8px',
      lineHeight: 1.5
    }
  },
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 4,
      letterSpacing: 'heading',
      color: 'heading'
    },
    heroPrimary: {
      color: 'white',
      fontSize: ['40px', '52px', '60px', '48px', '52px', '60px', '66px', '78px'],
      lineHeight: 1.2,
      fontWeight: 700,
      mb: [5, null, null, null, '30px']
    },
    heroSecondary: {
      color: 'white',
      fontSize: [2, 3, 4, '17px', null, 3, '19px', 4],
      lineHeight: [2, null, null, null, 2.2],
      fontWeight: 'body',
      pr: [0, null, null, null, null, '100px', null, '125px'],
      mb: ['35px', null, null, null, '40px', null, null, 7]
    },
    title: {
      // extends the text.heading styles
      variant: 'text.heading',
      fontWeight: 'bold',
      fontSize: 18,
      lineHeight: '30px',
      color: '#0F2137'
    },
    lead: {
      fontSize: 40,
      fontFamily: 'DM Sans',
      fontWeight: '500',
      lineHeight: '60px',
      letterSpacing: '-1.5px',
      color: '#0F2137'
    },
    muted: {
      lineHeight: '26px',
      color: 'muted'
    },
    secondary: {
      fontWeight: 500,
      color: '#00A99D',
      lineHeight: '40px'
    }
  },
  links: {
    default: {
      cursor: 'pointer'
    },
    bold: {
      fontWeight: 'bold'
    },
    nav: {
      display: ['none', null, 'inline-block'],
      px: 25,
      fontWeight: 'normal'
    },
    footer: {
      display: 'block',
      px: 0,
      color: 'inherit',
      textDecoration: 'none'
    },
    logo: {
      display: 'flex'
    }
  },
  images: {
    avatar: {
      width: 48,
      height: 48,
      borderRadius: 99999
    }
  },
  // variants for buttons
  buttons: {
    menu: {
      display: [null, null, 'none']
    },
    // default variant for MenuButton
    // you can reference other values defined in the theme
    defaultBtn: {
      borderRadius: '45px',
      fontSize: ['14px', 1, null, null, 2],
      letterSpacings: ['-0.5px', null, null, null, '-0.15px'],
      padding: ['11px 20px 10px', null, null, null, '13px 30px'],
      fontFamily: 'body',
      cursor: 'pointer',
      lineHeight: 1.2,
      transition: 'all 0.25s',
      fontWeight: 500,
      '&:focus': {
        outline: 0
      }
    },
    primary: {
      variant: 'buttons.defaultBtn',
      color: 'white',
      bg: 'primary',
      '&:hover': {
        boxShadow: 'rgba(31, 62, 118, 0.57) 0px 9px 20px -5px'
      }
    },
    whiteButton: {
      variant: 'buttons.defaultBtn',
      color: 'heading_secondary',
      bg: 'white',
      '&:hover': {
        boxShadow: 'rgba(0, 0, 0, 0.5) 0px 12px 24px -10px'
      }
    },
    secondary: {
      variant: 'buttons.defaultBtn',
      border: '1.5px solid white',
      backgroundColor: 'transparent',
      color: 'white',
      '&:hover': {
        bg: 'white',
        color: 'heading_secondary'
      }
    },
    textButton: {
      variant: 'buttons.defaultBtn',
      backgroundColor: 'transparent',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      svg: {
        fontSize: [4, 6],
        mr: 2
      }
    }
  },
  cards: {
    primary: {
      padding: 2,
      borderRadius: 4
    },
    offer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      flex: ['1 1 calc(50% - 16px)', '1 1 20%'],
      minHeight: 130,
      m: 2,
      background: '#FFFFFF',
      border: '1px solid #EDEFF6',
      borderRadius: 5
    },
    featureCard: {
      display: 'flex',
      alignItems: 'flex-start',
      flexDirection: 'row',
      p: 3
    }
  },
  forms: {
    label: {
      fontSize: 1,
      fontWeight: 'bold'
    },
    input: {
      borderRadius: 8,
      borderColor: 'border_color',
      height: 60,
      '&:focus': {
        borderColor: 'primary',
        boxShadow: t => `0 0 0 2px ${t.colors.primary}`,
        outline: 'none'
      }
    }
  },
  badges: {
    primary: {
      color: 'background',
      bg: '#28A5FF',
      borderRadius: 30,
      p: '3px 11px',
      fontSize: 1,
      letterSpacing: '-0.5px'
    },
    outline: {
      color: 'primary',
      bg: 'transparent',
      boxShadow: 'inset 0 0 0 1px'
    }
  },
  styles: {
    // To add base, top-level styles to the <body> element, use theme.styles.root.
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      fontSmoothing: 'antialiased',
      '.modal-video-close-btn': {
        cursor: 'pointer',
        top: '-25px',
        right: '-25px',
        width: ' 25px',
        height: '25px'
      },
      '.modal-video-movie-wrap': {
        margin: 6,
        width: 'auto'
      }
    },
    // Divider styles
    hr: {
      border: 0,
      borderBottom: '1px solid',
      borderColor: '#D9E0E7'
    },
    // also you can use other HTML elements style here
    ul: {
      listStyle: 'none'
    },
    srOnly: {
      border: '0 !important',
      clip: 'rect(1px, 1px, 1px, 1px) !important',
      clipPath: 'inset(50%) !important',
      height: '1px !important',
      margin: '-1px !important',
      overflow: 'hidden !important',
      padding: '0 !important',
      position: 'absolute !important',
      width: '1px !important',
      whiteSpace: 'nowrap !important'
    }
  }
});

/***/ }),

/***/ "@emotion/core":
/*!********************************!*\
  !*** external "@emotion/core" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@emotion/core");

/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("framer-motion");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "rc-drawer":
/*!****************************!*\
  !*** external "rc-drawer" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rc-drawer");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-custom-scrollbars":
/*!******************************************!*\
  !*** external "react-custom-scrollbars" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-custom-scrollbars");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),

/***/ "react-icons/io":
/*!*********************************!*\
  !*** external "react-icons/io" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/io");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-modal-video":
/*!************************************!*\
  !*** external "react-modal-video" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-modal-video");

/***/ }),

/***/ "react-multi-carousel":
/*!***************************************!*\
  !*** external "react-multi-carousel" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-multi-carousel");

/***/ }),

/***/ "react-scroll":
/*!*******************************!*\
  !*** external "react-scroll" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-scroll");

/***/ }),

/***/ "react-stickynode":
/*!***********************************!*\
  !*** external "react-stickynode" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-stickynode");

/***/ }),

/***/ "theme-ui":
/*!***************************!*\
  !*** external "theme-ui" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("theme-ui");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhdGgtbWF0Y2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcHJlcGFyZS1kZXN0aW5hdGlvbi50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yZXNvbHZlLXJld3JpdGVzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL1N1Y2Nlc3MucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvYXJyb3dFdmVuLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2Fycm93T2RkLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2Jhbm5lckJnLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2NvcmUtZmVhdHVyZS9jb2FjaGluZy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9jb3JlLWZlYXR1cmUvdGVudC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9mZWF0dXJlL2Fzc2lnbm1lbnQucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvZmVhdHVyZS9idXNpbmVzc21hbi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9mZWF0dXJlL3F1ZXN0aW9uLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ZlYXR1cmUvcXVpei5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9mZWF0dXJlL3RlYWNoaW5nLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ZlYXR1cmUvdmlkZW8tdHV0b3JpYWxzLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2dvYWwucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMva2V5LWZlYXR1cmUvaGVscCAoMSkucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMva2V5LWZlYXR1cmUvcHJhY3RpY2UgKDEpLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2tleS1mZWF0dXJlL3Byb21vdGlvbiAoMikucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvbG9nby1kYXJrLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2xvZ28ucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvcGFydG5lci5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9wYXR0ZXJuQkcucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvcGF5bWVudC1wYXR0ZXJuLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3BheW1lbnRUaHVtYi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy90ZXN0aW1vbmlhbC9hdmF0YXIxLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3Rlc3RpbW9uaWFsL2F2YXRhcjIucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvdGVzdGltb25pYWwvYXZhdGFyMy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy90ZXN0aW1vbmlhbC9hdmF0YXI0LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hY2NvcmRpb24vYWNjb3JkaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FjY29yZGlvbi9iYXNlLWFjY29yZGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hY2NvcmRpb24vc2hhcmVkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2J1dHRvbi1ncm91cC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kcmF3ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZmVhdHVyZS1jYXJkLWNvbHVtbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9mZWF0dXJlLWNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5kYXRhLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5kYXRhLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL21vYmlsZS1kcmF3ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sb2dvLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3ByaWNlLWNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcmF0aW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NlY3Rpb24taGVhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3Nlby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90ZXh0LWZlYXR1cmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRleHRzL2FwcC9hcHAucHJvdmlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRleHRzL2FwcC9hcHAucmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGV4dHMvY3JlYXRlLWNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRleHRzL2RyYXdlci9kcmF3ZXIuY29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGV4dHMvZHJhd2VyL2RyYXdlci5wcm92aWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlY3Rpb25zL2Jhbm5lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VjdGlvbnMvY29yZS1mZWF0dXJlLmpzIiwid2VicGFjazovLy8uL3NyYy9zZWN0aW9ucy9mYXEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlY3Rpb25zL2ZlYXR1cmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlY3Rpb25zL2tleS1mZWF0dXJlLmpzIiwid2VicGFjazovLy8uL3NyYy9zZWN0aW9ucy9wYWNrYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9zZWN0aW9ucy9wYXJ0bmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zZWN0aW9ucy9zZWN1cmUtcGF5bWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VjdGlvbnMvdGVzdGltb25pYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlY3Rpb25zL3dvcmtmbG93LmpzIiwid2VicGFjazovLy8uL3NyYy90aGVtZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZW1vdGlvbi9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZnJhbWVyLW1vdGlvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJjLWRyYXdlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtY3VzdG9tLXNjcm9sbGJhcnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9mYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWljb25zL2lvXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1tb2RhbC12aWRlb1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LW11bHRpLWNhcm91c2VsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc2Nyb2xsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc3RpY2t5bm9kZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRoZW1lLXVpXCIiXSwibmFtZXMiOlsibGlzdGVuZXJzIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJ3aW5kb3ciLCJwcmVmZXRjaGVkIiwiY2FjaGVkT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZW50cnkiLCJjYiIsInJvb3RNYXJnaW4iLCJsaXN0ZW5Ub0ludGVyc2VjdGlvbnMiLCJvYnNlcnZlciIsImdldE9ic2VydmVyIiwiY29uc29sZSIsInJvdXRlciIsImVyciIsImhyZWYiLCJldmVudCIsInRhcmdldCIsImUiLCJub2RlTmFtZSIsImlzTW9kaWZpZWRFdmVudCIsInNjcm9sbCIsImFzIiwicmVwbGFjZSIsInN1Y2Nlc3MiLCJkb2N1bWVudCIsImFyZ3MiLCJrZXkiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJPYmplY3QiLCJwcm9wcyIsImNyZWF0ZVByb3BFcnJvciIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJzaGFsbG93IiwicGFzc0hyZWYiLCJwcmVmZXRjaCIsIm9wdGlvbmFsUHJvcHMiLCJoYXNXYXJuZWQiLCJSZWFjdCIsInAiLCJwYXRobmFtZSIsInJlc29sdmVkSHJlZiIsImNoaWxkRWxtIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRyZW4iLCJjaGlsZCIsIkNoaWxkcmVuIiwiY2hpbGRQcm9wcyIsInJlZiIsImVsIiwic2V0Q2hpbGRFbG0iLCJvbkNsaWNrIiwibGlua0NsaWNrZWQiLCJwcmlvcml0eSIsIkxpbmsiLCJwYXRoIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJwcm9jZXNzIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImdldCIsIlJvdXRlciIsImZpZWxkIiwiZ2V0Um91dGVyIiwiZXZlbnRGaWVsZCIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiX3JvdXRlciIsImluc3RhbmNlIiwiQ29tcG9zZWRDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJXaXRoUm91dGVyV3JhcHBlciIsIm5hbWUiLCJhbGwiLCJvbiIsIm9mZiIsImVtaXQiLCJoYW5kbGVyIiwiYmFzZVBhdGgiLCJjYW5jZWxsZWQiLCJ1cmwiLCJsb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwiaGFzQmFzZVBhdGgiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmaW5hbFVybCIsIlBBR0VfTE9BRF9FUlJPUiIsIlN5bWJvbCIsImFkZEJhc2VQYXRoIiwicmVzb2x2ZUhyZWYiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsImNyZWRlbnRpYWxzIiwicmVzIiwiYXR0ZW1wdHMiLCJmZXRjaFJldHJ5IiwiaXNTZXJ2ZXJSZW5kZXIiLCJtYXJrTG9hZGluZ0Vycm9yIiwiY29uc3RydWN0b3IiLCJyb3V0ZSIsInF1ZXJ5IiwiYXNQYXRoIiwiY29tcG9uZW50cyIsInNkYyIsInN1YiIsImNsYyIsInBhZ2VMb2FkZXIiLCJfYnBzIiwiZXZlbnRzIiwiX3dyYXBBcHAiLCJpc1NzciIsImlzRmFsbGJhY2siLCJfaW5GbGlnaHRSb3V0ZSIsIl9zaGFsbG93Iiwic3RhdGUiLCJvcHRpb25zIiwic3R5bGVTaGVldHMiLCJfX05fU1NHIiwiaW5pdGlhbFByb3BzIiwiX19OX1NTUCIsIkNvbXBvbmVudCIsIl9fTkVYVF9EQVRBX18iLCJyZWxvYWQiLCJiYWNrIiwicHVzaCIsInByZXBhcmVVcmxBcyIsImNoYW5nZSIsImlzTG9jYWxVUkwiLCJTVCIsInBlcmZvcm1hbmNlIiwiY2xlYW5lZEFzIiwiZGVsQmFzZVBhdGgiLCJwYWdlcyIsIl9fcmV3cml0ZXMiLCJwYXJzZWQiLCJtZXRob2QiLCJyZXNvbHZlZEFzIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJtaXNzaW5nUGFyYW1zIiwicGFyYW0iLCJhc1BhdGhuYW1lIiwicm91dGVJbmZvIiwiYXBwQ29tcCIsImVycm9yIiwiY2hhbmdlU3RhdGUiLCJfX04iLCJoYW5kbGVSb3V0ZUluZm9FcnJvciIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJwYWdlIiwiZ2V0Um91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwicmVxdWlyZSIsImlzVmFsaWRFbGVtZW50VHlwZSIsImRhdGFIcmVmIiwic2V0IiwiYmVmb3JlUG9wU3RhdGUiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImhhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJfcmVzb2x2ZUhyZWYiLCJjbGVhblBhdGhuYW1lIiwicGFyc2VkSHJlZiIsIlByb21pc2UiLCJmZXRjaENvbXBvbmVudCIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsIl9nZXREYXRhIiwiZm4iLCJkYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJmZXRjaE5leHREYXRhIiwiX2dldFNlcnZlckRhdGEiLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5Iiwic2xhc2hlZFByb3RvY29scyIsInByb3RvY29sIiwidXJsT2JqIiwiaG9zdCIsImF1dGgiLCJlbmNvZGVVUklDb21wb25lbnQiLCJob3N0bmFtZSIsIlN0cmluZyIsInF1ZXJ5c3RyaW5nIiwic2VhcmNoIiwiVEVTVF9ST1VURSIsIkRVTU1ZX0JBU0UiLCJyZXNvbHZlZEJhc2UiLCJvcmlnaW4iLCJtYXRjaGVyT3B0aW9ucyIsInNlbnNpdGl2ZSIsImRlbGltaXRlciIsImRlY29kZSIsImN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMiLCJzdHJpY3QiLCJjdXN0b21Sb3V0ZSIsImtleXMiLCJtYXRjaGVyUmVnZXgiLCJwYXRoVG9SZWdleHAiLCJtYXRjaGVyIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwicGFyc2VkRGVzdGluYXRpb24iLCJkZXN0aW5hdGlvbiIsImRlc3RRdWVyeSIsImRlc3RQYXRoIiwiZGVzdFBhdGhQYXJhbUtleXMiLCJkZXN0UGF0aFBhcmFtcyIsImRlc3RpbmF0aW9uQ29tcGlsZXIiLCJ2YWxpZGF0ZSIsInZhbHVlIiwiQXJyYXkiLCJzdHJPckFycmF5IiwicXVlcnlDb21waWxlciIsInBhcmFtS2V5cyIsImFwcGVuZFBhcmFtc1RvUXVlcnkiLCJwYXJhbXMiLCJzaG91bGRBZGRCYXNlUGF0aCIsIm5ld1VybCIsImVuY29kZVVSSSIsInNlYXJjaFBhcmFtcyIsInJlc3VsdCIsIml0ZW0iLCJzZWFyY2hQYXJhbXNMaXN0IiwiY3VzdG9tUm91dGVNYXRjaGVyIiwicmV3cml0ZSIsImRlc3RSZXMiLCJyZSIsInNsdWdOYW1lIiwiZyIsImdyb3VwcyIsIm0iLCJzdHIiLCJvcHRpb25hbCIsInJlcGVhdCIsInNlZ21lbnRzIiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsInNlZ21lbnQiLCJwYXJzZVBhcmFtZXRlciIsInBvcyIsImVzY2FwZVJlZ2V4Iiwicm91dGVLZXlDaGFyQ29kZSIsInJvdXRlS2V5Q2hhckxlbmd0aCIsImdldFNhZmVSb3V0ZUtleSIsInJvdXRlS2V5IiwiaSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJpc05hTiIsInBhcnNlSW50IiwibmFtZWRSZWdleCIsInVzZWQiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJBcHAiLCJnZXREaXNwbGF5TmFtZSIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJBY2NvcmRpb24iLCJpdGVtcyIsImNvbWJpbmVSZWR1Y2VycyIsInNpbmdsZSIsInByZXZlbnRDbG9zZSIsIm9wZW5JbmRleGVzIiwiaGFuZGxlSXRlbUNsaWNrIiwibWFwIiwiaW5kZXgiLCJ0aXRsZSIsImluY2x1ZGVzIiwiY29udGVudHMiLCJCYXNlQWNjb3JkaW9uIiwiaW50ZXJuYWxTZXRTdGF0ZSIsImNsb3NpbmciLCJ0eXBlIiwiZmlsdGVyIiwibG9nIiwiZ2V0U3RhdGUiLCJ1bmRlZmluZWQiLCJjaGFuZ2VzIiwiY2FsbGJhY2siLCJhbGxDaGFuZ2VzIiwic2V0U3RhdGUiLCJhY3R1YWxTdGF0ZSIsImNoYW5nZXNPYmplY3QiLCJzdGF0ZVJlZHVjZXIiLCJvblN0YXRlQ2hhbmdlIiwicmVuZGVyIiwiQWNjb3JkaW9uQnV0dG9uIiwicmVzdCIsInN0eWxlcyIsImJ1dHRvblRvZ2dsZSIsImRpc3BsYXkiLCJjb2xvciIsImN1cnNvciIsImJvcmRlciIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImxldHRlclNwYWNpbmciLCJwb3NpdGlvbiIsInBhZGRpbmdMZWZ0IiwibGluZUhlaWdodCIsIndpZHRoIiwiaGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwiYmFja2dyb3VuZENvbG9yIiwidG9wIiwibGVmdCIsIm9wYWNpdHkiLCJjb250ZW50IiwidHJhbnNmb3JtIiwidHJhbnNpdGlvbiIsInZhcmlhbnRzIiwib3BlbiIsIm1hcmdpblRvcCIsImNsb3NlZCIsIkFjY29yZGlvbkNvbnRlbnRzIiwiaXNPcGVuIiwib3ZlcmZsb3dZIiwicGFkZGluZ0JvdHRvbSIsIkFjY29yZGlvbkl0ZW0iLCJvdmVyZmxvdyIsInBhZGRpbmciLCJib3JkZXJCb3R0b20iLCJsZW5ndGgiLCJzbGljZSIsInJlZHVjZXJzIiwicmVkdWNlIiwiYWNjIiwicmVkdWNlciIsIkJ1dHRvbkdyb3VwIiwibmV4dCIsInByZXZpb3VzIiwiYnV0dG9uR3JvdXAiLCJqdXN0aWZ5Q29udGVudCIsIm1iIiwiYnV0dG9uIiwiYmciLCJweCIsIm91dGxpbmUiLCJEcmF3ZXIiLCJjbGFzc05hbWUiLCJjbG9zZUJ1dHRvbiIsImNsb3NlQnV0dG9uU3R5bGUiLCJkcmF3ZXJIYW5kbGVyIiwidG9nZ2xlSGFuZGxlciIsInBsYWNlbWVudCIsImRyYXdlclN0eWxlIiwiY2xvc2VCdG5TdHlsZSIsInRyaW0iLCJkZWZhdWx0UHJvcHMiLCJGZWF0dXJlQ2FyZENvbHVtbiIsInNyYyIsImFsdFRleHQiLCJ0ZXh0IiwiY2FyZCIsImltZyIsIndyYXBwZXIiLCJzdWJUaXRsZSIsImFsaWduSXRlbXMiLCJ0ZXh0QWxpZ24iLCJmbGV4RGlyZWN0aW9uIiwibXgiLCJGZWF0dXJlQ2FyZCIsImZsZXhTaHJpbmsiLCJtciIsIm10IiwiaGVhZGVyIiwibGFiZWwiLCJGb290ZXIiLCJmb290ZXIiLCJjb250YWluZXIiLCJmb290ZXJUb3BBcmVhIiwibWVudUl0ZW1zIiwibWVudXMiLCJoZWFkaW5nIiwibGluayIsImNvcHlyaWdodCIsImJvcmRlclRvcCIsImJvcmRlclRvcENvbG9yIiwiZmxleFdyYXAiLCJwdCIsInBiIiwidGV4dERlY29yYXRpb24iLCJhIiwicGwiLCJIZWFkZXIiLCJMb2dvRGFyayIsIkxvZ29XaGl0ZSIsIm5hdiIsInBvc2l0aW9uQW5pbSIsImtleWZyYW1lcyIsInB5IiwiYW5pbWF0aW9uIiwibWwiLCJib3hTaGFkb3ciLCJib3JkZXJDb2xvciIsInNvY2lhbCIsImljb24iLCJNb2JpbGVEcmF3ZXIiLCJkaXNwYXRjaCIsInVzZUNvbnRleHQiLCJEcmF3ZXJDb250ZXh0IiwidXNlQ2FsbGJhY2siLCJkcmF3ZXIiLCJjbG9zZSIsIm1lbnUiLCJtZW51Rm9vdGVyIiwicmlnaHQiLCJ6SW5kZXgiLCJmdyIsIkltYWdlIiwiTGF5b3V0IiwiaXNTdGlja3kiLCJzZXRJc1N0aWNreSIsInVzZVN0YXRlIiwiaGFuZGxlU3RhdGVDaGFuZ2UiLCJzdGF0dXMiLCJTdGlja3kiLCJTVEFUVVNfRklYRUQiLCJTVEFUVVNfT1JJR0lOQUwiLCJ2YXJpYW50IiwiTmF2TGluayIsIkxpc3QiLCJwYXJlbnRTdHlsZSIsImNoaWxkU3R5bGUiLCJsaXN0U3R5bGVUeXBlIiwibWFyZ2luIiwiaXNBdmFpbGFibGUiLCJsaXN0SWNvbiIsIm1hcmdpbkxlZnQiLCJMb2dvIiwibWF4V2lkdGgiLCJQcmljZUNhcmQiLCJkZXNjcmlwdGlvbiIsInByaWNlV2l0aFVuaXQiLCJidXR0b25UZXh0IiwicG9pbnRzIiwicHJpY2luZ0JveCIsInByaWNpbmdIZWFkZXIiLCJwcmljZSIsImxpc3RJdGVtIiwiZmxleCIsImJhY2tncm91bmQiLCJtYXJnaW5Cb3R0b20iLCJib3R0b20iLCJmb250U3R5bGUiLCJwciIsIlJhdGluZyIsInJhdGluZyIsInRvdGFsUmF0aW5nIiwiU2VjdGlvbkhlYWRlciIsInNsb2dhbiIsImlzV2hpdGUiLCJTRU8iLCJhdXRob3IiLCJtZXRhIiwibWV0YURhdGEiLCJwcm9wZXJ0eSIsImNvbmNhdCIsImxhbmciLCJUZXh0RmVhdHVyZSIsImJ0bk5hbWUiLCJidG5VUkwiLCJ0ZXh0VHJhbnNmb3JtIiwidXNlRGlzcGF0Y2giLCJwcm92aWRlciIsInVzZUNyZWF0ZUNvbnRleHQiLCJpbml0aWFsU3RhdGUiLCJ1c2VTdGlja3lTdGF0ZSIsInVzZVN0aWNreURpc3BhdGNoIiwiU3RpY2t5UHJvdmlkZXIiLCJpc1NpZGViYXJTdGlja3kiLCJFcnJvciIsImRlZmF1bHRWYWx1ZSIsImRlZmF1bHREaXNwYXRjaCIsInN0YXRlQ3R4IiwiY3JlYXRlQ29udGV4dCIsImRpc3BhdGNoQ3R4IiwidXNlU3RhdGVDdHgiLCJ1c2VEaXNwYXRjaEN0eCIsIlByb3ZpZGVyIiwidXNlUmVkdWNlciIsImFjdGlvbiIsIkRyYXdlclByb3ZpZGVyIiwiSW5kZXhQYWdlIiwidGhlbWUiLCJCYW5uZXIiLCJ2aWRlb09wZW4iLCJzZXRWaWRlb09wZW4iLCJoYW5kbGVDbGljayIsInByZXZlbnREZWZhdWx0IiwiYmFubmVyIiwiY29udGVudEJveCIsImltYWdlQm94IiwiQmFubmVyVGh1bWIiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJCYW5uZXJCRyIsImJhY2tncm91bmRSZXBlYXQiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJiYWNrZ3JvdW5kU2l6ZSIsImJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzIiwic3BvbnNvclRpdGxlIiwic3BvbnNvckJveCIsInNwb25zb3IiLCJmZWF0dXJlcyIsImlkIiwiaW1nU3JjIiwiQnJpZWZjYXNlIiwiU2VjdXJlIiwiQ29yZUZlYXR1cmUiLCJjb3JlRmVhdHVyZSIsImNvbnRhaW5lckJveCIsInRodW1ibmFpbCIsIkNvcmVGZWF0dXJlVGh1bWIiLCJoZWFkaW5nVG9wIiwiZ3JpZCIsImJvcmRlclRvcFJpZ2h0UmFkaXVzIiwiZmFxcyIsIkZhcSIsIm15IiwiU21hcnQiLCJXaW5uZXIiLCJDbG91ZCIsIlNldHRpbmciLCJEZXNpZ24iLCJDaGF0IiwiRmVhdHVyZSIsImdyaWRHYXAiLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwiVmVjdG9yIiwiRWRpdGluZyIsIlNwZWVkIiwiS2V5RmVhdHVyZSIsInBhY2thZ2VzIiwiUGFja2FnZSIsInByaWNpbmciLCJwYWNrYWdlRGF0YSIsIlBhdHRlcm5CRyIsIlBhcnRuZXJTZWN0aW9uIiwiUGFydG5lciIsIlNlY3VyZVBheW1lbnQiLCJiZ092ZXJsYXkiLCJQYXltZW50VGh1bWIiLCJQYXltZW50UGF0dGVybiIsIm9yZGVyIiwiYXZhdGFyIiwiQXZhdGFyMSIsImRlc2lnbmF0aW9uIiwicmV2aWV3IiwiQXZhdGFyMiIsIkF2YXRhcjMiLCJBdmF0YXI0IiwicmVzcG9uc2l2ZSIsImRlc2t0b3AiLCJicmVha3BvaW50IiwibWF4IiwibWluIiwic2xpZGVzVG9TbGlkZSIsImxhcHRvcCIsInRhYmxldCIsIm1vYmlsZSIsIlRlc3RpbW9uaWFsQ2FyZCIsImNhcm91c2VsV3JhcHBlciIsInJldmlld0NhcmQiLCJ1bCIsImxpc3RTdHlsZSIsInN2ZyIsIm1hcmdpblJpZ2h0Iiwib2JqZWN0Rml0IiwiV29ya0Zsb3ciLCJ3b3JrZmxvdyIsImljb25Cb3giLCJBcnJvd09kZCIsIkFycm93RXZlbiIsImNvbG9ycyIsInRleHRfc2Vjb25kYXJ5IiwiaGVhZGluZ19zZWNvbmRhcnkiLCJiYWNrZ3JvdW5kX3NlY29uZGFyeSIsImJvcmRlcl9jb2xvciIsInByaW1hcnkiLCJzZWNvbmRhcnkiLCJtdXRlZCIsImFjY2VudCIsInllbGxvdyIsIm1vZGVzIiwiZGFyayIsImJyZWFrcG9pbnRzIiwiZm9udHMiLCJib2R5IiwiZm9udFNpemVzIiwiZm9udFdlaWdodHMiLCJib2xkIiwibGluZUhlaWdodHMiLCJsZXR0ZXJTcGFjaW5ncyIsImNhcHMiLCJzcGFjZSIsImxheW91dCIsInRvb2xiYXIiLCJtYWluIiwic2VjdGlvbiIsImtleUZlYXR1cmUiLCJmZWF0dXJlIiwicGFydG5lciIsInRlc3RpbW9uaWFsIiwic2VjdXJlUGF5bWVudCIsImZhcSIsInNlY3Rpb25IZWFkZXIiLCJmb250RmFtaWx5IiwiaGVyb1ByaW1hcnkiLCJoZXJvU2Vjb25kYXJ5IiwibGVhZCIsImxpbmtzIiwiZGVmYXVsdCIsImxvZ28iLCJpbWFnZXMiLCJidXR0b25zIiwiZGVmYXVsdEJ0biIsIndoaXRlQnV0dG9uIiwidGV4dEJ1dHRvbiIsImNhcmRzIiwib2ZmZXIiLCJtaW5IZWlnaHQiLCJmZWF0dXJlQ2FyZCIsImZvcm1zIiwiaW5wdXQiLCJ0IiwiYmFkZ2VzIiwicm9vdCIsImZvbnRTbW9vdGhpbmciLCJociIsInNyT25seSIsImNsaXAiLCJjbGlwUGF0aCIsIndoaXRlU3BhY2UiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ3hGQSx3RTs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdDOzs7Ozs7Ozs7OztBQ05BLGNBQWMsbUJBQU8sQ0FBQywwRUFBbUI7O0FBRXpDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FB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QUFHLHVCQUFYOztBQUNBLE1BQU0vSSxFQUFFLEdBQ2IrSSxFQUFFLElBQ0YsT0FBTzlJLFdBQVcsQ0FBbEIsU0FEQThJLGNBRUEsT0FBTzlJLFdBQVcsQ0FBbEIsWUFISzs7Ozs7Ozs7Ozs7OztBQ2pZTSx3QkFBd0IsMENBQTBDLGdEQUFnRCxnQ0FBZ0MsZ0NBQWdDLG1DQUFtQyw0QkFBNEIsK0JBQStCLG9CQUFvQix5QkFBeUIsVUFBVTtBQUNwVixpRDs7Ozs7Ozs7Ozs7QUNEQSxpQkFBaUIsbUJBQU8sQ0FBQyxtRUFBb0I7Ozs7Ozs7Ozs7OztBQ0E3QyxxRjs7Ozs7Ozs7Ozs7QUNBQSxpQ0FBaUMsZzBDOzs7Ozs7Ozs7OztBQ0FqQyxpQ0FBaUMsNHlDOzs7Ozs7Ozs7OztBQ0FqQyxzRjs7Ozs7Ozs7Ozs7QUNBQSxpQ0FBaUMsZ2tIOzs7Ozs7Ozs7OztBQ0FqQyxpQ0FBaUMsNGhLOzs7Ozs7Ozs7OztBQ0FqQyxpQ0FBaUMsbzZLOzs7Ozs7Ozs7OztBQ0FqQyxpQ0FBaUMsNHNLOzs7Ozs7Ozs7OztBQ0FqQyxpQ0FBaUMsdy9LOzs7Ozs7Ozs7OztBQ0FqQyxpQ0FBaUMsd21JOzs7Ozs7Ozs7OztBQ0FqQyxpQ0FBaUMsd3BKOzs7Ozs7Ozs7OztBQ0FqQyxpQ0FBaUMsNDZMOzs7Ozs7Ozs7OztBQ0FqQyxrRjs7Ozs7Ozs7Ozs7QUNBQSxpQ0FBaUMsb2hKOzs7Ozs7Ozs7OztBQ0FqQyxpQ0FBaUMsb3FNOzs7Ozs7Ozs7OztBQ0FqQyxpQ0FBaUMsd2hKOzs7Ozs7Ozs7OztBQ0FqQyx1Rjs7Ozs7Ozs7Ozs7QUNBQSxrRjs7Ozs7Ozs7Ozs7QUNBQSxxRjs7Ozs7Ozs7Ozs7QUNBQSx1Rjs7Ozs7Ozs7Ozs7QUNBQSw2Rjs7Ozs7Ozs7Ozs7QUNBQSwwRjs7Ozs7Ozs7Ozs7QUNBQSxpQ0FBaUMsb3JSOzs7Ozs7Ozs7OztBQ0FqQyxpQ0FBaUMsd2hSOzs7Ozs7Ozs7OztBQ0FqQyxpQ0FBaUMsbzdROzs7Ozs7Ozs7OztBQ0FqQyxpQ0FBaUMsNDRTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBakM7QUFDQTtB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QVEsRUFBRSx1QkFISjtBQUlOMVUsWUFBTSxFQUFFLGdCQUpGO0FBS040SCxZQUFNLEVBQUUsaUJBTEY7QUFNTjFHLGNBQVEsRUFBRSxtQkFOSjtBQU9OQyxhQUFPLEVBQUUsY0FQSDtBQVFOdkIsY0FBUSxFQUFFLHFCQVJKO0FBU05HLFdBQUssRUFBRSxnQkFURDtBQVVONFUsZ0JBQVUsRUFBRTtBQVZOO0FBN0JGO0FBblZLLENBQWYsRTs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxpRDs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxxQyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIGFkZEJhc2VQYXRoLFxuICBpc0xvY2FsVVJMLFxuICBOZXh0Um91dGVyLFxuICBQcmVmZXRjaE9wdGlvbnMsXG4gIHJlc29sdmVIcmVmLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxudHlwZSBSZXF1aXJlZEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IG5ldmVyIDogS1xufVtrZXlvZiBUXVxudHlwZSBPcHRpb25hbEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IEsgOiBuZXZlclxufVtrZXlvZiBUXVxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbn1cbnR5cGUgTGlua1Byb3BzUmVxdWlyZWQgPSBSZXF1aXJlZEtleXM8TGlua1Byb3BzPlxudHlwZSBMaW5rUHJvcHNPcHRpb25hbCA9IE9wdGlvbmFsS2V5czxMaW5rUHJvcHM+XG5cbmxldCBjYWNoZWRPYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbmNvbnN0IGxpc3RlbmVycyA9IG5ldyBNYXA8RWxlbWVudCwgKCkgPT4gdm9pZD4oKVxuY29uc3QgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPVxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlciA6IG51bGxcbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBnZXRPYnNlcnZlcigpOiBJbnRlcnNlY3Rpb25PYnNlcnZlciB8IHVuZGVmaW5lZCB7XG4gIC8vIFJldHVybiBzaGFyZWQgaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgYWxyZWFkeSBjcmVhdGVkXG4gIGlmIChjYWNoZWRPYnNlcnZlcikge1xuICAgIHJldHVybiBjYWNoZWRPYnNlcnZlclxuICB9XG5cbiAgLy8gT25seSBjcmVhdGUgc2hhcmVkIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIHN1cHBvcnRlZCBpbiBicm93c2VyXG4gIGlmICghSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICByZXR1cm4gKGNhY2hlZE9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgIChlbnRyaWVzKSA9PiB7XG4gICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgIGlmICghbGlzdGVuZXJzLmhhcyhlbnRyeS50YXJnZXQpKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjYiA9IGxpc3RlbmVycy5nZXQoZW50cnkudGFyZ2V0KSFcbiAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMCkge1xuICAgICAgICAgIGNhY2hlZE9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgbGlzdGVuZXJzLmRlbGV0ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgY2IoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgeyByb290TWFyZ2luOiAnMjAwcHgnIH1cbiAgKSlcbn1cblxuY29uc3QgbGlzdGVuVG9JbnRlcnNlY3Rpb25zID0gKGVsOiBFbGVtZW50LCBjYjogKCkgPT4gdm9pZCkgPT4ge1xuICBjb25zdCBvYnNlcnZlciA9IGdldE9ic2VydmVyKClcbiAgaWYgKCFvYnNlcnZlcikge1xuICAgIHJldHVybiAoKSA9PiB7fVxuICB9XG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbClcbiAgbGlzdGVuZXJzLnNldChlbCwgY2IpXG4gIHJldHVybiAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbClcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgIH1cbiAgICBsaXN0ZW5lcnMuZGVsZXRlKGVsKVxuICB9XG59XG5cbmZ1bmN0aW9uIHByZWZldGNoKFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgb3B0aW9ucz86IFByZWZldGNoT3B0aW9uc1xuKTogdm9pZCB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuXG4gIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycikgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH0pXG4gIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXSA9IHRydWVcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50KSB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gIHJldHVybiAoXG4gICAgKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgZXZlbnQubWV0YUtleSB8fFxuICAgIGV2ZW50LmN0cmxLZXkgfHxcbiAgICBldmVudC5zaGlmdEtleSB8fFxuICAgIGV2ZW50LmFsdEtleSB8fCAvLyB0cmlnZ2VycyByZXNvdXJjZSBkb3dubG9hZFxuICAgIChldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMilcbiAgKVxufVxuXG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChcbiAgZTogUmVhY3QuTW91c2VFdmVudCxcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIHJlcGxhY2U/OiBib29sZWFuLFxuICBzaGFsbG93PzogYm9vbGVhbixcbiAgc2Nyb2xsPzogYm9vbGVhblxuKTogdm9pZCB7XG4gIGNvbnN0IHsgbm9kZU5hbWUgfSA9IGUuY3VycmVudFRhcmdldFxuXG4gIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgIWlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgcmV0dXJuXG4gIH1cblxuICBlLnByZXZlbnREZWZhdWx0KClcblxuICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICB9XG5cbiAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywgeyBzaGFsbG93IH0pLnRoZW4oXG4gICAgKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmICghc3VjY2VzcykgcmV0dXJuXG4gICAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKClcbiAgICAgIH1cbiAgICB9XG4gIClcbn1cblxuZnVuY3Rpb24gTGluayhwcm9wczogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48TGlua1Byb3BzPikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzOiB7XG4gICAgICBrZXk6IHN0cmluZ1xuICAgICAgZXhwZWN0ZWQ6IHN0cmluZ1xuICAgICAgYWN0dWFsOiBzdHJpbmdcbiAgICB9KSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgICAgICBgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCArXG4gICAgICAgICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIlxuICAgICAgICAgICAgOiAnJylcbiAgICAgIClcbiAgICB9XG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc1JlcXVpcmVkLCB0cnVlPiA9IHtcbiAgICAgIGhyZWY6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHM6IExpbmtQcm9wc1JlcXVpcmVkW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIHJlcXVpcmVkUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzUmVxdWlyZWRbXVxuICAgIHJlcXVpcmVkUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNSZXF1aXJlZCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2hyZWYnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldID09IG51bGwgfHxcbiAgICAgICAgICAodHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0JylcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiBwcm9wc1trZXldID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc09wdGlvbmFsLCB0cnVlPiA9IHtcbiAgICAgIGFzOiB0cnVlLFxuICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgIHNjcm9sbDogdHJ1ZSxcbiAgICAgIHNoYWxsb3c6IHRydWUsXG4gICAgICBwYXNzSHJlZjogdHJ1ZSxcbiAgICAgIHByZWZldGNoOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCBvcHRpb25hbFByb3BzOiBMaW5rUHJvcHNPcHRpb25hbFtdID0gT2JqZWN0LmtleXMoXG4gICAgICBvcHRpb25hbFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc09wdGlvbmFsW11cbiAgICBvcHRpb25hbFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzT3B0aW9uYWwpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdhcycpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gJiZcbiAgICAgICAgICB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiZcbiAgICAgICAgICB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCdcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBrZXkgPT09ICdyZXBsYWNlJyB8fFxuICAgICAgICBrZXkgPT09ICdzY3JvbGwnIHx8XG4gICAgICAgIGtleSA9PT0gJ3NoYWxsb3cnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Bhc3NIcmVmJyB8fFxuICAgICAgICBrZXkgPT09ICdwcmVmZXRjaCdcbiAgICAgICkge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAhPSBudWxsICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgYWN0dWFsOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgY29uc3QgaGFzV2FybmVkID0gUmVhY3QudXNlUmVmKGZhbHNlKVxuICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcbiAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnXG4gICAgICApXG4gICAgfVxuICB9XG4gIGNvbnN0IHAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2VcblxuICBjb25zdCBbY2hpbGRFbG0sIHNldENoaWxkRWxtXSA9IFJlYWN0LnVzZVN0YXRlPEVsZW1lbnQ+KClcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBwYXRobmFtZSA9IChyb3V0ZXIgJiYgcm91dGVyLnBhdGhuYW1lKSB8fCAnLydcblxuICBjb25zdCB7IGhyZWYsIGFzIH0gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPSByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuaHJlZilcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogcmVzb2x2ZWRIcmVmLFxuICAgICAgYXM6IHByb3BzLmFzID8gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmFzKSA6IHJlc29sdmVkSHJlZixcbiAgICB9XG4gIH0sIFtwYXRobmFtZSwgcHJvcHMuaHJlZiwgcHJvcHMuYXNdKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKFxuICAgICAgcCAmJlxuICAgICAgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgJiZcbiAgICAgIGNoaWxkRWxtICYmXG4gICAgICBjaGlsZEVsbS50YWdOYW1lICYmXG4gICAgICBpc0xvY2FsVVJMKGhyZWYpXG4gICAgKSB7XG4gICAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgICAgY29uc3QgaXNQcmVmZXRjaGVkID0gcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdXG4gICAgICBpZiAoIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgICByZXR1cm4gbGlzdGVuVG9JbnRlcnNlY3Rpb25zKGNoaWxkRWxtLCAoKSA9PiB7XG4gICAgICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcylcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtwLCBjaGlsZEVsbSwgaHJlZiwgYXMsIHJvdXRlcl0pXG5cbiAgbGV0IHsgY2hpbGRyZW4sIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCB9ID0gcHJvcHNcbiAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICB9XG5cbiAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICBjb25zdCBjaGlsZFByb3BzOiB7XG4gICAgb25Nb3VzZUVudGVyPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIGhyZWY/OiBzdHJpbmdcbiAgICByZWY/OiBhbnlcbiAgfSA9IHtcbiAgICByZWY6IChlbDogYW55KSA9PiB7XG4gICAgICBpZiAoZWwpIHNldENoaWxkRWxtKGVsKVxuXG4gICAgICBpZiAoY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWYpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkLnJlZihlbClcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjaGlsZC5yZWYuY3VycmVudCA9IGVsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKVxuICAgICAgfVxuICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsKVxuICAgICAgfVxuICAgIH0sXG4gIH1cblxuICBpZiAocCkge1xuICAgIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICAgIH1cbiAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgICB9XG4gIH1cblxuICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gIGlmIChwcm9wcy5wYXNzSHJlZiB8fCAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkpIHtcbiAgICBjaGlsZFByb3BzLmhyZWYgPSBhZGRCYXNlUGF0aChhcylcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiIsIi8qKlxuICogUmVtb3ZlcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGlmIHRoZXJlIGlzIG9uZS4gUHJlc2VydmVzIHRoZSByb290IHBhdGggYC9gLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSAmJiBwYXRoICE9PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGhcbn1cblxuLyoqXG4gKiBOb3JtYWxpemVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggYWNjb3JkaW5nIHRvIHRoZSBgdHJhaWxpbmdTbGFzaGAgb3B0aW9uXG4gKiBpbiBgbmV4dC5jb25maWcuanNgLlxuICovXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBwcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0hcbiAgPyAocGF0aDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICAgIGlmICgvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aClcbiAgICAgIH0gZWxzZSBpZiAocGF0aC5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgIHJldHVybiBwYXRoXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGF0aCArICcvJ1xuICAgICAgfVxuICAgIH1cbiAgOiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaFxuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG5dXG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICdoYXNoQ2hhbmdlQ29tcGxldGUnLFxuXVxuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgJ3B1c2gnLFxuICAncmVwbGFjZScsXG4gICdyZWxvYWQnLFxuICAnYmFjaycsXG4gICdwcmVmZXRjaCcsXG4gICdiZWZvcmVQb3BTdGF0ZScsXG5dXG5cbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gIGdldCgpIHtcbiAgICByZXR1cm4gUm91dGVyLmV2ZW50c1xuICB9LFxufSlcblxudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpID0+IHtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoXG4gICAgICAgIDFcbiAgICAgICl9YFxuICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlciBhcyBhbnlcbiAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGdldFJvdXRlcigpOiBSb3V0ZXIge1xuICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArXG4gICAgICAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b25Sb3V0ZXIgYXMgU2luZ2xldG9uUm91dGVyXG5cbi8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhSb3V0ZXIgfSBmcm9tICcuL3dpdGgtcm91dGVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUm91dGVyKCk6IE5leHRSb3V0ZXIge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChSb3V0ZXJDb250ZXh0KVxufVxuXG4vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcblxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5leHBvcnQgY29uc3QgY3JlYXRlUm91dGVyID0gKC4uLmFyZ3M6IFJvdXRlckFyZ3MpOiBSb3V0ZXIgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IFJvdXRlciguLi5hcmdzKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiKCkpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdXG5cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXI6IFJvdXRlcik6IE5leHRSb3V0ZXIge1xuICBjb25zdCBfcm91dGVyID0gcm91dGVyIGFzIGFueVxuICBjb25zdCBpbnN0YW5jZSA9IHt9IGFzIGFueVxuXG4gIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpIHtcbiAgICBpZiAodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbih7fSwgX3JvdXRlcltwcm9wZXJ0eV0pIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSkge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBUb2tlbml6ZSBpbnB1dCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGxleGVyKHN0cikge1xuICAgIHZhciB0b2tlbnMgPSBbXTtcbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gc3RyW2ldO1xuICAgICAgICBpZiAoY2hhciA9PT0gXCIqXCIgfHwgY2hhciA9PT0gXCIrXCIgfHwgY2hhciA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJNT0RJRklFUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRVNDQVBFRF9DSEFSXCIsIGluZGV4OiBpKyssIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIntcIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk9QRU5cIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIn1cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNMT1NFXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCI6XCIpIHtcbiAgICAgICAgICAgIHZhciBuYW1lID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29kZSA9IHN0ci5jaGFyQ29kZUF0KGopO1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAvLyBgMC05YFxuICAgICAgICAgICAgICAgIChjb2RlID49IDQ4ICYmIGNvZGUgPD0gNTcpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBBLVpgXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDY1ICYmIGNvZGUgPD0gOTApIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBhLXpgXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDk3ICYmIGNvZGUgPD0gMTIyKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgX2BcbiAgICAgICAgICAgICAgICAgICAgY29kZSA9PT0gOTUpIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZSArPSBzdHJbaisrXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFuYW1lKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhcmFtZXRlciBuYW1lIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTkFNRVwiLCBpbmRleDogaSwgdmFsdWU6IG5hbWUgfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIihcIikge1xuICAgICAgICAgICAgdmFyIGNvdW50ID0gMTtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIj9cIikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQYXR0ZXJuIGNhbm5vdCBzdGFydCB3aXRoIFxcXCI/XFxcIiBhdCBcIiArIGopO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXSArIHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCIpXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQtLTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBqKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzdHJbal0gPT09IFwiKFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdHJbaiArIDFdICE9PSBcIj9cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhcHR1cmluZyBncm91cHMgYXJlIG5vdCBhbGxvd2VkIGF0IFwiICsgaik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb3VudClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5iYWxhbmNlZCBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICBpZiAoIXBhdHRlcm4pXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGF0dGVybiBhdCBcIiArIGkpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIlBBVFRFUk5cIiwgaW5kZXg6IGksIHZhbHVlOiBwYXR0ZXJuIH0pO1xuICAgICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0hBUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgIH1cbiAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRU5EXCIsIGluZGV4OiBpLCB2YWx1ZTogXCJcIiB9KTtcbiAgICByZXR1cm4gdG9rZW5zO1xufVxuLyoqXG4gKiBQYXJzZSBhIHN0cmluZyBmb3IgdGhlIHJhdyB0b2tlbnMuXG4gKi9cbmZ1bmN0aW9uIHBhcnNlKHN0ciwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIHRva2VucyA9IGxleGVyKHN0cik7XG4gICAgdmFyIF9hID0gb3B0aW9ucy5wcmVmaXhlcywgcHJlZml4ZXMgPSBfYSA9PT0gdm9pZCAwID8gXCIuL1wiIDogX2E7XG4gICAgdmFyIGRlZmF1bHRQYXR0ZXJuID0gXCJbXlwiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiLyM/XCIpICsgXCJdKz9cIjtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgdmFyIGtleSA9IDA7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICB2YXIgdHJ5Q29uc3VtZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIGlmIChpIDwgdG9rZW5zLmxlbmd0aCAmJiB0b2tlbnNbaV0udHlwZSA9PT0gdHlwZSlcbiAgICAgICAgICAgIHJldHVybiB0b2tlbnNbaSsrXS52YWx1ZTtcbiAgICB9O1xuICAgIHZhciBtdXN0Q29uc3VtZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRyeUNvbnN1bWUodHlwZSk7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB2YXIgX2EgPSB0b2tlbnNbaV0sIG5leHRUeXBlID0gX2EudHlwZSwgaW5kZXggPSBfYS5pbmRleDtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuZXhwZWN0ZWQgXCIgKyBuZXh0VHlwZSArIFwiIGF0IFwiICsgaW5kZXggKyBcIiwgZXhwZWN0ZWQgXCIgKyB0eXBlKTtcbiAgICB9O1xuICAgIHZhciBjb25zdW1lVGV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFwiXCI7XG4gICAgICAgIHZhciB2YWx1ZTtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgIHdoaWxlICgodmFsdWUgPSB0cnlDb25zdW1lKFwiQ0hBUlwiKSB8fCB0cnlDb25zdW1lKFwiRVNDQVBFRF9DSEFSXCIpKSkge1xuICAgICAgICAgICAgcmVzdWx0ICs9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICB3aGlsZSAoaSA8IHRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSB0cnlDb25zdW1lKFwiQ0hBUlwiKTtcbiAgICAgICAgdmFyIG5hbWUgPSB0cnlDb25zdW1lKFwiTkFNRVwiKTtcbiAgICAgICAgdmFyIHBhdHRlcm4gPSB0cnlDb25zdW1lKFwiUEFUVEVSTlwiKTtcbiAgICAgICAgaWYgKG5hbWUgfHwgcGF0dGVybikge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGNoYXIgfHwgXCJcIjtcbiAgICAgICAgICAgIGlmIChwcmVmaXhlcy5pbmRleE9mKHByZWZpeCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcGF0aCArPSBwcmVmaXg7XG4gICAgICAgICAgICAgICAgcHJlZml4ID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gocGF0aCk7XG4gICAgICAgICAgICAgICAgcGF0aCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZSB8fCBrZXkrKyxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogcGF0dGVybiB8fCBkZWZhdWx0UGF0dGVybixcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZShcIk1PRElGSUVSXCIpIHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHZhbHVlID0gY2hhciB8fCB0cnlDb25zdW1lKFwiRVNDQVBFRF9DSEFSXCIpO1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHBhdGggKz0gdmFsdWU7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2gocGF0aCk7XG4gICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgb3BlbiA9IHRyeUNvbnN1bWUoXCJPUEVOXCIpO1xuICAgICAgICBpZiAob3Blbikge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGNvbnN1bWVUZXh0KCk7XG4gICAgICAgICAgICB2YXIgbmFtZV8xID0gdHJ5Q29uc3VtZShcIk5BTUVcIikgfHwgXCJcIjtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuXzEgPSB0cnlDb25zdW1lKFwiUEFUVEVSTlwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGNvbnN1bWVUZXh0KCk7XG4gICAgICAgICAgICBtdXN0Q29uc3VtZShcIkNMT1NFXCIpO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWVfMSB8fCAocGF0dGVybl8xID8ga2V5KysgOiBcIlwiKSxcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBuYW1lXzEgJiYgIXBhdHRlcm5fMSA/IGRlZmF1bHRQYXR0ZXJuIDogcGF0dGVybl8xLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogc3VmZml4LFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBtdXN0Q29uc3VtZShcIkVORFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydHMucGFyc2UgPSBwYXJzZTtcbi8qKlxuICogQ29tcGlsZSBhIHN0cmluZyB0byBhIHRlbXBsYXRlIGZ1bmN0aW9uIGZvciB0aGUgcGF0aC5cbiAqL1xuZnVuY3Rpb24gY29tcGlsZShzdHIsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9GdW5jdGlvbihwYXJzZShzdHIsIG9wdGlvbnMpLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMuY29tcGlsZSA9IGNvbXBpbGU7XG4vKipcbiAqIEV4cG9zZSBhIG1ldGhvZCBmb3IgdHJhbnNmb3JtaW5nIHRva2VucyBpbnRvIHRoZSBwYXRoIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb0Z1bmN0aW9uKHRva2Vucywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIHJlRmxhZ3MgPSBmbGFncyhvcHRpb25zKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLmVuY29kZSwgZW5jb2RlID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2EsIF9iID0gb3B0aW9ucy52YWxpZGF0ZSwgdmFsaWRhdGUgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iO1xuICAgIC8vIENvbXBpbGUgYWxsIHRoZSB0b2tlbnMgaW50byByZWdleHBzLlxuICAgIHZhciBtYXRjaGVzID0gdG9rZW5zLm1hcChmdW5jdGlvbiAodG9rZW4pIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoXCJeKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpJFwiLCByZUZsYWdzKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaV07XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbjtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGRhdGEgPyBkYXRhW3Rva2VuLm5hbWVdIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgdmFyIG9wdGlvbmFsID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiP1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIjtcbiAgICAgICAgICAgIHZhciByZXBlYXQgPSB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXBlYXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbm90IHJlcGVhdCwgYnV0IGdvdCBhbiBhcnJheVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9uYWwpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbm90IGJlIGVtcHR5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHZhbHVlLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWdtZW50ID0gZW5jb2RlKHZhbHVlW2pdLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgYWxsIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbWF0Y2ggXFxcIlwiICsgdG9rZW4ucGF0dGVybiArIFwiXFxcIiwgYnV0IGdvdCBcXFwiXCIgKyBzZWdtZW50ICsgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudCArIHRva2VuLnN1ZmZpeDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiIHx8IHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgIHZhciBzZWdtZW50ID0gZW5jb2RlKFN0cmluZyh2YWx1ZSksIHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudCArIHRva2VuLnN1ZmZpeDtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIHZhciB0eXBlT2ZNZXNzYWdlID0gcmVwZWF0ID8gXCJhbiBhcnJheVwiIDogXCJhIHN0cmluZ1wiO1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gYmUgXCIgKyB0eXBlT2ZNZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICB9O1xufVxuZXhwb3J0cy50b2tlbnNUb0Z1bmN0aW9uID0gdG9rZW5zVG9GdW5jdGlvbjtcbi8qKlxuICogQ3JlYXRlIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIHNwZWMuXG4gKi9cbmZ1bmN0aW9uIG1hdGNoKHN0ciwgb3B0aW9ucykge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgdmFyIHJlID0gcGF0aFRvUmVnZXhwKHN0ciwga2V5cywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5tYXRjaCA9IG1hdGNoO1xuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBvdXRwdXQuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuZGVjb2RlLCBkZWNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHBhdGhuYW1lKSB7XG4gICAgICAgIHZhciBtID0gcmUuZXhlYyhwYXRobmFtZSk7XG4gICAgICAgIGlmICghbSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIHBhdGggPSBtWzBdLCBpbmRleCA9IG0uaW5kZXg7XG4gICAgICAgIHZhciBwYXJhbXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgIGlmIChtW2ldID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiY29udGludWVcIjtcbiAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzW2kgLSAxXTtcbiAgICAgICAgICAgIGlmIChrZXkubW9kaWZpZXIgPT09IFwiKlwiIHx8IGtleS5tb2RpZmllciA9PT0gXCIrXCIpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gbVtpXS5zcGxpdChrZXkucHJlZml4ICsga2V5LnN1ZmZpeCkubWFwKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVjb2RlKHZhbHVlLCBrZXkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IGRlY29kZShtW2ldLCBrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IG0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIF9sb29wXzEoaSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgcGF0aDogcGF0aCwgaW5kZXg6IGluZGV4LCBwYXJhbXM6IHBhcmFtcyB9O1xuICAgIH07XG59XG5leHBvcnRzLnJlZ2V4cFRvRnVuY3Rpb24gPSByZWdleHBUb0Z1bmN0aW9uO1xuLyoqXG4gKiBFc2NhcGUgYSByZWd1bGFyIGV4cHJlc3Npb24gc3RyaW5nLlxuICovXG5mdW5jdGlvbiBlc2NhcGVTdHJpbmcoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oWy4rKj89XiE6JHt9KClbXFxdfC9cXFxcXSkvZywgXCJcXFxcJDFcIik7XG59XG4vKipcbiAqIEdldCB0aGUgZmxhZ3MgZm9yIGEgcmVnZXhwIGZyb20gdGhlIG9wdGlvbnMuXG4gKi9cbmZ1bmN0aW9uIGZsYWdzKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gb3B0aW9ucyAmJiBvcHRpb25zLnNlbnNpdGl2ZSA/IFwiXCIgOiBcImlcIjtcbn1cbi8qKlxuICogUHVsbCBvdXQga2V5cyBmcm9tIGEgcmVnZXhwLlxuICovXG5mdW5jdGlvbiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzKSB7XG4gICAgaWYgKCFrZXlzKVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICAvLyBVc2UgYSBuZWdhdGl2ZSBsb29rYWhlYWQgdG8gbWF0Y2ggb25seSBjYXB0dXJpbmcgZ3JvdXBzLlxuICAgIHZhciBncm91cHMgPSBwYXRoLnNvdXJjZS5tYXRjaCgvXFwoKD8hXFw/KS9nKTtcbiAgICBpZiAoZ3JvdXBzKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ3JvdXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBrZXlzLnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IGksXG4gICAgICAgICAgICAgICAgcHJlZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbi8qKlxuICogVHJhbnNmb3JtIGFuIGFycmF5IGludG8gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5VG9SZWdleHAocGF0aHMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICB2YXIgcGFydHMgPSBwYXRocy5tYXAoZnVuY3Rpb24gKHBhdGgpIHsgcmV0dXJuIHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKS5zb3VyY2U7IH0pO1xuICAgIHJldHVybiBuZXcgUmVnRXhwKFwiKD86XCIgKyBwYXJ0cy5qb2luKFwifFwiKSArIFwiKVwiLCBmbGFncyhvcHRpb25zKSk7XG59XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggcmVnZXhwIGZyb20gc3RyaW5nIGlucHV0LlxuICovXG5mdW5jdGlvbiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRva2Vuc1RvUmVnZXhwKHBhcnNlKHBhdGgsIG9wdGlvbnMpLCBrZXlzLCBvcHRpb25zKTtcbn1cbi8qKlxuICogRXhwb3NlIGEgZnVuY3Rpb24gZm9yIHRha2luZyB0b2tlbnMgYW5kIHJldHVybmluZyBhIFJlZ0V4cC5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9SZWdleHAodG9rZW5zLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLnN0cmljdCwgc3RyaWN0ID0gX2EgPT09IHZvaWQgMCA/IGZhbHNlIDogX2EsIF9iID0gb3B0aW9ucy5zdGFydCwgc3RhcnQgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iLCBfYyA9IG9wdGlvbnMuZW5kLCBlbmQgPSBfYyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9jLCBfZCA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfZCA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfZDtcbiAgICB2YXIgZW5kc1dpdGggPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmVuZHNXaXRoIHx8IFwiXCIpICsgXCJdfCRcIjtcbiAgICB2YXIgZGVsaW1pdGVyID0gXCJbXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl1cIjtcbiAgICB2YXIgcm91dGUgPSBzdGFydCA/IFwiXlwiIDogXCJcIjtcbiAgICAvLyBJdGVyYXRlIG92ZXIgdGhlIHRva2VucyBhbmQgY3JlYXRlIG91ciByZWdleHAgc3RyaW5nLlxuICAgIGZvciAodmFyIF9pID0gMCwgdG9rZW5zXzEgPSB0b2tlbnM7IF9pIDwgdG9rZW5zXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc18xW19pXTtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgcm91dGUgKz0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbikpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4ucHJlZml4KSk7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5zdWZmaXgpKTtcbiAgICAgICAgICAgIGlmICh0b2tlbi5wYXR0ZXJuKSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleXMpXG4gICAgICAgICAgICAgICAgICAgIGtleXMucHVzaCh0b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHByZWZpeCB8fCBzdWZmaXgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRva2VuLm1vZGlmaWVyID09PSBcIitcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtb2QgPSB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIgPyBcIj9cIiA6IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgXCIoKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKD86XCIgKyBzdWZmaXggKyBwcmVmaXggKyBcIig/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSkqKVwiICsgc3VmZml4ICsgXCIpXCIgKyBtb2Q7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgXCIoXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpXCIgKyBzdWZmaXggKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBzdWZmaXggKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChlbmQpIHtcbiAgICAgICAgaWYgKCFzdHJpY3QpXG4gICAgICAgICAgICByb3V0ZSArPSBkZWxpbWl0ZXIgKyBcIj9cIjtcbiAgICAgICAgcm91dGUgKz0gIW9wdGlvbnMuZW5kc1dpdGggPyBcIiRcIiA6IFwiKD89XCIgKyBlbmRzV2l0aCArIFwiKVwiO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIGVuZFRva2VuID0gdG9rZW5zW3Rva2Vucy5sZW5ndGggLSAxXTtcbiAgICAgICAgdmFyIGlzRW5kRGVsaW1pdGVkID0gdHlwZW9mIGVuZFRva2VuID09PSBcInN0cmluZ1wiXG4gICAgICAgICAgICA/IGRlbGltaXRlci5pbmRleE9mKGVuZFRva2VuW2VuZFRva2VuLmxlbmd0aCAtIDFdKSA+IC0xXG4gICAgICAgICAgICA6IC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgICAgIGVuZFRva2VuID09PSB1bmRlZmluZWQ7XG4gICAgICAgIGlmICghc3RyaWN0KSB7XG4gICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgZGVsaW1pdGVyICsgXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpKT9cIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzRW5kRGVsaW1pdGVkKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBcIig/PVwiICsgZGVsaW1pdGVyICsgXCJ8XCIgKyBlbmRzV2l0aCArIFwiKVwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXcgUmVnRXhwKHJvdXRlLCBmbGFncyhvcHRpb25zKSk7XG59XG5leHBvcnRzLnRva2Vuc1RvUmVnZXhwID0gdG9rZW5zVG9SZWdleHA7XG4vKipcbiAqIE5vcm1hbGl6ZSB0aGUgZ2l2ZW4gcGF0aCBzdHJpbmcsIHJldHVybmluZyBhIHJlZ3VsYXIgZXhwcmVzc2lvbi5cbiAqXG4gKiBBbiBlbXB0eSBhcnJheSBjYW4gYmUgcGFzc2VkIGluIGZvciB0aGUga2V5cywgd2hpY2ggd2lsbCBob2xkIHRoZVxuICogcGxhY2Vob2xkZXIga2V5IGRlc2NyaXB0aW9ucy4gRm9yIGV4YW1wbGUsIHVzaW5nIGAvdXNlci86aWRgLCBga2V5c2Agd2lsbFxuICogY29udGFpbiBgW3sgbmFtZTogJ2lkJywgZGVsaW1pdGVyOiAnLycsIG9wdGlvbmFsOiBmYWxzZSwgcmVwZWF0OiBmYWxzZSB9XWAuXG4gKi9cbmZ1bmN0aW9uIHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKHBhdGggaW5zdGFuY2VvZiBSZWdFeHApXG4gICAgICAgIHJldHVybiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzKTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwYXRoKSlcbiAgICAgICAgcmV0dXJuIGFycmF5VG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5wYXRoVG9SZWdleHAgPSBwYXRoVG9SZWdleHA7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBfX05FWFRfREFUQV9fICovXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gsXG4gIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuaW1wb3J0IHsgR29vZFBhZ2VDYWNoZSwgU3R5bGVTaGVldFR1cGxlIH0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3BhZ2UtbG9hZGVyJ1xuaW1wb3J0IHsgZGVub3JtYWxpemVQYWdlUGF0aCB9IGZyb20gJy4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGgnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldExvY2F0aW9uT3JpZ2luLFxuICBnZXRVUkwsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIE5leHRQYWdlQ29udGV4dCxcbiAgU1QsXG59IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgaXNEeW5hbWljUm91dGUgfSBmcm9tICcuL3V0aWxzL2lzLWR5bmFtaWMnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi91dGlscy9xdWVyeXN0cmluZydcbmltcG9ydCByZXNvbHZlUmV3cml0ZXMgZnJvbSAnLi91dGlscy9yZXNvbHZlLXJld3JpdGVzJ1xuaW1wb3J0IHsgZ2V0Um91dGVNYXRjaGVyIH0gZnJvbSAnLi91dGlscy9yb3V0ZS1tYXRjaGVyJ1xuaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vdXRpbHMvcm91dGUtcmVnZXgnXG5cbmludGVyZmFjZSBUcmFuc2l0aW9uT3B0aW9ucyB7XG4gIHNoYWxsb3c/OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBOZXh0SGlzdG9yeVN0YXRlIHtcbiAgdXJsOiBzdHJpbmdcbiAgYXM6IHN0cmluZ1xuICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xufVxuXG50eXBlIEhpc3RvcnlTdGF0ZSA9IG51bGwgfCB7IF9fTjogZmFsc2UgfSB8ICh7IF9fTjogdHJ1ZSB9ICYgTmV4dEhpc3RvcnlTdGF0ZSlcblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICBjYW5jZWxsZWQ6IHRydWUsXG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gIHJldHVybiBiYXNlUGF0aCAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nKVxuICAgID8gcGF0aCA9PT0gJy8nXG4gICAgICA/IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGJhc2VQYXRoKVxuICAgICAgOiBiYXNlUGF0aCArIHBhdGhcbiAgICA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG59XG5cbi8qKlxuICogRGV0ZWN0cyB3aGV0aGVyIGEgZ2l2ZW4gdXJsIGlzIHJvdXRhYmxlIGJ5IHRoZSBOZXh0LmpzIHJvdXRlciAoYnJvd3NlciBvbmx5KS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTG9jYWxVUkwodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykpIHJldHVybiB0cnVlXG4gIHRyeSB7XG4gICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gICAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pXG4gICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG4vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUhyZWYoY3VycmVudFBhdGg6IHN0cmluZywgaHJlZjogVXJsKTogc3RyaW5nIHtcbiAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgY29uc3QgYmFzZSA9IG5ldyBVUkwoY3VycmVudFBhdGgsICdodHRwOi8vbicpXG4gIGNvbnN0IHVybEFzU3RyaW5nID1cbiAgICB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZilcbiAgdHJ5IHtcbiAgICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwodXJsQXNTdHJpbmcsIGJhc2UpXG4gICAgZmluYWxVcmwucGF0aG5hbWUgPSBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSlcbiAgICAvLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuICAgIHJldHVybiBmaW5hbFVybC5vcmlnaW4gPT09IGJhc2Uub3JpZ2luXG4gICAgICA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aClcbiAgICAgIDogZmluYWxVcmwuaHJlZlxuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIHVybEFzU3RyaW5nXG4gIH1cbn1cblxuY29uc3QgUEFHRV9MT0FEX0VSUk9SID0gU3ltYm9sKCdQQUdFX0xPQURfRVJST1InKVxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtMb2FkaW5nRXJyb3IoZXJyOiBFcnJvcik6IEVycm9yIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsIFBBR0VfTE9BRF9FUlJPUiwge30pXG59XG5cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXI6IE5leHRSb3V0ZXIsIHVybDogVXJsLCBhczogVXJsKSB7XG4gIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICByZXR1cm4ge1xuICAgIHVybDogYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCB1cmwpKSxcbiAgICBhczogYXMgPyBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIGFzKSkgOiBhcyxcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgTmV4dFJvdXRlciA9IEJhc2VSb3V0ZXIgJlxuICBQaWNrPFxuICAgIFJvdXRlcixcbiAgICB8ICdwdXNoJ1xuICAgIHwgJ3JlcGxhY2UnXG4gICAgfCAncmVsb2FkJ1xuICAgIHwgJ2JhY2snXG4gICAgfCAncHJlZmV0Y2gnXG4gICAgfCAnYmVmb3JlUG9wU3RhdGUnXG4gICAgfCAnZXZlbnRzJ1xuICAgIHwgJ2lzRmFsbGJhY2snXG4gID5cblxuZXhwb3J0IHR5cGUgUHJlZmV0Y2hPcHRpb25zID0ge1xuICBwcmlvcml0eT86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIHN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxuICBwcm9wcz86IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgZXJyPzogRXJyb3JcbiAgZXJyb3I/OiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHMgPSBQaWNrPFByaXZhdGVSb3V0ZUluZm8sICdDb21wb25lbnQnIHwgJ2Vycic+ICYge1xuICByb3V0ZXI6IFJvdXRlclxufSAmIFJlY29yZDxzdHJpbmcsIGFueT5cbmV4cG9ydCB0eXBlIEFwcENvbXBvbmVudCA9IENvbXBvbmVudFR5cGU8QXBwUHJvcHM+XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sIEFwcDogQXBwQ29tcG9uZW50KSA9PiBQcm9taXNlPHZvaWQ+XG5cbnR5cGUgQmVmb3JlUG9wU3RhdGVDYWxsYmFjayA9IChzdGF0ZTogTmV4dEhpc3RvcnlTdGF0ZSkgPT4gYm9vbGVhblxuXG50eXBlIENvbXBvbmVudExvYWRDYW5jZWwgPSAoKCkgPT4gdm9pZCkgfCBudWxsXG5cbnR5cGUgSGlzdG9yeU1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnIHwgJ3B1c2hTdGF0ZSdcblxuY29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gPVxuICBwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OICYmXG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICdzY3JvbGxSZXN0b3JhdGlvbicgaW4gd2luZG93Lmhpc3RvcnlcblxuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmw6IHN0cmluZywgYXR0ZW1wdHM6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAvL1xuICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAvLyA+IG9wdGlvbi5cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgLy9cbiAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgIGlmICghcmVzLm9rKSB7XG4gICAgICBpZiAoYXR0ZW1wdHMgPiAxICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgIHJldHVybiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMgLSAxKVxuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgIH1cblxuICAgIHJldHVybiByZXMuanNvbigpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWY6IHN0cmluZywgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAvLyBsb29wLlxuICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgIG1hcmtMb2FkaW5nRXJyb3IoZXJyKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIGltcGxlbWVudHMgQmFzZVJvdXRlciB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqL1xuICBjb21wb25lbnRzOiB7IFtwYXRobmFtZTogc3RyaW5nXTogUHJpdmF0ZVJvdXRlSW5mbyB9XG4gIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gIHNkYzogeyBbYXNQYXRoOiBzdHJpbmddOiBvYmplY3QgfSA9IHt9XG4gIHN1YjogU3Vic2NyaXB0aW9uXG4gIGNsYzogQ29tcG9uZW50TG9hZENhbmNlbFxuICBwYWdlTG9hZGVyOiBhbnlcbiAgX2JwczogQmVmb3JlUG9wU3RhdGVDYWxsYmFjayB8IHVuZGVmaW5lZFxuICBldmVudHM6IE1pdHRFbWl0dGVyXG4gIF93cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICBpc1NzcjogYm9vbGVhblxuICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gIF9pbkZsaWdodFJvdXRlPzogc3RyaW5nXG4gIF9zaGFsbG93PzogYm9vbGVhblxuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGluaXRpYWxTdHlsZVNoZWV0cyxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgfToge1xuICAgICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25cbiAgICAgIGluaXRpYWxQcm9wczogYW55XG4gICAgICBwYWdlTG9hZGVyOiBhbnlcbiAgICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgaW5pdGlhbFN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICAgICAgQXBwOiBBcHBDb21wb25lbnRcbiAgICAgIHdyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gICAgICBlcnI/OiBFcnJvclxuICAgICAgaXNGYWxsYmFjazogYm9vbGVhblxuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0czogaW5pdGlhbFN0eWxlU2hlZXRzLFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgIENvbXBvbmVudDogQXBwIGFzIENvbXBvbmVudFR5cGUsXG4gICAgICBzdHlsZVNoZWV0czogW1xuICAgICAgICAvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXG4gICAgICBdLFxuICAgIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgdGhpcy5hc1BhdGggPVxuICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgICAgZ2V0VVJMKClcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG5cbiAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCdcblxuICAgICAgICAgIGxldCBzY3JvbGxEZWJvdW5jZVRpbWVvdXQ6IHVuZGVmaW5lZCB8IE5vZGVKUy5UaW1lb3V0XG5cbiAgICAgICAgICBjb25zdCBkZWJvdW5jZWRTY3JvbGxTYXZlID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHNjcm9sbERlYm91bmNlVGltZW91dCkgY2xlYXJUaW1lb3V0KHNjcm9sbERlYm91bmNlVGltZW91dClcblxuICAgICAgICAgICAgc2Nyb2xsRGVib3VuY2VUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgdXJsLCBhczogY3VyQXMsIG9wdGlvbnMgfSA9IGhpc3Rvcnkuc3RhdGVcbiAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgY3VyQXMsXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICAgICAgICAgICAgX05fWDogd2luZG93LnNjcm9sbFgsXG4gICAgICAgICAgICAgICAgICBfTl9ZOiB3aW5kb3cuc2Nyb2xsWSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9LCAxMClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZGVib3VuY2VkU2Nyb2xsU2F2ZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0gZS5zdGF0ZSBhcyBIaXN0b3J5U3RhdGVcblxuICAgIGlmICghc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zIH0gPSBzdGF0ZVxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAodGhpcy5pc1NzciAmJiBhcyA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhzdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlKFxuICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICB1cmwsXG4gICAgICBhcyxcbiAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXG4gICAgICB9KVxuICAgIClcbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgYXN5bmMgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybFxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICB9XG4gICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgIGlmIChTVCkge1xuICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9pbkZsaWdodFJvdXRlKSB7XG4gICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlKVxuICAgIH1cblxuICAgIGNvbnN0IGNsZWFuZWRBcyA9IGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzXG4gICAgdGhpcy5faW5GbGlnaHRSb3V0ZSA9IGFzXG5cbiAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpIHtcbiAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzKVxuICAgICAgLy8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKVxuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdKVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcylcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuICAgIC8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuICAgIGNvbnN0IHsgX19yZXdyaXRlczogcmV3cml0ZXMgfSA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5wcm9taXNlZEJ1aWxkTWFuaWZlc3RcblxuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lLCBzZWFyY2hQYXJhbXMgfSA9IHBhcnNlZFxuXG4gICAgcGFyc2VkID0gdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkLCBwYWdlcykgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuXG4gICAgY29uc3QgcXVlcnkgPSBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcylcblxuICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICA/IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSlcbiAgICAgIDogcGF0aG5hbWVcblxuICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpKSB7XG4gICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcblxuICAgIC8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4gICAgLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTKSB7XG4gICAgICByZXNvbHZlZEFzID0gcmVzb2x2ZVJld3JpdGVzKFxuICAgICAgICBhcyxcbiAgICAgICAgcGFnZXMsXG4gICAgICAgIGJhc2VQYXRoLFxuICAgICAgICByZXdyaXRlcyxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIChwOiBzdHJpbmcpID0+IHRoaXMuX3Jlc29sdmVIcmVmKHsgcGF0aG5hbWU6IHAgfSwgcGFnZXMpLnBhdGhuYW1lIVxuICAgICAgKVxuICAgIH1cbiAgICByZXNvbHZlZEFzID0gZGVsQmFzZVBhdGgocmVzb2x2ZWRBcylcblxuICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgIGNvbnN0IHsgcGF0aG5hbWU6IGFzUGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwocmVzb2x2ZWRBcylcbiAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICApXG5cbiAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYCBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgICtcbiAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW5jb21wYXRpYmxlLWhyZWYtYXNgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgfVxuICAgIH1cblxuICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzKVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgc2hhbGxvd1xuICAgICAgKVxuICAgICAgbGV0IHsgZXJyb3IgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcylcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBhcHBDb21wOiBhbnkgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50XG4gICAgICAgIDsod2luZG93IGFzIGFueSkubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgIShyb3V0ZUluZm8uQ29tcG9uZW50IGFzIGFueSkuZ2V0SW5pdGlhbFByb3BzXG4gICAgICB9XG5cbiAgICAgIGF3YWl0IHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZSEsIHF1ZXJ5LCBjbGVhbmVkQXMsIHJvdXRlSW5mbykuY2F0Y2goXG4gICAgICAgIChlKSA9PiB7XG4gICAgICAgICAgaWYgKGUuY2FuY2VsbGVkKSBlcnJvciA9IGVycm9yIHx8IGVcbiAgICAgICAgICBlbHNlIHRocm93IGVcbiAgICAgICAgfVxuICAgICAgKVxuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGNsZWFuZWRBcylcbiAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgIH1cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uICYmICdfTl9YJyBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgd2luZG93LnNjcm9sbFRvKChvcHRpb25zIGFzIGFueSkuX05fWCwgKG9wdGlvbnMgYXMgYW55KS5fTl9ZKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcylcblxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fVxuICApOiB2b2lkIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IGdldFVSTCgpICE9PSBhcykge1xuICAgICAgdGhpcy5fc2hhbGxvdyA9IG9wdGlvbnMuc2hhbGxvd1xuICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXShcbiAgICAgICAge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgIF9fTjogdHJ1ZSxcbiAgICAgICAgfSBhcyBIaXN0b3J5U3RhdGUsXG4gICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAnJyxcbiAgICAgICAgYXNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICBlcnI6IEVycm9yICYgeyBjb2RlOiBhbnk7IGNhbmNlbGxlZDogYm9vbGVhbiB9LFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgbG9hZEVycm9yRmFpbD86IGJvb2xlYW5cbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgIC8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG5cbiAgICBpZiAoUEFHRV9MT0FEX0VSUk9SIGluIGVyciB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzKVxuXG4gICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcblxuICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG5cbiAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgIHRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IHBhZ2U6IENvbXBvbmVudCwgc3R5bGVTaGVldHMgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoXG4gICAgICAgICcvX2Vycm9yJ1xuICAgICAgKVxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzLFxuICAgICAgICBlcnIsXG4gICAgICAgIGVycm9yOiBlcnIsXG4gICAgICB9XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IGF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgIGVycixcbiAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgfSBhcyBhbnkpXG4gICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKVxuICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihyb3V0ZUluZm9FcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHRydWUpXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgc2hhbGxvdzogYm9vbGVhbiA9IGZhbHNlXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdXG5cbiAgICAgIGlmIChzaGFsbG93ICYmIGNhY2hlZFJvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICByZXR1cm4gY2FjaGVkUm91dGVJbmZvXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyA9IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA/IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA6IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oKHJlcykgPT4gKHtcbiAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICBzdHlsZVNoZWV0czogcmVzLnN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgIH0pKVxuXG4gICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpXG4gICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBkYXRhSHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChfX05fU1NHIHx8IF9fTl9TU1ApIHtcbiAgICAgICAgZGF0YUhyZWYgPSB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgICAgZGVsQmFzZVBhdGgoYXMpLFxuICAgICAgICAgIF9fTl9TU0dcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGE8UHJpdmF0ZVJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgX19OX1NTR1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgKVxuICAgICAgKVxuICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm9cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcylcbiAgICB9XG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm9cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSlcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9cbiAgYmVmb3JlUG9wU3RhdGUoY2I6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2spIHtcbiAgICB0aGlzLl9icHMgPSBjYlxuICB9XG5cbiAgb25seUFIYXNoQ2hhbmdlKGFzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJylcbiAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJylcblxuICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2hcbiAgfVxuXG4gIHNjcm9sbFRvSGFzaChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpXG4gICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlXG4gICAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICBfcmVzb2x2ZUhyZWYocGFyc2VkSHJlZjogVXJsT2JqZWN0LCBwYWdlczogc3RyaW5nW10pIHtcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRIcmVmXG4gICAgY29uc3QgY2xlYW5QYXRobmFtZSA9IGRlbm9ybWFsaXplUGFnZVBhdGgoZGVsQmFzZVBhdGgocGF0aG5hbWUhKSlcblxuICAgIGlmIChjbGVhblBhdGhuYW1lID09PSAnLzQwNCcgfHwgY2xlYW5QYXRobmFtZSA9PT0gJy9fZXJyb3InKSB7XG4gICAgICByZXR1cm4gcGFyc2VkSHJlZlxuICAgIH1cblxuICAgIC8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbiAgICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUhKSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgcGFnZXMuc29tZSgocGFnZSkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgaXNEeW5hbWljUm91dGUocGFnZSkgJiZcbiAgICAgICAgICBnZXRSb3V0ZVJlZ2V4KHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSEpXG4gICAgICAgICkge1xuICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYWdlKVxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiBwYXJzZWRIcmVmXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBhc3luYyBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSB9ID0gcGFyc2VkXG5cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgdGhpcy5wYWdlTG9hZGVyLnByZWZldGNoRGF0YSh1cmwsIGFzUGF0aCksXG4gICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgXSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPEdvb2RQYWdlQ2FjaGU+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1tjYWNoZUtleV0pIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKVxuICAgIH1cbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwIGFzIEFwcENvbXBvbmVudClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksIGFzKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KGRhdGE6IFByaXZhdGVSb3V0ZUluZm8pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCBhcyBBcHBDb21wb25lbnQpXG4gIH1cbn1cbiIsIi8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgKiBhcyBxdWVyeXN0cmluZyBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzID0gL2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqOiBVcmxPYmplY3QpIHtcbiAgbGV0IHsgYXV0aCwgaG9zdG5hbWUgfSA9IHVybE9ialxuICBsZXQgcHJvdG9jb2wgPSB1cmxPYmoucHJvdG9jb2wgfHwgJydcbiAgbGV0IHBhdGhuYW1lID0gdXJsT2JqLnBhdGhuYW1lIHx8ICcnXG4gIGxldCBoYXNoID0gdXJsT2JqLmhhc2ggfHwgJydcbiAgbGV0IHF1ZXJ5ID0gdXJsT2JqLnF1ZXJ5IHx8ICcnXG4gIGxldCBob3N0OiBzdHJpbmcgfCBmYWxzZSA9IGZhbHNlXG5cbiAgYXV0aCA9IGF1dGggPyBlbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksICc6JykgKyAnQCcgOiAnJ1xuXG4gIGlmICh1cmxPYmouaG9zdCkge1xuICAgIGhvc3QgPSBhdXRoICsgdXJsT2JqLmhvc3RcbiAgfSBlbHNlIGlmIChob3N0bmFtZSkge1xuICAgIGhvc3QgPSBhdXRoICsgKH5ob3N0bmFtZS5pbmRleE9mKCc6JykgPyBgWyR7aG9zdG5hbWV9XWAgOiBob3N0bmFtZSlcbiAgICBpZiAodXJsT2JqLnBvcnQpIHtcbiAgICAgIGhvc3QgKz0gJzonICsgdXJsT2JqLnBvcnRcbiAgICB9XG4gIH1cblxuICBpZiAocXVlcnkgJiYgdHlwZW9mIHF1ZXJ5ID09PSAnb2JqZWN0Jykge1xuICAgIHF1ZXJ5ID0gU3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkgYXMgUGFyc2VkVXJsUXVlcnkpKVxuICB9XG5cbiAgbGV0IHNlYXJjaCA9IHVybE9iai5zZWFyY2ggfHwgKHF1ZXJ5ICYmIGA/JHtxdWVyeX1gKSB8fCAnJ1xuXG4gIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5zdWJzdHIoLTEpICE9PSAnOicpIHByb3RvY29sICs9ICc6J1xuXG4gIGlmIChcbiAgICB1cmxPYmouc2xhc2hlcyB8fFxuICAgICgoIXByb3RvY29sIHx8IHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpICYmIGhvc3QgIT09IGZhbHNlKVxuICApIHtcbiAgICBob3N0ID0gJy8vJyArIChob3N0IHx8ICcnKVxuICAgIGlmIChwYXRobmFtZSAmJiBwYXRobmFtZVswXSAhPT0gJy8nKSBwYXRobmFtZSA9ICcvJyArIHBhdGhuYW1lXG4gIH0gZWxzZSBpZiAoIWhvc3QpIHtcbiAgICBob3N0ID0gJydcbiAgfVxuXG4gIGlmIChoYXNoICYmIGhhc2hbMF0gIT09ICcjJykgaGFzaCA9ICcjJyArIGhhc2hcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2hbMF0gIT09ICc/Jykgc2VhcmNoID0gJz8nICsgc2VhcmNoXG5cbiAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csIGVuY29kZVVSSUNvbXBvbmVudClcbiAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoJyMnLCAnJTIzJylcblxuICByZXR1cm4gYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWBcbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0TG9jYXRpb25PcmlnaW4gfSBmcm9tICcuLi8uLi91dGlscydcblxuY29uc3QgRFVNTVlfQkFTRSA9IG5ldyBVUkwoXG4gIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gJ2h0dHA6Ly9uJyA6IGdldExvY2F0aW9uT3JpZ2luKClcbilcblxuLyoqXG4gKiBQYXJzZXMgcGF0aC1yZWxhdGl2ZSB1cmxzIChlLmcuIGAvaGVsbG8vd29ybGQ/Zm9vPWJhcmApLiBJZiB1cmwgaXNuJ3QgcGF0aC1yZWxhdGl2ZVxuICogKGUuZy4gYC4vaGVsbG9gKSB0aGVuIGF0IGxlYXN0IGJhc2UgbXVzdCBiZS5cbiAqIEFic29sdXRlIHVybHMgYXJlIHJlamVjdGVkIHdpdGggb25lIGV4Y2VwdGlvbiwgaW4gdGhlIGJyb3dzZXIsIGFic29sdXRlIHVybHMgdGhhdCBhcmUgb25cbiAqIHRoZSBjdXJyZW50IG9yaWdpbiB3aWxsIGJlIHBhcnNlZCBhcyByZWxhdGl2ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VSZWxhdGl2ZVVybCh1cmw6IHN0cmluZywgYmFzZT86IHN0cmluZykge1xuICBjb25zdCByZXNvbHZlZEJhc2UgPSBiYXNlID8gbmV3IFVSTChiYXNlLCBEVU1NWV9CQVNFKSA6IERVTU1ZX0JBU0VcbiAgY29uc3Qge1xuICAgIHBhdGhuYW1lLFxuICAgIHNlYXJjaFBhcmFtcyxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmLFxuICAgIG9yaWdpbixcbiAgICBwcm90b2NvbCxcbiAgfSA9IG5ldyBVUkwodXJsLCByZXNvbHZlZEJhc2UpXG4gIGlmIChcbiAgICBvcmlnaW4gIT09IERVTU1ZX0JBU0Uub3JpZ2luIHx8XG4gICAgKHByb3RvY29sICE9PSAnaHR0cDonICYmIHByb3RvY29sICE9PSAnaHR0cHM6JylcbiAgKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQ6IGludmFsaWQgcmVsYXRpdmUgVVJMJylcbiAgfVxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIHNlYXJjaFBhcmFtcyxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmOiBocmVmLnNsaWNlKERVTU1ZX0JBU0Uub3JpZ2luLmxlbmd0aCksXG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICduZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAnXG5cbmV4cG9ydCB7IHBhdGhUb1JlZ2V4cCB9XG5cbmV4cG9ydCBjb25zdCBtYXRjaGVyT3B0aW9ucyA9IHtcbiAgc2Vuc2l0aXZlOiBmYWxzZSxcbiAgZGVsaW1pdGVyOiAnLycsXG4gIGRlY29kZTogZGVjb2RlUGFyYW0sXG59XG5cbmV4cG9ydCBjb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zID0ge1xuICAuLi5tYXRjaGVyT3B0aW9ucyxcbiAgc3RyaWN0OiB0cnVlLFxufVxuXG5leHBvcnQgZGVmYXVsdCAoY3VzdG9tUm91dGUgPSBmYWxzZSkgPT4ge1xuICByZXR1cm4gKHBhdGg6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IGtleXM6IHBhdGhUb1JlZ2V4cC5LZXlbXSA9IFtdXG4gICAgY29uc3QgbWF0Y2hlclJlZ2V4ID0gcGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChcbiAgICAgIHBhdGgsXG4gICAgICBrZXlzLFxuICAgICAgY3VzdG9tUm91dGUgPyBjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zIDogbWF0Y2hlck9wdGlvbnNcbiAgICApXG4gICAgY29uc3QgbWF0Y2hlciA9IHBhdGhUb1JlZ2V4cC5yZWdleHBUb0Z1bmN0aW9uKFxuICAgICAgbWF0Y2hlclJlZ2V4LFxuICAgICAga2V5cyxcbiAgICAgIG1hdGNoZXJPcHRpb25zXG4gICAgKVxuXG4gICAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCwgcGFyYW1zPzogYW55KSA9PiB7XG4gICAgICBjb25zdCByZXMgPSBwYXRobmFtZSA9PSBudWxsID8gZmFsc2UgOiBtYXRjaGVyKHBhdGhuYW1lKVxuICAgICAgaWYgKCFyZXMpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGlmIChjdXN0b21Sb3V0ZSkge1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgICAgICAgLy8gdW5uYW1lZCBwYXJhbXMgc2hvdWxkIGJlIHJlbW92ZWQgYXMgdGhleVxuICAgICAgICAgIC8vIGFyZSBub3QgYWxsb3dlZCB0byBiZSB1c2VkIGluIHRoZSBkZXN0aW5hdGlvblxuICAgICAgICAgIGlmICh0eXBlb2Yga2V5Lm5hbWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBkZWxldGUgKHJlcy5wYXJhbXMgYXMgYW55KVtrZXkubmFtZV1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsgLi4ucGFyYW1zLCAuLi5yZXMucGFyYW1zIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVjb2RlUGFyYW0ocGFyYW06IHN0cmluZykge1xuICB0cnkge1xuICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nKVxuICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgdGhyb3cgZXJyXG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi9xdWVyeXN0cmluZydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICduZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAnXG5cbnR5cGUgUGFyYW1zID0geyBbcGFyYW06IHN0cmluZ106IGFueSB9XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByZXBhcmVEZXN0aW5hdGlvbihcbiAgZGVzdGluYXRpb246IHN0cmluZyxcbiAgcGFyYW1zOiBQYXJhbXMsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgYXBwZW5kUGFyYW1zVG9RdWVyeTogYm9vbGVhbixcbiAgYmFzZVBhdGg6IHN0cmluZ1xuKSB7XG4gIGxldCBwYXJzZWREZXN0aW5hdGlvbjoge1xuICAgIHF1ZXJ5PzogUGFyc2VkVXJsUXVlcnlcbiAgICBwcm90b2NvbD86IHN0cmluZ1xuICAgIGhvc3RuYW1lPzogc3RyaW5nXG4gICAgcG9ydD86IHN0cmluZ1xuICB9ICYgUmV0dXJuVHlwZTx0eXBlb2YgcGFyc2VSZWxhdGl2ZVVybD4gPSB7fSBhcyBhbnlcblxuICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHtcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgc2VhcmNoUGFyYW1zLFxuICAgICAgaGFzaCxcbiAgICAgIGhvc3RuYW1lLFxuICAgICAgcG9ydCxcbiAgICAgIHByb3RvY29sLFxuICAgICAgc2VhcmNoLFxuICAgICAgaHJlZixcbiAgICB9ID0gbmV3IFVSTChkZXN0aW5hdGlvbilcblxuICAgIHBhcnNlZERlc3RpbmF0aW9uID0ge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBzZWFyY2hQYXJhbXMsXG4gICAgICBoYXNoLFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBob3N0bmFtZSxcbiAgICAgIHBvcnQsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH1cbiAgfVxuXG4gIHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5ID0gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5zZWFyY2hQYXJhbXNcbiAgKVxuICBjb25zdCBkZXN0UXVlcnkgPSBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeVxuICBjb25zdCBkZXN0UGF0aCA9IGAke3BhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lIX0ke1xuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggfHwgJydcbiAgfWBcbiAgY29uc3QgZGVzdFBhdGhQYXJhbUtleXM6IHBhdGhUb1JlZ2V4cC5LZXlbXSA9IFtdXG4gIHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoZGVzdFBhdGgsIGRlc3RQYXRoUGFyYW1LZXlzKVxuXG4gIGNvbnN0IGRlc3RQYXRoUGFyYW1zID0gZGVzdFBhdGhQYXJhbUtleXMubWFwKChrZXkpID0+IGtleS5uYW1lKVxuXG4gIGxldCBkZXN0aW5hdGlvbkNvbXBpbGVyID0gcGF0aFRvUmVnZXhwLmNvbXBpbGUoXG4gICAgZGVzdFBhdGgsXG4gICAgLy8gd2UgZG9uJ3QgdmFsaWRhdGUgd2hpbGUgY29tcGlsaW5nIHRoZSBkZXN0aW5hdGlvbiBzaW5jZSB3ZSBzaG91bGRcbiAgICAvLyBoYXZlIGFscmVhZHkgdmFsaWRhdGVkIGJlZm9yZSB3ZSBnb3QgdG8gdGhpcyBwb2ludCBhbmQgdmFsaWRhdGluZ1xuICAgIC8vIGJyZWFrcyBjb21waWxpbmcgZGVzdGluYXRpb25zIHdpdGggbmFtZWQgcGF0dGVybiBwYXJhbXMgZnJvbSB0aGUgc291cmNlXG4gICAgLy8gZS5nLiAvc29tZXRoaW5nOmhlbGxvKC4qKSAtPiAvYW5vdGhlci86aGVsbG8gaXMgYnJva2VuIHdpdGggdmFsaWRhdGlvblxuICAgIC8vIHNpbmNlIGNvbXBpbGUgdmFsaWRhdGlvbiBpcyBtZWFudCBmb3IgcmV2ZXJzaW5nIGFuZCBub3QgZm9yIGluc2VydGluZ1xuICAgIC8vIHBhcmFtcyBmcm9tIGEgc2VwYXJhdGUgcGF0aC1yZWdleCBpbnRvIGFub3RoZXJcbiAgICB7IHZhbGlkYXRlOiBmYWxzZSB9XG4gIClcbiAgbGV0IG5ld1VybFxuXG4gIC8vIHVwZGF0ZSBhbnkgcGFyYW1zIGluIHF1ZXJ5IHZhbHVlc1xuICBmb3IgKGNvbnN0IFtrZXksIHN0ck9yQXJyYXldIG9mIE9iamVjdC5lbnRyaWVzKGRlc3RRdWVyeSkpIHtcbiAgICBsZXQgdmFsdWUgPSBBcnJheS5pc0FycmF5KHN0ck9yQXJyYXkpID8gc3RyT3JBcnJheVswXSA6IHN0ck9yQXJyYXlcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIC8vIHRoZSB2YWx1ZSBuZWVkcyB0byBzdGFydCB3aXRoIGEgZm9yd2FyZC1zbGFzaCB0byBiZSBjb21waWxlZFxuICAgICAgLy8gY29ycmVjdGx5XG4gICAgICB2YWx1ZSA9IGAvJHt2YWx1ZX1gXG4gICAgICBjb25zdCBxdWVyeUNvbXBpbGVyID0gcGF0aFRvUmVnZXhwLmNvbXBpbGUodmFsdWUsIHsgdmFsaWRhdGU6IGZhbHNlIH0pXG4gICAgICB2YWx1ZSA9IHF1ZXJ5Q29tcGlsZXIocGFyYW1zKS5zdWJzdHIoMSlcbiAgICB9XG4gICAgZGVzdFF1ZXJ5W2tleV0gPSB2YWx1ZVxuICB9XG5cbiAgLy8gYWRkIHBhdGggcGFyYW1zIHRvIHF1ZXJ5IGlmIGl0J3Mgbm90IGEgcmVkaXJlY3QgYW5kIG5vdFxuICAvLyBhbHJlYWR5IGRlZmluZWQgaW4gZGVzdGluYXRpb24gcXVlcnkgb3IgcGF0aFxuICBjb25zdCBwYXJhbUtleXMgPSBPYmplY3Qua2V5cyhwYXJhbXMpXG5cbiAgaWYgKFxuICAgIGFwcGVuZFBhcmFtc1RvUXVlcnkgJiZcbiAgICAhcGFyYW1LZXlzLnNvbWUoKGtleSkgPT4gZGVzdFBhdGhQYXJhbXMuaW5jbHVkZXMoa2V5KSlcbiAgKSB7XG4gICAgZm9yIChjb25zdCBrZXkgb2YgcGFyYW1LZXlzKSB7XG4gICAgICBpZiAoIShrZXkgaW4gZGVzdFF1ZXJ5KSkge1xuICAgICAgICBkZXN0UXVlcnlba2V5XSA9IHBhcmFtc1trZXldXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc2hvdWxkQWRkQmFzZVBhdGggPSBkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykgJiYgYmFzZVBhdGhcblxuICB0cnkge1xuICAgIG5ld1VybCA9IGAke3Nob3VsZEFkZEJhc2VQYXRoID8gYmFzZVBhdGggOiAnJ30ke2VuY29kZVVSSShcbiAgICAgIGRlc3RpbmF0aW9uQ29tcGlsZXIocGFyYW1zKVxuICAgICl9YFxuXG4gICAgY29uc3QgW3BhdGhuYW1lLCBoYXNoXSA9IG5ld1VybC5zcGxpdCgnIycpXG4gICAgcGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggPSBgJHtoYXNoID8gJyMnIDogJyd9JHtoYXNoIHx8ICcnfWBcbiAgICBkZWxldGUgcGFyc2VkRGVzdGluYXRpb24uc2VhcmNoXG4gICAgZGVsZXRlIHBhcnNlZERlc3RpbmF0aW9uLnNlYXJjaFBhcmFtc1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBpZiAoZXJyLm1lc3NhZ2UubWF0Y2goL0V4cGVjdGVkIC4qPyB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5LykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYFRvIHVzZSBhIG11bHRpLW1hdGNoIGluIHRoZSBkZXN0aW5hdGlvbiB5b3UgbXVzdCBhZGQgXFxgKlxcYCBhdCB0aGUgZW5kIG9mIHRoZSBwYXJhbSBuYW1lIHRvIHNpZ25pZnkgaXQgc2hvdWxkIHJlcGVhdC4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW52YWxpZC1tdWx0aS1tYXRjaGBcbiAgICAgIClcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH1cblxuICAvLyBRdWVyeSBtZXJnZSBvcmRlciBsb3dlc3QgcHJpb3JpdHkgdG8gaGlnaGVzdFxuICAvLyAxLiBpbml0aWFsIFVSTCBxdWVyeSB2YWx1ZXNcbiAgLy8gMi4gcGF0aCBzZWdtZW50IHZhbHVlc1xuICAvLyAzLiBkZXN0aW5hdGlvbiBzcGVjaWZpZWQgcXVlcnkgdmFsdWVzXG4gIHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5ID0ge1xuICAgIC4uLnF1ZXJ5LFxuICAgIC4uLnBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5LFxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBuZXdVcmwsXG4gICAgcGFyc2VkRGVzdGluYXRpb24sXG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KFxuICBzZWFyY2hQYXJhbXM6IFVSTFNlYXJjaFBhcmFtc1xuKTogUGFyc2VkVXJsUXVlcnkge1xuICBjb25zdCBxdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgIGlmICh0eXBlb2YgcXVlcnlba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSB2YWx1ZVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSkge1xuICAgICAgOyhxdWVyeVtrZXldIGFzIHN0cmluZ1tdKS5wdXNoKHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV0gYXMgc3RyaW5nLCB2YWx1ZV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBxdWVyeVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhcbiAgdXJsUXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBjb25zdCByZXN1bHQgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcbiAgT2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4gcmVzdWx0LmFwcGVuZChrZXksIGl0ZW0pKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQuc2V0KGtleSwgdmFsdWUpXG4gICAgfVxuICB9KVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24oXG4gIHRhcmdldDogVVJMU2VhcmNoUGFyYW1zLFxuICAuLi5zZWFyY2hQYXJhbXNMaXN0OiBVUkxTZWFyY2hQYXJhbXNbXVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgc2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKChzZWFyY2hQYXJhbXMpID0+IHtcbiAgICBBcnJheS5mcm9tKHNlYXJjaFBhcmFtcy5rZXlzKCkpLmZvckVhY2goKGtleSkgPT4gdGFyZ2V0LmRlbGV0ZShrZXkpKVxuICAgIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB0YXJnZXQuYXBwZW5kKGtleSwgdmFsdWUpKVxuICB9KVxuICByZXR1cm4gdGFyZ2V0XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHBhdGhNYXRjaCBmcm9tICcuL3BhdGgtbWF0Y2gnXG5pbXBvcnQgcHJlcGFyZURlc3RpbmF0aW9uIGZyb20gJy4vcHJlcGFyZS1kZXN0aW5hdGlvbidcbmltcG9ydCB7IFJld3JpdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvbG9hZC1jdXN0b20tcm91dGVzJ1xuXG5jb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXIgPSBwYXRoTWF0Y2godHJ1ZSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVzb2x2ZVJld3JpdGVzKFxuICBhc1BhdGg6IHN0cmluZyxcbiAgcGFnZXM6IHN0cmluZ1tdLFxuICBiYXNlUGF0aDogc3RyaW5nLFxuICByZXdyaXRlczogUmV3cml0ZVtdLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gIHJlc29sdmVIcmVmOiAocGF0aDogc3RyaW5nKSA9PiBzdHJpbmdcbikge1xuICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGFzUGF0aCkpIHtcbiAgICBmb3IgKGNvbnN0IHJld3JpdGUgb2YgcmV3cml0ZXMpIHtcbiAgICAgIGNvbnN0IG1hdGNoZXIgPSBjdXN0b21Sb3V0ZU1hdGNoZXIocmV3cml0ZS5zb3VyY2UpXG4gICAgICBjb25zdCBwYXJhbXMgPSBtYXRjaGVyKGFzUGF0aClcblxuICAgICAgaWYgKHBhcmFtcykge1xuICAgICAgICBpZiAoIXJld3JpdGUuZGVzdGluYXRpb24pIHtcbiAgICAgICAgICAvLyB0aGlzIGlzIGEgcHJveGllZCByZXdyaXRlIHdoaWNoIGlzbid0IGhhbmRsZWQgb24gdGhlIGNsaWVudFxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGVzdFJlcyA9IHByZXBhcmVEZXN0aW5hdGlvbihcbiAgICAgICAgICByZXdyaXRlLmRlc3RpbmF0aW9uLFxuICAgICAgICAgIHBhcmFtcyxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICB0cnVlLFxuICAgICAgICAgIHJld3JpdGUuYmFzZVBhdGggPT09IGZhbHNlID8gJycgOiBiYXNlUGF0aFxuICAgICAgICApXG4gICAgICAgIGFzUGF0aCA9IGRlc3RSZXMucGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIGRlc3RSZXMucGFyc2VkRGVzdGluYXRpb24ucXVlcnkpXG5cbiAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKGFzUGF0aCkpIHtcbiAgICAgICAgICAvLyBjaGVjayBpZiB3ZSBub3cgbWF0Y2ggYSBwYWdlIGFzIHRoaXMgbWVhbnMgd2UgYXJlIGRvbmVcbiAgICAgICAgICAvLyByZXNvbHZpbmcgdGhlIHJld3JpdGVzXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNoZWNrIGlmIHdlIG1hdGNoIGEgZHluYW1pYy1yb3V0ZSwgaWYgc28gd2UgYnJlYWsgdGhlIHJld3JpdGVzIGNoYWluXG4gICAgICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IHJlc29sdmVIcmVmKGFzUGF0aClcblxuICAgICAgICBpZiAocmVzb2x2ZWRIcmVmICE9PSBhc1BhdGggJiYgcGFnZXMuaW5jbHVkZXMocmVzb2x2ZWRIcmVmKSkge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFzUGF0aFxufVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCJpbnRlcmZhY2UgR3JvdXAge1xuICBwb3M6IG51bWJlclxuICByZXBlYXQ6IGJvb2xlYW5cbiAgb3B0aW9uYWw6IGJvb2xlYW5cbn1cblxuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW06IHN0cmluZykge1xuICBjb25zdCBvcHRpb25hbCA9IHBhcmFtLnN0YXJ0c1dpdGgoJ1snKSAmJiBwYXJhbS5lbmRzV2l0aCgnXScpXG4gIGlmIChvcHRpb25hbCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMSwgLTEpXG4gIH1cbiAgY29uc3QgcmVwZWF0ID0gcGFyYW0uc3RhcnRzV2l0aCgnLi4uJylcbiAgaWYgKHJlcGVhdCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMylcbiAgfVxuICByZXR1cm4geyBrZXk6IHBhcmFtLCByZXBlYXQsIG9wdGlvbmFsIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICByb3V0ZUtleXM/OiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH1cbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH1cbn0ge1xuICBjb25zdCBzZWdtZW50cyA9IChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG4gICAgLnNsaWNlKDEpXG4gICAgLnNwbGl0KCcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICBncm91cHNba2V5XSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdCwgb3B0aW9uYWwgfVxuICAgICAgICByZXR1cm4gcmVwZWF0ID8gKG9wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgIH1cbiAgICB9KVxuICAgIC5qb2luKCcnKVxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgbGV0IHJvdXRlS2V5Q2hhckxlbmd0aCA9IDFcblxuICAgIC8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbiAgICBjb25zdCBnZXRTYWZlUm91dGVLZXkgPSAoKSA9PiB7XG4gICAgICBsZXQgcm91dGVLZXkgPSAnJ1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlS2V5Q2hhckxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdXRlS2V5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSlcbiAgICAgICAgcm91dGVLZXlDaGFyQ29kZSsrXG5cbiAgICAgICAgaWYgKHJvdXRlS2V5Q2hhckNvZGUgPiAxMjIpIHtcbiAgICAgICAgICByb3V0ZUtleUNoYXJMZW5ndGgrK1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcm91dGVLZXlcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZUtleXM6IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XG5cbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICAgIC8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbiAgICAgICAgICAvLyB0aGUgbmFtZWQgcmVnZXhcbiAgICAgICAgICBsZXQgY2xlYW5lZEtleSA9IGtleS5yZXBsYWNlKC9cXFcvZywgJycpXG4gICAgICAgICAgbGV0IGludmFsaWRLZXkgPSBmYWxzZVxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4gICAgICAgICAgLy8gc2FmZSBrZXlcbiAgICAgICAgICBpZiAoY2xlYW5lZEtleS5sZW5ndGggPT09IDAgfHwgY2xlYW5lZEtleS5sZW5ndGggPiAzMCkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLCAxKSkpKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbnZhbGlkS2V5KSB7XG4gICAgICAgICAgICBjbGVhbmVkS2V5ID0gZ2V0U2FmZVJvdXRlS2V5KClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUtleXNbY2xlYW5lZEtleV0gPSBrZXlcbiAgICAgICAgICByZXR1cm4gcmVwZWF0XG4gICAgICAgICAgICA/IG9wdGlvbmFsXG4gICAgICAgICAgICAgID8gYCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2BcbiAgICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWBcbiAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuam9pbignJylcblxuICAgIHJldHVybiB7XG4gICAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICAgIGdyb3VwcyxcbiAgICAgIHJvdXRlS2V5cyxcbiAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgIGdyb3VwcyxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgZm9ybWF0VXJsIH0gZnJvbSAnLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybCdcbmltcG9ydCB7IE1hbmlmZXN0SXRlbSB9IGZyb20gJy4uL3NlcnZlci9sb2FkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnLi4vLi4vbGliL2xvYWQtZW52LWNvbmZpZydcbmltcG9ydCB7IEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG4vKipcbiAqIFdlYiB2aXRhbHMgcHJvdmlkZWQgdG8gX2FwcC5yZXBvcnRXZWJWaXRhbHMgYnkgQ29yZSBXZWIgVml0YWxzIHBsdWdpbiBkZXZlbG9wZWQgYnkgR29vZ2xlIENocm9tZSB0ZWFtLlxuICogaHR0cHM6Ly9uZXh0anMub3JnL2Jsb2cvbmV4dC05LTQjaW50ZWdyYXRlZC13ZWItdml0YWxzLXJlcG9ydGluZ1xuICovXG5leHBvcnQgdHlwZSBOZXh0V2ViVml0YWxzTWV0cmljID0ge1xuICBpZDogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIHN0YXJ0VGltZTogbnVtYmVyXG4gIHZhbHVlOiBudW1iZXJcbn1cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiBzdHJpbmdbXVxuICBlcnI/OiBFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9XG4gIGdzcD86IGJvb2xlYW5cbiAgZ3NzcD86IGJvb2xlYW5cbiAgY3VzdG9tU2VydmVyPzogYm9vbGVhblxuICBnaXA/OiBib29sZWFuXG4gIGFwcEdpcD86IGJvb2xlYW5cbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGRvY0NvbXBvbmVudHNSZW5kZXJlZDoge1xuICAgIEh0bWw/OiBib29sZWFuXG4gICAgTWFpbj86IGJvb2xlYW5cbiAgICBIZWFkPzogYm9vbGVhblxuICAgIE5leHRTY3JpcHQ/OiBib29sZWFuXG4gIH1cbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdFxuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG4gIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nOiBzdHJpbmdcbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0QXBpUmVxdWVzdCBleHRlbmRzIEluY29taW5nTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYHF1ZXJ5YCB2YWx1ZXMgZnJvbSB1cmxcbiAgICovXG4gIHF1ZXJ5OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW11cbiAgfVxuICAvKipcbiAgICogT2JqZWN0IG9mIGBjb29raWVzYCBmcm9tIGhlYWRlclxuICAgKi9cbiAgY29va2llczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9XG5cbiAgYm9keTogYW55XG5cbiAgZW52OiBFbnZcblxuICBwcmV2aWV3PzogYm9vbGVhblxuICAvKipcbiAgICogUHJldmlldyBkYXRhIHNldCBvbiB0aGUgcmVxdWVzdCwgaWYgYW55XG4gICAqICovXG4gIHByZXZpZXdEYXRhPzogYW55XG59XG5cbi8qKlxuICogU2VuZCBib2R5IG9mIHJlc3BvbnNlXG4gKi9cbnR5cGUgU2VuZDxUPiA9IChib2R5OiBUKSA9PiB2b2lkXG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXNwb25zZVxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpUmVzcG9uc2U8VCA9IGFueT4gPSBTZXJ2ZXJSZXNwb25zZSAmIHtcbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBgYW55YCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBzZW5kOiBTZW5kPFQ+XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGpzb25gIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIGpzb246IFNlbmQ8VD5cbiAgc3RhdHVzOiAoc3RhdHVzQ29kZTogbnVtYmVyKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3QodXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3Qoc3RhdHVzOiBudW1iZXIsIHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybDogVXJsT2JqZWN0KTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvcm1hdFVybCh1cmwpXG59XG5cbmV4cG9ydCBjb25zdCBTUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCdcbmV4cG9ydCBjb25zdCBTVCA9XG4gIFNQICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nXG4iLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZVBhdGhTZXA9bm9ybWFsaXplUGF0aFNlcDtleHBvcnRzLmRlbm9ybWFsaXplUGFnZVBhdGg9ZGVub3JtYWxpemVQYWdlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVQYXRoU2VwKHBhdGgpe3JldHVybiBwYXRoLnJlcGxhY2UoL1xcXFwvZywnLycpO31mdW5jdGlvbiBkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhZ2Upe3BhZ2U9bm9ybWFsaXplUGF0aFNlcChwYWdlKTtpZihwYWdlLnN0YXJ0c1dpdGgoJy9pbmRleC8nKSl7cGFnZT1wYWdlLnNsaWNlKDYpO31lbHNlIGlmKHBhZ2U9PT0nL2luZGV4Jyl7cGFnZT0nLyc7fXJldHVybiBwYWdlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvU3VjY2Vzcy1iYTY1NWNjNmY2NWE0ZjRjZjc1MDZmMWJjMTA5MzA4Zi5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFNd0FBQUFyQ0FZQUFBQTBZMmZJQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQU45U1VSQlZIZ0I3WjJMZGRvd0ZJYXZleklBRzlRYmxFNVFkd05HWUlPU0NXQUQyQUEyWUFUSUJKQUpUQ2FBVHFEcTRsK05Zc3dqUkFacy9kODVpckdrK0lGMWRSK1NUQ0tFUklZeHBwTWt5Yzdieit3bXc2N216L3h5UXFMRENzWFVwcFZOVzkyV3lrYm1JMTBoSkFhMHNkczBoTmJ3OCtkSUU1dDZKLzYvVTNVOElhU05xS0JBUzR3a0FKNzJ5WVNRTmxMV0VsODlWa2dCSktUMXdQZFpDQ0hrUEZaWVVpR0VFRUxxUmRWTlNDZUprQ1lDNTc1em9peDFPeHFiem1tbmtWaEJLRnBsWUhxa3ZJOUkyWGMzTUpNemJFWmlSU05naUlSMWo1VHZ4Mkw4akZRSWlaUno3UjlXMkg0NnpaUCtTWkprSTRSRVFIbmlwWEpCKzMrMTZlM2NnWWYwYlVpYjBEbGttSHlaeVpWOE8xSDJpdTNlR2FMZ2tLYUNTTENPMU05dFdrc3hoYitXRTNXOHlXZTVFTkl3SUN4YnBJSGNBcHowTmljakpEQUlDNmZ5U1p4bU1sd2ZROGg1NElxWVlPNElnZ0pqK2pmazNzQjlHR29JV0FJQTdYSjBNUE9hQStvRnpweC93MVZwNUY3WXR2Y0hQb295a1FDWTk0Vm9xWVFFa2pnTGViR0VYQW9HRlExOGpVd0NZdXFjWXdtSlRJV1FHNEtwWFptMEJZMVFDQ0VCYUgyMHlyTUQ4MnREZTRTZ0hTMXE4U2tPejVYZmRTSnk2V1p6anVlUVM0RzU1ZHJPRm9Qb3Rma1ZYbVNzTC9mR0N3NWtRc2dGd0NxNWFRTTJUVmhNU1NFaWpXaW9qd0RVcmpQWHB2Uno0Z0ltK3hnbUY0WG1FdkNsdWJFY1pTeWsxWmhpcXYzQzgwOG03Q3cvQ2Z5Y2dUbng3bHZTRHZDY1YzVTc4dEVDdFQxa0w5UXNUREdGS2hOeVd6ejFiZEF6RGRnelBTWVFrbjdKNU9LenVqVXcyZHlENElLMkJ3VUJISC9zaE90SkhoRkUzS1p3S05tajFRdzZzTFFpdjBjenJBRkErMnc5MDIzQkJ4Y081NC9BbjNSYVpDU2syZUNoVHVEcjlDcktxWDJ1QUpyRG1Wb0wrSkdwUkVRaUVXS0tsN0tsVXJ4QjVNV21aWklrUzRrY2RDU1pUYjkwMzM0bnp4WGw2bytzK2FPcEVZR2UwbWtnUjZlaVhqVE9xbWRpL1k5RUNqa2dTZzFUUmdYRDlwanJVcDRLMEZhS2QxaTVkMW05MkhxTldsVUtrMGtGWDdjLzhMbG43K090Vkc4azcvZEtEWElFQ3N3UklERHEvMmdEMDRhbSt6dmJrSDZYNm1tNVR1WFJodmJYcG8wVURXNHROWUxyMDVRaTZlZGxoZURQY1IrS0U0am51cStQa0VvUVlGaVZvblBUaW5vOW1EMDVIT2E5MDF4UnIrK1ZuNm8zTTRmMGoxeGYxekRRRVlRbklWOEN3WUtmYnY5RTFFaDc5eVUrcDE3ZUpXd3E4aVk0M2dacFYyVkdNWmdSbG44cmtqMThjMzRYcVFBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQU13QUFBQXJDQVlBQUFBMFkyZklBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJuUVUxQkFBQ3hqd3Y4WVFVQUFBTnZTVVJCVkhnQjdaM3JkZHBBRUlXSG5QeVBTMWhYRUplZ2RPQlVFRkpCbkFxZ2d5Z1ZRQWU0QTl3QlRnWGdDc0FWYkdhc0s3UGVDQ3lDSGtpNjN6bDdKS1FCQ1dsbjU3Rzcwa2hJcFhqdkhWWjNvOUZvRisxTGRmRkp5eFdLOGJWQWJobi9yc3A4S1RqV1dCY2JmTnlvekVaSXJYd1VjalphY1dlNlNMUzRZTE90N3lMUno4SDJuWngzVEZPNFdiVE5sT2E2UUM2UlRLRWVoWndGRmVZSVd0bHVKS3RzVnRGdDNXbjVyaFh2UGhKOTF2S2c1VW4yeXZBYy8xNlJsU2lpakp4WkpUMi9hOWtycVRzZ2F1ZTlzQldWdDRVcHpZTisvNmVRa3hrSmVYV2pZcGNHTHRRUHlkd2VxMmltRUduWFhCLzlINGxrTHFBcGp5bi9rLzZIdTBqRzluM1Q4a2ZMSTYwUmVjVXFoNVk3TFFzdFc1K1JGc2hkd2FYcFBSWVBCZGZDWS8xT0NOR0tjSXRLc2JiNEE1WGxSa2plbU5qMW1NTXl4ZnNUWHF1ZVlTNFdMTWhTeTZwZy8yQXNSOVhZOVl3YW0xc2gzUVUzMGdjM05SVlNHV2lNeHBFN3k4Ym4wamwwazB4QllGMmNrTm9wY3M4Q3BYSkMyZ1UrOUM4R3BaZExFQ042dU1WaldxR0dnYUpzZ3d4TzZobDhYaXl3TW1uZ0lrK0ZOQWNVWm9FbFc2c09nWHZtQ3JielBwNUxyaGhDZWsrUWFVdUVsQWRwM2tua2Nqa2h2UVgzZkI2NGJMWWNDM2tmQklaNWdKZ0lHUlJJQ2xqL3prekkreUJBZEVJR0RXT2FnTUR0WW54Q1NoUEVPVTRhb2xYRkxZaFBsbXhKU0JsUWQ2WkJuRk83NGlBVHU1SzJ3QWt3UGlIL0RWejJYSEZxalhOODF1bTZicTFSOTlubzEwUUlPUk1vVHUwVnVSRmxnZmtjQ3lFTjQ3czBicTBnUnVGd0ZkSVk4R0R5dnJ1SlZFeWwxaWJ3OXhpamtOYUFxellQT2tBcm1hT0QrSHNwVlFGVFNFVWhGd0dzemJvcUx3ZUpCcy82VFVnSkVHNjhqSXpQdDMwNDRjc1R6LzRUMGtIZ3NvM2xSUENBeGQreWYxaGlxWU1sUVp6Q0NWdWtjL2hzd21FZTN6aXBBNWlqOEVDSkVOSlJFRy9uRFgvbDJiUmNZZFlJZk9pS2tjNFRaTlBXUWdncHg2a0dBTm0zNVp2c20rZndlakpnamlrUkxKTi9TUndFc1Fwbk9aSkJFaWpFNUloTWxsNkd1WG1UYXlaa1NNQm9wRkFhZDBERzR2bFovc0VKSVFQbldDYVlPa0lJSVlRUTBqcWUwMVlJS1FlR2gzSFVNdWtuVlk5TThkbkRON3dRMGtmUUs3K3RRbkdDSWY1OHlDRHBKeGhvbVViYmJIYndDck1vcDBmNlcvNTVPOTB4ZVVKNkNlS1FwZCsvY2pDSjlvZmNIL29kdm5hY0RCS3pJcGdnbG4rZUJydnR0ZXVGU3ZNWGFkWW9ob2IzcjV3QUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9iYW5uZXJCZy0xYjA5MzUyNGJhYTZmOGJkMWY5ZTI5NWYyNmQ2ZWNlOC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFFQUFBQUJBQ0FZQUFBQ3FhWEhlQUFBQUJITkNTVlFJQ0FnSWZBaGtpQUFBQUFsd1NGbHpBQUFCMkFBQUFkZ0IrbHltY2dBQUFCbDBSVmgwVTI5bWRIZGhjbVVBZDNkM0xtbHVhM05qWVhCbExtOXlaNXZ1UEJvQUFBb21TVVJCVkhpYzdacDlWRlJsSHNjLzl3NHpETzhNOGlLRWlvQVN2cFdscFpabnNkWGV0eTF4VzYya3NoY3pxM05LelR4bGVVcVAxbHJheVRJTHkzUzMyRnF0VE1zNmlwcTZacjRCQ29rSUFpSUlBelBNTURBRGQrYmUvV09RanN3TWpqQ0N1OHZubkRsbjd2UDIrLzIrOXo3Mzl6elBEUFRTU3krOTlOS0x0d3dCU2dHRG0wOHVFTkpqbnNGN0h2elNBN044WlNRRFVGUXFsYUxSYUJTTlJxT28xV3BGRUFRRlVJQlVYeG5xQk1YQUJYNnBWS3J6Zm1WNTZ1VFhHVXVwcWFtTUdERUNBTDFlejVFalI2aXJxK3ZNVUQ0blBUMGRRUkJvYkd5a3NyS1Nnd2NQZHRqK1lnTG9nRDhEQXdGL1lCaEFkWFUxT1RrNUFEUTFOZEhVMUhTKy9RdEFUeWtSQVpDYm13dUFKRWxZTEpiemRkY0F5MXEvRzRFRHdLNkxEWGc3emptay9JOSt0Z0Jhd1VQd0NRaEN2Z0NCOTkwL25aR2pia1FVeElzSmRzWGpVTURjSlBGdFZpWkZ2K1VCTFBNa3dGTGdwYWVlZTVGNXJ5enBQZys3QWJPa29xWmF6MTAzeEdPM1M5V2VibXNxd08xM1QrNUcxN29IbGFBUUVSbE5WRXdjUUl3bkFkUUFBUUdCM2VaWXR5TTRILzVPcFVGZnNlVFZ1V3o4WXIxTGVmeUFCUDcxL1I0MEd2L0w3a09QQ3JCN3h6Wk1KaVBxZ0ZCb2ZSdlpiWTNrNXgzbFhPVloraWNrVWw1YXdwbnkwMTJ5RXhNVFIzS0srelZhandwd25qdGYzNFBLejNtMzk2NStsSnFUK3dIUTE1empqMk5Ta1dXNXl6WTJidHZIdGRmZDRGSitSUWhRc0hVbGdzcnBpa1ZmMWxiZUp6S2FKNStaUzNscFNaZkdqNHJwUzBycU1MZDFQU3BBYUpnT2dLSmRuMTVRTHFwVUJJZUVJSXJpWlUvRFBoWEE0WENRbDNPSXN0T25VR1Nad1ZjUFkraUlrUjdiTDEvMUtRWEhjMXpLNCtMN0U5RW55cGV1ZWNSbkFoell0NXVYbm4vUzVYRWRkZU5OckZpOW5yajQvaTU5RWhLVFNVaE05cFVMbmFMTEF0UWI2OGphc0pZVnl4Wmh0MHZFeHNZU0hCeU1KRW5vOVhvT0hkakhnNU1uOGQyT2d3U0hoRjdRZC9IQ09Xeksyb0RTYnN4K1Yyb2EvT3J6ZGF4ZHZZS2E2cXEyTWxPOUVRQlJGQms3ZGl3REJ3NEVuTHZFaG9ZRzh2THlLQzh0NGJQTTk1bjkvSUlMeHZzNSs4ZUxwc0d5MDhWVW5DbHQ2eU1LSWlOSGowR3JEZWhNdkM1NExjQ3lSZlA1K0lOM0FGQ3IxUWl0SzZtUWtCQWlJeU5KVFUwbFBEeThyYjFXcThWaXNaQ1VsSVJlcitmbjdCOWRCRGhQUjJsdzR0Z2hMbWx3NHUzM3NHYjl4a3NJMHpOZUNYQ2k0QmhyUDF4SlFFQUFhV2xwNkhTNmkvWVJSZWNxVzZQUkFHQnBNSHRzMjFFYW5QbnNQTXBPRndOUVdsSkV3ZkZjb21KaXZISGJLN3dTNEplOXU1QmxtVUdEQm5rVlBEZ1BKTUI1WWdRdzJFMGU3aWdOaG9TR0lvb2ljMTllREVEQnNSeW1wOThLUU5iNlRCNTZkQlpYRHhudWxTOGQ0WlVBalkzT2t4V3RWdXZWb0lxaVlEQVlxS3Fxb3Fpb0NFRVVtVDdEOVZ6eTdmZlhrWC9zcUV2NVZmRUQwRVZFdGwwWEhNc2hZOHB0MU5jYkNRc013TlJrcGFhNnF2c0VjSWZCWUNCN3h3NWFXdSswSndSQjRLWFgzdVM2MFdOZDZnWU1UR0xBd0tRTyt4Y2N6eVZqeW0wWWpRYm0zbmNISmVkcTJMVC9NRHBkbjg2NmZnR2RFc0JzTmxOZVhrNkxKS0VMRFVFWEV1eXNzTnV4MkpxcE1abnBFeG5OMlBFVHlIanNhYTYvWVZ5bm5Dc3RPVVZHK3EwWWpRYm1QektOWmVtM01XR0I4Mmd2UEtLSEJKQWtDWnZOMW5iOTNMVEpMSnI1Q0VndFVIV1dML1ljNElHMzEzRC9nNCsyemQvTzBHaHA0S21IMHpFYURRRFVtY3pJZHBsYWN3TUFFVDBsZ0M5Mlp0N3c2b3ZQVWxSWVFPTHdtOUJYRkpINTlWWTBOaXUxRFJiVWFnMUJ3Yjc1RGVhSzJBMjZvNkt5aXJqRTRVeWQvekVXWXpWckYvNlZEMzdJQmlBNkp0Wm5kbnduZ09KYzBMWklkZ0RVcmZtL001aWE3S1RQMzBDTDNZNGdpRGhVUWR3OGF4MjczOC9BWnE0bFhCZmhFNWZCU3dGMHJmUE5ack9odEFaNi9qMFFHaFRrYk5TYURmTEtLZ0JuS3J0VXRtL2JURU5UTS9STFEzTElDSUtJM2FGUXFtOG1NSElBWWJFcDJNeTFqQngxNHlXUDdRbXZCQmh6VXhxaVNzV0pFeWRvYm03R2JyZFRWbGFHS0FoTUduTzlzMUdqQmIyNWdYVTc5cUwyVXpOK3dpU3ZuVERVNlZrNDd4bTJiZGxFaUM2YWVXc1B0OVdWMXpVak9XVHl0NjZndW5BZlNZTlNXTERvclV1THNnTThuUXFiQkVFZ0pOUzVlMHRNSHN5Y0JhOGpTUktGaFlVVUZ4Y2p5ektMWnovRzhPUkVhTFJ3OW13bGQ3K3hFb09sa1drUFAwRk0zN2lMR2k4NWRaTEZDK2Z3aDFHRDJiWmxFeEY5QnpEMXhZL2E2cXZxV3pCYkhaUWYyc3pKN0V6Q3dpUEkvTWRtUWtMRGZCRTc0UGtKZUdITmhvMGpZbUt2R2dwZ3RUYVJranFNZS8veUVGOS91UUdBUUswL1J3dUxlTzNkRHpsWlVzcDNCM05vdERXajFtZ0lqK2pEbXZmKzVqS28zVzZucnJhRzJwcHFqaDQrUUdWRk9RQWFiU0RqL3ZRRXQweWJnMGJybkZJbXE1MXFrNFN4UEkralh5NUVwZkpqMWRvdjZKK1E2TFBnb1cwVDZrcHhqYlRQNFhDTVcvWE9FdFo5dEFxenllaFR3NktvSWk1NUJDbWpKakg2MWdjSkRQMzl4ZFppVnpoWlpjVmkwclB6blNsWTY4L3gydEozeVhqczZTN2JiYlNMTk50RjdoazNrS3FLVXMvdkFKdk5LczZjUHBtOXU3ZWo5ZzlnNUMzMzB6ZGhDR3FOZC9zQmQ0aWlpc0N3UGdTRlJoQVZQd2h0VUtoTEcwV0IwL3BtbWx0cy9MSjJOdGI2YzZSUHpmQko4Tzd3S01BYnI4enB0M2YzZHVLU2h2UEFnazhJamVoN1dSeG96eGxETTlabU8wZi91UkJEV1M2ang5ek1rdVdyTDVzOVQxTWdVUlRGVTlxZ01PR1pkM2NRSE40OUI1VDZCb21LV2l0NTN5eWxlTS9maVl2dnp6Yy83YWRQWkxSTDI2cXpaOWp5N1ZmSURzZEZ4dzBMMDVFK05RTzFSdVAxRkpndHk3SXc5dTdIdXlWNEJkQ2JKQXJ5RHBPMytTMXFpdzhTRVJuRnAxbGIzUVlQOE1IS1pYeisyVWR1Njl6Uk4rNHEwaWJlNFZMdVRnQU5NTU5QcmVINlNROTRiYUF6T0dRSHA0NGZJdmVYN1pUblptT3VPZ25BMEJFaldaV1oxZUViMzJxMUFqQm93Z3lDb3hKYzZtME9tVUt6SGFYd0o1VHlYNUdrRnJmanVCTmdQQkNlZk8wZkNBNlBkRlBkTmN4R1BjY1A3dVRrNFd3cTh2ZlMwbVJxcXhzeTdCb2VtdkUwVTZabW9QTHpicFVlTzNRQ2tVbWpYY29iSkptaWFodXlvUVNsL05lMmNrVVJrR1VaaTdrZXdPck95bDBBS2FNbVhsSmdubkRJRGs3L2xzTnZoN0lweWRtSm9Ud2ZSWEh1S0VOQ3cwaTc4MTV1VHB2SStMUkpQcy94N1ZFQWs3bVJUOTViUW9OVGdOM3VYb0w3Z1RIUHIvNDN1cGgrblRKa3JxOGo3OWVkbkRxU3pkbjh2VFEzK25ZTjRRc0VRYlFvaWp5cS9STWdBRVA5QTRJSmo0Ni81RUVQZkwrTzNKODNjYllvdCswdXQzSU9hUExRcmJ1UmdNT0tJcjhNbExZWElCNElpZTZmMG5idWZ5bGtaeTNIYWpFUkZwdE03TENKMUZlZTRGeitMb0RIZ2ExZGRQeXkwRjZBQ0lDZ3NNNGROejIrNUdzRVVhUk9qTVBhSXBPejhZMnUrbmZaYVM5QUdJQTIwSFdKNmcxUi9RWUJVRmRsN1pKVDNVbjc3YkFXd0s4YmZwUzhVdmp2Ly9kakYra1ZvS2NkNkduKzd3VVFnQytCOCt0ZU5SRHNwOWFnOXZmK0R3aCthbi91bWZWbTIvTDVxOHczS2R5MUFYdUxGZG5lQW1EQnVRQ1JnZVg4L3RmMUhrY0FmZ0M2ZXM0c0FUT0JiMXF2bDdaZXUyTWw4SG9YN2ZYU1N5Kzk5TktMRC9nUGFGZ1E5ang4U0RvQUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUVBQUFBQkFDQVlBQUFDcWFYSGVBQUFBQkhOQ1NWUUlDQWdJZkFoa2lBQUFBQWx3U0ZsekFBQUJ1d0FBQWJzQk91emo0Z0FBQUJsMFJWaDBVMjltZEhkaGNtVUFkM2QzTG1sdWEzTmpZWEJsTG05eVo1dnVQQm9BQUE2S1NVUkJWSGljN1p0NWZGUlZzc2UvZGJ2VG5hUzdzNGNRUXNoR1FwQVFDQVFUZGtSMkk4cGprNmc0eWhPTjRJWUx5cUlmRjBRV2RWUndtVkhlNkhOR0hlY3Bib01EOHNSUjFISEIwWEZFSWZMY1FCRXhMTm5UM1RWLzNFNUlPdDFKQjhMa2ZXYjhmVDczazc3bjFEMm5xbTZkcXJwMVRrUlYrWGVHMGRVTWREVitWa0JYTTlEVitGa0JYYzFBVjZQRENoQ1JNMFJrcDRoa25ReUcvdGs0SGdzWUNlUUNRenFabHk1QlVBV0lTTHlJbkNjaWRyK3VldC9mdWdEMDU0cElXR2N6ZVZLaHFnRXY0RXBBZ1pjQlc3UDJOR0FaRU5tc3JUdXcwMGMvSXRpWS94K3Z0aFFRRDN6c0UrcEN3QVpjQ2p3T3ZBYmNDb3dBTE1ERFBycG5BRXRYQzlVcEN2QXBJY0gzdGtjQkgvbUU5TDkrQnhRQ2l3QnJWd3ZVcVFyd0tTR2kwYnhMaWxMMHovZE8wRDB2VHRYL3ZtT281dWZFTkNyaEVVQk9LcU9RZWpMR0ZkL2dRU0VpUzRBVlp3OUw1US9MUjJFa2VNM0ZBQnlvcU9PMGk3YXljODloVlVoVTFZTWRja0FoUUVRTTRBL0FOR0FUTUZWVjNaMDFmcXNvSUNMalJPUUdFYmxjUkdJd3d4NDNuNWR2cm5iYk1kckVXRHR2UERhT1orOGQ5WktxSGhTUkRCRzVUa1FXaTBqL1R1THhkbUFhSWdDVGdYdUNFZnJtZmtORXBvUTZ1RFZBMjVPWWF4L01rTmRiQlBxa1JpRzIxdFlTRzJYanJERXBNYjdicGNBODMrOHhQb2FQR3lJeUE3alJGdVhRNGI5Y0pPOHN2bDlyRGh4YUtDSWZxK3F2L1dnWEFhdk5HLzVIUklhcDZvZnR6UkVvRHlnQnlvQzV3RytCejFYaDA2OE9vM1hTaXJpK3dVdGxqV2UzNzNZNU1COHpXaXdNV2RJQThGblFZMklZRk4rNVVPTHplelBzcnF2RXNGa1ZXQzhpSTV2Um5nbXNzVWJZdFcvcFpGRENnZWRFSkw3ZGVVTHdBZGNBYTg4b1NtSGp6V013RWhTeG04L3NQMWpMNUxKdGZQN2xrZStxYTkwOVRrQmUvem5qZ1BlQXpBR0xTc2t1bmRqVTkvVWYzK0xkbXg0R09JQ1pqY1lnc2wzQU1meldNbm9VNTdOajNWT1VQNzhOWUNzd1VWVTl3ZVlLSlJXK0Qvam81Yi9zWmNLTlczbmwxZS80YlBjUi9tdmpIa2I5NGxYKytua0ZOWFdlVFNFSU5VQkV0b2pJdHlMeUd4RnhCYUd6QUU4Qm1iMm1ER3NoUEVDdktjUElPWDh5UUNMd29vaThqS29qNzhLejZGR2NEMEJCMlN3UysyY0RuQTZzYXBPdnRpeEFSRkl3VGZrbHpQVTFMQURaSThCandGaGd0YXJXQmhnbjIycVJIVzZQT3BzMXZ3bU1WbFd2SCsxdHdMTFkzSFRHYkZpR3hkWTZzMWF2bHpjV3J1R0hkejhGb05md1FSVGZPQS9zbGlhYXVrTkgyVnkyUW10K1BDUkFxYW8rR1VqR3RyNEZrb0Z0d0ExQU5tWTBLQVVlQkY0QmJnRkdZNjc1ODN6M0c0TjhDNnh6ZTlUcDhESG9qTFNDbVVWZTRqZG5IbkNETlRKY2g2NjlJcUR3QUdJWUZDNmZoelhDL0V6SkhGdUUxRFJBczVkcGozRXgvSll5TWNLc2lzaWp3YUpTVzB0Z0Z0QWJNd1kvb2FwZW54YnZBZjRLM0tXcWYxYlRoSmI1MmlZQ1JYNUN6UUFtOUVtTzRPekNPQUNXWHR3UGl5R0lzRkpFdXZub0JQZ1ZZTTFiTUVNaXU3ZnR2eUtURThoYk1CT0FEeC9iaUxvOVNIVkRDNXE0bkRRS3ltWUtxaEhBQmw5T0ViSUNOZ0JuQW5QOEVvKzVtRll4dnJGQlZYL0VUSmRMZ0xlYkNlODBETGtYWUUxcE9qYTdtVVFNNkJQTHdqazVxQkpOWStneXJXRm9YTDlNc21hT2ExUDRSbVROR2tkYy95d09mLzBkdTE1NUErbzk0UGEycENrWlJVSmViekRUOWN0Q1ZvQ3FIbFhWbHdKa1hZMjVRMWdBK3BmOVBPN05YcS8ybUhGcVBDTnlvN0hhd3BzNmJsblFuK1NFQ0lDNUlqSVRrVlZpTVJpODlFTEVhQjF1QTBFTW9YRDVQQXlyaFU5K3Y0bWFpc05JZGIwZmtWQjQxYmtZVm9zaTNPRmIydTByb0Exc0JUNEEzbW1UT1pGK2hzZ2lWNFNGMjJhbFlZK0tSWXhqMDBVNXdsaDdiUUdBQUUrakdoWGZONVBxSHlwUWI0aDdGYXBVZjMrUStBSFp1R3ZxMlBuY1Z2QW9lRnBhUVZSYU1ybm5UQklVRjM2WlpJY1ZvS3F2cW1xaHFuN1ZEdWw2cjZxeDVLeWVkSStMeE82S2JVVXdaM0lhcHcxSkFsTUovUGhKT2R1dnVwdDNGdDhmRWkvdjMvb29iMTV4RndjKytBd0FUNzNQQi9ncHNLTDhHMm9PSG1xOG5TMGlUZEVvVUNwOHdoQ1I4NERSL1ZNam1UY21pWWpZUkh5NWZDdXNXMUxJd0ptYmFERFg3aGRBbHJ1MlBpQ3RQeG9xcXdGSTZKTkJ6Nko4ZWs4WWJzNWpQUllPUFhVTnZMcGdKZXB0c29vOU5LdG1kWHBWV0VTaUxZYmNJd0pyenMwZzNPbkNHaDRabEw1dlpoU0w1dVkyM21ZQjVNNmVFTkpjbWRQSEFsQlRjWVRzU1NPeDJNSlFsODFuVHlZTW05VmMveWJLZ0w2cTJoUXVUa1paL0hhUFZ4TktoeVZ5YWxZVTRURUo3VDZ3Ykg0L1VydWJTdW81b29Da2Z0bXR6RGdRa29yelNDck9vK3FIZzN5eDVTMnowZTg1RVNGbnhyaEdsWXhTMVJibTFha0tFSkVDRVM2TGRWaTVlWG92N05GeEdKYjJWNWtqd3NvdkZ3OEc0TkNlYi9FMnVGdkY5R0RJdi9JY1JJUlBuOTJNdTdZT3FXbGRLdWc3ZXlMMmFLY0M1NGpJd09aOW5hWUFYeUx6Z0NyRzhtbXBkSXVOeE82S0R2bjVhV043TW5sRU1wWDdEdkRaMDM5Q0dqeElmZEJ2bUNaRVo2ZVNWaktDMnNPVmZQN1NOak1DK0QxbmpReW4zOXdTd1Z3Y0s1djNkYVlGekFPS0IyVTRPWDlrTjhKakUybXhHRVBBZlRjVUVtNnpzUFBKVjZqNi9rZGZldHYrYy8zS3BtT3hoK2xuTDc1RzNkRXFwTGExOVdTZE1RcFh6eVNBU1NJeXByRzlVeFFnSXZFV1E5WVlBbXRMMDdFN1hWanRFUjBlSnl2VnllS0wrdUtwYitERDlVK0RWd01LNDQrSWJyRmtuenRKM0RWMWZQcnNGak1YOExNQ3NSamsvK2UweHRzN0czOTBsZ1dzOUhnMTVzTFJTUXpNY0JFUjNiN2pDNGJGRjUxQ1ZxcVRmZS84algxdmY0elV1azJCZ2tBOUh2NXY0K3Q0NjB4RmxXL2VidnFRaHRiTEp5NDNnK2owSGdCRklsSUNuWkFIaUVpUndNWHhyakNXbnAxS2VIUThZckcwLzJBUWhOc3QzTHQ0TUNVTFgrZkQ5VStUTktndlJyV0J1dnczcUV6ODdmNW4yUFhFc1hLRTFXN0RDR3N0MWwvdTNNQlhXOTl0M3RRTlR0QUNmTVdMQnhXNGRVWXY0bUlpc1RsRGQzekJNR1ZrRDZhTjdVblYvb044K3JzL0ltNXZVSWRvK0pLZWhENFpGQzBvNVl4N2x3Q2d0cFl2WWUvMmp4ck42QjFnTGZBc25QZ1NLQU1LaG1hN21EMDB3Y3o0T2duM1hEK1l5SEFMdTM2L21hUGY3Zy9xRUh0Tk1XczBSL2J1SjNWWUFUYVhBM1hhSWF5bEF1SnkweHM5OGtPcWVwMnFIb0lUVUlDSUpGa01XV2sxaERXbEdkZ2NVVmlhZmUyZEtIb2xSN0xza2p3OGJnODcxajFsT3NTYTFnNHhLak9GcEtIOXFhK3M1dXZ0TzN6TXRSNHZaM3JUSjNaWjgvWVRzWUExSHE4NjU1L2VuVk5TbllUSHRGdUE3VEN1bVp0TGJrWVUrei9ZeVRldmY0RFV1VnQ5NlFIaytPcUc1WnUzQXdSY0xqMks4bkNsSm9IcEFBYzF0aCtYQWtSa0ZIQis5eGdiaTg5TUlUd21IakdPMy9FRlE1alZZTjJTUWdBK2V1Z1ozRFYxR0FFeXhLVGlQS0l5VS9pcC9Hc3E5bnhqaGtELzVTSkN6bitjM25qWFZCZzVuaE1pVnVBQmdCV3plaEVkNWNEbWlPcm9NQ0ZqN0tsSnpKbWNSdldQaC9qNzR5K0IyNHZVK2IxaEViTG5tQjlRNVp2Zk1tdURBY0pnK3ZoaWJGRU9FQ24xN1hvZGx3VmNCZlFiM1RlYXN3dmpPOVh4QmNQYWF3dHdPY0xZL2R4V0RuM3hEZDdEMVhqcTZ2SFVOelJkS2FjUHdSYmw0S3Z0TzZnOVhJbTNxclpGdjZlK0FVVEltRFFjWDQzd0F1aGdIaUFpS1JaRGJyVVlzSHBPT2pabk5CWmI0UGpjbVVoT2lPQ1d5L3F6YU0wT05sKzZvbDM2NXk5ZUhzcXc2ZER4Uk9nZWoxY2pycGpVZyt3VUIrSFJuZS80Z3VIeTBoeCs4L3dlUHQ1MUNPQXc4SDJ6N25BZ0xjSnVKZDVsWjk5UDFYaTlxc0N1SU1PVlkxYWdRMThDSWpJQm1Ka2FiK2VhS1NsRXhDUzBxUEdkYkZnTVlmM1NRa1JBaEZyZ1ZGWE5WZFZjNEJ5QUlka0ovSHJoY0tJand3RHFHL3NEWENXcXVoTkNWSUNJMkVSWUQ3QnlkaG91bDRPd3lJQTdXeWNWd3djbWNzSFVURlJKQW03cmpERkRmWVhYcTlKN1luNE1rd3ZpL2ltT0x4aFdYVDJRMkNnYklpejBMMjRjRDlyMUFTS1NiakZrZVpoVldIbE9PblpuREVhWUxTRHRLKy92NDVGTjVWUlVCaTVxN3Q1N3hEZm04VE9jR0d0bnhSVUR1T3oyOXd6Z1FSRUp0RjhaTWtKeGd2ZDV2R3E3Zm5JS0dVa083Tkd0eTlzQVgvMVF4ZFNidHVGdFo3c2RXbXpoSFJmbVQ4OWl3M05mOFA3ZmZ5ckdMTVI4QXZEMWdVb2UzYktMcXJyUVQ5QzBxUURmd1lNek03dUZjL25FWk1KakVnaXd2UWJBbGgzZjRWWGx1bC8wcFd4MmRvdStGN2J0NWVyVkg1eXc0STB3RE9HQnBVTW9QbTh6cXF4UzFXc0J2dHhmeVpmN0t4dko3Q0t5V2xXdmIydXNvQW9Ra1FnUnVWOVZXVFVuSFlmVFNWaWtNeGc1SGwvUklqYmFSbm9QUjFQN0M5djJjdDFkSHdKQ3BDT0s2cXJEb2NyWkpncjd4VEYvZWhZUFBWTWVoN21QU1o4aGlSUk5UcWV5b283L2ZXcTNIanBRYzUySTlBSGVBdllCRzFYMWFQTngybktDUzFVMTdjeEJjWXpOaXprdXgvZkN0cjNNdk9aTjNCNWx3T0R4ZEUvTzZQQVliV0hGRlFOSWpEVVRzYjVGOGN4ZjJaOWhKV2xNdkNDWGEzNTFtc1IxajFSZ0ttWUo3SEVSMlNZaUxjcFZBUlVnSWptR0lZc2o3UVozekU3RDdvckZzSGJzQ0xDLzhMMnpDd2dMNjl4anhMRlJObFpkYlFhQ294WDFxQ3AxTlZVQWRFdDFzdVR4OGJMZzdoRmNkRnNSQThla29LcURnTGRGNUdFUkdRL0JMV0NkMTZ2VzYwdDYwalBSZ1QwcXNPTUxodWJDRHh3OGdkN1pCYmljSnlkdnVHQnFKc01ISnZMdHJxTnNmMzR2N29ZNnFvOVVVRjlYUTdqRFM3K2hDUlJONnNYOE80ZVNQN0lIbUdjZTVnT2JSV1Iwb0hPQ000SHhmWklqdUhSY2R6UGo2MERjMnZMVzk4ZUVMNXhBVnZiQWt5YTh5UytzWDFxSXhSQTJiZGpEa1ovcThYbzkxTmRVVVZkVFJVM1ZFYXFQSGtJTTVaTFZ3MWoyMi9GY2NOT1F4cUxKVFViTHdjUnBpTzlBdzducFJEcWRXQ01jQWFZTmp0ZmUyNC9ib3hRVVRpU3I5OGtWdmhINU9URmNYcHBEYmJXYkZ4N2MzYXJmNi9WUVczVVVhNWhCYXA5WVRpbnVqdFZxS0pBb21FZGdHdXRGVnNBaEFxNXdTNGR5L2ZvR0x6VytTb3lJWUxYYVdsbU8yOTJBMSt2QkVXSEZham1CYkNnQVBGNmxzdHFNLytFT0syTEFhYlBTT0gxT0dnRGJuLytXUHozMkpWNnZVbGZqVnE5SEJWZ2t3RWJNVTUzL0tsQk1BL2NDZDZ2cTdRQWljaVZ3RSthQjMzTGdJZUNKZGc5Sy9xdmo1LzhhNjJvR3Voby9LNkNyR2VocS9Oc3I0Qi92bUMyUWhPazZad0FBQUFCSlJVNUVya0pnZ2c9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRUFBQUFCQUNBWUFBQUNxYVhIZUFBQUFCSE5DU1ZRSUNBZ0lmQWhraUFBQUFBbHdTRmx6QUFBQnV3QUFBYnNCT3V6ajRnQUFBQmwwUlZoMFUyOW1kSGRoY21VQWQzZDNMbWx1YTNOallYQmxMbTl5WjV2dVBCb0FBQSt4U1VSQlZIaWN2WnQ1Y0Z6Rm5jYy8vZDZiZXpRanlUcEhzaXpmV0JZMkJodkhYT0VvQ0lad0JBSWtGUkpDYW1QdUpjQldnR0ozczJTVElrbVI4SWV4QTFRMkMrekNBZ0VXczJCanZNYTdZTE0rTUdCamJJaDhXN2RrSGFPNTU3M1grOGRJc2tiem5xUVpDYjVWS3RYcjEvM3IzKy83K3RmOTYxLzNDQ2tsazhYQ3VmTWZONlY1dVdtWTlTYlM1OVFjYUlxS3BxaW9pbUxWSkEzc0E3RUx6UGQzN2Yvc1A2U1U1cVFWS1FCaU1nUTB6cCsvVE5lTjlicGhsQUZvaW9yUDViRXplaXg4WUNybXJSOTk5dG1oZ3BVcEVBVVQwREJuL3JWcEkvMjZsRklBT0RVSGZwZG5NcnJFRk1rbDIvZnYyVDRaSWZtaUlBSXVtam5UM1NLVWs2WnBlZ0VVSVFoNi9BZ2hKcVZNYmREUVgvaCt6MTZQSXB0QmZBN21PdTdxMkFsVDRLYzJLSWlBaHRuek5xYU05R1ZEejM2M0Y2ZXFUWWxDUHp3enhqMHJJaU9MMm9CMUlOWlJYdm9lTit4TFRVbEhneWlJZ0htelpzZE0wL1FBQ0FRbHZxSXBVNmk2eUdEZGowN2F2UTRqeFJvY2lkK3lxcWQvS3ZyTGU3WnFuTjVZT21ROGdLcm1MV0pNdEEybzlNWnRaUVlROG1GMDF5SCtHTHFmMVhOZGsrMHZmKzFkNmV0SFBtcUtPbGtkY25DZ2MxeDNtb2FVdjBlTmZNbmE2aC94cUNqNEt4VGd1TElTNElZbFplYmlhcS9pZGtEUnBMOURCbnRhNDd6MFNaSklhc0wyekFDZW83enFKbFpQK3o3M25BeVBmRm4ycDdVTEZFWFVkLzdramcxMkF2Sm1ycVpJbGdJc3J2WXFwaFNVZUwxNFhmNHArVnM2M1pldk9rTzRBdFc1bmRXVnM0ZjFmT2FaTWxWVjNrR0k5WlgvK3RUajR0RkhMVDkyZmlOZ2JmVkZWeTkwM2Y3RTF0emxUZ0xoaEVIQXBUTGVhaWpsWUYyUHlrUVh6cVRxNGZYNkI5QXdPVTF2c3FxeXdCVGFucU1mcjN2bWNQSHlnNmFMbTZSSjNhQnVENVRYVmVuQVE2TWJUWnlBdGFHZkFtczFOYnVOS1dIakYyRzJORVdJcDAyY211QWJNM3hjdFRDSVU4czJUemNsYjM4ZVp0dVJDRWxkNG5Zb25EL0x4OG9GQVZSbGJDcGVtZmt3bTl3WFVGdmlvUzFnNjNNKzRMNHRlN2UwR0taWk0xSk5CUDlqMVdCaUxyQ202aHFRVDJOQjJMWWpVZGJ2RHhOUG0xUUhIT2lHNVAxREVkWWZDT2VJMmZUbEFPODFEWkRTSmFHQWcyVGFaTk9YQTJ4cGl1VFVIWTIwNGdCQUFLYVVHS2IxMXFINThJZHM3KzZyeVM0VmY5LzU0OXZlc2FvLy9naDRzdXAwRlBIdmczMEQ0TkxFOEdORHBZdWtIdURNV2c5VkFRYzlNWU9keDZJMFZ1ZUd4VXRxTW1WbjEzbVo1dFBvanVqc09oRmpVU2hUTGdSNG5XT3ZLdkZFbUZjL2VRZWZJbGg1M2c5UVJ2aGJmODh4WGo3YWttMlc0TFhPSDkvMm1KMjhzUU9oMWRYbHFPd0U2Z0hpYVlWM20wbzQydXVodnN4SE5BVTF4UjZjbWtJa21tTC9sOTNNbUI2a3NuenN5YXpyWkl6RHgvcFlNSGNhZ1JGTGlFZExFVk5MS2RhNm1lTS9pRk01RmZUOWVkNWpiQlFOZkh4aU8vM1NDY0NWUVpNbFoyVlc1V1Fxem92YlhxZEZlb2ZiekRaUHB1OU5iNTMzdmRzM0hMWFR4ZDRGL3RMb1JPVzFJZU1COXJiN09kemp4WlM1L3JwMVJ6TWY3bXJoelkxTmpCZGR2dlh1UWY1dlZ3dGJ0aDdQZVNjUjlPcmx0Q1ZxY3Q2bFV2M0R4Z084M2E5dzR1QUhTQ2w1YitkcldjWUhTUEJpNmtYSDk4eFBuK2N2amM0Y1lZT3dKNkR6NUMrQjgwY1dOWFY3YlNwRFgzOENnR2cwVFNxZDhVOHBJWjR5Y3VyMmg1T1pOdUdFcmJ5dVZFVk9XWkd2ampOODJWNzc4dkYyL25mSEsreE9uUnAxQ3BLN3FqVm15aDZBOHdkdHNZUTFBYXRyYXhIY083cFlOKzFuNmlKL1ppaDczQm9PTFNPMnBUZktuaE05UkpQNnFMck9yUDlXTUcxVVd6TC9ZdWFxMGVIbkJCcGJZOWx5dmxQaHBxNWkxcWtDd2Iyc3JxMjFrbWZkaTJMOEVuQ1BMaTV5NlJhVk16aHZlUzFuTGFyaXlzdm1vQXd1YVduRHpQby9oSldYek9iTVJWVmNlTzRNVzNrdUpXbFpyaWthM3o1ckpjVll2ei9IRTJkQjR4V2ppOTJETnVVZ2w0QTExUXNSM0dKVnViRXFhbFVNUUREZzR2d1YwNm10enQwWm5vd2tTZW1uU0FoVitibGd4WFJLaTBkeExFN05IVld1VnR1K2ZQNXAzSFJhSXlyWmM4MHNKY3I1eTc1cjNVaHdDMnVxRjQ0dXppVkE4SmhsT1RDL0xNWjNGbll4dHl5R1c4djQ5dWl2T3hKZVYyYnQ3aHBJMEJHTzI5WWJna1BSbWVic1prSFJQaXBkN1dQV0xRODFjbjJWZi9nNVNJcXJ6N29NaHpiR2ZKZXhMUXZaTThxVG9hVW9YRFZXeC9VbENlcExFdXpyY25JeUZpQ3BtL2hzQXJQS2dCdTNReUZ0U0VxODl2NCtoQkpuSHlGL3g3ajFoakN2NFRMdXJqNU9UL3NCYXVkY2dkTXg3cTdzS3A0TUxlWHUxbytHQ3JJSlVPV05UREEvVXVVYllDK0JyS0U5QkZQSzRRQWw2SEhhdmhzTmo4TitWVGl2OHczMnoxaU1KOXBMVGJwbnVMd0dvS0lNd3Z1eTZqYzB2MkV0U0pVM0FqWUVTSzZ4MVdBVXlyd1JWRVdRMUUya1pIZ0RsRWdiN0QzUlM4RGpZR2FaSDVjakU5bWxkSk9qM1JGNlkwa2FhMHJ3dWJLN2RpaHBnczRCMi83bTllM2c4YjZjeVMxL1pHejgrZERqcVVod2JXZ0J5UDM1eU5yYkdXSmZSeEZCajROU1grWkxHNmJrUUdzZmtjR2x6KzNJN1BqaTZjeWM0WFZxTklTQ2FLTXlTVE1ESjZqeWRSVnFWcDRRRGR6WmVnQkdqZ0JoWG90RmhEY1dGbFcwMGh5ZVMxODhqYytsNGRJVVZFV3dzTGFFdHI0WVhRTUpFaWtEU1lhSU1yK0xtaElmeFlzdXhGVzdBTkYzSEpFTW8yQlM3T3NpSlNhWC9GWENSOUE2ZG81ZlVaalhBZ2RnNUFoWVU3MER3ZG41ZGhwSnVYaTdhU2FxRUlTS1BUbTVBRk5La0F6SEJnQmxmL3NtUXNBMDN4U24wMHlkNGhkUFE2VHRsMnNBSkR1NXEyMDVEQzEzejg1MEkxaFdTSjkrWjVKdnpUNk9Tek5vNll2blRJcUtFRm5HWi9wbndvbVF2S0JvdEsxNG1yVGZQc0FDUUxDTVoyZTZZY2dGSXZGcTI2bDVBaWgyeDdocTNsLzVxSFU2QjNza3hWNEhRWStqSUZtR0tlbm9DbHNlaFFnQkZkT0swRFQ3TFV5MDZrSTgxWmRTMHZTbnNib1JST0xWd0pIQk9VQU53ZVRQSnBlR1RoQndCZG5kV281dUpQRTZGQlJGd2UxUWNDZ0d1bWtRUzQzdDUzOTRlZ3U3OXB5d2ZkOHdyNUovdXYveVNldWFzWG1JQU5VTVRYVDl0ME56Tk1Beit4ZHg3S1RHR2Y1RDlNWlVpcjB1d0JqOGc4ekFGK1J1ZEU5aHhWbjFwSFhUY2tzdGhHRDVrcnJKS1RvRTFRekJrQXRJR1NyRUs4TzZsMjI5Qy9tZzUzVCtjM2VhY0Y4UHA1ZEZ3RDkrV3p1Y2QvWXN6anQ3MXZnVkp3c3BSeENBQ0UyMFhWL2F6OVpCby9lRVoySElqRDhxV2laVDJ4UFBpRFRNcit3OGM0b2dza1pBc1YwdWV5RHQ1T0Z0Wi9OQlN3WEJZREZhY1IycUkyZW5qTWZycHc5b2licFJGWUZ1bU9pR21SUHdxR28yTVo4ZGFPUEZkUitqVzRUVTQwRlRCZCs5Y2pGbkxacWVkMXVrTElZaEFvU3czSUZFZFJlTno2N0UwSFdLZ3NWMFJ4U0lORE90TW9UYm01MGQ4b3c0SUQwVXJhRGUwMEU4clZPa1p1OEZYbWlheFpJUno4MXRmUncrMWwzd0FmangxcjdDQ0JpMGVYQUUwR1kxQmZ4OHg4WG82VFFPcHdjeDR0WkhOTnlYUTREYjZ5ZFlXazUvVHhldk5sWHl3d1U2VmVJa3Bpa3BjanZ4dVV6V242aGxkMHQyOExQeTRnVmNkTzVjakRHMjFYWlFWUVczcThCamVVa2JETThCc3RWcUVqelU0d1pTS0dxMjB1bTA5UkY5MWZRNVJBZjYwZE1wL3UxQURSNnRpc1hsVWRKU1lYZTc5Y3o0NFVkSCtmUExPd3B5QVZVVjNIemRVaTQ2Wnc0QXFkNFdUbTU0bXNUQUFYeXFBNmVhSHFPMWJJVlRMbUNmZnNsSElVMWoxb0lsdEIxcllxQy9oN2l1c3IwdGtGWEg0d3ZZdEo0Y21wNjdqOE43UDZISTdjRDBPZm1ZUnFwOFhkUUhtcTBiRE5xY0lVRFJXakh0ODMyam9RcjdyNlU1bkV5ZnM1Qklmdyt4U0QveGFBUXBUVndlSC81QUNVWEYwN0xxbjdPMG5uT1cxays0Ynl0SVErZm92aytSUUxIWGdTQ1RYbStQbGhQeWRWaVBCRVViUVVCSGN3ZmxWVWtnSzZYaWR5U3d5bzU1MVBGdnFmaURwZmlEcFhrYlV3aDY5NzJIYmtqY0RqVXJvcGNJK2xORmxIdDZSamRKMHRIY0FVUFcvVUxxd09iUnRXYjdyZmZuRGpIeDBmSjFRSnE1WncrbllMbThieDYwT2VzUTdRMlFVNUJ5eVE5U1NvNmU2RUV2Y0JXb3J5MWtsSW5oZk5rcEF0TEdtemlVcHlqazJzd2s4TnI2dmJ6eVg1OFczUDZheXhxNWZHWmVUVXpTeHB0REQ2Y0l1TGVqZzdYVk80QVZCV3RUQUpZdG5rNTc1d0M2TWRZd3RvYXFLaXcvY3daYU1qTW5XVzJnbE53SmV3ZjNkZ3dIZnFPamlEZjRtZ21vS0N0aTJSblRNWXo4UTBGRkVWUlhCUEI1VitCeHFzUlRCcm9wMFFZVE1Lb3dLSEhsM0tiTFNoZG5FNkFwTDVFMi94bkIrRW44S2NLNmpmdDRmY1BlZ3R0ZmVVa0R0OXl3aklhVk4vUEZ4aGZvSGtoUzZuY1NkS1dvOWJkbGp3QkpDb2Z5MHNqMjJRU3Nham5PSDZ2V0lzWFBDdFlvVDF4eS9seUVJdEQxL0YxQVV4VXUrRWJtWGxURk4yK2w0cHUzMG5MMElJRjlhNmpyZWltM2dTTFhzcW9sNjB3K041QlcxVitqbXo4QnZwcVFiYlJPUXNHcHFZeHpSY2dTcXFyazNFeDNsYytrcU5nUHVTdDRHRlg5OWVqQ1hBSld0WFN6TnZRN2tMK3k2emhsS09SN05WREJwTXB4a29UTWJybnAvUzhuNVFJRGtTUzMzRENSZks3NEhhdGF1a2VYV20rbE5QRUV1cndicUxKNkhVNDVxVFdhNlZjdGo5eHpjRnRvQXpMU2ljK3BFdlE0U0x6OEdaNkxmd1l6RzdqNnNvWFVWZ2NMamdPV0xCd3J3VGFNZGpUeGhOVUxhd0pXdGNSWVcvMGc4SnlkeEFQSEU4d3UrWlR4a3I5MS9panB2bmFjbWpKOFFCcnRhRUZzL2ozOHpiL1ExUlBsODcrMkYwYUFvaENxQ09DM081MDloUWRaMVJLemVtRy9tYjZ6N2ZuV2QyNTZFR2l3ZWkyQmc3M2pKLzh1clR5Q05NRTdhdDhlNld6SGlQYXg4NU5qYk41cWVmRnhRdkI1bmN5dUw3T3ZJRm5EWFczUDI3MGVNNXZ3WVV2bGRvaFpFakJSYUlQTGtGVjRhZXBKcnJ0aU1Zc1doQW9hQVpxcU1HY3M0MkV6M2UxanJtaGpFbUNJU1I3V1RRQ3FJcGcvTy9kQzFPUWhtaENPRzRZMlBYYjRXdVArcnd0U2FBbE1jVFYzSE9zZHIrNllCQ2pJQXdEUzVscnFoSlFaM0k1YURxWENyL2xiUXNTN1FjSkEzZFZydUx2bGk0bTBHZE1GanV4ZS9VVGRHWGZlbjA3RlF3Nm5CODJSZjRUOFVkYzB6aTN0SjVFMnNzNExQVDRYWWJVVW92bEhnSGFRbENDQlJPbGltenhZTHNZa1lQREhqRFd6bHo4d3owZ25LMVJON1p4VnFaWFVsaXF2TjBWckozU1ljb0FaWE81dkl4S0prMGdidUIwcXFxWVNEczVCYWRrM3ZvQkJlTlVrTHNVK3lXazRnNTJwd1B3dlVaU2tSRmsvVWJrRi8yN3dxWWQrK3ZLR3ptVTN4b3lKeFlSbkZCM2hUUDlCVW1xQWRXMkxHVEJ5RDFmR3doMHozdUs2cXExV3I5SUkvb0U3Mm42Ymw4QkJUT3FYbzg4OTlJTUx0dldmL3VxUldIVjV3VUltQ0FzQ0pQQUtodmtJOTNRVS9JdlRTUkV3aEYvZDkzZjN0Q1pMSDIySzFwUk1XcGdOUmhHd0dTRWU1STdXM1pPVk95VUVET0dGUjI2KzU1T0JXWS9zN1o5VkthZjREc2p0ZFc4WjE0ZTIvamRTK1FOM3RydzdWWEtubElBaC9PUGREeTNVbk9uN2VsTEJieDJPVmRYRURWZEJiSGlVbEt6M3RyZVZPQ09iRk4zNHpTOVdQejZocFMwZmZDVUVqTVJiajE3dDdZeFB1LzE0b3VMU21PR3FpWnZPMHFUcEtJcm9IcytBN3RVQWlyU1k3dGZpY1krYUNydEVxdGVuSlpycjNGMmJ5dDA5VDMvN0YyOWFibUttQ3Y4UElQK3FsMlZYdjdFQUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUVBQUFBQkFDQVlBQUFDcWFYSGVBQUFBQkhOQ1NWUUlDQWdJZkFoa2lBQUFBQWx3U0ZsekFBQUJZZ0FBQVdJQlh5ZlFVd0FBQUJsMFJWaDBVMjltZEhkaGNtVUFkM2QzTG1sdWEzTmpZWEJsTG05eVo1dnVQQm9BQUE4T1NVUkJWSGljelp0M2VKUlY5c2MvNy9SSkhkSWdrTkJMa0JKSUNCaUR0QUFpS29zVVhYQlJWSllpb3E2aTZDTHI3Z3E2dUtDNG9pQ0tLR3ZCUnJHQXNpQWdDbEkwVWhKaUNDUkFBaWtrRUNhWlRDYVp1YjgvYmpKcGsyU0dUT0x2K3p6M21mZTk5NXg3N3pudmJlZmNNL0Q3UWdHbUFhY0FNL0Q4Nzl1ZDFrTXc4QkR3S3lBQW9kZklYMkRjNzlteGxrSWY0QjVnQlhBRXNGTXBlR3drNG90WmlHVzNPUlh3VEd0MlRPTUJyUUtNQkc0SHVpQTdXd0dVQTlwS0dyOGF6eStKdjdPNzIydk1PVnZBR3pVcmlqVEI2RjR3UFFZR1JzaTg5TXZPWXJYbllsdy8zRlZBTDJBREVPOXV4VStOWWtpQkZwOTM3MEc5YkNkMEM0Rys3U0EyVWo0M0F1RnVHOTZBT3dyb3B5anNFWUxncUxid3dJMVNFSDNsZHpLWGdWMkFVU3Z6REZydzFVR0VDWCtBRzlyQ0J6TmFVSUptb2lrRkdCWFlMQVRCTStMZzJWdkFYd2U2Vmgya0xZdW1GREJIUVBlaFhXSEpPTGtJT0ZxalY2MElWUlBsOXdFc0hDV0ZCN0MzdkFaYWRRMW9UQUVCUUhSNEFQUUpyODYwT1VDMGJCZi8zeWdnSEZDNkJOZkpGVkJTNGYyT0ZOdWNqeGJ2MTk0d0dsTkFLYmdlOHVWMktQV3lFczVXbndOeXZGdHo0MmhJQWVIQVRRQXBPYTZWWUswQXN3M0t2VEFsN0E3WWxlWjg3UVQwYTE2TjdrT3A4MjRFWGdGbVVlTkV0bm9LM05LN2lZcnExdVFCTmgrSHA3Yld5LzRCbUFtY3VmNmFtMGJOYnF1QjdjQllveGJHOVFhSGdHMG5vSDBnZkRrYkFnemU3MEJHQVV4OVJ4Nm8vaGdET2cxOGYwWk9DUVh5Qk1RQjU3M2Zza1ROSTgzOXdPTWQyOERHR2ZLTEQrc09hWGx3OGhJY3lJRDR6bUF5ZXEveFBhZGgzaWR3cFJRZWpJZjV3eUN1RTB5S2hzc2xrSnFMTHhBSmZPcTlWbXVqNWdqWUE0eFlQUlVHZDZyT0xMSEJYemJEcjFueUJEaThPMFMxbFVmZTYwV2VHUTZkZzlSYytYN1BJRmd3SEZRMWVtT3JnRHZXd1JVTDVVQUljTzM2VzJ3WU5SV1FwVkxvc085UjBOYzVINWJiWWZrdStPS0U5enNRM3dWZW5leTY3SWt0c0YrdUFBT0FZOTV2dmZaUldLZFYxeGNlUUt1R0FSMmtBaVlreG5IN21LRUk1Zm9OZ2phQi9oU1hsUExBRS8vQ3A1R1JwS3Z1U3d1c1BoSnUrd05zZHZuYkw2b1RNNmVPUmF2M2JWYkRTU2RQQTlLUy9EM1JsQzNnUkVybDhhUmJ4M1plYWJoTHgzQlVLb1hVM0ZheEx4cUVXd3BJejRkdlVzREhxR2RNUXJSWEdqWUYrREYyMkdCeXJzSEd3MTZwOHJyUTZCU3cyR0RYYjdENmV6a0ZucDB6aVkxYjlyTDM4Q2t1NVYzQldtWWpKTWhFZkd3ZlhuN3U0UWJyK2VUTFBiejM2UTV5OGdzcHNWanBITkdPdmxGZGVQaitTZXc5bU1UYUgyMWNMb0daUXlEVXorc3l1bzNmRkJEK0Jwbjg5RTRucFFERXdsbC9FRE1uajZ5VlY1VUMvSDFGNlpsZFFtUjk3ektOSFI3bmtxOWRhSkQ0ZXVOTElzRFB4NWxuMEZiM1FhTjIwblp2S2FGcmpvQy9DRmhsdHRJVlVJY0dCUkFaRVVEcTJXeENnd0w0MjRLNytQSG5WUHg5alV5ZE1KcVkvbjBCdUpSWGdDbkFENE5lMTJBalc5ZS93UG5zWElKTUFmajcrWEErTzVkdDMvNkFUcWRsL0tnYm1YckhTTlovOURXZEk4S29zTnU1bUZPSVF4b1l1Y0JiUUhwcktHQjdaY3JWNjdSaEo3YXZ3c2VvSnpSdXBwTWdJVGFLaE5nb1ZQb0FGaXhaeFlXTGVienh3dU9FQkFVMjJvalJvS2RMeDNEbVByM1N5ZlBrdkduMTZGNTk5Z0ZHeHZkajR0eC84ZDNCRXdDMzBFTDdmeFhxTG9KYUlDd3NPQkFmbzc1QnBsMC8vTUtHajdlemEvOVJYbDczc1ZzTjdkeDN4TW56eWx1Zk5FcmJKU0tzNnJHelc1VTNBM1VWVUE1Y3ZaUlhTSm10dkVHbTZONWRDUWtLUksxV01mS21HTGNhaXI2aGV3MmVnWTNTWm1UbFZUMFd1RlY1TStCcUY5aFZZWGRNV2JmcGZ5eTRkN3hMcGc3dFFzZzQrQW5GbGxMYWhRYTUxVkJrK3pDM2VKSlBYMkRmNFdRVUtCSncxSzNLbXdGWENsZ09URno2K3FmcVRoMUNHN1R5L1h5TitQbDZaaG8yeFhQNlhBNVBMZCtJWFo2TVZnQldqeHE0RGpRazRIemd0YXB5SDZPZW5KL2VjUllhZk51Z05YaHZ3NzV6MW1LMmZyTy9adFlYd0JUa2xHeFJOSFFTZkIwWVQrVUtiQ2t0SXp1MzBGbm9jTlIzQ001KzZ0LzBIWFVmRlJWMlo5NHpMNzVKOTRScGphNG5BR2xuTDFROTVnR0xnRW0wZ3ZEUStGSDRHNlFadWdaZys5NmZuUVVWNVdYMWlIODdjNTdrdEF3Ty8zb0tBR3VaalhjLzJVSEdoVXZZR2xGQWF2cDVVdEl5UWU3MUhZQ1hrTGZIclFKM2JJSDNBTlorK0MwVmR0a3ZSNFVOZTRXdEZ0RzBpYU1CbURKN0NVOHVmWU1SVXg0aEo3K1EyeExqOGZmemFiRHkxZTkrWHZYNFB2SzJ1VlhoamxHZkRRd3R2RnJjMVdqUUVUK3dGeUNuUVUyVE9LWmZUeTRYRnJIM1lCSUhqcDRrT3llZnVPZ29QbDd6RDN4OVhKdnp2NXhJWTg2aUZZQXdBOU9wZE1XM0p0ejE1WFpXS1VxeW9pZytuNzMrSklrMzlRZEE3Mk5DWi9TdlJaaWFmcDZrazJsRWhJZVJFTmNYbGNyMUlMdG1MaUYrd2p4U1RtZUNqQlpaYzcxQ05BZWVPTFBuQUd1RFRmNThzZTZ2OU92VkVSVHc4UTlGcmZYY1lYUFgzT2Y0OUtzOUlGZjhpYmgzSlJZTUxBR0dBbTFjbEpjZ3p3NUxnYlB1OU1OdGh3andKckM4NEtxWjhROCt6MCsvcG9HQVV2Tmw3T1dlYjlkQ09BNENPNEEvNFo3d0FjQmg0RkVnRnVqcUl2VkRlcmVUS3QrYmhDY0tBQm0vczZySWJHSEM3QmRZOTlGT0hBNEhGdk5sS214TlQ5L2pwODZ3NGVNZERvZmQ4ZWhuWCsrN0NiblZtdDFzZXg1U3FNK1J1MFdRaXhRR3JFUXFhNG1Ic25tRWh4VkZzUUppek5CbzhldVhMNHRyeHo0UXBhbmJoT1BDdm5yK2dKTFRPOFdUODZZSmpWb3RrQ0VHSGEranpVM0lrWEpqRTNSdEt1bmNzaUtiY2FGRkgyQWpFS1BUYW5qd3J0SE1uVGFXYnAwN1lQQnRnMXByb01oY3dvYVB0N1A4OVEvSXlTOUVVUlN6RU9JSnBJM3ZDa0dBcVlHeU40SFJ3QjFBU2lQOU1nREpRRVlsdlN0Y0F5NDNVT1kyd29HN2dVd3F2VG1Lb29qQjBUM0V6TWtqeGJqaE1jS2cxOVgwQU5tUXA3d1k2dHNnQ3JBZU9UcGNlbzlhSU8wQTlKNk9nQnVBMmNDWXltY25Sc1gzNCt5RlhES3JUVmtDL0h3WWUvTUFQdHR4b0c0OXhaVWQrQWk1QzhRRCt3TU1FT0lMUG5yUWVybzZlWUJMMXlCSDNqUE5kdmRlSUFHNUFJNEhGSlZLUlk5dTNlalZzd2NYc3JKSU9uYWNhWGNNNWE3eENhU2Z5K0hzaFJ6YUJwdUk2aGFCdGN6R1p6c09FQndVeEMyakV6bWRuczZ4azhsK05wdHRLakFWZVFST0Fram9DdmNOaGtCajdXc3liMk4zR3J5MEM0RE9UU25BQjJrZXp3Y1VuVmJMQS9mTzRQWng0d2dKbGpiOTJ2WHZrSFRzT0FDS290Q2pjemc5T2xmSDFGakw1Skc1amNuRUkzUG5BRkJxdFhMZzBDSCtzMll0dVhuNTNhbDBlbFlKM1pwM0pZMHBvQSt3R2VnSm9GYXJlV1g1aThRT0dPQ1N1S0VnQ2VHaXdHZ3drRGg4T0xFREJ2RGdRdytUZmVrU0FPb3FCUWlhdHp4N2dJWm1XbitWU3JVUDZLblRTVy92M1pNbk9ZWFBPSGVPb210eUVwbE0waUc2YXNPWEZKbHJoL2NJSVZpODhrTUFndHJJZzV1MXJJeFR2NlZoczlrd0JRYnl6TUxIbmZSVlFSYmxMVzBMMXZnbXJrWkFQNVZLdGRmaGNMUjVZTVk5bkVoTzRjZ3ZTVXk0OVZaeTgvTDUrNHN2a25Uc09DcVZpaEUzRDJYU2hEc1lNbWdRaDQ0ZVpmcGpMN041elNMME9ubmp1WGpsaDd5L2JSOWhvYUhjTy8yUHZMcG1MVi90K0FaemNURWhJY0U4dDJnUmcySUcwajY4SFJjdjVYQ2xVbjlsRmZLU3RxWFdnYnppNnVlNjFxQ3ZvaWk3aFJBUkMrYittYVYvK3l2UEwxOUpSWGs1MGYzNzhzVGl4Wnc3ZjRHb25qMXhPQnlrcEtheWZlZi9VS3RVWERPYk9YY3huN1BuYzVpUU9KZ1ZiMjlqeGR2YkFEQ1pUSHk2WlNzbmtwTVJRakI0MENEU1RxZno3ZTdkbEpXVjRYQUlzckt6S2JMS3dBeVZBa1ZXMko0TWh6SWhPUWZDL01EZkE1T2pxQlMySElmRDUrQlVMb1FIeUJCZWdQVUhaUUFHc0w4dTM5dUFTQnd4VE9SbC9DYnlNOU9FajQ5UnFGU0tjNTkvN09INXdscFlJQ3lYODhXYnIvMUg5TzdWcTk0ZW14QWJWUyt2YlZpWVdQTDAweUk3L2JRUUpjVmkwM3Z2Q1ZOZ29BQ0VTbEdjZExmMVFXeWFpUmpXclRaL3BBbXhmWjc3NmNZdXRmbWoyc3I4QmNOcTVTK3JLWHhYMmRGUWNlcm5neUkvTTAza1o2YUorYlAvTEFBUjBhR0QyTDVsc3hBbHhiV1NvOWdzZG16ZElzWW1KZ3FsaGlCVmFWQk1qTmo0OWx2Q1dsaFFqemZ6VklxNE9lR21lanhEdXlJNkJNcm5meS83aHdocVl4SUtVakh1cGdpVDVGKzk4aVZoTUJpRVVZdTR2UzlDcFRTc0FQV2l4eCt6N056MnVWUDRLOW1aUXBRVWkrejAwOEoyOVVvOUFlcW1rMGVQaU1rVC95QUFNVEE2V2h6NGJuZVRQSTVpczFqeDRnc0NFSEVkRVNGK3RaVVIwYjY5MEdqVUFoQmgvdTRuamFweTVFUjBFQ3FWeWxtZnJ3NHhOcXBhQWM1RnNDUXY1ejZMNVZvdG43V3ZqM1IydEE4UHh4MzA2ZDJiKzJmTTRQT3QyN2h4Y0J6eFE0WTB5YU1vQ21HaG9RQjBENFZGWTJCWEtyeC9GSXJMSU92aVJTZHRucnQyWXcxY3lNb0dRSzJDYWJGdzEwQkl5b0tkcWJLOFNnR0xKaytidnZqZGRhK2pWc3QxVWEzV29OVTFmRDNtZmdleUtDMjEwck9IZXhlOC9ucDVUZjVqQnB5NENNOC91NWlWcjYybXFLaUlRd3ZkYi9mdURUSUViOFd5NTFuOHo2WG9sREllR1Y2ZlRnVW9pcUk4OGQzMysvM3Q5dW9OV0c5b2ZqeWMxV3FsLytBaDlJMkxJL1BjT1k5NHd5cXZIWllzWGNiVm9pTGFCbmpXZGhYL3dzVkxLQ3NybzIwRDF4Z2FvSmNRSWpTNmZ6K3FEajBBT2wzejQ1SzBXaTBkSXlNcEtDekUzOSsvYVlZYWVId1VCUHRDZ1FWOHREREY5UUcwUVR3elZrYWVGRm5sOWpjdDFqV2Roc3IvQWNVUEh1VE1WQlFGamNhVC8xTzVobHF0NXRpaG43RGI3YzZwNVJZVUdTbXlNUEg2MjI0ZkNFK1BhWnBPaFhRdjBTa3lzanBUcGNhYmgzR1BoRWVHNkxZV05FaFBLMEZCMVU1V2xkcDd4dml1UFh1NGVyV0lLWGRPQk1EaGNIRG95QkZLTE5WMlEzTEtxVm84dG5MUU5ILzlkUXNhcE1tTHB1WlhFdDc1K2hhTGhWc24za2xGUlFYSlB4L2xocWdvTnZ6M3Y4eDZhTDVyK3NyTHBqSTdxTXRCMzR4dzNFYjdWWDJwWmROUUdYL3ovWUdEakJzako1M2RYaTV0MHViRXdBTkdvNUY3cDA4bkx6K2ZMcDFrQUhMaWlCSE1uVFVMaDZNNk9OQmlzZkQrcGswa1pVR0ZBelFxc0pSTFJXaFZ6ZTVHUGV5dkRzQlAwUUFmS29yeXp3MGJQekQwN042TmUrNmVpbGFqb2FURWpLK2ZoM3RQSFNpS3d2bzF0ZjQwU3VkT25Wano2cXA2dEdjeU1qaDQ2QkFyZHNPOG15SFFJQU1vdlJsRWFTMkhEMytXa2UvSUs3K3ZxblQ3SjBWUjNoTkNxSFE2SGVIdDJqb0ZVQ21lZlFLTHhVSk9iaTRCL3Y2RWhEVCtGOUdhS0NvcW9xQlFYc0VyUUlpZkhBbmVna05BZnJIOFZSUktoT0JXNmxpRENjZ29zV3Uwbm1lMnRWTSs4QUdWWGk2QS93TXdIb2o4OHVIcXhBQUFBQUJKUlU1RXJrSmdnZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFFQUFBQUJBQ0FZQUFBQ3FhWEhlQUFBQUJITkNTVlFJQ0FnSWZBaGtpQUFBQUFsd1NGbHpBQUFCMkFBQUFkZ0IrbHltY2dBQUFCbDBSVmgwVTI5bWRIZGhjbVVBZDNkM0xtbHVhM05qWVhCbExtOXlaNXZ1UEJvQUFBL3ZTVVJCVkhpY3padDVYRlJYbHNlL3IvYUZZcEY5VVJBUUZDSVJJeEdOR3NYc0dqOG1uYzFPcHJOME5Nc2taaWJUays1SnhrejIwZW5PMHRsTTJxd2FPM1oyWTJLaWlDUXVVVFRFQ0xLRG9yTEtKa3RWVVVWVnZmbmpWUUVGQlZTVjZLZC9uMDk5K1BEZXZmZmM4N3Zubm52dXVmZkJQemVpZ1BlQUZrQWNoMTh0OER5Z2NRa1FMb2dhL2lFQ0tBQVNGQW9aY2RGNkJMOTZLNExEaHMzdW9MN1ppc01Cd0c3Z2FzQ21HTGZ1amorZUFCS1dYWlBBT3k4dnhCQ2c5THNoMGQ2THZidVV1aVlMdHp4VVEzR0ZPUWY0TGJCUlBsNjlQUTk0RlFqTi9YUXBJY0hxYzJwSWtDa1FiZDBFNnV4TWpGSHp5YmZ0QUJiZzgzTzFnRmhnQ1hBSmtBUUVqMUN1RTJnRWZnVitBZzRDampIYUR0YnBGSVNIYVVjdFpETGJ5TjlYVDNPTG1lVEpRVngyYVJSeXVZZTVJbE1CTURsTzVYb1NBdUF2QVZjQS93VXNCR1ErMUx2ZCtiY0orRHZ3Q25EYXp6NndmZGNwN3Z2RGo3UzI5ZlkvbTVvY3pFZHZYVUY2YW9oYldRSEpDdzZGcndURUFldUJwUUNHQUFPSjhVbEVSa1FTSEJTQ1JxM3g2RmF0Vml2ZFBWMjB0YmRSMzFoSGZXTjlsTVBoZUJSNDJObmVHcURMbDQ0Y0tXNWx4YXBjK213T2xsMlRRSHJxQkg3NHFaNERoNXRaK3R2dC9KSjNrMWRUeHhjQzVnRmZBYUZCZ2NGa1pXWXhPVDdScTRwcWxScERnSUdZcUZpbXAyVmc3alZ6ckt5WVkyWEZTcHZOdGhxNENiZ04yT3R0WjlhK2VnUnJuNE4xVDJhemV1VjBBTmFJbDNEUEkvbHMrYkthRFp2S2VPemhHV08yNDYzNTVnQjVRT2owdEF4K2MvMU5YaXZ2Q1ZxTmxxek1TN2xsK1cwa0owNEJpSEcydjlMYk5nNzljZ2FsUXNhcTM2WDFQeE1FZVBEdWRBQUtmbW4ycWgxdkxDQU4yQXFvTHBzOWo3VFVkRy83T0NiME9qMkw1dVVRR1I3SlQ0ZjJLMFZSZkJ1UUEyK05WWGZaMVFub2RBbzBhdmVGck5kaUIwQXU5MjVzeHlKQURXd0NBaTZaa1RXdXlnOUdXbW82UVlGQjdNajdIcnZEL2dad2FxdzZmMzNoc21IUFRHWWJMN3p5Q3dCWFhoN25sZXlSQ0ZBRC93RThCRVJIUjBhVE9UM1Rxd2I5Uld4MEhQUG1MQkIrM0o4dkFKc0IxVmgxWEhoMVF6Ry9IbXRsNzhGRzZocU16SmdleHQwclVyMnE2NG1BaWNBMjRHSkJFSmdZTzRsNTJmTVIvSXREZlVKS1VncnRIVzBVbHhhTkZFOE1RME9Ua1Q4K2N4Q1FmTUNOU3hONVkrMDhGQXIvcGtBSXNBdElpWTJPWlg3MkFneUdRRy83TWk2WU5TT0xtdG9hMFdReWVzVzR0VStLcHk2K0tKVFAzN3VhMkdpOVQvS0cwdlFTa0RJNVBwRnJyMWd5VFBtV3RoYjJIZHhMUWVGQlRHYVRUNEs4aFVLaFlOYU1XVDZiVzNDZzJtZmx3WjJBSk9CT25WWW5McGg3K1RDVGJ6clR4TGJ2dGxKV1dVcFJ5VkcrK3ZZTHpuYWU5Vm1nTjBoSlNrV3ZEOEJzdHRIWVBEclJPcTBDUVFDOXpyK2dkakFCdHdMQ3ROUjBRYVYwOXovbVhqTzc5K3pDN3JEei9JcWwzTE1vRzZQSnlMYzd0dzBqd1dhelVkOVlSNCt4eDY4T0FRaUNRTUxFQkVRUmR1U1BIaWxIaEduNThQVWMxcTdKOWt2V1lOcG1BY1JGeHc0cmRLaXdBS1BKeUwwNWMvalA2M01RUlJHMVVzSDZuZnY0K3Z1dm1KdDFHVW1UaytudTZXWjc3amQwOTNRakNBS3gwYkZNUzAxblV0d2taSUl2V3dhSW41aEFTZmt4dnQ5OWlydHVHOTJqTDc5dU1rb3ZuZDVRRENaZ0FvQk81ejZQMnRyYnFEcGVTV1NRZ1hWM0xBT2tFWHJsemhzSTFtbFl0eldQL0gyNzJYOW9IemFiRFlmRHdhTDBLZFEwdDNLcW9ZNjZoanJVYWpXVFl1T1pOREdlcUlnb2RGcmRtQjJMam94R0pwTngrRWpMcU9WTVpodlQ1bTdobHVWSi9QbC81dmlvdmpzQnprbnZ2bWVTeVFRaWc0TjQ3YTRiTUdnR05oZUNJUEQwTGRkeFpjWlVudjlpSndjcWF3a3g2Rm01ZUE1UDNIZ1ZBTjhmTGVlZHZBUGtGVmRRZGJ5U3F1T1ZnQlFCaGs0SXd4QmdRS2ZURTJnSUpDbzgwbzE4bVV4R2dONUFZM01udlJiN3NJaHZvQi9TWDVYU3Y5VEdZQUo2QWV4MjkyMzZwSWdJanIrMkJvWE1zMk9lTnpXUjd4Ni8zK083SlpscExNbE13Mml4a2x0VXpvNmo1Unl1T1VWcFhST242azRPVVVRZ0xUV2Q3Rmx6a01ra2M5Wm9OSFIxZDNLMjAwSlVoR2VyMFdvVUhQLzVkczg1Z0VFUW5RUGJaK3NmWUFlNEUyQUJzTnR0YmhWblJnV01xTHkzMEt0VkxNL0tZSGxXQmdCbWF4L2w5YzAwZEhSeXV1MHNOYzJ0Yk43N015WGx4eEJGQjVmTm5nK0FRaTZOcWl1K0h3bGpLUStBelF6QWp3WGRyaWZIWVF3TEtDNHRvcVhTd2kxcGQ0d3R3QWRvVlVveUo4ZVJPWGtnWHI5MzBWd1dQL3M2NVpWbFhIelJEQUwwQmx5ejh2TnR4OG1jSHRaZk5pWktUMHBTRUxJaEExUFhZS1N5WnZqU0xObzZzZmMyYzZURXhMcTNtMEFhL2ZmQmt3VTRCdGd1TGkyaTBOS0xLTjUrM2tQaG1KQkFiczZld1JzNzkzSzYvalRUVWdhMnVmLzl2NGVHbFo4M081cXRtNjVCcDFWZ3Q0czgrTmdlTm41U09hWWNRVkwrWWFBUVBFNEJpUUNyMVlyUlpDUTVLdnlDN0FOa01vSFVtQWdBem5aMkRIMzlQcUJqSUc1SjIxZlFtUDdPUjJXc1hqbWRaMThzZENsZkJ4d1lRVVFmVUN0S3FiZ1MxME1QVTBBaW9PTnNPd0FwMGVGK0srVUxCRUZnY2tTb1UvWXdBcDdET1dlZHVBTElMYTNvNE52Y2svemY2MGNRQkRwRmtVVkF0Uzl5aDFuQTdyMjdrQWt5SE00VGhBdEZBRUNpazRDR3BnWTJidm1BdnI0KzE2dWhKbWdIT0g2eWk5Ly8ydytpS0RuMjMrR2o4akJnVW9IQTlRQ2l3NDVPS2NNVldJVUhHVVp0b0tMaEROZThzSjdTdWlhZkJGYzJTdldPblc0RXdPRVEwYXZWNk5WU0dLNVR5bkNJL1E3NW1TSFZSWUM5Qnh2cDdMSUt3RnJnYTU4NjRJU0xnSDhGcGx3N1l4cE5mM3VPNWczUDg5VE4xd0lnSDJQKzV4MnJaUGV4S25ZV1ZmZ2tPTCtrbXQzSHF0aHh0QndBdTlQaTFFb2xhb1djNWczUFUvYnk0MHdLQ3dIcEZHZjJvT29sZ2lCWkxOTDJmWTFQd2dmQlJVQTJ3Qk0zWGtXZ1ZqbzNsRGtWbDh0R2o3R254VWFpVTZ0SWo0dnlTZkRVbUFoVUNubC9QYXROOGoyaUtQYkxUSW9NNDc0cisxTmZnM2M3TGFKSUZuQVBzQXpubFBBSExoK2dBakJvK3c5Tk1XaWxzTmRrN1J0V2FUQVdwVStoOVowWFVIaVpoSFRoOHJSazJ0OWJpMG9oeCs0UTZiUFpzVGtjZEpyTVJBWVBUTHRCNGJkbVNCUEZ6dDg1d2RYck9vQzlaVFg5TDFKaklnR29hand6WmlPK0t1K0NTaUZGZWlhTEZZRFRiUjA0UkpIa3lBSEh1MmVnVDJNbVN2MkJ5d0xlRk9DdVJ6ZCtLUzg2MVNERWgwK2d5K1FNSFFlUjRndks2cHZadE9jdzVRM05CT3Uwekp1YXlHMXpaNkpUdStjYUhDSVl6UklCQjZ0cUFUQlpyYXpibWtkQmRTM2ZGSllnU092M05yODZNZ1lHZTdnN0JJSDFva2pBMEVJL1ByV2FPU2tKYnMveWpsV3kvWmRTUWdKMC9NdjhXY1NIVCtoLzkrbUJYN25qOVUyNDFpY1hrcVBDS1hueFQyNkJWYWV4RjJPdlJNRGRiMjBtdjZScXFQZ3FwR1RORVQvMEd4T0Q0NENQUkpGY3BGTWcxeVNjQVR6dzRqZjVmUGJvM2YwRm4vdGlKODk4OW4zLy8zLytPbzl0ZjF6RmdtbEpBQ1JGaFpHVFBvVWxNOU5abUo1TVMxY1BmOTlYU0ovZDdxWjhiNSt0WC9tYTVsWitMSzFHZ0VZUm5uSVdhVVR5OHVieFZYc0FZOFc0YWtHZ1VrQ1l0T2ZwMVZ5YUhNLzJJNlhjOEpkM21SQ2c1K1ZWZDFCZTE4QUwvL2lhU3hJbmN1QzVmL2Rhc0xYUFRudTNDWWZUU2xiKzdXTnlpeXRBT285NHlWK0ZmTVZZM3NzaWlqemxFRVh1ZkdNejFVMHRySHg3Q3dBYkhybVhXeGRrOCtTS0c5QnIxRlEyak8wc1hiRGE3TFIzRy91VjM3enZaM0tMS3hDa1NPNU5QM1h4Qzk2NDd3K0FMMnFhVzduMDhaZG82ZXJoL3VzV3N5UkxPbm45ZE44aGpMMFdNdUpqdkJKb3NsaHA2ekxpY0xxSG40K2Y0cW5QdmtNUWhENFI3c1M1SjdsUThJWUFFU25nT04zVGErR2krRGpXM25VckFQVnQ3YXgrYXlNeVozcHNORGdjSXUzZEpzNzI5T0x5alFYVnRmeis3WS9wczlzUlJmRitwTnNqRnhUZUp0T1RCWWhTcTVUaXBqODhJR2hVMG9XbCsxNTduNDRlSTQ4dVhkVHZBSWZDYm5mUTAydkYxR3QxeXpaK1Z2QXJqMi81QnF2TkJ2QTAwblc0Q3c1dk52b0JTTW1EbE5jZXVKTlYxeXdDb05Oa0ptTEZBd0RFVFFoR3FYQlBTb3FpaUNnTzVPSUFvb0lEV1pxWnp0Nks0K1FXbFNPQVhZUUhnQTNqbzg3NXdmdUF1Q3g3cG1qWitvSGJiOFhsYzBTWklQaDdhYkVLR0g3R2ZZRXhsZ1hjQm53Y0d4b2lIdjdyczBLb1lWaU1oTWxpeGRJMytuN0JoWXE2UnE1ZXMwN3N0ZmIxSVoxREdIM3Q4SGhqTkIrUUlBaThMU0R3d2FQM2VWUWVRS2RXRFF0dlI4THMxQ1FpZzRPRWsyZGFsWXg5VGU2Q1lDUUNaTUJtVVNUd3NadVhzdUNpcVQ0MWFySlkrWERYSHVyYTNGTmJKU2ZyT0htbUZhUzgzWG1MN256QlNBVE1CZWJPVEVyZ3lSWExmVzcwc1hjL1pzT08vSkZlbjBCYVZ2OHBNQklCT1FBckZzN3BQNXp3QlVkUFNEdlh4NWRmUllCelAvL1Y0U0lPMVp3RXVBL3dMWDEwSGpFcUFRdW5wNDN3ZW5TNGRvRTNYcHBCZEVnZ2FvV0NZSjNHUmNBNm9BYzRDcHlmV3hZK3dGTWtxQU95d3dJTlRFL3c3cWJWVU5TZWFVVWhseE9zMTJIUWFRalVhN2huY1RZenBaT2dUS1NJcnhzcDl2OFVLUmJ3THBZZVozZ2lZQjZnWHBneHphOERrYThPRk5MUzJjV00rRmdVenR6ZXFkWU83dC93Q1VkcTY1SEpCSkpuUmhJY3FaVWgzVXE1Q1hoVEVJUVRTSGVITCtnVmZrL0NKUFBQbU9aVFEyZk9kdkhsZ1o5NTRzTlBBQWcxNkZuMzlTNktUalZRVUYyTHplNGdLRlRQSTMvNURSbHpFN0dMTmxvNkdpajV0WXF5L1UwYy9QS0VxdGRvZXlRME5HaGJXMXRuM2pscjVpVThEZkVoSUt0ay9UcVNuWG5Cd2ZqaXA4TTgvTlpHV2p1N2g5Y2NBV0hSUVN5K2VTWkw3OHBHcTNlL3dHeXhHV2syMXRMVGFlSjBhUWRaMlNtOWs3dW1SbDE1NVo4NmZkVEZMd3kxZ0dCZzVzVHdVSS9LMngwT0hsci9JUjFHSTZHeDdqZEpWRm9Gc2FsQlRKMFRpZFZzeDJLMkVSY1RSMUpxUEpOU2hyZmxnbHFoSnlvZ2tTYXFTYzJPcEl0T3pRbFZSVFhTVmZ5U0VTdU9FNFlTc0JDUUx4ckIvQXVyVDlEVzFVUEs3QWhXdmVvNWpCY1FVQ2wwQkdzaTBTcEdQMVZ5UVNYWEVxU0pwc05jRDhDVzkvYUhJYVc4NXdQN3ZXckVUd3dsWU5UbDc0ZWlNZ0NtWkVtbnVHRzZlSFJLOXhCWkVPUUlmbnlMRmFnT3BkdHlCcHVqajRnRUEwalRjeFhubVlDaHEwQU93RWdXa084a0lIbFdHSEtaa2dCVkVESkI0ZmJ6UjNtUUxFZW5EQUxnNHB4WTVFb1pDRnpoVjJNK1lEQUJVVUJhYWx3ME1hRWh3d3IyV3ZzNFVGYUZ6cUFpTmpVWXJVTFBlSDkxcDFaSTk0Q1VHam5oa3dKQUpJYVJ2ME1hRnd3bUlBY1FGbVY0TnYrQ2ltck1WaXVKbDRRaGt3bW9GWjUzaDc0aTl4K0ZITmhSQ29CQ05yQ3JESTdvLzFncWVsd0VqWURCUHNBNS8wYzMveW16cEdNcjdUZ1I4TzZ6MndtTkNtVE8xV25JaElGOWh5Nm9uNHpRY1JFMEFnWmJ3R0taSUREL0lzKzNNdk9McEZGS3pncEhJVk9oa0ozYnQzd3UyTzJPL290WmNtRmdQSFNCRjVhQVJDRGg0c1JKaEFVT1g3cTZ6YjBVVnA4Z01FeERSTHpCNitYTjk4NTR0SUFKSGd1UG0wd0pDd0VXampELzk1VlUwR2V6a3p3ckhFRUF6VGlaL3pBSVF2ODAwT2o3cmVHOGZyRGdjdU1QQW0rRUJSb3c2SVlldzBPWDBVeGJkdzlhZ3hKZG9BcUZUTWw0clFETnB6dVF5MldFeFVoTG9NMGhuUlgydEZ1d21HMGdmZVM4YzF5RWpZSWdZQWRnWTN3K1V6L25ueUFJSFVpZnVwOVgvRDlzbkk1ZUtPN2E3QUFBQUFCSlJVNUVya0pnZ2c9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRUFBQUFCQUNBWUFBQUNxYVhIZUFBQUFCSE5DU1ZRSUNBZ0lmQWhraUFBQUFBbHdTRmx6QUFBQjJBQUFBZGdCK2x5bWNnQUFBQmwwUlZoMFUyOW1kSGRoY21VQWQzZDNMbWx1YTNOallYQmxMbTl5WjV2dVBCb0FBQXZEU1VSQlZIaWM3WnQ1WEpUVkdzZS83NndvSUtJeENpNlFHMkNBaUF0cXBrV2lLT0lTbVFzdVpXbDZ6YVc2ZG0yNWF0dnQyczJ1TFdyWnJtWm1waTFhb2xmQU5ORkNrRUNrVk5SVVJBU1VHR0JtbUpuMy9qRXlPcnd6TURwRDBxZCtuODk4WnM1enp2T2M1enh6em5PZTl6bm5CUXZHQW9jQUF5RCtFVCtDSU9pQTc0RTd1UTRJVndhL0JTQ2dYWHVVS3RYMThOOWNpQ0NLSWlLZzEra292bkFlUVJETW9pamVEaHh3Um9RQUhCSUVJZXJUcmQ4U00yUllvK3JiR0tneGlWVHBUUUJzK3ZnRG5ueDBKc0RYd0NobitBWEE0Qi9RVHBuenk5bEdVN0l4SVlyd1c3VVJBSlBKUkdnSEwweEc0MmtneUJsK0dhQlVLcFdOcDJFalE3em10MXd1UnlhVEFUZzlJSVU5b2tHdjU0c3RtOGpKenFLeXF0SkZGUnNIM3Q0dGlPcmRseEVKOTdna1IyS0EwdElTUnNmZFNmN1JJeTRKL3IwUTNYOGc3My82RFI0ZXpXNklYMktBNXhjdkl2L29FZUpqdWpKNWJEaHltZUN5a201SGpZNmE2aXBXYnN4amYvbyszbnI5WlJZOHNRU0FvU1BHc1AyTFRWdWRGU1VBWXNmQUlES1BuQVFnTWpTUWl4Y0t1ZlRUUXBwNTJGMGhOeCtpR2NvdmNLYW9rbzV4bjlDemR6ODJmN1BYV3QxWm8zVDZYN083Qkh5ODFYWUhyNjAwa1B6ZENmS09sU0NUQ1VTRWFCZ3lzSlBkdG9VWEt0aXlJNThaRTZOUXErUTJkVVVYdFh5Mi9TZ3pKdmJFUTYzZzhtODYxbTNKWVdwaUJEN2Vha3JLcWxpOS9oQ1YxUWFKWEFHQnNYRWg5QTBTOFBlelRQdXkwb3ZPanJkaEF6akN1eHV6V0xSc042V1hxbTNvYmYyOFdMRmtLT05IM21aRFg3VXVneGZmM0VlbmpyNk11S3VMVGQzYkgyZXlkTVVlT3JacndlallZRDdkbHNlOHBUdFFxZVE4UENtS3IzZi93dUpYMHh6cWtuK2loSzMvdWNOdVhmTDJyUUFqZ0crY0daZFRCbmpoamIzOGMza2FTb1dNS2ZkRU1EaTZJMmF6eUk0OUo5aXlJNStKYzdkUVVsYk5uS205clR3NnZXVnZydGJWU09SZHJiTnRVL3M5Y1ZRWXZqN05xS2t4V1htS1M2dVl0M1FIQUkvUDZPOVExNFZ6SHdSWURRUTZNN1lHRFhEdzhEa1d2NXFHajdlYTVIVkpSRWUyczliTm1CakZ0dDNIdUcvT1poWThsMHpNZ0NCQ3U5emlUTC8xd2tPdFlNelFZQnZhK0VjK3gyd1dtWHQvSHdiMjZRRGw1KzN5R2d4NnVJNlpMV3Vvd2ZKM0RpQ0s4TnJTWVRhRHI4WEl1N3Z5NHNJWWpFWXpLOTQvNkd5LzE0VnR1NCt4YVZzZWdlMThlSEZoakZ0bE4yaUExUFJUTkcrbVpFSkNtTU0yRDR6cmdVd21rSlorMnAyNkFWQmVvV2ZXMDlzQmVQdWxlTHc5M2Z1d1ZxOEJSQkhLTGxmajE2cTV4Sk5maTVZdFBQQnNwdVJpbWZ1anhrZWYyOG01b2dvZUdCZkpzRUdkM1M2L1hnTUlBbWhhZTFKMFVVdFZ0ZFNaUGZWeUNwOThsY3VGa2tvcUtnMjB1Y1hMcmNxbDdEL0ZoNXNQMDliUGkrWFB4THBWZGkwYVhBSkRCM1ZDYnpCSjFyZmVZR0xsMmd5UzVtL2wzdG1mQVJBZmMzVzdVeWt0TThad2pTZXZSZTB1VU52R0hxcXFhNWo1NURaRUVWWStQeHhmSHc4bmhuUDlhTkFBQzJmMlI2R1E4ZHhyMzdFOTVaaVZybGJKMmJ6NlhsUktPZnQrUElPSFdtR3pQWVVGYXdCNDU1TXM2M1lIVUZ4YXlaWWQrUWdDOUFodDQ3RGZSY3QyYytMMEplNGIyWjE3NGtKdWFIRE9vTUh0SWl4WXd4dlB4dkczWjc1aDVQU054TjdSaWNIUmdlajBSbEwybjBSdnNQekRlb09STDNmOXpLeWtYZ0RjRXhkQ2VJaUcxUFJUUkk5NWovdml1Nk90TXZEQnBteUtTeXVabWhoQjUwQmZ1MzN1UDNTV2xXc3pMUDEzMDdCbVE2Wk5mZC9JQU94c1NOZkNEOGh3VUdjRWNvRlhnSHluOXN0WlNiMEkwSGl6NExsa2R1MHRZTmZlQW10ZFZKZy9rMGFIOGMvbHFTeGVubVkxZ0lkYVFmTGFKSkxtYnlVMS9SUTUrY1dBeGEvTWU2QXZ5eGJkYlpWUjY5bHJ2OWRzeU1Sc3RqenAyNHNJZTRTMjRmREdoUHBVVmdLOTZxbVBGZ1NTUkpHQlRnY01vMks3RVIvVGxmVE1zeHc5ZmhGUmhQQVFEZjE2dGtjUTRPN2JnNmlwTWR2dytHdThTUGxrQ2o5bUYzSTRyd2kxU3NIZ2ZvRUV0dk94YVRjaElReVZVazdpOEZBQWxpd1lSRml3SHlhVGlEME1HWGhydmJyNmFueFlsZmFpM1RwVGpZbmtEZCt4YnRubkhzRExrcWZCWHVHZEtUeHptb3RaaitQanJYYkNORGNCVjU0R2ovMWFUcmRSbjlHbjMwQTJmcFVLUUVoN1Q3eDltL05SNW4vckZURTVZaDdscFJXVmtoa3dMRzRrYTFhL3p2QnBHMGdhRTQ1UzBhQ2YvUDFoMUtIVFZySG04M3dBWW9iR1g3Y0lkWE0xbEZaNFNnencxSklYK0NrN2kvVDllMG5QYlBxSjB1RWp4ekQ5NGZrM3pDOHhnSmVYTjEvdFNDTXRaUmY1ZWJrWWpVWjdmRGNkU3BXS3lKNjlpQjR3aUlycUc5ZlJyaE9VeVdURURCbjJoemduTU52M2swNmpDUzd3M3hkL2VnTklsc0Nwa3lmSVBweHByeTBBNFJHUmRPcmMxVnErVUhTZWd3ZStSeFF0Y3pHeVoyOENneXo3dEVHdlowL3EvNmlxcm5KWlVZMm1EZjF2SCtTeW5McVFHR0RNaUJqT252blZJWU9mcGcxSEM0cXM1VGt6cDVHV3NzdGFEZ205algwLzVnS3dZZDBIL0gzQmJMY3BtNVorbUxEd0htNlRCL2F5d2lVbE5GT3FtQllsZFlEcnNuWlJWbHBpUTV2LytDSWlJcU9zNVFFREIxdC94NDhhUzNGeEVUcWR6bVZGVzdlK2hlQ1E3aTdMcVF1N3UwQnpwUWYvR0RSQlF2OHlieis2cXNzMnREc0d4M0RIWVB0cEtqOU5HNTU0YXFucldqWWkvbktDOW9nMUppUGZuODZWMFBVbWFWYm84dVZMWkdjZGNxdFNnaURRcTA4MG5wN3V6VERaZzhRQUtwV0s4dkxMVE43MGtsMkd1b2VRTTZaTklIWDNUcmNyTm43U1ZGYXUrY2p0Y3V0Q1lvQlhYbitMdlh0U0hESU1xTE1Welp3OWp3NkJRVzVWU2lhVE1XSFNOTGZLZEFTSkFjWW1qbWRzNG5pbkJjVEd4Uk1iZC8xUFkwMEZFZ09VbFpXU2s1M2xrQ0VzSXBMV3JhK2UvbFJXYXNuTStBR3oyWklNNmRHekZ5MWJXbEpkb2lpU21mRURXbTJGeTRyNkI3U2pXM0NveTNMcVFwb1B1TE1mSnd1T08yU29Hd2hObnp5TzNidDJXTXRkdWdaeklNdnluTDcrdzNkNWRPNU10eW1ic3UrUVRjemhEa2dNVUhTK0VKVmN5WkF1MG81U0M3SWtnZERrK3gvQzI3dUZOUlNPaTc5Nk9XdlFYVU5JbWpvZGJZWHJNNkN0ZjhEdkZ3aDVxNXV4Y3RROENYM0FXL01vcmhNSUpZeE9KR0Ywb2wzaGdVRzM4dHFxOTl5Z1p1UGhUeHNJS1ZVS0FKM2RHV0F5bThtNWNGSkNyekZMTXk4R2c0SDh2RnpyRW5BSDVISTVvYmVGSTVjN1BqbHlGUTh0bmNpYkM5Zk9rbVNGZzlxMnFOZHJxMVFxQ3N2MDF2S2tjUW5zL0hhYjJ4VzhiK0lVVnIyenRzRjJaaEdibEppeldXRUFvd0ZmeVF4WS9QeS8rZjY3TklkTWZmdmZibE1lbXppZVpqZDRSYzBSQkVGZzNJVEpicFhwc0MvQUdIUnJaM2xHanVPdHJ5bmpSbWZBbXNVYitIWmQ2azVGeTVhdFhsajB6TE5MYWlzTWVqM25DODg1Wkd6ckg0RGE0K3BKcmNsazR1eXZWeTlHK0FlMFE2VytlcUJTZEw0UXZSdnlBZDQrUHJScTFkcGxPYlU0dURNTG84RTRWSEh5Wk9rS2t4S3JBV0x2ak9aSVRyWkR4bTdCb2V3L2xHY3RUNTh5anUxZlhiMlgyS3RQTk1tcGxwdnFuMjFjeit5SHByaEZZYVZTeWQ0ZmN1alNOYmpoeHRjQmlROG9PSDRNcFZ4QjMvYlNJK21NY3o5ejR2Z3ZOclRZWWZFMmdjN1E0U090dnlNaW80aUxIMFYxbGVzNVFUOU5HOXI2Qjdnc3B5NEVMeSt2VmZNZVd6VDdzU2VlQnFDRG55Zk5CUVVaYzFaTEd0Y0dRaGZLbTg1aHlZMzZnQWY3TGFUNFRBa3lyVlk3YS8xSDd6YTJuazBXQ2l3N2dRM01va2k1VG5yaFNSVE5kbWdpNWVXWEpYUlhJQWdDUGo0dDNTclRFU1ErUUJBRUxsVlZFUG1HL2FjNGhjS1daZVlEazlpNmVhUGJGWnMxWndFdkxHczRtSEVWRWdNOHNtQWh5ZDkrN1pEaDd0ZzRtM0xmZmdNNFdYRGM3YUZ3NzJqSDEySGRDVWtvL0VlRHkwNndzUlZzNnZqTEFJQzJ3ZzBabTZZQ1QwOHZkSlg2QnR0VlYxUURWTWlBdkV0bHBlVCtkTGl4ZFdzVTFKM0NYWU83VTZXdDVwZkRCWGJiQXhUa25xYmljaVZBcmd4WUQvRDQvRmxOOWpwTXZSQ3dlYkZyVk9KRUFGWXRXb3ZSS0wybWF6U2FlTy9aVDJ1TDYrVkFOcEJ3dnZCYzJ4OE83T2UyOEI1bzJyUnRkTDNkRGVPVk80VWgzY1BaazVKTS9rOUhPWEx3WnpwMTc0Q3Z4aEpVbmNnNXpiOGVlb09qUHg0RHk4dmljMnBOMXg3WUJ2UUE4RzNWbWhZK1BuWDdhTklRcjd4SURWQ3AxZHE4U09YZDBoTUVnWXBMMmxwU0pwQUFGRjRyUXczTUJkS0JDcHJBSy9GdS9taXZqRzBPMTd4YSszK0dhSW4rek81R0RnQUFBQUJKUlU1RXJrSmdnZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFFQUFBQUJBQ0FZQUFBQ3FhWEhlQUFBQUJITkNTVlFJQ0FnSWZBaGtpQUFBQUFsd1NGbHpBQUFCMkFBQUFkZ0IrbHltY2dBQUFCbDBSVmgwVTI5bWRIZGhjbVVBZDNkM0xtbHVhM05qWVhCbExtOXlaNXZ1UEJvQUFBMW5TVVJCVkhpYzdadDdmSXpYMXNlL3o4d2tFM0pQU0NJU0VxbGJrSXU0WDZxdUxWSTBWRjM2Y3JTbHgwZUwwMVp2aHpxbmRTaGFMVlc4TGE5U0I0Y3Fxb0s0bmJoTHFDWWhJUkZ5STdmSmhabGM1dnFjUHlZSjAyUm1Na2lhdCsvNyszeWVUNUs5MTFwNzdWLzJzL2JhYTg4QTlBR1NBZkdQK01qbDhvTmlhYVo3ZVZHU3Y0dVQ0N0dIK3E0QnZXWEEvd2lDMExtTmYyc2tFZ2wvTkl4Ny90bFJPb21oV0NZNEVqWDJXZjU5NWlJR2cwaDJUbTZ3S0lxYkJNRFF4czlYU0U4KyszdjcydURRVktqUTY3UUFCUGNhUmM2ZFBGRUNDTUlmOEQ5dkRWV3JYZmkvTi9QZndDd0JKLzU5bGc4WEx5Y2pLNmN4L1dsMHlPcHFWS3MxUkUyYVNWbDVCZHUyNytIb3dSMTA3QkFFZ0ZKVnh0NzloemgxTmc2Rm9nZ1BkemY2OW81Zy9BdWo4SEIzYTFUbm53UUVRR3pieG8rYlYwL1hOQllVRnRFNnFBY1NRY0FnaXJUeWJzbXg2SjBrWGJ2QjNMY1hVVkJZVk11UW02c0x5NWQ4eUN2VFgycEU5MjNEdzBHd2E1OUlzckx2MXIwQ3FoSGg1VXdQYnhmV0orYlFmOGdMM0x1dlJDS0I2ZU44bURUS2k5YmVjdktMTlB4NHRKQk5QK1R4K3B2dmsxOVF5QWNMM3FobEsyclNUQTVFSDdQWjZmSGpSckp6NnpxYjllb0xpd1FJQW53OXBDUGxPajFia25OeGtFdll0N1lyenc3d3FKSHBoaVBEK3JvemJhd1B6ODFNWlBHU1ZUdzlvQS85Ky9Zd3NkV3FsVGVCQVcxc2R0RGZyN1hOT3JiQUlnRmdmRWNrZ3ZIM1Q5OXFaekw1aDlFbjFJVjFIN1ZuNm9JVVBsNzJKVWQrMm1iUy8vVVhTeDdiMllhQVZRSkU0SWUwQXB3ZHBieitrcTlGMmNtanZYbnY4MXZFbmo1UDZiMzd1TG02MVBRcFZXV2szYnhsczRNZE93VGgyTHk1elhyMWhWVUNGQlVhbEJvOWZUcTc0Q0MzbkRZSUFrUjBjV2IvY1FXWm1UbTRoUVRYOUEwWUdrVnlTcXJORG9hSGRpWHU5QUdiOWVvTDZ5dEFOUDQwaVBVemFLZ1NsRXFsSnUxelprM2o1S2x6dG5rSGpCd3gyR1lkVzJDVmdCYk43UEJ3c0NQcGhvcXlDajJPemFSbVpmVjZrYmhFSmZiMmRnUUUrSnYwelhwMUtyTmVuZnI0SGo5aFdDVkFJZ2k4RU5TU1RkZnVzdXE3SEJiTmJtdFc5dHZkdWVRWGFZZ2NPUlFuUjlQMzl0ZUVhMXo2SmRGbUIvdjJqcUJMY0FlYjllb0xxd1FBL0xWM0FEdFM4L240Nnd5Qy9CMllFdWxkUytiUXFXTGVXcDZPVENabDhZZC9xZFUvYWZvYzBtOWwydXhnV0VnWDRzLzhiTE5lZlZFdkFnSmRtckZsUkRDVEQxMWw2b0lVdGgzSVo5SW9ML3k4NWVRcE5PeUpVYkQzV0NHaUNBdmZuMHRZYUpkYU5qYXVXOG41aTVkdGRuRFF3RDQyNjlpQ2VoRUFNS0c5Rng0TzRieCtQSVZEcDRvNWRLcllwTi9KVG9wS3EyZlQ1aDFNZm5Fc0hkcTNNK2tmMEs4bkEvcjFmREplUDBIVW13Q0FJZjd1SkUvclMweG1FYkU1cFNncU5mZzBsOVBEMjVuSXdCYk1qMDFqZldJT3cwWk5NamxBQVd6ZnRZL1RaK05zZG5EdzAvMllPRDdTWnIzNndpSUJ4WlZhZHFjVjFOblgwK2RCa3FNWFlmOHRCYy80dVJHYlUwSnlmaUVUcHY2WnBQaWpOVEpMVjZ6bFJtcTZ6UTVldXB6WStBUzR1YnJnNHV6RXpWSVZFdzhtUFpKaGxWSmw4dmVKUS84aTZlcDFtKzJFaFFaYkYzb00xRW1BdmIwZFJ3OXVaLy9QTVdpMU9wdU5Obk53NE1XbzBTWnRYaTA5R1RxNC82TjUyWUF3K3dwMEQrdEc5N0J1amVtTFdXZzBXcTZsM09EVzdXeFVLaFZhclE2SlJJS0xpek8rcmJ6bzFyVXp6azZPajJUYnBpRFltTkJxZGV6WXRZOXRPL2R5NWx5Y3haVW9DQUloM1RvelplSTRYcG4ra3NraHpCb2FqWUFEMGNmSXp5L2t0Um1UcmNwZVNiaktuMmE5UlhKS0dnQ2Vqakk2K0RyaTUycUhrMXlDblVSQWJ4QXBLZGR4NTc2V3pGSXRDWW5KSkNRbTg5bVhHL2hxMVJMR2p4dFpMNy9xTElrMUJJSzdEeUg5VmlhVkpUY1JCTUdzM1BtTGx4bjl3blNVcWpKNitEVm5lb1FIWFh3Y01LY2hpaUxGS2pYcFJaVWNUaTBuTnFNY0JJSDFxNWZWS3MvVlZSSnJ0TEs0VnF2RFlEQllsTG12VkRGMXhseVVxakptOXZaazVXaGZ1bHFZUEJpWHY2ZXpBKzA4NWJ3UzRjSmYrcmtqRmVETnR4ZHg5ZG9OcTM0MXFYdUJEZDkrVDNiT1hZWSs1Y3lVTUhlYmROMmJHNGtLYXlYbnBhN09hRFJhL3I3MEM2dDZUWXFBVFZ0MkloRmdSZzlqMmMwZ3dwbU1NbUpTbFdqMWxnc1NVcW1BZzcweHBBMExhbzU3TXlrSG9vL1dXY0YrR0UyR2dJeXNIRzdkenVLcEZuSmF1OXBoRU9IVGsva3NPcExMc3BQNXpQdnBEcVVWZW9zMnFnbVFTaURDVjQ1ZWIrQmtyT1VpVEpNaG9McGMxckdsQXdBbmJpbzVtcWFrY3hzZituZHBSMHBCSlcvc3p5RXByOUtzRFR2cGcrbTBjN2N6MnIxdXVRelhaQWhRS0l5blM0K3FpdFArNUhzQXJIM3pSWFo5OUNwaituWGp6ajB0OC9ibjhNR2hYTTVubHRVcTAwa2xEOEtsaTROeGFvcWlFb3ZqTnBsRXlGNXVENEJXTHlJQ3FZVnFtc250NkJyb2kwUVEyUFQyVlBiMCtwVWwydzV6SWF1VUMxbGxlRHZMaU96a3lzaE96bmcybDJIVU5FSlh4WTY5blozRmNac01BVUdCeGxKYjlqME55a285R3IxSWFJQVhrb2R5aHZFRHd4alhQNFNZUzlmWmZPUUNzUWxwYklvdll1c3Z4VHpmMlpVcDRhNDFzcmxLWTd3SWFtZStoQWROaUFDTnhwaWdYTTFUazZwUUErRHI2VnBMVGlxUk1MSlhNQ043QlhNN3I0aXRNUmY1THVZaVAxNHQ1VnltaXZsOTNmQnhrcEdRcHpheGF3NFN1ZHcrT21wcy9kTEdSNEZXcXlNak14dGRWUVoyT3lPTGlnclRRSmFRbU14elkxNEdvS1JDeHlmSDh3SHdkTEY4d0FuMDhXVHh0RkZjV3ZjdWtlRWR5RlBxK1B4c0Nkc1Q3M085VUFQQWV3dVhzdldmUDVpMUlhbk11ekYxeFQ4K2ZPUUpXa0xNOFZQNEJJVFR2dHZUNU56SkE2Qmo2RE8wOEE4eGNlcXpMLytiU3JXYWVjTjc0dXZtelAxSzQvTDFiMW0vWk1qVHhaRnZaNDVsYkhnSENzdjB4TndzQjJEWmhHZVFTZ1ErK1hTTldkMEczUVVXZi9JNTk1VXFCblFOWWxESVV6VVBCZ1B2TFZ4YUk1ZVdmaHVBMXdlSDA2bVZNUWtTQkJnVTJyN2VZd2tDZkJ6MU5JNXlZOUJ6YlM1bnhzQlEvRDFjeU16S1FhZXIrelFwYy9EcHVPUGx5VkZzV0xQc1VlZHBGdFZiMEk5L2U4M2tBQlF4ZXdWWkJjV0lvb2dnQ0FTMDllUHlsU1JTODRxUnk0eGg2YXMzSmhMUjNyOU91M1ZDQUc4WFIvYThNWjR4cTNjamwwbTVWNkhtYnFrS3Y5WSt5R1F5NmdvSEVyVmE4OXl4RTJjZWE2S1BpekdSSXdCWTh0TlpTc3FOOFNIQXUrNWJhSE1RcWc1YVhWcTNRS3ZYWXhCaDBZK3hhSFI2eG93ZVlWYXZRWGVCNnY5NlJuNnh5WGFtMCt0TlZzU2tDV05ZLzgzM1hJajdwYWJ0VnE2QzNwMEQ2am1TaUtnenhvMzBnbEpFRVJUS2NuYkZwZUR0MVlMMzM1bGpWck5CQ1FnTENlWjJSaGE5NXF5czFSY2UycldHQklsRVF2UytyWHp4MWJkYy9pV0o2Q01uT0JTZnpPUWhQV3JwMVFtTnR1WVc5M0NTc2ZMY3UyYzRQU05DbWYvbWEvaDR0elNyMnFBRURCOHlrTDAvSGNhamJTQnVmc2IzV1ptZlIrSE5WS0xHUG1jaTYremt5RWNmekVlbjA5RXA5Qm1PeEtlUW5KbExjTnRXVnNjeHFJeFJYNlhXc1BGVUFqS3BsRzJiMXhEUXhzK3FyZ3dvS1NoVXVDMWJ1VmFReVo0c0gzR1hmZ1VnZk9JVUJzNmVCOENsN1Z2NGVlRUN6cHlMWitVWEcrclU4L2YzSlRQN0RyTlg3eUo2Nld3Y0hlek5ENkxXSUpaWElJcXc0RjhuVUNqTGFldmZtdDE3YXQ4bjZyUnFSSU1CblY1UG9hSVlRUkJLQldBUjhQSGpUdFlTaGk3NGF5MEM2b3RlbmRxeTVkMy9vb1dyVSsxT3ZRNURRVEZxdFlaM2Q1MWc1OFZrVzExYktBTStBUTRESVlENXkvOUh3OU9BdVE4RjdLMGExeEplanJ1ZU9iRC92RlhpdktqQndzUkI0VFZFaUJvTnF0d0NEbDFKWTlXUk9OSUxTaEFFSVVzVXhlV0F0Y3NNUFpBSXhGZXYrZmlxNTBsRHdEd0I4Y0EzVnZRM0F5dUxsZVZ6Rm04NUtQdjcxbWphK1hqU3dxa1pKY3B5TW9ydW9YNVFMbzhXUlhFNm9MREZ3U1pURHpBRExUQWZhQTlzTm9naU4zTVZYRWpMNWtaZVVmWGtUMkg4enNOb2JKdzhOSDBDcXBFQnJBTVkxaVdRaXgvOWlYbkRhNjdhZHdNWEg5VndveCtISDBxQW5nVnFuM2ZOd3dmZ2RtRXAzNSs3eXBYTXZPcjJNVUQxZnFjRzdnSm5NSDRqeENvYW5RQ3ZqcDJOSnhkUkhBUU1zbFUvdmFDRXRjY3VQZHcwdk9yNUxUWUNNNjNaYTJnQ0RBRGlReGNpL3QxN01tdmZFVXF5cytwbFlPL2JjMmhtSitPYnIxZVlsVm14YWoxWEVxN1NiZTY3YUxRNkZIRm44UWtKbnpIc25iOXRYTjNGeCtMclllblM1VWxnRExDLzIvTlJqRjlkZDlKakRWOE43VXRwVmdacFNhZng5NnVkRmFyVkdrSjdqK0RXN1N6ZXVYeWRMTHZtbE91TmhEdElCREZuNDlyaDU5ZXNpTVhNMXRqUUJMZ0tncEFqU0tSTzA3YjlRRUR2ZmpZYmlGM3pHU2UvWElHYm15dGhJY0ZJcGFaeCszcHFPbmZ1NU5GaDhIQ21iUG9uNVhvREtXWEdjbGhsZmk3SEl3ZUtCcTEyTFRDM0x2c05UUURBSEdDdFJDcWo0N0FSZUFZRzFTa1VOSEF3Z1gwSDFHclg2N1FjVzc2RVM5dS9RMXRSVWF0ZklwUFJjZWdJSXYveE9ZNGVuZ0JjTDFOVHBqZWdLeThqWm5CM0RCcDFxU2lLTFRBbVFDWm9EQUlBL2l3SXdxZWlLSnFOK2k0K3JYanJYSUpaQXdhOWp2dTV1U2J4Qk1ESnl4czdCd2VUdHV4S0xRVWE0NG8vTzJNQ3hWZmlBZG9BMmIrMTIxaTd3QVpSRkxjQy9ZRzZ2bGZ6dlY2cmxWc3lJSkhLYWs2VTFpQjdxTlpnNzFwVFYvVGdkeVFBb0J3NGFxWnZTNE9OK29DTU9sZjcvNVpNc01Idy93VDgzZzc4M21pc1hjQWF5aVZTYVRQWDF0WkxXUFdCWGdSZFZZMVFYYVJBWDFFT0VBNzgra1FHYUFERTBJQmZvUmNFU1NaUTUyZm4vZ051c2poWXhjUUJlZ0FBQUFCSlJVNUVya0pnZ2c9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRUFBQUFCQUNBWUFBQUNxYVhIZUFBQUFCSE5DU1ZRSUNBZ0lmQWhraUFBQUFBbHdTRmx6QUFBQjJBQUFBZGdCK2x5bWNnQUFBQmwwUlZoMFUyOW1kSGRoY21VQWQzZDNMbWx1YTNOallYQmxMbTl5WjV2dVBCb0FBQkU0U1VSQlZIaWMzWnQ1ZUZSRjFzWi90N3VUVG9la3N6Wk5OZ2dFQ1V0WXdocldzTW91KzZLQ2lqS29JNHJJT0NnSWdqS2pndUlubitNZytBR3lpSXlpSUlMSTdoSU11MENBa0xDR2hKQTk2V3k5M2p0LzNLU3pkU2RwZ2FqZit6ejM2ZWZlT25YcTFIdnJWdFU1cHhyK1dPZ1AvQVNVQUNuQVB3RHYrOW1nY0QrVnU0amh3QzVBNmVtbW90UmlSWktmNXdFSHluNmR3UVFrQUd1aHZOcWZEeGNCNmNWK0hhUUR6NHlXUHA4K1JCclp0cG5rcGxTSXlKMnE5UkpBWERxMDY0VC9USnFrZEtYUlA4b0k4QVh5Z3JXTjJQem9vQ29GSldZcnQvS0xLREpibkZZMlcyMzRhTlMwMWZzaFFmTFcwMG5yUGptV0dBSXNBWEpxYTFoMTk3YmZFelFDOFBkVTF5andkRmNSMmRpMzNvb0VlRUNVZUt2c3RoY3dtRm8rSDRWTFp2NUpNRFc2SlRITjlBQ2RnVFcxeWY2L0pFQ2xVUEQ2ZzEwSjFqWUNtQWdNZFNyYllGYTVDSnNvY1Rrcm4xS0x0Vlk1ZDZXU3hsNGE5TjZhS3MvVktpWFA5bXJIb3IzSEFaNEh2bmRVL3c5THdQLzhlSTdkbDI3V1c3NlpuemRQOVdoTm4rWkI5bWM5dy9YNGU2ckpMVEVOUVo1bzg2dlgrOE1Ta0pRdDJ6cW1mMi9jVmJXYmVUWDFOcWNUazFtODl3UlBkbS9OdEM2dEFGQUlBaDJDQWpoeTliWTdFQWtjcTE3WFZRSUVvQWtRWEhZVkFuZUFXMEN4aTdycWhYV3YveDEvYmQyYndhOE8vY1NNSmUrdy9uZ2lVVTM4NlJRU0NJRE95LzVwaERpcVYxOENCaUpQSmc4NVVXUURmZ1oyQUo4ams5S2dHRCt3TDRiaVltWXNXYzdXTTFmc0JLaFY5bjJScDZONmRSSFFIWGdYNkF1Z1VncEV0OWNTclBjZ3VJbWF3bUlyR1ZsbUxpUVdLbTlubUdLQldFSGdINUxFaXJKNlJhNTB3aVpKM013cnhHUzFZYkxZWEtrS3dHTWpoekp2NWI4NW41N0Q1YXg4M0JTS09pZFJaenRCQmJJak1oOFFPclQxWnZhTVpvd1lwTVBQMTYyR3NDVEJtUVFELzltWnp0b3R0eVNqU1JRRVNKSGtFWE8ySHJhSEFLbU9DbklPNzZ6WEoxQ09EbE5tY3Y3S05VZEYwNEhOMVI4NjJnZG9nQytCVi94OTNWaXpJb3E0YjJKNGRFS3d3ODREQ0FKMGJxL2w3ZGNpT1h1b2p6QmhaQk1rYUNvSXhBR2o2MkgzQ0FBUGQzZUc5T2pDcE1HeCtMblE2U29kVXNqdmRHei9QandVMjR0QVg1OHFiZFN3M2NIOVZtQktxNGhHZlBsSk5CSE5ISDQ2ZGVMOWoyK3dlSGtTRXBnbGlmN0FMN1dJcDdxcGxDRng2ejZrVzd0SUFMbzgralNuRTVOZEhnR2RIdjRMWjVPdWt2L0RMbnk4R3BGcktLVGJ0R2U0bHBZTzhrcVFWRm0rK2doNEZaalNvcGtuaDc3by9wczdEekQzNlhBK1dOWVdTY0pkSWJBREo3TXdFQWlFUkVXMHNIZitYc0pmNjgzWUFYM0tienRVTDY5TVFDc0JsbnA3cWFRdjFuUnlPdHhkd1pNUGh6SnJXaGlpUkdOZ3BST3hJc0I0TmUyMmxGTmd1T3MycTBPU0pJNG5KSmJmWmxZdnI3d0t2Q21CYXNHY0NGby80SFhQRFBqbmdraDJIOGdrN1k1cEVyQUNPRmxOeEFpc05oUVZ2OWpueVJkNFl2UlEvTFRlWk9jWDNGVzdHM2J0QmVEYm4rTDUrZGZ6QUNlQXVPcHk1WE5BS3lBeE5OaERPSHV3RHg3cTJuMGtpMVhpVWxJUmZyNXVoQVY3MUczTVp6ZDU3clhMQUY4RDR4MkllQUliZ0VuVkMzN3JIRkFOdnlMdlkyb1VsSStBc1lEdzVOUlFwNTNQeTdkdytHZ3VldzVtc2VkZ0ZnVUdPVURSdkttRzRRTjFqQmlrbzIrTVB5cGx6Wlgxa2ZIQkxIem5DZ1ZGdG1HU2hDZHl6Szh5U29ESnlQNTdWK1NWNkhtY3p4djF3UkxrbmVvVjREdkFZVVNsbklBeEFLT0dOSzVTbUh5dDJON2hYMDdsWTdQSjRUYVZ1NXFRZHQwcHpzbmdlc3BOUHRxUXdrY2JVdEFGdUROOG9JN2hBM1VNNmh0QUkwOTVGK2Jtcm1SUVQyKzI3OHZYSUFjb3ZuRmk5Tkd5QzJBa0VHSTBtZTJGTmxFa1BTdUhVTDBPZ0Z4REllNHFGVjZlRlo1Z3Fja0VJQUp2QVJXVm5hQ2NnR2hkZ0R2dElyM0l6alh6L3BvYjdONmZTZkwxaWhmbDZSTkFhRlFNb2UxaWFOS3FJMG8zT1hwVGxKTk9ha0k4dHhLT2tYbjFIQnUvU0dQakYybW8xUXBpZS9vemZXSUk0NFlHMHErTEY5djM1WU1jcEhCR1FHWGNBUG9tcGR3aVdCY0F3SWZidm1idWV4OHhKclkzT2o4Zk51ODV3TkNlM2ZqNnZUZnNuVTlKendSSXEwL255d253QXpRaFFmSzN2T0N0Skxac3Z3MkFVdVZHWkw4eGhIZnVUMEJvUzNuSFV3MWVBVUcwamgxSDY5aHhXRXFMU1VzOHlhWERYNUY5TTVGOVI3TFpkeVNiRTd1N0U2SjNMNjhTWEIvRGtIMkw2ZHYySGFaL2wwNEFET3dXVGJNZ1BUdU8vQXhBSTQwSGs0ZjB0MWZZY1RnT285a01jbWk5WGxBaGUzZm9BMlVEZFFGMlE3RlpMVnorNlJzSzdxU1V2ZjBlZVBvRzFsQWlpU0taMXkrUW1oQlBha0k4aHN5S1hXMjdTQzlDOUc0WWMrMExUbEFOQlk3eG1RRHZmckpqajlmTXNTT0ZMbTFhMGI1bEN5NSt1WjZURjVNb0xpMmxhOXRJKzA0dnoxREl3bjk5VWw3MzM2NFFZQVF3bWtRQU5CN3lkenQ5WWdnNWVXYjJITXdpN2VKeDBpNGU1NWdnNEI4U1FXaFVEQ0Z0dTFHY20wbHFRanhwRjQ5aktpbTBLL1gzYzJQV3REQkdETkxSdWIwUEZrT0JYVDlRdTNkU2dTSUo1bGl0dG5Xalhsd2c3WGp2VGFGSFZCczBhalY5bzl0WEVVelB6bUhDeTY5ei9mWWRnRStSUjArOUNVZ0hwRHRacGlyanUxK01INjBpR3JIbllCYmFKdUg0aExRZysrcDVjbE92a0p0NmhYTjdLL3dLaGNvTi8vQzJhSnVFY3lOK0QrMGl2VmswdDZWY0tJSE5hQ1FqeDk3dldzUFUxYkFlYUhzbk8vZHZ2V2M4enlQREJ6RitZRjhlQ0F0RnBWS1NtcEhGOTcrYzRPUHR1ekFVbHdEOEFEem5nbjc3Q01oT1NUWHFqQ1lSVHc5NUdmVDByTWd2ZUdqOWllZzNub2grNHluSnpTRG4ybm55YmlYaDNraExRSXNvL0p1MVFlbW14bWpJNFViOG5pb05XSTFHRUNXU2I1cktIMTF5eFVEZ1pTRERKb29yTnUzZXo2YmQrNTNKN1VUZVJ6aFBJRGhBK1lkNXNOUm9tM3JrYUE2UFR3bkYxOGVOWVFOMEpDUVcxcWpnNmEvSDAxOVBXTmZCOVdyQVZpaUhCTDZQczI5emJ3TXRYREVTT2VKRWl5QTkzU0lqeURZVVlyUFpDUFRSVW13MDhkM3hNd0NuY2JIelVFSEFOOERVSGQ5bE1teUFqaWNmRHEzYUNhc0ZTWklRSEt3Q1ZlUXNWVmNlYTFFeG9zM0tuV3dMSjg3Ymw5VFBYRFd5SE5mU00wak56bVgrMURHOE1HNjRyT3pneitVRS9DYVVFN0JiRU1qZnV1TzI3OTluTjZkRlU5a0xiTkpZalVJaGtIUHRQRWRYdjRKdldDdjh3bHJoMjdRVm5uNTZiRll6QldsWHliK1ZSRjVLRWtXWnR3QUlhYUxHWmpKaEtYdjc3MjNJeENaSytPckQ4ZlQyZDlsSW13UzJzam0wSUQyWlpadTNNNlJ6ZTlvMHEvS2lQSkNYOUNwVmdWbzlySElDREpMRTIxYXI5UGJpdDVQWS9KRzg3b1lHZWZEcHFnNnMzWEtMWTZmeXlVbytRMWF5ekxhN3B6ZFdVeW1pcldKU0R3M3lZRWhzSUF1ZkM4T2NsdzlJSk4wd3NYbFhMaG92WDJaOUVJK250dVl5V2ljQklxVGx5N3ZRazlzV2NtN1hjaTdjVEsxT3dLdGxWM1VZa1oyZ3pjQ21NbEpxRUFDd1NoQjQ3dXU5bVdHcjExL25tUm5OQVJnL1FzLzRFWHBLalNKbkVnekVuOHpqVUZ3dWNjZno4Tk9xNkI2dG8xZFhYd2IwQ1NBNlNvdTF1QVNMd1FBU0ZCYmJlR0xoRFN4V2ljR1B2djZiT2w4ZENxWHNwb3VTVElqSkluLzJIdG9BMUY0K1ZXUWxVY1JVbU9kaEtpNFlCQXdDWGdJbUFNbmxNdFUvNm00S2daK1ZTc0Y5NDdzUE1IcGtHSUxTY2JaWkZDVjcrQWxBdEZpd0dBeUlaVm5jVXFQSWpJVTNPUkF2VDZTK2pac2hLRnpLWEZlQlZaUTdiREVXWXpSazhxODVNNW5ZTDRiSlMxZnl3N21MZEp1K2lNQ0lqbFhxdUttVWFMMDBaRjIvd05rOUc3bVRmQllFSVI5SjZna2tPaUlBWUJxd1Vha1FoQ1d6ZzVqOWVDaEt0UnBCN1laQ3FheW9Ja3FJTmh1aXlZVE5hRVMwVkV6QTZWa1dwczIvd2RuTHBiKzV3M1ZoWUhRVWVZWEZuTGx5SGU4bTRmVDZ5OXNvbEZXRDNHNHFKVDdlOG53bVNSS25kNjdsNHVIdEFKZVJvME5tWjlQNkJJWEFKbEZDMHp2YWk2V3pnK2pVdXN6alVpZ1FKQkhKd1RrTXMwVmk3UmZadkw4eGsveENHNTI3OVdMMXh1MEVCRGF1S2V3Q2JDS2tsaVcxM24vOVdYWjlYcEh3OVd2YW1vN2pYa0RqVjdPTnlnUUFJRWtjV3JPSXRJc25BT1lBcTV6bEJiYUxFdGVCRFhGbml0b1BtWmxNcjA1ZWpJelZFdHZOaXpDOU81NGFCYUlJV1hrV0xsODNzZnZIQXI0OVlpQWp4NEpTcWVDcForY3liK0V5MU9xNkF5YXV3TmRmN21oNHpFaENPdy9DU3hkVzUvSnNoeURRZWZSVDVRUThUaTBFZ0x5eGlBWWVseVFXeDUwcGFoWjNwaUxQMFVpandHeVJzRmdyaG9KU3FXVDQ2QW44ZGU2cnRHMGZYVVdaMld4aTZTc3ZrSEx6R2pQL09vL1lRY1BxWjdRVGFJTmE0TjI0YWEweUdaZFA0ZGF5VFJVSHpqZTRPZDY2RUFxejBxSUJiVjJaSVJ1d0RubFAzaFVZaCt6UGh4YVhpbnBBRFhpSE5XM09yT2RmWnNDUUVRU0ZoRGxVOU9QQjcvbDhrK3l0SGYzeEVDTWVtc2hyeTFhaUQ3cWJvSTl6bE9abGNtelRNaks3RHFUUDlQbFZ5clM2WUFxejBnUWdwTDRISkNUa29PSUNZQmdRQmVpUW96dDBpTzdLSTA4ODdiVHpBQVVGOGltVlBpRk5DZkh5WnM4M1gvSmdyM1pzV0xNS204MzFORmhkc0pybENkaGlyRGtSSzkzc0xyK213VStJZE5FSGNXRGlkT1owN29HcHRJUTNGODVsektCdW5Ea1ozOUNtQUwvVEVSa1BsWW9YTy9mZzI3RlQ2ZG9rbUVzWHpqSmxWQ3duNHVzZHlMbG4rRjNQQ0xYeUMyQnhURC84MUI3WWJGYk9uajdSNERiOGJpZEVpaXhtM2ozNUM1c3Zuc01tU1hUcDNwdUpEei9SNEhiOExnUWNUTG5Pb3FOSFNDOHFSS3YxWWM3OEpUdzJjellLUmNXQXpNbk9aTXY2MVJpTnBVZ1NGQnJsNStkT3l0R3VPeGVPVXBSMXkya2I1bUxaQ1N5NGM1T0VBOXRvRXp2V0hzbXVqQVlqUUNqYlFxOVArQldEMllRZ0NJeWJNcDFYbHl4M3VGUGN2MmNuSHl4ZjZsUmZadElwTXBOTzFkbHVZZlp0enV4YWh5NjhEZnFXTlhLakRVZEF1NDdSS0pVcURHWVRMVnUxNFkzbEg5S2pkMytuOG1NblR5TWdzREVXcTRXL3o1NkJBcEgxU3lyVzgvbXIxbkE5TFoxZWo4eERWY2R1MDEzalRlT0lpa0NxSk5vM2IxS0RFUkRacGoxZmZYK1U5TFJVK2c4ZWpwdTdlNjN5SGg0YWhvd1lBOENDdWJOUUlUSnBjS3k5L0sxMWNtQXBySDB2M0QxZFMrWldDdHVuTnVnY0VOV3hDMUVkdTdoY3oxdnJTMDdtYlVwTkpqVHFtdCt4SzBpSzIwMUJSZ3JJQnpheUdveUE0cUpDU2txSzBUVnU0bkxkbm4wSHNIM3JCc2ErdElpeEEvcWdWQ2pzNmZPcngvZWpjcStiRkp2RlRNYlZjNlNjT3dxQ1lFV1M1cmxzaUFOMEI2U1JZeVpKVjdOc0RxL2tESXYweEt3WEpLVktKUUZTZE5jWUtlN3NUYWZ5anE3NGkzZWtGcEVkNnZ6UFFQMHVJUjE0c0x3RDkyMEUyR3cyTGw4NnorSDllOWl3WmhWK0hocDAzajZjT1JuUFM4OCt4b0kzVnRTcDQ0SFc3VkNyUGZBUDBMRjYrekZPL0xTUHJ6Yi9MNmZpRHRBNHNqTmVPdWUraDduRVFPcnB3eURuSVQ1Ri9sZEpFa2dIcUpRNHZXOEUvSFB4Mzlpd1pwWDkvdVBCSSttc0Q2TFA1K3M1ZHZRSHhnenVYcWVPZmdPSHNuNmJuR2hSdWJuVGMrQW9FcytmNEZUY0FRS2FSNkZ2NDF4SFVYWmFPUUhKd0R2TzVPNGJBWU9IUFVSV1JqckpTWmRJdXBUQXpxdVhTU2tzSU1kWWlyZldoNzc5aDlTcFk4VFl5ZmZMUER2dUd3RTkrdzZnWjk4QnBOeTR5dmloUGRseTZUeGJMcDBIWU1tUzVVeWRQdk91OUx0cHRIaG9uWWZhTEtYMWkwZmU5MVdnYVhnRXV3NmRZdHZtLzZQUVVNQ1E0V09JNmRQL0htZ1dFQVRudnB5YnhoczVnQ3ZWT0NKZkdYZExnQVFnaW1LdFFrRWhZYnc0ZjhsZE5sWFdvQ1MzVlZjY1VPTVRTSmVIWHpsM2F1dGJMOWNtZDdjRVhBT3NQeHpjcTN4dXhpU2hzak56TDJFVndWU1dnRHAzVW80Wk5BcXNPNVNtait4U2dJT3pnWlZ4dHdUa0FDK1ZsQlN2M1B2dFZ3MnpxUklFd21ORzRSTWNVYWVvMVd5cTg0M2NxLzhOK2dLMVdiUUNHTEI1MlFKYWgxZEVjbnZObUkzWllzMUdqak91QW5wRlQ1Nkh4bGZ2VkpHSDFoKzFWOTEvbzdPVUZuRjQ1ZE0ybThXMENqa2w1aEQzNnEzbEE3WDVwaGtBdnQ1ZXRBaVJqd2lWR0UySXNsZFdYRmEzQU1CTEY0YVhMdFNKbXZyRGFNakJaakVwcWYzRk5KZzdmQVNZT21yT0FrZGxoeHZJQm9kb0tBTFdBdjdJL3gwbzk0TkY0RGl3c0xMZ2ljM0xVTnhGRXJVY2xkUDJmeGE4aGt6S1BYSjZrSkJQcERuOS9nSCtDNFFMa0c0MnlOWFJBQUFBQUVsRlRrU3VRbUNDXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvZ29hbC01MGUwYzVkZDkyZTBhZmIwZDI5Zjc0OWUxN2JkN2M5NS5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFFQUFBQUJBQ0FZQUFBQ3FhWEhlQUFBQUJITkNTVlFJQ0FnSWZBaGtpQUFBQUFsd1NGbHpBQUFCdXdBQUFic0JPdXpqNGdBQUFCbDBSVmgwVTI5bWRIZGhjbVVBZDNkM0xtbHVhM05qWVhCbExtOXlaNXZ1UEJvQUFBMEdTVVJCVkhpYzVadDVkRlJWdHNaL08vTUVTVWhJZ0VBR0VnWUZ3aWdRQnNGQVVCQURSa0VSMnVleklRNGdPRDBSdSsyV3A3N1gwQTNTaUowR1JacEpVU0Uwa0VhZTBBaTBIUXlLRU1JUUVpU0VQQWhrZ0VEbThmUWZ0NnFvVk4xS0tpUXh1UHBiNjY2cWUrNCsrKzc5M1hQTzNYdWZLbEZLMFpZUUVVOWdFVEFHaUFTdUFEOEFLNVJTS2ExdWdGS3F6UTVnS1BBam9IU09HdUIvQWNmV3RFSGFhZ1NJaUE5d0N1Z0NFTlV2Z21GOXVwTmJVRVRTUDFNcExhODBpcjZ2bEpyZmFuYTBJUUdyZ1hpQVZhL080dG00KzB6WHNpNFhNTzJORHppZWNSRzAwVEJlS2JXL1ZleG9Rd0p5Z0s0UGpSN0E5aVV2V0YzUExieEJ2eG0vcHFpa0RDQlpLVFd5TmV4d2FBMmxqVUZFL0lHdUFERkQrK2pLZFBielpzN1VNY2JUQVNMaTJCcTJ0QWtCUURsUUI1alBkU3RFZEEwd2Z2WEFRRmhMbzAwSVVFcVZBcGtBVy9kL1QyMWRuYTdjeVI4dm1aK09FWkVIUldTc2lMaTJsQzF0TlFJQU5nSWNUYi9Bb2crMllya1duZnYvUE5idU9tVGV0QjVJQXI0R0xvcklZaEVKb0psb3kwWFFDZmdXR0F3UVBlUXU1azBiUjJjL0g1TFR6dkhPeHp1NVhseldtSm9pWUw1U2F1TnQyOUdXa2FDSWhLQTkxYjYyWkZ6YmVSTVJFMGZ2QngvSDJjT0xySU83eVRyMEpYbW5mekFYK3l2d2pGSXFyOGsyM0FHaHNCUHdQTEFZOERHL051akpCWXgrZFFtT0x0WlQvdnlCSlBhK0dVOXBmcTZ4cVFCNFhpbjFSWlB1MzlZRUFJaElLTEFOR0FUYVU3Ly9mOVlSRWZOd2cvMHFibHhqLzlzdmtKNzBpWG56WjhCY3BWU2hYZmR1YXdKRUpCYjRDK0FMRU5obk1KTlhmSTUzdCs1MjY4amNtOGkrM3o1TCtiVjhZOU1WSUY0cHRhdlIrOXNpUUVUYUE2OEFJOUd5dEN6Z083UXM3WnpkMXRtNnNUYjBmMmU0QndBRFpzNWp6T3ZMY0hSMmFiSys4bXY1N0h2ck9USy8ybWJldkI1dFd0aGNUWFVKRUpFeHdBWWdXS2RQR2ZDYVV1cURKbHQ1UzM4M3RLRWFCZURpMVo0Sjc2Nmw1LzJQM3E1S0U0NnMrUjNmTEY5azN2UTlFS3VVeXRXVHR5SkFSSUtBa3hnV3BCR1JFUXpvRWN6RnE0VjhsWEtLcXVvYW8raGtwZFRmbW1xZ2lFeENJOWNQSU9EdWdVeGU4UVUrd2VGTlZXV0ZpNGYvVHRKTGoxRlJaRFg5THdDRGxGTFhyZXpSSVdBSEVPdmdJR3hlL0F6VHh0MWp1bmJxL0NVZVdMQ00zTUlib00yejhJYUdsNFZlUitBZFlDRWdBUDFuUE1mWVJlL3BydklvUlhieVhrNTh0b2JLbTlmcE8yMDJ2UitjWVZQLzBYWExPZlNIMTFDMXRRQU1HcjJJNHFJTFpLWjlhaFRacXBTYTFpQUJCaU5MQUxjNVU4YVFzUEJKcXh0dDJadkNyTit1TVo2T1ZFb2wyK0c4Sy9BbGNCK0FpMmM3WXQ3K2tGNlRIck9TclNncTVHVGlPazVzV1UzUnhmcExUWStZT01hOWxZQ0gzNjBBc0thaW5LOStQZHYwSm5CeTlpQjY2am9pK2t5bnBycU1iUjhOcC9CcW1sSDhFYVZVb3JsT3kxQzROK0FHTUg3bzNick9qTCtuWHZZMnNFSFBBUkVSWURrRzV6djI3cy9NeEtOV3p1Y2VQOHllaFUreSt0NGdEaTM5TDNQbnk5RGU4V1R1VFdUOTVENWsvTjlXQUc1ZXptYkxFeU5OenJmekNTSHVsLzhrb3M5MEV4a1BQSmFJaTV1M1VkZnpsdlk1V1p4M01IN3g4L2JTZGNqUDI3UGVxWTdEenNBRHdDeGdITnBhNGdnUWR1OUVIbm8vRVNkWE53Q3F5MG80czJzenFaOG1rSitlYXFucU5QQm50UFhDQ2ZnQWVLejhlZ0ZKQzZZUkhoM0w1V1BKbEY4dkFDQW9kQ3ozVC84Q053Ly9la3E4TzBUUUsvSVhwQjFaQlJBdEltRktxU3hiQkJ3RHFnQ1h6SnlyakIzVTI0cUF6Sng2MFdhbW1lTWpERTVQMXlNR0lMRHZFQnlkWFNqSVNDUDEwd1RPN054RVZXbXh1VWdWa0FqOFdTbDEwS0w3NHlLU0NQd0o4UHR4LzA3VGhiNUQ1ekxxZ1JVNE9GaTZvNkZUdHhGR0FnUVlnZlpLQnl3SVVFcVZpTWczUVBTSE93N3luNU5INCtSWWY1WWtiS3RYbVNvWGtiZUJtVUNZK1FVM0x5ZUdUT3lLZzVNRDMyN1BwcXFpbG0vLzlEYkhOcjFQNWMwaVN4c3ZBR3VBdFEzRjgwcXB6MFhrSUxBYW1BTGc1dUhQaUppbE5wMDNFbUNHZW5icTlkb0pSUCtRbnMzVTExYnkzb3N6Nk5FdGtNSWJKZngrMDVlczJ2cDNjOW50NWllT1RnNzBHOXVKcUVkQ0dEZ2hDQmMzcllpVG4xM0NtV1ROTHpQbjY0RGRRQUt3UnltbFh4U3dnRkxxS2pCVlJGWUNMMVNVRlhBOCtROE1HZk1ibTMzYStZVGc3dG1SOHRKOHNJaHQ5RjZERG1oemI0Nnh6ZFBkdGVIS3pSQi9vdUpDR0JZYmpKZnZyU2l1dHFhT0hjdFBzZk9QcDQxTnA0QXphRk50czFJcTJ3NmZkV0Y0WTMwTmpIWjI4V0wyNjBXSWcrMnEyY1lWb1JRWFpRT3NWMG85Wld5M0dnR0dKeEV2SXFYQWk2QmZ0dW9jMFo2b3VCQ2lIZzZoWTdDbjFmVkxaMit3Wm40SzJTZE5zVWNXTU1iZUpLVXhLS1ZxUldRek1McTZxb1NpYTVuNCttdHJWc0dWVkM2YzNVbWZJYy9nN3Rsd3pVUjM0b2lJSDRiTXpCemVBVzRNbXhMTWlMaFFRaU45OVEyclUreFpjNVp0UzlLb3FUS042bVBBNHkzbHZCa09HNzljdTVwbUl1REFybmp5TGgyaHVxcUVxSmdsRFNxd0lrQkU3Z0oyQWVFQWJwNU9ESjdZbGFpNEVPNGVGWWlEbzloVWxwOWR3b2N2SFNFanhaU1YxYUlsUEl1VlV0Vk5jczArM0RSK3FhNHVOVFdXbDE0Rm9NencyUkRxRVdDWVYwbEFkNEFKYzNyeTZNSklYTndicjBnZjJQUWpXLzc3T0JXbHBsd2hBM2p5SjluZmF3WXNSOEFVRE00L3NyQWZEODNYandiTlVaUlh6c2V2Zk1lSi9hWmtTNkVGTFF2dHpSUGFFcFlFREFJUWdWSFR3M1RFNnlObDUwVTJMRHBLYVZHVnNTa0hlRm9wdGE5RnJXeEZXQklRQk5DaGl3ZStuZHh0ZHFvcXIyWHR5MGRJMlhuUnZIa2o4SUpTNmthTFc5bUtzQ1JBVytIRTlrSUhzUGZqREhQbkM5QXFzb2tOZExsallUdCtiQUM1bWFiRnR4RG9hNGpPZnBabzdzNVF5Yy9aZVdqYnJiRTdBcmMxQmZRZ0ltR0FOM0JhS1ZYVm1Id3o3dE1EZUFTdGNHUGFTTWxLL3l2RlJSY0FxS3pRRXE3Q0s4ZjU3c0JiOWRvczBWd0N2RVJrR1RBSnJab0VVQ1VpZTREbmxGS1htNm0vSGtSa0pscmE3R0Y1TFN0OUIxbnBPK3ExRlZ4SnBlQ0tWYUdsSHBvN0JmeUFsN25sUElBTEVBdWNGSkZoemRRUGdJaTRpTWdxWUJNNnpqY0hUUjRCaFpmS09KOTZyUlpEbVV2RWdiRGVVd2p0Rll1YmV3Y3VaQ1J4K3VoSGdQSUZOb2pJQUtWVStlMGFhTmhEK0FJWUJ1RHY3Y3JtaFVPWk1EaXdTWHBDZjdHYjdEenJ3TFJKQkJ6ODVEd2JmM1cwcXFhcXpnWEF1ME00MFZQL1F1ZmdVYmR1MUN1V2dDNzNjR0JYUEVCUHRMckN5aVpaYTRDSXhBQ2ZBUDRBUTN0MVlPdWJ3K25Xc2VVR2dTNEJ4WVVWSkR4M3VGNWI0ZVV5em4xZkFPQUNRdDk3bmlVcTV2YzR1MWpYQXU0ZVBJZlV3OHU1WHBBT1dnMnVTUVFZS3NtL1F0c3hkZ0I0L3FGdzNudTJQeTVPTGZ2aTBpV2dxcnpXTXN3MXdjdTdHL2ZGcnFWYmVFeURpdjA3RFRBUzBMOHBCb21JTDFwWS9TQ0FwNXNUcXhjTVltYTAzaTVkODZGTGdJT0RFKzA3MU4rcUVuRWdLQ3lhNGRIdm10ZlpiY0xCeWJUYll6dXBzSUNJREFLMllpaGM5dXJham0yL2lhSlBTSHQ3VlRRWnVnUjR0Zy9paVhucGRpbklQTG1GN0l5LzBiUGZFd1QzbUhqYmhvaklMNEZWR0RabUhoM2RsWTlmR1VJNzk4YVhxUTM3c25sNWRTb2w1Vm90SXNESGpVOWVIOHFvdnY2TjlHeEdISEE5L3pTSGRzL2pVdGJYQUJSZVRiMHRBa1RFRGExKzhEU0FrNk93ZEhZa0w4WDFzRnRIVWtvdWhUZHZ4VjQ1K1dXczM1ZDlXd1NjQnZEdGFMc1FVbDFaekhjSEYzTWlaU1YxdGJlcVhGV1ZOMjMyMFlPSXVBQlQwUmE3U0lBdWZ1NTg5c1l3dXd3M3g5TFovZWdYNmsxcFJRMEpTZWU1V1ZaTmRZMWRWWFlyQXBZTkgvZU9YNytoODEvVEU4NU0rNVRrcjE2bHROZ1U0TldpWllSMi8xeE5SQ0xRWG8xUG1mY2JHOW1STFc4TUk5RFh6VjVWSm9RR2V2TG16THNBMkhJZ2g1dGw5cGNmTFhlR2F1Y3U1b3lsa0txclpWL2lMREpQYmpGdlBnek1CUllBLzlIUVRjeWVkandRamJIdWdCYll6SjhTd1JzemV1UG8wSEFkb2pWZzF4cHc5c1JHYytmejBQYjQxeXVsbERSU1BFRjd5amxZakpMNytuY2tmbEozSGg0WmhLdHoyeVdsbGxYaGdWN3RnaFlOajFsQ3o4aVpwdllyT2FhZkFPUUR2WlJTK3FrVlVGdFR3YmxUbjVPYi9ROWprN3Zob0tPM0swOU5DR1hPeERCNkJPbnZQdi9Vc0J3QkQ1Y1VYK3A1NnVqcWVnVFUxcHBXMkRKYnp0ZFVsL0hObmhjNW03cUJ5dkpidjBRUmdlZ0JBY1JQNnM3VUVWMWFQSkt6UklDUEs5bDVaUVQ0MkxlV1dCS3dxbHY0K1A1UjQ1ZkdOdlhHNWFYNW5QajJqNmJ6UUY4M25vb0pZYzZrTU1JNy8zUlBlL1dDd1d4UHZzUzgyQWk3NUMwWHdieTVpOW1PbHM0MkdTSXdmbUFnOFpQQ21CTFZCZWRXZnRwNkdCamh3OEFJbjhZRkRXaXhpcEMvdHl0SFZrWVQxc2s2T2JxVFVlOFJpY2pZRDk5dHQreDQ4ckltSy9KMGRid2puRisyTFlQZ1diczVjQ0svY1dHc0swS3pxcXRMT3B6NlBxSGxMZnVKc1B2SUZYTHl5L2hIV29GZDhwWlR3QW1ncnE1R1IvVG5nWFd2REdIZnNUeW0zMnZmUDJ4YWJBMjRVeEFjNE1IVDk0ZmFMZjl2dnkvd2IwK0E3aFNvckNneWJTaUF0c0hRR0lwS3EzbHI0K2xHNWRvS1JhVTJNa1NMUHpOL2hQNGZtWTNIT1owL1FEZlc1MDQ3UGpLMzMzSUtiRUpMZVBSUWlmYWJQa3MwMU9kT1F6NmF2U2I4Qzk3TGJwM1BRbStHQUFBQUFFbEZUa1N1UW1DQ1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRUFBQUFCQUNBWUFBQUNxYVhIZUFBQUFCSE5DU1ZRSUNBZ0lmQWhraUFBQUFBbHdTRmx6QUFBQjJBQUFBZGdCK2x5bWNnQUFBQmwwUlZoMFUyOW1kSGRoY21VQWQzZDNMbWx1YTNOallYQmxMbTl5WjV2dVBCb0FBQkh5U1VSQlZIaWM3WnQ3WEpUVjFzZS93ekRBTU53RnZDQWdLSG9zZlVORjhocW9hSnFnMkVXenpGdG1pVXAxOGh4VE81WldhbVd2ZWZla3I3ZnNJdDBvc1V4QnZGUVdVV0FxMUVGUkxwYUpjcjhJeU96M2p6M1B3TUFNekpEVlArZjMrVHlmZVdidnRkZmVhKzI5MTE1NzdmM0FmOUV1T0FCdkFNWEFkV0NkSWUzUGdodXdFYmhvZURZYTB2NDA3QVJFczJmbm4xUzNEL0NqbWZxemdjNS9SZ05tQUVLbjBZaXY1andndnB6emdOQnBORW9qWnZ6QmRmc0Nad0RoSHhnazN0aTZXNnpic2t2NEJ3WXA5Wjh4MENqd1JIYk1OZVJJV1Fxb216SzBzN0VCUFZXd0NXQnpUQ1JEQWpvek5LQXoyMk5IQWFDQ0xjQnR0c3ZWUHVoY1hQSHJHc0R5bDliaUh4Z0UwQWRJUVNyQkZ6Z0J6QUk2QU4yQWw0SEZUWG5Zb2dBdGtDREFaVmEvMjVnUjJ0dVlNYlZ2VDJiMjY0MEFaeUFCK2Z0SDRDcHdMMUJWa0hlUmxjOHRvcXlzRkhkM0QzTktTREc4bjBVS0gyM2dNYWNwUTVVTmxlOENadDd1MjRHMHg2ZmdyTEUzeWF5cHY4bmc3UW1jdm5KTm9aMXRxM1J0b0Rld0VIZ0VjRkVTL1FPRFdQN1NXdHpkUFNncksyWGxjNHNveUx1b1pKOEZSaUVWQjNLYVFCTzVyUjBCVTRHWk9vMkdoQ25qV2dnUG9OWFlrekRsSGx3ZE5DQ0gzYTJ3QjNaQURIQVlPQWZNVTZsVUx1R0RockRxMVhWMDd4RkNLeVBCS2xnekFucXE0SHNCTHJ2dkhXMHk5TTFoZDBZMnN6NCtnZ3FxQlF3RXN0cmc3NHZzMldnZ0JOQ1pJOUk2T3pNK2VpS1RwMDRqT0xnSEFNWEYxNW4zMkF3dW5NOXBiU1EwSFFVdFJrQmJDdEFDcDRBN21tZUlsZkVtLzFYTE41Z3JmdzRJQjZvdDhMOGZhYVZkVzIyRVZzdmIreE1KQ096V0lzOUdKZnltTkpmbUx4YXdDNWhwTHNOS0JRRHNSazZKNXJnZmFUQlY0U0UrVEF3UEpLU3pPMDZheGxXcXJMcU81OTVKSjYrb2t1RHVJV3pic1FjdnJ3NHRHTm1naEQ1S2MybitZZ01FdEtvQWEzajZBdWNCMSttUklkdy8yUEtjdmNWS2FORkdXLzJBVzRXRmdHdDRpRStyd2dPNE96dncwa05oQlBxNGtIc2hoeWZtektDNCtIb0xPaSt2RG16ZHZzZG13L2hYS1NBR1lHSjRvRlhFdDBJSmk1NTl3U3p2djBvQndRQWhuZHl0THZCN2xXQUo3YkVCdHdKRmdQZWFSOEs1cmF1SFRRV3R0UWxIRG4vT2tuODhCV0FjL2szc3dPOHlncmNDcndHTHJDRjAwcWdKNmVKT2JIZ2dBM3Y0QU5ZcFlmNFRzL24yMUZjQVZiVDBMWDZYRVF4RmJqSnFhZHlLMWdMSERYbldZQW53cWpXRU4rb2JPSk5Yekl2dlo3RHYrSG1nN2Vsd01mY0NhZDk4RFZBSjlFZjZJMmZOOGJkMUJIZ0FPWUMzaGZ4clNHL084cVF6aFFBb3pVeXlTSENscUpqM2tvN3k4cFo5MU5mZjVGOFA5R3R6Skt4NStRVStTSGdYWUNzUVIrTVd1WVVqMU5ZSUdJUGNQc1lBOXNEVGdQZGRvYzZVSmZkQ25PcU5PTldic3VSZURMdkRHYVJpL202Z25XQW9POFpLWlpoRkp4OHZucHAxUDB2blBRekFKMmw1eGp4ekl5RS83eElIa3o0QnFkeU5CdEtyTkc2SVRHQnBCRGdBYndHVG02VFZBUTRxRlJ6ZEZFaGtmOU1kNzlIMEtxTGk4eEhTMjY0SE5FMnlFNUM3dUxwbWRldFZLaFVsR1Fjc3lXL0VsYUppL2paNk9sb0hlL1kvTTlJa3IrbEkwR3ExMU5UVUFCeWhwZkt0MmcwNkFPOERrejFkMWNUZDU4bnR3WTRBRGgyOTdObTVyRXNMNFFGR2h1bllzYlF6SGIzc0FUUjlnaDJKdTg4VER4YzFTRVcrajJuY01CQmtEMXNEaGE2bTdtYUxQSGRuQjFZOE9FRG1TK0doc2ZkYlJjdDlyZXo1Q1IzYzFTUnZEQ0EweEFtQWltbzlPaWM3N0ZxWk5MT2pQWmdkN1VGRnRSNVhaMG40MkVRUG9oYm1jNzJzWVlLQjl4UURlVHpBMEFGOXpETnJCYTk4ZkpxSDcrcEIxdzZOeGwxdFp6S1lMd0FIcmVIVmZBcmNEUnp5ZEZWemRIT2o4RTF4SksyS2hKUnlUbVpXVTFna2U4UGYxNTdob2M1TUh1VkcxTUNXdTluTW5CdU1pTXVudExJQllEUlFEbnl0dHJOVEgzOXZQWDE2V3JkLzl4dHlQMVhWTndCd2NkS0lWNmFIcS93TlNzZ3FMT1hadDlKQUd1bkZ3TWRtV0xRNUJlNEFlR2lNV3d2aC81TmZSOFM4UE1ZOG1jK09UMHY1T2IrT3FobzlWVFY2ZnNxclkvc25wWXlPenljeUxvK2NnanFUc3FFaFRrd2RZNHhhaHdLckFmWENHZmRhTFR6QTVhOC9JT2ZvUGlaRURhWHlScjNxcldNNXhyenN3aExsOWJnRjRjMml1UUt5QUk1bm1HN2ZUMlJXTTJqT0pVNWtWdVByNWN5SytDRjgvL0hEbFAwd243SWY1cFArMFVPc2lCK0NqNWVXNHhtUzltU21LWThtUExPQlFRQUxwayt5dHAxRytIaDVzSGJKUEFET0ZSaUY1bVRXRmVYMWN3dEZCelI1NzYrOE5GZkFJYUQrYkc0dDFUZjBnT3o1Mkg4V1VsTFJ3SDEzaC9EejRaa3NteGZPSFgvelFhZlZvTk5xQ08zdHk3SjU0Zno4eFN3bWplNUJjWGtEc1lzTE9WOG9SMEpGdFo2c2k3VWdWNEV2Z0VLQXZSOGRwa0d2dDFrSmxkWFMwTm1yWmZOUFh5b205N2NLa0ljMDVoVGdBalIxTnBJd2VJZE5GZUFCTEFjMEhiM3MwVG9hak5qcVg0M0N2N2R1UEs0NkI1SlNjeGsxNHdQYysyL0d2Zjltb21aK3lNRmpGM0Z6Y1dEL0crT05TcGk3NWxjQWRFNTIrSHJhZzF3Ri9vVWh0TDV5NHg3Q1k1K3dXbkFoQk45a1p2SG9ZdWxFRHV6dXpjMEdQYnVPL3F5UXJBZHF6QlNkQlhRSzY5dVJzTDRkUVI2Z21BUnBRcEZlbkZDcEVEdVhkUmJpVkc5eGVIMkFBSVN2bDdNb1NZOFRON09mRXMvT0hkajhSTWI0TEgwaVhOek1ma3BjVDVzbmZEeTFBaERKR3dPRU9OVmI3RmphV2FoVVJ0cXJ3QXRLdWRMTUpLc2V2MDdleHJyOE91akUzdmhJRVJNV29LVGxZamtjZnhRUTcvenZQZUx0MThjcDlDblFPQUkyQUIyRzNlRk15c1pBWmtYTEhWcENTamtBODZlRkdudCt6WnZmZ1J6S2l3RS93L01zVUxkcVd4b0hqMTNFM2RXUnVHbWhKandlamZFZ2VVTUF3ME9kUVI1dmpVQnVWTGhTVkd5aDNhYTRMRVB1VEJrYXpOcnBkM0lvbzRBRDZmbEtlNlpqT2ZiWUgyQm8veTRNRytCbmtxWW9JQnpnNE92K2pCalFxRVRGa01XTWtKWjYzZTRmbEt6bHlNM01MNGJuRmVCNWdEZjIvR0JTNWtRVGd6b3lURWZTV24vbDc1MUFHc0M3QjFLc1VvQ0NTWGQyNDgwalAvSE95UXNBRGNqRGppOWJLVklGY0ttd25JdUZaU1pwaWlQa0NPQ21NN1dKbHczcmZIQ0FIQkhmbjFYMkV1dzFVOGtlWUhYNkdVblQzVkNtOEtxcDU5YWtEa2RnQlRCaTFkYTNBWmdhTThvcXp6RHV6YThvcnF3RjJlT3pnZjF0Rk5rTFBCc3hMYUY1bWxsUHNBV0VFTTJUek8waDdBQlVLcVdNSWJIMTdkWnhZRmw5L2MyWFZtellvMXF4WVk5Wm91YTdSWVB3YVVqaHo3VmFnOFR6aHQvcHlQbS9GMm1EakZPZ0ZxQzh5blJKOHZPUitza3RrTU1tckc4bkpXdTZtVXFtQXd6bzB4R0FDL21sQmg0YUU2S3lTbU1kdFliZlZVZ1AxUEtldUNVZUFRWmpuZkFnYmNRU3BMM3Fpandscm9OR0JYd0xFTDJvZ0tQcFZjWlNkL1dUOXVCQWFpNEFUODgwK2c4cmtJYXZpNEhwRWd3YVZXaVVNbmVGTnRxVTVPK3FHUDlNdnZMMzJ5WU5QSUloVUFxeXg1cytackFQc04yQk1BTkZBZkZBMGNuTWFxTGk4OW1aSkh0djhpanB2bTUrSzVQeXlqckdSd2F4OUlsd2tPdjVhdUF5MHFsWkJUZ3NteGZPUFJGQmxGWFVzdVh0MHdZZTh0Qm54NmZTVmY3cXh4cVFNVUhUZzRXL0NJb0NUaU1qT1N1RmdLVmJpeEFDb2dicWlPam5URkZKRFk4dVBZeGVMMWo1NUJBKzJUcVJFWVA4Y1hIVzRPS3NZY1FnZno3ZE5wRVY4VVBRNndXemx4em1Xa2tOSThOMGpBelRvZGZEc20xRlNwMHJEWFdkQnNLUTgvTUw1RUVKQUQvbEdrY0pGdEorQmo0d2xMMzk5eWlndVRHelJ5NFBEbFdwdlhCMnNpT25vSTVCY3k1UlhON0FwTkU5MlBIeWFOeGRIYzB5SzZ1bzVkR2xSMGhNUGs4SE56WGY3dXhHZHo4SEttdjB1STc4R2VTOGN3RW1JYWRRUDNOOG5MV09yRjB5ajRjbVJBSHd6cWZKTEZxOWplcWFHNWJrK0E2NUxIOWdrL1MwVkVBMGNLQlBzQ05uM2c0MkpwN01yQ1oyY1NIRjVRMTRlMnFaUHkyVTZNZ2dRcnA1SW9UZ2ZGNHBTY2N1c25sZkp0ZEthdWpncGlieDFhNUttQXlBUGcvbmNpNjNGbVR2OVFKdzhuS242NGh3c0xQai9QdGY0QnNSaHNiZGxjdWZwZ0tZS0FEQWI4SUk2c3NxdUhvOG5SNFAzQTE2UFlXcGFkd29OcTd0aDVBeFFKTnpNRnZ3VDBERTNlY3B4S25lSmsvTys5M0ZpQUhPRnQxZzVSa1pwaFBuUCtqZW92eUMrejJOTkZwdlR6RncyZU5pYXVaSFlscldBVEhoNERZQkNFZHZUekUyNDBQUmQrVkNvZFk2R3VuVlRvNmk3NG9GWW16R2g4TFJXL0taY0hDYm1KWjFRRXpOK0ZBTVhEWlhPSFh3VU9pTGtNZnlWcUg1S3AwSjhPN2hjakp6VElkYmo2NE9ITjBVU1BMR0FPYkdldEM3bXlNdVdqdGN0SGJjRnVUSTQ3R2VwR3dNSUdWakFOMzlURy9NZlhPMmhwMUpzcGY4SWdZeVBuRWp2UjZPUmkwdlUrQVc1SWZXeDR2YWF5VlVYZm9GbjZIOWNPcllHSGgyNnVTTno3RCtWRjI2VE8yMUVyUStYcmdGU1pkVzdlaEFyNGRqaVA1a0UxMkdEd0R3UmtVcWNKYzFDakRuME93SEpudTVxVVhLcGdDVkVoZ3ByOUxqb20wOUpBYWcxMFBWamNhUVdHYk9EU1VrUnZkSlVReDZNUjZWWGN0cXYxejBHcGMrTzBGSTNJUDgrc1ZYVkY0b3dDTkVuaDJXNXVUaDBpT0F6bU9Ha0xQbFBicmRjeGZEMXY2akJRK2hGNXg2YmoyNWlTa2dRK0FEa0N1VlRRcFFncUlUUEYzVlRCM2p4dkdNYXM3bDF1THJhYy9xT0I5bVI1cy96dHJ4YVNuTHRoVnh0ZVFtdHdVNUV0bmZtWGNQbDFOUzBVRFhrWGNTc1g0cEtyVjVEZVlrSE9MYkZ6WWIvM3VFQkJLMTYyVUFrbWN0b3pTbk1SeCs1d3Z6Q1prODFpd2YwYURuZVB3cUNsTy9CWG1BRTBsaktNd3FCU2hLc0JnV1Q5NFF3TWd3MDloZlNub1ZVUXZ6VFdpVlAxb2ZUNklUTitIb0tmMEtvUmZrN1ArY25JUkRsRjhzcEtHdTNsTDdXb1hhUVlOYlVGZENwb3dsWlBJNDQ4aTZVVnpHd2RpRjFGd3JBYm5pSkZya1lTRzlBYm1rZkkxME45Y2ovVzRWRUpIN1N6MzNSYnJoNUNBckxLdlVNM2ZORmZKL3F3ZnBKWTRGdmtjZWpqZ01YUFk0UHYxNkc0VS8rZmRYeU5yMUVUZXVseUlhMnUvUWlRWTlONjZYY3ZsNE91VVhDZ2dZTXhTVlNvVzkxZ2tIVngyRnFXa2c3eTMrMnhLUFczMDBkaFhvQ1pRaEhaU3p6aDI5aVQyOEhUdkR6YkwvdlBzWmFTOXV4ZFhOamNWTGxqTThZZ1E2bllzRmRxMmpxcXFTRThkU2VYWE5TaXJLeXdsL1BvNmVVOFlCMEZCWFQrS1lPZFJjTFFacEMzNHd4OFBXdzlGU1pGajdCS2FuUEhYSW5kMW9wUEFnTHpRU2NQZFFvL0FnNXpyQTRpWExHWHRQVEx1RkI5RHBYQmczUG9aL1BydGM4dDUveUppbmR0QVFPR2FvOGplNlpXbUo5cHdPWndJUnlQMjh5dkE0SW8zTmowM29vZ0E2RHphOVlGWitTUnJsNFJFakxGWlFYMS9QaGpkZVkreW9ZWXlMR3M3RzlXdXByN2RzSjRaSFJFcmVGd3ROMGpzTk5oNVdSMW9xYTFVOG9KM29DZUFlN0crU3FIWjBvS0cyanJxNk9uUm1id1RDdGkzcjJidHJoL0gvbnAzYlVhRml3WlBQbUtWWGxLTjJOUFUvM0hzWTYvYkRBdHFqQUd0dmlYa0JPUGw0QXJEdnRoZ1Qrb0w4UER3OXpVZC9QanZ3Q1FDVDNrNUdDRUhpdE5FY1BKQm9VUUVGZVhLSnJDdXZOTll6TGVzQVdtOVBoYVNMSldIK3lEdEMwcFhVbTErQ0N3dGE3dmlhUXdoQjUvNkRXWlJWeHVmSkp5M1NGUlRrbVUxdnNzSllYR3IrU0FWY0FMaCtWaDVmVGNzNndMU3NBL1NkOXlBQStYbVhMQlljSHhNTFFPSzAwZWhvWU5qTjF1OWJGT1JMQmZTZDk2Q3hIb0RyNTR3NzdQUG1TLzZ4Q2tnRXlONWo2b080QnNpUE92THp6ZmNhd09OeDhjeWNQUmNmSDE4ZXJMOUNWMkZ4RzJ6Q1MrR3RJSHVYOFlqUTRnV0V0aFN3aTVZN3ZyYWcwSzBBS0V4TjQreS9HNk94U2lNTExReGJBSTFHdzRJbm4ybDEyRGVGd3F1cEFzNXMyOC9sRStrZ2wrVk5sc3EyWlFRWElNOE0ydnNWeUdXZ1UrYjZ0OVJGcDMraTk0eFlYTHJJNnpvRitXM2JBR3VoOE5KNmUzTGxtOU5rNzA1VWhOY2o3enBmczFUV0drL3dkbVFBVTdkcjBtaG05clBwdW53NGNqbjhQK1QzT3lZNGN1eVV4WlhBV3BTVUZETTZjckM1ckRMaytWK3JSK1hXMklCenlKSEFncVJqWkxWeWpKVlZWTXlDcEdNQUNKaHZLUHN4VWdrcmdBeWdRcUV2YU1VT1dJdG1QQ3FRTHU5S29BZFczQlA0cXo2WmVSZDQwSWE2cmNGN3lDOWJiSUl0cThBQzROeTVxOWVabjVUYUlqTXVLVlVSL2h6eU5uaHJ5R2tqdnoxb0YwOWJQTUVxWkh3Z2JYZEd0aTR5cUt2eDg1azltZG5zenNoVzV2MWtBMjFyK0I3QXp6K0F0UnQyb0ZaYjJwVzNqb2FHbXl4YStCaVhDL01CMHR2RHc5YWFpNUNXUGZiSStRSWlnN3FTWDFiSjFJUkQxTXViSG84QnlWYnd1UVE4VkZGZTVwbWZsMHR3Y0FndXJxNm9WTmJOU0NFRXYvNVN5SnViMXZGVDlsbVFUdGZUeURqR240SmI4ZW5zL3lBdGRadVI1amFlVXFEdjc1S21IWEJBZmpCOUhibkd2azc3UHA3dWdqU1l2Mkc3NEw4aGwxZUxHNTMvd2dyOFB4WS9ZMDUycjZBV0FBQUFBRWxGVGtTdVFtQ0NcIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUVBQUFBQkFDQVlBQUFDcWFYSGVBQUFBQkhOQ1NWUUlDQWdJZkFoa2lBQUFBQWx3U0ZsekFBQUIyQUFBQWRnQitseW1jZ0FBQUJsMFJWaDBVMjltZEhkaGNtVUFkM2QzTG1sdWEzTmpZWEJsTG05eVo1dnVQQm9BQUEwSFNVUkJWSGljNVp0M2RGVFZGc1ovTTVrMFFoSUlLUkJJUWlUQkJCQ1VVS0lnZFZGOFFXazJRQkZRbjJYNVVDelBzbVRwVTdBdnk4UDZiQ0JGUlFTV1VnUjhvU2txblVnTFJSSUNDU1FRUWtLU1NhYWM5OGVaYzNObk1zbE1paE5jNzF2cnJuWFB2ZWZlMmQ4K2U1K3o5ejUzb0dVUUFqd0o3QVVxZ0F2QWVtQThZR2dobVh5R0JPQWdJT280RmdFbVh3bmo1NnNmY3NBZjJBajBBRWk5SXBiYlJxV1RtaGhMM3RsaUtxdXFBWG9DUWNDUFBwYk5KNWlCWTZUdm5UaFVWTzFlSU94Wmk0UTlhNUhJejN4UFhKVWNwNnlnQ3Vqa0M0R012dmdSSGNZRHRJOE01NTJucHVKdnFqSEE5cEhodlBmc05OVU1BREo4SVpDdkZSQVBrTll0a2FCQS8xbzMwM3NtNlpXUzZBdUJmSzJBQW9EOHdoSzNOd3VMUzdGWWJhcFo1Z3VCZksyQW5RQjdzM05adiszM1dqZGYrMnlWdnJuWlJ6TDVGREhBSlVDMGJoVWtYbjlzc3RpLzRsV3hiZEh6WXNiNHdmcWxjR09MU3ZrbllRandGWEtHcnlzR0VNQkpJS2xsUlB4ejRBZThBdGlwbjdnZFdJNE1sTnloSjdBQ3lBRitCbTc5TTRWdUxoaUJMMUFrZzRJRlk2Y0tIcGtybVBxSW9FT2NYZ0VuZ0t2Y3ZNTUVQQVdZcWEyd3UzM0FvZEV3QUIrZ0JPN2NWYkRta0dCbmFjMnhyVkF3K2hZOUtUUHdOVEFWdUFWNERuM1k3QjhneUpna2lHeXYrcC9tTXMwZFFvR2xLTUdOUnNHeW5jN2sxYkc5UkREdFVkbW5QaGRKN2lGWXVFVSs4OUR6K250aHZpRFVrT1NrSDNBSXZmRHB3OXlUMXg5ZmJCS01tQ0FJYnVWTVBENUp1c3l2NTJXL0w3Y0oybmRTOTAvUlJBdndST3hxNENPZ0QzQU1lQmo0b1k2K1hZQVhnZHRyQ1pVKzNMTWszWHJEeS9QQmFvSDhrMkN1Z0tnTzBEWlMzcmRhNEl1MzRjTzVVRjJsbnBxRFZFU2pVWi8yMG9GMU9KdVlEYmdEdVp5QmpOa25BZE9CUWRyN2dvTGhpbFE0dUZ2Mldyd1ZydXpWT0FtTGkrQ0hiMkRKdTNEbWxMcHFBV1lEcnpidXBUV295d0xTa1NNZFpqUVl1RzlnRjc3NExZZnlhcXNmTWw4SHlBTFdvRisyREFZWWRUUE1mQUhlbVMwVkVCNEJ5ZTRtZHgwTzdJTHZGa0hyTUFockErVmxjTzRNSE5vTHh3NkFjQnJrUThDZHdLN0dFUFlHNlVBSklJd0dnL2gwU2o4aDV0MG1OajA4VElRRW1KVHZXWUY4bEo5R3h3cG1QQzVZdmtmNjZZNkxnb2hvZVcvNE9NLytuNUJjL3dRb2p3UEFOS1RWTlJ0Y0xhQS9jdVREalFZREgwL3V5NHgwbVpRTlRvcGk5UU9EeVBoZ2k3S0VEZ0Q4L1dtNDU1OWdkR1J4UjdMZzB6ZWd1RkMyK3c2cVg0SkRleUgzcU92VktxQUlPQTVrSW9zanY5QkVmM2NIdlFMNkkzMCtITUJvZ0pBQTU0S1JpeExreGRaaFVIWVJOcStHdFV0aDV4Wm5rKzA3dUg0SjFuMmp6dXpJZFBraU1sL3dDZFFrcUpFM0dnd0Vtb3hVV215WWpBWVczWlhPK0Y2ZFdMbzdqL1RPN1VpS2FzM21ZMFhPU3FnTDBSMWh6YUc2Nzl2dE1LWWJGT2FEVElDR05RZXBodUlxZEQ3LzJaUitZdVBNb1pxL200d0drUmJYVmdDaVRiQy8yUEhFQ0hkemdqck9BbThqWjJrWnRkWG4reCt0MWo5N2IwdVFOd0x6Y0l6OEo1UDdNajA5a1NISjBheTYvM3BDQWt4WTdZSmRlUmNBS0ttME1PTGRUZXpJTGRiY0lTVEFhUnA1SEZpQ2NpMlA1cjlNblZVRDN6WWpMNjloQUVxQjBEdjZKckJ3YXJyVHpSZldIdUM1TmZzQlNFMU41ZkRod3dnaGFCUHN6My8vTVpUZWNXMWQzY0dHTEdSSVUrNmVCaUgxUktyN3QwTkZPY0FlNU9wVDNjejhQTUlQR0FQRUhUeFRTa3BNR04wN2hHczNGMnpQWWUrcEVzTEN3c2pPemdaZzY5YXRtSzEyOGk5V01ybFBBcDBqUWhqUUpZcHY5dVJoc2RtTjZHdDVSUVZ3T3FmdXcySlJQVHNBazRGZmtRbU96MkFDWmdLYnJYWVJNbVhCTHdEYzJqc09nSzdSb1FDVWxwWXliZG8wTWpNekFSbnYzSHgxblBZUzVRNmozOStNMlNKcmVwM2J0NkpkbU9jbE8rZE1CZWRMcTBHRzB1dUJ3Y0MrNXFIbkZzRkFMNkFiOEpzSkdWR05BVmE1S3VIQjY1UDQ2S2ZqNUJTWHMyeVo1cStvbFVLUGRpRUIrQnNObUpFSzJ2RDZRSkk2dHZZb2pjMHUrT2o3RTh5Y3R3K2JYWVFqYzQ5MFQ4OTVpU0FrMlRUSDBRZEpYRTFjcDlSQ253TnNBMjZ4Q3dKV1pwMGlKU2FNM25GdHVmbWFUdVFXVjFCUVdrbDhSQWhtaTUwcXE1MlZXYWZwR2gxS2o5aHc5aGRjWk5pL04zS2hVcHIwb0o2UlBIWnJzbGNTR2cwRytxYTB4V0lWYk1rNkIzSkRaQVZ5Uldrb2tvRGJnUHVCZndGdkFmY2g5eGl1UWRZazlTTjN3VFVaR2dLc0FrSk1SZ09MNzdwV2N3ZUZUVWNMR2ZQaFZzcXJyZmdaRGJ5WWNSVnZiY3ltNkpLV29USC95VFR1R3VWYzJiTGFCSG1GRlZvb0Z4N2k3K1FpeDA1Zkl2bk85YW81QS9pOGdlUVRnV3prOWxzdFJBUUdrUllaUTFwa05POGQzRWVacFJyZ1c5ZFFlQk4xdUlPQ1dpS1ZFcDc1UHN2cEJhR3RUTnc4dUtQVE5hdE4wUC9CamV3K1dyTWZFR0F5c3VudFFWemJMUUtBa0NBblVRSzlaYTJEelhINEE4UzNEbVhTRlNta1JVYVRGaG5ERmFGeWNqOWZaZWFWZlR2VU03dmM3UXRzUWlxaDNHb1hURm53QzB0MzV6bDFHSkljelpzVHJuWXJ4YTFET3JtU1llR0drMDdrQWFxdGRySlAxdXg5N0RyaWRMOVdjdUFGVGdJVGtYa0VaeXNyR0JPZnlDMkpYVFh5QUx2T09YbVdXd1dBQnlYc0w3aklzNnVjTmphT3FaUHBvNTFOMzJLMU0yZmhZZFhNQTk1VWphNXhOWlBrdWgyYVlGWEk1YkF4K0FISGhrcVZ6VVptZmw2dER0NHFBT3BRZ3Byd2RENy9HTEtZeVpWeG9Rem8wYzdwSlF2V25lU1BnbkxWZkFuZDVKWWFYeE1rcmR1cFhmNEowQjRBUmdLcmdiL1ZJeXZJeWUxelIzOTZSVVR4VUxmYVZycXpSZ0VuZ1BPZXRzWTJvVlBDcFBtLzBPLzFEYTdrdCtMWTczY2QvV3FybmJtTHRkSFBCVDREVWdIYVJ3VFJObFRPVjM4VWxIUDBsSllBcnRPOUlnUDREa2wrSlk3ZFpUZFE1S2VDSlAvakRST0pDQXdDNE9leitSd3NPUS9Bcm5PRjZwbGQ2a0ZQVUVvb3RRdEJwUXgwN01DalNIT2VEbUR5TTNEbnlIaW5CejlmbTB2T21RclZuSXNNZFZNQlV1SkR0WDQ2ODRjYUJXUWc4d00xSWZvalMrYXVTbkJMUGpJb0dJQ1g5MjFuNEtxdjZiMXlNZk9QSGlEM1VtbURGYUNVMEJOWmhId1RHSWhjWS8yUk5VRkc5WTBodGwyUTlrQ1Z4YzVMaTdOVjh3UXczM0dlQXBEcVhnRUZ3Tzk2OG9GK2ZqeDNUVHJCZmlaM1N2QkkvcG1kUDB0NWJEYW1iOUdXV1hCczFEYWszSjJMTEVUcTRXOHdTQ1UrTks2TDA0MVAxK1J3c2xBYi9UbklGRGtXUjhGRldZREZhaWR6VDVIcXR4NXA3aHI1YjRmZlNFWmNJdGZGeERKdXczZFUycXhLQ1pPQW03d2hEeFE2ZmxkWmt3QjJROU8zeHl2V3ZucjlxNysrTjVUUi9XSzBpK1pxR3k4djBVYi9PSEo3REJ5akQ1Q2FJQld3N1VBeFpSVmFZY1hQSFhtQWtSMFRXRG5pSnIwbExQT1MvQmxrZnFFdGtRNlppcHREQVl6cUUzVmp2NVMyVHRjK1hwM0RxYUpLMVp5RExLS0N3LzhCVXVLa0Fsejgvdzdja0Zkd1VRTGdGZm1od0dIa1NuSWpNdVIvV25Wb2lnSlNlbllKbTFOYVlYRktYQ3FyYkx4U00vcEhxU21qZzJQYk95VElSS2NvS2JDTEFuQWxmN2lrbU1lM2IrSEFCVG1MS3lXMENRaWtmMVI3YjhrcmJBQUdJSzBIYU5yM2VFdXlqcGRlODhxU0k3eDBUM2Z0NG45V25TRC92RmsxWDZSbTlGSG4xVlk3MlhsbG5MMVF4WjVqTlJHZ0svbmZMNXhqK0pwbEZKa3IrZnpJQVRiY01KSGU3YUlaMlRHQjgzYzhnTkZRazhwNFFkNHRHcjJ2WmpMeVZtQ0EzOE5menU1bnVQRmFXU0d2cUxMUlpjbzZ6aFNiUVNZbTNaSHh1Y0lBWk54UTYzZnJJNjhRRVJpa0tVR1B4cEtISnJpQVpjUEV6RXRyeG1ya0FUNzg3ZzlGSHVBRm5NbUQvTEJoTmk3MWZTL0lMd2RFY1pXWkVXdS9aZmQ1TFpocEVubG8waHdnWnVoYjVXWXJyMzExUkRVUElaY3FkNWlML09BQjhJcjhvOGdaL0NGY2xOQlU4bzNGOVFIK2ZyOHRmcWF2VldST0VPcDQ3YjRlK2hMMzdmVThuNEhqYTQ5QVB6K3hhdVE0SWU2ZUpjVGRzMFRXaER0RlZGQ3cvajJ6WEo1OUVNZW5OcTFNVGlYNUFuUkw3SitOWHdGeFhmZDJHdm15MVRlSnFEYUJTcGo5MUcxWlRTR3ZvQ21CWmlEZjBGV2dPM0lYaWVHOW83U0w3NjQ4VGxHSmxpRDl5eUdnSzV6Q1d3OW1Qd3U1d2VJTzd5T0p2NHMwKytFMHdld2Jxb0R4SUl1ZTB4eVpYMW1GbFRlKzF1b1hXYmpmNEtpVFBNQzlXemQ0UzE3aEEyQXRNcG9yOWRDM1hqUjBFb3dCR2Nna3hMUUM0SjNseDFSWkc5eVBmcjNrQWZwRXhaUWh3OVNaZUNhdmtFTVR5VVBENDRDN2dVOEF4ZzdvUUpmWTFzeGJjUnlMMVE3eTN4KzljVjdpUEpJSGNZcTROc21HNTU4Mzh4ZEFNSEtTYzkwVXJRYXVkZWxiNTRSM2V0SzlvbjlVZXpFK0lhazhiOWFzWUY4U2NFVmpJc0ZvcEptT1JXNDg3QVNlQUxibyt0UTc4aXR5anpIaHgrOUJ1a3M3NU81MGk2QXh1VUFoY2gvUGhFeGZxMXp1ZXpUN2pFNkpwNE5NcGsvTVZ1c1JXcEE4TkMwWnN1S2M2RUE5NUhNdmxiSzk2QXhqNDd1Y0R1Z2NrV1MyV2k4TG4yL09mMmQ1dGM0SG0wenpLaThUOHRCOGY1andPc2lwbEdaLzJhQTVGREFhV1dBSURERDZzWFJZaGtiK1VFa3hJOWN1MXdjNVR5RTNQaThiTlBWTDYxN0FielE5dkcweE5OVUNFbkZVV21OYnRkWUtGWDhWOHMwQnAvOEVwTFNKRU90R1QzRE42aDVwU1FGOUFRUHlTek4zbjdjKzJZSnkrUlR1bFBCL1ExN0JnTnd1SzBXV3IvNFMrQitITFJyRWtPWjNrZ0FBQUFCSlJVNUVya0pnZ2c9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2xvZ28tZGFyay0yYzk1Mzg3MGU0ZTc1NjJiMGRhMGUyZmZkMDA0OTgyMi5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvbG9nby0xYWYzYjM4NDI1N2Y4ZWI4YWM2MzYwY2Y2MTQ4ZjIyOC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvcGFydG5lci1jZGJjOWEwMDRiMTc4YjQ1Zjg4ZTU2YjJlZGEwYmUyMC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvcGF0dGVybkJHLWJhMWZmZDA0MzcwOGI0ZjJlNGViODNjMWJhNzZmYmFhLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9wYXltZW50LXBhdHRlcm4tZDA0ZDUxMDc2NWM5YzM3ODQ3ZTdjNzM0ZWQxOTNhNjgucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3BheW1lbnRUaHVtYi04OWFhOTY0MmU2YjM0ODQyNjUzZTJlODYxMTAzYzRiYS5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFEY0FBQUEzQ0FZQUFBQ28yOUpHQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQm1VU1VSQlZIZ0JyVnBaa0Z4bmRmN3UxdnM2dTBZem94NVpraVhMUm1NYnNEQzRHTmtVb1lwQXhwVlV3S0Vxd0VOQ1VVVmgrekY1c1Fqd2tFcXFMQ2VWNEtwVVNwZ1hUQktDQWpnMmNlR01TZkFDTWg1anliWnN5V290czI4OVBUTzkzM3Z6bmZOM3o5anhKbU5mNldwYXQrLzg5ei9iZDc1enpyWHdQaC9INy9wU0xwTDJKbUx4N0tGTU5sTkk1SEpqMFhRdVp6bE9ydFdzNlQyZUV5MUZrdGxpNFB1bGFyMDVOZm1MeHgrdk5scFRSNC9kWDhUN2VGaDRINDd4c2JIY05idjc3aHp1em8vSFlzNTRQaDJIWjd0SUpWUElEKzVFcHFjZlRiK0Y2bVlaMHhjdjRmTHNFdFkyNjZqVVcxZ3VsNUhQNWRGcTF0SGIwejJWU0tVZTZCbktuUGp5VjQ4VzhSNlA5eVRjME1EQWVDb1p1eWZpdU9OUngwRnZQb1dobmh3Sy9WMUl1aUY2Y3puczJIMFZ1b1lMcUcydTQrWFRwL0RMazZld1ZtMWlvOVpFcmRGRUlobkg2TWdnZHU4YVJ1R3F2YkJkRDE0a2hwN3UvSW0rb1IzM0RlKzlmaEsvNCtIaWR6Z0tPM2VPZWE1OUwzVXpIZ1lobWtHTG1nOVFtVi9GM0hJWmkwdGw3T3BMSWhtSndxYjZiRGVDUkNZUEo1WkNiM2NldVZhRDEyMWtNeW4wOVdhUXBZQTl3OFBvR1JsQ05qOEVONWJHK25wNW9sbjNKNVptems4MjY3VXY3eGc5VU1TN1BONlZjSVZDSWVjRi9qMzhlSmRIRGVmU0thU2lycHEvMWZSUmIvRnMxREc5dWdLRURZeDBaMkZaQWVLcERLS3BITVlTYVF3TmQrT1ZaNS9ESzhVWm5GdGF3TVdpaS82K0xLN21HbDBEdTdpV0w2c2gwNVZIdlY1SDZBZmpUaVJ5Zm5INjNOSGVuVmQ5NDkzczE3N1NHd3NEQTRXd1dYK1d1NzNMb3RaOTMwZVRGckFzbndCaHdYRnNSRDBYSGsrZjFsemRxS0ZNMTdNaUhpS0pCS0tNdjJReWdkbUxsL0hNMUFzNFhaeEhjV0VUNXhjcldLaGFLRlZkekN5V2NQSGlSVFJxbXdoYmRjUmpjY0NoOGl5cUx3eU9Qdm56SDU4L2ZIaXNjS1Y3dmlMaHJpb1VKcmhKQ21ZWHdqRGtsUkFobjFldU5MQ3kyY0phZzlmaVNUUjRzUlZZakNVZm04MFdmTnRHaEVKNVVXN1NwdHVXVjNIbStaY3hWNnBpb3dHc01QWmVYVmpHSTc5OEh2L3cvWWZ4NEU4Zng4enlKcGJtRjlDcVZ4RDREWVMyMldJUStMRENzTkNiemo5NzQ5all4SlhzK3gyRkd4dTc4VTdIY1g0VWhsYU9wMnJSa2dmeVo2Vld3L3hLQ2E5T3orSlZJdURzOGhyV0tsVUtia05VSUdBUlRhWDAvcENXOWhtYjZWd2FrVmdVcFVvTkVRS0h5M2hzdEZvWUdkMkhjcm1PYjM3N2IvSGpoeDlHWlgyWm5yMUpnWnFpU2xXb3k4ZEdJMjR1OUJzL3V1V2pIN25ybmZiK3RqRTM5cUdQM09uWHE4ZGFmTGg0aHFVUG9VYUlFazFlYzdocG15Z1pNRFpjK2M2akVMenV1UzdpVVEvWmJJcmFEeERRMm5ZWUlCcExZUGZlM1ZncHJUT3lJb3dzQzkycEtPL3ZSMkZIRmdjT0hNRFE1ejZObWNzWHNIVHBBcEx4Qkd3dkJvdXVTUTFCNHR4MUhiV2lZem4zM25ycnAvSFlZdzhkZTlmQzNYakxiUk5odlg2c1JZMVQ1VlFjTmNlNENyaEp5L0lvbUVQRUN4SHhQSFNuazBnVFhCZ1hxRlpyOEJtTDJWaUV3cVdSVEdXSmZ0d2cxNG5HVStndjdFSHloWmZRbjRsaG8yN2lhblRYRUs0NnNBZTdEdXdsV3ZaZy85VUYySDZkYnVXcGgwQThKWFJvYVErcGVCUnhQak1lajZQaFJPOGR2MjJpT1BuekV5ZmVUSVkzZGN1eHcrT0ZNUENQKzBIQWpmcnFpaDNYa01PaDVjVHhJdFJpeEhNUTVVK2Y3Q01nQ0xoMmlId21nYnpBZXphTFJDclBnSkVuT2ZBU1NmU1BqT0xRNFpzeE5EU0F3bUFmQnJvelNFU0FpRTMyMGxqWE0yQzgyUlRJb2dDRUtncG96aGlWWTFQSkg5aS9CMS81MHp2Z1V1N0FzbzRmSHA4b3ZKa2N6cHRkSEJ6ZS9TejNQbURSWXZYcUdscSs4WHNSelJMdm85dUpGZU9SQ0dMUkNQOHY3bWtqazR5aEs1TmtmREdHY2ltTTNYQUQ4anRHNkVxMHVHeVRibVhUNnJtZWJ2UjA1UlJsZCt3Y3dPRElUaW9oUmtXNUZKTDI4aXlOUlp0QVpEbTBudU5vdmd6SVlsQlp3NTZoSGJoeHVBdkZVZzF6UzZXWTdWb1RvOFA3SHlnV1g2cTlyVnZlY1BQNFBUU1VvcUpZck5YeTlicGFUNjdaa2dZQ0ptWnVJdUtnaXk0WnAvVmlNUmRSV20xMXZZb01OM2J3NnF1UTdlNVRkd3diaEVhN1NmUEVtTWlqY0dvZUJtakJURThYMXBibXdMaEdjMzJWV29zZ0ZJR0l2SzdFbXUzeGRLa1lZd09YcE9EbThTT0ljVS9URDk2UGtaNzllTVpTOHhWOE81VDhlL2RidXFXNG94VmFSeTIxa0ZpS0ZndjlyZTg3WEMxa2JJbmIwS1RJSjZMb3p5ZlJtNGpSTFgwVjV0cmRROWkxYTFRM0dEQWxpQ1dKQW96ZFZ0dkZ1REl0RU9HS3VYU2VjWmxCVC84UWt0a2U1c011ZVBFY3JHaVN3a1laYXE1dVV3TERvUlZqaVF5YVhETnF0ZWoyQ1EwVjJROXZ1T3ZtOFlteHQ3UWNIM3U4dlh2NVN3dTFZUEthc1p5bFg0VUVGYURaNEhkMG8wYTlCaWNaNGI0RGhmUWtnMzBnbnlOa2V4U1d5cUZRbGgxVlVBaDVUK2hRTVVTNytzbzh2Mi9SOVpqZ2FSMVdDUlFxeWRSQm1oWmhYblNqYWprVlRMeUdPZzRKVkM2QlNvaEJvamZIOU1OMFlYWmxMT1ZZcElRNDhnYkwwV3JqRkdrOGJDZG9Rd3A4L1JDcXNLRmFTejhIUnNBNmlXKzkzaVNZVURCcXM5a1FNdHpBUnFtRTh2d3NLc3VMQ3VNV3FaZVQ2cUZMSmhGc3JtTDUzSE5vck00VE8xYlIzQ2pwNWwySEx1dkZEZXhUT0l0V1V5dnJGdms4V2p0b1ZsRzkrQ0pDZ3RmNnlIWDR4WE5GbU0wYXQ2TDZ4ejgyUGpIK0J1SDQrM2ZxeGhHMmhXRitvb3ZaYmMwRnRFQW5EaVVaeTMwTnV1RW1oZHRnNHBhelh2ZFIycWlpZUhrQnE1Zm5VVnRaVUpZaE5tOEZUTzdjdEp2SW9qbzlnNDNwaTZqTXpxRzFTYXBWcTV2Y3hUKzJHek1nb2xZenNXYngyVGE5eUUzMXdxK1U0VEFFSG5tRnFCcFlCdUcyOWh5S2hQZThUcml4c2ZFQ3Y1a1E2VHMzU1p6STcwbkM3Z2dtQ1Z2MVl4bWRDTERVYUxFS1hiVE9zeVd1NlljNHQ3Q0MyZElxTnBlWDRHK1U0WmRMT1B2RWY2TytlQkUyR1grc2R3RGxsVFd5a0RKcXl5dW84MmZRYkRDeFc4WVZsVStheEkxMkd2TEZMNTBRVWNhbWNOYi9mZWFNZWxhZzRiWmR1ZEdRNCtQakU3bHR5N24raE5HQWlTMmpDZCtrZ0NEc1dGMHRDUTFzV3hjMGNXaUViVWxPNUwySmFBeVhTMldjV1NoaHM3ekphcUdKMmVlZnhVUGYrUzRlL3ZhMzBKaCtFUkhHV1RMZmh4S0o4dXJzUE9xYkcxUW1sU2RvS1poUGQ5ek9xNUpFR0p2MGx1YktIQnpmeGFrejUxRWpBUkJ1WWFteDFMKzJCS3pad1YxYndvVlcrRVVSUWs1RkVnRUJ0WXp3UWQ4c29GWTB1ckNaa01rM08yNUFKYlJVT0tGWjVZMktDbnRtWmdFWFZzcktZbElNL3MvOTJSM1kvNkVQWUhOK0hwRk1EM0o3cjBVdGNMQldXa090dk1GS3ZhRmJGRmNNZFovMEZncGtCUVp0TFNFQjJYN1lSTlRUcnhTcEJQTnNVVUtnYU5rMlFTZ0d0ajZ1Kzl3L2RyakFLMk1keEpGWVU0UVQwSkNZNC9PVWN0bkdVaUtVSk95T1lITERKa0drMm14cERreWw0dWhuZ2o0d1BJZzBrL3FyVTA5VFZ5MTBYWDBRUXgrN0RiR2VBU1I0Wm9kR2tSMGVRWW5XTGMzUE1UZXZVa2xTUXJVVnJEZ1lHQ0hsK2FKenJ0K3dJM2pwekdsaGVpcVF0WVVhblhBUjdoVFNOY2R6dHVkNFk2L3ROblJLR3FGZTVpR2Q1RzIxMFpLL0xvdnlhY3lKcUxOSUxRdVlDTGxtWXMreGYxTG96ZUw2dlNPNGFyVEE1RXlyRUNGOVVVd2lCU2VkNWM4TVlrendoUnZHME9TNnBlVlYxRmptTkN2cldqM1lLb3h2QkJNQjVUT1Y3WER6UC9uaHYvSjdjZDFnS3dlSG5YMkgyeFN4NWljbVhDdHNqWXNmaEcwQjFSajh0OG5GYlBxK3RCQ0UzMW1oMDNaSi9rOXVvZ1hWSFhrMmVLYkpQRndLRUtmN0RLYklJYnV5NmlucGJKNnd2NEgwb0JTdVVVVkJhcFFVSzhXMndqNzBGWWF3ZFBZQzF0ZVdVYVAxa3IxRERJY21uKzEyOGhHcXE2dDRjbklTejV4K0NjVlhUaU9SMzZGeEx4N1ZrbkRTcUROaWhwWUpEN0s4TVpmeGRxZ2pWc2ZWTkl6Yk1ZVFg1RGlyYlRXVE53a2drc3lGZVBDRHBBU044RTJDME5JR0s5RTY5Z3p2d002ZE84QzJGM1BleTRoMk05ZnRHb1RkUzFyRktpS2E3a1p2WVI4V0wwNFRNb2k4R3lza0F4VjRZYlFkWitJcExUeDM2alMrL1hmL2hCMzBpT0h1T0lsQXFJUStDRHY1RFcycmRRd1hDbXdVU0t6dG5JbmdzSTE4b1hHSjBOZlBnWHpXNEEwVXhZU1dHUUV0RThOdG02K3orR3dTd3NNSU5jMzFtbk9MS0s5dG9ESzlnajRDU0p6OWt4anJPZS8wZWJwbEZKSEJIaXlGRmN6T3JEQmVBd1dra05id21STGNvRVBUYkkzOUo1NzhGZHQvU2V3YXlDQk9odE1nV1JlWHRJSk85bTVYTFczNUxEVUtEcmxFeUlLQ1JSdmFSYWdPRENzS3RkT0RGSXFtdE5wR3ltZzBxcUFUWVhVZ2xvYWtpSFFDdzJ6VkhienhnOWhIOGh5c0xHTGZZWUpYSTBBc2syRStZNzNIcEQyOXRJUi8vSnZqbUR0L0NZZEdzamhFdDA3MzlpbFlpVkpEVFUxU1MvcjQxY2xuV0VvNUpoVlJPRmQ2TmxKUHRrbThHcTJkc2pSSEMra0lnNXk0YXE1alZlV05taEtvU2ZKQ1djeWpJQzVMbkFZMUt2YzRYRmhTaE53cmxiamNHeVBYRXo5SVJNZ1JDVEJySzZ0SVozSnc0eGxFR0hzdVB6ZUpjcFdhV01YRzJhZWZRZm5SSi9HRlBSL0FuLy94SjhsSFEzUU5EaUtSNnlXdjlMWmNURnp6c1VjZnhlTGlpaVJaSktrQVNSVWVLMzVoTkJvdW5UUmxiWU9pR0lXWGN1NVdLZk82NU4zUzlvQkpqSUhtUDJFbmhnTTZha0VwaFRUdmhlMWNLTTBndW1PT0JpeXdtelh6Yno5RmxjaVlwUXRsVDg2UnhiUHVFd0xOT055ZjNJWHdZd2ZnRFNaeC9zTFRxSmN2SVRzd1NHSkN0dzZhS3B5NGxoRHJmejcrUGYyL0FFaUQ5VnhjYWo0SzV5aWdCWWFkaEdISEk3R2QwdGc1MlBiVlVNc0tzWVRtT1hGQldhQmh1S0VDU3R0Rm0xdFdkRFNvMlZ2VTZweVJnb1k0RTFsSmhzUTNScFRNTWRhczgzTklzQUVVMnoySzZKNGh1aTRiUTEwZU4xZkJnSHRBVTBXNnY0L0NNSkZUUUUxWFZOakRQMzBJTTNQTHVyYkFvZnlNUm8xbGRaL2JZYllsa0xuV2JpaHhLMExMYzNxVElHUW52NFdkbkdmYVFpWjVHeFluS1NLUUVsSUFSNjQ0cGhLWHRHR3pvdllZZCtudUhMcFlrNlY1eGtkSEVEMjRHM0hXZVU0bWl5QnFLL3V3K1hpWFNoaTU5Z2FXYmlrbGhtNGtRYmxhbUxsMEdmZjkvWGVVUDFvc2Z1VXhjcTlQbDB2dy81YnRLL3dMYWhvRFdZWmhLVzZvTjVZa21aVDRLV2VFTUVHcEthRHR3MXRwZ0orVFJMa0tXYnhsT2VyanZzYW5yLzdmS1lkYWhPbGFoSlFwejk3S1NBKzgzaTQ0TzN0ZzliRndqWEZaMXpTY2d0RDBabHh5VVMrZVV2Zm1xc3BDbW13eTNYUDBtMG9NUkdtaTZYcXRwWGdneXZlWUp5WHV0VW9QQW16MzVVd0treURrMmtYR1l6Z1Z0aEVsOUEyblZMZzNoRnpCSk1aQWx1UXQzV1R4YzJuMUNXZHNlNHNXcW5JL2V4bnQ5TUhFenJQcGt6ajdOYklZL216VnVENWQzRzlvSEN0Vmt2WGphVGdrMHBhUVpqYWFFRFR3NjkrY3hBd3JDOXVXaHFHdFFzbjlsaVAwTHFFa1FCNnNaWkp0ZHhKZEp5dTBqUUphTGdndkdKZmNOcWxvUytwVUVVd1dGQmZLc0FlcE00R1dyeTAyeDNHM0xDYlhvcXpBSFlNL25QYWsyWUp6a01xd3RkZlZnM1IrQkhIbU9wZkZhQmkyS1lQa3hIYStEQWdpeW1VWnkzWXlnNVBQL2hZQ1o5S2pGRi95dUxZdlNwT2Vqc1IzRy82YlJQUk9NYnRWaDI3SDNuTXU5ekxWb1M2R1dGc2FDNzVkSjVpMEZHcmp0RndpN3FHOFhtTVB4MnNEaXdsdzAvWUxORjRGMGFTbWEzR1Q2aDc4RzgvMElrYUlsN1FnbldoeEpWT00ybXFOa0JZRlR5bUFIVElXZ2ZFeTY3c21RU2tSWndkTWxDaXh5TGFEOEZnMzVkRWpqSUtDRHBBRTRSWW5EdHVZUWM0eHllelRQSUdPMFVMRFVueTZuZThiVWhwanp5SWFOZFg0WnFXaWJUMUpuQTArM05Ia2JtOTFNUVIwSk9EWHFuVUNSRVJHcUcxckNoRU9GQUdGNmR0YVZsSHJMVmJuOVUzdGJqa3Bkc3BvMlNZcjdUcjdNaEFsMkFJSlJoa09lV21ERkMvQ1lVcVZSRjI4QnFFaEdsc0ZkdnNVTi9aRGU4cWVtcG9xVWZlVFc5UXNOTGxPTnVRcFd3ZzRuVW1peEJiNGRoWXgxYm00clFpbmxicmhOR2lGMG5vSXNMaTZ6dTV6QmJYYU91cVZrdlkvWlhMVHFxM0JyNWJaWGlpaHdRNVlRQVMwWXpsalVmNXVkV01ORnk1TXF3dTZiS2ZIMGh4L3NacVE5YU1jbHpYSWRKcmFUZk9WMzFxQjhScTBTelc1a1o0NE5mWFVJMFhYTUlIZ2NkS2RjWU9Lb2JiT0pGQUZraVBzSE5lcWRlMVhkRHBoQWk0aVdMVnRTZHV5dG1vSzZYb3RrV2V1c2hVd2QybEdLWnBVM3RMRWJUa2xrMlhFOWRuRGpHZDdhYUNvS2tWaU1XUTFjTzZWRnpBenZZZ1dmVXFHa0lyVzNLVkhGeFpYTlhLRTJ1Q3Q2NHpkM282MU5qdmh2dy9JYmxRNDF3Mk90UUw3SG9WY3VrVFlLVTV0VTNJSWlaVmZjdWtlVFpiMzBtWFd1a3RZQ1YydlVqUDFucm1IN3NzdVdMbmw0dnhDR1J0K0VjdjgzcVAxeFlxYnBRM3NPYmdmSXdkdVVDVFVrRkJ5YnRQQ1pmelA1QyswM0dwUTBLdjM3VWF4ZUZseldkUUxOWUhMcEVkQ3hsRm10UjE1bmVSdEJBMTBkcUJGMnR6Y1hLMnZyMy9jYjlRTGdkWlNVS2hQSnVKS2dWSWNReTJSTHdwNWxyd21WbkJkVDV1d09WYmVEUW9qdVRIQ0o4ZGtka0RyU1RuRXVTaG0xcXA0OGVJY0ZsaVRDZkwyOVhYcldDdVI3dUpnSks3V2xoR3l0Tmt2blQyRkJ4LzhkdzR1RzlvenZmZXYveElmdkc0dlcvVGNSMjBEV1kraFlrdGN1NWd2TlZVSkp2YTJ1VEVOOHg5VFQwL2V2eVdjSEpsRTZnS2YvU1ZQUmtTa1FXSWR1NjJTemMyNmFhMVFZekxOYVhBdUp3SUl1VTVFSFVYSk9yK0w4NXFRMml4elVZTXVJNVBVS3QzejdNd3kreDR6ZU9Ic0hEZkZPQ1RxYlpBTUNQSTJXZzNkMU1yU1pmekxnei9BYjE2WWdlOUVjZTExQnpIeG1VOXFYdHZabjhQQmZidW9yVlhKZXRvclhhNzRxTlFiSmhkdUVYN3QvM3gxYnFaWTNISkxPYzRXejA0ZTJyOTNrbDJsY1lraGNiK1E2Q2N4VTJVdlg4ZHZUT0lDRW9GV0JZRnFYRnA3aWFndy9yckdYcHUyc2pLUGNlTnMySWFtU3FkallwV05vSk8vUFllVHA4NnJheVU1dnVyaFVFU0l1c3kvbXpTM2J3bno5L0dKMjI3UjhrcENJVW9LSjE0eU9EeE1rTHVFYnJZb2J2M0VLQzdOTG5JUXNvYnAyUkl1emEzZ3BYT1hKbDg4YzJxeUk5UHIydW5KbUhkM3ZWWjlGdTJhVFVteVZMd2FYMDZiZDlJMVdMOUpmZFhpUE54bnpwR3lTRkJUdm5PbE5TSER5RGpKTVdGY1duMDl1UWpXNTllVU5vVUtBSlpxV2hwTGRXRWlqcWtuWGVZMGgraWN6aWJ4NGVzUHFrQ0t5anByOTNUV3R4aGM0bDZhT25IZDJadkNRSlpXM3BubUdnWFdpNS85OHBFN3Zyb2x6K3NHSVU5TXZURGxlcEg3a2h6UWl3VUVuY1JOeFI0YzEycDhTRXRCa0ZUbUFvcUFiYitYZUdzUHVkU1ZZNjR5UlRQVzRzQWk0ZG82b2hLaEJHazdiWXRPSmFMREd2NFJHdng3UjI1Qk91Nml0cjZDeGlaYmZ4c2JUQ0ZNTFd1TCtxSk9nL003ZVRzaVAxQkF2bjhuejBHeW9jdzNLRmp4dGZLOFlZVGxOb09qbTM3MUR4alFCUUVVTXpJMkpZKzgzbVMxT1p4WTA2WEFkV3JmRHlLa1d6R2RIY2g5cGp0bXJPaHcwTitWU25NZ0dXRjd4VGVKWG1wRjZWNWJKajlhVmllUldPZ2owZjdNcDI1aHAzb2RwYVZwNXIyU2t1b21BYVc4Tks5VU1FN2s3ZDJ4Q3g3YkZodWxKZFFkcjNqakgzNzk2UCtYNVEyVDFhbGlzVVR2T2tKc0x5bTUxUXFCY0YrdGF4VWdCV1d6YVpvendpL2xOU2dCaUdqYktwSWFKQzJJVmJ1SXBLNE1FMm0xUVc1YWVwcWVyVlJZcmUrUkxHdmRhQmxYalJLYy91b3Z2c2JLSHRpZ2xjb0xNeWh4UHI2eE9FZTBySEpHSGtOdmI0OVdKZEVrSjBseFRtN1RQU1U3bXptQ056bmVkTEs2VkNxVituTDVNMFRCenl1aU5WdGIzNG5sUE1lVUhMSnBhVHNJbzVGWnRiSjhjVWNCR3hpdUtiSGFhQVhhZ2F3eUZsdHNFVXJMUXNpMmNHaEhHN3ltK1pvaEczbmlpYWZ3azBjZXg4SDkrekM2Yno4UzdMdkVpTHFwZkRkZGNrM0hZdkpxMWRVZnV0V014Unpjc2YvUWJVKzltUnh2K2FyR2k4WGlpWGdzY2plVXNUVGJ6UmlEa2x0dk5XaU9hZzlMNkdJSlVYa1lhdjRScFVpVHgrWDE3bHdhYSt1YkdOclJ6elU0K2czdDlvVFc5RUdrZFNGdXZyeThqRmN2ekdKdWNSVy9mdUU4TXYyNzBEMXlEWWwzTnpKOW96ckRXNW1qRzdKbGIvcm05dDBqZXo1NDRxMWtlTnYzVUo2Y09uMk1xZUZ1ZWJna2FnMzZOZ01YRUtpM2haWm1iTFhlVWhlVVptMkRBT05icnRaNFNRNG1CUUY3T0pEMDJRUHA3OGt4a1dkaCtycXVzbzhhODZZU2RlNDNrOHVnTS94MEJDSHovWFRCUEdPdWlsUnVrTVZ5RFd2TDZ4S0xkdzhNN1QvMmR2dC94NWRzZm52bTFXT05XdlYyTm9GSytzQk9ZUWhqTWRsVXB6c21ncTJ0cnlPVlRtdnlkbTNYVElvdFNmQTJvbVExdi8rSmoyTW9HOEdIYjd5T2lNcmlsMHJyVURrcGUrTE1qei84d1hGOC9XdGYwWGRRWkU2ZXB3VTNsbWJRUGJTUGo0aVVWaFpYYnQ5MXpjM0gzbW52Vi9SNjFMblpoUk5CSzdpZU9hY28rYzFBdVpSR29YYkpKR1JNTDlNM0pST3ZMWEdNMVdoWnJNMHFTdHM4Mi9UL2hYdG0yV0xmdTd1QVcyNGFVMlFWUURIdFZVdXJqLzk4NkdHTlhlbE5TcWxrZS9MdVdGWmE1TVhyUG5yYjlkODY4ZVNKSzluM0ZiL1lWcHliSzc0NlBUdEt4L3lHS1ZCTmdwZGlVdktiVkFjaVpUYVR3QklIR3g0cmdRMmlxRFNPMTlZcTJMMXJnSUN3am9kL05vbmZ2SHdSRjZkbmRjWnRjM0FmSVFzU3JpcHZHUGxzUTBTbHlhdEs4MDBad3lPM2M5OTkzL3ZlL2RkLzVJNjdpMWU2WndmdjhwaGZMVS8yZG1jZTRCUm9qUEZYaUVTa05HS3lsNHFaUHRqSEZzUHlScjFkbFRlUnk2VFVldWxzVEN2cStkVUsreXV1dHM0OUZxQTNYWGNOWGo1N2pvb0t0Ym43aGMvZmpqLzVvODlLUTAwOWdmRTlTU2U1ZmVpYW03NDcrZFRyM3pONXArT0tMZmZhWStxbFl2SFV1VXRIbU0yTzFPdXRFL0pDakxoaTB6ZVFMMGZRSGdhV2lKSnh0Z3VXVm1vWVlFV1FwNUJTVmkwc0xPS1hUNTlFcnJzYk45OTBnMXEvU3VieDBpdm44TE5ISDVOM3lDWVpqMGQyN0w3dVNOL290VlA0SFE0TDc4UHhxY05qaFZxbE9wSFBlVjhjNmsyUG5aOWJ3eXF0dFdkbnY5S28zbnlDeUJxU1djVGhzTHIrcnlmT1lXWFRKT1VrYytXMG9GOWRpRmN3R2JiQ3gyM1dsMFdTQ2J6SDQzMFI3clhIOGFOZktuei9KNU5qNjAxN2ZGZC85bERTODNKWGp3NFVIQytlazg1a09oL0RNODlmTHAyZlh5dFpqak4xNU9ZUFgvanVEeDZhYXZySkU4WGkxSHNXNkxYSC93RWMvRENFcWxOZlh3QUFBQUJKUlU1RXJrSmdnZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFEY0FBQUEzQ0FZQUFBQ28yOUpHQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQmtnU1VSQlZIZ0JyVnBwYkZ6bmRUM3Z6WnMzKzhadHVHdW9oU0psMlpJYzI3RmJPS2JiSkUwQ05KV0JBazMrTkRDS0JpM1ExdmJ2QXJVTjlMK1Y1a2NLdElVVEJJYVJwcW1acFRHQ3hCRzlSTEpqVzZRa1c3SkVjMS9FSVllejcvT1dudTk3YjRhVUk4ZXk0eWNOaHZObTNwdnZmdmZlYzg2OWR4Ujh5c2ZzQzgvRzE3Ym1UNGNDaVJOek02K2tMS3QrTXBZSXhyUHBTdHlDQjFiRFFMakxuOWNEbnVWS3ZwRWZHVDh3cC9qd2NqUTZPUGZsdjM5cUdaL2lvZUJUT0dablg0aUhyYTdITnVZdlRzRnVUZDFZdW9yMGVoN3ZYbHJEUUN5QW9jTkpyQzF1b2xDekVWQlZqTjgxakhxdGdmV1ZYWnk4ZnhKZXZ3K0p2bjVFazBOelhzMy92V3JSbUg3Z2thOHY0dzg4L2lEamxpNi9PYVY0OEdTcGtKdktySzhnZmYwaUxMT0dURHFMTjJZM2tDbTJNQkRYY1hpMEc0MXlFNnM3SlZUb3VUKzY3eUF1WDl0RVgyOEV4eWFIMGQzZkI5V2o4S0hScTMzUU5SLzg4ZTdwM3VIRDN4b1l1M01Hbi9EUThBbU9wZG5mbklUWCt3eTNac3EyYk5pV1FZZFZVZGpkUlhrbkExdTFVV3NhS0RZdHhCaUtxNnU3Q09vK05GVU5OZFBFNGtvT2F6dFZqQTExb1ZGdnludG10N1pRTGxZd05tRUQwUVNDMGVocEcrcnByZVhyTTdadFBqb3dOcm1NajNtb0grZkRzN096OGFWMzNuakcxclJadm1RSTJqRE5GbXJWSWpZWHJ0RElLbG90QzVxbTRiTjNqU0Rvb3pGVkErbHlDL2xhQzl1bE92dzh0N0pkUWl3VVFKNmVMT1dxV0Y5YXcrTFZOVlN5ZFJReXUyZzI2bWp4MGF5V0FkdWNVbFZ0YVdkdDZVbDh6T08yamJzNmV6NFY4elJtNmFqSGJSckYvekJhTGV4c3JHRDU3WFBJYjI2aVVtaWhaU2pZVEZmUmxZaGdPRUZ2R1NacUxSc1ZlckxlTkdFYU5zcjFGaFRlcU1vUUxXYnpXSnZmUm5xcnpJMXBvRmtyTWJSTjNydEp3N2RoMmFaTUh0dTJudHBlWFZoaVBxZHVkODIzWmR6N3MrZE82eDZGaHRrcGFSVVAyN0pRSytWdy9UZS94dnpybDVCZUxXSmhJWXRjb1Vrakc5aEpaeENrQjBYWWVsVUZoc2tROVhuaHNVVXVLRFN1eFlBRlNpVUQ1V3dGSVErUnROSkFPQmlFMFN4ekUwelVxeVUrTjJWMFFMR2hLRWg1Tk85c2VuWHA5TzJzK3lPTlc3aDQ3akZid1F2MFZ0enhtUHZndjBJdUE4TnFRUEdxcURlYU1BeUxJRkxub2hYa2JwUVE0b0lpek9vUXJVandNOE4rRmIxQkRVTWhMdzRrUXVqaDM3MFJIN3BDUEIveFlHQXdCcU5lZzFtcm9iU3ppZkx1TnFxRkhDUFQ2SHd2TFl5ckhyeXd0YjcwK0VldC9mY0N5c0xzdWNkTXl6N0RmWmJHT0VZNWgybTBFQXpIa0J3N2d1eEdGbWFtQmkvUDY1cUtzRmVuQjhzSWVEVWNqZm5sNTBOK0hSb04xQW43T3ZNdTFCVkVLT3lIbjdrbkRQSUdOS2hjZGFObG9GRXFvcmhiQkh3N0NDV1M4QVdqdk5aSHd6enlYc0pHZXVXWnJmVUY5QThmT3ZPeGpidjIxaXVuRGR1U0YwcVRYS3NVZVhOYkxpUVFqaUtjNkVleDNKU2YwdmpkSVYybGtUYVNYSFFpN0VPMEs0UklUeFFlbnc2UEpveUtRd3NFb1FYRDhBZERDSVFpMEJpdVhsMkh4YmdyWjdkeGFlWlh5TkM0N3VFKzVMZFhFZThmZ1ovM1ZGekRGQm1pS2lORWZZWWh1cHdjSFp1K2JlTm16NTlOMGJCblZjc3hTaUh4MnZ0dTdwb0lsWXR0dGt5VUNsVWFwS0pKSUlqNHVNTUVEdUdWM3NFb2dnbDZxQ3RCM29yVGdDRDBRRVFhSVc0UjcwckNHNDdBd3p4VFNSVmdidnJpWFJqZVdDWHB2NGJGNHFwOFBjcjhKZ3ZDVmx4aWxoSEVjNHJnUmp4N1kybHBibUJzYlBtRGR0d3k1N3lLZlphQXdSeXpwRkdXWlVvQXNmZ1FBQ0ZlaTRkSmtQQjQvZkRTWlFWQ2ZpeWd3MjQyQ1JvbXdqUk9VSUxHMFBSNDZEVnFMRDBRNVVaNW9IR3p3bEV5SUVOWWtMZEh1TnhaTlQrcm9lL0FHSVlQZEtHN0o0NytBMGU1VVZIcHFmYTJPbUhrNWlDVXVNZW5uTTB0TGNVLzBuUHZ2bm4yU2N1MGlJb1dGeSsyU25WamdROWhuTnc0aStqbnhHa29IR2FlMktnVDRuMWN0TVdjQ1lhRENBVDloSE51QWtsYUxFaGh2cGlrQUErTlV4aTZsaWs0MG9RbU5vdWJwSUtnSWRiUDd3dkdlekE0UWFPWWU0bitRWGg5L282V2NpSkljU0pJUklBdDMwb1pQbFh3NEJNZjZybXI1MTlNOFJ1ZkVvdVhYcklGMzVCN21uVnF3U3FxUkxGcXRZSjZuV1RkcUVtaXBmOG9LSmc3bW5NekgzUExSOUNnMitBTmhWSEtOOUNxbTlKajNvRGd2UVpVQW82cWlBVXlyQlFDaVlnS2NpWkpUVzZDRm9xaWErU2drNXU2WHdLSjNmR2JDc2N1eDdBT3hObjI0OXZyU3ljLzFEaGI4VDBybi9sbHBtR2dXYWRoOVRwNWgwYVFWQzFETE1DUXo0N3NzdVFYUm51N2FZdUtlQ1RNRVBQaS9iVU1MbDlkeHdwbGw2bnFxRkJXbVF4WFZkUDVlUXYxaXNOalhpNWM4YWd5SW1SQ3djMXRocVpLZ0VtT0hJWS9rbkFNY1UyVEVlUW12d01zU3VkOVZWV2V1V1ZZWGo3L3l5blRNcVprUGpGY0xCcG5pcHdURDU1ek5nY3lrY1ZDeEkzbHJ2RzVmMlFVRzFkV0NPdCtna3NGWFhHQ0JqK3p0TDZEWExhSTNsZ1FacVBGOE5KUnplNUtnNnhtQXdIbW5XbjZvUEQyd2hpVnF4YlJMcjVIMHdPSVJIcDV6NzFVY3J5a3lIKzBaTys4RTZQaXVxa2JhMHRUQXlOak16Y1pSOTU2VE1TK05FeDR4L1dLWlJ2U1FMRTdmR0o0T1Y5aFUySFlyc1VLRlVRMG9rdFBSa01oWHF0UWNqVndvQ2VCQm8ycUZLbFlWdFBvR3Vybi9WdG9VSEtsMzM4ZjVmd09iQ0tvUHhaQnVLY2JrZTUrQkdMZDhwNFdJeU1lVHpyZks2aEhjcTE3S0cyRDNKZUtnOTdpV2RNOEl2ZjJqSnQ5OFlWVXE5azhMVHprRUxYcFh1eHhudTAyRWFqU2k0NzNWR2N2K1hiaHJmY1FGWnRKMEJNeUs1T3JZTWRTc1VGeWpvaHc1VG1iTHRsWlhNWGc4Y1BrTlRLVTE0dXQ2OHZJVTE4T1R4NUNwS3RIS2h1alZXTm82M0xSUGwrSVFhSTR1T0VRWEp1THVNa0sycWYyUENzM2Uwb2daMkpzTEM5OWEyaVdOTXlVRDBPaW1LTklyUGJXT01rcmdFWThXNHBMRGJZRWdWcW1CTDlPYlVqNVpWQUxNdllSQ3dld1dxMmk1OEFvU2d5aFhMVkpJRElSR3ppQWdXTjNFMTBadGh0Vi9PcnFMczVkTCtEOWkrOWhlL0U5R2ZLcXgwdmsxV0VXc25zaDF5azliZGViKzl5NC8rQjdUYi82ZU1kei9QZzNSTXdwRG1qTEQ0aWJTdEZsd1kxbis2WVlsMThnUHN1TjBGbW5lWFhTT084VzdRcHpmV1VreUY5ZkhlMUJ0MUZIT2VhVHFLdnJBa0ZEQ0JQZSt5ZnZ3UGFOUFBxSmtxTURQYmp6d1Q4aXFoWjRYeWNGUEhXQ1dpTUhyYnZYQlE5bmJkSmpjQlRLQjBPei9Zb1I4SkEwN3Z5THo2ZjRvWk1POUxmM3hsWCtwQUp4a1VnLzU5bnE3Sjd0aHFxZ3drQmZETFltMEZBbExZU2hCM1hxd3pwQ1FVb2tqZFVBVWRTbzZnZ3dMM21GVkNROUJ3L2pVSG9IbzRlSGtSdy9qR0NFcEo1TWlwWEorK29SS2hjdCtBSFBxRzQwN1NFbFlPOXR2dEtoZUJtYW1xMTZUMHBFYkpjeXJpcHhYaWdkVHprbXU2aHBLVGVSU0NEWnl6b3NUWFhCTHhjU2pIMlRPR1dYQ0hHdkw0Z1cxVXVwa1lYQ21zNHJPSXViRktEc09uVGZmYWlRcUgwQlAxVHFTK0VWS0k0QlZxc090WDlZM3QrUzMwODE0MnJLTnNoMFF0UU54LzFCMnZKNlRndUVtT3Fnb2J6QTJwZWtDdHBwSjczV0xqdWtoYXFyemhVRWh3ZWtIQk9YdGVwRVYrYWVoeUVZRkhxUzRyakluS3hTWEF1cEpiK0huR2V5eWhiUEVZYWRUOGdyZC9lZGpiVWsxMEU4YkNkcTlwQi8zeHBjd3lUWEFUZnhJVmQza3Bjb0p3VDZpUkNVS0FobjBYdmgzUFlvcEtLUXdLSkFWc2kyV3l5RVJ2cllHakNJbEs0RzVSc2ViNERoMllWcXpzRDIyaTZSajhvalRQUVRDK2Juc2xmZlFYNXRGVTE2VHFPOEVxcEZMa3hnRkFsZVp6ZE01clN5Vnh5M05TWDJHWFRUWXR0L2kwMVNsUlJaeTR3NzV4V3B2QjJ0cGtvTDJ2VmJ1NVp6eEt0SGJrQzd0aEpCYlBGOG9kcmdKVHluaWpwYms2aGFweko1Zi9ZcUlzRUFmQVFTWHlSS3lVYVZRNkhNUGd3SzY0dW9zS2trWkp5VE0ycUhlcmd6SFRGOTg2RjB2SXg5M21vYjVlQ09wSThUWWlVcDRiQjJhb3F6bG90T0V1cmRDeDNERkRkRWJWR2RPR0hKOEJScVFpTm90SWg4NHVZaUpIMVVPSm5sVGNvdUF5dHNBdm55SlJwdk1nUURTTS9QaS9Zcyt5MHFpdXk5aEh2N1dQcUVaVVV2RnRHZ2JnMks4cjJ0UDFYbEp1TXMxd2k3ZzZMNzMrM1lFVmNWV2RvSVIxblNEN0pPZytwZWlEMnVjNVc0UEc4N3BZOVVFbkR5cXk4MVJoQ3dLYkxaSkdMTG9iU2RaL09IWUNFTTliSk8weFcwcUU2MFVKQWx6UkI2Um9hby9JK2hWc3pKWG96VmJMbjNaTjR5RisxOWkvNmdsOXI1MTNHYSswSmNZOXFkaStLcTNlYTJUdmp0cHdJbkJ4MENOL2NScXN4U1djUkNjZEJNcDVJWFhtcFU2NUxNYjl6WXBRUnJ3VkJaMW9RMERCOGRJYmhveUN4ZVJ6YTlpSWJOM2t2UWl6aU56SzR2OFpxR2xING1jOHRQMmRYT3Rac1VpSDJMRUhXRnMrMWFzWi92WEcxcHVWTEdDVDJIODZ5T2t4MUdVRHExbk1nTnhRMVBTeUl0K1l3ZWFiWXNXYy9sdHd2WXpSY1JZYXVoUUZWQ0dZb2JWemN3UXNwb0tFMlVyUm9hdFMzbWFvWDhGbUU0VjBnaERXNk9BMmw2Yk5pVmZOZ1hrbTFEMENIeGp0c2s3amc4cDNiTUZLbXRlUEttYmNxcVc2cDllUlBWcmNEZEQ5cjdudDBpc1UzaWxpUURVZmIwWXAzS252cExmaXdXWVV1QjVZK1BIdTlPOWtpT3N5c2NndlFFMFQ4K0RqWHN3Y3FsTjVtN2ZILzBrSXcxcm9VYnhPcEJjZTZKZlRKcmo2cVVUdlM0Tm5jTWQrbTlUZTU1aGlYeVVOcVh0TDFqdTcwVDl6WFV6am5IU0FkWmJmZHZzUzhlRXJHUzZHVjFvYURCSGtxNXlrNDBoeDJxYXFIaEtjUG9WckN0bGRFWUNLQ2x0MGo2UlF4TkhxV0s5ekVjcVdkWkF0VXJlVGFTZ2k1L3VXeGxLL3RpVSswWXVwL1hZTzlocW5TS0xMYnRaWlcxMVp4enNTcHpSK1JXNTlQN3RWdmJmQkVPTk1hMDJyclR1Wms0bHppVXducStqTjFLSFduS3J4MCtnNEphNHpXMTNUekxJZXJQUmhFVzIrOGlER3NVeGg2UGt4WjFudHROcjdPQkUzWXJEaWZBSUp0VHFyc1VXNEtHWEpyeVFlODVwbmZXcWFwNTBjSllVZHF1RTlnbmpMUFZEcWFLdG5lYkhxUU44bjNYcTIzVlFwbTFsY2xpZFhNWEN4UzhjY3EwRnNzYzF1NElzalBXWUVnbVlqcENVZktmeVhaRmJwM0ZxYkRLa0dqYktGcWNHMndpZnZoZUVucXdEV2RPRFNkcU9ZbUU0bG50Y0c5YnVPK25BbHRSOXVEUnNpNXEvTUNjb2poZjVGUUM2RlM4N1ptQUl3NzJHcksySzZLRnNhYlp4TFhyYS9qaFQxOWlxRFhRTDVTSW01Y1ZvVVFveDZvQ2FIaC9oZktMQ1FWRHFiUGZHZVU5Qklnd3h3ajlOL0lLTG0wdjRlR2VDWFIzUlRxbDIvNWFyczIvYUtzVG9HUG9YcFM1UnR2V2pCcjBxdFB0Um10SDJjbjJuZVhpaCtKV3hxSmF0MlNueW5SbGxrSHd5T1pLZU81SHYwQ3hXRVdSRGFRQjh0blIvamdDTk1UZ2ZUWXFMV1FwemFxV0Ixbk9Ba28wcHRZZ1ZheHNvWkRsTlF4Zlc0K2dFVXhpZG00T1o4KytKZ1czN2ZZbTI1NVNsVDNLYXEvM0puV0NQVUtUR3JkcHpxbW5IbjRrVDZTY2NSUi91eC92M0xUVG43VDJPRTd3a0UwRERZYmE2dklxZnZ5ekdVNXJtcHkvZVRCQ1VJa1NRRHlLZ1ltQkJBNndkNUtnSjBXSXB2TVZiT3hXY08zOUxKWVdjOWpOVk5sOE10R1Rtc0Q0L1Y5QUg3a3dRSGlMb2tvZzRxeUFoYTdjWUxIWXRuaHcyYnREMnNBK1RIQWQ1T0NHYk5JNnhhclplcGxQVSswd3ROMHVqV1FIbHlJY1Q5clNNR0Znb1ZERU5xWFRuYU1oRGhOVkpObXIxRGlWYVZvYURiZkpYeDRjNW5DeFFsREpsTXBpSnpudDhiQ3dsYzBMREIwNmlFTjMzNDNlc1hHNXlQVFNDcFpXdDNGOTV6WFliTjcyREkwaWs5bkIrT0VVRG80Tjh4cFI2Rmw3bm5KRFVkbXI0UndqSGNyNG52aGJHdGRzTnMrd0pmZWtNRW9pa2FXNG5qTmtmV1pJVHpXbEdNNFNEWVhRL2IrWDNtQXZzNFVVUGRSTlhUakU5bDVycXlvajNwQWJZOHQyWDA4eWl1UndIQXIvRGtRamlQV3hrenc4d3ZsQkx6dlFRZW1ad200YTZjMHNLdVV5UFdiZzV6OC9oL0dKRFRGZHhWdHZYOEZmL2VVWGNEQkZoY1BLb2UwOUtlNC9LS3JkL05RVWEzb3ZUSG04OHBQdm4yVXZjVXJrbStncGl2TGwydnd5UTY3T2ZtU0FMWEliei8va1pXUkxiTEt5azV6c2pra1VMTkhBMGI0NFBqTTJnT2J5Z3VBSTlqOUlDOUVnd2l4YW83MHhUbWw4ckFvQ0NQYjAwYU5SdHV0Q2JMTjc1YlBJa1BYNXEvajEvNzZNTnpsT25pZmFlalEvSG5wNENwdXI4MGdkVEhFb1VzYkp1OFp4L3oxSGVYdWQwOW82K3JwWVlYQ04zVDFkU0hRbDBFNUpCdFdQazBNSFRuYzhKNDVHby82MDNUS21EQ2E4TUc2RDJqQ1hMVkhGaDNCOUpZTlh6ODJpWWRnU3NWSkR2YmpqOEFGMDlTZngyaHRYMEJmM28zc2t5YXl0bzNGakUwNlRSNEdmSGVZNDFZbFh0Z3pFSkNjZ08xdWFVQzcrZ0l5eWZEWXQ4MWNoa2NmWXFmYVF6SVhXTUlxNytPeDk5K0s1NTMrSTQ4ZnZ3TnR2WGNDUjBRUVdWckxZSkJqcHpTckhaME9ZWDl1VzgvZC8rZWQvUW9SVEphWlBaNlRsYWYveC9SLytkUGt6eCs2YW1yMjhrSnBmMnNKUHp2NFdsK2RYQlhZaW44dWp3RXBhRVpOU0VicGMvSVdyODdodzZTb0dCNGY1R01TZHg0K3dRenpJMWQ1QU5DcnFOMDAyaklKUk5vUjZPV1B6YzVMREdadVg3UVF4SUJHVmhKeWNOaG9jTW1hUVh0akVlNXlKWjluTjF0bUpGc1BVZ1ZHS2dzMTE1bDZHT1d2aDlkY3Y0TXFWYTlqZVRtT0x6ZDJ2L3NVWDVTaGEwUGVyNTY1aDZuT25adWkxcDMvSE9IRnNaUm9YMzFsZS83dWx6UjAyUkx2UXkyWlBwZGJFMWNVMUx0U0hubGdQZkNUU1RMbEFHbkNHR2w5KzZEN28wVGlPMzNsSTVvaFhaVTFYTC9KdlAvc2tCQm5tU1R3NXdBZ0lVMnhvVXUwTDR5eTI1NXNWM2tlVVNKVUtkdGR2b01vaDQycW1JQ2VwOVdhTnMvVXNQditscitEZzRZT1l2MzVObE1ENDR3ZnV3Zno4SXRjU3g5R2p4MWhPNlRnME1ZRkxGK1lSOGdVZi9zR1Buc3ZmMnJpZHphMzdUejJRR0IwWXZEODFNb0pqaC9wd2ZISU1teHNaeWlRMlViYzJHRzYyVlB0VnpoRUVhb3B4MWJFN1QrRDRIWWNKQ0NXTW43eVAvWkVDZS93UkdqWEl5V2lmOUpiWDY1VUFJTW9pc3lFTUswdE5LYVVjUTdIQzJxL0p1Y0JTdW9BQWFlVmdmeGNWam9hQm9SVEhYUkg4K1ovZWc4TG1HclpaK0FZWUJSdWN1WWU3K3ZHTFY2OGdOVEdKWUxQNjlEZWYrT3ViaHBBM0dTZU9vUU1UcnpmcnphOVZHczE0YnlLQ0VML3c0dVZyR0IzcXdXZnZQc1M0VDBKMENuYTRHRUdzR3pzWmxoWXF2dnhuVStRbkRpRjlERWt4NEdCejFoY0lzNTBYb2NkVVIyRUlFY0F3Tk5tSmh0dXVGMjNxZXFtS1hLNk8rYktKM1ZLRitXZmhNeE1qTUwwaG5MK3dqSzFkcGdRRlE3MVl3TnZ2em1NclYrVG1WbkhpMkNUbU54dllMYXJMLy9hdHh4NzVvQzIvTTUrYm1abk9wMUluSCs3dVNjN21DcVY0S0x5SmJYTGF4RVNLSWFkUjdUZW9SRXlwKzNSL1NJNnozbnpqTFpUSlozNUNlNHZoNnUvcEowSnhrWElpNnVTb2JkaVNWaVFoazJxRUZKTWxFK3Uvd2tZYXk5czF2TVZjRnhUU0hTTjlETEQySzJpNHdIQk1wM1A0eFFaYkUyYWVxcWRGTkE2Z3p2UllXRnRuYXNUejcxMWNmUmkzT0R5M09wblBiK1dQVFQ1NFRmZnJYMHV3aDcreHNjVGlVM0FRT0xuSk1ud1pwblRHQUdmVnNZQVhuNXRJRWlkOVNLV0c2RFZDTlJjY29MQTJhMlZIK3duZU0weUhndzJuMkpVYVVOUnZETStkeFUxY3psbTR0cjB0cDdWaTN0N1BjSHgzWVIwbERrMGlBYllJbTd2U0U2SzZid205cTRpeVJ1WDNlci8rOXF0blhyK1ZIUi82VTQyWFh2cnU5TVJnN3hNeGxpYWlwOUpncnovTDhSVDd4VnlmR0JuYkdCaE00b0Y3ajhNa3RLK3ViVEN2ZkU3NE1ZZlVVRlI2VFpVOUY5c1pnN2xUSkNsOHhSaEx0TnEzTXdpT0hVSEpkdVlUQm9WRG9WYW5ZVnZJVTYrS2RrU3hXVWFlSUZVVHZWR0d1QmhUeDJOZHlCVUxUL3oycGU5TWY1Z052L2QzS04vKzdwa3p1WjBiVDFpMk15NCswdFdIQkdmZ0hrNUREWWJhWmliSGpoVTd4VVNzTGZLYitFV0NtR243ZUU0TWk3M2hCRlBLNDlSZU5GQU1NQjBSNk13QW0wUkpUM2NmWXBPVDhIUEJYcmdqYXQ2N1VxbktHWi9OcWtOcVhMRWh2TzlJZndMMzNIVUVrMGVPUFBIdTNNeVozN2Yrai95UnpmL00vUFFNVStRUlprKyt5Qy9icVJJTWhQZ1JPOC9ZUDM5aEFkYzNhOGdXbTdLcWx1OHg3QVRFNnh3dUNpVWlPOGIwcmpUVW5jeWFkZlpOOUNoNjc3cmJ3WldnYU1wU1FmTGFBOUZ1K0JYT0d6alY5WG85T0RTV1JKeFVjdUxJR0k0ZkhNenJqZG9qenozL25UTWZ0ZmJiK25uVThzTGxhVThvZktwc3RKYnJvbURsVGc2UGpDSEFUdkcvUHZVUHVPK0J1OWxKRmcwWmo5eDVVMWExTGRsWWxiTndZWmpxOVBpRndtbXhsVjRwMXBFOGNhOGtkMUg0Q29GZ3VOT0lXRjhTNDBNa2ZxdUpzRi9IeVlsREdCL3V4NWNldkdPNWxzdWQrcS9wLzU2K25YWGY5Zy9iM3B1YldaNDUrNE14YnZuVElxeW9HREhSbmNERzhoYmV2YktFU1JJcDNJR2c4SkI0dElpSXZvRVVGKzd0MUlZQ1dIWXBuOFkrL3hVV3NWVTVLTkU0L2hKNXJMaGROWlVHWDg4WFdPeHlLc3ZRdlh4cERxc2I2Vy9WUWpqMTc5UFR5N2U3NW8vMWswUnhYSGxuNWlsVHI0M2xOYy9NSmtkUWl4ZFhzSGpwSFh6bGl3KzViVDhMdXBoOWMxRTZQZGNrSXFyaHVQU09TVy9tVnBjUk9YZ1VWZkpXT0JLWGJRYWhRNzNVbkYwY0hmdklrMkZxUkkvaXBUQnZpSUoxcHI4M2VlcVZOMy81K0tPUFBwSC9PR3YxNEJNYytVd212N0l3OTczVStLbVhEVjhnbmkxbkpyNzVOMTlEcVppbFhxeEtPaWptODFLZUJlTUp0dHFqc21EMWNKcWpVc0tOUGZDUTdNVkVpSGpGUW82aXZZR3JsNi9MMzdiMHhLUDRrd2RQSVY5cXpxeXZyVHg2N2RxYlQxK1lPN2VGVDNCOG9sL0t0bytmL2V3L1ovZzBjL2JzaXlrQ3hlbGF1ZnFOYXFWMFVvUnRuY2k0czdWSlRSbGhYdmtSR1J5akFFOWo1TUE0eVo5NTV0VlFJNmdVY2puMlhtcVVialdFTlgwbUd2SzhmTTlkdzJmKzlyRi8vRmhldXRXaDRGTSt6ci80WXNvZjg1NHM3bTVQbFhMNUV3ZU9Uc1lacGluTm84ZTkvcUJFVDNvMFg2SnJTK1g4M09xMTZ5dmhjSFR1MjkvK2orbnBtWmsvMktEOXgvOERIdG5FOU5ZS1RUTUFBQUFBU1VWT1JLNUNZSUk9XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFEY0FBQUEzQ0FZQUFBQ28yOUpHQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQmpVU1VSQlZIZ0JyVm9KY0YxbmRmN3UrdmFucDZmRldpejdPVTY4eEhpTHdXa1NGZ1hLTkcxU0VGT2d5WFJoS1cwek1DVk9PMjJITUVBeWFhQ0ZRcElPMDNZNnd3UklweG5HN1pBMGdZYVV3WElDSkk2VFNBNWU1QzJTTGRuYXBTZTkvYjI3OEozL0xaSzhFR2Y1TlhlZTNuTHYvYzkvenZuT2Q3Ny9hbmlieDU3ZTNrUXVtT3NMMnViMlJMSWxCZmc3Z3BhZFNNUmlpVURBZ21rYXlHWVgwcTdyanVRTFRqb1VEZ3hHdzZIOVJpQTQrS2w3LzMwRWIrUFE4RGFNdnQ1VW9pdlJkWmZobDNyRGdWQnZhMXMzbXVOTlBPS0loRUtJcXNOR01CaUE3N21BN3FOY2NWQXMrWmlabVVFNEVrWXdFSVRtZTRPRlF1NTc2Ym5aeHoveU5oajZsb3o3VE4rN2UxM0gvVW81bCs5Tnhwb1FpMGJSMmRhQ05WMmRhT0gvSVJwaldCb0NuTGhsV0xCdEM3N3YxODcyeFJnYVdJTHJPalRhaCtOVStMNkE4Zms1bkptZWV2eG5MNy82OE9QOVEvMTRrOFBBbXhnZnZQSGFIYnZXZHp3V2k4YnVMWmZLS1VQWEViS0RhR2xPWXMzcWJuUjNkTURpWjRZaGhsVTlacG1XT2xmVE5INXVxUERVdWJUeUt1Y3pUTlZCaTFHaXNmbEtaZE5pdHZqSjNodDM5ellGL1AybnhtYlNlSU5EZnlNL0hoZ2VUb3pOWngvY3N1UEdBYy8xZW5QNVBDcGNiY013RVdMb3RiYTJvaW5Sckx4aldTWW5ia0kzZEI1R3c2aGdJS0ErTjNtT0xndkF3N1p0ZFg0d0dJUnQyWWpTMDJIRHh1ck9MbmllMTJ1SHdzTS8rYjhmZlFWdmNGeXhjY2VHeDFNUlBURGdPZjRlUmhROUVrQzVYRllURE5nQnJPcFloU2hEVWVPWEhvMFRRMngrcm1zNnZXYXFpWXNCWXFnWTd6RWtsY0g4VG9iOEw4UG5TNFRHUlFQTTAyQUlwa1VRMGp4a012UDNuaDZmR2o0MlBKeTYwamxma1hGSFQ1M3I0ODBIT0t1VTVNZk03SXo2WEZaYzBqWVVEcXJKbVp5NDR6aVFlWXJSRW1JVzg4ejFQUEVBaXNVaXNwa015c3l6VXJHa0ZxY2svL01vRm9yS1lNL2h3ZkFVRUdvaUlDVVNUYkFaM3FkUERQSGFic28yeklHancrZjZybVRlcjJ2YzBlSHpkMm02OWtNZmxZVEhGTTBYRjFGaDBsYzBHMldQSVJXSXdLTjNTazRCVGlsTGUwcHcvQ0xLcUtpTWR0V0VIZVRTaThnc1psQVNnN0w4ZmpHSGNyNEEzM0hoME5BaVF6eS9RTU1MWlJUNWU1OHowN2tnczlQakNJVERhRzV1UjdtWWgyZm9DVXYzZmpnMFBMYm5MUmwzOVBUNXUzelhlMGk5OGVWbXZzcUhOYXRYODBSTmhWMkE0ZWJRbTdMNlZRVDBZUk04NU1MaUJib0RBcEErbzg4TUVFZ0VSSHhYZWFPT214S3FFdWEySExZSlRVNldzR1habUprWVI1azRzMm56RnBYZjRsMjVIZ1Bqd2RjejBMemNGeThkUGRWWExwY2VNbXM1SVVYRGtWemlsTUt4S0V5QmVVNHFrMWxrTGJOVm5aSUpSaU14d3I1Tjd6cjBuSVlTUFNHL0MwU2lDRWJEcWl4b3JnZVhpNkdYOGlvbjdXQlk1YUdFZEtGY0FEK0d4L01xWlFlVGs3TUl0SGJEQ2pOQzZHVlpMR2d5QzE4VzRjSGp3MmRITnE1YjgvZ1ZHemN3Y0N6bGU5b2pQb3V0NUlya2o2Uzc1SktzdHFEaWNVNms2RllRb0pjRUtKcVR6V2hwYVNFQU1GdzUwUXJ6SnAzSll2ejhPT2Rpd1lvM28zM1ZLclFRVFJNMFJxc1FhT3lRTWtwS1FLbGNRWjdobnVOMXB4YnlHQmtlUXpwYlJpYnZZT3UyZDNJQkluQXFaZjdlNVh5c0tobFFidGNmSWNnTWJsNjNidVNLalBOdGV4OWZFZ3JWUEs4SzdlSUlNWkVyR3VQRm04d2dpcDZncFZZRkUwRTFldGtWRHpBYVJ5Y21zRGlYWm1HUGNRRnNuRGwxQ2llUEhFWlRMSWFPUkF2V3JWMkRjTlJtS05ySVpiTllXRmpBOE9nNW5CZ2ZwMEZaRkhORnBCZEthT3RhaXcvL3djZkphQ29Lb01Rb1g4Q0s0U252Wlo2YVp1MWptZHE1YzkyNjlHODBidURJNmEvd2xGVERVREdRSytzeEZQU1FoY1ZmSGNUYWdJWk50OTJHWHh3NlFEWXhvMXhxYWlZTHQ2V01kUW9sdE1UaTZHcHB3b2t6MHhpWW1HV29CdEhUSGtOY1o3NlpGU3d1ekNJVzZrSkFrUEQ4S0E2ZkhzVzViSW1BRVdUSWE5aTE4UnBNVEtlUnR4T0lNYVFMcFFyRFVOQ1k1Y05pTkVuTytxZ3hIajhWZ2lGMThPN2x0cXdBbE9jWmpvVHRlMWQ0c1JZMkZmNlY2U21qbkVmYzFwRnNqdUg5NzNzM2RsOTNuYUk1bXZyamFta09FbUVkTGZFZ1ppY21FUS9GMGQyMURwMnBUZmpBcmIrUEpPdGgyK3BPMkxFQVlKV2htYncyRitUcTNUY2dzbWt6eko3MTJMQjVKNDRQSG1ZWmlHRHRsdldNSHBmcjU2djgxSFNGTmhmNlJHcnJuc01uaG5kYzFuTU1xMGZFR0I4clNhY1VaYUkrMllTTGdIeEJhenlkRUU4WWEyTU9hVXh5cVhHZW5NY3FyTGxsUk1oUXRtemN3THcwY1pWbW9aRE5ZT0xWbDlBWkUyQ0pJYzNTNEpZMUlpQlVxTnEyaHVzVE1XUUtjaTVCNXRvTm1LdDR1R3BWaXNiNWF1a2s5MDI5eW5iZ0x4a283K1hRTGVOQnZyMzVJczhkSERqWnl4TjZhKzVTSHZPWFg4RGpCWG00Z3BwRU81TmhtcDlmZ0lCK2U3S1Z5Rlptcm5sRXVnb25RZnJFK3Bkb2FrWThhaUJKNzdSRkkraG9hV2R4anNISkZoQWk4SlM0akxyTEtkRENjbVlPTFV6c05tUVJjdFBvYm84anlEUm9ha2xXRnhoVlNtY3h0K3ZHMUkrNmdUTC9YNTBjN3IzWWN3YnVXdTRwWmJtMjVEOUdHeHg2ekE1R1lZZmppSWJaQlFRWFlJWkQ2T3JzSk5vVkZhdjNXZk5Dekw4S1lkdjBMVVNpemJ4TEhpWG1pTTRGS2RJd1JhRmRNaE8zd0M3QVFFR0tObS9WMDlwTUNoZUR3VVhLWk9jUnpMTm1zaDJTMmxhbmN4S1dMc05VUEZnSHUrVkRNelRKdmY2RzV5VFhmTjlyVUJxZko5VzlKeGVRNGZoU1kxd1k3VjM4djRSc2ZoWnNSb1ZKb2pVUlp5aHlncHhoUmRaRHR4a2lBWGhFdUFyWlI1NEhyV0FZczNRRUpkZDBaQmwrVHNGWHJWQ1V5RXNXcXRKQkRrK1JiYUp2S0lJS1MwWm1vVUFBeWpHVUY1QW5reEh2eWR3YU5BOUwzSlFyMFRzd01KeG9HRWN6K3Z4TGhLSTZxZlphcG5HYVI5NllTR0Nlb1ZRaEY1elBMV0krbjBOVGE1SzVrdU81WEdGNmgxSExTVEhVV0kwRnVnTXN3Q0Y2TUJ5SlMrWmdlbW9HYm9XZnM5NTVycysrTDFTZHBFbXZRRm9lZ2hjOTc3TnpXQ0FsSzVYSzlCcFJsRFZWK0dqVk1BbEpYYjNXUFZnMzBJeDZleHJHOFhxZnFIdXA3cW42ZTZmUlozSEN2TFZESGhWSmJjZmtYSUV3YnFPbmJUVkJ4QkEwUW9GY1VVTFpveGRsRXE1YnZaWVZwQ2NwTWN6TXptSjJaaFpCVGpMT0RrSThFR2xPc0paMUlGZklxKzdCSnhpVnVIQUxSWWNMNXlCR3NCSG0wOWJXcWtoQ2pHUmFycTBXbksvaXlmcjdKWS9vNzFORzdudCtJRVZMZG5qTExCZWp4S0JHd3ZJN1U4Z3gvdy9SenVDcUhpeTBuVVcybUVPSVpERXpNY2NjZ3BxZ2NFZERsNkp1cW5PRlVySDN3K3pzbFBKc2xHZzVQRG1GNHZTTVlpajVVbzdkUWdGejZUUTJ5UDJFYUROQ3B0TTVKTmR0Z2s2RG96VE9rVWlvWkFUVFVCS200bnFOZVVvN0pZZS9sRW9NellHRTlKSTc1QWRlTGM5VXJubGVvN21VbzlxRDBUQUU0Wm5pQ1dvaDdUMFlaUmY5djg4L2h3QnpReEpkWXk2bE9VbDI1eXBrWkVKaTNOVDRCQ3A1QWc1emJwN2ZaOGtmczJRaHdrN09uQnZEejM3K0xJS1JFQXBzaVp3S1pRY0MweXh6TEJoTFlwYVN3K1RrcEdxVDVGcjVRcUdST2tMN3BPMnFJK2lLbEFwRytreERNM3RWalpDZVg3MVcyMzZKVlVNM1ZDOVdqVndQT2Q0bzFoTEh6T1FFSXF4djJXd3pTalN3VEE1YXFiRFlzKzRaTkNyTFVBbHdFWUlNUlpsd3NWamhwSUZ6TkVUcVlaYWNzMFFlV1NaUGM2bXhsSmhmTDczeUtzc0RTMGpZUW83SU8xM080WnBvQWlaelRiSW5HSXVvdVhGNUZjMFR6VVVNazdDVXNLMm5FK3F6OWIwZFpqZ2MyaTRyTGFzaVA1b2dKeHdkSFVXQkszVGl4QWxzMjdZTmtVaUVZYWJ4eGlFODhMWDcwZFhWaFh2dXVZZUZPWTE0VTRMbmt1RXo3Ulp6QlJaZ2hsQmVhSDBaSGF1U2hIZ05pd3pYRTBPbkVXWVl0bEZuV2R2UmdqanBXWWFBNUhOUlF4dDQzK2xwSEh6MUtOYjB0Q0FTaktNQUczR1dCcDlvMmR6ZXluQ09ZV3BxU25scmdhaFpUeDlwdFRxbzJWd0VoRDVTakxuQW5xRmp4enBPbkRpSnJWdTM0dW1ubjFhVG41dWJVN0tCSkxHc3p1enNOTFp2MzRaRGh3NlJGaVdxUmplMzRQeklFQko2a1Y3Mk1UUThTb3JHZkNQcTZaUUdKUGQwSXA0c1hBdkxSaVFRaHB0elVNbTVPSHQ4QkhscVBxVjBoczBxZ1lIZWloQjFoWE5XQ2dReUV1ZTEyM2V4M2hVaFdvMUVsNFNmRUd4SkZSblZIaEpxOGV0aHVYUVF0L0s1WEdyenBrMDBoa2hHTkF1ejYzM3l5U2R4KysyMzQ2bW5uc0pOTjkyRUF3Y080T1NwSVNUWjF1emF0WXRkY1RNV0Z4ZkpFenZWLytXNU02UmhUZFFnWjFrU1NnaFkzWXFhU2RjVnpKZTQ2bkcwZDNHUkZ1bVByaUJsU3hPQkxkY2l5ekQzdkFxUk1ZTW1seUVZRHVEc21JUGo3QXk2dlNLQ0JLbEMwRlQzRmNBUTQ0eGxZcE8wWHNJN1BhOXVrRmNERkdWY3dteW1HeHdXMjU2ZU5YajAwVWZWNUF1NVBOTHo4OWk1Y3lmaWhON3U3aTZzVGExR2tsU29yYTJ0b1ZpWlVvdm9GVjAzR1hKaGJGeDNGVjVrV3hPeURGelQwNGs1MHJNa3hkbldKTFVXMWpXcXk2cDFXY3d2TXZkc2VDRy9XaTdvaUVoSmx0cG5DSmN3NDlyNDNiNFAwZGdva2p5bmxmVE80djFrNHNKU0pLY2FVdUJsaDU4d3IzdlhPL0hvOTc2UHozN3VjN2gyeXhac1lXaHUyNzZkdENtaUxqWkhJN2R1MjQ3eDhWRk1FRWg2VWowNGN2Z0lrYy9CZTYrL0FWbDZQR0pLaWptNGZ1czdzRWdBT1hXSytjV2FjTlhxTGt6T3pxdDJaZTJhTHF4cVN5cUdVcUpYaHZpYjhYTlQ3QzdDNkY3VmdpWWFrYzdrY2VUc09iem5vNTlHY3NkdStHV2lOdHVvdWtKV0w5U1NYdlVpN3RXYTFsb29yc2c5L2FyMTYvR1AzL2c2U2ErTDkvLzJCNFJRNHVqUU1YSkRSMUdoSjU1NlVuMG5DVDFOMVVzd3FhdUhYbXh0d2FmKzVJK1FaLzNTUlBVaU03RTFGNzN2Mm9VdXFzNWpZMk9zVlduTVpuS1lwVGRHR2ZLTExQS0NmQW15bGU3MlRuTFNEdlF3dEtOTUJUWlRHQ1p6Q2JkMVl1ZnVkNUc2ZVlydTZhYmVRTURsSkxuV3h5MHpyRzZVMXZpOThKZDBobkxiVDMvNlU1VkhJcG9PRGc2cS8rV0U2M2Z2VnBKY2tEcmkxcTNiQ09rKzJya1hJUEUvZk9vb1BaZ2phMktzczl1V2hZa1lIbjZ2OXoyNGJ0c1c1ZW56MDNNNDl0cFpIQnVad0hGNjZ2enNBaFo0Ylp1ZTdlNXNWMDFubWd0d2xvWDlsV01uc2ZQNm0ycjltM1FDYkhFTXZZYU1TOFpkYnRSTFd2VjNXdHI0MkIxL2ZDZEJKQ0VJcUJRb3hyYWdwa3hlV0VzeW1heXVEQzhlaTdNakNFUnhpRFhwenIvOERMWEdncXBuT3pmMGtLbXdFeER2OGRWbVRzYWJZcXhSRmc0eGhITXM1ajVybURpaklycWsxQ3BMOUV5UkpIeE1MV2J4OHJIWE1Ndis3cU9mdkZQSmdRUmJHbTRqd29nUlRua2hHaTUvdjd6MWFYaFUwNGFNejM3K2I3aVo0V3lxRzdlaVdWMTJzbW9VS2J1VmliNS85N2YzWW5wNlZFSCswT2dFMXJPelh0L1ZKck9oSEI1VURhdlAyWVVpNUlTcjJuRDR5QkdjT2p2Ry9FdkRFVHJMU1UvU3E5bGNEaG1XZ2RQak0zaDFaQnkzL2VFbjBkWnpOUTByS1FKdUVqekM4Vml0eDcvUVMvb3lZN0FpUEd2NU4yUVdTOFV6Rm10Ui9VZXEwdGNhWGJtQTB2UDV2V1ViU3FQY3UvZkhMUENFZVN0S2I2YWgyVkg4eXc5K0FvdGhlOU03TmpCekhMajB2bTJJVkZmRWFvTElSMjc5SFR4M1lBQXZEaDdGK2ZGSnZNTEMzOXFTZ09GVDczVEttTW1VOE9HUC95bDIzL0Jlc3BPS2FvU2w5dzZ3WUdzWEdiWDBXZ2NWVWNTVy9RSTFBdzZSZU9pREY3cTcvaHRmNmZtR0NsR2Jrdm5rOUR3ZSs2OG5hR2dFc2NScUxFd3VzS1pSYTJULzlzMy9mQktSUC9zWWJyejJLbnFPN1F6WmlNYkpHeVRRS1M1TysvdmZnODJwTlhqMjRDQk9qbzFqK093WkJPM3F0bGFpSzRVUDN2b2hSa1dCalNydkszeFdCRi9lVXltMC9sSk8xUUdqN295NmtUTEVFZFhQcFRQeCs3Vjl3cDVMMnZ5RjlLVjZBVmNwd0tJRWc2clVGKy81T3ZYRUNmVzVIT201TVRiVVUwci8wRHdiWVRaRlgvaUwyM0dqaURyc3lSeUNUTVV2dzJOZjU3SE9sZVZnYlp4Sno1TjU1RlRPVVJiQVk4ODhqOTViKy9EbEwzOEp4VXlCb3BISm5PWEdKZk5XVGRYWExqRTNmOFZSNytucW5RTEw2VHI5NXAwNzA3eEEvOG9mZTZxVnI3cGN0cGtzZlBXQmIySDR0WE5FU3pteHBENFB4VHQ1TVZNbFAxdHY1TFVRdnZTdjM4VytJeWRJeXJsYnloVU1tMkdscWRBTnpKODQ2VndTVjdPVWJMNXFEWm9UUWJMOHJNcXBIei94Sko3djMxL2QzcXJ0Q2wxaXZWY1lkN2xCRHc3dTNMeHVwTnFKdSs3K0ZTZkNVeDFCZ09IMzJxbnp1T2Z2SDhDcmd5ZVV0enhLREFxcG1Gc0dPNEp3ckkzaEpEY2lWSkN0R3FFbTNQZnQ3K1A3UC9vRkRZb290Y3hTY002dUlpKzlXMGt0bWpDVE1kSXNsNHNpWFlGQlJQem1OLzVKRWZZd2M2M09IOS9ZcUJuc2U5OVRScW8zWmYwaCtkZFhvZ1JYT3hURjVOUXN2dnExZjhZWHYzZy9EaDkraldzcmJRWTNHazFQN1locXFBSlBKRW82WnNjNFdYNm5FUXpvY1R2U2pILzc3NmZ4clVmMlFnc0tseXhSTEtJcUptbzBPd1NIZFhOK1pwNnFNbjlQL2FUQ0tQQkl2Q2RJRXZidTNZc21ocVFzbkFwL1JSdjhaWWRYTzZyalFoVk1Kc2UxVTNzSGpXRHVQM2gwSHpsamI0N3cvSjMvZUF3dnZ2alNDdGVieko4Vk1wcmNna0FpOTNOS2M4Z3RUSERyV1BvbzJkQjNsWURxRm9HMXJWRjgreC91aGxaWVFIb3h6NTZ2d2xZcGg5SHo1NUN0RlBIUzhEUWVmL1psVmRRTml4c2lMSWI5eisxSFIwOFhhVnE1V29ZOGE4azRyWWJxN2xJZU5zQlFpY2YrRTV2Vzl2UXRlWTVqUHIxdzN6TS8yWWUvK3R3WDJBVWNYSWFlZWkzM2Fzb3pNMVZKQjVMQXZKUkd5aFVJSktqN3QxRXlZQm5nZWxWODJUT1EvWEFUNDRzbDNQSFhENUIrNWFseWNjT2prR0VuVHNHSEhGTmFxbG5LRFkzRlF2V2E5OS8vQUFHSWFXSEZsaW5NV25VZmpNQ2xqa3VBakVPdkVTNGVxcjl2QlBZUEh2M095Sm16MlY3T09WV0gzT1dlVXQwdjcxRm40K283aXBtaVp2blVKMlV2MjZIMjRiRjlzWFJYMVNuRFZ5R0NFazk4NXJrRGFHMWZoVlJITStHZUhtRlRLNXRzUDMvNU1HWW81RXJ2Sjd0VEZ1dmo2ZE5uc1BkL25tRy81cEcwYjJHYUJCVE1LNUlzbXlId2F5VkFWeko3UGNCWWxmczNydTIrN3lMalpEUjNyRHZFays0VXIyakw0cm1xRGVvTmI0cm5sTkhxYzAzVkl0bW0wZ2dLSHZVRWtkTXRRMU9NeFJlUVlTdmpzSlM4d0NJdVR6VnN2RHFsWHN2ODdZdS9PbzdKeFdKdDA5RldPMGt1UTlzMDQzajVsZVA0TVp0bnljMnhzUWtXL2hadWxTV1VnRlR0Q0x3Vm5qTWMzUHp3dzk5TVg5SzQ5UFRJUkx3NTFjd1YvSzBsZG1Jb0l4cWNXNlE3Q1ZFeHNCYXVDbDFOVVlDcHY0UVRxb3hRTTFmdFNrVTNGSXBLWWZkcDRNREpNVVVHM3IxN3U5SWpYenA4bk55eW9FUW9qOEJTSXRqb3dtN2NBTGxzSjNMc3lBKytjQVRQUFhzQXI1RFRpbGlVVExhaGpkS0R2elFySWRiM3JWL2J1V0lUOHFMQVRhVjZFMTdBSHVDcXBPcWRyNXErNTZqWUY2OUpXQ3F0a0JPT1VGZXBzTytxS2xEY09iQ3FXOGJadWRlNGNvc0tnVWx5aE4rcjI0a1JDK3dSWTBFRFc5ZTJrMENIOE12RFE4aVVlUTkySElHUWFJT2tlNEYycW14dFNpR1R6bDFxcjlmSSt6SzJiTitBdXo3L0NleCs1dzR1U0dYazZ1NzJkUmZhY3RHZStNaElmNXBJZHpNOWtWN1JZcWg5YUtOMjZMV1duOHB6dWFJV1FPcVdFbFZaN3p5Q1FqamF3ZkJpR1JBKzVlbU52SkNOUnZsM2l0TGRMNCtjd2VoY2prS3ZGQnJxajNydFNRaVcvMlR6YXBZV1d5Mi9wellhdFlhT0VxUkNmWHpvRlA3ODAzdllxdTFQYy9mcFpseGlYTFpCV3IvMXRqNUcwdy9sd3RWazltcGhDWGxrb3FwZHVFVzFsU3NlaTNDRFVLU0RzbDlTOWNud3dpam1KeGkrNStsQlN6MXNJMzJqREpIM0tyeWVMZDRXYlZPdjVtK1pobnNNU2Qxb1FrdmJabm85eUtYS3FjVlJNNjExNEo1cVlnMzFlRWQrY2Z3aitmVHBTKzZKWDVZR3pFK2RHRXAyWExQQTNMdWx6cjZobm1IUVZYOWx5RWFGUFA0VXRGVFhVUDIreHRLSmZJS1hzbmN0ZXdvMkFTV2J5emJFSFhuZVMvS1FHd1lrejJ5ekRHV2Rla2pBOVNzcS9FeUxPaVVSV08yZ2VyVlNzTlJrcXp6bmd0MDlmMzdndTVlejRUZHluTG5Ka3k4a096WXVzTGpmY21GcEVDRFJ5U3BFWExKa1I2ZjJTSVpCNzBtZWVacjBaR1QyUm9CeTNIbHVjWlZVdnRSQlNyYTRSTURWdk9yZXRuUUVhcWZJRUxRVWljT2dvRVQ5a25UTjBKZWVxRmd5enI5Ny9GVC9RNzlwL3E5TDRPWW1UN3pRMHJINWtLbHJ0L0NDUVduajZ6SkFoU1RhWkhQcXFYcFc3Y0VVUTVFdXVyYVpMRnRaOG9pSHFaZlV3MjVxaDVUcW1HN0pQcnFsT25IeGRya3NYTFg2UkpMUGNQZGRlVTZzaGVFWFV2SzZlcUtpK2pnRmliNTJ4L2pwZmQ5OXZibGZFVHVkblJnYWF1M1k5QVBaNnVJTkVzdTl1THpXMVBGSDBUWWZqUTdhWW5pNTNHaTBURWM5a0NQU2pmcUsyMWRDRGhUYjhYeUZwT0pGS1o5bFFVNldGWlBkaEZIVFJmaTdFVzZxM0RBeHZPK0ZLNW4zRlZQdm1ZbWg5T3prOFlkYjJxL1JmTFc5N0t2VnJMT1ZlcVBZMERScU9WSU5YN05LZHowUmswenUwamhxbDBhdkVRT3Z0dkdpVjJtSDBrWExSR0dMKzNleWsxdjFtUGF3NWJoM2pJMzBUMXpwbkRXOGlaSGEwWmN5WGVjUjNyUlhiaXcxVDFQUDYxVU5WZ0N3N01xZVRKaE5YMjdoSEVud0F2WFprZ3BwdzZ0V29nYWRVL1dtQ2lEQ1VseWRjbjdITmYyK2E5NTk3dVQvRCtJTmpqZGxYSDFjL1k3YmVqbXJ1NWlIZmZYSEUrc1RWWWJXUkJ4WENMSG9JdFF0Qy9tVERNOGlDNjg4UkxEU09PVmxRcnl3SDkvdytrbkE3eXVtWi9yeEpzZGJNcTQrTm0yNkplWGJWaCszcXo3QnZObXhYSXNSajNxYW94RFU1Q1pKZnZFc0pmaU1ZaG4xd2l5c3A4cUVSQkhROXBOOVA1U1dqYjYzT040VzQ1YVBGQTFsRXUzZ3JNV3IyMGtDRXBycHB4aG9DVU1rQ2FwZDZma3phYzlaVEd1R09jZ0puQ0ZJTU9RcWo3OGRCaTBmdndZOXpkdWdXamFHSkFBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURjQUFBQTNDQVlBQUFDbzI5SkdBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJuUVUxQkFBQ3hqd3Y4WVFVQUFCdTJTVVJCVkhnQnRWcDVkRngzZWIxdm0xWExTQnF0SHNtU0xIbEpIQzhoaXhPU1dHWW5DY1FoWVR1bkxENXBvZEJ5RXY5VnV0QTQ1N1FsWFE0NExSUk9Td2tjT0JBb1lGUEtDUWtrdGdtUVFCeGJqcDNZc21WcHRJNldrV2JSN1BPVzN1ODNzcE5BeUViNmt2Rm9adDY4OS91Mis5M3Yva2JENjN3Y09IQW9Fb2F4MnpEMHJWWEQ2OVUwYlp2bWVSSFBSUVRRNEZZcnFHWlM2WlhwMmJpV3k2VXJUblhZODl3amNEQzhaLysrT0Y3SFE4UHJjSWhCSVZPL2s0c2NzbXhucURLM2dHSStqMUJ6QzN6UktHeURSc21KL01mamY2N25RWGNkbEpkVEtNM09vWmhaZ3U0Qmp1WU1lNjc3OVlwYlBmaUovZmZHOFFjZWY1QnhEeDc0NlpCaG1IZnp6eUhYYzJBdkpHRW41cUJYYkY3WlFOVnhvZnQ4OE1XNllOQklUOWVoMFFneHp0TTAvdTNDNEtNWUgwTm1jb2JCczBFSHdlVkoxV3IxWUJuNmZYdS9jTzlodk1iak5SbjM4SUdIdHdIbTU2RnJRMnFoZkc5bGFSNW5mL01FVE52QllFYzNmQzZONDlXZGNBaWg3aGlxbGgrYUdNZHpmVDZMUnZEbXBTSld4cytodXJUQ3FMazB6WWJyT1B4QVE4WHdJYnltR3cyeG5zT2VyZTI1OVlPNzRuaVZ4NnN5N3Y2NzdvbzArQ0ozaHdiVzN4VnM2NEJybXJ5QXBpNnlzRENIekVxYWl5dkRUV2F4cnEwZGxYQVFPUnBScUZheGxFb2ltVnlBTHhEQTJyWTFhTFFaMVZRV2V0VkJsZEdxMGxwYnMxR0Zqa0JzTGVwNGZmanBFTDZXWkhZMTdMdjF0cDMzdkpyMXZtTGpEdHoxYVlLRGNjaXdmTDJXTHdDOU9RSzlyUTBGMWs1bUpZZlV5Z29zdjhXL2x6R1RtSUdma2FwbjFDcU16a0l5aWRGNEhBRit6K0l0TFVQSHBtZ0h0dmFzUTRNdnBOSzBJR0RUM0FpanF4T1dHV1R3TkxHSlpVb244RE9ubUVkeFppcGVUTTN0Mm5Qdkt3T2VWMlRjUTEvNTFtNTdiUFQrb0c1RnFwYUJzNHpDcWFrNENwNE5SOWV3dUx3TW0vWEZOSVhKOHp0WVl5UG56c05nVkRxaXJiQlpqNkZnQ0hhcGdvRzJMbXp2NmNlVHA1OUdRMzBkM256WjFkQWJtK0YydGNHbDhYSVpWK3FPZjdpTWVLVmNRSDVxQm1WRzNaRFBOS1FkM2R1ejU3Ti9kZkRsMW0yODNBbVAvZXl4Ty8zTnpWOXI2bDBYbU1zczRQNkgveGNQSDNzS2M5a1U2aUtOQ0lYRGNMaVFLZzBKaFVLTTBoTEd4K0xJNTFhd1pldFc2THFCcWVrWkZFcGxwTElaTEtmU3NGMFhiNzdpalpndkZPSHI3VWIzOXEzUVFnSFdJc0hINzJQa0xQaHBZSm5meTU4Zmc1SEx3MkFrSmNLR1lRUTB3L2pBKzIvNVVPWjdEeDk0QXE4MWNzZWZPSHFuNStyN0xkT0g1ZVFpL3U0ZjdzSFpTYVpYMEkvdGwxMUdMN3RJTGkxamJtNGVBWCtBcWFSamtTblkxQlJCcExHdWRuVlhWKzlYQ0RRclRGMkRvS0x6WVRIWkJnWUdFWW0yNEpNZit6ak1nQjhPMDlCZmNwQWpjdVltWjRGU2lVbXBzUlpkbEd3Ylpic0tyNjRSdnE1MitPb2FZT3ZhM2h0dnZuYi9xemJ1MS92K1pYZHdYZjhCLzdwMThQd212dkNsKy9DelJ3K2hxYVVaOVhWaGhKbFNJMmZQSXA4djhHeGRRYmdzM0dCcWhobkJVSDBZNVhJRnR1MnEyelEwTktyWHVWeU9rU1lxMGpHbVljQ3lmUGpvUi9mZzlwdmVCWStvV1J5ZmdjdHJTcHBMUzVCbmNZeERoM3B0VFFnMFJWR1J0SFhaTGxqdi9Qald0OTk0OVl1bTZJdW01ZkhQZnI3WForb1Arb3FsZ0xHNGhPWEZPWHp4Z1c4UnlnMzByRm1EbnA1dVRJekhrVnhlNGtMWmtKa3lFbzA2R3JXMmV3MzhoUHBpdmxocnpFUUZrM1VxS1ZzdWwxRW9GUGdkQndhUlZscUk0OW9ZR1RrTGZUbUxqY0VtV1B4TU55d2E3cU9qRExnMHlyY3VCdjlBTC95TkpEbVdxZEtXeVlDQS9GTW92dU9XalZkOTV6dUhmNXorYlR2TUZ6T095WDhvWk9rUnd5QVVrMTBrenA1RHNaUWpHdm94bDV6RDVNd0VUQnBWejlkczR1aHFhOFd1YTY3R2hyNWVXUFRvRWdGbUlqR0w4ZGxGekdmU3lCRkliTkl1bjg5QW1BaTZRblIxbUdaU2ozSlUrZG0zZi9ZVFZISUYvTkhRVFh6ZllaOHpFT2lNd3Q4azZTZE9ZSHBLZGtnZjlJaTQyUko3WkJ6bHhXUWs0Tk1QSGRqMytlMjM3dHViZmtualJrNk0zRzJzclBScVpCdkdjb2ExNFNIQVl2ZFl6RVV1TWhCMHNJNlJ1NFNQMXBZVzlLN3RaZTMwbzZXdEdaNWJoWlBOd3Nua2NmWlpBMnVaaWs5UHhIRnNiQUx4K1hrVkRUSElaTlNxVlVsTld3QkNlQW0vYStPQlh4eENxSzRPdDcvdmZRaEY2OW40TFVnaEd2eGNrelNtWFNnVFFlTUpGT2VUOEJGTmRWNnpxdG05cGhrVXByVDM5NmJsNmVPbmV3MmZjVkNqZDgzMmRoak56ZXFpQnIxODdPd0lFdWtVS3BVeWJyN3hiZml6T3orSlN5L2RpSzd1ZG9RYkc0a0U3RTFjcU83UXpheXR1bUNZYWVxRHg2ak1FQ0ZYU2xYa0NSQlNROUwyeFNqcFpZNWlKSVl5MmlJb25ZeVA0NHBkTjZDbG8wM1ZyOG5VMCtTWmFLeE5KMUVkbllXZUxhald6aFBVdWdWRjNhQnZ4OGMvOVpjLy9PcTMvblB1Z2ozNjg0MnI4NXYzbTVMVDlKaG02WEJid3JDM0RxQnQ2RHBjdjJzbkY2RGhMVzk1Q3o3MjU1K0NGd2pEcTYrSEhtRWQxRGRDQ3pmQXMwSjgrS0FGQTJ3VFRRU2VSbFZuclkxTmlQQzFvWnNxQThTZ1NxV2krcG11S0ptbTZGaWh5RlJqVFg3aGkvK3VhSmg4cGt2TlRpL0JmWG9jeHZ3eWZBSkNyR2svMjRhZnRlZldCVkYzMlFZMFhYVUZyS2E2enovZm5vdkduZnZTTjRiY295ZUhBak1McW00TUlUNWFEY2FkaGhEYWV2dWxSK09QLytRTzNvNkd5eG02bjFmdzhTRm82YWpVOGt3aUppTlFvVkhTRm15bWxhQm5rUFVwQ3hMd2tZZ3gwVkFsa3RxOGwwTWo1VkcxeXpXQUdSM0IwVjg5RG8wMTY1NGFoemEzeEQ1SDYrbHdrOWZYV2J0ZW5SL1dobTVFcnRvQ2l3VEFJRHZ5bWNiUWs0K2RIdm9kNHdLR2ZxZkJSdXVPVGtCL2FnUm1namt0L0UvK280SDliQW50N1cwWUhCZ0ExTkpxWHhmajFVRERkTlVZRFowcDdMSTJjK2swWm1abkVBb0lCV05FcEJiNW1YeFBVK2lxcWNsQUdzV0ZhTXF6WWwxTTNZZStmeERHWEpvQXdqVXcvVXcrTkVsRDhsVmpmVGVDVjZ5SEdZdENaNXNTT3NjeUppcHJDTUs1K3dYR2pYLzd3Vjc2ZTdjMFZsTVNvWmlEZm5ZTTFXT25ZTkpyT20rdzhaSk51T09PTzRUK3FFTmd2R1loejJjOWVOVXlQRFpabHhGenlpVVUrWWdRdW50aWF4QmovYmgyUmFXb05INTVDSmFybEJRRCtkcXJzUS8xMnViZko4Yk9Jc2RyaW5QRllpMU1QdHZiQWQvV2ZtaWRUZENZbXFiVXFXUUtqUXBJK2s0bVVIN3kyTkR4ZmZkSExocm4zNzUrdDNIbFZsU2pSRHplUUdZc1diNHZWd0ZPVFFDUG42RVhsM0hiTGJ1aGl1UGlMTUJGVllyUThobG9oYkl5VXBwMmlVMWFYMDNEQ2dsdlYzTURydCsybVdTYTZXU29iNmswMUZiN1l5MWl6LzB0UjVGSU9EVTlpekpUMGV0dmgzYnBXbWhkNUtDbXBzcEQzWjdSOGhPUHpQRUZWSC85RERTeUdoL0x3L1ZYN3JyWUNoeS8rUkdQY0c4Mlh3SWtVM0FtNW9GTURpYnJRUmMyVU1nQlp3cnc2RDJ2bzVFTHFDcjBjbGxUS2RLeFIzLzVCTVlUQzFqTzVyQzB0RVN3ckxLZkJSRGpnRG9ZNjBRSEovSTM5UFlobHkvaHA4TW51SEJYcGJMcmFyVWFsQlN0NVlJeWtFaURDaWxYTXF4aDAyVzlFQUNXTHFEVlRsR3Bpekt6aFVCVElVWm96QktmakVYc3VhYTBEdzg3bFhHSjArTzk1QXZiZERaR1Y3NUZpcU0xMVVOYnpLSThsWUNWeXFtT0lVekRjMHJJeHhlaDVaYTUrRENLUzJsOC85c1A0Tm1wV1N5c0ZKRWd0ZEo0blFCbnRySW50SWxwUWxiZlFhN1pTdHEya3dTNXhNOGZPWDZDOVZmbHVZNnFPMDgxY3hyc1hxaGswaTZhbjZCVVVkVnFPVkpEVkU4Tnc5N3NFcW9zRnpOUFlrQUs1cktWZUpLOWRKSWRzbURFNm9lT0h6OGVNZDNqcDdmNWVqc1prVllpbmFHSXJrdUlkYnBhWU5KUWovRHJUaVRna2VWLzlWOC9oL2owSlBxYkdyRno1dzFZdjJzWE52VDJJazd2WlFuaExxTVo2K2hDWTMxSWtXbFpWVE1iZVgyb2ptMG16S0hWUVQvNzUxTnNGVXZaQ2hGUVYzdzAxa0tpemZQT3p5Mml3S2hMaXhCRGk4V2ltamdrWllXWm1QTUVwU25LR0V4WlMrcDBOZG9TRTQwUmMzdmFPZWkyZ2xlV090NXRHcG1sSWUvcEZPenhCdWlEM2REYVd4VVdTZ280a2lLa1FGb0hvOG1hYTNvbWd2LzU1YTl4K09ScDVPcWJNZkNlMjNINXppR2NKdjhzVkVxNDVZMDNvSC85SUNuYUF2SmNUSGVzQjIyczR3SWptbWRrUzJ6dUFaOUpROEpJNTFZVWQyeUxOS0NudllPQ2tZY3RhN3Z4eTlPanFubXpyMkI2WWhLSjg1T29MMWJoVCtVUktMdXEvNm9SbHVmb0RKZmo0M05YSy94ZEpOU0dWbk1HMncvcmJadkpTRzhWUnE5ekhOR09ud1phU0pQV2RzR05SbmdCbzRhTGNpOSsrZXAzNzhiano0eGdvTFVKMTkxOEkvU3lqVkJYRis3WSswbWtxV0xWKzRMTStTQzZDYzBPdlF0cDFwa01xa1RKK1dYeXpQUXlza1RpSmpLZ0JNSEdsTkdIYUxkU3lHUEw0QVlzTGlaVlA2dGhpb2ZUcDA3Z3Y1Z3BIVllZRzNpZm5wWU90SkFNQ1BzaFF3QjYybURTOFE0ZFZ2RTBCWGJpRjBsQS90K3JUWDNyUjhmTmRIYWJ0R1hYa09aTjNzZkZlVXdWcTY4YkxnZFNWeFU4YTRFb1dKbzVEem9Mb2Y1Qk9Jd1daeDRTYmFZQmExQmpQWkFWSy83bjBmQXlaOENWVkFyVFhQUTRWYkdKeFVVc0VLZ1dDVkR6L0t5N3RaTkJZQ09uSTNyYk94RmthajF3NU9jS0dJUlBEclpIMGNBRzVvaTEvTCtkcWIxcDdRQzJYSHNET3JaZWdrQzBvU1pIVkdYOElicXo1eGxjZzB0T1hKMUl4RTE5eCtaZWR6RUQrK3dFREhyWk5RampBaTRrenU0QzZ5M0tNV1JkTHp5eWM0ZEcxNjBicEZ2TVdxR1hxRnE1Yk54VWdZU1ZDRHVCVURmcDZha1ZGR2o0SklXakJHODJ4UWw5SnJWTTR6S29jQ0U5ck0zTmZRTVlJN0cybVNGeWJudDNqMm9UT28wSjhscCtBa1dSVGxJNkp3Zm1Bcm51WW1jbnp0QjVDeVBqaU14RjBOSFpTdHBXaEVoSnJhSzJUUzhRM1RtNU8xN0V0RFdPTmt3elF3UWZHbFBoR0dIbGlweXIySXVZSXVaaUNpNVIwV21Md0NSTE1WcnJpWncwekJZQUlhdG54THo1SmZZNFNVTzVPcGRYTEZNdktYSEJCV1E1eGlTelltUVNjMVRITXV4N05yL1hWZCtFK2RscEZGZXk2R3FKNHZMQlRSaWRueVY2S3RtVzQxU1FTTXNwZzA1c1d4TkRFNDJ5L0NIa3k0eDhjZ2FwOUFMcXlHZm5PVm81eVhuNDJaYTBqaGpCckU0UmVFMDNJMnBpbEhTVjV1aXRvVUpNSTl5WmVWUUo3enI3a2laTmdDZm9TV29mNlpNd3I2ZGtTYUNlZi9wcEJsQ01yQ0I3Ymh4OTczd3JDWE5ZVGVRQzhWV21iRlVFSGtZcHlmNlhMb3FoZWRaWFRqR0xiSDRGTFlFb1ByejdWc1RJWkE0ZEc4YjNIenVDQzZPS1ArQlRpbldrZzBheGpqWGRValZGdVJjNTFxMmYyWk9NbjBkbWFrcU5QcTNoZWpSUmNRdjVPTndHTEdZRDJaYkZmcUcxdHlqbUlNaGhrOVpvZld0Z3J1bUFQVUZQaXBaUlppUUZtYmh3RVd4K2RmZ24rTjVQSHNIWVFocEJGdk5WNUp1ZitlQjdWYU9WdlFCRDBzalFsZHBzVUJzUkpTUkhZM1hUVUJPSGNOVWxwdWNnVWRManRULzNuUWR4NU5TSTZubmk2WTd1THNUVzlzQWdRSG1HY0ZCSFNYd1NVK0c3dWNRa3hpa2VhZVRDOGhYdVN5Qm5GMUY1NWpqbnpUQzYxcmZCVDFKdDJvOGZTeVBhR1BGZnNwNnAxM1NSU1FzQ2VSdDZpSnp0cU5MQTh0Z01Bc0w2T1J4dXVmVTIvUE1QZmdTdG9ZN2NNWWJyMy9GMlZKaTZKZVorZ0dOTmxTcFhtVGZPTWpXbjV1WndmbktDdE14V2ZjdGpKRXRPRlkxMUFVNEJGVHgyNmpoR1ptWVZoRXYvNmVqb1FIZDNON1BDZ3FVbUNFTzFESVBBc3pReGhoVU92VmJWVmdCWEkrMjE1aTZUK2dLTlBFYTBDM0RHak5hSDA0U2lTdHBMTGtSS2oyZWdzOGRaRy9zQk1oUlhNMVdUZFlOazRSdjZZYkVIMmVlblVDREtQWExrR0JhcEZxL3JJZENRSVR4MDVCRk1UMCtnSWhvbWMvOWQxKzFnMmxpWUpUcE9FU2xsU00wSVdLRkdrbTAxSFhpb28wSW0wNER0S0hLRjFsYjJ6b0YxcTlHbFFZeTB4czh5Uk5wME1nR05KTUJrWkcyanR1ZEFOaTVoUXdOckxiWitBMEtSWnE1Qng1UEhUbURicFp2anBxUGJ3NXJteVNyaExjNFM1UllBTW5sQlNKUERxS09ycThEaFZLMXY2VWY4a1RFY2UrSUpiR1l0dEpGNVBNdEdXK1VDamo1ekZrVkd4S1ZESnFZbThlNGJkbUlzTVk5empFcWU2R1Y3TlpadVNlODBQVFFTaUN4bWgwWVFLbkpjNnVKTXRxNS9yUnF1cGRjWjVLOXBNcCtWcFNUOVgrSHlYTlVYWGEvbUlHbG9qWjN0NkZxM0h1R21Gb1dtcmhxZ0hPU3JCUXlmT1prMnJXdnlFMUlmaXNKb3RXa0FIaEd5ZUliazFhanhUWkVGTkJsTVRUdzcrbk1LckNYME5VY1JhKzNGbXkrL0ZrOE5IOFY4bFNTQXJML0VHNWZvMFNmT25FSXFYeWJOeWxCN0thbTAwNWxxT2owZEpNdUlVQjdVYW5ERndwZDBGTVZzV2trSElsV1VLZGdLcTJkclk4UFdsTXhIY3N1TWdOcFFpUkFuZkhSNHlXWEtaK2JZdUMwMXo0bENaeEZzc292MkNkTU5yUXdMV1pFdjBJM0tJNkpwcUh6bXhUVDJNWVZSR2tWWE5HTEh0UnZ3N0pOVCtNUUg3a0NTUmMzMVlzc2x1NUZndWhiWTk1NmRuTUlvWVQvRHZsV2tidUxqelJ5ZVZCZWttc1dHckdZMjFraTlESjI4cGV6anhUcnIyWWp6aWl3TEtzazVabGhrQmxlR2J6cUUzNU9KbndaYVFyc3NZU1JzMUVYdVQvQ2F0dEkvdWF0azEyVEdNczh4ZFBjd0JTWGZRYjU5ditMZHE0Tm83Y210R1VVYTZua2swdFphUXV4bXRNYjh1UDZHTW1IYWo0WEpMTnlzaTNidXp2UnVHbURhVUpCdGJjUHk0MGR4Zm5aS09TakU1bTR4SVFSQVJJVXVVeWNSeVNGRVdjQlZXa29WUWU0ak9Od2RFcU1GSEdRUzE0d2FCZk1VWUxneUJTbS9lOHdlVzgyQ2FveFZKTnRRYzBSdHdyOWdoRzdwdzJiZjluM3BxZU4vYzlqejdLRWF4NnJwRzBvQVVDTkpETDdnRmtMNmdFckxZTVJGMzRaTG9WT1lhYUZnR28yMUlVeHkzTXpOanp4Qkp0d2c2ZWtqSzBtcERGZXFzZ2lvbHFGYVJGMG9xSXdUY2l4ellaYXBTNGJLOFloYUpDTVNaT3ZRV1I3RkVrVWhJUkpTS1laRXhGUGFqU3pSdXpDc2V1b2pwZWpvZ2czZXFwSFFodSs5OThHNEdsWnQxejdDRDJ2RzBVV2FVcWs0MXZ1dWhFbkRCSkU4anpmMUhGVXpUZTFkMUVVeWFHcHVWY0tNUE02UGpwRktUZUZYVHczak4yZEd1T2lpS3Z3Z0M3MjVQa0NEZkdvL1FSQlFVa2RGeUsxdElWdFUwazZlT1U4SCtOSFdGc1g2L241MGRzWXdPallzVUthY0l0ZlNWemN2bGZOWDV6elZCbVRkd3BhWXZqcjdJb1hrcjErY3hLRUg5cnR1L203ZHM1WGRudFlPZitnNlZuT25HaDFsdE5Db0FzdEFLQmViR0IrRHN6eVBtWmxFYmErYk5UWEZPbnZzK05PWW84UXVld0tDYXVMSElFbDFNL3Roa0FPc3lPd0Mrd0w4WW1RcVZ5Sm8wZStzbGFwd1NEYm9DdG5HU2ltUDFyWWVyQi9jampQbmppbzFRRk5SRWJWTUpvbWFWbm14aHRpT05NTlVuMHRmcEtKMjhLSnhrcHFqeC9ZZXBpdUhvQThnVU1jZytzaTRQV00xajcxVk9hNlcxeTZqY1BEUncyUUpjL1I2U0VIOUNoRnhnWXFYVUNSUmxOVkV6aHRHT042RXlSUDlUTlVMVzh6aStSbWV1MXdvRWNhYnFZeVZGR3NwVXk1WXBoVGYxZDJKQWgzVTB0U0Z2cjV0bUp4NFdzMTdIcU1qaTY4aHI2R0FodVYwTVlxcW5ibjZEL2YvMjBQeDV5SW43enZlUGE0MU1CUnNlQ3RISEthUGQwR01mczZ3QzhmR1N6WWoydFdORTVRQmMra1Y1TWs4bE16bjFWaURwTGEwc3pyeXcxYXEwWUtNY3ZjU0Y1Zm11U3RGUnBicFhjZEIxZUY3d2xRYUd1czVMV2xLMGZaeDBSM1JOdlIyOTNLd0piOXNpT0E4VTdSYXpLcnhTT0JlSkFXWDJXU3NpbFdxRC9KN1ZLd3VibW05WUF0cmJ1ek1JZGNJRDhubWh3Uk10RVZOZnc2QkxoNnI3T0RoQjMrTUh4NzhFWmE1UjFkaTVFSitNYVllSjg2T3FvM0VuczRPdERJeUJzRWtTOTF5bGxIUlNHekQzQThRblVXY0pzK3pDd3RZb1Bidk9WS0xGYnp2dHZmZ3ZiZmRyZ2oyeUpsek9EMHlRbUFwNEJ4VE5KdFBNRE1zeFdLa1pWakNWNlUzNnFxRkhMN3ZTNC9zdXJETUYrd1YzSFhYcDArUXhQMnB0cW9LcTRldTQzY09zWlh2OXc5dXhJNDNiS0ttc1lJUHZmZFduRGw5Qm8waEVsZHVrSWhqUkVUS3NCbFBKNWV4ekFsREpQWUd5dS9pYVVsZFM2US9zbzhsN2lXSWxtbUo0VVRUdi83MFg2Q1JvbEtSMzExTXpDdm50alMzVTVKdlVXbVo0VVF2NlhoQjk1VDFDUHBXTlcvWDBhUHhpenM5TDFoNXJDODJ6UFB1VStmTEovckxiWm03bUJrZjVVWmtJNEhEaDF0dWZqdVNuTmVtVW1RbDVJR3ozS3FhcDFaaWNjR05uQmVsSndsNWxyMDVrZitLN0hsTGpMcWtncExKaWV1WGI5K0dDSjNqY3FKT2tuVG5DeW51N2Ztd2FjTjZYUEdHYTZpZDdzR09LOS9FWmkvWHFOUUFTcVJBRi9kOCtjdUg0ODlmM2UrRXBXeTcrM2l6dVBxZGlQYlN4b2tnZStUSVk3anB0ZytvVGYxbVJ1WHR1NjdGSlpzM3NBK0dGRVRMenFuc3BNcW1vN2NLNlhteUVua3RVWlAwa2tlUUJGMTY2enR2ZkljcUJRR3BQTThSVVVrNHBUaTdnMXd5eGozMGQrLytNTFp1dVY3QWd6WG95czVSL0QrK2NuamZiNi92ZDR6cjYrdExleFZuRjlNcS9WS0dTYzljbkI1bHNkZkR4NG5ZRjZoRExwTlNFbDJRa0IrbEpCRG1ndlZWYm5waEdoRERaSWhWKzMyTW9qaXdnVFVvQnF6aHVQT0d5eTlIaGVtNE5EOUh3WWdETXlOcXNqLzZ1WmtTSUIrMUFxYmFMOXl3Y1l1cWZlN3Nwc3NyenE0WFhlT0x2ZG5aMXhjbmt1L0JTMFVOVlp4OTVoUjJYSFd0Mmo4SWN3TmVoQnhaZUZSQVJOZVZuR0F6YXJKSElNWUk2TWdoRVZOOFk3V2VCUUVEWkMxYnQyMVRyMlcvTzV0ZHVhaGJOdEpoZmlFTHhuTVUwZThMWS9UTUlpemIyUFBBd1NmaXI5ZzRPZHJiMXh6VWJXZnZpeHNHR25ZU0R6MzZHQWEyWDZWKzVST2s5MjNXV1h4bUdpV2J5RW52U20rUTM1T0ljUkkxZVRpcisyN3l2bW41bEJNYXFXTkdDU0EzM1hTamFnMGxScTdFWWJkSURTVVFFTGxRWDFWZU5kVjd4VkdOamMxWVRwWDNmdlBnNDcvMzl5Z21YdUpvNllydFg1eWJGV0I1d2FhZW9KTnNJYi83MXR0SnZZSXFZc0dtS0RvNWxSOC9keGFKcFJSU21aTGlobEx3RjNaeUxteDBpTEYxZElhazc3b1k5OWlhNjNIYmU5K1BGcXJSbWVVMFVtUTV5NmtsaFlqaVNyOWZkQkcvMGpPRlZNdDEycUt0ZStPSnhQNlhXdjlMR2lkSGEwZlgvdVQ4VEp4Ni92Mjh1dG9hRXZheDVZcHI2T1V5YWovRW9MV01RaHNYR3V1S0ljVWRuM0l5aDVWOHJpWStrUjZKUUd1dTdvcktGQ0EvYnR2WVA4QXQ2QnZSdjNHd05zWlFOWlBGcDBpNlpTOGh5S2paM0pDTWNsL1FNR3UvQVNQWXBFazQ5Z3h1M2Z5eXZ5RFM4UXFPS0ZQVXRyM3RkRnk4OWs2TlJCazA2TUlyZ1RNL2dhV1JTbGFCdENwTGNWYU1FaVA4Yk5TQ2huNzJNWm0vUkkzdWFJM2lzdlVENUpBdHlMRmxsQ2duVm9tTVJVcnZZVkk2UDBGRVdzMDY2cVMrb0Y4aEtCTWc3dXJ1OWpVOWZTOXJtQnd2RzdrTFIyZG5aNXhQZll2emlYMmNydTRXejRxQUk3S0NMcjhwa2ZHZnZvcTJ0TlZtTVBFY0dZWXdmMkVoa2xxVmNrVU5sVzNjMm1ybFJISG95S1A0cC92MlkvdVZPM0ROam1zdzJOOUhZYWttSW9seDlRMUJOdTZvb25WTXlmdnlSV2Vmb1BrclhmTnIrcjFsSXBIby9jZlBmUHIrTjExMzlkQXlOeWR1WnUwSitqbVU5YzZmT29rRFAvNFJ4aVpua001a0ZZZ0lUUkpna0JqSDJLdWFHNXZJL2wwY09QQUR4VXpLZG0xL29DZldnWGUrODIxWXU2YUxqS1FGRzladlFuMVQ1TEJ1V0h0amZYM0RlSlhISzQ3Yzg0L1ZLTzVxajlRUFpYWC9uVGZCMnkzdkc2eWJydTRZaHE1bWU3Qi9nWE95VDI2R1ZhK1RXVTZvVllqYlYrc3BvMy9qdS84TjJWb1E3Y05UdjBSeE1FMlY2MnZmK0NhdXV2Skt2R1huRFljNzI3cnV1ZlRLcXc3ak5SNnZ5MitjSlpLbVJnTTFmSVFnc3kyZlNXUHFmQnhQblJ4V01rS2VsRXhORGRJZGFmQ0dnY3Z3dDUvOWUvVURBR0h6Tm8xZkU2bWpDbFk5bkM5VmorUktwZjNwZFBvVnB4LytQNDE3L3BGSWpQZFMxOWxXclRoRGhWUjJxMmZia2NUOFF1LzA5R1JrY1hHTytuNFFvNVB6Nlc5Kzl6dHBHamJNdEp5Z3RqOGNLSlVPeGw4SGc1NS8vQitNbUhZZGVuZnk1UUFBQUFCSlJVNUVya0pnZ2c9PVwiIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQmFzZUFjY29yZGlvbiB9IGZyb20gJy4vYmFzZS1hY2NvcmRpb24nO1xyXG5pbXBvcnQge1xyXG4gIEFjY29yZGlvbkJ1dHRvbixcclxuICBBY2NvcmRpb25JdGVtLFxyXG4gIEFjY29yZGlvbkNvbnRlbnRzLFxyXG4gIHNpbmdsZSxcclxuICBwcmV2ZW50Q2xvc2UsXHJcbiAgY29tYmluZVJlZHVjZXJzLFxyXG59IGZyb20gJy4vc2hhcmVkJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFjY29yZGlvbih7IGl0ZW1zLCAuLi5wcm9wcyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCYXNlQWNjb3JkaW9uXHJcbiAgICAgIHN0YXRlUmVkdWNlcj17Y29tYmluZVJlZHVjZXJzKHNpbmdsZSwgcHJldmVudENsb3NlKX1cclxuICAgICAgey4uLnByb3BzfVxyXG4gICAgPlxyXG4gICAgICB7KHsgb3BlbkluZGV4ZXMsIGhhbmRsZUl0ZW1DbGljayB9KSA9PiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIHtpdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxBY2NvcmRpb25JdGVtXHJcbiAgICAgICAgICAgICAga2V5PXtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgIGlzT3Blbj17b3BlbkluZGV4ZXMuaW5jbHVkZXMoaW5kZXgpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPEFjY29yZGlvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVJdGVtQ2xpY2soaW5kZXgpfT5cclxuICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17b3BlbkluZGV4ZXMuaW5jbHVkZXMoaW5kZXgpID8gJ29wZW4nIDogJ2Nsb3NlZCd9XHJcbiAgICAgICAgICAgICAgICA+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAge2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgPC9BY2NvcmRpb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgPEFjY29yZGlvbkNvbnRlbnRzIGlzT3Blbj17b3BlbkluZGV4ZXMuaW5jbHVkZXMoaW5kZXgpfT5cclxuICAgICAgICAgICAgICAgIHtpdGVtLmNvbnRlbnRzfVxyXG4gICAgICAgICAgICAgIDwvQWNjb3JkaW9uQ29udGVudHM+XHJcbiAgICAgICAgICAgIDwvQWNjb3JkaW9uSXRlbT5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG4gICAgPC9CYXNlQWNjb3JkaW9uPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIEJhc2VBY2NvcmRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBzdGF0ZVJlZHVjZXI6IChzdGF0ZSwgY2hhbmdlcykgPT4gY2hhbmdlcyxcclxuICAgIG9uU3RhdGVDaGFuZ2U6ICgpID0+IHt9LFxyXG4gIH07XHJcbiAgc3RhdGUgPSB7IG9wZW5JbmRleGVzOiBbMF0gfTtcclxuICBnZXRTdGF0ZShzdGF0ZSA9IHRoaXMuc3RhdGUpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG9wZW5JbmRleGVzOlxyXG4gICAgICAgIHRoaXMucHJvcHMub3BlbkluZGV4ZXMgPT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgPyBzdGF0ZS5vcGVuSW5kZXhlc1xyXG4gICAgICAgICAgOiB0aGlzLnByb3BzLm9wZW5JbmRleGVzLFxyXG4gICAgfTtcclxuICB9XHJcbiAgaW50ZXJuYWxTZXRTdGF0ZShjaGFuZ2VzLCBjYWxsYmFjayA9ICgpID0+IHt9KSB7XHJcbiAgICBsZXQgYWxsQ2hhbmdlcztcclxuICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgIChzdGF0ZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGFjdHVhbFN0YXRlID0gdGhpcy5nZXRTdGF0ZShzdGF0ZSk7XHJcbiAgICAgICAgY29uc3QgY2hhbmdlc09iamVjdCA9XHJcbiAgICAgICAgICB0eXBlb2YgY2hhbmdlcyA9PT0gJ2Z1bmN0aW9uJyA/IGNoYW5nZXMoYWN0dWFsU3RhdGUpIDogY2hhbmdlcztcclxuICAgICAgICBhbGxDaGFuZ2VzID0gdGhpcy5wcm9wcy5zdGF0ZVJlZHVjZXIoYWN0dWFsU3RhdGUsIGNoYW5nZXNPYmplY3QpO1xyXG4gICAgICAgIHJldHVybiBhbGxDaGFuZ2VzO1xyXG4gICAgICB9LFxyXG4gICAgICAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vblN0YXRlQ2hhbmdlKGFsbENoYW5nZXMpO1xyXG4gICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG4gIGhhbmRsZUl0ZW1DbGljayA9IChpbmRleCkgPT4ge1xyXG4gICAgdGhpcy5pbnRlcm5hbFNldFN0YXRlKChzdGF0ZSkgPT4ge1xyXG4gICAgICBjb25zdCBjbG9zaW5nID0gc3RhdGUub3BlbkluZGV4ZXMuaW5jbHVkZXMoaW5kZXgpO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IGNsb3NpbmcgPyAnY2xvc2luZycgOiAnb3BlbmluZycsXHJcbiAgICAgICAgb3BlbkluZGV4ZXM6IGNsb3NpbmdcclxuICAgICAgICAgID8gc3RhdGUub3BlbkluZGV4ZXMuZmlsdGVyKChpKSA9PiBpICE9PSBpbmRleClcclxuICAgICAgICAgIDogWy4uLnN0YXRlLm9wZW5JbmRleGVzLCBpbmRleF0sXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICAgIGNvbnNvbGUubG9nKCdjbGlja2VkJyk7XHJcbiAgfTtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbih7XHJcbiAgICAgIG9wZW5JbmRleGVzOiB0aGlzLmdldFN0YXRlKCkub3BlbkluZGV4ZXMsXHJcbiAgICAgIGhhbmRsZUl0ZW1DbGljazogdGhpcy5oYW5kbGVJdGVtQ2xpY2ssXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IEJhc2VBY2NvcmRpb24gfTtcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XHJcblxyXG5leHBvcnQgY29uc3QgQWNjb3JkaW9uQnV0dG9uID0gKHsgY2hpbGRyZW4sIC4uLnJlc3QgfSkgPT4gKFxyXG4gIDxkaXYgc3g9e3N0eWxlcy5idXR0b25Ub2dnbGV9IHsuLi5yZXN0fT5cclxuICAgIHtjaGlsZHJlbn1cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBidXR0b25Ub2dnbGU6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGNvbG9yOiAnaGVhZGluZ19zZWNvbmRhcnknLFxyXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICBib3JkZXI6ICdub25lJyxcclxuICAgIGZvbnRTaXplOiBbMiwgbnVsbCwgM10sXHJcbiAgICBmb250V2VpZ2h0OiA1MDAsXHJcbiAgICBsZXR0ZXJTcGFjaW5nOiAtMC41LFxyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICBwYWRkaW5nTGVmdDogWyczM3B4JywgbnVsbCwgJzQ1cHgnXSxcclxuICAgIGxpbmVIZWlnaHQ6IFsxLjUsIG51bGwsIDEuOF0sXHJcbiAgICAnJiA+IHNwYW4nOiB7XHJcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICB3aWR0aDogMjAsXHJcbiAgICAgIGhlaWdodDogMjAsXHJcbiAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyMyNUNCOUUnLFxyXG4gICAgICB0b3A6IFsnMnB4JywgbnVsbCwgJzZweCddLFxyXG4gICAgICBsZWZ0OiBbMCwgbnVsbCwgJzEzcHgnXSxcclxuICAgICAgJyYub3BlbjphZnRlcic6IHtcclxuICAgICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICB9LFxyXG4gICAgICAnJjo6YmVmb3JlJzoge1xyXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcclxuICAgICAgICBoZWlnaHQ6ICcycHgnLFxyXG4gICAgICAgIHdpZHRoOiAxMCxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgdG9wOiAnNTAlJyxcclxuICAgICAgICBsZWZ0OiAnNTAlJyxcclxuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSAsIC01MCUpJyxcclxuICAgICAgfSxcclxuICAgICAgJyY6OmFmdGVyJzoge1xyXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcclxuICAgICAgICBoZWlnaHQ6IDEwLFxyXG4gICAgICAgIHdpZHRoOiAnMnB4JyxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgdG9wOiAnNTAlJyxcclxuICAgICAgICBsZWZ0OiAnNTAlJyxcclxuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSAsIC01MCUpJyxcclxuICAgICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuMjVzJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuXHJcbmNvbnN0IHZhcmlhbnRzID0ge1xyXG4gIG9wZW46IHtcclxuICAgIGhlaWdodDogJ2F1dG8nLFxyXG4gICAgbWFyZ2luVG9wOiAxMixcclxuICB9LFxyXG4gIGNsb3NlZDogeyBoZWlnaHQ6IDAsIG1hcmdpblRvcDogMCB9LFxyXG59O1xyXG5leHBvcnQgZnVuY3Rpb24gQWNjb3JkaW9uQ29udGVudHMoeyBpc09wZW4sIC4uLnByb3BzIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPG1vdGlvbi5kaXZcclxuICAgICAgaW5pdGlhbD1cImNsb3NlZFwiXHJcbiAgICAgIGFuaW1hdGU9e2lzT3BlbiA/ICdvcGVuJyA6ICdjbG9zZWQnfVxyXG4gICAgICB2YXJpYW50cz17dmFyaWFudHN9XHJcbiAgICAgIHN4PXt7XHJcbiAgICAgICAgb3ZlcmZsb3dZOiAnaGlkZGVuJyxcclxuICAgICAgICBmb250U2l6ZTogWzEsIG51bGwsIDJdLFxyXG4gICAgICAgIGxpbmVIZWlnaHQ6IFsxLjg1LCBudWxsLCBudWxsLCAxLjksIDJdLFxyXG4gICAgICAgIGNvbG9yOiAnIzM0M0Q0OCcsXHJcbiAgICAgICAgcGFkZGluZ0xlZnQ6IFsnMzNweCcsIG51bGwsICc0NXB4J10sXHJcbiAgICAgICAgJyA+IGRpdiAnOiB7XHJcbiAgICAgICAgICBwYWRkaW5nQm90dG9tOiBbMSwgMl0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfX1cclxuICAgICAgey4uLnByb3BzfVxyXG4gICAgLz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQWNjb3JkaW9uSXRlbSA9ICh7IGlzT3BlbiwgY2hpbGRyZW4sIC4uLnJlc3QgfSkgPT4gKFxyXG4gIDxkaXZcclxuICAgIGNzcz17e1xyXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICAgIHBhZGRpbmc6ICcxN3B4IDAnLFxyXG4gICAgICBib3JkZXJCb3R0b206ICcxcHggc29saWQgI0U1RUNGNCcsXHJcbiAgICAgICcmOmxhc3QtY2hpbGQnOiB7XHJcbiAgICAgICAgYm9yZGVyQm90dG9tOiAnMHB4IHNvbGlkJyxcclxuICAgICAgfSxcclxuICAgIH19XHJcbiAgICB7Li4ucmVzdH1cclxuICA+XHJcbiAgICB7Y2hpbGRyZW59XHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgcHJldmVudENsb3NlID0gKHN0YXRlLCBjaGFuZ2VzKSA9PlxyXG4gIGNoYW5nZXMudHlwZSA9PT0gJ2Nsb3NpbmcnICYmIHN0YXRlLm9wZW5JbmRleGVzLmxlbmd0aCA8IDJcclxuICAgID8geyAuLi5jaGFuZ2VzLCBvcGVuSW5kZXhlczogc3RhdGUub3BlbkluZGV4ZXMgfVxyXG4gICAgOiBjaGFuZ2VzO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNpbmdsZSA9IChzdGF0ZSwgY2hhbmdlcykgPT5cclxuICBjaGFuZ2VzLnR5cGUgPT09ICdvcGVuaW5nJ1xyXG4gICAgPyB7IC4uLmNoYW5nZXMsIG9wZW5JbmRleGVzOiBjaGFuZ2VzLm9wZW5JbmRleGVzLnNsaWNlKC0xKSB9XHJcbiAgICA6IGNoYW5nZXM7XHJcblxyXG5leHBvcnQgY29uc3QgY29tYmluZVJlZHVjZXJzID0gKC4uLnJlZHVjZXJzKSA9PiAoc3RhdGUsIGNoYW5nZXMpID0+XHJcbiAgcmVkdWNlcnMucmVkdWNlKChhY2MsIHJlZHVjZXIpID0+IHJlZHVjZXIoc3RhdGUsIGFjYyksIGNoYW5nZXMpO1xyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4LCBCb3gsIENvbnRhaW5lciwgRmxleCB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IHsgSW9Jb3NBcnJvd1JvdW5kQmFjaywgSW9Jb3NBcnJvd1JvdW5kRm9yd2FyZCB9IGZyb20gJ3JlYWN0LWljb25zL2lvJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJ1dHRvbkdyb3VwKHsgbmV4dCwgcHJldmlvdXMgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8RmxleCBzeD17eyB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxCb3ggc3g9e3N0eWxlcy5idXR0b25Hcm91cH0+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3ByZXZpb3VzfSBhcmlhLWxhYmVsPVwiUHJldmlvdXNcIj5cclxuICAgICAgICAgICAgPElvSW9zQXJyb3dSb3VuZEJhY2sgLz5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtuZXh0fSBhcmlhLWxhYmVsPVwiTmV4dFwiPlxyXG4gICAgICAgICAgICA8SW9Jb3NBcnJvd1JvdW5kRm9yd2FyZCAvPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9GbGV4PlxyXG4gICk7XHJcbn1cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGJ1dHRvbkdyb3VwOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICBtYjogLTQsXHJcbiAgICBidXR0b246IHtcclxuICAgICAgYmc6ICd0cmFuc3BhcmVudCcsXHJcbiAgICAgIGJvcmRlcjogJzBweCBzb2xpZCcsXHJcbiAgICAgIGZvbnRTaXplOiA0MCxcclxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgIHB4OiAnMnB4JyxcclxuICAgICAgY29sb3I6ICcjQkJDN0Q3JyxcclxuICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjI1cycsXHJcbiAgICAgICcmOmZvY3VzJzoge1xyXG4gICAgICAgIG91dGxpbmU6IDAsXHJcbiAgICAgIH0sXHJcbiAgICAgICcmOmhvdmVyJzoge1xyXG4gICAgICAgIGNvbG9yOiAndGV4dCcsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQm94IH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgUmNEcmF3ZXIgZnJvbSAncmMtZHJhd2VyJztcclxuXHJcbmNvbnN0IERyYXdlciA9ICh7XHJcbiAgY2xhc3NOYW1lLFxyXG4gIGNoaWxkcmVuLFxyXG4gIGNsb3NlQnV0dG9uLFxyXG4gIGNsb3NlQnV0dG9uU3R5bGUsXHJcbiAgZHJhd2VySGFuZGxlcixcclxuICB0b2dnbGVIYW5kbGVyLFxyXG4gIG9wZW4sXHJcbiAgd2lkdGgsXHJcbiAgcGxhY2VtZW50LFxyXG4gIGRyYXdlclN0eWxlLFxyXG4gIGNsb3NlQnRuU3R5bGUsXHJcbiAgLi4ucHJvcHNcclxufSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIDxSY0RyYXdlclxyXG4gICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgb25DbG9zZT17dG9nZ2xlSGFuZGxlcn1cclxuICAgICAgICBjbGFzc05hbWU9e2BkcmF3ZXIgJHtjbGFzc05hbWUgPyBjbGFzc05hbWUgOiAnJ31gLnRyaW0oKX1cclxuICAgICAgICB3aWR0aD17d2lkdGh9XHJcbiAgICAgICAgcGxhY2VtZW50PXtwbGFjZW1lbnR9XHJcbiAgICAgICAgaGFuZGxlcj17ZmFsc2V9XHJcbiAgICAgICAgbGV2ZWw9e251bGx9XHJcbiAgICAgICAgZHVyYXRpb249XCIwLjRzXCJcclxuICAgICAgICB7Li4ucHJvcHN9XHJcbiAgICAgID5cclxuICAgICAgICB7Y2xvc2VCdXR0b24gJiYgKFxyXG4gICAgICAgICAgPEJveCBhcz1cImRpdlwiIG9uQ2xpY2s9e3RvZ2dsZUhhbmRsZXJ9IHN4PXtjbG9zZUJ0blN0eWxlfT5cclxuICAgICAgICAgICAge2Nsb3NlQnV0dG9ufVxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8Qm94IHN4PXtkcmF3ZXJTdHlsZX0+e2NoaWxkcmVufTwvQm94PlxyXG4gICAgICA8L1JjRHJhd2VyPlxyXG4gICAgICA8Qm94XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiZHJhd2VyX19oYW5kbGVyXCJcclxuICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyB9fVxyXG4gICAgICAgIG9uQ2xpY2s9e3RvZ2dsZUhhbmRsZXJ9XHJcbiAgICAgID5cclxuICAgICAgICB7ZHJhd2VySGFuZGxlcn1cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gICk7XHJcbn07XHJcblxyXG5EcmF3ZXIuZGVmYXVsdFByb3BzID0ge1xyXG4gIHdpZHRoOiAnMzIwcHgnLFxyXG4gIHBsYWNlbWVudDogJ2xlZnQnLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRHJhd2VyO1xyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4LCBJbWFnZSwgQm94LCBIZWFkaW5nLCBUZXh0IH0gZnJvbSAndGhlbWUtdWknO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmVhdHVyZUNhcmRDb2x1bW4oe1xyXG4gIHNyYyxcclxuICBhbHRUZXh0ID0gJ2RlZmF1bHQgYWx0IHRleHQnLFxyXG4gIHRpdGxlLFxyXG4gIHRleHQsXHJcbn0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBzeD17c3R5bGVzLmNhcmR9PlxyXG4gICAgICA8SW1hZ2Ugc3JjPXtzcmN9IGFsdD17YWx0VGV4dH0gc3g9e3N0eWxlcy5pbWd9IC8+XHJcblxyXG4gICAgICA8Qm94IHN4PXtzdHlsZXMud3JhcHBlcn0+XHJcbiAgICAgICAgPEhlYWRpbmcgc3g9e3N0eWxlcy53cmFwcGVyLnRpdGxlfT57dGl0bGV9PC9IZWFkaW5nPlxyXG4gICAgICAgIDxUZXh0IHN4PXtzdHlsZXMud3JhcHBlci5zdWJUaXRsZX0+e3RleHR9PC9UZXh0PlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBjYXJkOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCcsXHJcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgfSxcclxuICBpbWc6IHtcclxuICAgIG14OiAnYXV0bycsXHJcbiAgICBtYjogWzMsIG51bGwsIDQsIG51bGwsIG51bGwsIDVdLFxyXG4gICAgd2lkdGg6IFsnODBweCcsICc5MHB4JywgbnVsbCwgbnVsbCwgbnVsbCwgJzEwMHB4JywgJ2F1dG8nXSxcclxuICB9LFxyXG4gIHdyYXBwZXI6IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgIGZvbnRTaXplOiBbMywgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgNF0sXHJcbiAgICAgIGNvbG9yOiAnaGVhZGluZ19zZWNvbmRhcnknLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAxLjQsXHJcbiAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICAgICAgbWI6IFsyLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAzXSxcclxuICAgIH0sXHJcblxyXG4gICAgc3ViVGl0bGU6IHtcclxuICAgICAgZm9udFNpemU6IDEsXHJcbiAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcclxuICAgICAgbGluZUhlaWdodDogWzEuODUsIG51bGwsIG51bGwsIDEuOSwgMl0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3gsIEltYWdlLCBCb3gsIEhlYWRpbmcsIFRleHQgfSBmcm9tICd0aGVtZS11aSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGZWF0dXJlQ2FyZCh7XHJcbiAgc3JjLFxyXG4gIGFsdFRleHQgPSAnZGVmYXVsdCBhbHQgdGV4dCcsXHJcbiAgdGl0bGUsXHJcbiAgdGV4dCxcclxufSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IHN4PXtzdHlsZXMuY2FyZH0+XHJcbiAgICAgIDxJbWFnZSBzcmM9e3NyY30gYWx0PXthbHRUZXh0fSBzeD17c3R5bGVzLmltZ30gLz5cclxuXHJcbiAgICAgIDxCb3ggc3g9e3N0eWxlcy53cmFwcGVyfT5cclxuICAgICAgICA8SGVhZGluZyBzeD17c3R5bGVzLndyYXBwZXIudGl0bGV9Pnt0aXRsZX08L0hlYWRpbmc+XHJcbiAgICAgICAgPFRleHQgc3g9e3N0eWxlcy53cmFwcGVyLnN1YlRpdGxlfT57dGV4dH08L1RleHQ+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGNhcmQ6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdmbGV4LXN0YXJ0JyxcclxuICB9LFxyXG5cclxuICBpbWc6IHtcclxuICAgIHdpZHRoOiBbJzYwcHgnLCBudWxsLCBudWxsLCBudWxsLCAnNTVweCcsICc3MHB4JywgbnVsbCwgJzgwcHgnXSxcclxuICAgIGhlaWdodDogJ2F1dG8nLFxyXG4gICAgZmxleFNocmluazogMCxcclxuICAgIG1yOiBbMywgNCwgbnVsbCwgbnVsbCwgMywgNCwgbnVsbCwgNV0sXHJcbiAgfSxcclxuICB3cmFwcGVyOiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICBtdDogJy01cHgnLFxyXG4gICAgdGl0bGU6IHtcclxuICAgICAgZm9udFNpemU6IFszLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCA0XSxcclxuICAgICAgY29sb3I6ICdoZWFkaW5nX3NlY29uZGFyeScsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IDEuNCxcclxuICAgICAgZm9udFdlaWdodDogNzAwLFxyXG4gICAgICBtYjogWzIsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDNdLFxyXG4gICAgICBtdDogJzJweCcsXHJcbiAgICB9LFxyXG4gICAgc3ViVGl0bGU6IHtcclxuICAgICAgZm9udFNpemU6IDEsXHJcbiAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcclxuICAgICAgbGluZUhlaWdodDogWzEuODUsIG51bGwsIDJdLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCBbXHJcbiAge1xyXG4gICAgaGVhZGVyOiAnQWJvdXQgVXMnLFxyXG4gICAgaXRlbXM6IFtcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICcvJyxcclxuICAgICAgICBsYWJlbDogJ1N1cHBvcnQgQ2VudGVyJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICcvJyxcclxuICAgICAgICBsYWJlbDogJ0N1c3RvbWVyIFN1cHBvcnQnLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJy8nLFxyXG4gICAgICAgIGxhYmVsOiAnQWJvdXQgVXMnLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJy8nLFxyXG4gICAgICAgIGxhYmVsOiAnQ29weXJpZ2h0JyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICcvJyxcclxuICAgICAgICBsYWJlbDogJ1BvcHVsYXIgQ2FtcGFpZ24nLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIGhlYWRlcjogJ091ciBJbmZvcm1hdGlvbicsXHJcbiAgICBpdGVtczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJy8nLFxyXG4gICAgICAgIGxhYmVsOiAnUmV0dXJuIFBvbGljeSAnLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJy8nLFxyXG4gICAgICAgIGxhYmVsOiAnUHJpdmFjeSBQb2xpY3knLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJy8nLFxyXG4gICAgICAgIGxhYmVsOiAnVGVybXMgJiBDb25kaXRpb25zJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICcvJyxcclxuICAgICAgICBsYWJlbDogJ1NpdGUgTWFwJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICcvJyxcclxuICAgICAgICBsYWJlbDogJ1N0b3JlIEhvdXJzJyxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBoZWFkZXI6ICdNeSBBY2NvdW50JyxcclxuICAgIGl0ZW1zOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnLycsXHJcbiAgICAgICAgbGFiZWw6ICdQcmVzcyBpbnF1aXJpZXMnLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJy8nLFxyXG4gICAgICAgIGxhYmVsOiAnU29jaWFsIG1lZGlhICcsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnLycsXHJcbiAgICAgICAgbGFiZWw6ICdkaXJlY3RvcmllcycsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnLycsXHJcbiAgICAgICAgbGFiZWw6ICdJbWFnZXMgJiBCLXJvbGwnLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJy8nLFxyXG4gICAgICAgIGxhYmVsOiAnUGVybWlzc2lvbnMnLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIGhlYWRlcjogJ1BvbGljeScsXHJcbiAgICBpdGVtczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJy8nLFxyXG4gICAgICAgIGxhYmVsOiAnQXBwbGljYXRpb24gc2VjdXJpdHknLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJy8nLFxyXG4gICAgICAgIGxhYmVsOiAnU29mdHdhcmUgcHJpbmNpcGxlcycsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnLycsXHJcbiAgICAgICAgbGFiZWw6ICdVbndhbnRlZCBzb2Z0d2FyZSBwb2xpY3knLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJy8nLFxyXG4gICAgICAgIGxhYmVsOiAnUmVzcG9uc2libGUgc3VwcGx5IGNoYWluJyxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuXTtcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCwgSGVhZGluZywgQm94LCBDb250YWluZXIsIFRleHQgfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdjb21wb25lbnRzL2xpbmsnO1xyXG5pbXBvcnQgbWVudUl0ZW1zIGZyb20gJy4vZm9vdGVyLmRhdGEnO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb290ZXIoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxmb290ZXIgc3g9e3N0eWxlcy5mb290ZXJ9PlxyXG4gICAgICA8Q29udGFpbmVyIHN4PXtzdHlsZXMuZm9vdGVyLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgPEJveCBzeD17c3R5bGVzLmZvb3Rlci5mb290ZXJUb3BBcmVhfT5cclxuICAgICAgICAgIHttZW51SXRlbXMubWFwKCh7IGhlYWRlciwgaXRlbXMgfSwgaSkgPT4gKFxyXG4gICAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMuZm9vdGVyLm1lbnVzfSBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgIDxIZWFkaW5nIHN4PXtzdHlsZXMuZm9vdGVyLmhlYWRpbmd9PntoZWFkZXJ9PC9IZWFkaW5nPlxyXG4gICAgICAgICAgICAgIDxuYXY+XHJcbiAgICAgICAgICAgICAgICB7aXRlbXMubWFwKCh7IHBhdGgsIGxhYmVsIH0sIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICBwYXRoPXtwYXRofVxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17bGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgc3g9e3N0eWxlcy5mb290ZXIubGlua31cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPFRleHQgc3g9e3N0eWxlcy5mb290ZXIuY29weXJpZ2h0fT5cclxuICAgICAgICBBbGwgcmlnaHQgcmVzZXJ2ZWQgLSBEZXNpZ24gJiBEZXZlbG9wZWQgYnlcclxuICAgICAgICA8TGluayBwYXRoPVwiaHR0cHM6Ly9yZWRxLmlvL1wiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgUmVkUSwgSW5jXHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L1RleHQ+XHJcbiAgICA8L2Zvb3Rlcj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgZm9vdGVyOiB7XHJcbiAgICBjb250YWluZXI6IHtcclxuICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgYWxpZ25JdGVtczogJ3N0cmV0Y2gnLFxyXG4gICAgfSxcclxuICAgIGZvb3RlclRvcEFyZWE6IHtcclxuICAgICAgYm9yZGVyVG9wOiAnMXB4IHNvbGlkJyxcclxuICAgICAgYm9yZGVyVG9wQ29sb3I6ICdib3JkZXJfY29sb3InLFxyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGZsZXhXcmFwOiAnd3JhcCcsXHJcbiAgICAgIHB0OiBbNywgbnVsbCwgOF0sXHJcbiAgICAgIHBiOiBbJzEwcHgnLCBudWxsLCBudWxsLCAnMjBweCddLFxyXG4gICAgICBweDogWzAsIG51bGwsIG51bGwsIG51bGwsIDRdLFxyXG4gICAgfSxcclxuICAgIG1lbnVzOiB7XHJcbiAgICAgIHdpZHRoOiBbJzUwJScsIG51bGwsIG51bGwsICcyNSUnXSxcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAgbWI6IFsnNDBweCcsIG51bGwsIG51bGwsICc2MHB4J10sXHJcbiAgICB9LFxyXG5cclxuICAgIGhlYWRpbmc6IHtcclxuICAgICAgZm9udFNpemU6IFszLCBudWxsLCBudWxsLCA0XSxcclxuICAgICAgY29sb3I6ICd0ZXh0X3NlY29uZGFyeScsXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICc1MDAnLFxyXG4gICAgICBtYjogWzMsIDQsIDUsIG51bGwsIDZdLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAnMS4zNScsXHJcbiAgICB9LFxyXG5cclxuICAgIGxpbms6IHtcclxuICAgICAgZm9udFNpemU6IFsnMTRweCcsIG51bGwsIDFdLFxyXG4gICAgICBjb2xvcjogJ3RleHQnLFxyXG4gICAgICBmb250V2VpZ2h0OiAnYm9keScsXHJcbiAgICAgIG1iOiAyLFxyXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjM1cycsXHJcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IFsxLjUsIG51bGwsIG51bGwsIDEuNiwgMS44XSxcclxuICAgICAgJzpob3Zlcic6IHtcclxuICAgICAgICBjb2xvcjogJ3ByaW1hcnknLFxyXG4gICAgICB9LFxyXG4gICAgICAnOmxhc3QtY2hpbGQnOiB7XHJcbiAgICAgICAgbWI6ICcwcHgnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIGNvcHlyaWdodDoge1xyXG4gICAgICBmb250U2l6ZTogWycxNHB4JywgbnVsbCwgMV0sXHJcbiAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgIHA6IFsnMjBweCAyMHB4J10sXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNGQ0ZERkUnLFxyXG4gICAgICBjb2xvcjogJ3RleHQnLFxyXG4gICAgICBhOiB7XHJcbiAgICAgICAgdGV4dERlY29yYXRpb246ICdub25lJyxcclxuICAgICAgICBjb2xvcjogJ2luaGVyaXQnLFxyXG4gICAgICAgIHBsOiAxLFxyXG4gICAgICAgIHRyYW5zaXRpb246ICdhbGwgMC4yNXMnLFxyXG4gICAgICAgICcmOmhvdmVyJzoge1xyXG4gICAgICAgICAgY29sb3I6ICdwcmltYXJ5JyxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCBbXHJcbiAge1xyXG4gICAgcGF0aDogJ2hvbWUnLFxyXG4gICAgbGFiZWw6ICdIb21lJyxcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICdmZWF0dXJlJyxcclxuICAgIGxhYmVsOiAnRmVhdHVyZXMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJ3Rlc3RpbW9uaWFsJyxcclxuICAgIGxhYmVsOiAnVGVzdGltb25pYWwnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJ3ByaWNpbmcnLFxyXG4gICAgbGFiZWw6ICdQcmljaW5nJyxcclxuICB9LFxyXG5dO1xyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4LCBDb250YWluZXIsIEZsZXgsIEJ1dHRvbiB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IHsga2V5ZnJhbWVzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1zY3JvbGwnO1xyXG5pbXBvcnQgTG9nbyBmcm9tICdjb21wb25lbnRzL2xvZ28nO1xyXG5pbXBvcnQgTG9nb0RhcmsgZnJvbSAnYXNzZXRzL2xvZ28tZGFyay5wbmcnO1xyXG5pbXBvcnQgTG9nb1doaXRlIGZyb20gJ2Fzc2V0cy9sb2dvLnBuZyc7XHJcbmltcG9ydCB7IERyYXdlclByb3ZpZGVyIH0gZnJvbSAnLi4vLi4vY29udGV4dHMvZHJhd2VyL2RyYXdlci5wcm92aWRlcic7XHJcbmltcG9ydCBNb2JpbGVEcmF3ZXIgZnJvbSAnLi9tb2JpbGUtZHJhd2VyJztcclxuaW1wb3J0IG1lbnVJdGVtcyBmcm9tICcuL2hlYWRlci5kYXRhJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcih7IGNsYXNzTmFtZSB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxEcmF3ZXJQcm92aWRlcj5cclxuICAgICAgPGhlYWRlciBzeD17c3R5bGVzLmhlYWRlcn0gY2xhc3NOYW1lPXtjbGFzc05hbWV9IGlkPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgPENvbnRhaW5lciBzeD17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICA8TG9nbyBzcmM9e2NsYXNzTmFtZSA9PT0gJ3N0aWNreScgPyBMb2dvRGFyayA6IExvZ29XaGl0ZX0gLz5cclxuICAgICAgICAgIDxoMSBzdHlsZT17e2ZvbnRTaXplOicxcmVtJ319PlRoZSBXYXkgb2YgU3VjY2VzczwvaDE+XHJcbiAgICAgICAgICA8RmxleCBhcz1cIm5hdlwiIHN4PXtzdHlsZXMubmF2fT5cclxuICAgICAgICAgICAge21lbnVJdGVtcy5tYXAoKHsgcGF0aCwgbGFiZWwgfSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICBhY3RpdmVDbGFzcz1cImFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICB0bz17cGF0aH1cclxuICAgICAgICAgICAgICAgIHNweT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIHNtb290aD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIG9mZnNldD17LTcwfVxyXG4gICAgICAgICAgICAgICAgZHVyYXRpb249ezUwMH1cclxuICAgICAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7bGFiZWx9XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvRmxleD5cclxuXHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImRvbmF0ZV9fYnRuXCJcclxuICAgICAgICAgICAgdmFyaWFudD1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJHZXQgU3RhcnRlZFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEdldCBTdGFydGVkXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuXHJcbiAgICAgICAgICA8TW9iaWxlRHJhd2VyIC8+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDwvaGVhZGVyPlxyXG4gICAgPC9EcmF3ZXJQcm92aWRlcj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBwb3NpdGlvbkFuaW0gPSBrZXlmcmFtZXNgXHJcbiAgZnJvbSB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgaGVhZGVyOiB7XHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxyXG4gICAgcHk6IDQsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICB0b3A6IDAsXHJcbiAgICBsZWZ0OiAwLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgdHJhbnNpdGlvbjogJ2FsbCAwLjVzIGVhc2UnLFxyXG4gICAgYW5pbWF0aW9uOiBgJHtwb3NpdGlvbkFuaW19IDAuNHMgZWFzZWAsXHJcbiAgICAnLmRvbmF0ZV9fYnRuJzoge1xyXG4gICAgICBmbGV4U2hyaW5rOiAwLFxyXG4gICAgICBtcjogWzE1LCAyMCwgbnVsbCwgbnVsbCwgMF0sXHJcbiAgICAgIG1sOiBbJ2F1dG8nLCBudWxsLCBudWxsLCBudWxsLCAwXSxcclxuICAgIH0sXHJcbiAgICAnJi5zdGlja3knOiB7XHJcbiAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdiYWNrZ3JvdW5kJyxcclxuICAgICAgY29sb3I6ICcjMDAwMDAwJyxcclxuICAgICAgYm94U2hhZG93OiAnMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNiknLFxyXG4gICAgICBweTogMyxcclxuICAgICAgJ25ldiA+IGEnOiB7XHJcbiAgICAgICAgY29sb3I6ICd0ZXh0JyxcclxuICAgICAgfSxcclxuICAgICAgJy5kb25hdGVfX2J0bic6IHtcclxuICAgICAgICBib3JkZXJDb2xvcjogJ3ByaW1hcnknLFxyXG4gICAgICAgIGNvbG9yOiAncHJpbWFyeScsXHJcbiAgICAgICAgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgICBib3hTaGFkb3c6ICdyZ2JhKDMxLCA2MiwgMTE4LCAwLjU3KSAwcHggOXB4IDIwcHggLTVweCcsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdwcmltYXJ5JyxcclxuICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgY29udGFpbmVyOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXHJcbiAgfSxcclxuICBuYXY6IHtcclxuICAgIG14OiAnYXV0bycsXHJcbiAgICBkaXNwbGF5OiAnbm9uZScsXHJcbiAgICAnQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSc6IHtcclxuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgIH0sXHJcbiAgICBhOiB7XHJcbiAgICAgIGZvbnRTaXplOiAnMTZweCcsXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICc0MDAnLFxyXG4gICAgICBweDogMjUsXHJcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAnMS4yJyxcclxuICAgICAgJyYuYWN0aXZlJzoge1xyXG4gICAgICAgIGNvbG9yOiAnc2Vjb25kYXJ5JyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJveCB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IHsgU2Nyb2xsYmFycyB9IGZyb20gJ3JlYWN0LWN1c3RvbS1zY3JvbGxiYXJzJztcclxuaW1wb3J0IERyYXdlciBmcm9tICdjb21wb25lbnRzL2RyYXdlcic7XHJcbmltcG9ydCB7IERyYXdlckNvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0cy9kcmF3ZXIvZHJhd2VyLmNvbnRleHQnO1xyXG5pbXBvcnQgeyBJb01kQ2xvc2UsIElvTWRNZW51IH0gZnJvbSAncmVhY3QtaWNvbnMvaW8nO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtc2Nyb2xsJztcclxuaW1wb3J0IHtcclxuICBGYUZhY2Vib29rRixcclxuICBGYVR3aXR0ZXIsXHJcbiAgRmFHaXRodWJBbHQsXHJcbiAgRmFEcmliYmJsZSxcclxufSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XHJcbmltcG9ydCBtZW51SXRlbXMgZnJvbSAnLi9oZWFkZXIuZGF0YSc7XHJcblxyXG5jb25zdCBzb2NpYWwgPSBbXHJcbiAge1xyXG4gICAgcGF0aDogJy8nLFxyXG4gICAgaWNvbjogPEZhRmFjZWJvb2tGIC8+LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJy8nLFxyXG4gICAgaWNvbjogPEZhVHdpdHRlciAvPixcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICcvJyxcclxuICAgIGljb246IDxGYUdpdGh1YkFsdCAvPixcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICcvJyxcclxuICAgIGljb246IDxGYURyaWJiYmxlIC8+LFxyXG4gIH0sXHJcbl07XHJcblxyXG5jb25zdCBNb2JpbGVEcmF3ZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBzdGF0ZSwgZGlzcGF0Y2ggfSA9IHVzZUNvbnRleHQoRHJhd2VyQ29udGV4dCk7XHJcblxyXG4gIC8vIFRvZ2dsZSBkcmF3ZXJcclxuICBjb25zdCB0b2dnbGVIYW5kbGVyID0gUmVhY3QudXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiAnVE9HR0xFJyxcclxuICAgIH0pO1xyXG4gIH0sIFtkaXNwYXRjaF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPERyYXdlclxyXG4gICAgICB3aWR0aD1cIjMyMHB4XCJcclxuICAgICAgZHJhd2VySGFuZGxlcj17XHJcbiAgICAgICAgPEJveCBzeD17c3R5bGVzLmhhbmRsZXJ9PlxyXG4gICAgICAgICAgPElvTWRNZW51IHNpemU9XCIyNnB4XCIgLz5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgfVxyXG4gICAgICBvcGVuPXtzdGF0ZS5pc09wZW59XHJcbiAgICAgIHRvZ2dsZUhhbmRsZXI9e3RvZ2dsZUhhbmRsZXJ9XHJcbiAgICAgIGNsb3NlQnV0dG9uPXs8SW9NZENsb3NlIHNpemU9XCIyNHB4XCIgY29sb3I9XCIjMDAwMDAwXCIgLz59XHJcbiAgICAgIGRyYXdlclN0eWxlPXtzdHlsZXMuZHJhd2VyfVxyXG4gICAgICBjbG9zZUJ0blN0eWxlPXtzdHlsZXMuY2xvc2V9XHJcbiAgICA+XHJcbiAgICAgIDxTY3JvbGxiYXJzIGF1dG9IaWRlPlxyXG4gICAgICAgIDxCb3ggc3g9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5tZW51fT5cclxuICAgICAgICAgICAge21lbnVJdGVtcy5tYXAoKHsgcGF0aCwgbGFiZWwgfSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICBhY3RpdmVDbGFzcz1cImFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICB0bz17cGF0aH1cclxuICAgICAgICAgICAgICAgIHNweT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIHNtb290aD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIG9mZnNldD17LTcwfVxyXG4gICAgICAgICAgICAgICAgZHVyYXRpb249ezUwMH1cclxuICAgICAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7bGFiZWx9XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvQm94PlxyXG5cclxuICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5tZW51Rm9vdGVyfT5cclxuICAgICAgICAgICAgPEJveCBzeD17c3R5bGVzLnNvY2lhbH0+XHJcbiAgICAgICAgICAgICAge3NvY2lhbC5tYXAoKHsgcGF0aCwgaWNvbiB9LCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8Qm94IGFzPVwic3BhblwiIGtleT17aX0gc3g9e3N0eWxlcy5zb2NpYWwuaWNvbn0+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtwYXRofT57aWNvbn08L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9TY3JvbGxiYXJzPlxyXG4gICAgPC9EcmF3ZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBoYW5kbGVyOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgIGZsZXhTaHJpbms6ICcwJyxcclxuICAgIHdpZHRoOiAnMjZweCcsXHJcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICdAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpJzoge1xyXG4gICAgICBkaXNwbGF5OiAnbm9uZScsXHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIGRyYXdlcjoge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnZGFyaycsXHJcbiAgfSxcclxuXHJcbiAgY2xvc2U6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICB0b3A6ICcyNXB4JyxcclxuICAgIHJpZ2h0OiAnMzBweCcsXHJcbiAgICB6SW5kZXg6ICcxJyxcclxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gIH0sXHJcblxyXG4gIGNvbnRlbnQ6IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgcHQ6ICcxMDBweCcsXHJcbiAgICBwYjogJzQwcHgnLFxyXG4gICAgcHg6ICczMHB4JyxcclxuICB9LFxyXG5cclxuICBtZW51OiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICBhOiB7XHJcbiAgICAgIGZvbnRTaXplOiAnMTZweCcsXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICc1MDAnLFxyXG4gICAgICBjb2xvcjogJ3RleHRfd2hpdGUnLFxyXG4gICAgICBweTogJzE1cHgnLFxyXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICAgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNlOGU1ZTUnLFxyXG4gICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuMjVzJyxcclxuICAgICAgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgY29sb3I6ICdzZWNvbmRhcnknLFxyXG4gICAgICB9LFxyXG4gICAgICAnJi5hY3RpdmUnOiB7XHJcbiAgICAgICAgY29sb3I6ICdzZWNvbmRhcnknLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICBtZW51Rm9vdGVyOiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIG10OiAnYXV0bycsXHJcbiAgfSxcclxuXHJcbiAgc29jaWFsOiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcblxyXG4gICAgaWNvbjoge1xyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgIGNvbG9yOiAndGV4dCcsXHJcbiAgICAgIGZvbnRTaXplOiAxNCxcclxuICAgICAgbXI6ICcxNXB4JyxcclxuICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjI1cycsXHJcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICAnOmxhc3QtY2hpbGQnOiB7XHJcbiAgICAgICAgbXI6ICcwJyxcclxuICAgICAgfSxcclxuICAgICAgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgY29sb3I6ICdzZWNvbmRhcnknLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICBidXR0b246IHtcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgZm9udFNpemU6ICcxNHB4JyxcclxuICAgIGZ3OiAnNzAwJyxcclxuICAgIGhlaWdodDogJzQ1cHgnLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcclxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgcHk6ICcwJyxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9iaWxlRHJhd2VyO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBJbWFnZSBhcyBJbWcgfSBmcm9tICd0aGVtZS11aSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbWFnZSh7IHNyYywgLi4ucmVzdCB9KSB7XHJcbiAgcmV0dXJuIDxJbWcgc3JjPXtzcmN9IHsuLi5yZXN0fSAvPjtcclxufVxyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4IH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTdGlja3kgZnJvbSAncmVhY3Qtc3RpY2t5bm9kZSc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9oZWFkZXIvaGVhZGVyJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuL2Zvb3Rlci9mb290ZXInO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQoeyBjaGlsZHJlbiB9KSB7XHJcbiAgY29uc3QgW2lzU3RpY2t5LCBzZXRJc1N0aWNreV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgaGFuZGxlU3RhdGVDaGFuZ2UgPSAoc3RhdHVzKSA9PiB7XHJcbiAgICBpZiAoc3RhdHVzLnN0YXR1cyA9PT0gU3RpY2t5LlNUQVRVU19GSVhFRCkge1xyXG4gICAgICBzZXRJc1N0aWNreSh0cnVlKTtcclxuICAgIH0gZWxzZSBpZiAoc3RhdHVzLnN0YXR1cyA9PT0gU3RpY2t5LlNUQVRVU19PUklHSU5BTCkge1xyXG4gICAgICBzZXRJc1N0aWNreShmYWxzZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICA8U3RpY2t5IGlubmVyWj17MTAwMX0gdG9wPXswfSBvblN0YXRlQ2hhbmdlPXtoYW5kbGVTdGF0ZUNoYW5nZX0+XHJcbiAgICAgICAgPEhlYWRlciBjbGFzc05hbWU9e2Ake2lzU3RpY2t5ID8gJ3N0aWNreScgOiAndW5TdGlja3knfWB9IC8+XHJcbiAgICAgIDwvU3RpY2t5PlxyXG4gICAgICA8bWFpblxyXG4gICAgICAgIHN4PXt7XHJcbiAgICAgICAgICB2YXJpYW50OiAnbGF5b3V0Lm1haW4nLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDwvbWFpbj5cclxuICAgICAgPEZvb3RlciAvPlxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICApO1xyXG59XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3gsIE5hdkxpbmsgYXMgTWVudUxpbmssIExpbmsgYXMgQSB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IE5leHRMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmV4cG9ydCBmdW5jdGlvbiBOYXZMaW5rKHsgcGF0aCwgbGFiZWwsIGNoaWxkcmVuLCAuLi5yZXN0IH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPE5leHRMaW5rIGhyZWY9e3BhdGh9PlxyXG4gICAgICA8TWVudUxpbmsgey4uLnJlc3R9PntjaGlsZHJlbiA/IGNoaWxkcmVuIDogbGFiZWx9PC9NZW51TGluaz5cclxuICAgIDwvTmV4dExpbms+XHJcbiAgKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gTGluayh7IHBhdGgsIGxhYmVsLCBjaGlsZHJlbiwgLi4ucmVzdCB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxBIHsuLi5yZXN0fSBocmVmPXtwYXRofT5cclxuICAgICAge2NoaWxkcmVuID8gY2hpbGRyZW4gOiBsYWJlbH1cclxuICAgIDwvQT5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEZsZXgsIEJveCwgSWNvbkJ1dHRvbiB9IGZyb20gJ3RoZW1lLXVpJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExpc3QoeyBpdGVtcyA9IFtdLCBwYXJlbnRTdHlsZSwgY2hpbGRTdHlsZSB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3hcclxuICAgICAgYXM9XCJ1bFwiXHJcbiAgICAgIHN4PXt7XHJcbiAgICAgICAgbGlzdFN0eWxlVHlwZTogJ25vbmUnLFxyXG4gICAgICAgIG1hcmdpbjogMCxcclxuICAgICAgICBwYWRkaW5nOiAwLFxyXG4gICAgICAgIC4uLnBhcmVudFN0eWxlLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICB7aXRlbXMubWFwKCh7IGljb24sIHRleHQsIGlzQXZhaWxhYmxlIH0sIGkpID0+IChcclxuICAgICAgICA8RmxleFxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtpc0F2YWlsYWJsZSA/ICdvcGVuJyA6ICdjbG9zZWQnfVxyXG4gICAgICAgICAgYXM9XCJsaVwiXHJcbiAgICAgICAgICBzeD17eyAuLi5jaGlsZFN0eWxlIH19XHJcbiAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEljb25CdXR0b24gc3g9e3N0eWxlcy5saXN0SWNvbn0gYXJpYS1sYWJlbD1cImxpc3QgaWNvblwiPlxyXG4gICAgICAgICAgICB7aWNvbn1cclxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIHt0ZXh0fVxyXG4gICAgICAgIDwvRmxleD5cclxuICAgICAgKSl9XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59XHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBsaXN0SWNvbjoge1xyXG4gICAgd2lkdGg6IFsyNSwgJzM1cHgnXSxcclxuICAgIGhlaWdodDogJ2F1dG8nLFxyXG4gICAgY29sb3I6ICdzZWNvbmRhcnknLFxyXG4gICAgcGFkZGluZzogMCxcclxuICAgIGZvbnRTaXplOiBbMiwgNV0sXHJcbiAgICBtYXJnaW5MZWZ0OiAnLTFweCcsXHJcbiAgICBmbGV4U2hyaW5rOiAwLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LXN0YXJ0JyxcclxuICAgIG1hcmdpblRvcDogWzEsICcycHgnXSxcclxuICB9LFxyXG59O1xyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4LCBJbWFnZSB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ2NvbXBvbmVudHMvbGluayc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dvKHsgc3JjLCAuLi5yZXN0IH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPExpbmtcclxuICAgICAgcGF0aD1cIi9cIlxyXG4gICAgICBzeD17e1xyXG4gICAgICAgIHZhcmlhbnQ6ICdsaW5rcy5sb2dvJyxcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgICAgbXI6IDE1LFxyXG4gICAgICB9fVxyXG4gICAgICB7Li4ucmVzdH1cclxuICAgID5cclxuICAgICAgPEltYWdlIHNyYz17c3JjfSBhbHQ9XCJzdGFydHVwIGxhbmRpbmcgbG9nb1wiIHN0eWxlPXt7bWF4V2lkdGg6JzRyZW0nfX0gLz5cclxuICAgIFxyXG4gICAgPC9MaW5rPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgQm94LCBDYXJkLCBUZXh0LCBGbGV4LCBIZWFkaW5nLCBCdXR0b24gfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaXN0IGZyb20gJy4vbGlzdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcmljZUNhcmQoe1xyXG4gIGRhdGE6IHtcclxuICAgIGhlYWRlcixcclxuICAgIG5hbWUsXHJcbiAgICBkZXNjcmlwdGlvbixcclxuICAgIHByaWNlV2l0aFVuaXQsXHJcbiAgICBidXR0b25UZXh0ID0gJ1N0YXJ0IEZyZWUgVHJpYWwnLFxyXG4gICAgcG9pbnRzLFxyXG4gIH0sXHJcbn0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPENhcmQgY2xhc3NOYW1lPXtoZWFkZXIgPyAnYWN0aXZlJyA6IG51bGx9IHN4PXtzdHlsZXMucHJpY2luZ0JveH0+XHJcbiAgICAgIHtoZWFkZXIgJiYgPFRleHQgc3g9e3N0eWxlcy5oZWFkZXJ9PntoZWFkZXJ9PC9UZXh0Pn1cclxuICAgICAgPEJveD5cclxuICAgICAgICA8RmxleCBzeD17c3R5bGVzLnByaWNpbmdIZWFkZXJ9PlxyXG4gICAgICAgICAgPEJveD5cclxuICAgICAgICAgICAgPEhlYWRpbmcgY2xhc3NOYW1lPVwicGFja2FnZV9fbmFtZVwiIHN4PXtzdHlsZXMuaGVhZGluZ30+XHJcbiAgICAgICAgICAgICAge25hbWV9XHJcbiAgICAgICAgICAgIDwvSGVhZGluZz5cclxuICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICBhcz1cInBcIlxyXG4gICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiBoZWFkZXIgPyAxIDogMC43LFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IGhlYWRlciA/ICd0ZXh0JyA6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogWzEsIDJdLFxyXG4gICAgICAgICAgICAgICAgbGluZUhlaWdodDogMS4zLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7ZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAge2hlYWRlciAmJiAoXHJcbiAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT1cInBhY2thZ2VfX3ByaWNlXCIgc3g9e3N0eWxlcy5wcmljZX0+XHJcbiAgICAgICAgICAgICAgPHNwYW4+U3RhcnRpbmcgZnJvbTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaWNlXCI+XHJcbiAgICAgICAgICAgICAgICB7cHJpY2VXaXRoVW5pdH1cclxuICAgICAgICAgICAgICAgIDxzdWI+bW88L3N1Yj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgPExpc3QgaXRlbXM9e3BvaW50c30gY2hpbGRTdHlsZT17c3R5bGVzLmxpc3RJdGVtfSAvPlxyXG4gICAgICAgIDxCb3hcclxuICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgIG10OiBbJzQwcHgnLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAnNzBweCddLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIHZhcmlhbnQ9e2hlYWRlciA/ICdwcmltYXJ5JyA6ICd3aGl0ZUJ1dHRvbid9XHJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9e2J1dHRvblRleHR9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtidXR0b25UZXh0fVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9DYXJkPlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBwcmljaW5nQm94OiB7XHJcbiAgICBmbGV4OiBbXHJcbiAgICAgICcwIDEgMTAwJScsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgICcwIDEgNTAlJyxcclxuICAgICAgJzAgMSA0NSUnLFxyXG4gICAgICAnMCAxIDQwJScsXHJcbiAgICAgICcwIDEgMzguNSUnLFxyXG4gICAgXSxcclxuICAgIGJhY2tncm91bmQ6ICcjMkY1MzkyJyxcclxuICAgIGJvcmRlclJhZGl1czogMTAsXHJcbiAgICBtbDogWzAsIG51bGwsIG51bGwsIDVdLFxyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICBtdDogWyc0MHB4JywgbnVsbCwgbnVsbCwgMF0sXHJcbiAgICBwOiBbXHJcbiAgICAgICc1MHB4IDE1cHggNTBweCcsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgICc2MnB4IDI1cHggNTBweCAyNXB4JyxcclxuICAgICAgbnVsbCxcclxuICAgICAgJzYycHggNzBweCA1MHB4IDQwcHgnLFxyXG4gICAgXSxcclxuICAgICdAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MjBweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSc6IHtcclxuICAgICAgbWF4V2lkdGg6ICczODBweCcsXHJcbiAgICB9LFxyXG4gICAgJyY6Zmlyc3Qtb2YtdHlwZSc6IHtcclxuICAgICAgbWw6IDAsXHJcbiAgICAgIG10OiAwLFxyXG4gICAgfSxcclxuICAgICcmLmFjdGl2ZSc6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAnLnBhY2thZ2VfX25hbWUnOiB7XHJcbiAgICAgICAgY29sb3I6ICdoZWFkaW5nX3NlY29uZGFyeScsXHJcbiAgICAgIH0sXHJcbiAgICAgICcucGFja2FnZV9fcHJpY2UgPiBzcGFuJzoge1xyXG4gICAgICAgIGNvbG9yOiAndGV4dCcsXHJcbiAgICAgIH0sXHJcbiAgICAgICcub3Blbic6IHtcclxuICAgICAgICBjb2xvcjogJ3RleHQnLFxyXG4gICAgICB9LFxyXG4gICAgICAnLmNsb3NlZCc6IHtcclxuICAgICAgICBjb2xvcjogJ3RleHQnLFxyXG4gICAgICAgIG9wYWNpdHk6IDAuNixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBoZWFkZXI6IHtcclxuICAgIGhlaWdodDogWycyOHB4JywgbnVsbCwgbnVsbCwgbnVsbCwgJzMycHgnXSxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyNFRjlFNDgnLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcclxuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICAgIGZvbnRTaXplOiAnMTRweCcsXHJcbiAgICBsaW5lSGVpZ2h0OiAnMThweCcsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgIGNvbG9yOiAnI0ZGRkZGRicsXHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIHRvcDogWzMsIG51bGwsIDRdLFxyXG4gICAgbGV0dGVyU3BhY2luZzogJy0uMTRweCcsXHJcbiAgICBweDogJzEwcHgnLFxyXG4gIH0sXHJcblxyXG4gIGhlYWRpbmc6IHtcclxuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICAgIGZvbnRTaXplOiBbNCwgbnVsbCwgbnVsbCwgbnVsbCwgNV0sXHJcbiAgICBsaW5lSGVpZ2h0OiAnMjNweCcsXHJcbiAgICBjb2xvcjogJyNmZmZmZmYnLFxyXG4gICAgbWFyZ2luQm90dG9tOiBbMSwgbnVsbCwgJzEycHgnXSxcclxuICB9LFxyXG4gIHByaWNpbmdIZWFkZXI6IHtcclxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXHJcbiAgICBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCcsXHJcbiAgICBtYjogWyczNXB4JywgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgJzUwcHgnXSxcclxuICB9LFxyXG4gIHByaWNlOiB7XHJcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgICBmb250U2l6ZTogWzQsIG51bGwsIDUsIG51bGwsICcyNnB4J10sXHJcbiAgICBsaW5lSGVpZ2h0OiAxLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgbGV0dGVyU3BhY2luZzogJy0wLjVweCcsXHJcbiAgICBjb2xvcjogJyMwRjIxMzcnLFxyXG4gICAgbWFyZ2luQm90dG9tOiAwLFxyXG4gICAgZmxleFdyYXA6ICd3cmFwJyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgdGV4dEFsaWduOiAncmlnaHQnLFxyXG4gICAgbXQ6IFsnLTNweCcsIG51bGwsICcycHgnXSxcclxuICAgICc+IHNwYW4nOiB7XHJcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2R5JyxcclxuICAgICAgZm9udFNpemU6IFsxLCAyXSxcclxuICAgICAgbGluZUhlaWdodDogMS4yNSxcclxuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgICAgbWFyZ2luQm90dG9tOiAnMTBweCcsXHJcbiAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgfSxcclxuICAgICc+IC5wcmljZSc6IHtcclxuICAgICAgbWFyZ2luQm90dG9tOiAwLFxyXG4gICAgICBjb2xvcjogJ3NlY29uZGFyeScsXHJcbiAgICAgICc+IHN1Yic6IHtcclxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgICBib3R0b206ICc2cHgnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGxpc3RJdGVtOiB7XHJcbiAgICBmb250U3R5bGU6ICdub3JtYWwnLFxyXG4gICAgZm9udFdlaWdodDogJ25vcm1hbCcsXHJcbiAgICBmb250U2l6ZTogWzEsIG51bGwsIG51bGwsIG51bGwsIDJdLFxyXG4gICAgbGluZUhlaWdodDogWzEuNywgbnVsbCwgMS42NV0sXHJcbiAgICBtYXJnaW5Cb3R0b206IFszLCAnMjJweCddLFxyXG4gICAgYWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBwcjogWzIsIG51bGwsIG51bGwsIG51bGwsIDAsIDZdLFxyXG4gICAgJyYuY2xvc2VkJzoge1xyXG4gICAgICBvcGFjaXR5OiAwLjU1LFxyXG4gICAgICBidXR0b246IHtcclxuICAgICAgICBjb2xvcjogJyM3ODhGQjUnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBGYVN0YXIgfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XHJcblxyXG5jb25zdCBSYXRpbmcgPSAoeyByYXRpbmcgfSkgPT4ge1xyXG4gIGNvbnN0IHRvdGFsUmF0aW5nID0gW107XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcclxuICAgIGlmIChpIDwgcmF0aW5nKSB7XHJcbiAgICAgIHRvdGFsUmF0aW5nLnB1c2goXHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cInN0YXJcIiBrZXk9e2ByYXRpbmcta2V5JHtpfWB9PlxyXG4gICAgICAgICAgPEZhU3RhciAvPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0b3RhbFJhdGluZy5wdXNoKFxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJzdGFyLW9cIiBrZXk9e2ByYXRpbmcta2V5JHtpfWB9PlxyXG4gICAgICAgICAgPEZhU3RhciAvPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpbmdcIj5cclxuICAgICAgPHVsPnt0b3RhbFJhdGluZ308L3VsPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJhdGluZztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQm94LCBUZXh0LCBIZWFkaW5nIH0gZnJvbSAndGhlbWUtdWknO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VjdGlvbkhlYWRlcih7IHRpdGxlLCBzbG9nYW4sIGlzV2hpdGUgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IHN4PXt7IHZhcmlhbnQ6ICdzZWN0aW9uSGVhZGVyJyB9fT5cclxuICAgICAgPFRleHRcclxuICAgICAgICBhcz1cInBcIlxyXG4gICAgICAgIHN4PXt7XHJcbiAgICAgICAgICB2YXJpYW50OiAnc2VjdGlvbkhlYWRlci5zdWJUaXRsZScsXHJcbiAgICAgICAgICBjb2xvcjogaXNXaGl0ZSA/ICd3aGl0ZScgOiAnaGVhZGluZycsXHJcbiAgICAgICAgICBvcGFjaXR5OiBpc1doaXRlID8gMC43IDogMSxcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAge3Nsb2dhbn1cclxuICAgICAgPC9UZXh0PlxyXG4gICAgICA8SGVhZGluZ1xyXG4gICAgICAgIGFzPVwiaDJcIlxyXG4gICAgICAgIHN4PXt7XHJcbiAgICAgICAgICB2YXJpYW50OiAnc2VjdGlvbkhlYWRlci50aXRsZScsXHJcbiAgICAgICAgICBjb2xvcjogaXNXaGl0ZSA/ICd3aGl0ZScgOiAnaGVhZGluZ19zZWNvbmRhcnknLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICB7dGl0bGV9XHJcbiAgICAgIDwvSGVhZGluZz5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNFTyh7XHJcbiAgZGVzY3JpcHRpb24gPSAnc3RhcnR1cCBhcHBzIGxhbmRpbmcgcGFnZScsXHJcbiAgYXV0aG9yID0gJ1JlZFEsIEluYycsXHJcbiAgbWV0YSxcclxuICB0aXRsZSA9ICdzdGFydHVwIGxhbmRpbmcgdGl0bGUnLFxyXG59KSB7XHJcbiAgY29uc3QgbWV0YURhdGEgPSBbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IGBkZXNjcmlwdGlvbmAsXHJcbiAgICAgIGNvbnRlbnQ6IGRlc2NyaXB0aW9uLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcHJvcGVydHk6IGBvZzp0aXRsZWAsXHJcbiAgICAgIGNvbnRlbnQ6IHRpdGxlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcHJvcGVydHk6IGBvZzpkZXNjcmlwdGlvbmAsXHJcbiAgICAgIGNvbnRlbnQ6IGRlc2NyaXB0aW9uLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcHJvcGVydHk6IGBvZzp0eXBlYCxcclxuICAgICAgY29udGVudDogYHdlYnNpdGVgLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogYHR3aXR0ZXI6Y2FyZGAsXHJcbiAgICAgIGNvbnRlbnQ6IGBzdW1tYXJ5YCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IGB0d2l0dGVyOmNyZWF0b3JgLFxyXG4gICAgICBjb250ZW50OiBhdXRob3IsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBgdHdpdHRlcjp0aXRsZWAsXHJcbiAgICAgIGNvbnRlbnQ6IHRpdGxlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogYHR3aXR0ZXI6ZGVzY3JpcHRpb25gLFxyXG4gICAgICBjb250ZW50OiBkZXNjcmlwdGlvbixcclxuICAgIH0sXHJcbiAgXS5jb25jYXQobWV0YSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxIZWFkPlxyXG4gICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XHJcbiAgICAgIHttZXRhRGF0YS5tYXAoKHsgbmFtZSwgY29udGVudCB9LCBpKSA9PiAoXHJcbiAgICAgICAgPG1ldGEga2V5PXtpfSBuYW1lPXtuYW1lfSBjb250ZW50PXtjb250ZW50fSAvPlxyXG4gICAgICApKX1cclxuICAgIDwvSGVhZD5cclxuICApO1xyXG59XHJcblxyXG5TRU8uZGVmYXVsdFByb3BzID0ge1xyXG4gIGxhbmc6IGBlbmAsXHJcbiAgbWV0YTogW10sXHJcbn07XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3gsIEJveCwgSGVhZGluZywgVGV4dCwgQnV0dG9uLCBMaW5rIH0gZnJvbSAndGhlbWUtdWknO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGV4dEZlYXR1cmUoe1xyXG4gIHN1YlRpdGxlLFxyXG4gIHRpdGxlLFxyXG4gIGRlc2NyaXB0aW9uLFxyXG4gIGJ0bk5hbWUsXHJcbiAgYnRuVVJMID0gJyMnLFxyXG59KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggc3g9e3N0eWxlcy5jYXJkfT5cclxuICAgICAgPEJveCBzeD17c3R5bGVzLndyYXBwZXJ9PlxyXG4gICAgICAgIDxUZXh0IGFzPVwicFwiIHN4PXtzdHlsZXMud3JhcHBlci5zdWJUaXRsZX0+XHJcbiAgICAgICAgICB7c3ViVGl0bGV9XHJcbiAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgIDxIZWFkaW5nIGFzPVwiaDJcIiBzeD17c3R5bGVzLndyYXBwZXIudGl0bGV9PlxyXG4gICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgIDwvSGVhZGluZz5cclxuICAgICAgPC9Cb3g+XHJcblxyXG4gICAgICB7ZGVzY3JpcHRpb24gJiYgKFxyXG4gICAgICAgIDxUZXh0IGFzPVwicFwiIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCIgc3g9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XHJcbiAgICAgICAgICB7ZGVzY3JpcHRpb259XHJcbiAgICAgICAgPC9UZXh0PlxyXG4gICAgICApfVxyXG5cclxuICAgICAge2J0bk5hbWUgJiYgKFxyXG4gICAgICAgIDxMaW5rIGhyZWY9e2J0blVSTH0gdmFyaWFudD1cImRlZmF1bHRcIj5cclxuICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBhcmlhLWxhYmVsPXtidG5OYW1lfT5cclxuICAgICAgICAgICAge2J0bk5hbWV9XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICl9XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgY2FyZDoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICBmbGV4U2hyaW5rOiAwLFxyXG4gICAgYToge1xyXG4gICAgICBtOiBbJzAgYXV0bycsIG51bGwsIG51bGwsIDBdLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHdyYXBwZXI6IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIG10OiAnLTVweCcsXHJcbiAgICB0aXRsZToge1xyXG4gICAgICBmb250U2l6ZTogWycyNHB4JywgbnVsbCwgJzI4cHgnLCAnMzJweCcsICczNnB4JywgJzQycHgnLCBudWxsLCAnNDZweCddLFxyXG4gICAgICBjb2xvcjogJ2hlYWRpbmdfc2Vjb25kYXJ5JyxcclxuICAgICAgbGluZUhlaWdodDogWzEuMzUsIG51bGwsIG51bGwsIDEuMywgMS4yXSxcclxuICAgICAgZm9udFdlaWdodDogJzcwMCcsXHJcbiAgICAgIGxldHRlclNwYWNpbmc6ICctLjVweCcsXHJcbiAgICAgIG1iOiA1LFxyXG4gICAgfSxcclxuXHJcbiAgICBzdWJUaXRsZToge1xyXG4gICAgICBmb250U2l6ZTogWzAsIG51bGwsICcxNHB4J10sXHJcbiAgICAgIGNvbG9yOiAnaGVhZGluZycsXHJcbiAgICAgIGxldHRlclNwYWNpbmc6ICcycHgnLFxyXG4gICAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcclxuICAgICAgZm9udFdlaWdodDogJzcwMCcsXHJcbiAgICAgIG1iOiBbMiwgbnVsbCwgbnVsbCwgbnVsbCwgM10sXHJcbiAgICAgIGxpbmVIZWlnaHQ6IDEuNSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBkZXNjcmlwdGlvbjoge1xyXG4gICAgZm9udFNpemU6IFsnMTVweCcsIDIsIG51bGwsIG51bGwsIG51bGwsICcxN3B4JywgbnVsbCwgM10sXHJcbiAgICBmb250V2VpZ2h0OiA0MDAsXHJcbiAgICBsaW5lSGVpZ2h0OiBbMS44NSwgbnVsbCwgbnVsbCwgMiwgbnVsbCwgJzIuMiddLFxyXG4gICAgY29sb3I6ICd0ZXh0X3NlY29uZGFyeScsXHJcbiAgICBtYjogJzMwcHgnLFxyXG4gIH0sXHJcbn07XHJcbiIsImltcG9ydCB7IHVzZUNyZWF0ZUNvbnRleHQgfSBmcm9tICcuLi9jcmVhdGUtY29udGV4dCc7XHJcbmltcG9ydCB7IHJlZHVjZXIsIGluaXRpYWxTdGF0ZSB9IGZyb20gJy4vYXBwLnJlZHVjZXInO1xyXG5cclxuY29uc3QgW3N0YXRlLCB1c2VEaXNwYXRjaCwgcHJvdmlkZXJdID0gdXNlQ3JlYXRlQ29udGV4dChpbml0aWFsU3RhdGUsIHJlZHVjZXIpO1xyXG5leHBvcnQgY29uc3QgdXNlU3RpY2t5U3RhdGUgPSBzdGF0ZTtcclxuZXhwb3J0IGNvbnN0IHVzZVN0aWNreURpc3BhdGNoID0gdXNlRGlzcGF0Y2g7XHJcbmV4cG9ydCBjb25zdCBTdGlja3lQcm92aWRlciA9IHByb3ZpZGVyO1xyXG4iLCJleHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGlzU3RpY2t5OiBmYWxzZSxcclxuICBpc1NpZGViYXJTdGlja3k6IHRydWUsXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSwgeyB0eXBlIH0pIHtcclxuICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgIGNhc2UgJ1NFVF9TVElDS1knOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGlzU3RpY2t5OiB0cnVlLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSAnUkVNT1ZFX1NUSUNLWSc6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaXNTdGlja3k6IGZhbHNlLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSAnU0VUX1NJREVCQVJfU1RJQ0tZJzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBpc1NpZGViYXJTdGlja3k6IHRydWUsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlICdSRU1PVkVfU0lERUJBUl9TVElDS1knOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGlzU2lkZWJhclN0aWNreTogZmFsc2UsXHJcbiAgICAgIH07XHJcbiAgICBkZWZhdWx0OiB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVW5zdXBwb3J0ZWQgYWN0aW9uIHR5cGU6ICR7dHlwZX1gKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlQ3JlYXRlQ29udGV4dChkZWZhdWx0VmFsdWUsIHJlZHVjZXIpIHtcclxuICBjb25zdCBkZWZhdWx0RGlzcGF0Y2ggPSAoKSA9PiBkZWZhdWx0VmFsdWU7XHJcbiAgY29uc3Qgc3RhdGVDdHggPSBjcmVhdGVDb250ZXh0KGRlZmF1bHRWYWx1ZSk7XHJcbiAgY29uc3QgZGlzcGF0Y2hDdHggPSBjcmVhdGVDb250ZXh0KGRlZmF1bHREaXNwYXRjaCk7XHJcblxyXG4gIGZ1bmN0aW9uIHVzZVN0YXRlQ3R4KHByb3BlcnR5KSB7XHJcbiAgICBjb25zdCBzdGF0ZSA9IHVzZUNvbnRleHQoc3RhdGVDdHgpO1xyXG4gICAgcmV0dXJuIHN0YXRlW3Byb3BlcnR5XTsgLy8gb25seSBvbmUgZGVwdGggc2VsZWN0b3IgZm9yIGNvbXBhcmlzb25cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHVzZURpc3BhdGNoQ3R4KCkge1xyXG4gICAgcmV0dXJuIHVzZUNvbnRleHQoZGlzcGF0Y2hDdHgpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gUHJvdmlkZXIoeyBjaGlsZHJlbiB9KSB7XHJcbiAgICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IFJlYWN0LnVzZVJlZHVjZXIocmVkdWNlciwgZGVmYXVsdFZhbHVlKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXNwYXRjaEN0eC5Qcm92aWRlciB2YWx1ZT17ZGlzcGF0Y2h9PlxyXG4gICAgICAgIDxzdGF0ZUN0eC5Qcm92aWRlciB2YWx1ZT17c3RhdGV9PntjaGlsZHJlbn08L3N0YXRlQ3R4LlByb3ZpZGVyPlxyXG4gICAgICA8L2Rpc3BhdGNoQ3R4LlByb3ZpZGVyPlxyXG4gICAgKTtcclxuICB9XHJcbiAgcmV0dXJuIFt1c2VTdGF0ZUN0eCwgdXNlRGlzcGF0Y2hDdHgsIFByb3ZpZGVyXTtcclxufVxyXG4iLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IERyYXdlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9KTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IERyYXdlckNvbnRleHQgfSBmcm9tICcuL2RyYXdlci5jb250ZXh0JztcclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGlzT3BlbjogZmFsc2UsXHJcbn07XHJcblxyXG5mdW5jdGlvbiByZWR1Y2VyKHN0YXRlLCBhY3Rpb24pIHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlICdUT0dHTEUnOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGlzT3BlbjogIXN0YXRlLmlzT3BlbixcclxuICAgICAgfTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn1cclxuZXhwb3J0IGNvbnN0IERyYXdlclByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsU3RhdGUpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8RHJhd2VyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBzdGF0ZSwgZGlzcGF0Y2ggfX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvRHJhd2VyQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgeyBTdGlja3lQcm92aWRlciB9IGZyb20gJ2NvbnRleHRzL2FwcC9hcHAucHJvdmlkZXInO1xyXG5pbXBvcnQgdGhlbWUgZnJvbSAndGhlbWUnO1xyXG5pbXBvcnQgU0VPIGZyb20gJ2NvbXBvbmVudHMvc2VvJztcclxuaW1wb3J0IExheW91dCBmcm9tICdjb21wb25lbnRzL2xheW91dCc7XHJcbmltcG9ydCBCYW5uZXIgZnJvbSAnc2VjdGlvbnMvYmFubmVyJztcclxuaW1wb3J0IEtleUZlYXR1cmUgZnJvbSAnc2VjdGlvbnMva2V5LWZlYXR1cmUnO1xyXG5pbXBvcnQgQ29yZUZlYXR1cmUgZnJvbSAnc2VjdGlvbnMvY29yZS1mZWF0dXJlJztcclxuaW1wb3J0IEZlYXR1cmUgZnJvbSAnc2VjdGlvbnMvZmVhdHVyZSc7XHJcbmltcG9ydCBQYXJ0bmVyU2VjdGlvbiBmcm9tICdzZWN0aW9ucy9wYXJ0bmVyJztcclxuaW1wb3J0IFdvcmtGbG93IGZyb20gJ3NlY3Rpb25zL3dvcmtmbG93JztcclxuaW1wb3J0IFRlc3RpbW9uaWFsQ2FyZCBmcm9tICdzZWN0aW9ucy90ZXN0aW1vbmlhbCc7XHJcbmltcG9ydCBTZWN1cmVQYXltZW50IGZyb20gJ3NlY3Rpb25zL3NlY3VyZS1wYXltZW50JztcclxuaW1wb3J0IFBhY2thZ2UgZnJvbSAnc2VjdGlvbnMvcGFja2FnZSc7XHJcbmltcG9ydCBGYXEgZnJvbSAnc2VjdGlvbnMvZmFxJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4UGFnZSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cclxuICAgICAgPFN0aWNreVByb3ZpZGVyPlxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICA8U0VPIHRpdGxlPVwiU3RhcnR1cCBMYW5kaW5nIDAwNFwiIC8+XHJcbiAgICAgICAgICA8QmFubmVyIC8+XHJcbiAgICAgICAgICA8S2V5RmVhdHVyZSAvPlxyXG4gICAgICAgICAgPENvcmVGZWF0dXJlIC8+XHJcbiAgICAgICAgICA8RmVhdHVyZSAvPlxyXG4gICAgICAgICAgPFBhcnRuZXJTZWN0aW9uIC8+XHJcbiAgICAgICAgICA8V29ya0Zsb3cgLz5cclxuICAgICAgICAgIDxUZXN0aW1vbmlhbENhcmQgLz5cclxuICAgICAgICAgIDxTZWN1cmVQYXltZW50IC8+XHJcbiAgICAgICAgICA8UGFja2FnZSAvPlxyXG4gICAgICAgICAgPEZhcSAvPlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICA8L1N0aWNreVByb3ZpZGVyPlxyXG4gICAgPC9UaGVtZVByb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBGbGV4LCBCb3gsIEhlYWRpbmcsIFRleHQsIEltYWdlLCBCdXR0b24gfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE1vZGFsVmlkZW8gZnJvbSAncmVhY3QtbW9kYWwtdmlkZW8nO1xyXG5pbXBvcnQgeyBGYVBsYXlDaXJjbGUgfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XHJcbmltcG9ydCBCYW5uZXJCRyBmcm9tICdhc3NldHMvYmFubmVyQmcucG5nJztcclxuaW1wb3J0IEJhbm5lclRodW1iIGZyb20gJ2Fzc2V0cy9nb2FsLnBuZyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCYW5uZXIoKSB7XHJcbiAgY29uc3QgW3ZpZGVvT3Blbiwgc2V0VmlkZW9PcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRWaWRlb09wZW4odHJ1ZSk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gc3g9e3N0eWxlcy5iYW5uZXJ9IGlkPVwiaG9tZVwiPlxyXG4gICAgICA8Q29udGFpbmVyIHN4PXtzdHlsZXMuYmFubmVyLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgPEJveCBzeD17c3R5bGVzLmJhbm5lci5jb250ZW50Qm94fT5cclxuICAgICAgICAgIDxIZWFkaW5nIGFzPVwiaDFcIiB2YXJpYW50PVwiaGVyb1ByaW1hcnlcIj5cclxuICAgICAgICAgIERpc2NvdmVyIFJlYWwgS25vd2xlZGdlIHdpdGggZXhwZXJ0c1xyXG4gICAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICAgICAgPFRleHQgYXM9XCJwXCIgdmFyaWFudD1cImhlcm9TZWNvbmRhcnlcIj5cclxuICAgICAgICAgIFRoZSBtb3N0IGRpZmZpY3VsdCBwYXJ0IG9mIG1ha2luZyBhIHN1Y2Nlc3NmdWwgY2FycmllciBpcyBnZXR0aW5nIHN0YXJ0ZWQuIEdpdmUgeW91ciBjYXJlZXIgYSBib29zdCBieSBsZWFybmluZyBpbmR1c3RyeSBza2lsbHMsIHdvcmsgb24gcmVhbC1saWZlIHByb2plY3RzLCBpbnRlcm5zaGlwcywgYW5kIGV4cGVydCBndWlkYW5jZS5cclxuICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgIDxGbGV4PlxyXG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJ3aGl0ZUJ1dHRvblwiIGFyaWEtbGFiZWw9XCJHZXQgU3RhcnRlZFwiPlxyXG4gICAgICAgICAgICAgR2V0IFN0YXJ0ZWRcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPE1vZGFsVmlkZW9cclxuICAgICAgICAgICAgICAgIGNoYW5uZWw9XCJ5b3V0dWJlXCJcclxuICAgICAgICAgICAgICAgIGlzT3Blbj17dmlkZW9PcGVufVxyXG4gICAgICAgICAgICAgICAgdmlkZW9JZD1cIlpOQTlybURzWVZFXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHNldFZpZGVvT3BlbihmYWxzZSl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwidGV4dEJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiV2F0Y2ggVmlkZW9cIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEZhUGxheUNpcmNsZSAvPiBXYXRjaCBWaWRlb1xyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgIFxyXG4gICAgICAgIDwvQm94PlxyXG5cclxuICAgICAgICA8Qm94IHN4PXtzdHlsZXMuYmFubmVyLmltYWdlQm94fT5cclxuICAgICAgICAgIDxJbWFnZSBzcmM9e0Jhbm5lclRodW1ifSBhbHQ9XCJiYW5uZXJcIiAvPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgYmFubmVyOiB7XHJcbiAgICBvdmVyZmxvdzogWydoaWRkZW4nLCAnaW5pdGlhbCcsIG51bGwsICdoaWRkZW4nXSxcclxuICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke0Jhbm5lckJHfSlgLFxyXG4gICAgYmFja2dyb3VuZFJlcGVhdDogYG5vLXJlcGVhdGAsXHJcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICd0b3AgbGVmdCcsXHJcbiAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcclxuICAgIGJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzOiBbMTAwLCAxNTAsIG51bGwsIG51bGwsIG51bGwsIDI1MF0sXHJcbiAgICBwdDogWycxNTBweCcsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICcxNDBweCcsICcxMzBweCddLFxyXG4gICAgcGI6IFsnMTAwcHgnLCBudWxsLCBudWxsLCAnMTEwcHgnLCBudWxsLCAxMCwgJzE1MHB4J10sXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdwcmltYXJ5JyxcclxuICAgIGNvbnRhaW5lcjoge1xyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICB9LFxyXG4gICAgY29udGVudEJveDoge1xyXG4gICAgICB3aWR0aDogWycxMDAlJywgbnVsbCwgJzg1JScsICc1NSUnLCAnNTAlJywgJzU1JSddLFxyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgICBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCcsXHJcbiAgICAgIGZsZXhTaHJpbms6IDAsXHJcbiAgICAgIHB0OiBbMCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgNSwgN10sXHJcbiAgICB9LFxyXG4gICAgaW1hZ2VCb3g6IHtcclxuICAgICAgZGlzcGxheTogWydub25lJywgbnVsbCwgbnVsbCwgJ2Jsb2NrJ10sXHJcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgbWw6IFswLCBudWxsLCBudWxsLCAnLTExMHB4JywgJy0xMTVweCcsICctMTUwcHgnLCAnLTIxMHB4JywgJy0yNzBweCddLFxyXG4gICAgICBtcjogWzAsIG51bGwsIG51bGwsICctMTQ1cHgnLCAnLTE2MHB4JywgJy0xODBweCcsICctMjIwcHgnLCAnLTI1MHB4J10sXHJcbiAgICAgIG10OiBbMCwgbnVsbCwgbnVsbCwgJzQwcHgnLCA0LCA3LCAwXSxcclxuICAgICAgbWI6IFswLCBudWxsLCBudWxsLCBudWxsLCAnLTQ1cHgnLCAnLTcwcHgnLCBudWxsLCAnLTExNXB4J10sXHJcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBzcG9uc29yVGl0bGU6IHtcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgZm9udFNpemU6IFsxLCAyXSxcclxuICAgIG9wYWNpdHk6IDAuNixcclxuICAgIHByOiAyMCxcclxuICAgIGZsZXhTaHJpbms6IDAsXHJcbiAgICBwYjogWzIsIG51bGwsIDBdLFxyXG4gIH0sXHJcbiAgc3BvbnNvckJveDoge1xyXG4gICAgcHQ6IFsnMzVweCcsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICc0NXB4J10sXHJcbiAgICBmbGV4RGlyZWN0aW9uOiBbJ2NvbHVtbicsIG51bGwsICdyb3cnXSxcclxuICAgIHNwb25zb3I6IHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgJz4gYSc6IHtcclxuICAgICAgICBtcjogWzUsIG51bGwsIG51bGwsIDQsIDZdLFxyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAnJjpsYXN0LW9mLXR5cGUnOiB7XHJcbiAgICAgICAgICBtcjogMCxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4LCBDb250YWluZXIsIEJveCwgR3JpZCwgVGV4dCwgSGVhZGluZyB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IFRleHRGZWF0dXJlIGZyb20gJ2NvbXBvbmVudHMvdGV4dC1mZWF0dXJlJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ2NvbXBvbmVudHMvaW1hZ2UnO1xyXG5cclxuaW1wb3J0IENvcmVGZWF0dXJlVGh1bWIgZnJvbSAnYXNzZXRzL1N1Y2Nlc3MucG5nJztcclxuaW1wb3J0IEJyaWVmY2FzZSBmcm9tICdhc3NldHMvY29yZS1mZWF0dXJlL2NvYWNoaW5nLnBuZyc7XHJcbmltcG9ydCBTZWN1cmUgZnJvbSAnYXNzZXRzL2NvcmUtZmVhdHVyZS90ZW50LnBuZyc7XHJcblxyXG5jb25zdCBkYXRhID0ge1xyXG4gIHN1YlRpdGxlOiAnQ29yZSBmZWF0dXJlcycsXHJcbiAgdGl0bGU6ICdMZWFybixQcmFjdGljZSBhbmQgR2V0IFBsYWNlZCcsXHJcbiAgZmVhdHVyZXM6IFtcclxuICAgIHtcclxuICAgICAgaWQ6IDEsXHJcbiAgICAgIGltZ1NyYzogQnJpZWZjYXNlLFxyXG4gICAgICBhbHRUZXh0OiAnTWVudG9yc2hpcCcsXHJcbiAgICAgIHRpdGxlOiAnTWVudG9yc2hpcCcsXHJcbiAgICAgIHRleHQ6XHJcbiAgICAgICAgJ0dldCBtZW50b3JzaGlwIGF0IGVhY2ggcGhhc2Ugb2YgeW91ciBsZWFybmluZyBhbmQgbGVhcm4gdGhlIHJpZ2h0IHdheSBpbiBhIGZhc3QgYW5kIGVmZmVjdGl2ZSBtYW5uZXIgICcsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogMixcclxuICAgICAgaW1nU3JjOiBTZWN1cmUsXHJcbiAgICAgIGFsdFRleHQ6ICdXb3JsZCBDbGFzcyBUcmFpbmluZycsXHJcbiAgICAgIHRpdGxlOiAnVHJhaW5pbmcgQ2FtcHMnLFxyXG4gICAgICB0ZXh0OlxyXG4gICAgICAgICdBIHJlYWwtdGltZSBsZWFybmluZyBhbmQgcHJhY3RpY2UgdHJhaW5pbmcgY2FtcHMgd2l0aCBsaXZlIG1lbnRvcnNoaXAgYW5kIGd1aWRhbmNlIHRvIGJvb3N0IHlvdXIgbGVhcm5pbmcgYW5kIGdpdmUgeW91IGFuIGVkZ2Ugb3ZlciB0aGUgcmVzdCBvZiB0aGUgY29tcGV0aXRpb24gJyxcclxuICAgIH0sXHJcbiAgXSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvcmVGZWF0dXJlKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBzeD17c3R5bGVzLmNvcmVGZWF0dXJlfT5cclxuICAgICAgPENvbnRhaW5lciBzeD17c3R5bGVzLmNvbnRhaW5lckJveH0+XHJcbiAgICAgICAgPEJveCBzeD17c3R5bGVzLnRodW1ibmFpbH0+XHJcbiAgICAgICAgICA8SW1hZ2Ugc3JjPXtDb3JlRmVhdHVyZVRodW1ifSBhbHQ9XCJUaHVtYm5haWxcIiAvPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICAgIDxCb3ggc3g9e3N0eWxlcy5jb250ZW50Qm94fT5cclxuICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5oZWFkaW5nVG9wfT5cclxuICAgICAgICAgICAgPFRleHRGZWF0dXJlIHN1YlRpdGxlPXtkYXRhLnN1YlRpdGxlfSB0aXRsZT17ZGF0YS50aXRsZX0gLz5cclxuICAgICAgICAgIDwvQm94PlxyXG5cclxuICAgICAgICAgIDxHcmlkIGdhcD1cIjE1cHggMFwiIGNvbHVtbnM9ezF9IHN4PXtzdHlsZXMuZ3JpZH0+XHJcbiAgICAgICAgICAgIHtkYXRhLmZlYXR1cmVzLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5jYXJkfSBrZXk9e2l0ZW0uaWR9PlxyXG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz17aXRlbS5pbWdTcmN9IGFsdD17aXRlbS5hbHRUZXh0fSBzeD17c3R5bGVzLmltZ30gLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMud3JhcHBlcn0+XHJcbiAgICAgICAgICAgICAgICAgIDxIZWFkaW5nIHN4PXtzdHlsZXMud3JhcHBlci50aXRsZX0+e2l0ZW0udGl0bGV9PC9IZWFkaW5nPlxyXG4gICAgICAgICAgICAgICAgICA8VGV4dCBzeD17c3R5bGVzLndyYXBwZXIuc3ViVGl0bGV9PntpdGVtLnRleHR9PC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgY29yZUZlYXR1cmU6IHtcclxuICAgIHB5OiBbMCwgbnVsbCwgbnVsbCwgMiwgbnVsbCwgN10sXHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICcmOjpiZWZvcmUnOiB7XHJcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICBjb250ZW50OiAnXCJcIicsXHJcbiAgICAgIHRvcDogWydhdXRvJywgbnVsbCwgbnVsbCwgJzUwJSddLFxyXG4gICAgICBib3R0b206IFsnMTAwcHgnLCAwLCBudWxsLCAnYXV0byddLFxyXG4gICAgICBsZWZ0OiAwLFxyXG4gICAgICBiYWNrZ3JvdW5kOiAnbGluZWFyLWdyYWRpZW50KC0xNTdkZWcsICNGNkZBRkQsICNGOUZDRkMsICNGQ0ZERkMpJyxcclxuICAgICAgaGVpZ2h0OiBbMzUwLCA1NTAsICc2MCUnXSxcclxuICAgICAgd2lkdGg6ICc1MCUnLFxyXG4gICAgICB6SW5kZXg6IC0xLFxyXG4gICAgICBib3JkZXJUb3BSaWdodFJhZGl1czogJzUwJScsXHJcbiAgICAgIGJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzOiAnNTAlJyxcclxuICAgICAgdHJhbnNmb3JtOiBbJ3RyYW5zbGF0ZVkoMCknLCBudWxsLCBudWxsLCAndHJhbnNsYXRlWSgtNTAlKSddLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGNvbnRhaW5lckJveDoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gICAgZmxleERpcmVjdGlvbjogWydjb2x1bW4nLCBudWxsLCBudWxsLCAncm93J10sXHJcbiAgfSxcclxuICB0aHVtYm5haWw6IHtcclxuICB3aWR0aDonOTAwcHgnXHJcbiAgfSxcclxuICBjb250ZW50Qm94OiB7XHJcbiAgICB3aWR0aDogWycxMDAlJywgNDUwLCA1NTAsIDM1MCwgNTAwLCA1NzBdLFxyXG4gICAgcHI6IFswLCBudWxsLCAnYXV0bycsIG51bGwsIG51bGwsIDgwXSxcclxuICAgIHBsOiAnYXV0bycsXHJcbiAgICBmbGV4U2hyaW5rOiAwLFxyXG4gIH0sXHJcbiAgaGVhZGluZ1RvcDoge1xyXG4gICAgcGw6IFswLCBudWxsLCBudWxsLCBudWxsLCAnMzVweCcsIG51bGwsICc1NXB4JywgNl0sXHJcbiAgICBtYjogWzMsIG51bGwsIG51bGwsIG51bGwsIDFdLFxyXG4gICAgdGV4dEFsaWduOiBbJ2NlbnRlcicsIG51bGwsIG51bGwsICdsZWZ0J10sXHJcbiAgfSxcclxuICBncmlkOiB7XHJcbiAgICBwOiBbJzAgMHB4IDM1cHgnLCBudWxsLCBudWxsLCBudWxsLCAnMCAyMHB4IDQwcHgnLCBudWxsLCAnMCA0MHB4IDQwcHgnLCAwXSxcclxuICB9LFxyXG4gIGNhcmQ6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdmbGV4LXN0YXJ0JyxcclxuICAgIHA6IFtcclxuICAgICAgJzAgMTdweCAyMHB4JyxcclxuICAgICAgbnVsbCxcclxuICAgICAgbnVsbCxcclxuICAgICAgJzAgMCAyMHB4JyxcclxuICAgICAgJzIwcHggMTVweCAxN3B4JyxcclxuICAgICAgbnVsbCxcclxuICAgICAgbnVsbCxcclxuICAgICAgJzI1cHggMzBweCAyM3B4JyxcclxuICAgIF0sXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXHJcbiAgICBib3JkZXJSYWRpdXM6ICcxMHB4JyxcclxuICAgIHRyYW5zaXRpb246ICdhbGwgMC4zcycsXHJcbiAgICB3aWR0aDogWycxMDAlJywgJzg1JScsIG51bGwsICcxMDAlJ10sXHJcbiAgICBteDogJ2F1dG8nLFxyXG4gICAgJyY6aG92ZXInOiB7XHJcbiAgICAgIGJveFNoYWRvdzogW1xyXG4gICAgICAgICcwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDApJyxcclxuICAgICAgICBudWxsLFxyXG4gICAgICAgIG51bGwsXHJcbiAgICAgICAgbnVsbCxcclxuICAgICAgICAnMHB4IDhweCAyNHB4IHJnYmEoNjksIDg4LCAxNTcsIDAuMDcpJyxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgaW1nOiB7XHJcbiAgICB3aWR0aDogWycxMDBweCcsIG51bGwsICc1NXB4J10sXHJcbiAgICBoZWlnaHQ6ICdhdXRvJyxcclxuICAgIGZsZXhTaHJpbms6IDAsXHJcbiAgICBtcjogWzMsIDRdLFxyXG4gIH0sXHJcbiAgd3JhcHBlcjoge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgbXQ6ICctNXB4JyxcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgIGZvbnRTaXplOiAzLFxyXG4gICAgICBjb2xvcjogJ2hlYWRpbmdfc2Vjb25kYXJ5JyxcclxuICAgICAgbGluZUhlaWdodDogMS40LFxyXG4gICAgICBmb250V2VpZ2h0OiA3MDAsXHJcbiAgICAgIG1iOiBbMiwgbnVsbCwgbnVsbCwgbnVsbCwgM10sXHJcbiAgICB9LFxyXG5cclxuICAgIHN1YlRpdGxlOiB7XHJcbiAgICAgIGZvbnRTaXplOiAxLFxyXG4gICAgICBmb250V2VpZ2h0OiA0MDAsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IFsxLjg1LCBudWxsLCAyXSxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCwgQ29udGFpbmVyLCBCb3ggfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCBTZWN0aW9uSGVhZGVyIGZyb20gJ2NvbXBvbmVudHMvc2VjdGlvbi1oZWFkZXInO1xyXG5pbXBvcnQgQWNjb3JkaW9uIGZyb20gJ2NvbXBvbmVudHMvYWNjb3JkaW9uL2FjY29yZGlvbic7XHJcbmNvbnN0IGZhcXMgPSBbXHJcbiAge1xyXG4gICAgdGl0bGU6ICdIb3cgdG8gY29udGFjdCB3aXRoIHJpZGVycyBlbWVyZ2VuY3kgPycsXHJcbiAgICBjb250ZW50czogKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIEdldCB5b3VyIHdlYnNpdGUgYWRzIHRlc3RzIGRlbGl2ZXJlZCBhdCBsZXQgY29sbGVjdCBzYW1wbGUgZnJvbSB0aGVcclxuICAgICAgICB2aWN0b3J5IG9mIHRoZSBtYW5hZ2VtZW50cyB0aGF0IHN1cHBsaWVzIGJlc3QgZGVzaWduIHN5c3RlbSB3aGljaFxyXG4gICAgICAgIGd1aWRlbGluZXMgZXZlciB3aXRoIG11bHRpcGxlIGZlYXR1cmVzLlxyXG4gICAgICA8L2Rpdj5cclxuICAgICksXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ0FwcCBpbnN0YWxsYXRpb24gZmFpbGVkLCBob3cgdG8gdXBkYXRlIHN5c3RlbSBpbmZvcm1hdGlvbj8nLFxyXG4gICAgY29udGVudHM6IChcclxuICAgICAgPGRpdj5cclxuICAgICAgICBSaGlubyBza2luIG1heWJlIHRoaWNrIGJ1dCBpdCBjYW4gYmUgcXVpdGUgc2Vuc2l0aXZlIHRvIHN1bmJ1cm5zIGFuZFxyXG4gICAgICAgIGluc2VjdCBiaXRlcyB3aGljaCBpcyB3aHkgdGhleSBsaWtlIHdhbGxvdyBzbyBtdWNoIOKAkyB3aGVuIHRoZSBtdWQgZHJpZXNcclxuICAgICAgICBpdCBhY3RzIGFzIHByb3RlY3Rpb24gZnJvbSB0aGUgc3VuYnVybnMgYW5kIGluc2VjdHMuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBgV2Vic2l0ZSByZXNwb25zZSB0YWtpbmcgdGltZSwgaG93IHRvIGltcHJvdmU/YCxcclxuICAgIGNvbnRlbnRzOiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgR2V0IHlvdXIgYmxvb2QgdGVzdHMgZGVsaXZlcmVkIGF0IHRoZSBob21lIGNvbGxlY3QgYSBzYW1wbGUgZnJvbVxyXG4gICAgICAgIG1hbmFnZW1lbnQgbmV3cy4gR2V0IHlvdXIgYmxvb2QgdGVzdHMgZGVsaXZlcmVkIGF0IHRoZSBob21lIGNvbGxlY3QgYVxyXG4gICAgICAgIHNhbXBsZSBmcm9tIG1hbmFnZW1lbnQgbmV3cy4gR2V0IHlvdXIgYmxvb2QgdGVzdHMgZGVsaXZlcmVkIGF0IHRoZSBob21lXHJcbiAgICAgICAgY29sbGVjdCBhIHNhbXBsZSBmcm9tIG1hbmFnZW1lbnQgbmV3cy4gR2V0IHlvdXIgYmxvb2QgdGVzdHMgZGVsaXZlcmVkIGF0XHJcbiAgICAgICAgdGhlIGhvbWUuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBgTmV3IHVwZGF0ZSBmaXhlZCBhbGwgYnVnIGFuZCBpc3N1ZXNgLFxyXG4gICAgY29udGVudHM6IChcclxuICAgICAgPGRpdj5cclxuICAgICAgICBJZiB5b3XigJlyZSBsb29raW5nIHRvIGh1bnQgYSB1bmljb3JuLCBidXQgZG9u4oCZdCBrbm93IHdoZXJlIHRvIGJlZ2luLCB0cnlcclxuICAgICAgICBMYWtlIFN1cGVyaW9yIFN0YXRlIFVuaXZlcnNpdHkgaW4gU2F1bHQgU3RlLiBNYXJpZSwgTWljaGlnYW4uIFNpbmNlXHJcbiAgICAgICAgMTk3MSwgdGhlIHVuaXZlcnNpdHkgaGFzIGlzc3VlZCBwZXJtaXRzIHRvIHVuaWNvcm4gcXVlc3RlcnMuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKSxcclxuICB9LFxyXG5dO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGYXEoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIHN4PXt7IHZhcmlhbnQ6ICdzZWN0aW9uLmZhcScgfX0+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPFNlY3Rpb25IZWFkZXJcclxuICAgICAgICAgIHRpdGxlPVwiRnJlcXVlbnRseSBhc2tlZCBxdWVzdGlvblwiXHJcbiAgICAgICAgICBzbG9nYW49XCJHZXQgeW91ciBxdWVzdGlvbiBhbnN3ZXJcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEJveFxyXG4gICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICB3aWR0aDogWycxMDAlJywgbnVsbCwgbnVsbCwgJzY1MHB4JywgJzc0NXB4J10sXHJcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgICAgICAgICBteDogJ2F1dG8nLFxyXG4gICAgICAgICAgICBteTogLTQsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxBY2NvcmRpb24gaXRlbXM9e2ZhcXN9IC8+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBHcmlkIH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgU2VjdGlvbkhlYWRlciBmcm9tICdjb21wb25lbnRzL3NlY3Rpb24taGVhZGVyJztcclxuaW1wb3J0IEZlYXR1cmVDYXJkIGZyb20gJ2NvbXBvbmVudHMvZmVhdHVyZS1jYXJkLmpzJztcclxuaW1wb3J0IFNtYXJ0IGZyb20gJ2Fzc2V0cy9mZWF0dXJlL3ZpZGVvLXR1dG9yaWFscy5wbmcnO1xyXG5pbXBvcnQgV2lubmVyIGZyb20gJ2Fzc2V0cy9mZWF0dXJlL3RlYWNoaW5nLnBuZyc7XHJcbmltcG9ydCBDbG91ZCBmcm9tICdhc3NldHMvZmVhdHVyZS9xdWl6LnBuZyc7XHJcbmltcG9ydCBTZXR0aW5nIGZyb20gJ2Fzc2V0cy9mZWF0dXJlL2Fzc2lnbm1lbnQucG5nJztcclxuaW1wb3J0IERlc2lnbiBmcm9tICdhc3NldHMvZmVhdHVyZS9xdWVzdGlvbi5wbmcnO1xyXG5pbXBvcnQgQ2hhdCBmcm9tICdhc3NldHMvZmVhdHVyZS9idXNpbmVzc21hbi5wbmcnO1xyXG5cclxuY29uc3QgZGF0YSA9IFtcclxuICB7XHJcbiAgICBpZDogMSxcclxuICAgIGltZ1NyYzogU21hcnQsXHJcbiAgICBhbHRUZXh0OiAnUHJhY3RpY2FsIExlYXJuaW5nJyxcclxuICAgIHRpdGxlOiAnUHJhY3RpY2FsIExlYXJuaW5nJyxcclxuICAgIHRleHQ6XHJcbiAgICAgICdUbyBnYWluIHByYWN0aWNhbCBrbm93bGVkZ2UsIHlvdSBuZWVkIHRvIGV4cGxvcmUgdmFyaW91cyBvcHRpb25zIGFuZCBzZWUgd2hhdCB3b3JrcyB0aGUgYmVzdC4nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDIsXHJcbiAgICBpbWdTcmM6IFdpbm5lcixcclxuICAgIGFsdFRleHQ6ICdJbnRlcmFjdGlvbiBXaXRoIEV4cGVydCcsXHJcbiAgICB0aXRsZTogJ0ludGVyYWN0aW9uIFdpdGggRXhwZXJ0JyxcclxuICAgIHRleHQ6XHJcbiAgICAgICdJbnRlcmFjdGl2ZSBvbmUgdG8gb25lIHNlc3Npb25zIHdpdGggRXhwZXJ0IHdpbGwgcHJvdmlkZSB5b3Ugd2l0aCBhIGdyZWF0IG9wcG9ydHVuaXR5IHRvIHBsYW4gb3V0IHlvdXIgdGltZSBhbmQgZWZmb3J0cyB0byBtYWtlIHRoZSBtb3N0IG9mIGl0LicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMyxcclxuICAgIGltZ1NyYzogQ2xvdWQsXHJcbiAgICBhbHRUZXh0OiAnUXVpenplcycsXHJcbiAgICB0aXRsZTogJ1F1aXp6ZXMnLFxyXG4gICAgdGV4dDpcclxuICAgICAgJ1RoZSBCZXN0IHdheSB0byBncm93IHN0cm9uZyBpcyB0byB3b3JrIG9uIHlvdXIgd2Vha25lc3NlcyBRdWl6emVzIHdpbGwgaGVscCB5b3UgdG8ga25vdyB5b3VyIHdlYWtuZXNzZXMgYW5kIGNhbiB3b3JrIG9uIHRoZW0gYWNjb3JkaW5nbHknLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDQsXHJcbiAgICBpbWdTcmM6IFNldHRpbmcsXHJcbiAgICBhbHRUZXh0OiAnUmVhbC10aW1lIEFzc2lnbm1lbnRzJyxcclxuICAgIHRpdGxlOiAnUmVhbC10aW1lIEFzc2lnbm1lbnRzJyxcclxuICAgIHRleHQ6XHJcbiAgICAgICdXb3JrIG9uIHJlYWwtbGlmZSBwcm9qZWN0cyB3aGljaCB3aWxsIGhlbHAgeW91IGdldCBoYW5kcy1vbiBleHBlcmllbmNlIGluIGJ1aWxkaW5nIGFwcGxpY2F0aW9ucyB0aGF0IGFyZSB1cCB0byB0aGUgc3RhbmRhcmQgb2YgdGhlIGluZHVzdHJ5ICcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNSxcclxuICAgIGltZ1NyYzogRGVzaWduLFxyXG4gICAgYWx0VGV4dDogJ0RvdWJ0IENoZWNraW5nJyxcclxuICAgIHRpdGxlOiAnRG91YnQgQ2hlY2tpbmcnLFxyXG4gICAgdGV4dDpcclxuICAgICAgJ1RoZSByb2FkIHRvIGxlYXJuaW5nIGEgbmV3IHNraWxsIGlzIG5vdCB0aGF0IGVhc3kgeW91IG1ha2UgY29tZSBhY3Jvc3MgYSBsb3Qgb2YgcHJvYmxlbXMgd2l0aCBhcmUgbGV0dGluZyB5b3UgZG93biBhbmQgeW91IGFyZSBzdHVjay4gV2Ugd29udCBsZXQgdGhhdCBoYXBwZW4uJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA2LFxyXG4gICAgaW1nU3JjOiBDaGF0LFxyXG4gICAgYWx0VGV4dDogJ0ludGVybnNoaXBzJyxcclxuICAgIHRpdGxlOiAnSW50ZXJuc2hpcHMnLFxyXG4gICAgdGV4dDpcclxuICAgICAgJ1doZW4gaXQgY29tZXMgZG93biB0byBwcmFjdGljZSB5b3VyIHNraWxsIGFuZCBtYWtlIGl0IG1vcmUgdXNlZnVsIHRoZSBiZXN0IHdheSB0byBnZXQgcGFzcyBpdCBieSB3b3JraW5nIGluIGEgcmVhbC1saWZlIGVudmlyb25tZW50IGluIHdoaWNoIG91ciBpbnRlcm5zaGlwIHByb2dyYW0gaGVscHMgeW91IHRvIHNoYXBlbiB5b3VyIHNraWxscycsXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZlYXR1cmUoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIHN4PXt7IHZhcmlhbnQ6ICdzZWN0aW9uLmZlYXR1cmUnIH19PlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxTZWN0aW9uSGVhZGVyXHJcbiAgICAgICAgICBzbG9nYW49XCJCZXN0IEJlbmVmaXRzXCJcclxuICAgICAgICAgIHRpdGxlPVwiTWVldCBleGNpdGluZyBmZWF0dXJlc1wiXHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPEdyaWQgc3g9e3N0eWxlcy5ncmlkfT5cclxuICAgICAgICAgIHtkYXRhLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICA8RmVhdHVyZUNhcmRcclxuICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgICAgc3JjPXtpdGVtLmltZ1NyY31cclxuICAgICAgICAgICAgICBhbHQ9e2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgdGl0bGU9e2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgdGV4dD17aXRlbS50ZXh0fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgZ3JpZDoge1xyXG4gICAgcHQ6IFswLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAzXSxcclxuICAgIGdyaWRHYXA6IFtcclxuICAgICAgJzM3cHggMCcsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgICc0NXB4IDMwcHgnLFxyXG4gICAgICBudWxsLFxyXG4gICAgICAnNTBweCAzMHB4JyxcclxuICAgICAgbnVsbCxcclxuICAgICAgbnVsbCxcclxuICAgICAgJzkwcHggNzBweCcsXHJcbiAgICBdLFxyXG4gICAgd2lkdGg6IFsnMTAwJScsICc4MCUnLCAnMTAwJSddLFxyXG4gICAgbXg6ICdhdXRvJyxcclxuICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFtcclxuICAgICAgJ3JlcGVhdCgxLDFmciknLFxyXG4gICAgICBudWxsLFxyXG4gICAgICAncmVwZWF0KDIsMWZyKScsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgICdyZXBlYXQoMywxZnIpJyxcclxuICAgIF0sXHJcbiAgfSxcclxufTtcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBHcmlkIH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgU2VjdGlvbkhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL3NlY3Rpb24taGVhZGVyJztcclxuaW1wb3J0IEZlYXR1cmVDYXJkQ29sdW1uIGZyb20gJ2NvbXBvbmVudHMvZmVhdHVyZS1jYXJkLWNvbHVtbi5qcyc7XHJcbmltcG9ydCBWZWN0b3IgZnJvbSAnYXNzZXRzL2tleS1mZWF0dXJlL3ByYWN0aWNlICgxKS5wbmcnO1xyXG5pbXBvcnQgRWRpdGluZyBmcm9tICdhc3NldHMva2V5LWZlYXR1cmUvaGVscCAoMSkucG5nJztcclxuaW1wb3J0IFNwZWVkIGZyb20gJ2Fzc2V0cy9rZXktZmVhdHVyZS9wcm9tb3Rpb24gKDIpLnBuZyc7XHJcblxyXG5jb25zdCBkYXRhID0gW1xyXG4gIHtcclxuICAgIGlkOiAxLFxyXG4gICAgaW1nU3JjOiBWZWN0b3IsXHJcbiAgICBhbHRUZXh0OiAnUHJhY3RpY2FsIExlYXJuaW5nJyxcclxuICAgIHRpdGxlOiAnUHJhY3RpY2FsIExlYXJuaW5nJyxcclxuICAgIHRleHQ6XHJcbiAgICAgICdUaGUgdGhlb3J5IGlzIGFsbCBhYm91dCByZWFkaW5nIGEgZ2l2ZW4gc2V0IG9mIG1hdGVyaWFscyBhbmQgdW5kZXJzdGFuZGluZyB3aGF0IHRoZSBtYXRlcmlhbHMgd2FudCB0byBjb252ZXkuIFdoZXJlYXMgdG8gZ2FpbiBwcmFjdGljYWwga25vd2xlZGdlLCB5b3UgbmVlZCB0byBleHBsb3JlIHZhcmlvdXMgb3B0aW9ucyBhbmQgc2VlIHdoYXQgd29ya3MgdGhlIGJlc3QuJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAyLFxyXG4gICAgaW1nU3JjOiBFZGl0aW5nLFxyXG4gICAgYWx0VGV4dDogJyAyNCAqNyBNZW50b3IgU3VwcG9ydCcsXHJcbiAgICB0aXRsZTogJzI0ICo3IE1lbnRvciBTdXBwb3J0JyxcclxuICAgIHRleHQ6XHJcbiAgICAgICd0aGUgUGF0aCB0byBzdWNjZXNzIGNhbiBiZSB0b3VnaCBidXQgdGhlIHJpZ2h0IGd1aWRhbmNlIGFuZCBhbiBleHBlcnQgaGVscGluZyBoYW5kIGNhbiBtYWtlIHRoaXMgcGF0aCAgZW5qb3lhYmxlIGFuZCBtYWtlIHlvdXIgZWZmb3J0cyBjb3VudCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMyxcclxuICAgIGltZ1NyYzogU3BlZWQsXHJcbiAgICBhbHRUZXh0OiAnSW50ZXJuc2hpcHMnLFxyXG4gICAgdGl0bGU6ICdJbnRlcm5zaGlwcycsXHJcbiAgICB0ZXh0OlxyXG4gICAgICAnSW5kdXN0cnkgbGVhZGluZyBjdXJyaWN1bHVtIGRlc2lnbmVkIGJ5IGV4cGVydCBkZXZlbG9wZXJzIHR1cm5lZCBlZHVjYXRvcnMgd2hvIGhhdmUgaW52ZXN0ZWQgdGltZSB0byBjcmVhdGUgcXVhbGl0eSBjb250ZW50IGluZnVzZWQgd2l0aCB1bmlxdWUgdGVhY2hpbmcgbWV0aG9kb2xvZ3kuJyxcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gS2V5RmVhdHVyZSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gc3g9e3sgdmFyaWFudDogJ3NlY3Rpb24ua2V5RmVhdHVyZScgfX0gaWQ9XCJmZWF0dXJlXCI+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPFNlY3Rpb25IZWFkZXJcclxuICAgICAgICAgIHNsb2dhbj1cIlF1YWxpdHkgZmVhdHVyZXNcIlxyXG4gICAgICAgICAgdGl0bGU9XCJFWENMVVNJVkUgRkVBVFVSRVNcIlxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxHcmlkIHN4PXtzdHlsZXMuZ3JpZH0+XHJcbiAgICAgICAgICB7ZGF0YS5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgPEZlYXR1cmVDYXJkQ29sdW1uXHJcbiAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxyXG4gICAgICAgICAgICAgIHNyYz17aXRlbS5pbWdTcmN9XHJcbiAgICAgICAgICAgICAgYWx0PXtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgIHRpdGxlPXtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgIHRleHQ9e2l0ZW0udGV4dH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGdyaWQ6IHtcclxuICAgIHB4OiBbMCwgbnVsbCwgbnVsbCwgJzQwcHgnLCBudWxsLCAnODBweCddLFxyXG4gICAgcHQ6IFswLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAzXSxcclxuICAgIGdyaWRHYXA6IFsnMzVweCAwJywgbnVsbCwgJzQwcHggMCddLFxyXG4gICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogW1xyXG4gICAgICAncmVwZWF0KDEsMWZyKScsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgICdyZXBlYXQoMiwxZnIpJyxcclxuICAgICAgbnVsbCxcclxuICAgICAgJ3JlcGVhdCgzLDFmciknLFxyXG4gICAgXSxcclxuICAgIHdpZHRoOiBbJzEwMCUnLCAnODAlJywgJzEwMCUnXSxcclxuICAgIG14OiAnYXV0bycsXHJcbiAgICAnJiA+IGRpdic6IHtcclxuICAgICAgcHg6IFswLCAnMTVweCcsIG51bGwsICcyNXB4JywgbnVsbCwgJzMwcHgnLCAnNDBweCcsICc2MHB4J10sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3gsIENvbnRhaW5lciwgRmxleCB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IFByaWNlQ2FyZCBmcm9tICdjb21wb25lbnRzL3ByaWNlLWNhcmQnO1xyXG5pbXBvcnQgU2VjdGlvbkhlYWRlciBmcm9tICdjb21wb25lbnRzL3NlY3Rpb24taGVhZGVyJztcclxuaW1wb3J0IHsgSW9Jb3NDaGVja21hcmtDaXJjbGUsIElvSW9zQ2xvc2VDaXJjbGUgfSBmcm9tICdyZWFjdC1pY29ucy9pbyc7XHJcbmltcG9ydCBQYXR0ZXJuQkcgZnJvbSAnYXNzZXRzL3BhdHRlcm5CRy5wbmcnO1xyXG5cclxuY29uc3QgcGFja2FnZXMgPSBbXHJcbiAge1xyXG4gICAgbmFtZTogJ0ZyZWUgUGxhbicsXHJcbiAgICBkZXNjcmlwdGlvbjogJ0ZvciBTbWFsbCB0ZWFtcyBvciBvZmZpY2UnLFxyXG4gICAgYnV0dG9uVGV4dDogJ1NpZ251cCBOb3cnLFxyXG4gICAgcG9pbnRzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBpY29uOiA8SW9Jb3NDaGVja21hcmtDaXJjbGUgLz4sXHJcbiAgICAgICAgdGV4dDogJ1VsdGltYXRlIGFjY2VzcyB0byBhbGwgY291cnNlLCBleGVyY2lzZXMgYW5kIGFzc2Vzc21lbnRzJyxcclxuICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGljb246IDxJb0lvc0NoZWNrbWFya0NpcmNsZSAvPixcclxuICAgICAgICB0ZXh0OlxyXG4gICAgICAgICAgJ0ZyZWUgYWNjZXNzIGZvciBhbGwga2luZCBvZiBleGVyY2lzZSBjb3JyZWN0aW9ucyB3aXRoIGRvd25sb2Fkcy4nLFxyXG4gICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWNvbjogPElvSW9zQ2hlY2ttYXJrQ2lyY2xlIC8+LFxyXG4gICAgICAgIHRleHQ6ICdUb3RhbCBhc3Nlc3NtZW50IGNvcnJlY3Rpb25zIHdpdGggZnJlZSBkb3dubG9hZCBhY2Nlc3Mgc3lzdGVtJyxcclxuICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGljb246IDxJb0lvc0Nsb3NlQ2lyY2xlIC8+LFxyXG4gICAgICAgIHRleHQ6ICdVbmxpbWl0ZWQgZG93bmxvYWQgb2YgY291cnNlcyBvbiB0aGUgbW9iaWxlIGFwcCBjb250ZW50cycsXHJcbiAgICAgICAgaXNBdmFpbGFibGU6IGZhbHNlLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWNvbjogPElvSW9zQ2xvc2VDaXJjbGUgLz4sXHJcbiAgICAgICAgdGV4dDogJ0Rvd25sb2FkIGFuZCBwcmludCBjb3Vyc2VzIGFuZCBleGVyY2lzZXMgaW4gUERGJyxcclxuICAgICAgICBpc0F2YWlsYWJsZTogZmFsc2UsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaGVhZGVyOiAnUmVjb21tZW5kZWQnLFxyXG4gICAgbmFtZTogJ1ByZW1pdW0nLFxyXG4gICAgZGVzY3JpcHRpb246ICdGb3Igc3RhcnR1cCBlbnRlcnByaXNlJyxcclxuICAgIHByaWNlV2l0aFVuaXQ6ICckMjkuOTkvJyxcclxuICAgIGJ1dHRvblRleHQ6ICdTaWdudXAgTm93JyxcclxuICAgIHBvaW50czogW1xyXG4gICAgICB7XHJcbiAgICAgICAgaWNvbjogPElvSW9zQ2hlY2ttYXJrQ2lyY2xlIC8+LFxyXG4gICAgICAgIHRleHQ6ICdVbHRpbWF0ZSBhY2Nlc3MgdG8gYWxsIGNvdXJzZSwgZXhlcmNpc2VzIGFuZCBhc3Nlc3NtZW50cycsXHJcbiAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpY29uOiA8SW9Jb3NDaGVja21hcmtDaXJjbGUgLz4sXHJcbiAgICAgICAgdGV4dDpcclxuICAgICAgICAgICdGcmVlIGFjY2VzcyBmb3IgYWxsIGtpbmQgb2YgZXhlcmNpc2UgY29ycmVjdGlvbnMgd2l0aCBkb3dubG9hZHMuJyxcclxuICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGljb246IDxJb0lvc0NoZWNrbWFya0NpcmNsZSAvPixcclxuICAgICAgICB0ZXh0OiAnVG90YWwgYXNzZXNzbWVudCBjb3JyZWN0aW9ucyB3aXRoIGZyZWUgZG93bmxvYWQgYWNjZXNzIHN5c3RlbScsXHJcbiAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpY29uOiA8SW9Jb3NDaGVja21hcmtDaXJjbGUgLz4sXHJcbiAgICAgICAgdGV4dDogJ1VubGltaXRlZCBkb3dubG9hZCBvZiBjb3Vyc2VzIG9uIHRoZSBtb2JpbGUgYXBwIGNvbnRlbnRzJyxcclxuICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGljb246IDxJb0lvc0NoZWNrbWFya0NpcmNsZSAvPixcclxuICAgICAgICB0ZXh0OiAnRG93bmxvYWQgYW5kIHByaW50IGNvdXJzZXMgYW5kIGV4ZXJjaXNlcyBpbiBQREYnLFxyXG4gICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdGcmVlIFBsYW4nLFxyXG4gICAgZGVzY3JpcHRpb246ICdGb3IgU21hbGwgdGVhbXMgb3Igb2ZmaWNlJyxcclxuICAgIGJ1dHRvblRleHQ6ICdTaWdudXAgTm93JyxcclxuICAgIHBvaW50czogW1xyXG4gICAgICB7XHJcbiAgICAgICAgaWNvbjogPElvSW9zQ2hlY2ttYXJrQ2lyY2xlIC8+LFxyXG4gICAgICAgIHRleHQ6ICdVbHRpbWF0ZSBhY2Nlc3MgdG8gYWxsIGNvdXJzZSwgZXhlcmNpc2VzIGFuZCBhc3Nlc3NtZW50cycsXHJcbiAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpY29uOiA8SW9Jb3NDaGVja21hcmtDaXJjbGUgLz4sXHJcbiAgICAgICAgdGV4dDpcclxuICAgICAgICAgICdGcmVlIGFjY2VzcyBmb3IgYWxsIGtpbmQgb2YgZXhlcmNpc2UgY29ycmVjdGlvbnMgd2l0aCBkb3dubG9hZHMuJyxcclxuICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGljb246IDxJb0lvc0NoZWNrbWFya0NpcmNsZSAvPixcclxuICAgICAgICB0ZXh0OiAnVG90YWwgYXNzZXNzbWVudCBjb3JyZWN0aW9ucyB3aXRoIGZyZWUgZG93bmxvYWQgYWNjZXNzIHN5c3RlbScsXHJcbiAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpY29uOiA8SW9Jb3NDbG9zZUNpcmNsZSAvPixcclxuICAgICAgICB0ZXh0OiAnVW5saW1pdGVkIGRvd25sb2FkIG9mIGNvdXJzZXMgb24gdGhlIG1vYmlsZSBhcHAgY29udGVudHMnLFxyXG4gICAgICAgIGlzQXZhaWxhYmxlOiBmYWxzZSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGljb246IDxJb0lvc0Nsb3NlQ2lyY2xlIC8+LFxyXG4gICAgICAgIHRleHQ6ICdEb3dubG9hZCBhbmQgcHJpbnQgY291cnNlcyBhbmQgZXhlcmNpc2VzIGluIFBERicsXHJcbiAgICAgICAgaXNBdmFpbGFibGU6IGZhbHNlLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG5dO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWNrYWdlKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBpZD1cInByaWNpbmdcIiBzeD17c3R5bGVzLnByaWNpbmd9PlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxTZWN0aW9uSGVhZGVyXHJcbiAgICAgICAgICB0aXRsZT1cIkxldOKAmXMgc2VlIGhvdyBpdCB3b3Jrc1wiXHJcbiAgICAgICAgICBzbG9nYW49XCJXaGF0cyB0aGUgZnVuY3Rpb25cIlxyXG4gICAgICAgICAgaXNXaGl0ZT17dHJ1ZX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxGbGV4XHJcbiAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgIGZsZXhXcmFwOiBbJ3dyYXAnLCBudWxsLCBudWxsLCAnbm93cmFwJ10sXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtwYWNrYWdlcy5tYXAoKHBhY2thZ2VEYXRhKSA9PiAoXHJcbiAgICAgICAgICAgIDxQcmljZUNhcmQgZGF0YT17cGFja2FnZURhdGF9IGtleT17cGFja2FnZURhdGEubmFtZX0gLz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvRmxleD5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIHByaWNpbmc6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ3ByaW1hcnknLFxyXG4gICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7UGF0dGVybkJHfSlgLFxyXG4gICAgYmFja2dyb3VuZFJlcGVhdDogYG5vLXJlcGVhdGAsXHJcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXIgY2VudGVyJyxcclxuICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxyXG4gICAgcHk6IFs4LCBudWxsLCA5LCBudWxsLCBudWxsLCAxMF0sXHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICcmOjpiZWZvcmUnOiB7XHJcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICBjb250ZW50OiAnXCJcIicsXHJcbiAgICAgIHRvcDogMCxcclxuICAgICAgcmlnaHQ6IDAsXHJcbiAgICAgIGJhY2tncm91bmQ6XHJcbiAgICAgICAgJ2xpbmVhci1ncmFkaWVudCgtNDVkZWcsIHJnYmEoNDIsNzIsMTI1LCAwLjMpIDI1JSwgdHJhbnNwYXJlbnQgMjUlLCB0cmFuc3BhcmVudCA1MCUsIHJnYmEoNDIsNzIsMTI1LCAwLjMpIDUwJSwgcmdiYSg0Miw3MiwxMjUsIDAuMykgNzUlLCB0cmFuc3BhcmVudCA3NSUsIHRyYW5zcGFyZW50KScsXHJcbiAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgIGJhY2tncm91bmRTaXplOiAnMzUwcHggMzUwcHgnLFxyXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgb3BhY2l0eTogMC4zLFxyXG4gICAgICB6SW5kZXg6IDAsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3gsIENvbnRhaW5lciwgQm94IH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgVGV4dEZlYXR1cmUgZnJvbSAnY29tcG9uZW50cy90ZXh0LWZlYXR1cmUnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnY29tcG9uZW50cy9pbWFnZSc7XHJcblxyXG5pbXBvcnQgUGFydG5lciBmcm9tICdhc3NldHMvcGFydG5lci5wbmcnO1xyXG5cclxuY29uc3QgZGF0YSA9IHtcclxuICBzdWJUaXRsZTogJ0NvcmUgZmVhdHVyZXMnLFxyXG4gIHRpdGxlOiAnU21hcnQgSmFja3BvdHMgdGhhdCB5b3UgbWF5IGxvdmUgdGhpcyBhbnl0aW1lICYgYW55d2hlcmUnLFxyXG4gIGRlc2NyaXB0aW9uOlxyXG4gICAgJ0dldCB5b3VyIHRlc3RzIGRlbGl2ZXJlZCBhdCBsZXQgaG9tZSBjb2xsZWN0IHNhbXBsZSBmcm9tIHRoZSB2aWN0b3J5IG9mIHRoZSBtYW5hZ2VtZW50cyB0aGF0IHN1cHBsaWVzIGJlc3QgZGVzaWduIHN5c3RlbSBndWlkZWxpbmVzIGV2ZXIuIEdldCB5b3VyIHRlc3RzIGRlbGl2ZXJlZCBhdCBsZXQgaG9tZSBjb2xsZWN0IHNhbXBsZS4nLFxyXG4gIGJ0bk5hbWU6ICdHZXQgU3RhcnRlZCcsXHJcbiAgYnRuVVJMOiAnIycsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYXJ0bmVyU2VjdGlvbigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gc3g9e3sgdmFyaWFudDogJ3NlY3Rpb24ucGFydG5lcicgfX0+XHJcbiAgICAgIDxDb250YWluZXIgc3g9e3N0eWxlcy5jb250YWluZXJCb3h9PlxyXG4gICAgICAgIDxCb3ggc3g9e3N0eWxlcy5jb250ZW50Qm94fT5cclxuICAgICAgICAgIDxUZXh0RmVhdHVyZVxyXG4gICAgICAgICAgICBzdWJUaXRsZT17ZGF0YS5zdWJUaXRsZX1cclxuICAgICAgICAgICAgdGl0bGU9e2RhdGEudGl0bGV9XHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtkYXRhLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICBidG5OYW1lPXtkYXRhLmJ0bk5hbWV9XHJcbiAgICAgICAgICAgIGJ0blVSTD17ZGF0YS5idG5VUkx9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICAgIDxCb3ggc3g9e3sgcHg6IFswLCBudWxsLCAnNDBweCcsIDBdIH19PlxyXG4gICAgICAgICAgPEltYWdlIHNyYz17UGFydG5lcn0gYWx0PVwiUGFydG5lclwiIC8+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBjb250YWluZXJCb3g6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcclxuICAgIGZsZXhXcmFwOiBbJ3dyYXAnLCBudWxsLCBudWxsLCAnbm93cmFwJ10sXHJcbiAgfSxcclxuICBjb250ZW50Qm94OiB7XHJcbiAgICBmbGV4U2hyaW5rOiAwLFxyXG4gICAgcHg6IFswLCBudWxsLCAnMzBweCcsIDBdLFxyXG4gICAgdGV4dEFsaWduOiBbJ2NlbnRlcicsIG51bGwsIG51bGwsICdsZWZ0J10sXHJcbiAgICB3aWR0aDogWycxMDAlJywgNDUwLCA1NTAsICczNTBweCcsICc0MTBweCcsICc0ODVweCddLFxyXG4gICAgbXg6ICdhdXRvJyxcclxuICAgIHBiOiBbJzMwcHgnLCBudWxsLCBudWxsLCAwXSxcclxuICAgICcuZGVzY3JpcHRpb24nOiB7XHJcbiAgICAgIHByOiBbMCwgbnVsbCwgbnVsbCwgbnVsbCwgNF0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3ggfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgQm94IH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgVGV4dEZlYXR1cmUgZnJvbSAnY29tcG9uZW50cy90ZXh0LWZlYXR1cmUnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnY29tcG9uZW50cy9pbWFnZSc7XHJcblxyXG5pbXBvcnQgUGF5bWVudFRodW1iIGZyb20gJ2Fzc2V0cy9wYXltZW50VGh1bWIucG5nJztcclxuaW1wb3J0IFBheW1lbnRQYXR0ZXJuIGZyb20gJ2Fzc2V0cy9wYXltZW50LXBhdHRlcm4ucG5nJztcclxuXHJcbmNvbnN0IGRhdGEgPSB7XHJcbiAgc3ViVGl0bGU6ICdQQVlNRU5UIFNFQ1VSSVRZJyxcclxuICB0aXRsZTogJ1NlY3VyZSBQYXltZW50IFRyYW5zYWN0aW9uIFN5c3RlbSB3aXRoICMxIFJhbmtpbmcnLFxyXG4gIGRlc2NyaXB0aW9uOlxyXG4gICAgJ0dldCB5b3VyIHRlc3RzIGRlbGl2ZXJlZCBhdCBsZXQgaG9tZSBjb2xsZWN0IHNhbXBsZSBmcm9tIHRoZSB2aWN0b3J5IG9mIHRoZSBtYW5hZ2VtZW50cyB0aGF0IHN1cHBsaWVzIGJlc3QgZGVzaWduIHN5c3RlbSBndWlkZWxpbmVzIGV2ZXIuIEdldCB5b3VyIHRlc3RzIGRlbGl2ZXJlZCBhdCBsZXQgaG9tZSBjb2xsZWN0IHNhbXBsZS4nLFxyXG4gIGJ0bk5hbWU6ICdMZWFybiBNb3JlJyxcclxuICBidG5VUkw6ICcjJyxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlY3VyZVBheW1lbnQoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIHN4PXt7IHZhcmlhbnQ6ICdzZWN0aW9uLnNlY3VyZVBheW1lbnQnIH19PlxyXG4gICAgICA8Qm94IHN4PXtzdHlsZXMuYmdPdmVybGF5fSAvPlxyXG4gICAgICA8Q29udGFpbmVyIHN4PXtzdHlsZXMuY29udGFpbmVyQm94fT5cclxuICAgICAgICA8Qm94IHN4PXtzdHlsZXMudGh1bWJuYWlsfT5cclxuICAgICAgICAgIDxJbWFnZSBzcmM9e1BheW1lbnRUaHVtYn0gYWx0PXtkYXRhLnRpdGxlfSAvPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICAgIDxCb3ggc3g9e3N0eWxlcy5jb250ZW50Qm94fT5cclxuICAgICAgICAgIDxUZXh0RmVhdHVyZVxyXG4gICAgICAgICAgICBzdWJUaXRsZT17ZGF0YS5zdWJUaXRsZX1cclxuICAgICAgICAgICAgdGl0bGU9e2RhdGEudGl0bGV9XHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtkYXRhLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICBidG5OYW1lPXtkYXRhLmJ0bk5hbWV9XHJcbiAgICAgICAgICAgIGJ0blVSTD17ZGF0YS5idG5VUkx9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgYmdPdmVybGF5OiB7XHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIHRvcDogMCxcclxuICAgIHJpZ2h0OiAwLFxyXG4gICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICB6SW5kZXg6IC0xLFxyXG4gICAgd2lkdGg6IFtcclxuICAgICAgJzEwMCUnLFxyXG4gICAgICBudWxsLFxyXG4gICAgICBudWxsLFxyXG4gICAgICAnY2FsYyg1MCUgKyA0MDBweCknLFxyXG4gICAgICAnY2FsYyg1MCUgKyA0ODBweCknLFxyXG4gICAgICAnY2FsYyg1MCUgKyA1NzBweCknLFxyXG4gICAgICBudWxsLFxyXG4gICAgICAnY2FsYyg1MCUgKyA2MjVweCknLFxyXG4gICAgXSxcclxuICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke1BheW1lbnRQYXR0ZXJufSlgLFxyXG4gICAgYmFja2dyb3VuZFJlcGVhdDogYG5vLXJlcGVhdGAsXHJcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICd0b3AgbGVmdCcsXHJcbiAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcclxuICB9LFxyXG4gIGNvbnRhaW5lckJveDoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcclxuICAgIGZsZXhXcmFwOiBbJ3dyYXAnLCBudWxsLCBudWxsLCAnbm93cmFwJ10sXHJcbiAgfSxcclxuICB0aHVtYm5haWw6IHtcclxuICAgIG1iOiAtMixcclxuICAgIG1sOiBbLTQsICctNDBweCcsIG51bGwsIG51bGwsIDBdLFxyXG4gICAgb3JkZXI6IFsyLCBudWxsLCBudWxsLCAwXSxcclxuICAgIHByOiBbNiwgbnVsbCwgNywgMF0sXHJcbiAgfSxcclxuICBjb250ZW50Qm94OiB7XHJcbiAgICB3aWR0aDogWycxMDAlJywgNDIwLCA0ODAsIDM4MCwgNTAwLCA1NzBdLFxyXG4gICAgbXg6ICdhdXRvJyxcclxuICAgIGZsZXhTaHJpbms6IDAsXHJcbiAgICB0ZXh0QWxpZ246IFsnY2VudGVyJywgbnVsbCwgbnVsbCwgJ2xlZnQnXSxcclxuICAgIHB0OiBbMCwgbnVsbCwgbnVsbCwgNCwgJzUwcHgnLCBudWxsLCA0LCAnODBweCddLFxyXG4gICAgcGw6IFswLCBudWxsLCBudWxsLCA0MCwgJzkwcHgnXSxcclxuICAgIHBiOiBbNywgbnVsbCwgbnVsbCwgOV0sXHJcbiAgICBwcjogWzAsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDZdLFxyXG4gIH0sXHJcbn07XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3gsIENvbnRhaW5lciwgSGVhZGluZywgVGV4dCwgQm94LCBJbWFnZSB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IFNlY3Rpb25IZWFkZXIgZnJvbSAnY29tcG9uZW50cy9zZWN0aW9uLWhlYWRlcic7XHJcbmltcG9ydCBSYXRpbmcgZnJvbSAnY29tcG9uZW50cy9yYXRpbmcnO1xyXG5pbXBvcnQgQnV0dG9uR3JvdXAgZnJvbSAnY29tcG9uZW50cy9idXR0b24tZ3JvdXAnO1xyXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAncmVhY3QtbXVsdGktY2Fyb3VzZWwnO1xyXG5cclxuaW1wb3J0IEF2YXRhcjEgZnJvbSAnYXNzZXRzL3Rlc3RpbW9uaWFsL2F2YXRhcjEucG5nJztcclxuaW1wb3J0IEF2YXRhcjIgZnJvbSAnYXNzZXRzL3Rlc3RpbW9uaWFsL2F2YXRhcjIucG5nJztcclxuaW1wb3J0IEF2YXRhcjMgZnJvbSAnYXNzZXRzL3Rlc3RpbW9uaWFsL2F2YXRhcjMucG5nJztcclxuaW1wb3J0IEF2YXRhcjQgZnJvbSAnYXNzZXRzL3Rlc3RpbW9uaWFsL2F2YXRhcjQucG5nJztcclxuXHJcbmNvbnN0IGRhdGEgPSBbXHJcbiAge1xyXG4gICAgaWQ6IDEsXHJcbiAgICB0aXRsZTogJ01vZGVybiBsb29rICYgdHJlbmRpbmcgZGVzaWduJyxcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAnXCJJICBoYXZlIHdvcmtlZCB3aXRoIERhdmXigJlzIEJyb3RoZXJzIFRlY2hub2xvZ3kgLCBBcyBhIEFuZHJvaWQgRGV2ZWxvcGVyIC4gQWthc2ggRGV2IFNpciBBbHdheXMgIGhlbHBlZCAgbWUgIHRvIHdoZW5ldmVyICBJIHdhcyBOZWVkZWQgIHRvIExlYXJuIG5ldyBUZWNobm9sb2d5IEZvciAgVGhlIFByb2plY3TigJlzLiBNeSBXb3JrIEV4cGVyaWVuY2Ugd2FzIEV4dHJlbWVseSBHb29kIHdpdGggQWthc2ggRGF2ZSBTaXIuIEFrYXNoICBTaXIgQWx3YXlzIENhcmUgdG8gRW1wbG95ZWVzIGFuZCBhcyB3ZWxsIGFzIENsaWVudHMuIFRoZXkgQWx3YXlzIHRyeSB0byBGdWxsIGZpbGwgYWxsIFJlcXVpcmVtZW50cyBvZiB0aGUgQ2xpZW50cy4gQWthc2ggRGF2ZSBEb2luZyBHcmVhdCBXb3JrLiDigJ0nLFxyXG4gICAgYXZhdGFyOiBBdmF0YXIxLFxyXG4gICAgbmFtZTogJ0thbGthIFByYXNoYWQnLFxyXG4gICAgZGVzaWduYXRpb246ICdAS2Fsa2FQcmFzaGFkJyxcclxuICAgIHJldmlldzogNCxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAyLFxyXG4gICAgdGl0bGU6ICdEZXNpZ24gUXVhbGl0eSAmIHBlcmZvcm1hbmNlJyxcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAnRGF3YXkgaXMgZ3JlYXQgcGxhdGZvcm0gdG8gbGVhcm4gdGVjaG5vbG9naWVzLCBwZW9wbGVzIHdobyB3YW50IHRvIGxlYXJuIHByb2dyYW1taW5nIGZyb20gc2NyYXRjaCB0aGlzIGlzIGEgYXdlc29tZSBwbGF0Zm9ybSB0aGVtICx0aGV5IGluc3VyZSB0aGF0IGV2ZXJ5IHBlcnNvbiBjYW4gc3R1ZHkgY29tZm9ydGFibHkgYWNjb3JkaW5nIHRvIHRoZWlyIHBhY2UuIEhpZ2hseSByZWNvbW1lbmRlZCBmb3IgcGVvcGxlIHdobyB3YW50IHRvIHN0YXJ0IHRoZWlyIGNhcmVlciBpbiBJVCcsXHJcbiAgICBhdmF0YXI6IEF2YXRhcjIsXHJcbiAgICBuYW1lOiAnUmlzaGkgQ2hvdWJleScsXHJcbiAgICBkZXNpZ25hdGlvbjogJ0BSaXNoaUNob3ViZXknLFxyXG4gICAgcmV2aWV3OiA1LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDMsXHJcbiAgICB0aXRsZTogJ0xheW91dCBhbmQgb3JnYW5pemVkIGxheWVycycsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgJ0Rhd2F5IGlzIGEgYmVzdCBwbGF0Zm9ybSBmb3IgbGVhcm5pbmcsIEltIGRvaW5nIG15IGludGVybnNoaXAgZnJvbSBoZXJlICwgTWVudG9ycyBhcmUgcmVhZHkgdG8gZ3VpZGVcXHRlY2ggIGFueSB0aW1lIHdoZW5ldmVyIEkgc3R1Y2sgb24gcGVydGljdWxhciBwcm9ibGVtIC4gSW0gZ2V0dGluZyB0byBsZWFybiAgbmV3IHRlY2hub2xvZ2llcyBpbiBhIHBlcmZlY3QgbWFubmVyIHdpdGggcGVyZmVjdCB0dXRvcnMgLCBBbG9uZyB3aXRoIHRlYWNoaW5nIHRoZXkgYWxzbyBtb3RpdmF0ZXMgdXMsICB0byBjcmVhdGUgYSBjdXJpb3NpdHkgdG8gbGVhcm4gIG1vcmUuJyxcclxuICAgIGF2YXRhcjogQXZhdGFyMyxcclxuICAgIG5hbWU6ICdHeWF0cmkgVGl3YXJpJyxcclxuICAgIGRlc2lnbmF0aW9uOiAnQEd5YXRyaVRpd2FyaScsXHJcbiAgICByZXZpZXc6IDUsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNCxcclxuICAgIHRpdGxlOiAnTW9kZXJuIGxvb2sgJiB0cmVuZGluZyBkZXNpZ24nLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgICcgbGVhcm5lZCBhIGxvdCBpbiBEYXdheS4gIHdpdGggZG9pbmcgc2VsZiBzdHVkeSwgSSBhbHNvIGdldCB0aGUgZ3VpZGFuY2Ugb2YgdGVhY2hlcnMgd2hpY2ggaXMgdmVyeSBoZWxwZnVsLicsXHJcbiAgICBhdmF0YXI6IEF2YXRhcjQsXHJcbiAgICBuYW1lOiAnYWplZXRhIFNhaHUnLFxyXG4gICAgZGVzaWduYXRpb246ICdAYWplZXRhU2FodScsXHJcbiAgICByZXZpZXc6IDQsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNSxcclxuICAgIHRpdGxlOiAnTW9kZXJuIGxvb2sgJiB0cmVuZGluZyBkZXNpZ24nLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgICcgSSBhbSB3b3JraW5nIGFzIGEgaW50ZXJuIGluIGRhd2F5IHRlY2hub2xvZ3kgZm9ybSBsYXN0IDMgbW9udGhzIGFuZCBoZXJlIGlzIHNvbWUgcG9pbnRzIGFib3V0IG15IGludGVybnNoaXAgZXhwZXJpZW5jZS5UaGV5IG1vcmUgZm9jdXMgb24gc2VsZiBsZWFybmluZyByYXRoZXIgdGhlbiBqdXN0IHRlYWNoaW5nIG9yIGV4cGxhaW5pbmcgdG9waWNzLlRoZXkgaGVscCB0byB1cGdyYWRlIHByb2dyYW1taW5nIGxvZ2ljcyAgVGhleSBpbXByb3ZlZCBteSBEZXNpZ25pbmcgc2tpbGxzLiBUcmFpbmVyIGFuZCBmZWxsb3cgaW50ZXJucyBhcmUgYWxzbyB2ZXJ5IGhlbHBmdWwgYW5kIGtpbmQuJ1xyXG4gICAsIGF2YXRhcjogQXZhdGFyNCxcclxuICAgIG5hbWU6ICdBYWthbnNoYSBTYWh1JyxcclxuICAgIGRlc2lnbmF0aW9uOiAnQEFha2Fuc2hhU2FodScsXHJcbiAgICByZXZpZXc6IDUsXHJcbiAgfSxcclxuXTtcclxuXHJcbmNvbnN0IHJlc3BvbnNpdmUgPSB7XHJcbiAgZGVza3RvcDoge1xyXG4gICAgYnJlYWtwb2ludDogeyBtYXg6IDMwMDAsIG1pbjogMTYxOSB9LFxyXG4gICAgaXRlbXM6IDQsXHJcbiAgICBzbGlkZXNUb1NsaWRlOiA0LCAvLyBvcHRpb25hbCwgZGVmYXVsdCB0byAxLlxyXG4gIH0sXHJcbiAgbGFwdG9wOiB7XHJcbiAgICBicmVha3BvaW50OiB7IG1heDogMTYxOSwgbWluOiAxMDI0IH0sXHJcbiAgICBpdGVtczogMyxcclxuICAgIHNsaWRlc1RvU2xpZGU6IDMsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IHRvIDEuXHJcbiAgfSxcclxuICB0YWJsZXQ6IHtcclxuICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiAxMDI0LCBtaW46IDY0MCB9LFxyXG4gICAgaXRlbXM6IDIsXHJcbiAgICBzbGlkZXNUb1NsaWRlOiAyLCAvLyBvcHRpb25hbCwgZGVmYXVsdCB0byAxLlxyXG4gIH0sXHJcbiAgbW9iaWxlOiB7XHJcbiAgICBicmVha3BvaW50OiB7IG1heDogNjM5LCBtaW46IDAgfSxcclxuICAgIGl0ZW1zOiAxLFxyXG4gICAgc2xpZGVzVG9TbGlkZTogMSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgdG8gMS5cclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGVzdGltb25pYWxDYXJkKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBpZD1cInRlc3RpbW9uaWFsXCIgc3g9e3sgdmFyaWFudDogJ3NlY3Rpb24udGVzdGltb25pYWwnIH19PlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxTZWN0aW9uSGVhZGVyIHNsb2dhbj1cIlRlc3RpbW9uaWFsXCIgdGl0bGU9XCJXSEFUIE9VUiBTVFVERU5UUyBTQVkgQUJPVVQgVVNcIiAvPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPEJveCBzeD17c3R5bGVzLmNhcm91c2VsV3JhcHBlcn0+XHJcbiAgICAgICAgPENhcm91c2VsXHJcbiAgICAgICAgYXV0b1BsYXk9e3RydWV9XHJcbiAgICAgICAgICBhZGRpdGlvbmFsVHJhbnNmcm9tPXswfVxyXG4gICAgICAgICAgYXJyb3dzPXtmYWxzZX1cclxuICAgICAgICAgIGF1dG9QbGF5U3BlZWQ9ezMwMDB9XHJcbiAgICAgICAgICBjZW50ZXJNb2RlPXtmYWxzZX1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cIlwiXHJcbiAgICAgICAgICBjb250YWluZXJDbGFzcz1cImNhcm91c2VsLWNvbnRhaW5lclwiXHJcbiAgICAgICAgICBjdXN0b21CdXR0b25Hcm91cD17PEJ1dHRvbkdyb3VwIC8+fVxyXG4gICAgICAgICAgZG90TGlzdENsYXNzPVwiXCJcclxuICAgICAgICAgIGRyYWdnYWJsZVxyXG4gICAgICAgICAgZm9jdXNPblNlbGVjdD17ZmFsc2V9XHJcbiAgICAgICAgICBpbmZpbml0ZT17dHJ1ZX1cclxuICAgICAgICAgIGl0ZW1DbGFzcz1cIlwiXHJcbiAgICAgICAgICBrZXlCb2FyZENvbnRyb2xcclxuICAgICAgICAgIG1pbmltdW1Ub3VjaERyYWc9ezgwfVxyXG4gICAgICAgICAgcmVuZGVyQnV0dG9uR3JvdXBPdXRzaWRlXHJcbiAgICAgICAgICByZW5kZXJEb3RzT3V0c2lkZT17ZmFsc2V9XHJcbiAgICAgICAgICByZXNwb25zaXZlPXtyZXNwb25zaXZlfVxyXG4gICAgICAgICAgc2hvd0RvdHM9e2ZhbHNlfVxyXG4gICAgICAgICAgc2xpZGVyQ2xhc3M9XCJcIlxyXG4gICAgICAgICAgc2xpZGVzVG9TbGlkZT17MX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7ZGF0YS5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgPEJveCBzeD17c3R5bGVzLnJldmlld0NhcmR9IGtleT17YHRlc3RpbW9uaWFsLS1rZXkke2l0ZW0uaWR9YH0+XHJcbiAgICAgICAgICAgICAgPFJhdGluZyByYXRpbmc9e2l0ZW0ucmV2aWV3fSAvPlxyXG4gICAgICAgICAgICAgIDxIZWFkaW5nIGFzPVwiaDNcIiBzeD17c3R5bGVzLnRpdGxlfT5cclxuICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgIDwvSGVhZGluZz5cclxuICAgICAgICAgICAgICA8VGV4dCBzeD17c3R5bGVzLmRlc2NyaXB0aW9ufT57aXRlbS5kZXNjcmlwdGlvbn08L1RleHQ+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtpdGVtLmF2YXRhcn0gYWx0PVwiQ2xpZW50IEltYWdlXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXZpZXdlci1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxIZWFkaW5nIGFzPVwiaDRcIiBzeD17c3R5bGVzLmhlYWRpbmd9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIDwvSGVhZGluZz5cclxuICAgICAgICAgICAgICAgICAgPFRleHQgc3g9e3N0eWxlcy5kZXNpZ25hdGlvbn0+e2l0ZW0uZGVzaWduYXRpb259PC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9DYXJvdXNlbD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGNhcm91c2VsV3JhcHBlcjoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIGFsaWduSXRlbXM6ICdmbGV4LWVuZCcsXHJcbiAgICBtdDogJy0zNXB4JyxcclxuICAgIHB4OiAnMTVweCcsXHJcbiAgICAnLmNhcm91c2VsLWNvbnRhaW5lcic6IHtcclxuICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgbWF4V2lkdGg6IFtcclxuICAgICAgICAnMTAwJScsXHJcbiAgICAgICAgbnVsbCxcclxuICAgICAgICBudWxsLFxyXG4gICAgICAgICc3NTBweCcsXHJcbiAgICAgICAgJzEwMDBweCcsXHJcbiAgICAgICAgJzExODBweCcsXHJcbiAgICAgICAgbnVsbCxcclxuICAgICAgICAnY2FsYyg1MCUgKyA4NjVweCknLFxyXG4gICAgICBdLFxyXG4gICAgICBtcjogWydhdXRvJywgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgJy0yMjBweCddLFxyXG4gICAgICBtbDogJ2F1dG8nLFxyXG4gICAgICAnLnJlYWN0LW11bHRpLWNhcm91c2VsLWl0ZW0nOiB7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjI1cycsXHJcbiAgICAgIH0sXHJcbiAgICAgICcucmVhY3QtbXVsdGktY2Fyb3VzZWwtaXRlbS0tYWN0aXZlOm50aC1vZi10eXBlKDRuKSc6IHtcclxuICAgICAgICBvcGFjaXR5OiAnMC41JyxcclxuICAgICAgICAnQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTYyMHB4KSc6IHtcclxuICAgICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICByZXZpZXdDYXJkOiB7XHJcbiAgICBib3hTaGFkb3c6ICcwcHggMHB4IDFweCByZ2JhKDM4LCA3OCwgMTE4LCAwLjM1KScsXHJcbiAgICB0cmFuc2l0aW9uOiAnYWxsIDAuM3MnLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnNnB4JyxcclxuICAgIHA6IFtcclxuICAgICAgJzMwcHggMjBweCAzNXB4JyxcclxuICAgICAgJzMwcHggMjVweCAzNXB4JyxcclxuICAgICAgJzMwcHggMjBweCAzNXB4JyxcclxuICAgICAgJzM1cHggMzBweCA0MHB4IDQwcHgnLFxyXG4gICAgICAnMzBweCAzMHB4IDM1cHgnLFxyXG4gICAgICAnMzVweCAzMHB4IDQwcHggNDBweCcsXHJcbiAgICBdLFxyXG4gICAgYmc6ICd3aGl0ZScsXHJcbiAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcclxuICAgIG06IFtcclxuICAgICAgJzI4cHggNXB4IDMwcHggNXB4JyxcclxuICAgICAgJzI4cHggMjBweCAzMHB4IDIwcHgnLFxyXG4gICAgICAnMjhweCAxNXB4IDMwcHggMTVweCcsXHJcbiAgICAgICcyOHB4IDE1cHggMzBweCAxNXB4JyxcclxuICAgICAgJzMwcHggMjBweCA0MHB4JyxcclxuICAgIF0sXHJcbiAgICAnJjpob3Zlcic6IHtcclxuICAgICAgYm94U2hhZG93OiAnMHB4IDZweCA0N3B4IHJnYmEoMzgsIDc4LCAxMTgsIDAuMSknLFxyXG4gICAgfSxcclxuICAgICcucmF0aW5nJzoge1xyXG4gICAgICBtYjogWzEsIG51bGwsIG51bGwsIDJdLFxyXG4gICAgICB1bDoge1xyXG4gICAgICAgIHBsOiAwLFxyXG4gICAgICAgIGxpc3RTdHlsZTogJ25vbmUnLFxyXG4gICAgICAgIG1iOiAwLFxyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgfSxcclxuICAgICAgc3ZnOiB7XHJcbiAgICAgICAgbWFyZ2luUmlnaHQ6ICcycHgnLFxyXG4gICAgICAgICcmOmxhc3Qtb2YtdHlwZSc6IHtcclxuICAgICAgICAgIG1hcmdpblJpZ2h0OiAwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgICcuc3Rhcic6IHtcclxuICAgICAgICBjb2xvcjogJ3llbGxvdycsXHJcbiAgICAgICAgbXI6ICcxcHgnLFxyXG4gICAgICB9LFxyXG4gICAgICAnLnN0YXItbyc6IHtcclxuICAgICAgICBjb2xvcjogJyNkZGQnLFxyXG4gICAgICAgIG1yOiAnMXB4JyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICAnLmNhcmQtZm9vdGVyJzoge1xyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICBtYXJnaW5Ub3A6IFs1LCBudWxsLCBudWxsLCAnMzNweCddLFxyXG4gICAgICAnLmltYWdlJzoge1xyXG4gICAgICAgIGZsZXhTaHJpbms6IDAsXHJcbiAgICAgICAgbXI6IFszLCBudWxsLCBudWxsLCA0XSxcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgaW1nOiB7XHJcbiAgICAgICAgICB3aWR0aDogJzU1cHgnLFxyXG4gICAgICAgICAgaGVpZ2h0OiAnNTVweCcsXHJcbiAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxyXG4gICAgICAgICAgb2JqZWN0Rml0OiAnY292ZXInLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgdGl0bGU6IHtcclxuICAgIGZvbnRTaXplOiBbMSwgMl0sXHJcbiAgICBmb250V2VpZ2h0OiA3MDAsXHJcbiAgICBtYjogWzMsIG51bGwsIG51bGwsICcyMnB4J10sXHJcbiAgICBjb2xvcjogJ3RleHQnLFxyXG4gICAgbGluZUhlaWdodDogMS42LFxyXG4gIH0sXHJcbiAgZGVzY3JpcHRpb246IHtcclxuICAgIGZvbnRTaXplOiBbMSwgbnVsbCwgbnVsbCwgMl0sXHJcbiAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcclxuICAgIGNvbG9yOiAndGV4dCcsXHJcbiAgICBsaW5lSGVpZ2h0OiBbMS44NSwgbnVsbCwgMl0sXHJcbiAgfSxcclxuICBoZWFkaW5nOiB7XHJcbiAgICBmb250U2l6ZTogWzEsIG51bGwsIG51bGwsIDJdLFxyXG4gICAgZm9udFdlaWdodDogNzAwLFxyXG4gICAgbWI6ICczcHgnLFxyXG4gICAgY29sb3I6ICd0ZXh0JyxcclxuICAgIGxpbmVIZWlnaHQ6IDEuMyxcclxuICB9LFxyXG4gIGRlc2lnbmF0aW9uOiB7XHJcbiAgICBjb2xvcjogJyMyNUEwRkYnLFxyXG4gICAgZm9udFdlaWdodDogJzUwMCcsXHJcbiAgICBmb250U2l6ZTogMSxcclxuICAgIGxpbmVIZWlnaHQ6IDEuNCxcclxuICB9LFxyXG59O1xyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4IH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIEdyaWQsIEJveCwgSGVhZGluZywgVGV4dCB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IFNlY3Rpb25IZWFkZXIgZnJvbSAnY29tcG9uZW50cy9zZWN0aW9uLWhlYWRlcic7XHJcblxyXG5pbXBvcnQgUGF0dGVybkJHIGZyb20gJ2Fzc2V0cy9wYXR0ZXJuQkcucG5nJztcclxuaW1wb3J0IEFycm93T2RkIGZyb20gJ2Fzc2V0cy9hcnJvd09kZC5wbmcnO1xyXG5pbXBvcnQgQXJyb3dFdmVuIGZyb20gJ2Fzc2V0cy9hcnJvd0V2ZW4ucG5nJztcclxuXHJcbmNvbnN0IGRhdGEgPSBbXHJcbiAge1xyXG4gICAgaWQ6IDEsXHJcbiAgICB0aXRsZTogJ1NldCBkaXNidXJzZW1lbnQgSW5zdHJ1Y3Rpb25zJyxcclxuICAgIHRleHQ6XHJcbiAgICAgICdHZXQgeW91ciBibG9vZCB0ZXN0cyBkZWxpdmVyZWQgYXQgaG9tZSBjb2xsZWN0IGEgc2FtcGxlIGZyb20gdGhlIHlvdXIgYmxvb2QgdGVzdHMuJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAyLFxyXG4gICAgdGl0bGU6ICdBc3NlbWJseSByZXRyaWV2ZXMgZnVuZHMgZnJvbSB5b3VyIGFjY291bnQnLFxyXG4gICAgdGV4dDpcclxuICAgICAgJ0dldCB5b3VyIGJsb29kIHRlc3RzIGRlbGl2ZXJlZCBhdCBob21lIGNvbGxlY3QgYSBzYW1wbGUgZnJvbSB0aGUgeW91ciBibG9vZCB0ZXN0cy4nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDMsXHJcbiAgICB0aXRsZTogJ0Fzc2VtYmx5IGluaXRpYXRlcyBkaXNidXJzZW1lbnQnLFxyXG4gICAgdGV4dDpcclxuICAgICAgJ0dldCB5b3VyIGJsb29kIHRlc3RzIGRlbGl2ZXJlZCBhdCBob21lIGNvbGxlY3QgYSBzYW1wbGUgZnJvbSB0aGUgeW91ciBibG9vZCB0ZXN0cy4nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDQsXHJcbiAgICB0aXRsZTogJ0N1c3RvbWVyIHJlY2VpdmVzIGZ1bmRzIHBheW1lbnQnLFxyXG4gICAgdGV4dDpcclxuICAgICAgJ0dldCB5b3VyIGJsb29kIHRlc3RzIGRlbGl2ZXJlZCBhdCBob21lIGNvbGxlY3QgYSBzYW1wbGUgZnJvbSB0aGUgeW91ciBibG9vZCB0ZXN0cy4nLFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXb3JrRmxvdygpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gc3g9e3N0eWxlcy53b3JrZmxvd30+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPFNlY3Rpb25IZWFkZXJcclxuICAgICAgICAgIHNsb2dhbj1cIldoYXRzIHRoZSBmdW5jdGlvblwiXHJcbiAgICAgICAgICB0aXRsZT1cIkxldOKAmXMgc2VlIGhvdyBpdCB3b3Jrc1wiXHJcbiAgICAgICAgICBpc1doaXRlPXt0cnVlfVxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxHcmlkIHN4PXtzdHlsZXMuZ3JpZH0+XHJcbiAgICAgICAgICB7ZGF0YS5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgPEJveCBzeD17c3R5bGVzLmNhcmR9IGtleT17aXRlbS5pZH0+XHJcbiAgICAgICAgICAgICAgPEJveCBzeD17c3R5bGVzLmljb25Cb3h9PntgMCR7aXRlbS5pZH1gfTwvQm94PlxyXG4gICAgICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy53cmFwcGVyfT5cclxuICAgICAgICAgICAgICAgIDxIZWFkaW5nIHN4PXtzdHlsZXMud3JhcHBlci50aXRsZX0+e2l0ZW0udGl0bGV9PC9IZWFkaW5nPlxyXG4gICAgICAgICAgICAgICAgPFRleHQgc3g9e3N0eWxlcy53cmFwcGVyLnN1YlRpdGxlfT57aXRlbS50ZXh0fTwvVGV4dD5cclxuICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICB3b3JrZmxvdzoge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAncHJpbWFyeScsXHJcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtQYXR0ZXJuQkd9KWAsXHJcbiAgICBiYWNrZ3JvdW5kUmVwZWF0OiBgbm8tcmVwZWF0YCxcclxuICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlciBjZW50ZXInLFxyXG4gICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIHB5OiBbOCwgbnVsbCwgOSwgbnVsbCwgbnVsbCwgMTBdLFxyXG4gICAgJyY6OmJlZm9yZSc6IHtcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcclxuICAgICAgdG9wOiAwLFxyXG4gICAgICByaWdodDogMCxcclxuICAgICAgYmFja2dyb3VuZDpcclxuICAgICAgICAnbGluZWFyLWdyYWRpZW50KC00NWRlZywgcmdiYSg0Miw3MiwxMjUsIDAuMykgMjUlLCB0cmFuc3BhcmVudCAyNSUsIHRyYW5zcGFyZW50IDUwJSwgcmdiYSg0Miw3MiwxMjUsIDAuMykgNTAlLCByZ2JhKDQyLDcyLDEyNSwgMC4zKSA3NSUsIHRyYW5zcGFyZW50IDc1JSwgdHJhbnNwYXJlbnQpJyxcclxuICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgYmFja2dyb3VuZFNpemU6ICczNTBweCAzNTBweCcsXHJcbiAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICBvcGFjaXR5OiAwLjMsXHJcbiAgICAgIHpJbmRleDogMCxcclxuICAgIH0sXHJcbiAgfSxcclxuICBncmlkOiB7XHJcbiAgICBtYjogLTEsXHJcbiAgICBwdDogMCxcclxuICAgIGdyaWRHYXA6IFtcclxuICAgICAgJzM1cHggMCcsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgICc0NXB4IDUwcHgnLFxyXG4gICAgICBudWxsLFxyXG4gICAgICAnNTBweCAyNXB4JyxcclxuICAgICAgbnVsbCxcclxuICAgICAgbnVsbCxcclxuICAgICAgJzUwcHggNjVweCcsXHJcbiAgICBdLFxyXG4gICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogW1xyXG4gICAgICAncmVwZWF0KDEsMWZyKScsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgICdyZXBlYXQoMiwxZnIpJyxcclxuICAgICAgbnVsbCxcclxuICAgICAgJ3JlcGVhdCg0LDFmciknLFxyXG4gICAgXSxcclxuICB9LFxyXG4gIGNhcmQ6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICB0ZXh0QWxpZ246IFsnY2VudGVyJywgbnVsbCwgJ2xlZnQnXSxcclxuICAgIHdpZHRoOiBbJzEwMCUnLCAnODAlJywgJzEwMCUnXSxcclxuICAgIG14OiAnYXV0bycsXHJcbiAgICAnJjo6YmVmb3JlJzoge1xyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgY29udGVudDogJ1wiXCInLFxyXG4gICAgICB0b3A6IDAsXHJcbiAgICAgIGxlZnQ6IFswLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCA3NSwgbnVsbCwgMTAwXSxcclxuICAgICAgYmFja2dyb3VuZFJlcGVhdDogYG5vLXJlcGVhdGAsXHJcbiAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlciBjZW50ZXInLFxyXG4gICAgICB3aWR0aDogMjE1LFxyXG4gICAgICBoZWlnaHQ6IDYwLFxyXG4gICAgICBvcGFjaXR5OiAwLjMsXHJcbiAgICAgICdAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEyMjBweCknOiB7XHJcbiAgICAgICAgZGlzcGxheTogJ25vbmUnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgICcmOm50aC1vZi10eXBlKDJuLTEpOjpiZWZvcmUnOiB7XHJcbiAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke0Fycm93T2RkfSlgLFxyXG4gICAgfSxcclxuICAgICcmOm50aC1vZi10eXBlKDJuKTo6YmVmb3JlJzoge1xyXG4gICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtBcnJvd0V2ZW59KWAsXHJcbiAgICAgIHRvcDogMTcsXHJcbiAgICB9LFxyXG4gICAgJyY6bGFzdC1jaGlsZDo6YmVmb3JlJzoge1xyXG4gICAgICBkaXNwbGF5OiAnbm9uZScsXHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIGljb25Cb3g6IHtcclxuICAgIHdpZHRoOiBbJzUwcHgnLCBudWxsLCAnNjBweCcsIG51bGwsIG51bGwsICc3MHB4J10sXHJcbiAgICBoZWlnaHQ6IFsnNTBweCcsIG51bGwsICc2MHB4JywgbnVsbCwgbnVsbCwgJzcwcHgnXSxcclxuICAgIGZsZXhTaHJpbms6IDAsXHJcbiAgICBib3JkZXJSYWRpdXM6IFsxNSwgbnVsbCwgMjMsIG51bGwsIG51bGwsIDMwXSxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgbWI6IFs1LCBudWxsLCBudWxsLCBudWxsLCBudWxsLCA2XSxcclxuICAgIG14OiBbJ2F1dG8nLCBudWxsLCAwXSxcclxuICAgIGZvbnRTaXplOiBbNiwgbnVsbCwgNywgbnVsbCwgbnVsbCwgJzMwcHgnXSxcclxuICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgIGNvbG9yOiAnIzIzNDU4MicsXHJcbiAgfSxcclxuICB3cmFwcGVyOiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICBtdDogJy01cHgnLFxyXG4gICAgdGl0bGU6IHtcclxuICAgICAgZm9udFNpemU6IFszLCBudWxsLCA0LCBudWxsLCBudWxsLCA1XSxcclxuICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IFsxLjQsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDEuNTVdLFxyXG4gICAgICBwcjogWzAsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDJdLFxyXG4gICAgICBtYjogWzIsIDNdLFxyXG4gICAgfSxcclxuXHJcbiAgICBzdWJUaXRsZToge1xyXG4gICAgICBmb250U2l6ZTogMSxcclxuICAgICAgZm9udFdlaWdodDogNDAwLFxyXG4gICAgICBsaW5lSGVpZ2h0OiBbMS44NSwgbnVsbCwgbnVsbCwgMS45LCAyXSxcclxuICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgIG9wYWNpdHk6IDAuNjUsXHJcbiAgICAgIHByOiBbMCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgNV0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiIsImV4cG9ydCBkZWZhdWx0IHtcclxuICAvLyBleGFtcGxlIGNvbG9ycyB3aXRoIGRhcmsgbW9kZVxyXG4gIGNvbG9yczoge1xyXG4gICAgdGV4dDogJyMzNDNENDgnLCAvLyBib2R5IGNvbG9yIGFuZCBwcmltYXJ5IGNvbG9yXHJcbiAgICB0ZXh0X3NlY29uZGFyeTogJyMwMjA3M0UnLCAvLyBzZWNvbmRhcnkgYm9keSBjb2xvclxyXG4gICAgaGVhZGluZzogJyMyNDQ4ODYnLCAvLyBwcmltYXJ5IGhlYWRpbmcgY29sb3JcclxuICAgIGhlYWRpbmdfc2Vjb25kYXJ5OiAnIzBGMjEzNycsIC8vIGhlYWRpbmcgY29sb3JcclxuICAgIGJhY2tncm91bmQ6ICcjRkZGRkZGJywgLy8gYm9keSBiYWNrZ3JvdW5kIGNvbG9yXHJcbiAgICBiYWNrZ3JvdW5kX3NlY29uZGFyeTogJyNGOUZCRkQnLCAvLyBzZWNvbmRhcnkgYmFja2dyb3VuZCBjb2xvclxyXG4gICAgYm9yZGVyX2NvbG9yOiAnI0U1RUNGNCcsIC8vIGJvcmRlciBjb2xvclxyXG4gICAgcHJpbWFyeTogJyMxRjNFNzYnLCAvLyBwcmltYXJ5IGJ1dHRvbiBhbmQgbGluayBjb2xvclxyXG4gICAgc2Vjb25kYXJ5OiAnIzI1Q0I5RScsIC8vIHNlY29uZGFyeSBjb2xvciAtIGNhbiBiZSB1c2VkIGZvciBob3ZlciBzdGF0ZXNcclxuICAgIG11dGVkOiAnIzdCODE4OCcsIC8vIG11dGVkIGNvbG9yXHJcbiAgICBhY2NlbnQ6ICcjNjA5JywgLy8gYSBjb250cmFzdCBjb2xvciBmb3IgZW1waGFzaXppbmcgVUlcclxuICAgIHllbGxvdzogJyNGNkM0MTYnLFxyXG5cclxuICAgIC8vIGhpZ2hsaWdodFx0YSBiYWNrZ3JvdW5kIGNvbG9yIGZvciBoaWdobGlnaHRpbmcgdGV4dFxyXG4gICAgbW9kZXM6IHtcclxuICAgICAgZGFyazoge1xyXG4gICAgICAgIHRleHQ6ICcjZmZmJyxcclxuICAgICAgICBiYWNrZ3JvdW5kOiAnIzAwMCcsXHJcbiAgICAgICAgcHJpbWFyeTogJyMwY2YnLFxyXG4gICAgICAgIHNlY29uZGFyeTogJyMwOWMnLFxyXG4gICAgICAgIG11dGVkOiAnIzExMScsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgYnJlYWtwb2ludHM6IFtcclxuICAgICc0ODBweCcsXHJcbiAgICAnNjQwcHgnLFxyXG4gICAgJzc2OHB4JyxcclxuICAgICcxMDI0cHgnLFxyXG4gICAgJzEyMjBweCcsXHJcbiAgICAnMTM2NnB4JyxcclxuICAgICcxNjIwcHgnLFxyXG4gIF0sXHJcbiAgZm9udHM6IHtcclxuICAgIGJvZHk6IFwiJ0RNIFNhbnMnLCBzYW5zLXNlcmlmXCIsXHJcbiAgICBoZWFkaW5nOiBcIidETSBTYW5zJywgc2Fucy1zZXJpZlwiLFxyXG4gIH0sXHJcbiAgZm9udFNpemVzOiBbMTIsIDE1LCAxNiwgMTgsIDIwLCAyMiwgMjQsIDI4LCAzMiwgMzYsIDQyLCA0OCwgNTIsIDY0XSxcclxuICBmb250V2VpZ2h0czoge1xyXG4gICAgYm9keTogJ25vcm1hbCcsXHJcbiAgICBoZWFkaW5nOiA1MDAsXHJcbiAgICBib2xkOiA3MDAsXHJcbiAgfSxcclxuICBsaW5lSGVpZ2h0czoge1xyXG4gICAgYm9keTogMS44LFxyXG4gICAgaGVhZGluZzogMS41LFxyXG4gIH0sXHJcbiAgbGV0dGVyU3BhY2luZ3M6IHtcclxuICAgIGJvZHk6ICdub3JtYWwnLFxyXG4gICAgY2FwczogJzAuMmVtJyxcclxuICAgIGhlYWRpbmc6ICctMC41cHgnLFxyXG4gIH0sXHJcbiAgc3BhY2U6IFswLCA1LCAxMCwgMTUsIDIwLCAyNSwgMzAsIDUwLCA4MCwgMTAwLCAxMjAsIDE1MF0sXHJcbiAgLy8gdmFyaWFudHMgY2FuIHVzZSBjdXN0b20sIHVzZXItZGVmaW5lZCBuYW1lc1xyXG4gIGxheW91dDoge1xyXG4gICAgY29udGFpbmVyOiB7XHJcbiAgICAgIG1heFdpZHRoOiBbXHJcbiAgICAgICAgJzEwMCUnLFxyXG4gICAgICAgIG51bGwsXHJcbiAgICAgICAgbnVsbCxcclxuICAgICAgICAnNzgwcHgnLFxyXG4gICAgICAgICcxMDIwcHgnLFxyXG4gICAgICAgICcxMjAwcHgnLFxyXG4gICAgICAgIG51bGwsXHJcbiAgICAgICAgJzEzMTBweCcsXHJcbiAgICAgIF0sXHJcbiAgICAgIHB4OiBbNCwgNl0sXHJcbiAgICB9LFxyXG4gICAgaGVhZGVyOiB7XHJcbiAgICAgIGNvbG9yOiAnIzAyMDczRScsXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxyXG4gICAgICBweTogMyxcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICB9LFxyXG4gICAgdG9vbGJhcjoge1xyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gICAgfSxcclxuICAgIG1haW46IHt9LFxyXG4gIH0sXHJcbiAgc2VjdGlvbjoge1xyXG4gICAga2V5RmVhdHVyZToge1xyXG4gICAgICBweTogWzgsIG51bGwsIDksIG51bGwsIG51bGwsIDEwXSxcclxuICAgIH0sXHJcbiAgICBmZWF0dXJlOiB7XHJcbiAgICAgIHB5OiBbOCwgbnVsbCwgOSwgbnVsbCwgbnVsbCwgMTBdLFxyXG4gICAgfSxcclxuICAgIHBhcnRuZXI6IHtcclxuICAgICAgcHQ6IFsyLCBudWxsLCBudWxsLCA1XSxcclxuICAgICAgcGI6IFs4LCBudWxsLCA5LCBudWxsLCBudWxsLCAxMF0sXHJcbiAgICB9LFxyXG4gICAgdGVzdGltb25pYWw6IHtcclxuICAgICAgcHk6IFs4LCBudWxsLCA5LCBudWxsLCBudWxsLCAxMF0sXHJcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgIH0sXHJcbiAgICBzZWN1cmVQYXltZW50OiB7XHJcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgIHB0OiA5LFxyXG4gICAgfSxcclxuICAgIGZhcToge1xyXG4gICAgICBweTogWzgsIG51bGwsIDksIG51bGwsIG51bGwsIDEwXSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBzZWN0aW9uSGVhZGVyOiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIG10OiAtMSxcclxuICAgIG1hcmdpbkJvdHRvbTogWyc1MHB4JywgbnVsbCwgJzYwcHgnLCBudWxsLCAnNjVweCcsICc3NXB4J10sXHJcbiAgICB0aXRsZToge1xyXG4gICAgICBmb250U2l6ZTogWycyNHB4JywgbnVsbCwgJzI4cHgnLCBudWxsLCBudWxsLCAnMzJweCcsIG51bGwsICczNnB4J10sXHJcbiAgICAgIGNvbG9yOiAnaGVhZGluZ19zZWNvbmRhcnknLFxyXG4gICAgICBsaW5lSGVpZ2h0OiBbMS4zLCBudWxsLCBudWxsLCAxLjJdLFxyXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICBmb250V2VpZ2h0OiAnNzAwJyxcclxuICAgICAgbGV0dGVyU3BhY2luZzogJy0uNXB4JyxcclxuICAgIH0sXHJcblxyXG4gICAgc3ViVGl0bGU6IHtcclxuICAgICAgZm9udFNpemU6IFswLCBudWxsLCAnMTRweCddLFxyXG4gICAgICBjb2xvcjogJ2hlYWRpbmcnLFxyXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICBsZXR0ZXJTcGFjaW5nOiBbJzEuNXB4JywgbnVsbCwgJzJweCddLFxyXG4gICAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcclxuICAgICAgZm9udFdlaWdodDogJzcwMCcsXHJcbiAgICAgIG1iOiAnOHB4JyxcclxuICAgICAgbGluZUhlaWdodDogMS41LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHRleHQ6IHtcclxuICAgIGhlYWRpbmc6IHtcclxuICAgICAgZm9udEZhbWlseTogJ2hlYWRpbmcnLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAnaGVhZGluZycsXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICdoZWFkaW5nJyxcclxuICAgICAgZm9udFNpemU6IDQsXHJcbiAgICAgIGxldHRlclNwYWNpbmc6ICdoZWFkaW5nJyxcclxuICAgICAgY29sb3I6ICdoZWFkaW5nJyxcclxuICAgIH0sXHJcbiAgICBoZXJvUHJpbWFyeToge1xyXG4gICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgZm9udFNpemU6IFtcclxuICAgICAgICAnNDBweCcsXHJcbiAgICAgICAgJzUycHgnLFxyXG4gICAgICAgICc2MHB4JyxcclxuICAgICAgICAnNDhweCcsXHJcbiAgICAgICAgJzUycHgnLFxyXG4gICAgICAgICc2MHB4JyxcclxuICAgICAgICAnNjZweCcsXHJcbiAgICAgICAgJzc4cHgnLFxyXG4gICAgICBdLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAxLjIsXHJcbiAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICAgICAgbWI6IFs1LCBudWxsLCBudWxsLCBudWxsLCAnMzBweCddLFxyXG4gICAgfSxcclxuICAgIGhlcm9TZWNvbmRhcnk6IHtcclxuICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgIGZvbnRTaXplOiBbMiwgMywgNCwgJzE3cHgnLCBudWxsLCAzLCAnMTlweCcsIDRdLFxyXG4gICAgICBsaW5lSGVpZ2h0OiBbMiwgbnVsbCwgbnVsbCwgbnVsbCwgMi4yXSxcclxuICAgICAgZm9udFdlaWdodDogJ2JvZHknLFxyXG4gICAgICBwcjogWzAsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICcxMDBweCcsIG51bGwsICcxMjVweCddLFxyXG4gICAgICBtYjogWyczNXB4JywgbnVsbCwgbnVsbCwgbnVsbCwgJzQwcHgnLCBudWxsLCBudWxsLCA3XSxcclxuICAgIH0sXHJcbiAgICB0aXRsZToge1xyXG4gICAgICAvLyBleHRlbmRzIHRoZSB0ZXh0LmhlYWRpbmcgc3R5bGVzXHJcbiAgICAgIHZhcmlhbnQ6ICd0ZXh0LmhlYWRpbmcnLFxyXG4gICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgICAgIGZvbnRTaXplOiAxOCxcclxuICAgICAgbGluZUhlaWdodDogJzMwcHgnLFxyXG4gICAgICBjb2xvcjogJyMwRjIxMzcnLFxyXG4gICAgfSxcclxuICAgIGxlYWQ6IHtcclxuICAgICAgZm9udFNpemU6IDQwLFxyXG4gICAgICBmb250RmFtaWx5OiAnRE0gU2FucycsXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICc1MDAnLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAnNjBweCcsXHJcbiAgICAgIGxldHRlclNwYWNpbmc6ICctMS41cHgnLFxyXG4gICAgICBjb2xvcjogJyMwRjIxMzcnLFxyXG4gICAgfSxcclxuICAgIG11dGVkOiB7XHJcbiAgICAgIGxpbmVIZWlnaHQ6ICcyNnB4JyxcclxuICAgICAgY29sb3I6ICdtdXRlZCcsXHJcbiAgICB9LFxyXG4gICAgc2Vjb25kYXJ5OiB7XHJcbiAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcclxuICAgICAgY29sb3I6ICcjMDBBOTlEJyxcclxuICAgICAgbGluZUhlaWdodDogJzQwcHgnLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGxpbmtzOiB7XHJcbiAgICBkZWZhdWx0OiB7XHJcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgfSxcclxuICAgIGJvbGQ6IHtcclxuICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gICAgfSxcclxuICAgIG5hdjoge1xyXG4gICAgICBkaXNwbGF5OiBbJ25vbmUnLCBudWxsLCAnaW5saW5lLWJsb2NrJ10sXHJcbiAgICAgIHB4OiAyNSxcclxuICAgICAgZm9udFdlaWdodDogJ25vcm1hbCcsXHJcbiAgICB9LFxyXG4gICAgZm9vdGVyOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICAgIHB4OiAwLFxyXG4gICAgICBjb2xvcjogJ2luaGVyaXQnLFxyXG4gICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxyXG4gICAgfSxcclxuICAgIGxvZ286IHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGltYWdlczoge1xyXG4gICAgYXZhdGFyOiB7XHJcbiAgICAgIHdpZHRoOiA0OCxcclxuICAgICAgaGVpZ2h0OiA0OCxcclxuICAgICAgYm9yZGVyUmFkaXVzOiA5OTk5OSxcclxuICAgIH0sXHJcbiAgfSxcclxuICAvLyB2YXJpYW50cyBmb3IgYnV0dG9uc1xyXG4gIGJ1dHRvbnM6IHtcclxuICAgIG1lbnU6IHtcclxuICAgICAgZGlzcGxheTogW251bGwsIG51bGwsICdub25lJ10sXHJcbiAgICB9LCAvLyBkZWZhdWx0IHZhcmlhbnQgZm9yIE1lbnVCdXR0b25cclxuICAgIC8vIHlvdSBjYW4gcmVmZXJlbmNlIG90aGVyIHZhbHVlcyBkZWZpbmVkIGluIHRoZSB0aGVtZVxyXG4gICAgZGVmYXVsdEJ0bjoge1xyXG4gICAgICBib3JkZXJSYWRpdXM6ICc0NXB4JyxcclxuICAgICAgZm9udFNpemU6IFsnMTRweCcsIDEsIG51bGwsIG51bGwsIDJdLFxyXG4gICAgICBsZXR0ZXJTcGFjaW5nczogWyctMC41cHgnLCBudWxsLCBudWxsLCBudWxsLCAnLTAuMTVweCddLFxyXG4gICAgICBwYWRkaW5nOiBbJzExcHggMjBweCAxMHB4JywgbnVsbCwgbnVsbCwgbnVsbCwgJzEzcHggMzBweCddLFxyXG4gICAgICBmb250RmFtaWx5OiAnYm9keScsXHJcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAxLjIsXHJcbiAgICAgIHRyYW5zaXRpb246ICdhbGwgMC4yNXMnLFxyXG4gICAgICBmb250V2VpZ2h0OiA1MDAsXHJcbiAgICAgICcmOmZvY3VzJzoge1xyXG4gICAgICAgIG91dGxpbmU6IDAsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgcHJpbWFyeToge1xyXG4gICAgICB2YXJpYW50OiAnYnV0dG9ucy5kZWZhdWx0QnRuJyxcclxuICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgIGJnOiAncHJpbWFyeScsXHJcbiAgICAgICcmOmhvdmVyJzoge1xyXG4gICAgICAgIGJveFNoYWRvdzogJ3JnYmEoMzEsIDYyLCAxMTgsIDAuNTcpIDBweCA5cHggMjBweCAtNXB4JyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB3aGl0ZUJ1dHRvbjoge1xyXG4gICAgICB2YXJpYW50OiAnYnV0dG9ucy5kZWZhdWx0QnRuJyxcclxuICAgICAgY29sb3I6ICdoZWFkaW5nX3NlY29uZGFyeScsXHJcbiAgICAgIGJnOiAnd2hpdGUnLFxyXG4gICAgICAnJjpob3Zlcic6IHtcclxuICAgICAgICBib3hTaGFkb3c6ICdyZ2JhKDAsIDAsIDAsIDAuNSkgMHB4IDEycHggMjRweCAtMTBweCcsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgc2Vjb25kYXJ5OiB7XHJcbiAgICAgIHZhcmlhbnQ6ICdidXR0b25zLmRlZmF1bHRCdG4nLFxyXG4gICAgICBib3JkZXI6ICcxLjVweCBzb2xpZCB3aGl0ZScsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcclxuICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICcmOmhvdmVyJzoge1xyXG4gICAgICAgIGJnOiAnd2hpdGUnLFxyXG4gICAgICAgIGNvbG9yOiAnaGVhZGluZ19zZWNvbmRhcnknLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHRleHRCdXR0b246IHtcclxuICAgICAgdmFyaWFudDogJ2J1dHRvbnMuZGVmYXVsdEJ0bicsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcclxuICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgIHN2Zzoge1xyXG4gICAgICAgIGZvbnRTaXplOiBbNCwgNl0sXHJcbiAgICAgICAgbXI6IDIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgY2FyZHM6IHtcclxuICAgIHByaW1hcnk6IHtcclxuICAgICAgcGFkZGluZzogMixcclxuICAgICAgYm9yZGVyUmFkaXVzOiA0LFxyXG4gICAgfSxcclxuICAgIG9mZmVyOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgIGZsZXg6IFsnMSAxIGNhbGMoNTAlIC0gMTZweCknLCAnMSAxIDIwJSddLFxyXG4gICAgICBtaW5IZWlnaHQ6IDEzMCxcclxuICAgICAgbTogMixcclxuICAgICAgYmFja2dyb3VuZDogJyNGRkZGRkYnLFxyXG4gICAgICBib3JkZXI6ICcxcHggc29saWQgI0VERUZGNicsXHJcbiAgICAgIGJvcmRlclJhZGl1czogNSxcclxuICAgIH0sXHJcbiAgICBmZWF0dXJlQ2FyZDoge1xyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGFsaWduSXRlbXM6ICdmbGV4LXN0YXJ0JyxcclxuICAgICAgZmxleERpcmVjdGlvbjogJ3JvdycsXHJcbiAgICAgIHA6IDMsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZm9ybXM6IHtcclxuICAgIGxhYmVsOiB7XHJcbiAgICAgIGZvbnRTaXplOiAxLFxyXG4gICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgICB9LFxyXG4gICAgaW5wdXQ6IHtcclxuICAgICAgYm9yZGVyUmFkaXVzOiA4LFxyXG4gICAgICBib3JkZXJDb2xvcjogJ2JvcmRlcl9jb2xvcicsXHJcbiAgICAgIGhlaWdodDogNjAsXHJcbiAgICAgICcmOmZvY3VzJzoge1xyXG4gICAgICAgIGJvcmRlckNvbG9yOiAncHJpbWFyeScsXHJcbiAgICAgICAgYm94U2hhZG93OiAodCkgPT4gYDAgMCAwIDJweCAke3QuY29sb3JzLnByaW1hcnl9YCxcclxuICAgICAgICBvdXRsaW5lOiAnbm9uZScsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIGJhZGdlczoge1xyXG4gICAgcHJpbWFyeToge1xyXG4gICAgICBjb2xvcjogJ2JhY2tncm91bmQnLFxyXG4gICAgICBiZzogJyMyOEE1RkYnLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IDMwLFxyXG4gICAgICBwOiAnM3B4IDExcHgnLFxyXG4gICAgICBmb250U2l6ZTogMSxcclxuICAgICAgbGV0dGVyU3BhY2luZzogJy0wLjVweCcsXHJcbiAgICB9LFxyXG4gICAgb3V0bGluZToge1xyXG4gICAgICBjb2xvcjogJ3ByaW1hcnknLFxyXG4gICAgICBiZzogJ3RyYW5zcGFyZW50JyxcclxuICAgICAgYm94U2hhZG93OiAnaW5zZXQgMCAwIDAgMXB4JyxcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgc3R5bGVzOiB7XHJcbiAgICAvLyBUbyBhZGQgYmFzZSwgdG9wLWxldmVsIHN0eWxlcyB0byB0aGUgPGJvZHk+IGVsZW1lbnQsIHVzZSB0aGVtZS5zdHlsZXMucm9vdC5cclxuICAgIHJvb3Q6IHtcclxuICAgICAgZm9udEZhbWlseTogJ2JvZHknLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAnYm9keScsXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2R5JyxcclxuICAgICAgZm9udFNtb290aGluZzogJ2FudGlhbGlhc2VkJyxcclxuICAgICAgJy5tb2RhbC12aWRlby1jbG9zZS1idG4nOiB7XHJcbiAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgICAgdG9wOiAnLTI1cHgnLFxyXG4gICAgICAgIHJpZ2h0OiAnLTI1cHgnLFxyXG4gICAgICAgIHdpZHRoOiAnIDI1cHgnLFxyXG4gICAgICAgIGhlaWdodDogJzI1cHgnLFxyXG4gICAgICB9LFxyXG4gICAgICAnLm1vZGFsLXZpZGVvLW1vdmllLXdyYXAnOiB7XHJcbiAgICAgICAgbWFyZ2luOiA2LFxyXG4gICAgICAgIHdpZHRoOiAnYXV0bycsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgLy8gRGl2aWRlciBzdHlsZXNcclxuICAgIGhyOiB7XHJcbiAgICAgIGJvcmRlcjogMCxcclxuICAgICAgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkJyxcclxuICAgICAgYm9yZGVyQ29sb3I6ICcjRDlFMEU3JyxcclxuICAgIH0sXHJcbiAgICAvLyBhbHNvIHlvdSBjYW4gdXNlIG90aGVyIEhUTUwgZWxlbWVudHMgc3R5bGUgaGVyZVxyXG4gICAgdWw6IHtcclxuICAgICAgbGlzdFN0eWxlOiAnbm9uZScsXHJcbiAgICB9LFxyXG4gICAgc3JPbmx5OiB7XHJcbiAgICAgIGJvcmRlcjogJzAgIWltcG9ydGFudCcsXHJcbiAgICAgIGNsaXA6ICdyZWN0KDFweCwgMXB4LCAxcHgsIDFweCkgIWltcG9ydGFudCcsXHJcbiAgICAgIGNsaXBQYXRoOiAnaW5zZXQoNTAlKSAhaW1wb3J0YW50JyxcclxuICAgICAgaGVpZ2h0OiAnMXB4ICFpbXBvcnRhbnQnLFxyXG4gICAgICBtYXJnaW46ICctMXB4ICFpbXBvcnRhbnQnLFxyXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbiAhaW1wb3J0YW50JyxcclxuICAgICAgcGFkZGluZzogJzAgIWltcG9ydGFudCcsXHJcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUgIWltcG9ydGFudCcsXHJcbiAgICAgIHdpZHRoOiAnMXB4ICFpbXBvcnRhbnQnLFxyXG4gICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwICFpbXBvcnRhbnQnLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZW1vdGlvbi9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZyYW1lci1tb3Rpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJjLWRyYXdlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1jdXN0b20tc2Nyb2xsYmFyc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9mYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9pb1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1tb2RhbC12aWRlb1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1tdWx0aS1jYXJvdXNlbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zY3JvbGxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc3RpY2t5bm9kZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0aGVtZS11aVwiKTsiXSwic291cmNlUm9vdCI6IiJ9