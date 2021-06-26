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

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAABuwAAAbsBOuzj4gAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAA6KSURBVHic7Zt5fFRVsse/dbvTnaS7s4cQQshGQpAQCAQTdkR2I8pjk6g4yhON4IYLyqIfF0QWdVRwmVHe6HNGHecpboMD8sRR1HHB0XFEIfLcQBExLNnT3TV/3E5IOt1JB8LkfWb8fT73k77n1D2nqm6dqrp1TkRV+XeG0dUMdDV+VkBXM9DV+FkBXc1AV6PDChCRM0Rkp4hknQyG/tk4HgsYCeQCQzqZly5BUAWISLyInCcidr+uet/fugD054pIWGczeVKhqgEv4EpAgZcBW7P2NGAZENmsrTuw00c/ItiY/x+vthQQD3zsE+pCwAZcCjwOvAbcCowALMDDPrpnAEtXC9UpCvApIcH3tkcBH/mE9L9+BxQCiwBrVwvUqQrwKSGi0bxLilL0z/dO0D0vTtX/vmOo5ufENCrhEUBOKqOQejLGFd/gQSEiS4AVZw9L5Q/LR2EkeM3FAByoqOO0i7ayc89hVUhU1YMdckAhQEQM4A/ANGATMFVV3Z01fqsoICLjROQGEblcRGIwwx43n5dvrnbbMdrEWDtvPDaOZ+8d9ZKqHhSRDBG5TkQWi0j/TuLxdmAaIgCTgXuCEfrmfkNEpoQ6uDVA25OYax/MkNdbBPqkRiG21tYSG2XjrDEpMb7bpcA83+8xPoaPGyIyA7jRFuXQ4b9cJO8svl9rDhxaKCIfq+qv/WgXAavNG/5HRIap6oftzREoDygByoC5wG+Bz1Xh068Oo3XSiri+wUtljWe373Y5MB8zWiwMWdIA8FnQY2IYFN+5UOLzezPsrqvEsFkVWC8iI5vRngmssUbYtW/pZFDCgedEJL7deULwAdcAa88oSmHjzWMwEhSxm8/sP1jL5LJtfP7lke+qa909TkBe/znjgPeAzAGLSskundjU9/Uf3+Ldmx4GOICZjcYgsl3AMfzWMnoU57Nj3VOUP78NYCswUVU9weYKJRW+D/jo5b/sZcKNW3nl1e/4bPcR/mvjHkb94lX++nkFNXWeTSEINUBEtojItyLyGxFxBaGzAE8Bmb2mDGshPECvKcPIOX8yQCLwooi8jKoj78Kz6FGcD0BB2SwS+2cDnA6sapOvtixARFIwTfklzPU1LADZI8BjwFhgtarWBhgn22qRHW6POps1vwmMVlWvH+1twLLY3HTGbFiGxdY6s1avlzcWruGHdz8FoNfwQRTfOA/sliaaukNH2Vy2Qmt+PCRAqao+GUjGtr4FkoFtwA1ANmY0KAUeBF4BbgFGY67583z3G4N8C6xze9Tp8DHojLSCmUVe4jdnHnCDNTJch669IqDwAGIYFC6fhzXC/EzJHFuE1DRAs5dpj3Ex/JYyMcKsisijwaJSW0tgFtAbMwY/oapenxbvAf4K3KWqf1bThJb52iYCRX5CzQAm9EmO4OzCOACWXtwPiyGIsFJEuvnoBPgVYM1bMEMiu7ftvyKTE8hbMBOADx/biLo9SHVDC5q4nDQKymYKqhHABl9OEbICNgBnAnP8Eo+5mFYxvrFBVX/ETJdLgLebCe80DLkXYE1pOja7mUQM6BPLwjk5qBJNY+gyrWFoXL9MsmaOa1P4RmTNGkdc/ywOf/0du155A+o94Pa2pCkZRUJebzDT9ctCVoCqHlXVlwJkXY25Q1gA+pf9PO7NXq/2mHFqPCNyo7Hawps6blnQn+SECIC5IjITkVViMRi89ELEaB1uA0EMoXD5PAyrhU9+v4maisNIdb0fkVB41bkYVosi3OFb2u0roA1sBT4A3mmTOZF+hsgiV4SF22alYY+KRYxj00U5wlh7bQGAAE+jGhXfN5PqHypQb4h7FapUf3+Q+AHZuGvq2PncVvAoeFpaQVRaMrnnTBIUF36ZZIcVoKqvqmqhqn7VDul6r6qx5KyedI+LxO6KbUUwZ3Iapw1JAlMJ/PhJOduvupt3Ft8fEi/v3/oob15xFwc++AwAT73PB/gpsKL8G2oOHmq8nS0iTdEoUCp8whCR84DR/VMjmTcmiYjYRHy5fCusW1LIwJmbaDDX7hdAlru2PiCtPxoqqwFI6JNBz6J8ek8Ybs5jPRYOPXUNvLpgJeptsoo9NKtmdXpVWESiLYbcIwJrzs0g3OnCGh4ZlL5vZhSL5uY23mYB5M6eENJcmdPHAlBTcYTsSSOx2MJQl81nTyYMm9Vc/ybKgL6q2hQuTkZZ/HaPVxNKhyVyalYU4TEJ7T6wbH4/UrubSuo5ooCkftmtzDgQkorzSCrOo+qHg3yx5S2z0e85ESFnxrhGlYxS1Rbm1akKEJECES6LdVi5eXov7NFxGJb2V5kjwsovFw8G4NCeb/E2uFvF9GDIv/IcRIRPn92Mu7YOqWldKug7eyL2aKcC54jIwOZ9naYAXyLzgCrG8mmpdIuNxO6KDvn5aWN7MnlEMpX7DvDZ039CGjxIfdBvmCZEZ6eSVjKC2sOVfP7SNjMC+D1njQyn39wSwVwcK5v3daYFzAOKB2U4OX9kN8JjE2mxGEPAfTcUEm6zsPPJV6j6/kdfetv+c/3KpmOxh+lnL75G3dEqpLa19WSdMQpXzySASSIyprG9UxQgIvEWQ9YYAmtL07E7XVjtER0eJyvVyeKL+uKpb+DD9U+DVwMK44+IbrFknztJ3DV1fPrsFjMX8LMCsRjk/+e0xts7G390lgWs9Hg15sLRSQzMcBER3b7jC4bFF51CVqqTfe/8jX1vf4zUuk2BgkA9Hv5v4+t460xFlW/ebvqQhtbLJy43g+j0HgBFIlICnZAHiEiRwMXxrjCWnp1KeHQ8YrG0/2AQhNst3Lt4MCULX+fD9U+TNKgvRrWBuvw3qEz87f5n2PXEsXKE1W7DCGst1l/u3MBXW99t3tQNTtACfMWLBxW4dUYv4mIisTlDd3zBMGVkD6aN7UnV/oN8+rs/Im5vUIdo+JKehD4ZFC0o5Yx7lwCgtpYvYe/2jxrN6B1gLfAsnPgSKAMKhma7mD00wcz4Ogn3XD+YyHALu36/maPf7g/qEHtNMWs0R/buJ3VYATaXA3XaIaylAuJy0xs98kOqep2qHoITUICIJFkMWWk1hDWlGdgcUViafe2dKHolR7Lskjw8bg871j1lOsSa1g4xKjOFpKH9qa+s5uvtO3zMtR4vZ3rTJ3ZZ8/YTsYA1Hq8655/enVNSnYTHtFuA7TCumZtLbkYU+z/YyTevf4DUuVt96QHk+OqG5Zu3AwRcLj2K8nClJoHpAAc1th+XAkRkFHB+9xgbi89MITwmHjGO3/EFQ5jVYN2SQgA+eugZ3DV1GAEyxKTiPKIyU/ip/Gsq9nxjhkD/5SJCzn+c3njXVBg5nhMiVuABgBWzehEd5cDmiOroMCFj7KlJzJmcRvWPh/j74y+B24vU+b1hEbLnmB9Q5ZvfMmuDAcJg+vhibFEOECn17XodlwVcBfQb3TeaswvjO9XxBcPaawtwOcLY/dxWDn3xDd7D1Xjq6vHUNzRdKacPwRbl4KvtO6g9XIm3qrZFv6e+AUTImDQcX43wAuhgHiAiKRZDbrUYsHpOOjZnNBZb4PjcmUhOiOCWy/qzaM0ONl+6ol365y9eHsqw6dDxROgej1cjrpjUg+wUB+HRne/4guHy0hx+8/wePt51COAw8H2z7nAgLcJuJd5lZ99P1Xi9qsCuIMOVY1agQ18CIjIBmJkab+eaKSlExCS0qPGdbFgMYf3SQkRAhFrgVFXNVdVc4ByAIdkJ/HrhcKIjwwDqG/sDXCWquhNCVICI2ERYD7Bydhoul4OwyIA7WycVwwcmcsHUTFRJAm7rjDFDfYXXq9J7Yn4Mkwvi/imOLxhWXT2Q2CgbIiz0L24cD9r1ASKSbjFkeZhVWHlOOnZnDEaYLSDtK+/v45FN5VRUBi5q7t57xDfm8TOcGGtnxRUDuOz29wzgQREJtF8ZMkJxgvd5vGq7fnIKGUkO7NGty9sAX/1QxdSbtuFtZ7sdWmzhHRfmT89iw3Nf8P7ffyrGLMR8AvD1gUoe3bKLqrrQT9C0qQDfwYMzM7uFc/nEZMJjEgiwvQbAlh3f4VXlul/0pWx2dou+F7bt5erVH5yw4I0wDOGBpUMoPm8zqqxS1WsBvtxfyZf7KxvJ7CKyWlWvb2usoAoQkQgRuV9VWTUnHYfTSVikMxg5Hl/RIjbaRnoPR1P7C9v2ct1dHwJCpCOK6qrDocrZJgr7xTF/ehYPPVMeh7mPSZ8hiRRNTqeyoo7/fWq3HjpQc52I9AHeAvYBG1X1aPNx2nKCS1U17cxBcYzNizkux/fCtr3MvOZN3B5lwODxdE/O6PAYbWHFFQNIjDUTsb5F8cxf2Z9hJWlMvCCXa351msR1j1RgKmYJ7HER2SYiLcpVARUgIjmGIYsj7QZ3zE7D7orFsHbsCLC/8L2zCwgL69xjxLFRNlZdbQaCoxX1qCp1NVUAdEt1suTx8bLg7hFcdFsRA8ekoKqDgLdF5GERGQ/BLWCd16vW60t60jPRgT0qsOMLhubCDxw8gd7ZBbicJydvuGBqJsMHJvLtrqNsf34v7oY6qo9UUF9XQ7jDS7+hCRRN6sX8O4eSP7IHmGce5gObRWR0oHOCM4HxfZIjuHRcdzPj60Dc2vLW98eEL5xAVvbAkya8yS+sX1qIxRA2bdjDkZ/q8Xo91NdUUVdTRU3VEaqPHkIM5ZLVw1j22/FccNOQxqLJTUbLwcRpiO9Aw7npRDqdWCMcAaYNjtfe24/boxQUTiSr98kVvhH5OTFcXppDbbWbFx7c3arf6/VQW3UUa5hBap9YTinujtVqKJAomEdgGutFVsAhAq5wS4dy/foGLzW+SoyIYLXaWlmO292A1+vBEWHFajmBbCgAPF6lstqM/+EOK2LAabPSOH1OGgDbn/+WPz32JV6vUlfjVq9HBVgkwEbMU53/KlBMA/cCd6vq7QAiciVwE+aB33LgIeCJdg9K/qvj5/8a62oGuho/K6CrGehq/Nsr4B/vmC2QhOk6ZwAAAABJRU5ErkJggg=="

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

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB2AAAAdgB+lymcgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAvDSURBVHic7Zt5XJTVGse/76woIKIxCi6QG2CAiAtqpkWiKOISmQsuZWl6zaW6dm25atvt2s2uLWrZrmZmpi1aolfANNFCkECkVNRURASUGGBmmJn3/jEyOrwzMDpD0qd+n898Zs5zzvOc5zxzznOe9znnBQvGAocAAyD+ET+CIOiA74E7uQ4IVwa/BSCgXXuUKtX18N9ciCCKIiKg1+kovnAeQRDMoijeDhxwRoQAHBIEIerTrd8SM2RYo+rbGKgxiVTpTQBs+vgDnnx0JsDXwChn+AXA4B/QTpnzy9lGU7IxIYrwW7URAJPJRGgHL0xG42kgyBl+GaBUKpWNp2EjQ7zmt1wuRyaTATg9IIU9okGv54stm8jJzqKyqtJFFRsH3t4tiOrdlxEJ97gkR2KA0tISRsfdSf7RIy4J/r0Q3X8g73/6DR4ezW6IX2KA5xcvIv/oEeJjujJ5bDhymeCykm5HjY6a6ipWbsxjf/o+3nr9ZRY8sQSAoSPGsP2LTVudFSUAYsfAIDKPnAQgMjSQixcKufTTQpp52F0hNx+iGcovcKaoko5xn9Czdz82f7PXWt1Zo3T6X7O7BHy81XYHr600kPzdCfKOlSCTCUSEaBgysJPdtoUXKtiyI58ZE6NQq+Q2dUUXtXy2/SgzJvbEQ63g8m861m3JYWpiBD7eakrKqli9/hCV1QaJXAGBsXEh9A0S8PezTPuy0ovOjrdhAzjCuxuzWLRsN6WXqm3obf28WLFkKONH3mZDX7Uugxff3Eenjr6MuKuLTd3bH2eydMUeOrZrwejYYD7dlse8pTtQqeQ8PCmKr3f/wuJX0xzqkn+ihK3/ucNuXfL2rQAjgG+cGZdTBnjhjb38c3kaSoWMKfdEMDi6I2azyI49J9iyI5+Jc7dQUlbNnKm9rTw6vWVvrtbVSORdrbNtU/s9cVQYvj7NqKkxWXmKS6uYt3QHAI/P6O9Q14VzHwRYDQQ6M7YGDXDw8DkWv5qGj7ea5HVJREe2s9bNmBjFtt3HuG/OZhY8l0zMgCBCu9ziTL/1wkOtYMzQYBva+Ec+x2wWmXt/Hwb26QDl5+3yGgx6uI6ZLWuowfJ3DiCK8NrSYTaDr8XIu7vy4sIYjEYzK94/6Gy/14Vtu4+xaVsege18eHFhjFtlN2iA1PRTNG+mZEJCmMM2D4zrgUwmkJZ+2p26AVBeoWfW09sBePuleLw93fuwVq8BRBHKLlfj16q5xJNfi5YtPPBspuRimfujxkef28m5ogoeGBfJsEGd3S6/XgMIAmhae1J0UUtVtdSZPfVyCp98lcuFkkoqKg20ucXLrcql7D/Fh5sP09bPi+XPxLpVdi0aXAJDB3VCbzBJ1rfeYGLl2gyS5m/l3tmfARAfc3W7UyktM8ZwjSevRe0uUNvGHqqqa5j55DZEEVY+PxxfHw8nhnP9aNAAC2f2R6GQ8dxr37E95ZiVrlbJ2bz6XlRKOft+PIOHWmGzPYUFawB455Ms63YHUFxayZYd+QgC9Aht47DfRct2c+L0Je4b2Z174kJuaHDOoMHtIixYwxvPxvG3Z75h5PSNxN7RicHRgej0RlL2n0RvsPzDeoORL3f9zKykXgDcExdCeIiG1PRTRI95j/viu6OtMvDBpmyKSyuZmhhB50Bfu33uP3SWlWszLP1307BmQ6ZNfd/IAOxsSNfCD8hwUGcEcoFXgHyn9stZSb0I0Hiz4Llkdu0tYNfeAmtdVJg/k0aH8c/lqSxenmY1gIdaQfLaJJLmbyU1/RQ5+cWAxa/Me6AvyxbdbZVR69lrv9dsyMRstjzp24sIe4S24fDGhPpUVgK96qmPFgSSRJGBTgcMo2K7ER/TlfTMsxw9fhFRhPAQDf16tkcQ4O7bg6ipMdvw+Gu8SPlkCj9mF3I4rwi1SsHgfoEEtvOxaTchIQyVUk7i8FAAliwYRFiwHyaTiD0MGXhrvbr6anxYlfai3TpTjYnkDd+xbtnnHsDLkqfBXuGdKTxzmotZj+PjrXbCNDcBV54Gj/1aTrdRn9Gn30A2fpUKQEh7T7x9m/NR5n/rFTE5Yh7lpRWVkhkwLG4ka1a/zvBpG0gaE45S0aCf/P1h1KHTVrHm83wAYobGX7cIdXM1lFZ4Sgzw1JIX+Ck7i/T9e0nPbPqJ0uEjxzD94fk3zC8xgJeXN1/tSCMtZRf5ebkYjUZ7fDcdSpWKyJ69iB4wiIrqG9fRrhOUyWTEDBn2hzgnMNv3k06jCS7w3xd/egNIlsCpkyfIPpxpry0A4RGRdOrc1Vq+UHSegwe+RxQtczGyZ28Cgyz7tEGvZ0/q/6iqrnJZUY2mDf1vH+SynLqQGGDMiBjOnvnVIYOfpg1HC4qs5Tkzp5GWsstaDgm9jX0/5gKwYd0H/H3BbLcpm5Z+mLDwHm6TB/aywiUlNFOqmBYldYDrsnZRVlpiQ5v/+CIiIqOs5QEDB1t/x48aS3FxETqdzmVFW7e+heCQ7i7LqQu7u0BzpQf/GDRBQv8ybz+6qss2tDsGx3DHYPtpKj9NG554aqnrWjYi/nKC9og1JiPfn86V0PUmaVbo8uVLZGcdcqtSgiDQq080np7uzTDZg8QAKpWK8vLLTN70kl2GuoeQM6ZNIHX3TrcrNn7SVFau+cjtcutCYoBXXn+LvXtSHDIMqLMVzZw9jw6BQW5VSiaTMWHSNLfKdASJAcYmjmds4ninBcTGxRMbd/1PY00FEgOUlZWSk53lkCEsIpLWra+e/lRWasnM+AGz2ZIM6dGzFy1bWlJdoiiSmfEDWm2Fy4r6B7SjW3Coy3LqQpoPuLMfJwuOO2SoGwhNnzyO3bt2WMtdugZzIMvynL7+w3d5dO5Mtymbsu+QTczhDkgMUHS+EJVcyZAu0o5SC7IkgdDk+x/C27uFNRSOi796OWvQXUNImjodbYXrM6Ctf8DvFwh5q5uxctQ8CX3AW/MorhMIJYxOJGF0ol3hgUG38tqq99ygZuPhTxsIKVUKAJ3dGWAym8m5cFJCrzFLMy8Gg4H8vFzrEnAH5HI5obeFI5c7PjlyFQ8tncibC9fOkmSFg9q2qNdrq1QqCsv01vKkcQns/Hab2xW8b+IUVr2ztsF2ZhGblJizWWEAowFfyQxY/Py/+f67NIdMffvfblMemzieZjd4Rc0RBEFg3ITJbpXpsC/AGHRrZ3lGjuOtrynjRmfAmsUb+HZd6k5Fy5atXlj0zLNLaisMej3nC885ZGzrH4Da4+pJrclk4uyvVy9G+Ae0Q6W+eqBSdL4QvRvyAd4+PrRq1dplObU4uDMLo8E4VHHyZOkKkxKrAWLvjOZITrZDxm7Boew/lGctT58yju1fXb2X2KtPNMmplpvqn21cz+yHprhFYaVSyd4fcujSNbjhxtcBiQ8oOH4MpVxB3/bSI+mMcz9z4vgvNrTYYfE2gc7Q4SOtvyMio4iLH0V1les5QT9NG9r6B7gspy4ELy+vVfMeWzT7sSeeBqCDnyfNBQUZc1ZLGtcGQhfKm85hyY36gAf7LaT4TAkyrVY7a/1H7za2nk0WCiw7gQ3Moki5TnrhSRTNdmgi5eWXJXRXIAgCPj4t3SrTESQ+QBAELlVVEPmG/ac4hcKWZeYDk9i6eaPbFZs1ZwEvLGs4mHEVEgM8smAhyd9+7ZDh7tg4m3LffgM4WXDc7aFw72jH12HdCUko/EeDy06wsRVs6vjLAIC2wg0Zm6YCT08vdJX6BttVV1QDVMiAvEtlpeT+dLixdWsU1J3CXYO7U6Wt5pfDBXbbAxTknqbiciVArgxYD/D4/FlN9jpMvRCwebFrVOJEAFYtWovRKL2mazSaeO/ZT2uL6+VANpBwvvBc2x8O7Oe28B5o2rRtdL3dDeOVO4Uh3cPZk5JM/k9HOXLwZzp174CvxhJUncg5zb8eeoOjPx4Dy8vic2pN1x7YBvQA8G3VmhY+PnX7aNIQr7xIDVCp1dq8SOXd0hMEgYpL2lpSJpAAFF4rQw3MBdKBCprAK/Fu/mivjG0O17xa+3+GaIn+zO5GDgAAAABJRU5ErkJggg=="

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

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAA3CAYAAACo29JGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABmUSURBVHgBrVpZkFxndf7u1vs6u0Yzox5ZkiXLRmMbsDC4GNkUoYpAxpVUwKEqwENCUUVh+zF5sQjwkEqqLCeV4KpUSpgXTBKCAjg2ceGMSfACMh5jybZsyWots289PTO933vznfN3z9jxJmNf6Wpat+/89z/bd75zzrXwPh/H7/pSLpL2JmLx7KFMNlNI5HJj0XQuZzlOrtWs6T2eEy1Fktli4Pular05NfmLxx+vNlpTR4/dX8T7eFh4H47xsbHcNbv77hzuzo/HYs54Ph2HZ7tIJVPID+5EpqcfTb+F6mYZ0xcv4fLsEtY266jUW1gul5HP5dFq1tHb0z2VSKUe6BnKnPjyV48W8R6P9yTc0MDAeCoZuyfiuONRx0FvPoWhnhwK/V1IuiF6czns2H0VuoYLqG2u4+XTp/DLk6ewVm1io9ZErdFEIhnH6Mggdu8aRuGqvbBdD14khp7u/Im+oR33De+9fhK/4+HidzgKO3eOea59L3UzHgYhmkGLmg9QmV/F3HIZi0tl7OpLIhmJwqb6bDeCRCYPJ5ZCb3ceuVaD121kMyn09WaQpYA9w8PoGRlCNj8EN5bG+np5oln3J5Zmzk8267Uv7xg9UMS7PN6VcIVCIecF/j38eJdHDefSKaSirpq/1fRRb/Fs1DG9ugKEDYx0Z2FZAeKpDKKpHMYSaQwNd+OVZ5/DK8UZnFtawMWii/6+LK7mGl0Du7iWL6sh05VHvV5H6AfjTiRyfnH63NHenVd9493s177SGwsDA4WwWX+Wu73LotZ930eTFrAsnwBhwXFsRD0XHk+f1lzdqKFM17MiHiKJBKKMv2QygdmLl/HM1As4XZxHcWET5xcrWKhaKFVdzCyWcPHiRTRqmwhbdcRjccCh8iyqLwyOPvnzH58/fHiscKV7viLhrioUJrhJCmYXwjDklRAhn1euNLCy2cJag9fiSTR4sRVYjCUfm80WfNtGhEJ5UW7SptuWV3Hm+ZcxV6piowGsMPZeXVjGI798Hv/w/Yfx4E8fx8zyJpbmF9CqVxD4DYS22WIQ+LDCsNCbzj9749jYxJXs+x2FGxu78U7HcX4UhlaOp2rRkgfyZ6VWw/xKCa9Oz+JVIuDs8hrWKlUKbkNUIGARTaX0/pCW9hmb6VwakVgUpUoNEQKHy3hstFoYGd2HcrmOb377b/Hjhx9GZX2Znr1JgZqiSlWoy8dGI24u9Bs/uuWjH7nrnfb+tjE39qGP3OnXq8dafLh4hqUPoUaIEk1ec7hpmygZMDZc+c6jELzuuS7iUQ/ZbIraDxDQ2nYYIBpLYPfe3VgprTOyIowsC92pKO/vR2FHFgcOHMDQ5z6NmcsXsHTpApLxBGwvBouuSQ1B4tx1HbWiYzn33nrrp/HYYw8de9fC3XjLbRNhvX6sRY1T5VQcNce4CrhJy/IomEPECxHxPHSnk0gTXBgXqFZr8BmL2ViEwqWRTGWJftwg14nGU+gv7EHyhZfQn4lho27ianTXEK46sAe7DuwlWvZg/9UF2H6dbuWph0A8JXRoaQ+peBRxPjMej6PhRO8dv22iOPnzEyfeTIY3dcuxw+OFMPCP+0HAjfrqih3XkMOh5cTxItRixHMQ5U+f7CMgCLh2iHwmgbzAezaLRCrPgJEnOfASSfSPjOLQ4ZsxNDSAwmAfBrozSESAiE320ljXM2C82RTIogCEKgpozhiVY1PJH9i/B1/50zvgUu7Aso4fHp8ovJkczptdHBze/Sz3PmDRYvXqGlq+8XsRzRLvo9uJFeORCGLRCP8v7mkjk4yhK5NkfDGGcimM3XAD8jtG6Eq0uGyTbmXT6rmebvR05RRld+wcwODITiohRkW5FJL28iyNRZtAZDm0nuNovgzIYlBZw56hHbhxuAvFUg1zS6WY7VoTo8P7HygWX6q9rVvecPP4PTSUoqJYrNXy9bpaT67ZkgYCJmZuIuKgiy4Zp/ViMRdRWm11vYoMN3bw6quQ7e5TdwwbhEa7SfPEmMijcGoeBmjBTE8X1pbmwLhGc32VWosgFIGIvK7Emu3xdKkYYwOXpODm8SOIcU/TD96PkZ79eMZS8xV8O5T8e/dbuqW4oxVaRy21kFiKFgv9re87XC1kbInb0KTIJ6LozyfRm4jRLX0V5trdQ9i1a1Q3GDAliCWJAozdVtvFuDItEOGKuXSecZlBT/8Qktke5sMuePEcrGiSwkYZaq5uUwLDoRVjiQyaXDNqtej2CQ0V2Q9vuOvm8Ymxt7QcH3u8vXv5Swu1YPKasZylX4UEFaDZ4Hd0o0a9BicZ4b4DhfQkg30gnyNkexSWyqFQlh1VUAh5T+hQMUS7+so8v2/R9ZjgaR1WCRQqydRBmhZhXnSjajkVTLyGOg4JVC6BSohBojfH9MN0YXZlLOVYpIQ48gbL0WrjFGk8bCdoQwp8/RCqsKFaSz8HRsA6iW+93iSYUDBqs9kQMtzARqmE8vwsKsuLCuMWqZeT6qFLJhFsrmL53HNorM4TO1bR3Cjp5l2HLuvFDexTOItWUyvrFvk8WjtoVlG9+CJCgtf6yHX4xXNFmM0at6L6xz82PjH+BuH4+3fqxhG2hWF+oovZbc0FtEAnDiUZy30NuuEmhdtg4pazXvdR2qiieHkBq5fnUVtZUJYhNm8FTO7ctJvIojo9g43pi6jMzqG1SapVq5vcxT+2GzMgolYzsWbx2Ta9yE31wq+U4TAEHnmFqBpYBuG29hyKhPe8TrixsfECv5kQ6Ts3SZzI70nC7ggmCVv1YxmdCLDUaLEKXbTOsyWu6Yc4t7CC2dIqNpeX4G+U4ZdLOPvEf6O+eBE2GX+sdwDllTWykDJqyyuo82fQbDCxW8YVlU+axI12GvLFL50QUcamcNb/feaMelag4bZdudGQ4+PjE7lty7n+hNGAiS2jCd+kgCDsWF0tCQ1sWxc0cWiEbUlO5L2JaAyXS2WcWShhs7zJaqGJ2eefxUPf+S4e/va30Jh+ERHGWTLfhxKJ8ursPOqbG1QmlSdoKZhPd9zOq5JEGJv0lubKHBzfxakz51EjARBuYamx1L+2BKzZwV1bwoVW+EURQk5FEgEBtYzwQd8soFY0urCZkMk3O25AJbRUOKFZ5Y2KCntmZgEXVsrKYlIM/s/92R3Y/6EPYHN+HpFMD3J7r0UtcLBWWkOtvMFKvaFbFFcMdZ/0FgpkBQZtLSEB2X7YRNTTrxSpBPNsUUKgaNk2QSgGtj6u+9w/drjAK2MdxJFYU4QT0JCY4/OUctnGUiKUJOyOYHLDJkGk2mxpDkyl4uhngj4wPIg0k/qrU09TVy10XX0QQx+7DbGeASR4ZodGkR0eQYnWLc3PMTevUklSQrUVrDgYGCHl+aJzrt+wI3jpzGlheiqQtYUanXAR7hTSNcdztud4Y6/tNnRKGqFe5iGd5G210ZK/LovyacyJqLNILQuYCLlmYs+xf1LozeL6vSO4arTA5EyrECF9UUwiBSed5c8MYkzwhRvG0OS6peVV1FjmNCvrWj3YKoxvBBMB5TOV7XDzP/nhv/J7cd1gKweHnX2H2xSx5icmXCtsjYsfhG0B1Rj8t8nFbPq+tBCE31mh03ZJ/k9uogXVHXk2eKbJPFwKEKf7DKbIIbuy6inpbJ6wv4H0oBSuUUVBapQUK8W2wj70FYawdPYC1teWUaP1kr1DDIcmn+128hGqq6t4cnISz5x+CcVXTiOR36FxLx7VknDSqDNihpYJD7K8MZfxdqgjVsfVNIzbMYTX5DirbTWTNwkgksyFePCDpASN8E2C0NIGK9E69gzvwM6dO8C2F3Pey4h2M9ftGoTdS1rFKiKa7kZvYR8WL04TMoi8GyskAxV4YbQdZ+IpLTx36jS+/Xf/hB30iOHuOIlAqIQ+CDv5DW2rdQwXCmwUSKztnIngsI18oXGJ0NfPgXzW4A0UxYSWGQEtE8Ntm6+z+GwSwsMINc31mnOLKK9toDK9gj4CSJz9kxjrOe/0ebplFJHBHiyFFczOrDBeAwWkkNbwmRLcoEPTbI39J578Fdt/SewayCBOhtMgWReXtIJO9m5XLW35LDUKDrlEyIKCRRvaRagODCsKtdODFIqmtNpGymg0qqATYXUgloakiHQCw2zVHbzxg9hH8hysLGLfYYJXI0Ask2E+Y73HpD29tIR//JvjmDt/CYdGsjhEt0739ilYiVJDTU1SS/r41clnWEo5JhVROFd6NlJPtkm8Gq2dsjRHC+kIg5y4aq5jVeWNmhKoSfJCWcyjIC5LnAY1Kvc4XFhShNwrlbjcGyPXEz9IRMgRCTBrK6tIZ3Jw4xlEGHsuPzeJcpWaWMXG2aefQfnRJ/GFPR/An//xJ8lHQ3QNDiKR6yWv9LZcTFzzsUcfxeLiiiRZJKkASRUeK35hNBounTRlbYOiGIWXcu5WKfO65N3S9oBJjIHmP2EnhgM6akEphTTvhe1cKM0gumOOBiywmzXzbz9FlciYpQtlT86RxbPuEwLNONyf3IXwYwfgDSZx/sLTqJcvITswSGJCtw6aKpy4lhDrfz7+Pf2/AEiD9Vxcaj4K5yigBYadhGHHI7Gd0tg52PbVUMsKsYTmOXFBWaBhuKECSttFm1tWdDSo2VvU6pyRgoY4E1lJhsQ3RpTMMdas83NIsAEU2z2K6J4hui4bQ10eN1fBgHtAU0W6v4/CMJFTQE1XVNjDP30IM3PLurbAofyMRo1ldZ/bYbYlkLnWbihxK0LLc3qTIGQnv4WdnGfaQiZ5GxYnKSKQElIAR644phKXtGGzovYYd+nuHLpYk6V5xkdHED24G3HWeU4miyBqK/uw+XiXShi59gaWbiklhm4kQblamLl0Gff9/XeUP1osfuUxcq9Pl0vw/5btK/wLahoDWYZhKW6oN5YkmZT4KWeEMEGpKaDtw1tpgJ+TRLkKWbxlOerjvsanr/7fKYdahOlahJQpz97KSA+83i44O3tg9bFwjXFZ1zScgtD0ZlxyUS+eUvfmqspCmmwy3XP0m0oMRGmi6XqtpXggyveYJyXutUoPAmz35UwKkyDk2kXGYzgVthEl9A2nVLg3hFzBJMZAluQt3WTxc2n1CWdse4sWqnI/exnt9MHEzrPpkzj7NbIY/mzVuD5d3G9oHCtVkvXjaTgk0paQZjaaEDTw69+cxAwrC9uWhqGtQsn9liP0LqEkQB6sZZJtdxJdJyu0jQJaLggvGJfcNqloS+pUEUwWFBfKsAepM4GWry02x3G3LCbXoqzAHYM/nPak2YJzkMqwtdfVg3R+BHHmOpfFaBi2KYPkxHa+DAgiymUZy3Yyg5PP/hYCZ9KjFF/yuLYvSpOejsR3G/6bRPROMbtVh27H3nMu9zLVoS6GWFsaC75dJ5i0FGrjtFwi7qG8XmMPx2sDiwlw0/YLNF4F0aSma3GT6h78G8/0IkaIl7QgnWhxJVOM2mqNkBYFTymAHTIWgfEy67smQSkRZwdMlCixyLaD8Fg35dEjjIKCDpAE4RYnDtuYQc4xyezTPIGO0ULDUny6ne8bUhpjzyIaNdX4ZqWibT1JnA0+3NHkbm91MQR0JODXqnUCRERGqG1rChEOFAGF6dtaVlHrLVbn9U3tbjkpdspo2SYr7Tr7MhAl2AIJRhkOeWmDFC/CYUqVRF28BqEhGlsFdvsUN/ZDe8qempoqUfeTW9QsNLlONuQpWwg4nUmixBb4dhYx1bm4rQinlbrhNGiF0noIsLi6zu5zBbXaOuqVkvY/ZXLTqq3Br5bZXiihwQ5YQAS0YzljUf5udWMNFy5Mqwu6bKfH0hx/sZqQ9aMclzXIdJraTfOV31qB8Rq0SzW5kZ44NfXUI0XXMIHgcdKdcYOKobbOJFAFkiPsHNeqde1XdDphAi4iWLVtSduytmoK6XotkWeushUwd2lGKZpU3tLEbTklk2XE9dnDjGd7aaCoKkViMWQ1cO6VFzAzvYgWfUqGkIrW3KVHFxZXNXKE2uCt64zd3o61Njvhvw/IblQ41w2OtQL7HoVcukTYKU5tU3IIiZVfcukeTZb30mXWuktYCV2vUjP1nrmH7ssuWLnl4vxCGRt+Ecv83qP1xYqbpQ3sObgfIwduUCTUkFBybtPCZfzP5C+03GpQ0Kv37UaxeFlzWdQLNYHLpEdCxlFmtR15neRtBA10dqBF2tzcXK2vr3/cb9QLgdZSUKhPJuJKgVIcQy2RLwp5lrwmVnBdT5uwOVbeDQojuTHCJ8dkdkDrSTnEuShm1qp48eIcFliTCfL29XXrWCuR7uJgJK7WlhGytNkvnT2FBx/8dw4uG9ozvfev/xIfvG4vW/TcR20DWY+hYktcu5gvNVUJJva2uTEN8x9TT0/evyWcHJlE6gKf/SVPRkSkQWIdu62Szc26aa1QYzLNaXAuJwIIuU5EHUXJOr+L85qQ2ixzUYMuI5PUKt3z7Mwy+x4zeOHsHDfFOCTqbZAMCPI2Wg3d1MrSZfzLgz/Ab16Yge9Ece11BzHxmU9qXtvZn8PBfbuorVXJetorXa74qNQbJhduEX7t/3x1bqZY3HJLOc4Wz04e2r93kl2lcYkhcb+Q6CcxU2UvX8dvTOICEoFWBYFqXFp7iagw/rrGXpu2sjKPceNs2IamSqdjYpWNoJO/PYeTp86rayU5vurhUESIusy/mzS3bwnz9/GJ227R8kpCIUoKJ14yODxMkLuEbrYobv3EKC7NLnIQsobp2RIuza3gpXOXJl88c2qyI9Pr2unJmHd3vVZ9Fu2aTUmyVLwaX06bd9I1WL9JfdXiPNxnzpGySFBTvnOlNSHDyDjJMWFcWn09uQjW59eUNoUKAJZqWhpLdWEijqknXeY0h+iczibx4esPqkCKyjpr93TWtxhc4l6aOnHd2ZvCQJZW3pnmGgXWi5/98pE7vrolz+sGIU9MvTDlepH7khzQiwUEncRNxR4c12p8SEtBkFTmAoqAbb+XeGsPudSVY64yRTPW4sAi4do6ohKhBGk7bYtOJaLDGv4RGvx7R25BOu6itr6CxiZbfxsbTCFMLWuL+qJOg/M7eTsiP1BAvn8nz0Gyocw3KFjxtfK8YYTlNoOjm371DxjQBQEUMzI2JY+83mS1OZxY06XAdWrfDyKkWzGdHch9pjtmrOhw0N+VSnMgGWF7xTeJXmpF6V5bJj9aVieRWOgj0f7Mp25hp3odpaVp5r2SkuomAaW8NK9UME7k7d2xCx7bFhulJdQdr3jjH3796P+X5Q2T1alisUTvOkJsLym51QqBcF+taxUgBWWzaZozwi/lNSgBiGjbKpIaJC2IVbuIpK4ME2m1QW5aepqerVRYre+RLGvdaBlXjRKc/uovvsbKHtiglcoLMyhxPr6xOEe0rHJGHkNvb49WJdEkJ0lxTm7TPSU7mzmCNznedLK6VCqV+nL5M0TBzyuiNVtb34nlPMeUHLJpaTsIo5FZtbJ8cUcBGxiuKbHaaAXagawyFltsEUrLQsi2cGhHG7ym+ZohG3niiafwk0cex8H9+zC6bz8S7LvEiLqpfDddck3HYvJq1dUfutWMxRzcsf/QbU+9mRxv+arGi8XiiXgscjeUsTTbzRiDkltvNWiOag9L6GIJUXkYav4RpUiTx+X17lwaa+ubGNrRzzU4+g3t9oTW9EGkdSFuvry8jFcvzGJucRW/fuE8Mv270D1yDYl3NzJ9ozrDW5mjG7Jlb/rm9t0jez544q1keNv3UJ6cOn2MqeFuebgkag36NgMXEKi3hZZmbLXeUheUZm2DAONbrtZ4SQ4mBQF7OJD02QPp78kxkWdh+rquso8a86YSde43k8ugM/x0BCHz/XTBPGOuilRukMVyDWvL6xKLdw8M7T/2dvt/x5dsfnvm1WONWvV2NoFK+sBOYQhjMdlUpzsmgq2tryOVTmvydm3XTIotSfA2omQ1v/+Jj2MoG8GHb7yOiMril0rrUDkpe+LMjz/8wXF8/Wtf0XdQZE6epwU3lmbQPbSPj4iUVhZXbt91zc3H3mnvV/R61LnZhRNBK7ieOaco+c1AuZRGoXbJJGRML9M3JROvLXGM1WhZrM0qSts82/T/hXtm2WLfu7uAW24aU2QVQDHtVUurj/986GGNXelNSqlke/LuWFZa5MXrPnrb9d868eSJK9n3Fb/YVpybK746PTtKx/yGKVBNgpdiUvKbVAciZTaTwBIHGx4rgQ2iqDSO19Yq2L1rgICwjod/NonfvHwRF6dndcZtc3AfIQsSripvGPlsQ0SlyatK800ZwyO3c9993/ve/dd/5I67i1e6Zwfv8phfLU/2dmce4BRojPFXiESkNGKyl4qZPtjHFsPyRr1dlTeRy6TUeulsTCvq+dUK+yuuts49FqA3XXcNXj57jooKtbn7hc/fjj/5o89KQ009gfE9SSe5feiam747+dTr3zN5p+OKLffaY+qlYvHUuUtHmM2O1OutE/JCjLhi0zeQL0fQHgaWiJJxtguWVmoYYEWQp5BSVi0sLOKXT59ErrsbN990g1q/Subx0ivn8LNHH5N3yCYZj0d27L7uSN/otVP4HQ4L78PxqcNjhVqlOpHPeV8c6k2PnZ9bwyqttWdnv9Ko3nyCyBqSWcThsLr+ryfOYWXTJOUkc+W0oF9diFcwGbbCx23Wl0WSCbzH430R7rXH8aNfKnz/J5Nj6017fFd/9lDS83JXjw4UHC+ek85kOh/DM89fLp2fXytZjjN15OYPX/juDx6aavrJE8Xi1HsW6LXH/wEc/DCEqlNfXwAAAABJRU5ErkJggg=="

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

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAA3CAYAAACo29JGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABu2SURBVHgBtVp5dFx3eb1vm1XLSBqtHsmSLHlJHC8hixOSWGYnCcQhYTunLD5podByEv9VutA457QlXQ44LRROSwkcOBAoYFPKCQkktgmQQBxbjp3YsmVptI6WkWbR7POW3u83spNAyEb6kvFoZt689/u2+93v/kbD63wcOHAoEoax2zD0rVXD69U0bZvmeRHPRQTQ4FYrqGZS6ZXp2biWy6UrTnXY89wjcDC8Z/++OF7HQ8PrcIhBIVO/k4scsmxnqDK3gGI+j1BzC3zRKGyDRsmJ/Mfjf67nQXcdlJdTKM3OoZhZgu4BjuYMe6779YpbPfiJ/ffG8Qcef5BxDx746ZBhmHfzzyHXc2AvJGEn5qBXbF7ZQNVxoft88MW6YNBIT9eh0QgxztM0/u3C4KMYH0NmcobBs0EHweVJ1Wr1YBn6fXu/cO9hvMbjNRn38IGHtwHm56FrQ2qhfG9laR5nf/METNvBYEc3fC6N49WdcAih7hiqlh+aGMdzfT6LRvDmpSJWxs+hurTCqLk0zYbrOPxAQ8XwIbymGw2xnsOere259YO74niVx6sy7v677oo0+CJ3hwbW3xVs64BrmryApi6ysDCHzEqaiyvDTWaxrq0dlXAQORpRqFaxlEoimVyALxDA2rY1aLQZ1VQWetVBldGq0lpbs1GFjkBsLep4ffjpEL6WZHY17Lv1tp33vJr1vmLjDtz1aYKDcciwfL2WLwC9OQK9rQ0F1k5mJYfUygosv8W/lzGTmIGfkapn1CqMzkIyidF4HAF+z+ItLUPHpmgHtvasQ4MvpNK0IGDT3AijqxOWGWTwNLGJZUon8DOnmEdxZipeTM3t2nPvKwOeV2TcQ1/51m57bPT+oG5FqpaBs4zCqak4Cp4NR9ewuLwMm/XFNIXJ8ztYYyPnzsNgVDqirbBZj6FgCHapgoG2Lmzv6ceTp59GQ30d3nzZ1dAbm+F2tcGl8XIZV+qOf7iMeKVcQH5qBmVG3ZDPNKQd3duz57N/dfDl1m283AmP/eyxO/3NzV9r6l0XmMss4P6H/xcPH3sKc9kU6iKNCIXDcLiQKg0JhUKM0hLGx+LI51awZetW6LqBqekZFEplpLIZLKfSsF0Xb77ijZgvFOHr7Ub39q3QQgHWIsHH72PkLPhpYJnfy58fg5HLw2AkJcKGYQQ0w/jA+2/5UOZ7Dx94Aq81csefOHqn5+r7LdOH5eQi/u4f7sHZSaZX0I/tl11GL7tILi1jbm4eAX+AqaRjkSnY1BRBpLGudnVXV+9XCDQrTF2DoKLzYTHZBgYGEYm24JMf+zjMgB8O09BfcpAjcuYmZ4FSiUmpsRZdlGwbZbsKr64Rvq52+OoaYOva3htvvnb/qzbu1/v+ZXdwXf8B/7p18PwmvvCl+/CzRw+hqaUZ9XVhhJlSI2fPIp8v8GxdQbgs3GBqhhnBUH0Y5XIFtu2q2zQ0NKrXuVyOkSYq0jGmYcCyfPjoR/fg9pveBY+oWRyfgctrSppLS5BncYxDh3ptTQg0RVGRtHXZLljv/PjWt9949Yum6Ium5fHPfr7XZ+oP+oqlgLG4hOXFOXzxgW8Ryg30rFmDnp5uTIzHkVxe4kLZkJkyEo06GrW2ew38hPpivlhrzEQFk3UqKVsul1EoFPgdBwaRVlqI49oYGTkLfTmLjcEmWPxMNywa7qOjDLg0yrcuBv9AL/yNJDmWqdKWyYCA/FMovuOWjVd95zuHf5z+bTvMFzOOyX8oZOkRwyAUk10kzp5DsZQjGvoxl5zD5MwETBpVz9ds4uhqa8Wua67Ghr5eWPToEgFmIjGL8dlFzGfSyBFIbNIun89AmAi6QnR1mGZSj3JU+dm3f/YTVHIF/NHQTXzfYZ8zEOiMwt8k6SdOYHpKdkgf9Ii42RJ7ZBzlxWQk4NMPHdj3+e237tubfknjRk6M3G2srPRqZBvGcoa14SHAYvdYzEUuMhB0sI6Ru4SP1pYW9K7tZe30o6WtGZ5bhZPNwsnkcfZZA2uZik9PxHFsbALx+XkVDTHIZNSqVUlNWwBCeAm/a+OBXxxCqK4Ot7/vfQhF69n4LUghGvxckzSmXSgTQeMJFOeT8BFNdV6zqtm9phkUprT396bl6eOnew2fcVCjd832dhjNzeqiBr187OwIEukUKpUybr7xbfizOz+JSy/diK7udoQbG4kE7E1cqO7QzaytumCYaeqDx6jMECFXSlXkCRBSQ9L2xSjpZY5iJIYy2iIonYyP44pdN6Clo03Vr8nU0+SZaKxNJ1EdnYWeLajWzhPUugVF3aBvx8c/9Zc//Oq3/nPugj36842r85v3m5LT9Jhm6XBbwrC3DqBt6Dpcv2snF6DhLW95Cz7255+CFwjDq6+HHmEd1DdCCzfAs0J8+KAFA2wTTQSeRlVnrY1NiPC1oZsqA8SgSqWi+pmuKJmm6FihyFRjTX7hi/+uaJh8pkvNTi/BfXocxvwyfAJCrGk/24aftefWBVF32QY0XXUFrKa6zz/fnovGnfvSN4bcoyeHAjMLqm4MIT5aDcadhhDaevulR+OP/+QO3o6Gyxm6n1fw8SFo6ajU8kwiJiNQoVHSFmymlaBnkPUpCxLwkYgx0VAlktq8l0Mj5VG1yzWAGR3B0V89Do01654ahza3xD5H6+lwk9fXWbtenR/Whm5ErtoCiwTAIDvymcbQk4+dHvod4wKGfqfBRuuOTkB/agRmgjkt/E/+o4H9bAnt7W0YHBgA1NJqXxfj1UDDdNUYDZ0p7LI2c+k0ZmZnEAoIBWNEpBb5mXxPU+iqqclAGsWFaMqzYl1M3Ye+fxDGXJoAwjUw/Uw+NElD8lVjfTeCV6yHGYtCZ5sSOscyJiprCMK5+wXGjX/7wV76e7c0VlMSoZiDfnYM1WOnYNJrOm+w8ZJNuOOOO4T+qENgvGYhz2c9eNUyPDZZlxFzyiUU+YgQuntiaxBj/bh2RaWoNH55CJarlBQD+dqrsQ/12ubfJ8bOIsdrinPFYi1MPtvbAd/WfmidTdCYmqbUqWQKjQpI+k4mUH7y2NDxffdHLhrn375+t3HlVlSjRDzeQGYsWb4vVwFOTQCPn6EXl3HbLbuhiuPiLMBFVYrQ8hlohbIyUpp2iU1aX03DCglvV3MDrt+2mWSa6WSob6k01Fb7Yy1iz/0tR5FIODU9izJT0etvh3bpWmhd5KCmpspD3Z7R8hOPzPEFVH/9DDSyGh/Lw/VX7rrYChy/+RGPcG82XwIkU3Am5oFMDibrQRc2UMgBZwrw6D2vo5ELqCr0cllTKdKxR3/5BMYTC1jO5rC0tESwrLKfBRDjgDoY60QHJ/I39PYhly/hp8MnuHBXpbLrarUalBSt5YIykEiDCilXMqxh02W9EACWLqDVTlGpizKzhUBTIUZozBKfjEXsuaa0Dw87lXGJ0+O95AvbdDZGV75FiqM11UNbzKI8lYCVyqmOIUzDc0rIxxeh5Za5+DCKS2l8/9sP4NmpWSysFJEgtdJ4nQBntrIntIlpQlbfQa7ZStq2kwS5xM8fOX6C9VfluY6qO081cxrsXqhk0i6an6BUUdVqOVJDVE8Nw97sEqosFzNPYkAK5rKVeJK9dJIdsmDE6oeOHz8eMd3jp7f5ejsZkVYinaGIrkuIdbpaYNJQj/DrTiTgkeV/9V8/h/j0JPqbGrFz5w1Yv2sXNvT2Ik7vZQnhLqMZ6+hCY31IkWlZVTMbeX2ojm0mzKHVQT/751NsFUvZChFQV3w01kKizfPOzy2iwKhLixBDi8WimjgkZYWZmPMEpSnKGExZS+p0NdoSE40Rc3vaOei2gleWOt5tGpmlIe/pFOzxBuiD3dDaWxUWSgo4kiKkQFoHo8maa3omgv/55a9x+ORp5OqbMfCe23H5ziGcJv8sVEq45Y03oH/9ICnaAvJcTHesB22s4wIjmmdkS2zuAZ9JQ8JI51YUd2yLNKCnvYOCkYcta7vxy9Ojqnmzr2B6YhKJ85OoL1bhT+URKLuq/6oRlufoDJfj43NXK/xdJNSGVnMG2w/rbZvJSG8VRq9zHNGOnwZaSJPWdsGNRngBo4aLci9++ep378bjz4xgoLUJ1918I/SyjVBXF+7Y+0mkqWLV+4LM+SC6Cc0OvQtp1pkMqkTJ+WXyzPQyskTiJjKgBMHGlNGHaLdSyGPL4AYsLiZVP6thiofTp07gv5gpHVYYG3ifnpYOtJAMCPshQwB62mDS8Q4dVvE0BXbiF0lA/t+rTX3rR8fNdHabtGXXkOZN3sfFeUwVq68bLgdSVxU8a4EoWJo5DzoLof5BOIwWZx4SbaYBa1BjPZAVK/7n0fAyZ8CVVArTXPQ4VbGJxUUsEKgWCVDz/Ky7tZNBYCOnI3rbOxFkaj1w5OcKGIRPDrZH0cAG5oi1/L+dqb1p7QC2XHsDOrZegkC0oSZHVGX8Ibqz5xlcg0tOXJ1IxE19x+ZedzED++wEDHrZNQjjAi4kzu4C6y3KMWRdLzyyc4dG160bpFvMWqGXqFq5bNxUgYSVCDuBUDfp6akVFGj4JIWjBG82xQl9JrVM4zKocCE9rM3NfQMYI7G2mSFybnt3j2oTOo0J8lp+AkWRTlI6JwfmArnuYmcnztB5CyPjiMxF0NHZStpWhEhJraK2TS8Q3Tm5O17EtDWONkwzQwQfGlPhGGHlipyr2IuYIuZiCi5R0WmLwCRLMVrriZw0zBYAIatnxLz5JfY4SUO5OpdXLFMvKXHBBWQ5xiSzYmQSc1THMux7Nr/XVd+E+dlpFFey6GqJ4vLBTRidnyV6KtmW41SQSMspg05sWxNDE42y/CHky4x8cgap9ALqyGfnOVo5yXn42Za0jhjBrE4ReE03I2pilHSV5uitoUJMI9yZeVQJ7zr7kiZNgCfoSWof6ZMwr6dkSaCef/ppBlCMrCB7bhx973wrCXNYTeQC8VWmbFUEHkYpyf6XLoqhedZXTjGLbH4FLYEoPrz7VsTIZA4dG8b3HzuCC6OKP+BTinWkg0axjjXdUjVFuRc51q2f2ZOMn0dmakqNPq3hejRRcQv5ONwGLGYD2ZbFfqG1tyjmIMhhk9ZofWtgrumAPUFPipZRZiQFmbhwEWx+dfgn+N5PHsHYQhpBFvNV5Juf+eB7VaOVvQBD0sjQldpsUBsRJSRHY3XTUBOHcNUlpucgUdLjtT/3nQdx5NSI6nni6Y7uLsTW9sAgQHmGcFBHSXwSU+G7ucQkxikeaeTC8hXuSyBnF1F55jjnzTC61rfBT1Jt2o8fSyPaGPFfsp6p13SRSQsCeRt6iJztqNLA8tgMAsL6ORxuufU2/PMPfgStoY7cMYbr3/F2VJi6JeZ+gGNNlSpXmTfOMjWn5uZwfnKCtMxWfctjJEtOFY11AU4BFTx26jhGZmYVhEv/6ejoQHd3N7PCgqUmCEO1DIPAszQxhhUOvVbVVgBXI+215i6T+gKNPEa0C3DGjNaH04SiStpLLkRKj2egs8dZG/sBMhRXM1WTdYNk4Rv6YbEH2eenUCDKPXLkGBapFq/rIdCQITx05BFMT0+gIhomc/9d1+1g2liYJTpOESllSM0IWKFGkm01HXioo0Im04DtKHKF1lb2zoF1q9GlQYy0xs8yRNp0MgGNJMBkZG2jtudANi5hQwNrLbZ+A0KRZq5Bx5PHTmDbpZvjpqPbw5rmySrhLc4S5RYAMnlBSJPDqKOrq8DhVK1v6Uf8kTEce+IJbGYttJF5PMtGW+UCjj5zFkVGxKVDJqYm8e4bdmIsMY9zjEqe6GV7NZZuSe80PTQSiCxmh0YQKnJc6uJMtq5/rRqupdcZ5K9pMp+VpST9X+HyXNUXXa/mIGlojZ3t6Fq3HuGmFoWmrhqgHOSrBQyfOZk2rWvyE1IfisJotWkAHhGyeIbk1ajxTZEFNBlMTTw7+nMKrCX0NUcRa+3Fmy+/Fk8NH8V8lSSArL/EG5fo0SfOnEIqXybNylB7Kam005lqOj0dJMuIUB7UanDFwpd0FMVsWkkHIlWUKdgKq2drY8PWlMxHcsuMgNpQiRAnfHR4yWXKZ+bYuC01z4lCZxFssov2CdMNrQwLWZEv0I3KI6JpqHzmxTT2MYVRGkVXNGLHtRvw7JNT+MQH7kCSRc31Ysslu5FguhbY956dnMIoYT/DvlWkbuLjzRyeVBekmsWGrGY21ki9DJ28pezjxTrr2YjziiwLKsk5ZlhkBleGbzqE35OJnwZaQrssYSRs1EXuT/CattI/uatk12TGMs8xdPcwBSXfQb59v+Ldq4No7cmtGUUa6nkk0tZaQuxmtMb8uP6GMmHaj4XJLNysi3buzvRuGmDaUJBtbcPy40dxfnZKOSjE5m4xIQRARIUuUycRySFEWcBVWkoVQe4jONwdEqMFHGQS14waBfMUYLgyBSm/e8weW82CaoxVJNtQc0Rtwr9ghG7pw2bf9n3pqeN/c9jz7KEax6rpG0oAUCNJDL7gFkL6gErLYMRF34ZLoVOYaaFgGo21IUxy3MzNjzxBJtwg6ekjK0mpDFeqsgiolqFaRF0oqIwTcixzYZapS4bK8YhaJCMSZOvQWR7FEkUhIRJSKYZExFPajSzRuzCseuojpejogg3eqpHQhu+998G4GlZt1z7CD2vG0UWaUqk41vuuhEnDBJE8jzf1HFUzTe1d1EUyaGpuVcKMPM6PjpFKTeFXTw3jN2dGuOiiKvwgC725PkCDfGo/QRBQUkdFyK1tIVtU0k6eOU8H+NHWFsX6/n50dsYwOjYsUKacItfSVzcvlfNX5zzVBmTdwpaYvjr7IoXkr1+cxKEH9rtu/m7ds5XdntYOf+g6VnOnGh1ltNCoAstAKBebGB+DszyPmZlEba+bNTXFOnvs+NOYo8QuewKCauLHIEl1M/thkAOsyOwC+wL8YmQqVyJo0e+slapwSDboCtnGSimP1rYerB/cjjPnjio1QFNREbVMJomaVnmxhtiONMNUn0tfpKJ28KJxkpqjx/YepiuHoA8gUMcg+si4PWM1j71VOa6W1y6jcPDRw2QJc/R6SEH9ChFxgYqXUCRRlNVEzhtGON6EyRP9TNULW8zi+Rmeu1woEcabqYyVFGspUy5YphTf1d2JAh3U0tSFvr5tmJx4Ws17HqMji68hr6GAhuV0MYqqnbn6D/f/20Px5yIn7zvePa41MBRseCtHHKaPd0GMfs6wC8fGSzYj2tWNE5QBc+kV5Mk8lMzn1ViDpLa0szryw1aq0YKMcvcSF5fmuStFRpbpXcdB1eF7wlQaGus5LWlK0fZx0R3RNvR293KwJb9siOA8U7RazKrxSOBeJAWX2WSsilWqD/J7VKwubmm9YAtrbuzMIdcID8nmhwRMtEVNfw6BLh6r7ODhB3+MHx78EZa5R1di5EJ+MaYeJ86Oqo3Ens4OtDIyBsEkS91yllHRSGzD3A8QnUWcJs+zCwtYoPbvOVKLFbzvtvfgvbfdrgj2yJlzOD0yQmAp4BxTNJtPMDMsxWKkZVjCV6U36qqFHL7vS4/surDMF+wV3HXXp0+QxP2ptqoKq4eu43cOsZXv9w9uxI43bKKmsYIPvfdWnDl9Bo0hEldukIhjRETKsBlPJ5exzAlDJPYGyu/iaUldS6Q/so8l7iWIlmmJ4UTTv/70X6CRolKR311MzCvntjS3U5JvUWmZ4UQv6XhB95T1CPpWNW/X0aPxizs9L1h5rC82zPPuU+fLJ/rLbZm7mBkf5UZkI4HDh1tufjuSnNemUmQl5IGz3Kqap1ZiccGNnBelJwl5lr05kf+K7HlLjLqkgpLJieuXb9+GCJ3jcqJOknTnCynu7fmwacN6XPGGa6id7sGOK9/EZi/XqNQASqRAF/d8+cuH489f3e+EpWy7+3izuPqdiPbSxokge+TIY7jptg+oTf1mRuXtu67FJZs3sA+GFETLzqnspMqmo7cK6XmyEnktUZP0kkeQBF166ztvfIcqBQGpPM8RUUk4pTi7g1wyxj30d+/+MLZuuV7AgzXoys5R/D++cnjfb6/vd4zr6+tLexVnF9Mq/VKGSc9cnB5lsdfDx4nYF6hDLpNSEl2QkB+lJBDmgvVVbnphGhDDZIhV+32MojiwgTUoBqzhuPOGyy9Hhem4ND9HwYgDMyNqsj/6uZkSIB+1AqbaL9ywcYuqfe7spssrzq4XXeOLvdnZ1xcnku/BS0UNVZx95hR2XHWt2j8IcwNehBxZeFRARNeVnGAzarJHIMYI6MghEVN8Y7WeBQEDZC1bt21Tr2W/O5tduahbNtJhfiELxnMU0e8LY/TMIizb2PPAwSfir9g4Odrb1xzUbWfvixsGGnYSDz36GAa2X6V+5ROk923WWXxmGiWbyEnvSm+Q35OIcRI1eTir+27yvmn5lBMaqWNGCSA33XSjag0lRq7EYbdIDSUQELlQX1VeNdV7xVGNjc1YTpX3fvPg47/39ygmXuJo6YrtX5ybFWB5waaeoJNsIb/71ttJvYIqYsGmKDo5lR8/dxaJpRRSmZLihlLwF3ZyLmx0iLF1dIak77oY99ia63Hbe9+PFqrRmeU0UmQ5y6klhYjiSr9fdBG/0jOFVMt12qKte+OJxP6XWv9LGidHa0fX/uT8TJx6/v28utoaEvax5Ypr6OUyaj/EoLWMQhsXGuuKIcUdn3Iyh5V8riY+kR6JQGuu7orKFCA/btvYP8At6BvRv3GwNsZQNZPFp0i6ZS8hyKjZ3JCMcl/QMGu/ASPYpEk49gxu3fyyvyDS8QqOKFPUtr3tdFy89k6NRBk06MIrgTM/gaWRSlaBtCpLcVaMEiP8bNSChn72MZm/RI3uaI3isvUD5JAtyLFllCgnVomMRUrvYVI6P0FEWs066qS+oF8hKBMg7uru9jU9fS9rmBwvG7kLR2dnZ5xPfYvziX2cru4Wz4qAI7KCLr8pkfGfvoq2tNVmMPEcGYYwf2EhklqVckUNlW3c2mrlRHHoyKP4p/v2Y/uVO3DNjmsw2N9HYakmIolx9Q1BNu6oonVMyfvyRWefoPkrXfNr+r1lIpHo/cfPfPr+N1139dAyNyduZu0J+jmU9c6fOokDP/4RxiZnkM5kFYgITRJgkBjH2KuaG5vI/l0cOPADxUzKdm1/oCfWgXe+821Yu6aLjKQFG9ZvQn1T5LBuWHtjfX3DeJXHK47c84/VKO5qj9QPZXX/nTfB2y3vG6ybru4Yhq5me7B/gXOyT26GVa+TWU6oVYjbV+spo3/ju/8N2VoQ7cNTv0RxME2V62vf+CauuvJKvGXnDYc727ruufTKqw7jNR6vy2+cJZKmRgM1fIQgsy2fSWPqfBxPnRxWMkKelExNDdIdafCGgcvwt5/9e/UDAGHzNo1fE6mjClY9nC9Vj+RKpf3pdPoVpx/+P417/pFIjPdS19lWrThDhVR2q2fbkcT8Qu/09GRkcXGO+n4Qo5Pz6W9+9ztpGjbMtJygtj8cKJUOxl8Hg55//B+MmHYdenfy5QAAAABJRU5ErkJggg=="

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
  title: 'Learn,Practice and Placed',
  features: [{
    id: 1,
    imgSrc: assets_core_feature_coaching_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    altText: 'Mentorship',
    title: 'Mentorship',
    text: 'Get mentorship at each phase of your learning and learn the right way '
  }, {
    id: 2,
    imgSrc: assets_core_feature_tent_png__WEBPACK_IMPORTED_MODULE_6___default.a,
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
  text: 'Get your blood tests delivered at let home collect sample from the victory of the managements.'
}, {
  id: 2,
  imgSrc: assets_feature_teaching_png__WEBPACK_IMPORTED_MODULE_5___default.a,
  altText: 'Interaction With Expert',
  title: 'Interaction With Expert',
  text: 'Get your blood tests delivered at let home collect sample from the victory of the managements.'
}, {
  id: 3,
  imgSrc: assets_feature_quiz_png__WEBPACK_IMPORTED_MODULE_6___default.a,
  altText: 'Quizzes',
  title: 'Quizzes',
  text: 'Get your blood tests delivered at let home collect sample from the victory of the managements.'
}, {
  id: 4,
  imgSrc: assets_feature_assignment_png__WEBPACK_IMPORTED_MODULE_7___default.a,
  altText: 'Real-time Assignments',
  title: 'Real-time Assignments',
  text: 'Get your blood tests delivered at let home collect sample from the victory of the managements.'
}, {
  id: 5,
  imgSrc: assets_feature_question_png__WEBPACK_IMPORTED_MODULE_8___default.a,
  altText: 'Doubt Checking',
  title: 'Doubt Checking',
  text: 'Get your blood tests delivered at let home collect sample from the victory of the managements.'
}, {
  id: 6,
  imgSrc: assets_feature_businessman_png__WEBPACK_IMPORTED_MODULE_9___default.a,
  altText: 'Internships',
  title: 'Internships',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhdGgtbWF0Y2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcHJlcGFyZS1kZXN0aW5hdGlvbi50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yZXNvbHZlLXJld3JpdGVzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL1N1Y2Nlc3MucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvYXJyb3dFdmVuLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2Fycm93T2RkLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2Jhbm5lckJnLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2NvcmUtZmVhdHVyZS9jb2FjaGluZy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9jb3JlLWZlYXR1cmUvdGVudC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9mZWF0dXJlL2Fzc2lnbm1lbnQucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvZmVhdHVyZS9idXNpbmVzc21hbi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9mZWF0dXJlL3F1ZXN0aW9uLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ZlYXR1cmUvcXVpei5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9mZWF0dXJlL3RlYWNoaW5nLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ZlYXR1cmUvdmlkZW8tdHV0b3JpYWxzLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2dvYWwucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMva2V5LWZlYXR1cmUvaGVscCAoMSkucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMva2V5LWZlYXR1cmUvcHJhY3RpY2UgKDEpLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2tleS1mZWF0dXJlL3Byb21vdGlvbiAoMikucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvbG9nby1kYXJrLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2xvZ28ucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvcGFydG5lci5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9wYXR0ZXJuQkcucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvcGF5bWVudC1wYXR0ZXJuLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3BheW1lbnRUaHVtYi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy90ZXN0aW1vbmlhbC9hdmF0YXIxLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3Rlc3RpbW9uaWFsL2F2YXRhcjIucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvdGVzdGltb25pYWwvYXZhdGFyMy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy90ZXN0aW1vbmlhbC9hdmF0YXI0LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hY2NvcmRpb24vYWNjb3JkaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FjY29yZGlvbi9iYXNlLWFjY29yZGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hY2NvcmRpb24vc2hhcmVkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2J1dHRvbi1ncm91cC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kcmF3ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZmVhdHVyZS1jYXJkLWNvbHVtbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9mZWF0dXJlLWNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5kYXRhLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5kYXRhLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL21vYmlsZS1kcmF3ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sb2dvLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3ByaWNlLWNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcmF0aW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NlY3Rpb24taGVhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3Nlby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90ZXh0LWZlYXR1cmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRleHRzL2FwcC9hcHAucHJvdmlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRleHRzL2FwcC9hcHAucmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGV4dHMvY3JlYXRlLWNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRleHRzL2RyYXdlci9kcmF3ZXIuY29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGV4dHMvZHJhd2VyL2RyYXdlci5wcm92aWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlY3Rpb25zL2Jhbm5lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VjdGlvbnMvY29yZS1mZWF0dXJlLmpzIiwid2VicGFjazovLy8uL3NyYy9zZWN0aW9ucy9mYXEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlY3Rpb25zL2ZlYXR1cmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlY3Rpb25zL2tleS1mZWF0dXJlLmpzIiwid2VicGFjazovLy8uL3NyYy9zZWN0aW9ucy9wYWNrYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9zZWN0aW9ucy9wYXJ0bmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zZWN0aW9ucy9zZWN1cmUtcGF5bWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VjdGlvbnMvdGVzdGltb25pYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlY3Rpb25zL3dvcmtmbG93LmpzIiwid2VicGFjazovLy8uL3NyYy90aGVtZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZW1vdGlvbi9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZnJhbWVyLW1vdGlvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJjLWRyYXdlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtY3VzdG9tLXNjcm9sbGJhcnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9mYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWljb25zL2lvXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1tb2RhbC12aWRlb1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LW11bHRpLWNhcm91c2VsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc2Nyb2xsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc3RpY2t5bm9kZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRoZW1lLXVpXCIiXSwibmFtZXMiOlsibGlzdGVuZXJzIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJ3aW5kb3ciLCJwcmVmZXRjaGVkIiwiY2FjaGVkT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZW50cnkiLCJjYiIsInJvb3RNYXJnaW4iLCJsaXN0ZW5Ub0ludGVyc2VjdGlvbnMiLCJvYnNlcnZlciIsImdldE9ic2VydmVyIiwiY29uc29sZSIsInJvdXRlciIsImVyciIsImhyZWYiLCJldmVudCIsInRhcmdldCIsImUiLCJub2RlTmFtZSIsImlzTW9kaWZpZWRFdmVudCIsInNjcm9sbCIsImFzIiwicmVwbGFjZSIsInN1Y2Nlc3MiLCJkb2N1bWVudCIsImFyZ3MiLCJrZXkiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJPYmplY3QiLCJwcm9wcyIsImNyZWF0ZVByb3BFcnJvciIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJzaGFsbG93IiwicGFzc0hyZWYiLCJwcmVmZXRjaCIsIm9wdGlvbmFsUHJvcHMiLCJoYXNXYXJuZWQiLCJSZWFjdCIsInAiLCJwYXRobmFtZSIsInJlc29sdmVkSHJlZiIsImNoaWxkRWxtIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRyZW4iLCJjaGlsZCIsIkNoaWxkcmVuIiwiY2hpbGRQcm9wcyIsInJlZiIsImVsIiwic2V0Q2hpbGRFbG0iLCJvbkNsaWNrIiwibGlua0NsaWNrZWQiLCJwcmlvcml0eSIsIkxpbmsiLCJwYXRoIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJwcm9jZXNzIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImdldCIsIlJvdXRlciIsImZpZWxkIiwiZ2V0Um91dGVyIiwiZXZlbnRGaWVsZCIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiX3JvdXRlciIsImluc3RhbmNlIiwiQ29tcG9zZWRDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJXaXRoUm91dGVyV3JhcHBlciIsIm5hbWUiLCJhbGwiLCJvbiIsIm9mZiIsImVtaXQiLCJoYW5kbGVyIiwiYmFzZVBhdGgiLCJjYW5jZWxsZWQiLCJ1cmwiLCJsb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwiaGFzQmFzZVBhdGgiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmaW5hbFVybCIsIlBBR0VfTE9BRF9FUlJPUiIsIlN5bWJvbCIsImFkZEJhc2VQYXRoIiwicmVzb2x2ZUhyZWYiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsImNyZWRlbnRpYWxzIiwicmVzIiwiYXR0ZW1wdHMiLCJmZXRjaFJldHJ5IiwiaXNTZXJ2ZXJSZW5kZXIiLCJtYXJrTG9hZGluZ0Vycm9yIiwiY29uc3RydWN0b3IiLCJyb3V0ZSIsInF1ZXJ5IiwiYXNQYXRoIiwiY29tcG9uZW50cyIsInNkYyIsInN1YiIsImNsYyIsInBhZ2VMb2FkZXIiLCJfYnBzIiwiZXZlbnRzIiwiX3dyYXBBcHAiLCJpc1NzciIsImlzRmFsbGJhY2siLCJfaW5GbGlnaHRSb3V0ZSIsIl9zaGFsbG93Iiwic3RhdGUiLCJvcHRpb25zIiwic3R5bGVTaGVldHMiLCJfX05fU1NHIiwiaW5pdGlhbFByb3BzIiwiX19OX1NTUCIsIkNvbXBvbmVudCIsIl9fTkVYVF9EQVRBX18iLCJyZWxvYWQiLCJiYWNrIiwicHVzaCIsInByZXBhcmVVcmxBcyIsImNoYW5nZSIsImlzTG9jYWxVUkwiLCJTVCIsInBlcmZvcm1hbmNlIiwiY2xlYW5lZEFzIiwiZGVsQmFzZVBhdGgiLCJwYWdlcyIsIl9fcmV3cml0ZXMiLCJwYXJzZWQiLCJtZXRob2QiLCJyZXNvbHZlZEFzIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJtaXNzaW5nUGFyYW1zIiwicGFyYW0iLCJhc1BhdGhuYW1lIiwicm91dGVJbmZvIiwiYXBwQ29tcCIsImVycm9yIiwiY2hhbmdlU3RhdGUiLCJfX04iLCJoYW5kbGVSb3V0ZUluZm9FcnJvciIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJwYWdlIiwiZ2V0Um91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwicmVxdWlyZSIsImlzVmFsaWRFbGVtZW50VHlwZSIsImRhdGFIcmVmIiwic2V0IiwiYmVmb3JlUG9wU3RhdGUiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImhhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJfcmVzb2x2ZUhyZWYiLCJjbGVhblBhdGhuYW1lIiwicGFyc2VkSHJlZiIsIlByb21pc2UiLCJmZXRjaENvbXBvbmVudCIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsIl9nZXREYXRhIiwiZm4iLCJkYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJmZXRjaE5leHREYXRhIiwiX2dldFNlcnZlckRhdGEiLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5Iiwic2xhc2hlZFByb3RvY29scyIsInByb3RvY29sIiwidXJsT2JqIiwiaG9zdCIsImF1dGgiLCJlbmNvZGVVUklDb21wb25lbnQiLCJob3N0bmFtZSIsIlN0cmluZyIsInF1ZXJ5c3RyaW5nIiwic2VhcmNoIiwiVEVTVF9ST1VURSIsIkRVTU1ZX0JBU0UiLCJyZXNvbHZlZEJhc2UiLCJvcmlnaW4iLCJtYXRjaGVyT3B0aW9ucyIsInNlbnNpdGl2ZSIsImRlbGltaXRlciIsImRlY29kZSIsImN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMiLCJzdHJpY3QiLCJjdXN0b21Sb3V0ZSIsImtleXMiLCJtYXRjaGVyUmVnZXgiLCJwYXRoVG9SZWdleHAiLCJtYXRjaGVyIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwicGFyc2VkRGVzdGluYXRpb24iLCJkZXN0aW5hdGlvbiIsImRlc3RRdWVyeSIsImRlc3RQYXRoIiwiZGVzdFBhdGhQYXJhbUtleXMiLCJkZXN0UGF0aFBhcmFtcyIsImRlc3RpbmF0aW9uQ29tcGlsZXIiLCJ2YWxpZGF0ZSIsInZhbHVlIiwiQXJyYXkiLCJzdHJPckFycmF5IiwicXVlcnlDb21waWxlciIsInBhcmFtS2V5cyIsImFwcGVuZFBhcmFtc1RvUXVlcnkiLCJwYXJhbXMiLCJzaG91bGRBZGRCYXNlUGF0aCIsIm5ld1VybCIsImVuY29kZVVSSSIsInNlYXJjaFBhcmFtcyIsInJlc3VsdCIsIml0ZW0iLCJzZWFyY2hQYXJhbXNMaXN0IiwiY3VzdG9tUm91dGVNYXRjaGVyIiwicmV3cml0ZSIsImRlc3RSZXMiLCJyZSIsInNsdWdOYW1lIiwiZyIsImdyb3VwcyIsIm0iLCJzdHIiLCJvcHRpb25hbCIsInJlcGVhdCIsInNlZ21lbnRzIiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsInNlZ21lbnQiLCJwYXJzZVBhcmFtZXRlciIsInBvcyIsImVzY2FwZVJlZ2V4Iiwicm91dGVLZXlDaGFyQ29kZSIsInJvdXRlS2V5Q2hhckxlbmd0aCIsImdldFNhZmVSb3V0ZUtleSIsInJvdXRlS2V5IiwiaSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJpc05hTiIsInBhcnNlSW50IiwibmFtZWRSZWdleCIsInVzZWQiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJBcHAiLCJnZXREaXNwbGF5TmFtZSIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJBY2NvcmRpb24iLCJpdGVtcyIsImNvbWJpbmVSZWR1Y2VycyIsInNpbmdsZSIsInByZXZlbnRDbG9zZSIsIm9wZW5JbmRleGVzIiwiaGFuZGxlSXRlbUNsaWNrIiwibWFwIiwiaW5kZXgiLCJ0aXRsZSIsImluY2x1ZGVzIiwiY29udGVudHMiLCJCYXNlQWNjb3JkaW9uIiwiaW50ZXJuYWxTZXRTdGF0ZSIsImNsb3NpbmciLCJ0eXBlIiwiZmlsdGVyIiwibG9nIiwiZ2V0U3RhdGUiLCJ1bmRlZmluZWQiLCJjaGFuZ2VzIiwiY2FsbGJhY2siLCJhbGxDaGFuZ2VzIiwic2V0U3RhdGUiLCJhY3R1YWxTdGF0ZSIsImNoYW5nZXNPYmplY3QiLCJzdGF0ZVJlZHVjZXIiLCJvblN0YXRlQ2hhbmdlIiwicmVuZGVyIiwiQWNjb3JkaW9uQnV0dG9uIiwicmVzdCIsInN0eWxlcyIsImJ1dHRvblRvZ2dsZSIsImRpc3BsYXkiLCJjb2xvciIsImN1cnNvciIsImJvcmRlciIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImxldHRlclNwYWNpbmciLCJwb3NpdGlvbiIsInBhZGRpbmdMZWZ0IiwibGluZUhlaWdodCIsIndpZHRoIiwiaGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwiYmFja2dyb3VuZENvbG9yIiwidG9wIiwibGVmdCIsIm9wYWNpdHkiLCJjb250ZW50IiwidHJhbnNmb3JtIiwidHJhbnNpdGlvbiIsInZhcmlhbnRzIiwib3BlbiIsIm1hcmdpblRvcCIsImNsb3NlZCIsIkFjY29yZGlvbkNvbnRlbnRzIiwiaXNPcGVuIiwib3ZlcmZsb3dZIiwicGFkZGluZ0JvdHRvbSIsIkFjY29yZGlvbkl0ZW0iLCJvdmVyZmxvdyIsInBhZGRpbmciLCJib3JkZXJCb3R0b20iLCJsZW5ndGgiLCJzbGljZSIsInJlZHVjZXJzIiwicmVkdWNlIiwiYWNjIiwicmVkdWNlciIsIkJ1dHRvbkdyb3VwIiwibmV4dCIsInByZXZpb3VzIiwiYnV0dG9uR3JvdXAiLCJqdXN0aWZ5Q29udGVudCIsIm1iIiwiYnV0dG9uIiwiYmciLCJweCIsIm91dGxpbmUiLCJEcmF3ZXIiLCJjbGFzc05hbWUiLCJjbG9zZUJ1dHRvbiIsImNsb3NlQnV0dG9uU3R5bGUiLCJkcmF3ZXJIYW5kbGVyIiwidG9nZ2xlSGFuZGxlciIsInBsYWNlbWVudCIsImRyYXdlclN0eWxlIiwiY2xvc2VCdG5TdHlsZSIsInRyaW0iLCJkZWZhdWx0UHJvcHMiLCJGZWF0dXJlQ2FyZENvbHVtbiIsInNyYyIsImFsdFRleHQiLCJ0ZXh0IiwiY2FyZCIsImltZyIsIndyYXBwZXIiLCJzdWJUaXRsZSIsImFsaWduSXRlbXMiLCJ0ZXh0QWxpZ24iLCJmbGV4RGlyZWN0aW9uIiwibXgiLCJGZWF0dXJlQ2FyZCIsImZsZXhTaHJpbmsiLCJtciIsIm10IiwiaGVhZGVyIiwibGFiZWwiLCJGb290ZXIiLCJmb290ZXIiLCJjb250YWluZXIiLCJmb290ZXJUb3BBcmVhIiwibWVudUl0ZW1zIiwibWVudXMiLCJoZWFkaW5nIiwibGluayIsImNvcHlyaWdodCIsImJvcmRlclRvcCIsImJvcmRlclRvcENvbG9yIiwiZmxleFdyYXAiLCJwdCIsInBiIiwidGV4dERlY29yYXRpb24iLCJhIiwicGwiLCJIZWFkZXIiLCJMb2dvRGFyayIsIkxvZ29XaGl0ZSIsIm5hdiIsInBvc2l0aW9uQW5pbSIsImtleWZyYW1lcyIsInB5IiwiYW5pbWF0aW9uIiwibWwiLCJib3hTaGFkb3ciLCJib3JkZXJDb2xvciIsInNvY2lhbCIsImljb24iLCJNb2JpbGVEcmF3ZXIiLCJkaXNwYXRjaCIsInVzZUNvbnRleHQiLCJEcmF3ZXJDb250ZXh0IiwidXNlQ2FsbGJhY2siLCJkcmF3ZXIiLCJjbG9zZSIsIm1lbnUiLCJtZW51Rm9vdGVyIiwicmlnaHQiLCJ6SW5kZXgiLCJmdyIsIkltYWdlIiwiTGF5b3V0IiwiaXNTdGlja3kiLCJzZXRJc1N0aWNreSIsInVzZVN0YXRlIiwiaGFuZGxlU3RhdGVDaGFuZ2UiLCJzdGF0dXMiLCJTdGlja3kiLCJTVEFUVVNfRklYRUQiLCJTVEFUVVNfT1JJR0lOQUwiLCJ2YXJpYW50IiwiTmF2TGluayIsIkxpc3QiLCJwYXJlbnRTdHlsZSIsImNoaWxkU3R5bGUiLCJsaXN0U3R5bGVUeXBlIiwibWFyZ2luIiwiaXNBdmFpbGFibGUiLCJsaXN0SWNvbiIsIm1hcmdpbkxlZnQiLCJMb2dvIiwibWF4V2lkdGgiLCJQcmljZUNhcmQiLCJkZXNjcmlwdGlvbiIsInByaWNlV2l0aFVuaXQiLCJidXR0b25UZXh0IiwicG9pbnRzIiwicHJpY2luZ0JveCIsInByaWNpbmdIZWFkZXIiLCJwcmljZSIsImxpc3RJdGVtIiwiZmxleCIsImJhY2tncm91bmQiLCJtYXJnaW5Cb3R0b20iLCJib3R0b20iLCJmb250U3R5bGUiLCJwciIsIlJhdGluZyIsInJhdGluZyIsInRvdGFsUmF0aW5nIiwiU2VjdGlvbkhlYWRlciIsInNsb2dhbiIsImlzV2hpdGUiLCJTRU8iLCJhdXRob3IiLCJtZXRhIiwibWV0YURhdGEiLCJwcm9wZXJ0eSIsImNvbmNhdCIsImxhbmciLCJUZXh0RmVhdHVyZSIsImJ0bk5hbWUiLCJidG5VUkwiLCJ0ZXh0VHJhbnNmb3JtIiwidXNlRGlzcGF0Y2giLCJwcm92aWRlciIsInVzZUNyZWF0ZUNvbnRleHQiLCJpbml0aWFsU3RhdGUiLCJ1c2VTdGlja3lTdGF0ZSIsInVzZVN0aWNreURpc3BhdGNoIiwiU3RpY2t5UHJvdmlkZXIiLCJpc1NpZGViYXJTdGlja3kiLCJFcnJvciIsImRlZmF1bHRWYWx1ZSIsImRlZmF1bHREaXNwYXRjaCIsInN0YXRlQ3R4IiwiY3JlYXRlQ29udGV4dCIsImRpc3BhdGNoQ3R4IiwidXNlU3RhdGVDdHgiLCJ1c2VEaXNwYXRjaEN0eCIsIlByb3ZpZGVyIiwidXNlUmVkdWNlciIsImFjdGlvbiIsIkRyYXdlclByb3ZpZGVyIiwiSW5kZXhQYWdlIiwidGhlbWUiLCJCYW5uZXIiLCJ2aWRlb09wZW4iLCJzZXRWaWRlb09wZW4iLCJoYW5kbGVDbGljayIsInByZXZlbnREZWZhdWx0IiwiYmFubmVyIiwiY29udGVudEJveCIsImltYWdlQm94IiwiQmFubmVyVGh1bWIiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJCYW5uZXJCRyIsImJhY2tncm91bmRSZXBlYXQiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJiYWNrZ3JvdW5kU2l6ZSIsImJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzIiwic3BvbnNvclRpdGxlIiwic3BvbnNvckJveCIsInNwb25zb3IiLCJmZWF0dXJlcyIsImlkIiwiaW1nU3JjIiwiQnJpZWZjYXNlIiwiU2VjdXJlIiwiQ29yZUZlYXR1cmUiLCJjb3JlRmVhdHVyZSIsImNvbnRhaW5lckJveCIsInRodW1ibmFpbCIsIkNvcmVGZWF0dXJlVGh1bWIiLCJoZWFkaW5nVG9wIiwiZ3JpZCIsImJvcmRlclRvcFJpZ2h0UmFkaXVzIiwiZmFxcyIsIkZhcSIsIm15IiwiU21hcnQiLCJXaW5uZXIiLCJDbG91ZCIsIlNldHRpbmciLCJEZXNpZ24iLCJDaGF0IiwiRmVhdHVyZSIsImdyaWRHYXAiLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwiVmVjdG9yIiwiRWRpdGluZyIsIlNwZWVkIiwiS2V5RmVhdHVyZSIsInBhY2thZ2VzIiwiUGFja2FnZSIsInByaWNpbmciLCJwYWNrYWdlRGF0YSIsIlBhdHRlcm5CRyIsIlBhcnRuZXJTZWN0aW9uIiwiUGFydG5lciIsIlNlY3VyZVBheW1lbnQiLCJiZ092ZXJsYXkiLCJQYXltZW50VGh1bWIiLCJQYXltZW50UGF0dGVybiIsIm9yZGVyIiwiYXZhdGFyIiwiQXZhdGFyMSIsImRlc2lnbmF0aW9uIiwicmV2aWV3IiwiQXZhdGFyMiIsIkF2YXRhcjMiLCJBdmF0YXI0IiwicmVzcG9uc2l2ZSIsImRlc2t0b3AiLCJicmVha3BvaW50IiwibWF4IiwibWluIiwic2xpZGVzVG9TbGlkZSIsImxhcHRvcCIsInRhYmxldCIsIm1vYmlsZSIsIlRlc3RpbW9uaWFsQ2FyZCIsImNhcm91c2VsV3JhcHBlciIsInJldmlld0NhcmQiLCJ1bCIsImxpc3RTdHlsZSIsInN2ZyIsIm1hcmdpblJpZ2h0Iiwib2JqZWN0Rml0IiwiV29ya0Zsb3ciLCJ3b3JrZmxvdyIsImljb25Cb3giLCJBcnJvd09kZCIsIkFycm93RXZlbiIsImNvbG9ycyIsInRleHRfc2Vjb25kYXJ5IiwiaGVhZGluZ19zZWNvbmRhcnkiLCJiYWNrZ3JvdW5kX3NlY29uZGFyeSIsImJvcmRlcl9jb2xvciIsInByaW1hcnkiLCJzZWNvbmRhcnkiLCJtdXRlZCIsImFjY2VudCIsInllbGxvdyIsIm1vZGVzIiwiZGFyayIsImJyZWFrcG9pbnRzIiwiZm9udHMiLCJib2R5IiwiZm9udFNpemVzIiwiZm9udFdlaWdodHMiLCJib2xkIiwibGluZUhlaWdodHMiLCJsZXR0ZXJTcGFjaW5ncyIsImNhcHMiLCJzcGFjZSIsImxheW91dCIsInRvb2xiYXIiLCJtYWluIiwic2VjdGlvbiIsImtleUZlYXR1cmUiLCJmZWF0dXJlIiwicGFydG5lciIsInRlc3RpbW9uaWFsIiwic2VjdXJlUGF5bWVudCIsImZhcSIsInNlY3Rpb25IZWFkZXIiLCJmb250RmFtaWx5IiwiaGVyb1ByaW1hcnkiLCJoZXJvU2Vjb25kYXJ5IiwibGVhZCIsImxpbmtzIiwiZGVmYXVsdCIsImxvZ28iLCJpbWFnZXMiLCJidXR0b25zIiwiZGVmYXVsdEJ0biIsIndoaXRlQnV0dG9uIiwidGV4dEJ1dHRvbiIsImNhcmRzIiwib2ZmZXIiLCJtaW5IZWlnaHQiLCJmZWF0dXJlQ2FyZCIsImZvcm1zIiwiaW5wdXQiLCJ0IiwiYmFkZ2VzIiwicm9vdCIsImZvbnRTbW9vdGhpbmciLCJociIsInNyT25seSIsImNsaXAiLCJjbGlwUGF0aCIsIndoaXRlU3BhY2UiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ3hGQSx3RTs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdDOzs7Ozs7Ozs7OztBQ05BLGNBQWMsbUJBQU8sQ0FBQywwRUFBbUI7O0FBRXpDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FB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QUFHLHVCQUFYOztBQUNBLE1BQU0vSSxFQUFFLEdBQ2IrSSxFQUFFLElBQ0YsT0FBTzlJLFdBQVcsQ0FBbEIsU0FEQThJLGNBRUEsT0FBTzlJLFdBQVcsQ0FBbEIsWUFISzs7Ozs7Ozs7Ozs7OztBQ2pZTSx3QkFBd0IsMENBQTBDLGdEQUFnRCxnQ0FBZ0MsZ0NBQWdDLG1DQUFtQyw0QkFBNEIsK0JBQStCLG9CQUFvQix5QkFBeUIsVUFBVTtBQUNwVixpRDs7Ozs7Ozs7Ozs7QUNEQSxpQkFBaUIsbUJBQU8sQ0FBQyxtRUFBb0I7Ozs7Ozs7Ozs7OztBQ0E3QyxxRjs7Ozs7Ozs7Ozs7QUNBQSxpQ0FBaUMsZzBDOzs7Ozs7Ozs7OztBQ0FqQyxpQ0FBaUMsNHlDOzs7Ozs7Ozs7OztBQ0FqQyxzRjs7Ozs7Ozs7Ozs7QUNBQSxpQ0FBaUMsZ2tIOzs7Ozs7Ozs7OztBQ0FqQyxpQ0FBaUMsNGhLOzs7Ozs7Ozs7OztBQ0FqQyxpQ0FBaUMsbzZLOzs7Ozs7Ozs7OztBQ0FqQyxpQ0FBaUMsNHNLOzs7Ozs7Ozs7OztBQ0FqQyxpQ0FBaUMsdy9LOzs7Ozs7Ozs7OztBQ0FqQyxpQ0FBaUMsd21JOzs7Ozs7Ozs7OztBQ0FqQyxpQ0FBaUMsd3BKOzs7Ozs7Ozs7OztBQ0FqQyxpQ0FBaUMsNDZMOzs7Ozs7Ozs7OztBQ0FqQyxrRjs7Ozs7Ozs7Ozs7QUNBQSxpQ0FBaUMsb2hKOzs7Ozs7Ozs7OztBQ0FqQyxpQ0FBaUMsb3FNOzs7Ozs7Ozs7OztBQ0FqQyxpQ0FBaUMsd2hKOzs7Ozs7Ozs7OztBQ0FqQyx1Rjs7Ozs7Ozs7Ozs7QUNBQSxrRjs7Ozs7Ozs7Ozs7QUNBQSxxRjs7Ozs7Ozs7Ozs7QUNBQSx1Rjs7Ozs7Ozs7Ozs7QUNBQSw2Rjs7Ozs7Ozs7Ozs7QUNBQSwwRjs7Ozs7Ozs7Ozs7QUNBQSxpQ0FBaUMsb3JSOzs7Ozs7Ozs7OztBQ0FqQyxpQ0FBaUMsd2hSOzs7Ozs7Ozs7OztBQ0FqQyxpQ0FBaUMsbzdROzs7Ozs7Ozs7OztBQ0FqQyxpQ0FBaUMsNDRTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBakM7QUFDQTtB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QUFRLEVBQUUsdUJBSEo7QUFJTjFVLFlBQU0sRUFBRSxnQkFKRjtBQUtONEgsWUFBTSxFQUFFLGlCQUxGO0FBTU4xRyxjQUFRLEVBQUUsbUJBTko7QUFPTkMsYUFBTyxFQUFFLGNBUEg7QUFRTnZCLGNBQVEsRUFBRSxxQkFSSjtBQVNORyxXQUFLLEVBQUUsZ0JBVEQ7QUFVTjRVLGdCQUFVLEVBQUU7QUFWTjtBQTdCRjtBQW5WSyxDQUFmLEU7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsaUQ7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEscUMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wYWdlcy9pbmRleC5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBhZGRCYXNlUGF0aCxcbiAgaXNMb2NhbFVSTCxcbiAgTmV4dFJvdXRlcixcbiAgUHJlZmV0Y2hPcHRpb25zLFxuICByZXNvbHZlSHJlZixcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxudHlwZSBVcmwgPSBzdHJpbmcgfCBVcmxPYmplY3RcbnR5cGUgUmVxdWlyZWRLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBuZXZlciA6IEtcbn1ba2V5b2YgVF1cbnR5cGUgT3B0aW9uYWxLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBLIDogbmV2ZXJcbn1ba2V5b2YgVF1cblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG59XG50eXBlIExpbmtQcm9wc1JlcXVpcmVkID0gUmVxdWlyZWRLZXlzPExpbmtQcm9wcz5cbnR5cGUgTGlua1Byb3BzT3B0aW9uYWwgPSBPcHRpb25hbEtleXM8TGlua1Byb3BzPlxuXG5sZXQgY2FjaGVkT2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG5jb25zdCBsaXN0ZW5lcnMgPSBuZXcgTWFwPEVsZW1lbnQsICgpID0+IHZvaWQ+KClcbmNvbnN0IEludGVyc2VjdGlvbk9ic2VydmVyID1cbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgOiBudWxsXG5jb25zdCBwcmVmZXRjaGVkOiB7IFtjYWNoZUtleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge31cblxuZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIoKTogSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgfCB1bmRlZmluZWQge1xuICAvLyBSZXR1cm4gc2hhcmVkIGluc3RhbmNlIG9mIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIGFscmVhZHkgY3JlYXRlZFxuICBpZiAoY2FjaGVkT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gY2FjaGVkT2JzZXJ2ZXJcbiAgfVxuXG4gIC8vIE9ubHkgY3JlYXRlIHNoYXJlZCBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBzdXBwb3J0ZWQgaW4gYnJvd3NlclxuICBpZiAoIUludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgcmV0dXJuIChjYWNoZWRPYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAoZW50cmllcykgPT4ge1xuICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICBpZiAoIWxpc3RlbmVycy5oYXMoZW50cnkudGFyZ2V0KSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2IgPSBsaXN0ZW5lcnMuZ2V0KGVudHJ5LnRhcmdldCkhXG4gICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDApIHtcbiAgICAgICAgICBjYWNoZWRPYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGxpc3RlbmVycy5kZWxldGUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGNiKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIHsgcm9vdE1hcmdpbjogJzIwMHB4JyB9XG4gICkpXG59XG5cbmNvbnN0IGxpc3RlblRvSW50ZXJzZWN0aW9ucyA9IChlbDogRWxlbWVudCwgY2I6ICgpID0+IHZvaWQpID0+IHtcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBnZXRPYnNlcnZlcigpXG4gIGlmICghb2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gKCkgPT4ge31cbiAgfVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWwpXG4gIGxpc3RlbmVycy5zZXQoZWwsIGNiKVxuICByZXR1cm4gKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBvYnNlcnZlci51bm9ic2VydmUoZWwpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICB9XG4gICAgbGlzdGVuZXJzLmRlbGV0ZShlbClcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmVmZXRjaChcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnNcbik6IHZvaWQge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVyblxuICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICByb3V0ZXIucHJlZmV0Y2goaHJlZiwgYXMsIG9wdGlvbnMpLmNhdGNoKChlcnIpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9KVxuICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc10gPSB0cnVlXG59XG5cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudDogUmVhY3QuTW91c2VFdmVudCkge1xuICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudFxuICByZXR1cm4gKFxuICAgICh0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnKSB8fFxuICAgIGV2ZW50Lm1ldGFLZXkgfHxcbiAgICBldmVudC5jdHJsS2V5IHx8XG4gICAgZXZlbnQuc2hpZnRLZXkgfHxcbiAgICBldmVudC5hbHRLZXkgfHwgLy8gdHJpZ2dlcnMgcmVzb3VyY2UgZG93bmxvYWRcbiAgICAoZXZlbnQubmF0aXZlRXZlbnQgJiYgZXZlbnQubmF0aXZlRXZlbnQud2hpY2ggPT09IDIpXG4gIClcbn1cblxuZnVuY3Rpb24gbGlua0NsaWNrZWQoXG4gIGU6IFJlYWN0Lk1vdXNlRXZlbnQsXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICByZXBsYWNlPzogYm9vbGVhbixcbiAgc2hhbGxvdz86IGJvb2xlYW4sXG4gIHNjcm9sbD86IGJvb2xlYW5cbik6IHZvaWQge1xuICBjb25zdCB7IG5vZGVOYW1lIH0gPSBlLmN1cnJlbnRUYXJnZXRcblxuICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICFpc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgIHJldHVyblxuICB9XG5cbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgfVxuXG4gIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHsgc2hhbGxvdyB9KS50aGVuKFxuICAgIChzdWNjZXNzOiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAoIXN1Y2Nlc3MpIHJldHVyblxuICAgICAgaWYgKHNjcm9sbCkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpXG4gICAgICB9XG4gICAgfVxuICApXG59XG5cbmZ1bmN0aW9uIExpbmsocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPExpbmtQcm9wcz4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJnczoge1xuICAgICAga2V5OiBzdHJpbmdcbiAgICAgIGV4cGVjdGVkOiBzdHJpbmdcbiAgICAgIGFjdHVhbDogc3RyaW5nXG4gICAgfSkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgK1xuICAgICAgICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCJcbiAgICAgICAgICAgIDogJycpXG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNSZXF1aXJlZCwgdHJ1ZT4gPSB7XG4gICAgICBocmVmOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCByZXF1aXJlZFByb3BzOiBMaW5rUHJvcHNSZXF1aXJlZFtdID0gT2JqZWN0LmtleXMoXG4gICAgICByZXF1aXJlZFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc1JlcXVpcmVkW11cbiAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzUmVxdWlyZWQpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSA9PSBudWxsIHx8XG4gICAgICAgICAgKHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNPcHRpb25hbCwgdHJ1ZT4gPSB7XG4gICAgICBhczogdHJ1ZSxcbiAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICBzY3JvbGw6IHRydWUsXG4gICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wczogTGlua1Byb3BzT3B0aW9uYWxbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgb3B0aW9uYWxQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNPcHRpb25hbFtdXG4gICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc09wdGlvbmFsKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnYXMnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldICYmXG4gICAgICAgICAgdHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmXG4gICAgICAgICAgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAga2V5ID09PSAncmVwbGFjZScgfHxcbiAgICAgICAga2V5ID09PSAnc2Nyb2xsJyB8fFxuICAgICAgICBrZXkgPT09ICdzaGFsbG93JyB8fFxuICAgICAgICBrZXkgPT09ICdwYXNzSHJlZicgfHxcbiAgICAgICAga2V5ID09PSAncHJlZmV0Y2gnXG4gICAgICApIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYGJvb2xlYW5gJyxcbiAgICAgICAgICAgIGFjdHVhbDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIGNvbnN0IGhhc1dhcm5lZCA9IFJlYWN0LnVzZVJlZihmYWxzZSlcbiAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWVcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgKVxuICAgIH1cbiAgfVxuICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlXG5cbiAgY29uc3QgW2NoaWxkRWxtLCBzZXRDaGlsZEVsbV0gPSBSZWFjdC51c2VTdGF0ZTxFbGVtZW50PigpXG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgcGF0aG5hbWUgPSAocm91dGVyICYmIHJvdXRlci5wYXRobmFtZSkgfHwgJy8nXG5cbiAgY29uc3QgeyBocmVmLCBhcyB9ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmhyZWYpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgIGFzOiBwcm9wcy5hcyA/IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5hcykgOiByZXNvbHZlZEhyZWYsXG4gICAgfVxuICB9LCBbcGF0aG5hbWUsIHByb3BzLmhyZWYsIHByb3BzLmFzXSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChcbiAgICAgIHAgJiZcbiAgICAgIEludGVyc2VjdGlvbk9ic2VydmVyICYmXG4gICAgICBjaGlsZEVsbSAmJlxuICAgICAgY2hpbGRFbG0udGFnTmFtZSAmJlxuICAgICAgaXNMb2NhbFVSTChocmVmKVxuICAgICkge1xuICAgICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9IHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXVxuICAgICAgaWYgKCFpc1ByZWZldGNoZWQpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RlblRvSW50ZXJzZWN0aW9ucyhjaGlsZEVsbSwgKCkgPT4ge1xuICAgICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9LCBbcCwgY2hpbGRFbG0sIGhyZWYsIGFzLCByb3V0ZXJdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwgfSA9IHByb3BzXG4gIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgfVxuXG4gIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICBjb25zdCBjaGlsZDogYW55ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgY29uc3QgY2hpbGRQcm9wczoge1xuICAgIG9uTW91c2VFbnRlcj86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBocmVmPzogc3RyaW5nXG4gICAgcmVmPzogYW55XG4gIH0gPSB7XG4gICAgcmVmOiAoZWw6IGFueSkgPT4ge1xuICAgICAgaWYgKGVsKSBzZXRDaGlsZEVsbShlbClcblxuICAgICAgaWYgKGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZC5yZWYoZWwpXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY2hpbGQucmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgIH1cbiAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbClcbiAgICAgIH1cbiAgICB9LFxuICB9XG5cbiAgaWYgKHApIHtcbiAgICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgICB9XG4gICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7IHByaW9yaXR5OiB0cnVlIH0pXG4gICAgfVxuICB9XG5cbiAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICBpZiAocHJvcHMucGFzc0hyZWYgfHwgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpKSB7XG4gICAgY2hpbGRQcm9wcy5ocmVmID0gYWRkQmFzZVBhdGgoYXMpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoXG59XG5cbi8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIXG4gID8gKHBhdGg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpXG4gICAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLydcbiAgICAgIH1cbiAgICB9XG4gIDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2hcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIsIHsgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyLCBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oe30sIF9yb3V0ZXJbcHJvcGVydHldKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyW3Byb3BlcnR5XVxuICB9XG5cbiAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICBpbnN0YW5jZS5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG5leHBvcnQgdHlwZSBXaXRoUm91dGVyUHJvcHMgPSB7XG4gIHJvdXRlcjogTmV4dFJvdXRlclxufVxuXG5leHBvcnQgdHlwZSBFeGNsdWRlUm91dGVyUHJvcHM8UD4gPSBQaWNrPFxuICBQLFxuICBFeGNsdWRlPGtleW9mIFAsIGtleW9mIFdpdGhSb3V0ZXJQcm9wcz5cbj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJvdXRlcjxcbiAgUCBleHRlbmRzIFdpdGhSb3V0ZXJQcm9wcyxcbiAgQyA9IE5leHRQYWdlQ29udGV4dFxuPihcbiAgQ29tcG9zZWRDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPEMsIGFueSwgUD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8RXhjbHVkZVJvdXRlclByb3BzPFA+PiB7XG4gIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzOiBhbnkpIHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogVG9rZW5pemUgaW5wdXQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBsZXhlcihzdHIpIHtcbiAgICB2YXIgdG9rZW5zID0gW107XG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlIChpIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHN0cltpXTtcbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKlwiIHx8IGNoYXIgPT09IFwiK1wiIHx8IGNoYXIgPT09IFwiP1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTU9ESUZJRVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVTQ0FQRURfQ0hBUlwiLCBpbmRleDogaSsrLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ7XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJPUEVOXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ9XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDTE9TRVwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiOlwiKSB7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvZGUgPSBzdHIuY2hhckNvZGVBdChqKTtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgLy8gYDAtOWBcbiAgICAgICAgICAgICAgICAoY29kZSA+PSA0OCAmJiBjb2RlIDw9IDU3KSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgQS1aYFxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA2NSAmJiBjb2RlIDw9IDkwKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgYS16YFxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA5NyAmJiBjb2RlIDw9IDEyMikgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYF9gXG4gICAgICAgICAgICAgICAgICAgIGNvZGUgPT09IDk1KSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUgKz0gc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghbmFtZSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXJhbWV0ZXIgbmFtZSBhdCBcIiArIGkpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk5BTUVcIiwgaW5kZXg6IGksIHZhbHVlOiBuYW1lIH0pO1xuICAgICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgIHZhciBjb3VudCA9IDE7XG4gICAgICAgICAgICB2YXIgcGF0dGVybiA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xuICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUGF0dGVybiBjYW5ub3Qgc3RhcnQgd2l0aCBcXFwiP1xcXCIgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK10gKyBzdHJbaisrXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiKVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50LS07XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoc3RyW2pdID09PSBcIihcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RyW2ogKyAxXSAhPT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYXB0dXJpbmcgZ3JvdXBzIGFyZSBub3QgYWxsb3dlZCBhdCBcIiArIGopO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY291bnQpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuYmFsYW5jZWQgcGF0dGVybiBhdCBcIiArIGkpO1xuICAgICAgICAgICAgaWYgKCFwYXR0ZXJuKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJQQVRURVJOXCIsIGluZGV4OiBpLCB2YWx1ZTogcGF0dGVybiB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNIQVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICB9XG4gICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVORFwiLCBpbmRleDogaSwgdmFsdWU6IFwiXCIgfSk7XG4gICAgcmV0dXJuIHRva2Vucztcbn1cbi8qKlxuICogUGFyc2UgYSBzdHJpbmcgZm9yIHRoZSByYXcgdG9rZW5zLlxuICovXG5mdW5jdGlvbiBwYXJzZShzdHIsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciB0b2tlbnMgPSBsZXhlcihzdHIpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMucHJlZml4ZXMsIHByZWZpeGVzID0gX2EgPT09IHZvaWQgMCA/IFwiLi9cIiA6IF9hO1xuICAgIHZhciBkZWZhdWx0UGF0dGVybiA9IFwiW15cIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXSs/XCI7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHZhciBrZXkgPSAwO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgdmFyIHRyeUNvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICBpZiAoaSA8IHRva2Vucy5sZW5ndGggJiYgdG9rZW5zW2ldLnR5cGUgPT09IHR5cGUpXG4gICAgICAgICAgICByZXR1cm4gdG9rZW5zW2krK10udmFsdWU7XG4gICAgfTtcbiAgICB2YXIgbXVzdENvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICB2YXIgdmFsdWUgPSB0cnlDb25zdW1lKHR5cGUpO1xuICAgICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgdmFyIF9hID0gdG9rZW5zW2ldLCBuZXh0VHlwZSA9IF9hLnR5cGUsIGluZGV4ID0gX2EuaW5kZXg7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmV4cGVjdGVkIFwiICsgbmV4dFR5cGUgKyBcIiBhdCBcIiArIGluZGV4ICsgXCIsIGV4cGVjdGVkIFwiICsgdHlwZSk7XG4gICAgfTtcbiAgICB2YXIgY29uc3VtZVRleHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBcIlwiO1xuICAgICAgICB2YXIgdmFsdWU7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICB3aGlsZSAoKHZhbHVlID0gdHJ5Q29uc3VtZShcIkNIQVJcIikgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKSkpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgd2hpbGUgKGkgPCB0b2tlbnMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gdHJ5Q29uc3VtZShcIkNIQVJcIik7XG4gICAgICAgIHZhciBuYW1lID0gdHJ5Q29uc3VtZShcIk5BTUVcIik7XG4gICAgICAgIHZhciBwYXR0ZXJuID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIik7XG4gICAgICAgIGlmIChuYW1lIHx8IHBhdHRlcm4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjaGFyIHx8IFwiXCI7XG4gICAgICAgICAgICBpZiAocHJlZml4ZXMuaW5kZXhPZihwcmVmaXgpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gcHJlZml4O1xuICAgICAgICAgICAgICAgIHByZWZpeCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUgfHwga2V5KyssXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IHBhdHRlcm4gfHwgZGVmYXVsdFBhdHRlcm4sXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciB2YWx1ZSA9IGNoYXIgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKTtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBwYXRoICs9IHZhbHVlO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgcGF0aCA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG9wZW4gPSB0cnlDb25zdW1lKFwiT1BFTlwiKTtcbiAgICAgICAgaWYgKG9wZW4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgdmFyIG5hbWVfMSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgcGF0dGVybl8xID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIikgfHwgXCJcIjtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgbXVzdENvbnN1bWUoXCJDTE9TRVwiKTtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lXzEgfHwgKHBhdHRlcm5fMSA/IGtleSsrIDogXCJcIiksXG4gICAgICAgICAgICAgICAgcGF0dGVybjogbmFtZV8xICYmICFwYXR0ZXJuXzEgPyBkZWZhdWx0UGF0dGVybiA6IHBhdHRlcm5fMSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICBzdWZmaXg6IHN1ZmZpeCxcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZShcIk1PRElGSUVSXCIpIHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgbXVzdENvbnN1bWUoXCJFTkRcIik7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnRzLnBhcnNlID0gcGFyc2U7XG4vKipcbiAqIENvbXBpbGUgYSBzdHJpbmcgdG8gYSB0ZW1wbGF0ZSBmdW5jdGlvbiBmb3IgdGhlIHBhdGguXG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGUoc3RyLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRva2Vuc1RvRnVuY3Rpb24ocGFyc2Uoc3RyLCBvcHRpb25zKSwgb3B0aW9ucyk7XG59XG5leHBvcnRzLmNvbXBpbGUgPSBjb21waWxlO1xuLyoqXG4gKiBFeHBvc2UgYSBtZXRob2QgZm9yIHRyYW5zZm9ybWluZyB0b2tlbnMgaW50byB0aGUgcGF0aCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9GdW5jdGlvbih0b2tlbnMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciByZUZsYWdzID0gZmxhZ3Mob3B0aW9ucyk7XG4gICAgdmFyIF9hID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hLCBfYiA9IG9wdGlvbnMudmFsaWRhdGUsIHZhbGlkYXRlID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYjtcbiAgICAvLyBDb21waWxlIGFsbCB0aGUgdG9rZW5zIGludG8gcmVnZXhwcy5cbiAgICB2YXIgbWF0Y2hlcyA9IHRva2Vucy5tYXAoZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKFwiXig/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSRcIiwgcmVGbGFncyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgdmFyIHBhdGggPSBcIlwiO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zW2ldO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW47XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBkYXRhID8gZGF0YVt0b2tlbi5uYW1lXSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHZhciBvcHRpb25hbCA9IHRva2VuLm1vZGlmaWVyID09PSBcIj9cIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCI7XG4gICAgICAgICAgICB2YXIgcmVwZWF0ID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIitcIjtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGlmICghcmVwZWF0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG5vdCBiZSBlbXB0eVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB2YWx1ZS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZSh2YWx1ZVtqXSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIGFsbCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZShTdHJpbmcodmFsdWUpLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbWF0Y2ggXFxcIlwiICsgdG9rZW4ucGF0dGVybiArIFwiXFxcIiwgYnV0IGdvdCBcXFwiXCIgKyBzZWdtZW50ICsgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9uYWwpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB2YXIgdHlwZU9mTWVzc2FnZSA9IHJlcGVhdCA/IFwiYW4gYXJyYXlcIiA6IFwiYSBzdHJpbmdcIjtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIGJlIFwiICsgdHlwZU9mTWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfTtcbn1cbmV4cG9ydHMudG9rZW5zVG9GdW5jdGlvbiA9IHRva2Vuc1RvRnVuY3Rpb247XG4vKipcbiAqIENyZWF0ZSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBzcGVjLlxuICovXG5mdW5jdGlvbiBtYXRjaChzdHIsIG9wdGlvbnMpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIHZhciByZSA9IHBhdGhUb1JlZ2V4cChzdHIsIGtleXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMubWF0Y2ggPSBtYXRjaDtcbi8qKlxuICogQ3JlYXRlIGEgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgb3V0cHV0LlxuICovXG5mdW5jdGlvbiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLmRlY29kZSwgZGVjb2RlID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2E7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwYXRobmFtZSkge1xuICAgICAgICB2YXIgbSA9IHJlLmV4ZWMocGF0aG5hbWUpO1xuICAgICAgICBpZiAoIW0pXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHZhciBwYXRoID0gbVswXSwgaW5kZXggPSBtLmluZGV4O1xuICAgICAgICB2YXIgcGFyYW1zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICBpZiAobVtpXSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIHJldHVybiBcImNvbnRpbnVlXCI7XG4gICAgICAgICAgICB2YXIga2V5ID0ga2V5c1tpIC0gMV07XG4gICAgICAgICAgICBpZiAoa2V5Lm1vZGlmaWVyID09PSBcIipcIiB8fCBrZXkubW9kaWZpZXIgPT09IFwiK1wiKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IG1baV0uc3BsaXQoa2V5LnByZWZpeCArIGtleS5zdWZmaXgpLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlY29kZSh2YWx1ZSwga2V5KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBkZWNvZGUobVtpXSwga2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBtLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBfbG9vcF8xKGkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHBhdGg6IHBhdGgsIGluZGV4OiBpbmRleCwgcGFyYW1zOiBwYXJhbXMgfTtcbiAgICB9O1xufVxuZXhwb3J0cy5yZWdleHBUb0Z1bmN0aW9uID0gcmVnZXhwVG9GdW5jdGlvbjtcbi8qKlxuICogRXNjYXBlIGEgcmVndWxhciBleHByZXNzaW9uIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gZXNjYXBlU3RyaW5nKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFsuKyo/PV4hOiR7fSgpW1xcXXwvXFxcXF0pL2csIFwiXFxcXCQxXCIpO1xufVxuLyoqXG4gKiBHZXQgdGhlIGZsYWdzIGZvciBhIHJlZ2V4cCBmcm9tIHRoZSBvcHRpb25zLlxuICovXG5mdW5jdGlvbiBmbGFncyhvcHRpb25zKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMgJiYgb3B0aW9ucy5zZW5zaXRpdmUgPyBcIlwiIDogXCJpXCI7XG59XG4vKipcbiAqIFB1bGwgb3V0IGtleXMgZnJvbSBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cykge1xuICAgIGlmICgha2V5cylcbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgLy8gVXNlIGEgbmVnYXRpdmUgbG9va2FoZWFkIHRvIG1hdGNoIG9ubHkgY2FwdHVyaW5nIGdyb3Vwcy5cbiAgICB2YXIgZ3JvdXBzID0gcGF0aC5zb3VyY2UubWF0Y2goL1xcKCg/IVxcPykvZyk7XG4gICAgaWYgKGdyb3Vwcykge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGdyb3Vwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAga2V5cy5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBpLFxuICAgICAgICAgICAgICAgIHByZWZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IFwiXCIsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG4vKipcbiAqIFRyYW5zZm9ybSBhbiBhcnJheSBpbnRvIGEgcmVnZXhwLlxuICovXG5mdW5jdGlvbiBhcnJheVRvUmVnZXhwKHBhdGhzLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgdmFyIHBhcnRzID0gcGF0aHMubWFwKGZ1bmN0aW9uIChwYXRoKSB7IHJldHVybiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykuc291cmNlOyB9KTtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChcIig/OlwiICsgcGFydHMuam9pbihcInxcIikgKyBcIilcIiwgZmxhZ3Mob3B0aW9ucykpO1xufVxuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIHJlZ2V4cCBmcm9tIHN0cmluZyBpbnB1dC5cbiAqL1xuZnVuY3Rpb24gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb1JlZ2V4cChwYXJzZShwYXRoLCBvcHRpb25zKSwga2V5cywgb3B0aW9ucyk7XG59XG4vKipcbiAqIEV4cG9zZSBhIGZ1bmN0aW9uIGZvciB0YWtpbmcgdG9rZW5zIGFuZCByZXR1cm5pbmcgYSBSZWdFeHAuXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvUmVnZXhwKHRva2Vucywga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5zdHJpY3QsIHN0cmljdCA9IF9hID09PSB2b2lkIDAgPyBmYWxzZSA6IF9hLCBfYiA9IG9wdGlvbnMuc3RhcnQsIHN0YXJ0ID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYiwgX2MgPSBvcHRpb25zLmVuZCwgZW5kID0gX2MgPT09IHZvaWQgMCA/IHRydWUgOiBfYywgX2QgPSBvcHRpb25zLmVuY29kZSwgZW5jb2RlID0gX2QgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2Q7XG4gICAgdmFyIGVuZHNXaXRoID0gXCJbXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5lbmRzV2l0aCB8fCBcIlwiKSArIFwiXXwkXCI7XG4gICAgdmFyIGRlbGltaXRlciA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiLyM/XCIpICsgXCJdXCI7XG4gICAgdmFyIHJvdXRlID0gc3RhcnQgPyBcIl5cIiA6IFwiXCI7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIHRoZSB0b2tlbnMgYW5kIGNyZWF0ZSBvdXIgcmVnZXhwIHN0cmluZy5cbiAgICBmb3IgKHZhciBfaSA9IDAsIHRva2Vuc18xID0gdG9rZW5zOyBfaSA8IHRva2Vuc18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNfMVtfaV07XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4pKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnByZWZpeCkpO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4uc3VmZml4KSk7XG4gICAgICAgICAgICBpZiAodG9rZW4ucGF0dGVybikge1xuICAgICAgICAgICAgICAgIGlmIChrZXlzKVxuICAgICAgICAgICAgICAgICAgICBrZXlzLnB1c2godG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmIChwcmVmaXggfHwgc3VmZml4KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b2tlbi5tb2RpZmllciA9PT0gXCIrXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbW9kID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiID8gXCI/XCIgOiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKCg/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSg/OlwiICsgc3VmZml4ICsgcHJlZml4ICsgXCIoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikpKilcIiArIHN1ZmZpeCArIFwiKVwiICsgbW9kO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZW5kKSB7XG4gICAgICAgIGlmICghc3RyaWN0KVxuICAgICAgICAgICAgcm91dGUgKz0gZGVsaW1pdGVyICsgXCI/XCI7XG4gICAgICAgIHJvdXRlICs9ICFvcHRpb25zLmVuZHNXaXRoID8gXCIkXCIgOiBcIig/PVwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBlbmRUb2tlbiA9IHRva2Vuc1t0b2tlbnMubGVuZ3RoIC0gMV07XG4gICAgICAgIHZhciBpc0VuZERlbGltaXRlZCA9IHR5cGVvZiBlbmRUb2tlbiA9PT0gXCJzdHJpbmdcIlxuICAgICAgICAgICAgPyBkZWxpbWl0ZXIuaW5kZXhPZihlbmRUb2tlbltlbmRUb2tlbi5sZW5ndGggLSAxXSkgPiAtMVxuICAgICAgICAgICAgOiAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgICAgICBlbmRUb2tlbiA9PT0gdW5kZWZpbmVkO1xuICAgICAgICBpZiAoIXN0cmljdCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIGRlbGltaXRlciArIFwiKD89XCIgKyBlbmRzV2l0aCArIFwiKSk/XCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc0VuZERlbGltaXRlZCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPz1cIiArIGRlbGltaXRlciArIFwifFwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3IFJlZ0V4cChyb3V0ZSwgZmxhZ3Mob3B0aW9ucykpO1xufVxuZXhwb3J0cy50b2tlbnNUb1JlZ2V4cCA9IHRva2Vuc1RvUmVnZXhwO1xuLyoqXG4gKiBOb3JtYWxpemUgdGhlIGdpdmVuIHBhdGggc3RyaW5nLCByZXR1cm5pbmcgYSByZWd1bGFyIGV4cHJlc3Npb24uXG4gKlxuICogQW4gZW1wdHkgYXJyYXkgY2FuIGJlIHBhc3NlZCBpbiBmb3IgdGhlIGtleXMsIHdoaWNoIHdpbGwgaG9sZCB0aGVcbiAqIHBsYWNlaG9sZGVyIGtleSBkZXNjcmlwdGlvbnMuIEZvciBleGFtcGxlLCB1c2luZyBgL3VzZXIvOmlkYCwgYGtleXNgIHdpbGxcbiAqIGNvbnRhaW4gYFt7IG5hbWU6ICdpZCcsIGRlbGltaXRlcjogJy8nLCBvcHRpb25hbDogZmFsc2UsIHJlcGVhdDogZmFsc2UgfV1gLlxuICovXG5mdW5jdGlvbiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChwYXRoIGluc3RhbmNlb2YgUmVnRXhwKVxuICAgICAgICByZXR1cm4gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cyk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocGF0aCkpXG4gICAgICAgIHJldHVybiBhcnJheVRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMucGF0aFRvUmVnZXhwID0gcGF0aFRvUmVnZXhwO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5cbnR5cGUgSGFuZGxlciA9ICguLi5ldnRzOiBhbnlbXSkgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBNaXR0RW1pdHRlciA9IHtcbiAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pOiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pdHQoKTogTWl0dEVtaXR0ZXIge1xuICBjb25zdCBhbGw6IHsgW3M6IHN0cmluZ106IEhhbmRsZXJbXSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJldHVybiB7XG4gICAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICA7KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpXG4gICAgfSxcblxuICAgIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICA7KGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXI6IEhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlciguLi5ldnRzKVxuICAgICAgfSlcbiAgICB9LFxuICB9XG59XG4iLCIvKiBnbG9iYWwgX19ORVhUX0RBVEFfXyAqL1xuLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoLFxuICByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCxcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcbmltcG9ydCB7IEdvb2RQYWdlQ2FjaGUsIFN0eWxlU2hlZXRUdXBsZSB9IGZyb20gJy4uLy4uLy4uL2NsaWVudC9wYWdlLWxvYWRlcidcbmltcG9ydCB7IGRlbm9ybWFsaXplUGFnZVBhdGggfSBmcm9tICcuLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRMb2NhdGlvbk9yaWdpbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vdXRpbHMvcXVlcnlzdHJpbmcnXG5pbXBvcnQgcmVzb2x2ZVJld3JpdGVzIGZyb20gJy4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuXG5pbnRlcmZhY2UgVHJhbnNpdGlvbk9wdGlvbnMge1xuICBzaGFsbG93PzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgTmV4dEhpc3RvcnlTdGF0ZSB7XG4gIHVybDogc3RyaW5nXG4gIGFzOiBzdHJpbmdcbiAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbn1cblxudHlwZSBIaXN0b3J5U3RhdGUgPSBudWxsIHwgeyBfX046IGZhbHNlIH0gfCAoeyBfX046IHRydWUgfSAmIE5leHRIaXN0b3J5U3RhdGUpXG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgY2FuY2VsbGVkOiB0cnVlLFxuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICByZXR1cm4gYmFzZVBhdGggJiYgcGF0aC5zdGFydHNXaXRoKCcvJylcbiAgICA/IHBhdGggPT09ICcvJ1xuICAgICAgPyBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChiYXNlUGF0aClcbiAgICAgIDogYmFzZVBhdGggKyBwYXRoXG4gICAgOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpIHx8ICcvJ1xufVxuXG4vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgTmV4dC5qcyByb3V0ZXIgKGJyb3dzZXIgb25seSkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0xvY2FsVVJMKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGlmICh1cmwuc3RhcnRzV2l0aCgnLycpKSByZXR1cm4gdHJ1ZVxuICB0cnkge1xuICAgIC8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuICAgIGNvbnN0IGxvY2F0aW9uT3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICAgIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKVxuICAgIHJldHVybiByZXNvbHZlZC5vcmlnaW4gPT09IGxvY2F0aW9uT3JpZ2luICYmIGhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKVxuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxudHlwZSBVcmwgPSBVcmxPYmplY3QgfCBzdHJpbmdcblxuLyoqXG4gKiBSZXNvbHZlcyBhIGdpdmVuIGh5cGVybGluayB3aXRoIGEgY2VydGFpbiByb3V0ZXIgc3RhdGUgKGJhc2VQYXRoIG5vdCBpbmNsdWRlZCkuXG4gKiBQcmVzZXJ2ZXMgYWJzb2x1dGUgdXJscy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVIcmVmKGN1cnJlbnRQYXRoOiBzdHJpbmcsIGhyZWY6IFVybCk6IHN0cmluZyB7XG4gIC8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG4gIGNvbnN0IGJhc2UgPSBuZXcgVVJMKGN1cnJlbnRQYXRoLCAnaHR0cDovL24nKVxuICBjb25zdCB1cmxBc1N0cmluZyA9XG4gICAgdHlwZW9mIGhyZWYgPT09ICdzdHJpbmcnID8gaHJlZiA6IGZvcm1hdFdpdGhWYWxpZGF0aW9uKGhyZWYpXG4gIHRyeSB7XG4gICAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKHVybEFzU3RyaW5nLCBiYXNlKVxuICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goZmluYWxVcmwucGF0aG5hbWUpXG4gICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICByZXR1cm4gZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgICAgPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpXG4gICAgICA6IGZpbmFsVXJsLmhyZWZcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiB1cmxBc1N0cmluZ1xuICB9XG59XG5cbmNvbnN0IFBBR0VfTE9BRF9FUlJPUiA9IFN5bWJvbCgnUEFHRV9MT0FEX0VSUk9SJylcbmV4cG9ydCBmdW5jdGlvbiBtYXJrTG9hZGluZ0Vycm9yKGVycjogRXJyb3IpOiBFcnJvciB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBQQUdFX0xPQURfRVJST1IsIHt9KVxufVxuXG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyOiBOZXh0Um91dGVyLCB1cmw6IFVybCwgYXM6IFVybCkge1xuICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgcmV0dXJuIHtcbiAgICB1cmw6IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgdXJsKSksXG4gICAgYXM6IGFzID8gYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCBhcykpIDogYXMsXG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIFByaXZhdGVSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzID0gUGljazxQcml2YXRlUm91dGVJbmZvLCAnQ29tcG9uZW50JyB8ICdlcnInPiAmIHtcbiAgcm91dGVyOiBSb3V0ZXJcbn0gJiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG5leHBvcnQgdHlwZSBBcHBDb21wb25lbnQgPSBDb21wb25lbnRUeXBlPEFwcFByb3BzPlxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChkYXRhOiBQcml2YXRlUm91dGVJbmZvLCBBcHA6IEFwcENvbXBvbmVudCkgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IE5leHRIaXN0b3J5U3RhdGUpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID1cbiAgcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJlxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5XG5cbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsOiBzdHJpbmcsIGF0dGVtcHRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgLy9cbiAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgLy8gPiBvcHRpb24uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgIC8vXG4gICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSlcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzLmpzb24oKVxuICB9KVxufVxuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmOiBzdHJpbmcsIGlzU2VydmVyUmVuZGVyOiBib29sZWFuKSB7XG4gIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgLy8gbG9vcC5cbiAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICBtYXJrTG9hZGluZ0Vycm9yKGVycilcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFByaXZhdGVSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuICBfaW5GbGlnaHRSb3V0ZT86IHN0cmluZ1xuICBfc2hhbGxvdz86IGJvb2xlYW5cblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBpbml0aWFsU3R5bGVTaGVldHMsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIGluaXRpYWxTdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgICAgIEFwcDogQXBwQ29tcG9uZW50XG4gICAgICB3cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHM6IGluaXRpYWxTdHlsZVNoZWV0cyxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7XG4gICAgICBDb21wb25lbnQ6IEFwcCBhcyBDb21wb25lbnRUeXBlLFxuICAgICAgc3R5bGVTaGVldHM6IFtcbiAgICAgICAgLyogL19hcHAgZG9lcyBub3QgbmVlZCBpdHMgc3R5bGVzaGVldHMgbWFuYWdlZCAqL1xuICAgICAgXSxcbiAgICB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIHRoaXMuYXNQYXRoID1cbiAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBfX05FWFRfREFUQV9fLmF1dG9FeHBvcnQgPyBwYXRobmFtZSA6IGFzXG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoXG4gICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb25cbiAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcFxuICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgIHRoaXMuaXNTc3IgPSB0cnVlXG5cbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrXG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICAgIGdldFVSTCgpXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKVxuXG4gICAgICAvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnXG5cbiAgICAgICAgICBsZXQgc2Nyb2xsRGVib3VuY2VUaW1lb3V0OiB1bmRlZmluZWQgfCBOb2RlSlMuVGltZW91dFxuXG4gICAgICAgICAgY29uc3QgZGVib3VuY2VkU2Nyb2xsU2F2ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChzY3JvbGxEZWJvdW5jZVRpbWVvdXQpIGNsZWFyVGltZW91dChzY3JvbGxEZWJvdW5jZVRpbWVvdXQpXG5cbiAgICAgICAgICAgIHNjcm9sbERlYm91bmNlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB7IHVybCwgYXM6IGN1ckFzLCBvcHRpb25zIH0gPSBoaXN0b3J5LnN0YXRlXG4gICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGN1ckFzLFxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgICAgICAgICAgIF9OX1g6IHdpbmRvdy5zY3JvbGxYLFxuICAgICAgICAgICAgICAgICAgX05fWTogd2luZG93LnNjcm9sbFksXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSwgMTApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGRlYm91bmNlZFNjcm9sbFNhdmUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlID0gKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCBzdGF0ZSA9IGUuc3RhdGUgYXMgSGlzdG9yeVN0YXRlXG5cbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgLy9cbiAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXNcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICBnZXRVUkwoKVxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFzdGF0ZS5fX04pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucyB9ID0gc3RhdGVcblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMgPT09IHRoaXMuYXNQYXRoICYmIHBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoc3RhdGUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZShcbiAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgdXJsLFxuICAgICAgYXMsXG4gICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgIHNoYWxsb3c6IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLl9zaGFsbG93LFxuICAgICAgfSlcbiAgICApXG4gIH1cblxuICByZWxvYWQoKTogdm9pZCB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gIH1cblxuICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL1xuICBiYWNrKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICBwdXNoKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIGFzeW5jIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwodXJsKSkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmxcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgfVxuICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICBpZiAoU1QpIHtcbiAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICB9XG5cbiAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSlcbiAgICB9XG5cbiAgICBjb25zdCBjbGVhbmVkQXMgPSBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhc1xuICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhc1xuXG4gICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKSB7XG4gICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBc1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcylcbiAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcylcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSlcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAvLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbiAgICAvLyB3aGVuIHJld3JpdHRlbiB0b1xuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcbiAgICBjb25zdCB7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIucHJvbWlzZWRCdWlsZE1hbmlmZXN0XG5cbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSwgc2VhcmNoUGFyYW1zIH0gPSBwYXJzZWRcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpXG5cbiAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgPyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZSkpXG4gICAgICA6IHBhdGhuYW1lXG5cbiAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSkge1xuICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG5cbiAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgIC8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUykge1xuICAgICAgcmVzb2x2ZWRBcyA9IHJlc29sdmVSZXdyaXRlcyhcbiAgICAgICAgYXMsXG4gICAgICAgIHBhZ2VzLFxuICAgICAgICBiYXNlUGF0aCxcbiAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICAocDogc3RyaW5nKSA9PiB0aGlzLl9yZXNvbHZlSHJlZih7IHBhdGhuYW1lOiBwIH0sIHBhZ2VzKS5wYXRobmFtZSFcbiAgICAgIClcbiAgICB9XG4gICAgcmVzb2x2ZWRBcyA9IGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpXG5cbiAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICBjb25zdCB7IHBhdGhuYW1lOiBhc1BhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHJlc29sdmVkQXMpXG4gICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGAgZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCArXG4gICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2luY29tcGF0aWJsZS1ocmVmLWFzYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcylcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHNoYWxsb3dcbiAgICAgIClcbiAgICAgIGxldCB7IGVycm9yIH0gPSByb3V0ZUluZm9cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMpXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgfVxuXG4gICAgICBhd2FpdCB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUhLCBxdWVyeSwgY2xlYW5lZEFzLCByb3V0ZUluZm8pLmNhdGNoKFxuICAgICAgICAoZSkgPT4ge1xuICAgICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlXG4gICAgICAgICAgZWxzZSB0aHJvdyBlXG4gICAgICAgIH1cbiAgICAgIClcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMpXG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiAmJiAnX05fWCcgaW4gb3B0aW9ucykge1xuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygob3B0aW9ucyBhcyBhbnkpLl9OX1gsIChvcHRpb25zIGFzIGFueSkuX05fWSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMpXG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3dcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgIH0gYXMgSGlzdG9yeVN0YXRlLFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuXG4gICAgaWYgKFBBR0VfTE9BRF9FUlJPUiBpbiBlcnIgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcylcblxuICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKClcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBwYWdlOiBDb21wb25lbnQsIHN0eWxlU2hlZXRzIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KFxuICAgICAgICAnL19lcnJvcidcbiAgICAgIClcbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0cyxcbiAgICAgICAgZXJyLFxuICAgICAgICBlcnJvcjogZXJyLFxuICAgICAgfVxuXG4gICAgICB0cnkge1xuICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICBlcnIsXG4gICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgIH0gYXMgYW55KVxuICAgICAgfSBjYXRjaCAoZ2lwRXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycilcbiAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKHJvdXRlSW5mb0Vycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3Iocm91dGVJbmZvRXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCB0cnVlKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldFJvdXRlSW5mbyhcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIHNoYWxsb3c6IGJvb2xlYW4gPSBmYWxzZVxuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXVxuXG4gICAgICBpZiAoc2hhbGxvdyAmJiBjYWNoZWRSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlZFJvdXRlSW5mb1xuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgPyBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKChyZXMpID0+ICh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICB9KSlcblxuICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YUhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIGRlbEJhc2VQYXRoKGFzKSxcbiAgICAgICAgICBfX05fU1NHXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhPFByaXZhdGVSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgIF9fTl9TU0dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhcbiAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgfSBhcyBhbnlcbiAgICAgICAgICAgIClcbiAgICAgIClcbiAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMpXG4gICAgfVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgIGlmIChoYXNoID09PSAnJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKVxuICAgIGlmIChpZEVsKSB7XG4gICAgICBpZEVsLnNjcm9sbEludG9WaWV3KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXVxuICAgIGlmIChuYW1lRWwpIHtcbiAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgfVxuICB9XG5cbiAgdXJsSXNOZXcoYXNQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aFxuICB9XG5cbiAgX3Jlc29sdmVIcmVmKHBhcnNlZEhyZWY6IFVybE9iamVjdCwgcGFnZXM6IHN0cmluZ1tdKSB7XG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VkSHJlZlxuICAgIGNvbnN0IGNsZWFuUGF0aG5hbWUgPSBkZW5vcm1hbGl6ZVBhZ2VQYXRoKGRlbEJhc2VQYXRoKHBhdGhuYW1lISkpXG5cbiAgICBpZiAoY2xlYW5QYXRobmFtZSA9PT0gJy80MDQnIHx8IGNsZWFuUGF0aG5hbWUgPT09ICcvX2Vycm9yJykge1xuICAgICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgICB9XG5cbiAgICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gICAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lISkpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIHBhZ2VzLnNvbWUoKHBhZ2UpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGlzRHluYW1pY1JvdXRlKHBhZ2UpICYmXG4gICAgICAgICAgZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUhKVxuICAgICAgICApIHtcbiAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGFnZSlcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4gcGFyc2VkSHJlZlxuICB9XG5cbiAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9cbiAgYXN5bmMgcHJlZmV0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXNQYXRoOiBzdHJpbmcgPSB1cmwsXG4gICAgb3B0aW9uczogUHJlZmV0Y2hPcHRpb25zID0ge31cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZFxuXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuXG4gICAgcGFyc2VkID0gdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkLCBwYWdlcykgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuXG4gICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIHRoaXMucGFnZUxvYWRlci5wcmVmZXRjaERhdGEodXJsLCBhc1BhdGgpLFxuICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgIF0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxHb29kUGFnZUNhY2hlPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgdGhpcy5zZGNbY2FjaGVLZXldKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSlcbiAgICB9XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGFcbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcCBhcyBBcHBDb21wb25lbnQpXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLCBhcylcbiAgICAgIHRoaXMuY2xjKClcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIG5vdGlmeShkYXRhOiBQcml2YXRlUm91dGVJbmZvKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQgYXMgQXBwQ29tcG9uZW50KVxuICB9XG59XG4iLCIvLyBGb3JtYXQgZnVuY3Rpb24gbW9kaWZpZWQgZnJvbSBub2RlanNcbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0ICogYXMgcXVlcnlzdHJpbmcgZnJvbSAnLi9xdWVyeXN0cmluZydcblxuY29uc3Qgc2xhc2hlZFByb3RvY29scyA9IC9odHRwcz98ZnRwfGdvcGhlcnxmaWxlL1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VXJsKHVybE9iajogVXJsT2JqZWN0KSB7XG4gIGxldCB7IGF1dGgsIGhvc3RuYW1lIH0gPSB1cmxPYmpcbiAgbGV0IHByb3RvY29sID0gdXJsT2JqLnByb3RvY29sIHx8ICcnXG4gIGxldCBwYXRobmFtZSA9IHVybE9iai5wYXRobmFtZSB8fCAnJ1xuICBsZXQgaGFzaCA9IHVybE9iai5oYXNoIHx8ICcnXG4gIGxldCBxdWVyeSA9IHVybE9iai5xdWVyeSB8fCAnJ1xuICBsZXQgaG9zdDogc3RyaW5nIHwgZmFsc2UgPSBmYWxzZVxuXG4gIGF1dGggPSBhdXRoID8gZW5jb2RlVVJJQ29tcG9uZW50KGF1dGgpLnJlcGxhY2UoLyUzQS9pLCAnOicpICsgJ0AnIDogJydcblxuICBpZiAodXJsT2JqLmhvc3QpIHtcbiAgICBob3N0ID0gYXV0aCArIHVybE9iai5ob3N0XG4gIH0gZWxzZSBpZiAoaG9zdG5hbWUpIHtcbiAgICBob3N0ID0gYXV0aCArICh+aG9zdG5hbWUuaW5kZXhPZignOicpID8gYFske2hvc3RuYW1lfV1gIDogaG9zdG5hbWUpXG4gICAgaWYgKHVybE9iai5wb3J0KSB7XG4gICAgICBob3N0ICs9ICc6JyArIHVybE9iai5wb3J0XG4gICAgfVxuICB9XG5cbiAgaWYgKHF1ZXJ5ICYmIHR5cGVvZiBxdWVyeSA9PT0gJ29iamVjdCcpIHtcbiAgICBxdWVyeSA9IFN0cmluZyhxdWVyeXN0cmluZy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHF1ZXJ5IGFzIFBhcnNlZFVybFF1ZXJ5KSlcbiAgfVxuXG4gIGxldCBzZWFyY2ggPSB1cmxPYmouc2VhcmNoIHx8IChxdWVyeSAmJiBgPyR7cXVlcnl9YCkgfHwgJydcblxuICBpZiAocHJvdG9jb2wgJiYgcHJvdG9jb2wuc3Vic3RyKC0xKSAhPT0gJzonKSBwcm90b2NvbCArPSAnOidcblxuICBpZiAoXG4gICAgdXJsT2JqLnNsYXNoZXMgfHxcbiAgICAoKCFwcm90b2NvbCB8fCBzbGFzaGVkUHJvdG9jb2xzLnRlc3QocHJvdG9jb2wpKSAmJiBob3N0ICE9PSBmYWxzZSlcbiAgKSB7XG4gICAgaG9zdCA9ICcvLycgKyAoaG9zdCB8fCAnJylcbiAgICBpZiAocGF0aG5hbWUgJiYgcGF0aG5hbWVbMF0gIT09ICcvJykgcGF0aG5hbWUgPSAnLycgKyBwYXRobmFtZVxuICB9IGVsc2UgaWYgKCFob3N0KSB7XG4gICAgaG9zdCA9ICcnXG4gIH1cblxuICBpZiAoaGFzaCAmJiBoYXNoWzBdICE9PSAnIycpIGhhc2ggPSAnIycgKyBoYXNoXG4gIGlmIChzZWFyY2ggJiYgc2VhcmNoWzBdICE9PSAnPycpIHNlYXJjaCA9ICc/JyArIHNlYXJjaFxuXG4gIHBhdGhuYW1lID0gcGF0aG5hbWUucmVwbGFjZSgvWz8jXS9nLCBlbmNvZGVVUklDb21wb25lbnQpXG4gIHNlYXJjaCA9IHNlYXJjaC5yZXBsYWNlKCcjJywgJyUyMycpXG5cbiAgcmV0dXJuIGAke3Byb3RvY29sfSR7aG9zdH0ke3BhdGhuYW1lfSR7c2VhcmNofSR7aGFzaH1gXG59XG4iLCIvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSlcbn1cbiIsImltcG9ydCB7IGdldExvY2F0aW9uT3JpZ2luIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmNvbnN0IERVTU1ZX0JBU0UgPSBuZXcgVVJMKFxuICB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/ICdodHRwOi8vbicgOiBnZXRMb2NhdGlvbk9yaWdpbigpXG4pXG5cbi8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsOiBzdHJpbmcsIGJhc2U/OiBzdHJpbmcpIHtcbiAgY29uc3QgcmVzb2x2ZWRCYXNlID0gYmFzZSA/IG5ldyBVUkwoYmFzZSwgRFVNTVlfQkFTRSkgOiBEVU1NWV9CQVNFXG4gIGNvbnN0IHtcbiAgICBwYXRobmFtZSxcbiAgICBzZWFyY2hQYXJhbXMsXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZixcbiAgICBvcmlnaW4sXG4gICAgcHJvdG9jb2wsXG4gIH0gPSBuZXcgVVJMKHVybCwgcmVzb2x2ZWRCYXNlKVxuICBpZiAoXG4gICAgb3JpZ2luICE9PSBEVU1NWV9CQVNFLm9yaWdpbiB8fFxuICAgIChwcm90b2NvbCAhPT0gJ2h0dHA6JyAmJiBwcm90b2NvbCAhPT0gJ2h0dHBzOicpXG4gICkge1xuICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCcpXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBzZWFyY2hQYXJhbXMsXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZjogaHJlZi5zbGljZShEVU1NWV9CQVNFLm9yaWdpbi5sZW5ndGgpLFxuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBwYXRoVG9SZWdleHAgZnJvbSAnbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwJ1xuXG5leHBvcnQgeyBwYXRoVG9SZWdleHAgfVxuXG5leHBvcnQgY29uc3QgbWF0Y2hlck9wdGlvbnMgPSB7XG4gIHNlbnNpdGl2ZTogZmFsc2UsXG4gIGRlbGltaXRlcjogJy8nLFxuICBkZWNvZGU6IGRlY29kZVBhcmFtLFxufVxuXG5leHBvcnQgY29uc3QgY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyA9IHtcbiAgLi4ubWF0Y2hlck9wdGlvbnMsXG4gIHN0cmljdDogdHJ1ZSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgKGN1c3RvbVJvdXRlID0gZmFsc2UpID0+IHtcbiAgcmV0dXJuIChwYXRoOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBrZXlzOiBwYXRoVG9SZWdleHAuS2V5W10gPSBbXVxuICAgIGNvbnN0IG1hdGNoZXJSZWdleCA9IHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoXG4gICAgICBwYXRoLFxuICAgICAga2V5cyxcbiAgICAgIGN1c3RvbVJvdXRlID8gY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyA6IG1hdGNoZXJPcHRpb25zXG4gICAgKVxuICAgIGNvbnN0IG1hdGNoZXIgPSBwYXRoVG9SZWdleHAucmVnZXhwVG9GdW5jdGlvbihcbiAgICAgIG1hdGNoZXJSZWdleCxcbiAgICAgIGtleXMsXG4gICAgICBtYXRjaGVyT3B0aW9uc1xuICAgIClcblxuICAgIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQsIHBhcmFtcz86IGFueSkgPT4ge1xuICAgICAgY29uc3QgcmVzID0gcGF0aG5hbWUgPT0gbnVsbCA/IGZhbHNlIDogbWF0Y2hlcihwYXRobmFtZSlcbiAgICAgIGlmICghcmVzKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuXG4gICAgICBpZiAoY3VzdG9tUm91dGUpIHtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgICAgICAgIC8vIHVubmFtZWQgcGFyYW1zIHNob3VsZCBiZSByZW1vdmVkIGFzIHRoZXlcbiAgICAgICAgICAvLyBhcmUgbm90IGFsbG93ZWQgdG8gYmUgdXNlZCBpbiB0aGUgZGVzdGluYXRpb25cbiAgICAgICAgICBpZiAodHlwZW9mIGtleS5uYW1lID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgZGVsZXRlIChyZXMucGFyYW1zIGFzIGFueSlba2V5Lm5hbWVdXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7IC4uLnBhcmFtcywgLi4ucmVzLnBhcmFtcyB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGRlY29kZVBhcmFtKHBhcmFtOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICB9IGNhdGNoIChfKSB7XG4gICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKCdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJylcbiAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgIHRocm93IGVyclxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgKiBhcyBwYXRoVG9SZWdleHAgZnJvbSAnbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwJ1xuXG50eXBlIFBhcmFtcyA9IHsgW3BhcmFtOiBzdHJpbmddOiBhbnkgfVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmVwYXJlRGVzdGluYXRpb24oXG4gIGRlc3RpbmF0aW9uOiBzdHJpbmcsXG4gIHBhcmFtczogUGFyYW1zLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gIGFwcGVuZFBhcmFtc1RvUXVlcnk6IGJvb2xlYW4sXG4gIGJhc2VQYXRoOiBzdHJpbmdcbikge1xuICBsZXQgcGFyc2VkRGVzdGluYXRpb246IHtcbiAgICBxdWVyeT86IFBhcnNlZFVybFF1ZXJ5XG4gICAgcHJvdG9jb2w/OiBzdHJpbmdcbiAgICBob3N0bmFtZT86IHN0cmluZ1xuICAgIHBvcnQ/OiBzdHJpbmdcbiAgfSAmIFJldHVyblR5cGU8dHlwZW9mIHBhcnNlUmVsYXRpdmVVcmw+ID0ge30gYXMgYW55XG5cbiAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgIHBhcnNlZERlc3RpbmF0aW9uID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHNlYXJjaFBhcmFtcyxcbiAgICAgIGhhc2gsXG4gICAgICBob3N0bmFtZSxcbiAgICAgIHBvcnQsXG4gICAgICBwcm90b2NvbCxcbiAgICAgIHNlYXJjaCxcbiAgICAgIGhyZWYsXG4gICAgfSA9IG5ldyBVUkwoZGVzdGluYXRpb24pXG5cbiAgICBwYXJzZWREZXN0aW5hdGlvbiA9IHtcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgc2VhcmNoUGFyYW1zLFxuICAgICAgaGFzaCxcbiAgICAgIHByb3RvY29sLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgc2VhcmNoLFxuICAgICAgaHJlZixcbiAgICB9XG4gIH1cblxuICBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gICAgcGFyc2VkRGVzdGluYXRpb24uc2VhcmNoUGFyYW1zXG4gIClcbiAgY29uc3QgZGVzdFF1ZXJ5ID0gcGFyc2VkRGVzdGluYXRpb24ucXVlcnlcbiAgY29uc3QgZGVzdFBhdGggPSBgJHtwYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSF9JHtcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5oYXNoIHx8ICcnXG4gIH1gXG4gIGNvbnN0IGRlc3RQYXRoUGFyYW1LZXlzOiBwYXRoVG9SZWdleHAuS2V5W10gPSBbXVxuICBwYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKGRlc3RQYXRoLCBkZXN0UGF0aFBhcmFtS2V5cylcblxuICBjb25zdCBkZXN0UGF0aFBhcmFtcyA9IGRlc3RQYXRoUGFyYW1LZXlzLm1hcCgoa2V5KSA9PiBrZXkubmFtZSlcblxuICBsZXQgZGVzdGluYXRpb25Db21waWxlciA9IHBhdGhUb1JlZ2V4cC5jb21waWxlKFxuICAgIGRlc3RQYXRoLFxuICAgIC8vIHdlIGRvbid0IHZhbGlkYXRlIHdoaWxlIGNvbXBpbGluZyB0aGUgZGVzdGluYXRpb24gc2luY2Ugd2Ugc2hvdWxkXG4gICAgLy8gaGF2ZSBhbHJlYWR5IHZhbGlkYXRlZCBiZWZvcmUgd2UgZ290IHRvIHRoaXMgcG9pbnQgYW5kIHZhbGlkYXRpbmdcbiAgICAvLyBicmVha3MgY29tcGlsaW5nIGRlc3RpbmF0aW9ucyB3aXRoIG5hbWVkIHBhdHRlcm4gcGFyYW1zIGZyb20gdGhlIHNvdXJjZVxuICAgIC8vIGUuZy4gL3NvbWV0aGluZzpoZWxsbyguKikgLT4gL2Fub3RoZXIvOmhlbGxvIGlzIGJyb2tlbiB3aXRoIHZhbGlkYXRpb25cbiAgICAvLyBzaW5jZSBjb21waWxlIHZhbGlkYXRpb24gaXMgbWVhbnQgZm9yIHJldmVyc2luZyBhbmQgbm90IGZvciBpbnNlcnRpbmdcbiAgICAvLyBwYXJhbXMgZnJvbSBhIHNlcGFyYXRlIHBhdGgtcmVnZXggaW50byBhbm90aGVyXG4gICAgeyB2YWxpZGF0ZTogZmFsc2UgfVxuICApXG4gIGxldCBuZXdVcmxcblxuICAvLyB1cGRhdGUgYW55IHBhcmFtcyBpbiBxdWVyeSB2YWx1ZXNcbiAgZm9yIChjb25zdCBba2V5LCBzdHJPckFycmF5XSBvZiBPYmplY3QuZW50cmllcyhkZXN0UXVlcnkpKSB7XG4gICAgbGV0IHZhbHVlID0gQXJyYXkuaXNBcnJheShzdHJPckFycmF5KSA/IHN0ck9yQXJyYXlbMF0gOiBzdHJPckFycmF5XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICAvLyB0aGUgdmFsdWUgbmVlZHMgdG8gc3RhcnQgd2l0aCBhIGZvcndhcmQtc2xhc2ggdG8gYmUgY29tcGlsZWRcbiAgICAgIC8vIGNvcnJlY3RseVxuICAgICAgdmFsdWUgPSBgLyR7dmFsdWV9YFxuICAgICAgY29uc3QgcXVlcnlDb21waWxlciA9IHBhdGhUb1JlZ2V4cC5jb21waWxlKHZhbHVlLCB7IHZhbGlkYXRlOiBmYWxzZSB9KVxuICAgICAgdmFsdWUgPSBxdWVyeUNvbXBpbGVyKHBhcmFtcykuc3Vic3RyKDEpXG4gICAgfVxuICAgIGRlc3RRdWVyeVtrZXldID0gdmFsdWVcbiAgfVxuXG4gIC8vIGFkZCBwYXRoIHBhcmFtcyB0byBxdWVyeSBpZiBpdCdzIG5vdCBhIHJlZGlyZWN0IGFuZCBub3RcbiAgLy8gYWxyZWFkeSBkZWZpbmVkIGluIGRlc3RpbmF0aW9uIHF1ZXJ5IG9yIHBhdGhcbiAgY29uc3QgcGFyYW1LZXlzID0gT2JqZWN0LmtleXMocGFyYW1zKVxuXG4gIGlmIChcbiAgICBhcHBlbmRQYXJhbXNUb1F1ZXJ5ICYmXG4gICAgIXBhcmFtS2V5cy5zb21lKChrZXkpID0+IGRlc3RQYXRoUGFyYW1zLmluY2x1ZGVzKGtleSkpXG4gICkge1xuICAgIGZvciAoY29uc3Qga2V5IG9mIHBhcmFtS2V5cykge1xuICAgICAgaWYgKCEoa2V5IGluIGRlc3RRdWVyeSkpIHtcbiAgICAgICAgZGVzdFF1ZXJ5W2tleV0gPSBwYXJhbXNba2V5XVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHNob3VsZEFkZEJhc2VQYXRoID0gZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpICYmIGJhc2VQYXRoXG5cbiAgdHJ5IHtcbiAgICBuZXdVcmwgPSBgJHtzaG91bGRBZGRCYXNlUGF0aCA/IGJhc2VQYXRoIDogJyd9JHtlbmNvZGVVUkkoXG4gICAgICBkZXN0aW5hdGlvbkNvbXBpbGVyKHBhcmFtcylcbiAgICApfWBcblxuICAgIGNvbnN0IFtwYXRobmFtZSwgaGFzaF0gPSBuZXdVcmwuc3BsaXQoJyMnKVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5oYXNoID0gYCR7aGFzaCA/ICcjJyA6ICcnfSR7aGFzaCB8fCAnJ31gXG4gICAgZGVsZXRlIHBhcnNlZERlc3RpbmF0aW9uLnNlYXJjaFxuICAgIGRlbGV0ZSBwYXJzZWREZXN0aW5hdGlvbi5zZWFyY2hQYXJhbXNcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgaWYgKGVyci5tZXNzYWdlLm1hdGNoKC9FeHBlY3RlZCAuKj8gdG8gbm90IHJlcGVhdCwgYnV0IGdvdCBhbiBhcnJheS8pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBUbyB1c2UgYSBtdWx0aS1tYXRjaCBpbiB0aGUgZGVzdGluYXRpb24geW91IG11c3QgYWRkIFxcYCpcXGAgYXQgdGhlIGVuZCBvZiB0aGUgcGFyYW0gbmFtZSB0byBzaWduaWZ5IGl0IHNob3VsZCByZXBlYXQuIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2ludmFsaWQtbXVsdGktbWF0Y2hgXG4gICAgICApXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9XG5cbiAgLy8gUXVlcnkgbWVyZ2Ugb3JkZXIgbG93ZXN0IHByaW9yaXR5IHRvIGhpZ2hlc3RcbiAgLy8gMS4gaW5pdGlhbCBVUkwgcXVlcnkgdmFsdWVzXG4gIC8vIDIuIHBhdGggc2VnbWVudCB2YWx1ZXNcbiAgLy8gMy4gZGVzdGluYXRpb24gc3BlY2lmaWVkIHF1ZXJ5IHZhbHVlc1xuICBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeSA9IHtcbiAgICAuLi5xdWVyeSxcbiAgICAuLi5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeSxcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbmV3VXJsLFxuICAgIHBhcnNlZERlc3RpbmF0aW9uLFxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShcbiAgc2VhcmNoUGFyYW1zOiBVUkxTZWFyY2hQYXJhbXNcbik6IFBhcnNlZFVybFF1ZXJ5IHtcbiAgY29uc3QgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cbiAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICBpZiAodHlwZW9mIHF1ZXJ5W2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBxdWVyeVtrZXldID0gdmFsdWVcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpIHtcbiAgICAgIDsocXVlcnlba2V5XSBhcyBzdHJpbmdbXSkucHVzaCh2YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgcXVlcnlba2V5XSA9IFtxdWVyeVtrZXldIGFzIHN0cmluZywgdmFsdWVdXG4gICAgfVxuICB9KVxuICByZXR1cm4gcXVlcnlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMoXG4gIHVybFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgY29uc3QgcmVzdWx0ID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpXG4gIE9iamVjdC5lbnRyaWVzKHVybFF1ZXJ5KS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlLmZvckVhY2goKGl0ZW0pID0+IHJlc3VsdC5hcHBlbmQoa2V5LCBpdGVtKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0LnNldChrZXksIHZhbHVlKVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduKFxuICB0YXJnZXQ6IFVSTFNlYXJjaFBhcmFtcyxcbiAgLi4uc2VhcmNoUGFyYW1zTGlzdDogVVJMU2VhcmNoUGFyYW1zW11cbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIHNlYXJjaFBhcmFtc0xpc3QuZm9yRWFjaCgoc2VhcmNoUGFyYW1zKSA9PiB7XG4gICAgQXJyYXkuZnJvbShzZWFyY2hQYXJhbXMua2V5cygpKS5mb3JFYWNoKChrZXkpID0+IHRhcmdldC5kZWxldGUoa2V5KSlcbiAgICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4gdGFyZ2V0LmFwcGVuZChrZXksIHZhbHVlKSlcbiAgfSlcbiAgcmV0dXJuIHRhcmdldFxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCBwYXRoTWF0Y2ggZnJvbSAnLi9wYXRoLW1hdGNoJ1xuaW1wb3J0IHByZXBhcmVEZXN0aW5hdGlvbiBmcm9tICcuL3ByZXBhcmUtZGVzdGluYXRpb24nXG5pbXBvcnQgeyBSZXdyaXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL2xvYWQtY3VzdG9tLXJvdXRlcydcblxuY29uc3QgY3VzdG9tUm91dGVNYXRjaGVyID0gcGF0aE1hdGNoKHRydWUpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc29sdmVSZXdyaXRlcyhcbiAgYXNQYXRoOiBzdHJpbmcsXG4gIHBhZ2VzOiBzdHJpbmdbXSxcbiAgYmFzZVBhdGg6IHN0cmluZyxcbiAgcmV3cml0ZXM6IFJld3JpdGVbXSxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICByZXNvbHZlSHJlZjogKHBhdGg6IHN0cmluZykgPT4gc3RyaW5nXG4pIHtcbiAgaWYgKCFwYWdlcy5pbmNsdWRlcyhhc1BhdGgpKSB7XG4gICAgZm9yIChjb25zdCByZXdyaXRlIG9mIHJld3JpdGVzKSB7XG4gICAgICBjb25zdCBtYXRjaGVyID0gY3VzdG9tUm91dGVNYXRjaGVyKHJld3JpdGUuc291cmNlKVxuICAgICAgY29uc3QgcGFyYW1zID0gbWF0Y2hlcihhc1BhdGgpXG5cbiAgICAgIGlmIChwYXJhbXMpIHtcbiAgICAgICAgaWYgKCFyZXdyaXRlLmRlc3RpbmF0aW9uKSB7XG4gICAgICAgICAgLy8gdGhpcyBpcyBhIHByb3hpZWQgcmV3cml0ZSB3aGljaCBpc24ndCBoYW5kbGVkIG9uIHRoZSBjbGllbnRcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRlc3RSZXMgPSBwcmVwYXJlRGVzdGluYXRpb24oXG4gICAgICAgICAgcmV3cml0ZS5kZXN0aW5hdGlvbixcbiAgICAgICAgICBwYXJhbXMsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICByZXdyaXRlLmJhc2VQYXRoID09PSBmYWxzZSA/ICcnIDogYmFzZVBhdGhcbiAgICAgICAgKVxuICAgICAgICBhc1BhdGggPSBkZXN0UmVzLnBhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lIVxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCBkZXN0UmVzLnBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5KVxuXG4gICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhhc1BhdGgpKSB7XG4gICAgICAgICAgLy8gY2hlY2sgaWYgd2Ugbm93IG1hdGNoIGEgcGFnZSBhcyB0aGlzIG1lYW5zIHdlIGFyZSBkb25lXG4gICAgICAgICAgLy8gcmVzb2x2aW5nIHRoZSByZXdyaXRlc1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cblxuICAgICAgICAvLyBjaGVjayBpZiB3ZSBtYXRjaCBhIGR5bmFtaWMtcm91dGUsIGlmIHNvIHdlIGJyZWFrIHRoZSByZXdyaXRlcyBjaGFpblxuICAgICAgICBjb25zdCByZXNvbHZlZEhyZWYgPSByZXNvbHZlSHJlZihhc1BhdGgpXG5cbiAgICAgICAgaWYgKHJlc29sdmVkSHJlZiAhPT0gYXNQYXRoICYmIHBhZ2VzLmluY2x1ZGVzKHJlc29sdmVkSHJlZikpIHtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBhc1BhdGhcbn1cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiaW50ZXJmYWNlIEdyb3VwIHtcbiAgcG9zOiBudW1iZXJcbiAgcmVwZWF0OiBib29sZWFuXG4gIG9wdGlvbmFsOiBib29sZWFuXG59XG5cbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3B0aW9uYWwgPSBwYXJhbS5zdGFydHNXaXRoKCdbJykgJiYgcGFyYW0uZW5kc1dpdGgoJ10nKVxuICBpZiAob3B0aW9uYWwpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDEsIC0xKVxuICB9XG4gIGNvbnN0IHJlcGVhdCA9IHBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpXG4gIGlmIChyZXBlYXQpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDMpXG4gIH1cbiAgcmV0dXJuIHsga2V5OiBwYXJhbSwgcmVwZWF0LCBvcHRpb25hbCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgcm91dGVLZXlzPzogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9XG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9XG59IHtcbiAgY29uc3Qgc2VnbWVudHMgPSAobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuICAgIC5zbGljZSgxKVxuICAgIC5zcGxpdCgnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgZ3JvdXBzW2tleV0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQsIG9wdGlvbmFsIH1cbiAgICAgICAgcmV0dXJuIHJlcGVhdCA/IChvcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICB9XG4gICAgfSlcbiAgICAuam9pbignJylcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbGV0IHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgIGxldCByb3V0ZUtleUNoYXJMZW5ndGggPSAxXG5cbiAgICAvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG4gICAgY29uc3QgZ2V0U2FmZVJvdXRlS2V5ID0gKCkgPT4ge1xuICAgICAgbGV0IHJvdXRlS2V5ID0gJydcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZUtleUNoYXJMZW5ndGg7IGkrKykge1xuICAgICAgICByb3V0ZUtleSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpXG4gICAgICAgIHJvdXRlS2V5Q2hhckNvZGUrK1xuXG4gICAgICAgIGlmIChyb3V0ZUtleUNoYXJDb2RlID4gMTIyKSB7XG4gICAgICAgICAgcm91dGVLZXlDaGFyTGVuZ3RoKytcbiAgICAgICAgICByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdXRlS2V5XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVLZXlzOiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuXG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgICAvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4gICAgICAgICAgLy8gdGhlIG5hbWVkIHJlZ2V4XG4gICAgICAgICAgbGV0IGNsZWFuZWRLZXkgPSBrZXkucmVwbGFjZSgvXFxXL2csICcnKVxuICAgICAgICAgIGxldCBpbnZhbGlkS2V5ID0gZmFsc2VcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuICAgICAgICAgIC8vIHNhZmUga2V5XG4gICAgICAgICAgaWYgKGNsZWFuZWRLZXkubGVuZ3RoID09PSAwIHx8IGNsZWFuZWRLZXkubGVuZ3RoID4gMzApIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwgMSkpKSkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW52YWxpZEtleSkge1xuICAgICAgICAgICAgY2xlYW5lZEtleSA9IGdldFNhZmVSb3V0ZUtleSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVLZXlzW2NsZWFuZWRLZXldID0ga2V5XG4gICAgICAgICAgcmV0dXJuIHJlcGVhdFxuICAgICAgICAgICAgPyBvcHRpb25hbFxuICAgICAgICAgICAgICA/IGAoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gXG4gICAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgXG4gICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgICBncm91cHMsXG4gICAgICByb3V0ZUtleXMsXG4gICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICBncm91cHMsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGZvcm1hdFVybCB9IGZyb20gJy4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwnXG5pbXBvcnQgeyBNYW5pZmVzdEl0ZW0gfSBmcm9tICcuLi9zZXJ2ZXIvbG9hZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJy4uLy4uL2xpYi9sb2FkLWVudi1jb25maWcnXG5pbXBvcnQgeyBCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vc2VydmVyL2dldC1wYWdlLWZpbGVzJ1xuXG4vKipcbiAqIFR5cGVzIHVzZWQgYnkgYm90aCBuZXh0IGFuZCBuZXh0LXNlcnZlclxuICovXG5cbmV4cG9ydCB0eXBlIE5leHRDb21wb25lbnRUeXBlPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPiA9IENvbXBvbmVudFR5cGU8UD4gJiB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBpbml0aWFsIHBhZ2UgbG9hZCBkYXRhIHBvcHVsYXRpb24uIERhdGEgcmV0dXJuZWQgZnJvbSBgZ2V0SW5pdGlhbFByb3BzYCBpcyBzZXJpYWxpemVkIHdoZW4gc2VydmVyIHJlbmRlcmVkLlxuICAgKiBNYWtlIHN1cmUgdG8gcmV0dXJuIHBsYWluIGBPYmplY3RgIHdpdGhvdXQgdXNpbmcgYERhdGVgLCBgTWFwYCwgYFNldGAuXG4gICAqIEBwYXJhbSBjdHggQ29udGV4dCBvZiBgcGFnZWBcbiAgICovXG4gIGdldEluaXRpYWxQcm9wcz8oY29udGV4dDogQyk6IElQIHwgUHJvbWlzZTxJUD5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHNcbj4gJiB7XG4gIHJlbmRlckRvY3VtZW50KFxuICAgIERvY3VtZW50OiBEb2N1bWVudFR5cGUsXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHNcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIEFwcFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlXG4+XG5cbmV4cG9ydCB0eXBlIEFwcFRyZWVUeXBlID0gQ29tcG9uZW50VHlwZTxcbiAgQXBwSW5pdGlhbFByb3BzICYgeyBbbmFtZTogc3RyaW5nXTogYW55IH1cbj5cblxuLyoqXG4gKiBXZWIgdml0YWxzIHByb3ZpZGVkIHRvIF9hcHAucmVwb3J0V2ViVml0YWxzIGJ5IENvcmUgV2ViIFZpdGFscyBwbHVnaW4gZGV2ZWxvcGVkIGJ5IEdvb2dsZSBDaHJvbWUgdGVhbS5cbiAqIGh0dHBzOi8vbmV4dGpzLm9yZy9ibG9nL25leHQtOS00I2ludGVncmF0ZWQtd2ViLXZpdGFscy1yZXBvcnRpbmdcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dFdlYlZpdGFsc01ldHJpYyA9IHtcbiAgaWQ6IHN0cmluZ1xuICBsYWJlbDogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBzdGFydFRpbWU6IG51bWJlclxuICB2YWx1ZTogbnVtYmVyXG59XG5cbmV4cG9ydCB0eXBlIEVuaGFuY2VyPEM+ID0gKENvbXBvbmVudDogQykgPT4gQ1xuXG5leHBvcnQgdHlwZSBDb21wb25lbnRzRW5oYW5jZXIgPVxuICB8IHtcbiAgICAgIGVuaGFuY2VBcHA/OiBFbmhhbmNlcjxBcHBUeXBlPlxuICAgICAgZW5oYW5jZUNvbXBvbmVudD86IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuICAgIH1cbiAgfCBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZVJlc3VsdCA9IHtcbiAgaHRtbDogc3RyaW5nXG4gIGhlYWQ/OiBBcnJheTxKU1guRWxlbWVudCB8IG51bGw+XG59XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2UgPSAoXG4gIG9wdGlvbnM/OiBDb21wb25lbnRzRW5oYW5jZXJcbikgPT4gUmVuZGVyUGFnZVJlc3VsdCB8IFByb21pc2U8UmVuZGVyUGFnZVJlc3VsdD5cblxuZXhwb3J0IHR5cGUgQmFzZUNvbnRleHQgPSB7XG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIFtrOiBzdHJpbmddOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgTkVYVF9EQVRBID0ge1xuICBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PlxuICBwYWdlOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGJ1aWxkSWQ6IHN0cmluZ1xuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBydW50aW1lQ29uZmlnPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxuICBuZXh0RXhwb3J0PzogYm9vbGVhblxuICBhdXRvRXhwb3J0PzogYm9vbGVhblxuICBpc0ZhbGxiYWNrPzogYm9vbGVhblxuICBkeW5hbWljSWRzPzogc3RyaW5nW11cbiAgZXJyPzogRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfVxuICBnc3A/OiBib29sZWFuXG4gIGdzc3A/OiBib29sZWFuXG4gIGN1c3RvbVNlcnZlcj86IGJvb2xlYW5cbiAgZ2lwPzogYm9vbGVhblxuICBhcHBHaXA/OiBib29sZWFuXG59XG5cbi8qKlxuICogYE5leHRgIGNvbnRleHRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBkb2NDb21wb25lbnRzUmVuZGVyZWQ6IHtcbiAgICBIdG1sPzogYm9vbGVhblxuICAgIE1haW4/OiBib29sZWFuXG4gICAgSGVhZD86IGJvb2xlYW5cbiAgICBOZXh0U2NyaXB0PzogYm9vbGVhblxuICB9XG4gIGJ1aWxkTWFuaWZlc3Q6IEJ1aWxkTWFuaWZlc3RcbiAgYW1wUGF0aDogc3RyaW5nXG4gIGluQW1wTW9kZTogYm9vbGVhblxuICBoeWJyaWRBbXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBkeW5hbWljSW1wb3J0czogTWFuaWZlc3RJdGVtW11cbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgY2Fub25pY2FsQmFzZTogc3RyaW5nXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxuICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZzogc3RyaW5nXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG5cbiAgcHJldmlldz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIFByZXZpZXcgZGF0YSBzZXQgb24gdGhlIHJlcXVlc3QsIGlmIGFueVxuICAgKiAqL1xuICBwcmV2aWV3RGF0YT86IGFueVxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHN0YXR1czogbnVtYmVyLCB1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmw6IFVybE9iamVjdCk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXRVcmwodXJsKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVQYXRoU2VwPW5vcm1hbGl6ZVBhdGhTZXA7ZXhwb3J0cy5kZW5vcm1hbGl6ZVBhZ2VQYXRoPWRlbm9ybWFsaXplUGFnZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplUGF0aFNlcChwYXRoKXtyZXR1cm4gcGF0aC5yZXBsYWNlKC9cXFxcL2csJy8nKTt9ZnVuY3Rpb24gZGVub3JtYWxpemVQYWdlUGF0aChwYWdlKXtwYWdlPW5vcm1hbGl6ZVBhdGhTZXAocGFnZSk7aWYocGFnZS5zdGFydHNXaXRoKCcvaW5kZXgvJykpe3BhZ2U9cGFnZS5zbGljZSg2KTt9ZWxzZSBpZihwYWdlPT09Jy9pbmRleCcpe3BhZ2U9Jy8nO31yZXR1cm4gcGFnZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL1N1Y2Nlc3MtYmE2NTVjYzZmNjVhNGY0Y2Y3NTA2ZjFiYzEwOTMwOGYucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBTXdBQUFBckNBWUFBQUEwWTJmSUFBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUFOOVNVUkJWSGdCN1oyTGRkb3dGSWF2ZXpJQUc5UWJsRTVRZHdOR1lJT1NDV0FEMkFBMllBVElCSkFKVENhQVRxRHE0bCtOWXN3alJBWnMvZDg1aXJHaytJRjFkUitTVENLRVJJWXhwcE1reWM3Ynord213Njdtei94eVFxTERDc1hVcHBWTlc5Mld5a2JtSTEwaEpBYTBzZHMwaE5idzgrZElFNXQ2Si82L1UzVThJYVNOcUtCQVM0d2tBSjcyeVlTUU5sTFdFbDg5VmtnQkpLVDF3UGRaQ0NIa1BGWllVaUdFRUVMcVJkVk5TQ2VKa0NZQzU3NXpvaXgxT3hxYnptbW5rVmhCS0ZwbFlIcWt2STlJMlhjM01KTXpiRVppUlNOZ2lJUjFqNVR2eDJMOGpGUUlpWlJ6N1I5VzJINDZ6WlArU1pKa0k0UkVRSG5pcFhKQiszKzE2ZTNjZ1lmMGJVaWIwRGxrbUh5WnlaVjhPMUgyaXUzZUdhTGdrS2FDU0xDTzFNOXRXa3N4aGIrV0UzVzh5V2U1RU5Jd0lDeGJwSUhjQXB6ME5pY2pKREFJQzZmeVNaeG1NbHdmUThoNTRJcVlZTzRJZ2dKaitqZmszc0I5R0dvSVdBSUE3WEowTVBPYUErb0Z6cHgvdzFWcDVGN1l0dmNIUG9veWtRQ1k5NFZvcVlRRWtqZ0xlYkdFWEFvR0ZRMThqVXdDWXVxY1l3bUpUSVdRRzRLcFhabTBCWTFRQ0NFQmFIMjB5ck1EODJ0RGU0U2dIUzFxOFNrT3o1WGZkU0p5Nldaemp1ZVFTNEc1NWRyT0ZvUG90ZmtWWG1Tc0wvZkdDdzVrUXNnRndDcTVhUU0yVFZoTVNTRWlqV2lvandEVXJqUFhwdlJ6NGdJbSt4Z21GNFhtRXZDbHViRWNaU3lrMVpoaXF2M0M4MDhtN0N3L0NmeWNnVG54N2x2U0R2Q2NWM1U3OHRFQ3RUMWtMOVFzVERHRktoTnlXenoxYmRBekRkZ3pQU1lRa243SjVPS3p1alV3MmR5RDRJSzJCd1VCSEgvc2hPdEpIaEZFM0tad0tObWoxUXc2c0xRaXYwY3pyQUZBKzJ3OTAyM0JCeGNPNTQvQW4zUmFaQ1NrMmVDaFR1RHI5Q3JLcVgydUFKckRtVm9MK0pHcFJFUWlFV0tLbDdLbFVyeEI1TVdtWlpJa1M0a2NkQ1NaVGI5MDMzNG56eFhsNm8rcythT3BFWUdlMG1rZ1I2ZWlYalRPcW1kaS9ZOUVDamtnU2cxVFJnWEQ5cGpyVXA0SzBGYUtkMWk1ZDFtOTJIcU5XbFVLazBrRlg3Yy84TGxuNytPdFZHOGs3L2RLRFhJRUNzd1JJRERxLzJnRDA0YW0renZia0g2WDZtbTVUdVhSaHZiWHBvMFVEVzR0TllMcjA1UWk2ZWRsaGVEUGNSK0tFNGpudXErUGtFb1FZRmlWb25QVGlubzltRDA1SE9hOTAxeFJyKytWbjZvM000ZjBqMXhmMXpEUUVZUW5JVjhDd1lLZmJ2OUUxRWg3OXlVK3AxN2VKV3dxOGlZNDNnWnBWMlZHTVpnUmxuOHJrajE4YzM0WHFRQUFBQUJKUlU1RXJrSmdnZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFNd0FBQUFyQ0FZQUFBQTBZMmZJQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQU52U1VSQlZIZ0I3WjNyZGRwQUVJV0huUHlQUzFoWEVKZWdkT0JVRUZKQm5BcWdneWdWUUFlNEE5d0JUZ1hnQ3NBVmJHYXNLN1BlQ0N5Q0hraTYzemw3SktRQkNXbG41N0c3MGtoSXBYanZIVlozbzlGb0YrMUxkZkZKeXhXSzhiVkFiaG4vcnNwOEtUaldXQmNiZk55b3pFWklyWHdVY2paYWNXZTZTTFM0WUxPdDd5TFJ6OEgyblp4M1RGTzRXYlRObE9hNlFDNlJUS0VlaFp3RkZlWUlXdGx1Skt0c1Z0RnQzV241cmhYdlBoSjkxdktnNVVuMnl2QWMvMTZSbFNpaWpKeFpKVDIvYTlrcnFUc2dhdWU5c0JXVnQ0VXB6WU4rLzZlUWt4a0plWFdqWXBjR0x0UVB5ZHdlcTJpbUVHblhYQi85SDRsa0xxQXBqeW4vay82SHUwakc5bjNUOGtmTEk2MFJlY1VxaDVZN0xRc3RXNStSRnNoZHdhWHBQUllQQmRmQ1kvMU9DTkdLY0l0S3NiYjRBNVhsUmtqZW1OajFtTU15eGZzVFhxdWVZUzRXTE1oU3k2cGcvMkFzUjlYWTlZd2FtMXNoM1FVMzBnYzNOUlZTR1dpTXhwRTd5OGJuMGpsMGsweEJZRjJja05vcGNzOENwWEpDMmdVKzlDOEdwWmRMRUNONnVNVmpXcUdHZ2FKc2d3eE82aGw4WGl5d01tbmdJaytGTkFjVVpvRWxXNnNPZ1h2bUNyYnpQcDVMcmhoQ2VrK1FhVXVFbEFkcDNrbmtjamtodlFYM2ZCNjRiTFljQzNrZkJJWjVnSmdJR1JSSUNsai96a3pJK3lCQWRFSUdEV09hZ01EdFlueENTaFBFT1U0YW9sWEZMWWhQbG14SlNCbFFkNlpCbkZPNzRpQVR1NUsyd0Frd1BpSC9EVnoyWEhGcWpYTjgxdW02YnExUjk5bm8xMFFJT1JNb1R1MFZ1UkZsZ2ZrY0N5RU40N3MwYnEwZ1J1RndGZElZOEdEeXZydUpWRXlsMWlidzl4aWprTmFBcXpZUE9rQXJtYU9EK0hzcFZRRlRTRVVoRndHc3pib3FMd2VKQnMvNlRVZ0pFRzY4akl6UHQzMDQ0Y3NUei80VDBrSGdzbzNsUlBDQXhkK3lmMWhpcVlNbFFaekNDVnVrYy9oc3dtRWUzemlwQTVpajhFQ0pFTkpSRUcvbkRYL2wyYlJjWWRZSWZPaUtrYzRUWk5QV1FnZ3B4NmtHQU5tMzVadnNtK2Z3ZWpKZ2ppa1JMSk4vU1J3RXNRcG5PWkpCRWlqRTVJaE1sbDZHdVhtVGF5WmtTTUJvcEZBYWQwREc0dmxaL3NFSklRUG5XQ2FZT2tJSUlZUVEwanFlMDFZSUtRZUdoM0hVTXVrblZZOU04ZG5ETjd3UTBrZlFLNyt0UW5HQ0lmNTh5Q0RwSnhob21VYmJiSGJ3Q3JNb3AwZjZXLzU1TzkweGVVSjZDZUtRcGQrL2NqQ0o5b2ZjSC9vZHZuYWNEQkt6SXBnZ2xuK2VCcnZ0dGV1RlN2TVhhZFlvaG9iM3I1d0FBQUFBU1VWT1JLNUNZSUk9XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvYmFubmVyQmctMWIwOTM1MjRiYWE2ZjhiZDFmOWUyOTVmMjZkNmVjZTgucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRUFBQUFCQUNBWUFBQUNxYVhIZUFBQUFCSE5DU1ZRSUNBZ0lmQWhraUFBQUFBbHdTRmx6QUFBQjJBQUFBZGdCK2x5bWNnQUFBQmwwUlZoMFUyOW1kSGRoY21VQWQzZDNMbWx1YTNOallYQmxMbTl5WjV2dVBCb0FBQW9tU1VSQlZIaWM3WnA5VkZSbEhzYy85dzR6RE84TThpS0Vpb0FTdnBXbHBaWm5zZFhldHkxeFc2MmtzaGN6cTNOS3pUeGxlVXFQMWxyYXlUSUx5M1MzMkZxdFRNczZpcHE2WnI0QkNva0lBaUlJQXpQTU1EQURkK2JlL1dPUWpzd01qakNDdTh2bm5EbG43dlAyKy8yKzl6NzM5enpQRFBUU1N5Kzk5TktMdHd3QlNnR0RtMDh1RU5Kam5zRjdIdnpTQTdOOFpTUURVRlFxbGFMUmFCU05ScU9vMVdwRkVBUUZVSUJVWHhucUJNWEFCWDZwVktyemZtVjU2dVRYR1V1cHFhbU1HREVDQUwxZXo1RWpSNmlycSt2TVVENG5QVDBkUVJCb2JHeWtzcktTZ3djUGR0aitZZ0xvZ0Q4REF3Ri9ZQmhBZFhVMU9UazVBRFExTmRIVTFIUysvUXRBVHlrUkFaQ2Jtd3VBSkVsWUxKYnpkZGNBeTFxL0c0RUR3SzZMRFhnN3pqbWsvSTkrdGdCYXdVUHdDUWhDdmdDQjk5MC9uWkdqYmtRVXhJc0pkc1hqVU1EY0pQRnRWaVpGditVQkxQTWt3RkxncGFlZWU1RjVyeXpwUGcrN0FiT2tvcVphejEwM3hHTzNTOVdlYm1zcXdPMTNUKzVHMTdvSGxhQVFFUmxOVkV3Y1FJd25BZFFBQVFHQjNlWll0eU00SC81T3BVRmZzZVRWdVd6OFlyMUxlZnlBQlA3MS9SNDBHdi9MN2tPUENyQjd4elpNSmlQcWdGQm9mUnZaYlkzazV4M2xYT1ZaK2lja1VsNWF3cG55MDEyeUV4TVRSM0tLK3pWYWp3cHduanRmMzRQS3ozbTM5NjUrbEpxVCt3SFExNXpqajJOU2tXVzV5elkyYnR2SHRkZmQ0RkorUlFoUXNIVWxnc3JwaWtWZjFsYmVKekthSjUrWlMzbHBTWmZHajRycFMwcnFNTGQxUFNwQWFKZ09nS0pkbjE1UUxxcFVCSWVFSUlyaVpVL0RQaFhBNFhDUWwzT0lzdE9uVUdTWndWY1BZK2lJa1I3YkwxLzFLUVhIYzF6SzQrTDdFOUVueXBldWVjUm5BaHpZdDV1WG5uL1M1WEVkZGVOTnJGaTlucmo0L2k1OUVoS1RTVWhNOXBVTG5hTExBdFFiNjhqYXNKWVZ5eFpodDB2RXhzWVNIQnlNSkVubzlYb09IZGpIZzVNbjhkMk9nd1NIaEY3UWQvSENPV3pLMm9EU2JzeCtWMm9hL09yemRheGR2WUthNnFxMk1sTzlFUUJSRkJrN2Rpd0RCdzRFbkx2RWhvWUc4dkx5S0M4dDRiUE05NW45L0lJTHh2czUrOGVMcHNHeTA4VlVuQ2x0NnlNS0lpTkhqMEdyRGVoTXZDNTRMY0N5UmZQNStJTjNBRkNyMVFpdEs2bVFrQkFpSXlOSlRVMGxQRHk4cmIxV3E4VmlzWkNVbElSZXIrZm43QjlkQkRoUFIybHc0dGdoTG1sdzR1MzNzR2I5eGtzSTB6TmVDWENpNEJoclAxeEpRRUFBYVdscDZIUzZpL1lSUmVjcVc2UFJBR0JwTUh0czIxRWFuUG5zUE1wT0Z3TlFXbEpFd2ZGY29tSml2SEhiSzd3UzRKZTl1NUJsbVVHREJua1ZQRGdQSk1CNVlnUXcyRTBlN2lnTmhvU0dJb29pYzE5ZURFREJzUnltcDk4S1FOYjZUQjU2ZEJaWER4bnVsUzhkNFpVQWpZM09reFd0VnV2Vm9JcWlZREFZcUtxcW9xaW9DRUVVbVQ3RDlWenk3ZmZYa1gvc3FFdjVWZkVEMEVWRXRsMFhITXNoWThwdDFOY2JDUXNNd05Sa3BhYTZxdnNFY0lmQllDQjd4dzVhV3UrMEp3UkI0S1hYM3VTNjBXTmQ2Z1lNVEdMQXdLUU8reGNjenlWanltMFlqUWJtM25jSEplZHEyTFQvTURwZG44NjZmZ0dkRXNCc05sTmVYazZMSktFTERVRVhFdXlzc051eDJKcXBNWm5wRXhuTjJQRVR5SGpzYWE2L1lWeW5uQ3N0T1VWRytxMFlqUWJtUHpLTlplbTNNV0dCODJndlBLS0hCSkFrQ1p2TjFuYjkzTFRKTEpyNUNFZ3RVSFdXTC9ZYzRJRzMxM0QvZzQrMnpkL08wR2hwNEttSDB6RWFEUURVbWN6SWRwbGFjd01BRVQwbGdDOTJadDd3Nm92UFVsUllRT0x3bTlCWEZKSDU5VlkwTml1MURSYlVhZzFCd2I3NURlYUsyQTI2bzZLeWlyakU0VXlkL3pFV1l6VnJGLzZWRDM3SUJpQTZKdFpuZG53bmdPSmMwTFpJZGdEVXJmbS9NNWlhN0tUUDMwQ0wzWTRnaURoVVFkdzhheDI3MzgvQVpxNGxYQmZoRTVmQlN3RjByZlBOWnJPaHRBWjYvajBRR2hUa2JOU2FEZkxLS2dCbktydFV0bS9iVEVOVE0vUkxRM0xJQ0lLSTNhRlFxbThtTUhJQVliRXAyTXkxakJ4MTR5V1A3UW12QkJoelV4cWlTc1dKRXlkb2JtN0dicmRUVmxhR0tBaE1Hbk85czFHakJiMjVnWFU3OXFMMlV6Tit3aVN2blREVTZWazQ3eG0yYmRsRWlDNmFlV3NQdDlXVjF6VWpPV1R5dDY2Z3VuQWZTWU5TV0xEb3JVdUxzZ004blFxYkJFRWdKTlM1ZTB0TUhzeWNCYThqU1JLRmhZVVVGeGNqeXpLTFp6L0c4T1JFYUxSdzltd2xkNyt4RW9PbGtXa1BQMEZNMzdpTEdpODVkWkxGQytmd2gxR0QyYlpsRXhGOUJ6RDF4WS9hNnF2cVd6QmJIWlFmMnN6SjdFekN3aVBJL01kbVFrTERmQkU3NFBrSmVHSE5obzBqWW1LdkdncGd0VGFSa2pxTWUvL3lFRjkvdVFHQVFLMC9Sd3VMZU8zZER6bFpVc3AzQjNOb3REV2oxbWdJaitqRG12Zis1aktvM1c2bnJyYUcycHBxamg0K1FHVkZPUUFhYlNEai92UUV0MHliZzBicm5GSW1xNTFxazRTeFBJK2pYeTVFcGZKajFkb3Y2SitRNkxQZ29XMFQ2a3B4amJUUDRYQ01XL1hPRXRaOXRBcXp5ZWhUdzZLb0lpNTVCQ21qSmpINjFnY0pEUDM5eGRaaVZ6aFpaY1ZpMHJQem5TbFk2OC94MnRKM3lYanM2UzdiYmJTTE5OdEY3aGsza0txS1VzL3ZBSnZOS3M2Y1BwbTl1N2VqOWc5ZzVDMzMwemRoQ0dxTmQvc0JkNGlpaXNDd1BnU0ZSaEFWUHdodFVLaExHMFdCMC9wbW1sdHMvTEoyTnRiNmM2UlB6ZkJKOE83d0tNQWJyOHpwdDNmM2R1S1NodlBBZ2s4SWplaDdXUnhvenhsRE05Wm1PMGYvdVJCRFdTNmp4OXpNa3VXckw1czlUMU1nVVJURlU5cWdNT0daZDNjUUhONDlCNVQ2Qm9tS1dpdDUzeXlsZU0vZmlZdnZ6emMvN2FkUFpMUkwyNnF6WjlqeTdWZklEc2RGeHcwTDA1RStOUU8xUnVQMUZKZ3R5N0l3OXU3SHV5VjRCZENiSkFyeURwTzMrUzFxaXc4U0VSbkZwMWxiM1FZUDhNSEtaWHorMlVkdTY5elJOKzRxMGliZTRWTHVUZ0FOTU1OUHJlSDZTUTk0YmFBek9HUUhwNDRmSXZlWDdaVG5abU91T2duQTBCRWpXWldaMWVFYjMycTFBakJvd2d5Q294SmM2bTBPbVVLekhhWHdKNVR5WDVHa0ZyZmp1Qk5nUEJDZWZPMGZDQTZQZEZQZE5jeEdQY2NQN3VUazRXd3E4dmZTMG1ScXF4c3k3Qm9lbXZFMFU2Wm1vUEx6YnBVZU8zUUNrVW1qWGNvYkpKbWlhaHV5b1FTbC9OZTJja1VSa0dVWmk3a2V3T3JPeWwwQUthTW1YbEpnbm5ESURrNy9sc052aDdJcHlkbUpvVHdmUlhIdUtFTkN3MGk3ODE1dVRwdkkrTFJKUHMveDdWRUFrN21SVDk1YlFvTlRnTjN1WG9MN2dUSFByLzQzdXBoK25USmtycThqNzllZG5EcVN6ZG44dlRRMytuWU40UXNFUWJRb2lqeXEvUk1nQUVQOUE0SUpqNDYvNUVFUGZMK08zSjgzY2JZb3QrMHV0M0lPYVBMUXJidVJnTU9LSXI4TWxMWVhJQjRJaWU2ZjBuYnVmeWxrWnkzSGFqRVJGcHRNN0xDSjFGZWU0RnorTG9ESGdhMWRkUHl5MEY2QUNJQ2dzTTRkTnoyKzVHc0VVYVJPak1QYUlwT3o4WTJ1K25mWmFTOUFHSUEyMEhXSjZnMVIvUVlCVUZkbDdaSlQzVW43N2JBV3dLOGJmcFM4VXZqdi8vZGpGK2tWb0tjZDZHbis3d1VRZ0MrQjgrdGVOUkRzcDlhZzl2ZitEd2grYW4vdW1mVm0yL0w1cTh3M0tkeTFBWHVMRmRuZUFtREJ1UUNSZ2VYOC90ZjFIa2NBZmdDNmVzNHNBVE9CYjFxdmw3WmV1Mk1sOEhvWDdmWFNTeSs5OU5LTEQvZ1BhRmdROWp4OFNEb0FBQUFBU1VWT1JLNUNZSUk9XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFFQUFBQUJBQ0FZQUFBQ3FhWEhlQUFBQUJITkNTVlFJQ0FnSWZBaGtpQUFBQUFsd1NGbHpBQUFCdXdBQUFic0JPdXpqNGdBQUFCbDBSVmgwVTI5bWRIZGhjbVVBZDNkM0xtbHVhM05qWVhCbExtOXlaNXZ1UEJvQUFBNktTVVJCVkhpYzdadDVmRlJWc3NlL2RidlRuYVM3czRjUVFzaEdRcEFRQ0FRVGRrUjJJOHBqazZnNHloT040SVlMeXFJZkYwUVdkVlJ3bVZIZTZITkdIZWNwYm9NRDhzUlIxSEhCMFhGRUlmTGNRQkV4TE5uVDNUVi8zRTVJT3QxSkI4TGtmV2I4ZlQ3M2s3N24xRDJucW02ZHFycDFUa1JWK1hlRzBkVU1kRFYrVmtCWE05RFYrRmtCWGMxQVY2UERDaENSTTBSa3A0aGtuUXlHL3RrNEhnc1lDZVFDUXpxWmx5NUJVQVdJU0x5SW5DY2lkcit1ZXQvZnVnRDA1NHBJV0djemVWS2hxZ0V2NEVwQWdaY0JXN1AyTkdBWkVObXNyVHV3MDBjL0l0aVkveCt2dGhRUUQzenNFK3BDd0FaY0Nqd092QWJjQ293QUxNRERQcnBuQUV0WEM5VXBDdkFwSWNIM3RrY0JIL21FOUw5K0J4UUNpd0JyVnd2VXFRcndLU0dpMGJ4TGlsTDB6L2RPMEQwdlR0WC92bU9vNXVmRU5DcmhFVUJPS3FPUWVqTEdGZC9nUVNFaVM0QVZadzlMNVEvTFIyRWtlTTNGQUJ5b3FPTzBpN2F5Yzg5aFZVaFUxWU1kY2tBaFFFUU00QS9BTkdBVE1GVlYzWjAxZnFzb0lDTGpST1FHRWJsY1JHSXd3eDQzbjVkdnJuYmJNZHJFV0R0dlBEYU9aKzhkOVpLcUhoU1JEQkc1VGtRV2kwai9UdUx4ZG1BYUlnQ1RnWHVDRWZybWZrTkVwb1E2dURWQTI1T1lheC9Na05kYkJQcWtSaUcyMXRZU0cyWGpyREVwTWI3YnBjQTgzKzh4UG9hUEd5SXlBN2pSRnVYUTRiOWNKTzhzdmw5ckRoeGFLQ0lmcStxdi9XZ1hBYXZORy81SFJJYXA2b2Z0elJFb0R5Z0J5b0M1d0crQnoxWGgwNjhPbzNYU2lyaSt3VXRsaldlMzczWTVNQjh6V2l3TVdkSUE4Rm5RWTJJWUZOKzVVT0x6ZXpQc3JxdkVzRmtWV0M4aUk1dlJuZ21zc1ViWXRXL3BaRkRDZ2VkRUpMN2RlVUx3QWRjQWE4OG9TbUhqeldNd0VoU3htOC9zUDFqTDVMSnRmUDdsa2UrcWE5MDlUa0JlL3puamdQZUF6QUdMU3NrdW5kalU5L1VmMytMZG14NEdPSUNaamNZZ3NsM0FNZnpXTW5vVTU3TmozVk9VUDc4TllDc3dVVlU5d2VZS0pSVytEL2pvNWIvc1pjS05XM25sMWUvNGJQY1IvbXZqSGtiOTRsWCsrbmtGTlhXZVRTRUlOVUJFdG9qSXR5THlHeEZ4QmFHekFFOEJtYjJtREdzaFBFQ3ZLY1BJT1g4eVFDTHdvb2k4aktvajc4S3o2RkdjRDBCQjJTd1MrMmNEbkE2c2FwT3Z0aXhBUkZJd1Rma2x6UFUxTEFEWkk4Qmp3RmhndGFyV0JoZ24yMnFSSFc2UE9wczF2d21NVmxXdkgrMXR3TExZM0hUR2JGaUd4ZFk2czFhdmx6Y1dydUdIZHo4Rm9OZndRUlRmT0Evc2xpYWF1a05IMlZ5MlFtdCtQQ1JBcWFvK0dVakd0cjRGa29GdHdBMUFObVkwS0FVZUJGNEJiZ0ZHWTY3NTgzejNHNE44QzZ4emU5VHA4REhvakxTQ21VVmU0amRuSG5DRE5USmNoNjY5SXFEd0FHSVlGQzZmaHpYQy9FekpIRnVFMURSQXM1ZHBqM0V4L0pZeU1jS3Npc2lqd2FKU1cwdGdGdEFiTXdZL29hcGVueGJ2QWY0SzNLV3FmMWJUaEpiNTJpWUNSWDVDelFBbTlFbU80T3pDT0FDV1h0d1BpeUdJc0ZKRXV2bm9CUGdWWU0xYk1FTWl1N2Z0dnlLVEU4aGJNQk9BRHgvYmlMbzlTSFZEQzVxNG5EUUt5bVlLcWhIQUJsOU9FYklDTmdCbkFuUDhFbys1bUZZeHZyRkJWWC9FVEpkTGdMZWJDZTgwRExrWFlFMXBPamE3bVVRTTZCUEx3ams1cUJKTlkrZ3lyV0ZvWEw5TXNtYU9hMVA0Um1UTkdrZGMveXdPZi8wZHUxNTVBK285NFBhMnBDa1pSVUplYnpEVDljdENWb0NxSGxYVmx3SmtYWTI1UTFnQStwZjlQTzdOWHEvMm1IRnFQQ055bzdIYXdwczZibG5RbitTRUNJQzVJaklUa1ZWaU1SaTg5RUxFYUIxdUEwRU1vWEQ1UEF5cmhVOSt2NG1haXNOSWRiMGZrVkI0MWJrWVZvc2kzT0ZiMnUwcm9BMXNCVDRBM21tVE9aRitoc2dpVjRTRjIyYWxZWStLUll4ajAwVTV3bGg3YlFHQUFFK2pHaFhmTjVQcUh5cFFiNGg3RmFwVWYzK1ErQUhadUd2cTJQbmNWdkFvZUZwYVFWUmFNcm5uVEJJVUYzNlpaSWNWb0txdnFtcWhxbjdWRHVsNnI2cXg1S3llZEkrTHhPNktiVVV3WjNJYXB3MUpBbE1KL1BoSk9kdXZ1cHQzRnQ4ZkVpL3YzL29vYjE1eEZ3YysrQXdBVDczUEIvZ3BzS0w4RzJvT0htcThuUzBpVGRFb1VDcDh3aENSODREUi9WTWptVGNtaVlqWVJIeTVmQ3VzVzFMSXdKbWJhRERYN2hkQWxydTJQaUN0UHhvcXF3Rkk2Sk5CejZKOGVrOFliczVqUFJZT1BYVU52THBnSmVwdHNvbzlOS3RtZFhwVldFU2lMWWJjSXdKcnpzMGczT25DR2g0WmxMNXZaaFNMNXVZMjNtWUI1TTZlRU5KY21kUEhBbEJUY1lUc1NTT3gyTUpRbDgxblR5WU1tOVZjL3liS2dMNnEyaFF1VGtaWi9IYVBWeE5LaHlWeWFsWVU0VEVKN1Q2d2JINC9VcnViU3VvNW9vQ2tmdG10ekRnUWtvcnpTQ3JPbytxSGczeXg1UzJ6MGU4NUVTRm54cmhHbFl4UzFSYm0xYWtLRUpFQ0VTNkxkVmk1ZVhvdjdORnhHSmIyVjVrandzb3ZGdzhHNE5DZWIvRTJ1RnZGOUdESXYvSWNSSVJQbjkyTXU3WU9xV2xkS3VnN2V5TDJhS2NDNTRqSXdPWjluYVlBWHlMemdDckc4bW1wZEl1TnhPNktEdm41YVdON01ubEVNcFg3RHZEWjAzOUNHanhJZmRCdm1DWkVaNmVTVmpLQzJzT1ZmUDdTTmpNQytEMW5qUXluMzl3U3dWd2NLNXYzZGFZRnpBT0tCMlU0T1g5a044SmpFMm14R0VQQWZUY1VFbTZ6c1BQSlY2ajYva2RmZXR2K2MvM0twbU94aCtsbkw3NUczZEVxcExhMTlXU2RNUXBYenlTQVNTSXlwckc5VXhRZ0l2RVdROVlZQW10TDA3RTdYVmp0RVIwZUp5dlZ5ZUtMK3VLcGIrREQ5VStEVndNSzQ0K0lickZrbnp0SjNEVjFmUHJzRmpNWDhMTUNzUmprLytlMHh0czdHMzkwbGdXczlIZzE1c0xSU1F6TWNCRVIzYjdqQzRiRkY1MUNWcXFUZmUvOGpYMXZmNHpVdWsyQmdrQTlIdjV2NCt0NDYweEZsVy9lYnZxUWh0YkxKeTQzZytqMEhnQkZJbElDblpBSGlFaVJ3TVh4cmpDV25wMUtlSFE4WXJHMC8yQVFoTnN0M0x0NE1DVUxYK2ZEOVUrVE5LZ3ZScldCdXZ3M3FFejg3ZjVuMlBYRXNYS0UxVzdEQ0dzdDFsL3UzTUJYVzk5dDN0UU5UdEFDZk1XTEJ4VzRkVVl2NG1JaXNUbERkM3pCTUdWa0Q2YU43VW5WL29OOCtycy9JbTV2VUlkbytKS2VoRDRaRkMwbzVZeDdsd0NndHBZdlllLzJqeHJONkIxZ0xmQXNuUGdTS0FNS2htYTdtRDAwd2N6NE9nbjNYRCtZeUhBTHUzNi9tYVBmN2cvcUVIdE5NV3MwUi9idUozVllBVGFYQTNYYUlheWxBdUp5MHhzOThrT3FlcDJxSG9JVFVJQ0lKRmtNV1drMWhEV2xHZGdjVVZpYWZlMmRLSG9sUjdMc2tqdzhiZzg3MWoxbE9zU2ExZzR4S2pPRnBLSDlxYStzNXV2dE8zek10UjR2WjNyVEozWlo4L1lUc1lBMUhxODY1NS9lblZOU25ZVEh0RnVBN1RDdW1adExia1lVK3ovWXlUZXZmNERVdVZ0OTZRSGsrT3FHNVp1M0F3UmNMajJLOG5DbEpvSHBBQWMxdGgrWEFrUmtGSEIrOXhnYmk4OU1JVHdtSGpHTzMvRUZRNWpWWU4yU1FnQStldWdaM0RWMUdBRXl4S1RpUEtJeVUvaXAvR3NxOW54amhrRC81U0pDem4rYzNualhWQmc1bmhNaVZ1QUJnQld6ZWhFZDVjRG1pT3JvTUNGajdLbEp6Sm1jUnZXUGgvajc0eStCMjR2VStiMWhFYkxubUI5UTVadmZNbXVEQWNKZyt2aGliRkVPRUNuMTdYb2Rsd1ZjQmZRYjNUZWFzd3ZqTzlYeEJjUGFhd3R3T2NMWS9keFdEbjN4RGQ3RDFYanE2dkhVTnpSZEthY1B3UmJsNEt2dE82ZzlYSW0zcXJaRnY2ZStBVVRJbURRY1g0M3dBdWhnSGlBaUtSWkRiclVZc0hwT09qWm5OQlpiNFBqY21VaE9pT0NXeS9xemFNME9ObCs2b2wzNjV5OWVIc3F3NmREeFJPZ2VqMWNqcnBqVWcrd1VCK0hSbmUvNGd1SHkwaHgrOC93ZVB0NTFDT0F3OEgyejduQWdMY0p1SmQ1bFo5OVAxWGk5cXNDdUlNT1ZZMWFnUTE4Q0lqSUJtSmthYitlYUtTbEV4Q1MwcVBHZGJGZ01ZZjNTUWtSQWhGcmdWRlhOVmRWYzRCeUFJZGtKL0hyaGNLSWp3d0RxRy9zRFhDV3F1aE5DVklDSTJFUllEN0J5ZGhvdWw0T3d5SUE3V3ljVnd3Y21jc0hVVEZSSkFtN3JqREZEZllYWHE5SjdZbjRNa3d2aS9pbU9MeGhXWFQyUTJDZ2JJaXowTDI0Y0Q5cjFBU0tTYmpGa2VaaFZXSGxPT25abkRFYVlMU0R0SysvdjQ1Rk41VlJVQmk1cTd0NTd4RGZtOFRPY0dHdG54UlVEdU96Mjl3emdRUkVKdEY4Wk1rSnhndmQ1dkdxN2ZuSUtHVWtPN05HdHk5c0FYLzFReGRTYnR1RnRaN3NkV216aEhSZm1UODlpdzNOZjhQN2ZmeXJHTE1SOEF2RDFnVW9lM2JLTHFyclFUOUMwcVFEZndZTXpNN3VGYy9uRVpNSmpFZ2l3dlFiQWxoM2Y0VlhsdWwvMHBXeDJkb3UrRjdidDVlclZINXl3NEkwd0RPR0JwVU1vUG04enFxeFMxV3NCdnR4ZnlaZjdLeHZKN0NLeVdsV3ZiMnVzb0FvUWtRZ1J1VjlWV1RVbkhZZlRTVmlrTXhnNUhsL1JJamJhUm5vUFIxUDdDOXYyY3QxZEh3SkNwQ09LNnFyRG9jclpKZ3I3eFRGL2VoWVBQVk1laDdtUFNaOGhpUlJOVHFleW9vNy9mV3EzSGpwUWM1Mkk5QUhlQXZZQkcxWDFhUE54Mm5LQ1MxVTE3Y3hCY1l6Tml6a3V4L2ZDdHIzTXZPWk4zQjVsd09EeGRFL082UEFZYldIRkZRTklqRFVUc2I1RjhjeGYyWjloSldsTXZDQ1hhMzUxbXNSMWoxUmdLbVlKN0hFUjJTWWlMY3BWQVJVZ0lqbUdJWXNqN1FaM3pFN0Q3b3JGc0hic0NMQy84TDJ6Q3dnTDY5eGp4TEZSTmxaZGJRYUNveFgxcUNwMU5WVUFkRXQxc3VUeDhiTGc3aEZjZEZzUkE4ZWtvS3FEZ0xkRjVHRVJHUS9CTFdDZDE2dlc2MHQ2MGpQUmdUMHFzT01MaHViQ0R4dzhnZDdaQmJpY0p5ZHZ1R0JxSnNNSEp2THRycU5zZjM0djdvWTZxbzlVVUY5WFE3akRTNytoQ1JSTjZzWDhPNGVTUDdJSG1HY2U1Z09iUldSMG9IT0NNNEh4ZlpJanVIUmNkelBqNjBEYzJ2TFc5OGVFTDV4QVZ2YkFreWE4eVMrc1gxcUl4UkEyYmRqRGtaL3E4WG85MU5kVVVWZFRSVTNWRWFxUEhrSU01WkxWdzFqMjIvRmNjTk9ReHFMSlRVYkx3Y1JwaU85QXc3bnBSRHFkV0NNY0FhWU5qdGZlMjQvYm94UVVUaVNyOThrVnZoSDVPVEZjWHBwRGJiV2JGeDdjM2FyZjYvVlFXM1VVYTVoQmFwOVlUaW51anRWcUtKQW9tRWRnR3V0RlZzQWhBcTV3UzRkeS9mb0dMelcrU295SVlMWGFXbG1PMjkyQTErdkJFV0hGYWptQmJDZ0FQRjZsc3RxTS8rRU9LMkxBYWJQU09IMU9HZ0Ribi8rV1B6MzJKVjZ2VWxmalZxOUhCVmdrd0ViTVU1My9LbEJNQS9jQ2Q2dnE3UUFpY2lWd0UrYUIzM0xnSWVDSmRnOUsvcXZqNS84YTYyb0d1aG8vSzZDckdlaHEvTnNyNEIvdm1DMlFoT2s2WndBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUVBQUFBQkFDQVlBQUFDcWFYSGVBQUFBQkhOQ1NWUUlDQWdJZkFoa2lBQUFBQWx3U0ZsekFBQUJ1d0FBQWJzQk91emo0Z0FBQUJsMFJWaDBVMjltZEhkaGNtVUFkM2QzTG1sdWEzTmpZWEJsTG05eVo1dnVQQm9BQUEreFNVUkJWSGljdlp0NWNGekZuY2MvL2Q2YmV6UWp5VHBIc2l6ZldCWTJCaHZIWE9Fb0NJWndCQUlrRlJKQ2FtUHVKY0JXZ0dKM3MyU1RJa21SOElleEExUTJDK3pDQWdFV3MyQmp2TWE3WUxNK01HQmpiSWg4Vzdka0hhTzU1NzNYKzhkSXNrYnpucVFaQ2I1Vkt0WHIxLzNyMysvNyt0Zjk2MS8zQ0NrbGs4WEN1Zk1mTjZWNXVXbVk5U2JTNTlRY2FJcUtwcWlvaW1MVkpBM3NBN0VMelBkMzdmL3NQNlNVNXFRVktRQmlNZ1EwenArL1ROZU45YnBobEFGb2lvclA1YkV6ZWl4OFlDcm1yUjk5OXRtaGdwVXBFQVVUMERCbi9yVnBJLzI2bEZJQU9EVUhmcGRuTXJyRUZNa2wyL2Z2MlQ0WklmbWlJQUl1bWpuVDNTS1VrNlpwZWdFVUlRaDYvQWdoSnFWTWJkRFFYL2grejE2UElwdEJmQTdtT3U3cTJBbFQ0S2MyS0lpQWh0bnpOcWFNOUdWRHozNjNGNmVxVFlsQ1B6d3p4ajBySWlPTDJvQjFJTlpSWHZvZU4reExUVWxIZ3lpSWdIbXpac2RNMC9RQUNBUWx2cUlwVTZpNnlHRGRqMDdhdlE0anhSb2NpZCt5cXFkL0t2ckxlN1pxbk41WU9tUThnS3JtTFdKTXRBMm85TVp0WlFZUThtRjAxeUgrR0xxZjFYTmRrKzB2ZisxZDZldEhQbXFLT2xrZGNuQ2djMXgzbW9hVXYwZU5mTW5hNmgveHFDajRLeFRndUxJUzRJWWxaZWJpYXEvaWRrRFJwTDlEQm50YTQ3ejBTWkpJYXNMMnpBQ2VvN3pxSmxaUCt6NzNuQXlQZkZuMnA3VUxGRVhVZC83a2pnMTJBdkptcnFaSWxnSXNydllxcGhTVWVMMTRYZjRwK1ZzNjNaZXZPa080QXRXNW5kV1ZzNGYxZk9hWk1sVlYza0dJOVpYLyt0VGo0dEZITFQ5MmZpTmdiZlZGVnk5MDNmN0UxdHpsVGdMaGhFSEFwVExlYWlqbFlGMlB5a1FYenFUcTRmWDZCOUF3T1UxdnNxcXl3QlRhbnFNZnIzdm1jUEh5ZzZhTG02UkozYUJ1RDVUWFZlbkFRNk1iVFp5QXRhR2ZBbXMxTmJ1TktXSGpGMkcyTkVXSXAwMmNtdUFiTTN4Y3RUQ0lVOHMyVHpjbGIzOGVadHVSQ0VsZDRuWW9uRC9MeDhvRkFWUmxiQ3BlbWZrd205d1hVRnZpb1MxZzYzTSs0TDR0ZTdlMEdLWlpNMUpOQlA5ajFXQmlMckNtNmhxUVQyTkIyTFlqVWRidkR4TlBtMVFISE9pRzVQMURFZFlmQ09lSTJmVGxBTzgxRFpEU0phR0FnMlRhWk5PWEEyeHBpdVRVSFkyMDRnQkFBS2FVR0tiMTFxSDU4SWRzNys2cnlTNFZmOS81NDl2ZXNhby8vZ2g0c3VwMEZQSHZnMzBENE5MRThHTkRwWXVrSHVETVdnOVZBUWM5TVlPZHg2STBWdWVHeFV0cU1tVm4xM21aNXRQb2p1anNPaEZqVVNoVExnUjRuV092S3ZGRW1GYy9lUWVmSWxoNTNnOVFSdmhiZjg4eFhqN2FrbTJXNExYT0g5LzJtSjI4c1FPaDFkWGxxT3dFNmdIaWFZVjNtMG80MnV1aHZzeEhOQVUxeFI2Y21rSWttbUwvbDkzTW1CNmtzbnpzeWF6clpJekR4L3BZTUhjYWdSRkxpRWRMRVZOTEtkYTZtZU0vaUZNNUZmVDllZDVqYkJRTmZIeGlPLzNTQ2NDVlFaTWxaMlZXNVdRcXpvdmJYcWRGZW9mYnpEWlBwdTlOYjUzM3ZkczNITFhUeGQ0Ri90TG9ST1cxSWVNQjlyYjdPZHpqeFpTNS9ycDFSek1mN21yaHpZMU5qQmRkdnZYdVFmNXZWd3RidGg3UGVTY1I5T3JsdENWcWN0NmxVdjNEeGdPODNhOXc0dUFIU0NsNWIrZHJXY1lIU1BCaTZrWEg5OHhQbitjdmpjNGNZWU93SjZEejVDK0I4MGNXTlhWN2JTcERYMzhDZ0dnMFRTcWQ4VThwSVo0eWN1cjJoNU9aTnVHRXJieXVWRVZPV1pHdmpqTjgyVjc3OHZGMi9uZkhLK3hPblJwMUNwSzdxalZteWg2QTh3ZHRzWVExQWF0cmF4SGNPN3BZTisxbjZpSi9aaWg3M0JvT0xTTzJwVGZLbmhNOVJKUDZxTHJPclA5V01HMVVXekwvWXVhcTBlSG5CQnBiWTlseXZsUGhwcTVpMXFrQ3diMnNycTIxa21mZGkyTDhFbkNQTGk1eTZSYVZNemh2ZVMxbkxhcml5c3Ztb0F3dWFXbkR6UG8vaEpXWHpPYk1SVlZjZU80TVcza3VKV2xacmlrYTN6NXJKY1ZZdnovSEUyZEI0eFdqaTkyRE51VWdsNEExMVFzUjNHSlZ1YkVxYWxVTVFERGc0dndWMDZtdHp0MFpub3drU2VtblNBaFYrYmxneFhSS2kwZHhMRTdOSFZXdVZ0dStmUDVwM0hSYUl5clpjODBzSmNyNXk3NXIzVWh3QzJ1cUY0NHV6aVZBOEpobE9UQy9MTVozRm5ZeHR5eUdXOHY0OXVpdk94SmVWMmJ0N2hwSTBCR08yOVliZ2tQUm1lYnNaa0hSUGlwZDdXUFdMUTgxY24yVmYvZzVTSXFyejdvTWh6YkdmSmV4TFF2Wk04cVRvYVVvWERWV3gvVWxDZXBMRXV6cmNuSXlGaUNwbS9oc0FyUEtnQnUzUXlGdFNFcTg5djQraEJKbkh5Ri94N2oxaGpDdjRUTHVyajVPVC9zQmF1ZGNnZE14N3E3c0twNE1MZVh1MW8rR0NySUpVT1dOVERBL1V1VWJZQytCcktFOUJGUEs0UUFsNkhIYXZoc05qOE4rVlRpdjh3MzJ6MWlNSjlwTFRicG51THdHb0tJTXd2dXk2amMwdjJFdFNKVTNBallFU0s2eDFXQVV5cndSVkVXUTFFMmtaSGdEbEVnYjdEM1JTOERqWUdhWkg1Y2pFOW1sZEpPajNSRjZZMGthYTByd3ViSzdkaWhwZ3M0QjIvN205ZTNnOGI2Y3lTMS9aR3o4K2REanFVaHdiV2dCeVAzNXlOcmJHV0pmUnhGQmo0TlNYK1pMRzZia1FHc2ZrY0dseiszSTdQamk2Y3ljNFhWcU5JU0NhS015U1RNREo2anlkUlZxVnA0UURkelplZ0JHamdCaFhvdEZoRGNXRmxXMDBoeWVTMTg4amMrbDRkSVVWRVd3c0xhRXRyNFlYUU1KRWlrRFNZYUlNcitMbWhJZnhZc3V4Rlc3QU5GM0hKRU1vMkJTN09zaUpTYVgvRlhDUjlBNmRvNWZVWmpYQWdkZzVBaFlVNzBEd2RuNWRocEp1WGk3YVNhcUVJU0tQVG01QUZOS2tBekhCZ0JsZi9zbVFzQTAzeFNuMDB5ZDRoZFBRNlR0bDJzQUpEdTVxMjA1REMxM3o4NTBJMWhXU0o5K1o1SnZ6VDZPU3pObzZZdm5USXFLRUZuR1ovcG53b21RdktCb3RLMTRtclRmUHNBQ1FMQ01aMmU2WWNnRkl2RnEyNmw1QWloMng3aHEzbC81cUhVNkIzc2t4VjRIUVkraklGbUdLZW5vQ2xzZWhRZ0JGZE9LMERUN0xVeTA2a0k4MVpkUzB2U25zYm9SUk9MVndKSEJPVUFOd2VUUEpwZUdUaEJ3QmRuZFdvNXVKUEU2RkJSRndlMVFjQ2dHdW1rUVM0M3Q1Mzk0ZWd1NzlweXdmZDh3cjVKL3V2L3lTZXVhc1htSUFOVU1UWFQ5dDBOek5NQXoreGR4N0tUR0dmNUQ5TVpVaXIwdXdCajhnOHpBRitSdWRFOWh4Vm4xcEhYVGNrc3RoR0Q1a3JySktUb0UxUXpCa0F0SUdTckVLOE82bDIyOUMvbWc1M1QrYzNlYWNGOFBwNWRGd0Q5K1d6dWNkL1lzemp0NzF2Z1ZKd3NwUnhDQUNFMjBYVi9hejlaQm8vZUVaMkhJakQ4cVdpWlQyeFBQaURUTXIrdzhjNG9nc2taQXNWMHVleUR0NU9GdFovTkJTd1hCWURGYWNSMnFJMmVuak1mcnB3OW9pYnBSRllGdW1PaUdtUlB3cUdvMk1aOGRhT1BGZFIralc0VFU0MEZUQmQrOWNqRm5MWnFlZDF1a0xJWWhBb1N3M0lGRWRSZU56NjdFMEhXS2dzVjBSeFNJTkRPdE1vVGJtNTBkOG93NElEMFVyYURlMDBFOHJWT2tadThGWG1pYXhaSVJ6ODF0ZlJ3KzFsM3dBZmp4MXI3Q0NCaTBlWEFFMEdZMUJmeDh4OFhvNlRRT3B3Y3g0dFpITk55WFE0RGI2eWRZV2s1L1R4ZXZObFh5d3dVNlZlSWtwaWtwY2p2eHVVelduNmhsZDB0MjhMUHk0Z1ZjZE81Y2pERzIxWFpRVlFXM3E4QmplVWtiRE04QnN0VnFFanpVNHdaU0tHcTIwdW0wOVJGOTFmUTVSQWY2MGRNcC91MUFEUjZ0aXNYbFVkSlNZWGU3OWN6NDRVZEgrZlBMT3dweUFWVVYzSHpkVWk0Nlp3NEFxZDRXVG01NG1zVEFBWHlxQTZlYUhxTzFiSVZUTG1DZmZzbEhJVTFqMW9JbHRCMXJZcUMvaDdpdXNyMHRrRlhINHd2WXRKNGNtcDY3ajhON1A2SEk3Y0QwT2ZtWVJxcDhYZFFIbXEwYkROcWNJVURSV2pIdDgzMmpvUXI3cjZVNW5FeWZzNUJJZncreFNEL3hhQVFwVFZ3ZUgvNUFDVVhGMDdMcW43TzBubk9XMWsrNGJ5dElRK2ZvdmsrUlFMSFhnU0NUWG0rUGxoUHlkVmlQQkVVYlFVQkhjd2ZsVlVrZ0s2WGlkeVN3eW81NTFQRnZxZmlEcGZpRHBYa2JVd2g2OTcySGJramNEalVyb3BjSStsTkZsSHQ2UmpkSjB0SGNBVVBXL1VMcXdPYlJ0V2I3cmZmbkRqSHgwZkoxUUpxNVp3K25ZTG04Yng2ME9lc1E3UTJRVTVCeXlROVNTbzZlNkVFdmNCV29yeTFrbEluaGZOa3BBdExHbXppVXB5amsyc3drOE5yNnZienlYNThXM1A2YXl4cTVmR1plVFV6U3hwdERENmNJdUxlamc3WFZPNEFWQld0VEFKWXRuazU3NXdDNk1kWXd0b2FxS2l3L2N3WmFNak1uV1cyZ2xOd0pld2YzZGd3SGZxT2ppRGY0bWdtb0tDdGkyUm5UTVl6OFEwRkZFVlJYQlBCNVYrQnhxc1JUQnJvcDBRWVRNS293S0hIbDNLYkxTaGRuRTZBcEw1RTIveG5CK0VuOEtjSzZqZnQ0ZmNQZWd0dGZlVWtEdDl5d2pJYVZOL1BGeGhmb0hraFM2bmNTZEtXbzliZGxqd0JKQ29meTBzajIyUVNzYWpuT0g2dldJc1hQQ3RZb1QxeHkvbHlFSXREMS9GMUFVeFV1K0VibVhsVEZOMitsNHB1MzBuTDBJSUY5YTZqcmVpbTNnU0xYc3FvbDYwdytONUJXMVYram16OEJ2cHFRYmJST1FzR3BxWXh6UmNnU3FxcmszRXgzbGMra3FOZ1B1U3Q0R0ZYOTllakNYQUpXdFhTek52UTdrTCt5NnpobEtPUjdOVkRCcE1weGtvVE1icm5wL1M4bjVRSURrU1MzM0RDUmZLNzRIYXRhdWtlWFdtK2xOUEVFdXJ3YnFMSjZIVTQ1cVRXYTZWY3RqOXh6Y0Z0b0F6TFNpYytwRXZRNFNMejhHWjZMZndZekc3ajZzb1hVVmdjTGpnT1dMQndyd1RhTWRqVHhoTlVMYXdKV3RjUllXLzBnOEp5ZHhBUEhFOHd1K1pUeGtyOTEvaWpwdm5hY21qSjhRQnJ0YUVGcy9qMzh6Yi9RMVJQbDg3KzJGMGFBb2hDcUNPQzNPNTA5aFFkWjFSS3plbUcvbWI2ejdmbldkMjU2RUdpd2VpMkJnNzNqSi84dXJUeUNOTUU3YXQ4ZTZXekhpUGF4ODVOamJONXFlZkZ4UXZCNW5jeXVMN092SUZuRFhXM1AyNzBlTTV2d1lVdmxkb2haRWpCUmFJUExrRlY0YWVwSnJydGlNWXNXaEFvYUFacXFNR2NzNDJFejNlMWpybWhqRW1DSVNSN1dUUUNxSXBnL08vZEMxT1FobWhDT0c0WTJQWGI0V3VQK3J3dFNhQWxNY1RWM0hPc2RyKzZZQkNqSUF3RFM1bHJxaEpRWjNJNWFEcVhDci9sYlFzUzdRY0pBM2RWcnVMdmxpNG0wR2RNRmp1eGUvVVRkR1hmZW4wN0ZRdzZuQjgyUmY0VDhVZGMwemkzdEo1RTJzczRMUFQ0WFliVVVvdmxIZ0hhUWxDQ0JST2xpbXp4WUxzWWtZUERIakRXemx6OHd6MGduSzFSTjdaeFZxWlhVbGlxdk4wVnJKM1NZY29BWlhPNXZJeEtKazBnYnVCMHFxcVlTRHM1QmFkazN2b0JCZU5Va0xzVSt5V2s0ZzUycHdQd3ZVWlNrUkZrL1Via0YvMjd3cVlkKyt2S0d6bVUzeG95SnhZUm5GQjNoVFA5QlVtcUFkVzJMR1RCeUQxZkd3aDB6M3VLNnFxMVdyOUlJL29FNzJuNmJsOEJCVE9xWG84ODk5SU1MdHZXZi91cVJXSFY1d1VJbUNBc0NKUEFLaHZrSTkzUVUvSXZUU1JFd2hGL2Q5M2YzdENaTEgyMksxcFJNV3BnTlJoR3dHU0VlNUk3VzNaT1ZPeVVFRE9HRlIyNis1NU9CV1kvczdaOVZLYWY0RHNqdGRXOFoxNGUyL2pkUytRTjN0cnc3VlhLbmxJQWgvT1BkRHkzVW5PbjdlbExCYngyT1ZkWEVEVmRCYkhpVWxLejN0cmVWT0NPYkZOMzR6UzlXUHo2aHBTMGZmQ1VFak1SYmoxN3Q3WXhQdS8xNG91TFNtT0dxaVp2TzBxVHBLSXJvSHMrQTd0VUFpclNZN3RmaWNZK2FDcnRFcXRlbkpacnIzRjJieXQwOVQzLzdGMjlhYm1LbUN2OFBJUCtxbDJWWHY3RUFBQUFBU1VWT1JLNUNZSUk9XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFFQUFBQUJBQ0FZQUFBQ3FhWEhlQUFBQUJITkNTVlFJQ0FnSWZBaGtpQUFBQUFsd1NGbHpBQUFCWWdBQUFXSUJYeWZRVXdBQUFCbDBSVmgwVTI5bWRIZGhjbVVBZDNkM0xtbHVhM05qWVhCbExtOXlaNXZ1UEJvQUFBOE9TVVJCVkhpY3padDNlSlJWOXNjLzcvUkpIZElna05CTGtCSklDQmlEdEFBaUtvc1VYWEJSVkpZaW9xNmk2Q0xyN2dxNnVLQzRvaUNLS0d2QlJyR0FzaUFnQ2xJMFVoSmlDQ1JBQWlra0VDYVpUQ2FadWI4L2JqSnBrMlNHVE9Mdit6ejNtZmU5OTV4Nzd6bnZiZWZjTS9EN1FnR21BYWNBTS9EODc5dWQxa013OEJEd0t5QUFvZGZJWDJEYzc5bXhsa0lmNEI1Z0JYQUVzRk1wZUd3azRvdFppR1czT1JYd1RHdDJUT01CclFLTUJHNEh1aUE3V3dHVUE5cEtHcjhhenkrSnY3TzcyMnZNT1Z2QUd6VXJpalRCNkY0d1BRWUdSc2k4OU12T1lyWG5ZbHcvM0ZWQUwyQURFTzl1eFUrTllraUJGcDkzNzBHOWJDZDBDNEcrN1NBMlVqNDNBdUZ1Rzk2QU93cm9weWpzRVlMZ3FMYnd3STFTRUgzbGR6S1hnVjJBVVN2ekRGcncxVUdFQ1grQUc5ckNCek5hVUlKbW9pa0ZHQlhZTEFUQk0rTGcyVnZBWHdlNlZoMmtMWXVtRkRCSFFQZWhYV0hKT0xrSU9GcWpWNjBJVlJQbDl3RXNIQ1dGQjdDM3ZBWmFkUTFvVEFFQlFIUjRBUFFKcjg2ME9VQzBiQmYvM3lnZ0hGQzZCTmZKRlZCUzRmMk9GTnVjanhidjE5NHdHbE5BS2JnZTh1VjJLUFd5RXM1V253Tnl2RnR6NDJoSUFlSEFUUUFwT2E2VllLMEFzdzNLdlRBbDdBN1lsZVo4N1FUMGExNk43a09wODI0RVhnRm1VZU5FdG5vSzNOSzdpWXJxMXVRQk5oK0hwN2JXeS80Qm1BbWN1ZjZhbTBiTmJxdUI3Y0JZb3hiRzlRYUhnRzBub0gwZ2ZEa2JBZ3plNzBCR0FVeDlSeDZvL2hnRE9nMThmMFpPQ1FYeUJNUUI1NzNmc2tUTkk4Mzl3T01kMjhER0dmS0xEK3NPYVhsdzhoSWN5SUQ0em1BeWVxL3hQYWRoM2lkd3BSUWVqSWY1d3lDdUUweUtoc3Nsa0pxTEx4QUpmT3E5Vm11ajVnallBNHhZUFJVR2Q2ck9MTEhCWHpiRHIxbnlCRGk4TzBTMWxVZmU2MFdlR1E2ZGc5UmMrWDdQSUZnd0hGUTFlbU9yZ0R2V3dSVUw1VUFJY08zNlcyd1lOUldRcFZMb3NPOVIwTmM1SDViYllma3UrT0tFOXpzUTN3VmVuZXk2N0lrdHNGK3VBQU9BWTk1dnZmWlJXS2RWMXhjZVFLdUdBUjJrQWlZa3huSDdtS0VJNWZvTmdqYUIvaFNYbFBMQUUvL0NwNUdScEt2dVN3dXNQaEp1K3dOc2R2bmJMNm9UTTZlT1JhdjNiVmJEU1NkUEE5S1MvRDNSbEMzZ1JFcmw4YVJieDNaZWFiaEx4M0JVS29YVTNGYXhMeHFFV3dwSXo0ZHZVc0RIcUdkTVFyUlhHallGK0RGMjJHQnlyc0hHdzE2cDhyclE2QlN3MkdEWGI3RDZlemtGbnAwemlZMWI5ckwzOENrdTVWM0JXbVlqSk1oRWZHd2ZYbjd1NFFicitlVExQYnozNlE1eThnc3BzVmpwSE5HT3ZsRmRlUGorU2V3OW1NVGFIMjFjTG9HWlF5RFV6K3N5dW8zZkZCRCtCcG44OUU0bnBRREV3bGwvRURNbmo2eVZWNVVDL0gxRjZabGRRbVI5N3pLTkhSN25rcTlkYUpENGV1TkxJc0RQeDVsbjBGYjNRYU4yMG5adkthRnJqb0MvQ0ZobHR0SVZVSWNHQlJBWkVVRHEyV3hDZ3dMNDI0SzcrUEhuVlB4OWpVeWRNSnFZL24wQnVKUlhnQ25BRDROZTEyQWpXOWUvd1Buc1hJSk1BZmo3K1hBK081ZHQzLzZBVHFkbC9LZ2JtWHJIU05aLzlEV2RJOEtvc051NW1GT0lReG9ZdWNCYlFIcHJLR0I3WmNyVjY3UmhKN2F2d3Nlb0p6UnVwcE1nSVRhS2hOZ29WUG9BRml4WnhZV0xlYnp4d3VPRUJBVTIyb2pSb0tkTHgzRG1QcjNTeWZQa3ZHbjE2RjU5OWdGR3h2ZGo0dHgvOGQzQkV3QzMwRUw3ZnhYcUxvSmFJQ3dzT0JBZm83NUJwbDAvL01LR2o3ZXphLzlSWGw3M3NWc043ZHgzeE1uenlsdWZORXJiSlNLczZyR3pXNVUzQTNVVlVBNWN2WlJYU0ptdHZFR202TjVkQ1FrS1JLMVdNZkttR0xjYWlyNmhldzJlZ1kzU1ptVGxWVDBXdUZWNU0rQnFGOWhWWVhkTVdiZnBmeXk0ZDd4THBnN3RRc2c0K0FuRmxsTGFoUWE1MVZCayt6QzNlSkpQWDJEZjRXUVVLQkp3MUszS213RlhDbGdPVEZ6NitxZnFUaDFDRzdUeS9YeU4rUGw2WmhvMnhYUDZYQTVQTGQrSVhaNk1WZ0JXanhxNERqUWs0SHpndGFweUg2T2VuSi9lY1JZYWZOdWdOWGh2dzc1ejFtSzJmck8vWnRZWHdCVGtsR3hSTkhRU2ZCMFlUK1VLYkNrdEl6dTMwRm5vY05SM0NNNSs2dC8wSFhVZkZSVjJaOTR6TDc1Sjk0UnBqYTRuQUdsbkwxUTk1Z0dMZ0VtMGd2RFErRkg0RzZRWnVnWmcrOTZmblFVVjVXWDFpSDg3YzU3a3RBd08vM29LQUd1WmpYYy8yVUhHaFV2WUdsRkFhdnA1VXRJeVFlNzFIWUNYa0xmSHJRSjNiSUgzQU5aKytDMFZkdGt2UjRVTmU0V3RGdEcwaWFNQm1ESjdDVTh1ZllNUlV4NGhKNytRMnhMajhmZnphYkR5MWU5K1h2WDRQdksydVZYaGpsR2ZEUXd0dkZyYzFXalFFVCt3RnlDblFVMlRPS1pmVHk0WEZySDNZQklIanA0a095ZWZ1T2dvUGw3ekQzeDlYSnZ6djV4SVk4NmlGWUF3QTlPcGRNVzNKdHoxNVhaV0tVcXlvaWcrbjczK0pJazM5UWRBNzJOQ1ovU3ZSWmlhZnA2a2sybEVoSWVSRU5jWGxjcjFJTHRtTGlGK3dqeFNUbWVDakJaWmM3MUNOQWVlT0xQbkFHdURUZjU4c2U2djlPdlZFUlR3OFE5RnJmWGNZWFBYM09mNDlLczlJRmY4aWJoM0pSWU1MQUdHQW0xY2xKY2d6dzVMZ2JQdTlNTnRod2p3SnJDODRLcVo4UTgrejArL3BvR0FVdk5sN09XZWI5ZENPQTRDTzRBLzRaN3dBY0JoNEZFZ0Z1anFJdlZEZXJlVEt0K2JoQ2NLQUJtL3M2ckliR0hDN0JkWTk5Rk9IQTRIRnZObEtteE5UOS9qcDg2dzRlTWREb2ZkOGVoblgrKzdDYm5WbXQxc2V4NVNxTStSdTBXUWl4UUdyRVFxYTRtSHNubUVoeFZGc1FKaXpOQm84ZXVYTDR0cnh6NFFwYW5iaE9QQ3ZucitnSkxUTzhXVDg2WUpqVm90a0NFR0hhK2p6VTNJa1hKakUzUnRLdW5jc2lLYmNhRkZIMkFqRUtQVGFuandydEhNblRhV2JwMDdZUEJ0ZzFwcm9NaGN3b2FQdDdQODlRL0l5UzlFVVJTekVPSUpwSTN2Q2tHQXFZR3lONEhSd0IxQVNpUDlNZ0RKUUVZbHZTdGNBeTQzVU9ZMndvRzdnVXdxdlRtS29vakIwVDNFek1ranhiamhNY0tnMTlYMEFObVFwN3dZNnRzZ0NyQWVPVHBjZW85YUlPMEE5SjZPZ0J1QTJjQ1l5bWNuUnNYMzQreUZYREtyVFZrQy9Id1llL01BUHR0eG9HNDl4WlVkK0FpNUM4UUQrd01NRU9JTFBuclFlcm82ZVlCTDF5QkgzalBOZHZkZUlBRzVBSTRIRkpWS1JZOXUzZWpWc3djWHNySklPbmFjYVhjTTVhN3hDYVNmeStIc2hSemFCcHVJNmhhQnRjekdaenNPRUJ3VXhDMmpFem1kbnM2eGs4bCtOcHR0S2pBVmVRUk9Ba2pvQ3ZjTmhrQmo3V3N5YjJOM0dyeTBDNERPVFNuQUIya2V6d2NVblZiTEEvZk80UFp4NHdnSmxqYjkydlh2a0hUc09BQ0tvdENqY3pnOU9sZkgxRmpMNUpHNWpjbkVJM1BuQUZCcXRYTGcwQ0grczJZdHVYbjUzYWwwZWxZSjNacDNKWTBwb0Erd0dlZ0pvRmFyZVdYNWk4UU9HT0NTdUtFZ0NlR2l3R2d3a0RoOE9MRURCdkRnUXcrVGZla1NBT29xQlFpYXR6eDdnSVptV24rVlNyVVA2S25UU1cvdjNaTW5PWVhQT0hlT29tdHlFcGxNMGlHNmFzT1hGSmxyaC9jSUlWaTg4a01BZ3RySWc1dTFySXhUdjZWaHM5a3dCUWJ5ek1MSG5mUlZRUmJsTFcwTDF2Z21ya1pBUDVWS3RkZmhjTFI1WU1ZOW5FaE80Y2d2U1V5NDlWWnk4L0w1KzRzdmtuVHNPQ3FWaWhFM0QyWFNoRHNZTW1nUWg0NGVaZnBqTDdONXpTTDBPbm5qdVhqbGg3eS9iUjlob2FIY08vMlB2THBtTFYvdCtBWnpjVEVoSWNFOHQyZ1JnMklHMGo2OEhSY3Y1WENsVW45bEZmS1N0cVhXZ2J6aTZ1ZTYxcUN2b2lpN2hSQVJDK2IrbWFWLyt5dlBMMTlKUlhrNTBmMzc4c1RpeFp3N2Y0R29uajF4T0J5a3BLYXlmZWYvVUt0VVhET2JPWGN4bjdQbmM1aVFPSmdWYjI5anhkdmJBRENaVEh5NlpTc25rcE1SUWpCNDBDRFNUcWZ6N2U3ZGxKV1Y0WEFJc3JLektiTEt3QXlWQWtWVzJKNE1oekloT1FmQy9NRGZBNU9qcUJTMkhJZkQ1K0JVTG9RSHlCQmVnUFVIWlFBR3NMOHUzOXVBU0J3eFRPUmwvQ2J5TTlPRWo0OVJxRlNLYzU5LzdPSDV3bHBZSUN5WDg4V2JyLzFIOU83VnE5NGVteEFiVlMrdmJWaVlXUEwwMHlJNy9iUVFKY1ZpMDN2dkNWTmdvQUNFU2xHY2RMZjFRV3lhaVJqV3JUWi9wQW14Zlo3NzZjWXV0Zm1qMnNyOEJjTnE1UytyS1h4WDJkRlFjZXJuZ3lJL00wM2taNmFKK2JQL0xBQVIwYUdEMkw1bHN4QWx4YldTbzlnc2RtemRJc1ltSmdxbGhpQlZhVkJNak5qNDlsdkNXbGhRanpmelZJcTRPZUdtZWp4RHV5STZCTXJuZnkvN2h3aHFZeElLVWpIdXBnaVQ1Ris5OGlWaE1CaUVVWXU0dlM5Q3BUU3NBUFdpeHgrejdOejJ1VlA0SzltWlFwUVVpK3owMDhKMjlVbzlBZXFtazBlUGlNa1QveUFBTVRBNldoejRibmVUUEk1aXMxang0Z3NDRUhFZEVTRit0WlVSMGI2OTBHalVBaEJoL3U0bmphcHk1RVIwRUNxVnlsbWZydzR4TnFwYUFjNUZzQ1F2NXo2TDVWb3RuN1d2ajNSMnRBOFB4eDMwNmQyYisyZk00UE90MjdoeGNCenhRNFkweWFNb0NtR2hvUUIwRDRWRlkyQlhLcngvRklyTElPdmlSU2R0bnJ0Mll3MWN5TW9HUUsyQ2FiRncxMEJJeW9LZHFiSzhTZ0dMSmsrYnZ2amRkYStqVnN0MVVhM1dvTlUxZkQzbWZnZXlLQzIxMHJPSGV4ZTgvbnA1VGY1akJweTRDTTgvdTVpVnI2Mm1xS2lJUXd2ZGIvZnVEVElFYjhXeTUxbjh6NlhvbERJZUdWNmZUZ1VvaXFJODhkMzMrLzN0OXVvTldHOW9manljMVdxbC8rQWg5STJMSS9QY09ZOTR3eXF2SFpZc1hjYlZvaUxhQm5qV2RoWC93c1ZMS0Nzcm8yMEQxeGdhb0pjUUlqUzZmeitxRGowQU9sM3o0NUswV2kwZEl5TXBLQ3pFMzkrL2FZWWFlSHdVQlB0Q2dRVjh0RERGOVFHMFFUd3pWa2FlRkZubDlqY3QxaldkaHNyL0FjVVBIdVRNVkJRRmpjYVQvMU81aGxxdDV0aWhuN0RiN2M2cDVSWVVHU215TVBINjIyNGZDRStQYVpwT2hYUXYwU2t5c2pwVHBjYWJoM0dQaEVlRzZMWVdORWhQSzBGQjFVNVdsZHA3eHZpdVBYdTRlcldJS1hkT0JNRGhjSERveUJGS0xOVjJRM0xLcVZvOHRuTFFOSC85ZFFzYXBNbUxwdVpYRXQ3NStoYUxoVnNuM2tsRlJRWEpQeC9saHFnb052ejN2OHg2YUw1citzckxwakk3cU10QjM0eHczRWI3VlgycFpkTlFHWC96L1lHRGpCc2pKNTNkWGk1dDB1YkV3QU5HbzVGN3AwOG5MeitmTHAxa0FITGlpQkhNblRVTGg2TTZPTkJpc2ZEK3BrMGtaVUdGQXpRcXNKUkxSV2hWemU1R1BleXZEc0JQMFFBZktvcnl6dzBiUHpEMDdONk5lKzZlaWxham9hVEVqSytmaDN0UEhTaUt3dm8xdGY0MFN1ZE9uVmp6NnFwNnRHY3lNamg0NkJBcmRzTzhteUhRSUFNb3ZSbEVhUzJIRDMrV2tlL0lLNyt2cW5UN0owVlIzaE5DcUhRNkhlSHQyam9GVUNtZWZRS0x4VUpPYmk0Qi92NkVoRFQrRjlHYUtDb3FvcUJRWHNFclFJaWZIQW5lZ2tOQWZySDhWUlJLaE9CVzZsaURDY2dvc1d1MG5tZTJ0Vk0rOEFHVlhpNkEvd013SG9qODh1SHF4QUFBQUFCSlJVNUVya0pnZ2c9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRUFBQUFCQUNBWUFBQUNxYVhIZUFBQUFCSE5DU1ZRSUNBZ0lmQWhraUFBQUFBbHdTRmx6QUFBQjJBQUFBZGdCK2x5bWNnQUFBQmwwUlZoMFUyOW1kSGRoY21VQWQzZDNMbWx1YTNOallYQmxMbTl5WjV2dVBCb0FBQS92U1VSQlZIaWN6WnQ1WEZSWGxzZS9yL2FGWXBGOVVSQVFGQ0lSSXhHTkdzWHNHajhtbmMxT3ByTjBOTXNrWmliVGsrNUp4a3oyMGVuTzB0bE0ycXdhTzNaMlkyS2lpQ1F1VVRURUNMS0RvckxLSmt0VlVVVlZ2Zm5qVlFFRkJWU1Y2S2QvbjA5OStQRGV2ZmZjODd2bm5udnV1ZmZCUHplaWdQZUFGa0FjaDE4dDhEeWdjUWtRTG9nYS9pRUNLQUFTRkFvWmNkRjZCTDk2SzRMRGhzM3VvTDdaaXNNQndHN2dhc0NtR0xmdWpqK2VBQktXWFpQQU95OHZ4QkNnOUxzaDBkNkx2YnVVdWlZTHR6eFVRM0dGT1FmNExiQlJQbDY5UFE5NEZRak4vWFFwSWNIcWMycElrQ2tRYmQwRTZ1eE1qRkh6eWJmdEFCYmc4M08xZ0ZoZ0NYQUprQVFFajFDdUUyZ0VmZ1YrQWc0Q2pqSGFEdGJwRklTSGFVY3RaRExieU45WFQzT0xtZVRKUVZ4MmFSUnl1WWU1SWxNQk1EbE81WG9TQXVBdkFWY0Evd1VzQkdRKzFMdmQrYmNKK0R2d0NuRGF6ejZ3ZmRjcDd2dkRqN1MyOWZZL201b2N6RWR2WFVGNmFvaGJXUUhKQ3c2RnJ3VEVBZXVCcFFDR0FBT0o4VWxFUmtRU0hCU0NScTN4NkZhdFZpdmRQVjIwdGJkUjMxaEhmV045bE1QaGVCUjQyTm5lR3FETGw0NGNLVzVseGFwYyttd09sbDJUUUhycUJINzRxWjREaDV0Wit0dnQvSkozazFkVHh4Y0M1Z0ZmQWFGQmdjRmtaV1l4T1Q3UnE0cHFsUnBEZ0lHWXFGaW1wMlZnN2pWenJLeVlZMlhGU3B2TnRocTRDYmdOMk90dFo5YStlZ1JybjROMVQyYXpldVYwQU5hSWwzRFBJL2xzK2JLYURadktlT3poR1dPMjQ2MzU1Z0I1UU9qMHRBeCtjLzFOWGl2dkNWcU5scXpNUzdsbCtXMGtKMDRCaUhHMnY5TGJOZzc5Y2dhbFFzYXEzNlgxUHhNRWVQRHVkQUFLZm1uMnFoMXZMQ0FOMkFxb0xwczlqN1RVZEcvN09DYjBPajJMNXVVUUdSN0pUNGYySzBWUmZCdVFBMitOVlhmWjFRbm9kQW8wYXZlRnJOZGlCMEF1OTI1c3h5SkFEV3dDQWk2WmtUV3V5ZzlHV21vNlFZRkI3TWo3SHJ2RC9nWndhcXc2ZjMzaHNtSFBUR1liTDd6eUN3QlhYaDdubGV5UkNGQUQvd0U4QkVSSFIwYVRPVDNUcXdiOVJXeDBIUFBtTEJCKzNKOHZBSnNCMVZoMVhIaDFRekcvSG10bDc4Rkc2aHFNekpnZXh0MHJVcjJxNjRtQWljQTI0R0pCRUpnWU80bDUyZk1SL0l0RGZVSktVZ3J0SFcwVWx4YU5GRThNUTBPVGtUOCtjeENRZk1DTlN4TjVZKzA4RkFyL3BrQUlzQXRJaVkyT1pYNzJBZ3lHUUcvN01pNllOU09MbXRvYTBXUXllc1c0dFUrS3B5NitLSlRQMzd1YTJHaTlUL0tHMHZRU2tESTVQcEZycjFneVRQbVd0aGIySGR4TFFlRkJUR2FUVDRLOGhVS2hZTmFNV1Q2YlczQ2cybWZsd1oyQUpPQk9uVlluTHBoNytUQ1RienJUeExidnRsSldXVXBSeVZHKyt2WUx6bmFlOVZtZ04waEpTa1d2RDhCc3R0SFlQRHJST3EwQ1FRQzl6citnZGpBQnR3TEN0TlIwUWFWMDl6L21Yak83OSt6QzdyRHovSXFsM0xNb0c2UEp5TGM3dHcwandXYXpVZDlZUjQreHg2OE9BUWlDUU1MRUJFUVJkdVNQSGlsSGhHbjU4UFVjMXE3SjlrdldZTnBtQWNSRnh3NHJkS2l3QUtQSnlMMDVjL2pQNjNNUVJSRzFVc0g2bmZ2NCt2dXZtSnQxR1VtVGsrbnU2V1o3N2pkMDkzUWpDQUt4MGJGTVMwMW5VdHdrWklJdld3YUluNWhBU2ZreHZ0OTlpcnR1Rzkyakw3OXVNa292bmQ1UURDWmdBb0JPNXo2UDJ0cmJxRHBlU1dTUWdYVjNMQU9rRVhybHpoc0kxbWxZdHpXUC9IMjcyWDlvSHphYkRZZkR3YUwwS2RRMHQzS3FvWTY2aGpyVWFqV1RZdU9aTkRHZXFJZ29kRnJkbUIyTGpveEdKcE54K0VqTHFPVk1aaHZUNW03aGx1VkovUGwvNXZpb3Zqc0J6a252dm1lU3lRUWlnNE40N2E0Yk1HZ0dOaGVDSVBEMExkZHhaY1pVbnY5aUp3Y3Fhd2t4NkZtNWVBNVAzSGdWQU44ZkxlZWR2QVBrRlZkUWRieVNxdU9WZ0JRQmhrNEl3eEJnUUtmVEUyZ0lKQ284MG8xOG1VeEdnTjVBWTNNbnZSYjdzSWh2b0IvU1g1WFN2OVRHWUFKNkFleDI5MjM2cElnSWpyKzJCb1hNczJPZU56V1I3eDYvMytPN0pabHBMTWxNdzJpeGtsdFV6bzZqNVJ5dU9VVnBYUk9uNms0T1VVUWdMVFdkN0ZsemtNa2tjOVpvTkhSMWQzSzIwMEpVaEdlcjBXb1VIUC81ZHM4NWdFRVFuUVBiWitzZllBZTRFMkFCc050dGJoVm5SZ1dNcUx5MzBLdFZMTS9LWUhsV0JnQm1heC9sOWMwMGRIUnl1dTBzTmMydGJONzdNeVhseHhCRkI1Zk5uZytBUWk2TnFpdStId2xqS1ErQXpRekFqd1hkcmlmSFlRd0xLQzR0b3FYU3dpMXBkNHd0d0Fkb1ZVb3lKOGVST1hrZ1hyOTMwVndXUC9zNjVaVmxYSHpSREFMMEJseXo4dk50eDhtY0h0WmZOaVpLVDBwU0VMSWhBMVBYWUtTeVp2alNMTm82c2ZjMmM2VEV4THEzbTBBYS9mZkJrd1U0QnRndUxpMmkwTktMS041KzNrUGhtSkJBYnM2ZXdSczc5M0s2L2pUVFVnYTJ1Zi85djRlR2xaODNPNXF0bTY1QnAxVmd0NHM4K05nZU5uNVNPYVljUVZMK1lhQVFQRTRCaVFDcjFZclJaQ1E1S3Z5QzdBTmtNb0hVbUFnQXpuWjJESDM5UHFCaklHNUoyMWZRbVA3T1IyV3NYam1kWjE4c2RDbGZCeHdZUVVRZlVDdEtxYmdTMTBNUFUwQWlvT05zT3dBcDBlRitLK1VMQkVGZ2NrU29VL1l3QXA3RE9XZWR1QUxJTGEzbzROdmNrL3pmNjBjUUJEcEZrVVZBdFM5eWgxbkE3cjI3a0FreUhNNFRoQXRGQUVDaWs0Q0dwZ1kyYnZtQXZyNCsxNnVoSm1nSE9INnlpOS8vMncraUtEbjIzK0dqOGpCZ1VvSEE5UUNpdzQ1T0tjTVZXSVVIR1VadG9LTGhETmU4c0o3U3VpYWZCRmMyU3ZXT25XNEV3T0VRMGF2VjZOVlNHSzVUeW5DSS9RNzVtU0hWUllDOUJ4dnA3TElLd0ZyZ2E1ODY0SVNMZ0g4RnBsdzdZeHBOZjN1TzVnM1A4OVROMXdJZ0gyUCs1eDJyWlBleEtuWVdWZmdrT0wra210M0hxdGh4dEJ3QXU5UGkxRW9sYW9XYzVnM1BVL2J5NDB3S0N3SHBGR2Yyb09vbGdpQlpMTkwyZlkxUHdnZkJSVUEyd0JNM1hrV2dWam8zbERrVmw4dEdqN0dueFVhaVU2dElqNHZ5U2ZEVW1BaFVDbmwvUGF0TjhqMmlLUGJMVElvTTQ3NHIrMU5mZzNjN0xhSklGbkFQc0F6bmxQQUhMaCtnQWpCbyt3OU5NV2lsc05kazdSdFdhVEFXcFUraDlaMFhVSGlaaEhUaDhyUmsydDliaTBvaHgrNFE2YlBac1RrY2RKck1SQVlQVEx0QjRiZG1TQlBGenQ4NXdkWHJPb0M5WlRYOUwxSmpJZ0dvYWp3elppTytLdStDU2lGRmVpYUxGWURUYlIwNFJKSGt5QUhIdTJlZ1QyTW1TdjJCeXdMZUZPQ3VSemQrS1M4NjFTREVoMCtneStRTUhRZVI0Z3ZLNnB2WnRPY3c1UTNOQk91MHpKdWF5RzF6WjZKVHUrY2FIQ0lZelJJQkI2dHFBVEJacmF6Ym1rZEJkUzNmRkpZZ1NPdjNOcjg2TWdZR2U3ZzdCSUgxb2tqQTBFSS9QcldhT1NrSmJzL3lqbFd5L1pkU1FnSjAvTXY4V2NTSFQraC85K21CWDduajlVMjQxaWNYa3FQQ0tYbnhUMjZCVmFleEYyT3ZSTURkYjIwbXY2UnFxUGdxcEdUTkVULzBHeE9ENDRDUFJKRmNwRk1nMXlTY0FUenc0amY1ZlBibzNmMEZuL3RpSjg5ODluMy8vMy8rT285dGYxekZnbWxKQUNSRmhaR1RQb1VsTTlOWm1KNU1TMWNQZjk5WFNKL2Q3cVo4YjUrdFgvbWE1bForTEsxR2dFWVJubklXYVVUeTh1YnhWWHNBWThXNGFrR2dVa0NZdE9mcDFWeWFITS8ySTZYYzhKZDNtUkNnNStWVmQxQmUxOEFMLy9pYVN4SW5jdUM1Zi9kYXNMWFBUbnUzQ1lmVFNsYis3V055aXl0QU9vOTR5VitGZk1WWTNzc2lpanpsRUVYdWZHTXoxVTB0ckh4N0N3QWJIcm1YV3hkazgrU0tHOUJyMUZRMmpPMHNYYkRhN0xSM0cvdVYzN3p2WjNLTEt4Q2tTTzVOUDNYeEM5NjQ3dytBTDJxYVc3bjA4WmRvNmVyaC91c1dzeVJMT25uOWROOGhqTDBXTXVKanZCSm9zbGhwNnpMaWNMcUhuNCtmNHFuUHZrTVFoRDRSN3NTNUo3bFE4SVlBRVNuZ09OM1RhK0dpK0RqVzNuVXJBUFZ0N2F4K2F5TXlaM3BzTkRnY0l1M2RKczcyOU9MeWpRWFZ0ZnorN1kvcHM5c1JSZkYrcE5zakZ4VGVKdE9UQlloU3E1VGlwajg4SUdoVTBvV2wrMTU3bjQ0ZUk0OHVYZFR2QUlmQ2JuZlEwMnZGMUd0MXl6WitWdkFyajIvNUJxdk5CdkEwMG5XNEN3NXZOdm9CU01tRGxOY2V1Sk5WMXl3Q29OTmtKbUxGQXdERVRRaEdxWEJQU29xaWlDZ081T0lBb29JRFdacVp6dDZLNCtRV2xTT0FYWVFIZ0Ezam84NzV3ZnVBdUN4N3Btalorb0hiYjhYbGMwU1pJUGg3YWJFS0dIN0dmWUV4bGdYY0Jud2NHeG9pSHY3cnMwS29ZVmlNaE1saXhkSTMrbjdCaFlxNlJxNWVzMDdzdGZiMUlaMURHSDN0OEhoak5CK1FJQWk4TFNEd3dhUDNlVlFlUUtkV0RRdHZSOExzMUNRaWc0T0VrMmRhbFl4OVRlNkNZQ1FDWk1CbVVTVHdzWnVYc3VDaXFUNDFhckpZK1hEWEh1cmEzRk5iSlNmck9IbW1GYVM4M1htTDduekJTQVRNQmViT1RFcmd5UlhMZlc3MHNYYy9ac09PL0pGZW4wQmFWdjhwTUJJQk9RQXJGczdwUDV6d0JVZFBTRHZYeDVkZlJZQnpQLy9WNFNJTzFad0V1QS93TFgxMEhqRXFBUXVucDQzd2VuUzRkb0UzWHBwQmRFZ2dhb1dDWUozR1JjQTZvQWM0Q3B5Zld4WSt3Rk1rcUFPeXd3SU5URS93N3FiVlVOU2VhVVVobHhPczEySFFhUWpVYTdobmNUWXpwWk9nVEtTSXJ4c3A5djhVS1Jid0xwWWVaM2dpWUI2Z1hwZ3h6YThEa2E4T0ZOTFMyY1dNK0ZnVXp0emVxZFlPN3Qvd0NVZHE2NUhKQkpKblJoSWNxWlVoM1VxNUNYaFRFSVFUU0hlSEwrZ1Zmay9DSlBQUG1PWlRRMmZPZHZIbGdaOTU0c05QQUFnMTZGbjM5UzZLVGpWUVVGMkx6ZTRnS0ZUUEkzLzVEUmx6RTdHTE5sbzZHaWo1dFlxeS9VMGMvUEtFcXRkb2V5UTBOR2hiVzF0bjNqbHI1aVU4RGZFaElLdGsvVHFTblhuQndmamlwOE04L05aR1dqdTdoOWNjQVdIUlFTeStlU1pMNzhwR3EzZS93R3l4R1drMjF0TFRhZUowYVFkWjJTbTlrN3VtUmwxNTVaODZmZFRGTHd5MWdHQmc1c1R3VUkvSzJ4ME9IbHIvSVIxR0k2R3g3amRKVkZvRnNhbEJUSjBUaWRWc3gySzJFUmNUUjFKcVBKTlNocmZsZ2xxaEp5b2drU2FxU2MyT3BJdE96UWxWUlRYU1ZmeVNFU3VPRTRZU3NCQ1FMeHJCL0F1clQ5RFcxVVBLN0FoV3ZlbzVqQmNRVUNsMEJHc2kwU3BHUDFWeVFTWFhFcVNKcHNOY0Q4Q1c5L2FISWFXODV3UDd2V3JFVHd3bFlOVGw3NGVpTWdDbVpFbW51R0c2ZUhSSzl4QlpFT1FJZm55TEZhZ09wZHR5QnB1amo0Z0VBMGpUY3hYbm1ZQ2hxMEFPd0VnV2tPOGtJSGxXR0hLWmtnQlZFREpCNGZielIzbVFMRWVuREFMZzRweFk1RW9aQ0Z6aFYyTStZREFCVVVCYWFsdzBNYUVod3dyMld2czRVRmFGenFBaU5qVVlyVUxQZUg5MXAxWkk5NENVR2puaGt3SkFKSWFSdjBNYUZ3d21JQWNRRm1WNE52K0NpbXJNVml1Smw0UWhrd21vRlo1M2g3NGk5eCtGSE5oUkNvQkNOckNyREk3by8xZ3FlbHdFallEQlBzQTUvMGMzL3ltenBHTXI3VGdSOE82ejJ3bU5DbVRPMVduSWhJRjloeTZvbjR6UWNSRTBBZ1pid0dLWklERC9JcyszTXZPTHBGRkt6Z3BISVZPaGtKM2J0M3d1Mk8yTy9vdFpjbUZnUEhTQkY1YUFSQ0RoNHNSSmhBVU9YN3E2emIwVVZwOGdNRXhEUkx6QjYrWE45ODU0dElBSkhndVBtMHdKQ3dFV2pqRC85NVZVMEdlemt6d3JIRUVBelRpWi96QUlRdjgwME9qN3JlRzhmckRnY3VNUEFtK0VCUm93NklZZXcwT1gwVXhiZHc5YWd4SmRvQXFGVE1sNHJRRE5wenVReTJXRXhVaExvTTBoblJYMnRGdXdtRzBnZmVTOGMxeUVqWUlnWUFkZ1kzdytVei9ubnlBSUhVaWZ1cDlYL0Q5c25JNWVLTzdhN0FBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUVBQUFBQkFDQVlBQUFDcWFYSGVBQUFBQkhOQ1NWUUlDQWdJZkFoa2lBQUFBQWx3U0ZsekFBQUIyQUFBQWRnQitseW1jZ0FBQUJsMFJWaDBVMjltZEhkaGNtVUFkM2QzTG1sdWEzTmpZWEJsTG05eVo1dnVQQm9BQUF2RFNVUkJWSGljN1p0NVhKVFZHc2UvNzZ3b0lLSXhDaTZRRzJDQWlBdHFwa1dpS09JU21Rc3VaV2w2emFXNmRtMjVhdHZ0MnMydUxXclpybVptcGkxYW9sZkFOTkZDa0VDa1ZOUlVSQVNVR0dCbW1KbjMvakV5T3J3ek1EcEQwcWQrbjg5OFpzNXp6dk9jNXp4enpuT2U5em5uQlF2R0FvY0FBeUQrRVQrQ0lPaUE3NEU3dVE0SVZ3YS9CU0NnWFh1VUt0WDE4TjljaUNDS0lpS2cxK2tvdm5BZVFSRE1vaWplRGh4d1JvUUFIQklFSWVyVHJkOFNNMlJZbytyYkdLZ3hpVlRwVFFCcyt2Z0RubngwSnNEWHdDaG4rQVhBNEIvUVRwbnp5OWxHVTdJeElZcndXN1VSQUpQSlJHZ0hMMHhHNDJrZ3lCbCtHYUJVS3BXTnAyRWpRN3ptdDF3dVJ5YVRBVGc5SUlVOW9rR3Y1NHN0bThqSnpxS3lxdEpGRlJzSDN0NHRpT3JkbHhFSjk3Z2tSMktBMHRJU1JzZmRTZjdSSXk0Si9yMFEzWDhnNzMvNkRSNGV6VzZJWDJLQTV4Y3ZJdi9vRWVKanVqSjViRGh5bWVDeWttNUhqWTZhNmlwV2JzeGpmL28rM25yOVpSWThzUVNBb1NQR3NQMkxUVnVkRlNVQVlzZkFJREtQbkFRZ01qU1FpeGNLdWZUVFFwcDUyRjBoTngraUdjb3ZjS2Fva281eG45Q3pkejgyZjdQWFd0MVpvM1Q2WDdPN0JIeTgxWFlIcjYwMGtQemRDZktPbFNDVENVU0VhQmd5c0pQZHRvVVhLdGl5STU4WkU2TlFxK1EyZFVVWHRYeTIvU2d6SnZiRVE2M2c4bTg2MW0zSllXcGlCRDdlYWtyS3FsaTkvaENWMVFhSlhBR0JzWEVoOUEwUzhQZXpUUHV5MG92T2pyZGhBempDdXh1eldMUnNONldYcW0zb2JmMjhXTEZrS09OSDNtWkRYN1V1Z3hmZjNFZW5qcjZNdUt1TFRkM2JIMmV5ZE1VZU9yWnJ3ZWpZWUQ3ZGxzZThwVHRRcWVROFBDbUtyM2Yvd3VKWDB4enFrbitpaEszL3VjTnVYZkwyclFBamdHK2NHWmRUQm5qaGpiMzhjM2thU29XTUtmZEVNRGk2STJhenlJNDlKOWl5STUrSmM3ZFFVbGJObkttOXJUdzZ2V1Z2cnRiVlNPUmRyYk50VS9zOWNWUVl2ajdOcUtreFdYbUtTNnVZdDNRSEFJL1A2TzlRMTRWekh3UllEUVE2TTdZR0RYRHc4RGtXdjVxR2o3ZWE1SFZKUkVlMnM5Yk5tQmpGdHQzSHVHL09aaFk4bDB6TWdDQkN1OXppVEwvMXdrT3RZTXpRWUJ2YStFYyt4MndXbVh0L0h3YjI2UURsNSszeUdneDZ1STZaTFd1b3dmSjNEaUNLOE5yU1lUYURyOFhJdTd2eTRzSVlqRVl6Szk0LzZHeS8xNFZ0dTQreGFWc2VnZTE4ZUhGaGpGdGxOMmlBMVBSVE5HK21aRUpDbU1NMkQ0enJnVXdta0paKzJwMjZBVkJlb1dmVzA5c0JlUHVsZUx3OTNmdXdWcThCUkJIS0xsZmoxNnE1eEpOZmk1WXRQUEJzcHVSaW1mdWp4a2VmMjhtNW9nb2VHQmZKc0VHZDNTNi9YZ01JQW1oYWUxSjBVVXRWdGRTWlBmVnlDcDk4bGN1Rmtrb3FLZzIwdWNYTHJjcWw3RC9GaDVzUDA5YlBpK1hQeExwVmRpMGFYQUpEQjNWQ2J6QkoxcmZlWUdMbDJneVM1bS9sM3RtZkFSQWZjM1c3VXlrdE04WndqU2V2UmUwdVVOdkdIcXFxYTVqNTVEWkVFVlkrUHh4Zkh3OG5oblA5YU5BQUMyZjJSNkdROGR4cjM3RTk1WmlWcmxiSjJiejZYbFJLT2Z0K1BJT0hXbUd6UFlVRmF3QjQ1NU1zNjNZSFVGeGF5WllkK1FnQzlBaHQ0N0RmUmN0MmMrTDBKZTRiMloxNzRrSnVhSERPb01IdElpeFl3eHZQeHZHM1o3NWg1UFNOeE43UmljSFJnZWowUmxMMm4wUnZzUHpEZW9PUkwzZjl6S3lrWGdEY0V4ZENlSWlHMVBSVFJJOTVqL3ZpdTZPdE12REJwbXlLU3l1Wm1oaEI1MEJmdTMzdVAzU1dsV3N6TFAxMzA3Qm1RNlpOZmQvSUFPeHNTTmZDRDhod1VHY0Vjb0ZYZ0h5bjlzdFpTYjBJMEhpejRMbGtkdTB0WU5mZUFtdGRWSmcvazBhSDhjL2xxU3hlbm1ZMWdJZGFRZkxhSkpMbWJ5VTEvUlE1K2NXQXhhL01lNkF2eXhiZGJaVlI2OWxydjlkc3lNUnN0anpwMjRzSWU0UzI0ZkRHaFBwVVZnSzk2cW1QRmdTU1JKR0JUZ2NNbzJLN0VSL1RsZlRNc3h3OWZoRlJoUEFRRGYxNnRrY1E0TzdiZzZpcE1kdncrR3U4U1Bsa0NqOW1GM0k0cndpMVNzSGdmb0VFdHZPeGFUY2hJUXlWVWs3aThGQUFsaXdZUkZpd0h5YVRpRDBNR1hocnZicjZhbnhZbGZhaTNUcFRqWW5rRGQreGJ0bm5Ic0RMa3FmQlh1R2RLVHh6bW90WmorUGpyWGJDTkRjQlY1NEdqLzFhVHJkUm45R24zMEEyZnBVS1FFaDdUN3g5bS9OUjVuL3JGVEU1WWg3bHBSV1ZraGt3TEc0a2ExYS96dkJwRzBnYUU0NVMwYUNmL1AxaDFLSFRWckhtODN3QVlvYkdYN2NJZFhNMWxGWjRTZ3p3MUpJWCtDazdpL1Q5ZTBuUGJQcUowdUVqeHpEOTRmazN6Qzh4Z0plWE4xL3RTQ010WlJmNWVia1lqVVo3ZkRjZFNwV0t5SjY5aUI0d2lJcnFHOWZScmhPVXlXVEVEQm4yaHpnbk1OdjNrMDZqQ1M3dzN4ZC9lZ05JbHNDcGt5ZklQcHhwcnkwQTRSR1JkT3JjMVZxK1VIU2Vnd2UrUnhRdGN6R3laMjhDZ3l6N3RFR3ZaMC9xLzZpcXJuSlpVWTJtRGYxdkgrU3luTHFRR0dETWlCak9udm5WSVlPZnBnMUhDNHFzNVRrenA1R1dzc3RhRGdtOWpYMC81Z0t3WWQwSC9IM0JiTGNwbTVaK21MRHdIbTZUQi9heXdpVWxORk9xbUJZbGRZRHJzblpSVmxwaVE1di8rQ0lpSXFPczVRRURCMXQveDQ4YVMzRnhFVHFkem1WRlc3ZStoZUNRN2k3THFRdTd1MEJ6cFFmL0dEUkJRdjh5YnorNnFzczJ0RHNHeDNESFlQdHBLajlORzU1NGFxbnJXallpL25LQzlvZzFKaVBmbjg2VjBQVW1hVmJvOHVWTFpHY2RjcXRTZ2lEUXEwODBucDd1elREWmc4UUFLcFdLOHZMTFRONzBrbDJHdW9lUU02Wk5JSFgzVHJjck5uN1NWRmF1K2NqdGN1dENZb0JYWG4rTHZYdFNIRElNcUxNVnpadzlqdzZCUVc1VlNpYVRNV0hTTkxmS2RBU0pBY1ltam1kczRuaW5CY1RHeFJNYmQvMVBZMDBGRWdPVWxaV1NrNTNsa0NFc0lwTFdyYStlL2xSV2Fzbk0rQUd6MlpJTTZkR3pGeTFiV2xKZG9paVNtZkVEV20yRnk0cjZCN1NqVzNDb3kzTHFRcG9QdUxNZkp3dU9PMlNvR3doTm56eU8zYnQyV010ZHVnWnpJTXZ5bkw3K3czZDVkTzVNdHltYnN1K1FUY3poRGtnTVVIUytFSlZjeVpBdTBvNVNDN0lrZ2REayt4L0MyN3VGTlJTT2k3OTZPV3ZRWFVOSW1qb2RiWVhyTTZDdGY4RHZGd2g1cTV1eGN0UThDWDNBVy9Nb3JoTUlKWXhPSkdGMG9sM2hnVUczOHRxcTk5eWdadVBoVHhzSUtWVUtBSjNkR1dBeW04bTVjRkpDcnpGTE15OEdnNEg4dkZ6ckVuQUg1SEk1b2JlRkk1YzdQamx5RlE4dG5jaWJDOWZPa21TRmc5cTJxTmRycTFRcUNzdjAxdktrY1Fucy9IYWIyeFc4YitJVVZyMnp0c0YyWmhHYmxKaXpXV0VBb3dGZnlReFkvUHkvK2Y2N05JZE1mZnZmYmxNZW16aWVaamQ0UmMwUkJFRmczSVRKYnBYcHNDL0FHSFJyWjNsR2p1T3RyeW5qUm1mQW1zVWIrSFpkNms1Rnk1YXRYbGowekxOTGFpc01lajNuQzg4NVpHenJINERhNCtwSnJjbGs0dXl2Vnk5RytBZTBRNlcrZXFCU2RMNFF2UnZ5QWQ0K1ByUnExZHBsT2JVNHVETUxvOEU0VkhIeVpPa0treEtyQVdMdmpPWklUclpEeG03Qm9ldy9sR2N0VDU4eWp1MWZYYjJYMkt0UE5NbXBscHZxbjIxY3oreUhwcmhGWWFWU3lkNGZjdWpTTmJqaHh0Y0JpUThvT0g0TXBWeEIzL2JTSSttTWN6OXo0dmd2TnJUWVlmRTJnYzdRNFNPdHZ5TWlvNGlMSDBWMWxlczVRVDlORzlyNkI3Z3NweTRFTHkrdlZmTWVXelQ3c1NlZUJxQ0RueWZOQlFVWmMxWkxHdGNHUWhmS204NWh5WTM2Z0FmN0xhVDRUQWt5clZZN2EvMUg3emEybmswV0NpdzdnUTNNb2tpNVRucmhTUlROZG1naTVlV1hKWFJYSUFnQ1BqNHQzU3JURVNRK1FCQUVMbFZWRVBtRy9hYzRoY0tXWmVZRGs5aTZlYVBiRlpzMVp3RXZMR3M0bUhFVkVnTThzbUFoeWQ5KzdaRGg3dGc0bTNMZmZnTTRXWERjN2FGdzcyakgxMkhkQ1Vrby9FZUR5MDZ3c1JWczZ2akxBSUMyd2cwWm02WUNUMDh2ZEpYNkJ0dFZWMVFEVk1pQXZFdGxwZVQrZExpeGRXc1UxSjNDWFlPN1U2V3Q1cGZEQlhiYkF4VGtucWJpY2lWQXJneFlEL0Q0L0ZsTjlqcE12UkN3ZWJGclZPSkVBRll0V292UktMMm1helNhZU8vWlQydUw2K1ZBTnBCd3Z2QmMyeDhPN09lMjhCNW8yclJ0ZEwzZERlT1ZPNFVoM2NQWms1Sk0vazlIT1hMd1p6cDE3NEN2eGhKVW5jZzV6YjhlZW9PalB4NER5OHZpYzJwTjF4N1lCdlFBOEczVm1oWStQblg3YU5JUXI3eElEVkNwMWRxOFNPWGQwaE1FZ1lwTDJscFNKcEFBRkY0clF3M01CZEtCQ3ByQUsvRnUvbWl2akcwTzE3eGErMytHYUluK3pPNUdEZ0FBQUFCSlJVNUVya0pnZ2c9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRUFBQUFCQUNBWUFBQUNxYVhIZUFBQUFCSE5DU1ZRSUNBZ0lmQWhraUFBQUFBbHdTRmx6QUFBQjJBQUFBZGdCK2x5bWNnQUFBQmwwUlZoMFUyOW1kSGRoY21VQWQzZDNMbWx1YTNOallYQmxMbTl5WjV2dVBCb0FBQTFuU1VSQlZIaWM3WnQ3Zkl6WDFzZS96OHdrRTNKUFNDSVNFcWxia0l1NFg2cXVMVkkwVkYzNmNyU2x4MGVMMDFadmh6cW5kU2hhTFZXOExhOVNCNGNxcW9LNG5iaExxQ1loSVJGeUk3ZkpoWmxjNXZxY1B5WUowMlJtTWtpYXQrLzcrM3llVDVLOTExcDc3Vi8ycy9iYWE4OEE5QUdTQWZHUCtNamw4b05pYWFaN2VWR1N2NHVUNDdHSCtxNEJ2V1hBL3dpQzBMbU5mMnNrRWdsL05JeDcvdGxST29taFdDWTRFalgyV2Y1OTVpSUdnMGgyVG02d0tJcWJCTURReHM5WFNFOCsrM3Y3MnVEUVZLalE2N1FBQlBjYVJjNmRQRkVDQ01JZjhEOXZEVldyWGZpL04vUGZ3Q3dCSi81OWxnOFhMeWNqSzZjeC9XbDB5T3BxVktzMVJFMmFTVmw1QmR1MjcrSG93UjEwN0JBRWdGSlZ4dDc5aHpoMU5nNkZvZ2dQZHpmNjlvNWcvQXVqOEhCM2ExVG5ud1FFUUd6YnhvK2JWMC9YTkJZVUZ0RTZxQWNTUWNBZ2lyVHlic214Nkowa1hidkIzTGNYVVZCWVZNdVFtNnNMeTVkOHlDdlRYMnBFOTIzRHcwR3dhNTlJc3JMdjFyMENxaEhoNVV3UGJ4ZldKK2JRZjhnTDNMdXZSQ0tCNmVOOG1EVEtpOWJlY3ZLTE5QeDR0SkJOUCtUeCtwdnZrMTlReUFjTDNxaGxLMnJTVEE1RUg3UFo2ZkhqUnJKejZ6cWI5ZW9MaXdRSUFudzlwQ1BsT2oxYmtuTnhrRXZZdDdZcnp3N3dxSkhwaGlQRCtyb3piYXdQejgxTVpQR1NWVHc5b0EvOSsvWXdzZFdxbFRlQkFXMXNkdERmcjdYTk9yYkFJZ0ZnZkVja2d2SDNUOTlxWnpMNWg5RW4xSVYxSDdWbjZvSVVQbDcySlVkKzJtYlMvL1VYU3g3YjJZYUFWUUpFNEllMEFwd2RwYnora3E5RjJjbWp2WG52ODF2RW5qNVA2YjM3dUxtNjFQUXBWV1drM2J4bHM0TWRPd1RoMkx5NXpYcjFoVlVDRkJVYWxCbzlmVHE3NENDM25EWUlBa1IwY1diL2NRV1ptVG00aFFUWDlBMFlHa1Z5U3FyTkRvYUhkaVh1OUFHYjllb0w2eXRBTlA0MGlQVXphS2dTbEVxbEp1MXpaazNqNUtsenRua0hqQnd4MkdZZFcyQ1ZnQmJON1BCd3NDUHBob3F5Q2oyT3phUm1aZlY2a2JoRUpmYjJkZ1FFK0p2MHpYcDFLck5lbmZyNEhqOWhXQ1ZBSWdpOEVOU1NUZGZ1c3VxN0hCYk5ibXRXOXR2ZHVlUVhhWWdjT1JRblI5UDM5dGVFYTF6NkpkRm1CL3YyanFCTGNBZWI5ZW9McXdRQS9MVjNBRHRTOC9uNDZ3eUMvQjJZRXVsZFMrYlFxV0xlV3A2T1RDWmw4WWQvcWRVL2Fmb2MwbTlsMnV4Z1dFZ1g0cy84YkxOZWZWRXZBZ0pkbXJGbFJEQ1REMTFsNm9JVXRoM0laOUlvTC95ODVlUXBOT3lKVWJEM1dDR2lDQXZmbjB0WWFKZGFOamF1VzhuNWk1ZHRkbkRRd0Q0MjY5aUNlaEVBTUtHOUZ4NE80YngrUElWRHA0bzVkS3JZcE4vSlRvcEtxMmZUNWgxTWZuRXNIZHEzTStrZjBLOG5BL3IxZkRKZVAwSFVtd0NBSWY3dUpFL3JTMHhtRWJFNXBTZ3FOZmcwbDlQRDI1bkl3QmJNajAxamZXSU93MFpOTWpsQUFXemZ0WS9UWitOc2RuRHcwLzJZT0Q3U1pyMzZ3aUlCeFpWYWRxY1YxTm5YMCtkQmtxTVhZZjh0QmMvNHVSR2JVMEp5ZmlFVHB2NlpwUGlqTlRKTFY2emxSbXE2elE1ZXVwelkrQVM0dWJyZzR1ekV6VklWRXc4bVBaSmhsVkpsOHZlSlEvOGk2ZXAxbSsyRWhRWmJGM29NMUVtQXZiMGRSdzl1Wi8vUE1XaTFPcHVOTm5OdzRNV28wU1p0WGkwOUdUcTQvNk41MllBdyt3cDBEK3RHOTdCdWplbUxXV2cwV3E2bDNPRFc3V3hVS2hWYXJRNkpSSUtMaXpPK3Jiem8xclV6ems2T2oyVGJwaURZbU5CcWRlell0WTl0Ty9keTVseWN4WlVvQ0FJaDNUb3paZUk0WHBuK2tza2h6Qm9hallBRDBjZkl6eS9rdFJtVHJjcGVTYmpLbjJhOVJYSktHZ0NlampJNitEcmk1MnFIazF5Q25VUkFieEFwS2RkeDU3Nld6Rkl0Q1luSkpDUW04OW1YRy9ocTFSTEdqeHRaTDcvcUxJazFCSUs3RHlIOVZpYVZKVGNSQk1HczNQbUxseG45d25TVXFqSjYrRFZuZW9RSFhYd2NNS2NoaWlMRktqWHBSWlVjVGkwbk5xTWNCSUgxcTVmVktzL1ZWUkpydExLNFZxdkRZREJZbExtdlZERjF4bHlVcWpKbTl2Wms1V2hmdWxxWVBCaVh2NmV6QSswODVid1M0Y0pmK3JrakZlRE50eGR4OWRvTnEzNDFxWHVCRGQ5K1QzYk9YWVkrNWN5VU1IZWJkTjJiRzRrS2F5WG5wYTdPYURSYS9yNzBDNnQ2VFlxQVRWdDJJaEZnUmc5ajJjMGd3cG1NTW1KU2xXajFsZ3NTVXFtQWc3MHhwQTBMYW81N015a0hvby9XV2NGK0dFMkdnSXlzSEc3ZHp1S3BGbkphdTlwaEVPSFRrL2tzT3BMTHNwUDV6UHZwRHFVVmVvczJxZ21RU2lEQ1Y0NWViK0Jrck9VaVRKTWhvTHBjMXJHbEF3QW5iaW81bXFha2N4c2YrbmRwUjBwQkpXL3N6eUVwcjlLc0RUdnBnK20wYzdjejJyMXV1UXpYWkFoUUtJeW5TNCtxaXRQKzVIc0FySDN6UlhaOTlDcGorblhqemowdDgvYm44TUdoWE01bmx0VXEwMGtsRDhLbGk0Tnhhb3FpRW92ak5wbEV5RjV1RDRCV0x5SUNxWVZxbXNudDZCcm9pMFFRMlBUMlZQYjArcFVsMnc1eklhdVVDMWxsZUR2TGlPemt5c2hPem5nMmwySFVORUpYeFk2OW5aM0ZjWnNNQVVHQnhsSmI5ajBOeWtvOUdyMUlhSUFYa29keWh2RUR3eGpYUDRTWVM5ZlpmT1FDc1FscGJJb3ZZdXN2eFR6ZjJaVXA0YTQxc3JsS1k3d0lhbWUraEFkTmlBQ054cGlnWE0xVGs2cFFBK0RyNlZwTFRpcVJNTEpYTUNON0JYTTdyNGl0TVJmNUx1WWlQMTR0NVZ5bWl2bDkzZkJ4a3BHUXB6YXhhdzRTdWR3K09tcHMvZExHUjRGV3F5TWpNeHRkVlFaMk95T0xpZ3JUUUphUW1NeHpZMTRHb0tSQ3h5Zkg4d0h3ZExGOHdBbjA4V1R4dEZGY1d2Y3VrZUVkeUZQcStQeHNDZHNUNzNPOVVBUEFld3VYc3ZXZlA1aTFJYW5NdXpGMXhUOCtmT1FKV2tMTThWUDRCSVRUdnR2VDVOekpBNkJqNkRPMDhBOHhjZXF6TC8rYlNyV2FlY043NHV2bXpQMUs0L0wxYjFtL1pNalR4WkZ2WjQ1bGJIZ0hDc3YweE53c0IyRFpoR2VRU2dRKytYU05XZDBHM1FVV2YvSTU5NVVxQm5RTllsRElVelVQQmdQdkxWeGFJNWVXZmh1QTF3ZUgwNm1WTVFrU0JCZ1UycjdlWXdrQ2ZCejFOSTV5WTlCemJTNW54c0JRL0QxY3lNektRYWVyK3pRcGMvRHB1T1BseVZGc1dMUHNVZWRwRnRWYjBJOS9lODNrQUJReGV3VlpCY1dJb29nZ0NBUzA5ZVB5bFNSUzg0cVJ5NHhoNmFzM0poTFIzcjlPdTNWQ0FHOFhSL2E4TVo0eHEzY2psMG01VjZIbWJxa0t2OVkreUdReTZnb0hFclZhODl5eEUyY2VhNktQaXpHUkl3Qlk4dE5aU3NxTjhTSEF1KzViYUhNUXFnNWFYVnEzUUt2WFl4QmgwWSt4YUhSNnhvd2VZVmF2UVhlQjZ2OTZSbjZ4eVhhbTArdE5Wc1NrQ1dOWS84MzNYSWo3cGFidFZxNkMzcDBENmptU2lLZ3p4bzMwZ2xKRUVSVEtjbmJGcGVEdDFZTDMzNWxqVnJOQkNRZ0xDZVoyUmhhOTVxeXMxUmNlMnJXR0JJbEVRdlMrclh6eDFiZGMvaVdKNkNNbk9CU2Z6T1FoUFdycDFRbU50dVlXOTNDU3NmTGN1MmM0UFNOQ21mL21hL2g0dHpTcjJxQUVEQjh5a0wwL0hjYWpiU0J1ZnNiM1dabWZSK0hOVktMR1BtY2k2K3preUVjZnpFZW4wOUVwOUJtT3hLZVFuSmxMY050V1ZzY3hxSXhSWDZYV3NQRlVBaktwbEcyYjF4RFF4cytxcmd3b0tTaFV1QzFidVZhUXlaNHNIM0dYZmdVZ2ZPSVVCczZlQjhDbDdWdjRlZUVDenB5TForVVhHK3JVOC9mM0pUUDdEck5YN3lKNjZXd2NIZXpORDZMV0lKWlhJSXF3NEY4blVDakxhZXZmbXQxN2F0OG42clJxUklNQm5WNVBvYUlZUVJCS0JXQVI4UEhqVHRZU2hpNzRheTBDNm90ZW5kcXk1ZDMvb29XclUrMU92UTVEUVRGcXRZWjNkNTFnNThWa1cxMWJLQU0rQVE0RElZRDV5LzlIdzlPQXVROEY3SzBhMXhKZWpydWVPYkQvdkZYaXZLakJ3c1JCNFRWRWlCb05xdHdDRGwxSlk5V1JPTklMU2hBRUlVc1V4ZVdBdGNzTVBaQUl4RmV2K2ZpcTUwbER3RHdCOGNBM1Z2UTNBeXVMbGVWekZtODVLUHY3MW1qYStYalN3cWtaSmNweU1vcnVvWDVRTG84V1JYRTZvTERGd1NaVER6QURMVEFmYUE5c05vZ2lOM01WWEVqTDVrWmVVZlhrVDJIOHpzTm9iSnc4TkgwQ3FwRUJyQU1ZMWlXUWl4LzlpWG5EYTY3YWR3TVhIOVZ3b3grSEgwcUFuZ1ZxbjNmTnd3ZmdkbUVwMzUrN3lwWE12T3IyTVVEMWZxY0c3Z0puTUg0anhDb2FuUUN2anAyTkp4ZFJIQVFNc2xVL3ZhQ0V0Y2N1UGR3MHZPcjVMVFlDTTYzWmEyZ0NEQURpUXhjaS90MTdNbXZmRVVxeXMrcGxZTy9iYzJobUorT2JyMWVZbFZteGFqMVhFcTdTYmU2N2FMUTZGSEZuOFFrSm56SHNuYjl0WE4zRngrTHJZZW5TNVVsZ0RMQy8yL05SakY5ZGQ5SmpEVjhON1V0cFZnWnBTYWZ4OTZ1ZEZhclZHa0o3aitEVzdTemV1WHlkTEx2bWxPdU5oRHRJQkRGbjQ5cmg1OWVzaU1YTTF0alFCTGdLZ3BBalNLUk8wN2I5UUVEdmZqWWJpRjN6R1NlL1hJR2JteXRoSWNGSXBhWngrM3BxT25mdTVORmg4SENtYlBvbjVYb0RLV1hHY2xobGZpN0hJd2VLQnExMkxUQzNMdnNOVFFEQUhHQ3RSQ3FqNDdBUmVBWUcxU2tVTkhBd2dYMEgxR3JYNjdRY1c3NkVTOXUvUTF0UlVhdGZJcFBSY2VnSUl2L3hPWTRlbmdCY0wxTlRwamVnS3k4alpuQjNEQnAxcVNpS0xUQW1RQ1pvREFJQS9pd0l3cWVpS0pxTitpNCtyWGpyWElKWkF3YTlqdnU1dVNieEJNREp5eHM3QndlVHR1eEtMUVVhNDRvL08yTUN4VmZpQWRvQTJiKzEyMWk3d0FaUkZMY0MvWUc2dmxmenZWNnJsVnN5SUpIS2FrNlUxaUI3cU5aZzcxcFRWL1RnZHlRQW9CdzRhcVp2UzRPTitvQ01PbGY3LzVaTXNNSHcvd1Q4M2c3ODNtaXNYY0FheWlWU2FUUFgxdFpMV1BXQlhnUmRWWTFRWGFSQVgxRU9FQTc4K2tRR2FBREUwSUJmb1JjRVNTWlE1MmZuL2dOdXNqaFl4Y1FCZWdBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUVBQUFBQkFDQVlBQUFDcWFYSGVBQUFBQkhOQ1NWUUlDQWdJZkFoa2lBQUFBQWx3U0ZsekFBQUIyQUFBQWRnQitseW1jZ0FBQUJsMFJWaDBVMjltZEhkaGNtVUFkM2QzTG1sdWEzTmpZWEJsTG05eVo1dnVQQm9BQUJFNFNVUkJWSGljM1p0NWVGUkYxc1ovdDd1VFRvZWtzelpOTmdnRUNVdFl3aHJXc01vdSs2S0NpaktvSTRySU9DZ0lnaktqZ3VJbm4rTWcrQUd5aUl5aUlJTEk3aElNdTBDQWtMQ0doSkE5Nld5OTNqdC8zS1N6ZFNkcGdhamYrenozNmVmZU9uWHExSHZyVnRVNXB4citXT2dQL0FTVUFDbkFQd0R2KzltZ2NEK1Z1NGpod0M1QTZlbW1vdFJpUlpLZjV3RUh5bjZkd1FRa0FHdWh2TnFmRHhjQjZjVitIYVFEejR5V1BwOCtSQnJadHBua3BsU0l5SjJxOVJKQVhEcTA2NFQvVEpxa2RLWFJQOG9JOEFYeWdyV04yUHpvb0NvRkpXWXJ0L0tMS0RKYm5GWTJXMjM0YU5TMDFmc2hRZkxXMDBuclBqbVdHQUlzQVhKcWExaDE5N2JmRXpRQzhQZFUxeWp3ZEZjUjJkaTMzb29FZUVDVWVLdnN0aGN3bUZvK0g0VkxadjVKTURXNkpUSE45QUNkZ1RXMXlmNi9KRUNsVVBENmcxMEoxallDbUFnTWRTcmJZRmE1Q0pzb2NUa3JuMUtMdFZZNWQ2V1N4bDRhOU42YUtzL1ZLaVhQOW1ySG9yM0hBWjRIdm5kVS93OUx3UC84ZUk3ZGwyN1dXNzZabnpkUDlXaE5uK1pCOW1jOXcvWDRlNnJKTFRFTlFaNW84NnZYKzhNU2tKUXQyenFtZjIvY1ZiV2JlVFgxTnFjVGsxbTg5d1JQZG0vTnRDNnRBRkFJQWgyQ0FqaHk5Ylk3RUFrY3ExN1hWUUlFb0FrUVhIWVZBbmVBVzBDeGk3cnFoWFd2L3gxL2JkMmJ3YThPL2NTTUplK3cvbmdpVVUzODZSUVNDSURPeS81cGhEaXFWMThDQmlKUEpnODVVV1FEZmdaMkFKOGprOUtnR0Qrd0w0YmlZbVlzV2M3V00xZnNCS2hWOW4yUnA2TjZkUkhRSFhnWDZBdWdVZ3BFdDljU3JQY2d1SW1hd21JckdWbG1MaVFXS205bm1HS0JXRUhnSDVMRWlySjZSYTUwd2laSjNNd3J4R1MxWWJMWVhLa0t3R01qaHpKdjViODVuNTdENWF4ODNCU0tPaWRSWnp0QkJiSWpNaDhRT3JUMVp2YU1ab3dZcE1QUDE2MkdzQ1RCbVFRRC85bVp6dG90dHlTalNSUUVTSkhrRVhPMkhyYUhBS21PQ25JTzc2elhKMUNPRGxObWN2N0tOVWRGMDRITjFSODYyZ2RvZ0MrQlYveDkzVml6SW9xNGIySjRkRUt3dzg0RENBSjBicS9sN2RjaU9YdW9qekJoWkJNa2FDb0l4QUdqNjJIM0NBQVBkM2VHOU9qQ3BNR3grTG5RNlNvZFVzanZkR3ovUGp3VTI0dEFYNThxYmRTdzNjSDlWbUJLcTRoR2ZQbEpOQkhOSEg0NmRlTDlqMit3ZUhrU0VwZ2xpZjdBTDdXSXA3cXBsQ0Z4Nno2a1c3dElBTG84K2pTbkU1TmRIZ0dkSHY0TFo1T3Vrdi9ETG55OEdwRnJLS1RidEdlNGxwWU84a3FRVkZtKytnaDRGWmpTb3Brbmg3N28vcHM3RHpEMzZYQStXTllXU2NKZEliQURKN013RUFpRVJFVzBzSGYrWHNKZjY4M1lBWDNLYnp0VUw2OU1RQ3NCbG5wN3FhUXYxblJ5T3R4ZHdaTVBoekpyV2hpaVJHTmdwUk94SXNCNE5lMjJsRk5ndU9zMnEwT1NKSTRuSkpiZlpsWXZyN3dLdkNtQmFzR2NDRm8vNEhYUERQam5na2gySDhnazdZNXBFckFDT0ZsTnhBaXNOaFFWdjlqbnlSZDRZdlJRL0xUZVpPY1gzRlc3RzNidEJlRGJuK0w1K2RmekFDZUF1T3B5NVhOQUt5QXhOTmhET0h1d0R4N3EybjBraTFYaVVsSVJmcjV1aEFWNzFHM01aemQ1N3JYTEFGOEQ0eDJJZUFJYmdFblZDMzdySEZBTnZ5THZZMm9VbEkrQXNZRHc1TlJRcDUzUHk3ZHcrR2d1ZXc1bXNlZGdGZ1VHT1VEUnZLbUc0UU4xakJpa28yK01QeXBselpYMWtmSEJMSHpuQ2dWRnRtR1NoQ2R5eks4eVNvREp5UDU3VitTVjZIbWN6eHYxd1JMa25lb1Y0RHZBWVVTbG5JQXhBS09HTks1U21IeXQyTjdoWDA3bFk3UEo0VGFWdTVxUWR0MHB6c25nZXNwTlB0cVF3a2NiVXRBRnVETjhvSTdoQTNVTTZodEFJMDk1RitibXJtUlFUMisyNzh2WElBY292bkZpOU5HeUMyQWtFR0kwbWUyRk5sRWtQU3VIVUwwT2dGeERJZTRxRlY2ZUZaNWdxY2tFSUFKdkFSV1ZuYUNjZ0doZGdEdnRJcjNJempYei9wb2I3TjZmU2ZMMWloZmw2Uk5BYUZRTW9lMWlhTktxSTBvM09YcFRsSk5PYWtJOHR4S09rWG4xSEJ1L1NHUGpGMm1vMVFwaWUvb3pmV0lJNDRZRzBxK0xGOXYzNVlNY3BIQkdRR1hjQVBvbXBkd2lXQmNBd0lmYnZtYnVleDh4SnJZM09qOGZOdTg1d05DZTNmajZ2VGZzblU5Snp3UklxMC9ueXdud0F6UWhRZkszdk9DdEpMWnN2dzJBVXVWR1pMOHhoSGZ1VDBCb1MzbkhVdzFlQVVHMGpoMUg2OWh4V0VxTFNVczh5YVhEWDVGOU01RjlSN0xaZHlTYkU3dTdFNkozTDY4U1hCL0RrSDJMNmR2MkhhWi9sMDRBRE93V1RiTWdQVHVPL0F4QUk0MEhrNGYwdDFmWWNUZ09vOWtNY21pOVhsQWhlM2ZvQTJVRGRRRjJRN0ZaTFZ6KzZSc0s3cVNVdmYwZWVQb0cxbEFpaVNLWjF5K1FtaEJQYWtJOGhzeUtYVzI3U0M5QzlHNFljKzBMVGxBTkJZN3htUUR2ZnJKamo5Zk1zU09GTG0xYTBiNWxDeTUrdVo2VEY1TW9MaTJsYTl0SSswNHZ6MURJd245OVVsNzMzNjRRWUFRd21rUUFOQjd5ZHp0OVlnZzVlV2IySE13aTdlSngwaTRlNTVnZzRCOFNRV2hVRENGdHUxR2NtMGxxUWp4cEY0OWpLaW0wSy9YM2MyUFd0REJHRE5MUnViMFBGa09CWFQ5UXUzZFNnU0lKNWxpdHRuV2pYbHdnN1hqdlRhRkhWQnMwYWpWOW85dFhFVXpQem1IQ3k2OXovZllkZ0UrUlIwKzlDVWdIcER0WnBpcmp1MStNSDYwaUdySG5ZQmJhSnVINGhMUWcrK3A1Y2xPdmtKdDZoWE43Sy93S2hjb04vL0MyYUp1RWN5TitEKzBpdlZrMHQ2VmNLSUhOYUNRang5N3ZXc1BVMWJBZWFIc25PL2R2dldjOHp5UERCekYrWUY4ZUNBdEZwVktTbXBIRjk3K2M0T1B0dXpBVWx3RDhBRHpuZ243N0NNaE9TVFhxakNZUlR3OTVHZlQwck1ndmVHajlpZWczbm9oKzR5bkp6U0RuMm5ueWJpWGgza2hMUUlzby9KdTFRZW1teG1qSTRVYjhuaW9OV0kxR0VDV1NiNXJLSDExeXhVRGdaU0RESm9vck51M2V6NmJkKzUzSjdVVGVSemhQSURoQStZZDVzTlJvbTNya2FBNlBUd25GMThlTllRTjBKQ1FXMXFqZzZhL0gwMTlQV05mQjlXckFWaWlIQkw2UHMyOXpid010WERFU09lSkVpeUE5M1NJanlEWVVZclBaQ1BUUlVtdzA4ZDN4TXdDbmNiSHpVRUhBTjhEVUhkOWxNbXlBamljZkRxM2FDYXNGU1pJUUhLd0NWZVFzVlZjZWExRXhvczNLbld3TEo4N2JsOVRQWERXeUhOZlNNMGpOem1YKzFERzhNRzY0ck96Z3orVUUvQ2FVRTdCYkVNamZ1dU8yNzk5bk42ZEZVOWtMYk5KWWpVSWhrSFB0UEVkWHY0SnZXQ3Y4d2xyaDI3UVZubjU2YkZZekJXbFh5YitWUkY1S0VrV1p0d0FJYWFMR1pqSmhLWHY3NzIzSXhDWksrT3JEOGZUMmQ5bEltd1Myc2ptMElEMlpaWnUzTTZSemU5bzBxL0tpUEpDWDlDcFZnVm85ckhJQ0RKTEUyMWFyOVBiaXQ1UFkvSkc4N29ZR2VmRHBxZzZzM1hLTFk2Znl5VW8rUTFheXpMYTdwemRXVXltaXJXSlNEdzN5WUVoc0lBdWZDOE9jbHc5SUpOMHdzWGxYTGhvdlgyWjlFSStudHVZeVdpY0JJcVRseTd2UWs5c1djbTdYY2k3Y1RLMU93S3RsVjNVWWtaMmd6Y0NtTWxKcUVBQ3dTaEI0N3V1OW1XR3IxMS9ubVJuTkFSZy9Rcy80RVhwS2pTSm5FZ3pFbjh6alVGd3VjY2Z6OE5PcTZCNnRvMWRYWHdiMENTQTZTb3UxdUFTTHdRQVNGQmJiZUdMaERTeFdpY0dQdnY2Yk9sOGRDcVhzcG91U1RJakpJbi8ySHRvQTFGNCtWV1FsVWNSVW1PZGhLaTRZQkF3Q1hnSW1BTW5sTXRVLzZtNEtnWitWU3NGOTQ3c1BNSHBrR0lMU2NiWlpGQ1Y3K0FsQXRGaXdHQXlJWlZuY1VxUElqSVUzT1JBdlQ2UytqWnNoS0Z6S1hGZUJWWlE3YkRFV1l6Ums4cTg1TTVuWUw0YkpTMWZ5dzdtTGRKdStpTUNJamxYcXVLbVVhTDAwWkYyL3dOazlHN21UZkJZRUlSOUo2Z2trT2lJQVlCcXdVYWtRaENXemc1ajllQ2hLdFJwQjdZWkNxYXlvSWtxSU5odWl5WVROYUVTMFZFekE2VmtXcHMyL3dkbkxwYis1dzNWaFlIUVVlWVhGbkxseUhlOG00ZlQ2eTlzb2xGV0QzRzRxSlQ3ZThud21TUktuZDY3bDR1SHRBSmVSbzBObVo5UDZCSVhBSmxGQzB6dmFpNld6ZytqVXVzempVaWdRSkJISndUa01zMFZpN1JmWnZMOHhrL3hDRzUyNzlXTDF4dTBFQkRhdUtld0NiQ0trbGlXMTNuLzlXWFo5WHBIdzlXdmFtbzdqWGtEalY3T055Z1FBSUVrY1dyT0l0SXNuQU9ZQXE1emxCYmFMRXRlQkRYRm5pdG9QbVpsTXIwNWVqSXpWRXR2Tml6QzlPNTRhQmFJSVdYa1dMbDgzc2Z2SEFyNDlZaUFqeDRKU3FlQ3BaK2N5YitFeTFPcTZBeWF1d05kZjdtaDR6RWhDT3cvQ1N4ZFc1L0pzaHlEUWVmUlQ1UVE4VGkwRWdMeXhpQVllbHlRV3g1MHBhaFozcGlMUDBVaWp3R3lSc0ZncmhvSlNxV1Q0NkFuOGRlNnJ0RzBmWFVXWjJXeGk2U3N2a0hMekdqUC9Pby9ZUWNQcVo3UVRhSU5hNE4yNGFhMHlHWmRQNGRheVRSVUh6amU0T2Q2NkVBcXowcUlCYlYyWklSdXdEbmxQM2hVWWgrelBoeGFYaW5wQURYaUhOVzNPck9kZlpzQ1FFUVNGaERsVTlPUEI3L2w4ayt5dEhmM3hFQ01lbXNocnkxYWlEN3Fib0k5emxPWmxjbXpUTWpLN0RxVFA5UGxWeXJTNllBcXowZ1FncEw0SEpDVGtvT0lDWUJnUUJlaVFvenQwaU83S0kwODg3YlR6QUFVRjhpbVZQaUZOQ2ZIeVpzODNYL0pncjNac1dMTUttODMxTkZoZHNKcmxDZGhpckRrUks5M3NMcittd1UrSWRORUhjV0RpZE9aMDdvR3B0SVEzRjg1bHpLQnVuRGtaMzlDbUFML1RFUmtQbFlvWE8vZmcyN0ZUNmRva21Fc1h6akpsVkN3bjR1c2R5TGxuK0YzUENMWHlDMkJ4VEQvODFCN1liRmJPbmo3UjREYjhiaWRFaWl4bTNqMzVDNXN2bnNNbVNYVHAzcHVKRHovUjRIYjhMZ1FjVExuT29xTkhTQzhxUkt2MVljNzhKVHcyY3pZS1JjV0F6TW5PWk12NjFSaU5wVWdTRkJybDUrZE95dEd1T3hlT1VwUjF5MmtiNW1MWkNTeTRjNU9FQTl0b0V6dldIc211akFZalFDamJRcTlQK0JXRDJZUWdDSXliTXAxWGx5eDN1RlBjdjJjbkh5eGY2bFJmWnRJcE1wTk8xZGx1WWZadHp1eGFoeTY4RGZxV05YS2pEVWRBdTQ3UktKVXFER1lUTFZ1MTRZM2xIOUtqZDMrbjhtTW5UeU1nc0RFV3E0Vy96NTZCQXBIMVN5clc4L21yMW5BOUxaMWVqOHhEVmNkdTAxM2pUZU9JaWtDcUpObzNiMUtERVJEWnBqMWZmWCtVOUxSVStnOGVqcHU3ZTYzeUhoNGFob3dZQThDQ3ViTlFJVEpwY0t5OS9LMTFjbUFwckgwdjNEMWRTK1pXQ3R1bk51Z2NFTld4QzFFZHU3aGN6MXZyUzA3bWJVcE5KalRxbXQreEswaUsyMDFCUmdySUJ6YXlHb3lBNHFKQ1NrcUswVFZ1NG5MZG5uMEhzSDNyQnNhK3RJaXhBL3FnVkNqczZmT3J4L2VqY3ErYkZKdkZUTWJWYzZTY093cUNZRVdTNXJsc2lBTjBCNlNSWXlaSlY3TnNEcS9rREl2MHhLd1hKS1ZLSlFGU2ROY1lLZTdzVGFmeWpxNzRpM2VrRnBFZDZ2elBRUDB1SVIxNHNMd0Q5MjBFMkd3MkxsODZ6K0g5ZTlpd1poVitIaHAwM2o2Y09SblBTODgreG9JM1Z0U3A0NEhXN1ZDclBmQVAwTEY2K3pGTy9MU1ByemIvTDZmaUR0QTRzak5lT3VlK2g3bkVRT3Jwd3lEbklUNUYvbGRKRWtnSHFKUTR2VzhFL0hQeDM5aXdacFg5L3VQQkkrbXNENkxQNStzNWR2UUh4Z3p1WHFlT2ZnT0hzbjZibkdoUnViblRjK0FvRXMrZjRGVGNBUUthUjZGdjQxeEhVWFphT1FISndEdk81TzRiQVlPSFBVUldSanJKU1pkSXVwVEF6cXVYU1Nrc0lNZFlpcmZXaDc3OWg5U3BZOFRZeWZmTFBEdnVHd0U5K3c2Z1o5OEJwTnk0eXZpaFBkbHk2VHhiTHAwSFlNbVM1VXlkUHZPdTlMdHB0SGhvbllmYUxLWDFpMGZlOTFXZ2FYZ0V1dzZkWXR2bS82UFFVTUNRNFdPSTZkUC9IbWdXRUFUbnZweWJ4aHM1Z0N2Vk9DSmZHWGRMZ0FRZ2ltS3RRa0VoWWJ3NGY4bGRObFhXb0NTM1ZWY2NVT01UU0plSFh6bDNhdXRiTDljbWQ3Y0VYQU9zUHh6Y3EzeHV4aVNoc2pOekwyRVZ3VlNXZ0RwM1VvNFpOQXFzTzVTbWoreFNnSU96Z1pWeHR3VGtBQytWbEJTdjNQdnRWdzJ6cVJJRXdtTkc0Uk1jVWFlbzFXeXE4NDNjcS84TitnSzFXYlFDR0xCNTJRSmFoMWRFY252Tm1JM1pZczFHampPdUFucEZUNTZIeGxmdlZKR0gxaCsxVjkxL283T1VGbkY0NWRNMm04VzBDamtsNWhEMzZxM2xBN1g1cGhrQXZ0NWV0QWlSandpVkdFMklzbGRXWEZhM0FNQkxGNGFYTHRTSm12ckRhTWpCWmpFcHFmM0ZOSmc3ZkFTWU9tck9Ba2RsaHh2SUJvZG9LQUxXQXY3SS94MG85NE5GNERpd3NMTGdpYzNMVU54RkVyVWNsZFAyZnhhOGhrektQWEo2a0pCUHBEbjkvZ0grQzRRTGtHNDJ5TlhSQUFBQUFFbEZUa1N1UW1DQ1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2dvYWwtNTBlMGM1ZGQ5MmUwYWZiMGQyOWY3NDllMTdiZDdjOTUucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRUFBQUFCQUNBWUFBQUNxYVhIZUFBQUFCSE5DU1ZRSUNBZ0lmQWhraUFBQUFBbHdTRmx6QUFBQnV3QUFBYnNCT3V6ajRnQUFBQmwwUlZoMFUyOW1kSGRoY21VQWQzZDNMbWx1YTNOallYQmxMbTl5WjV2dVBCb0FBQTBHU1VSQlZIaWM1WnQ1ZEZSVnRzWi9PL01FU1VoSWdFQUdFZ1lGd2lnUUJzRkFVQkFEUmtFUjJ1ZXpJUTRnT0QwUnUrMldwNzdYMEEzU2lKMEdSWnBKVVNFMGtFYWUwQWkwSFF5S0VNSVFFaVNFUEFoa2dFRG04ZlFmdDZxb1ZOMUtLaVF4dVBwYjY2NnFlKzQrKys3OTNYUE8zWHVmS2xGSzBaWVFFVTlnRVRBR2lBU3VBRDhBSzVSU0thMXVnRktxelE1Z0tQQWpvSFNPR3VCL0FjZld0RUhhYWdTSWlBOXdDdWdDRU5VdmdtRjl1cE5iVUVUU1AxTXBMYTgwaXI2dmxKcmZhbmEwSVFHcmdYaUFWYS9PNHRtNCswelhzaTRYTU8yTkR6aWVjUkcwMFRCZUtiVy9WZXhvUXdKeWdLNFBqUjdBOWlVdldGM1BMYnhCdnhtL3BxaWtEQ0JaS1RXeU5leHdhQTJsalVGRS9JR3VBREZEKytqS2RQYnpaczdVTWNiVEFTTGkyQnEydEFrQlFEbFFCNWpQZFN0RWRBMHdmdlhBUUZoTG8wMElVRXFWQXBrQVcvZC9UMjFkbmE3Y3lSOHZtWitPRVpFSFJXU3NpTGkybEMxdE5RSUFOZ0ljVGIvQW9nKzJZcmtXbmZ2L1BOYnVPbVRldEI1SUFyNEdMb3JJWWhFSm9KbG95MFhRQ2ZnV0dBd1FQZVF1NWswYlIyYy9INUxUenZIT3h6dTVYbHpXbUpvaVlMNVNhdU50MjlHV2thQ0loS0E5MWI2MlpGemJlUk1SRTBmdkJ4L0gyY09McklPN3lUcjBKWG1uZnpBWCt5dndqRklxcjhrMjNBR2hzQlB3UExBWThERy9OdWpKQll4K2RRbU9MdFpUL3Z5QkpQYStHVTlwZnE2eHFRQjRYaW4xUlpQdTM5WUVBSWhJS0xBTkdBVGFVNy8vZjlZUkVmTndnLzBxYmx4ai85c3ZrSjcwaVhuelo4QmNwVlNoWGZkdWF3SkVKQmI0QytBTEVOaG5NSk5YZkk1M3QrNTI2OGpjbThpKzN6NUwrYlY4WTlNVklGNHB0YXZSKzlzaVFFVGFBNjhBSTlHeXRDemdPN1FzN1p6ZDF0bTZzVGIwZjJlNEJ3QURaczVqek92TGNIUjJhYksrOG12NTdIdnJPVEsvMm1iZXZCNXRXdGhjVFhVSkVKRXh3QVlnV0tkUEdmQ2FVdXFESmx0NVMzODN0S0VhQmVEaTFaNEo3NjZsNS8yUDNxNUtFNDZzK1IzZkxGOWszdlE5RUt1VXl0V1R0eUpBUklLQWt4Z1dwQkdSRVF6b0VjekZxNFY4bFhLS3F1b2FvK2hrcGRUZm1tcWdpRXhDSTljUElPRHVnVXhlOFFVK3dlRk5WV1dGaTRmL1R0SkxqMUZSWkRYOUx3Q0RsRkxYcmV6UklXQUhFT3ZnSUd4ZS9BelR4dDFqdW5icS9DVWVXTENNM01JYm9NMno4SWFHbDRWZVIrQWRZQ0VnQVAxblBNZllSZS9wcnZJb1JYYnlYazU4dG9iS205ZnBPMjAydlIrY1lWUC8wWFhMT2ZTSDExQzF0UUFNR3IySTRxSUxaS1o5YWhUWnFwU2ExaUFCQmlOTEFMYzVVOGFRc1BCSnF4dHQyWnZDck4rdU1aNk9WRW9sMitHOEsvQWxjQitBaTJjN1l0NytrRjZUSHJPU3JTZ3E1R1RpT2s1c1dVM1J4ZnBMVFkrWU9NYTlsWUNIMzYwQXNLYWluSzkrUGR2MEpuQnk5aUI2NmpvaStreW5wcnFNYlI4TnAvQnFtbEg4RWFWVW9ybE95MUM0TitBR01IN28zYnJPakwrblh2WTJzRUhQQVJFUllEa0c1enYyN3MvTXhLTld6dWNlUDh5ZWhVK3krdDRnRGkzOUwzUG55OURlOFdUdVRXVDk1RDVrL045V0FHNWV6bWJMRXlOTnpyZnpDU0h1bC84a29zOTBFeGtQUEphSWk1dTNVZGZ6bHZZNVdaeDNNSDd4OC9iU2RjalAyN1BlcVk3RHpzQUR3Q3hnSE5wYTRnZ1FkdTlFSG5vL0VTZFhOd0NxeTBvNHMyc3pxWjhta0orZWFxbnFOUEJudFBYQ0NmZ0FlS3o4ZWdGSkM2WVJIaDNMNVdQSmxGOHZBQ0FvZEN6M1QvOENOdy8vZWtxOE8wVFFLL0lYcEIxWkJSQXRJbUZLcVN4YkJCd0RxZ0NYekp5cmpCM1UyNHFBekp4NjBXYW1tZU1qREU1UDF5TUdJTER2RUJ5ZFhTaklTQ1AxMHdUTzdOeEVWV214dVVnVmtBajhXU2wxMEtMNzR5S1NDUHdKOFB0eC8wN1RoYjVENXpMcWdSVTRPRmk2bzZGVHR4RkdBZ1FZZ2ZaS0J5d0lVRXFWaU1nM1FQU0hPdzd5bjVOSDQrUllmNVlrYkt0WG1Tb1hrYmVCbVVDWStRVTNMeWVHVE95S2c1TUQzMjdQcHFxaWxtLy85RGJITnIxUDVjMGlTeHN2QUd1QXRRM0Y4MHFwejBYa0lMQWFtQUxnNXVIUGlKaWxOcDAzRW1DR2VuYnE5ZG9KUlArUW5zM1UxMWJ5M29zejZORXRrTUliSmZ4KzA1ZXMydnAzYzludDVpZU9UZzcwRzl1SnFFZENHRGdoQ0JjM3JZaVRuMTNDbVdUTkx6UG42NERkUUFLd1J5bWxYeFN3Z0ZMcUtqQlZSRllDTDFTVUZYQTgrUThNR2ZNYm0zM2ErWVRnN3RtUjh0SjhzSWh0OUY2RERtaHpiNDZ4emRQZHRlSEt6UkIvb3VKQ0dCWWJqSmZ2clNpdXRxYU9IY3RQc2ZPUHA0MU5wNEF6YUZOdHMxSXEydzZmZFdGNFkzME5qSFoyOFdMMjYwV0lnKzJxMmNZVm9SUVhaUU9zVjBvOVpXeTNHZ0dHSnhFdklxWEFpNkJmdHVvYzBaNm91QkNpSGc2aFk3Q24xZlZMWjIrd1puNEsyU2ROc1VjV01NYmVKS1V4S0tWcVJXUXpNTHE2cW9TaWE1bjQrbXRyVnNHVlZDNmMzVW1mSWMvZzd0bHd6VVIzNG9pSUg0Yk16QnplQVc0TW14TE1pTGhRUWlOOTlRMnJVK3haYzVadFM5S29xVEtONm1QQTR5M2x2QmtPRzc5Y3U1cG1JdURBcm5qeUxoMmh1cXFFcUpnbERTcXdJa0JFN2dKMkFlRUFicDVPREo3WWxhaTRFTzRlRllpRG85aFVscDlkd29jdkhTRWp4WlNWMWFJbFBJdVZVdFZOY3MwKzNEUitxYTR1TlRXV2wxNEZvTXp3MlJEcUVXQ1lWMGxBZDRBSmMzcnk2TUpJWE53YnIwZ2YyUFFqVy83N09CV2xwbHdoQTNqeUo5bmZhd1lzUjhBVURNNC9zckFmRDgzWGp3Yk5VWlJYenNldmZNZUovYVprUzZFRkxRdnR6UlBhRXBZRURBSVFnVkhUdzNURTZ5Tmw1MFUyTERwS2FWR1ZzU2tIZUZvcHRhOUZyV3hGV0JJUUJOQ2hpd2UrbmR4dGRxb3FyMlh0eTBkSTJYblJ2SGtqOElKUzZrYUxXOW1Lc0NSQVcrSEU5a0lIc1BmakRIUG5DOUFxc29rTmRMbGpZVHQrYkFDNW1hYkZ0eERvYTRqT2ZwWm83czVReWMvWmVXamJyYkU3QXJjMUJmUWdJbUdBTjNCYUtWWFZtSHd6N3RNRGVBU3RjR1BhU01sSy95dkZSUmNBcUt6UUVxN0NLOGY1N3NCYjlkb3MwVndDdkVSa0dUQUpyWm9FVUNVaWU0RG5sRktYbTZtL0hrUmtKbHJhN0dGNUxTdDlCMW5wTytxMUZWeEpwZUNLVmFHbEhwbzdCZnlBbDdubFBJQUxFQXVjRkpGaHpkUVBnSWk0aU1ncVlCTTZ6amNIVFI0QmhaZktPSjk2clJaRG1VdkVnYkRlVXdqdEZZdWJld2N1WkNSeCt1aEhnUElGTm9qSUFLVlUrZTBhYU5oRCtBSVlCdUR2N2NybWhVT1pNRGl3U1hwQ2Y3R2I3RHpyd0xSSkJCejg1RHdiZjNXMHFxYXF6Z1hBdTBNNDBWUC9RdWZnVWJkdTFDdVdnQzczY0dCWFBFQlB0THJDeWlaWmE0Q0l4QUNmQVA0QVEzdDFZT3VidytuV3NlVUdnUzRCeFlVVkpEeDN1RjViNGVVeXpuMWZBT0FDUXQ5N25pVXE1dmM0dTFqWEF1NGVQSWZVdzh1NVhwQU9XZzJ1U1FRWUtzbS9RdHN4ZGdCNC9xRnczbnUyUHk1T0xmdmkwaVdncXJ6V01zdzF3Y3U3Ry9mRnJxVmJlRXlEaXYwN0RUQVMwTDhwQm9tSUwxcFkvU0NBcDVzVHF4Y01ZbWEwM2k1ZDg2RkxnSU9ERSswNzFOK3FFbkVnS0N5YTRkSHZtdGZaYmNMQnliVGJZenVwc0lDSURBSzJZaWhjOXVyYWptMi9pYUpQU0h0N1ZUUVp1Z1I0dGcvaWlYbnBkaW5JUExtRjdJeS8wYlBmRXdUM21IamJob2pJTDRGVkdEWm1IaDNkbFk5ZkdVSTc5OGFYcVEzN3NubDVkU29sNVZvdElzREhqVTllSDhxb3Z2Nk45R3hHSEhBOS96U0hkcy9qVXRiWEFCUmVUYjB0QWtURURhMSs4RFNBazZPd2RIWWtMOFgxc0Z0SFVrb3VoVGR2eFY0NStXV3MzNWQ5V3dTY0J2RHRhTHNRVWwxWnpIY0hGM01pWlNWMXRiZXFYRldWTjIzMjBZT0l1QUJUMFJhN1NJQXVmdTU4OXNZd3V3dzN4OUxaL2VnWDZrMXBSUTBKU2VlNVdWWk5kWTFkVlhZckFwWU5IL2VPWDcraDgxL1RFODVNKzVUa3IxNmx0TmdVNE5XaVpZUjIvMXhOUkNMUVhvMVBtZmNiRzltUkxXOE1JOURYelY1VkpvUUdldkxtekxzQTJISWdoNXRsOXBjZkxYZUdhdWN1NW95bGtLcXJaVi9pTERKUGJqRnZQZ3pNQlJZQS85SFFUY3llZGp3UWpiSHVnQmJZeko4U3dSc3pldVBvMEhBZG9qVmcxeHB3OXNSR2MrZnowUGI0MXl1bGxEUlNQRUY3eWpsWWpKTDcrbmNrZmxKM0hoNFpoS3R6MnlXbGxsWGhnVjd0Z2hZTmoxbEN6OGlacHZZck9hYWZBT1FEdlpSUytxa1ZVRnRUd2JsVG41T2IvUTlqazd2aG9LTzNLMDlOQ0dYT3hEQjZCT252UHYvVXNCd0JENWNVWCtwNTZ1anFlZ1RVMXBwVzJESmJ6dGRVbC9ITm5oYzVtN3FCeXZKYnYwUVJnZWdCQWNSUDZzN1VFVjFhUEpLelJJQ1BLOWw1WlFUNDJMZVdXQkt3cWx2NCtQNVI0NWZHTnZYRzVhWDVuUGoyajZielFGODNub29KWWM2a01NSTcvM1JQZS9XQ3dXeFB2c1M4MkFpNzVDMFh3Ynk1aTltT2xzNDJHU0l3Zm1BZzhaUENtQkxWQmVkV2Z0cDZHQmpodzhBSW44WUZEV2l4aXBDL3R5dEhWa1lUMXNrNk9icVRVZThSaWNqWUQ5OXR0K3g0OHJJbUsvSjBkYndqbkYrMkxZUGdXYnM1Y0NLL2NXR3NLMEt6cXF0TE9wejZQcUhsTGZ1SnNQdklGWEx5eS9oSFdvRmQ4cFpUd0FtZ3JxNUdSL1RuZ1hXdkRHSGZzVHltMzJ2ZlAyeGFiQTI0VXhBYzRNSFQ5NGZhTGY5dnZ5L3diMCtBN2hTb3JDZ3liU2lBdHNIUUdJcEtxM2xyNCtsRzVkb0tSYVUyTWtTTFB6Ti9oUDRmbVkzSE9aMC9RRGZXNTA0N1BqSzMzM0lLYkVKTGVQUlFpZmFiUGtzMDFPZE9RejZhdlNiOEM5N0xicDNQUW0rR0FBQUFBRWxGVGtTdVFtQ0NcIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUVBQUFBQkFDQVlBQUFDcWFYSGVBQUFBQkhOQ1NWUUlDQWdJZkFoa2lBQUFBQWx3U0ZsekFBQUIyQUFBQWRnQitseW1jZ0FBQUJsMFJWaDBVMjltZEhkaGNtVUFkM2QzTG1sdWEzTmpZWEJsTG05eVo1dnVQQm9BQUJIeVNVUkJWSGljN1p0N1hKVFYxc2Uvd3pEQU1Od0Z2Q0FnS0hvc2ZVTkY4aHFvYUpxZzJFV3p6RnRtaVVwMThoeFRPNVpXYW1XdmVmZWtyN2ZzSXQwb3NVeEJ2RlFXVVdBcTFFRlJMcGFKY3I4SXlPejNqejNQd01BTXpKRFZQK2YzK1R5ZmVXYnZ0ZGZlYSsyOTExNTc3ZjNBZjlFdU9BQnZBTVhBZFdDZEllM1BnaHV3RWJob2VEWWEwdjQwN0FSRXMyZm5uMVMzRC9Dam1mcXpnYzUvUmdObUFFS24wWWl2NWp3Z3ZwenpnTkJwTkVvalp2ekJkZnNDWndEaEh4Z2szdGk2VzZ6YnNrdjRCd1lwOVo4eDBDandSSGJNTmVSSVdRcW9tekswczdFQlBWV3dDV0J6VENSREFqb3pOS0F6MjJOSEFhQ0NMY0J0dHN2VlB1aGNYUEhyR3NEeWw5YmlIeGdFMEFkSVFTckJGemdCekFJNkFOMkFsNEhGVFhuWW9nQXRrQ0RBWlZhLzI1Z1IydHVZTWJWdlQyYjI2NDBBWnlBQitmdEg0Q3B3TDFCVmtIZVJsYzh0b3F5c0ZIZDNEM05LU0RHOG4wVUtIMjNnTWFjcFE1VU5sZThDWnQ3dTI0RzB4NmZnckxFM3lheXB2OG5nN1FtY3ZuSk5vWjF0cTNSdG9EZXdFSGdFY0ZFUy9RT0RXUDdTV3R6ZFBTZ3JLMlhsYzRzb3lMdW9aSjhGUmlFVkIzS2FRQk81clIwQlU0R1pPbzJHaENualdnZ1BvTlhZa3pEbEhsd2ROQ0NIM2Eyd0IzWkFESEFZT0FmTVU2bFVMdUdEaHJEcTFYVjA3eEZDS3lQQktsZ3pBbnFxNEhzQkxydnZIVzB5OU0xaGQwWTJzejQrZ2dxcUJRd0VzdHJnNzR2czJXZ2dCTkNaSTlJNk96TStlaUtUcDA0ak9MZ0hBTVhGMTVuMzJBd3VuTTlwYlNRMEhRVXRSa0JiQ3RBQ3A0QTdtbWVJbGZFbS8xWExONWdyZnc0SUI2b3Q4TDhmYWFWZFcyMkVWc3ZiK3hNSkNPeldJczlHSmZ5bU5KZm1MeGF3QzVocExzTktCUURzUms2SjVyZ2ZhVEJWNFNFK1RBd1BKS1N6TzA2YXhsV3FyTHFPNTk1Sko2K29rdUR1SVd6YnNRY3ZydzR0R05tZ2hENUtjMm4rWWdNRXRLb0FhM2o2QXVjQjErbVJJZHcvMlBLY3ZjVkthTkZHVy8yQVc0V0ZnR3Q0aUUrcndnTzRPenZ3MGtOaEJQcTRrSHNoaHlmbXpLQzQrSG9MT2krdkRtemR2c2Rtdy9oWEtTQUdZR0o0b0ZYRXQwSUppNTU5d1N6dnYwb0J3UUFobmR5dEx2QjdsV0FKN2JFQnR3SkZnUGVhUjhLNXJhdUhUUVd0dFFsSERuL09rbjg4QldBYy9rM3N3Tzh5Z3JjQ3J3R0xyQ0YwMHFnSjZlSk9iSGdnQTN2NEFOWXBZZjRUcy9uMjFGY0FWYlQwTFg2WEVReEZiakpxYWR5SzFnTEhEWG5XWUFud3FqV0VOK29iT0pOWHpJdnZaN0R2K0htZzdlbHdNZmNDYWQ5OERWQUo5RWY2STJmTjhiZDFCSGdBT1lDM2hmeHJTRy9POHFRemhRQW96VXl5U0hDbHFKajNrbzd5OHBaOTFOZmY1RjhQOUd0ekpLeDUrUVUrU0hnWFlDc1FSK01XdVlVajFOWUlHSVBjUHNZQTlzRFRnUGRkb2M2VUpmZENuT3FOT05XYnN1UmVETHZER2FSaS9tNmduV0FvTzhaS1paaEZKeDh2bnBwMVAwdm5QUXpBSjJsNXhqeHpJeUUvN3hJSGt6NEJxZHlOQnRLck5HNklUR0JwQkRnQWJ3R1RtNlRWQVE0cUZSemRGRWhrZjlNZDc5SDBLcUxpOHhIUzI2NEhORTJ5RTVDN3VMcG1kZXRWS2hVbEdRY3N5Vy9FbGFKaS9qWjZPbG9IZS9ZL005SWtyK2xJMEdxMTFOVFVBQnlocGZLdDJnMDZBTzhEa3oxZDFjVGQ1OG50d1k0QURoMjk3Tm01ckVzTDRRRkdodW5Zc2JRekhiM3NBVFI5Z2gySnU4OFREeGMxU0VXK2oybmNNQkJrRDFzRGhhNm03bWFMUEhkbkIxWThPRURtUytHaHNmZGJSY3Q5cmV6NUNSM2MxU1J2RENBMHhBbUFpbW85T2ljNzdGcVpOTE9qUFpnZDdVRkZ0UjVYWjBuNDJFUVBvaGJtYzcyc1lZS0I5eFFEZVR6QTBBRjl6RE5yQmE5OGZKcUg3K3BCMXc2TnhsMXRaektZTHdBSHJlSFZmQXJjRFJ6eWRGVnpkSE9qOEUxeEpLMktoSlJ5VG1aV1UxZ2tlOFBmMTU3aG9jNU1IdVZHMU1DV3U5bk1uQnVNaU11bnRMSUJZRFJRRG55dHRyTlRIMzl2UFgxNldyZC85eHR5UDFYVk53QndjZEtJVjZhSHEvd05Tc2dxTE9YWnQ5SkFHdW5Gd01kbVdMUTVCZTRBZUdpTVd3dmgvNU5mUjhTOFBNWThtYytPVDB2NU9iK09xaG85VlRWNmZzcXJZL3NucFl5T3p5Y3lMbytjZ2pxVHNxRWhUa3dkWTR4YWh3S3JBZlhDR2ZkYUxUekE1YTgvSU9mb1BpWkVEYVh5UnIzcXJXTTV4cnpzd2hMbDliZ0Y0YzJpdVFLeUFJNW5tRzdmVDJSV00yak9KVTVrVnVQcjVjeUsrQ0Y4Ly9IRGxQMHduN0lmNXBQKzBVT3NpQitDajVlVzR4bVM5bVNtS1k4bVBMT0JRUUFMcGsreXRwMUcrSGg1c0hiSlBBRE9GUmlGNW1UV0ZlWDFjd3RGQnpSNTc2KzhORmZBSWFEK2JHNHQxVGYwZ096NTJIOFdVbExSd0gxM2gvRHo0WmtzbXhmT0hYL3pRYWZWb05OcUNPM3R5N0o1NGZ6OHhTd21qZTVCY1hrRHNZc0xPVjhvUjBKRnRaNnNpN1VnVjRFdmdFS0F2UjhkcGtHdnQxa0psZFhTME5tclpmTlBYeW9tOTdjS2tJYzA1aFRnQWpSMU5wSXdlSWRORmVBQkxBYzBIYjNzMFRvYWpOanFYNDNDdjdkdVBLNDZCNUpTY3hrMTR3UGMrMi9HdmY5bW9tWit5TUZqRjNGemNXRC9HK09OU3BpNzVsY0FkRTUyK0hyYWcxd0Yvb1VodEw1eTR4N0NZNSt3V25BaEJOOWtadkhvWXVsRUR1enV6YzBHUGJ1Ty9xeVFyQWRxekJTZEJYUUs2OXVSc0w0ZFFSNmdtQVJwUXBGZW5GQ3BFRHVYZFJiaVZHOXhlSDJBQUlTdmw3TW9TWThUTjdPZkVzL09IZGo4Uk1iNExIMGlYTnpNZmtwY1Q1c25mRHkxQWhESkd3T0VPTlZiN0ZqYVdhaFVSdHFyd0F0S3VkTE1KS3NldjA3ZXhycjhPdWpFM3ZoSUVSTVdvS1RsWWprY2Z4UVE3L3p2UGVMdDE4Y3A5Q25RT0FJMkFCMkczZUZNeXNaQVprWExIVnBDU2prQTg2ZUZHbnQrelp2ZmdSektpd0Uvdy9Nc1VMZHFXeG9IajEzRTNkV1J1R21oSmp3ZWpmRWdlVU1BdzBPZFFSNXZqVUJ1VkxoU1ZHeWgzYWE0TEVQdVRCa2F6TnJwZDNJb280QUQ2ZmxLZTZaak9mYllIMkJvL3k0TUcrQm5rcVlvSUJ6ZzRPditqQmpRcUVURmtNV01rSlo2M2U0ZmxLemx5TTNNTDRibkZlQjVnRGYyL0dCUzVrUVRnem95VEVmU1duL2w3NTFBR3NDN0IxS3NVb0NDU1hkMjQ4MGpQL0hPeVFzQURjakRqaTliS1ZJRmNLbXduSXVGWlNacGlpUGtDT0NtTTdXSmx3M3JmSENBSEJIZm4xWDJFdXcxVThrZVlIWDZHVW5UM1ZDbThLcXA1OWFrRGtkZ0JUQmkxZGEzQVpnYU04b3F6ekR1emE4b3Jxd0YyZU96Z2YxdEZOa0xQQnN4TGFGNW1sbFBzQVdFRU0yVHpPMGg3QUJVS3FXTUliSDE3ZFp4WUZsOS9jMlhWbXpZbzFxeFlZOVpvdWE3UllQd2FVamh6N1ZhZzhUemh0L3B5UG0vRjJtRGpGT2dGcUM4eW5SSjh2T1Irc2t0a01NbXJHOG5KV3U2bVVxbUF3em8weEdBQy9tbEJoNGFFNkt5U21NZHRZYmZWVWdQMVBLZXVDVWVBUVpqbmZBZ2JjUVNwTDNxaWp3bHJvTkdCWHdMRUwyb2dLUHBWY1pTZC9XVDl1QkFhaTRBVDg4MCtnOHJrSWF2aTRIcEVnd2FWV2lVTW5lRk50cVU1TytxR1A5TXZ2TDMyeVlOUElJaFVBcXl4NXMrWnJBUHNOMkJNQU5GQWZGQTBjbk1hcUxpODltWkpIdHY4aWpwdm01K0s1UHl5anJHUndheDlJbHdrT3Y1YXVBeTBxbFpCVGdzbXhmT1BSRkJsRlhVc3VYdDB3WWU4dEJueDZmU1ZmN3F4eHFRTVVIVGc0Vy9DSW9DVGlNak9TdUZnS1ZiaXhBQ29nYnFpT2puVEZGSkRZOHVQWXhlTDFqNTVCQSsyVHFSRVlQOGNYSFc0T0tzWWNRZ2Z6N2ROcEVWOFVQUTZ3V3pseHptV2trTkk4TjBqQXpUb2RmRHNtMUZTcDByRFhXZEJzS1E4L01MNUVFSkFEL2xHa2NKRnRKK0JqNHdsTDM5OXlpZ3VUR3pSeTRQRGxXcHZYQjJzaU9ub0k1QmN5NVJYTjdBcE5FOTJQSHlhTnhkSGMweUs2dW81ZEdsUjBoTVBrOEhOelhmN3V4R2R6OEhLbXYwdUk3OEdlUzhjd0VtSWFkUVAzTjhuTFdPckYweWo0Y21SQUh3enFmSkxGcTlqZXFhRzViaytBNjVMSDlnay9TMFZFQTBjS0JQc0NObjNnNDJKcDdNckNaMmNTSEY1UTE0ZTJxWlB5MlU2TWdnUXJwNUlvVGdmRjRwU2NjdXNubGZKdGRLYXVqZ3BpYngxYTVLbUF5QVBnL25jaTYzRm1UdjlRSnc4bktuNjRod3NMUGovUHRmNEJzUmhzYmRsY3VmcGdLWUtBREFiOElJNnNzcXVIbzhuUjRQM0ExNlBZV3BhZHdvTnE3dGg1QXhRSk56TUZ2d1QwREUzZWNweEtuZUprL08rOTNGaUFIT0Z0MWc1UmtacGhQblAramVvdnlDK3oyTk5GcHZUekZ3MmVOaWF1WkhZbHJXQVRIaDREWUJDRWR2VHpFMjQwUFJkK1ZDb2RZNkd1blZUbzZpNzRvRlltekdoOExSVy9LWmNIQ2JtSloxUUV6TitGQU1YRFpYT0hYd1VPaUxrTWZ5VnFINUtwMEo4TzdoY2pKelRJZGJqNjRPSE4wVVNQTEdBT2JHZXRDN215TXVXanRjdEhiY0Z1VEk0N0dlcEd3TUlHVmpBTjM5VEcvTWZYTzJocDFKc3BmOElnWXlQbkVqdlI2T1JpMHZVK0FXNUlmV3g0dmFheVZVWGZvRm42SDljT3JZR0hoMjZ1U056N0QrVkYyNlRPMjFFclErWHJnRlNaZFc3ZWhBcjRkamlQNWtFMTJHRHdEd1JrVXFjSmMxQ2pEbjBPd0hKbnU1cVVYS3BnQ1ZFaGdwcjlMam9tMDlKQWFnMTBQVmpjYVFXR2JPRFNVa1J2ZEpVUXg2TVI2VlhjdHF2MXowR3BjK08wRkkzSVA4K3NWWFZGNG93Q05FbmgyVzV1VGgwaU9Bem1PR2tMUGxQYnJkY3hmRDF2NmpCUStoRjV4NmJqMjVpU2tnUStBRGtDdVZUUXBRZ3FJVFBGM1ZUQjNqeHZHTWFzN2wxdUxyYWMvcU9COW1SNXMvenRyeGFTbkx0aFZ4dGVRbXR3VTVFdG5mbVhjUGwxTlMwVURYa1hjU3NYNHBLclY1RGVZa0hPTGJGelliLzN1RUJCSzE2MlVBa21jdG96U25NUngrNXd2ekNaazgxaXdmMGFEbmVQd3FDbE8vQlhtQUUwbGpLTXdxQlNoS3NCZ1dUOTRRd01ndzA5aGZTbm9WVVF2elRXaVZQMW9mVDZJVE4rSG9LZjBLb1JmazdQK2NuSVJEbEY4c3BLR3UzbEw3V29YYVFZTmJVRmRDcG93bFpQSTQ0OGk2VVZ6R3dkaUYxRndyQWJuaUpGcmtZU0c5QWJta2ZJMTBOOWNqL1c0VkVKSDdTejMzUmJyaDVDQXJMS3ZVTTNmTkZmSi9xd2ZwSlk0RnZrY2VqamdNWFBZNFB2MTZHNFUvK2ZkWHlOcjFFVGV1bHlJYTJ1L1FpUVk5TjY2WGN2bDRPdVVYQ2dnWU14U1ZTb1c5MWdrSFZ4MkZxV2tnN3kzKzJ4S1BXMzAwZGhYb0NaUWhIWlN6emgyOWlUMjhIVHZEemJML3ZQc1phUzl1eGRYTmpjVkxsak04WWdRNm5Zc0ZkcTJqcXFxU0U4ZFNlWFhOU2lyS3l3bC9QbzZlVThZQjBGQlhUK0tZT2RSY0xRWnBDMzR3eDhQV3c5RlNaRmo3QkthblBIWEluZDFvcFBBZ0x6UVNjUGRRby9BZzV6ckE0aVhMR1h0UFRMdUZCOURwWEJnM1BvWi9QcnRjOHQ1L3lKaW5kdEFRT0dhbzhqZTZaV21KOXB3T1p3SVJ5UDI4eXZBNElvM05qMDNvb2dBNkR6YTlZRlorU1JybDRSRWpMRlpRWDEvUGhqZGVZK3lvWVl5TEdzN0c5V3Vwcjdkc0o0WkhSRXJlRnd0TjBqc05OaDVXUjFvcWExVThvSjNvQ2VBZTdHK1NxSFowb0tHMmpycTZPblJtYndUQ3RpM3IyYnRyaC9IL25wM2JVYUZpd1pQUG1LVlhsS04yTlBVLzNIc1k2L2JEQXRxakFHdHZpWGtCT1BsNEFyRHZ0aGdUK29MOFBEdzl6VWQvUGp2d0NRQ1QzazVHQ0VIaXRORWNQSkJvVVFFRmVYS0pyQ3V2Tk5Zekxlc0FXbTlQaGFTTEpXSCt5RHRDMHBYVW0xK0NDd3RhN3ZpYVF3aEI1LzZEV1pSVnh1ZkpKeTNTRlJUa21VMXZzc0pZWEdyK1NBVmNBTGgrVmg1ZlRjczZ3TFNzQS9TZDl5QUErWG1YTEJZY0h4TUxRT0swMGVob1lOak4xdTliRk9STEJmU2Q5NkN4SG9EcjU0dzc3UFBtUy82eENrZ0V5TjVqNm9PNEJzaVBPdkx6emZjYXdPTng4Y3ljUFJjZkgxOGVyTDlDVjJGeEcyekNTK0d0SUh1WDhZalE0Z1dFdGhTd2k1WTd2cmFnMEswQUtFeE40K3kvRzZPeFNpTUxMUXhiQUkxR3c0SW5uMmwxMkRlRndxdXBBczVzMjgvbEUra2dsK1ZObHNxMlpRUVhJTThNMnZzVnlHV2dVK2I2dDlSRnAzK2k5NHhZWExySTZ6b0YrVzNiQUd1aDhOSjZlM0xsbTlOazcwNVVoTmNqN3pwZnMxVFdHay93ZG1RQVU3ZHIwbWhtOXJQcHVudzRjam44UCtUM095WTRjdXlVeFpYQVdwU1VGRE02Y3JDNXJETGsrVityUitYVzJJQnp5SkhBZ3FSalpMVnlqSlZWVk15Q3BHTUFDSmh2S1BzeFVna3JnQXlnUXFFdmFNVU9XSXRtUENxUUx1OUtvQWRXM0JQNHF6NlplUmQ0MElhNnJjRjd5QzliYklJdHE4QUM0Tnk1cTllWm41VGFJak11S1ZVUi9oenlObmhyeUdranZ6MW9GMDliUE1FcVpId2diWGRHdGk0eXFLdng4NWs5bWRuc3pzaFc1djFrQTIxcitCN0F6eitBdFJ0Mm9GWmIycFczam9hR215eGErQmlYQy9NQjB0dkR3OWFhaTVDV1BmYkkrUUlpZzdxU1gxYkoxSVJEMU11YkhvOEJ5VmJ3dVFROFZGRmU1cG1mbDB0d2NBZ3VycTZvVk5iTlNDRUV2LzVTeUp1YjF2RlQ5bG1RVHRmVHlEakduNEpiOGVucy95QXRkWnVSNWphZVVxRHY3NUttSFhCQWZqQjlIYm5Hdms3N1BwN3VnalNZdjJHNzRMOGhsMWVMRzUzL3dncjhQeFkvWTA1MnI2QVdBQUFBQUVsRlRrU3VRbUNDXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFFQUFBQUJBQ0FZQUFBQ3FhWEhlQUFBQUJITkNTVlFJQ0FnSWZBaGtpQUFBQUFsd1NGbHpBQUFCMkFBQUFkZ0IrbHltY2dBQUFCbDBSVmgwVTI5bWRIZGhjbVVBZDNkM0xtbHVhM05qWVhCbExtOXlaNXZ1UEJvQUFBMEhTVVJCVkhpYzVadDNkRlRWRnNaL001azBRaElJS1JCSVFpVEJCQkNVVUtJZ2RWRjhRV2syUUJGUW4yWDVVQ3pQc21UcFU3QXZ5OFA2YkNCRlJRU1dVZ1I4b1NrcW5VZ0xSUklDQ1NRUVFrS1NTYWFjOThlWmMzTm5Nc2xNaWhOYzcxdnJyblhQdmVmZTJkOCtlNSt6OXo1M29HVVFBandKN0FVcWdBdkFlbUE4WUdnaG1YeUdCT0FnSU9vNEZnRW1Yd25qNTZzZmNzQWYyQWowQUVpOUlwYmJScVdUbWhoTDN0bGlLcXVxQVhvQ1FjQ1BQcGJOSjVpQlk2VHZuVGhVVk8xZUlPeFppNFE5YTVISXozeFBYSlVjcDZ5Z0N1amtDNEdNdnZnUkhjWUR0SThNNTUybnB1SnZxakhBOXBIaHZQZnNOTlVNQURKOElaQ3ZGUkFQa05ZdGthQkEvMW8zMDNzbTZaV1M2QXVCZksyQUFvRDh3aEszTnd1TFM3RlliYXBaNWd1QmZLMkFuUUI3czNOWnYrMzNXamRmKzJ5VnZyblpSekw1RkRIQUpVQzBiaFVrWG45c3N0aS80bFd4YmRIellzYjR3ZnFsY0dPTFN2a25ZUWp3RlhLR3J5c0dFTUJKSUtsbFJQeHo0QWU4QXRpcG43Z2RXSTRNbE55aEo3QUN5QUYrQm03OU00VnVMaGlCTDFBa2c0SUZZNmNLSHBrcm1QcUlvRU9jWGdFbmdLdmN2TU1FUEFXWXFhMnd1MzNBb2RFd0FCK2dCTzdjVmJEbWtHQm5hYzJ4clZBdytoWTlLVFB3TlRBVnVBVjREbjNZN0I4Z3lKZ2tpR3l2K3AvbU1zMGRRb0dsS01HTlJzR3luYzdrMWJHOVJERHRVZG1uUGhkSjdpRll1RVUrODlEeitudGh2aURVa09Ta0gzQUl2ZkRwdzl5VDF4OWZiQktNbUNBSWJ1Vk1QRDVKdXN5djUyVy9MN2NKMm5kUzkwL1JSQXZ3Uk94cTRDT2dEM0FNZUJqNG9ZNitYWUFYZ2R0ckNaVSszTE1rM1hyRHkvUEJhb0g4azJDdWdLZ08wRFpTM3JkYTRJdTM0Y081VUYybG5wcURWRVNqVVovMjBvRjFPSnVZRGJnRHVaeUJqTmtuQWRPQlFkcjdnb0xoaWxRNHVGdjJXcndWcnV6Vk9BbUxpK0NIYjJESnUzRG1sTHBxQVdZRHJ6YnVwVFdveXdMU2tTTWRaalFZdUc5Z0Y3NzRMWWZ5YXFzZk1sOEh5QUxXb0YrMkRBWVlkVFBNZkFIZW1TMFZFQjRCeWU0bWR4ME83SUx2RmtIck1BaHJBK1ZsY080TUhOb0x4dzZBY0Jya1E4Q2R3SzdHRVBZRzZVQUpJSXdHZy9oMFNqOGg1dDBtTmowOFRJUUVtSlR2V1lGOGxKOUd4d3BtUEM1WXZrZjY2WTZMZ29ob2VXLzRPTS8rbjVCYy93UW9qd1BBTktUVk5SdGNMYUEvY3VURGpRWURIMC91eTR4MG1aUU5Ub3BpOVFPRHlQaGdpN0tFRGdEOC9XbTQ1NTlnZEdSeFI3TGcwemVndUZDMit3NnFYNEpEZXlIM3FPdlZLcUFJT0E1a0lvc2p2OUJFZjNjSHZRTDZJMzArSE1Cb2dKQUE1NEtSaXhMa3hkWmhVSFlSTnErR3RVdGg1eFpuayswN3VINEoxbjJqenV6SWRQa2lNbC93Q2RRa3FKRTNHZ3dFbW94VVdteVlqQVlXM1pYTytGNmRXTG83ai9UTzdVaUthczNtWTBYT1NxZ0wwUjFoemFHNjc5dnRNS1liRk9hRFRJQ0dOUWVwaHVJcWRENy8yWlIrWXVQTW9acS9tNHdHa1JiWFZnQ2lUYkMvMlBIRUNIZHpnanJPQW04aloya1p0ZFhuK3grdDFqOTdiMHVRTndMemNJejhKNVA3TWowOWtTSEowYXk2LzNwQ0FreFk3WUpkZVJjQUtLbTBNT0xkVGV6SUxkYmNJU1RBYVJwNUhGaUNjaTJQNXI5TW5WVUQzellqTDY5aEFFcUIwRHY2SnJCd2FyclR6UmZXSHVDNU5mc0JTRTFONWZEaHd3Z2hhQlBzejMvL01aVGVjVzFkM2NHR0xHUklVKzZlQmlIMVJLcjd0ME5GT2NBZTVPcFQzY3o4UE1JUEdBUEVIVHhUU2twTUdOMDdoR3MzRjJ6UFllK3BFc0xDd3NqT3pnWmc2OWF0bUsxMjhpOVdNcmxQQXAwalFoalFKWXB2OXVSaHNkbU42R3Q1UlFWd09xZnV3MkpSUFRzQWs0RmZrUW1PejJBQ1pnS2JyWFlSTW1YQkx3RGMyanNPZ0s3Um9RQ1VscFl5YmRvME1qTXpBUm52M0h4MW5QWVM1UTZqMzkrTTJTSnJlcDNidDZKZG1PY2xPK2RNQmVkTHEwR0cwdXVCd2NDKzVxSG5Gc0ZBTDZBYjhKc0pHVkdOQVZhNUt1SEI2NVA0NktmajVCU1hzMnlaNXErb2xVS1BkaUVCK0JzTm1KRUsydkQ2UUpJNnR2WW9qYzB1K09qN0U4eWN0dytiWFlRamM0OTBUODk1aVNBazJUVEgwUWRKWEUxY3A5UkNud05zQTI2eEN3SldacDBpSlNhTTNuRnR1Zm1hVHVRV1YxQlFXa2w4UkFobWk1MHFxNTJWV2FmcEdoMUtqOWh3OWhkY1pOaS9OM0toVXByMG9KNlJQSFpyc2xjU0dnMEcrcWEweFdJVmJNazZCM0pEWkFWeVJXa29rb0RiZ1B1QmZ3RnZBZmNoOXhpdVFkWWs5U04zd1RVWkdnS3NBa0pNUmdPTDc3cFdjd2VGVFVjTEdmUGhWc3FycmZnWkRieVljUlZ2YmN5bTZKS1dvVEgveVRUdUd1VmMyYkxhQkhtRkZWb29GeDdpNytRaXgwNWZJdm5POWFvNUEvaThnZVFUZ1d6azlsc3RSQVFHa1JZWlExcGtOTzhkM0VlWnBScmdXOWRRZUJOMXVJT0NXaUtWRXA3NVBzdnBCYUd0VE53OHVLUFROYXROMFAvQmpldytXck1mRUdBeXN1bnRRVnpiTFFLQWtDQW5VUUs5WmEyRHpYSDRBOFMzRG1YU0ZTbWtSVWFURmhuREZhRnljajlmWmVhVmZUdlVNN3ZjN1F0c1FpcWgzR29YVEZud0MwdDM1emwxR0pJY3pac1RybllyeGExRE9ybVNZZUdHazA3a0FhcXRkckpQMXV4OTdEcmlkTDlXY3VBRlRnSVRrWGtFWnlzckdCT2Z5QzJKWFRYeUFMdk9PWG1XV3dXQUJ5WHNMN2pJczZ1Y05qYU9xWlBwbzUxTjMySzFNMmZoWWRYTUE5NVVqYTV4TlpQa3VoMmFZRlhJNWJBeCtBSEhoa3FWelVabWZsNnREdDRxQU9wUWdwcndkRDcvR0xLWXlaVnhvUXpvMGM3cEpRdlduZVNQZ25MVmZBbmQ1SllhWHhNa3JkdXBYZjRKMEI0QVJnS3JnYi9WSXl2SXllMXpSMzk2UlVUeFVMZmFWcnF6UmdFbmdQT2V0c1kyb1ZQQ3BQbS8wTy8xRGE3a3QrTFk3M2NkL1dxcm5ibUx0ZEhQQlQ0RFVnSGFSd1RSTmxUT1YzOFVsSFAwbEpZQXJ0TzlJZ1A0RGtsK0pZN2RaVGRRNUtlQ0pQL2pEUk9KQ0F3QzRPZXorUndzT1EvQXJuT0Y2cGxkNmtGUFVFb290UXRCcFF4MDdNQ2pTSE9lRG1EeU0zRG55SGluQno5Zm0wdk9tUXJWbklzTWRWTUJVdUpEdFg0Njg0Y2FCV1FnOHdNMUlmb2pTK2F1U25CTFBqSW9HSUNYOTIxbjRLcXY2YjF5TWZPUEhpRDNVbW1ERmFDVTBCTlpoSHdUR0loY1kvMlJOVUZHOVkwaHRsMlE5a0NWeGM1TGk3TlY4d1F3MzNHZUFwRHFYZ0VGd085NjhvRitmangzVFRyQmZpWjNTdkJJL3BtZFAwdDViRGFtYjlHV1dYQnMxRGFrM0oyTExFVHE0Vzh3U0NVK05LNkwwNDFQMStSd3NsQWIvVG5JRkRrV1I4RkZXWURGYWlkelQ1SHF0eDVwN2hyNWI0ZmZTRVpjSXRmRnhESnV3M2RVMnF4S0NaT0FtN3doRHhRNmZsZFprd0IyUTlPM3h5dld2bnI5cTcrK041VFIvV0swaStacUd5OHYwVWIvT0hKN0RCeWpENUNhSUJXdzdVQXhaUlZhWWNYUEhYbUFrUjBUV0RuaUpyMGxMUE9TL0Jsa2ZxRXRrUTZaaXB0REFZenFFM1ZqdjVTMlR0YytYcDNEcWFKSzFaeURMS0tDdy84QlV1S2tBbHo4L3c3Y2tGZHdVUUxnRmZtaHdHSGtTbklqTXVSL1duVm9pZ0pTZW5ZSm0xTmFZWEZLWENxcmJMeFNNL3BIcVNtamcyUGJPeVRJUktjb0tiQ0xBbkFsZjdpa21NZTNiK0hBQlRtTEt5VzBDUWlrZjFSN2I4a3JiQUFHSUswSGFOcjNlRXV5anBkZTg4cVNJN3gwVDNmdDRuOVduU0QvdkZrMVg2Um05RkhuMVZZNzJYbGxuTDFReFo1ak5SR2dLL25mTDV4aitKcGxGSmtyK2Z6SUFUYmNNSkhlN2FJWjJUR0I4M2M4Z05GUWs4cDRRZDR0R3IydlpqTHlWbUNBMzhOZnp1NW51UEZhV1NHdnFMTFJaY282emhTYlFTWW0zWkh4dWNJQVpOeFE2M2ZySTY4UUVSaWtLVUdQeHBLSEpyaUFaY1BFekV0cnhtcmtBVDc4N2c5Rkh1QUZuTW1EL0xCaE5pNzFmUy9JTHdkRWNaV1pFV3UvWmZkNUxaaHBFbmxvMGh3Z1p1aGI1V1lycjMxMVJEVVBJWmNxZDVpTC9PQUI4SXI4bzhnWi9DRmNsTkJVOG8zRjlRSCtmcjh0ZnFhdlZXUk9FT3A0N2I0ZStoTDM3ZlU4bjRIamE0OUFQeit4YXVRNEllNmVKY1RkczBUV2hEdEZWRkN3L2oyelhKNTlFTWVuTnExTVRpWDVBblJMN0orTlh3RnhYZmQyR3ZteTFUZUpxRGFCU3BqOTFHMVpUU0d2b0NtQlppRGYwRldnTzNJWGllRzlvN1NMNzY0OFRsR0psaUQ5eXlHZ0s1ekNXdzltUHd1NXdlSU83eU9KdjRzMCsrRTB3ZXdicW9EeElJdWUweHlaWDFtRmxUZSsxdW9YV2JqZjRLaVRQTUM5V3pkNFMxN2hBMkF0TXBvcjlkQzNYalIwRW93QkdjZ2t4TFFDNEozbHgxUlpHOXlQZnIza0FmcEV4WlFodzlTWmVDYXZrRU1UeVVQRDQ0QzdnVThBeGc3b1FKZlkxc3hiY1J5TDFRN3kzeCs5Y1Y3aVBKSUhjWXE0TnNtRzU1ODM4eGRBTUhLU2M5MFVyUWF1ZGVsYjU0UjNldEs5b245VWV6RStJYWs4Yjlhc1lGOFNjRVZqSXNGb3BKbU9SVzQ4N0FTZUFMYm8rdFE3OGl0eWp6SGh4KzlCdWtzNzVPNTBpNkF4dVVBaGNoL1BoRXhmcTF6dWV6VDdqRTZKcDROTXBrL01WdXNSV3BBOE5DMFpzdUtjNkVBOTVITXZsYks5NkF4ajQ3dWNEdWdja1dTMldpOExuMi9PZjJkNXRjNEhtMHp6S2k4VDh0QjhmNWp3T3NpcGxHWi8yYUE1RkRBYVdXQUlEREQ2c1hSWWhrYitVRWt4STljdTF3YzVUeUUzUGk4Yk5QVkw2MTdBYnpROXZHMHhOTlVDRW5GVVdtTmJ0ZFlLRlg4VjhzMEJwLzhFcExTSkVPdEdUM0RONmg1cFNRRjlBUVB5U3pOM243YysyWUp5K1JUdWxQQi9RMTdCZ053dUswV1dyLzRTK0IrSExSckVrT1oza2dBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9sb2dvLWRhcmstMmM5NTM4NzBlNGU3NTYyYjBkYTBlMmZmZDAwNDk4MjIucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2xvZ28tMWFmM2IzODQyNTdmOGViOGFjNjM2MGNmNjE0OGYyMjgucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3BhcnRuZXItY2RiYzlhMDA0YjE3OGI0NWY4OGU1NmIyZWRhMGJlMjAucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3BhdHRlcm5CRy1iYTFmZmQwNDM3MDhiNGYyZTRlYjgzYzFiYTc2ZmJhYS5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvcGF5bWVudC1wYXR0ZXJuLWQwNGQ1MTA3NjVjOWMzNzg0N2U3YzczNGVkMTkzYTY4LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9wYXltZW50VGh1bWItODlhYTk2NDJlNmIzNDg0MjY1M2UyZTg2MTEwM2M0YmEucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRGNBQUFBM0NBWUFBQUNvMjlKR0FBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUJtVVNVUkJWSGdCclZwWmtGeG5kZjd1MXZzNnUwWXpveDVaa2lYTFJtTWJzREM0R05rVW9ZcEF4cFZVd0tFcXdFTkNVVVZoK3pGNXNRandrRXFxTENlVjRLcFVTcGdYVEJLQ0FqZzJjZUdNU2ZBQ01oNWp5YlpzeVdvdHMyODlQVE85MzN2em5mTjN6OWp4Sm1OZjZXcGF0Ky84OXovYmQ3NXp6clh3UGgvSDcvcFNMcEwySm1MeDdLRk1ObE5JNUhKajBYUXVaemxPcnRXczZUMmVFeTFGa3RsaTRQdWxhcjA1TmZtTHh4K3ZObHBUUjQvZFg4VDdlRmg0SDQ3eHNiSGNOYnY3N2h6dXpvL0hZczU0UGgySFo3dElKVlBJRCs1RXBxY2ZUYitGNm1ZWjB4Y3Y0ZkxzRXRZMjY2alVXMWd1bDVIUDVkRnExdEhiMHoyVlNLVWU2Qm5LblBqeVY0OFc4UjZQOXlUYzBNREFlQ29adXlmaXVPTlJ4MEZ2UG9XaG5od0svVjFJdWlGNmN6bnMySDBWdW9ZTHFHMnU0K1hUcC9ETGs2ZXdWbTFpbzlaRXJkRkVJaG5INk1nZ2R1OGFSdUdxdmJCZEQxNGtocDd1L0ltK29SMzNEZSs5ZmhLLzQrSGlkemdLTzNlT2VhNTlMM1V6SGdZaG1rR0xtZzlRbVYvRjNISVppMHRsN09wTElobUp3cWI2YkRlQ1JDWVBKNVpDYjNjZXVWYUQxMjFrTXluMDlXYVFwWUE5dzhQb0dSbENOajhFTjViRytucDVvbG4zSjVabXprODI2N1V2N3hnOVVNUzdQTjZWY0lWQ0llY0YvajM4ZUpkSERlZlNLYVNpcnBxLzFmUlJiL0ZzMURHOXVnS0VEWXgwWjJGWkFlS3BES0twSE1ZU2FRd05kK09WWjUvREs4VVpuRnRhd01XaWkvNitMSzdtR2wwRHU3aVdMNnNoMDVWSHZWNUg2QWZqVGlSeWZuSDYzTkhlblZkOTQ5M3MxNzdTR3dzREE0V3dXWCtXdTczTG90WjkzMGVURnJBc253Qmh3WEZzUkQwWEhrK2YxbHpkcUtGTTE3TWlIaUtKQktLTXYyUXlnZG1MbC9ITTFBczRYWnhIY1dFVDV4Y3JXS2hhS0ZWZHpDeVdjUEhpUlRScW13aGJkY1JqY2NDaDhpeXFMd3lPUHZuekg1OC9mSGlzY0tWN3ZpTGhyaW9VSnJoSkNtWVh3akRrbFJBaG4xZXVOTEN5MmNKYWc5ZmlTVFI0c1JWWWpDVWZtODBXZk50R2hFSjVVVzdTcHR1V1YzSG0rWmN4VjZwaW93R3NNUFplWFZqR0k3OThIdi93L1lmeDRFOGZ4OHp5SnBibUY5Q3FWeEQ0RFlTMjJXSVErTERDc05DYnpqOTc0OWpZeEpYcyt4MkZHeHU3OFU3SGNYNFVobGFPcDJyUmtnZnlaNlZXdy94S0NhOU96K0pWSXVEczhocldLbFVLYmtOVUlHQVJUYVgwL3BDVzlobWI2Vndha1ZnVXBVb05FUUtIeTNoc3RGb1lHZDJIY3JtT2IzNzdiL0hqaHg5R1pYMlpucjFKZ1pxaVNsV295OGRHSTI0dTlCcy91dVdqSDducm5mYit0akUzOXFHUDNPblhxOGRhZkxoNGhxVVBvVWFJRWsxZWM3aHBteWdaTURaYytjNmpFTHp1dVM3aVVRL1piSXJhRHhEUTJuWVlJQnBMWVBmZTNWZ3ByVE95SW93c0M5MnBLTy92UjJGSEZnY09ITURRNXo2Tm1jc1hzSFRwQXBMeEJHd3ZCb3V1U1ExQjR0eDFIYldpWXpuMzNucnJwL0hZWXc4ZGU5ZkMzWGpMYlJOaHZYNnNSWTFUNVZRY05jZTRDcmhKeS9Jb21FUEVDeEh4UEhTbmswZ1RYQmdYcUZacjhCbUwyVmlFd3FXUlRHV0pmdHdnMTRuR1UrZ3Y3RUh5aFpmUW40bGhvMjdpYW5UWEVLNDZzQWU3RHV3bFd2WmcvOVVGMkg2ZGJ1V3BoMEE4SlhSb2FRK3BlQlJ4UGpNZWo2UGhSTzhkdjIyaU9QbnpFeWZlVElZM2RjdXh3K09GTVBDUCswSEFqZnJxaWgzWGtNT2g1Y1R4SXRSaXhITVE1VStmN0NNZ0NMaDJpSHdtZ2J6QWV6YUxSQ3JQZ0pFbk9mQVNTZlNQak9MUTRac3hORFNBd21BZkJyb3pTRVNBaUUzMjBsalhNMkM4MlJUSW9nQ0VLZ3BvemhpVlkxUEpIOWkvQjEvNTB6dmdVdTdBc280ZkhwOG92SmtjenB0ZEhCemUvU3ozUG1EUll2WHFHbHErOFhzUnpSTHZvOXVKRmVPUkNHTFJDUDh2N21rams0eWhLNU5rZkRHR2NpbU0zWEFEOGp0RzZFcTB1R3lUYm1YVDZybWVidlIwNVJSbGQrd2N3T0RJVGlvaFJrVzVGSkwyOGl5TlJadEFaRG0wbnVOb3ZneklZbEJadzU2aEhiaHh1QXZGVWcxelM2V1k3Vm9UbzhQN0h5Z1dYNnE5clZ2ZWNQUDRQVFNVb3FKWXJOWHk5YnBhVDY3WmtnWUNKbVp1SXVLZ2l5NFpwL1ZpTVJkUldtMTF2WW9NTjNidzZxdVE3ZTVUZHd3YmhFYTdTZlBFbU1pamNHb2VCbWpCVEU4WDFwYm13TGhHYzMyVldvc2dGSUdJdks3RW11M3hkS2tZWXdPWHBPRG04U09JY1UvVEQ5NlBrWjc5ZU1aUzh4VjhPNVQ4ZS9kYnVxVzRveFZhUnkyMWtGaUtGZ3Y5cmU4N1hDMWtiSW5iMEtUSUo2TG96eWZSbTRqUkxYMFY1dHJkUTlpMWExUTNHREFsaUNXSkFvemRWdHZGdURJdEVPR0t1WFNlY1psQlQvOFFrdGtlNXNNdWVQRWNyR2lTd2tZWmFxNXVVd0xEb1JWamlReWFYRE5xdGVqMkNRMFYyUTl2dU92bThZbXh0N1FjSDN1OHZYdjVTd3UxWVBLYXNaeWxYNFVFRmFEWjRIZDBvMGE5QmljWjRiNERoZlFrZzMwZ255TmtleFNXeXFGUWxoMVZVQWg1VCtoUU1VUzcrc284djIvUjlaamdhUjFXQ1JRcXlkUkJtaFpoWG5TamFqa1ZUTHlHT2c0SlZDNkJTb2hCb2pmSDlNTjBZWFpsTE9WWXBJUTQ4Z2JMMFdyakZHazhiQ2RvUXdwOC9SQ3FzS0ZhU3o4SFJzQTZpVys5M2lTWVVEQnFzOWtRTXR6QVJxbUU4dndzS3N1TEN1TVdxWmVUNnFGTEpoRnNybUw1M0hOb3JNNFRPMWJSM0NqcDVsMkhMdXZGRGV4VE9JdFdVeXZyRnZrOFdqdG9WbEc5K0NKQ2d0ZjZ5SFg0eFhORm1NMGF0Nkw2eHo4MlBqSCtCdUg0KzNmcXhoRzJoV0Yrb292WmJjMEZ0RUFuRGlVWnkzME51dUVtaGR0ZzRwYXpYdmRSMnFpaWVIa0JxNWZuVVZ0WlVKWWhObThGVE83Y3RKdklvam85ZzQzcGk2ak16cUcxU2FwVnE1dmN4VCsyR3pNZ29sWXpzV2J4MlRhOXlFMzF3cStVNFRBRUhubUZxQnBZQnVHMjloeUtoUGU4VHJpeHNmRUN2NWtRNlRzM1Naekk3MG5DN2dnbUNWdjFZeG1kQ0xEVWFMRUtYYlRPc3lXdTZZYzR0N0NDMmRJcU5wZVg0RytVNFpkTE9QdkVmNk8rZUJFMkdYK3Nkd0RsbFRXeWtESnF5eXVvODJmUWJEQ3hXOFlWbFUrYXhJMTJHdkxGTDUwUVVjYW1jTmIvZmVhTWVsYWc0YlpkdWRHUTQrUGpFN2x0eTduK2hOR0FpUzJqQ2Qra2dDRHNXRjB0Q1Exc1d4YzBjV2lFYlVsTzVMMkphQXlYUzJXY1dTaGhzN3pKYXFHSjJlZWZ4VVBmK1M0ZS92YTMwSmgrRVJIR1dUTGZoeEtKOHVyc1BPcWJHMVFtbFNkb0taaFBkOXpPcTVKRUdKdjBsdWJLSEJ6Znhha3o1MUVqQVJCdVlhbXgxTCsyQkt6WndWMWJ3b1ZXK0VVUlFrNUZFZ0VCdFl6d1FkOHNvRlkwdXJDWmtNazNPMjVBSmJSVU9LRlo1WTJLQ250bVpnRVhWc3JLWWxJTS9zLzkyUjNZLzZFUFlITitIcEZNRDNKN3IwVXRjTEJXV2tPdHZNRkt2YUZiRkZjTWRaLzBGZ3BrQlFadExTRUIyWDdZUk5UVHJ4U3BCUE5zVVVLZ2FOazJRU2dHdGo2dSs5dy9kcmpBSzJNZHhKRllVNFFUMEpDWTQvT1VjdG5HVWlLVUpPeU9ZSExESmtHazJteHBEa3lsNHVobmdqNHdQSWcway9xclUwOVRWeTEwWFgwUVF4KzdEYkdlQVNSNFpvZEdrUjBlUVluV0xjM1BNVGV2VWtsU1FyVVZyRGdZR0NIbCthSnpydCt3STNqcHpHbGhlaXFRdFlVYW5YQVI3aFRTTmNkenR1ZDRZNi90Tm5SS0dxRmU1aUdkNUcyMTBaSy9Mb3Z5YWN5SnFMTklMUXVZQ0xsbVlzK3hmMUxvemVMNnZTTzRhclRBNUV5ckVDRjlVVXdpQlNlZDVjOE1Za3p3aFJ2RzBPUzZwZVZWMUZqbU5DdnJXajNZS294dkJCTUI1VE9WN1hEelAvbmh2L0o3Y2QxZ0t3ZUhuWDJIMnhTeDVpY21YQ3RzallzZmhHMEIxUmo4dDhuRmJQcSt0QkNFMzFtaDAzWkovazl1b2dYVkhYazJlS2JKUEZ3S0VLZjdES2JJSWJ1eTZpbnBiSjZ3djRIMG9CU3VVVVZCYXBRVUs4VzJ3ajcwRllhd2RQWUMxdGVXVWFQMWtyMURESWNtbisxMjhoR3FxNnQ0Y25JU3o1eCtDY1ZYVGlPUjM2RnhMeDdWa25EU3FETmlocFlKRDdLOE1aZnhkcWdqVnNmVk5JemJNWVRYNURpcmJUV1ROd2tna3N5RmVQQ0RwQVNOOEUyQzBOSUdLOUU2OWd6dndNNmRPOEMyRjNQZXk0aDJNOWZ0R29UZFMxckZLaUthN2tadllSOFdMMDRUTW9pOEd5c2tBeFY0WWJRZForSXBMVHgzNmpTKy9YZi9oQjMwaU9IdU9JbEFxSVErQ0R2NURXMnJkUXdYQ213VVNLenRuSW5nc0kxOG9YR0owTmZQZ1h6VzRBMFV4WVNXR1FFdEU4TnRtNit6K0d3U3dzTUlOYzMxbW5PTEtLOXRvREs5Z2o0Q1NKejlreGpyT2UvMGVicGxGSkhCSGl5RkZjek9yREJlQXdXa2tOYndtUkxjb0VQVGJJMzlKNTc4RmR0L1Nld2F5Q0JPaHRNZ1dSZVh0SUpPOW01WExXMzVMRFVLRHJsRXlJS0NSUnZhUmFnT0RDc0t0ZE9ERklxbXROcEd5bWcwcXFBVFlYVWdsb2FraUhRQ3cyelZIYnp4ZzloSDhoeXNMR0xmWVlKWEkwQXNrMkUrWTczSHBEMjl0SVIvL0p2am1EdC9DWWRHc2poRXQwNzM5aWxZaVZKRFRVMVNTL3I0MWNsbldFbzVKaFZST0ZkNk5sSlB0a204R3EyZHNqUkhDK2tJZzV5NGFxNWpWZVdObWhLb1NmSkNXY3lqSUM1TG5BWTFLdmM0WEZoU2hOd3JsYmpjR3lQWEV6OUlSTWdSQ1RCcks2dElaM0p3NHhsRUdIc3VQemVKY3BXYVdNWEcyYWVmUWZuUkovR0ZQUi9Bbi8veEo4bEhRM1FORGlLUjZ5V3Y5TFpjVEZ6enNVY2Z4ZUxpaWlSWkpLa0FTUlVlSzM1aE5Cb3VuVFJsYllPaUdJV1hjdTVXS2ZPNjVOM1M5b0JKaklIbVAyRW5oZ002YWtFcGhUVHZoZTFjS00wZ3VtT09CaXl3bXpYemJ6OUZsY2lZcFF0bFQ4NlJ4YlB1RXdMTk9OeWYzSVh3WXdmZ0RTWngvc0xUcUpjdklUc3dTR0pDdHc2YUtweTRsaERyZno3K1BmMi9BRWlEOVZ4Y2FqNEs1eWlnQllhZGhHSEhJN0dkMHRnNTJQYlZVTXNLc1lUbU9YRkJXYUJodUtFQ1N0dEZtMXRXZERTbzJWdlU2cHlSZ29ZNEUxbEpoc1EzUnBUTU1kYXM4M05Jc0FFVTJ6Mks2SjRodWk0YlExMGVOMWZCZ0h0QVUwVzZ2NC9DTUpGVFFFMVhWTmpEUDMwSU0zUEx1cmJBb2Z5TVJvMWxkWi9iWWJZbGtMbldiaWh4SzBMTGMzcVRJR1FudjRXZG5HZmFRaVo1R3hZbktTS1FFbElBUjY0NHBoS1h0R0d6b3ZZWWQrbnVITHBZazZWNXhrZEhFRDI0RzNIV2VVNG1peUJxSy91dytYaVhTaGk1OWdhV2Jpa2xobTRrUWJsYW1MbDBHZmY5L1hlVVAxb3NmdVV4Y3E5UGwwdncvNWJ0Sy93TGFob0RXWVpoS1c2b041WWttWlQ0S1dlRU1FR3BLYUR0dzF0cGdKK1RSTGtLV2J4bE9lcmp2c2Fuci83ZktZZGFoT2xhaEpRcHo5N0tTQSs4M2k0NE8zdGc5YkZ3alhGWjF6U2NndEQwWmx4eVVTK2VVdmZtcXNwQ21td3kzWFAwbTBvTVJHbWk2WHF0cFhnZ3l2ZVlKeVh1dFVvUEFtejM1VXdLa3lEazJrWEdZemdWdGhFbDlBMm5WTGczaEZ6QkpNWkFsdVF0M1dUeGMybjFDV2RzZTRzV3FuSS9leG50OU1IRXpyUHBremo3TmJJWS9telZ1RDVkM0c5b0hDdFZrdlhqYVRnazBwYVFaamFhRURUdzY5K2N4QXdyQzl1V2hxR3RRc245bGlQMExxRWtRQjZzWlpKdGR4SmRKeXUwalFKYUxnZ3ZHSmZjTnFsb1MrcFVFVXdXRkJmS3NBZXBNNEdXcnkwMngzRzNMQ2JYb3F6QUhZTS9uUGFrMllKemtNcXd0ZGZWZzNSK0JISG1PcGZGYUJpMktZUGt4SGErREFnaXltVVp5M1l5ZzVQUC9oWUNaOUtqRkYveXVMWXZTcE9lanNSM0cvNmJSUFJPTWJ0VmgyN0gzbk11OXpMVm9TNkdXRnNhQzc1ZEo1aTBGR3JqdEZ3aTdxRzhYbU1QeDJzRGl3bHcwL1lMTkY0RjBhU21hM0dUNmg3OEc4LzBJa2FJbDdRZ25XaHhKVk9NMm1xTmtCWUZUeW1BSFRJV2dmRXk2N3NtUVNrUlp3ZE1sQ2l4eUxhRDhGZzM1ZEVqaklLQ0RwQUU0UlluRHR1WVFjNHh5ZXpUUElHTzBVTERVbnk2bmU4YlVocGp6eUlhTmRYNFpxV2liVDFKbkEwKzNOSGtibTkxTVFSMEpPRFhxblVDUkVSR3FHMXJDaEVPRkFHRjZkdGFWbEhyTFZibjlVM3RiamtwZHNwbzJTWXI3VHI3TWhBbDJBSUpSaGtPZVdtREZDL0NZVXFWUkYyOEJxRWhHbHNGZHZzVU4vWkRlOHFlbXBvcVVmZVRXOVFzTkxsT051UXBXd2c0blVtaXhCYjRkaFl4MWJtNHJRaW5sYnJoTkdpRjBub0lzTGk2enU1ekJiWGFPdXFWa3ZZL1pYTFRxcTNCcjViWlhpaWh3UTVZUUFTMFl6bGpVZjV1ZFdNTkZ5NU1xd3U2YktmSDBoeC9zWnFROWFNY2x6WElkSnJhVGZPVjMxcUI4UnEwU3pXNWtaNDROZlhVSTBYWE1JSGdjZEtkY1lPS29iYk9KRkFGa2lQc0hOZXFkZTFYZERwaEFpNGlXTFZ0U2R1eXRtb0s2WG90a1dldXNoVXdkMmxHS1pwVTN0TEViVGtsazJYRTlkbkRqR2Q3YWFDb0trVmlNV1ExY082VkZ6QXp2WWdXZlVxR2tJclczS1ZIRnhaWE5YS0UydUN0NjR6ZDNvNjFOanZodncvSWJsUTQxdzJPdFFMN0hvVmN1a1RZS1U1dFUzSUlpWlZmY3VrZVRaYjMwbVhXdWt0WUNWMnZValAxbnJtSDdzc3VXTG5sNHZ4Q0dSdCtFY3Y4M3FQMXhZcWJwUTNzT2JnZkl3ZHVVQ1RVa0ZCeWJ0UENaZnpQNUMrMDNHcFEwS3YzN1VheGVGbHpXZFFMTllITHBFZEN4bEZtdFIxNW5lUnRCQTEwZHFCRjJ0emNYSzJ2cjMvY2I5UUxnZFpTVUtoUEp1SktnVkljUXkyUkx3cDVscndtVm5CZFQ1dXdPVmJlRFFvanVUSENKOGRrZGtEclNUbkV1U2htMXFwNDhlSWNGbGlUQ2ZMMjlYWHJXQ3VSN3VKZ0pLN1dsaEd5dE5rdm5UMkZCeC84ZHc0dUc5b3p2ZmV2L3hJZnZHNHZXL1RjUjIwRFdZK2hZa3RjdTVndk5WVUpKdmEydVRFTjh4OVRUMC9ldnlXY0hKbEU2Z0tmL1NWUFJrU2tRV0lkdTYyU3pjMjZhYTFRWXpMTmFYQXVKd0lJdVU1RUhVWEpPcitMODVxUTJpeHpVWU11STVQVUt0M3o3TXd5K3g0emVPSHNIRGZGT0NUcWJaQU1DUEkyV2czZDFNclNaZnpMZ3ovQWIxNllnZTlFY2UxMUJ6SHhtVTlxWHR2Wm44UEJmYnVvclZYSmV0b3JYYTc0cU5RYkpoZHVFWDd0LzN4MWJxWlkzSEpMT2M0V3owNGUycjkza2wybGNZa2hjYitRNkNjeFUyVXZYOGR2VE9JQ0VvRldCWUZxWEZwN2lhZ3cvcnJHWHB1MnNqS1BjZU5zMklhbVNxZGpZcFdOb0pPL1BZZVRwODZyYXlVNXZ1cmhVRVNJdXN5L216UzNid256OS9HSjIyN1I4a3BDSVVvS0oxNHlPRHhNa0x1RWJyWW9idjNFS0M3TkxuSVFzb2JwMlJJdXphM2dwWE9YSmw4OGMycXlJOVByMnVuSm1IZDN2Vlo5RnUyYVRVbXlWTHdhWDA2YmQ5STFXTDlKZmRYaVBOeG56cEd5U0ZCVHZuT2xOU0hEeURqSk1XRmNXbjA5dVFqVzU5ZVVOb1VLQUpacVdocExkV0VpanFrblhlWTBoK2ljemlieDRlc1Bxa0NLeWpwcjkzVFd0eGhjNGw2YU9uSGQyWnZDUUpaVzNwbm1HZ1hXaTUvOThwRTd2cm9seitzR0lVOU12VERsZXBIN2toelFpd1VFbmNSTnhSNGMxMnA4U0V0QmtGVG1Bb3FBYmIrWGVHc1B1ZFNWWTY0eVJUUFc0c0FpNGRvNm9oS2hCR2s3Yll0T0phTERHdjRSR3Z4N1IyNUJPdTZpdHI2Q3hpWmJmeHNiVENGTUxXdUwrcUpPZy9NN2VUc2lQMUJBdm44bnowR3lvY3czS0ZqeHRmSzhZWVRsTm9Pam0zNzFEeGpRQlFFVU16STJKWSs4M21TMU9aeFkwNlhBZFdyZkR5S2tXekdkSGNoOXBqdG1yT2h3ME4rVlNuTWdHV0Y3eFRlSlhtcEY2VjViSmo5YVZpZVJXT2dqMGY3TXAyNWhwM29kcGFWcDVyMlNrdW9tQWFXOE5LOVVNRTdrN2QyeEN4N2JGaHVsSmRRZHIzampIMzc5NlArWDVRMlQxYWxpc1VUdk9rSnNMeW01MVFxQmNGK3RheFVnQldXemFab3p3aS9sTlNnQmlHamJLcElhSkMySVZidUlwSzRNRTJtMVFXNWFlcHFlclZSWXJlK1JMR3ZkYUJsWGpSS2MvdW92dnNiS0h0aWdsY29MTXloeFByNnhPRWUwckhKR0hrTnZiNDlXSmRFa0owbHhUbTdUUFNVN216bUNOem5lZExLNlZDcVYrbkw1TTBUQnp5dWlOVnRiMzRubFBNZVVITEpwYVRzSW81Rlp0Yko4Y1VjQkd4aXVLYkhhYUFYYWdhd3lGbHRzRVVyTFFzaTJjR2hIRzd5bStab2hHM25paWFmd2swY2V4OEg5K3pDNmJ6OFM3THZFaUxxcGZEZGRjazNIWXZKcTFkVWZ1dFdNeFJ6Y3NmL1FiVSs5bVJ4dithckdpOFhpaVhnc2NqZVVzVFRielJpRGtsdHZOV2lPYWc5TDZHSUpVWGtZYXY0UnBVaVR4K1gxN2x3YWErdWJHTnJSenpVNCtnM3Q5b1RXOUVHa2RTRnV2cnk4akZjdnpHSnVjUlcvZnVFOE12MjcwRDF5RFlsM056SjlvenJEVzVtakc3SmxiL3JtOXQwamV6NTQ0cTFrZU52M1VKNmNPbjJNcWVGdWViZ2thZzM2TmdNWEVLaTNoWlptYkxYZVVoZVVabTJEQU9OYnJ0WjRTUTRtQlFGN09KRDAyUVBwNzhreGtXZGgrcnF1c284YTg2WVNkZTQzazh1Z00veDBCQ0h6L1hUQlBHT3VpbFJ1a01WeURXdkw2eEtMZHc4TTdULzJkdnQveDVkc2Zudm0xV09OV3ZWMk5vRksrc0JPWVFoak1kbFVwenNtZ3EydHJ5T1ZUbXZ5ZG0zWFRJb3RTZkEyb21RMXYvK0pqMk1vRzhHSGI3eU9pTXJpbDByclVEa3BlK0xNanovOHdYRjgvV3RmMFhkUVpFNmVwd1UzbG1iUVBiU1BqNGlVVmhaWGJ0OTF6YzNIM21udlYvUjYxTG5aaFJOQks3aWVPYWNvK2MxQXVaUkdvWGJKSkdSTUw5TTNKUk92TFhHTTFXaFpyTTBxU3RzODIvVC9oWHRtMldMZnU3dUFXMjRhVTJRVlFESHRWVXVyai85ODZHR05YZWxOU3Fsa2UvTHVXRlphNU1YclBucmI5ZDg2OGVTSks5bjNGYi9ZVnB5Yks3NDZQVHRLeC95R0tWQk5ncGRpVXZLYlZBY2laVGFUd0JJSEd4NHJnUTJpcURTTzE5WXEyTDFyZ0lDd2pvZC9Ob25mdkh3UkY2ZG5kY1p0YzNBZklRc1NyaXB2R1Bsc1EwU2x5YXRLODAwWnd5TzNjOTk5My92ZS9kZC81STY3aTFlNlp3ZnY4cGhmTFUvMmRtY2U0QlJvalBGWGlFU2tOR0t5bDRxWlB0akhGc1B5UnIxZGxUZVJ5NlRVZXVsc1RDdnErZFVLK3l1dXRzNDlGcUEzWFhjTlhqNTdqb29LdGJuN2hjL2Zqai81bzg5S1EwMDlnZkU5U1NlNWZlaWFtNzQ3K2RUcjN6TjVwK09LTGZmYVkrcWxZdkhVdVV0SG1NMk8xT3V0RS9KQ2pMaGkwemVRTDBmUUhnYVdpSkp4dGd1V1Ztb1lZRVdRcDVCU1ZpMHNMT0tYVDU5RXJyc2JOOTkwZzFxL1N1YngwaXZuOExOSEg1TjN5Q1laajBkMjdMN3VTTi9vdFZQNEhRNEw3OFB4cWNOamhWcWxPcEhQZVY4YzZrMlBuWjlid3lxdHRXZG52OUtvM255Q3lCcVNXY1Roc0xyK3J5Zk9ZV1hUSk9Va2MrVzBvRjlkaUZjd0diYkN4MjNXbDBXU0Niekg0MzBSN3JYSDhhTmZLbnovSjVOajYwMTdmRmQvOWxEUzgzSlhqdzRVSEMrZWs4NWtPaC9ETTg5ZkxwMmZYeXRaampOMTVPWVBYL2p1RHg2YWF2ckpFOFhpMUhzVzZMWEgvd0VjL0RDRXFsTmZYd0FBQUFCSlJVNUVya0pnZ2c9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRGNBQUFBM0NBWUFBQUNvMjlKR0FBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUJrZ1NVUkJWSGdCclZwcGJGem5kVDN2elpzMys4WnR1R3VvaFNKbDJaSWMyN0ZiT0tiYkpFMENOSldCQWszK05EQ0tCaTNRMXZidkFyVU45TCtWNWtjS3RJVVRCSWFScHFtWnBUR0N4Qkc5UkxKalc2UWtXN0pFYzEvRUlZZXo3L09XbnU5N2I0YVVJOGV5NHljTmh2Tm0zcHZ2ZnZmZWM4NjlkeFI4eXNmc0M4L0cxN2JtVDRjQ2lSTnpNNitrTEt0K01wWUl4clBwU3R5Q0IxYkRRTGpMbjljRG51Vkt2cEVmR1Q4d3AvandjalE2T1BmbHYzOXFHWi9pb2VCVE9HWm5YNGlIcmE3SE51WXZUc0Z1VGQxWXVvcjBlaDd2WGxyRFFDeUFvY05KckMxdW9sQ3pFVkJWak44MWpIcXRnZldWWFp5OGZ4SmV2dytKdm41RWswTnpYczMvdldyUm1IN2drYTh2NHc4OC9pRGpsaTYvT2FWNDhHU3BrSnZLcks4Z2ZmMGlMTE9HVERxTE4yWTNrQ20yTUJEWGNYaTBHNDF5RTZzN0pWVG91VCs2N3lBdVg5dEVYMjhFeHlhSDBkM2ZCOVdqOEtIUnEzM1FOUi84OGU3cDN1SEQzeG9ZdTNNR24vRFE4QW1PcGRuZm5JVFgrd3kzWnNxMmJOaVdRWWRWVWRqZFJYa25BMXUxVVdzYUtEWXR4QmlLcTZ1N0NPbytORlVOTmRQRTRrb09henRWakExMW9WRnZ5bnRtdDdaUUxsWXdObUVEMFFTQzBlaHBHK3JwcmVYck03WnRQam93TnJtTWozbW9IK2ZEczdPejhhVjMzbmpHMXJSWnZtUUkyakRORm1yVklqWVhydERJS2xvdEM1cW00Yk4zalNEb296RlZBK2x5Qy9sYUM5dWxPdnc4dDdKZFFpd1VRSjZlTE9XcVdGOWF3K0xWTlZTeWRSUXl1MmcyNm1qeDBheVdBZHVjVWxWdGFXZHQ2VWw4ek9PMmpiczZlejRWOHpSbTZhakhiUnJGL3pCYUxleHNyR0Q1N1hQSWIyNmlVbWloWlNqWVRGZlJsWWhnT0VGdkdTWnFMUnNWZXJMZU5HRWFOc3IxRmhUZXFNb1FMV2J6V0p2ZlJucXJ6STFwb0Zrck1iUk4zcnRKdzdkaDJhWk1IdHUybnRwZVhWaGlQcWR1ZDgyM1pkejdzK2RPNng2Rmh0a3BhUlVQMjdKUUsrVncvVGUveHZ6cmw1QmVMV0poSVl0Y29Va2pHOWhKWnhDa0IwWFllbFVGaHNrUTlYbmhzVVV1S0RTdXhZQUZTaVVENVd3RklRK1J0TkpBT0JpRTBTeHpFMHpVcXlVK04yVjBRTEdoS0VoNU5POXNlblhwOU8ycyt5T05XN2g0N2pGYndRdjBWdHp4bVB2Z3YwSXVBOE5xUVBHcXFEZWFNQXlMSUZMbm9oWGticFFRNG9JaXpPb1FyVWp3TThOK0ZiMUJEVU1oTHc0a1F1amgzNzBSSDdwQ1BCL3hZR0F3QnFOZWcxbXJvYlN6aWZMdU5xcUZIQ1BUNkh3dkxZeXJIcnl3dGI3MCtFZXQvZmNDeXNMc3VjZE15ejdEZlpiR09FWTVoMm0wRUF6SGtCdzdndXhHRm1hbUJpL1A2NXFLc0ZlbkI4c0llRFVjamZubDUwTitIUm9OMUFuN092TXUxQlZFS095SG43a25EUElHTktoY2RhTmxvRkVxb3JoYkJIdzdDQ1dTOEFXanZOWkh3enp5WHNKR2V1V1pyZlVGOUE4Zk92T3hqYnYyMWl1bkRkdVNGMHFUWEtzVWVYTmJMaVFRamlLYzZFZXgzSlNmMHZqZElWMmxrVGFTWEhRaTdFTzBLNFJJVHhRZW53NlBKb3lLUXdzRW9RWEQ4QWREQ0lRaTBCaXVYbDJIeGJnclo3ZHhhZVpYeU5DNDd1RSs1TGRYRWU4ZmdaLzNWRnpERkJtaUtpTkVmWVlodXB3Y0hadStiZU5tejU5TjBiQm5WY3N4U2lIeDJ2dHU3cG9JbFl0dHRreVVDbFVhcEtKSklJajR1TU1FRHVHVjNzRW9nZ2w2cUN0QjNvclRnQ0QwUUVRYUlXNFI3MHJDRzQ3QXd6eFRTUlZnYnZyaVhSamVXQ1hwdjRiRjRxcDhQY3I4Smd2Q1ZseGlsaEhFYzRyZ1JqeDdZMmxwYm1Cc2JQbURkdHd5NTd5S2ZaYUF3Unl6cEZHV1pVb0FzZmdRQUNGZWk0ZEprUEI0L2ZEU1pRVkNmaXlndzI0MkNSb213alJPVUlMRzBQUjQ2RFZxTEQwUTVVWjVvSEd6d2xFeUlFTllrTGRIdU54Wk5UK3JvZS9BR0lZUGRLRzdKNDcrQTBlNVVWSHBxZmEyT21IazVpQ1V1TWVubk0wdExjVS8wblB2dm5uMlNjdTBpSW9XRnkrMlNuVmpnUTlobk53NGkram54R2tvSEdhZTJLZ1Q0bjFjdE1XY0NZYURDQVQ5aEhOdUFrbGFMRWhodnBpa0FBK05VeGk2bGlrNDBvUW1Ob3VicElLZ0lkYlA3d3ZHZXpBNFFhT1llNG4rUVhoOS9vNldjaUpJY1NKSVJJQXQzMG9aUGxYdzRCTWY2cm1yNTE5TThSdWZFb3VYWHJJRjM1QjdtblZxd1NxcVJMRnF0WUo2bldUZHFFbWlwZjhvS0pnN21uTXpIM1BMUjlDZzIrQU5oVkhLTjlDcW05Smozb0RndlFaVUFvNnFpQVV5ckJRQ2lZZ0tjaVpKVFc2Q0ZvcWlhK1NnazV1Nlh3S0ozZkdiQ3NjdXg3QU94Tm4yNDl2clN5Yy8xRGhiOFQwcm4vbGxwbUdnV2FkaDlUcDVoMGFRVkMxRExNQ1F6NDdzc3VRWFJudTdhWXVLZUNUTUVQUGkvYlVNTGw5ZHh3cGxsNm5xcUZCV21ReFhWZFA1ZVF2MWlzTmpYaTVjOGFneUltUkN3YzF0aHFaS2dFbU9ISVkva25BTWNVMlRFZVFtdndNc1N1ZDlWVldldVdWWVhqNy95eW5UTXFaa1BqRmNMQnBuaXB3VEQ1NXpOZ2N5a2NWQ3hJM2xydkc1ZjJRVUcxZFdDT3QrZ2tzRlhYR0NCait6dEw2RFhMYUkzbGdRWnFQRjhOSlJ6ZTVLZzZ4bUF3SG1uV242b1BEMndoaVZxeGJSTHI1SDB3T0lSSHA1ejcxVWNyeWt5SCswWk8rOEU2UGl1cWtiYTB0VEF5TmpNemNaUjk1NlRNUytORXg0eC9XS1pSdlNRTEU3ZkdKNE9WOWhVMkhZcnNVS0ZVUTBva3RQUmtNaFhxdFFjalZ3b0NlQkJvMnFGS2xZVnRQb0d1cm4vVnRvVUhLbDMzOGY1ZndPYkNLb1B4WkJ1S2Nia2U1K0JHTGQ4cDRXSXlNZVR6cmZLNmhIY3ExN0tHMkQzSmVLZzk3aVdkTThJdmYyakp0OThZVlVxOWs4TFR6a0VMWHBYdXh4bnUwMkVhalNpNDczVkdjditYYmhyZmNRRlp0SjBCTXlLNU9yWU1kU3NVRnlqb2h3NVRtYkx0bFpYTVhnOGNQa05US1UxNHV0Njh2SVUxOE9UeDVDcEt0SEtodWpWV05vNjNMUlBsK0lRYUk0dU9FUVhKdUx1TWtLMnFmMlBDczNlMG9nWjJKc0xDOTlhMmlXTk15VUQwT2ltS05JclBiV09Na3JnRVk4VzRwTERiWUVnVnFtQkw5T2JVajVaVkFMTXZZUkN3ZXdXcTJpNThBb1NneWhYTFZKSURJUkd6aUFnV04zRTEwWnRodFYvT3JxTHM1ZEwrRDlpKzloZS9FOUdmS3F4MHZrMVdFV3Nuc2gxeWs5YmRlYis5eTQvK0I3VGIvNmVNZHovUGczUk13cERtakxENGliU3RGbHdZMW4rNllZbDE4Z1BzdU4wRm1uZVhYU09POFc3UXB6ZldVa3lGOWZIZTFCdDFGSE9lYVRxS3ZyQWtGRENCUGUreWZ2d1BhTlBQcUprcU1EUGJqendUOGlxaFo0WHljRlBIV0NXaU1IcmJ2WEJROW5iZEpqY0JUS0IwT3ovWW9SOEpBMDd2eUx6NmY0b1pNTzlMZjN4bFgrcEFKeGtVZy81OW5xN0o3dGhxcWd3a0JmRExZbTBGQWxMWVNoQjNYcXd6cENRVW9ramRVQVVkU282Z2d3TDNtRlZDUTlCdy9qVUhvSG80ZUhrUncvakdDRXBKNU1pcFhKKytvUktoY3QrQUhQcUc0MDdTRWxZTzl0dnRLaGVCbWFtcTE2VDBwRWJKY3lyaXB4WGlnZFR6a211NmhwS1RlUlNDRFp5em9zVFhYQkx4Y1NqSDJUT0dXWENIR3ZMNGdXMVV1cGtZWENtczRyT0l1YkZLRHNPblRmZmFpUXFIMEJQMVRxUytFVktJNEJWcXNPdFg5WTN0K1MzMDgxNDJyS05zaDBRdFFOeC8xQjJ2SjZUZ3VFbU9xZ29iekEycGVrQ3RwcEo3M1dManVraGFxcnpoVUVod2VrSEJPWHRlcEVWK2FlaHlFWUZIcVM0cmpJbkt4U1hBdXBKYitIbkdleXloYlBFWWFkVDhncmQvZWRqYlVrMTBFOGJDZHE5cEIvM3hwY3d5VFhBVGZ4SVZkM2twY29Kd1Q2aVJDVUtBaG4wWHZoM1BZb3BLS1F3S0pBVnNpMld5eUVSdnJZR2pDSWxLNEc1UnNlYjREaDJZVnF6c0QyMmk2Umo4b2pUUFFUQytibnNsZmZRWDV0RlUxNlRxTzhFcXBGTGt4Z0ZBbGVaemRNNXJTeVZ4eTNOU1gyR1hUVFl0dC9pMDFTbFJSWnk0dzc1eFdwdkIydHBrb0wydlZidTVaenhLdEhia0M3dGhKQmJQRjhvZHJnSlR5bmlqcGJrNmhhcHpKNWYvWXFJc0VBZkFRU1h5Ukt5VWFWUTZITVBnd0s2NHVvc0tra1pKeVRNMnFIZXJnekhURjk4NkYwdkl4OTNtb2I1ZUNPcEk4VFlpVXA0YkIyYW9xemxvdE9FdXJkQ3gzREZEZEViVkdkT0dISjhCUnFRaU5vdEloODR1WWlKSDFVT0pubFRjb3VBeXRzQXZueUpScHZNZ1FEU00vUGkvWXMreTBxaXV5OWhIdjdXUHFFWlVVdkZ0R2diZzJLOHIydFAxWGxKdU1zMXdpN2c2TDczKzNZRVZjVldkb0lSMW5TRDdKT2crcGVpRDJ1YzVXNFBHODdwWTlVRW5EeXF5ODFSaEN3S2JMWkpHTExvYlNkWi9PSFlDRU05YkpPMHhXMHFFNjBVSkFselJCNlJvYW8vSStoVnN6SlhvelZiTG4zWk40eUYrMTlpLzZnbDlyNTEzR2ErMEpjWTlxZGkrS3EzZWEyVHZqdHB3SW5CeDBDTi9jUnFzeFNXY1JDY2RCTXA1SVhYbXBVNjVMTWI5ellwUVJyd1ZCWjFvUTBEQjhkSWJob3lDeGVSemE5aUliTjNrdlFpemlOeks0djhacUdsSDRtYzh0UDJkWE90WnNVaUgyTEVIV0ZzKzFhc1ovdlhHMXB1VkxHQ1QySDg2eU9reDFHVURxMW5NZ054UTFQU3lJdCtZd2VhYllzV2MvbHR3dll6UmNSWWF1aFFGVkNHWW9iVnpjd1FzcG9LRTJVclJvYXRTM21hb1g4Rm1FNFYwZ2hEVzZPQTJsNmJOaVZmTmdYa20xRDBDSHhqdHNrN2pnOHAzYk1GS210ZVBLbWJjcXFXNnA5ZVJQVnJjRGREOXI3bnQwaXNVM2lsaVFEVWZiMFlwM0tudnBMZml3V1lVdUI1WStQSHU5TzlraU9zeXNjZ3ZRRTBUOCtEalhzd2NxbE41bTdmSC8wa0l3MXJvVWJ4T3BCY2U2SmZUSnJqNnFVVHZTNE5uY01kK205VGU1NWhpWHlVTnFYdEwxanU3MFQ5elhVempuSFNBZFpiZmR2c1M4ZUVyR1M2R1Yxb2FEQkhrcTV5azQwaHgycWFxSGhLY1BvVnJDdGxkRVlDS0NsdDBqNlJReE5IcVdLOXpFY3FXZFpBdFVyZVRhU2dpNS91V3hsSy90aVUrMFl1cC9YWU85aHFuU0tMTGJ0WlpXMTFaeHpzU3B6UitSVzU5UDd0VnZiZkJFT05NYTAycnJUdVprNGx6aVV3bnErak4xS0hXbktyeDArZzRKYTR6VzEzVHpMSWVyUFJoRVcyKzhpREdzVXhoNlBreFoxbnR0TnI3T0JFM1lyRGlmQUlKdFRxcnNVVzRLR1hKcnlRZTg1cG5mV3FhcDUwY0pZVWRxdUU5Z25qTFBWRHFhS3RuZWJIcVFOOG4zWHEyM1ZRcG0xbGNsaWRYTVhDeFM4Y2NxMEZzc2MxdTRJc2pQV1lFZ21ZanBDVWZLZnlYWkZicDNGcWJES2tHamJLRnFjRzJ3aWZ2aGVFbnF3RFdkT0RTZHFPWW1FNGxudGNHOWJ1TytuQWx0Ujl1RFJzaTVxL01DY29qaGY1RlFDNkZTODdabUFJdzcyR3JLMks2S0ZzYWJaeExYcmEvamhUMTlpcURYUUw1U0ltNWNWb1VRb3g2b0NhSGgvaGZLTENRVkRxYlBmR2VVOUJJZ3d4d2o5Ti9JS0xtMHY0ZUdlQ1hSM1JUcWwyLzVhcnMyL2FLc1RvR1BvWHBTNVJ0dldqQnIwcXRQdFJtdEgyY24ybmVYaWgrSld4cUphdDJTbnluUmxsa0h3eU9aS2VPNUh2MEN4V0VXUkRhUUI4dG5SL2pnQ05NVGdmVFlxTFdRcHphcVdCMW5PQWtvMHB0WWdWYXhzb1pEbE5ReGZXNCtnRVV4aWRtNE9aOCsrSmdXMzdmWW0yNTVTbFQzS2FxLzNKbldDUFVLVEdyZHB6cW1uSG40a1Q2U2NjUlIvdXgvdjNMVFRuN1QyT0U3d2tFMEREWWJhNnZJcWZ2eXpHVTVybXB5L2VUQkNVSWtTUUR5S2dZbUJCQTZ3ZDVLZ0owV0lwdk1WYk94V2NPMzlMSllXYzlqTlZObDhNdEdUbXNENC9WOUFIN2t3UUhpTG9rb2c0cXlBaGE3Y1lMSFl0bmh3MmJ0RDJzQStUSEFkNU9DR2JOSTZ4YXJaZXBsUFUrMHd0TjB1aldRSGx5SWNUOXJTTUdGZ29WREVOcVhUbmFNaERoTlZKTm1yMURpVmFWb2FEYmZKWHg0YzVuQ3hRbERKbE1waUp6bnQ4YkN3bGMwTERCMDZpRU4zMzQzZXNYRzV5UFRTQ3BaV3QzRjk1elhZYk43MkRJMGlrOW5CK09FVURvNE44eHBSNkZsN25uSkRVZG1yNFJ3akhjcjRudmhiR3Rkc05zK3dKZmVrTUVvaWthVzRuak5rZldaSVR6V2xHTTRTRFlYUS9iK1gzbUF2czRVVVBkUk5YVGpFOWw1cnF5b2ozcEFiWTh0MlgwOHlpdVJ3SEFyL0RrUWppUFd4a3p3OHd2bEJMenZRUWVtWndtNGE2YzBzS3VVeVBXYmc1ejgvaC9HSkRURmR4VnR2WDhGZi9lVVhjREJGaGNQS29lMDlLZTQvS0tyZC9OUVVhM292VEhtODhwUHZuMlV2Y1Vya20rZ3BpdkxsMnZ3eVE2N09mbVNBTFhJYnovL2taV1JMYkxLeWs1enNqa2tVTE5IQTBiNDRQak0yZ09ieWd1QUk5ajlJQzlFZ3dpeGFvNzB4VG1sOHJBb0NDUGIwMGFOUnR1dENiTE43NWJQSWtQWDVxL2oxLzc2TU56bE9uaWZhZWpRL0hucDRDcHVyODBnZFRIRW9Vc2JKdThaeC96MUhlWHVkMDlvNitycFlZWENOM1QxZFNIUWwwRTVKQnRXUGswTUhUbmM4SjQ1R28vNjAzVEttRENhOE1HNkQyakNYTFZIRmgzQjlKWU5YejgyaVlkZ1NzVkpEdmJqajhBRjA5U2Z4Mmh0WDBCZjNvM3NreWF5dG8zRmpFMDZUUjRHZkhlWTQxWWxYdGd6RUpDY2dPMXVhVUM3K2dJeXlmRFl0ODFjaGtjZllxZmFReklYV01JcTcrT3g5OStLNTUzK0k0OGZ2d050dlhjQ1IwUVFXVnJMWUpCanB6U3JIWjBPWVg5dVc4L2QvK2VkL1FvUlRKYVpQWjZUbGFmL3gvUi8rZFBrengrNmFtcjI4a0pwZjJzSlB6djRXbCtkWEJYWWluOHVqd0VwYUVaTlNFYnBjL0lXcjg3aHc2U29HQjRmNUdNU2R4NCt3UXp6STFkNUFOQ3JxTjAwMmpJSlJOb1I2T1dQemM1TERHWnVYN1FReElCR1ZoSnljTmhvY01tYVFYdGpFZTV5Slo5bk4xdG1KRnNQVWdWR0tnczExNWw2R09Xdmg5ZGN2NE1xVmE5amVUbU9MemQydi9zVVg1U2hhMFBlcjU2NWg2bk9uWnVpMXAzL0hPSEZzWlJvWDMxbGUvN3VselIwMlJMdlF5MlpQcGRiRTFjVTFMdFNIbmxnUGZDVFNUTGxBR25DR0dsOSs2RDdvMFRpTzMzbEk1b2hYWlUxWEwvSnZQL3NrQkJubVNUdzV3QWdJVTJ4b1V1MEw0eXkyNTVzVjNrZVVTSlVLZHRkdm9Nb2g0MnFtSUNlcDlXYU5zL1VzUHYrbHIrRGc0WU9ZdjM1TmxNRDQ0d2Z1d2Z6OEl0Y1N4OUdqeDFoTzZUZzBNWUZMRitZUjhnVWYvc0dQbnN2ZjJyaWR6YTM3VHoyUUdCMFl2RDgxTW9KamgvcHdmSElNbXhzWnlpUTJVYmMyR0c2MlZQdFZ6aEVFYW9weDFiRTdUK0Q0SFljSkNDV01uN3lQL1pFQ2Uvd1JHalhJeVdpZjlKYlg2NVVBSU1vaXN5RU1LMHROS2FVY1E3SEMycS9KdWNCU3VvQUFhZVZnZnhjVmpvYUJvUlRIWFJIOCtaL2VnOExtR3JaWitBWVlCUnVjdVllNyt2R0xWNjhnTlRHSllMUDY5RGVmK091YmhwQTNHU2VPb1FNVHJ6ZnJ6YTlWR3MxNGJ5S0NFTC93NHVWckdCM3F3V2Z2UHNTNFQwSjBDbmE0R0VHc0d6c1psaFlxdnZ4blUrUW5EaUY5REVreDRHQnoxaGNJczUwWG9jZFVSMkVJRWNBd05ObUpodHV1RjIzcWVxbUtYSzZPK2JLSjNWS0YrV2ZoTXhNak1MMGhuTCt3aksxZHBnUUZRNzFZd052dnptTXJWK1RtVm5IaTJDVG1OeHZZTGFyTC8vYXR4eDc1b0MyL001K2JtWm5PcDFJbkgrN3VTYzdtQ3FWNEtMeUpiWExheEVTS0lhZFI3VGVvUkV5cCszUi9TSTZ6M256akxaVEpaMzVDZTR2aDZ1L3BKMEp4a1hJaTZ1U29iZGlTVmlRaGsycUVGSk1sRSt1L3drWWF5OXMxdk1WY0Z4VFNIU045RExEMksyaTR3SEJNcDNQNHhRWmJFMmFlcXFkRk5BNmd6dlJZV0Z0bmFzVHo3MTFjZlJpM09EeTNPcG5QYitXUFRUNTRUZmZyWDB1d2g3K3hzY1RpVTNBUU9MbkpNbndacG5UR0FHZlZzWUFYbjV0SUVpZDlTS1dHNkRWQ05SY2NvTEEyYTJWSCt3bmVNMHlIZ3cybjJKVWFVTlJ2RE0rZHhVMWN6bG00dHIwdHA3VmkzdDdQY0h4M1lSMGxEazBpQWJZSW03dlNFNks2YndtOXE0aXlSdVgzZXIvKzlxdG5YcitWSFIvNlU0MlhYdnJ1OU1SZzd4TXhsaWFpcDlKZ3J6L0w4UlQ3eFZ5ZkdCbmJHQmhNNG9GN2o4TWt0Syt1YlRDdmZFNzRNWWZVVUZSNlRaVTlGOXNaZzdsVEpDbDh4UmhMdE5xM013aU9IVUhKZHVZVEJvVkRvVmFuWVZ2SVU2K0tka1N4V1VhZUlGVVR2VkdHdUJoVHgyTmR5QlVMVC96MnBlOU1mNWdOdi9kM0tOLys3cGt6dVowYlQxaTJNeTQrMHRXSEJHZmdIazVERFliYVppYkhqaFU3eFVTc0xmS2IrRVdDbUduN2VFNE1pNzNoQkZQSzQ5UmVORkFNTUIwUjZNd0FtMFJKVDNjZllwT1Q4SFBCWHJnamF0NjdVcW5LR1ovTnFrTnFYTEVodk85SWZ3TDMzSFVFazBlT1BQSHUzTXlaMzdmK2oveVJ6Zi9NL1BRTVUrUVJaaysreUMvYnFSSU1oUGdSTzgvWVAzOWhBZGMzYThnV203S3FsdTh4N0FURTZ4d3VDaVVpTzhiMHJqVFVuY3lhZGZaTjlDaDY3N3Jid1pXZ2FNcFNRZkxhQTlGdStCWE9HempWOVhvOU9EU1dSSnhVY3VMSUdJNGZITXpyamRvanp6My9uVE1mdGZiYitublU4c0xsYVU4b2ZLcHN0SmJyb21EbFRnNlBqQ0hBVHZHL1B2VVB1TytCdTlsSkZnMFpqOXg1VTFhMUxkbFlsYk53WVpqcTlQaUZ3bW14bFY0cDFwRThjYThrZDFINENvRmd1Tk9JV0Y4UzQwTWtmcXVKc0YvSHlZbERHQi91eDVjZXZHTzVsc3VkK3EvcC81NituWFhmOWcvYjNwdWJXWjQ1KzRNeGJ2blRJcXlvR0RIUm5jREc4aGJldmJLRVNSSXAzSUdnOEpCNHRJaUl2b0VVRis3dDFJWUNXSFlwbjhZKy94VVdzVlU1S05FNC9oSjVyTGhkTlpVR1g4OFhXT3h5S3N2UXZYeHBEcXNiNlcvVlFqajE3OVBUeTdlNzVvLzFrMFJ4WEhsbjVpbFRyNDNsTmMvTUprZFFpeGRYc0hqcEhYemxpdys1YlQ4THVwaDljMUU2UGRja0lxcmh1UFNPU1cvbVZwY1JPWGdVVmZKV09CS1hiUWFoUTczVW5GMGNIZnZJazJGcVJJL2lwVEJ2aUlKMXByODNlZXFWTjMvNStLT1BQcEgvT0d2MTRCTWMrVXdtdjdJdzk3M1UrS21YRFY4Z25pMW5Kcjc1TjE5RHFaaWxYcXhLT2lqbTgxS2VCZU1KdHRxanNtRDFjSnFqVXNLTlBmQ1E3TVZFaUhqRlFvNml2WUdybDYvTDM3YjB4S1A0a3dkUElWOXF6cXl2clR4NjdkcWJUMStZTzdlRlQzQjhvbC9LdG8rZi9ldy9aL2cwYy9ic2l5a0N4ZWxhdWZxTmFxVjBVb1J0bmNpNHM3VkpUUmxoWHZrUkdSeWpBRTlqNU1BNHlaOTU1dFZRSTZnVWNqbjJYbXFVYmpXRU5YMG1Hdks4Zk05ZHcyZis5ckYvL0ZoZXV0V2g0Rk0renIvNFlzb2Y4NTRzN201UGxYTDVFd2VPVHNZWnBpbk5vOGU5L3FCRVQzbzBYNkpyUytYODNPcTE2eXZoY0hUdTI5LytqK25wbVprLzJLRDl4LzhESHRuRTlOWUtUVE1BQUFBQVNVVk9SSzVDWUlJPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRGNBQUFBM0NBWUFBQUNvMjlKR0FBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUJqVVNVUkJWSGdCclZvSmNGMW5kZjd1K3ZhbnA2ZkZXaXo3T1U2OHhIaUx3V2tTRmdYS05HMVNFRk9neVhSaEtXMHpNQ1ZPTzIySE1FQXlhYUNGUXBJTzAzWTZ3d1JJcHhuRzdaQTBnWWFVd1hJQ0pJNlRTQTVlNUMyU0xkbmFwU2U5L2IyNzhKMy9MWks4RUdmNU5YZWUzbkx2L2M5L3p2bk9kNzcvYW5pYng1N2Uza1F1bU9zTDJ1YjJSTElsQmZnN2dwYWRTTVJpaVVEQWdta2F5R1lYMHE3cmp1UUxUam9VRGd4R3c2SDlSaUE0K0tsNy8zMEViK1BROERhTXZ0NVVvaXZSZFpmaGwzckRnVkJ2YTFzM211Tk5QT0tJaEVLSXFzTkdNQmlBNzdtQTdxTmNjVkFzK1ppWm1VRTRFa1l3RUlUbWU0T0ZRdTU3NmJuWnh6L3lOaGo2bG96N1ROKzdlMTNIL1VvNWwrOU54cG9RaTBiUjJkYUNOVjJkYU9IL0lScGpXQm9DbkxobFdMQnRDNzd2MTg3MnhSZ2FXSUxyT2pUYWgrTlUrTDZBOGZrNW5KbWVldnhuTDcvNjhPUDlRLzE0azhQQW14Z2Z2UEhhSGJ2V2R6d1dpOGJ1TFpmS0tVUFhFYktEYUdsT1lzM3FiblIzZE1EaVo0WWhobFU5WnBtV09sZlROSDV1cVBEVXViVHlLdWN6VE5WQmkxR2lzZmxLWmROaXR2akozaHQzOXpZRi9QMm54bWJTZUlORGZ5TS9IaGdlVG96Tlp4L2NzdVBHQWMvMWVuUDVQQ3BjYmNNd0VXTG90YmEyb2luUnJMeGpXU1luYmtJM2RCNUd3NmhnSUtBK04zbU9MZ3ZBdzdadGRYNHdHSVJ0MllqUzAySER4dXJPTG5pZTEydUh3c00vK2I4ZmZRVnZjRnl4Y2NlR3gxTVJQVERnT2Y0ZVJoUTlFa0M1WEZZVEROZ0JyT3BZaFNoRFVlT1hIbzBUUTJ4K3JtczZ2V2FxaVlzQllxZ1k3ekVrbGNIOFRvYjhMOFBuUzRUR1JRUE0wMkFJcGtVUTBqeGtNdlAzbmg2ZkdqNDJQSnk2MGpsZmtYRkhUNTNyNDgwSE9LdVU1TWZNN0l6NlhGWmMwallVRHFySm1aeTQ0emlRZVlyUkVtSVc4OHoxUFBFQWlzVWlzcGtNeXN5elVyR2tGcWNrLy9Nb0ZvcktZTS9od2ZBVUVHb2lJQ1VTVGJBWjNxZFBEUEhhYnNvMnpJR2p3K2Y2cm1UZXIydmMwZUh6ZDJtNjlrTWZsWVRIRk0wWEYxRmgwbGMwRzJXUElSV0l3S04zU2s0QlRpbExlMHB3L0NMS3FLaU1kdFdFSGVUU2k4Z3NabEFTZzdMOGZqR0hjcjRBMzNIaDBOQWlRenkvUU1NTFpSVDVlNTh6MDdrZ3M5UGpDSVREYUc1dVI3bVloMmZvQ1V2M2ZqZzBQTGJuTFJsMzlQVDV1M3pYZTBpOThlVm12c3FITmF0WDgwUk5oVjJBNGViUW03TDZWUVQwWVJNODVNTGlCYm9EQXBBK284OE1FRWdFUkh4WGVhT09teEtxRXVhMkhMWUpUVTZXc0dYWm1Ka1lSNWs0czJuekZwWGY0bDI1SGdQandkY3owTHpjRnk4ZFBkVlhMcGNlTW1zNUlVWERrVnppbE1LeEtFeUJlVTRxazFsa0xiTlZuWklKUmlNeHdyNU43enIwbklZU1BTRy9DMFNpQ0ViRHFpeG9yZ2VYaTZHWDhpb243V0JZNWFHRWRLRmNBRCtHeC9NcVpRZVRrN01JdEhiRENqTkM2R1ZaTEdneUMxOFc0Y0hqdzJkSE5xNWI4L2dWR3pjd2NDemxlOW9qUG91dDVJcmtqNlM3NUpLc3RxRGljVTZrNkZZUW9KY0VLSnFUeldocGFTRUFNRnc1MFFyekpwM0pZdno4T09kaXdZbzNvMzNWS3JRUVRSTTBScXNRYU95UU1rcEtRS2xjUVo3aG51TjFweGJ5R0JrZVF6cGJSaWJ2WU91MmQzSUJJbkFxWmY3ZTVYeXNLaGxRYnRjZkljZ01ibDYzYnVTS2pQTnRleDlmRWdyVlBLOEs3ZUlJTVpFckd1UEZtOHdnaXA2Z3BWWUZFMEUxZXRrVkR6QWFSeWNtc0RpWFptR1BjUUZzbkRsMUNpZVBIRVpUTElhT1JBdldyVjJEY05SbUtOcklaYk5ZV0ZqQThPZzVuQmdmcDBGWkZITkZwQmRLYU90YWl3Ly93Y2ZKYUNvS29NUW9YOENLNFNudlpaNmFadTFqbWRxNWM5MjY5RzgwYnVESTZhL3dsRlREVURHUUsrc3hGUFNRaGNWZkhjVGFnSVpOdDkyR1h4dzZRRFl4bzF4cWFpWUx0NldNZFFvbHRNVGk2R3Bwd29rejB4aVltR1dvQnRIVEhrTmNaNzZaRlN3dXpDSVc2a0pBa1BEOEtBNmZIc1c1YkltQUVXVElhOWkxOFJwTVRLZVJ0eE9JTWFRTHBRckRVTkNZNWNOaU5Fbk8rcWd4SGo4VmdpRjE4TzdsdHF3QWxPY1pqb1R0ZTFkNHNSWTJGZjZWNlNtam5FZmMxcEZzanVIOTczczNkbDkzbmFJNW12cmphbWtPRW1FZExmRWdaaWNtRVEvRjBkMjFEcDJwVGZqQXJiK1BKT3RoMitwTzJMRUFZSldobWJ3MkYrVHEzVGNnc21renpKNzEyTEI1SjQ0UEhtWVppR0R0bHZXTUhwZnI1NnY4MUhTRk5oZjZSR3JybnNNbmhuZGMxbk1NcTBmRUdCOHJTYWNVWmFJKzJZU0xnSHhCYXp5ZEVFOFlhMk1PYVV4eXFYR2VuTWNxckxsbFJNaFF0bXpjd0x3MGNaVm1vWkROWU9MVmw5QVpFMkNKSWMzUzRKWTFJaUJVcU5xMmh1c1RNV1FLY2k1QjV0b05tS3Q0dUdwVmlzYjVhdWtrOTAyOXluYmdMeGtvNytYUUxlTkJ2cjM1SXM4ZEhEalp5eE42YSs1U0h2T1hYOERqQlhtNGdwcEVPNU5obXA5ZmdJQitlN0tWeUZabXJubEV1Z29uUWZyRStwZG9ha1k4YWlCSjc3UkZJK2hvYVdkeGpzSEpGaEFpOEpTNGpMckxLZERDY21ZT0xVenNObVFSY3RQb2JvOGp5RFJvYWtsV0Z4aFZTbWN4dCt2RzFJKzZnVEwvWDUwYzdyM1ljd2J1V3U0cFpibTI1RDlHR3h4NnpBNUdZWWZqaUliWkJRUVhZSVpENk9yc0pOb1ZGYXYzV2ZOQ3pMOEtZZHYwTFVTaXpieExIaVhtaU00RktkSXdSYUZkTWhPM3dDN0FRRUdLTm0vVjA5cE1DaGVEd1VYS1pPY1J6TE5tc2gyUzJsYW5jeEtXTHNOVVBGZ0h1K1ZETXpUSnZmNkc1eVRYZk45clVCcWZKOVc5SnhlUTRmaFNZMXdZN1YzOHY0UnNmaFpzUm9WSm9qVVJaeWh5Z3B4aFJkWkR0eGtpQVhoRXVBclpSNTRIcldBWXMzUUVKZGQwWkJsK1RzRlhyVkNVeUVzV3F0SkJEaytSYmFKdktJSUtTMFptb1VBQXlqR1VGNUFua3hIdnlkd2FOQTlMM0pRcjBUc3dNSnhvR0Vjeit2eExoS0k2cWZaYXBuR2FSOTZZU0dDZW9WUWhGNXpQTFdJK24wTlRhNUs1a3VPNVhHRjZoMUhMU1RIVVdJMEZ1Z01zd0NGNk1CeUpTK1pnZW1vR2JvV2ZzOTU1cnMrK0wxU2RwRW12UUZvZWdoYzk3N056V0NBbEs1WEs5QnBSbERWVitHalZNQWxKWGIzV1BWZzMwSXg2ZXhyRzhYcWZxSHVwN3FuNmU2ZlJaM0hDdkxWREhoVkpiY2ZrWElFd2JxT25iVFZCeEJBMFFvRmNVVUxab3hkbEVxNWJ2WllWcENjcE1jek16bUoyWmhaQlRqTE9Ea0k4RUdsT3NKWjFJRmZJcSs3Qkp4aVZ1SEFMUlljTDV5QkdzQkhtMDliV3FraENqR1JhcnEwV25LL2l5ZnI3SlkvbzcxTkc3bnQrSUVWTGRuakxMQmVqeEtCR3d2STdVOGd4L3cvUnp1Q3FIaXkwblVXMm1FT0laREV6TWNjY2dwcWdjRWREbDZKdXFuT0ZVckgzdyt6c2xQSnNsR2c1UERtRjR2U01ZaWo1VW83ZFFnRno2VFEyeVAyRWFETkNwdE01Sk5kdGdrNkRvelRPa1Vpb1pBVFRVQkttNG5xTmVVbzdKWWUvbEVvTXpZR0U5Skk3NUFkZUxjOVVybmxlbzdtVW85cUQwVEFFNFpuaUNXb2g3VDBZWlJmOXY4OC9od0J6UXhKZFl5NmxPVWwyNXlwa1pFSmkzTlQ0QkNwNUFnNXpicDdmWjhrZnMyUWh3azdPbkJ2RHozNytMSUtSRUFwc2lad0taUWNDMHl4ekxCaExZcGFTdytUa3BHcVQ1RnI1UXFHUk9rTDdwTzJxSStpS2xBcEcra3hETTN0VmpaQ2VYNzFXMjM2SlZVTTNWQzlXalZ3UE9kNG8xaExIek9RRUlxeHYyV3d6U2pTd1RBNWFxYkRZcys0Wk5DckxVQWx3RVlJTVJabHdzVmpocElGek5FVHFZWmFjczBRZVdTWlBjNm14bEpoZkw3M3lLc3NEUzBqWVFvN0lPMTNPNFpwb0FpWnpUYkluR0l1b3VYRjVGYzBUelVVTWs3Q1VzSzJuRStxejliMGRaamdjMmk0ckxhc2lQNW9nSnh3ZEhVV0JLM1RpeEFsczI3WU5rVWlFWWFieHhpRTg4TFg3MGRYVmhYdnV1WWVGT1kxNFU0TG5rdUV6N1JaekJSWmdobEJlYUgwWkhhdVNoSGdOaXd6WEUwT25FV1lZdGxGbldkdlJnampwV1lhQTVITlJReHQ0MytscEhIejFLTmIwdENBU2pLTUFHM0dXQnA5bzJkemV5bkNPWVdwcVNubHJnYWhaVHg5cHRUcW8yVndFaEQ1U2pMbkFucUZqeHpwT25EaUpyVnUzNHVtbm4xYVRuNXViVTdLQkpMR3N6dXpzTkxadjM0WkRodzZSRmlXcVJqZTM0UHpJRUJKNmtWNzJNVFE4U29yR2ZDUHE2WlFHSlBkMElwNHNYQXZMUmlRUWhwdHpVTW01T0h0OEJIbHFQcVYwaHMwcWdZSGVpaEIxaFhOV0NnUXlFdWUxMjNleDNoVWhXbzFFbDRTZkVHeEpGUm5WSGhKcThldGh1WFFRdC9LNVhHcnpwazAwaGtoR05BdXo2MzN5eVNkeCsrMjM0Nm1ubnNKTk45MkVBd2NPNE9TcElTVFoxdXphdFl0ZGNUTVdGeGZKRXp2Vi8rVzVNNlJoVGRRZ1oxa1NTZ2hZM1lxYVNkY1Z6SmU0Nm5HMGQzR1JGdW1QcmlCbFN4T0JMZGNpeXpEM3ZBcVJNWU1tbHlFWUR1RHNtSVBqN0F5NnZTS0NCS2xDMEZUM0ZjQVE0NHhsWXBPMFhzSTdQYTl1a0ZjREZHVmN3bXltR3h3VzI1NmVOWGowMFVmVjVBdTVQTkx6ODlpNWN5ZmloTjd1N2k2c1RhMUdrbFNvcmEydG9WaVpVb3ZvRlYwM0dYSmhiRngzRlY1a1d4T3lERnpUMDRrNTByTWt4ZG5XSkxVVzFqV3F5NnAxV2N3dk12ZHNlQ0cvV2k3b2lFaEpsdHBuQ0pjdzQ5cjQzYjRQMGRnb2tqeW5sZlRPNHYxazRzSlNKS2NhVXVCbGg1OHdyM3ZYTy9Ibzk3NlB6Mzd1YzdoMnl4WnNZV2h1Mjc2ZHRDbWlMalpISTdkdTI0N3g4VkZNRUVoNlVqMDRjdmdJa2MvQmU2Ky9BVmw2UEdKS2lqbTRmdXM3c0VnQU9YV0srY1dhY05YcUxrek96cXQyWmUyYUxxeHFTeXFHVXFKWGh2aWI4WE5UN0M3QzZGN1ZnaVlha2M3a2NlVHNPYnpubzU5R2NzZHUrR1dpTnR1b3VrSldMOVNTWHZVaTd0V2ExbG9vcnNnOS9hcjE2L0dQMy9nNlNhK0w5Ly8yQjRSUTR1alFNWEpEUjFHaEo1NTZVbjBuQ1QxTjFVc3dxYXVIWG14dHdhZis1SStRWi8zU1JQVWlNN0UxRjczdjJvVXVxczVqWTJPc1ZXbk1abktZcFRkR0dmS0xMUEtDZkFteWxlNzJUbkxTRHZRd3RLTk1CVFpUR0NaekNiZDFZdWZ1ZDVHNmVZcnU2YWJlUU1EbEpMbld4eTB6ckc2VTF2aTk4SmQwaG5MYlQzLzZVNVZISXBvT0RnNnEvK1dFNjNmdlZwSmNrRHJpMXEzYkNPaysycmtYSVBFL2ZPb29QWmdqYTJLc3M5dVdoWWtZSG42djl6MjRidHNXNWVuejAzTTQ5dHBaSEJ1WndIRjY2dnpzQWhaNGJadWU3ZTVzVjAxbm1ndHdsb1g5bFdNbnNmUDZtMnI5bTNRQ2JIRU12WWFNUzhaZGJ0UkxXdlYzV3RyNDJCMS9mQ2RCSkNFSXFCUW94cmFncGt4ZVdFc3ltYXl1REM4ZWk3TWpDRVJ4aURYcHpyLzhETFhHZ3Fwbk96ZjBrS213RXhEdjhkVm1Uc2FiWXF4UkZnNHhoSE1zNWo1cm1EaWpJcnFrMUNwTDlFeVJKSHhNTFdieDhySFhNTXYrN3FPZnZGUEpnUVJiR200andvZ1JUbmtoR2k1L3Y3ejFhWGhVMDRhTXozNytiN2laNFd5cUc3ZWlXVjEyc21vVUtidVZpYjUvOTdmM1lucDZWRUgrME9nRTFyT3pYdC9WSnJPaEhCNVVEYXZQMllVaTVJU3IybkQ0eUJHY09qdkcvRXZERVRyTFNVL1NxOWxjRGhtV2dkUGpNM2gxWkJ5My9lRW4wZFp6TlEwcktRSnVFanpDOFZpdHg3L1FTL295WTdBaVBHdjVOMlFXUzhVekZtdFIvVWVxMHRjYVhibUEwdlA1dldVYlNxUGN1L2ZITFBDRWVTdEtiNmFoMlZIOHl3OStBb3RoZTlNN05qQnpITGowdm0ySVZGZkVhb0xJUjI3OUhUeDNZQUF2RGg3RitmRkp2TUxDMzlxU2dPRlQ3M1RLbU1tVThPR1AveWwyMy9CZXNwT0thb1NsOXc2d1lHc1hHYlgwV2djVlVjU1cvUUkxQXc2UmVPaURGN3E3L2h0ZjZmbUdDbEdia3ZuazlEd2UrNjhuYUdnRXNjUnFMRXd1c0taUmEyVC85czMvZkJLUlAvc1licnoyS25xTzdRelppTWJKR3lUUUtTNU8rL3ZmZzgycE5YajI0Q0JPam8xaitPd1pCTzNxdGxhaUs0VVAzdm9oUmtXQmpTcnZLM3hXQkYvZVV5bTAvbEpPMVFHajdveTZrVExFRWRYUHBUUHgrN1Y5d3A1TDJ2eUY5S1Y2QVZjcHdLSUVnNnJVRisvNU92WEVDZlc1SE9tNU1UYlVVMHIvMER3YllUWkZYL2lMMjNHamlEcnN5UnlDVE1VdncyTmY1N0hPbGVWZ2JaeEp6NU41NUZUT1VSYkFZODg4ajk1YisvRGxMMzhKeFV5Qm9wSEpuT1hHSmZOV1RkWFhMakUzZjhWUjcrbnFuUUxMNlRyOTVwMDcwN3hBLzhvZmU2cVZyN3BjdHBrc2ZQV0JiMkg0dFhORVN6bXhwRDRQeFR0NU1WTWxQMXR2NUxVUXZ2U3YzOFcrSXlkSXlybGJ5aFVNbTJHbHFkQU56Sjg0NlZ3U1Y3T1ViTDVxRFpvVFFiTDhyTXFwSHoveEpKN3YzMS9kM3FydENsMWl2VmNZZDdsQkR3N3UzTHh1cE5xSnUrNytGU2ZDVXgxQmdPSDMycW56dU9mdkg4Q3JneWVVdHp4S0RBcXBtRnNHTzRKd3JJM2hKRGNpVkpDdEdxRW0zUGZ0NytQN1Avb0ZEWW9vdGN4U2NNNnVJaSs5VzBrdG1qQ1RNZElzbDRzaVhZRkJSUHptTi81SkVmWXdjNjNPSDkvWXFCbnNlOTlUUnFvM1pmMGgrZGRYb2dSWE94VEY1TlFzdnZxMWY4WVh2M2cvRGg5K2pXc3JiUVkzR2sxUDdZaHFxQUpQSkVvNlpzYzRXWDZuRVF6b2NUdlNqSC83NzZmeHJVZjJRZ3NLbHl4UkxLSXFKbW8wT3dTSGRYTitacDZxTW45UC9hVENLUEJJdkNkSUV2YnUzWXNtaHFRc25BcC9SUnY4WllkWE82cmpRaFZNSnNlMVUzc0hqV0R1UDNoMEh6bGpiNDd3L0ozL2VBd3Z2dmpTQ3RlYnpKOFZNcHJjZ2tBaTkzTktjOGd0VEhEcldQb28yZEIzbFlEcUZvRzFyVkY4K3gvdWhsWllRSG94ejU2dndsWXBoOUh6NTVDdEZQSFM4RFFlZi9abFZkUU5peHNpTEliOXorMUhSMDhYYVZxNVdvWThhOGs0cllicTdsSWVOc0JRaWNmK0U1dlc5dlF0ZVk1alByMXczek0vMlllLyt0d1gyQVVjWElhZWVpMzNhc296TTFWSkI1TEF2SlJHeWhVSUpLajd0MUV5WUJuZ2VsVjgyVE9RL1hBVDQ0c2wzUEhYRDVCKzVhbHljY09qa0dFblRzR0hIRk5hcWxuS0RZM0ZRdldhOTkvL0FBR0lhV0hGbGluTVduVWZqTUNsamt1QWpFT3ZFUzRlcXI5dkJQWVBIdjNPeUptejJWN09PVldIM09XZVV0MHY3MUZuNCtvN2lwbWladm5VSjJVdjI2SDI0YkY5c1hSWDFTbkRWeUdDRWs5ODVya0RhRzFmaFZSSE0rR2VIbUZUSzV0c1AzLzVNR1lvNUVydko3dFRGdXZqNmRObnNQZC9ubUcvNXBHMGIyR2FCQlRNSzVJc215SHdheVZBVnpKN1BjQllsZnMzcnUyKzd5TGpaRFIzckR2RWsrNFVyMmpMNHJtcURlb05iNHJubE5IcWMwM1ZJdG1tMGdnS0h2VUVrZE10UTFPTXhSZVFZU3Zqc0pTOHdDSXVUelZzdkRxbFhzdjg3WXUvT283SnhXSnQwOUZXTzBrdVE5czA0M2o1bGVQNE1adG55YzJ4c1FrVy9oWnVsU1dVZ0ZUdENMd1Zuak1jM1B6d3c5OU1YOUs0OVBUSVJMdzUxY3dWL0swbGRtSW9JeHFjVzZRN0NWRXhzQmF1Q2wxTlVZQ3B2NFFUcW94UU0xZnRTa1UzRklwS1lmZHA0TURKTVVVRzNyMTd1OUlqWHpwOG5OeXlvRVFvajhCU0l0am93bTdjQUxsc0ozTHN5QSsrY0FUUFBYc0FyNURUaWxpVVRMYWhqZEtEdnpRcklkYjNyVi9idVdJVDhxTEFUYVY2RTE3QUh1Q3FwT3FkcjVxKzU2allGNjlKV0NxdGtCT09VRmVwc08rcUtsRGNPYkNxVzhiWnVkZTRjb3NLZ1VseWhOK3IyNGtSQyt3UlkwRURXOWUyazBDSDhNdkRROGlVZVE5MkhJR1FhSU9rZTRGMnFteHRTaUdUemwxcXI5ZkkreksyYk4rQXV6Ny9DZXgrNXc0dVNHWGs2dTcyZFJmYWN0R2UrTWhJZjVwSWR6TTlrVjdSWXFoOWFLTjI2TFdXbjhwenVhSVdRT3FXRWxWWjd6eUNRamphd2ZCaUdSQSs1ZW1OdkpDTlJ2bDNpdExkTDQrY3dlaGNqa0t2RkJycWozcnRTUWlXLzJUemFwWVdXeTIvcHpZYXRZYU9FcVJDZlh6b0ZQNzgwM3ZZcXUxUGMvZnBabHhpWExaQldyLzF0ajVHMHcvbHd0Vms5bXBoQ1hsa29xcGR1RVcxbFNzZWkzQ0RVS1NEc2w5Uzljbnd3aWptSnhpKzUrbEJTejFzSTMyakRKSDNLcnllTGQ0V2JWT3Y1bStaaG5zTVNkMW9Ra3ZiWm5vOXlLWEtxY1ZSTTYxMTRKNXFZZzMxZUVkK2Nmd2orZlRwUys2Slg1WUd6RStkR0VwMlhMUEEzTHVsenI2aG5tSFFWWDlseUVhRlBQNFV0RlRYVVAyK3h0S0pmSUtYc25jdGV3bzJBU1dieXpiRUhYbmVTL0tRR3dZa3oyeXpER1dkZWtqQTlTc3EvRXlMT2lVUldPMmdlclZTc05Sa3F6em5ndDA5ZjM3Z3U1ZXo0VGR5bkxuSmt5OGtPell1c0xqZmNtRnBFQ0RSeVNwRVhMSmtSNmYyU0laQjcwbWVlWnIwWkdUMlJvQnkzSGx1Y1pWVXZ0UkJTcmE0Uk1EVnZPcmV0blFFYXFmSUVMUVVpY09nb0VUOWtuVE4wSmVlcUZneXpyOTcvRlQvUTc5cC9xOUw0T1ltVDd6UTBySDVrS2xydC9DQ1FXbmo2ekpBaFNUYVpIUHFxWHBXN2NFVVE1RXV1cmFaTEZ0WjhvaUhxWmZVdzI1cWg1VHFtRzdKUHJxbE9uSHhkcmtzWExYNlJKTFBjUGRkZVU2c2hlRVhVdks2ZXFLaStqZ0ZpYjUyeC9qcGZkOTl2YmxmRVR1ZG5SZ2FhdTNZOUFQWjZ1SU5Fc3U5dUx6VzFQRkgwVFlmalE3YVluaTUzR2kwVEVjOWtDUFNqZnFLMjFkQ0RoVGI4WHlGcE9KRktaOWxRVTZXRlpQZGhGSFRSZmk3RVc2cTNEQXh2TytGSzVuM0ZWUHZtWW1oOU96azhZZGIycS9SZkxXOTdLdlZyTE9WZXFQWTBEUnFPVklOWDdOS2R6MFJrMHp1MGpocWwwYXZFUU92dHZHaVYybUgwa1hMUkdHTCszZXlrMXYxbVBhdzViaDNqSTMwVDF6cG5EVzhpWkhhMFpjeVhlY1IzclJYYml3MVQxUFA2MVVOVmdDdzdNcWVUSmhOWDI3aEhFbndBdlhaa2dwcHc2dFdvZ2FkVS9XbUNpRENVbHlkY243SE5mMithOTU5N3VUL0QrSU5qamRsWEgxYy9ZN2Jlam1ydTVpSGZmWEhFK3NUVlliV1JCeFhDTEhvSXRRdEMvbVRETThpQzY4OFJMRFNPT1ZsUXJ5d0g5L3cra25BN3l1bVovcnhKc2RiTXE0K05tMjZKZVhiVmgrM3F6N0J2Tm14WElzUmozcWFveERVNUNaSmZ2RXNKZmlNWWhuMXdpeXNwOHFFUkJIUTlwTjlQNVNXamI2M09ONFc0NWFQRkExbEV1M2dyTVdyMjBrQ0VwcnBweGhvQ1VNa0NhcGQ2Zmt6YWM5WlRHdUdPY2dKbkNGSU1PUXFqNzhkQmkwZnZ3WTl6ZHVnV2phR0pBQUFBQUJKUlU1RXJrSmdnZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFEY0FBQUEzQ0FZQUFBQ28yOUpHQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQnUyU1VSQlZIZ0J0VnA1ZEZ4M2ViMXZtMVhMU0JxdEhzbVNMSGxKSEM4aGl4T1NXR1luQ2NRaFlUdW5MRDVwb2RCeUV2OVZ1dEE0NTdRbFhRNDRMUlJPU3drY09CQW9ZRlBLQ1Fra3RnbVFRQnhianAzWXNtVnB0STZXa1diUjdQT1czdTgzc3BOQXlFYjZrdkZvWnQ2ODkvdTIrOTN2L2tiRDYzd2NPSEFvRW9heDJ6RDByVlhENjlVMGJadm1lUkhQUlFUUTRGWXJxR1pTNlpYcDJiaVd5NlVyVG5YWTg5d2pjREM4Wi8rK09GN0hROFByY0loQklWTy9rNHNjc214bnFESzNnR0krajFCekMzelJLR3lEUnNtSi9NZmpmNjduUVhjZGxKZFRLTTNPb1poWmd1NEJqdVlNZTY3NzlZcGJQZmlKL2ZmRzhRY2VmNUJ4RHg3NDZaQmhtSGZ6enlIWGMyQXZKR0VuNXFCWGJGN1pRTlZ4b2Z0ODhNVzZZTkJJVDllaDBRZ3h6dE0wL3UzQzRLTVlIME5tY29iQnMwRUh3ZVZKMVdyMVlCbjZmWHUvY085aHZNYmpOUm4zOElHSHR3SG01NkZyUTJxaGZHOWxhUjVuZi9NRVROdkJZRWMzZkM2TjQ5V2RjQWloN2hpcWxoK2FHTWR6ZlQ2TFJ2RG1wU0pXeHMraHVyVENxTGswellick9QeEFROFh3SWJ5bUd3Mnhuc09lcmUyNTlZTzc0bmlWeDZzeTd2Njc3b28wK0NKM2h3YlczeFZzNjRCcm1yeUFwaTZ5c0RDSHpFcWFpeXZEVFdheHJxMGRsWEFRT1JwUnFGYXhsRW9pbVZ5QUx4REEyclkxYUxRWjFWUVdldFZCbGRHcTBscGJzMUdGamtCc0xlcDRmZmpwRUw2V1pIWTE3THYxdHAzM3ZKcjF2bUxqRHR6MWFZS0RjY2l3ZkwyV0x3QzlPUUs5clEwRjFrNW1KWWZVeWdvc3Y4Vy9sekdUbUlHZmthcG4xQ3FNemtJeWlkRjRIQUYreitJdExVUEhwbWdIdHZhc1E0TXZwTkswSUdEVDNBaWpxeE9XR1dUd05MR0paVW9uOERPbm1FZHhaaXBlVE0zdDJuUHZLd09lVjJUY1ExLzUxbTU3YlBUK29HNUZxcGFCczR6Q3FhazRDcDROUjlld3VMd01tL1hGTklYSjh6dFlZeVBuenNOZ1ZEcWlyYkJaajZGZ0NIYXBnb0cyTG16djZjZVRwNTlHUTMwZDNueloxZEFibStGMnRjR2w4WElaVitxT2Y3aU1lS1ZjUUg1cUJtVkczWkRQTktRZDNkdXo1N04vZGZEbDFtMjgzQW1QL2V5eE8vM056VjlyNmwwWG1Nc3M0UDZIL3hjUEgzc0tjOWtVNmlLTkNJWERjTGlRS2cwSmhVS00waExHeCtMSTUxYXdaZXRXNkxxQnFla1pGRXBscExJWkxLZlNzRjBYYjc3aWpaZ3ZGT0hyN1ViMzlxM1FRZ0hXSXNISDcyUGtMUGhwWUpuZnk1OGZnNUhMdzJBa0pjS0dZUVEwdy9qQSsyLzVVT1o3RHg5NEFxODFjc2VmT0hxbjUrcjdMZE9INWVRaS91NGY3c0haU2FaWDBJL3RsMTFHTDd0SUxpMWpibTRlQVgrQXFhUmprU25ZMUJSQnBMR3VkblZYVis5WENEUXJURjJEb0tMellUSFpCZ1lHRVltMjRKTWYrempNZ0I4TzA5QmZjcEFqY3VZbVo0RlNpVW1wc1JaZGxHd2JaYnNLcjY0UnZxNTIrT29hWU92YTNodHZ2bmIvcXpidTEvditaWGR3WGY4Qi83cDE4UHdtdnZDbCsvQ3pSdytocWFVWjlYVmhoSmxTSTJmUElwOHY4R3hkUWJnczNHQnFoaG5CVUgwWTVYSUZ0dTJxMnpRME5Lclh1VnlPa1NZcTBqR21ZY0N5ZlBqb1IvZmc5cHZlQlkrb1dSeWZnY3RyU3BwTFM1Qm5jWXhEaDNwdFRRZzBSVkdSdEhYWkxsanYvUGpXdDk5NDlZdW02SXVtNWZIUGZyN1haK29QK29xbGdMRzRoT1hGT1h6eGdXOFJ5ZzMwckZtRG5wNXVUSXpIa1Z4ZTRrTFprSmt5RW8wNkdyVzJldzM4aFBwaXZsaHJ6RVFGazNVcUtWc3VsMUVvRlBnZEJ3YVJWbHFJNDlvWUdUa0xmVG1MamNFbVdQeE1OeXdhN3FPakRMZzB5cmN1QnY5QUwveU5KRG1XcWRLV3lZQ0EvRk1vdnVPV2pWZDk1enVIZjV6K2JUdk1Gek9PeVg4b1pPa1J3eUFVazEwa3pwNURzWlFqR3ZveGw1ekQ1TXdFVEJwVno5ZHM0dWhxYThXdWE2N0docjVlV1BUb0VnRm1JakdMOGRsRnpHZlN5QkZJYk5JdW44OUFtQWk2UW5SMW1HWlNqM0pVK2RtM2YvWVRWSElGL05IUVRYemZZWjh6RU9pTXd0OGs2U2RPWUhwS2RrZ2Y5SWk0MlJKN1pCemx4V1FrNE5NUEhkajMrZTIzN3R1YmZrbmpSazZNM0cyc3JQUnFaQnZHY29hMTRTSEFZdmRZekVVdU1oQjBzSTZSdTRTUDFwWVc5Szd0WmUzMG82V3RHWjViaFpQTndzbmtjZlpaQTJ1WmlrOVB4SEZzYkFMeCtYa1ZEVEhJWk5TcVZVbE5Xd0JDZUFtL2ErT0JYeHhDcUs0T3Q3L3ZmUWhGNjluNExVZ2hHdnhja3pTbVhTZ1RRZU1KRk9lVDhCRk5kVjZ6cXRtOXBoa1VwclQzOTZibDZlT25ldzJmY1ZDamQ4MzJkaGpOemVxaUJyMTg3T3dJRXVrVUtwVXlicjd4YmZpek96K0pTeS9kaUs3dWRvUWJHNGtFN0UxY3FPN1F6YXl0dW1DWWFlcUR4NmpNRUNGWFNsWGtDUkJTUTlMMnhTanBaWTVpSklZeTJpSW9uWXlQNDRwZE42Q2xvMDNWcjhuVTArU1phS3hOSjFFZG5ZV2VMYWpXemhQVXVnVkYzYUJ2eDhjLzlaYy8vT3EzL25QdWdqMzY4NDJyODV2M201TFQ5SmhtNlhCYndyQzNEcUJ0NkRwY3Yyc25GNkRoTFc5NUN6NzI1NStDRndqRHE2K0hIbUVkMURkQ0N6ZkFzMEo4K0tBRkEyd1RUUVNlUmxWbnJZMU5pUEMxb1pzcUE4U2dTcVdpK3BtdUtKbW02RmloeUZSalRYN2hpLyt1YUpoOHBrdk5UaS9CZlhvY3h2d3lmQUpDckdrLzI0YWZ0ZWZXQlZGMzJRWTBYWFVGckthNnp6L2Zub3ZHbmZ2U040YmNveWVIQWpNTHFtNE1JVDVhRGNhZGhoRGFldnVsUitPUC8rUU8zbzZHeXhtNm4xZnc4U0ZvNmFqVThrd2lKaU5Rb1ZIU0ZteW1sYUJua1BVcEN4THdrWWd4MFZBbGt0cThsME1qNVZHMXl6V0FHUjNCMFY4OURvMDE2NTRhaHphM3hENUg2K2x3azlmWFdidGVuUi9XaG01RXJ0b0Npd1RBSUR2eW1jYlFrNCtkSHZvZDR3S0dmcWZCUnV1T1RrQi9hZ1JtZ2prdC9FLytvNEg5YkFudDdXMFlIQmdBMU5KcVh4ZmoxVUREZE5VWURaMHA3TEkyYytrMFptWm5FQW9JQldORXBCYjVtWHhQVStpcXFjbEFHc1dGYU1xellsMU0zWWUrZnhER1hKb0F3alV3L1V3K05FbEQ4bFZqZlRlQ1Y2eUhHWXRDWjVzU09zY3lKaXByQ01LNSt3WEdqWC83d1Y3NmU3YzBWbE1Tb1ppRGZuWU0xV09uWU5Kck9tK3c4WkpOdU9PT080VCtxRU5ndkdZaHoyYzllTlV5UERaWmx4Rnp5aVVVK1lnUXVudGlheEJqL2JoMlJhV29OSDU1Q0phcmxCUUQrZHFyc1EvMTJ1YmZKOGJPSXNkcmluUEZZaTFNUHR2YkFkL1dmbWlkVGRDWW1xYlVxV1FLalFwSStrNG1VSDd5Mk5EeGZmZEhMaHJuMzc1K3QzSGxWbFNqUkR6ZVFHWXNXYjR2VndGT1RRQ1BuNkVYbDNIYkxidWhpdVBpTE1CRlZZclE4aGxvaGJJeVVwcDJpVTFhWDAzRENnbHZWM01EcnQrMm1XU2E2V1NvYjZrMDFGYjdZeTFpei8wdFI1RklPRFU5aXpKVDBldHZoM2JwV21oZDVLQ21wc3BEM1o3UjhoT1B6UEVGVkgvOUREU3lHaC9Mdy9WWDdycllDaHkvK1JHUGNHODJYd0lrVTNBbTVvRk1EaWJyUVJjMlVNZ0Jad3J3NkQydm81RUxxQ3IwY2xsVEtkS3hSMy81Qk1ZVEMxak81ckMwdEVTd3JMS2ZCUkRqZ0RvWTYwUUhKL0kzOVBZaGx5L2hwOE1udUhCWHBiTHJhclVhbEJTdDVZSXlrRWlEQ2lsWE1xeGgwMlc5RUFDV0xxRFZUbEdwaXpLemhVQlRJVVpvekJLZmpFWHN1YWEwRHc4N2xYR0owK085NUF2YmREWkdWNzVGaXFNMTFVTmJ6S0k4bFlDVnlxbU9JVXpEYzBySXh4ZWg1WmE1K0RDS1MybDgvOXNQNE5tcFdTeXNGSkVndGRKNG5RQm50ckludElscFFsYmZRYTdaU3RxMmt3UzV4TThmT1g2QzlWZmx1WTZxTzA4MWN4cnNYcWhrMGk2YW42QlVVZFZxT1ZKRFZFOE53OTdzRXFvc0Z6TlBZa0FLNXJLVmVKSzlkSklkc21ERTZvZU9IejhlTWQzanA3ZjVlanNaa1ZZaW5hR0lya3VJZGJwYVlOSlFqL0RyVGlUZ2tlVi85VjgvaC9qMEpQcWJHckZ6NXcxWXYyc1hOdlQySWs3dlpRbmhMcU1aNitoQ1kzMUlrV2xaVlRNYmVYMm9qbTBtektIVlFULzc1MU5zRlV2WkNoRlFWM3cwMWtLaXpmUE96eTJpd0toTGl4QkRpOFdpbWpna1pZV1ptUE1FcFNuS0dFeFpTK3AwTmRvU0U0MFJjM3ZhT2VpMmdsZVdPdDV0R3BtbEllL3BGT3p4QnVpRDNkRGFXeFVXU2dvNGtpS2tRRm9IbzhtYWEzb21ndi81NWE5eCtPUnA1T3FiTWZDZTIzSDV6aUdjSnY4c1ZFcTQ1WTAzb0gvOUlDbmFBdkpjVEhlc0IyMnM0d0lqbW1ka1MyenVBWjlKUThKSTUxWVVkMnlMTktDbnZZT0NrWWN0YTd2eHk5T2pxbm16cjJCNlloS0o4NU9vTDFiaFQrVVJLTHVxLzZvUmx1Zm9ESmZqNDNOWEsveGRKTlNHVm5NRzJ3L3JiWnZKU0c4VlJxOXpITkdPbndaYVNKUFdkc0dOUm5nQm80YUxjaTkrK2VwMzc4Ymp6NHhnb0xVSjE5MThJL1N5alZCWEYrN1krMG1rcVdMVis0TE0rU0M2Q2MwT3ZRdHAxcGtNcWtUSitXWHl6UFF5c2tUaUpqS2dCTUhHbE5HSGFMZFN5R1BMNEFZc0xpWlZQNnRoaW9mVHAwN2d2NWdwSFZZWUczaWZucFlPdEpBTUNQc2hRd0I2Mm1EUzhRNGRWdkUwQlhiaUYwbEEvdCtyVFgzclI4Zk5kSGFidEdYWGtPWk4zc2ZGZVV3VnE2OGJMZ2RTVnhVOGE0RW9XSm81RHpvTG9mNUJPSXdXWng0U2JhWUJhMUJqUFpBVksvN24wZkF5WjhDVlZBclRYUFE0VmJHSnhVVXNFS2dXQ1ZEei9LeTd0Wk5CWUNPbkkzcmJPeEZrYWoxdzVPY0tHSVJQRHJaSDBjQUc1b2kxL0wrZHFiMXA3UUMyWEhzRE9yWmVna0Mwb1NaSFZHWDhJYnF6NXhsY2cwdE9YSjFJeEUxOXgrWmVkekVEKyt3RURIclpOUWpqQWk0a3p1NEM2eTNLTVdSZEx6eXljNGRHMTYwYnBGdk1XcUdYcUZxNWJOeFVnWVNWQ0R1QlVEZnA2YWtWRkdqNEpJV2pCRzgyeFFsOUpyVk00ektvY0NFOXJNM05mUU1ZSTdHMm1TRnlibnQzajJvVE9vMEo4bHArQWtXUlRsSTZKd2ZtQXJudVltY256dEI1Q3lQamlNeEYwTkhaU3RwV2hFaEpyYUsyVFM4UTNUbTVPMTdFdERXT05rd3pRd1FmR2xQaEdHSGxpcHlyMkl1WUl1WmlDaTVSMFdtTHdDUkxNVnJyaVp3MHpCWUFJYXRueEx6NUpmWTRTVU81T3BkWExGTXZLWEhCQldRNXhpU3pZbVFTYzFUSE11eDdOci9YVmQrRStkbHBGRmV5NkdxSjR2TEJUUmlkbnlWNkt0bVc0MVNRU01zcGcwNXNXeE5ERTQyeS9DSGt5NHg4Y2dhcDlBTHF5R2ZuT1ZvNXlYbjQyWmEwamhqQnJFNFJlRTAzSTJwaWxIU1Y1dWl0b1VKTUk5eVplVlFKN3pyN2tpWk5nQ2ZvU1dvZjZaTXdyNmRrU2FDZWYvcHBCbENNckNCN2JoeDk3M3dyQ1hOWVRlUUM4VldtYkZVRUhrWXB5ZjZYTG9xaGVkWlhUakdMYkg0RkxZRW9Qcno3VnNUSVpBNGRHOGIzSHp1Q0M2T0tQK0JUaW5Xa2cwYXhqalhkVWpWRnVSYzUxcTJmMlpPTW4wZG1ha3FOUHEzaGVqUlJjUXY1T053R0xHWUQyWmJGZnFHMXR5am1JTWhoazlab2ZXdGdydW1BUFVGUGlwWlJaaVFGbWJod0VXeCtkZmduK041UEhzSFlRaHBCRnZOVjVKdWYrZUI3VmFPVnZRQkQwc2pRbGRwc1VCc1JKU1JIWTNYVFVCT0hjTlVscHVjZ1VkTGp0VC8zblFkeDVOU0k2bm5pNlk3dUxzVFc5c0FnUUhtR2NGQkhTWHdTVStHN3VjUWt4aWtlYWVUQzhoWHVTeUJuRjFGNTVqam56VEM2MXJmQlQxSnQybzhmU3lQYUdQRmZzcDZwMTNTUlNRc0NlUnQ2aUp6dHFOTEE4dGdNQXNMNk9SeHV1ZlUyL1BNUGZnU3RvWTdjTVlicjMvRjJWSmk2SmVaK2dHTk5sU3BYbVRmT01qV241dVp3Zm5LQ3RNeFdmY3RqSkV0T0ZZMTFBVTRCRlR4MjZqaEdabVlWaEV2LzZlam9RSGQzTjdQQ2dxVW1DRU8xRElQQXN6UXhoaFVPdlZiVlZnQlhJKzIxNWk2VCtnS05QRWEwQzNER2pOYUgwNFNpU3RwTExrUktqMmVnczhkWkcvc0JNaFJYTTFXVGRZTms0UnY2WWJFSDJlZW5VQ0RLUFhMa0dCYXBGcS9ySWRDUUlUeDA1QkZNVDArZ0lob21jLzlkMSsxZzJsaVlKVHBPRVNsbFNNMElXS0ZHa20wMUhYaW9vMEltMDREdEtIS0YxbGIyem9GMXE5R2xRWXkweHM4eVJOcDBNZ0dOSk1Ca1pHMmp0dWRBTmk1aFF3TnJMYlorQTBLUlpxNUJ4NVBIVG1EYnBadmpwcVBidzVybXlTcmhMYzRTNVJZQU1ubEJTSlBEcUtPcnE4RGhWSzF2NlVmOGtURWNlK0lKYkdZdHRKRjVQTXRHVytVQ2pqNXpGa1ZHeEtWREpxWW04ZTRiZG1Jc01ZOXpqRXFlNkdWN05aWnVTZTgwUFRRU2lDeG1oMFlRS25KYzZ1Sk10cTUvclJxdXBkY1o1SzlwTXArVnBTVDlYK0h5WE5VWFhhL21JR2xvalozdDZGcTNIdUdtRm9XbXJocWdIT1NyQlF5Zk9aazJyV3Z5RTFJZmlzSm90V2tBSGhHeWVJYmsxYWp4VFpFRk5CbE1UVHc3K25NS3JDWDBOVWNSYSszRm15Ky9GazhOSDhWOGxTU0FyTC9FRzVmbzBTZk9uRUlxWHliTnlsQjdLYW0wMDVscU9qMGRKTXVJVUI3VWFuREZ3cGQwRk1Wc1dra0hJbFdVS2RnS3EyZHJZOFBXbE14SGNzdU1nTnBRaVJBbmZIUjR5V1hLWitiWXVDMDF6NGxDWnhGc3NvdjJDZE1OclF3TFdaRXYwSTNLSTZKcHFIem14VFQyTVlWUkdrVlhOR0xIdFJ2dzdKTlQrTVFIN2tDU1JjMzFZc3NsdTVGZ3VoYlk5NTZkbk1Jb1lUL0R2bFdrYnVManpSeWVWQmVrbXNXR3JHWTIxa2k5REoyOHBlemp4VHJyMllqemlpd0xLc2s1Wmxoa0JsZUdienFFMzVPSm53WmFRcnNzWVNSczFFWHVUL0NhdHRJL3VhdGsxMlRHTXM4eGRQY3dCU1hmUWI1OXYrTGRxNE5vN2NtdEdVVWE2bmtrMHRaYVF1eG10TWI4dVA2R01tSGFqNFhKTE55c2kzYnV6dlJ1R21EYVVKQnRiY1B5NDBkeGZuWktPU2pFNW00eElRUkFSSVV1VXljUnlTRkVXY0JWV2tvVlFlNGpPTndkRXFNRkhHUVMxNHdhQmZNVVlMZ3lCU20vZTh3ZVc4MkNhb3hWSk50UWMwUnR3cjlnaEc3cHcyYmY5bjNwcWVOL2M5ano3S0VheDZycEcwb0FVQ05KREw3Z0ZrTDZnRXJMWU1SRjM0WkxvVk9ZYWFGZ0dvMjFJVXh5M016Tmp6eEJKdHdnNmVrakswbXBERmVxc2dpb2xxRmFSRjBvcUl3VGNpeHpZWmFwUzRiSzhZaGFKQ01TWk92UVdSN0ZFa1VoSVJKU0tZWkV4RlBhalN6UnV6Q3NldW9qcGVqb2dnM2VxcEhRaHUrOTk4RzRHbFp0MXo3Q0QydkcwVVdhVXFrNDF2dXVoRW5EQkpFOGp6ZjFIRlV6VGUxZDFFVXlhR3B1VmNLTVBNNlBqcEZLVGVGWFR3M2pOMmRHdU9paUt2d2dDNzI1UGtDRGZHby9RUkJRVWtkRnlLMXRJVnRVMGs2ZU9VOEgrTkhXRnNYNi9uNTBkc1l3T2pZc1VLYWNJdGZTVnpjdmxmTlg1enpWQm1UZHdwYVl2anI3SW9Ya3IxK2N4S0VIOXJ0dS9tN2RzNVhkbnRZT2YrZzZWbk9uR2gxbHROQ29Bc3RBS0JlYkdCK0RzenlQbVpsRWJhK2JOVFhGT252cytOT1lvOFF1ZXdLQ2F1TEhJRWwxTS90aGtBT3N5T3dDK3dMOFltUXFWeUpvMGUrc2xhcHdTRGJvQ3RuR1NpbVAxclllckIvY2pqUG5qaW8xUUZOUkViVk1Kb21hVm5teGh0aU9OTU5VbjB0ZnBLSjI4S0p4a3BxangvWWVwaXVIb0E4Z1VNY2crc2k0UFdNMWo3MVZPYTZXMXk2amNQRFJ3MlFKYy9SNlNFSDlDaEZ4Z1lxWFVDUlJsTlZFemh0R09ONkV5UlA5VE5VTFc4emkrUm1ldTF3b0VjYWJxWXlWRkdzcFV5NVlwaFRmMWQySkFoM1UwdFNGdnI1dG1KeDRXczE3SHFNamk2OGhyNkdBaHVWME1ZcXFuYm42RC9mLzIwUHg1eUluN3p2ZVBhNDFNQlJzZUN0SEhLYVBkMEdNZnM2d0M4ZkdTellqMnRXTkU1UUJjK2tWNU1rOGxNem4xVmlEcExhMHN6cnl3MWFxMFlLTWN2Y1NGNWZtdVN0RlJwYnBYY2RCMWVGN3dsUWFHdXM1TFdsSzBmWngwUjNSTnZSMjkzS3dKYjlzaU9BOFU3UmF6S3J4U09CZUpBV1gyV1NzaWxXcUQvSjdWS3d1Ym1tOVlBdHJidXpNSWRjSUQ4bm1od1JNdEVWTmZ3NkJMaDZyN09EaEIzK01IeDc4RVphNVIxZGk1RUorTWFZZUo4Nk9xbzNFbnM0T3RESXlCc0VrUzkxeWxsSFJTR3pEM0E4UW5VV2NKcyt6Q3d0WW9QYnZPVktMRmJ6dnR2Zmd2YmZkcmdqMnlKbHpPRDB5UW1BcDRCeFROSnRQTURNc3hXS2taVmpDVjZVMzZxcUZITDd2UzQvc3VyRE1GK3dWM0hYWHAwK1F4UDJwdHFvS3E0ZXU0M2NPc1pYdjl3OXV4STQzYktLbXNZSVB2ZmRXbkRsOUJvMGhFbGR1a0loalJFVEtzQmxQSjVleHpBbERKUFlHeXUvaWFVbGRTNlEvc284bDdpV0lsbW1KNFVUVHYvNzBYNkNSb2xLUjMxMU16Q3ZudGpTM1U1SnZVV21aNFVRdjZYaEI5NVQxQ1BwV05XL1gwYVB4aXpzOUwxaDVyQzgyelBQdVUrZkxKL3JMYlptN21Ca2Y1VVprSTRIRGgxdHVmanVTbk5lbVVtUWw1SUd6M0txYXAxWmljY0dObkJlbEp3bDVscjA1a2YrSzdIbExqTHFrZ3BMSmlldVhiOStHQ0ozamNxSk9rblRuQ3ludTdmbXdhY042WFBHR2E2aWQ3c0dPSzkvRVppL1hxTlFBU3FSQUYvZDgrY3VINDg5ZjNlK0VwV3k3KzNpenVQcWRpUGJTeG9rZ2UrVElZN2pwdGcrb1RmMW1SdVh0dTY3RkpaczNzQStHRkVUTHpxbnNwTXFtbzdjSzZYbXlFbmt0VVpQMGtrZVFCRjE2Nnp0dmZJY3FCUUdwUE04UlVVazRwVGk3ZzF3eXhqMzBkKy8rTUxadXVWN0FnelhveXM1Ui9EKytjbmpmYjYvdmQ0enI2K3RMZXhWbkY5TXEvVktHU2M5Y25CNWxzZGZEeDRuWUY2aERMcE5TRWwyUWtCK2xKQkRtZ3ZWVmJucGhHaEREWkloViszMk1vaml3Z1RVb0Jxemh1UE9HeXk5SGhlbTRORDlId1lnRE15TnFzai82dVprU0lCKzFBcWJhTDl5d2NZdXFmZTdzcHNzcnpxNFhYZU9MdmRuWjF4Y25rdS9CUzBVTlZaeDk1aFIyWEhXdDJqOEljd05laEJ4WmVGUkFSTmVWbkdBemFySkhJTVlJNk1naEVWTjhZN1dlQlFFRFpDMWJ0MjFUcjJXL081dGR1YWhiTnRKaGZpRUx4bk1VMGU4TFkvVE1JaXpiMlBQQXdTZmlyOWc0T2RyYjF4elViV2Z2aXhzR0duWVNEejM2R0FhMlg2Vis1Uk9rOTIzV1dYeG1HaVdieUVudlNtK1EzNU9JY1JJMWVUaXIrMjd5dm1uNWxCTWFxV05HQ1NBMzNYU2phZzBsUnE3RVliZElEU1VRRUxsUVgxVmVOZFY3eFZHTmpjMVlUcFgzZnZQZzQ3LzM5eWdtWHVKbzZZcnRYNXliRldCNXdhYWVvSk5zSWIvNzF0dEp2WUlxWXNHbUtEbzVsUjgvZHhhSnBSUlNtWkxpaGxMd0YzWnlMbXgwaUxGMWRJYWs3N29ZOTlpYTYzSGJlOStQRnFyUm1lVTBVbVE1eTZrbGhZamlTcjlmZEJHLzBqT0ZWTXQxMnFLdGUrT0p4UDZYV3Y5TEdpZEhhMGZYL3VUOFRKeDYvdjI4dXRvYUV2YXg1WXByNk9VeWFqL0VvTFdNUWhzWEd1dUtJY1VkbjNJeWg1VjhyaVkra1I2SlFHdXU3b3JLRkNBL2J0dllQOEF0NkJ2UnYzR3dOc1pRTlpQRnAwaTZaUzhoeUtqWjNKQ01jbC9RTUd1L0FTUFlwRWs0OWd4dTNmeXl2eURTOFFxT0tGUFV0cjN0ZEZ5ODlrNk5SQmswNk1JcmdUTS9nYVdSU2xhQnRDcExjVmFNRWlQOGJOU0NobjcyTVptL1JJM3VhSTNpc3ZVRDVKQXR5TEZsbENnblZvbU1SVXJ2WVZJNlAwRkVXczA2NnFTK29GOGhLQk1nN3VydTlqVTlmUzlybUJ3dkc3a0xSMmRuWjV4UGZZdnppWDJjcnU0V3o0cUFJN0tDTHI4cGtmR2Z2b3EydE5WbU1QRWNHWVl3ZjJFaGtscVZja1VObFczYzJtcmxSSEhveUtQNHAvdjJZL3VWTzNETmptc3cyTjlIWWFrbUlvbHg5UTFCTnU2b29uVk15ZnZ5UldlZm9Qa3JYZk5yK3IxbElwSG8vY2ZQZlByK04xMTM5ZEF5TnlkdVp1MEoram1VOWM2Zk9va0RQLzRSeGlabmtNNWtGWWdJVFJKZ2tCakgyS3VhRzV2SS9sMGNPUEFEeFV6S2RtMS9vQ2ZXZ1hlKzgyMVl1NmFMaktRRkc5WnZRbjFUNUxCdVdIdGpmWDNEZUpYSEs0N2M4NC9WS081cWo5UVBaWFgvblRmQjJ5M3ZHNnlicnU0WWhxNW1lN0IvZ1hPeVQyNkdWYStUV1U2b1ZZamJWK3NwbzMvanUvOE4yVm9RN2NOVHYwUnhNRTJWNjJ2ZitDYXV1dkpLdkdYbkRZYzcyN3J1dWZUS3F3N2pOUjZ2eTIrY0paS21SZ00xZklRZ3N5MmZTV1BxZkJ4UG5SeFdNa0tlbEV4TkRkSWRhZkNHZ2N2d3Q1LzllL1VEQUdIek5vMWZFNm1qQ2xZOW5DOVZqK1JLcGYzcGRQb1ZweC8rUDQxNy9wRklqUGRTMTlsV3JUaERoVlIycTJmYmtjVDhRdS8wOUdSa2NYR08rbjRRbzVQejZXOSs5enRwR2piTXRKeWd0ajhjS0pVT3hsOEhnNTUvL0IrTW1IWWRlbmZ5NVFBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJhc2VBY2NvcmRpb24gfSBmcm9tICcuL2Jhc2UtYWNjb3JkaW9uJztcclxuaW1wb3J0IHtcclxuICBBY2NvcmRpb25CdXR0b24sXHJcbiAgQWNjb3JkaW9uSXRlbSxcclxuICBBY2NvcmRpb25Db250ZW50cyxcclxuICBzaW5nbGUsXHJcbiAgcHJldmVudENsb3NlLFxyXG4gIGNvbWJpbmVSZWR1Y2VycyxcclxufSBmcm9tICcuL3NoYXJlZCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBY2NvcmRpb24oeyBpdGVtcywgLi4ucHJvcHMgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8QmFzZUFjY29yZGlvblxyXG4gICAgICBzdGF0ZVJlZHVjZXI9e2NvbWJpbmVSZWR1Y2VycyhzaW5nbGUsIHByZXZlbnRDbG9zZSl9XHJcbiAgICAgIHsuLi5wcm9wc31cclxuICAgID5cclxuICAgICAgeyh7IG9wZW5JbmRleGVzLCBoYW5kbGVJdGVtQ2xpY2sgfSkgPT4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICB7aXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8QWNjb3JkaW9uSXRlbVxyXG4gICAgICAgICAgICAgIGtleT17aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICBpc09wZW49e29wZW5JbmRleGVzLmluY2x1ZGVzKGluZGV4KX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxBY2NvcmRpb25CdXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlSXRlbUNsaWNrKGluZGV4KX0+XHJcbiAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e29wZW5JbmRleGVzLmluY2x1ZGVzKGluZGV4KSA/ICdvcGVuJyA6ICdjbG9zZWQnfVxyXG4gICAgICAgICAgICAgICAgPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgIDwvQWNjb3JkaW9uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxBY2NvcmRpb25Db250ZW50cyBpc09wZW49e29wZW5JbmRleGVzLmluY2x1ZGVzKGluZGV4KX0+XHJcbiAgICAgICAgICAgICAgICB7aXRlbS5jb250ZW50c31cclxuICAgICAgICAgICAgICA8L0FjY29yZGlvbkNvbnRlbnRzPlxyXG4gICAgICAgICAgICA8L0FjY29yZGlvbkl0ZW0+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuICAgIDwvQmFzZUFjY29yZGlvbj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBCYXNlQWNjb3JkaW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgc3RhdGVSZWR1Y2VyOiAoc3RhdGUsIGNoYW5nZXMpID0+IGNoYW5nZXMsXHJcbiAgICBvblN0YXRlQ2hhbmdlOiAoKSA9PiB7fSxcclxuICB9O1xyXG4gIHN0YXRlID0geyBvcGVuSW5kZXhlczogWzBdIH07XHJcbiAgZ2V0U3RhdGUoc3RhdGUgPSB0aGlzLnN0YXRlKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBvcGVuSW5kZXhlczpcclxuICAgICAgICB0aGlzLnByb3BzLm9wZW5JbmRleGVzID09PSB1bmRlZmluZWRcclxuICAgICAgICAgID8gc3RhdGUub3BlbkluZGV4ZXNcclxuICAgICAgICAgIDogdGhpcy5wcm9wcy5vcGVuSW5kZXhlcyxcclxuICAgIH07XHJcbiAgfVxyXG4gIGludGVybmFsU2V0U3RhdGUoY2hhbmdlcywgY2FsbGJhY2sgPSAoKSA9PiB7fSkge1xyXG4gICAgbGV0IGFsbENoYW5nZXM7XHJcbiAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICAoc3RhdGUpID0+IHtcclxuICAgICAgICBjb25zdCBhY3R1YWxTdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoc3RhdGUpO1xyXG4gICAgICAgIGNvbnN0IGNoYW5nZXNPYmplY3QgPVxyXG4gICAgICAgICAgdHlwZW9mIGNoYW5nZXMgPT09ICdmdW5jdGlvbicgPyBjaGFuZ2VzKGFjdHVhbFN0YXRlKSA6IGNoYW5nZXM7XHJcbiAgICAgICAgYWxsQ2hhbmdlcyA9IHRoaXMucHJvcHMuc3RhdGVSZWR1Y2VyKGFjdHVhbFN0YXRlLCBjaGFuZ2VzT2JqZWN0KTtcclxuICAgICAgICByZXR1cm4gYWxsQ2hhbmdlcztcclxuICAgICAgfSxcclxuICAgICAgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucHJvcHMub25TdGF0ZUNoYW5nZShhbGxDaGFuZ2VzKTtcclxuICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuICBoYW5kbGVJdGVtQ2xpY2sgPSAoaW5kZXgpID0+IHtcclxuICAgIHRoaXMuaW50ZXJuYWxTZXRTdGF0ZSgoc3RhdGUpID0+IHtcclxuICAgICAgY29uc3QgY2xvc2luZyA9IHN0YXRlLm9wZW5JbmRleGVzLmluY2x1ZGVzKGluZGV4KTtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBjbG9zaW5nID8gJ2Nsb3NpbmcnIDogJ29wZW5pbmcnLFxyXG4gICAgICAgIG9wZW5JbmRleGVzOiBjbG9zaW5nXHJcbiAgICAgICAgICA/IHN0YXRlLm9wZW5JbmRleGVzLmZpbHRlcigoaSkgPT4gaSAhPT0gaW5kZXgpXHJcbiAgICAgICAgICA6IFsuLi5zdGF0ZS5vcGVuSW5kZXhlcywgaW5kZXhdLFxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgICBjb25zb2xlLmxvZygnY2xpY2tlZCcpO1xyXG4gIH07XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW4oe1xyXG4gICAgICBvcGVuSW5kZXhlczogdGhpcy5nZXRTdGF0ZSgpLm9wZW5JbmRleGVzLFxyXG4gICAgICBoYW5kbGVJdGVtQ2xpY2s6IHRoaXMuaGFuZGxlSXRlbUNsaWNrLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBCYXNlQWNjb3JkaW9uIH07XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3ggfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFjY29yZGlvbkJ1dHRvbiA9ICh7IGNoaWxkcmVuLCAuLi5yZXN0IH0pID0+IChcclxuICA8ZGl2IHN4PXtzdHlsZXMuYnV0dG9uVG9nZ2xlfSB7Li4ucmVzdH0+XHJcbiAgICB7Y2hpbGRyZW59XHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgYnV0dG9uVG9nZ2xlOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBjb2xvcjogJ2hlYWRpbmdfc2Vjb25kYXJ5JyxcclxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgYm9yZGVyOiAnbm9uZScsXHJcbiAgICBmb250U2l6ZTogWzIsIG51bGwsIDNdLFxyXG4gICAgZm9udFdlaWdodDogNTAwLFxyXG4gICAgbGV0dGVyU3BhY2luZzogLTAuNSxcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgcGFkZGluZ0xlZnQ6IFsnMzNweCcsIG51bGwsICc0NXB4J10sXHJcbiAgICBsaW5lSGVpZ2h0OiBbMS41LCBudWxsLCAxLjhdLFxyXG4gICAgJyYgPiBzcGFuJzoge1xyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgd2lkdGg6IDIwLFxyXG4gICAgICBoZWlnaHQ6IDIwLFxyXG4gICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMjVDQjlFJyxcclxuICAgICAgdG9wOiBbJzJweCcsIG51bGwsICc2cHgnXSxcclxuICAgICAgbGVmdDogWzAsIG51bGwsICcxM3B4J10sXHJcbiAgICAgICcmLm9wZW46YWZ0ZXInOiB7XHJcbiAgICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgfSxcclxuICAgICAgJyY6OmJlZm9yZSc6IHtcclxuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICBjb250ZW50OiAnXCJcIicsXHJcbiAgICAgICAgaGVpZ2h0OiAnMnB4JyxcclxuICAgICAgICB3aWR0aDogMTAsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgIHRvcDogJzUwJScsXHJcbiAgICAgICAgbGVmdDogJzUwJScsXHJcbiAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUgLCAtNTAlKScsXHJcbiAgICAgIH0sXHJcbiAgICAgICcmOjphZnRlcic6IHtcclxuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICBjb250ZW50OiAnXCJcIicsXHJcbiAgICAgICAgaGVpZ2h0OiAxMCxcclxuICAgICAgICB3aWR0aDogJzJweCcsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgIHRvcDogJzUwJScsXHJcbiAgICAgICAgbGVmdDogJzUwJScsXHJcbiAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUgLCAtNTAlKScsXHJcbiAgICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjI1cycsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcblxyXG5jb25zdCB2YXJpYW50cyA9IHtcclxuICBvcGVuOiB7XHJcbiAgICBoZWlnaHQ6ICdhdXRvJyxcclxuICAgIG1hcmdpblRvcDogMTIsXHJcbiAgfSxcclxuICBjbG9zZWQ6IHsgaGVpZ2h0OiAwLCBtYXJnaW5Ub3A6IDAgfSxcclxufTtcclxuZXhwb3J0IGZ1bmN0aW9uIEFjY29yZGlvbkNvbnRlbnRzKHsgaXNPcGVuLCAuLi5wcm9wcyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgIGluaXRpYWw9XCJjbG9zZWRcIlxyXG4gICAgICBhbmltYXRlPXtpc09wZW4gPyAnb3BlbicgOiAnY2xvc2VkJ31cclxuICAgICAgdmFyaWFudHM9e3ZhcmlhbnRzfVxyXG4gICAgICBzeD17e1xyXG4gICAgICAgIG92ZXJmbG93WTogJ2hpZGRlbicsXHJcbiAgICAgICAgZm9udFNpemU6IFsxLCBudWxsLCAyXSxcclxuICAgICAgICBsaW5lSGVpZ2h0OiBbMS44NSwgbnVsbCwgbnVsbCwgMS45LCAyXSxcclxuICAgICAgICBjb2xvcjogJyMzNDNENDgnLFxyXG4gICAgICAgIHBhZGRpbmdMZWZ0OiBbJzMzcHgnLCBudWxsLCAnNDVweCddLFxyXG4gICAgICAgICcgPiBkaXYgJzoge1xyXG4gICAgICAgICAgcGFkZGluZ0JvdHRvbTogWzEsIDJdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH19XHJcbiAgICAgIHsuLi5wcm9wc31cclxuICAgIC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEFjY29yZGlvbkl0ZW0gPSAoeyBpc09wZW4sIGNoaWxkcmVuLCAuLi5yZXN0IH0pID0+IChcclxuICA8ZGl2XHJcbiAgICBjc3M9e3tcclxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxyXG4gICAgICBwYWRkaW5nOiAnMTdweCAwJyxcclxuICAgICAgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNFNUVDRjQnLFxyXG4gICAgICAnJjpsYXN0LWNoaWxkJzoge1xyXG4gICAgICAgIGJvcmRlckJvdHRvbTogJzBweCBzb2xpZCcsXHJcbiAgICAgIH0sXHJcbiAgICB9fVxyXG4gICAgey4uLnJlc3R9XHJcbiAgPlxyXG4gICAge2NoaWxkcmVufVxyXG4gIDwvZGl2PlxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHByZXZlbnRDbG9zZSA9IChzdGF0ZSwgY2hhbmdlcykgPT5cclxuICBjaGFuZ2VzLnR5cGUgPT09ICdjbG9zaW5nJyAmJiBzdGF0ZS5vcGVuSW5kZXhlcy5sZW5ndGggPCAyXHJcbiAgICA/IHsgLi4uY2hhbmdlcywgb3BlbkluZGV4ZXM6IHN0YXRlLm9wZW5JbmRleGVzIH1cclxuICAgIDogY2hhbmdlcztcclxuXHJcbmV4cG9ydCBjb25zdCBzaW5nbGUgPSAoc3RhdGUsIGNoYW5nZXMpID0+XHJcbiAgY2hhbmdlcy50eXBlID09PSAnb3BlbmluZydcclxuICAgID8geyAuLi5jaGFuZ2VzLCBvcGVuSW5kZXhlczogY2hhbmdlcy5vcGVuSW5kZXhlcy5zbGljZSgtMSkgfVxyXG4gICAgOiBjaGFuZ2VzO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbWJpbmVSZWR1Y2VycyA9ICguLi5yZWR1Y2VycykgPT4gKHN0YXRlLCBjaGFuZ2VzKSA9PlxyXG4gIHJlZHVjZXJzLnJlZHVjZSgoYWNjLCByZWR1Y2VyKSA9PiByZWR1Y2VyKHN0YXRlLCBhY2MpLCBjaGFuZ2VzKTtcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCwgQm94LCBDb250YWluZXIsIEZsZXggfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCB7IElvSW9zQXJyb3dSb3VuZEJhY2ssIElvSW9zQXJyb3dSb3VuZEZvcndhcmQgfSBmcm9tICdyZWFjdC1pY29ucy9pbyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCdXR0b25Hcm91cCh7IG5leHQsIHByZXZpb3VzIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEZsZXggc3g9e3sgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8Qm94IHN4PXtzdHlsZXMuYnV0dG9uR3JvdXB9PlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtwcmV2aW91c30gYXJpYS1sYWJlbD1cIlByZXZpb3VzXCI+XHJcbiAgICAgICAgICAgIDxJb0lvc0Fycm93Um91bmRCYWNrIC8+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17bmV4dH0gYXJpYS1sYWJlbD1cIk5leHRcIj5cclxuICAgICAgICAgICAgPElvSW9zQXJyb3dSb3VuZEZvcndhcmQgLz5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvRmxleD5cclxuICApO1xyXG59XHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBidXR0b25Hcm91cDoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgbWI6IC00LFxyXG4gICAgYnV0dG9uOiB7XHJcbiAgICAgIGJnOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgICBib3JkZXI6ICcwcHggc29saWQnLFxyXG4gICAgICBmb250U2l6ZTogNDAsXHJcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICBweDogJzJweCcsXHJcbiAgICAgIGNvbG9yOiAnI0JCQzdENycsXHJcbiAgICAgIHRyYW5zaXRpb246ICdhbGwgMC4yNXMnLFxyXG4gICAgICAnJjpmb2N1cyc6IHtcclxuICAgICAgICBvdXRsaW5lOiAwLFxyXG4gICAgICB9LFxyXG4gICAgICAnJjpob3Zlcic6IHtcclxuICAgICAgICBjb2xvcjogJ3RleHQnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJveCB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IFJjRHJhd2VyIGZyb20gJ3JjLWRyYXdlcic7XHJcblxyXG5jb25zdCBEcmF3ZXIgPSAoe1xyXG4gIGNsYXNzTmFtZSxcclxuICBjaGlsZHJlbixcclxuICBjbG9zZUJ1dHRvbixcclxuICBjbG9zZUJ1dHRvblN0eWxlLFxyXG4gIGRyYXdlckhhbmRsZXIsXHJcbiAgdG9nZ2xlSGFuZGxlcixcclxuICBvcGVuLFxyXG4gIHdpZHRoLFxyXG4gIHBsYWNlbWVudCxcclxuICBkcmF3ZXJTdHlsZSxcclxuICBjbG9zZUJ0blN0eWxlLFxyXG4gIC4uLnByb3BzXHJcbn0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEZyYWdtZW50PlxyXG4gICAgICA8UmNEcmF3ZXJcclxuICAgICAgICBvcGVuPXtvcGVufVxyXG4gICAgICAgIG9uQ2xvc2U9e3RvZ2dsZUhhbmRsZXJ9XHJcbiAgICAgICAgY2xhc3NOYW1lPXtgZHJhd2VyICR7Y2xhc3NOYW1lID8gY2xhc3NOYW1lIDogJyd9YC50cmltKCl9XHJcbiAgICAgICAgd2lkdGg9e3dpZHRofVxyXG4gICAgICAgIHBsYWNlbWVudD17cGxhY2VtZW50fVxyXG4gICAgICAgIGhhbmRsZXI9e2ZhbHNlfVxyXG4gICAgICAgIGxldmVsPXtudWxsfVxyXG4gICAgICAgIGR1cmF0aW9uPVwiMC40c1wiXHJcbiAgICAgICAgey4uLnByb3BzfVxyXG4gICAgICA+XHJcbiAgICAgICAge2Nsb3NlQnV0dG9uICYmIChcclxuICAgICAgICAgIDxCb3ggYXM9XCJkaXZcIiBvbkNsaWNrPXt0b2dnbGVIYW5kbGVyfSBzeD17Y2xvc2VCdG5TdHlsZX0+XHJcbiAgICAgICAgICAgIHtjbG9zZUJ1dHRvbn1cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPEJveCBzeD17ZHJhd2VyU3R5bGV9PntjaGlsZHJlbn08L0JveD5cclxuICAgICAgPC9SY0RyYXdlcj5cclxuICAgICAgPEJveFxyXG4gICAgICAgIGNsYXNzTmFtZT1cImRyYXdlcl9faGFuZGxlclwiXHJcbiAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogJ2lubGluZS1ibG9jaycgfX1cclxuICAgICAgICBvbkNsaWNrPXt0b2dnbGVIYW5kbGVyfVxyXG4gICAgICA+XHJcbiAgICAgICAge2RyYXdlckhhbmRsZXJ9XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9GcmFnbWVudD5cclxuICApO1xyXG59O1xyXG5cclxuRHJhd2VyLmRlZmF1bHRQcm9wcyA9IHtcclxuICB3aWR0aDogJzMyMHB4JyxcclxuICBwbGFjZW1lbnQ6ICdsZWZ0JyxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERyYXdlcjtcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCwgSW1hZ2UsIEJveCwgSGVhZGluZywgVGV4dCB9IGZyb20gJ3RoZW1lLXVpJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZlYXR1cmVDYXJkQ29sdW1uKHtcclxuICBzcmMsXHJcbiAgYWx0VGV4dCA9ICdkZWZhdWx0IGFsdCB0ZXh0JyxcclxuICB0aXRsZSxcclxuICB0ZXh0LFxyXG59KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggc3g9e3N0eWxlcy5jYXJkfT5cclxuICAgICAgPEltYWdlIHNyYz17c3JjfSBhbHQ9e2FsdFRleHR9IHN4PXtzdHlsZXMuaW1nfSAvPlxyXG5cclxuICAgICAgPEJveCBzeD17c3R5bGVzLndyYXBwZXJ9PlxyXG4gICAgICAgIDxIZWFkaW5nIHN4PXtzdHlsZXMud3JhcHBlci50aXRsZX0+e3RpdGxlfTwvSGVhZGluZz5cclxuICAgICAgICA8VGV4dCBzeD17c3R5bGVzLndyYXBwZXIuc3ViVGl0bGV9Pnt0ZXh0fTwvVGV4dD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgY2FyZDoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnLFxyXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gIH0sXHJcbiAgaW1nOiB7XHJcbiAgICBteDogJ2F1dG8nLFxyXG4gICAgbWI6IFszLCBudWxsLCA0LCBudWxsLCBudWxsLCA1XSxcclxuICAgIHdpZHRoOiBbJzgwcHgnLCAnOTBweCcsIG51bGwsIG51bGwsIG51bGwsICcxMDBweCcsICdhdXRvJ10sXHJcbiAgfSxcclxuICB3cmFwcGVyOiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICB0aXRsZToge1xyXG4gICAgICBmb250U2l6ZTogWzMsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDRdLFxyXG4gICAgICBjb2xvcjogJ2hlYWRpbmdfc2Vjb25kYXJ5JyxcclxuICAgICAgbGluZUhlaWdodDogMS40LFxyXG4gICAgICBmb250V2VpZ2h0OiA3MDAsXHJcbiAgICAgIG1iOiBbMiwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgM10sXHJcbiAgICB9LFxyXG5cclxuICAgIHN1YlRpdGxlOiB7XHJcbiAgICAgIGZvbnRTaXplOiAxLFxyXG4gICAgICBmb250V2VpZ2h0OiA0MDAsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IFsxLjg1LCBudWxsLCBudWxsLCAxLjksIDJdLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4LCBJbWFnZSwgQm94LCBIZWFkaW5nLCBUZXh0IH0gZnJvbSAndGhlbWUtdWknO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmVhdHVyZUNhcmQoe1xyXG4gIHNyYyxcclxuICBhbHRUZXh0ID0gJ2RlZmF1bHQgYWx0IHRleHQnLFxyXG4gIHRpdGxlLFxyXG4gIHRleHQsXHJcbn0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBzeD17c3R5bGVzLmNhcmR9PlxyXG4gICAgICA8SW1hZ2Ugc3JjPXtzcmN9IGFsdD17YWx0VGV4dH0gc3g9e3N0eWxlcy5pbWd9IC8+XHJcblxyXG4gICAgICA8Qm94IHN4PXtzdHlsZXMud3JhcHBlcn0+XHJcbiAgICAgICAgPEhlYWRpbmcgc3g9e3N0eWxlcy53cmFwcGVyLnRpdGxlfT57dGl0bGV9PC9IZWFkaW5nPlxyXG4gICAgICAgIDxUZXh0IHN4PXtzdHlsZXMud3JhcHBlci5zdWJUaXRsZX0+e3RleHR9PC9UZXh0PlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBjYXJkOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCcsXHJcbiAgfSxcclxuXHJcbiAgaW1nOiB7XHJcbiAgICB3aWR0aDogWyc2MHB4JywgbnVsbCwgbnVsbCwgbnVsbCwgJzU1cHgnLCAnNzBweCcsIG51bGwsICc4MHB4J10sXHJcbiAgICBoZWlnaHQ6ICdhdXRvJyxcclxuICAgIGZsZXhTaHJpbms6IDAsXHJcbiAgICBtcjogWzMsIDQsIG51bGwsIG51bGwsIDMsIDQsIG51bGwsIDVdLFxyXG4gIH0sXHJcbiAgd3JhcHBlcjoge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgbXQ6ICctNXB4JyxcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgIGZvbnRTaXplOiBbMywgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgNF0sXHJcbiAgICAgIGNvbG9yOiAnaGVhZGluZ19zZWNvbmRhcnknLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAxLjQsXHJcbiAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICAgICAgbWI6IFsyLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAzXSxcclxuICAgICAgbXQ6ICcycHgnLFxyXG4gICAgfSxcclxuICAgIHN1YlRpdGxlOiB7XHJcbiAgICAgIGZvbnRTaXplOiAxLFxyXG4gICAgICBmb250V2VpZ2h0OiA0MDAsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IFsxLjg1LCBudWxsLCAyXSxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgW1xyXG4gIHtcclxuICAgIGhlYWRlcjogJ0Fib3V0IFVzJyxcclxuICAgIGl0ZW1zOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnLycsXHJcbiAgICAgICAgbGFiZWw6ICdTdXBwb3J0IENlbnRlcicsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnLycsXHJcbiAgICAgICAgbGFiZWw6ICdDdXN0b21lciBTdXBwb3J0JyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICcvJyxcclxuICAgICAgICBsYWJlbDogJ0Fib3V0IFVzJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICcvJyxcclxuICAgICAgICBsYWJlbDogJ0NvcHlyaWdodCcsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnLycsXHJcbiAgICAgICAgbGFiZWw6ICdQb3B1bGFyIENhbXBhaWduJyxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBoZWFkZXI6ICdPdXIgSW5mb3JtYXRpb24nLFxyXG4gICAgaXRlbXM6IFtcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICcvJyxcclxuICAgICAgICBsYWJlbDogJ1JldHVybiBQb2xpY3kgJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICcvJyxcclxuICAgICAgICBsYWJlbDogJ1ByaXZhY3kgUG9saWN5JyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICcvJyxcclxuICAgICAgICBsYWJlbDogJ1Rlcm1zICYgQ29uZGl0aW9ucycsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnLycsXHJcbiAgICAgICAgbGFiZWw6ICdTaXRlIE1hcCcsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnLycsXHJcbiAgICAgICAgbGFiZWw6ICdTdG9yZSBIb3VycycsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaGVhZGVyOiAnTXkgQWNjb3VudCcsXHJcbiAgICBpdGVtczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJy8nLFxyXG4gICAgICAgIGxhYmVsOiAnUHJlc3MgaW5xdWlyaWVzJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICcvJyxcclxuICAgICAgICBsYWJlbDogJ1NvY2lhbCBtZWRpYSAnLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJy8nLFxyXG4gICAgICAgIGxhYmVsOiAnZGlyZWN0b3JpZXMnLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJy8nLFxyXG4gICAgICAgIGxhYmVsOiAnSW1hZ2VzICYgQi1yb2xsJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICcvJyxcclxuICAgICAgICBsYWJlbDogJ1Blcm1pc3Npb25zJyxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBoZWFkZXI6ICdQb2xpY3knLFxyXG4gICAgaXRlbXM6IFtcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICcvJyxcclxuICAgICAgICBsYWJlbDogJ0FwcGxpY2F0aW9uIHNlY3VyaXR5JyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICcvJyxcclxuICAgICAgICBsYWJlbDogJ1NvZnR3YXJlIHByaW5jaXBsZXMnLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJy8nLFxyXG4gICAgICAgIGxhYmVsOiAnVW53YW50ZWQgc29mdHdhcmUgcG9saWN5JyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICcvJyxcclxuICAgICAgICBsYWJlbDogJ1Jlc3BvbnNpYmxlIHN1cHBseSBjaGFpbicsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbl07XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3gsIEhlYWRpbmcsIEJveCwgQ29udGFpbmVyLCBUZXh0IH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnY29tcG9uZW50cy9saW5rJztcclxuaW1wb3J0IG1lbnVJdGVtcyBmcm9tICcuL2Zvb3Rlci5kYXRhJztcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9vdGVyIHN4PXtzdHlsZXMuZm9vdGVyfT5cclxuICAgICAgPENvbnRhaW5lciBzeD17c3R5bGVzLmZvb3Rlci5jb250YWluZXJ9PlxyXG4gICAgICAgIDxCb3ggc3g9e3N0eWxlcy5mb290ZXIuZm9vdGVyVG9wQXJlYX0+XHJcbiAgICAgICAgICB7bWVudUl0ZW1zLm1hcCgoeyBoZWFkZXIsIGl0ZW1zIH0sIGkpID0+IChcclxuICAgICAgICAgICAgPEJveCBzeD17c3R5bGVzLmZvb3Rlci5tZW51c30ga2V5PXtpfT5cclxuICAgICAgICAgICAgICA8SGVhZGluZyBzeD17c3R5bGVzLmZvb3Rlci5oZWFkaW5nfT57aGVhZGVyfTwvSGVhZGluZz5cclxuICAgICAgICAgICAgICA8bmF2PlxyXG4gICAgICAgICAgICAgICAge2l0ZW1zLm1hcCgoeyBwYXRoLCBsYWJlbCB9LCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aD17cGF0aH1cclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2xhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgIHN4PXtzdHlsZXMuZm9vdGVyLmxpbmt9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDxUZXh0IHN4PXtzdHlsZXMuZm9vdGVyLmNvcHlyaWdodH0+XHJcbiAgICAgICAgQWxsIHJpZ2h0IHJlc2VydmVkIC0gRGVzaWduICYgRGV2ZWxvcGVkIGJ5XHJcbiAgICAgICAgPExpbmsgcGF0aD1cImh0dHBzOi8vcmVkcS5pby9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgIFJlZFEsIEluY1xyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9UZXh0PlxyXG4gICAgPC9mb290ZXI+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGZvb3Rlcjoge1xyXG4gICAgY29udGFpbmVyOiB7XHJcbiAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgIGFsaWduSXRlbXM6ICdzdHJldGNoJyxcclxuICAgIH0sXHJcbiAgICBmb290ZXJUb3BBcmVhOiB7XHJcbiAgICAgIGJvcmRlclRvcDogJzFweCBzb2xpZCcsXHJcbiAgICAgIGJvcmRlclRvcENvbG9yOiAnYm9yZGVyX2NvbG9yJyxcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBmbGV4V3JhcDogJ3dyYXAnLFxyXG4gICAgICBwdDogWzcsIG51bGwsIDhdLFxyXG4gICAgICBwYjogWycxMHB4JywgbnVsbCwgbnVsbCwgJzIwcHgnXSxcclxuICAgICAgcHg6IFswLCBudWxsLCBudWxsLCBudWxsLCA0XSxcclxuICAgIH0sXHJcbiAgICBtZW51czoge1xyXG4gICAgICB3aWR0aDogWyc1MCUnLCBudWxsLCBudWxsLCAnMjUlJ10sXHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICAgIG1iOiBbJzQwcHgnLCBudWxsLCBudWxsLCAnNjBweCddLFxyXG4gICAgfSxcclxuXHJcbiAgICBoZWFkaW5nOiB7XHJcbiAgICAgIGZvbnRTaXplOiBbMywgbnVsbCwgbnVsbCwgNF0sXHJcbiAgICAgIGNvbG9yOiAndGV4dF9zZWNvbmRhcnknLFxyXG4gICAgICBmb250V2VpZ2h0OiAnNTAwJyxcclxuICAgICAgbWI6IFszLCA0LCA1LCBudWxsLCA2XSxcclxuICAgICAgbGluZUhlaWdodDogJzEuMzUnLFxyXG4gICAgfSxcclxuXHJcbiAgICBsaW5rOiB7XHJcbiAgICAgIGZvbnRTaXplOiBbJzE0cHgnLCBudWxsLCAxXSxcclxuICAgICAgY29sb3I6ICd0ZXh0JyxcclxuICAgICAgZm9udFdlaWdodDogJ2JvZHknLFxyXG4gICAgICBtYjogMixcclxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgIHRyYW5zaXRpb246ICdhbGwgMC4zNXMnLFxyXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxyXG4gICAgICBsaW5lSGVpZ2h0OiBbMS41LCBudWxsLCBudWxsLCAxLjYsIDEuOF0sXHJcbiAgICAgICc6aG92ZXInOiB7XHJcbiAgICAgICAgY29sb3I6ICdwcmltYXJ5JyxcclxuICAgICAgfSxcclxuICAgICAgJzpsYXN0LWNoaWxkJzoge1xyXG4gICAgICAgIG1iOiAnMHB4JyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBjb3B5cmlnaHQ6IHtcclxuICAgICAgZm9udFNpemU6IFsnMTRweCcsIG51bGwsIDFdLFxyXG4gICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICBwOiBbJzIwcHggMjBweCddLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRkNGREZFJyxcclxuICAgICAgY29sb3I6ICd0ZXh0JyxcclxuICAgICAgYToge1xyXG4gICAgICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXHJcbiAgICAgICAgY29sb3I6ICdpbmhlcml0JyxcclxuICAgICAgICBwbDogMSxcclxuICAgICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuMjVzJyxcclxuICAgICAgICAnJjpob3Zlcic6IHtcclxuICAgICAgICAgIGNvbG9yOiAncHJpbWFyeScsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgW1xyXG4gIHtcclxuICAgIHBhdGg6ICdob21lJyxcclxuICAgIGxhYmVsOiAnSG9tZScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAnZmVhdHVyZScsXHJcbiAgICBsYWJlbDogJ0ZlYXR1cmVzJyxcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICd0ZXN0aW1vbmlhbCcsXHJcbiAgICBsYWJlbDogJ1Rlc3RpbW9uaWFsJyxcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICdwcmljaW5nJyxcclxuICAgIGxhYmVsOiAnUHJpY2luZycsXHJcbiAgfSxcclxuXTtcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCwgQ29udGFpbmVyLCBGbGV4LCBCdXR0b24gfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCB7IGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtc2Nyb2xsJztcclxuaW1wb3J0IExvZ28gZnJvbSAnY29tcG9uZW50cy9sb2dvJztcclxuaW1wb3J0IExvZ29EYXJrIGZyb20gJ2Fzc2V0cy9sb2dvLWRhcmsucG5nJztcclxuaW1wb3J0IExvZ29XaGl0ZSBmcm9tICdhc3NldHMvbG9nby5wbmcnO1xyXG5pbXBvcnQgeyBEcmF3ZXJQcm92aWRlciB9IGZyb20gJy4uLy4uL2NvbnRleHRzL2RyYXdlci9kcmF3ZXIucHJvdmlkZXInO1xyXG5pbXBvcnQgTW9iaWxlRHJhd2VyIGZyb20gJy4vbW9iaWxlLWRyYXdlcic7XHJcbmltcG9ydCBtZW51SXRlbXMgZnJvbSAnLi9oZWFkZXIuZGF0YSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoeyBjbGFzc05hbWUgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8RHJhd2VyUHJvdmlkZXI+XHJcbiAgICAgIDxoZWFkZXIgc3g9e3N0eWxlcy5oZWFkZXJ9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBpZD1cImhlYWRlclwiPlxyXG4gICAgICAgIDxDb250YWluZXIgc3g9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgPExvZ28gc3JjPXtjbGFzc05hbWUgPT09ICdzdGlja3knID8gTG9nb0RhcmsgOiBMb2dvV2hpdGV9IC8+XHJcbiAgICAgICAgICA8aDEgc3R5bGU9e3tmb250U2l6ZTonMXJlbSd9fT5UaGUgV2F5IG9mIFN1Y2Nlc3M8L2gxPlxyXG4gICAgICAgICAgPEZsZXggYXM9XCJuYXZcIiBzeD17c3R5bGVzLm5hdn0+XHJcbiAgICAgICAgICAgIHttZW51SXRlbXMubWFwKCh7IHBhdGgsIGxhYmVsIH0sIGkpID0+IChcclxuICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgYWN0aXZlQ2xhc3M9XCJhY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgdG89e3BhdGh9XHJcbiAgICAgICAgICAgICAgICBzcHk9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBzbW9vdGg9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBvZmZzZXQ9ey03MH1cclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uPXs1MDB9XHJcbiAgICAgICAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2xhYmVsfVxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L0ZsZXg+XHJcblxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJkb25hdGVfX2J0blwiXHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiR2V0IFN0YXJ0ZWRcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBHZXQgU3RhcnRlZFxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcblxyXG4gICAgICAgICAgPE1vYmlsZURyYXdlciAvPlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8L2hlYWRlcj5cclxuICAgIDwvRHJhd2VyUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgcG9zaXRpb25BbmltID0ga2V5ZnJhbWVzYFxyXG4gIGZyb20ge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGhlYWRlcjoge1xyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcclxuICAgIHB5OiA0LFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgdG9wOiAwLFxyXG4gICAgbGVmdDogMCxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcclxuICAgIHRyYW5zaXRpb246ICdhbGwgMC41cyBlYXNlJyxcclxuICAgIGFuaW1hdGlvbjogYCR7cG9zaXRpb25BbmltfSAwLjRzIGVhc2VgLFxyXG4gICAgJy5kb25hdGVfX2J0bic6IHtcclxuICAgICAgZmxleFNocmluazogMCxcclxuICAgICAgbXI6IFsxNSwgMjAsIG51bGwsIG51bGwsIDBdLFxyXG4gICAgICBtbDogWydhdXRvJywgbnVsbCwgbnVsbCwgbnVsbCwgMF0sXHJcbiAgICB9LFxyXG4gICAgJyYuc3RpY2t5Jzoge1xyXG4gICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnYmFja2dyb3VuZCcsXHJcbiAgICAgIGNvbG9yOiAnIzAwMDAwMCcsXHJcbiAgICAgIGJveFNoYWRvdzogJzAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDYpJyxcclxuICAgICAgcHk6IDMsXHJcbiAgICAgICduZXYgPiBhJzoge1xyXG4gICAgICAgIGNvbG9yOiAndGV4dCcsXHJcbiAgICAgIH0sXHJcbiAgICAgICcuZG9uYXRlX19idG4nOiB7XHJcbiAgICAgICAgYm9yZGVyQ29sb3I6ICdwcmltYXJ5JyxcclxuICAgICAgICBjb2xvcjogJ3ByaW1hcnknLFxyXG4gICAgICAgICcmOmhvdmVyJzoge1xyXG4gICAgICAgICAgYm94U2hhZG93OiAncmdiYSgzMSwgNjIsIDExOCwgMC41NykgMHB4IDlweCAyMHB4IC01cHgnLFxyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncHJpbWFyeScsXHJcbiAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGNvbnRhaW5lcjoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gIH0sXHJcbiAgbmF2OiB7XHJcbiAgICBteDogJ2F1dG8nLFxyXG4gICAgZGlzcGxheTogJ25vbmUnLFxyXG4gICAgJ0BtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCknOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICB9LFxyXG4gICAgYToge1xyXG4gICAgICBmb250U2l6ZTogJzE2cHgnLFxyXG4gICAgICBmb250V2VpZ2h0OiAnNDAwJyxcclxuICAgICAgcHg6IDI1LFxyXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICAgbGluZUhlaWdodDogJzEuMicsXHJcbiAgICAgICcmLmFjdGl2ZSc6IHtcclxuICAgICAgICBjb2xvcjogJ3NlY29uZGFyeScsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCb3ggfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCB7IFNjcm9sbGJhcnMgfSBmcm9tICdyZWFjdC1jdXN0b20tc2Nyb2xsYmFycyc7XHJcbmltcG9ydCBEcmF3ZXIgZnJvbSAnY29tcG9uZW50cy9kcmF3ZXInO1xyXG5pbXBvcnQgeyBEcmF3ZXJDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dHMvZHJhd2VyL2RyYXdlci5jb250ZXh0JztcclxuaW1wb3J0IHsgSW9NZENsb3NlLCBJb01kTWVudSB9IGZyb20gJ3JlYWN0LWljb25zL2lvJztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXNjcm9sbCc7XHJcbmltcG9ydCB7XHJcbiAgRmFGYWNlYm9va0YsXHJcbiAgRmFUd2l0dGVyLFxyXG4gIEZhR2l0aHViQWx0LFxyXG4gIEZhRHJpYmJibGUsXHJcbn0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xyXG5pbXBvcnQgbWVudUl0ZW1zIGZyb20gJy4vaGVhZGVyLmRhdGEnO1xyXG5cclxuY29uc3Qgc29jaWFsID0gW1xyXG4gIHtcclxuICAgIHBhdGg6ICcvJyxcclxuICAgIGljb246IDxGYUZhY2Vib29rRiAvPixcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICcvJyxcclxuICAgIGljb246IDxGYVR3aXR0ZXIgLz4sXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAnLycsXHJcbiAgICBpY29uOiA8RmFHaXRodWJBbHQgLz4sXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAnLycsXHJcbiAgICBpY29uOiA8RmFEcmliYmJsZSAvPixcclxuICB9LFxyXG5dO1xyXG5cclxuY29uc3QgTW9iaWxlRHJhd2VyID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgc3RhdGUsIGRpc3BhdGNoIH0gPSB1c2VDb250ZXh0KERyYXdlckNvbnRleHQpO1xyXG5cclxuICAvLyBUb2dnbGUgZHJhd2VyXHJcbiAgY29uc3QgdG9nZ2xlSGFuZGxlciA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogJ1RPR0dMRScsXHJcbiAgICB9KTtcclxuICB9LCBbZGlzcGF0Y2hdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxEcmF3ZXJcclxuICAgICAgd2lkdGg9XCIzMjBweFwiXHJcbiAgICAgIGRyYXdlckhhbmRsZXI9e1xyXG4gICAgICAgIDxCb3ggc3g9e3N0eWxlcy5oYW5kbGVyfT5cclxuICAgICAgICAgIDxJb01kTWVudSBzaXplPVwiMjZweFwiIC8+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIH1cclxuICAgICAgb3Blbj17c3RhdGUuaXNPcGVufVxyXG4gICAgICB0b2dnbGVIYW5kbGVyPXt0b2dnbGVIYW5kbGVyfVxyXG4gICAgICBjbG9zZUJ1dHRvbj17PElvTWRDbG9zZSBzaXplPVwiMjRweFwiIGNvbG9yPVwiIzAwMDAwMFwiIC8+fVxyXG4gICAgICBkcmF3ZXJTdHlsZT17c3R5bGVzLmRyYXdlcn1cclxuICAgICAgY2xvc2VCdG5TdHlsZT17c3R5bGVzLmNsb3NlfVxyXG4gICAgPlxyXG4gICAgICA8U2Nyb2xsYmFycyBhdXRvSGlkZT5cclxuICAgICAgICA8Qm94IHN4PXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMubWVudX0+XHJcbiAgICAgICAgICAgIHttZW51SXRlbXMubWFwKCh7IHBhdGgsIGxhYmVsIH0sIGkpID0+IChcclxuICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgYWN0aXZlQ2xhc3M9XCJhY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgdG89e3BhdGh9XHJcbiAgICAgICAgICAgICAgICBzcHk9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBzbW9vdGg9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBvZmZzZXQ9ey03MH1cclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uPXs1MDB9XHJcbiAgICAgICAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2xhYmVsfVxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L0JveD5cclxuXHJcbiAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMubWVudUZvb3Rlcn0+XHJcbiAgICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5zb2NpYWx9PlxyXG4gICAgICAgICAgICAgIHtzb2NpYWwubWFwKCh7IHBhdGgsIGljb24gfSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPEJveCBhcz1cInNwYW5cIiBrZXk9e2l9IHN4PXtzdHlsZXMuc29jaWFsLmljb259PlxyXG4gICAgICAgICAgICAgICAgICA8TGluayB0bz17cGF0aH0+e2ljb259PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvU2Nyb2xsYmFycz5cclxuICAgIDwvRHJhd2VyPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgaGFuZGxlcjoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICBmbGV4U2hyaW5rOiAnMCcsXHJcbiAgICB3aWR0aDogJzI2cHgnLFxyXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAnQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSc6IHtcclxuICAgICAgZGlzcGxheTogJ25vbmUnLFxyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICBkcmF3ZXI6IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ2RhcmsnLFxyXG4gIH0sXHJcblxyXG4gIGNsb3NlOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgdG9wOiAnMjVweCcsXHJcbiAgICByaWdodDogJzMwcHgnLFxyXG4gICAgekluZGV4OiAnMScsXHJcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICB9LFxyXG5cclxuICBjb250ZW50OiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIHB0OiAnMTAwcHgnLFxyXG4gICAgcGI6ICc0MHB4JyxcclxuICAgIHB4OiAnMzBweCcsXHJcbiAgfSxcclxuXHJcbiAgbWVudToge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgYToge1xyXG4gICAgICBmb250U2l6ZTogJzE2cHgnLFxyXG4gICAgICBmb250V2VpZ2h0OiAnNTAwJyxcclxuICAgICAgY29sb3I6ICd0ZXh0X3doaXRlJyxcclxuICAgICAgcHk6ICcxNXB4JyxcclxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjZThlNWU1JyxcclxuICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjI1cycsXHJcbiAgICAgICcmOmhvdmVyJzoge1xyXG4gICAgICAgIGNvbG9yOiAnc2Vjb25kYXJ5JyxcclxuICAgICAgfSxcclxuICAgICAgJyYuYWN0aXZlJzoge1xyXG4gICAgICAgIGNvbG9yOiAnc2Vjb25kYXJ5JyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgbWVudUZvb3Rlcjoge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBtdDogJ2F1dG8nLFxyXG4gIH0sXHJcblxyXG4gIHNvY2lhbDoge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG5cclxuICAgIGljb246IHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICBjb2xvcjogJ3RleHQnLFxyXG4gICAgICBmb250U2l6ZTogMTQsXHJcbiAgICAgIG1yOiAnMTVweCcsXHJcbiAgICAgIHRyYW5zaXRpb246ICdhbGwgMC4yNXMnLFxyXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICAgJzpsYXN0LWNoaWxkJzoge1xyXG4gICAgICAgIG1yOiAnMCcsXHJcbiAgICAgIH0sXHJcbiAgICAgICcmOmhvdmVyJzoge1xyXG4gICAgICAgIGNvbG9yOiAnc2Vjb25kYXJ5JyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgYnV0dG9uOiB7XHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGZvbnRTaXplOiAnMTRweCcsXHJcbiAgICBmdzogJzcwMCcsXHJcbiAgICBoZWlnaHQ6ICc0NXB4JyxcclxuICAgIGJvcmRlclJhZGl1czogJzVweCcsXHJcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgIHB5OiAnMCcsXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vYmlsZURyYXdlcjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgSW1hZ2UgYXMgSW1nIH0gZnJvbSAndGhlbWUtdWknO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW1hZ2UoeyBzcmMsIC4uLnJlc3QgfSkge1xyXG4gIHJldHVybiA8SW1nIHNyYz17c3JjfSB7Li4ucmVzdH0gLz47XHJcbn1cclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU3RpY2t5IGZyb20gJ3JlYWN0LXN0aWNreW5vZGUnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vaGVhZGVyL2hlYWRlcic7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9mb290ZXIvZm9vdGVyJztcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHsgY2hpbGRyZW4gfSkge1xyXG4gIGNvbnN0IFtpc1N0aWNreSwgc2V0SXNTdGlja3ldID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGhhbmRsZVN0YXRlQ2hhbmdlID0gKHN0YXR1cykgPT4ge1xyXG4gICAgaWYgKHN0YXR1cy5zdGF0dXMgPT09IFN0aWNreS5TVEFUVVNfRklYRUQpIHtcclxuICAgICAgc2V0SXNTdGlja3kodHJ1ZSk7XHJcbiAgICB9IGVsc2UgaWYgKHN0YXR1cy5zdGF0dXMgPT09IFN0aWNreS5TVEFUVVNfT1JJR0lOQUwpIHtcclxuICAgICAgc2V0SXNTdGlja3koZmFsc2UpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgPFN0aWNreSBpbm5lclo9ezEwMDF9IHRvcD17MH0gb25TdGF0ZUNoYW5nZT17aGFuZGxlU3RhdGVDaGFuZ2V9PlxyXG4gICAgICAgIDxIZWFkZXIgY2xhc3NOYW1lPXtgJHtpc1N0aWNreSA/ICdzdGlja3knIDogJ3VuU3RpY2t5J31gfSAvPlxyXG4gICAgICA8L1N0aWNreT5cclxuICAgICAgPG1haW5cclxuICAgICAgICBzeD17e1xyXG4gICAgICAgICAgdmFyaWFudDogJ2xheW91dC5tYWluJyxcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L21haW4+XHJcbiAgICAgIDxGb290ZXIgLz5cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgKTtcclxufVxyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4LCBOYXZMaW5rIGFzIE1lbnVMaW5rLCBMaW5rIGFzIEEgfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCBOZXh0TGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5leHBvcnQgZnVuY3Rpb24gTmF2TGluayh7IHBhdGgsIGxhYmVsLCBjaGlsZHJlbiwgLi4ucmVzdCB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxOZXh0TGluayBocmVmPXtwYXRofT5cclxuICAgICAgPE1lbnVMaW5rIHsuLi5yZXN0fT57Y2hpbGRyZW4gPyBjaGlsZHJlbiA6IGxhYmVsfTwvTWVudUxpbms+XHJcbiAgICA8L05leHRMaW5rPlxyXG4gICk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIExpbmsoeyBwYXRoLCBsYWJlbCwgY2hpbGRyZW4sIC4uLnJlc3QgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8QSB7Li4ucmVzdH0gaHJlZj17cGF0aH0+XHJcbiAgICAgIHtjaGlsZHJlbiA/IGNoaWxkcmVuIDogbGFiZWx9XHJcbiAgICA8L0E+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBGbGV4LCBCb3gsIEljb25CdXR0b24gfSBmcm9tICd0aGVtZS11aSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMaXN0KHsgaXRlbXMgPSBbXSwgcGFyZW50U3R5bGUsIGNoaWxkU3R5bGUgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94XHJcbiAgICAgIGFzPVwidWxcIlxyXG4gICAgICBzeD17e1xyXG4gICAgICAgIGxpc3RTdHlsZVR5cGU6ICdub25lJyxcclxuICAgICAgICBtYXJnaW46IDAsXHJcbiAgICAgICAgcGFkZGluZzogMCxcclxuICAgICAgICAuLi5wYXJlbnRTdHlsZSxcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAge2l0ZW1zLm1hcCgoeyBpY29uLCB0ZXh0LCBpc0F2YWlsYWJsZSB9LCBpKSA9PiAoXHJcbiAgICAgICAgPEZsZXhcclxuICAgICAgICAgIGNsYXNzTmFtZT17aXNBdmFpbGFibGUgPyAnb3BlbicgOiAnY2xvc2VkJ31cclxuICAgICAgICAgIGFzPVwibGlcIlxyXG4gICAgICAgICAgc3g9e3sgLi4uY2hpbGRTdHlsZSB9fVxyXG4gICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxJY29uQnV0dG9uIHN4PXtzdHlsZXMubGlzdEljb259IGFyaWEtbGFiZWw9XCJsaXN0IGljb25cIj5cclxuICAgICAgICAgICAge2ljb259XHJcbiAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICB7dGV4dH1cclxuICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICkpfVxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufVxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgbGlzdEljb246IHtcclxuICAgIHdpZHRoOiBbMjUsICczNXB4J10sXHJcbiAgICBoZWlnaHQ6ICdhdXRvJyxcclxuICAgIGNvbG9yOiAnc2Vjb25kYXJ5JyxcclxuICAgIHBhZGRpbmc6IDAsXHJcbiAgICBmb250U2l6ZTogWzIsIDVdLFxyXG4gICAgbWFyZ2luTGVmdDogJy0xcHgnLFxyXG4gICAgZmxleFNocmluazogMCxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1zdGFydCcsXHJcbiAgICBtYXJnaW5Ub3A6IFsxLCAnMnB4J10sXHJcbiAgfSxcclxufTtcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCwgSW1hZ2UgfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdjb21wb25lbnRzL2xpbmsnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9nbyh7IHNyYywgLi4ucmVzdCB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMaW5rXHJcbiAgICAgIHBhdGg9XCIvXCJcclxuICAgICAgc3g9e3tcclxuICAgICAgICB2YXJpYW50OiAnbGlua3MubG9nbycsXHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICAgIG1yOiAxNSxcclxuICAgICAgfX1cclxuICAgICAgey4uLnJlc3R9XHJcbiAgICA+XHJcbiAgICAgIDxJbWFnZSBzcmM9e3NyY30gYWx0PVwic3RhcnR1cCBsYW5kaW5nIGxvZ29cIiBzdHlsZT17e21heFdpZHRoOic0cmVtJ319IC8+XHJcbiAgICBcclxuICAgIDwvTGluaz5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7IEJveCwgQ2FyZCwgVGV4dCwgRmxleCwgSGVhZGluZywgQnV0dG9uIH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGlzdCBmcm9tICcuL2xpc3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJpY2VDYXJkKHtcclxuICBkYXRhOiB7XHJcbiAgICBoZWFkZXIsXHJcbiAgICBuYW1lLFxyXG4gICAgZGVzY3JpcHRpb24sXHJcbiAgICBwcmljZVdpdGhVbml0LFxyXG4gICAgYnV0dG9uVGV4dCA9ICdTdGFydCBGcmVlIFRyaWFsJyxcclxuICAgIHBvaW50cyxcclxuICB9LFxyXG59KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJkIGNsYXNzTmFtZT17aGVhZGVyID8gJ2FjdGl2ZScgOiBudWxsfSBzeD17c3R5bGVzLnByaWNpbmdCb3h9PlxyXG4gICAgICB7aGVhZGVyICYmIDxUZXh0IHN4PXtzdHlsZXMuaGVhZGVyfT57aGVhZGVyfTwvVGV4dD59XHJcbiAgICAgIDxCb3g+XHJcbiAgICAgICAgPEZsZXggc3g9e3N0eWxlcy5wcmljaW5nSGVhZGVyfT5cclxuICAgICAgICAgIDxCb3g+XHJcbiAgICAgICAgICAgIDxIZWFkaW5nIGNsYXNzTmFtZT1cInBhY2thZ2VfX25hbWVcIiBzeD17c3R5bGVzLmhlYWRpbmd9PlxyXG4gICAgICAgICAgICAgIHtuYW1lfVxyXG4gICAgICAgICAgICA8L0hlYWRpbmc+XHJcbiAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgYXM9XCJwXCJcclxuICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogaGVhZGVyID8gMSA6IDAuNyxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBoZWFkZXIgPyAndGV4dCcgOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IFsxLCAyXSxcclxuICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IDEuMyxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2Rlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIHtoZWFkZXIgJiYgKFxyXG4gICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9XCJwYWNrYWdlX19wcmljZVwiIHN4PXtzdHlsZXMucHJpY2V9PlxyXG4gICAgICAgICAgICAgIDxzcGFuPlN0YXJ0aW5nIGZyb208L3NwYW4+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmljZVwiPlxyXG4gICAgICAgICAgICAgICAge3ByaWNlV2l0aFVuaXR9XHJcbiAgICAgICAgICAgICAgICA8c3ViPm1vPC9zdWI+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgIDxMaXN0IGl0ZW1zPXtwb2ludHN9IGNoaWxkU3R5bGU9e3N0eWxlcy5saXN0SXRlbX0gLz5cclxuICAgICAgICA8Qm94XHJcbiAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICBtdDogWyc0MHB4JywgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgJzcwcHgnXSxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICB2YXJpYW50PXtoZWFkZXIgPyAncHJpbWFyeScgOiAnd2hpdGVCdXR0b24nfVxyXG4gICAgICAgICAgICBhcmlhLWxhYmVsPXtidXR0b25UZXh0fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7YnV0dG9uVGV4dH1cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvQ2FyZD5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgcHJpY2luZ0JveDoge1xyXG4gICAgZmxleDogW1xyXG4gICAgICAnMCAxIDEwMCUnLFxyXG4gICAgICBudWxsLFxyXG4gICAgICBudWxsLFxyXG4gICAgICAnMCAxIDUwJScsXHJcbiAgICAgICcwIDEgNDUlJyxcclxuICAgICAgJzAgMSA0MCUnLFxyXG4gICAgICAnMCAxIDM4LjUlJyxcclxuICAgIF0sXHJcbiAgICBiYWNrZ3JvdW5kOiAnIzJGNTM5MicsXHJcbiAgICBib3JkZXJSYWRpdXM6IDEwLFxyXG4gICAgbWw6IFswLCBudWxsLCBudWxsLCA1XSxcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgbXQ6IFsnNDBweCcsIG51bGwsIG51bGwsIDBdLFxyXG4gICAgcDogW1xyXG4gICAgICAnNTBweCAxNXB4IDUwcHgnLFxyXG4gICAgICBudWxsLFxyXG4gICAgICAnNjJweCAyNXB4IDUwcHggMjVweCcsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgICc2MnB4IDcwcHggNTBweCA0MHB4JyxcclxuICAgIF0sXHJcbiAgICAnQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDIwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCknOiB7XHJcbiAgICAgIG1heFdpZHRoOiAnMzgwcHgnLFxyXG4gICAgfSxcclxuICAgICcmOmZpcnN0LW9mLXR5cGUnOiB7XHJcbiAgICAgIG1sOiAwLFxyXG4gICAgICBtdDogMCxcclxuICAgIH0sXHJcbiAgICAnJi5hY3RpdmUnOiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcclxuICAgICAgJy5wYWNrYWdlX19uYW1lJzoge1xyXG4gICAgICAgIGNvbG9yOiAnaGVhZGluZ19zZWNvbmRhcnknLFxyXG4gICAgICB9LFxyXG4gICAgICAnLnBhY2thZ2VfX3ByaWNlID4gc3Bhbic6IHtcclxuICAgICAgICBjb2xvcjogJ3RleHQnLFxyXG4gICAgICB9LFxyXG4gICAgICAnLm9wZW4nOiB7XHJcbiAgICAgICAgY29sb3I6ICd0ZXh0JyxcclxuICAgICAgfSxcclxuICAgICAgJy5jbG9zZWQnOiB7XHJcbiAgICAgICAgY29sb3I6ICd0ZXh0JyxcclxuICAgICAgICBvcGFjaXR5OiAwLjYsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgaGVhZGVyOiB7XHJcbiAgICBoZWlnaHQ6IFsnMjhweCcsIG51bGwsIG51bGwsIG51bGwsICczMnB4J10sXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRUY5RTQ4JyxcclxuICAgIGJvcmRlclJhZGl1czogJzVweCcsXHJcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgICBmb250U2l6ZTogJzE0cHgnLFxyXG4gICAgbGluZUhlaWdodDogJzE4cHgnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICBjb2xvcjogJyNGRkZGRkYnLFxyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICB0b3A6IFszLCBudWxsLCA0XSxcclxuICAgIGxldHRlclNwYWNpbmc6ICctLjE0cHgnLFxyXG4gICAgcHg6ICcxMHB4JyxcclxuICB9LFxyXG5cclxuICBoZWFkaW5nOiB7XHJcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgICBmb250U2l6ZTogWzQsIG51bGwsIG51bGwsIG51bGwsIDVdLFxyXG4gICAgbGluZUhlaWdodDogJzIzcHgnLFxyXG4gICAgY29sb3I6ICcjZmZmZmZmJyxcclxuICAgIG1hcmdpbkJvdHRvbTogWzEsIG51bGwsICcxMnB4J10sXHJcbiAgfSxcclxuICBwcmljaW5nSGVhZGVyOiB7XHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gICAgYWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnLFxyXG4gICAgbWI6IFsnMzVweCcsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICc1MHB4J10sXHJcbiAgfSxcclxuICBwcmljZToge1xyXG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gICAgZm9udFNpemU6IFs0LCBudWxsLCA1LCBudWxsLCAnMjZweCddLFxyXG4gICAgbGluZUhlaWdodDogMSxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGxldHRlclNwYWNpbmc6ICctMC41cHgnLFxyXG4gICAgY29sb3I6ICcjMEYyMTM3JyxcclxuICAgIG1hcmdpbkJvdHRvbTogMCxcclxuICAgIGZsZXhXcmFwOiAnd3JhcCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIHRleHRBbGlnbjogJ3JpZ2h0JyxcclxuICAgIG10OiBbJy0zcHgnLCBudWxsLCAnMnB4J10sXHJcbiAgICAnPiBzcGFuJzoge1xyXG4gICAgICBmb250V2VpZ2h0OiAnYm9keScsXHJcbiAgICAgIGZvbnRTaXplOiBbMSwgMl0sXHJcbiAgICAgIGxpbmVIZWlnaHQ6IDEuMjUsXHJcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICAgIG1hcmdpbkJvdHRvbTogJzEwcHgnLFxyXG4gICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIH0sXHJcbiAgICAnPiAucHJpY2UnOiB7XHJcbiAgICAgIG1hcmdpbkJvdHRvbTogMCxcclxuICAgICAgY29sb3I6ICdzZWNvbmRhcnknLFxyXG4gICAgICAnPiBzdWInOiB7XHJcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgICAgYm90dG9tOiAnNnB4JyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBsaXN0SXRlbToge1xyXG4gICAgZm9udFN0eWxlOiAnbm9ybWFsJyxcclxuICAgIGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxyXG4gICAgZm9udFNpemU6IFsxLCBudWxsLCBudWxsLCBudWxsLCAyXSxcclxuICAgIGxpbmVIZWlnaHQ6IFsxLjcsIG51bGwsIDEuNjVdLFxyXG4gICAgbWFyZ2luQm90dG9tOiBbMywgJzIycHgnXSxcclxuICAgIGFsaWduSXRlbXM6ICdmbGV4LXN0YXJ0JyxcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgcHI6IFsyLCBudWxsLCBudWxsLCBudWxsLCAwLCA2XSxcclxuICAgICcmLmNsb3NlZCc6IHtcclxuICAgICAgb3BhY2l0eTogMC41NSxcclxuICAgICAgYnV0dG9uOiB7XHJcbiAgICAgICAgY29sb3I6ICcjNzg4RkI1JyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRmFTdGFyIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xyXG5cclxuY29uc3QgUmF0aW5nID0gKHsgcmF0aW5nIH0pID0+IHtcclxuICBjb25zdCB0b3RhbFJhdGluZyA9IFtdO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XHJcbiAgICBpZiAoaSA8IHJhdGluZykge1xyXG4gICAgICB0b3RhbFJhdGluZy5wdXNoKFxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJzdGFyXCIga2V5PXtgcmF0aW5nLWtleSR7aX1gfT5cclxuICAgICAgICAgIDxGYVN0YXIgLz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdG90YWxSYXRpbmcucHVzaChcclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwic3Rhci1vXCIga2V5PXtgcmF0aW5nLWtleSR7aX1gfT5cclxuICAgICAgICAgIDxGYVN0YXIgLz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0aW5nXCI+XHJcbiAgICAgIDx1bD57dG90YWxSYXRpbmd9PC91bD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSYXRpbmc7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJveCwgVGV4dCwgSGVhZGluZyB9IGZyb20gJ3RoZW1lLXVpJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlY3Rpb25IZWFkZXIoeyB0aXRsZSwgc2xvZ2FuLCBpc1doaXRlIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBzeD17eyB2YXJpYW50OiAnc2VjdGlvbkhlYWRlcicgfX0+XHJcbiAgICAgIDxUZXh0XHJcbiAgICAgICAgYXM9XCJwXCJcclxuICAgICAgICBzeD17e1xyXG4gICAgICAgICAgdmFyaWFudDogJ3NlY3Rpb25IZWFkZXIuc3ViVGl0bGUnLFxyXG4gICAgICAgICAgY29sb3I6IGlzV2hpdGUgPyAnd2hpdGUnIDogJ2hlYWRpbmcnLFxyXG4gICAgICAgICAgb3BhY2l0eTogaXNXaGl0ZSA/IDAuNyA6IDEsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIHtzbG9nYW59XHJcbiAgICAgIDwvVGV4dD5cclxuICAgICAgPEhlYWRpbmdcclxuICAgICAgICBhcz1cImgyXCJcclxuICAgICAgICBzeD17e1xyXG4gICAgICAgICAgdmFyaWFudDogJ3NlY3Rpb25IZWFkZXIudGl0bGUnLFxyXG4gICAgICAgICAgY29sb3I6IGlzV2hpdGUgPyAnd2hpdGUnIDogJ2hlYWRpbmdfc2Vjb25kYXJ5JyxcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAge3RpdGxlfVxyXG4gICAgICA8L0hlYWRpbmc+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTRU8oe1xyXG4gIGRlc2NyaXB0aW9uID0gJ3N0YXJ0dXAgYXBwcyBsYW5kaW5nIHBhZ2UnLFxyXG4gIGF1dGhvciA9ICdSZWRRLCBJbmMnLFxyXG4gIG1ldGEsXHJcbiAgdGl0bGUgPSAnc3RhcnR1cCBsYW5kaW5nIHRpdGxlJyxcclxufSkge1xyXG4gIGNvbnN0IG1ldGFEYXRhID0gW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiBgZGVzY3JpcHRpb25gLFxyXG4gICAgICBjb250ZW50OiBkZXNjcmlwdGlvbixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHByb3BlcnR5OiBgb2c6dGl0bGVgLFxyXG4gICAgICBjb250ZW50OiB0aXRsZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHByb3BlcnR5OiBgb2c6ZGVzY3JpcHRpb25gLFxyXG4gICAgICBjb250ZW50OiBkZXNjcmlwdGlvbixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHByb3BlcnR5OiBgb2c6dHlwZWAsXHJcbiAgICAgIGNvbnRlbnQ6IGB3ZWJzaXRlYCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IGB0d2l0dGVyOmNhcmRgLFxyXG4gICAgICBjb250ZW50OiBgc3VtbWFyeWAsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBgdHdpdHRlcjpjcmVhdG9yYCxcclxuICAgICAgY29udGVudDogYXV0aG9yLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogYHR3aXR0ZXI6dGl0bGVgLFxyXG4gICAgICBjb250ZW50OiB0aXRsZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IGB0d2l0dGVyOmRlc2NyaXB0aW9uYCxcclxuICAgICAgY29udGVudDogZGVzY3JpcHRpb24sXHJcbiAgICB9LFxyXG4gIF0uY29uY2F0KG1ldGEpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8SGVhZD5cclxuICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxyXG4gICAgICB7bWV0YURhdGEubWFwKCh7IG5hbWUsIGNvbnRlbnQgfSwgaSkgPT4gKFxyXG4gICAgICAgIDxtZXRhIGtleT17aX0gbmFtZT17bmFtZX0gY29udGVudD17Y29udGVudH0gLz5cclxuICAgICAgKSl9XHJcbiAgICA8L0hlYWQ+XHJcbiAgKTtcclxufVxyXG5cclxuU0VPLmRlZmF1bHRQcm9wcyA9IHtcclxuICBsYW5nOiBgZW5gLFxyXG4gIG1ldGE6IFtdLFxyXG59O1xyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4LCBCb3gsIEhlYWRpbmcsIFRleHQsIEJ1dHRvbiwgTGluayB9IGZyb20gJ3RoZW1lLXVpJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRleHRGZWF0dXJlKHtcclxuICBzdWJUaXRsZSxcclxuICB0aXRsZSxcclxuICBkZXNjcmlwdGlvbixcclxuICBidG5OYW1lLFxyXG4gIGJ0blVSTCA9ICcjJyxcclxufSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IHN4PXtzdHlsZXMuY2FyZH0+XHJcbiAgICAgIDxCb3ggc3g9e3N0eWxlcy53cmFwcGVyfT5cclxuICAgICAgICA8VGV4dCBhcz1cInBcIiBzeD17c3R5bGVzLndyYXBwZXIuc3ViVGl0bGV9PlxyXG4gICAgICAgICAge3N1YlRpdGxlfVxyXG4gICAgICAgIDwvVGV4dD5cclxuICAgICAgICA8SGVhZGluZyBhcz1cImgyXCIgc3g9e3N0eWxlcy53cmFwcGVyLnRpdGxlfT5cclxuICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICA8L0hlYWRpbmc+XHJcbiAgICAgIDwvQm94PlxyXG5cclxuICAgICAge2Rlc2NyaXB0aW9uICYmIChcclxuICAgICAgICA8VGV4dCBhcz1cInBcIiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiIHN4PXtzdHlsZXMuZGVzY3JpcHRpb259PlxyXG4gICAgICAgICAge2Rlc2NyaXB0aW9ufVxyXG4gICAgICAgIDwvVGV4dD5cclxuICAgICAgKX1cclxuXHJcbiAgICAgIHtidG5OYW1lICYmIChcclxuICAgICAgICA8TGluayBocmVmPXtidG5VUkx9IHZhcmlhbnQ9XCJkZWZhdWx0XCI+XHJcbiAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgYXJpYS1sYWJlbD17YnRuTmFtZX0+XHJcbiAgICAgICAgICAgIHtidG5OYW1lfVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICApfVxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGNhcmQ6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdmbGV4LXN0YXJ0JyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgZmxleFNocmluazogMCxcclxuICAgIGE6IHtcclxuICAgICAgbTogWycwIGF1dG8nLCBudWxsLCBudWxsLCAwXSxcclxuICAgIH0sXHJcbiAgfSxcclxuICB3cmFwcGVyOiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICBtdDogJy01cHgnLFxyXG4gICAgdGl0bGU6IHtcclxuICAgICAgZm9udFNpemU6IFsnMjRweCcsIG51bGwsICcyOHB4JywgJzMycHgnLCAnMzZweCcsICc0MnB4JywgbnVsbCwgJzQ2cHgnXSxcclxuICAgICAgY29sb3I6ICdoZWFkaW5nX3NlY29uZGFyeScsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IFsxLjM1LCBudWxsLCBudWxsLCAxLjMsIDEuMl0sXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICc3MDAnLFxyXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAnLS41cHgnLFxyXG4gICAgICBtYjogNSxcclxuICAgIH0sXHJcblxyXG4gICAgc3ViVGl0bGU6IHtcclxuICAgICAgZm9udFNpemU6IFswLCBudWxsLCAnMTRweCddLFxyXG4gICAgICBjb2xvcjogJ2hlYWRpbmcnLFxyXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAnMnB4JyxcclxuICAgICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICc3MDAnLFxyXG4gICAgICBtYjogWzIsIG51bGwsIG51bGwsIG51bGwsIDNdLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAxLjUsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZGVzY3JpcHRpb246IHtcclxuICAgIGZvbnRTaXplOiBbJzE1cHgnLCAyLCBudWxsLCBudWxsLCBudWxsLCAnMTdweCcsIG51bGwsIDNdLFxyXG4gICAgZm9udFdlaWdodDogNDAwLFxyXG4gICAgbGluZUhlaWdodDogWzEuODUsIG51bGwsIG51bGwsIDIsIG51bGwsICcyLjInXSxcclxuICAgIGNvbG9yOiAndGV4dF9zZWNvbmRhcnknLFxyXG4gICAgbWI6ICczMHB4JyxcclxuICB9LFxyXG59O1xyXG4iLCJpbXBvcnQgeyB1c2VDcmVhdGVDb250ZXh0IH0gZnJvbSAnLi4vY3JlYXRlLWNvbnRleHQnO1xyXG5pbXBvcnQgeyByZWR1Y2VyLCBpbml0aWFsU3RhdGUgfSBmcm9tICcuL2FwcC5yZWR1Y2VyJztcclxuXHJcbmNvbnN0IFtzdGF0ZSwgdXNlRGlzcGF0Y2gsIHByb3ZpZGVyXSA9IHVzZUNyZWF0ZUNvbnRleHQoaW5pdGlhbFN0YXRlLCByZWR1Y2VyKTtcclxuZXhwb3J0IGNvbnN0IHVzZVN0aWNreVN0YXRlID0gc3RhdGU7XHJcbmV4cG9ydCBjb25zdCB1c2VTdGlja3lEaXNwYXRjaCA9IHVzZURpc3BhdGNoO1xyXG5leHBvcnQgY29uc3QgU3RpY2t5UHJvdmlkZXIgPSBwcm92aWRlcjtcclxuIiwiZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBpc1N0aWNreTogZmFsc2UsXHJcbiAgaXNTaWRlYmFyU3RpY2t5OiB0cnVlLFxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUsIHsgdHlwZSB9KSB7XHJcbiAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICBjYXNlICdTRVRfU1RJQ0tZJzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBpc1N0aWNreTogdHJ1ZSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgJ1JFTU9WRV9TVElDS1knOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGlzU3RpY2t5OiBmYWxzZSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgJ1NFVF9TSURFQkFSX1NUSUNLWSc6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaXNTaWRlYmFyU3RpY2t5OiB0cnVlLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSAnUkVNT1ZFX1NJREVCQVJfU1RJQ0tZJzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBpc1NpZGViYXJTdGlja3k6IGZhbHNlLFxyXG4gICAgICB9O1xyXG4gICAgZGVmYXVsdDoge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuc3VwcG9ydGVkIGFjdGlvbiB0eXBlOiAke3R5cGV9YCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUNyZWF0ZUNvbnRleHQoZGVmYXVsdFZhbHVlLCByZWR1Y2VyKSB7XHJcbiAgY29uc3QgZGVmYXVsdERpc3BhdGNoID0gKCkgPT4gZGVmYXVsdFZhbHVlO1xyXG4gIGNvbnN0IHN0YXRlQ3R4ID0gY3JlYXRlQ29udGV4dChkZWZhdWx0VmFsdWUpO1xyXG4gIGNvbnN0IGRpc3BhdGNoQ3R4ID0gY3JlYXRlQ29udGV4dChkZWZhdWx0RGlzcGF0Y2gpO1xyXG5cclxuICBmdW5jdGlvbiB1c2VTdGF0ZUN0eChwcm9wZXJ0eSkge1xyXG4gICAgY29uc3Qgc3RhdGUgPSB1c2VDb250ZXh0KHN0YXRlQ3R4KTtcclxuICAgIHJldHVybiBzdGF0ZVtwcm9wZXJ0eV07IC8vIG9ubHkgb25lIGRlcHRoIHNlbGVjdG9yIGZvciBjb21wYXJpc29uXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB1c2VEaXNwYXRjaEN0eCgpIHtcclxuICAgIHJldHVybiB1c2VDb250ZXh0KGRpc3BhdGNoQ3R4KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIFByb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xyXG4gICAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSBSZWFjdC51c2VSZWR1Y2VyKHJlZHVjZXIsIGRlZmF1bHRWYWx1ZSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGlzcGF0Y2hDdHguUHJvdmlkZXIgdmFsdWU9e2Rpc3BhdGNofT5cclxuICAgICAgICA8c3RhdGVDdHguUHJvdmlkZXIgdmFsdWU9e3N0YXRlfT57Y2hpbGRyZW59PC9zdGF0ZUN0eC5Qcm92aWRlcj5cclxuICAgICAgPC9kaXNwYXRjaEN0eC5Qcm92aWRlcj5cclxuICAgICk7XHJcbiAgfVxyXG4gIHJldHVybiBbdXNlU3RhdGVDdHgsIHVzZURpc3BhdGNoQ3R4LCBQcm92aWRlcl07XHJcbn1cclxuIiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBjb25zdCBEcmF3ZXJDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSk7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBEcmF3ZXJDb250ZXh0IH0gZnJvbSAnLi9kcmF3ZXIuY29udGV4dCc7XHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBpc09wZW46IGZhbHNlLFxyXG59O1xyXG5cclxuZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSwgYWN0aW9uKSB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSAnVE9HR0xFJzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBpc09wZW46ICFzdGF0ZS5pc09wZW4sXHJcbiAgICAgIH07XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBjb25zdCBEcmF3ZXJQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbFN0YXRlKTtcclxuICByZXR1cm4gKFxyXG4gICAgPERyYXdlckNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgc3RhdGUsIGRpc3BhdGNoIH19PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0RyYXdlckNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IHsgU3RpY2t5UHJvdmlkZXIgfSBmcm9tICdjb250ZXh0cy9hcHAvYXBwLnByb3ZpZGVyJztcclxuaW1wb3J0IHRoZW1lIGZyb20gJ3RoZW1lJztcclxuaW1wb3J0IFNFTyBmcm9tICdjb21wb25lbnRzL3Nlbyc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnY29tcG9uZW50cy9sYXlvdXQnO1xyXG5pbXBvcnQgQmFubmVyIGZyb20gJ3NlY3Rpb25zL2Jhbm5lcic7XHJcbmltcG9ydCBLZXlGZWF0dXJlIGZyb20gJ3NlY3Rpb25zL2tleS1mZWF0dXJlJztcclxuaW1wb3J0IENvcmVGZWF0dXJlIGZyb20gJ3NlY3Rpb25zL2NvcmUtZmVhdHVyZSc7XHJcbmltcG9ydCBGZWF0dXJlIGZyb20gJ3NlY3Rpb25zL2ZlYXR1cmUnO1xyXG5pbXBvcnQgUGFydG5lclNlY3Rpb24gZnJvbSAnc2VjdGlvbnMvcGFydG5lcic7XHJcbmltcG9ydCBXb3JrRmxvdyBmcm9tICdzZWN0aW9ucy93b3JrZmxvdyc7XHJcbmltcG9ydCBUZXN0aW1vbmlhbENhcmQgZnJvbSAnc2VjdGlvbnMvdGVzdGltb25pYWwnO1xyXG5pbXBvcnQgU2VjdXJlUGF5bWVudCBmcm9tICdzZWN0aW9ucy9zZWN1cmUtcGF5bWVudCc7XHJcbmltcG9ydCBQYWNrYWdlIGZyb20gJ3NlY3Rpb25zL3BhY2thZ2UnO1xyXG5pbXBvcnQgRmFxIGZyb20gJ3NlY3Rpb25zL2ZhcSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleFBhZ2UoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XHJcbiAgICAgIDxTdGlja3lQcm92aWRlcj5cclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgPFNFTyB0aXRsZT1cIlN0YXJ0dXAgTGFuZGluZyAwMDRcIiAvPlxyXG4gICAgICAgICAgPEJhbm5lciAvPlxyXG4gICAgICAgICAgPEtleUZlYXR1cmUgLz5cclxuICAgICAgICAgIDxDb3JlRmVhdHVyZSAvPlxyXG4gICAgICAgICAgPEZlYXR1cmUgLz5cclxuICAgICAgICAgIDxQYXJ0bmVyU2VjdGlvbiAvPlxyXG4gICAgICAgICAgPFdvcmtGbG93IC8+XHJcbiAgICAgICAgICA8VGVzdGltb25pYWxDYXJkIC8+XHJcbiAgICAgICAgICA8U2VjdXJlUGF5bWVudCAvPlxyXG4gICAgICAgICAgPFBhY2thZ2UgLz5cclxuICAgICAgICAgIDxGYXEgLz5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgICAgPC9TdGlja3lQcm92aWRlcj5cclxuICAgIDwvVGhlbWVQcm92aWRlcj5cclxuICApO1xyXG59XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3ggfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgRmxleCwgQm94LCBIZWFkaW5nLCBUZXh0LCBJbWFnZSwgQnV0dG9uIH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBNb2RhbFZpZGVvIGZyb20gJ3JlYWN0LW1vZGFsLXZpZGVvJztcclxuaW1wb3J0IHsgRmFQbGF5Q2lyY2xlIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xyXG5pbXBvcnQgQmFubmVyQkcgZnJvbSAnYXNzZXRzL2Jhbm5lckJnLnBuZyc7XHJcbmltcG9ydCBCYW5uZXJUaHVtYiBmcm9tICdhc3NldHMvZ29hbC5wbmcnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmFubmVyKCkge1xyXG4gIGNvbnN0IFt2aWRlb09wZW4sIHNldFZpZGVvT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0VmlkZW9PcGVuKHRydWUpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIHN4PXtzdHlsZXMuYmFubmVyfSBpZD1cImhvbWVcIj5cclxuICAgICAgPENvbnRhaW5lciBzeD17c3R5bGVzLmJhbm5lci5jb250YWluZXJ9PlxyXG4gICAgICAgIDxCb3ggc3g9e3N0eWxlcy5iYW5uZXIuY29udGVudEJveH0+XHJcbiAgICAgICAgICA8SGVhZGluZyBhcz1cImgxXCIgdmFyaWFudD1cImhlcm9QcmltYXJ5XCI+XHJcbiAgICAgICAgICBEaXNjb3ZlciBSZWFsIEtub3dsZWRnZSB3aXRoIGV4cGVydHNcclxuICAgICAgICAgIDwvSGVhZGluZz5cclxuICAgICAgICAgIDxUZXh0IGFzPVwicFwiIHZhcmlhbnQ9XCJoZXJvU2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICBUaGUgbW9zdCBkaWZmaWN1bHQgcGFydCBvZiBtYWtpbmcgYSBzdWNjZXNzZnVsIGNhcnJpZXIgaXMgZ2V0dGluZyBzdGFydGVkLiBHaXZlIHlvdXIgY2FyZWVyIGEgYm9vc3QgYnkgbGVhcm5pbmcgaW5kdXN0cnkgc2tpbGxzLCB3b3JrIG9uIHJlYWwtbGlmZSBwcm9qZWN0cywgaW50ZXJuc2hpcHMsIGFuZCBleHBlcnQgZ3VpZGFuY2UuXHJcbiAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICA8RmxleD5cclxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwid2hpdGVCdXR0b25cIiBhcmlhLWxhYmVsPVwiR2V0IFN0YXJ0ZWRcIj5cclxuICAgICAgICAgICAgIEdldCBTdGFydGVkXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxNb2RhbFZpZGVvXHJcbiAgICAgICAgICAgICAgICBjaGFubmVsPVwieW91dHViZVwiXHJcbiAgICAgICAgICAgICAgICBpc09wZW49e3ZpZGVvT3Blbn1cclxuICAgICAgICAgICAgICAgIHZpZGVvSWQ9XCJaTkE5cm1Ec1lWRVwiXHJcbiAgICAgICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRWaWRlb09wZW4oZmFsc2UpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cInRleHRCdXR0b25cIlxyXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIldhdGNoIFZpZGVvXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxGYVBsYXlDaXJjbGUgLz4gV2F0Y2ggVmlkZW9cclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICBcclxuICAgICAgICA8L0JveD5cclxuXHJcbiAgICAgICAgPEJveCBzeD17c3R5bGVzLmJhbm5lci5pbWFnZUJveH0+XHJcbiAgICAgICAgICA8SW1hZ2Ugc3JjPXtCYW5uZXJUaHVtYn0gYWx0PVwiYmFubmVyXCIgLz5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGJhbm5lcjoge1xyXG4gICAgb3ZlcmZsb3c6IFsnaGlkZGVuJywgJ2luaXRpYWwnLCBudWxsLCAnaGlkZGVuJ10sXHJcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtCYW5uZXJCR30pYCxcclxuICAgIGJhY2tncm91bmRSZXBlYXQ6IGBuby1yZXBlYXRgLFxyXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiAndG9wIGxlZnQnLFxyXG4gICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXHJcbiAgICBib3JkZXJCb3R0b21SaWdodFJhZGl1czogWzEwMCwgMTUwLCBudWxsLCBudWxsLCBudWxsLCAyNTBdLFxyXG4gICAgcHQ6IFsnMTUwcHgnLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAnMTQwcHgnLCAnMTMwcHgnXSxcclxuICAgIHBiOiBbJzEwMHB4JywgbnVsbCwgbnVsbCwgJzExMHB4JywgbnVsbCwgMTAsICcxNTBweCddLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAncHJpbWFyeScsXHJcbiAgICBjb250YWluZXI6IHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgfSxcclxuICAgIGNvbnRlbnRCb3g6IHtcclxuICAgICAgd2lkdGg6IFsnMTAwJScsIG51bGwsICc4NSUnLCAnNTUlJywgJzUwJScsICc1NSUnXSxcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAgYWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnLFxyXG4gICAgICBmbGV4U2hyaW5rOiAwLFxyXG4gICAgICBwdDogWzAsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDUsIDddLFxyXG4gICAgfSxcclxuICAgIGltYWdlQm94OiB7XHJcbiAgICAgIGRpc3BsYXk6IFsnbm9uZScsIG51bGwsIG51bGwsICdibG9jayddLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgIG1sOiBbMCwgbnVsbCwgbnVsbCwgJy0xMTBweCcsICctMTE1cHgnLCAnLTE1MHB4JywgJy0yMTBweCcsICctMjcwcHgnXSxcclxuICAgICAgbXI6IFswLCBudWxsLCBudWxsLCAnLTE0NXB4JywgJy0xNjBweCcsICctMTgwcHgnLCAnLTIyMHB4JywgJy0yNTBweCddLFxyXG4gICAgICBtdDogWzAsIG51bGwsIG51bGwsICc0MHB4JywgNCwgNywgMF0sXHJcbiAgICAgIG1iOiBbMCwgbnVsbCwgbnVsbCwgbnVsbCwgJy00NXB4JywgJy03MHB4JywgbnVsbCwgJy0xMTVweCddLFxyXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc3BvbnNvclRpdGxlOiB7XHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGZvbnRTaXplOiBbMSwgMl0sXHJcbiAgICBvcGFjaXR5OiAwLjYsXHJcbiAgICBwcjogMjAsXHJcbiAgICBmbGV4U2hyaW5rOiAwLFxyXG4gICAgcGI6IFsyLCBudWxsLCAwXSxcclxuICB9LFxyXG4gIHNwb25zb3JCb3g6IHtcclxuICAgIHB0OiBbJzM1cHgnLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAnNDVweCddLFxyXG4gICAgZmxleERpcmVjdGlvbjogWydjb2x1bW4nLCBudWxsLCAncm93J10sXHJcbiAgICBzcG9uc29yOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICc+IGEnOiB7XHJcbiAgICAgICAgbXI6IFs1LCBudWxsLCBudWxsLCA0LCA2XSxcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgJyY6bGFzdC1vZi10eXBlJzoge1xyXG4gICAgICAgICAgbXI6IDAsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCwgQ29udGFpbmVyLCBCb3gsIEdyaWQsIFRleHQsIEhlYWRpbmcgfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCBUZXh0RmVhdHVyZSBmcm9tICdjb21wb25lbnRzL3RleHQtZmVhdHVyZSc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICdjb21wb25lbnRzL2ltYWdlJztcclxuXHJcbmltcG9ydCBDb3JlRmVhdHVyZVRodW1iIGZyb20gJ2Fzc2V0cy9TdWNjZXNzLnBuZyc7XHJcbmltcG9ydCBCcmllZmNhc2UgZnJvbSAnYXNzZXRzL2NvcmUtZmVhdHVyZS9jb2FjaGluZy5wbmcnO1xyXG5pbXBvcnQgU2VjdXJlIGZyb20gJ2Fzc2V0cy9jb3JlLWZlYXR1cmUvdGVudC5wbmcnO1xyXG5cclxuY29uc3QgZGF0YSA9IHtcclxuICBzdWJUaXRsZTogJ0NvcmUgZmVhdHVyZXMnLFxyXG4gIHRpdGxlOiAnTGVhcm4sUHJhY3RpY2UgYW5kIFBsYWNlZCcsXHJcbiAgZmVhdHVyZXM6IFtcclxuICAgIHtcclxuICAgICAgaWQ6IDEsXHJcbiAgICAgIGltZ1NyYzogQnJpZWZjYXNlLFxyXG4gICAgICBhbHRUZXh0OiAnTWVudG9yc2hpcCcsXHJcbiAgICAgIHRpdGxlOiAnTWVudG9yc2hpcCcsXHJcbiAgICAgIHRleHQ6XHJcbiAgICAgICAgJ0dldCBtZW50b3JzaGlwIGF0IGVhY2ggcGhhc2Ugb2YgeW91ciBsZWFybmluZyBhbmQgbGVhcm4gdGhlIHJpZ2h0IHdheSAnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDIsXHJcbiAgICAgIGltZ1NyYzogU2VjdXJlLFxyXG4gICAgICBhbHRUZXh0OiAnV29ybGQgQ2xhc3MgVHJhaW5pbmcnLFxyXG4gICAgICB0aXRsZTogJ1RyYWluaW5nIENhbXBzJyxcclxuICAgICAgdGV4dDpcclxuICAgICAgICAnQSByZWFsdGltZSBsZWFybmluZyBhbmQgcHJhY3RpbmcgdHJhaW5naW5nIGNhbXBzIHdpdGggbGl2ZSBtZW50b3JzaGlwIGFuZCB0cmFuaW5nIHRvIGJvb3N0IHlvdXIgbGVhcm5pbmcgYW5kIHJlZHVjZSBsZWFybmluZyB0aW1lJyxcclxuICAgIH0sXHJcbiAgXSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvcmVGZWF0dXJlKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBzeD17c3R5bGVzLmNvcmVGZWF0dXJlfT5cclxuICAgICAgPENvbnRhaW5lciBzeD17c3R5bGVzLmNvbnRhaW5lckJveH0+XHJcbiAgICAgICAgPEJveCBzeD17c3R5bGVzLnRodW1ibmFpbH0+XHJcbiAgICAgICAgICA8SW1hZ2Ugc3JjPXtDb3JlRmVhdHVyZVRodW1ifSBhbHQ9XCJUaHVtYm5haWxcIiAvPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICAgIDxCb3ggc3g9e3N0eWxlcy5jb250ZW50Qm94fT5cclxuICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5oZWFkaW5nVG9wfT5cclxuICAgICAgICAgICAgPFRleHRGZWF0dXJlIHN1YlRpdGxlPXtkYXRhLnN1YlRpdGxlfSB0aXRsZT17ZGF0YS50aXRsZX0gLz5cclxuICAgICAgICAgIDwvQm94PlxyXG5cclxuICAgICAgICAgIDxHcmlkIGdhcD1cIjE1cHggMFwiIGNvbHVtbnM9ezF9IHN4PXtzdHlsZXMuZ3JpZH0+XHJcbiAgICAgICAgICAgIHtkYXRhLmZlYXR1cmVzLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5jYXJkfSBrZXk9e2l0ZW0uaWR9PlxyXG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz17aXRlbS5pbWdTcmN9IGFsdD17aXRlbS5hbHRUZXh0fSBzeD17c3R5bGVzLmltZ30gLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMud3JhcHBlcn0+XHJcbiAgICAgICAgICAgICAgICAgIDxIZWFkaW5nIHN4PXtzdHlsZXMud3JhcHBlci50aXRsZX0+e2l0ZW0udGl0bGV9PC9IZWFkaW5nPlxyXG4gICAgICAgICAgICAgICAgICA8VGV4dCBzeD17c3R5bGVzLndyYXBwZXIuc3ViVGl0bGV9PntpdGVtLnRleHR9PC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgY29yZUZlYXR1cmU6IHtcclxuICAgIHB5OiBbMCwgbnVsbCwgbnVsbCwgMiwgbnVsbCwgN10sXHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICcmOjpiZWZvcmUnOiB7XHJcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICBjb250ZW50OiAnXCJcIicsXHJcbiAgICAgIHRvcDogWydhdXRvJywgbnVsbCwgbnVsbCwgJzUwJSddLFxyXG4gICAgICBib3R0b206IFsnMTAwcHgnLCAwLCBudWxsLCAnYXV0byddLFxyXG4gICAgICBsZWZ0OiAwLFxyXG4gICAgICBiYWNrZ3JvdW5kOiAnbGluZWFyLWdyYWRpZW50KC0xNTdkZWcsICNGNkZBRkQsICNGOUZDRkMsICNGQ0ZERkMpJyxcclxuICAgICAgaGVpZ2h0OiBbMzUwLCA1NTAsICc2MCUnXSxcclxuICAgICAgd2lkdGg6ICc1MCUnLFxyXG4gICAgICB6SW5kZXg6IC0xLFxyXG4gICAgICBib3JkZXJUb3BSaWdodFJhZGl1czogJzUwJScsXHJcbiAgICAgIGJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzOiAnNTAlJyxcclxuICAgICAgdHJhbnNmb3JtOiBbJ3RyYW5zbGF0ZVkoMCknLCBudWxsLCBudWxsLCAndHJhbnNsYXRlWSgtNTAlKSddLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGNvbnRhaW5lckJveDoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gICAgZmxleERpcmVjdGlvbjogWydjb2x1bW4nLCBudWxsLCBudWxsLCAncm93J10sXHJcbiAgfSxcclxuICB0aHVtYm5haWw6IHtcclxuICB3aWR0aDonOTAwcHgnXHJcbiAgfSxcclxuICBjb250ZW50Qm94OiB7XHJcbiAgICB3aWR0aDogWycxMDAlJywgNDUwLCA1NTAsIDM1MCwgNTAwLCA1NzBdLFxyXG4gICAgcHI6IFswLCBudWxsLCAnYXV0bycsIG51bGwsIG51bGwsIDgwXSxcclxuICAgIHBsOiAnYXV0bycsXHJcbiAgICBmbGV4U2hyaW5rOiAwLFxyXG4gIH0sXHJcbiAgaGVhZGluZ1RvcDoge1xyXG4gICAgcGw6IFswLCBudWxsLCBudWxsLCBudWxsLCAnMzVweCcsIG51bGwsICc1NXB4JywgNl0sXHJcbiAgICBtYjogWzMsIG51bGwsIG51bGwsIG51bGwsIDFdLFxyXG4gICAgdGV4dEFsaWduOiBbJ2NlbnRlcicsIG51bGwsIG51bGwsICdsZWZ0J10sXHJcbiAgfSxcclxuICBncmlkOiB7XHJcbiAgICBwOiBbJzAgMHB4IDM1cHgnLCBudWxsLCBudWxsLCBudWxsLCAnMCAyMHB4IDQwcHgnLCBudWxsLCAnMCA0MHB4IDQwcHgnLCAwXSxcclxuICB9LFxyXG4gIGNhcmQ6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdmbGV4LXN0YXJ0JyxcclxuICAgIHA6IFtcclxuICAgICAgJzAgMTdweCAyMHB4JyxcclxuICAgICAgbnVsbCxcclxuICAgICAgbnVsbCxcclxuICAgICAgJzAgMCAyMHB4JyxcclxuICAgICAgJzIwcHggMTVweCAxN3B4JyxcclxuICAgICAgbnVsbCxcclxuICAgICAgbnVsbCxcclxuICAgICAgJzI1cHggMzBweCAyM3B4JyxcclxuICAgIF0sXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXHJcbiAgICBib3JkZXJSYWRpdXM6ICcxMHB4JyxcclxuICAgIHRyYW5zaXRpb246ICdhbGwgMC4zcycsXHJcbiAgICB3aWR0aDogWycxMDAlJywgJzg1JScsIG51bGwsICcxMDAlJ10sXHJcbiAgICBteDogJ2F1dG8nLFxyXG4gICAgJyY6aG92ZXInOiB7XHJcbiAgICAgIGJveFNoYWRvdzogW1xyXG4gICAgICAgICcwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDApJyxcclxuICAgICAgICBudWxsLFxyXG4gICAgICAgIG51bGwsXHJcbiAgICAgICAgbnVsbCxcclxuICAgICAgICAnMHB4IDhweCAyNHB4IHJnYmEoNjksIDg4LCAxNTcsIDAuMDcpJyxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgaW1nOiB7XHJcbiAgICB3aWR0aDogWycxMDBweCcsIG51bGwsICc1NXB4J10sXHJcbiAgICBoZWlnaHQ6ICdhdXRvJyxcclxuICAgIGZsZXhTaHJpbms6IDAsXHJcbiAgICBtcjogWzMsIDRdLFxyXG4gIH0sXHJcbiAgd3JhcHBlcjoge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgbXQ6ICctNXB4JyxcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgIGZvbnRTaXplOiAzLFxyXG4gICAgICBjb2xvcjogJ2hlYWRpbmdfc2Vjb25kYXJ5JyxcclxuICAgICAgbGluZUhlaWdodDogMS40LFxyXG4gICAgICBmb250V2VpZ2h0OiA3MDAsXHJcbiAgICAgIG1iOiBbMiwgbnVsbCwgbnVsbCwgbnVsbCwgM10sXHJcbiAgICB9LFxyXG5cclxuICAgIHN1YlRpdGxlOiB7XHJcbiAgICAgIGZvbnRTaXplOiAxLFxyXG4gICAgICBmb250V2VpZ2h0OiA0MDAsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IFsxLjg1LCBudWxsLCAyXSxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCwgQ29udGFpbmVyLCBCb3ggfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCBTZWN0aW9uSGVhZGVyIGZyb20gJ2NvbXBvbmVudHMvc2VjdGlvbi1oZWFkZXInO1xyXG5pbXBvcnQgQWNjb3JkaW9uIGZyb20gJ2NvbXBvbmVudHMvYWNjb3JkaW9uL2FjY29yZGlvbic7XHJcbmNvbnN0IGZhcXMgPSBbXHJcbiAge1xyXG4gICAgdGl0bGU6ICdIb3cgdG8gY29udGFjdCB3aXRoIHJpZGVycyBlbWVyZ2VuY3kgPycsXHJcbiAgICBjb250ZW50czogKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIEdldCB5b3VyIHdlYnNpdGUgYWRzIHRlc3RzIGRlbGl2ZXJlZCBhdCBsZXQgY29sbGVjdCBzYW1wbGUgZnJvbSB0aGVcclxuICAgICAgICB2aWN0b3J5IG9mIHRoZSBtYW5hZ2VtZW50cyB0aGF0IHN1cHBsaWVzIGJlc3QgZGVzaWduIHN5c3RlbSB3aGljaFxyXG4gICAgICAgIGd1aWRlbGluZXMgZXZlciB3aXRoIG11bHRpcGxlIGZlYXR1cmVzLlxyXG4gICAgICA8L2Rpdj5cclxuICAgICksXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ0FwcCBpbnN0YWxsYXRpb24gZmFpbGVkLCBob3cgdG8gdXBkYXRlIHN5c3RlbSBpbmZvcm1hdGlvbj8nLFxyXG4gICAgY29udGVudHM6IChcclxuICAgICAgPGRpdj5cclxuICAgICAgICBSaGlubyBza2luIG1heWJlIHRoaWNrIGJ1dCBpdCBjYW4gYmUgcXVpdGUgc2Vuc2l0aXZlIHRvIHN1bmJ1cm5zIGFuZFxyXG4gICAgICAgIGluc2VjdCBiaXRlcyB3aGljaCBpcyB3aHkgdGhleSBsaWtlIHdhbGxvdyBzbyBtdWNoIOKAkyB3aGVuIHRoZSBtdWQgZHJpZXNcclxuICAgICAgICBpdCBhY3RzIGFzIHByb3RlY3Rpb24gZnJvbSB0aGUgc3VuYnVybnMgYW5kIGluc2VjdHMuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBgV2Vic2l0ZSByZXNwb25zZSB0YWtpbmcgdGltZSwgaG93IHRvIGltcHJvdmU/YCxcclxuICAgIGNvbnRlbnRzOiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgR2V0IHlvdXIgYmxvb2QgdGVzdHMgZGVsaXZlcmVkIGF0IHRoZSBob21lIGNvbGxlY3QgYSBzYW1wbGUgZnJvbVxyXG4gICAgICAgIG1hbmFnZW1lbnQgbmV3cy4gR2V0IHlvdXIgYmxvb2QgdGVzdHMgZGVsaXZlcmVkIGF0IHRoZSBob21lIGNvbGxlY3QgYVxyXG4gICAgICAgIHNhbXBsZSBmcm9tIG1hbmFnZW1lbnQgbmV3cy4gR2V0IHlvdXIgYmxvb2QgdGVzdHMgZGVsaXZlcmVkIGF0IHRoZSBob21lXHJcbiAgICAgICAgY29sbGVjdCBhIHNhbXBsZSBmcm9tIG1hbmFnZW1lbnQgbmV3cy4gR2V0IHlvdXIgYmxvb2QgdGVzdHMgZGVsaXZlcmVkIGF0XHJcbiAgICAgICAgdGhlIGhvbWUuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBgTmV3IHVwZGF0ZSBmaXhlZCBhbGwgYnVnIGFuZCBpc3N1ZXNgLFxyXG4gICAgY29udGVudHM6IChcclxuICAgICAgPGRpdj5cclxuICAgICAgICBJZiB5b3XigJlyZSBsb29raW5nIHRvIGh1bnQgYSB1bmljb3JuLCBidXQgZG9u4oCZdCBrbm93IHdoZXJlIHRvIGJlZ2luLCB0cnlcclxuICAgICAgICBMYWtlIFN1cGVyaW9yIFN0YXRlIFVuaXZlcnNpdHkgaW4gU2F1bHQgU3RlLiBNYXJpZSwgTWljaGlnYW4uIFNpbmNlXHJcbiAgICAgICAgMTk3MSwgdGhlIHVuaXZlcnNpdHkgaGFzIGlzc3VlZCBwZXJtaXRzIHRvIHVuaWNvcm4gcXVlc3RlcnMuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKSxcclxuICB9LFxyXG5dO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGYXEoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIHN4PXt7IHZhcmlhbnQ6ICdzZWN0aW9uLmZhcScgfX0+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPFNlY3Rpb25IZWFkZXJcclxuICAgICAgICAgIHRpdGxlPVwiRnJlcXVlbnRseSBhc2tlZCBxdWVzdGlvblwiXHJcbiAgICAgICAgICBzbG9nYW49XCJHZXQgeW91ciBxdWVzdGlvbiBhbnN3ZXJcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEJveFxyXG4gICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICB3aWR0aDogWycxMDAlJywgbnVsbCwgbnVsbCwgJzY1MHB4JywgJzc0NXB4J10sXHJcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgICAgICAgICBteDogJ2F1dG8nLFxyXG4gICAgICAgICAgICBteTogLTQsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxBY2NvcmRpb24gaXRlbXM9e2ZhcXN9IC8+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBHcmlkIH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgU2VjdGlvbkhlYWRlciBmcm9tICdjb21wb25lbnRzL3NlY3Rpb24taGVhZGVyJztcclxuaW1wb3J0IEZlYXR1cmVDYXJkIGZyb20gJ2NvbXBvbmVudHMvZmVhdHVyZS1jYXJkLmpzJztcclxuaW1wb3J0IFNtYXJ0IGZyb20gJ2Fzc2V0cy9mZWF0dXJlL3ZpZGVvLXR1dG9yaWFscy5wbmcnO1xyXG5pbXBvcnQgV2lubmVyIGZyb20gJ2Fzc2V0cy9mZWF0dXJlL3RlYWNoaW5nLnBuZyc7XHJcbmltcG9ydCBDbG91ZCBmcm9tICdhc3NldHMvZmVhdHVyZS9xdWl6LnBuZyc7XHJcbmltcG9ydCBTZXR0aW5nIGZyb20gJ2Fzc2V0cy9mZWF0dXJlL2Fzc2lnbm1lbnQucG5nJztcclxuaW1wb3J0IERlc2lnbiBmcm9tICdhc3NldHMvZmVhdHVyZS9xdWVzdGlvbi5wbmcnO1xyXG5pbXBvcnQgQ2hhdCBmcm9tICdhc3NldHMvZmVhdHVyZS9idXNpbmVzc21hbi5wbmcnO1xyXG5cclxuY29uc3QgZGF0YSA9IFtcclxuICB7XHJcbiAgICBpZDogMSxcclxuICAgIGltZ1NyYzogU21hcnQsXHJcbiAgICBhbHRUZXh0OiAnUHJhY3RpY2FsIExlYXJuaW5nJyxcclxuICAgIHRpdGxlOiAnUHJhY3RpY2FsIExlYXJuaW5nJyxcclxuICAgIHRleHQ6XHJcbiAgICAgICdHZXQgeW91ciBibG9vZCB0ZXN0cyBkZWxpdmVyZWQgYXQgbGV0IGhvbWUgY29sbGVjdCBzYW1wbGUgZnJvbSB0aGUgdmljdG9yeSBvZiB0aGUgbWFuYWdlbWVudHMuJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAyLFxyXG4gICAgaW1nU3JjOiBXaW5uZXIsXHJcbiAgICBhbHRUZXh0OiAnSW50ZXJhY3Rpb24gV2l0aCBFeHBlcnQnLFxyXG4gICAgdGl0bGU6ICdJbnRlcmFjdGlvbiBXaXRoIEV4cGVydCcsXHJcbiAgICB0ZXh0OlxyXG4gICAgICAnR2V0IHlvdXIgYmxvb2QgdGVzdHMgZGVsaXZlcmVkIGF0IGxldCBob21lIGNvbGxlY3Qgc2FtcGxlIGZyb20gdGhlIHZpY3Rvcnkgb2YgdGhlIG1hbmFnZW1lbnRzLicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMyxcclxuICAgIGltZ1NyYzogQ2xvdWQsXHJcbiAgICBhbHRUZXh0OiAnUXVpenplcycsXHJcbiAgICB0aXRsZTogJ1F1aXp6ZXMnLFxyXG4gICAgdGV4dDpcclxuICAgICAgJ0dldCB5b3VyIGJsb29kIHRlc3RzIGRlbGl2ZXJlZCBhdCBsZXQgaG9tZSBjb2xsZWN0IHNhbXBsZSBmcm9tIHRoZSB2aWN0b3J5IG9mIHRoZSBtYW5hZ2VtZW50cy4nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDQsXHJcbiAgICBpbWdTcmM6IFNldHRpbmcsXHJcbiAgICBhbHRUZXh0OiAnUmVhbC10aW1lIEFzc2lnbm1lbnRzJyxcclxuICAgIHRpdGxlOiAnUmVhbC10aW1lIEFzc2lnbm1lbnRzJyxcclxuICAgIHRleHQ6XHJcbiAgICAgICdHZXQgeW91ciBibG9vZCB0ZXN0cyBkZWxpdmVyZWQgYXQgbGV0IGhvbWUgY29sbGVjdCBzYW1wbGUgZnJvbSB0aGUgdmljdG9yeSBvZiB0aGUgbWFuYWdlbWVudHMuJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA1LFxyXG4gICAgaW1nU3JjOiBEZXNpZ24sXHJcbiAgICBhbHRUZXh0OiAnRG91YnQgQ2hlY2tpbmcnLFxyXG4gICAgdGl0bGU6ICdEb3VidCBDaGVja2luZycsXHJcbiAgICB0ZXh0OlxyXG4gICAgICAnR2V0IHlvdXIgYmxvb2QgdGVzdHMgZGVsaXZlcmVkIGF0IGxldCBob21lIGNvbGxlY3Qgc2FtcGxlIGZyb20gdGhlIHZpY3Rvcnkgb2YgdGhlIG1hbmFnZW1lbnRzLicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNixcclxuICAgIGltZ1NyYzogQ2hhdCxcclxuICAgIGFsdFRleHQ6ICdJbnRlcm5zaGlwcycsXHJcbiAgICB0aXRsZTogJ0ludGVybnNoaXBzJyxcclxuICAgIHRleHQ6XHJcbiAgICAgICdHZXQgeW91ciBibG9vZCB0ZXN0cyBkZWxpdmVyZWQgYXQgbGV0IGhvbWUgY29sbGVjdCBzYW1wbGUgZnJvbSB0aGUgdmljdG9yeSBvZiB0aGUgbWFuYWdlbWVudHMuJyxcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmVhdHVyZSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gc3g9e3sgdmFyaWFudDogJ3NlY3Rpb24uZmVhdHVyZScgfX0+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPFNlY3Rpb25IZWFkZXJcclxuICAgICAgICAgIHNsb2dhbj1cIlF1YWxpdHkgZmVhdHVyZXNcIlxyXG4gICAgICAgICAgdGl0bGU9XCJNZWV0IGV4Y2l0aW5nIGZlYXR1cmUgb2YgYXBwXCJcclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8R3JpZCBzeD17c3R5bGVzLmdyaWR9PlxyXG4gICAgICAgICAge2RhdGEubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgIDxGZWF0dXJlQ2FyZFxyXG4gICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cclxuICAgICAgICAgICAgICBzcmM9e2l0ZW0uaW1nU3JjfVxyXG4gICAgICAgICAgICAgIGFsdD17aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICB0aXRsZT17aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICB0ZXh0PXtpdGVtLnRleHR9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBncmlkOiB7XHJcbiAgICBwdDogWzAsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDNdLFxyXG4gICAgZ3JpZEdhcDogW1xyXG4gICAgICAnMzdweCAwJyxcclxuICAgICAgbnVsbCxcclxuICAgICAgJzQ1cHggMzBweCcsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgICc1MHB4IDMwcHgnLFxyXG4gICAgICBudWxsLFxyXG4gICAgICBudWxsLFxyXG4gICAgICAnOTBweCA3MHB4JyxcclxuICAgIF0sXHJcbiAgICB3aWR0aDogWycxMDAlJywgJzgwJScsICcxMDAlJ10sXHJcbiAgICBteDogJ2F1dG8nLFxyXG4gICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogW1xyXG4gICAgICAncmVwZWF0KDEsMWZyKScsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgICdyZXBlYXQoMiwxZnIpJyxcclxuICAgICAgbnVsbCxcclxuICAgICAgJ3JlcGVhdCgzLDFmciknLFxyXG4gICAgXSxcclxuICB9LFxyXG59O1xyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4IH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIEdyaWQgfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCBTZWN0aW9uSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvc2VjdGlvbi1oZWFkZXInO1xyXG5pbXBvcnQgRmVhdHVyZUNhcmRDb2x1bW4gZnJvbSAnY29tcG9uZW50cy9mZWF0dXJlLWNhcmQtY29sdW1uLmpzJztcclxuaW1wb3J0IFZlY3RvciBmcm9tICdhc3NldHMva2V5LWZlYXR1cmUvcHJhY3RpY2UgKDEpLnBuZyc7XHJcbmltcG9ydCBFZGl0aW5nIGZyb20gJ2Fzc2V0cy9rZXktZmVhdHVyZS9oZWxwICgxKS5wbmcnO1xyXG5pbXBvcnQgU3BlZWQgZnJvbSAnYXNzZXRzL2tleS1mZWF0dXJlL3Byb21vdGlvbiAoMikucG5nJztcclxuXHJcbmNvbnN0IGRhdGEgPSBbXHJcbiAge1xyXG4gICAgaWQ6IDEsXHJcbiAgICBpbWdTcmM6IFZlY3RvcixcclxuICAgIGFsdFRleHQ6ICdQcmFjdGljYWwgTGVhcm5pbmcnLFxyXG4gICAgdGl0bGU6ICdQcmFjdGljYWwgTGVhcm5pbmcnLFxyXG4gICAgdGV4dDpcclxuICAgICAgJ1RoZSB0aGVvcnkgaXMgYWxsIGFib3V0IHJlYWRpbmcgYSBnaXZlbiBzZXQgb2YgbWF0ZXJpYWxzIGFuZCB1bmRlcnN0YW5kaW5nIHdoYXQgdGhlIG1hdGVyaWFscyB3YW50IHRvIGNvbnZleS4gV2hlcmVhcyB0byBnYWluIHByYWN0aWNhbCBrbm93bGVkZ2UsIHlvdSBuZWVkIHRvIGV4cGxvcmUgdmFyaW91cyBvcHRpb25zIGFuZCBzZWUgd2hhdCB3b3JrcyB0aGUgYmVzdC4nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDIsXHJcbiAgICBpbWdTcmM6IEVkaXRpbmcsXHJcbiAgICBhbHRUZXh0OiAnIDI0ICo3IE1lbnRvciBTdXBwb3J0JyxcclxuICAgIHRpdGxlOiAnMjQgKjcgTWVudG9yIFN1cHBvcnQnLFxyXG4gICAgdGV4dDpcclxuICAgICAgJ3RoZSBQYXRoIHRvIHN1Y2Nlc3MgY2FuIGJlIHRvdWdoIGJ1dCB0aGUgcmlnaHQgZ3VpZGFuY2UgYW5kIGFuIGV4cGVydCBoZWxwaW5nIGhhbmQgY2FuIG1ha2UgdGhpcyBwYXRoICBlbmpveWFibGUgYW5kIG1ha2UgeW91ciBlZmZvcnRzIGNvdW50JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAzLFxyXG4gICAgaW1nU3JjOiBTcGVlZCxcclxuICAgIGFsdFRleHQ6ICdJbnRlcm5zaGlwcycsXHJcbiAgICB0aXRsZTogJ0ludGVybnNoaXBzJyxcclxuICAgIHRleHQ6XHJcbiAgICAgICdJbmR1c3RyeSBsZWFkaW5nIGN1cnJpY3VsdW0gZGVzaWduZWQgYnkgZXhwZXJ0IGRldmVsb3BlcnMgdHVybmVkIGVkdWNhdG9ycyB3aG8gaGF2ZSBpbnZlc3RlZCB0aW1lIHRvIGNyZWF0ZSBxdWFsaXR5IGNvbnRlbnQgaW5mdXNlZCB3aXRoIHVuaXF1ZSB0ZWFjaGluZyBtZXRob2RvbG9neS4nLFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBLZXlGZWF0dXJlKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBzeD17eyB2YXJpYW50OiAnc2VjdGlvbi5rZXlGZWF0dXJlJyB9fSBpZD1cImZlYXR1cmVcIj5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8U2VjdGlvbkhlYWRlclxyXG4gICAgICAgICAgc2xvZ2FuPVwiUXVhbGl0eSBmZWF0dXJlc1wiXHJcbiAgICAgICAgICB0aXRsZT1cIkVYQ0xVU0lWRSBGRUFUVVJFU1wiXHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPEdyaWQgc3g9e3N0eWxlcy5ncmlkfT5cclxuICAgICAgICAgIHtkYXRhLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICA8RmVhdHVyZUNhcmRDb2x1bW5cclxuICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgICAgc3JjPXtpdGVtLmltZ1NyY31cclxuICAgICAgICAgICAgICBhbHQ9e2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgdGl0bGU9e2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgdGV4dD17aXRlbS50ZXh0fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgZ3JpZDoge1xyXG4gICAgcHg6IFswLCBudWxsLCBudWxsLCAnNDBweCcsIG51bGwsICc4MHB4J10sXHJcbiAgICBwdDogWzAsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDNdLFxyXG4gICAgZ3JpZEdhcDogWyczNXB4IDAnLCBudWxsLCAnNDBweCAwJ10sXHJcbiAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBbXHJcbiAgICAgICdyZXBlYXQoMSwxZnIpJyxcclxuICAgICAgbnVsbCxcclxuICAgICAgJ3JlcGVhdCgyLDFmciknLFxyXG4gICAgICBudWxsLFxyXG4gICAgICAncmVwZWF0KDMsMWZyKScsXHJcbiAgICBdLFxyXG4gICAgd2lkdGg6IFsnMTAwJScsICc4MCUnLCAnMTAwJSddLFxyXG4gICAgbXg6ICdhdXRvJyxcclxuICAgICcmID4gZGl2Jzoge1xyXG4gICAgICBweDogWzAsICcxNXB4JywgbnVsbCwgJzI1cHgnLCBudWxsLCAnMzBweCcsICc0MHB4JywgJzYwcHgnXSxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCwgQ29udGFpbmVyLCBGbGV4IH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgUHJpY2VDYXJkIGZyb20gJ2NvbXBvbmVudHMvcHJpY2UtY2FyZCc7XHJcbmltcG9ydCBTZWN0aW9uSGVhZGVyIGZyb20gJ2NvbXBvbmVudHMvc2VjdGlvbi1oZWFkZXInO1xyXG5pbXBvcnQgeyBJb0lvc0NoZWNrbWFya0NpcmNsZSwgSW9Jb3NDbG9zZUNpcmNsZSB9IGZyb20gJ3JlYWN0LWljb25zL2lvJztcclxuaW1wb3J0IFBhdHRlcm5CRyBmcm9tICdhc3NldHMvcGF0dGVybkJHLnBuZyc7XHJcblxyXG5jb25zdCBwYWNrYWdlcyA9IFtcclxuICB7XHJcbiAgICBuYW1lOiAnRnJlZSBQbGFuJyxcclxuICAgIGRlc2NyaXB0aW9uOiAnRm9yIFNtYWxsIHRlYW1zIG9yIG9mZmljZScsXHJcbiAgICBidXR0b25UZXh0OiAnU2lnbnVwIE5vdycsXHJcbiAgICBwb2ludHM6IFtcclxuICAgICAge1xyXG4gICAgICAgIGljb246IDxJb0lvc0NoZWNrbWFya0NpcmNsZSAvPixcclxuICAgICAgICB0ZXh0OiAnVWx0aW1hdGUgYWNjZXNzIHRvIGFsbCBjb3Vyc2UsIGV4ZXJjaXNlcyBhbmQgYXNzZXNzbWVudHMnLFxyXG4gICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWNvbjogPElvSW9zQ2hlY2ttYXJrQ2lyY2xlIC8+LFxyXG4gICAgICAgIHRleHQ6XHJcbiAgICAgICAgICAnRnJlZSBhY2Nlc3MgZm9yIGFsbCBraW5kIG9mIGV4ZXJjaXNlIGNvcnJlY3Rpb25zIHdpdGggZG93bmxvYWRzLicsXHJcbiAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpY29uOiA8SW9Jb3NDaGVja21hcmtDaXJjbGUgLz4sXHJcbiAgICAgICAgdGV4dDogJ1RvdGFsIGFzc2Vzc21lbnQgY29ycmVjdGlvbnMgd2l0aCBmcmVlIGRvd25sb2FkIGFjY2VzcyBzeXN0ZW0nLFxyXG4gICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWNvbjogPElvSW9zQ2xvc2VDaXJjbGUgLz4sXHJcbiAgICAgICAgdGV4dDogJ1VubGltaXRlZCBkb3dubG9hZCBvZiBjb3Vyc2VzIG9uIHRoZSBtb2JpbGUgYXBwIGNvbnRlbnRzJyxcclxuICAgICAgICBpc0F2YWlsYWJsZTogZmFsc2UsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpY29uOiA8SW9Jb3NDbG9zZUNpcmNsZSAvPixcclxuICAgICAgICB0ZXh0OiAnRG93bmxvYWQgYW5kIHByaW50IGNvdXJzZXMgYW5kIGV4ZXJjaXNlcyBpbiBQREYnLFxyXG4gICAgICAgIGlzQXZhaWxhYmxlOiBmYWxzZSxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBoZWFkZXI6ICdSZWNvbW1lbmRlZCcsXHJcbiAgICBuYW1lOiAnUHJlbWl1bScsXHJcbiAgICBkZXNjcmlwdGlvbjogJ0ZvciBzdGFydHVwIGVudGVycHJpc2UnLFxyXG4gICAgcHJpY2VXaXRoVW5pdDogJyQyOS45OS8nLFxyXG4gICAgYnV0dG9uVGV4dDogJ1NpZ251cCBOb3cnLFxyXG4gICAgcG9pbnRzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBpY29uOiA8SW9Jb3NDaGVja21hcmtDaXJjbGUgLz4sXHJcbiAgICAgICAgdGV4dDogJ1VsdGltYXRlIGFjY2VzcyB0byBhbGwgY291cnNlLCBleGVyY2lzZXMgYW5kIGFzc2Vzc21lbnRzJyxcclxuICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGljb246IDxJb0lvc0NoZWNrbWFya0NpcmNsZSAvPixcclxuICAgICAgICB0ZXh0OlxyXG4gICAgICAgICAgJ0ZyZWUgYWNjZXNzIGZvciBhbGwga2luZCBvZiBleGVyY2lzZSBjb3JyZWN0aW9ucyB3aXRoIGRvd25sb2Fkcy4nLFxyXG4gICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWNvbjogPElvSW9zQ2hlY2ttYXJrQ2lyY2xlIC8+LFxyXG4gICAgICAgIHRleHQ6ICdUb3RhbCBhc3Nlc3NtZW50IGNvcnJlY3Rpb25zIHdpdGggZnJlZSBkb3dubG9hZCBhY2Nlc3Mgc3lzdGVtJyxcclxuICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGljb246IDxJb0lvc0NoZWNrbWFya0NpcmNsZSAvPixcclxuICAgICAgICB0ZXh0OiAnVW5saW1pdGVkIGRvd25sb2FkIG9mIGNvdXJzZXMgb24gdGhlIG1vYmlsZSBhcHAgY29udGVudHMnLFxyXG4gICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWNvbjogPElvSW9zQ2hlY2ttYXJrQ2lyY2xlIC8+LFxyXG4gICAgICAgIHRleHQ6ICdEb3dubG9hZCBhbmQgcHJpbnQgY291cnNlcyBhbmQgZXhlcmNpc2VzIGluIFBERicsXHJcbiAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0ZyZWUgUGxhbicsXHJcbiAgICBkZXNjcmlwdGlvbjogJ0ZvciBTbWFsbCB0ZWFtcyBvciBvZmZpY2UnLFxyXG4gICAgYnV0dG9uVGV4dDogJ1NpZ251cCBOb3cnLFxyXG4gICAgcG9pbnRzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBpY29uOiA8SW9Jb3NDaGVja21hcmtDaXJjbGUgLz4sXHJcbiAgICAgICAgdGV4dDogJ1VsdGltYXRlIGFjY2VzcyB0byBhbGwgY291cnNlLCBleGVyY2lzZXMgYW5kIGFzc2Vzc21lbnRzJyxcclxuICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGljb246IDxJb0lvc0NoZWNrbWFya0NpcmNsZSAvPixcclxuICAgICAgICB0ZXh0OlxyXG4gICAgICAgICAgJ0ZyZWUgYWNjZXNzIGZvciBhbGwga2luZCBvZiBleGVyY2lzZSBjb3JyZWN0aW9ucyB3aXRoIGRvd25sb2Fkcy4nLFxyXG4gICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWNvbjogPElvSW9zQ2hlY2ttYXJrQ2lyY2xlIC8+LFxyXG4gICAgICAgIHRleHQ6ICdUb3RhbCBhc3Nlc3NtZW50IGNvcnJlY3Rpb25zIHdpdGggZnJlZSBkb3dubG9hZCBhY2Nlc3Mgc3lzdGVtJyxcclxuICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGljb246IDxJb0lvc0Nsb3NlQ2lyY2xlIC8+LFxyXG4gICAgICAgIHRleHQ6ICdVbmxpbWl0ZWQgZG93bmxvYWQgb2YgY291cnNlcyBvbiB0aGUgbW9iaWxlIGFwcCBjb250ZW50cycsXHJcbiAgICAgICAgaXNBdmFpbGFibGU6IGZhbHNlLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWNvbjogPElvSW9zQ2xvc2VDaXJjbGUgLz4sXHJcbiAgICAgICAgdGV4dDogJ0Rvd25sb2FkIGFuZCBwcmludCBjb3Vyc2VzIGFuZCBleGVyY2lzZXMgaW4gUERGJyxcclxuICAgICAgICBpc0F2YWlsYWJsZTogZmFsc2UsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbl07XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhY2thZ2UoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGlkPVwicHJpY2luZ1wiIHN4PXtzdHlsZXMucHJpY2luZ30+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPFNlY3Rpb25IZWFkZXJcclxuICAgICAgICAgIHRpdGxlPVwiTGV04oCZcyBzZWUgaG93IGl0IHdvcmtzXCJcclxuICAgICAgICAgIHNsb2dhbj1cIldoYXRzIHRoZSBmdW5jdGlvblwiXHJcbiAgICAgICAgICBpc1doaXRlPXt0cnVlfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEZsZXhcclxuICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICAgICAgZmxleFdyYXA6IFsnd3JhcCcsIG51bGwsIG51bGwsICdub3dyYXAnXSxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3BhY2thZ2VzLm1hcCgocGFja2FnZURhdGEpID0+IChcclxuICAgICAgICAgICAgPFByaWNlQ2FyZCBkYXRhPXtwYWNrYWdlRGF0YX0ga2V5PXtwYWNrYWdlRGF0YS5uYW1lfSAvPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9GbGV4PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgcHJpY2luZzoge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAncHJpbWFyeScsXHJcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtQYXR0ZXJuQkd9KWAsXHJcbiAgICBiYWNrZ3JvdW5kUmVwZWF0OiBgbm8tcmVwZWF0YCxcclxuICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlciBjZW50ZXInLFxyXG4gICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXHJcbiAgICBweTogWzgsIG51bGwsIDksIG51bGwsIG51bGwsIDEwXSxcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgJyY6OmJlZm9yZSc6IHtcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcclxuICAgICAgdG9wOiAwLFxyXG4gICAgICByaWdodDogMCxcclxuICAgICAgYmFja2dyb3VuZDpcclxuICAgICAgICAnbGluZWFyLWdyYWRpZW50KC00NWRlZywgcmdiYSg0Miw3MiwxMjUsIDAuMykgMjUlLCB0cmFuc3BhcmVudCAyNSUsIHRyYW5zcGFyZW50IDUwJSwgcmdiYSg0Miw3MiwxMjUsIDAuMykgNTAlLCByZ2JhKDQyLDcyLDEyNSwgMC4zKSA3NSUsIHRyYW5zcGFyZW50IDc1JSwgdHJhbnNwYXJlbnQpJyxcclxuICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgYmFja2dyb3VuZFNpemU6ICczNTBweCAzNTBweCcsXHJcbiAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICBvcGFjaXR5OiAwLjMsXHJcbiAgICAgIHpJbmRleDogMCxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCwgQ29udGFpbmVyLCBCb3ggfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCBUZXh0RmVhdHVyZSBmcm9tICdjb21wb25lbnRzL3RleHQtZmVhdHVyZSc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICdjb21wb25lbnRzL2ltYWdlJztcclxuXHJcbmltcG9ydCBQYXJ0bmVyIGZyb20gJ2Fzc2V0cy9wYXJ0bmVyLnBuZyc7XHJcblxyXG5jb25zdCBkYXRhID0ge1xyXG4gIHN1YlRpdGxlOiAnQ29yZSBmZWF0dXJlcycsXHJcbiAgdGl0bGU6ICdTbWFydCBKYWNrcG90cyB0aGF0IHlvdSBtYXkgbG92ZSB0aGlzIGFueXRpbWUgJiBhbnl3aGVyZScsXHJcbiAgZGVzY3JpcHRpb246XHJcbiAgICAnR2V0IHlvdXIgdGVzdHMgZGVsaXZlcmVkIGF0IGxldCBob21lIGNvbGxlY3Qgc2FtcGxlIGZyb20gdGhlIHZpY3Rvcnkgb2YgdGhlIG1hbmFnZW1lbnRzIHRoYXQgc3VwcGxpZXMgYmVzdCBkZXNpZ24gc3lzdGVtIGd1aWRlbGluZXMgZXZlci4gR2V0IHlvdXIgdGVzdHMgZGVsaXZlcmVkIGF0IGxldCBob21lIGNvbGxlY3Qgc2FtcGxlLicsXHJcbiAgYnRuTmFtZTogJ0dldCBTdGFydGVkJyxcclxuICBidG5VUkw6ICcjJyxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhcnRuZXJTZWN0aW9uKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBzeD17eyB2YXJpYW50OiAnc2VjdGlvbi5wYXJ0bmVyJyB9fT5cclxuICAgICAgPENvbnRhaW5lciBzeD17c3R5bGVzLmNvbnRhaW5lckJveH0+XHJcbiAgICAgICAgPEJveCBzeD17c3R5bGVzLmNvbnRlbnRCb3h9PlxyXG4gICAgICAgICAgPFRleHRGZWF0dXJlXHJcbiAgICAgICAgICAgIHN1YlRpdGxlPXtkYXRhLnN1YlRpdGxlfVxyXG4gICAgICAgICAgICB0aXRsZT17ZGF0YS50aXRsZX1cclxuICAgICAgICAgICAgZGVzY3JpcHRpb249e2RhdGEuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgIGJ0bk5hbWU9e2RhdGEuYnRuTmFtZX1cclxuICAgICAgICAgICAgYnRuVVJMPXtkYXRhLmJ0blVSTH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPEJveCBzeD17eyBweDogWzAsIG51bGwsICc0MHB4JywgMF0gfX0+XHJcbiAgICAgICAgICA8SW1hZ2Ugc3JjPXtQYXJ0bmVyfSBhbHQ9XCJQYXJ0bmVyXCIgLz5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGNvbnRhaW5lckJveDoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gICAgZmxleFdyYXA6IFsnd3JhcCcsIG51bGwsIG51bGwsICdub3dyYXAnXSxcclxuICB9LFxyXG4gIGNvbnRlbnRCb3g6IHtcclxuICAgIGZsZXhTaHJpbms6IDAsXHJcbiAgICBweDogWzAsIG51bGwsICczMHB4JywgMF0sXHJcbiAgICB0ZXh0QWxpZ246IFsnY2VudGVyJywgbnVsbCwgbnVsbCwgJ2xlZnQnXSxcclxuICAgIHdpZHRoOiBbJzEwMCUnLCA0NTAsIDU1MCwgJzM1MHB4JywgJzQxMHB4JywgJzQ4NXB4J10sXHJcbiAgICBteDogJ2F1dG8nLFxyXG4gICAgcGI6IFsnMzBweCcsIG51bGwsIG51bGwsIDBdLFxyXG4gICAgJy5kZXNjcmlwdGlvbic6IHtcclxuICAgICAgcHI6IFswLCBudWxsLCBudWxsLCBudWxsLCA0XSxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBCb3ggfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCBUZXh0RmVhdHVyZSBmcm9tICdjb21wb25lbnRzL3RleHQtZmVhdHVyZSc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICdjb21wb25lbnRzL2ltYWdlJztcclxuXHJcbmltcG9ydCBQYXltZW50VGh1bWIgZnJvbSAnYXNzZXRzL3BheW1lbnRUaHVtYi5wbmcnO1xyXG5pbXBvcnQgUGF5bWVudFBhdHRlcm4gZnJvbSAnYXNzZXRzL3BheW1lbnQtcGF0dGVybi5wbmcnO1xyXG5cclxuY29uc3QgZGF0YSA9IHtcclxuICBzdWJUaXRsZTogJ1BBWU1FTlQgU0VDVVJJVFknLFxyXG4gIHRpdGxlOiAnU2VjdXJlIFBheW1lbnQgVHJhbnNhY3Rpb24gU3lzdGVtIHdpdGggIzEgUmFua2luZycsXHJcbiAgZGVzY3JpcHRpb246XHJcbiAgICAnR2V0IHlvdXIgdGVzdHMgZGVsaXZlcmVkIGF0IGxldCBob21lIGNvbGxlY3Qgc2FtcGxlIGZyb20gdGhlIHZpY3Rvcnkgb2YgdGhlIG1hbmFnZW1lbnRzIHRoYXQgc3VwcGxpZXMgYmVzdCBkZXNpZ24gc3lzdGVtIGd1aWRlbGluZXMgZXZlci4gR2V0IHlvdXIgdGVzdHMgZGVsaXZlcmVkIGF0IGxldCBob21lIGNvbGxlY3Qgc2FtcGxlLicsXHJcbiAgYnRuTmFtZTogJ0xlYXJuIE1vcmUnLFxyXG4gIGJ0blVSTDogJyMnLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VjdXJlUGF5bWVudCgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gc3g9e3sgdmFyaWFudDogJ3NlY3Rpb24uc2VjdXJlUGF5bWVudCcgfX0+XHJcbiAgICAgIDxCb3ggc3g9e3N0eWxlcy5iZ092ZXJsYXl9IC8+XHJcbiAgICAgIDxDb250YWluZXIgc3g9e3N0eWxlcy5jb250YWluZXJCb3h9PlxyXG4gICAgICAgIDxCb3ggc3g9e3N0eWxlcy50aHVtYm5haWx9PlxyXG4gICAgICAgICAgPEltYWdlIHNyYz17UGF5bWVudFRodW1ifSBhbHQ9e2RhdGEudGl0bGV9IC8+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPEJveCBzeD17c3R5bGVzLmNvbnRlbnRCb3h9PlxyXG4gICAgICAgICAgPFRleHRGZWF0dXJlXHJcbiAgICAgICAgICAgIHN1YlRpdGxlPXtkYXRhLnN1YlRpdGxlfVxyXG4gICAgICAgICAgICB0aXRsZT17ZGF0YS50aXRsZX1cclxuICAgICAgICAgICAgZGVzY3JpcHRpb249e2RhdGEuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgIGJ0bk5hbWU9e2RhdGEuYnRuTmFtZX1cclxuICAgICAgICAgICAgYnRuVVJMPXtkYXRhLmJ0blVSTH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBiZ092ZXJsYXk6IHtcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgdG9wOiAwLFxyXG4gICAgcmlnaHQ6IDAsXHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgIHpJbmRleDogLTEsXHJcbiAgICB3aWR0aDogW1xyXG4gICAgICAnMTAwJScsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgICdjYWxjKDUwJSArIDQwMHB4KScsXHJcbiAgICAgICdjYWxjKDUwJSArIDQ4MHB4KScsXHJcbiAgICAgICdjYWxjKDUwJSArIDU3MHB4KScsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgICdjYWxjKDUwJSArIDYyNXB4KScsXHJcbiAgICBdLFxyXG4gICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7UGF5bWVudFBhdHRlcm59KWAsXHJcbiAgICBiYWNrZ3JvdW5kUmVwZWF0OiBgbm8tcmVwZWF0YCxcclxuICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ3RvcCBsZWZ0JyxcclxuICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxyXG4gIH0sXHJcbiAgY29udGFpbmVyQm94OiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCcsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gICAgZmxleFdyYXA6IFsnd3JhcCcsIG51bGwsIG51bGwsICdub3dyYXAnXSxcclxuICB9LFxyXG4gIHRodW1ibmFpbDoge1xyXG4gICAgbWI6IC0yLFxyXG4gICAgbWw6IFstNCwgJy00MHB4JywgbnVsbCwgbnVsbCwgMF0sXHJcbiAgICBvcmRlcjogWzIsIG51bGwsIG51bGwsIDBdLFxyXG4gICAgcHI6IFs2LCBudWxsLCA3LCAwXSxcclxuICB9LFxyXG4gIGNvbnRlbnRCb3g6IHtcclxuICAgIHdpZHRoOiBbJzEwMCUnLCA0MjAsIDQ4MCwgMzgwLCA1MDAsIDU3MF0sXHJcbiAgICBteDogJ2F1dG8nLFxyXG4gICAgZmxleFNocmluazogMCxcclxuICAgIHRleHRBbGlnbjogWydjZW50ZXInLCBudWxsLCBudWxsLCAnbGVmdCddLFxyXG4gICAgcHQ6IFswLCBudWxsLCBudWxsLCA0LCAnNTBweCcsIG51bGwsIDQsICc4MHB4J10sXHJcbiAgICBwbDogWzAsIG51bGwsIG51bGwsIDQwLCAnOTBweCddLFxyXG4gICAgcGI6IFs3LCBudWxsLCBudWxsLCA5XSxcclxuICAgIHByOiBbMCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgNl0sXHJcbiAgfSxcclxufTtcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCwgQ29udGFpbmVyLCBIZWFkaW5nLCBUZXh0LCBCb3gsIEltYWdlIH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgU2VjdGlvbkhlYWRlciBmcm9tICdjb21wb25lbnRzL3NlY3Rpb24taGVhZGVyJztcclxuaW1wb3J0IFJhdGluZyBmcm9tICdjb21wb25lbnRzL3JhdGluZyc7XHJcbmltcG9ydCBCdXR0b25Hcm91cCBmcm9tICdjb21wb25lbnRzL2J1dHRvbi1ncm91cCc7XHJcbmltcG9ydCBDYXJvdXNlbCBmcm9tICdyZWFjdC1tdWx0aS1jYXJvdXNlbCc7XHJcblxyXG5pbXBvcnQgQXZhdGFyMSBmcm9tICdhc3NldHMvdGVzdGltb25pYWwvYXZhdGFyMS5wbmcnO1xyXG5pbXBvcnQgQXZhdGFyMiBmcm9tICdhc3NldHMvdGVzdGltb25pYWwvYXZhdGFyMi5wbmcnO1xyXG5pbXBvcnQgQXZhdGFyMyBmcm9tICdhc3NldHMvdGVzdGltb25pYWwvYXZhdGFyMy5wbmcnO1xyXG5pbXBvcnQgQXZhdGFyNCBmcm9tICdhc3NldHMvdGVzdGltb25pYWwvYXZhdGFyNC5wbmcnO1xyXG5cclxuY29uc3QgZGF0YSA9IFtcclxuICB7XHJcbiAgICBpZDogMSxcclxuICAgIHRpdGxlOiAnTW9kZXJuIGxvb2sgJiB0cmVuZGluZyBkZXNpZ24nLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgICdcIkkgIGhhdmUgd29ya2VkIHdpdGggRGF2ZeKAmXMgQnJvdGhlcnMgVGVjaG5vbG9neSAsIEFzIGEgQW5kcm9pZCBEZXZlbG9wZXIgLiBBa2FzaCBEZXYgU2lyIEFsd2F5cyAgaGVscGVkICBtZSAgdG8gd2hlbmV2ZXIgIEkgd2FzIE5lZWRlZCAgdG8gTGVhcm4gbmV3IFRlY2hub2xvZ3kgRm9yICBUaGUgUHJvamVjdOKAmXMuIE15IFdvcmsgRXhwZXJpZW5jZSB3YXMgRXh0cmVtZWx5IEdvb2Qgd2l0aCBBa2FzaCBEYXZlIFNpci4gQWthc2ggIFNpciBBbHdheXMgQ2FyZSB0byBFbXBsb3llZXMgYW5kIGFzIHdlbGwgYXMgQ2xpZW50cy4gVGhleSBBbHdheXMgdHJ5IHRvIEZ1bGwgZmlsbCBhbGwgUmVxdWlyZW1lbnRzIG9mIHRoZSBDbGllbnRzLiBBa2FzaCBEYXZlIERvaW5nIEdyZWF0IFdvcmsuIOKAnScsXHJcbiAgICBhdmF0YXI6IEF2YXRhcjEsXHJcbiAgICBuYW1lOiAnS2Fsa2EgUHJhc2hhZCcsXHJcbiAgICBkZXNpZ25hdGlvbjogJ0BLYWxrYVByYXNoYWQnLFxyXG4gICAgcmV2aWV3OiA0LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDIsXHJcbiAgICB0aXRsZTogJ0Rlc2lnbiBRdWFsaXR5ICYgcGVyZm9ybWFuY2UnLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgICdEYXdheSBpcyBncmVhdCBwbGF0Zm9ybSB0byBsZWFybiB0ZWNobm9sb2dpZXMsIHBlb3BsZXMgd2hvIHdhbnQgdG8gbGVhcm4gcHJvZ3JhbW1pbmcgZnJvbSBzY3JhdGNoIHRoaXMgaXMgYSBhd2Vzb21lIHBsYXRmb3JtIHRoZW0gLHRoZXkgaW5zdXJlIHRoYXQgZXZlcnkgcGVyc29uIGNhbiBzdHVkeSBjb21mb3J0YWJseSBhY2NvcmRpbmcgdG8gdGhlaXIgcGFjZS4gSGlnaGx5IHJlY29tbWVuZGVkIGZvciBwZW9wbGUgd2hvIHdhbnQgdG8gc3RhcnQgdGhlaXIgY2FyZWVyIGluIElUJyxcclxuICAgIGF2YXRhcjogQXZhdGFyMixcclxuICAgIG5hbWU6ICdSaXNoaSBDaG91YmV5JyxcclxuICAgIGRlc2lnbmF0aW9uOiAnQFJpc2hpQ2hvdWJleScsXHJcbiAgICByZXZpZXc6IDUsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMyxcclxuICAgIHRpdGxlOiAnTGF5b3V0IGFuZCBvcmdhbml6ZWQgbGF5ZXJzJyxcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAnRGF3YXkgaXMgYSBiZXN0IHBsYXRmb3JtIGZvciBsZWFybmluZywgSW0gZG9pbmcgbXkgaW50ZXJuc2hpcCBmcm9tIGhlcmUgLCBNZW50b3JzIGFyZSByZWFkeSB0byBndWlkZVxcdGVjaCAgYW55IHRpbWUgd2hlbmV2ZXIgSSBzdHVjayBvbiBwZXJ0aWN1bGFyIHByb2JsZW0gLiBJbSBnZXR0aW5nIHRvIGxlYXJuICBuZXcgdGVjaG5vbG9naWVzIGluIGEgcGVyZmVjdCBtYW5uZXIgd2l0aCBwZXJmZWN0IHR1dG9ycyAsIEFsb25nIHdpdGggdGVhY2hpbmcgdGhleSBhbHNvIG1vdGl2YXRlcyB1cywgIHRvIGNyZWF0ZSBhIGN1cmlvc2l0eSB0byBsZWFybiAgbW9yZS4nLFxyXG4gICAgYXZhdGFyOiBBdmF0YXIzLFxyXG4gICAgbmFtZTogJ0d5YXRyaSBUaXdhcmknLFxyXG4gICAgZGVzaWduYXRpb246ICdAR3lhdHJpVGl3YXJpJyxcclxuICAgIHJldmlldzogNSxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA0LFxyXG4gICAgdGl0bGU6ICdNb2Rlcm4gbG9vayAmIHRyZW5kaW5nIGRlc2lnbicsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgJyBsZWFybmVkIGEgbG90IGluIERhd2F5LiAgd2l0aCBkb2luZyBzZWxmIHN0dWR5LCBJIGFsc28gZ2V0IHRoZSBndWlkYW5jZSBvZiB0ZWFjaGVycyB3aGljaCBpcyB2ZXJ5IGhlbHBmdWwuJyxcclxuICAgIGF2YXRhcjogQXZhdGFyNCxcclxuICAgIG5hbWU6ICdhamVldGEgU2FodScsXHJcbiAgICBkZXNpZ25hdGlvbjogJ0BhamVldGFTYWh1JyxcclxuICAgIHJldmlldzogNCxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA1LFxyXG4gICAgdGl0bGU6ICdNb2Rlcm4gbG9vayAmIHRyZW5kaW5nIGRlc2lnbicsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgJyBJIGFtIHdvcmtpbmcgYXMgYSBpbnRlcm4gaW4gZGF3YXkgdGVjaG5vbG9neSBmb3JtIGxhc3QgMyBtb250aHMgYW5kIGhlcmUgaXMgc29tZSBwb2ludHMgYWJvdXQgbXkgaW50ZXJuc2hpcCBleHBlcmllbmNlLlRoZXkgbW9yZSBmb2N1cyBvbiBzZWxmIGxlYXJuaW5nIHJhdGhlciB0aGVuIGp1c3QgdGVhY2hpbmcgb3IgZXhwbGFpbmluZyB0b3BpY3MuVGhleSBoZWxwIHRvIHVwZ3JhZGUgcHJvZ3JhbW1pbmcgbG9naWNzICBUaGV5IGltcHJvdmVkIG15IERlc2lnbmluZyBza2lsbHMuIFRyYWluZXIgYW5kIGZlbGxvdyBpbnRlcm5zIGFyZSBhbHNvIHZlcnkgaGVscGZ1bCBhbmQga2luZC4nXHJcbiAgICwgYXZhdGFyOiBBdmF0YXI0LFxyXG4gICAgbmFtZTogJ0Fha2Fuc2hhIFNhaHUnLFxyXG4gICAgZGVzaWduYXRpb246ICdAQWFrYW5zaGFTYWh1JyxcclxuICAgIHJldmlldzogNSxcclxuICB9LFxyXG5dO1xyXG5cclxuY29uc3QgcmVzcG9uc2l2ZSA9IHtcclxuICBkZXNrdG9wOiB7XHJcbiAgICBicmVha3BvaW50OiB7IG1heDogMzAwMCwgbWluOiAxNjE5IH0sXHJcbiAgICBpdGVtczogNCxcclxuICAgIHNsaWRlc1RvU2xpZGU6IDQsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IHRvIDEuXHJcbiAgfSxcclxuICBsYXB0b3A6IHtcclxuICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiAxNjE5LCBtaW46IDEwMjQgfSxcclxuICAgIGl0ZW1zOiAzLFxyXG4gICAgc2xpZGVzVG9TbGlkZTogMywgLy8gb3B0aW9uYWwsIGRlZmF1bHQgdG8gMS5cclxuICB9LFxyXG4gIHRhYmxldDoge1xyXG4gICAgYnJlYWtwb2ludDogeyBtYXg6IDEwMjQsIG1pbjogNjQwIH0sXHJcbiAgICBpdGVtczogMixcclxuICAgIHNsaWRlc1RvU2xpZGU6IDIsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IHRvIDEuXHJcbiAgfSxcclxuICBtb2JpbGU6IHtcclxuICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiA2MzksIG1pbjogMCB9LFxyXG4gICAgaXRlbXM6IDEsXHJcbiAgICBzbGlkZXNUb1NsaWRlOiAxLCAvLyBvcHRpb25hbCwgZGVmYXVsdCB0byAxLlxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZXN0aW1vbmlhbENhcmQoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGlkPVwidGVzdGltb25pYWxcIiBzeD17eyB2YXJpYW50OiAnc2VjdGlvbi50ZXN0aW1vbmlhbCcgfX0+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPFNlY3Rpb25IZWFkZXIgc2xvZ2FuPVwiVGVzdGltb25pYWxcIiB0aXRsZT1cIldIQVQgT1VSIFNUVURFTlRTIFNBWSBBQk9VVCBVU1wiIC8+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8Qm94IHN4PXtzdHlsZXMuY2Fyb3VzZWxXcmFwcGVyfT5cclxuICAgICAgICA8Q2Fyb3VzZWxcclxuICAgICAgICBhdXRvUGxheT17dHJ1ZX1cclxuICAgICAgICAgIGFkZGl0aW9uYWxUcmFuc2Zyb209ezB9XHJcbiAgICAgICAgICBhcnJvd3M9e2ZhbHNlfVxyXG4gICAgICAgICAgYXV0b1BsYXlTcGVlZD17MzAwMH1cclxuICAgICAgICAgIGNlbnRlck1vZGU9e2ZhbHNlfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiXCJcclxuICAgICAgICAgIGNvbnRhaW5lckNsYXNzPVwiY2Fyb3VzZWwtY29udGFpbmVyXCJcclxuICAgICAgICAgIGN1c3RvbUJ1dHRvbkdyb3VwPXs8QnV0dG9uR3JvdXAgLz59XHJcbiAgICAgICAgICBkb3RMaXN0Q2xhc3M9XCJcIlxyXG4gICAgICAgICAgZHJhZ2dhYmxlXHJcbiAgICAgICAgICBmb2N1c09uU2VsZWN0PXtmYWxzZX1cclxuICAgICAgICAgIGluZmluaXRlPXt0cnVlfVxyXG4gICAgICAgICAgaXRlbUNsYXNzPVwiXCJcclxuICAgICAgICAgIGtleUJvYXJkQ29udHJvbFxyXG4gICAgICAgICAgbWluaW11bVRvdWNoRHJhZz17ODB9XHJcbiAgICAgICAgICByZW5kZXJCdXR0b25Hcm91cE91dHNpZGVcclxuICAgICAgICAgIHJlbmRlckRvdHNPdXRzaWRlPXtmYWxzZX1cclxuICAgICAgICAgIHJlc3BvbnNpdmU9e3Jlc3BvbnNpdmV9XHJcbiAgICAgICAgICBzaG93RG90cz17ZmFsc2V9XHJcbiAgICAgICAgICBzbGlkZXJDbGFzcz1cIlwiXHJcbiAgICAgICAgICBzbGlkZXNUb1NsaWRlPXsxfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtkYXRhLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMucmV2aWV3Q2FyZH0ga2V5PXtgdGVzdGltb25pYWwtLWtleSR7aXRlbS5pZH1gfT5cclxuICAgICAgICAgICAgICA8UmF0aW5nIHJhdGluZz17aXRlbS5yZXZpZXd9IC8+XHJcbiAgICAgICAgICAgICAgPEhlYWRpbmcgYXM9XCJoM1wiIHN4PXtzdHlsZXMudGl0bGV9PlxyXG4gICAgICAgICAgICAgICAge2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICAgICAgICAgIDxUZXh0IHN4PXtzdHlsZXMuZGVzY3JpcHRpb259PntpdGVtLmRlc2NyaXB0aW9ufTwvVGV4dD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2l0ZW0uYXZhdGFyfSBhbHQ9XCJDbGllbnQgSW1hZ2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJldmlld2VyLWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgPEhlYWRpbmcgYXM9XCJoNFwiIHN4PXtzdHlsZXMuaGVhZGluZ30+XHJcbiAgICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICAgICAgICAgICAgICA8VGV4dCBzeD17c3R5bGVzLmRlc2lnbmF0aW9ufT57aXRlbS5kZXNpZ25hdGlvbn08L1RleHQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L0Nhcm91c2VsPlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgY2Fyb3VzZWxXcmFwcGVyOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgYWxpZ25JdGVtczogJ2ZsZXgtZW5kJyxcclxuICAgIG10OiAnLTM1cHgnLFxyXG4gICAgcHg6ICcxNXB4JyxcclxuICAgICcuY2Fyb3VzZWwtY29udGFpbmVyJzoge1xyXG4gICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICBtYXhXaWR0aDogW1xyXG4gICAgICAgICcxMDAlJyxcclxuICAgICAgICBudWxsLFxyXG4gICAgICAgIG51bGwsXHJcbiAgICAgICAgJzc1MHB4JyxcclxuICAgICAgICAnMTAwMHB4JyxcclxuICAgICAgICAnMTE4MHB4JyxcclxuICAgICAgICBudWxsLFxyXG4gICAgICAgICdjYWxjKDUwJSArIDg2NXB4KScsXHJcbiAgICAgIF0sXHJcbiAgICAgIG1yOiBbJ2F1dG8nLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAnLTIyMHB4J10sXHJcbiAgICAgIG1sOiAnYXV0bycsXHJcbiAgICAgICcucmVhY3QtbXVsdGktY2Fyb3VzZWwtaXRlbSc6IHtcclxuICAgICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuMjVzJyxcclxuICAgICAgfSxcclxuICAgICAgJy5yZWFjdC1tdWx0aS1jYXJvdXNlbC1pdGVtLS1hY3RpdmU6bnRoLW9mLXR5cGUoNG4pJzoge1xyXG4gICAgICAgIG9wYWNpdHk6ICcwLjUnLFxyXG4gICAgICAgICdAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjIwcHgpJzoge1xyXG4gICAgICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHJldmlld0NhcmQ6IHtcclxuICAgIGJveFNoYWRvdzogJzBweCAwcHggMXB4IHJnYmEoMzgsIDc4LCAxMTgsIDAuMzUpJyxcclxuICAgIHRyYW5zaXRpb246ICdhbGwgMC4zcycsXHJcbiAgICBib3JkZXJSYWRpdXM6ICc2cHgnLFxyXG4gICAgcDogW1xyXG4gICAgICAnMzBweCAyMHB4IDM1cHgnLFxyXG4gICAgICAnMzBweCAyNXB4IDM1cHgnLFxyXG4gICAgICAnMzBweCAyMHB4IDM1cHgnLFxyXG4gICAgICAnMzVweCAzMHB4IDQwcHggNDBweCcsXHJcbiAgICAgICczMHB4IDMwcHggMzVweCcsXHJcbiAgICAgICczNXB4IDMwcHggNDBweCA0MHB4JyxcclxuICAgIF0sXHJcbiAgICBiZzogJ3doaXRlJyxcclxuICAgIHRleHRBbGlnbjogJ2xlZnQnLFxyXG4gICAgbTogW1xyXG4gICAgICAnMjhweCA1cHggMzBweCA1cHgnLFxyXG4gICAgICAnMjhweCAyMHB4IDMwcHggMjBweCcsXHJcbiAgICAgICcyOHB4IDE1cHggMzBweCAxNXB4JyxcclxuICAgICAgJzI4cHggMTVweCAzMHB4IDE1cHgnLFxyXG4gICAgICAnMzBweCAyMHB4IDQwcHgnLFxyXG4gICAgXSxcclxuICAgICcmOmhvdmVyJzoge1xyXG4gICAgICBib3hTaGFkb3c6ICcwcHggNnB4IDQ3cHggcmdiYSgzOCwgNzgsIDExOCwgMC4xKScsXHJcbiAgICB9LFxyXG4gICAgJy5yYXRpbmcnOiB7XHJcbiAgICAgIG1iOiBbMSwgbnVsbCwgbnVsbCwgMl0sXHJcbiAgICAgIHVsOiB7XHJcbiAgICAgICAgcGw6IDAsXHJcbiAgICAgICAgbGlzdFN0eWxlOiAnbm9uZScsXHJcbiAgICAgICAgbWI6IDAsXHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICB9LFxyXG4gICAgICBzdmc6IHtcclxuICAgICAgICBtYXJnaW5SaWdodDogJzJweCcsXHJcbiAgICAgICAgJyY6bGFzdC1vZi10eXBlJzoge1xyXG4gICAgICAgICAgbWFyZ2luUmlnaHQ6IDAsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgJy5zdGFyJzoge1xyXG4gICAgICAgIGNvbG9yOiAneWVsbG93JyxcclxuICAgICAgICBtcjogJzFweCcsXHJcbiAgICAgIH0sXHJcbiAgICAgICcuc3Rhci1vJzoge1xyXG4gICAgICAgIGNvbG9yOiAnI2RkZCcsXHJcbiAgICAgICAgbXI6ICcxcHgnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgICcuY2FyZC1mb290ZXInOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgIG1hcmdpblRvcDogWzUsIG51bGwsIG51bGwsICczM3B4J10sXHJcbiAgICAgICcuaW1hZ2UnOiB7XHJcbiAgICAgICAgZmxleFNocmluazogMCxcclxuICAgICAgICBtcjogWzMsIG51bGwsIG51bGwsIDRdLFxyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBpbWc6IHtcclxuICAgICAgICAgIHdpZHRoOiAnNTVweCcsXHJcbiAgICAgICAgICBoZWlnaHQ6ICc1NXB4JyxcclxuICAgICAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXHJcbiAgICAgICAgICBvYmplY3RGaXQ6ICdjb3ZlcicsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICB0aXRsZToge1xyXG4gICAgZm9udFNpemU6IFsxLCAyXSxcclxuICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICAgIG1iOiBbMywgbnVsbCwgbnVsbCwgJzIycHgnXSxcclxuICAgIGNvbG9yOiAndGV4dCcsXHJcbiAgICBsaW5lSGVpZ2h0OiAxLjYsXHJcbiAgfSxcclxuICBkZXNjcmlwdGlvbjoge1xyXG4gICAgZm9udFNpemU6IFsxLCBudWxsLCBudWxsLCAyXSxcclxuICAgIGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxyXG4gICAgY29sb3I6ICd0ZXh0JyxcclxuICAgIGxpbmVIZWlnaHQ6IFsxLjg1LCBudWxsLCAyXSxcclxuICB9LFxyXG4gIGhlYWRpbmc6IHtcclxuICAgIGZvbnRTaXplOiBbMSwgbnVsbCwgbnVsbCwgMl0sXHJcbiAgICBmb250V2VpZ2h0OiA3MDAsXHJcbiAgICBtYjogJzNweCcsXHJcbiAgICBjb2xvcjogJ3RleHQnLFxyXG4gICAgbGluZUhlaWdodDogMS4zLFxyXG4gIH0sXHJcbiAgZGVzaWduYXRpb246IHtcclxuICAgIGNvbG9yOiAnIzI1QTBGRicsXHJcbiAgICBmb250V2VpZ2h0OiAnNTAwJyxcclxuICAgIGZvbnRTaXplOiAxLFxyXG4gICAgbGluZUhlaWdodDogMS40LFxyXG4gIH0sXHJcbn07XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3ggfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgR3JpZCwgQm94LCBIZWFkaW5nLCBUZXh0IH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgU2VjdGlvbkhlYWRlciBmcm9tICdjb21wb25lbnRzL3NlY3Rpb24taGVhZGVyJztcclxuXHJcbmltcG9ydCBQYXR0ZXJuQkcgZnJvbSAnYXNzZXRzL3BhdHRlcm5CRy5wbmcnO1xyXG5pbXBvcnQgQXJyb3dPZGQgZnJvbSAnYXNzZXRzL2Fycm93T2RkLnBuZyc7XHJcbmltcG9ydCBBcnJvd0V2ZW4gZnJvbSAnYXNzZXRzL2Fycm93RXZlbi5wbmcnO1xyXG5cclxuY29uc3QgZGF0YSA9IFtcclxuICB7XHJcbiAgICBpZDogMSxcclxuICAgIHRpdGxlOiAnU2V0IGRpc2J1cnNlbWVudCBJbnN0cnVjdGlvbnMnLFxyXG4gICAgdGV4dDpcclxuICAgICAgJ0dldCB5b3VyIGJsb29kIHRlc3RzIGRlbGl2ZXJlZCBhdCBob21lIGNvbGxlY3QgYSBzYW1wbGUgZnJvbSB0aGUgeW91ciBibG9vZCB0ZXN0cy4nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDIsXHJcbiAgICB0aXRsZTogJ0Fzc2VtYmx5IHJldHJpZXZlcyBmdW5kcyBmcm9tIHlvdXIgYWNjb3VudCcsXHJcbiAgICB0ZXh0OlxyXG4gICAgICAnR2V0IHlvdXIgYmxvb2QgdGVzdHMgZGVsaXZlcmVkIGF0IGhvbWUgY29sbGVjdCBhIHNhbXBsZSBmcm9tIHRoZSB5b3VyIGJsb29kIHRlc3RzLicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMyxcclxuICAgIHRpdGxlOiAnQXNzZW1ibHkgaW5pdGlhdGVzIGRpc2J1cnNlbWVudCcsXHJcbiAgICB0ZXh0OlxyXG4gICAgICAnR2V0IHlvdXIgYmxvb2QgdGVzdHMgZGVsaXZlcmVkIGF0IGhvbWUgY29sbGVjdCBhIHNhbXBsZSBmcm9tIHRoZSB5b3VyIGJsb29kIHRlc3RzLicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNCxcclxuICAgIHRpdGxlOiAnQ3VzdG9tZXIgcmVjZWl2ZXMgZnVuZHMgcGF5bWVudCcsXHJcbiAgICB0ZXh0OlxyXG4gICAgICAnR2V0IHlvdXIgYmxvb2QgdGVzdHMgZGVsaXZlcmVkIGF0IGhvbWUgY29sbGVjdCBhIHNhbXBsZSBmcm9tIHRoZSB5b3VyIGJsb29kIHRlc3RzLicsXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdvcmtGbG93KCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBzeD17c3R5bGVzLndvcmtmbG93fT5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8U2VjdGlvbkhlYWRlclxyXG4gICAgICAgICAgc2xvZ2FuPVwiV2hhdHMgdGhlIGZ1bmN0aW9uXCJcclxuICAgICAgICAgIHRpdGxlPVwiTGV04oCZcyBzZWUgaG93IGl0IHdvcmtzXCJcclxuICAgICAgICAgIGlzV2hpdGU9e3RydWV9XHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPEdyaWQgc3g9e3N0eWxlcy5ncmlkfT5cclxuICAgICAgICAgIHtkYXRhLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMuY2FyZH0ga2V5PXtpdGVtLmlkfT5cclxuICAgICAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMuaWNvbkJveH0+e2AwJHtpdGVtLmlkfWB9PC9Cb3g+XHJcbiAgICAgICAgICAgICAgPEJveCBzeD17c3R5bGVzLndyYXBwZXJ9PlxyXG4gICAgICAgICAgICAgICAgPEhlYWRpbmcgc3g9e3N0eWxlcy53cmFwcGVyLnRpdGxlfT57aXRlbS50aXRsZX08L0hlYWRpbmc+XHJcbiAgICAgICAgICAgICAgICA8VGV4dCBzeD17c3R5bGVzLndyYXBwZXIuc3ViVGl0bGV9PntpdGVtLnRleHR9PC9UZXh0PlxyXG4gICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIHdvcmtmbG93OiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdwcmltYXJ5JyxcclxuICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke1BhdHRlcm5CR30pYCxcclxuICAgIGJhY2tncm91bmRSZXBlYXQ6IGBuby1yZXBlYXRgLFxyXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyIGNlbnRlcicsXHJcbiAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgcHk6IFs4LCBudWxsLCA5LCBudWxsLCBudWxsLCAxMF0sXHJcbiAgICAnJjo6YmVmb3JlJzoge1xyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgY29udGVudDogJ1wiXCInLFxyXG4gICAgICB0b3A6IDAsXHJcbiAgICAgIHJpZ2h0OiAwLFxyXG4gICAgICBiYWNrZ3JvdW5kOlxyXG4gICAgICAgICdsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCByZ2JhKDQyLDcyLDEyNSwgMC4zKSAyNSUsIHRyYW5zcGFyZW50IDI1JSwgdHJhbnNwYXJlbnQgNTAlLCByZ2JhKDQyLDcyLDEyNSwgMC4zKSA1MCUsIHJnYmEoNDIsNzIsMTI1LCAwLjMpIDc1JSwgdHJhbnNwYXJlbnQgNzUlLCB0cmFuc3BhcmVudCknLFxyXG4gICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICBiYWNrZ3JvdW5kU2l6ZTogJzM1MHB4IDM1MHB4JyxcclxuICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgIG9wYWNpdHk6IDAuMyxcclxuICAgICAgekluZGV4OiAwLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGdyaWQ6IHtcclxuICAgIG1iOiAtMSxcclxuICAgIHB0OiAwLFxyXG4gICAgZ3JpZEdhcDogW1xyXG4gICAgICAnMzVweCAwJyxcclxuICAgICAgbnVsbCxcclxuICAgICAgJzQ1cHggNTBweCcsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgICc1MHB4IDI1cHgnLFxyXG4gICAgICBudWxsLFxyXG4gICAgICBudWxsLFxyXG4gICAgICAnNTBweCA2NXB4JyxcclxuICAgIF0sXHJcbiAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBbXHJcbiAgICAgICdyZXBlYXQoMSwxZnIpJyxcclxuICAgICAgbnVsbCxcclxuICAgICAgJ3JlcGVhdCgyLDFmciknLFxyXG4gICAgICBudWxsLFxyXG4gICAgICAncmVwZWF0KDQsMWZyKScsXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAgY2FyZDoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIHRleHRBbGlnbjogWydjZW50ZXInLCBudWxsLCAnbGVmdCddLFxyXG4gICAgd2lkdGg6IFsnMTAwJScsICc4MCUnLCAnMTAwJSddLFxyXG4gICAgbXg6ICdhdXRvJyxcclxuICAgICcmOjpiZWZvcmUnOiB7XHJcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICBjb250ZW50OiAnXCJcIicsXHJcbiAgICAgIHRvcDogMCxcclxuICAgICAgbGVmdDogWzAsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDc1LCBudWxsLCAxMDBdLFxyXG4gICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBgbm8tcmVwZWF0YCxcclxuICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyIGNlbnRlcicsXHJcbiAgICAgIHdpZHRoOiAyMTUsXHJcbiAgICAgIGhlaWdodDogNjAsXHJcbiAgICAgIG9wYWNpdHk6IDAuMyxcclxuICAgICAgJ0BtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTIyMHB4KSc6IHtcclxuICAgICAgICBkaXNwbGF5OiAnbm9uZScsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgJyY6bnRoLW9mLXR5cGUoMm4tMSk6OmJlZm9yZSc6IHtcclxuICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7QXJyb3dPZGR9KWAsXHJcbiAgICB9LFxyXG4gICAgJyY6bnRoLW9mLXR5cGUoMm4pOjpiZWZvcmUnOiB7XHJcbiAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke0Fycm93RXZlbn0pYCxcclxuICAgICAgdG9wOiAxNyxcclxuICAgIH0sXHJcbiAgICAnJjpsYXN0LWNoaWxkOjpiZWZvcmUnOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdub25lJyxcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgaWNvbkJveDoge1xyXG4gICAgd2lkdGg6IFsnNTBweCcsIG51bGwsICc2MHB4JywgbnVsbCwgbnVsbCwgJzcwcHgnXSxcclxuICAgIGhlaWdodDogWyc1MHB4JywgbnVsbCwgJzYwcHgnLCBudWxsLCBudWxsLCAnNzBweCddLFxyXG4gICAgZmxleFNocmluazogMCxcclxuICAgIGJvcmRlclJhZGl1czogWzE1LCBudWxsLCAyMywgbnVsbCwgbnVsbCwgMzBdLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBtYjogWzUsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDZdLFxyXG4gICAgbXg6IFsnYXV0bycsIG51bGwsIDBdLFxyXG4gICAgZm9udFNpemU6IFs2LCBudWxsLCA3LCBudWxsLCBudWxsLCAnMzBweCddLFxyXG4gICAgZm9udFdlaWdodDogNzAwLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgY29sb3I6ICcjMjM0NTgyJyxcclxuICB9LFxyXG4gIHdyYXBwZXI6IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIG10OiAnLTVweCcsXHJcbiAgICB0aXRsZToge1xyXG4gICAgICBmb250U2l6ZTogWzMsIG51bGwsIDQsIG51bGwsIG51bGwsIDVdLFxyXG4gICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgbGluZUhlaWdodDogWzEuNCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgMS41NV0sXHJcbiAgICAgIHByOiBbMCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgMl0sXHJcbiAgICAgIG1iOiBbMiwgM10sXHJcbiAgICB9LFxyXG5cclxuICAgIHN1YlRpdGxlOiB7XHJcbiAgICAgIGZvbnRTaXplOiAxLFxyXG4gICAgICBmb250V2VpZ2h0OiA0MDAsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IFsxLjg1LCBudWxsLCBudWxsLCAxLjksIDJdLFxyXG4gICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgb3BhY2l0eTogMC42NSxcclxuICAgICAgcHI6IFswLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCA1XSxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gIC8vIGV4YW1wbGUgY29sb3JzIHdpdGggZGFyayBtb2RlXHJcbiAgY29sb3JzOiB7XHJcbiAgICB0ZXh0OiAnIzM0M0Q0OCcsIC8vIGJvZHkgY29sb3IgYW5kIHByaW1hcnkgY29sb3JcclxuICAgIHRleHRfc2Vjb25kYXJ5OiAnIzAyMDczRScsIC8vIHNlY29uZGFyeSBib2R5IGNvbG9yXHJcbiAgICBoZWFkaW5nOiAnIzI0NDg4NicsIC8vIHByaW1hcnkgaGVhZGluZyBjb2xvclxyXG4gICAgaGVhZGluZ19zZWNvbmRhcnk6ICcjMEYyMTM3JywgLy8gaGVhZGluZyBjb2xvclxyXG4gICAgYmFja2dyb3VuZDogJyNGRkZGRkYnLCAvLyBib2R5IGJhY2tncm91bmQgY29sb3JcclxuICAgIGJhY2tncm91bmRfc2Vjb25kYXJ5OiAnI0Y5RkJGRCcsIC8vIHNlY29uZGFyeSBiYWNrZ3JvdW5kIGNvbG9yXHJcbiAgICBib3JkZXJfY29sb3I6ICcjRTVFQ0Y0JywgLy8gYm9yZGVyIGNvbG9yXHJcbiAgICBwcmltYXJ5OiAnIzFGM0U3NicsIC8vIHByaW1hcnkgYnV0dG9uIGFuZCBsaW5rIGNvbG9yXHJcbiAgICBzZWNvbmRhcnk6ICcjMjVDQjlFJywgLy8gc2Vjb25kYXJ5IGNvbG9yIC0gY2FuIGJlIHVzZWQgZm9yIGhvdmVyIHN0YXRlc1xyXG4gICAgbXV0ZWQ6ICcjN0I4MTg4JywgLy8gbXV0ZWQgY29sb3JcclxuICAgIGFjY2VudDogJyM2MDknLCAvLyBhIGNvbnRyYXN0IGNvbG9yIGZvciBlbXBoYXNpemluZyBVSVxyXG4gICAgeWVsbG93OiAnI0Y2QzQxNicsXHJcblxyXG4gICAgLy8gaGlnaGxpZ2h0XHRhIGJhY2tncm91bmQgY29sb3IgZm9yIGhpZ2hsaWdodGluZyB0ZXh0XHJcbiAgICBtb2Rlczoge1xyXG4gICAgICBkYXJrOiB7XHJcbiAgICAgICAgdGV4dDogJyNmZmYnLFxyXG4gICAgICAgIGJhY2tncm91bmQ6ICcjMDAwJyxcclxuICAgICAgICBwcmltYXJ5OiAnIzBjZicsXHJcbiAgICAgICAgc2Vjb25kYXJ5OiAnIzA5YycsXHJcbiAgICAgICAgbXV0ZWQ6ICcjMTExJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBicmVha3BvaW50czogW1xyXG4gICAgJzQ4MHB4JyxcclxuICAgICc2NDBweCcsXHJcbiAgICAnNzY4cHgnLFxyXG4gICAgJzEwMjRweCcsXHJcbiAgICAnMTIyMHB4JyxcclxuICAgICcxMzY2cHgnLFxyXG4gICAgJzE2MjBweCcsXHJcbiAgXSxcclxuICBmb250czoge1xyXG4gICAgYm9keTogXCInRE0gU2FucycsIHNhbnMtc2VyaWZcIixcclxuICAgIGhlYWRpbmc6IFwiJ0RNIFNhbnMnLCBzYW5zLXNlcmlmXCIsXHJcbiAgfSxcclxuICBmb250U2l6ZXM6IFsxMiwgMTUsIDE2LCAxOCwgMjAsIDIyLCAyNCwgMjgsIDMyLCAzNiwgNDIsIDQ4LCA1MiwgNjRdLFxyXG4gIGZvbnRXZWlnaHRzOiB7XHJcbiAgICBib2R5OiAnbm9ybWFsJyxcclxuICAgIGhlYWRpbmc6IDUwMCxcclxuICAgIGJvbGQ6IDcwMCxcclxuICB9LFxyXG4gIGxpbmVIZWlnaHRzOiB7XHJcbiAgICBib2R5OiAxLjgsXHJcbiAgICBoZWFkaW5nOiAxLjUsXHJcbiAgfSxcclxuICBsZXR0ZXJTcGFjaW5nczoge1xyXG4gICAgYm9keTogJ25vcm1hbCcsXHJcbiAgICBjYXBzOiAnMC4yZW0nLFxyXG4gICAgaGVhZGluZzogJy0wLjVweCcsXHJcbiAgfSxcclxuICBzcGFjZTogWzAsIDUsIDEwLCAxNSwgMjAsIDI1LCAzMCwgNTAsIDgwLCAxMDAsIDEyMCwgMTUwXSxcclxuICAvLyB2YXJpYW50cyBjYW4gdXNlIGN1c3RvbSwgdXNlci1kZWZpbmVkIG5hbWVzXHJcbiAgbGF5b3V0OiB7XHJcbiAgICBjb250YWluZXI6IHtcclxuICAgICAgbWF4V2lkdGg6IFtcclxuICAgICAgICAnMTAwJScsXHJcbiAgICAgICAgbnVsbCxcclxuICAgICAgICBudWxsLFxyXG4gICAgICAgICc3ODBweCcsXHJcbiAgICAgICAgJzEwMjBweCcsXHJcbiAgICAgICAgJzEyMDBweCcsXHJcbiAgICAgICAgbnVsbCxcclxuICAgICAgICAnMTMxMHB4JyxcclxuICAgICAgXSxcclxuICAgICAgcHg6IFs0LCA2XSxcclxuICAgIH0sXHJcbiAgICBoZWFkZXI6IHtcclxuICAgICAgY29sb3I6ICcjMDIwNzNFJyxcclxuICAgICAgZm9udFdlaWdodDogJ25vcm1hbCcsXHJcbiAgICAgIHB5OiAzLFxyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIH0sXHJcbiAgICB0b29sYmFyOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXHJcbiAgICB9LFxyXG4gICAgbWFpbjoge30sXHJcbiAgfSxcclxuICBzZWN0aW9uOiB7XHJcbiAgICBrZXlGZWF0dXJlOiB7XHJcbiAgICAgIHB5OiBbOCwgbnVsbCwgOSwgbnVsbCwgbnVsbCwgMTBdLFxyXG4gICAgfSxcclxuICAgIGZlYXR1cmU6IHtcclxuICAgICAgcHk6IFs4LCBudWxsLCA5LCBudWxsLCBudWxsLCAxMF0sXHJcbiAgICB9LFxyXG4gICAgcGFydG5lcjoge1xyXG4gICAgICBwdDogWzIsIG51bGwsIG51bGwsIDVdLFxyXG4gICAgICBwYjogWzgsIG51bGwsIDksIG51bGwsIG51bGwsIDEwXSxcclxuICAgIH0sXHJcbiAgICB0ZXN0aW1vbmlhbDoge1xyXG4gICAgICBweTogWzgsIG51bGwsIDksIG51bGwsIG51bGwsIDEwXSxcclxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxyXG4gICAgfSxcclxuICAgIHNlY3VyZVBheW1lbnQ6IHtcclxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxyXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgcHQ6IDksXHJcbiAgICB9LFxyXG4gICAgZmFxOiB7XHJcbiAgICAgIHB5OiBbOCwgbnVsbCwgOSwgbnVsbCwgbnVsbCwgMTBdLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHNlY3Rpb25IZWFkZXI6IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgbXQ6IC0xLFxyXG4gICAgbWFyZ2luQm90dG9tOiBbJzUwcHgnLCBudWxsLCAnNjBweCcsIG51bGwsICc2NXB4JywgJzc1cHgnXSxcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgIGZvbnRTaXplOiBbJzI0cHgnLCBudWxsLCAnMjhweCcsIG51bGwsIG51bGwsICczMnB4JywgbnVsbCwgJzM2cHgnXSxcclxuICAgICAgY29sb3I6ICdoZWFkaW5nX3NlY29uZGFyeScsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IFsxLjMsIG51bGwsIG51bGwsIDEuMl0sXHJcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICc3MDAnLFxyXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAnLS41cHgnLFxyXG4gICAgfSxcclxuXHJcbiAgICBzdWJUaXRsZToge1xyXG4gICAgICBmb250U2l6ZTogWzAsIG51bGwsICcxNHB4J10sXHJcbiAgICAgIGNvbG9yOiAnaGVhZGluZycsXHJcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgIGxldHRlclNwYWNpbmc6IFsnMS41cHgnLCBudWxsLCAnMnB4J10sXHJcbiAgICAgIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxyXG4gICAgICBmb250V2VpZ2h0OiAnNzAwJyxcclxuICAgICAgbWI6ICc4cHgnLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAxLjUsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgdGV4dDoge1xyXG4gICAgaGVhZGluZzoge1xyXG4gICAgICBmb250RmFtaWx5OiAnaGVhZGluZycsXHJcbiAgICAgIGxpbmVIZWlnaHQ6ICdoZWFkaW5nJyxcclxuICAgICAgZm9udFdlaWdodDogJ2hlYWRpbmcnLFxyXG4gICAgICBmb250U2l6ZTogNCxcclxuICAgICAgbGV0dGVyU3BhY2luZzogJ2hlYWRpbmcnLFxyXG4gICAgICBjb2xvcjogJ2hlYWRpbmcnLFxyXG4gICAgfSxcclxuICAgIGhlcm9QcmltYXJ5OiB7XHJcbiAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICBmb250U2l6ZTogW1xyXG4gICAgICAgICc0MHB4JyxcclxuICAgICAgICAnNTJweCcsXHJcbiAgICAgICAgJzYwcHgnLFxyXG4gICAgICAgICc0OHB4JyxcclxuICAgICAgICAnNTJweCcsXHJcbiAgICAgICAgJzYwcHgnLFxyXG4gICAgICAgICc2NnB4JyxcclxuICAgICAgICAnNzhweCcsXHJcbiAgICAgIF0sXHJcbiAgICAgIGxpbmVIZWlnaHQ6IDEuMixcclxuICAgICAgZm9udFdlaWdodDogNzAwLFxyXG4gICAgICBtYjogWzUsIG51bGwsIG51bGwsIG51bGwsICczMHB4J10sXHJcbiAgICB9LFxyXG4gICAgaGVyb1NlY29uZGFyeToge1xyXG4gICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgZm9udFNpemU6IFsyLCAzLCA0LCAnMTdweCcsIG51bGwsIDMsICcxOXB4JywgNF0sXHJcbiAgICAgIGxpbmVIZWlnaHQ6IFsyLCBudWxsLCBudWxsLCBudWxsLCAyLjJdLFxyXG4gICAgICBmb250V2VpZ2h0OiAnYm9keScsXHJcbiAgICAgIHByOiBbMCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgJzEwMHB4JywgbnVsbCwgJzEyNXB4J10sXHJcbiAgICAgIG1iOiBbJzM1cHgnLCBudWxsLCBudWxsLCBudWxsLCAnNDBweCcsIG51bGwsIG51bGwsIDddLFxyXG4gICAgfSxcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgIC8vIGV4dGVuZHMgdGhlIHRleHQuaGVhZGluZyBzdHlsZXNcclxuICAgICAgdmFyaWFudDogJ3RleHQuaGVhZGluZycsXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICAgICAgZm9udFNpemU6IDE4LFxyXG4gICAgICBsaW5lSGVpZ2h0OiAnMzBweCcsXHJcbiAgICAgIGNvbG9yOiAnIzBGMjEzNycsXHJcbiAgICB9LFxyXG4gICAgbGVhZDoge1xyXG4gICAgICBmb250U2l6ZTogNDAsXHJcbiAgICAgIGZvbnRGYW1pbHk6ICdETSBTYW5zJyxcclxuICAgICAgZm9udFdlaWdodDogJzUwMCcsXHJcbiAgICAgIGxpbmVIZWlnaHQ6ICc2MHB4JyxcclxuICAgICAgbGV0dGVyU3BhY2luZzogJy0xLjVweCcsXHJcbiAgICAgIGNvbG9yOiAnIzBGMjEzNycsXHJcbiAgICB9LFxyXG4gICAgbXV0ZWQ6IHtcclxuICAgICAgbGluZUhlaWdodDogJzI2cHgnLFxyXG4gICAgICBjb2xvcjogJ211dGVkJyxcclxuICAgIH0sXHJcbiAgICBzZWNvbmRhcnk6IHtcclxuICAgICAgZm9udFdlaWdodDogNTAwLFxyXG4gICAgICBjb2xvcjogJyMwMEE5OUQnLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAnNDBweCcsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbGlua3M6IHtcclxuICAgIGRlZmF1bHQ6IHtcclxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICB9LFxyXG4gICAgYm9sZDoge1xyXG4gICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgICB9LFxyXG4gICAgbmF2OiB7XHJcbiAgICAgIGRpc3BsYXk6IFsnbm9uZScsIG51bGwsICdpbmxpbmUtYmxvY2snXSxcclxuICAgICAgcHg6IDI1LFxyXG4gICAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcclxuICAgIH0sXHJcbiAgICBmb290ZXI6IHtcclxuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgICAgcHg6IDAsXHJcbiAgICAgIGNvbG9yOiAnaW5oZXJpdCcsXHJcbiAgICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXHJcbiAgICB9LFxyXG4gICAgbG9nbzoge1xyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgaW1hZ2VzOiB7XHJcbiAgICBhdmF0YXI6IHtcclxuICAgICAgd2lkdGg6IDQ4LFxyXG4gICAgICBoZWlnaHQ6IDQ4LFxyXG4gICAgICBib3JkZXJSYWRpdXM6IDk5OTk5LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIC8vIHZhcmlhbnRzIGZvciBidXR0b25zXHJcbiAgYnV0dG9uczoge1xyXG4gICAgbWVudToge1xyXG4gICAgICBkaXNwbGF5OiBbbnVsbCwgbnVsbCwgJ25vbmUnXSxcclxuICAgIH0sIC8vIGRlZmF1bHQgdmFyaWFudCBmb3IgTWVudUJ1dHRvblxyXG4gICAgLy8geW91IGNhbiByZWZlcmVuY2Ugb3RoZXIgdmFsdWVzIGRlZmluZWQgaW4gdGhlIHRoZW1lXHJcbiAgICBkZWZhdWx0QnRuOiB7XHJcbiAgICAgIGJvcmRlclJhZGl1czogJzQ1cHgnLFxyXG4gICAgICBmb250U2l6ZTogWycxNHB4JywgMSwgbnVsbCwgbnVsbCwgMl0sXHJcbiAgICAgIGxldHRlclNwYWNpbmdzOiBbJy0wLjVweCcsIG51bGwsIG51bGwsIG51bGwsICctMC4xNXB4J10sXHJcbiAgICAgIHBhZGRpbmc6IFsnMTFweCAyMHB4IDEwcHgnLCBudWxsLCBudWxsLCBudWxsLCAnMTNweCAzMHB4J10sXHJcbiAgICAgIGZvbnRGYW1pbHk6ICdib2R5JyxcclxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IDEuMixcclxuICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjI1cycsXHJcbiAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcclxuICAgICAgJyY6Zm9jdXMnOiB7XHJcbiAgICAgICAgb3V0bGluZTogMCxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBwcmltYXJ5OiB7XHJcbiAgICAgIHZhcmlhbnQ6ICdidXR0b25zLmRlZmF1bHRCdG4nLFxyXG4gICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgYmc6ICdwcmltYXJ5JyxcclxuICAgICAgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgYm94U2hhZG93OiAncmdiYSgzMSwgNjIsIDExOCwgMC41NykgMHB4IDlweCAyMHB4IC01cHgnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHdoaXRlQnV0dG9uOiB7XHJcbiAgICAgIHZhcmlhbnQ6ICdidXR0b25zLmRlZmF1bHRCdG4nLFxyXG4gICAgICBjb2xvcjogJ2hlYWRpbmdfc2Vjb25kYXJ5JyxcclxuICAgICAgYmc6ICd3aGl0ZScsXHJcbiAgICAgICcmOmhvdmVyJzoge1xyXG4gICAgICAgIGJveFNoYWRvdzogJ3JnYmEoMCwgMCwgMCwgMC41KSAwcHggMTJweCAyNHB4IC0xMHB4JyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBzZWNvbmRhcnk6IHtcclxuICAgICAgdmFyaWFudDogJ2J1dHRvbnMuZGVmYXVsdEJ0bicsXHJcbiAgICAgIGJvcmRlcjogJzEuNXB4IHNvbGlkIHdoaXRlJyxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgYmc6ICd3aGl0ZScsXHJcbiAgICAgICAgY29sb3I6ICdoZWFkaW5nX3NlY29uZGFyeScsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgdGV4dEJ1dHRvbjoge1xyXG4gICAgICB2YXJpYW50OiAnYnV0dG9ucy5kZWZhdWx0QnRuJyxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgc3ZnOiB7XHJcbiAgICAgICAgZm9udFNpemU6IFs0LCA2XSxcclxuICAgICAgICBtcjogMixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBjYXJkczoge1xyXG4gICAgcHJpbWFyeToge1xyXG4gICAgICBwYWRkaW5nOiAyLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IDQsXHJcbiAgICB9LFxyXG4gICAgb2ZmZXI6IHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgZmxleDogWycxIDEgY2FsYyg1MCUgLSAxNnB4KScsICcxIDEgMjAlJ10sXHJcbiAgICAgIG1pbkhlaWdodDogMTMwLFxyXG4gICAgICBtOiAyLFxyXG4gICAgICBiYWNrZ3JvdW5kOiAnI0ZGRkZGRicsXHJcbiAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjRURFRkY2JyxcclxuICAgICAgYm9yZGVyUmFkaXVzOiA1LFxyXG4gICAgfSxcclxuICAgIGZlYXR1cmVDYXJkOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgYWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnLFxyXG4gICAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcclxuICAgICAgcDogMyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBmb3Jtczoge1xyXG4gICAgbGFiZWw6IHtcclxuICAgICAgZm9udFNpemU6IDEsXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICAgIH0sXHJcbiAgICBpbnB1dDoge1xyXG4gICAgICBib3JkZXJSYWRpdXM6IDgsXHJcbiAgICAgIGJvcmRlckNvbG9yOiAnYm9yZGVyX2NvbG9yJyxcclxuICAgICAgaGVpZ2h0OiA2MCxcclxuICAgICAgJyY6Zm9jdXMnOiB7XHJcbiAgICAgICAgYm9yZGVyQ29sb3I6ICdwcmltYXJ5JyxcclxuICAgICAgICBib3hTaGFkb3c6ICh0KSA9PiBgMCAwIDAgMnB4ICR7dC5jb2xvcnMucHJpbWFyeX1gLFxyXG4gICAgICAgIG91dGxpbmU6ICdub25lJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgYmFkZ2VzOiB7XHJcbiAgICBwcmltYXJ5OiB7XHJcbiAgICAgIGNvbG9yOiAnYmFja2dyb3VuZCcsXHJcbiAgICAgIGJnOiAnIzI4QTVGRicsXHJcbiAgICAgIGJvcmRlclJhZGl1czogMzAsXHJcbiAgICAgIHA6ICczcHggMTFweCcsXHJcbiAgICAgIGZvbnRTaXplOiAxLFxyXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAnLTAuNXB4JyxcclxuICAgIH0sXHJcbiAgICBvdXRsaW5lOiB7XHJcbiAgICAgIGNvbG9yOiAncHJpbWFyeScsXHJcbiAgICAgIGJnOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgICBib3hTaGFkb3c6ICdpbnNldCAwIDAgMCAxcHgnLFxyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICBzdHlsZXM6IHtcclxuICAgIC8vIFRvIGFkZCBiYXNlLCB0b3AtbGV2ZWwgc3R5bGVzIHRvIHRoZSA8Ym9keT4gZWxlbWVudCwgdXNlIHRoZW1lLnN0eWxlcy5yb290LlxyXG4gICAgcm9vdDoge1xyXG4gICAgICBmb250RmFtaWx5OiAnYm9keScsXHJcbiAgICAgIGxpbmVIZWlnaHQ6ICdib2R5JyxcclxuICAgICAgZm9udFdlaWdodDogJ2JvZHknLFxyXG4gICAgICBmb250U21vb3RoaW5nOiAnYW50aWFsaWFzZWQnLFxyXG4gICAgICAnLm1vZGFsLXZpZGVvLWNsb3NlLWJ0bic6IHtcclxuICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICAgICB0b3A6ICctMjVweCcsXHJcbiAgICAgICAgcmlnaHQ6ICctMjVweCcsXHJcbiAgICAgICAgd2lkdGg6ICcgMjVweCcsXHJcbiAgICAgICAgaGVpZ2h0OiAnMjVweCcsXHJcbiAgICAgIH0sXHJcbiAgICAgICcubW9kYWwtdmlkZW8tbW92aWUtd3JhcCc6IHtcclxuICAgICAgICBtYXJnaW46IDYsXHJcbiAgICAgICAgd2lkdGg6ICdhdXRvJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICAvLyBEaXZpZGVyIHN0eWxlc1xyXG4gICAgaHI6IHtcclxuICAgICAgYm9yZGVyOiAwLFxyXG4gICAgICBib3JkZXJCb3R0b206ICcxcHggc29saWQnLFxyXG4gICAgICBib3JkZXJDb2xvcjogJyNEOUUwRTcnLFxyXG4gICAgfSxcclxuICAgIC8vIGFsc28geW91IGNhbiB1c2Ugb3RoZXIgSFRNTCBlbGVtZW50cyBzdHlsZSBoZXJlXHJcbiAgICB1bDoge1xyXG4gICAgICBsaXN0U3R5bGU6ICdub25lJyxcclxuICAgIH0sXHJcbiAgICBzck9ubHk6IHtcclxuICAgICAgYm9yZGVyOiAnMCAhaW1wb3J0YW50JyxcclxuICAgICAgY2xpcDogJ3JlY3QoMXB4LCAxcHgsIDFweCwgMXB4KSAhaW1wb3J0YW50JyxcclxuICAgICAgY2xpcFBhdGg6ICdpbnNldCg1MCUpICFpbXBvcnRhbnQnLFxyXG4gICAgICBoZWlnaHQ6ICcxcHggIWltcG9ydGFudCcsXHJcbiAgICAgIG1hcmdpbjogJy0xcHggIWltcG9ydGFudCcsXHJcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuICFpbXBvcnRhbnQnLFxyXG4gICAgICBwYWRkaW5nOiAnMCAhaW1wb3J0YW50JyxcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZSAhaW1wb3J0YW50JyxcclxuICAgICAgd2lkdGg6ICcxcHggIWltcG9ydGFudCcsXHJcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAgIWltcG9ydGFudCcsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBlbW90aW9uL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnJhbWVyLW1vdGlvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmMtZHJhd2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWN1c3RvbS1zY3JvbGxiYXJzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zL2ZhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zL2lvXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LW1vZGFsLXZpZGVvXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LW11bHRpLWNhcm91c2VsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXNjcm9sbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zdGlja3lub2RlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRoZW1lLXVpXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=