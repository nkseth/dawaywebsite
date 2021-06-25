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

/***/ "./src/assets/banner-thumb.png":
/*!*************************************!*\
  !*** ./src/assets/banner-thumb.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/banner-thumb-cff40409d94428b8db41ed012d8ea761.png";

/***/ }),

/***/ "./src/assets/bannerBg.png":
/*!*********************************!*\
  !*** ./src/assets/bannerBg.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/bannerBg-1b093524baa6f8bd1f9e295f26d6ece8.png";

/***/ }),

/***/ "./src/assets/core-feature/briefcase.svg":
/*!***********************************************!*\
  !*** ./src/assets/core-feature/briefcase.svg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTciIGhlaWdodD0iNTciIHZpZXdCb3g9IjAgMCA1NyA1NyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIG9wYWNpdHk9IjAuMSIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNC41NDE2IDAuNzkxNjE2SDMyLjQ1ODNDNDUuNTc1IDAuNzkxNjE2IDU2LjIwODMgMTEuNDI0NiA1Ni4yMDgzIDI0LjU0MTZWMzIuNDU4M0M1Ni4yMDgzIDQ1LjU3NDggNDUuNTc1IDU2LjIwODIgMzIuNDU4MyA1Ni4yMDgySDI0LjU0MTZDMTEuNDI0OSA1Ni4yMDgyIDAuNzkxNjczIDQ1LjU3NDggMC43OTE2NzMgMzIuNDU4M1YyNC41NDE2QzAuNzkxNjczIDExLjQyNDYgMTEuNDI0OSAwLjc5MTYxNiAyNC41NDE2IDAuNzkxNjE2WiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyKSIvPg0KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zMS4yMTcxIDMyLjk2MjVDMzEuMzg0OSAzMi43OTIzIDMxLjQ2ODggMzIuNTkxNCAzMS40Njg4IDMyLjM1OVYzMC4yMTQ3SDQwLjM3NDlWMzYuNjQ4QzQwLjM3NDkgMzcuMjM3MSA0MC4xNjc0IDM3Ljc0MjMgMzkuNzUyIDM4LjE2MkMzOS4zMzY4IDM4LjU4MjEgMzguODM3NSAzOC43OTE5IDM4LjI1NDUgMzguNzkxOUgxOC43NDU2QzE4LjE2MjQgMzguNzkxOSAxNy42NjMxIDM4LjU4MjEgMTcuMjQ3OSAzOC4xNjJDMTYuODMyNSAzNy43NDIzIDE2LjYyNDkgMzcuMjM3MSAxNi42MjQ5IDM2LjY0OFYzMC4yMTQ3SDI1LjUzMTJWMzIuMzU5QzI1LjUzMTIgMzIuNTkxNCAyNS42MTUxIDMyLjc5MjMgMjUuNzgzIDMyLjk2MjVDMjUuOTUwOSAzMy4xMzE5IDI2LjE0OTcgMzMuMjE3MSAyNi4zNzk1IDMzLjIxNzFIMzAuNjIwNkMzMC44NTAyIDMzLjIxNzEgMzEuMDQ5MiAzMy4xMzE5IDMxLjIxNzEgMzIuOTYyNVpNMzAuMTk2NiAzMC4yMTQ3SDI2LjgwMzRWMzEuOTNIMzAuMTk2NlYzMC4yMTQ3Wk0zOS43NTIxIDIyLjI2NzRDMzkuMzM2OSAyMS44NDY5IDM4LjgzNzYgMjEuNjM3IDM4LjI1NDUgMjEuNjM3SDMzLjU4OTFWMTkuNDkyN0MzMy41ODkxIDE5LjEzNTIgMzMuNDY1NiAxOC44MzE3IDMzLjIxODEgMTguNTgxQzMyLjk3MDkgMTguMzMxNiAzMi42NzAzIDE4LjIwNjEgMzIuMzE3IDE4LjIwNjFIMjQuNjgzMUMyNC4zMjk3IDE4LjIwNjEgMjQuMDI5MyAxOC4zMzE2IDIzLjc4MTkgMTguNTgxQzIzLjUzNDUgMTguODMxMyAyMy40MTA4IDE5LjEzNTIgMjMuNDEwOCAxOS40OTI3VjIxLjYzN0gxOC43NDU2QzE4LjE2MjQgMjEuNjM3IDE3LjY2MzEgMjEuODQ2OSAxNy4yNDc5IDIyLjI2NzRDMTYuODMyNSAyMi42ODY2IDE2LjYyNDkgMjMuMTkxNCAxNi42MjQ5IDIzLjc4MTNWMjguOTI4SDQwLjM3NDlWMjMuNzgxM0M0MC4zNzQ5IDIzLjE5MTQgNDAuMTY3NCAyMi42ODY2IDM5Ljc1MjEgMjIuMjY3NFpNMzEuODkyOSAyMS42MzdIMjUuMTA3MlYxOS45MjEzSDMxLjg5MjlWMjEuNjM3WiIgZmlsbD0iI0ZGNDU1MCIvPg0KPGRlZnM+DQo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXIiIHgxPSIzMi43ODU1IiB5MT0iODkuNzg1NSIgeDI9Ijg5Ljc4NTUiIHkyPSIyNC4yMTQ1IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+DQo8c3RvcCBzdG9wLWNvbG9yPSIjRkY0MTZDIi8+DQo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGRjRCMkIiLz4NCjwvbGluZWFyR3JhZGllbnQ+DQo8L2RlZnM+DQo8L3N2Zz4NCg=="

/***/ }),

/***/ "./src/assets/core-feature/secure.svg":
/*!********************************************!*\
  !*** ./src/assets/core-feature/secure.svg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTciIGhlaWdodD0iNTciIHZpZXdCb3g9IjAgMCA1NyA1NyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIG9wYWNpdHk9IjAuMSIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNC41NDE2IDAuNzkxNjE2SDMyLjQ1ODNDNDUuNTc1MSAwLjc5MTYxNiA1Ni4yMDgzIDExLjQyNDYgNTYuMjA4MyAyNC41NDE2VjMyLjQ1ODNDNTYuMjA4MyA0NS41NzQ4IDQ1LjU3NTEgNTYuMjA4MiAzMi40NTgzIDU2LjIwODJIMjQuNTQxNkMxMS40MjQ5IDU2LjIwODIgMC43OTE2MTYgNDUuNTc0OCAwLjc5MTYxNiAzMi40NTgzVjI0LjU0MTZDMC43OTE2MTYgMTEuNDI0NiAxMS40MjQ5IDAuNzkxNjE2IDI0LjU0MTYgMC43OTE2MTZaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXIpIi8+DQo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQyLjM4OTEgMjUuMjIxNEM0Mi4zOTM2IDI1LjMwMjMgNDIuMzg3NyAyNS4zODQ1IDQyLjM2NzUgMjUuNDY3TDQwLjU2MDcgMzIuNzIzNUM0MC40Njk1IDMzLjA4ODcgNDAuMTQzMiAzMy4zNDYyIDM5Ljc2ODEgMzMuMzQ4M0wyOC45Mjc0IDMzLjQwMzNDMjguOTI2IDMzLjQwMzMgMjguOTI0NyAzMy40MDMzIDI4LjkyMzIgMzMuNDAzM0gxOC4wODI1QzE3LjcwNTMgMzMuNDAzMyAxNy4zNzY3IDMzLjE0NDkgMTcuMjg1NyAzMi43Nzc2TDE1LjQ3ODkgMjUuNDkzNEMxNS40NTggMjUuNDA5MSAxNS40NTIxIDI1LjMyNDQgMTUuNDU3MyAyNS4yNDE0QzE0Ljc1ODMgMjUuMDIwNiAxNC4yNSAyNC4zNjM4IDE0LjI1IDIzLjU5QzE0LjI1IDIyLjYzNDUgMTUuMDIzNiAyMS44NTc3IDE1Ljk3NDYgMjEuODU3N0MxNi45MjU2IDIxLjg1NzcgMTcuNjk5MyAyMi42MzQ1IDE3LjY5OTMgMjMuNTlDMTcuNjk5MyAyNC4xMjc2IDE3LjQ1MzggMjQuNjA4NSAxNy4wNjk2IDI0LjkyNjlMMTkuMzMxNyAyNy4yMTUxQzE5LjkwMzQgMjcuNzkzNSAyMC42OTY3IDI4LjEyNTUgMjEuNTA4MyAyOC4xMjU1QzIyLjQ2OCAyOC4xMjU1IDIzLjM4MyAyNy42Njc1IDIzLjk1OTIgMjYuOTAxTDI3LjY3NjkgMjEuOTU0N0MyNy4zNjQ2IDIxLjY0MTUgMjcuMTcxMSAyMS4yMDg2IDI3LjE3MTEgMjAuNzMxMUMyNy4xNzExIDE5Ljc3NiAyNy45NDQ4IDE4Ljk5ODggMjguODk1OCAxOC45OTg4QzI5Ljg0NjggMTguOTk4OCAzMC42MjA0IDE5Ljc3NiAzMC42MjA0IDIwLjczMTFDMzAuNjIwNCAyMS4xOTQyIDMwLjQzNzMgMjEuNjE0MiAzMC4xNDEzIDIxLjkyNTRDMzAuMTQyMyAyMS45MjY3IDMwLjE0MzYgMjEuOTI3OSAzMC4xNDQ1IDIxLjkyOTJMMzMuODM1MSAyNi44ODlDMzQuNDExMiAyNy42NjI4IDM1LjMyOTQgMjguMTI1NSAzNi4yOTE4IDI4LjEyNTVDMzcuMTEwOSAyOC4xMjU1IDM3Ljg4MTIgMjcuODA1IDM4LjQ2MDMgMjcuMjIzNkw0MC43MzY2IDI0LjkzNzVDNDAuMzQ0MyAyNC42MTk2IDQwLjA5MjMgMjQuMTM0NCA0MC4wOTIzIDIzLjU5QzQwLjA5MjMgMjIuNjM0NSA0MC44NjYgMjEuODU3NyA0MS44MTcgMjEuODU3N0M0Mi43NjggMjEuODU3NyA0My41NDE3IDIyLjYzNDUgNDMuNTQxNyAyMy41OUM0My41NDE3IDI0LjM0MjkgNDMuMDU5MiAyNC45ODM5IDQyLjM4OTEgMjUuMjIxNFpNNDAuMzg0NCAzNS45ODY4QzQwLjM4NDQgMzUuNTMxOCA0MC4wMTY2IDM1LjE2MjQgMzkuNTYzMSAzNS4xNjI0SDE4LjMxOThDMTcuODY2MiAzNS4xNjI0IDE3LjQ5ODUgMzUuNTMxOCAxNy40OTg1IDM1Ljk4NjhWMzcuOTY2QzE3LjQ5ODUgMzguNDIxOCAxNy44NjYyIDM4Ljc5MDggMTguMzE5OCAzOC43OTA4SDM5LjU2MzFDNDAuMDE2NiAzOC43OTA4IDQwLjM4NDQgMzguNDIxOCA0MC4zODQ0IDM3Ljk2NlYzNS45ODY4WiIgZmlsbD0iI0ZFNTg2OCIvPg0KPGRlZnM+DQo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXIiIHgxPSIzMi43ODU1IiB5MT0iODkuNzg1NSIgeDI9Ijg5Ljc4NTUiIHkyPSIyNC4yMTQ1IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+DQo8c3RvcCBzdG9wLWNvbG9yPSIjRkY1ODU4Ii8+DQo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGODU3QTYiLz4NCjwvbGluZWFyR3JhZGllbnQ+DQo8L2RlZnM+DQo8L3N2Zz4NCg=="

/***/ }),

/***/ "./src/assets/coreFeature.png":
/*!************************************!*\
  !*** ./src/assets/coreFeature.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/coreFeature-9e8a30b472f0bdc0e589dd84e2e03569.png";

/***/ }),

/***/ "./src/assets/feature/chat.svg":
/*!*************************************!*\
  !*** ./src/assets/feature/chat.svg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODIiIGhlaWdodD0iODIiIHZpZXdCb3g9IjAgMCA4MiA4MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+DQo8cGF0aCBvcGFjaXR5PSIwLjEyMiIgZD0iTTU0IDBIMjhDMTIuNTM2IDAgMCAxMi41MzYgMCAyOFY1NEMwIDY5LjQ2NCAxMi41MzYgODIgMjggODJINTRDNjkuNDY0IDgyIDgyIDY5LjQ2NCA4MiA1NFYyOEM4MiAxMi41MzYgNjkuNDY0IDAgNTQgMFoiIGZpbGw9IiNFOTc0MjUiLz4NCjxyZWN0IHg9IjI0IiB5PSIyNCIgd2lkdGg9IjM0IiBoZWlnaHQ9IjM0IiBmaWxsPSJ1cmwoI3BhdHRlcm4wKSIvPg0KPGRlZnM+DQo8cGF0dGVybiBpZD0icGF0dGVybjAiIHBhdHRlcm5Db250ZW50VW5pdHM9Im9iamVjdEJvdW5kaW5nQm94IiB3aWR0aD0iMSIgaGVpZ2h0PSIxIj4NCjx1c2UgeGxpbms6aHJlZj0iI2ltYWdlMCIgdHJhbnNmb3JtPSJzY2FsZSgwLjAyOTQxMTgpIi8+DQo8L3BhdHRlcm4+DQo8aW1hZ2UgaWQ9ImltYWdlMCIgd2lkdGg9IjM0IiBoZWlnaHQ9IjM0IiB4bGluazpocmVmPSJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUNJQUFBQWlDQVlBQUFBNlJ3dkNBQUFBQkhOQ1NWUUlDQWdJZkFoa2lBQUFCQWhKUkVGVVdJWEZsMXVJVmxVVWdML3o5M3NaYXg0VTNSbVJXVEU3cFl0RVlSY3FJZ2F5SUhySU1xRkl1MGpTSUhuWkZEMVdZTGxEdWdpVitKQWxoUTFkOE1XaUMwMmxpVDAxWmRvbWlzYUkzSnFCanBMTmpLZUh0YzdNYWZ6Lzg1OHppUzQ0N0gvV1htdnZiL1plZTYrMWt6Uk5BWWpPVGdEdUIrNEFyZ1FtTVRiNUhmZ0MyR2g4MkZiV0tVblRsT2pzeGNEcndEV3FId0QrSGlOSWUrNzNXbUNWOFNGdDVWU1B6cllCbTRDcmdGM3EvQW5RUDBhUUM0RjdnTWVBRmNBdndMcFdUc20rVlIxTGdOZUFINENiakEvN3h3andING5PTGdUZUF2NEVacmNhdHc3Y3FiK2ZLekxXR0ZvQTNBN3NBellaSDNZMHN6Yyt2QjJkZlFpNEdiZ2VlTDhJcEFaY0FSd0RQaXVBbUtiOUc0SDV3S1BBOXVqc2swV0RBMXUwdmFpRkhUV2dUVUdLWW1JNWNCM3dNN0FZV0FPa3dOUFIyVmtGZmxuQUQ3WUNxZXVBaVVJMWs5dTA3VEkrYkFXSXpzNEU3Z1p1QlBZMDhjdkd2RVczTmxHb1BtQ0g4YUV2RDFKR2VvRXpnWHhNWkVjeUtlRS9UNys4SElyT3JqWStQRnNGNUFGZ3ZQSGhhSFMyRStoRWdud0E2Q25oM3dOc1YraHh3QndkWTNWMDluemp3OUpTSU1hSFFXQXdPanNIK0RqWDlianhvZG0yNU9VRDQ4TUxlVVYwZGg3d0h2QklkSFpyVVZ3MGtyTzAzUTkwR2gvV2xQUTdZN1RDK1BBaDhKVCsrWERacmNua08rQkY0R3ZqdzZjVi9HWkVaeTlING1xUDhXRkE5YThBRHBoYmFVV01ENGVRN2RoYzBpVUw2R1hBdDBqUXY1enI3d2NPQU8yVlFLS3pIVUNNenI1VHhRKzVpWHYxK3o2bnJ5RUJuRmJkbW1QQWI4QWZKZTJ6Yk82TUQyOFdHVmJkbWo3Z1V1UERzbGEyMGRtNXdFTGdNTEF0T2x0NDMxUmRFVnJWRnRIWmlVZzZXQStNVi9VV29CYWRQUTZzTno2OFZCb2tPcnNBNkFJbUFNZVJ2U3h6aTA1aEpNa042UnlYNVBwbk4zTEtnd3hQRXAxZENUeGZZdEptOGl2d0J0Q04vQlBaK0VQQVQwVWdDWEEwT3R1TzNCT0xWYjhjT0J0NEF0aU1WRzhKY2l6N0dUbWVlZWszUHV5dFNwNkIvQU5NQnpZZ2hjeGg0RUhqUTNkMGRxbmE3RFUrN013Y283T0xrQ1VmRFZPTHpvN2p4TnMwVzVGM2pROG41S2U2ZHJZaGhjOU00RWZnUHVQRE4yb3pVZHZoZ2JWUTJ0Qmdzakp5SGcwU1piWWliUXJSQTl3MXFtVDhTOXZwT2QwQkpIdGV4a2dNdEpLc0Z2bW9VV2UySWlEUGlTN2p3NUZSTmp0MXNzN283QlRqdzBFOXdwL3JkMUtranBUK2s0MFAzVTFzZGdOZklaWFlXbURSeVpvOEwwbjIwaXVTNk95MXlGdG5FbEtQZEFOVlQ4WVFrcldIYTJNTjZsM0F1YVZBMU9rR3BJcS9vQ0pBWG5xUkdBeGpCbEhIYWNoV1hnMU1yUUNRSXJkdEIxSTQzMnQ4K0RJNlcwY2VkdFZBL285RVp5Y2orV2MrY20rdE5ENnNpODd1Qm1hY01oQ0ZTWkRVc1VKVnp5Q3Z4M05PS1VnT2FBbFNxV1haK2VCcEFWR1lXNUhFT0JVNGN0cEFGR1lXOENxUS9Bc2dqMWxmSzl1a0l3QUFBQUJKUlU1RXJrSmdnZz09Ii8+DQo8L2RlZnM+DQo8L3N2Zz4NCg=="

/***/ }),

/***/ "./src/assets/feature/cloud.svg":
/*!**************************************!*\
  !*** ./src/assets/feature/cloud.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODIiIGhlaWdodD0iODIiIHZpZXdCb3g9IjAgMCA4MiA4MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik01NCAwSDI4QzEyLjUzNiAwIDAgMTIuNTM2IDAgMjhWNTRDMCA2OS40NjQgMTIuNTM2IDgyIDI4IDgySDU0QzY5LjQ2NCA4MiA4MiA2OS40NjQgODIgNTRWMjhDODIgMTIuNTM2IDY5LjQ2NCAwIDU0IDBaIiBmaWxsPSIjRkZGNkQzIi8+DQo8cGF0aCBkPSJNNDUuNTM0IDQ2Ljc3ODFDNDUuNDA3NyA0Ni43NzgxIDQ1LjI4MjUgNDYuNzUzMiA0NS4xNjU4IDQ2LjcwNDhDNDUuMDQ5MSA0Ni42NTY1IDQ0Ljk0MzEgNDYuNTg1NiA0NC44NTM4IDQ2LjQ5NjNDNDQuNzY0NCA0Ni40MDcgNDQuNjkzNSA0Ni4zMDA5IDQ0LjY0NTIgNDYuMTg0MkM0NC41OTY5IDQ2LjA2NzUgNDQuNTcyIDQ1Ljk0MjQgNDQuNTcyIDQ1LjgxNkM0NC41NzIgNDUuNjg5NyA0NC41OTY5IDQ1LjU2NDYgNDQuNjQ1MiA0NS40NDc5QzQ0LjY5MzUgNDUuMzMxMiA0NC43NjQ0IDQ1LjIyNTEgNDQuODUzOCA0NS4xMzU4QzQ0Ljk0MzEgNDUuMDQ2NSA0NS4wNDkxIDQ0Ljk3NTYgNDUuMTY1OCA0NC45MjczQzQ1LjI4MjUgNDQuODc4OSA0NS40MDc3IDQ0Ljg1NCA0NS41MzQgNDQuODU0SDQ5LjA3MkM1MC42NDE2IDQ0Ljg2IDUyLjE1MTUgNDQuMjUyMSA1My4yNzkgNDMuMTZDNTMuODI5OCA0Mi42MyA1NC4yNjggNDEuOTk0MiA1NC41NjczIDQxLjI5MDlDNTQuODY2NiA0MC41ODc1IDU1LjAyMDggMzkuODMwOSA1NS4wMjA4IDM5LjA2NjVDNTUuMDIwOCAzOC4zMDIxIDU0Ljg2NjYgMzcuNTQ1NiA1NC41NjczIDM2Ljg0MjJDNTQuMjY4IDM2LjEzODggNTMuODI5OCAzNS41MDMxIDUzLjI3OSAzNC45NzNDNTIuMTUxNSAzMy44ODEgNTAuNjQxNiAzMy4yNzMgNDkuMDcyIDMzLjI3OUM0OC44NDYgMzMuMjc5IDQ4LjY0MSAzMy4yODggNDguNDYxIDMzLjMwNkM0OC4yNjEgMzMuMzI2IDQ4LjA2MSAzMy4zNTU0IDQ3Ljg2MSAzMy4zOTRDNDcuNjM1NCAzMy40NDA4IDQ3LjQwMDYgMzMuNDA3NCA0Ny4xOTY5IDMzLjI5OTdDNDYuOTkzMiAzMy4xOTIgNDYuODMzNCAzMy4wMTY4IDQ2Ljc0NSAzMi44MDQxQzQ2LjE1NzQgMzEuMzU0IDQ1LjE0NDIgMzAuMTE1OSA0My44MzkgMjkuMjUzQzQyLjMxMzMgMjguMjQ3NiA0MC40OTEzIDI3Ljc5MDYgMzguNjcxOCAyNy45NTY4QzM2Ljg1MjIgMjguMTIzMSAzNS4xNDMxIDI4LjkwMjggMzMuODI1IDMwLjE2OEMzMy4wOTYgMzAuODcwNCAzMi41MTYgMzEuNzEyNCAzMi4xMTk0IDMyLjY0MzdDMzEuNzIyOSAzMy41NzUxIDMxLjUxOCAzNC41NzY4IDMxLjUxNyAzNS41ODlDMzEuNTE3IDM1LjYxNCAzMS41MTcgMzUuNjQgMzEuNTE3IDM1LjY2NVYzNS43MDUxQzMxLjUxNTQgMzUuOTYyNyAzMS40MTE2IDM2LjIwOTEgMzEuMjI4NCAzNi4zOTAyQzMxLjA0NTIgMzYuNTcxNCAzMC43OTc2IDM2LjY3MjQgMzAuNTQgMzYuNjcxSDMwLjQ4NUwzMC4zMTYgMzYuNjYzSDMwLjE4OEMyOS4wNzcxIDM2LjY1OTMgMjguMDA4NyAzNy4wODk5IDI3LjIxMSAzNy44NjNDMjYuODIxIDM4LjIzOCAyNi41MTA4IDM4LjY4NzcgMjYuMjk4OCAzOS4xODU1QzI2LjA4NjkgMzkuNjgzMiAyNS45Nzc3IDQwLjIxODYgMjUuOTc3NyA0MC43NTk1QzI1Ljk3NzcgNDEuMzAwNSAyNi4wODY5IDQxLjgzNTkgMjYuMjk4OCA0Mi4zMzM2QzI2LjUxMDggNDIuODMxMyAyNi44MjEgNDMuMjgxMSAyNy4yMTEgNDMuNjU2QzI4LjAwODggNDQuNDI5MSAyOS4wNzcxIDQ0Ljg1OTcgMzAuMTg4IDQ0Ljg1NjFIMzQuOTRDMzUuMTk1MSA0NC44NTYxIDM1LjQzOTggNDQuOTU3NCAzNS42MjAyIDQ1LjEzNzhDMzUuODAwNiA0NS4zMTgyIDM1LjkwMiA0NS41NjI5IDM1LjkwMiA0NS44MThDMzUuOTAyIDQ2LjA3MzIgMzUuODAwNiA0Ni4zMTc5IDM1LjYyMDIgNDYuNDk4M0MzNS40Mzk4IDQ2LjY3ODcgMzUuMTk1MSA0Ni43OCAzNC45NCA0Ni43OEgzMC4xODhDMjguNTU1MiA0Ni43ODU0IDI2Ljk4NDkgNDYuMTUyOCAyNS44MTIgNDUuMDE3QzI1LjIzODMgNDQuNDY2NCAyNC43ODE5IDQzLjgwNTUgMjQuNDcwMSA0My4wNzQxQzI0LjE1ODMgNDIuMzQyNiAyMy45OTc2IDQxLjU1NTcgMjMuOTk3NiA0MC43NjA1QzIzLjk5NzYgMzkuOTY1NCAyNC4xNTgzIDM5LjE3ODUgMjQuNDcwMSAzOC40NDdDMjQuNzgxOSAzNy43MTU1IDI1LjIzODMgMzcuMDU0NiAyNS44MTIgMzYuNTA0QzI2LjgzMTEgMzUuNTEzOSAyOC4xNTc0IDM0LjkwMDkgMjkuNTcyIDM0Ljc2NkMyOS43NzUxIDMyLjUwMDkgMzAuNzg4MSAzMC4zODQ5IDMyLjQyNSAyOC44MDZDMzQuMDcyOCAyNy4yMjIxIDM2LjIxMDcgMjYuMjQ2MiAzOC40ODcgMjYuMDM5QzQwLjc2MzMgMjUuODMxOCA0My4wNDIyIDI2LjQwNTYgNDQuOTQ5IDI3LjY2NjFDNDYuMzU5MSAyOC41OTk0IDQ3LjUwMTEgMjkuODg0OCA0OC4yNjIgMzEuMzk1QzQ4LjU0NiAzMS4zNjcgNDguODE1IDMxLjM1MyA0OS4wNjIgMzEuMzUzQzUxLjE1MzcgMzEuMzQ2MiA1My4xNjUzIDMyLjE1NjkgNTQuNjY4IDMzLjYxMkM1NS40MDE5IDM0LjMxNzQgNTUuOTg1NyAzNS4xNjM3IDU2LjM4NDYgMzYuMTAwMkM1Ni43ODM0IDM3LjAzNjcgNTYuOTg5IDM4LjA0NDEgNTYuOTg5IDM5LjA2MkM1Ni45ODkgNDAuMDggNTYuNzgzNCA0MS4wODc0IDU2LjM4NDYgNDIuMDIzOUM1NS45ODU3IDQyLjk2MDQgNTUuNDAxOSA0My44MDY3IDU0LjY2OCA0NC41MTJDNTMuMTY1MyA0NS45NjcyIDUxLjE1MzcgNDYuNzc3OCA0OS4wNjIgNDYuNzcxTDQ1LjUzNCA0Ni43NzgxWiIgZmlsbD0iIzMzMzMzMyIvPg0KPHBhdGggZD0iTTM5LjUxMSAzNi4xMTcxQzM5LjUxMSAzNS44NTQ4IDM5LjYxNTIgMzUuNjAzMiAzOS44MDA3IDM1LjQxNzdDMzkuOTg2MSAzNS4yMzIzIDQwLjIzNzcgMzUuMTI4MSA0MC41IDM1LjEyODFDNDAuNzYyMyAzNS4xMjgxIDQxLjAxMzggMzUuMjMyMyA0MS4xOTkzIDM1LjQxNzdDNDEuMzg0OCAzNS42MDMyIDQxLjQ4OSAzNS44NTQ4IDQxLjQ4OSAzNi4xMTcxVjU1LjAzODFDNDEuNDg5IDU1LjMwMDQgNDEuMzg0OCA1NS41NTE5IDQxLjE5OTMgNTUuNzM3NEM0MS4wMTM4IDU1LjkyMjkgNDAuNzYyMyA1Ni4wMjcxIDQwLjUgNTYuMDI3MUM0MC4yMzc3IDU2LjAyNzEgMzkuOTg2MSA1NS45MjI5IDM5LjgwMDcgNTUuNzM3NEMzOS42MTUyIDU1LjU1MTkgMzkuNTExIDU1LjMwMDQgMzkuNTExIDU1LjAzODFWMzYuMTE3MVoiIGZpbGw9IiMzMzMzMzMiLz4NCjxwYXRoIGQ9Ik00Ny4zMDIgNDAuNzk4MUM0Ny4zOTMzIDQwLjg4NTggNDcuNDY2IDQwLjk5MTEgNDcuNTE1NiA0MS4xMDc2QzQ3LjU2NTMgNDEuMjI0MSA0Ny41OTA5IDQxLjM0OTQgNDcuNTkwOSA0MS40NzYxQzQ3LjU5MDkgNDEuNjAyNyA0Ny41NjUzIDQxLjcyODEgNDcuNTE1NiA0MS44NDQ2QzQ3LjQ2NiA0MS45NjExIDQ3LjM5MzMgNDIuMDY2MyA0Ny4zMDIgNDIuMTU0MUM0Ny4xMTQ1IDQyLjMzNDIgNDYuODY0NSA0Mi40MzQ4IDQ2LjYwNDUgNDIuNDM0OEM0Ni4zNDQ1IDQyLjQzNDggNDYuMDk0NSA0Mi4zMzQyIDQ1LjkwNyA0Mi4xNTQxTDQwLjUwNyAzNi44NTQxTDM1LjEwNyA0Mi4xNTQxQzM0LjkxOTUgNDIuMzM0MiAzNC42Njk1IDQyLjQzNDggMzQuNDA5NSA0Mi40MzQ4QzM0LjE0OTUgNDIuNDM0OCAzMy44OTk1IDQyLjMzNDIgMzMuNzEyIDQyLjE1NDFDMzMuNjIwNiA0Mi4wNjYzIDMzLjU0NzkgNDEuOTYxMSAzMy40OTgzIDQxLjg0NDZDMzMuNDQ4NiA0MS43MjgxIDMzLjQyMyA0MS42MDI3IDMzLjQyMyA0MS40NzYxQzMzLjQyMyA0MS4zNDk0IDMzLjQ0ODYgNDEuMjI0MSAzMy40OTgzIDQxLjEwNzZDMzMuNTQ3OSA0MC45OTExIDMzLjYyMDYgNDAuODg1OCAzMy43MTIgNDAuNzk4MUwzOS44MTIgMzQuODEyMUMzOS45OTk1IDM0LjYzMiA0MC4yNDk0IDM0LjUzMTQgNDAuNTA5NSAzNC41MzE0QzQwLjc2OTUgMzQuNTMxNCA0MS4wMTk0IDM0LjYzMiA0MS4yMDcgMzQuODEyMUw0Ny4zMDY5IDQwLjc5ODFINDcuMzAyWiIgZmlsbD0iIzMzMzMzMyIvPg0KPHBhdGggZD0iTTM5LjUxMSA1NS4wMzhWMzcuODIxTDM1LjA5NyA0Mi4xNTA4QzM0LjkwOTMgNDIuMzMyNCAzNC42NTgyIDQyLjQzNCAzNC4zOTcgNDIuNDM0QzM0LjEzNTggNDIuNDM0IDMzLjg4NDggNDIuMzMyNCAzMy42OTcgNDIuMTUwOEMzMy42MDU4IDQyLjA2MyAzMy41MzMyIDQxLjk1NzggMzMuNDgzNiA0MS44NDEzQzMzLjQzNDEgNDEuNzI0OCAzMy40MDg2IDQxLjU5OTUgMzMuNDA4NiA0MS40NzI4QzMzLjQwODYgNDEuMzQ2MiAzMy40MzQxIDQxLjIyMDkgMzMuNDgzNiA0MS4xMDQ0QzMzLjUzMzIgNDAuOTg3OSAzMy42MDU4IDQwLjg4MjcgMzMuNjk3IDQwLjc5NDlMMzkuNzk3IDM0LjgwOUMzOS45ODQ5IDM0LjYyNzcgNDAuMjM1OCAzNC41MjYzIDQwLjQ5NjkgMzQuNTI2M0M0MC43NTgxIDM0LjUyNjMgNDEuMDA5MSAzNC42Mjc3IDQxLjE5NyAzNC44MDlMNDcuMjk3IDQwLjc5NDlDNDcuMzg4MiA0MC44ODI3IDQ3LjQ2MDggNDAuOTg3OSA0Ny41MTA0IDQxLjEwNDRDNDcuNTU5OSA0MS4yMjA5IDQ3LjU4NTQgNDEuMzQ2MiA0Ny41ODU0IDQxLjQ3MjhDNDcuNTg1NCA0MS41OTk1IDQ3LjU1OTkgNDEuNzI0OCA0Ny41MTA0IDQxLjg0MTNDNDcuNDYwOCA0MS45NTc4IDQ3LjM4ODIgNDIuMDYzIDQ3LjI5NyA0Mi4xNTA4QzQ3LjEwOTYgNDIuMzMwOSA0Ni44NTk4IDQyLjQzMTYgNDYuNiA0Mi40MzE2QzQ2LjM0MDEgNDIuNDMxNiA0Ni4wOTAzIDQyLjMzMDkgNDUuOTAzIDQyLjE1MDhMNDEuNDg5IDM3LjgyMVY1NS4wMzhDNDEuNDc3NiA1NS4yOTI2IDQxLjM2ODMgNTUuNTMyOCA0MS4xODQxIDU1LjcwODlDNDAuOTk5OSA1NS44ODUxIDQwLjc1NDkgNTUuOTgzMyA0MC41IDU1Ljk4MzNDNDAuMjQ1MSA1NS45ODMzIDQwLjAwMDEgNTUuODg1MSAzOS44MTU5IDU1LjcwODlDMzkuNjMxNyA1NS41MzI4IDM5LjUyMjQgNTUuMjkyNiAzOS41MTEgNTUuMDM4Wk00NS41MzQxIDQ2Ljc3OEM0NS4yNzg5IDQ2Ljc3OCA0NS4wMzQyIDQ2LjY3NjcgNDQuODUzOCA0Ni40OTYzQzQ0LjY3MzMgNDYuMzE1OSA0NC41NzIgNDYuMDcxIDQ0LjU3MiA0NS44MTU5QzQ0LjU3MiA0NS41NjA3IDQ0LjY3MzMgNDUuMzE2MSA0NC44NTM4IDQ1LjEzNTdDNDUuMDM0MiA0NC45NTUzIDQ1LjI3ODkgNDQuODU0IDQ1LjUzNDEgNDQuODU0SDQ5LjA3MUM1MC42NDEyIDQ0Ljg2MDIgNTIuMTUxNiA0NC4yNTE3IDUzLjI3OTEgNDMuMTU4OUM1My44Mjk5IDQyLjYyODggNTQuMjY4IDQxLjk5MzEgNTQuNTY3MyA0MS4yODk3QzU0Ljg2NjYgNDAuNTg2NCA1NS4wMjA5IDM5LjgyOTggNTUuMDIwOSAzOS4wNjU0QzU1LjAyMDkgMzguMzAxIDU0Ljg2NjYgMzcuNTQ0NCA1NC41NjczIDM2Ljg0MUM1NC4yNjggMzYuMTM3NiA1My44Mjk5IDM1LjUwMTkgNTMuMjc5MSAzNC45NzE5QzUyLjE1MTIgMzMuODc5OCA1MC42NDEgMzMuMjcyIDQ5LjA3MSAzMy4yNzhDNDguODQ2IDMzLjI3OCA0OC42NDExIDMzLjI4NjkgNDguNDYxMSAzMy4zMDQ5QzQ4LjI1OTcgMzMuMzIzOCA0OC4wNTkzIDMzLjM1MzMgNDcuODYxIDMzLjM5M0M0Ny42MzU0IDMzLjQzOTUgNDcuNDAwNiAzMy40MDU5IDQ3LjE5NyAzMy4yOTgzQzQ2Ljk5MzQgMzMuMTkwNiA0Ni44MzM2IDMzLjAxNTUgNDYuNzQ1IDMyLjgwMjlDNDYuMTU3NSAzMS4zNTI1IDQ1LjE0NDMgMzAuMTE0MSA0My44MzkgMjkuMjUwOUM0Mi4zMTM0IDI4LjI0NTggNDAuNDkxNiAyNy43ODg4IDM4LjY3MjIgMjcuOTU1QzM2Ljg1MjkgMjguMTIxMyAzNS4xNDQxIDI4LjkwMSAzMy44MjYgMzAuMTY2QzMzLjA5NyAzMC44NjgzIDMyLjUxNjkgMzEuNzEwMiAzMi4xMjA0IDMyLjY0MTZDMzEuNzIzOCAzMy41NzI5IDMxLjUxODkgMzQuNTc0NiAzMS41MTc5IDM1LjU4NjlDMzEuNTE3OSAzNS42MTE5IDMxLjUxNzkgMzUuNjM5IDMxLjUxNzkgMzUuNjY0VjM1LjcwNDFDMzEuNTE3MyAzNS44MzE2IDMxLjQ5MTYgMzUuOTU3OCAzMS40NDIxIDM2LjA3NTRDMzEuMzkyNyAzNi4xOTMgMzEuMzIwNSAzNi4yOTk2IDMxLjIyOTcgMzYuMzg5NEMzMS4xMzkgMzYuNDc5MSAzMS4wMzE1IDM2LjU1MDIgMzAuOTEzMyAzNi41OTgzQzMwLjc5NTIgMzYuNjQ2NSAzMC42Njg2IDM2LjY3MDcgMzAuNTQxIDM2LjY2OTlIMzAuNDg2TDMwLjMxOCAzNi42NjNIMzAuMTg5OUMyOS4wNzkgMzYuNjU4OCAyOC4wMTA1IDM3LjA4OTUgMjcuMjEzIDM3Ljg2M0MyNi44MjI5IDM4LjIzNzcgMjYuNTEyNiAzOC42ODc0IDI2LjMwMDcgMzkuMTg1QzI2LjA4ODcgMzkuNjgyNyAyNS45Nzk0IDQwLjIxODEgMjUuOTc5NCA0MC43NTlDMjUuOTc5NCA0MS4yOTk5IDI2LjA4ODcgNDEuODM1MyAyNi4zMDA3IDQyLjMzM0MyNi41MTI2IDQyLjgzMDYgMjYuODIyOSA0My4yODAyIDI3LjIxMyA0My42NTVDMjguMDEwNiA0NC40MjgzIDI5LjA3OSA0NC44NTg5IDMwLjE4OTkgNDQuODU0OUgzNC45NDJDMzUuMTk3MiA0NC44NTQ5IDM1LjQ0MTggNDQuOTU2MyAzNS42MjIyIDQ1LjEzNjdDMzUuODAyNiA0NS4zMTcxIDM1LjkwNDEgNDUuNTYxNyAzNS45MDQxIDQ1LjgxNjhDMzUuOTA0MSA0Ni4wNzIgMzUuODAyNiA0Ni4zMTY5IDM1LjYyMjIgNDYuNDk3M0MzNS40NDE4IDQ2LjY3NzcgMzUuMTk3MiA0Ni43NzkgMzQuOTQyIDQ2Ljc3OUgzMC4xODk5QzI4LjU1NjkgNDYuNzg0NSAyNi45ODYzIDQ2LjE1MTkgMjUuODEzIDQ1LjAxNjFDMjUuMjQwMSA0NC40NjUgMjQuNzg0MyA0My44MDM5IDI0LjQ3MyA0My4wNzI1QzI0LjE2MTcgNDIuMzQxMSAyNC4wMDEyIDQxLjU1NDQgMjQuMDAxMiA0MC43NTk1QzI0LjAwMTIgMzkuOTY0NiAyNC4xNjE3IDM5LjE3NzkgMjQuNDczIDM4LjQ0NjVDMjQuNzg0MyAzNy43MTUxIDI1LjI0MDEgMzcuMDUzOSAyNS44MTMgMzYuNTAyOUMyNi44MzQyIDM1LjUxMzQgMjguMTYyMyAzNC45MDE4IDI5LjU3OCAzNC43NjlDMjkuNzgxIDMyLjUwNCAzMC43OTM2IDMwLjM4ODEgMzIuNDMwMSAyOC44MDlDMzQuMDc3OSAyNy4yMjUxIDM2LjIxNTggMjYuMjQ5MSAzOC40OTIxIDI2LjA0MTlDNDAuNzY4MyAyNS44MzQ3IDQzLjA0NzIgMjYuNDA4NSA0NC45NTQgMjcuNjY4OUM0Ni4zNjQ0IDI4LjYwMjQgNDcuNTA2NCAyOS44ODgyIDQ4LjI2NyAzMS4zOTg5QzQ4LjU1MSAzMS4zNzA5IDQ4LjgyIDMxLjM1NjkgNDkuMDY3IDMxLjM1NjlDNTEuMTU5MSAzMS4zNSA1My4xNzEgMzIuMTYwNyA1NC42NzQgMzMuNjE1OUM1NS40MDc5IDM0LjMyMTMgNTUuOTkxOCAzNS4xNjc3IDU2LjM5MDYgMzYuMTA0MkM1Ni43ODk1IDM3LjA0MDcgNTYuOTk1MSAzOC4wNDggNTYuOTk1MSAzOS4wNjU5QzU2Ljk5NTEgNDAuMDgzOCA1Ni43ODk1IDQxLjA5MTMgNTYuMzkwNiA0Mi4wMjc4QzU1Ljk5MTggNDIuOTY0MyA1NS40MDc5IDQzLjgxMDcgNTQuNjc0IDQ0LjUxNjFDNTMuMTcxIDQ1Ljk3MTMgNTEuMTU5MSA0Ni43ODE3IDQ5LjA2NyA0Ni43NzQ5TDQ1LjUzNDEgNDYuNzc4WiIgZmlsbD0iI0Q2QUIwMCIvPg0KPC9zdmc+DQo="

/***/ }),

/***/ "./src/assets/feature/design.svg":
/*!***************************************!*\
  !*** ./src/assets/feature/design.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODIiIGhlaWdodD0iODIiIHZpZXdCb3g9IjAgMCA4MiA4MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik01NCAwSDI4QzEyLjUzNiAwIDAgMTIuNTM2IDAgMjhWNTRDMCA2OS40NjQgMTIuNTM2IDgyIDI4IDgySDU0QzY5LjQ2NCA4MiA4MiA2OS40NjQgODIgNTRWMjhDODIgMTIuNTM2IDY5LjQ2NCAwIDU0IDBaIiBmaWxsPSIjRjRGNEZGIi8+DQo8cGF0aCBkPSJNNDYuNjg0IDU5LjYxNzlMNDMuMzY4IDU2LjIzOEw0MC4wNTEgNTkuNjE3OUMzOS45MzM4IDU5LjczNzggMzkuNzkzOCA1OS44MzMyIDM5LjYzOTIgNTkuODk4MkMzOS40ODQ3IDU5Ljk2MzIgMzkuMzE4NyA1OS45OTY2IDM5LjE1MSA1OS45OTY2QzM4Ljk4MzMgNTkuOTk2NiAzOC44MTczIDU5Ljk2MzIgMzguNjYyOCA1OS44OTgyQzM4LjUwODIgNTkuODMzMiAzOC4zNjgyIDU5LjczNzggMzguMjUxIDU5LjYxNzlDMzguMDExIDU5LjM3MTggMzcuODc2OCA1OS4wNDE3IDM3Ljg3NjggNTguNjk4QzM3Ljg3NjggNTguMzU0MyAzOC4wMTEgNTguMDI0MiAzOC4yNTEgNTcuNzc4MUw0MS41NjggNTQuMzk3OUwzOC4yNTEgNTEuMDE5QzM4LjAxMSA1MC43NzI5IDM3Ljg3NjggNTAuNDQyOSAzNy44NzY4IDUwLjA5OTFDMzcuODc2OCA0OS43NTU0IDM4LjAxMSA0OS40MjUxIDM4LjI1MSA0OS4xNzlDMzguMzY4MyA0OS4wNTkyIDM4LjUwODQgNDguOTY0MSAzOC42NjI5IDQ4Ljg5OTJDMzguODE3NCA0OC44MzQyIDM4Ljk4MzQgNDguODAwOCAzOS4xNTEgNDguODAwOEMzOS4zMTg2IDQ4LjgwMDggMzkuNDg0NiA0OC44MzQyIDM5LjYzOTEgNDguODk5MkMzOS43OTM2IDQ4Ljk2NDEgMzkuOTMzNyA0OS4wNTkyIDQwLjA1MSA0OS4xNzlMNDMuMzY4IDUyLjU1OTFMNDYuNjg0IDQ5LjE3OUM0Ni44MDEzIDQ5LjA1OTIgNDYuOTQxMyA0OC45NjQxIDQ3LjA5NTkgNDguODk5MkM0Ny4yNTA0IDQ4LjgzNDIgNDcuNDE2NCA0OC44MDA4IDQ3LjU4NCA0OC44MDA4QzQ3Ljc1MTYgNDguODAwOCA0Ny45MTc2IDQ4LjgzNDIgNDguMDcyMSA0OC44OTkyQzQ4LjIyNjcgNDguOTY0MSA0OC4zNjY3IDQ5LjA1OTIgNDguNDg0IDQ5LjE3OUM0OC43MjM3IDQ5LjQyNTIgNDguODU3OCA0OS43NTU1IDQ4Ljg1NzggNTAuMDk5MUM0OC44NTc4IDUwLjQ0MjggNDguNzIzNyA1MC43NzI4IDQ4LjQ4NCA1MS4wMTlMNDUuMTY4IDU0LjM5NzlMNDguNDg0IDU3Ljc3ODFDNDguNzIzOSA1OC4wMjQyIDQ4Ljg1ODIgNTguMzU0MyA0OC44NTgyIDU4LjY5OEM0OC44NTgyIDU5LjA0MTcgNDguNzIzOSA1OS4zNzE4IDQ4LjQ4NCA1OS42MTc5QzQ4LjM2NjggNTkuNzM3OCA0OC4yMjY4IDU5LjgzMzIgNDguMDcyMiA1OS44OTgyQzQ3LjkxNzcgNTkuOTYzMiA0Ny43NTE3IDU5Ljk5NjYgNDcuNTg0IDU5Ljk5NjZDNDcuNDE2MyA1OS45OTY2IDQ3LjI1MDQgNTkuOTYzMiA0Ny4wOTU4IDU5Ljg5ODJDNDYuOTQxMyA1OS44MzMyIDQ2LjgwMTMgNTkuNzM3OCA0Ni42ODQgNTkuNjE3OVpNMjIuMTE5IDUzLjc4QzIyLjEzMjYgNTMuMDM3MiAyMi4zNjUzIDUyLjMxNDkgMjIuNzg3OCA1MS43MDM5QzIzLjIxMDQgNTEuMDkyOCAyMy44MDQxIDUwLjYyMDMgMjQuNDk0MyA1MC4zNDU1QzI1LjE4NDUgNTAuMDcwNiAyNS45NDA1IDUwLjAwNTkgMjYuNjY3NCA1MC4xNTkyQzI3LjM5NDMgNTAuMzEyNSAyOC4wNTk4IDUwLjY3NjkgMjguNTgwMyA1MS4yMDdDMjkuMTAwNyA1MS43MzcyIDI5LjQ1MyA1Mi40MDkzIDI5LjU5MjkgNTMuMTM4OUMyOS43MzI4IDUzLjg2ODUgMjkuNjU0MSA1NC42MjMzIDI5LjM2NjYgNTUuMzA4M0MyOS4wNzkxIDU1Ljk5MzQgMjguNTk1NyA1Ni41NzgyIDI3Ljk3NyA1Ni45ODk1QzI3LjM1ODMgNTcuNDAwOCAyNi42MzE5IDU3LjYyMDIgMjUuODg5IDU3LjYyMDFDMjQuODgwMSA1Ny42MTAzIDIzLjkxNjMgNTcuMjAwMyAyMy4yMDk2IDU2LjQ4MDJDMjIuNTAyOCA1NS43NjAyIDIyLjExMDkgNTQuNzg4OSAyMi4xMiA1My43OEgyMi4xMTlaTTI1Ljg5MSA0Ny44QzI1LjYzMDcgNDcuODAwMiAyNS4zNzA4IDQ3LjgxODIgMjUuMTEzIDQ3Ljg1NEMyNS45MTc0IDQ0Ljk0MDQgMjcuMjQyMSA0Mi4xOTYyIDI5LjAyMyAzOS43NTM5QzMwLjgzNzkgMzcuMjY0MSAzMy4xNTA5IDM1LjE3OTMgMzUuODE1MSAzMy42MzE2QzM4LjQ3OTIgMzIuMDgzOSA0MS40MzYxIDMxLjEwNzIgNDQuNDk4IDMwLjc2MzlMNDEuNzY5IDI4LjM0NTlDNDEuNTEzIDI4LjExNyA0MS4zNTY2IDI3Ljc5NzIgNDEuMzMzMSAyNy40NTQ2QzQxLjMwOTUgMjcuMTEyIDQxLjQyMDggMjYuNzczNyA0MS42NDMgMjYuNTEyQzQxLjc1MTQgMjYuMzgzMyA0MS44ODQ1IDI2LjI3NzggNDIuMDM0NCAyNi4yMDE0QzQyLjE4NDMgMjYuMTI1MSA0Mi4zNDggMjYuMDc5NCA0Mi41MTU3IDI2LjA2NzRDNDIuNjgzNSAyNi4wNTU0IDQyLjg1MiAyNi4wNzcyIDQzLjAxMTMgMjYuMTMxM0M0My4xNzA1IDI2LjE4NTUgNDMuMzE3NCAyNi4yNzEyIDQzLjQ0MyAyNi4zODMxTDQ4LjU4OCAzMC45NDMxQzQ4Ljg0NCAzMS4xNzIyIDQ5LjAwMDUgMzEuNDkyMiA0OS4wMjQgMzEuODM1QzQ5LjA0NzUgMzIuMTc3NyA0OC45MzYzIDMyLjUxNjEgNDguNzE0IDMyLjc3ODFMNDQuMjQxIDM4LjAyMjlDNDQuMTMyNiAzOC4xNTE2IDQzLjk5OTUgMzguMjU3NCA0My44NDk1IDM4LjMzMzdDNDMuNjk5NiAzOC40MTAxIDQzLjUzNTkgMzguNDU1NiA0My4zNjggMzguNDY3NUM0My4yMDAyIDM4LjQ3OTUgNDMuMDMxNyAzOC40NTc0IDQyLjg3MjQgMzguNDAzMUM0Mi43MTMyIDM4LjM0ODcgNDIuNTY2NSAzOC4yNjI5IDQyLjQ0MSAzOC4xNTA5QzQyLjE4NSAzNy45MjE5IDQyLjAyODYgMzcuNjAyMSA0Mi4wMDUxIDM3LjI1OTVDNDEuOTgxNSAzNi45MTY5IDQyLjA5MjggMzYuNTc4NyA0Mi4zMTUgMzYuMzE2OUw0NC44NTggMzMuMzM1QzQyLjE0NTQgMzMuNjE3MSAzOS41MjIyIDM0LjQ2NTIgMzcuMTU3NyAzNS44MjQyQzM0Ljc5MzIgMzcuMTgzMyAzMi43NDAxIDM5LjAyMzIgMzEuMTMxIDQxLjIyNTFDMjkuNjA4IDQzLjMwNDMgMjguNDQ5MiA0NS42MjY4IDI3LjcwNCA0OC4wOTRDMjcuMTE5NyA0Ny44OTk0IDI2LjUwNzkgNDcuODAwMiAyNS44OTIgNDcuOEgyNS44OTFaTTUzLjQ1OSAzMS42NzA5QzUzLjQ3MjQgMzAuOTI4MSA1My43MDQ5IDMwLjIwNTkgNTQuMTI3NCAyOS41OTQ3QzU0LjU0OTggMjguOTgzNiA1NS4xNDM0IDI4LjUxMDggNTUuODMzNiAyOC4yMzU4QzU2LjUyMzggMjcuOTYwOSA1Ny4yNzk4IDI3Ljg5NTkgNTguMDA2OCAyOC4wNDkxQzU4LjczMzggMjguMjAyMiA1OS4zOTk0IDI4LjU2NjYgNTkuOTIgMjkuMDk2N0M2MC40NDA1IDI5LjYyNjggNjAuNzkyOSAzMC4yOTg5IDYwLjkzMjkgMzEuMDI4NkM2MS4wNzI4IDMxLjc1ODIgNjAuOTk0MSAzMi41MTI5IDYwLjcwNjcgMzMuMTk4QzYwLjQxOTIgMzMuODgzMSA1OS45MzU4IDM0LjQ2ODEgNTkuMzE3MSAzNC44Nzk0QzU4LjY5ODQgMzUuMjkwNyA1Ny45NzIgMzUuNTEwMSA1Ny4yMjkgMzUuNTFDNTYuMjIwMyAzNS41MDAyIDU1LjI1NjcgMzUuMDkwNSA1NC41NSAzNC4zNzA2QzUzLjg0MzMgMzMuNjUwOCA1My40NTEyIDMyLjY3OTYgNTMuNDYgMzEuNjcwOUg1My40NTlaTTI5LjgxMSAzMy44MTkxTDI2LjQ5NCAzMC40MzlMMjMuMTc4IDMzLjgxOTFDMjMuMDYwNyAzMy45Mzg4IDIyLjkyMDcgMzQuMDMzOSAyMi43NjYxIDM0LjA5ODlDMjIuNjExNiAzNC4xNjM4IDIyLjQ0NTYgMzQuMTk3MyAyMi4yNzggMzQuMTk3M0MyMi4xMTA0IDM0LjE5NzMgMjEuOTQ0NCAzNC4xNjM4IDIxLjc4OTkgMzQuMDk4OUMyMS42MzUzIDM0LjAzMzkgMjEuNDk1MyAzMy45Mzg4IDIxLjM3OCAzMy44MTkxQzIxLjEzODEgMzMuNTczIDIxLjAwMzggMzMuMjQyNyAyMS4wMDM4IDMyLjg5ODlDMjEuMDAzOCAzMi41NTUyIDIxLjEzODEgMzIuMjI1MSAyMS4zNzggMzEuOTc5TDI0LjY5NSAyOC41OTkxTDIxLjM3OCAyNS4yMkMyMS4xMzgxIDI0Ljk3MzggMjEuMDAzOCAyNC42NDM4IDIxLjAwMzggMjQuM0MyMS4wMDM4IDIzLjk1NjMgMjEuMTM4MSAyMy42MjYgMjEuMzc4IDIzLjM3OTlDMjEuNDk1MiAyMy4yNTk5IDIxLjYzNTIgMjMuMTY0NyAyMS43ODk3IDIzLjA5OTZDMjEuOTQ0MyAyMy4wMzQ1IDIyLjExMDMgMjMuMDAxIDIyLjI3OCAyMy4wMDFDMjIuNDQ1NyAyMy4wMDEgMjIuNjExNyAyMy4wMzQ1IDIyLjc2NjMgMjMuMDk5NkMyMi45MjA5IDIzLjE2NDcgMjMuMDYwOCAyMy4yNTk5IDIzLjE3OCAyMy4zNzk5TDI2LjQ5NCAyNi43NkwyOS44MTEgMjMuMzc5OUMyOS45MjgyIDIzLjI1OTkgMzAuMDY4MiAyMy4xNjQ3IDMwLjIyMjcgMjMuMDk5NkMzMC4zNzczIDIzLjAzNDUgMzAuNTQzMyAyMy4wMDEgMzAuNzExIDIzLjAwMUMzMC44Nzg3IDIzLjAwMSAzMS4wNDQ3IDIzLjAzNDUgMzEuMTk5MyAyMy4wOTk2QzMxLjM1MzggMjMuMTY0NyAzMS40OTM4IDIzLjI1OTkgMzEuNjExIDIzLjM3OTlDMzEuODUwNSAyMy42MjYzIDMxLjk4NDQgMjMuOTU2NSAzMS45ODQ0IDI0LjNDMzEuOTg0NCAyNC42NDM2IDMxLjg1MDUgMjQuOTczNiAzMS42MTEgMjUuMjJMMjguMjk0IDI4LjYwMDFMMzEuNjEgMzEuOTc5QzMxLjg0OTkgMzIuMjI1MSAzMS45ODQyIDMyLjU1NTIgMzEuOTg0MiAzMi44OTg5QzMxLjk4NDIgMzMuMjQyNyAzMS44NDk5IDMzLjU3MyAzMS42MSAzMy44MTkxQzMxLjQ5MjcgMzMuOTM5IDMxLjM1MjcgMzQuMDM0MSAzMS4xOTgyIDM0LjA5OTFDMzEuMDQzNiAzNC4xNjQxIDMwLjg3NzcgMzQuMTk3NSAzMC43MSAzNC4xOTc1QzMwLjU0MjQgMzQuMTk3NSAzMC4zNzY0IDM0LjE2NDEgMzAuMjIxOCAzNC4wOTkxQzMwLjA2NzMgMzQuMDM0MSAyOS45MjcyIDMzLjkzOSAyOS44MSAzMy44MTkxSDI5LjgxMVoiIGZpbGw9IiM1ODU2RDYiLz4NCjwvc3ZnPg0K"

/***/ }),

/***/ "./src/assets/feature/setting.svg":
/*!****************************************!*\
  !*** ./src/assets/feature/setting.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODIiIGhlaWdodD0iODIiIHZpZXdCb3g9IjAgMCA4MiA4MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik01NCAwSDI4QzEyLjUzNiAwIDAgMTIuNTM2IDAgMjhWNTRDMCA2OS40NjQgMTIuNTM2IDgyIDI4IDgySDU0QzY5LjQ2NCA4MiA4MiA2OS40NjQgODIgNTRWMjhDODIgMTIuNTM2IDY5LjQ2NCAwIDU0IDBaIiBmaWxsPSIjRTRGRkVFIi8+DQo8cGF0aCBkPSJNMzkuODY2IDYwQzM5LjMyNDQgNjAuMDAwOSAzOC44MDAyIDU5LjgwOTMgMzguMzg2OCA1OS40NTk1QzM3Ljk3MzQgNTkuMTA5NiAzNy42OTc3IDU4LjYyNDQgMzcuNjA5IDU4LjA5MDFMMzcuMTc2IDU1LjQ5QzM2LjMzMzMgNTUuMjMwOCAzNS41MTU2IDU0Ljg5NjEgMzQuNzMzIDU0LjQ5TDMyLjU2MSA1Ni4wMzQ5QzMyLjE3NjYgNTYuMzEzMyAzMS43MTM3IDU2LjQ2MjUgMzEuMjM5IDU2LjQ2MDlDMzAuOTM4NiA1Ni40NjEyIDMwLjY0MSA1Ni40MDE5IDMwLjM2MzYgNTYuMjg2NEMzMC4wODYyIDU2LjE3MDkgMjkuODM0NSA1Ni4wMDE2IDI5LjYyMyA1NS43ODgxTDI3LjMyMyA1My40ODhDMjYuOTM4OCA1My4xMDY0IDI2LjcwMyA1Mi42MDA2IDI2LjY1NzggNTIuMDYxQzI2LjYxMjUgNTEuNTIxNCAyNi43NjA4IDUwLjk4MzIgMjcuMDc2IDUwLjU0M0wyOC41OTkgNDguNDI1MUMyOC4xNjY4IDQ3LjYyMzEgMjcuODEyNSA0Ni43ODE3IDI3LjU0MSA0NS45MTIxTDI0LjkxMyA0NS40NjUxQzI0LjM3NjkgNDUuMzc2NiAyMy44ODk5IDQ1LjA5OTkgMjMuNTM5MyA0NC42ODQ4QzIzLjE4ODcgNDQuMjY5NyAyMi45OTc1IDQzLjc0MzMgMjMgNDMuMlYzOS45NDdDMjIuOTk4OSAzOS40MDU0IDIzLjE5MDQgMzguODgxIDIzLjU0MDMgMzguNDY3NUMyMy44OTAyIDM4LjA1NDEgMjQuMzc1NyAzNy43Nzg0IDI0LjkxIDM3LjY4OTlMMjcuNDc2IDM3LjI1NzFDMjcuNzM3NiAzNi4zODM3IDI4LjA4MTggMzUuNTM3MSAyOC41MDQgMzQuNzI5TDI2Ljk1OSAzMi41NTY5QzI2LjY0NTIgMzIuMTE2MSAyNi40OTc3IDMxLjU3ODUgMjYuNTQyOSAzMS4wMzkzQzI2LjU4ODIgMzAuNTAwMSAyNi44MjMxIDI5Ljk5NDQgMjcuMjA2IDI5LjYxMjFMMjkuNTE3IDI3LjMxMkMyOS44OTkgMjYuOTI4NiAzMC40MDQ4IDI2LjY5MzIgMzAuOTQ0MiAyNi42NDhDMzEuNDgzNiAyNi42MDI3IDMyLjAyMTUgMjYuNzUwNSAzMi40NjIgMjcuMDY0OUwzNC41ODggMjguNTk2QzM1LjM4OTQgMjguMTYzMSAzNi4yMzA2IDI3LjgwODYgMzcuMSAyNy41MzcxTDM3LjU0OCAyNC45MDg5QzM3LjYzNjggMjQuMzc1NyAzNy45MTE4IDIzLjg5MTMgMzguMzI0MiAyMy41NDE4QzM4LjczNjUgMjMuMTkyMiAzOS4yNTk0IDIzLjAwMDIgMzkuOCAyM0g0My4wNTRDNDMuNTk1NCAyMi45OTkxIDQ0LjExOTYgMjMuMTkwNCA0NC41MzMgMjMuNTRDNDQuOTQ2NCAyMy44ODk3IDQ1LjIyMjEgMjQuMzc0OSA0NS4zMTEgMjQuOTA4OUw0NS43NDMgMjcuNDc1MUM0Ni42NDcgMjcuNzQ3NCA0Ny41MjIxIDI4LjEwNzQgNDguMzU2IDI4LjU1MDFMNTAuNTA1IDI3LjAyQzUwLjg4OTIgMjYuNzQxNyA1MS4zNTE3IDI2LjU5MjYgNTEuODI2IDI2LjU5NEM1Mi4xMjY0IDI2LjU5MzYgNTIuNDI0IDI2LjY1MjcgNTIuNzAxMyAyNi43NjgxQzUyLjk3ODcgMjYuODgzNCA1My4yMzA1IDI3LjA1MjggNTMuNDQyIDI3LjI2NjFMNTUuNzQyIDI5LjU2NTlDNTYuMTI2NSAyOS45NDc2IDU2LjM2MjQgMzAuNDUzOCA1Ni40MDc3IDMwLjk5MzdDNTYuNDUzIDMxLjUzMzUgNTYuMzA0NiAzMi4wNzE2IDU1Ljk4OSAzMi41MTJMNTQuNDU5IDM0LjY1MzFDNTQuODg0MyAzNS40NTg1IDU1LjIzMzUgMzYuMzAxOSA1NS41MDIgMzcuMTcyMUw1OC4xMDIgMzcuNjEzQzU4LjYzNTcgMzcuNjk5NyA1OS4xMjA0IDM3Ljk3NTEgNTkuNDY4IDM4LjM4OTJDNTkuODE1NyAzOC44MDMyIDYwLjAwMyAzOS4zMjgzIDU5Ljk5NiAzOS44Njg5VjQzLjEyMzFDNTkuOTk3IDQzLjY2NDUgNTkuODA1NSA0NC4xODg3IDU5LjQ1NTkgNDQuNjAyMUM1OS4xMDYyIDQ1LjAxNTQgNTguNjIxMSA0NS4yOTEgNTguMDg3IDQ1LjM3OTlMNTUuNDg3IDQ1LjgxM0M1NS4yMTg4IDQ2LjY4MzcgNTQuODY5NiA0Ny41Mjc0IDU0LjQ0NCA0OC4zMzNMNTUuOTc0IDUwLjQ4MUM1Ni4yODc5IDUwLjkyMTcgNTYuNDM1MyA1MS40NTk2IDU2LjM5MDEgNTEuOTk4OEM1Ni4zNDQ5IDUyLjUzOCA1Ni4xMDk5IDUzLjA0MzcgNTUuNzI3IDUzLjQyNkw1My40MjcgNTUuNzI2MUM1My4wNDUgNTYuMTA5NSA1Mi41MzkyIDU2LjM0NDcgNTEuOTk5OSA1Ni4zODk5QzUxLjQ2MDUgNTYuNDM1MSA1MC45MjI2IDU2LjI4NzQgNTAuNDgyIDU1Ljk3MjlMNDguMzQxIDU0LjQ0MzFDNDcuNTM1MSA1NC44NjgxIDQ2LjY5MTUgNTUuMjE3MiA0NS44MjEgNTUuNDg2MUw0NS4zODEgNTguMDg1OUM0NS4yOTI0IDU4LjYyMDIgNDUuMDE2NyA1OS4xMDU3IDQ0LjYwMzMgNTkuNDU1NkM0NC4xODk5IDU5LjgwNTQgNDMuNjY1NiA1OS45OTcgNDMuMTI0IDU5Ljk5NjFMMzkuODY2IDYwWk0zNS4xOTggNTIuMzc4OUMzNi4xOTE3IDUyLjk1MTUgMzcuMjU3NSA1My4zODg3IDM4LjM2NyA1My42NzlDMzguNTYxNyA1My43Mjg4IDM4LjczNzYgNTMuODM0MyAzOC44NzM1IDUzLjk4MjRDMzkuMDA5MyA1NC4xMzA1IDM5LjA5OTEgNTQuMzE0NyAzOS4xMzIgNTQuNTEyOUwzOS42NzMgNTcuNzZDMzkuNjgwNSA1Ny44MDc1IDM5LjcwNDggNTcuODUwOCAzOS43NDE1IDU3Ljg4MThDMzkuNzc4MiA1Ny45MTI5IDM5LjgyNDkgNTcuOTI5NSAzOS44NzMgNTcuOTI5SDQzLjEyN0M0My4xNzUxIDU3LjkyOTUgNDMuMjIxOCA1Ny45MTI5IDQzLjI1ODUgNTcuODgxOEM0My4yOTUzIDU3Ljg1MDggNDMuMzE5NiA1Ny44MDc1IDQzLjMyNyA1Ny43Nkw0My44NzYgNTQuNTEyOUM0My45MDc3IDU0LjMxNDIgNDMuOTk3MSA1NC4xMjkyIDQ0LjEzMzEgNTMuOTgxQzQ0LjI2OTIgNTMuODMyNyA0NC40NDU4IDUzLjcyNzYgNDQuNjQxIDUzLjY3OUM0NS43NzkxIDUzLjM4NjkgNDYuODY5OCA1Mi45MzQgNDcuODggNTIuMzM0QzQ4LjA1MzggNTIuMjMxNCA0OC4yNTM0IDUyLjE4MTQgNDguNDU1IDUyLjE4OTdDNDguNjU2NSA1Mi4xOTggNDguODUxNCA1Mi4yNjQ2IDQ5LjAxNiA1Mi4zODExTDUxLjY5OCA1NC4yOUM1MS43MzEzIDU0LjMxNTcgNTEuNzcyIDU0LjMyOTggNTEuODE0IDU0LjMzMDFDNTEuODQxNSA1NC4zMzA0IDUxLjg2ODcgNTQuMzI0OSA1MS44OTQgNTQuMzE0MkM1MS45MTkzIDU0LjMwMzUgNTEuOTQyMSA1NC4yODc5IDUxLjk2MSA1NC4yNjgxTDU0LjI2MSA1MS45NjhDNTQuMjk0NCA1MS45MzM0IDU0LjMxNDggNTEuODg4NCA1NC4zMTkgNTEuODQwNkM1NC4zMjMyIDUxLjc5MjcgNTQuMzEwOSA1MS43NDQ5IDU0LjI4NCA1MS43MDUxTDUyLjM3NSA0OS4wMTQ5QzUyLjI1ODUgNDguODUwNCA1Mi4xOTIxIDQ4LjY1NTggNTIuMTg0IDQ4LjQ1NDNDNTIuMTc1OCA0OC4yNTI5IDUyLjIyNjIgNDguMDUzMyA1Mi4zMjkgNDcuODc5OUM1Mi45Mjg4IDQ2Ljg2OTUgNTMuMzgxNyA0NS43NzkxIDUzLjY3NCA0NC42NDExQzUzLjcyNDEgNDQuNDQ2MyA1My44Mjk3IDQ0LjI3IDUzLjk3NzkgNDQuMTM0QzU0LjEyNjEgNDMuOTk4MSA1NC4zMTA2IDQzLjkwODIgNTQuNTA5IDQzLjg3NUw1Ny43NTUgNDMuMzM0QzU3LjgwMjcgNDMuMzI2OCA1Ny44NDYyIDQzLjMwMjYgNTcuODc3NCA0My4yNjU5QzU3LjkwODcgNDMuMjI5MSA1Ny45MjU2IDQzLjE4MjMgNTcuOTI1IDQzLjEzNEg1Ny45MzJWMzkuODc5OUM1Ny45MzI2IDM5LjgzMTcgNTcuOTE1NyAzOS43ODUgNTcuODg0NCAzOS43NDgzQzU3Ljg1MzIgMzkuNzExNSA1Ny44MDk3IDM5LjY4NzIgNTcuNzYyIDM5LjY3OTlMNTQuNTE2IDM5LjEzMTFDNTQuMzE3MiAzOS4wOTk4IDU0LjEzMiAzOS4wMTA0IDUzLjk4MzYgMzguODc0M0M1My44MzUzIDM4LjczODIgNTMuNzMwNCAzOC41NjE0IDUzLjY4MiAzOC4zNjZDNTMuMzg5MyAzNy4yMjg0IDUyLjkzNjUgMzYuMTM4MSA1Mi4zMzcgMzUuMTI3OUM1Mi4yMzQzIDM0Ljk1NDEgNTIuMTg0IDM0Ljc1NDMgNTIuMTkyNCAzNC41NTI1QzUyLjIwMDcgMzQuMzUwNyA1Mi4yNjczIDM0LjE1NTcgNTIuMzg0IDMzLjk5MUw1NC4yOTMgMzEuMzEwMUM1NC4zMjAxIDMxLjI3MDEgNTQuMzMyNiAzMS4yMjE5IDU0LjMyODQgMzEuMTczOEM1NC4zMjQyIDMxLjEyNTcgNTQuMzAzNiAzMS4wODA2IDU0LjI3IDMxLjA0NTlMNTEuOTcgMjguNzQ2MUM1MS45NTA4IDI4LjcyNjYgNTEuOTI3OSAyOC43MTExIDUxLjkwMjcgMjguNzAwNEM1MS44Nzc1IDI4LjY4OTggNTEuODUwNCAyOC42ODQyIDUxLjgyMyAyOC42ODQxQzUxLjc4MTQgMjguNjg2NyA1MS43NDE0IDI4LjcwMDUgNTEuNzA3IDI4LjcyNDFMNDkuMDQgMzAuNjM5OUM0OC44NzU1IDMwLjc1NjggNDguNjgwNiAzMC44MjM0IDQ4LjQ3OSAzMC44MzE4QzQ4LjI3NzQgMzAuODQwMSA0OC4wNzc2IDMwLjc4OTkgNDcuOTA0IDMwLjY4N0M0Ni44Njk3IDMwLjA3NjkgNDUuNzUyOSAyOS42MTg4IDQ0LjU4OCAyOS4zMjY5QzQ0LjM5MTQgMjkuMjc2NCA0NC4yMTM2IDI5LjE2OTkgNDQuMDc2NCAyOS4wMjAzQzQzLjkzOTEgMjguODcwNiA0My44NDg0IDI4LjY4NDIgNDMuODE1IDI4LjQ4MzlMNDMuMjc0IDI1LjI2MUM0My4yNjY4IDI1LjIxMzMgNDMuMjQyNiAyNS4xNjk5IDQzLjIwNTggMjUuMTM4N0M0My4xNjkxIDI1LjEwNzQgNDMuMTIyMyAyNS4wOTA1IDQzLjA3NCAyNS4wOTExSDM5LjgyQzM5Ljc3MTggMjUuMDkwNSAzOS43MjUgMjUuMTA3NCAzOS42ODgyIDI1LjEzODdDMzkuNjUxNSAyNS4xNjk5IDM5LjYyNzMgMjUuMjEzMyAzOS42MiAyNS4yNjFMMzkuMDY0IDI4LjUzMUMzOS4wMjgyIDI4LjcyODIgMzguOTM3MyAyOC45MTEyIDM4LjgwMTcgMjkuMDU4OEMzOC42NjYxIDI5LjIwNjUgMzguNDkxNSAyOS4zMTI2IDM4LjI5OCAyOS4zNjVDMzcuMTYxNiAyOS42NjE0IDM2LjA3MzggMzAuMTE5OCAzNS4wNjggMzAuNzI2MUMzNC44OTI5IDMwLjgyODggMzQuNjkyIDMwLjg3ODkgMzQuNDg5MSAzMC44NzA2QzM0LjI4NjMgMzAuODYyMyAzNC4wOTAxIDMwLjc5NTcgMzMuOTI0IDMwLjY3OUwzMS4yNTcgMjguNzc5MUMzMS4yMTc5IDI4Ljc1MDMgMzEuMTY5NiAyOC43MzY3IDMxLjEyMTIgMjguNzQxQzMxLjA3MjggMjguNzQ1MiAzMS4wMjc2IDI4Ljc2NjkgMzAuOTk0IDI4LjgwMkwyOC42OTQgMzEuMTAyMUMyOC42NjA4IDMxLjEzNjkgMjguNjQwNCAzMS4xODIyIDI4LjYzNjQgMzEuMjMwMkMyOC42MzI0IDMxLjI3ODMgMjguNjQ1IDMxLjMyNjEgMjguNjcyIDMxLjM2NkwzMC41OTYgMzQuMDY1OUMzMC43MTM4IDM0LjIyODcgMzAuNzgxNyAzNC40MjI0IDMwLjc5MTMgMzQuNjIzMUMzMC44MDA4IDM0LjgyMzcgMzAuNzUxOCAzNS4wMjI4IDMwLjY1IDM1LjE5NkMzMC4wNTczIDM2LjIwOTYgMjkuNjEyNSAzNy4zMDI1IDI5LjMyOSAzOC40NDE5QzI5LjI3ODcgMzguNjM4NiAyOS4xNzIxIDM4LjgxNjMgMjkuMDIyNCAzOC45NTM0QzI4Ljg3MjcgMzkuMDkwNSAyOC42ODYzIDM5LjE4MTIgMjguNDg2IDM5LjIxNDFMMjUuMjYzIDM5Ljc1NDlDMjUuMjE1MyAzOS43NjIxIDI1LjE3MTkgMzkuNzg2NSAyNS4xNDA2IDM5LjgyMzJDMjUuMTA5NCAzOS44NiAyNS4wOTI1IDM5LjkwNjggMjUuMDkzIDM5Ljk1NTFWNDMuMjA4QzI1LjA5MjUgNDMuMjU2MiAyNS4xMDk0IDQzLjMwMzEgMjUuMTQwNiA0My4zMzk4QzI1LjE3MTkgNDMuMzc2NiAyNS4yMTUzIDQzLjQwMDcgMjUuMjYzIDQzLjQwOEwyOC41MzMgNDMuOTY0MUMyOC43MzA0IDQzLjk5OTcgMjguOTEzNiA0NC4wOTA1IDI5LjA2MTUgNDQuMjI2MUMyOS4yMDkzIDQ0LjM2MTcgMjkuMzE1NiA0NC41MzY0IDI5LjM2OCA0NC43M0MyOS42NjQgNDUuODY2MyAzMC4xMjIgNDYuOTU0MSAzMC43MjggNDcuOTZDMzAuODMwOSA0OC4xMzUyIDMwLjg4MTIgNDguMzM2MyAzMC44NzMxIDQ4LjUzOTNDMzAuODY0OSA0OC43NDIzIDMwLjc5ODYgNDguOTM4NiAzMC42ODIgNDkuMTA1TDI4Ljc4MiA1MS43NzFDMjguNzU1IDUxLjgxMDggMjguNzQyNSA1MS44NTg2IDI4Ljc0NjcgNTEuOTA2NUMyOC43NTA5IDUxLjk1NDQgMjguNzcxNSA1MS45OTk0IDI4LjgwNSA1Mi4wMzM5TDMxLjEwNSA1NC4zMzRDMzEuMTI0MyA1NC4zNTM0IDMxLjE0NzIgNTQuMzY4NyAzMS4xNzI0IDU0LjM3OTJDMzEuMTk3NiA1NC4zODk2IDMxLjIyNDcgNTQuMzk1MSAzMS4yNTIgNTQuMzk1QzMxLjI5MzQgNTQuMzkyNyAzMS4zMzM0IDU0LjM3OTYgMzEuMzY4IDU0LjM1NjlMMzQuMDczIDUyLjQzMTlDMzQuMjQ3NSA1Mi4zMDU1IDM0LjQ1NzYgNTIuMjM4MSAzNC42NzMgNTIuMjM5QzM0Ljg1NzcgNTIuMjM5MyAzNS4wMzkyIDUyLjI4NzEgMzUuMiA1Mi4zNzc5TDM1LjE5OCA1Mi4zNzg5Wk0zMy41MiA0MS40OTYxQzMzLjUyMDIgMzkuOTE3MSAzMy45ODg2IDM4LjM3MzYgMzQuODY2IDM3LjA2MDhDMzUuNzQzNCAzNS43NDggMzYuOTkwMyAzNC43MjQ4IDM4LjQ0OTIgMzQuMTIwNkMzOS45MDggMzMuNTE2NCA0MS41MTMyIDMzLjM1ODQgNDMuMDYxOSAzMy42NjY1QzQ0LjYxMDUgMzMuOTc0NiA0Ni4wMzMgMzQuNzM1IDQ3LjE0OTYgMzUuODUxNkM0OC4yNjYxIDM2Ljk2ODEgNDkuMDI2NSAzOC4zOTA2IDQ5LjMzNDYgMzkuOTM5MkM0OS42NDI3IDQxLjQ4NzkgNDkuNDg0NiA0My4wOTMyIDQ4Ljg4MDUgNDQuNTUyQzQ4LjI3NjMgNDYuMDEwOSA0Ny4yNTMxIDQ3LjI1NzYgNDUuOTQwMyA0OC4xMzVDNDQuNjI3NSA0OS4wMTI0IDQzLjA4NCA0OS40ODA4IDQxLjUwNSA0OS40ODFDMzkuMzg3NCA0OS40Nzk5IDM3LjM1NjkgNDguNjM4MSAzNS44NTk2IDQ3LjE0MDZDMzQuMzYyMyA0NS42NDMyIDMzLjUyMDggNDMuNjEyNyAzMy41MiA0MS40OTUxVjQxLjQ5NjFaTTM1LjYwNyA0MS40OTYxQzM1LjYwNyA0Mi42NjMgMzUuOTUzIDQzLjgwMzcgMzYuNjAxMyA0NC43NzM5QzM3LjI0OTYgNDUuNzQ0MiAzOC4xNzExIDQ2LjUwMDIgMzkuMjQ5MiA0Ni45NDY4QzQwLjMyNzMgNDcuMzkzMyA0MS41MTM2IDQ3LjUxMDQgNDIuNjU4IDQ3LjI4MjdDNDMuODAyNSA0Ny4wNTUxIDQ0Ljg1MzggNDYuNDkzMSA0NS42Nzg5IDQ1LjY2OEM0Ni41MDQxIDQ0Ljg0MjggNDcuMDY2IDQzLjc5MTUgNDcuMjkzNyA0Mi42NDdDNDcuNTIxMyA0MS41MDI1IDQ3LjQwNDUgNDAuMzE2NCA0Ni45NTc5IDM5LjIzODNDNDYuNTExNCAzOC4xNjAyIDQ1Ljc1NTEgMzcuMjM4NiA0NC43ODQ5IDM2LjU5MDNDNDMuODE0NiAzNS45NDIgNDIuNjczOSAzNS41OTYgNDEuNTA3IDM1LjU5NkMzOS45NDI0IDM1LjU5NiAzOC40NDE5IDM2LjIxNzUgMzcuMzM1NCAzNy4zMjM3QzM2LjIyOSAzOC40MyAzNS42MDczIDM5LjkzMDUgMzUuNjA3IDQxLjQ5NTFWNDEuNDk2MVoiIGZpbGw9IiM0MDk3NUYiLz4NCjwvc3ZnPg0K"

/***/ }),

/***/ "./src/assets/feature/smart.svg":
/*!**************************************!*\
  !*** ./src/assets/feature/smart.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/smart-d2c6affb53689ad0fd72a72559a5cba9.svg";

/***/ }),

/***/ "./src/assets/feature/winner.svg":
/*!***************************************!*\
  !*** ./src/assets/feature/winner.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODIiIGhlaWdodD0iODIiIHZpZXdCb3g9IjAgMCA4MiA4MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik01NCAwSDI4QzEyLjUzNiAwIDAgMTIuNTM2IDAgMjhWNTRDMCA2OS40NjQgMTIuNTM2IDgyIDI4IDgySDU0QzY5LjQ2NCA4MiA4MiA2OS40NjQgODIgNTRWMjhDODIgMTIuNTM2IDY5LjQ2NCAwIDU0IDBaIiBmaWxsPSIjRUFGOUZGIi8+DQo8cGF0aCBkPSJNMzAuNjUzIDYxQzMwLjUzMTkgNjAuOTk5NiAzMC40MTIgNjAuOTc1MiAzMC4zMDAyIDYwLjkyODVDMzAuMTg4NCA2MC44ODE3IDMwLjA4NyA2MC44MTM1IDMwLjAwMTYgNjAuNzI3NUMyOS45MTYzIDYwLjY0MTUgMjkuODQ4NyA2MC41Mzk2IDI5LjgwMjggNjAuNDI3NUMyOS43NTY5IDYwLjMxNTQgMjkuNzMzNSA2MC4xOTUxIDI5LjczNCA2MC4wNzRWNTcuODgzMUMyOS43MzIyIDU3LjE0OTQgMzAuMDIxNCA1Ni40NDQ5IDMwLjUzODMgNTUuOTI0M0MzMS4wNTUyIDU1LjQwMzcgMzEuNzU3NCA1NS4xMDk0IDMyLjQ5MTEgNTUuMTA2SDM0LjJWNTAuODU4OUMzNC4xOTkxIDUwLjY1MjEgMzQuMjY3NSA1MC40NTEzIDM0LjM5NDQgNTAuMjg4MUMzNC41MjE0IDUwLjEyNDkgMzQuNjk5NCA1MC4wMDg5IDM0LjkwMDEgNDkuOTU5SDM0LjkxMkMzNS45MDg1IDQ5LjcyNTIgMzYuNzg2MyA0OS4xMzc5IDM3LjM4MjQgNDguMzA1OUMzNy45Nzg0IDQ3LjQ3MzkgMzguMjUyMyA0Ni40NTM3IDM4LjE1MyA0NS40MzUxQzM1Ljg3ODIgNDQuMzY5MiAzNC4wMTA3IDQyLjU5MzkgMzIuODMxIDQwLjM3NkMzMi4zNTg1IDM5LjU3MTEgMzEuOTQzOCAzOC43MzM4IDMxLjU5MDEgMzcuODcwMUMyOS42MDMzIDM2Ljc3NiAyNy44OTEgMzUuMjQ0OSAyNi41ODI0IDMzLjM5MjNDMjUuMjczOCAzMS41Mzk4IDI0LjQwMzEgMjkuNDE0MiAyNC4wMzYgMjcuMTc2QzIzLjk3MDEgMjYuNzY1MyAyMy45OTQxIDI2LjM0NTIgMjQuMTA2MSAyNS45NDQ2QzI0LjIxODIgMjUuNTQ0IDI0LjQxNTcgMjUuMTcyMiAyNC42ODUxIDI0Ljg1NTJDMjQuOTU0NiAyNC41MzgzIDI1LjI4OTUgMjQuMjgzNSAyNS42NjY4IDI0LjEwODRDMjYuMDQ0MiAyMy45MzMzIDI2LjQ1NSAyMy44NDIyIDI2Ljg3MSAyMy44NDExSDI5LjY0NlYyMi45NjdDMjkuNjQ0NCAyMi40NDg4IDI5Ljg0ODYgMjEuOTUxMSAzMC4yMTM3IDIxLjU4MzNDMzAuNTc4NyAyMS4yMTU0IDMxLjA3NDggMjEuMDA3MyAzMS41OTMgMjEuMDA0OUg1MC40MDdDNTAuOTI1MyAyMS4wMDczIDUxLjQyMTYgMjEuMjE1NCA1MS43ODY4IDIxLjU4MzNDNTIuMTUyIDIxLjk1MTEgNTIuMzU2MyAyMi40NDg3IDUyLjM1NSAyMi45NjdWMjMuODQxMUg1NS4xMjkxQzU1LjU0NSAyMy44NDIzIDU1Ljk1NTcgMjMuOTMzNyA1Ni4zMzMgMjQuMTA4OUM1Ni43MTAyIDI0LjI4NCA1Ny4wNDUxIDI0LjUzODggNTcuMzE0NSAyNC44NTU3QzU3LjU4MzkgMjUuMTcyNiA1Ny43ODE1IDI1LjU0NCA1Ny44OTM2IDI1Ljk0NDZDNTguMDA1NyAyNi4zNDUxIDU4LjAyOTcgMjYuNzY1MyA1Ny45NjQgMjcuMTc2QzU3LjU5NyAyOS40MTQxIDU2LjcyNjUgMzEuNTM5NiA1NS40MTgxIDMzLjM5MjFDNTQuMTA5NyAzNS4yNDQ2IDUyLjM5NzYgMzYuNzc1OSA1MC40MTEgMzcuODcwMUM1MC4wNTY2IDM4LjczMzcgNDkuNjQxNiAzOS41NzEgNDkuMTY5IDQwLjM3NkM0OC4wMDE2IDQyLjU2MjUgNDYuMTY4OSA0NC4zMjA5IDQzLjkzNiA0NS4zOTdDNDMuODI2MyA0Ni40MjE1IDQ0LjA5NDkgNDcuNDUwOCA0NC42OTEzIDQ4LjI5MUM0NS4yODc2IDQ5LjEzMTMgNDYuMTcwNyA0OS43MjQ1IDQ3LjE3NCA0OS45NTlINDcuMTg1QzQ3LjM4NjkgNTAuMDA3NiA0Ny41NjY2IDUwLjEyMjggNDcuNjk0OSA1MC4yODYxQzQ3LjgyMzEgNTAuNDQ5NCA0Ny44OTI2IDUwLjY1MTIgNDcuODkyMSA1MC44NTg5VjU1LjEwNkg0OS41OTJDNTAuMzI1NyA1NS4xMDk0IDUxLjAyODEgNTUuNDAzNyA1MS41NDUxIDU1LjkyNDNDNTIuMDYyMiA1Ni40NDQ5IDUyLjM1MTYgNTcuMTQ5MyA1Mi4zNSA1Ny44ODMxVjYwLjA3NEM1Mi4zNTA0IDYwLjE5NTIgNTIuMzI2OSA2MC4zMTU0IDUyLjI4MDkgNjAuNDI3NUM1Mi4yMzQ5IDYwLjUzOTYgNTIuMTY3MiA2MC42NDE2IDUyLjA4MTggNjAuNzI3NUM1MS45OTY0IDYwLjgxMzUgNTEuODk0OCA2MC44ODIgNTEuNzgzIDYwLjkyODdDNTEuNjcxMiA2MC45NzU1IDUxLjU1MTIgNjAuOTk5NiA1MS40MyA2MUgzMC42NTNaTTMxLjU3MjEgNTcuODgyMVY1OS4xNDc5SDUwLjUxNlY1Ny44ODIxQzUwLjUxNjYgNTcuNjM3NiA1MC40MjAxIDU3LjQwMjkgNTAuMjQ3OCA1Ny4yMjk1QzUwLjA3NTUgNTcuMDU2MSA0OS44NDE1IDU2Ljk1ODEgNDkuNTk3IDU2Ljk1N0gzMi40OTExQzMyLjI0NjggNTYuOTU4MSAzMi4wMTI5IDU3LjA1NTggMzEuODQwNiA1Ny4yMjlDMzEuNjY4MyA1Ny40MDIyIDMxLjU3MTggNTcuNjM2OCAzMS41NzIxIDU3Ljg4MTFWNTcuODgyMVpNMzYuMDM0IDU1LjEwNUg0Ni4wNTVWNTEuNzgzOUgzNi4wMzRWNTUuMTA1Wk0zOS4wNjQxIDQ5LjExNUMzOC44ODA0IDQ5LjQwNCAzOC42NzMgNDkuNjc3MiAzOC40NDQgNDkuOTMxOUg0My42NTNDNDIuNjU4MiA0OC44MzE1IDQyLjA5NyA0Ny40MDczIDQyLjA3NCA0NS45MjQxQzQxLjcxODQgNDUuOTc2NiA0MS4zNTk0IDQ2LjAwMTkgNDEgNDZDNDAuNjY5NSA0NiA0MC4zMzk0IDQ1Ljk3NzEgNDAuMDEyMSA0NS45MzE5QzM5Ljk5ODkgNDcuMDYwMiAzOS42NzA1IDQ4LjE2MjUgMzkuMDY0MSA0OS4xMTRWNDkuMTE1Wk0zMS40ODQgMjIuOTYxOVYyNy4zOTExQzMxLjM5MyAzMS41ODk0IDMyLjQwMjEgMzUuNzM4NCAzNC40MTEgMzkuNDI2QzM2LjIxMSA0Mi40NzYgMzguNTUgNDQuMTU1IDQxIDQ0LjE1NUM0My40NSA0NC4xNTUgNDUuNzkgNDIuNDc3IDQ3LjU4OSAzOS40MjZDNDkuNTk4IDM1LjczODQgNTAuNjA3MSAzMS41ODk0IDUwLjUxNiAyNy4zOTExVjIyLjk2MTlDNTAuNTE2MiAyMi45NDc0IDUwLjUxMzQgMjIuOTMzMSA1MC41MDggMjIuOTE5N0M1MC41MDI1IDIyLjkwNjIgNTAuNDk0NCAyMi44OTM5IDUwLjQ4NDIgMjIuODgzNUM1MC40NzM5IDIyLjg3MzIgNTAuNDYxNyAyMi44NjUgNTAuNDQ4MyAyMi44NTk0QzUwLjQzNDkgMjIuODUzOCA1MC40MjA2IDIyLjg1MTEgNTAuNDA2IDIyLjg1MTFIMzEuNTkzQzMxLjU2NCAyMi44NTEzIDMxLjUzNjMgMjIuODYyOSAzMS41MTU5IDIyLjg4MzVDMzEuNDk1NSAyMi45MDQxIDMxLjQ4NCAyMi45MzE5IDMxLjQ4NCAyMi45NjA5VjIyLjk2MTlaTTUyLjM1NCAyNy4zOTExQzUyLjM2MzggMjkuOTY0NSA1Mi4wMzQzIDMyLjUyNzcgNTEuMzc0MSAzNS4wMTQ5QzUzLjkxOTQgMzIuOTg2NyA1NS42MjA3IDMwLjA4NTYgNTYuMTQ4IDI2Ljg3NEM1Ni4xNzIxIDI2LjcyOTQgNTYuMTY0MSAyNi41ODExIDU2LjEyNDUgMjYuNDM5OUM1Ni4wODQ5IDI2LjI5ODggNTYuMDE0OCAyNi4xNjc5IDU1LjkxOSAyNi4wNTY5QzU1LjgyMiAyNS45NDEyIDU1LjcwMDggMjUuODQ4MSA1NS41NjQgMjUuNzg0MkM1NS40MjcyIDI1LjcyMDMgNTUuMjc4MSAyNS42ODcyIDU1LjEyNyAyNS42ODdINTIuMzUzMUw1Mi4zNTQgMjcuMzkxMVpNMjYuMDc5IDI2LjA1NTlDMjUuOTgzMSAyNi4xNjcxIDI1LjkxMyAyNi4yOTgxIDI1Ljg3MzQgMjYuNDM5NUMyNS44MzM4IDI2LjU4MDggMjUuODI1OCAyNi43MjkyIDI1Ljg1IDI2Ljg3NEMyNi4zNzc3IDMwLjA4NTcgMjguMDc5NCAzMi45ODY4IDMwLjYyNSAzNS4wMTQ5QzI5Ljk2NTEgMzIuNTI3NiAyOS42MzU5IDI5Ljk2NDQgMjkuNjQ2IDI3LjM5MTFWMjUuNjkwOUgyNi44NzFDMjYuNzIwNiAyNS42OTA0IDI2LjU3MTkgMjUuNzIyOCAyNi40MzUzIDI1Ljc4NTZDMjYuMjk4NyAyNS44NDg1IDI2LjE3NzUgMjUuOTQwNCAyNi4wOCAyNi4wNTQ5TDI2LjA3OSAyNi4wNTU5Wk0zNy41NTExIDM3LjExMjFDMzcuNDEyMSAzNy4wMTAxIDM3LjMwNDMgMzYuODcxMyAzNy4yMzk4IDM2LjcxMTRDMzcuMTc1NCAzNi41NTE2IDM3LjE1NjcgMzYuMzc2OSAzNy4xODYgMzYuMjA3TDM3LjY1OSAzMy40MjQxTDM1LjY1MiAzMS40NTQxQzM1LjUyOTIgMzEuMzMyOSAzNS40NDI1IDMxLjE4IDM1LjQwMTYgMzEuMDEyNUMzNS4zNjA2IDMwLjg0NDkgMzUuMzY3IDMwLjY2OSAzNS40MiAzMC41MDQ5QzM1LjQ3MjQgMzAuMzQwOSAzNS41Njk2IDMwLjE5NSAzNS43MDA4IDMwLjA4MzVDMzUuODMxOSAyOS45NzIgMzUuOTkxNyAyOS44OTkzIDM2LjE2MiAyOS44NzRMMzguOTM1IDI5LjQ2OEw0MC4xNzUgMjYuOTM3QzQwLjI1IDI2Ljc4MjEgNDAuMzY3MSAyNi42NTE1IDQwLjUxMyAyNi41NjAxQzQwLjY1ODggMjYuNDY4NiA0MC44Mjc0IDI2LjQyMDIgNDAuOTk5NSAyNi40MjAyQzQxLjE3MTcgMjYuNDIwMiA0MS4zNDAzIDI2LjQ2ODYgNDEuNDg2MSAyNi41NjAxQzQxLjYzMTkgMjYuNjUxNSA0MS43NDkgMjYuNzgyMSA0MS44MjQgMjYuOTM3TDQzLjA2MyAyOS40NjhMNDUuODM2IDI5Ljg3NEM0Ni4wMDY2IDI5Ljg5OTggNDYuMTY2NSAyOS45NzI1IDQ2LjI5NzkgMzAuMDg0MkM0Ni40Mjk0IDMwLjE5NTkgNDYuNTI3IDMwLjM0MjIgNDYuNTc5OSAzMC41MDYzQzQ2LjYzMjggMzAuNjcwNSA0Ni42Mzg4IDMwLjg0NjMgNDYuNTk3MyAzMS4wMTM3QzQ2LjU1NTggMzEuMTgxMSA0Ni40Njg0IDMxLjMzMzYgNDYuMzQ1IDMxLjQ1NDFMNDQuMzM5IDMzLjQyNDFMNDQuODEyIDM2LjIwN0M0NC44NDExIDM2LjM3NjkgNDQuODIyNCAzNi41NTE0IDQ0Ljc1NzkgMzYuNzExMkM0NC42OTM0IDM2Ljg3MSA0NC41ODU4IDM3LjAwOTkgNDQuNDQ3MSAzNy4xMTIxQzQ0LjI5MDQgMzcuMjI2OCA0NC4xMDEyIDM3LjI4ODggNDMuOTA3IDM3LjI4OTFDNDMuNzU4MSAzNy4yODk2IDQzLjYxMTQgMzcuMjUzMiA0My40OCAzNy4xODMxTDQxIDM1Ljg2ODlMMzguNTIgMzcuMTgzMUMzOC4zNjg1IDM3LjI2MzMgMzguMTk3NSAzNy4yOTkyIDM4LjAyNjUgMzcuMjg2OUMzNy44NTU1IDM3LjI3NDUgMzcuNjkxNCAzNy4yMTQyIDM3LjU1MyAzNy4xMTNMMzcuNTUxMSAzNy4xMTIxWk00MS40MjYxIDM0LjAwMjlMNDIuNjg2IDM0LjY2OTlMNDIuNDQ1IDMzLjI1NzFDNDIuNDE5OSAzMy4xMDkzIDQyLjQzMDkgMzIuOTU3NSA0Mi40NzcxIDMyLjgxNDlDNDIuNTIzMiAzMi42NzIzIDQyLjYwMzIgMzIuNTQzIDQyLjcxMDEgMzIuNDM4TDQzLjczIDMxLjQzOEw0Mi4zMjIxIDMxLjIzMTlDNDIuMTc0MiAzMS4yMTAzIDQyLjAzNCAzMS4xNTI5IDQxLjkxMzQgMzEuMDY0N0M0MS43OTI4IDMwLjk3NjUgNDEuNjk1NSAzMC44NjA0IDQxLjYzIDMwLjcyNjFMNDEgMjkuNDM5OUw0MC4zNyAzMC43MjYxQzQwLjMwNDYgMzAuODYwNCA0MC4yMDczIDMwLjk3NjUgNDAuMDg2NyAzMS4wNjQ3QzM5Ljk2NjEgMzEuMTUyOSAzOS44MjU4IDMxLjIxMDMgMzkuNjc4IDMxLjIzMTlMMzguMjY5IDMxLjQzOEwzOS4yODkgMzIuNDM4QzM5LjM5NTggMzIuNTQzMSAzOS40NzU1IDMyLjY3MjYgMzkuNTIxNSAzMi44MTUyQzM5LjU2NzQgMzIuOTU3OCAzOS41NzgyIDMzLjEwOTQgMzkuNTUzIDMzLjI1NzFMMzkuMzEzIDM0LjY2OTlMNDAuNTczIDM0LjAwMjlDNDAuNzA0NyAzMy45MzMxIDQwLjg1MTUgMzMuODk2NyA0MS4wMDA1IDMzLjg5NjdDNDEuMTQ5NiAzMy44OTY3IDQxLjI5NjMgMzMuOTMzMSA0MS40MjggMzQuMDAyOUg0MS40MjYxWiIgZmlsbD0iIzNEQUJERCIvPg0KPC9zdmc+DQo="

/***/ }),

/***/ "./src/assets/key-feature/editing.svg":
/*!********************************************!*\
  !*** ./src/assets/key-feature/editing.svg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEwIiBoZWlnaHQ9IjExMCIgdmlld0JveD0iMCAwIDExMCAxMTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KPHBhdGggb3BhY2l0eT0iMC4wOSIgZD0iTTc1IDBIMzVDMTUuNjcgMCAwIDE1LjY3IDAgMzVWNzVDMCA5NC4zMyAxNS42NyAxMTAgMzUgMTEwSDc1Qzk0LjMzIDExMCAxMTAgOTQuMzMgMTEwIDc1VjM1QzExMCAxNS42NyA5NC4zMyAwIDc1IDBaIiBmaWxsPSIjMjU2M0ZGIi8+DQo8cmVjdCB4PSIzMiIgeT0iMzIiIHdpZHRoPSI0NiIgaGVpZ2h0PSI0NiIgZmlsbD0idXJsKCNwYXR0ZXJuMCkiLz4NCjxkZWZzPg0KPHBhdHRlcm4gaWQ9InBhdHRlcm4wIiBwYXR0ZXJuQ29udGVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgd2lkdGg9IjEiIGhlaWdodD0iMSI+DQo8dXNlIHhsaW5rOmhyZWY9IiNpbWFnZTAiIHRyYW5zZm9ybT0ic2NhbGUoMC4wMjE3MzkxKSIvPg0KPC9wYXR0ZXJuPg0KPGltYWdlIGlkPSJpbWFnZTAiIHdpZHRoPSI0NiIgaGVpZ2h0PSI0NiIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDNEFBQUF1Q0FZQUFBQlh1U3MzQUFBQUJITkNTVlFJQ0FnSWZBaGtpQUFBQk5KSlJFRlVhSUh0Mld1b1hjVVZCL0RmT2JtK3FvaUtXbnpVQjNnblJrdEJwYWFVZnFnS2Fvd2FSVkV4V05FN1NoV2JLS21tRnZxdEh4U1V4dmhBY2RRZ2lpQkVhMzNFWjN3Z1ZGdGZWS3hsMUE4YWZBVXQ4VUhWMXVUMHc5NG5kK2ZjZmU0OTk1eDdja0g4dzRhMTE1bzE4ejl6MXF3OWE2YlJhcldFYUhjc3d4bllIay9nMnB5OGJoWVJvbjFLWGllZ2lZZHdYVTdlYll5T3RmWW9GVWQyK1AwYkMzTHl0NjNLdGtTSTV1TXVITlJoZWhzbmpPQzNKcEtHM2JBeVJMOGZJcjhOT1htbGkrMTRFMGtyZFg5c2pJNjEzc1YrUTZNMk9WcFlscE0vZFJwQzFNUlZ1THpHNy8wUlJVelBGaG9xa3hhaW4rQWNMTS9KSmx3Um9oYXU2UERiWmtTeEVCZDM2WGdkYnUrRDBJSDRWU2svaTJlNnRGdVB1MHZTaDJNMURzRHVJYm9nSjkvbVpIbUl2c0VmS243dk5FYkhXb2ZpT1VWTWQrTGNuTnc1WGRZaE9oSXZscTlYNXVTcUtkb2ZqS2V3ZDBWOVcwNWlwYzNWeG1mK2xHWk8zc0JDUEY5eGVnZm45ME82eEU0VmVkSlFETkU4ck9rZ0RXTWh1clg5a3BQbFdLRllFdytNbE1vWFF2UzdDdmxWT2JtalQ5STlJMFEveGw4VTRWR0hHS0wvWVVrWk5wZTFEYzFLbzIwcjhzak0wOXdTSVRvRWYxYXNoOGx3RVZhRnVDV242a3RqaHJsMVJZam00aEhzMzZQTDY5aFVWUXhyWnVkVTVPcS9La1JINEg3OHFNZStZazV1NjFRMjYxck9BRDZweUYrMGhYS21WK3VkOU5JNjBneHB4blB5YW9oT1Z5eTZPOW1jOGg3WE8ra2xPYm0rOUYyRW5YRlhUbG9NY1JIbVpIVmJMbFBlSTNvbmZVbE9iaXg5RDFjc1lvcC9jZzNEQzVYTktGUGV3N3FudkU3OHBrMjZSUFhEdUU5YkdHcmFDOUVvSHEwT09BbGF1RFFuTjNUb3E5bGtZMXNZOW94L2huLzIyRGJtWkdXdkhRK0ZlSWgyaEp5c1YxUlYzVFpaYlN6TmFYcWJ1UmtuWHFhOHY0Zm9Zc2pKQnB5azJDWFdZZWwwWnJxTmJzUy9tVzVIRUtJZjRqSE13M1VodWhCeThpVk9ObkhtbC9SQStqOTF5bTZMYzM2SXp1dUI2MGM1RmVtcHhHTGpuL0VSM0J5aTdYT3lNaWVmaCtoVXhRZm9hRnVtdk9PeFY1Y3g1azJIK0tMeW1SSWhPak1uOTVhdlozZVlHMWdSb2swNXVTRW5HMEswR0QvUHlYMmwvM0ZzOGVON3dreWt3MVpKWUM0T3JiRTNjSDJJTnVMbW5IeEVRYnJxUDExMEkvNUErVXlGRDNQeWFDa2ZZL0tpNFNZOGpYOVZsVGw1UEVRTFRCNHFFd3JtYnNSZjdLT1FPR3NLKzJWNHE4NVErZkVURUtLZm1RYng3YVlnMGRuNUl2eWl4dlFwWHNLS3ljaE5nUi9VS1FlTzhSQXR4RDNHQzVFdkZCdXFCN0UySng4T09rWWRCaUllb2dOeEwzWW9WU3R4VFU3V0RVcHNLZ3c2NHh1TmIzeHV5Y25TdGlGRWUyUFBuTHcyNEJpMUdPaVRuNVAzTUIvSDVPVFhiWDJJOXNOZjhYS0lFM0w3akdEZ0dNL0ptM2l6UXozWCtOSGFJWU9PVVlkaGJXczNWdVJ2aHpIQTBDdWdZZUY3NGxzYjN3bmkxUTE3WDRYRWtGRGw5WFZiYUVLSTltZjhKQlNuaGVpb3JVU3NLOHJ6bU9vZDFJWGxPWXRtZVNXM1JsSFV0bkVFbmdqUnNYMk8rVlZGL204L0hZUW9LT3JVa3lycVgrTEpFUDEwQkZlcUw0L200Sm9RWGRySHVJZFY1TGtoT3JxUFBwWmhqeHI5cnJpNk1UcldXb2Q5KytoNE5yRytpVzFtbTBVZm1ET2kyRHQzcStnemsxODhEUkhucXk5T0lEZEd4MXFqV0tzK1hFN05hZk5KNlZaRmVlZjVMSGJwTUgyRkU1czVlUXNMRkVlNUh5anVIcC9IS2JORkduTHlEeHlyT0ZQL0FCOHJzMHhPMXY0Zko1Tk05UEp4T0VrQUFBQUFTVVZPUks1Q1lJST0iLz4NCjwvZGVmcz4NCjwvc3ZnPg0K"

/***/ }),

/***/ "./src/assets/key-feature/speed.svg":
/*!******************************************!*\
  !*** ./src/assets/key-feature/speed.svg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/speed-e89843c7e782e989822d6b7fb11b26fc.svg";

/***/ }),

/***/ "./src/assets/key-feature/vector.svg":
/*!*******************************************!*\
  !*** ./src/assets/key-feature/vector.svg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEwIiBoZWlnaHQ9IjExMCIgdmlld0JveD0iMCAwIDExMCAxMTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8cGF0aCBkPSJNNzUgMEgzNUMxNS42NyAwIDAgMTUuNjcgMCAzNVY3NUMwIDk0LjMzIDE1LjY3IDExMCAzNSAxMTBINzVDOTQuMzMgMTEwIDExMCA5NC4zMyAxMTAgNzVWMzVDMTEwIDE1LjY3IDk0LjMzIDAgNzUgMFoiIGZpbGw9IiNFNEZGRUUiLz4NCjxwYXRoIGQ9Ik03OS40Nzg5IDY2LjU4OUw3OS4zNTk5IDYyLjg1NDFDNzkuMzUxIDYyLjU0MjUgNzkuMjgwNyA2Mi4yMzU3IDc5LjE1MyA2MS45NTEzQzc5LjAyNTMgNjEuNjY3IDc4Ljg0MjcgNjEuNDEwNiA3OC42MTU4IDYxLjE5NjlDNzguMzg4OCA2MC45ODMzIDc4LjEyMTkgNjAuODE2NiA3Ny44MzA0IDYwLjcwNjJDNzcuNTM4OSA2MC41OTU5IDc3LjIyODUgNjAuNTQ0MSA3Ni45MTY5IDYwLjU1NEw3Ni40MSA2MC41NjlDNzUuNDU1NCA1Ni40NzY2IDczLjMxMDUgNTIuNzU4NCA3MC4yNDU5IDQ5Ljg4MzFMNzAuMjEzOSA0OS44NTMxQzY4LjMyNDggNDguMDY4IDY2LjEyNTggNDYuNjQyNiA2My43MjQ5IDQ1LjY0N0w3MC4yNzQgNDUuNDQ3MUM3MC42NDk2IDQ2LjQxNTQgNzEuMzU1NiA0Ny4yMTk3IDcyLjI2NzIgNDcuNzE3NkM3My4xNzg3IDQ4LjIxNTQgNzQuMjM3IDQ4LjM3NDggNzUuMjU0NyA0OC4xNjc0Qzc2LjI3MjQgNDcuOTYgNzcuMTg0IDQ3LjM5OTIgNzcuODI4MSA0Ni41ODQ0Qzc4LjQ3MjEgNDUuNzY5NiA3OC44MDczIDQ0Ljc1MzEgNzguNzc0IDQzLjcxNUM3OC43Mzc5IDQyLjU0NzQgNzguMjQwNiA0MS40NDE3IDc3LjM5MDkgNDAuNjQwMUM3Ni45NzA4IDQwLjI0MTkgNzYuNDc1NSAzOS45MzE2IDc1LjkzMzkgMzkuNzI3MkM3NS4zOTIzIDM5LjUyMjkgNzQuODE1NCAzOS40Mjg2IDc0LjIzNyAzOS40NUM3My4wNzEgMzkuNDgzNiA3MS45NjYgMzkuOTc5IDcxLjE2NSA0MC44MjcxQzcwLjcxNzggNDEuMzAzOSA3MC4zODEgNDEuODczNCA3MC4xNzg5IDQyLjQ5NUw1OC4zODc5IDQyLjg0ODFMNTguMzc0OSA0Mi40NDhDNTguMzY2MSA0Mi4xMzY0IDU4LjI5NTkgNDEuODI5NiA1OC4xNjgzIDQxLjU0NTJDNTguMDQwNiA0MS4yNjA4IDU3Ljg1OCA0MS4wMDQ0IDU3LjYzMSA0MC43OTA3QzU3LjQwNDEgNDAuNTc3IDU3LjEzNzIgNDAuNDEwMyA1Ni44NDU2IDQwLjNDNTYuNTU0MSA0MC4xODk3IDU2LjI0MzUgNDAuMTM4IDU1LjkzMTkgNDAuMTQ4TDUyLjE1NzkgNDAuMjUzMUM1MS44NDY5IDQwLjI2MTUgNTEuNTQwNyA0MC4zMzEyIDUxLjI1NjkgNDAuNDU4NUM1MC45NzMxIDQwLjU4NTggNTAuNzE3MyA0MC43NjgyIDUwLjUwNDIgNDAuOTk0OEM1MC4yOTExIDQxLjIyMTQgNTAuMTI1MSA0MS40ODggNTAuMDE1NiA0MS43NzkxQzQ5LjkwNiA0Mi4wNzAyIDQ5Ljg1NTEgNDIuMzgwMiA0OS44NjU5IDQyLjY5MTFMNDkuODc5IDQzLjA5MUwzOC4wODggNDMuNDQ1QzM3LjcxMjQgNDIuNDc2NiAzNy4wMDYzIDQxLjY3MjMgMzYuMDk0OCA0MS4xNzQ1QzM1LjE4MzIgNDAuNjc2NiAzNC4xMjQ5IDQwLjUxNzMgMzMuMTA3MSA0MC43MjQ3QzMyLjA4OTQgNDAuOTMyIDMxLjE3NzggNDEuNDkyOCAzMC41MzM4IDQyLjMwNzdDMjkuODg5NyA0My4xMjI1IDI5LjU1NDcgNDQuMTM4OSAyOS41ODggNDUuMTc3QzI5LjYyMDIgNDYuMjEzNCAzMC4wMTc0IDQ3LjIwNSAzMC43MDk1IDQ3Ljk3NzFDMzEuNDAxNiA0OC43NDkyIDMyLjM0NDEgNDkuMjUyIDMzLjM3MDggNDkuMzk2OUMzNC4zOTc1IDQ5LjU0MTggMzUuNDQyMyA0OS4zMTk1IDM2LjMyMTEgNDguNzY5MkMzNy4xOTk5IDQ4LjIxODkgMzcuODU2IDQ3LjM3NiAzOC4xNzM5IDQ2LjM4OTFMNDQuNzIzIDQ2LjE4OUM0MS42NzAzIDQ3LjY4MzYgMzkuMDE2NCA0OS44ODIzIDM2Ljk4MDIgNTIuNjAzOEMzNC45NDM5IDU1LjMyNTMgMzMuNTgzNCA1OC40OTE3IDMzLjAxMDkgNjEuODQyMUwzMi4zODA5IDYxLjg2MUMzMS43NTE4IDYxLjg4MTEgMzEuMTU2NSA2Mi4xNSAzMC43MjUzIDYyLjYwODZDMzAuMjk0MSA2My4wNjcxIDMwLjA2MjQgNjMuNjc3OSAzMC4wODEgNjQuMzA3MUwzMC4xOTk5IDY4LjA1NzFDMzAuMjA4NyA2OC4zNjg3IDMwLjI3ODkgNjguNjc1NSAzMC40MDY2IDY4Ljk1OTlDMzAuNTM0MiA2OS4yNDQzIDMwLjcxNjggNjkuNTAwNyAzMC45NDM4IDY5LjcxNDRDMzEuMTcwOCA2OS45MjgxIDMxLjQzNzcgNzAuMDk0OCAzMS43MjkzIDcwLjIwNTFDMzIuMDIwOSA3MC4zMTU0IDMyLjMzMTMgNzAuMzY3MSAzMi42NDI5IDcwLjM1NzFMMzYuMzk0IDcwLjI0NUMzNy4wMjMgNzAuMjI0NyAzNy42MTgzIDY5Ljk1NTcgMzguMDQ5NCA2OS40OTcyQzM4LjQ4MDUgNjkuMDM4OCAzOC43MTIyIDY4LjQyODEgMzguNjkzOSA2Ny43OTlMMzguNTc0OSA2NC4wNDhDMzguNTY2MiA2My43MzY0IDM4LjQ5NjEgNjMuNDI5NSAzOC4zNjg1IDYzLjE0NTFDMzguMjQwOSA2Mi44NjA2IDM4LjA1ODQgNjIuNjA0MSAzNy44MzE0IDYyLjM5MDRDMzcuNjA0NCA2Mi4xNzY3IDM3LjMzNzQgNjIuMDA5OSAzNy4wNDU3IDYxLjg5OTdDMzYuNzU0MSA2MS43ODk1IDM2LjQ0MzUgNjEuNzM4IDM2LjEzMTkgNjEuNzQ4MUgzNi4wMjRDMzYuNzQ3NSA1OC4yMzU0IDM4LjQ3NDkgNTUuMDA4IDQwLjk5NjggNTIuNDU3OUM0My41MTg2IDQ5LjkwNzggNDYuNzI2NCA0OC4xNDQ1IDUwLjIzMDkgNDcuMzgyQzUwLjM1NSA0Ny42NDkyIDUwLjUyOTkgNDcuODg5NyA1MC43NDU5IDQ4LjA5QzUwLjk3MyA0OC4zMDM4IDUxLjI0MDEgNDguNDcwNiA1MS41MzE4IDQ4LjU4MDdDNTEuODIzNiA0OC42OTA5IDUyLjEzNDMgNDguNzQyNCA1Mi40NDYgNDguNzMyMUw1Ni4xOTcgNDguNjJDNTYuNjU2IDQ4LjYwNTUgNTcuMTAxIDQ4LjQ1NzkgNTcuNDc3NyA0OC4xOTUxQzU3Ljg1NDUgNDcuOTMyNCA1OC4xNDY3IDQ3LjU2NTggNTguMzE4OSA0Ny4xNDAxQzYxLjg2ODQgNDcuNjkwOSA2NS4xODI2IDQ5LjI1NzcgNjcuODYwOSA1MS42NTEyQzcwLjUzOTIgNTQuMDQ0NyA3Mi40NjcyIDU3LjE2MjYgNzMuNDExOSA2MC42MjgxTDczLjE4MSA2MC42MzUxQzcyLjU1MiA2MC42NTU0IDcxLjk1NjcgNjAuOTI0NCA3MS41MjU2IDYxLjM4MjlDNzEuMDk0NSA2MS44NDEzIDcwLjg2MjYgNjIuNDUyIDcwLjg4MDkgNjMuMDgxMUw3MC45OTk5IDY2LjgzMTFDNzEuMDA4NyA2Ny4xNDI3IDcxLjA3OSA2Ny40NDk1IDcxLjIwNjYgNjcuNzMzOUM3MS4zMzQzIDY4LjAxODMgNzEuNTE2OSA2OC4yNzQ4IDcxLjc0MzggNjguNDg4NUM3MS45NzA4IDY4LjcwMjEgNzIuMjM3NyA2OC44Njg5IDcyLjUyOTIgNjguOTc5MkM3Mi44MjA4IDY5LjA4OTUgNzMuMTMxNCA2OS4xNDEgNzMuNDQyOSA2OS4xMzFMNzcuMTkzOSA2OS4wMTkxQzc3LjUwMzcgNjkuMDEwMiA3Ny44MDg3IDY4Ljk0MDEgNzguMDkxNCA2OC44MTNDNzguMzc0IDY4LjY4NiA3OC42Mjg4IDY4LjUwNDQgNzguODQxMSA2OC4yNzg2Qzc5LjA1MzQgNjguMDUyOCA3OS4yMTkgNjcuNzg3NCA3OS4zMjg0IDY3LjQ5NzVDNzkuNDM3OSA2Ny4yMDc1IDc5LjQ4OTEgNjYuODk4OCA3OS40Nzg5IDY2LjU4OVY2Ni41ODlaTTM1LjcyNTkgNjcuMzQ3MUwzMy4wOTcgNjcuNDI2MUwzMy4wMTI5IDY0Ljc5N0wzNS42NDE5IDY0LjcxODFMMzUuNzI1OSA2Ny4zNDcxWk03NC4zMDg5IDQyLjM4N0M3NC41OTY2IDQyLjM3ODggNzQuODgwMyA0Mi40NTYyIDc1LjEyNDEgNDIuNjA5MkM3NS4zNjc5IDQyLjc2MjIgNzUuNTYxIDQyLjk4NCA3NS42Nzg4IDQzLjI0NjZDNzUuNzk2NiA0My41MDkzIDc1LjgzMzggNDMuODAwOCA3NS43ODU5IDQ0LjA4NDZDNzUuNzM4MSA0NC4zNjg1IDc1LjYwNzIgNDQuNjMxOCA3NS40MDk3IDQ0Ljg0MTJDNzUuMjEyMyA0NS4wNTA3IDc0Ljk1NzIgNDUuMTk2OSA3NC42NzY3IDQ1LjI2MTRDNzQuMzk2MiA0NS4zMjU5IDc0LjEwMjkgNDUuMzA1OSA3My44MzM4IDQ1LjIwMzhDNzMuNTY0NyA0NS4xMDE3IDczLjMzMTggNDQuOTIyMiA3My4xNjQ3IDQ0LjY4NzhDNzIuOTk3NiA0NC40NTM0IDcyLjkwMzggNDQuMTc0NyA3Mi44OTUgNDMuODg3QzcyLjg4OTYgNDMuNjk1NSA3Mi45MjIxIDQzLjUwNDkgNzIuOTkwOCA0My4zMjYxQzczLjA1OTQgNDMuMTQ3MyA3My4xNjI5IDQyLjk4MzcgNzMuMjk1IDQyLjg0NUM3My41NiA0Mi41NjU2IDczLjkyNCA0Mi40MDExIDc0LjMwODkgNDIuMzg3VjQyLjM4N1pNMzQuMDI1OSA0Ni41MjUxQzMzLjczODIgNDYuNTMzMiAzMy40NTQ2IDQ2LjQ1NTkgMzMuMjEwOCA0Ni4zMDI5QzMyLjk2NjkgNDYuMTQ5OSAzMi43NzQgNDUuOTI4MiAzMi42NTYyIDQ1LjY2NTZDMzIuNTM4NCA0NS40MDMgMzIuNTAxIDQ1LjExMTMgMzIuNTQ4OSA0NC44Mjc0QzMyLjU5NjggNDQuNTQzNiAzMi43Mjc3IDQ0LjI4MDMgMzIuOTI1MSA0NC4wNzA4QzMzLjEyMjUgNDMuODYxNCAzMy4zNzc2IDQzLjcxNTIgMzMuNjU4MSA0My42NTA3QzMzLjkzODYgNDMuNTg2MSAzNC4yMzIgNDMuNjA2MiAzNC41MDEyIDQzLjcwODNDMzQuNzcwMyA0My44MTA0IDM1LjAwMyA0My45OTAxIDM1LjE3MDEgNDQuMjI0NEMzNS4zMzcyIDQ0LjQ1ODggMzUuNDMxMSA0NC43Mzc0IDM1LjQzOTkgNDUuMDI1MUMzNS40NDU3IDQ1LjIxNjYgMzUuNDEzOSA0NS40MDczIDM1LjM0NTkgNDUuNTg2NUMzNS4yNzc5IDQ1Ljc2NTYgMzUuMTc1MiA0NS45Mjk2IDM1LjA0MzggNDYuMDY5QzM0LjkxMjMgNDYuMjA4NCAzNC43NTQ3IDQ2LjMyMDcgMzQuNTc5OSA0Ni4zOTkxQzM0LjQwNTEgNDYuNDc3NSAzNC4yMTY1IDQ2LjUyMDYgMzQuMDI1IDQ2LjUyNkwzNC4wMjU5IDQ2LjUyNTFaTTUyLjg5OSA0NS44MDYxTDUyLjgxNDkgNDMuMTc3TDU1LjQ0MzkgNDMuMDk4MUw1NS40ODU5IDQ0LjQwNTFMNTUuNTI3OSA0NS43MTIxTDUyLjg5OSA0NS44MDYxWk03My45MDUgNjYuMTk0TDczLjgyMSA2My41NjVMNzYuNDQ5OSA2My40ODcxTDc2LjUzNCA2Ni4xMTZMNzMuOTA1IDY2LjE5NFoiIGZpbGw9IiM0MDk3NUYiLz4NCjwvc3ZnPg0K"

/***/ }),

/***/ "./src/assets/logo-dark.svg":
/*!**********************************!*\
  !*** ./src/assets/logo-dark.svg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/logo-dark-8edee467a2a1c6ee5fa9e92248759395.svg";

/***/ }),

/***/ "./src/assets/logo.svg":
/*!*****************************!*\
  !*** ./src/assets/logo.svg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/logo-7aab882a2f7e70d7454b249b71f859ee.svg";

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

/***/ "./src/assets/sponsor/dropbox.svg":
/*!****************************************!*\
  !*** ./src/assets/sponsor/dropbox.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIzIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMTIzIDI0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KPHBhdGggZD0iTTE0LjI2OCA0LjUwOTlMNy4xMzQgOS4wMTk4MUwxNC4yNjggMTMuNTI5N0w3LjEzNCAxOC4wMzk2TDAgMTMuNTA1M0w3LjEzNCA4Ljk5NTQzTDAgNC41MDk5TDcuMTM0IDBMMTQuMjY4IDQuNTA5OVpNNy4wOTcxIDE5LjQ5MDFMMTQuMjMxMSAxNC45ODAyTDIxLjM2NTEgMTkuNDkwMUwxNC4yMzExIDI0TDcuMDk3MSAxOS40OTAxWk0xNC4yNjggMTMuNTA1M0wyMS40MDIgOC45OTU0M0wxNC4yNjggNC41MDk5TDIxLjM2NTEgMEwyOC40OTkxIDQuNTA5OUwyMS4zNjUxIDkuMDE5ODFMMjguNDk5MSAxMy41Mjk3TDIxLjM2NTEgMTguMDM5NkwxNC4yNjggMTMuNTA1M1oiIGZpbGw9IiNCN0JFQzkiLz4NCjxwYXRoIGQ9Ik0zNC4wOTU2IDQuNTA5OTRIMzkuODY0M0M0My41NDIgNC41MDk5NCA0Ni41ODAxIDYuNjE4NjMgNDYuNTgwMSAxMS40MzMzVjEyLjQ0NDlDNDYuNTgwMSAxNy4yOTYxIDQzLjczODggMTkuNDc4IDM5Ljk3NSAxOS40NzhIMzQuMDk1NlY0LjUwOTk0Wk0zNy4zMTgyIDcuMjI4MDhWMTYuNzQ3NkgzOS43OTA1QzQxLjg4MTUgMTYuNzQ3NiA0My4yODM3IDE1LjM5NDcgNDMuMjgzNyAxMi4zODRWMTEuNTkxN0M0My4yODM3IDguNTgxMDUgNDEuODA3NyA3LjIyODA4IDM5LjY3OTggNy4yMjgwOEgzNy4zMTgyWk00OC4yODk4IDcuMzc0MzRINTAuODcyOEw1MS4yOTEgMTAuMTlDNTEuNzgzIDguMjc2MzIgNTMuMDM3NiA3LjI1MjQ1IDU1LjMxMzEgNy4yNTI0NUg1Ni4xMTI2VjEwLjQ4MjVINTQuNzg0MkM1Mi4xNjQzIDEwLjQ4MjUgNTEuNTI0NyAxMS4zODQ1IDUxLjUyNDcgMTMuOTQ0MlYxOS41MTQ1SDQ4LjMzOVY3LjM3NDM0SDQ4LjI4OThaTTU2Ljc1MjIgMTMuNjg4MlYxMy4zNDY5QzU2Ljc1MjIgOS4yODgwMSA1OS4zNzIxIDcuMDY5NjIgNjIuOTM5MSA3LjA2OTYyQzY2LjU3OTggNy4wNjk2MiA2OS4xMjU5IDkuMjg4MDEgNjkuMTI1OSAxMy4zNDY5VjEzLjY4ODJDNjkuMTI1OSAxNy42NzQgNjYuNjUzNyAxOS44MTkyIDYyLjkzOTEgMTkuODE5MkM1OC45OTA4IDE5Ljc4MjcgNTYuNzUyMiAxNy42ODYyIDU2Ljc1MjIgMTMuNjg4MlpNNjUuODY2NCAxMy42NTE2VjEzLjM0NjlDNjUuODY2NCAxMS4wOTIgNjQuNzIyNSA5LjczOSA2Mi45MDIyIDkuNzM5QzYxLjExODcgOS43MzkgNTkuOTM3OSAxMC45ODIzIDU5LjkzNzkgMTMuMzQ2OVYxMy42NTE2QzU5LjkzNzkgMTUuODMzNSA2MS4wODE4IDE3LjA3NjcgNjIuOTAyMiAxNy4wNzY3QzY0LjcyMjUgMTcuMDQwMiA2NS44NjY0IDE1LjgzMzUgNjUuODY2NCAxMy42NTE2Wk03MC43OTg3IDcuMzc0MzRINzMuNDU1NUw3My43NjMgOS42NjU4NkM3NC40MDI2IDguMTMwMDYgNzUuNzY3OSA3LjA2OTYyIDc3Ljc4NTEgNy4wNjk2MkM4MC44OTcgNy4wNjk2MiA4Mi45NTExIDkuMjg4IDgyLjk1MTEgMTMuMzk1N1YxMy43MzdDODIuOTUxMSAxNy43MjI3IDgwLjY3NTYgMTkuODMxNCA3Ny43ODUxIDE5LjgzMTRDNzUuODU0IDE5LjgzMTQgNzQuNTI1NiAxOC45NjYgNzMuODczNyAxNy41NzY1VjIzLjcwNzVINzAuNzYxOEw3MC43OTg3IDcuMzc0MzRaTTc5LjcxNjIgMTMuNjUxNlYxMy4zODM1Qzc5LjcxNjIgMTAuOTcwMSA3OC40NjE2IDkuNzc1NTYgNzYuNzg4OCA5Ljc3NTU2Qzc1LjAwNTMgOS43NzU1NiA3My44MjQ1IDExLjEyODUgNzMuODI0NSAxMy4zODM1VjEzLjYxNTFDNzMuODI0NSAxNS43NjAzIDc0Ljk2ODQgMTcuMTEzMyA3Ni43NTE5IDE3LjExMzNDNzguNTg0NiAxNy4wNzY3IDc5LjcxNjIgMTUuOTE4OCA3OS43MTYyIDEzLjY1MTZaTTg3LjY2MiAxNy4yNzE4TDg3LjM5MTQgMTkuNDkwMUg4NC42NjA4VjMuMzE1NDNIODcuNzcyN1Y5LjUxOTU5Qzg4LjQ2MTUgNy45MzUwMyA4OS44MjY4IDcuMDY5NjIgOTEuNzU3OSA3LjA2OTYyQzk0LjY4NTMgNy4xMDYxOSA5Ni44NTAxIDkuMTA1MTcgOTYuODUwMSAxMy4xMjc1VjEzLjUwNTRDOTYuODUwMSAxNy41Mjc3IDk0Ljc5NiAxOS44MzE0IDkxLjY4NDEgMTkuODMxNEM4OS42MyAxOS43ODI3IDg4LjMwMTYgMTguODQ0MSA4Ny42NjIgMTcuMjcxOFpNOTMuNTc4MyAxMy41MDU0VjEzLjIwMDdDOTMuNTc4MyAxMC45ODIzIDkyLjM2MDYgOS43MzkgOTAuNjUwOSA5LjczOUM4OC45MDQzIDkuNzM5IDg3LjY4NjYgMTEuMTI4NSA4Ny42ODY2IDEzLjIzNzJWMTMuNTA1NEM4Ny42ODY2IDE1Ljc2MDMgODguODY3NCAxNy4wNzY3IDkwLjYxNCAxNy4wNzY3QzkyLjQ4MzYgMTcuMDc2NyA5My41NzgzIDE1LjkxODggOTMuNTc4MyAxMy41MDU0Wk05OC4yMTU0IDEzLjY4ODJWMTMuMzQ2OUM5OC4yMTU0IDkuMjg4MDEgMTAwLjgzNSA3LjA2OTYyIDEwNC40MDIgNy4wNjk2MkMxMDguMDQzIDcuMDY5NjIgMTEwLjU4OSA5LjI4ODAxIDExMC41ODkgMTMuMzQ2OVYxMy42ODgyQzExMC41ODkgMTcuNjc0IDEwOC4wOCAxOS44MTkyIDEwNC40MDIgMTkuODE5MkMxMDAuNDU0IDE5Ljc4MjcgOTguMjE1NCAxNy42ODYyIDk4LjIxNTQgMTMuNjg4MlpNMTA3LjM1NCAxMy42NTE2VjEzLjM0NjlDMTA3LjM1NCAxMS4wOTIgMTA2LjIxIDkuNzM5IDEwNC4zOSA5LjczOUMxMDIuNjA3IDkuNzM5IDEwMS40MjYgMTAuOTgyMyAxMDEuNDI2IDEzLjM0NjlWMTMuNjUxNkMxMDEuNDI2IDE1LjgzMzUgMTAyLjU3IDE3LjA3NjcgMTA0LjM5IDE3LjA3NjdDMTA2LjIyMyAxNy4wNDAyIDEwNy4zNTQgMTUuODMzNSAxMDcuMzU0IDEzLjY1MTZaTTExNC43NTkgMTMuMjAwN0wxMTAuNDY2IDcuMzc0MzRIMTE0LjE0NEwxMTYuNjE2IDExLjAxODhMMTE5LjEyNSA3LjM3NDM0SDEyMi43NjZMMTE4LjQxMiAxMy4xNjQxTDEyMyAxOS40OTAxSDExOS4zOTZMMTE2LjU5MiAxNS40Njc4TDExMy44NjEgMTkuNDkwMUgxMTAuMDk3TDExNC43NTkgMTMuMjAwN1oiIGZpbGw9IiNCN0JFQzkiLz4NCjwvc3ZnPg0K"

/***/ }),

/***/ "./src/assets/sponsor/google.svg":
/*!***************************************!*\
  !*** ./src/assets/sponsor/google.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODUiIGhlaWdodD0iMjgiIHZpZXdCb3g9IjAgMCA4NSAyOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+DQo8cmVjdCB3aWR0aD0iODUiIGhlaWdodD0iMjgiIGZpbGw9InVybCgjcGF0dGVybjApIi8+DQo8ZGVmcz4NCjxwYXR0ZXJuIGlkPSJwYXR0ZXJuMCIgcGF0dGVybkNvbnRlbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIHdpZHRoPSIxIiBoZWlnaHQ9IjEiPg0KPHVzZSB4bGluazpocmVmPSIjaW1hZ2UwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC4wMDE5NjA3OCkgc2NhbGUoMC4wMDc4NDMxNCAwLjAyMzgwOTUpIi8+DQo8L3BhdHRlcm4+DQo8aW1hZ2UgaWQ9ImltYWdlMCIgd2lkdGg9IjEyOCIgaGVpZ2h0PSI0MiIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFJQUFBQUFxQ0FZQUFBQjd1Vk5EQUFBSmhFbEVRVlI0bk8xY0I0eFdSUkQrN2dDeEt3WkU1RHoxVHF5SW9nSTJpaWpGZ2lpaU1YWVU3SWdGTlpaWU1GWUVEVXBFVWJHQmFMQVRFVkhzSFN1S25JaUhpSXJZVU9BNGpvTXpnOTlMTnBONTc5Lzkvd2VjK0w3a3d0MiszWDFiWm1kbnZwbEgwYVNwSHlBQTVRQU9CWEFBZ0YwQXRBRFFHTUJLQUw4RCtBN0FKd0NtQUhnRHdJcVF6ak9zZWZnSVFER0EzZ0FHQTlnL1lJUS9BYmdid0QwQUZtWjdHNFNkQUR5aEdsd0Q0UG0wWDFTYzQzazdBQjhDZURwdzh3VmJBN2dKUUFXQTR3c1k0LzhSR3dEWVEvMXNzVHJXSVU0QWlnQmNEdUJkQUhzWCtJNHRBVHdPNEFFQTZ4WFlWNGFVMGREb3JnR0EwUUQ2SmJ4cUtUVkRCWCtYTnFVVWxwWXhiVTRIOEJlQWk3Tk5yRC9RQWxDVVkvUEZzTHNUd0NRQXkyTHFpTG82aHh2ZXlDa1hnYmwrWFZxOGRRSDZDaGdjcy9tL0F1Z0RvQXVBWnhNMlgvQTVnTE1CN0FiZ0haYko1bmVuQnNoUWorQUt3RjRBYmphRzloVlYrek9CdzU1Rmdia3EyL3o2aStnS0VOVS9pbmU1aTBvQVhRRXN5SE1HdGZRRU10UlRSQnFnTjEwK3ZYbDlDOWo4RFA4QlJBSnd2akhVRVdUMU1xekRhRWpDcHF1YW9oaDV0OWFqYVJmUnpXeEp6MEswMG13QU5TbjEzNEo4UlMwWnpEOVQ2bmRUQU52eWF2MlJ4dlRxaG5BdDJ3SFlFTUFmQU9hUnFqY2hBdENOQyt4aVlqMVIvWEl0blFmZ2NBQk4xYk5sZEV2SEFKakF6UXRCRDNvOFlxQTJVZTIrQi9BQzdhS3ZBdnZkR01DWkFFNEdzS2Q2OWlXQWgwaVJ5enQ3cXVjeWo4V0I3d09adzVNQW5BcGdYMlhML1ExZ01vRGJBRXpURFNVV01CTEF1YXA4QUlENzh4aElXaERhYzJRQWhTd0xleHFBanozcTdraFc4a0NQdW5VVXNJczl2WmlqS0RUTmM5U2J4UTBacmNxM0J6Q0hndk9wZXRhUHdxUFJoV1Bjem1OOHNxY0RBVlJIQmFJQldoa1ZmUll5UWlsZHlIeFFTZDdBeFE0QVh1WmkrS0kxZ1BkNENwNU1hTk9OY1kyTlBmc3RJcUhWa1pwaVRrTGRLd0hjNk5sdkt3YkpDc1VwM1B4Y01aMEkvUm5GbGJsVWdRTFF6S2c0TDJCZ1hUbUlmQ0NrMHRGT3U2WU1KY2RKczZqNTVWUjVHbUliUE1aNzd4WGp1YWpHNTJMYTVrSXI5dG1lL1d1Y2wyUHphdzNXMWFMaFE5QTlZZk5yR1o1dmFyajJFc29mUjIyMXFyR3VBQzd5bXNCVzZoMmpqTTJ2bytwclJ3Tm5RMnFkSzNpL3VZaUVRTi9wMG1hOHNmbFY1Q2wyWTlzTnFGSW5HSE12NS9nMFJQdmNZWlRQb2ZiWWtuMDM1ZDl6VTFqWFRRQThiR3orUEw2akNkZFc1bk1Ncnh3WHZXa3ZyT3BncWZHQ3pWSVlwQS9jRGRtUGczV3huRnhFUHhvd2RYejJBNEJiQUxSbEVvcUw1b3hrdXJpSTFyZ0xXYXgyWkNwbjhOUlUwN0E4RnNDSlJrTExzVVpZL0hZVjh3QzFSUnVlME1qeS81MS90MkdVdFJBTU5BN1BwMXlQTVk0aHVaeFhudGc3djZqNnd2cXVWMHozUktPOHdBSG1nNEZHbThzNWdUakk1dmN5Tk5ZQUovVGNnQ3JheFFxcXdCa0pmWXVhdk5vb3Y4RDVmVmQ2RXk3bVVKQVh4ZlQ3RjU5YlY0a3Z6bEQxbGdBNEVzQnZSdnQ5Nk5MclF5MnU3M0hGdEtBMURnZ1l6RGlxSEorZkgxVGJTQ29iME5WeklhN1lYUjd2bjJGWXgxczRKN1VkSit0aXJLZWhPOXl3aDQ1dzd1OCtScHNoeHRXa01kOXpiaFlrVzZoTWxkK254cmsrdmFLUCtITWF5elE2RmxQbGFmUU5HRkFOVTc1eS9jaXAyMGExcmVTL1pTUk5YRHdiNE51UE44cWlSSlo5akdmalBQdVZ1VDJseWpiaUpnZzZxR2ZMWSt3SEM3cGZYN1F4NmszaXY2SzVoMUtyajRtWmV6WHRCekZvenhKSmZwdnF5RTA1YWtOajZQVThCMm1odTFFVyticFdFa21TZXZhcFc1TFE5L1NBdmkwaWFHdVdsNmp5N3hKVXYwYkkvRnhZODJsTnJxS0hRZXBGbUUzWGM0eDcvUlNUVVJ0ck5MZzF3TC8wd2NsR25hbk9PRFNXQlBSdEdiTFJRalEybmxVYlpYR3dOalJTcDlxckNCbnppcGh4NTRQaFpCWDE1cTlrSW1sUEVtRER0TzBSTGZ6dGhpSFZucTVXR3VoQTE4UEZaNDU3WXJGc3BRSHZ0ZXBHZlZxR2tiWUprcUN2TGRDaWh4RXppRXVIczlBa1QwN0NSOGdXMEwzZG51cytPUzRlRUFuQVhFYi9OSWJRSFNvRXpZd1VaeWlmK2h0amdOcTZUb0oxdlVRcWRxYnhyRnRBM3djYlpSWHFIUkdhazFQd1FhZUFNYmo0T3VIWld3Qk9vTkJlNWNNNXVLcjNXZ0RmR3M4ZkFYQmh3dDJTaERMYUVkb0hyMVRzNFNLbWpibm9iT1FvV0JBVlAwaVZpekM5eHQvZk5JVHJmTThNNWQwTjRmcmMwUUJUakRhWGV2UUxJLzdpaTJsR3dHZ2xmZjFPek1DT2k1SnVxcldsS3dCTDZOWm9GVk5NcHV2bEFPbHV5QWwrUmwvWlJSMzlXRDNJQjQxK3hocFJRQmNpbFBjYWFucVNFODJVSytCRjlieWN5YTFKUXIwWnZRVmQ1eEhuOStjZFlZaHdxb2NYMVQ5R2EvbWcydENveFJHemx3Qnh0UitsMno4Z21wYzJ2cWJ6enJDU1BnOWg0eW5zWUZmRmdEV2p1cnlGSjN3a0tVdU53YzdwZFBHd3dlcTFZcENubzFHL2hDU1JucmdJMkhXcWJJakRJa2FRek9XeHBHbzE5cUk2YmEzSzU5UG5qbEJGKzBuamNjNVRNNFJ5TUM2ajBCYUNvVEhrMTZpWVFKZG80SmRJRm0zQ09ZaGRVQnIzYVZoSFN2Zm1Ib09zSXRmdWd5dGpFazhqZEtabllIa0ZYd0I0bnhQZmtXNnFYbUJ3UXl3MVBDem1tNFNsWEl5WjdLOERpVEJMTy9SaXJvU0xSc3grdHE2cm4zbGdmcUo5MERPSEFSb1NEaGFXOGdhamo0WFVnTE00dHJZOG1IcXQ1Tm80TE9uYndGS3F3QkJXTUE1VmxGQWZBcVkvVDBnK0xxaG9oT05pUGtwdHlPZTk4cHZDcXBNN05PWlpDVzJkUWluMEVBRW9ZdURyaER6ZkpScHdWTklpejZVbU9OMmdjRU13a2FyVWwzMjduMXg1NkFlbHd4TTJIMlFWK3pBYkp3UlZYUHk0elFkcDJNN1VVTDdRbWlRVWRjd0hHQmJZYmpFVGJWWjVZYmxPV1pRUnN3UGR3Y2s1UGdxSnNJQ251QzFQWEtWSEd4ZENBKy9NelVyeWUrdDR0MG1zL3hLUHo5RnJHWFRxUXU4Z1Y5MUhLYnhXSm83R2p6d3dnNmo2NHpDZnB6WnA0eGFUb25kLzVodjFWdERXT0RER3JuSlJRenRyRjllSURQMy9BVUFXckQzNThKWTBLcXE0VWJOcFNGWVlSbGUrRU83OUlPZTd3eWdwVktqWVYyT2ltYjRvcHpYZW10NUdMUmQ2R29VOTM0aGRJeWJLZEtJQjFvampmSXNleVRJZURQMjU5MVpHMkRZRVplUlBvdm5VVUJpai83TkJleXg1Q1VDR2REQ0lybWlFR2g2dXRBNk9GOUxrK3YvdjZFelZ1b2ZuT21nMmN2cWEzbnlra0plVzRWL0M2MXlISkN1aGpaR1VWaWRXL21HcUxOY2R2bHFRYVlEQ2NhUmlTUGVueHhPWGVWekdYQUROTXp5Mk5nYWZhWURDY1FtTlZEZTIwSmVHOGdqbVd5d2lYZDJUZk1oRzZxMFRqZlQ0TllMTUNFd0hBeFJGSElLRnRCdlN5QllPUm5ZRnBJUFJ0T3BqdjhHTHdVSnFoYld5K2NnRUlGV01vUEZYNGRucFZPYnNyVlVWbk5rQTZVS0lIb21TU2tSVmFHY3hDQ1YvVVB4N0lXR0VFUlZXVDR4QWlYS3VYUUQ0QjR1NEhEZ3lZbW9wQUFBQUFFbEZUa1N1UW1DQyIvPg0KPC9kZWZzPg0KPC9zdmc+DQo="

/***/ }),

/***/ "./src/assets/sponsor/paypal.svg":
/*!***************************************!*\
  !*** ./src/assets/sponsor/paypal.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjI4IiB2aWV3Qm94PSIwIDAgMTAwIDI4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMjgiIGZpbGw9InVybCgjcGF0dGVybjApIi8+DQo8ZGVmcz4NCjxwYXR0ZXJuIGlkPSJwYXR0ZXJuMCIgcGF0dGVybkNvbnRlbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIHdpZHRoPSIxIiBoZWlnaHQ9IjEiPg0KPHVzZSB4bGluazpocmVmPSIjaW1hZ2UwIiB0cmFuc2Zvcm09InNjYWxlKDAuMDA2NjY2NjcgMC4wMjM4MDk1KSIvPg0KPC9wYXR0ZXJuPg0KPGltYWdlIGlkPSJpbWFnZTAiIHdpZHRoPSIxNTAiIGhlaWdodD0iNDIiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBSllBQUFBcUNBWUFBQUJSQ2FMc0FBQUlRRWxFUVZSNG5PMWN6MjhiUlJSK2ErL2FhWnNtY2RKRXJVc05EZ2NrRHFESVVnTTVJTlZ5cGVTQXhDVUlDVTVJcERjNG9lWXZnT1RHQ2FubXpLVUJEbHdjcWRiNlp1U29rUStBT0ZCY1VVRWxvSzJoUlMwdGlZTW1mUnZHa3pjN3MrdFp4N0h6U1N0WjN2SHN2Smx2MzY5NVkrdTk1VTlBUkRhVHpnREEyd0NRMkhkVER6c0FzQVVBL3dEQVhRRDRBUUN1Mzd4MXUrWDM2K0xISDRSODNCRjZEYlprUEc4QVFMS0RzVnBJU25hTk1LNEN3SHcyay80UkFMNjZlZXYyNHlNbTlEZGlFdWxHSXBDYVBlc0ZBUGd3bTBtZkhkUUpIeFRzSTFZMms0NzVhRElUWUgyL204MmtVNE0rK2YwTVNtT2Q2NEs4Y1FCNFozQ21lZkJBRWV1NUxzM0N4SkZKN0Y5UXhEclRSV2xmN2ZjSkhsUlF4SnJvNGx4TUR2YjA5eThvWXAzc29yUk92MC93b0lLSy9wVDVxNTJkSGRqZTlzMTFrckFzQzYrbm53SGdpY2w1WDY5czdBUm92b25YMmtKK3RteHlIUDBFdHRaK1dLOXNGQURnbXRCa3VZMVkyVXg2REpPYnZuanlaQXRhaWdlcUVJL0ZJSmwwSGgzZ0d1VHdXaXE1dFRVQXVMU1FuMjBlNEhqNkNxSXB6T29JMXltcEdMWmJMUmdkUGo2ZW41dVp6OC9OS01rY01SYlpXMWR5YTBlNU5VTVFpYVhNWWFsVVl4Q2NIRDUyQWdCZUFZRENnYzdDVXpEdGRiVUh4dEVYRUltbGpOSk04U29laTIzYjhiaG5pdWZ5Y3pPUlJJZ0wrVm1MdndCZ25KazlBR2dRelFzbHQ5WUxKRC8wRUozM01aVkFyVlp3cDUzQ2llTkREN2tJbEMzNHl3QVF1Uk9OZmxRUi9hcnJBREF0TkZsU2phUGsxcGgyWTJhenVaQ2YzWXgyeE4wSEx4OEdPSUVoRXV1WXFvTld5NHpLbXBvWUZVdHlNdDJjUVVhd2tsdGJCWUFyd3ExOUdndDlyeVgweFhMQ1BmQ2lTMFpZUGdBb3ViWExSSC9saGZ6c3FteGNKYmNtUmxpQUdyYUF6K2V4ekloZGNtdnM1YmlNOXowL3NZa3ZTRkVWOWZySnQxN1phSk52L3NKNXJRQm56eFJtTTJsYlovUFpoSTgxbEhRZUpSeGJUR3QwTTMvbVlZMzRyczJCeDdmM0p3QllFU2VkUXc3dlg4ZjJIcHBJQ1A1YWtnMEdmeXUybjE3SXp6WndYT0s5Vk1tdExhTG1YUkxHbnVLQ2tzdUtaMnJMdDE3WmtMVnBBKzlqYVdtTVRvbkZiRjRtUFVrbFpyc2VHYXJTQ3pqcDEwU3krV0FhRjlJenJ4UnhwN243SWlqL2p1cGpyeS9VdUtyeHJaVGMyajVDaDVWdnZiSWhHLzhlK0FWV2JqNHpVbldxcjZaT2pkMjM0M0VxQ2Z1d3c2NERROUF1RkZhSVNXZmFZeG12SW1vbEhxejlyb1pBNGxMRWtBVUlRWW5GajYraDhBMVhpSFJLUi9MNWdUZDlwMVdOTzdXQ3FkSGhCeE5qSjJWRmhIOTIxbnNvaUQ0TGVJdURXa1ZjYUphbGY1UC9vdVRXaW1pS2VDeWlYd1JJRFBFNUJWdzBFZUx6TmhYQmdlZGdzK1R1SGdIUjlLMFFiWm5XV2pVc0h3bGVZeWszbjhPYVFXYmpKc2RIN3ArWlRQbjVVYitINmp3azBEUlFiNTczMXFmd00zL3RjN3B4NFVWTmtlTHVyeEZ2UFJVZ1VDVDMwMVllMmtpRnoxeVZFSmQvaHBaODh4Zk8rOG9uQTYreGhsV053eEFybVhBZVAzTjZZaWVaY0ZUbHpqOEg3bHdEaE9QcU9jR1VHV3g2QzRLRXVXaG9HR3VDMDg2YzdweWdqYWp4cUlpMUtaS0t3eW9SS093OXc3QjgrOEFUUzNraVJ6ZlZ3SktmTEU4MU9UN2lKQlBPa01aUEhrVkZMTUlrK0VHNlg0aitXRTU0V3ozTm8vTFZ5c1FpRjRRY0VXVUdxU1N1MkM4Sjl0dVNXOXNrMGlNRkt2MGdrdy9URFZxUklJOWRZbVV6NlFtZHFDd1dzN2JIUms3K0hZL0gyaGdXajhXc2VEeG1PWTV0RHlXY1k1Wmx4UU9tRCtwdXRkNTY2L1hYZ283ZkZKcVlFOXIzOW5NbVV4a0p5Y0Q2TGJtMUprRkszdDhSRjAvSERLcHlTc3Fja3duNUtIZ2FTOWtwSzNONTl1elVWc0t4UjAwT0FNOGZmbU80enlCZ3BtK1YwZzZZckRTMXhTT2FRN1o5bEVJTkdUUWFOQUxEOHJYQkkxWmExVERoMkMwaXFXa0NGYmRhZnhDRmNJaGx5ZmViYUc1a3BvL0ttamU1RUx6QmFRUy81S0tIb3NRY3JoRy8xVEdET3BBNjJSSEkxd2FQV0ZPcWhnbkgvcmZEUTZ3VTJBbnBxdUUrMitDM2ZhS0E2UFN6U2I1SWhmOW81bFRqWUZzdkRjRTY1Q1RwQ0YxdHRVaEZjdkQvTmcxRkJtLzhXdkt4Z0cyOXNoRzRUczFMTnlqTkd4TExKTDREZ0MvY2F0MWNIWTVaaUcrN1gwNUoxejhSQ2JQSWJmajZ0Wk1oNTVQa3BiYU9HcHlHamtLK1BYakVVbTQrSnhQT2R0RE9KV0FaOXE4QjRFdTNXamZWWnpjd1RSVUNva2tKUzZ4cFFsc0ZOWU5YUkhLaFEwNUZ3MzZaZVZLKzljcEdLTWZlem1iU0RoNGc5WVhqMkxMaitEcGd0ZTIvQU1EM0FQQ3RXNjBiclhXUENLTFpZcCt2WWlhNnlXV3l0WjFmaVRrVVRWSlFwejJIbTk5bEhCY1ZZWHJnemFaeCtYall1dVhJTWNzNnJ0SHNEZ0N3T2hKbU5oL2o5UmNBM090aGt5ZERrWGpyQ3o0UkhKVTVwMEQxSy9hbGl6STNIaFVCeE1nM0t2bDJZZXRVTlRpMnZhT2oxUmpqM1dxOXExc3pVWUU1L1poZmtwYTVJQzV4SlNvNldQTWhWbEF6V01iK3hKb3lFYXdtcXkwNmpsQytYY1IwVGo0bkhGdkhGL3FuWDBqbFlTRS9ld25URmRSaWx6R0tvdmJrL1BwcytGUmxCczVkNGZNdlN2cHNZT0tYM0REV2tXLyt3dmxBOG5td1B2cjA2dnRZQnk1RmFtVDQ0ZGpJQ1pVcC9OV3QxajhMTXdnUFVmenhHcDVmN0JoQzlDYk5mK25BSnpINXZFeGpTU29XbHZsMENtb2d6MjhLVkRZdGt5OXM0WUd0cy9tY1NOaGJHbjM5RVdvRWh3U21hdHQ5OGt2bFRwT2krUHRRZlppdTNiZDFqcmtuSEZ1SHRuZk5ES24vd0ozODhZcmtxSXg0MkVSdVQwTHJEOVlrRlo4aTd2VFR4QmdHZFVDQ1I5OGQ4MmZFK2h3QVhwUTJlSHIyN3lXTnZvNklGUTZicW1yTXd3ajc1cTNiTndEZ2htenMrYm1aY3hyRVlvY043L1hiNUhRQlJYVEFkUUtCSnBFNTc5bi9tdEF4aFRyL2w5VThaTnN6M1laWVlkRkFaMTJiR0poV0NCWDZId1IwaUhWS284MXZ2U3FneWYrYTZBQ2tZOTRqWTRzRU92dC9kOURVeWZEZ2dBdjFqdEJyQUlEL0FGTUR5dFJhMjAxZEFBQUFBRWxGVGtTdVFtQ0MiLz4NCjwvZGVmcz4NCjwvc3ZnPg0K"

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
/* harmony import */ var assets_logo_dark_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/logo-dark.svg */ "./src/assets/logo-dark.svg");
/* harmony import */ var assets_logo_dark_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_logo_dark_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var assets_logo_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/logo.svg */ "./src/assets/logo.svg");
/* harmony import */ var assets_logo_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_logo_svg__WEBPACK_IMPORTED_MODULE_6__);
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
    src: className === 'sticky' ? assets_logo_dark_svg__WEBPACK_IMPORTED_MODULE_5___default.a : assets_logo_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
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
  }, "Login / SignUp"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_mobile_drawer__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
/* harmony import */ var components_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/link */ "./src/components/link.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var assets_bannerBg_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/bannerBg.png */ "./src/assets/bannerBg.png");
/* harmony import */ var assets_bannerBg_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_bannerBg_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var assets_banner_thumb_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/banner-thumb.png */ "./src/assets/banner-thumb.png");
/* harmony import */ var assets_banner_thumb_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_banner_thumb_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var assets_sponsor_paypal_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/sponsor/paypal.svg */ "./src/assets/sponsor/paypal.svg");
/* harmony import */ var assets_sponsor_paypal_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_sponsor_paypal_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var assets_sponsor_google_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! assets/sponsor/google.svg */ "./src/assets/sponsor/google.svg");
/* harmony import */ var assets_sponsor_google_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(assets_sponsor_google_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var assets_sponsor_dropbox_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! assets/sponsor/dropbox.svg */ "./src/assets/sponsor/dropbox.svg");
/* harmony import */ var assets_sponsor_dropbox_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(assets_sponsor_dropbox_svg__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "C:\\reactprojects\\nexttry1\\src\\sections\\banner.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/** @jsx jsx */











const data = [{
  id: 1,
  path: '#',
  image: assets_sponsor_paypal_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
  title: 'paypal'
}, {
  id: 2,
  path: '#',
  image: assets_sponsor_google_svg__WEBPACK_IMPORTED_MODULE_8___default.a,
  title: 'google'
}, {
  id: 3,
  path: '#',
  image: assets_sponsor_dropbox_svg__WEBPACK_IMPORTED_MODULE_9___default.a,
  title: 'dropbox'
}];
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
      lineNumber: 43,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Container"], {
    sx: styles.banner.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    sx: styles.banner.contentBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Heading"], {
    as: "h1",
    variant: "heroPrimary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, "Discover Real-time Knowledge with experts"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Text"], {
    as: "p",
    variant: "heroSecondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  }, "Get pumped up and boost your carrier with learning industry skills , work on real life projects, internships and much more ."), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Flex"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    variant: "whiteButton",
    "aria-label": "Get Started",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
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
      lineNumber: 57,
      columnNumber: 15
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    variant: "textButton",
    "aria-label": "Watch Video",
    onClick: handleClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 15
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaPlayCircle"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 17
    }
  }), " Watch Video"))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Flex"], {
    sx: styles.sponsorBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Text"], {
    sx: styles.sponsorTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }, "Sponsored by:"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    sx: styles.sponsorBox.sponsor,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }, data.map((item, index) => Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(components_link__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    path: item.path,
    key: `client-key${index}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 17
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Image"], {
    src: item.image,
    alt: item.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 19
    }
  })))))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    sx: styles.banner.imageBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Image"], {
    src: assets_banner_thumb_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    alt: "banner",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 11
    }
  }))));
}
const styles = {
  banner: {
    overflow: ['hidden', 'initial', null, 'hidden'],
    backgroundImage: `url(${assets_bannerBg_png__WEBPACK_IMPORTED_MODULE_5___default.a})`,
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
      mr: [0, null, null, '-145px', '-160px', '-180px', '-220px', '-290px'],
      mt: [0, null, null, '40px', 4, 7, 0],
      mb: [0, null, null, null, '-45px', '-70px', null, '-115px'],
      overflow: 'hidden',
      textAlign: 'right',
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
/* harmony import */ var assets_coreFeature_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/coreFeature.png */ "./src/assets/coreFeature.png");
/* harmony import */ var assets_coreFeature_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_coreFeature_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var assets_core_feature_briefcase_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/core-feature/briefcase.svg */ "./src/assets/core-feature/briefcase.svg");
/* harmony import */ var assets_core_feature_briefcase_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_core_feature_briefcase_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var assets_core_feature_secure_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/core-feature/secure.svg */ "./src/assets/core-feature/secure.svg");
/* harmony import */ var assets_core_feature_secure_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_core_feature_secure_svg__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\reactprojects\\nexttry1\\src\\sections\\core-feature.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */






const data = {
  subTitle: 'Core features',
  title: 'Learn,Practice and Placed',
  features: [{
    id: 1,
    imgSrc: assets_core_feature_briefcase_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
    altText: 'Mentorship',
    title: 'Mentorship',
    text: 'Get mentorship at each phase of your learning and learn the right way '
  }, {
    id: 2,
    imgSrc: assets_core_feature_secure_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
    altText: 'World Class Training',
    title: 'Training Camps',
    text: 'A realtime learning and practing trainging camps with live mentorship and traning to boost your learning and reduce learning time'
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
    src: assets_coreFeature_png__WEBPACK_IMPORTED_MODULE_4___default.a,
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
    pl: [0, 5, 0, null, 7, 95],
    pr: [0, 5, null, null, null, 75, 95],
    order: [2, null, null, 0]
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
    width: ['50px', null, '55px'],
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
/* harmony import */ var assets_feature_smart_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/feature/smart.svg */ "./src/assets/feature/smart.svg");
/* harmony import */ var assets_feature_smart_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_feature_smart_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var assets_feature_winner_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/feature/winner.svg */ "./src/assets/feature/winner.svg");
/* harmony import */ var assets_feature_winner_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_feature_winner_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var assets_feature_cloud_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/feature/cloud.svg */ "./src/assets/feature/cloud.svg");
/* harmony import */ var assets_feature_cloud_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_feature_cloud_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var assets_feature_setting_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/feature/setting.svg */ "./src/assets/feature/setting.svg");
/* harmony import */ var assets_feature_setting_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_feature_setting_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var assets_feature_design_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! assets/feature/design.svg */ "./src/assets/feature/design.svg");
/* harmony import */ var assets_feature_design_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(assets_feature_design_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var assets_feature_chat_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! assets/feature/chat.svg */ "./src/assets/feature/chat.svg");
/* harmony import */ var assets_feature_chat_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(assets_feature_chat_svg__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "C:\\reactprojects\\nexttry1\\src\\sections\\feature.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */










const data = [{
  id: 1,
  imgSrc: assets_feature_smart_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
  altText: 'Smart',
  title: 'Smart Features',
  text: 'Get your blood tests delivered at let home collect sample from the victory of the managements.'
}, {
  id: 2,
  imgSrc: assets_feature_winner_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
  altText: 'Performance',
  title: 'Fast Performance',
  text: 'Get your blood tests delivered at let home collect sample from the victory of the managements.'
}, {
  id: 3,
  imgSrc: assets_feature_cloud_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
  altText: 'Content',
  title: 'Unlimited Content',
  text: 'Get your blood tests delivered at let home collect sample from the victory of the managements.'
}, {
  id: 4,
  imgSrc: assets_feature_setting_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
  altText: 'Customization',
  title: 'Unlimited Customization',
  text: 'Get your blood tests delivered at let home collect sample from the victory of the managements.'
}, {
  id: 5,
  imgSrc: assets_feature_design_svg__WEBPACK_IMPORTED_MODULE_8___default.a,
  altText: 'Productivity',
  title: 'Boost Productivity',
  text: 'Get your blood tests delivered at let home collect sample from the victory of the managements.'
}, {
  id: 6,
  imgSrc: assets_feature_chat_svg__WEBPACK_IMPORTED_MODULE_9___default.a,
  altText: 'Support',
  title: 'Customer Support',
  text: 'Get your blood tests delivered at let home collect sample from the victory of the managements.'
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
    slogan: "Quality features",
    title: "Meet exciting feature of app",
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
/* harmony import */ var assets_key_feature_vector_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/key-feature/vector.svg */ "./src/assets/key-feature/vector.svg");
/* harmony import */ var assets_key_feature_vector_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_key_feature_vector_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var assets_key_feature_editing_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/key-feature/editing.svg */ "./src/assets/key-feature/editing.svg");
/* harmony import */ var assets_key_feature_editing_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_key_feature_editing_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var assets_key_feature_speed_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/key-feature/speed.svg */ "./src/assets/key-feature/speed.svg");
/* harmony import */ var assets_key_feature_speed_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_key_feature_speed_svg__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\reactprojects\\nexttry1\\src\\sections\\key-feature.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */







const data = [{
  id: 1,
  imgSrc: assets_key_feature_vector_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
  altText: 'Exceptional Faculty ',
  title: 'Exceptional Faculty',
  text: 'Our faculty is from the best institutes. They also have work experience in tech giants which makes them exceptional.'
}, {
  id: 2,
  imgSrc: assets_key_feature_editing_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
  altText: 'Mentor Support',
  title: 'Mentor Support',
  text: 'An incredible mentor support is provided where 1 teaching assistant is assigned to 10 students. The TA’s are top performers alumni dedicated to support and clear doubts at any point of time.'
}, {
  id: 3,
  imgSrc: assets_key_feature_speed_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
  altText: 'Course curriculum',
  title: 'Course curriculum',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhdGgtbWF0Y2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcHJlcGFyZS1kZXN0aW5hdGlvbi50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yZXNvbHZlLXJld3JpdGVzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2Fycm93RXZlbi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9hcnJvd09kZC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9iYW5uZXItdGh1bWIucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvYmFubmVyQmcucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvY29yZS1mZWF0dXJlL2JyaWVmY2FzZS5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9jb3JlLWZlYXR1cmUvc2VjdXJlLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2NvcmVGZWF0dXJlLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ZlYXR1cmUvY2hhdC5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9mZWF0dXJlL2Nsb3VkLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ZlYXR1cmUvZGVzaWduLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ZlYXR1cmUvc2V0dGluZy5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9mZWF0dXJlL3NtYXJ0LnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ZlYXR1cmUvd2lubmVyLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2tleS1mZWF0dXJlL2VkaXRpbmcuc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMva2V5LWZlYXR1cmUvc3BlZWQuc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMva2V5LWZlYXR1cmUvdmVjdG9yLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2xvZ28tZGFyay5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9sb2dvLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3BhcnRuZXIucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvcGF0dGVybkJHLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3BheW1lbnQtcGF0dGVybi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9wYXltZW50VGh1bWIucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc3BvbnNvci9kcm9wYm94LnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3Nwb25zb3IvZ29vZ2xlLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3Nwb25zb3IvcGF5cGFsLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3Rlc3RpbW9uaWFsL2F2YXRhcjEucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvdGVzdGltb25pYWwvYXZhdGFyMi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy90ZXN0aW1vbmlhbC9hdmF0YXIzLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3Rlc3RpbW9uaWFsL2F2YXRhcjQucG5nIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FjY29yZGlvbi9hY2NvcmRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYWNjb3JkaW9uL2Jhc2UtYWNjb3JkaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FjY29yZGlvbi9zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9uLWdyb3VwLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RyYXdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9mZWF0dXJlLWNhcmQtY29sdW1uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2ZlYXR1cmUtY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmRhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmRhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvbW9iaWxlLWRyYXdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9saXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xvZ28uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcHJpY2UtY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9yYXRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2VjdGlvbi1oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2VvLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RleHQtZmVhdHVyZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGV4dHMvYXBwL2FwcC5wcm92aWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGV4dHMvYXBwL2FwcC5yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250ZXh0cy9jcmVhdGUtY29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGV4dHMvZHJhd2VyL2RyYXdlci5jb250ZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb250ZXh0cy9kcmF3ZXIvZHJhd2VyLnByb3ZpZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VjdGlvbnMvYmFubmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zZWN0aW9ucy9jb3JlLWZlYXR1cmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlY3Rpb25zL2ZhcS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VjdGlvbnMvZmVhdHVyZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VjdGlvbnMva2V5LWZlYXR1cmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlY3Rpb25zL3BhY2thZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlY3Rpb25zL3BhcnRuZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlY3Rpb25zL3NlY3VyZS1wYXltZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9zZWN0aW9ucy90ZXN0aW1vbmlhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VjdGlvbnMvd29ya2Zsb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RoZW1lL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBlbW90aW9uL2NvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmcmFtZXItbW90aW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmMtZHJhd2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1jdXN0b20tc2Nyb2xsYmFyc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWljb25zL2ZhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvaW9cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LW1vZGFsLXZpZGVvXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtbXVsdGktY2Fyb3VzZWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zY3JvbGxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zdGlja3lub2RlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidGhlbWUtdWlcIiJdLCJuYW1lcyI6WyJsaXN0ZW5lcnMiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsIndpbmRvdyIsInByZWZldGNoZWQiLCJjYWNoZWRPYnNlcnZlciIsImVudHJpZXMiLCJlbnRyeSIsImNiIiwicm9vdE1hcmdpbiIsImxpc3RlblRvSW50ZXJzZWN0aW9ucyIsIm9ic2VydmVyIiwiZ2V0T2JzZXJ2ZXIiLCJjb25zb2xlIiwicm91dGVyIiwiZXJyIiwiaHJlZiIsImV2ZW50IiwidGFyZ2V0IiwiZSIsIm5vZGVOYW1lIiwiaXNNb2RpZmllZEV2ZW50Iiwic2Nyb2xsIiwiYXMiLCJyZXBsYWNlIiwic3VjY2VzcyIsImRvY3VtZW50IiwiYXJncyIsImtleSIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsIk9iamVjdCIsInByb3BzIiwiY3JlYXRlUHJvcEVycm9yIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInNoYWxsb3ciLCJwYXNzSHJlZiIsInByZWZldGNoIiwib3B0aW9uYWxQcm9wcyIsImhhc1dhcm5lZCIsIlJlYWN0IiwicCIsInBhdGhuYW1lIiwicmVzb2x2ZWRIcmVmIiwiY2hpbGRFbG0iLCJpc1ByZWZldGNoZWQiLCJjaGlsZHJlbiIsImNoaWxkIiwiQ2hpbGRyZW4iLCJjaGlsZFByb3BzIiwicmVmIiwiZWwiLCJzZXRDaGlsZEVsbSIsIm9uQ2xpY2siLCJsaW5rQ2xpY2tlZCIsInByaW9yaXR5IiwiTGluayIsInBhdGgiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInByb2Nlc3MiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZ2V0IiwiUm91dGVyIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJldmVudEZpZWxkIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwibmFtZSIsImFsbCIsIm9uIiwib2ZmIiwiZW1pdCIsImhhbmRsZXIiLCJiYXNlUGF0aCIsImNhbmNlbGxlZCIsInVybCIsImxvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJoYXNCYXNlUGF0aCIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImZpbmFsVXJsIiwiUEFHRV9MT0FEX0VSUk9SIiwiU3ltYm9sIiwiYWRkQmFzZVBhdGgiLCJyZXNvbHZlSHJlZiIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiY3JlZGVudGlhbHMiLCJyZXMiLCJhdHRlbXB0cyIsImZldGNoUmV0cnkiLCJpc1NlcnZlclJlbmRlciIsIm1hcmtMb2FkaW5nRXJyb3IiLCJjb25zdHJ1Y3RvciIsInJvdXRlIiwicXVlcnkiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIl9pbkZsaWdodFJvdXRlIiwiX3NoYWxsb3ciLCJzdGF0ZSIsIm9wdGlvbnMiLCJzdHlsZVNoZWV0cyIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwiQ29tcG9uZW50IiwiX19ORVhUX0RBVEFfXyIsInJlbG9hZCIsImJhY2siLCJwdXNoIiwicHJlcGFyZVVybEFzIiwiY2hhbmdlIiwiaXNMb2NhbFVSTCIsIlNUIiwicGVyZm9ybWFuY2UiLCJjbGVhbmVkQXMiLCJkZWxCYXNlUGF0aCIsInBhZ2VzIiwiX19yZXdyaXRlcyIsInBhcnNlZCIsIm1ldGhvZCIsInJlc29sdmVkQXMiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsIm1pc3NpbmdQYXJhbXMiLCJwYXJhbSIsImFzUGF0aG5hbWUiLCJyb3V0ZUluZm8iLCJhcHBDb21wIiwiZXJyb3IiLCJjaGFuZ2VTdGF0ZSIsIl9fTiIsImhhbmRsZVJvdXRlSW5mb0Vycm9yIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsInBhZ2UiLCJnZXRSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJyZXF1aXJlIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiZGF0YUhyZWYiLCJzZXQiLCJiZWZvcmVQb3BTdGF0ZSIsIm9ubHlBSGFzaENoYW5nZSIsIm5ld0hhc2giLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic2Nyb2xsVG9IYXNoIiwiaGFzaCIsImlkRWwiLCJuYW1lRWwiLCJ1cmxJc05ldyIsIl9yZXNvbHZlSHJlZiIsImNsZWFuUGF0aG5hbWUiLCJwYXJzZWRIcmVmIiwiUHJvbWlzZSIsImZldGNoQ29tcG9uZW50IiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwiX2dldERhdGEiLCJmbiIsImRhdGEiLCJfZ2V0U3RhdGljRGF0YSIsImZldGNoTmV4dERhdGEiLCJfZ2V0U2VydmVyRGF0YSIsIkFwcFRyZWUiLCJjdHgiLCJhYm9ydENvbXBvbmVudExvYWQiLCJub3RpZnkiLCJzbGFzaGVkUHJvdG9jb2xzIiwicHJvdG9jb2wiLCJ1cmxPYmoiLCJob3N0IiwiYXV0aCIsImVuY29kZVVSSUNvbXBvbmVudCIsImhvc3RuYW1lIiwiU3RyaW5nIiwicXVlcnlzdHJpbmciLCJzZWFyY2giLCJURVNUX1JPVVRFIiwiRFVNTVlfQkFTRSIsInJlc29sdmVkQmFzZSIsIm9yaWdpbiIsIm1hdGNoZXJPcHRpb25zIiwic2Vuc2l0aXZlIiwiZGVsaW1pdGVyIiwiZGVjb2RlIiwiY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyIsInN0cmljdCIsImN1c3RvbVJvdXRlIiwia2V5cyIsIm1hdGNoZXJSZWdleCIsInBhdGhUb1JlZ2V4cCIsIm1hdGNoZXIiLCJkZWNvZGVVUklDb21wb25lbnQiLCJwYXJzZWREZXN0aW5hdGlvbiIsImRlc3RpbmF0aW9uIiwiZGVzdFF1ZXJ5IiwiZGVzdFBhdGgiLCJkZXN0UGF0aFBhcmFtS2V5cyIsImRlc3RQYXRoUGFyYW1zIiwiZGVzdGluYXRpb25Db21waWxlciIsInZhbGlkYXRlIiwidmFsdWUiLCJBcnJheSIsInN0ck9yQXJyYXkiLCJxdWVyeUNvbXBpbGVyIiwicGFyYW1LZXlzIiwiYXBwZW5kUGFyYW1zVG9RdWVyeSIsInBhcmFtcyIsInNob3VsZEFkZEJhc2VQYXRoIiwibmV3VXJsIiwiZW5jb2RlVVJJIiwic2VhcmNoUGFyYW1zIiwicmVzdWx0IiwiaXRlbSIsInNlYXJjaFBhcmFtc0xpc3QiLCJjdXN0b21Sb3V0ZU1hdGNoZXIiLCJyZXdyaXRlIiwiZGVzdFJlcyIsInJlIiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwibSIsInN0ciIsIm9wdGlvbmFsIiwicmVwZWF0Iiwic2VnbWVudHMiLCJub3JtYWxpemVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwic2VnbWVudCIsInBhcnNlUGFyYW1ldGVyIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJpIiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsImlzTmFOIiwicGFyc2VJbnQiLCJuYW1lZFJlZ2V4IiwidXNlZCIsInBvcnQiLCJnZXRMb2NhdGlvbk9yaWdpbiIsIkFwcCIsImdldERpc3BsYXlOYW1lIiwicGFnZVByb3BzIiwibG9hZEdldEluaXRpYWxQcm9wcyIsImlzUmVzU2VudCIsInVybE9iamVjdEtleXMiLCJTUCIsIkFjY29yZGlvbiIsIml0ZW1zIiwiY29tYmluZVJlZHVjZXJzIiwic2luZ2xlIiwicHJldmVudENsb3NlIiwib3BlbkluZGV4ZXMiLCJoYW5kbGVJdGVtQ2xpY2siLCJtYXAiLCJpbmRleCIsInRpdGxlIiwiaW5jbHVkZXMiLCJjb250ZW50cyIsIkJhc2VBY2NvcmRpb24iLCJpbnRlcm5hbFNldFN0YXRlIiwiY2xvc2luZyIsInR5cGUiLCJmaWx0ZXIiLCJsb2ciLCJnZXRTdGF0ZSIsInVuZGVmaW5lZCIsImNoYW5nZXMiLCJjYWxsYmFjayIsImFsbENoYW5nZXMiLCJzZXRTdGF0ZSIsImFjdHVhbFN0YXRlIiwiY2hhbmdlc09iamVjdCIsInN0YXRlUmVkdWNlciIsIm9uU3RhdGVDaGFuZ2UiLCJyZW5kZXIiLCJBY2NvcmRpb25CdXR0b24iLCJyZXN0Iiwic3R5bGVzIiwiYnV0dG9uVG9nZ2xlIiwiZGlzcGxheSIsImNvbG9yIiwiY3Vyc29yIiwiYm9yZGVyIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwibGV0dGVyU3BhY2luZyIsInBvc2l0aW9uIiwicGFkZGluZ0xlZnQiLCJsaW5lSGVpZ2h0Iiwid2lkdGgiLCJoZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0b3AiLCJsZWZ0Iiwib3BhY2l0eSIsImNvbnRlbnQiLCJ0cmFuc2Zvcm0iLCJ0cmFuc2l0aW9uIiwidmFyaWFudHMiLCJvcGVuIiwibWFyZ2luVG9wIiwiY2xvc2VkIiwiQWNjb3JkaW9uQ29udGVudHMiLCJpc09wZW4iLCJvdmVyZmxvd1kiLCJwYWRkaW5nQm90dG9tIiwiQWNjb3JkaW9uSXRlbSIsIm92ZXJmbG93IiwicGFkZGluZyIsImJvcmRlckJvdHRvbSIsImxlbmd0aCIsInNsaWNlIiwicmVkdWNlcnMiLCJyZWR1Y2UiLCJhY2MiLCJyZWR1Y2VyIiwiQnV0dG9uR3JvdXAiLCJuZXh0IiwicHJldmlvdXMiLCJidXR0b25Hcm91cCIsImp1c3RpZnlDb250ZW50IiwibWIiLCJidXR0b24iLCJiZyIsInB4Iiwib3V0bGluZSIsIkRyYXdlciIsImNsYXNzTmFtZSIsImNsb3NlQnV0dG9uIiwiY2xvc2VCdXR0b25TdHlsZSIsImRyYXdlckhhbmRsZXIiLCJ0b2dnbGVIYW5kbGVyIiwicGxhY2VtZW50IiwiZHJhd2VyU3R5bGUiLCJjbG9zZUJ0blN0eWxlIiwidHJpbSIsImRlZmF1bHRQcm9wcyIsIkZlYXR1cmVDYXJkQ29sdW1uIiwic3JjIiwiYWx0VGV4dCIsInRleHQiLCJjYXJkIiwiaW1nIiwid3JhcHBlciIsInN1YlRpdGxlIiwiYWxpZ25JdGVtcyIsInRleHRBbGlnbiIsImZsZXhEaXJlY3Rpb24iLCJteCIsIkZlYXR1cmVDYXJkIiwiZmxleFNocmluayIsIm1yIiwibXQiLCJoZWFkZXIiLCJsYWJlbCIsIkZvb3RlciIsImZvb3RlciIsImNvbnRhaW5lciIsImZvb3RlclRvcEFyZWEiLCJtZW51SXRlbXMiLCJtZW51cyIsImhlYWRpbmciLCJsaW5rIiwiY29weXJpZ2h0IiwiYm9yZGVyVG9wIiwiYm9yZGVyVG9wQ29sb3IiLCJmbGV4V3JhcCIsInB0IiwicGIiLCJ0ZXh0RGVjb3JhdGlvbiIsImEiLCJwbCIsIkhlYWRlciIsIkxvZ29EYXJrIiwiTG9nb1doaXRlIiwibmF2IiwicG9zaXRpb25BbmltIiwia2V5ZnJhbWVzIiwicHkiLCJhbmltYXRpb24iLCJtbCIsImJveFNoYWRvdyIsImJvcmRlckNvbG9yIiwic29jaWFsIiwiaWNvbiIsIk1vYmlsZURyYXdlciIsImRpc3BhdGNoIiwidXNlQ29udGV4dCIsIkRyYXdlckNvbnRleHQiLCJ1c2VDYWxsYmFjayIsImRyYXdlciIsImNsb3NlIiwibWVudSIsIm1lbnVGb290ZXIiLCJyaWdodCIsInpJbmRleCIsImZ3IiwiSW1hZ2UiLCJMYXlvdXQiLCJpc1N0aWNreSIsInNldElzU3RpY2t5IiwidXNlU3RhdGUiLCJoYW5kbGVTdGF0ZUNoYW5nZSIsInN0YXR1cyIsIlN0aWNreSIsIlNUQVRVU19GSVhFRCIsIlNUQVRVU19PUklHSU5BTCIsInZhcmlhbnQiLCJOYXZMaW5rIiwiTGlzdCIsInBhcmVudFN0eWxlIiwiY2hpbGRTdHlsZSIsImxpc3RTdHlsZVR5cGUiLCJtYXJnaW4iLCJpc0F2YWlsYWJsZSIsImxpc3RJY29uIiwibWFyZ2luTGVmdCIsIkxvZ28iLCJQcmljZUNhcmQiLCJkZXNjcmlwdGlvbiIsInByaWNlV2l0aFVuaXQiLCJidXR0b25UZXh0IiwicG9pbnRzIiwicHJpY2luZ0JveCIsInByaWNpbmdIZWFkZXIiLCJwcmljZSIsImxpc3RJdGVtIiwiZmxleCIsImJhY2tncm91bmQiLCJtYXhXaWR0aCIsIm1hcmdpbkJvdHRvbSIsImJvdHRvbSIsImZvbnRTdHlsZSIsInByIiwiUmF0aW5nIiwicmF0aW5nIiwidG90YWxSYXRpbmciLCJTZWN0aW9uSGVhZGVyIiwic2xvZ2FuIiwiaXNXaGl0ZSIsIlNFTyIsImF1dGhvciIsIm1ldGEiLCJtZXRhRGF0YSIsInByb3BlcnR5IiwiY29uY2F0IiwibGFuZyIsIlRleHRGZWF0dXJlIiwiYnRuTmFtZSIsImJ0blVSTCIsInRleHRUcmFuc2Zvcm0iLCJ1c2VEaXNwYXRjaCIsInByb3ZpZGVyIiwidXNlQ3JlYXRlQ29udGV4dCIsImluaXRpYWxTdGF0ZSIsInVzZVN0aWNreVN0YXRlIiwidXNlU3RpY2t5RGlzcGF0Y2giLCJTdGlja3lQcm92aWRlciIsImlzU2lkZWJhclN0aWNreSIsIkVycm9yIiwiZGVmYXVsdFZhbHVlIiwiZGVmYXVsdERpc3BhdGNoIiwic3RhdGVDdHgiLCJjcmVhdGVDb250ZXh0IiwiZGlzcGF0Y2hDdHgiLCJ1c2VTdGF0ZUN0eCIsInVzZURpc3BhdGNoQ3R4IiwiUHJvdmlkZXIiLCJ1c2VSZWR1Y2VyIiwiYWN0aW9uIiwiRHJhd2VyUHJvdmlkZXIiLCJJbmRleFBhZ2UiLCJ0aGVtZSIsImlkIiwiaW1hZ2UiLCJjbGllbnQxIiwiY2xpZW50MiIsImNsaWVudDMiLCJCYW5uZXIiLCJ2aWRlb09wZW4iLCJzZXRWaWRlb09wZW4iLCJoYW5kbGVDbGljayIsInByZXZlbnREZWZhdWx0IiwiYmFubmVyIiwiY29udGVudEJveCIsInNwb25zb3JCb3giLCJzcG9uc29yVGl0bGUiLCJzcG9uc29yIiwiaW1hZ2VCb3giLCJCYW5uZXJUaHVtYiIsImJhY2tncm91bmRJbWFnZSIsIkJhbm5lckJHIiwiYmFja2dyb3VuZFJlcGVhdCIsImJhY2tncm91bmRQb3NpdGlvbiIsImJhY2tncm91bmRTaXplIiwiYm9yZGVyQm90dG9tUmlnaHRSYWRpdXMiLCJmZWF0dXJlcyIsImltZ1NyYyIsIkJyaWVmY2FzZSIsIlNlY3VyZSIsIkNvcmVGZWF0dXJlIiwiY29yZUZlYXR1cmUiLCJjb250YWluZXJCb3giLCJ0aHVtYm5haWwiLCJDb3JlRmVhdHVyZVRodW1iIiwiaGVhZGluZ1RvcCIsImdyaWQiLCJib3JkZXJUb3BSaWdodFJhZGl1cyIsIm9yZGVyIiwiZmFxcyIsIkZhcSIsIm15IiwiU21hcnQiLCJXaW5uZXIiLCJDbG91ZCIsIlNldHRpbmciLCJEZXNpZ24iLCJDaGF0IiwiRmVhdHVyZSIsImdyaWRHYXAiLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwiVmVjdG9yIiwiRWRpdGluZyIsIlNwZWVkIiwiS2V5RmVhdHVyZSIsInBhY2thZ2VzIiwiUGFja2FnZSIsInByaWNpbmciLCJwYWNrYWdlRGF0YSIsIlBhdHRlcm5CRyIsIlBhcnRuZXJTZWN0aW9uIiwiUGFydG5lciIsIlNlY3VyZVBheW1lbnQiLCJiZ092ZXJsYXkiLCJQYXltZW50VGh1bWIiLCJQYXltZW50UGF0dGVybiIsImF2YXRhciIsIkF2YXRhcjEiLCJkZXNpZ25hdGlvbiIsInJldmlldyIsIkF2YXRhcjIiLCJBdmF0YXIzIiwiQXZhdGFyNCIsInJlc3BvbnNpdmUiLCJkZXNrdG9wIiwiYnJlYWtwb2ludCIsIm1heCIsIm1pbiIsInNsaWRlc1RvU2xpZGUiLCJsYXB0b3AiLCJ0YWJsZXQiLCJtb2JpbGUiLCJUZXN0aW1vbmlhbENhcmQiLCJjYXJvdXNlbFdyYXBwZXIiLCJyZXZpZXdDYXJkIiwidWwiLCJsaXN0U3R5bGUiLCJzdmciLCJtYXJnaW5SaWdodCIsIm9iamVjdEZpdCIsIldvcmtGbG93Iiwid29ya2Zsb3ciLCJpY29uQm94IiwiQXJyb3dPZGQiLCJBcnJvd0V2ZW4iLCJjb2xvcnMiLCJ0ZXh0X3NlY29uZGFyeSIsImhlYWRpbmdfc2Vjb25kYXJ5IiwiYmFja2dyb3VuZF9zZWNvbmRhcnkiLCJib3JkZXJfY29sb3IiLCJwcmltYXJ5Iiwic2Vjb25kYXJ5IiwibXV0ZWQiLCJhY2NlbnQiLCJ5ZWxsb3ciLCJtb2RlcyIsImRhcmsiLCJicmVha3BvaW50cyIsImZvbnRzIiwiYm9keSIsImZvbnRTaXplcyIsImZvbnRXZWlnaHRzIiwiYm9sZCIsImxpbmVIZWlnaHRzIiwibGV0dGVyU3BhY2luZ3MiLCJjYXBzIiwic3BhY2UiLCJsYXlvdXQiLCJ0b29sYmFyIiwibWFpbiIsInNlY3Rpb24iLCJrZXlGZWF0dXJlIiwiZmVhdHVyZSIsInBhcnRuZXIiLCJ0ZXN0aW1vbmlhbCIsInNlY3VyZVBheW1lbnQiLCJmYXEiLCJzZWN0aW9uSGVhZGVyIiwiZm9udEZhbWlseSIsImhlcm9QcmltYXJ5IiwiaGVyb1NlY29uZGFyeSIsImxlYWQiLCJsaW5rcyIsImRlZmF1bHQiLCJsb2dvIiwiaW1hZ2VzIiwiYnV0dG9ucyIsImRlZmF1bHRCdG4iLCJ3aGl0ZUJ1dHRvbiIsInRleHRCdXR0b24iLCJjYXJkcyIsIm9mZmVyIiwibWluSGVpZ2h0IiwiZmVhdHVyZUNhcmQiLCJmb3JtcyIsImlucHV0IiwidCIsImJhZGdlcyIsInJvb3QiLCJmb250U21vb3RoaW5nIiwiaHIiLCJzck9ubHkiLCJjbGlwIiwiY2xpcFBhdGgiLCJ3aGl0ZVNwYWNlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUN4RkEsd0U7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3Qzs7Ozs7Ozs7Ozs7QUNOQSxjQUFjLG1CQUFPLENBQUMsMEVBQW1COztB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NkJBQTZCLGNBQWM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGNBQWM7QUFDM0M7QUFDQSxvRUFBb0UsVUFBVSxFQUFFO0FBQ2hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHVCQUF1QixtQkFBbUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixrQkFBa0I7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixjQUFj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QUcsRUFBRSxPQUZtQjtBQUd4QnNHLGFBQUssRUFBRSxPQUhpQjtBQUl4QjFHLGFBQUssRUFBRSxPQUppQjtBQUt4QkMsY0FBTSxFQUFFO0FBTGdCLE9BTHRCO0FBWUosaUNBQTJCO0FBQ3pCNEgsY0FBTSxFQUFFLENBRGlCO0FBRXpCN0gsYUFBSyxFQUFFO0FBRmtCO0FBWnZCLEtBRkE7QUFtQk47QUFDQTRVLE1BQUUsRUFBRTtBQUNGblYsWUFBTSxFQUFFLENBRE47QUFFRjRCLGtCQUFZLEVBQUUsV0FGWjtBQUdGeUUsaUJBQVcsRUFBRTtBQUhYLEtBcEJFO0FBeUJOO0FBQ0E2SyxNQUFFLEVBQUU7QUFDRkMsZUFBUyxFQUFFO0FBRFQsS0ExQkU7QUE2Qk5pRSxVQUFNLEVBQUU7QUFDTnBWLFlBQU0sRUFBRSxjQURGO0FBRU5xVixVQUFJLEVBQUUscUNBRkE7QUFHTkMsY0FBUSxFQUFFLHVCQUhKO0FBSU45VSxZQUFNLEVBQUUsZ0JBSkY7QUFLTjRILFlBQU0sRUFBRSxpQkFMRjtBQU1OMUcsY0FBUSxFQUFFLG1CQU5KO0FBT05DLGFBQU8sRUFBRSxjQVBIO0FBUU52QixjQUFRLEVBQUUscUJBUko7QUFTTkcsV0FBSyxFQUFFLGdCQVREO0FBVU5nVixnQkFBVSxFQUFFO0FBVk47QUE3QkY7QUFuVkssQ0FBZixFOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLGlEOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLHFDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcGFnZXMvaW5kZXguanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgYWRkQmFzZVBhdGgsXG4gIGlzTG9jYWxVUkwsXG4gIE5leHRSb3V0ZXIsXG4gIFByZWZldGNoT3B0aW9ucyxcbiAgcmVzb2x2ZUhyZWYsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIFJlcXVpcmVkS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gbmV2ZXIgOiBLXG59W2tleW9mIFRdXG50eXBlIE9wdGlvbmFsS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gSyA6IG5ldmVyXG59W2tleW9mIFRdXG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxufVxudHlwZSBMaW5rUHJvcHNSZXF1aXJlZCA9IFJlcXVpcmVkS2V5czxMaW5rUHJvcHM+XG50eXBlIExpbmtQcm9wc09wdGlvbmFsID0gT3B0aW9uYWxLZXlzPExpbmtQcm9wcz5cblxubGV0IGNhY2hlZE9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuY29uc3QgbGlzdGVuZXJzID0gbmV3IE1hcDxFbGVtZW50LCAoKSA9PiB2b2lkPigpXG5jb25zdCBJbnRlcnNlY3Rpb25PYnNlcnZlciA9XG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyIDogbnVsbFxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIGdldE9ic2VydmVyKCk6IEludGVyc2VjdGlvbk9ic2VydmVyIHwgdW5kZWZpbmVkIHtcbiAgLy8gUmV0dXJuIHNoYXJlZCBpbnN0YW5jZSBvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBhbHJlYWR5IGNyZWF0ZWRcbiAgaWYgKGNhY2hlZE9ic2VydmVyKSB7XG4gICAgcmV0dXJuIGNhY2hlZE9ic2VydmVyXG4gIH1cblxuICAvLyBPbmx5IGNyZWF0ZSBzaGFyZWQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgc3VwcG9ydGVkIGluIGJyb3dzZXJcbiAgaWYgKCFJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHJldHVybiAoY2FjaGVkT2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG4gICAgKGVudHJpZXMpID0+IHtcbiAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgaWYgKCFsaXN0ZW5lcnMuaGFzKGVudHJ5LnRhcmdldCkpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNiID0gbGlzdGVuZXJzLmdldChlbnRyeS50YXJnZXQpIVxuICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwKSB7XG4gICAgICAgICAgY2FjaGVkT2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBsaXN0ZW5lcnMuZGVsZXRlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBjYigpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICB7IHJvb3RNYXJnaW46ICcyMDBweCcgfVxuICApKVxufVxuXG5jb25zdCBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMgPSAoZWw6IEVsZW1lbnQsIGNiOiAoKSA9PiB2b2lkKSA9PiB7XG4gIGNvbnN0IG9ic2VydmVyID0gZ2V0T2JzZXJ2ZXIoKVxuICBpZiAoIW9ic2VydmVyKSB7XG4gICAgcmV0dXJuICgpID0+IHt9XG4gIH1cblxuICBvYnNlcnZlci5vYnNlcnZlKGVsKVxuICBsaXN0ZW5lcnMuc2V0KGVsLCBjYilcbiAgcmV0dXJuICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgfVxuICAgIGxpc3RlbmVycy5kZWxldGUoZWwpXG4gIH1cbn1cblxuZnVuY3Rpb24gcHJlZmV0Y2goXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBvcHRpb25zPzogUHJlZmV0Y2hPcHRpb25zXG4pOiB2b2lkIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm5cbiAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfSlcbiAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdID0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpIHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgcmV0dXJuIChcbiAgICAodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICBldmVudC5tZXRhS2V5IHx8XG4gICAgZXZlbnQuY3RybEtleSB8fFxuICAgIGV2ZW50LnNoaWZ0S2V5IHx8XG4gICAgZXZlbnQuYWx0S2V5IHx8IC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG4gICAgKGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKVxuICApXG59XG5cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKFxuICBlOiBSZWFjdC5Nb3VzZUV2ZW50LFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgcmVwbGFjZT86IGJvb2xlYW4sXG4gIHNoYWxsb3c/OiBib29sZWFuLFxuICBzY3JvbGw/OiBib29sZWFuXG4pOiB2b2lkIHtcbiAgY29uc3QgeyBub2RlTmFtZSB9ID0gZS5jdXJyZW50VGFyZ2V0XG5cbiAgaWYgKG5vZGVOYW1lID09PSAnQScgJiYgKGlzTW9kaWZpZWRFdmVudChlKSB8fCAhaXNMb2NhbFVSTChocmVmKSkpIHtcbiAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbiAgICByZXR1cm5cbiAgfVxuXG4gIGUucHJldmVudERlZmF1bHQoKVxuXG4gIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICBzY3JvbGwgPSBhcy5pbmRleE9mKCcjJykgPCAwXG4gIH1cblxuICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7IHNoYWxsb3cgfSkudGhlbihcbiAgICAoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgICAgaWYgKCFzdWNjZXNzKSByZXR1cm5cbiAgICAgIGlmIChzY3JvbGwpIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKVxuICAgICAgfVxuICAgIH1cbiAgKVxufVxuXG5mdW5jdGlvbiBMaW5rKHByb3BzOiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjxMaW5rUHJvcHM+KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3M6IHtcbiAgICAgIGtleTogc3RyaW5nXG4gICAgICBleHBlY3RlZDogc3RyaW5nXG4gICAgICBhY3R1YWw6IHN0cmluZ1xuICAgIH0pIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAgICAgIGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gICtcbiAgICAgICAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgID8gXCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiXG4gICAgICAgICAgICA6ICcnKVxuICAgICAgKVxuICAgIH1cblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzUmVxdWlyZWQsIHRydWU+ID0ge1xuICAgICAgaHJlZjogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wczogTGlua1Byb3BzUmVxdWlyZWRbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgcmVxdWlyZWRQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNSZXF1aXJlZFtdXG4gICAgcmVxdWlyZWRQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc1JlcXVpcmVkKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnaHJlZicpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gPT0gbnVsbCB8fFxuICAgICAgICAgICh0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHByb3BzW2tleV0gPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzT3B0aW9uYWwsIHRydWU+ID0ge1xuICAgICAgYXM6IHRydWUsXG4gICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgIHBhc3NIcmVmOiB0cnVlLFxuICAgICAgcHJlZmV0Y2g6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHM6IExpbmtQcm9wc09wdGlvbmFsW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIG9wdGlvbmFsUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzT3B0aW9uYWxbXVxuICAgIG9wdGlvbmFsUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNPcHRpb25hbCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSAmJlxuICAgICAgICAgIHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJlxuICAgICAgICAgIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0J1xuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGtleSA9PT0gJ3JlcGxhY2UnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Njcm9sbCcgfHxcbiAgICAgICAga2V5ID09PSAnc2hhbGxvdycgfHxcbiAgICAgICAga2V5ID09PSAncGFzc0hyZWYnIHx8XG4gICAgICAgIGtleSA9PT0gJ3ByZWZldGNoJ1xuICAgICAgKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICE9IG51bGwgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdib29sZWFuJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2Bib29sZWFuYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBoYXNXYXJuZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpXG4gICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuXG4gIGNvbnN0IFtjaGlsZEVsbSwgc2V0Q2hpbGRFbG1dID0gUmVhY3QudXNlU3RhdGU8RWxlbWVudD4oKVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhdGhuYW1lID0gKHJvdXRlciAmJiByb3V0ZXIucGF0aG5hbWUpIHx8ICcvJ1xuXG4gIGNvbnN0IHsgaHJlZiwgYXMgfSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5ocmVmKVxuICAgIHJldHVybiB7XG4gICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICBhczogcHJvcHMuYXMgPyByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuYXMpIDogcmVzb2x2ZWRIcmVmLFxuICAgIH1cbiAgfSwgW3BhdGhuYW1lLCBwcm9wcy5ocmVmLCBwcm9wcy5hc10pXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoXG4gICAgICBwICYmXG4gICAgICBJbnRlcnNlY3Rpb25PYnNlcnZlciAmJlxuICAgICAgY2hpbGRFbG0gJiZcbiAgICAgIGNoaWxkRWxtLnRhZ05hbWUgJiZcbiAgICAgIGlzTG9jYWxVUkwoaHJlZilcbiAgICApIHtcbiAgICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgICBjb25zdCBpc1ByZWZldGNoZWQgPSBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc11cbiAgICAgIGlmICghaXNQcmVmZXRjaGVkKSB7XG4gICAgICAgIHJldHVybiBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMoY2hpbGRFbG0sICgpID0+IHtcbiAgICAgICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW3AsIGNoaWxkRWxtLCBocmVmLCBhcywgcm91dGVyXSlcblxuICBsZXQgeyBjaGlsZHJlbiwgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsIH0gPSBwcm9wc1xuICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gIH1cblxuICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gIGNvbnN0IGNoaWxkUHJvcHM6IHtcbiAgICBvbk1vdXNlRW50ZXI/OiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIG9uQ2xpY2s6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgaHJlZj86IHN0cmluZ1xuICAgIHJlZj86IGFueVxuICB9ID0ge1xuICAgIHJlZjogKGVsOiBhbnkpID0+IHtcbiAgICAgIGlmIChlbCkgc2V0Q2hpbGRFbG0oZWwpXG5cbiAgICAgIGlmIChjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZikge1xuICAgICAgICBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGQucmVmKGVsKVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGNoaWxkLnJlZi5jdXJyZW50ID0gZWxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICB9XG4gICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwpXG4gICAgICB9XG4gICAgfSxcbiAgfVxuXG4gIGlmIChwKSB7XG4gICAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgICAgfVxuICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywgeyBwcmlvcml0eTogdHJ1ZSB9KVxuICAgIH1cbiAgfVxuXG4gIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IChjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKSkge1xuICAgIGNoaWxkUHJvcHMuaHJlZiA9IGFkZEJhc2VQYXRoKGFzKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcylcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aFxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9cbmV4cG9ydCBjb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSFxuICA/IChwYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKVxuICAgICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nXG4gICAgICB9XG4gICAgfVxuICA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgZ2V0KCkge1xuICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSBhcyBzdHJpbmdcbiAgICB9LFxuICB9KVxufSlcblxuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKHt9LCBfcm91dGVyW3Byb3BlcnR5XSkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KSB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIFRva2VuaXplIGlucHV0IHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gbGV4ZXIoc3RyKSB7XG4gICAgdmFyIHRva2VucyA9IFtdO1xuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAoaSA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSBzdHJbaV07XG4gICAgICAgIGlmIChjaGFyID09PSBcIipcIiB8fCBjaGFyID09PSBcIitcIiB8fCBjaGFyID09PSBcIj9cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk1PRElGSUVSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFU0NBUEVEX0NIQVJcIiwgaW5kZXg6IGkrKywgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwie1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiT1BFTlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwifVwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0xPU0VcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIjpcIikge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhciBjb2RlID0gc3RyLmNoYXJDb2RlQXQoaik7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIC8vIGAwLTlgXG4gICAgICAgICAgICAgICAgKGNvZGUgPj0gNDggJiYgY29kZSA8PSA1NykgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYEEtWmBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gNjUgJiYgY29kZSA8PSA5MCkgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYGEtemBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gOTcgJiYgY29kZSA8PSAxMjIpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBfYFxuICAgICAgICAgICAgICAgICAgICBjb2RlID09PSA5NSkge1xuICAgICAgICAgICAgICAgICAgICBuYW1lICs9IHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIW5hbWUpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGFyYW1ldGVyIG5hbWUgYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJOQU1FXCIsIGluZGV4OiBpLCB2YWx1ZTogbmFtZSB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKFwiKSB7XG4gICAgICAgICAgICB2YXIgY291bnQgPSAxO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm4gPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlBhdHRlcm4gY2Fubm90IHN0YXJ0IHdpdGggXFxcIj9cXFwiIGF0IFwiICsgaik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdICsgc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIilcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudC0tO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGorKztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHN0cltqXSA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0cltqICsgMV0gIT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2FwdHVyaW5nIGdyb3VwcyBhcmUgbm90IGFsbG93ZWQgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvdW50KVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmJhbGFuY2VkIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIGlmICghcGF0dGVybilcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiUEFUVEVSTlwiLCBpbmRleDogaSwgdmFsdWU6IHBhdHRlcm4gfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDSEFSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgfVxuICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFTkRcIiwgaW5kZXg6IGksIHZhbHVlOiBcIlwiIH0pO1xuICAgIHJldHVybiB0b2tlbnM7XG59XG4vKipcbiAqIFBhcnNlIGEgc3RyaW5nIGZvciB0aGUgcmF3IHRva2Vucy5cbiAqL1xuZnVuY3Rpb24gcGFyc2Uoc3RyLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgdG9rZW5zID0gbGV4ZXIoc3RyKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLnByZWZpeGVzLCBwcmVmaXhlcyA9IF9hID09PSB2b2lkIDAgPyBcIi4vXCIgOiBfYTtcbiAgICB2YXIgZGVmYXVsdFBhdHRlcm4gPSBcIlteXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl0rP1wiO1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIga2V5ID0gMDtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHBhdGggPSBcIlwiO1xuICAgIHZhciB0cnlDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgaWYgKGkgPCB0b2tlbnMubGVuZ3RoICYmIHRva2Vuc1tpXS50eXBlID09PSB0eXBlKVxuICAgICAgICAgICAgcmV0dXJuIHRva2Vuc1tpKytdLnZhbHVlO1xuICAgIH07XG4gICAgdmFyIG11c3RDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdHJ5Q29uc3VtZSh0eXBlKTtcbiAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIHZhciBfYSA9IHRva2Vuc1tpXSwgbmV4dFR5cGUgPSBfYS50eXBlLCBpbmRleCA9IF9hLmluZGV4O1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5leHBlY3RlZCBcIiArIG5leHRUeXBlICsgXCIgYXQgXCIgKyBpbmRleCArIFwiLCBleHBlY3RlZCBcIiArIHR5cGUpO1xuICAgIH07XG4gICAgdmFyIGNvbnN1bWVUZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gXCJcIjtcbiAgICAgICAgdmFyIHZhbHVlO1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgd2hpbGUgKCh2YWx1ZSA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIikpKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIHdoaWxlIChpIDwgdG9rZW5zLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpO1xuICAgICAgICB2YXIgbmFtZSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpO1xuICAgICAgICB2YXIgcGF0dGVybiA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpO1xuICAgICAgICBpZiAobmFtZSB8fCBwYXR0ZXJuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY2hhciB8fCBcIlwiO1xuICAgICAgICAgICAgaWYgKHByZWZpeGVzLmluZGV4T2YocHJlZml4KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHByZWZpeDtcbiAgICAgICAgICAgICAgICBwcmVmaXggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lIHx8IGtleSsrLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBwYXR0ZXJuIHx8IGRlZmF1bHRQYXR0ZXJuLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdmFsdWUgPSBjaGFyIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIik7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgcGF0aCArPSB2YWx1ZTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvcGVuID0gdHJ5Q29uc3VtZShcIk9QRU5cIik7XG4gICAgICAgIGlmIChvcGVuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIHZhciBuYW1lXzEgPSB0cnlDb25zdW1lKFwiTkFNRVwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm5fMSA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIG11c3RDb25zdW1lKFwiQ0xPU0VcIik7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZV8xIHx8IChwYXR0ZXJuXzEgPyBrZXkrKyA6IFwiXCIpLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IG5hbWVfMSAmJiAhcGF0dGVybl8xID8gZGVmYXVsdFBhdHRlcm4gOiBwYXR0ZXJuXzEsXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBzdWZmaXgsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIG11c3RDb25zdW1lKFwiRU5EXCIpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0cy5wYXJzZSA9IHBhcnNlO1xuLyoqXG4gKiBDb21waWxlIGEgc3RyaW5nIHRvIGEgdGVtcGxhdGUgZnVuY3Rpb24gZm9yIHRoZSBwYXRoLlxuICovXG5mdW5jdGlvbiBjb21waWxlKHN0ciwgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb0Z1bmN0aW9uKHBhcnNlKHN0ciwgb3B0aW9ucyksIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5jb21waWxlID0gY29tcGlsZTtcbi8qKlxuICogRXhwb3NlIGEgbWV0aG9kIGZvciB0cmFuc2Zvcm1pbmcgdG9rZW5zIGludG8gdGhlIHBhdGggZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvRnVuY3Rpb24odG9rZW5zLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgcmVGbGFncyA9IGZsYWdzKG9wdGlvbnMpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYSwgX2IgPSBvcHRpb25zLnZhbGlkYXRlLCB2YWxpZGF0ZSA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2I7XG4gICAgLy8gQ29tcGlsZSBhbGwgdGhlIHRva2VucyBpbnRvIHJlZ2V4cHMuXG4gICAgdmFyIG1hdGNoZXMgPSB0b2tlbnMubWFwKGZ1bmN0aW9uICh0b2tlbikge1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChcIl4oPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikkXCIsIHJlRmxhZ3MpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc1tpXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHZhbHVlID0gZGF0YSA/IGRhdGFbdG9rZW4ubmFtZV0gOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB2YXIgb3B0aW9uYWwgPSB0b2tlbi5tb2RpZmllciA9PT0gXCI/XCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiO1xuICAgICAgICAgICAgdmFyIHJlcGVhdCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIrXCI7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcGVhdCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgYmUgZW1wdHlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdmFsdWUubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUodmFsdWVbal0sIHRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBhbGwgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUoU3RyaW5nKHZhbHVlKSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgdmFyIHR5cGVPZk1lc3NhZ2UgPSByZXBlYXQgPyBcImFuIGFycmF5XCIgOiBcImEgc3RyaW5nXCI7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBiZSBcIiArIHR5cGVPZk1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH07XG59XG5leHBvcnRzLnRva2Vuc1RvRnVuY3Rpb24gPSB0b2tlbnNUb0Z1bmN0aW9uO1xuLyoqXG4gKiBDcmVhdGUgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgc3BlYy5cbiAqL1xuZnVuY3Rpb24gbWF0Y2goc3RyLCBvcHRpb25zKSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICB2YXIgcmUgPSBwYXRoVG9SZWdleHAoc3RyLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLm1hdGNoID0gbWF0Y2g7XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIG91dHB1dC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5kZWNvZGUsIGRlY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hO1xuICAgIHJldHVybiBmdW5jdGlvbiAocGF0aG5hbWUpIHtcbiAgICAgICAgdmFyIG0gPSByZS5leGVjKHBhdGhuYW1lKTtcbiAgICAgICAgaWYgKCFtKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgcGF0aCA9IG1bMF0sIGluZGV4ID0gbS5pbmRleDtcbiAgICAgICAgdmFyIHBhcmFtcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgaWYgKG1baV0gPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJjb250aW51ZVwiO1xuICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbaSAtIDFdO1xuICAgICAgICAgICAgaWYgKGtleS5tb2RpZmllciA9PT0gXCIqXCIgfHwga2V5Lm1vZGlmaWVyID09PSBcIitcIikge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBtW2ldLnNwbGl0KGtleS5wcmVmaXggKyBrZXkuc3VmZml4KS5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWNvZGUodmFsdWUsIGtleSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gZGVjb2RlKG1baV0sIGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgX2xvb3BfMShpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBwYXRoOiBwYXRoLCBpbmRleDogaW5kZXgsIHBhcmFtczogcGFyYW1zIH07XG4gICAgfTtcbn1cbmV4cG9ydHMucmVnZXhwVG9GdW5jdGlvbiA9IHJlZ2V4cFRvRnVuY3Rpb247XG4vKipcbiAqIEVzY2FwZSBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGVzY2FwZVN0cmluZyhzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbLisqPz1eIToke30oKVtcXF18L1xcXFxdKS9nLCBcIlxcXFwkMVwiKTtcbn1cbi8qKlxuICogR2V0IHRoZSBmbGFncyBmb3IgYSByZWdleHAgZnJvbSB0aGUgb3B0aW9ucy5cbiAqL1xuZnVuY3Rpb24gZmxhZ3Mob3B0aW9ucykge1xuICAgIHJldHVybiBvcHRpb25zICYmIG9wdGlvbnMuc2Vuc2l0aXZlID8gXCJcIiA6IFwiaVwiO1xufVxuLyoqXG4gKiBQdWxsIG91dCBrZXlzIGZyb20gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpIHtcbiAgICBpZiAoIWtleXMpXG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIC8vIFVzZSBhIG5lZ2F0aXZlIGxvb2thaGVhZCB0byBtYXRjaCBvbmx5IGNhcHR1cmluZyBncm91cHMuXG4gICAgdmFyIGdyb3VwcyA9IHBhdGguc291cmNlLm1hdGNoKC9cXCgoPyFcXD8pL2cpO1xuICAgIGlmIChncm91cHMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBncm91cHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGtleXMucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogaSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuLyoqXG4gKiBUcmFuc2Zvcm0gYW4gYXJyYXkgaW50byBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlUb1JlZ2V4cChwYXRocywga2V5cywgb3B0aW9ucykge1xuICAgIHZhciBwYXJ0cyA9IHBhdGhzLm1hcChmdW5jdGlvbiAocGF0aCkgeyByZXR1cm4gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpLnNvdXJjZTsgfSk7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoXCIoPzpcIiArIHBhcnRzLmpvaW4oXCJ8XCIpICsgXCIpXCIsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbi8qKlxuICogQ3JlYXRlIGEgcGF0aCByZWdleHAgZnJvbSBzdHJpbmcgaW5wdXQuXG4gKi9cbmZ1bmN0aW9uIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9SZWdleHAocGFyc2UocGF0aCwgb3B0aW9ucyksIGtleXMsIG9wdGlvbnMpO1xufVxuLyoqXG4gKiBFeHBvc2UgYSBmdW5jdGlvbiBmb3IgdGFraW5nIHRva2VucyBhbmQgcmV0dXJuaW5nIGEgUmVnRXhwLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb1JlZ2V4cCh0b2tlbnMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuc3RyaWN0LCBzdHJpY3QgPSBfYSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfYSwgX2IgPSBvcHRpb25zLnN0YXJ0LCBzdGFydCA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2IsIF9jID0gb3B0aW9ucy5lbmQsIGVuZCA9IF9jID09PSB2b2lkIDAgPyB0cnVlIDogX2MsIF9kID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9kID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9kO1xuICAgIHZhciBlbmRzV2l0aCA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZW5kc1dpdGggfHwgXCJcIikgKyBcIl18JFwiO1xuICAgIHZhciBkZWxpbWl0ZXIgPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXVwiO1xuICAgIHZhciByb3V0ZSA9IHN0YXJ0ID8gXCJeXCIgOiBcIlwiO1xuICAgIC8vIEl0ZXJhdGUgb3ZlciB0aGUgdG9rZW5zIGFuZCBjcmVhdGUgb3VyIHJlZ2V4cCBzdHJpbmcuXG4gICAgZm9yICh2YXIgX2kgPSAwLCB0b2tlbnNfMSA9IHRva2VuczsgX2kgPCB0b2tlbnNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zXzFbX2ldO1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5wcmVmaXgpKTtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnN1ZmZpeCkpO1xuICAgICAgICAgICAgaWYgKHRva2VuLnBhdHRlcm4pIHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5cylcbiAgICAgICAgICAgICAgICAgICAga2V5cy5wdXNoKHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAocHJlZml4IHx8IHN1ZmZpeCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1vZCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiA/IFwiP1wiIDogXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIigoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikoPzpcIiArIHN1ZmZpeCArIHByZWZpeCArIFwiKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKSopXCIgKyBzdWZmaXggKyBcIilcIiArIG1vZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGVuZCkge1xuICAgICAgICBpZiAoIXN0cmljdClcbiAgICAgICAgICAgIHJvdXRlICs9IGRlbGltaXRlciArIFwiP1wiO1xuICAgICAgICByb3V0ZSArPSAhb3B0aW9ucy5lbmRzV2l0aCA/IFwiJFwiIDogXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgZW5kVG9rZW4gPSB0b2tlbnNbdG9rZW5zLmxlbmd0aCAtIDFdO1xuICAgICAgICB2YXIgaXNFbmREZWxpbWl0ZWQgPSB0eXBlb2YgZW5kVG9rZW4gPT09IFwic3RyaW5nXCJcbiAgICAgICAgICAgID8gZGVsaW1pdGVyLmluZGV4T2YoZW5kVG9rZW5bZW5kVG9rZW4ubGVuZ3RoIC0gMV0pID4gLTFcbiAgICAgICAgICAgIDogLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICAgICAgZW5kVG9rZW4gPT09IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKCFzdHJpY3QpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBkZWxpbWl0ZXIgKyBcIig/PVwiICsgZW5kc1dpdGggKyBcIikpP1wiO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNFbmREZWxpbWl0ZWQpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD89XCIgKyBkZWxpbWl0ZXIgKyBcInxcIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAocm91dGUsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbmV4cG9ydHMudG9rZW5zVG9SZWdleHAgPSB0b2tlbnNUb1JlZ2V4cDtcbi8qKlxuICogTm9ybWFsaXplIHRoZSBnaXZlbiBwYXRoIHN0cmluZywgcmV0dXJuaW5nIGEgcmVndWxhciBleHByZXNzaW9uLlxuICpcbiAqIEFuIGVtcHR5IGFycmF5IGNhbiBiZSBwYXNzZWQgaW4gZm9yIHRoZSBrZXlzLCB3aGljaCB3aWxsIGhvbGQgdGhlXG4gKiBwbGFjZWhvbGRlciBrZXkgZGVzY3JpcHRpb25zLiBGb3IgZXhhbXBsZSwgdXNpbmcgYC91c2VyLzppZGAsIGBrZXlzYCB3aWxsXG4gKiBjb250YWluIGBbeyBuYW1lOiAnaWQnLCBkZWxpbWl0ZXI6ICcvJywgb3B0aW9uYWw6IGZhbHNlLCByZXBlYXQ6IGZhbHNlIH1dYC5cbiAqL1xuZnVuY3Rpb24gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAocGF0aCBpbnN0YW5jZW9mIFJlZ0V4cClcbiAgICAgICAgcmV0dXJuIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHBhdGgpKVxuICAgICAgICByZXR1cm4gYXJyYXlUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLnBhdGhUb1JlZ2V4cCA9IHBhdGhUb1JlZ2V4cDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLyogZ2xvYmFsIF9fTkVYVF9EQVRBX18gKi9cbi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCxcbiAgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5pbXBvcnQgeyBHb29kUGFnZUNhY2hlLCBTdHlsZVNoZWV0VHVwbGUgfSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcGFnZS1sb2FkZXInXG5pbXBvcnQgeyBkZW5vcm1hbGl6ZVBhZ2VQYXRoIH0gZnJvbSAnLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3V0aWxzL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHJlc29sdmVSZXdyaXRlcyBmcm9tICcuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcblxuaW50ZXJmYWNlIFRyYW5zaXRpb25PcHRpb25zIHtcbiAgc2hhbGxvdz86IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIE5leHRIaXN0b3J5U3RhdGUge1xuICB1cmw6IHN0cmluZ1xuICBhczogc3RyaW5nXG4gIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG59XG5cbnR5cGUgSGlzdG9yeVN0YXRlID0gbnVsbCB8IHsgX19OOiBmYWxzZSB9IHwgKHsgX19OOiB0cnVlIH0gJiBOZXh0SGlzdG9yeVN0YXRlKVxuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgIGNhbmNlbGxlZDogdHJ1ZSxcbiAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gcGF0aCA9PT0gYmFzZVBhdGggfHwgcGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoICsgJy8nKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgLy8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbiAgcmV0dXJuIGJhc2VQYXRoICYmIHBhdGguc3RhcnRzV2l0aCgnLycpXG4gICAgPyBwYXRoID09PSAnLydcbiAgICAgID8gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goYmFzZVBhdGgpXG4gICAgICA6IGJhc2VQYXRoICsgcGF0aFxuICAgIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKSB8fCAnLydcbn1cblxuLyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSkgcmV0dXJuIHRydWVcbiAgdHJ5IHtcbiAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbilcbiAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSlcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbi8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSHJlZihjdXJyZW50UGF0aDogc3RyaW5nLCBocmVmOiBVcmwpOiBzdHJpbmcge1xuICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICBjb25zdCBiYXNlID0gbmV3IFVSTChjdXJyZW50UGF0aCwgJ2h0dHA6Ly9uJylcbiAgY29uc3QgdXJsQXNTdHJpbmcgPVxuICAgIHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiBmb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKVxuICB0cnkge1xuICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gICAgcmV0dXJuIGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW5cbiAgICAgID8gZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKVxuICAgICAgOiBmaW5hbFVybC5ocmVmXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gdXJsQXNTdHJpbmdcbiAgfVxufVxuXG5jb25zdCBQQUdFX0xPQURfRVJST1IgPSBTeW1ib2woJ1BBR0VfTE9BRF9FUlJPUicpXG5leHBvcnQgZnVuY3Rpb24gbWFya0xvYWRpbmdFcnJvcihlcnI6IEVycm9yKTogRXJyb3Ige1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgUEFHRV9MT0FEX0VSUk9SLCB7fSlcbn1cblxuZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlcjogTmV4dFJvdXRlciwgdXJsOiBVcmwsIGFzOiBVcmwpIHtcbiAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gIHJldHVybiB7XG4gICAgdXJsOiBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIHVybCkpLFxuICAgIGFzOiBhcyA/IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgYXMpKSA6IGFzLFxuICB9XG59XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBQcml2YXRlUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogUmVjb3JkPHN0cmluZywgYW55PlxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wcyA9IFBpY2s8UHJpdmF0ZVJvdXRlSW5mbywgJ0NvbXBvbmVudCcgfCAnZXJyJz4gJiB7XG4gIHJvdXRlcjogUm91dGVyXG59ICYgUmVjb3JkPHN0cmluZywgYW55PlxuZXhwb3J0IHR5cGUgQXBwQ29tcG9uZW50ID0gQ29tcG9uZW50VHlwZTxBcHBQcm9wcz5cblxudHlwZSBTdWJzY3JpcHRpb24gPSAoZGF0YTogUHJpdmF0ZVJvdXRlSW5mbywgQXBwOiBBcHBDb21wb25lbnQpID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBOZXh0SGlzdG9yeVN0YXRlKSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9XG4gIHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiZcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeVxuXG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybDogc3RyaW5nLCBhdHRlbXB0czogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgIC8vXG4gICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgIC8vID4gb3B0aW9uLlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAvL1xuICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cyAtIDEpXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcy5qc29uKClcbiAgfSlcbn1cblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZjogc3RyaW5nLCBpc1NlcnZlclJlbmRlcjogYm9vbGVhbikge1xuICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgIC8vIGxvb3AuXG4gICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgbWFya0xvYWRpbmdFcnJvcihlcnIpXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBQcml2YXRlUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgX2luRmxpZ2h0Um91dGU/OiBzdHJpbmdcbiAgX3NoYWxsb3c/OiBib29sZWFuXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXIgPSBtaXR0KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHtcbiAgICAgIGluaXRpYWxQcm9wcyxcbiAgICAgIHBhZ2VMb2FkZXIsXG4gICAgICBBcHAsXG4gICAgICB3cmFwQXBwLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgaW5pdGlhbFN0eWxlU2hlZXRzLFxuICAgICAgZXJyLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgaXNGYWxsYmFjayxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBpbml0aWFsU3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gICAgICBBcHA6IEFwcENvbXBvbmVudFxuICAgICAgd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgfVxuICApIHtcbiAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICB0aGlzLnJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzOiBpbml0aWFsU3R5bGVTaGVldHMsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0ge1xuICAgICAgQ29tcG9uZW50OiBBcHAgYXMgQ29tcG9uZW50VHlwZSxcbiAgICAgIHN0eWxlU2hlZXRzOiBbXG4gICAgICAgIC8qIC9fYXBwIGRvZXMgbm90IG5lZWQgaXRzIHN0eWxlc2hlZXRzIG1hbmFnZWQgKi9cbiAgICAgIF0sXG4gICAgfVxuXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlclxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICB0aGlzLmFzUGF0aCA9XG4gICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICBpc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0ID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgICBnZXRVUkwoKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcblxuICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJ1xuXG4gICAgICAgICAgbGV0IHNjcm9sbERlYm91bmNlVGltZW91dDogdW5kZWZpbmVkIHwgTm9kZUpTLlRpbWVvdXRcblxuICAgICAgICAgIGNvbnN0IGRlYm91bmNlZFNjcm9sbFNhdmUgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KSBjbGVhclRpbWVvdXQoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KVxuXG4gICAgICAgICAgICBzY3JvbGxEZWJvdW5jZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgeyB1cmwsIGFzOiBjdXJBcywgb3B0aW9ucyB9ID0gaGlzdG9yeS5zdGF0ZVxuICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBjdXJBcyxcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgICBfTl9YOiB3aW5kb3cuc2Nyb2xsWCxcbiAgICAgICAgICAgICAgICAgIF9OX1k6IHdpbmRvdy5zY3JvbGxZLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0sIDEwKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBkZWJvdW5jZWRTY3JvbGxTYXZlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlIGFzIEhpc3RvcnlTdGF0ZVxuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMgfSA9IHN0YXRlXG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmICh0aGlzLmlzU3NyICYmIGFzID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2UoXG4gICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgIHVybCxcbiAgICAgIGFzLFxuICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcbiAgICAgIH0pXG4gICAgKVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBhc3luYyBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZVxuICAgIH1cbiAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgaWYgKFNUKSB7XG4gICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUpXG4gICAgfVxuXG4gICAgY29uc3QgY2xlYW5lZEFzID0gaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXNcbiAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXNcblxuICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSkge1xuICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXNcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMpXG4gICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpXG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0pXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4gICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4gICAgLy8gd2hlbiByZXdyaXR0ZW4gdG9cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG4gICAgY29uc3QgeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLnByb21pc2VkQnVpbGRNYW5pZmVzdFxuXG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUsIHNlYXJjaFBhcmFtcyB9ID0gcGFyc2VkXG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKVxuXG4gICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgIHBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgID8gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUpKVxuICAgICAgOiBwYXRobmFtZVxuXG4gICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykpIHtcbiAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuXG4gICAgLy8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbiAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG4gICAgbGV0IHJlc29sdmVkQXMgPSBhc1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMpIHtcbiAgICAgIHJlc29sdmVkQXMgPSByZXNvbHZlUmV3cml0ZXMoXG4gICAgICAgIGFzLFxuICAgICAgICBwYWdlcyxcbiAgICAgICAgYmFzZVBhdGgsXG4gICAgICAgIHJld3JpdGVzLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgKHA6IHN0cmluZykgPT4gdGhpcy5fcmVzb2x2ZUhyZWYoeyBwYXRobmFtZTogcCB9LCBwYWdlcykucGF0aG5hbWUhXG4gICAgICApXG4gICAgfVxuICAgIHJlc29sdmVkQXMgPSBkZWxCYXNlUGF0aChyZXNvbHZlZEFzKVxuXG4gICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgY29uc3QgeyBwYXRobmFtZTogYXNQYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybChyZXNvbHZlZEFzKVxuICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICBjb25zdCByb3V0ZU1hdGNoID0gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpXG4gICAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgKHBhcmFtKSA9PiAhcXVlcnlbcGFyYW1dXG4gICAgICAgIClcblxuICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgIGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGAgK1xuICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbmNvbXBhdGlibGUtaHJlZi1hc2BcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICB9XG4gICAgfVxuXG4gICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMpXG5cbiAgICB0cnkge1xuICAgICAgY29uc3Qgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICBzaGFsbG93XG4gICAgICApXG4gICAgICBsZXQgeyBlcnJvciB9ID0gcm91dGVJbmZvXG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgIH1cblxuICAgICAgYXdhaXQgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lISwgcXVlcnksIGNsZWFuZWRBcywgcm91dGVJbmZvKS5jYXRjaChcbiAgICAgICAgKGUpID0+IHtcbiAgICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZVxuICAgICAgICAgIGVsc2UgdGhyb3cgZVxuICAgICAgICB9XG4gICAgICApXG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzKVxuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gJiYgJ19OX1gnIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oKG9wdGlvbnMgYXMgYW55KS5fTl9YLCAob3B0aW9ucyBhcyBhbnkpLl9OX1kpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICB9IGFzIEhpc3RvcnlTdGF0ZSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cblxuICAgIGlmIChQQUdFX0xPQURfRVJST1IgaW4gZXJyIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMpXG5cbiAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgcGFnZTogQ29tcG9uZW50LCBzdHlsZVNoZWV0cyB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChcbiAgICAgICAgJy9fZXJyb3InXG4gICAgICApXG4gICAgICBjb25zdCByb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHMsXG4gICAgICAgIGVycixcbiAgICAgICAgZXJyb3I6IGVycixcbiAgICAgIH1cblxuICAgICAgdHJ5IHtcbiAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgZXJyLFxuICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICB9IGFzIGFueSlcbiAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpXG4gICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgdHJ1ZSlcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBzaGFsbG93OiBib29sZWFuID0gZmFsc2VcbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cblxuICAgICAgaWYgKHNoYWxsb3cgJiYgY2FjaGVkUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBjYWNoZWRSb3V0ZUluZm9cbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgID8gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKSA9PiAoe1xuICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgIHN0eWxlU2hlZXRzOiByZXMuc3R5bGVTaGVldHMsXG4gICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgfSkpXG5cbiAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGRhdGFIcmVmOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICBkZWxCYXNlUGF0aChhcyksXG4gICAgICAgICAgX19OX1NTR1xuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YTxQcml2YXRlUm91dGVJbmZvPigoKSA9PlxuICAgICAgICBfX05fU1NHXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICApXG4gICAgICApXG4gICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzKVxuICAgIH1cbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mb1xuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIF9yZXNvbHZlSHJlZihwYXJzZWRIcmVmOiBVcmxPYmplY3QsIHBhZ2VzOiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZEhyZWZcbiAgICBjb25zdCBjbGVhblBhdGhuYW1lID0gZGVub3JtYWxpemVQYWdlUGF0aChkZWxCYXNlUGF0aChwYXRobmFtZSEpKVxuXG4gICAgaWYgKGNsZWFuUGF0aG5hbWUgPT09ICcvNDA0JyB8fCBjbGVhblBhdGhuYW1lID09PSAnL19lcnJvcicpIHtcbiAgICAgIHJldHVybiBwYXJzZWRIcmVmXG4gICAgfVxuXG4gICAgLy8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuICAgIGlmICghcGFnZXMuaW5jbHVkZXMoY2xlYW5QYXRobmFtZSEpKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICBwYWdlcy5zb21lKChwYWdlKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBpc0R5bmFtaWNSb3V0ZShwYWdlKSAmJlxuICAgICAgICAgIGdldFJvdXRlUmVnZXgocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lISlcbiAgICAgICAgKSB7XG4gICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhZ2UpXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIGFzeW5jIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRcblxuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnBhZ2VMb2FkZXIucHJlZmV0Y2hEYXRhKHVybCwgYXNQYXRoKSxcbiAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICBdKVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8R29vZFBhZ2VDYWNoZT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW2NhY2hlS2V5XSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pXG4gICAgfVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcilcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHAgYXMgQXBwQ29tcG9uZW50KVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSwgYXMpXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50IGFzIEFwcENvbXBvbmVudClcbiAgfVxufVxuIiwiLy8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCAqIGFzIHF1ZXJ5c3RyaW5nIGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHMgPSAvaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS9cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmo6IFVybE9iamVjdCkge1xuICBsZXQgeyBhdXRoLCBob3N0bmFtZSB9ID0gdXJsT2JqXG4gIGxldCBwcm90b2NvbCA9IHVybE9iai5wcm90b2NvbCB8fCAnJ1xuICBsZXQgcGF0aG5hbWUgPSB1cmxPYmoucGF0aG5hbWUgfHwgJydcbiAgbGV0IGhhc2ggPSB1cmxPYmouaGFzaCB8fCAnJ1xuICBsZXQgcXVlcnkgPSB1cmxPYmoucXVlcnkgfHwgJydcbiAgbGV0IGhvc3Q6IHN0cmluZyB8IGZhbHNlID0gZmFsc2VcblxuICBhdXRoID0gYXV0aCA/IGVuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwgJzonKSArICdAJyA6ICcnXG5cbiAgaWYgKHVybE9iai5ob3N0KSB7XG4gICAgaG9zdCA9IGF1dGggKyB1cmxPYmouaG9zdFxuICB9IGVsc2UgaWYgKGhvc3RuYW1lKSB7XG4gICAgaG9zdCA9IGF1dGggKyAofmhvc3RuYW1lLmluZGV4T2YoJzonKSA/IGBbJHtob3N0bmFtZX1dYCA6IGhvc3RuYW1lKVxuICAgIGlmICh1cmxPYmoucG9ydCkge1xuICAgICAgaG9zdCArPSAnOicgKyB1cmxPYmoucG9ydFxuICAgIH1cbiAgfVxuXG4gIGlmIChxdWVyeSAmJiB0eXBlb2YgcXVlcnkgPT09ICdvYmplY3QnKSB7XG4gICAgcXVlcnkgPSBTdHJpbmcocXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhxdWVyeSBhcyBQYXJzZWRVcmxRdWVyeSkpXG4gIH1cblxuICBsZXQgc2VhcmNoID0gdXJsT2JqLnNlYXJjaCB8fCAocXVlcnkgJiYgYD8ke3F1ZXJ5fWApIHx8ICcnXG5cbiAgaWYgKHByb3RvY29sICYmIHByb3RvY29sLnN1YnN0cigtMSkgIT09ICc6JykgcHJvdG9jb2wgKz0gJzonXG5cbiAgaWYgKFxuICAgIHVybE9iai5zbGFzaGVzIHx8XG4gICAgKCghcHJvdG9jb2wgfHwgc2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkgJiYgaG9zdCAhPT0gZmFsc2UpXG4gICkge1xuICAgIGhvc3QgPSAnLy8nICsgKGhvc3QgfHwgJycpXG4gICAgaWYgKHBhdGhuYW1lICYmIHBhdGhuYW1lWzBdICE9PSAnLycpIHBhdGhuYW1lID0gJy8nICsgcGF0aG5hbWVcbiAgfSBlbHNlIGlmICghaG9zdCkge1xuICAgIGhvc3QgPSAnJ1xuICB9XG5cbiAgaWYgKGhhc2ggJiYgaGFzaFswXSAhPT0gJyMnKSBoYXNoID0gJyMnICsgaGFzaFxuICBpZiAoc2VhcmNoICYmIHNlYXJjaFswXSAhPT0gJz8nKSBzZWFyY2ggPSAnPycgKyBzZWFyY2hcblxuICBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZywgZW5jb2RlVVJJQ29tcG9uZW50KVxuICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnIycsICclMjMnKVxuXG4gIHJldHVybiBgJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YFxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRMb2NhdGlvbk9yaWdpbiB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5jb25zdCBEVU1NWV9CQVNFID0gbmV3IFVSTChcbiAgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyAnaHR0cDovL24nIDogZ2V0TG9jYXRpb25PcmlnaW4oKVxuKVxuXG4vKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybDogc3RyaW5nLCBiYXNlPzogc3RyaW5nKSB7XG4gIGNvbnN0IHJlc29sdmVkQmFzZSA9IGJhc2UgPyBuZXcgVVJMKGJhc2UsIERVTU1ZX0JBU0UpIDogRFVNTVlfQkFTRVxuICBjb25zdCB7XG4gICAgcGF0aG5hbWUsXG4gICAgc2VhcmNoUGFyYW1zLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWYsXG4gICAgb3JpZ2luLFxuICAgIHByb3RvY29sLFxuICB9ID0gbmV3IFVSTCh1cmwsIHJlc29sdmVkQmFzZSlcbiAgaWYgKFxuICAgIG9yaWdpbiAhPT0gRFVNTVlfQkFTRS5vcmlnaW4gfHxcbiAgICAocHJvdG9jb2wgIT09ICdodHRwOicgJiYgcHJvdG9jb2wgIT09ICdodHRwczonKVxuICApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwnKVxuICB9XG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgc2VhcmNoUGFyYW1zLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWY6IGhyZWYuc2xpY2UoRFVNTVlfQkFTRS5vcmlnaW4ubGVuZ3RoKSxcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxuZXhwb3J0IHsgcGF0aFRvUmVnZXhwIH1cblxuZXhwb3J0IGNvbnN0IG1hdGNoZXJPcHRpb25zID0ge1xuICBzZW5zaXRpdmU6IGZhbHNlLFxuICBkZWxpbWl0ZXI6ICcvJyxcbiAgZGVjb2RlOiBkZWNvZGVQYXJhbSxcbn1cblxuZXhwb3J0IGNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMgPSB7XG4gIC4uLm1hdGNoZXJPcHRpb25zLFxuICBzdHJpY3Q6IHRydWUsXG59XG5cbmV4cG9ydCBkZWZhdWx0IChjdXN0b21Sb3V0ZSA9IGZhbHNlKSA9PiB7XG4gIHJldHVybiAocGF0aDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3Qga2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgICBjb25zdCBtYXRjaGVyUmVnZXggPSBwYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKFxuICAgICAgcGF0aCxcbiAgICAgIGtleXMsXG4gICAgICBjdXN0b21Sb3V0ZSA/IGN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMgOiBtYXRjaGVyT3B0aW9uc1xuICAgIClcbiAgICBjb25zdCBtYXRjaGVyID0gcGF0aFRvUmVnZXhwLnJlZ2V4cFRvRnVuY3Rpb24oXG4gICAgICBtYXRjaGVyUmVnZXgsXG4gICAgICBrZXlzLFxuICAgICAgbWF0Y2hlck9wdGlvbnNcbiAgICApXG5cbiAgICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkLCBwYXJhbXM/OiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IHJlcyA9IHBhdGhuYW1lID09IG51bGwgPyBmYWxzZSA6IG1hdGNoZXIocGF0aG5hbWUpXG4gICAgICBpZiAoIXJlcykge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cblxuICAgICAgaWYgKGN1c3RvbVJvdXRlKSB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgICAgICAvLyB1bm5hbWVkIHBhcmFtcyBzaG91bGQgYmUgcmVtb3ZlZCBhcyB0aGV5XG4gICAgICAgICAgLy8gYXJlIG5vdCBhbGxvd2VkIHRvIGJlIHVzZWQgaW4gdGhlIGRlc3RpbmF0aW9uXG4gICAgICAgICAgaWYgKHR5cGVvZiBrZXkubmFtZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGRlbGV0ZSAocmVzLnBhcmFtcyBhcyBhbnkpW2tleS5uYW1lXVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4geyAuLi5wYXJhbXMsIC4uLnJlcy5wYXJhbXMgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBkZWNvZGVQYXJhbShwYXJhbTogc3RyaW5nKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgfSBjYXRjaCAoXykge1xuICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcignZmFpbGVkIHRvIGRlY29kZSBwYXJhbScpXG4gICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICB0aHJvdyBlcnJcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxudHlwZSBQYXJhbXMgPSB7IFtwYXJhbTogc3RyaW5nXTogYW55IH1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJlcGFyZURlc3RpbmF0aW9uKFxuICBkZXN0aW5hdGlvbjogc3RyaW5nLFxuICBwYXJhbXM6IFBhcmFtcyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICBhcHBlbmRQYXJhbXNUb1F1ZXJ5OiBib29sZWFuLFxuICBiYXNlUGF0aDogc3RyaW5nXG4pIHtcbiAgbGV0IHBhcnNlZERlc3RpbmF0aW9uOiB7XG4gICAgcXVlcnk/OiBQYXJzZWRVcmxRdWVyeVxuICAgIHByb3RvY29sPzogc3RyaW5nXG4gICAgaG9zdG5hbWU/OiBzdHJpbmdcbiAgICBwb3J0Pzogc3RyaW5nXG4gIH0gJiBSZXR1cm5UeXBlPHR5cGVvZiBwYXJzZVJlbGF0aXZlVXJsPiA9IHt9IGFzIGFueVxuXG4gIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICBwYXJzZWREZXN0aW5hdGlvbiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gIH0gZWxzZSB7XG4gICAgY29uc3Qge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBzZWFyY2hQYXJhbXMsXG4gICAgICBoYXNoLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH0gPSBuZXcgVVJMKGRlc3RpbmF0aW9uKVxuXG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHNlYXJjaFBhcmFtcyxcbiAgICAgIGhhc2gsXG4gICAgICBwcm90b2NvbCxcbiAgICAgIGhvc3RuYW1lLFxuICAgICAgcG9ydCxcbiAgICAgIHNlYXJjaCxcbiAgICAgIGhyZWYsXG4gICAgfVxuICB9XG5cbiAgcGFyc2VkRGVzdGluYXRpb24ucXVlcnkgPSBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KFxuICAgIHBhcnNlZERlc3RpbmF0aW9uLnNlYXJjaFBhcmFtc1xuICApXG4gIGNvbnN0IGRlc3RRdWVyeSA9IHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5XG4gIGNvbnN0IGRlc3RQYXRoID0gYCR7cGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhfSR7XG4gICAgcGFyc2VkRGVzdGluYXRpb24uaGFzaCB8fCAnJ1xuICB9YFxuICBjb25zdCBkZXN0UGF0aFBhcmFtS2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgcGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChkZXN0UGF0aCwgZGVzdFBhdGhQYXJhbUtleXMpXG5cbiAgY29uc3QgZGVzdFBhdGhQYXJhbXMgPSBkZXN0UGF0aFBhcmFtS2V5cy5tYXAoKGtleSkgPT4ga2V5Lm5hbWUpXG5cbiAgbGV0IGRlc3RpbmF0aW9uQ29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZShcbiAgICBkZXN0UGF0aCxcbiAgICAvLyB3ZSBkb24ndCB2YWxpZGF0ZSB3aGlsZSBjb21waWxpbmcgdGhlIGRlc3RpbmF0aW9uIHNpbmNlIHdlIHNob3VsZFxuICAgIC8vIGhhdmUgYWxyZWFkeSB2YWxpZGF0ZWQgYmVmb3JlIHdlIGdvdCB0byB0aGlzIHBvaW50IGFuZCB2YWxpZGF0aW5nXG4gICAgLy8gYnJlYWtzIGNvbXBpbGluZyBkZXN0aW5hdGlvbnMgd2l0aCBuYW1lZCBwYXR0ZXJuIHBhcmFtcyBmcm9tIHRoZSBzb3VyY2VcbiAgICAvLyBlLmcuIC9zb21ldGhpbmc6aGVsbG8oLiopIC0+IC9hbm90aGVyLzpoZWxsbyBpcyBicm9rZW4gd2l0aCB2YWxpZGF0aW9uXG4gICAgLy8gc2luY2UgY29tcGlsZSB2YWxpZGF0aW9uIGlzIG1lYW50IGZvciByZXZlcnNpbmcgYW5kIG5vdCBmb3IgaW5zZXJ0aW5nXG4gICAgLy8gcGFyYW1zIGZyb20gYSBzZXBhcmF0ZSBwYXRoLXJlZ2V4IGludG8gYW5vdGhlclxuICAgIHsgdmFsaWRhdGU6IGZhbHNlIH1cbiAgKVxuICBsZXQgbmV3VXJsXG5cbiAgLy8gdXBkYXRlIGFueSBwYXJhbXMgaW4gcXVlcnkgdmFsdWVzXG4gIGZvciAoY29uc3QgW2tleSwgc3RyT3JBcnJheV0gb2YgT2JqZWN0LmVudHJpZXMoZGVzdFF1ZXJ5KSkge1xuICAgIGxldCB2YWx1ZSA9IEFycmF5LmlzQXJyYXkoc3RyT3JBcnJheSkgPyBzdHJPckFycmF5WzBdIDogc3RyT3JBcnJheVxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgLy8gdGhlIHZhbHVlIG5lZWRzIHRvIHN0YXJ0IHdpdGggYSBmb3J3YXJkLXNsYXNoIHRvIGJlIGNvbXBpbGVkXG4gICAgICAvLyBjb3JyZWN0bHlcbiAgICAgIHZhbHVlID0gYC8ke3ZhbHVlfWBcbiAgICAgIGNvbnN0IHF1ZXJ5Q29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZSh2YWx1ZSwgeyB2YWxpZGF0ZTogZmFsc2UgfSlcbiAgICAgIHZhbHVlID0gcXVlcnlDb21waWxlcihwYXJhbXMpLnN1YnN0cigxKVxuICAgIH1cbiAgICBkZXN0UXVlcnlba2V5XSA9IHZhbHVlXG4gIH1cblxuICAvLyBhZGQgcGF0aCBwYXJhbXMgdG8gcXVlcnkgaWYgaXQncyBub3QgYSByZWRpcmVjdCBhbmQgbm90XG4gIC8vIGFscmVhZHkgZGVmaW5lZCBpbiBkZXN0aW5hdGlvbiBxdWVyeSBvciBwYXRoXG4gIGNvbnN0IHBhcmFtS2V5cyA9IE9iamVjdC5rZXlzKHBhcmFtcylcblxuICBpZiAoXG4gICAgYXBwZW5kUGFyYW1zVG9RdWVyeSAmJlxuICAgICFwYXJhbUtleXMuc29tZSgoa2V5KSA9PiBkZXN0UGF0aFBhcmFtcy5pbmNsdWRlcyhrZXkpKVxuICApIHtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBwYXJhbUtleXMpIHtcbiAgICAgIGlmICghKGtleSBpbiBkZXN0UXVlcnkpKSB7XG4gICAgICAgIGRlc3RRdWVyeVtrZXldID0gcGFyYW1zW2tleV1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBzaG91bGRBZGRCYXNlUGF0aCA9IGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSAmJiBiYXNlUGF0aFxuXG4gIHRyeSB7XG4gICAgbmV3VXJsID0gYCR7c2hvdWxkQWRkQmFzZVBhdGggPyBiYXNlUGF0aCA6ICcnfSR7ZW5jb2RlVVJJKFxuICAgICAgZGVzdGluYXRpb25Db21waWxlcihwYXJhbXMpXG4gICAgKX1gXG5cbiAgICBjb25zdCBbcGF0aG5hbWUsIGhhc2hdID0gbmV3VXJsLnNwbGl0KCcjJylcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgcGFyc2VkRGVzdGluYXRpb24uaGFzaCA9IGAke2hhc2ggPyAnIycgOiAnJ30ke2hhc2ggfHwgJyd9YFxuICAgIGRlbGV0ZSBwYXJzZWREZXN0aW5hdGlvbi5zZWFyY2hcbiAgICBkZWxldGUgcGFyc2VkRGVzdGluYXRpb24uc2VhcmNoUGFyYW1zXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGlmIChlcnIubWVzc2FnZS5tYXRjaCgvRXhwZWN0ZWQgLio/IHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXkvKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgVG8gdXNlIGEgbXVsdGktbWF0Y2ggaW4gdGhlIGRlc3RpbmF0aW9uIHlvdSBtdXN0IGFkZCBcXGAqXFxgIGF0IHRoZSBlbmQgb2YgdGhlIHBhcmFtIG5hbWUgdG8gc2lnbmlmeSBpdCBzaG91bGQgcmVwZWF0LiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLW11bHRpLW1hdGNoYFxuICAgICAgKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfVxuXG4gIC8vIFF1ZXJ5IG1lcmdlIG9yZGVyIGxvd2VzdCBwcmlvcml0eSB0byBoaWdoZXN0XG4gIC8vIDEuIGluaXRpYWwgVVJMIHF1ZXJ5IHZhbHVlc1xuICAvLyAyLiBwYXRoIHNlZ21lbnQgdmFsdWVzXG4gIC8vIDMuIGRlc3RpbmF0aW9uIHNwZWNpZmllZCBxdWVyeSB2YWx1ZXNcbiAgcGFyc2VkRGVzdGluYXRpb24ucXVlcnkgPSB7XG4gICAgLi4ucXVlcnksXG4gICAgLi4ucGFyc2VkRGVzdGluYXRpb24ucXVlcnksXG4gIH1cblxuICByZXR1cm4ge1xuICAgIG5ld1VybCxcbiAgICBwYXJzZWREZXN0aW5hdGlvbixcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gIHNlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zXG4pOiBQYXJzZWRVcmxRdWVyeSB7XG4gIGNvbnN0IHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG4gIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcXVlcnlba2V5XSA9IHZhbHVlXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICA7KHF1ZXJ5W2tleV0gYXMgc3RyaW5nW10pLnB1c2godmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSBhcyBzdHJpbmcsIHZhbHVlXVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHF1ZXJ5XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKFxuICB1cmxRdWVyeTogUGFyc2VkVXJsUXVlcnlcbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxuICBPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiByZXN1bHQuYXBwZW5kKGtleSwgaXRlbSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5zZXQoa2V5LCB2YWx1ZSlcbiAgICB9XG4gIH0pXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbihcbiAgdGFyZ2V0OiBVUkxTZWFyY2hQYXJhbXMsXG4gIC4uLnNlYXJjaFBhcmFtc0xpc3Q6IFVSTFNlYXJjaFBhcmFtc1tdXG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goKHNlYXJjaFBhcmFtcykgPT4ge1xuICAgIEFycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB0YXJnZXQuZGVsZXRlKGtleSkpXG4gICAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHRhcmdldC5hcHBlbmQoa2V5LCB2YWx1ZSkpXG4gIH0pXG4gIHJldHVybiB0YXJnZXRcbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgcGF0aE1hdGNoIGZyb20gJy4vcGF0aC1tYXRjaCdcbmltcG9ydCBwcmVwYXJlRGVzdGluYXRpb24gZnJvbSAnLi9wcmVwYXJlLWRlc3RpbmF0aW9uJ1xuaW1wb3J0IHsgUmV3cml0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9sb2FkLWN1c3RvbS1yb3V0ZXMnXG5cbmNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlciA9IHBhdGhNYXRjaCh0cnVlKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNvbHZlUmV3cml0ZXMoXG4gIGFzUGF0aDogc3RyaW5nLFxuICBwYWdlczogc3RyaW5nW10sXG4gIGJhc2VQYXRoOiBzdHJpbmcsXG4gIHJld3JpdGVzOiBSZXdyaXRlW10sXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgcmVzb2x2ZUhyZWY6IChwYXRoOiBzdHJpbmcpID0+IHN0cmluZ1xuKSB7XG4gIGlmICghcGFnZXMuaW5jbHVkZXMoYXNQYXRoKSkge1xuICAgIGZvciAoY29uc3QgcmV3cml0ZSBvZiByZXdyaXRlcykge1xuICAgICAgY29uc3QgbWF0Y2hlciA9IGN1c3RvbVJvdXRlTWF0Y2hlcihyZXdyaXRlLnNvdXJjZSlcbiAgICAgIGNvbnN0IHBhcmFtcyA9IG1hdGNoZXIoYXNQYXRoKVxuXG4gICAgICBpZiAocGFyYW1zKSB7XG4gICAgICAgIGlmICghcmV3cml0ZS5kZXN0aW5hdGlvbikge1xuICAgICAgICAgIC8vIHRoaXMgaXMgYSBwcm94aWVkIHJld3JpdGUgd2hpY2ggaXNuJ3QgaGFuZGxlZCBvbiB0aGUgY2xpZW50XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZXN0UmVzID0gcHJlcGFyZURlc3RpbmF0aW9uKFxuICAgICAgICAgIHJld3JpdGUuZGVzdGluYXRpb24sXG4gICAgICAgICAgcGFyYW1zLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIHRydWUsXG4gICAgICAgICAgcmV3cml0ZS5iYXNlUGF0aCA9PT0gZmFsc2UgPyAnJyA6IGJhc2VQYXRoXG4gICAgICAgIClcbiAgICAgICAgYXNQYXRoID0gZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSFcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeSlcblxuICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMoYXNQYXRoKSkge1xuICAgICAgICAgIC8vIGNoZWNrIGlmIHdlIG5vdyBtYXRjaCBhIHBhZ2UgYXMgdGhpcyBtZWFucyB3ZSBhcmUgZG9uZVxuICAgICAgICAgIC8vIHJlc29sdmluZyB0aGUgcmV3cml0ZXNcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY2hlY2sgaWYgd2UgbWF0Y2ggYSBkeW5hbWljLXJvdXRlLCBpZiBzbyB3ZSBicmVhayB0aGUgcmV3cml0ZXMgY2hhaW5cbiAgICAgICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gcmVzb2x2ZUhyZWYoYXNQYXRoKVxuXG4gICAgICAgIGlmIChyZXNvbHZlZEhyZWYgIT09IGFzUGF0aCAmJiBwYWdlcy5pbmNsdWRlcyhyZXNvbHZlZEhyZWYpKSB7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gYXNQYXRoXG59XG4iLCJpbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi9yb3V0ZS1yZWdleCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4OiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRSb3V0ZVJlZ2V4Pikge1xuICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXhcbiAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lISlcbiAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbTogc3RyaW5nKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nXG4gICAgICAgIClcbiAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtczogeyBbcGFyYW1OYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9ID0ge31cblxuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV1cbiAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXVxuICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKChlbnRyeSkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgIDogZGVjb2RlKG0pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcGFyYW1zXG4gIH1cbn1cbiIsImludGVyZmFjZSBHcm91cCB7XG4gIHBvczogbnVtYmVyXG4gIHJlcGVhdDogYm9vbGVhblxuICBvcHRpb25hbDogYm9vbGVhblxufVxuXG4vLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKVxufVxuXG5mdW5jdGlvbiBwYXJzZVBhcmFtZXRlcihwYXJhbTogc3RyaW5nKSB7XG4gIGNvbnN0IG9wdGlvbmFsID0gcGFyYW0uc3RhcnRzV2l0aCgnWycpICYmIHBhcmFtLmVuZHNXaXRoKCddJylcbiAgaWYgKG9wdGlvbmFsKSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgxLCAtMSlcbiAgfVxuICBjb25zdCByZXBlYXQgPSBwYXJhbS5zdGFydHNXaXRoKCcuLi4nKVxuICBpZiAocmVwZWF0KSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgzKVxuICB9XG4gIHJldHVybiB7IGtleTogcGFyYW0sIHJlcGVhdCwgb3B0aW9uYWwgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVSZWdleChcbiAgbm9ybWFsaXplZFJvdXRlOiBzdHJpbmdcbik6IHtcbiAgcmU6IFJlZ0V4cFxuICBuYW1lZFJlZ2V4Pzogc3RyaW5nXG4gIHJvdXRlS2V5cz86IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfVxuICBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfVxufSB7XG4gIGNvbnN0IHNlZ21lbnRzID0gKG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJylcbiAgICAuc2xpY2UoMSlcbiAgICAuc3BsaXQoJy8nKVxuXG4gIGNvbnN0IGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9ID0ge31cbiAgbGV0IGdyb3VwSW5kZXggPSAxXG4gIGNvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgIGdyb3Vwc1trZXldID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0LCBvcHRpb25hbCB9XG4gICAgICAgIHJldHVybiByZXBlYXQgPyAob3B0aW9uYWwgPyAnKD86LyguKz8pKT8nIDogJy8oLis/KScpIDogJy8oW14vXSs/KSdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgfVxuICAgIH0pXG4gICAgLmpvaW4oJycpXG5cbiAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIGxldCByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICBsZXQgcm91dGVLZXlDaGFyTGVuZ3RoID0gMVxuXG4gICAgLy8gYnVpbGRzIGEgbWluaW1hbCByb3V0ZUtleSB1c2luZyBvbmx5IGEteiBhbmQgbWluaW1hbCBudW1iZXIgb2YgY2hhcmFjdGVyc1xuICAgIGNvbnN0IGdldFNhZmVSb3V0ZUtleSA9ICgpID0+IHtcbiAgICAgIGxldCByb3V0ZUtleSA9ICcnXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm91dGVLZXlDaGFyTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcm91dGVLZXkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShyb3V0ZUtleUNoYXJDb2RlKVxuICAgICAgICByb3V0ZUtleUNoYXJDb2RlKytcblxuICAgICAgICBpZiAocm91dGVLZXlDaGFyQ29kZSA+IDEyMikge1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckxlbmd0aCsrXG4gICAgICAgICAgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByb3V0ZUtleVxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlS2V5czogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9ID0ge31cblxuICAgIGxldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgICAgLy8gcmVwbGFjZSBhbnkgbm9uLXdvcmQgY2hhcmFjdGVycyBzaW5jZSB0aGV5IGNhbiBicmVha1xuICAgICAgICAgIC8vIHRoZSBuYW1lZCByZWdleFxuICAgICAgICAgIGxldCBjbGVhbmVkS2V5ID0ga2V5LnJlcGxhY2UoL1xcVy9nLCAnJylcbiAgICAgICAgICBsZXQgaW52YWxpZEtleSA9IGZhbHNlXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiB0aGUga2V5IGlzIHN0aWxsIGludmFsaWQgYW5kIGZhbGxiYWNrIHRvIHVzaW5nIGEga25vd25cbiAgICAgICAgICAvLyBzYWZlIGtleVxuICAgICAgICAgIGlmIChjbGVhbmVkS2V5Lmxlbmd0aCA9PT0gMCB8fCBjbGVhbmVkS2V5Lmxlbmd0aCA+IDMwKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWlzTmFOKHBhcnNlSW50KGNsZWFuZWRLZXkuc3Vic3RyKDAsIDEpKSkpIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGludmFsaWRLZXkpIHtcbiAgICAgICAgICAgIGNsZWFuZWRLZXkgPSBnZXRTYWZlUm91dGVLZXkoKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdXRlS2V5c1tjbGVhbmVkS2V5XSA9IGtleVxuICAgICAgICAgIHJldHVybiByZXBlYXRcbiAgICAgICAgICAgID8gb3B0aW9uYWxcbiAgICAgICAgICAgICAgPyBgKD86Lyg/PCR7Y2xlYW5lZEtleX0+Lis/KSk/YFxuICAgICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT4uKz8pYFxuICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+W14vXSs/KWBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5qb2luKCcnKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgICAgZ3JvdXBzLFxuICAgICAgcm91dGVLZXlzLFxuICAgICAgbmFtZWRSZWdleDogYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgLFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgZ3JvdXBzLFxuICB9XG59XG4iLCJpbXBvcnQgeyBJbmNvbWluZ01lc3NhZ2UsIFNlcnZlclJlc3BvbnNlIH0gZnJvbSAnaHR0cCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBmb3JtYXRVcmwgfSBmcm9tICcuL3JvdXRlci91dGlscy9mb3JtYXQtdXJsJ1xuaW1wb3J0IHsgTWFuaWZlc3RJdGVtIH0gZnJvbSAnLi4vc2VydmVyL2xvYWQtY29tcG9uZW50cydcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICcuLi8uLi9saWIvbG9hZC1lbnYtY29uZmlnJ1xuaW1wb3J0IHsgQnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL3NlcnZlci9nZXQtcGFnZS1maWxlcydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbi8qKlxuICogV2ViIHZpdGFscyBwcm92aWRlZCB0byBfYXBwLnJlcG9ydFdlYlZpdGFscyBieSBDb3JlIFdlYiBWaXRhbHMgcGx1Z2luIGRldmVsb3BlZCBieSBHb29nbGUgQ2hyb21lIHRlYW0uXG4gKiBodHRwczovL25leHRqcy5vcmcvYmxvZy9uZXh0LTktNCNpbnRlZ3JhdGVkLXdlYi12aXRhbHMtcmVwb3J0aW5nXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRXZWJWaXRhbHNNZXRyaWMgPSB7XG4gIGlkOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgc3RhcnRUaW1lOiBudW1iZXJcbiAgdmFsdWU6IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dFBhZ2VDb250ZXh0IHtcbiAgLyoqXG4gICAqIEVycm9yIG9iamVjdCBpZiBlbmNvdW50ZXJlZCBkdXJpbmcgcmVuZGVyaW5nXG4gICAqL1xuICBlcnI/OiAoRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfSkgfCBudWxsXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVxdWVzdCBvYmplY3QuXG4gICAqL1xuICByZXE/OiBJbmNvbWluZ01lc3NhZ2VcbiAgLyoqXG4gICAqIGBIVFRQYCByZXNwb25zZSBvYmplY3QuXG4gICAqL1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICAvKipcbiAgICogUGF0aCBzZWN0aW9uIG9mIGBVUkxgLlxuICAgKi9cbiAgcGF0aG5hbWU6IHN0cmluZ1xuICAvKipcbiAgICogUXVlcnkgc3RyaW5nIHNlY3Rpb24gb2YgYFVSTGAgcGFyc2VkIGFzIGFuIG9iamVjdC5cbiAgICovXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICAvKipcbiAgICogYFN0cmluZ2Agb2YgdGhlIGFjdHVhbCBwYXRoIGluY2x1ZGluZyBxdWVyeS5cbiAgICovXG4gIGFzUGF0aD86IHN0cmluZ1xuICAvKipcbiAgICogYENvbXBvbmVudGAgdGhlIHRyZWUgb2YgdGhlIEFwcCB0byB1c2UgaWYgbmVlZGluZyB0byByZW5kZXIgc2VwYXJhdGVseVxuICAgKi9cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbn1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dFR5cGU8UiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyPiA9IHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQ+XG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG4gIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gIHJvdXRlcjogUlxufVxuXG5leHBvcnQgdHlwZSBBcHBJbml0aWFsUHJvcHMgPSB7XG4gIHBhZ2VQcm9wczogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzVHlwZTxcbiAgUiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyLFxuICBQID0ge31cbj4gPSBBcHBJbml0aWFsUHJvcHMgJiB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0LCBhbnksIFA+XG4gIHJvdXRlcjogUlxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudENvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQgJiB7XG4gIHJlbmRlclBhZ2U6IFJlbmRlclBhZ2Vcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRJbml0aWFsUHJvcHMgPSBSZW5kZXJQYWdlUmVzdWx0ICYge1xuICBzdHlsZXM/OiBSZWFjdC5SZWFjdEVsZW1lbnRbXSB8IFJlYWN0LlJlYWN0RnJhZ21lbnRcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRQcm9wcyA9IERvY3VtZW50SW5pdGlhbFByb3BzICYge1xuICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgZGFuZ2Vyb3VzQXNQYXRoOiBzdHJpbmdcbiAgZG9jQ29tcG9uZW50c1JlbmRlcmVkOiB7XG4gICAgSHRtbD86IGJvb2xlYW5cbiAgICBNYWluPzogYm9vbGVhblxuICAgIEhlYWQ/OiBib29sZWFuXG4gICAgTmV4dFNjcmlwdD86IGJvb2xlYW5cbiAgfVxuICBidWlsZE1hbmlmZXN0OiBCdWlsZE1hbmlmZXN0XG4gIGFtcFBhdGg6IHN0cmluZ1xuICBpbkFtcE1vZGU6IGJvb2xlYW5cbiAgaHlicmlkQW1wOiBib29sZWFuXG4gIGlzRGV2ZWxvcG1lbnQ6IGJvb2xlYW5cbiAgZHluYW1pY0ltcG9ydHM6IE1hbmlmZXN0SXRlbVtdXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIGNhbm9uaWNhbEJhc2U6IHN0cmluZ1xuICBoZWFkVGFnczogYW55W11cbiAgdW5zdGFibGVfcnVudGltZUpTPzogZmFsc2VcbiAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmc6IHN0cmluZ1xufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxuXG4gIHByZXZpZXc/OiBib29sZWFuXG4gIC8qKlxuICAgKiBQcmV2aWV3IGRhdGEgc2V0IG9uIHRoZSByZXF1ZXN0LCBpZiBhbnlcbiAgICogKi9cbiAgcHJldmlld0RhdGE/OiBhbnlcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdCh1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdChzdGF0dXM6IG51bWJlciwgdXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsOiBVcmxPYmplY3QpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VXJsKHVybClcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplUGF0aFNlcD1ub3JtYWxpemVQYXRoU2VwO2V4cG9ydHMuZGVub3JtYWxpemVQYWdlUGF0aD1kZW5vcm1hbGl6ZVBhZ2VQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZVBhdGhTZXAocGF0aCl7cmV0dXJuIHBhdGgucmVwbGFjZSgvXFxcXC9nLCcvJyk7fWZ1bmN0aW9uIGRlbm9ybWFsaXplUGFnZVBhdGgocGFnZSl7cGFnZT1ub3JtYWxpemVQYXRoU2VwKHBhZ2UpO2lmKHBhZ2Uuc3RhcnRzV2l0aCgnL2luZGV4LycpKXtwYWdlPXBhZ2Uuc2xpY2UoNik7fWVsc2UgaWYocGFnZT09PScvaW5kZXgnKXtwYWdlPScvJzt9cmV0dXJuIHBhZ2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQU13QUFBQXJDQVlBQUFBMFkyZklBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJuUVUxQkFBQ3hqd3Y4WVFVQUFBTjlTVVJCVkhnQjdaMkxkZG93RklhdmV6SUFHOVFibEU1UWR3TkdZSU9TQ1dBRDJBQTJZQVRJQkpBSlRDYUFUcURxNGwrTllzd2pSQVpzL2Q4NWlyR2srSUYxZFIrU1RDS0VSSVl4cHBNa3ljN2J6K3dtdzY3bXoveHlRcUxEQ3NYVXBwVk5XOTJXeWtibUkxMGhKQWEwc2RzMGhOYnc4K2RJRTV0NkovNi9VM1U4SWFTTnFLQkFTNHdrQUo3MnlZU1FObExXRWw4OVZrZ0JKS1Qxd1BkWkNDSGtQRlpZVWlHRUVFTHFSZFZOU0NlSmtDWUM1NzV6b2l4MU94cWJ6bW1ua1ZoQktGcGxZSHFrdkk5STJYYzNNSk16YkVaaVJTTmdpSVIxajVUdngyTDhqRlFJaVpSejdSOVcySDQ2elpQK1NaSmtJNFJFUUhuaXBYSkIrMysxNmUzY2dZZjBiVWliMERsa21IeVp5WlY4TzFIMml1M2VHYUxna0thQ1NMQ08xTTl0V2tzeGhiK1dFM1c4eVdlNUVOSXdJQ3hicElIY0FwejBOaWNqSkRBSUM2ZnlTWnhtTWx3ZlE4aDU0SXFZWU80SWdnSmoramZrM3NCOUdHb0lXQUlBN1hKME1QT2FBK29GenB4L3cxVnA1RjdZdHZjSFBvb3lrUUNZOTRWb3FZUUVramdMZWJHRVhBb0dGUTE4alV3Q1l1cWNZd21KVElXUUc0S3BYWm0wQlkxUUNDRUJhSDIweXJNRDgydERlNFNnSFMxcThTa096NVhmZFNKeTZXWnpqdWVRUzRHNTVkck9Gb1BvdGZrVlhtU3NML2ZHQ3c1a1FzZ0Z3Q3E1YVFNMlRWaE1TU0Vpaldpb2p3RFVyalBYcHZSejRnSW0reGdtRjRYbUV2Q2x1YkVjWlN5azFaaGlxdjNDODA4bTdDdy9DZnljZ1RueDdsdlNEdkNjVjNVNzh0RUN0VDFrTDlRc1RER0ZLaE55V3p6MWJkQXpEZGd6UFNZUWtuN0o1T0t6dWpVdzJkeUQ0SUsyQndVQkhIL3NoT3RKSGhGRTNLWndLTm1qMVF3NnNMUWl2MGN6ckFGQSsydzkwMjNCQnhjTzU0L0FuM1JhWkNTazJlQ2hUdURyOUNyS3FYMnVBSnJEbVZvTCtKR3BSRVFpRVdLS2w3S2xVcnhCNU1XbVpaSWtTNGtjZENTWlRiOTAzMzRuenhYbDZvK3MrYU9wRVlHZTBta2dSNmVpWGpUT3FtZGkvWTlFQ2prZ1NnMVRSZ1hEOXBqclVwNEswRmFLZDFpNWQxbTkySHFOV2xVS2swa0ZYN2MvOExsbjcrT3RWRzhrNy9kS0RYSUVDc3dSSUREcS8yZ0QwNGFtK3p2YmtINlg2bW01VHVYUmh2YlhwbzBVRFc0dE5ZTHIwNVFpNmVkbGhlRFBjUitLRTRqbnVxK1BrRW9RWUZpVm9uUFRpbm85bUQwNUhPYTkwMXhScisrVm42bzNNNGYwajF4ZjF6RFFFWVFuSVY4Q3dZS2ZidjlFMUVoNzl5VStwMTdlSld3cThpWTQzZ1pwVjJWR01aZ1Jsbjhya2oxOGMzNFhxUUFBQUFCSlJVNUVya0pnZ2c9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBTXdBQUFBckNBWUFBQUEwWTJmSUFBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUFOdlNVUkJWSGdCN1ozcmRkcEFFSVdIblB5UFMxaFhFSmVnZE9CVUVGSkJuQXFnZ3lnVlFBZTRBOXdCVGdYZ0NzQVZiR2FzSzdQZUNDeUNIa2k2M3psN0pLUUJDV2xuNTdHNzBraElwWGp2SFZaM285Rm9GKzFMZGZGSnl4V0s4YlZBYmhuL3JzcDhLVGpXV0JjYmZOeW96RVpJclh3VWNqWmFjV2U2U0xTNFlMT3Q3eUxSejhIMm5aeDNURk80V2JUTmxPYTZRQzZSVEtFZWhad0ZGZVlJV3RsdUpLdHNWdEZ0M1duNXJoWHZQaEo5MXZLZzVVbjJ5dkFjLzE2UmxTaWlqSnhaSlQyL2E5a3JxVHNnYXVlOXNCV1Z0NFVwellOKy82ZVFreGtKZVhXallwY0dMdFFQeWR3ZXEyaW1FR25YWEIvOUg0bGtMcUFwanluL2svNkh1MGpHOW4zVDhrZkxJNjBSZWNVcWg1WTdMUXN0VzUrUkZzaGR3YVhwUFJZUEJkZkNZLzFPQ05HS2NJdEtzYmI0QTVYbFJramVtTmoxbU1NeXhmc1RYcXVlWVM0V0xNaFN5NnBnLzJBc1I5WFk5WXdhbTFzaDNRVTMwZ2MzTlJWU0dXaU14cEU3eThibjBqbDBrMHhCWUYyY2tOb3BjczhDcFhKQzJnVSs5QzhHcFpkTEVDTjZ1TVZqV3FHR2dhSnNnd3hPNmhsOFhpeXdNbW5nSWsrRk5BY1Vab0VsVzZzT2dYdm1DcmJ6UHA1THJoaENlaytRYVV1RWxBZHAza25rY2praHZRWDNmQjY0YkxZY0Mza2ZCSVo1Z0pnSUdSUklDbGovemt6SSt5QkFkRUlHRFdPYWdNRHRZbnhDU2hQRU9VNGFvbFhGTFloUGxteEpTQmxRZDZaQm5GTzc0aUFUdTVLMndBa3dQaUgvRFZ6MlhIRnFqWE44MXVtNmJxMVI5OW5vMTBRSU9STW9UdTBWdVJGbGdma2NDeUVONDdzMGJxMGdSdUZ3RmRJWThHRHl2cnVKVkV5bDFpYnc5eGlqa05hQXF6WVBPa0FybWFPRCtIc3BWUUZUU0VVaEZ3R3N6Ym9xTHdlSkJzLzZUVWdKRUc2OGpJelB0MzA0NGNzVHovNFQwa0hnc28zbFJQQ0F4ZCt5ZjFoaXFZTWxRWnpDQ1Z1a2MvaHN3bUVlM3ppcEE1aWo4RUNKRU5KUkVHL25EWC9sMmJSY1lkWUlmT2lLa2M0VFpOUFdRZ2dweDZrR0FObTM1WnZzbStmd2VqSmdqaWtSTEpOL1NSd0VzUXBuT1pKQkVpakU1SWhNbGw2R3VYbVRheVprU01Cb3BGQWFkMERHNHZsWi9zRUpJUVBuV0NhWU9rSUlJWVFRMGpxZTAxWUlLUWVHaDNIVU11a25WWTlNOGRuRE43d1Ewa2ZRSzcrdFFuR0NJZjU4eUNEcEp4aG9tVWJiYkhid0NyTW9wMGY2Vy81NU85MHhlVUo2Q2VLUXBkKy9jakNKOW9mY0gvb2R2bmFjREJLeklwZ2dsbitlQnJ2dHRldUZTdk1YYWRZb2hvYjNyNXdBQUFBQVNVVk9SSzVDWUlJPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2Jhbm5lci10aHVtYi1jZmY0MDQwOWQ5NDQyOGI4ZGI0MWVkMDEyZDhlYTc2MS5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvYmFubmVyQmctMWIwOTM1MjRiYWE2ZjhiZDFmOWUyOTVmMjZkNmVjZTgucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjNhV1IwYUQwaU5UY2lJR2hsYVdkb2REMGlOVGNpSUhacFpYZENiM2c5SWpBZ01DQTFOeUExTnlJZ1ptbHNiRDBpYm05dVpTSWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklqNE5Danh3WVhSb0lHOXdZV05wZEhrOUlqQXVNU0lnWm1sc2JDMXlkV3hsUFNKbGRtVnViMlJrSWlCamJHbHdMWEoxYkdVOUltVjJaVzV2WkdRaUlHUTlJazB5TkM0MU5ERTJJREF1TnpreE5qRTJTRE15TGpRMU9ETkRORFV1TlRjMUlEQXVOemt4TmpFMklEVTJMakl3T0RNZ01URXVOREkwTmlBMU5pNHlNRGd6SURJMExqVTBNVFpXTXpJdU5EVTRNME0xTmk0eU1EZ3pJRFExTGpVM05EZ2dORFV1TlRjMUlEVTJMakl3T0RJZ016SXVORFU0TXlBMU5pNHlNRGd5U0RJMExqVTBNVFpETVRFdU5ESTBPU0ExTmk0eU1EZ3lJREF1TnpreE5qY3pJRFExTGpVM05EZ2dNQzQzT1RFMk56TWdNekl1TkRVNE0xWXlOQzQxTkRFMlF6QXVOemt4TmpjeklERXhMalF5TkRZZ01URXVOREkwT1NBd0xqYzVNVFl4TmlBeU5DNDFOREUySURBdU56a3hOakUyV2lJZ1ptbHNiRDBpZFhKc0tDTndZV2x1ZERCZmJHbHVaV0Z5S1NJdlBnMEtQSEJoZEdnZ1ptbHNiQzF5ZFd4bFBTSmxkbVZ1YjJSa0lpQmpiR2x3TFhKMWJHVTlJbVYyWlc1dlpHUWlJR1E5SWswek1TNHlNVGN4SURNeUxqazJNalZETXpFdU16ZzBPU0F6TWk0M09USXpJRE14TGpRMk9EZ2dNekl1TlRreE5DQXpNUzQwTmpnNElETXlMak0xT1ZZek1DNHlNVFEzU0RRd0xqTTNORGxXTXpZdU5qUTRRelF3TGpNM05Ea2dNemN1TWpNM01TQTBNQzR4TmpjMElETTNMamMwTWpNZ016a3VOelV5SURNNExqRTJNa016T1M0ek16WTRJRE00TGpVNE1qRWdNemd1T0RNM05TQXpPQzQzT1RFNUlETTRMakkxTkRVZ016Z3VOemt4T1VneE9DNDNORFUyUXpFNExqRTJNalFnTXpndU56a3hPU0F4Tnk0Mk5qTXhJRE00TGpVNE1qRWdNVGN1TWpRM09TQXpPQzR4TmpKRE1UWXVPRE15TlNBek55NDNOREl6SURFMkxqWXlORGtnTXpjdU1qTTNNU0F4Tmk0Mk1qUTVJRE0yTGpZME9GWXpNQzR5TVRRM1NESTFMalV6TVRKV016SXVNelU1UXpJMUxqVXpNVElnTXpJdU5Ua3hOQ0F5TlM0Mk1UVXhJRE15TGpjNU1qTWdNalV1TnpneklETXlMamsyTWpWRE1qVXVPVFV3T1NBek15NHhNekU1SURJMkxqRTBPVGNnTXpNdU1qRTNNU0F5Tmk0ek56azFJRE16TGpJeE56RklNekF1TmpJd05rTXpNQzQ0TlRBeUlETXpMakl4TnpFZ016RXVNRFE1TWlBek15NHhNekU1SURNeExqSXhOekVnTXpJdU9UWXlOVnBOTXpBdU1UazJOaUF6TUM0eU1UUTNTREkyTGpnd016UldNekV1T1ROSU16QXVNVGsyTmxZek1DNHlNVFEzV2swek9TNDNOVEl4SURJeUxqSTJOelJETXprdU16TTJPU0F5TVM0NE5EWTVJRE00TGpnek56WWdNakV1TmpNM0lETTRMakkxTkRVZ01qRXVOak0zU0RNekxqVTRPVEZXTVRrdU5Ea3lOME16TXk0MU9Ea3hJREU1TGpFek5USWdNek11TkRZMU5pQXhPQzQ0TXpFM0lETXpMakl4T0RFZ01UZ3VOVGd4UXpNeUxqazNNRGtnTVRndU16TXhOaUF6TWk0Mk56QXpJREU0TGpJd05qRWdNekl1TXpFM0lERTRMakl3TmpGSU1qUXVOamd6TVVNeU5DNHpNamszSURFNExqSXdOakVnTWpRdU1ESTVNeUF4T0M0ek16RTJJREl6TGpjNE1Ua2dNVGd1TlRneFF6SXpMalV6TkRVZ01UZ3VPRE14TXlBeU15NDBNVEE0SURFNUxqRXpOVElnTWpNdU5ERXdPQ0F4T1M0ME9USTNWakl4TGpZek4wZ3hPQzQzTkRVMlF6RTRMakUyTWpRZ01qRXVOak0zSURFM0xqWTJNekVnTWpFdU9EUTJPU0F4Tnk0eU5EYzVJREl5TGpJMk56UkRNVFl1T0RNeU5TQXlNaTQyT0RZMklERTJMall5TkRrZ01qTXVNVGt4TkNBeE5pNDJNalE1SURJekxqYzRNVE5XTWpndU9USTRTRFF3TGpNM05EbFdNak11TnpneE0wTTBNQzR6TnpRNUlESXpMakU1TVRRZ05EQXVNVFkzTkNBeU1pNDJPRFkySURNNUxqYzFNakVnTWpJdU1qWTNORnBOTXpFdU9Ea3lPU0F5TVM0Mk16ZElNalV1TVRBM01sWXhPUzQ1TWpFelNETXhMamc1TWpsV01qRXVOak0zV2lJZ1ptbHNiRDBpSTBaR05EVTFNQ0l2UGcwS1BHUmxabk0rRFFvOGJHbHVaV0Z5UjNKaFpHbGxiblFnYVdROUluQmhhVzUwTUY5c2FXNWxZWElpSUhneFBTSXpNaTQzT0RVMUlpQjVNVDBpT0RrdU56ZzFOU0lnZURJOUlqZzVMamM0TlRVaUlIa3lQU0l5TkM0eU1UUTFJaUJuY21Ga2FXVnVkRlZ1YVhSelBTSjFjMlZ5VTNCaFkyVlBibFZ6WlNJK0RRbzhjM1J2Y0NCemRHOXdMV052Ykc5eVBTSWpSa1kwTVRaRElpOCtEUW84YzNSdmNDQnZabVp6WlhROUlqRWlJSE4wYjNBdFkyOXNiM0k5SWlOR1JqUkNNa0lpTHo0TkNqd3ZiR2x1WldGeVIzSmhaR2xsYm5RK0RRbzhMMlJsWm5NK0RRbzhMM04yWno0TkNnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIzYVdSMGFEMGlOVGNpSUdobGFXZG9kRDBpTlRjaUlIWnBaWGRDYjNnOUlqQWdNQ0ExTnlBMU55SWdabWxzYkQwaWJtOXVaU0lnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JajROQ2p4d1lYUm9JRzl3WVdOcGRIazlJakF1TVNJZ1ptbHNiQzF5ZFd4bFBTSmxkbVZ1YjJSa0lpQmpiR2x3TFhKMWJHVTlJbVYyWlc1dlpHUWlJR1E5SWsweU5DNDFOREUySURBdU56a3hOakUyU0RNeUxqUTFPRE5ETkRVdU5UYzFNU0F3TGpjNU1UWXhOaUExTmk0eU1EZ3pJREV4TGpReU5EWWdOVFl1TWpBNE15QXlOQzQxTkRFMlZqTXlMalExT0RORE5UWXVNakE0TXlBME5TNDFOelE0SURRMUxqVTNOVEVnTlRZdU1qQTRNaUF6TWk0ME5UZ3pJRFUyTGpJd09ESklNalF1TlRReE5rTXhNUzQwTWpRNUlEVTJMakl3T0RJZ01DNDNPVEUyTVRZZ05EVXVOVGMwT0NBd0xqYzVNVFl4TmlBek1pNDBOVGd6VmpJMExqVTBNVFpETUM0M09URTJNVFlnTVRFdU5ESTBOaUF4TVM0ME1qUTVJREF1TnpreE5qRTJJREkwTGpVME1UWWdNQzQzT1RFMk1UWmFJaUJtYVd4c1BTSjFjbXdvSTNCaGFXNTBNRjlzYVc1bFlYSXBJaTgrRFFvOGNHRjBhQ0JtYVd4c0xYSjFiR1U5SW1WMlpXNXZaR1FpSUdOc2FYQXRjblZzWlQwaVpYWmxibTlrWkNJZ1pEMGlUVFF5TGpNNE9URWdNalV1TWpJeE5FTTBNaTR6T1RNMklESTFMak13TWpNZ05ESXVNemczTnlBeU5TNHpPRFExSURReUxqTTJOelVnTWpVdU5EWTNURFF3TGpVMk1EY2dNekl1TnpJek5VTTBNQzQwTmprMUlETXpMakE0T0RjZ05EQXVNVFF6TWlBek15NHpORFl5SURNNUxqYzJPREVnTXpNdU16UTRNMHd5T0M0NU1qYzBJRE16TGpRd016TkRNamd1T1RJMklETXpMalF3TXpNZ01qZ3VPVEkwTnlBek15NDBNRE16SURJNExqa3lNeklnTXpNdU5EQXpNMGd4T0M0d09ESTFRekUzTGpjd05UTWdNek11TkRBek15QXhOeTR6TnpZM0lETXpMakUwTkRrZ01UY3VNamcxTnlBek1pNDNOemMyVERFMUxqUTNPRGtnTWpVdU5Ea3pORU14TlM0ME5UZ2dNalV1TkRBNU1TQXhOUzQwTlRJeElESTFMak15TkRRZ01UVXVORFUzTXlBeU5TNHlOREUwUXpFMExqYzFPRE1nTWpVdU1ESXdOaUF4TkM0eU5TQXlOQzR6TmpNNElERTBMakkxSURJekxqVTVRekUwTGpJMUlESXlMall6TkRVZ01UVXVNREl6TmlBeU1TNDROVGMzSURFMUxqazNORFlnTWpFdU9EVTNOME14Tmk0NU1qVTJJREl4TGpnMU56Y2dNVGN1TmprNU15QXlNaTQyTXpRMUlERTNMalk1T1RNZ01qTXVOVGxETVRjdU5qazVNeUF5TkM0eE1qYzJJREUzTGpRMU16Z2dNalF1TmpBNE5TQXhOeTR3TmprMklESTBMamt5TmpsTU1Ua3VNek14TnlBeU55NHlNVFV4UXpFNUxqa3dNelFnTWpjdU56a3pOU0F5TUM0Mk9UWTNJREk0TGpFeU5UVWdNakV1TlRBNE15QXlPQzR4TWpVMVF6SXlMalEyT0NBeU9DNHhNalUxSURJekxqTTRNeUF5Tnk0Mk5qYzFJREl6TGprMU9USWdNall1T1RBeFRESTNMalkzTmprZ01qRXVPVFUwTjBNeU55NHpOalEySURJeExqWTBNVFVnTWpjdU1UY3hNU0F5TVM0eU1EZzJJREkzTGpFM01URWdNakF1TnpNeE1VTXlOeTR4TnpFeElERTVMamMzTmlBeU55NDVORFE0SURFNExqazVPRGdnTWpndU9EazFPQ0F4T0M0NU9UZzRRekk1TGpnME5qZ2dNVGd1T1RrNE9DQXpNQzQyTWpBMElERTVMamMzTmlBek1DNDJNakEwSURJd0xqY3pNVEZETXpBdU5qSXdOQ0F5TVM0eE9UUXlJRE13TGpRek56TWdNakV1TmpFME1pQXpNQzR4TkRFeklESXhMamt5TlRSRE16QXVNVFF5TXlBeU1TNDVNalkzSURNd0xqRTBNellnTWpFdU9USTNPU0F6TUM0eE5EUTFJREl4TGpreU9USk1Nek11T0RNMU1TQXlOaTQ0T0RsRE16UXVOREV4TWlBeU55NDJOakk0SURNMUxqTXlPVFFnTWpndU1USTFOU0F6Tmk0eU9URTRJREk0TGpFeU5UVkRNemN1TVRFd09TQXlPQzR4TWpVMUlETTNMamc0TVRJZ01qY3VPREExSURNNExqUTJNRE1nTWpjdU1qSXpOa3cwTUM0M016WTJJREkwTGprek56VkROREF1TXpRME15QXlOQzQyTVRrMklEUXdMakE1TWpNZ01qUXVNVE0wTkNBME1DNHdPVEl6SURJekxqVTVRelF3TGpBNU1qTWdNakl1TmpNME5TQTBNQzQ0TmpZZ01qRXVPRFUzTnlBME1TNDRNVGNnTWpFdU9EVTNOME0wTWk0M05qZ2dNakV1T0RVM055QTBNeTQxTkRFM0lESXlMall6TkRVZ05ETXVOVFF4TnlBeU15NDFPVU0wTXk0MU5ERTNJREkwTGpNME1qa2dORE11TURVNU1pQXlOQzQ1T0RNNUlEUXlMak00T1RFZ01qVXVNakl4TkZwTk5EQXVNemcwTkNBek5TNDVPRFk0UXpRd0xqTTRORFFnTXpVdU5UTXhPQ0EwTUM0d01UWTJJRE0xTGpFMk1qUWdNemt1TlRZek1TQXpOUzR4TmpJMFNERTRMak14T1RoRE1UY3VPRFkyTWlBek5TNHhOakkwSURFM0xqUTVPRFVnTXpVdU5UTXhPQ0F4Tnk0ME9UZzFJRE0xTGprNE5qaFdNemN1T1RZMlF6RTNMalE1T0RVZ016Z3VOREl4T0NBeE55NDROall5SURNNExqYzVNRGdnTVRndU16RTVPQ0F6T0M0M09UQTRTRE01TGpVMk16RkROREF1TURFMk5pQXpPQzQzT1RBNElEUXdMak00TkRRZ016Z3VOREl4T0NBME1DNHpPRFEwSURNM0xqazJObFl6TlM0NU9EWTRXaUlnWm1sc2JEMGlJMFpGTlRnMk9DSXZQZzBLUEdSbFpuTStEUW84YkdsdVpXRnlSM0poWkdsbGJuUWdhV1E5SW5CaGFXNTBNRjlzYVc1bFlYSWlJSGd4UFNJek1pNDNPRFUxSWlCNU1UMGlPRGt1TnpnMU5TSWdlREk5SWpnNUxqYzROVFVpSUhreVBTSXlOQzR5TVRRMUlpQm5jbUZrYVdWdWRGVnVhWFJ6UFNKMWMyVnlVM0JoWTJWUGJsVnpaU0krRFFvOGMzUnZjQ0J6ZEc5d0xXTnZiRzl5UFNJalJrWTFPRFU0SWk4K0RRbzhjM1J2Y0NCdlptWnpaWFE5SWpFaUlITjBiM0F0WTI5c2IzSTlJaU5HT0RVM1FUWWlMejROQ2p3dmJHbHVaV0Z5UjNKaFpHbGxiblErRFFvOEwyUmxabk0rRFFvOEwzTjJaejROQ2c9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2NvcmVGZWF0dXJlLTllOGEzMGI0NzJmMGJkYzBlNTg5ZGQ4NGUyZTAzNTY5LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIzYVdSMGFEMGlPRElpSUdobGFXZG9kRDBpT0RJaUlIWnBaWGRDYjNnOUlqQWdNQ0E0TWlBNE1pSWdabWxzYkQwaWJtOXVaU0lnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JaUI0Yld4dWN6cDRiR2x1YXowaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1UazVPUzk0YkdsdWF5SStEUW84Y0dGMGFDQnZjR0ZqYVhSNVBTSXdMakV5TWlJZ1pEMGlUVFUwSURCSU1qaERNVEl1TlRNMklEQWdNQ0F4TWk0MU16WWdNQ0F5T0ZZMU5FTXdJRFk1TGpRMk5DQXhNaTQxTXpZZ09ESWdNamdnT0RKSU5UUkROamt1TkRZMElEZ3lJRGd5SURZNUxqUTJOQ0E0TWlBMU5GWXlPRU00TWlBeE1pNDFNellnTmprdU5EWTBJREFnTlRRZ01Gb2lJR1pwYkd3OUlpTkZPVGMwTWpVaUx6NE5Danh5WldOMElIZzlJakkwSWlCNVBTSXlOQ0lnZDJsa2RHZzlJak0wSWlCb1pXbG5hSFE5SWpNMElpQm1hV3hzUFNKMWNtd29JM0JoZEhSbGNtNHdLU0l2UGcwS1BHUmxabk0rRFFvOGNHRjBkR1Z5YmlCcFpEMGljR0YwZEdWeWJqQWlJSEJoZEhSbGNtNURiMjUwWlc1MFZXNXBkSE05SW05aWFtVmpkRUp2ZFc1a2FXNW5RbTk0SWlCM2FXUjBhRDBpTVNJZ2FHVnBaMmgwUFNJeElqNE5DangxYzJVZ2VHeHBibXM2YUhKbFpqMGlJMmx0WVdkbE1DSWdkSEpoYm5ObWIzSnRQU0p6WTJGc1pTZ3dMakF5T1RReE1UZ3BJaTgrRFFvOEwzQmhkSFJsY200K0RRbzhhVzFoWjJVZ2FXUTlJbWx0WVdkbE1DSWdkMmxrZEdnOUlqTTBJaUJvWldsbmFIUTlJak0wSWlCNGJHbHVhenBvY21WbVBTSmtZWFJoT21sdFlXZGxMM0J1Wnp0aVlYTmxOalFzYVZaQ1QxSjNNRXRIWjI5QlFVRkJUbE5WYUVWVlowRkJRVU5KUVVGQlFXbERRVmxCUVVGQk5sSjNka05CUVVGQlFraE9RMU5XVVVsRFFXZEpaa0ZvYTJsQlFVRkNRV2hLVWtWR1ZWZEpXRVpzTVhWSlZteFZWV2RNTDNvNU0zTmFZWGcwVlROU2JWSlhWRVUzY0ZsMFJWbFNZM0ZKWjJGNVNVaHlTVTF4UmtsMU1HcFRTVWh1V2taRU1WZFpUR3hFZFdkcFZpdEtRV3hvVVRGa09FMVhhVU13TW14cFZEQXhXbVJ2YldsellVa3pTbkZDYW5CTVRtcExaVWgwWXpkTllXWjZMemcxT0hwcFV6UTBOMGd2VjFodGRuWmlMMXBsWlRZck1XdDZVazVCV1dwUFZHZEVkVUlyTkVGeVoxRnRUVlJpTlVobVowTXlSMmc0TWtaaVYwdFZibFJzVDJwemVHTkVjbmRFVjNGSWQwUXJTR2xPU1dVck56TlhiVU5XT0ZOR2REVldVMUI2Y2xsQ2JUUkRjbWRHTTNFdlFXNVJVREJoVVVNMFJqZG5UV1ZCUm1OQmRuZE1jRmRVYzIwclZsSXhUR2RPWlVGSU5FTmlha0V2TjNoM2FuZElORzVQVEdkVVpVRjJORVZhY21OaGRIYzNZM0ZpSzJaTGVreFhSMFp2UVROQk4zTkJlbGxhU0ROWk1ITjZZeXQyUWpKa1psRnBORWRpWjJWbFREaEpjRUZhWTBGU2QwUlFhWFZCYlV0aU9VYzBTRFYzUzFCQk9YVnFjMnN3VjBSQk1YVXdkbUZwUmtoVVYyZFVWVWRMV1cxSk5XTkNNM2ROTjBGWlYwRlBhM2RPVUZJeVZtdEdabXh1UVVRM1dVTnhaWFZCYVZWSk1XczVkVEEzVkVrcllrRlhTWHB6TkVVM1oxcDFRbEJaTURoamRrZDJSVmN6VG14SGIxQnRRMGc0WVVWMlJERktSMlZ2UlhwbldIaE5Xa1ZqZVV0bFJTOVVOeXM0U0VseVQzSnFXU3RRUm5OR05VRkdaM1pRU0doaFNGTXlSU3RvUldkdWQwRTJRMjVvTTNkT2MxWXJhSGgzUW5ka1dUTldNRGx1ZW1wM09VcFRTVTFoU0ZGWFFYZFBhbk5JSzBScVdEbGlhbmh2WkcweU5VOVZSRFE0VFV4bFZWWXdaR2czZDBoMlFrbGtTRnB5VlZaM01HdHlUekF6VVRrd1IyZ3ZWMnhRVVRkWk4xUkRLMUJCYURoS1ZDc3JXRVJhY21OdWEwOHJRa1kwUjNacWR6WmpWaTlIV2tWYWVUbElORzF4VURoWFJrRTVZVGhCUkhCb1ltRlZWMDFFTkdWUk4yUm9ZekJwVlV3MlIxaEJkREJxVVhZMWVuSTNkMk5QUVU4eVZsRkxTM3BJVlVOTmVuSTFWSGhSS3pWcFdIWXhLM28yYm5KNVJVSnVSbUprYlcxUVFXSTRRV1pLWlRKNllrODJUVVF5T0ZkSFZtSmtiV28zWjFWMVVFUnpiR0V5TUdSdE5YZEZUR2ROVEVGMFQyeDBORE14VW1SRlZuSldSblJJV21sVlp6WlhRU3ROVmk5VlYyOUNZV1JRVVRaelRubzJPRlpDYjJ0UGNuTkJOa0ZKYlVGTlpWSjJVM2g2YVRBMWFFcE5hMDQyVW5sWU5WQndiazR6VEV0bmQzaFFSWEF4WkVOVWVHWlpkRXB0T0dsMmQwSjBRMDR2UWxCYUswVlFRVlF3VldkRFdFRXdUM1IxVHpOQ1QweFdZamhqVDBKME5FRjBhVTFXUnpoS1kybDZOMGRVYldWbFpXc3pVSFY1ZEZOd05rSXZRVTVOUW5wWloyaGplR2cwUlVocVVUTmtNR1J4Ym1FM1JGVXJOMDEzWTI4M1QweHJRMVZtUkZaUFRIcHZOMnA0VG5Nd1Z6VkdNMnBST0c0MVMyVTJaSEpaYUdoak9VMDBSV1puVUhWUVJFNHliM3BWWkhab1oySldVVEowUW1kemFrcDVTR2N3VTFwaVdXbGlVWEpTUVRsM01YRnRWRGhUT1had1QyUXdRa3BJZEdWNGEyZE5kRXBMYzBaMmJXOVZWMlV5U1dsRVVHbFROMnAzTlVaU1RtcDBNWE56TjI4M1FsUnFkekJGT1hkd0wzSmtNVXRyYW5CVUsyczBNRkF6VlRGelpHZE9aa2xhV0ZsWGJVUlNlVnB2T0V3d2JqSXdhWFZUTms5NU1YbEdkRzVGYkV0UVpFRk9WbFE0V1ZGcmNsZElZVEpOVGpac00wRjFZVlpCTVU5clIzQkpjUzl2UTBwQldHNXhVa2RCZUdwQ2JFaElZV05vVjFobk1VMXlVVU5SU1hKa2RFSXhTVFF6TW5RNEswUkpObGN3WTJWa2RGWkJMMjg1UlZwNVkyb3JWMk1yWTIwcmRFNUVObk5wT0RkMVFtMWhZMDFvUTBaVFdrUlZjMVZLVm5wNVEzWjRNMDVQUzFWblQyRkJiRk54VjFoYUsyVkNjRUZXUjFsWE5VaEZUMEpWTkdOMGNFRkdSMWxYT0VOeFVTOUJjMmRxTVd4bVN6bDFhMGwzUVVGQlFVSktVbFUxUlhKclNtZG5aejA5SWk4K0RRbzhMMlJsWm5NK0RRbzhMM04yWno0TkNnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIzYVdSMGFEMGlPRElpSUdobGFXZG9kRDBpT0RJaUlIWnBaWGRDYjNnOUlqQWdNQ0E0TWlBNE1pSWdabWxzYkQwaWJtOXVaU0lnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JajROQ2p4d1lYUm9JR1E5SWswMU5DQXdTREk0UXpFeUxqVXpOaUF3SURBZ01USXVOVE0ySURBZ01qaFdOVFJETUNBMk9TNDBOalFnTVRJdU5UTTJJRGd5SURJNElEZ3lTRFUwUXpZNUxqUTJOQ0E0TWlBNE1pQTJPUzQwTmpRZ09ESWdOVFJXTWpoRE9ESWdNVEl1TlRNMklEWTVMalEyTkNBd0lEVTBJREJhSWlCbWFXeHNQU0lqUmtaR05rUXpJaTgrRFFvOGNHRjBhQ0JrUFNKTk5EVXVOVE0wSURRMkxqYzNPREZETkRVdU5EQTNOeUEwTmk0M056Z3hJRFExTGpJNE1qVWdORFl1TnpVek1pQTBOUzR4TmpVNElEUTJMamN3TkRoRE5EVXVNRFE1TVNBME5pNDJOVFkxSURRMExqazBNekVnTkRZdU5UZzFOaUEwTkM0NE5UTTRJRFEyTGpRNU5qTkRORFF1TnpZME5DQTBOaTQwTURjZ05EUXVOamt6TlNBME5pNHpNREE1SURRMExqWTBOVElnTkRZdU1UZzBNa00wTkM0MU9UWTVJRFEyTGpBMk56VWdORFF1TlRjeUlEUTFMamswTWpRZ05EUXVOVGN5SURRMUxqZ3hOa00wTkM0MU56SWdORFV1TmpnNU55QTBOQzQxT1RZNUlEUTFMalUyTkRZZ05EUXVOalExTWlBME5TNDBORGM1UXpRMExqWTVNelVnTkRVdU16TXhNaUEwTkM0M05qUTBJRFExTGpJeU5URWdORFF1T0RVek9DQTBOUzR4TXpVNFF6UTBMamswTXpFZ05EVXVNRFEyTlNBME5TNHdORGt4SURRMExqazNOVFlnTkRVdU1UWTFPQ0EwTkM0NU1qY3pRelExTGpJNE1qVWdORFF1T0RjNE9TQTBOUzQwTURjM0lEUTBMamcxTkNBME5TNDFNelFnTkRRdU9EVTBTRFE1TGpBM01rTTFNQzQyTkRFMklEUTBMamcySURVeUxqRTFNVFVnTkRRdU1qVXlNU0ExTXk0eU56a2dORE11TVRaRE5UTXVPREk1T0NBME1pNDJNeUExTkM0eU5qZ2dOREV1T1RrME1pQTFOQzQxTmpjeklEUXhMakk1TURsRE5UUXVPRFkyTmlBME1DNDFPRGMxSURVMUxqQXlNRGdnTXprdU9ETXdPU0ExTlM0d01qQTRJRE01TGpBMk5qVkROVFV1TURJd09DQXpPQzR6TURJeElEVTBMamcyTmpZZ016Y3VOVFExTmlBMU5DNDFOamN6SURNMkxqZzBNakpETlRRdU1qWTRJRE0yTGpFek9EZ2dOVE11T0RJNU9DQXpOUzQxTURNeElEVXpMakkzT1NBek5DNDVOek5ETlRJdU1UVXhOU0F6TXk0NE9ERWdOVEF1TmpReE5pQXpNeTR5TnpNZ05Ea3VNRGN5SURNekxqSTNPVU0wT0M0NE5EWWdNek11TWpjNUlEUTRMalkwTVNBek15NHlPRGdnTkRndU5EWXhJRE16TGpNd05rTTBPQzR5TmpFZ016TXVNekkySURRNExqQTJNU0F6TXk0ek5UVTBJRFEzTGpnMk1TQXpNeTR6T1RSRE5EY3VOak0xTkNBek15NDBOREE0SURRM0xqUXdNRFlnTXpNdU5EQTNOQ0EwTnk0eE9UWTVJRE16TGpJNU9UZERORFl1T1Rrek1pQXpNeTR4T1RJZ05EWXVPRE16TkNBek15NHdNVFk0SURRMkxqYzBOU0F6TWk0NE1EUXhRelEyTGpFMU56UWdNekV1TXpVMElEUTFMakUwTkRJZ016QXVNVEUxT1NBME15NDRNemtnTWprdU1qVXpRelF5TGpNeE16TWdNamd1TWpRM05pQTBNQzQwT1RFeklESTNMamM1TURZZ016Z3VOamN4T0NBeU55NDVOVFk0UXpNMkxqZzFNaklnTWpndU1USXpNU0F6TlM0eE5ETXhJREk0TGprd01qZ2dNek11T0RJMUlETXdMakUyT0VNek15NHdPVFlnTXpBdU9EY3dOQ0F6TWk0MU1UWWdNekV1TnpFeU5DQXpNaTR4TVRrMElETXlMalkwTXpkRE16RXVOekl5T1NBek15NDFOelV4SURNeExqVXhPQ0F6TkM0MU56WTRJRE14TGpVeE55QXpOUzQxT0RsRE16RXVOVEUzSURNMUxqWXhOQ0F6TVM0MU1UY2dNelV1TmpRZ016RXVOVEUzSURNMUxqWTJOVll6TlM0M01EVXhRek14TGpVeE5UUWdNelV1T1RZeU55QXpNUzQwTVRFMklETTJMakl3T1RFZ016RXVNakk0TkNBek5pNHpPVEF5UXpNeExqQTBOVElnTXpZdU5UY3hOQ0F6TUM0M09UYzJJRE0yTGpZM01qUWdNekF1TlRRZ016WXVOamN4U0RNd0xqUTROVXd6TUM0ek1UWWdNell1TmpZelNETXdMakU0T0VNeU9TNHdOemN4SURNMkxqWTFPVE1nTWpndU1EQTROeUF6Tnk0d09EazVJREkzTGpJeE1TQXpOeTQ0TmpORE1qWXVPREl4SURNNExqSXpPQ0F5Tmk0MU1UQTRJRE00TGpZNE56Y2dNall1TWprNE9DQXpPUzR4T0RVMVF6STJMakE0TmprZ016a3VOamd6TWlBeU5TNDVOemMzSURRd0xqSXhPRFlnTWpVdU9UYzNOeUEwTUM0M05UazFRekkxTGprM056Y2dOREV1TXpBd05TQXlOaTR3T0RZNUlEUXhMamd6TlRrZ01qWXVNams0T0NBME1pNHpNek0yUXpJMkxqVXhNRGdnTkRJdU9ETXhNeUF5Tmk0NE1qRWdORE11TWpneE1TQXlOeTR5TVRFZ05ETXVOalUyUXpJNExqQXdPRGdnTkRRdU5ESTVNU0F5T1M0d056Y3hJRFEwTGpnMU9UY2dNekF1TVRnNElEUTBMamcxTmpGSU16UXVPVFJETXpVdU1UazFNU0EwTkM0NE5UWXhJRE0xTGpRek9UZ2dORFF1T1RVM05DQXpOUzQyTWpBeUlEUTFMakV6TnpoRE16VXVPREF3TmlBME5TNHpNVGd5SURNMUxqa3dNaUEwTlM0MU5qSTVJRE0xTGprd01pQTBOUzQ0TVRoRE16VXVPVEF5SURRMkxqQTNNeklnTXpVdU9EQXdOaUEwTmk0ek1UYzVJRE0xTGpZeU1ESWdORFl1TkRrNE0wTXpOUzQwTXprNElEUTJMalkzT0RjZ016VXVNVGsxTVNBME5pNDNPQ0F6TkM0NU5DQTBOaTQzT0Vnek1DNHhPRGhETWpndU5UVTFNaUEwTmk0M09EVTBJREkyTGprNE5Ea2dORFl1TVRVeU9DQXlOUzQ0TVRJZ05EVXVNREUzUXpJMUxqSXpPRE1nTkRRdU5EWTJOQ0F5TkM0M09ERTVJRFF6TGpnd05UVWdNalF1TkRjd01TQTBNeTR3TnpReFF6STBMakUxT0RNZ05ESXVNelF5TmlBeU15NDVPVGMySURReExqVTFOVGNnTWpNdU9UazNOaUEwTUM0M05qQTFRekl6TGprNU56WWdNemt1T1RZMU5DQXlOQzR4TlRneklETTVMakUzT0RVZ01qUXVORGN3TVNBek9DNDBORGRETWpRdU56Z3hPU0F6Tnk0M01UVTFJREkxTGpJek9ETWdNemN1TURVME5pQXlOUzQ0TVRJZ016WXVOVEEwUXpJMkxqZ3pNVEVnTXpVdU5URXpPU0F5T0M0eE5UYzBJRE0wTGprd01Ea2dNamt1TlRjeUlETTBMamMyTmtNeU9TNDNOelV4SURNeUxqVXdNRGtnTXpBdU56ZzRNU0F6TUM0ek9EUTVJRE15TGpReU5TQXlPQzQ0TURaRE16UXVNRGN5T0NBeU55NHlNakl4SURNMkxqSXhNRGNnTWpZdU1qUTJNaUF6T0M0ME9EY2dNall1TURNNVF6UXdMamMyTXpNZ01qVXVPRE14T0NBME15NHdOREl5SURJMkxqUXdOVFlnTkRRdU9UUTVJREkzTGpZMk5qRkRORFl1TXpVNU1TQXlPQzQxT1RrMElEUTNMalV3TVRFZ01qa3VPRGcwT0NBME9DNHlOaklnTXpFdU16azFRelE0TGpVME5pQXpNUzR6TmpjZ05EZ3VPREUxSURNeExqTTFNeUEwT1M0d05qSWdNekV1TXpVelF6VXhMakUxTXpjZ016RXVNelEyTWlBMU15NHhOalV6SURNeUxqRTFOamtnTlRRdU5qWTRJRE16TGpZeE1rTTFOUzQwTURFNUlETTBMak14TnpRZ05UVXVPVGcxTnlBek5TNHhOak0zSURVMkxqTTRORFlnTXpZdU1UQXdNa00xTmk0M09ETTBJRE0zTGpBek5qY2dOVFl1T1RnNUlETTRMakEwTkRFZ05UWXVPVGc1SURNNUxqQTJNa00xTmk0NU9Ea2dOREF1TURnZ05UWXVOemd6TkNBME1TNHdPRGMwSURVMkxqTTRORFlnTkRJdU1ESXpPVU0xTlM0NU9EVTNJRFF5TGprMk1EUWdOVFV1TkRBeE9TQTBNeTQ0TURZM0lEVTBMalkyT0NBME5DNDFNVEpETlRNdU1UWTFNeUEwTlM0NU5qY3lJRFV4TGpFMU16Y2dORFl1TnpjM09DQTBPUzR3TmpJZ05EWXVOemN4VERRMUxqVXpOQ0EwTmk0M056Z3hXaUlnWm1sc2JEMGlJek16TXpNek15SXZQZzBLUEhCaGRHZ2daRDBpVFRNNUxqVXhNU0F6Tmk0eE1UY3hRek01TGpVeE1TQXpOUzQ0TlRRNElETTVMall4TlRJZ016VXVOakF6TWlBek9TNDRNREEzSURNMUxqUXhOemRETXprdU9UZzJNU0F6TlM0eU16SXpJRFF3TGpJek56Y2dNelV1TVRJNE1TQTBNQzQxSURNMUxqRXlPREZETkRBdU56WXlNeUF6TlM0eE1qZ3hJRFF4TGpBeE16Z2dNelV1TWpNeU15QTBNUzR4T1RreklETTFMalF4TnpkRE5ERXVNemcwT0NBek5TNDJNRE15SURReExqUTRPU0F6TlM0NE5UUTRJRFF4TGpRNE9TQXpOaTR4TVRjeFZqVTFMakF6T0RGRE5ERXVORGc1SURVMUxqTXdNRFFnTkRFdU16ZzBPQ0ExTlM0MU5URTVJRFF4TGpFNU9UTWdOVFV1TnpNM05FTTBNUzR3TVRNNElEVTFMamt5TWprZ05EQXVOell5TXlBMU5pNHdNamN4SURRd0xqVWdOVFl1TURJM01VTTBNQzR5TXpjM0lEVTJMakF5TnpFZ016a3VPVGcyTVNBMU5TNDVNakk1SURNNUxqZ3dNRGNnTlRVdU56TTNORU16T1M0Mk1UVXlJRFUxTGpVMU1Ua2dNemt1TlRFeElEVTFMak13TURRZ016a3VOVEV4SURVMUxqQXpPREZXTXpZdU1URTNNVm9pSUdacGJHdzlJaU16TXpNek16TWlMejROQ2p4d1lYUm9JR1E5SWswME55NHpNRElnTkRBdU56azRNVU0wTnk0ek9UTXpJRFF3TGpnNE5UZ2dORGN1TkRZMklEUXdMams1TVRFZ05EY3VOVEUxTmlBME1TNHhNRGMyUXpRM0xqVTJOVE1nTkRFdU1qSTBNU0EwTnk0MU9UQTVJRFF4TGpNME9UUWdORGN1TlRrd09TQTBNUzQwTnpZeFF6UTNMalU1TURrZ05ERXVOakF5TnlBME55NDFOalV6SURReExqY3lPREVnTkRjdU5URTFOaUEwTVM0NE5EUTJRelEzTGpRMk5pQTBNUzQ1TmpFeElEUTNMak01TXpNZ05ESXVNRFkyTXlBME55NHpNRElnTkRJdU1UVTBNVU0wTnk0eE1UUTFJRFF5TGpNek5ESWdORFl1T0RZME5TQTBNaTQwTXpRNElEUTJMall3TkRVZ05ESXVORE0wT0VNME5pNHpORFExSURReUxqUXpORGdnTkRZdU1EazBOU0EwTWk0ek16UXlJRFExTGprd055QTBNaTR4TlRReFREUXdMalV3TnlBek5pNDROVFF4VERNMUxqRXdOeUEwTWk0eE5UUXhRek0wTGpreE9UVWdOREl1TXpNME1pQXpOQzQyTmprMUlEUXlMalF6TkRnZ016UXVOREE1TlNBME1pNDBNelE0UXpNMExqRTBPVFVnTkRJdU5ETTBPQ0F6TXk0NE9UazFJRFF5TGpNek5ESWdNek11TnpFeUlEUXlMakUxTkRGRE16TXVOakl3TmlBME1pNHdOall6SURNekxqVTBOemtnTkRFdU9UWXhNU0F6TXk0ME9UZ3pJRFF4TGpnME5EWkRNek11TkRRNE5pQTBNUzQzTWpneElETXpMalF5TXlBME1TNDJNREkzSURNekxqUXlNeUEwTVM0ME56WXhRek16TGpReU15QTBNUzR6TkRrMElETXpMalEwT0RZZ05ERXVNakkwTVNBek15NDBPVGd6SURReExqRXdOelpETXpNdU5UUTNPU0EwTUM0NU9URXhJRE16TGpZeU1EWWdOREF1T0RnMU9DQXpNeTQzTVRJZ05EQXVOems0TVV3ek9TNDRNVElnTXpRdU9ERXlNVU16T1M0NU9UazFJRE0wTGpZek1pQTBNQzR5TkRrMElETTBMalV6TVRRZ05EQXVOVEE1TlNBek5DNDFNekUwUXpRd0xqYzJPVFVnTXpRdU5UTXhOQ0EwTVM0d01UazBJRE0wTGpZek1pQTBNUzR5TURjZ016UXVPREV5TVV3ME55NHpNRFk1SURRd0xqYzVPREZJTkRjdU16QXlXaUlnWm1sc2JEMGlJek16TXpNek15SXZQZzBLUEhCaGRHZ2daRDBpVFRNNUxqVXhNU0ExTlM0d016aFdNemN1T0RJeFRETTFMakE1TnlBME1pNHhOVEE0UXpNMExqa3dPVE1nTkRJdU16TXlOQ0F6TkM0Mk5UZ3lJRFF5TGpRek5DQXpOQzR6T1RjZ05ESXVORE0wUXpNMExqRXpOVGdnTkRJdU5ETTBJRE16TGpnNE5EZ2dOREl1TXpNeU5DQXpNeTQyT1RjZ05ESXVNVFV3T0VNek15NDJNRFU0SURReUxqQTJNeUF6TXk0MU16TXlJRFF4TGprMU56Z2dNek11TkRnek5pQTBNUzQ0TkRFelF6TXpMalF6TkRFZ05ERXVOekkwT0NBek15NDBNRGcySURReExqVTVPVFVnTXpNdU5EQTROaUEwTVM0ME56STRRek16TGpRd09EWWdOREV1TXpRMk1pQXpNeTQwTXpReElEUXhMakl5TURrZ016TXVORGd6TmlBME1TNHhNRFEwUXpNekxqVXpNeklnTkRBdU9UZzNPU0F6TXk0Mk1EVTRJRFF3TGpnNE1qY2dNek11TmprM0lEUXdMamM1TkRsTU16a3VOemszSURNMExqZ3dPVU16T1M0NU9EUTVJRE0wTGpZeU56Y2dOREF1TWpNMU9DQXpOQzQxTWpZeklEUXdMalE1TmprZ016UXVOVEkyTTBNME1DNDNOVGd4SURNMExqVXlOak1nTkRFdU1EQTVNU0F6TkM0Mk1qYzNJRFF4TGpFNU55QXpOQzQ0TURsTU5EY3VNamszSURRd0xqYzVORGxETkRjdU16ZzRNaUEwTUM0NE9ESTNJRFEzTGpRMk1EZ2dOREF1T1RnM09TQTBOeTQxTVRBMElEUXhMakV3TkRSRE5EY3VOVFU1T1NBME1TNHlNakE1SURRM0xqVTROVFFnTkRFdU16UTJNaUEwTnk0MU9EVTBJRFF4TGpRM01qaERORGN1TlRnMU5DQTBNUzQxT1RrMUlEUTNMalUxT1RrZ05ERXVOekkwT0NBME55NDFNVEEwSURReExqZzBNVE5ETkRjdU5EWXdPQ0EwTVM0NU5UYzRJRFEzTGpNNE9ESWdOREl1TURZeklEUTNMakk1TnlBME1pNHhOVEE0UXpRM0xqRXdPVFlnTkRJdU16TXdPU0EwTmk0NE5UazRJRFF5TGpRek1UWWdORFl1TmlBME1pNDBNekUyUXpRMkxqTTBNREVnTkRJdU5ETXhOaUEwTmk0d09UQXpJRFF5TGpNek1Ea2dORFV1T1RBeklEUXlMakUxTURoTU5ERXVORGc1SURNM0xqZ3lNVlkxTlM0d016aEROREV1TkRjM05pQTFOUzR5T1RJMklEUXhMak0yT0RNZ05UVXVOVE15T0NBME1TNHhPRFF4SURVMUxqY3dPRGxETkRBdU9UazVPU0ExTlM0NE9EVXhJRFF3TGpjMU5Ea2dOVFV1T1Rnek15QTBNQzQxSURVMUxqazRNek5ETkRBdU1qUTFNU0ExTlM0NU9ETXpJRFF3TGpBd01ERWdOVFV1T0RnMU1TQXpPUzQ0TVRVNUlEVTFMamN3T0RsRE16a3VOak14TnlBMU5TNDFNekk0SURNNUxqVXlNalFnTlRVdU1qa3lOaUF6T1M0MU1URWdOVFV1TURNNFdrMDBOUzQxTXpReElEUTJMamMzT0VNME5TNHlOemc1SURRMkxqYzNPQ0EwTlM0d016UXlJRFEyTGpZM05qY2dORFF1T0RVek9DQTBOaTQwT1RZelF6UTBMalkzTXpNZ05EWXVNekUxT1NBME5DNDFOeklnTkRZdU1EY3hJRFEwTGpVM01pQTBOUzQ0TVRVNVF6UTBMalUzTWlBME5TNDFOakEzSURRMExqWTNNek1nTkRVdU16RTJNU0EwTkM0NE5UTTRJRFExTGpFek5UZERORFV1TURNME1pQTBOQzQ1TlRVeklEUTFMakkzT0RrZ05EUXVPRFUwSURRMUxqVXpOREVnTkRRdU9EVTBTRFE1TGpBM01VTTFNQzQyTkRFeUlEUTBMamcyTURJZ05USXVNVFV4TmlBME5DNHlOVEUzSURVekxqSTNPVEVnTkRNdU1UVTRPVU0xTXk0NE1qazVJRFF5TGpZeU9EZ2dOVFF1TWpZNElEUXhMams1TXpFZ05UUXVOVFkzTXlBME1TNHlPRGszUXpVMExqZzJOallnTkRBdU5UZzJOQ0ExTlM0d01qQTVJRE01TGpneU9UZ2dOVFV1TURJd09TQXpPUzR3TmpVMFF6VTFMakF5TURrZ016Z3VNekF4SURVMExqZzJOallnTXpjdU5UUTBOQ0ExTkM0MU5qY3pJRE0yTGpnME1VTTFOQzR5TmpnZ016WXVNVE0zTmlBMU15NDRNams1SURNMUxqVXdNVGtnTlRNdU1qYzVNU0F6TkM0NU56RTVRelV5TGpFMU1USWdNek11T0RjNU9DQTFNQzQyTkRFZ016TXVNamN5SURRNUxqQTNNU0F6TXk0eU56aERORGd1T0RRMklETXpMakkzT0NBME9DNDJOREV4SURNekxqSTROamtnTkRndU5EWXhNU0F6TXk0ek1EUTVRelE0TGpJMU9UY2dNek11TXpJek9DQTBPQzR3TlRreklETXpMak0xTXpNZ05EY3VPRFl4SURNekxqTTVNME0wTnk0Mk16VTBJRE16TGpRek9UVWdORGN1TkRBd05pQXpNeTQwTURVNUlEUTNMakU1TnlBek15NHlPVGd6UXpRMkxqazVNelFnTXpNdU1Ua3dOaUEwTmk0NE16TTJJRE16TGpBeE5UVWdORFl1TnpRMUlETXlMamd3TWpsRE5EWXVNVFUzTlNBek1TNHpOVEkxSURRMUxqRTBORE1nTXpBdU1URTBNU0EwTXk0NE16a2dNamt1TWpVd09VTTBNaTR6TVRNMElESTRMakkwTlRnZ05EQXVORGt4TmlBeU55NDNPRGc0SURNNExqWTNNaklnTWpjdU9UVTFRek0yTGpnMU1qa2dNamd1TVRJeE15QXpOUzR4TkRReElESTRMamt3TVNBek15NDRNallnTXpBdU1UWTJRek16TGpBNU55QXpNQzQ0TmpneklETXlMalV4TmprZ016RXVOekV3TWlBek1pNHhNakEwSURNeUxqWTBNVFpETXpFdU56SXpPQ0F6TXk0MU56STVJRE14TGpVeE9Ea2dNelF1TlRjME5pQXpNUzQxTVRjNUlETTFMalU0TmpsRE16RXVOVEUzT1NBek5TNDJNVEU1SURNeExqVXhOemtnTXpVdU5qTTVJRE14TGpVeE56a2dNelV1TmpZMFZqTTFMamN3TkRGRE16RXVOVEUzTXlBek5TNDRNekUySURNeExqUTVNVFlnTXpVdU9UVTNPQ0F6TVM0ME5ESXhJRE0yTGpBM05UUkRNekV1TXpreU55QXpOaTR4T1RNZ016RXVNekl3TlNBek5pNHlPVGsySURNeExqSXlPVGNnTXpZdU16ZzVORU16TVM0eE16a2dNell1TkRjNU1TQXpNUzR3TXpFMUlETTJMalUxTURJZ016QXVPVEV6TXlBek5pNDFPVGd6UXpNd0xqYzVOVElnTXpZdU5qUTJOU0F6TUM0Mk5qZzJJRE0yTGpZM01EY2dNekF1TlRReElETTJMalkyT1RsSU16QXVORGcyVERNd0xqTXhPQ0F6Tmk0Mk5qTklNekF1TVRnNU9VTXlPUzR3TnprZ016WXVOalU0T0NBeU9DNHdNVEExSURNM0xqQTRPVFVnTWpjdU1qRXpJRE0zTGpnMk0wTXlOaTQ0TWpJNUlETTRMakl6TnpjZ01qWXVOVEV5TmlBek9DNDJPRGMwSURJMkxqTXdNRGNnTXprdU1UZzFRekkyTGpBNE9EY2dNemt1TmpneU55QXlOUzQ1TnprMElEUXdMakl4T0RFZ01qVXVPVGM1TkNBME1DNDNOVGxETWpVdU9UYzVOQ0EwTVM0eU9UazVJREkyTGpBNE9EY2dOREV1T0RNMU15QXlOaTR6TURBM0lEUXlMak16TTBNeU5pNDFNVEkySURReUxqZ3pNRFlnTWpZdU9ESXlPU0EwTXk0eU9EQXlJREkzTGpJeE15QTBNeTQyTlRWRE1qZ3VNREV3TmlBME5DNDBNamd6SURJNUxqQTNPU0EwTkM0NE5UZzVJRE13TGpFNE9Ua2dORFF1T0RVME9VZ3pOQzQ1TkRKRE16VXVNVGszTWlBME5DNDROVFE1SURNMUxqUTBNVGdnTkRRdU9UVTJNeUF6TlM0Mk1qSXlJRFExTGpFek5qZERNelV1T0RBeU5pQTBOUzR6TVRjeElETTFMamt3TkRFZ05EVXVOVFl4TnlBek5TNDVNRFF4SURRMUxqZ3hOamhETXpVdU9UQTBNU0EwTmk0d056SWdNelV1T0RBeU5pQTBOaTR6TVRZNUlETTFMall5TWpJZ05EWXVORGszTTBNek5TNDBOREU0SURRMkxqWTNOemNnTXpVdU1UazNNaUEwTmk0M056a2dNelF1T1RReUlEUTJMamMzT1Vnek1DNHhPRGs1UXpJNExqVTFOamtnTkRZdU56ZzBOU0F5Tmk0NU9EWXpJRFEyTGpFMU1Ua2dNalV1T0RFeklEUTFMakF4TmpGRE1qVXVNalF3TVNBME5DNDBOalVnTWpRdU56ZzBNeUEwTXk0NE1ETTVJREkwTGpRM015QTBNeTR3TnpJMVF6STBMakUyTVRjZ05ESXVNelF4TVNBeU5DNHdNREV5SURReExqVTFORFFnTWpRdU1EQXhNaUEwTUM0M05UazFRekkwTGpBd01USWdNemt1T1RZME5pQXlOQzR4TmpFM0lETTVMakUzTnprZ01qUXVORGN6SURNNExqUTBOalZETWpRdU56ZzBNeUF6Tnk0M01UVXhJREkxTGpJME1ERWdNemN1TURVek9TQXlOUzQ0TVRNZ016WXVOVEF5T1VNeU5pNDRNelF5SURNMUxqVXhNelFnTWpndU1UWXlNeUF6TkM0NU1ERTRJREk1TGpVM09DQXpOQzQzTmpsRE1qa3VOemd4SURNeUxqVXdOQ0F6TUM0M09UTTJJRE13TGpNNE9ERWdNekl1TkRNd01TQXlPQzQ0TURsRE16UXVNRGMzT1NBeU55NHlNalV4SURNMkxqSXhOVGdnTWpZdU1qUTVNU0F6T0M0ME9USXhJREkyTGpBME1UbEROREF1TnpZNE15QXlOUzQ0TXpRM0lEUXpMakEwTnpJZ01qWXVOREE0TlNBME5DNDVOVFFnTWpjdU5qWTRPVU0wTmk0ek5qUTBJREk0TGpZd01qUWdORGN1TlRBMk5DQXlPUzQ0T0RneUlEUTRMakkyTnlBek1TNHpPVGc1UXpRNExqVTFNU0F6TVM0ek56QTVJRFE0TGpneUlETXhMak0xTmprZ05Ea3VNRFkzSURNeExqTTFOamxETlRFdU1UVTVNU0F6TVM0ek5TQTFNeTR4TnpFZ016SXVNVFl3TnlBMU5DNDJOelFnTXpNdU5qRTFPVU0xTlM0ME1EYzVJRE0wTGpNeU1UTWdOVFV1T1RreE9DQXpOUzR4TmpjM0lEVTJMak01TURZZ016WXVNVEEwTWtNMU5pNDNPRGsxSURNM0xqQTBNRGNnTlRZdU9UazFNU0F6T0M0d05EZ2dOVFl1T1RrMU1TQXpPUzR3TmpVNVF6VTJMams1TlRFZ05EQXVNRGd6T0NBMU5pNDNPRGsxSURReExqQTVNVE1nTlRZdU16a3dOaUEwTWk0d01qYzRRelUxTGprNU1UZ2dOREl1T1RZME15QTFOUzQwTURjNUlEUXpMamd4TURjZ05UUXVOamMwSURRMExqVXhOakZETlRNdU1UY3hJRFExTGprM01UTWdOVEV1TVRVNU1TQTBOaTQzT0RFM0lEUTVMakEyTnlBME5pNDNOelE1VERRMUxqVXpOREVnTkRZdU56YzRXaUlnWm1sc2JEMGlJMFEyUVVJd01DSXZQZzBLUEM5emRtYytEUW89XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpT0RJaUlHaGxhV2RvZEQwaU9ESWlJSFpwWlhkQ2IzZzlJakFnTUNBNE1pQTRNaUlnWm1sc2JEMGlibTl1WlNJZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWo0TkNqeHdZWFJvSUdROUlrMDFOQ0F3U0RJNFF6RXlMalV6TmlBd0lEQWdNVEl1TlRNMklEQWdNamhXTlRSRE1DQTJPUzQwTmpRZ01USXVOVE0ySURneUlESTRJRGd5U0RVMFF6WTVMalEyTkNBNE1pQTRNaUEyT1M0ME5qUWdPRElnTlRSV01qaERPRElnTVRJdU5UTTJJRFk1TGpRMk5DQXdJRFUwSURCYUlpQm1hV3hzUFNJalJqUkdORVpHSWk4K0RRbzhjR0YwYUNCa1BTSk5ORFl1TmpnMElEVTVMall4TnpsTU5ETXVNelk0SURVMkxqSXpPRXcwTUM0d05URWdOVGt1TmpFM09VTXpPUzQ1TXpNNElEVTVMamN6TnpnZ016a3VOemt6T0NBMU9TNDRNek15SURNNUxqWXpPVElnTlRrdU9EazRNa016T1M0ME9EUTNJRFU1TGprMk16SWdNemt1TXpFNE55QTFPUzQ1T1RZMklETTVMakUxTVNBMU9TNDVPVFkyUXpNNExqazRNek1nTlRrdU9UazJOaUF6T0M0NE1UY3pJRFU1TGprMk16SWdNemd1TmpZeU9DQTFPUzQ0T1RneVF6TTRMalV3T0RJZ05Ua3VPRE16TWlBek9DNHpOamd5SURVNUxqY3pOemdnTXpndU1qVXhJRFU1TGpZeE56bERNemd1TURFeElEVTVMak0zTVRnZ016Y3VPRGMyT0NBMU9TNHdOREUzSURNM0xqZzNOamdnTlRndU5qazRRek0zTGpnM05qZ2dOVGd1TXpVME15QXpPQzR3TVRFZ05UZ3VNREkwTWlBek9DNHlOVEVnTlRjdU56YzRNVXcwTVM0MU5qZ2dOVFF1TXprM09Vd3pPQzR5TlRFZ05URXVNREU1UXpNNExqQXhNU0ExTUM0M056STVJRE0zTGpnM05qZ2dOVEF1TkRReU9TQXpOeTQ0TnpZNElEVXdMakE1T1RGRE16Y3VPRGMyT0NBME9TNDNOVFUwSURNNExqQXhNU0EwT1M0ME1qVXhJRE00TGpJMU1TQTBPUzR4TnpsRE16Z3VNelk0TXlBME9TNHdOVGt5SURNNExqVXdPRFFnTkRndU9UWTBNU0F6T0M0Mk5qSTVJRFE0TGpnNU9USkRNemd1T0RFM05DQTBPQzQ0TXpReUlETTRMams0TXpRZ05EZ3VPREF3T0NBek9TNHhOVEVnTkRndU9EQXdPRU16T1M0ek1UZzJJRFE0TGpnd01EZ2dNemt1TkRnME5pQTBPQzQ0TXpReUlETTVMall6T1RFZ05EZ3VPRGs1TWtNek9TNDNPVE0ySURRNExqazJOREVnTXprdU9UTXpOeUEwT1M0d05Ua3lJRFF3TGpBMU1TQTBPUzR4TnpsTU5ETXVNelk0SURVeUxqVTFPVEZNTkRZdU5qZzBJRFE1TGpFM09VTTBOaTQ0TURFeklEUTVMakExT1RJZ05EWXVPVFF4TXlBME9DNDVOalF4SURRM0xqQTVOVGtnTkRndU9EazVNa00wTnk0eU5UQTBJRFE0TGpnek5ESWdORGN1TkRFMk5DQTBPQzQ0TURBNElEUTNMalU0TkNBME9DNDRNREE0UXpRM0xqYzFNVFlnTkRndU9EQXdPQ0EwTnk0NU1UYzJJRFE0TGpnek5ESWdORGd1TURjeU1TQTBPQzQ0T1RreVF6UTRMakl5TmpjZ05EZ3VPVFkwTVNBME9DNHpOalkzSURRNUxqQTFPVElnTkRndU5EZzBJRFE1TGpFM09VTTBPQzQzTWpNM0lEUTVMalF5TlRJZ05EZ3VPRFUzT0NBME9TNDNOVFUxSURRNExqZzFOemdnTlRBdU1EazVNVU0wT0M0NE5UYzRJRFV3TGpRME1qZ2dORGd1TnpJek55QTFNQzQzTnpJNElEUTRMalE0TkNBMU1TNHdNVGxNTkRVdU1UWTRJRFUwTGpNNU56bE1ORGd1TkRnMElEVTNMamMzT0RGRE5EZ3VOekl6T1NBMU9DNHdNalF5SURRNExqZzFPRElnTlRndU16VTBNeUEwT0M0NE5UZ3lJRFU0TGpZNU9FTTBPQzQ0TlRneUlEVTVMakEwTVRjZ05EZ3VOekl6T1NBMU9TNHpOekU0SURRNExqUTROQ0ExT1M0Mk1UYzVRelE0TGpNMk5qZ2dOVGt1TnpNM09DQTBPQzR5TWpZNElEVTVMamd6TXpJZ05EZ3VNRGN5TWlBMU9TNDRPVGd5UXpRM0xqa3hOemNnTlRrdU9UWXpNaUEwTnk0M05URTNJRFU1TGprNU5qWWdORGN1TlRnMElEVTVMams1TmpaRE5EY3VOREUyTXlBMU9TNDVPVFkySURRM0xqSTFNRFFnTlRrdU9UWXpNaUEwTnk0d09UVTRJRFU1TGpnNU9ESkRORFl1T1RReE15QTFPUzQ0TXpNeUlEUTJMamd3TVRNZ05Ua3VOek0zT0NBME5pNDJPRFFnTlRrdU5qRTNPVnBOTWpJdU1URTVJRFV6TGpjNFF6SXlMakV6TWpZZ05UTXVNRE0zTWlBeU1pNHpOalV6SURVeUxqTXhORGtnTWpJdU56ZzNPQ0ExTVM0M01ETTVRekl6TGpJeE1EUWdOVEV1TURreU9DQXlNeTQ0TURReElEVXdMall5TURNZ01qUXVORGswTXlBMU1DNHpORFUxUXpJMUxqRTRORFVnTlRBdU1EY3dOaUF5TlM0NU5EQTFJRFV3TGpBd05Ua2dNall1TmpZM05DQTFNQzR4TlRreVF6STNMak01TkRNZ05UQXVNekV5TlNBeU9DNHdOVGs0SURVd0xqWTNOamtnTWpndU5UZ3dNeUExTVM0eU1EZERNamt1TVRBd055QTFNUzQzTXpjeUlESTVMalExTXlBMU1pNDBNRGt6SURJNUxqVTVNamtnTlRNdU1UTTRPVU15T1M0M016STRJRFV6TGpnMk9EVWdNamt1TmpVME1TQTFOQzQyTWpNeklESTVMak0yTmpZZ05UVXVNekE0TTBNeU9TNHdOemt4SURVMUxqazVNelFnTWpndU5UazFOeUExTmk0MU56Z3lJREkzTGprM055QTFOaTQ1T0RrMVF6STNMak0xT0RNZ05UY3VOREF3T0NBeU5pNDJNekU1SURVM0xqWXlNRElnTWpVdU9EZzVJRFUzTGpZeU1ERkRNalF1T0Rnd01TQTFOeTQyTVRBeklESXpMamt4TmpNZ05UY3VNakF3TXlBeU15NHlNRGsySURVMkxqUTRNREpETWpJdU5UQXlPQ0ExTlM0M05qQXlJREl5TGpFeE1Ea2dOVFF1TnpnNE9TQXlNaTR4TWlBMU15NDNPRWd5TWk0eE1UbGFUVEkxTGpnNU1TQTBOeTQ0UXpJMUxqWXpNRGNnTkRjdU9EQXdNaUF5TlM0ek56QTRJRFEzTGpneE9ESWdNalV1TVRFeklEUTNMamcxTkVNeU5TNDVNVGMwSURRMExqazBNRFFnTWpjdU1qUXlNU0EwTWk0eE9UWXlJREk1TGpBeU15QXpPUzQzTlRNNVF6TXdMamd6TnprZ016Y3VNalkwTVNBek15NHhOVEE1SURNMUxqRTNPVE1nTXpVdU9ERTFNU0F6TXk0Mk16RTJRek00TGpRM09USWdNekl1TURnek9TQTBNUzQwTXpZeElETXhMakV3TnpJZ05EUXVORGs0SURNd0xqYzJNemxNTkRFdU56WTVJREk0TGpNME5UbEROREV1TlRFeklESTRMakV4TnlBME1TNHpOVFkySURJM0xqYzVOeklnTkRFdU16TXpNU0F5Tnk0ME5UUTJRelF4TGpNd09UVWdNamN1TVRFeUlEUXhMalF5TURnZ01qWXVOemN6TnlBME1TNDJORE1nTWpZdU5URXlRelF4TGpjMU1UUWdNall1TXpnek15QTBNUzQ0T0RRMUlESTJMakkzTnpnZ05ESXVNRE0wTkNBeU5pNHlNREUwUXpReUxqRTRORE1nTWpZdU1USTFNU0EwTWk0ek5EZ2dNall1TURjNU5DQTBNaTQxTVRVM0lESTJMakEyTnpSRE5ESXVOamd6TlNBeU5pNHdOVFUwSURReUxqZzFNaUF5Tmk0d056Y3lJRFF6TGpBeE1UTWdNall1TVRNeE0wTTBNeTR4TnpBMUlESTJMakU0TlRVZ05ETXVNekUzTkNBeU5pNHlOekV5SURRekxqUTBNeUF5Tmk0ek9ETXhURFE0TGpVNE9DQXpNQzQ1TkRNeFF6UTRMamcwTkNBek1TNHhOekl5SURRNUxqQXdNRFVnTXpFdU5Ea3lNaUEwT1M0d01qUWdNekV1T0RNMVF6UTVMakEwTnpVZ016SXVNVGMzTnlBME9DNDVNell6SURNeUxqVXhOakVnTkRndU56RTBJRE15TGpjM09ERk1ORFF1TWpReElETTRMakF5TWpsRE5EUXVNVE15TmlBek9DNHhOVEUySURRekxqazVPVFVnTXpndU1qVTNOQ0EwTXk0NE5EazFJRE00TGpNek16ZERORE11TmprNU5pQXpPQzQwTVRBeElEUXpMalV6TlRrZ016Z3VORFUxTmlBME15NHpOamdnTXpndU5EWTNOVU0wTXk0eU1EQXlJRE00TGpRM09UVWdORE11TURNeE55QXpPQzQwTlRjMElEUXlMamczTWpRZ016Z3VOREF6TVVNME1pNDNNVE15SURNNExqTTBPRGNnTkRJdU5UWTJOU0F6T0M0eU5qSTVJRFF5TGpRME1TQXpPQzR4TlRBNVF6UXlMakU0TlNBek55NDVNakU1SURReUxqQXlPRFlnTXpjdU5qQXlNU0EwTWk0d01EVXhJRE0zTGpJMU9UVkROREV1T1RneE5TQXpOaTQ1TVRZNUlEUXlMakE1TWpnZ016WXVOVGM0TnlBME1pNHpNVFVnTXpZdU16RTJPVXcwTkM0NE5UZ2dNek11TXpNMVF6UXlMakUwTlRRZ016TXVOakUzTVNBek9TNDFNakl5SURNMExqUTJOVElnTXpjdU1UVTNOeUF6TlM0NE1qUXlRek0wTGpjNU16SWdNemN1TVRnek15QXpNaTQzTkRBeElETTVMakF5TXpJZ016RXVNVE14SURReExqSXlOVEZETWprdU5qQTRJRFF6TGpNd05ETWdNamd1TkRRNU1pQTBOUzQyTWpZNElESTNMamN3TkNBME9DNHdPVFJETWpjdU1URTVOeUEwTnk0NE9UazBJREkyTGpVd056a2dORGN1T0RBd01pQXlOUzQ0T1RJZ05EY3VPRWd5TlM0NE9URmFUVFV6TGpRMU9TQXpNUzQyTnpBNVF6VXpMalEzTWpRZ016QXVPVEk0TVNBMU15NDNNRFE1SURNd0xqSXdOVGtnTlRRdU1USTNOQ0F5T1M0MU9UUTNRelUwTGpVME9UZ2dNamd1T1Rnek5pQTFOUzR4TkRNMElESTRMalV4TURnZ05UVXVPRE16TmlBeU9DNHlNelU0UXpVMkxqVXlNemdnTWpjdU9UWXdPU0ExTnk0eU56azRJREkzTGpnNU5Ua2dOVGd1TURBMk9DQXlPQzR3TkRreFF6VTRMamN6TXpnZ01qZ3VNakF5TWlBMU9TNHpPVGswSURJNExqVTJOallnTlRrdU9USWdNamt1TURrMk4wTTJNQzQwTkRBMUlESTVMall5TmpnZ05qQXVOemt5T1NBek1DNHlPVGc1SURZd0xqa3pNamtnTXpFdU1ESTROa00yTVM0d056STRJRE14TGpjMU9ESWdOakF1T1RrME1TQXpNaTQxTVRJNUlEWXdMamN3TmpjZ016TXVNVGs0UXpZd0xqUXhPVElnTXpNdU9EZ3pNU0ExT1M0NU16VTRJRE0wTGpRMk9ERWdOVGt1TXpFM01TQXpOQzQ0TnprMFF6VTRMalk1T0RRZ016VXVNamt3TnlBMU55NDVOeklnTXpVdU5URXdNU0ExTnk0eU1qa2dNelV1TlRGRE5UWXVNakl3TXlBek5TNDFNREF5SURVMUxqSTFOamNnTXpVdU1Ea3dOU0ExTkM0MU5TQXpOQzR6TnpBMlF6VXpMamcwTXpNZ016TXVOalV3T0NBMU15NDBOVEV5SURNeUxqWTNPVFlnTlRNdU5EWWdNekV1Tmpjd09VZzFNeTQwTlRsYVRUSTVMamd4TVNBek15NDRNVGt4VERJMkxqUTVOQ0F6TUM0ME16bE1Nak11TVRjNElETXpMamd4T1RGRE1qTXVNRFl3TnlBek15NDVNemc0SURJeUxqa3lNRGNnTXpRdU1ETXpPU0F5TWk0M05qWXhJRE0wTGpBNU9EbERNakl1TmpFeE5pQXpOQzR4TmpNNElESXlMalEwTlRZZ016UXVNVGszTXlBeU1pNHlOemdnTXpRdU1UazNNME15TWk0eE1UQTBJRE0wTGpFNU56TWdNakV1T1RRME5DQXpOQzR4TmpNNElESXhMamM0T1RrZ016UXVNRGs0T1VNeU1TNDJNelV6SURNMExqQXpNemtnTWpFdU5EazFNeUF6TXk0NU16ZzRJREl4TGpNM09DQXpNeTQ0TVRreFF6SXhMakV6T0RFZ016TXVOVGN6SURJeExqQXdNemdnTXpNdU1qUXlOeUF5TVM0d01ETTRJRE15TGpnNU9EbERNakV1TURBek9DQXpNaTQxTlRVeUlESXhMakV6T0RFZ016SXVNakkxTVNBeU1TNHpOemdnTXpFdU9UYzVUREkwTGpZNU5TQXlPQzQxT1RreFRESXhMak0zT0NBeU5TNHlNa015TVM0eE16Z3hJREkwTGprM016Z2dNakV1TURBek9DQXlOQzQyTkRNNElESXhMakF3TXpnZ01qUXVNME15TVM0d01ETTRJREl6TGprMU5qTWdNakV1TVRNNE1TQXlNeTQyTWpZZ01qRXVNemM0SURJekxqTTNPVGxETWpFdU5EazFNaUF5TXk0eU5UazVJREl4TGpZek5USWdNak11TVRZME55QXlNUzQzT0RrM0lESXpMakE1T1RaRE1qRXVPVFEwTXlBeU15NHdNelExSURJeUxqRXhNRE1nTWpNdU1EQXhJREl5TGpJM09DQXlNeTR3TURGRE1qSXVORFExTnlBeU15NHdNREVnTWpJdU5qRXhOeUF5TXk0d016UTFJREl5TGpjMk5qTWdNak11TURrNU5rTXlNaTQ1TWpBNUlESXpMakUyTkRjZ01qTXVNRFl3T0NBeU15NHlOVGs1SURJekxqRTNPQ0F5TXk0ek56azVUREkyTGpRNU5DQXlOaTQzTmt3eU9TNDRNVEVnTWpNdU16YzVPVU15T1M0NU1qZ3lJREl6TGpJMU9Ua2dNekF1TURZNE1pQXlNeTR4TmpRM0lETXdMakl5TWpjZ01qTXVNRGs1TmtNek1DNHpOemN6SURJekxqQXpORFVnTXpBdU5UUXpNeUF5TXk0d01ERWdNekF1TnpFeElESXpMakF3TVVNek1DNDROemczSURJekxqQXdNU0F6TVM0d05EUTNJREl6TGpBek5EVWdNekV1TVRrNU15QXlNeTR3T1RrMlF6TXhMak0xTXpnZ01qTXVNVFkwTnlBek1TNDBPVE00SURJekxqSTFPVGtnTXpFdU5qRXhJREl6TGpNM09UbERNekV1T0RVd05TQXlNeTQyTWpZeklETXhMams0TkRRZ01qTXVPVFUyTlNBek1TNDVPRFEwSURJMExqTkRNekV1T1RnME5DQXlOQzQyTkRNMklETXhMamcxTURVZ01qUXVPVGN6TmlBek1TNDJNVEVnTWpVdU1qSk1Namd1TWprMElESTRMall3TURGTU16RXVOakVnTXpFdU9UYzVRek14TGpnME9Ua2dNekl1TWpJMU1TQXpNUzQ1T0RReUlETXlMalUxTlRJZ016RXVPVGcwTWlBek1pNDRPVGc1UXpNeExqazRORElnTXpNdU1qUXlOeUF6TVM0NE5EazVJRE16TGpVM015QXpNUzQyTVNBek15NDRNVGt4UXpNeExqUTVNamNnTXpNdU9UTTVJRE14TGpNMU1qY2dNelF1TURNME1TQXpNUzR4T1RneUlETTBMakE1T1RGRE16RXVNRFF6TmlBek5DNHhOalF4SURNd0xqZzNOemNnTXpRdU1UazNOU0F6TUM0M01TQXpOQzR4T1RjMVF6TXdMalUwTWpRZ016UXVNVGszTlNBek1DNHpOelkwSURNMExqRTJOREVnTXpBdU1qSXhPQ0F6TkM0d09Ua3hRek13TGpBMk56TWdNelF1TURNME1TQXlPUzQ1TWpjeUlETXpMamt6T1NBeU9TNDRNU0F6TXk0NE1Ua3hTREk1TGpneE1Wb2lJR1pwYkd3OUlpTTFPRFUyUkRZaUx6NE5Dand2YzNablBnMEtcIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIzYVdSMGFEMGlPRElpSUdobGFXZG9kRDBpT0RJaUlIWnBaWGRDYjNnOUlqQWdNQ0E0TWlBNE1pSWdabWxzYkQwaWJtOXVaU0lnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JajROQ2p4d1lYUm9JR1E5SWswMU5DQXdTREk0UXpFeUxqVXpOaUF3SURBZ01USXVOVE0ySURBZ01qaFdOVFJETUNBMk9TNDBOalFnTVRJdU5UTTJJRGd5SURJNElEZ3lTRFUwUXpZNUxqUTJOQ0E0TWlBNE1pQTJPUzQwTmpRZ09ESWdOVFJXTWpoRE9ESWdNVEl1TlRNMklEWTVMalEyTkNBd0lEVTBJREJhSWlCbWFXeHNQU0lqUlRSR1JrVkZJaTgrRFFvOGNHRjBhQ0JrUFNKTk16a3VPRFkySURZd1F6TTVMak15TkRRZ05qQXVNREF3T1NBek9DNDRNREF5SURVNUxqZ3dPVE1nTXpndU16ZzJPQ0ExT1M0ME5UazFRek0zTGprM016UWdOVGt1TVRBNU5pQXpOeTQyT1RjM0lEVTRMall5TkRRZ016Y3VOakE1SURVNExqQTVNREZNTXpjdU1UYzJJRFUxTGpRNVF6TTJMak16TXpNZ05UVXVNak13T0NBek5TNDFNVFUySURVMExqZzVOakVnTXpRdU56TXpJRFUwTGpRNVRETXlMalUyTVNBMU5pNHdNelE1UXpNeUxqRTNOallnTlRZdU16RXpNeUF6TVM0M01UTTNJRFUyTGpRMk1qVWdNekV1TWpNNUlEVTJMalEyTURsRE16QXVPVE00TmlBMU5pNDBOakV5SURNd0xqWTBNU0ExTmk0ME1ERTVJRE13TGpNMk16WWdOVFl1TWpnMk5FTXpNQzR3T0RZeUlEVTJMakUzTURrZ01qa3VPRE0wTlNBMU5pNHdNREUySURJNUxqWXlNeUExTlM0M09EZ3hUREkzTGpNeU15QTFNeTQwT0RoRE1qWXVPVE00T0NBMU15NHhNRFkwSURJMkxqY3dNeUExTWk0Mk1EQTJJREkyTGpZMU56Z2dOVEl1TURZeFF6STJMall4TWpVZ05URXVOVEl4TkNBeU5pNDNOakE0SURVd0xqazRNeklnTWpjdU1EYzJJRFV3TGpVME0wd3lPQzQxT1RrZ05EZ3VOREkxTVVNeU9DNHhOalk0SURRM0xqWXlNekVnTWpjdU9ERXlOU0EwTmk0M09ERTNJREkzTGpVME1TQTBOUzQ1TVRJeFRESTBMamt4TXlBME5TNDBOalV4UXpJMExqTTNOamtnTkRVdU16YzJOaUF5TXk0NE9EazVJRFExTGpBNU9Ua2dNak11TlRNNU15QTBOQzQyT0RRNFF6SXpMakU0T0RjZ05EUXVNalk1TnlBeU1pNDVPVGMxSURRekxqYzBNek1nTWpNZ05ETXVNbFl6T1M0NU5EZERNakl1T1RrNE9TQXpPUzQwTURVMElESXpMakU1TURRZ016Z3VPRGd4SURJekxqVTBNRE1nTXpndU5EWTNOVU15TXk0NE9UQXlJRE00TGpBMU5ERWdNalF1TXpjMU55QXpOeTQzTnpnMElESTBMamt4SURNM0xqWTRPVGxNTWpjdU5EYzJJRE0zTGpJMU56RkRNamN1TnpNM05pQXpOaTR6T0RNM0lESTRMakE0TVRnZ016VXVOVE0zTVNBeU9DNDFNRFFnTXpRdU56STVUREkyTGprMU9TQXpNaTQxTlRZNVF6STJMalkwTlRJZ016SXVNVEUyTVNBeU5pNDBPVGMzSURNeExqVTNPRFVnTWpZdU5UUXlPU0F6TVM0d016a3pRekkyTGpVNE9ESWdNekF1TlRBd01TQXlOaTQ0TWpNeElESTVMams1TkRRZ01qY3VNakEySURJNUxqWXhNakZNTWprdU5URTNJREkzTGpNeE1rTXlPUzQ0T1RrZ01qWXVPVEk0TmlBek1DNDBNRFE0SURJMkxqWTVNeklnTXpBdU9UUTBNaUF5Tmk0Mk5EaERNekV1TkRnek5pQXlOaTQyTURJM0lETXlMakF5TVRVZ01qWXVOelV3TlNBek1pNDBOaklnTWpjdU1EWTBPVXd6TkM0MU9EZ2dNamd1TlRrMlF6TTFMak00T1RRZ01qZ3VNVFl6TVNBek5pNHlNekEySURJM0xqZ3dPRFlnTXpjdU1TQXlOeTQxTXpjeFRETTNMalUwT0NBeU5DNDVNRGc1UXpNM0xqWXpOamdnTWpRdU16YzFOeUF6Tnk0NU1URTRJREl6TGpnNU1UTWdNemd1TXpJME1pQXlNeTQxTkRFNFF6TTRMamN6TmpVZ01qTXVNVGt5TWlBek9TNHlOVGswSURJekxqQXdNRElnTXprdU9DQXlNMGcwTXk0d05UUkRORE11TlRrMU5DQXlNaTQ1T1RreElEUTBMakV4T1RZZ01qTXVNVGt3TkNBME5DNDFNek1nTWpNdU5UUkRORFF1T1RRMk5DQXlNeTQ0T0RrM0lEUTFMakl5TWpFZ01qUXVNemMwT1NBME5TNHpNVEVnTWpRdU9UQTRPVXcwTlM0M05ETWdNamN1TkRjMU1VTTBOaTQyTkRjZ01qY3VOelEzTkNBME55NDFNakl4SURJNExqRXdOelFnTkRndU16VTJJREk0TGpVMU1ERk1OVEF1TlRBMUlESTNMakF5UXpVd0xqZzRPVElnTWpZdU56UXhOeUExTVM0ek5URTNJREkyTGpVNU1qWWdOVEV1T0RJMklESTJMalU1TkVNMU1pNHhNalkwSURJMkxqVTVNellnTlRJdU5ESTBJREkyTGpZMU1qY2dOVEl1TnpBeE15QXlOaTQzTmpneFF6VXlMamszT0RjZ01qWXVPRGd6TkNBMU15NHlNekExSURJM0xqQTFNamdnTlRNdU5EUXlJREkzTGpJMk5qRk1OVFV1TnpReUlESTVMalUyTlRsRE5UWXVNVEkyTlNBeU9TNDVORGMySURVMkxqTTJNalFnTXpBdU5EVXpPQ0ExTmk0ME1EYzNJRE13TGprNU16ZEROVFl1TkRVeklETXhMalV6TXpVZ05UWXVNekEwTmlBek1pNHdOekUySURVMUxqazRPU0F6TWk0MU1USk1OVFF1TkRVNUlETTBMalkxTXpGRE5UUXVPRGcwTXlBek5TNDBOVGcxSURVMUxqSXpNelVnTXpZdU16QXhPU0ExTlM0MU1ESWdNemN1TVRjeU1VdzFPQzR4TURJZ016Y3VOakV6UXpVNExqWXpOVGNnTXpjdU5qazVOeUExT1M0eE1qQTBJRE0zTGprM05URWdOVGt1TkRZNElETTRMak00T1RKRE5Ua3VPREUxTnlBek9DNDRNRE15SURZd0xqQXdNeUF6T1M0ek1qZ3pJRFU1TGprNU5pQXpPUzQ0TmpnNVZqUXpMakV5TXpGRE5Ua3VPVGszSURRekxqWTJORFVnTlRrdU9EQTFOU0EwTkM0eE9EZzNJRFU1TGpRMU5Ua2dORFF1TmpBeU1VTTFPUzR4TURZeUlEUTFMakF4TlRRZ05UZ3VOakl4TVNBME5TNHlPVEVnTlRndU1EZzNJRFExTGpNM09UbE1OVFV1TkRnM0lEUTFMamd4TTBNMU5TNHlNVGc0SURRMkxqWTRNemNnTlRRdU9EWTVOaUEwTnk0MU1qYzBJRFUwTGpRME5DQTBPQzR6TXpOTU5UVXVPVGMwSURVd0xqUTRNVU0xTmk0eU9EYzVJRFV3TGpreU1UY2dOVFl1TkRNMU15QTFNUzQwTlRrMklEVTJMak01TURFZ05URXVPVGs0T0VNMU5pNHpORFE1SURVeUxqVXpPQ0ExTmk0eE1EazVJRFV6TGpBME16Y2dOVFV1TnpJM0lEVXpMalF5Tmt3MU15NDBNamNnTlRVdU56STJNVU0xTXk0d05EVWdOVFl1TVRBNU5TQTFNaTQxTXpreUlEVTJMak0wTkRjZ05URXVPVGs1T1NBMU5pNHpPRGs1UXpVeExqUTJNRFVnTlRZdU5ETTFNU0ExTUM0NU1qSTJJRFUyTGpJNE56UWdOVEF1TkRneUlEVTFMamszTWpsTU5EZ3VNelF4SURVMExqUTBNekZETkRjdU5UTTFNU0ExTkM0NE5qZ3hJRFEyTGpZNU1UVWdOVFV1TWpFM01pQTBOUzQ0TWpFZ05UVXVORGcyTVV3ME5TNHpPREVnTlRndU1EZzFPVU0wTlM0eU9USTBJRFU0TGpZeU1ESWdORFV1TURFMk55QTFPUzR4TURVM0lEUTBMall3TXpNZ05Ua3VORFUxTmtNME5DNHhPRGs1SURVNUxqZ3dOVFFnTkRNdU5qWTFOaUExT1M0NU9UY2dORE11TVRJMElEVTVMams1TmpGTU16a3VPRFkySURZd1drMHpOUzR4T1RnZ05USXVNemM0T1VNek5pNHhPVEUzSURVeUxqazFNVFVnTXpjdU1qVTNOU0ExTXk0ek9EZzNJRE00TGpNMk55QTFNeTQyTnpsRE16Z3VOVFl4TnlBMU15NDNNamc0SURNNExqY3pOellnTlRNdU9ETTBNeUF6T0M0NE56TTFJRFV6TGprNE1qUkRNemt1TURBNU15QTFOQzR4TXpBMUlETTVMakE1T1RFZ05UUXVNekUwTnlBek9TNHhNeklnTlRRdU5URXlPVXd6T1M0Mk56TWdOVGN1TnpaRE16a3VOamd3TlNBMU55NDRNRGMxSURNNUxqY3dORGdnTlRjdU9EVXdPQ0F6T1M0M05ERTFJRFUzTGpnNE1UaERNemt1TnpjNE1pQTFOeTQ1TVRJNUlETTVMamd5TkRrZ05UY3VPVEk1TlNBek9TNDROek1nTlRjdU9USTVTRFF6TGpFeU4wTTBNeTR4TnpVeElEVTNMamt5T1RVZ05ETXVNakl4T0NBMU55NDVNVEk1SURRekxqSTFPRFVnTlRjdU9EZ3hPRU0wTXk0eU9UVXpJRFUzTGpnMU1EZ2dORE11TXpFNU5pQTFOeTQ0TURjMUlEUXpMak15TnlBMU55NDNOa3cwTXk0NE56WWdOVFF1TlRFeU9VTTBNeTQ1TURjM0lEVTBMak14TkRJZ05ETXVPVGszTVNBMU5DNHhNamt5SURRMExqRXpNekVnTlRNdU9UZ3hRelEwTGpJMk9USWdOVE11T0RNeU55QTBOQzQwTkRVNElEVXpMamN5TnpZZ05EUXVOalF4SURVekxqWTNPVU0wTlM0M056a3hJRFV6TGpNNE5qa2dORFl1T0RZNU9DQTFNaTQ1TXpRZ05EY3VPRGdnTlRJdU16TTBRelE0TGpBMU16Z2dOVEl1TWpNeE5DQTBPQzR5TlRNMElEVXlMakU0TVRRZ05EZ3VORFUxSURVeUxqRTRPVGRETkRndU5qVTJOU0ExTWk0eE9UZ2dORGd1T0RVeE5DQTFNaTR5TmpRMklEUTVMakF4TmlBMU1pNHpPREV4VERVeExqWTVPQ0ExTkM0eU9VTTFNUzQzTXpFeklEVTBMak14TlRjZ05URXVOemN5SURVMExqTXlPVGdnTlRFdU9ERTBJRFUwTGpNek1ERkROVEV1T0RReE5TQTFOQzR6TXpBMElEVXhMamcyT0RjZ05UUXVNekkwT1NBMU1TNDRPVFFnTlRRdU16RTBNa00xTVM0NU1Ua3pJRFUwTGpNd016VWdOVEV1T1RReU1TQTFOQzR5T0RjNUlEVXhMamsyTVNBMU5DNHlOamd4VERVMExqSTJNU0ExTVM0NU5qaEROVFF1TWprME5DQTFNUzQ1TXpNMElEVTBMak14TkRnZ05URXVPRGc0TkNBMU5DNHpNVGtnTlRFdU9EUXdOa00xTkM0ek1qTXlJRFV4TGpjNU1qY2dOVFF1TXpFd09TQTFNUzQzTkRRNUlEVTBMakk0TkNBMU1TNDNNRFV4VERVeUxqTTNOU0EwT1M0d01UUTVRelV5TGpJMU9EVWdORGd1T0RVd05DQTFNaTR4T1RJeElEUTRMalkxTlRnZ05USXVNVGcwSURRNExqUTFORE5ETlRJdU1UYzFPQ0EwT0M0eU5USTVJRFV5TGpJeU5qSWdORGd1TURVek15QTFNaTR6TWprZ05EY3VPRGM1T1VNMU1pNDVNamc0SURRMkxqZzJPVFVnTlRNdU16Z3hOeUEwTlM0M056a3hJRFV6TGpZM05DQTBOQzQyTkRFeFF6VXpMamN5TkRFZ05EUXVORFEyTXlBMU15NDRNamszSURRMExqSTNJRFV6TGprM056a2dORFF1TVRNMFF6VTBMakV5TmpFZ05ETXVPVGs0TVNBMU5DNHpNVEEySURRekxqa3dPRElnTlRRdU5UQTVJRFF6TGpnM05VdzFOeTQzTlRVZ05ETXVNek0wUXpVM0xqZ3dNamNnTkRNdU16STJPQ0ExTnk0NE5EWXlJRFF6TGpNd01qWWdOVGN1T0RjM05DQTBNeTR5TmpVNVF6VTNMamt3T0RjZ05ETXVNakk1TVNBMU55NDVNalUySURRekxqRTRNak1nTlRjdU9USTFJRFF6TGpFek5FZzFOeTQ1TXpKV016a3VPRGM1T1VNMU55NDVNekkySURNNUxqZ3pNVGNnTlRjdU9URTFOeUF6T1M0M09EVWdOVGN1T0RnME5DQXpPUzQzTkRnelF6VTNMamcxTXpJZ016a3VOekV4TlNBMU55NDRNRGszSURNNUxqWTROeklnTlRjdU56WXlJRE01TGpZM09UbE1OVFF1TlRFMklETTVMakV6TVRGRE5UUXVNekUzTWlBek9TNHdPVGs0SURVMExqRXpNaUF6T1M0d01UQTBJRFV6TGprNE16WWdNemd1T0RjME0wTTFNeTQ0TXpVeklETTRMamN6T0RJZ05UTXVOek13TkNBek9DNDFOakUwSURVekxqWTRNaUF6T0M0ek5qWkROVE11TXpnNU15QXpOeTR5TWpnMElEVXlMamt6TmpVZ016WXVNVE00TVNBMU1pNHpNemNnTXpVdU1USTNPVU0xTWk0eU16UXpJRE0wTGprMU5ERWdOVEl1TVRnMElETTBMamMxTkRNZ05USXVNVGt5TkNBek5DNDFOVEkxUXpVeUxqSXdNRGNnTXpRdU16VXdOeUExTWk0eU5qY3pJRE0wTGpFMU5UY2dOVEl1TXpnMElETXpMams1TVV3MU5DNHlPVE1nTXpFdU16RXdNVU0xTkM0ek1qQXhJRE14TGpJM01ERWdOVFF1TXpNeU5pQXpNUzR5TWpFNUlEVTBMak15T0RRZ016RXVNVGN6T0VNMU5DNHpNalF5SURNeExqRXlOVGNnTlRRdU16QXpOaUF6TVM0d09EQTJJRFUwTGpJM0lETXhMakEwTlRsTU5URXVPVGNnTWpndU56UTJNVU0xTVM0NU5UQTRJREk0TGpjeU5qWWdOVEV1T1RJM09TQXlPQzQzTVRFeElEVXhMamt3TWpjZ01qZ3VOekF3TkVNMU1TNDROemMxSURJNExqWTRPVGdnTlRFdU9EVXdOQ0F5T0M0Mk9EUXlJRFV4TGpneU15QXlPQzQyT0RReFF6VXhMamM0TVRRZ01qZ3VOamcyTnlBMU1TNDNOREUwSURJNExqY3dNRFVnTlRFdU56QTNJREk0TGpjeU5ERk1ORGt1TURRZ016QXVOak01T1VNME9DNDROelUxSURNd0xqYzFOamdnTkRndU5qZ3dOaUF6TUM0NE1qTTBJRFE0TGpRM09TQXpNQzQ0TXpFNFF6UTRMakkzTnpRZ016QXVPRFF3TVNBME9DNHdOemMySURNd0xqYzRPVGtnTkRjdU9UQTBJRE13TGpZNE4wTTBOaTQ0TmprM0lETXdMakEzTmprZ05EVXVOelV5T1NBeU9TNDJNVGc0SURRMExqVTRPQ0F5T1M0ek1qWTVRelEwTGpNNU1UUWdNamt1TWpjMk5DQTBOQzR5TVRNMklESTVMakUyT1RrZ05EUXVNRGMyTkNBeU9TNHdNakF6UXpRekxqa3pPVEVnTWpndU9EY3dOaUEwTXk0NE5EZzBJREk0TGpZNE5ESWdORE11T0RFMUlESTRMalE0TXpsTU5ETXVNamMwSURJMUxqSTJNVU0wTXk0eU5qWTRJREkxTGpJeE16TWdORE11TWpReU5pQXlOUzR4TmprNUlEUXpMakl3TlRnZ01qVXVNVE00TjBNME15NHhOamt4SURJMUxqRXdOelFnTkRNdU1USXlNeUF5TlM0d09UQTFJRFF6TGpBM05DQXlOUzR3T1RFeFNETTVMamd5UXpNNUxqYzNNVGdnTWpVdU1Ea3dOU0F6T1M0M01qVWdNalV1TVRBM05DQXpPUzQyT0RneUlESTFMakV6T0RkRE16a3VOalV4TlNBeU5TNHhOams1SURNNUxqWXlOek1nTWpVdU1qRXpNeUF6T1M0Mk1pQXlOUzR5TmpGTU16a3VNRFkwSURJNExqVXpNVU16T1M0d01qZ3lJREk0TGpjeU9ESWdNemd1T1RNM015QXlPQzQ1TVRFeUlETTRMamd3TVRjZ01qa3VNRFU0T0VNek9DNDJOall4SURJNUxqSXdOalVnTXpndU5Ea3hOU0F5T1M0ek1USTJJRE00TGpJNU9DQXlPUzR6TmpWRE16Y3VNVFl4TmlBeU9TNDJOakUwSURNMkxqQTNNemdnTXpBdU1URTVPQ0F6TlM0d05qZ2dNekF1TnpJMk1VTXpOQzQ0T1RJNUlETXdMamd5T0RnZ016UXVOamt5SURNd0xqZzNPRGtnTXpRdU5EZzVNU0F6TUM0NE56QTJRek0wTGpJNE5qTWdNekF1T0RZeU15QXpOQzR3T1RBeElETXdMamM1TlRjZ016TXVPVEkwSURNd0xqWTNPVXd6TVM0eU5UY2dNamd1TnpjNU1VTXpNUzR5TVRjNUlESTRMamMxTURNZ016RXVNVFk1TmlBeU9DNDNNelkzSURNeExqRXlNVElnTWpndU56UXhRek14TGpBM01qZ2dNamd1TnpRMU1pQXpNUzR3TWpjMklESTRMamMyTmprZ016QXVPVGswSURJNExqZ3dNa3d5T0M0Mk9UUWdNekV1TVRBeU1VTXlPQzQyTmpBNElETXhMakV6TmprZ01qZ3VOalF3TkNBek1TNHhPREl5SURJNExqWXpOalFnTXpFdU1qTXdNa015T0M0Mk16STBJRE14TGpJM09ETWdNamd1TmpRMUlETXhMak15TmpFZ01qZ3VOamN5SURNeExqTTJOa3d6TUM0MU9UWWdNelF1TURZMU9VTXpNQzQzTVRNNElETTBMakl5T0RjZ016QXVOemd4TnlBek5DNDBNakkwSURNd0xqYzVNVE1nTXpRdU5qSXpNVU16TUM0NE1EQTRJRE0wTGpneU16Y2dNekF1TnpVeE9DQXpOUzR3TWpJNElETXdMalkxSURNMUxqRTVOa016TUM0d05UY3pJRE0yTGpJd09UWWdNamt1TmpFeU5TQXpOeTR6TURJMUlESTVMak15T1NBek9DNDBOREU1UXpJNUxqSTNPRGNnTXpndU5qTTROaUF5T1M0eE56SXhJRE00TGpneE5qTWdNamt1TURJeU5DQXpPQzQ1TlRNMFF6STRMamczTWpjZ016a3VNRGt3TlNBeU9DNDJPRFl6SURNNUxqRTRNVElnTWpndU5EZzJJRE01TGpJeE5ERk1NalV1TWpZeklETTVMamMxTkRsRE1qVXVNakUxTXlBek9TNDNOakl4SURJMUxqRTNNVGtnTXprdU56ZzJOU0F5TlM0eE5EQTJJRE01TGpneU16SkRNalV1TVRBNU5DQXpPUzQ0TmlBeU5TNHdPVEkxSURNNUxqa3dOamdnTWpVdU1Ea3pJRE01TGprMU5URldORE11TWpBNFF6STFMakE1TWpVZ05ETXVNalUyTWlBeU5TNHhNRGswSURRekxqTXdNekVnTWpVdU1UUXdOaUEwTXk0ek16azRRekkxTGpFM01Ua2dORE11TXpjMk5pQXlOUzR5TVRVeklEUXpMalF3TURjZ01qVXVNall6SURRekxqUXdPRXd5T0M0MU16TWdORE11T1RZME1VTXlPQzQzTXpBMElEUXpMams1T1RjZ01qZ3VPVEV6TmlBME5DNHdPVEExSURJNUxqQTJNVFVnTkRRdU1qSTJNVU15T1M0eU1Ea3pJRFEwTGpNMk1UY2dNamt1TXpFMU5pQTBOQzQxTXpZMElESTVMak0yT0NBME5DNDNNME15T1M0Mk5qUWdORFV1T0RZMk15QXpNQzR4TWpJZ05EWXVPVFUwTVNBek1DNDNNamdnTkRjdU9UWkRNekF1T0RNd09TQTBPQzR4TXpVeUlETXdMamc0TVRJZ05EZ3VNek0yTXlBek1DNDROek14SURRNExqVXpPVE5ETXpBdU9EWTBPU0EwT0M0M05ESXpJRE13TGpjNU9EWWdORGd1T1RNNE5pQXpNQzQyT0RJZ05Ea3VNVEExVERJNExqYzRNaUExTVM0M056RkRNamd1TnpVMUlEVXhMamd4TURnZ01qZ3VOelF5TlNBMU1TNDROVGcySURJNExqYzBOamNnTlRFdU9UQTJOVU15T0M0M05UQTVJRFV4TGprMU5EUWdNamd1TnpjeE5TQTFNUzQ1T1RrMElESTRMamd3TlNBMU1pNHdNek01VERNeExqRXdOU0ExTkM0ek16UkRNekV1TVRJME15QTFOQzR6TlRNMElETXhMakUwTnpJZ05UUXVNelk0TnlBek1TNHhOekkwSURVMExqTTNPVEpETXpFdU1UazNOaUExTkM0ek9EazJJRE14TGpJeU5EY2dOVFF1TXprMU1TQXpNUzR5TlRJZ05UUXVNemsxUXpNeExqSTVNelFnTlRRdU16a3lOeUF6TVM0ek16TTBJRFUwTGpNM09UWWdNekV1TXpZNElEVTBMak0xTmpsTU16UXVNRGN6SURVeUxqUXpNVGxETXpRdU1qUTNOU0ExTWk0ek1EVTFJRE0wTGpRMU56WWdOVEl1TWpNNE1TQXpOQzQyTnpNZ05USXVNak01UXpNMExqZzFOemNnTlRJdU1qTTVNeUF6TlM0d016a3lJRFV5TGpJNE56RWdNelV1TWlBMU1pNHpOemM1VERNMUxqRTVPQ0ExTWk0ek56ZzVXazB6TXk0MU1pQTBNUzQwT1RZeFF6TXpMalV5TURJZ016a3VPVEUzTVNBek15NDVPRGcySURNNExqTTNNellnTXpRdU9EWTJJRE0zTGpBMk1EaERNelV1TnpRek5DQXpOUzQzTkRnZ016WXVPVGt3TXlBek5DNDNNalE0SURNNExqUTBPVElnTXpRdU1USXdOa016T1M0NU1EZ2dNek11TlRFMk5DQTBNUzQxTVRNeUlETXpMak0xT0RRZ05ETXVNRFl4T1NBek15NDJOalkxUXpRMExqWXhNRFVnTXpNdU9UYzBOaUEwTmk0d016TWdNelF1TnpNMUlEUTNMakUwT1RZZ016VXVPRFV4TmtNME9DNHlOall4SURNMkxqazJPREVnTkRrdU1ESTJOU0F6T0M0ek9UQTJJRFE1TGpNek5EWWdNemt1T1RNNU1rTTBPUzQyTkRJM0lEUXhMalE0TnprZ05Ea3VORGcwTmlBME15NHdPVE15SURRNExqZzRNRFVnTkRRdU5UVXlRelE0TGpJM05qTWdORFl1TURFd09TQTBOeTR5TlRNeElEUTNMakkxTnpZZ05EVXVPVFF3TXlBME9DNHhNelZETkRRdU5qSTNOU0EwT1M0d01USTBJRFF6TGpBNE5DQTBPUzQwT0RBNElEUXhMalV3TlNBME9TNDBPREZETXprdU16ZzNOQ0EwT1M0ME56azVJRE0zTGpNMU5qa2dORGd1TmpNNE1TQXpOUzQ0TlRrMklEUTNMakUwTURaRE16UXVNell5TXlBME5TNDJORE15SURNekxqVXlNRGdnTkRNdU5qRXlOeUF6TXk0MU1pQTBNUzQwT1RVeFZqUXhMalE1TmpGYVRUTTFMall3TnlBME1TNDBPVFl4UXpNMUxqWXdOeUEwTWk0Mk5qTWdNelV1T1RVeklEUXpMamd3TXpjZ016WXVOakF4TXlBME5DNDNOek01UXpNM0xqSTBPVFlnTkRVdU56UTBNaUF6T0M0eE56RXhJRFEyTGpVd01ESWdNemt1TWpRNU1pQTBOaTQ1TkRZNFF6UXdMak15TnpNZ05EY3VNemt6TXlBME1TNDFNVE0ySURRM0xqVXhNRFFnTkRJdU5qVTRJRFEzTGpJNE1qZERORE11T0RBeU5TQTBOeTR3TlRVeElEUTBMamcxTXpnZ05EWXVORGt6TVNBME5TNDJOemc1SURRMUxqWTJPRU0wTmk0MU1EUXhJRFEwTGpnME1qZ2dORGN1TURZMklEUXpMamM1TVRVZ05EY3VNamt6TnlBME1pNDJORGRETkRjdU5USXhNeUEwTVM0MU1ESTFJRFEzTGpRd05EVWdOREF1TXpFMk5DQTBOaTQ1TlRjNUlETTVMakl6T0RORE5EWXVOVEV4TkNBek9DNHhOakF5SURRMUxqYzFOVEVnTXpjdU1qTTROaUEwTkM0M09EUTVJRE0yTGpVNU1ETkRORE11T0RFME5pQXpOUzQ1TkRJZ05ESXVOamN6T1NBek5TNDFPVFlnTkRFdU5UQTNJRE0xTGpVNU5rTXpPUzQ1TkRJMElETTFMalU1TmlBek9DNDBOREU1SURNMkxqSXhOelVnTXpjdU16TTFOQ0F6Tnk0ek1qTTNRek0yTGpJeU9TQXpPQzQwTXlBek5TNDJNRGN6SURNNUxqa3pNRFVnTXpVdU5qQTNJRFF4TGpRNU5URldOREV1TkRrMk1Wb2lJR1pwYkd3OUlpTTBNRGszTlVZaUx6NE5Dand2YzNablBnMEtcIiIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9zbWFydC1kMmM2YWZmYjUzNjg5YWQwZmQ3MmE3MjU1OWE1Y2JhOS5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpT0RJaUlHaGxhV2RvZEQwaU9ESWlJSFpwWlhkQ2IzZzlJakFnTUNBNE1pQTRNaUlnWm1sc2JEMGlibTl1WlNJZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWo0TkNqeHdZWFJvSUdROUlrMDFOQ0F3U0RJNFF6RXlMalV6TmlBd0lEQWdNVEl1TlRNMklEQWdNamhXTlRSRE1DQTJPUzQwTmpRZ01USXVOVE0ySURneUlESTRJRGd5U0RVMFF6WTVMalEyTkNBNE1pQTRNaUEyT1M0ME5qUWdPRElnTlRSV01qaERPRElnTVRJdU5UTTJJRFk1TGpRMk5DQXdJRFUwSURCYUlpQm1hV3hzUFNJalJVRkdPVVpHSWk4K0RRbzhjR0YwYUNCa1BTSk5NekF1TmpVeklEWXhRek13TGpVek1Ua2dOakF1T1RrNU5pQXpNQzQwTVRJZ05qQXVPVGMxTWlBek1DNHpNREF5SURZd0xqa3lPRFZETXpBdU1UZzROQ0EyTUM0NE9ERTNJRE13TGpBNE55QTJNQzQ0TVRNMUlETXdMakF3TVRZZ05qQXVOekkzTlVNeU9TNDVNVFl6SURZd0xqWTBNVFVnTWprdU9EUTROeUEyTUM0MU16azJJREk1TGpnd01qZ2dOakF1TkRJM05VTXlPUzQzTlRZNUlEWXdMak14TlRRZ01qa3VOek16TlNBMk1DNHhPVFV4SURJNUxqY3pOQ0EyTUM0d056UldOVGN1T0Rnek1VTXlPUzQzTXpJeUlEVTNMakUwT1RRZ016QXVNREl4TkNBMU5pNDBORFE1SURNd0xqVXpPRE1nTlRVdU9USTBNME16TVM0d05UVXlJRFUxTGpRd016Y2dNekV1TnpVM05DQTFOUzR4TURrMElETXlMalE1TVRFZ05UVXVNVEEyU0RNMExqSldOVEF1T0RVNE9VTXpOQzR4T1RreElEVXdMalkxTWpFZ016UXVNalkzTlNBMU1DNDBOVEV6SURNMExqTTVORFFnTlRBdU1qZzRNVU16TkM0MU1qRTBJRFV3TGpFeU5Ea2dNelF1TmprNU5DQTFNQzR3TURnNUlETTBMamt3TURFZ05Ea3VPVFU1U0RNMExqa3hNa016TlM0NU1EZzFJRFE1TGpjeU5USWdNell1TnpnMk15QTBPUzR4TXpjNUlETTNMak00TWpRZ05EZ3VNekExT1VNek55NDVOemcwSURRM0xqUTNNemtnTXpndU1qVXlNeUEwTmk0ME5UTTNJRE00TGpFMU15QTBOUzQwTXpVeFF6TTFMamczT0RJZ05EUXVNelk1TWlBek5DNHdNVEEzSURReUxqVTVNemtnTXpJdU9ETXhJRFF3TGpNM05rTXpNaTR6TlRnMUlETTVMalUzTVRFZ016RXVPVFF6T0NBek9DNDNNek00SURNeExqVTVNREVnTXpjdU9EY3dNVU15T1M0Mk1ETXpJRE0yTGpjM05pQXlOeTQ0T1RFZ016VXVNalEwT1NBeU5pNDFPREkwSURNekxqTTVNak5ETWpVdU1qY3pPQ0F6TVM0MU16azRJREkwTGpRd016RWdNamt1TkRFME1pQXlOQzR3TXpZZ01qY3VNVGMyUXpJekxqazNNREVnTWpZdU56WTFNeUF5TXk0NU9UUXhJREkyTGpNME5USWdNalF1TVRBMk1TQXlOUzQ1TkRRMlF6STBMakl4T0RJZ01qVXVOVFEwSURJMExqUXhOVGNnTWpVdU1UY3lNaUF5TkM0Mk9EVXhJREkwTGpnMU5USkRNalF1T1RVME5pQXlOQzQxTXpneklESTFMakk0T1RVZ01qUXVNamd6TlNBeU5TNDJOalk0SURJMExqRXdPRFJETWpZdU1EUTBNaUF5TXk0NU16TXpJREkyTGpRMU5TQXlNeTQ0TkRJeUlESTJMamczTVNBeU15NDROREV4U0RJNUxqWTBObFl5TWk0NU5qZERNamt1TmpRME5DQXlNaTQwTkRnNElESTVMamcwT0RZZ01qRXVPVFV4TVNBek1DNHlNVE0zSURJeExqVTRNek5ETXpBdU5UYzROeUF5TVM0eU1UVTBJRE14TGpBM05EZ2dNakV1TURBM015QXpNUzQxT1RNZ01qRXVNREEwT1VnMU1DNDBNRGRETlRBdU9USTFNeUF5TVM0d01EY3pJRFV4TGpReU1UWWdNakV1TWpFMU5DQTFNUzQzT0RZNElESXhMalU0TXpORE5USXVNVFV5SURJeExqazFNVEVnTlRJdU16VTJNeUF5TWk0ME5EZzNJRFV5TGpNMU5TQXlNaTQ1TmpkV01qTXVPRFF4TVVnMU5TNHhNamt4UXpVMUxqVTBOU0F5TXk0NE5ESXpJRFUxTGprMU5UY2dNak11T1RNek55QTFOaTR6TXpNZ01qUXVNVEE0T1VNMU5pNDNNVEF5SURJMExqSTROQ0ExTnk0d05EVXhJREkwTGpVek9EZ2dOVGN1TXpFME5TQXlOQzQ0TlRVM1F6VTNMalU0TXprZ01qVXVNVGN5TmlBMU55NDNPREUxSURJMUxqVTBOQ0ExTnk0NE9UTTJJREkxTGprME5EWkROVGd1TURBMU55QXlOaTR6TkRVeElEVTRMakF5T1RjZ01qWXVOelkxTXlBMU55NDVOalFnTWpjdU1UYzJRelUzTGpVNU55QXlPUzQwTVRReElEVTJMamN5TmpVZ016RXVOVE01TmlBMU5TNDBNVGd4SURNekxqTTVNakZETlRRdU1UQTVOeUF6TlM0eU5EUTJJRFV5TGpNNU56WWdNell1TnpjMU9TQTFNQzQwTVRFZ016Y3VPRGN3TVVNMU1DNHdOVFkySURNNExqY3pNemNnTkRrdU5qUXhOaUF6T1M0MU56RWdORGt1TVRZNUlEUXdMak0zTmtNME9DNHdNREUySURReUxqVTJNalVnTkRZdU1UWTRPU0EwTkM0ek1qQTVJRFF6TGprek5pQTBOUzR6T1RkRE5ETXVPREkyTXlBME5pNDBNakUxSURRMExqQTVORGtnTkRjdU5EVXdPQ0EwTkM0Mk9URXpJRFE0TGpJNU1VTTBOUzR5T0RjMklEUTVMakV6TVRNZ05EWXVNVGN3TnlBME9TNDNNalExSURRM0xqRTNOQ0EwT1M0NU5UbElORGN1TVRnMVF6UTNMak00TmprZ05UQXVNREEzTmlBME55NDFOalkySURVd0xqRXlNamdnTkRjdU5qazBPU0ExTUM0eU9EWXhRelEzTGpneU16RWdOVEF1TkRRNU5DQTBOeTQ0T1RJMklEVXdMalkxTVRJZ05EY3VPRGt5TVNBMU1DNDROVGc1VmpVMUxqRXdOa2cwT1M0MU9USkROVEF1TXpJMU55QTFOUzR4TURrMElEVXhMakF5T0RFZ05UVXVOREF6TnlBMU1TNDFORFV4SURVMUxqa3lORE5ETlRJdU1EWXlNaUExTmk0ME5EUTVJRFV5TGpNMU1UWWdOVGN1TVRRNU15QTFNaTR6TlNBMU55NDRPRE14VmpZd0xqQTNORU0xTWk0ek5UQTBJRFl3TGpFNU5USWdOVEl1TXpJMk9TQTJNQzR6TVRVMElEVXlMakk0TURrZ05qQXVOREkzTlVNMU1pNHlNelE1SURZd0xqVXpPVFlnTlRJdU1UWTNNaUEyTUM0Mk5ERTJJRFV5TGpBNE1UZ2dOakF1TnpJM05VTTFNUzQ1T1RZMElEWXdMamd4TXpVZ05URXVPRGswT0NBMk1DNDRPRElnTlRFdU56Z3pJRFl3TGpreU9EZEROVEV1TmpjeE1pQTJNQzQ1TnpVMUlEVXhMalUxTVRJZ05qQXVPVGs1TmlBMU1TNDBNeUEyTVVnek1DNDJOVE5hVFRNeExqVTNNakVnTlRjdU9EZ3lNVlkxT1M0eE5EYzVTRFV3TGpVeE5sWTFOeTQ0T0RJeFF6VXdMalV4TmpZZ05UY3VOak0zTmlBMU1DNDBNakF4SURVM0xqUXdNamtnTlRBdU1qUTNPQ0ExTnk0eU1qazFRelV3TGpBM05UVWdOVGN1TURVMk1TQTBPUzQ0TkRFMUlEVTJMamsxT0RFZ05Ea3VOVGszSURVMkxqazFOMGd6TWk0ME9URXhRek15TGpJME5qZ2dOVFl1T1RVNE1TQXpNaTR3TVRJNUlEVTNMakExTlRnZ016RXVPRFF3TmlBMU55NHlNamxETXpFdU5qWTRNeUExTnk0ME1ESXlJRE14TGpVM01UZ2dOVGN1TmpNMk9DQXpNUzQxTnpJeElEVTNMamc0TVRGV05UY3VPRGd5TVZwTk16WXVNRE0wSURVMUxqRXdOVWcwTmk0d05UVldOVEV1Tnpnek9VZ3pOaTR3TXpSV05UVXVNVEExV2swek9TNHdOalF4SURRNUxqRXhOVU16T0M0NE9EQTBJRFE1TGpRd05DQXpPQzQyTnpNZ05Ea3VOamMzTWlBek9DNDBORFFnTkRrdU9UTXhPVWcwTXk0Mk5UTkROREl1TmpVNE1pQTBPQzQ0TXpFMUlEUXlMakE1TnlBME55NDBNRGN6SURReUxqQTNOQ0EwTlM0NU1qUXhRelF4TGpjeE9EUWdORFV1T1RjMk5pQTBNUzR6TlRrMElEUTJMakF3TVRrZ05ERWdORFpETkRBdU5qWTVOU0EwTmlBME1DNHpNemswSURRMUxqazNOekVnTkRBdU1ERXlNU0EwTlM0NU16RTVRek01TGprNU9Ea2dORGN1TURZd01pQXpPUzQyTnpBMUlEUTRMakUyTWpVZ016a3VNRFkwTVNBME9TNHhNVFJXTkRrdU1URTFXazB6TVM0ME9EUWdNakl1T1RZeE9WWXlOeTR6T1RFeFF6TXhMak01TXlBek1TNDFPRGswSURNeUxqUXdNakVnTXpVdU56TTROQ0F6TkM0ME1URWdNemt1TkRJMlF6TTJMakl4TVNBME1pNDBOellnTXpndU5UVWdORFF1TVRVMUlEUXhJRFEwTGpFMU5VTTBNeTQwTlNBME5DNHhOVFVnTkRVdU56a2dOREl1TkRjM0lEUTNMalU0T1NBek9TNDBNalpETkRrdU5UazRJRE0xTGpjek9EUWdOVEF1TmpBM01TQXpNUzQxT0RrMElEVXdMalV4TmlBeU55NHpPVEV4VmpJeUxqazJNVGxETlRBdU5URTJNaUF5TWk0NU5EYzBJRFV3TGpVeE16UWdNakl1T1RNek1TQTFNQzQxTURnZ01qSXVPVEU1TjBNMU1DNDFNREkxSURJeUxqa3dOaklnTlRBdU5EazBOQ0F5TWk0NE9UTTVJRFV3TGpRNE5ESWdNakl1T0Rnek5VTTFNQzQwTnpNNUlESXlMamczTXpJZ05UQXVORFl4TnlBeU1pNDROalVnTlRBdU5EUTRNeUF5TWk0NE5UazBRelV3TGpRek5Ea2dNakl1T0RVek9DQTFNQzQwTWpBMklESXlMamcxTVRFZ05UQXVOREEySURJeUxqZzFNVEZJTXpFdU5Ua3pRek14TGpVMk5DQXlNaTQ0TlRFeklETXhMalV6TmpNZ01qSXVPRFl5T1NBek1TNDFNVFU1SURJeUxqZzRNelZETXpFdU5EazFOU0F5TWk0NU1EUXhJRE14TGpRNE5DQXlNaTQ1TXpFNUlETXhMalE0TkNBeU1pNDVOakE1VmpJeUxqazJNVGxhVFRVeUxqTTFOQ0F5Tnk0ek9URXhRelV5TGpNMk16Z2dNamt1T1RZME5TQTFNaTR3TXpReklETXlMalV5TnpjZ05URXVNemMwTVNBek5TNHdNVFE1UXpVekxqa3hPVFFnTXpJdU9UZzJOeUExTlM0Mk1qQTNJRE13TGpBNE5UWWdOVFl1TVRRNElESTJMamczTkVNMU5pNHhOekl4SURJMkxqY3lPVFFnTlRZdU1UWTBNU0F5Tmk0MU9ERXhJRFUyTGpFeU5EVWdNall1TkRNNU9VTTFOaTR3T0RRNUlESTJMakk1T0RnZ05UWXVNREUwT0NBeU5pNHhOamM1SURVMUxqa3hPU0F5Tmk0d05UWTVRelUxTGpneU1pQXlOUzQ1TkRFeUlEVTFMamN3TURnZ01qVXVPRFE0TVNBMU5TNDFOalFnTWpVdU56ZzBNa00xTlM0ME1qY3lJREkxTGpjeU1ETWdOVFV1TWpjNE1TQXlOUzQyT0RjeUlEVTFMakV5TnlBeU5TNDJPRGRJTlRJdU16VXpNVXcxTWk0ek5UUWdNamN1TXpreE1WcE5Nall1TURjNUlESTJMakExTlRsRE1qVXVPVGd6TVNBeU5pNHhOamN4SURJMUxqa3hNeUF5Tmk0eU9UZ3hJREkxTGpnM016UWdNall1TkRNNU5VTXlOUzQ0TXpNNElESTJMalU0TURnZ01qVXVPREkxT0NBeU5pNDNNamt5SURJMUxqZzFJREkyTGpnM05FTXlOaTR6TnpjM0lETXdMakE0TlRjZ01qZ3VNRGM1TkNBek1pNDVPRFk0SURNd0xqWXlOU0F6TlM0d01UUTVRekk1TGprMk5URWdNekl1TlRJM05pQXlPUzQyTXpVNUlESTVMamsyTkRRZ01qa3VOalEySURJM0xqTTVNVEZXTWpVdU5qa3dPVWd5Tmk0NE56RkRNall1TnpJd05pQXlOUzQyT1RBMElESTJMalUzTVRrZ01qVXVOekl5T0NBeU5pNDBNelV6SURJMUxqYzROVFpETWpZdU1qazROeUF5TlM0NE5EZzFJREkyTGpFM056VWdNalV1T1RRd05DQXlOaTR3T0NBeU5pNHdOVFE1VERJMkxqQTNPU0F5Tmk0d05UVTVXazB6Tnk0MU5URXhJRE0zTGpFeE1qRkRNemN1TkRFeU1TQXpOeTR3TVRBeElETTNMak13TkRNZ016WXVPRGN4TXlBek55NHlNems0SURNMkxqY3hNVFJETXpjdU1UYzFOQ0F6Tmk0MU5URTJJRE0zTGpFMU5qY2dNell1TXpjMk9TQXpOeTR4T0RZZ016WXVNakEzVERNM0xqWTFPU0F6TXk0ME1qUXhURE0xTGpZMU1pQXpNUzQwTlRReFF6TTFMalV5T1RJZ016RXVNek15T1NBek5TNDBOREkxSURNeExqRTRJRE0xTGpRd01UWWdNekV1TURFeU5VTXpOUzR6TmpBMklETXdMamcwTkRrZ016VXVNelkzSURNd0xqWTJPU0F6TlM0ME1pQXpNQzQxTURRNVF6TTFMalEzTWpRZ016QXVNelF3T1NBek5TNDFOamsySURNd0xqRTVOU0F6TlM0M01EQTRJRE13TGpBNE16VkRNelV1T0RNeE9TQXlPUzQ1TnpJZ016VXVPVGt4TnlBeU9TNDRPVGt6SURNMkxqRTJNaUF5T1M0NE56Uk1Nemd1T1RNMUlESTVMalEyT0V3ME1DNHhOelVnTWpZdU9UTTNRelF3TGpJMUlESTJMamM0TWpFZ05EQXVNelkzTVNBeU5pNDJOVEUxSURRd0xqVXhNeUF5Tmk0MU5qQXhRelF3TGpZMU9EZ2dNall1TkRZNE5pQTBNQzQ0TWpjMElESTJMalF5TURJZ05EQXVPVGs1TlNBeU5pNDBNakF5UXpReExqRTNNVGNnTWpZdU5ESXdNaUEwTVM0ek5EQXpJREkyTGpRMk9EWWdOREV1TkRnMk1TQXlOaTQxTmpBeFF6UXhMall6TVRrZ01qWXVOalV4TlNBME1TNDNORGtnTWpZdU56Z3lNU0EwTVM0NE1qUWdNall1T1RNM1REUXpMakEyTXlBeU9TNDBOamhNTkRVdU9ETTJJREk1TGpnM05FTTBOaTR3TURZMklESTVMamc1T1RnZ05EWXVNVFkyTlNBeU9TNDVOekkxSURRMkxqSTVOemtnTXpBdU1EZzBNa00wTmk0ME1qazBJRE13TGpFNU5Ua2dORFl1TlRJM0lETXdMak0wTWpJZ05EWXVOVGM1T1NBek1DNDFNRFl6UXpRMkxqWXpNamdnTXpBdU5qY3dOU0EwTmk0Mk16ZzRJRE13TGpnME5qTWdORFl1TlRrM015QXpNUzR3TVRNM1F6UTJMalUxTlRnZ016RXVNVGd4TVNBME5pNDBOamcwSURNeExqTXpNellnTkRZdU16UTFJRE14TGpRMU5ERk1ORFF1TXpNNUlETXpMalF5TkRGTU5EUXVPREV5SURNMkxqSXdOME0wTkM0NE5ERXhJRE0yTGpNM05qa2dORFF1T0RJeU5DQXpOaTQxTlRFMElEUTBMamMxTnprZ016WXVOekV4TWtNME5DNDJPVE0wSURNMkxqZzNNU0EwTkM0MU9EVTRJRE0zTGpBd09Ua2dORFF1TkRRM01TQXpOeTR4TVRJeFF6UTBMakk1TURRZ016Y3VNakkyT0NBME5DNHhNREV5SURNM0xqSTRPRGdnTkRNdU9UQTNJRE0zTGpJNE9URkRORE11TnpVNE1TQXpOeTR5T0RrMklEUXpMall4TVRRZ016Y3VNalV6TWlBME15NDBPQ0F6Tnk0eE9ETXhURFF4SURNMUxqZzJPRGxNTXpndU5USWdNemN1TVRnek1VTXpPQzR6TmpnMUlETTNMakkyTXpNZ016Z3VNVGszTlNBek55NHlPVGt5SURNNExqQXlOalVnTXpjdU1qZzJPVU16Tnk0NE5UVTFJRE0zTGpJM05EVWdNemN1TmpreE5DQXpOeTR5TVRReUlETTNMalUxTXlBek55NHhNVE5NTXpjdU5UVXhNU0F6Tnk0eE1USXhXazAwTVM0ME1qWXhJRE0wTGpBd01qbE1OREl1TmpnMklETTBMalkyT1RsTU5ESXVORFExSURNekxqSTFOekZETkRJdU5ERTVPU0F6TXk0eE1Ea3pJRFF5TGpRek1Ea2dNekl1T1RVM05TQTBNaTQwTnpjeElETXlMamd4TkRsRE5ESXVOVEl6TWlBek1pNDJOekl6SURReUxqWXdNeklnTXpJdU5UUXpJRFF5TGpjeE1ERWdNekl1TkRNNFREUXpMamN6SURNeExqUXpPRXcwTWk0ek1qSXhJRE14TGpJek1UbEROREl1TVRjME1pQXpNUzR5TVRBeklEUXlMakF6TkNBek1TNHhOVEk1SURReExqa3hNelFnTXpFdU1EWTBOME0wTVM0M09USTRJRE13TGprM05qVWdOREV1TmprMU5TQXpNQzQ0TmpBMElEUXhMall6SURNd0xqY3lOakZNTkRFZ01qa3VORE01T1V3ME1DNHpOeUF6TUM0M01qWXhRelF3TGpNd05EWWdNekF1T0RZd05DQTBNQzR5TURjeklETXdMamszTmpVZ05EQXVNRGcyTnlBek1TNHdOalEzUXpNNUxqazJOakVnTXpFdU1UVXlPU0F6T1M0NE1qVTRJRE14TGpJeE1ETWdNemt1TmpjNElETXhMakl6TVRsTU16Z3VNalk1SURNeExqUXpPRXd6T1M0eU9Ea2dNekl1TkRNNFF6TTVMak01TlRnZ016SXVOVFF6TVNBek9TNDBOelUxSURNeUxqWTNNallnTXprdU5USXhOU0F6TWk0NE1UVXlRek01TGpVMk56UWdNekl1T1RVM09DQXpPUzQxTnpneUlETXpMakV3T1RRZ016a3VOVFV6SURNekxqSTFOekZNTXprdU16RXpJRE0wTGpZMk9UbE1OREF1TlRjeklETTBMakF3TWpsRE5EQXVOekEwTnlBek15NDVNek14SURRd0xqZzFNVFVnTXpNdU9EazJOeUEwTVM0d01EQTFJRE16TGpnNU5qZEROREV1TVRRNU5pQXpNeTQ0T1RZM0lEUXhMakk1TmpNZ016TXVPVE16TVNBME1TNDBNamdnTXpRdU1EQXlPVWcwTVM0ME1qWXhXaUlnWm1sc2JEMGlJek5FUVVKRVJDSXZQZzBLUEM5emRtYytEUW89XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpTVRFd0lpQm9aV2xuYUhROUlqRXhNQ0lnZG1sbGQwSnZlRDBpTUNBd0lERXhNQ0F4TVRBaUlHWnBiR3c5SW01dmJtVWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SWdlRzFzYm5NNmVHeHBibXM5SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpFNU9Ua3ZlR3hwYm1zaVBnMEtQSEJoZEdnZ2IzQmhZMmwwZVQwaU1DNHdPU0lnWkQwaVRUYzFJREJJTXpWRE1UVXVOamNnTUNBd0lERTFMalkzSURBZ016VldOelZETUNBNU5DNHpNeUF4TlM0Mk55QXhNVEFnTXpVZ01URXdTRGMxUXprMExqTXpJREV4TUNBeE1UQWdPVFF1TXpNZ01URXdJRGMxVmpNMVF6RXhNQ0F4TlM0Mk55QTVOQzR6TXlBd0lEYzFJREJhSWlCbWFXeHNQU0lqTWpVMk0wWkdJaTgrRFFvOGNtVmpkQ0I0UFNJek1pSWdlVDBpTXpJaUlIZHBaSFJvUFNJME5pSWdhR1ZwWjJoMFBTSTBOaUlnWm1sc2JEMGlkWEpzS0NOd1lYUjBaWEp1TUNraUx6NE5DanhrWldaelBnMEtQSEJoZEhSbGNtNGdhV1E5SW5CaGRIUmxjbTR3SWlCd1lYUjBaWEp1UTI5dWRHVnVkRlZ1YVhSelBTSnZZbXBsWTNSQ2IzVnVaR2x1WjBKdmVDSWdkMmxrZEdnOUlqRWlJR2hsYVdkb2REMGlNU0krRFFvOGRYTmxJSGhzYVc1ck9taHlaV1k5SWlOcGJXRm5aVEFpSUhSeVlXNXpabTl5YlQwaWMyTmhiR1VvTUM0d01qRTNNemt4S1NJdlBnMEtQQzl3WVhSMFpYSnVQZzBLUEdsdFlXZGxJR2xrUFNKcGJXRm5aVEFpSUhkcFpIUm9QU0kwTmlJZ2FHVnBaMmgwUFNJME5pSWdlR3hwYm1zNmFISmxaajBpWkdGMFlUcHBiV0ZuWlM5d2JtYzdZbUZ6WlRZMExHbFdRazlTZHpCTFIyZHZRVUZCUVU1VFZXaEZWV2RCUVVGRE5FRkJRVUYxUTBGWlFVRkJRbGgxVTNNelFVRkJRVUpJVGtOVFZsRkpRMEZuU1daQmFHdHBRVUZCUWs1S1NsSkZSbFZoU1VoME1sZDFiMWhqVlZaQ0wwUm1UMkp0SzNGdmFVdFhibnBWUWpObmJsSnJkRUp3WVdGVlpuRm5TMkZ2ZDJGU1ZrVjRWMDVGTjFOb1YySkxTMjF0Um5aeGRFaDRVMVY0ZG1oQlkyUlJaMmxwUWtWaE16TkZXak4zWjFaR2RHWldTM2hzTVVFNFlXWkJWWFE0VlVoV01YVlVNSGM1Tkc1a0syWmpabVUwT1RrMWVEZGphMGc0ZHpSaE1URTFiekU0ZWpsNk1YRjNPV0UyWWxKaGNsZEZZVWhqYzNkNGJsbElheTluTW5CNU9HSm9XVkp2YmpGTFdHbGxaMmxaWkhkWVZUZGxZbGw1VDNSbVdXOUdWV1F5SzFBd1lrTXpUSGwwTmpOTGRHdFRTVFYxVFhWSVRsSm9aV2h6Ym1wUFF6TktjRXRITTJKQmVWSk1PR1pKY2poT1QxaHRiR2tyTVRSRk1HdHlaRmc1YzJwSk5qRXpjMVlyVVRaTk1rOVdjRmxzY0UwdlpGSndRekZOVWxaMVRIcEhOeTh3VWxKVmVsQkdhRzl4YTNoaGFXNHJRV05NVFM5S1NteDNVbTlvWVhVMlVFUmlXbXRUZUVWQ1pETTJXR2RrWW5VclJEQkpTRFJXVTJzdmFUSmxOblJHZFZCMU1IWlRhREpOTVVSelJIVkpZbTluU2prdmJWcEliVWwyYzBWbVMyNDNkazVGWWtoWGIyWnBUMVZXVFdRclRHTnVUbmMxV0dSWmFFOW9TWFpzY1RsWU5YVlRjVXRrYjJacVMyVjNaREJXT1Zjd05XbHdZek5XZUcxbUsyeEhXazh6YzBKRFVFWTVlR1ZuWm00NU1FODJlRVUwVm1Wa1NsRkVUa1U0Y2s5clowUlhUV2gxY2xnNWEzQlFiRmRMUmxsRmR5dE5iRTF2V0ZGMlV6ZERkbXhXVDJKdGFsUTVTVGxKTUZFdmVHdzRWVFJXUjBoSFMwd3ZXVlZyV2s1d1pURkVZekZMYnpJd2NqaHphazB3T1hkVFNWUnZSV1l4WVhOb09HeDNSVlpoUm5WRFYyNDJhM1JxYUhKc01WSlphbTAwYUVoek16WlFURFk1YUZWV1VYaHlXblZrVlRWUGNTOUxhMUpJTkVnM09IRk5aU3RaYXpWMU5qRlJNall4Y2s5QlJEWndlVVlyTUdoWVMyMVdLM1ZrT1U1Sk5qQm5lSEI0YmxCNVlXOW9UMVo1ZVRaUE9XMWpPR2czV0U4cmEyeFBZbTByT1VZeVJXNVlSbGhVYkc5TlkxSkliVnBJVm1KTWJGQmxTVE52Ym1aVmJFOWlhWGc1UkRGamMxbHZjQzlqWnpORVF6VllUa3RHVUdWM04zRnVka1UzT0hCck1qWlNVRmhFZFVVNVlrZEhjbUZET1VWdlNIRXdUMDlCYkdGMVJGRnVUak5VYjNFNWJHdFpNWE5aT1c5NEwyaHVMekl5UkdKdFdrZFhka2hSSzBabFNXZ3lhRXA1YzFZeFVsWXpWRnBhWWxONlRtRlljV0oxVW10dVdIRmhPSFkwWm05WmMycEtRbkI1YXpKRFdGZFpaV3d3V25KeFRtSnpVeTl0VnpWSVJVdEpaalJxU0UxM00xVm9kV2hDZVRocFZrOU9ia2h0YkM5U1FTdHFPVEY1YlRaTVl6TTJTWHAxZFVJMk1HTTFSbVZ0Y0hoSFRHcHVMMFZTTTBKNWFUZFlUM2xOYVdWbWFDdG9WWGhSWm05aFJuVnRkazlQZUZZMVkzZzFhekpJSzB0TWVXMVNTV2hQYWsxdU9UVmhkbG96WlZsSE1XZFNiMnN3TlhWVFJXNUhNRXN3UjBRdlVIbFlNbXd2TTBaek9HVk9OM2RyZVd0M01WcEtXVU0wVDNKaVJUTmpTREpKVG5WTWJXNUllRVZSWW5KeFVERXhNRWt2TlVFclZYbEdSRE5RZVdGRGEyWlpMMHRwTkZOWk9HcFlPVlpzVkd3MVVFVlJURlJDTkhGRmQzSnRZbk5TWmpkTFQxRlBSM05MS3pKV05IRTROVkVyWmtWVVJVdExabTFSWW5nM1lWbG5NR1J1TlVsMmVXbDRkbEZ3V0hOTFMzbGphRTVuVWk5VlMxRmxUemhTUVhSNFJETkhRelZGZGtaQ2RYRkNOMFV5U25nNFQwOXJXV1JDYVVsbGIyZE9lRXd6V1c5V1UzUjRWRlUzVjBSVmNITkxaM2MyTkhoMVRtSXplSFY1WTI1VGRHbEdSV1V5VUZCdVRIY3lORUpwTVVkUGFWUnVOVkF6VFVJdlNEVlBWRmhpV0RKSk9YTk9aamhZUzBsRk0wdzNha2RFWjBkTkwwcHRNMmw2VVhveldDdE9TR0ZKV1U5UFZWbGthR0pYY3pOV2RWSjJhSHBJUVRCRGRXZFpaVVkzTkd4ellqTjNibWt4VVRFM1dEUllSV3RHUkd3NVdGWmlZVVZMU1RsdFpqaEtRbE51YUdWcGIzSlZVM05MT0hKNmJVOXZaREZKV0d4UFdYUnRaVk5YTTFKc1NGVjBia1ZGYm1kcVVuTllNazhyVmxaR0wyMDRMMGhaVVc5TFQzSlZhM2x5Y1ZnclRFcEZVREV3UWtabGNVdzBMMjAwU205UldHUnlTSFZKWkZZMVRHdG9UM0p4VUZCd1dtaHFlSEk1Y25KcE5rMVVjbGRYYjJRNUt5dG9ORTV5Unl0cFZ6RnRiVEJWWm0xRVQya3lSSFF6Y1N0bmVtc3hPRGhFVWtodWNYazVUMGxFWkVkNE1YRnFWMHR6SzFoRk4wNWhaazVLTmxaYVJtVmxaalZNU0dKd1RVZ3lSa1UxY3pWbFVYTk1Sa1ZsTlVoNWFuVkljQzlJUzJKT1JrZHVUSGxFZUhseVQwWlFMMEZDT0hKek1IaFBNWFkwWmtvMVRrMDVVRXA0VDBWclFVRkJRVUZUVlZaUFVrczFRMWxKU1QwaUx6NE5Dand2WkdWbWN6NE5Dand2YzNablBnMEtcIiIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9zcGVlZC1lODk4NDNjN2U3ODJlOTg5ODIyZDZiN2ZiMTFiMjZmYy5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpTVRFd0lpQm9aV2xuYUhROUlqRXhNQ0lnZG1sbGQwSnZlRDBpTUNBd0lERXhNQ0F4TVRBaUlHWnBiR3c5SW01dmJtVWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SStEUW84Y0dGMGFDQmtQU0pOTnpVZ01FZ3pOVU14TlM0Mk55QXdJREFnTVRVdU5qY2dNQ0F6TlZZM05VTXdJRGswTGpNeklERTFMalkzSURFeE1DQXpOU0F4TVRCSU56VkRPVFF1TXpNZ01URXdJREV4TUNBNU5DNHpNeUF4TVRBZ056VldNelZETVRFd0lERTFMalkzSURrMExqTXpJREFnTnpVZ01Gb2lJR1pwYkd3OUlpTkZORVpHUlVVaUx6NE5Danh3WVhSb0lHUTlJazAzT1M0ME56ZzVJRFkyTGpVNE9VdzNPUzR6TlRrNUlEWXlMamcxTkRGRE56a3VNelV4SURZeUxqVTBNalVnTnprdU1qZ3dOeUEyTWk0eU16VTNJRGM1TGpFMU15QTJNUzQ1TlRFelF6YzVMakF5TlRNZ05qRXVOalkzSURjNExqZzBNamNnTmpFdU5ERXdOaUEzT0M0Mk1UVTRJRFl4TGpFNU5qbEROemd1TXpnNE9DQTJNQzQ1T0RNeklEYzRMakV5TVRrZ05qQXVPREUyTmlBM055NDRNekEwSURZd0xqY3dOakpETnpjdU5UTTRPU0EyTUM0MU9UVTVJRGMzTGpJeU9EVWdOakF1TlRRME1TQTNOaTQ1TVRZNUlEWXdMalUxTkV3M05pNDBNU0EyTUM0MU5qbEROelV1TkRVMU5DQTFOaTQwTnpZMklEY3pMak14TURVZ05USXVOelU0TkNBM01DNHlORFU1SURRNUxqZzRNekZNTnpBdU1qRXpPU0EwT1M0NE5UTXhRelk0TGpNeU5EZ2dORGd1TURZNElEWTJMakV5TlRnZ05EWXVOalF5TmlBMk15NDNNalE1SURRMUxqWTBOMHczTUM0eU56UWdORFV1TkRRM01VTTNNQzQyTkRrMklEUTJMalF4TlRRZ056RXVNelUxTmlBME55NHlNVGszSURjeUxqSTJOeklnTkRjdU56RTNOa00zTXk0eE56ZzNJRFE0TGpJeE5UUWdOelF1TWpNM0lEUTRMak0zTkRnZ056VXVNalUwTnlBME9DNHhOamMwUXpjMkxqSTNNalFnTkRjdU9UWWdOemN1TVRnMElEUTNMak01T1RJZ056Y3VPREk0TVNBME5pNDFPRFEwUXpjNExqUTNNakVnTkRVdU56WTVOaUEzT0M0NE1EY3pJRFEwTGpjMU16RWdOemd1TnpjMElEUXpMamN4TlVNM09DNDNNemM1SURReUxqVTBOelFnTnpndU1qUXdOaUEwTVM0ME5ERTNJRGMzTGpNNU1Ea2dOREF1TmpRd01VTTNOaTQ1TnpBNElEUXdMakkwTVRrZ056WXVORGMxTlNBek9TNDVNekUySURjMUxqa3pNemtnTXprdU56STNNa00zTlM0ek9USXpJRE01TGpVeU1qa2dOelF1T0RFMU5DQXpPUzQwTWpnMklEYzBMakl6TnlBek9TNDBOVU0zTXk0d056RWdNemt1TkRnek5pQTNNUzQ1TmpZZ016a3VPVGM1SURjeExqRTJOU0EwTUM0NE1qY3hRemN3TGpjeE56Z2dOREV1TXpBek9TQTNNQzR6T0RFZ05ERXVPRGN6TkNBM01DNHhOemc1SURReUxqUTVOVXcxT0M0ek9EYzVJRFF5TGpnME9ERk1OVGd1TXpjME9TQTBNaTQwTkRoRE5UZ3VNelkyTVNBME1pNHhNelkwSURVNExqSTVOVGtnTkRFdU9ESTVOaUExT0M0eE5qZ3pJRFF4TGpVME5USkROVGd1TURRd05pQTBNUzR5TmpBNElEVTNMamcxT0NBME1TNHdNRFEwSURVM0xqWXpNU0EwTUM0M09UQTNRelUzTGpRd05ERWdOREF1TlRjM0lEVTNMakV6TnpJZ05EQXVOREV3TXlBMU5pNDRORFUySURRd0xqTkROVFl1TlRVME1TQTBNQzR4T0RrM0lEVTJMakkwTXpVZ05EQXVNVE00SURVMUxqa3pNVGtnTkRBdU1UUTRURFV5TGpFMU56a2dOREF1TWpVek1VTTFNUzQ0TkRZNUlEUXdMakkyTVRVZ05URXVOVFF3TnlBME1DNHpNekV5SURVeExqSTFOamtnTkRBdU5EVTROVU0xTUM0NU56TXhJRFF3TGpVNE5UZ2dOVEF1TnpFM015QTBNQzQzTmpneUlEVXdMalV3TkRJZ05EQXVPVGswT0VNMU1DNHlPVEV4SURReExqSXlNVFFnTlRBdU1USTFNU0EwTVM0ME9EZ2dOVEF1TURFMU5pQTBNUzQzTnpreFF6UTVMamt3TmlBME1pNHdOekF5SURRNUxqZzFOVEVnTkRJdU16Z3dNaUEwT1M0NE5qVTVJRFF5TGpZNU1URk1ORGt1T0RjNUlEUXpMakE1TVV3ek9DNHdPRGdnTkRNdU5EUTFRek0zTGpjeE1qUWdOREl1TkRjMk5pQXpOeTR3TURZeklEUXhMalkzTWpNZ016WXVNRGswT0NBME1TNHhOelExUXpNMUxqRTRNeklnTkRBdU5qYzJOaUF6TkM0eE1qUTVJRFF3TGpVeE56TWdNek11TVRBM01TQTBNQzQzTWpRM1F6TXlMakE0T1RRZ05EQXVPVE15SURNeExqRTNOemdnTkRFdU5Ea3lPQ0F6TUM0MU16TTRJRFF5TGpNd056ZERNamt1T0RnNU55QTBNeTR4TWpJMUlESTVMalUxTkRjZ05EUXVNVE00T1NBeU9TNDFPRGdnTkRVdU1UYzNRekk1TGpZeU1ESWdORFl1TWpFek5DQXpNQzR3TVRjMElEUTNMakl3TlNBek1DNDNNRGsxSURRM0xqazNOekZETXpFdU5EQXhOaUEwT0M0M05Ea3lJRE15TGpNME5ERWdORGt1TWpVeUlETXpMak0zTURnZ05Ea3VNemsyT1VNek5DNHpPVGMxSURRNUxqVTBNVGdnTXpVdU5EUXlNeUEwT1M0ek1UazFJRE0yTGpNeU1URWdORGd1TnpZNU1rTXpOeTR4T1RrNUlEUTRMakl4T0RrZ016Y3VPRFUySURRM0xqTTNOaUF6T0M0eE56TTVJRFEyTGpNNE9URk1ORFF1TnpJeklEUTJMakU0T1VNME1TNDJOekF6SURRM0xqWTRNellnTXprdU1ERTJOQ0EwT1M0NE9ESXpJRE0yTGprNE1ESWdOVEl1TmpBek9FTXpOQzQ1TkRNNUlEVTFMak15TlRNZ016TXVOVGd6TkNBMU9DNDBPVEUzSURNekxqQXhNRGtnTmpFdU9EUXlNVXd6TWk0ek9EQTVJRFl4TGpnMk1VTXpNUzQzTlRFNElEWXhMamc0TVRFZ016RXVNVFUyTlNBMk1pNHhOU0F6TUM0M01qVXpJRFl5TGpZd09EWkRNekF1TWprME1TQTJNeTR3TmpjeElETXdMakEyTWpRZ05qTXVOamMzT1NBek1DNHdPREVnTmpRdU16QTNNVXd6TUM0eE9UazVJRFk0TGpBMU56RkRNekF1TWpBNE55QTJPQzR6TmpnM0lETXdMakkzT0RrZ05qZ3VOamMxTlNBek1DNDBNRFkySURZNExqazFPVGxETXpBdU5UTTBNaUEyT1M0eU5EUXpJRE13TGpjeE5qZ2dOamt1TlRBd055QXpNQzQ1TkRNNElEWTVMamN4TkRSRE16RXVNVGN3T0NBMk9TNDVNamd4SURNeExqUXpOemNnTnpBdU1EazBPQ0F6TVM0M01qa3pJRGN3TGpJd05URkRNekl1TURJd09TQTNNQzR6TVRVMElETXlMak16TVRNZ056QXVNelkzTVNBek1pNDJOREk1SURjd0xqTTFOekZNTXpZdU16azBJRGN3TGpJME5VTXpOeTR3TWpNZ056QXVNakkwTnlBek55NDJNVGd6SURZNUxqazFOVGNnTXpndU1EUTVOQ0EyT1M0ME9UY3lRek00TGpRNE1EVWdOamt1TURNNE9DQXpPQzQzTVRJeUlEWTRMalF5T0RFZ016Z3VOamt6T1NBMk55NDNPVGxNTXpndU5UYzBPU0EyTkM0d05EaERNemd1TlRZMk1pQTJNeTQzTXpZMElETTRMalE1TmpFZ05qTXVOREk1TlNBek9DNHpOamcxSURZekxqRTBOVEZETXpndU1qUXdPU0EyTWk0NE5qQTJJRE00TGpBMU9EUWdOakl1TmpBME1TQXpOeTQ0TXpFMElEWXlMak01TURSRE16Y3VOakEwTkNBMk1pNHhOelkzSURNM0xqTXpOelFnTmpJdU1EQTVPU0F6Tnk0d05EVTNJRFl4TGpnNU9UZERNell1TnpVME1TQTJNUzQzT0RrMUlETTJMalEwTXpVZ05qRXVOek00SURNMkxqRXpNVGtnTmpFdU56UTRNVWd6Tmk0d01qUkRNell1TnpRM05TQTFPQzR5TXpVMElETTRMalEzTkRrZ05UVXVNREE0SURRd0xqazVOamdnTlRJdU5EVTNPVU0wTXk0MU1UZzJJRFE1TGprd056Z2dORFl1TnpJMk5DQTBPQzR4TkRRMUlEVXdMakl6TURrZ05EY3VNemd5UXpVd0xqTTFOU0EwTnk0Mk5Ea3lJRFV3TGpVeU9Ua2dORGN1T0RnNU55QTFNQzQzTkRVNUlEUTRMakE1UXpVd0xqazNNeUEwT0M0ek1ETTRJRFV4TGpJME1ERWdORGd1TkRjd05pQTFNUzQxTXpFNElEUTRMalU0TURkRE5URXVPREl6TmlBME9DNDJPVEE1SURVeUxqRXpORE1nTkRndU56UXlOQ0ExTWk0ME5EWWdORGd1TnpNeU1VdzFOaTR4T1RjZ05EZ3VOakpETlRZdU5qVTJJRFE0TGpZd05UVWdOVGN1TVRBeElEUTRMalExTnprZ05UY3VORGMzTnlBME9DNHhPVFV4UXpVM0xqZzFORFVnTkRjdU9UTXlOQ0ExT0M0eE5EWTNJRFEzTGpVMk5UZ2dOVGd1TXpFNE9TQTBOeTR4TkRBeFF6WXhMamcyT0RRZ05EY3VOamt3T1NBMk5TNHhPREkySURRNUxqSTFOemNnTmpjdU9EWXdPU0ExTVM0Mk5URXlRemN3TGpVek9USWdOVFF1TURRME55QTNNaTQwTmpjeUlEVTNMakUyTWpZZ056TXVOREV4T1NBMk1DNDJNamd4VERjekxqRTRNU0EyTUM0Mk16VXhRemN5TGpVMU1pQTJNQzQyTlRVMElEY3hMamsxTmpjZ05qQXVPVEkwTkNBM01TNDFNalUySURZeExqTTRNamxETnpFdU1EazBOU0EyTVM0NE5ERXpJRGN3TGpnMk1qWWdOakl1TkRVeUlEY3dMamc0TURrZ05qTXVNRGd4TVV3M01DNDVPVGs1SURZMkxqZ3pNVEZETnpFdU1EQTROeUEyTnk0eE5ESTNJRGN4TGpBM09TQTJOeTQwTkRrMUlEY3hMakl3TmpZZ05qY3VOek16T1VNM01TNHpNelF6SURZNExqQXhPRE1nTnpFdU5URTJPU0EyT0M0eU56UTRJRGN4TGpjME16Z2dOamd1TkRnNE5VTTNNUzQ1TnpBNElEWTRMamN3TWpFZ056SXVNak0zTnlBMk9DNDROamc1SURjeUxqVXlPVElnTmpndU9UYzVNa00zTWk0NE1qQTRJRFk1TGpBNE9UVWdOek11TVRNeE5DQTJPUzR4TkRFZ056TXVORFF5T1NBMk9TNHhNekZNTnpjdU1Ua3pPU0EyT1M0d01Ua3hRemMzTGpVd016Y2dOamt1TURFd01pQTNOeTQ0TURnM0lEWTRMamswTURFZ056Z3VNRGt4TkNBMk9DNDRNVE5ETnpndU16YzBJRFk0TGpZNE5pQTNPQzQyTWpnNElEWTRMalV3TkRRZ056Z3VPRFF4TVNBMk9DNHlOemcyUXpjNUxqQTFNelFnTmpndU1EVXlPQ0EzT1M0eU1Ua2dOamN1TnpnM05DQTNPUzR6TWpnMElEWTNMalE1TnpWRE56a3VORE0zT1NBMk55NHlNRGMxSURjNUxqUTRPVEVnTmpZdU9EazRPQ0EzT1M0ME56ZzVJRFkyTGpVNE9WWTJOaTQxT0RsYVRUTTFMamN5TlRrZ05qY3VNelEzTVV3ek15NHdPVGNnTmpjdU5ESTJNVXd6TXk0d01USTVJRFkwTGpjNU4wd3pOUzQyTkRFNUlEWTBMamN4T0RGTU16VXVOekkxT1NBMk55NHpORGN4V2swM05DNHpNRGc1SURReUxqTTROME0zTkM0MU9UWTJJRFF5TGpNM09EZ2dOelF1T0Rnd015QTBNaTQwTlRZeUlEYzFMakV5TkRFZ05ESXVOakE1TWtNM05TNHpOamM1SURReUxqYzJNaklnTnpVdU5UWXhJRFF5TGprNE5DQTNOUzQyTnpnNElEUXpMakkwTmpaRE56VXVOemsyTmlBME15NDFNRGt6SURjMUxqZ3pNemdnTkRNdU9EQXdPQ0EzTlM0M09EVTVJRFEwTGpBNE5EWkROelV1TnpNNE1TQTBOQzR6TmpnMUlEYzFMall3TnpJZ05EUXVOak14T0NBM05TNDBNRGszSURRMExqZzBNVEpETnpVdU1qRXlNeUEwTlM0d05UQTNJRGMwTGprMU56SWdORFV1TVRrMk9TQTNOQzQyTnpZM0lEUTFMakkyTVRSRE56UXVNemsyTWlBME5TNHpNalU1SURjMExqRXdNamtnTkRVdU16QTFPU0EzTXk0NE16TTRJRFExTGpJd016aEROek11TlRZME55QTBOUzR4TURFM0lEY3pMak16TVRnZ05EUXVPVEl5TWlBM015NHhOalEzSURRMExqWTROemhETnpJdU9UazNOaUEwTkM0ME5UTTBJRGN5TGprd016Z2dORFF1TVRjME55QTNNaTQ0T1RVZ05ETXVPRGczUXpjeUxqZzRPVFlnTkRNdU5qazFOU0EzTWk0NU1qSXhJRFF6TGpVd05Ea2dOekl1T1Rrd09DQTBNeTR6TWpZeFF6Y3pMakExT1RRZ05ETXVNVFEzTXlBM015NHhOakk1SURReUxqazRNemNnTnpNdU1qazFJRFF5TGpnME5VTTNNeTQxTmlBME1pNDFOalUySURjekxqa3lOQ0EwTWk0ME1ERXhJRGMwTGpNd09Ea2dOREl1TXpnM1ZqUXlMak00TjFwTk16UXVNREkxT1NBME5pNDFNalV4UXpNekxqY3pPRElnTkRZdU5UTXpNaUF6TXk0ME5UUTJJRFEyTGpRMU5Ua2dNek11TWpFd09DQTBOaTR6TURJNVF6TXlMamsyTmprZ05EWXVNVFE1T1NBek1pNDNOelFnTkRVdU9USTRNaUF6TWk0Mk5UWXlJRFExTGpZMk5UWkRNekl1TlRNNE5DQTBOUzQwTURNZ016SXVOVEF4SURRMUxqRXhNVE1nTXpJdU5UUTRPU0EwTkM0NE1qYzBRek15TGpVNU5qZ2dORFF1TlRRek5pQXpNaTQzTWpjM0lEUTBMakk0TURNZ016SXVPVEkxTVNBME5DNHdOekE0UXpNekxqRXlNalVnTkRNdU9EWXhOQ0F6TXk0ek56YzJJRFF6TGpjeE5USWdNek11TmpVNE1TQTBNeTQyTlRBM1F6TXpMamt6T0RZZ05ETXVOVGcyTVNBek5DNHlNeklnTkRNdU5qQTJNaUF6TkM0MU1ERXlJRFF6TGpjd09ETkRNelF1Tnpjd015QTBNeTQ0TVRBMElETTFMakF3TXlBME15NDVPVEF4SURNMUxqRTNNREVnTkRRdU1qSTBORU16TlM0ek16Y3lJRFEwTGpRMU9EZ2dNelV1TkRNeE1TQTBOQzQzTXpjMElETTFMalF6T1RrZ05EVXVNREkxTVVNek5TNDBORFUzSURRMUxqSXhOallnTXpVdU5ERXpPU0EwTlM0ME1EY3pJRE0xTGpNME5Ua2dORFV1TlRnMk5VTXpOUzR5TnpjNUlEUTFMamMyTlRZZ016VXVNVGMxTWlBME5TNDVNamsySURNMUxqQTBNemdnTkRZdU1EWTVRek0wTGpreE1qTWdORFl1TWpBNE5DQXpOQzQzTlRRM0lEUTJMak15TURjZ016UXVOVGM1T1NBME5pNHpPVGt4UXpNMExqUXdOVEVnTkRZdU5EYzNOU0F6TkM0eU1UWTFJRFEyTGpVeU1EWWdNelF1TURJMUlEUTJMalV5Tmt3ek5DNHdNalU1SURRMkxqVXlOVEZhVFRVeUxqZzVPU0EwTlM0NE1EWXhURFV5TGpneE5Ea2dORE11TVRjM1REVTFMalEwTXprZ05ETXVNRGs0TVV3MU5TNDBPRFU1SURRMExqUXdOVEZNTlRVdU5USTNPU0EwTlM0M01USXhURFV5TGpnNU9TQTBOUzQ0TURZeFdrMDNNeTQ1TURVZ05qWXVNVGswVERjekxqZ3lNU0EyTXk0MU5qVk1Oell1TkRRNU9TQTJNeTQwT0RjeFREYzJMalV6TkNBMk5pNHhNVFpNTnpNdU9UQTFJRFkyTGpFNU5Gb2lJR1pwYkd3OUlpTTBNRGszTlVZaUx6NE5Dand2YzNablBnMEtcIiIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9sb2dvLWRhcmstOGVkZWU0NjdhMmExYzZlZTVmYTllOTIyNDg3NTkzOTUuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2xvZ28tN2FhYjg4MmEyZjdlNzBkNzQ1NGIyNDliNzFmODU5ZWUuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3BhcnRuZXItY2RiYzlhMDA0YjE3OGI0NWY4OGU1NmIyZWRhMGJlMjAucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3BhdHRlcm5CRy1iYTFmZmQwNDM3MDhiNGYyZTRlYjgzYzFiYTc2ZmJhYS5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvcGF5bWVudC1wYXR0ZXJuLWQwNGQ1MTA3NjVjOWMzNzg0N2U3YzczNGVkMTkzYTY4LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9wYXltZW50VGh1bWItODlhYTk2NDJlNmIzNDg0MjY1M2UyZTg2MTEwM2M0YmEucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjNhV1IwYUQwaU1USXpJaUJvWldsbmFIUTlJakkwSWlCMmFXVjNRbTk0UFNJd0lEQWdNVEl6SURJMElpQm1hV3hzUFNKdWIyNWxJaUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lQZzBLUEhCaGRHZ2daRDBpVFRFMExqSTJPQ0EwTGpVd09UbE1OeTR4TXpRZ09TNHdNVGs0TVV3eE5DNHlOamdnTVRNdU5USTVOMHczTGpFek5DQXhPQzR3TXprMlREQWdNVE11TlRBMU0wdzNMakV6TkNBNExqazVOVFF6VERBZ05DNDFNRGs1VERjdU1UTTBJREJNTVRRdU1qWTRJRFF1TlRBNU9WcE5OeTR3T1RjeElERTVMalE1TURGTU1UUXVNak14TVNBeE5DNDVPREF5VERJeExqTTJOVEVnTVRrdU5Ea3dNVXd4TkM0eU16RXhJREkwVERjdU1EazNNU0F4T1M0ME9UQXhXazB4TkM0eU5qZ2dNVE11TlRBMU0wd3lNUzQwTURJZ09DNDVPVFUwTTB3eE5DNHlOamdnTkM0MU1EazVUREl4TGpNMk5URWdNRXd5T0M0ME9Ua3hJRFF1TlRBNU9Vd3lNUzR6TmpVeElEa3VNREU1T0RGTU1qZ3VORGs1TVNBeE15NDFNamszVERJeExqTTJOVEVnTVRndU1ETTVOa3d4TkM0eU5qZ2dNVE11TlRBMU0xb2lJR1pwYkd3OUlpTkNOMEpGUXpraUx6NE5Danh3WVhSb0lHUTlJazB6TkM0d09UVTJJRFF1TlRBNU9UUklNemt1T0RZME0wTTBNeTQxTkRJZ05DNDFNRGs1TkNBME5pNDFPREF4SURZdU5qRTROak1nTkRZdU5UZ3dNU0F4TVM0ME16TXpWakV5TGpRME5EbERORFl1TlRnd01TQXhOeTR5T1RZeElEUXpMamN6T0RnZ01Ua3VORGM0SURNNUxqazNOU0F4T1M0ME56aElNelF1TURrMU5sWTBMalV3T1RrMFdrMHpOeTR6TVRneUlEY3VNakk0TURoV01UWXVOelEzTmtnek9TNDNPVEExUXpReExqZzRNVFVnTVRZdU56UTNOaUEwTXk0eU9ETTNJREUxTGpNNU5EY2dORE11TWpnek55QXhNaTR6T0RSV01URXVOVGt4TjBNME15NHlPRE0zSURndU5UZ3hNRFVnTkRFdU9EQTNOeUEzTGpJeU9EQTRJRE01TGpZM09UZ2dOeTR5TWpnd09FZ3pOeTR6TVRneVdrMDBPQzR5T0RrNElEY3VNemMwTXpSSU5UQXVPRGN5T0V3MU1TNHlPVEVnTVRBdU1UbEROVEV1TnpneklEZ3VNamMyTXpJZ05UTXVNRE0zTmlBM0xqSTFNalExSURVMUxqTXhNekVnTnk0eU5USTBOVWcxTmk0eE1USTJWakV3TGpRNE1qVklOVFF1TnpnME1rTTFNaTR4TmpReklERXdMalE0TWpVZ05URXVOVEkwTnlBeE1TNHpPRFExSURVeExqVXlORGNnTVRNdU9UUTBNbFl4T1M0MU1UUTFTRFE0TGpNek9WWTNMak0zTkRNMFNEUTRMakk0T1RoYVRUVTJMamMxTWpJZ01UTXVOamc0TWxZeE15NHpORFk1UXpVMkxqYzFNaklnT1M0eU9EZ3dNU0ExT1M0ek56SXhJRGN1TURZNU5qSWdOakl1T1RNNU1TQTNMakEyT1RZeVF6WTJMalUzT1RnZ055NHdOamsyTWlBMk9TNHhNalU1SURrdU1qZzRNREVnTmprdU1USTFPU0F4TXk0ek5EWTVWakV6TGpZNE9ESkROamt1TVRJMU9TQXhOeTQyTnpRZ05qWXVOalV6TnlBeE9TNDRNVGt5SURZeUxqa3pPVEVnTVRrdU9ERTVNa00xT0M0NU9UQTRJREU1TGpjNE1qY2dOVFl1TnpVeU1pQXhOeTQyT0RZeUlEVTJMamMxTWpJZ01UTXVOamc0TWxwTk5qVXVPRFkyTkNBeE15NDJOVEUyVmpFekxqTTBOamxETmpVdU9EWTJOQ0F4TVM0d09USWdOalF1TnpJeU5TQTVMamN6T1NBMk1pNDVNREl5SURrdU56TTVRell4TGpFeE9EY2dPUzQzTXprZ05Ua3VPVE0zT1NBeE1DNDVPREl6SURVNUxqa3pOemtnTVRNdU16UTJPVll4TXk0Mk5URTJRelU1TGprek56a2dNVFV1T0RNek5TQTJNUzR3T0RFNElERTNMakEzTmpjZ05qSXVPVEF5TWlBeE55NHdOelkzUXpZMExqY3lNalVnTVRjdU1EUXdNaUEyTlM0NE5qWTBJREUxTGpnek16VWdOalV1T0RZMk5DQXhNeTQyTlRFMldrMDNNQzQzT1RnM0lEY3VNemMwTXpSSU56TXVORFUxTlV3M015NDNOak1nT1M0Mk5qVTROa00zTkM0ME1ESTJJRGd1TVRNd01EWWdOelV1TnpZM09TQTNMakEyT1RZeUlEYzNMamM0TlRFZ055NHdOamsyTWtNNE1DNDRPVGNnTnk0d05qazJNaUE0TWk0NU5URXhJRGt1TWpnNElEZ3lMamsxTVRFZ01UTXVNemsxTjFZeE15NDNNemRET0RJdU9UVXhNU0F4Tnk0M01qSTNJRGd3TGpZM05UWWdNVGt1T0RNeE5DQTNOeTQzT0RVeElERTVMamd6TVRSRE56VXVPRFUwSURFNUxqZ3pNVFFnTnpRdU5USTFOaUF4T0M0NU5qWWdOek11T0Rjek55QXhOeTQxTnpZMVZqSXpMamN3TnpWSU56QXVOell4T0V3M01DNDNPVGczSURjdU16YzBNelJhVFRjNUxqY3hOaklnTVRNdU5qVXhObFl4TXk0ek9ETTFRemM1TGpjeE5qSWdNVEF1T1Rjd01TQTNPQzQwTmpFMklEa3VOemMxTlRZZ056WXVOemc0T0NBNUxqYzNOVFUyUXpjMUxqQXdOVE1nT1M0M056VTFOaUEzTXk0NE1qUTFJREV4TGpFeU9EVWdOek11T0RJME5TQXhNeTR6T0RNMVZqRXpMall4TlRGRE56TXVPREkwTlNBeE5TNDNOakF6SURjMExqazJPRFFnTVRjdU1URXpNeUEzTmk0M05URTVJREUzTGpFeE16TkROemd1TlRnME5pQXhOeTR3TnpZM0lEYzVMamN4TmpJZ01UVXVPVEU0T0NBM09TNDNNVFl5SURFekxqWTFNVFphVFRnM0xqWTJNaUF4Tnk0eU56RTRURGczTGpNNU1UUWdNVGt1TkRrd01VZzROQzQyTmpBNFZqTXVNekUxTkROSU9EY3VOemN5TjFZNUxqVXhPVFU1UXpnNExqUTJNVFVnTnk0NU16VXdNeUE0T1M0NE1qWTRJRGN1TURZNU5qSWdPVEV1TnpVM09TQTNMakEyT1RZeVF6azBMalk0TlRNZ055NHhNRFl4T1NBNU5pNDROVEF4SURrdU1UQTFNVGNnT1RZdU9EVXdNU0F4TXk0eE1qYzFWakV6TGpVd05UUkRPVFl1T0RVd01TQXhOeTQxTWpjM0lEazBMamM1TmlBeE9TNDRNekUwSURreExqWTROREVnTVRrdU9ETXhORU00T1M0Mk15QXhPUzQzT0RJM0lEZzRMak13TVRZZ01UZ3VPRFEwTVNBNE55NDJOaklnTVRjdU1qY3hPRnBOT1RNdU5UYzRNeUF4TXk0MU1EVTBWakV6TGpJd01EZERPVE11TlRjNE15QXhNQzQ1T0RJeklEa3lMak0yTURZZ09TNDNNemtnT1RBdU5qVXdPU0E1TGpjek9VTTRPQzQ1TURReklEa3VOek01SURnM0xqWTROallnTVRFdU1USTROU0E0Tnk0Mk9EWTJJREV6TGpJek56SldNVE11TlRBMU5FTTROeTQyT0RZMklERTFMamMyTURNZ09EZ3VPRFkzTkNBeE55NHdOelkzSURrd0xqWXhOQ0F4Tnk0d056WTNRemt5TGpRNE16WWdNVGN1TURjMk55QTVNeTQxTnpneklERTFMamt4T0RnZ09UTXVOVGM0TXlBeE15NDFNRFUwV2swNU9DNHlNVFUwSURFekxqWTRPREpXTVRNdU16UTJPVU01T0M0eU1UVTBJRGt1TWpnNE1ERWdNVEF3TGpnek5TQTNMakEyT1RZeUlERXdOQzQwTURJZ055NHdOamsyTWtNeE1EZ3VNRFF6SURjdU1EWTVOaklnTVRFd0xqVTRPU0E1TGpJNE9EQXhJREV4TUM0MU9Ea2dNVE11TXpRMk9WWXhNeTQyT0RneVF6RXhNQzQxT0RrZ01UY3VOamMwSURFd09DNHdPQ0F4T1M0NE1Ua3lJREV3TkM0ME1ESWdNVGt1T0RFNU1rTXhNREF1TkRVMElERTVMamM0TWpjZ09UZ3VNakUxTkNBeE55NDJPRFl5SURrNExqSXhOVFFnTVRNdU5qZzRNbHBOTVRBM0xqTTFOQ0F4TXk0Mk5URTJWakV6TGpNME5qbERNVEEzTGpNMU5DQXhNUzR3T1RJZ01UQTJMakl4SURrdU56TTVJREV3TkM0ek9TQTVMamN6T1VNeE1ESXVOakEzSURrdU56TTVJREV3TVM0ME1qWWdNVEF1T1RneU15QXhNREV1TkRJMklERXpMak0wTmpsV01UTXVOalV4TmtNeE1ERXVOREkySURFMUxqZ3pNelVnTVRBeUxqVTNJREUzTGpBM05qY2dNVEEwTGpNNUlERTNMakEzTmpkRE1UQTJMakl5TXlBeE55NHdOREF5SURFd055NHpOVFFnTVRVdU9ETXpOU0F4TURjdU16VTBJREV6TGpZMU1UWmFUVEV4TkM0M05Ua2dNVE11TWpBd04wd3hNVEF1TkRZMklEY3VNemMwTXpSSU1URTBMakUwTkV3eE1UWXVOakUySURFeExqQXhPRGhNTVRFNUxqRXlOU0EzTGpNM05ETTBTREV5TWk0M05qWk1NVEU0TGpReE1pQXhNeTR4TmpReFRERXlNeUF4T1M0ME9UQXhTREV4T1M0ek9UWk1NVEUyTGpVNU1pQXhOUzQwTmpjNFRERXhNeTQ0TmpFZ01Ua3VORGt3TVVneE1UQXVNRGszVERFeE5DNDNOVGtnTVRNdU1qQXdOMW9pSUdacGJHdzlJaU5DTjBKRlF6a2lMejROQ2p3dmMzWm5QZzBLXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpT0RVaUlHaGxhV2RvZEQwaU1qZ2lJSFpwWlhkQ2IzZzlJakFnTUNBNE5TQXlPQ0lnWm1sc2JEMGlibTl1WlNJZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWlCNGJXeHVjenA0YkdsdWF6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNVGs1T1M5NGJHbHVheUkrRFFvOGNtVmpkQ0IzYVdSMGFEMGlPRFVpSUdobGFXZG9kRDBpTWpnaUlHWnBiR3c5SW5WeWJDZ2pjR0YwZEdWeWJqQXBJaTgrRFFvOFpHVm1jejROQ2p4d1lYUjBaWEp1SUdsa1BTSndZWFIwWlhKdU1DSWdjR0YwZEdWeWJrTnZiblJsYm5SVmJtbDBjejBpYjJKcVpXTjBRbTkxYm1ScGJtZENiM2dpSUhkcFpIUm9QU0l4SWlCb1pXbG5hSFE5SWpFaVBnMEtQSFZ6WlNCNGJHbHVhenBvY21WbVBTSWphVzFoWjJVd0lpQjBjbUZ1YzJadmNtMDlJblJ5WVc1emJHRjBaU2d0TUM0d01ERTVOakEzT0NrZ2MyTmhiR1VvTUM0d01EYzRORE14TkNBd0xqQXlNemd3T1RVcElpOCtEUW84TDNCaGRIUmxjbTQrRFFvOGFXMWhaMlVnYVdROUltbHRZV2RsTUNJZ2QybGtkR2c5SWpFeU9DSWdhR1ZwWjJoMFBTSTBNaUlnZUd4cGJtczZhSEpsWmowaVpHRjBZVHBwYldGblpTOXdibWM3WW1GelpUWTBMR2xXUWs5U2R6QkxSMmR2UVVGQlFVNVRWV2hGVldkQlFVRkpRVUZCUVVGeFEwRlpRVUZCUWpkMVZrNUVRVUZCU21oRmJFVlJWbEkwYms4eFkwSTBlRmRTVWtRck4yZERlRXQzV2tVMVJIb3hWSEY1U1c5blNUSnBhV3BHWjJscGFVMVlXVlUzU1dkR1RscGFXVTFHV1VWRVZYQkZWV0pIUW1GTVFWUkZWa2h6U0ZOMVMyNUphVWhwU1hKWlZVOUJOR3B2VFhwbk9UbE1UbkJPTlRjNUx6a3ZkMlZqSzB3M2EzZDBNaXN6V0RGaVdtMWtiblp3YkVnd1lWTndTSGxCUVRWUlFVOUNXRUZCWjBZd1FYUkJSRkZIVFVKTFFVdzRSQ3RCTjBGS2QwTnRRVWhuUkhkSmNWRjZhazl6WldablNWRkVSMEV6WjBGSFFUbG5MMWxKVVM5QlltZGlkMFF3UVVadFdqZEhORk5rUVVSNWFFZHNkMFEwVUcwd1dERlRZelF6YXpkQlFqaERaVVJ3ZHpoM1ZtSkJOMmRLVVVGWFFUUjNjMWswTHpoU1IzZEVXVkV2TVhOelZISlhTVlUwUVdsblFtTkVkVUprUVVoeldDdEpOSFJCVkhkUE5FRkZRVFo0V0ZsV05HRlZNR1JFYjNKblIwRXdVVVEyU21KNGNVdFVWa1JDV0N0WVRuRlZWV3h3V1hoaVZUUklPRUpsUVdrM1RrNXlSQzlSUVd4RFZWa3ZVRVp6VEhOVWQwTlJRWGt5VEhGcFRHODJhSGgyWlhsRGExaG5ZbXdyV0ZaeE9HUlJTRFpEYUdkamN5OXRMMEYxWjBSdlFYVkJXbmhOTWxndlFUVm5URTFDTjBGaVowaGFZa28xYm1WdVFuTm9VV29yUVV0M1JqUkJZbXBoUnpsb1ZsWXJlazlDZHpVMVJtZGlhM0V5TDNvMmFTdG5TMFZPVlM5cGJtVTFhVEJ2UVZoUlJYTjVTRTFIZEdaUlJVMTBVbFJTUW5GblRqRXdLM1pZYkRsRE9XbzRSRkE0UWxKQlNuZDJha2hWUlZkVU1VMXhla1JoUldwRGNIRjFZVzlvYURWME9XRnFZVkptVW5wWGVFcDZNRXN3TUcxM1FVNVRiakV6TkVvNFVsTXdXbnBFT1ZRMmJtUlVRVTUyZVdGMk1sSjRkbFJ4YUc1QmRESjNTRmxGVFVGbVFVOWhVbkZxWTJoQmRFTk9ReXQ0YVZscU1WSXZXRWwwYmxGbVoyTkJRazR4WWs1c1pFVjJTRUZLYWtGNlVYUkNSRE52T0ZseFFUSlZaVElyUWk5QlF6ZGhTM1pCZG5aa1IwMURXa0ZGTkVkelMyUTJPV2xYUVdnd2FWSjVlblEzY1hWamVXbzRWMEkzZDA5YWR6Vk5RVzVCY0dkWU1saE1MMUV4WjAxdlJHSkJSWHBVUkZOVlYwMUNURUYxWVhBNFFVbEVOemg0YUVsWGFFUmhZekpSUVdoVGQweGxlSEZCYW5vemNUZHJhRmM0YTBOUWRXNVZWWE5KY3psMldtbHFTMFJVVG1NNVUySjRVVEJhY21OeE0wSjZRMGhuZGs5d1pYUmhVSGR4VUZKb1YxQmplbTFPT0hOeFkwUkJWbEpJUW1GSlFsZG9hMVptVWxsNVVXbHNaSGxJZUZGVFpEZEJlRkUwUVZoMVdta3JTMGt4WjFCa05FTndOVTFoVGs5T1kxa3lUbEJtYzNSSmNVaFdhMXB3YVZSclRHUkxkMGhqTms1c2RrdDNZa3BEYzFWd00xQjRZMDFhTUVrdlVtNUdiR0pzVldkUlRGRjZTMmMwVERKQ1oxaFViVWxtUTBOck1IUkdUM1UyV1UxS1kyUktjelpxTlRWV1VqVkhiVWxpVUUxYU56ZDRXR3AxWVdwSE5USk1ZVFZyU1hJNWRHMWxMMWQxWTJ3eVVIcGhkek5YTVdGTWFGRTVRVGxaWms1eVIxbzFkbUZ5YWpKRmMyOW1Vakl5TVhGeVIzVkJRemQ1YlhOQ1Z6Wm9NbXBxVFRKMmJ5dHdjbEozVG01Uk1uRmtTek5wTDNWWmFVVlJUaTl3TUcxaE9ITm1iRlkxUTJ3eVdUbHpUbkZHU1c1SFNFMTJOUzluTUZKUWRtTlpXbFJRYjJaaVdXdHVNRE0xWkRsNlZURnFXRlJSUVRoaVIzb3JVRXcyYWtOa1pGYzFiazFOY25oM1dIWlhhM1p5VDNCbmNXWkhRM3BXU1Zsd1FTOWpSR1J0VUdjelYzaHVSbmhGVUhodmQyUlllakpCTkVKaVFVeFNiRVZ2Y1V3MWIzaHJkWEpwU1RGeVoweFhZWGd5V2tOd2JqaE9VbFV3TjBFNFJuTkRTbEpyVEV4elZWcFpMMGhaVmpoM1F6RlNVblZsTUUxcWVTODFNUzkwTWtkVmRGSkJUVTVCTjFCd01YbFFUVmswYUhWYWVGaHVkR2MzZGpacU5uZDJjWFZXTUhvelVrdFBPSGRCU0cxbk5FWkhiVGh6TldkVWFrazFkbU41VGs1WlFVb3ZWR05uUTNKaGVGRnhjWGRDYTBwbVdYVmhkazV2YjNZNFJEVm1WbVEyUlhrM2JWVktRVmg0WmxRM1JqVTVZbFkwYTNaNmJFUXhiR2RCTkVWelFuWlNkblE1Tms1TWNsRjVNblUzTTBoR2RFdEJNVVJuWjFsNlJHbHhTRW9yWmtneFZHSlRRMjlpTUU1V2VrbGhOMWxZVWpkMmJqSkdXWGd4Y3pSS04xVmtTaXQwYVhKTFpXaFBPWGwzYURRMWR6ZDFPQ3RTY0hOb2VIUlhhMDFrT1hwaWFGbHJWelpvVFd4a0syNTRjbXNyZG1GTFVDdElUV0Y1ZWxFMlJteFFiR0ZtVVU1SFJrRk9WVGMxZVM5amFYQXlNR0V4Y21WVEwxcFRVazVZUkhkaU5FNTFVRTQ0Y1dsU1NsbzVha2RtYWxCUWRWWjFWREpzZVdwaWFVcG5aelp4UjJaTVdTdDNTRU0zY0daWU4xRjRObXN6YVhZMlN6Vm9NVXR5YWpSdFdtVjZXSFJDZWtadmVuaEtTbVp3ZG5GNVJUQTFZV3RPYWpaUVZUaENNbTFvZFRGRlZ5dGljRmRGYTIxVFpYWmhjRmMxVEZFNUwxTkJkbWt3YVdGSGRWZHNObXA1TjNoS1ZYWXdZa2t2Um5oWk9ESnNUbkp4UzBoUlpYQkdiVVV6V0dNMGVEY3ZVbE5VVlZKMGNrNU1aekYzVEM4d2QyTnNSMjVoYms5UFJGTlhRbEJTZEVkaVRGSlJhbEV5Ym14VllscFlSM2RPYWxKVGNEbHhja05DYm5wcGNHaDROVFJRYUZwQ1dERTFjVGxyU1cxc1VFVnRSRVIwVHpCU1RHWjZkR2hwU0ZadWNUVlhSM1ZvUVRFNFVFWmFORFUzV1hKR2MzQlJTSFowWlhCSFpsWnhSMnRpV1VwcmNVTjJUR1JEYVdoNFJYcHBSWFZJY3psQmExUXdOME5TT0dkWE1Fd3paRzUxY3l0UFV6UmxSVUZ1UVZoRllpOU9TV0pSU0ZOdlJYcFpkMVZhZVdsbUsyaDBhbWRPY1RaVWIwb3hkbFZSY1dSeFluaHlSblJCTTNkallscFNXSEZJVWtkaGF6RlFkMUZoWlVGTlltbzBUM1ZJV2xkM1FrOXZUa0psTldOTk5YVkxjak5YWjBSbVIzTTRaa0ZZUW1oM2RESlRhRVJNWVVWa2IwaHlNVlJ6TkZOTGJXcGlibTlpVDFGdlYwSkJWbEF3YVZacGVrTTVlSFF2Wms1SlZISm1UVGhOTldRd1RqUm1jbU13VVVKVWFrUmhXR1YyVVV4Skx6ZHBhVEpzUjNkSFoyeG1aakZQZWsxRFQyazFTblZ4Y2xkc1MzZENURFpPV205R1ZrNU5jSFYyYkVGUGJIVjVRV3dyVW13dldsSlNNemxYUkROSlFqUXhLM2hvY0ZKUlFtTnBiRkJqWVdGdWNWTkZPREpWU3l0Q1JqbGllV041WVRGS1VYSXdXblpSVm1RMWVFaHVPU3RqWkZsWmFIZHhiMk5ZTVZRNVIyRXZiV2N5ZEVOdmVGSkhlbXgzUW5oMFVpdHNNbm80WjIxd1l6SjJjV0o2ZW5KRFUxQm5PV2cwZVc1eldVWm1SbWRFVjJwMWNubEdTak4zYTB0VmRVNTNZemR3WkZCSGQzZGxjVEZaY0VOdWJ6RkhMMmhEVTFKdWNtZEpNa2hYY1dKSmFrUkphMkZSZWs5WGVIQkhiekU1Y1VrMlltRXpTelU1VUc1cWJFSkdLekJ1YW1Oak5WUk5ORko1VFVNMmFqQkNZVU52VkVock1UWnBXVkZLWkc4MFNtUkpSbTB6UTA5WmFHUlZRbkl6WVZab1NGTjJabTFJYjA5elNYUm1kV2Q1ZEdwRmF6aHFaRXRhYmxsSWEwWllkMEkwYm5oUVptdFhObkZZYlVKM1VYbDNNVkJEZW0xdE5GTnNXRWw1V2pkTE9FUnBWRUpNVHk5U2FYSnZVMHhTYzNncmRIRTJjbTR6YkdkbWNVbzVNRVJQU0VGU2IxTkVhR0ZYT0dkaGFtbzBXRlZuVEUwMGRISlpPRzFJY1hRMVRtODBURTl1WW5kR1MzRjNRa0pYVFVFMVZteEdRV1pCY1ZrdlZEQm5LMHh4YUc5b1QwNXBVR3R3ZEhsUFpUazRjSFpEY1hCTk4wNVBXbHBEVnpKa1VXbHVNRVZCUlc5WmRVUnlhRVI2WmtwU2NIZFdUa2xwZWpaVmJVOU9NbWRqUlUxM2EyRnlWV3d6TWpkdU1YZzFOa0ZsYkhkNFRUSklNbEZXSzNwQllrcDNVbFpZVUhrMGVsRmtjREpOTjFWVlREZFJiV2xSVldSamQwaEhRbUpaWW1wRlZHSldXalZaWW14UFYxcFJVbk4zVUdSM1kyczFVR2R4U25OSlEyNTFRekZRV0V0V1NFZDRaRU5CS3k5TmVsVnllV1VyZERSME1HMXpMM2hMVUhvNVJuSkhXRlJ4VVhVNFoxWTVNVWhMWW5oWFNtODNSMnA2ZDNkbk5tbzJOSHBEWm5CNlduQTBlR0ZVYjI1a0x6Vm9kakZXZEVSWFQwUkVSM0p1U2xKUmVuUnlSamxsU1VSUU15OUJWVUZYY2tRek5UaEtXVEJMY1hFMFZXSk9jRk5HV1ZsU2JHVXJSVTgzT1VsUFpUZDNlV2R3Vmt0cVdWWXlUMmx0WWpSdmNIcFlaVzEwTlVkTVVtUTJSMjlWT1RNMGFHUkplV0pMWkV0SlFqRnZhbXBtU1hObGVWUkpaVVJRTWpVNU1WcEhNa1JaUlZwbFVsQnZkbTVWVlVKcGFpODNUa0psZVhnMVExVkRSMlJFUTBseWJXbEZSMmcyZFhSQk5rOUdPVXhySzNZdmRqWkZlbFoxYjJadVQyMW5NbU4yY1dFemJubHJhMHBsVnpSV0wwTTJNWGxJU2tOMWFHcGFSMVZXYVdSWEwyMUhjVXhPWTJSMmJIRlJZVmxFUTJOaFVtbFRVR1Z1ZUhoUFdHVldla2RZUVVST1RYcDVNazVuWVdaaFdVUkRZMUZ0VGxaRVpUSXdTbVZIT0dkcWJWZDVkMmxZWkRKVVprMW9Selp4TUZScVpsUTBUbGxNVFVORmQwaEJlRkpHU0VsTFJuUkNkbE41UWxsUFVtNVpSbkJKVUZKMFQzQnFkamhIVEhkVlNuRm9ZbGQ1SzJOblJVbEdWMDF2VUVaWU5HUnVjRlpQWW5OeVZsVldiazVyUVRaVlMwbEliMjFUVTJ0U1ZtRkhZM2hEUTFZdlZWQjROMGxYUjBWRlVsWlhWRFI0UVdsWVMzVllVVVEwUWpSMU5FaEVaM2xaYlc5d1FVRkJRVUZGYkVaVWExTjFVVzFEUXlJdlBnMEtQQzlrWldaelBnMEtQQzl6ZG1jK0RRbz1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIzYVdSMGFEMGlNVEF3SWlCb1pXbG5hSFE5SWpJNElpQjJhV1YzUW05NFBTSXdJREFnTVRBd0lESTRJaUJtYVd4c1BTSnViMjVsSWlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpSUhodGJHNXpPbmhzYVc1clBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHhPVGs1TDNoc2FXNXJJajROQ2p4eVpXTjBJSGRwWkhSb1BTSXhNREFpSUdobGFXZG9kRDBpTWpnaUlHWnBiR3c5SW5WeWJDZ2pjR0YwZEdWeWJqQXBJaTgrRFFvOFpHVm1jejROQ2p4d1lYUjBaWEp1SUdsa1BTSndZWFIwWlhKdU1DSWdjR0YwZEdWeWJrTnZiblJsYm5SVmJtbDBjejBpYjJKcVpXTjBRbTkxYm1ScGJtZENiM2dpSUhkcFpIUm9QU0l4SWlCb1pXbG5hSFE5SWpFaVBnMEtQSFZ6WlNCNGJHbHVhenBvY21WbVBTSWphVzFoWjJVd0lpQjBjbUZ1YzJadmNtMDlJbk5qWVd4bEtEQXVNREEyTmpZMk5qY2dNQzR3TWpNNE1EazFLU0l2UGcwS1BDOXdZWFIwWlhKdVBnMEtQR2x0WVdkbElHbGtQU0pwYldGblpUQWlJSGRwWkhSb1BTSXhOVEFpSUdobGFXZG9kRDBpTkRJaUlIaHNhVzVyT21oeVpXWTlJbVJoZEdFNmFXMWhaMlV2Y0c1bk8ySmhjMlUyTkN4cFZrSlBVbmN3UzBkbmIwRkJRVUZPVTFWb1JWVm5RVUZCU2xsQlFVRkJjVU5CV1VGQlFVSlNRMkZNYzBGQlFVbFJSV3hGVVZaU05HNVBNV042TWpoaVVsSlNLMkVyTDJGaFduTnRZMlJLUlhKVmMwNUVaMk5yUkhGRVNWVm5UVFZKVGxaNWNHVlRRWGhEVlVsRFZUVkpjRVJqTkc5bFdYWm5UMVJIUTJGdWJYcExWVUpFYkhkamNXUmlObHAxVTI5clVTdEJUMFpDWTFWVlJXeHZTekpvVWxNd2RHbFpUVzFtVW5aSGEzcGpOM01yZEZwNE4waDZVMU4wV2pOMlNITjJTbXgyTXpZNU5Wa3JkVGsxVlRsQlVrUmhWSHBuUkVFeWQwTlJNa2hrVkVSNmMwRnpRVlZCTDNkRVFWaFJSRFJCVVVOMU16ZDRNWFVyV0RNMksweElTRFJTT0ROQ1JqWkVZbHByVUVjNFFWRk1TMFJ6Vm5CSlUyNWhUazFMTkVOM1NIY3lheTgwVWtGTU5qWmxaWFl5TkhsTmJUbEVaR2xGZFd4SFNYQkRZVkJsYzBaQlVHZDNiVEJ0Wmtoa1VVcEllRlJ6U1RGWk1tczBOelZoUkVsVVdVZ3lMMjA0TW10Vk5FMHJLMll3VFZOdFQyUTJORXM0WTFGQ05Gb3pRMjFsWmtKQlJXVjFOVXh6TTBONFNrWktOMFk1VVhoRWNsUlNWMnhtTjJaalNraHNVbEY0U25Kdk5HeDRUVVIyWWpBNWVUaHZXWEF6YzI5eVVrOTJNQzkzYjBsTFN5OXdWRFZ4TlRKa1NHUnFaVGx6TVRGcmNrRnpRellyYm01M1NHZHBZMncxV0RZNWN6ZEJVbTkyYjI1WU1tdEtLM1J0ZUhsSVVEQkZkSFJhSzFkTE9YTkdRVVJuYlhSQ2EzVlpNVmt5VlhnMlJFcFBZblp1YW5sYVFYUmhhV2RsY1VWSkwwWkpTbXd3U0dnelowZDFWSGRYYVhFMWRGUlZRWFZNVTFGdU1qQmxORWhxTmtOeFNYQjZUMjlKTVhsdGNFZE1XbUpNVW1ka1VHbzJaVzQxZFZwNk9DOU9TMDFyWTAxU1lscFhNV1I1WVRCbE5VNVZUVkZwWVZoTldXRnNWVmw0UTJOSVJEVXlRV2RDWlVGWlJFTm5ZemREVlhwRWRHUmlWVWg0ZEVWWVJVbHRiR3BPU2swNFUyOWxhVEl6WWpoaWFHNXBkV1o1WTNwUFVsSkpaMHdyVm0xTWRuZENaMjVLYXpsQlIyZFJlbEZ6YkhRNVdVeEtSQzh3UlVvek0wMWFWa0Z5VmxwM2NEVXpRMmxsVGtSRU4ydEpiRU16TkhsM1FWRjFVazlPWm14UlVpOWhjbkpCUkVGMFRrWnNVMnBoVUdzeGNHZ3lXVEpoZW5WYVEyWXpXWGd5ZUU0d1NFeDRPRWRQU1VWb1JYVjFXWEZ2VGxkNU5IcExiWEJ2V1VaVmRIbE5kREpqVVZWaGQydHNkR0pDV1VGeWQzRXhPVWRuZERseWVWZ3dlRmhNUTFCbVEybFRNRnBaVUdkQmIzVmlXRXhTU0M5c2FHWjZjM0Z0ZUdOS1ltTnRVbXhwUVVkeVlVRjZLMlY0ZWtsb1pHTnRkbk0xWW1sTk9Yb3dMM05aYTNaVFJrVldPV1p5U25ReE4xcGhTazUyTDNOS05YSlJRbTU2ZUZKdFRUSnNZbG92VUZwb1NUZ3hiRWhSWlVwU2VHSlVSM1F3VFRNdmJWbFpNelJ5Y3pKQ2VEZG1NMHAzUWxsRlUyVmtVWGMzZGxnNFpqSkljSEJKUTFBMVlXdG5NRWRtZVhVeWJqRTNTWHA2V25kWVQwczVWazF0ZEV4aFRHMVlVa3hIYm5WTFEydHpkVXRhTW5KTWRERTNXbXRNVm5CQkt6bHFZVmR0VFZSdmJrWmlSalJ0VUZWcmJGcHljMlZIWVhKVFEzcHFjREV3VTNrclYwRmhSamxKZW5KNFVuaHdOMjQzU1dscUwycDFjR3B5ZVM5VmRVdHllSEphVkdNeWFqVkRhRFZXZG5aaVNXaEhMemhsSzBGV1YySnFOSHBWYmxkeGNqWmFUMnBrTWpNME0wVnhRMloxZDNjMk5FUlJPVUYxUmtaaFNWTlhabUZaZUcxMlNXMXZiRWh4ZWpseWIxcEJOR3hNUld0QlZVbFJXVzVHYWpZcmFEaEJNVmhwU0ZKTFVpOU1OV2RVWkRsd01WZE9UemRYUTNGa1NHaENlRTVxU2pKV1JtaElPVEl4Ym5OdmFVUTBUR1ZKZFVSWGExWmpZVXBoYkdZMVVDOXZkVlJYYVcxcFMyVkRlV2xZZDFKSlJGQkZOVUpXZHpCRlpVeDZUbWhZUW1kbFpHZHpLMVIxU0dkSVVqbExNRkZpV201WFYycFZjMGgzYkdWWmVXc3piamhQWVZGWFltcEtjMlJJTjNBcldsUlFialZWWWl0SU5tcDNhekJFVWxGaU5UY3pNWEZtZDAwekwzUmpOM0I0TkZWV1RtdGxUSFZ5ZUVaMlVGSlZaMVZEVkRNd01WbGxNbXRwUm5veGVWWkZTbVF2YUhCYU9EaDRaazhyT0c5dVFUWXJlR2hzVjA1M2VFRnliVmhCWlZBelRqWlphV1ZhWTBaVWJIcHFPRWczYkhkRWFFOVFjVTlqUjFWSFYzZzJRelJMUlhWWGFHOUhSM1ZETURnMll6ZHdlV2RxWVdwNGNVbHBNVXRhUzB0M2VXOVNTMDkzT1hjM1FqZ3JPRUZVVXpOcmFWSjZabFozU2t0bVRFVTRNVTlVTjJsS1FsQlBhMDFhVUVoclZrWk1UVWxySzBWSE5sZzBhaXRYUlRVMFYzb3pUbTh2VEZaNWMxRnBSalJSWTBWWFZVZHhVMU4xTWtNNFNqbDBkVk5YT1hOck1HbE5Sa3QyTUdkcmR5OVVSRlp4VWtsSk9XUlpiVlY2TmxGdFpIRkRkMWR6TjJKSVVtczNLMGhaTDBneWFHZFhhamhYYzJWRWVHMVBXVFYwUkhsWFkxazFXbXg0VVU5dFJDdHdkWFJrTlRZMkwxaFlaMjgzWmtaS2NWbEZPWEl6T1c1TmJWVjRhMHA1WTBRMlRHSnRNVXByUmtzemREaFNSakF2U0VSTGNIbFRjM0ZqYTNkdU5VdElaMkZUT1d0d1N6Tk9OVGwxZWxWV2MwdDRVakF3VDBGTk9HWm1iVTgwZW5sQ1ozQnRLMVl3WnpaWmNrUlRNWGhUVDJGUk4xbzViRVZKVGtkVVVXRk9RVXhFT0hKWVFra3hXbUV4VkVSb01rTXdhWEZYYTBOR1ltUmhabmhEUm1OSmFHeDVabVZpWVVjMWEzQnZMMHR0YW1VMVJVeDZRbUZSVXk4MVMwdEliM05SWTNKb1J5OHhWRWRFVDNCQk5qSlNTRWt4ZDJGUVYwWlBjV2huYmtndmNtWkVVVFozVlRKQmJuQnhkVVVyTWl0RE0yWmhTMEUyVUZONlUySTFTV2htT1c4MWJGUnFXVVp6ZGtSalJUWTFRMVJ3UTBZeGRIUlZhRVpqZGtRdlRtY3hSa0p0THpoWGRrdDRaMGN5T1hOb1J6UlVjekZNVG5scVRrZDRURXhLVERSRVowTXZZMkYwTVdOSVdUVmFhVWNyTjFnd05Vb3hlamhTUTJKUVNXSm1halowV2sxb05UVlFhM0JpWVU5SGNIbEhhbXRMSzFCWWFrVlZiVFFyU25oUVQyUjBSRTlLVjBGYU9YRTRRalJGZFROWGFtWldXbnBqZDFSU1ZVTnZhMnRLVXpaNGNGRnNjMFpPV1U1WVVraExhRkV3TlVaM016WmFaVlpMS3psamNFZExUV1psZW0xaVUwUm9OR2M1V1ZocU1reE1haXRFY0dkMFpUSXZRVTFFTTBGUVEzUlhOakJpY2xoWFVFTkxURnBaY0N0MldXbGhObmxYVjNsMFdqRm1hVlJyVlZSV1NsRndlakpJYlRrNWJFaENZMVpaV0hKbmVtRmFlQ3RZYWxsMWRWaEpUV056Tm5KMFNITkVaME4zVDJoS2JVNW9MMm81VW1OQk0wOTBhR3Q1WkVScldHcHlRM28wVWtoS1ZUVndNRVF4U3k5aGJHbDZTVE5JYUZWQ2VFMW5NMHQyYkRKWlpYUlZUbFJwTW5aaFQyb3hVbXBxTTFkeE9YRXhjM3BWV1VVMUwxcG9abXR3WVRWSlF6VjRTbE52TmxkUVRXaFdiRUY2VjAxaUszaEtiM2xGWVhkdGNYa3dObXBzUXl0WVkxSXdWR28wYmtoR2RraEdMM0Z1V0RCcWJGbFRSUzlsZDI1VVJtUlNhV3g2UjB0dmRtSnJMMUJ3Y3l0R1VteENjelZrTkdaTmRsTjJjSE5aVDB0WU0wUkVWMnRYTHl0M2RteEJPRzV0ZDFCMmNqQTJkblJaUW5rMVJtRnRWRFEwWkdwSlExcFZjQzlPVjNReGFqaE1UWGRuVUZWbWVuaEhjRFZtTjBKb1F6bERZazVtSzI1QlNucElOWFpGZUdwVFUyOVhiSFpzTUVOdGIyZDZNamhMVmtSWmRHdDVPWE0wV1VkMGN5OXRZMU5PYUdKSGJqTTVSVmR2UldoM1UyMWhkSFE1T0d0MmJGUndUMmtyVUhSUlpscHBkVE5pWkRGcWNtdHVTRVoxU0hSdVprNUVTMjR2ZDBvek9EaFpjbXR4U1hnME1rVlNkVlF3VEhKRU9WbHJSbG80YVRkMlZGUjRRbWRIWkZWRFExSTVPR1E0TW1aRksyaDNRVmh3VVRKbFNISXlOM2xYVG5adk5rbEdVVFppY1cxeVRYZDNhamMxY1ROaVRuZEVaMmh0ZW5NclltMWFZM2h5UlZsdlkwNDNMMWhpTlVoUlFsSllWRUZrVVV0Q1NuQkZOVGM1Ymk5dGRFRjRhRlJ5TDJ3NVZUaGFUbk42TTFsYVdWbGtSa0ZhTVRKaVIwcG9WME5DV0RaSWQxSXdhVWhXUzI4NE1YWjJVM0ZuZVdZcllUWkJRMnRaT1RScVdUUnpSVTkyZEM5a09VUlZlV1pFWjJkQmRqRnFkRUp5UVVsRUwwRkdUVVI1ZEZKaE1qQXhaRUZCUVVGQlJXeEdWR3RUZFZGdFEwTWlMejROQ2p3dlpHVm1jejROQ2p3dmMzWm5QZzBLXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFEY0FBQUEzQ0FZQUFBQ28yOUpHQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQm1VU1VSQlZIZ0JyVnBaa0Z4bmRmN3UxdnM2dTBZem94NVpraVhMUm1NYnNEQzRHTmtVb1lwQXhwVlV3S0Vxd0VOQ1VVVmgrekY1c1Fqd2tFcXFMQ2VWNEtwVVNwZ1hUQktDQWpnMmNlR01TZkFDTWg1anliWnN5V290czI4OVBUTzkzM3Z6bmZOM3o5anhKbU5mNldwYXQrLzg5ei9iZDc1enpyWHdQaC9INy9wU0xwTDJKbUx4N0tGTU5sTkk1SEpqMFhRdVp6bE9ydFdzNlQyZUV5MUZrdGxpNFB1bGFyMDVOZm1MeHgrdk5scFRSNC9kWDhUN2VGaDRINDd4c2JIY05idjc3aHp1em8vSFlzNTRQaDJIWjd0SUpWUElEKzVFcHFjZlRiK0Y2bVlaMHhjdjRmTHNFdFkyNjZqVVcxZ3VsNUhQNWRGcTF0SGIwejJWU0tVZTZCbktuUGp5VjQ4VzhSNlA5eVRjME1EQWVDb1p1eWZpdU9OUngwRnZQb1dobmh3Sy9WMUl1aUY2Y3puczJIMFZ1b1lMcUcydTQrWFRwL0RMazZld1ZtMWlvOVpFcmRGRUlobkg2TWdnZHU4YVJ1R3F2YkJkRDE0a2hwN3UvSW0rb1IzM0RlKzlmaEsvNCtIaWR6Z0tPM2VPZWE1OUwzVXpIZ1lobWtHTG1nOVFtVi9GM0hJWmkwdGw3T3BMSWhtSndxYjZiRGVDUkNZUEo1WkNiM2NldVZhRDEyMWtNeW4wOVdhUXBZQTl3OFBvR1JsQ05qOEVONWJHK25wNW9sbjNKNVptems4MjY3VXY3eGc5VU1TN1BONlZjSVZDSWVjRi9qMzhlSmRIRGVmU0thU2lycHEvMWZSUmIvRnMxREc5dWdLRURZeDBaMkZaQWVLcERLS3BITVlTYVF3TmQrT1ZaNS9ESzhVWm5GdGF3TVdpaS82K0xLN21HbDBEdTdpV0w2c2gwNVZIdlY1SDZBZmpUaVJ5Zm5INjNOSGVuVmQ5NDkzczE3N1NHd3NEQTRXd1dYK1d1NzNMb3RaOTMwZVRGckFzbndCaHdYRnNSRDBYSGsrZjFsemRxS0ZNMTdNaUhpS0pCS0tNdjJReWdkbUxsL0hNMUFzNFhaeEhjV0VUNXhjcldLaGFLRlZkekN5V2NQSGlSVFJxbXdoYmRjUmpjY0NoOGl5cUx3eU9Qdm56SDU4L2ZIaXNjS1Y3dmlMaHJpb1VKcmhKQ21ZWHdqRGtsUkFobjFldU5MQ3kyY0phZzlmaVNUUjRzUlZZakNVZm04MFdmTnRHaEVKNVVXN1NwdHVXVjNIbStaY3hWNnBpb3dHc01QWmVYVmpHSTc5OEh2L3cvWWZ4NEU4Zng4enlKcGJtRjlDcVZ4RDREWVMyMldJUStMRENzTkNiemo5NzQ5all4SlhzK3gyRkd4dTc4VTdIY1g0VWhsYU9wMnJSa2dmeVo2Vld3L3hLQ2E5T3orSlZJdURzOGhyV0tsVUtia05VSUdBUlRhWDAvcENXOWhtYjZWd2FrVmdVcFVvTkVRS0h5M2hzdEZvWUdkMkhjcm1PYjM3N2IvSGpoeDlHWlgyWm5yMUpnWnFpU2xXb3k4ZEdJMjR1OUJzL3V1V2pIN25ybmZiK3RqRTM5cUdQM09uWHE4ZGFmTGg0aHFVUG9VYUlFazFlYzdocG15Z1pNRFpjK2M2akVMenV1UzdpVVEvWmJJcmFEeERRMm5ZWUlCcExZUGZlM1ZncHJUT3lJb3dzQzkycEtPL3ZSMkZIRmdjT0hNRFE1ejZObWNzWHNIVHBBcEx4Qkd3dkJvdXVTUTFCNHR4MUhiV2lZem4zM25ycnAvSFlZdzhkZTlmQzNYakxiUk5odlg2c1JZMVQ1VlFjTmNlNENyaEp5L0lvbUVQRUN4SHhQSFNuazBnVFhCZ1hxRlpyOEJtTDJWaUV3cVdSVEdXSmZ0d2cxNG5HVStndjdFSHloWmZRbjRsaG8yN2lhblRYRUs0NnNBZTdEdXdsV3ZaZy85VUYySDZkYnVXcGgwQThKWFJvYVErcGVCUnhQak1lajZQaFJPOGR2MjJpT1BuekV5ZmVUSVkzZGN1eHcrT0ZNUENQKzBIQWpmcnFpaDNYa01PaDVjVHhJdFJpeEhNUTVVK2Y3Q01nQ0xoMmlId21nYnpBZXphTFJDclBnSkVuT2ZBU1NmU1BqT0xRNFpzeE5EU0F3bUFmQnJvelNFU0FpRTMyMGxqWE0yQzgyUlRJb2dDRUtncG96aGlWWTFQSkg5aS9CMS81MHp2Z1V1N0FzbzRmSHA4b3ZKa2N6cHRkSEJ6ZS9TejNQbURSWXZYcUdscSs4WHNSelJMdm85dUpGZU9SQ0dMUkNQOHY3bWtqazR5aEs1TmtmREdHY2ltTTNYQUQ4anRHNkVxMHVHeVRibVhUNnJtZWJ2UjA1UlJsZCt3Y3dPRElUaW9oUmtXNUZKTDI4aXlOUlp0QVpEbTBudU5vdmd6SVlsQlp3NTZoSGJoeHVBdkZVZzF6UzZXWTdWb1RvOFA3SHlnV1g2cTlyVnZlY1BQNFBUU1VvcUpZck5YeTlicGFUNjdaa2dZQ0ptWnVJdUtnaXk0WnAvVmlNUmRSV20xMXZZb01OM2J3NnF1UTdlNVRkd3diaEVhN1NmUEVtTWlqY0dvZUJtakJURThYMXBibXdMaEdjMzJWV29zZ0ZJR0l2SzdFbXUzeGRLa1lZd09YcE9EbThTT0ljVS9URDk2UGtaNzllTVpTOHhWOE81VDhlL2RidXFXNG94VmFSeTIxa0ZpS0ZndjlyZTg3WEMxa2JJbmIwS1RJSjZMb3p5ZlJtNGpSTFgwVjV0cmRROWkxYTFRM0dEQWxpQ1dKQW96ZFZ0dkZ1REl0RU9HS3VYU2VjWmxCVC84UWt0a2U1c011ZVBFY3JHaVN3a1laYXE1dVV3TERvUlZqaVF5YVhETnF0ZWoyQ1EwVjJROXZ1T3ZtOFlteHQ3UWNIM3U4dlh2NVN3dTFZUEthc1p5bFg0VUVGYURaNEhkMG8wYTlCaWNaNGI0RGhmUWtnMzBnbnlOa2V4U1d5cUZRbGgxVlVBaDVUK2hRTVVTNytzbzh2Mi9SOVpqZ2FSMVdDUlFxeWRSQm1oWmhYblNqYWprVlRMeUdPZzRKVkM2QlNvaEJvamZIOU1OMFlYWmxMT1ZZcElRNDhnYkwwV3JqRkdrOGJDZG9Rd3A4L1JDcXNLRmFTejhIUnNBNmlXKzkzaVNZVURCcXM5a1FNdHpBUnFtRTh2d3NLc3VMQ3VNV3FaZVQ2cUZMSmhGc3JtTDUzSE5vck00VE8xYlIzQ2pwNWwySEx1dkZEZXhUT0l0V1V5dnJGdms4V2p0b1ZsRzkrQ0pDZ3RmNnlIWDR4WE5GbU0wYXQ2TDZ4ejgyUGpIK0J1SDQrM2ZxeGhHMmhXRitvb3ZaYmMwRnRFQW5EaVVaeTMwTnV1RW1oZHRnNHBhelh2ZFIycWlpZUhrQnE1Zm5VVnRaVUpZaE5tOEZUTzdjdEp2SW9qbzlnNDNwaTZqTXpxRzFTYXBWcTV2Y3hUKzJHek1nb2xZenNXYngyVGE5eUUzMXdxK1U0VEFFSG5tRnFCcFlCdUcyOWh5S2hQZThUcml4c2ZFQ3Y1a1E2VHMzU1p6STcwbkM3Z2dtQ1Z2MVl4bWRDTERVYUxFS1hiVE9zeVd1NlljNHQ3Q0MyZElxTnBlWDRHK1U0WmRMT1B2RWY2TytlQkUyR1grc2R3RGxsVFd5a0RKcXl5dW84MmZRYkRDeFc4WVZsVStheEkxMkd2TEZMNTBRVWNhbWNOYi9mZWFNZWxhZzRiWmR1ZEdRNCtQakU3bHR5N24raE5HQWlTMmpDZCtrZ0NEc1dGMHRDUTFzV3hjMGNXaUViVWxPNUwySmFBeVhTMldjV1NoaHM3ekphcUdKMmVlZnhVUGYrUzRlL3ZhMzBKaCtFUkhHV1RMZmh4S0o4dXJzUE9xYkcxUW1sU2RvS1poUGQ5ek9xNUpFR0p2MGx1YktIQnpmeGFrejUxRWpBUkJ1WWFteDFMKzJCS3pad1YxYndvVlcrRVVSUWs1RkVnRUJ0WXp3UWQ4c29GWTB1ckNaa01rM08yNUFKYlJVT0tGWjVZMktDbnRtWmdFWFZzcktZbElNL3MvOTJSM1kvNkVQWUhOK0hwRk1EM0o3cjBVdGNMQldXa090dk1GS3ZhRmJGRmNNZFovMEZncGtCUVp0TFNFQjJYN1lSTlRUcnhTcEJQTnNVVUtnYU5rMlFTZ0d0ajZ1Kzl3L2RyakFLMk1keEpGWVU0UVQwSkNZNC9PVWN0bkdVaUtVSk95T1lITERKa0drMm14cERreWw0dWhuZ2o0d1BJZzBrL3FyVTA5VFZ5MTBYWDBRUXgrN0RiR2VBU1I0Wm9kR2tSMGVRWW5XTGMzUE1UZXZVa2xTUXJVVnJEZ1lHQ0hsK2FKenJ0K3dJM2pwekdsaGVpcVF0WVVhblhBUjdoVFNOY2R6dHVkNFk2L3ROblJLR3FGZTVpR2Q1RzIxMFpLL0xvdnlhY3lKcUxOSUxRdVlDTGxtWXMreGYxTG96ZUw2dlNPNGFyVEE1RXlyRUNGOVVVd2lCU2VkNWM4TVlrendoUnZHME9TNnBlVlYxRmptTkN2cldqM1lLb3h2QkJNQjVUT1Y3WER6UC9uaHYvSjdjZDFnS3dlSG5YMkgyeFN4NWljbVhDdHNqWXNmaEcwQjFSajh0OG5GYlBxK3RCQ0UzMW1oMDNaSi9rOXVvZ1hWSFhrMmVLYkpQRndLRUtmN0RLYklJYnV5NmlucGJKNnd2NEgwb0JTdVVVVkJhcFFVSzhXMndqNzBGWWF3ZFBZQzF0ZVdVYVAxa3IxRERJY21uKzEyOGhHcXE2dDRjbklTejV4K0NjVlhUaU9SMzZGeEx4N1ZrbkRTcUROaWhwWUpEN0s4TVpmeGRxZ2pWc2ZWTkl6Yk1ZVFg1RGlyYlRXVE53a2drc3lGZVBDRHBBU044RTJDME5JR0s5RTY5Z3p2d002ZE84QzJGM1BleTRoMk05ZnRHb1RkUzFyRktpS2E3a1p2WVI4V0wwNFRNb2k4R3lza0F4VjRZYlFkWitJcExUeDM2alMrL1hmL2hCMzBpT0h1T0lsQXFJUStDRHY1RFcycmRRd1hDbXdVU0t6dG5JbmdzSTE4b1hHSjBOZlBnWHpXNEEwVXhZU1dHUUV0RThOdG02K3orR3dTd3NNSU5jMzFtbk9MS0s5dG9ESzlnajRDU0p6OWt4anJPZS8wZWJwbEZKSEJIaXlGRmN6T3JEQmVBd1dra05id21STGNvRVBUYkkzOUo1NzhGZHQvU2V3YXlDQk9odE1nV1JlWHRJSk85bTVYTFczNUxEVUtEcmxFeUlLQ1JSdmFSYWdPRENzS3RkT0RGSXFtdE5wR3ltZzBxcUFUWVhVZ2xvYWtpSFFDdzJ6VkhienhnOWhIOGh5c0xHTGZZWUpYSTBBc2syRStZNzNIcEQyOXRJUi8vSnZqbUR0L0NZZEdzamhFdDA3MzlpbFlpVkpEVFUxU1MvcjQxY2xuV0VvNUpoVlJPRmQ2TmxKUHRrbThHcTJkc2pSSEMra0lnNXk0YXE1alZlV05taEtvU2ZKQ1djeWpJQzVMbkFZMUt2YzRYRmhTaE53cmxiamNHeVBYRXo5SVJNZ1JDVEJySzZ0SVozSnc0eGxFR0hzdVB6ZUpjcFdhV01YRzJhZWZRZm5SSi9HRlBSL0FuLy94SjhsSFEzUU5EaUtSNnlXdjlMWmNURnp6c1VjZnhlTGlpaVJaSktrQVNSVWVLMzVoTkJvdW5UUmxiWU9pR0lXWGN1NVdLZk82NU4zUzlvQkpqSUhtUDJFbmhnTTZha0VwaFRUdmhlMWNLTTBndW1PT0JpeXdtelh6Yno5RmxjaVlwUXRsVDg2UnhiUHVFd0xOT055ZjNJWHdZd2ZnRFNaeC9zTFRxSmN2SVRzd1NHSkN0dzZhS3B5NGxoRHJmejcrUGYyL0FFaUQ5VnhjYWo0SzV5aWdCWWFkaEdISEk3R2QwdGc1MlBiVlVNc0tzWVRtT1hGQldhQmh1S0VDU3R0Rm0xdFdkRFNvMlZ2VTZweVJnb1k0RTFsSmhzUTNScFRNTWRhczgzTklzQUVVMnoySzZKNGh1aTRiUTEwZU4xZkJnSHRBVTBXNnY0L0NNSkZUUUUxWFZOakRQMzBJTTNQTHVyYkFvZnlNUm8xbGRaL2JZYllsa0xuV2JpaHhLMExMYzNxVElHUW52NFdkbkdmYVFpWjVHeFluS1NLUUVsSUFSNjQ0cGhLWHRHR3pvdllZZCtudUhMcFlrNlY1eGtkSEVEMjRHM0hXZVU0bWl5QnFLL3V3K1hpWFNoaTU5Z2FXYmlrbGhtNGtRYmxhbUxsMEdmZjkvWGVVUDFvc2Z1VXhjcTlQbDB2dy81YnRLL3dMYWhvRFdZWmhLVzZvTjVZa21aVDRLV2VFTUVHcEthRHR3MXRwZ0orVFJMa0tXYnhsT2VyanZzYW5yLzdmS1lkYWhPbGFoSlFwejk3S1NBKzgzaTQ0TzN0ZzliRndqWEZaMXpTY2d0RDBabHh5VVMrZVV2Zm1xc3BDbW13eTNYUDBtMG9NUkdtaTZYcXRwWGdneXZlWUp5WHV0VW9QQW16MzVVd0treURrMmtYR1l6Z1Z0aEVsOUEyblZMZzNoRnpCSk1aQWx1UXQzV1R4YzJuMUNXZHNlNHNXcW5JL2V4bnQ5TUhFenJQcGt6ajdOYklZL216VnVENWQzRzlvSEN0Vmt2WGphVGdrMHBhUVpqYWFFRFR3NjkrY3hBd3JDOXVXaHFHdFFzbjlsaVAwTHFFa1FCNnNaWkp0ZHhKZEp5dTBqUUphTGdndkdKZmNOcWxvUytwVUVVd1dGQmZLc0FlcE00R1dyeTAyeDNHM0xDYlhvcXpBSFlNL25QYWsyWUp6a01xd3RkZlZnM1IrQkhIbU9wZkZhQmkyS1lQa3hIYStEQWdpeW1VWnkzWXlnNVBQL2hZQ1o5S2pGRi95dUxZdlNwT2Vqc1IzRy82YlJQUk9NYnRWaDI3SDNuTXU5ekxWb1M2R1dGc2FDNzVkSjVpMEZHcmp0RndpN3FHOFhtTVB4MnNEaXdsdzAvWUxORjRGMGFTbWEzR1Q2aDc4RzgvMElrYUlsN1FnbldoeEpWT00ybXFOa0JZRlR5bUFIVElXZ2ZFeTY3c21RU2tSWndkTWxDaXh5TGFEOEZnMzVkRWpqSUtDRHBBRTRSWW5EdHVZUWM0eHllelRQSUdPMFVMRFVueTZuZThiVWhwanp5SWFOZFg0WnFXaWJUMUpuQTArM05Ia2JtOTFNUVIwSk9EWHFuVUNSRVJHcUcxckNoRU9GQUdGNmR0YVZsSHJMVmJuOVUzdGJqa3Bkc3BvMlNZcjdUcjdNaEFsMkFJSlJoa09lV21ERkMvQ1lVcVZSRjI4QnFFaEdsc0ZkdnNVTi9aRGU4cWVtcG9xVWZlVFc5UXNOTGxPTnVRcFd3ZzRuVW1peEJiNGRoWXgxYm00clFpbmxicmhOR2lGMG5vSXNMaTZ6dTV6QmJYYU91cVZrdlkvWlhMVHFxM0JyNWJaWGlpaHdRNVlRQVMwWXpsalVmNXVkV01ORnk1TXF3dTZiS2ZIMGh4L3NacVE5YU1jbHpYSWRKcmFUZk9WMzFxQjhScTBTelc1a1o0NE5mWFVJMFhYTUlIZ2NkS2RjWU9Lb2JiT0pGQUZraVBzSE5lcWRlMVhkRHBoQWk0aVdMVnRTZHV5dG1vSzZYb3RrV2V1c2hVd2QybEdLWnBVM3RMRWJUa2xrMlhFOWRuRGpHZDdhYUNvS2tWaU1XUTFjTzZWRnpBenZZZ1dmVXFHa0lyVzNLVkhGeFpYTlhLRTJ1Q3Q2NHpkM282MU5qdmh2dy9JYmxRNDF3Mk90UUw3SG9WY3VrVFlLVTV0VTNJSWlaVmZjdWtlVFpiMzBtWFd1a3RZQ1YydlVqUDFucm1IN3NzdVdMbmw0dnhDR1J0K0VjdjgzcVAxeFlxYnBRM3NPYmdmSXdkdVVDVFVrRkJ5YnRQQ1pmelA1QyswM0dwUTBLdjM3VWF4ZUZseldkUUxOWUhMcEVkQ3hsRm10UjE1bmVSdEJBMTBkcUJGMnR6Y1hLMnZyMy9jYjlRTGdkWlNVS2hQSnVKS2dWSWNReTJSTHdwNWxyd21WbkJkVDV1d09WYmVEUW9qdVRIQ0o4ZGtka0RyU1RuRXVTaG0xcXA0OGVJY0ZsaVRDZkwyOVhYcldDdVI3dUpnSks3V2xoR3l0Tmt2blQyRkJ4LzhkdzR1RzlvenZmZXYveElmdkc0dlcvVGNSMjBEV1kraFlrdGN1NWd2TlZVSkp2YTJ1VEVOOHg5VFQwL2V2eVdjSEpsRTZnS2YvU1ZQUmtTa1FXSWR1NjJTemMyNmFhMVFZekxOYVhBdUp3SUl1VTVFSFVYSk9yK0w4NXFRMml4elVZTXVJNVBVS3QzejdNd3kreDR6ZU9Ic0hEZkZPQ1RxYlpBTUNQSTJXZzNkMU1yU1pmekxnei9BYjE2WWdlOUVjZTExQnpIeG1VOXFYdHZabjhQQmZidW9yVlhKZXRvclhhNzRxTlFiSmhkdUVYN3QvM3gxYnFaWTNISkxPYzRXejA0ZTJyOTNrbDJsY1lraGNiK1E2Q2N4VTJVdlg4ZHZUT0lDRW9GV0JZRnFYRnA3aWFndy9yckdYcHUyc2pLUGNlTnMySWFtU3FkallwV05vSk8vUFllVHA4NnJheVU1dnVyaFVFU0l1c3kvbXpTM2J3bno5L0dKMjI3UjhrcENJVW9LSjE0eU9EeE1rTHVFYnJZb2J2M0VLQzdOTG5JUXNvYnAyUkl1emEzZ3BYT1hKbDg4YzJxeUk5UHIydW5KbUhkM3ZWWjlGdTJhVFVteVZMd2FYMDZiZDlJMVdMOUpmZFhpUE54bnpwR3lTRkJUdm5PbE5TSER5RGpKTVdGY1duMDl1UWpXNTllVU5vVUtBSlpxV2hwTGRXRWlqcWtuWGVZMGgraWN6aWJ4NGVzUHFrQ0t5anByOTNUV3R4aGM0bDZhT25IZDJadkNRSlpXM3BubUdnWFdpNS85OHBFN3Zyb2x6K3NHSVU5TXZURGxlcEg3a2h6UWl3VUVuY1JOeFI0YzEycDhTRXRCa0ZUbUFvcUFiYitYZUdzUHVkU1ZZNjR5UlRQVzRzQWk0ZG82b2hLaEJHazdiWXRPSmFMREd2NFJHdng3UjI1Qk91Nml0cjZDeGlaYmZ4c2JUQ0ZNTFd1TCtxSk9nL003ZVRzaVAxQkF2bjhuejBHeW9jdzNLRmp4dGZLOFlZVGxOb09qbTM3MUR4alFCUUVVTXpJMkpZKzgzbVMxT1p4WTA2WEFkV3JmRHlLa1d6R2RIY2g5cGp0bXJPaHcwTitWU25NZ0dXRjd4VGVKWG1wRjZWNWJKajlhVmllUldPZ2owZjdNcDI1aHAzb2RwYVZwNXIyU2t1b21BYVc4Tks5VU1FN2s3ZDJ4Q3g3YkZodWxKZFFkcjNqakgzNzk2UCtYNVEyVDFhbGlzVVR2T2tKc0x5bTUxUXFCY0YrdGF4VWdCV1d6YVpvendpL2xOU2dCaUdqYktwSWFKQzJJVmJ1SXBLNE1FMm0xUVc1YWVwcWVyVlJZcmUrUkxHdmRhQmxYalJLYy91b3Z2c2JLSHRpZ2xjb0xNeWh4UHI2eE9FZTBySEpHSGtOdmI0OVdKZEVrSjBseFRtN1RQU1U3bXptQ056bmVkTEs2VkNxVituTDVNMFRCenl1aU5WdGIzNG5sUE1lVUhMSnBhVHNJbzVGWnRiSjhjVWNCR3hpdUtiSGFhQVhhZ2F3eUZsdHNFVXJMUXNpMmNHaEhHN3ltK1pvaEczbmlpYWZ3azBjZXg4SDkrekM2Yno4UzdMdkVpTHFwZkRkZGNrM0hZdkpxMWRVZnV0V014Unpjc2YvUWJVKzltUnh2K2FyR2k4WGlpWGdzY2plVXNUVGJ6UmlEa2x0dk5XaU9hZzlMNkdJSlVYa1lhdjRScFVpVHgrWDE3bHdhYSt1YkdOclJ6elU0K2czdDlvVFc5RUdrZFNGdXZyeThqRmN2ekdKdWNSVy9mdUU4TXYyNzBEMXlEWWwzTnpKOW96ckRXNW1qRzdKbGIvcm05dDBqZXo1NDRxMWtlTnYzVUo2Y09uMk1xZUZ1ZWJna2FnMzZOZ01YRUtpM2haWm1iTFhlVWhlVVptMkRBT05icnRaNFNRNG1CUUY3T0pEMDJRUHA3OGt4a1dkaCtycXVzbzhhODZZU2RlNDNrOHVnTS94MEJDSHovWFRCUEdPdWlsUnVrTVZ5RFd2TDZ4S0xkdzhNN1QvMmR2dC94NWRzZm52bTFXT05XdlYyTm9GSytzQk9ZUWhqTWRsVXB6c21ncTJ0cnlPVlRtdnlkbTNYVElvdFNmQTJvbVExdi8rSmoyTW9HOEdIYjd5T2lNcmlsMHJyVURrcGUrTE1qei84d1hGOC9XdGYwWGRRWkU2ZXB3VTNsbWJRUGJTUGo0aVVWaFpYYnQ5MXpjM0gzbW52Vi9SNjFMblpoUk5CSzdpZU9hY28rYzFBdVpSR29YYkpKR1JNTDlNM0pST3ZMWEdNMVdoWnJNMHFTdHM4Mi9UL2hYdG0yV0xmdTd1QVcyNGFVMlFWUURIdFZVdXJqLzk4NkdHTlhlbE5TcWxrZS9MdVdGWmE1TVhyUG5yYjlkODY4ZVNKSzluM0ZiL1lWcHliSzc0NlBUdEt4L3lHS1ZCTmdwZGlVdktiVkFjaVpUYVR3QklIR3g0cmdRMmlxRFNPMTlZcTJMMXJnSUN3am9kL05vbmZ2SHdSRjZkbmRjWnRjM0FmSVFzU3JpcHZHUGxzUTBTbHlhdEs4MDBad3lPM2M5OTkzL3ZlL2RkLzVJNjdpMWU2WndmdjhwaGZMVS8yZG1jZTRCUm9qUEZYaUVTa05HS3lsNHFaUHRqSEZzUHlScjFkbFRlUnk2VFVldWxzVEN2cStkVUsreXV1dHM0OUZxQTNYWGNOWGo1N2pvb0t0Ym43aGMvZmpqLzVvODlLUTAwOWdmRTlTU2U1ZmVpYW03NDcrZFRyM3pONXArT0tMZmZhWStxbFl2SFV1VXRIbU0yTzFPdXRFL0pDakxoaTB6ZVFMMGZRSGdhV2lKSnh0Z3VXVm1vWVlFV1FwNUJTVmkwc0xPS1hUNTlFcnJzYk45OTBnMXEvU3VieDBpdm44TE5ISDVOM3lDWVpqMGQyN0w3dVNOL290VlA0SFE0TDc4UHhxY05qaFZxbE9wSFBlVjhjNmsyUG5aOWJ3eXF0dFdkbnY5S28zbnlDeUJxU1djVGhzTHIrcnlmT1lXWFRKT1VrYytXMG9GOWRpRmN3R2JiQ3gyM1dsMFdTQ2J6SDQzMFI3clhIOGFOZktuei9KNU5qNjAxN2ZGZC85bERTODNKWGp3NFVIQytlazg1a09oL0RNODlmTHAyZlh5dFpqak4xNU9ZUFgvanVEeDZhYXZySkU4WGkxSHNXNkxYSC93RWMvRENFcWxOZlh3QUFBQUJKUlU1RXJrSmdnZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFEY0FBQUEzQ0FZQUFBQ28yOUpHQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQmtnU1VSQlZIZ0JyVnBwYkZ6bmRUM3Z6WnMzKzhadHVHdW9oU0psMlpJYzI3RmJPS2JiSkUwQ05KV0JBazMrTkRDS0JpM1ExdmJ2QXJVTjlMK1Y1a2NLdElVVEJJYVJwcW1acFRHQ3hCRzlSTEpqVzZRa1c3SkVjMS9FSVllejcvT1dudTk3YjRhVUk4ZXk0eWNOaHZObTNwdnZmdmZlYzg2OWR4Ujh5c2ZzQzgvRzE3Ym1UNGNDaVJOek02K2tMS3QrTXBZSXhyUHBTdHlDQjFiRFFMakxuOWNEbnVWS3ZwRWZHVDh3cC9qd2NqUTZPUGZsdjM5cUdaL2lvZUJUT0dablg0aUhyYTdITnVZdlRzRnVUZDFZdW9yMGVoN3ZYbHJEUUN5QW9jTkpyQzF1b2xDekVWQlZqTjgxakhxdGdmV1ZYWnk4ZnhKZXZ3K0p2bjVFazBOelhzMy92V3JSbUg3Z2thOHY0dzg4L2lEamxpNi9PYVY0OEdTcGtKdktySzhnZmYwaUxMT0dURHFMTjJZM2tDbTJNQkRYY1hpMEc0MXlFNnM3SlZUb3VUKzY3eUF1WDl0RVgyOEV4eWFIMGQzZkI5V2o4S0hScTMzUU5SLzg4ZTdwM3VIRDN4b1l1M01Hbi9EUThBbU9wZG5mbklUWCt3eTNac3EyYk5pV1FZZFZVZGpkUlhrbkExdTFVV3NhS0RZdHhCaUtxNnU3Q09vK05GVU5OZFBFNGtvT2F6dFZqQTExb1ZGdnludG10N1pRTGxZd05tRUQwUVNDMGVocEcrcnByZVhyTTdadFBqb3dOcm1NajNtb0grZkRzN096OGFWMzNuakcxclJadm1RSTJqRE5GbXJWSWpZWHJ0RElLbG90QzVxbTRiTjNqU0Rvb3pGVkErbHlDL2xhQzl1bE92dzh0N0pkUWl3VVFKNmVMT1dxV0Y5YXcrTFZOVlN5ZFJReXUyZzI2bWp4MGF5V0FkdWNVbFZ0YVdkdDZVbDh6T08yamJzNmV6NFY4elJtNmFqSGJSckYvekJhTGV4c3JHRDU3WFBJYjI2aVVtaWhaU2pZVEZmUmxZaGdPRUZ2R1NacUxSc1ZlckxlTkdFYU5zcjFGaFRlcU1vUUxXYnpXSnZmUm5xcnpJMXBvRmtyTWJSTjNydEp3N2RoMmFaTUh0dTJudHBlWFZoaVBxZHVkODIzWmR6N3MrZE82eDZGaHRrcGFSVVAyN0pRSytWdy9UZS94dnpybDVCZUxXSmhJWXRjb1Vrakc5aEpaeENrQjBYWWVsVUZoc2tROVhuaHNVVXVLRFN1eFlBRlNpVUQ1V3dGSVErUnROSkFPQmlFMFN4ekUwelVxeVUrTjJWMFFMR2hLRWg1Tk85c2VuWHA5TzJzK3lPTlc3aDQ3akZid1F2MFZ0enhtUHZndjBJdUE4TnFRUEdxcURlYU1BeUxJRkxub2hYa2JwUVE0b0lpek9vUXJVandNOE4rRmIxQkRVTWhMdzRrUXVqaDM3MFJIN3BDUEIveFlHQXdCcU5lZzFtcm9iU3ppZkx1TnFxRkhDUFQ2SHd2TFl5ckhyeXd0YjcwK0VldC9mY0N5c0xzdWNkTXl6N0RmWmJHT0VZNWgybTBFQXpIa0J3N2d1eEdGbWFtQmkvUDY1cUtzRmVuQjhzSWVEVWNqZm5sNTBOK0hSb04xQW43T3ZNdTFCVkVLT3lIbjdrbkRQSUdOS2hjZGFObG9GRXFvcmhiQkh3N0NDV1M4QVdqdk5aSHd6enlYc0pHZXVXWnJmVUY5QThmT3ZPeGpidjIxaXVuRGR1U0YwcVRYS3NVZVhOYkxpUVFqaUtjNkVleDNKU2YwdmpkSVYybGtUYVNYSFFpN0VPMEs0UklUeFFlbnc2UEpveUtRd3NFb1FYRDhBZERDSVFpMEJpdVhsMkh4YmdyWjdkeGFlWlh5TkM0N3VFKzVMZFhFZThmZ1ovM1ZGekRGQm1pS2lORWZZWWh1cHdjSFp1K2JlTm16NTlOMGJCblZjc3hTaUh4MnZ0dTdwb0lsWXR0dGt5VUNsVWFwS0pKSUlqNHVNTUVEdUdWM3NFb2dnbDZxQ3RCM29yVGdDRDBRRVFhSVc0UjcwckNHNDdBd3p4VFNSVmdidnJpWFJqZVdDWHB2NGJGNHFwOFBjcjhKZ3ZDVmx4aWxoSEVjNHJnUmp4N1kybHBibUJzYlBtRGR0d3k1N3lLZlphQXdSeXpwRkdXWlVvQXNmZ1FBQ0ZlaTRkSmtQQjQvZkRTWlFWQ2ZpeWd3MjQyQ1JvbXdqUk9VSUxHMFBSNDZEVnFMRDBRNVVaNW9IR3p3bEV5SUVOWWtMZEh1TnhaTlQrcm9lL0FHSVlQZEtHN0o0NytBMGU1VVZIcHFmYTJPbUhrNWlDVXVNZW5uTTB0TGNVLzBuUHZ2bm4yU2N1MGlJb1dGeSsyU25WamdROWhuTnc0aStqbnhHa29IR2FlMktnVDRuMWN0TVdjQ1lhRENBVDloSE51QWtsYUxFaGh2cGlrQUErTlV4aTZsaWs0MG9RbU5vdWJwSUtnSWRiUDd3dkdlekE0UWFPWWU0bitRWGg5L282V2NpSkljU0pJUklBdDMwb1pQbFh3NEJNZjZybXI1MTlNOFJ1ZkVvdVhYcklGMzVCN21uVnF3U3FxUkxGcXRZSjZuV1RkcUVtaXBmOG9LSmc3bW5NekgzUExSOUNnMitBTmhWSEtOOUNxbTlKajNvRGd2UVpVQW82cWlBVXlyQlFDaVlnS2NpWkpUVzZDRm9xaWErU2drNXU2WHdLSjNmR2JDc2N1eDdBT3hObjI0OXZyU3ljLzFEaGI4VDBybi9sbHBtR2dXYWRoOVRwNWgwYVFWQzFETE1DUXo0N3NzdVFYUm51N2FZdUtlQ1RNRVBQaS9iVU1MbDlkeHdwbGw2bnFxRkJXbVF4WFZkUDVlUXYxaXNOalhpNWM4YWd5SW1SQ3djMXRocVpLZ0VtT0hJWS9rbkFNY1UyVEVlUW12d01zU3VkOVZWV2V1V1ZZWGo3L3l5blRNcVprUGpGY0xCcG5pcHdURDU1ek5nY3lrY1ZDeEkzbHJ2RzVmMlFVRzFkV0NPdCtna3NGWFhHQ0JqK3p0TDZEWExhSTNsZ1FacVBGOE5KUnplNUtnNnhtQXdIbW5XbjZvUEQyd2hpVnF4YlJMcjVIMHdPSVJIcDV6NzFVY3J5a3lIKzBaTys4RTZQaXVxa2JhMHRUQXlOak16Y1pSOTU2VE1TK05FeDR4L1dLWlJ2U1FMRTdmR0o0T1Y5aFUySFlyc1VLRlVRMG9rdFBSa01oWHF0UWNqVndvQ2VCQm8ycUZLbFlWdFBvR3Vybi9WdG9VSEtsMzM4ZjVmd09iQ0tvUHhaQnVLY2JrZTUrQkdMZDhwNFdJeU1lVHpyZks2aEhjcTE3S0cyRDNKZUtnOTdpV2RNOEl2ZjJqSnQ5OFlWVXE5azhMVHprRUxYcFh1eHhudTAyRWFqU2k0NzNWR2N2K1hiaHJmY1FGWnRKMEJNeUs1T3JZTWRTc1VGeWpvaHc1VG1iTHRsWlhNWGc4Y1BrTlRLVTE0dXQ2OHZJVTE4T1R4NUNwS3RIS2h1alZXTm82M0xSUGwrSVFhSTR1T0VRWEp1THVNa0sycWYyUENzM2Uwb2daMkpzTEM5OWEyaVdOTXlVRDBPaW1LTklyUGJXT01rcmdFWThXNHBMRGJZRWdWcW1CTDlPYlVqNVpWQUxNdllSQ3dld1dxMmk1OEFvU2d5aFhMVkpJRElSR3ppQWdXTjNFMTBadGh0Vi9PcnFMczVkTCtEOWkrOWhlL0U5R2ZLcXgwdmsxV0VXc25zaDF5azliZGViKzl5NC8rQjdUYi82ZU1kei9QZzNSTXdwRG1qTEQ0aWJTdEZsd1kxbis2WVlsMThnUHN1TjBGbW5lWFhTT084VzdRcHpmV1VreUY5ZkhlMUJ0MUZIT2VhVHFLdnJBa0ZEQ0JQZSt5ZnZ3UGFOUFBxSmtxTURQYmp6d1Q4aXFoWjRYeWNGUEhXQ1dpTUhyYnZYQlE5bmJkSmpjQlRLQjBPei9Zb1I4SkEwN3Z5THo2ZjRvWk1POUxmM3hsWCtwQUp4a1VnLzU5bnE3Sjd0aHFxZ3drQmZETFltMEZBbExZU2hCM1hxd3pwQ1FVb2tqZFVBVWRTbzZnZ3dMM21GVkNROUJ3L2pVSG9IbzRlSGtSdy9qR0NFcEo1TWlwWEorK29SS2hjdCtBSFBxRzQwN1NFbFlPOXR2dEtoZUJtYW1xMTZUMHBFYkpjeXJpcHhYaWdkVHprbXU2aHBLVGVSU0NEWnl6b3NUWFhCTHhjU2pIMlRPR1dYQ0hHdkw0Z1cxVXVwa1lYQ21zNHJPSXViRktEc09uVGZmYWlRcUgwQlAxVHFTK0VWS0k0QlZxc090WDlZM3QrUzMwODE0MnJLTnNoMFF0UU54LzFCMnZKNlRndUVtT3Fnb2J6QTJwZWtDdHBwSjczV0xqdWtoYXFyemhVRWh3ZWtIQk9YdGVwRVYrYWVoeUVZRkhxUzRyakluS3hTWEF1cEpiK0huR2V5eWhiUEVZYWRUOGdyZC9lZGpiVWsxMEU4YkNkcTlwQi8zeHBjd3lUWEFUZnhJVmQza3Bjb0p3VDZpUkNVS0FobjBYdmgzUFlvcEtLUXdLSkFWc2kyV3l5RVJ2cllHakNJbEs0RzVSc2ViNERoMllWcXpzRDIyaTZSajhvalRQUVRDK2Juc2xmZlFYNXRGVTE2VHFPOEVxcEZMa3hnRkFsZVp6ZE01clN5Vnh5M05TWDJHWFRUWXR0L2kwMVNsUlJaeTR3NzV4V3B2QjJ0cGtvTDJ2VmJ1NVp6eEt0SGJrQzd0aEpCYlBGOG9kcmdKVHluaWpwYms2aGFweko1Zi9ZcUlzRUFmQVFTWHlSS3lVYVZRNkhNUGd3SzY0dW9zS2trWkp5VE0ycUhlcmd6SFRGOTg2RjB2SXg5M21vYjVlQ09wSThUWWlVcDRiQjJhb3F6bG90T0V1cmRDeDNERkRkRWJWR2RPR0hKOEJScVFpTm90SWg4NHVZaUpIMVVPSm5sVGNvdUF5dHNBdm55SlJwdk1nUURTTS9QaS9Zcyt5MHFpdXk5aEh2N1dQcUVaVVV2RnRHZ2JnMks4cjJ0UDFYbEp1TXMxd2k3ZzZMNzMrM1lFVmNWV2RvSVIxblNEN0pPZytwZWlEMnVjNVc0UEc4N3BZOVVFbkR5cXk4MVJoQ3dLYkxaSkdMTG9iU2RaL09IWUNFTTliSk8weFcwcUU2MFVKQWx6UkI2Um9hby9JK2hWc3pKWG96VmJMbjNaTjR5RisxOWkvNmdsOXI1MTNHYSswSmNZOXFkaStLcTNlYTJUdmp0cHdJbkJ4MENOL2NScXN4U1djUkNjZEJNcDVJWFhtcFU2NUxNYjl6WXBRUnJ3VkJaMW9RMERCOGRJYmhveUN4ZVJ6YTlpSWJOM2t2UWl6aU56SzR2OFpxR2xING1jOHRQMmRYT3Rac1VpSDJMRUhXRnMrMWFzWi92WEcxcHVWTEdDVDJIODZ5T2t4MUdVRHExbk1nTnhRMVBTeUl0K1l3ZWFiWXNXYy9sdHd2WXpSY1JZYXVoUUZWQ0dZb2JWemN3UXNwb0tFMlVyUm9hdFMzbWFvWDhGbUU0VjBnaERXNk9BMmw2Yk5pVmZOZ1hrbTFEMENIeGp0c2s3amc4cDNiTUZLbXRlUEttYmNxcVc2cDllUlBWcmNEZEQ5cjdudDBpc1UzaWxpUURVZmIwWXAzS252cExmaXdXWVV1QjVZK1BIdTlPOWtpT3N5c2NndlFFMFQ4K0RqWHN3Y3FsTjVtN2ZILzBrSXcxcm9VYnhPcEJjZTZKZlRKcmo2cVVUdlM0Tm5jTWQrbTlUZTU1aGlYeVVOcVh0TDFqdTcwVDl6WFV6am5IU0FkWmJmZHZzUzhlRXJHUzZHVjFvYURCSGtxNXlrNDBoeDJxYXFIaEtjUG9WckN0bGRFWUNLQ2x0MGo2UlF4TkhxV0s5ekVjcVdkWkF0VXJlVGFTZ2k1L3VXeGxLL3RpVSswWXVwL1hZTzlocW5TS0xMYnRaWlcxMVp4enNTcHpSK1JXNTlQN3RWdmJmQkVPTk1hMDJyclR1Wms0bHppVXducStqTjFLSFduS3J4MCtnNEphNHpXMTNUekxJZXJQUmhFVzIrOGlER3NVeGg2UGt4WjFudHROcjdPQkUzWXJEaWZBSUp0VHFyc1VXNEtHWEpyeVFlODVwbmZXcWFwNTBjSllVZHF1RTlnbmpMUFZEcWFLdG5lYkhxUU44bjNYcTIzVlFwbTFsY2xpZFhNWEN4UzhjY3EwRnNzYzF1NElzalBXWUVnbVlqcENVZktmeVhaRmJwM0ZxYkRLa0dqYktGcWNHMndpZnZoZUVucXdEV2RPRFNkcU9ZbUU0bG50Y0c5YnVPK25BbHRSOXVEUnNpNXEvTUNjb2poZjVGUUM2RlM4N1ptQUl3NzJHcksySzZLRnNhYlp4TFhyYS9qaFQxOWlxRFhRTDVTSW01Y1ZvVVFveDZvQ2FIaC9oZktMQ1FWRHFiUGZHZVU5Qklnd3h3ajlOL0lLTG0wdjRlR2VDWFIzUlRxbDIvNWFyczIvYUtzVG9HUG9YcFM1UnR2V2pCcjBxdFB0Um10SDJjbjJuZVhpaCtKV3hxSmF0MlNueW5SbGxrSHd5T1pLZU81SHYwQ3hXRVdSRGFRQjh0blIvamdDTk1UZ2ZUWXFMV1FwemFxV0Ixbk9Ba28wcHRZZ1ZheHNvWkRsTlF4Zlc0K2dFVXhpZG00T1o4KytKZ1czN2ZZbTI1NVNsVDNLYXEvM0puV0NQVUtUR3JkcHpxbW5IbjRrVDZTY2NSUi91eC92M0xUVG43VDJPRTd3a0UwRERZYmE2dklxZnZ5ekdVNXJtcHkvZVRCQ1VJa1NRRHlLZ1ltQkJBNndkNUtnSjBXSXB2TVZiT3hXY08zOUxKWVdjOWpOVk5sOE10R1Rtc0Q0L1Y5QUg3a3dRSGlMb2tvZzRxeUFoYTdjWUxIWXRuaHcyYnREMnNBK1RIQWQ1T0NHYk5JNnhhclplcGxQVSswd3ROMHVqV1FIbHlJY1Q5clNNR0Znb1ZERU5xWFRuYU1oRGhOVkpObXIxRGlWYVZvYURiZkpYeDRjNW5DeFFsREpsTXBpSnpudDhiQ3dsYzBMREIwNmlFTjMzNDNlc1hHNXlQVFNDcFpXdDNGOTV6WFliTjcyREkwaWs5bkIrT0VVRG80Tjh4cFI2Rmw3bm5KRFVkbXI0UndqSGNyNG52aGJHdGRzTnMrd0pmZWtNRW9pa2FXNG5qTmtmV1pJVHpXbEdNNFNEWVhRL2IrWDNtQXZzNFVVUGRSTlhUakU5bDVycXlvajNwQWJZOHQyWDA4eWl1UndIQXIvRGtRamlQV3hrenc4d3ZsQkx6dlFRZW1ad200YTZjMHNLdVV5UFdiZzV6OC9oL0dKRFRGZHhWdHZYOEZmL2VVWGNEQkZoY1BLb2UwOUtlNC9LS3JkL05RVWEzb3ZUSG04OHBQdm4yVXZjVXJrbStncGl2TGwydnd5UTY3T2ZtU0FMWEliei8va1pXUkxiTEt5azV6c2pra1VMTkhBMGI0NFBqTTJnT2J5Z3VBSTlqOUlDOUVnd2l4YW83MHhUbWw4ckFvQ0NQYjAwYU5SdHV0Q2JMTjc1YlBJa1BYNXEvajEvNzZNTnpsT25pZmFlalEvSG5wNENwdXI4MGdkVEhFb1VzYkp1OFp4L3oxSGVYdWQwOW82K3JwWVlYQ04zVDFkU0hRbDBFNUpCdFdQazBNSFRuYzhKNDVHby82MDNUS21EQ2E4TUc2RDJqQ1hMVkhGaDNCOUpZTlh6ODJpWWRnU3NWSkR2YmpqOEFGMDlTZngyaHRYMEJmM28zc2t5YXl0bzNGakUwNlRSNEdmSGVZNDFZbFh0Z3pFSkNjZ08xdWFVQzcrZ0l5eWZEWXQ4MWNoa2NmWXFmYVF6SVhXTUlxNytPeDk5K0s1NTMrSTQ4ZnZ3TnR2WGNDUjBRUVdWckxZSkJqcHpTckhaME9ZWDl1VzgvZC8rZWQvUW9SVEphWlBaNlRsYWYveC9SLytkUGt6eCs2YW1yMjhrSnBmMnNKUHp2NFdsK2RYQlhZaW44dWp3RXBhRVpOU0VicGMvSVdyODdodzZTb0dCNGY1R01TZHg0K3dRenpJMWQ1QU5DcnFOMDAyaklKUk5vUjZPV1B6YzVMREdadVg3UVF4SUJHVmhKeWNOaG9jTW1hUVh0akVlNXlKWjluTjF0bUpGc1BVZ1ZHS2dzMTE1bDZHT1d2aDlkY3Y0TXFWYTlqZVRtT0x6ZDJ2L3NVWDVTaGEwUGVyNTY1aDZuT25adWkxcDMvSE9IRnNaUm9YMzFsZS83dWx6UjAyUkx2UXkyWlBwZGJFMWNVMUx0U0hubGdQZkNUU1RMbEFHbkNHR2w5KzZEN28wVGlPMzNsSTVvaFhaVTFYTC9KdlAvc2tCQm5tU1R3NXdBZ0lVMnhvVXUwTDR5eTI1NXNWM2tlVVNKVUtkdGR2b01vaDQycW1JQ2VwOVdhTnMvVXNQditscitEZzRZT1l2MzVObE1ENDR3ZnV3Zno4SXRjU3g5R2p4MWhPNlRnME1ZRkxGK1lSOGdVZi9zR1Buc3ZmMnJpZHphMzdUejJRR0IwWXZEODFNb0pqaC9wd2ZISU1teHNaeWlRMlViYzJHRzYyVlB0VnpoRUVhb3B4MWJFN1QrRDRIWWNKQ0NXTW43eVAvWkVDZS93UkdqWEl5V2lmOUpiWDY1VUFJTW9pc3lFTUswdE5LYVVjUTdIQzJxL0p1Y0JTdW9BQWFlVmdmeGNWam9hQm9SVEhYUkg4K1ovZWc4TG1HclpaK0FZWUJSdWN1WWU3K3ZHTFY2OGdOVEdKWUxQNjlEZWYrT3ViaHBBM0dTZU9vUU1UcnpmcnphOVZHczE0YnlLQ0VML3c0dVZyR0IzcXdXZnZQc1M0VDBKMENuYTRHRUdzR3pzWmxoWXF2dnhuVStRbkRpRjlERWt4NEdCejFoY0lzNTBYb2NkVVIyRUlFY0F3Tk5tSmh0dXVGMjNxZXFtS1hLNk8rYktKM1ZLRitXZmhNeE1qTUwwaG5MK3dqSzFkcGdRRlE3MVl3TnZ2em1NclYrVG1WbkhpMkNUbU54dllMYXJMLy9hdHh4NzVvQzIvTTUrYm1abk9wMUluSCs3dVNjN21DcVY0S0x5SmJYTGF4RVNLSWFkUjdUZW9SRXlwKzNSL1NJNnozbnpqTFpUSlozNUNlNHZoNnUvcEowSnhrWElpNnVTb2JkaVNWaVFoazJxRUZKTWxFK3Uvd2tZYXk5czF2TVZjRnhUU0hTTjlETEQySzJpNHdIQk1wM1A0eFFaYkUyYWVxcWRGTkE2Z3p2UllXRnRuYXNUejcxMWNmUmkzT0R5M09wblBiK1dQVFQ1NFRmZnJYMHV3aDcreHNjVGlVM0FRT0xuSk1ud1pwblRHQUdmVnNZQVhuNXRJRWlkOVNLV0c2RFZDTlJjY29MQTJhMlZIK3duZU0weUhndzJuMkpVYVVOUnZETStkeFUxY3psbTR0cjB0cDdWaTN0N1BjSHgzWVIwbERrMGlBYllJbTd2U0U2SzZid205cTRpeVJ1WDNlci8rOXF0blhyK1ZIUi82VTQyWFh2cnU5TVJnN3hNeGxpYWlwOUpncnovTDhSVDd4VnlmR0JuYkdCaE00b0Y3ajhNa3RLK3ViVEN2ZkU3NE1ZZlVVRlI2VFpVOUY5c1pnN2xUSkNsOHhSaEx0TnEzTXdpT0hVSEpkdVlUQm9WRG9WYW5ZVnZJVTYrS2RrU3hXVWFlSUZVVHZWR0d1QmhUeDJOZHlCVUxUL3oycGU5TWY1Z052L2QzS04vKzdwa3p1WjBiVDFpMk15NCswdFdIQkdmZ0hrNUREWWJhWmliSGpoVTd4VVNzTGZLYitFV0NtR243ZUU0TWk3M2hCRlBLNDlSZU5GQU1NQjBSNk13QW0wUkpUM2NmWXBPVDhIUEJYcmdqYXQ2N1VxbktHWi9OcWtOcVhMRWh2TzlJZndMMzNIVUVrMGVPUFBIdTNNeVozN2Yrai95UnpmL00vUFFNVStRUlprKyt5Qy9icVJJTWhQZ1JPOC9ZUDM5aEFkYzNhOGdXbTdLcWx1OHg3QVRFNnh3dUNpVWlPOGIwcmpUVW5jeWFkZlpOOUNoNjc3cmJ3WldnYU1wU1FmTGFBOUZ1K0JYT0d6alY5WG85T0RTV1JKeFVjdUxJR0k0ZkhNenJqZG9qenozL25UTWZ0ZmJiK25uVThzTGxhVThvZktwc3RKYnJvbURsVGc2UGpDSEFUdkcvUHZVUHVPK0J1OWxKRmcwWmo5eDVVMWExTGRsWWxiTndZWmpxOVBpRndtbXhsVjRwMXBFOGNhOGtkMUg0Q29GZ3VOT0lXRjhTNDBNa2ZxdUpzRi9IeVlsREdCL3V4NWNldkdPNWxzdWQrcS9wLzU2K25YWGY5Zy9iM3B1YldaNDUrNE14YnZuVElxeW9HREhSbmNERzhoYmV2YktFU1JJcDNJR2c4SkI0dElpSXZvRVVGKzd0MUlZQ1dIWXBuOFkrL3hVV3NWVTVLTkU0L2hKNXJMaGROWlVHWDg4WFdPeHlLc3ZRdlh4cERxc2I2Vy9WUWpqMTc5UFR5N2U3NW8vMWswUnhYSGxuNWlsVHI0M2xOYy9NSmtkUWl4ZFhzSGpwSFh6bGl3KzViVDhMdXBoOWMxRTZQZGNrSXFyaHVQU09TVy9tVnBjUk9YZ1VWZkpXT0JLWGJRYWhRNzNVbkYwY0hmdklrMkZxUkkvaXBUQnZpSUoxcHI4M2VlcVZOMy81K0tPUFBwSC9PR3YxNEJNYytVd212N0l3OTczVStLbVhEVjhnbmkxbkpyNzVOMTlEcVppbFhxeEtPaWptODFLZUJlTUp0dHFqc21EMWNKcWpVc0tOUGZDUTdNVkVpSGpGUW82aXZZR3JsNi9MMzdiMHhLUDRrd2RQSVY5cXpxeXZyVHg2N2RxYlQxK1lPN2VGVDNCOG9sL0t0bytmL2V3L1ovZzBjL2JzaXlrQ3hlbGF1ZnFOYXFWMFVvUnRuY2k0czdWSlRSbGhYdmtSR1J5akFFOWo1TUE0eVo5NTV0VlFJNmdVY2puMlhtcVVialdFTlgwbUd2SzhmTTlkdzJmKzlyRi8vRmhldXRXaDRGTSt6ci80WXNvZjg1NHM3bTVQbFhMNUV3ZU9Uc1lacGluTm84ZTkvcUJFVDNvMFg2SnJTK1g4M09xMTZ5dmhjSFR1MjkvK2orbnBtWmsvMktEOXgvOERIdG5FOU5ZS1RUTUFBQUFBU1VWT1JLNUNZSUk9XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFEY0FBQUEzQ0FZQUFBQ28yOUpHQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQmpVU1VSQlZIZ0JyVm9KY0YxbmRmN3UrdmFucDZmRldpejdPVTY4eEhpTHdXa1NGZ1hLTkcxU0VGT2d5WFJoS1cwek1DVk9PMjJITUVBeWFhQ0ZRcElPMDNZNnd3UklweG5HN1pBMGdZYVV3WElDSkk2VFNBNWU1QzJTTGRuYXBTZTkvYjI3OEozL0xaSzhFR2Y1TlhlZTNuTHYvYzkvenZuT2Q3Ny9hbmlieDU3ZTNrUXVtT3NMMnViMlJMSWxCZmc3Z3BhZFNNUmlpVURBZ21rYXlHWVgwcTdyanVRTFRqb1VEZ3hHdzZIOVJpQTQrS2w3LzMwRWIrUFE4RGFNdnQ1VW9pdlJkWmZobDNyRGdWQnZhMXMzbXVOTlBPS0loRUtJcXNOR01CaUE3N21BN3FOY2NWQXMrWmlabVVFNEVrWXdFSVRtZTRPRlF1NTc2Ym5aeHoveU5oajZsb3o3VE4rN2UxM0gvVW81bCs5Tnhwb1FpMGJSMmRhQ05WMmRhT0gvSVJwaldCb0NuTGhsV0xCdEM3N3YxODcyeFJnYVdJTHJPalRhaCtOVStMNkE4Zms1bkptZWV2eG5MNy82OE9QOVEvMTRrOFBBbXhnZnZQSGFIYnZXZHp3V2k4YnVMWmZLS1VQWEViS0RhR2xPWXMzcWJuUjNkTURpWjRZaGhsVTlacG1XT2xmVE5INXVxUERVdWJUeUt1Y3pUTlZCaTFHaXNmbEtaZE5pdHZqSjNodDM5ellGL1AybnhtYlNlSU5EZnlNL0hoZ2VUb3pOWngvY3N1UEdBYy8xZW5QNVBDcGNiY013RVdMb3RiYTJvaW5Sckx4aldTWW5ia0kzZEI1R3c2aGdJS0ErTjNtT0xndkF3N1p0ZFg0d0dJUnQyWWpTMDJIRHh1ck9MbmllMTJ1SHdzTS8rYjhmZlFWdmNGeXhjY2VHeDFNUlBURGdPZjRlUmhROUVrQzVYRllURE5nQnJPcFloU2hEVWVPWEhvMFRRMngrcm1zNnZXYXFpWXNCWXFnWTd6RWtsY0g4VG9iOEw4UG5TNFRHUlFQTTAyQUlwa1VRMGp4a012UDNuaDZmR2o0MlBKeTYwamxma1hGSFQ1M3I0ODBIT0t1VTVNZk03SXo2WEZaYzBqWVVEcXJKbVp5NDR6aVFlWXJSRW1JVzg4ejFQUEVBaXNVaXNwa015c3l6VXJHa0ZxY2svL01vRm9yS1lNL2h3ZkFVRUdvaUlDVVNUYkFaM3FkUERQSGFic28yeklHancrZjZybVRlcjJ2YzBlSHpkMm02OWtNZmxZVEhGTTBYRjFGaDBsYzBHMldQSVJXSXdLTjNTazRCVGlsTGUwcHcvQ0xLcUtpTWR0V0VIZVRTaThnc1psQVNnN0w4ZmpHSGNyNEEzM0hoME5BaVF6eS9RTU1MWlJUNWU1OHowN2tnczlQakNJVERhRzV1UjdtWWgyZm9DVXYzZmpnMFBMYm5MUmwzOVBUNXUzelhlMGk5OGVWbXZzcUhOYXRYODBSTmhWMkE0ZWJRbTdMNlZRVDBZUk04NU1MaUJib0RBcEErbzg4TUVFZ0VSSHhYZWFPT214S3FFdWEySExZSlRVNldzR1habUprWVI1azRzMm56RnBYZjRsMjVIZ1Bqd2RjejBMemNGeThkUGRWWExwY2VNbXM1SVVYRGtWemlsTUt4S0V5QmVVNHFrMWxrTGJOVm5aSUpSaU14d3I1Tjd6cjBuSVlTUFNHL0MwU2lDRWJEcWl4b3JnZVhpNkdYOGlvbjdXQlk1YUdFZEtGY0FEK0d4L01xWlFlVGs3TUl0SGJEQ2pOQzZHVlpMR2d5QzE4VzRjSGp3MmRITnE1YjgvZ1ZHemN3Y0N6bGU5b2pQb3V0NUlya2o2Uzc1SktzdHFEaWNVNms2RllRb0pjRUtKcVR6V2hwYVNFQU1GdzUwUXJ6SnAzSll2ejhPT2Rpd1lvM28zM1ZLclFRVFJNMFJxc1FhT3lRTWtwS1FLbGNRWjdobnVOMXB4YnlHQmtlUXpwYlJpYnZZT3UyZDNJQkluQXFaZjdlNVh5c0tobFFidGNmSWNnTWJsNjNidVNLalBOdGV4OWZFZ3JWUEs4SzdlSUlNWkVyR3VQRm04d2dpcDZncFZZRkUwRTFldGtWRHpBYVJ5Y21zRGlYWm1HUGNRRnNuRGwxQ2llUEhFWlRMSWFPUkF2V3JWMkRjTlJtS05ySVpiTllXRmpBOE9nNW5CZ2ZwMEZaRkhORnBCZEthT3RhaXcvL3djZkphQ29Lb01Rb1g4Q0s0U252Wlo2YVp1MWptZHE1YzkyNjlHODBidURJNmEvd2xGVERVREdRSytzeEZQU1FoY1ZmSGNUYWdJWk50OTJHWHh3NlFEWXhvMXhxYWlZTHQ2V01kUW9sdE1UaTZHcHB3b2t6MHhpWW1HV29CdEhUSGtOY1o3NlpGU3d1ekNJVzZrSkFrUEQ4S0E2ZkhzVzViSW1BRVdUSWE5aTE4UnBNVEtlUnR4T0lNYVFMcFFyRFVOQ1k1Y05pTkVuTytxZ3hIajhWZ2lGMThPN2x0cXdBbE9jWmpvVHRlMWQ0c1JZMkZmNlY2U21qbkVmYzFwRnNqdUg5NzNzM2RsOTNuYUk1bXZyamFta09FbUVkTGZFZ1ppY21FUS9GMGQyMURwMnBUZmpBcmIrUEpPdGgyK3BPMkxFQVlKV2htYncyRitUcTNUY2dzbWt6eko3MTJMQjVKNDRQSG1ZWmlHRHRsdldNSHBmcjU2djgxSFNGTmhmNlJHcnJuc01uaG5kYzFuTU1xMGZFR0I4clNhY1VaYUkrMllTTGdIeEJhenlkRUU4WWEyTU9hVXh5cVhHZW5NY3FyTGxsUk1oUXRtemN3THcwY1pWbW9aRE5ZT0xWbDlBWkUyQ0pJYzNTNEpZMUlpQlVxTnEyaHVzVE1XUUtjaTVCNXRvTm1LdDR1R3BWaXNiNWF1a2s5MDI5eW5iZ0x4a283K1hRTGVOQnZyMzVJczhkSERqWnl4TjZhKzVTSHZPWFg4RGpCWG00Z3BwRU81TmhtcDlmZ0lCK2U3S1Z5Rlptcm5sRXVnb25RZnJFK3Bkb2FrWThhaUJKNzdSRkkraG9hV2R4anNISkZoQWk4SlM0akxyTEtkRENjbVlPTFV6c05tUVJjdFBvYm84anlEUm9ha2xXRnhoVlNtY3h0K3ZHMUkrNmdUTC9YNTBjN3IzWWN3YnVXdTRwWmJtMjVEOUdHeHg2ekE1R1lZZmppSWJaQlFRWFlJWkQ2T3JzSk5vVkZhdjNXZk5Dekw4S1lkdjBMVVNpemJ4TEhpWG1pTTRGS2RJd1JhRmRNaE8zd0M3QVFFR0tObS9WMDlwTUNoZUR3VVhLWk9jUnpMTm1zaDJTMmxhbmN4S1dMc05VUEZnSHUrVkRNelRKdmY2RzV5VFhmTjlyVUJxZko5VzlKeGVRNGZoU1kxd1k3VjM4djRSc2ZoWnNSb1ZKb2pVUlp5aHlncHhoUmRaRHR4a2lBWGhFdUFyWlI1NEhyV0FZczNRRUpkZDBaQmwrVHNGWHJWQ1V5RXNXcXRKQkRrK1JiYUp2S0lJS1MwWm1vVUFBeWpHVUY1QW5reEh2eWR3YU5BOUwzSlFyMFRzd01KeG9HRWN6K3Z4TGhLSTZxZlphcG5HYVI5NllTR0Nlb1ZRaEY1elBMV0krbjBOVGE1SzVrdU81WEdGNmgxSExTVEhVV0kwRnVnTXN3Q0Y2TUJ5SlMrWmdlbW9HYm9XZnM5NTVycysrTDFTZHBFbXZRRm9lZ2hjOTc3TnpXQ0FsSzVYSzlCcFJsRFZWK0dqVk1BbEpYYjNXUFZnMzBJeDZleHJHOFhxZnFIdXA3cW42ZTZmUlozSEN2TFZESGhWSmJjZmtYSUV3YnFPbmJUVkJ4QkEwUW9GY1VVTFpveGRsRXE1YnZaWVZwQ2NwTWN6TXptSjJaaFpCVGpMT0RrSThFR2xPc0paMUlGZklxKzdCSnhpVnVIQUxSWWNMNXlCR3NCSG0wOWJXcWtoQ2pHUmFycTBXbksvaXlmcjdKWS9vNzFORzdudCtJRVZMZG5qTExCZWp4S0JHd3ZJN1U4Z3gvdy9SenVDcUhpeTBuVVcybUVPSVpERXpNY2NjZ3BxZ2NFZERsNkp1cW5PRlVySDN3K3pzbFBKc2xHZzVQRG1GNHZTTVlpajVVbzdkUWdGejZUUTJ5UDJFYUROQ3B0TTVKTmR0Z2s2RG96VE9rVWlvWkFUVFVCS200bnFOZVVvN0pZZS9sRW9NellHRTlKSTc1QWRlTGM5VXJubGVvN21VbzlxRDBUQUU0Wm5pQ1dvaDdUMFlaUmY5djg4L2h3QnpReEpkWXk2bE9VbDI1eXBrWkVKaTNOVDRCQ3A1QWc1emJwN2ZaOGtmczJRaHdrN09uQnZEejM3K0xJS1JFQXBzaVp3S1pRY0MweXh6TEJoTFlwYVN3K1RrcEdxVDVGcjVRcUdST2tMN3BPMnFJK2lLbEFwRytreERNM3RWalpDZVg3MVcyMzZKVlVNM1ZDOVdqVndQT2Q0bzFoTEh6T1FFSXF4djJXd3pTalN3VEE1YXFiRFlzKzRaTkNyTFVBbHdFWUlNUlpsd3NWamhwSUZ6TkVUcVlaYWNzMFFlV1NaUGM2bXhsSmhmTDczeUtzc0RTMGpZUW83SU8xM080WnBvQWlaelRiSW5HSXVvdVhGNUZjMFR6VVVNazdDVXNLMm5FK3F6OWIwZFpqZ2MyaTRyTGFzaVA1b2dKeHdkSFVXQkszVGl4QWxzMjdZTmtVaUVZYWJ4eGlFODhMWDcwZFhWaFh2dXVZZUZPWTE0VTRMbmt1RXo3Ulp6QlJaZ2hsQmVhSDBaSGF1U2hIZ05pd3pYRTBPbkVXWVl0bEZuV2R2UmdqanBXWWFBNUhOUlF4dDQzK2xwSEh6MUtOYjB0Q0FTaktNQUczR1dCcDlvMmR6ZXluQ09ZV3BxU25scmdhaFpUeDlwdFRxbzJWd0VoRDVTakxuQW5xRmp4enBPbkRpSnJWdTM0dW1ubjFhVG41dWJVN0tCSkxHc3p1enNOTFp2MzRaRGh3NlJGaVdxUmplMzRQeklFQko2a1Y3Mk1UUThTb3JHZkNQcTZaUUdKUGQwSXA0c1hBdkxSaVFRaHB0elVNbTVPSHQ4QkhscVBxVjBoczBxZ1lIZWloQjFoWE5XQ2dReUV1ZTEyM2V4M2hVaFdvMUVsNFNmRUd4SkZSblZIaEpxOGV0aHVYUVF0L0s1WEdyenBrMDBoa2hHTkF1ejYzM3l5U2R4KysyMzQ2bW5uc0pOTjkyRUF3Y080T1NwSVNUWjF1emF0WXRkY1RNV0Z4ZkpFenZWLytXNU02UmhUZFFnWjFrU1NnaFkzWXFhU2RjVnpKZTQ2bkcwZDNHUkZ1bVByaUJsU3hPQkxkY2l5ekQzdkFxUk1ZTW1seUVZRHVEc21JUGo3QXk2dlNLQ0JLbEMwRlQzRmNBUTQ0eGxZcE8wWHNJN1BhOXVrRmNERkdWY3dteW1HeHdXMjU2ZU5YajAwVWZWNUF1NVBOTHo4OWk1Y3lmaWhON3U3aTZzVGExR2tsU29yYTJ0b1ZpWlVvdm9GVjAzR1hKaGJGeDNGVjVrV3hPeURGelQwNGs1MHJNa3hkbldKTFVXMWpXcXk2cDFXY3d2TXZkc2VDRy9XaTdvaUVoSmx0cG5DSmN3NDlyNDNiNFAwZGdva2p5bmxmVE80djFrNHNKU0pLY2FVdUJsaDU4d3IzdlhPL0hvOTc2UHozN3VjN2gyeXhac1lXaHUyNzZkdENtaUxqWkhJN2R1MjQ3eDhWRk1FRWg2VWowNGN2Z0lrYy9CZTYrL0FWbDZQR0pLaWptNGZ1czdzRWdBT1hXSytjV2FjTlhxTGt6T3pxdDJaZTJhTHF4cVN5cUdVcUpYaHZpYjhYTlQ3QzdDNkY3VmdpWWFrYzdrY2VUc09iem5vNTlHY3NkdStHV2lOdHVvdWtKV0w5U1NYdlVpN3RXYTFsb29yc2c5L2FyMTYvR1AzL2c2U2ErTDkvLzJCNFJRNHVqUU1YSkRSMUdoSjU1NlVuMG5DVDFOMVVzd3FhdUhYbXh0d2FmKzVJK1FaLzNTUlBVaU03RTFGNzN2Mm9VdXFzNWpZMk9zVlduTVpuS1lwVGRHR2ZLTExQS0NmQW15bGU3MlRuTFNEdlF3dEtOTUJUWlRHQ1p6Q2JkMVl1ZnVkNUc2ZVlydTZhYmVRTURsSkxuV3h5MHpyRzZVMXZpOThKZDBobkxiVDMvNlU1VkhJcG9PRGc2cS8rV0U2M2Z2VnBKY2tEcmkxcTNiQ09rKzJya1hJUEUvZk9vb1BaZ2phMktzczl1V2hZa1lIbjZ2OXoyNGJ0c1c1ZW56MDNNNDl0cFpIQnVad0hGNjZ2enNBaFo0Ylp1ZTdlNXNWMDFubWd0d2xvWDlsV01uc2ZQNm0ycjltM1FDYkhFTXZZYU1TOFpkYnRSTFd2VjNXdHI0MkIxL2ZDZEJKQ0VJcUJRb3hyYWdwa3hlV0VzeW1heXVEQzhlaTdNakNFUnhpRFhwenIvOERMWEdncXBuT3pmMGtLbXdFeER2OGRWbVRzYWJZcXhSRmc0eGhITXM1ajVybURpaklycWsxQ3BMOUV5UkpIeE1MV2J4OHJIWE1Ndis3cU9mdkZQSmdRUmJHbTRqd29nUlRua2hHaTUvdjd6MWFYaFUwNGFNejM3K2I3aVo0V3lxRzdlaVdWMTJzbW9VS2J1VmliNS85N2YzWW5wNlZFSCswT2dFMXJPelh0L1ZKck9oSEI1VURhdlAyWVVpNUlTcjJuRDR5QkdjT2p2Ry9FdkRFVHJMU1UvU3E5bGNEaG1XZ2RQak0zaDFaQnkzL2VFbjBkWnpOUTByS1FKdUVqekM4Vml0eDcvUVMvb3lZN0FpUEd2NU4yUVdTOFV6Rm10Ui9VZXEwdGNhWGJtQTB2UDV2V1ViU3FQY3UvZkhMUENFZVN0S2I2YWgyVkg4eXc5K0FvdGhlOU03TmpCekhMajB2bTJJVkZmRWFvTElSMjc5SFR4M1lBQXZEaDdGK2ZGSnZNTEMzOXFTZ09GVDczVEttTW1VOE9HUC95bDIzL0Jlc3BPS2FvU2w5dzZ3WUdzWEdiWDBXZ2NWVWNTVy9RSTFBdzZSZU9pREY3cTcvaHRmNmZtR0NsR2Jrdm5rOUR3ZSs2OG5hR2dFc2NScUxFd3VzS1pSYTJULzlzMy9mQktSUC9zWWJyejJLbnFPN1F6WmlNYkpHeVRRS1M1TysvdmZnODJwTlhqMjRDQk9qbzFqK093WkJPM3F0bGFpSzRVUDN2b2hSa1dCalNydkszeFdCRi9lVXltMC9sSk8xUUdqN295NmtUTEVFZFhQcFRQeCs3Vjl3cDVMMnZ5RjlLVjZBVmNwd0tJRWc2clVGKy81T3ZYRUNmVzVIT201TVRiVVUwci8wRHdiWVRaRlgvaUwyM0dqaURyc3lSeUNUTVV2dzJOZjU3SE9sZVZnYlp4Sno1TjU1RlRPVVJiQVk4ODhqOTViKy9EbEwzOEp4VXlCb3BISm5PWEdKZk5XVGRYWExqRTNmOFZSNytucW5RTEw2VHI5NXAwNzA3eEEvOG9mZTZxVnI3cGN0cGtzZlBXQmIySDR0WE5FU3pteHBENFB4VHQ1TVZNbFAxdHY1TFVRdnZTdjM4VytJeWRJeXJsYnloVU1tMkdscWRBTnpKODQ2VndTVjdPVWJMNXFEWm9UUWJMOHJNcXBIei94Sko3djMxL2QzcXJ0Q2wxaXZWY1lkN2xCRHc3dTNMeHVwTnFKdSs3K0ZTZkNVeDFCZ09IMzJxbnp1T2Z2SDhDcmd5ZVV0enhLREFxcG1Gc0dPNEp3ckkzaEpEY2lWSkN0R3FFbTNQZnQ3K1A3UC9vRkRZb290Y3hTY002dUlpKzlXMGt0bWpDVE1kSXNsNHNpWFlGQlJQem1OLzVKRWZZd2M2M09IOS9ZcUJuc2U5OVRScW8zWmYwaCtkZFhvZ1JYT3hURjVOUXN2dnExZjhZWHYzZy9EaDkraldzcmJRWTNHazFQN1locXFBSlBKRW82WnNjNFdYNm5FUXpvY1R2U2pILzc3NmZ4clVmMlFnc0tseXhSTEtJcUptbzBPd1NIZFhOK1pwNnFNbjlQL2FUQ0tQQkl2Q2RJRXZidTNZc21ocVFzbkFwL1JSdjhaWWRYTzZyalFoVk1Kc2UxVTNzSGpXRHVQM2gwSHpsamI0N3cvSjMvZUF3dnZ2alNDdGVieko4Vk1wcmNna0FpOTNOS2M4Z3RUSERyV1BvbzJkQjNsWURxRm9HMXJWRjgreC91aGxaWVFIb3h6NTZ2d2xZcGg5SHo1NUN0RlBIUzhEUWVmL1psVmRRTml4c2lMSWI5eisxSFIwOFhhVnE1V29ZOGE4azRyWWJxN2xJZU5zQlFpY2YrRTV2Vzl2UXRlWTVqUHIxdzN6TS8yWWUvK3R3WDJBVWNYSWFlZWkzM2Fzb3pNMVZKQjVMQXZKUkd5aFVJSktqN3QxRXlZQm5nZWxWODJUT1EvWEFUNDRzbDNQSFhENUIrNWFseWNjT2prR0VuVHNHSEhGTmFxbG5LRFkzRlF2V2E5OS8vQUFHSWFXSEZsaW5NV25VZmpNQ2xqa3VBakVPdkVTNGVxcjl2QlBZUEh2M095Sm16MlY3T09WV0gzT1dlVXQwdjcxRm40K283aXBtaVp2blVKMlV2MjZIMjRiRjlzWFJYMVNuRFZ5R0NFazk4NXJrRGFHMWZoVlJITStHZUhtRlRLNXRzUDMvNU1HWW81RXJ2Sjd0VEZ1dmo2ZE5uc1BkL25tRy81cEcwYjJHYUJCVE1LNUlzbXlId2F5VkFWeko3UGNCWWxmczNydTIrN3lMalpEUjNyRHZFays0VXIyakw0cm1xRGVvTmI0cm5sTkhxYzAzVkl0bW0wZ2dLSHZVRWtkTXRRMU9NeFJlUVlTdmpzSlM4d0NJdVR6VnN2RHFsWHN2ODdZdS9PbzdKeFdKdDA5RldPMGt1UTlzMDQzajVsZVA0TVp0bnljMnhzUWtXL2hadWxTV1VnRlR0Q0x3Vm5qTWMzUHp3dzk5TVg5SzQ5UFRJUkx3NTFjd1YvSzBsZG1Jb0l4cWNXNlE3Q1ZFeHNCYXVDbDFOVVlDcHY0UVRxb3hRTTFmdFNrVTNGSXBLWWZkcDRNREpNVVVHM3IxN3U5SWpYenA4bk55eW9FUW9qOEJTSXRqb3dtN2NBTGxzSjNMc3lBKytjQVRQUFhzQXI1RFRpbGlVVExhaGpkS0R2elFySWRiM3JWL2J1V0lUOHFMQVRhVjZFMTdBSHVDcXBPcWRyNXErNTZqWUY2OUpXQ3F0a0JPT1VGZXBzTytxS2xEY09iQ3FXOGJadWRlNGNvc0tnVWx5aE4rcjI0a1JDK3dSWTBFRFc5ZTJrMENIOE12RFE4aVVlUTkySElHUWFJT2tlNEYycW14dFNpR1R6bDFxcjlmSSt6SzJiTitBdXo3L0NleCs1dzR1U0dYazZ1NzJkUmZhY3RHZStNaElmNXBJZHpNOWtWN1JZcWg5YUtOMjZMV1duOHB6dWFJV1FPcVdFbFZaN3p5Q1FqamF3ZkJpR1JBKzVlbU52SkNOUnZsM2l0TGRMNCtjd2VoY2prS3ZGQnJxajNydFNRaVcvMlR6YXBZV1d5Mi9wellhdFlhT0VxUkNmWHpvRlA3ODAzdllxdTFQYy9mcFpseGlYTFpCV3IvMXRqNUcwdy9sd3RWazltcGhDWGxrb3FwZHVFVzFsU3NlaTNDRFVLU0RzbDlTOWNud3dpam1KeGkrNStsQlN6MXNJMzJqREpIM0tyeWVMZDRXYlZPdjVtK1pobnNNU2Qxb1FrdmJabm85eUtYS3FjVlJNNjExNEo1cVlnMzFlRWQrY2Z3aitmVHBTKzZKWDVZR3pFK2RHRXAyWExQQTNMdWx6cjZobm1IUVZYOWx5RWFGUFA0VXRGVFhVUDIreHRLSmZJS1hzbmN0ZXdvMkFTV2J5emJFSFhuZVMvS1FHd1lrejJ5ekRHV2Rla2pBOVNzcS9FeUxPaVVSV08yZ2VyVlNzTlJrcXp6bmd0MDlmMzdndTVlejRUZHluTG5Ka3k4a096WXVzTGpmY21GcEVDRFJ5U3BFWExKa1I2ZjJTSVpCNzBtZWVacjBaR1QyUm9CeTNIbHVjWlZVdnRSQlNyYTRSTURWdk9yZXRuUUVhcWZJRUxRVWljT2dvRVQ5a25UTjBKZWVxRmd5enI5Ny9GVC9RNzlwL3E5TDRPWW1UN3pRMHJINWtLbHJ0L0NDUVduajZ6SkFoU1RhWkhQcXFYcFc3Y0VVUTVFdXVyYVpMRnRaOG9pSHFaZlV3MjVxaDVUcW1HN0pQcnFsT25IeGRya3NYTFg2UkpMUGNQZGRlVTZzaGVFWFV2SzZlcUtpK2pnRmliNTJ4L2pwZmQ5OXZibGZFVHVkblJnYWF1M1k5QVBaNnVJTkVzdTl1THpXMVBGSDBUWWZqUTdhWW5pNTNHaTBURWM5a0NQU2pmcUsyMWRDRGhUYjhYeUZwT0pGS1o5bFFVNldGWlBkaEZIVFJmaTdFVzZxM0RBeHZPK0ZLNW4zRlZQdm1ZbWg5T3prOFlkYjJxL1JmTFc5N0t2VnJMT1ZlcVBZMERScU9WSU5YN05LZHowUmswenUwamhxbDBhdkVRT3Z0dkdpVjJtSDBrWExSR0dMKzNleWsxdjFtUGF3NWJoM2pJMzBUMXpwbkRXOGlaSGEwWmN5WGVjUjNyUlhiaXcxVDFQUDYxVU5WZ0N3N01xZVRKaE5YMjdoSEVud0F2WFprZ3BwdzZ0V29nYWRVL1dtQ2lEQ1VseWRjbjdITmYyK2E5NTk3dVQvRCtJTmpqZGxYSDFjL1k3YmVqbXJ1NWlIZmZYSEUrc1RWWWJXUkJ4WENMSG9JdFF0Qy9tVERNOGlDNjg4UkxEU09PVmxRcnl3SDkvdytrbkE3eXVtWi9yeEpzZGJNcTQrTm0yNkplWGJWaCszcXo3QnZObXhYSXNSajNxYW94RFU1Q1pKZnZFc0pmaU1ZaG4xd2l5c3A4cUVSQkhROXBOOVA1U1dqYjYzT040VzQ1YVBGQTFsRXUzZ3JNV3IyMGtDRXBycHB4aG9DVU1rQ2FwZDZma3phYzlaVEd1R09jZ0puQ0ZJTU9RcWo3OGRCaTBmdndZOXpkdWdXamFHSkFBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURjQUFBQTNDQVlBQUFDbzI5SkdBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJuUVUxQkFBQ3hqd3Y4WVFVQUFCdTJTVVJCVkhnQnRWcDVkRngzZWIxdm0xWExTQnF0SHNtU0xIbEpIQzhoaXhPU1dHWW5DY1FoWVR1bkxENXBvZEJ5RXY5VnV0QTQ1N1FsWFE0NExSUk9Td2tjT0JBb1lGUEtDUWtrdGdtUVFCeGJqcDNZc21WcHRJNldrV2JSN1BPVzN1ODNzcE5BeUViNmt2Rm9adDY4OS91Mis5M3Yva2JENjN3Y09IQW9Fb2F4MnpEMHJWWEQ2OVUwYlp2bWVSSFBSUVRRNEZZcnFHWlM2WlhwMmJpV3k2VXJUblhZODl3amNEQzhaLysrT0Y3SFE4UHJjSWhCSVZPL2s0c2NzbXhucURLM2dHSStqMUJ6QzN6UktHeURSc21KL01mamY2N25RWGNkbEpkVEtNM09vWmhaZ3U0Qmp1WU1lNjc3OVlwYlBmaUovZmZHOFFjZWY1QnhEeDc0NlpCaG1IZnp6eUhYYzJBdkpHRW41cUJYYkY3WlFOVnhvZnQ4OE1XNllOQklUOWVoMFFneHp0TTAvdTNDNEtNWUgwTm1jb2JCczBFSHdlVkoxV3IxWUJuNmZYdS9jTzlodk1iak5SbjM4SUdIdHdIbTU2RnJRMnFoZkc5bGFSNW5mL01FVE52QllFYzNmQzZONDlXZGNBaWg3aGlxbGgrYUdNZHpmVDZMUnZEbXBTSld4cytodXJUQ3FMazB6WWJyT1B4QVE4WHdJYnltR3cyeG5zT2VyZTI1OVlPNzRuaVZ4NnN5N3Y2NzdvbzArQ0ozaHdiVzN4VnM2NEJybXJ5QXBpNnlzRENIekVxYWl5dkRUV2F4cnEwZGxYQVFPUnBScUZheGxFb2ltVnlBTHhEQTJyWTFhTFFaMVZRV2V0VkJsZEdxMGxwYnMxR0Zqa0JzTGVwNGZmanBFTDZXWkhZMTdMdjF0cDMzdkpyMXZtTGpEdHoxYVlLRGNjaXdmTDJXTHdDOU9RSzlyUTBGMWs1bUpZZlV5Z29zdjhXL2x6R1RtSUdma2FwbjFDcU16a0l5aWRGNEhBRit6K0l0TFVQSHBtZ0h0dmFzUTRNdnBOSzBJR0RUM0FpanF4T1dHV1R3TkxHSlpVb244RE9ubUVkeFppcGVUTTN0Mm5Qdkt3T2VWMlRjUTEvNTFtNTdiUFQrb0c1RnFwYUJzNHpDcWFrNENwNE5SOWV3dUx3TW0vWEZOSVhKOHp0WVl5UG56c05nVkRxaXJiQlpqNkZnQ0hhcGdvRzJMbXp2NmNlVHA1OUdRMzBkM256WjFkQWJtK0YydGNHbDhYSVpWK3FPZjdpTWVLVmNRSDVxQm1WRzNaRFBOS1FkM2R1ejU3Ti9kZkRsMW0yODNBbVAvZXl4Ty8zTnpWOXI2bDBYbU1zczRQNkgveGNQSDNzS2M5a1U2aUtOQ0lYRGNMaVFLZzBKaFVLTTBoTEd4K0xJNTFhd1pldFc2THFCcWVrWkZFcGxwTElaTEtmU3NGMFhiNzdpalpndkZPSHI3VWIzOXEzUVFnSFdJc0hINzJQa0xQaHBZSm5meTU4Zmc1SEx3MkFrSmNLR1lRUTB3L2pBKzIvNVVPWjdEeDk0QXE4MWNzZWZPSHFuNStyN0xkT0g1ZVFpL3U0ZjdzSFpTYVpYMEkvdGwxMUdMN3RJTGkxamJtNGVBWCtBcWFSamtTblkxQlJCcExHdWRuVlhWKzlYQ0RRclRGMkRvS0x6WVRIWkJnWUdFWW0yNEpNZit6ak1nQjhPMDlCZmNwQWpjdVltWjRGU2lVbXBzUlpkbEd3Ylpic0tyNjRSdnE1MitPb2FZT3ZhM2h0dnZuYi9xemJ1MS92K1pYZHdYZjhCLzdwMThQd212dkNsKy9DelJ3K2hxYVVaOVhWaGhKbFNJMmZQSXA4djhHeGRRYmdzM0dCcWhobkJVSDBZNVhJRnR1MnEyelEwTktyWHVWeU9rU1lxMGpHbVljQ3lmUGpvUi9mZzlwdmVCWStvV1J5ZmdjdHJTcHBMUzVCbmNZeERoM3B0VFFnMFJWR1J0SFhaTGxqdi9Qald0OTk0OVl1bTZJdW01ZkhQZnI3WForb1Arb3FsZ0xHNGhPWEZPWHp4Z1c4UnlnMzByRm1EbnA1dVRJekhrVnhlNGtMWmtKa3lFbzA2R3JXMmV3MzhoUHBpdmxocnpFUUZrM1VxS1ZzdWwxRW9GUGdkQndhUlZscUk0OW9ZR1RrTGZUbUxqY0VtV1B4TU55d2E3cU9qRExnMHlyY3VCdjlBTC95TkpEbVdxZEtXeVlDQS9GTW92dU9XalZkOTV6dUhmNXorYlR2TUZ6T095WDhvWk9rUnd5QVVrMTBrenA1RHNaUWpHdm94bDV6RDVNd0VUQnBWejlkczR1aHFhOFd1YTY3R2hyNWVXUFRvRWdGbUlqR0w4ZGxGekdmU3lCRkliTkl1bjg5QW1BaTZRblIxbUdaU2ozSlUrZG0zZi9ZVFZISUYvTkhRVFh6ZllaOHpFT2lNd3Q4azZTZE9ZSHBLZGtnZjlJaTQyUko3WkJ6bHhXUWs0Tk1QSGRqMytlMjM3dHViZmtualJrNk0zRzJzclBScVpCdkdjb2ExNFNIQVl2ZFl6RVV1TWhCMHNJNlJ1NFNQMXBZVzlLN3RaZTMwbzZXdEdaNWJoWlBOd3Nua2NmWlpBMnVaaWs5UHhIRnNiQUx4K1hrVkRUSElaTlNxVlVsTld3QkNlQW0vYStPQlh4eENxSzRPdDcvdmZRaEY2OW40TFVnaEd2eGNrelNtWFNnVFFlTUpGT2VUOEJGTmRWNnpxdG05cGhrVXByVDM5NmJsNmVPbmV3MmZjVkNqZDgzMmRoak56ZXFpQnIxODdPd0lFdWtVS3BVeWJyN3hiZml6T3orSlN5L2RpSzd1ZG9RYkc0a0U3RTFjcU83UXpheXR1bUNZYWVxRHg2ak1FQ0ZYU2xYa0NSQlNROUwyeFNqcFpZNWlKSVl5MmlJb25ZeVA0NHBkTjZDbG8wM1ZyOG5VMCtTWmFLeE5KMUVkbllXZUxhald6aFBVdWdWRjNhQnZ4OGMvOVpjLy9PcTMvblB1Z2ozNjg0MnI4NXYzbTVMVDlKaG02WEJid3JDM0RxQnQ2RHBjdjJzbkY2RGhMVzk1Q3o3MjU1K0NGd2pEcTYrSEhtRWQxRGRDQ3pmQXMwSjgrS0FGQTJ3VFRRU2VSbFZuclkxTmlQQzFvWnNxQThTZ1NxV2krcG11S0ptbTZGaWh5RlJqVFg3aGkvK3VhSmg4cGt2TlRpL0JmWG9jeHZ3eWZBSkNyR2svMjRhZnRlZldCVkYzMlFZMFhYVUZyS2E2enovZm5vdkduZnZTTjRiY295ZUhBak1McW00TUlUNWFEY2FkaGhEYWV2dWxSK09QLytRTzNvNkd5eG02bjFmdzhTRm82YWpVOGt3aUppTlFvVkhTRm15bWxhQm5rUFVwQ3hMd2tZZ3gwVkFsa3RxOGwwTWo1VkcxeXpXQUdSM0IwVjg5RG8wMTY1NGFoemEzeEQ1SDYrbHdrOWZYV2J0ZW5SL1dobTVFcnRvQ2l3VEFJRHZ5bWNiUWs0K2RIdm9kNHdLR2ZxZkJSdXVPVGtCL2FnUm1namt0L0UvK280SDliQW50N1cwWUhCZ0ExTkpxWHhmajFVRERkTlVZRFowcDdMSTJjK2swWm1abkVBb0lCV05FcEJiNW1YeFBVK2lxcWNsQUdzV0ZhTXF6WWwxTTNZZStmeERHWEpvQXdqVXcvVXcrTkVsRDhsVmpmVGVDVjZ5SEdZdENaNXNTT3NjeUppcHJDTUs1K3dYR2pYLzd3Vjc2ZTdjMFZsTVNvWmlEZm5ZTTFXT25ZTkpyT20rdzhaSk51T09PTzRUK3FFTmd2R1loejJjOWVOVXlQRFpabHhGenlpVVUrWWdRdW50aWF4QmovYmgyUmFXb05INTVDSmFybEJRRCtkcXJzUS8xMnViZko4Yk9Jc2RyaW5QRllpMU1QdHZiQWQvV2ZtaWRUZENZbXFiVXFXUUtqUXBJK2s0bVVIN3kyTkR4ZmZkSExocm4zNzUrdDNIbFZsU2pSRHplUUdZc1diNHZWd0ZPVFFDUG42RVhsM0hiTGJ1aGl1UGlMTUJGVllyUThobG9oYkl5VXBwMmlVMWFYMDNEQ2dsdlYzTURydCsybVdTYTZXU29iNmswMUZiN1l5MWl6LzB0UjVGSU9EVTlpekpUMGV0dmgzYnBXbWhkNUtDbXBzcEQzWjdSOGhPUHpQRUZWSC85RERTeUdoL0x3L1ZYN3JyWUNoeS8rUkdQY0c4Mlh3SWtVM0FtNW9GTURpYnJRUmMyVU1nQlp3cnc2RDJ2bzVFTHFDcjBjbGxUS2RLeFIzLzVCTVlUQzFqTzVyQzB0RVN3ckxLZkJSRGpnRG9ZNjBRSEovSTM5UFlobHkvaHA4TW51SEJYcGJMcmFyVWFsQlN0NVlJeWtFaURDaWxYTXF4aDAyVzlFQUNXTHFEVlRsR3Bpekt6aFVCVElVWm96QktmakVYc3VhYTBEdzg3bFhHSjArTzk1QXZiZERaR1Y3NUZpcU0xMVVOYnpLSThsWUNWeXFtT0lVekRjMHJJeHhlaDVaYTUrRENLUzJsOC85c1A0Tm1wV1N5c0ZKRWd0ZEo0blFCbnRySW50SWxwUWxiZlFhN1pTdHEya3dTNXhNOGZPWDZDOVZmbHVZNnFPMDgxY3hyc1hxaGswaTZhbjZCVVVkVnFPVkpEVkU4Tnc5N3NFcW9zRnpOUFlrQUs1cktWZUpLOWRKSWRzbURFNm9lT0h6OGVNZDNqcDdmNWVqc1prVllpbmFHSXJrdUlkYnBhWU5KUWovRHJUaVRna2VWLzlWOC9oL2owSlBxYkdyRno1dzFZdjJzWE52VDJJazd2WlFuaExxTVo2K2hDWTMxSWtXbFpWVE1iZVgyb2ptMG16S0hWUVQvNzUxTnNGVXZaQ2hGUVYzdzAxa0tpemZQT3p5Mml3S2hMaXhCRGk4V2ltamdrWllXWm1QTUVwU25LR0V4WlMrcDBOZG9TRTQwUmMzdmFPZWkyZ2xlV090NXRHcG1sSWUvcEZPenhCdWlEM2REYVd4VVdTZ280a2lLa1FGb0hvOG1hYTNvbWd2LzU1YTl4K09ScDVPcWJNZkNlMjNINXppR2NKdjhzVkVxNDVZMDNvSC85SUNuYUF2SmNUSGVzQjIyczR3SWptbWRrUzJ6dUFaOUpROEpJNTFZVWQyeUxOS0NudllPQ2tZY3RhN3Z4eTlPanFubXpyMkI2WWhLSjg1T29MMWJoVCtVUktMdXEvNm9SbHVmb0RKZmo0M05YSy94ZEpOU0dWbk1HMncvcmJadkpTRzhWUnE5ekhOR09ud1phU0pQV2RzR05SbmdCbzRhTGNpOSsrZXAzNzhiano0eGdvTFVKMTkxOEkvU3lqVkJYRis3WSswbWtxV0xWKzRMTStTQzZDYzBPdlF0cDFwa01xa1RKK1dYeXpQUXlza1RpSmpLZ0JNSEdsTkdIYUxkU3lHUEw0QVlzTGlaVlA2dGhpb2ZUcDA3Z3Y1Z3BIVllZRzNpZm5wWU90SkFNQ1BzaFF3QjYybURTOFE0ZFZ2RTBCWGJpRjBsQS90K3JUWDNyUjhmTmRIYWJ0R1hYa09aTjNzZkZlVXdWcTY4YkxnZFNWeFU4YTRFb1dKbzVEem9Mb2Y1Qk9Jd1daeDRTYmFZQmExQmpQWkFWSy83bjBmQXlaOENWVkFyVFhQUTRWYkdKeFVVc0VLZ1dDVkR6L0t5N3RaTkJZQ09uSTNyYk94RmthajF3NU9jS0dJUlBEclpIMGNBRzVvaTEvTCtkcWIxcDdRQzJYSHNET3JaZWdrQzBvU1pIVkdYOElicXo1eGxjZzB0T1hKMUl4RTE5eCtaZWR6RUQrK3dFREhyWk5RampBaTRrenU0QzZ5M0tNV1JkTHp5eWM0ZEcxNjBicEZ2TVdxR1hxRnE1Yk54VWdZU1ZDRHVCVURmcDZha1ZGR2o0SklXakJHODJ4UWw5SnJWTTR6S29jQ0U5ck0zTmZRTVlJN0cybVNGeWJudDNqMm9UT28wSjhscCtBa1dSVGxJNkp3Zm1Bcm51WW1jbnp0QjVDeVBqaU14RjBOSFpTdHBXaEVoSnJhSzJUUzhRM1RtNU8xN0V0RFdPTmt3elF3UWZHbFBoR0dIbGlweXIySXVZSXVaaUNpNVIwV21Md0NSTE1WcnJpWncwekJZQUlhdG54THo1SmZZNFNVTzVPcGRYTEZNdktYSEJCV1E1eGlTelltUVNjMVRITXV4N05yL1hWZCtFK2RscEZGZXk2R3FKNHZMQlRSaWRueVY2S3RtVzQxU1FTTXNwZzA1c1d4TkRFNDJ5L0NIa3k0eDhjZ2FwOUFMcXlHZm5PVm81eVhuNDJaYTBqaGpCckU0UmVFMDNJMnBpbEhTVjV1aXRvVUpNSTl5WmVWUUo3enI3a2laTmdDZm9TV29mNlpNd3I2ZGtTYUNlZi9wcEJsQ01yQ0I3Ymh4OTczd3JDWE5ZVGVRQzhWV21iRlVFSGtZcHlmNlhMb3FoZWRaWFRqR0xiSDRGTFlFb1ByejdWc1RJWkE0ZEc4YjNIenVDQzZPS1ArQlRpbldrZzBheGpqWGRValZGdVJjNTFxMmYyWk9NbjBkbWFrcU5QcTNoZWpSUmNRdjVPTndHTEdZRDJaYkZmcUcxdHlqbUlNaGhrOVpvZld0Z3J1bUFQVUZQaXBaUlppUUZtYmh3RVd4K2RmZ24rTjVQSHNIWVFocEJGdk5WNUp1ZitlQjdWYU9WdlFCRDBzalFsZHBzVUJzUkpTUkhZM1hUVUJPSGNOVWxwdWNnVWRManRULzNuUWR4NU5TSTZubmk2WTd1THNUVzlzQWdRSG1HY0ZCSFNYd1NVK0c3dWNRa3hpa2VhZVRDOGhYdVN5Qm5GMUY1NWpqbnpUQzYxcmZCVDFKdDJvOGZTeVBhR1BGZnNwNnAxM1NSU1FzQ2VSdDZpSnp0cU5MQTh0Z01Bc0w2T1J4dXVmVTIvUE1QZmdTdG9ZN2NNWWJyMy9GMlZKaTZKZVorZ0dOTmxTcFhtVGZPTWpXbjV1WndmbktDdE14V2ZjdGpKRXRPRlkxMUFVNEJGVHgyNmpoR1ptWVZoRXYvNmVqb1FIZDNON1BDZ3FVbUNFTzFESVBBc3pReGhoVU92VmJWVmdCWEkrMjE1aTZUK2dLTlBFYTBDM0RHak5hSDA0U2lTdHBMTGtSS2oyZWdzOGRaRy9zQk1oUlhNMVdUZFlOazRSdjZZYkVIMmVlblVDREtQWExrR0JhcEZxL3JJZENRSVR4MDVCRk1UMCtnSWhvbWMvOWQxKzFnMmxpWUpUcE9FU2xsU00wSVdLRkdrbTAxSFhpb28wSW0wNER0S0hLRjFsYjJ6b0YxcTlHbFFZeTB4czh5Uk5wME1nR05KTUJrWkcyanR1ZEFOaTVoUXdOckxiWitBMEtSWnE1Qng1UEhUbURicFp2anBxUGJ3NXJteVNyaExjNFM1UllBTW5sQlNKUERxS09ycThEaFZLMXY2VWY4a1RFY2UrSUpiR1l0dEpGNVBNdEdXK1VDamo1ekZrVkd4S1ZESnFZbThlNGJkbUlzTVk5empFcWU2R1Y3TlpadVNlODBQVFFTaUN4bWgwWVFLbkpjNnVKTXRxNS9yUnF1cGRjWjVLOXBNcCtWcFNUOVgrSHlYTlVYWGEvbUlHbG9qWjN0NkZxM0h1R21Gb1dtcmhxZ0hPU3JCUXlmT1prMnJXdnlFMUlmaXNKb3RXa0FIaEd5ZUliazFhanhUWkVGTkJsTVRUdzcrbk1LckNYME5VY1JhKzNGbXkrL0ZrOE5IOFY4bFNTQXJML0VHNWZvMFNmT25FSXFYeWJOeWxCN0thbTAwNWxxT2owZEpNdUlVQjdVYW5ERndwZDBGTVZzV2trSElsV1VLZGdLcTJkclk4UFdsTXhIY3N1TWdOcFFpUkFuZkhSNHlXWEtaK2JZdUMwMXo0bENaeEZzc292MkNkTU5yUXdMV1pFdjBJM0tJNkpwcUh6bXhUVDJNWVZSR2tWWE5HTEh0UnZ3N0pOVCtNUUg3a0NTUmMzMVlzc2x1NUZndWhiWTk1NmRuTUlvWVQvRHZsV2tidUxqelJ5ZVZCZWttc1dHckdZMjFraTlESjI4cGV6anhUcnIyWWp6aWl3TEtzazVabGhrQmxlR2J6cUUzNU9KbndaYVFyc3NZU1JzMUVYdVQvQ2F0dEkvdWF0azEyVEdNczh4ZFBjd0JTWGZRYjU5ditMZHE0Tm83Y210R1VVYTZua2swdFphUXV4bXRNYjh1UDZHTW1IYWo0WEpMTnlzaTNidXp2UnVHbURhVUpCdGJjUHk0MGR4Zm5aS09TakU1bTR4SVFSQVJJVXVVeWNSeVNGRVdjQlZXa29WUWU0ak9Od2RFcU1GSEdRUzE0d2FCZk1VWUxneUJTbS9lOHdlVzgyQ2FveFZKTnRRYzBSdHdyOWdoRzdwdzJiZjluM3BxZU4vYzlqejdLRWF4NnJwRzBvQVVDTkpETDdnRmtMNmdFckxZTVJGMzRaTG9WT1lhYUZnR28yMUlVeHkzTXpOanp4Qkp0d2c2ZWtqSzBtcERGZXFzZ2lvbHFGYVJGMG9xSXdUY2l4ellaYXBTNGJLOFloYUpDTVNaT3ZRV1I3RkVrVWhJUkpTS1laRXhGUGFqU3pSdXpDc2V1b2pwZWpvZ2czZXFwSFFodSs5OThHNEdsWnQxejdDRDJ2RzBVV2FVcWs0MXZ1dWhFbkRCSkU4anpmMUhGVXpUZTFkMUVVeWFHcHVWY0tNUE02UGpwRktUZUZYVHczak4yZEd1T2lpS3Z3Z0M3MjVQa0NEZkdvL1FSQlFVa2RGeUsxdElWdFUwazZlT1U4SCtOSFdGc1g2L241MGRzWXdPallzVUthY0l0ZlNWemN2bGZOWDV6elZCbVRkd3BhWXZqcjdJb1hrcjErY3hLRUg5cnR1L203ZHM1WGRudFlPZitnNlZuT25HaDFsdE5Db0FzdEFLQmViR0IrRHN6eVBtWmxFYmErYk5UWEZPbnZzK05PWW84UXVld0tDYXVMSElFbDFNL3Roa0FPc3lPd0Mrd0w4WW1RcVZ5Sm8wZStzbGFwd1NEYm9DdG5HU2ltUDFyWWVyQi9jampQbmppbzFRRk5SRWJWTUpvbWFWbm14aHRpT05NTlVuMHRmcEtKMjhLSnhrcHFqeC9ZZXBpdUhvQThnVU1jZytzaTRQV00xajcxVk9hNlcxeTZqY1BEUncyUUpjL1I2U0VIOUNoRnhnWXFYVUNSUmxOVkV6aHRHT042RXlSUDlUTlVMVzh6aStSbWV1MXdvRWNhYnFZeVZGR3NwVXk1WXBoVGYxZDJKQWgzVTB0U0Z2cjV0bUp4NFdzMTdIcU1qaTY4aHI2R0FodVYwTVlxcW5ibjZEL2YvMjBQeDV5SW43enZlUGE0MU1CUnNlQ3RISEthUGQwR01mczZ3QzhmR1N6WWoydFdORTVRQmMra1Y1TWs4bE16bjFWaURwTGEwc3pyeXcxYXEwWUtNY3ZjU0Y1Zm11U3RGUnBicFhjZEIxZUY3d2xRYUd1czVMV2xLMGZaeDBSM1JOdlIyOTNLd0piOXNpT0E4VTdSYXpLcnhTT0JlSkFXWDJXU3NpbFdxRC9KN1ZLd3VibW05WUF0cmJ1ek1JZGNJRDhubWh3Uk10RVZOZnc2QkxoNnI3T0RoQjMrTUh4NzhFWmE1UjFkaTVFSitNYVllSjg2T3FvM0VuczRPdERJeUJzRWtTOTF5bGxIUlNHekQzQThRblVXY0pzK3pDd3RZb1Bidk9WS0xGYnp2dHZmZ3ZiZmRyZ2oyeUpsek9EMHlRbUFwNEJ4VE5KdFBNRE1zeFdLa1pWakNWNlUzNnFxRkhMN3ZTNC9zdXJETUYrd1YzSFhYcDArUXhQMnB0cW9LcTRldTQzY09zWlh2OXc5dXhJNDNiS0ttc1lJUHZmZFduRGw5Qm8waEVsZHVrSWhqUkVUS3NCbFBKNWV4ekFsREpQWUd5dS9pYVVsZFM2US9zbzhsN2lXSWxtbUo0VVRUdi83MFg2Q1JvbEtSMzExTXpDdm50alMzVTVKdlVXbVo0VVF2NlhoQjk1VDFDUHBXTlcvWDBhUHhpenM5TDFoNXJDODJ6UFB1VStmTEovckxiWm03bUJrZjVVWmtJNEhEaDF0dWZqdVNuTmVtVW1RbDVJR3ozS3FhcDFaaWNjR05uQmVsSndsNWxyMDVrZitLN0hsTGpMcWtncExKaWV1WGI5K0dDSjNqY3FKT2tuVG5DeW51N2Ztd2FjTjZYUEdHYTZpZDdzR09LOS9FWmkvWHFOUUFTcVJBRi9kOCtjdUg0ODlmM2UrRXBXeTcrM2l6dVBxZGlQYlN4b2tnZStUSVk3anB0ZytvVGYxbVJ1WHR1NjdGSlpzM3NBK0dGRVRMenFuc3BNcW1vN2NLNlhteUVua3RVWlAwa2tlUUJGMTY2enR2ZkljcUJRR3BQTThSVVVrNHBUaTdnMXd5eGozMGQrLytNTFp1dVY3QWd6WG95czVSL0QrK2NuamZiNi92ZDR6cjYrdExleFZuRjlNcS9WS0dTYzljbkI1bHNkZkR4NG5ZRjZoRExwTlNFbDJRa0IrbEpCRG1ndlZWYm5waEdoRERaSWhWKzMyTW9qaXdnVFVvQnF6aHVQT0d5eTlIaGVtNE5EOUh3WWdETXlOcXNqLzZ1WmtTSUIrMUFxYmFMOXl3Y1l1cWZlN3Nwc3NyenE0WFhlT0x2ZG5aMXhjbmt1L0JTMFVOVlp4OTVoUjJYSFd0Mmo4SWN3TmVoQnhaZUZSQVJOZVZuR0F6YXJKSElNWUk2TWdoRVZOOFk3V2VCUUVEWkMxYnQyMVRyMlcvTzV0ZHVhaGJOdEpoZmlFTHhuTVUwZThMWS9UTUlpemIyUFBBd1NmaXI5ZzRPZHJiMXh6VWJXZnZpeHNHR25ZU0R6MzZHQWEyWDZWKzVST2s5MjNXV1h4bUdpV2J5RW52U20rUTM1T0ljUkkxZVRpcisyN3l2bW41bEJNYXFXTkdDU0EzM1hTamFnMGxScTdFWWJkSURTVVFFTGxRWDFWZU5kVjd4VkdOamMxWVRwWDNmdlBnNDcvMzl5Z21YdUpvNllydFg1eWJGV0I1d2FhZW9KTnNJYi83MXR0SnZZSXFZc0dtS0RvNWxSOC9keGFKcFJSU21aTGlobEx3RjNaeUxteDBpTEYxZElhazc3b1k5OWlhNjNIYmU5K1BGcXJSbWVVMFVtUTV5NmtsaFlqaVNyOWZkQkcvMGpPRlZNdDEycUt0ZStPSnhQNlhXdjlMR2lkSGEwZlgvdVQ4VEp4Ni92Mjh1dG9hRXZheDVZcHI2T1V5YWovRW9MV01RaHNYR3V1S0ljVWRuM0l5aDVWOHJpWStrUjZKUUd1dTdvcktGQ0EvYnR2WVA4QXQ2QnZSdjNHd05zWlFOWlBGcDBpNlpTOGh5S2paM0pDTWNsL1FNR3UvQVNQWXBFazQ5Z3h1M2Z5eXZ5RFM4UXFPS0ZQVXRyM3RkRnk4OWs2TlJCazA2TUlyZ1RNL2dhV1JTbGFCdENwTGNWYU1FaVA4Yk5TQ2huNzJNWm0vUkkzdWFJM2lzdlVENUpBdHlMRmxsQ2duVm9tTVJVcnZZVkk2UDBGRVdzMDY2cVMrb0Y4aEtCTWc3dXJ1OWpVOWZTOXJtQnd2RzdrTFIyZG5aNXhQZll2emlYMmNydTRXejRxQUk3S0NMcjhwa2ZHZnZvcTJ0TlZtTVBFY0dZWXdmMkVoa2xxVmNrVU5sVzNjMm1ybFJISG95S1A0cC92MlkvdVZPM0ROam1zdzJOOUhZYWttSW9seDlRMUJOdTZvb25WTXlmdnlSV2Vmb1BrclhmTnIrcjFsSXBIby9jZlBmUHIrTjExMzlkQXlOeWR1WnUwSitqbVU5YzZmT29rRFAvNFJ4aVpua001a0ZZZ0lUUkpna0JqSDJLdWFHNXZJL2wwY09QQUR4VXpLZG0xL29DZldnWGUrODIxWXU2YUxqS1FGRzladlFuMVQ1TEJ1V0h0amZYM0RlSlhISzQ3Yzg0L1ZLTzVxajlRUFpYWC9uVGZCMnkzdkc2eWJydTRZaHE1bWU3Qi9nWE95VDI2R1ZhK1RXVTZvVllqYlYrc3BvMy9qdS84TjJWb1E3Y05UdjBSeE1FMlY2MnZmK0NhdXV2Skt2R1huRFljNzI3cnV1ZlRLcXc3ak5SNnZ5MitjSlpLbVJnTTFmSVFnc3kyZlNXUHFmQnhQblJ4V01rS2VsRXhORGRJZGFmQ0dnY3Z3dDUvOWUvVURBR0h6Tm8xZkU2bWpDbFk5bkM5VmorUktwZjNwZFBvVnB4LytQNDE3L3BGSWpQZFMxOWxXclRoRGhWUjJxMmZia2NUOFF1LzA5R1JrY1hHTytuNFFvNVB6Nlc5Kzl6dHBHamJNdEp5Z3RqOGNLSlVPeGw4SGc1NS8vQitNbUhZZGVuZnk1UUFBQUFCSlJVNUVya0pnZ2c9PVwiIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQmFzZUFjY29yZGlvbiB9IGZyb20gJy4vYmFzZS1hY2NvcmRpb24nO1xyXG5pbXBvcnQge1xyXG4gIEFjY29yZGlvbkJ1dHRvbixcclxuICBBY2NvcmRpb25JdGVtLFxyXG4gIEFjY29yZGlvbkNvbnRlbnRzLFxyXG4gIHNpbmdsZSxcclxuICBwcmV2ZW50Q2xvc2UsXHJcbiAgY29tYmluZVJlZHVjZXJzLFxyXG59IGZyb20gJy4vc2hhcmVkJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFjY29yZGlvbih7IGl0ZW1zLCAuLi5wcm9wcyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCYXNlQWNjb3JkaW9uXHJcbiAgICAgIHN0YXRlUmVkdWNlcj17Y29tYmluZVJlZHVjZXJzKHNpbmdsZSwgcHJldmVudENsb3NlKX1cclxuICAgICAgey4uLnByb3BzfVxyXG4gICAgPlxyXG4gICAgICB7KHsgb3BlbkluZGV4ZXMsIGhhbmRsZUl0ZW1DbGljayB9KSA9PiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIHtpdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxBY2NvcmRpb25JdGVtXHJcbiAgICAgICAgICAgICAga2V5PXtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgIGlzT3Blbj17b3BlbkluZGV4ZXMuaW5jbHVkZXMoaW5kZXgpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPEFjY29yZGlvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVJdGVtQ2xpY2soaW5kZXgpfT5cclxuICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17b3BlbkluZGV4ZXMuaW5jbHVkZXMoaW5kZXgpID8gJ29wZW4nIDogJ2Nsb3NlZCd9XHJcbiAgICAgICAgICAgICAgICA+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAge2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgPC9BY2NvcmRpb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgPEFjY29yZGlvbkNvbnRlbnRzIGlzT3Blbj17b3BlbkluZGV4ZXMuaW5jbHVkZXMoaW5kZXgpfT5cclxuICAgICAgICAgICAgICAgIHtpdGVtLmNvbnRlbnRzfVxyXG4gICAgICAgICAgICAgIDwvQWNjb3JkaW9uQ29udGVudHM+XHJcbiAgICAgICAgICAgIDwvQWNjb3JkaW9uSXRlbT5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG4gICAgPC9CYXNlQWNjb3JkaW9uPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIEJhc2VBY2NvcmRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBzdGF0ZVJlZHVjZXI6IChzdGF0ZSwgY2hhbmdlcykgPT4gY2hhbmdlcyxcclxuICAgIG9uU3RhdGVDaGFuZ2U6ICgpID0+IHt9LFxyXG4gIH07XHJcbiAgc3RhdGUgPSB7IG9wZW5JbmRleGVzOiBbMF0gfTtcclxuICBnZXRTdGF0ZShzdGF0ZSA9IHRoaXMuc3RhdGUpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG9wZW5JbmRleGVzOlxyXG4gICAgICAgIHRoaXMucHJvcHMub3BlbkluZGV4ZXMgPT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgPyBzdGF0ZS5vcGVuSW5kZXhlc1xyXG4gICAgICAgICAgOiB0aGlzLnByb3BzLm9wZW5JbmRleGVzLFxyXG4gICAgfTtcclxuICB9XHJcbiAgaW50ZXJuYWxTZXRTdGF0ZShjaGFuZ2VzLCBjYWxsYmFjayA9ICgpID0+IHt9KSB7XHJcbiAgICBsZXQgYWxsQ2hhbmdlcztcclxuICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgIChzdGF0ZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGFjdHVhbFN0YXRlID0gdGhpcy5nZXRTdGF0ZShzdGF0ZSk7XHJcbiAgICAgICAgY29uc3QgY2hhbmdlc09iamVjdCA9XHJcbiAgICAgICAgICB0eXBlb2YgY2hhbmdlcyA9PT0gJ2Z1bmN0aW9uJyA/IGNoYW5nZXMoYWN0dWFsU3RhdGUpIDogY2hhbmdlcztcclxuICAgICAgICBhbGxDaGFuZ2VzID0gdGhpcy5wcm9wcy5zdGF0ZVJlZHVjZXIoYWN0dWFsU3RhdGUsIGNoYW5nZXNPYmplY3QpO1xyXG4gICAgICAgIHJldHVybiBhbGxDaGFuZ2VzO1xyXG4gICAgICB9LFxyXG4gICAgICAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vblN0YXRlQ2hhbmdlKGFsbENoYW5nZXMpO1xyXG4gICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG4gIGhhbmRsZUl0ZW1DbGljayA9IChpbmRleCkgPT4ge1xyXG4gICAgdGhpcy5pbnRlcm5hbFNldFN0YXRlKChzdGF0ZSkgPT4ge1xyXG4gICAgICBjb25zdCBjbG9zaW5nID0gc3RhdGUub3BlbkluZGV4ZXMuaW5jbHVkZXMoaW5kZXgpO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IGNsb3NpbmcgPyAnY2xvc2luZycgOiAnb3BlbmluZycsXHJcbiAgICAgICAgb3BlbkluZGV4ZXM6IGNsb3NpbmdcclxuICAgICAgICAgID8gc3RhdGUub3BlbkluZGV4ZXMuZmlsdGVyKChpKSA9PiBpICE9PSBpbmRleClcclxuICAgICAgICAgIDogWy4uLnN0YXRlLm9wZW5JbmRleGVzLCBpbmRleF0sXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICAgIGNvbnNvbGUubG9nKCdjbGlja2VkJyk7XHJcbiAgfTtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbih7XHJcbiAgICAgIG9wZW5JbmRleGVzOiB0aGlzLmdldFN0YXRlKCkub3BlbkluZGV4ZXMsXHJcbiAgICAgIGhhbmRsZUl0ZW1DbGljazogdGhpcy5oYW5kbGVJdGVtQ2xpY2ssXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IEJhc2VBY2NvcmRpb24gfTtcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XHJcblxyXG5leHBvcnQgY29uc3QgQWNjb3JkaW9uQnV0dG9uID0gKHsgY2hpbGRyZW4sIC4uLnJlc3QgfSkgPT4gKFxyXG4gIDxkaXYgc3g9e3N0eWxlcy5idXR0b25Ub2dnbGV9IHsuLi5yZXN0fT5cclxuICAgIHtjaGlsZHJlbn1cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBidXR0b25Ub2dnbGU6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGNvbG9yOiAnaGVhZGluZ19zZWNvbmRhcnknLFxyXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICBib3JkZXI6ICdub25lJyxcclxuICAgIGZvbnRTaXplOiBbMiwgbnVsbCwgM10sXHJcbiAgICBmb250V2VpZ2h0OiA1MDAsXHJcbiAgICBsZXR0ZXJTcGFjaW5nOiAtMC41LFxyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICBwYWRkaW5nTGVmdDogWyczM3B4JywgbnVsbCwgJzQ1cHgnXSxcclxuICAgIGxpbmVIZWlnaHQ6IFsxLjUsIG51bGwsIDEuOF0sXHJcbiAgICAnJiA+IHNwYW4nOiB7XHJcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICB3aWR0aDogMjAsXHJcbiAgICAgIGhlaWdodDogMjAsXHJcbiAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyMyNUNCOUUnLFxyXG4gICAgICB0b3A6IFsnMnB4JywgbnVsbCwgJzZweCddLFxyXG4gICAgICBsZWZ0OiBbMCwgbnVsbCwgJzEzcHgnXSxcclxuICAgICAgJyYub3BlbjphZnRlcic6IHtcclxuICAgICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICB9LFxyXG4gICAgICAnJjo6YmVmb3JlJzoge1xyXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcclxuICAgICAgICBoZWlnaHQ6ICcycHgnLFxyXG4gICAgICAgIHdpZHRoOiAxMCxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgdG9wOiAnNTAlJyxcclxuICAgICAgICBsZWZ0OiAnNTAlJyxcclxuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSAsIC01MCUpJyxcclxuICAgICAgfSxcclxuICAgICAgJyY6OmFmdGVyJzoge1xyXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcclxuICAgICAgICBoZWlnaHQ6IDEwLFxyXG4gICAgICAgIHdpZHRoOiAnMnB4JyxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgdG9wOiAnNTAlJyxcclxuICAgICAgICBsZWZ0OiAnNTAlJyxcclxuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSAsIC01MCUpJyxcclxuICAgICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuMjVzJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuXHJcbmNvbnN0IHZhcmlhbnRzID0ge1xyXG4gIG9wZW46IHtcclxuICAgIGhlaWdodDogJ2F1dG8nLFxyXG4gICAgbWFyZ2luVG9wOiAxMixcclxuICB9LFxyXG4gIGNsb3NlZDogeyBoZWlnaHQ6IDAsIG1hcmdpblRvcDogMCB9LFxyXG59O1xyXG5leHBvcnQgZnVuY3Rpb24gQWNjb3JkaW9uQ29udGVudHMoeyBpc09wZW4sIC4uLnByb3BzIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPG1vdGlvbi5kaXZcclxuICAgICAgaW5pdGlhbD1cImNsb3NlZFwiXHJcbiAgICAgIGFuaW1hdGU9e2lzT3BlbiA/ICdvcGVuJyA6ICdjbG9zZWQnfVxyXG4gICAgICB2YXJpYW50cz17dmFyaWFudHN9XHJcbiAgICAgIHN4PXt7XHJcbiAgICAgICAgb3ZlcmZsb3dZOiAnaGlkZGVuJyxcclxuICAgICAgICBmb250U2l6ZTogWzEsIG51bGwsIDJdLFxyXG4gICAgICAgIGxpbmVIZWlnaHQ6IFsxLjg1LCBudWxsLCBudWxsLCAxLjksIDJdLFxyXG4gICAgICAgIGNvbG9yOiAnIzM0M0Q0OCcsXHJcbiAgICAgICAgcGFkZGluZ0xlZnQ6IFsnMzNweCcsIG51bGwsICc0NXB4J10sXHJcbiAgICAgICAgJyA+IGRpdiAnOiB7XHJcbiAgICAgICAgICBwYWRkaW5nQm90dG9tOiBbMSwgMl0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfX1cclxuICAgICAgey4uLnByb3BzfVxyXG4gICAgLz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQWNjb3JkaW9uSXRlbSA9ICh7IGlzT3BlbiwgY2hpbGRyZW4sIC4uLnJlc3QgfSkgPT4gKFxyXG4gIDxkaXZcclxuICAgIGNzcz17e1xyXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICAgIHBhZGRpbmc6ICcxN3B4IDAnLFxyXG4gICAgICBib3JkZXJCb3R0b206ICcxcHggc29saWQgI0U1RUNGNCcsXHJcbiAgICAgICcmOmxhc3QtY2hpbGQnOiB7XHJcbiAgICAgICAgYm9yZGVyQm90dG9tOiAnMHB4IHNvbGlkJyxcclxuICAgICAgfSxcclxuICAgIH19XHJcbiAgICB7Li4ucmVzdH1cclxuICA+XHJcbiAgICB7Y2hpbGRyZW59XHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgcHJldmVudENsb3NlID0gKHN0YXRlLCBjaGFuZ2VzKSA9PlxyXG4gIGNoYW5nZXMudHlwZSA9PT0gJ2Nsb3NpbmcnICYmIHN0YXRlLm9wZW5JbmRleGVzLmxlbmd0aCA8IDJcclxuICAgID8geyAuLi5jaGFuZ2VzLCBvcGVuSW5kZXhlczogc3RhdGUub3BlbkluZGV4ZXMgfVxyXG4gICAgOiBjaGFuZ2VzO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNpbmdsZSA9IChzdGF0ZSwgY2hhbmdlcykgPT5cclxuICBjaGFuZ2VzLnR5cGUgPT09ICdvcGVuaW5nJ1xyXG4gICAgPyB7IC4uLmNoYW5nZXMsIG9wZW5JbmRleGVzOiBjaGFuZ2VzLm9wZW5JbmRleGVzLnNsaWNlKC0xKSB9XHJcbiAgICA6IGNoYW5nZXM7XHJcblxyXG5leHBvcnQgY29uc3QgY29tYmluZVJlZHVjZXJzID0gKC4uLnJlZHVjZXJzKSA9PiAoc3RhdGUsIGNoYW5nZXMpID0+XHJcbiAgcmVkdWNlcnMucmVkdWNlKChhY2MsIHJlZHVjZXIpID0+IHJlZHVjZXIoc3RhdGUsIGFjYyksIGNoYW5nZXMpO1xyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4LCBCb3gsIENvbnRhaW5lciwgRmxleCB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IHsgSW9Jb3NBcnJvd1JvdW5kQmFjaywgSW9Jb3NBcnJvd1JvdW5kRm9yd2FyZCB9IGZyb20gJ3JlYWN0LWljb25zL2lvJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJ1dHRvbkdyb3VwKHsgbmV4dCwgcHJldmlvdXMgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8RmxleCBzeD17eyB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxCb3ggc3g9e3N0eWxlcy5idXR0b25Hcm91cH0+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3ByZXZpb3VzfSBhcmlhLWxhYmVsPVwiUHJldmlvdXNcIj5cclxuICAgICAgICAgICAgPElvSW9zQXJyb3dSb3VuZEJhY2sgLz5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtuZXh0fSBhcmlhLWxhYmVsPVwiTmV4dFwiPlxyXG4gICAgICAgICAgICA8SW9Jb3NBcnJvd1JvdW5kRm9yd2FyZCAvPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9GbGV4PlxyXG4gICk7XHJcbn1cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGJ1dHRvbkdyb3VwOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICBtYjogLTQsXHJcbiAgICBidXR0b246IHtcclxuICAgICAgYmc6ICd0cmFuc3BhcmVudCcsXHJcbiAgICAgIGJvcmRlcjogJzBweCBzb2xpZCcsXHJcbiAgICAgIGZvbnRTaXplOiA0MCxcclxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgIHB4OiAnMnB4JyxcclxuICAgICAgY29sb3I6ICcjQkJDN0Q3JyxcclxuICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjI1cycsXHJcbiAgICAgICcmOmZvY3VzJzoge1xyXG4gICAgICAgIG91dGxpbmU6IDAsXHJcbiAgICAgIH0sXHJcbiAgICAgICcmOmhvdmVyJzoge1xyXG4gICAgICAgIGNvbG9yOiAndGV4dCcsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQm94IH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgUmNEcmF3ZXIgZnJvbSAncmMtZHJhd2VyJztcclxuXHJcbmNvbnN0IERyYXdlciA9ICh7XHJcbiAgY2xhc3NOYW1lLFxyXG4gIGNoaWxkcmVuLFxyXG4gIGNsb3NlQnV0dG9uLFxyXG4gIGNsb3NlQnV0dG9uU3R5bGUsXHJcbiAgZHJhd2VySGFuZGxlcixcclxuICB0b2dnbGVIYW5kbGVyLFxyXG4gIG9wZW4sXHJcbiAgd2lkdGgsXHJcbiAgcGxhY2VtZW50LFxyXG4gIGRyYXdlclN0eWxlLFxyXG4gIGNsb3NlQnRuU3R5bGUsXHJcbiAgLi4ucHJvcHNcclxufSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIDxSY0RyYXdlclxyXG4gICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgb25DbG9zZT17dG9nZ2xlSGFuZGxlcn1cclxuICAgICAgICBjbGFzc05hbWU9e2BkcmF3ZXIgJHtjbGFzc05hbWUgPyBjbGFzc05hbWUgOiAnJ31gLnRyaW0oKX1cclxuICAgICAgICB3aWR0aD17d2lkdGh9XHJcbiAgICAgICAgcGxhY2VtZW50PXtwbGFjZW1lbnR9XHJcbiAgICAgICAgaGFuZGxlcj17ZmFsc2V9XHJcbiAgICAgICAgbGV2ZWw9e251bGx9XHJcbiAgICAgICAgZHVyYXRpb249XCIwLjRzXCJcclxuICAgICAgICB7Li4ucHJvcHN9XHJcbiAgICAgID5cclxuICAgICAgICB7Y2xvc2VCdXR0b24gJiYgKFxyXG4gICAgICAgICAgPEJveCBhcz1cImRpdlwiIG9uQ2xpY2s9e3RvZ2dsZUhhbmRsZXJ9IHN4PXtjbG9zZUJ0blN0eWxlfT5cclxuICAgICAgICAgICAge2Nsb3NlQnV0dG9ufVxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8Qm94IHN4PXtkcmF3ZXJTdHlsZX0+e2NoaWxkcmVufTwvQm94PlxyXG4gICAgICA8L1JjRHJhd2VyPlxyXG4gICAgICA8Qm94XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiZHJhd2VyX19oYW5kbGVyXCJcclxuICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyB9fVxyXG4gICAgICAgIG9uQ2xpY2s9e3RvZ2dsZUhhbmRsZXJ9XHJcbiAgICAgID5cclxuICAgICAgICB7ZHJhd2VySGFuZGxlcn1cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gICk7XHJcbn07XHJcblxyXG5EcmF3ZXIuZGVmYXVsdFByb3BzID0ge1xyXG4gIHdpZHRoOiAnMzIwcHgnLFxyXG4gIHBsYWNlbWVudDogJ2xlZnQnLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRHJhd2VyO1xyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4LCBJbWFnZSwgQm94LCBIZWFkaW5nLCBUZXh0IH0gZnJvbSAndGhlbWUtdWknO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmVhdHVyZUNhcmRDb2x1bW4oe1xyXG4gIHNyYyxcclxuICBhbHRUZXh0ID0gJ2RlZmF1bHQgYWx0IHRleHQnLFxyXG4gIHRpdGxlLFxyXG4gIHRleHQsXHJcbn0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBzeD17c3R5bGVzLmNhcmR9PlxyXG4gICAgICA8SW1hZ2Ugc3JjPXtzcmN9IGFsdD17YWx0VGV4dH0gc3g9e3N0eWxlcy5pbWd9IC8+XHJcblxyXG4gICAgICA8Qm94IHN4PXtzdHlsZXMud3JhcHBlcn0+XHJcbiAgICAgICAgPEhlYWRpbmcgc3g9e3N0eWxlcy53cmFwcGVyLnRpdGxlfT57dGl0bGV9PC9IZWFkaW5nPlxyXG4gICAgICAgIDxUZXh0IHN4PXtzdHlsZXMud3JhcHBlci5zdWJUaXRsZX0+e3RleHR9PC9UZXh0PlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBjYXJkOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCcsXHJcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgfSxcclxuICBpbWc6IHtcclxuICAgIG14OiAnYXV0bycsXHJcbiAgICBtYjogWzMsIG51bGwsIDQsIG51bGwsIG51bGwsIDVdLFxyXG4gICAgd2lkdGg6IFsnODBweCcsICc5MHB4JywgbnVsbCwgbnVsbCwgbnVsbCwgJzEwMHB4JywgJ2F1dG8nXSxcclxuICB9LFxyXG4gIHdyYXBwZXI6IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgIGZvbnRTaXplOiBbMywgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgNF0sXHJcbiAgICAgIGNvbG9yOiAnaGVhZGluZ19zZWNvbmRhcnknLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAxLjQsXHJcbiAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICAgICAgbWI6IFsyLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAzXSxcclxuICAgIH0sXHJcblxyXG4gICAgc3ViVGl0bGU6IHtcclxuICAgICAgZm9udFNpemU6IDEsXHJcbiAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcclxuICAgICAgbGluZUhlaWdodDogWzEuODUsIG51bGwsIG51bGwsIDEuOSwgMl0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3gsIEltYWdlLCBCb3gsIEhlYWRpbmcsIFRleHQgfSBmcm9tICd0aGVtZS11aSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGZWF0dXJlQ2FyZCh7XHJcbiAgc3JjLFxyXG4gIGFsdFRleHQgPSAnZGVmYXVsdCBhbHQgdGV4dCcsXHJcbiAgdGl0bGUsXHJcbiAgdGV4dCxcclxufSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IHN4PXtzdHlsZXMuY2FyZH0+XHJcbiAgICAgIDxJbWFnZSBzcmM9e3NyY30gYWx0PXthbHRUZXh0fSBzeD17c3R5bGVzLmltZ30gLz5cclxuXHJcbiAgICAgIDxCb3ggc3g9e3N0eWxlcy53cmFwcGVyfT5cclxuICAgICAgICA8SGVhZGluZyBzeD17c3R5bGVzLndyYXBwZXIudGl0bGV9Pnt0aXRsZX08L0hlYWRpbmc+XHJcbiAgICAgICAgPFRleHQgc3g9e3N0eWxlcy53cmFwcGVyLnN1YlRpdGxlfT57dGV4dH08L1RleHQ+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGNhcmQ6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdmbGV4LXN0YXJ0JyxcclxuICB9LFxyXG5cclxuICBpbWc6IHtcclxuICAgIHdpZHRoOiBbJzYwcHgnLCBudWxsLCBudWxsLCBudWxsLCAnNTVweCcsICc3MHB4JywgbnVsbCwgJzgwcHgnXSxcclxuICAgIGhlaWdodDogJ2F1dG8nLFxyXG4gICAgZmxleFNocmluazogMCxcclxuICAgIG1yOiBbMywgNCwgbnVsbCwgbnVsbCwgMywgNCwgbnVsbCwgNV0sXHJcbiAgfSxcclxuICB3cmFwcGVyOiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICBtdDogJy01cHgnLFxyXG4gICAgdGl0bGU6IHtcclxuICAgICAgZm9udFNpemU6IFszLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCA0XSxcclxuICAgICAgY29sb3I6ICdoZWFkaW5nX3NlY29uZGFyeScsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IDEuNCxcclxuICAgICAgZm9udFdlaWdodDogNzAwLFxyXG4gICAgICBtYjogWzIsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDNdLFxyXG4gICAgICBtdDogJzJweCcsXHJcbiAgICB9LFxyXG4gICAgc3ViVGl0bGU6IHtcclxuICAgICAgZm9udFNpemU6IDEsXHJcbiAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcclxuICAgICAgbGluZUhlaWdodDogWzEuODUsIG51bGwsIDJdLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCBbXHJcbiAge1xyXG4gICAgaGVhZGVyOiAnQWJvdXQgVXMnLFxyXG4gICAgaXRlbXM6IFtcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICcvJyxcclxuICAgICAgICBsYWJlbDogJ1N1cHBvcnQgQ2VudGVyJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICcvJyxcclxuICAgICAgICBsYWJlbDogJ0N1c3RvbWVyIFN1cHBvcnQnLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJy8nLFxyXG4gICAgICAgIGxhYmVsOiAnQWJvdXQgVXMnLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJy8nLFxyXG4gICAgICAgIGxhYmVsOiAnQ29weXJpZ2h0JyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICcvJyxcclxuICAgICAgICBsYWJlbDogJ1BvcHVsYXIgQ2FtcGFpZ24nLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIGhlYWRlcjogJ091ciBJbmZvcm1hdGlvbicsXHJcbiAgICBpdGVtczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJy8nLFxyXG4gICAgICAgIGxhYmVsOiAnUmV0dXJuIFBvbGljeSAnLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJy8nLFxyXG4gICAgICAgIGxhYmVsOiAnUHJpdmFjeSBQb2xpY3knLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJy8nLFxyXG4gICAgICAgIGxhYmVsOiAnVGVybXMgJiBDb25kaXRpb25zJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICcvJyxcclxuICAgICAgICBsYWJlbDogJ1NpdGUgTWFwJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICcvJyxcclxuICAgICAgICBsYWJlbDogJ1N0b3JlIEhvdXJzJyxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBoZWFkZXI6ICdNeSBBY2NvdW50JyxcclxuICAgIGl0ZW1zOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnLycsXHJcbiAgICAgICAgbGFiZWw6ICdQcmVzcyBpbnF1aXJpZXMnLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJy8nLFxyXG4gICAgICAgIGxhYmVsOiAnU29jaWFsIG1lZGlhICcsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnLycsXHJcbiAgICAgICAgbGFiZWw6ICdkaXJlY3RvcmllcycsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnLycsXHJcbiAgICAgICAgbGFiZWw6ICdJbWFnZXMgJiBCLXJvbGwnLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJy8nLFxyXG4gICAgICAgIGxhYmVsOiAnUGVybWlzc2lvbnMnLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIGhlYWRlcjogJ1BvbGljeScsXHJcbiAgICBpdGVtczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJy8nLFxyXG4gICAgICAgIGxhYmVsOiAnQXBwbGljYXRpb24gc2VjdXJpdHknLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJy8nLFxyXG4gICAgICAgIGxhYmVsOiAnU29mdHdhcmUgcHJpbmNpcGxlcycsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnLycsXHJcbiAgICAgICAgbGFiZWw6ICdVbndhbnRlZCBzb2Z0d2FyZSBwb2xpY3knLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJy8nLFxyXG4gICAgICAgIGxhYmVsOiAnUmVzcG9uc2libGUgc3VwcGx5IGNoYWluJyxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuXTtcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCwgSGVhZGluZywgQm94LCBDb250YWluZXIsIFRleHQgfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdjb21wb25lbnRzL2xpbmsnO1xyXG5pbXBvcnQgbWVudUl0ZW1zIGZyb20gJy4vZm9vdGVyLmRhdGEnO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb290ZXIoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxmb290ZXIgc3g9e3N0eWxlcy5mb290ZXJ9PlxyXG4gICAgICA8Q29udGFpbmVyIHN4PXtzdHlsZXMuZm9vdGVyLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgPEJveCBzeD17c3R5bGVzLmZvb3Rlci5mb290ZXJUb3BBcmVhfT5cclxuICAgICAgICAgIHttZW51SXRlbXMubWFwKCh7IGhlYWRlciwgaXRlbXMgfSwgaSkgPT4gKFxyXG4gICAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMuZm9vdGVyLm1lbnVzfSBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgIDxIZWFkaW5nIHN4PXtzdHlsZXMuZm9vdGVyLmhlYWRpbmd9PntoZWFkZXJ9PC9IZWFkaW5nPlxyXG4gICAgICAgICAgICAgIDxuYXY+XHJcbiAgICAgICAgICAgICAgICB7aXRlbXMubWFwKCh7IHBhdGgsIGxhYmVsIH0sIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICBwYXRoPXtwYXRofVxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17bGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgc3g9e3N0eWxlcy5mb290ZXIubGlua31cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPFRleHQgc3g9e3N0eWxlcy5mb290ZXIuY29weXJpZ2h0fT5cclxuICAgICAgICBBbGwgcmlnaHQgcmVzZXJ2ZWQgLSBEZXNpZ24gJiBEZXZlbG9wZWQgYnlcclxuICAgICAgICA8TGluayBwYXRoPVwiaHR0cHM6Ly9yZWRxLmlvL1wiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgUmVkUSwgSW5jXHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L1RleHQ+XHJcbiAgICA8L2Zvb3Rlcj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgZm9vdGVyOiB7XHJcbiAgICBjb250YWluZXI6IHtcclxuICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgYWxpZ25JdGVtczogJ3N0cmV0Y2gnLFxyXG4gICAgfSxcclxuICAgIGZvb3RlclRvcEFyZWE6IHtcclxuICAgICAgYm9yZGVyVG9wOiAnMXB4IHNvbGlkJyxcclxuICAgICAgYm9yZGVyVG9wQ29sb3I6ICdib3JkZXJfY29sb3InLFxyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGZsZXhXcmFwOiAnd3JhcCcsXHJcbiAgICAgIHB0OiBbNywgbnVsbCwgOF0sXHJcbiAgICAgIHBiOiBbJzEwcHgnLCBudWxsLCBudWxsLCAnMjBweCddLFxyXG4gICAgICBweDogWzAsIG51bGwsIG51bGwsIG51bGwsIDRdLFxyXG4gICAgfSxcclxuICAgIG1lbnVzOiB7XHJcbiAgICAgIHdpZHRoOiBbJzUwJScsIG51bGwsIG51bGwsICcyNSUnXSxcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAgbWI6IFsnNDBweCcsIG51bGwsIG51bGwsICc2MHB4J10sXHJcbiAgICB9LFxyXG5cclxuICAgIGhlYWRpbmc6IHtcclxuICAgICAgZm9udFNpemU6IFszLCBudWxsLCBudWxsLCA0XSxcclxuICAgICAgY29sb3I6ICd0ZXh0X3NlY29uZGFyeScsXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICc1MDAnLFxyXG4gICAgICBtYjogWzMsIDQsIDUsIG51bGwsIDZdLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAnMS4zNScsXHJcbiAgICB9LFxyXG5cclxuICAgIGxpbms6IHtcclxuICAgICAgZm9udFNpemU6IFsnMTRweCcsIG51bGwsIDFdLFxyXG4gICAgICBjb2xvcjogJ3RleHQnLFxyXG4gICAgICBmb250V2VpZ2h0OiAnYm9keScsXHJcbiAgICAgIG1iOiAyLFxyXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjM1cycsXHJcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IFsxLjUsIG51bGwsIG51bGwsIDEuNiwgMS44XSxcclxuICAgICAgJzpob3Zlcic6IHtcclxuICAgICAgICBjb2xvcjogJ3ByaW1hcnknLFxyXG4gICAgICB9LFxyXG4gICAgICAnOmxhc3QtY2hpbGQnOiB7XHJcbiAgICAgICAgbWI6ICcwcHgnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIGNvcHlyaWdodDoge1xyXG4gICAgICBmb250U2l6ZTogWycxNHB4JywgbnVsbCwgMV0sXHJcbiAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgIHA6IFsnMjBweCAyMHB4J10sXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNGQ0ZERkUnLFxyXG4gICAgICBjb2xvcjogJ3RleHQnLFxyXG4gICAgICBhOiB7XHJcbiAgICAgICAgdGV4dERlY29yYXRpb246ICdub25lJyxcclxuICAgICAgICBjb2xvcjogJ2luaGVyaXQnLFxyXG4gICAgICAgIHBsOiAxLFxyXG4gICAgICAgIHRyYW5zaXRpb246ICdhbGwgMC4yNXMnLFxyXG4gICAgICAgICcmOmhvdmVyJzoge1xyXG4gICAgICAgICAgY29sb3I6ICdwcmltYXJ5JyxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCBbXHJcbiAge1xyXG4gICAgcGF0aDogJ2hvbWUnLFxyXG4gICAgbGFiZWw6ICdIb21lJyxcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICdmZWF0dXJlJyxcclxuICAgIGxhYmVsOiAnRmVhdHVyZXMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJ3Rlc3RpbW9uaWFsJyxcclxuICAgIGxhYmVsOiAnVGVzdGltb25pYWwnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJ3ByaWNpbmcnLFxyXG4gICAgbGFiZWw6ICdQcmljaW5nJyxcclxuICB9LFxyXG5dO1xyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4LCBDb250YWluZXIsIEZsZXgsIEJ1dHRvbiB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IHsga2V5ZnJhbWVzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1zY3JvbGwnO1xyXG5pbXBvcnQgTG9nbyBmcm9tICdjb21wb25lbnRzL2xvZ28nO1xyXG5pbXBvcnQgTG9nb0RhcmsgZnJvbSAnYXNzZXRzL2xvZ28tZGFyay5zdmcnO1xyXG5pbXBvcnQgTG9nb1doaXRlIGZyb20gJ2Fzc2V0cy9sb2dvLnN2Zyc7XHJcbmltcG9ydCB7IERyYXdlclByb3ZpZGVyIH0gZnJvbSAnLi4vLi4vY29udGV4dHMvZHJhd2VyL2RyYXdlci5wcm92aWRlcic7XHJcbmltcG9ydCBNb2JpbGVEcmF3ZXIgZnJvbSAnLi9tb2JpbGUtZHJhd2VyJztcclxuaW1wb3J0IG1lbnVJdGVtcyBmcm9tICcuL2hlYWRlci5kYXRhJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcih7IGNsYXNzTmFtZSB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxEcmF3ZXJQcm92aWRlcj5cclxuICAgICAgPGhlYWRlciBzeD17c3R5bGVzLmhlYWRlcn0gY2xhc3NOYW1lPXtjbGFzc05hbWV9IGlkPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgPENvbnRhaW5lciBzeD17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICA8TG9nbyBzcmM9e2NsYXNzTmFtZSA9PT0gJ3N0aWNreScgPyBMb2dvRGFyayA6IExvZ29XaGl0ZX0gLz5cclxuXHJcbiAgICAgICAgICA8RmxleCBhcz1cIm5hdlwiIHN4PXtzdHlsZXMubmF2fT5cclxuICAgICAgICAgICAge21lbnVJdGVtcy5tYXAoKHsgcGF0aCwgbGFiZWwgfSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICBhY3RpdmVDbGFzcz1cImFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICB0bz17cGF0aH1cclxuICAgICAgICAgICAgICAgIHNweT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIHNtb290aD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIG9mZnNldD17LTcwfVxyXG4gICAgICAgICAgICAgICAgZHVyYXRpb249ezUwMH1cclxuICAgICAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7bGFiZWx9XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvRmxleD5cclxuXHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImRvbmF0ZV9fYnRuXCJcclxuICAgICAgICAgICAgdmFyaWFudD1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJHZXQgU3RhcnRlZFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIExvZ2luIC8gU2lnblVwXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuXHJcbiAgICAgICAgICA8TW9iaWxlRHJhd2VyIC8+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDwvaGVhZGVyPlxyXG4gICAgPC9EcmF3ZXJQcm92aWRlcj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBwb3NpdGlvbkFuaW0gPSBrZXlmcmFtZXNgXHJcbiAgZnJvbSB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgaGVhZGVyOiB7XHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxyXG4gICAgcHk6IDQsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICB0b3A6IDAsXHJcbiAgICBsZWZ0OiAwLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgdHJhbnNpdGlvbjogJ2FsbCAwLjVzIGVhc2UnLFxyXG4gICAgYW5pbWF0aW9uOiBgJHtwb3NpdGlvbkFuaW19IDAuNHMgZWFzZWAsXHJcbiAgICAnLmRvbmF0ZV9fYnRuJzoge1xyXG4gICAgICBmbGV4U2hyaW5rOiAwLFxyXG4gICAgICBtcjogWzE1LCAyMCwgbnVsbCwgbnVsbCwgMF0sXHJcbiAgICAgIG1sOiBbJ2F1dG8nLCBudWxsLCBudWxsLCBudWxsLCAwXSxcclxuICAgIH0sXHJcbiAgICAnJi5zdGlja3knOiB7XHJcbiAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdiYWNrZ3JvdW5kJyxcclxuICAgICAgY29sb3I6ICcjMDAwMDAwJyxcclxuICAgICAgYm94U2hhZG93OiAnMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNiknLFxyXG4gICAgICBweTogMyxcclxuICAgICAgJ25ldiA+IGEnOiB7XHJcbiAgICAgICAgY29sb3I6ICd0ZXh0JyxcclxuICAgICAgfSxcclxuICAgICAgJy5kb25hdGVfX2J0bic6IHtcclxuICAgICAgICBib3JkZXJDb2xvcjogJ3ByaW1hcnknLFxyXG4gICAgICAgIGNvbG9yOiAncHJpbWFyeScsXHJcbiAgICAgICAgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgICBib3hTaGFkb3c6ICdyZ2JhKDMxLCA2MiwgMTE4LCAwLjU3KSAwcHggOXB4IDIwcHggLTVweCcsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdwcmltYXJ5JyxcclxuICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgY29udGFpbmVyOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXHJcbiAgfSxcclxuICBuYXY6IHtcclxuICAgIG14OiAnYXV0bycsXHJcbiAgICBkaXNwbGF5OiAnbm9uZScsXHJcbiAgICAnQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSc6IHtcclxuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgIH0sXHJcbiAgICBhOiB7XHJcbiAgICAgIGZvbnRTaXplOiAnMTZweCcsXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICc0MDAnLFxyXG4gICAgICBweDogMjUsXHJcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAnMS4yJyxcclxuICAgICAgJyYuYWN0aXZlJzoge1xyXG4gICAgICAgIGNvbG9yOiAnc2Vjb25kYXJ5JyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJveCB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IHsgU2Nyb2xsYmFycyB9IGZyb20gJ3JlYWN0LWN1c3RvbS1zY3JvbGxiYXJzJztcclxuaW1wb3J0IERyYXdlciBmcm9tICdjb21wb25lbnRzL2RyYXdlcic7XHJcbmltcG9ydCB7IERyYXdlckNvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0cy9kcmF3ZXIvZHJhd2VyLmNvbnRleHQnO1xyXG5pbXBvcnQgeyBJb01kQ2xvc2UsIElvTWRNZW51IH0gZnJvbSAncmVhY3QtaWNvbnMvaW8nO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtc2Nyb2xsJztcclxuaW1wb3J0IHtcclxuICBGYUZhY2Vib29rRixcclxuICBGYVR3aXR0ZXIsXHJcbiAgRmFHaXRodWJBbHQsXHJcbiAgRmFEcmliYmJsZSxcclxufSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XHJcbmltcG9ydCBtZW51SXRlbXMgZnJvbSAnLi9oZWFkZXIuZGF0YSc7XHJcblxyXG5jb25zdCBzb2NpYWwgPSBbXHJcbiAge1xyXG4gICAgcGF0aDogJy8nLFxyXG4gICAgaWNvbjogPEZhRmFjZWJvb2tGIC8+LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJy8nLFxyXG4gICAgaWNvbjogPEZhVHdpdHRlciAvPixcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICcvJyxcclxuICAgIGljb246IDxGYUdpdGh1YkFsdCAvPixcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICcvJyxcclxuICAgIGljb246IDxGYURyaWJiYmxlIC8+LFxyXG4gIH0sXHJcbl07XHJcblxyXG5jb25zdCBNb2JpbGVEcmF3ZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBzdGF0ZSwgZGlzcGF0Y2ggfSA9IHVzZUNvbnRleHQoRHJhd2VyQ29udGV4dCk7XHJcblxyXG4gIC8vIFRvZ2dsZSBkcmF3ZXJcclxuICBjb25zdCB0b2dnbGVIYW5kbGVyID0gUmVhY3QudXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiAnVE9HR0xFJyxcclxuICAgIH0pO1xyXG4gIH0sIFtkaXNwYXRjaF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPERyYXdlclxyXG4gICAgICB3aWR0aD1cIjMyMHB4XCJcclxuICAgICAgZHJhd2VySGFuZGxlcj17XHJcbiAgICAgICAgPEJveCBzeD17c3R5bGVzLmhhbmRsZXJ9PlxyXG4gICAgICAgICAgPElvTWRNZW51IHNpemU9XCIyNnB4XCIgLz5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgfVxyXG4gICAgICBvcGVuPXtzdGF0ZS5pc09wZW59XHJcbiAgICAgIHRvZ2dsZUhhbmRsZXI9e3RvZ2dsZUhhbmRsZXJ9XHJcbiAgICAgIGNsb3NlQnV0dG9uPXs8SW9NZENsb3NlIHNpemU9XCIyNHB4XCIgY29sb3I9XCIjMDAwMDAwXCIgLz59XHJcbiAgICAgIGRyYXdlclN0eWxlPXtzdHlsZXMuZHJhd2VyfVxyXG4gICAgICBjbG9zZUJ0blN0eWxlPXtzdHlsZXMuY2xvc2V9XHJcbiAgICA+XHJcbiAgICAgIDxTY3JvbGxiYXJzIGF1dG9IaWRlPlxyXG4gICAgICAgIDxCb3ggc3g9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5tZW51fT5cclxuICAgICAgICAgICAge21lbnVJdGVtcy5tYXAoKHsgcGF0aCwgbGFiZWwgfSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICBhY3RpdmVDbGFzcz1cImFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICB0bz17cGF0aH1cclxuICAgICAgICAgICAgICAgIHNweT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIHNtb290aD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIG9mZnNldD17LTcwfVxyXG4gICAgICAgICAgICAgICAgZHVyYXRpb249ezUwMH1cclxuICAgICAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7bGFiZWx9XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvQm94PlxyXG5cclxuICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5tZW51Rm9vdGVyfT5cclxuICAgICAgICAgICAgPEJveCBzeD17c3R5bGVzLnNvY2lhbH0+XHJcbiAgICAgICAgICAgICAge3NvY2lhbC5tYXAoKHsgcGF0aCwgaWNvbiB9LCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8Qm94IGFzPVwic3BhblwiIGtleT17aX0gc3g9e3N0eWxlcy5zb2NpYWwuaWNvbn0+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtwYXRofT57aWNvbn08L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9TY3JvbGxiYXJzPlxyXG4gICAgPC9EcmF3ZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBoYW5kbGVyOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgIGZsZXhTaHJpbms6ICcwJyxcclxuICAgIHdpZHRoOiAnMjZweCcsXHJcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICdAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpJzoge1xyXG4gICAgICBkaXNwbGF5OiAnbm9uZScsXHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIGRyYXdlcjoge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnZGFyaycsXHJcbiAgfSxcclxuXHJcbiAgY2xvc2U6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICB0b3A6ICcyNXB4JyxcclxuICAgIHJpZ2h0OiAnMzBweCcsXHJcbiAgICB6SW5kZXg6ICcxJyxcclxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gIH0sXHJcblxyXG4gIGNvbnRlbnQ6IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgcHQ6ICcxMDBweCcsXHJcbiAgICBwYjogJzQwcHgnLFxyXG4gICAgcHg6ICczMHB4JyxcclxuICB9LFxyXG5cclxuICBtZW51OiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICBhOiB7XHJcbiAgICAgIGZvbnRTaXplOiAnMTZweCcsXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICc1MDAnLFxyXG4gICAgICBjb2xvcjogJ3RleHRfd2hpdGUnLFxyXG4gICAgICBweTogJzE1cHgnLFxyXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICAgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNlOGU1ZTUnLFxyXG4gICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuMjVzJyxcclxuICAgICAgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgY29sb3I6ICdzZWNvbmRhcnknLFxyXG4gICAgICB9LFxyXG4gICAgICAnJi5hY3RpdmUnOiB7XHJcbiAgICAgICAgY29sb3I6ICdzZWNvbmRhcnknLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICBtZW51Rm9vdGVyOiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIG10OiAnYXV0bycsXHJcbiAgfSxcclxuXHJcbiAgc29jaWFsOiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcblxyXG4gICAgaWNvbjoge1xyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgIGNvbG9yOiAndGV4dCcsXHJcbiAgICAgIGZvbnRTaXplOiAxNCxcclxuICAgICAgbXI6ICcxNXB4JyxcclxuICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjI1cycsXHJcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICAnOmxhc3QtY2hpbGQnOiB7XHJcbiAgICAgICAgbXI6ICcwJyxcclxuICAgICAgfSxcclxuICAgICAgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgY29sb3I6ICdzZWNvbmRhcnknLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICBidXR0b246IHtcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgZm9udFNpemU6ICcxNHB4JyxcclxuICAgIGZ3OiAnNzAwJyxcclxuICAgIGhlaWdodDogJzQ1cHgnLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcclxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgcHk6ICcwJyxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9iaWxlRHJhd2VyO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBJbWFnZSBhcyBJbWcgfSBmcm9tICd0aGVtZS11aSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbWFnZSh7IHNyYywgLi4ucmVzdCB9KSB7XHJcbiAgcmV0dXJuIDxJbWcgc3JjPXtzcmN9IHsuLi5yZXN0fSAvPjtcclxufVxyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4IH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTdGlja3kgZnJvbSAncmVhY3Qtc3RpY2t5bm9kZSc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9oZWFkZXIvaGVhZGVyJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuL2Zvb3Rlci9mb290ZXInO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQoeyBjaGlsZHJlbiB9KSB7XHJcbiAgY29uc3QgW2lzU3RpY2t5LCBzZXRJc1N0aWNreV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgaGFuZGxlU3RhdGVDaGFuZ2UgPSAoc3RhdHVzKSA9PiB7XHJcbiAgICBpZiAoc3RhdHVzLnN0YXR1cyA9PT0gU3RpY2t5LlNUQVRVU19GSVhFRCkge1xyXG4gICAgICBzZXRJc1N0aWNreSh0cnVlKTtcclxuICAgIH0gZWxzZSBpZiAoc3RhdHVzLnN0YXR1cyA9PT0gU3RpY2t5LlNUQVRVU19PUklHSU5BTCkge1xyXG4gICAgICBzZXRJc1N0aWNreShmYWxzZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICA8U3RpY2t5IGlubmVyWj17MTAwMX0gdG9wPXswfSBvblN0YXRlQ2hhbmdlPXtoYW5kbGVTdGF0ZUNoYW5nZX0+XHJcbiAgICAgICAgPEhlYWRlciBjbGFzc05hbWU9e2Ake2lzU3RpY2t5ID8gJ3N0aWNreScgOiAndW5TdGlja3knfWB9IC8+XHJcbiAgICAgIDwvU3RpY2t5PlxyXG4gICAgICA8bWFpblxyXG4gICAgICAgIHN4PXt7XHJcbiAgICAgICAgICB2YXJpYW50OiAnbGF5b3V0Lm1haW4nLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDwvbWFpbj5cclxuICAgICAgPEZvb3RlciAvPlxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICApO1xyXG59XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3gsIE5hdkxpbmsgYXMgTWVudUxpbmssIExpbmsgYXMgQSB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IE5leHRMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmV4cG9ydCBmdW5jdGlvbiBOYXZMaW5rKHsgcGF0aCwgbGFiZWwsIGNoaWxkcmVuLCAuLi5yZXN0IH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPE5leHRMaW5rIGhyZWY9e3BhdGh9PlxyXG4gICAgICA8TWVudUxpbmsgey4uLnJlc3R9PntjaGlsZHJlbiA/IGNoaWxkcmVuIDogbGFiZWx9PC9NZW51TGluaz5cclxuICAgIDwvTmV4dExpbms+XHJcbiAgKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gTGluayh7IHBhdGgsIGxhYmVsLCBjaGlsZHJlbiwgLi4ucmVzdCB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxBIHsuLi5yZXN0fSBocmVmPXtwYXRofT5cclxuICAgICAge2NoaWxkcmVuID8gY2hpbGRyZW4gOiBsYWJlbH1cclxuICAgIDwvQT5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEZsZXgsIEJveCwgSWNvbkJ1dHRvbiB9IGZyb20gJ3RoZW1lLXVpJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExpc3QoeyBpdGVtcyA9IFtdLCBwYXJlbnRTdHlsZSwgY2hpbGRTdHlsZSB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3hcclxuICAgICAgYXM9XCJ1bFwiXHJcbiAgICAgIHN4PXt7XHJcbiAgICAgICAgbGlzdFN0eWxlVHlwZTogJ25vbmUnLFxyXG4gICAgICAgIG1hcmdpbjogMCxcclxuICAgICAgICBwYWRkaW5nOiAwLFxyXG4gICAgICAgIC4uLnBhcmVudFN0eWxlLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICB7aXRlbXMubWFwKCh7IGljb24sIHRleHQsIGlzQXZhaWxhYmxlIH0sIGkpID0+IChcclxuICAgICAgICA8RmxleFxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtpc0F2YWlsYWJsZSA/ICdvcGVuJyA6ICdjbG9zZWQnfVxyXG4gICAgICAgICAgYXM9XCJsaVwiXHJcbiAgICAgICAgICBzeD17eyAuLi5jaGlsZFN0eWxlIH19XHJcbiAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEljb25CdXR0b24gc3g9e3N0eWxlcy5saXN0SWNvbn0gYXJpYS1sYWJlbD1cImxpc3QgaWNvblwiPlxyXG4gICAgICAgICAgICB7aWNvbn1cclxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIHt0ZXh0fVxyXG4gICAgICAgIDwvRmxleD5cclxuICAgICAgKSl9XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59XHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBsaXN0SWNvbjoge1xyXG4gICAgd2lkdGg6IFsyNSwgJzM1cHgnXSxcclxuICAgIGhlaWdodDogJ2F1dG8nLFxyXG4gICAgY29sb3I6ICdzZWNvbmRhcnknLFxyXG4gICAgcGFkZGluZzogMCxcclxuICAgIGZvbnRTaXplOiBbMiwgNV0sXHJcbiAgICBtYXJnaW5MZWZ0OiAnLTFweCcsXHJcbiAgICBmbGV4U2hyaW5rOiAwLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LXN0YXJ0JyxcclxuICAgIG1hcmdpblRvcDogWzEsICcycHgnXSxcclxuICB9LFxyXG59O1xyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4LCBJbWFnZSB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ2NvbXBvbmVudHMvbGluayc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dvKHsgc3JjLCAuLi5yZXN0IH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPExpbmtcclxuICAgICAgcGF0aD1cIi9cIlxyXG4gICAgICBzeD17e1xyXG4gICAgICAgIHZhcmlhbnQ6ICdsaW5rcy5sb2dvJyxcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgICAgbXI6IDE1LFxyXG4gICAgICB9fVxyXG4gICAgICB7Li4ucmVzdH1cclxuICAgID5cclxuICAgICAgPEltYWdlIHNyYz17c3JjfSBhbHQ9XCJzdGFydHVwIGxhbmRpbmcgbG9nb1wiIC8+XHJcbiAgICA8L0xpbms+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyBCb3gsIENhcmQsIFRleHQsIEZsZXgsIEhlYWRpbmcsIEJ1dHRvbiB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpc3QgZnJvbSAnLi9saXN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByaWNlQ2FyZCh7XHJcbiAgZGF0YToge1xyXG4gICAgaGVhZGVyLFxyXG4gICAgbmFtZSxcclxuICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgcHJpY2VXaXRoVW5pdCxcclxuICAgIGJ1dHRvblRleHQgPSAnU3RhcnQgRnJlZSBUcmlhbCcsXHJcbiAgICBwb2ludHMsXHJcbiAgfSxcclxufSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FyZCBjbGFzc05hbWU9e2hlYWRlciA/ICdhY3RpdmUnIDogbnVsbH0gc3g9e3N0eWxlcy5wcmljaW5nQm94fT5cclxuICAgICAge2hlYWRlciAmJiA8VGV4dCBzeD17c3R5bGVzLmhlYWRlcn0+e2hlYWRlcn08L1RleHQ+fVxyXG4gICAgICA8Qm94PlxyXG4gICAgICAgIDxGbGV4IHN4PXtzdHlsZXMucHJpY2luZ0hlYWRlcn0+XHJcbiAgICAgICAgICA8Qm94PlxyXG4gICAgICAgICAgICA8SGVhZGluZyBjbGFzc05hbWU9XCJwYWNrYWdlX19uYW1lXCIgc3g9e3N0eWxlcy5oZWFkaW5nfT5cclxuICAgICAgICAgICAgICB7bmFtZX1cclxuICAgICAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgIGFzPVwicFwiXHJcbiAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IGhlYWRlciA/IDEgOiAwLjcsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogaGVhZGVyID8gJ3RleHQnIDogJ3doaXRlJyxcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiBbMSwgMl0sXHJcbiAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiAxLjMsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtkZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICB7aGVhZGVyICYmIChcclxuICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPVwicGFja2FnZV9fcHJpY2VcIiBzeD17c3R5bGVzLnByaWNlfT5cclxuICAgICAgICAgICAgICA8c3Bhbj5TdGFydGluZyBmcm9tPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJpY2VcIj5cclxuICAgICAgICAgICAgICAgIHtwcmljZVdpdGhVbml0fVxyXG4gICAgICAgICAgICAgICAgPHN1Yj5tbzwvc3ViPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvRmxleD5cclxuICAgICAgICA8TGlzdCBpdGVtcz17cG9pbnRzfSBjaGlsZFN0eWxlPXtzdHlsZXMubGlzdEl0ZW19IC8+XHJcbiAgICAgICAgPEJveFxyXG4gICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgbXQ6IFsnNDBweCcsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICc3MHB4J10sXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgdmFyaWFudD17aGVhZGVyID8gJ3ByaW1hcnknIDogJ3doaXRlQnV0dG9uJ31cclxuICAgICAgICAgICAgYXJpYS1sYWJlbD17YnV0dG9uVGV4dH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2J1dHRvblRleHR9XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L0NhcmQ+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIHByaWNpbmdCb3g6IHtcclxuICAgIGZsZXg6IFtcclxuICAgICAgJzAgMSAxMDAlJyxcclxuICAgICAgbnVsbCxcclxuICAgICAgbnVsbCxcclxuICAgICAgJzAgMSA1MCUnLFxyXG4gICAgICAnMCAxIDQ1JScsXHJcbiAgICAgICcwIDEgNDAlJyxcclxuICAgICAgJzAgMSAzOC41JScsXHJcbiAgICBdLFxyXG4gICAgYmFja2dyb3VuZDogJyMyRjUzOTInLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAxMCxcclxuICAgIG1sOiBbMCwgbnVsbCwgbnVsbCwgNV0sXHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIG10OiBbJzQwcHgnLCBudWxsLCBudWxsLCAwXSxcclxuICAgIHA6IFtcclxuICAgICAgJzUwcHggMTVweCA1MHB4JyxcclxuICAgICAgbnVsbCxcclxuICAgICAgJzYycHggMjVweCA1MHB4IDI1cHgnLFxyXG4gICAgICBudWxsLFxyXG4gICAgICAnNjJweCA3MHB4IDUwcHggNDBweCcsXHJcbiAgICBdLFxyXG4gICAgJ0BtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQyMHB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpJzoge1xyXG4gICAgICBtYXhXaWR0aDogJzM4MHB4JyxcclxuICAgIH0sXHJcbiAgICAnJjpmaXJzdC1vZi10eXBlJzoge1xyXG4gICAgICBtbDogMCxcclxuICAgICAgbXQ6IDAsXHJcbiAgICB9LFxyXG4gICAgJyYuYWN0aXZlJzoge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICcucGFja2FnZV9fbmFtZSc6IHtcclxuICAgICAgICBjb2xvcjogJ2hlYWRpbmdfc2Vjb25kYXJ5JyxcclxuICAgICAgfSxcclxuICAgICAgJy5wYWNrYWdlX19wcmljZSA+IHNwYW4nOiB7XHJcbiAgICAgICAgY29sb3I6ICd0ZXh0JyxcclxuICAgICAgfSxcclxuICAgICAgJy5vcGVuJzoge1xyXG4gICAgICAgIGNvbG9yOiAndGV4dCcsXHJcbiAgICAgIH0sXHJcbiAgICAgICcuY2xvc2VkJzoge1xyXG4gICAgICAgIGNvbG9yOiAndGV4dCcsXHJcbiAgICAgICAgb3BhY2l0eTogMC42LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGhlYWRlcjoge1xyXG4gICAgaGVpZ2h0OiBbJzI4cHgnLCBudWxsLCBudWxsLCBudWxsLCAnMzJweCddLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnI0VGOUU0OCcsXHJcbiAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxyXG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gICAgZm9udFNpemU6ICcxNHB4JyxcclxuICAgIGxpbmVIZWlnaHQ6ICcxOHB4JyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgY29sb3I6ICcjRkZGRkZGJyxcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgdG9wOiBbMywgbnVsbCwgNF0sXHJcbiAgICBsZXR0ZXJTcGFjaW5nOiAnLS4xNHB4JyxcclxuICAgIHB4OiAnMTBweCcsXHJcbiAgfSxcclxuXHJcbiAgaGVhZGluZzoge1xyXG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gICAgZm9udFNpemU6IFs0LCBudWxsLCBudWxsLCBudWxsLCA1XSxcclxuICAgIGxpbmVIZWlnaHQ6ICcyM3B4JyxcclxuICAgIGNvbG9yOiAnI2ZmZmZmZicsXHJcbiAgICBtYXJnaW5Cb3R0b206IFsxLCBudWxsLCAnMTJweCddLFxyXG4gIH0sXHJcbiAgcHJpY2luZ0hlYWRlcjoge1xyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcclxuICAgIGFsaWduSXRlbXM6ICdmbGV4LXN0YXJ0JyxcclxuICAgIG1iOiBbJzM1cHgnLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAnNTBweCddLFxyXG4gIH0sXHJcbiAgcHJpY2U6IHtcclxuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICAgIGZvbnRTaXplOiBbNCwgbnVsbCwgNSwgbnVsbCwgJzI2cHgnXSxcclxuICAgIGxpbmVIZWlnaHQ6IDEsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBsZXR0ZXJTcGFjaW5nOiAnLTAuNXB4JyxcclxuICAgIGNvbG9yOiAnIzBGMjEzNycsXHJcbiAgICBtYXJnaW5Cb3R0b206IDAsXHJcbiAgICBmbGV4V3JhcDogJ3dyYXAnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICB0ZXh0QWxpZ246ICdyaWdodCcsXHJcbiAgICBtdDogWyctM3B4JywgbnVsbCwgJzJweCddLFxyXG4gICAgJz4gc3Bhbic6IHtcclxuICAgICAgZm9udFdlaWdodDogJ2JvZHknLFxyXG4gICAgICBmb250U2l6ZTogWzEsIDJdLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAxLjI1LFxyXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgICBtYXJnaW5Cb3R0b206ICcxMHB4JyxcclxuICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICB9LFxyXG4gICAgJz4gLnByaWNlJzoge1xyXG4gICAgICBtYXJnaW5Cb3R0b206IDAsXHJcbiAgICAgIGNvbG9yOiAnc2Vjb25kYXJ5JyxcclxuICAgICAgJz4gc3ViJzoge1xyXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICAgIGJvdHRvbTogJzZweCcsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbGlzdEl0ZW06IHtcclxuICAgIGZvbnRTdHlsZTogJ25vcm1hbCcsXHJcbiAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcclxuICAgIGZvbnRTaXplOiBbMSwgbnVsbCwgbnVsbCwgbnVsbCwgMl0sXHJcbiAgICBsaW5lSGVpZ2h0OiBbMS43LCBudWxsLCAxLjY1XSxcclxuICAgIG1hcmdpbkJvdHRvbTogWzMsICcyMnB4J10sXHJcbiAgICBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCcsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIHByOiBbMiwgbnVsbCwgbnVsbCwgbnVsbCwgMCwgNl0sXHJcbiAgICAnJi5jbG9zZWQnOiB7XHJcbiAgICAgIG9wYWNpdHk6IDAuNTUsXHJcbiAgICAgIGJ1dHRvbjoge1xyXG4gICAgICAgIGNvbG9yOiAnIzc4OEZCNScsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEZhU3RhciB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcclxuXHJcbmNvbnN0IFJhdGluZyA9ICh7IHJhdGluZyB9KSA9PiB7XHJcbiAgY29uc3QgdG90YWxSYXRpbmcgPSBbXTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xyXG4gICAgaWYgKGkgPCByYXRpbmcpIHtcclxuICAgICAgdG90YWxSYXRpbmcucHVzaChcclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwic3RhclwiIGtleT17YHJhdGluZy1rZXkke2l9YH0+XHJcbiAgICAgICAgICA8RmFTdGFyIC8+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRvdGFsUmF0aW5nLnB1c2goXHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cInN0YXItb1wiIGtleT17YHJhdGluZy1rZXkke2l9YH0+XHJcbiAgICAgICAgICA8RmFTdGFyIC8+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGluZ1wiPlxyXG4gICAgICA8dWw+e3RvdGFsUmF0aW5nfTwvdWw+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmF0aW5nO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCb3gsIFRleHQsIEhlYWRpbmcgfSBmcm9tICd0aGVtZS11aSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWN0aW9uSGVhZGVyKHsgdGl0bGUsIHNsb2dhbiwgaXNXaGl0ZSB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggc3g9e3sgdmFyaWFudDogJ3NlY3Rpb25IZWFkZXInIH19PlxyXG4gICAgICA8VGV4dFxyXG4gICAgICAgIGFzPVwicFwiXHJcbiAgICAgICAgc3g9e3tcclxuICAgICAgICAgIHZhcmlhbnQ6ICdzZWN0aW9uSGVhZGVyLnN1YlRpdGxlJyxcclxuICAgICAgICAgIGNvbG9yOiBpc1doaXRlID8gJ3doaXRlJyA6ICdoZWFkaW5nJyxcclxuICAgICAgICAgIG9wYWNpdHk6IGlzV2hpdGUgPyAwLjcgOiAxLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICB7c2xvZ2FufVxyXG4gICAgICA8L1RleHQ+XHJcbiAgICAgIDxIZWFkaW5nXHJcbiAgICAgICAgYXM9XCJoMlwiXHJcbiAgICAgICAgc3g9e3tcclxuICAgICAgICAgIHZhcmlhbnQ6ICdzZWN0aW9uSGVhZGVyLnRpdGxlJyxcclxuICAgICAgICAgIGNvbG9yOiBpc1doaXRlID8gJ3doaXRlJyA6ICdoZWFkaW5nX3NlY29uZGFyeScsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIHt0aXRsZX1cclxuICAgICAgPC9IZWFkaW5nPlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU0VPKHtcclxuICBkZXNjcmlwdGlvbiA9ICdzdGFydHVwIGFwcHMgbGFuZGluZyBwYWdlJyxcclxuICBhdXRob3IgPSAnUmVkUSwgSW5jJyxcclxuICBtZXRhLFxyXG4gIHRpdGxlID0gJ3N0YXJ0dXAgbGFuZGluZyB0aXRsZScsXHJcbn0pIHtcclxuICBjb25zdCBtZXRhRGF0YSA9IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogYGRlc2NyaXB0aW9uYCxcclxuICAgICAgY29udGVudDogZGVzY3JpcHRpb24sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwcm9wZXJ0eTogYG9nOnRpdGxlYCxcclxuICAgICAgY29udGVudDogdGl0bGUsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwcm9wZXJ0eTogYG9nOmRlc2NyaXB0aW9uYCxcclxuICAgICAgY29udGVudDogZGVzY3JpcHRpb24sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwcm9wZXJ0eTogYG9nOnR5cGVgLFxyXG4gICAgICBjb250ZW50OiBgd2Vic2l0ZWAsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBgdHdpdHRlcjpjYXJkYCxcclxuICAgICAgY29udGVudDogYHN1bW1hcnlgLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogYHR3aXR0ZXI6Y3JlYXRvcmAsXHJcbiAgICAgIGNvbnRlbnQ6IGF1dGhvcixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IGB0d2l0dGVyOnRpdGxlYCxcclxuICAgICAgY29udGVudDogdGl0bGUsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBgdHdpdHRlcjpkZXNjcmlwdGlvbmAsXHJcbiAgICAgIGNvbnRlbnQ6IGRlc2NyaXB0aW9uLFxyXG4gICAgfSxcclxuICBdLmNvbmNhdChtZXRhKTtcclxuICByZXR1cm4gKFxyXG4gICAgPEhlYWQ+XHJcbiAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cclxuICAgICAge21ldGFEYXRhLm1hcCgoeyBuYW1lLCBjb250ZW50IH0sIGkpID0+IChcclxuICAgICAgICA8bWV0YSBrZXk9e2l9IG5hbWU9e25hbWV9IGNvbnRlbnQ9e2NvbnRlbnR9IC8+XHJcbiAgICAgICkpfVxyXG4gICAgPC9IZWFkPlxyXG4gICk7XHJcbn1cclxuXHJcblNFTy5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgbGFuZzogYGVuYCxcclxuICBtZXRhOiBbXSxcclxufTtcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCwgQm94LCBIZWFkaW5nLCBUZXh0LCBCdXR0b24sIExpbmsgfSBmcm9tICd0aGVtZS11aSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZXh0RmVhdHVyZSh7XHJcbiAgc3ViVGl0bGUsXHJcbiAgdGl0bGUsXHJcbiAgZGVzY3JpcHRpb24sXHJcbiAgYnRuTmFtZSxcclxuICBidG5VUkwgPSAnIycsXHJcbn0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBzeD17c3R5bGVzLmNhcmR9PlxyXG4gICAgICA8Qm94IHN4PXtzdHlsZXMud3JhcHBlcn0+XHJcbiAgICAgICAgPFRleHQgYXM9XCJwXCIgc3g9e3N0eWxlcy53cmFwcGVyLnN1YlRpdGxlfT5cclxuICAgICAgICAgIHtzdWJUaXRsZX1cclxuICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgPEhlYWRpbmcgYXM9XCJoMlwiIHN4PXtzdHlsZXMud3JhcHBlci50aXRsZX0+XHJcbiAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICA8L0JveD5cclxuXHJcbiAgICAgIHtkZXNjcmlwdGlvbiAmJiAoXHJcbiAgICAgICAgPFRleHQgYXM9XCJwXCIgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIiBzeD17c3R5bGVzLmRlc2NyaXB0aW9ufT5cclxuICAgICAgICAgIHtkZXNjcmlwdGlvbn1cclxuICAgICAgICA8L1RleHQ+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICB7YnRuTmFtZSAmJiAoXHJcbiAgICAgICAgPExpbmsgaHJlZj17YnRuVVJMfSB2YXJpYW50PVwiZGVmYXVsdFwiPlxyXG4gICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIGFyaWEtbGFiZWw9e2J0bk5hbWV9PlxyXG4gICAgICAgICAgICB7YnRuTmFtZX1cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgKX1cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBjYXJkOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIGZsZXhTaHJpbms6IDAsXHJcbiAgICBhOiB7XHJcbiAgICAgIG06IFsnMCBhdXRvJywgbnVsbCwgbnVsbCwgMF0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgd3JhcHBlcjoge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgbXQ6ICctNXB4JyxcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgIGZvbnRTaXplOiBbJzI0cHgnLCBudWxsLCAnMjhweCcsICczMnB4JywgJzM2cHgnLCAnNDJweCcsIG51bGwsICc0NnB4J10sXHJcbiAgICAgIGNvbG9yOiAnaGVhZGluZ19zZWNvbmRhcnknLFxyXG4gICAgICBsaW5lSGVpZ2h0OiBbMS4zNSwgbnVsbCwgbnVsbCwgMS4zLCAxLjJdLFxyXG4gICAgICBmb250V2VpZ2h0OiAnNzAwJyxcclxuICAgICAgbGV0dGVyU3BhY2luZzogJy0uNXB4JyxcclxuICAgICAgbWI6IDUsXHJcbiAgICB9LFxyXG5cclxuICAgIHN1YlRpdGxlOiB7XHJcbiAgICAgIGZvbnRTaXplOiBbMCwgbnVsbCwgJzE0cHgnXSxcclxuICAgICAgY29sb3I6ICdoZWFkaW5nJyxcclxuICAgICAgbGV0dGVyU3BhY2luZzogJzJweCcsXHJcbiAgICAgIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxyXG4gICAgICBmb250V2VpZ2h0OiAnNzAwJyxcclxuICAgICAgbWI6IFsyLCBudWxsLCBudWxsLCBudWxsLCAzXSxcclxuICAgICAgbGluZUhlaWdodDogMS41LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGRlc2NyaXB0aW9uOiB7XHJcbiAgICBmb250U2l6ZTogWycxNXB4JywgMiwgbnVsbCwgbnVsbCwgbnVsbCwgJzE3cHgnLCBudWxsLCAzXSxcclxuICAgIGZvbnRXZWlnaHQ6IDQwMCxcclxuICAgIGxpbmVIZWlnaHQ6IFsxLjg1LCBudWxsLCBudWxsLCAyLCBudWxsLCAnMi4yJ10sXHJcbiAgICBjb2xvcjogJ3RleHRfc2Vjb25kYXJ5JyxcclxuICAgIG1iOiAnMzBweCcsXHJcbiAgfSxcclxufTtcclxuIiwiaW1wb3J0IHsgdXNlQ3JlYXRlQ29udGV4dCB9IGZyb20gJy4uL2NyZWF0ZS1jb250ZXh0JztcclxuaW1wb3J0IHsgcmVkdWNlciwgaW5pdGlhbFN0YXRlIH0gZnJvbSAnLi9hcHAucmVkdWNlcic7XHJcblxyXG5jb25zdCBbc3RhdGUsIHVzZURpc3BhdGNoLCBwcm92aWRlcl0gPSB1c2VDcmVhdGVDb250ZXh0KGluaXRpYWxTdGF0ZSwgcmVkdWNlcik7XHJcbmV4cG9ydCBjb25zdCB1c2VTdGlja3lTdGF0ZSA9IHN0YXRlO1xyXG5leHBvcnQgY29uc3QgdXNlU3RpY2t5RGlzcGF0Y2ggPSB1c2VEaXNwYXRjaDtcclxuZXhwb3J0IGNvbnN0IFN0aWNreVByb3ZpZGVyID0gcHJvdmlkZXI7XHJcbiIsImV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgaXNTdGlja3k6IGZhbHNlLFxyXG4gIGlzU2lkZWJhclN0aWNreTogdHJ1ZSxcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlLCB7IHR5cGUgfSkge1xyXG4gIHN3aXRjaCAodHlwZSkge1xyXG4gICAgY2FzZSAnU0VUX1NUSUNLWSc6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaXNTdGlja3k6IHRydWUsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlICdSRU1PVkVfU1RJQ0tZJzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBpc1N0aWNreTogZmFsc2UsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlICdTRVRfU0lERUJBUl9TVElDS1knOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGlzU2lkZWJhclN0aWNreTogdHJ1ZSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgJ1JFTU9WRV9TSURFQkFSX1NUSUNLWSc6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaXNTaWRlYmFyU3RpY2t5OiBmYWxzZSxcclxuICAgICAgfTtcclxuICAgIGRlZmF1bHQ6IHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbnN1cHBvcnRlZCBhY3Rpb24gdHlwZTogJHt0eXBlfWApO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VDcmVhdGVDb250ZXh0KGRlZmF1bHRWYWx1ZSwgcmVkdWNlcikge1xyXG4gIGNvbnN0IGRlZmF1bHREaXNwYXRjaCA9ICgpID0+IGRlZmF1bHRWYWx1ZTtcclxuICBjb25zdCBzdGF0ZUN0eCA9IGNyZWF0ZUNvbnRleHQoZGVmYXVsdFZhbHVlKTtcclxuICBjb25zdCBkaXNwYXRjaEN0eCA9IGNyZWF0ZUNvbnRleHQoZGVmYXVsdERpc3BhdGNoKTtcclxuXHJcbiAgZnVuY3Rpb24gdXNlU3RhdGVDdHgocHJvcGVydHkpIHtcclxuICAgIGNvbnN0IHN0YXRlID0gdXNlQ29udGV4dChzdGF0ZUN0eCk7XHJcbiAgICByZXR1cm4gc3RhdGVbcHJvcGVydHldOyAvLyBvbmx5IG9uZSBkZXB0aCBzZWxlY3RvciBmb3IgY29tcGFyaXNvblxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gdXNlRGlzcGF0Y2hDdHgoKSB7XHJcbiAgICByZXR1cm4gdXNlQ29udGV4dChkaXNwYXRjaEN0eCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBQcm92aWRlcih7IGNoaWxkcmVuIH0pIHtcclxuICAgIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gUmVhY3QudXNlUmVkdWNlcihyZWR1Y2VyLCBkZWZhdWx0VmFsdWUpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpc3BhdGNoQ3R4LlByb3ZpZGVyIHZhbHVlPXtkaXNwYXRjaH0+XHJcbiAgICAgICAgPHN0YXRlQ3R4LlByb3ZpZGVyIHZhbHVlPXtzdGF0ZX0+e2NoaWxkcmVufTwvc3RhdGVDdHguUHJvdmlkZXI+XHJcbiAgICAgIDwvZGlzcGF0Y2hDdHguUHJvdmlkZXI+XHJcbiAgICApO1xyXG4gIH1cclxuICByZXR1cm4gW3VzZVN0YXRlQ3R4LCB1c2VEaXNwYXRjaEN0eCwgUHJvdmlkZXJdO1xyXG59XHJcbiIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgY29uc3QgRHJhd2VyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30pO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRHJhd2VyQ29udGV4dCB9IGZyb20gJy4vZHJhd2VyLmNvbnRleHQnO1xyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgaXNPcGVuOiBmYWxzZSxcclxufTtcclxuXHJcbmZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUsIGFjdGlvbikge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgJ1RPR0dMRSc6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaXNPcGVuOiAhc3RhdGUuaXNPcGVuLFxyXG4gICAgICB9O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufVxyXG5leHBvcnQgY29uc3QgRHJhd2VyUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxTdGF0ZSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxEcmF3ZXJDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHN0YXRlLCBkaXNwYXRjaCB9fT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9EcmF3ZXJDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCB7IFN0aWNreVByb3ZpZGVyIH0gZnJvbSAnY29udGV4dHMvYXBwL2FwcC5wcm92aWRlcic7XHJcbmltcG9ydCB0aGVtZSBmcm9tICd0aGVtZSc7XHJcbmltcG9ydCBTRU8gZnJvbSAnY29tcG9uZW50cy9zZW8nO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJ2NvbXBvbmVudHMvbGF5b3V0JztcclxuaW1wb3J0IEJhbm5lciBmcm9tICdzZWN0aW9ucy9iYW5uZXInO1xyXG5pbXBvcnQgS2V5RmVhdHVyZSBmcm9tICdzZWN0aW9ucy9rZXktZmVhdHVyZSc7XHJcbmltcG9ydCBDb3JlRmVhdHVyZSBmcm9tICdzZWN0aW9ucy9jb3JlLWZlYXR1cmUnO1xyXG5pbXBvcnQgRmVhdHVyZSBmcm9tICdzZWN0aW9ucy9mZWF0dXJlJztcclxuaW1wb3J0IFBhcnRuZXJTZWN0aW9uIGZyb20gJ3NlY3Rpb25zL3BhcnRuZXInO1xyXG5pbXBvcnQgV29ya0Zsb3cgZnJvbSAnc2VjdGlvbnMvd29ya2Zsb3cnO1xyXG5pbXBvcnQgVGVzdGltb25pYWxDYXJkIGZyb20gJ3NlY3Rpb25zL3Rlc3RpbW9uaWFsJztcclxuaW1wb3J0IFNlY3VyZVBheW1lbnQgZnJvbSAnc2VjdGlvbnMvc2VjdXJlLXBheW1lbnQnO1xyXG5pbXBvcnQgUGFja2FnZSBmcm9tICdzZWN0aW9ucy9wYWNrYWdlJztcclxuaW1wb3J0IEZhcSBmcm9tICdzZWN0aW9ucy9mYXEnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXhQYWdlKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxyXG4gICAgICA8U3RpY2t5UHJvdmlkZXI+XHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgIDxTRU8gdGl0bGU9XCJTdGFydHVwIExhbmRpbmcgMDA0XCIgLz5cclxuICAgICAgICAgIDxCYW5uZXIgLz5cclxuICAgICAgICAgIDxLZXlGZWF0dXJlIC8+XHJcbiAgICAgICAgICA8Q29yZUZlYXR1cmUgLz5cclxuICAgICAgICAgIDxGZWF0dXJlIC8+XHJcbiAgICAgICAgICA8UGFydG5lclNlY3Rpb24gLz5cclxuICAgICAgICAgIDxXb3JrRmxvdyAvPlxyXG4gICAgICAgICAgPFRlc3RpbW9uaWFsQ2FyZCAvPlxyXG4gICAgICAgICAgPFNlY3VyZVBheW1lbnQgLz5cclxuICAgICAgICAgIDxQYWNrYWdlIC8+XHJcbiAgICAgICAgICA8RmFxIC8+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgIDwvU3RpY2t5UHJvdmlkZXI+XHJcbiAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4IH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIEZsZXgsIEJveCwgSGVhZGluZywgVGV4dCwgSW1hZ2UsIEJ1dHRvbiB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTW9kYWxWaWRlbyBmcm9tICdyZWFjdC1tb2RhbC12aWRlbyc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdjb21wb25lbnRzL2xpbmsnO1xyXG5pbXBvcnQgeyBGYVBsYXlDaXJjbGUgfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XHJcbmltcG9ydCBCYW5uZXJCRyBmcm9tICdhc3NldHMvYmFubmVyQmcucG5nJztcclxuaW1wb3J0IEJhbm5lclRodW1iIGZyb20gJ2Fzc2V0cy9iYW5uZXItdGh1bWIucG5nJztcclxuXHJcbmltcG9ydCBjbGllbnQxIGZyb20gJ2Fzc2V0cy9zcG9uc29yL3BheXBhbC5zdmcnO1xyXG5pbXBvcnQgY2xpZW50MiBmcm9tICdhc3NldHMvc3BvbnNvci9nb29nbGUuc3ZnJztcclxuaW1wb3J0IGNsaWVudDMgZnJvbSAnYXNzZXRzL3Nwb25zb3IvZHJvcGJveC5zdmcnO1xyXG5cclxuY29uc3QgZGF0YSA9IFtcclxuICB7XHJcbiAgICBpZDogMSxcclxuICAgIHBhdGg6ICcjJyxcclxuICAgIGltYWdlOiBjbGllbnQxLFxyXG4gICAgdGl0bGU6ICdwYXlwYWwnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDIsXHJcbiAgICBwYXRoOiAnIycsXHJcbiAgICBpbWFnZTogY2xpZW50MixcclxuICAgIHRpdGxlOiAnZ29vZ2xlJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAzLFxyXG4gICAgcGF0aDogJyMnLFxyXG4gICAgaW1hZ2U6IGNsaWVudDMsXHJcbiAgICB0aXRsZTogJ2Ryb3Bib3gnLFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCYW5uZXIoKSB7XHJcbiAgY29uc3QgW3ZpZGVvT3Blbiwgc2V0VmlkZW9PcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRWaWRlb09wZW4odHJ1ZSk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gc3g9e3N0eWxlcy5iYW5uZXJ9IGlkPVwiaG9tZVwiPlxyXG4gICAgICA8Q29udGFpbmVyIHN4PXtzdHlsZXMuYmFubmVyLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgPEJveCBzeD17c3R5bGVzLmJhbm5lci5jb250ZW50Qm94fT5cclxuICAgICAgICAgIDxIZWFkaW5nIGFzPVwiaDFcIiB2YXJpYW50PVwiaGVyb1ByaW1hcnlcIj5cclxuICAgICAgICAgIERpc2NvdmVyIFJlYWwtdGltZSBLbm93bGVkZ2Ugd2l0aCBleHBlcnRzXHJcbiAgICAgICAgICA8L0hlYWRpbmc+XHJcbiAgICAgICAgICA8VGV4dCBhcz1cInBcIiB2YXJpYW50PVwiaGVyb1NlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICBHZXQgcHVtcGVkIHVwIGFuZCBib29zdCB5b3VyIGNhcnJpZXIgd2l0aCBsZWFybmluZyBpbmR1c3RyeSBza2lsbHMgLCB3b3JrIG9uIHJlYWwgbGlmZSBwcm9qZWN0cywgaW50ZXJuc2hpcHMgYW5kIG11Y2ggbW9yZSAuXHJcbiAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICA8RmxleD5cclxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwid2hpdGVCdXR0b25cIiBhcmlhLWxhYmVsPVwiR2V0IFN0YXJ0ZWRcIj5cclxuICAgICAgICAgICAgIEdldCBTdGFydGVkXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxNb2RhbFZpZGVvXHJcbiAgICAgICAgICAgICAgICBjaGFubmVsPVwieW91dHViZVwiXHJcbiAgICAgICAgICAgICAgICBpc09wZW49e3ZpZGVvT3Blbn1cclxuICAgICAgICAgICAgICAgIHZpZGVvSWQ9XCJaTkE5cm1Ec1lWRVwiXHJcbiAgICAgICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRWaWRlb09wZW4oZmFsc2UpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cInRleHRCdXR0b25cIlxyXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIldhdGNoIFZpZGVvXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxGYVBsYXlDaXJjbGUgLz4gV2F0Y2ggVmlkZW9cclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICA8RmxleCBzeD17c3R5bGVzLnNwb25zb3JCb3h9PlxyXG4gICAgICAgICAgICA8VGV4dCBzeD17c3R5bGVzLnNwb25zb3JUaXRsZX0+U3BvbnNvcmVkIGJ5OjwvVGV4dD5cclxuICAgICAgICAgICAgPEJveCBzeD17c3R5bGVzLnNwb25zb3JCb3guc3BvbnNvcn0+XHJcbiAgICAgICAgICAgICAge2RhdGEubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPExpbmsgcGF0aD17aXRlbS5wYXRofSBrZXk9e2BjbGllbnQta2V5JHtpbmRleH1gfT5cclxuICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17aXRlbS5pbWFnZX0gYWx0PXtpdGVtLnRpdGxlfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICA8L0JveD5cclxuXHJcbiAgICAgICAgPEJveCBzeD17c3R5bGVzLmJhbm5lci5pbWFnZUJveH0+XHJcbiAgICAgICAgICA8SW1hZ2Ugc3JjPXtCYW5uZXJUaHVtYn0gYWx0PVwiYmFubmVyXCIgLz5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGJhbm5lcjoge1xyXG4gICAgb3ZlcmZsb3c6IFsnaGlkZGVuJywgJ2luaXRpYWwnLCBudWxsLCAnaGlkZGVuJ10sXHJcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtCYW5uZXJCR30pYCxcclxuICAgIGJhY2tncm91bmRSZXBlYXQ6IGBuby1yZXBlYXRgLFxyXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiAndG9wIGxlZnQnLFxyXG4gICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXHJcbiAgICBib3JkZXJCb3R0b21SaWdodFJhZGl1czogWzEwMCwgMTUwLCBudWxsLCBudWxsLCBudWxsLCAyNTBdLFxyXG4gICAgcHQ6IFsnMTUwcHgnLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAnMTQwcHgnLCAnMTMwcHgnXSxcclxuICAgIHBiOiBbJzEwMHB4JywgbnVsbCwgbnVsbCwgJzExMHB4JywgbnVsbCwgMTAsICcxNTBweCddLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAncHJpbWFyeScsXHJcbiAgICBjb250YWluZXI6IHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgfSxcclxuICAgIGNvbnRlbnRCb3g6IHtcclxuICAgICAgd2lkdGg6IFsnMTAwJScsIG51bGwsICc4NSUnLCAnNTUlJywgJzUwJScsICc1NSUnXSxcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAgYWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnLFxyXG4gICAgICBmbGV4U2hyaW5rOiAwLFxyXG4gICAgICBwdDogWzAsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDUsIDddLFxyXG4gICAgfSxcclxuICAgIGltYWdlQm94OiB7XHJcbiAgICAgIGRpc3BsYXk6IFsnbm9uZScsIG51bGwsIG51bGwsICdibG9jayddLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgIG1sOiBbMCwgbnVsbCwgbnVsbCwgJy0xMTBweCcsICctMTE1cHgnLCAnLTE1MHB4JywgJy0yMTBweCcsICctMjcwcHgnXSxcclxuICAgICAgbXI6IFswLCBudWxsLCBudWxsLCAnLTE0NXB4JywgJy0xNjBweCcsICctMTgwcHgnLCAnLTIyMHB4JywgJy0yOTBweCddLFxyXG4gICAgICBtdDogWzAsIG51bGwsIG51bGwsICc0MHB4JywgNCwgNywgMF0sXHJcbiAgICAgIG1iOiBbMCwgbnVsbCwgbnVsbCwgbnVsbCwgJy00NXB4JywgJy03MHB4JywgbnVsbCwgJy0xMTVweCddLFxyXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICAgIHRleHRBbGlnbjogJ3JpZ2h0JyxcclxuICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBzcG9uc29yVGl0bGU6IHtcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgZm9udFNpemU6IFsxLCAyXSxcclxuICAgIG9wYWNpdHk6IDAuNixcclxuICAgIHByOiAyMCxcclxuICAgIGZsZXhTaHJpbms6IDAsXHJcbiAgICBwYjogWzIsIG51bGwsIDBdLFxyXG4gIH0sXHJcbiAgc3BvbnNvckJveDoge1xyXG4gICAgcHQ6IFsnMzVweCcsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICc0NXB4J10sXHJcbiAgICBmbGV4RGlyZWN0aW9uOiBbJ2NvbHVtbicsIG51bGwsICdyb3cnXSxcclxuICAgIHNwb25zb3I6IHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgJz4gYSc6IHtcclxuICAgICAgICBtcjogWzUsIG51bGwsIG51bGwsIDQsIDZdLFxyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAnJjpsYXN0LW9mLXR5cGUnOiB7XHJcbiAgICAgICAgICBtcjogMCxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4LCBDb250YWluZXIsIEJveCwgR3JpZCwgVGV4dCwgSGVhZGluZyB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IFRleHRGZWF0dXJlIGZyb20gJ2NvbXBvbmVudHMvdGV4dC1mZWF0dXJlJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ2NvbXBvbmVudHMvaW1hZ2UnO1xyXG5cclxuaW1wb3J0IENvcmVGZWF0dXJlVGh1bWIgZnJvbSAnYXNzZXRzL2NvcmVGZWF0dXJlLnBuZyc7XHJcbmltcG9ydCBCcmllZmNhc2UgZnJvbSAnYXNzZXRzL2NvcmUtZmVhdHVyZS9icmllZmNhc2Uuc3ZnJztcclxuaW1wb3J0IFNlY3VyZSBmcm9tICdhc3NldHMvY29yZS1mZWF0dXJlL3NlY3VyZS5zdmcnO1xyXG5cclxuY29uc3QgZGF0YSA9IHtcclxuICBzdWJUaXRsZTogJ0NvcmUgZmVhdHVyZXMnLFxyXG4gIHRpdGxlOiAnTGVhcm4sUHJhY3RpY2UgYW5kIFBsYWNlZCcsXHJcbiAgZmVhdHVyZXM6IFtcclxuICAgIHtcclxuICAgICAgaWQ6IDEsXHJcbiAgICAgIGltZ1NyYzogQnJpZWZjYXNlLFxyXG4gICAgICBhbHRUZXh0OiAnTWVudG9yc2hpcCcsXHJcbiAgICAgIHRpdGxlOiAnTWVudG9yc2hpcCcsXHJcbiAgICAgIHRleHQ6XHJcbiAgICAgICAgJ0dldCBtZW50b3JzaGlwIGF0IGVhY2ggcGhhc2Ugb2YgeW91ciBsZWFybmluZyBhbmQgbGVhcm4gdGhlIHJpZ2h0IHdheSAnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDIsXHJcbiAgICAgIGltZ1NyYzogU2VjdXJlLFxyXG4gICAgICBhbHRUZXh0OiAnV29ybGQgQ2xhc3MgVHJhaW5pbmcnLFxyXG4gICAgICB0aXRsZTogJ1RyYWluaW5nIENhbXBzJyxcclxuICAgICAgdGV4dDpcclxuICAgICAgICAnQSByZWFsdGltZSBsZWFybmluZyBhbmQgcHJhY3RpbmcgdHJhaW5naW5nIGNhbXBzIHdpdGggbGl2ZSBtZW50b3JzaGlwIGFuZCB0cmFuaW5nIHRvIGJvb3N0IHlvdXIgbGVhcm5pbmcgYW5kIHJlZHVjZSBsZWFybmluZyB0aW1lJyxcclxuICAgIH0sXHJcbiAgXSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvcmVGZWF0dXJlKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBzeD17c3R5bGVzLmNvcmVGZWF0dXJlfT5cclxuICAgICAgPENvbnRhaW5lciBzeD17c3R5bGVzLmNvbnRhaW5lckJveH0+XHJcbiAgICAgICAgPEJveCBzeD17c3R5bGVzLnRodW1ibmFpbH0+XHJcbiAgICAgICAgICA8SW1hZ2Ugc3JjPXtDb3JlRmVhdHVyZVRodW1ifSBhbHQ9XCJUaHVtYm5haWxcIiAvPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICAgIDxCb3ggc3g9e3N0eWxlcy5jb250ZW50Qm94fT5cclxuICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5oZWFkaW5nVG9wfT5cclxuICAgICAgICAgICAgPFRleHRGZWF0dXJlIHN1YlRpdGxlPXtkYXRhLnN1YlRpdGxlfSB0aXRsZT17ZGF0YS50aXRsZX0gLz5cclxuICAgICAgICAgIDwvQm94PlxyXG5cclxuICAgICAgICAgIDxHcmlkIGdhcD1cIjE1cHggMFwiIGNvbHVtbnM9ezF9IHN4PXtzdHlsZXMuZ3JpZH0+XHJcbiAgICAgICAgICAgIHtkYXRhLmZlYXR1cmVzLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5jYXJkfSBrZXk9e2l0ZW0uaWR9PlxyXG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz17aXRlbS5pbWdTcmN9IGFsdD17aXRlbS5hbHRUZXh0fSBzeD17c3R5bGVzLmltZ30gLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMud3JhcHBlcn0+XHJcbiAgICAgICAgICAgICAgICAgIDxIZWFkaW5nIHN4PXtzdHlsZXMud3JhcHBlci50aXRsZX0+e2l0ZW0udGl0bGV9PC9IZWFkaW5nPlxyXG4gICAgICAgICAgICAgICAgICA8VGV4dCBzeD17c3R5bGVzLndyYXBwZXIuc3ViVGl0bGV9PntpdGVtLnRleHR9PC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgY29yZUZlYXR1cmU6IHtcclxuICAgIHB5OiBbMCwgbnVsbCwgbnVsbCwgMiwgbnVsbCwgN10sXHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICcmOjpiZWZvcmUnOiB7XHJcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICBjb250ZW50OiAnXCJcIicsXHJcbiAgICAgIHRvcDogWydhdXRvJywgbnVsbCwgbnVsbCwgJzUwJSddLFxyXG4gICAgICBib3R0b206IFsnMTAwcHgnLCAwLCBudWxsLCAnYXV0byddLFxyXG4gICAgICBsZWZ0OiAwLFxyXG4gICAgICBiYWNrZ3JvdW5kOiAnbGluZWFyLWdyYWRpZW50KC0xNTdkZWcsICNGNkZBRkQsICNGOUZDRkMsICNGQ0ZERkMpJyxcclxuICAgICAgaGVpZ2h0OiBbMzUwLCA1NTAsICc2MCUnXSxcclxuICAgICAgd2lkdGg6ICc1MCUnLFxyXG4gICAgICB6SW5kZXg6IC0xLFxyXG4gICAgICBib3JkZXJUb3BSaWdodFJhZGl1czogJzUwJScsXHJcbiAgICAgIGJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzOiAnNTAlJyxcclxuICAgICAgdHJhbnNmb3JtOiBbJ3RyYW5zbGF0ZVkoMCknLCBudWxsLCBudWxsLCAndHJhbnNsYXRlWSgtNTAlKSddLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGNvbnRhaW5lckJveDoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gICAgZmxleERpcmVjdGlvbjogWydjb2x1bW4nLCBudWxsLCBudWxsLCAncm93J10sXHJcbiAgfSxcclxuICB0aHVtYm5haWw6IHtcclxuICAgIHBsOiBbMCwgNSwgMCwgbnVsbCwgNywgOTVdLFxyXG4gICAgcHI6IFswLCA1LCBudWxsLCBudWxsLCBudWxsLCA3NSwgOTVdLFxyXG4gICAgb3JkZXI6IFsyLCBudWxsLCBudWxsLCAwXSxcclxuICB9LFxyXG4gIGNvbnRlbnRCb3g6IHtcclxuICAgIHdpZHRoOiBbJzEwMCUnLCA0NTAsIDU1MCwgMzUwLCA1MDAsIDU3MF0sXHJcbiAgICBwcjogWzAsIG51bGwsICdhdXRvJywgbnVsbCwgbnVsbCwgODBdLFxyXG4gICAgcGw6ICdhdXRvJyxcclxuICAgIGZsZXhTaHJpbms6IDAsXHJcbiAgfSxcclxuICBoZWFkaW5nVG9wOiB7XHJcbiAgICBwbDogWzAsIG51bGwsIG51bGwsIG51bGwsICczNXB4JywgbnVsbCwgJzU1cHgnLCA2XSxcclxuICAgIG1iOiBbMywgbnVsbCwgbnVsbCwgbnVsbCwgMV0sXHJcbiAgICB0ZXh0QWxpZ246IFsnY2VudGVyJywgbnVsbCwgbnVsbCwgJ2xlZnQnXSxcclxuICB9LFxyXG4gIGdyaWQ6IHtcclxuICAgIHA6IFsnMCAwcHggMzVweCcsIG51bGwsIG51bGwsIG51bGwsICcwIDIwcHggNDBweCcsIG51bGwsICcwIDQwcHggNDBweCcsIDBdLFxyXG4gIH0sXHJcbiAgY2FyZDoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnLFxyXG4gICAgcDogW1xyXG4gICAgICAnMCAxN3B4IDIwcHgnLFxyXG4gICAgICBudWxsLFxyXG4gICAgICBudWxsLFxyXG4gICAgICAnMCAwIDIwcHgnLFxyXG4gICAgICAnMjBweCAxNXB4IDE3cHgnLFxyXG4gICAgICBudWxsLFxyXG4gICAgICBudWxsLFxyXG4gICAgICAnMjVweCAzMHB4IDIzcHgnLFxyXG4gICAgXSxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcclxuICAgIGJvcmRlclJhZGl1czogJzEwcHgnLFxyXG4gICAgdHJhbnNpdGlvbjogJ2FsbCAwLjNzJyxcclxuICAgIHdpZHRoOiBbJzEwMCUnLCAnODUlJywgbnVsbCwgJzEwMCUnXSxcclxuICAgIG14OiAnYXV0bycsXHJcbiAgICAnJjpob3Zlcic6IHtcclxuICAgICAgYm94U2hhZG93OiBbXHJcbiAgICAgICAgJzBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMCknLFxyXG4gICAgICAgIG51bGwsXHJcbiAgICAgICAgbnVsbCxcclxuICAgICAgICBudWxsLFxyXG4gICAgICAgICcwcHggOHB4IDI0cHggcmdiYSg2OSwgODgsIDE1NywgMC4wNyknLFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICBpbWc6IHtcclxuICAgIHdpZHRoOiBbJzUwcHgnLCBudWxsLCAnNTVweCddLFxyXG4gICAgaGVpZ2h0OiAnYXV0bycsXHJcbiAgICBmbGV4U2hyaW5rOiAwLFxyXG4gICAgbXI6IFszLCA0XSxcclxuICB9LFxyXG4gIHdyYXBwZXI6IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIG10OiAnLTVweCcsXHJcbiAgICB0aXRsZToge1xyXG4gICAgICBmb250U2l6ZTogMyxcclxuICAgICAgY29sb3I6ICdoZWFkaW5nX3NlY29uZGFyeScsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IDEuNCxcclxuICAgICAgZm9udFdlaWdodDogNzAwLFxyXG4gICAgICBtYjogWzIsIG51bGwsIG51bGwsIG51bGwsIDNdLFxyXG4gICAgfSxcclxuXHJcbiAgICBzdWJUaXRsZToge1xyXG4gICAgICBmb250U2l6ZTogMSxcclxuICAgICAgZm9udFdlaWdodDogNDAwLFxyXG4gICAgICBsaW5lSGVpZ2h0OiBbMS44NSwgbnVsbCwgMl0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3gsIENvbnRhaW5lciwgQm94IH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgU2VjdGlvbkhlYWRlciBmcm9tICdjb21wb25lbnRzL3NlY3Rpb24taGVhZGVyJztcclxuaW1wb3J0IEFjY29yZGlvbiBmcm9tICdjb21wb25lbnRzL2FjY29yZGlvbi9hY2NvcmRpb24nO1xyXG5jb25zdCBmYXFzID0gW1xyXG4gIHtcclxuICAgIHRpdGxlOiAnSG93IHRvIGNvbnRhY3Qgd2l0aCByaWRlcnMgZW1lcmdlbmN5ID8nLFxyXG4gICAgY29udGVudHM6IChcclxuICAgICAgPGRpdj5cclxuICAgICAgICBHZXQgeW91ciB3ZWJzaXRlIGFkcyB0ZXN0cyBkZWxpdmVyZWQgYXQgbGV0IGNvbGxlY3Qgc2FtcGxlIGZyb20gdGhlXHJcbiAgICAgICAgdmljdG9yeSBvZiB0aGUgbWFuYWdlbWVudHMgdGhhdCBzdXBwbGllcyBiZXN0IGRlc2lnbiBzeXN0ZW0gd2hpY2hcclxuICAgICAgICBndWlkZWxpbmVzIGV2ZXIgd2l0aCBtdWx0aXBsZSBmZWF0dXJlcy5cclxuICAgICAgPC9kaXY+XHJcbiAgICApLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdBcHAgaW5zdGFsbGF0aW9uIGZhaWxlZCwgaG93IHRvIHVwZGF0ZSBzeXN0ZW0gaW5mb3JtYXRpb24/JyxcclxuICAgIGNvbnRlbnRzOiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgUmhpbm8gc2tpbiBtYXliZSB0aGljayBidXQgaXQgY2FuIGJlIHF1aXRlIHNlbnNpdGl2ZSB0byBzdW5idXJucyBhbmRcclxuICAgICAgICBpbnNlY3QgYml0ZXMgd2hpY2ggaXMgd2h5IHRoZXkgbGlrZSB3YWxsb3cgc28gbXVjaCDigJMgd2hlbiB0aGUgbXVkIGRyaWVzXHJcbiAgICAgICAgaXQgYWN0cyBhcyBwcm90ZWN0aW9uIGZyb20gdGhlIHN1bmJ1cm5zIGFuZCBpbnNlY3RzLlxyXG4gICAgICA8L2Rpdj5cclxuICAgICksXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogYFdlYnNpdGUgcmVzcG9uc2UgdGFraW5nIHRpbWUsIGhvdyB0byBpbXByb3ZlP2AsXHJcbiAgICBjb250ZW50czogKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIEdldCB5b3VyIGJsb29kIHRlc3RzIGRlbGl2ZXJlZCBhdCB0aGUgaG9tZSBjb2xsZWN0IGEgc2FtcGxlIGZyb21cclxuICAgICAgICBtYW5hZ2VtZW50IG5ld3MuIEdldCB5b3VyIGJsb29kIHRlc3RzIGRlbGl2ZXJlZCBhdCB0aGUgaG9tZSBjb2xsZWN0IGFcclxuICAgICAgICBzYW1wbGUgZnJvbSBtYW5hZ2VtZW50IG5ld3MuIEdldCB5b3VyIGJsb29kIHRlc3RzIGRlbGl2ZXJlZCBhdCB0aGUgaG9tZVxyXG4gICAgICAgIGNvbGxlY3QgYSBzYW1wbGUgZnJvbSBtYW5hZ2VtZW50IG5ld3MuIEdldCB5b3VyIGJsb29kIHRlc3RzIGRlbGl2ZXJlZCBhdFxyXG4gICAgICAgIHRoZSBob21lLlxyXG4gICAgICA8L2Rpdj5cclxuICAgICksXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogYE5ldyB1cGRhdGUgZml4ZWQgYWxsIGJ1ZyBhbmQgaXNzdWVzYCxcclxuICAgIGNvbnRlbnRzOiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgSWYgeW914oCZcmUgbG9va2luZyB0byBodW50IGEgdW5pY29ybiwgYnV0IGRvbuKAmXQga25vdyB3aGVyZSB0byBiZWdpbiwgdHJ5XHJcbiAgICAgICAgTGFrZSBTdXBlcmlvciBTdGF0ZSBVbml2ZXJzaXR5IGluIFNhdWx0IFN0ZS4gTWFyaWUsIE1pY2hpZ2FuLiBTaW5jZVxyXG4gICAgICAgIDE5NzEsIHRoZSB1bml2ZXJzaXR5IGhhcyBpc3N1ZWQgcGVybWl0cyB0byB1bmljb3JuIHF1ZXN0ZXJzLlxyXG4gICAgICA8L2Rpdj5cclxuICAgICksXHJcbiAgfSxcclxuXTtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmFxKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBzeD17eyB2YXJpYW50OiAnc2VjdGlvbi5mYXEnIH19PlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxTZWN0aW9uSGVhZGVyXHJcbiAgICAgICAgICB0aXRsZT1cIkZyZXF1ZW50bHkgYXNrZWQgcXVlc3Rpb25cIlxyXG4gICAgICAgICAgc2xvZ2FuPVwiR2V0IHlvdXIgcXVlc3Rpb24gYW5zd2VyXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxCb3hcclxuICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgd2lkdGg6IFsnMTAwJScsIG51bGwsIG51bGwsICc2NTBweCcsICc3NDVweCddLFxyXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAgICAgICAgbXg6ICdhdXRvJyxcclxuICAgICAgICAgICAgbXk6IC00LFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8QWNjb3JkaW9uIGl0ZW1zPXtmYXFzfSAvPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3ggfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgR3JpZCB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IFNlY3Rpb25IZWFkZXIgZnJvbSAnY29tcG9uZW50cy9zZWN0aW9uLWhlYWRlcic7XHJcbmltcG9ydCBGZWF0dXJlQ2FyZCBmcm9tICdjb21wb25lbnRzL2ZlYXR1cmUtY2FyZC5qcyc7XHJcbmltcG9ydCBTbWFydCBmcm9tICdhc3NldHMvZmVhdHVyZS9zbWFydC5zdmcnO1xyXG5pbXBvcnQgV2lubmVyIGZyb20gJ2Fzc2V0cy9mZWF0dXJlL3dpbm5lci5zdmcnO1xyXG5pbXBvcnQgQ2xvdWQgZnJvbSAnYXNzZXRzL2ZlYXR1cmUvY2xvdWQuc3ZnJztcclxuaW1wb3J0IFNldHRpbmcgZnJvbSAnYXNzZXRzL2ZlYXR1cmUvc2V0dGluZy5zdmcnO1xyXG5pbXBvcnQgRGVzaWduIGZyb20gJ2Fzc2V0cy9mZWF0dXJlL2Rlc2lnbi5zdmcnO1xyXG5pbXBvcnQgQ2hhdCBmcm9tICdhc3NldHMvZmVhdHVyZS9jaGF0LnN2Zyc7XHJcblxyXG5jb25zdCBkYXRhID0gW1xyXG4gIHtcclxuICAgIGlkOiAxLFxyXG4gICAgaW1nU3JjOiBTbWFydCxcclxuICAgIGFsdFRleHQ6ICdTbWFydCcsXHJcbiAgICB0aXRsZTogJ1NtYXJ0IEZlYXR1cmVzJyxcclxuICAgIHRleHQ6XHJcbiAgICAgICdHZXQgeW91ciBibG9vZCB0ZXN0cyBkZWxpdmVyZWQgYXQgbGV0IGhvbWUgY29sbGVjdCBzYW1wbGUgZnJvbSB0aGUgdmljdG9yeSBvZiB0aGUgbWFuYWdlbWVudHMuJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAyLFxyXG4gICAgaW1nU3JjOiBXaW5uZXIsXHJcbiAgICBhbHRUZXh0OiAnUGVyZm9ybWFuY2UnLFxyXG4gICAgdGl0bGU6ICdGYXN0IFBlcmZvcm1hbmNlJyxcclxuICAgIHRleHQ6XHJcbiAgICAgICdHZXQgeW91ciBibG9vZCB0ZXN0cyBkZWxpdmVyZWQgYXQgbGV0IGhvbWUgY29sbGVjdCBzYW1wbGUgZnJvbSB0aGUgdmljdG9yeSBvZiB0aGUgbWFuYWdlbWVudHMuJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAzLFxyXG4gICAgaW1nU3JjOiBDbG91ZCxcclxuICAgIGFsdFRleHQ6ICdDb250ZW50JyxcclxuICAgIHRpdGxlOiAnVW5saW1pdGVkIENvbnRlbnQnLFxyXG4gICAgdGV4dDpcclxuICAgICAgJ0dldCB5b3VyIGJsb29kIHRlc3RzIGRlbGl2ZXJlZCBhdCBsZXQgaG9tZSBjb2xsZWN0IHNhbXBsZSBmcm9tIHRoZSB2aWN0b3J5IG9mIHRoZSBtYW5hZ2VtZW50cy4nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDQsXHJcbiAgICBpbWdTcmM6IFNldHRpbmcsXHJcbiAgICBhbHRUZXh0OiAnQ3VzdG9taXphdGlvbicsXHJcbiAgICB0aXRsZTogJ1VubGltaXRlZCBDdXN0b21pemF0aW9uJyxcclxuICAgIHRleHQ6XHJcbiAgICAgICdHZXQgeW91ciBibG9vZCB0ZXN0cyBkZWxpdmVyZWQgYXQgbGV0IGhvbWUgY29sbGVjdCBzYW1wbGUgZnJvbSB0aGUgdmljdG9yeSBvZiB0aGUgbWFuYWdlbWVudHMuJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA1LFxyXG4gICAgaW1nU3JjOiBEZXNpZ24sXHJcbiAgICBhbHRUZXh0OiAnUHJvZHVjdGl2aXR5JyxcclxuICAgIHRpdGxlOiAnQm9vc3QgUHJvZHVjdGl2aXR5JyxcclxuICAgIHRleHQ6XHJcbiAgICAgICdHZXQgeW91ciBibG9vZCB0ZXN0cyBkZWxpdmVyZWQgYXQgbGV0IGhvbWUgY29sbGVjdCBzYW1wbGUgZnJvbSB0aGUgdmljdG9yeSBvZiB0aGUgbWFuYWdlbWVudHMuJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA2LFxyXG4gICAgaW1nU3JjOiBDaGF0LFxyXG4gICAgYWx0VGV4dDogJ1N1cHBvcnQnLFxyXG4gICAgdGl0bGU6ICdDdXN0b21lciBTdXBwb3J0JyxcclxuICAgIHRleHQ6XHJcbiAgICAgICdHZXQgeW91ciBibG9vZCB0ZXN0cyBkZWxpdmVyZWQgYXQgbGV0IGhvbWUgY29sbGVjdCBzYW1wbGUgZnJvbSB0aGUgdmljdG9yeSBvZiB0aGUgbWFuYWdlbWVudHMuJyxcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmVhdHVyZSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gc3g9e3sgdmFyaWFudDogJ3NlY3Rpb24uZmVhdHVyZScgfX0+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPFNlY3Rpb25IZWFkZXJcclxuICAgICAgICAgIHNsb2dhbj1cIlF1YWxpdHkgZmVhdHVyZXNcIlxyXG4gICAgICAgICAgdGl0bGU9XCJNZWV0IGV4Y2l0aW5nIGZlYXR1cmUgb2YgYXBwXCJcclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8R3JpZCBzeD17c3R5bGVzLmdyaWR9PlxyXG4gICAgICAgICAge2RhdGEubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgIDxGZWF0dXJlQ2FyZFxyXG4gICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cclxuICAgICAgICAgICAgICBzcmM9e2l0ZW0uaW1nU3JjfVxyXG4gICAgICAgICAgICAgIGFsdD17aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICB0aXRsZT17aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICB0ZXh0PXtpdGVtLnRleHR9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBncmlkOiB7XHJcbiAgICBwdDogWzAsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDNdLFxyXG4gICAgZ3JpZEdhcDogW1xyXG4gICAgICAnMzdweCAwJyxcclxuICAgICAgbnVsbCxcclxuICAgICAgJzQ1cHggMzBweCcsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgICc1MHB4IDMwcHgnLFxyXG4gICAgICBudWxsLFxyXG4gICAgICBudWxsLFxyXG4gICAgICAnOTBweCA3MHB4JyxcclxuICAgIF0sXHJcbiAgICB3aWR0aDogWycxMDAlJywgJzgwJScsICcxMDAlJ10sXHJcbiAgICBteDogJ2F1dG8nLFxyXG4gICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogW1xyXG4gICAgICAncmVwZWF0KDEsMWZyKScsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgICdyZXBlYXQoMiwxZnIpJyxcclxuICAgICAgbnVsbCxcclxuICAgICAgJ3JlcGVhdCgzLDFmciknLFxyXG4gICAgXSxcclxuICB9LFxyXG59O1xyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4IH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIEdyaWQgfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCBTZWN0aW9uSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvc2VjdGlvbi1oZWFkZXInO1xyXG5pbXBvcnQgRmVhdHVyZUNhcmRDb2x1bW4gZnJvbSAnY29tcG9uZW50cy9mZWF0dXJlLWNhcmQtY29sdW1uLmpzJztcclxuaW1wb3J0IFZlY3RvciBmcm9tICdhc3NldHMva2V5LWZlYXR1cmUvdmVjdG9yLnN2Zyc7XHJcbmltcG9ydCBFZGl0aW5nIGZyb20gJ2Fzc2V0cy9rZXktZmVhdHVyZS9lZGl0aW5nLnN2Zyc7XHJcbmltcG9ydCBTcGVlZCBmcm9tICdhc3NldHMva2V5LWZlYXR1cmUvc3BlZWQuc3ZnJztcclxuXHJcbmNvbnN0IGRhdGEgPSBbXHJcbiAge1xyXG4gICAgaWQ6IDEsXHJcbiAgICBpbWdTcmM6IFZlY3RvcixcclxuICAgIGFsdFRleHQ6ICdFeGNlcHRpb25hbCBGYWN1bHR5ICcsXHJcbiAgICB0aXRsZTogJ0V4Y2VwdGlvbmFsIEZhY3VsdHknLFxyXG4gICAgdGV4dDpcclxuICAgICAgJ091ciBmYWN1bHR5IGlzIGZyb20gdGhlIGJlc3QgaW5zdGl0dXRlcy4gVGhleSBhbHNvIGhhdmUgd29yayBleHBlcmllbmNlIGluIHRlY2ggZ2lhbnRzIHdoaWNoIG1ha2VzIHRoZW0gZXhjZXB0aW9uYWwuJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAyLFxyXG4gICAgaW1nU3JjOiBFZGl0aW5nLFxyXG4gICAgYWx0VGV4dDogJ01lbnRvciBTdXBwb3J0JyxcclxuICAgIHRpdGxlOiAnTWVudG9yIFN1cHBvcnQnLFxyXG4gICAgdGV4dDpcclxuICAgICAgJ0FuIGluY3JlZGlibGUgbWVudG9yIHN1cHBvcnQgaXMgcHJvdmlkZWQgd2hlcmUgMSB0ZWFjaGluZyBhc3Npc3RhbnQgaXMgYXNzaWduZWQgdG8gMTAgc3R1ZGVudHMuIFRoZSBUQeKAmXMgYXJlIHRvcCBwZXJmb3JtZXJzIGFsdW1uaSBkZWRpY2F0ZWQgdG8gc3VwcG9ydCBhbmQgY2xlYXIgZG91YnRzIGF0IGFueSBwb2ludCBvZiB0aW1lLicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMyxcclxuICAgIGltZ1NyYzogU3BlZWQsXHJcbiAgICBhbHRUZXh0OiAnQ291cnNlIGN1cnJpY3VsdW0nLFxyXG4gICAgdGl0bGU6ICdDb3Vyc2UgY3VycmljdWx1bScsXHJcbiAgICB0ZXh0OlxyXG4gICAgICAnSW5kdXN0cnkgbGVhZGluZyBjdXJyaWN1bHVtIGRlc2lnbmVkIGJ5IGV4cGVydCBkZXZlbG9wZXJzIHR1cm5lZCBlZHVjYXRvcnMgd2hvIGhhdmUgaW52ZXN0ZWQgdGltZSB0byBjcmVhdGUgcXVhbGl0eSBjb250ZW50IGluZnVzZWQgd2l0aCB1bmlxdWUgdGVhY2hpbmcgbWV0aG9kb2xvZ3kuJyxcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gS2V5RmVhdHVyZSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gc3g9e3sgdmFyaWFudDogJ3NlY3Rpb24ua2V5RmVhdHVyZScgfX0gaWQ9XCJmZWF0dXJlXCI+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPFNlY3Rpb25IZWFkZXJcclxuICAgICAgICAgIHNsb2dhbj1cIlF1YWxpdHkgZmVhdHVyZXNcIlxyXG4gICAgICAgICAgdGl0bGU9XCJFWENMVVNJVkUgRkVBVFVSRVNcIlxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxHcmlkIHN4PXtzdHlsZXMuZ3JpZH0+XHJcbiAgICAgICAgICB7ZGF0YS5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgPEZlYXR1cmVDYXJkQ29sdW1uXHJcbiAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxyXG4gICAgICAgICAgICAgIHNyYz17aXRlbS5pbWdTcmN9XHJcbiAgICAgICAgICAgICAgYWx0PXtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgIHRpdGxlPXtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgIHRleHQ9e2l0ZW0udGV4dH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGdyaWQ6IHtcclxuICAgIHB4OiBbMCwgbnVsbCwgbnVsbCwgJzQwcHgnLCBudWxsLCAnODBweCddLFxyXG4gICAgcHQ6IFswLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAzXSxcclxuICAgIGdyaWRHYXA6IFsnMzVweCAwJywgbnVsbCwgJzQwcHggMCddLFxyXG4gICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogW1xyXG4gICAgICAncmVwZWF0KDEsMWZyKScsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgICdyZXBlYXQoMiwxZnIpJyxcclxuICAgICAgbnVsbCxcclxuICAgICAgJ3JlcGVhdCgzLDFmciknLFxyXG4gICAgXSxcclxuICAgIHdpZHRoOiBbJzEwMCUnLCAnODAlJywgJzEwMCUnXSxcclxuICAgIG14OiAnYXV0bycsXHJcbiAgICAnJiA+IGRpdic6IHtcclxuICAgICAgcHg6IFswLCAnMTVweCcsIG51bGwsICcyNXB4JywgbnVsbCwgJzMwcHgnLCAnNDBweCcsICc2MHB4J10sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3gsIENvbnRhaW5lciwgRmxleCB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IFByaWNlQ2FyZCBmcm9tICdjb21wb25lbnRzL3ByaWNlLWNhcmQnO1xyXG5pbXBvcnQgU2VjdGlvbkhlYWRlciBmcm9tICdjb21wb25lbnRzL3NlY3Rpb24taGVhZGVyJztcclxuaW1wb3J0IHsgSW9Jb3NDaGVja21hcmtDaXJjbGUsIElvSW9zQ2xvc2VDaXJjbGUgfSBmcm9tICdyZWFjdC1pY29ucy9pbyc7XHJcbmltcG9ydCBQYXR0ZXJuQkcgZnJvbSAnYXNzZXRzL3BhdHRlcm5CRy5wbmcnO1xyXG5cclxuY29uc3QgcGFja2FnZXMgPSBbXHJcbiAge1xyXG4gICAgbmFtZTogJ0ZyZWUgUGxhbicsXHJcbiAgICBkZXNjcmlwdGlvbjogJ0ZvciBTbWFsbCB0ZWFtcyBvciBvZmZpY2UnLFxyXG4gICAgYnV0dG9uVGV4dDogJ1NpZ251cCBOb3cnLFxyXG4gICAgcG9pbnRzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBpY29uOiA8SW9Jb3NDaGVja21hcmtDaXJjbGUgLz4sXHJcbiAgICAgICAgdGV4dDogJ1VsdGltYXRlIGFjY2VzcyB0byBhbGwgY291cnNlLCBleGVyY2lzZXMgYW5kIGFzc2Vzc21lbnRzJyxcclxuICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGljb246IDxJb0lvc0NoZWNrbWFya0NpcmNsZSAvPixcclxuICAgICAgICB0ZXh0OlxyXG4gICAgICAgICAgJ0ZyZWUgYWNjZXNzIGZvciBhbGwga2luZCBvZiBleGVyY2lzZSBjb3JyZWN0aW9ucyB3aXRoIGRvd25sb2Fkcy4nLFxyXG4gICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWNvbjogPElvSW9zQ2hlY2ttYXJrQ2lyY2xlIC8+LFxyXG4gICAgICAgIHRleHQ6ICdUb3RhbCBhc3Nlc3NtZW50IGNvcnJlY3Rpb25zIHdpdGggZnJlZSBkb3dubG9hZCBhY2Nlc3Mgc3lzdGVtJyxcclxuICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGljb246IDxJb0lvc0Nsb3NlQ2lyY2xlIC8+LFxyXG4gICAgICAgIHRleHQ6ICdVbmxpbWl0ZWQgZG93bmxvYWQgb2YgY291cnNlcyBvbiB0aGUgbW9iaWxlIGFwcCBjb250ZW50cycsXHJcbiAgICAgICAgaXNBdmFpbGFibGU6IGZhbHNlLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWNvbjogPElvSW9zQ2xvc2VDaXJjbGUgLz4sXHJcbiAgICAgICAgdGV4dDogJ0Rvd25sb2FkIGFuZCBwcmludCBjb3Vyc2VzIGFuZCBleGVyY2lzZXMgaW4gUERGJyxcclxuICAgICAgICBpc0F2YWlsYWJsZTogZmFsc2UsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaGVhZGVyOiAnUmVjb21tZW5kZWQnLFxyXG4gICAgbmFtZTogJ1ByZW1pdW0nLFxyXG4gICAgZGVzY3JpcHRpb246ICdGb3Igc3RhcnR1cCBlbnRlcnByaXNlJyxcclxuICAgIHByaWNlV2l0aFVuaXQ6ICckMjkuOTkvJyxcclxuICAgIGJ1dHRvblRleHQ6ICdTaWdudXAgTm93JyxcclxuICAgIHBvaW50czogW1xyXG4gICAgICB7XHJcbiAgICAgICAgaWNvbjogPElvSW9zQ2hlY2ttYXJrQ2lyY2xlIC8+LFxyXG4gICAgICAgIHRleHQ6ICdVbHRpbWF0ZSBhY2Nlc3MgdG8gYWxsIGNvdXJzZSwgZXhlcmNpc2VzIGFuZCBhc3Nlc3NtZW50cycsXHJcbiAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpY29uOiA8SW9Jb3NDaGVja21hcmtDaXJjbGUgLz4sXHJcbiAgICAgICAgdGV4dDpcclxuICAgICAgICAgICdGcmVlIGFjY2VzcyBmb3IgYWxsIGtpbmQgb2YgZXhlcmNpc2UgY29ycmVjdGlvbnMgd2l0aCBkb3dubG9hZHMuJyxcclxuICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGljb246IDxJb0lvc0NoZWNrbWFya0NpcmNsZSAvPixcclxuICAgICAgICB0ZXh0OiAnVG90YWwgYXNzZXNzbWVudCBjb3JyZWN0aW9ucyB3aXRoIGZyZWUgZG93bmxvYWQgYWNjZXNzIHN5c3RlbScsXHJcbiAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpY29uOiA8SW9Jb3NDaGVja21hcmtDaXJjbGUgLz4sXHJcbiAgICAgICAgdGV4dDogJ1VubGltaXRlZCBkb3dubG9hZCBvZiBjb3Vyc2VzIG9uIHRoZSBtb2JpbGUgYXBwIGNvbnRlbnRzJyxcclxuICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGljb246IDxJb0lvc0NoZWNrbWFya0NpcmNsZSAvPixcclxuICAgICAgICB0ZXh0OiAnRG93bmxvYWQgYW5kIHByaW50IGNvdXJzZXMgYW5kIGV4ZXJjaXNlcyBpbiBQREYnLFxyXG4gICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdGcmVlIFBsYW4nLFxyXG4gICAgZGVzY3JpcHRpb246ICdGb3IgU21hbGwgdGVhbXMgb3Igb2ZmaWNlJyxcclxuICAgIGJ1dHRvblRleHQ6ICdTaWdudXAgTm93JyxcclxuICAgIHBvaW50czogW1xyXG4gICAgICB7XHJcbiAgICAgICAgaWNvbjogPElvSW9zQ2hlY2ttYXJrQ2lyY2xlIC8+LFxyXG4gICAgICAgIHRleHQ6ICdVbHRpbWF0ZSBhY2Nlc3MgdG8gYWxsIGNvdXJzZSwgZXhlcmNpc2VzIGFuZCBhc3Nlc3NtZW50cycsXHJcbiAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpY29uOiA8SW9Jb3NDaGVja21hcmtDaXJjbGUgLz4sXHJcbiAgICAgICAgdGV4dDpcclxuICAgICAgICAgICdGcmVlIGFjY2VzcyBmb3IgYWxsIGtpbmQgb2YgZXhlcmNpc2UgY29ycmVjdGlvbnMgd2l0aCBkb3dubG9hZHMuJyxcclxuICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGljb246IDxJb0lvc0NoZWNrbWFya0NpcmNsZSAvPixcclxuICAgICAgICB0ZXh0OiAnVG90YWwgYXNzZXNzbWVudCBjb3JyZWN0aW9ucyB3aXRoIGZyZWUgZG93bmxvYWQgYWNjZXNzIHN5c3RlbScsXHJcbiAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpY29uOiA8SW9Jb3NDbG9zZUNpcmNsZSAvPixcclxuICAgICAgICB0ZXh0OiAnVW5saW1pdGVkIGRvd25sb2FkIG9mIGNvdXJzZXMgb24gdGhlIG1vYmlsZSBhcHAgY29udGVudHMnLFxyXG4gICAgICAgIGlzQXZhaWxhYmxlOiBmYWxzZSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGljb246IDxJb0lvc0Nsb3NlQ2lyY2xlIC8+LFxyXG4gICAgICAgIHRleHQ6ICdEb3dubG9hZCBhbmQgcHJpbnQgY291cnNlcyBhbmQgZXhlcmNpc2VzIGluIFBERicsXHJcbiAgICAgICAgaXNBdmFpbGFibGU6IGZhbHNlLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG5dO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWNrYWdlKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBpZD1cInByaWNpbmdcIiBzeD17c3R5bGVzLnByaWNpbmd9PlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxTZWN0aW9uSGVhZGVyXHJcbiAgICAgICAgICB0aXRsZT1cIkxldOKAmXMgc2VlIGhvdyBpdCB3b3Jrc1wiXHJcbiAgICAgICAgICBzbG9nYW49XCJXaGF0cyB0aGUgZnVuY3Rpb25cIlxyXG4gICAgICAgICAgaXNXaGl0ZT17dHJ1ZX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxGbGV4XHJcbiAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgIGZsZXhXcmFwOiBbJ3dyYXAnLCBudWxsLCBudWxsLCAnbm93cmFwJ10sXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtwYWNrYWdlcy5tYXAoKHBhY2thZ2VEYXRhKSA9PiAoXHJcbiAgICAgICAgICAgIDxQcmljZUNhcmQgZGF0YT17cGFja2FnZURhdGF9IGtleT17cGFja2FnZURhdGEubmFtZX0gLz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvRmxleD5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIHByaWNpbmc6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ3ByaW1hcnknLFxyXG4gICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7UGF0dGVybkJHfSlgLFxyXG4gICAgYmFja2dyb3VuZFJlcGVhdDogYG5vLXJlcGVhdGAsXHJcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXIgY2VudGVyJyxcclxuICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxyXG4gICAgcHk6IFs4LCBudWxsLCA5LCBudWxsLCBudWxsLCAxMF0sXHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICcmOjpiZWZvcmUnOiB7XHJcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICBjb250ZW50OiAnXCJcIicsXHJcbiAgICAgIHRvcDogMCxcclxuICAgICAgcmlnaHQ6IDAsXHJcbiAgICAgIGJhY2tncm91bmQ6XHJcbiAgICAgICAgJ2xpbmVhci1ncmFkaWVudCgtNDVkZWcsIHJnYmEoNDIsNzIsMTI1LCAwLjMpIDI1JSwgdHJhbnNwYXJlbnQgMjUlLCB0cmFuc3BhcmVudCA1MCUsIHJnYmEoNDIsNzIsMTI1LCAwLjMpIDUwJSwgcmdiYSg0Miw3MiwxMjUsIDAuMykgNzUlLCB0cmFuc3BhcmVudCA3NSUsIHRyYW5zcGFyZW50KScsXHJcbiAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgIGJhY2tncm91bmRTaXplOiAnMzUwcHggMzUwcHgnLFxyXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgb3BhY2l0eTogMC4zLFxyXG4gICAgICB6SW5kZXg6IDAsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3gsIENvbnRhaW5lciwgQm94IH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgVGV4dEZlYXR1cmUgZnJvbSAnY29tcG9uZW50cy90ZXh0LWZlYXR1cmUnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnY29tcG9uZW50cy9pbWFnZSc7XHJcblxyXG5pbXBvcnQgUGFydG5lciBmcm9tICdhc3NldHMvcGFydG5lci5wbmcnO1xyXG5cclxuY29uc3QgZGF0YSA9IHtcclxuICBzdWJUaXRsZTogJ0NvcmUgZmVhdHVyZXMnLFxyXG4gIHRpdGxlOiAnU21hcnQgSmFja3BvdHMgdGhhdCB5b3UgbWF5IGxvdmUgdGhpcyBhbnl0aW1lICYgYW55d2hlcmUnLFxyXG4gIGRlc2NyaXB0aW9uOlxyXG4gICAgJ0dldCB5b3VyIHRlc3RzIGRlbGl2ZXJlZCBhdCBsZXQgaG9tZSBjb2xsZWN0IHNhbXBsZSBmcm9tIHRoZSB2aWN0b3J5IG9mIHRoZSBtYW5hZ2VtZW50cyB0aGF0IHN1cHBsaWVzIGJlc3QgZGVzaWduIHN5c3RlbSBndWlkZWxpbmVzIGV2ZXIuIEdldCB5b3VyIHRlc3RzIGRlbGl2ZXJlZCBhdCBsZXQgaG9tZSBjb2xsZWN0IHNhbXBsZS4nLFxyXG4gIGJ0bk5hbWU6ICdHZXQgU3RhcnRlZCcsXHJcbiAgYnRuVVJMOiAnIycsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYXJ0bmVyU2VjdGlvbigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gc3g9e3sgdmFyaWFudDogJ3NlY3Rpb24ucGFydG5lcicgfX0+XHJcbiAgICAgIDxDb250YWluZXIgc3g9e3N0eWxlcy5jb250YWluZXJCb3h9PlxyXG4gICAgICAgIDxCb3ggc3g9e3N0eWxlcy5jb250ZW50Qm94fT5cclxuICAgICAgICAgIDxUZXh0RmVhdHVyZVxyXG4gICAgICAgICAgICBzdWJUaXRsZT17ZGF0YS5zdWJUaXRsZX1cclxuICAgICAgICAgICAgdGl0bGU9e2RhdGEudGl0bGV9XHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtkYXRhLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICBidG5OYW1lPXtkYXRhLmJ0bk5hbWV9XHJcbiAgICAgICAgICAgIGJ0blVSTD17ZGF0YS5idG5VUkx9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICAgIDxCb3ggc3g9e3sgcHg6IFswLCBudWxsLCAnNDBweCcsIDBdIH19PlxyXG4gICAgICAgICAgPEltYWdlIHNyYz17UGFydG5lcn0gYWx0PVwiUGFydG5lclwiIC8+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBjb250YWluZXJCb3g6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcclxuICAgIGZsZXhXcmFwOiBbJ3dyYXAnLCBudWxsLCBudWxsLCAnbm93cmFwJ10sXHJcbiAgfSxcclxuICBjb250ZW50Qm94OiB7XHJcbiAgICBmbGV4U2hyaW5rOiAwLFxyXG4gICAgcHg6IFswLCBudWxsLCAnMzBweCcsIDBdLFxyXG4gICAgdGV4dEFsaWduOiBbJ2NlbnRlcicsIG51bGwsIG51bGwsICdsZWZ0J10sXHJcbiAgICB3aWR0aDogWycxMDAlJywgNDUwLCA1NTAsICczNTBweCcsICc0MTBweCcsICc0ODVweCddLFxyXG4gICAgbXg6ICdhdXRvJyxcclxuICAgIHBiOiBbJzMwcHgnLCBudWxsLCBudWxsLCAwXSxcclxuICAgICcuZGVzY3JpcHRpb24nOiB7XHJcbiAgICAgIHByOiBbMCwgbnVsbCwgbnVsbCwgbnVsbCwgNF0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3ggfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgQm94IH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgVGV4dEZlYXR1cmUgZnJvbSAnY29tcG9uZW50cy90ZXh0LWZlYXR1cmUnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnY29tcG9uZW50cy9pbWFnZSc7XHJcblxyXG5pbXBvcnQgUGF5bWVudFRodW1iIGZyb20gJ2Fzc2V0cy9wYXltZW50VGh1bWIucG5nJztcclxuaW1wb3J0IFBheW1lbnRQYXR0ZXJuIGZyb20gJ2Fzc2V0cy9wYXltZW50LXBhdHRlcm4ucG5nJztcclxuXHJcbmNvbnN0IGRhdGEgPSB7XHJcbiAgc3ViVGl0bGU6ICdQQVlNRU5UIFNFQ1VSSVRZJyxcclxuICB0aXRsZTogJ1NlY3VyZSBQYXltZW50IFRyYW5zYWN0aW9uIFN5c3RlbSB3aXRoICMxIFJhbmtpbmcnLFxyXG4gIGRlc2NyaXB0aW9uOlxyXG4gICAgJ0dldCB5b3VyIHRlc3RzIGRlbGl2ZXJlZCBhdCBsZXQgaG9tZSBjb2xsZWN0IHNhbXBsZSBmcm9tIHRoZSB2aWN0b3J5IG9mIHRoZSBtYW5hZ2VtZW50cyB0aGF0IHN1cHBsaWVzIGJlc3QgZGVzaWduIHN5c3RlbSBndWlkZWxpbmVzIGV2ZXIuIEdldCB5b3VyIHRlc3RzIGRlbGl2ZXJlZCBhdCBsZXQgaG9tZSBjb2xsZWN0IHNhbXBsZS4nLFxyXG4gIGJ0bk5hbWU6ICdMZWFybiBNb3JlJyxcclxuICBidG5VUkw6ICcjJyxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlY3VyZVBheW1lbnQoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIHN4PXt7IHZhcmlhbnQ6ICdzZWN0aW9uLnNlY3VyZVBheW1lbnQnIH19PlxyXG4gICAgICA8Qm94IHN4PXtzdHlsZXMuYmdPdmVybGF5fSAvPlxyXG4gICAgICA8Q29udGFpbmVyIHN4PXtzdHlsZXMuY29udGFpbmVyQm94fT5cclxuICAgICAgICA8Qm94IHN4PXtzdHlsZXMudGh1bWJuYWlsfT5cclxuICAgICAgICAgIDxJbWFnZSBzcmM9e1BheW1lbnRUaHVtYn0gYWx0PXtkYXRhLnRpdGxlfSAvPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICAgIDxCb3ggc3g9e3N0eWxlcy5jb250ZW50Qm94fT5cclxuICAgICAgICAgIDxUZXh0RmVhdHVyZVxyXG4gICAgICAgICAgICBzdWJUaXRsZT17ZGF0YS5zdWJUaXRsZX1cclxuICAgICAgICAgICAgdGl0bGU9e2RhdGEudGl0bGV9XHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtkYXRhLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICBidG5OYW1lPXtkYXRhLmJ0bk5hbWV9XHJcbiAgICAgICAgICAgIGJ0blVSTD17ZGF0YS5idG5VUkx9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgYmdPdmVybGF5OiB7XHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIHRvcDogMCxcclxuICAgIHJpZ2h0OiAwLFxyXG4gICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICB6SW5kZXg6IC0xLFxyXG4gICAgd2lkdGg6IFtcclxuICAgICAgJzEwMCUnLFxyXG4gICAgICBudWxsLFxyXG4gICAgICBudWxsLFxyXG4gICAgICAnY2FsYyg1MCUgKyA0MDBweCknLFxyXG4gICAgICAnY2FsYyg1MCUgKyA0ODBweCknLFxyXG4gICAgICAnY2FsYyg1MCUgKyA1NzBweCknLFxyXG4gICAgICBudWxsLFxyXG4gICAgICAnY2FsYyg1MCUgKyA2MjVweCknLFxyXG4gICAgXSxcclxuICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke1BheW1lbnRQYXR0ZXJufSlgLFxyXG4gICAgYmFja2dyb3VuZFJlcGVhdDogYG5vLXJlcGVhdGAsXHJcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICd0b3AgbGVmdCcsXHJcbiAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcclxuICB9LFxyXG4gIGNvbnRhaW5lckJveDoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcclxuICAgIGZsZXhXcmFwOiBbJ3dyYXAnLCBudWxsLCBudWxsLCAnbm93cmFwJ10sXHJcbiAgfSxcclxuICB0aHVtYm5haWw6IHtcclxuICAgIG1iOiAtMixcclxuICAgIG1sOiBbLTQsICctNDBweCcsIG51bGwsIG51bGwsIDBdLFxyXG4gICAgb3JkZXI6IFsyLCBudWxsLCBudWxsLCAwXSxcclxuICAgIHByOiBbNiwgbnVsbCwgNywgMF0sXHJcbiAgfSxcclxuICBjb250ZW50Qm94OiB7XHJcbiAgICB3aWR0aDogWycxMDAlJywgNDIwLCA0ODAsIDM4MCwgNTAwLCA1NzBdLFxyXG4gICAgbXg6ICdhdXRvJyxcclxuICAgIGZsZXhTaHJpbms6IDAsXHJcbiAgICB0ZXh0QWxpZ246IFsnY2VudGVyJywgbnVsbCwgbnVsbCwgJ2xlZnQnXSxcclxuICAgIHB0OiBbMCwgbnVsbCwgbnVsbCwgNCwgJzUwcHgnLCBudWxsLCA0LCAnODBweCddLFxyXG4gICAgcGw6IFswLCBudWxsLCBudWxsLCA0MCwgJzkwcHgnXSxcclxuICAgIHBiOiBbNywgbnVsbCwgbnVsbCwgOV0sXHJcbiAgICBwcjogWzAsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDZdLFxyXG4gIH0sXHJcbn07XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3gsIENvbnRhaW5lciwgSGVhZGluZywgVGV4dCwgQm94LCBJbWFnZSB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IFNlY3Rpb25IZWFkZXIgZnJvbSAnY29tcG9uZW50cy9zZWN0aW9uLWhlYWRlcic7XHJcbmltcG9ydCBSYXRpbmcgZnJvbSAnY29tcG9uZW50cy9yYXRpbmcnO1xyXG5pbXBvcnQgQnV0dG9uR3JvdXAgZnJvbSAnY29tcG9uZW50cy9idXR0b24tZ3JvdXAnO1xyXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAncmVhY3QtbXVsdGktY2Fyb3VzZWwnO1xyXG5cclxuaW1wb3J0IEF2YXRhcjEgZnJvbSAnYXNzZXRzL3Rlc3RpbW9uaWFsL2F2YXRhcjEucG5nJztcclxuaW1wb3J0IEF2YXRhcjIgZnJvbSAnYXNzZXRzL3Rlc3RpbW9uaWFsL2F2YXRhcjIucG5nJztcclxuaW1wb3J0IEF2YXRhcjMgZnJvbSAnYXNzZXRzL3Rlc3RpbW9uaWFsL2F2YXRhcjMucG5nJztcclxuaW1wb3J0IEF2YXRhcjQgZnJvbSAnYXNzZXRzL3Rlc3RpbW9uaWFsL2F2YXRhcjQucG5nJztcclxuXHJcbmNvbnN0IGRhdGEgPSBbXHJcbiAge1xyXG4gICAgaWQ6IDEsXHJcbiAgICB0aXRsZTogJ01vZGVybiBsb29rICYgdHJlbmRpbmcgZGVzaWduJyxcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAnXCJJICBoYXZlIHdvcmtlZCB3aXRoIERhdmXigJlzIEJyb3RoZXJzIFRlY2hub2xvZ3kgLCBBcyBhIEFuZHJvaWQgRGV2ZWxvcGVyIC4gQWthc2ggRGV2IFNpciBBbHdheXMgIGhlbHBlZCAgbWUgIHRvIHdoZW5ldmVyICBJIHdhcyBOZWVkZWQgIHRvIExlYXJuIG5ldyBUZWNobm9sb2d5IEZvciAgVGhlIFByb2plY3TigJlzLiBNeSBXb3JrIEV4cGVyaWVuY2Ugd2FzIEV4dHJlbWVseSBHb29kIHdpdGggQWthc2ggRGF2ZSBTaXIuIEFrYXNoICBTaXIgQWx3YXlzIENhcmUgdG8gRW1wbG95ZWVzIGFuZCBhcyB3ZWxsIGFzIENsaWVudHMuIFRoZXkgQWx3YXlzIHRyeSB0byBGdWxsIGZpbGwgYWxsIFJlcXVpcmVtZW50cyBvZiB0aGUgQ2xpZW50cy4gQWthc2ggRGF2ZSBEb2luZyBHcmVhdCBXb3JrLiDigJ0nLFxyXG4gICAgYXZhdGFyOiBBdmF0YXIxLFxyXG4gICAgbmFtZTogJ0thbGthIFByYXNoYWQnLFxyXG4gICAgZGVzaWduYXRpb246ICdAS2Fsa2FQcmFzaGFkJyxcclxuICAgIHJldmlldzogNCxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAyLFxyXG4gICAgdGl0bGU6ICdEZXNpZ24gUXVhbGl0eSAmIHBlcmZvcm1hbmNlJyxcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAnRGF3YXkgaXMgZ3JlYXQgcGxhdGZvcm0gdG8gbGVhcm4gdGVjaG5vbG9naWVzLCBwZW9wbGVzIHdobyB3YW50IHRvIGxlYXJuIHByb2dyYW1taW5nIGZyb20gc2NyYXRjaCB0aGlzIGlzIGEgYXdlc29tZSBwbGF0Zm9ybSB0aGVtICx0aGV5IGluc3VyZSB0aGF0IGV2ZXJ5IHBlcnNvbiBjYW4gc3R1ZHkgY29tZm9ydGFibHkgYWNjb3JkaW5nIHRvIHRoZWlyIHBhY2UuIEhpZ2hseSByZWNvbW1lbmRlZCBmb3IgcGVvcGxlIHdobyB3YW50IHRvIHN0YXJ0IHRoZWlyIGNhcmVlciBpbiBJVCcsXHJcbiAgICBhdmF0YXI6IEF2YXRhcjIsXHJcbiAgICBuYW1lOiAnUmlzaGkgQ2hvdWJleScsXHJcbiAgICBkZXNpZ25hdGlvbjogJ0BSaXNoaUNob3ViZXknLFxyXG4gICAgcmV2aWV3OiA1LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDMsXHJcbiAgICB0aXRsZTogJ0xheW91dCBhbmQgb3JnYW5pemVkIGxheWVycycsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgJ0Rhd2F5IGlzIGEgYmVzdCBwbGF0Zm9ybSBmb3IgbGVhcm5pbmcsIEltIGRvaW5nIG15IGludGVybnNoaXAgZnJvbSBoZXJlICwgTWVudG9ycyBhcmUgcmVhZHkgdG8gZ3VpZGVcXHRlY2ggIGFueSB0aW1lIHdoZW5ldmVyIEkgc3R1Y2sgb24gcGVydGljdWxhciBwcm9ibGVtIC4gSW0gZ2V0dGluZyB0byBsZWFybiAgbmV3IHRlY2hub2xvZ2llcyBpbiBhIHBlcmZlY3QgbWFubmVyIHdpdGggcGVyZmVjdCB0dXRvcnMgLCBBbG9uZyB3aXRoIHRlYWNoaW5nIHRoZXkgYWxzbyBtb3RpdmF0ZXMgdXMsICB0byBjcmVhdGUgYSBjdXJpb3NpdHkgdG8gbGVhcm4gIG1vcmUuJyxcclxuICAgIGF2YXRhcjogQXZhdGFyMyxcclxuICAgIG5hbWU6ICdHeWF0cmkgVGl3YXJpJyxcclxuICAgIGRlc2lnbmF0aW9uOiAnQEd5YXRyaVRpd2FyaScsXHJcbiAgICByZXZpZXc6IDUsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNCxcclxuICAgIHRpdGxlOiAnTW9kZXJuIGxvb2sgJiB0cmVuZGluZyBkZXNpZ24nLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgICcgbGVhcm5lZCBhIGxvdCBpbiBEYXdheS4gIHdpdGggZG9pbmcgc2VsZiBzdHVkeSwgSSBhbHNvIGdldCB0aGUgZ3VpZGFuY2Ugb2YgdGVhY2hlcnMgd2hpY2ggaXMgdmVyeSBoZWxwZnVsLicsXHJcbiAgICBhdmF0YXI6IEF2YXRhcjQsXHJcbiAgICBuYW1lOiAnYWplZXRhIFNhaHUnLFxyXG4gICAgZGVzaWduYXRpb246ICdAYWplZXRhU2FodScsXHJcbiAgICByZXZpZXc6IDQsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNSxcclxuICAgIHRpdGxlOiAnTW9kZXJuIGxvb2sgJiB0cmVuZGluZyBkZXNpZ24nLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgICcgSSBhbSB3b3JraW5nIGFzIGEgaW50ZXJuIGluIGRhd2F5IHRlY2hub2xvZ3kgZm9ybSBsYXN0IDMgbW9udGhzIGFuZCBoZXJlIGlzIHNvbWUgcG9pbnRzIGFib3V0IG15IGludGVybnNoaXAgZXhwZXJpZW5jZS5UaGV5IG1vcmUgZm9jdXMgb24gc2VsZiBsZWFybmluZyByYXRoZXIgdGhlbiBqdXN0IHRlYWNoaW5nIG9yIGV4cGxhaW5pbmcgdG9waWNzLlRoZXkgaGVscCB0byB1cGdyYWRlIHByb2dyYW1taW5nIGxvZ2ljcyAgVGhleSBpbXByb3ZlZCBteSBEZXNpZ25pbmcgc2tpbGxzLiBUcmFpbmVyIGFuZCBmZWxsb3cgaW50ZXJucyBhcmUgYWxzbyB2ZXJ5IGhlbHBmdWwgYW5kIGtpbmQuJ1xyXG4gICAsIGF2YXRhcjogQXZhdGFyNCxcclxuICAgIG5hbWU6ICdBYWthbnNoYSBTYWh1JyxcclxuICAgIGRlc2lnbmF0aW9uOiAnQEFha2Fuc2hhU2FodScsXHJcbiAgICByZXZpZXc6IDUsXHJcbiAgfSxcclxuXTtcclxuXHJcbmNvbnN0IHJlc3BvbnNpdmUgPSB7XHJcbiAgZGVza3RvcDoge1xyXG4gICAgYnJlYWtwb2ludDogeyBtYXg6IDMwMDAsIG1pbjogMTYxOSB9LFxyXG4gICAgaXRlbXM6IDQsXHJcbiAgICBzbGlkZXNUb1NsaWRlOiA0LCAvLyBvcHRpb25hbCwgZGVmYXVsdCB0byAxLlxyXG4gIH0sXHJcbiAgbGFwdG9wOiB7XHJcbiAgICBicmVha3BvaW50OiB7IG1heDogMTYxOSwgbWluOiAxMDI0IH0sXHJcbiAgICBpdGVtczogMyxcclxuICAgIHNsaWRlc1RvU2xpZGU6IDMsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IHRvIDEuXHJcbiAgfSxcclxuICB0YWJsZXQ6IHtcclxuICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiAxMDI0LCBtaW46IDY0MCB9LFxyXG4gICAgaXRlbXM6IDIsXHJcbiAgICBzbGlkZXNUb1NsaWRlOiAyLCAvLyBvcHRpb25hbCwgZGVmYXVsdCB0byAxLlxyXG4gIH0sXHJcbiAgbW9iaWxlOiB7XHJcbiAgICBicmVha3BvaW50OiB7IG1heDogNjM5LCBtaW46IDAgfSxcclxuICAgIGl0ZW1zOiAxLFxyXG4gICAgc2xpZGVzVG9TbGlkZTogMSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgdG8gMS5cclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGVzdGltb25pYWxDYXJkKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBpZD1cInRlc3RpbW9uaWFsXCIgc3g9e3sgdmFyaWFudDogJ3NlY3Rpb24udGVzdGltb25pYWwnIH19PlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxTZWN0aW9uSGVhZGVyIHNsb2dhbj1cIlRlc3RpbW9uaWFsXCIgdGl0bGU9XCJXSEFUIE9VUiBTVFVERU5UUyBTQVkgQUJPVVQgVVNcIiAvPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPEJveCBzeD17c3R5bGVzLmNhcm91c2VsV3JhcHBlcn0+XHJcbiAgICAgICAgPENhcm91c2VsXHJcbiAgICAgICAgYXV0b1BsYXk9e3RydWV9XHJcbiAgICAgICAgICBhZGRpdGlvbmFsVHJhbnNmcm9tPXswfVxyXG4gICAgICAgICAgYXJyb3dzPXtmYWxzZX1cclxuICAgICAgICAgIGF1dG9QbGF5U3BlZWQ9ezMwMDB9XHJcbiAgICAgICAgICBjZW50ZXJNb2RlPXtmYWxzZX1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cIlwiXHJcbiAgICAgICAgICBjb250YWluZXJDbGFzcz1cImNhcm91c2VsLWNvbnRhaW5lclwiXHJcbiAgICAgICAgICBjdXN0b21CdXR0b25Hcm91cD17PEJ1dHRvbkdyb3VwIC8+fVxyXG4gICAgICAgICAgZG90TGlzdENsYXNzPVwiXCJcclxuICAgICAgICAgIGRyYWdnYWJsZVxyXG4gICAgICAgICAgZm9jdXNPblNlbGVjdD17ZmFsc2V9XHJcbiAgICAgICAgICBpbmZpbml0ZT17dHJ1ZX1cclxuICAgICAgICAgIGl0ZW1DbGFzcz1cIlwiXHJcbiAgICAgICAgICBrZXlCb2FyZENvbnRyb2xcclxuICAgICAgICAgIG1pbmltdW1Ub3VjaERyYWc9ezgwfVxyXG4gICAgICAgICAgcmVuZGVyQnV0dG9uR3JvdXBPdXRzaWRlXHJcbiAgICAgICAgICByZW5kZXJEb3RzT3V0c2lkZT17ZmFsc2V9XHJcbiAgICAgICAgICByZXNwb25zaXZlPXtyZXNwb25zaXZlfVxyXG4gICAgICAgICAgc2hvd0RvdHM9e2ZhbHNlfVxyXG4gICAgICAgICAgc2xpZGVyQ2xhc3M9XCJcIlxyXG4gICAgICAgICAgc2xpZGVzVG9TbGlkZT17MX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7ZGF0YS5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgPEJveCBzeD17c3R5bGVzLnJldmlld0NhcmR9IGtleT17YHRlc3RpbW9uaWFsLS1rZXkke2l0ZW0uaWR9YH0+XHJcbiAgICAgICAgICAgICAgPFJhdGluZyByYXRpbmc9e2l0ZW0ucmV2aWV3fSAvPlxyXG4gICAgICAgICAgICAgIDxIZWFkaW5nIGFzPVwiaDNcIiBzeD17c3R5bGVzLnRpdGxlfT5cclxuICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgIDwvSGVhZGluZz5cclxuICAgICAgICAgICAgICA8VGV4dCBzeD17c3R5bGVzLmRlc2NyaXB0aW9ufT57aXRlbS5kZXNjcmlwdGlvbn08L1RleHQ+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtpdGVtLmF2YXRhcn0gYWx0PVwiQ2xpZW50IEltYWdlXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXZpZXdlci1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxIZWFkaW5nIGFzPVwiaDRcIiBzeD17c3R5bGVzLmhlYWRpbmd9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIDwvSGVhZGluZz5cclxuICAgICAgICAgICAgICAgICAgPFRleHQgc3g9e3N0eWxlcy5kZXNpZ25hdGlvbn0+e2l0ZW0uZGVzaWduYXRpb259PC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9DYXJvdXNlbD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGNhcm91c2VsV3JhcHBlcjoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIGFsaWduSXRlbXM6ICdmbGV4LWVuZCcsXHJcbiAgICBtdDogJy0zNXB4JyxcclxuICAgIHB4OiAnMTVweCcsXHJcbiAgICAnLmNhcm91c2VsLWNvbnRhaW5lcic6IHtcclxuICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgbWF4V2lkdGg6IFtcclxuICAgICAgICAnMTAwJScsXHJcbiAgICAgICAgbnVsbCxcclxuICAgICAgICBudWxsLFxyXG4gICAgICAgICc3NTBweCcsXHJcbiAgICAgICAgJzEwMDBweCcsXHJcbiAgICAgICAgJzExODBweCcsXHJcbiAgICAgICAgbnVsbCxcclxuICAgICAgICAnY2FsYyg1MCUgKyA4NjVweCknLFxyXG4gICAgICBdLFxyXG4gICAgICBtcjogWydhdXRvJywgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgJy0yMjBweCddLFxyXG4gICAgICBtbDogJ2F1dG8nLFxyXG4gICAgICAnLnJlYWN0LW11bHRpLWNhcm91c2VsLWl0ZW0nOiB7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjI1cycsXHJcbiAgICAgIH0sXHJcbiAgICAgICcucmVhY3QtbXVsdGktY2Fyb3VzZWwtaXRlbS0tYWN0aXZlOm50aC1vZi10eXBlKDRuKSc6IHtcclxuICAgICAgICBvcGFjaXR5OiAnMC41JyxcclxuICAgICAgICAnQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTYyMHB4KSc6IHtcclxuICAgICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICByZXZpZXdDYXJkOiB7XHJcbiAgICBib3hTaGFkb3c6ICcwcHggMHB4IDFweCByZ2JhKDM4LCA3OCwgMTE4LCAwLjM1KScsXHJcbiAgICB0cmFuc2l0aW9uOiAnYWxsIDAuM3MnLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnNnB4JyxcclxuICAgIHA6IFtcclxuICAgICAgJzMwcHggMjBweCAzNXB4JyxcclxuICAgICAgJzMwcHggMjVweCAzNXB4JyxcclxuICAgICAgJzMwcHggMjBweCAzNXB4JyxcclxuICAgICAgJzM1cHggMzBweCA0MHB4IDQwcHgnLFxyXG4gICAgICAnMzBweCAzMHB4IDM1cHgnLFxyXG4gICAgICAnMzVweCAzMHB4IDQwcHggNDBweCcsXHJcbiAgICBdLFxyXG4gICAgYmc6ICd3aGl0ZScsXHJcbiAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcclxuICAgIG06IFtcclxuICAgICAgJzI4cHggNXB4IDMwcHggNXB4JyxcclxuICAgICAgJzI4cHggMjBweCAzMHB4IDIwcHgnLFxyXG4gICAgICAnMjhweCAxNXB4IDMwcHggMTVweCcsXHJcbiAgICAgICcyOHB4IDE1cHggMzBweCAxNXB4JyxcclxuICAgICAgJzMwcHggMjBweCA0MHB4JyxcclxuICAgIF0sXHJcbiAgICAnJjpob3Zlcic6IHtcclxuICAgICAgYm94U2hhZG93OiAnMHB4IDZweCA0N3B4IHJnYmEoMzgsIDc4LCAxMTgsIDAuMSknLFxyXG4gICAgfSxcclxuICAgICcucmF0aW5nJzoge1xyXG4gICAgICBtYjogWzEsIG51bGwsIG51bGwsIDJdLFxyXG4gICAgICB1bDoge1xyXG4gICAgICAgIHBsOiAwLFxyXG4gICAgICAgIGxpc3RTdHlsZTogJ25vbmUnLFxyXG4gICAgICAgIG1iOiAwLFxyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgfSxcclxuICAgICAgc3ZnOiB7XHJcbiAgICAgICAgbWFyZ2luUmlnaHQ6ICcycHgnLFxyXG4gICAgICAgICcmOmxhc3Qtb2YtdHlwZSc6IHtcclxuICAgICAgICAgIG1hcmdpblJpZ2h0OiAwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgICcuc3Rhcic6IHtcclxuICAgICAgICBjb2xvcjogJ3llbGxvdycsXHJcbiAgICAgICAgbXI6ICcxcHgnLFxyXG4gICAgICB9LFxyXG4gICAgICAnLnN0YXItbyc6IHtcclxuICAgICAgICBjb2xvcjogJyNkZGQnLFxyXG4gICAgICAgIG1yOiAnMXB4JyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICAnLmNhcmQtZm9vdGVyJzoge1xyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICBtYXJnaW5Ub3A6IFs1LCBudWxsLCBudWxsLCAnMzNweCddLFxyXG4gICAgICAnLmltYWdlJzoge1xyXG4gICAgICAgIGZsZXhTaHJpbms6IDAsXHJcbiAgICAgICAgbXI6IFszLCBudWxsLCBudWxsLCA0XSxcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgaW1nOiB7XHJcbiAgICAgICAgICB3aWR0aDogJzU1cHgnLFxyXG4gICAgICAgICAgaGVpZ2h0OiAnNTVweCcsXHJcbiAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxyXG4gICAgICAgICAgb2JqZWN0Rml0OiAnY292ZXInLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgdGl0bGU6IHtcclxuICAgIGZvbnRTaXplOiBbMSwgMl0sXHJcbiAgICBmb250V2VpZ2h0OiA3MDAsXHJcbiAgICBtYjogWzMsIG51bGwsIG51bGwsICcyMnB4J10sXHJcbiAgICBjb2xvcjogJ3RleHQnLFxyXG4gICAgbGluZUhlaWdodDogMS42LFxyXG4gIH0sXHJcbiAgZGVzY3JpcHRpb246IHtcclxuICAgIGZvbnRTaXplOiBbMSwgbnVsbCwgbnVsbCwgMl0sXHJcbiAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcclxuICAgIGNvbG9yOiAndGV4dCcsXHJcbiAgICBsaW5lSGVpZ2h0OiBbMS44NSwgbnVsbCwgMl0sXHJcbiAgfSxcclxuICBoZWFkaW5nOiB7XHJcbiAgICBmb250U2l6ZTogWzEsIG51bGwsIG51bGwsIDJdLFxyXG4gICAgZm9udFdlaWdodDogNzAwLFxyXG4gICAgbWI6ICczcHgnLFxyXG4gICAgY29sb3I6ICd0ZXh0JyxcclxuICAgIGxpbmVIZWlnaHQ6IDEuMyxcclxuICB9LFxyXG4gIGRlc2lnbmF0aW9uOiB7XHJcbiAgICBjb2xvcjogJyMyNUEwRkYnLFxyXG4gICAgZm9udFdlaWdodDogJzUwMCcsXHJcbiAgICBmb250U2l6ZTogMSxcclxuICAgIGxpbmVIZWlnaHQ6IDEuNCxcclxuICB9LFxyXG59O1xyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4IH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIEdyaWQsIEJveCwgSGVhZGluZywgVGV4dCB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IFNlY3Rpb25IZWFkZXIgZnJvbSAnY29tcG9uZW50cy9zZWN0aW9uLWhlYWRlcic7XHJcblxyXG5pbXBvcnQgUGF0dGVybkJHIGZyb20gJ2Fzc2V0cy9wYXR0ZXJuQkcucG5nJztcclxuaW1wb3J0IEFycm93T2RkIGZyb20gJ2Fzc2V0cy9hcnJvd09kZC5wbmcnO1xyXG5pbXBvcnQgQXJyb3dFdmVuIGZyb20gJ2Fzc2V0cy9hcnJvd0V2ZW4ucG5nJztcclxuXHJcbmNvbnN0IGRhdGEgPSBbXHJcbiAge1xyXG4gICAgaWQ6IDEsXHJcbiAgICB0aXRsZTogJ1NldCBkaXNidXJzZW1lbnQgSW5zdHJ1Y3Rpb25zJyxcclxuICAgIHRleHQ6XHJcbiAgICAgICdHZXQgeW91ciBibG9vZCB0ZXN0cyBkZWxpdmVyZWQgYXQgaG9tZSBjb2xsZWN0IGEgc2FtcGxlIGZyb20gdGhlIHlvdXIgYmxvb2QgdGVzdHMuJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAyLFxyXG4gICAgdGl0bGU6ICdBc3NlbWJseSByZXRyaWV2ZXMgZnVuZHMgZnJvbSB5b3VyIGFjY291bnQnLFxyXG4gICAgdGV4dDpcclxuICAgICAgJ0dldCB5b3VyIGJsb29kIHRlc3RzIGRlbGl2ZXJlZCBhdCBob21lIGNvbGxlY3QgYSBzYW1wbGUgZnJvbSB0aGUgeW91ciBibG9vZCB0ZXN0cy4nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDMsXHJcbiAgICB0aXRsZTogJ0Fzc2VtYmx5IGluaXRpYXRlcyBkaXNidXJzZW1lbnQnLFxyXG4gICAgdGV4dDpcclxuICAgICAgJ0dldCB5b3VyIGJsb29kIHRlc3RzIGRlbGl2ZXJlZCBhdCBob21lIGNvbGxlY3QgYSBzYW1wbGUgZnJvbSB0aGUgeW91ciBibG9vZCB0ZXN0cy4nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDQsXHJcbiAgICB0aXRsZTogJ0N1c3RvbWVyIHJlY2VpdmVzIGZ1bmRzIHBheW1lbnQnLFxyXG4gICAgdGV4dDpcclxuICAgICAgJ0dldCB5b3VyIGJsb29kIHRlc3RzIGRlbGl2ZXJlZCBhdCBob21lIGNvbGxlY3QgYSBzYW1wbGUgZnJvbSB0aGUgeW91ciBibG9vZCB0ZXN0cy4nLFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXb3JrRmxvdygpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gc3g9e3N0eWxlcy53b3JrZmxvd30+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPFNlY3Rpb25IZWFkZXJcclxuICAgICAgICAgIHNsb2dhbj1cIldoYXRzIHRoZSBmdW5jdGlvblwiXHJcbiAgICAgICAgICB0aXRsZT1cIkxldOKAmXMgc2VlIGhvdyBpdCB3b3Jrc1wiXHJcbiAgICAgICAgICBpc1doaXRlPXt0cnVlfVxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxHcmlkIHN4PXtzdHlsZXMuZ3JpZH0+XHJcbiAgICAgICAgICB7ZGF0YS5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgPEJveCBzeD17c3R5bGVzLmNhcmR9IGtleT17aXRlbS5pZH0+XHJcbiAgICAgICAgICAgICAgPEJveCBzeD17c3R5bGVzLmljb25Cb3h9PntgMCR7aXRlbS5pZH1gfTwvQm94PlxyXG4gICAgICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy53cmFwcGVyfT5cclxuICAgICAgICAgICAgICAgIDxIZWFkaW5nIHN4PXtzdHlsZXMud3JhcHBlci50aXRsZX0+e2l0ZW0udGl0bGV9PC9IZWFkaW5nPlxyXG4gICAgICAgICAgICAgICAgPFRleHQgc3g9e3N0eWxlcy53cmFwcGVyLnN1YlRpdGxlfT57aXRlbS50ZXh0fTwvVGV4dD5cclxuICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICB3b3JrZmxvdzoge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAncHJpbWFyeScsXHJcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtQYXR0ZXJuQkd9KWAsXHJcbiAgICBiYWNrZ3JvdW5kUmVwZWF0OiBgbm8tcmVwZWF0YCxcclxuICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlciBjZW50ZXInLFxyXG4gICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIHB5OiBbOCwgbnVsbCwgOSwgbnVsbCwgbnVsbCwgMTBdLFxyXG4gICAgJyY6OmJlZm9yZSc6IHtcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcclxuICAgICAgdG9wOiAwLFxyXG4gICAgICByaWdodDogMCxcclxuICAgICAgYmFja2dyb3VuZDpcclxuICAgICAgICAnbGluZWFyLWdyYWRpZW50KC00NWRlZywgcmdiYSg0Miw3MiwxMjUsIDAuMykgMjUlLCB0cmFuc3BhcmVudCAyNSUsIHRyYW5zcGFyZW50IDUwJSwgcmdiYSg0Miw3MiwxMjUsIDAuMykgNTAlLCByZ2JhKDQyLDcyLDEyNSwgMC4zKSA3NSUsIHRyYW5zcGFyZW50IDc1JSwgdHJhbnNwYXJlbnQpJyxcclxuICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgYmFja2dyb3VuZFNpemU6ICczNTBweCAzNTBweCcsXHJcbiAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICBvcGFjaXR5OiAwLjMsXHJcbiAgICAgIHpJbmRleDogMCxcclxuICAgIH0sXHJcbiAgfSxcclxuICBncmlkOiB7XHJcbiAgICBtYjogLTEsXHJcbiAgICBwdDogMCxcclxuICAgIGdyaWRHYXA6IFtcclxuICAgICAgJzM1cHggMCcsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgICc0NXB4IDUwcHgnLFxyXG4gICAgICBudWxsLFxyXG4gICAgICAnNTBweCAyNXB4JyxcclxuICAgICAgbnVsbCxcclxuICAgICAgbnVsbCxcclxuICAgICAgJzUwcHggNjVweCcsXHJcbiAgICBdLFxyXG4gICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogW1xyXG4gICAgICAncmVwZWF0KDEsMWZyKScsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgICdyZXBlYXQoMiwxZnIpJyxcclxuICAgICAgbnVsbCxcclxuICAgICAgJ3JlcGVhdCg0LDFmciknLFxyXG4gICAgXSxcclxuICB9LFxyXG4gIGNhcmQ6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICB0ZXh0QWxpZ246IFsnY2VudGVyJywgbnVsbCwgJ2xlZnQnXSxcclxuICAgIHdpZHRoOiBbJzEwMCUnLCAnODAlJywgJzEwMCUnXSxcclxuICAgIG14OiAnYXV0bycsXHJcbiAgICAnJjo6YmVmb3JlJzoge1xyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgY29udGVudDogJ1wiXCInLFxyXG4gICAgICB0b3A6IDAsXHJcbiAgICAgIGxlZnQ6IFswLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCA3NSwgbnVsbCwgMTAwXSxcclxuICAgICAgYmFja2dyb3VuZFJlcGVhdDogYG5vLXJlcGVhdGAsXHJcbiAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlciBjZW50ZXInLFxyXG4gICAgICB3aWR0aDogMjE1LFxyXG4gICAgICBoZWlnaHQ6IDYwLFxyXG4gICAgICBvcGFjaXR5OiAwLjMsXHJcbiAgICAgICdAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEyMjBweCknOiB7XHJcbiAgICAgICAgZGlzcGxheTogJ25vbmUnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgICcmOm50aC1vZi10eXBlKDJuLTEpOjpiZWZvcmUnOiB7XHJcbiAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke0Fycm93T2RkfSlgLFxyXG4gICAgfSxcclxuICAgICcmOm50aC1vZi10eXBlKDJuKTo6YmVmb3JlJzoge1xyXG4gICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtBcnJvd0V2ZW59KWAsXHJcbiAgICAgIHRvcDogMTcsXHJcbiAgICB9LFxyXG4gICAgJyY6bGFzdC1jaGlsZDo6YmVmb3JlJzoge1xyXG4gICAgICBkaXNwbGF5OiAnbm9uZScsXHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIGljb25Cb3g6IHtcclxuICAgIHdpZHRoOiBbJzUwcHgnLCBudWxsLCAnNjBweCcsIG51bGwsIG51bGwsICc3MHB4J10sXHJcbiAgICBoZWlnaHQ6IFsnNTBweCcsIG51bGwsICc2MHB4JywgbnVsbCwgbnVsbCwgJzcwcHgnXSxcclxuICAgIGZsZXhTaHJpbms6IDAsXHJcbiAgICBib3JkZXJSYWRpdXM6IFsxNSwgbnVsbCwgMjMsIG51bGwsIG51bGwsIDMwXSxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgbWI6IFs1LCBudWxsLCBudWxsLCBudWxsLCBudWxsLCA2XSxcclxuICAgIG14OiBbJ2F1dG8nLCBudWxsLCAwXSxcclxuICAgIGZvbnRTaXplOiBbNiwgbnVsbCwgNywgbnVsbCwgbnVsbCwgJzMwcHgnXSxcclxuICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgIGNvbG9yOiAnIzIzNDU4MicsXHJcbiAgfSxcclxuICB3cmFwcGVyOiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICBtdDogJy01cHgnLFxyXG4gICAgdGl0bGU6IHtcclxuICAgICAgZm9udFNpemU6IFszLCBudWxsLCA0LCBudWxsLCBudWxsLCA1XSxcclxuICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IFsxLjQsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDEuNTVdLFxyXG4gICAgICBwcjogWzAsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDJdLFxyXG4gICAgICBtYjogWzIsIDNdLFxyXG4gICAgfSxcclxuXHJcbiAgICBzdWJUaXRsZToge1xyXG4gICAgICBmb250U2l6ZTogMSxcclxuICAgICAgZm9udFdlaWdodDogNDAwLFxyXG4gICAgICBsaW5lSGVpZ2h0OiBbMS44NSwgbnVsbCwgbnVsbCwgMS45LCAyXSxcclxuICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgIG9wYWNpdHk6IDAuNjUsXHJcbiAgICAgIHByOiBbMCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgNV0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiIsImV4cG9ydCBkZWZhdWx0IHtcclxuICAvLyBleGFtcGxlIGNvbG9ycyB3aXRoIGRhcmsgbW9kZVxyXG4gIGNvbG9yczoge1xyXG4gICAgdGV4dDogJyMzNDNENDgnLCAvLyBib2R5IGNvbG9yIGFuZCBwcmltYXJ5IGNvbG9yXHJcbiAgICB0ZXh0X3NlY29uZGFyeTogJyMwMjA3M0UnLCAvLyBzZWNvbmRhcnkgYm9keSBjb2xvclxyXG4gICAgaGVhZGluZzogJyMyNDQ4ODYnLCAvLyBwcmltYXJ5IGhlYWRpbmcgY29sb3JcclxuICAgIGhlYWRpbmdfc2Vjb25kYXJ5OiAnIzBGMjEzNycsIC8vIGhlYWRpbmcgY29sb3JcclxuICAgIGJhY2tncm91bmQ6ICcjRkZGRkZGJywgLy8gYm9keSBiYWNrZ3JvdW5kIGNvbG9yXHJcbiAgICBiYWNrZ3JvdW5kX3NlY29uZGFyeTogJyNGOUZCRkQnLCAvLyBzZWNvbmRhcnkgYmFja2dyb3VuZCBjb2xvclxyXG4gICAgYm9yZGVyX2NvbG9yOiAnI0U1RUNGNCcsIC8vIGJvcmRlciBjb2xvclxyXG4gICAgcHJpbWFyeTogJyMxRjNFNzYnLCAvLyBwcmltYXJ5IGJ1dHRvbiBhbmQgbGluayBjb2xvclxyXG4gICAgc2Vjb25kYXJ5OiAnIzI1Q0I5RScsIC8vIHNlY29uZGFyeSBjb2xvciAtIGNhbiBiZSB1c2VkIGZvciBob3ZlciBzdGF0ZXNcclxuICAgIG11dGVkOiAnIzdCODE4OCcsIC8vIG11dGVkIGNvbG9yXHJcbiAgICBhY2NlbnQ6ICcjNjA5JywgLy8gYSBjb250cmFzdCBjb2xvciBmb3IgZW1waGFzaXppbmcgVUlcclxuICAgIHllbGxvdzogJyNGNkM0MTYnLFxyXG5cclxuICAgIC8vIGhpZ2hsaWdodFx0YSBiYWNrZ3JvdW5kIGNvbG9yIGZvciBoaWdobGlnaHRpbmcgdGV4dFxyXG4gICAgbW9kZXM6IHtcclxuICAgICAgZGFyazoge1xyXG4gICAgICAgIHRleHQ6ICcjZmZmJyxcclxuICAgICAgICBiYWNrZ3JvdW5kOiAnIzAwMCcsXHJcbiAgICAgICAgcHJpbWFyeTogJyMwY2YnLFxyXG4gICAgICAgIHNlY29uZGFyeTogJyMwOWMnLFxyXG4gICAgICAgIG11dGVkOiAnIzExMScsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgYnJlYWtwb2ludHM6IFtcclxuICAgICc0ODBweCcsXHJcbiAgICAnNjQwcHgnLFxyXG4gICAgJzc2OHB4JyxcclxuICAgICcxMDI0cHgnLFxyXG4gICAgJzEyMjBweCcsXHJcbiAgICAnMTM2NnB4JyxcclxuICAgICcxNjIwcHgnLFxyXG4gIF0sXHJcbiAgZm9udHM6IHtcclxuICAgIGJvZHk6IFwiJ0RNIFNhbnMnLCBzYW5zLXNlcmlmXCIsXHJcbiAgICBoZWFkaW5nOiBcIidETSBTYW5zJywgc2Fucy1zZXJpZlwiLFxyXG4gIH0sXHJcbiAgZm9udFNpemVzOiBbMTIsIDE1LCAxNiwgMTgsIDIwLCAyMiwgMjQsIDI4LCAzMiwgMzYsIDQyLCA0OCwgNTIsIDY0XSxcclxuICBmb250V2VpZ2h0czoge1xyXG4gICAgYm9keTogJ25vcm1hbCcsXHJcbiAgICBoZWFkaW5nOiA1MDAsXHJcbiAgICBib2xkOiA3MDAsXHJcbiAgfSxcclxuICBsaW5lSGVpZ2h0czoge1xyXG4gICAgYm9keTogMS44LFxyXG4gICAgaGVhZGluZzogMS41LFxyXG4gIH0sXHJcbiAgbGV0dGVyU3BhY2luZ3M6IHtcclxuICAgIGJvZHk6ICdub3JtYWwnLFxyXG4gICAgY2FwczogJzAuMmVtJyxcclxuICAgIGhlYWRpbmc6ICctMC41cHgnLFxyXG4gIH0sXHJcbiAgc3BhY2U6IFswLCA1LCAxMCwgMTUsIDIwLCAyNSwgMzAsIDUwLCA4MCwgMTAwLCAxMjAsIDE1MF0sXHJcbiAgLy8gdmFyaWFudHMgY2FuIHVzZSBjdXN0b20sIHVzZXItZGVmaW5lZCBuYW1lc1xyXG4gIGxheW91dDoge1xyXG4gICAgY29udGFpbmVyOiB7XHJcbiAgICAgIG1heFdpZHRoOiBbXHJcbiAgICAgICAgJzEwMCUnLFxyXG4gICAgICAgIG51bGwsXHJcbiAgICAgICAgbnVsbCxcclxuICAgICAgICAnNzgwcHgnLFxyXG4gICAgICAgICcxMDIwcHgnLFxyXG4gICAgICAgICcxMjAwcHgnLFxyXG4gICAgICAgIG51bGwsXHJcbiAgICAgICAgJzEzMTBweCcsXHJcbiAgICAgIF0sXHJcbiAgICAgIHB4OiBbNCwgNl0sXHJcbiAgICB9LFxyXG4gICAgaGVhZGVyOiB7XHJcbiAgICAgIGNvbG9yOiAnIzAyMDczRScsXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxyXG4gICAgICBweTogMyxcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICB9LFxyXG4gICAgdG9vbGJhcjoge1xyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gICAgfSxcclxuICAgIG1haW46IHt9LFxyXG4gIH0sXHJcbiAgc2VjdGlvbjoge1xyXG4gICAga2V5RmVhdHVyZToge1xyXG4gICAgICBweTogWzgsIG51bGwsIDksIG51bGwsIG51bGwsIDEwXSxcclxuICAgIH0sXHJcbiAgICBmZWF0dXJlOiB7XHJcbiAgICAgIHB5OiBbOCwgbnVsbCwgOSwgbnVsbCwgbnVsbCwgMTBdLFxyXG4gICAgfSxcclxuICAgIHBhcnRuZXI6IHtcclxuICAgICAgcHQ6IFsyLCBudWxsLCBudWxsLCA1XSxcclxuICAgICAgcGI6IFs4LCBudWxsLCA5LCBudWxsLCBudWxsLCAxMF0sXHJcbiAgICB9LFxyXG4gICAgdGVzdGltb25pYWw6IHtcclxuICAgICAgcHk6IFs4LCBudWxsLCA5LCBudWxsLCBudWxsLCAxMF0sXHJcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgIH0sXHJcbiAgICBzZWN1cmVQYXltZW50OiB7XHJcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgIHB0OiA5LFxyXG4gICAgfSxcclxuICAgIGZhcToge1xyXG4gICAgICBweTogWzgsIG51bGwsIDksIG51bGwsIG51bGwsIDEwXSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBzZWN0aW9uSGVhZGVyOiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIG10OiAtMSxcclxuICAgIG1hcmdpbkJvdHRvbTogWyc1MHB4JywgbnVsbCwgJzYwcHgnLCBudWxsLCAnNjVweCcsICc3NXB4J10sXHJcbiAgICB0aXRsZToge1xyXG4gICAgICBmb250U2l6ZTogWycyNHB4JywgbnVsbCwgJzI4cHgnLCBudWxsLCBudWxsLCAnMzJweCcsIG51bGwsICczNnB4J10sXHJcbiAgICAgIGNvbG9yOiAnaGVhZGluZ19zZWNvbmRhcnknLFxyXG4gICAgICBsaW5lSGVpZ2h0OiBbMS4zLCBudWxsLCBudWxsLCAxLjJdLFxyXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICBmb250V2VpZ2h0OiAnNzAwJyxcclxuICAgICAgbGV0dGVyU3BhY2luZzogJy0uNXB4JyxcclxuICAgIH0sXHJcblxyXG4gICAgc3ViVGl0bGU6IHtcclxuICAgICAgZm9udFNpemU6IFswLCBudWxsLCAnMTRweCddLFxyXG4gICAgICBjb2xvcjogJ2hlYWRpbmcnLFxyXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICBsZXR0ZXJTcGFjaW5nOiBbJzEuNXB4JywgbnVsbCwgJzJweCddLFxyXG4gICAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcclxuICAgICAgZm9udFdlaWdodDogJzcwMCcsXHJcbiAgICAgIG1iOiAnOHB4JyxcclxuICAgICAgbGluZUhlaWdodDogMS41LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHRleHQ6IHtcclxuICAgIGhlYWRpbmc6IHtcclxuICAgICAgZm9udEZhbWlseTogJ2hlYWRpbmcnLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAnaGVhZGluZycsXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICdoZWFkaW5nJyxcclxuICAgICAgZm9udFNpemU6IDQsXHJcbiAgICAgIGxldHRlclNwYWNpbmc6ICdoZWFkaW5nJyxcclxuICAgICAgY29sb3I6ICdoZWFkaW5nJyxcclxuICAgIH0sXHJcbiAgICBoZXJvUHJpbWFyeToge1xyXG4gICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgZm9udFNpemU6IFtcclxuICAgICAgICAnNDBweCcsXHJcbiAgICAgICAgJzUycHgnLFxyXG4gICAgICAgICc2MHB4JyxcclxuICAgICAgICAnNDhweCcsXHJcbiAgICAgICAgJzUycHgnLFxyXG4gICAgICAgICc2MHB4JyxcclxuICAgICAgICAnNjZweCcsXHJcbiAgICAgICAgJzc4cHgnLFxyXG4gICAgICBdLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAxLjIsXHJcbiAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICAgICAgbWI6IFs1LCBudWxsLCBudWxsLCBudWxsLCAnMzBweCddLFxyXG4gICAgfSxcclxuICAgIGhlcm9TZWNvbmRhcnk6IHtcclxuICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgIGZvbnRTaXplOiBbMiwgMywgNCwgJzE3cHgnLCBudWxsLCAzLCAnMTlweCcsIDRdLFxyXG4gICAgICBsaW5lSGVpZ2h0OiBbMiwgbnVsbCwgbnVsbCwgbnVsbCwgMi4yXSxcclxuICAgICAgZm9udFdlaWdodDogJ2JvZHknLFxyXG4gICAgICBwcjogWzAsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICcxMDBweCcsIG51bGwsICcxMjVweCddLFxyXG4gICAgICBtYjogWyczNXB4JywgbnVsbCwgbnVsbCwgbnVsbCwgJzQwcHgnLCBudWxsLCBudWxsLCA3XSxcclxuICAgIH0sXHJcbiAgICB0aXRsZToge1xyXG4gICAgICAvLyBleHRlbmRzIHRoZSB0ZXh0LmhlYWRpbmcgc3R5bGVzXHJcbiAgICAgIHZhcmlhbnQ6ICd0ZXh0LmhlYWRpbmcnLFxyXG4gICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgICAgIGZvbnRTaXplOiAxOCxcclxuICAgICAgbGluZUhlaWdodDogJzMwcHgnLFxyXG4gICAgICBjb2xvcjogJyMwRjIxMzcnLFxyXG4gICAgfSxcclxuICAgIGxlYWQ6IHtcclxuICAgICAgZm9udFNpemU6IDQwLFxyXG4gICAgICBmb250RmFtaWx5OiAnRE0gU2FucycsXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICc1MDAnLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAnNjBweCcsXHJcbiAgICAgIGxldHRlclNwYWNpbmc6ICctMS41cHgnLFxyXG4gICAgICBjb2xvcjogJyMwRjIxMzcnLFxyXG4gICAgfSxcclxuICAgIG11dGVkOiB7XHJcbiAgICAgIGxpbmVIZWlnaHQ6ICcyNnB4JyxcclxuICAgICAgY29sb3I6ICdtdXRlZCcsXHJcbiAgICB9LFxyXG4gICAgc2Vjb25kYXJ5OiB7XHJcbiAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcclxuICAgICAgY29sb3I6ICcjMDBBOTlEJyxcclxuICAgICAgbGluZUhlaWdodDogJzQwcHgnLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGxpbmtzOiB7XHJcbiAgICBkZWZhdWx0OiB7XHJcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgfSxcclxuICAgIGJvbGQ6IHtcclxuICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gICAgfSxcclxuICAgIG5hdjoge1xyXG4gICAgICBkaXNwbGF5OiBbJ25vbmUnLCBudWxsLCAnaW5saW5lLWJsb2NrJ10sXHJcbiAgICAgIHB4OiAyNSxcclxuICAgICAgZm9udFdlaWdodDogJ25vcm1hbCcsXHJcbiAgICB9LFxyXG4gICAgZm9vdGVyOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICAgIHB4OiAwLFxyXG4gICAgICBjb2xvcjogJ2luaGVyaXQnLFxyXG4gICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxyXG4gICAgfSxcclxuICAgIGxvZ286IHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGltYWdlczoge1xyXG4gICAgYXZhdGFyOiB7XHJcbiAgICAgIHdpZHRoOiA0OCxcclxuICAgICAgaGVpZ2h0OiA0OCxcclxuICAgICAgYm9yZGVyUmFkaXVzOiA5OTk5OSxcclxuICAgIH0sXHJcbiAgfSxcclxuICAvLyB2YXJpYW50cyBmb3IgYnV0dG9uc1xyXG4gIGJ1dHRvbnM6IHtcclxuICAgIG1lbnU6IHtcclxuICAgICAgZGlzcGxheTogW251bGwsIG51bGwsICdub25lJ10sXHJcbiAgICB9LCAvLyBkZWZhdWx0IHZhcmlhbnQgZm9yIE1lbnVCdXR0b25cclxuICAgIC8vIHlvdSBjYW4gcmVmZXJlbmNlIG90aGVyIHZhbHVlcyBkZWZpbmVkIGluIHRoZSB0aGVtZVxyXG4gICAgZGVmYXVsdEJ0bjoge1xyXG4gICAgICBib3JkZXJSYWRpdXM6ICc0NXB4JyxcclxuICAgICAgZm9udFNpemU6IFsnMTRweCcsIDEsIG51bGwsIG51bGwsIDJdLFxyXG4gICAgICBsZXR0ZXJTcGFjaW5nczogWyctMC41cHgnLCBudWxsLCBudWxsLCBudWxsLCAnLTAuMTVweCddLFxyXG4gICAgICBwYWRkaW5nOiBbJzExcHggMjBweCAxMHB4JywgbnVsbCwgbnVsbCwgbnVsbCwgJzEzcHggMzBweCddLFxyXG4gICAgICBmb250RmFtaWx5OiAnYm9keScsXHJcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAxLjIsXHJcbiAgICAgIHRyYW5zaXRpb246ICdhbGwgMC4yNXMnLFxyXG4gICAgICBmb250V2VpZ2h0OiA1MDAsXHJcbiAgICAgICcmOmZvY3VzJzoge1xyXG4gICAgICAgIG91dGxpbmU6IDAsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgcHJpbWFyeToge1xyXG4gICAgICB2YXJpYW50OiAnYnV0dG9ucy5kZWZhdWx0QnRuJyxcclxuICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgIGJnOiAncHJpbWFyeScsXHJcbiAgICAgICcmOmhvdmVyJzoge1xyXG4gICAgICAgIGJveFNoYWRvdzogJ3JnYmEoMzEsIDYyLCAxMTgsIDAuNTcpIDBweCA5cHggMjBweCAtNXB4JyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB3aGl0ZUJ1dHRvbjoge1xyXG4gICAgICB2YXJpYW50OiAnYnV0dG9ucy5kZWZhdWx0QnRuJyxcclxuICAgICAgY29sb3I6ICdoZWFkaW5nX3NlY29uZGFyeScsXHJcbiAgICAgIGJnOiAnd2hpdGUnLFxyXG4gICAgICAnJjpob3Zlcic6IHtcclxuICAgICAgICBib3hTaGFkb3c6ICdyZ2JhKDAsIDAsIDAsIDAuNSkgMHB4IDEycHggMjRweCAtMTBweCcsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgc2Vjb25kYXJ5OiB7XHJcbiAgICAgIHZhcmlhbnQ6ICdidXR0b25zLmRlZmF1bHRCdG4nLFxyXG4gICAgICBib3JkZXI6ICcxLjVweCBzb2xpZCB3aGl0ZScsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcclxuICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICcmOmhvdmVyJzoge1xyXG4gICAgICAgIGJnOiAnd2hpdGUnLFxyXG4gICAgICAgIGNvbG9yOiAnaGVhZGluZ19zZWNvbmRhcnknLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHRleHRCdXR0b246IHtcclxuICAgICAgdmFyaWFudDogJ2J1dHRvbnMuZGVmYXVsdEJ0bicsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcclxuICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgIHN2Zzoge1xyXG4gICAgICAgIGZvbnRTaXplOiBbNCwgNl0sXHJcbiAgICAgICAgbXI6IDIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgY2FyZHM6IHtcclxuICAgIHByaW1hcnk6IHtcclxuICAgICAgcGFkZGluZzogMixcclxuICAgICAgYm9yZGVyUmFkaXVzOiA0LFxyXG4gICAgfSxcclxuICAgIG9mZmVyOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgIGZsZXg6IFsnMSAxIGNhbGMoNTAlIC0gMTZweCknLCAnMSAxIDIwJSddLFxyXG4gICAgICBtaW5IZWlnaHQ6IDEzMCxcclxuICAgICAgbTogMixcclxuICAgICAgYmFja2dyb3VuZDogJyNGRkZGRkYnLFxyXG4gICAgICBib3JkZXI6ICcxcHggc29saWQgI0VERUZGNicsXHJcbiAgICAgIGJvcmRlclJhZGl1czogNSxcclxuICAgIH0sXHJcbiAgICBmZWF0dXJlQ2FyZDoge1xyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGFsaWduSXRlbXM6ICdmbGV4LXN0YXJ0JyxcclxuICAgICAgZmxleERpcmVjdGlvbjogJ3JvdycsXHJcbiAgICAgIHA6IDMsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZm9ybXM6IHtcclxuICAgIGxhYmVsOiB7XHJcbiAgICAgIGZvbnRTaXplOiAxLFxyXG4gICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgICB9LFxyXG4gICAgaW5wdXQ6IHtcclxuICAgICAgYm9yZGVyUmFkaXVzOiA4LFxyXG4gICAgICBib3JkZXJDb2xvcjogJ2JvcmRlcl9jb2xvcicsXHJcbiAgICAgIGhlaWdodDogNjAsXHJcbiAgICAgICcmOmZvY3VzJzoge1xyXG4gICAgICAgIGJvcmRlckNvbG9yOiAncHJpbWFyeScsXHJcbiAgICAgICAgYm94U2hhZG93OiAodCkgPT4gYDAgMCAwIDJweCAke3QuY29sb3JzLnByaW1hcnl9YCxcclxuICAgICAgICBvdXRsaW5lOiAnbm9uZScsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIGJhZGdlczoge1xyXG4gICAgcHJpbWFyeToge1xyXG4gICAgICBjb2xvcjogJ2JhY2tncm91bmQnLFxyXG4gICAgICBiZzogJyMyOEE1RkYnLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IDMwLFxyXG4gICAgICBwOiAnM3B4IDExcHgnLFxyXG4gICAgICBmb250U2l6ZTogMSxcclxuICAgICAgbGV0dGVyU3BhY2luZzogJy0wLjVweCcsXHJcbiAgICB9LFxyXG4gICAgb3V0bGluZToge1xyXG4gICAgICBjb2xvcjogJ3ByaW1hcnknLFxyXG4gICAgICBiZzogJ3RyYW5zcGFyZW50JyxcclxuICAgICAgYm94U2hhZG93OiAnaW5zZXQgMCAwIDAgMXB4JyxcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgc3R5bGVzOiB7XHJcbiAgICAvLyBUbyBhZGQgYmFzZSwgdG9wLWxldmVsIHN0eWxlcyB0byB0aGUgPGJvZHk+IGVsZW1lbnQsIHVzZSB0aGVtZS5zdHlsZXMucm9vdC5cclxuICAgIHJvb3Q6IHtcclxuICAgICAgZm9udEZhbWlseTogJ2JvZHknLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAnYm9keScsXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2R5JyxcclxuICAgICAgZm9udFNtb290aGluZzogJ2FudGlhbGlhc2VkJyxcclxuICAgICAgJy5tb2RhbC12aWRlby1jbG9zZS1idG4nOiB7XHJcbiAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgICAgdG9wOiAnLTI1cHgnLFxyXG4gICAgICAgIHJpZ2h0OiAnLTI1cHgnLFxyXG4gICAgICAgIHdpZHRoOiAnIDI1cHgnLFxyXG4gICAgICAgIGhlaWdodDogJzI1cHgnLFxyXG4gICAgICB9LFxyXG4gICAgICAnLm1vZGFsLXZpZGVvLW1vdmllLXdyYXAnOiB7XHJcbiAgICAgICAgbWFyZ2luOiA2LFxyXG4gICAgICAgIHdpZHRoOiAnYXV0bycsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgLy8gRGl2aWRlciBzdHlsZXNcclxuICAgIGhyOiB7XHJcbiAgICAgIGJvcmRlcjogMCxcclxuICAgICAgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkJyxcclxuICAgICAgYm9yZGVyQ29sb3I6ICcjRDlFMEU3JyxcclxuICAgIH0sXHJcbiAgICAvLyBhbHNvIHlvdSBjYW4gdXNlIG90aGVyIEhUTUwgZWxlbWVudHMgc3R5bGUgaGVyZVxyXG4gICAgdWw6IHtcclxuICAgICAgbGlzdFN0eWxlOiAnbm9uZScsXHJcbiAgICB9LFxyXG4gICAgc3JPbmx5OiB7XHJcbiAgICAgIGJvcmRlcjogJzAgIWltcG9ydGFudCcsXHJcbiAgICAgIGNsaXA6ICdyZWN0KDFweCwgMXB4LCAxcHgsIDFweCkgIWltcG9ydGFudCcsXHJcbiAgICAgIGNsaXBQYXRoOiAnaW5zZXQoNTAlKSAhaW1wb3J0YW50JyxcclxuICAgICAgaGVpZ2h0OiAnMXB4ICFpbXBvcnRhbnQnLFxyXG4gICAgICBtYXJnaW46ICctMXB4ICFpbXBvcnRhbnQnLFxyXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbiAhaW1wb3J0YW50JyxcclxuICAgICAgcGFkZGluZzogJzAgIWltcG9ydGFudCcsXHJcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUgIWltcG9ydGFudCcsXHJcbiAgICAgIHdpZHRoOiAnMXB4ICFpbXBvcnRhbnQnLFxyXG4gICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwICFpbXBvcnRhbnQnLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZW1vdGlvbi9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZyYW1lci1tb3Rpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJjLWRyYXdlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1jdXN0b20tc2Nyb2xsYmFyc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9mYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9pb1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1tb2RhbC12aWRlb1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1tdWx0aS1jYXJvdXNlbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zY3JvbGxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc3RpY2t5bm9kZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0aGVtZS11aVwiKTsiXSwic291cmNlUm9vdCI6IiJ9