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
    onClick: () => {
      window.open("https://forms.gle/MmH2NwMahJ6PbgQ57");
    },
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
      lineNumber: 44,
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
    onClick: () => {
      window.open("https://forms.gle/MmH2NwMahJ6PbgQ57");
    },
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
    onClick: () => {
      window.open("https://forms.gle/MmH2NwMahJ6PbgQ57");
    },
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
  }), __jsx(sections_package__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
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
    onClick: () => {
      window.open("https://forms.gle/MmH2NwMahJ6PbgQ57");
    },
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
  name: '1 Month Free Plan',
  description: 'For Students Just starting up',
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
    text: 'Free access for all kind of Premium courses.',
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
    text: 'Unlimited Jobs and Internships Applications',
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
    text: 'Active Profile and recommedations',
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
    text: '1 to 1 Expert guidance',
    isAvailable: false
  }, {
    icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoIosCloseCircle"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 15
      }
    }),
    text: 'Live Sessions',
    isAvailable: false
  }, {
    icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoIosCloseCircle"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 15
      }
    }),
    text: 'Real life project Experience',
    isAvailable: false
  }]
}, {
  header: 'Recommended',
  name: 'Premium',
  description: 'For achivers to land their Dream Job',
  priceWithUnit: 'Rs499/',
  buttonText: 'Signup Now',
  points: [{
    icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoIosCheckmarkCircle"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
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
        lineNumber: 65,
        columnNumber: 15
      }
    }),
    text: 'Free access for all kind of Premium courses.',
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
    text: 'Unlimited Jobs and Internships Applications',
    isAvailable: true
  }, {
    icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoIosCheckmarkCircle"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 15
      }
    }),
    text: 'Active Profile and recommedations',
    isAvailable: true
  }, {
    icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoIosCheckmarkCircle"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 15
      }
    }),
    text: '1 to 1 Expert guidance',
    isAvailable: true
  }, {
    icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoIosCheckmarkCircle"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 15
      }
    }),
    text: 'Live Sessions',
    isAvailable: true
  }, {
    icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoIosCheckmarkCircle"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 15
      }
    }),
    text: 'Real life project Experience',
    isAvailable: true
  }]
}];
function Package() {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("section", {
    id: "pricing",
    sx: styles.pricing,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_section_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Let\u2019s see how it works",
    slogan: "Whats the function",
    isWhite: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
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
      lineNumber: 108,
      columnNumber: 9
    }
  }, packages.map(packageData => Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_price_card__WEBPACK_IMPORTED_MODULE_2__["default"], {
    data: packageData,
    key: packageData.name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
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
  subTitle: 'Cutting Edge technology',
  title: 'Learn the Most Advance and Demanding Skills',
  description: 'Learn the latest technology web development, Android App development, Native App, PWD apps and IOS apps with the NodeJs Django GraphQl and much more technology to learn',
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
  title: 'Learn Skills',
  text: 'To gain practical knowledge, you need to explore various options and see what works the best.'
}, {
  id: 2,
  title: ' Build Portfolio',
  text: 'when You practice you learn and as you learn it should also give you worth as proof of your efforts by practicing and using this practice to build a strong portfolio with help you in long run'
}, {
  id: 3,
  title: 'Internships',
  text: 'When it comes down to practice your skill and make it more useful the best way to get pass it by working in a real-life environment in which our internship program helps you to shapen your skills'
}, {
  id: 4,
  title: 'Land Your Dream Job',
  text: 'With the right skill set ,knowledge,practice and Portfolio you can easliy achive waht it take to get to your dream Job.'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhdGgtbWF0Y2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcHJlcGFyZS1kZXN0aW5hdGlvbi50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yZXNvbHZlLXJld3JpdGVzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL1N1Y2Nlc3MucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvYXJyb3dFdmVuLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2Fycm93T2RkLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2Jhbm5lckJnLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2NvcmUtZmVhdHVyZS9jb2FjaGluZy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9jb3JlLWZlYXR1cmUvdGVudC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9mZWF0dXJlL2Fzc2lnbm1lbnQucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvZmVhdHVyZS9idXNpbmVzc21hbi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9mZWF0dXJlL3F1ZXN0aW9uLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ZlYXR1cmUvcXVpei5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9mZWF0dXJlL3RlYWNoaW5nLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ZlYXR1cmUvdmlkZW8tdHV0b3JpYWxzLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2dvYWwucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMva2V5LWZlYXR1cmUvaGVscCAoMSkucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMva2V5LWZlYXR1cmUvcHJhY3RpY2UgKDEpLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2tleS1mZWF0dXJlL3Byb21vdGlvbiAoMikucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvbG9nby1kYXJrLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2xvZ28ucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvcGFydG5lci5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9wYXR0ZXJuQkcucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvcGF5bWVudC1wYXR0ZXJuLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3BheW1lbnRUaHVtYi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy90ZXN0aW1vbmlhbC9hdmF0YXIxLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3Rlc3RpbW9uaWFsL2F2YXRhcjIucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvdGVzdGltb25pYWwvYXZhdGFyMy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy90ZXN0aW1vbmlhbC9hdmF0YXI0LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hY2NvcmRpb24vYWNjb3JkaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FjY29yZGlvbi9iYXNlLWFjY29yZGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hY2NvcmRpb24vc2hhcmVkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2J1dHRvbi1ncm91cC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kcmF3ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZmVhdHVyZS1jYXJkLWNvbHVtbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9mZWF0dXJlLWNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5kYXRhLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5kYXRhLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL21vYmlsZS1kcmF3ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sb2dvLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3ByaWNlLWNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcmF0aW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NlY3Rpb24taGVhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3Nlby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90ZXh0LWZlYXR1cmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRleHRzL2FwcC9hcHAucHJvdmlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRleHRzL2FwcC9hcHAucmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGV4dHMvY3JlYXRlLWNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRleHRzL2RyYXdlci9kcmF3ZXIuY29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGV4dHMvZHJhd2VyL2RyYXdlci5wcm92aWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlY3Rpb25zL2Jhbm5lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VjdGlvbnMvY29yZS1mZWF0dXJlLmpzIiwid2VicGFjazovLy8uL3NyYy9zZWN0aW9ucy9mYXEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlY3Rpb25zL2ZlYXR1cmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlY3Rpb25zL2tleS1mZWF0dXJlLmpzIiwid2VicGFjazovLy8uL3NyYy9zZWN0aW9ucy9wYWNrYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9zZWN0aW9ucy9wYXJ0bmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zZWN0aW9ucy9zZWN1cmUtcGF5bWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VjdGlvbnMvdGVzdGltb25pYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlY3Rpb25zL3dvcmtmbG93LmpzIiwid2VicGFjazovLy8uL3NyYy90aGVtZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZW1vdGlvbi9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZnJhbWVyLW1vdGlvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJjLWRyYXdlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtY3VzdG9tLXNjcm9sbGJhcnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9mYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWljb25zL2lvXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1tb2RhbC12aWRlb1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LW11bHRpLWNhcm91c2VsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc2Nyb2xsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc3RpY2t5bm9kZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRoZW1lLXVpXCIiXSwibmFtZXMiOlsibGlzdGVuZXJzIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJ3aW5kb3ciLCJwcmVmZXRjaGVkIiwiY2FjaGVkT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZW50cnkiLCJjYiIsInJvb3RNYXJnaW4iLCJsaXN0ZW5Ub0ludGVyc2VjdGlvbnMiLCJvYnNlcnZlciIsImdldE9ic2VydmVyIiwiY29uc29sZSIsInJvdXRlciIsImVyciIsImhyZWYiLCJldmVudCIsInRhcmdldCIsImUiLCJub2RlTmFtZSIsImlzTW9kaWZpZWRFdmVudCIsInNjcm9sbCIsImFzIiwicmVwbGFjZSIsInN1Y2Nlc3MiLCJkb2N1bWVudCIsImFyZ3MiLCJrZXkiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJPYmplY3QiLCJwcm9wcyIsImNyZWF0ZVByb3BFcnJvciIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJzaGFsbG93IiwicGFzc0hyZWYiLCJwcmVmZXRjaCIsIm9wdGlvbmFsUHJvcHMiLCJoYXNXYXJuZWQiLCJSZWFjdCIsInAiLCJwYXRobmFtZSIsInJlc29sdmVkSHJlZiIsImNoaWxkRWxtIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRyZW4iLCJjaGlsZCIsIkNoaWxkcmVuIiwiY2hpbGRQcm9wcyIsInJlZiIsImVsIiwic2V0Q2hpbGRFbG0iLCJvbkNsaWNrIiwibGlua0NsaWNrZWQiLCJwcmlvcml0eSIsIkxpbmsiLCJwYXRoIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJwcm9jZXNzIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImdldCIsIlJvdXRlciIsImZpZWxkIiwiZ2V0Um91dGVyIiwiZXZlbnRGaWVsZCIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiX3JvdXRlciIsImluc3RhbmNlIiwiQ29tcG9zZWRDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJXaXRoUm91dGVyV3JhcHBlciIsIm5hbWUiLCJhbGwiLCJvbiIsIm9mZiIsImVtaXQiLCJoYW5kbGVyIiwiYmFzZVBhdGgiLCJjYW5jZWxsZWQiLCJ1cmwiLCJsb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwiaGFzQmFzZVBhdGgiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmaW5hbFVybCIsIlBBR0VfTE9BRF9FUlJPUiIsIlN5bWJvbCIsImFkZEJhc2VQYXRoIiwicmVzb2x2ZUhyZWYiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsImNyZWRlbnRpYWxzIiwicmVzIiwiYXR0ZW1wdHMiLCJmZXRjaFJldHJ5IiwiaXNTZXJ2ZXJSZW5kZXIiLCJtYXJrTG9hZGluZ0Vycm9yIiwiY29uc3RydWN0b3IiLCJyb3V0ZSIsInF1ZXJ5IiwiYXNQYXRoIiwiY29tcG9uZW50cyIsInNkYyIsInN1YiIsImNsYyIsInBhZ2VMb2FkZXIiLCJfYnBzIiwiZXZlbnRzIiwiX3dyYXBBcHAiLCJpc1NzciIsImlzRmFsbGJhY2siLCJfaW5GbGlnaHRSb3V0ZSIsIl9zaGFsbG93Iiwic3RhdGUiLCJvcHRpb25zIiwic3R5bGVTaGVldHMiLCJfX05fU1NHIiwiaW5pdGlhbFByb3BzIiwiX19OX1NTUCIsIkNvbXBvbmVudCIsIl9fTkVYVF9EQVRBX18iLCJyZWxvYWQiLCJiYWNrIiwicHVzaCIsInByZXBhcmVVcmxBcyIsImNoYW5nZSIsImlzTG9jYWxVUkwiLCJTVCIsInBlcmZvcm1hbmNlIiwiY2xlYW5lZEFzIiwiZGVsQmFzZVBhdGgiLCJwYWdlcyIsIl9fcmV3cml0ZXMiLCJwYXJzZWQiLCJtZXRob2QiLCJyZXNvbHZlZEFzIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJtaXNzaW5nUGFyYW1zIiwicGFyYW0iLCJhc1BhdGhuYW1lIiwicm91dGVJbmZvIiwiYXBwQ29tcCIsImVycm9yIiwiY2hhbmdlU3RhdGUiLCJfX04iLCJoYW5kbGVSb3V0ZUluZm9FcnJvciIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJwYWdlIiwiZ2V0Um91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwicmVxdWlyZSIsImlzVmFsaWRFbGVtZW50VHlwZSIsImRhdGFIcmVmIiwic2V0IiwiYmVmb3JlUG9wU3RhdGUiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImhhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJfcmVzb2x2ZUhyZWYiLCJjbGVhblBhdGhuYW1lIiwicGFyc2VkSHJlZiIsIlByb21pc2UiLCJmZXRjaENvbXBvbmVudCIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsIl9nZXREYXRhIiwiZm4iLCJkYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJmZXRjaE5leHREYXRhIiwiX2dldFNlcnZlckRhdGEiLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5Iiwic2xhc2hlZFByb3RvY29scyIsInByb3RvY29sIiwidXJsT2JqIiwiaG9zdCIsImF1dGgiLCJlbmNvZGVVUklDb21wb25lbnQiLCJob3N0bmFtZSIsIlN0cmluZyIsInF1ZXJ5c3RyaW5nIiwic2VhcmNoIiwiVEVTVF9ST1VURSIsIkRVTU1ZX0JBU0UiLCJyZXNvbHZlZEJhc2UiLCJvcmlnaW4iLCJtYXRjaGVyT3B0aW9ucyIsInNlbnNpdGl2ZSIsImRlbGltaXRlciIsImRlY29kZSIsImN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMiLCJzdHJpY3QiLCJjdXN0b21Sb3V0ZSIsImtleXMiLCJtYXRjaGVyUmVnZXgiLCJwYXRoVG9SZWdleHAiLCJtYXRjaGVyIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwicGFyc2VkRGVzdGluYXRpb24iLCJkZXN0aW5hdGlvbiIsImRlc3RRdWVyeSIsImRlc3RQYXRoIiwiZGVzdFBhdGhQYXJhbUtleXMiLCJkZXN0UGF0aFBhcmFtcyIsImRlc3RpbmF0aW9uQ29tcGlsZXIiLCJ2YWxpZGF0ZSIsInZhbHVlIiwiQXJyYXkiLCJzdHJPckFycmF5IiwicXVlcnlDb21waWxlciIsInBhcmFtS2V5cyIsImFwcGVuZFBhcmFtc1RvUXVlcnkiLCJwYXJhbXMiLCJzaG91bGRBZGRCYXNlUGF0aCIsIm5ld1VybCIsImVuY29kZVVSSSIsInNlYXJjaFBhcmFtcyIsInJlc3VsdCIsIml0ZW0iLCJzZWFyY2hQYXJhbXNMaXN0IiwiY3VzdG9tUm91dGVNYXRjaGVyIiwicmV3cml0ZSIsImRlc3RSZXMiLCJyZSIsInNsdWdOYW1lIiwiZyIsImdyb3VwcyIsIm0iLCJzdHIiLCJvcHRpb25hbCIsInJlcGVhdCIsInNlZ21lbnRzIiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsInNlZ21lbnQiLCJwYXJzZVBhcmFtZXRlciIsInBvcyIsImVzY2FwZVJlZ2V4Iiwicm91dGVLZXlDaGFyQ29kZSIsInJvdXRlS2V5Q2hhckxlbmd0aCIsImdldFNhZmVSb3V0ZUtleSIsInJvdXRlS2V5IiwiaSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJpc05hTiIsInBhcnNlSW50IiwibmFtZWRSZWdleCIsInVzZWQiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJBcHAiLCJnZXREaXNwbGF5TmFtZSIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJBY2NvcmRpb24iLCJpdGVtcyIsImNvbWJpbmVSZWR1Y2VycyIsInNpbmdsZSIsInByZXZlbnRDbG9zZSIsIm9wZW5JbmRleGVzIiwiaGFuZGxlSXRlbUNsaWNrIiwibWFwIiwiaW5kZXgiLCJ0aXRsZSIsImluY2x1ZGVzIiwiY29udGVudHMiLCJCYXNlQWNjb3JkaW9uIiwiaW50ZXJuYWxTZXRTdGF0ZSIsImNsb3NpbmciLCJ0eXBlIiwiZmlsdGVyIiwibG9nIiwiZ2V0U3RhdGUiLCJ1bmRlZmluZWQiLCJjaGFuZ2VzIiwiY2FsbGJhY2siLCJhbGxDaGFuZ2VzIiwic2V0U3RhdGUiLCJhY3R1YWxTdGF0ZSIsImNoYW5nZXNPYmplY3QiLCJzdGF0ZVJlZHVjZXIiLCJvblN0YXRlQ2hhbmdlIiwicmVuZGVyIiwiQWNjb3JkaW9uQnV0dG9uIiwicmVzdCIsInN0eWxlcyIsImJ1dHRvblRvZ2dsZSIsImRpc3BsYXkiLCJjb2xvciIsImN1cnNvciIsImJvcmRlciIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImxldHRlclNwYWNpbmciLCJwb3NpdGlvbiIsInBhZGRpbmdMZWZ0IiwibGluZUhlaWdodCIsIndpZHRoIiwiaGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwiYmFja2dyb3VuZENvbG9yIiwidG9wIiwibGVmdCIsIm9wYWNpdHkiLCJjb250ZW50IiwidHJhbnNmb3JtIiwidHJhbnNpdGlvbiIsInZhcmlhbnRzIiwib3BlbiIsIm1hcmdpblRvcCIsImNsb3NlZCIsIkFjY29yZGlvbkNvbnRlbnRzIiwiaXNPcGVuIiwib3ZlcmZsb3dZIiwicGFkZGluZ0JvdHRvbSIsIkFjY29yZGlvbkl0ZW0iLCJvdmVyZmxvdyIsInBhZGRpbmciLCJib3JkZXJCb3R0b20iLCJsZW5ndGgiLCJzbGljZSIsInJlZHVjZXJzIiwicmVkdWNlIiwiYWNjIiwicmVkdWNlciIsIkJ1dHRvbkdyb3VwIiwibmV4dCIsInByZXZpb3VzIiwiYnV0dG9uR3JvdXAiLCJqdXN0aWZ5Q29udGVudCIsIm1iIiwiYnV0dG9uIiwiYmciLCJweCIsIm91dGxpbmUiLCJEcmF3ZXIiLCJjbGFzc05hbWUiLCJjbG9zZUJ1dHRvbiIsImNsb3NlQnV0dG9uU3R5bGUiLCJkcmF3ZXJIYW5kbGVyIiwidG9nZ2xlSGFuZGxlciIsInBsYWNlbWVudCIsImRyYXdlclN0eWxlIiwiY2xvc2VCdG5TdHlsZSIsInRyaW0iLCJkZWZhdWx0UHJvcHMiLCJGZWF0dXJlQ2FyZENvbHVtbiIsInNyYyIsImFsdFRleHQiLCJ0ZXh0IiwiY2FyZCIsImltZyIsIndyYXBwZXIiLCJzdWJUaXRsZSIsImFsaWduSXRlbXMiLCJ0ZXh0QWxpZ24iLCJmbGV4RGlyZWN0aW9uIiwibXgiLCJGZWF0dXJlQ2FyZCIsImZsZXhTaHJpbmsiLCJtciIsIm10IiwiaGVhZGVyIiwibGFiZWwiLCJGb290ZXIiLCJmb290ZXIiLCJjb250YWluZXIiLCJmb290ZXJUb3BBcmVhIiwibWVudUl0ZW1zIiwibWVudXMiLCJoZWFkaW5nIiwibGluayIsImNvcHlyaWdodCIsImJvcmRlclRvcCIsImJvcmRlclRvcENvbG9yIiwiZmxleFdyYXAiLCJwdCIsInBiIiwidGV4dERlY29yYXRpb24iLCJhIiwicGwiLCJIZWFkZXIiLCJMb2dvRGFyayIsIkxvZ29XaGl0ZSIsIm5hdiIsInBvc2l0aW9uQW5pbSIsImtleWZyYW1lcyIsInB5IiwiYW5pbWF0aW9uIiwibWwiLCJib3hTaGFkb3ciLCJib3JkZXJDb2xvciIsInNvY2lhbCIsImljb24iLCJNb2JpbGVEcmF3ZXIiLCJkaXNwYXRjaCIsInVzZUNvbnRleHQiLCJEcmF3ZXJDb250ZXh0IiwidXNlQ2FsbGJhY2siLCJkcmF3ZXIiLCJjbG9zZSIsIm1lbnUiLCJtZW51Rm9vdGVyIiwicmlnaHQiLCJ6SW5kZXgiLCJmdyIsIkltYWdlIiwiTGF5b3V0IiwiaXNTdGlja3kiLCJzZXRJc1N0aWNreSIsInVzZVN0YXRlIiwiaGFuZGxlU3RhdGVDaGFuZ2UiLCJzdGF0dXMiLCJTdGlja3kiLCJTVEFUVVNfRklYRUQiLCJTVEFUVVNfT1JJR0lOQUwiLCJ2YXJpYW50IiwiTmF2TGluayIsIkxpc3QiLCJwYXJlbnRTdHlsZSIsImNoaWxkU3R5bGUiLCJsaXN0U3R5bGVUeXBlIiwibWFyZ2luIiwiaXNBdmFpbGFibGUiLCJsaXN0SWNvbiIsIm1hcmdpbkxlZnQiLCJMb2dvIiwibWF4V2lkdGgiLCJQcmljZUNhcmQiLCJkZXNjcmlwdGlvbiIsInByaWNlV2l0aFVuaXQiLCJidXR0b25UZXh0IiwicG9pbnRzIiwicHJpY2luZ0JveCIsInByaWNpbmdIZWFkZXIiLCJwcmljZSIsImxpc3RJdGVtIiwiZmxleCIsImJhY2tncm91bmQiLCJtYXJnaW5Cb3R0b20iLCJib3R0b20iLCJmb250U3R5bGUiLCJwciIsIlJhdGluZyIsInJhdGluZyIsInRvdGFsUmF0aW5nIiwiU2VjdGlvbkhlYWRlciIsInNsb2dhbiIsImlzV2hpdGUiLCJTRU8iLCJhdXRob3IiLCJtZXRhIiwibWV0YURhdGEiLCJwcm9wZXJ0eSIsImNvbmNhdCIsImxhbmciLCJUZXh0RmVhdHVyZSIsImJ0bk5hbWUiLCJidG5VUkwiLCJ0ZXh0VHJhbnNmb3JtIiwidXNlRGlzcGF0Y2giLCJwcm92aWRlciIsInVzZUNyZWF0ZUNvbnRleHQiLCJpbml0aWFsU3RhdGUiLCJ1c2VTdGlja3lTdGF0ZSIsInVzZVN0aWNreURpc3BhdGNoIiwiU3RpY2t5UHJvdmlkZXIiLCJpc1NpZGViYXJTdGlja3kiLCJFcnJvciIsImRlZmF1bHRWYWx1ZSIsImRlZmF1bHREaXNwYXRjaCIsInN0YXRlQ3R4IiwiY3JlYXRlQ29udGV4dCIsImRpc3BhdGNoQ3R4IiwidXNlU3RhdGVDdHgiLCJ1c2VEaXNwYXRjaEN0eCIsIlByb3ZpZGVyIiwidXNlUmVkdWNlciIsImFjdGlvbiIsIkRyYXdlclByb3ZpZGVyIiwiSW5kZXhQYWdlIiwidGhlbWUiLCJCYW5uZXIiLCJ2aWRlb09wZW4iLCJzZXRWaWRlb09wZW4iLCJoYW5kbGVDbGljayIsInByZXZlbnREZWZhdWx0IiwiYmFubmVyIiwiY29udGVudEJveCIsImltYWdlQm94IiwiQmFubmVyVGh1bWIiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJCYW5uZXJCRyIsImJhY2tncm91bmRSZXBlYXQiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJiYWNrZ3JvdW5kU2l6ZSIsImJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzIiwic3BvbnNvclRpdGxlIiwic3BvbnNvckJveCIsInNwb25zb3IiLCJmZWF0dXJlcyIsImlkIiwiaW1nU3JjIiwiQnJpZWZjYXNlIiwiU2VjdXJlIiwiQ29yZUZlYXR1cmUiLCJjb3JlRmVhdHVyZSIsImNvbnRhaW5lckJveCIsInRodW1ibmFpbCIsIkNvcmVGZWF0dXJlVGh1bWIiLCJoZWFkaW5nVG9wIiwiZ3JpZCIsImJvcmRlclRvcFJpZ2h0UmFkaXVzIiwiZmFxcyIsIkZhcSIsIm15IiwiU21hcnQiLCJXaW5uZXIiLCJDbG91ZCIsIlNldHRpbmciLCJEZXNpZ24iLCJDaGF0IiwiRmVhdHVyZSIsImdyaWRHYXAiLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwiVmVjdG9yIiwiRWRpdGluZyIsIlNwZWVkIiwiS2V5RmVhdHVyZSIsInBhY2thZ2VzIiwiUGFja2FnZSIsInByaWNpbmciLCJwYWNrYWdlRGF0YSIsIlBhdHRlcm5CRyIsIlBhcnRuZXJTZWN0aW9uIiwiUGFydG5lciIsIlNlY3VyZVBheW1lbnQiLCJiZ092ZXJsYXkiLCJQYXltZW50VGh1bWIiLCJQYXltZW50UGF0dGVybiIsIm9yZGVyIiwiYXZhdGFyIiwiQXZhdGFyMSIsImRlc2lnbmF0aW9uIiwicmV2aWV3IiwiQXZhdGFyMiIsIkF2YXRhcjMiLCJBdmF0YXI0IiwicmVzcG9uc2l2ZSIsImRlc2t0b3AiLCJicmVha3BvaW50IiwibWF4IiwibWluIiwic2xpZGVzVG9TbGlkZSIsImxhcHRvcCIsInRhYmxldCIsIm1vYmlsZSIsIlRlc3RpbW9uaWFsQ2FyZCIsImNhcm91c2VsV3JhcHBlciIsInJldmlld0NhcmQiLCJ1bCIsImxpc3RTdHlsZSIsInN2ZyIsIm1hcmdpblJpZ2h0Iiwib2JqZWN0Rml0IiwiV29ya0Zsb3ciLCJ3b3JrZmxvdyIsImljb25Cb3giLCJBcnJvd09kZCIsIkFycm93RXZlbiIsImNvbG9ycyIsInRleHRfc2Vjb25kYXJ5IiwiaGVhZGluZ19zZWNvbmRhcnkiLCJiYWNrZ3JvdW5kX3NlY29uZGFyeSIsImJvcmRlcl9jb2xvciIsInByaW1hcnkiLCJzZWNvbmRhcnkiLCJtdXRlZCIsImFjY2VudCIsInllbGxvdyIsIm1vZGVzIiwiZGFyayIsImJyZWFrcG9pbnRzIiwiZm9udHMiLCJib2R5IiwiZm9udFNpemVzIiwiZm9udFdlaWdodHMiLCJib2xkIiwibGluZUhlaWdodHMiLCJsZXR0ZXJTcGFjaW5ncyIsImNhcHMiLCJzcGFjZSIsImxheW91dCIsInRvb2xiYXIiLCJtYWluIiwic2VjdGlvbiIsImtleUZlYXR1cmUiLCJmZWF0dXJlIiwicGFydG5lciIsInRlc3RpbW9uaWFsIiwic2VjdXJlUGF5bWVudCIsImZhcSIsInNlY3Rpb25IZWFkZXIiLCJmb250RmFtaWx5IiwiaGVyb1ByaW1hcnkiLCJoZXJvU2Vjb25kYXJ5IiwibGVhZCIsImxpbmtzIiwiZGVmYXVsdCIsImxvZ28iLCJpbWFnZXMiLCJidXR0b25zIiwiZGVmYXVsdEJ0biIsIndoaXRlQnV0dG9uIiwidGV4dEJ1dHRvbiIsImNhcmRzIiwib2ZmZXIiLCJtaW5IZWlnaHQiLCJmZWF0dXJlQ2FyZCIsImZvcm1zIiwiaW5wdXQiLCJ0IiwiYmFkZ2VzIiwicm9vdCIsImZvbnRTbW9vdGhpbmciLCJociIsInNyT25seSIsImNsaXAiLCJjbGlwUGF0aCIsIndoaXRlU3BhY2UiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ3hGQSx3RTs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdDOzs7Ozs7Ozs7OztBQ05BLGNBQWMsbUJBQU8sQ0FBQywwRUFBbUI7O0FBRXpDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FB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QUFHLHVCQUFYOztBQUNBLE1BQU0vSSxFQUFFLEdBQ2IrSSxFQUFFLElBQ0YsT0FBTzlJLFdBQVcsQ0FBbEIsU0FEQThJLGNBRUEsT0FBTzlJLFdBQVcsQ0FBbEIsWUFISzs7Ozs7Ozs7Ozs7OztBQ2pZTSx3QkFBd0IsMENBQTBDLGdEQUFnRCxnQ0FBZ0MsZ0NBQWdDLG1DQUFtQyw0QkFBNEIsK0JBQStCLG9CQUFvQix5QkFBeUIsVUFBVTtBQUNwVixpRDs7Ozs7Ozs7Ozs7QUNEQSxpQkFBaUIsbUJBQU8sQ0FBQyxtRUFBb0I7Ozs7Ozs7Ozs7OztBQ0E3QyxxRjs7Ozs7Ozs7Ozs7QUNBQSxpQ0FBaUMsZzBDOzs7Ozs7Ozs7OztBQ0FqQyxpQ0FBaUMsNHlDOzs7Ozs7Ozs7OztBQ0FqQyxzRjs7Ozs7Ozs7Ozs7QUNBQSxpQ0FBaUMsZ2tIOzs7Ozs7Ozs7OztBQ0FqQyxpQ0FBaUMsNGhLOzs7Ozs7Ozs7OztBQ0FqQyxpQ0FBaUMsbzZLOzs7Ozs7Ozs7OztBQ0FqQyxpQ0FBaUMsNHNLOzs7Ozs7Ozs7OztBQ0FqQyxpQ0FBaUMsdy9LOzs7Ozs7Ozs7OztBQ0FqQyxpQ0FBaUMsd21JOzs7Ozs7Ozs7OztBQ0FqQyxpQ0FBaUMsd3BKOzs7Ozs7Ozs7OztBQ0FqQyxpQ0FBaUMsNDZMOzs7Ozs7Ozs7OztBQ0FqQyxrRjs7Ozs7Ozs7Ozs7QUNBQSxpQ0FBaUMsb2hKOzs7Ozs7Ozs7OztBQ0FqQyxpQ0FBaUMsb3FNOzs7Ozs7Ozs7OztBQ0FqQyxpQ0FBaUMsd2hKOzs7Ozs7Ozs7OztBQ0FqQyx1Rjs7Ozs7Ozs7Ozs7QUNBQSxrRjs7Ozs7Ozs7Ozs7QUNBQSxxRjs7Ozs7Ozs7Ozs7QUNBQSx1Rjs7Ozs7Ozs7Ozs7QUNBQSw2Rjs7Ozs7Ozs7Ozs7QUNBQSwwRjs7Ozs7Ozs7Ozs7QUNBQSxpQ0FBaUMsb3JSOzs7Ozs7Ozs7OztBQ0FqQyxpQ0FBaUMsd2hSOzs7Ozs7Ozs7OztBQ0FqQyxpQ0FBaUMsbzdROzs7Ozs7Ozs7OztBQ0FqQyxpQ0FBaUMsNDRTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBakM7QUFDQTtB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RjtBQU1OMUcsY0FBUSxFQUFFLG1CQU5KO0FBT05DLGFBQU8sRUFBRSxjQVBIO0FBUU52QixjQUFRLEVBQUUscUJBUko7QUFTTkcsV0FBSyxFQUFFLGdCQVREO0FBVU40VSxnQkFBVSxFQUFFO0FBVk47QUE3QkY7QUFuVkssQ0FBZixFOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLGlEOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLHFDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcGFnZXMvaW5kZXguanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgYWRkQmFzZVBhdGgsXG4gIGlzTG9jYWxVUkwsXG4gIE5leHRSb3V0ZXIsXG4gIFByZWZldGNoT3B0aW9ucyxcbiAgcmVzb2x2ZUhyZWYsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIFJlcXVpcmVkS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gbmV2ZXIgOiBLXG59W2tleW9mIFRdXG50eXBlIE9wdGlvbmFsS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gSyA6IG5ldmVyXG59W2tleW9mIFRdXG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxufVxudHlwZSBMaW5rUHJvcHNSZXF1aXJlZCA9IFJlcXVpcmVkS2V5czxMaW5rUHJvcHM+XG50eXBlIExpbmtQcm9wc09wdGlvbmFsID0gT3B0aW9uYWxLZXlzPExpbmtQcm9wcz5cblxubGV0IGNhY2hlZE9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuY29uc3QgbGlzdGVuZXJzID0gbmV3IE1hcDxFbGVtZW50LCAoKSA9PiB2b2lkPigpXG5jb25zdCBJbnRlcnNlY3Rpb25PYnNlcnZlciA9XG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyIDogbnVsbFxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIGdldE9ic2VydmVyKCk6IEludGVyc2VjdGlvbk9ic2VydmVyIHwgdW5kZWZpbmVkIHtcbiAgLy8gUmV0dXJuIHNoYXJlZCBpbnN0YW5jZSBvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBhbHJlYWR5IGNyZWF0ZWRcbiAgaWYgKGNhY2hlZE9ic2VydmVyKSB7XG4gICAgcmV0dXJuIGNhY2hlZE9ic2VydmVyXG4gIH1cblxuICAvLyBPbmx5IGNyZWF0ZSBzaGFyZWQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgc3VwcG9ydGVkIGluIGJyb3dzZXJcbiAgaWYgKCFJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHJldHVybiAoY2FjaGVkT2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG4gICAgKGVudHJpZXMpID0+IHtcbiAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgaWYgKCFsaXN0ZW5lcnMuaGFzKGVudHJ5LnRhcmdldCkpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNiID0gbGlzdGVuZXJzLmdldChlbnRyeS50YXJnZXQpIVxuICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwKSB7XG4gICAgICAgICAgY2FjaGVkT2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBsaXN0ZW5lcnMuZGVsZXRlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBjYigpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICB7IHJvb3RNYXJnaW46ICcyMDBweCcgfVxuICApKVxufVxuXG5jb25zdCBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMgPSAoZWw6IEVsZW1lbnQsIGNiOiAoKSA9PiB2b2lkKSA9PiB7XG4gIGNvbnN0IG9ic2VydmVyID0gZ2V0T2JzZXJ2ZXIoKVxuICBpZiAoIW9ic2VydmVyKSB7XG4gICAgcmV0dXJuICgpID0+IHt9XG4gIH1cblxuICBvYnNlcnZlci5vYnNlcnZlKGVsKVxuICBsaXN0ZW5lcnMuc2V0KGVsLCBjYilcbiAgcmV0dXJuICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgfVxuICAgIGxpc3RlbmVycy5kZWxldGUoZWwpXG4gIH1cbn1cblxuZnVuY3Rpb24gcHJlZmV0Y2goXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBvcHRpb25zPzogUHJlZmV0Y2hPcHRpb25zXG4pOiB2b2lkIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm5cbiAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfSlcbiAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdID0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpIHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgcmV0dXJuIChcbiAgICAodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICBldmVudC5tZXRhS2V5IHx8XG4gICAgZXZlbnQuY3RybEtleSB8fFxuICAgIGV2ZW50LnNoaWZ0S2V5IHx8XG4gICAgZXZlbnQuYWx0S2V5IHx8IC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG4gICAgKGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKVxuICApXG59XG5cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKFxuICBlOiBSZWFjdC5Nb3VzZUV2ZW50LFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgcmVwbGFjZT86IGJvb2xlYW4sXG4gIHNoYWxsb3c/OiBib29sZWFuLFxuICBzY3JvbGw/OiBib29sZWFuXG4pOiB2b2lkIHtcbiAgY29uc3QgeyBub2RlTmFtZSB9ID0gZS5jdXJyZW50VGFyZ2V0XG5cbiAgaWYgKG5vZGVOYW1lID09PSAnQScgJiYgKGlzTW9kaWZpZWRFdmVudChlKSB8fCAhaXNMb2NhbFVSTChocmVmKSkpIHtcbiAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbiAgICByZXR1cm5cbiAgfVxuXG4gIGUucHJldmVudERlZmF1bHQoKVxuXG4gIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICBzY3JvbGwgPSBhcy5pbmRleE9mKCcjJykgPCAwXG4gIH1cblxuICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7IHNoYWxsb3cgfSkudGhlbihcbiAgICAoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgICAgaWYgKCFzdWNjZXNzKSByZXR1cm5cbiAgICAgIGlmIChzY3JvbGwpIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKVxuICAgICAgfVxuICAgIH1cbiAgKVxufVxuXG5mdW5jdGlvbiBMaW5rKHByb3BzOiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjxMaW5rUHJvcHM+KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3M6IHtcbiAgICAgIGtleTogc3RyaW5nXG4gICAgICBleHBlY3RlZDogc3RyaW5nXG4gICAgICBhY3R1YWw6IHN0cmluZ1xuICAgIH0pIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAgICAgIGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gICtcbiAgICAgICAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgID8gXCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiXG4gICAgICAgICAgICA6ICcnKVxuICAgICAgKVxuICAgIH1cblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzUmVxdWlyZWQsIHRydWU+ID0ge1xuICAgICAgaHJlZjogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wczogTGlua1Byb3BzUmVxdWlyZWRbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgcmVxdWlyZWRQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNSZXF1aXJlZFtdXG4gICAgcmVxdWlyZWRQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc1JlcXVpcmVkKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnaHJlZicpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gPT0gbnVsbCB8fFxuICAgICAgICAgICh0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHByb3BzW2tleV0gPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzT3B0aW9uYWwsIHRydWU+ID0ge1xuICAgICAgYXM6IHRydWUsXG4gICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgIHBhc3NIcmVmOiB0cnVlLFxuICAgICAgcHJlZmV0Y2g6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHM6IExpbmtQcm9wc09wdGlvbmFsW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIG9wdGlvbmFsUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzT3B0aW9uYWxbXVxuICAgIG9wdGlvbmFsUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNPcHRpb25hbCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSAmJlxuICAgICAgICAgIHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJlxuICAgICAgICAgIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0J1xuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGtleSA9PT0gJ3JlcGxhY2UnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Njcm9sbCcgfHxcbiAgICAgICAga2V5ID09PSAnc2hhbGxvdycgfHxcbiAgICAgICAga2V5ID09PSAncGFzc0hyZWYnIHx8XG4gICAgICAgIGtleSA9PT0gJ3ByZWZldGNoJ1xuICAgICAgKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICE9IG51bGwgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdib29sZWFuJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2Bib29sZWFuYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBoYXNXYXJuZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpXG4gICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuXG4gIGNvbnN0IFtjaGlsZEVsbSwgc2V0Q2hpbGRFbG1dID0gUmVhY3QudXNlU3RhdGU8RWxlbWVudD4oKVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhdGhuYW1lID0gKHJvdXRlciAmJiByb3V0ZXIucGF0aG5hbWUpIHx8ICcvJ1xuXG4gIGNvbnN0IHsgaHJlZiwgYXMgfSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5ocmVmKVxuICAgIHJldHVybiB7XG4gICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICBhczogcHJvcHMuYXMgPyByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuYXMpIDogcmVzb2x2ZWRIcmVmLFxuICAgIH1cbiAgfSwgW3BhdGhuYW1lLCBwcm9wcy5ocmVmLCBwcm9wcy5hc10pXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoXG4gICAgICBwICYmXG4gICAgICBJbnRlcnNlY3Rpb25PYnNlcnZlciAmJlxuICAgICAgY2hpbGRFbG0gJiZcbiAgICAgIGNoaWxkRWxtLnRhZ05hbWUgJiZcbiAgICAgIGlzTG9jYWxVUkwoaHJlZilcbiAgICApIHtcbiAgICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgICBjb25zdCBpc1ByZWZldGNoZWQgPSBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc11cbiAgICAgIGlmICghaXNQcmVmZXRjaGVkKSB7XG4gICAgICAgIHJldHVybiBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMoY2hpbGRFbG0sICgpID0+IHtcbiAgICAgICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW3AsIGNoaWxkRWxtLCBocmVmLCBhcywgcm91dGVyXSlcblxuICBsZXQgeyBjaGlsZHJlbiwgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsIH0gPSBwcm9wc1xuICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gIH1cblxuICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gIGNvbnN0IGNoaWxkUHJvcHM6IHtcbiAgICBvbk1vdXNlRW50ZXI/OiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIG9uQ2xpY2s6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgaHJlZj86IHN0cmluZ1xuICAgIHJlZj86IGFueVxuICB9ID0ge1xuICAgIHJlZjogKGVsOiBhbnkpID0+IHtcbiAgICAgIGlmIChlbCkgc2V0Q2hpbGRFbG0oZWwpXG5cbiAgICAgIGlmIChjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZikge1xuICAgICAgICBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGQucmVmKGVsKVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGNoaWxkLnJlZi5jdXJyZW50ID0gZWxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICB9XG4gICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwpXG4gICAgICB9XG4gICAgfSxcbiAgfVxuXG4gIGlmIChwKSB7XG4gICAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgICAgfVxuICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywgeyBwcmlvcml0eTogdHJ1ZSB9KVxuICAgIH1cbiAgfVxuXG4gIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IChjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKSkge1xuICAgIGNoaWxkUHJvcHMuaHJlZiA9IGFkZEJhc2VQYXRoKGFzKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcylcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aFxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9cbmV4cG9ydCBjb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSFxuICA/IChwYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKVxuICAgICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nXG4gICAgICB9XG4gICAgfVxuICA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgZ2V0KCkge1xuICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSBhcyBzdHJpbmdcbiAgICB9LFxuICB9KVxufSlcblxuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKHt9LCBfcm91dGVyW3Byb3BlcnR5XSkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KSB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIFRva2VuaXplIGlucHV0IHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gbGV4ZXIoc3RyKSB7XG4gICAgdmFyIHRva2VucyA9IFtdO1xuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAoaSA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSBzdHJbaV07XG4gICAgICAgIGlmIChjaGFyID09PSBcIipcIiB8fCBjaGFyID09PSBcIitcIiB8fCBjaGFyID09PSBcIj9cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk1PRElGSUVSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFU0NBUEVEX0NIQVJcIiwgaW5kZXg6IGkrKywgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwie1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiT1BFTlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwifVwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0xPU0VcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIjpcIikge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhciBjb2RlID0gc3RyLmNoYXJDb2RlQXQoaik7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIC8vIGAwLTlgXG4gICAgICAgICAgICAgICAgKGNvZGUgPj0gNDggJiYgY29kZSA8PSA1NykgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYEEtWmBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gNjUgJiYgY29kZSA8PSA5MCkgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYGEtemBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gOTcgJiYgY29kZSA8PSAxMjIpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBfYFxuICAgICAgICAgICAgICAgICAgICBjb2RlID09PSA5NSkge1xuICAgICAgICAgICAgICAgICAgICBuYW1lICs9IHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIW5hbWUpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGFyYW1ldGVyIG5hbWUgYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJOQU1FXCIsIGluZGV4OiBpLCB2YWx1ZTogbmFtZSB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKFwiKSB7XG4gICAgICAgICAgICB2YXIgY291bnQgPSAxO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm4gPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlBhdHRlcm4gY2Fubm90IHN0YXJ0IHdpdGggXFxcIj9cXFwiIGF0IFwiICsgaik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdICsgc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIilcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudC0tO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGorKztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHN0cltqXSA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0cltqICsgMV0gIT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2FwdHVyaW5nIGdyb3VwcyBhcmUgbm90IGFsbG93ZWQgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvdW50KVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmJhbGFuY2VkIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIGlmICghcGF0dGVybilcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiUEFUVEVSTlwiLCBpbmRleDogaSwgdmFsdWU6IHBhdHRlcm4gfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDSEFSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgfVxuICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFTkRcIiwgaW5kZXg6IGksIHZhbHVlOiBcIlwiIH0pO1xuICAgIHJldHVybiB0b2tlbnM7XG59XG4vKipcbiAqIFBhcnNlIGEgc3RyaW5nIGZvciB0aGUgcmF3IHRva2Vucy5cbiAqL1xuZnVuY3Rpb24gcGFyc2Uoc3RyLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgdG9rZW5zID0gbGV4ZXIoc3RyKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLnByZWZpeGVzLCBwcmVmaXhlcyA9IF9hID09PSB2b2lkIDAgPyBcIi4vXCIgOiBfYTtcbiAgICB2YXIgZGVmYXVsdFBhdHRlcm4gPSBcIlteXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl0rP1wiO1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIga2V5ID0gMDtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHBhdGggPSBcIlwiO1xuICAgIHZhciB0cnlDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgaWYgKGkgPCB0b2tlbnMubGVuZ3RoICYmIHRva2Vuc1tpXS50eXBlID09PSB0eXBlKVxuICAgICAgICAgICAgcmV0dXJuIHRva2Vuc1tpKytdLnZhbHVlO1xuICAgIH07XG4gICAgdmFyIG11c3RDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdHJ5Q29uc3VtZSh0eXBlKTtcbiAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIHZhciBfYSA9IHRva2Vuc1tpXSwgbmV4dFR5cGUgPSBfYS50eXBlLCBpbmRleCA9IF9hLmluZGV4O1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5leHBlY3RlZCBcIiArIG5leHRUeXBlICsgXCIgYXQgXCIgKyBpbmRleCArIFwiLCBleHBlY3RlZCBcIiArIHR5cGUpO1xuICAgIH07XG4gICAgdmFyIGNvbnN1bWVUZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gXCJcIjtcbiAgICAgICAgdmFyIHZhbHVlO1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgd2hpbGUgKCh2YWx1ZSA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIikpKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIHdoaWxlIChpIDwgdG9rZW5zLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpO1xuICAgICAgICB2YXIgbmFtZSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpO1xuICAgICAgICB2YXIgcGF0dGVybiA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpO1xuICAgICAgICBpZiAobmFtZSB8fCBwYXR0ZXJuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY2hhciB8fCBcIlwiO1xuICAgICAgICAgICAgaWYgKHByZWZpeGVzLmluZGV4T2YocHJlZml4KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHByZWZpeDtcbiAgICAgICAgICAgICAgICBwcmVmaXggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lIHx8IGtleSsrLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBwYXR0ZXJuIHx8IGRlZmF1bHRQYXR0ZXJuLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdmFsdWUgPSBjaGFyIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIik7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgcGF0aCArPSB2YWx1ZTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvcGVuID0gdHJ5Q29uc3VtZShcIk9QRU5cIik7XG4gICAgICAgIGlmIChvcGVuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIHZhciBuYW1lXzEgPSB0cnlDb25zdW1lKFwiTkFNRVwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm5fMSA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIG11c3RDb25zdW1lKFwiQ0xPU0VcIik7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZV8xIHx8IChwYXR0ZXJuXzEgPyBrZXkrKyA6IFwiXCIpLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IG5hbWVfMSAmJiAhcGF0dGVybl8xID8gZGVmYXVsdFBhdHRlcm4gOiBwYXR0ZXJuXzEsXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBzdWZmaXgsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIG11c3RDb25zdW1lKFwiRU5EXCIpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0cy5wYXJzZSA9IHBhcnNlO1xuLyoqXG4gKiBDb21waWxlIGEgc3RyaW5nIHRvIGEgdGVtcGxhdGUgZnVuY3Rpb24gZm9yIHRoZSBwYXRoLlxuICovXG5mdW5jdGlvbiBjb21waWxlKHN0ciwgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb0Z1bmN0aW9uKHBhcnNlKHN0ciwgb3B0aW9ucyksIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5jb21waWxlID0gY29tcGlsZTtcbi8qKlxuICogRXhwb3NlIGEgbWV0aG9kIGZvciB0cmFuc2Zvcm1pbmcgdG9rZW5zIGludG8gdGhlIHBhdGggZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvRnVuY3Rpb24odG9rZW5zLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgcmVGbGFncyA9IGZsYWdzKG9wdGlvbnMpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYSwgX2IgPSBvcHRpb25zLnZhbGlkYXRlLCB2YWxpZGF0ZSA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2I7XG4gICAgLy8gQ29tcGlsZSBhbGwgdGhlIHRva2VucyBpbnRvIHJlZ2V4cHMuXG4gICAgdmFyIG1hdGNoZXMgPSB0b2tlbnMubWFwKGZ1bmN0aW9uICh0b2tlbikge1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChcIl4oPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikkXCIsIHJlRmxhZ3MpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc1tpXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHZhbHVlID0gZGF0YSA/IGRhdGFbdG9rZW4ubmFtZV0gOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB2YXIgb3B0aW9uYWwgPSB0b2tlbi5tb2RpZmllciA9PT0gXCI/XCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiO1xuICAgICAgICAgICAgdmFyIHJlcGVhdCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIrXCI7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcGVhdCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgYmUgZW1wdHlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdmFsdWUubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUodmFsdWVbal0sIHRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBhbGwgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUoU3RyaW5nKHZhbHVlKSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgdmFyIHR5cGVPZk1lc3NhZ2UgPSByZXBlYXQgPyBcImFuIGFycmF5XCIgOiBcImEgc3RyaW5nXCI7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBiZSBcIiArIHR5cGVPZk1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH07XG59XG5leHBvcnRzLnRva2Vuc1RvRnVuY3Rpb24gPSB0b2tlbnNUb0Z1bmN0aW9uO1xuLyoqXG4gKiBDcmVhdGUgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgc3BlYy5cbiAqL1xuZnVuY3Rpb24gbWF0Y2goc3RyLCBvcHRpb25zKSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICB2YXIgcmUgPSBwYXRoVG9SZWdleHAoc3RyLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLm1hdGNoID0gbWF0Y2g7XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIG91dHB1dC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5kZWNvZGUsIGRlY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hO1xuICAgIHJldHVybiBmdW5jdGlvbiAocGF0aG5hbWUpIHtcbiAgICAgICAgdmFyIG0gPSByZS5leGVjKHBhdGhuYW1lKTtcbiAgICAgICAgaWYgKCFtKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgcGF0aCA9IG1bMF0sIGluZGV4ID0gbS5pbmRleDtcbiAgICAgICAgdmFyIHBhcmFtcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgaWYgKG1baV0gPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJjb250aW51ZVwiO1xuICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbaSAtIDFdO1xuICAgICAgICAgICAgaWYgKGtleS5tb2RpZmllciA9PT0gXCIqXCIgfHwga2V5Lm1vZGlmaWVyID09PSBcIitcIikge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBtW2ldLnNwbGl0KGtleS5wcmVmaXggKyBrZXkuc3VmZml4KS5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWNvZGUodmFsdWUsIGtleSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gZGVjb2RlKG1baV0sIGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgX2xvb3BfMShpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBwYXRoOiBwYXRoLCBpbmRleDogaW5kZXgsIHBhcmFtczogcGFyYW1zIH07XG4gICAgfTtcbn1cbmV4cG9ydHMucmVnZXhwVG9GdW5jdGlvbiA9IHJlZ2V4cFRvRnVuY3Rpb247XG4vKipcbiAqIEVzY2FwZSBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGVzY2FwZVN0cmluZyhzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbLisqPz1eIToke30oKVtcXF18L1xcXFxdKS9nLCBcIlxcXFwkMVwiKTtcbn1cbi8qKlxuICogR2V0IHRoZSBmbGFncyBmb3IgYSByZWdleHAgZnJvbSB0aGUgb3B0aW9ucy5cbiAqL1xuZnVuY3Rpb24gZmxhZ3Mob3B0aW9ucykge1xuICAgIHJldHVybiBvcHRpb25zICYmIG9wdGlvbnMuc2Vuc2l0aXZlID8gXCJcIiA6IFwiaVwiO1xufVxuLyoqXG4gKiBQdWxsIG91dCBrZXlzIGZyb20gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpIHtcbiAgICBpZiAoIWtleXMpXG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIC8vIFVzZSBhIG5lZ2F0aXZlIGxvb2thaGVhZCB0byBtYXRjaCBvbmx5IGNhcHR1cmluZyBncm91cHMuXG4gICAgdmFyIGdyb3VwcyA9IHBhdGguc291cmNlLm1hdGNoKC9cXCgoPyFcXD8pL2cpO1xuICAgIGlmIChncm91cHMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBncm91cHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGtleXMucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogaSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuLyoqXG4gKiBUcmFuc2Zvcm0gYW4gYXJyYXkgaW50byBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlUb1JlZ2V4cChwYXRocywga2V5cywgb3B0aW9ucykge1xuICAgIHZhciBwYXJ0cyA9IHBhdGhzLm1hcChmdW5jdGlvbiAocGF0aCkgeyByZXR1cm4gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpLnNvdXJjZTsgfSk7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoXCIoPzpcIiArIHBhcnRzLmpvaW4oXCJ8XCIpICsgXCIpXCIsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbi8qKlxuICogQ3JlYXRlIGEgcGF0aCByZWdleHAgZnJvbSBzdHJpbmcgaW5wdXQuXG4gKi9cbmZ1bmN0aW9uIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9SZWdleHAocGFyc2UocGF0aCwgb3B0aW9ucyksIGtleXMsIG9wdGlvbnMpO1xufVxuLyoqXG4gKiBFeHBvc2UgYSBmdW5jdGlvbiBmb3IgdGFraW5nIHRva2VucyBhbmQgcmV0dXJuaW5nIGEgUmVnRXhwLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb1JlZ2V4cCh0b2tlbnMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuc3RyaWN0LCBzdHJpY3QgPSBfYSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfYSwgX2IgPSBvcHRpb25zLnN0YXJ0LCBzdGFydCA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2IsIF9jID0gb3B0aW9ucy5lbmQsIGVuZCA9IF9jID09PSB2b2lkIDAgPyB0cnVlIDogX2MsIF9kID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9kID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9kO1xuICAgIHZhciBlbmRzV2l0aCA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZW5kc1dpdGggfHwgXCJcIikgKyBcIl18JFwiO1xuICAgIHZhciBkZWxpbWl0ZXIgPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXVwiO1xuICAgIHZhciByb3V0ZSA9IHN0YXJ0ID8gXCJeXCIgOiBcIlwiO1xuICAgIC8vIEl0ZXJhdGUgb3ZlciB0aGUgdG9rZW5zIGFuZCBjcmVhdGUgb3VyIHJlZ2V4cCBzdHJpbmcuXG4gICAgZm9yICh2YXIgX2kgPSAwLCB0b2tlbnNfMSA9IHRva2VuczsgX2kgPCB0b2tlbnNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zXzFbX2ldO1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5wcmVmaXgpKTtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnN1ZmZpeCkpO1xuICAgICAgICAgICAgaWYgKHRva2VuLnBhdHRlcm4pIHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5cylcbiAgICAgICAgICAgICAgICAgICAga2V5cy5wdXNoKHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAocHJlZml4IHx8IHN1ZmZpeCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1vZCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiA/IFwiP1wiIDogXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIigoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikoPzpcIiArIHN1ZmZpeCArIHByZWZpeCArIFwiKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKSopXCIgKyBzdWZmaXggKyBcIilcIiArIG1vZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGVuZCkge1xuICAgICAgICBpZiAoIXN0cmljdClcbiAgICAgICAgICAgIHJvdXRlICs9IGRlbGltaXRlciArIFwiP1wiO1xuICAgICAgICByb3V0ZSArPSAhb3B0aW9ucy5lbmRzV2l0aCA/IFwiJFwiIDogXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgZW5kVG9rZW4gPSB0b2tlbnNbdG9rZW5zLmxlbmd0aCAtIDFdO1xuICAgICAgICB2YXIgaXNFbmREZWxpbWl0ZWQgPSB0eXBlb2YgZW5kVG9rZW4gPT09IFwic3RyaW5nXCJcbiAgICAgICAgICAgID8gZGVsaW1pdGVyLmluZGV4T2YoZW5kVG9rZW5bZW5kVG9rZW4ubGVuZ3RoIC0gMV0pID4gLTFcbiAgICAgICAgICAgIDogLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICAgICAgZW5kVG9rZW4gPT09IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKCFzdHJpY3QpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBkZWxpbWl0ZXIgKyBcIig/PVwiICsgZW5kc1dpdGggKyBcIikpP1wiO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNFbmREZWxpbWl0ZWQpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD89XCIgKyBkZWxpbWl0ZXIgKyBcInxcIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAocm91dGUsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbmV4cG9ydHMudG9rZW5zVG9SZWdleHAgPSB0b2tlbnNUb1JlZ2V4cDtcbi8qKlxuICogTm9ybWFsaXplIHRoZSBnaXZlbiBwYXRoIHN0cmluZywgcmV0dXJuaW5nIGEgcmVndWxhciBleHByZXNzaW9uLlxuICpcbiAqIEFuIGVtcHR5IGFycmF5IGNhbiBiZSBwYXNzZWQgaW4gZm9yIHRoZSBrZXlzLCB3aGljaCB3aWxsIGhvbGQgdGhlXG4gKiBwbGFjZWhvbGRlciBrZXkgZGVzY3JpcHRpb25zLiBGb3IgZXhhbXBsZSwgdXNpbmcgYC91c2VyLzppZGAsIGBrZXlzYCB3aWxsXG4gKiBjb250YWluIGBbeyBuYW1lOiAnaWQnLCBkZWxpbWl0ZXI6ICcvJywgb3B0aW9uYWw6IGZhbHNlLCByZXBlYXQ6IGZhbHNlIH1dYC5cbiAqL1xuZnVuY3Rpb24gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAocGF0aCBpbnN0YW5jZW9mIFJlZ0V4cClcbiAgICAgICAgcmV0dXJuIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHBhdGgpKVxuICAgICAgICByZXR1cm4gYXJyYXlUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLnBhdGhUb1JlZ2V4cCA9IHBhdGhUb1JlZ2V4cDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLyogZ2xvYmFsIF9fTkVYVF9EQVRBX18gKi9cbi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCxcbiAgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5pbXBvcnQgeyBHb29kUGFnZUNhY2hlLCBTdHlsZVNoZWV0VHVwbGUgfSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcGFnZS1sb2FkZXInXG5pbXBvcnQgeyBkZW5vcm1hbGl6ZVBhZ2VQYXRoIH0gZnJvbSAnLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3V0aWxzL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHJlc29sdmVSZXdyaXRlcyBmcm9tICcuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcblxuaW50ZXJmYWNlIFRyYW5zaXRpb25PcHRpb25zIHtcbiAgc2hhbGxvdz86IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIE5leHRIaXN0b3J5U3RhdGUge1xuICB1cmw6IHN0cmluZ1xuICBhczogc3RyaW5nXG4gIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG59XG5cbnR5cGUgSGlzdG9yeVN0YXRlID0gbnVsbCB8IHsgX19OOiBmYWxzZSB9IHwgKHsgX19OOiB0cnVlIH0gJiBOZXh0SGlzdG9yeVN0YXRlKVxuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgIGNhbmNlbGxlZDogdHJ1ZSxcbiAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gcGF0aCA9PT0gYmFzZVBhdGggfHwgcGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoICsgJy8nKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgLy8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbiAgcmV0dXJuIGJhc2VQYXRoICYmIHBhdGguc3RhcnRzV2l0aCgnLycpXG4gICAgPyBwYXRoID09PSAnLydcbiAgICAgID8gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goYmFzZVBhdGgpXG4gICAgICA6IGJhc2VQYXRoICsgcGF0aFxuICAgIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKSB8fCAnLydcbn1cblxuLyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSkgcmV0dXJuIHRydWVcbiAgdHJ5IHtcbiAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbilcbiAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSlcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbi8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSHJlZihjdXJyZW50UGF0aDogc3RyaW5nLCBocmVmOiBVcmwpOiBzdHJpbmcge1xuICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICBjb25zdCBiYXNlID0gbmV3IFVSTChjdXJyZW50UGF0aCwgJ2h0dHA6Ly9uJylcbiAgY29uc3QgdXJsQXNTdHJpbmcgPVxuICAgIHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiBmb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKVxuICB0cnkge1xuICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gICAgcmV0dXJuIGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW5cbiAgICAgID8gZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKVxuICAgICAgOiBmaW5hbFVybC5ocmVmXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gdXJsQXNTdHJpbmdcbiAgfVxufVxuXG5jb25zdCBQQUdFX0xPQURfRVJST1IgPSBTeW1ib2woJ1BBR0VfTE9BRF9FUlJPUicpXG5leHBvcnQgZnVuY3Rpb24gbWFya0xvYWRpbmdFcnJvcihlcnI6IEVycm9yKTogRXJyb3Ige1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgUEFHRV9MT0FEX0VSUk9SLCB7fSlcbn1cblxuZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlcjogTmV4dFJvdXRlciwgdXJsOiBVcmwsIGFzOiBVcmwpIHtcbiAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gIHJldHVybiB7XG4gICAgdXJsOiBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIHVybCkpLFxuICAgIGFzOiBhcyA/IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgYXMpKSA6IGFzLFxuICB9XG59XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBQcml2YXRlUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogUmVjb3JkPHN0cmluZywgYW55PlxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wcyA9IFBpY2s8UHJpdmF0ZVJvdXRlSW5mbywgJ0NvbXBvbmVudCcgfCAnZXJyJz4gJiB7XG4gIHJvdXRlcjogUm91dGVyXG59ICYgUmVjb3JkPHN0cmluZywgYW55PlxuZXhwb3J0IHR5cGUgQXBwQ29tcG9uZW50ID0gQ29tcG9uZW50VHlwZTxBcHBQcm9wcz5cblxudHlwZSBTdWJzY3JpcHRpb24gPSAoZGF0YTogUHJpdmF0ZVJvdXRlSW5mbywgQXBwOiBBcHBDb21wb25lbnQpID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBOZXh0SGlzdG9yeVN0YXRlKSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9XG4gIHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiZcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeVxuXG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybDogc3RyaW5nLCBhdHRlbXB0czogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgIC8vXG4gICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgIC8vID4gb3B0aW9uLlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAvL1xuICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cyAtIDEpXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcy5qc29uKClcbiAgfSlcbn1cblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZjogc3RyaW5nLCBpc1NlcnZlclJlbmRlcjogYm9vbGVhbikge1xuICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgIC8vIGxvb3AuXG4gICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgbWFya0xvYWRpbmdFcnJvcihlcnIpXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBQcml2YXRlUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgX2luRmxpZ2h0Um91dGU/OiBzdHJpbmdcbiAgX3NoYWxsb3c/OiBib29sZWFuXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXIgPSBtaXR0KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHtcbiAgICAgIGluaXRpYWxQcm9wcyxcbiAgICAgIHBhZ2VMb2FkZXIsXG4gICAgICBBcHAsXG4gICAgICB3cmFwQXBwLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgaW5pdGlhbFN0eWxlU2hlZXRzLFxuICAgICAgZXJyLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgaXNGYWxsYmFjayxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBpbml0aWFsU3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gICAgICBBcHA6IEFwcENvbXBvbmVudFxuICAgICAgd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgfVxuICApIHtcbiAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICB0aGlzLnJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzOiBpbml0aWFsU3R5bGVTaGVldHMsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0ge1xuICAgICAgQ29tcG9uZW50OiBBcHAgYXMgQ29tcG9uZW50VHlwZSxcbiAgICAgIHN0eWxlU2hlZXRzOiBbXG4gICAgICAgIC8qIC9fYXBwIGRvZXMgbm90IG5lZWQgaXRzIHN0eWxlc2hlZXRzIG1hbmFnZWQgKi9cbiAgICAgIF0sXG4gICAgfVxuXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlclxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICB0aGlzLmFzUGF0aCA9XG4gICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICBpc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0ID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgICBnZXRVUkwoKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcblxuICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJ1xuXG4gICAgICAgICAgbGV0IHNjcm9sbERlYm91bmNlVGltZW91dDogdW5kZWZpbmVkIHwgTm9kZUpTLlRpbWVvdXRcblxuICAgICAgICAgIGNvbnN0IGRlYm91bmNlZFNjcm9sbFNhdmUgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KSBjbGVhclRpbWVvdXQoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KVxuXG4gICAgICAgICAgICBzY3JvbGxEZWJvdW5jZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgeyB1cmwsIGFzOiBjdXJBcywgb3B0aW9ucyB9ID0gaGlzdG9yeS5zdGF0ZVxuICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBjdXJBcyxcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgICBfTl9YOiB3aW5kb3cuc2Nyb2xsWCxcbiAgICAgICAgICAgICAgICAgIF9OX1k6IHdpbmRvdy5zY3JvbGxZLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0sIDEwKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBkZWJvdW5jZWRTY3JvbGxTYXZlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlIGFzIEhpc3RvcnlTdGF0ZVxuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMgfSA9IHN0YXRlXG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmICh0aGlzLmlzU3NyICYmIGFzID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2UoXG4gICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgIHVybCxcbiAgICAgIGFzLFxuICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcbiAgICAgIH0pXG4gICAgKVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBhc3luYyBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZVxuICAgIH1cbiAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgaWYgKFNUKSB7XG4gICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUpXG4gICAgfVxuXG4gICAgY29uc3QgY2xlYW5lZEFzID0gaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXNcbiAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXNcblxuICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSkge1xuICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXNcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMpXG4gICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpXG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0pXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4gICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4gICAgLy8gd2hlbiByZXdyaXR0ZW4gdG9cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG4gICAgY29uc3QgeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLnByb21pc2VkQnVpbGRNYW5pZmVzdFxuXG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUsIHNlYXJjaFBhcmFtcyB9ID0gcGFyc2VkXG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKVxuXG4gICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgIHBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgID8gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUpKVxuICAgICAgOiBwYXRobmFtZVxuXG4gICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykpIHtcbiAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuXG4gICAgLy8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbiAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG4gICAgbGV0IHJlc29sdmVkQXMgPSBhc1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMpIHtcbiAgICAgIHJlc29sdmVkQXMgPSByZXNvbHZlUmV3cml0ZXMoXG4gICAgICAgIGFzLFxuICAgICAgICBwYWdlcyxcbiAgICAgICAgYmFzZVBhdGgsXG4gICAgICAgIHJld3JpdGVzLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgKHA6IHN0cmluZykgPT4gdGhpcy5fcmVzb2x2ZUhyZWYoeyBwYXRobmFtZTogcCB9LCBwYWdlcykucGF0aG5hbWUhXG4gICAgICApXG4gICAgfVxuICAgIHJlc29sdmVkQXMgPSBkZWxCYXNlUGF0aChyZXNvbHZlZEFzKVxuXG4gICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgY29uc3QgeyBwYXRobmFtZTogYXNQYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybChyZXNvbHZlZEFzKVxuICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICBjb25zdCByb3V0ZU1hdGNoID0gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpXG4gICAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgKHBhcmFtKSA9PiAhcXVlcnlbcGFyYW1dXG4gICAgICAgIClcblxuICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgIGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGAgK1xuICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbmNvbXBhdGlibGUtaHJlZi1hc2BcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICB9XG4gICAgfVxuXG4gICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMpXG5cbiAgICB0cnkge1xuICAgICAgY29uc3Qgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICBzaGFsbG93XG4gICAgICApXG4gICAgICBsZXQgeyBlcnJvciB9ID0gcm91dGVJbmZvXG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgIH1cblxuICAgICAgYXdhaXQgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lISwgcXVlcnksIGNsZWFuZWRBcywgcm91dGVJbmZvKS5jYXRjaChcbiAgICAgICAgKGUpID0+IHtcbiAgICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZVxuICAgICAgICAgIGVsc2UgdGhyb3cgZVxuICAgICAgICB9XG4gICAgICApXG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzKVxuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gJiYgJ19OX1gnIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oKG9wdGlvbnMgYXMgYW55KS5fTl9YLCAob3B0aW9ucyBhcyBhbnkpLl9OX1kpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICB9IGFzIEhpc3RvcnlTdGF0ZSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cblxuICAgIGlmIChQQUdFX0xPQURfRVJST1IgaW4gZXJyIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMpXG5cbiAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgcGFnZTogQ29tcG9uZW50LCBzdHlsZVNoZWV0cyB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChcbiAgICAgICAgJy9fZXJyb3InXG4gICAgICApXG4gICAgICBjb25zdCByb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHMsXG4gICAgICAgIGVycixcbiAgICAgICAgZXJyb3I6IGVycixcbiAgICAgIH1cblxuICAgICAgdHJ5IHtcbiAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgZXJyLFxuICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICB9IGFzIGFueSlcbiAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpXG4gICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgdHJ1ZSlcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBzaGFsbG93OiBib29sZWFuID0gZmFsc2VcbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cblxuICAgICAgaWYgKHNoYWxsb3cgJiYgY2FjaGVkUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBjYWNoZWRSb3V0ZUluZm9cbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgID8gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKSA9PiAoe1xuICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgIHN0eWxlU2hlZXRzOiByZXMuc3R5bGVTaGVldHMsXG4gICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgfSkpXG5cbiAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGRhdGFIcmVmOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICBkZWxCYXNlUGF0aChhcyksXG4gICAgICAgICAgX19OX1NTR1xuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YTxQcml2YXRlUm91dGVJbmZvPigoKSA9PlxuICAgICAgICBfX05fU1NHXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICApXG4gICAgICApXG4gICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzKVxuICAgIH1cbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mb1xuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIF9yZXNvbHZlSHJlZihwYXJzZWRIcmVmOiBVcmxPYmplY3QsIHBhZ2VzOiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZEhyZWZcbiAgICBjb25zdCBjbGVhblBhdGhuYW1lID0gZGVub3JtYWxpemVQYWdlUGF0aChkZWxCYXNlUGF0aChwYXRobmFtZSEpKVxuXG4gICAgaWYgKGNsZWFuUGF0aG5hbWUgPT09ICcvNDA0JyB8fCBjbGVhblBhdGhuYW1lID09PSAnL19lcnJvcicpIHtcbiAgICAgIHJldHVybiBwYXJzZWRIcmVmXG4gICAgfVxuXG4gICAgLy8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuICAgIGlmICghcGFnZXMuaW5jbHVkZXMoY2xlYW5QYXRobmFtZSEpKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICBwYWdlcy5zb21lKChwYWdlKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBpc0R5bmFtaWNSb3V0ZShwYWdlKSAmJlxuICAgICAgICAgIGdldFJvdXRlUmVnZXgocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lISlcbiAgICAgICAgKSB7XG4gICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhZ2UpXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIGFzeW5jIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRcblxuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnBhZ2VMb2FkZXIucHJlZmV0Y2hEYXRhKHVybCwgYXNQYXRoKSxcbiAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICBdKVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8R29vZFBhZ2VDYWNoZT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW2NhY2hlS2V5XSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pXG4gICAgfVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcilcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHAgYXMgQXBwQ29tcG9uZW50KVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSwgYXMpXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50IGFzIEFwcENvbXBvbmVudClcbiAgfVxufVxuIiwiLy8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCAqIGFzIHF1ZXJ5c3RyaW5nIGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHMgPSAvaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS9cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmo6IFVybE9iamVjdCkge1xuICBsZXQgeyBhdXRoLCBob3N0bmFtZSB9ID0gdXJsT2JqXG4gIGxldCBwcm90b2NvbCA9IHVybE9iai5wcm90b2NvbCB8fCAnJ1xuICBsZXQgcGF0aG5hbWUgPSB1cmxPYmoucGF0aG5hbWUgfHwgJydcbiAgbGV0IGhhc2ggPSB1cmxPYmouaGFzaCB8fCAnJ1xuICBsZXQgcXVlcnkgPSB1cmxPYmoucXVlcnkgfHwgJydcbiAgbGV0IGhvc3Q6IHN0cmluZyB8IGZhbHNlID0gZmFsc2VcblxuICBhdXRoID0gYXV0aCA/IGVuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwgJzonKSArICdAJyA6ICcnXG5cbiAgaWYgKHVybE9iai5ob3N0KSB7XG4gICAgaG9zdCA9IGF1dGggKyB1cmxPYmouaG9zdFxuICB9IGVsc2UgaWYgKGhvc3RuYW1lKSB7XG4gICAgaG9zdCA9IGF1dGggKyAofmhvc3RuYW1lLmluZGV4T2YoJzonKSA/IGBbJHtob3N0bmFtZX1dYCA6IGhvc3RuYW1lKVxuICAgIGlmICh1cmxPYmoucG9ydCkge1xuICAgICAgaG9zdCArPSAnOicgKyB1cmxPYmoucG9ydFxuICAgIH1cbiAgfVxuXG4gIGlmIChxdWVyeSAmJiB0eXBlb2YgcXVlcnkgPT09ICdvYmplY3QnKSB7XG4gICAgcXVlcnkgPSBTdHJpbmcocXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhxdWVyeSBhcyBQYXJzZWRVcmxRdWVyeSkpXG4gIH1cblxuICBsZXQgc2VhcmNoID0gdXJsT2JqLnNlYXJjaCB8fCAocXVlcnkgJiYgYD8ke3F1ZXJ5fWApIHx8ICcnXG5cbiAgaWYgKHByb3RvY29sICYmIHByb3RvY29sLnN1YnN0cigtMSkgIT09ICc6JykgcHJvdG9jb2wgKz0gJzonXG5cbiAgaWYgKFxuICAgIHVybE9iai5zbGFzaGVzIHx8XG4gICAgKCghcHJvdG9jb2wgfHwgc2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkgJiYgaG9zdCAhPT0gZmFsc2UpXG4gICkge1xuICAgIGhvc3QgPSAnLy8nICsgKGhvc3QgfHwgJycpXG4gICAgaWYgKHBhdGhuYW1lICYmIHBhdGhuYW1lWzBdICE9PSAnLycpIHBhdGhuYW1lID0gJy8nICsgcGF0aG5hbWVcbiAgfSBlbHNlIGlmICghaG9zdCkge1xuICAgIGhvc3QgPSAnJ1xuICB9XG5cbiAgaWYgKGhhc2ggJiYgaGFzaFswXSAhPT0gJyMnKSBoYXNoID0gJyMnICsgaGFzaFxuICBpZiAoc2VhcmNoICYmIHNlYXJjaFswXSAhPT0gJz8nKSBzZWFyY2ggPSAnPycgKyBzZWFyY2hcblxuICBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZywgZW5jb2RlVVJJQ29tcG9uZW50KVxuICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnIycsICclMjMnKVxuXG4gIHJldHVybiBgJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YFxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRMb2NhdGlvbk9yaWdpbiB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5jb25zdCBEVU1NWV9CQVNFID0gbmV3IFVSTChcbiAgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyAnaHR0cDovL24nIDogZ2V0TG9jYXRpb25PcmlnaW4oKVxuKVxuXG4vKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybDogc3RyaW5nLCBiYXNlPzogc3RyaW5nKSB7XG4gIGNvbnN0IHJlc29sdmVkQmFzZSA9IGJhc2UgPyBuZXcgVVJMKGJhc2UsIERVTU1ZX0JBU0UpIDogRFVNTVlfQkFTRVxuICBjb25zdCB7XG4gICAgcGF0aG5hbWUsXG4gICAgc2VhcmNoUGFyYW1zLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWYsXG4gICAgb3JpZ2luLFxuICAgIHByb3RvY29sLFxuICB9ID0gbmV3IFVSTCh1cmwsIHJlc29sdmVkQmFzZSlcbiAgaWYgKFxuICAgIG9yaWdpbiAhPT0gRFVNTVlfQkFTRS5vcmlnaW4gfHxcbiAgICAocHJvdG9jb2wgIT09ICdodHRwOicgJiYgcHJvdG9jb2wgIT09ICdodHRwczonKVxuICApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwnKVxuICB9XG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgc2VhcmNoUGFyYW1zLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWY6IGhyZWYuc2xpY2UoRFVNTVlfQkFTRS5vcmlnaW4ubGVuZ3RoKSxcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxuZXhwb3J0IHsgcGF0aFRvUmVnZXhwIH1cblxuZXhwb3J0IGNvbnN0IG1hdGNoZXJPcHRpb25zID0ge1xuICBzZW5zaXRpdmU6IGZhbHNlLFxuICBkZWxpbWl0ZXI6ICcvJyxcbiAgZGVjb2RlOiBkZWNvZGVQYXJhbSxcbn1cblxuZXhwb3J0IGNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMgPSB7XG4gIC4uLm1hdGNoZXJPcHRpb25zLFxuICBzdHJpY3Q6IHRydWUsXG59XG5cbmV4cG9ydCBkZWZhdWx0IChjdXN0b21Sb3V0ZSA9IGZhbHNlKSA9PiB7XG4gIHJldHVybiAocGF0aDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3Qga2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgICBjb25zdCBtYXRjaGVyUmVnZXggPSBwYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKFxuICAgICAgcGF0aCxcbiAgICAgIGtleXMsXG4gICAgICBjdXN0b21Sb3V0ZSA/IGN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMgOiBtYXRjaGVyT3B0aW9uc1xuICAgIClcbiAgICBjb25zdCBtYXRjaGVyID0gcGF0aFRvUmVnZXhwLnJlZ2V4cFRvRnVuY3Rpb24oXG4gICAgICBtYXRjaGVyUmVnZXgsXG4gICAgICBrZXlzLFxuICAgICAgbWF0Y2hlck9wdGlvbnNcbiAgICApXG5cbiAgICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkLCBwYXJhbXM/OiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IHJlcyA9IHBhdGhuYW1lID09IG51bGwgPyBmYWxzZSA6IG1hdGNoZXIocGF0aG5hbWUpXG4gICAgICBpZiAoIXJlcykge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cblxuICAgICAgaWYgKGN1c3RvbVJvdXRlKSB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgICAgICAvLyB1bm5hbWVkIHBhcmFtcyBzaG91bGQgYmUgcmVtb3ZlZCBhcyB0aGV5XG4gICAgICAgICAgLy8gYXJlIG5vdCBhbGxvd2VkIHRvIGJlIHVzZWQgaW4gdGhlIGRlc3RpbmF0aW9uXG4gICAgICAgICAgaWYgKHR5cGVvZiBrZXkubmFtZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGRlbGV0ZSAocmVzLnBhcmFtcyBhcyBhbnkpW2tleS5uYW1lXVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4geyAuLi5wYXJhbXMsIC4uLnJlcy5wYXJhbXMgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBkZWNvZGVQYXJhbShwYXJhbTogc3RyaW5nKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgfSBjYXRjaCAoXykge1xuICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcignZmFpbGVkIHRvIGRlY29kZSBwYXJhbScpXG4gICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICB0aHJvdyBlcnJcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxudHlwZSBQYXJhbXMgPSB7IFtwYXJhbTogc3RyaW5nXTogYW55IH1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJlcGFyZURlc3RpbmF0aW9uKFxuICBkZXN0aW5hdGlvbjogc3RyaW5nLFxuICBwYXJhbXM6IFBhcmFtcyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICBhcHBlbmRQYXJhbXNUb1F1ZXJ5OiBib29sZWFuLFxuICBiYXNlUGF0aDogc3RyaW5nXG4pIHtcbiAgbGV0IHBhcnNlZERlc3RpbmF0aW9uOiB7XG4gICAgcXVlcnk/OiBQYXJzZWRVcmxRdWVyeVxuICAgIHByb3RvY29sPzogc3RyaW5nXG4gICAgaG9zdG5hbWU/OiBzdHJpbmdcbiAgICBwb3J0Pzogc3RyaW5nXG4gIH0gJiBSZXR1cm5UeXBlPHR5cGVvZiBwYXJzZVJlbGF0aXZlVXJsPiA9IHt9IGFzIGFueVxuXG4gIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICBwYXJzZWREZXN0aW5hdGlvbiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gIH0gZWxzZSB7XG4gICAgY29uc3Qge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBzZWFyY2hQYXJhbXMsXG4gICAgICBoYXNoLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH0gPSBuZXcgVVJMKGRlc3RpbmF0aW9uKVxuXG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHNlYXJjaFBhcmFtcyxcbiAgICAgIGhhc2gsXG4gICAgICBwcm90b2NvbCxcbiAgICAgIGhvc3RuYW1lLFxuICAgICAgcG9ydCxcbiAgICAgIHNlYXJjaCxcbiAgICAgIGhyZWYsXG4gICAgfVxuICB9XG5cbiAgcGFyc2VkRGVzdGluYXRpb24ucXVlcnkgPSBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KFxuICAgIHBhcnNlZERlc3RpbmF0aW9uLnNlYXJjaFBhcmFtc1xuICApXG4gIGNvbnN0IGRlc3RRdWVyeSA9IHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5XG4gIGNvbnN0IGRlc3RQYXRoID0gYCR7cGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhfSR7XG4gICAgcGFyc2VkRGVzdGluYXRpb24uaGFzaCB8fCAnJ1xuICB9YFxuICBjb25zdCBkZXN0UGF0aFBhcmFtS2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgcGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChkZXN0UGF0aCwgZGVzdFBhdGhQYXJhbUtleXMpXG5cbiAgY29uc3QgZGVzdFBhdGhQYXJhbXMgPSBkZXN0UGF0aFBhcmFtS2V5cy5tYXAoKGtleSkgPT4ga2V5Lm5hbWUpXG5cbiAgbGV0IGRlc3RpbmF0aW9uQ29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZShcbiAgICBkZXN0UGF0aCxcbiAgICAvLyB3ZSBkb24ndCB2YWxpZGF0ZSB3aGlsZSBjb21waWxpbmcgdGhlIGRlc3RpbmF0aW9uIHNpbmNlIHdlIHNob3VsZFxuICAgIC8vIGhhdmUgYWxyZWFkeSB2YWxpZGF0ZWQgYmVmb3JlIHdlIGdvdCB0byB0aGlzIHBvaW50IGFuZCB2YWxpZGF0aW5nXG4gICAgLy8gYnJlYWtzIGNvbXBpbGluZyBkZXN0aW5hdGlvbnMgd2l0aCBuYW1lZCBwYXR0ZXJuIHBhcmFtcyBmcm9tIHRoZSBzb3VyY2VcbiAgICAvLyBlLmcuIC9zb21ldGhpbmc6aGVsbG8oLiopIC0+IC9hbm90aGVyLzpoZWxsbyBpcyBicm9rZW4gd2l0aCB2YWxpZGF0aW9uXG4gICAgLy8gc2luY2UgY29tcGlsZSB2YWxpZGF0aW9uIGlzIG1lYW50IGZvciByZXZlcnNpbmcgYW5kIG5vdCBmb3IgaW5zZXJ0aW5nXG4gICAgLy8gcGFyYW1zIGZyb20gYSBzZXBhcmF0ZSBwYXRoLXJlZ2V4IGludG8gYW5vdGhlclxuICAgIHsgdmFsaWRhdGU6IGZhbHNlIH1cbiAgKVxuICBsZXQgbmV3VXJsXG5cbiAgLy8gdXBkYXRlIGFueSBwYXJhbXMgaW4gcXVlcnkgdmFsdWVzXG4gIGZvciAoY29uc3QgW2tleSwgc3RyT3JBcnJheV0gb2YgT2JqZWN0LmVudHJpZXMoZGVzdFF1ZXJ5KSkge1xuICAgIGxldCB2YWx1ZSA9IEFycmF5LmlzQXJyYXkoc3RyT3JBcnJheSkgPyBzdHJPckFycmF5WzBdIDogc3RyT3JBcnJheVxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgLy8gdGhlIHZhbHVlIG5lZWRzIHRvIHN0YXJ0IHdpdGggYSBmb3J3YXJkLXNsYXNoIHRvIGJlIGNvbXBpbGVkXG4gICAgICAvLyBjb3JyZWN0bHlcbiAgICAgIHZhbHVlID0gYC8ke3ZhbHVlfWBcbiAgICAgIGNvbnN0IHF1ZXJ5Q29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZSh2YWx1ZSwgeyB2YWxpZGF0ZTogZmFsc2UgfSlcbiAgICAgIHZhbHVlID0gcXVlcnlDb21waWxlcihwYXJhbXMpLnN1YnN0cigxKVxuICAgIH1cbiAgICBkZXN0UXVlcnlba2V5XSA9IHZhbHVlXG4gIH1cblxuICAvLyBhZGQgcGF0aCBwYXJhbXMgdG8gcXVlcnkgaWYgaXQncyBub3QgYSByZWRpcmVjdCBhbmQgbm90XG4gIC8vIGFscmVhZHkgZGVmaW5lZCBpbiBkZXN0aW5hdGlvbiBxdWVyeSBvciBwYXRoXG4gIGNvbnN0IHBhcmFtS2V5cyA9IE9iamVjdC5rZXlzKHBhcmFtcylcblxuICBpZiAoXG4gICAgYXBwZW5kUGFyYW1zVG9RdWVyeSAmJlxuICAgICFwYXJhbUtleXMuc29tZSgoa2V5KSA9PiBkZXN0UGF0aFBhcmFtcy5pbmNsdWRlcyhrZXkpKVxuICApIHtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBwYXJhbUtleXMpIHtcbiAgICAgIGlmICghKGtleSBpbiBkZXN0UXVlcnkpKSB7XG4gICAgICAgIGRlc3RRdWVyeVtrZXldID0gcGFyYW1zW2tleV1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBzaG91bGRBZGRCYXNlUGF0aCA9IGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSAmJiBiYXNlUGF0aFxuXG4gIHRyeSB7XG4gICAgbmV3VXJsID0gYCR7c2hvdWxkQWRkQmFzZVBhdGggPyBiYXNlUGF0aCA6ICcnfSR7ZW5jb2RlVVJJKFxuICAgICAgZGVzdGluYXRpb25Db21waWxlcihwYXJhbXMpXG4gICAgKX1gXG5cbiAgICBjb25zdCBbcGF0aG5hbWUsIGhhc2hdID0gbmV3VXJsLnNwbGl0KCcjJylcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgcGFyc2VkRGVzdGluYXRpb24uaGFzaCA9IGAke2hhc2ggPyAnIycgOiAnJ30ke2hhc2ggfHwgJyd9YFxuICAgIGRlbGV0ZSBwYXJzZWREZXN0aW5hdGlvbi5zZWFyY2hcbiAgICBkZWxldGUgcGFyc2VkRGVzdGluYXRpb24uc2VhcmNoUGFyYW1zXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGlmIChlcnIubWVzc2FnZS5tYXRjaCgvRXhwZWN0ZWQgLio/IHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXkvKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgVG8gdXNlIGEgbXVsdGktbWF0Y2ggaW4gdGhlIGRlc3RpbmF0aW9uIHlvdSBtdXN0IGFkZCBcXGAqXFxgIGF0IHRoZSBlbmQgb2YgdGhlIHBhcmFtIG5hbWUgdG8gc2lnbmlmeSBpdCBzaG91bGQgcmVwZWF0LiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLW11bHRpLW1hdGNoYFxuICAgICAgKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfVxuXG4gIC8vIFF1ZXJ5IG1lcmdlIG9yZGVyIGxvd2VzdCBwcmlvcml0eSB0byBoaWdoZXN0XG4gIC8vIDEuIGluaXRpYWwgVVJMIHF1ZXJ5IHZhbHVlc1xuICAvLyAyLiBwYXRoIHNlZ21lbnQgdmFsdWVzXG4gIC8vIDMuIGRlc3RpbmF0aW9uIHNwZWNpZmllZCBxdWVyeSB2YWx1ZXNcbiAgcGFyc2VkRGVzdGluYXRpb24ucXVlcnkgPSB7XG4gICAgLi4ucXVlcnksXG4gICAgLi4ucGFyc2VkRGVzdGluYXRpb24ucXVlcnksXG4gIH1cblxuICByZXR1cm4ge1xuICAgIG5ld1VybCxcbiAgICBwYXJzZWREZXN0aW5hdGlvbixcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gIHNlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zXG4pOiBQYXJzZWRVcmxRdWVyeSB7XG4gIGNvbnN0IHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG4gIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcXVlcnlba2V5XSA9IHZhbHVlXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICA7KHF1ZXJ5W2tleV0gYXMgc3RyaW5nW10pLnB1c2godmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSBhcyBzdHJpbmcsIHZhbHVlXVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHF1ZXJ5XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKFxuICB1cmxRdWVyeTogUGFyc2VkVXJsUXVlcnlcbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxuICBPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiByZXN1bHQuYXBwZW5kKGtleSwgaXRlbSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5zZXQoa2V5LCB2YWx1ZSlcbiAgICB9XG4gIH0pXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbihcbiAgdGFyZ2V0OiBVUkxTZWFyY2hQYXJhbXMsXG4gIC4uLnNlYXJjaFBhcmFtc0xpc3Q6IFVSTFNlYXJjaFBhcmFtc1tdXG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goKHNlYXJjaFBhcmFtcykgPT4ge1xuICAgIEFycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB0YXJnZXQuZGVsZXRlKGtleSkpXG4gICAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHRhcmdldC5hcHBlbmQoa2V5LCB2YWx1ZSkpXG4gIH0pXG4gIHJldHVybiB0YXJnZXRcbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgcGF0aE1hdGNoIGZyb20gJy4vcGF0aC1tYXRjaCdcbmltcG9ydCBwcmVwYXJlRGVzdGluYXRpb24gZnJvbSAnLi9wcmVwYXJlLWRlc3RpbmF0aW9uJ1xuaW1wb3J0IHsgUmV3cml0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9sb2FkLWN1c3RvbS1yb3V0ZXMnXG5cbmNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlciA9IHBhdGhNYXRjaCh0cnVlKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNvbHZlUmV3cml0ZXMoXG4gIGFzUGF0aDogc3RyaW5nLFxuICBwYWdlczogc3RyaW5nW10sXG4gIGJhc2VQYXRoOiBzdHJpbmcsXG4gIHJld3JpdGVzOiBSZXdyaXRlW10sXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgcmVzb2x2ZUhyZWY6IChwYXRoOiBzdHJpbmcpID0+IHN0cmluZ1xuKSB7XG4gIGlmICghcGFnZXMuaW5jbHVkZXMoYXNQYXRoKSkge1xuICAgIGZvciAoY29uc3QgcmV3cml0ZSBvZiByZXdyaXRlcykge1xuICAgICAgY29uc3QgbWF0Y2hlciA9IGN1c3RvbVJvdXRlTWF0Y2hlcihyZXdyaXRlLnNvdXJjZSlcbiAgICAgIGNvbnN0IHBhcmFtcyA9IG1hdGNoZXIoYXNQYXRoKVxuXG4gICAgICBpZiAocGFyYW1zKSB7XG4gICAgICAgIGlmICghcmV3cml0ZS5kZXN0aW5hdGlvbikge1xuICAgICAgICAgIC8vIHRoaXMgaXMgYSBwcm94aWVkIHJld3JpdGUgd2hpY2ggaXNuJ3QgaGFuZGxlZCBvbiB0aGUgY2xpZW50XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZXN0UmVzID0gcHJlcGFyZURlc3RpbmF0aW9uKFxuICAgICAgICAgIHJld3JpdGUuZGVzdGluYXRpb24sXG4gICAgICAgICAgcGFyYW1zLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIHRydWUsXG4gICAgICAgICAgcmV3cml0ZS5iYXNlUGF0aCA9PT0gZmFsc2UgPyAnJyA6IGJhc2VQYXRoXG4gICAgICAgIClcbiAgICAgICAgYXNQYXRoID0gZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSFcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeSlcblxuICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMoYXNQYXRoKSkge1xuICAgICAgICAgIC8vIGNoZWNrIGlmIHdlIG5vdyBtYXRjaCBhIHBhZ2UgYXMgdGhpcyBtZWFucyB3ZSBhcmUgZG9uZVxuICAgICAgICAgIC8vIHJlc29sdmluZyB0aGUgcmV3cml0ZXNcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY2hlY2sgaWYgd2UgbWF0Y2ggYSBkeW5hbWljLXJvdXRlLCBpZiBzbyB3ZSBicmVhayB0aGUgcmV3cml0ZXMgY2hhaW5cbiAgICAgICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gcmVzb2x2ZUhyZWYoYXNQYXRoKVxuXG4gICAgICAgIGlmIChyZXNvbHZlZEhyZWYgIT09IGFzUGF0aCAmJiBwYWdlcy5pbmNsdWRlcyhyZXNvbHZlZEhyZWYpKSB7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gYXNQYXRoXG59XG4iLCJpbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi9yb3V0ZS1yZWdleCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4OiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRSb3V0ZVJlZ2V4Pikge1xuICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXhcbiAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lISlcbiAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbTogc3RyaW5nKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nXG4gICAgICAgIClcbiAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtczogeyBbcGFyYW1OYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9ID0ge31cblxuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV1cbiAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXVxuICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKChlbnRyeSkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgIDogZGVjb2RlKG0pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcGFyYW1zXG4gIH1cbn1cbiIsImludGVyZmFjZSBHcm91cCB7XG4gIHBvczogbnVtYmVyXG4gIHJlcGVhdDogYm9vbGVhblxuICBvcHRpb25hbDogYm9vbGVhblxufVxuXG4vLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKVxufVxuXG5mdW5jdGlvbiBwYXJzZVBhcmFtZXRlcihwYXJhbTogc3RyaW5nKSB7XG4gIGNvbnN0IG9wdGlvbmFsID0gcGFyYW0uc3RhcnRzV2l0aCgnWycpICYmIHBhcmFtLmVuZHNXaXRoKCddJylcbiAgaWYgKG9wdGlvbmFsKSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgxLCAtMSlcbiAgfVxuICBjb25zdCByZXBlYXQgPSBwYXJhbS5zdGFydHNXaXRoKCcuLi4nKVxuICBpZiAocmVwZWF0KSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgzKVxuICB9XG4gIHJldHVybiB7IGtleTogcGFyYW0sIHJlcGVhdCwgb3B0aW9uYWwgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVSZWdleChcbiAgbm9ybWFsaXplZFJvdXRlOiBzdHJpbmdcbik6IHtcbiAgcmU6IFJlZ0V4cFxuICBuYW1lZFJlZ2V4Pzogc3RyaW5nXG4gIHJvdXRlS2V5cz86IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfVxuICBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfVxufSB7XG4gIGNvbnN0IHNlZ21lbnRzID0gKG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJylcbiAgICAuc2xpY2UoMSlcbiAgICAuc3BsaXQoJy8nKVxuXG4gIGNvbnN0IGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9ID0ge31cbiAgbGV0IGdyb3VwSW5kZXggPSAxXG4gIGNvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgIGdyb3Vwc1trZXldID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0LCBvcHRpb25hbCB9XG4gICAgICAgIHJldHVybiByZXBlYXQgPyAob3B0aW9uYWwgPyAnKD86LyguKz8pKT8nIDogJy8oLis/KScpIDogJy8oW14vXSs/KSdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgfVxuICAgIH0pXG4gICAgLmpvaW4oJycpXG5cbiAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIGxldCByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICBsZXQgcm91dGVLZXlDaGFyTGVuZ3RoID0gMVxuXG4gICAgLy8gYnVpbGRzIGEgbWluaW1hbCByb3V0ZUtleSB1c2luZyBvbmx5IGEteiBhbmQgbWluaW1hbCBudW1iZXIgb2YgY2hhcmFjdGVyc1xuICAgIGNvbnN0IGdldFNhZmVSb3V0ZUtleSA9ICgpID0+IHtcbiAgICAgIGxldCByb3V0ZUtleSA9ICcnXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm91dGVLZXlDaGFyTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcm91dGVLZXkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShyb3V0ZUtleUNoYXJDb2RlKVxuICAgICAgICByb3V0ZUtleUNoYXJDb2RlKytcblxuICAgICAgICBpZiAocm91dGVLZXlDaGFyQ29kZSA+IDEyMikge1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckxlbmd0aCsrXG4gICAgICAgICAgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByb3V0ZUtleVxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlS2V5czogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9ID0ge31cblxuICAgIGxldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgICAgLy8gcmVwbGFjZSBhbnkgbm9uLXdvcmQgY2hhcmFjdGVycyBzaW5jZSB0aGV5IGNhbiBicmVha1xuICAgICAgICAgIC8vIHRoZSBuYW1lZCByZWdleFxuICAgICAgICAgIGxldCBjbGVhbmVkS2V5ID0ga2V5LnJlcGxhY2UoL1xcVy9nLCAnJylcbiAgICAgICAgICBsZXQgaW52YWxpZEtleSA9IGZhbHNlXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiB0aGUga2V5IGlzIHN0aWxsIGludmFsaWQgYW5kIGZhbGxiYWNrIHRvIHVzaW5nIGEga25vd25cbiAgICAgICAgICAvLyBzYWZlIGtleVxuICAgICAgICAgIGlmIChjbGVhbmVkS2V5Lmxlbmd0aCA9PT0gMCB8fCBjbGVhbmVkS2V5Lmxlbmd0aCA+IDMwKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWlzTmFOKHBhcnNlSW50KGNsZWFuZWRLZXkuc3Vic3RyKDAsIDEpKSkpIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGludmFsaWRLZXkpIHtcbiAgICAgICAgICAgIGNsZWFuZWRLZXkgPSBnZXRTYWZlUm91dGVLZXkoKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdXRlS2V5c1tjbGVhbmVkS2V5XSA9IGtleVxuICAgICAgICAgIHJldHVybiByZXBlYXRcbiAgICAgICAgICAgID8gb3B0aW9uYWxcbiAgICAgICAgICAgICAgPyBgKD86Lyg/PCR7Y2xlYW5lZEtleX0+Lis/KSk/YFxuICAgICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT4uKz8pYFxuICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+W14vXSs/KWBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5qb2luKCcnKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgICAgZ3JvdXBzLFxuICAgICAgcm91dGVLZXlzLFxuICAgICAgbmFtZWRSZWdleDogYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgLFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgZ3JvdXBzLFxuICB9XG59XG4iLCJpbXBvcnQgeyBJbmNvbWluZ01lc3NhZ2UsIFNlcnZlclJlc3BvbnNlIH0gZnJvbSAnaHR0cCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBmb3JtYXRVcmwgfSBmcm9tICcuL3JvdXRlci91dGlscy9mb3JtYXQtdXJsJ1xuaW1wb3J0IHsgTWFuaWZlc3RJdGVtIH0gZnJvbSAnLi4vc2VydmVyL2xvYWQtY29tcG9uZW50cydcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICcuLi8uLi9saWIvbG9hZC1lbnYtY29uZmlnJ1xuaW1wb3J0IHsgQnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL3NlcnZlci9nZXQtcGFnZS1maWxlcydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbi8qKlxuICogV2ViIHZpdGFscyBwcm92aWRlZCB0byBfYXBwLnJlcG9ydFdlYlZpdGFscyBieSBDb3JlIFdlYiBWaXRhbHMgcGx1Z2luIGRldmVsb3BlZCBieSBHb29nbGUgQ2hyb21lIHRlYW0uXG4gKiBodHRwczovL25leHRqcy5vcmcvYmxvZy9uZXh0LTktNCNpbnRlZ3JhdGVkLXdlYi12aXRhbHMtcmVwb3J0aW5nXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRXZWJWaXRhbHNNZXRyaWMgPSB7XG4gIGlkOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgc3RhcnRUaW1lOiBudW1iZXJcbiAgdmFsdWU6IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dFBhZ2VDb250ZXh0IHtcbiAgLyoqXG4gICAqIEVycm9yIG9iamVjdCBpZiBlbmNvdW50ZXJlZCBkdXJpbmcgcmVuZGVyaW5nXG4gICAqL1xuICBlcnI/OiAoRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfSkgfCBudWxsXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVxdWVzdCBvYmplY3QuXG4gICAqL1xuICByZXE/OiBJbmNvbWluZ01lc3NhZ2VcbiAgLyoqXG4gICAqIGBIVFRQYCByZXNwb25zZSBvYmplY3QuXG4gICAqL1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICAvKipcbiAgICogUGF0aCBzZWN0aW9uIG9mIGBVUkxgLlxuICAgKi9cbiAgcGF0aG5hbWU6IHN0cmluZ1xuICAvKipcbiAgICogUXVlcnkgc3RyaW5nIHNlY3Rpb24gb2YgYFVSTGAgcGFyc2VkIGFzIGFuIG9iamVjdC5cbiAgICovXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICAvKipcbiAgICogYFN0cmluZ2Agb2YgdGhlIGFjdHVhbCBwYXRoIGluY2x1ZGluZyBxdWVyeS5cbiAgICovXG4gIGFzUGF0aD86IHN0cmluZ1xuICAvKipcbiAgICogYENvbXBvbmVudGAgdGhlIHRyZWUgb2YgdGhlIEFwcCB0byB1c2UgaWYgbmVlZGluZyB0byByZW5kZXIgc2VwYXJhdGVseVxuICAgKi9cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbn1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dFR5cGU8UiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyPiA9IHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQ+XG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG4gIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gIHJvdXRlcjogUlxufVxuXG5leHBvcnQgdHlwZSBBcHBJbml0aWFsUHJvcHMgPSB7XG4gIHBhZ2VQcm9wczogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzVHlwZTxcbiAgUiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyLFxuICBQID0ge31cbj4gPSBBcHBJbml0aWFsUHJvcHMgJiB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0LCBhbnksIFA+XG4gIHJvdXRlcjogUlxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudENvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQgJiB7XG4gIHJlbmRlclBhZ2U6IFJlbmRlclBhZ2Vcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRJbml0aWFsUHJvcHMgPSBSZW5kZXJQYWdlUmVzdWx0ICYge1xuICBzdHlsZXM/OiBSZWFjdC5SZWFjdEVsZW1lbnRbXSB8IFJlYWN0LlJlYWN0RnJhZ21lbnRcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRQcm9wcyA9IERvY3VtZW50SW5pdGlhbFByb3BzICYge1xuICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgZGFuZ2Vyb3VzQXNQYXRoOiBzdHJpbmdcbiAgZG9jQ29tcG9uZW50c1JlbmRlcmVkOiB7XG4gICAgSHRtbD86IGJvb2xlYW5cbiAgICBNYWluPzogYm9vbGVhblxuICAgIEhlYWQ/OiBib29sZWFuXG4gICAgTmV4dFNjcmlwdD86IGJvb2xlYW5cbiAgfVxuICBidWlsZE1hbmlmZXN0OiBCdWlsZE1hbmlmZXN0XG4gIGFtcFBhdGg6IHN0cmluZ1xuICBpbkFtcE1vZGU6IGJvb2xlYW5cbiAgaHlicmlkQW1wOiBib29sZWFuXG4gIGlzRGV2ZWxvcG1lbnQ6IGJvb2xlYW5cbiAgZHluYW1pY0ltcG9ydHM6IE1hbmlmZXN0SXRlbVtdXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIGNhbm9uaWNhbEJhc2U6IHN0cmluZ1xuICBoZWFkVGFnczogYW55W11cbiAgdW5zdGFibGVfcnVudGltZUpTPzogZmFsc2VcbiAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmc6IHN0cmluZ1xufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxuXG4gIHByZXZpZXc/OiBib29sZWFuXG4gIC8qKlxuICAgKiBQcmV2aWV3IGRhdGEgc2V0IG9uIHRoZSByZXF1ZXN0LCBpZiBhbnlcbiAgICogKi9cbiAgcHJldmlld0RhdGE/OiBhbnlcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdCh1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdChzdGF0dXM6IG51bWJlciwgdXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsOiBVcmxPYmplY3QpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VXJsKHVybClcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplUGF0aFNlcD1ub3JtYWxpemVQYXRoU2VwO2V4cG9ydHMuZGVub3JtYWxpemVQYWdlUGF0aD1kZW5vcm1hbGl6ZVBhZ2VQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZVBhdGhTZXAocGF0aCl7cmV0dXJuIHBhdGgucmVwbGFjZSgvXFxcXC9nLCcvJyk7fWZ1bmN0aW9uIGRlbm9ybWFsaXplUGFnZVBhdGgocGFnZSl7cGFnZT1ub3JtYWxpemVQYXRoU2VwKHBhZ2UpO2lmKHBhZ2Uuc3RhcnRzV2l0aCgnL2luZGV4LycpKXtwYWdlPXBhZ2Uuc2xpY2UoNik7fWVsc2UgaWYocGFnZT09PScvaW5kZXgnKXtwYWdlPScvJzt9cmV0dXJuIHBhZ2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9TdWNjZXNzLWJhNjU1Y2M2ZjY1YTRmNGNmNzUwNmYxYmMxMDkzMDhmLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQU13QUFBQXJDQVlBQUFBMFkyZklBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJuUVUxQkFBQ3hqd3Y4WVFVQUFBTjlTVVJCVkhnQjdaMkxkZG93RklhdmV6SUFHOVFibEU1UWR3TkdZSU9TQ1dBRDJBQTJZQVRJQkpBSlRDYUFUcURxNGwrTllzd2pSQVpzL2Q4NWlyR2srSUYxZFIrU1RDS0VSSVl4cHBNa3ljN2J6K3dtdzY3bXoveHlRcUxEQ3NYVXBwVk5XOTJXeWtibUkxMGhKQWEwc2RzMGhOYnc4K2RJRTV0NkovNi9VM1U4SWFTTnFLQkFTNHdrQUo3MnlZU1FObExXRWw4OVZrZ0JKS1Qxd1BkWkNDSGtQRlpZVWlHRUVFTHFSZFZOU0NlSmtDWUM1NzV6b2l4MU94cWJ6bW1ua1ZoQktGcGxZSHFrdkk5STJYYzNNSk16YkVaaVJTTmdpSVIxajVUdngyTDhqRlFJaVpSejdSOVcySDQ2elpQK1NaSmtJNFJFUUhuaXBYSkIrMysxNmUzY2dZZjBiVWliMERsa21IeVp5WlY4TzFIMml1M2VHYUxna0thQ1NMQ08xTTl0V2tzeGhiK1dFM1c4eVdlNUVOSXdJQ3hicElIY0FwejBOaWNqSkRBSUM2ZnlTWnhtTWx3ZlE4aDU0SXFZWU80SWdnSmoramZrM3NCOUdHb0lXQUlBN1hKME1QT2FBK29GenB4L3cxVnA1RjdZdHZjSFBvb3lrUUNZOTRWb3FZUUVramdMZWJHRVhBb0dGUTE4alV3Q1l1cWNZd21KVElXUUc0S3BYWm0wQlkxUUNDRUJhSDIweXJNRDgydERlNFNnSFMxcThTa096NVhmZFNKeTZXWnpqdWVRUzRHNTVkck9Gb1BvdGZrVlhtU3NML2ZHQ3c1a1FzZ0Z3Q3E1YVFNMlRWaE1TU0Vpaldpb2p3RFVyalBYcHZSejRnSW0reGdtRjRYbUV2Q2x1YkVjWlN5azFaaGlxdjNDODA4bTdDdy9DZnljZ1RueDdsdlNEdkNjVjNVNzh0RUN0VDFrTDlRc1RER0ZLaE55V3p6MWJkQXpEZGd6UFNZUWtuN0o1T0t6dWpVdzJkeUQ0SUsyQndVQkhIL3NoT3RKSGhGRTNLWndLTm1qMVF3NnNMUWl2MGN6ckFGQSsydzkwMjNCQnhjTzU0L0FuM1JhWkNTazJlQ2hUdURyOUNyS3FYMnVBSnJEbVZvTCtKR3BSRVFpRVdLS2w3S2xVcnhCNU1XbVpaSWtTNGtjZENTWlRiOTAzMzRuenhYbDZvK3MrYU9wRVlHZTBta2dSNmVpWGpUT3FtZGkvWTlFQ2prZ1NnMVRSZ1hEOXBqclVwNEswRmFLZDFpNWQxbTkySHFOV2xVS2swa0ZYN2MvOExsbjcrT3RWRzhrNy9kS0RYSUVDc3dSSUREcS8yZ0QwNGFtK3p2YmtINlg2bW01VHVYUmh2YlhwbzBVRFc0dE5ZTHIwNVFpNmVkbGhlRFBjUitLRTRqbnVxK1BrRW9RWUZpVm9uUFRpbm85bUQwNUhPYTkwMXhScisrVm42bzNNNGYwajF4ZjF6RFFFWVFuSVY4Q3dZS2ZidjlFMUVoNzl5VStwMTdlSld3cThpWTQzZ1pwVjJWR01aZ1Jsbjhya2oxOGMzNFhxUUFBQUFCSlJVNUVya0pnZ2c9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBTXdBQUFBckNBWUFBQUEwWTJmSUFBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUFOdlNVUkJWSGdCN1ozcmRkcEFFSVdIblB5UFMxaFhFSmVnZE9CVUVGSkJuQXFnZ3lnVlFBZTRBOXdCVGdYZ0NzQVZiR2FzSzdQZUNDeUNIa2k2M3psN0pLUUJDV2xuNTdHNzBraElwWGp2SFZaM285Rm9GKzFMZGZGSnl4V0s4YlZBYmhuL3JzcDhLVGpXV0JjYmZOeW96RVpJclh3VWNqWmFjV2U2U0xTNFlMT3Q3eUxSejhIMm5aeDNURk80V2JUTmxPYTZRQzZSVEtFZWhad0ZGZVlJV3RsdUpLdHNWdEZ0M1duNXJoWHZQaEo5MXZLZzVVbjJ5dkFjLzE2UmxTaWlqSnhaSlQyL2E5a3JxVHNnYXVlOXNCV1Z0NFVwellOKy82ZVFreGtKZVhXallwY0dMdFFQeWR3ZXEyaW1FR25YWEIvOUg0bGtMcUFwanluL2svNkh1MGpHOW4zVDhrZkxJNjBSZWNVcWg1WTdMUXN0VzUrUkZzaGR3YVhwUFJZUEJkZkNZLzFPQ05HS2NJdEtzYmI0QTVYbFJramVtTmoxbU1NeXhmc1RYcXVlWVM0V0xNaFN5NnBnLzJBc1I5WFk5WXdhbTFzaDNRVTMwZ2MzTlJWU0dXaU14cEU3eThibjBqbDBrMHhCWUYyY2tOb3BjczhDcFhKQzJnVSs5QzhHcFpkTEVDTjZ1TVZqV3FHR2dhSnNnd3hPNmhsOFhpeXdNbW5nSWsrRk5BY1Vab0VsVzZzT2dYdm1DcmJ6UHA1THJoaENlaytRYVV1RWxBZHAza25rY2praHZRWDNmQjY0YkxZY0Mza2ZCSVo1Z0pnSUdSUklDbGovemt6SSt5QkFkRUlHRFdPYWdNRHRZbnhDU2hQRU9VNGFvbFhGTFloUGxteEpTQmxRZDZaQm5GTzc0aUFUdTVLMndBa3dQaUgvRFZ6MlhIRnFqWE44MXVtNmJxMVI5OW5vMTBRSU9STW9UdTBWdVJGbGdma2NDeUVONDdzMGJxMGdSdUZ3RmRJWThHRHl2cnVKVkV5bDFpYnc5eGlqa05hQXF6WVBPa0FybWFPRCtIc3BWUUZUU0VVaEZ3R3N6Ym9xTHdlSkJzLzZUVWdKRUc2OGpJelB0MzA0NGNzVHovNFQwa0hnc28zbFJQQ0F4ZCt5ZjFoaXFZTWxRWnpDQ1Z1a2MvaHN3bUVlM3ppcEE1aWo4RUNKRU5KUkVHL25EWC9sMmJSY1lkWUlmT2lLa2M0VFpOUFdRZ2dweDZrR0FObTM1WnZzbStmd2VqSmdqaWtSTEpOL1NSd0VzUXBuT1pKQkVpakU1SWhNbGw2R3VYbVRheVprU01Cb3BGQWFkMERHNHZsWi9zRUpJUVBuV0NhWU9rSUlJWVFRMGpxZTAxWUlLUWVHaDNIVU11a25WWTlNOGRuRE43d1Ewa2ZRSzcrdFFuR0NJZjU4eUNEcEp4aG9tVWJiYkhid0NyTW9wMGY2Vy81NU85MHhlVUo2Q2VLUXBkKy9jakNKOW9mY0gvb2R2bmFjREJLeklwZ2dsbitlQnJ2dHRldUZTdk1YYWRZb2hvYjNyNXdBQUFBQVNVVk9SSzVDWUlJPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2Jhbm5lckJnLTFiMDkzNTI0YmFhNmY4YmQxZjllMjk1ZjI2ZDZlY2U4LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUVBQUFBQkFDQVlBQUFDcWFYSGVBQUFBQkhOQ1NWUUlDQWdJZkFoa2lBQUFBQWx3U0ZsekFBQUIyQUFBQWRnQitseW1jZ0FBQUJsMFJWaDBVMjltZEhkaGNtVUFkM2QzTG1sdWEzTmpZWEJsTG05eVo1dnVQQm9BQUFvbVNVUkJWSGljN1pwOVZGUmxIc2MvOXc0ekRPOE04aUtFaW9BU3ZwV2xwWlpuc2RYZXR5MXhXNjJrc2hjenEzTkt6VHhsZVVxUDFscmF5VElMeTNTMzJGcXRUTXM2aXBxNlpyNEJDb2tJQWlJSUF6UE1NREFEZCtiZS9XT1Fqc3dNampDQ3U4dm5uRGxuN3ZQMisvMis5ejczOXp6UERQVFNTeSs5OU5LTHR3d0JTZ0dEbTA4dUVOSmpuc0Y3SHZ6U0E3TjhaU1FEVUZRcWxhTFJhQlNOUnFPbzFXcEZFQVFGVUlCVVh4bnFCTVhBQlg2cFZLcnpmbVY1NnVUWEdVdXBxYW1NR0RFQ0FMMWV6NUVqUjZpcnErdk1VRDRuUFQwZFFSQm9iR3lrc3JLU2d3Y1BkdGorWWdMb2dEOERBd0YvWUJoQWRYVTFPVGs1QURRMU5kSFUxSFMrL1F0QVR5a1JBWkNibXd1QUpFbFlMSmJ6ZGRjQXkxcS9HNEVEd0s2TERYZzd6am1rL0k5K3RnQmF3VVB3Q1FoQ3ZnQ0I5OTAvblpHamJrUVV4SXNKZHNYalVNRGNKUEZ0VmlaRnYrVUJMUE1rd0ZMZ3BhZWVlNUY1cnl6cFBnKzdBYk9rb3FaYXoxMDN4R08zUzlXZWJtc3F3TzEzVCs1RzE3b0hsYUFRRVJsTlZFd2NRSXduQWRRQUFRR0IzZVpZdHlNNEgvNU9wVUZmc2VUVnVXejhZcjFMZWZ5QUJQNzEvUjQwR3YvTDdrT1BDckI3eHpaTUppUHFnRkJvZlJ2WmJZM2s1eDNsWE9WWitpY2tVbDVhd3BueTAxMnlFeE1UUjNLSyt6VmFqd3B3bmp0ZjM0UEt6M20zOTY1K2xKcVQrd0hRMTV6amoyTlNrV1c1eXpZMmJ0dkh0ZGZkNEZKK1JRaFFzSFVsZ3NycGlrVmYxbGJlSnpLYUo1K1pTM2xwU1pmR2o0cnBTMHJxTUxkMVBTcEFhSmdPZ0tKZG4xNVFMcXBVQkllRUlJcmlaVS9EUGhYQTRYQ1FsM09Jc3RPblVHU1p3VmNQWStpSWtSN2JMMS8xS1FYSGMxeks0K0w3RTlFbnlwZXVlY1JuQWh6WXQ1dVhubi9TNVhFZGRlTk5yRmk5bnJqNC9pNTlFaEtUU1VoTTlwVUxuYUxMQXRRYjY4amFzSllWeXhaaHQwdkV4c1lTSEJ5TUpFbm85WG9PSGRqSGc1TW44ZDJPZ3dTSGhGN1FkL0hDT1d6SzJvRFNic3grVjJvYS9PcnpkYXhkdllLYTZxcTJNbE85RVFCUkZCazdkaXdEQnc0RW5MdkVob1lHOHZMeUtDOHQ0YlBNOTVuOS9JSUx4dnM1KzhlTHBzR3kwOFZVbkNsdDZ5TUtJaU5IajBHckRlaE12QzU0TGNDeVJmUDUrSU4zQUZDcjFRaXRLNm1Ra0JBaUl5TkpUVTBsUER5OHJiMVdxOFZpc1pDVWxJUmVyK2ZuN0I5ZEJEaFBSMmx3NHRnaExtbHc0dTMzc0diOXhrc0kwek5lQ1hDaTRCaHJQMXhKUUVBQWFXbHA2SFM2aS9ZUlJlY3FXNlBSQUdCcE1IdHMyMUVhblBuc1BNcE9Gd05RV2xKRXdmRmNvbUppdkhIYks3d1M0SmU5dTVCbG1VR0RCbmtWUERnUEpNQjVZZ1F3MkUwZTdpZ05ob1NHSW9vaWMxOWVERURCc1J5bXA5OEtRTmI2VEI1NmRCWlhEeG51bFM4ZDRaVUFqWTNPa3hXdFZ1dlZvSXFpWURBWXFLcXFvcWlvQ0VFVW1UN0Q5Vnp5N2ZmWGtYL3NxRXY1VmZFRDBFVkV0bDBYSE1zaFk4cHQxTmNiQ1FzTXdOUmtwYWE2cXZzRWNJZkJZQ0I3eHc1YVd1KzBKd1JCNEtYWDN1UzYwV05kNmdZTVRHTEF3S1FPK3hjY3p5Vmp5bTBZalFibTNuY0hKZWRxMkxUL01EcGRuODY2ZmdHZEVzQnNObE5lWGs2TEpLRUxEVUVYRXV5c3NOdXgySnFwTVpucEV4bk4yUEVUeUhqc2FhNi9ZVnlubkNzdE9VVkcrcTBZalFibVB6S05aZW0zTVdHQjgyZ3ZQS0tIQkpBa0Nadk4xbmI5M0xUSkxKcjVDRWd0VUhXV0wvWWM0SUczMTNEL2c0KzJ6ZC9PMEdocDRLbUgwekVhRFFEVW1jeklkcGxhY3dNQUVUMGxnQzkyWnQ3dzZvdlBVbFJZUU9Md205QlhGSkg1OVZZME5pdTFEUmJVYWcxQndiNzVEZWFLMkEyNm82S3lpcmpFNFV5ZC96RVdZelZyRi82VkQzN0lCaUE2SnRabmRud25nT0pjMExaSWRnRFVyZm0vTTVpYTdLVFAzMENMM1k0Z2lEaFVRZHc4YXgyNzM4L0FacTRsWEJmaEU1ZkJTd0YwcmZQTlpyT2h0QVo2L2owUUdoVGtiTlNhRGZMS0tnQm5LcnRVdG0vYlRFTlRNL1JMUTNMSUNJS0kzYUZRcW04bU1ISUFZYkVwMk15MWpCeDE0eVdQN1FtdkJCaHpVeHFpU3NXSkV5ZG9ibTdHYnJkVFZsYUdLQWhNR25POXMxR2pCYjI1Z1hVNzlxTDJVek4rd2lTdm5URFU2Vms0N3htMmJkbEVpQzZhZVdzUHQ5V1YxelVqT1dUeXQ2Nmd1bkFmU1lOU1dMRG9yVXVMc2dNOG5RcWJCRUVnSk5TNWUwdE1Ic3ljQmE4alNSS0ZoWVVVRnhjanl6S0xaei9HOE9SRWFMUnc5bXdsZDcreEVvT2xrV2tQUDBGTTM3aUxHaTg1ZFpMRkMrZndoMUdEMmJabEV4RjlCekQxeFkvYTZxdnFXekJiSFpRZjJzeko3RXpDd2lQSS9NZG1Ra0xEZkJFNzRQa0plR0hOaG8walltS3ZHZ3BndFRhUmtqcU1lLy95RUY5L3VRR0FRSzAvUnd1TGVPM2REemxaVXNwM0IzTm90RFdqMW1nSWorakRtdmYrNWpLbzNXNm5ycmFHMnBwcWpoNCtRR1ZGT1FBYWJTRGovdlFFdDB5YmcwYnJuRkltcTUxcWs0U3hQSStqWHk1RXBmSmoxZG92NkorUTZMUGdvVzBUNmtweGpiVFA0WENNVy9YT0V0Wjl0QXF6eWVoVHc2S29JaTU1QkNtakpqSDYxZ2NKRFAzOXhkWmlWemhaWmNWaTByUHpuU2xZNjgveDJ0SjN5WGpzNlM3YmJiU0xOTnRGN2hrM2tLcUtVcy92QUp2TktzNmNQcG05dTdlajlnOWc1QzMzMHpkaENHcU5kL3NCZDRpaWlzQ3dQZ1NGUmhBVlB3aHRVS2hMRzBXQjAvcG1tbHRzL0xKMk50YjZjNlJQemZCSjhPN3dLTUFicjh6cHQzZjNkdUtTaHZQQWdrOElqZWg3V1J4b3p4bERNOVptTzBmL3VSQkRXUzZqeDl6TWt1V3JMNXM5VDFNZ1VSVEZVOXFnTU9HWmQzY1FITjQ5QjVUNkJvbUtXaXQ1M3l5bGVNL2ZpWXZ2enpjLzdhZFBaTFJMMjZxelo5ank3VmZJRHNkRnh3MEwwNUUrTlFPMVJ1UDFGSmd0eTdJdzl1N0h1eVY0QmRDYkpBcnlEcE8zK1MxcWl3OFNFUm5GcDFsYjNRWVA4TUhLWlh6KzJVZHU2OXpSTis0cTBpYmU0Vkx1VGdBTk1NTlByZUg2U1E5NGJhQXpPR1FIcDQ0Zkl2ZVg3WlRuWm1PdU9nbkEwQkVqV1pXWjFlRWIzMnExQWpCb3dneUNveEpjNm0wT21VS3pIYVh3SjVUeVg1R2tGcmZqdUJOZ1BCQ2VmTzBmQ0E2UGRGUGROY3hHUGNjUDd1VGs0V3dxOHZmUzBtUnFxeHN5N0JvZW12RTBVNlptb1BMemJwVWVPM1FDa1Vtalhjb2JKSm1pYWh1eW9RU2wvTmUyY2tVUmtHVVppN2tld09yT3lsMEFLYU1tWGxKZ25uRElEazcvbHNOdmg3SXB5ZG1Kb1R3ZlJYSHVLRU5DdzBpNzgxNXVUcHZJK0xSSlBzL3g3VkVBazdtUlQ5NWJRb05UZ04zdVhvTDdnVEhQci80M3VwaCtuVEprcnE4ajc5ZWRuRHFTemRuOHZUUTMrbllONFFzRVFiUW9panlxL1JNZ0FFUDlBNElKajQ2LzVFRVBmTCtPM0o4M2NiWW90KzB1dDNJT2FQTFFyYnVSZ01PS0lyOE1sTFlYSUI0SWllNmYwbmJ1Znlsa1p5M0hhakVSRnB0TTdMQ0oxRmVlNEZ6K0xvREhnYTFkZFB5eTBGNkFDSUNnc000ZE56Mis1R3NFVWFST2pNUGFJcE96OFkydStuZlphUzlBR0lBMjBIV0o2ZzFSL1FZQlVGZGw3WkpUM1VuNzdiQVd3SzhiZnBTOFV2anYvL2RqRitrVm9LY2Q2R24rN3dVUWdDK0I4K3RlTlJEc3A5YWc5dmYrRHdoK2FuL3VtZlZtMi9MNXE4dzNLZHkxQVh1TEZkbmVBbURCdVFDUmdlWDgvdGYxSGtjQWZnQzZlczRzQVRPQmIxcXZsN1pldTJNbDhIb1g3ZlhTU3krOTlOS0xEL2dQYUZnUTlqeDhTRG9BQUFBQVNVVk9SSzVDWUlJPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRUFBQUFCQUNBWUFBQUNxYVhIZUFBQUFCSE5DU1ZRSUNBZ0lmQWhraUFBQUFBbHdTRmx6QUFBQnV3QUFBYnNCT3V6ajRnQUFBQmwwUlZoMFUyOW1kSGRoY21VQWQzZDNMbWx1YTNOallYQmxMbTl5WjV2dVBCb0FBQTZLU1VSQlZIaWM3WnQ1ZkZSVnNzZS9kYnZUbmFTN3M0Y1FRc2hHUXBBUUNBUVRka1IySThwams2ZzR5aE9ONElZTHlxSWZGMFFXZFZSd21WSGU2SE5HSGVjcGJvTUQ4c1JSMUhIQjBYRkVJZkxjUUJFeExOblQzVFYvM0U1SU90MUpCOExrZldiOGZUNzNrNzduMUQybnFtNmRxcnAxVGtSVitYZUcwZFVNZERWK1ZrQlhNOURWK0ZrQlhjMUFWNlBEQ2hDUk0wUmtwNGhrblF5Ry90azRIZ3NZQ2VRQ1F6cVpseTVCVUFXSVNMeUluQ2NpZHIrdWV0L2Z1Z0QwNTRwSVdHY3plVktocWdFdjRFcEFnWmNCVzdQMk5HQVpFTm1zclR1dzAwYy9JdGlZL3grdnRoUVFEM3pzRStwQ3dBWmNDandPdkFiY0Nvd0FMTUREUHJwbkFFdFhDOVVwQ3ZBcEljSDN0a2NCSC9tRTlMOStCeFFDaXdCclZ3dlVxUXJ3S1NHaTBieExpbEwwei9kTzBEMHZUdFgvdm1PbzV1ZkVOQ3JoRVVCT0txT1FlakxHRmQvZ1FTRWlTNEFWWnc5TDVRL0xSMkVrZU0zRkFCeW9xT08waTdheWM4OWhWVWhVMVlNZGNrQWhRRVFNNEEvQU5HQVRNRlZWM1owMWZxc29JQ0xqUk9RR0VibGNSR0l3d3g0M241ZHZybmJiTWRyRVdEdHZQRGFPWis4ZDlaS3FIaFNSREJHNVRrUVdpMGovVHVMeGRtQWFJZ0NUZ1h1Q0Vmcm1ma05FcG9RNnVEVkEyNU9ZYXgvTWtOZGJCUHFrUmlHMjF0WVNHMlhqckRFcE1iN2JwY0E4Mys4eFBvYVBHeUl5QTdqUkZ1WFE0YjljSk84c3ZsOXJEaHhhS0NJZnErcXYvV2dYQWF2TkcvNUhSSWFwNm9mdHpSRW9EeWdCeW9DNXdHK0J6MVhoMDY4T28zWFNpcmkrd1V0bGpXZTM3M1k1TUI4eldpd01XZElBOEZuUVkySVlGTis1VU9MemV6UHNycXZFc0ZrVldDOGlJNXZSbmdtc3NVYll0Vy9wWkZEQ2dlZEVKTDdkZVVMd0FkY0FhODhvU21IanpXTXdFaFN4bTgvc1Axakw1TEp0ZlA3bGtlK3FhOTA5VGtCZS96bmpnUGVBekFHTFNza3VuZGpVOS9VZjMrTGRteDRHT0lDWmpjWWdzbDNBTWZ6V01ub1U1N05qM1ZPVVA3OE5ZQ3N3VVZVOXdlWUtKUlcrRC9qbzViL3NaY0tOVzNubDFlLzRiUGNSL212akhrYjk0bFgrK25rRk5YV2VUU0VJTlVCRXRvakl0eUx5R3hGeEJhR3pBRThCbWIybURHc2hQRUN2S2NQSU9YOHlRQ0x3b29pOGpLb2o3OEt6NkZHY0QwQkIyU3dTKzJjRG5BNnNhcE92dGl4QVJGSXdUZmtselBVMUxBRFpJOEJqd0ZoZ3RhcldCaGduMjJxUkhXNlBPcHMxdndtTVZsV3ZIKzF0d0xMWTNIVEdiRmlHeGRZNnMxYXZsemNXcnVHSGR6OEZvTmZ3UVJUZk9BL3NsaWFhdWtOSDJWeTJRbXQrUENSQXFhbytHVWpHdHI0RmtvRnR3QTFBTm1ZMEtBVWVCRjRCYmdGR1k2NzU4M3ozRzROOEM2eHplOVRwOERIb2pMU0NtVVZlNGpkbkhuQ0ROVEpjaDY2OUlxRHdBR0lZRkM2Zmh6WEMvRXpKSEZ1RTFEUkFzNWRwajNFeC9KWXlNY0tzaXNpandhSlNXMHRnRnRBYk13WS9vYXBlbnhidkFmNEszS1dxZjFiVGhKYjUyaVlDUlg1Q3pRQW05RW1PNE96Q09BQ1dYdHdQaXlHSXNGSkV1dm5vQlBnVllNMWJNRU1pdTdmdHZ5S1RFOGhiTUJPQUR4L2JpTG85U0hWREM1cTRuRFFLeW1ZS3FoSEFCbDlPRWJJQ05nQm5BblA4RW8rNW1GWXh2ckZCVlgvRVRKZExnTGViQ2U4MERMa1hZRTFwT2phN21VUU02QlBMd2prNXFCSk5ZK2d5cldGb1hMOU1zbWFPYTFQNFJtVE5Ha2RjL3l3T2YvMGR1MTU1QStvOTRQYTJwQ2taUlVKZWJ6RFQ5Y3RDVm9DcUhsWFZsd0prWFkyNVExZ0ErcGY5UE83TlhxLzJtSEZxUENOeW83SGF3cHM2YmxuUW4rU0VDSUM1SWpJVGtWVmlNUmk4OUVMRWFCMXVBMEVNb1hENVBBeXJoVTkrdjRtYWlzTklkYjBma1ZCNDFia1lWb3NpM09GYjJ1MHJvQTFzQlQ0QTNtbVRPWkYraHNnaVY0U0YyMmFsWVkrS1JZeGowMFU1d2xoN2JRR0FBRStqR2hYZk41UHFIeXBRYjRoN0ZhcFVmMytRK0FIWnVHdnEyUG5jVnZBb2VGcGFRVlJhTXJublRCSVVGMzZaWkljVm9LcXZxbXFocW43VkR1bDZyNnF4NUt5ZWRJK0x4TzZLYlVVd1ozSWFwdzFKQWxNSi9QaEpPZHV2dXB0M0Z0OGZFaS92My9vb2IxNXhGd2MrK0F3QVQ3M1BCL2dwc0tMOEcyb09IbXE4blMwaVRkRW9VQ3A4d2hDUjg0RFIvVk1qbVRjbWlZallSSHk1ZkN1c1cxTEl3Sm1iYUREWDdoZEFscnUyUGlDdFB4b3Fxd0ZJNkpOQno2SjhlazhZYnM1alBSWU9QWFVOdkxwZ0plcHRzb285Tkt0bWRYcFZXRVNpTFliY0l3SnJ6czBnM09uQ0doNFpsTDV2WmhTTDV1WTIzbVlCNU02ZUVOSmNtZFBIQWxCVGNZVHNTU094Mk1KUWw4MW5UeVlNbTlWYy95YktnTDZxMmhRdVRrWlovSGFQVnhOS2h5VnlhbFlVNFRFSjdUNndiSDQvVXJ1YlN1bzVvb0NrZnRtdHpEZ1Frb3J6U0NyT28rcUhnM3l4NVMyejBlODVFU0ZueHJoR2xZeFMxUmJtMWFrS0VKRUNFUzZMZFZpNWVYb3Y3TkZ4R0piMlY1a2p3c292Rnc4RzROQ2ViL0UydUZ2RjlHREl2L0ljUklSUG45Mk11N1lPcVdsZEt1ZzdleUwyYUtjQzU0akl3T1o5bmFZQVh5THpnQ3JHOG1tcGRJdU54TzZLRHZuNWFXTjdNbmxFTXBYN0R2RFowMzlDR2p4SWZkQnZtQ1pFWjZlU1ZqS0Myc09WZlA3U05qTUMrRDFualF5bjM5d1N3VndjSzV2M2RhWUZ6QU9LQjJVNE9YOWtOOEpqRTJteEdFUEFmVGNVRW02enNQUEpWNmo2L2tkZmV0ditjLzNLcG1PeGgrbG5MNzVHM2RFcXBMYTE5V1NkTVFwWHp5U0FTU0l5cHJHOVV4UWdJdkVXUTlZWUFtdEwwN0U3WFZqdEVSMGVKeXZWeWVLTCt1S3BiK0REOVUrRFZ3TUs0NCtJYnJGa256dEozRFYxZlByc0ZqTVg4TE1Dc1Jqay8rZTB4dHM3RzM5MGxnV3M5SGcxNXNMUlNRek1jQkVSM2I3akM0YkZGNTFDVnFxVGZlLzhqWDF2ZjR6VXVrMkJna0E5SHY1djQrdDQ2MHhGbFcvZWJ2cVFodGJMSnk0M2crajBIZ0JGSWxJQ25aQUhpRWlSd01YeHJqQ1ducDFLZUhROFlyRzAvMkFRaE5zdDNMdDRNQ1VMWCtmRDlVK1ROS2d2UnJXQnV2dzNxRXo4N2Y1bjJQWEVzWEtFMVc3RENHc3QxbC91M01CWFc5OXQzdFFOVHRBQ2ZNV0xCeFc0ZFVZdjRtSWlzVGxEZDN6Qk1HVmtENmFON1VuVi9vTjgrcnMvSW01dlVJZG8rSktlaEQ0WkZDMG81WXg3bHdDZ3RwWXZZZS8yanhyTjZCMWdMZkFzblBnU0tBTUtobWE3bUQwMHdjejRPZ24zWEQrWXlIQUx1MzYvbWFQZjdnL3FFSHROTVdzMFIvYnVKM1ZZQVRhWEEzWGFJYXlsQXVKeTB4czk4a09xZXAycUhvSVRVSUNJSkZrTVdXazFoRFdsR2RnY1VWaWFmZTJkS0hvbFI3THNranc4Ymc4NzFqMWxPc1NhMWc0eEtqT0ZwS0g5cWErczV1dnRPM3pNdFI0dlozclRKM1paOC9ZVHNZQTFIcTg2NTUvZW5WTlNuWVRIdEZ1QTdUQ3VtWnRMYmtZVSt6L1l5VGV2ZjREVXVWdDk2UUhrK09xRzVadTNBd1JjTGoySzhuQ2xKb0hwQUFjMXRoK1hBa1JrRkhCKzl4Z2JpODlNSVR3bUhqR08zL0VGUTVqVllOMlNRZ0ErZXVnWjNEVjFHQUV5eEtUaVBLSXlVL2lwL0dzcTlueGpoa0QvNVNKQ3puK2MzbmpYVkJnNW5oTWlWdUFCZ0JXemVoRWQ1Y0RtaU9yb01DRmo3S2xKekptY1J2V1BoL2o3NHkrQjI0dlUrYjFoRWJMbm1COVE1WnZmTW11REFjSmcrdmhpYkZFT0VDbjE3WG9kbHdWY0JmUWIzVGVhc3d2ak85WHhCY1BhYXd0d09jTFkvZHhXRG4zeERkN0QxWGpxNnZIVU56UmRLYWNQd1JibDRLdnRPNmc5WEltM3FyWkZ2NmUrQVVUSW1EUWNYNDN3QXVoZ0hpQWlLUlpEYnJVWXNIcE9PalpuTkJaYjRQamNtVWhPaU9DV3kvcXphTTBPTmwrNm9sMzY1eTllSHNxdzZkRHhST2dlajFjanJwalVnK3dVQitIUm5lLzRndUh5MGh4Kzgvd2VQdDUxQ09BdzhIMno3bkFnTGNKdUpkNWxaOTlQMVhpOXFzQ3VJTU9WWTFhZ1ExOENJaklCbUprYWIrZWFLU2xFeENTMHFQR2RiRmdNWWYzU1FrUkFoRnJnVkZYTlZkVmM0QnlBSWRrSi9IcmhjS0lqd3dEcUcvc0RYQ1dxdWhOQ1ZJQ0kyRVJZRDdCeWRob3VsNE93eUlBN1d5Y1Z3d2NtY3NIVVRGUkpBbTdyakRGRGZZWFhxOUo3WW40TWt3dmkvaW1PTHhoV1hUMlEyQ2diSWl6MEwyNGNEOXIxQVNLU2JqRmtlWmhWV0hsT09uWm5ERWFZTFNEdEsrL3Y0NUZONVZSVUJpNXE3dDU3eERmbThUT2NHR3RueFJVRHVPejI5d3pnUVJFSnRGOFpNa0p4Z3ZkNXZHcTdmbklLR1VrTzdOR3R5OXNBWC8xUXhkU2J0dUZ0WjdzZFdtemhIUmZtVDg5aXczTmY4UDdmZnlyR0xNUjhBdkQxZ1VvZTNiS0xxcnJRVDlDMHFRRGZ3WU16TTd1RmMvbkVaTUpqRWdpd3ZRYkFsaDNmNFZYbHVsLzBwV3gyZG91K0Y3YnQ1ZXJWSDV5dzRJMHdET0dCcFVNb1BtOHpxcXhTMVdzQnZ0eGZ5WmY3S3h2SjdDS3lXbFd2YjJ1c29Bb1FrUWdSdVY5VldUVW5IWWZUU1Zpa014ZzVIbC9SSWpiYVJub1BSMVA3Qzl2MmN0MWRId0pDcENPSzZxckRvY3JaSmdyN3hURi9laFlQUFZNZWg3bVBTWjhoaVJSTlRxZXlvbzcvZldxM0hqcFFjNTJJOUFIZUF2WUJHMVgxYVBOeDJuS0NTMVUxN2N4QmNZek5pemt1eC9mQ3RyM012T1pOM0I1bHdPRHhkRS9PNlBBWWJXSEZGUU5JakRVVHNiNUY4Y3hmMlo5aEpXbE12Q0NYYTM1MW1zUjFqMVJnS21ZSjdIRVIyU1lpTGNwVkFSVWdJam1HSVlzajdRWjN6RTdEN29yRnNIYnNDTEMvOEwyekN3Z0w2OXhqeExGUk5sWmRiUWFDb3hYMXFDcDFOVlVBZEV0MXN1VHg4YkxnN2hGY2RGc1JBOGVrb0txRGdMZEY1R0VSR1EvQkxXQ2QxNnZXNjB0NjBqUFJnVDBxc09NTGh1YkNEeHc4Z2Q3WkJiaWNKeWR2dUdCcUpzTUhKdkx0cnFOc2YzNHY3b1k2cW85VVVGOVhRN2pEUzcraENSUk42c1g4TzRlU1A3SUhtR2NlNWdPYlJXUjBvSE9DTTRIeGZaSWp1SFJjZHpQajYwRGMydkxXOThlRUw1eEFWdmJBa3lhOHlTK3NYMXFJeFJBMmJkakRrWi9xOFhvOTFOZFVVVmRUUlUzVkVhcVBIa0lNNVpMVncxajIyL0ZjY05PUXhxTEpUVWJMd2NScGlPOUF3N25wUkRxZFdDTWNBYVlOanRmZTI0L2JveFFVVGlTcjk4a1Z2aEg1T1RGY1hwcERiYldiRng3YzNhcmY2L1ZRVzNVVWE1aEJhcDlZVGludWp0VnFLSkFvbUVkZ0d1dEZWc0FoQXE1d1M0ZHkvZm9HTHpXK1NveUlZTFhhV2xtTzI5MkExK3ZCRVdIRmFqbUJiQ2dBUEY2bHN0cU0vK0VPSzJMQWFiUFNPSDFPR2dEYm4vK1dQejMySlY2dlVsZmpWcTlIQlZna3dFYk1VNTMvS2xCTUEvY0NkNnZxN1FBaWNpVndFK2FCMzNMZ0llQ0pkZzlLL3F2ajUvOGE2Mm9HdWhvL0s2Q3JHZWhxL05zcjRCL3ZtQzJRaE9rNlp3QUFBQUJKUlU1RXJrSmdnZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFFQUFBQUJBQ0FZQUFBQ3FhWEhlQUFBQUJITkNTVlFJQ0FnSWZBaGtpQUFBQUFsd1NGbHpBQUFCdXdBQUFic0JPdXpqNGdBQUFCbDBSVmgwVTI5bWRIZGhjbVVBZDNkM0xtbHVhM05qWVhCbExtOXlaNXZ1UEJvQUFBK3hTVVJCVkhpY3ZadDVjRnpGbmNjLy9kNmJlelFqeVRwSHNpemZXQlkyQmh2SFhPRW9DSVp3QkFJa0ZSSkNhbVB1SmNCV2dHSjNzMlNUSWttUjhJZXhBMVEyQyt6Q0FnRVdzMkJqdk1hN1lMTStNR0JqYkloOFc3ZGtIYU81NTczWCs4ZElza2J6bnFRWkNiNVZLdFhyMS8zcjMrLzcrdGY5NjEvM0NDa2xrOFhDdWZNZk42VjV1V21ZOVNiUzU5UWNhSXFLcHFpb2ltTFZKQTNzQTdFTHpQZDM3Zi9zUDZTVTVxUVZLUUJpTWdRMHpwKy9UTmVOOWJwaGxBRm9pb3JQNWJFemVpeDhZQ3JtclI5OTl0bWhncFVwRUFVVDBEQm4vclZwSS8yNmxGSUFPRFVIZnBkbk1yckVGTWtsMi9mdjJUNFpJZm1pSUFJdW1qblQzU0tVazZacGVnRVVJUWg2L0FnaEpxVk1iZERRWC9oK3oxNlBJcHRCZkE3bU91N3EyQWxUNEtjMktJaUFodG56TnFhTTlHVkR6MzYzRjZlcVRZbENQend6eGowcklpT0wyb0IxSU5aUlh2b2VOK3hMVFVsSGd5aUlnSG16WnNkTTAvUUFDQVFsdnFJcFU2aTZ5R0RkajA3YXZRNGp4Um9jaWQreXFxZC9LdnJMZTdacW5ONVlPbVE4Z0tybUxXSk10QTJvOU1adFpRWVE4bUYwMXlIK0dMcWYxWE5kayswdmYrMWQ2ZXRIUG1xS09sa2RjbkNnYzF4M21vYVV2MGVOZk1uYTZoL3hxQ2o0S3hUZ3VMSVM0SVlsWmViaWFxL2lka0RScEw5REJudGE0N3owU1pKSWFzTDJ6QUNlbzd6cUpsWlArejczbkF5UGZGbjJwN1VMRkVYVWQvN2tqZzEyQXZKbXJxWklsZ0lzcnZZcXBoU1VlTDE0WGY0cCtWczYzWmV2T2tPNEF0VzVuZFdWczRmMWZPYVpNbFZWM2tHSTlaWC8rdFRqNHRGSExUOTJmaU5nYmZWRlZ5OTAzZjdFMXR6bFRnTGhoRUhBcFRMZWFpamxZRjJQeWtRWHpxVHE0Zlg2QjlBd09VMXZzcXF5d0JUYW5xTWZyM3ZtY1BIeWc2YUxtNlJKM2FCdUQ1VFhWZW5BUTZNYlRaeUF0YUdmQW1zMU5idU5LV0hqRjJHMk5FV0lwMDJjbXVBYk0zeGN0VENJVThzMlR6Y2xiMzhlWnR1UkNFbGQ0bllvbkQvTHg4b0ZBVlJsYkNwZW1ma3dtOXdYVUZ2aW9TMWc2M00rNEw0dGU3ZTBHS1paTTFKTkJQOWoxV0JpTHJDbTZocVFUMk5CMkxZalVkYnZEeE5QbTFRSEhPaUc1UDFERWRZZkNPZUkyZlRsQU84MURaRFNKYUdBZzJUYVpOT1hBMnhwaXVUVUhZMjA0Z0JBQUthVUdLYjExcUg1OElkczcrNnJ5UzRWZjkvNTQ5dmVzYW8vL2doNHN1cDBGUEh2ZzMwRDROTEU4R05EcFl1a0h1RE1XZzlWQVFjOU1ZT2R4NkkwVnVlR3hVdHFNbVZuMTNtWjV0UG9qdWpzT2hGalVTaFRMZ1I0bldPdkt2RkVtRmMvZVFlZklsaDUzZzlRUnZoYmY4OHhYajdha20yVzRMWE9IOS8ybUoyOHNRT2gxZFhscU93RTZnSGlhWVYzbTBvNDJ1dWh2c3hITkFVMXhSNmNta0lrbW1ML2w5M01tQjZrc256c3lhenJaSXpEeC9wWU1IY2FnUkZMaUVkTEVWTkxLZGE2bWVNL2lGTTVGZlQ5ZWQ1amJCUU5mSHhpTy8zU0NjQ1ZRWk1sWjJWVzVXUXF6b3ZiWHFkRmVvZmJ6RFpQcHU5TmI1MzN2ZHMzSExYVHhkNEYvdExvUk9XMUllTUI5cmI3T2R6anhaUzUvcnAxUnpNZjdtcmh6WTFOakJkZHZ2WHVRZjV2Vnd0YnRoN1BlU2NSOU9ybHRDVnFjdDZsVXYzRHhnTzgzYTl3NHVBSFNDbDViK2RyV2NZSFNQQmk2a1hIOTh4UG4rY3ZqYzRjWVlPd0o2RHo1QytCODBjV05YVjdiU3BEWDM4Q2dHZzBUU3FkOFU4cElaNHljdXIyaDVPWk51R0VyYnl1VkVWT1daR3Zqak44MlY3Nzh2RjIvbmZISyt4T25ScDFDcEs3cWpWbXloNkE4d2R0c1lRMUFhdHJheEhjTzdwWU4rMW42aUovWmloNzNCb09MU08ycFRmS25oTTlSSlA2cUxyT3JQOVdNRzFVV3pML1l1YXEwZUhuQkJwYlk5bHl2bFBocHE1aTFxa0N3YjJzcnEyMWttZmRpMkw4RW5DUExpNXk2UmFWTXpodmVTMW5MYXJpeXN2bW9Bd3VhV25EelBvL2hKV1h6T2JNUlZWY2VPNE1XM2t1SldsWnJpa2EzejVySmNWWXZ6L0hFMmRCNHhXamk5MkROdVVnbDRBMTFRc1IzR0pWdWJFcWFsVU1RRERnNHZ3VjA2bXR6dDBabm93a1NlbW5TQWhWK2JsZ3hYUktpMGR4TEU3TkhWV3VWdHUrZlA1cDNIUmFJeXJaYzgwc0pjcjV5NzVyM1Vod0MydXFGNDR1emlWQThKaGxPVEMvTE1aM0ZuWXh0eXlHVzh2NDl1aXZPeEplVjJidDdocEkwQkdPMjlZYmdrUFJtZWJzWmtIUlBpcGQ3V1BXTFE4MWNuMlZmL2c1U0lxcno3b01oemJHZkpleExRdlpNOHFUb2FVb1hEVld4L1VsQ2VwTEV1enJjbkl5RmlDcG0vaHNBclBLZ0J1M1F5RnRTRXE4OXY0K2hCSm5IeUYveDdqMWhqQ3Y0VEx1cmo1T1Qvc0JhdWRjZ2RNeDdxN3NLcDRNTGVYdTFvK0dDcklKVU9XTlREQS9VdVViWUMrQnJLRTlCRlBLNFFBbDZISGF2aHNOajhOK1ZUaXY4dzMyejFpTUo5cExUYnBudUx3R29LSU13dnV5NmpjMHYyRXRTSlUzQWpZRVNLNngxV0FVeXJ3UlZFV1ExRTJrWkhnRGxFZ2I3RDNSUzhEallHYVpINWNqRTltbGRKT2ozUkY2WTBrYWEwcnd1Yks3ZGlocGdzNEIyLzdtOWUzZzhiNmN5UzEvWkd6OCtkRGpxVWh3YldnQnlQMzV5TnJiR1dKZlJ4RkJqNE5TWCtaTEc2YmtRR3Nma2NHbHorM0k3UGppNmN5YzRYVnFOSVNDYUtNeVNUTURKNmp5ZFJWcVZwNFFEZHpaZWdCR2pnQmhYb3RGaERjV0ZsVzAwaHllUzE4OGpjK2w0ZElVVkVXd3NMYUV0cjRZWFFNSkVpa0RTWWFJTXIrTG1oSWZ4WXN1eEZXN0FORjNISkVNbzJCUzdPc2lKU2FYL0ZYQ1I5QTZkbzVmVVpqWEFnZGc1QWhZVTcwRHdkbjVkaHBKdVhpN2FTYXFFSVNLUFRtNUFGTktrQXpIQmdCbGYvc21Rc0EwM3hTbjAweWQ0aGRQUTZUdGwyc0FKRHU1cTIwNURDMTN6ODUwSTFoV1NKOStaNUp2elQ2T1N6Tm82WXZuVElxS0VGbkdaL3Bud29tUXZLQm90SzE0bXJUZlBzQUNRTENNWjJlNlljZ0ZJdkZxMjZsNUFpaDJ4N2hxM2wvNXFIVTZCM3NreFY0SFFZK2pJRm1HS2Vub0Nsc2VoUWdCRmRPSzBEVDdMVXkwNmtJODFaZFMwdlNuc2JvUlJPTFZ3SkhCT1VBTndlVFBKcGVHVGhCd0JkbmRXbzV1SlBFNkZCUkZ3ZTFRY0NnR3Vta1FTNDN0NTM5NGVndTc5cHl3ZmQ4d3I1Si91di95U2V1YXNYbUlBTlVNVFhUOXQwTnpOTUF6K3hkeDdLVEdHZjVEOU1aVWlyMHV3Qmo4Zzh6QUYrUnVkRTloeFZuMXBIWFRja3N0aEdENWtyckpLVG9FMVF6QmtBdElHU3JFSzhPNmwyMjlDL21nNTNUK2MzZWFjRjhQcDVkRndEOStXenVjZC9Zc3pqdDcxdmdWSndzcFJ4Q0FDRTIwWFYvYXo5WkJvL2VFWjJISWpEOHFXaVpUMnhQUGlEVE1yK3c4YzRvZ3NrWkFzVjB1ZXlEdDVPRnRaL05CU3dYQllERmFjUjJxSTJlbmpNZnJwdzlvaWJwUkZZRnVtT2lHbVJQd3FHbzJNWjhkYU9QRmRSK2pXNFRVNDBGVEJkKzljakZuTFpxZWQxdWtMSVloQW9TdzNJRkVkUmVOejY3RTBIV0tnc1YwUnhTSU5ET3RNb1RibTUwZDhvdzRJRDBVcmFEZTAwRThyVk9rWnU4RlhtaWF4WklSejgxdGZSdysxbDN3QWZqeDFyN0NDQmkwZVhBRTBHWTFCZng4eDhYbzZUUU9wd2N4NHRaSE5OeVhRNERiNnlkWVdrNS9UeGV2TmxYeXd3VTZWZUlrcGlrcGNqdnh1VXpXbjZobGQwdDI4TFB5NGdWY2RPNWNqREcyMVhaUVZRVzNxOEJqZVVrYkRNOEJzdFZxRWp6VTR3WlNLR3EyMHVtMDlSRjkxZlE1UkFmNjBkTXAvdTFBRFI2dGlzWGxVZEpTWVhlNzljejQ0VWRIK2ZQTE93cHlBVlVWM0h6ZFVpNDZadzRBcWQ0V1RtNTRtc1RBQVh5cUE2ZWFIcU8xYklWVExtQ2Zmc2xISVUxajFvSWx0QjFyWXFDL2g3aXVzcjB0a0ZYSDR3dll0SjRjbXA2N2o4TjdQNkhJN2NEME9mbVlScXA4WGRRSG1xMGJETnFjSVVEUldqSHQ4MzJqb1FyN3I2VTVuRXlmczVCSWZ3K3hTRC94YUFRcFRWd2VILzVBQ1VYRjA3THFuN08wbm5PVzFrKzRieXRJUStmb3ZrK1JRTEhYZ1NDVFhtK1BsaFB5ZFZpUEJFVWJRVUJIY3dmbFZVa2dLNlhpZHlTd3lvNTUxUEZ2cWZpRHBmaURwWGtiVXdoNjk3Mkhia2pjRGpVcm9wY0krbE5GbEh0NlJqZEowdEhjQVVQVy9VTHF3T2JSdFdiN3JmZm5Eakh4MGZKMVFKcTVadytuWUxtOGJ4NjBPZXNRN1EyUVU1Qnl5UTlTU282ZTZFRXZjQldvcnkxa2xJbmhmTmtwQXRMR216aVVweWprMnN3azhOcjZ2Ynp5WDU4VzNQNmF5eHE1ZkdaZVRVelN4cHRERDZjSXVMZWpnN1hWTzRBVkJXdFRBSll0bms1NzV3QzZNZFl3dG9hcUtpdy9jd1phTWpNbldXMmdsTndKZXdmM2Rnd0hmcU9qaURmNG1nbW9LQ3RpMlJuVE1ZejhRMEZGRVZSWEJQQjVWK0J4cXNSVEJyb3AwUVlUTUtvd0tISGwzS2JMU2hkbkU2QXBMNUUyL3huQitFbjhLY0s2amZ0NGZjUGVndHRmZVVrRHQ5eXdqSWFWTi9QRnhoZm9Ia2hTNm5jU2RLV285YmRsandCSkNvZnkwc2oyMlFTc2Fqbk9INnZXSXNYUEN0WW9UMXh5L2x5RUl0RDEvRjFBVXhVdStFYm1YbFRGTjIrbDRwdTMwbkwwSUlGOWE2anJlaW0zZ1NMWHNxb2w2MHcrTjVCVzFWK2ptejhCdnBxUWJiUk9Rc0dwcVl4elJjZ1NxcXJrM0V4M2xjK2txTmdQdVN0NEdGWDk5ZWpDWEFKV3RYU3pOdlE3a0wreTZ6aGxLT1I3TlZEQnBNcHhrb1RNYnJucC9TOG41UUlEa1NTMzNEQ1JmSzc0SGF0YXVrZVhXbStsTlBFRXVyd2JxTEo2SFU0NXFUV2E2VmN0ajl4emNGdG9BekxTaWMrcEV2UTRTTHo4R1o2TGZ3WXpHN2o2c29YVVZnY0xqZ09XTEJ3cndUYU1kalR4aE5VTGF3Sld0Y1JZVy8wZzhKeWR4QVBIRTh3dStaVHhrcjkxL2lqcHZuYWNtako4UUJydGFFRnMvajM4emIvUTFSUGw4NysyRjBhQW9oQ3FDT0MzTzUwOWhRZFoxUkt6ZW1HL21iNno3Zm5XZDI1NkVHaXdlaTJCZzczakovOHVyVHlDTk1FN2F0OGU2V3pIaVBheDg1TmpiTjVxZWZGeFF2QjVuY3l1TDdPdklGbkRYVzNQMjcwZU01dndZVXZsZG9oWkVqQlJhSVBMa0ZWNGFlcEpycnRpTVlzV2hBb2FBWnFxTUdjczQyRXozZTFqcm1oakVtQ0lTUjdXVFFDcUlwZy9PL2RDMU9RaG1oQ09HNFkyUFhiNFd1UCtyd3RTYUFsTWNUVjNIT3Nkcis2WUJDaklBd0RTNWxycWhKUVozSTVhRHFYQ3IvbGJRc1M3UWNKQTNkVnJ1THZsaTRtMEdkTUZqdXhlL1VUZEdYZmVuMDdGUXc2bkI4MlJmNFQ4VWRjMHppM3RKNUUyc3M0TFBUNFhZYlVVb3ZsSGdIYVFsQ0NCUk9saW16eFlMc1lrWVBESGpEV3psejh3ejBnbksxUk43WnhWcVpYVWxpcXZOMFZySjNTWWNvQVpYTzV2SXhLSmswZ2J1QjBxcXFZU0RzNUJhZGszdm9CQmVOVWtMc1UreVdrNGc1MnB3UHd2VVpTa1JGay9VYmtGLzI3d3FZZCsrdktHem1VM3hveUp4WVJuRkIzaFRQOUJVbXFBZFcyTEdUQnlEMWZHd2gwejN1SzZxcTFXcjlJSS9vRTcybjZibDhCQlRPcVhvODg5OUlNTHR2V2YvdXFSV0hWNXdVSW1DQXNDSlBBS2h2a0k5M1FVL0l2VFNSRXdoRi9kOTNmM3RDWkxIMjJLMXBSTVdwZ05SaEd3R1NFZTVJN1czWk9WT3lVRURPR0ZSMjYrNTVPQldZL3M3WjlWS2FmNERzanRkVzhaMTRlMi9qZFMrUU4zdHJ3N1ZYS25sSUFoL09QZER5M1VuT243ZWxMQmJ4Mk9WZFhFRFZkQmJIaVVsS3ozdHJlVk9DT2JGTjM0elM5V1B6NmhwUzBmZkNVRWpNUmJqMTd0N1l4UHUvMTRvdUxTbU9HcWladk8wcVRwS0lyb0hzK0E3dFVBaXJTWTd0ZmljWSthQ3J0RXF0ZW5KWnJyM0YyYnl0MDlUMy83RjI5YWJtS21DdjhQSVArcWwyVlh2N0VBQUFBQVNVVk9SSzVDWUlJPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRUFBQUFCQUNBWUFBQUNxYVhIZUFBQUFCSE5DU1ZRSUNBZ0lmQWhraUFBQUFBbHdTRmx6QUFBQllnQUFBV0lCWHlmUVV3QUFBQmwwUlZoMFUyOW1kSGRoY21VQWQzZDNMbWx1YTNOallYQmxMbTl5WjV2dVBCb0FBQThPU1VSQlZIaWN6WnQzZUpSVjlzYy83L1JKSGRJZ2tOQkxrQkpJQ0JpRHRBQWlLb3NVWFhCUlZKWWlvcTZpNkNMcjdncTZ1S0M0b2lDS0tHdkJSckdBc2lBZ0NsSTBVaEppQ0NSQUFpa2tFQ2FaVENhWnViOC9iakpwazJTR1RPTHYrenozbWZlOTk1eDc3em52YmVmY00vRDdRZ0dtQWFjQU0vRDg3OXVkMWtNdzhCRHdLeUFBb2RmSVgyRGM3OW14bGtJZjRCNWdCWEFFc0ZNcGVHd2s0b3RaaUdXM09SWHdUR3QyVE9NQnJRS01CRzRIdWlBN1d3R1VBOXBLR3I4YXp5K0p2N083MjJ2TU9WdkFHelVyaWpUQjZGNHdQUVlHUnNpODlNdk9ZclhuWWx3LzNGVkFMMkFERU85dXhVK05Za2lCRnA5MzcwRzliQ2QwQzRHKzdTQTJVajQzQXVGdUc5NkFPd3JvcHlqc0VZTGdxTGJ3d0kxU0VIM2xkektYZ1YyQVVTdnpERnJ3MVVHRUNYK0FHOXJDQnpOYVVJSm1vaWtGR0JYWUxBVEJNK0xnMlZ2QVh3ZTZWaDJrTFl1bUZEQkhRUGVoWFdISk9Ma0lPRnFqVjYwSVZSUGw5d0VzSENXRkI3QzN2QVphZFExb1RBRUJRSFI0QVBRSnI4NjBPVUMwYkJmLzN5Z2dIRkM2Qk5mSkZWQlM0ZjJPRk51Y2p4YnYxOTR3R2xOQUtiZ2U4dVYyS1BXeUVzNVdud055dkZ0ejQyaElBZUhBVFFBcE9hNlZZSzBBc3czS3ZUQWw3QTdZbGVaODdRVDBhMTZON2tPcDgyNEVYZ0ZtVWVORXRub0szTks3aVlycTF1UUJOaCtIcDdiV3kvNEJtQW1jdWY2YW0wYk5icXVCN2NCWW94Ykc5UWFIZ0cwbm9IMGdmRGtiQWd6ZTcwQkdBVXg5Ung2by9oZ0RPZzE4ZjBaT0NRWHlCTVFCNTczZnNrVE5JODM5d09NZDI4REdHZktMRCtzT2FYbHc4aEljeUlENHptQXllcS94UGFkaDNpZHdwUlFlaklmNXd5Q3VFMHlLaHNzbGtKcUxMeEFKZk9xOVZtdWo1Z2pZQTR4WVBSVUdkNnJPTExIQlh6YkRyMW55QkRpOE8wUzFsVWZlNjBXZUdRNmRnOVJjK1g3UElGZ3dIRlExZW1PcmdEdld3UlVMNVVBSWNPMzZXMndZTlJXUXBWTG9zTzlSME5jNUg1YmJZZmt1K09LRTl6c1Ezd1ZlbmV5NjdJa3RzRit1QUFPQVk5NXZ2ZlpSV0tkVjF4Y2VRS3VHQVIya0FpWWt4bkg3bUtFSTVmb05namFCL2hTWGxQTEFFLy9DcDVHUnBLdnVTd3VzUGhKdSt3TnNkdm5iTDZvVE02ZU9SYXYzYlZiRFNTZFBBOUtTL0QzUmxDM2dSRXJsOGFSYngzWmVhYmhMeDNCVUtvWFUzRmF4THhxRVd3cEl6NGR2VXNESHFHZE1RclJYR2pZRitERjIyR0J5cnNIR3cxNnA4cnJRNkJTdzJHRFhiN0Q2ZXprRm5wMHppWTFiOXJMMzhDa3U1VjNCV21ZakpNaEVmR3dmWG43dTRRYnIrZVRMUGJ6MzZRNXk4Z3Nwc1ZqcEhOR092bEZkZVBqK1NldzltTVRhSDIxY0xvR1pReURVeitzeXVvM2ZGQkQrQnBuODlFNG5wUURFd2xsL0VETW5qNnlWVjVVQy9IMUY2WmxkUW1SOTd6S05IUjdua3E5ZGFKRDRldU5MSXNEUHg1bG4wRmIzUWFOMjBuWnZLYUZyam9DL0NGaGx0dElWVUljR0JSQVpFVURxMld4Q2d3TDQyNEs3K1BIblZQeDlqVXlkTUpxWS9uMEJ1SlJYZ0NuQUQ0TmUxMkFqVzllL3dQbnNYSUpNQWZqNytYQStPNWR0My82QVRxZGwvS2dibVhySFNOWi85RFdkSThLb3NOdTVtRk9JUXhvWXVjQmJRSHByS0dCN1pjclY2N1JoSjdhdndzZW9KelJ1cHBNZ0lUYUtoTmdvVlBvQUZpeFp4WVdMZWJ6eHd1T0VCQVUyMm9qUm9LZEx4M0RtUHIzU3lmUGt2R24xNkY1OTlnRkd4dmRqNHR4LzhkM0JFd0MzMEVMN2Z4WHFMb0phSUN3c09CQWZvNzVCcGwwLy9NS0dqN2V6YS85UlhsNzNzVnNON2R4M3hNbnp5bHVmTkVyYkpTS3M2ckd6VzVVM0EzVVZVQTVjdlpSWFNKbXR2RUdtNk41ZENRa0tSSzFXTWZLbUdMY2FpcjZoZXcyZWdZM1NabVRsVlQwV3VGVjVNK0JxRjloVllYZE1XYmZwZnl5NGQ3eExwZzd0UXNnNCtBbkZsbExhaFFhNTFWQmsrekMzZUpKUFgyRGY0V1FVS0JKdzFLM0ttd0ZYQ2xnT1RGejYrcWZxVGgxQ0c3VHkvWHlOK1BsNlpobzJ4WFA2WEE1UExkK0lYWjZNVmdCV2p4cTREalFrNEh6Z3RhcHlINk9lbkovZWNSWWFmTnVnTlhodnc3NXoxbUsyZnJPL1p0WVh3QlRrbEd4Uk5IUVNmQjBZVCtVS2JDa3RJenUzMEZub2NOUjNDTTUrNnQvMEhYVWZGUlYyWjk0ekw3NUo5NFJwamE0bkFHbG5MMVE5NWdHTGdFbTBndkRRK0ZINEc2UVp1Z1pnKzk2Zm5RVVY1V1gxaUg4N2M1N2t0QXdPLzNvS0FHdVpqWGMvMlVIR2hVdllHbEZBYXZwNVV0SXlRZTcxSFlDWGtMZkhyUUozYklIM0FOWisrQzBWZHRrdlI0VU5lNFd0RnRHMGlhTUJtREo3Q1U4dWZZTVJVeDRoSjcrUTJ4TGo4ZmZ6YWJEeTFlOStYdlg0UHZLMnVWWGhqbEdmRFF3dHZGcmMxV2pRRVQrd0Z5Q25RVTJUT0taZlR5NFhGckgzWUJJSGpwNGtPeWVmdU9nb1BsN3pEM3g5WEp2enY1eElZODZpRllBd0E5T3BkTVczSnR6MTVYWldLVXF5b2lnK243MytKSWszOVFkQTcyTkNaL1N2UlppYWZwNmtrMmxFaEllUkVOY1hsY3IxSUx0bUxpRit3anhTVG1lQ2pCWlpjNzFDTkFlZU9MUG5BR3VEVGY1OHNlNnY5T3ZWRVJUdzhROUZyZlhjWVhQWDNPZjQ5S3M5SUZmOGliaDNKUllNTEFHR0FtMWNsSmNnenc1TGdiUHU5TU50aHdqd0pyQzg0S3FaOFE4K3owKy9wb0dBVXZObDdPV2ViOWRDT0E0Q080QS80Wjd3QWNCaDRGRWdGdWpxSXZWRGVyZVRLdCtiaENjS0FCbS9zNnJJYkdIQzdCZFk5OUZPSEE0SEZ2TmxLbXhOVDkvanA4Nnc0ZU1kRG9mZDhlaG5YKys3Q2JuVm10MXNleDVTcU0rUnUwV1FpeFFHckVRcWE0bUhzbm1FaHhWRnNRSml6TkJvOGV1WEw0dHJ4ejRRcGFuYmhPUEN2bnIrZ0pMVE84V1Q4NllKalZvdGtDRUdIYStqelUzSWtYSmpFM1J0S3VuY3NpS2JjYUZGSDJBakVLUFRhbmp3cnRITW5UYVdicDA3WVBCdGcxcHJvTWhjd29hUHQ3UDg5US9JeVM5RVVSU3pFT0lKcEkzdkNrR0FxWUd5TjRIUndCMUFTaVA5TWdESlFFWWx2U3RjQXk0M1VPWTJ3b0c3Z1V3cXZUbUtvb2pCMFQzRXpNa2p4YmpoTWNLZzE5WDBBTm1RcDd3WTZ0c2dDckFlT1RwY2VvOWFJTzBBOUo2T2dCdUEyY0NZeW1jblJzWDM0K3lGWERLclRWa0MvSHdZZS9NQVB0dHhvRzQ5eFpVZCtBaTVDOFFEK3dNTUVPSUxQbnJRZXJvNmVZQkwxeUJIM2pQTmR2ZGVJQUc1QUk0SEZKVktSWTl1M2VqVnN3Y1hzckpJT25hY2FYY001YTd4Q2FTZnkrSHNoUnphQnB1STZoYUJ0Y3pHWnpzT0VCd1V4QzJqRXptZG5zNnhrOGwrTnB0dEtqQVZlUVJPQWtqb0N2Y05oa0JqN1dzeWIyTjNHcnkwQzRET1RTbkFCMmtlendjVW5WYkxBL2ZPNFBaeDR3Z0psamI5MnZYdmtIVHNPQUNLb3RDamN6ZzlPbGZIMUZqTDVKRzVqY25FSTNQbkFGQnF0WExnMENIK3MyWXR1WG41M2FsMGVsWUozWnAzSlkwcG9BK3dHZWdKb0ZhcmVXWDVpOFFPR09DU3VLRWdDZUdpd0dnd2tEaDhPTEVEQnZEZ1F3K1RmZWtTQU9vcUJRaWF0eng3Z0labVduK1ZTclVQNktuVFNXL3YzWk1uT1lYUE9IZU9vbXR5RXBsTTBpRzZhc09YRkpscmgvY0lJVmk4OGtNQWd0cklnNXUxckl4VHY2VmhzOWt3QlFieXpNTEhuZlJWUVJibExXMEwxdmdtcmtaQVA1Vkt0ZGZoY0xSNVlNWTluRWhPNGNndlNVeTQ5Vlp5OC9MNSs0c3ZrblRzT0NxVmloRTNEMlhTaERzWU1tZ1FoNDRlWmZwakw3TjV6U0wwT25uanVYamxoN3kvYlI5aG9hSGNPLzJQdkxwbUxWL3QrQVp6Y1RFaEljRTh0MmdSZzJJRzBqNjhIUmN2NVhDbFVuOWxGZktTdHFYV2diemk2dWU2MXFDdm9paTdoUkFSQytiK21hVi8reXZQTDE5SlJYazUwZjM3OHNUaXhadzdmNEdvbmoxeE9CeWtwS2F5ZmVmL1VLdFVYRE9iT1hjeG43UG5jNWlRT0pnVmIyOWp4ZHZiQURDWlRIeTZaU3Nua3BNUlFqQjQwQ0RTVHFmejdlN2RsSldWNFhBSXNyS3pLYkxLd0F5VkFrVlcySjRNaHpJaE9RZkMvTURmQTVPanFCUzJISWZENStCVUxvUUh5QkJlZ1BVSFpRQUdzTDh1Mzl1QVNCd3hUT1JsL0NieU05T0VqNDlScUZTS2M1OS83T0g1d2xwWUlDeVg4OFdici8xSDlPN1ZxOTRlbXhBYlZTK3ZiVmlZV1BMMDB5STcvYlFRSmNWaTAzdnZDVk5nb0FDRVNsR2NkTGYxUVd5YWlSaldyVFovcEFteGZaNzc2Y1l1dGZtajJzcjhCY05xNVMrcktYeFgyZEZRY2Vybmd5SS9NMDNrWjZhSitiUC9MQUFSMGFHRDJMNWxzeEFseGJXU285Z3NkbXpkSXNZbUpncWxoaUJWYVZCTWpOajQ5bHZDV2xoUWp6ZnpWSXE0T2VHbWVqeER1eUk2Qk1ybmZ5Lzdod2hxWXhJS1VqSHVwZ2lUNUYrOThpVmhNQmlFVVl1NHZTOUNwVFNzQVBXaXh4K3o3TnoydVZQNEs5bVpRcFFVaSt6MDA4SjI5VW85QWVxbWswZVBpTWtUL3lBQU1UQTZXaHo0Ym5lVFBJNWlzMWp4NGdzQ0VIRWRFU0YrdFpVUjBiNjkwR2pVQWhCaC91NG5qYXB5NUVSMEVDcVZ5bG1mcnc0eE5xcGFBYzVGc0NRdjV6Nkw1Vm90bjdXdmozUjJ0QThQeHgzMDZkMmIrMmZNNFBPdDI3aHhjQnp4UTRZMHlhTW9DbUdob1FCMEQ0VkZZMkJYS3J4L0ZJckxJT3ZpUlNkdG5ydDJZdzFjeU1vR1FLMkNhYkZ3MTBCSXlvS2RxYks4U2dHTEprK2J2dmpkZGEralZzdDFVYTNXb05VMWZEM21mZ2V5S0MyMTByT0hleGU4L25wNVRmNWpCcHk0Q004L3U1aVZyNjJtcUtpSVF3dmRiL2Z1RFRJRWI4V3k1MW44ejZYb2xESWVHVjZmVGdVb2lxSTg4ZDMzKy8zdDl1b05XRzlvZmp5YzFXcWwvK0FoOUkyTEkvUGNPWTk0d3lxdkhaWXNYY2JWb2lMYUJualdkaFgvd3NWTEtDc3JvMjBEMXhnYW9KY1FJalM2ZnorcURqMEFPbDN6NDVLMFdpMGRJeU1wS0N6RTM5Ky9hWVlhZUh3VUJQdENnUVY4dERERjlRRzBRVHd6VmthZUZGbmw5amN0MWpXZGhzci9BY1VQSHVUTVZCUUZqY2FULzFPNWhscXQ1dGlobjdEYjdjNnA1UllVR1NteU1QSDYyMjRmQ0UrUGFacE9oWFF2MFNreXNqcFRwY2FiaDNHUGhFZUc2TFlXTkVoUEswRkIxVTVXbGRwN3h2aXVQWHU0ZXJXSUtYZE9CTURoY0hEb3lCRktMTlYyUTNMS3FWbzh0bkxRTkgvOWRRc2FwTW1McHVaWEV0NzUraGFMaFZzbjNrbEZSUVhKUHgvbGhxZ29Odnozdjh4NmFMNXIrc3JMcGpJN3FNdEIzNHh3M0ViN1ZYMnBaZE5RR1gvei9ZR0RqQnNqSjUzZFhpNXQwdWJFd0FOR281RjdwMDhuTHorZkxwMWtBSExpaUJITW5UVUxoNk02T05CaXNmRCtwazBrWlVHRkF6UXFzSlJMUldoVnplNUdQZXl2RHNCUDBRQWZLb3J5encwYlB6RDA3TjZOZSs2ZWlsYWpvYVRFaksrZmgzdFBIU2lLd3ZvMXRmNDBTdWRPblZqejZxcDZ0R2N5TWpoNDZCQXJkc084bXlIUUlBTW92UmxFYVMySEQzK1drZS9JSzcrdnFuVDdKMFZSM2hOQ3FIUTZIZUh0MmpvRlVDbWVmUUtMeFVKT2JpNEIvdjZFaERUK0Y5R2FLQ29xb3FCUVhzRXJRSWlmSEFuZWdrTkFmckg4VlJSS2hPQlc2bGlEQ2Nnb3NXdTBubWUydFZNKzhBR1ZYaTZBL3dNd0hvajg4dUhxeEFBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUVBQUFBQkFDQVlBQUFDcWFYSGVBQUFBQkhOQ1NWUUlDQWdJZkFoa2lBQUFBQWx3U0ZsekFBQUIyQUFBQWRnQitseW1jZ0FBQUJsMFJWaDBVMjltZEhkaGNtVUFkM2QzTG1sdWEzTmpZWEJsTG05eVo1dnVQQm9BQUEvdlNVUkJWSGljelp0NVhGUlhsc2Uvci9hRllwRjlVUkFRRkNJUkl4R05Hc1hzR2o4bW5jMU9wck4wTk1za1ppYlRrKzVKeGt6MjBlbk8wdGxNMnF3YU8zWjJZMktpaUNRdVVUVEVDTEtEb3JMS0prdFZVVVZWdmZualZRRUZCVlNWNktkL24wOTkrUERldmZmYzg3dm5ubnZ1dWZmQlB6ZWlnUGVBRmtBY2gxOHQ4RHlnY1FrUUxvZ2EvaUVDS0FBU0ZBb1pjZEY2Qkw5Nks0TERoczN1b0w3WmlzTUJ3RzdnYXNDbUdMZnVqaitlQUJLV1haUEFPeTh2eEJDZzlMc2gwZDZMdmJ1VXVpWUx0enhVUTNHRk9RZjRMYkJSUGw2OVBROTRGUWpOL1hRcEljSHFjMnBJa0NrUWJkMEU2dXhNakZIenliZnRBQmJnODNPMWdGaGdDWEFKa0FRRWoxQ3VFMmdFZmdWK0FnNENqakhhRHRicEZJU0hhVWN0WkRMYnlOOVhUM09MbWVUSlFWeDJhUlJ5dVllNUlsTUJNRGxPNVhvU0F1QXZBVmNBL3dVc0JHUSsxTHZkK2JjSitEdndDbkRheno2d2ZkY3A3dnZEajdTMjlmWS9tNW9jekVkdlhVRjZhb2hiV1FISkN3NkZyd1RFQWV1QnBRQ0dBQU9KOFVsRVJrUVNIQlNDUnEzeDZGYXRWaXZkUFYyMHRiZFIzMWhIZldOOWxNUGhlQlI0Mk5uZUdxRExsNDRjS1c1bHhhcGMrbXdPbGwyVFFIcnFCSDc0cVo0RGg1dFordHZ0L0pKM2sxZFR4eGNDNWdGZkFhRkJnY0ZrWldZeE9UN1JxNHBxbFJwRGdJR1lxRmltcDJWZzdqVnpyS3lZWTJYRlNwdk50aHE0Q2JnTjJPdHRaOWErZWdScm40TjFUMmF6ZXVWMEFOYUlsM0RQSS9scytiS2FEWnZLZU96aEdXTzI0NjM1NWdCNVFPajB0QXgrYy8xTlhpdnZDVnFObHF6TVM3bGwrVzBrSjA0QmlIRzJ2OUxiTmc3OWNnYWxRc2FxMzZYMVB4TUVlUER1ZEFBS2ZtbjJxaDF2TENBTjJBcW9McHM5ajdUVWRHLzdPQ2IwT2oyTDV1VVFHUjdKVDRmMkswVlJmQnVRQTIrTlZYZloxUW5vZEFvMGF2ZUZyTmRpQjBBdTkyNXN4eUpBRFd3Q0FpNlprVFd1eWc5R1dtbzZRWUZCN01qN0hydkQvZ1p3YXF3NmYzM2hzbUhQVEdZYkw3enlDd0JYWGg3bmxleVJDRkFEL3dFOEJFUkhSMGFUT1QzVHF3YjlSV3gwSFBQbUxCQiszSjh2QUpzQjFWaDFYSGgxUXpHL0htdGw3OEZHNmhxTXpKZ2V4dDByVXIycTY0bUFpY0EyNEdKQkVKZ1lPNGw1MmZNUi9JdERmVUpLVWdydEhXMFVseGFORkU4TVEwT1RrVDgrY3hDUWZNQ05TeE41WSswOEZBci9wa0FJc0F0SWlZMk9aWDcyQWd5R1FHLzdNaTZZTlNPTG10b2EwV1F5ZXNXNHRVK0tweTYrS0pUUDM3dWEyR2k5VC9LRzB2UVNrREk1UHBGcnIxZ3lUUG1XdGhiMkhkeExRZUZCVEdhVFQ0SzhoVUtoWU5hTVdUNmJXM0NnMm1mbHdaMkFKT0JPblZZbkxwaDcrVENUYnpyVHhMYnZ0bEpXV1VwUnlWRysrdllMem5hZTlWbWdOMGhKU2tXdkQ4QnN0dEhZUERyUk9xMENRUUM5enIrZ2RqQUJ0d0xDdE5SMFFhVjA5ei9tWGpPNzkrekM3ckR6L0lxbDNMTW9HNlBKeUxjN3R3MGp3V2F6VWQ5WVI0K3h4NjhPQVFpQ1FNTEVCRVFSZHVTUEhpbEhoR241OFBVYzFxN0o5a3ZXWU5wbUFjUkZ4dzRyZEtpd0FLUEp5TDA1Yy9qUDYzTVFSUkcxVXNINm5mdjQrdnV2bUp0MUdVbVRrK251NldaNzdqZDA5M1FqQ0FLeDBiRk1TMDFuVXR3a1pJSXZXd2FJbjVoQVNma3h2dDk5aXJ0dUc5MmpMNzl1TWtvdm5kNVFEQ1pnQW9CTzV6NlAydHJicURwZVNXU1FnWFYzTEFPa0VYcmx6aHNJMW1sWXR6V1AvSDI3Mlg5b0h6YWJEWWZEd2FMMEtkUTB0M0txb1k2NmhqclVhaldUWXVPWk5ER2VxSWdvZEZyZG1CMkxqb3hHSnBOeCtFakxxT1ZNWmh2VDVtN2hsdVZKL1BsLzV2aW92anNCemtudnZtZVN5UVFpZzRONDdhNGJNR2dHTmhlQ0lQRDBMZGR4WmNaVW52OWlKd2NxYXdreDZGbTVlQTVQM0hnVkFOOGZMZWVkdkFQa0ZWZFFkYnlTcXVPVmdCUUJoazRJd3hCZ1FLZlRFMmdJSkNvODBvMThtVXhHZ041QVkzTW52UmI3c0lodm9CL1NYNVhTdjlUR1lBSjZBZXgyOTIzNnBJZ0lqcisyQm9YTXMyT2VOeldSN3g2LzMrTzdKWmxwTE1sTXcyaXhrbHRVem82ajVSeXVPVVZwWFJPbjZrNE9VVVFnTFRXZDdGbHprTWtrYzlab05IUjFkM0syMDBKVWhHZXIwV29VSFAvNWRzODVnRUVRblFQYlorc2ZZQWU0RTJBQnNOdHRiaFZuUmdXTXFMeTMwS3RWTE0vS1lIbFdCZ0JtYXgvbDljMDBkSFJ5dXUwc05jMnRiTjc3TXlYbHh4QkZCNWZObmcrQVFpNk5xaXUrSHdsaktRK0F6UXpBandYZHJpZkhZUXdMS0M0dG9xWFN3aTFwZDR3dHdBZG9WVW95SjhlUk9Ya2dYcjkzMFZ3V1AvczY1WlZsWEh6UkRBTDBCbHl6OHZOdHg4bWNIdFpmTmlaS1QwcFNFTEloQTFQWFlLU3ladmpTTE5vNnNmYzJjNlRFeExxM20wQWEvZmZCa3dVNEJ0Z3VMaTJpME5LTEtONSsza1BobUpCQWJzNmV3UnM3OTNLNi9qVFRVZ2EydWYvOXY0ZUdsWjgzTzVxdG02NUJwMVZndDRzOCtOZ2VObjVTT2FZY1FWTCtZYUFRUEU0QmlRQ3IxWXJSWkNRNUt2eUM3QU5rTW9IVW1BZ0F6bloyREgzOVBxQmpJRzVKMjFmUW1QN09SMldzWGptZFoxOHNkQ2xmQnh3WVFVUWZVQ3RLcWJnUzEwTVBVMEFpb09Oc093QXAwZUYrSytVTEJFRmdja1NvVS9Zd0FwN0RPV2VkdUFMSUxhM280TnZjay96ZjYwY1FCRHBGa1VWQXRTOXloMW5BN3IyN2tBa3lITTRUaEF0RkFFQ2lrNENHcGdZMmJ2bUF2cjQrMTZ1aEptZ0hPSDZ5aTkvLzJ3K2lLRG4yMytHajhqQmdVb0hBOVFDaXc0NU9LY01WV0lVSEdVWnRvS0xoRE5lOHNKN1N1aWFmQkZjMlN2V09uVzRFd09FUTBhdlY2TlZTR0s1VHluQ0kvUTc1bVNIVlJZQzlCeHZwN0xJS3dGcmdhNTg2NElTTGdIOEZwbHc3WXhwTmYzdU81ZzNQODlUTjF3SWdIMlArNXgyclpQZXhLbllXVmZna09MK2ttdDNIcXRoeHRCd0F1OVBpMUVvbGFvV2M1ZzNQVS9ieTQwd0tDd0hwRkdmMm9Pb2xnaUJaTE5MMmZZMVB3Z2ZCUlVBMndCTTNYa1dnVmpvM2xEa1ZsOHRHajdHbnhVYWlVNnRJajR2eVNmRFVtQWhVQ25sL1BhdE44ajJpS1BiTFRJb000NzRyKzFOZmczYzdMYUpJRm5BUHNBem5sUEFITGgrZ0FqQm8rdzlOTVdpbHNOZGs3UnRXYVRBV3BVK2g5WjBYVUhpWmhIVGg4clJrMnQ5Ymkwb2h4KzRRNmJQWnNUa2NkSnJNUkFZUFRMdEI0YmRtU0JQRnp0ODV3ZFhyT29DOVpUWDlMMUpqSWdHb2Fqd3paaU8rS3UrQ1NpRkZlaWFMRllEVGJSMDRSSkhreUFISHUyZWdUMk1tU3YyQnl3TGVGT0N1UnpkK0tTODYxU0RFaDArZ3krUU1IUWVSNGd2SzZwdlp0T2N3NVEzTkJPdTB6SnVheUcxelo2SlR1K2NhSENJWXpSSUJCNnRxQVRCWnJhemJta2RCZFMzZkZKWWdTT3YzTnI4Nk1nWUdlN2c3QklIMW9rakEwRUkvUHJXYU9Ta0picy95amxXeS9aZFNRZ0owL012OFdjU0hUK2gvOSttQlg3bmo5VTI0MWljWGtxUENLWG54VDI2QlZhZXhGMk92Uk1EZGIyMG12NlJxcVBncXBHVE5FVC8wR3hPRDQ0Q1BSSkZjcEZNZzF5U2NBVHp3NGpmNWZQYm8zZjBGbi90aUo4OTg5bjMvLzMvK09vOXRmMXpGZ21sSkFDUkZoWkdUUG9VbE05TlptSjVNUzFjUGY5OVhTSi9kN3FaOGI1K3RYL21hNWxaK0xLMUdnRVlSbm5JV2FVVHk4dWJ4VlhzQVk4VzRha0dnVWtDWXRPZnAxVnlhSE0vMkk2WGM4SmQzbVJDZzUrVlZkMUJlMThBTC8vaWFTeEluY3VDNWYvZGFzTFhQVG51M0NZZlRTbGIrN1dOeWl5dEFPbzk0eVYrRmZNVlkzc3NpaWp6bEVFWHVmR016MVUwdHJIeDdDd0FiSHJtWFd4ZGs4K1NLRzlCcjFGUTJqTzBzWGJEYTdMUjNHL3VWMzd6dlozS0xLeENrU081TlAzWHhDOTY0N3crQUwycWFXN24wOFpkbzZlcmgvdXNXc3lSTE9ubjlkTjhoakwwV011Smp2Qkpvc2xocDZ6TGljTHFIbjQrZjRxblB2a01RaEQ0UjdzUzVKN2xROElZQUVTbmdPTjNUYStHaStEalczblVyQVBWdDdheCtheU15WjNwc05EZ2NJdTNkSnM3MjlPTHlqUVhWdGZ6KzdZL3BzOXNSUmZGK3BOc2pGeFRlSnRPVEJZaFNxNVRpcGo4OElHaFUwb1dsKzE1N240NGVJNDh1WGRUdkFJZkNibmZRMDJ2RjFHdDF5elorVnZBcmoyLzVCcXZOQnZBMDBuVzRDdzV2TnZvQlNNbURsTmNldUpOVjF5d0NvTk5rSm1MRkF3REVUUWhHcVhCUFNvcWlpQ2dPNU9JQW9vSURXWnFaenQ2SzQrUVdsU09BWFlRSGdBM2pvODc1d2Z1QXVDeDdwbWpaK29IYmI4WGxjMFNaSVBoN2FiRUtHSDdHZllFeGxnWGNCbndjR3hvaUh2N3JzMEtvWVZpTWhNbGl4ZEkzK243QmhZcTZScTVlczA3c3RmYjFJWjFER0gzdDhIaGpOQitRSUFpOExTRHd3YVAzZVZRZVFLZFdEUXR2UjhMczFDUWlnNE9FazJkYWxZeDlUZTZDWUNRQ1pNQm1VU1R3c1p1WHN1Q2lxVDQxYXJKWStYRFhIdXJhM0ZOYkpTZnJPSG1tRmFTODNYbUw3bnpCU0FUTUJlYk9URXJneVJYTGZXNzBzWGMvWnNPTy9KRmVuMEJhVnY4cE1CSUJPUUFyRnM3cFA1endCVWRQU0R2WHg1ZGZSWUJ6UC8vVjRTSU8xWndFdUEvd0xYMTBIakVxQVF1bnA0M3dlblM0ZG9FM1hwcEJkRWdnYW9XQ1lKM0dSY0E2b0FjNENweWZXeFkrd0ZNa3FBT3l3d0lOVEUvdzdxYlZVTlNlYVVVaGx4T3MxMkhRYVFqVWE3aG5jVFl6cFpPZ1RLU0lyeHNwOXY4VUtSYndMcFllWjNnaVlCNmdYcGd4emE4RGthOE9GTkxTMmNXTStGZ1V6dHplcWRZTzd0L3dDVWRxNjVISkJKSm5SaEljcVpVaDNVcTVDWGhURUlRVFNIZUhMK2dWZmsvQ0pQUFBtT1pUUTJmT2R2SGxnWjk1NHNOUEFBZzE2Rm4zOVM2S1RqVlFVRjJMemU0Z0tGVFBJMy81RFJsekU3R0xObG82R2lqNXRZcXkvVTBjL1BLRXF0ZG9leVEwTkdoYlcxdG4zamxyNWlVOERmRWhJS3RrL1RxU25YbkJ3ZmppcDhNOC9OWkdXanU3aDljY0FXSFJRU3krZVNaTDc4cEdxM2Uvd0d5eEdXazIxdExUYWVKMGFRZFoyU205azd1bVJsMTU1Wjg2ZmRURkx3eTFnR0JnNXNUd1VJL0syeDBPSGxyL0lSMUdJNkd4N2pkSlZGb0ZzYWxCVEowVGlkVnN4MksyRVJjVFIxSnFQSk5TaHJmbGdscWhKeW9na1NhcVNjMk9wSXRPelFsVlJUWFNWZnlTRVN1T0U0WVNzQkNRTHhyQi9BdXJUOURXMVVQSzdBaFd2ZW81akJjUVVDbDBCR3NpMFNwR1AxVnlRU1hYRXFTSnBzTmNEOENXOS9hSElhVzg1d1A3dldyRVR3d2xZTlRsNzRlaU1nQ21aRW1udUdHNmVIUks5eEJaRU9RSWZueUxGYWdPcGR0eUJwdWpqNGdFQTBqVGN4WG5tWUNocTBBT3dFZ1drTzhrSUhsV0dIS1prZ0JWRURKQjRmYnpSM21RTEVlbkRBTGc0cHhZNUVvWkNGemhWMk0rWURBQlVVQmFhbHcwTWFFaHd3cjJXdnM0VUZhRnpxQWlOalVZclVMUGVIOTFwMVpJOTRDVUdqbmhrd0pBSklhUnYwTWFGd3dtSUFjUUZtVjROditDaW1yTVZpdUpsNFFoa3dtb0ZaNTNoNzRpOXgrRkhOaFJDb0JDTnJDckRJN28vMWdxZWx3RWpZREJQc0E1LzBjMy95bXpwR01yN1RnUjhPNnoyd21OQ21UTzFXbkloSUY5aHk2b240elFjUkUwQWdaYndHS1pJREQvSXMrM012T0xwRkZLemdwSElWT2hrSjNidDN3dTJPMk8vb3RaY21GZ1BIU0JGNWFBUkNEaDRzUkpoQVVPWDdxNnpiMFVWcDhnTUV4RFJMekI2K1hOOTg1NHRJQUpIZ3VQbTB3SkN3RVdqakQvOTVWVTBHZXprendySEVFQXpUaVovekFJUXY4MDBPajdyZUc4ZnJEZ2N1TVBBbStFQlJvdzZJWWV3ME9YMFV4YmR3OWFneEpkb0FxRlRNbDRyUUROcHp1UXkyV0V4VWhMb00waG5SWDJ0RnV3bUcwZ2ZlUzhjMXlFallJZ1lBZGdZM3crVXovbm55QUlIVWlmdXA5WC9EOXNuSTVlS083YTdBQUFBQUJKUlU1RXJrSmdnZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFFQUFBQUJBQ0FZQUFBQ3FhWEhlQUFBQUJITkNTVlFJQ0FnSWZBaGtpQUFBQUFsd1NGbHpBQUFCMkFBQUFkZ0IrbHltY2dBQUFCbDBSVmgwVTI5bWRIZGhjbVVBZDNkM0xtbHVhM05qWVhCbExtOXlaNXZ1UEJvQUFBdkRTVVJCVkhpYzdadDVYSlRWR3NlLzc2d29JS0l4Q2k2UUcyQ0FpQXRxcGtXaUtPSVNtUXN1WldsNnphVzZkbTI1YXR2dDJzMnVMV3Jacm1abXBpMWFvbGZBTk5GQ2tFQ2tWTlJVUkFTVUdHQm1tSm4zL2pFeU9yd3pNRHBEMHFkK244OThaczV6enZPYzV6eHp6bk9lOXpubkJRdkdBb2NBQXlEK0VUK0NJT2lBNzRFN3VRNElWd2EvQlNDZ1hYdVVLdFgxOE45Y2lDQ0tJaUtnMStrb3ZuQWVRUkRNb2lqZURoeHdSb1FBSEJJRUllclRyZDhTTTJSWW8rcmJHS2d4aVZUcFRRQnMrdmdEbm54MEpzRFh3Q2huK0FYQTRCL1FUcG56eTlsR1U3SXhJWXJ3VzdVUkFKUEpSR2dITDB4RzQya2d5QmwrR2FCVUtwV05wMkVqUTd6bXQxd3VSeWFUQVRnOUlJVTlva0d2NTRzdG04akp6cUt5cXRKRkZSc0gzdDR0aU9yZGx4RUo5N2drUjJLQTB0SVNSc2ZkU2Y3Ukl5NEovcjBRM1g4ZzczLzZEUjRlelc2SVgyS0E1eGN2SXYvb0VlSmp1ako1YkRoeW1lQ3lrbTVIalk2YTZpcFdic3hqZi9vKzNucjlaUlk4c1FTQW9TUEdzUDJMVFZ1ZEZTVUFZc2ZBSURLUG5BUWdNalNRaXhjS3VmVFRRcHA1MkYwaE54K2lHY292Y0thb2tvNXhuOUN6ZHo4MmY3UFhXdDFabzNUNlg3TzdCSHk4MVhZSHI2MDBrUHpkQ2ZLT2xTQ1RDVVNFYUJneXNKUGR0b1VYS3RpeUk1OFpFNk5RcStRMmRVVVh0WHkyL1Nnekp2YkVRNjNnOG04NjFtM0pZV3BpQkQ3ZWFrcktxbGk5L2hDVjFRYUpYQUdCc1hFaDlBMFM4UGV6VFB1eTBvdk9qcmRoQXpqQ3V4dXpXTFJzTjZXWHFtM29iZjI4V0xGa0tPTkgzbVpEWDdVdWd4ZmYzRWVuanI2TXVLdUxUZDNiSDJleWRNVWVPclpyd2VqWVlEN2Rsc2U4cFR0UXFlUThQQ21LcjNmL3d1SlgweHpxa24raWhLMy91Y051WGZMMnJRQWpnRytjR1pkVEJuamhqYjM4YzNrYVNvV01LZmRFTURpNkkyYXp5STQ5SjlpeUk1K0pjN2RRVWxiTm5LbTlyVHc2dldWdnJ0YlZTT1JkcmJOdFUvczljVlFZdmo3TnFLa3hXWG1LUzZ1WXQzUUhBSS9QNk85UTE0VnpId1JZRFFRNk03WUdEWER3OERrV3Y1cUdqN2VhNUhWSlJFZTJzOWJObUJqRnR0M0h1Ry9PWmhZOGwwek1nQ0JDdTl6aVRMLzF3a090WU16UVlCdmErRWMreDJ3V21YdC9Id2IyNlFEbDUrM3lHZ3g2dUk2WkxXdW93ZkozRGlDSzhOclNZVGFEcjhYSXU3dnk0c0lZakVZeks5NC82R3kvMTRWdHU0K3hhVnNlZ2UxOGVIRmhqRnRsTjJpQTFQUlRORyttWkVKQ21NTTJENHpyZ1V3bWtKWisycDI2QVZCZW9XZlcwOXNCZVB1bGVMdzkzZnV3VnE4QlJCSEtMbGZqMTZxNXhKTmZpNVl0UFBCc3B1UmltZnVqeGtlZjI4bTVvZ29lR0JmSnNFR2QzUzYvWGdNSUFtaGFlMUowVVV0VnRkU1pQZlZ5Q3A5OGxjdUZra29xS2cyMHVjWExyY3FsN0QvRmg1c1AwOWJQaStYUHhMcFZkaTBhWEFKREIzVkNiekJKMXJmZVlHTGwyZ3lTNW0vbDN0bWZBUkFmYzNXN1V5a3RNOFp3alNldlJlMHVVTnZHSHFxcWE1ajU1RFpFRVZZK1B4eGZIdzhuaG5QOWFOQUFDMmYyUjZHUThkeHIzN0U5NVppVnJsYkoyYno2WGxSS09mdCtQSU9IV21HelBZVUZhd0I0NTVNczYzWUhVRnhheVpZZCtRZ0M5QWh0NDdEZlJjdDJjK0wwSmU0YjJaMTc0a0p1YUhET29NSHRJaXhZd3h2UHh2RzNaNzVoNVBTTnhON1JpY0hSZ2VqMFJsTDJuMFJ2c1B6RGVvT1JMM2Y5ekt5a1hnRGNFeGRDZUlpRzFQUlRSSTk1ai92aXU2T3RNdkRCcG15S1N5dVptaGhCNTBCZnUzM3VQM1NXbFdzekxQMTMwN0JtUTZaTmZkL0lBT3hzU05mQ0Q4aHdVR2NFY29GWGdIeW45c3RaU2IwSTBIaXo0TGxrZHUwdFlOZmVBbXRkVkpnL2swYUg4Yy9scVN4ZW5tWTFnSWRhUWZMYUpKTG1ieVUxL1JRNStjV0F4YS9NZTZBdnl4YmRiWlZSNjlscnY5ZHN5TVJzdGp6cDI0c0llNFMyNGZER2hQcFVWZ0s5NnFtUEZnU1NSSkdCVGdjTW8ySzdFUi9UbGZUTXN4dzlmaEZSaFBBUURmMTZ0a2NRNE83Ymc2aXBNZHZ3K0d1OFNQbGtDajltRjNJNHJ3aTFTc0hnZm9FRXR2T3hhVGNoSVF5VlVrN2k4RkFBbGl3WVJGaXdIeWFUaUQwTUdYaHJ2YnI2YW54WWxmYWkzVHBUallua0RkK3hidG5uSHNETGtxZkJYdUdkS1R4em1vdFpqK1BqclhiQ05EY0JWNTRHai8xYVRyZFJuOUduMzBBMmZwVUtRRWg3VDd4OW0vTlI1bi9yRlRFNVloN2xwUldWa2hrd0xHNGthMWEvenZCcEcwZ2FFNDVTMGFDZi9QMWgxS0hUVnJIbTgzd0FZb2JHWDdjSWRYTTFsRlo0U2d6dzFKSVgrQ2s3aS9UOWUwblBiUHFKMHVFanh6RDk0ZmszekM4eGdKZVhOMS90U0NNdFpSZjVlYmtZalVaN2ZEY2RTcFdLeUo2OWlCNHdpSXJxRzlmUnJoT1V5V1RFREJuMmh6Z25NTnYzazA2akNTN3czeGQvZWdOSWxzQ3BreWZJUHB4cHJ5MEE0UkdSZE9yYzFWcStVSFNlZ3dlK1J4UXRjekd5WjI4Q2d5ejd0RUd2WjAvcS82aXFybkpaVVkybURmMXZIK1N5bkxxUUdHRE1pQmpPbnZuVklZT2ZwZzFIQzRxczVUa3pwNUdXc3N0YURnbTlqWDAvNWdLd1lkMEgvSDNCYkxjcG01WittTER3SG02VEIvYXl3aVVsTkZPcW1CWWxkWURyc25aUlZscGlRNXYvK0NJaUlxT3M1UUVEQjF0L3g0OGFTM0Z4RVRxZHptVkZXN2UraGVDUTdpN0xxUXU3dTBCenBRZi9HRFJCUXY4eWJ6KzZxc3MydERzR3gzREhZUHRwS2o5Tkc1NTRhcW5yV2pZaS9uS0M5b2cxSmlQZm44NlYwUFVtYVZibzh1VkxaR2NkY3F0U2dpRFFxMDgwbnA3dXpURFpnOFFBS3BXSzh2TExUTjcwa2wyR3VvZVFNNlpOSUhYM1RyY3JObjdTVkZhdStjanRjdXRDWW9CWFhuK0x2WHRTSERJTXFMTVZ6Wnc5anc2QlFXNVZTaWFUTVdIU05MZktkQVNKQWNZbWptZHM0bmluQmNUR3hSTWJkLzFQWTAwRkVnT1VsWldTazUzbGtDRXNJcExXcmErZS9sUldhc25NK0FHejJaSU02ZEd6RnkxYldsSmRvaWlTbWZFRFdtMkZ5NHI2QjdTalczQ295M0xxUXBvUHVMTWZKd3VPTzJTb0d3aE5uenlPM2J0MldNdGR1Z1p6SU12eW5MNyt3M2Q1ZE81TXR5bWJzdStRVGN6aERrZ01VSFMrRUpWY3laQXUwbzVTQzdJa2dkRGsreC9DMjd1Rk5SU09pNzk2T1d2UVhVTkltam9kYllYck02Q3RmOER2RndoNXE1dXhjdFE4Q1gzQVcvTW9yaE1JSll4T0pHRjBvbDNoZ1VHMzh0cXE5OXlnWnVQaFR4c0lLVlVLQUozZEdXQXltOG01Y0ZKQ3J6RkxNeThHZzRIOHZGenJFbkFINUhJNW9iZUZJNWM3UGpseUZROHRuY2liQzlmT2ttU0ZnOXEycU5kcnExUXFDc3YwMXZLa2NRbnMvSGFiMnhXOGIrSVVWcjJ6dHNGMlpoR2JsSml6V1dFQW93RmZ5UXhZL1B5LytmNjdOSWRNZmZ2ZmJsTWVtemllWmpkNFJjMFJCRUZnM0lUSmJwWHBzQy9BR0hSclozbEdqdU90cnlualJtZkFtc1ViK0haZDZrNUZ5NWF0WGxqMHpMTkxhaXNNZWozbkM4ODVaR3pySDREYTQrcEpyY2xrNHV5dlZ5OUcrQWUwUTZXK2VxQlNkTDRRdlJ2eUFkNCtQclJxMWRwbE9iVTR1RE1MbzhFNFZISHlaT2tLa3hLckFXTHZqT1pJVHJaRHhtN0JvZXcvbEdjdFQ1OHlqdTFmWGIyWDJLdFBOTW1wbHB2cW4yMWN6K3lIcHJoRllhVlN5ZDRmY3VqU05iamh4dGNCaVE4b09INE1wVnhCMy9iU0krbU1jejl6NHZndk5yVFlZZkUyZ2M3UTRTT3R2eU1pbzRpTEgwVjFsZXM1UVQ5Tkc5cjZCN2dzcHk0RUx5K3ZWZk1lV3pUN3NTZWVCcUNEbnlmTkJRVVpjMVpMR3RjR1FoZkttODVoeVkzNmdBZjdMYVQ0VEFreXJWWTdhLzFIN3phMm5rMFdDaXc3Z1EzTW9raTVUbnJoU1JUTmRtZ2k1ZVdYSlhSWElBZ0NQajR0M1NyVEVTUStRQkFFTGxWVkVQbUcvYWM0aGNLV1plWURrOWk2ZWFQYkZaczFad0V2TEdzNG1IRVZFZ004c21BaHlkOSs3WkRoN3RnNG0zTGZmZ000V1hEYzdhRnc3MmpIMTJIZENVa28vRWVEeTA2d3NSVnM2dmpMQUlDMndnMFptNllDVDA4dmRKWDZCdHRWVjFRRFZNaUF2RXRscGVUK2RMaXhkV3NVMUozQ1hZTzdVNld0NXBmREJYYmJBeFRrbnFiaWNpVkFyZ3hZRC9ENC9GbE45anBNdlJDd2ViRnJWT0pFQUZZdFdvdlJLTDJtYXpTYWVPL1pUMnVMNitWQU5wQnd2dkJjMng4TzdPZTI4QjVvMnJSdGRMM2REZU9WTzRVaDNjUFprNUpNL2s5SE9YTHdaenAxNzRDdnhoSlVuY2c1emI4ZWVvT2pQeDREeTh2aWMycE4xeDdZQnZRQThHM1ZtaFkrUG5YN2FOSVFyN3hJRFZDcDFkcThTT1hkMGhNRWdZcEwybHBTSnBBQUZGNHJRdzNNQmRLQkNwckFLL0Z1L21pdmpHME8xN3hhKzMrR2FJbit6TzVHRGdBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUVBQUFBQkFDQVlBQUFDcWFYSGVBQUFBQkhOQ1NWUUlDQWdJZkFoa2lBQUFBQWx3U0ZsekFBQUIyQUFBQWRnQitseW1jZ0FBQUJsMFJWaDBVMjltZEhkaGNtVUFkM2QzTG1sdWEzTmpZWEJsTG05eVo1dnVQQm9BQUExblNVUkJWSGljN1p0N2ZJelgxc2Uvejh3a0UzSlBTQ0lTRXFsYmtJdTRYNnF1TFZJMFZGMzZjclNseDBlTDAxWnZoenFuZFNoYUxWVzhMYTlTQjRjcXFvSzRuYmhMcUNZaElSRnlJN2ZKaFpsYzV2cWNQeVlKMDJSbU1raWF0Ky83KzN5ZVQ1SzkxMXA3N1YvMnMvYmFhODhBOUFHU0FmR1ArTWpsOG9OaWFhWjdlVkdTdjR1VDQ3R0grcTRCdldYQS93aUMwTG1OZjJza0VnbC9OSXg3L3RsUk9vbWhXQ1k0RWpYMldmNTk1aUlHZzBoMlRtNndLSXFiQk1EUXhzOVhTRTgrKzN2NzJ1RFFWS2pRNjdRQUJQY2FSYzZkUEZFQ0NNSWY4RDl2RFZXclhmaS9OL1Bmd0N3QkovNTlsZzhYTHljaks2Y3gvV2wweU9wcVZLczFSRTJhU1ZsNUJkdTI3K0hvd1IxMDdCQUVnRkpWeHQ3OWh6aDFOZzZGb2dnUGR6ZjY5bzVnL0F1ajhIQjNhMVRubndRRVFHemJ4bytiVjAvWE5CWVVGdEU2cUFjU1FjQWdpclR5YnNteDZKMGtYYnZCM0xjWFVWQllWTXVRbTZzTHk1ZDh5Q3ZUWDJwRTkyM0R3MEd3YTU5SXNyTHYxcjBDcWhIaDVVd1BieGZXSitiUWY4Z0wzTHV2UkNLQjZlTjhtRFRLaTliZWN2S0xOUHg0dEpCTlArVHgrcHZ2azE5UXlBY0wzcWhsSzJyU1RBNUVIN1BaNmZIalJySno2enFiOWVvTGl3UUlBbnc5cENQbE9qMWJrbk54a0V2WXQ3WXJ6dzd3cUpIcGhpUEQrcm96YmF3UHo4MU1aUEdTVlR3OW9BLzkrL1l3c2RXcWxUZUJBVzFzZHREZnI3WE5PcmJBSWdGZ2ZFY2tndkgzVDk5cVp6TDVoOUVuMUlWMUg3Vm42b0lVUGw3MkpVZCsybWJTLy9VWFN4N2IyWWFBVlFKRTRJZTBBcHdkcGJ6K2txOUYyY21qdlhudjgxdkVuajVQNmIzN3VMbTYxUFFwVldXazNieGxzNE1kT3dUaDJMeTV6WHIxaFZVQ0ZCVWFsQm85ZlRxNzRDQzNuRFlJQWtSMGNXYi9jUVdabVRtNGhRVFg5QTBZR2tWeVNxck5Eb2FIZGlYdTlBR2I5ZW9MNnl0QU5QNDBpUFV6YUtnU2xFcWxKdTF6WmszajVLbHp0bmtIakJ3eDJHWWRXMkNWZ0JiTjdQQndzQ1BwaG9xeUNqMk96YVJtWmZWNmtiaEVKZmIyZGdRRStKdjB6WHAxS3JOZW5mcjRIajloV0NWQUlnaThFTlNTVGRmdXN1cTdIQmJOYm10Vzl0dmR1ZVFYYVlnY09SUW5SOVAzOXRlRWExejZKZEZtQi92MmpxQkxjQWViOWVvTHF3UUEvTFYzQUR0UzgvbjQ2d3lDL0IyWUV1bGRTK2JRcVdMZVdwNk9UQ1psOFlkL3FkVS9hZm9jMG05bDJ1eGdXRWdYNHMvOGJMTmVmVkV2QWdKZG1yRmxSRENURDExbDZvSVV0aDNJWjlJb0wveTg1ZVFwTk95SlViRDNXQ0dpQ0F2Zm4wdFlhSmRhTmphdVc4bjVpNWR0ZG5EUXdENDI2OWlDZWhFQU1LRzlGeDRPNGJ4K1BJVkRwNG81ZEtyWXBOL0pUb3BLcTJmVDVoMU1mbkVzSGRxM00ra2YwSzhuQS9yMWZESmVQMEhVbXdDQUlmN3VKRS9yUzB4bUViRTVwU2dxTmZnMGw5UEQyNW5Jd0JiTWowMWpmV0lPdzBaTk1qbEFBV3pmdFkvVForTnNkbkR3MC8yWU9EN1NacjM2d2lJQnhaVmFkcWNWMU5uWDArZEJrcU1YWWY4dEJjLzR1UkdiVTBKeWZpRVRwdjZacFBpak5USkxWNnpsUm1xNnpRNWV1cHpZK0FTNHVicmc0dXpFelZJVkV3OG1QWkpobFZKbDh2ZUpRLzhpNmVwMW0rMkVoUVpiRjNvTTFFbUF2YjBkUnc5dVovL1BNV2kxT3B1Tk5uTnc0TVdvMFNadFhpMDlHVHE0LzZONTJZQXcrd3AwRCt0Rzk3QnVqZW1MV1dnMFdxNmwzT0RXN1d4VUtoVmFyUTZKUklLTGl6TytyYnpvMXJVenprNk9qMlRicGlEWW1OQnFkZXpZdFk5dE8vZHk1bHljeFpVb0NBSWgzVG96WmVJNFhwbitrc2toekJvYWpZQUQwY2ZJenkva3RSbVRyY3BlU2JqS24yYTlSWEpLR2dDZWpqSTYrRHJpNTJxSGsxeUNuVVJBYnhBcEtkZHg1NzZXekZJdENZbkpKQ1FtODltWEcvaHExUkxHanh0Wkw3L3FMSWsxQklLN0R5SDlWaWFWSlRjUkJNR3MzUG1MbHhuOXduU1Vxako2K0RWbmVvUUhYWHdjTUtjaGlpTEZLalhwUlpVY1RpMG5OcU1jQklIMXE1ZlZLcy9WVlJKcnRMSzRWcXZEWURCWWxMbXZWREYxeGx5VXFqSm05dlprNVdoZnVscVlQQmlYdjZlekErMDg1YndTNGNKZitya2pGZUROdHhkeDlkb05xMzQxcVh1QkRkOStUM2JPWFlZKzVjeVVNSGViZE4yYkc0a0theVhucGE3T2FEUmEvcjcwQzZ0NlRZcUFUVnQySWhGZ1JnOWoyYzBnd3BtTU1tSlNsV2oxbGdzU1VxbUFnNzB4cEEwTGFvNTdNeWtIb28vV1djRitHRTJHZ0l5c0hHN2R6dUtwRm5KYXU5cGhFT0hUay9rc09wTExzcFA1elB2cERxVVZlb3MycWdtUVNpRENWNDVlYitCa3JPVWlUSk1ob0xwYzFyR2xBd0FuYmlvNW1xYWtjeHNmK25kcFIwcEJKVy9zenlFcHI5S3NEVHZwZyttMGM3Y3oycjF1dVF6WFpBaFFLSXluUzQrcWl0UCs1SHNBckgzelJYWjk5Q3BqK25YanpqMHQ4L2JuOE1HaFhNNW5sdFVxMDBrbEQ4S2xpNE54YW9xaUVvdmpOcGxFeUY1dUQ0QldMeUlDcVlWcW1zbnQ2QnJvaTBRUTJQVDJWUGIwK3BVbDJ3NXpJYXVVQzFsbGVEdkxpT3preXNoT3puZzJsMkhVTkVKWHhZNjluWjNGY1pzTUFVR0J4bEpiOWowTnlrbzlHcjFJYUlBWGtvZHlodkVEd3hqWFA0U1lTOWZaZk9RQ3NRbHBiSW92WXVzdnhUemYyWlVwNGE0MXNybEtZN3dJYW1lK2hBZE5pQUNOeHBpZ1hNMVRrNnBRQStEcjZWcExUaXFSTUxKWE1DTjdCWE03cjRpdE1SZjVMdVlpUDE0dDVWeW1pdmw5M2ZCeGtwR1FwemF4YXc0U3VkdytPbXBzL2RMR1I0RldxeU1qTXh0ZFZRWjJPeU9MaWdyVFFKYVFtTXh6WTE0R29LUkN4eWZIOHdId2RMRjh3QW4wOFdUeHRGRmNXdmN1a2VFZHlGUHErUHhzQ2RzVDczTzlVQVBBZXd1WHN2V2ZQNWkxSWFuTXV6RjF4VDgrZk9RSldrTE04VlA0QklUVHZ0dlQ1TnpKQTZCajZETzA4QTh4Y2VxekwvK2JTcldhZWNONzR1dm16UDFLNC9MMWIxbS9aTWpUeFpGdlo0NWxiSGdIQ3N2MHhOd3NCMkRaaEdlUVNnUSsrWFNOV2QwRzNRVVdmL0k1OTVVcUJuUU5ZbERJVXpVUEJnUHZMVnhhSTVlV2ZodUExd2VIMDZtVk1Ra1NCQmdVMnI3ZVl3a0NmQnoxTkk1eVk5QnpiUzVueHNCUS9EMWN5TXpLUWFlcit6UXBjL0RwdU9QbHlWRnNXTFBzVWVkcEZ0VmIwSTkvZTgza0FCUXhld1ZaQmNXSW9vZ2dDQVMwOWVQeWxTUlM4NHFSeTR4aDZhczNKaExSM3I5T3UzVkNBRzhYUi9hOE1aNHhxM2NqbDBtNVY2SG1icWtLdjlZK3lHUXk2Z29IRXJWYTg5eXhFMmNlYTZLUGl6R1JJd0JZOHROWlNzcU44U0hBdSs1YmFITVFxZzVhWFZxM1FLdlhZeEJoMFkreGFIUjZ4b3dlWVZhdlFYZUI2djk2Um42eHlYYW0wK3ROVnNTa0NXTlkvODMzWElqN3BhYnRWcTZDM3AwRDZqbVNpS2d6eG8zMGdsSkVFUlRLY25iRnBlRHQxWUwzMzVsalZyTkJDUWdMQ2VaMlJoYTk1cXlzMVJjZTJyV0dCSWxFUXZTK3JYengxYmRjL2lXSjZDTW5PQlNmek9RaFBXcnAxUW1OdHVZVzkzQ1NzZkxjdTJjNFBTTkNtZi9tYS9oNHR6U3IycUFFREI4eWtMMC9IY2FqYlNCdWZzYjNXWm1mUitITlZLTEdQbWNpNit6a3lFY2Z6RWVuMDlFcDlCbU94S2VRbkpsTGNOdFdWc2N4cUl4Ulg2WFdzUEZVQWpLcGxHMmIxeERReHMrcXJnd29LU2hVdUMxYnVWYVF5WjRzSDNHWGZnVWdmT0lVQnM2ZUI4Q2w3VnY0ZWVFQ3pweUxaK1VYRytyVTgvZjNKVFA3RHJOWDd5SjY2V3djSGV6TkQ2TFdJSlpYSUlxdzRGOG5VQ2pMYWV2Zm10MTdhdDhuNnJScVJJTUJuVjVQb2FJWVFSQktCV0FSOFBIalR0WVNoaTc0YXkwQzZvdGVuZHF5NWQzL29vV3JVKzFPdlE1RFFURnF0WVozZDUxZzU4VmtXMTFiS0FNK0FRNERJWUQ1eS85SHc5T0F1UThGN0swYTF4SmVqcnVlT2JEL3ZGWGl2S2pCd3NSQjRUVkVpQm9OcXR3Q0RsMUpZOVdST05JTFNoQUVJVXNVeGVXQXRjc01QWkFJeEZlditmaXE1MGxEd0R3QjhjQTNWdlEzQXl1TGxlVnpGbTg1S1B2NzFtamErWGpTd3FrWkpjcHlNb3J1b1g1UUxvOFdSWEU2b0xERndTWlREekFETFRBZmFBOXNOb2dpTjNNVlhFakw1a1plVWZYa1QySDh6c05vYkp3OE5IMENxcEVCckFNWTFpV1FpeC85aVhuRGE2N2Fkd01YSDlWd294K0hIMHFBbmdWcW4zZk53d2ZnZG1FcDM1Kzd5cFhNdk9yMk1VRDFmcWNHN2dKbk1INGp4Q29hblFDdmpwMk5KeGRSSEFRTXNsVS92YUNFdGNjdVBkdzB2T3I1TFRZQ002M1phMmdDREFEaVF4Y2kvdDE3TW12ZkVVcXlzK3BsWU8vYmMyaG1KK09icjFlWWxWbXhhajFYRXE3U2JlNjdhTFE2RkhGbjhRa0puekhzbmI5dFhOM0Z4K0xyWWVuUzVVbGdETEMvMi9OUmpGOWRkOUpqRFY4TjdVdHBWZ1pwU2FmeDk2dWRGYXJWR2tKN2orRFc3U3pldVh5ZExMdm1sT3VOaER0SUJERm40OXJoNTllc2lNWE0xdGpRQkxnS2dwQWpTS1JPMDdiOVFFRHZmalliaUYzekdTZS9YSUdibXl0aEljRklwYVp4KzNwcU9uZnU1TkZoOEhDbWJQb241WG9ES1dYR2NsaGxmaTdISXdlS0JxMTJMVEMzTHZzTlRRREFIR0N0UkNxajQ3QVJlQVlHMVNrVU5IQXdnWDBIMUdyWDY3UWNXNzZFUzl1L1ExdFJVYXRmSXBQUmNlZ0lJdi94T1k0ZW5nQmNMMU5UcGplZ0t5OGpabkIzREJwMXFTaUtMVEFtUUNab0RBSUEvaXdJd3FlaUtKcU4raTQrclhqclhJSlpBd2E5anZ1NXVTYnhCTURKeXhzN0J3ZVR0dXhLTFFVYTQ0by9PMk1DeFZmaUFkb0EyYisxMjFpN3dBWlJGTGNDL1lHNnZsZnp2VjZybFZzeUlKSEthazZVMWlCN3FOWmc3MXBUVi9UZ2R5UUFvQnc0YXFadlM0T04rb0NNT2xmNy81Wk1zTUh3L3dUODNnNzgzbWlzWGNBYXlpVlNhVFBYMXRaTFdQV0JYZ1JkVlkxUVhhUkFYMUVPRUE3OCtrUUdhQURFMElCZm9SY0VTU1pRNTJmbi9nTnVzamhZeGNRQmVnQUFBQUJKUlU1RXJrSmdnZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFFQUFBQUJBQ0FZQUFBQ3FhWEhlQUFBQUJITkNTVlFJQ0FnSWZBaGtpQUFBQUFsd1NGbHpBQUFCMkFBQUFkZ0IrbHltY2dBQUFCbDBSVmgwVTI5bWRIZGhjbVVBZDNkM0xtbHVhM05qWVhCbExtOXlaNXZ1UEJvQUFCRTRTVVJCVkhpYzNadDVlRlJGMXNaL3Q3dVRUb2Vrc3paTk5nZ0VDVXRZd2hyV3NNb3UrNktDaWpLb0k0cklPQ2dJZ2pLamd1SW5uK01nK0FHeWlJeWlJSUxJN2hJTXUwQ0FrTENHaEpBOTZXeTkzanQvM0tTemRTZHBnYWpmK3p6MzZlZmVPblhxMUh2clZ0VTVweHIrV09nUC9BU1VBQ25BUHdEdis5bWdjRCtWdTRqaHdDNUE2ZW1tb3RSaVJaS2Y1d0VIeW42ZHdRUWtBR3Vodk5xZkR4Y0I2Y1YrSGFRRHo0eVdQcDgrUkJyWnRwbmtwbFNJeUoycTlSSkFYRHEwNjRUL1RKcWtkS1hSUDhvSThBWHlncldOMlB6b29Db0ZKV1lydC9LTEtESmJuRlkyVzIzNGFOUzAxZnNoUWZMVzAwbnJQam1XR0FJc0FYSnFhMWgxOTdiZkV6UUM4UGRVMXlqd2RGY1IyZGkzM29vRWVFQ1VlS3ZzdGhjd21GbytINFZMWnY1Sk1EVzZKVEhOOUFDZGdUVzF5ZjYvSkVDbFVQRDZnMTBKMWpZQ21BZ01kU3JiWUZhNUNKc29jVGtybjFLTHRWWTVkNldTeGw0YTlONmFLcy9WS2lYUDltckhvcjNIQVo0SHZuZFUvdzlMd1AvOGVJN2RsMjdXVzc2Wm56ZFA5V2hObitaQjltYzl3L1g0ZTZySkxURU5RWjVvODZ2WCs4TVNrSlF0MnpxbWYyL2NWYldiZVRYMU5xY1RrMW04OXdSUGRtL050QzZ0QUZBSUFoMkNBamh5OWJZN0VBa2NxMTdYVlFJRW9Ba1FYSFlWQW5lQVcwQ3hpN3JxaFhXdi94MS9iZDJid2E4Ty9jU01KZSt3L25naVVVMzg2UlFTQ0lET3kvNXBoRGlxVjE4Q0JpSlBKZzg1VVdRRGZnWjJBSjhqazlLZ0dEK3dMNGJpWW1Zc1djN1dNMWZzQktoVjluMlJwNk42ZFJIUUhYZ1g2QXVnVWdwRXQ5Y1NyUGNndUltYXdtSXJHVmxtTGlRV0ttOW5tR0tCV0VIZ0g1TEVpcko2UmE1MHdpWkozTXdyeEdTMVliTFlYS2tLd0dNamh6SnY1Yjg1bjU3RDVheDgzQlNLT2lkUlp6dEJCYklqTWg4UU9yVDFadmFNWm93WXBNUFAxNjJHc0NUQm1RUUQvOW1aenRvdHR5U2pTUlFFU0pIa0VYTzJIcmFIQUttT0NuSU83NnpYSjFDT0RsTm1jdjdLTlVkRjA0SE4xUjg2Mmdkb2dDK0JWL3g5M1ZpeklvcTRiMko0ZEVLd3c4NERDQUowYnEvbDdkY2lPWHVvanpCaFpCTWthQ29JeEFHajYySDNDQUFQZDNlRzlPakNwTUd4K0xuUTZTb2RVc2p2ZEd6L1Bqd1UyNHRBWDU4cWJkU3czY0g5Vm1CS3E0aEdmUGxKTkJITkhINDZkZUw5ajIrd2VIa1NFcGdsaWY3QUw3V0lwN3FwbENGeDZ6NmtXN3RJQUxvOCtqU25FNU5kSGdHZEh2NExaNU91a3YvRExueThHcEZyS0tUYnRHZTRscFlPOGtxUVZGbSsrZ2g0RlpqU29wa25oNzdvL3BzN0R6RDM2WEErV05ZV1NjSmRJYkFESjdNd0VBaUVSRVcwc0hmK1hzSmY2ODNZQVgzS2J6dFVMNjlNUUNzQmxucDdxYVF2MW5SeU90eGR3Wk1QaHpKcldoaWlSR05ncFJPeElzQjROZTIybEZOZ3VPczJxME9TSkk0bkpKYmZabFl2cjd3S3ZDbUJhc0djQ0ZvLzRIWFBEUGpuZ2toMkg4Z2s3WTVwRXJBQ09GbE54QWlzTmhRVnY5am55UmQ0WXZSUS9MVGVaT2NYM0ZXN0czYnRCZURibitMNStkZnpBQ2VBdU9weTVYTkFLeUF4Tk5oRE9IdXdEeDdxMm4wa2kxWGlVbElSZnI1dWhBVjcxRzNNWnpkNTdyWExBRjhENHgySWVBSWJnRW5WQzM3ckhGQU52eUx2WTJvVWxJK0FzWUR3NU5SUXA1M1B5N2R3K0dndWV3NW1zZWRnRmdVR09VRFJ2S21HNFFOMWpCaWtvMitNUHlwbHpaWDFrZkhCTEh6bkNnVkZ0bUdTaENkeXpLOHlTb0RKeVA1N1YrU1Y2SG1jenh2MXdSTGtuZW9WNER2QVlVU2xuSUF4QUtPR05LNVNtSHl0Mk43aFgwN2xZN1BKNFRhVnU1cVFkdDBwenNuZ2VzcE5QdHFRd2tjYlV0QUZ1RE44b0k3aEEzVU02aHRBSTA5NUYrYm1ybVJRVDIrMjc4dlhJQWNvdm5GaTlOR3lDMkFrRUdJMG1lMkZObEVrUFN1SFVMME9nRnhESWU0cUZWNmVGWjVncWNrRUlBSnZBUldWbmFDY2dHaGRnRHZ0SXIzSXpqWHovcG9iN042ZlNmTDFpaGZsNlJOQWFGUU1vZTFpYU5LcUkwbzNPWHBUbEpOT2FrSTh0eEtPa1huMUhCdS9TR1BqRjJtbzFRcGllL296ZldJSTQ0WUcwcStMRjl2MzVZTWNwSEJHUUdYY0FQb21wZHdpV0JjQXdJZmJ2bWJ1ZXg4eEpyWTNPajhmTnU4NXdOQ2UzZmo2dlRmc25VOUp6d1JJcTAvbnl3bndBelFoUWZLM3ZPQ3RKTFpzdncyQVV1VkdaTDh4aEhmdVQwQm9TM25IVXcxZUFVRzBqaDFINjloeFdFcUxTVXM4eWFYRFg1RjlNNUY5UjdMWmR5U2JFN3U3RTZKM0w2OFNYQi9Ea0gyTDZkdjJIYVovbDA0QURPd1dUYk1nUFR1Ty9BeEFJNDBIazRmMHQxZlljVGdPbzlrTWNtaTlYbEFoZTNmb0EyVURkUUYyUTdGWkxWeis2UnNLN3FTVXZmMGVlUG9HMWxBaWlTS1oxeStRbWhCUGFrSThoc3lLWFcyN1NDOUM5RzRZYyswTFRsQU5CWTd4bVFEdmZySmpqOWZNc1NPRkxtMWEwYjVsQ3k1K3VaNlRGNU1vTGkybGE5dEkrMDR2ejFESXduOTlVbDczMzY0UVlBUXdta1FBTkI3eWR6dDlZZ2c1ZVdiMkhNd2k3ZUp4MGk0ZTU1Z2c0QjhTUVdoVURDRnR1MUdjbTBscVFqeHBGNDlqS2ltMEsvWDNjMlBXdERCR0ROTFJ1YjBQRmtPQlhUOVF1M2RTZ1NJSjVsaXR0bldqWGx3ZzdYanZUYUZIVkJzMGFqVjlvOXRYRVV6UHptSEN5Njl6L2ZZZGdFK1JSMCs5Q1VnSHBEdFpwaXJqdTErTUg2MGlHckhuWUJiYUp1SDRoTFFnKytwNWNsT3ZrSnQ2aFhON0svd0toY29OLy9DMmFKdUVjeU4rRCswaXZWazB0NlZjS0lITmFDUWp4OTd2V3NQVTFiQWVhSHNuTy9kdnZXYzh6eVBEQnpGK1lGOGVDQXRGcFZLU21wSEY5NytjNE9QdHV6QVVsd0Q4QUR6bmduNzdDTWhPU1RYcWpDWVJUdzk1R2ZUMHJNZ3ZlR2o5aWVnM25vaCs0eW5KelNEbjJubnliaVhoM2toTFFJc28vSnUxUWVtbXhtakk0VWI4bmlvTldJMUdFQ1dTYjVyS0gxMXl4VURnWlNEREpvb3JOdTNlejZiZCs1M0o3VVRlUnpoUElEaEErWWQ1c05Sb20zcmthQTZQVHduRjE4ZU5ZUU4wSkNRVzFxamc2YS9IMDE5UFdOZkI5V3JBVmlpSEJMNlBzMjl6YndNdFhERVNPZUpFaXlBOTNTSWp5RFlVWXJQWkNQVFJVbXcwOGQzeE13Q25jYkh6VUVIQU44RFVIZDlsTW15QWppY2ZEcTNhQ2FzRlNaSVFIS3dDVmVRc1ZWY2VhMUV4b3MzS25Xd0xKODdibDlUUFhEV3lITmZTTTBqTnptWCsxREc4TUc2NHJPemd6K1VFL0NhVUU3QmJFTWpmdXVPMjc5OW5ONmRGVTlrTGJOSllqVUloa0hQdFBFZFh2NEp2V0N2OHdscmgyN1FWbm41NmJGWXpCV2xYeWIrVlJGNUtFa1dadHdBSWFhTEdaakpoS1h2NzcyM0l4Q1pLK09yRDhmVDJkOWxJbXdTMnNqbTBJRDJaWlp1M002UnplOW8wcS9LaVBKQ1g5Q3BWZ1ZvOXJISUNESkxFMjFhcjlQYml0NVBZL0pHODdvWUdlZkRwcWc2czNYS0xZNmZ5eVVvK1ExYXl6TGE3cHpkV1V5bWlyV0pTRHczeVlFaHNJQXVmQzhPY2x3OUlKTjB3c1hsWExob3ZYMlo5RUkrbnR1WXlXaWNCSXFUbHk3dlFrOXNXY203WGNpN2NUSzFPd0t0bFYzVVlrWjJnemNDbU1sSnFFQUN3U2hCNDd1dTltV0dyMTEvbm1Sbk5BUmcvUXMvNEVYcEtqU0puRWd6RW44empVRnd1Y2NmejhOT3E2QjZ0bzFkWFh3YjBDU0E2U291MXVBU0x3UUFTRkJiYmVHTGhEU3hXaWNHUHZ2NmJPbDhkQ3FYc3BvdVNUSWpKSW4vMkh0b0ExRjQrVldRbFVjUlVtT2RoS2k0WUJBd0NYZ0ltQU1ubE10VS82bTRLZ1orVlNzRjk0N3NQTUhwa0dJTFNjYlpaRkNWNytBbEF0Rml3R0F5SVpWbmNVcVBJaklVM09SQXZUNlMralpzaEtGektYRmVCVlpRN2JERVdZelJrOHE4NU01bllMNGJKUzFmeXc3bUxkSnUraU1DSWpsWHF1S21VYUwwMFpGMi93Tms5RzdtVGZCWUVJUjlKNmdra09pSUFZQnF3VWFrUWhDV3pnNWo5ZUNoS3RScEI3WVpDcWF5b0lrcUlOaHVpeVlUTmFFUzBWRXpBNlZrV3BzMi93ZG5McGIrNXczVmhZSFFVZVlYRm5MbHlIZThtNGZUNnk5c29sRldEM0c0cUpUN2U4bndtU1JLbmQ2N2w0dUh0QUplUm8wTm1aOVA2QklYQUpsRkMwenZhaTZXemcralV1c3pqVWlnUUpCSEp3VGtNczBWaTdSZlp2TDh4ay94Q0c1Mjc5V0wxeHUwRUJEYXVLZXdDYkNLa2xpVzEzbi85V1haOVhwSHc5V3ZhbW83alhrRGpWN09OeWdRQUlFa2NXck9JdElzbkFPWUFxNXpsQmJhTEV0ZUJEWEZuaXRvUG1abE1yMDVlakl6VkV0dk5pekM5TzU0YUJhSUlXWGtXTGw4M3NmdkhBcjQ5WWlBang0SlNxZUNwWitjeWIrRXkxT3E2QXlhdXdOZGY3bWg0ekVoQ093L0NTeGRXNS9Kc2h5RFFlZlJUNVFROFRpMEVnTHl4aUFZZWx5UVd4NTBwYWhaM3BpTFAwVWlqd0d5UnNGZ3Job0pTcVdUNDZBbjhkZTZydEcwZlhVV1oyV3hpNlNzdmtITHpHalAvT28vWVFjUHFaN1FUYUlOYTROMjRhYTB5R1pkUDRkYXlUUlVIemplNE9kNjZFQXF6MHFJQmJWMlpJUnV3RG5sUDNoVVloK3pQaHhhWGlucEFEWGlITlczT3JPZGZac0NRRVFTRmhEbFU5T1BCNy9sOGsreXRIZjN4RUNNZW1zaHJ5MWFpRDdxYm9JOXpsT1psY216VE1qSzdEcVRQOVBsVnlyUzZZQXF6MGdRZ3BMNEhKQ1Rrb09JQ1lCZ1FCZWlRb3p0MGlPN0tJMDg4N2JUekFBVUY4aW1WUGlGTkNmSHlaczgzWC9KZ3IzWnNXTE1LbTgzMU5GaGRzSnJsQ2RoaXJEa1JLOTNzTHIrbXdVK0lkTkVIY1dEaWRPWjA3b0dwdElRM0Y4NWx6S0J1bkRrWjM5Q21BTC9URVJrUGxZb1hPL2ZnMjdGVDZkb2ttRXNYempKbFZDd240dXNkeUxsbitGM1BDTFh5QzJCeFRELzgxQjdZYkZiT25qN1I0RGI4YmlkRWlpeG0zajM1QzVzdm5zTW1TWFRwM3B1SkR6L1I0SGI4TGdRY1RMbk9vcU5IU0M4cVJLdjFZYzc4SlR3MmN6WUtSY1dBek1uT1pNdjYxUmlOcFVnU0ZCcmw1K2RPeXRHdU94ZU9VcFIxeTJrYjVtTFpDU3k0YzVPRUE5dG9FenZXSHNtdWpBWWpRQ2piUXE5UCtCV0QyWVFnQ0l5Yk1wMVhseXgzdUZQY3YyY25IeXhmNmxSZlp0SXBNcE5PMWRsdVlmWnR6dXhhaHk2OERmcVdOWEtqRFVkQXU0N1JLSlVxREdZVExWdTE0WTNsSDlLamQzK244bU1uVHlNZ3NERVdxNFcvejU2QkFwSDFTeXJXOC9tcjFuQTlMWjFlajh4RFZjZHUwMTNqVGVPSWlrQ3FKTm8zYjFLREVSRFpwajFmZlgrVTlMUlUrZzhlanB1N2U2M3lIaDRhaG93WUE4Q0N1Yk5RSVRKcGNLeTkvSzExY21BcHJIMHYzRDFkUytaV0N0dW5OdWdjRU5XeEMxRWR1N2hjejF2clMwN21iVXBOSmpUcW10K3hLMGlLMjAxQlJncklCemF5R295QTRxSkNTa3FLMFRWdTRuTGRubjBIc0gzckJzYSt0SWl4QS9xZ1ZDanM2Zk9yeC9lamNxK2JGSnZGVE1iVmM2U2NPd3FDWUVXUzVybHNpQU4wQjZTUll5WkpWN05zRHEva0RJdjB4S3dYSktWS0pRRlNkTmNZS2U3c1RhZnlqcTc0aTNla0ZwRWQ2dnpQUVAwdUlSMTRzTHdEOTIwRTJHdzJMbDg2eitIOWU5aXdaaFYrSGhwMDNqNmNPUm5QUzg4K3hvSTNWdFNwNDRIVzdWQ3JQZkFQMExGNit6Rk8vTFNQcnpiL0w2ZmlEdEE0c2pOZU91ZStoN25FUU9ycHd5RG5JVDVGL2xkSkVrZ0hxSlE0dlc4RS9IUHgzOWl3WnBYOS91UEJJK21zRDZMUDUrczVkdlFIeGd6dVhxZU9mZ09Ic242Ym5HaFJ1Ym5UYytBb0VzK2Y0RlRjQVFLYVI2RnY0MXhIVVhaYU9RSEp3RHZPNU80YkFZT0hQVVJXUmpySlNaZEl1cFRBenF1WFNTa3NJTWRZaXJmV2g3NzloOVNwWThUWXlmZkxQRHZ1R3dFOSt3NmdaOThCcE55NHl2aWhQZGx5NlR4YkxwMEhZTW1TNVV5ZFB2T3U5THRwdEhob25ZZmFMS1gxaTBmZTkxV2dhWGdFdXc2ZFl0dm0vNlBRVU1DUTRXT0k2ZFAvSG1nV0VBVG52cHlieGhzNWdDdlZPQ0pmR1hkTGdBUWdpbUt0UWtFaFlidzRmOGxkTmxYV29DUzNWVmNjVU9NVFNKZUhYemwzYXV0Ykw5Y21kN2NFWEFPc1B4emNxM3h1eGlTaHNqTnpMMkVWd1ZTV2dEcDNVbzRaTkFxc081U21qK3hTZ0lPemdaVnh0d1RrQUMrVmxCU3YzUHZ0VncyenFSSUV3bU5HNFJNY1VhZW8xV3lxODQzY3EvOE4rZ0sxV2JRQ0dMQjUyUUphaDFkRWNudk5tSTNaWXMxR2pqT3VBbnBGVDU2SHhsZnZWSkdIMWgrMVY5MS9vN09VRm5GNDVkTTJtOFcwQ2prbDVoRDM2cTNsQTdYNXBoa0F2dDVldEFpUmp3aVZHRTJJc2xkV1hGYTNBTUJMRjRhWEx0U0ptdnJEYU1qQlpqRXBxZjNGTkpnN2ZBU1lPbXJPQWtkbGh4dklCb2RvS0FMV0F2N0kveDBvOTRORjREaXdzTExnaWMzTFVOeEZFclVjbGRQMmZ4YThoa3pLUFhKNmtKQlBwRG45L2dIK0M0UUxrRzQyeU5YUkFBQUFBRWxGVGtTdVFtQ0NcIiIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9nb2FsLTUwZTBjNWRkOTJlMGFmYjBkMjlmNzQ5ZTE3YmQ3Yzk1LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUVBQUFBQkFDQVlBQUFDcWFYSGVBQUFBQkhOQ1NWUUlDQWdJZkFoa2lBQUFBQWx3U0ZsekFBQUJ1d0FBQWJzQk91emo0Z0FBQUJsMFJWaDBVMjltZEhkaGNtVUFkM2QzTG1sdWEzTmpZWEJsTG05eVo1dnVQQm9BQUEwR1NVUkJWSGljNVp0NWRGUlZ0c1ovTy9NRVNVaElnRUFHRWdZRndpZ1FCc0ZBVUJBRFJrRVIydWV6SVE0Z09EMFJ1KzJXcDc3WDBBM1NpSjBHUlpwSlVTRTBrRWFlMEFpMEhReUtFTUlRRWlTRVBBaGtnRURtOGZRZnQ2cW9WTjFLS2lReHVQcGI2NjZxZSs0KysrNzkzWFBPM1h1ZktsRkswWllRRVU5Z0VUQUdpQVN1QUQ4QUs1UlNLYTF1Z0ZLcXpRNWdLUEFqb0hTT0d1Qi9BY2ZXdEVIYWFnU0lpQTl3Q3VnQ0VOVXZnbUY5dXBOYlVFVFNQMU1wTGE4MGlyNnZsSnJmYW5hMElRR3JnWGlBVmEvTzR0bTQrMHpYc2k0WE1PMk5EemllY1JHMDBUQmVLYlcvVmV4b1F3SnlnSzRQalI3QTlpVXZXRjNQTGJ4QnZ4bS9wcWlrRENCWktUV3lOZXh3YUEybGpVRkUvSUd1QURGRCsraktkUGJ6WnM3VU1jYlRBU0xpMkJxMnRBa0JRRGxRQjVqUGRTdEVkQTB3ZnZYQVFGaExvMDBJVUVxVkFwa0FXL2QvVDIxZG5hN2N5Ujh2bVorT0VaRUhSV1NzaUxpMmxDMXROUUlBTmdJY1RiL0FvZysyWXJrV25mdi9QTmJ1T21UZXRCNUlBcjRHTG9ySVloRUpvSmxveTBYUUNmZ1dHQXdRUGVRdTVrMGJSMmMvSDVMVHp2SE94enU1WGx6V21Kb2lZTDVTYXVOdDI5R1drYUNJaEtBOTFiNjJaRnpiZVJNUkUwZnZCeC9IMmNPTHJJTzd5VHIwSlhtbmZ6QVgreXZ3akZJcXI4azIzQUdoc0JQd1BMQVk4REcvTnVqSkJZeCtkUW1PTHRaVC92eUJKUGErR1U5cGZxNnhxUUI0WGluMVJaUHUzOVlFQUloSUtMQU5HQVRhVTcvL2Y5WVJFZk53Zy8wcWJseGovOXN2a0o3MGlYbnpaOEJjcFZTaFhmZHVhd0pFSkJiNEMrQUxFTmhuTUpOWGZJNTN0KzUyNjhqY204aSszejVMK2JWOFk5TVZJRjRwdGF2Uis5c2lRRVRhQTY4QUk5R3l0Q3pnTzdRczdaemQxdG02c1RiMGYyZTRCd0FEWnM1anpPdkxjSFIyYWJLKzhtdjU3SHZyT1RLLzJtYmV2QjV0V3RoY1RYVUpFSkV4d0FZZ1dLZFBHZkNhVXVxREpsdDVTMzgzdEtFYUJlRGkxWjRKNzY2bDUvMlAzcTVLRTQ2cytSM2ZMRjlrM3ZROUVLdVV5dFdUdHlKQVJJS0FreGdXcEJHUkVRem9FY3pGcTRWOGxYS0txdW9hbytoa3BkVGZtbXFnaUV4Q0k5Y1BJT0R1Z1V4ZThRVSt3ZUZOVldXRmk0Zi9UdEpMajFGUlpEWDlMd0NEbEZMWHJlelJJV0FIRU92Z0lHeGUvQXpUeHQxanVuYnEvQ1VlV0xDTTNNSWJvTTJ6OElhR2w0VmVSK0FkWUNFZ0FQMW5QTWZZUmUvcHJ2SW9SWGJ5WGs1OHRvYkttOWZwTzIwMnZSK2NZVlAvMFhYTE9mU0gxMUMxdFFBTUdyMkk0cUlMWktaOWFoVFpxcFNhMWlBQkJpTkxBTGM1VThhUXNQQkpxeHR0Mlp2Q3JOK3VNWjZPVkVvbDIrRzhLL0FsY0IrQWkyYzdZdDcra0Y2VEhyT1NyU2dxNUdUaU9rNXNXVTNSeGZwTFRZK1lPTWE5bFlDSDM2MEFzS2Fpbks5K1BkdjBKbkJ5OWlCNjZqb2kra3lucHJxTWJSOE5wL0JxbWxIOEVhVlVvcmxPeTFDNE4rQUdNSDdvM2JyT2pMK25Ydlkyc0VIUEFSRVJZRGtHNXp2MjdzL014S05XenVjZVA4eWVoVSt5K3Q0Z0RpMzlMM1BueTlEZThXVHVUV1Q5NUQ1ay9OOVdBRzVlem1iTEV5Tk56cmZ6Q1NIdWwvOGtvczkwRXhrUFBKYUlpNXUzVWRmemx2WTVXWngzTUg3eDgvYlNkY2pQMjdQZXFZN0R6c0FEd0N4Z0hOcGE0Z2dRZHU5RUhuby9FU2RYTndDcXkwbzRzMnN6cVo4bWtKK2VhcW5xTlBCbnRQWENDZmdBZUt6OGVnRkpDNllSSGgzTDVXUEpsRjh2QUNBb2RDejNULzhDTncvL2VrcThPMFRRSy9JWHBCMVpCUkF0SW1GS3FTeGJCQndEcWdDWHpKeXJqQjNVMjRxQXpKeDYwV2FtbWVNakRFNVAxeU1HSUxEdkVCeWRYU2pJU0NQMTB3VE83TnhFVldteHVVZ1ZrQWo4V1NsMTBLTDc0eUtTQ1B3SjhQdHgvMDdUaGI1RDV6THFnUlU0T0ZpNm82RlR0eEZHQWdRWWdmWktCeXdJVUVxVmlNZzNRUFNIT3c3eW41Tkg0K1JZZjVZa2JLdFhtU29Ya2JlQm1VQ1krUVUzTHllR1RPeUtnNU1EMzI3UHBxcWlsbS8vOURiSE5yMVA1YzBpU3hzdkFHdUF0UTNGODBxcHowWGtJTEFhbUFMZzV1SFBpSmlsTnAwM0VtQ0dlbmJxOWRvSlJQK1FuczNVMTFieTNvc3o2TkV0a01JYkpmeCswNWVzMnZwM2M5bnQ1aWVPVGc3MEc5dUpxRWRDR0RnaENCYzNyWWlUbjEzQ21XVE5MelBuNjREZFFBS3dSeW1sWHhTd2dGTHFLakJWUkZZQ0wxU1VGWEE4K1E4TUdmTWJtMzNhK1lUZzd0bVI4dEo4c0lodDlGNkREbWh6YjQ2eHpkUGR0ZUhLelJCL291SkNHQlliakpmdnJTaXV0cWFPSGN0UHNmT1BwNDFOcDRBemFGTnRzMUlxMnc2ZmRXRjRZMzBOakhaMjhXTDI2MFdJZysycTJjWVZvUlFYWlFPc1YwbzlaV3kzR2dHR0p4RXZJcVhBaTZCZnR1b2MwWjZvdUJDaUhnNmhZN0NuMWZWTFoyK3dabjRLMlNkTnNVY1dNTWJlSktVeEtLVnFSV1F6TUxxNnFvU2lhNW40K210clZzR1ZWQzZjM1VtZkljL2c3dGx3elVSMzRvaUlINGJNekJ6ZUFXNE1teExNaUxoUVFpTjk5UTJyVSt4WmM1WnRTOUtvcVRLTjZtUEE0eTNsdkJrT0c3OWN1NXBtSXVEQXJuanlMaDJodXFxRXFKZ2xEU3F3SWtCRTdnSjJBZUVBYnA1T0RKN1lsYWk0RU80ZUZZaURvOWhVbHA5ZHdvY3ZIU0VqeFpTVjFhSWxQSXVWVXRWTmNzMCszRFIrcWE0dU5UV1dsMTRGb016dzJSRHFFV0NZVjBsQWQ0QUpjM3J5Nk1KSVhOd2JyMGdmMlBRalcvNzdPQldscGx3aEEzanlKOW5mYXdZc1I4QVVETTQvc3JBZkQ4M1hqd2JOVVpSWHpzZXZmTWVKL2Faa1M2RUZMUXZ0elJQYUVwWUVEQUlRZ1ZIVHczVEU2eU5sNTBVMkxEcEthVkdWc1NrSGVGb3B0YTlGcld4RldCSVFCTkNoaXdlK25keHRkcW9xcjJYdHkwZEkyWG5SdkhrajhJSlM2a2FMVzltS3NDUkFXK0hFOWtJSHNQZmpESFBuQzlBcXNva05kTGxqWVR0K2JBQzVtYWJGdHhEb2E0ak9mcFpvN3M1UXljL1plV2picmJFN0FyYzFCZlFnSW1HQU4zQmFLVlhWbUh3ejd0TURlQVN0Y0dQYVNNbEsveXZGUlJjQXFLelFFcTdDSzhmNTdzQmI5ZG9zMFZ3Q3ZFUmtHVEFKclpvRVVDVWllNERubEZLWG02bS9Ia1JrSmxyYTdHRjVMU3Q5QjFucE8rcTFGVnhKcGVDS1ZhR2xIcG83QmZ5QWw3bmxQSUFMRUF1Y0ZKRmh6ZFFQZ0lpNGlNZ3FZQk02empjSFRSNEJoWmZLT0o5NnJSWkRtVXZFZ2JEZVV3anRGWXViZXdjdVpDUngrdWhIZ1BJRk5vaklBS1ZVK2UwYWFOaEQrQUlZQnVEdjdjcm1oVU9aTURpd1NYcENmN0diN0R6cndMUkpCQno4NUR3YmYzVzBxcWFxemdYQXUwTTQwVlAvUXVmZ1ViZHUxQ3VXZ0M3M2NHQlhQRUJQdExyQ3lpWlphNENJeEFDZkFQNEFRM3QxWU91YncrbldzZVVHZ1M0QnhZVVZKRHgzdUY1YjRlVXl6bjFmQU9BQ1F0OTduaVVxNXZjNHUxalhBdTRlUElmVXc4dTVYcEFPV2cydVNRUVlLc20vUXRzeGRnQjQvcUZ3M251MlB5NU9MZnZpMGlXZ3FyeldNc3cxd2N1N0cvZkZycVZiZUV5RGl2MDdEVEFTMEw4cEJvbUlMMXBZL1NDQXA1c1RxeGNNWW1hMDNpNWQ4NkZMZ0lPREUrMDcxTitxRW5FZ0tDeWE0ZEh2bXRmWmJjTEJ5YlRiWXp1cHNJQ0lEQUsyWWloYzl1cmFqbTIvaWFKUFNIdDdWVFFadWdSNHRnL2lpWG5wZGluSVBMbUY3SXkvMGJQZkV3VDNtSGpiaG9qSUw0RlZHRFptSGgzZGxZOWZHVUk3OThhWHFRMzdzbmw1ZFNvbDVWb3RJc0RIalU5ZUg4cW92djZOOUd4R0hIQTkvelNIZHMvalV0YlhBQlJlVGIwdEFrVEVEYTErOERTQWs2T3dkSFlrTDhYMXNGdEhVa291aFRkdnhWNDUrV1dzMzVkOVd3U2NCdkR0YUxzUVVsMVp6SGNIRjNNaVpTVjF0YmVxWEZXVk4yMzIwWU9JdUFCVDBSYTdTSUF1ZnU1ODlzWXd1d3czeDlMWi9lZ1g2azFwUlEwSlNlZTVXVlpOZFkxZFZYWXJBcFlOSC9lT1g3K2g4MS9URTg1TSs1VGtyMTZsdE5nVTROV2laWVIyLzF4TlJDTFFYbzFQbWZjYkc5bVJMVzhNSTlEWHpWNVZKb1FHZXZMbXpMc0EySElnaDV0bDlwY2ZMWGVHYXVjdTVveWxrS3FyWlYvaUxESlBiakZ2UGd6TUJSWUEvOUhRVGN5ZWRqd1FqYkh1Z0JiWXpKOFN3UnN6ZXVQbzBIQWRvalZnMXhwdzlzUkdjK2Z6MFBiNDF5dWxsRFJTUEVGN3lqbFlqSkw3K25ja2ZsSjNIaDRaaEt0ejJ5V2xsbFhoZ1Y3dGdoWU5qMWxDejhpWnB2WXJPYWFmQU9RRHZaUlMrcWtWVUZ0VHdibFRuNU9iL1E5ams3dmhvS08zSzA5TkNHWE94REI2Qk9udlB2L1VzQndCRDVjVVgrcDU2dWpxZWdUVTFwcFcyREpienRkVWwvSE5uaGM1bTdxQnl2SmJ2MFFSZ2VnQkFjUlA2czdVRVYxYVBKS3pSSUNQSzlsNVpRVDQyTGVXV0JLd3FsdjQrUDVSNDVmR052WEc1YVg1blBqMmo2YnpRRjgzbm9vSlljNmtNTUk3LzNSUGUvV0N3V3hQdnNTODJBaTc1QzBYd2J5NWk5bU9sczQyR1NJd2ZtQWc4WlBDbUJMVkJlZFdmdHA2R0JqaHc4QUluOFlGRFdpeGlwQy90eXRIVmtZVDFzazZPYnFUVWU4UmljallEOTl0dCt4NDhySW1LL0owZGJ3am5GKzJMWVBnV2JzNWNDSy9jV0dzSzBLenFxdExPcHo2UHFIbExmdUpzUHZJRlhMeXkvaEhXb0ZkOHBaVHdBbWdycTVHUi9UbmdYV3ZER0hmc1R5bTMydmZQMnhhYkEyNFV4QWM0TUhUOTRmYUxmOXZ2eS93YjArQTdoU29yQ2d5YlNpQXRzSFFHSXBLcTNscjQrbEc1ZG9LUmFVMk1rU0xQek4vaFA0Zm1ZM0hPWjAvUURmVzUwNDdQakszMzNJS2JFSkxlUFJRaWZhYlBrczAxT2RPUXo2YXZTYjhDOTdMYnAzUFFtK0dBQUFBQUVsRlRrU3VRbUNDXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFFQUFBQUJBQ0FZQUFBQ3FhWEhlQUFBQUJITkNTVlFJQ0FnSWZBaGtpQUFBQUFsd1NGbHpBQUFCMkFBQUFkZ0IrbHltY2dBQUFCbDBSVmgwVTI5bWRIZGhjbVVBZDNkM0xtbHVhM05qWVhCbExtOXlaNXZ1UEJvQUFCSHlTVVJCVkhpYzdadDdYSlRWMXNlL3d6REFNTndGdkNBZ0tIb3NmVU5GOGhxb2FKcWcyRVd6ekZ0bWlVcDE4aHhUTzVaV2FtV3ZlZmVrcjdmc0l0MG9zVXhCdkZRV1VXQXExRUZSTHBhSmNyOEl5T3ozanozUHdNQU16SkRWUCtmMytUeWZlV2J2dGRmZWErMjkxMTU3N2YzQWY5RXVPQUJ2QU1YQWRXQ2RJZTNQZ2h1d0ViaG9lRFlhMHY0MDdBUkVzMmZubjFTM0QvQ2ptZnF6Z2M1L1JnTm1BRUtuMFlpdjVqd2d2cHp6Z05CcE5Fb2padnpCZGZzQ1p3RGhIeGdrM3RpNlc2emJza3Y0QndZcDlaOHgwQ2p3UkhiTU5lUklXUXFvbXpLMHM3RUJQVld3Q1dCelRDUkRBam96TktBejIyTkhBYUNDTGNCdHRzdlZQdWhjWFBIckdzRHlsOWJpSHhnRTBBZElRU3JCRnpnQnpBSTZBTjJBbDRIRlRYbllvZ0F0a0NEQVpWYS8yNWdSMnR1WU1iVnZUMmIyNjQwQVp5QUIrZnRINENwd0wxQlZrSGVSbGM4dG9xeXNGSGQzRDNOS1NERzhuMFVLSDIzZ01hY3BRNVVObGU4Q1p0N3UyNEcweDZmZ3JMRTN5YXlwdjhuZzdRbWN2bkpOb1oxdHEzUnRvRGV3RUhnRWNGRVMvUU9EV1A3U1d0emRQU2dySzJYbGM0c295THVvWko4RlJpRVZCM0thUUJPNXJSMEJVNEdaT28yR2hDbmpXZ2dQb05YWWt6RGxIbHdkTkNDSDNhMndCM1pBREhBWU9BZk1VNmxVTHVHRGhyRHExWFYwN3hGQ0t5UEJLbGd6QW5xcTRIc0JMcnZ2SFcweTlNMWhkMFkyc3o0K2dncXFCUXdFc3RyZzc0dnMyV2dnQk5DWkk5STZPek0rZWlLVHAwNGpPTGdIQU1YRjE1bjMyQXd1bk05cGJTUTBIUVV0UmtCYkN0QUNwNEE3bW1lSWxmRW0vMVhMTjVncmZ3NElCNm90OEw4ZmFhVmRXMjJFVnN2Yit4TUpDT3pXSXM5R0pmeW1OSmZtTHhhd0M1aHBMc05LQlFEc1JrNko1cmdmYVRCVjRTRStUQXdQSktTek8wNmF4bFdxckxxTzU5NUpKNitva3VEdUlXemJzUWN2cnc0dEdObWdoRDVLYzJuK1lnTUV0S29BYTNqNkF1Y0IxK21SSWR3LzJQS2N2Y1ZLYU5GR1cvMkFXNFdGZ0d0NGlFK3J3Z080T3p2dzBrTmhCUHE0a0hzaGh5Zm16S0M0K0hvTE9pK3ZEbXpkdnNkbXcvaFhLU0FHWUdKNG9GWEV0MElKaTU1OXdTenZ2MG9Cd1FBaG5keXRMdkI3bFdBSjdiRUJ0d0pGZ1BlYVI4SzVyYXVIVFFXdHRRbEhEbi9Pa244OEJXQWMvazNzd084eWdyY0Nyd0dMckNGMDBxZ0o2ZUpPYkhnZ0EzdjRBTllwWWY0VHMvbjIxRmNBVmJUMExYNlhFUXhGYmpKcWFkeUsxZ0xIRFhuV1lBbndxaldFTitvYk9KTlh6SXZ2WjdEditIbWc3ZWx3TWZjQ2FkOThEVkFKOUVmNkkyZk44YmQxQkhnQU9ZQzNoZnhyU0cvTzhxUXpoUUFvelV5eVNIQ2xxSmoza283eThwWjkxTmZmNUY4UDlHdHpKS3g1K1FVK1NIZ1hZQ3NRUitNV3VZVWoxTllJR0lQY1BzWUE5c0RUZ1BkZG9jNlVKZmRDbk9xTk9OV2JzdVJlREx2REdhUmkvbTZnbldBb084WktaWmhGSng4dm5wcDFQMHZuUFF6QUoybDV4anh6SXlFLzd4SUhrejRCcWR5TkJ0S3JORzZJVEdCcEJEZ0Fid0dUbTZUVkFRNHFGUnpkRkVoa2Y5TWQ3OUgwS3FMaTh4SFMyNjRITkUyeUU1Qzd1THBtZGV0VktoVWxHUWNzeVcvRWxhSmkvalo2T2xvSGUvWS9NOUlrcitsSTBHcTExTlRVQUJ5aHBmS3QyZzA2QU84RGt6MWQxY1RkNThudHdZNEFEaDI5N05tNXJFc0w0UUZHaHVuWXNiUXpIYjNzQVRSOWdoMkp1ODhURHhjMVNFVytqMm5jTUJCa0Qxc0RoYTZtN21hTFBIZG5CMVk4T0VEbVMrR2hzZmRiUmN0OXJlejVDUjNjMVNSdkRDQTB4QW1BaW1vOU9pYzc3RnFaTkxPalBaZ2Q3VUZGdFI1WFowbjQyRVFQb2hibWM3MnNZWUtCOXhRRGVUekEwQUY5ekROckJhOThmSnFINytwQjF3Nk54bDF0WnpLWUx3QUhyZUhWZkFyY0RSenlkRlZ6ZEhPajhFMXhKSzJLaEpSeVRtWldVMWdrZThQZjE1N2hvYzVNSHVWRzFNQ1d1OW5NbkJ1TWlNdW50TElCWURSUURueXR0ck5USDM5dlBYMTZXcmQvOXh0eVAxWFZOd0J3Y2RLSVY2YUhxL3dOU3NncUxPWFp0OUpBR3VuRndNZG1XTFE1QmU0QWVHaU1Xd3ZoLzVOZlI4UzhQTVk4bWMrT1QwdjVPYitPcWhvOVZUVjZmc3FyWS9zbnBZeU96eWN5TG8rY2dqcVRzcUVoVGt3ZFk0eGFod0tyQWZYQ0dmZGFMVHpBNWE4L0lPZm9QaVpFRGFYeVJyM3FyV001eHJ6c3doTGw5YmdGNGMyaXVRS3lBSTVubUc3ZlQyUldNMmpPSlU1a1Z1UHI1Y3lLK0NGOC8vSERsUDB3bjdJZjVwUCswVU9zaUIrQ2o1ZVc0eG1TOW1TbUtZOG1QTE9CUVFBTHBrK3l0cDFHK0hoNXNIYkpQQURPRlJpRjVtVFdGZVgxY3d0RkJ6UjU3Nis4TkZmQUlhRCtiRzR0MVRmMGdPejUySDhXVWxMUndIMTNoL0R6NFprc214Zk9IWC96UWFmVm9OTnFDTzN0eTdKNTRmejh4U3dtamU1QmNYa0RzWXNMT1Y4b1IwSkZ0WjZzaTdVZ1Y0RXZnRUtBdlI4ZHBrR3Z0MWtKbGRYUzBObXJaZk5QWHlvbTk3Y0trSWMwNWhUZ0FqUjFOcEl3ZUlkTkZlQUJMQWMwSGIzczBUb2FqTmpxWDQzQ3Y3ZHVQSzQ2QjVKU2N4azE0d1BjKzIvR3ZmOW1vbVoreU1GakYzRnpjV0QvRytPTlNwaTc1bGNBZEU1MitIcmFnMXdGL29VaHRMNXk0eDdDWTUrd1duQWhCTjlrWnZIb1l1bEVEdXp1emMwR1BidU8vcXlRckFkcXpCU2RCWFFLNjl1UnNMNGRRUjZnbUFScFFwRmVuRkNwRUR1WGRSYmlWRzl4ZUgyQUFJU3ZsN01vU1k4VE43T2ZFcy9PSGRqOFJNYjRMSDBpWE56TWZrcGNUNXNuZkR5MUFoREpHd09FT05WYjdGamFXYWhVUnRxcndBdEt1ZExNSktzZXYwN2V4cnI4T3VqRTN2aElFUk1Xb0tUbFlqa2NmeFFRNy96dlBlTHQxOGNwOUNuUU9BSTJBQjJHM2VGTXlzWkFaa1hMSFZwQ1Nqa0E4NmVGR250K3padmZnUnpLaXdFL3cvTXNVTGRxV3hvSGoxM0UzZFdSdUdtaEpqd2VqZkVnZVVNQXcwT2RRUjV2alVCdVZMaFNWR3loM2FhNExFUHVUQmthek5ycGQzSW9vNEFENmZsS2U2WmpPZmJZSDJCby95NE1HK0Jua3FZb0lCemc0T3YrakJqUXFFVEZrTVdNa0paNjNlNGZsS3pseU0zTUw0Ym5GZUI1Z0RmMi9HQlM1a1FUZ3pveVRFZlNXbi9sNzUxQUdzQzdCMUtzVW9DQ1NYZDI0ODBqUC9IT3lRc0FEY2pEamk5YktWSUZjS213bkl1RlpTWnBpaVBrQ09DbU03V0psdzNyZkhDQUhCSGZuMVgyRXV3MVU4a2VZSFg2R1VuVDNWQ204S3FwNTlha0RrZGdCVEJpMWRhM0FaZ2FNOG9xenpEdXphOG9ycXdGMmVPemdmMXRGTmtMUEJzeExhRjVtbGxQc0FXRUVNMlR6TzBoN0FCVUtxV01JYkgxN2RaeFlGbDkvYzJYVm16WW8xcXhZWTlab3VhN1JZUHdhVWpoejdWYWc4VHpodC9weVBtL0YybURqRk9nRnFDOHluUko4dk9SK3NrdGtNTW1yRzhuSld1Nm1VcW1Bd3pvMHhHQUMvbWxCaDRhRTZLeVNtTWR0WWJmVlVnUDFQS2V1Q1VlQVFaam5mQWdiY1FTcEwzcWlqd2xyb05HQlh3TEVMMm9nS1BwVmNaU2QvV1Q5dUJBYWk0QVQ4ODArZzhya0lhdmk0SHBFZ3dhVldpVU1uZUZOdHFVNU8rcUdQOU12dkwzMnlZTlBJSWhVQXF5eDVzK1pyQVBzTjJCTUFORkFmRkEwY25NYXFMaTg5bVpKSHR2OGlqcHZtNStLNVB5eWpyR1J3YXg5SWx3a092NWF1QXkwcWxaQlRnc214Zk9QUkZCbEZYVXN1WHQwd1llOHRCbng2ZlNWZjdxeHhxUU1VSFRnNFcvQ0lvQ1RpTWpPU3VGZ0tWYml4QUNvZ2JxaU9qblRGRkpEWTh1UFl4ZUwxajU1QkErMlRxUkVZUDhjWEhXNE9Lc1ljUWdmejdkTnBFVjhVUFE2d1d6bHh6bVdra05JOE4wakF6VG9kZkRzbTFGU3AwckRYV2RCc0tROC9NTDVFRUpBRC9sR2tjSkZ0SitCajR3bEwzOTl5aWd1VEd6Unk0UERsV3B2WEIyc2lPbm9JNUJjeTVSWE43QXBORTkyUEh5YU54ZEhjMHlLNnVvNWRHbFIwaE1QazhITnpYZjd1eEdkejhIS212MHVJNzhHZVM4Y3dFbUlhZFFQM044bkxXT3JGMHlqNGNtUkFId3pxZkpMRnE5amVxYUc1YmsrQTY1TEg5Z2svUzBWRUEwY0tCUHNDTm4zZzQySnA3TXJDWjJjU0hGNVExNGUycVpQeTJVNk1nZ1FycDVJb1RnZkY0cFNjY3VzbmxmSnRkS2F1amdwaWJ4MWE1S21BeUFQZy9uY2k2M0ZtVHY5UUp3OG5LbjY0aHdzTFBqL1B0ZjRCc1Joc2JkbGN1ZnBnS1lLQURBYjhJSTZzc3F1SG84blI0UDNBMTZQWVdwYWR3b05xN3RoNUF4UUpOek1GdndUMERFM2VjcHhLbmVKay9PKzkzRmlBSE9GdDFnNVJrWnBoUG5QK2plb3Z5Qyt6Mk5ORnB2VHpGdzJlTmlhdVpIWWxyV0FUSGg0RFlCQ0VkdlR6RTI0MFBSZCtWQ29kWTZHdW5WVG82aTc0b0ZZbXpHaDhMUlcvS1pjSENibUpaMVFFek4rRkFNWERaWE9IWHdVT2lMa01meVZxSDVLcDBKOE83aGNqSnpUSWRiajY0T0hOMFVTUExHQU9iR2V0QzdteU11V2p0Y3RIYmNGdVRJNDdHZXBHd01JR1ZqQU4zOVRHL01mWE8yaHAxSnNwZjhJZ1l5UG5FanZSNk9SaTB2VStBVzVJZld4NHZhYXlWVVhmb0ZuNkg5Y09yWUdIaDI2dVNOejdEK1ZGMjZUTzIxRXJRK1hyZ0ZTWmRXN2VoQXI0ZGppUDVrRTEyR0R3RHdSa1VxY0pjMUNqRG4wT3dISm51NXFVWEtwZ0NWRWhncHI5TGpvbTA5SkFhZzEwUFZqY2FRV0diT0RTVWtSdmRKVVF4Nk1SNlZYY3RxdjF6MEdwYytPMEZJM0lQOCtzVlhWRjRvd0NORW5oMlc1dVRoMGlPQXptT0drTFBsUGJyZGN4ZkQxdjZqQlEraEY1eDZiajI1aVNrZ1ErQURrQ3VWVFFwUWdxSVRQRjNWVEIzanh2R01hczdsMXVMcmFjL3FPQjltUjVzL3p0cnhhU25MdGhWeHRlUW10d1U1RXRuZm1YY1BsMU5TMFVEWGtYY1NzWDRwS3JWNURlWWtIT0xiRnpZYi8zdUVCQksxNjJVQWttY3RvelNuTVJ4KzV3dnpDWms4MWl3ZjBhRG5lUHdxQ2xPL0JYbUFFMGxqS013cUJTaEtzQmdXVDk0UXdNZ3cwOWhmU25vVlVRdnpUV2lWUDFvZlQ2SVROK0hvS2YwS29SZms3UCtjbklSRGxGOHNwS0d1M2xMN1dvWGFRWU5iVUZkQ3Bvd2xaUEk0NDhpNlVWekd3ZGlGMUZ3ckFibmlKRnJrWVNHOUFibWtmSTEwTjljai9XNFZFSkg3U3ozM1Jicmg1Q0FyTEt2VU0zZk5GZkovcXdmcEpZNEZ2a2NlampnTVhQWTRQdjE2RzRVLytmZFh5TnIxRVRldWx5SWEydS9RaVFZOU42Nlhjdmw0T3VVWENnZ1lNeFNWU29XOTFna0hWeDJGcVdrZzd5MysyeEtQVzMwMGRoWG9DWlFoSFpTenpoMjlpVDI4SFR2RHpiTC92UHNaYVM5dXhkWE5qY1ZMbGpNOFlnUTZuWXNGZHEyanFxcVNFOGRTZVhYTlNpckt5d2wvUG82ZVU4WUIwRkJYVCtLWU9kUmNMUVpwQzM0d3g4UFd3OUZTWkZqN0JLYW5QSFhJbmQxb3BQQWdMelFTY1BkUW8vQWc1enJBNGlYTEdYdFBUTHVGQjlEcFhCZzNQb1ovUHJ0Yzh0NS95SmluZHRBUU9HYW84amU2WldtSjlwd09ad0lSeVAyOHl2QTRJbzNOajAzb29nQTZEemE5WUZaK1NScmw0UkVqTEZaUVgxL1BoamRlWSt5b1lZeUxHczdHOVd1cHI3ZHNKNFpIUkVyZUZ3dE4wanNOTmg1V1Ixb3FhMVU4b0ozb0NlQWU3RytTcUhaMG9LRzJqcnE2T25SbWJ3VEN0aTNyMmJ0cmgvSC9ucDNiVWFGaXdaUFBtS1ZYbEtOMk5QVS8zSHNZNi9iREF0cWpBR3R2aVhrQk9QbDRBckR2dGhnVCtvTDhQRHc5elVkL1BqdndDUUNUM2s1R0NFSGl0TkVjUEpCb1VRRUZlWEtKckN1dk5OWXpMZXNBV205UGhhU0xKV0greUR0QzBwWFVtMStDQ3d0YTd2aWFRd2hCNS82RFdaUlZ4dWZKSnkzU0ZSVGttVTF2c3NKWVhHcitTQVZjQUxoK1ZoNWZUY3M2d0xTc0EvU2Q5eUFBK1htWExCWWNIeE1MUU9LMDBlaG9ZTmpOMXU5YkZPUkxCZlNkOTZDeEhvRHI1NHc3N1BQbVMvNnhDa2dFeU41ajZvTzRCc2lQT3ZMenpmY2F3T054OGN5Y1BSY2ZIMThlckw5Q1YyRnhHMnpDUytHdElIdVg4WWpRNGdXRXRoU3dpNVk3dnJhZzBLMEFLRXhONCt5L0c2T3hTaU1MTFF4YkFJMUd3NElubjJsMTJEZUZ3cXVwQXM1czI4L2xFK2tnbCtWTmxzcTJaUVFYSU04TTJ2c1Z5R1dnVStiNnQ5UkZwMytpOTR4WVhMckk2em9GK1czYkFHdWg4Tko2ZTNMbG05Tms3MDVVaE5jajd6cGZzMVRXR2svd2RtUUFVN2RyMG1obTlyUHB1bnc0Y2puOFArVDNPeVk0Y3V5VXhaWEFXcFNVRkRNNmNyQzVyRExrK1YrclIrWFcySUJ6eUpIQWdxUmpaTFZ5akpWVlZNeUNwR01BQ0podktQc3hVZ2tyZ0F5Z1FxRXZhTVVPV0l0bVBDcVFMdTlLb0FkVzNCUDRxejZaZVJkNDBJYTZyY0Y3eUM5YmJJSXRxOEFDNE55NXE5ZVpuNVRhSWpNdUtWVVIvaHp5Tm5ocnlHa2p2ejFvRjA5YlBNRXFaSHdnYlhkR3RpNHlxS3Z4ODVrOW1kbnN6c2hXNXYxa0EyMXIrQjdBenorQXRSdDJvRlpiMnBXM2pvYUdteXhhK0JpWEMvTUIwdHZEdzlhYWk1Q1dQZmJJK1FJaWc3cVNYMWJKMUlSRDFNdWJIbzhCeVZid3VRUThWRkZlNXBtZmwwdHdjQWd1cnE2b1ZOYk5TQ0VFdi81U3lKdWIxdkZUOWxtUVR0ZlR5RGpHbjRKYjhlbnMveUF0ZFp1UjVqYWVVcUR2NzVLbUhYQkFmakI5SGJuR3ZrNzdQcDd1Z2pTWXYyRzc0TDhobDFlTEc1My93Z3I4UHhZL1kwNTJyNkFXQUFBQUFFbEZUa1N1UW1DQ1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRUFBQUFCQUNBWUFBQUNxYVhIZUFBQUFCSE5DU1ZRSUNBZ0lmQWhraUFBQUFBbHdTRmx6QUFBQjJBQUFBZGdCK2x5bWNnQUFBQmwwUlZoMFUyOW1kSGRoY21VQWQzZDNMbWx1YTNOallYQmxMbTl5WjV2dVBCb0FBQTBIU1VSQlZIaWM1WnQzZEZUVkZzWi9NNWswUWhJSUtSQklRaVRCQkJDVVVLSWdkVkY4UVdrMlFCRlFuMlg1VUN6UHNtVHBVN0F2eThQNmJDQkZSUVNXVWdSOG9Ta3FuVWdMUlJJQ0NTUVFRa0tTU2FhYzk4ZVpjM05uTXNsTWloTmM3MXZycm5YUHZlZmUyZDgrZTUrejl6NTNvR1VRQWp3SjdBVXFnQXZBZW1BOFlHZ2htWHlHQk9BZ0lPbzRGZ0VtWHduajU2c2Zjc0FmMkFqMEFFaTlJcGJiUnFXVG1oaEwzdGxpS3F1cUFYb0NRY0NQUHBiTko1aUJZNlR2blRoVVZPMWVJT3haaTRROWE1SEl6M3hQWEpVY3A2eWdDdWprQzRHTXZ2Z1JIY1lEdEk4TTU1Mm5wdUp2cWpIQTlwSGh2UGZzTk5VTUFESjhJWkN2RlJBUGtOWXRrYUJBLzFvMzAzc202WldTNkF1QmZLMkFBb0Q4d2hLM053dUxTN0ZZYmFwWjVndUJmSzJBblFCN3MzTlp2KzMzV2pkZisyeVZ2cm5aUnpMNUZESEFKVUMwYmhVa1huOXNzdGkvNGxXeGJkSHpZc2I0d2ZxbGNHT0xTdmtuWVFqd0ZYS0dyeXNHRU1CSklLbGxSUHh6NEFlOEF0aXBuN2dkV0k0TWxOeWhKN0FDeUFGK0JtNzlNNFZ1TGhpQkwxQWtnNElGWTZjS0hwa3JtUHFJb0VPY1hnRW5nS3Zjdk1NRVBBV1lxYTJ3dTMzQW9kRXdBQitnQk83Y1ZiRG1rR0JuYWMyeHJWQXcraFk5S1RQd05UQVZ1QVY0RG4zWTdCOGd5SmdraUd5ditwL21NczBkUW9HbEtNR05Sc0d5bmM3azFiRzlSRER0VWRtblBoZEo3aUZZdUVVKzg5RHorbnRodmlEVWtPU2tIM0FJdmZEcHc5eVQxeDlmYkJLTW1DQUlidVZNUEQ1SnVzeXY1MlcvTDdjSjJuZFM5MC9SUkF2d1JPeHE0Q09nRDNBTWVCajRvWTYrWFlBWGdkdHJDWlUrM0xNazNYckR5L1BCYW9IOGsyQ3VnS2dPMERaUzNyZGE0SXUzNGNPNVVGMmxucHFEVkVTalVaLzIwb0YxT0p1WURiZ0R1WnlCak5rbkFkT0JRZHI3Z29MaGlsUTR1RnYyV3J3VnJ1elZPQW1MaStDSGIyREp1M0RtbExwcUFXWURyemJ1cFRXb3l3TFNrU01kWmpRWXVHOWdGNzc0TFlmeWFxc2ZNbDhIeUFMV29GKzJEQVlZZFRQTWZBSGVtUzBWRUI0QnllNG1keDBPN0lMdkZrSHJNQWhyQStWbGNPNE1ITm9MeHc2QWNCcmtROENkd0s3R0VQWUc2VUFKSUl3R2cvaDBTajhoNXQwbU5qMDhUSVFFbUpUdldZRjhsSjlHeHdwbVBDNVl2a2Y2Nlk2TGdvaG9lVy80T00vK241QmMvd1FvandQQU5LVFZOUnRjTGFBL2N1VERqUVlESDAvdXk0eDBtWlFOVG9waTlRT0R5UGhnaTdLRURnRDgvV200NTU5Z2RHUnhSN0xnMHplZ3VGQzIrdzZxWDRKRGV5SDNxT3ZWS3FBSU9BNWtJb3NqdjlCRWYzY0h2UUw2STMwK0hNQm9nSkFBNTRLUml4TGt4ZFpoVUhZUk5xK0d0VXRoNXhabmsrMDd1SDRKMW4yanp1eklkUGtpTWwvd0NkUWtxSkUzR2d3RW1veFVXbXlZakFZVzNaWE8rRjZkV0xvN2ovVE83VWlLYXMzbVkwWE9TcWdMMFIxaHphRzY3OXZ0TUtZYkZPYURUSUNHTlFlcGh1SXFkRDcvMlpSK1l1UE1vWnEvbTR3R2tSYlhWZ0NpVGJDLzJQSEVDSGR6Z2pyT0FtOGpaMmtadGRYbit4K3Qxajk3YjB1UU53THpjSXo4SjVQN01qMDlrU0hKMGF5Ni8zcENBa3hZN1lKZGVSY0FLS20wTU9MZFRleklMZGJjSVNUQWFScDVIRmlDY2kyUDVyOU1uVlVEM3pZakw2OWhBRXFCMER2NkpyQndhcnJUelJmV0h1QzVOZnNCU0UxTjVmRGh3d2doYUJQc3ozLy9NWlRlY1cxZDNjR0dMR1JJVSs2ZUJpSDFSS3I3dDBORk9jQWU1T3BUM2N6OFBNSVBHQVBFSFR4VFNrcE1HTjA3aEdzM0YyelBZZStwRXNMQ3dzak96Z1pnNjlhdG1LMTI4aTlXTXJsUEFwMGpRaGpRSllwdjl1UmhzZG1ONkd0NVJRVndPcWZ1dzJKUlBUc0FrNEZma1FtT3oyQUNaZ0ticlhZUk1tWEJMd0RjMmpzT2dLN1JvUUNVbHBZeWJkbzBNak16QVJudjNIeDFuUFlTNVE2ajM5K00yU0pyZXAzYnQ2SmRtT2NsTytkTUJlZExxMEdHMHV1QndjQys1cUhuRnNGQUw2QWI4SnNKR1ZHTkFWYTVLdUhCNjVQNDZLZmo1QlNYczJ5WjVxK29sVUtQZGlFQitCc05tSkVLMnZENlFKSTZ0dllvamMwdStPajdFOHljdHcrYlhZUWpjNDkwVDg5NWlTQWsyVFRIMFFkSlhFMWNwOVJDbndOc0EyNnhDd0pXWnAwaUpTYU0zbkZ0dWZtYVR1UVdWMUJRV2tsOFJBaG1pNTBxcTUyVldhZnBHaDFLajlodzloZGNaTmkvTjNLaFVwcjBvSjZSUEhacnNsY1NHZzBHK3FhMHhXSVZiTWs2QjNKRFpBVnlSV2tva29EYmdQdUJmd0Z2QWZjaDl4aXVRZFlrOVNOM3dUVVpHZ0tzQWtKTVJnT0w3N3BXY3dlRlRVY0xHZlBoVnNxcnJmZ1pEYnlZY1JWdmJjeW02SktXb1RIL3lUVHVHdVZjMmJMYUJIbUZGVm9vRng3aTcrUWl4MDVmSXZuTzlhbzVBL2k4Z2VRVGdXems5bHN0UkFRR2tSWVpRMXBrTk84ZDNFZVpwUnJnVzlkUWVCTjF1SU9DV2lLVkVwNzVQc3ZwQmFHdFROdzh1S1BUTmF0TjBQL0JqZXcrV3JNZkVHQXlzdW50UVZ6YkxRS0FrQ0FuVVFLOVphMkR6WEg0QThTM0RtWFNGU21rUlVhVEZobkRGYUZ5Y2o5ZlplYVZmVHZVTTd2YzdRdHNRaXFoM0dvWFRGbndDMHQzNXpsMUdKSWN6WnNUcm5ZcnhhMURPcm1TWWVHR2swN2tBYXF0ZHJKUDF1eDk3RHJpZEw5V2N1QUZUZ0lUa1hrRVp5c3JHQk9meUMySlhUWHlBTHZPT1htV1d3V0FCeVhzTDdqSXM2dWNOamFPcVpQcG81MU4zMksxTTJmaFlkWE1BOTVVamE1eE5aUGt1aDJhWUZYSTViQXgrQUhIaGtxVnpVWm1mbDZ0RHQ0cUFPcFFncHJ3ZEQ3L0dMS1l5WlZ4b1F6bzBjN3BKUXZXbmVTUGduTFZmQW5kNUpZYVh4TWtyZHVwWGY0SjBCNEFSZ0tyZ2IvVkl5dkl5ZTF6UjM5NlJVVHhVTGZhVnJxelJnRW5nUE9ldHNZMm9WUENwUG0vME8vMURhN2t0K0xZNzNjZC9XcXJuYm1MdGRIUEJUNERVZ0hhUndUUk5sVE9WMzhVbEhQMGxKWUFydE85SWdQNERrbCtKWTdkWlRkUTVLZUNKUC9qRFJPSkNBd0M0T2V6K1J3c09RL0Fybk9GNnBsZDZrRlBVRW9vdFF0QnBReDA3TUNqU0hPZURtRHlNM0RueUhpbkJ6OWZtMHZPbVFyVm5Jc01kVk1CVXVKRHRYNDY4NGNhQldRZzh3TTFJZm9qUythdVNuQkxQaklvR0lDWDkyMW40S3F2NmIxeU1mT1BIaUQzVW1tREZhQ1UwQk5aaEh3VEdJaGNZLzJSTlVGRzlZMGh0bDJROWtDVnhjNUxpN05WOHdRdzMzR2VBcERxWGdFRndPOTY4b0YrZmp4M1RUckJmaVozU3ZCSS9wbWRQMHQ1YkRhbWI5R1dXWEJzMURhazNKMkxMRVRxNFc4d1NDVStOSzZMMDQxUDErUndzbEFiL1RuSUZEa1dSOEZGV1lERmFpZHpUNUhxdHg1cDdocjViNGZmU0VaY0l0ZkZ4REp1dzNkVTJxeEtDWk9BbTd3aER4UTZmbGRaa3dCMlE5TzN4eXZXdm5yOXE3KytONVRSL1dLMGkrWnFHeTh2MFViL09ISjdEQnlqRDVDYUlCV3c3VUF4WlJWYVljWFBIWG1Ba1IwVFdEbmlKcjBsTFBPUy9CbGtmcUV0a1E2WmlwdERBWXpxRTNWanY1UzJUdGMrWHAzRHFhSksxWnlETEtLQ3cvOEJVdUtrQWx6OC93N2NrRmR3VVFMZ0ZmbWh3R0hrU25Jak11Ui9XblZvaWdKU2VuWUptMU5hWVhGS1hDcXJiTHhTTS9wSHFTbWpnMlBiT3lUSVJLY29LYkNMQW5BbGY3aWttTWUzYitIQUJUbUxLeVcwQ1Fpa2YxUjdiOGtyYkFBR0lLMEhhTnIzZUV1eWpwZGU4OHFTSTd4MFQzZnQ0bjlXblNEL3ZGazFYNlJtOUZIbjFWWTcyWGxsbkwxUXhaNWpOUkdnSy9uZkw1eGorSnBsRkprcitmeklBVGJjTUpIZTdhSVoyVEdCODNjOGdORlFrOHA0UWQ0dEdyMnZaakx5Vm1DQTM4TmZ6dTVudVBGYVdTR3ZxTExSWmNvNnpoU2JRU1ltM1pIeHVjSUFaTnhRNjNmckk2OFFFUmlrS1VHUHhwS0hKcmlBWmNQRXpFdHJ4bXJrQVQ3ODdnOUZIdUFGbk1tRC9MQmhOaTcxZlMvSUx3ZEVjWldaRVd1L1pmZDVMWmhwRW5sbzBod2dadWhiNVdZcnIzMTFSRFVQSVpjcWQ1aUwvT0FCOElyOG84Z1ovQ0ZjbE5CVThvM0Y5UUgrZnI4dGZxYXZWV1JPRU9wNDdiNGUraEwzN2ZVOG40SGphNDlBUHoreGF1UTRJZTZlSmNUZHMwVFdoRHRGVkZDdy9qMnpYSjU5RU1lbk5xMU1UaVg1QW5STDdKK05Yd0Z4WGZkMkd2bXkxVGVKcURhQlNwajkxRzFaVFNHdm9DbUJaaURmMEZXZ08zSVhpZUc5bzdTTDc2NDhUbEdKbGlEOXl5R2dLNXpDV3c5bVB3dTV3ZUlPN3lPSnY0czArK0Uwd2V3YnFvRHhJSXVlMHh5WlgxbUZsVGUrMXVvWFdiamY0S2lUUE1DOVd6ZDRTMTdoQTJBdE1wb3I5ZEMzWGpSMEVvd0JHY2dreExRQzRKM2x4MVJaRzl5UGZyM2tBZnBFeFpRaHc5U1plQ2F2a0VNVHlVUEQ0NEM3Z1U4QXhnN29RSmZZMXN4YmNSeUwxUTd5M3grOWNWN2lQSklIY1lxNE5zbUc1NTgzOHhkQU1IS1NjOTBVclFhdWRlbGI1NFIzZXRLOW9uOVVlekUrSWFrOGI5YXNZRjhTY0VWaklzRm9wSm1PUlc0ODdBU2VBTGJvK3RRNzhpdHlqekhoeCs5QnVrczc1TzUwaTZBeHVVQWhjaC9QaEV4ZnExenVlelQ3akU2SnA0Tk1way9NVnVzUldwQThOQzBac3VLYzZFQTk1SE12bGJLOTZBeGo0N3VjRHVnY2tXUzJXaThMbjIvT2YyZDV0YzRIbTB6ektpOFQ4dEI4ZjVqd09zaXBsR1ovMmFBNUZEQWFXV0FJRERENnNYUlloa2IrVUVreEk5Y3Uxd2M1VHlFM1BpOGJOUFZMNjE3QWJ6UTl2RzB4Tk5VQ0VuRlVXbU5idGRZS0ZYOFY4czBCcC84RXBMU0pFT3RHVDNETjZoNXBTUUY5QVFQeVN6TjNuN2MrMllKeStSVHVsUEIvUTE3QmdOd3VLMFdXci80UytCK0hMUnJFa09aM2tnQUFBQUJKUlU1RXJrSmdnZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvbG9nby1kYXJrLTJjOTUzODcwZTRlNzU2MmIwZGEwZTJmZmQwMDQ5ODIyLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9sb2dvLTFhZjNiMzg0MjU3ZjhlYjhhYzYzNjBjZjYxNDhmMjI4LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9wYXJ0bmVyLWNkYmM5YTAwNGIxNzhiNDVmODhlNTZiMmVkYTBiZTIwLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9wYXR0ZXJuQkctYmExZmZkMDQzNzA4YjRmMmU0ZWI4M2MxYmE3NmZiYWEucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3BheW1lbnQtcGF0dGVybi1kMDRkNTEwNzY1YzljMzc4NDdlN2M3MzRlZDE5M2E2OC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvcGF5bWVudFRodW1iLTg5YWE5NjQyZTZiMzQ4NDI2NTNlMmU4NjExMDNjNGJhLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURjQUFBQTNDQVlBQUFDbzI5SkdBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJuUVUxQkFBQ3hqd3Y4WVFVQUFCbVVTVVJCVkhnQnJWcFprRnhuZGY3dTF2czZ1MFl6b3g1WmtpWExSbU1ic0RDNEdOa1VvWXBBeHBWVXdLRXF3RU5DVVVWaCt6RjVzUWp3a0VxcUxDZVY0S3BVU3BnWFRCS0NBamcyY2VHTVNmQUNNaDVqeWJac3lXb3RzMjg5UFRPOTMzdnpuZk4zejlqeEptTmY2V3BhdCsvODl6L2JkNzV6enJYd1BoL0g3L3BTTHBMMkptTHg3S0ZNTmxOSTVISmowWFF1WnpsT3J0V3M2VDJlRXkxRmt0bGk0UHVsYXIwNU5mbUx4eCt2TmxwVFI0L2RYOFQ3ZUZoNEg0N3hzYkhjTmJ2NzdoenV6by9IWXM1NFBoMkhaN3RJSlZQSUQrNUVwcWNmVGIrRjZtWVoweGN2NGZMc0V0WTI2NmpVVzFndWw1SFA1ZEZxMXRIYjB6MlZTS1VlNkJuS25QanlWNDhXOFI2UDl5VGMwTURBZUNvWnV5Zml1T05SeDBGdlBvV2huaHdLL1YxSXVpRjZjem5zMkgwVnVvWUxxRzJ1NCtYVHAvRExrNmV3Vm0xaW85WkVyZEZFSWhuSDZNZ2dkdThhUnVHcXZiQmREMTRraHA3dS9JbStvUjMzRGUrOWZoSy80K0hpZHpnS08zZU9lYTU5TDNVekhnWWhta0dMbWc5UW1WL0YzSElaaTB0bDdPcExJaG1Kd3FiNmJEZUNSQ1lQSjVaQ2IzY2V1VmFEMTIxa015bjA5V2FRcFlBOXc4UG9HUmxDTmo4RU41YkcrbnA1b2xuM0o1Wm16azgyNjdVdjd4ZzlVTVM3UE42VmNJVkNJZWNGL2ozOGVKZEhEZWZTS2FTaXJwcS8xZlJSYi9GczFERzl1Z0tFRFl4MFoyRlpBZUtwREtLcEhNWVNhUXdOZCtPVlo1L0RLOFVabkZ0YXdNV2lpLzYrTEs3bUdsMER1N2lXTDZzaDA1Vkh2VjVINkFmalRpUnlmbkg2M05IZW5WZDk0OTNzMTc3U0d3c0RBNFd3V1grV3U3M0xvdFo5MzBlVEZyQXNud0Jod1hGc1JEMFhIaytmMWx6ZHFLRk0xN01pSGlLSkJLS012MlF5Z2RtTGwvSE0xQXM0WFp4SGNXRVQ1eGNyV0toYUtGVmR6Q3lXY1BIaVJUUnFtd2hiZGNSamNjQ2g4aXlxTHd5T1B2bnpINTgvZkhpc2NLVjd2aUxocmlvVUpyaEpDbVlYd2pEa2xSQWhuMWV1TkxDeTJjSmFnOWZpU1RSNHNSVllqQ1VmbTgwV2ZOdEdoRUo1VVc3U3B0dVdWM0htK1pjeFY2cGlvd0dzTVBaZVhWakdJNzk4SHYvdy9ZZng0RThmeDh6eUpwYm1GOUNxVnhENERZUzIyV0lRK0xEQ3NOQ2J6ajk3NDlqWXhKWHMreDJGR3h1NzhVN0hjWDRVaGxhT3AyclJrZ2Z5WjZWV3cveEtDYTlPeitKVkl1RHM4aHJXS2xVS2JrTlVJR0FSVGFYMC9wQ1c5aG1iNlZ3YWtWZ1VwVW9ORVFLSHkzaHN0Rm9ZR2QySGNybU9iMzc3Yi9Iamh4OUdaWDJabnIxSmdacWlTbFdveThkR0kyNHU5QnMvdXVXakg3bnJuZmIrdGpFMzlxR1AzT25YcThkYWZMaDRocVVQb1VhSUVrMWVjN2hwbXlnWk1EWmMrYzZqRUx6dXVTN2lVUS9aYklyYUR4RFEybllZSUJwTFlQZmUzVmdwclRPeUlvd3NDOTJwS08vdlIyRkhGZ2NPSE1EUTV6Nk5tY3NYc0hUcEFwTHhCR3d2Qm91dVNRMUI0dHgxSGJXaVl6bjMzbnJycC9IWVl3OGRlOWZDM1hqTGJSTmh2WDZzUlkxVDVWUWNOY2U0Q3JoSnkvSW9tRVBFQ3hIeFBIU25rMGdUWEJnWHFGWnI4Qm1MMlZpRXdxV1JUR1dKZnR3ZzE0bkdVK2d2N0VIeWhaZlFuNGxobzI3aWFuVFhFSzQ2c0FlN0R1d2xXdlpnLzlVRjJINmRidVdwaDBBOEpYUm9hUStwZUJSeFBqTWVqNlBoUk84ZHYyMmlPUG56RXlmZVRJWTNkY3V4dytPRk1QQ1ArMEhBamZycWloM1hrTU9oNWNUeEl0Uml4SE1RNVUrZjdDTWdDTGgyaUh3bWdiekFlemFMUkNyUGdKRW5PZkFTU2ZTUGpPTFE0WnN4TkRTQXdtQWZCcm96U0VTQWlFMzIwbGpYTTJDODJSVElvZ0NFS2dwb3poaVZZMVBKSDlpL0IxLzUwenZnVXU3QXNvNGZIcDhvdkprY3pwdGRIQnplL1N6M1BtRFJZdlhxR2xxKzhYc1J6Ukx2bzl1SkZlT1JDR0xSQ1A4djdta2prNHloSzVOa2ZER0djaW1NM1hBRDhqdEc2RXEwdUd5VGJtWFQ2cm1lYnZSMDVSUmxkK3djd09ESVRpb2hSa1c1RkpMMjhpeU5SWnRBWkRtMG51Tm92Z3pJWWxCWnc1NmhIYmh4dUF2RlVnMXpTNldZN1ZvVG84UDdIeWdXWDZxOXJWdmVjUFA0UFRTVW9xSllyTlh5OWJwYVQ2N1prZ1lDSm1adUl1S2dpeTRacC9WaU1SZFJXbTExdllvTU4zYnc2cXVRN2U1VGR3d2JoRWE3U2ZQRW1NaWpjR29lQm1qQlRFOFgxcGJtd0xoR2MzMlZXb3NnRklHSXZLN0VtdTN4ZEtrWVl3T1hwT0RtOFNPSWNVL1REOTZQa1o3OWVNWlM4eFY4TzVUOGUvZGJ1cVc0b3hWYVJ5MjFrRmlLRmd2OXJlODdYQzFrYkluYjBLVElKNkxvenlmUm00alJMWDBWNXRyZFE5aTFhMVEzR0RBbGlDV0pBb3pkVnR2RnVESXRFT0dLdVhTZWNabEJULzhRa3RrZTVzTXVlUEVjckdpU3drWVphcTV1VXdMRG9SVmppUXlhWEROcXRlajJDUTBWMlE5dnVPdm04WW14dDdRY0gzdTh2WHY1U3d1MVlQS2FzWnlsWDRVRUZhRFo0SGQwbzBhOUJpY1o0YjREaGZRa2czMGdueU5rZXhTV3lxRlFsaDFWVUFoNVQraFFNVVM3K3NvOHYyL1I5WmpnYVIxV0NSUXF5ZFJCbWhaaFhuU2phamtWVEx5R09nNEpWQzZCU29oQm9qZkg5TU4wWVhabExPVllwSVE0OGdiTDBXcmpGR2s4YkNkb1F3cDgvUkNxc0tGYVN6OEhSc0E2aVcrOTNpU1lVREJxczlrUU10ekFScW1FOHZ3c0tzdUxDdU1XcVplVDZxRkxKaEZzcm1MNTNITm9yTTRUTzFiUjNDanA1bDJITHV2RkRleFRPSXRXVXl2ckZ2azhXanRvVmxHOStDSkNndGY2eUhYNHhYTkZtTTBhdDZMNnh6ODJQakgrQnVINCszZnF4aEcyaFdGK29vdlpiYzBGdEVBbkRpVVp5MzBOdXVFbWhkdGc0cGF6WHZkUjJxaWllSGtCcTVmblVWdFpVSlloTm04RlRPN2N0SnZJb2pvOWc0M3BpNmpNenFHMVNhcFZxNXZjeFQrMkd6TWdvbFl6c1dieDJUYTl5RTMxd3ErVTRUQUVIbm1GcUJwWUJ1RzI5aHlLaFBlOFRyaXhzZkVDdjVrUTZUczNTWnpJNzBuQzdnZ21DVnYxWXhtZENMRFVhTEVLWGJUT3N5V3U2WWM0dDdDQzJkSXFOcGVYNEcrVTRaZExPUHZFZjZPK2VCRTJHWCtzZHdEbGxUV3lrREpxeXl1bzgyZlFiREN4VzhZVmxVK2F4STEyR3ZMRkw1MFFVY2FtY05iL2ZlYU1lbGFnNGJaZHVkR1E0K1BqRTdsdHk3bitoTkdBaVMyakNkK2tnQ0RzV0YwdENRMXNXeGMwY1dpRWJVbE81TDJKYUF5WFMyV2NXU2hoczd6SmFxR0oyZWVmeFVQZitTNGUvdmEzMEpoK0VSSEdXVExmaHhLSjh1cnNQT3FiRzFRbWxTZG9LWmhQZDl6T3E1SkVHSnYwbHViS0hCemZ4YWt6NTFFakFSQnVZYW14MUwrMkJLelp3VjFid29WVytFVVJRazVGRWdFQnRZendRZDhzb0ZZMHVyQ1prTWszTzI1QUpiUlVPS0ZaNVkyS0NudG1aZ0VYVnNyS1lsSU0vcy85MlIzWS82RVBZSE4rSHBGTUQzSjdyMFV0Y0xCV1drT3R2TUZLdmFGYkZGY01kWi8wRmdwa0JRWnRMU0VCMlg3WVJOVFRyeFNwQlBOc1VVS2dhTmsyUVNnR3RqNnUrOXcvZHJqQUsyTWR4SkZZVTRRVDBKQ1k0L09VY3RuR1VpS1VKT3lPWUhMREprR2sybXhwRGt5bDR1aG5najR3UElnMGsvcXJVMDlUVnkxMFhYMFFReCs3RGJHZUFTUjRab2RHa1IwZVFZbldMYzNQTVRldlVrbFNRclVWckRnWUdDSGwrYUp6cnQrd0kzanB6R2xoZWlxUXRZVWFuWEFSN2hUU05jZHp0dWQ0WTYvdE5uUktHcUZlNWlHZDVHMjEwWksvTG92eWFjeUpxTE5JTFF1WUNMbG1Zcyt4ZjFMb3plTDZ2U080YXJUQTVFeXJFQ0Y5VVV3aUJTZWQ1YzhNWWt6d2hSdkcwT1M2cGVWVjFGam1OQ3ZyV2ozWUtveHZCQk1CNVRPVjdYRHpQL25odi9KN2NkMWdLd2VIblgySDJ4U3g1aWNtWEN0c2pZc2ZoRzBCMVJqOHQ4bkZiUHErdEJDRTMxbWgwM1pKL2s5dW9nWFZIWGsyZUtiSlBGd0tFS2Y3REtiSUlidXk2aW5wYko2d3Y0SDBvQlN1VVVWQmFwUVVLOFcyd2o3MEZZYXdkUFlDMXRlV1VhUDFrcjFEREljbW4rMTI4aEdxcTZ0NGNuSVN6NXgrQ2NWWFRpT1IzNkZ4THg3VmtuRFNxRE5paHBZSkQ3SzhNWmZ4ZHFnalZzZlZOSXpiTVlUWDVEaXJiVFdUTndrZ2tzeUZlUENEcEFTTjhFMkMwTklHSzlFNjlnenZ3TTZkTzhDMkYzUGV5NGgyTTlmdEdvVGRTMXJGS2lLYTdrWnZZUjhXTDA0VE1vaThHeXNrQXhWNFliUWRaK0lwTFR4MzZqUysvWGYvaEIzMGlPSHVPSWxBcUlRK0NEdjVEVzJyZFF3WENtd1VTS3p0bkluZ3NJMThvWEdKME5mUGdYelc0QTBVeFlTV0dRRXRFOE50bTYreitHd1N3c01JTmMzMW1uT0xLSzl0b0RLOWdqNENTSno5a3hqck9lLzBlYnBsRkpIQkhpeUZGY3pPckRCZUF3V2trTmJ3bVJMY29FUFRiSTM5SjU3OEZkdC9TZXdheUNCT2h0TWdXUmVYdElKTzltNVhMVzM1TERVS0RybEV5SUtDUlJ2YVJhZ09EQ3NLdGRPREZJcW10TnBHeW1nMHFxQVRZWFVnbG9ha2lIUUN3MnpWSGJ6eGc5aEg4aHlzTEdMZllZSlhJMEFzazJFK1k3M0hwRDI5dElSLy9KdmptRHQvQ1lkR3NqaEV0MDczOWlsWWlWSkRUVTFTUy9yNDFjbG5XRW81SmhWUk9GZDZObEpQdGttOEdxMmRzalJIQytrSWc1eTRhcTVqVmVXTm1oS29TZkpDV2N5aklDNUxuQVkxS3ZjNFhGaFNoTndybGJqY0d5UFhFejlJUk1nUkNUQnJLNnRJWjNKdzR4bEVHSHN1UHplSmNwV2FXTVhHMmFlZlFmblJKL0dGUFIvQW4vL3hKOGxIUTNRTkRpS1I2eVd2OUxaY1RGenpzVWNmeGVMaWlpUlpKS2tBU1JVZUszNWhOQm91blRSbGJZT2lHSVdYY3U1V0tmTzY1TjNTOW9CSmpJSG1QMkVuaGdNNmFrRXBoVFR2aGUxY0tNMGd1bU9PQml5d216WHpiejlGbGNpWXBRdGxUODZSeGJQdUV3TE5PTnlmM0lYd1l3ZmdEU1p4L3NMVHFKY3ZJVHN3U0dKQ3R3NmFLcHk0bGhEcmZ6NytQZjIvQUVpRDlWeGNhajRLNXlpZ0JZYWRoR0hISTdHZDB0ZzUyUGJWVU1zS3NZVG1PWEZCV2FCaHVLRUNTdHRGbTF0V2REU28yVnZVNnB5UmdvWTRFMWxKaHNRM1JwVE1NZGFzODNOSXNBRVUyejJLNko0aHVpNGJRMTBlTjFmQmdIdEFVMFc2djQvQ01KRlRRRTFYVk5qRFAzMElNM1BMdXJiQW9meU1SbzFsZFovYlliWWxrTG5XYmloeEswTExjM3FUSUdRbnY0V2RuR2ZhUWlaNUd4WW5LU0tRRWxJQVI2NDRwaEtYdEdHem92WVlkK251SExwWWs2VjV4a2RIRUQyNEczSFdlVTRtaXlCcUsvdXcrWGlYU2hpNTlnYVdiaWtsaG00a1FibGFtTGwwR2ZmOS9YZVVQMW9zZnVVeGNxOVBsMHZ3LzVidEsvd0xhaG9EV1laaEtXNm9ONVlrbVpUNEtXZUVNRUdwS2FEdHcxdHBnSitUUkxrS1dieGxPZXJqdnNhbnIvN2ZLWWRhaE9sYWhKUXB6OTdLU0ErODNpNDRPM3RnOWJGd2pYRloxelNjZ3REMFpseHlVUytlVXZmbXFzcENtbXd5M1hQMG0wb01SR21pNlhxdHBYZ2d5dmVZSnlYdXRVb1BBbXozNVV3S2t5RGsya1hHWXpnVnRoRWw5QTJuVkxnM2hGekJKTVpBbHVRdDNXVHhjMm4xQ1dkc2U0c1dxbkkvZXhudDlNSEV6clBwa3pqN05iSVkvbXpWdUQ1ZDNHOW9IQ3RWa3ZYamFUZ2swcGFRWmphYUVEVHc2OStjeEF3ckM5dVdocUd0UXNuOWxpUDBMcUVrUUI2c1paSnRkeEpkSnl1MGpRSmFMZ2d2R0pmY05xbG9TK3BVRVV3V0ZCZktzQWVwTTRHV3J5MDJ4M0czTENiWG9xekFIWU0vblBhazJZSnprTXF3dGRmVmczUitCSEhtT3BmRmFCaTJLWVBreEhhK0RBZ2l5bVVaeTNZeWc1UFAvaFlDWjlLakZGL3l1TFl2U3BPZWpzUjNHLzZiUlBST01idFZoMjdIM25NdTl6TFZvUzZHV0ZzYUM3NWRKNWkwRkdyanRGd2k3cUc4WG1NUHgyc0Rpd2x3MC9ZTE5GNEYwYVNtYTNHVDZoNzhHOC8wSWthSWw3UWduV2h4SlZPTTJtcU5rQllGVHltQUhUSVdnZkV5NjdzbVFTa1Jad2RNbENpeHlMYUQ4RmczNWRFampJS0NEcEFFNFJZbkR0dVlRYzR4eWV6VFBJR08wVUxEVW55Nm5lOGJVaHBqenlJYU5kWDRacVdpYlQxSm5BMCszTkhrYm05MU1RUjBKT0RYcW5VQ1JFUkdxRzFyQ2hFT0ZBR0Y2ZHRhVmxIckxWYm45VTN0YmprcGRzcG8yU1lyN1RyN01oQWwyQUlKUmhrT2VXbURGQy9DWVVxVlJGMjhCcUVoR2xzRmR2c1VOL1pEZThxZW1wb3FVZmVUVzlRc05MbE9OdVFwV3dnNG5VbWl4QmI0ZGhZeDFibTRyUWlubGJyaE5HaUYwbm9Jc0xpNnp1NXpCYlhhT3VxVmt2WS9aWExUcXEzQnI1YlpYaWlod1E1WVFBUzBZemxqVWY1dWRXTU5GeTVNcXd1NmJLZkgwaHgvc1pxUTlhTWNselhJZEpyYVRmT1YzMXFCOFJxMFN6VzVrWjQ0TmZYVUkwWFhNSUhnY2RLZGNZT0tvYmJPSkZBRmtpUHNITmVxZGUxWGREcGhBaTRpV0xWdFNkdXl0bW9LNlhvdGtXZXVzaFV3ZDJsR0tacFUzdExFYlRrbGsyWEU5ZG5EakdkN2FhQ29La1ZpTVdRMWNPNlZGekF6dllnV2ZVcUdrSXJXM0tWSEZ4WlhOWEtFMnVDdDY0emQzbzYxTmp2aHZ3L0libFE0MXcyT3RRTDdIb1ZjdWtUWUtVNXRVM0lJaVpWZmN1a2VUWmIzMG1YV3VrdFlDVjJ2VWpQMW5ybUg3c3N1V0xubDR2eENHUnQrRWN2ODNxUDF4WXFicFEzc09iZ2ZJd2R1VUNUVWtGQnlidFBDWmZ6UDVDKzAzR3BRMEt2MzdVYXhlRmx6V2RRTE5ZSExwRWRDeGxGbXRSMTVuZVJ0QkExMGRxQkYydHpjWEsydnIzL2NiOVFMZ2RaU1VLaFBKdUpLZ1ZJY1F5MlJMd3A1bHJ3bVZuQmRUNXV3T1ZiZURRb2p1VEhDSjhka2RrRHJTVG5FdVNobTFxcDQ4ZUljRmxpVENmTDI5WFhyV0N1Ujd1SmdKSzdXbGhHeXROa3ZuVDJGQngvOGR3NHVHOW96dmZldi94SWZ2RzR2Vy9UY1IyMERXWStoWWt0Y3U1Z3ZOVlVKSnZhMnVURU44eDlUVDAvZXZ5V2NISmxFNmdLZi9TVlBSa1NrUVdJZHU2MlN6YzI2YWExUVl6TE5hWEF1SndJSXVVNUVIVVhKT3IrTDg1cVEyaXh6VVlNdUk1UFVLdDN6N013eSt4NHplT0hzSERmRk9DVHFiWkFNQ1BJMldnM2QxTXJTWmZ6TGd6L0FiMTZZZ2U5RWNlMTFCekh4bVU5cVh0dlpuOFBCZmJ1b3JWWEpldG9yWGE3NHFOUWJKaGR1RVg3dC8zeDFicVpZM0hKTE9jNFd6MDRlMnI5M2tsMmxjWWtoY2IrUTZDY3hVMlV2WDhkdlRPSUNFb0ZXQllGcVhGcDdpYWd3L3JyR1hwdTJzaktQY2VOczJJYW1TcWRqWXBXTm9KTy9QWWVUcDg2cmF5VTV2dXJoVUVTSXVzeS9telMzYnduejkvR0oyMjdSOGtwQ0lVb0tKMTR5T0R4TWtMdUVicllvYnYzRUtDN05MbklRc29icDJSSXV6YTNncFhPWEpsODhjMnF5STlQcjJ1bkptSGQzdlZaOUZ1MmFUVW15Vkx3YVgwNmJkOUkxV0w5SmZkWGlQTnhuenBHeVNGQlR2bk9sTlNIRHlEakpNV0ZjV24wOXVRalc1OWVVTm9VS0FKWnFXaHBMZFdFaWpxa25YZVkwaCtpY3ppYng0ZXNQcWtDS3lqcHI5M1RXdHhoYzRsNmFPbkhkMlp2Q1FKWlczcG5tR2dYV2k1Lzk4cEU3dnJvbHorc0dJVTlNdlREbGVwSDdraHpRaXdVRW5jUk54UjRjMTJwOFNFdEJrRlRtQW9xQWJiK1hlR3NQdWRTVlk2NHlSVFBXNHNBaTRkbzZvaEtoQkdrN2JZdE9KYUxER3Y0Ukd2eDdSMjVCT3U2aXRyNkN4aVpiZnhzYlRDRk1MV3VMK3FKT2cvTTdlVHNpUDFCQXZuOG56MEd5b2N3M0tGanh0Zks4WVlUbE5vT2ptMzcxRHhqUUJRRVVNekkySlkrODNtUzFPWnhZMDZYQWRXcmZEeUtrV3pHZEhjaDlwanRtck9odzBOK1ZTbk1nR1dGN3hUZUpYbXBGNlY1YkpqOWFWaWVSV09najBmN01wMjVocDNvZHBhVnA1cjJTa3VvbUFhVzhOSzlVTUU3azdkMnhDeDdiRmh1bEpkUWRyM2pqSDM3OTZQK1g1UTJUMWFsaXNVVHZPa0pzTHltNTFRcUJjRit0YXhVZ0JXV3phWm96d2kvbE5TZ0JpR2piS3BJYUpDMklWYnVJcEs0TUUybTFRVzVhZXBxZXJWUllyZStSTEd2ZGFCbFhqUktjL3VvdnZzYktIdGlnbGNvTE15aHhQcjZ4T0VlMHJISkdIa052YjQ5V0pkRWtKMGx4VG03VFBTVTdtem1DTnpuZWRMSzZWQ3FWK25MNU0wVEJ6eXVpTlZ0YjM0bmxQTWVVSExKcGFUc0lvNUZadGJKOGNVY0JHeGl1S2JIYWFBWGFnYXd5Rmx0c0VVckxRc2kyY0doSEc3eW0rWm9oRzNuaWlhZndrMGNleDhIOSt6QzZiejhTN0x2RWlMcXBmRGRkY2szSFl2SnExZFVmdXRXTXhSemNzZi9RYlUrOW1SeHYrYXJHaThYaWlYZ3NjamVVc1RUYnpSaURrbHR2TldpT2FnOUw2R0lKVVhrWWF2NFJwVWlUeCtYMTdsd2FhK3ViR05yUnp6VTQrZzN0OW9UVzlFR2tkU0Z1dnJ5OGpGY3Z6R0p1Y1JXL2Z1RThNdjI3MEQxeURZbDNOeko5b3pyRFc1bWpHN0psYi9ybTl0MGplejU0NHExa2VOdjNVSjZjT24yTXFlRnVlYmdrYWczNk5nTVhFS2kzaFpabWJMWGVVaGVVWm0yREFPTmJydFo0U1E0bUJRRjdPSkQwMlFQcDc4a3hrV2RoK3JxdXNvOGE4NllTZGU0M2s4dWdNL3gwQkNIei9YVEJQR091aWxSdWtNVnlEV3ZMNnhLTGR3OE03VC8yZHZ0L3g1ZHNmbnZtMVdPTld2VjJOb0ZLK3NCT1lRaGpNZGxVcHpzbWdxMnRyeU9WVG12eWRtM1hUSW90U2ZBMm9tUTF2LytKajJNb0c4R0hiN3lPaU1yaWwwcnJVRGtwZStMTWp6Lzh3WEY4L1d0ZjBYZFFaRTZlcHdVM2xtYlFQYlNQajRpVVZoWlhidDkxemMzSDNtbnZWL1I2MUxuWmhSTkJLN2llT2FjbytjMUF1WlJHb1hiSkpHUk1MOU0zSlJPdkxYR00xV2hack0wcVN0czgyL1QvaFh0bTJXTGZ1N3VBVzI0YVUyUVZRREh0VlV1cmovOTg2R0dOWGVsTlNxbGtlL0x1V0ZaYTVNWHJQbnJiOWQ4NjhlU0pLOW4zRmIvWVZweWJLNzQ2UFR0S3gveUdLVkJOZ3BkaVV2S2JWQWNpWlRhVHdCSUhHeDRyZ1EyaXFEU08xOVlxMkwxcmdJQ3dqb2QvTm9uZnZId1JGNmRuZGNadGMzQWZJUXNTcmlwdkdQbHNRMFNseWF0SzgwMFp3eU8zYzk5OTMvdmUvZGQvNUk2N2kxZTZad2Z2OHBoZkxVLzJkbWNlNEJSb2pQRlhpRVNrTkdLeWw0cVpQdGpIRnNQeVJyMWRsVGVSeTZUVWV1bHNUQ3ZxK2RVSyt5dXV0czQ5RnFBM1hYY05YajU3am9vS3RibjdoYy9mamovNW84OUtRMDA5Z2ZFOVNTZTVmZWlhbTc0NytkVHIzek41cCtPS0xmZmFZK3FsWXZIVXVVdEhtTTJPMU91dEUvSkNqTGhpMHplUUwwZlFIZ2FXaUpKeHRndVdWbW9ZWUVXUXA1QlNWaTBzTE9LWFQ1OUVycnNiTjk5MGcxcS9TdWJ4MGl2bjhMTkhINU4zeUNZWmowZDI3TDd1U04vb3RWUDRIUTRMNzhQeHFjTmpoVnFsT3BIUGVWOGM2azJQblo5Ynd5cXR0V2RudjlLbzNueUN5QnFTV2NUaHNMcityeWZPWVdYVEpPVWtjK1cwb0Y5ZGlGY3dHYmJDeDIzV2wwV1NDYnpINDMwUjdyWEg4YU5mS256L0o1Tmo2MDE3ZkZkLzlsRFM4M0pYanc0VUhDK2VrODVrT2gvRE04OWZMcDJmWHl0WmpqTjE1T1lQWC9qdUR4NmFhdnJKRThYaTFIc1c2TFhIL3dFYy9EQ0VxbE5mWHdBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURjQUFBQTNDQVlBQUFDbzI5SkdBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJuUVUxQkFBQ3hqd3Y4WVFVQUFCa2dTVVJCVkhnQnJWcHBiRnpuZFQzdnpaczMrOFp0dUd1b2hTSmwyWkljMjdGYk9LYmJKRTBDTkpXQkFrMytORENLQmkzUTF2YnZBclVOOUwrVjVrY0t0SVVUQklhUnBxbVpwVEdDeEJHOVJMSmpXNlFrVzdKRWMxL0VJWWV6Ny9PV251OTdiNGFVSThleTR5Y05odk5tM3B2dmZ2ZmVjODY5ZHhSOHlzZnNDOC9HMTdibVQ0Y0NpUk56TTYra0xLdCtNcFlJeHJQcFN0eUNCMWJEUUxqTG45Y0RudVZLdnBFZkdUOHdwL2p3Y2pRNk9QZmx2MzlxR1ovaW9lQlRPR1puWDRpSHJhN0hOdVl2VHNGdVRkMVl1b3IwZWg3dlhsckRRQ3lBb2NOSnJDMXVvbEN6RVZCVmpOODFqSHF0Z2ZXVlhaeThmeEpldncrSnZuNUVrME56WHMzL3ZXclJtSDdna2E4djR3ODgvaURqbGk2L09hVjQ4R1Nwa0p2S3JLOGdmZjBpTExPR1REcUxOMlkza0NtMk1CRFhjWGkwRzQxeUU2czdKVlRvdVQrNjd5QXVYOXRFWDI4RXh5YUgwZDNmQjlXajhLSFJxMzNRTlIvODhlN3AzdUhEM3hvWXUzTUduL0RROEFtT3BkbmZuSVRYK3d5M1pzcTJiTmlXUVlkVlVkamRSWGtuQTF1MVVXc2FLRFl0eEJpS3E2dTdDT28rTkZVTk5kUEU0a29PYXp0VmpBMTFvVkZ2eW50bXQ3WlFMbFl3Tm1FRDBRU0MwZWhwRytycHJlWHJNN1p0UGpvd05ybU1qM21vSCtmRHM3T3o4YVYzM25qRzFyUlp2bVFJMmpETkZtclZJallYcnRESUtsb3RDNXFtNGJOM2pTRG9vekZWQStseUMvbGFDOXVsT3Z3OHQ3SmRRaXdVUUo2ZUxPV3FXRjlhdytMVk5WU3lkUlF5dTJnMjZtangwYXlXQWR1Y1VsVnRhV2R0NlVsOHpPTzJqYnM2ZXo0Vjh6Um02YWpIYlJyRi96QmFMZXhzckdENTdYUEliMjZpVW1paFpTallURmZSbFloZ09FRnZHU1pxTFJzVmVyTGVOR0VhTnNyMUZoVGVxTW9RTFdieldKdmZSbnFyekkxcG9Ga3JNYlJOM3J0Snc3ZGgyYVpNSHR1Mm50cGVYVmhpUHFkdWQ4MjNaZHo3cytkTzZ4NkZodGtwYVJVUDI3SlFLK1Z3L1RlL3h2enJsNUJlTFdKaElZdGNvVWtqRzloSlp4Q2tCMFhZZWxVRmhza1E5WG5oc1VVdUtEU3V4WUFGU2lVRDVXd0ZJUStSdE5KQU9CaUUwU3h6RTB6VXF5VStOMlYwUUxHaEtFaDVOTzlzZW5YcDlPMnMreU9OVzdoNDdqRmJ3UXYwVnR6eG1Qdmd2MEl1QThOcVFQR3FxRGVhTUF5TElGTG5vaFhrYnBRUTRvSWl6T29RclVqd004TitGYjFCRFVNaEx3NGtRdWpoMzcwUkg3cENQQi94WUdBd0JxTmVnMW1yb2JTemlmTHVOcXFGSENQVDZId3ZMWXlySHJ5d3RiNzArRWV0L2ZjQ3lzTHN1Y2RNeXo3RGZaYkdPRVk1aDJtMEVBekhrQnc3Z3V4R0ZtYW1CaS9QNjVxS3NGZW5COHNJZURVY2pmbmw1ME4rSFJvTjFBbjdPdk11MUJWRUtPeUhuN2tuRFBJR05LaGNkYU5sb0ZFcW9yaGJCSHc3Q0NXUzhBV2p2TlpId3p6eVhzSkdldVdacmZVRjlBOGZPdk94amJ2MjFpdW5EZHVTRjBxVFhLc1VlWE5iTGlRUWppS2M2RWV4M0pTZjB2amRJVjJsa1RhU1hIUWk3RU8wSzRSSVR4UWVudzZQSm95S1F3c0VvUVhEOEFkRENJUWkwQml1WGwySHhiZ3JaN2R4YWVaWHlOQzQ3dUUrNUxkWEVlOGZnWi8zVkZ6REZCbWlLaU5FZllZaHVwd2NIWnUrYmVObXo1OU4wYkJuVmNzeFNpSHgydnR1N3BvSWxZdHR0a3lVQ2xVYXBLSkpJSWo0dU1NRUR1R1Yzc0VvZ2dsNnFDdEIzb3JUZ0NEMFFFUWFJVzRSNzByQ0c0N0F3enhUU1JWZ2J2cmlYUmplV0NYcHY0YkY0cXA4UGNyOEpndkNWbHhpbGhIRWM0cmdSang3WTJscGJtQnNiUG1EZHR3eTU3eUtmWmFBd1J5enBGR1daVW9Bc2ZnUUFDRmVpNGRKa1BCNC9mRFNaUVZDZml5Z3cyNDJDUm9td2pST1VJTEcwUFI0NkRWcUxEMFE1VVo1b0hHendsRXlJRU5Za0xkSHVOeFpOVCtyb2UvQUdJWVBkS0c3SjQ3K0EwZTVVVkhwcWZhMk9tSGs1aUNVdU1lbm5NMHRMY1UvMG5QdnZubjJTY3UwaUlvV0Z5KzJTblZqZ1E5aG5OdzRpK2pueEdrb0hHYWUyS2dUNG4xY3RNV2NDWWFEQ0FUOWhITnVBa2xhTEVoaHZwaWtBQStOVXhpNmxpazQwb1FtTm91YnBJS2dJZGJQN3d2R2V6QTRRYU9ZZTRuK1FYaDkvbzZXY2lKSWNTSklSSUF0MzBvWlBsWHc0Qk1mNnJtcjUxOU04UnVmRW91WFhySUYzNUI3bW5WcXdTcXFSTEZxdFlKNm5XVGRxRW1pcGY4b0tKZzdtbk16SDNQTFI5Q2cyK0FOaFZIS045Q3FtOUpqM29EZ3ZRWlVBbzZxaUFVeXJCUUNpWWdLY2laSlRXNkNGb3FpYStTZ2s1dTZYd0tKM2ZHYkNzY3V4N0FPeE5uMjQ5dnJTeWMvMURoYjhUMHJuL2xscG1HZ1dhZGg5VHA1aDBhUVZDMURMTUNRejQ3c3N1UVhSbnU3YVl1S2VDVE1FUFBpL2JVTUxsOWR4d3BsbDZucXFGQldtUXhYVmRQNWVRdjFpc05qWGk1YzhhZ3lJbVJDd2MxdGhxWktnRW1PSElZL2tuQU1jVTJURWVRbXZ3TXNTdWQ5VlZXZXVXVllYajcveXluVE1xWmtQakZjTEJwbmlwd1RENTV6TmdjeWtjVkN4STNscnZHNWYyUVVHMWRXQ090K2drc0ZYWEdDQmorenRMNkRYTGFJM2xnUVpxUEY4TkpSemU1S2c2eG1Bd0htblduNm9QRDJ3aGlWcXhiUkxyNUgwd09JUkhwNXo3MVVjcnlreUgrMFpPKzhFNlBpdXFrYmEwdFRBeU5qTXpjWlI5NTZUTVMrTkV4NHgvV0taUnZTUUxFN2ZHSjRPVjloVTJIWXJzVUtGVVEwb2t0UFJrTWhYcXRRY2pWd29DZUJCbzJxRktsWVZ0UG9HdXJuL1Z0b1VIS2wzMzhmNWZ3T2JDS29QeFpCdUtjYmtlNStCR0xkOHA0V0l5TWVUenJmSzZoSGNxMTdLRzJEM0plS2c5N2lXZE04SXZmMmpKdDk4WVZVcTlrOExUemtFTFhwWHV4eG51MDJFYWpTaTQ3M1ZHY3YrWGJocmZjUUZadEowQk15SzVPcllNZFNzVUZ5am9odzVUbWJMdGxaWE1YZzhjUGtOVEtVMTR1dDY4dklVMThPVHg1Q3BLdEhLaHVqVldObzYzTFJQbCtJUWFJNHVPRVFYSnVMdU1rSzJxZjJQQ3MzZTBvZ1oySnNMQzk5YTJpV05NeVVEME9pbUtOSXJQYldPTWtyZ0VZOFc0cExEYllFZ1ZxbUJMOU9iVWo1WlZBTE12WVJDd2V3V3EyaTU4QW9TZ3loWExWSklESVJHemlBZ1dOM0UxMFp0aHRWL09ycUxzNWRMK0Q5aSs5aGUvRTlHZktxeDB2azFXRVdzbnNoMXlrOWJkZWIrOXk0LytCN1RiLzZlTWR6L1BnM1JNd3BEbWpMRDRpYlN0Rmx3WTFuKzZZWWwxOGdQc3VOMEZtbmVYWFNPTzhXN1FwemZXVWt5RjlmSGUxQnQxRkhPZWFUcUt2ckFrRkRDQlBlK3lmdndQYU5QUHFKa3FNRFBianp3VDhpcWhaNFh5Y0ZQSFdDV2lNSHJidlhCUTluYmRKamNCVEtCME96L1lvUjhKQTA3dnlMejZmNG9aTU85TGYzeGxYK3BBSnhrVWcvNTlucTdKN3RocXFnd2tCZkRMWW0wRkFsTFlTaEIzWHF3enBDUVVva2pkVUFVZFNvNmdnd0wzbUZWQ1E5QncvalVIb0hvNGVIa1J3L2pHQ0VwSjVNaXBYSisrb1JLaGN0K0FIUHFHNDA3U0VsWU85dHZ0S2hlQm1hbXExNlQwcEViSmN5cmlweFhpZ2RUemttdTZocEtUZVJTQ0RaeXpvc1RYWEJMeGNTakgyVE9HV1hDSEd2TDRnVzFVdXBrWVhDbXM0ck9JdWJGS0RzT25UZmZhaVFxSDBCUDFUcVMrRVZLSTRCVnFzT3RYOVkzdCtTMzA4MTQycktOc2gwUXRRTngvMUIydko2VGd1RW1PcWdvYnpBMnBla0N0cHBKNzNXTGp1a2hhcXJ6aFVFaHdla0hCT1h0ZXBFVithZWh5RVlGSHFTNHJqSW5LeFNYQXVwSmIrSG5HZXl5aGJQRVlhZFQ4Z3JkL2VkamJVazEwRThiQ2RxOXBCLzN4cGN3eVRYQVRmeElWZDNrcGNvSndUNmlSQ1VLQWhuMFh2aDNQWW9wS0tRd0tKQVZzaTJXeXlFUnZyWUdqQ0lsSzRHNVJzZWI0RGgyWVZxenNEMjJpNlJqOG9qVFBRVEMrYm5zbGZmUVg1dEZVMTZUcU84RXFwRkxreGdGQWxlWnpkTTVyU3lWeHkzTlNYMkdYVFRZdHQvaTAxU2xSUlp5NHc3NXhXcHZCMnRwa29MMnZWYnU1Wnp4S3RIYmtDN3RoSkJiUEY4b2RyZ0pUeW5panBiazZoYXB6SjVmL1lxSXNFQWZBUVNYeVJLeVVhVlE2SE1QZ3dLNjR1b3NLa2taSnlUTTJxSGVyZ3pIVEY5ODZGMHZJeDkzbW9iNWVDT3BJOFRZaVVwNGJCMmFvcXpsb3RPRXVyZEN4M0RGRGRFYlZHZE9HSEo4QlJxUWlOb3RJaDg0dVlpSkgxVU9KbmxUY291QXl0c0F2bnlKUnB2TWdRRFNNL1BpL1lzK3kwcWl1eTloSHY3V1BxRVpVVXZGdEdnYmcySzhyMnRQMVhsSnVNczF3aTdnNkw3MyszWUVWY1ZXZG9JUjFuU0Q3Sk9nK3BlaUQydWM1VzRQRzg3cFk5VUVuRHlxeTgxUmhDd0tiTFpKR0xMb2JTZFovT0hZQ0VNOWJKTzB4VzBxRTYwVUpBbHpSQjZSb2FvL0kraFZzekpYb3pWYkxuM1pONHlGKzE5aS82Z2w5cjUxM0dhKzBKY1k5cWRpK0txM2VhMlR2anRwd0luQngwQ04vY1Jxc3hTV2NSQ2NkQk1wNUlYWG1wVTY1TE1iOXpZcFFScndWQloxb1EwREI4ZEliaG95Q3hlUnphOWlJYk4za3ZRaXppTnpLNHY4WnFHbEg0bWM4dFAyZFhPdFpzVWlIMkxFSFdGcysxYXNaL3ZYRzFwdVZMR0NUMkg4NnlPa3gxR1VEcTFuTWdOeFExUFN5SXQrWXdlYWJZc1djL2x0d3ZZelJjUllhdWhRRlZDR1lvYlZ6Y3dRc3BvS0UyVXJSb2F0UzNtYW9YOEZtRTRWMGdoRFc2T0EybDZiTmlWZk5nWGttMUQwQ0h4anRzazdqZzhwM2JNRkttdGVQS21iY3FxVzZwOWVSUFZyY0RkRDlyN250MGlzVTNpbGlRRFVmYjBZcDNLbnZwTGZpd1dZVXVCNVkrUEh1OU85a2lPc3lzY2d2UUUwVDgrRGpYc3djcWxONW03ZkgvMGtJdzFyb1VieE9wQmNlNkpmVEpyajZxVVR2UzRObmNNZCttOVRlNTVoaVh5VU5xWHRMMWp1NzBUOXpYVXpqbkhTQWRaYmZkdnNTOGVFckdTNkdWMW9hREJIa3E1eWs0MGh4MnFhcUhoS2NQb1ZyQ3RsZEVZQ0tDbHQwajZSUXhOSHFXSzl6RWNxV2RaQXRVcmVUYVNnaTUvdVd4bEsvdGlVKzBZdXAvWFlPOWhxblNLTExidFpaVzExWnh6c1NwelIrUlc1OVA3dFZ2YmZCRU9OTWEwMnJyVHVaazRsemlVd25xK2pOMUtIV25LcngwK2c0SmE0elcxM1R6TEllclBSaEVXMis4aURHc1V4aDZQa3haMW50dE5yN09CRTNZckRpZkFJSnRUcXJzVVc0S0dYSnJ5UWU4NXBuZldxYXA1MGNKWVVkcXVFOWduakxQVkRxYUt0bmViSHFRTjhuM1hxMjNWUXBtMWxjbGlkWE1YQ3hTOGNjcTBGc3NjMXU0SXNqUFdZRWdtWWpwQ1VmS2Z5WFpGYnAzRnFiREtrR2piS0ZxY0cyd2lmdmhlRW5xd0RXZE9EU2RxT1ltRTRsbnRjRzlidU8rbkFsdFI5dURSc2k1cS9NQ2NvamhmNUZRQzZGUzg3Wm1BSXc3MkdySzJLNktGc2FiWnhMWHJhL2poVDE5aXFEWFFMNVNJbTVjVm9VUW94Nm9DYUhoL2hmS0xDUVZEcWJQZkdlVTlCSWd3eHdqOU4vSUtMbTB2NGVHZUNYUjNSVHFsMi81YXJzMi9hS3NUb0dQb1hwUzVSdHZXakJyMHF0UHRSbXRIMmNuMm5lWGloK0pXeHFKYXQyU255blJsbGtId3lPWktlTzVIdjBDeFdFV1JEYVFCOHRuUi9qZ0NOTVRnZlRZcUxXUXB6YXFXQjFuT0FrbzBwdFlnVmF4c29aRGxOUXhmVzQrZ0VVeGlkbTRPWjgrK0pnVzM3ZlltMjU1U2xUM0thcS8zSm5XQ1BVS1RHcmRwenFtbkhuNGtUNlNjY1JSL3V4L3YzTFRUbjdUMk9FN3drRTBERFliYTZ2SXFmdnl6R1U1cm1weS9lVEJDVUlrU1FEeUtnWW1CQkE2d2Q1S2dKMFdJcHZNVmJPeFdjTzM5TEpZV2M5ak5WTmw4TXRHVG1zRDQvVjlBSDdrd1FIaUxva29nNHF5QWhhN2NZTEhZdG5odzJidEQyc0ErVEhBZDVPQ0diTkk2eGFyWmVwbFBVKzB3dE4wdWpXUUhseUljVDlyU01HRmdvVkRFTnFYVG5hTWhEaE5WSk5tcjFEaVZhVm9hRGJmSlh4NGM1bkN4UWxESmxNcGlKem50OGJDd2xjMExEQjA2aUVOMzM0M2VzWEc1eVBUU0NwWld0M0Y5NXpYWWJONzJESTBpazluQitPRVVEbzROOHhwUjZGbDdubkpEVWRtcjRSd2pIY3I0bnZoYkd0ZHNOcyt3SmZla01Fb2lrYVc0bmpOa2ZXWklUeldsR000U0RZWFEvYitYM21BdnM0VVVQZFJOWFRqRTlsNXJxeW9qM3BBYlk4dDJYMDh5aXVSd0hBci9Ea1FqaVBXeGt6dzh3dmxCTHp2UVFlbVp3bTRhNmMwc0t1VXlQV2JnNXo4L2gvR0pEVEZkeFZ0dlg4RmYvZVVYY0RCRmhjUEtvZTA5S2U0L0tLcmQvTlFVYTNvdlRIbTg4cFB2bjJVdmNVcmttK2dwaXZMbDJ2d3lRNjdPZm1TQUxYSWJ6Ly9rWldSTGJMS3lrNXpzamtrVUxOSEEwYjQ0UGpNMmdPYnlndUFJOWo5SUM5RWd3aXhhbzcweFRtbDhyQW9DQ1BiMDBhTlJ0dXRDYkxONzViUElrUFg1cS9qMS83Nk1OemxPbmlmYWVqUS9IbnA0Q3B1cjgwZ2RUSEVvVXNiSnU4WngvejFIZVh1ZDA5bzYrcnBZWVhDTjNUMWRTSFFsMEU1SkJ0V1BrME1IVG5jOEo0NUdvLzYwM1RLbURDYThNRzZEMmpDWExWSEZoM0I5SllOWHo4MmlZZGdTc1ZKRHZiamo4QUYwOVNmeDJodFgwQmYzbzNza3lheXRvM0ZqRTA2VFI0R2ZIZVk0MVlsWHRnekVKQ2NnTzF1YVVDNytnSXl5ZkRZdDgxY2hrY2ZZcWZhUXpJWFdNSXE3K094OTkrSzU1MytJNDhmdndOdHZYY0NSMFFRV1ZyTFlKQmpwelNySFowT1lYOXVXOC9kLytlZC9Rb1JUSmFaUFo2VGxhZi94L1IvK2RQa3p4KzZhbXIyOGtKcGYyc0pQenY0V2wrZFhCWFlpbjh1andFcGFFWk5TRWJwYy9JV3I4N2h3NlNvR0I0ZjVHTVNkeDQrd1F6ekkxZDVBTkNycU4wMDJqSUpSTm9SNk9XUHpjNUxER1p1WDdRUXhJQkdWaEp5Y05ob2NNbWFRWHRqRWU1eUpaOW5OMXRtSkZzUFVnVkdLZ3MxMTVsNkdPV3ZoOWRjdjRNcVZhOWplVG1PTHpkMnYvc1VYNVNoYTBQZXI1NjVoNm5Pblp1aTFwMy9IT0hGc1pSb1gzMWxlLzd1bHpSMDJSTHZReTJaUHBkYkUxY1UxTHRTSG5sZ1BmQ1RTVExsQUduQ0dHbDkrNkQ3bzBUaU8zM2xJNW9oWFpVMVhML0p2UC9za0JCbm1TVHc1d0FnSVUyeG9VdTBMNHl5MjU1c1Yza2VVU0pVS2R0ZHZvTW9oNDJxbUlDZXA5V2FOcy9Vc1B2K2xyK0RnNFlPWXYzNU5sTUQ0NHdmdXdmejhJdGNTeDlHangxaE82VGcwTVlGTEYrWVI4Z1VmL3NHUG5zdmYycmlkemEzN1R6MlFHQjBZdkQ4MU1vSmpoL3B3ZkhJTW14c1p5aVEyVWJjMkdHNjJWUHRWemhFRWFvcHgxYkU3VCtENEhZY0pDQ1dNbjd5UC9aRUNlL3dSR2pYSXlXaWY5SmJYNjVVQUlNb2lzeUVNSzB0TkthVWNRN0hDMnEvSnVjQlN1b0FBYWVWZ2Z4Y1Zqb2FCb1JUSFhSSDgrWi9lZzhMbUdyWlorQVlZQlJ1Y3VZZTcrdkdMVjY4Z05UR0pZTFA2OURlZitPdWJocEEzR1NlT29RTVRyemZyemE5VkdzMTRieUtDRUwvdzR1VnJHQjNxd1dmdlBzUzRUMEowQ25hNEdFR3NHenNabGhZcXZ2eG5VK1FuRGlGOURFa3g0R0J6MWhjSXM1MFhvY2RVUjJFSUVjQXdOTm1KaHR1dUYyM3FlcW1LWEs2TytiS0ozVktGK1dmaE14TWpNTDBobkwrd2pLMWRwZ1FGUTcxWXdOdnZ6bU1yVitUbVZuSGkyQ1RtTnh2WUxhckwvL2F0eHg3NW9DMi9NNStibVpuT3AxSW5IKzd1U2M3bUNxVjRLTHlKYlhMYXhFU0tJYWRSN1Rlb1JFeXArM1IvU0k2ejNuempMWlRKWjM1Q2U0dmg2dS9wSjBKeGtYSWk2dVNvYmRpU1ZpUWhrMnFFRkpNbEUrdS93a1lheTlzMXZNVmNGeFRTSFNOOURMRDJLMmk0d0hCTXAzUDR4UVpiRTJhZXFxZEZOQTZnenZSWVdGdG5hc1R6NzExY2ZSaTNPRHkzT3BuUGIrV1BUVDU0VGZmclgwdXdoNyt4c2NUaVUzQVFPTG5KTW53WnBuVEdBR2ZWc1lBWG41dElFaWQ5U0tXRzZEVkNOUmNjb0xBMmEyVkgrd25lTTB5SGd3Mm4ySlVhVU5SdkRNK2R4VTFjemxtNHRyMHRwN1ZpM3Q3UGNIeDNZUjBsRGswaUFiWUltN3ZTRTZLNmJ3bTlxNGl5UnVYM2VyLys5cXRuWHIrVkhSLzZVNDJYWHZydTlNUmc3eE14bGlhaXA5Smdyei9MOFJUN3hWeWZHQm5iR0JoTTRvRjdqOE1rdEsrdWJUQ3ZmRTc0TVlmVVVGUjZUWlU5RjlzWmc3bFRKQ2w4eFJoTHROcTNNd2lPSFVISmR1WVRCb1ZEb1ZhbllWdklVNitLZGtTeFdVYWVJRlVUdlZHR3VCaFR4Mk5keUJVTFQvejJwZTlNZjVnTnYvZDNLTi8rN3BrenVaMGJUMWkyTXk0KzB0V0hCR2ZnSGs1RERZYmFaaWJIamhVN3hVU3NMZktiK0VXQ21HbjdlRTRNaTczaEJGUEs0OVJlTkZBTU1CMFI2TXdBbTBSSlQzY2ZZcE9UOEhQQlhyZ2phdDY3VXFuS0daL05xa05xWExFaHZPOUlmd0wzM0hVRWswZU9QUEh1M015WjM3ZitqL3lSemYvTS9QUU1VK1FSWmsrK3lDL2JxUklNaFBnUk84L1lQMzloQWRjM2E4Z1dtN0txbHU4eDdBVEU2eHd1Q2lVaU84YjByalRVbmN5YWRmWk45Q2g2NzdyYndaV2dhTXBTUWZMYUE5RnUrQlhPR3pqVjlYbzlPRFNXUkp4VWN1TElHSTRmSE16cmpkb2p6ejMvblRNZnRmYmIrbm5VOHNMbGFVOG9mS3BzdEpicm9tRGxUZzZQakNIQVR2Ry9QdlVQdU8rQnU5bEpGZzBaajl4NVUxYTFMZGxZbGJOd1laanE5UGlGd21teGxWNHAxcEU4Y2E4a2QxSDRDb0ZndU5PSVdGOFM0ME1rZnF1SnNGL0h5WWxER0IvdXg1Y2V2R081bHN1ZCtxL3AvNTYrblhYZjlnL2IzcHViV1o0NSs0TXhidm5USXF5b0dESFJuY0RHOGhiZXZiS0VTUklwM0lHZzhKQjR0SWlJdm9FVUYrN3QxSVlDV0hZcG44WSsveFVXc1ZVNUtORTQvaEo1ckxoZE5aVUdYODhYV094eUtzdlF2WHhwRHFzYjZXL1ZRamoxNzlQVHk3ZTc1by8xazBSeFhIbG41aWxUcjQzbE5jL01Ka2RRaXhkWHNIanBIWHpsaXcrNWJUOEx1cGg5YzFFNlBkY2tJcXJodVBTT1NXL21WcGNST1hnVVZmSldPQktYYlFhaFE3M1VuRjBjSGZ2SWsyRnFSSS9pcFRCdmlJSjFwcjgzZWVxVk4zLzUrS09QUHBIL09HdjE0Qk1jK1V3bXY3SXc5NzNVK0ttWERWOGduaTFuSnI3NU4xOURxWmlsWHF4S09pam04MUtlQmVNSnR0cWpzbUQxY0pxalVzS05QZkNRN01WRWlIakZRbzZpdllHcmw2L0wzN2IweEtQNGt3ZFBJVjlxenF5dnJUeDY3ZHFiVDErWU83ZUZUM0I4b2wvS3RvK2YvZXcvWi9nMGMvYnNpeWtDeGVsYXVmcU5hcVYwVW9SdG5jaTRzN1ZKVFJsaFh2a1JHUnlqQUU5ajVNQTR5Wjk1NXRWUUk2Z1Vjam4yWG1xVWJqV0VOWDBtR3ZLOGZNOWR3MmYrOXJGLy9GaGV1dFdoNEZNK3pyLzRZc29mODU0czdtNVBsWEw1RXdlT1RzWVpwaW5ObzhlOS9xQkVUM28wWDZKclMrWDgzT3ExNnl2aGNIVHUyOS8raitucG1aay8yS0Q5eC84REh0bkU5TllLVFRNQUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURjQUFBQTNDQVlBQUFDbzI5SkdBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJuUVUxQkFBQ3hqd3Y4WVFVQUFCalVTVVJCVkhnQnJWb0pjRjFuZGY3dSt2YW5wNmZGV2l6N09VNjh4SGlMd1drU0ZnWEtORzFTRUZPZ3lYUmhLVzB6TUNWT08yMkhNRUF5YWFDRlFwSU8wM1k2d3dSSXB4bkc3WkEwZ1lhVXdYSUNKSTZUU0E1ZTVDMlNMZG5hcFNlOS9iMjc4SjMvTFpLOEVHZjVOWGVlM25Mdi9jOS96dm5PZDc3L2FuaWJ4NTdlM2tRdW1Pc0wydWIyUkxJbEJmZzdncGFkU01SaWlVREFnbWtheUdZWDBxN3JqdVFMVGpvVURneEd3Nkg5UmlBNCtLbDcvMzBFYitQUThEYU12dDVVb2l2UmRaZmhsM3JEZ1ZCdmExczNtdU5OUE9LSWhFS0lxc05HTUJpQTc3bUE3cU5jY1ZBcytaaVptVUU0RWtZd0VJVG1lNE9GUXU1NzZiblp4ei95TmhqNmxvejdUTis3ZTEzSC9VbzVsKzlOeHBvUWkwYlIyZGFDTlYyZGFPSC9JUnBqV0JvQ25MaGxXTEJ0Qzc3djE4NzJ4UmdhV0lMck9qVGFoK05VK0w2QThmazVuSm1lZXZ4bkw3LzY4T1A5US8xNGs4UEFteGdmdlBIYUhidldkendXaThidUxaZktLVVBYRWJLRGFHbE9ZczNxYm5SM2RNRGlaNFloaGxVOVpwbVdPbGZUTkg1dXFQRFV1YlR5S3VjelROVkJpMUdpc2ZsS1pkTml0dmpKM2h0Mzl6WUYvUDJueG1iU2VJTkRmeU0vSGhnZVRvek5aeC9jc3VQR0FjLzFlblA1UENwY2JjTXdFV0xvdGJhMm9pblJyTHhqV1NZbmJrSTNkQjVHdzZoZ0lLQStOM21PTGd2QXc3WnRkWDR3R0lSdDJZalMwMkhEeHVyT0xuaWUxMnVId3NNLytiOGZmUVZ2Y0Z5eGNjZUd4MU1SUFREZ09mNGVSaFE5RWtDNVhGWVRETmdCck9wWWhTaERVZU9YSG8wVFEyeCtybXM2dldhcWlZc0JZcWdZN3pFa2xjSDhUb2I4TDhQblM0VEdSUVBNMDJBSXBrVVEwanhrTXZQM25oNmZHajQyUEp5NjBqbGZrWEZIVDUzcjQ4MEhPS3VVNU1mTTdJejZYRlpjMGpZVURxckptWnk0NHppUWVZclJFbUlXODh6MVBQRUFpc1Vpc3BrTXlzeXpVckdrRnFjay8vTW9Gb3JLWU0vaHdmQVVFR29pSUNVU1RiQVozcWRQRFBIYWJzbzJ6SUdqdytmNnJtVGVyMnZjMGVIemQybTY5a01mbFlUSEZNMFhGMUZoMGxjMEcyV1BJUldJd0tOM1NrNEJUaWxMZTBwdy9DTEtxS2lNZHRXRUhlVFNpOGdzWmxBU2c3TDhmakdIY3I0QTMzSGgwTkFpUXp5L1FNTUxaUlQ1ZTU4ejA3a2dzOVBqQ0lURGFHNXVSN21ZaDJmb0NVdjNmamcwUExibkxSbDM5UFQ1dTN6WGUwaTk4ZVZtdnNxSE5hdFg4MFJOaFYyQTRlYlFtN0w2VlFUMFlSTTg1TUxpQmJvREFwQStvODhNRUVnRVJIeFhlYU9PbXhLcUV1YTJITFlKVFU2V3NHWFptSmtZUjVrNHMybnpGcFhmNGwyNUhnUGp3ZGN6MEx6Y0Z5OGRQZFZYTHBjZU1tczVJVVhEa1Z6aWxNS3hLRXlCZVU0cWsxbGtMYk5WblpJSlJpTXh3cjVON3pyMG5JWVNQU0cvQzBTaUNFYkRxaXhvcmdlWGk2R1g4aW9uN1dCWTVhR0VkS0ZjQUQrR3gvTXFaUWVUazdNSXRIYkRDak5DNkdWWkxHZ3lDMThXNGNIancyZEhOcTViOC9nVkd6Y3djQ3psZTlvalBvdXQ1SXJrajZTNzVKS3N0cURpY1U2azZGWVFvSmNFS0pxVHpXaHBhU0VBTUZ3NTBRcnpKcDNKWXZ6OE9PZGl3WW8zbzMzVktyUVFUUk0wUnFzUWFPeVFNa3BLUUtsY1FaN2hudU4xcHhieUdCa2VRenBiUmlidllPdTJkM0lCSW5BcVpmN2U1WHlzS2hsUWJ0Y2ZJY2dNYmw2M2J1U0tqUE50ZXg5ZkVnclZQSzhLN2VJSU1aRXJHdVBGbTh3Z2lwNmdwVllGRTBFMWV0a1ZEekFhUnljbXNEaVhabUdQY1FGc25EbDFDaWVQSEVaVExJYU9SQXZXclYyRGNOUm1LTnJJWmJOWVdGakE4T2c1bkJnZnAwRlpGSE5GcEJkS2FPdGFpdy8vd2NmSmFDb0tvTVFvWDhDSzRTbnZaWjZhWnUxam1kcTVjOTI2OUc4MGJ1REk2YS93bEZURFVER1FLK3N4RlBTUWhjVmZIY1RhZ0laTnQ5MkdYeHc2UURZeG8xeHFhaVlMdDZXTWRRb2x0TVRpNkdwcHdva3oweGlZbUdXb0J0SFRIa05jWjc2WkZTd3V6Q0lXNmtKQWtQRDhLQTZmSHNXNWJJbUFFV1RJYTlpMThScE1US2VSdHhPSU1hUUxwUXJEVU5DWTVjTmlORW5PK3FneEhqOFZnaUYxOE83bHRxd0FsT2Naam9UdGUxZDRzUlkyRmY2VjZTbWpuRWZjMXBGc2p1SDk3M3MzZGw5M25hSTVtdnJqYW1rT0VtRWRMZkVnWmljbUVRL0YwZDIxRHAycFRmakFyYitQSk90aDIrcE8yTEVBWUpXaG1idzJGK1RxM1RjZ3Nta3p6SjcxMkxCNUo0NFBIbVlaaUdEdGx2V01IcGZyNTZ2ODFIU0ZOaGY2Ukdycm5zTW5obmRjMW5NTXEwZkVHQjhyU2FjVVphSSsyWVNMZ0h4QmF6eWRFRThZYTJNT2FVeHlxWEdlbk1jcXJMbGxSTWhRdG16Y3dMdzBjWlZtb1pETllPTFZsOUFaRTJDSkljM1M0SlkxSWlCVXFOcTJodXNUTVdRS2NpNUI1dG9ObUt0NHVHcFZpc2I1YXVrazkwMjl5bmJnTHhrbzcrWFFMZU5CdnIzNUlzOGRIRGpaeXhONmErNVNIdk9YWDhEakJYbTRncHBFTzVOaG1wOWZnSUIrZTdLVnlGWm1ybmxFdWdvblFmckUrcGRvYWtZOGFpQko3N1JGSStob2FXZHhqc0hKRmhBaThKUzRqTHJMS2REQ2NtWU9MVXpzTm1RUmN0UG9ibzhqeURSb2FrbFdGeGhWU21jeHQrdkcxSSs2Z1RML1g1MGM3cjNZY3didVd1NHBaYm0yNUQ5R0d4eDZ6QTVHWVlmamlJYlpCUVFYWUlaRDZPcnNKTm9WRmF2M1dmTkN6TDhLWWR2MExVU2l6YnhMSGlYbWlNNEZLZEl3UmFGZE1oTzN3QzdBUUVHS05tL1YwOXBNQ2hlRHdVWEtaT2NSekxObXNoMlMybGFuY3hLV0xzTlVQRmdIdStWRE16VEp2ZjZHNXlUWGZOOXJVQnFmSjlXOUp4ZVE0ZmhTWTF3WTdWMzh2NFJzZmhac1JvVkpvalVSWnloeWdweGhSZFpEdHhraUFYaEV1QXJaUjU0SHJXQVlzM1FFSmRkMFpCbCtUc0ZYclZDVXlFc1dxdEpCRGsrUmJhSnZLSUlLUzBabW9VQUF5akdVRjVBbmt4SHZ5ZHdhTkE5TDNKUXIwVHN3TUp4b0dFY3ordnhMaEtJNnFmWmFwbkdhUjk2WVNHQ2VvVlFoRjV6UExXSStuME5UYTVLNWt1TzVYR0Y2aDFITFNUSFVXSTBGdWdNc3dDRjZNQnlKUytaZ2Vtb0dib1dmczk1NXJzKytMMVNkcEVtdlFGb2VnaGM5NzdOeldDQWxLNVhLOUJwUmxEVlYrR2pWTUFsSlhiM1dQVmczMEl4NmV4ckc4WHFmcUh1cDdxbjZlNmZSWjNIQ3ZMVkRIaFZKYmNma1hJRXdicU9uYlRWQnhCQTBRb0ZjVVVMWm94ZGxFcTVidlpZVnBDY3BNY3pNem1KMlpoWkJUakxPRGtJOEVHbE9zSloxSUZmSXErN0JKeGlWdUhBTFJZY0w1eUJHc0JIbTA5Yldxa2hDakdSYXJxMFduSy9peWZyN0pZL283MU5HN250K0lFVkxkbmpMTEJlanhLQkd3dkk3VThneC93L1J6dUNxSGl5MG5VVzJtRU9JWkRFek1jY2NncHFnY0VkRGw2SnVxbk9GVXJIM3crenNsUEpzbEdnNVBEbUY0dlNNWWlqNVVvN2RRZ0Z6NlRRMnlQMkVhRE5DcHRNNUpOZHRnazZEb3pUT2tVaW9aQVRUVUJLbTRucU5lVW83SlllL2xFb016WUdFOUpJNzVBZGVMYzlVcm5sZW83bVVvOXFEMFRBRTRabmlDV29oN1QwWVpSZjl2ODgvaHdCelF4SmRZeTZsT1VsMjV5cGtaRUppM05UNEJDcDVBZzV6YnA3Zlo4a2ZzMlFod2s3T25CdkR6MzcrTElLUkVBcHNpWndLWlFjQzB5eHpMQmhMWXBhU3crVGtwR3FUNUZyNVFxR1JPa0w3cE8ycUkraUtsQXBHK2t4RE0zdFZqWkNlWDcxVzIzNkpWVU0zVkM5V2pWd1BPZDRvMWhMSHpPUUVJcXh2Mld3elNqU3dUQTVhcWJEWXMrNFpOQ3JMVUFsd0VZSU1SWmx3c1ZqaHBJRnpORVRxWVphY3MwUWVXU1pQYzZteGxKaGZMNzN5S3NzRFMwallRbzdJTzEzTzRacG9BaVp6VGJJbkdJdW91WEY1RmMwVHpVVU1rN0NVc0sybkUrcXo5YjBkWmpnYzJpNHJMYXNpUDVvZ0p4d2RIVVdCSzNUaXhBbHMyN1lOa1VpRVlhYnh4aUU4OExYNzBkWFZoWHZ1dVllRk9ZMTRVNExua3VFejdSWnpCUlpnaGxCZWFIMFpIYXVTaEhnTml3elhFME9uRVdZWXRsRm5XZHZSZ2pqcFdZYUE1SE5SUXh0NDMrbHBISHoxS05iMHRDQVNqS01BRzNHV0JwOW8yZHpleW5DT1lXcHFTbmxyZ2FoWlR4OXB0VHFvMlZ3RWhENVNqTG5BbnFGanh6cE9uRGlKclZ1MzR1bW5uMWFUbjV1YlU3S0JKTEdzenV6c05MWnYzNFpEaHc2UkZpV3FSamUzNFB6SUVCSjZrVjcyTVRROFNvckdmQ1BxNlpRR0pQZDBJcDRzWEF2TFJpUVFocHR6VU1tNU9IdDhCSGxxUHFWMGhzMHFnWUhlaWhCMWhYTldDZ1F5RXVlMTIzZXgzaFVoV28xRWw0U2ZFR3hKRlJuVkhoSnE4ZXRodVhRUXQvSzVYR3J6cGswMGhraEdOQXV6NjMzeXlTZHgrKzIzNDZtbm5zSk5OOTJFQXdjTzRPU3BJU1RaMXV6YXRZdGRjVE1XRnhmSkV6dlYvK1c1TTZSaFRkUWdaMWtTU2doWTNZcWFTZGNWekplNDZuRzBkM0dSRnVtUHJpQmxTeE9CTGRjaXl6RDN2QXFSTVlNbWx5RVlEdURzbUlQajdBeTZ2U0tDQktsQzBGVDNGY0FRNDR4bFlwTzBYc0k3UGE5dWtGY0RGR1Zjd215bUd4d1cyNTZlTlhqMDBVZlY1QXU1UE5Mejg5aTVjeWZpaE43dTdpNnNUYTFHa2xTb3JhMnRvVmlaVW92b0ZWMDNHWEpoYkZ4M0ZWNWtXeE95REZ6VDA0azUwck1reGRuV0pMVVcxaldxeTZwMVdjd3ZNdmRzZUNHL1dpN29pRWhKbHRwbkNKY3c0OXI0M2I0UDBkZ29ranlubGZUTzR2MWs0c0pTSktjYVV1QmxoNTh3cjN2WE8vSG85NzZQejM3dWM3aDJ5eFpzWVdodTI3NmR0Q21pTGpaSEk3ZHUyNDd4OFZGTUVFaDZVajA0Y3ZnSWtjL0JlNisvQVZsNlBHSktpam00ZnVzN3NFZ0FPWFdLK2NXYWNOWHFMa3pPenF0MlplMmFMcXhxU3lxR1VxSlhodmliOFhOVDdDN0M2RjdWZ2lZYWtjN2tjZVRzT2J6bm81OUdjc2R1K0dXaU50dW91a0pXTDlTU1h2VWk3dFdhMWxvb3JzZzkvYXIxNi9HUDMvZzZTYStMOS8vMkI0UlE0dWpRTVhKRFIxR2hKNTU2VW4wbkNUMU4xVXN3cWF1SFhteHR3YWYrNUkrUVovM1NSUFVpTTdFMUY3M3Yyb1V1cXM1alkyT3NWV25NWm5LWXBUZEdHZktMTFBLQ2ZBbXlsZTcyVG5MU0R2UXd0S05NQlRaVEdDWnpDYmQxWXVmdWQ1RzZlWXJ1NmFiZVFNRGxKTG5XeHkwenJHNlUxdmk5OEpkMGhuTGJUMy82VTVWSElwb09EZzZxLytXRTYzZnZWcEpja0RyaTFxM2JDT2srMnJrWElQRS9mT29vUFpnamEyS3NzOXVXaFlrWUhuNnY5ejI0YnRzVzVlbnowM000OXRwWkhCdVp3SEY2NnZ6c0FoWjRiWnVlN2U1c1YwMW5tZ3R3bG9YOWxXTW5zZlA2bTJyOW0zUUNiSEVNdllhTVM4WmRidFJMV3ZWM1d0cjQyQjEvZkNkQkpDRUlxQlFveHJhZ3BreGVXRXN5bWF5dURDOGVpN01qQ0VSeGlEWHB6ci84RExYR2dxcG5PemYwa0ttd0V4RHY4ZFZtVHNhYllxeFJGZzR4aEhNczVqNXJtRGlqSXJxazFDcEw5RXlSSkh4TUxXYng4ckhYTU12KzdxT2Z2RlBKZ1FSYkdtNGp3b2dSVG5raEdpNS92N3oxYVhoVTA0YU16MzcrYjdpWjRXeXFHN2VpV1YxMnNtb1VLYnVWaWI1Lzk3ZjNZbnA2VkVIKzBPZ0Uxck96WHQvVkpyT2hIQjVVRGF2UDJZVWk1SVNyMm5ENHlCR2NPanZHL0V2REVUckxTVS9TcTlsY0RobVdnZFBqTTNoMVpCeTMvZUVuMGRaek5RMHJLUUp1RWp6QzhWaXR4Ny9RUy9veVk3QWlQR3Y1TjJRV1M4VXpGbXRSL1VlcTB0Y2FYYm1BMHZQNXZXVWJTcVBjdS9mSExQQ0VlU3RLYjZhaDJWSDh5dzkrQW90aGU5TTdOakJ6SExqMHZtMklWRmZFYW9MSVIyNzlIVHgzWUFBdkRoN0YrZkZKdk1MQzM5cVNnT0ZUNzNUS21NbVU4T0dQL3lsMjMvQmVzcE9LYW9TbDl3NndZR3NYR2JYMFdnY1ZVY1NXL1FJMUF3NlJlT2lERjdxNy9odGY2Zm1HQ2xHYmt2bms5RHdlKzY4bmFHZ0VzY1JxTEV3dXNLWlJhMlQvOXMzL2ZCS1JQL3NZYnJ6MktucU83UXpaaU1iSkd5VFFLUzVPKy92Zmc4MnBOWGoyNENCT2pvMWorT3daQk8zcXRsYWlLNFVQM3ZvaFJrV0JqU3J2SzN4V0JGL2VVeW0wL2xKTzFRR2o3b3k2a1RMRUVkWFBwVFB4KzdWOXdwNUwydnlGOUtWNkFWY3B3S0lFZzZyVUYrLzVPdlhFQ2ZXNUhPbTVNVGJVVTByLzBEd2JZVFpGWC9pTDIzR2ppRHJzeVJ5Q1RNVXZ3Mk5mNTdIT2xlVmdiWnhKejVONTVGVE9VUmJBWTg4OGo5NWIrL0RsTDM4SnhVeUJvcEhKbk9YR0pmTldUZFhYTGpFM2Y4VlI3K25xblFMTDZUcjk1cDA3MDd4QS84b2ZlNnFWcjdwY3Rwa3NmUFdCYjJINHRYTkVTem14cEQ0UHhUdDVNVk1sUDF0djVMVVF2dlN2MzhXK0l5ZEl5cmxieWhVTW0yR2xxZEFOeko4NDZWd1NWN09VYkw1cURab1RRYkw4ck1xcEh6L3hKSjd2MzEvZDNxcnRDbDFpdlZjWWQ3bEJEdzd1M0x4dXBOcUp1KzcrRlNmQ1V4MUJnT0gzMnFuenVPZnZIOENyZ3llVXR6eEtEQXFwbUZzR080SndySTNoSkRjaVZKQ3RHcUVtM1BmdDcrUDdQL29GRFlvb3RjeFNjTTZ1SWkrOVcwa3RtakNUTWRJc2w0c2lYWUZCUlB6bU4vNUpFZll3YzYzT0g5L1lxQm5zZTk5VFJxbzNaZjBoK2RkWG9nUlhPeFRGNU5Rc3Z2cTFmOFlYdjNnL0RoOStqV3NyYlFZM0drMVA3WWhxcUFKUEpFbzZac2M0V1g2bkVRem9jVHZTakgvNzc2ZnhyVWYyUWdzS2x5eFJMS0lxSm1vME93U0hkWE4rWnA2cU1uOVAvYVRDS1BCSXZDZElFdmJ1M1lzbWhxUXNuQXAvUlJ2OFpZZFhPNnJqUWhWTUpzZTFVM3NIaldEdVAzaDBIemxqYjQ3dy9KMy9lQXd2dnZqU0N0ZWJ6SjhWTXByY2drQWk5M05LYzhndFRIRHJXUG9vMmRCM2xZRHFGb0cxclZGOCt4L3VobFpZUUhveHo1NnZ3bFlwaDlIejU1Q3RGUEhTOERRZWYvWmxWZFFOaXhzaUxJYjl6KzFIUjA4WGFWcTVXb1k4YThrNHJZYnE3bEllTnNCUWljZitFNXZXOXZRdGVZNWpQcjF3M3pNLzJZZS8rdHdYMkFVY1hJYWVlaTMzYXNvek0xVkpCNUxBdkpSR3loVUlKS2o3dDFFeVlCbmdlbFY4MlRPUS9YQVQ0NHNsM1BIWEQ1Qis1YWx5Y2NPamtHRW5Uc0dISEZOYXFsbktEWTNGUXZXYTk5Ly9BQUdJYVdIRmxpbk1XblVmak1DbGprdUFqRU92RVM0ZXFyOXZCUFlQSHYzT3lKbXoyVjdPT1ZXSDNPV2VVdDB2NzFGbjQrbzdpcG1pWnZuVUoyVXYyNkgyNGJGOXNYUlgxU25EVnlHQ0VrOTg1cmtEYUcxZmhWUkhNK0dlSG1GVEs1dHNQMy81TUdZbzVFcnZKN3RURnV2ajZkTm5zUGQvbm1HLzVwRzBiMkdhQkJUTUs1SXNteUh3YXlWQVZ6SjdQY0JZbGZzM3J1Mis3eUxqWkRSM3JEdkVrKzRVcjJqTDRybXFEZW9OYjRybmxOSHFjMDNWSXRtbTBnZ0tIdlVFa2RNdFExT014UmVRWVN2anNKUzh3Q0l1VHpWc3ZEcWxYc3Y4N1l1L09vN0p4V0p0MDlGV08wa3VROXMwNDNqNWxlUDRNWnRueWMyeHNRa1cvaFp1bFNXVWdGVHRDTHdWbmpNYzNQend3OTlNWDlLNDlQVElSTHc1MWN3Vi9LMGxkbUlvSXhxY1c2UTdDVkV4c0JhdUNsMU5VWUNwdjRRVHFveFFNMWZ0U2tVM0ZJcEtZZmRwNE1ESk1VVUczcjE3dTlJalh6cDhuTnl5b0VRb2o4QlNJdGpvd203Y0FMbHNKM0xzeUErK2NBVFBQWHNBcjVEVGlsaVVUTGFoamRLRHZ6UXJJZGIzclYvYnVXSVQ4cUxBVGFWNkUxN0FIdUNxcE9xZHI1cSs1NmpZRjY5SldDcXRrQk9PVUZlcHNPK3FLbERjT2JDcVc4Ylp1ZGU0Y29zS2dVbHloTityMjRrUkMrd1JZMEVEVzllMmswQ0g4TXZEUThpVWVROTJISUdRYUlPa2U0RjJxbXh0U2lHVHpsMXFyOWZJK3pLMmJOK0F1ejcvQ2V4KzV3NHVTR1hrNnU3MmRSZmFjdEdlK01oSWY1cElkek05a1Y3UllxaDlhS04yNkxXV244cHp1YUlXUU9xV0VsVlo3enlDUWpqYXdmQmlHUkErNWVtTnZKQ05SdmwzaXRMZEw0K2N3ZWhjamtLdkZCcnFqM3J0U1FpVy8yVHphcFlXV3kyL3B6WWF0WWFPRXFSQ2ZYem9GUDc4MDN2WXF1MVBjL2ZwWmx4aVhMWkJXci8xdGo1RzB3L2x3dFZrOW1waENYbGtvcXBkdUVXMWxTc2VpM0NEVUtTRHNsOVM5Y253d2lqbUp4aSs1K2xCU3oxc0kzMmpESkgzS3J5ZUxkNFdiVk92NW0rWmhuc01TZDFvUWt2Ylpubzl5S1hLcWNWUk02MTE0SjVxWWczMWVFZCtjZndqK2ZUcFMrNkpYNVlHekUrZEdFcDJYTFBBM0x1bHpyNmhubUhRVlg5bHlFYUZQUDRVdEZUWFVQMit4dEtKZklLWHNuY3Rld28yQVNXYnl6YkVIWG5lUy9LUUd3WWt6Mnl6REdXZGVrakE5U3NxL0V5TE9pVVJXTzJnZXJWU3NOUmtxenpuZ3QwOWYzN2d1NWV6NFRkeW5MbkpreThrT3pZdXNMamZjbUZwRUNEUnlTcEVYTEprUjZmMlNJWkI3MG1lZVpyMFpHVDJSb0J5M0hsdWNaVlV2dFJCU3JhNFJNRFZ2T3JldG5RRWFxZklFTFFVaWNPZ29FVDlrblROMEplZXFGZ3l6cjk3L0ZUL1E3OXAvcTlMNE9ZbVQ3elEwckg1a0tscnQvQ0NRV25qNnpKQWhTVGFaSFBxcVhwVzdjRVVRNUV1dXJhWkxGdFo4b2lIcVpmVXcyNXFoNVRxbUc3SlBycWxPbkh4ZHJrc1hMWDZSSkxQY1BkZGVVNnNoZUVYVXZLNmVxS2kramdGaWI1MngvanBmZDk5dmJsZkVUdWRuUmdhYXUzWTlBUFo2dUlORXN1OXVMelcxUEZIMFRZZmpRN2FZbmk1M0dpMFRFYzlrQ1BTamZxSzIxZENEaFRiOFh5RnBPSkZLWjlsUVU2V0ZaUGRoRkhUUmZpN0VXNnEzREF4dk8rRks1bjNGVlB2bVltaDlPems4WWRiMnEvUmZMVzk3S3ZWckxPVmVxUFkwRFJxT1ZJTlg3TktkejBSazB6dTBqaHFsMGF2RVFPdnR2R2lWMm1IMGtYTFJHR0wrM2V5azF2MW1QYXc1YmgzakkzMFQxenBuRFc4aVpIYTBaY3lYZWNSM3JSWGJpdzFUMVBQNjFVTlZnQ3c3TXFlVEpoTlgyN2hIRW53QXZYWmtncHB3NnRXb2dhZFUvV21DaURDVWx5ZGNuN0hOZjIrYTk1OTd1VC9EK0lOampkbFhIMWMvWTdiZWptcnU1aUhmZlhIRStzVFZZYldSQnhYQ0xIb0l0UXRDL21URE04aUM2ODhSTERTT09WbFFyeXdIOS93K2tuQTd5dW1aL3J4SnNkYk1xNCtObTI2SmVYYlZoKzNxejdCdk5teFhJc1JqM3Fhb3hEVTVDWkpmdkVzSmZpTVlobjF3aXlzcDhxRVJCSFE5cE45UDVTV2piNjNPTjRXNDVhUEZBMWxFdTNnck1XcjIwa0NFcHJwcHhob0NVTWtDYXBkNmZremFjOVpUR3VHT2NnSm5DRklNT1Fxajc4ZEJpMGZ2d1k5emR1Z1dqYUdKQUFBQUFCSlJVNUVya0pnZ2c9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRGNBQUFBM0NBWUFBQUNvMjlKR0FBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUJ1MlNVUkJWSGdCdFZwNWRGeDNlYjF2bTFYTFNCcXRIc21TTEhsSkhDOGhpeE9TV0dZbkNjUWhZVHVuTEQ1cG9kQnlFdjlWdXRBNDU3UWxYUTQ0TFJST1N3a2NPQkFvWUZQS0NRa2t0Z21RUUJ4YmpwM1lzbVZwdEk2V2tXYlI3UE9XM3U4M3NwTkF5RWI2a3ZGb1p0Njg5L3UyKzkzdi9rYkQ2M3djT0hBb0VvYXgyekQwclZYRDY5VTBiWnZtZVJIUFJRVFE0RllycUdaUzZaWHAyYmlXeTZVclRuWFk4OXdqY0RDOFovKytPRjdIUThQcmNJaEJJVk8vazRzY3NteG5xREszZ0dJK2oxQnpDM3pSS0d5RFJzbUovTWZqZjY3blFYY2RsSmRUS00zT29aaFpndTRCanVZTWU2Nzc5WXBiUGZpSi9mZkc4UWNlZjVCeER4NzQ2WkJobUhmenp5SFhjMkF2SkdFbjVxQlhiRjdaUU5WeG9mdDg4TVc2WU5CSVQ5ZWgwUWd4enRNMC91M0M0S01ZSDBObWNvYkJzMEVId2VWSjFXcjFZQm42Zlh1L2NPOWh2TWJqTlJuMzhJR0h0d0htNTZGclEycWhmRzlsYVI1bmYvTUVUTnZCWUVjM2ZDNk40OVdkY0FpaDdoaXFsaCthR01kemZUNkxSdkRtcFNKV3hzK2h1clRDcUxrMHpZYnJPUHhBUThYd0lieW1HdzJ4bnNPZXJlMjU5WU83NG5pVng2c3k3djY3N29vMCtDSjNod2JXM3hWczY0QnJtcnlBcGk2eXNEQ0h6RXFhaXl2RFRXYXhycTBkbFhBUU9ScFJxRmF4bEVvaW1WeUFMeERBMnJZMWFMUVoxVlFXZXRWQmxkR3EwbHBiczFHRmprQnNMZXA0ZmZqcEVMNldaSFkxN0x2MXRwMzN2SnIxdm1MakR0ejFhWUtEY2Npd2ZMMldMd0M5T1FLOXJRMEYxazVtSllmVXlnb3N2OFcvbHpHVG1JR2ZrYXBuMUNxTXprSXlpZEY0SEFGK3orSXRMVVBIcG1nSHR2YXNRNE12cE5LMElHRFQzQWlqcXhPV0dXVHdOTEdKWlVvbjhET25tRWR4WmlwZVRNM3QyblB2S3dPZVYyVGNRMS81MW01N2JQVCtvRzVGcXBhQnM0ekNxYWs0Q3A0TlI5ZXd1THdNbS9YRk5JWEo4enRZWXlQbnpzTmdWRHFpcmJCWmo2RmdDSGFwZ29HMkxtenY2Y2VUcDU5R1EzMGQzbnpaMWRBYm0rRjJ0Y0dsOFhJWlYrcU9mN2lNZUtWY1FINXFCbVZHM1pEUE5LUWQzZHV6NTdOL2RmRGwxbTI4M0FtUC9leXhPLzNOelY5cjZsMFhtTXNzNFA2SC94Y1BIM3NLYzlrVTZpS05DSVhEY0xpUUtnMEpoVUtNMGhMR3grTEk1MWF3WmV0VzZMcUJxZWtaRkVwbHBMSVpMS2ZTc0YwWGI3N2lqWmd2Rk9IcjdVYjM5cTNRUWdIV0lzSEg3MlBrTFBocFlKbmZ5NThmZzVITHcyQWtKY0tHWVFRMHcvakErMi81VU9aN0R4OTRBcTgxY3NlZk9IcW41K3I3TGRPSDVlUWkvdTRmN3NIWlNhWlgwSS90bDExR0w3dElMaTFqYm00ZUFYK0FxYVJqa1NuWTFCUkJwTEd1ZG5WWFYrOVhDRFFyVEYyRG9LTHpZVEhaQmdZR0VZbTI0Sk1mK3pqTWdCOE8wOUJmY3BBamN1WW1aNEZTaVVtcHNSWmRsR3diWmJzS3I2NFJ2cTUyK09vYVlPdmEzaHR2dm5iL3F6YnUxL3YrWlhkd1hmOEIvN3AxOFB3bXZ2Q2wrL0N6UncraHFhVVo5WFZoaEpsU0kyZlBJcDh2OEd4ZFFiZ3MzR0JxaGhuQlVIMFk1WElGdHUycTJ6UTBOS3JYdVZ5T2tTWXEwakdtWWNDeWZQam9SL2ZnOXB2ZUJZK29XUnlmZ2N0clNwcExTNUJuY1l4RGgzcHRUUWcwUlZHUnRIWFpMbGp2L1BqV3Q5OTQ5WXVtNkl1bTVmSFBmcjdYWitvUCtvcWxnTEc0aE9YRk9YenhnVzhSeWczMHJGbURucDV1VEl6SGtWeGU0a0xaa0preUVvMDZHclcyZXczOGhQcGl2bGhyekVRRmszVXFLVnN1bDFFb0ZQZ2RCd2FSVmxxSTQ5b1lHVGtMZlRtTGpjRW1XUHhNTnl3YTdxT2pETGcweXJjdUJ2OUFML3lOSkRtV3FkS1d5WUNBL0ZNb3Z1T1dqVmQ5NXp1SGY1eitiVHZNRnpPT3lYOG9aT2tSd3lBVWsxMGt6cDVEc1pRakd2b3hsNXpENU13RVRCcFZ6OWRzNHVocWE4V3VhNjdHaHI1ZVdQVG9FZ0ZtSWpHTDhkbEZ6R2ZTeUJGSWJOSXVuODlBbUFpNlFuUjFtR1pTajNKVStkbTNmL1lUVkhJRi9OSFFUWHpmWVo4ekVPaU13dDhrNlNkT1lIcEtka2dmOUlpNDJSSjdaQnpseFdRazROTVBIZGozK2UyMzd0dWJma25qUms2TTNHMnNyUFJxWkJ2R2NvYTE0U0hBWXZkWXpFVXVNaEIwc0k2UnU0U1AxcFlXOUs3dFplMzBvNld0R1o1YmhaUE53c25rY2ZaWkEydVppazlQeEhGc2JBTHgrWGtWRFRISVpOU3FWVWxOV3dCQ2VBbS9hK09CWHh4Q3FLNE90Ny92ZlFoRjY5bjRMVWdoR3Z4Y2t6U21YU2dUUWVNSkZPZVQ4QkZOZFY2enF0bTlwaGtVcHJUMzk2Ymw2ZU9uZXcyZmNWQ2pkODMyZGhqTnplcWlCcjE4N093SUV1a1VLcFV5YnI3eGJmaXpPeitKU3kvZGlLN3Vkb1FiRzRrRTdFMWNxTzdRemF5dHVtQ1lhZXFEeDZqTUVDRlhTbFhrQ1JCU1E5TDJ4U2pwWlk1aUpJWXkyaUlvbll5UDQ0cGRONkNsbzAzVnI4blUwK1NaYUt4TkoxRWRuWVdlTGFqV3poUFV1Z1ZGM2FCdng4Yy85WmMvL09xMy9uUHVnajM2ODQycjg1djNtNUxUOUpobTZYQmJ3ckMzRHFCdDZEcGN2MnNuRjZEaExXOTVDejcyNTUrQ0Z3akRxNitISG1FZDFEZENDemZBczBKOCtLQUZBMndUVFFTZVJsVm5yWTFOaVBDMW9ac3FBOFNnU3FXaStwbXVLSm1tNkZpaHlGUmpUWDdoaS8rdWFKaDhwa3ZOVGkvQmZYb2N4dnd5ZkFKQ3JHay8yNGFmdGVmV0JWRjMyUVkwWFhVRnJLYTZ6ei9mbm92R25mdlNONGJjb3llSEFqTUxxbTRNSVQ1YURjYWRoaERhZXZ1bFIrT1AvK1FPM282R3l4bTZuMWZ3OFNGbzZhalU4a3dpSmlOUW9WSFNGbXltbGFCbmtQVXBDeEx3a1lneDBWQWxrdHE4bDBNajVWRzF5eldBR1IzQjBWODlEbzAxNjU0YWh6YTN4RDVINitsd2s5ZlhXYnRlblIvV2htNUVydG9DaXdUQUlEdnltY2JRazQrZEh2b2Q0d0tHZnFmQlJ1dU9Ua0IvYWdSbWdqa3QvRS8rbzRIOWJBbnQ3VzBZSEJnQTFOSnFYeGZqMVVERGROVVlEWjBwN0xJMmMrazBabVpuRUFvSUJXTkVwQmI1bVh4UFUraXFxY2xBR3NXRmFNcXpZbDFNM1llK2Z4REdYSm9Bd2pVdy9VdytORWxEOGxWamZUZUNWNnlIR1l0Q1o1c1NPc2N5SmlwckNNSzUrd1hHalgvN3dWNzZlN2MwVmxNU29aaURmbllNMVdPbllOSnJPbSt3OFpKTnVPT09PNFQrcUVOZ3ZHWWh6MmM5ZU5VeVBEWlpseEZ6eWlVVStZZ1F1bnRpYXhCai9iaDJSYVdvTkg1NUNKYXJsQlFEK2RxcnNRLzEydWJmSjhiT0lzZHJpblBGWWkxTVB0dmJBZC9XZm1pZFRkQ1ltcWJVcVdRS2pRcEkrazRtVUg3eTJORHhmZmRITGhybjM3NSt0M0hsVmxTalJEemVRR1lzV2I0dlZ3Rk9UUUNQbjZFWGwzSGJMYnVoaXVQaUxNQkZWWXJROGhsb2hiSXlVcHAyaVUxYVgwM0RDZ2x2VjNNRHJ0KzJtV1NhNldTb2I2azAxRmI3WXkxaXovMHRSNUZJT0RVOWl6SlQwZXR2aDNicFdtaGQ1S0NtcHNwRDNaN1I4aE9QelBFRlZILzlERFN5R2gvTHcvVlg3cnJZQ2h5LytSR1BjRzgyWHdJa1UzQW01b0ZNRGliclFSYzJVTWdCWndydzZEMnZvNUVMcUNyMGNsbFRLZEt4UjMvNUJNWVRDMWpPNXJDMHRFU3dyTEtmQlJEamdEb1k2MFFISi9JMzlQWWhseS9ocDhNbnVIQlhwYkxyYXJVYWxCU3Q1WUl5a0VpRENpbFhNcXhoMDJXOUVBQ1dMcURWVGxHcGl6S3poVUJUSVVab3pCS2ZqRVhzdWFhMER3ODdsWEdKMCtPOTVBdmJkRFpHVjc1RmlxTTExVU5iektJOGxZQ1Z5cW1PSVV6RGMwckl4eGVoNVphNStEQ0tTMmw4LzlzUDRObXBXU3lzRkpFZ3RkSjRuUUJudHJJbnRJbHBRbGJmUWE3WlN0cTJrd1M1eE04Zk9YNkM5VmZsdVk2cU8wODFjeHJzWHFoazBpNmFuNkJVVWRWcU9WSkRWRThOdzk3c0Vxb3NGek5QWWtBSzVyS1ZlSks5ZEpJZHNtREU2b2VPSHo4ZU1kM2pwN2Y1ZWpzWmtWWWluYUdJcmt1SWRicGFZTkpRai9EclRpVGdrZVYvOVY4L2gvajBKUHFiR3JGejV3MVl2MnNYTnZUMklrN3ZaUW5oTHFNWjYraENZMzFJa1dsWlZUTWJlWDJvam0wbXpLSFZRVC83NTFOc0ZVdlpDaEZRVjN3MDFrS2l6ZlBPenkyaXdLaExpeEJEaThXaW1qZ2taWVdabVBNRXBTbktHRXhaUytwME5kb1NFNDBSYzN2YU9laTJnbGVXT3Q1dEdwbWxJZS9wRk96eEJ1aUQzZERhV3hVV1NnbzRraUtrUUZvSG84bWFhM29tZ3YvNTVhOXgrT1JwNU9xYk1mQ2UyM0g1emlHY0p2OHNWRXE0NVkwM29ILzlJQ25hQXZKY1RIZXNCMjJzNHdJam1tZGtTMnp1QVo5SlE4Skk1MVlVZDJ5TE5LQ252WU9Da1ljdGE3dnh5OU9qcW5tenIyQjZZaEtKODVPb0wxYmhUK1VSS0x1cS82b1JsdWZvREpmajQzTlhLL3hkSk5TR1ZuTUcydy9yYlp2SlNHOFZScTl6SE5HT253WmFTSlBXZHNHTlJuZ0JvNGFMY2k5KytlcDM3OGJqejR4Z29MVUoxOTE4SS9TeWpWQlhGKzdZKzBta3FXTFYrNExNK1NDNkNjME92UXRwMXBrTXFrVEorV1h5elBReXNrVGlKaktnQk1IR2xOR0hhTGRTeUdQTDRBWXNMaVpWUDZ0aGlvZlRwMDdndjVncEhWWVlHM2lmbnBZT3RKQU1DUHNoUXdCNjJtRFM4UTRkVnZFMEJYYmlGMGxBL3QrclRYM3JSOGZOZEhhYnRHWFhrT1pOM3NmRmVVd1ZxNjhiTGdkU1Z4VThhNEVvV0pvNUR6b0xvZjVCT0l3V1p4NFNiYVlCYTFCalBaQVZLLzduMGZBeVo4Q1ZWQXJUWFBRNFZiR0p4VVVzRUtnV0NWRHovS3k3dFpOQllDT25JM3JiT3hGa2FqMXc1T2NLR0lSUERyWkgwY0FHNW9pMS9MK2RxYjFwN1FDMlhIc0RPclplZ2tDMG9TWkhWR1g4SWJxejV4bGNnMHRPWEoxSXhFMTl4K1plZHpFRCsrd0VESHJaTlFqakFpNGt6dTRDNnkzS01XUmRMenl5YzRkRzE2MGJwRnZNV3FHWHFGcTViTnhVZ1lTVkNEdUJVRGZwNmFrVkZHajRKSVdqQkc4MnhRbDlKclZNNHpLb2NDRTlyTTNOZlFNWUk3RzJtU0Z5Ym50M2oyb1RPbzBKOGxwK0FrV1JUbEk2SndmbUFybnVZbWNuenRCNUN5UGppTXhGME5IWlN0cFdoRWhKcmFLMlRTOFEzVG01TzE3RXREV09Oa3d6UXdRZkdsUGhHR0hsaXB5cjJJdVlJdVppQ2k1UjBXbUx3Q1JMTVZycmladzB6QllBSWF0bnhMejVKZlk0U1VPNU9wZFhMRk12S1hIQkJXUTV4aVN6WW1RU2MxVEhNdXg3TnIvWFZkK0UrZGxwRkZleTZHcUo0dkxCVFJpZG55VjZLdG1XNDFTUVNNc3BnMDVzV3hOREU0MnkvQ0hreTR4OGNnYXA5QUxxeUdmbk9WbzV5WG40MlphMGpoakJyRTRSZUUwM0kycGlsSFNWNXVpdG9VSk1JOXlaZVZRSjd6cjdraVpOZ0Nmb1NXb2Y2Wk13cjZka1NhQ2VmL3BwQmxDTXJDQjdiaHg5NzN3ckNYTllUZVFDOFZXbWJGVUVIa1lweWY2WExvcWhlZFpYVGpHTGJINEZMWUVvUHJ6N1ZzVElaQTRkRzhiM0h6dUNDNk9LUCtCVGluV2tnMGF4ampYZFVqVkZ1UmM1MXEyZjJaT01uMGRtYWtxTlBxM2hlalJSY1F2NU9Od0dMR1lEMlpiRmZxRzF0eWptSU1oaGs5Wm9mV3RncnVtQVBVRlBpcFpSWmlRRm1iaHdFV3grZGZnbitONVBIc0hZUWhwQkZ2TlY1SnVmK2VCN1ZhT1Z2UUJEMHNqUWxkcHNVQnNSSlNSSFkzWFRVQk9IY05VbHB1Y2dVZExqdFQvM25RZHg1TlNJNm5uaTZZN3VMc1RXOXNBZ1FIbUdjRkJIU1h3U1UrRzd1Y1FreGlrZWFlVEM4aFh1U3lCbkYxRjU1ampuelRDNjFyZkJUMUp0Mm84ZlN5UGFHUEZmc3A2cDEzU1JTUXNDZVJ0NmlKenRxTkxBOHRnTUFzTDZPUnh1dWZVMi9QTVBmZ1N0b1k3Y01ZYnIzL0YyVkppNkplWitnR05ObFNwWG1UZk9NalduNXVad2ZuS0N0TXhXZmN0akpFdE9GWTExQVU0QkZUeDI2amhHWm1ZVmhFdi82ZWpvUUhkM043UENncVVtQ0VPMURJUEFzelF4aGhVT3ZWYlZWZ0JYSSsyMTVpNlQrZ0tOUEVhMEMzREdqTmFIMDRTaVN0cExMa1JLajJlZ3M4ZFpHL3NCTWhSWE0xV1RkWU5rNFJ2NlliRUgyZWVuVUNES1BYTGtHQmFwRnEvcklkQ1FJVHgwNUJGTVQwK2dJaG9tYy85ZDErMWcybGlZSlRwT0VTbGxTTTBJV0tGR2ttMDFIWGlvbzBJbTA0RHRLSEtGMWxiMnpvRjFxOUdsUVl5MHhzOHlSTnAwTWdHTkpNQmtaRzJqdHVkQU5pNWhRd05yTGJaK0EwS1JacTVCeDVQSFRtRGJwWnZqcHFQYnc1cm15U3JoTGM0UzVSWUFNbmxCU0pQRHFLT3JxOERoVksxdjZVZjhrVEVjZStJSmJHWXR0SkY1UE10R1crVUNqajV6RmtWR3hLVkRKcVltOGU0YmRtSXNNWTl6akVxZTZHVjdOWlp1U2U4MFBUUVNpQ3htaDBZUUtuSmM2dUpNdHE1L3JScXVwZGNaNUs5cE1wK1ZwU1Q5WCtIeVhOVVhYYS9tSUdsb2paM3Q2RnEzSHVHbUZvV21yaHFnSE9TckJReWZPWmsycld2eUUxSWZpc0pvdFdrQUhoR3llSWJrMWFqeFRaRUZOQmxNVFR3NytuTUtyQ1gwTlVjUmErM0ZteSsvRms4Tkg4VjhsU1NBckwvRUc1Zm8wU2ZPbkVJcVh5Yk55bEI3S2FtMDA1bHFPajBkSk11SVVCN1VhbkRGd3BkMEZNVnNXa2tISWxXVUtkZ0txMmRyWThQV2xNeEhjc3VNZ05wUWlSQW5mSFI0eVdYS1orYll1QzAxejRsQ1p4RnNzb3YyQ2RNTnJRd0xXWkV2MEkzS0k2SnBxSHpteFRUMk1ZVlJHa1ZYTkdMSHRSdnc3Sk5UK01RSDdrQ1NSYzMxWXNzbHU1Rmd1aGJZOTU2ZG5NSW9ZVC9EdmxXa2J1TGp6UnllVkJla21zV0dyR1kyMWtpOURKMjhwZXpqeFRycjJZanppaXdMS3NrNVpsaGtCbGVHYnpxRTM1T0pud1phUXJzc1lTUnMxRVh1VC9DYXR0SS91YXRrMTJUR01zOHhkUGN3QlNYZlFiNTl2K0xkcTRObzdjbXRHVVVhNm5razB0WmFRdXhtdE1iOHVQNkdNbUhhajRYSkxOeXNpM2J1enZSdUdtRGFVSkJ0YmNQeTQwZHhmblpLT1NqRTVtNHhJUVJBUklVdVV5Y1J5U0ZFV2NCVldrb1ZRZTRqT053ZEVxTUZIR1FTMTR3YUJmTVVZTGd5QlNtL2U4d2VXODJDYW94VkpOdFFjMFJ0d3I5Z2hHN3B3MmJmOW4zcHFlTi9jOWp6N0tFYXg2cnBHMG9BVUNOSkRMN2dGa0w2Z0VyTFlNUkYzNFpMb1ZPWWFhRmdHbzIxSVV4eTNNek5qenhCSnR3ZzZla2pLMG1wREZlcXNnaW9scUZhUkYwb3FJd1RjaXh6WVphcFM0Yks4WWhhSkNNU1pPdlFXUjdGRWtVaElSSlNLWVpFeEZQYWpTelJ1ekNzZXVvanBlam9nZzNlcXBIUWh1Kzk5OEc0R2xadDF6N0NEMnZHMFVXYVVxazQxdnV1aEVuREJKRThqemYxSEZVelRlMWQxRVV5YUdwdVZjS01QTTZQanBGS1RlRlhUdzNqTjJkR3VPaWlLdndnQzcyNVBrQ0RmR28vUVJCUVVrZEZ5SzF0SVZ0VTBrNmVPVThIK05IV0ZzWDYvbjUwZHNZd09qWXNVS2FjSXRmU1Z6Y3ZsZk5YNXp6VkJtVGR3cGFZdmpyN0lvWGtyMStjeEtFSDlydHUvbTdkczVYZG50WU9mK2c2Vm5PbkdoMWx0TkNvQXN0QUtCZWJHQitEc3p5UG1abEViYStiTlRYRk9udnMrTk9ZbzhRdWV3S0NhdUxISUVsMU0vdGhrQU9zeU93Qyt3TDhZbVFxVnlKbzBlK3NsYXB3U0Rib0N0bkdTaW1QMXJZZXJCL2NqalBuamlvMVFGTlJFYlZNSm9tYVZubXhodGlPTk1OVW4wdGZwS0oyOEtKeGtwcWp4L1llcGl1SG9BOGdVTWNnK3NpNFBXTTFqNzFWT2E2VzF5NmpjUERSdzJRSmMvUjZTRUg5Q2hGeGdZcVhVQ1JSbE5WRXpodEdPTjZFeVJQOVROVUxXOHppK1JtZXUxd29FY2FicVl5VkZHc3BVeTVZcGhUZjFkMkpBaDNVMHRTRnZyNXRtSng0V3MxN0hxTWppNjhocjZHQWh1VjBNWXFxbmJuNkQvZi8yMFB4NXlJbjd6dmVQYTQxTUJSc2VDdEhIS2FQZDBHTWZzNndDOGZHU3pZajJ0V05FNVFCYytrVjVNazhsTXpuMVZpRHBMYTBzenJ5dzFhcTBZS01jdmNTRjVmbXVTdEZScGJwWGNkQjFlRjd3bFFhR3VzNUxXbEswZlp4MFIzUk52UjI5M0t3SmI5c2lPQThVN1JhektyeFNPQmVKQVdYMldTc2lsV3FEL0o3Vkt3dWJtbTlZQXRyYnV6TUlkY0lEOG5taHdSTXRFVk5mdzZCTGg2cjdPRGhCMytNSHg3OEVaYTVSMWRpNUVKK01hWWVKODZPcW8zRW5zNE90REl5QnNFa1M5MXlsbEhSU0d6RDNBOFFuVVdjSnMrekN3dFlvUGJ2T1ZLTEZienZ0dmZndmJmZHJnajJ5Smx6T0QweVFtQXA0QnhUTkp0UE1ETXN4V0trWlZqQ1Y2VTM2cXFGSEw3dlM0L3N1ckRNRit3VjNIWFhwMCtReFAycHRxb0txNGV1NDNjT3NaWHY5dzl1eEk0M2JLS21zWUlQdmZkV25EbDlCbzBoRWxkdWtJaGpSRVRLc0JsUEo1ZXh6QWxESlBZR3l1L2lhVWxkUzZRL3NvOGw3aVdJbG1tSjRVVFR2LzcwWDZDUm9sS1IzMTFNekN2bnRqUzNVNUp2VVdtWjRVUXY2WGhCOTVUMUNQcFdOVy9YMGFQeGl6czlMMWg1ckM4MnpQUHVVK2ZMSi9yTGJabTdtQmtmNVVaa0k0SERoMXR1Zmp1U25OZW1VbVFsNUlHejNLcWFwMVppY2NHTm5CZWxKd2w1bHIwNWtmK0s3SGxMakxxa2dwTEppZXVYYjkrR0NKM2pjcUpPa25UbkN5bnU3Zm13YWNONlhQR0dhNmlkN3NHT0s5L0VaaS9YcU5RQVNxUkFGL2Q4K2N1SDQ4OWYzZStFcFd5NyszaXp1UHFkaVBiU3hva2dlK1RJWTdqcHRnK29UZjFtUnVYdHU2N0ZKWnMzc0ErR0ZFVEx6cW5zcE1xbW83Y0s2WG15RW5rdFVaUDBra2VRQkYxNjZ6dHZmSWNxQlFHcFBNOFJVVWs0cFRpN2cxd3l4ajMwZCsvK01MWnV1VjdBZ3pYb3lzNVIvRCsrY25qZmI2L3ZkNHpyNit0TGV4Vm5GOU1xL1ZLR1NjOWNuQjVsc2RmRHg0bllGNmhETHBOU0VsMlFrQitsSkJEbWd2VlZibnBoR2hERFpJaFYrMzJNb2ppd2dUVW9CcXpodVBPR3l5OUhoZW00TkQ5SHdZZ0RNeU5xc2ovNnVaa1NJQisxQXFiYUw5eXdjWXVxZmU3c3Bzc3J6cTRYWGVPTHZkbloxeGNua3UvQlMwVU5WWng5NWhSMlhIV3QyajhJY3dOZWhCeFplRlJBUk5lVm5HQXphckpISU1ZSTZNZ2hFVk44WTdXZUJRRURaQzFidDIxVHIyVy9PNXRkdWFoYk50SmhmaUVMeG5NVTBlOExZL1RNSWl6YjJQUEF3U2ZpcjlnNE9kcmIxeHpVYldmdml4c0dHbllTRHozNkdBYTJYNlYrNVJPazkyM1dXWHhtR2lXYnlFbnZTbStRMzVPSWNSSTFlVGlyKzI3eXZtbjVsQk1hcVdOR0NTQTMzWFNqYWcwbFJxN0VZYmRJRFNVUUVMbFFYMVZlTmRWN3hWR05qYzFZVHBYM2Z2UGc0Ny8zOXlnbVh1Sm82WXJ0WDV5YkZXQjV3YWFlb0pOc0liLzcxdHRKdllJcVlzR21LRG81bFI4L2R4YUpwUlJTbVpMaWhsTHdGM1p5TG14MGlMRjFkSWFrNzdvWTk5aWE2M0hiZTkrUEZxclJtZVUwVW1RNXk2a2xoWWppU3I5ZmRCRy8wak9GVk10MTJxS3RlK09KeFA2WFd2OUxHaWRIYTBmWC91VDhUSng2L3YyOHV0b2FFdmF4NVlwcjZPVXlhai9Fb0xXTVFoc1hHdXVLSWNVZG4zSXloNVY4cmlZK2tSNkpRR3V1N29yS0ZDQS9idHZZUDhBdDZCdlJ2M0d3TnNaUU5aUEZwMGk2WlM4aHlLalozSkNNY2wvUU1HdS9BU1BZcEVrNDlneHUzZnl5dnlEUzhRcU9LRlBVdHIzdGRGeTg5azZOUkJrMDZNSXJnVE0vZ2FXUlNsYUJ0Q3BMY1ZhTUVpUDhiTlNDaG43Mk1abS9SSTN1YUkzaXN2VUQ1SkF0eUxGbGxDZ25Wb21NUlVydllWSTZQMEZFV3MwNjZxUytvRjhoS0JNZzd1cnU5alU5ZlM5cm1Cd3ZHN2tMUjJkblo1eFBmWXZ6aVgyY3J1NFd6NHFBSTdLQ0xyOHBrZkdmdm9xMnROVm1NUEVjR1lZd2YyRWhrbHFWY2tVTmxXM2MybXJsUkhIb3lLUDRwL3YyWS91Vk8zRE5qbXN3Mk45SFlha21Jb2x4OVExQk51Nm9vblZNeWZ2eVJXZWZvUGtyWGZOcityMWxJcEhvL2NmUGZQcitOMTEzOWRBeU55ZHVadTBKK2ptVTljNmZPb2tEUC80UnhpWm5rTTVrRllnSVRSSmdrQmpIMkt1YUc1dkkvbDBjT1BBRHhVektkbTEvb0NmV2dYZSs4MjFZdTZhTGpLUUZHOVp2UW4xVDVMQnVXSHRqZlgzRGVKWEhLNDdjODQvVktPNXFqOVFQWlhYL25UZkIyeTN2RzZ5YnJ1NFlocTVtZTdCL2dYT3lUMjZHVmErVFdVNm9WWWpiVitzcG8zL2p1LzhOMlZvUTdjTlR2MFJ4TUUyVjYydmYrQ2F1dXZKS3ZHWG5EWWM3MjdydXVmVEtxdzdqTlI2dnkyK2NKWkttUmdNMWZJUWdzeTJmU1dQcWZCeFBuUnhXTWtLZWxFeE5EZElkYWZDR2djdnd0NS85ZS9VREFHSHpObzFmRTZtakNsWTluQzlWaitSS3BmM3BkUG9WcHgvK1A0MTcvcEZJalBkUzE5bFdyVGhEaFZSMnEyZmJrY1Q4UXUvMDlHUmtjWEdPK240UW81UHo2VzkrOXp0cEdqYk10SnlndGo4Y0tKVU94bDhIZzU1Ly9CK01tSFlkZW5meTVRQUFBQUJKUlU1RXJrSmdnZz09XCIiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCYXNlQWNjb3JkaW9uIH0gZnJvbSAnLi9iYXNlLWFjY29yZGlvbic7XHJcbmltcG9ydCB7XHJcbiAgQWNjb3JkaW9uQnV0dG9uLFxyXG4gIEFjY29yZGlvbkl0ZW0sXHJcbiAgQWNjb3JkaW9uQ29udGVudHMsXHJcbiAgc2luZ2xlLFxyXG4gIHByZXZlbnRDbG9zZSxcclxuICBjb21iaW5lUmVkdWNlcnMsXHJcbn0gZnJvbSAnLi9zaGFyZWQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWNjb3JkaW9uKHsgaXRlbXMsIC4uLnByb3BzIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJhc2VBY2NvcmRpb25cclxuICAgICAgc3RhdGVSZWR1Y2VyPXtjb21iaW5lUmVkdWNlcnMoc2luZ2xlLCBwcmV2ZW50Q2xvc2UpfVxyXG4gICAgICB7Li4ucHJvcHN9XHJcbiAgICA+XHJcbiAgICAgIHsoeyBvcGVuSW5kZXhlcywgaGFuZGxlSXRlbUNsaWNrIH0pID0+IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPEFjY29yZGlvbkl0ZW1cclxuICAgICAgICAgICAgICBrZXk9e2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgaXNPcGVuPXtvcGVuSW5kZXhlcy5pbmNsdWRlcyhpbmRleCl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8QWNjb3JkaW9uQnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZUl0ZW1DbGljayhpbmRleCl9PlxyXG4gICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtvcGVuSW5kZXhlcy5pbmNsdWRlcyhpbmRleCkgPyAnb3BlbicgOiAnY2xvc2VkJ31cclxuICAgICAgICAgICAgICAgID48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICA8L0FjY29yZGlvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8QWNjb3JkaW9uQ29udGVudHMgaXNPcGVuPXtvcGVuSW5kZXhlcy5pbmNsdWRlcyhpbmRleCl9PlxyXG4gICAgICAgICAgICAgICAge2l0ZW0uY29udGVudHN9XHJcbiAgICAgICAgICAgICAgPC9BY2NvcmRpb25Db250ZW50cz5cclxuICAgICAgICAgICAgPC9BY2NvcmRpb25JdGVtPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcbiAgICA8L0Jhc2VBY2NvcmRpb24+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgQmFzZUFjY29yZGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcclxuICAgIHN0YXRlUmVkdWNlcjogKHN0YXRlLCBjaGFuZ2VzKSA9PiBjaGFuZ2VzLFxyXG4gICAgb25TdGF0ZUNoYW5nZTogKCkgPT4ge30sXHJcbiAgfTtcclxuICBzdGF0ZSA9IHsgb3BlbkluZGV4ZXM6IFswXSB9O1xyXG4gIGdldFN0YXRlKHN0YXRlID0gdGhpcy5zdGF0ZSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgb3BlbkluZGV4ZXM6XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vcGVuSW5kZXhlcyA9PT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICA/IHN0YXRlLm9wZW5JbmRleGVzXHJcbiAgICAgICAgICA6IHRoaXMucHJvcHMub3BlbkluZGV4ZXMsXHJcbiAgICB9O1xyXG4gIH1cclxuICBpbnRlcm5hbFNldFN0YXRlKGNoYW5nZXMsIGNhbGxiYWNrID0gKCkgPT4ge30pIHtcclxuICAgIGxldCBhbGxDaGFuZ2VzO1xyXG4gICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAgKHN0YXRlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYWN0dWFsU3RhdGUgPSB0aGlzLmdldFN0YXRlKHN0YXRlKTtcclxuICAgICAgICBjb25zdCBjaGFuZ2VzT2JqZWN0ID1cclxuICAgICAgICAgIHR5cGVvZiBjaGFuZ2VzID09PSAnZnVuY3Rpb24nID8gY2hhbmdlcyhhY3R1YWxTdGF0ZSkgOiBjaGFuZ2VzO1xyXG4gICAgICAgIGFsbENoYW5nZXMgPSB0aGlzLnByb3BzLnN0YXRlUmVkdWNlcihhY3R1YWxTdGF0ZSwgY2hhbmdlc09iamVjdCk7XHJcbiAgICAgICAgcmV0dXJuIGFsbENoYW5nZXM7XHJcbiAgICAgIH0sXHJcbiAgICAgICgpID0+IHtcclxuICAgICAgICB0aGlzLnByb3BzLm9uU3RhdGVDaGFuZ2UoYWxsQ2hhbmdlcyk7XHJcbiAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcbiAgaGFuZGxlSXRlbUNsaWNrID0gKGluZGV4KSA9PiB7XHJcbiAgICB0aGlzLmludGVybmFsU2V0U3RhdGUoKHN0YXRlKSA9PiB7XHJcbiAgICAgIGNvbnN0IGNsb3NpbmcgPSBzdGF0ZS5vcGVuSW5kZXhlcy5pbmNsdWRlcyhpbmRleCk7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogY2xvc2luZyA/ICdjbG9zaW5nJyA6ICdvcGVuaW5nJyxcclxuICAgICAgICBvcGVuSW5kZXhlczogY2xvc2luZ1xyXG4gICAgICAgICAgPyBzdGF0ZS5vcGVuSW5kZXhlcy5maWx0ZXIoKGkpID0+IGkgIT09IGluZGV4KVxyXG4gICAgICAgICAgOiBbLi4uc3RhdGUub3BlbkluZGV4ZXMsIGluZGV4XSxcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2coJ2NsaWNrZWQnKTtcclxuICB9O1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuKHtcclxuICAgICAgb3BlbkluZGV4ZXM6IHRoaXMuZ2V0U3RhdGUoKS5vcGVuSW5kZXhlcyxcclxuICAgICAgaGFuZGxlSXRlbUNsaWNrOiB0aGlzLmhhbmRsZUl0ZW1DbGljayxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHsgQmFzZUFjY29yZGlvbiB9O1xyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4IH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcclxuXHJcbmV4cG9ydCBjb25zdCBBY2NvcmRpb25CdXR0b24gPSAoeyBjaGlsZHJlbiwgLi4ucmVzdCB9KSA9PiAoXHJcbiAgPGRpdiBzeD17c3R5bGVzLmJ1dHRvblRvZ2dsZX0gey4uLnJlc3R9PlxyXG4gICAge2NoaWxkcmVufVxyXG4gIDwvZGl2PlxyXG4pO1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGJ1dHRvblRvZ2dsZToge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgY29sb3I6ICdoZWFkaW5nX3NlY29uZGFyeScsXHJcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgIGJvcmRlcjogJ25vbmUnLFxyXG4gICAgZm9udFNpemU6IFsyLCBudWxsLCAzXSxcclxuICAgIGZvbnRXZWlnaHQ6IDUwMCxcclxuICAgIGxldHRlclNwYWNpbmc6IC0wLjUsXHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIHBhZGRpbmdMZWZ0OiBbJzMzcHgnLCBudWxsLCAnNDVweCddLFxyXG4gICAgbGluZUhlaWdodDogWzEuNSwgbnVsbCwgMS44XSxcclxuICAgICcmID4gc3Bhbic6IHtcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgIHdpZHRoOiAyMCxcclxuICAgICAgaGVpZ2h0OiAyMCxcclxuICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzI1Q0I5RScsXHJcbiAgICAgIHRvcDogWycycHgnLCBudWxsLCAnNnB4J10sXHJcbiAgICAgIGxlZnQ6IFswLCBudWxsLCAnMTNweCddLFxyXG4gICAgICAnJi5vcGVuOmFmdGVyJzoge1xyXG4gICAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgIH0sXHJcbiAgICAgICcmOjpiZWZvcmUnOiB7XHJcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgY29udGVudDogJ1wiXCInLFxyXG4gICAgICAgIGhlaWdodDogJzJweCcsXHJcbiAgICAgICAgd2lkdGg6IDEwLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcclxuICAgICAgICB0b3A6ICc1MCUnLFxyXG4gICAgICAgIGxlZnQ6ICc1MCUnLFxyXG4gICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlICwgLTUwJSknLFxyXG4gICAgICB9LFxyXG4gICAgICAnJjo6YWZ0ZXInOiB7XHJcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgY29udGVudDogJ1wiXCInLFxyXG4gICAgICAgIGhlaWdodDogMTAsXHJcbiAgICAgICAgd2lkdGg6ICcycHgnLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcclxuICAgICAgICB0b3A6ICc1MCUnLFxyXG4gICAgICAgIGxlZnQ6ICc1MCUnLFxyXG4gICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlICwgLTUwJSknLFxyXG4gICAgICAgIHRyYW5zaXRpb246ICdhbGwgMC4yNXMnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG5cclxuY29uc3QgdmFyaWFudHMgPSB7XHJcbiAgb3Blbjoge1xyXG4gICAgaGVpZ2h0OiAnYXV0bycsXHJcbiAgICBtYXJnaW5Ub3A6IDEyLFxyXG4gIH0sXHJcbiAgY2xvc2VkOiB7IGhlaWdodDogMCwgbWFyZ2luVG9wOiAwIH0sXHJcbn07XHJcbmV4cG9ydCBmdW5jdGlvbiBBY2NvcmRpb25Db250ZW50cyh7IGlzT3BlbiwgLi4ucHJvcHMgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8bW90aW9uLmRpdlxyXG4gICAgICBpbml0aWFsPVwiY2xvc2VkXCJcclxuICAgICAgYW5pbWF0ZT17aXNPcGVuID8gJ29wZW4nIDogJ2Nsb3NlZCd9XHJcbiAgICAgIHZhcmlhbnRzPXt2YXJpYW50c31cclxuICAgICAgc3g9e3tcclxuICAgICAgICBvdmVyZmxvd1k6ICdoaWRkZW4nLFxyXG4gICAgICAgIGZvbnRTaXplOiBbMSwgbnVsbCwgMl0sXHJcbiAgICAgICAgbGluZUhlaWdodDogWzEuODUsIG51bGwsIG51bGwsIDEuOSwgMl0sXHJcbiAgICAgICAgY29sb3I6ICcjMzQzRDQ4JyxcclxuICAgICAgICBwYWRkaW5nTGVmdDogWyczM3B4JywgbnVsbCwgJzQ1cHgnXSxcclxuICAgICAgICAnID4gZGl2ICc6IHtcclxuICAgICAgICAgIHBhZGRpbmdCb3R0b206IFsxLCAyXSxcclxuICAgICAgICB9LFxyXG4gICAgICB9fVxyXG4gICAgICB7Li4ucHJvcHN9XHJcbiAgICAvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBBY2NvcmRpb25JdGVtID0gKHsgaXNPcGVuLCBjaGlsZHJlbiwgLi4ucmVzdCB9KSA9PiAoXHJcbiAgPGRpdlxyXG4gICAgY3NzPXt7XHJcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgICAgcGFkZGluZzogJzE3cHggMCcsXHJcbiAgICAgIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjRTVFQ0Y0JyxcclxuICAgICAgJyY6bGFzdC1jaGlsZCc6IHtcclxuICAgICAgICBib3JkZXJCb3R0b206ICcwcHggc29saWQnLFxyXG4gICAgICB9LFxyXG4gICAgfX1cclxuICAgIHsuLi5yZXN0fVxyXG4gID5cclxuICAgIHtjaGlsZHJlbn1cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBwcmV2ZW50Q2xvc2UgPSAoc3RhdGUsIGNoYW5nZXMpID0+XHJcbiAgY2hhbmdlcy50eXBlID09PSAnY2xvc2luZycgJiYgc3RhdGUub3BlbkluZGV4ZXMubGVuZ3RoIDwgMlxyXG4gICAgPyB7IC4uLmNoYW5nZXMsIG9wZW5JbmRleGVzOiBzdGF0ZS5vcGVuSW5kZXhlcyB9XHJcbiAgICA6IGNoYW5nZXM7XHJcblxyXG5leHBvcnQgY29uc3Qgc2luZ2xlID0gKHN0YXRlLCBjaGFuZ2VzKSA9PlxyXG4gIGNoYW5nZXMudHlwZSA9PT0gJ29wZW5pbmcnXHJcbiAgICA/IHsgLi4uY2hhbmdlcywgb3BlbkluZGV4ZXM6IGNoYW5nZXMub3BlbkluZGV4ZXMuc2xpY2UoLTEpIH1cclxuICAgIDogY2hhbmdlcztcclxuXHJcbmV4cG9ydCBjb25zdCBjb21iaW5lUmVkdWNlcnMgPSAoLi4ucmVkdWNlcnMpID0+IChzdGF0ZSwgY2hhbmdlcykgPT5cclxuICByZWR1Y2Vycy5yZWR1Y2UoKGFjYywgcmVkdWNlcikgPT4gcmVkdWNlcihzdGF0ZSwgYWNjKSwgY2hhbmdlcyk7XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3gsIEJveCwgQ29udGFpbmVyLCBGbGV4IH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgeyBJb0lvc0Fycm93Um91bmRCYWNrLCBJb0lvc0Fycm93Um91bmRGb3J3YXJkIH0gZnJvbSAncmVhY3QtaWNvbnMvaW8nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQnV0dG9uR3JvdXAoeyBuZXh0LCBwcmV2aW91cyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxGbGV4IHN4PXt7IHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPEJveCBzeD17c3R5bGVzLmJ1dHRvbkdyb3VwfT5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17cHJldmlvdXN9IGFyaWEtbGFiZWw9XCJQcmV2aW91c1wiPlxyXG4gICAgICAgICAgICA8SW9Jb3NBcnJvd1JvdW5kQmFjayAvPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e25leHR9IGFyaWEtbGFiZWw9XCJOZXh0XCI+XHJcbiAgICAgICAgICAgIDxJb0lvc0Fycm93Um91bmRGb3J3YXJkIC8+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L0ZsZXg+XHJcbiAgKTtcclxufVxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgYnV0dG9uR3JvdXA6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgIG1iOiAtNCxcclxuICAgIGJ1dHRvbjoge1xyXG4gICAgICBiZzogJ3RyYW5zcGFyZW50JyxcclxuICAgICAgYm9yZGVyOiAnMHB4IHNvbGlkJyxcclxuICAgICAgZm9udFNpemU6IDQwLFxyXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICAgcHg6ICcycHgnLFxyXG4gICAgICBjb2xvcjogJyNCQkM3RDcnLFxyXG4gICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuMjVzJyxcclxuICAgICAgJyY6Zm9jdXMnOiB7XHJcbiAgICAgICAgb3V0bGluZTogMCxcclxuICAgICAgfSxcclxuICAgICAgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgY29sb3I6ICd0ZXh0JyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCb3ggfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCBSY0RyYXdlciBmcm9tICdyYy1kcmF3ZXInO1xyXG5cclxuY29uc3QgRHJhd2VyID0gKHtcclxuICBjbGFzc05hbWUsXHJcbiAgY2hpbGRyZW4sXHJcbiAgY2xvc2VCdXR0b24sXHJcbiAgY2xvc2VCdXR0b25TdHlsZSxcclxuICBkcmF3ZXJIYW5kbGVyLFxyXG4gIHRvZ2dsZUhhbmRsZXIsXHJcbiAgb3BlbixcclxuICB3aWR0aCxcclxuICBwbGFjZW1lbnQsXHJcbiAgZHJhd2VyU3R5bGUsXHJcbiAgY2xvc2VCdG5TdHlsZSxcclxuICAuLi5wcm9wc1xyXG59KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgPFJjRHJhd2VyXHJcbiAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICBvbkNsb3NlPXt0b2dnbGVIYW5kbGVyfVxyXG4gICAgICAgIGNsYXNzTmFtZT17YGRyYXdlciAke2NsYXNzTmFtZSA/IGNsYXNzTmFtZSA6ICcnfWAudHJpbSgpfVxyXG4gICAgICAgIHdpZHRoPXt3aWR0aH1cclxuICAgICAgICBwbGFjZW1lbnQ9e3BsYWNlbWVudH1cclxuICAgICAgICBoYW5kbGVyPXtmYWxzZX1cclxuICAgICAgICBsZXZlbD17bnVsbH1cclxuICAgICAgICBkdXJhdGlvbj1cIjAuNHNcIlxyXG4gICAgICAgIHsuLi5wcm9wc31cclxuICAgICAgPlxyXG4gICAgICAgIHtjbG9zZUJ1dHRvbiAmJiAoXHJcbiAgICAgICAgICA8Qm94IGFzPVwiZGl2XCIgb25DbGljaz17dG9nZ2xlSGFuZGxlcn0gc3g9e2Nsb3NlQnRuU3R5bGV9PlxyXG4gICAgICAgICAgICB7Y2xvc2VCdXR0b259XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxCb3ggc3g9e2RyYXdlclN0eWxlfT57Y2hpbGRyZW59PC9Cb3g+XHJcbiAgICAgIDwvUmNEcmF3ZXI+XHJcbiAgICAgIDxCb3hcclxuICAgICAgICBjbGFzc05hbWU9XCJkcmF3ZXJfX2hhbmRsZXJcIlxyXG4gICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snIH19XHJcbiAgICAgICAgb25DbGljaz17dG9nZ2xlSGFuZGxlcn1cclxuICAgICAgPlxyXG4gICAgICAgIHtkcmF3ZXJIYW5kbGVyfVxyXG4gICAgICA8L0JveD5cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKTtcclxufTtcclxuXHJcbkRyYXdlci5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgd2lkdGg6ICczMjBweCcsXHJcbiAgcGxhY2VtZW50OiAnbGVmdCcsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEcmF3ZXI7XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3gsIEltYWdlLCBCb3gsIEhlYWRpbmcsIFRleHQgfSBmcm9tICd0aGVtZS11aSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGZWF0dXJlQ2FyZENvbHVtbih7XHJcbiAgc3JjLFxyXG4gIGFsdFRleHQgPSAnZGVmYXVsdCBhbHQgdGV4dCcsXHJcbiAgdGl0bGUsXHJcbiAgdGV4dCxcclxufSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IHN4PXtzdHlsZXMuY2FyZH0+XHJcbiAgICAgIDxJbWFnZSBzcmM9e3NyY30gYWx0PXthbHRUZXh0fSBzeD17c3R5bGVzLmltZ30gLz5cclxuXHJcbiAgICAgIDxCb3ggc3g9e3N0eWxlcy53cmFwcGVyfT5cclxuICAgICAgICA8SGVhZGluZyBzeD17c3R5bGVzLndyYXBwZXIudGl0bGV9Pnt0aXRsZX08L0hlYWRpbmc+XHJcbiAgICAgICAgPFRleHQgc3g9e3N0eWxlcy53cmFwcGVyLnN1YlRpdGxlfT57dGV4dH08L1RleHQ+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGNhcmQ6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdmbGV4LXN0YXJ0JyxcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICB9LFxyXG4gIGltZzoge1xyXG4gICAgbXg6ICdhdXRvJyxcclxuICAgIG1iOiBbMywgbnVsbCwgNCwgbnVsbCwgbnVsbCwgNV0sXHJcbiAgICB3aWR0aDogWyc4MHB4JywgJzkwcHgnLCBudWxsLCBudWxsLCBudWxsLCAnMTAwcHgnLCAnYXV0byddLFxyXG4gIH0sXHJcbiAgd3JhcHBlcjoge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgdGl0bGU6IHtcclxuICAgICAgZm9udFNpemU6IFszLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCA0XSxcclxuICAgICAgY29sb3I6ICdoZWFkaW5nX3NlY29uZGFyeScsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IDEuNCxcclxuICAgICAgZm9udFdlaWdodDogNzAwLFxyXG4gICAgICBtYjogWzIsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDNdLFxyXG4gICAgfSxcclxuXHJcbiAgICBzdWJUaXRsZToge1xyXG4gICAgICBmb250U2l6ZTogMSxcclxuICAgICAgZm9udFdlaWdodDogNDAwLFxyXG4gICAgICBsaW5lSGVpZ2h0OiBbMS44NSwgbnVsbCwgbnVsbCwgMS45LCAyXSxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCwgSW1hZ2UsIEJveCwgSGVhZGluZywgVGV4dCB9IGZyb20gJ3RoZW1lLXVpJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZlYXR1cmVDYXJkKHtcclxuICBzcmMsXHJcbiAgYWx0VGV4dCA9ICdkZWZhdWx0IGFsdCB0ZXh0JyxcclxuICB0aXRsZSxcclxuICB0ZXh0LFxyXG59KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggc3g9e3N0eWxlcy5jYXJkfT5cclxuICAgICAgPEltYWdlIHNyYz17c3JjfSBhbHQ9e2FsdFRleHR9IHN4PXtzdHlsZXMuaW1nfSAvPlxyXG5cclxuICAgICAgPEJveCBzeD17c3R5bGVzLndyYXBwZXJ9PlxyXG4gICAgICAgIDxIZWFkaW5nIHN4PXtzdHlsZXMud3JhcHBlci50aXRsZX0+e3RpdGxlfTwvSGVhZGluZz5cclxuICAgICAgICA8VGV4dCBzeD17c3R5bGVzLndyYXBwZXIuc3ViVGl0bGV9Pnt0ZXh0fTwvVGV4dD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgY2FyZDoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnLFxyXG4gIH0sXHJcblxyXG4gIGltZzoge1xyXG4gICAgd2lkdGg6IFsnNjBweCcsIG51bGwsIG51bGwsIG51bGwsICc1NXB4JywgJzcwcHgnLCBudWxsLCAnODBweCddLFxyXG4gICAgaGVpZ2h0OiAnYXV0bycsXHJcbiAgICBmbGV4U2hyaW5rOiAwLFxyXG4gICAgbXI6IFszLCA0LCBudWxsLCBudWxsLCAzLCA0LCBudWxsLCA1XSxcclxuICB9LFxyXG4gIHdyYXBwZXI6IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIG10OiAnLTVweCcsXHJcbiAgICB0aXRsZToge1xyXG4gICAgICBmb250U2l6ZTogWzMsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDRdLFxyXG4gICAgICBjb2xvcjogJ2hlYWRpbmdfc2Vjb25kYXJ5JyxcclxuICAgICAgbGluZUhlaWdodDogMS40LFxyXG4gICAgICBmb250V2VpZ2h0OiA3MDAsXHJcbiAgICAgIG1iOiBbMiwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgM10sXHJcbiAgICAgIG10OiAnMnB4JyxcclxuICAgIH0sXHJcbiAgICBzdWJUaXRsZToge1xyXG4gICAgICBmb250U2l6ZTogMSxcclxuICAgICAgZm9udFdlaWdodDogNDAwLFxyXG4gICAgICBsaW5lSGVpZ2h0OiBbMS44NSwgbnVsbCwgMl0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiIsImV4cG9ydCBkZWZhdWx0IFtcclxuICB7XHJcbiAgICBoZWFkZXI6ICdBYm91dCBVcycsXHJcbiAgICBpdGVtczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJy8nLFxyXG4gICAgICAgIGxhYmVsOiAnU3VwcG9ydCBDZW50ZXInLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJy8nLFxyXG4gICAgICAgIGxhYmVsOiAnQ3VzdG9tZXIgU3VwcG9ydCcsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnLycsXHJcbiAgICAgICAgbGFiZWw6ICdBYm91dCBVcycsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnLycsXHJcbiAgICAgICAgbGFiZWw6ICdDb3B5cmlnaHQnLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJy8nLFxyXG4gICAgICAgIGxhYmVsOiAnUG9wdWxhciBDYW1wYWlnbicsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaGVhZGVyOiAnT3VyIEluZm9ybWF0aW9uJyxcclxuICAgIGl0ZW1zOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnLycsXHJcbiAgICAgICAgbGFiZWw6ICdSZXR1cm4gUG9saWN5ICcsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnLycsXHJcbiAgICAgICAgbGFiZWw6ICdQcml2YWN5IFBvbGljeScsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnLycsXHJcbiAgICAgICAgbGFiZWw6ICdUZXJtcyAmIENvbmRpdGlvbnMnLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJy8nLFxyXG4gICAgICAgIGxhYmVsOiAnU2l0ZSBNYXAnLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJy8nLFxyXG4gICAgICAgIGxhYmVsOiAnU3RvcmUgSG91cnMnLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIGhlYWRlcjogJ015IEFjY291bnQnLFxyXG4gICAgaXRlbXM6IFtcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICcvJyxcclxuICAgICAgICBsYWJlbDogJ1ByZXNzIGlucXVpcmllcycsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnLycsXHJcbiAgICAgICAgbGFiZWw6ICdTb2NpYWwgbWVkaWEgJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICcvJyxcclxuICAgICAgICBsYWJlbDogJ2RpcmVjdG9yaWVzJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICcvJyxcclxuICAgICAgICBsYWJlbDogJ0ltYWdlcyAmIEItcm9sbCcsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnLycsXHJcbiAgICAgICAgbGFiZWw6ICdQZXJtaXNzaW9ucycsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaGVhZGVyOiAnUG9saWN5JyxcclxuICAgIGl0ZW1zOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnLycsXHJcbiAgICAgICAgbGFiZWw6ICdBcHBsaWNhdGlvbiBzZWN1cml0eScsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnLycsXHJcbiAgICAgICAgbGFiZWw6ICdTb2Z0d2FyZSBwcmluY2lwbGVzJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICcvJyxcclxuICAgICAgICBsYWJlbDogJ1Vud2FudGVkIHNvZnR3YXJlIHBvbGljeScsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnLycsXHJcbiAgICAgICAgbGFiZWw6ICdSZXNwb25zaWJsZSBzdXBwbHkgY2hhaW4nLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG5dO1xyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4LCBIZWFkaW5nLCBCb3gsIENvbnRhaW5lciwgVGV4dCB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ2NvbXBvbmVudHMvbGluayc7XHJcbmltcG9ydCBtZW51SXRlbXMgZnJvbSAnLi9mb290ZXIuZGF0YSc7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvb3RlcigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGZvb3RlciBzeD17c3R5bGVzLmZvb3Rlcn0+XHJcbiAgICAgIDxDb250YWluZXIgc3g9e3N0eWxlcy5mb290ZXIuY29udGFpbmVyfT5cclxuICAgICAgICA8Qm94IHN4PXtzdHlsZXMuZm9vdGVyLmZvb3RlclRvcEFyZWF9PlxyXG4gICAgICAgICAge21lbnVJdGVtcy5tYXAoKHsgaGVhZGVyLCBpdGVtcyB9LCBpKSA9PiAoXHJcbiAgICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5mb290ZXIubWVudXN9IGtleT17aX0+XHJcbiAgICAgICAgICAgICAgPEhlYWRpbmcgc3g9e3N0eWxlcy5mb290ZXIuaGVhZGluZ30+e2hlYWRlcn08L0hlYWRpbmc+XHJcbiAgICAgICAgICAgICAgPG5hdj5cclxuICAgICAgICAgICAgICAgIHtpdGVtcy5tYXAoKHsgcGF0aCwgbGFiZWwgfSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGg9e3BhdGh9XHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXtsYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICBzeD17c3R5bGVzLmZvb3Rlci5saW5rfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8VGV4dCBzeD17c3R5bGVzLmZvb3Rlci5jb3B5cmlnaHR9PlxyXG4gICAgICAgIEFsbCByaWdodCByZXNlcnZlZCAtIERlc2lnbiAmIERldmVsb3BlZCBieVxyXG4gICAgICAgIDxMaW5rIHBhdGg9XCJodHRwczovL3JlZHEuaW8vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICBSZWRRLCBJbmNcclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvVGV4dD5cclxuICAgIDwvZm9vdGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBmb290ZXI6IHtcclxuICAgIGNvbnRhaW5lcjoge1xyXG4gICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICBhbGlnbkl0ZW1zOiAnc3RyZXRjaCcsXHJcbiAgICB9LFxyXG4gICAgZm9vdGVyVG9wQXJlYToge1xyXG4gICAgICBib3JkZXJUb3A6ICcxcHggc29saWQnLFxyXG4gICAgICBib3JkZXJUb3BDb2xvcjogJ2JvcmRlcl9jb2xvcicsXHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgZmxleFdyYXA6ICd3cmFwJyxcclxuICAgICAgcHQ6IFs3LCBudWxsLCA4XSxcclxuICAgICAgcGI6IFsnMTBweCcsIG51bGwsIG51bGwsICcyMHB4J10sXHJcbiAgICAgIHB4OiBbMCwgbnVsbCwgbnVsbCwgbnVsbCwgNF0sXHJcbiAgICB9LFxyXG4gICAgbWVudXM6IHtcclxuICAgICAgd2lkdGg6IFsnNTAlJywgbnVsbCwgbnVsbCwgJzI1JSddLFxyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgICBtYjogWyc0MHB4JywgbnVsbCwgbnVsbCwgJzYwcHgnXSxcclxuICAgIH0sXHJcblxyXG4gICAgaGVhZGluZzoge1xyXG4gICAgICBmb250U2l6ZTogWzMsIG51bGwsIG51bGwsIDRdLFxyXG4gICAgICBjb2xvcjogJ3RleHRfc2Vjb25kYXJ5JyxcclxuICAgICAgZm9udFdlaWdodDogJzUwMCcsXHJcbiAgICAgIG1iOiBbMywgNCwgNSwgbnVsbCwgNl0sXHJcbiAgICAgIGxpbmVIZWlnaHQ6ICcxLjM1JyxcclxuICAgIH0sXHJcblxyXG4gICAgbGluazoge1xyXG4gICAgICBmb250U2l6ZTogWycxNHB4JywgbnVsbCwgMV0sXHJcbiAgICAgIGNvbG9yOiAndGV4dCcsXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2R5JyxcclxuICAgICAgbWI6IDIsXHJcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuMzVzJyxcclxuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgICAgdGV4dERlY29yYXRpb246ICdub25lJyxcclxuICAgICAgbGluZUhlaWdodDogWzEuNSwgbnVsbCwgbnVsbCwgMS42LCAxLjhdLFxyXG4gICAgICAnOmhvdmVyJzoge1xyXG4gICAgICAgIGNvbG9yOiAncHJpbWFyeScsXHJcbiAgICAgIH0sXHJcbiAgICAgICc6bGFzdC1jaGlsZCc6IHtcclxuICAgICAgICBtYjogJzBweCcsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgY29weXJpZ2h0OiB7XHJcbiAgICAgIGZvbnRTaXplOiBbJzE0cHgnLCBudWxsLCAxXSxcclxuICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgcDogWycyMHB4IDIwcHgnXSxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0ZDRkRGRScsXHJcbiAgICAgIGNvbG9yOiAndGV4dCcsXHJcbiAgICAgIGE6IHtcclxuICAgICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxyXG4gICAgICAgIGNvbG9yOiAnaW5oZXJpdCcsXHJcbiAgICAgICAgcGw6IDEsXHJcbiAgICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjI1cycsXHJcbiAgICAgICAgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgICBjb2xvcjogJ3ByaW1hcnknLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiIsImV4cG9ydCBkZWZhdWx0IFtcclxuICB7XHJcbiAgICBwYXRoOiAnaG9tZScsXHJcbiAgICBsYWJlbDogJ0hvbWUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJ2ZlYXR1cmUnLFxyXG4gICAgbGFiZWw6ICdGZWF0dXJlcycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAndGVzdGltb25pYWwnLFxyXG4gICAgbGFiZWw6ICdUZXN0aW1vbmlhbCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAncHJpY2luZycsXHJcbiAgICBsYWJlbDogJ1ByaWNpbmcnLFxyXG4gIH0sXHJcbl07XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3gsIENvbnRhaW5lciwgRmxleCwgQnV0dG9uIH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgeyBrZXlmcmFtZXMgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXNjcm9sbCc7XHJcbmltcG9ydCBMb2dvIGZyb20gJ2NvbXBvbmVudHMvbG9nbyc7XHJcbmltcG9ydCBMb2dvRGFyayBmcm9tICdhc3NldHMvbG9nby1kYXJrLnBuZyc7XHJcbmltcG9ydCBMb2dvV2hpdGUgZnJvbSAnYXNzZXRzL2xvZ28ucG5nJztcclxuaW1wb3J0IHsgRHJhd2VyUHJvdmlkZXIgfSBmcm9tICcuLi8uLi9jb250ZXh0cy9kcmF3ZXIvZHJhd2VyLnByb3ZpZGVyJztcclxuaW1wb3J0IE1vYmlsZURyYXdlciBmcm9tICcuL21vYmlsZS1kcmF3ZXInO1xyXG5pbXBvcnQgbWVudUl0ZW1zIGZyb20gJy4vaGVhZGVyLmRhdGEnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKHsgY2xhc3NOYW1lIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPERyYXdlclByb3ZpZGVyPlxyXG4gICAgICA8aGVhZGVyIHN4PXtzdHlsZXMuaGVhZGVyfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0gaWQ9XCJoZWFkZXJcIj5cclxuICAgICAgICA8Q29udGFpbmVyIHN4PXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgIDxMb2dvIHNyYz17Y2xhc3NOYW1lID09PSAnc3RpY2t5JyA/IExvZ29EYXJrIDogTG9nb1doaXRlfSAvPlxyXG4gICAgICAgICAgPGgxIHN0eWxlPXt7Zm9udFNpemU6JzFyZW0nfX0+VGhlIFdheSBvZiBTdWNjZXNzPC9oMT5cclxuICAgICAgICAgIDxGbGV4IGFzPVwibmF2XCIgc3g9e3N0eWxlcy5uYXZ9PlxyXG4gICAgICAgICAgICB7bWVudUl0ZW1zLm1hcCgoeyBwYXRoLCBsYWJlbCB9LCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgIGFjdGl2ZUNsYXNzPVwiYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgIHRvPXtwYXRofVxyXG4gICAgICAgICAgICAgICAgc3B5PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgc21vb3RoPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgb2Zmc2V0PXstNzB9XHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbj17NTAwfVxyXG4gICAgICAgICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtsYWJlbH1cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9GbGV4PlxyXG5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZG9uYXRlX19idG5cIlxyXG4gICAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkdldCBTdGFydGVkXCJcclxuICAgICAgICAgICAgb25DbGljaz17KCk9Pnt3aW5kb3cub3BlbihcImh0dHBzOi8vZm9ybXMuZ2xlL01tSDJOd01haEo2UGJnUTU3XCIpfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgR2V0IFN0YXJ0ZWRcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG5cclxuICAgICAgICAgIDxNb2JpbGVEcmF3ZXIgLz5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPC9oZWFkZXI+XHJcbiAgICA8L0RyYXdlclByb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IHBvc2l0aW9uQW5pbSA9IGtleWZyYW1lc2BcclxuICBmcm9tIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBoZWFkZXI6IHtcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgZm9udFdlaWdodDogJ25vcm1hbCcsXHJcbiAgICBweTogNCxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIHRvcDogMCxcclxuICAgIGxlZnQ6IDAsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXHJcbiAgICB0cmFuc2l0aW9uOiAnYWxsIDAuNXMgZWFzZScsXHJcbiAgICBhbmltYXRpb246IGAke3Bvc2l0aW9uQW5pbX0gMC40cyBlYXNlYCxcclxuICAgICcuZG9uYXRlX19idG4nOiB7XHJcbiAgICAgIGZsZXhTaHJpbms6IDAsXHJcbiAgICAgIG1yOiBbMTUsIDIwLCBudWxsLCBudWxsLCAwXSxcclxuICAgICAgbWw6IFsnYXV0bycsIG51bGwsIG51bGwsIG51bGwsIDBdLFxyXG4gICAgfSxcclxuICAgICcmLnN0aWNreSc6IHtcclxuICAgICAgcG9zaXRpb246ICdmaXhlZCcsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ2JhY2tncm91bmQnLFxyXG4gICAgICBjb2xvcjogJyMwMDAwMDAnLFxyXG4gICAgICBib3hTaGFkb3c6ICcwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjA2KScsXHJcbiAgICAgIHB5OiAzLFxyXG4gICAgICAnbmV2ID4gYSc6IHtcclxuICAgICAgICBjb2xvcjogJ3RleHQnLFxyXG4gICAgICB9LFxyXG4gICAgICAnLmRvbmF0ZV9fYnRuJzoge1xyXG4gICAgICAgIGJvcmRlckNvbG9yOiAncHJpbWFyeScsXHJcbiAgICAgICAgY29sb3I6ICdwcmltYXJ5JyxcclxuICAgICAgICAnJjpob3Zlcic6IHtcclxuICAgICAgICAgIGJveFNoYWRvdzogJ3JnYmEoMzEsIDYyLCAxMTgsIDAuNTcpIDBweCA5cHggMjBweCAtNXB4JyxcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3ByaW1hcnknLFxyXG4gICAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBjb250YWluZXI6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcclxuICB9LFxyXG4gIG5hdjoge1xyXG4gICAgbXg6ICdhdXRvJyxcclxuICAgIGRpc3BsYXk6ICdub25lJyxcclxuICAgICdAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpJzoge1xyXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgfSxcclxuICAgIGE6IHtcclxuICAgICAgZm9udFNpemU6ICcxNnB4JyxcclxuICAgICAgZm9udFdlaWdodDogJzQwMCcsXHJcbiAgICAgIHB4OiAyNSxcclxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgIGxpbmVIZWlnaHQ6ICcxLjInLFxyXG4gICAgICAnJi5hY3RpdmUnOiB7XHJcbiAgICAgICAgY29sb3I6ICdzZWNvbmRhcnknLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQm94IH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgeyBTY3JvbGxiYXJzIH0gZnJvbSAncmVhY3QtY3VzdG9tLXNjcm9sbGJhcnMnO1xyXG5pbXBvcnQgRHJhd2VyIGZyb20gJ2NvbXBvbmVudHMvZHJhd2VyJztcclxuaW1wb3J0IHsgRHJhd2VyQ29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHRzL2RyYXdlci9kcmF3ZXIuY29udGV4dCc7XHJcbmltcG9ydCB7IElvTWRDbG9zZSwgSW9NZE1lbnUgfSBmcm9tICdyZWFjdC1pY29ucy9pbyc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1zY3JvbGwnO1xyXG5pbXBvcnQge1xyXG4gIEZhRmFjZWJvb2tGLFxyXG4gIEZhVHdpdHRlcixcclxuICBGYUdpdGh1YkFsdCxcclxuICBGYURyaWJiYmxlLFxyXG59IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcclxuaW1wb3J0IG1lbnVJdGVtcyBmcm9tICcuL2hlYWRlci5kYXRhJztcclxuXHJcbmNvbnN0IHNvY2lhbCA9IFtcclxuICB7XHJcbiAgICBwYXRoOiAnLycsXHJcbiAgICBpY29uOiA8RmFGYWNlYm9va0YgLz4sXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAnLycsXHJcbiAgICBpY29uOiA8RmFUd2l0dGVyIC8+LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJy8nLFxyXG4gICAgaWNvbjogPEZhR2l0aHViQWx0IC8+LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJy8nLFxyXG4gICAgaWNvbjogPEZhRHJpYmJibGUgLz4sXHJcbiAgfSxcclxuXTtcclxuXHJcbmNvbnN0IE1vYmlsZURyYXdlciA9ICgpID0+IHtcclxuICBjb25zdCB7IHN0YXRlLCBkaXNwYXRjaCB9ID0gdXNlQ29udGV4dChEcmF3ZXJDb250ZXh0KTtcclxuXHJcbiAgLy8gVG9nZ2xlIGRyYXdlclxyXG4gIGNvbnN0IHRvZ2dsZUhhbmRsZXIgPSBSZWFjdC51c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6ICdUT0dHTEUnLFxyXG4gICAgfSk7XHJcbiAgfSwgW2Rpc3BhdGNoXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RHJhd2VyXHJcbiAgICAgIHdpZHRoPVwiMzIwcHhcIlxyXG4gICAgICBkcmF3ZXJIYW5kbGVyPXtcclxuICAgICAgICA8Qm94IHN4PXtzdHlsZXMuaGFuZGxlcn0+XHJcbiAgICAgICAgICA8SW9NZE1lbnUgc2l6ZT1cIjI2cHhcIiAvPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICB9XHJcbiAgICAgIG9wZW49e3N0YXRlLmlzT3Blbn1cclxuICAgICAgdG9nZ2xlSGFuZGxlcj17dG9nZ2xlSGFuZGxlcn1cclxuICAgICAgY2xvc2VCdXR0b249ezxJb01kQ2xvc2Ugc2l6ZT1cIjI0cHhcIiBjb2xvcj1cIiMwMDAwMDBcIiAvPn1cclxuICAgICAgZHJhd2VyU3R5bGU9e3N0eWxlcy5kcmF3ZXJ9XHJcbiAgICAgIGNsb3NlQnRuU3R5bGU9e3N0eWxlcy5jbG9zZX1cclxuICAgID5cclxuICAgICAgPFNjcm9sbGJhcnMgYXV0b0hpZGU+XHJcbiAgICAgICAgPEJveCBzeD17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgPEJveCBzeD17c3R5bGVzLm1lbnV9PlxyXG4gICAgICAgICAgICB7bWVudUl0ZW1zLm1hcCgoeyBwYXRoLCBsYWJlbCB9LCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgIGFjdGl2ZUNsYXNzPVwiYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgIHRvPXtwYXRofVxyXG4gICAgICAgICAgICAgICAgc3B5PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgc21vb3RoPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgb2Zmc2V0PXstNzB9XHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbj17NTAwfVxyXG4gICAgICAgICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtsYWJlbH1cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9Cb3g+XHJcblxyXG4gICAgICAgICAgPEJveCBzeD17c3R5bGVzLm1lbnVGb290ZXJ9PlxyXG4gICAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMuc29jaWFsfT5cclxuICAgICAgICAgICAgICB7c29jaWFsLm1hcCgoeyBwYXRoLCBpY29uIH0sIGkpID0+IChcclxuICAgICAgICAgICAgICAgIDxCb3ggYXM9XCJzcGFuXCIga2V5PXtpfSBzeD17c3R5bGVzLnNvY2lhbC5pY29ufT5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgdG89e3BhdGh9PntpY29ufTwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L1Njcm9sbGJhcnM+XHJcbiAgICA8L0RyYXdlcj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGhhbmRsZXI6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgZmxleFNocmluazogJzAnLFxyXG4gICAgd2lkdGg6ICcyNnB4JyxcclxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgJ0BtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCknOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdub25lJyxcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgZHJhd2VyOiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdkYXJrJyxcclxuICB9LFxyXG5cclxuICBjbG9zZToge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIHRvcDogJzI1cHgnLFxyXG4gICAgcmlnaHQ6ICczMHB4JyxcclxuICAgIHpJbmRleDogJzEnLFxyXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgfSxcclxuXHJcbiAgY29udGVudDoge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICBwdDogJzEwMHB4JyxcclxuICAgIHBiOiAnNDBweCcsXHJcbiAgICBweDogJzMwcHgnLFxyXG4gIH0sXHJcblxyXG4gIG1lbnU6IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIGE6IHtcclxuICAgICAgZm9udFNpemU6ICcxNnB4JyxcclxuICAgICAgZm9udFdlaWdodDogJzUwMCcsXHJcbiAgICAgIGNvbG9yOiAndGV4dF93aGl0ZScsXHJcbiAgICAgIHB5OiAnMTVweCcsXHJcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICBib3JkZXJCb3R0b206ICcxcHggc29saWQgI2U4ZTVlNScsXHJcbiAgICAgIHRyYW5zaXRpb246ICdhbGwgMC4yNXMnLFxyXG4gICAgICAnJjpob3Zlcic6IHtcclxuICAgICAgICBjb2xvcjogJ3NlY29uZGFyeScsXHJcbiAgICAgIH0sXHJcbiAgICAgICcmLmFjdGl2ZSc6IHtcclxuICAgICAgICBjb2xvcjogJ3NlY29uZGFyeScsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIG1lbnVGb290ZXI6IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgbXQ6ICdhdXRvJyxcclxuICB9LFxyXG5cclxuICBzb2NpYWw6IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuXHJcbiAgICBpY29uOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgY29sb3I6ICd0ZXh0JyxcclxuICAgICAgZm9udFNpemU6IDE0LFxyXG4gICAgICBtcjogJzE1cHgnLFxyXG4gICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuMjVzJyxcclxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgICc6bGFzdC1jaGlsZCc6IHtcclxuICAgICAgICBtcjogJzAnLFxyXG4gICAgICB9LFxyXG4gICAgICAnJjpob3Zlcic6IHtcclxuICAgICAgICBjb2xvcjogJ3NlY29uZGFyeScsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIGJ1dHRvbjoge1xyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBmb250U2l6ZTogJzE0cHgnLFxyXG4gICAgZnc6ICc3MDAnLFxyXG4gICAgaGVpZ2h0OiAnNDVweCcsXHJcbiAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxyXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICBweTogJzAnLFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb2JpbGVEcmF3ZXI7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEltYWdlIGFzIEltZyB9IGZyb20gJ3RoZW1lLXVpJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEltYWdlKHsgc3JjLCAuLi5yZXN0IH0pIHtcclxuICByZXR1cm4gPEltZyBzcmM9e3NyY30gey4uLnJlc3R9IC8+O1xyXG59XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3ggfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFN0aWNreSBmcm9tICdyZWFjdC1zdGlja3lub2RlJztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuL2hlYWRlci9oZWFkZXInO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vZm9vdGVyL2Zvb3Rlcic7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dCh7IGNoaWxkcmVuIH0pIHtcclxuICBjb25zdCBbaXNTdGlja3ksIHNldElzU3RpY2t5XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBoYW5kbGVTdGF0ZUNoYW5nZSA9IChzdGF0dXMpID0+IHtcclxuICAgIGlmIChzdGF0dXMuc3RhdHVzID09PSBTdGlja3kuU1RBVFVTX0ZJWEVEKSB7XHJcbiAgICAgIHNldElzU3RpY2t5KHRydWUpO1xyXG4gICAgfSBlbHNlIGlmIChzdGF0dXMuc3RhdHVzID09PSBTdGlja3kuU1RBVFVTX09SSUdJTkFMKSB7XHJcbiAgICAgIHNldElzU3RpY2t5KGZhbHNlKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgIDxTdGlja3kgaW5uZXJaPXsxMDAxfSB0b3A9ezB9IG9uU3RhdGVDaGFuZ2U9e2hhbmRsZVN0YXRlQ2hhbmdlfT5cclxuICAgICAgICA8SGVhZGVyIGNsYXNzTmFtZT17YCR7aXNTdGlja3kgPyAnc3RpY2t5JyA6ICd1blN0aWNreSd9YH0gLz5cclxuICAgICAgPC9TdGlja3k+XHJcbiAgICAgIDxtYWluXHJcbiAgICAgICAgc3g9e3tcclxuICAgICAgICAgIHZhcmlhbnQ6ICdsYXlvdXQubWFpbicsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9tYWluPlxyXG4gICAgICA8Rm9vdGVyIC8+XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICk7XHJcbn1cclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCwgTmF2TGluayBhcyBNZW51TGluaywgTGluayBhcyBBIH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgTmV4dExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuZXhwb3J0IGZ1bmN0aW9uIE5hdkxpbmsoeyBwYXRoLCBsYWJlbCwgY2hpbGRyZW4sIC4uLnJlc3QgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TmV4dExpbmsgaHJlZj17cGF0aH0+XHJcbiAgICAgIDxNZW51TGluayB7Li4ucmVzdH0+e2NoaWxkcmVuID8gY2hpbGRyZW4gOiBsYWJlbH08L01lbnVMaW5rPlxyXG4gICAgPC9OZXh0TGluaz5cclxuICApO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBMaW5rKHsgcGF0aCwgbGFiZWwsIGNoaWxkcmVuLCAuLi5yZXN0IH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEEgey4uLnJlc3R9IGhyZWY9e3BhdGh9PlxyXG4gICAgICB7Y2hpbGRyZW4gPyBjaGlsZHJlbiA6IGxhYmVsfVxyXG4gICAgPC9BPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRmxleCwgQm94LCBJY29uQnV0dG9uIH0gZnJvbSAndGhlbWUtdWknO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGlzdCh7IGl0ZW1zID0gW10sIHBhcmVudFN0eWxlLCBjaGlsZFN0eWxlIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveFxyXG4gICAgICBhcz1cInVsXCJcclxuICAgICAgc3g9e3tcclxuICAgICAgICBsaXN0U3R5bGVUeXBlOiAnbm9uZScsXHJcbiAgICAgICAgbWFyZ2luOiAwLFxyXG4gICAgICAgIHBhZGRpbmc6IDAsXHJcbiAgICAgICAgLi4ucGFyZW50U3R5bGUsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIHtpdGVtcy5tYXAoKHsgaWNvbiwgdGV4dCwgaXNBdmFpbGFibGUgfSwgaSkgPT4gKFxyXG4gICAgICAgIDxGbGV4XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2lzQXZhaWxhYmxlID8gJ29wZW4nIDogJ2Nsb3NlZCd9XHJcbiAgICAgICAgICBhcz1cImxpXCJcclxuICAgICAgICAgIHN4PXt7IC4uLmNoaWxkU3R5bGUgfX1cclxuICAgICAgICAgIGtleT17aX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8SWNvbkJ1dHRvbiBzeD17c3R5bGVzLmxpc3RJY29ufSBhcmlhLWxhYmVsPVwibGlzdCBpY29uXCI+XHJcbiAgICAgICAgICAgIHtpY29ufVxyXG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAge3RleHR9XHJcbiAgICAgICAgPC9GbGV4PlxyXG4gICAgICApKX1cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn1cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGxpc3RJY29uOiB7XHJcbiAgICB3aWR0aDogWzI1LCAnMzVweCddLFxyXG4gICAgaGVpZ2h0OiAnYXV0bycsXHJcbiAgICBjb2xvcjogJ3NlY29uZGFyeScsXHJcbiAgICBwYWRkaW5nOiAwLFxyXG4gICAgZm9udFNpemU6IFsyLCA1XSxcclxuICAgIG1hcmdpbkxlZnQ6ICctMXB4JyxcclxuICAgIGZsZXhTaHJpbms6IDAsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtc3RhcnQnLFxyXG4gICAgbWFyZ2luVG9wOiBbMSwgJzJweCddLFxyXG4gIH0sXHJcbn07XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3gsIEltYWdlIH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnY29tcG9uZW50cy9saW5rJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ28oeyBzcmMsIC4uLnJlc3QgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGlua1xyXG4gICAgICBwYXRoPVwiL1wiXHJcbiAgICAgIHN4PXt7XHJcbiAgICAgICAgdmFyaWFudDogJ2xpbmtzLmxvZ28nLFxyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICAgICBtcjogMTUsXHJcbiAgICAgIH19XHJcbiAgICAgIHsuLi5yZXN0fVxyXG4gICAgPlxyXG4gICAgICA8SW1hZ2Ugc3JjPXtzcmN9IGFsdD1cInN0YXJ0dXAgbGFuZGluZyBsb2dvXCIgc3R5bGU9e3ttYXhXaWR0aDonNHJlbSd9fSAvPlxyXG4gICAgXHJcbiAgICA8L0xpbms+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyBCb3gsIENhcmQsIFRleHQsIEZsZXgsIEhlYWRpbmcsIEJ1dHRvbiB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpc3QgZnJvbSAnLi9saXN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByaWNlQ2FyZCh7XHJcbiAgZGF0YToge1xyXG4gICAgaGVhZGVyLFxyXG4gICAgbmFtZSxcclxuICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgcHJpY2VXaXRoVW5pdCxcclxuICAgIGJ1dHRvblRleHQgPSAnU3RhcnQgRnJlZSBUcmlhbCcsXHJcbiAgICBwb2ludHMsXHJcbiAgfSxcclxufSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FyZCBjbGFzc05hbWU9e2hlYWRlciA/ICdhY3RpdmUnIDogbnVsbH0gc3g9e3N0eWxlcy5wcmljaW5nQm94fT5cclxuICAgICAge2hlYWRlciAmJiA8VGV4dCBzeD17c3R5bGVzLmhlYWRlcn0+e2hlYWRlcn08L1RleHQ+fVxyXG4gICAgICA8Qm94PlxyXG4gICAgICAgIDxGbGV4IHN4PXtzdHlsZXMucHJpY2luZ0hlYWRlcn0+XHJcbiAgICAgICAgICA8Qm94PlxyXG4gICAgICAgICAgICA8SGVhZGluZyBjbGFzc05hbWU9XCJwYWNrYWdlX19uYW1lXCIgc3g9e3N0eWxlcy5oZWFkaW5nfT5cclxuICAgICAgICAgICAgICB7bmFtZX1cclxuICAgICAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgIGFzPVwicFwiXHJcbiAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IGhlYWRlciA/IDEgOiAwLjcsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogaGVhZGVyID8gJ3RleHQnIDogJ3doaXRlJyxcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiBbMSwgMl0sXHJcbiAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiAxLjMsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtkZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICB7aGVhZGVyICYmIChcclxuICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPVwicGFja2FnZV9fcHJpY2VcIiBzeD17c3R5bGVzLnByaWNlfT5cclxuICAgICAgICAgICAgICA8c3Bhbj5TdGFydGluZyBmcm9tPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJpY2VcIj5cclxuICAgICAgICAgICAgICAgIHtwcmljZVdpdGhVbml0fVxyXG4gICAgICAgICAgICAgICAgPHN1Yj5tbzwvc3ViPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvRmxleD5cclxuICAgICAgICA8TGlzdCBpdGVtcz17cG9pbnRzfSBjaGlsZFN0eWxlPXtzdHlsZXMubGlzdEl0ZW19IC8+XHJcbiAgICAgICAgPEJveFxyXG4gICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgbXQ6IFsnNDBweCcsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICc3MHB4J10sXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgdmFyaWFudD17aGVhZGVyID8gJ3ByaW1hcnknIDogJ3doaXRlQnV0dG9uJ31cclxuICAgICAgICAgICAgYXJpYS1sYWJlbD17YnV0dG9uVGV4dH0gb25DbGljaz17KCk9Pnt3aW5kb3cub3BlbihcImh0dHBzOi8vZm9ybXMuZ2xlL01tSDJOd01haEo2UGJnUTU3XCIpfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2J1dHRvblRleHR9XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L0NhcmQ+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIHByaWNpbmdCb3g6IHtcclxuICAgIGZsZXg6IFtcclxuICAgICAgJzAgMSAxMDAlJyxcclxuICAgICAgbnVsbCxcclxuICAgICAgbnVsbCxcclxuICAgICAgJzAgMSA1MCUnLFxyXG4gICAgICAnMCAxIDQ1JScsXHJcbiAgICAgICcwIDEgNDAlJyxcclxuICAgICAgJzAgMSAzOC41JScsXHJcbiAgICBdLFxyXG4gICAgYmFja2dyb3VuZDogJyMyRjUzOTInLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAxMCxcclxuICAgIG1sOiBbMCwgbnVsbCwgbnVsbCwgNV0sXHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIG10OiBbJzQwcHgnLCBudWxsLCBudWxsLCAwXSxcclxuICAgIHA6IFtcclxuICAgICAgJzUwcHggMTVweCA1MHB4JyxcclxuICAgICAgbnVsbCxcclxuICAgICAgJzYycHggMjVweCA1MHB4IDI1cHgnLFxyXG4gICAgICBudWxsLFxyXG4gICAgICAnNjJweCA3MHB4IDUwcHggNDBweCcsXHJcbiAgICBdLFxyXG4gICAgJ0BtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQyMHB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpJzoge1xyXG4gICAgICBtYXhXaWR0aDogJzM4MHB4JyxcclxuICAgIH0sXHJcbiAgICAnJjpmaXJzdC1vZi10eXBlJzoge1xyXG4gICAgICBtbDogMCxcclxuICAgICAgbXQ6IDAsXHJcbiAgICB9LFxyXG4gICAgJyYuYWN0aXZlJzoge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICcucGFja2FnZV9fbmFtZSc6IHtcclxuICAgICAgICBjb2xvcjogJ2hlYWRpbmdfc2Vjb25kYXJ5JyxcclxuICAgICAgfSxcclxuICAgICAgJy5wYWNrYWdlX19wcmljZSA+IHNwYW4nOiB7XHJcbiAgICAgICAgY29sb3I6ICd0ZXh0JyxcclxuICAgICAgfSxcclxuICAgICAgJy5vcGVuJzoge1xyXG4gICAgICAgIGNvbG9yOiAndGV4dCcsXHJcbiAgICAgIH0sXHJcbiAgICAgICcuY2xvc2VkJzoge1xyXG4gICAgICAgIGNvbG9yOiAndGV4dCcsXHJcbiAgICAgICAgb3BhY2l0eTogMC42LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGhlYWRlcjoge1xyXG4gICAgaGVpZ2h0OiBbJzI4cHgnLCBudWxsLCBudWxsLCBudWxsLCAnMzJweCddLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnI0VGOUU0OCcsXHJcbiAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxyXG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gICAgZm9udFNpemU6ICcxNHB4JyxcclxuICAgIGxpbmVIZWlnaHQ6ICcxOHB4JyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgY29sb3I6ICcjRkZGRkZGJyxcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgdG9wOiBbMywgbnVsbCwgNF0sXHJcbiAgICBsZXR0ZXJTcGFjaW5nOiAnLS4xNHB4JyxcclxuICAgIHB4OiAnMTBweCcsXHJcbiAgfSxcclxuXHJcbiAgaGVhZGluZzoge1xyXG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gICAgZm9udFNpemU6IFs0LCBudWxsLCBudWxsLCBudWxsLCA1XSxcclxuICAgIGxpbmVIZWlnaHQ6ICcyM3B4JyxcclxuICAgIGNvbG9yOiAnI2ZmZmZmZicsXHJcbiAgICBtYXJnaW5Cb3R0b206IFsxLCBudWxsLCAnMTJweCddLFxyXG4gIH0sXHJcbiAgcHJpY2luZ0hlYWRlcjoge1xyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcclxuICAgIGFsaWduSXRlbXM6ICdmbGV4LXN0YXJ0JyxcclxuICAgIG1iOiBbJzM1cHgnLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAnNTBweCddLFxyXG4gIH0sXHJcbiAgcHJpY2U6IHtcclxuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICAgIGZvbnRTaXplOiBbNCwgbnVsbCwgNSwgbnVsbCwgJzI2cHgnXSxcclxuICAgIGxpbmVIZWlnaHQ6IDEsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBsZXR0ZXJTcGFjaW5nOiAnLTAuNXB4JyxcclxuICAgIGNvbG9yOiAnIzBGMjEzNycsXHJcbiAgICBtYXJnaW5Cb3R0b206IDAsXHJcbiAgICBmbGV4V3JhcDogJ3dyYXAnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICB0ZXh0QWxpZ246ICdyaWdodCcsXHJcbiAgICBtdDogWyctM3B4JywgbnVsbCwgJzJweCddLFxyXG4gICAgJz4gc3Bhbic6IHtcclxuICAgICAgZm9udFdlaWdodDogJ2JvZHknLFxyXG4gICAgICBmb250U2l6ZTogWzEsIDJdLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAxLjI1LFxyXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgICBtYXJnaW5Cb3R0b206ICcxMHB4JyxcclxuICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICB9LFxyXG4gICAgJz4gLnByaWNlJzoge1xyXG4gICAgICBtYXJnaW5Cb3R0b206IDAsXHJcbiAgICAgIGNvbG9yOiAnc2Vjb25kYXJ5JyxcclxuICAgICAgJz4gc3ViJzoge1xyXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICAgIGJvdHRvbTogJzZweCcsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbGlzdEl0ZW06IHtcclxuICAgIGZvbnRTdHlsZTogJ25vcm1hbCcsXHJcbiAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcclxuICAgIGZvbnRTaXplOiBbMSwgbnVsbCwgbnVsbCwgbnVsbCwgMl0sXHJcbiAgICBsaW5lSGVpZ2h0OiBbMS43LCBudWxsLCAxLjY1XSxcclxuICAgIG1hcmdpbkJvdHRvbTogWzMsICcyMnB4J10sXHJcbiAgICBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCcsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIHByOiBbMiwgbnVsbCwgbnVsbCwgbnVsbCwgMCwgNl0sXHJcbiAgICAnJi5jbG9zZWQnOiB7XHJcbiAgICAgIG9wYWNpdHk6IDAuNTUsXHJcbiAgICAgIGJ1dHRvbjoge1xyXG4gICAgICAgIGNvbG9yOiAnIzc4OEZCNScsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEZhU3RhciB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcclxuXHJcbmNvbnN0IFJhdGluZyA9ICh7IHJhdGluZyB9KSA9PiB7XHJcbiAgY29uc3QgdG90YWxSYXRpbmcgPSBbXTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xyXG4gICAgaWYgKGkgPCByYXRpbmcpIHtcclxuICAgICAgdG90YWxSYXRpbmcucHVzaChcclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwic3RhclwiIGtleT17YHJhdGluZy1rZXkke2l9YH0+XHJcbiAgICAgICAgICA8RmFTdGFyIC8+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRvdGFsUmF0aW5nLnB1c2goXHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cInN0YXItb1wiIGtleT17YHJhdGluZy1rZXkke2l9YH0+XHJcbiAgICAgICAgICA8RmFTdGFyIC8+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGluZ1wiPlxyXG4gICAgICA8dWw+e3RvdGFsUmF0aW5nfTwvdWw+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmF0aW5nO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCb3gsIFRleHQsIEhlYWRpbmcgfSBmcm9tICd0aGVtZS11aSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWN0aW9uSGVhZGVyKHsgdGl0bGUsIHNsb2dhbiwgaXNXaGl0ZSB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggc3g9e3sgdmFyaWFudDogJ3NlY3Rpb25IZWFkZXInIH19PlxyXG4gICAgICA8VGV4dFxyXG4gICAgICAgIGFzPVwicFwiXHJcbiAgICAgICAgc3g9e3tcclxuICAgICAgICAgIHZhcmlhbnQ6ICdzZWN0aW9uSGVhZGVyLnN1YlRpdGxlJyxcclxuICAgICAgICAgIGNvbG9yOiBpc1doaXRlID8gJ3doaXRlJyA6ICdoZWFkaW5nJyxcclxuICAgICAgICAgIG9wYWNpdHk6IGlzV2hpdGUgPyAwLjcgOiAxLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICB7c2xvZ2FufVxyXG4gICAgICA8L1RleHQ+XHJcbiAgICAgIDxIZWFkaW5nXHJcbiAgICAgICAgYXM9XCJoMlwiXHJcbiAgICAgICAgc3g9e3tcclxuICAgICAgICAgIHZhcmlhbnQ6ICdzZWN0aW9uSGVhZGVyLnRpdGxlJyxcclxuICAgICAgICAgIGNvbG9yOiBpc1doaXRlID8gJ3doaXRlJyA6ICdoZWFkaW5nX3NlY29uZGFyeScsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIHt0aXRsZX1cclxuICAgICAgPC9IZWFkaW5nPlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU0VPKHtcclxuICBkZXNjcmlwdGlvbiA9ICdzdGFydHVwIGFwcHMgbGFuZGluZyBwYWdlJyxcclxuICBhdXRob3IgPSAnUmVkUSwgSW5jJyxcclxuICBtZXRhLFxyXG4gIHRpdGxlID0gJ3N0YXJ0dXAgbGFuZGluZyB0aXRsZScsXHJcbn0pIHtcclxuICBjb25zdCBtZXRhRGF0YSA9IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogYGRlc2NyaXB0aW9uYCxcclxuICAgICAgY29udGVudDogZGVzY3JpcHRpb24sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwcm9wZXJ0eTogYG9nOnRpdGxlYCxcclxuICAgICAgY29udGVudDogdGl0bGUsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwcm9wZXJ0eTogYG9nOmRlc2NyaXB0aW9uYCxcclxuICAgICAgY29udGVudDogZGVzY3JpcHRpb24sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwcm9wZXJ0eTogYG9nOnR5cGVgLFxyXG4gICAgICBjb250ZW50OiBgd2Vic2l0ZWAsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBgdHdpdHRlcjpjYXJkYCxcclxuICAgICAgY29udGVudDogYHN1bW1hcnlgLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogYHR3aXR0ZXI6Y3JlYXRvcmAsXHJcbiAgICAgIGNvbnRlbnQ6IGF1dGhvcixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IGB0d2l0dGVyOnRpdGxlYCxcclxuICAgICAgY29udGVudDogdGl0bGUsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBgdHdpdHRlcjpkZXNjcmlwdGlvbmAsXHJcbiAgICAgIGNvbnRlbnQ6IGRlc2NyaXB0aW9uLFxyXG4gICAgfSxcclxuICBdLmNvbmNhdChtZXRhKTtcclxuICByZXR1cm4gKFxyXG4gICAgPEhlYWQ+XHJcbiAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cclxuICAgICAge21ldGFEYXRhLm1hcCgoeyBuYW1lLCBjb250ZW50IH0sIGkpID0+IChcclxuICAgICAgICA8bWV0YSBrZXk9e2l9IG5hbWU9e25hbWV9IGNvbnRlbnQ9e2NvbnRlbnR9IC8+XHJcbiAgICAgICkpfVxyXG4gICAgPC9IZWFkPlxyXG4gICk7XHJcbn1cclxuXHJcblNFTy5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgbGFuZzogYGVuYCxcclxuICBtZXRhOiBbXSxcclxufTtcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCwgQm94LCBIZWFkaW5nLCBUZXh0LCBCdXR0b24sIExpbmsgfSBmcm9tICd0aGVtZS11aSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZXh0RmVhdHVyZSh7XHJcbiAgc3ViVGl0bGUsXHJcbiAgdGl0bGUsXHJcbiAgZGVzY3JpcHRpb24sXHJcbiAgYnRuTmFtZSxcclxuICBidG5VUkwgPSAnIycsXHJcbn0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBzeD17c3R5bGVzLmNhcmR9PlxyXG4gICAgICA8Qm94IHN4PXtzdHlsZXMud3JhcHBlcn0+XHJcbiAgICAgICAgPFRleHQgYXM9XCJwXCIgc3g9e3N0eWxlcy53cmFwcGVyLnN1YlRpdGxlfT5cclxuICAgICAgICAgIHtzdWJUaXRsZX1cclxuICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgPEhlYWRpbmcgYXM9XCJoMlwiIHN4PXtzdHlsZXMud3JhcHBlci50aXRsZX0+XHJcbiAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICA8L0JveD5cclxuXHJcbiAgICAgIHtkZXNjcmlwdGlvbiAmJiAoXHJcbiAgICAgICAgPFRleHQgYXM9XCJwXCIgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIiBzeD17c3R5bGVzLmRlc2NyaXB0aW9ufT5cclxuICAgICAgICAgIHtkZXNjcmlwdGlvbn1cclxuICAgICAgICA8L1RleHQ+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICB7YnRuTmFtZSAmJiAoXHJcbiAgICAgICAgPExpbmsgaHJlZj17YnRuVVJMfSB2YXJpYW50PVwiZGVmYXVsdFwiPlxyXG4gICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIGFyaWEtbGFiZWw9e2J0bk5hbWV9IG9uQ2xpY2s9eygpPT57d2luZG93Lm9wZW4oXCJodHRwczovL2Zvcm1zLmdsZS9NbUgyTndNYWhKNlBiZ1E1N1wiKX19PlxyXG4gICAgICAgICAgICB7YnRuTmFtZX1cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgKX1cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBjYXJkOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIGZsZXhTaHJpbms6IDAsXHJcbiAgICBhOiB7XHJcbiAgICAgIG06IFsnMCBhdXRvJywgbnVsbCwgbnVsbCwgMF0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgd3JhcHBlcjoge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgbXQ6ICctNXB4JyxcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgIGZvbnRTaXplOiBbJzI0cHgnLCBudWxsLCAnMjhweCcsICczMnB4JywgJzM2cHgnLCAnNDJweCcsIG51bGwsICc0NnB4J10sXHJcbiAgICAgIGNvbG9yOiAnaGVhZGluZ19zZWNvbmRhcnknLFxyXG4gICAgICBsaW5lSGVpZ2h0OiBbMS4zNSwgbnVsbCwgbnVsbCwgMS4zLCAxLjJdLFxyXG4gICAgICBmb250V2VpZ2h0OiAnNzAwJyxcclxuICAgICAgbGV0dGVyU3BhY2luZzogJy0uNXB4JyxcclxuICAgICAgbWI6IDUsXHJcbiAgICB9LFxyXG5cclxuICAgIHN1YlRpdGxlOiB7XHJcbiAgICAgIGZvbnRTaXplOiBbMCwgbnVsbCwgJzE0cHgnXSxcclxuICAgICAgY29sb3I6ICdoZWFkaW5nJyxcclxuICAgICAgbGV0dGVyU3BhY2luZzogJzJweCcsXHJcbiAgICAgIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxyXG4gICAgICBmb250V2VpZ2h0OiAnNzAwJyxcclxuICAgICAgbWI6IFsyLCBudWxsLCBudWxsLCBudWxsLCAzXSxcclxuICAgICAgbGluZUhlaWdodDogMS41LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGRlc2NyaXB0aW9uOiB7XHJcbiAgICBmb250U2l6ZTogWycxNXB4JywgMiwgbnVsbCwgbnVsbCwgbnVsbCwgJzE3cHgnLCBudWxsLCAzXSxcclxuICAgIGZvbnRXZWlnaHQ6IDQwMCxcclxuICAgIGxpbmVIZWlnaHQ6IFsxLjg1LCBudWxsLCBudWxsLCAyLCBudWxsLCAnMi4yJ10sXHJcbiAgICBjb2xvcjogJ3RleHRfc2Vjb25kYXJ5JyxcclxuICAgIG1iOiAnMzBweCcsXHJcbiAgfSxcclxufTtcclxuIiwiaW1wb3J0IHsgdXNlQ3JlYXRlQ29udGV4dCB9IGZyb20gJy4uL2NyZWF0ZS1jb250ZXh0JztcclxuaW1wb3J0IHsgcmVkdWNlciwgaW5pdGlhbFN0YXRlIH0gZnJvbSAnLi9hcHAucmVkdWNlcic7XHJcblxyXG5jb25zdCBbc3RhdGUsIHVzZURpc3BhdGNoLCBwcm92aWRlcl0gPSB1c2VDcmVhdGVDb250ZXh0KGluaXRpYWxTdGF0ZSwgcmVkdWNlcik7XHJcbmV4cG9ydCBjb25zdCB1c2VTdGlja3lTdGF0ZSA9IHN0YXRlO1xyXG5leHBvcnQgY29uc3QgdXNlU3RpY2t5RGlzcGF0Y2ggPSB1c2VEaXNwYXRjaDtcclxuZXhwb3J0IGNvbnN0IFN0aWNreVByb3ZpZGVyID0gcHJvdmlkZXI7XHJcbiIsImV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgaXNTdGlja3k6IGZhbHNlLFxyXG4gIGlzU2lkZWJhclN0aWNreTogdHJ1ZSxcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlLCB7IHR5cGUgfSkge1xyXG4gIHN3aXRjaCAodHlwZSkge1xyXG4gICAgY2FzZSAnU0VUX1NUSUNLWSc6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaXNTdGlja3k6IHRydWUsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlICdSRU1PVkVfU1RJQ0tZJzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBpc1N0aWNreTogZmFsc2UsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlICdTRVRfU0lERUJBUl9TVElDS1knOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGlzU2lkZWJhclN0aWNreTogdHJ1ZSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgJ1JFTU9WRV9TSURFQkFSX1NUSUNLWSc6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaXNTaWRlYmFyU3RpY2t5OiBmYWxzZSxcclxuICAgICAgfTtcclxuICAgIGRlZmF1bHQ6IHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbnN1cHBvcnRlZCBhY3Rpb24gdHlwZTogJHt0eXBlfWApO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VDcmVhdGVDb250ZXh0KGRlZmF1bHRWYWx1ZSwgcmVkdWNlcikge1xyXG4gIGNvbnN0IGRlZmF1bHREaXNwYXRjaCA9ICgpID0+IGRlZmF1bHRWYWx1ZTtcclxuICBjb25zdCBzdGF0ZUN0eCA9IGNyZWF0ZUNvbnRleHQoZGVmYXVsdFZhbHVlKTtcclxuICBjb25zdCBkaXNwYXRjaEN0eCA9IGNyZWF0ZUNvbnRleHQoZGVmYXVsdERpc3BhdGNoKTtcclxuXHJcbiAgZnVuY3Rpb24gdXNlU3RhdGVDdHgocHJvcGVydHkpIHtcclxuICAgIGNvbnN0IHN0YXRlID0gdXNlQ29udGV4dChzdGF0ZUN0eCk7XHJcbiAgICByZXR1cm4gc3RhdGVbcHJvcGVydHldOyAvLyBvbmx5IG9uZSBkZXB0aCBzZWxlY3RvciBmb3IgY29tcGFyaXNvblxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gdXNlRGlzcGF0Y2hDdHgoKSB7XHJcbiAgICByZXR1cm4gdXNlQ29udGV4dChkaXNwYXRjaEN0eCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBQcm92aWRlcih7IGNoaWxkcmVuIH0pIHtcclxuICAgIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gUmVhY3QudXNlUmVkdWNlcihyZWR1Y2VyLCBkZWZhdWx0VmFsdWUpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpc3BhdGNoQ3R4LlByb3ZpZGVyIHZhbHVlPXtkaXNwYXRjaH0+XHJcbiAgICAgICAgPHN0YXRlQ3R4LlByb3ZpZGVyIHZhbHVlPXtzdGF0ZX0+e2NoaWxkcmVufTwvc3RhdGVDdHguUHJvdmlkZXI+XHJcbiAgICAgIDwvZGlzcGF0Y2hDdHguUHJvdmlkZXI+XHJcbiAgICApO1xyXG4gIH1cclxuICByZXR1cm4gW3VzZVN0YXRlQ3R4LCB1c2VEaXNwYXRjaEN0eCwgUHJvdmlkZXJdO1xyXG59XHJcbiIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgY29uc3QgRHJhd2VyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30pO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRHJhd2VyQ29udGV4dCB9IGZyb20gJy4vZHJhd2VyLmNvbnRleHQnO1xyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgaXNPcGVuOiBmYWxzZSxcclxufTtcclxuXHJcbmZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUsIGFjdGlvbikge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgJ1RPR0dMRSc6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaXNPcGVuOiAhc3RhdGUuaXNPcGVuLFxyXG4gICAgICB9O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufVxyXG5leHBvcnQgY29uc3QgRHJhd2VyUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxTdGF0ZSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxEcmF3ZXJDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHN0YXRlLCBkaXNwYXRjaCB9fT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9EcmF3ZXJDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCB7IFN0aWNreVByb3ZpZGVyIH0gZnJvbSAnY29udGV4dHMvYXBwL2FwcC5wcm92aWRlcic7XHJcbmltcG9ydCB0aGVtZSBmcm9tICd0aGVtZSc7XHJcbmltcG9ydCBTRU8gZnJvbSAnY29tcG9uZW50cy9zZW8nO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJ2NvbXBvbmVudHMvbGF5b3V0JztcclxuaW1wb3J0IEJhbm5lciBmcm9tICdzZWN0aW9ucy9iYW5uZXInO1xyXG5pbXBvcnQgS2V5RmVhdHVyZSBmcm9tICdzZWN0aW9ucy9rZXktZmVhdHVyZSc7XHJcbmltcG9ydCBDb3JlRmVhdHVyZSBmcm9tICdzZWN0aW9ucy9jb3JlLWZlYXR1cmUnO1xyXG5pbXBvcnQgRmVhdHVyZSBmcm9tICdzZWN0aW9ucy9mZWF0dXJlJztcclxuaW1wb3J0IFBhcnRuZXJTZWN0aW9uIGZyb20gJ3NlY3Rpb25zL3BhcnRuZXInO1xyXG5pbXBvcnQgV29ya0Zsb3cgZnJvbSAnc2VjdGlvbnMvd29ya2Zsb3cnO1xyXG5pbXBvcnQgVGVzdGltb25pYWxDYXJkIGZyb20gJ3NlY3Rpb25zL3Rlc3RpbW9uaWFsJztcclxuaW1wb3J0IFNlY3VyZVBheW1lbnQgZnJvbSAnc2VjdGlvbnMvc2VjdXJlLXBheW1lbnQnO1xyXG5pbXBvcnQgUGFja2FnZSBmcm9tICdzZWN0aW9ucy9wYWNrYWdlJztcclxuaW1wb3J0IEZhcSBmcm9tICdzZWN0aW9ucy9mYXEnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXhQYWdlKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxyXG4gICAgICA8U3RpY2t5UHJvdmlkZXI+XHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgIDxTRU8gdGl0bGU9XCJTdGFydHVwIExhbmRpbmcgMDA0XCIgLz5cclxuICAgICAgICAgIDxCYW5uZXIgLz5cclxuICAgICAgICAgIDxLZXlGZWF0dXJlIC8+XHJcbiAgICAgICAgICA8Q29yZUZlYXR1cmUgLz5cclxuICAgICAgICAgIDxGZWF0dXJlIC8+XHJcbiAgICAgICAgICA8UGFydG5lclNlY3Rpb24gLz5cclxuICAgICAgICAgIDxXb3JrRmxvdyAvPlxyXG4gICAgICAgICAgPFRlc3RpbW9uaWFsQ2FyZCAvPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA8UGFja2FnZSAvPlxyXG4gICAgICAgICBcclxuICAgICAgICA8L0xheW91dD5cclxuICAgICAgPC9TdGlja3lQcm92aWRlcj5cclxuICAgIDwvVGhlbWVQcm92aWRlcj5cclxuICApO1xyXG59XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3ggfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgRmxleCwgQm94LCBIZWFkaW5nLCBUZXh0LCBJbWFnZSwgQnV0dG9uIH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBNb2RhbFZpZGVvIGZyb20gJ3JlYWN0LW1vZGFsLXZpZGVvJztcclxuaW1wb3J0IHsgRmFQbGF5Q2lyY2xlIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xyXG5pbXBvcnQgQmFubmVyQkcgZnJvbSAnYXNzZXRzL2Jhbm5lckJnLnBuZyc7XHJcbmltcG9ydCBCYW5uZXJUaHVtYiBmcm9tICdhc3NldHMvZ29hbC5wbmcnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmFubmVyKCkge1xyXG4gIGNvbnN0IFt2aWRlb09wZW4sIHNldFZpZGVvT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0VmlkZW9PcGVuKHRydWUpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIHN4PXtzdHlsZXMuYmFubmVyfSBpZD1cImhvbWVcIj5cclxuICAgICAgPENvbnRhaW5lciBzeD17c3R5bGVzLmJhbm5lci5jb250YWluZXJ9PlxyXG4gICAgICAgIDxCb3ggc3g9e3N0eWxlcy5iYW5uZXIuY29udGVudEJveH0+XHJcbiAgICAgICAgICA8SGVhZGluZyBhcz1cImgxXCIgdmFyaWFudD1cImhlcm9QcmltYXJ5XCI+XHJcbiAgICAgICAgICBEaXNjb3ZlciBSZWFsIEtub3dsZWRnZSB3aXRoIGV4cGVydHNcclxuICAgICAgICAgIDwvSGVhZGluZz5cclxuICAgICAgICAgIDxUZXh0IGFzPVwicFwiIHZhcmlhbnQ9XCJoZXJvU2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICBUaGUgbW9zdCBkaWZmaWN1bHQgcGFydCBvZiBtYWtpbmcgYSBzdWNjZXNzZnVsIGNhcnJpZXIgaXMgZ2V0dGluZyBzdGFydGVkLiBHaXZlIHlvdXIgY2FyZWVyIGEgYm9vc3QgYnkgbGVhcm5pbmcgaW5kdXN0cnkgc2tpbGxzLCB3b3JrIG9uIHJlYWwtbGlmZSBwcm9qZWN0cywgaW50ZXJuc2hpcHMsIGFuZCBleHBlcnQgZ3VpZGFuY2UuXHJcbiAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICA8RmxleD5cclxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKT0+e3dpbmRvdy5vcGVuKFwiaHR0cHM6Ly9mb3Jtcy5nbGUvTW1IMk53TWFoSjZQYmdRNTdcIil9fSB2YXJpYW50PVwid2hpdGVCdXR0b25cIiBhcmlhLWxhYmVsPVwiR2V0IFN0YXJ0ZWRcIj5cclxuICAgICAgICAgICAgIEdldCBTdGFydGVkXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxNb2RhbFZpZGVvXHJcbiAgICAgICAgICAgICAgICBjaGFubmVsPVwieW91dHViZVwiXHJcbiAgICAgICAgICAgICAgICBpc09wZW49e3ZpZGVvT3Blbn1cclxuICAgICAgICAgICAgICAgIHZpZGVvSWQ9XCJaTkE5cm1Ec1lWRVwiXHJcbiAgICAgICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRWaWRlb09wZW4oZmFsc2UpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cInRleHRCdXR0b25cIlxyXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIldhdGNoIFZpZGVvXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxGYVBsYXlDaXJjbGUgLz4gV2F0Y2ggVmlkZW9cclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICBcclxuICAgICAgICA8L0JveD5cclxuXHJcbiAgICAgICAgPEJveCBzeD17c3R5bGVzLmJhbm5lci5pbWFnZUJveH0+XHJcbiAgICAgICAgICA8SW1hZ2Ugc3JjPXtCYW5uZXJUaHVtYn0gYWx0PVwiYmFubmVyXCIgLz5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGJhbm5lcjoge1xyXG4gICAgb3ZlcmZsb3c6IFsnaGlkZGVuJywgJ2luaXRpYWwnLCBudWxsLCAnaGlkZGVuJ10sXHJcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtCYW5uZXJCR30pYCxcclxuICAgIGJhY2tncm91bmRSZXBlYXQ6IGBuby1yZXBlYXRgLFxyXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiAndG9wIGxlZnQnLFxyXG4gICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXHJcbiAgICBib3JkZXJCb3R0b21SaWdodFJhZGl1czogWzEwMCwgMTUwLCBudWxsLCBudWxsLCBudWxsLCAyNTBdLFxyXG4gICAgcHQ6IFsnMTUwcHgnLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAnMTQwcHgnLCAnMTMwcHgnXSxcclxuICAgIHBiOiBbJzEwMHB4JywgbnVsbCwgbnVsbCwgJzExMHB4JywgbnVsbCwgMTAsICcxNTBweCddLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAncHJpbWFyeScsXHJcbiAgICBjb250YWluZXI6IHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgfSxcclxuICAgIGNvbnRlbnRCb3g6IHtcclxuICAgICAgd2lkdGg6IFsnMTAwJScsIG51bGwsICc4NSUnLCAnNTUlJywgJzUwJScsICc1NSUnXSxcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAgYWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnLFxyXG4gICAgICBmbGV4U2hyaW5rOiAwLFxyXG4gICAgICBwdDogWzAsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDUsIDddLFxyXG4gICAgfSxcclxuICAgIGltYWdlQm94OiB7XHJcbiAgICAgIGRpc3BsYXk6IFsnbm9uZScsIG51bGwsIG51bGwsICdibG9jayddLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgIG1sOiBbMCwgbnVsbCwgbnVsbCwgJy0xMTBweCcsICctMTE1cHgnLCAnLTE1MHB4JywgJy0yMTBweCcsICctMjcwcHgnXSxcclxuICAgICAgbXI6IFswLCBudWxsLCBudWxsLCAnLTE0NXB4JywgJy0xNjBweCcsICctMTgwcHgnLCAnLTIyMHB4JywgJy0yNTBweCddLFxyXG4gICAgICBtdDogWzAsIG51bGwsIG51bGwsICc0MHB4JywgNCwgNywgMF0sXHJcbiAgICAgIG1iOiBbMCwgbnVsbCwgbnVsbCwgbnVsbCwgJy00NXB4JywgJy03MHB4JywgbnVsbCwgJy0xMTVweCddLFxyXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc3BvbnNvclRpdGxlOiB7XHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGZvbnRTaXplOiBbMSwgMl0sXHJcbiAgICBvcGFjaXR5OiAwLjYsXHJcbiAgICBwcjogMjAsXHJcbiAgICBmbGV4U2hyaW5rOiAwLFxyXG4gICAgcGI6IFsyLCBudWxsLCAwXSxcclxuICB9LFxyXG4gIHNwb25zb3JCb3g6IHtcclxuICAgIHB0OiBbJzM1cHgnLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAnNDVweCddLFxyXG4gICAgZmxleERpcmVjdGlvbjogWydjb2x1bW4nLCBudWxsLCAncm93J10sXHJcbiAgICBzcG9uc29yOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICc+IGEnOiB7XHJcbiAgICAgICAgbXI6IFs1LCBudWxsLCBudWxsLCA0LCA2XSxcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgJyY6bGFzdC1vZi10eXBlJzoge1xyXG4gICAgICAgICAgbXI6IDAsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCwgQ29udGFpbmVyLCBCb3gsIEdyaWQsIFRleHQsIEhlYWRpbmcgfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCBUZXh0RmVhdHVyZSBmcm9tICdjb21wb25lbnRzL3RleHQtZmVhdHVyZSc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICdjb21wb25lbnRzL2ltYWdlJztcclxuXHJcbmltcG9ydCBDb3JlRmVhdHVyZVRodW1iIGZyb20gJ2Fzc2V0cy9TdWNjZXNzLnBuZyc7XHJcbmltcG9ydCBCcmllZmNhc2UgZnJvbSAnYXNzZXRzL2NvcmUtZmVhdHVyZS9jb2FjaGluZy5wbmcnO1xyXG5pbXBvcnQgU2VjdXJlIGZyb20gJ2Fzc2V0cy9jb3JlLWZlYXR1cmUvdGVudC5wbmcnO1xyXG5cclxuY29uc3QgZGF0YSA9IHtcclxuICBzdWJUaXRsZTogJ0NvcmUgZmVhdHVyZXMnLFxyXG4gIHRpdGxlOiAnTGVhcm4sUHJhY3RpY2UgYW5kIEdldCBQbGFjZWQnLFxyXG4gIGZlYXR1cmVzOiBbXHJcbiAgICB7XHJcbiAgICAgIGlkOiAxLFxyXG4gICAgICBpbWdTcmM6IEJyaWVmY2FzZSxcclxuICAgICAgYWx0VGV4dDogJ01lbnRvcnNoaXAnLFxyXG4gICAgICB0aXRsZTogJ01lbnRvcnNoaXAnLFxyXG4gICAgICB0ZXh0OlxyXG4gICAgICAgICdHZXQgbWVudG9yc2hpcCBhdCBlYWNoIHBoYXNlIG9mIHlvdXIgbGVhcm5pbmcgYW5kIGxlYXJuIHRoZSByaWdodCB3YXkgaW4gYSBmYXN0IGFuZCBlZmZlY3RpdmUgbWFubmVyICAnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDIsXHJcbiAgICAgIGltZ1NyYzogU2VjdXJlLFxyXG4gICAgICBhbHRUZXh0OiAnV29ybGQgQ2xhc3MgVHJhaW5pbmcnLFxyXG4gICAgICB0aXRsZTogJ1RyYWluaW5nIENhbXBzJyxcclxuICAgICAgdGV4dDpcclxuICAgICAgICAnQSByZWFsLXRpbWUgbGVhcm5pbmcgYW5kIHByYWN0aWNlIHRyYWluaW5nIGNhbXBzIHdpdGggbGl2ZSBtZW50b3JzaGlwIGFuZCBndWlkYW5jZSB0byBib29zdCB5b3VyIGxlYXJuaW5nIGFuZCBnaXZlIHlvdSBhbiBlZGdlIG92ZXIgdGhlIHJlc3Qgb2YgdGhlIGNvbXBldGl0aW9uICcsXHJcbiAgICB9LFxyXG4gIF0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb3JlRmVhdHVyZSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gc3g9e3N0eWxlcy5jb3JlRmVhdHVyZX0+XHJcbiAgICAgIDxDb250YWluZXIgc3g9e3N0eWxlcy5jb250YWluZXJCb3h9PlxyXG4gICAgICAgIDxCb3ggc3g9e3N0eWxlcy50aHVtYm5haWx9PlxyXG4gICAgICAgICAgPEltYWdlIHNyYz17Q29yZUZlYXR1cmVUaHVtYn0gYWx0PVwiVGh1bWJuYWlsXCIgLz5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgICA8Qm94IHN4PXtzdHlsZXMuY29udGVudEJveH0+XHJcbiAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMuaGVhZGluZ1RvcH0+XHJcbiAgICAgICAgICAgIDxUZXh0RmVhdHVyZSBzdWJUaXRsZT17ZGF0YS5zdWJUaXRsZX0gdGl0bGU9e2RhdGEudGl0bGV9IC8+XHJcbiAgICAgICAgICA8L0JveD5cclxuXHJcbiAgICAgICAgICA8R3JpZCBnYXA9XCIxNXB4IDBcIiBjb2x1bW5zPXsxfSBzeD17c3R5bGVzLmdyaWR9PlxyXG4gICAgICAgICAgICB7ZGF0YS5mZWF0dXJlcy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMuY2FyZH0ga2V5PXtpdGVtLmlkfT5cclxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2l0ZW0uaW1nU3JjfSBhbHQ9e2l0ZW0uYWx0VGV4dH0gc3g9e3N0eWxlcy5pbWd9IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPEJveCBzeD17c3R5bGVzLndyYXBwZXJ9PlxyXG4gICAgICAgICAgICAgICAgICA8SGVhZGluZyBzeD17c3R5bGVzLndyYXBwZXIudGl0bGV9PntpdGVtLnRpdGxlfTwvSGVhZGluZz5cclxuICAgICAgICAgICAgICAgICAgPFRleHQgc3g9e3N0eWxlcy53cmFwcGVyLnN1YlRpdGxlfT57aXRlbS50ZXh0fTwvVGV4dD5cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGNvcmVGZWF0dXJlOiB7XHJcbiAgICBweTogWzAsIG51bGwsIG51bGwsIDIsIG51bGwsIDddLFxyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAnJjo6YmVmb3JlJzoge1xyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgY29udGVudDogJ1wiXCInLFxyXG4gICAgICB0b3A6IFsnYXV0bycsIG51bGwsIG51bGwsICc1MCUnXSxcclxuICAgICAgYm90dG9tOiBbJzEwMHB4JywgMCwgbnVsbCwgJ2F1dG8nXSxcclxuICAgICAgbGVmdDogMCxcclxuICAgICAgYmFja2dyb3VuZDogJ2xpbmVhci1ncmFkaWVudCgtMTU3ZGVnLCAjRjZGQUZELCAjRjlGQ0ZDLCAjRkNGREZDKScsXHJcbiAgICAgIGhlaWdodDogWzM1MCwgNTUwLCAnNjAlJ10sXHJcbiAgICAgIHdpZHRoOiAnNTAlJyxcclxuICAgICAgekluZGV4OiAtMSxcclxuICAgICAgYm9yZGVyVG9wUmlnaHRSYWRpdXM6ICc1MCUnLFxyXG4gICAgICBib3JkZXJCb3R0b21SaWdodFJhZGl1czogJzUwJScsXHJcbiAgICAgIHRyYW5zZm9ybTogWyd0cmFuc2xhdGVZKDApJywgbnVsbCwgbnVsbCwgJ3RyYW5zbGF0ZVkoLTUwJSknXSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBjb250YWluZXJCb3g6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcclxuICAgIGZsZXhEaXJlY3Rpb246IFsnY29sdW1uJywgbnVsbCwgbnVsbCwgJ3JvdyddLFxyXG4gIH0sXHJcbiAgdGh1bWJuYWlsOiB7XHJcbiAgd2lkdGg6JzkwMHB4J1xyXG4gIH0sXHJcbiAgY29udGVudEJveDoge1xyXG4gICAgd2lkdGg6IFsnMTAwJScsIDQ1MCwgNTUwLCAzNTAsIDUwMCwgNTcwXSxcclxuICAgIHByOiBbMCwgbnVsbCwgJ2F1dG8nLCBudWxsLCBudWxsLCA4MF0sXHJcbiAgICBwbDogJ2F1dG8nLFxyXG4gICAgZmxleFNocmluazogMCxcclxuICB9LFxyXG4gIGhlYWRpbmdUb3A6IHtcclxuICAgIHBsOiBbMCwgbnVsbCwgbnVsbCwgbnVsbCwgJzM1cHgnLCBudWxsLCAnNTVweCcsIDZdLFxyXG4gICAgbWI6IFszLCBudWxsLCBudWxsLCBudWxsLCAxXSxcclxuICAgIHRleHRBbGlnbjogWydjZW50ZXInLCBudWxsLCBudWxsLCAnbGVmdCddLFxyXG4gIH0sXHJcbiAgZ3JpZDoge1xyXG4gICAgcDogWycwIDBweCAzNXB4JywgbnVsbCwgbnVsbCwgbnVsbCwgJzAgMjBweCA0MHB4JywgbnVsbCwgJzAgNDBweCA0MHB4JywgMF0sXHJcbiAgfSxcclxuICBjYXJkOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCcsXHJcbiAgICBwOiBbXHJcbiAgICAgICcwIDE3cHggMjBweCcsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgICcwIDAgMjBweCcsXHJcbiAgICAgICcyMHB4IDE1cHggMTdweCcsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgICcyNXB4IDMwcHggMjNweCcsXHJcbiAgICBdLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnMTBweCcsXHJcbiAgICB0cmFuc2l0aW9uOiAnYWxsIDAuM3MnLFxyXG4gICAgd2lkdGg6IFsnMTAwJScsICc4NSUnLCBudWxsLCAnMTAwJSddLFxyXG4gICAgbXg6ICdhdXRvJyxcclxuICAgICcmOmhvdmVyJzoge1xyXG4gICAgICBib3hTaGFkb3c6IFtcclxuICAgICAgICAnMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwKScsXHJcbiAgICAgICAgbnVsbCxcclxuICAgICAgICBudWxsLFxyXG4gICAgICAgIG51bGwsXHJcbiAgICAgICAgJzBweCA4cHggMjRweCByZ2JhKDY5LCA4OCwgMTU3LCAwLjA3KScsXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIGltZzoge1xyXG4gICAgd2lkdGg6IFsnMTAwcHgnLCBudWxsLCAnNTVweCddLFxyXG4gICAgaGVpZ2h0OiAnYXV0bycsXHJcbiAgICBmbGV4U2hyaW5rOiAwLFxyXG4gICAgbXI6IFszLCA0XSxcclxuICB9LFxyXG4gIHdyYXBwZXI6IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIG10OiAnLTVweCcsXHJcbiAgICB0aXRsZToge1xyXG4gICAgICBmb250U2l6ZTogMyxcclxuICAgICAgY29sb3I6ICdoZWFkaW5nX3NlY29uZGFyeScsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IDEuNCxcclxuICAgICAgZm9udFdlaWdodDogNzAwLFxyXG4gICAgICBtYjogWzIsIG51bGwsIG51bGwsIG51bGwsIDNdLFxyXG4gICAgfSxcclxuXHJcbiAgICBzdWJUaXRsZToge1xyXG4gICAgICBmb250U2l6ZTogMSxcclxuICAgICAgZm9udFdlaWdodDogNDAwLFxyXG4gICAgICBsaW5lSGVpZ2h0OiBbMS44NSwgbnVsbCwgMl0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3gsIENvbnRhaW5lciwgQm94IH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgU2VjdGlvbkhlYWRlciBmcm9tICdjb21wb25lbnRzL3NlY3Rpb24taGVhZGVyJztcclxuaW1wb3J0IEFjY29yZGlvbiBmcm9tICdjb21wb25lbnRzL2FjY29yZGlvbi9hY2NvcmRpb24nO1xyXG5jb25zdCBmYXFzID0gW1xyXG4gIHtcclxuICAgIHRpdGxlOiAnSG93IHRvIGNvbnRhY3Qgd2l0aCByaWRlcnMgZW1lcmdlbmN5ID8nLFxyXG4gICAgY29udGVudHM6IChcclxuICAgICAgPGRpdj5cclxuICAgICAgICBHZXQgeW91ciB3ZWJzaXRlIGFkcyB0ZXN0cyBkZWxpdmVyZWQgYXQgbGV0IGNvbGxlY3Qgc2FtcGxlIGZyb20gdGhlXHJcbiAgICAgICAgdmljdG9yeSBvZiB0aGUgbWFuYWdlbWVudHMgdGhhdCBzdXBwbGllcyBiZXN0IGRlc2lnbiBzeXN0ZW0gd2hpY2hcclxuICAgICAgICBndWlkZWxpbmVzIGV2ZXIgd2l0aCBtdWx0aXBsZSBmZWF0dXJlcy5cclxuICAgICAgPC9kaXY+XHJcbiAgICApLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdBcHAgaW5zdGFsbGF0aW9uIGZhaWxlZCwgaG93IHRvIHVwZGF0ZSBzeXN0ZW0gaW5mb3JtYXRpb24/JyxcclxuICAgIGNvbnRlbnRzOiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgUmhpbm8gc2tpbiBtYXliZSB0aGljayBidXQgaXQgY2FuIGJlIHF1aXRlIHNlbnNpdGl2ZSB0byBzdW5idXJucyBhbmRcclxuICAgICAgICBpbnNlY3QgYml0ZXMgd2hpY2ggaXMgd2h5IHRoZXkgbGlrZSB3YWxsb3cgc28gbXVjaCDigJMgd2hlbiB0aGUgbXVkIGRyaWVzXHJcbiAgICAgICAgaXQgYWN0cyBhcyBwcm90ZWN0aW9uIGZyb20gdGhlIHN1bmJ1cm5zIGFuZCBpbnNlY3RzLlxyXG4gICAgICA8L2Rpdj5cclxuICAgICksXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogYFdlYnNpdGUgcmVzcG9uc2UgdGFraW5nIHRpbWUsIGhvdyB0byBpbXByb3ZlP2AsXHJcbiAgICBjb250ZW50czogKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIEdldCB5b3VyIGJsb29kIHRlc3RzIGRlbGl2ZXJlZCBhdCB0aGUgaG9tZSBjb2xsZWN0IGEgc2FtcGxlIGZyb21cclxuICAgICAgICBtYW5hZ2VtZW50IG5ld3MuIEdldCB5b3VyIGJsb29kIHRlc3RzIGRlbGl2ZXJlZCBhdCB0aGUgaG9tZSBjb2xsZWN0IGFcclxuICAgICAgICBzYW1wbGUgZnJvbSBtYW5hZ2VtZW50IG5ld3MuIEdldCB5b3VyIGJsb29kIHRlc3RzIGRlbGl2ZXJlZCBhdCB0aGUgaG9tZVxyXG4gICAgICAgIGNvbGxlY3QgYSBzYW1wbGUgZnJvbSBtYW5hZ2VtZW50IG5ld3MuIEdldCB5b3VyIGJsb29kIHRlc3RzIGRlbGl2ZXJlZCBhdFxyXG4gICAgICAgIHRoZSBob21lLlxyXG4gICAgICA8L2Rpdj5cclxuICAgICksXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogYE5ldyB1cGRhdGUgZml4ZWQgYWxsIGJ1ZyBhbmQgaXNzdWVzYCxcclxuICAgIGNvbnRlbnRzOiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgSWYgeW914oCZcmUgbG9va2luZyB0byBodW50IGEgdW5pY29ybiwgYnV0IGRvbuKAmXQga25vdyB3aGVyZSB0byBiZWdpbiwgdHJ5XHJcbiAgICAgICAgTGFrZSBTdXBlcmlvciBTdGF0ZSBVbml2ZXJzaXR5IGluIFNhdWx0IFN0ZS4gTWFyaWUsIE1pY2hpZ2FuLiBTaW5jZVxyXG4gICAgICAgIDE5NzEsIHRoZSB1bml2ZXJzaXR5IGhhcyBpc3N1ZWQgcGVybWl0cyB0byB1bmljb3JuIHF1ZXN0ZXJzLlxyXG4gICAgICA8L2Rpdj5cclxuICAgICksXHJcbiAgfSxcclxuXTtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmFxKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBzeD17eyB2YXJpYW50OiAnc2VjdGlvbi5mYXEnIH19PlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxTZWN0aW9uSGVhZGVyXHJcbiAgICAgICAgICB0aXRsZT1cIkZyZXF1ZW50bHkgYXNrZWQgcXVlc3Rpb25cIlxyXG4gICAgICAgICAgc2xvZ2FuPVwiR2V0IHlvdXIgcXVlc3Rpb24gYW5zd2VyXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxCb3hcclxuICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgd2lkdGg6IFsnMTAwJScsIG51bGwsIG51bGwsICc2NTBweCcsICc3NDVweCddLFxyXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAgICAgICAgbXg6ICdhdXRvJyxcclxuICAgICAgICAgICAgbXk6IC00LFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8QWNjb3JkaW9uIGl0ZW1zPXtmYXFzfSAvPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3ggfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgR3JpZCB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IFNlY3Rpb25IZWFkZXIgZnJvbSAnY29tcG9uZW50cy9zZWN0aW9uLWhlYWRlcic7XHJcbmltcG9ydCBGZWF0dXJlQ2FyZCBmcm9tICdjb21wb25lbnRzL2ZlYXR1cmUtY2FyZC5qcyc7XHJcbmltcG9ydCBTbWFydCBmcm9tICdhc3NldHMvZmVhdHVyZS92aWRlby10dXRvcmlhbHMucG5nJztcclxuaW1wb3J0IFdpbm5lciBmcm9tICdhc3NldHMvZmVhdHVyZS90ZWFjaGluZy5wbmcnO1xyXG5pbXBvcnQgQ2xvdWQgZnJvbSAnYXNzZXRzL2ZlYXR1cmUvcXVpei5wbmcnO1xyXG5pbXBvcnQgU2V0dGluZyBmcm9tICdhc3NldHMvZmVhdHVyZS9hc3NpZ25tZW50LnBuZyc7XHJcbmltcG9ydCBEZXNpZ24gZnJvbSAnYXNzZXRzL2ZlYXR1cmUvcXVlc3Rpb24ucG5nJztcclxuaW1wb3J0IENoYXQgZnJvbSAnYXNzZXRzL2ZlYXR1cmUvYnVzaW5lc3NtYW4ucG5nJztcclxuXHJcbmNvbnN0IGRhdGEgPSBbXHJcbiAge1xyXG4gICAgaWQ6IDEsXHJcbiAgICBpbWdTcmM6IFNtYXJ0LFxyXG4gICAgYWx0VGV4dDogJ1ByYWN0aWNhbCBMZWFybmluZycsXHJcbiAgICB0aXRsZTogJ1ByYWN0aWNhbCBMZWFybmluZycsXHJcbiAgICB0ZXh0OlxyXG4gICAgICAnVG8gZ2FpbiBwcmFjdGljYWwga25vd2xlZGdlLCB5b3UgbmVlZCB0byBleHBsb3JlIHZhcmlvdXMgb3B0aW9ucyBhbmQgc2VlIHdoYXQgd29ya3MgdGhlIGJlc3QuJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAyLFxyXG4gICAgaW1nU3JjOiBXaW5uZXIsXHJcbiAgICBhbHRUZXh0OiAnSW50ZXJhY3Rpb24gV2l0aCBFeHBlcnQnLFxyXG4gICAgdGl0bGU6ICdJbnRlcmFjdGlvbiBXaXRoIEV4cGVydCcsXHJcbiAgICB0ZXh0OlxyXG4gICAgICAnSW50ZXJhY3RpdmUgb25lIHRvIG9uZSBzZXNzaW9ucyB3aXRoIEV4cGVydCB3aWxsIHByb3ZpZGUgeW91IHdpdGggYSBncmVhdCBvcHBvcnR1bml0eSB0byBwbGFuIG91dCB5b3VyIHRpbWUgYW5kIGVmZm9ydHMgdG8gbWFrZSB0aGUgbW9zdCBvZiBpdC4nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDMsXHJcbiAgICBpbWdTcmM6IENsb3VkLFxyXG4gICAgYWx0VGV4dDogJ1F1aXp6ZXMnLFxyXG4gICAgdGl0bGU6ICdRdWl6emVzJyxcclxuICAgIHRleHQ6XHJcbiAgICAgICdUaGUgQmVzdCB3YXkgdG8gZ3JvdyBzdHJvbmcgaXMgdG8gd29yayBvbiB5b3VyIHdlYWtuZXNzZXMgUXVpenplcyB3aWxsIGhlbHAgeW91IHRvIGtub3cgeW91ciB3ZWFrbmVzc2VzIGFuZCBjYW4gd29yayBvbiB0aGVtIGFjY29yZGluZ2x5JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA0LFxyXG4gICAgaW1nU3JjOiBTZXR0aW5nLFxyXG4gICAgYWx0VGV4dDogJ1JlYWwtdGltZSBBc3NpZ25tZW50cycsXHJcbiAgICB0aXRsZTogJ1JlYWwtdGltZSBBc3NpZ25tZW50cycsXHJcbiAgICB0ZXh0OlxyXG4gICAgICAnV29yayBvbiByZWFsLWxpZmUgcHJvamVjdHMgd2hpY2ggd2lsbCBoZWxwIHlvdSBnZXQgaGFuZHMtb24gZXhwZXJpZW5jZSBpbiBidWlsZGluZyBhcHBsaWNhdGlvbnMgdGhhdCBhcmUgdXAgdG8gdGhlIHN0YW5kYXJkIG9mIHRoZSBpbmR1c3RyeSAnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDUsXHJcbiAgICBpbWdTcmM6IERlc2lnbixcclxuICAgIGFsdFRleHQ6ICdEb3VidCBDaGVja2luZycsXHJcbiAgICB0aXRsZTogJ0RvdWJ0IENoZWNraW5nJyxcclxuICAgIHRleHQ6XHJcbiAgICAgICdUaGUgcm9hZCB0byBsZWFybmluZyBhIG5ldyBza2lsbCBpcyBub3QgdGhhdCBlYXN5IHlvdSBtYWtlIGNvbWUgYWNyb3NzIGEgbG90IG9mIHByb2JsZW1zIHdpdGggYXJlIGxldHRpbmcgeW91IGRvd24gYW5kIHlvdSBhcmUgc3R1Y2suIFdlIHdvbnQgbGV0IHRoYXQgaGFwcGVuLicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNixcclxuICAgIGltZ1NyYzogQ2hhdCxcclxuICAgIGFsdFRleHQ6ICdJbnRlcm5zaGlwcycsXHJcbiAgICB0aXRsZTogJ0ludGVybnNoaXBzJyxcclxuICAgIHRleHQ6XHJcbiAgICAgICdXaGVuIGl0IGNvbWVzIGRvd24gdG8gcHJhY3RpY2UgeW91ciBza2lsbCBhbmQgbWFrZSBpdCBtb3JlIHVzZWZ1bCB0aGUgYmVzdCB3YXkgdG8gZ2V0IHBhc3MgaXQgYnkgd29ya2luZyBpbiBhIHJlYWwtbGlmZSBlbnZpcm9ubWVudCBpbiB3aGljaCBvdXIgaW50ZXJuc2hpcCBwcm9ncmFtIGhlbHBzIHlvdSB0byBzaGFwZW4geW91ciBza2lsbHMnLFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGZWF0dXJlKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBzeD17eyB2YXJpYW50OiAnc2VjdGlvbi5mZWF0dXJlJyB9fT5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8U2VjdGlvbkhlYWRlclxyXG4gICAgICAgICAgc2xvZ2FuPVwiQmVzdCBCZW5lZml0c1wiXHJcbiAgICAgICAgICB0aXRsZT1cIk1lZXQgZXhjaXRpbmcgZmVhdHVyZXNcIlxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxHcmlkIHN4PXtzdHlsZXMuZ3JpZH0+XHJcbiAgICAgICAgICB7ZGF0YS5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgPEZlYXR1cmVDYXJkXHJcbiAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxyXG4gICAgICAgICAgICAgIHNyYz17aXRlbS5pbWdTcmN9XHJcbiAgICAgICAgICAgICAgYWx0PXtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgIHRpdGxlPXtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgIHRleHQ9e2l0ZW0udGV4dH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGdyaWQ6IHtcclxuICAgIHB0OiBbMCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgM10sXHJcbiAgICBncmlkR2FwOiBbXHJcbiAgICAgICczN3B4IDAnLFxyXG4gICAgICBudWxsLFxyXG4gICAgICAnNDVweCAzMHB4JyxcclxuICAgICAgbnVsbCxcclxuICAgICAgJzUwcHggMzBweCcsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgICc5MHB4IDcwcHgnLFxyXG4gICAgXSxcclxuICAgIHdpZHRoOiBbJzEwMCUnLCAnODAlJywgJzEwMCUnXSxcclxuICAgIG14OiAnYXV0bycsXHJcbiAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBbXHJcbiAgICAgICdyZXBlYXQoMSwxZnIpJyxcclxuICAgICAgbnVsbCxcclxuICAgICAgJ3JlcGVhdCgyLDFmciknLFxyXG4gICAgICBudWxsLFxyXG4gICAgICAncmVwZWF0KDMsMWZyKScsXHJcbiAgICBdLFxyXG4gIH0sXHJcbn07XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3ggfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgR3JpZCB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IFNlY3Rpb25IZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9zZWN0aW9uLWhlYWRlcic7XHJcbmltcG9ydCBGZWF0dXJlQ2FyZENvbHVtbiBmcm9tICdjb21wb25lbnRzL2ZlYXR1cmUtY2FyZC1jb2x1bW4uanMnO1xyXG5pbXBvcnQgVmVjdG9yIGZyb20gJ2Fzc2V0cy9rZXktZmVhdHVyZS9wcmFjdGljZSAoMSkucG5nJztcclxuaW1wb3J0IEVkaXRpbmcgZnJvbSAnYXNzZXRzL2tleS1mZWF0dXJlL2hlbHAgKDEpLnBuZyc7XHJcbmltcG9ydCBTcGVlZCBmcm9tICdhc3NldHMva2V5LWZlYXR1cmUvcHJvbW90aW9uICgyKS5wbmcnO1xyXG5cclxuY29uc3QgZGF0YSA9IFtcclxuICB7XHJcbiAgICBpZDogMSxcclxuICAgIGltZ1NyYzogVmVjdG9yLFxyXG4gICAgYWx0VGV4dDogJ1ByYWN0aWNhbCBMZWFybmluZycsXHJcbiAgICB0aXRsZTogJ1ByYWN0aWNhbCBMZWFybmluZycsXHJcbiAgICB0ZXh0OlxyXG4gICAgICAnVGhlIHRoZW9yeSBpcyBhbGwgYWJvdXQgcmVhZGluZyBhIGdpdmVuIHNldCBvZiBtYXRlcmlhbHMgYW5kIHVuZGVyc3RhbmRpbmcgd2hhdCB0aGUgbWF0ZXJpYWxzIHdhbnQgdG8gY29udmV5LiBXaGVyZWFzIHRvIGdhaW4gcHJhY3RpY2FsIGtub3dsZWRnZSwgeW91IG5lZWQgdG8gZXhwbG9yZSB2YXJpb3VzIG9wdGlvbnMgYW5kIHNlZSB3aGF0IHdvcmtzIHRoZSBiZXN0LicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMixcclxuICAgIGltZ1NyYzogRWRpdGluZyxcclxuICAgIGFsdFRleHQ6ICcgMjQgKjcgTWVudG9yIFN1cHBvcnQnLFxyXG4gICAgdGl0bGU6ICcyNCAqNyBNZW50b3IgU3VwcG9ydCcsXHJcbiAgICB0ZXh0OlxyXG4gICAgICAndGhlIFBhdGggdG8gc3VjY2VzcyBjYW4gYmUgdG91Z2ggYnV0IHRoZSByaWdodCBndWlkYW5jZSBhbmQgYW4gZXhwZXJ0IGhlbHBpbmcgaGFuZCBjYW4gbWFrZSB0aGlzIHBhdGggIGVuam95YWJsZSBhbmQgbWFrZSB5b3VyIGVmZm9ydHMgY291bnQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDMsXHJcbiAgICBpbWdTcmM6IFNwZWVkLFxyXG4gICAgYWx0VGV4dDogJ0ludGVybnNoaXBzJyxcclxuICAgIHRpdGxlOiAnSW50ZXJuc2hpcHMnLFxyXG4gICAgdGV4dDpcclxuICAgICAgJ0luZHVzdHJ5IGxlYWRpbmcgY3VycmljdWx1bSBkZXNpZ25lZCBieSBleHBlcnQgZGV2ZWxvcGVycyB0dXJuZWQgZWR1Y2F0b3JzIHdobyBoYXZlIGludmVzdGVkIHRpbWUgdG8gY3JlYXRlIHF1YWxpdHkgY29udGVudCBpbmZ1c2VkIHdpdGggdW5pcXVlIHRlYWNoaW5nIG1ldGhvZG9sb2d5LicsXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEtleUZlYXR1cmUoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIHN4PXt7IHZhcmlhbnQ6ICdzZWN0aW9uLmtleUZlYXR1cmUnIH19IGlkPVwiZmVhdHVyZVwiPlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxTZWN0aW9uSGVhZGVyXHJcbiAgICAgICAgICBzbG9nYW49XCJRdWFsaXR5IGZlYXR1cmVzXCJcclxuICAgICAgICAgIHRpdGxlPVwiRVhDTFVTSVZFIEZFQVRVUkVTXCJcclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8R3JpZCBzeD17c3R5bGVzLmdyaWR9PlxyXG4gICAgICAgICAge2RhdGEubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgIDxGZWF0dXJlQ2FyZENvbHVtblxyXG4gICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cclxuICAgICAgICAgICAgICBzcmM9e2l0ZW0uaW1nU3JjfVxyXG4gICAgICAgICAgICAgIGFsdD17aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICB0aXRsZT17aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICB0ZXh0PXtpdGVtLnRleHR9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBncmlkOiB7XHJcbiAgICBweDogWzAsIG51bGwsIG51bGwsICc0MHB4JywgbnVsbCwgJzgwcHgnXSxcclxuICAgIHB0OiBbMCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgM10sXHJcbiAgICBncmlkR2FwOiBbJzM1cHggMCcsIG51bGwsICc0MHB4IDAnXSxcclxuICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFtcclxuICAgICAgJ3JlcGVhdCgxLDFmciknLFxyXG4gICAgICBudWxsLFxyXG4gICAgICAncmVwZWF0KDIsMWZyKScsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgICdyZXBlYXQoMywxZnIpJyxcclxuICAgIF0sXHJcbiAgICB3aWR0aDogWycxMDAlJywgJzgwJScsICcxMDAlJ10sXHJcbiAgICBteDogJ2F1dG8nLFxyXG4gICAgJyYgPiBkaXYnOiB7XHJcbiAgICAgIHB4OiBbMCwgJzE1cHgnLCBudWxsLCAnMjVweCcsIG51bGwsICczMHB4JywgJzQwcHgnLCAnNjBweCddLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4LCBDb250YWluZXIsIEZsZXggfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCBQcmljZUNhcmQgZnJvbSAnY29tcG9uZW50cy9wcmljZS1jYXJkJztcclxuaW1wb3J0IFNlY3Rpb25IZWFkZXIgZnJvbSAnY29tcG9uZW50cy9zZWN0aW9uLWhlYWRlcic7XHJcbmltcG9ydCB7IElvSW9zQ2hlY2ttYXJrQ2lyY2xlLCBJb0lvc0Nsb3NlQ2lyY2xlIH0gZnJvbSAncmVhY3QtaWNvbnMvaW8nO1xyXG5pbXBvcnQgUGF0dGVybkJHIGZyb20gJ2Fzc2V0cy9wYXR0ZXJuQkcucG5nJztcclxuXHJcbmNvbnN0IHBhY2thZ2VzID0gW1xyXG4gIHtcclxuICAgIG5hbWU6ICcxIE1vbnRoIEZyZWUgUGxhbicsXHJcbiAgICBkZXNjcmlwdGlvbjogJ0ZvciBTdHVkZW50cyBKdXN0IHN0YXJ0aW5nIHVwJyxcclxuICAgIGJ1dHRvblRleHQ6ICdTaWdudXAgTm93JyxcclxuICAgIHBvaW50czogW1xyXG4gICAgICB7XHJcbiAgICAgICAgaWNvbjogPElvSW9zQ2hlY2ttYXJrQ2lyY2xlIC8+LFxyXG4gICAgICAgIHRleHQ6ICdVbHRpbWF0ZSBhY2Nlc3MgdG8gYWxsIGNvdXJzZSwgZXhlcmNpc2VzIGFuZCBhc3Nlc3NtZW50cycsXHJcbiAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpY29uOiA8SW9Jb3NDaGVja21hcmtDaXJjbGUgLz4sXHJcbiAgICAgICAgdGV4dDpcclxuICAgICAgICAgICdGcmVlIGFjY2VzcyBmb3IgYWxsIGtpbmQgb2YgUHJlbWl1bSBjb3Vyc2VzLicsXHJcbiAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpY29uOiA8SW9Jb3NDaGVja21hcmtDaXJjbGUgLz4sXHJcbiAgICAgICAgdGV4dDogJ1VubGltaXRlZCBKb2JzIGFuZCBJbnRlcm5zaGlwcyBBcHBsaWNhdGlvbnMnLFxyXG4gICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWNvbjogPElvSW9zQ2xvc2VDaXJjbGUgLz4sXHJcbiAgICAgICAgdGV4dDogJ0FjdGl2ZSBQcm9maWxlIGFuZCByZWNvbW1lZGF0aW9ucycsXHJcbiAgICAgICAgaXNBdmFpbGFibGU6IGZhbHNlLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWNvbjogPElvSW9zQ2xvc2VDaXJjbGUgLz4sXHJcbiAgICAgICAgdGV4dDogJzEgdG8gMSBFeHBlcnQgZ3VpZGFuY2UnLFxyXG4gICAgICAgIGlzQXZhaWxhYmxlOiBmYWxzZSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGljb246IDxJb0lvc0Nsb3NlQ2lyY2xlIC8+LFxyXG4gICAgICAgIHRleHQ6ICdMaXZlIFNlc3Npb25zJyxcclxuICAgICAgICBpc0F2YWlsYWJsZTogZmFsc2UsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpY29uOiA8SW9Jb3NDbG9zZUNpcmNsZSAvPixcclxuICAgICAgICB0ZXh0OiAnUmVhbCBsaWZlIHByb2plY3QgRXhwZXJpZW5jZScsXHJcbiAgICAgICAgaXNBdmFpbGFibGU6IGZhbHNlLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIGhlYWRlcjogJ1JlY29tbWVuZGVkJyxcclxuICAgIG5hbWU6ICdQcmVtaXVtJyxcclxuICAgIGRlc2NyaXB0aW9uOiAnRm9yIGFjaGl2ZXJzIHRvIGxhbmQgdGhlaXIgRHJlYW0gSm9iJyxcclxuICAgIHByaWNlV2l0aFVuaXQ6ICdSczQ5OS8nLFxyXG4gICAgYnV0dG9uVGV4dDogJ1NpZ251cCBOb3cnLFxyXG4gICAgcG9pbnRzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBpY29uOiA8SW9Jb3NDaGVja21hcmtDaXJjbGUgLz4sXHJcbiAgICAgICAgdGV4dDogJ1VsdGltYXRlIGFjY2VzcyB0byBhbGwgY291cnNlLCBleGVyY2lzZXMgYW5kIGFzc2Vzc21lbnRzJyxcclxuICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGljb246IDxJb0lvc0NoZWNrbWFya0NpcmNsZSAvPixcclxuICAgICAgICB0ZXh0OlxyXG4gICAgICAgICAgJ0ZyZWUgYWNjZXNzIGZvciBhbGwga2luZCBvZiBQcmVtaXVtIGNvdXJzZXMuJyxcclxuICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGljb246IDxJb0lvc0NoZWNrbWFya0NpcmNsZSAvPixcclxuICAgICAgICB0ZXh0OiAnVW5saW1pdGVkIEpvYnMgYW5kIEludGVybnNoaXBzIEFwcGxpY2F0aW9ucycsXHJcbiAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpY29uOiA8SW9Jb3NDaGVja21hcmtDaXJjbGUgLz4sXHJcbiAgICAgICAgdGV4dDogJ0FjdGl2ZSBQcm9maWxlIGFuZCByZWNvbW1lZGF0aW9ucycsXHJcbiAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpY29uOiA8SW9Jb3NDaGVja21hcmtDaXJjbGUgLz4sXHJcbiAgICAgICAgdGV4dDogJzEgdG8gMSBFeHBlcnQgZ3VpZGFuY2UnLFxyXG4gICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWNvbjogPElvSW9zQ2hlY2ttYXJrQ2lyY2xlIC8+LFxyXG4gICAgICAgIHRleHQ6ICdMaXZlIFNlc3Npb25zJyxcclxuICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGljb246IDxJb0lvc0NoZWNrbWFya0NpcmNsZSAvPixcclxuICAgICAgICB0ZXh0OiAnUmVhbCBsaWZlIHByb2plY3QgRXhwZXJpZW5jZScsXHJcbiAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAgXHJcbl07XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhY2thZ2UoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGlkPVwicHJpY2luZ1wiIHN4PXtzdHlsZXMucHJpY2luZ30+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPFNlY3Rpb25IZWFkZXJcclxuICAgICAgICAgIHRpdGxlPVwiTGV04oCZcyBzZWUgaG93IGl0IHdvcmtzXCJcclxuICAgICAgICAgIHNsb2dhbj1cIldoYXRzIHRoZSBmdW5jdGlvblwiXHJcbiAgICAgICAgICBpc1doaXRlPXt0cnVlfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEZsZXhcclxuICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICAgICAgZmxleFdyYXA6IFsnd3JhcCcsIG51bGwsIG51bGwsICdub3dyYXAnXSxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3BhY2thZ2VzLm1hcCgocGFja2FnZURhdGEpID0+IChcclxuICAgICAgICAgICAgPFByaWNlQ2FyZCBkYXRhPXtwYWNrYWdlRGF0YX0ga2V5PXtwYWNrYWdlRGF0YS5uYW1lfSAvPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9GbGV4PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgcHJpY2luZzoge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAncHJpbWFyeScsXHJcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtQYXR0ZXJuQkd9KWAsXHJcbiAgICBiYWNrZ3JvdW5kUmVwZWF0OiBgbm8tcmVwZWF0YCxcclxuICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlciBjZW50ZXInLFxyXG4gICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXHJcbiAgICBweTogWzgsIG51bGwsIDksIG51bGwsIG51bGwsIDEwXSxcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgJyY6OmJlZm9yZSc6IHtcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcclxuICAgICAgdG9wOiAwLFxyXG4gICAgICByaWdodDogMCxcclxuICAgICAgYmFja2dyb3VuZDpcclxuICAgICAgICAnbGluZWFyLWdyYWRpZW50KC00NWRlZywgcmdiYSg0Miw3MiwxMjUsIDAuMykgMjUlLCB0cmFuc3BhcmVudCAyNSUsIHRyYW5zcGFyZW50IDUwJSwgcmdiYSg0Miw3MiwxMjUsIDAuMykgNTAlLCByZ2JhKDQyLDcyLDEyNSwgMC4zKSA3NSUsIHRyYW5zcGFyZW50IDc1JSwgdHJhbnNwYXJlbnQpJyxcclxuICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgYmFja2dyb3VuZFNpemU6ICczNTBweCAzNTBweCcsXHJcbiAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICBvcGFjaXR5OiAwLjMsXHJcbiAgICAgIHpJbmRleDogMCxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCwgQ29udGFpbmVyLCBCb3ggfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCBUZXh0RmVhdHVyZSBmcm9tICdjb21wb25lbnRzL3RleHQtZmVhdHVyZSc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICdjb21wb25lbnRzL2ltYWdlJztcclxuXHJcbmltcG9ydCBQYXJ0bmVyIGZyb20gJ2Fzc2V0cy9wYXJ0bmVyLnBuZyc7XHJcblxyXG5jb25zdCBkYXRhID0ge1xyXG4gIHN1YlRpdGxlOiAnQ3V0dGluZyBFZGdlIHRlY2hub2xvZ3knLFxyXG4gIHRpdGxlOiAnTGVhcm4gdGhlIE1vc3QgQWR2YW5jZSBhbmQgRGVtYW5kaW5nIFNraWxscycsXHJcbiAgZGVzY3JpcHRpb246XHJcbiAgICAnTGVhcm4gdGhlIGxhdGVzdCB0ZWNobm9sb2d5IHdlYiBkZXZlbG9wbWVudCwgQW5kcm9pZCBBcHAgZGV2ZWxvcG1lbnQsIE5hdGl2ZSBBcHAsIFBXRCBhcHBzIGFuZCBJT1MgYXBwcyB3aXRoIHRoZSBOb2RlSnMgRGphbmdvIEdyYXBoUWwgYW5kIG11Y2ggbW9yZSB0ZWNobm9sb2d5IHRvIGxlYXJuJyxcclxuICBidG5OYW1lOiAnR2V0IFN0YXJ0ZWQnLFxyXG4gIGJ0blVSTDogJyMnLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFydG5lclNlY3Rpb24oKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIHN4PXt7IHZhcmlhbnQ6ICdzZWN0aW9uLnBhcnRuZXInIH19PlxyXG4gICAgICA8Q29udGFpbmVyIHN4PXtzdHlsZXMuY29udGFpbmVyQm94fT5cclxuICAgICAgICA8Qm94IHN4PXtzdHlsZXMuY29udGVudEJveH0+XHJcbiAgICAgICAgICA8VGV4dEZlYXR1cmVcclxuICAgICAgICAgICAgc3ViVGl0bGU9e2RhdGEuc3ViVGl0bGV9XHJcbiAgICAgICAgICAgIHRpdGxlPXtkYXRhLnRpdGxlfVxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj17ZGF0YS5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgYnRuTmFtZT17ZGF0YS5idG5OYW1lfVxyXG4gICAgICAgICAgICBidG5VUkw9e2RhdGEuYnRuVVJMfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgICA8Qm94IHN4PXt7IHB4OiBbMCwgbnVsbCwgJzQwcHgnLCAwXSB9fT5cclxuICAgICAgICAgIDxJbWFnZSBzcmM9e1BhcnRuZXJ9IGFsdD1cIlBhcnRuZXJcIiAvPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgY29udGFpbmVyQm94OiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXHJcbiAgICBmbGV4V3JhcDogWyd3cmFwJywgbnVsbCwgbnVsbCwgJ25vd3JhcCddLFxyXG4gIH0sXHJcbiAgY29udGVudEJveDoge1xyXG4gICAgZmxleFNocmluazogMCxcclxuICAgIHB4OiBbMCwgbnVsbCwgJzMwcHgnLCAwXSxcclxuICAgIHRleHRBbGlnbjogWydjZW50ZXInLCBudWxsLCBudWxsLCAnbGVmdCddLFxyXG4gICAgd2lkdGg6IFsnMTAwJScsIDQ1MCwgNTUwLCAnMzUwcHgnLCAnNDEwcHgnLCAnNDg1cHgnXSxcclxuICAgIG14OiAnYXV0bycsXHJcbiAgICBwYjogWyczMHB4JywgbnVsbCwgbnVsbCwgMF0sXHJcbiAgICAnLmRlc2NyaXB0aW9uJzoge1xyXG4gICAgICBwcjogWzAsIG51bGwsIG51bGwsIG51bGwsIDRdLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4IH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIEJveCB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IFRleHRGZWF0dXJlIGZyb20gJ2NvbXBvbmVudHMvdGV4dC1mZWF0dXJlJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ2NvbXBvbmVudHMvaW1hZ2UnO1xyXG5cclxuaW1wb3J0IFBheW1lbnRUaHVtYiBmcm9tICdhc3NldHMvcGF5bWVudFRodW1iLnBuZyc7XHJcbmltcG9ydCBQYXltZW50UGF0dGVybiBmcm9tICdhc3NldHMvcGF5bWVudC1wYXR0ZXJuLnBuZyc7XHJcblxyXG5jb25zdCBkYXRhID0ge1xyXG4gIHN1YlRpdGxlOiAnUEFZTUVOVCBTRUNVUklUWScsXHJcbiAgdGl0bGU6ICdTZWN1cmUgUGF5bWVudCBUcmFuc2FjdGlvbiBTeXN0ZW0gd2l0aCAjMSBSYW5raW5nJyxcclxuICBkZXNjcmlwdGlvbjpcclxuICAgICdHZXQgeW91ciB0ZXN0cyBkZWxpdmVyZWQgYXQgbGV0IGhvbWUgY29sbGVjdCBzYW1wbGUgZnJvbSB0aGUgdmljdG9yeSBvZiB0aGUgbWFuYWdlbWVudHMgdGhhdCBzdXBwbGllcyBiZXN0IGRlc2lnbiBzeXN0ZW0gZ3VpZGVsaW5lcyBldmVyLiBHZXQgeW91ciB0ZXN0cyBkZWxpdmVyZWQgYXQgbGV0IGhvbWUgY29sbGVjdCBzYW1wbGUuJyxcclxuICBidG5OYW1lOiAnTGVhcm4gTW9yZScsXHJcbiAgYnRuVVJMOiAnIycsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWN1cmVQYXltZW50KCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBzeD17eyB2YXJpYW50OiAnc2VjdGlvbi5zZWN1cmVQYXltZW50JyB9fT5cclxuICAgICAgPEJveCBzeD17c3R5bGVzLmJnT3ZlcmxheX0gLz5cclxuICAgICAgPENvbnRhaW5lciBzeD17c3R5bGVzLmNvbnRhaW5lckJveH0+XHJcbiAgICAgICAgPEJveCBzeD17c3R5bGVzLnRodW1ibmFpbH0+XHJcbiAgICAgICAgICA8SW1hZ2Ugc3JjPXtQYXltZW50VGh1bWJ9IGFsdD17ZGF0YS50aXRsZX0gLz5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgICA8Qm94IHN4PXtzdHlsZXMuY29udGVudEJveH0+XHJcbiAgICAgICAgICA8VGV4dEZlYXR1cmVcclxuICAgICAgICAgICAgc3ViVGl0bGU9e2RhdGEuc3ViVGl0bGV9XHJcbiAgICAgICAgICAgIHRpdGxlPXtkYXRhLnRpdGxlfVxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj17ZGF0YS5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgYnRuTmFtZT17ZGF0YS5idG5OYW1lfVxyXG4gICAgICAgICAgICBidG5VUkw9e2RhdGEuYnRuVVJMfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGJnT3ZlcmxheToge1xyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICB0b3A6IDAsXHJcbiAgICByaWdodDogMCxcclxuICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgekluZGV4OiAtMSxcclxuICAgIHdpZHRoOiBbXHJcbiAgICAgICcxMDAlJyxcclxuICAgICAgbnVsbCxcclxuICAgICAgbnVsbCxcclxuICAgICAgJ2NhbGMoNTAlICsgNDAwcHgpJyxcclxuICAgICAgJ2NhbGMoNTAlICsgNDgwcHgpJyxcclxuICAgICAgJ2NhbGMoNTAlICsgNTcwcHgpJyxcclxuICAgICAgbnVsbCxcclxuICAgICAgJ2NhbGMoNTAlICsgNjI1cHgpJyxcclxuICAgIF0sXHJcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtQYXltZW50UGF0dGVybn0pYCxcclxuICAgIGJhY2tncm91bmRSZXBlYXQ6IGBuby1yZXBlYXRgLFxyXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiAndG9wIGxlZnQnLFxyXG4gICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXHJcbiAgfSxcclxuICBjb250YWluZXJCb3g6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdmbGV4LXN0YXJ0JyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXHJcbiAgICBmbGV4V3JhcDogWyd3cmFwJywgbnVsbCwgbnVsbCwgJ25vd3JhcCddLFxyXG4gIH0sXHJcbiAgdGh1bWJuYWlsOiB7XHJcbiAgICBtYjogLTIsXHJcbiAgICBtbDogWy00LCAnLTQwcHgnLCBudWxsLCBudWxsLCAwXSxcclxuICAgIG9yZGVyOiBbMiwgbnVsbCwgbnVsbCwgMF0sXHJcbiAgICBwcjogWzYsIG51bGwsIDcsIDBdLFxyXG4gIH0sXHJcbiAgY29udGVudEJveDoge1xyXG4gICAgd2lkdGg6IFsnMTAwJScsIDQyMCwgNDgwLCAzODAsIDUwMCwgNTcwXSxcclxuICAgIG14OiAnYXV0bycsXHJcbiAgICBmbGV4U2hyaW5rOiAwLFxyXG4gICAgdGV4dEFsaWduOiBbJ2NlbnRlcicsIG51bGwsIG51bGwsICdsZWZ0J10sXHJcbiAgICBwdDogWzAsIG51bGwsIG51bGwsIDQsICc1MHB4JywgbnVsbCwgNCwgJzgwcHgnXSxcclxuICAgIHBsOiBbMCwgbnVsbCwgbnVsbCwgNDAsICc5MHB4J10sXHJcbiAgICBwYjogWzcsIG51bGwsIG51bGwsIDldLFxyXG4gICAgcHI6IFswLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCA2XSxcclxuICB9LFxyXG59O1xyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4LCBDb250YWluZXIsIEhlYWRpbmcsIFRleHQsIEJveCwgSW1hZ2UgfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCBTZWN0aW9uSGVhZGVyIGZyb20gJ2NvbXBvbmVudHMvc2VjdGlvbi1oZWFkZXInO1xyXG5pbXBvcnQgUmF0aW5nIGZyb20gJ2NvbXBvbmVudHMvcmF0aW5nJztcclxuaW1wb3J0IEJ1dHRvbkdyb3VwIGZyb20gJ2NvbXBvbmVudHMvYnV0dG9uLWdyb3VwJztcclxuaW1wb3J0IENhcm91c2VsIGZyb20gJ3JlYWN0LW11bHRpLWNhcm91c2VsJztcclxuXHJcbmltcG9ydCBBdmF0YXIxIGZyb20gJ2Fzc2V0cy90ZXN0aW1vbmlhbC9hdmF0YXIxLnBuZyc7XHJcbmltcG9ydCBBdmF0YXIyIGZyb20gJ2Fzc2V0cy90ZXN0aW1vbmlhbC9hdmF0YXIyLnBuZyc7XHJcbmltcG9ydCBBdmF0YXIzIGZyb20gJ2Fzc2V0cy90ZXN0aW1vbmlhbC9hdmF0YXIzLnBuZyc7XHJcbmltcG9ydCBBdmF0YXI0IGZyb20gJ2Fzc2V0cy90ZXN0aW1vbmlhbC9hdmF0YXI0LnBuZyc7XHJcblxyXG5jb25zdCBkYXRhID0gW1xyXG4gIHtcclxuICAgIGlkOiAxLFxyXG4gICAgdGl0bGU6ICdNb2Rlcm4gbG9vayAmIHRyZW5kaW5nIGRlc2lnbicsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgJ1wiSSAgaGF2ZSB3b3JrZWQgd2l0aCBEYXZl4oCZcyBCcm90aGVycyBUZWNobm9sb2d5ICwgQXMgYSBBbmRyb2lkIERldmVsb3BlciAuIEFrYXNoIERldiBTaXIgQWx3YXlzICBoZWxwZWQgIG1lICB0byB3aGVuZXZlciAgSSB3YXMgTmVlZGVkICB0byBMZWFybiBuZXcgVGVjaG5vbG9neSBGb3IgIFRoZSBQcm9qZWN04oCZcy4gTXkgV29yayBFeHBlcmllbmNlIHdhcyBFeHRyZW1lbHkgR29vZCB3aXRoIEFrYXNoIERhdmUgU2lyLiBBa2FzaCAgU2lyIEFsd2F5cyBDYXJlIHRvIEVtcGxveWVlcyBhbmQgYXMgd2VsbCBhcyBDbGllbnRzLiBUaGV5IEFsd2F5cyB0cnkgdG8gRnVsbCBmaWxsIGFsbCBSZXF1aXJlbWVudHMgb2YgdGhlIENsaWVudHMuIEFrYXNoIERhdmUgRG9pbmcgR3JlYXQgV29yay4g4oCdJyxcclxuICAgIGF2YXRhcjogQXZhdGFyMSxcclxuICAgIG5hbWU6ICdLYWxrYSBQcmFzaGFkJyxcclxuICAgIGRlc2lnbmF0aW9uOiAnQEthbGthUHJhc2hhZCcsXHJcbiAgICByZXZpZXc6IDQsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMixcclxuICAgIHRpdGxlOiAnRGVzaWduIFF1YWxpdHkgJiBwZXJmb3JtYW5jZScsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgJ0Rhd2F5IGlzIGdyZWF0IHBsYXRmb3JtIHRvIGxlYXJuIHRlY2hub2xvZ2llcywgcGVvcGxlcyB3aG8gd2FudCB0byBsZWFybiBwcm9ncmFtbWluZyBmcm9tIHNjcmF0Y2ggdGhpcyBpcyBhIGF3ZXNvbWUgcGxhdGZvcm0gdGhlbSAsdGhleSBpbnN1cmUgdGhhdCBldmVyeSBwZXJzb24gY2FuIHN0dWR5IGNvbWZvcnRhYmx5IGFjY29yZGluZyB0byB0aGVpciBwYWNlLiBIaWdobHkgcmVjb21tZW5kZWQgZm9yIHBlb3BsZSB3aG8gd2FudCB0byBzdGFydCB0aGVpciBjYXJlZXIgaW4gSVQnLFxyXG4gICAgYXZhdGFyOiBBdmF0YXIyLFxyXG4gICAgbmFtZTogJ1Jpc2hpIENob3ViZXknLFxyXG4gICAgZGVzaWduYXRpb246ICdAUmlzaGlDaG91YmV5JyxcclxuICAgIHJldmlldzogNSxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAzLFxyXG4gICAgdGl0bGU6ICdMYXlvdXQgYW5kIG9yZ2FuaXplZCBsYXllcnMnLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgICdEYXdheSBpcyBhIGJlc3QgcGxhdGZvcm0gZm9yIGxlYXJuaW5nLCBJbSBkb2luZyBteSBpbnRlcm5zaGlwIGZyb20gaGVyZSAsIE1lbnRvcnMgYXJlIHJlYWR5IHRvIGd1aWRlXFx0ZWNoICBhbnkgdGltZSB3aGVuZXZlciBJIHN0dWNrIG9uIHBlcnRpY3VsYXIgcHJvYmxlbSAuIEltIGdldHRpbmcgdG8gbGVhcm4gIG5ldyB0ZWNobm9sb2dpZXMgaW4gYSBwZXJmZWN0IG1hbm5lciB3aXRoIHBlcmZlY3QgdHV0b3JzICwgQWxvbmcgd2l0aCB0ZWFjaGluZyB0aGV5IGFsc28gbW90aXZhdGVzIHVzLCAgdG8gY3JlYXRlIGEgY3VyaW9zaXR5IHRvIGxlYXJuICBtb3JlLicsXHJcbiAgICBhdmF0YXI6IEF2YXRhcjMsXHJcbiAgICBuYW1lOiAnR3lhdHJpIFRpd2FyaScsXHJcbiAgICBkZXNpZ25hdGlvbjogJ0BHeWF0cmlUaXdhcmknLFxyXG4gICAgcmV2aWV3OiA1LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDQsXHJcbiAgICB0aXRsZTogJ01vZGVybiBsb29rICYgdHJlbmRpbmcgZGVzaWduJyxcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAnIGxlYXJuZWQgYSBsb3QgaW4gRGF3YXkuICB3aXRoIGRvaW5nIHNlbGYgc3R1ZHksIEkgYWxzbyBnZXQgdGhlIGd1aWRhbmNlIG9mIHRlYWNoZXJzIHdoaWNoIGlzIHZlcnkgaGVscGZ1bC4nLFxyXG4gICAgYXZhdGFyOiBBdmF0YXI0LFxyXG4gICAgbmFtZTogJ2FqZWV0YSBTYWh1JyxcclxuICAgIGRlc2lnbmF0aW9uOiAnQGFqZWV0YVNhaHUnLFxyXG4gICAgcmV2aWV3OiA0LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDUsXHJcbiAgICB0aXRsZTogJ01vZGVybiBsb29rICYgdHJlbmRpbmcgZGVzaWduJyxcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAnIEkgYW0gd29ya2luZyBhcyBhIGludGVybiBpbiBkYXdheSB0ZWNobm9sb2d5IGZvcm0gbGFzdCAzIG1vbnRocyBhbmQgaGVyZSBpcyBzb21lIHBvaW50cyBhYm91dCBteSBpbnRlcm5zaGlwIGV4cGVyaWVuY2UuVGhleSBtb3JlIGZvY3VzIG9uIHNlbGYgbGVhcm5pbmcgcmF0aGVyIHRoZW4ganVzdCB0ZWFjaGluZyBvciBleHBsYWluaW5nIHRvcGljcy5UaGV5IGhlbHAgdG8gdXBncmFkZSBwcm9ncmFtbWluZyBsb2dpY3MgIFRoZXkgaW1wcm92ZWQgbXkgRGVzaWduaW5nIHNraWxscy4gVHJhaW5lciBhbmQgZmVsbG93IGludGVybnMgYXJlIGFsc28gdmVyeSBoZWxwZnVsIGFuZCBraW5kLidcclxuICAgLCBhdmF0YXI6IEF2YXRhcjQsXHJcbiAgICBuYW1lOiAnQWFrYW5zaGEgU2FodScsXHJcbiAgICBkZXNpZ25hdGlvbjogJ0BBYWthbnNoYVNhaHUnLFxyXG4gICAgcmV2aWV3OiA1LFxyXG4gIH0sXHJcbl07XHJcblxyXG5jb25zdCByZXNwb25zaXZlID0ge1xyXG4gIGRlc2t0b3A6IHtcclxuICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiAzMDAwLCBtaW46IDE2MTkgfSxcclxuICAgIGl0ZW1zOiA0LFxyXG4gICAgc2xpZGVzVG9TbGlkZTogNCwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgdG8gMS5cclxuICB9LFxyXG4gIGxhcHRvcDoge1xyXG4gICAgYnJlYWtwb2ludDogeyBtYXg6IDE2MTksIG1pbjogMTAyNCB9LFxyXG4gICAgaXRlbXM6IDMsXHJcbiAgICBzbGlkZXNUb1NsaWRlOiAzLCAvLyBvcHRpb25hbCwgZGVmYXVsdCB0byAxLlxyXG4gIH0sXHJcbiAgdGFibGV0OiB7XHJcbiAgICBicmVha3BvaW50OiB7IG1heDogMTAyNCwgbWluOiA2NDAgfSxcclxuICAgIGl0ZW1zOiAyLFxyXG4gICAgc2xpZGVzVG9TbGlkZTogMiwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgdG8gMS5cclxuICB9LFxyXG4gIG1vYmlsZToge1xyXG4gICAgYnJlYWtwb2ludDogeyBtYXg6IDYzOSwgbWluOiAwIH0sXHJcbiAgICBpdGVtczogMSxcclxuICAgIHNsaWRlc1RvU2xpZGU6IDEsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IHRvIDEuXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRlc3RpbW9uaWFsQ2FyZCgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gaWQ9XCJ0ZXN0aW1vbmlhbFwiIHN4PXt7IHZhcmlhbnQ6ICdzZWN0aW9uLnRlc3RpbW9uaWFsJyB9fT5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8U2VjdGlvbkhlYWRlciBzbG9nYW49XCJUZXN0aW1vbmlhbFwiIHRpdGxlPVwiV0hBVCBPVVIgU1RVREVOVFMgU0FZIEFCT1VUIFVTXCIgLz5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDxCb3ggc3g9e3N0eWxlcy5jYXJvdXNlbFdyYXBwZXJ9PlxyXG4gICAgICAgIDxDYXJvdXNlbFxyXG4gICAgICAgIGF1dG9QbGF5PXt0cnVlfVxyXG4gICAgICAgICAgYWRkaXRpb25hbFRyYW5zZnJvbT17MH1cclxuICAgICAgICAgIGFycm93cz17ZmFsc2V9XHJcbiAgICAgICAgICBhdXRvUGxheVNwZWVkPXszMDAwfVxyXG4gICAgICAgICAgY2VudGVyTW9kZT17ZmFsc2V9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJcIlxyXG4gICAgICAgICAgY29udGFpbmVyQ2xhc3M9XCJjYXJvdXNlbC1jb250YWluZXJcIlxyXG4gICAgICAgICAgY3VzdG9tQnV0dG9uR3JvdXA9ezxCdXR0b25Hcm91cCAvPn1cclxuICAgICAgICAgIGRvdExpc3RDbGFzcz1cIlwiXHJcbiAgICAgICAgICBkcmFnZ2FibGVcclxuICAgICAgICAgIGZvY3VzT25TZWxlY3Q9e2ZhbHNlfVxyXG4gICAgICAgICAgaW5maW5pdGU9e3RydWV9XHJcbiAgICAgICAgICBpdGVtQ2xhc3M9XCJcIlxyXG4gICAgICAgICAga2V5Qm9hcmRDb250cm9sXHJcbiAgICAgICAgICBtaW5pbXVtVG91Y2hEcmFnPXs4MH1cclxuICAgICAgICAgIHJlbmRlckJ1dHRvbkdyb3VwT3V0c2lkZVxyXG4gICAgICAgICAgcmVuZGVyRG90c091dHNpZGU9e2ZhbHNlfVxyXG4gICAgICAgICAgcmVzcG9uc2l2ZT17cmVzcG9uc2l2ZX1cclxuICAgICAgICAgIHNob3dEb3RzPXtmYWxzZX1cclxuICAgICAgICAgIHNsaWRlckNsYXNzPVwiXCJcclxuICAgICAgICAgIHNsaWRlc1RvU2xpZGU9ezF9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2RhdGEubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5yZXZpZXdDYXJkfSBrZXk9e2B0ZXN0aW1vbmlhbC0ta2V5JHtpdGVtLmlkfWB9PlxyXG4gICAgICAgICAgICAgIDxSYXRpbmcgcmF0aW5nPXtpdGVtLnJldmlld30gLz5cclxuICAgICAgICAgICAgICA8SGVhZGluZyBhcz1cImgzXCIgc3g9e3N0eWxlcy50aXRsZX0+XHJcbiAgICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICA8L0hlYWRpbmc+XHJcbiAgICAgICAgICAgICAgPFRleHQgc3g9e3N0eWxlcy5kZXNjcmlwdGlvbn0+e2l0ZW0uZGVzY3JpcHRpb259PC9UZXh0PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17aXRlbS5hdmF0YXJ9IGFsdD1cIkNsaWVudCBJbWFnZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmV2aWV3ZXItaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICA8SGVhZGluZyBhcz1cImg0XCIgc3g9e3N0eWxlcy5oZWFkaW5nfT5cclxuICAgICAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICA8L0hlYWRpbmc+XHJcbiAgICAgICAgICAgICAgICAgIDxUZXh0IHN4PXtzdHlsZXMuZGVzaWduYXRpb259PntpdGVtLmRlc2lnbmF0aW9ufTwvVGV4dD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvQ2Fyb3VzZWw+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBjYXJvdXNlbFdyYXBwZXI6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICBhbGlnbkl0ZW1zOiAnZmxleC1lbmQnLFxyXG4gICAgbXQ6ICctMzVweCcsXHJcbiAgICBweDogJzE1cHgnLFxyXG4gICAgJy5jYXJvdXNlbC1jb250YWluZXInOiB7XHJcbiAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgIG1heFdpZHRoOiBbXHJcbiAgICAgICAgJzEwMCUnLFxyXG4gICAgICAgIG51bGwsXHJcbiAgICAgICAgbnVsbCxcclxuICAgICAgICAnNzUwcHgnLFxyXG4gICAgICAgICcxMDAwcHgnLFxyXG4gICAgICAgICcxMTgwcHgnLFxyXG4gICAgICAgIG51bGwsXHJcbiAgICAgICAgJ2NhbGMoNTAlICsgODY1cHgpJyxcclxuICAgICAgXSxcclxuICAgICAgbXI6IFsnYXV0bycsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICctMjIwcHgnXSxcclxuICAgICAgbWw6ICdhdXRvJyxcclxuICAgICAgJy5yZWFjdC1tdWx0aS1jYXJvdXNlbC1pdGVtJzoge1xyXG4gICAgICAgIHRyYW5zaXRpb246ICdhbGwgMC4yNXMnLFxyXG4gICAgICB9LFxyXG4gICAgICAnLnJlYWN0LW11bHRpLWNhcm91c2VsLWl0ZW0tLWFjdGl2ZTpudGgtb2YtdHlwZSg0biknOiB7XHJcbiAgICAgICAgb3BhY2l0eTogJzAuNScsXHJcbiAgICAgICAgJ0BtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2MjBweCknOiB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgcmV2aWV3Q2FyZDoge1xyXG4gICAgYm94U2hhZG93OiAnMHB4IDBweCAxcHggcmdiYSgzOCwgNzgsIDExOCwgMC4zNSknLFxyXG4gICAgdHJhbnNpdGlvbjogJ2FsbCAwLjNzJyxcclxuICAgIGJvcmRlclJhZGl1czogJzZweCcsXHJcbiAgICBwOiBbXHJcbiAgICAgICczMHB4IDIwcHggMzVweCcsXHJcbiAgICAgICczMHB4IDI1cHggMzVweCcsXHJcbiAgICAgICczMHB4IDIwcHggMzVweCcsXHJcbiAgICAgICczNXB4IDMwcHggNDBweCA0MHB4JyxcclxuICAgICAgJzMwcHggMzBweCAzNXB4JyxcclxuICAgICAgJzM1cHggMzBweCA0MHB4IDQwcHgnLFxyXG4gICAgXSxcclxuICAgIGJnOiAnd2hpdGUnLFxyXG4gICAgdGV4dEFsaWduOiAnbGVmdCcsXHJcbiAgICBtOiBbXHJcbiAgICAgICcyOHB4IDVweCAzMHB4IDVweCcsXHJcbiAgICAgICcyOHB4IDIwcHggMzBweCAyMHB4JyxcclxuICAgICAgJzI4cHggMTVweCAzMHB4IDE1cHgnLFxyXG4gICAgICAnMjhweCAxNXB4IDMwcHggMTVweCcsXHJcbiAgICAgICczMHB4IDIwcHggNDBweCcsXHJcbiAgICBdLFxyXG4gICAgJyY6aG92ZXInOiB7XHJcbiAgICAgIGJveFNoYWRvdzogJzBweCA2cHggNDdweCByZ2JhKDM4LCA3OCwgMTE4LCAwLjEpJyxcclxuICAgIH0sXHJcbiAgICAnLnJhdGluZyc6IHtcclxuICAgICAgbWI6IFsxLCBudWxsLCBudWxsLCAyXSxcclxuICAgICAgdWw6IHtcclxuICAgICAgICBwbDogMCxcclxuICAgICAgICBsaXN0U3R5bGU6ICdub25lJyxcclxuICAgICAgICBtYjogMCxcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIH0sXHJcbiAgICAgIHN2Zzoge1xyXG4gICAgICAgIG1hcmdpblJpZ2h0OiAnMnB4JyxcclxuICAgICAgICAnJjpsYXN0LW9mLXR5cGUnOiB7XHJcbiAgICAgICAgICBtYXJnaW5SaWdodDogMCxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICAnLnN0YXInOiB7XHJcbiAgICAgICAgY29sb3I6ICd5ZWxsb3cnLFxyXG4gICAgICAgIG1yOiAnMXB4JyxcclxuICAgICAgfSxcclxuICAgICAgJy5zdGFyLW8nOiB7XHJcbiAgICAgICAgY29sb3I6ICcjZGRkJyxcclxuICAgICAgICBtcjogJzFweCcsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgJy5jYXJkLWZvb3Rlcic6IHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgbWFyZ2luVG9wOiBbNSwgbnVsbCwgbnVsbCwgJzMzcHgnXSxcclxuICAgICAgJy5pbWFnZSc6IHtcclxuICAgICAgICBmbGV4U2hyaW5rOiAwLFxyXG4gICAgICAgIG1yOiBbMywgbnVsbCwgbnVsbCwgNF0sXHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGltZzoge1xyXG4gICAgICAgICAgd2lkdGg6ICc1NXB4JyxcclxuICAgICAgICAgIGhlaWdodDogJzU1cHgnLFxyXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcclxuICAgICAgICAgIG9iamVjdEZpdDogJ2NvdmVyJyxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHRpdGxlOiB7XHJcbiAgICBmb250U2l6ZTogWzEsIDJdLFxyXG4gICAgZm9udFdlaWdodDogNzAwLFxyXG4gICAgbWI6IFszLCBudWxsLCBudWxsLCAnMjJweCddLFxyXG4gICAgY29sb3I6ICd0ZXh0JyxcclxuICAgIGxpbmVIZWlnaHQ6IDEuNixcclxuICB9LFxyXG4gIGRlc2NyaXB0aW9uOiB7XHJcbiAgICBmb250U2l6ZTogWzEsIG51bGwsIG51bGwsIDJdLFxyXG4gICAgZm9udFdlaWdodDogJ25vcm1hbCcsXHJcbiAgICBjb2xvcjogJ3RleHQnLFxyXG4gICAgbGluZUhlaWdodDogWzEuODUsIG51bGwsIDJdLFxyXG4gIH0sXHJcbiAgaGVhZGluZzoge1xyXG4gICAgZm9udFNpemU6IFsxLCBudWxsLCBudWxsLCAyXSxcclxuICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICAgIG1iOiAnM3B4JyxcclxuICAgIGNvbG9yOiAndGV4dCcsXHJcbiAgICBsaW5lSGVpZ2h0OiAxLjMsXHJcbiAgfSxcclxuICBkZXNpZ25hdGlvbjoge1xyXG4gICAgY29sb3I6ICcjMjVBMEZGJyxcclxuICAgIGZvbnRXZWlnaHQ6ICc1MDAnLFxyXG4gICAgZm9udFNpemU6IDEsXHJcbiAgICBsaW5lSGVpZ2h0OiAxLjQsXHJcbiAgfSxcclxufTtcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBHcmlkLCBCb3gsIEhlYWRpbmcsIFRleHQgfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCBTZWN0aW9uSGVhZGVyIGZyb20gJ2NvbXBvbmVudHMvc2VjdGlvbi1oZWFkZXInO1xyXG5cclxuaW1wb3J0IFBhdHRlcm5CRyBmcm9tICdhc3NldHMvcGF0dGVybkJHLnBuZyc7XHJcbmltcG9ydCBBcnJvd09kZCBmcm9tICdhc3NldHMvYXJyb3dPZGQucG5nJztcclxuaW1wb3J0IEFycm93RXZlbiBmcm9tICdhc3NldHMvYXJyb3dFdmVuLnBuZyc7XHJcblxyXG5jb25zdCBkYXRhID0gW1xyXG4gIHtcclxuICAgIGlkOiAxLFxyXG4gICAgdGl0bGU6ICdMZWFybiBTa2lsbHMnLFxyXG4gICAgdGV4dDpcclxuICAgICAgJ1RvIGdhaW4gcHJhY3RpY2FsIGtub3dsZWRnZSwgeW91IG5lZWQgdG8gZXhwbG9yZSB2YXJpb3VzIG9wdGlvbnMgYW5kIHNlZSB3aGF0IHdvcmtzIHRoZSBiZXN0LicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMixcclxuICAgIHRpdGxlOiAnIEJ1aWxkIFBvcnRmb2xpbycsXHJcbiAgICB0ZXh0OlxyXG4gICAgICAnd2hlbiBZb3UgcHJhY3RpY2UgeW91IGxlYXJuIGFuZCBhcyB5b3UgbGVhcm4gaXQgc2hvdWxkIGFsc28gZ2l2ZSB5b3Ugd29ydGggYXMgcHJvb2Ygb2YgeW91ciBlZmZvcnRzIGJ5IHByYWN0aWNpbmcgYW5kIHVzaW5nIHRoaXMgcHJhY3RpY2UgdG8gYnVpbGQgYSBzdHJvbmcgcG9ydGZvbGlvIHdpdGggaGVscCB5b3UgaW4gbG9uZyBydW4nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDMsXHJcbiAgICB0aXRsZTogJ0ludGVybnNoaXBzJyxcclxuICAgIHRleHQ6XHJcbiAgICAgICdXaGVuIGl0IGNvbWVzIGRvd24gdG8gcHJhY3RpY2UgeW91ciBza2lsbCBhbmQgbWFrZSBpdCBtb3JlIHVzZWZ1bCB0aGUgYmVzdCB3YXkgdG8gZ2V0IHBhc3MgaXQgYnkgd29ya2luZyBpbiBhIHJlYWwtbGlmZSBlbnZpcm9ubWVudCBpbiB3aGljaCBvdXIgaW50ZXJuc2hpcCBwcm9ncmFtIGhlbHBzIHlvdSB0byBzaGFwZW4geW91ciBza2lsbHMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDQsXHJcbiAgICB0aXRsZTogJ0xhbmQgWW91ciBEcmVhbSBKb2InLFxyXG4gICAgdGV4dDpcclxuICAgICAgJ1dpdGggdGhlIHJpZ2h0IHNraWxsIHNldCAsa25vd2xlZGdlLHByYWN0aWNlIGFuZCBQb3J0Zm9saW8geW91IGNhbiBlYXNsaXkgYWNoaXZlIHdhaHQgaXQgdGFrZSB0byBnZXQgdG8geW91ciBkcmVhbSBKb2IuJyxcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV29ya0Zsb3coKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIHN4PXtzdHlsZXMud29ya2Zsb3d9PlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxTZWN0aW9uSGVhZGVyXHJcbiAgICAgICAgICBzbG9nYW49XCJXaGF0cyB0aGUgZnVuY3Rpb25cIlxyXG4gICAgICAgICAgdGl0bGU9XCJMZXTigJlzIHNlZSBob3cgaXQgd29ya3NcIlxyXG4gICAgICAgICAgaXNXaGl0ZT17dHJ1ZX1cclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8R3JpZCBzeD17c3R5bGVzLmdyaWR9PlxyXG4gICAgICAgICAge2RhdGEubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5jYXJkfSBrZXk9e2l0ZW0uaWR9PlxyXG4gICAgICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5pY29uQm94fT57YDAke2l0ZW0uaWR9YH08L0JveD5cclxuICAgICAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMud3JhcHBlcn0+XHJcbiAgICAgICAgICAgICAgICA8SGVhZGluZyBzeD17c3R5bGVzLndyYXBwZXIudGl0bGV9PntpdGVtLnRpdGxlfTwvSGVhZGluZz5cclxuICAgICAgICAgICAgICAgIDxUZXh0IHN4PXtzdHlsZXMud3JhcHBlci5zdWJUaXRsZX0+e2l0ZW0udGV4dH08L1RleHQ+XHJcbiAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgd29ya2Zsb3c6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ3ByaW1hcnknLFxyXG4gICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7UGF0dGVybkJHfSlgLFxyXG4gICAgYmFja2dyb3VuZFJlcGVhdDogYG5vLXJlcGVhdGAsXHJcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXIgY2VudGVyJyxcclxuICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICBweTogWzgsIG51bGwsIDksIG51bGwsIG51bGwsIDEwXSxcclxuICAgICcmOjpiZWZvcmUnOiB7XHJcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICBjb250ZW50OiAnXCJcIicsXHJcbiAgICAgIHRvcDogMCxcclxuICAgICAgcmlnaHQ6IDAsXHJcbiAgICAgIGJhY2tncm91bmQ6XHJcbiAgICAgICAgJ2xpbmVhci1ncmFkaWVudCgtNDVkZWcsIHJnYmEoNDIsNzIsMTI1LCAwLjMpIDI1JSwgdHJhbnNwYXJlbnQgMjUlLCB0cmFuc3BhcmVudCA1MCUsIHJnYmEoNDIsNzIsMTI1LCAwLjMpIDUwJSwgcmdiYSg0Miw3MiwxMjUsIDAuMykgNzUlLCB0cmFuc3BhcmVudCA3NSUsIHRyYW5zcGFyZW50KScsXHJcbiAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgIGJhY2tncm91bmRTaXplOiAnMzUwcHggMzUwcHgnLFxyXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgb3BhY2l0eTogMC4zLFxyXG4gICAgICB6SW5kZXg6IDAsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZ3JpZDoge1xyXG4gICAgbWI6IC0xLFxyXG4gICAgcHQ6IDAsXHJcbiAgICBncmlkR2FwOiBbXHJcbiAgICAgICczNXB4IDAnLFxyXG4gICAgICBudWxsLFxyXG4gICAgICAnNDVweCA1MHB4JyxcclxuICAgICAgbnVsbCxcclxuICAgICAgJzUwcHggMjVweCcsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgICc1MHB4IDY1cHgnLFxyXG4gICAgXSxcclxuICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFtcclxuICAgICAgJ3JlcGVhdCgxLDFmciknLFxyXG4gICAgICBudWxsLFxyXG4gICAgICAncmVwZWF0KDIsMWZyKScsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgICdyZXBlYXQoNCwxZnIpJyxcclxuICAgIF0sXHJcbiAgfSxcclxuICBjYXJkOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgdGV4dEFsaWduOiBbJ2NlbnRlcicsIG51bGwsICdsZWZ0J10sXHJcbiAgICB3aWR0aDogWycxMDAlJywgJzgwJScsICcxMDAlJ10sXHJcbiAgICBteDogJ2F1dG8nLFxyXG4gICAgJyY6OmJlZm9yZSc6IHtcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcclxuICAgICAgdG9wOiAwLFxyXG4gICAgICBsZWZ0OiBbMCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgNzUsIG51bGwsIDEwMF0sXHJcbiAgICAgIGJhY2tncm91bmRSZXBlYXQ6IGBuby1yZXBlYXRgLFxyXG4gICAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXIgY2VudGVyJyxcclxuICAgICAgd2lkdGg6IDIxNSxcclxuICAgICAgaGVpZ2h0OiA2MCxcclxuICAgICAgb3BhY2l0eTogMC4zLFxyXG4gICAgICAnQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMjIwcHgpJzoge1xyXG4gICAgICAgIGRpc3BsYXk6ICdub25lJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICAnJjpudGgtb2YtdHlwZSgybi0xKTo6YmVmb3JlJzoge1xyXG4gICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtBcnJvd09kZH0pYCxcclxuICAgIH0sXHJcbiAgICAnJjpudGgtb2YtdHlwZSgybik6OmJlZm9yZSc6IHtcclxuICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7QXJyb3dFdmVufSlgLFxyXG4gICAgICB0b3A6IDE3LFxyXG4gICAgfSxcclxuICAgICcmOmxhc3QtY2hpbGQ6OmJlZm9yZSc6IHtcclxuICAgICAgZGlzcGxheTogJ25vbmUnLFxyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICBpY29uQm94OiB7XHJcbiAgICB3aWR0aDogWyc1MHB4JywgbnVsbCwgJzYwcHgnLCBudWxsLCBudWxsLCAnNzBweCddLFxyXG4gICAgaGVpZ2h0OiBbJzUwcHgnLCBudWxsLCAnNjBweCcsIG51bGwsIG51bGwsICc3MHB4J10sXHJcbiAgICBmbGV4U2hyaW5rOiAwLFxyXG4gICAgYm9yZGVyUmFkaXVzOiBbMTUsIG51bGwsIDIzLCBudWxsLCBudWxsLCAzMF0sXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIG1iOiBbNSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgNl0sXHJcbiAgICBteDogWydhdXRvJywgbnVsbCwgMF0sXHJcbiAgICBmb250U2l6ZTogWzYsIG51bGwsIDcsIG51bGwsIG51bGwsICczMHB4J10sXHJcbiAgICBmb250V2VpZ2h0OiA3MDAsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICBjb2xvcjogJyMyMzQ1ODInLFxyXG4gIH0sXHJcbiAgd3JhcHBlcjoge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgbXQ6ICctNXB4JyxcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgIGZvbnRTaXplOiBbMywgbnVsbCwgNCwgbnVsbCwgbnVsbCwgNV0sXHJcbiAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICBsaW5lSGVpZ2h0OiBbMS40LCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAxLjU1XSxcclxuICAgICAgcHI6IFswLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAyXSxcclxuICAgICAgbWI6IFsyLCAzXSxcclxuICAgIH0sXHJcblxyXG4gICAgc3ViVGl0bGU6IHtcclxuICAgICAgZm9udFNpemU6IDEsXHJcbiAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcclxuICAgICAgbGluZUhlaWdodDogWzEuODUsIG51bGwsIG51bGwsIDEuOSwgMl0sXHJcbiAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICBvcGFjaXR5OiAwLjY1LFxyXG4gICAgICBwcjogWzAsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDVdLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgLy8gZXhhbXBsZSBjb2xvcnMgd2l0aCBkYXJrIG1vZGVcclxuICBjb2xvcnM6IHtcclxuICAgIHRleHQ6ICcjMzQzRDQ4JywgLy8gYm9keSBjb2xvciBhbmQgcHJpbWFyeSBjb2xvclxyXG4gICAgdGV4dF9zZWNvbmRhcnk6ICcjMDIwNzNFJywgLy8gc2Vjb25kYXJ5IGJvZHkgY29sb3JcclxuICAgIGhlYWRpbmc6ICcjMjQ0ODg2JywgLy8gcHJpbWFyeSBoZWFkaW5nIGNvbG9yXHJcbiAgICBoZWFkaW5nX3NlY29uZGFyeTogJyMwRjIxMzcnLCAvLyBoZWFkaW5nIGNvbG9yXHJcbiAgICBiYWNrZ3JvdW5kOiAnI0ZGRkZGRicsIC8vIGJvZHkgYmFja2dyb3VuZCBjb2xvclxyXG4gICAgYmFja2dyb3VuZF9zZWNvbmRhcnk6ICcjRjlGQkZEJywgLy8gc2Vjb25kYXJ5IGJhY2tncm91bmQgY29sb3JcclxuICAgIGJvcmRlcl9jb2xvcjogJyNFNUVDRjQnLCAvLyBib3JkZXIgY29sb3JcclxuICAgIHByaW1hcnk6ICcjMUYzRTc2JywgLy8gcHJpbWFyeSBidXR0b24gYW5kIGxpbmsgY29sb3JcclxuICAgIHNlY29uZGFyeTogJyMyNUNCOUUnLCAvLyBzZWNvbmRhcnkgY29sb3IgLSBjYW4gYmUgdXNlZCBmb3IgaG92ZXIgc3RhdGVzXHJcbiAgICBtdXRlZDogJyM3QjgxODgnLCAvLyBtdXRlZCBjb2xvclxyXG4gICAgYWNjZW50OiAnIzYwOScsIC8vIGEgY29udHJhc3QgY29sb3IgZm9yIGVtcGhhc2l6aW5nIFVJXHJcbiAgICB5ZWxsb3c6ICcjRjZDNDE2JyxcclxuXHJcbiAgICAvLyBoaWdobGlnaHRcdGEgYmFja2dyb3VuZCBjb2xvciBmb3IgaGlnaGxpZ2h0aW5nIHRleHRcclxuICAgIG1vZGVzOiB7XHJcbiAgICAgIGRhcms6IHtcclxuICAgICAgICB0ZXh0OiAnI2ZmZicsXHJcbiAgICAgICAgYmFja2dyb3VuZDogJyMwMDAnLFxyXG4gICAgICAgIHByaW1hcnk6ICcjMGNmJyxcclxuICAgICAgICBzZWNvbmRhcnk6ICcjMDljJyxcclxuICAgICAgICBtdXRlZDogJyMxMTEnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGJyZWFrcG9pbnRzOiBbXHJcbiAgICAnNDgwcHgnLFxyXG4gICAgJzY0MHB4JyxcclxuICAgICc3NjhweCcsXHJcbiAgICAnMTAyNHB4JyxcclxuICAgICcxMjIwcHgnLFxyXG4gICAgJzEzNjZweCcsXHJcbiAgICAnMTYyMHB4JyxcclxuICBdLFxyXG4gIGZvbnRzOiB7XHJcbiAgICBib2R5OiBcIidETSBTYW5zJywgc2Fucy1zZXJpZlwiLFxyXG4gICAgaGVhZGluZzogXCInRE0gU2FucycsIHNhbnMtc2VyaWZcIixcclxuICB9LFxyXG4gIGZvbnRTaXplczogWzEyLCAxNSwgMTYsIDE4LCAyMCwgMjIsIDI0LCAyOCwgMzIsIDM2LCA0MiwgNDgsIDUyLCA2NF0sXHJcbiAgZm9udFdlaWdodHM6IHtcclxuICAgIGJvZHk6ICdub3JtYWwnLFxyXG4gICAgaGVhZGluZzogNTAwLFxyXG4gICAgYm9sZDogNzAwLFxyXG4gIH0sXHJcbiAgbGluZUhlaWdodHM6IHtcclxuICAgIGJvZHk6IDEuOCxcclxuICAgIGhlYWRpbmc6IDEuNSxcclxuICB9LFxyXG4gIGxldHRlclNwYWNpbmdzOiB7XHJcbiAgICBib2R5OiAnbm9ybWFsJyxcclxuICAgIGNhcHM6ICcwLjJlbScsXHJcbiAgICBoZWFkaW5nOiAnLTAuNXB4JyxcclxuICB9LFxyXG4gIHNwYWNlOiBbMCwgNSwgMTAsIDE1LCAyMCwgMjUsIDMwLCA1MCwgODAsIDEwMCwgMTIwLCAxNTBdLFxyXG4gIC8vIHZhcmlhbnRzIGNhbiB1c2UgY3VzdG9tLCB1c2VyLWRlZmluZWQgbmFtZXNcclxuICBsYXlvdXQ6IHtcclxuICAgIGNvbnRhaW5lcjoge1xyXG4gICAgICBtYXhXaWR0aDogW1xyXG4gICAgICAgICcxMDAlJyxcclxuICAgICAgICBudWxsLFxyXG4gICAgICAgIG51bGwsXHJcbiAgICAgICAgJzc4MHB4JyxcclxuICAgICAgICAnMTAyMHB4JyxcclxuICAgICAgICAnMTIwMHB4JyxcclxuICAgICAgICBudWxsLFxyXG4gICAgICAgICcxMzEwcHgnLFxyXG4gICAgICBdLFxyXG4gICAgICBweDogWzQsIDZdLFxyXG4gICAgfSxcclxuICAgIGhlYWRlcjoge1xyXG4gICAgICBjb2xvcjogJyMwMjA3M0UnLFxyXG4gICAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcclxuICAgICAgcHk6IDMsXHJcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgfSxcclxuICAgIHRvb2xiYXI6IHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcclxuICAgIH0sXHJcbiAgICBtYWluOiB7fSxcclxuICB9LFxyXG4gIHNlY3Rpb246IHtcclxuICAgIGtleUZlYXR1cmU6IHtcclxuICAgICAgcHk6IFs4LCBudWxsLCA5LCBudWxsLCBudWxsLCAxMF0sXHJcbiAgICB9LFxyXG4gICAgZmVhdHVyZToge1xyXG4gICAgICBweTogWzgsIG51bGwsIDksIG51bGwsIG51bGwsIDEwXSxcclxuICAgIH0sXHJcbiAgICBwYXJ0bmVyOiB7XHJcbiAgICAgIHB0OiBbMiwgbnVsbCwgbnVsbCwgNV0sXHJcbiAgICAgIHBiOiBbOCwgbnVsbCwgOSwgbnVsbCwgbnVsbCwgMTBdLFxyXG4gICAgfSxcclxuICAgIHRlc3RpbW9uaWFsOiB7XHJcbiAgICAgIHB5OiBbOCwgbnVsbCwgOSwgbnVsbCwgbnVsbCwgMTBdLFxyXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICB9LFxyXG4gICAgc2VjdXJlUGF5bWVudDoge1xyXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICBwdDogOSxcclxuICAgIH0sXHJcbiAgICBmYXE6IHtcclxuICAgICAgcHk6IFs4LCBudWxsLCA5LCBudWxsLCBudWxsLCAxMF0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc2VjdGlvbkhlYWRlcjoge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBtdDogLTEsXHJcbiAgICBtYXJnaW5Cb3R0b206IFsnNTBweCcsIG51bGwsICc2MHB4JywgbnVsbCwgJzY1cHgnLCAnNzVweCddLFxyXG4gICAgdGl0bGU6IHtcclxuICAgICAgZm9udFNpemU6IFsnMjRweCcsIG51bGwsICcyOHB4JywgbnVsbCwgbnVsbCwgJzMycHgnLCBudWxsLCAnMzZweCddLFxyXG4gICAgICBjb2xvcjogJ2hlYWRpbmdfc2Vjb25kYXJ5JyxcclxuICAgICAgbGluZUhlaWdodDogWzEuMywgbnVsbCwgbnVsbCwgMS4yXSxcclxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgZm9udFdlaWdodDogJzcwMCcsXHJcbiAgICAgIGxldHRlclNwYWNpbmc6ICctLjVweCcsXHJcbiAgICB9LFxyXG5cclxuICAgIHN1YlRpdGxlOiB7XHJcbiAgICAgIGZvbnRTaXplOiBbMCwgbnVsbCwgJzE0cHgnXSxcclxuICAgICAgY29sb3I6ICdoZWFkaW5nJyxcclxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgbGV0dGVyU3BhY2luZzogWycxLjVweCcsIG51bGwsICcycHgnXSxcclxuICAgICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICc3MDAnLFxyXG4gICAgICBtYjogJzhweCcsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IDEuNSxcclxuICAgIH0sXHJcbiAgfSxcclxuICB0ZXh0OiB7XHJcbiAgICBoZWFkaW5nOiB7XHJcbiAgICAgIGZvbnRGYW1pbHk6ICdoZWFkaW5nJyxcclxuICAgICAgbGluZUhlaWdodDogJ2hlYWRpbmcnLFxyXG4gICAgICBmb250V2VpZ2h0OiAnaGVhZGluZycsXHJcbiAgICAgIGZvbnRTaXplOiA0LFxyXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAnaGVhZGluZycsXHJcbiAgICAgIGNvbG9yOiAnaGVhZGluZycsXHJcbiAgICB9LFxyXG4gICAgaGVyb1ByaW1hcnk6IHtcclxuICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgIGZvbnRTaXplOiBbXHJcbiAgICAgICAgJzQwcHgnLFxyXG4gICAgICAgICc1MnB4JyxcclxuICAgICAgICAnNjBweCcsXHJcbiAgICAgICAgJzQ4cHgnLFxyXG4gICAgICAgICc1MnB4JyxcclxuICAgICAgICAnNjBweCcsXHJcbiAgICAgICAgJzY2cHgnLFxyXG4gICAgICAgICc3OHB4JyxcclxuICAgICAgXSxcclxuICAgICAgbGluZUhlaWdodDogMS4yLFxyXG4gICAgICBmb250V2VpZ2h0OiA3MDAsXHJcbiAgICAgIG1iOiBbNSwgbnVsbCwgbnVsbCwgbnVsbCwgJzMwcHgnXSxcclxuICAgIH0sXHJcbiAgICBoZXJvU2Vjb25kYXJ5OiB7XHJcbiAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICBmb250U2l6ZTogWzIsIDMsIDQsICcxN3B4JywgbnVsbCwgMywgJzE5cHgnLCA0XSxcclxuICAgICAgbGluZUhlaWdodDogWzIsIG51bGwsIG51bGwsIG51bGwsIDIuMl0sXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2R5JyxcclxuICAgICAgcHI6IFswLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAnMTAwcHgnLCBudWxsLCAnMTI1cHgnXSxcclxuICAgICAgbWI6IFsnMzVweCcsIG51bGwsIG51bGwsIG51bGwsICc0MHB4JywgbnVsbCwgbnVsbCwgN10sXHJcbiAgICB9LFxyXG4gICAgdGl0bGU6IHtcclxuICAgICAgLy8gZXh0ZW5kcyB0aGUgdGV4dC5oZWFkaW5nIHN0eWxlc1xyXG4gICAgICB2YXJpYW50OiAndGV4dC5oZWFkaW5nJyxcclxuICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gICAgICBmb250U2l6ZTogMTgsXHJcbiAgICAgIGxpbmVIZWlnaHQ6ICczMHB4JyxcclxuICAgICAgY29sb3I6ICcjMEYyMTM3JyxcclxuICAgIH0sXHJcbiAgICBsZWFkOiB7XHJcbiAgICAgIGZvbnRTaXplOiA0MCxcclxuICAgICAgZm9udEZhbWlseTogJ0RNIFNhbnMnLFxyXG4gICAgICBmb250V2VpZ2h0OiAnNTAwJyxcclxuICAgICAgbGluZUhlaWdodDogJzYwcHgnLFxyXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAnLTEuNXB4JyxcclxuICAgICAgY29sb3I6ICcjMEYyMTM3JyxcclxuICAgIH0sXHJcbiAgICBtdXRlZDoge1xyXG4gICAgICBsaW5lSGVpZ2h0OiAnMjZweCcsXHJcbiAgICAgIGNvbG9yOiAnbXV0ZWQnLFxyXG4gICAgfSxcclxuICAgIHNlY29uZGFyeToge1xyXG4gICAgICBmb250V2VpZ2h0OiA1MDAsXHJcbiAgICAgIGNvbG9yOiAnIzAwQTk5RCcsXHJcbiAgICAgIGxpbmVIZWlnaHQ6ICc0MHB4JyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBsaW5rczoge1xyXG4gICAgZGVmYXVsdDoge1xyXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgIH0sXHJcbiAgICBib2xkOiB7XHJcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICAgIH0sXHJcbiAgICBuYXY6IHtcclxuICAgICAgZGlzcGxheTogWydub25lJywgbnVsbCwgJ2lubGluZS1ibG9jayddLFxyXG4gICAgICBweDogMjUsXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxyXG4gICAgfSxcclxuICAgIGZvb3Rlcjoge1xyXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgICBweDogMCxcclxuICAgICAgY29sb3I6ICdpbmhlcml0JyxcclxuICAgICAgdGV4dERlY29yYXRpb246ICdub25lJyxcclxuICAgIH0sXHJcbiAgICBsb2dvOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBpbWFnZXM6IHtcclxuICAgIGF2YXRhcjoge1xyXG4gICAgICB3aWR0aDogNDgsXHJcbiAgICAgIGhlaWdodDogNDgsXHJcbiAgICAgIGJvcmRlclJhZGl1czogOTk5OTksXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgLy8gdmFyaWFudHMgZm9yIGJ1dHRvbnNcclxuICBidXR0b25zOiB7XHJcbiAgICBtZW51OiB7XHJcbiAgICAgIGRpc3BsYXk6IFtudWxsLCBudWxsLCAnbm9uZSddLFxyXG4gICAgfSwgLy8gZGVmYXVsdCB2YXJpYW50IGZvciBNZW51QnV0dG9uXHJcbiAgICAvLyB5b3UgY2FuIHJlZmVyZW5jZSBvdGhlciB2YWx1ZXMgZGVmaW5lZCBpbiB0aGUgdGhlbWVcclxuICAgIGRlZmF1bHRCdG46IHtcclxuICAgICAgYm9yZGVyUmFkaXVzOiAnNDVweCcsXHJcbiAgICAgIGZvbnRTaXplOiBbJzE0cHgnLCAxLCBudWxsLCBudWxsLCAyXSxcclxuICAgICAgbGV0dGVyU3BhY2luZ3M6IFsnLTAuNXB4JywgbnVsbCwgbnVsbCwgbnVsbCwgJy0wLjE1cHgnXSxcclxuICAgICAgcGFkZGluZzogWycxMXB4IDIwcHggMTBweCcsIG51bGwsIG51bGwsIG51bGwsICcxM3B4IDMwcHgnXSxcclxuICAgICAgZm9udEZhbWlseTogJ2JvZHknLFxyXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICAgbGluZUhlaWdodDogMS4yLFxyXG4gICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuMjVzJyxcclxuICAgICAgZm9udFdlaWdodDogNTAwLFxyXG4gICAgICAnJjpmb2N1cyc6IHtcclxuICAgICAgICBvdXRsaW5lOiAwLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHByaW1hcnk6IHtcclxuICAgICAgdmFyaWFudDogJ2J1dHRvbnMuZGVmYXVsdEJ0bicsXHJcbiAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICBiZzogJ3ByaW1hcnknLFxyXG4gICAgICAnJjpob3Zlcic6IHtcclxuICAgICAgICBib3hTaGFkb3c6ICdyZ2JhKDMxLCA2MiwgMTE4LCAwLjU3KSAwcHggOXB4IDIwcHggLTVweCcsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgd2hpdGVCdXR0b246IHtcclxuICAgICAgdmFyaWFudDogJ2J1dHRvbnMuZGVmYXVsdEJ0bicsXHJcbiAgICAgIGNvbG9yOiAnaGVhZGluZ19zZWNvbmRhcnknLFxyXG4gICAgICBiZzogJ3doaXRlJyxcclxuICAgICAgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgYm94U2hhZG93OiAncmdiYSgwLCAwLCAwLCAwLjUpIDBweCAxMnB4IDI0cHggLTEwcHgnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHNlY29uZGFyeToge1xyXG4gICAgICB2YXJpYW50OiAnYnV0dG9ucy5kZWZhdWx0QnRuJyxcclxuICAgICAgYm9yZGVyOiAnMS41cHggc29saWQgd2hpdGUnLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXHJcbiAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAnJjpob3Zlcic6IHtcclxuICAgICAgICBiZzogJ3doaXRlJyxcclxuICAgICAgICBjb2xvcjogJ2hlYWRpbmdfc2Vjb25kYXJ5JyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB0ZXh0QnV0dG9uOiB7XHJcbiAgICAgIHZhcmlhbnQ6ICdidXR0b25zLmRlZmF1bHRCdG4nLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXHJcbiAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICBzdmc6IHtcclxuICAgICAgICBmb250U2l6ZTogWzQsIDZdLFxyXG4gICAgICAgIG1yOiAyLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGNhcmRzOiB7XHJcbiAgICBwcmltYXJ5OiB7XHJcbiAgICAgIHBhZGRpbmc6IDIsXHJcbiAgICAgIGJvcmRlclJhZGl1czogNCxcclxuICAgIH0sXHJcbiAgICBvZmZlcjoge1xyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICBmbGV4OiBbJzEgMSBjYWxjKDUwJSAtIDE2cHgpJywgJzEgMSAyMCUnXSxcclxuICAgICAgbWluSGVpZ2h0OiAxMzAsXHJcbiAgICAgIG06IDIsXHJcbiAgICAgIGJhY2tncm91bmQ6ICcjRkZGRkZGJyxcclxuICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICNFREVGRjYnLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IDUsXHJcbiAgICB9LFxyXG4gICAgZmVhdHVyZUNhcmQ6IHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCcsXHJcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxyXG4gICAgICBwOiAzLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGZvcm1zOiB7XHJcbiAgICBsYWJlbDoge1xyXG4gICAgICBmb250U2l6ZTogMSxcclxuICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gICAgfSxcclxuICAgIGlucHV0OiB7XHJcbiAgICAgIGJvcmRlclJhZGl1czogOCxcclxuICAgICAgYm9yZGVyQ29sb3I6ICdib3JkZXJfY29sb3InLFxyXG4gICAgICBoZWlnaHQ6IDYwLFxyXG4gICAgICAnJjpmb2N1cyc6IHtcclxuICAgICAgICBib3JkZXJDb2xvcjogJ3ByaW1hcnknLFxyXG4gICAgICAgIGJveFNoYWRvdzogKHQpID0+IGAwIDAgMCAycHggJHt0LmNvbG9ycy5wcmltYXJ5fWAsXHJcbiAgICAgICAgb3V0bGluZTogJ25vbmUnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICBiYWRnZXM6IHtcclxuICAgIHByaW1hcnk6IHtcclxuICAgICAgY29sb3I6ICdiYWNrZ3JvdW5kJyxcclxuICAgICAgYmc6ICcjMjhBNUZGJyxcclxuICAgICAgYm9yZGVyUmFkaXVzOiAzMCxcclxuICAgICAgcDogJzNweCAxMXB4JyxcclxuICAgICAgZm9udFNpemU6IDEsXHJcbiAgICAgIGxldHRlclNwYWNpbmc6ICctMC41cHgnLFxyXG4gICAgfSxcclxuICAgIG91dGxpbmU6IHtcclxuICAgICAgY29sb3I6ICdwcmltYXJ5JyxcclxuICAgICAgYmc6ICd0cmFuc3BhcmVudCcsXHJcbiAgICAgIGJveFNoYWRvdzogJ2luc2V0IDAgMCAwIDFweCcsXHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIHN0eWxlczoge1xyXG4gICAgLy8gVG8gYWRkIGJhc2UsIHRvcC1sZXZlbCBzdHlsZXMgdG8gdGhlIDxib2R5PiBlbGVtZW50LCB1c2UgdGhlbWUuc3R5bGVzLnJvb3QuXHJcbiAgICByb290OiB7XHJcbiAgICAgIGZvbnRGYW1pbHk6ICdib2R5JyxcclxuICAgICAgbGluZUhlaWdodDogJ2JvZHknLFxyXG4gICAgICBmb250V2VpZ2h0OiAnYm9keScsXHJcbiAgICAgIGZvbnRTbW9vdGhpbmc6ICdhbnRpYWxpYXNlZCcsXHJcbiAgICAgICcubW9kYWwtdmlkZW8tY2xvc2UtYnRuJzoge1xyXG4gICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICAgIHRvcDogJy0yNXB4JyxcclxuICAgICAgICByaWdodDogJy0yNXB4JyxcclxuICAgICAgICB3aWR0aDogJyAyNXB4JyxcclxuICAgICAgICBoZWlnaHQ6ICcyNXB4JyxcclxuICAgICAgfSxcclxuICAgICAgJy5tb2RhbC12aWRlby1tb3ZpZS13cmFwJzoge1xyXG4gICAgICAgIG1hcmdpbjogNixcclxuICAgICAgICB3aWR0aDogJ2F1dG8nLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIC8vIERpdmlkZXIgc3R5bGVzXHJcbiAgICBocjoge1xyXG4gICAgICBib3JkZXI6IDAsXHJcbiAgICAgIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCcsXHJcbiAgICAgIGJvcmRlckNvbG9yOiAnI0Q5RTBFNycsXHJcbiAgICB9LFxyXG4gICAgLy8gYWxzbyB5b3UgY2FuIHVzZSBvdGhlciBIVE1MIGVsZW1lbnRzIHN0eWxlIGhlcmVcclxuICAgIHVsOiB7XHJcbiAgICAgIGxpc3RTdHlsZTogJ25vbmUnLFxyXG4gICAgfSxcclxuICAgIHNyT25seToge1xyXG4gICAgICBib3JkZXI6ICcwICFpbXBvcnRhbnQnLFxyXG4gICAgICBjbGlwOiAncmVjdCgxcHgsIDFweCwgMXB4LCAxcHgpICFpbXBvcnRhbnQnLFxyXG4gICAgICBjbGlwUGF0aDogJ2luc2V0KDUwJSkgIWltcG9ydGFudCcsXHJcbiAgICAgIGhlaWdodDogJzFweCAhaW1wb3J0YW50JyxcclxuICAgICAgbWFyZ2luOiAnLTFweCAhaW1wb3J0YW50JyxcclxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4gIWltcG9ydGFudCcsXHJcbiAgICAgIHBhZGRpbmc6ICcwICFpbXBvcnRhbnQnLFxyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlICFpbXBvcnRhbnQnLFxyXG4gICAgICB3aWR0aDogJzFweCAhaW1wb3J0YW50JyxcclxuICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCAhaW1wb3J0YW50JyxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGVtb3Rpb24vY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmcmFtZXItbW90aW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyYy1kcmF3ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtY3VzdG9tLXNjcm9sbGJhcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMvZmFcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMvaW9cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbW9kYWwtdmlkZW9cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbXVsdGktY2Fyb3VzZWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc2Nyb2xsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXN0aWNreW5vZGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidGhlbWUtdWlcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==