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

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAABuwAAAbsBOuzj4gAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAA0GSURBVHic5Zt5dFRVtsZ/O/MESUhIgEAGEgYFwigQBsFAUBADRkER2uezIQ4gOD0Ru+2Wp77X0A3SiJ0GRZpJUSE0kEae0Ai0HQyKEMIQEiSEPAhkgEDm8fQft6qoVN1KKiQxuPpb666qe+4+++793XPO3XufKlFK0ZYQEU9gETAGiASuAD8AK5RSKa1ugFKqzQ5gKPAjoHSOGuB/AcfWtEHaagSIiA9wCugCENUvgmF9upNbUETSP1MpLa80ir6vlJrfana0IQGrgXiAVa/O4tm4+0zXsi4XMO2NDziecRG00TBeKbW/VexoQwJygK4PjR7A9iUvWF3PLbxBvxm/pqikDCBZKTWyNexwaA2ljUFE/IGuADFD++jKdPbzZs7UMcbTASLi2Bq2tAkBQDlQB5jPdStEdA0wfvXAQFhLo00IUEqVApkAW/d/T21dna7cyR8vmZ+OEZEHRWSsiLi2lC1tNQIANgIcTb/Aog+2YrkWnfv/PNbuOmTetB5IAr4GLorIYhEJoJloy0XQCfgWGAwQPeQu5k0bR2c/H5LTzvHOxzu5XlzWmJoiYL5SauNt29GWkaCIhKA91b62ZFzbeRMRE0fvBx/H2cOLrIO7yTr0JXmnfzAX+yvwjFIqr8k23AGhsBPwPLAY8DG/NujJBYx+dQmOLtZT/vyBJPa+GU9pfq6xqQB4Xin1RZPu39YEAIhIKLANGATaU7//f9YREfNwg/0qblxj/9svkJ70iXnzZ8BcpVShXfduawJEJBb4C+ALENhnMJNXfI53t+5268jcm8i+3z5L+bV8Y9MVIF4ptavR+9siQETaA68AI9GytCzgO7Qs7Zzd1tm6sTb0f2e4BwADZs5jzOvLcHR2abK+8mv57HvrOTK/2mbevB5tWthcTXUJEJExwAYgWKdPGfCaUuqDJlt5S383tKEaBeDi1Z4J766l5/2P3q5KE46s+R3fLF9k3vQ9EKuUytWTtyJARIKAkxgWpBGREQzoEczFq4V8lXKKquoao+hkpdTfmmqgiExCI9cPIODugUxe8QU+weFNVWWFi4f/TtJLj1FRZDX9LwCDlFLXrezRIWAHEOvgIGxe/AzTxt1junbq/CUeWLCM3MIboM2z8IaGl4VeR+AdYCEgAP1nPMfYRe/prvIoRXbyXk58tobKm9fpO202vR+cYVP/0XXLOfSH11C1tQAMGr2I4qILZKZ9ahTZqpSa1iABBiNLALc5U8aQsPBJqxtt2ZvCrN+uMZ6OVEol2+G8K/AlcB+Ai2c7Yt7+kF6THrOSrSgq5GTiOk5sWU3RxfpLTY+YOMa9lYCH360AsKainK9+Pdv0JnBy9iB66joi+kynprqMbR8Np/BqmlH8EaVUorlOy1C4N+AGMH7o3brOjL+nXvY2sEHPARERYDkG5zv27s/MxKNWzuceP8yehU+y+t4gDi39L3Pny9De8WTuTWT95D5k/N9WAG5ezmbLEyNNzrfzCSHul/8kos90ExkPPJaIi5u3UdfzlvY5WZx3MH7x8/bSdcjP27PeqY7DzsADwCxgHNpa4ggQdu9EHno/ESdXNwCqy0o4s2szqZ8mkJ+eaqnqNPBntPXCCfgAeKz8egFJC6YRHh3L5WPJlF8vACAodCz3T/8CNw//ekq8O0TQK/IXpB1ZBRAtImFKqSxbBBwDqgCXzJyrjB3U24qAzJx60WammeMjDE5P1yMGILDvEBydXSjISCP10wTO7NxEVWmxuUgVkAj8WSl10KL74yKSCPwJ8Ptx/07Thb5D5zLqgRU4OFi6o6FTtxFGAgQYgfZKBywIUEqViMg3QPSHOw7yn5NH4+RYf5YkbKtXmSoXkbeBmUCY+QU3LyeGTOyKg5MD327Ppqqilm//9DbHNr1P5c0iSxsvAGuAtQ3F80qpz0XkILAamALg5uHPiJilNp03EmCGenbq9doJRP+Qns3U11by3osz6NEtkMIbJfx+05es2vp3c9nt5ieOTg70G9uJqEdCGDghCBc3rYiTn13CmWTNLzPn64DdQAKwRymlXxSwgFLqKjBVRFYCL1SUFXA8+Q8MGfMbm33a+YTg7tmR8tJ8sIht9F6DDmhzb46xzdPdteHKzRB/ouJCGBYbjJfvrSiutqaOHctPsfOPp41Np4AzaFNts1Iq2w6fdWF4Y30NjHZ28WL260WIg+2q2cYVoRQXZQOsV0o9ZWy3GgGGJxEvIqXAi6Bftuoc0Z6ouBCiHg6hY7Cn1fVLZ2+wZn4K2SdNsUcWMMbeJKUxKKVqRWQzMLq6qoSia5n4+mtrVsGVVC6c3UmfIc/g7tlwzUR34oiIH4bMzBzeAW4MmxLMiLhQQiN99Q2rU+xZc5ZtS9KoqTKN6mPA4y3lvBkOG79cu5pmIuDArnjyLh2huqqEqJglDSqwIkBE7gJ2AeEAbp5ODJ7Ylai4EO4eFYiDo9hUlp9dwocvHSEjxZSV1aIlPIuVUtVNcs0+3DR+qa4uNTWWl14FoMzw2RDqEWCYV0lAd4AJc3ry6MJIXNwbr0gf2PQjW/77OBWlplwhA3jyJ9nfawYsR8AUDM4/srAfD83XjwbNUZRXzsevfMeJ/aZkS6EFLQvtzRPaEpYEDAIQgVHTw3TE6yNl50U2LDpKaVGVsSkHeFopta9FrWxFWBIQBNChiwe+ndxtdqoqr2Xty0dI2XnRvHkj8IJS6kaLW9mKsCRAW+HE9kIHsPfjDHPnC9AqsokNdLljYTt+bAC5mabFtxDoa4jOfpZo7s5Qyc/ZeWjbrbE7Arc1BfQgImGAN3BaKVXVmHwz7tMDeAStcGPaSMlK/yvFRRcAqKzQEq7CK8f57sBb9dos0VwCvERkGTAJrZoEUCUie4DnlFKXm6m/HkRkJlra7GF5LSt9B1npO+q1FVxJpeCKVaGlHpo7BfyAl7nlPIALEAucFJFhzdQPgIi4iMgqYBM6zjcHTR4BhZfKOJ96rRZDmUvEgbDeUwjtFYubewcuZCRx+uhHgPIFNojIAKVU+e0aaNhD+AIYBuDv7crmhUOZMDiwSXpCf7Gb7DzrwLRJBBz85Dwbf3W0qqaqzgXAu0M40VP/QufgUbdu1CuWgC73cGBXPEBPtLrCyiZZa4CIxACfAP4AQ3t1YOubw+nWseUGgS4BxYUVJDx3uF5b4eUyzn1fAOACQt97niUq5vc4u1jXAu4ePIfUw8u5XpAOWg2uSQQYKsm/QtsxdgB4/qFw3nu2Py5OLfvi0iWgqrzWMsw1wcu7G/fFrqVbeEyDiv07DTAS0L8pBomIL1pY/SCAp5sTqxcMYma03i5d86FLgIODE+071N+qEnEgKCya4dHvmtfZbcLBybTbYzupsICIDAK2Yihc9urajm2/iaJPSHt7VTQZugR4tg/iiXnpdinIPLmF7Iy/0bPfEwT3mHjbhojIL4FVGDZmHh3dlY9fGUI798aXqQ37snl5dSol5VotIsDHjU9eH8qovv6N9GxGHHA9/zSHds/jUtbXABReTb0tAkTEDa1+8DSAk6OwdHYkL8X1sFtHUkouhTdvxV45+WWs35d9WwScBvDtaLsQUl1ZzHcHF3MiZSV1tbeqXFWVN2320YOIuABT0Ra7SIAufu589sYwuww3x9LZ/egX6k1pRQ0JSee5WVZNdY1dVXYrApYNH/eOX7+h81/TE85M+5Tkr16ltNgU4NWiZYR2/1xNRCLQXo1PmfcbG9mRLW8MI9DXzV5VJoQGevLmzLsA2HIgh5tl9pcfLXeGaucu5oylkKqrZV/iLDJPbjFvPgzMBRYA/9HQTcyedjwQjbHugBbYzJ8SwRszeuPo0HAdojVg1xpw9sRGc+fz0Pb41yullDRSPEF7yjlYjJL7+nckflJ3Hh4ZhKtz2yWlllXhgV7tghYNj1lCz8iZpvYrOaafAOQDvZRS+qkVUFtTwblTn5Ob/Q9jk7vhoKO3K09NCGXOxDB6BOnvPv/UsBwBD5cUX+p56ujqegTU1ppW2DJbztdUl/HNnhc5m7qByvJbv0QRgegBAcRP6s7UEV1aPJKzRICPK9l5ZQT42LeWWBKwqlv4+P5R45fGNvXG5aX5nPj2j6bzQF83nooJYc6kMMI7/3RPe/WCwWxPvsS82Ai75C0Xwby5i9mOls42GSIwfmAg8ZPCmBLVBedWftp6GBjhw8AIn8YFDWixipC/tytHVkYT1sk6ObqTUe8RicjYD99tt+x48rImK/J0dbwjnF+2LYPgWbs5cCK/cWGsK0KzqqtLOpz6PqHlLfuJsPvIFXLyy/hHWoFd8pZTwAmgrq5GR/TngXWvDGHfsTym32vfP2xabA24UxAc4MHT94faLf9vvy/wb0+A7hSorCgybSiAtsHQGIpKq3lr4+lG5doKRaU2MkSLPzN/hP4fmY3HOZ0/QDfW5047PjK333IKbEJLePRQifabPks01OdOQz6avSb8C97Lbp3PQm+GAAAAAElFTkSuQmCC"

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhdGgtbWF0Y2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcHJlcGFyZS1kZXN0aW5hdGlvbi50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yZXNvbHZlLXJld3JpdGVzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2Fycm93RXZlbi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9hcnJvd09kZC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9iYW5uZXJCZy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9jb3JlLWZlYXR1cmUvYnJpZWZjYXNlLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2NvcmUtZmVhdHVyZS9zZWN1cmUuc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvY29yZUZlYXR1cmUucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvZmVhdHVyZS9jaGF0LnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ZlYXR1cmUvY2xvdWQuc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvZmVhdHVyZS9kZXNpZ24uc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvZmVhdHVyZS9zZXR0aW5nLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ZlYXR1cmUvc21hcnQuc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvZmVhdHVyZS93aW5uZXIuc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvZ29hbC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9rZXktZmVhdHVyZS9oZWxwICgxKS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9rZXktZmVhdHVyZS9wcmFjdGljZSAoMSkucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMva2V5LWZlYXR1cmUvcHJvbW90aW9uICgyKS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9sb2dvLWRhcmsucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvbG9nby5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9wYXJ0bmVyLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3BhdHRlcm5CRy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9wYXltZW50LXBhdHRlcm4ucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvcGF5bWVudFRodW1iLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3Rlc3RpbW9uaWFsL2F2YXRhcjEucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvdGVzdGltb25pYWwvYXZhdGFyMi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy90ZXN0aW1vbmlhbC9hdmF0YXIzLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3Rlc3RpbW9uaWFsL2F2YXRhcjQucG5nIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FjY29yZGlvbi9hY2NvcmRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYWNjb3JkaW9uL2Jhc2UtYWNjb3JkaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FjY29yZGlvbi9zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9uLWdyb3VwLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RyYXdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9mZWF0dXJlLWNhcmQtY29sdW1uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2ZlYXR1cmUtY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmRhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmRhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvbW9iaWxlLWRyYXdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9saXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xvZ28uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcHJpY2UtY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9yYXRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2VjdGlvbi1oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2VvLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RleHQtZmVhdHVyZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGV4dHMvYXBwL2FwcC5wcm92aWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGV4dHMvYXBwL2FwcC5yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250ZXh0cy9jcmVhdGUtY29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGV4dHMvZHJhd2VyL2RyYXdlci5jb250ZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb250ZXh0cy9kcmF3ZXIvZHJhd2VyLnByb3ZpZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VjdGlvbnMvYmFubmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zZWN0aW9ucy9jb3JlLWZlYXR1cmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlY3Rpb25zL2ZhcS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VjdGlvbnMvZmVhdHVyZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VjdGlvbnMva2V5LWZlYXR1cmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlY3Rpb25zL3BhY2thZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlY3Rpb25zL3BhcnRuZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlY3Rpb25zL3NlY3VyZS1wYXltZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9zZWN0aW9ucy90ZXN0aW1vbmlhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VjdGlvbnMvd29ya2Zsb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RoZW1lL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBlbW90aW9uL2NvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmcmFtZXItbW90aW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmMtZHJhd2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1jdXN0b20tc2Nyb2xsYmFyc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWljb25zL2ZhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvaW9cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LW1vZGFsLXZpZGVvXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtbXVsdGktY2Fyb3VzZWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zY3JvbGxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zdGlja3lub2RlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidGhlbWUtdWlcIiJdLCJuYW1lcyI6WyJsaXN0ZW5lcnMiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsIndpbmRvdyIsInByZWZldGNoZWQiLCJjYWNoZWRPYnNlcnZlciIsImVudHJpZXMiLCJlbnRyeSIsImNiIiwicm9vdE1hcmdpbiIsImxpc3RlblRvSW50ZXJzZWN0aW9ucyIsIm9ic2VydmVyIiwiZ2V0T2JzZXJ2ZXIiLCJjb25zb2xlIiwicm91dGVyIiwiZXJyIiwiaHJlZiIsImV2ZW50IiwidGFyZ2V0IiwiZSIsIm5vZGVOYW1lIiwiaXNNb2RpZmllZEV2ZW50Iiwic2Nyb2xsIiwiYXMiLCJyZXBsYWNlIiwic3VjY2VzcyIsImRvY3VtZW50IiwiYXJncyIsImtleSIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsIk9iamVjdCIsInByb3BzIiwiY3JlYXRlUHJvcEVycm9yIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInNoYWxsb3ciLCJwYXNzSHJlZiIsInByZWZldGNoIiwib3B0aW9uYWxQcm9wcyIsImhhc1dhcm5lZCIsIlJlYWN0IiwicCIsInBhdGhuYW1lIiwicmVzb2x2ZWRIcmVmIiwiY2hpbGRFbG0iLCJpc1ByZWZldGNoZWQiLCJjaGlsZHJlbiIsImNoaWxkIiwiQ2hpbGRyZW4iLCJjaGlsZFByb3BzIiwicmVmIiwiZWwiLCJzZXRDaGlsZEVsbSIsIm9uQ2xpY2siLCJsaW5rQ2xpY2tlZCIsInByaW9yaXR5IiwiTGluayIsInBhdGgiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInByb2Nlc3MiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZ2V0IiwiUm91dGVyIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJldmVudEZpZWxkIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwibmFtZSIsImFsbCIsIm9uIiwib2ZmIiwiZW1pdCIsImhhbmRsZXIiLCJiYXNlUGF0aCIsImNhbmNlbGxlZCIsInVybCIsImxvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJoYXNCYXNlUGF0aCIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImZpbmFsVXJsIiwiUEFHRV9MT0FEX0VSUk9SIiwiU3ltYm9sIiwiYWRkQmFzZVBhdGgiLCJyZXNvbHZlSHJlZiIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiY3JlZGVudGlhbHMiLCJyZXMiLCJhdHRlbXB0cyIsImZldGNoUmV0cnkiLCJpc1NlcnZlclJlbmRlciIsIm1hcmtMb2FkaW5nRXJyb3IiLCJjb25zdHJ1Y3RvciIsInJvdXRlIiwicXVlcnkiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIl9pbkZsaWdodFJvdXRlIiwiX3NoYWxsb3ciLCJzdGF0ZSIsIm9wdGlvbnMiLCJzdHlsZVNoZWV0cyIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwiQ29tcG9uZW50IiwiX19ORVhUX0RBVEFfXyIsInJlbG9hZCIsImJhY2siLCJwdXNoIiwicHJlcGFyZVVybEFzIiwiY2hhbmdlIiwiaXNMb2NhbFVSTCIsIlNUIiwicGVyZm9ybWFuY2UiLCJjbGVhbmVkQXMiLCJkZWxCYXNlUGF0aCIsInBhZ2VzIiwiX19yZXdyaXRlcyIsInBhcnNlZCIsIm1ldGhvZCIsInJlc29sdmVkQXMiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsIm1pc3NpbmdQYXJhbXMiLCJwYXJhbSIsImFzUGF0aG5hbWUiLCJyb3V0ZUluZm8iLCJhcHBDb21wIiwiZXJyb3IiLCJjaGFuZ2VTdGF0ZSIsIl9fTiIsImhhbmRsZVJvdXRlSW5mb0Vycm9yIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsInBhZ2UiLCJnZXRSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJyZXF1aXJlIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiZGF0YUhyZWYiLCJzZXQiLCJiZWZvcmVQb3BTdGF0ZSIsIm9ubHlBSGFzaENoYW5nZSIsIm5ld0hhc2giLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic2Nyb2xsVG9IYXNoIiwiaGFzaCIsImlkRWwiLCJuYW1lRWwiLCJ1cmxJc05ldyIsIl9yZXNvbHZlSHJlZiIsImNsZWFuUGF0aG5hbWUiLCJwYXJzZWRIcmVmIiwiUHJvbWlzZSIsImZldGNoQ29tcG9uZW50IiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwiX2dldERhdGEiLCJmbiIsImRhdGEiLCJfZ2V0U3RhdGljRGF0YSIsImZldGNoTmV4dERhdGEiLCJfZ2V0U2VydmVyRGF0YSIsIkFwcFRyZWUiLCJjdHgiLCJhYm9ydENvbXBvbmVudExvYWQiLCJub3RpZnkiLCJzbGFzaGVkUHJvdG9jb2xzIiwicHJvdG9jb2wiLCJ1cmxPYmoiLCJob3N0IiwiYXV0aCIsImVuY29kZVVSSUNvbXBvbmVudCIsImhvc3RuYW1lIiwiU3RyaW5nIiwicXVlcnlzdHJpbmciLCJzZWFyY2giLCJURVNUX1JPVVRFIiwiRFVNTVlfQkFTRSIsInJlc29sdmVkQmFzZSIsIm9yaWdpbiIsIm1hdGNoZXJPcHRpb25zIiwic2Vuc2l0aXZlIiwiZGVsaW1pdGVyIiwiZGVjb2RlIiwiY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyIsInN0cmljdCIsImN1c3RvbVJvdXRlIiwia2V5cyIsIm1hdGNoZXJSZWdleCIsInBhdGhUb1JlZ2V4cCIsIm1hdGNoZXIiLCJkZWNvZGVVUklDb21wb25lbnQiLCJwYXJzZWREZXN0aW5hdGlvbiIsImRlc3RpbmF0aW9uIiwiZGVzdFF1ZXJ5IiwiZGVzdFBhdGgiLCJkZXN0UGF0aFBhcmFtS2V5cyIsImRlc3RQYXRoUGFyYW1zIiwiZGVzdGluYXRpb25Db21waWxlciIsInZhbGlkYXRlIiwidmFsdWUiLCJBcnJheSIsInN0ck9yQXJyYXkiLCJxdWVyeUNvbXBpbGVyIiwicGFyYW1LZXlzIiwiYXBwZW5kUGFyYW1zVG9RdWVyeSIsInBhcmFtcyIsInNob3VsZEFkZEJhc2VQYXRoIiwibmV3VXJsIiwiZW5jb2RlVVJJIiwic2VhcmNoUGFyYW1zIiwicmVzdWx0IiwiaXRlbSIsInNlYXJjaFBhcmFtc0xpc3QiLCJjdXN0b21Sb3V0ZU1hdGNoZXIiLCJyZXdyaXRlIiwiZGVzdFJlcyIsInJlIiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwibSIsInN0ciIsIm9wdGlvbmFsIiwicmVwZWF0Iiwic2VnbWVudHMiLCJub3JtYWxpemVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwic2VnbWVudCIsInBhcnNlUGFyYW1ldGVyIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJpIiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsImlzTmFOIiwicGFyc2VJbnQiLCJuYW1lZFJlZ2V4IiwidXNlZCIsInBvcnQiLCJnZXRMb2NhdGlvbk9yaWdpbiIsIkFwcCIsImdldERpc3BsYXlOYW1lIiwicGFnZVByb3BzIiwibG9hZEdldEluaXRpYWxQcm9wcyIsImlzUmVzU2VudCIsInVybE9iamVjdEtleXMiLCJTUCIsIkFjY29yZGlvbiIsIml0ZW1zIiwiY29tYmluZVJlZHVjZXJzIiwic2luZ2xlIiwicHJldmVudENsb3NlIiwib3BlbkluZGV4ZXMiLCJoYW5kbGVJdGVtQ2xpY2siLCJtYXAiLCJpbmRleCIsInRpdGxlIiwiaW5jbHVkZXMiLCJjb250ZW50cyIsIkJhc2VBY2NvcmRpb24iLCJpbnRlcm5hbFNldFN0YXRlIiwiY2xvc2luZyIsInR5cGUiLCJmaWx0ZXIiLCJsb2ciLCJnZXRTdGF0ZSIsInVuZGVmaW5lZCIsImNoYW5nZXMiLCJjYWxsYmFjayIsImFsbENoYW5nZXMiLCJzZXRTdGF0ZSIsImFjdHVhbFN0YXRlIiwiY2hhbmdlc09iamVjdCIsInN0YXRlUmVkdWNlciIsIm9uU3RhdGVDaGFuZ2UiLCJyZW5kZXIiLCJBY2NvcmRpb25CdXR0b24iLCJyZXN0Iiwic3R5bGVzIiwiYnV0dG9uVG9nZ2xlIiwiZGlzcGxheSIsImNvbG9yIiwiY3Vyc29yIiwiYm9yZGVyIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwibGV0dGVyU3BhY2luZyIsInBvc2l0aW9uIiwicGFkZGluZ0xlZnQiLCJsaW5lSGVpZ2h0Iiwid2lkdGgiLCJoZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0b3AiLCJsZWZ0Iiwib3BhY2l0eSIsImNvbnRlbnQiLCJ0cmFuc2Zvcm0iLCJ0cmFuc2l0aW9uIiwidmFyaWFudHMiLCJvcGVuIiwibWFyZ2luVG9wIiwiY2xvc2VkIiwiQWNjb3JkaW9uQ29udGVudHMiLCJpc09wZW4iLCJvdmVyZmxvd1kiLCJwYWRkaW5nQm90dG9tIiwiQWNjb3JkaW9uSXRlbSIsIm92ZXJmbG93IiwicGFkZGluZyIsImJvcmRlckJvdHRvbSIsImxlbmd0aCIsInNsaWNlIiwicmVkdWNlcnMiLCJyZWR1Y2UiLCJhY2MiLCJyZWR1Y2VyIiwiQnV0dG9uR3JvdXAiLCJuZXh0IiwicHJldmlvdXMiLCJidXR0b25Hcm91cCIsImp1c3RpZnlDb250ZW50IiwibWIiLCJidXR0b24iLCJiZyIsInB4Iiwib3V0bGluZSIsIkRyYXdlciIsImNsYXNzTmFtZSIsImNsb3NlQnV0dG9uIiwiY2xvc2VCdXR0b25TdHlsZSIsImRyYXdlckhhbmRsZXIiLCJ0b2dnbGVIYW5kbGVyIiwicGxhY2VtZW50IiwiZHJhd2VyU3R5bGUiLCJjbG9zZUJ0blN0eWxlIiwidHJpbSIsImRlZmF1bHRQcm9wcyIsIkZlYXR1cmVDYXJkQ29sdW1uIiwic3JjIiwiYWx0VGV4dCIsInRleHQiLCJjYXJkIiwiaW1nIiwid3JhcHBlciIsInN1YlRpdGxlIiwiYWxpZ25JdGVtcyIsInRleHRBbGlnbiIsImZsZXhEaXJlY3Rpb24iLCJteCIsIkZlYXR1cmVDYXJkIiwiZmxleFNocmluayIsIm1yIiwibXQiLCJoZWFkZXIiLCJsYWJlbCIsIkZvb3RlciIsImZvb3RlciIsImNvbnRhaW5lciIsImZvb3RlclRvcEFyZWEiLCJtZW51SXRlbXMiLCJtZW51cyIsImhlYWRpbmciLCJsaW5rIiwiY29weXJpZ2h0IiwiYm9yZGVyVG9wIiwiYm9yZGVyVG9wQ29sb3IiLCJmbGV4V3JhcCIsInB0IiwicGIiLCJ0ZXh0RGVjb3JhdGlvbiIsImEiLCJwbCIsIkhlYWRlciIsIkxvZ29EYXJrIiwiTG9nb1doaXRlIiwibmF2IiwicG9zaXRpb25BbmltIiwia2V5ZnJhbWVzIiwicHkiLCJhbmltYXRpb24iLCJtbCIsImJveFNoYWRvdyIsImJvcmRlckNvbG9yIiwic29jaWFsIiwiaWNvbiIsIk1vYmlsZURyYXdlciIsImRpc3BhdGNoIiwidXNlQ29udGV4dCIsIkRyYXdlckNvbnRleHQiLCJ1c2VDYWxsYmFjayIsImRyYXdlciIsImNsb3NlIiwibWVudSIsIm1lbnVGb290ZXIiLCJyaWdodCIsInpJbmRleCIsImZ3IiwiSW1hZ2UiLCJMYXlvdXQiLCJpc1N0aWNreSIsInNldElzU3RpY2t5IiwidXNlU3RhdGUiLCJoYW5kbGVTdGF0ZUNoYW5nZSIsInN0YXR1cyIsIlN0aWNreSIsIlNUQVRVU19GSVhFRCIsIlNUQVRVU19PUklHSU5BTCIsInZhcmlhbnQiLCJOYXZMaW5rIiwiTGlzdCIsInBhcmVudFN0eWxlIiwiY2hpbGRTdHlsZSIsImxpc3RTdHlsZVR5cGUiLCJtYXJnaW4iLCJpc0F2YWlsYWJsZSIsImxpc3RJY29uIiwibWFyZ2luTGVmdCIsIkxvZ28iLCJtYXhXaWR0aCIsIlByaWNlQ2FyZCIsImRlc2NyaXB0aW9uIiwicHJpY2VXaXRoVW5pdCIsImJ1dHRvblRleHQiLCJwb2ludHMiLCJwcmljaW5nQm94IiwicHJpY2luZ0hlYWRlciIsInByaWNlIiwibGlzdEl0ZW0iLCJmbGV4IiwiYmFja2dyb3VuZCIsIm1hcmdpbkJvdHRvbSIsImJvdHRvbSIsImZvbnRTdHlsZSIsInByIiwiUmF0aW5nIiwicmF0aW5nIiwidG90YWxSYXRpbmciLCJTZWN0aW9uSGVhZGVyIiwic2xvZ2FuIiwiaXNXaGl0ZSIsIlNFTyIsImF1dGhvciIsIm1ldGEiLCJtZXRhRGF0YSIsInByb3BlcnR5IiwiY29uY2F0IiwibGFuZyIsIlRleHRGZWF0dXJlIiwiYnRuTmFtZSIsImJ0blVSTCIsInRleHRUcmFuc2Zvcm0iLCJ1c2VEaXNwYXRjaCIsInByb3ZpZGVyIiwidXNlQ3JlYXRlQ29udGV4dCIsImluaXRpYWxTdGF0ZSIsInVzZVN0aWNreVN0YXRlIiwidXNlU3RpY2t5RGlzcGF0Y2giLCJTdGlja3lQcm92aWRlciIsImlzU2lkZWJhclN0aWNreSIsIkVycm9yIiwiZGVmYXVsdFZhbHVlIiwiZGVmYXVsdERpc3BhdGNoIiwic3RhdGVDdHgiLCJjcmVhdGVDb250ZXh0IiwiZGlzcGF0Y2hDdHgiLCJ1c2VTdGF0ZUN0eCIsInVzZURpc3BhdGNoQ3R4IiwiUHJvdmlkZXIiLCJ1c2VSZWR1Y2VyIiwiYWN0aW9uIiwiRHJhd2VyUHJvdmlkZXIiLCJJbmRleFBhZ2UiLCJ0aGVtZSIsIkJhbm5lciIsInZpZGVvT3BlbiIsInNldFZpZGVvT3BlbiIsImhhbmRsZUNsaWNrIiwicHJldmVudERlZmF1bHQiLCJiYW5uZXIiLCJjb250ZW50Qm94IiwiaW1hZ2VCb3giLCJCYW5uZXJUaHVtYiIsImJhY2tncm91bmRJbWFnZSIsIkJhbm5lckJHIiwiYmFja2dyb3VuZFJlcGVhdCIsImJhY2tncm91bmRQb3NpdGlvbiIsImJhY2tncm91bmRTaXplIiwiYm9yZGVyQm90dG9tUmlnaHRSYWRpdXMiLCJzcG9uc29yVGl0bGUiLCJzcG9uc29yQm94Iiwic3BvbnNvciIsImZlYXR1cmVzIiwiaWQiLCJpbWdTcmMiLCJCcmllZmNhc2UiLCJTZWN1cmUiLCJDb3JlRmVhdHVyZSIsImNvcmVGZWF0dXJlIiwiY29udGFpbmVyQm94IiwidGh1bWJuYWlsIiwiQ29yZUZlYXR1cmVUaHVtYiIsImhlYWRpbmdUb3AiLCJncmlkIiwiYm9yZGVyVG9wUmlnaHRSYWRpdXMiLCJvcmRlciIsImZhcXMiLCJGYXEiLCJteSIsIlNtYXJ0IiwiV2lubmVyIiwiQ2xvdWQiLCJTZXR0aW5nIiwiRGVzaWduIiwiQ2hhdCIsIkZlYXR1cmUiLCJncmlkR2FwIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsIlZlY3RvciIsIkVkaXRpbmciLCJTcGVlZCIsIktleUZlYXR1cmUiLCJwYWNrYWdlcyIsIlBhY2thZ2UiLCJwcmljaW5nIiwicGFja2FnZURhdGEiLCJQYXR0ZXJuQkciLCJQYXJ0bmVyU2VjdGlvbiIsIlBhcnRuZXIiLCJTZWN1cmVQYXltZW50IiwiYmdPdmVybGF5IiwiUGF5bWVudFRodW1iIiwiUGF5bWVudFBhdHRlcm4iLCJhdmF0YXIiLCJBdmF0YXIxIiwiZGVzaWduYXRpb24iLCJyZXZpZXciLCJBdmF0YXIyIiwiQXZhdGFyMyIsIkF2YXRhcjQiLCJyZXNwb25zaXZlIiwiZGVza3RvcCIsImJyZWFrcG9pbnQiLCJtYXgiLCJtaW4iLCJzbGlkZXNUb1NsaWRlIiwibGFwdG9wIiwidGFibGV0IiwibW9iaWxlIiwiVGVzdGltb25pYWxDYXJkIiwiY2Fyb3VzZWxXcmFwcGVyIiwicmV2aWV3Q2FyZCIsInVsIiwibGlzdFN0eWxlIiwic3ZnIiwibWFyZ2luUmlnaHQiLCJvYmplY3RGaXQiLCJXb3JrRmxvdyIsIndvcmtmbG93IiwiaWNvbkJveCIsIkFycm93T2RkIiwiQXJyb3dFdmVuIiwiY29sb3JzIiwidGV4dF9zZWNvbmRhcnkiLCJoZWFkaW5nX3NlY29uZGFyeSIsImJhY2tncm91bmRfc2Vjb25kYXJ5IiwiYm9yZGVyX2NvbG9yIiwicHJpbWFyeSIsInNlY29uZGFyeSIsIm11dGVkIiwiYWNjZW50IiwieWVsbG93IiwibW9kZXMiLCJkYXJrIiwiYnJlYWtwb2ludHMiLCJmb250cyIsImJvZHkiLCJmb250U2l6ZXMiLCJmb250V2VpZ2h0cyIsImJvbGQiLCJsaW5lSGVpZ2h0cyIsImxldHRlclNwYWNpbmdzIiwiY2FwcyIsInNwYWNlIiwibGF5b3V0IiwidG9vbGJhciIsIm1haW4iLCJzZWN0aW9uIiwia2V5RmVhdHVyZSIsImZlYXR1cmUiLCJwYXJ0bmVyIiwidGVzdGltb25pYWwiLCJzZWN1cmVQYXltZW50IiwiZmFxIiwic2VjdGlvbkhlYWRlciIsImZvbnRGYW1pbHkiLCJoZXJvUHJpbWFyeSIsImhlcm9TZWNvbmRhcnkiLCJsZWFkIiwibGlua3MiLCJkZWZhdWx0IiwibG9nbyIsImltYWdlcyIsImJ1dHRvbnMiLCJkZWZhdWx0QnRuIiwid2hpdGVCdXR0b24iLCJ0ZXh0QnV0dG9uIiwiY2FyZHMiLCJvZmZlciIsIm1pbkhlaWdodCIsImZlYXR1cmVDYXJkIiwiZm9ybXMiLCJpbnB1dCIsInQiLCJiYWRnZXMiLCJyb290IiwiZm9udFNtb290aGluZyIsImhyIiwic3JPbmx5IiwiY2xpcCIsImNsaXBQYXRoIiwid2hpdGVTcGFjZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDeEZBLHdFOzs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0M7Ozs7Ozs7Ozs7O0FDTkEsY0FBYyxtQkFBTyxDQUFDLDBFQUFtQjs7QUFFekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFD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TUFBTS9JLEVBQUUsR0FDYitJLEVBQUUsSUFDRixPQUFPOUksV0FBVyxDQUFsQixTQURBOEksY0FFQSxPQUFPOUksV0FBVyxDQUFsQixZQUhLOzs7Ozs7Ozs7Ozs7O0FDallNLHdCQUF3QiwwQ0FBMEMsZ0RBQWdELGdDQUFnQyxnQ0FBZ0MsbUNBQW1DLDRCQUE0QiwrQkFBK0Isb0JBQW9CLHlCQUF5QixVQUFVO0FBQ3BWLGlEOzs7Ozs7Ozs7OztBQ0RBLGlCQUFpQixtQkFBTyxDQUFDLG1FQUFvQjs7Ozs7Ozs7Ozs7O0FDQTdDLGlDQUFpQyxnMEM7Ozs7Ozs7Ozs7O0FDQWpDLGlDQUFpQyw0eUM7Ozs7Ozs7Ozs7O0FDQWpDLHNGOzs7Ozs7Ozs7OztBQ0FBLHFDQUFxQyx3eUU7Ozs7Ozs7Ozs7O0FDQXJDLHFDQUFxQyw0ekY7Ozs7Ozs7Ozs7O0FDQXJDLHlGOzs7Ozs7Ozs7OztBQ0FBLHFDQUFxQyxvd0Y7Ozs7Ozs7Ozs7O0FDQXJDLHFDQUFxQyx3c1Q7Ozs7Ozs7Ozs7O0FDQXJDLHFDQUFxQyw0M007Ozs7Ozs7Ozs7O0FDQXJDLHFDQUFxQyx3b1Q7Ozs7Ozs7Ozs7O0FDQXJDLG1GOzs7Ozs7Ozs7OztBQ0FBLHFDQUFxQyw0Nk87Ozs7Ozs7Ozs7O0FDQXJDLGtGOzs7Ozs7Ozs7OztBQ0FBLGlDQUFpQyxvaEo7Ozs7Ozs7Ozs7O0FDQWpDLGlDQUFpQyxvcU07Ozs7Ozs7Ozs7O0FDQWpDLGlDQUFpQyx3aEo7Ozs7Ozs7Ozs7O0FDQWpDLHVGOzs7Ozs7Ozs7OztBQ0FBLGtGOzs7Ozs7Ozs7OztBQ0FBLHFGOzs7Ozs7Ozs7OztBQ0FBLHVGOzs7Ozs7Ozs7OztBQ0FBLDZGOzs7Ozs7Ozs7OztBQ0FBLDBGOzs7Ozs7Ozs7OztBQ0FBLGlDQUFpQyxvclI7Ozs7Ozs7Ozs7O0FDQWpDLGlDQUFpQyx3aFI7Ozs7Ozs7Ozs7O0FDQWpDLGlDQUFpQyxvN1E7Ozs7Ozs7Ozs7O0FDQWpDLGlDQUFpQyw0NFM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FqQztBQUNBO0FBQ0E7QUFTZSxTQUFTK0ksU0FBVCxPQUF3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QUFFO0FBQ0YvVSxZQUFNLEVBQUUsQ0FETjtBQUVGNEIsa0JBQVksRUFBRSxXQUZaO0FBR0Z5RSxpQkFBVyxFQUFFO0FBSFgsS0FwQkU7QUF5Qk47QUFDQXlLLE1BQUUsRUFBRTtBQUNGQyxlQUFTLEVBQUU7QUFEVCxLQTFCRTtBQTZCTmlFLFVBQU0sRUFBRTtBQUNOaFYsWUFBTSxFQUFFLGNBREY7QUFFTmlWLFVBQUksRUFBRSxxQ0FGQTtBQUdOQyxjQUFRLEVBQUUsdUJBSEo7QUFJTjFVLFlBQU0sRUFBRSxnQkFKRjtBQUtONEgsWUFBTSxFQUFFLGlCQUxGO0FBTU4xRyxjQUFRLEVBQUUsbUJBTko7QUFPTkMsYUFBTyxFQUFFLGNBUEg7QUFRTnZCLGNBQVEsRUFBRSxxQkFSSjtBQVNORyxXQUFLLEVBQUUsZ0JBVEQ7QUFVTjRVLGdCQUFVLEVBQUU7QUFWTjtBQTdCRjtBQW5WSyxDQUFmLEU7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsaUQ7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEscUMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wYWdlcy9pbmRleC5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBhZGRCYXNlUGF0aCxcbiAgaXNMb2NhbFVSTCxcbiAgTmV4dFJvdXRlcixcbiAgUHJlZmV0Y2hPcHRpb25zLFxuICByZXNvbHZlSHJlZixcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxudHlwZSBVcmwgPSBzdHJpbmcgfCBVcmxPYmplY3RcbnR5cGUgUmVxdWlyZWRLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBuZXZlciA6IEtcbn1ba2V5b2YgVF1cbnR5cGUgT3B0aW9uYWxLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBLIDogbmV2ZXJcbn1ba2V5b2YgVF1cblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG59XG50eXBlIExpbmtQcm9wc1JlcXVpcmVkID0gUmVxdWlyZWRLZXlzPExpbmtQcm9wcz5cbnR5cGUgTGlua1Byb3BzT3B0aW9uYWwgPSBPcHRpb25hbEtleXM8TGlua1Byb3BzPlxuXG5sZXQgY2FjaGVkT2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG5jb25zdCBsaXN0ZW5lcnMgPSBuZXcgTWFwPEVsZW1lbnQsICgpID0+IHZvaWQ+KClcbmNvbnN0IEludGVyc2VjdGlvbk9ic2VydmVyID1cbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgOiBudWxsXG5jb25zdCBwcmVmZXRjaGVkOiB7IFtjYWNoZUtleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge31cblxuZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIoKTogSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgfCB1bmRlZmluZWQge1xuICAvLyBSZXR1cm4gc2hhcmVkIGluc3RhbmNlIG9mIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIGFscmVhZHkgY3JlYXRlZFxuICBpZiAoY2FjaGVkT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gY2FjaGVkT2JzZXJ2ZXJcbiAgfVxuXG4gIC8vIE9ubHkgY3JlYXRlIHNoYXJlZCBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBzdXBwb3J0ZWQgaW4gYnJvd3NlclxuICBpZiAoIUludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgcmV0dXJuIChjYWNoZWRPYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAoZW50cmllcykgPT4ge1xuICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICBpZiAoIWxpc3RlbmVycy5oYXMoZW50cnkudGFyZ2V0KSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2IgPSBsaXN0ZW5lcnMuZ2V0KGVudHJ5LnRhcmdldCkhXG4gICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDApIHtcbiAgICAgICAgICBjYWNoZWRPYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGxpc3RlbmVycy5kZWxldGUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGNiKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIHsgcm9vdE1hcmdpbjogJzIwMHB4JyB9XG4gICkpXG59XG5cbmNvbnN0IGxpc3RlblRvSW50ZXJzZWN0aW9ucyA9IChlbDogRWxlbWVudCwgY2I6ICgpID0+IHZvaWQpID0+IHtcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBnZXRPYnNlcnZlcigpXG4gIGlmICghb2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gKCkgPT4ge31cbiAgfVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWwpXG4gIGxpc3RlbmVycy5zZXQoZWwsIGNiKVxuICByZXR1cm4gKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBvYnNlcnZlci51bm9ic2VydmUoZWwpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICB9XG4gICAgbGlzdGVuZXJzLmRlbGV0ZShlbClcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmVmZXRjaChcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnNcbik6IHZvaWQge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVyblxuICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICByb3V0ZXIucHJlZmV0Y2goaHJlZiwgYXMsIG9wdGlvbnMpLmNhdGNoKChlcnIpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9KVxuICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc10gPSB0cnVlXG59XG5cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudDogUmVhY3QuTW91c2VFdmVudCkge1xuICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudFxuICByZXR1cm4gKFxuICAgICh0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnKSB8fFxuICAgIGV2ZW50Lm1ldGFLZXkgfHxcbiAgICBldmVudC5jdHJsS2V5IHx8XG4gICAgZXZlbnQuc2hpZnRLZXkgfHxcbiAgICBldmVudC5hbHRLZXkgfHwgLy8gdHJpZ2dlcnMgcmVzb3VyY2UgZG93bmxvYWRcbiAgICAoZXZlbnQubmF0aXZlRXZlbnQgJiYgZXZlbnQubmF0aXZlRXZlbnQud2hpY2ggPT09IDIpXG4gIClcbn1cblxuZnVuY3Rpb24gbGlua0NsaWNrZWQoXG4gIGU6IFJlYWN0Lk1vdXNlRXZlbnQsXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICByZXBsYWNlPzogYm9vbGVhbixcbiAgc2hhbGxvdz86IGJvb2xlYW4sXG4gIHNjcm9sbD86IGJvb2xlYW5cbik6IHZvaWQge1xuICBjb25zdCB7IG5vZGVOYW1lIH0gPSBlLmN1cnJlbnRUYXJnZXRcblxuICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICFpc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgIHJldHVyblxuICB9XG5cbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgfVxuXG4gIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHsgc2hhbGxvdyB9KS50aGVuKFxuICAgIChzdWNjZXNzOiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAoIXN1Y2Nlc3MpIHJldHVyblxuICAgICAgaWYgKHNjcm9sbCkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpXG4gICAgICB9XG4gICAgfVxuICApXG59XG5cbmZ1bmN0aW9uIExpbmsocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPExpbmtQcm9wcz4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJnczoge1xuICAgICAga2V5OiBzdHJpbmdcbiAgICAgIGV4cGVjdGVkOiBzdHJpbmdcbiAgICAgIGFjdHVhbDogc3RyaW5nXG4gICAgfSkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgK1xuICAgICAgICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCJcbiAgICAgICAgICAgIDogJycpXG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNSZXF1aXJlZCwgdHJ1ZT4gPSB7XG4gICAgICBocmVmOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCByZXF1aXJlZFByb3BzOiBMaW5rUHJvcHNSZXF1aXJlZFtdID0gT2JqZWN0LmtleXMoXG4gICAgICByZXF1aXJlZFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc1JlcXVpcmVkW11cbiAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzUmVxdWlyZWQpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSA9PSBudWxsIHx8XG4gICAgICAgICAgKHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNPcHRpb25hbCwgdHJ1ZT4gPSB7XG4gICAgICBhczogdHJ1ZSxcbiAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICBzY3JvbGw6IHRydWUsXG4gICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wczogTGlua1Byb3BzT3B0aW9uYWxbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgb3B0aW9uYWxQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNPcHRpb25hbFtdXG4gICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc09wdGlvbmFsKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnYXMnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldICYmXG4gICAgICAgICAgdHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmXG4gICAgICAgICAgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAga2V5ID09PSAncmVwbGFjZScgfHxcbiAgICAgICAga2V5ID09PSAnc2Nyb2xsJyB8fFxuICAgICAgICBrZXkgPT09ICdzaGFsbG93JyB8fFxuICAgICAgICBrZXkgPT09ICdwYXNzSHJlZicgfHxcbiAgICAgICAga2V5ID09PSAncHJlZmV0Y2gnXG4gICAgICApIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYGJvb2xlYW5gJyxcbiAgICAgICAgICAgIGFjdHVhbDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIGNvbnN0IGhhc1dhcm5lZCA9IFJlYWN0LnVzZVJlZihmYWxzZSlcbiAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWVcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgKVxuICAgIH1cbiAgfVxuICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlXG5cbiAgY29uc3QgW2NoaWxkRWxtLCBzZXRDaGlsZEVsbV0gPSBSZWFjdC51c2VTdGF0ZTxFbGVtZW50PigpXG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgcGF0aG5hbWUgPSAocm91dGVyICYmIHJvdXRlci5wYXRobmFtZSkgfHwgJy8nXG5cbiAgY29uc3QgeyBocmVmLCBhcyB9ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmhyZWYpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgIGFzOiBwcm9wcy5hcyA/IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5hcykgOiByZXNvbHZlZEhyZWYsXG4gICAgfVxuICB9LCBbcGF0aG5hbWUsIHByb3BzLmhyZWYsIHByb3BzLmFzXSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChcbiAgICAgIHAgJiZcbiAgICAgIEludGVyc2VjdGlvbk9ic2VydmVyICYmXG4gICAgICBjaGlsZEVsbSAmJlxuICAgICAgY2hpbGRFbG0udGFnTmFtZSAmJlxuICAgICAgaXNMb2NhbFVSTChocmVmKVxuICAgICkge1xuICAgICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9IHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXVxuICAgICAgaWYgKCFpc1ByZWZldGNoZWQpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RlblRvSW50ZXJzZWN0aW9ucyhjaGlsZEVsbSwgKCkgPT4ge1xuICAgICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9LCBbcCwgY2hpbGRFbG0sIGhyZWYsIGFzLCByb3V0ZXJdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwgfSA9IHByb3BzXG4gIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgfVxuXG4gIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICBjb25zdCBjaGlsZDogYW55ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgY29uc3QgY2hpbGRQcm9wczoge1xuICAgIG9uTW91c2VFbnRlcj86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBocmVmPzogc3RyaW5nXG4gICAgcmVmPzogYW55XG4gIH0gPSB7XG4gICAgcmVmOiAoZWw6IGFueSkgPT4ge1xuICAgICAgaWYgKGVsKSBzZXRDaGlsZEVsbShlbClcblxuICAgICAgaWYgKGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZC5yZWYoZWwpXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY2hpbGQucmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgIH1cbiAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbClcbiAgICAgIH1cbiAgICB9LFxuICB9XG5cbiAgaWYgKHApIHtcbiAgICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgICB9XG4gICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7IHByaW9yaXR5OiB0cnVlIH0pXG4gICAgfVxuICB9XG5cbiAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICBpZiAocHJvcHMucGFzc0hyZWYgfHwgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpKSB7XG4gICAgY2hpbGRQcm9wcy5ocmVmID0gYWRkQmFzZVBhdGgoYXMpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoXG59XG5cbi8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIXG4gID8gKHBhdGg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpXG4gICAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLydcbiAgICAgIH1cbiAgICB9XG4gIDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2hcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIsIHsgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyLCBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oe30sIF9yb3V0ZXJbcHJvcGVydHldKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyW3Byb3BlcnR5XVxuICB9XG5cbiAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICBpbnN0YW5jZS5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG5leHBvcnQgdHlwZSBXaXRoUm91dGVyUHJvcHMgPSB7XG4gIHJvdXRlcjogTmV4dFJvdXRlclxufVxuXG5leHBvcnQgdHlwZSBFeGNsdWRlUm91dGVyUHJvcHM8UD4gPSBQaWNrPFxuICBQLFxuICBFeGNsdWRlPGtleW9mIFAsIGtleW9mIFdpdGhSb3V0ZXJQcm9wcz5cbj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJvdXRlcjxcbiAgUCBleHRlbmRzIFdpdGhSb3V0ZXJQcm9wcyxcbiAgQyA9IE5leHRQYWdlQ29udGV4dFxuPihcbiAgQ29tcG9zZWRDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPEMsIGFueSwgUD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8RXhjbHVkZVJvdXRlclByb3BzPFA+PiB7XG4gIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzOiBhbnkpIHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogVG9rZW5pemUgaW5wdXQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBsZXhlcihzdHIpIHtcbiAgICB2YXIgdG9rZW5zID0gW107XG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlIChpIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHN0cltpXTtcbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKlwiIHx8IGNoYXIgPT09IFwiK1wiIHx8IGNoYXIgPT09IFwiP1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTU9ESUZJRVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVTQ0FQRURfQ0hBUlwiLCBpbmRleDogaSsrLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ7XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJPUEVOXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ9XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDTE9TRVwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiOlwiKSB7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvZGUgPSBzdHIuY2hhckNvZGVBdChqKTtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgLy8gYDAtOWBcbiAgICAgICAgICAgICAgICAoY29kZSA+PSA0OCAmJiBjb2RlIDw9IDU3KSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgQS1aYFxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA2NSAmJiBjb2RlIDw9IDkwKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgYS16YFxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA5NyAmJiBjb2RlIDw9IDEyMikgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYF9gXG4gICAgICAgICAgICAgICAgICAgIGNvZGUgPT09IDk1KSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUgKz0gc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghbmFtZSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXJhbWV0ZXIgbmFtZSBhdCBcIiArIGkpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk5BTUVcIiwgaW5kZXg6IGksIHZhbHVlOiBuYW1lIH0pO1xuICAgICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgIHZhciBjb3VudCA9IDE7XG4gICAgICAgICAgICB2YXIgcGF0dGVybiA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xuICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUGF0dGVybiBjYW5ub3Qgc3RhcnQgd2l0aCBcXFwiP1xcXCIgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK10gKyBzdHJbaisrXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiKVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50LS07XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoc3RyW2pdID09PSBcIihcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RyW2ogKyAxXSAhPT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYXB0dXJpbmcgZ3JvdXBzIGFyZSBub3QgYWxsb3dlZCBhdCBcIiArIGopO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY291bnQpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuYmFsYW5jZWQgcGF0dGVybiBhdCBcIiArIGkpO1xuICAgICAgICAgICAgaWYgKCFwYXR0ZXJuKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJQQVRURVJOXCIsIGluZGV4OiBpLCB2YWx1ZTogcGF0dGVybiB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNIQVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICB9XG4gICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVORFwiLCBpbmRleDogaSwgdmFsdWU6IFwiXCIgfSk7XG4gICAgcmV0dXJuIHRva2Vucztcbn1cbi8qKlxuICogUGFyc2UgYSBzdHJpbmcgZm9yIHRoZSByYXcgdG9rZW5zLlxuICovXG5mdW5jdGlvbiBwYXJzZShzdHIsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciB0b2tlbnMgPSBsZXhlcihzdHIpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMucHJlZml4ZXMsIHByZWZpeGVzID0gX2EgPT09IHZvaWQgMCA/IFwiLi9cIiA6IF9hO1xuICAgIHZhciBkZWZhdWx0UGF0dGVybiA9IFwiW15cIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXSs/XCI7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHZhciBrZXkgPSAwO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgdmFyIHRyeUNvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICBpZiAoaSA8IHRva2Vucy5sZW5ndGggJiYgdG9rZW5zW2ldLnR5cGUgPT09IHR5cGUpXG4gICAgICAgICAgICByZXR1cm4gdG9rZW5zW2krK10udmFsdWU7XG4gICAgfTtcbiAgICB2YXIgbXVzdENvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICB2YXIgdmFsdWUgPSB0cnlDb25zdW1lKHR5cGUpO1xuICAgICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgdmFyIF9hID0gdG9rZW5zW2ldLCBuZXh0VHlwZSA9IF9hLnR5cGUsIGluZGV4ID0gX2EuaW5kZXg7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmV4cGVjdGVkIFwiICsgbmV4dFR5cGUgKyBcIiBhdCBcIiArIGluZGV4ICsgXCIsIGV4cGVjdGVkIFwiICsgdHlwZSk7XG4gICAgfTtcbiAgICB2YXIgY29uc3VtZVRleHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBcIlwiO1xuICAgICAgICB2YXIgdmFsdWU7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICB3aGlsZSAoKHZhbHVlID0gdHJ5Q29uc3VtZShcIkNIQVJcIikgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKSkpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgd2hpbGUgKGkgPCB0b2tlbnMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gdHJ5Q29uc3VtZShcIkNIQVJcIik7XG4gICAgICAgIHZhciBuYW1lID0gdHJ5Q29uc3VtZShcIk5BTUVcIik7XG4gICAgICAgIHZhciBwYXR0ZXJuID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIik7XG4gICAgICAgIGlmIChuYW1lIHx8IHBhdHRlcm4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjaGFyIHx8IFwiXCI7XG4gICAgICAgICAgICBpZiAocHJlZml4ZXMuaW5kZXhPZihwcmVmaXgpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gcHJlZml4O1xuICAgICAgICAgICAgICAgIHByZWZpeCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUgfHwga2V5KyssXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IHBhdHRlcm4gfHwgZGVmYXVsdFBhdHRlcm4sXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciB2YWx1ZSA9IGNoYXIgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKTtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBwYXRoICs9IHZhbHVlO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgcGF0aCA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG9wZW4gPSB0cnlDb25zdW1lKFwiT1BFTlwiKTtcbiAgICAgICAgaWYgKG9wZW4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgdmFyIG5hbWVfMSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgcGF0dGVybl8xID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIikgfHwgXCJcIjtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgbXVzdENvbnN1bWUoXCJDTE9TRVwiKTtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lXzEgfHwgKHBhdHRlcm5fMSA/IGtleSsrIDogXCJcIiksXG4gICAgICAgICAgICAgICAgcGF0dGVybjogbmFtZV8xICYmICFwYXR0ZXJuXzEgPyBkZWZhdWx0UGF0dGVybiA6IHBhdHRlcm5fMSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICBzdWZmaXg6IHN1ZmZpeCxcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZShcIk1PRElGSUVSXCIpIHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgbXVzdENvbnN1bWUoXCJFTkRcIik7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnRzLnBhcnNlID0gcGFyc2U7XG4vKipcbiAqIENvbXBpbGUgYSBzdHJpbmcgdG8gYSB0ZW1wbGF0ZSBmdW5jdGlvbiBmb3IgdGhlIHBhdGguXG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGUoc3RyLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRva2Vuc1RvRnVuY3Rpb24ocGFyc2Uoc3RyLCBvcHRpb25zKSwgb3B0aW9ucyk7XG59XG5leHBvcnRzLmNvbXBpbGUgPSBjb21waWxlO1xuLyoqXG4gKiBFeHBvc2UgYSBtZXRob2QgZm9yIHRyYW5zZm9ybWluZyB0b2tlbnMgaW50byB0aGUgcGF0aCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9GdW5jdGlvbih0b2tlbnMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciByZUZsYWdzID0gZmxhZ3Mob3B0aW9ucyk7XG4gICAgdmFyIF9hID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hLCBfYiA9IG9wdGlvbnMudmFsaWRhdGUsIHZhbGlkYXRlID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYjtcbiAgICAvLyBDb21waWxlIGFsbCB0aGUgdG9rZW5zIGludG8gcmVnZXhwcy5cbiAgICB2YXIgbWF0Y2hlcyA9IHRva2Vucy5tYXAoZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKFwiXig/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSRcIiwgcmVGbGFncyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgdmFyIHBhdGggPSBcIlwiO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zW2ldO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW47XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBkYXRhID8gZGF0YVt0b2tlbi5uYW1lXSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHZhciBvcHRpb25hbCA9IHRva2VuLm1vZGlmaWVyID09PSBcIj9cIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCI7XG4gICAgICAgICAgICB2YXIgcmVwZWF0ID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIitcIjtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGlmICghcmVwZWF0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG5vdCBiZSBlbXB0eVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB2YWx1ZS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZSh2YWx1ZVtqXSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIGFsbCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZShTdHJpbmcodmFsdWUpLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbWF0Y2ggXFxcIlwiICsgdG9rZW4ucGF0dGVybiArIFwiXFxcIiwgYnV0IGdvdCBcXFwiXCIgKyBzZWdtZW50ICsgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9uYWwpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB2YXIgdHlwZU9mTWVzc2FnZSA9IHJlcGVhdCA/IFwiYW4gYXJyYXlcIiA6IFwiYSBzdHJpbmdcIjtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIGJlIFwiICsgdHlwZU9mTWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfTtcbn1cbmV4cG9ydHMudG9rZW5zVG9GdW5jdGlvbiA9IHRva2Vuc1RvRnVuY3Rpb247XG4vKipcbiAqIENyZWF0ZSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBzcGVjLlxuICovXG5mdW5jdGlvbiBtYXRjaChzdHIsIG9wdGlvbnMpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIHZhciByZSA9IHBhdGhUb1JlZ2V4cChzdHIsIGtleXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMubWF0Y2ggPSBtYXRjaDtcbi8qKlxuICogQ3JlYXRlIGEgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgb3V0cHV0LlxuICovXG5mdW5jdGlvbiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLmRlY29kZSwgZGVjb2RlID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2E7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwYXRobmFtZSkge1xuICAgICAgICB2YXIgbSA9IHJlLmV4ZWMocGF0aG5hbWUpO1xuICAgICAgICBpZiAoIW0pXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHZhciBwYXRoID0gbVswXSwgaW5kZXggPSBtLmluZGV4O1xuICAgICAgICB2YXIgcGFyYW1zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICBpZiAobVtpXSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIHJldHVybiBcImNvbnRpbnVlXCI7XG4gICAgICAgICAgICB2YXIga2V5ID0ga2V5c1tpIC0gMV07XG4gICAgICAgICAgICBpZiAoa2V5Lm1vZGlmaWVyID09PSBcIipcIiB8fCBrZXkubW9kaWZpZXIgPT09IFwiK1wiKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IG1baV0uc3BsaXQoa2V5LnByZWZpeCArIGtleS5zdWZmaXgpLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlY29kZSh2YWx1ZSwga2V5KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBkZWNvZGUobVtpXSwga2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBtLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBfbG9vcF8xKGkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHBhdGg6IHBhdGgsIGluZGV4OiBpbmRleCwgcGFyYW1zOiBwYXJhbXMgfTtcbiAgICB9O1xufVxuZXhwb3J0cy5yZWdleHBUb0Z1bmN0aW9uID0gcmVnZXhwVG9GdW5jdGlvbjtcbi8qKlxuICogRXNjYXBlIGEgcmVndWxhciBleHByZXNzaW9uIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gZXNjYXBlU3RyaW5nKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFsuKyo/PV4hOiR7fSgpW1xcXXwvXFxcXF0pL2csIFwiXFxcXCQxXCIpO1xufVxuLyoqXG4gKiBHZXQgdGhlIGZsYWdzIGZvciBhIHJlZ2V4cCBmcm9tIHRoZSBvcHRpb25zLlxuICovXG5mdW5jdGlvbiBmbGFncyhvcHRpb25zKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMgJiYgb3B0aW9ucy5zZW5zaXRpdmUgPyBcIlwiIDogXCJpXCI7XG59XG4vKipcbiAqIFB1bGwgb3V0IGtleXMgZnJvbSBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cykge1xuICAgIGlmICgha2V5cylcbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgLy8gVXNlIGEgbmVnYXRpdmUgbG9va2FoZWFkIHRvIG1hdGNoIG9ubHkgY2FwdHVyaW5nIGdyb3Vwcy5cbiAgICB2YXIgZ3JvdXBzID0gcGF0aC5zb3VyY2UubWF0Y2goL1xcKCg/IVxcPykvZyk7XG4gICAgaWYgKGdyb3Vwcykge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGdyb3Vwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAga2V5cy5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBpLFxuICAgICAgICAgICAgICAgIHByZWZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IFwiXCIsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG4vKipcbiAqIFRyYW5zZm9ybSBhbiBhcnJheSBpbnRvIGEgcmVnZXhwLlxuICovXG5mdW5jdGlvbiBhcnJheVRvUmVnZXhwKHBhdGhzLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgdmFyIHBhcnRzID0gcGF0aHMubWFwKGZ1bmN0aW9uIChwYXRoKSB7IHJldHVybiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykuc291cmNlOyB9KTtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChcIig/OlwiICsgcGFydHMuam9pbihcInxcIikgKyBcIilcIiwgZmxhZ3Mob3B0aW9ucykpO1xufVxuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIHJlZ2V4cCBmcm9tIHN0cmluZyBpbnB1dC5cbiAqL1xuZnVuY3Rpb24gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb1JlZ2V4cChwYXJzZShwYXRoLCBvcHRpb25zKSwga2V5cywgb3B0aW9ucyk7XG59XG4vKipcbiAqIEV4cG9zZSBhIGZ1bmN0aW9uIGZvciB0YWtpbmcgdG9rZW5zIGFuZCByZXR1cm5pbmcgYSBSZWdFeHAuXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvUmVnZXhwKHRva2Vucywga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5zdHJpY3QsIHN0cmljdCA9IF9hID09PSB2b2lkIDAgPyBmYWxzZSA6IF9hLCBfYiA9IG9wdGlvbnMuc3RhcnQsIHN0YXJ0ID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYiwgX2MgPSBvcHRpb25zLmVuZCwgZW5kID0gX2MgPT09IHZvaWQgMCA/IHRydWUgOiBfYywgX2QgPSBvcHRpb25zLmVuY29kZSwgZW5jb2RlID0gX2QgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2Q7XG4gICAgdmFyIGVuZHNXaXRoID0gXCJbXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5lbmRzV2l0aCB8fCBcIlwiKSArIFwiXXwkXCI7XG4gICAgdmFyIGRlbGltaXRlciA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiLyM/XCIpICsgXCJdXCI7XG4gICAgdmFyIHJvdXRlID0gc3RhcnQgPyBcIl5cIiA6IFwiXCI7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIHRoZSB0b2tlbnMgYW5kIGNyZWF0ZSBvdXIgcmVnZXhwIHN0cmluZy5cbiAgICBmb3IgKHZhciBfaSA9IDAsIHRva2Vuc18xID0gdG9rZW5zOyBfaSA8IHRva2Vuc18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNfMVtfaV07XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4pKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnByZWZpeCkpO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4uc3VmZml4KSk7XG4gICAgICAgICAgICBpZiAodG9rZW4ucGF0dGVybikge1xuICAgICAgICAgICAgICAgIGlmIChrZXlzKVxuICAgICAgICAgICAgICAgICAgICBrZXlzLnB1c2godG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmIChwcmVmaXggfHwgc3VmZml4KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b2tlbi5tb2RpZmllciA9PT0gXCIrXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbW9kID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiID8gXCI/XCIgOiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKCg/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSg/OlwiICsgc3VmZml4ICsgcHJlZml4ICsgXCIoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikpKilcIiArIHN1ZmZpeCArIFwiKVwiICsgbW9kO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZW5kKSB7XG4gICAgICAgIGlmICghc3RyaWN0KVxuICAgICAgICAgICAgcm91dGUgKz0gZGVsaW1pdGVyICsgXCI/XCI7XG4gICAgICAgIHJvdXRlICs9ICFvcHRpb25zLmVuZHNXaXRoID8gXCIkXCIgOiBcIig/PVwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBlbmRUb2tlbiA9IHRva2Vuc1t0b2tlbnMubGVuZ3RoIC0gMV07XG4gICAgICAgIHZhciBpc0VuZERlbGltaXRlZCA9IHR5cGVvZiBlbmRUb2tlbiA9PT0gXCJzdHJpbmdcIlxuICAgICAgICAgICAgPyBkZWxpbWl0ZXIuaW5kZXhPZihlbmRUb2tlbltlbmRUb2tlbi5sZW5ndGggLSAxXSkgPiAtMVxuICAgICAgICAgICAgOiAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgICAgICBlbmRUb2tlbiA9PT0gdW5kZWZpbmVkO1xuICAgICAgICBpZiAoIXN0cmljdCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIGRlbGltaXRlciArIFwiKD89XCIgKyBlbmRzV2l0aCArIFwiKSk/XCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc0VuZERlbGltaXRlZCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPz1cIiArIGRlbGltaXRlciArIFwifFwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3IFJlZ0V4cChyb3V0ZSwgZmxhZ3Mob3B0aW9ucykpO1xufVxuZXhwb3J0cy50b2tlbnNUb1JlZ2V4cCA9IHRva2Vuc1RvUmVnZXhwO1xuLyoqXG4gKiBOb3JtYWxpemUgdGhlIGdpdmVuIHBhdGggc3RyaW5nLCByZXR1cm5pbmcgYSByZWd1bGFyIGV4cHJlc3Npb24uXG4gKlxuICogQW4gZW1wdHkgYXJyYXkgY2FuIGJlIHBhc3NlZCBpbiBmb3IgdGhlIGtleXMsIHdoaWNoIHdpbGwgaG9sZCB0aGVcbiAqIHBsYWNlaG9sZGVyIGtleSBkZXNjcmlwdGlvbnMuIEZvciBleGFtcGxlLCB1c2luZyBgL3VzZXIvOmlkYCwgYGtleXNgIHdpbGxcbiAqIGNvbnRhaW4gYFt7IG5hbWU6ICdpZCcsIGRlbGltaXRlcjogJy8nLCBvcHRpb25hbDogZmFsc2UsIHJlcGVhdDogZmFsc2UgfV1gLlxuICovXG5mdW5jdGlvbiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChwYXRoIGluc3RhbmNlb2YgUmVnRXhwKVxuICAgICAgICByZXR1cm4gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cyk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocGF0aCkpXG4gICAgICAgIHJldHVybiBhcnJheVRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMucGF0aFRvUmVnZXhwID0gcGF0aFRvUmVnZXhwO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5cbnR5cGUgSGFuZGxlciA9ICguLi5ldnRzOiBhbnlbXSkgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBNaXR0RW1pdHRlciA9IHtcbiAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pOiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pdHQoKTogTWl0dEVtaXR0ZXIge1xuICBjb25zdCBhbGw6IHsgW3M6IHN0cmluZ106IEhhbmRsZXJbXSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJldHVybiB7XG4gICAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICA7KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpXG4gICAgfSxcblxuICAgIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICA7KGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXI6IEhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlciguLi5ldnRzKVxuICAgICAgfSlcbiAgICB9LFxuICB9XG59XG4iLCIvKiBnbG9iYWwgX19ORVhUX0RBVEFfXyAqL1xuLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoLFxuICByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCxcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcbmltcG9ydCB7IEdvb2RQYWdlQ2FjaGUsIFN0eWxlU2hlZXRUdXBsZSB9IGZyb20gJy4uLy4uLy4uL2NsaWVudC9wYWdlLWxvYWRlcidcbmltcG9ydCB7IGRlbm9ybWFsaXplUGFnZVBhdGggfSBmcm9tICcuLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRMb2NhdGlvbk9yaWdpbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vdXRpbHMvcXVlcnlzdHJpbmcnXG5pbXBvcnQgcmVzb2x2ZVJld3JpdGVzIGZyb20gJy4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuXG5pbnRlcmZhY2UgVHJhbnNpdGlvbk9wdGlvbnMge1xuICBzaGFsbG93PzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgTmV4dEhpc3RvcnlTdGF0ZSB7XG4gIHVybDogc3RyaW5nXG4gIGFzOiBzdHJpbmdcbiAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbn1cblxudHlwZSBIaXN0b3J5U3RhdGUgPSBudWxsIHwgeyBfX046IGZhbHNlIH0gfCAoeyBfX046IHRydWUgfSAmIE5leHRIaXN0b3J5U3RhdGUpXG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgY2FuY2VsbGVkOiB0cnVlLFxuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICByZXR1cm4gYmFzZVBhdGggJiYgcGF0aC5zdGFydHNXaXRoKCcvJylcbiAgICA/IHBhdGggPT09ICcvJ1xuICAgICAgPyBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChiYXNlUGF0aClcbiAgICAgIDogYmFzZVBhdGggKyBwYXRoXG4gICAgOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpIHx8ICcvJ1xufVxuXG4vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgTmV4dC5qcyByb3V0ZXIgKGJyb3dzZXIgb25seSkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0xvY2FsVVJMKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGlmICh1cmwuc3RhcnRzV2l0aCgnLycpKSByZXR1cm4gdHJ1ZVxuICB0cnkge1xuICAgIC8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuICAgIGNvbnN0IGxvY2F0aW9uT3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICAgIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKVxuICAgIHJldHVybiByZXNvbHZlZC5vcmlnaW4gPT09IGxvY2F0aW9uT3JpZ2luICYmIGhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKVxuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxudHlwZSBVcmwgPSBVcmxPYmplY3QgfCBzdHJpbmdcblxuLyoqXG4gKiBSZXNvbHZlcyBhIGdpdmVuIGh5cGVybGluayB3aXRoIGEgY2VydGFpbiByb3V0ZXIgc3RhdGUgKGJhc2VQYXRoIG5vdCBpbmNsdWRlZCkuXG4gKiBQcmVzZXJ2ZXMgYWJzb2x1dGUgdXJscy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVIcmVmKGN1cnJlbnRQYXRoOiBzdHJpbmcsIGhyZWY6IFVybCk6IHN0cmluZyB7XG4gIC8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG4gIGNvbnN0IGJhc2UgPSBuZXcgVVJMKGN1cnJlbnRQYXRoLCAnaHR0cDovL24nKVxuICBjb25zdCB1cmxBc1N0cmluZyA9XG4gICAgdHlwZW9mIGhyZWYgPT09ICdzdHJpbmcnID8gaHJlZiA6IGZvcm1hdFdpdGhWYWxpZGF0aW9uKGhyZWYpXG4gIHRyeSB7XG4gICAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKHVybEFzU3RyaW5nLCBiYXNlKVxuICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goZmluYWxVcmwucGF0aG5hbWUpXG4gICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICByZXR1cm4gZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgICAgPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpXG4gICAgICA6IGZpbmFsVXJsLmhyZWZcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiB1cmxBc1N0cmluZ1xuICB9XG59XG5cbmNvbnN0IFBBR0VfTE9BRF9FUlJPUiA9IFN5bWJvbCgnUEFHRV9MT0FEX0VSUk9SJylcbmV4cG9ydCBmdW5jdGlvbiBtYXJrTG9hZGluZ0Vycm9yKGVycjogRXJyb3IpOiBFcnJvciB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBQQUdFX0xPQURfRVJST1IsIHt9KVxufVxuXG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyOiBOZXh0Um91dGVyLCB1cmw6IFVybCwgYXM6IFVybCkge1xuICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgcmV0dXJuIHtcbiAgICB1cmw6IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgdXJsKSksXG4gICAgYXM6IGFzID8gYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCBhcykpIDogYXMsXG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIFByaXZhdGVSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzID0gUGljazxQcml2YXRlUm91dGVJbmZvLCAnQ29tcG9uZW50JyB8ICdlcnInPiAmIHtcbiAgcm91dGVyOiBSb3V0ZXJcbn0gJiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG5leHBvcnQgdHlwZSBBcHBDb21wb25lbnQgPSBDb21wb25lbnRUeXBlPEFwcFByb3BzPlxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChkYXRhOiBQcml2YXRlUm91dGVJbmZvLCBBcHA6IEFwcENvbXBvbmVudCkgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IE5leHRIaXN0b3J5U3RhdGUpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID1cbiAgcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJlxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5XG5cbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsOiBzdHJpbmcsIGF0dGVtcHRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgLy9cbiAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgLy8gPiBvcHRpb24uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgIC8vXG4gICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSlcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzLmpzb24oKVxuICB9KVxufVxuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmOiBzdHJpbmcsIGlzU2VydmVyUmVuZGVyOiBib29sZWFuKSB7XG4gIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgLy8gbG9vcC5cbiAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICBtYXJrTG9hZGluZ0Vycm9yKGVycilcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFByaXZhdGVSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuICBfaW5GbGlnaHRSb3V0ZT86IHN0cmluZ1xuICBfc2hhbGxvdz86IGJvb2xlYW5cblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBpbml0aWFsU3R5bGVTaGVldHMsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIGluaXRpYWxTdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgICAgIEFwcDogQXBwQ29tcG9uZW50XG4gICAgICB3cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHM6IGluaXRpYWxTdHlsZVNoZWV0cyxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7XG4gICAgICBDb21wb25lbnQ6IEFwcCBhcyBDb21wb25lbnRUeXBlLFxuICAgICAgc3R5bGVTaGVldHM6IFtcbiAgICAgICAgLyogL19hcHAgZG9lcyBub3QgbmVlZCBpdHMgc3R5bGVzaGVldHMgbWFuYWdlZCAqL1xuICAgICAgXSxcbiAgICB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIHRoaXMuYXNQYXRoID1cbiAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBfX05FWFRfREFUQV9fLmF1dG9FeHBvcnQgPyBwYXRobmFtZSA6IGFzXG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoXG4gICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb25cbiAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcFxuICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgIHRoaXMuaXNTc3IgPSB0cnVlXG5cbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrXG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICAgIGdldFVSTCgpXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKVxuXG4gICAgICAvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnXG5cbiAgICAgICAgICBsZXQgc2Nyb2xsRGVib3VuY2VUaW1lb3V0OiB1bmRlZmluZWQgfCBOb2RlSlMuVGltZW91dFxuXG4gICAgICAgICAgY29uc3QgZGVib3VuY2VkU2Nyb2xsU2F2ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChzY3JvbGxEZWJvdW5jZVRpbWVvdXQpIGNsZWFyVGltZW91dChzY3JvbGxEZWJvdW5jZVRpbWVvdXQpXG5cbiAgICAgICAgICAgIHNjcm9sbERlYm91bmNlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB7IHVybCwgYXM6IGN1ckFzLCBvcHRpb25zIH0gPSBoaXN0b3J5LnN0YXRlXG4gICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGN1ckFzLFxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgICAgICAgICAgIF9OX1g6IHdpbmRvdy5zY3JvbGxYLFxuICAgICAgICAgICAgICAgICAgX05fWTogd2luZG93LnNjcm9sbFksXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSwgMTApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGRlYm91bmNlZFNjcm9sbFNhdmUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlID0gKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCBzdGF0ZSA9IGUuc3RhdGUgYXMgSGlzdG9yeVN0YXRlXG5cbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgLy9cbiAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXNcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICBnZXRVUkwoKVxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFzdGF0ZS5fX04pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucyB9ID0gc3RhdGVcblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMgPT09IHRoaXMuYXNQYXRoICYmIHBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoc3RhdGUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZShcbiAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgdXJsLFxuICAgICAgYXMsXG4gICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgIHNoYWxsb3c6IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLl9zaGFsbG93LFxuICAgICAgfSlcbiAgICApXG4gIH1cblxuICByZWxvYWQoKTogdm9pZCB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gIH1cblxuICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL1xuICBiYWNrKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICBwdXNoKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIGFzeW5jIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwodXJsKSkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmxcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgfVxuICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICBpZiAoU1QpIHtcbiAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICB9XG5cbiAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSlcbiAgICB9XG5cbiAgICBjb25zdCBjbGVhbmVkQXMgPSBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhc1xuICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhc1xuXG4gICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKSB7XG4gICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBc1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcylcbiAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcylcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSlcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAvLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbiAgICAvLyB3aGVuIHJld3JpdHRlbiB0b1xuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcbiAgICBjb25zdCB7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIucHJvbWlzZWRCdWlsZE1hbmlmZXN0XG5cbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSwgc2VhcmNoUGFyYW1zIH0gPSBwYXJzZWRcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpXG5cbiAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgPyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZSkpXG4gICAgICA6IHBhdGhuYW1lXG5cbiAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSkge1xuICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG5cbiAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgIC8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUykge1xuICAgICAgcmVzb2x2ZWRBcyA9IHJlc29sdmVSZXdyaXRlcyhcbiAgICAgICAgYXMsXG4gICAgICAgIHBhZ2VzLFxuICAgICAgICBiYXNlUGF0aCxcbiAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICAocDogc3RyaW5nKSA9PiB0aGlzLl9yZXNvbHZlSHJlZih7IHBhdGhuYW1lOiBwIH0sIHBhZ2VzKS5wYXRobmFtZSFcbiAgICAgIClcbiAgICB9XG4gICAgcmVzb2x2ZWRBcyA9IGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpXG5cbiAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICBjb25zdCB7IHBhdGhuYW1lOiBhc1BhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHJlc29sdmVkQXMpXG4gICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGAgZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCArXG4gICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2luY29tcGF0aWJsZS1ocmVmLWFzYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcylcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHNoYWxsb3dcbiAgICAgIClcbiAgICAgIGxldCB7IGVycm9yIH0gPSByb3V0ZUluZm9cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMpXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgfVxuXG4gICAgICBhd2FpdCB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUhLCBxdWVyeSwgY2xlYW5lZEFzLCByb3V0ZUluZm8pLmNhdGNoKFxuICAgICAgICAoZSkgPT4ge1xuICAgICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlXG4gICAgICAgICAgZWxzZSB0aHJvdyBlXG4gICAgICAgIH1cbiAgICAgIClcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMpXG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiAmJiAnX05fWCcgaW4gb3B0aW9ucykge1xuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygob3B0aW9ucyBhcyBhbnkpLl9OX1gsIChvcHRpb25zIGFzIGFueSkuX05fWSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMpXG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3dcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgIH0gYXMgSGlzdG9yeVN0YXRlLFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuXG4gICAgaWYgKFBBR0VfTE9BRF9FUlJPUiBpbiBlcnIgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcylcblxuICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKClcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBwYWdlOiBDb21wb25lbnQsIHN0eWxlU2hlZXRzIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KFxuICAgICAgICAnL19lcnJvcidcbiAgICAgIClcbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0cyxcbiAgICAgICAgZXJyLFxuICAgICAgICBlcnJvcjogZXJyLFxuICAgICAgfVxuXG4gICAgICB0cnkge1xuICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICBlcnIsXG4gICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgIH0gYXMgYW55KVxuICAgICAgfSBjYXRjaCAoZ2lwRXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycilcbiAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKHJvdXRlSW5mb0Vycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3Iocm91dGVJbmZvRXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCB0cnVlKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldFJvdXRlSW5mbyhcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIHNoYWxsb3c6IGJvb2xlYW4gPSBmYWxzZVxuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXVxuXG4gICAgICBpZiAoc2hhbGxvdyAmJiBjYWNoZWRSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlZFJvdXRlSW5mb1xuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgPyBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKChyZXMpID0+ICh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICB9KSlcblxuICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YUhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIGRlbEJhc2VQYXRoKGFzKSxcbiAgICAgICAgICBfX05fU1NHXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhPFByaXZhdGVSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgIF9fTl9TU0dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhcbiAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgfSBhcyBhbnlcbiAgICAgICAgICAgIClcbiAgICAgIClcbiAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMpXG4gICAgfVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgIGlmIChoYXNoID09PSAnJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKVxuICAgIGlmIChpZEVsKSB7XG4gICAgICBpZEVsLnNjcm9sbEludG9WaWV3KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXVxuICAgIGlmIChuYW1lRWwpIHtcbiAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgfVxuICB9XG5cbiAgdXJsSXNOZXcoYXNQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aFxuICB9XG5cbiAgX3Jlc29sdmVIcmVmKHBhcnNlZEhyZWY6IFVybE9iamVjdCwgcGFnZXM6IHN0cmluZ1tdKSB7XG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VkSHJlZlxuICAgIGNvbnN0IGNsZWFuUGF0aG5hbWUgPSBkZW5vcm1hbGl6ZVBhZ2VQYXRoKGRlbEJhc2VQYXRoKHBhdGhuYW1lISkpXG5cbiAgICBpZiAoY2xlYW5QYXRobmFtZSA9PT0gJy80MDQnIHx8IGNsZWFuUGF0aG5hbWUgPT09ICcvX2Vycm9yJykge1xuICAgICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgICB9XG5cbiAgICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gICAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lISkpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIHBhZ2VzLnNvbWUoKHBhZ2UpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGlzRHluYW1pY1JvdXRlKHBhZ2UpICYmXG4gICAgICAgICAgZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUhKVxuICAgICAgICApIHtcbiAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGFnZSlcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4gcGFyc2VkSHJlZlxuICB9XG5cbiAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9cbiAgYXN5bmMgcHJlZmV0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXNQYXRoOiBzdHJpbmcgPSB1cmwsXG4gICAgb3B0aW9uczogUHJlZmV0Y2hPcHRpb25zID0ge31cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZFxuXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuXG4gICAgcGFyc2VkID0gdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkLCBwYWdlcykgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuXG4gICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIHRoaXMucGFnZUxvYWRlci5wcmVmZXRjaERhdGEodXJsLCBhc1BhdGgpLFxuICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgIF0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxHb29kUGFnZUNhY2hlPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgdGhpcy5zZGNbY2FjaGVLZXldKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSlcbiAgICB9XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGFcbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcCBhcyBBcHBDb21wb25lbnQpXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLCBhcylcbiAgICAgIHRoaXMuY2xjKClcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIG5vdGlmeShkYXRhOiBQcml2YXRlUm91dGVJbmZvKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQgYXMgQXBwQ29tcG9uZW50KVxuICB9XG59XG4iLCIvLyBGb3JtYXQgZnVuY3Rpb24gbW9kaWZpZWQgZnJvbSBub2RlanNcbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0ICogYXMgcXVlcnlzdHJpbmcgZnJvbSAnLi9xdWVyeXN0cmluZydcblxuY29uc3Qgc2xhc2hlZFByb3RvY29scyA9IC9odHRwcz98ZnRwfGdvcGhlcnxmaWxlL1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VXJsKHVybE9iajogVXJsT2JqZWN0KSB7XG4gIGxldCB7IGF1dGgsIGhvc3RuYW1lIH0gPSB1cmxPYmpcbiAgbGV0IHByb3RvY29sID0gdXJsT2JqLnByb3RvY29sIHx8ICcnXG4gIGxldCBwYXRobmFtZSA9IHVybE9iai5wYXRobmFtZSB8fCAnJ1xuICBsZXQgaGFzaCA9IHVybE9iai5oYXNoIHx8ICcnXG4gIGxldCBxdWVyeSA9IHVybE9iai5xdWVyeSB8fCAnJ1xuICBsZXQgaG9zdDogc3RyaW5nIHwgZmFsc2UgPSBmYWxzZVxuXG4gIGF1dGggPSBhdXRoID8gZW5jb2RlVVJJQ29tcG9uZW50KGF1dGgpLnJlcGxhY2UoLyUzQS9pLCAnOicpICsgJ0AnIDogJydcblxuICBpZiAodXJsT2JqLmhvc3QpIHtcbiAgICBob3N0ID0gYXV0aCArIHVybE9iai5ob3N0XG4gIH0gZWxzZSBpZiAoaG9zdG5hbWUpIHtcbiAgICBob3N0ID0gYXV0aCArICh+aG9zdG5hbWUuaW5kZXhPZignOicpID8gYFske2hvc3RuYW1lfV1gIDogaG9zdG5hbWUpXG4gICAgaWYgKHVybE9iai5wb3J0KSB7XG4gICAgICBob3N0ICs9ICc6JyArIHVybE9iai5wb3J0XG4gICAgfVxuICB9XG5cbiAgaWYgKHF1ZXJ5ICYmIHR5cGVvZiBxdWVyeSA9PT0gJ29iamVjdCcpIHtcbiAgICBxdWVyeSA9IFN0cmluZyhxdWVyeXN0cmluZy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHF1ZXJ5IGFzIFBhcnNlZFVybFF1ZXJ5KSlcbiAgfVxuXG4gIGxldCBzZWFyY2ggPSB1cmxPYmouc2VhcmNoIHx8IChxdWVyeSAmJiBgPyR7cXVlcnl9YCkgfHwgJydcblxuICBpZiAocHJvdG9jb2wgJiYgcHJvdG9jb2wuc3Vic3RyKC0xKSAhPT0gJzonKSBwcm90b2NvbCArPSAnOidcblxuICBpZiAoXG4gICAgdXJsT2JqLnNsYXNoZXMgfHxcbiAgICAoKCFwcm90b2NvbCB8fCBzbGFzaGVkUHJvdG9jb2xzLnRlc3QocHJvdG9jb2wpKSAmJiBob3N0ICE9PSBmYWxzZSlcbiAgKSB7XG4gICAgaG9zdCA9ICcvLycgKyAoaG9zdCB8fCAnJylcbiAgICBpZiAocGF0aG5hbWUgJiYgcGF0aG5hbWVbMF0gIT09ICcvJykgcGF0aG5hbWUgPSAnLycgKyBwYXRobmFtZVxuICB9IGVsc2UgaWYgKCFob3N0KSB7XG4gICAgaG9zdCA9ICcnXG4gIH1cblxuICBpZiAoaGFzaCAmJiBoYXNoWzBdICE9PSAnIycpIGhhc2ggPSAnIycgKyBoYXNoXG4gIGlmIChzZWFyY2ggJiYgc2VhcmNoWzBdICE9PSAnPycpIHNlYXJjaCA9ICc/JyArIHNlYXJjaFxuXG4gIHBhdGhuYW1lID0gcGF0aG5hbWUucmVwbGFjZSgvWz8jXS9nLCBlbmNvZGVVUklDb21wb25lbnQpXG4gIHNlYXJjaCA9IHNlYXJjaC5yZXBsYWNlKCcjJywgJyUyMycpXG5cbiAgcmV0dXJuIGAke3Byb3RvY29sfSR7aG9zdH0ke3BhdGhuYW1lfSR7c2VhcmNofSR7aGFzaH1gXG59XG4iLCIvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSlcbn1cbiIsImltcG9ydCB7IGdldExvY2F0aW9uT3JpZ2luIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmNvbnN0IERVTU1ZX0JBU0UgPSBuZXcgVVJMKFxuICB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/ICdodHRwOi8vbicgOiBnZXRMb2NhdGlvbk9yaWdpbigpXG4pXG5cbi8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsOiBzdHJpbmcsIGJhc2U/OiBzdHJpbmcpIHtcbiAgY29uc3QgcmVzb2x2ZWRCYXNlID0gYmFzZSA/IG5ldyBVUkwoYmFzZSwgRFVNTVlfQkFTRSkgOiBEVU1NWV9CQVNFXG4gIGNvbnN0IHtcbiAgICBwYXRobmFtZSxcbiAgICBzZWFyY2hQYXJhbXMsXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZixcbiAgICBvcmlnaW4sXG4gICAgcHJvdG9jb2wsXG4gIH0gPSBuZXcgVVJMKHVybCwgcmVzb2x2ZWRCYXNlKVxuICBpZiAoXG4gICAgb3JpZ2luICE9PSBEVU1NWV9CQVNFLm9yaWdpbiB8fFxuICAgIChwcm90b2NvbCAhPT0gJ2h0dHA6JyAmJiBwcm90b2NvbCAhPT0gJ2h0dHBzOicpXG4gICkge1xuICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCcpXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBzZWFyY2hQYXJhbXMsXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZjogaHJlZi5zbGljZShEVU1NWV9CQVNFLm9yaWdpbi5sZW5ndGgpLFxuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBwYXRoVG9SZWdleHAgZnJvbSAnbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwJ1xuXG5leHBvcnQgeyBwYXRoVG9SZWdleHAgfVxuXG5leHBvcnQgY29uc3QgbWF0Y2hlck9wdGlvbnMgPSB7XG4gIHNlbnNpdGl2ZTogZmFsc2UsXG4gIGRlbGltaXRlcjogJy8nLFxuICBkZWNvZGU6IGRlY29kZVBhcmFtLFxufVxuXG5leHBvcnQgY29uc3QgY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyA9IHtcbiAgLi4ubWF0Y2hlck9wdGlvbnMsXG4gIHN0cmljdDogdHJ1ZSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgKGN1c3RvbVJvdXRlID0gZmFsc2UpID0+IHtcbiAgcmV0dXJuIChwYXRoOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBrZXlzOiBwYXRoVG9SZWdleHAuS2V5W10gPSBbXVxuICAgIGNvbnN0IG1hdGNoZXJSZWdleCA9IHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoXG4gICAgICBwYXRoLFxuICAgICAga2V5cyxcbiAgICAgIGN1c3RvbVJvdXRlID8gY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyA6IG1hdGNoZXJPcHRpb25zXG4gICAgKVxuICAgIGNvbnN0IG1hdGNoZXIgPSBwYXRoVG9SZWdleHAucmVnZXhwVG9GdW5jdGlvbihcbiAgICAgIG1hdGNoZXJSZWdleCxcbiAgICAgIGtleXMsXG4gICAgICBtYXRjaGVyT3B0aW9uc1xuICAgIClcblxuICAgIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQsIHBhcmFtcz86IGFueSkgPT4ge1xuICAgICAgY29uc3QgcmVzID0gcGF0aG5hbWUgPT0gbnVsbCA/IGZhbHNlIDogbWF0Y2hlcihwYXRobmFtZSlcbiAgICAgIGlmICghcmVzKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuXG4gICAgICBpZiAoY3VzdG9tUm91dGUpIHtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgICAgICAgIC8vIHVubmFtZWQgcGFyYW1zIHNob3VsZCBiZSByZW1vdmVkIGFzIHRoZXlcbiAgICAgICAgICAvLyBhcmUgbm90IGFsbG93ZWQgdG8gYmUgdXNlZCBpbiB0aGUgZGVzdGluYXRpb25cbiAgICAgICAgICBpZiAodHlwZW9mIGtleS5uYW1lID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgZGVsZXRlIChyZXMucGFyYW1zIGFzIGFueSlba2V5Lm5hbWVdXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7IC4uLnBhcmFtcywgLi4ucmVzLnBhcmFtcyB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGRlY29kZVBhcmFtKHBhcmFtOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICB9IGNhdGNoIChfKSB7XG4gICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKCdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJylcbiAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgIHRocm93IGVyclxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgKiBhcyBwYXRoVG9SZWdleHAgZnJvbSAnbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwJ1xuXG50eXBlIFBhcmFtcyA9IHsgW3BhcmFtOiBzdHJpbmddOiBhbnkgfVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmVwYXJlRGVzdGluYXRpb24oXG4gIGRlc3RpbmF0aW9uOiBzdHJpbmcsXG4gIHBhcmFtczogUGFyYW1zLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gIGFwcGVuZFBhcmFtc1RvUXVlcnk6IGJvb2xlYW4sXG4gIGJhc2VQYXRoOiBzdHJpbmdcbikge1xuICBsZXQgcGFyc2VkRGVzdGluYXRpb246IHtcbiAgICBxdWVyeT86IFBhcnNlZFVybFF1ZXJ5XG4gICAgcHJvdG9jb2w/OiBzdHJpbmdcbiAgICBob3N0bmFtZT86IHN0cmluZ1xuICAgIHBvcnQ/OiBzdHJpbmdcbiAgfSAmIFJldHVyblR5cGU8dHlwZW9mIHBhcnNlUmVsYXRpdmVVcmw+ID0ge30gYXMgYW55XG5cbiAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgIHBhcnNlZERlc3RpbmF0aW9uID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHNlYXJjaFBhcmFtcyxcbiAgICAgIGhhc2gsXG4gICAgICBob3N0bmFtZSxcbiAgICAgIHBvcnQsXG4gICAgICBwcm90b2NvbCxcbiAgICAgIHNlYXJjaCxcbiAgICAgIGhyZWYsXG4gICAgfSA9IG5ldyBVUkwoZGVzdGluYXRpb24pXG5cbiAgICBwYXJzZWREZXN0aW5hdGlvbiA9IHtcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgc2VhcmNoUGFyYW1zLFxuICAgICAgaGFzaCxcbiAgICAgIHByb3RvY29sLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgc2VhcmNoLFxuICAgICAgaHJlZixcbiAgICB9XG4gIH1cblxuICBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gICAgcGFyc2VkRGVzdGluYXRpb24uc2VhcmNoUGFyYW1zXG4gIClcbiAgY29uc3QgZGVzdFF1ZXJ5ID0gcGFyc2VkRGVzdGluYXRpb24ucXVlcnlcbiAgY29uc3QgZGVzdFBhdGggPSBgJHtwYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSF9JHtcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5oYXNoIHx8ICcnXG4gIH1gXG4gIGNvbnN0IGRlc3RQYXRoUGFyYW1LZXlzOiBwYXRoVG9SZWdleHAuS2V5W10gPSBbXVxuICBwYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKGRlc3RQYXRoLCBkZXN0UGF0aFBhcmFtS2V5cylcblxuICBjb25zdCBkZXN0UGF0aFBhcmFtcyA9IGRlc3RQYXRoUGFyYW1LZXlzLm1hcCgoa2V5KSA9PiBrZXkubmFtZSlcblxuICBsZXQgZGVzdGluYXRpb25Db21waWxlciA9IHBhdGhUb1JlZ2V4cC5jb21waWxlKFxuICAgIGRlc3RQYXRoLFxuICAgIC8vIHdlIGRvbid0IHZhbGlkYXRlIHdoaWxlIGNvbXBpbGluZyB0aGUgZGVzdGluYXRpb24gc2luY2Ugd2Ugc2hvdWxkXG4gICAgLy8gaGF2ZSBhbHJlYWR5IHZhbGlkYXRlZCBiZWZvcmUgd2UgZ290IHRvIHRoaXMgcG9pbnQgYW5kIHZhbGlkYXRpbmdcbiAgICAvLyBicmVha3MgY29tcGlsaW5nIGRlc3RpbmF0aW9ucyB3aXRoIG5hbWVkIHBhdHRlcm4gcGFyYW1zIGZyb20gdGhlIHNvdXJjZVxuICAgIC8vIGUuZy4gL3NvbWV0aGluZzpoZWxsbyguKikgLT4gL2Fub3RoZXIvOmhlbGxvIGlzIGJyb2tlbiB3aXRoIHZhbGlkYXRpb25cbiAgICAvLyBzaW5jZSBjb21waWxlIHZhbGlkYXRpb24gaXMgbWVhbnQgZm9yIHJldmVyc2luZyBhbmQgbm90IGZvciBpbnNlcnRpbmdcbiAgICAvLyBwYXJhbXMgZnJvbSBhIHNlcGFyYXRlIHBhdGgtcmVnZXggaW50byBhbm90aGVyXG4gICAgeyB2YWxpZGF0ZTogZmFsc2UgfVxuICApXG4gIGxldCBuZXdVcmxcblxuICAvLyB1cGRhdGUgYW55IHBhcmFtcyBpbiBxdWVyeSB2YWx1ZXNcbiAgZm9yIChjb25zdCBba2V5LCBzdHJPckFycmF5XSBvZiBPYmplY3QuZW50cmllcyhkZXN0UXVlcnkpKSB7XG4gICAgbGV0IHZhbHVlID0gQXJyYXkuaXNBcnJheShzdHJPckFycmF5KSA/IHN0ck9yQXJyYXlbMF0gOiBzdHJPckFycmF5XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICAvLyB0aGUgdmFsdWUgbmVlZHMgdG8gc3RhcnQgd2l0aCBhIGZvcndhcmQtc2xhc2ggdG8gYmUgY29tcGlsZWRcbiAgICAgIC8vIGNvcnJlY3RseVxuICAgICAgdmFsdWUgPSBgLyR7dmFsdWV9YFxuICAgICAgY29uc3QgcXVlcnlDb21waWxlciA9IHBhdGhUb1JlZ2V4cC5jb21waWxlKHZhbHVlLCB7IHZhbGlkYXRlOiBmYWxzZSB9KVxuICAgICAgdmFsdWUgPSBxdWVyeUNvbXBpbGVyKHBhcmFtcykuc3Vic3RyKDEpXG4gICAgfVxuICAgIGRlc3RRdWVyeVtrZXldID0gdmFsdWVcbiAgfVxuXG4gIC8vIGFkZCBwYXRoIHBhcmFtcyB0byBxdWVyeSBpZiBpdCdzIG5vdCBhIHJlZGlyZWN0IGFuZCBub3RcbiAgLy8gYWxyZWFkeSBkZWZpbmVkIGluIGRlc3RpbmF0aW9uIHF1ZXJ5IG9yIHBhdGhcbiAgY29uc3QgcGFyYW1LZXlzID0gT2JqZWN0LmtleXMocGFyYW1zKVxuXG4gIGlmIChcbiAgICBhcHBlbmRQYXJhbXNUb1F1ZXJ5ICYmXG4gICAgIXBhcmFtS2V5cy5zb21lKChrZXkpID0+IGRlc3RQYXRoUGFyYW1zLmluY2x1ZGVzKGtleSkpXG4gICkge1xuICAgIGZvciAoY29uc3Qga2V5IG9mIHBhcmFtS2V5cykge1xuICAgICAgaWYgKCEoa2V5IGluIGRlc3RRdWVyeSkpIHtcbiAgICAgICAgZGVzdFF1ZXJ5W2tleV0gPSBwYXJhbXNba2V5XVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHNob3VsZEFkZEJhc2VQYXRoID0gZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpICYmIGJhc2VQYXRoXG5cbiAgdHJ5IHtcbiAgICBuZXdVcmwgPSBgJHtzaG91bGRBZGRCYXNlUGF0aCA/IGJhc2VQYXRoIDogJyd9JHtlbmNvZGVVUkkoXG4gICAgICBkZXN0aW5hdGlvbkNvbXBpbGVyKHBhcmFtcylcbiAgICApfWBcblxuICAgIGNvbnN0IFtwYXRobmFtZSwgaGFzaF0gPSBuZXdVcmwuc3BsaXQoJyMnKVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5oYXNoID0gYCR7aGFzaCA/ICcjJyA6ICcnfSR7aGFzaCB8fCAnJ31gXG4gICAgZGVsZXRlIHBhcnNlZERlc3RpbmF0aW9uLnNlYXJjaFxuICAgIGRlbGV0ZSBwYXJzZWREZXN0aW5hdGlvbi5zZWFyY2hQYXJhbXNcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgaWYgKGVyci5tZXNzYWdlLm1hdGNoKC9FeHBlY3RlZCAuKj8gdG8gbm90IHJlcGVhdCwgYnV0IGdvdCBhbiBhcnJheS8pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBUbyB1c2UgYSBtdWx0aS1tYXRjaCBpbiB0aGUgZGVzdGluYXRpb24geW91IG11c3QgYWRkIFxcYCpcXGAgYXQgdGhlIGVuZCBvZiB0aGUgcGFyYW0gbmFtZSB0byBzaWduaWZ5IGl0IHNob3VsZCByZXBlYXQuIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2ludmFsaWQtbXVsdGktbWF0Y2hgXG4gICAgICApXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9XG5cbiAgLy8gUXVlcnkgbWVyZ2Ugb3JkZXIgbG93ZXN0IHByaW9yaXR5IHRvIGhpZ2hlc3RcbiAgLy8gMS4gaW5pdGlhbCBVUkwgcXVlcnkgdmFsdWVzXG4gIC8vIDIuIHBhdGggc2VnbWVudCB2YWx1ZXNcbiAgLy8gMy4gZGVzdGluYXRpb24gc3BlY2lmaWVkIHF1ZXJ5IHZhbHVlc1xuICBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeSA9IHtcbiAgICAuLi5xdWVyeSxcbiAgICAuLi5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeSxcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbmV3VXJsLFxuICAgIHBhcnNlZERlc3RpbmF0aW9uLFxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShcbiAgc2VhcmNoUGFyYW1zOiBVUkxTZWFyY2hQYXJhbXNcbik6IFBhcnNlZFVybFF1ZXJ5IHtcbiAgY29uc3QgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cbiAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICBpZiAodHlwZW9mIHF1ZXJ5W2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBxdWVyeVtrZXldID0gdmFsdWVcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpIHtcbiAgICAgIDsocXVlcnlba2V5XSBhcyBzdHJpbmdbXSkucHVzaCh2YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgcXVlcnlba2V5XSA9IFtxdWVyeVtrZXldIGFzIHN0cmluZywgdmFsdWVdXG4gICAgfVxuICB9KVxuICByZXR1cm4gcXVlcnlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMoXG4gIHVybFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgY29uc3QgcmVzdWx0ID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpXG4gIE9iamVjdC5lbnRyaWVzKHVybFF1ZXJ5KS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlLmZvckVhY2goKGl0ZW0pID0+IHJlc3VsdC5hcHBlbmQoa2V5LCBpdGVtKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0LnNldChrZXksIHZhbHVlKVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduKFxuICB0YXJnZXQ6IFVSTFNlYXJjaFBhcmFtcyxcbiAgLi4uc2VhcmNoUGFyYW1zTGlzdDogVVJMU2VhcmNoUGFyYW1zW11cbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIHNlYXJjaFBhcmFtc0xpc3QuZm9yRWFjaCgoc2VhcmNoUGFyYW1zKSA9PiB7XG4gICAgQXJyYXkuZnJvbShzZWFyY2hQYXJhbXMua2V5cygpKS5mb3JFYWNoKChrZXkpID0+IHRhcmdldC5kZWxldGUoa2V5KSlcbiAgICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4gdGFyZ2V0LmFwcGVuZChrZXksIHZhbHVlKSlcbiAgfSlcbiAgcmV0dXJuIHRhcmdldFxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCBwYXRoTWF0Y2ggZnJvbSAnLi9wYXRoLW1hdGNoJ1xuaW1wb3J0IHByZXBhcmVEZXN0aW5hdGlvbiBmcm9tICcuL3ByZXBhcmUtZGVzdGluYXRpb24nXG5pbXBvcnQgeyBSZXdyaXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL2xvYWQtY3VzdG9tLXJvdXRlcydcblxuY29uc3QgY3VzdG9tUm91dGVNYXRjaGVyID0gcGF0aE1hdGNoKHRydWUpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc29sdmVSZXdyaXRlcyhcbiAgYXNQYXRoOiBzdHJpbmcsXG4gIHBhZ2VzOiBzdHJpbmdbXSxcbiAgYmFzZVBhdGg6IHN0cmluZyxcbiAgcmV3cml0ZXM6IFJld3JpdGVbXSxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICByZXNvbHZlSHJlZjogKHBhdGg6IHN0cmluZykgPT4gc3RyaW5nXG4pIHtcbiAgaWYgKCFwYWdlcy5pbmNsdWRlcyhhc1BhdGgpKSB7XG4gICAgZm9yIChjb25zdCByZXdyaXRlIG9mIHJld3JpdGVzKSB7XG4gICAgICBjb25zdCBtYXRjaGVyID0gY3VzdG9tUm91dGVNYXRjaGVyKHJld3JpdGUuc291cmNlKVxuICAgICAgY29uc3QgcGFyYW1zID0gbWF0Y2hlcihhc1BhdGgpXG5cbiAgICAgIGlmIChwYXJhbXMpIHtcbiAgICAgICAgaWYgKCFyZXdyaXRlLmRlc3RpbmF0aW9uKSB7XG4gICAgICAgICAgLy8gdGhpcyBpcyBhIHByb3hpZWQgcmV3cml0ZSB3aGljaCBpc24ndCBoYW5kbGVkIG9uIHRoZSBjbGllbnRcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRlc3RSZXMgPSBwcmVwYXJlRGVzdGluYXRpb24oXG4gICAgICAgICAgcmV3cml0ZS5kZXN0aW5hdGlvbixcbiAgICAgICAgICBwYXJhbXMsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICByZXdyaXRlLmJhc2VQYXRoID09PSBmYWxzZSA/ICcnIDogYmFzZVBhdGhcbiAgICAgICAgKVxuICAgICAgICBhc1BhdGggPSBkZXN0UmVzLnBhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lIVxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCBkZXN0UmVzLnBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5KVxuXG4gICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhhc1BhdGgpKSB7XG4gICAgICAgICAgLy8gY2hlY2sgaWYgd2Ugbm93IG1hdGNoIGEgcGFnZSBhcyB0aGlzIG1lYW5zIHdlIGFyZSBkb25lXG4gICAgICAgICAgLy8gcmVzb2x2aW5nIHRoZSByZXdyaXRlc1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cblxuICAgICAgICAvLyBjaGVjayBpZiB3ZSBtYXRjaCBhIGR5bmFtaWMtcm91dGUsIGlmIHNvIHdlIGJyZWFrIHRoZSByZXdyaXRlcyBjaGFpblxuICAgICAgICBjb25zdCByZXNvbHZlZEhyZWYgPSByZXNvbHZlSHJlZihhc1BhdGgpXG5cbiAgICAgICAgaWYgKHJlc29sdmVkSHJlZiAhPT0gYXNQYXRoICYmIHBhZ2VzLmluY2x1ZGVzKHJlc29sdmVkSHJlZikpIHtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBhc1BhdGhcbn1cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiaW50ZXJmYWNlIEdyb3VwIHtcbiAgcG9zOiBudW1iZXJcbiAgcmVwZWF0OiBib29sZWFuXG4gIG9wdGlvbmFsOiBib29sZWFuXG59XG5cbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3B0aW9uYWwgPSBwYXJhbS5zdGFydHNXaXRoKCdbJykgJiYgcGFyYW0uZW5kc1dpdGgoJ10nKVxuICBpZiAob3B0aW9uYWwpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDEsIC0xKVxuICB9XG4gIGNvbnN0IHJlcGVhdCA9IHBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpXG4gIGlmIChyZXBlYXQpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDMpXG4gIH1cbiAgcmV0dXJuIHsga2V5OiBwYXJhbSwgcmVwZWF0LCBvcHRpb25hbCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgcm91dGVLZXlzPzogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9XG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9XG59IHtcbiAgY29uc3Qgc2VnbWVudHMgPSAobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuICAgIC5zbGljZSgxKVxuICAgIC5zcGxpdCgnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgZ3JvdXBzW2tleV0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQsIG9wdGlvbmFsIH1cbiAgICAgICAgcmV0dXJuIHJlcGVhdCA/IChvcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICB9XG4gICAgfSlcbiAgICAuam9pbignJylcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbGV0IHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgIGxldCByb3V0ZUtleUNoYXJMZW5ndGggPSAxXG5cbiAgICAvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG4gICAgY29uc3QgZ2V0U2FmZVJvdXRlS2V5ID0gKCkgPT4ge1xuICAgICAgbGV0IHJvdXRlS2V5ID0gJydcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZUtleUNoYXJMZW5ndGg7IGkrKykge1xuICAgICAgICByb3V0ZUtleSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpXG4gICAgICAgIHJvdXRlS2V5Q2hhckNvZGUrK1xuXG4gICAgICAgIGlmIChyb3V0ZUtleUNoYXJDb2RlID4gMTIyKSB7XG4gICAgICAgICAgcm91dGVLZXlDaGFyTGVuZ3RoKytcbiAgICAgICAgICByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdXRlS2V5XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVLZXlzOiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuXG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgICAvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4gICAgICAgICAgLy8gdGhlIG5hbWVkIHJlZ2V4XG4gICAgICAgICAgbGV0IGNsZWFuZWRLZXkgPSBrZXkucmVwbGFjZSgvXFxXL2csICcnKVxuICAgICAgICAgIGxldCBpbnZhbGlkS2V5ID0gZmFsc2VcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuICAgICAgICAgIC8vIHNhZmUga2V5XG4gICAgICAgICAgaWYgKGNsZWFuZWRLZXkubGVuZ3RoID09PSAwIHx8IGNsZWFuZWRLZXkubGVuZ3RoID4gMzApIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwgMSkpKSkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW52YWxpZEtleSkge1xuICAgICAgICAgICAgY2xlYW5lZEtleSA9IGdldFNhZmVSb3V0ZUtleSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVLZXlzW2NsZWFuZWRLZXldID0ga2V5XG4gICAgICAgICAgcmV0dXJuIHJlcGVhdFxuICAgICAgICAgICAgPyBvcHRpb25hbFxuICAgICAgICAgICAgICA/IGAoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gXG4gICAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgXG4gICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgICBncm91cHMsXG4gICAgICByb3V0ZUtleXMsXG4gICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICBncm91cHMsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGZvcm1hdFVybCB9IGZyb20gJy4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwnXG5pbXBvcnQgeyBNYW5pZmVzdEl0ZW0gfSBmcm9tICcuLi9zZXJ2ZXIvbG9hZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJy4uLy4uL2xpYi9sb2FkLWVudi1jb25maWcnXG5pbXBvcnQgeyBCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vc2VydmVyL2dldC1wYWdlLWZpbGVzJ1xuXG4vKipcbiAqIFR5cGVzIHVzZWQgYnkgYm90aCBuZXh0IGFuZCBuZXh0LXNlcnZlclxuICovXG5cbmV4cG9ydCB0eXBlIE5leHRDb21wb25lbnRUeXBlPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPiA9IENvbXBvbmVudFR5cGU8UD4gJiB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBpbml0aWFsIHBhZ2UgbG9hZCBkYXRhIHBvcHVsYXRpb24uIERhdGEgcmV0dXJuZWQgZnJvbSBgZ2V0SW5pdGlhbFByb3BzYCBpcyBzZXJpYWxpemVkIHdoZW4gc2VydmVyIHJlbmRlcmVkLlxuICAgKiBNYWtlIHN1cmUgdG8gcmV0dXJuIHBsYWluIGBPYmplY3RgIHdpdGhvdXQgdXNpbmcgYERhdGVgLCBgTWFwYCwgYFNldGAuXG4gICAqIEBwYXJhbSBjdHggQ29udGV4dCBvZiBgcGFnZWBcbiAgICovXG4gIGdldEluaXRpYWxQcm9wcz8oY29udGV4dDogQyk6IElQIHwgUHJvbWlzZTxJUD5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHNcbj4gJiB7XG4gIHJlbmRlckRvY3VtZW50KFxuICAgIERvY3VtZW50OiBEb2N1bWVudFR5cGUsXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHNcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIEFwcFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlXG4+XG5cbmV4cG9ydCB0eXBlIEFwcFRyZWVUeXBlID0gQ29tcG9uZW50VHlwZTxcbiAgQXBwSW5pdGlhbFByb3BzICYgeyBbbmFtZTogc3RyaW5nXTogYW55IH1cbj5cblxuLyoqXG4gKiBXZWIgdml0YWxzIHByb3ZpZGVkIHRvIF9hcHAucmVwb3J0V2ViVml0YWxzIGJ5IENvcmUgV2ViIFZpdGFscyBwbHVnaW4gZGV2ZWxvcGVkIGJ5IEdvb2dsZSBDaHJvbWUgdGVhbS5cbiAqIGh0dHBzOi8vbmV4dGpzLm9yZy9ibG9nL25leHQtOS00I2ludGVncmF0ZWQtd2ViLXZpdGFscy1yZXBvcnRpbmdcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dFdlYlZpdGFsc01ldHJpYyA9IHtcbiAgaWQ6IHN0cmluZ1xuICBsYWJlbDogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBzdGFydFRpbWU6IG51bWJlclxuICB2YWx1ZTogbnVtYmVyXG59XG5cbmV4cG9ydCB0eXBlIEVuaGFuY2VyPEM+ID0gKENvbXBvbmVudDogQykgPT4gQ1xuXG5leHBvcnQgdHlwZSBDb21wb25lbnRzRW5oYW5jZXIgPVxuICB8IHtcbiAgICAgIGVuaGFuY2VBcHA/OiBFbmhhbmNlcjxBcHBUeXBlPlxuICAgICAgZW5oYW5jZUNvbXBvbmVudD86IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuICAgIH1cbiAgfCBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZVJlc3VsdCA9IHtcbiAgaHRtbDogc3RyaW5nXG4gIGhlYWQ/OiBBcnJheTxKU1guRWxlbWVudCB8IG51bGw+XG59XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2UgPSAoXG4gIG9wdGlvbnM/OiBDb21wb25lbnRzRW5oYW5jZXJcbikgPT4gUmVuZGVyUGFnZVJlc3VsdCB8IFByb21pc2U8UmVuZGVyUGFnZVJlc3VsdD5cblxuZXhwb3J0IHR5cGUgQmFzZUNvbnRleHQgPSB7XG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIFtrOiBzdHJpbmddOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgTkVYVF9EQVRBID0ge1xuICBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PlxuICBwYWdlOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGJ1aWxkSWQ6IHN0cmluZ1xuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBydW50aW1lQ29uZmlnPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxuICBuZXh0RXhwb3J0PzogYm9vbGVhblxuICBhdXRvRXhwb3J0PzogYm9vbGVhblxuICBpc0ZhbGxiYWNrPzogYm9vbGVhblxuICBkeW5hbWljSWRzPzogc3RyaW5nW11cbiAgZXJyPzogRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfVxuICBnc3A/OiBib29sZWFuXG4gIGdzc3A/OiBib29sZWFuXG4gIGN1c3RvbVNlcnZlcj86IGJvb2xlYW5cbiAgZ2lwPzogYm9vbGVhblxuICBhcHBHaXA/OiBib29sZWFuXG59XG5cbi8qKlxuICogYE5leHRgIGNvbnRleHRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBkb2NDb21wb25lbnRzUmVuZGVyZWQ6IHtcbiAgICBIdG1sPzogYm9vbGVhblxuICAgIE1haW4/OiBib29sZWFuXG4gICAgSGVhZD86IGJvb2xlYW5cbiAgICBOZXh0U2NyaXB0PzogYm9vbGVhblxuICB9XG4gIGJ1aWxkTWFuaWZlc3Q6IEJ1aWxkTWFuaWZlc3RcbiAgYW1wUGF0aDogc3RyaW5nXG4gIGluQW1wTW9kZTogYm9vbGVhblxuICBoeWJyaWRBbXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBkeW5hbWljSW1wb3J0czogTWFuaWZlc3RJdGVtW11cbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgY2Fub25pY2FsQmFzZTogc3RyaW5nXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxuICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZzogc3RyaW5nXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG5cbiAgcHJldmlldz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIFByZXZpZXcgZGF0YSBzZXQgb24gdGhlIHJlcXVlc3QsIGlmIGFueVxuICAgKiAqL1xuICBwcmV2aWV3RGF0YT86IGFueVxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHN0YXR1czogbnVtYmVyLCB1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmw6IFVybE9iamVjdCk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXRVcmwodXJsKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVQYXRoU2VwPW5vcm1hbGl6ZVBhdGhTZXA7ZXhwb3J0cy5kZW5vcm1hbGl6ZVBhZ2VQYXRoPWRlbm9ybWFsaXplUGFnZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplUGF0aFNlcChwYXRoKXtyZXR1cm4gcGF0aC5yZXBsYWNlKC9cXFxcL2csJy8nKTt9ZnVuY3Rpb24gZGVub3JtYWxpemVQYWdlUGF0aChwYWdlKXtwYWdlPW5vcm1hbGl6ZVBhdGhTZXAocGFnZSk7aWYocGFnZS5zdGFydHNXaXRoKCcvaW5kZXgvJykpe3BhZ2U9cGFnZS5zbGljZSg2KTt9ZWxzZSBpZihwYWdlPT09Jy9pbmRleCcpe3BhZ2U9Jy8nO31yZXR1cm4gcGFnZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBTXdBQUFBckNBWUFBQUEwWTJmSUFBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUFOOVNVUkJWSGdCN1oyTGRkb3dGSWF2ZXpJQUc5UWJsRTVRZHdOR1lJT1NDV0FEMkFBMllBVElCSkFKVENhQVRxRHE0bCtOWXN3alJBWnMvZDg1aXJHaytJRjFkUitTVENLRVJJWXhwcE1reWM3Ynord213Njdtei94eVFxTERDc1hVcHBWTlc5Mld5a2JtSTEwaEpBYTBzZHMwaE5idzgrZElFNXQ2Si82L1UzVThJYVNOcUtCQVM0d2tBSjcyeVlTUU5sTFdFbDg5VmtnQkpLVDF3UGRaQ0NIa1BGWllVaUdFRUVMcVJkVk5TQ2VKa0NZQzU3NXpvaXgxT3hxYnptbW5rVmhCS0ZwbFlIcWt2STlJMlhjM01KTXpiRVppUlNOZ2lJUjFqNVR2eDJMOGpGUUlpWlJ6N1I5VzJINDZ6WlArU1pKa0k0UkVRSG5pcFhKQiszKzE2ZTNjZ1lmMGJVaWIwRGxrbUh5WnlaVjhPMUgyaXUzZUdhTGdrS2FDU0xDTzFNOXRXa3N4aGIrV0UzVzh5V2U1RU5Jd0lDeGJwSUhjQXB6ME5pY2pKREFJQzZmeVNaeG1NbHdmUThoNTRJcVlZTzRJZ2dKaitqZmszc0I5R0dvSVdBSUE3WEowTVBPYUErb0Z6cHgvdzFWcDVGN1l0dmNIUG9veWtRQ1k5NFZvcVlRRWtqZ0xlYkdFWEFvR0ZRMThqVXdDWXVxY1l3bUpUSVdRRzRLcFhabTBCWTFRQ0NFQmFIMjB5ck1EODJ0RGU0U2dIUzFxOFNrT3o1WGZkU0p5Nldaemp1ZVFTNEc1NWRyT0ZvUG90ZmtWWG1Tc0wvZkdDdzVrUXNnRndDcTVhUU0yVFZoTVNTRWlqV2lvandEVXJqUFhwdlJ6NGdJbSt4Z21GNFhtRXZDbHViRWNaU3lrMVpoaXF2M0M4MDhtN0N3L0NmeWNnVG54N2x2U0R2Q2NWM1U3OHRFQ3RUMWtMOVFzVERHRktoTnlXenoxYmRBekRkZ3pQU1lRa243SjVPS3p1alV3MmR5RDRJSzJCd1VCSEgvc2hPdEpIaEZFM0tad0tObWoxUXc2c0xRaXYwY3pyQUZBKzJ3OTAyM0JCeGNPNTQvQW4zUmFaQ1NrMmVDaFR1RHI5Q3JLcVgydUFKckRtVm9MK0pHcFJFUWlFV0tLbDdLbFVyeEI1TVdtWlpJa1M0a2NkQ1NaVGI5MDMzNG56eFhsNm8rcythT3BFWUdlMG1rZ1I2ZWlYalRPcW1kaS9ZOUVDamtnU2cxVFJnWEQ5cGpyVXA0SzBGYUtkMWk1ZDFtOTJIcU5XbFVLazBrRlg3Yy84TGxuNytPdFZHOGs3L2RLRFhJRUNzd1JJRERxLzJnRDA0YW0renZia0g2WDZtbTVUdVhSaHZiWHBvMFVEVzR0TllMcjA1UWk2ZWRsaGVEUGNSK0tFNGpudXErUGtFb1FZRmlWb25QVGlubzltRDA1SE9hOTAxeFJyKytWbjZvM000ZjBqMXhmMXpEUUVZUW5JVjhDd1lLZmJ2OUUxRWg3OXlVK3AxN2VKV3dxOGlZNDNnWnBWMlZHTVpnUmxuOHJrajE4YzM0WHFRQUFBQUJKUlU1RXJrSmdnZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFNd0FBQUFyQ0FZQUFBQTBZMmZJQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQU52U1VSQlZIZ0I3WjNyZGRwQUVJV0huUHlQUzFoWEVKZWdkT0JVRUZKQm5BcWdneWdWUUFlNEE5d0JUZ1hnQ3NBVmJHYXNLN1BlQ0N5Q0hraTYzemw3SktRQkNXbG41N0c3MGtoSXBYanZIVlozbzlGb0YrMUxkZkZKeXhXSzhiVkFiaG4vcnNwOEtUaldXQmNiZk55b3pFWklyWHdVY2paYWNXZTZTTFM0WUxPdDd5TFJ6OEgyblp4M1RGTzRXYlRObE9hNlFDNlJUS0VlaFp3RkZlWUlXdGx1Skt0c1Z0RnQzV241cmhYdlBoSjkxdktnNVVuMnl2QWMvMTZSbFNpaWpKeFpKVDIvYTlrcnFUc2dhdWU5c0JXVnQ0VXB6WU4rLzZlUWt4a0plWFdqWXBjR0x0UVB5ZHdlcTJpbUVHblhYQi85SDRsa0xxQXBqeW4vay82SHUwakc5bjNUOGtmTEk2MFJlY1VxaDVZN0xRc3RXNStSRnNoZHdhWHBQUllQQmRmQ1kvMU9DTkdLY0l0S3NiYjRBNVhsUmtqZW1OajFtTU15eGZzVFhxdWVZUzRXTE1oU3k2cGcvMkFzUjlYWTlZd2FtMXNoM1FVMzBnYzNOUlZTR1dpTXhwRTd5OGJuMGpsMGsweEJZRjJja05vcGNzOENwWEpDMmdVKzlDOEdwWmRMRUNONnVNVmpXcUdHZ2FKc2d3eE82aGw4WGl5d01tbmdJaytGTkFjVVpvRWxXNnNPZ1h2bUNyYnpQcDVMcmhoQ2VrK1FhVXVFbEFkcDNrbmtjamtodlFYM2ZCNjRiTFljQzNrZkJJWjVnSmdJR1JSSUNsai96a3pJK3lCQWRFSUdEV09hZ01EdFlueENTaFBFT1U0YW9sWEZMWWhQbG14SlNCbFFkNlpCbkZPNzRpQVR1NUsyd0Frd1BpSC9EVnoyWEhGcWpYTjgxdW02YnExUjk5bm8xMFFJT1JNb1R1MFZ1UkZsZ2ZrY0N5RU40N3MwYnEwZ1J1RndGZElZOEdEeXZydUpWRXlsMWlidzl4aWprTmFBcXpZUE9rQXJtYU9EK0hzcFZRRlRTRVVoRndHc3pib3FMd2VKQnMvNlRVZ0pFRzY4akl6UHQzMDQ0Y3NUei80VDBrSGdzbzNsUlBDQXhkK3lmMWhpcVlNbFFaekNDVnVrYy9oc3dtRWUzemlwQTVpajhFQ0pFTkpSRUcvbkRYL2wyYlJjWWRZSWZPaUtrYzRUWk5QV1FnZ3B4NmtHQU5tMzVadnNtK2Z3ZWpKZ2ppa1JMSk4vU1J3RXNRcG5PWkpCRWlqRTVJaE1sbDZHdVhtVGF5WmtTTUJvcEZBYWQwREc0dmxaL3NFSklRUG5XQ2FZT2tJSUlZUVEwanFlMDFZSUtRZUdoM0hVTXVrblZZOU04ZG5ETjd3UTBrZlFLNyt0UW5HQ0lmNTh5Q0RwSnhob21VYmJiSGJ3Q3JNb3AwZjZXLzU1TzkweGVVSjZDZUtRcGQrL2NqQ0o5b2ZjSC9vZHZuYWNEQkt6SXBnZ2xuK2VCcnZ0dGV1RlN2TVhhZFlvaG9iM3I1d0FBQUFBU1VWT1JLNUNZSUk9XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvYmFubmVyQmctMWIwOTM1MjRiYWE2ZjhiZDFmOWUyOTVmMjZkNmVjZTgucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjNhV1IwYUQwaU5UY2lJR2hsYVdkb2REMGlOVGNpSUhacFpYZENiM2c5SWpBZ01DQTFOeUExTnlJZ1ptbHNiRDBpYm05dVpTSWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklqNE5Danh3WVhSb0lHOXdZV05wZEhrOUlqQXVNU0lnWm1sc2JDMXlkV3hsUFNKbGRtVnViMlJrSWlCamJHbHdMWEoxYkdVOUltVjJaVzV2WkdRaUlHUTlJazB5TkM0MU5ERTJJREF1TnpreE5qRTJTRE15TGpRMU9ETkRORFV1TlRjMUlEQXVOemt4TmpFMklEVTJMakl3T0RNZ01URXVOREkwTmlBMU5pNHlNRGd6SURJMExqVTBNVFpXTXpJdU5EVTRNME0xTmk0eU1EZ3pJRFExTGpVM05EZ2dORFV1TlRjMUlEVTJMakl3T0RJZ016SXVORFU0TXlBMU5pNHlNRGd5U0RJMExqVTBNVFpETVRFdU5ESTBPU0ExTmk0eU1EZ3lJREF1TnpreE5qY3pJRFExTGpVM05EZ2dNQzQzT1RFMk56TWdNekl1TkRVNE0xWXlOQzQxTkRFMlF6QXVOemt4TmpjeklERXhMalF5TkRZZ01URXVOREkwT1NBd0xqYzVNVFl4TmlBeU5DNDFOREUySURBdU56a3hOakUyV2lJZ1ptbHNiRDBpZFhKc0tDTndZV2x1ZERCZmJHbHVaV0Z5S1NJdlBnMEtQSEJoZEdnZ1ptbHNiQzF5ZFd4bFBTSmxkbVZ1YjJSa0lpQmpiR2x3TFhKMWJHVTlJbVYyWlc1dlpHUWlJR1E5SWswek1TNHlNVGN4SURNeUxqazJNalZETXpFdU16ZzBPU0F6TWk0M09USXpJRE14TGpRMk9EZ2dNekl1TlRreE5DQXpNUzQwTmpnNElETXlMak0xT1ZZek1DNHlNVFEzU0RRd0xqTTNORGxXTXpZdU5qUTRRelF3TGpNM05Ea2dNemN1TWpNM01TQTBNQzR4TmpjMElETTNMamMwTWpNZ016a3VOelV5SURNNExqRTJNa016T1M0ek16WTRJRE00TGpVNE1qRWdNemd1T0RNM05TQXpPQzQzT1RFNUlETTRMakkxTkRVZ016Z3VOemt4T1VneE9DNDNORFUyUXpFNExqRTJNalFnTXpndU56a3hPU0F4Tnk0Mk5qTXhJRE00TGpVNE1qRWdNVGN1TWpRM09TQXpPQzR4TmpKRE1UWXVPRE15TlNBek55NDNOREl6SURFMkxqWXlORGtnTXpjdU1qTTNNU0F4Tmk0Mk1qUTVJRE0yTGpZME9GWXpNQzR5TVRRM1NESTFMalV6TVRKV016SXVNelU1UXpJMUxqVXpNVElnTXpJdU5Ua3hOQ0F5TlM0Mk1UVXhJRE15TGpjNU1qTWdNalV1TnpneklETXlMamsyTWpWRE1qVXVPVFV3T1NBek15NHhNekU1SURJMkxqRTBPVGNnTXpNdU1qRTNNU0F5Tmk0ek56azFJRE16TGpJeE56RklNekF1TmpJd05rTXpNQzQ0TlRBeUlETXpMakl4TnpFZ016RXVNRFE1TWlBek15NHhNekU1SURNeExqSXhOekVnTXpJdU9UWXlOVnBOTXpBdU1UazJOaUF6TUM0eU1UUTNTREkyTGpnd016UldNekV1T1ROSU16QXVNVGsyTmxZek1DNHlNVFEzV2swek9TNDNOVEl4SURJeUxqSTJOelJETXprdU16TTJPU0F5TVM0NE5EWTVJRE00TGpnek56WWdNakV1TmpNM0lETTRMakkxTkRVZ01qRXVOak0zU0RNekxqVTRPVEZXTVRrdU5Ea3lOME16TXk0MU9Ea3hJREU1TGpFek5USWdNek11TkRZMU5pQXhPQzQ0TXpFM0lETXpMakl4T0RFZ01UZ3VOVGd4UXpNeUxqazNNRGtnTVRndU16TXhOaUF6TWk0Mk56QXpJREU0TGpJd05qRWdNekl1TXpFM0lERTRMakl3TmpGSU1qUXVOamd6TVVNeU5DNHpNamszSURFNExqSXdOakVnTWpRdU1ESTVNeUF4T0M0ek16RTJJREl6TGpjNE1Ua2dNVGd1TlRneFF6SXpMalV6TkRVZ01UZ3VPRE14TXlBeU15NDBNVEE0SURFNUxqRXpOVElnTWpNdU5ERXdPQ0F4T1M0ME9USTNWakl4TGpZek4wZ3hPQzQzTkRVMlF6RTRMakUyTWpRZ01qRXVOak0zSURFM0xqWTJNekVnTWpFdU9EUTJPU0F4Tnk0eU5EYzVJREl5TGpJMk56UkRNVFl1T0RNeU5TQXlNaTQyT0RZMklERTJMall5TkRrZ01qTXVNVGt4TkNBeE5pNDJNalE1SURJekxqYzRNVE5XTWpndU9USTRTRFF3TGpNM05EbFdNak11TnpneE0wTTBNQzR6TnpRNUlESXpMakU1TVRRZ05EQXVNVFkzTkNBeU1pNDJPRFkySURNNUxqYzFNakVnTWpJdU1qWTNORnBOTXpFdU9Ea3lPU0F5TVM0Mk16ZElNalV1TVRBM01sWXhPUzQ1TWpFelNETXhMamc1TWpsV01qRXVOak0zV2lJZ1ptbHNiRDBpSTBaR05EVTFNQ0l2UGcwS1BHUmxabk0rRFFvOGJHbHVaV0Z5UjNKaFpHbGxiblFnYVdROUluQmhhVzUwTUY5c2FXNWxZWElpSUhneFBTSXpNaTQzT0RVMUlpQjVNVDBpT0RrdU56ZzFOU0lnZURJOUlqZzVMamM0TlRVaUlIa3lQU0l5TkM0eU1UUTFJaUJuY21Ga2FXVnVkRlZ1YVhSelBTSjFjMlZ5VTNCaFkyVlBibFZ6WlNJK0RRbzhjM1J2Y0NCemRHOXdMV052Ykc5eVBTSWpSa1kwTVRaRElpOCtEUW84YzNSdmNDQnZabVp6WlhROUlqRWlJSE4wYjNBdFkyOXNiM0k5SWlOR1JqUkNNa0lpTHo0TkNqd3ZiR2x1WldGeVIzSmhaR2xsYm5RK0RRbzhMMlJsWm5NK0RRbzhMM04yWno0TkNnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIzYVdSMGFEMGlOVGNpSUdobGFXZG9kRDBpTlRjaUlIWnBaWGRDYjNnOUlqQWdNQ0ExTnlBMU55SWdabWxzYkQwaWJtOXVaU0lnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JajROQ2p4d1lYUm9JRzl3WVdOcGRIazlJakF1TVNJZ1ptbHNiQzF5ZFd4bFBTSmxkbVZ1YjJSa0lpQmpiR2x3TFhKMWJHVTlJbVYyWlc1dlpHUWlJR1E5SWsweU5DNDFOREUySURBdU56a3hOakUyU0RNeUxqUTFPRE5ETkRVdU5UYzFNU0F3TGpjNU1UWXhOaUExTmk0eU1EZ3pJREV4TGpReU5EWWdOVFl1TWpBNE15QXlOQzQxTkRFMlZqTXlMalExT0RORE5UWXVNakE0TXlBME5TNDFOelE0SURRMUxqVTNOVEVnTlRZdU1qQTRNaUF6TWk0ME5UZ3pJRFUyTGpJd09ESklNalF1TlRReE5rTXhNUzQwTWpRNUlEVTJMakl3T0RJZ01DNDNPVEUyTVRZZ05EVXVOVGMwT0NBd0xqYzVNVFl4TmlBek1pNDBOVGd6VmpJMExqVTBNVFpETUM0M09URTJNVFlnTVRFdU5ESTBOaUF4TVM0ME1qUTVJREF1TnpreE5qRTJJREkwTGpVME1UWWdNQzQzT1RFMk1UWmFJaUJtYVd4c1BTSjFjbXdvSTNCaGFXNTBNRjlzYVc1bFlYSXBJaTgrRFFvOGNHRjBhQ0JtYVd4c0xYSjFiR1U5SW1WMlpXNXZaR1FpSUdOc2FYQXRjblZzWlQwaVpYWmxibTlrWkNJZ1pEMGlUVFF5TGpNNE9URWdNalV1TWpJeE5FTTBNaTR6T1RNMklESTFMak13TWpNZ05ESXVNemczTnlBeU5TNHpPRFExSURReUxqTTJOelVnTWpVdU5EWTNURFF3TGpVMk1EY2dNekl1TnpJek5VTTBNQzQwTmprMUlETXpMakE0T0RjZ05EQXVNVFF6TWlBek15NHpORFl5SURNNUxqYzJPREVnTXpNdU16UTRNMHd5T0M0NU1qYzBJRE16TGpRd016TkRNamd1T1RJMklETXpMalF3TXpNZ01qZ3VPVEkwTnlBek15NDBNRE16SURJNExqa3lNeklnTXpNdU5EQXpNMGd4T0M0d09ESTFRekUzTGpjd05UTWdNek11TkRBek15QXhOeTR6TnpZM0lETXpMakUwTkRrZ01UY3VNamcxTnlBek1pNDNOemMyVERFMUxqUTNPRGtnTWpVdU5Ea3pORU14TlM0ME5UZ2dNalV1TkRBNU1TQXhOUzQwTlRJeElESTFMak15TkRRZ01UVXVORFUzTXlBeU5TNHlOREUwUXpFMExqYzFPRE1nTWpVdU1ESXdOaUF4TkM0eU5TQXlOQzR6TmpNNElERTBMakkxSURJekxqVTVRekUwTGpJMUlESXlMall6TkRVZ01UVXVNREl6TmlBeU1TNDROVGMzSURFMUxqazNORFlnTWpFdU9EVTNOME14Tmk0NU1qVTJJREl4TGpnMU56Y2dNVGN1TmprNU15QXlNaTQyTXpRMUlERTNMalk1T1RNZ01qTXVOVGxETVRjdU5qazVNeUF5TkM0eE1qYzJJREUzTGpRMU16Z2dNalF1TmpBNE5TQXhOeTR3TmprMklESTBMamt5TmpsTU1Ua3VNek14TnlBeU55NHlNVFV4UXpFNUxqa3dNelFnTWpjdU56a3pOU0F5TUM0Mk9UWTNJREk0TGpFeU5UVWdNakV1TlRBNE15QXlPQzR4TWpVMVF6SXlMalEyT0NBeU9DNHhNalUxSURJekxqTTRNeUF5Tnk0Mk5qYzFJREl6TGprMU9USWdNall1T1RBeFRESTNMalkzTmprZ01qRXVPVFUwTjBNeU55NHpOalEySURJeExqWTBNVFVnTWpjdU1UY3hNU0F5TVM0eU1EZzJJREkzTGpFM01URWdNakF1TnpNeE1VTXlOeTR4TnpFeElERTVMamMzTmlBeU55NDVORFE0SURFNExqazVPRGdnTWpndU9EazFPQ0F4T0M0NU9UZzRRekk1TGpnME5qZ2dNVGd1T1RrNE9DQXpNQzQyTWpBMElERTVMamMzTmlBek1DNDJNakEwSURJd0xqY3pNVEZETXpBdU5qSXdOQ0F5TVM0eE9UUXlJRE13TGpRek56TWdNakV1TmpFME1pQXpNQzR4TkRFeklESXhMamt5TlRSRE16QXVNVFF5TXlBeU1TNDVNalkzSURNd0xqRTBNellnTWpFdU9USTNPU0F6TUM0eE5EUTFJREl4TGpreU9USk1Nek11T0RNMU1TQXlOaTQ0T0RsRE16UXVOREV4TWlBeU55NDJOakk0SURNMUxqTXlPVFFnTWpndU1USTFOU0F6Tmk0eU9URTRJREk0TGpFeU5UVkRNemN1TVRFd09TQXlPQzR4TWpVMUlETTNMamc0TVRJZ01qY3VPREExSURNNExqUTJNRE1nTWpjdU1qSXpOa3cwTUM0M016WTJJREkwTGprek56VkROREF1TXpRME15QXlOQzQyTVRrMklEUXdMakE1TWpNZ01qUXVNVE0wTkNBME1DNHdPVEl6SURJekxqVTVRelF3TGpBNU1qTWdNakl1TmpNME5TQTBNQzQ0TmpZZ01qRXVPRFUzTnlBME1TNDRNVGNnTWpFdU9EVTNOME0wTWk0M05qZ2dNakV1T0RVM055QTBNeTQxTkRFM0lESXlMall6TkRVZ05ETXVOVFF4TnlBeU15NDFPVU0wTXk0MU5ERTNJREkwTGpNME1qa2dORE11TURVNU1pQXlOQzQ1T0RNNUlEUXlMak00T1RFZ01qVXVNakl4TkZwTk5EQXVNemcwTkNBek5TNDVPRFk0UXpRd0xqTTRORFFnTXpVdU5UTXhPQ0EwTUM0d01UWTJJRE0xTGpFMk1qUWdNemt1TlRZek1TQXpOUzR4TmpJMFNERTRMak14T1RoRE1UY3VPRFkyTWlBek5TNHhOakkwSURFM0xqUTVPRFVnTXpVdU5UTXhPQ0F4Tnk0ME9UZzFJRE0xTGprNE5qaFdNemN1T1RZMlF6RTNMalE1T0RVZ016Z3VOREl4T0NBeE55NDROall5SURNNExqYzVNRGdnTVRndU16RTVPQ0F6T0M0M09UQTRTRE01TGpVMk16RkROREF1TURFMk5pQXpPQzQzT1RBNElEUXdMak00TkRRZ016Z3VOREl4T0NBME1DNHpPRFEwSURNM0xqazJObFl6TlM0NU9EWTRXaUlnWm1sc2JEMGlJMFpGTlRnMk9DSXZQZzBLUEdSbFpuTStEUW84YkdsdVpXRnlSM0poWkdsbGJuUWdhV1E5SW5CaGFXNTBNRjlzYVc1bFlYSWlJSGd4UFNJek1pNDNPRFUxSWlCNU1UMGlPRGt1TnpnMU5TSWdlREk5SWpnNUxqYzROVFVpSUhreVBTSXlOQzR5TVRRMUlpQm5jbUZrYVdWdWRGVnVhWFJ6UFNKMWMyVnlVM0JoWTJWUGJsVnpaU0krRFFvOGMzUnZjQ0J6ZEc5d0xXTnZiRzl5UFNJalJrWTFPRFU0SWk4K0RRbzhjM1J2Y0NCdlptWnpaWFE5SWpFaUlITjBiM0F0WTI5c2IzSTlJaU5HT0RVM1FUWWlMejROQ2p3dmJHbHVaV0Z5UjNKaFpHbGxiblErRFFvOEwyUmxabk0rRFFvOEwzTjJaejROQ2c9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2NvcmVGZWF0dXJlLTllOGEzMGI0NzJmMGJkYzBlNTg5ZGQ4NGUyZTAzNTY5LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIzYVdSMGFEMGlPRElpSUdobGFXZG9kRDBpT0RJaUlIWnBaWGRDYjNnOUlqQWdNQ0E0TWlBNE1pSWdabWxzYkQwaWJtOXVaU0lnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JaUI0Yld4dWN6cDRiR2x1YXowaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1UazVPUzk0YkdsdWF5SStEUW84Y0dGMGFDQnZjR0ZqYVhSNVBTSXdMakV5TWlJZ1pEMGlUVFUwSURCSU1qaERNVEl1TlRNMklEQWdNQ0F4TWk0MU16WWdNQ0F5T0ZZMU5FTXdJRFk1TGpRMk5DQXhNaTQxTXpZZ09ESWdNamdnT0RKSU5UUkROamt1TkRZMElEZ3lJRGd5SURZNUxqUTJOQ0E0TWlBMU5GWXlPRU00TWlBeE1pNDFNellnTmprdU5EWTBJREFnTlRRZ01Gb2lJR1pwYkd3OUlpTkZPVGMwTWpVaUx6NE5Danh5WldOMElIZzlJakkwSWlCNVBTSXlOQ0lnZDJsa2RHZzlJak0wSWlCb1pXbG5hSFE5SWpNMElpQm1hV3hzUFNKMWNtd29JM0JoZEhSbGNtNHdLU0l2UGcwS1BHUmxabk0rRFFvOGNHRjBkR1Z5YmlCcFpEMGljR0YwZEdWeWJqQWlJSEJoZEhSbGNtNURiMjUwWlc1MFZXNXBkSE05SW05aWFtVmpkRUp2ZFc1a2FXNW5RbTk0SWlCM2FXUjBhRDBpTVNJZ2FHVnBaMmgwUFNJeElqNE5DangxYzJVZ2VHeHBibXM2YUhKbFpqMGlJMmx0WVdkbE1DSWdkSEpoYm5ObWIzSnRQU0p6WTJGc1pTZ3dMakF5T1RReE1UZ3BJaTgrRFFvOEwzQmhkSFJsY200K0RRbzhhVzFoWjJVZ2FXUTlJbWx0WVdkbE1DSWdkMmxrZEdnOUlqTTBJaUJvWldsbmFIUTlJak0wSWlCNGJHbHVhenBvY21WbVBTSmtZWFJoT21sdFlXZGxMM0J1Wnp0aVlYTmxOalFzYVZaQ1QxSjNNRXRIWjI5QlFVRkJUbE5WYUVWVlowRkJRVU5KUVVGQlFXbERRVmxCUVVGQk5sSjNka05CUVVGQlFraE9RMU5XVVVsRFFXZEpaa0ZvYTJsQlFVRkNRV2hLVWtWR1ZWZEpXRVpzTVhWSlZteFZWV2RNTDNvNU0zTmFZWGcwVlROU2JWSlhWRVUzY0ZsMFJWbFNZM0ZKWjJGNVNVaHlTVTF4UmtsMU1HcFRTVWh1V2taRU1WZFpUR3hFZFdkcFZpdEtRV3hvVVRGa09FMVhhVU13TW14cFZEQXhXbVJ2YldsellVa3pTbkZDYW5CTVRtcExaVWgwWXpkTllXWjZMemcxT0hwcFV6UTBOMGd2VjFodGRuWmlMMXBsWlRZck1XdDZVazVCV1dwUFZHZEVkVUlyTkVGeVoxRnRUVlJpTlVobVowTXlSMmc0TWtaaVYwdFZibFJzVDJwemVHTkVjbmRFVjNGSWQwUXJTR2xPU1dVck56TlhiVU5XT0ZOR2REVldVMUI2Y2xsQ2JUUkRjbWRHTTNFdlFXNVJVREJoVVVNMFJqZG5UV1ZCUm1OQmRuZE1jRmRVYzIwclZsSXhUR2RPWlVGSU5FTmlha0V2TjNoM2FuZElORzVQVEdkVVpVRjJORVZhY21OaGRIYzNZM0ZpSzJaTGVreFhSMFp2UVROQk4zTkJlbGxhU0ROWk1ITjZZeXQyUWpKa1psRnBORWRpWjJWbFREaEpjRUZhWTBGU2QwUlFhWFZCYlV0aU9VYzBTRFYzUzFCQk9YVnFjMnN3VjBSQk1YVXdkbUZwUmtoVVYyZFVWVWRMV1cxSk5XTkNNM2ROTjBGWlYwRlBhM2RPVUZJeVZtdEdabXh1UVVRM1dVTnhaWFZCYVZWSk1XczVkVEEzVkVrcllrRlhTWHB6TkVVM1oxcDFRbEJaTURoamRrZDJSVmN6VG14SGIxQnRRMGc0WVVWMlJERktSMlZ2UlhwbldIaE5Xa1ZqZVV0bFJTOVVOeXM0U0VseVQzSnFXU3RRUm5OR05VRkdaM1pRU0doaFNGTXlSU3RvUldkdWQwRTJRMjVvTTNkT2MxWXJhSGgzUW5ka1dUTldNRGx1ZW1wM09VcFRTVTFoU0ZGWFFYZFBhbk5JSzBScVdEbGlhbmh2WkcweU5VOVZSRFE0VFV4bFZWWXdaR2czZDBoMlFrbGtTRnB5VlZaM01HdHlUekF6VVRrd1IyZ3ZWMnhRVVRkWk4xUkRLMUJCYURoS1ZDc3JXRVJhY21OdWEwOHJRa1kwUjNacWR6WmpWaTlIV2tWYWVUbElORzF4VURoWFJrRTVZVGhCUkhCb1ltRlZWMDFFTkdWUk4yUm9ZekJwVlV3MlIxaEJkREJxVVhZMWVuSTNkMk5QUVU4eVZsRkxTM3BJVlVOTmVuSTFWSGhSS3pWcFdIWXhLM28yYm5KNVJVSnVSbUprYlcxUVFXSTRRV1pLWlRKNllrODJUVVF5T0ZkSFZtSmtiV28zWjFWMVVFUnpiR0V5TUdSdE5YZEZUR2ROVEVGMFQyeDBORE14VW1SRlZuSldSblJJV21sVlp6WlhRU3ROVmk5VlYyOUNZV1JRVVRaelRubzJPRlpDYjJ0UGNuTkJOa0ZKYlVGTlpWSjJVM2g2YVRBMWFFcE5hMDQyVW5sWU5WQndiazR6VEV0bmQzaFFSWEF4WkVOVWVHWlpkRXB0T0dsMmQwSjBRMDR2UWxCYUswVlFRVlF3VldkRFdFRXdUM1IxVHpOQ1QweFdZamhqVDBKME5FRjBhVTFXUnpoS1kybDZOMGRVYldWbFpXc3pVSFY1ZEZOd05rSXZRVTVOUW5wWloyaGplR2cwUlVocVVUTmtNR1J4Ym1FM1JGVXJOMDEzWTI4M1QweHJRMVZtUkZaUFRIcHZOMnA0VG5Nd1Z6VkdNMnBST0c0MVMyVTJaSEpaYUdoak9VMDBSV1puVUhWUVJFNHliM3BWWkhab1oySldVVEowUW1kemFrcDVTR2N3VTFwaVdXbGlVWEpTUVRsM01YRnRWRGhUT1had1QyUXdRa3BJZEdWNGEyZE5kRXBMYzBaMmJXOVZWMlV5U1dsRVVHbFROMnAzTlVaU1RtcDBNWE56TjI4M1FsUnFkekJGT1hkd0wzSmtNVXRyYW5CVUsyczBNRkF6VlRGelpHZE9aa2xhV0ZsWGJVUlNlVnB2T0V3d2JqSXdhWFZUTms5NU1YbEdkRzVGYkV0UVpFRk9WbFE0V1ZGcmNsZElZVEpOVGpac00wRjFZVlpCTVU5clIzQkpjUzl2UTBwQldHNXhVa2RCZUdwQ2JFaElZV05vVjFobk1VMXlVVU5SU1hKa2RFSXhTVFF6TW5RNEswUkpObGN3WTJWa2RGWkJMMjg1UlZwNVkyb3JWMk1yWTIwcmRFNUVObk5wT0RkMVFtMWhZMDFvUTBaVFdrUlZjMVZLVm5wNVEzWjRNMDVQUzFWblQyRkJiRk54VjFoYUsyVkNjRUZXUjFsWE5VaEZUMEpWTkdOMGNFRkdSMWxYT0VOeFVTOUJjMmRxTVd4bVN6bDFhMGwzUVVGQlFVSktVbFUxUlhKclNtZG5aejA5SWk4K0RRbzhMMlJsWm5NK0RRbzhMM04yWno0TkNnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIzYVdSMGFEMGlPRElpSUdobGFXZG9kRDBpT0RJaUlIWnBaWGRDYjNnOUlqQWdNQ0E0TWlBNE1pSWdabWxzYkQwaWJtOXVaU0lnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JajROQ2p4d1lYUm9JR1E5SWswMU5DQXdTREk0UXpFeUxqVXpOaUF3SURBZ01USXVOVE0ySURBZ01qaFdOVFJETUNBMk9TNDBOalFnTVRJdU5UTTJJRGd5SURJNElEZ3lTRFUwUXpZNUxqUTJOQ0E0TWlBNE1pQTJPUzQwTmpRZ09ESWdOVFJXTWpoRE9ESWdNVEl1TlRNMklEWTVMalEyTkNBd0lEVTBJREJhSWlCbWFXeHNQU0lqUmtaR05rUXpJaTgrRFFvOGNHRjBhQ0JrUFNKTk5EVXVOVE0wSURRMkxqYzNPREZETkRVdU5EQTNOeUEwTmk0M056Z3hJRFExTGpJNE1qVWdORFl1TnpVek1pQTBOUzR4TmpVNElEUTJMamN3TkRoRE5EVXVNRFE1TVNBME5pNDJOVFkxSURRMExqazBNekVnTkRZdU5UZzFOaUEwTkM0NE5UTTRJRFEyTGpRNU5qTkRORFF1TnpZME5DQTBOaTQwTURjZ05EUXVOamt6TlNBME5pNHpNREE1SURRMExqWTBOVElnTkRZdU1UZzBNa00wTkM0MU9UWTVJRFEyTGpBMk56VWdORFF1TlRjeUlEUTFMamswTWpRZ05EUXVOVGN5SURRMUxqZ3hOa00wTkM0MU56SWdORFV1TmpnNU55QTBOQzQxT1RZNUlEUTFMalUyTkRZZ05EUXVOalExTWlBME5TNDBORGM1UXpRMExqWTVNelVnTkRVdU16TXhNaUEwTkM0M05qUTBJRFExTGpJeU5URWdORFF1T0RVek9DQTBOUzR4TXpVNFF6UTBMamswTXpFZ05EVXVNRFEyTlNBME5TNHdORGt4SURRMExqazNOVFlnTkRVdU1UWTFPQ0EwTkM0NU1qY3pRelExTGpJNE1qVWdORFF1T0RjNE9TQTBOUzQwTURjM0lEUTBMamcxTkNBME5TNDFNelFnTkRRdU9EVTBTRFE1TGpBM01rTTFNQzQyTkRFMklEUTBMamcySURVeUxqRTFNVFVnTkRRdU1qVXlNU0ExTXk0eU56a2dORE11TVRaRE5UTXVPREk1T0NBME1pNDJNeUExTkM0eU5qZ2dOREV1T1RrME1pQTFOQzQxTmpjeklEUXhMakk1TURsRE5UUXVPRFkyTmlBME1DNDFPRGMxSURVMUxqQXlNRGdnTXprdU9ETXdPU0ExTlM0d01qQTRJRE01TGpBMk5qVkROVFV1TURJd09DQXpPQzR6TURJeElEVTBMamcyTmpZZ016Y3VOVFExTmlBMU5DNDFOamN6SURNMkxqZzBNakpETlRRdU1qWTRJRE0yTGpFek9EZ2dOVE11T0RJNU9DQXpOUzQxTURNeElEVXpMakkzT1NBek5DNDVOek5ETlRJdU1UVXhOU0F6TXk0NE9ERWdOVEF1TmpReE5pQXpNeTR5TnpNZ05Ea3VNRGN5SURNekxqSTNPVU0wT0M0NE5EWWdNek11TWpjNUlEUTRMalkwTVNBek15NHlPRGdnTkRndU5EWXhJRE16TGpNd05rTTBPQzR5TmpFZ016TXVNekkySURRNExqQTJNU0F6TXk0ek5UVTBJRFEzTGpnMk1TQXpNeTR6T1RSRE5EY3VOak0xTkNBek15NDBOREE0SURRM0xqUXdNRFlnTXpNdU5EQTNOQ0EwTnk0eE9UWTVJRE16TGpJNU9UZERORFl1T1Rrek1pQXpNeTR4T1RJZ05EWXVPRE16TkNBek15NHdNVFk0SURRMkxqYzBOU0F6TWk0NE1EUXhRelEyTGpFMU56UWdNekV1TXpVMElEUTFMakUwTkRJZ016QXVNVEUxT1NBME15NDRNemtnTWprdU1qVXpRelF5TGpNeE16TWdNamd1TWpRM05pQTBNQzQwT1RFeklESTNMamM1TURZZ016Z3VOamN4T0NBeU55NDVOVFk0UXpNMkxqZzFNaklnTWpndU1USXpNU0F6TlM0eE5ETXhJREk0TGprd01qZ2dNek11T0RJMUlETXdMakUyT0VNek15NHdPVFlnTXpBdU9EY3dOQ0F6TWk0MU1UWWdNekV1TnpFeU5DQXpNaTR4TVRrMElETXlMalkwTXpkRE16RXVOekl5T1NBek15NDFOelV4SURNeExqVXhPQ0F6TkM0MU56WTRJRE14TGpVeE55QXpOUzQxT0RsRE16RXVOVEUzSURNMUxqWXhOQ0F6TVM0MU1UY2dNelV1TmpRZ016RXVOVEUzSURNMUxqWTJOVll6TlM0M01EVXhRek14TGpVeE5UUWdNelV1T1RZeU55QXpNUzQwTVRFMklETTJMakl3T1RFZ016RXVNakk0TkNBek5pNHpPVEF5UXpNeExqQTBOVElnTXpZdU5UY3hOQ0F6TUM0M09UYzJJRE0yTGpZM01qUWdNekF1TlRRZ016WXVOamN4U0RNd0xqUTROVXd6TUM0ek1UWWdNell1TmpZelNETXdMakU0T0VNeU9TNHdOemN4SURNMkxqWTFPVE1nTWpndU1EQTROeUF6Tnk0d09EazVJREkzTGpJeE1TQXpOeTQ0TmpORE1qWXVPREl4SURNNExqSXpPQ0F5Tmk0MU1UQTRJRE00TGpZNE56Y2dNall1TWprNE9DQXpPUzR4T0RVMVF6STJMakE0TmprZ016a3VOamd6TWlBeU5TNDVOemMzSURRd0xqSXhPRFlnTWpVdU9UYzNOeUEwTUM0M05UazFRekkxTGprM056Y2dOREV1TXpBd05TQXlOaTR3T0RZNUlEUXhMamd6TlRrZ01qWXVNams0T0NBME1pNHpNek0yUXpJMkxqVXhNRGdnTkRJdU9ETXhNeUF5Tmk0NE1qRWdORE11TWpneE1TQXlOeTR5TVRFZ05ETXVOalUyUXpJNExqQXdPRGdnTkRRdU5ESTVNU0F5T1M0d056Y3hJRFEwTGpnMU9UY2dNekF1TVRnNElEUTBMamcxTmpGSU16UXVPVFJETXpVdU1UazFNU0EwTkM0NE5UWXhJRE0xTGpRek9UZ2dORFF1T1RVM05DQXpOUzQyTWpBeUlEUTFMakV6TnpoRE16VXVPREF3TmlBME5TNHpNVGd5SURNMUxqa3dNaUEwTlM0MU5qSTVJRE0xTGprd01pQTBOUzQ0TVRoRE16VXVPVEF5SURRMkxqQTNNeklnTXpVdU9EQXdOaUEwTmk0ek1UYzVJRE0xTGpZeU1ESWdORFl1TkRrNE0wTXpOUzQwTXprNElEUTJMalkzT0RjZ016VXVNVGsxTVNBME5pNDNPQ0F6TkM0NU5DQTBOaTQzT0Vnek1DNHhPRGhETWpndU5UVTFNaUEwTmk0M09EVTBJREkyTGprNE5Ea2dORFl1TVRVeU9DQXlOUzQ0TVRJZ05EVXVNREUzUXpJMUxqSXpPRE1nTkRRdU5EWTJOQ0F5TkM0M09ERTVJRFF6TGpnd05UVWdNalF1TkRjd01TQTBNeTR3TnpReFF6STBMakUxT0RNZ05ESXVNelF5TmlBeU15NDVPVGMySURReExqVTFOVGNnTWpNdU9UazNOaUEwTUM0M05qQTFRekl6TGprNU56WWdNemt1T1RZMU5DQXlOQzR4TlRneklETTVMakUzT0RVZ01qUXVORGN3TVNBek9DNDBORGRETWpRdU56Z3hPU0F6Tnk0M01UVTFJREkxTGpJek9ETWdNemN1TURVME5pQXlOUzQ0TVRJZ016WXVOVEEwUXpJMkxqZ3pNVEVnTXpVdU5URXpPU0F5T0M0eE5UYzBJRE0wTGprd01Ea2dNamt1TlRjeUlETTBMamMyTmtNeU9TNDNOelV4SURNeUxqVXdNRGtnTXpBdU56ZzRNU0F6TUM0ek9EUTVJRE15TGpReU5TQXlPQzQ0TURaRE16UXVNRGN5T0NBeU55NHlNakl4SURNMkxqSXhNRGNnTWpZdU1qUTJNaUF6T0M0ME9EY2dNall1TURNNVF6UXdMamMyTXpNZ01qVXVPRE14T0NBME15NHdOREl5SURJMkxqUXdOVFlnTkRRdU9UUTVJREkzTGpZMk5qRkRORFl1TXpVNU1TQXlPQzQxT1RrMElEUTNMalV3TVRFZ01qa3VPRGcwT0NBME9DNHlOaklnTXpFdU16azFRelE0TGpVME5pQXpNUzR6TmpjZ05EZ3VPREUxSURNeExqTTFNeUEwT1M0d05qSWdNekV1TXpVelF6VXhMakUxTXpjZ016RXVNelEyTWlBMU15NHhOalV6SURNeUxqRTFOamtnTlRRdU5qWTRJRE16TGpZeE1rTTFOUzQwTURFNUlETTBMak14TnpRZ05UVXVPVGcxTnlBek5TNHhOak0zSURVMkxqTTRORFlnTXpZdU1UQXdNa00xTmk0M09ETTBJRE0zTGpBek5qY2dOVFl1T1RnNUlETTRMakEwTkRFZ05UWXVPVGc1SURNNUxqQTJNa00xTmk0NU9Ea2dOREF1TURnZ05UWXVOemd6TkNBME1TNHdPRGMwSURVMkxqTTRORFlnTkRJdU1ESXpPVU0xTlM0NU9EVTNJRFF5TGprMk1EUWdOVFV1TkRBeE9TQTBNeTQ0TURZM0lEVTBMalkyT0NBME5DNDFNVEpETlRNdU1UWTFNeUEwTlM0NU5qY3lJRFV4TGpFMU16Y2dORFl1TnpjM09DQTBPUzR3TmpJZ05EWXVOemN4VERRMUxqVXpOQ0EwTmk0M056Z3hXaUlnWm1sc2JEMGlJek16TXpNek15SXZQZzBLUEhCaGRHZ2daRDBpVFRNNUxqVXhNU0F6Tmk0eE1UY3hRek01TGpVeE1TQXpOUzQ0TlRRNElETTVMall4TlRJZ016VXVOakF6TWlBek9TNDRNREEzSURNMUxqUXhOemRETXprdU9UZzJNU0F6TlM0eU16SXpJRFF3TGpJek56Y2dNelV1TVRJNE1TQTBNQzQxSURNMUxqRXlPREZETkRBdU56WXlNeUF6TlM0eE1qZ3hJRFF4TGpBeE16Z2dNelV1TWpNeU15QTBNUzR4T1RreklETTFMalF4TnpkRE5ERXVNemcwT0NBek5TNDJNRE15SURReExqUTRPU0F6TlM0NE5UUTRJRFF4TGpRNE9TQXpOaTR4TVRjeFZqVTFMakF6T0RGRE5ERXVORGc1SURVMUxqTXdNRFFnTkRFdU16ZzBPQ0ExTlM0MU5URTVJRFF4TGpFNU9UTWdOVFV1TnpNM05FTTBNUzR3TVRNNElEVTFMamt5TWprZ05EQXVOell5TXlBMU5pNHdNamN4SURRd0xqVWdOVFl1TURJM01VTTBNQzR5TXpjM0lEVTJMakF5TnpFZ016a3VPVGcyTVNBMU5TNDVNakk1SURNNUxqZ3dNRGNnTlRVdU56TTNORU16T1M0Mk1UVXlJRFUxTGpVMU1Ua2dNemt1TlRFeElEVTFMak13TURRZ016a3VOVEV4SURVMUxqQXpPREZXTXpZdU1URTNNVm9pSUdacGJHdzlJaU16TXpNek16TWlMejROQ2p4d1lYUm9JR1E5SWswME55NHpNRElnTkRBdU56azRNVU0wTnk0ek9UTXpJRFF3TGpnNE5UZ2dORGN1TkRZMklEUXdMams1TVRFZ05EY3VOVEUxTmlBME1TNHhNRGMyUXpRM0xqVTJOVE1nTkRFdU1qSTBNU0EwTnk0MU9UQTVJRFF4TGpNME9UUWdORGN1TlRrd09TQTBNUzQwTnpZeFF6UTNMalU1TURrZ05ERXVOakF5TnlBME55NDFOalV6SURReExqY3lPREVnTkRjdU5URTFOaUEwTVM0NE5EUTJRelEzTGpRMk5pQTBNUzQ1TmpFeElEUTNMak01TXpNZ05ESXVNRFkyTXlBME55NHpNRElnTkRJdU1UVTBNVU0wTnk0eE1UUTFJRFF5TGpNek5ESWdORFl1T0RZME5TQTBNaTQwTXpRNElEUTJMall3TkRVZ05ESXVORE0wT0VNME5pNHpORFExSURReUxqUXpORGdnTkRZdU1EazBOU0EwTWk0ek16UXlJRFExTGprd055QTBNaTR4TlRReFREUXdMalV3TnlBek5pNDROVFF4VERNMUxqRXdOeUEwTWk0eE5UUXhRek0wTGpreE9UVWdOREl1TXpNME1pQXpOQzQyTmprMUlEUXlMalF6TkRnZ016UXVOREE1TlNBME1pNDBNelE0UXpNMExqRTBPVFVnTkRJdU5ETTBPQ0F6TXk0NE9UazFJRFF5TGpNek5ESWdNek11TnpFeUlEUXlMakUxTkRGRE16TXVOakl3TmlBME1pNHdOall6SURNekxqVTBOemtnTkRFdU9UWXhNU0F6TXk0ME9UZ3pJRFF4TGpnME5EWkRNek11TkRRNE5pQTBNUzQzTWpneElETXpMalF5TXlBME1TNDJNREkzSURNekxqUXlNeUEwTVM0ME56WXhRek16TGpReU15QTBNUzR6TkRrMElETXpMalEwT0RZZ05ERXVNakkwTVNBek15NDBPVGd6SURReExqRXdOelpETXpNdU5UUTNPU0EwTUM0NU9URXhJRE16TGpZeU1EWWdOREF1T0RnMU9DQXpNeTQzTVRJZ05EQXVOems0TVV3ek9TNDRNVElnTXpRdU9ERXlNVU16T1M0NU9UazFJRE0wTGpZek1pQTBNQzR5TkRrMElETTBMalV6TVRRZ05EQXVOVEE1TlNBek5DNDFNekUwUXpRd0xqYzJPVFVnTXpRdU5UTXhOQ0EwTVM0d01UazBJRE0wTGpZek1pQTBNUzR5TURjZ016UXVPREV5TVV3ME55NHpNRFk1SURRd0xqYzVPREZJTkRjdU16QXlXaUlnWm1sc2JEMGlJek16TXpNek15SXZQZzBLUEhCaGRHZ2daRDBpVFRNNUxqVXhNU0ExTlM0d016aFdNemN1T0RJeFRETTFMakE1TnlBME1pNHhOVEE0UXpNMExqa3dPVE1nTkRJdU16TXlOQ0F6TkM0Mk5UZ3lJRFF5TGpRek5DQXpOQzR6T1RjZ05ESXVORE0wUXpNMExqRXpOVGdnTkRJdU5ETTBJRE16TGpnNE5EZ2dOREl1TXpNeU5DQXpNeTQyT1RjZ05ESXVNVFV3T0VNek15NDJNRFU0SURReUxqQTJNeUF6TXk0MU16TXlJRFF4TGprMU56Z2dNek11TkRnek5pQTBNUzQ0TkRFelF6TXpMalF6TkRFZ05ERXVOekkwT0NBek15NDBNRGcySURReExqVTVPVFVnTXpNdU5EQTROaUEwTVM0ME56STRRek16TGpRd09EWWdOREV1TXpRMk1pQXpNeTQwTXpReElEUXhMakl5TURrZ016TXVORGd6TmlBME1TNHhNRFEwUXpNekxqVXpNeklnTkRBdU9UZzNPU0F6TXk0Mk1EVTRJRFF3TGpnNE1qY2dNek11TmprM0lEUXdMamM1TkRsTU16a3VOemszSURNMExqZ3dPVU16T1M0NU9EUTVJRE0wTGpZeU56Y2dOREF1TWpNMU9DQXpOQzQxTWpZeklEUXdMalE1TmprZ016UXVOVEkyTTBNME1DNDNOVGd4SURNMExqVXlOak1nTkRFdU1EQTVNU0F6TkM0Mk1qYzNJRFF4TGpFNU55QXpOQzQ0TURsTU5EY3VNamszSURRd0xqYzVORGxETkRjdU16ZzRNaUEwTUM0NE9ESTNJRFEzTGpRMk1EZ2dOREF1T1RnM09TQTBOeTQxTVRBMElEUXhMakV3TkRSRE5EY3VOVFU1T1NBME1TNHlNakE1SURRM0xqVTROVFFnTkRFdU16UTJNaUEwTnk0MU9EVTBJRFF4TGpRM01qaERORGN1TlRnMU5DQTBNUzQxT1RrMUlEUTNMalUxT1RrZ05ERXVOekkwT0NBME55NDFNVEEwSURReExqZzBNVE5ETkRjdU5EWXdPQ0EwTVM0NU5UYzRJRFEzTGpNNE9ESWdOREl1TURZeklEUTNMakk1TnlBME1pNHhOVEE0UXpRM0xqRXdPVFlnTkRJdU16TXdPU0EwTmk0NE5UazRJRFF5TGpRek1UWWdORFl1TmlBME1pNDBNekUyUXpRMkxqTTBNREVnTkRJdU5ETXhOaUEwTmk0d09UQXpJRFF5TGpNek1Ea2dORFV1T1RBeklEUXlMakUxTURoTU5ERXVORGc1SURNM0xqZ3lNVlkxTlM0d016aEROREV1TkRjM05pQTFOUzR5T1RJMklEUXhMak0yT0RNZ05UVXVOVE15T0NBME1TNHhPRFF4SURVMUxqY3dPRGxETkRBdU9UazVPU0ExTlM0NE9EVXhJRFF3TGpjMU5Ea2dOVFV1T1Rnek15QTBNQzQxSURVMUxqazRNek5ETkRBdU1qUTFNU0ExTlM0NU9ETXpJRFF3TGpBd01ERWdOVFV1T0RnMU1TQXpPUzQ0TVRVNUlEVTFMamN3T0RsRE16a3VOak14TnlBMU5TNDFNekk0SURNNUxqVXlNalFnTlRVdU1qa3lOaUF6T1M0MU1URWdOVFV1TURNNFdrMDBOUzQxTXpReElEUTJMamMzT0VNME5TNHlOemc1SURRMkxqYzNPQ0EwTlM0d016UXlJRFEyTGpZM05qY2dORFF1T0RVek9DQTBOaTQwT1RZelF6UTBMalkzTXpNZ05EWXVNekUxT1NBME5DNDFOeklnTkRZdU1EY3hJRFEwTGpVM01pQTBOUzQ0TVRVNVF6UTBMalUzTWlBME5TNDFOakEzSURRMExqWTNNek1nTkRVdU16RTJNU0EwTkM0NE5UTTRJRFExTGpFek5UZERORFV1TURNME1pQTBOQzQ1TlRVeklEUTFMakkzT0RrZ05EUXVPRFUwSURRMUxqVXpOREVnTkRRdU9EVTBTRFE1TGpBM01VTTFNQzQyTkRFeUlEUTBMamcyTURJZ05USXVNVFV4TmlBME5DNHlOVEUzSURVekxqSTNPVEVnTkRNdU1UVTRPVU0xTXk0NE1qazVJRFF5TGpZeU9EZ2dOVFF1TWpZNElEUXhMams1TXpFZ05UUXVOVFkzTXlBME1TNHlPRGszUXpVMExqZzJOallnTkRBdU5UZzJOQ0ExTlM0d01qQTVJRE01TGpneU9UZ2dOVFV1TURJd09TQXpPUzR3TmpVMFF6VTFMakF5TURrZ016Z3VNekF4SURVMExqZzJOallnTXpjdU5UUTBOQ0ExTkM0MU5qY3pJRE0yTGpnME1VTTFOQzR5TmpnZ016WXVNVE0zTmlBMU15NDRNams1SURNMUxqVXdNVGtnTlRNdU1qYzVNU0F6TkM0NU56RTVRelV5TGpFMU1USWdNek11T0RjNU9DQTFNQzQyTkRFZ016TXVNamN5SURRNUxqQTNNU0F6TXk0eU56aERORGd1T0RRMklETXpMakkzT0NBME9DNDJOREV4SURNekxqSTROamtnTkRndU5EWXhNU0F6TXk0ek1EUTVRelE0TGpJMU9UY2dNek11TXpJek9DQTBPQzR3TlRreklETXpMak0xTXpNZ05EY3VPRFl4SURNekxqTTVNME0wTnk0Mk16VTBJRE16TGpRek9UVWdORGN1TkRBd05pQXpNeTQwTURVNUlEUTNMakU1TnlBek15NHlPVGd6UXpRMkxqazVNelFnTXpNdU1Ua3dOaUEwTmk0NE16TTJJRE16TGpBeE5UVWdORFl1TnpRMUlETXlMamd3TWpsRE5EWXVNVFUzTlNBek1TNHpOVEkxSURRMUxqRTBORE1nTXpBdU1URTBNU0EwTXk0NE16a2dNamt1TWpVd09VTTBNaTR6TVRNMElESTRMakkwTlRnZ05EQXVORGt4TmlBeU55NDNPRGc0SURNNExqWTNNaklnTWpjdU9UVTFRek0yTGpnMU1qa2dNamd1TVRJeE15QXpOUzR4TkRReElESTRMamt3TVNBek15NDRNallnTXpBdU1UWTJRek16TGpBNU55QXpNQzQ0TmpneklETXlMalV4TmprZ016RXVOekV3TWlBek1pNHhNakEwSURNeUxqWTBNVFpETXpFdU56SXpPQ0F6TXk0MU56STVJRE14TGpVeE9Ea2dNelF1TlRjME5pQXpNUzQxTVRjNUlETTFMalU0TmpsRE16RXVOVEUzT1NBek5TNDJNVEU1SURNeExqVXhOemtnTXpVdU5qTTVJRE14TGpVeE56a2dNelV1TmpZMFZqTTFMamN3TkRGRE16RXVOVEUzTXlBek5TNDRNekUySURNeExqUTVNVFlnTXpVdU9UVTNPQ0F6TVM0ME5ESXhJRE0yTGpBM05UUkRNekV1TXpreU55QXpOaTR4T1RNZ016RXVNekl3TlNBek5pNHlPVGsySURNeExqSXlPVGNnTXpZdU16ZzVORU16TVM0eE16a2dNell1TkRjNU1TQXpNUzR3TXpFMUlETTJMalUxTURJZ016QXVPVEV6TXlBek5pNDFPVGd6UXpNd0xqYzVOVElnTXpZdU5qUTJOU0F6TUM0Mk5qZzJJRE0yTGpZM01EY2dNekF1TlRReElETTJMalkyT1RsSU16QXVORGcyVERNd0xqTXhPQ0F6Tmk0Mk5qTklNekF1TVRnNU9VTXlPUzR3TnprZ016WXVOalU0T0NBeU9DNHdNVEExSURNM0xqQTRPVFVnTWpjdU1qRXpJRE0zTGpnMk0wTXlOaTQ0TWpJNUlETTRMakl6TnpjZ01qWXVOVEV5TmlBek9DNDJPRGMwSURJMkxqTXdNRGNnTXprdU1UZzFRekkyTGpBNE9EY2dNemt1TmpneU55QXlOUzQ1TnprMElEUXdMakl4T0RFZ01qVXVPVGM1TkNBME1DNDNOVGxETWpVdU9UYzVOQ0EwTVM0eU9UazVJREkyTGpBNE9EY2dOREV1T0RNMU15QXlOaTR6TURBM0lEUXlMak16TTBNeU5pNDFNVEkySURReUxqZ3pNRFlnTWpZdU9ESXlPU0EwTXk0eU9EQXlJREkzTGpJeE15QTBNeTQyTlRWRE1qZ3VNREV3TmlBME5DNDBNamd6SURJNUxqQTNPU0EwTkM0NE5UZzVJRE13TGpFNE9Ua2dORFF1T0RVME9VZ3pOQzQ1TkRKRE16VXVNVGszTWlBME5DNDROVFE1SURNMUxqUTBNVGdnTkRRdU9UVTJNeUF6TlM0Mk1qSXlJRFExTGpFek5qZERNelV1T0RBeU5pQTBOUzR6TVRjeElETTFMamt3TkRFZ05EVXVOVFl4TnlBek5TNDVNRFF4SURRMUxqZ3hOamhETXpVdU9UQTBNU0EwTmk0d056SWdNelV1T0RBeU5pQTBOaTR6TVRZNUlETTFMall5TWpJZ05EWXVORGszTTBNek5TNDBOREU0SURRMkxqWTNOemNnTXpVdU1UazNNaUEwTmk0M056a2dNelF1T1RReUlEUTJMamMzT1Vnek1DNHhPRGs1UXpJNExqVTFOamtnTkRZdU56ZzBOU0F5Tmk0NU9EWXpJRFEyTGpFMU1Ua2dNalV1T0RFeklEUTFMakF4TmpGRE1qVXVNalF3TVNBME5DNDBOalVnTWpRdU56ZzBNeUEwTXk0NE1ETTVJREkwTGpRM015QTBNeTR3TnpJMVF6STBMakUyTVRjZ05ESXVNelF4TVNBeU5DNHdNREV5SURReExqVTFORFFnTWpRdU1EQXhNaUEwTUM0M05UazFRekkwTGpBd01USWdNemt1T1RZME5pQXlOQzR4TmpFM0lETTVMakUzTnprZ01qUXVORGN6SURNNExqUTBOalZETWpRdU56ZzBNeUF6Tnk0M01UVXhJREkxTGpJME1ERWdNemN1TURVek9TQXlOUzQ0TVRNZ016WXVOVEF5T1VNeU5pNDRNelF5SURNMUxqVXhNelFnTWpndU1UWXlNeUF6TkM0NU1ERTRJREk1TGpVM09DQXpOQzQzTmpsRE1qa3VOemd4SURNeUxqVXdOQ0F6TUM0M09UTTJJRE13TGpNNE9ERWdNekl1TkRNd01TQXlPQzQ0TURsRE16UXVNRGMzT1NBeU55NHlNalV4SURNMkxqSXhOVGdnTWpZdU1qUTVNU0F6T0M0ME9USXhJREkyTGpBME1UbEROREF1TnpZNE15QXlOUzQ0TXpRM0lEUXpMakEwTnpJZ01qWXVOREE0TlNBME5DNDVOVFFnTWpjdU5qWTRPVU0wTmk0ek5qUTBJREk0TGpZd01qUWdORGN1TlRBMk5DQXlPUzQ0T0RneUlEUTRMakkyTnlBek1TNHpPVGc1UXpRNExqVTFNU0F6TVM0ek56QTVJRFE0TGpneUlETXhMak0xTmprZ05Ea3VNRFkzSURNeExqTTFOamxETlRFdU1UVTVNU0F6TVM0ek5TQTFNeTR4TnpFZ016SXVNVFl3TnlBMU5DNDJOelFnTXpNdU5qRTFPVU0xTlM0ME1EYzVJRE0wTGpNeU1UTWdOVFV1T1RreE9DQXpOUzR4TmpjM0lEVTJMak01TURZZ016WXVNVEEwTWtNMU5pNDNPRGsxSURNM0xqQTBNRGNnTlRZdU9UazFNU0F6T0M0d05EZ2dOVFl1T1RrMU1TQXpPUzR3TmpVNVF6VTJMams1TlRFZ05EQXVNRGd6T0NBMU5pNDNPRGsxSURReExqQTVNVE1nTlRZdU16a3dOaUEwTWk0d01qYzRRelUxTGprNU1UZ2dOREl1T1RZME15QTFOUzQwTURjNUlEUXpMamd4TURjZ05UUXVOamMwSURRMExqVXhOakZETlRNdU1UY3hJRFExTGprM01UTWdOVEV1TVRVNU1TQTBOaTQzT0RFM0lEUTVMakEyTnlBME5pNDNOelE1VERRMUxqVXpOREVnTkRZdU56YzRXaUlnWm1sc2JEMGlJMFEyUVVJd01DSXZQZzBLUEM5emRtYytEUW89XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpT0RJaUlHaGxhV2RvZEQwaU9ESWlJSFpwWlhkQ2IzZzlJakFnTUNBNE1pQTRNaUlnWm1sc2JEMGlibTl1WlNJZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWo0TkNqeHdZWFJvSUdROUlrMDFOQ0F3U0RJNFF6RXlMalV6TmlBd0lEQWdNVEl1TlRNMklEQWdNamhXTlRSRE1DQTJPUzQwTmpRZ01USXVOVE0ySURneUlESTRJRGd5U0RVMFF6WTVMalEyTkNBNE1pQTRNaUEyT1M0ME5qUWdPRElnTlRSV01qaERPRElnTVRJdU5UTTJJRFk1TGpRMk5DQXdJRFUwSURCYUlpQm1hV3hzUFNJalJqUkdORVpHSWk4K0RRbzhjR0YwYUNCa1BTSk5ORFl1TmpnMElEVTVMall4TnpsTU5ETXVNelk0SURVMkxqSXpPRXcwTUM0d05URWdOVGt1TmpFM09VTXpPUzQ1TXpNNElEVTVMamN6TnpnZ016a3VOemt6T0NBMU9TNDRNek15SURNNUxqWXpPVElnTlRrdU9EazRNa016T1M0ME9EUTNJRFU1TGprMk16SWdNemt1TXpFNE55QTFPUzQ1T1RZMklETTVMakUxTVNBMU9TNDVPVFkyUXpNNExqazRNek1nTlRrdU9UazJOaUF6T0M0NE1UY3pJRFU1TGprMk16SWdNemd1TmpZeU9DQTFPUzQ0T1RneVF6TTRMalV3T0RJZ05Ua3VPRE16TWlBek9DNHpOamd5SURVNUxqY3pOemdnTXpndU1qVXhJRFU1TGpZeE56bERNemd1TURFeElEVTVMak0zTVRnZ016Y3VPRGMyT0NBMU9TNHdOREUzSURNM0xqZzNOamdnTlRndU5qazRRek0zTGpnM05qZ2dOVGd1TXpVME15QXpPQzR3TVRFZ05UZ3VNREkwTWlBek9DNHlOVEVnTlRjdU56YzRNVXcwTVM0MU5qZ2dOVFF1TXprM09Vd3pPQzR5TlRFZ05URXVNREU1UXpNNExqQXhNU0ExTUM0M056STVJRE0zTGpnM05qZ2dOVEF1TkRReU9TQXpOeTQ0TnpZNElEVXdMakE1T1RGRE16Y3VPRGMyT0NBME9TNDNOVFUwSURNNExqQXhNU0EwT1M0ME1qVXhJRE00TGpJMU1TQTBPUzR4TnpsRE16Z3VNelk0TXlBME9TNHdOVGt5SURNNExqVXdPRFFnTkRndU9UWTBNU0F6T0M0Mk5qSTVJRFE0TGpnNU9USkRNemd1T0RFM05DQTBPQzQ0TXpReUlETTRMams0TXpRZ05EZ3VPREF3T0NBek9TNHhOVEVnTkRndU9EQXdPRU16T1M0ek1UZzJJRFE0TGpnd01EZ2dNemt1TkRnME5pQTBPQzQ0TXpReUlETTVMall6T1RFZ05EZ3VPRGs1TWtNek9TNDNPVE0ySURRNExqazJOREVnTXprdU9UTXpOeUEwT1M0d05Ua3lJRFF3TGpBMU1TQTBPUzR4TnpsTU5ETXVNelk0SURVeUxqVTFPVEZNTkRZdU5qZzBJRFE1TGpFM09VTTBOaTQ0TURFeklEUTVMakExT1RJZ05EWXVPVFF4TXlBME9DNDVOalF4SURRM0xqQTVOVGtnTkRndU9EazVNa00wTnk0eU5UQTBJRFE0TGpnek5ESWdORGN1TkRFMk5DQTBPQzQ0TURBNElEUTNMalU0TkNBME9DNDRNREE0UXpRM0xqYzFNVFlnTkRndU9EQXdPQ0EwTnk0NU1UYzJJRFE0TGpnek5ESWdORGd1TURjeU1TQTBPQzQ0T1RreVF6UTRMakl5TmpjZ05EZ3VPVFkwTVNBME9DNHpOalkzSURRNUxqQTFPVElnTkRndU5EZzBJRFE1TGpFM09VTTBPQzQzTWpNM0lEUTVMalF5TlRJZ05EZ3VPRFUzT0NBME9TNDNOVFUxSURRNExqZzFOemdnTlRBdU1EazVNVU0wT0M0NE5UYzRJRFV3TGpRME1qZ2dORGd1TnpJek55QTFNQzQzTnpJNElEUTRMalE0TkNBMU1TNHdNVGxNTkRVdU1UWTRJRFUwTGpNNU56bE1ORGd1TkRnMElEVTNMamMzT0RGRE5EZ3VOekl6T1NBMU9DNHdNalF5SURRNExqZzFPRElnTlRndU16VTBNeUEwT0M0NE5UZ3lJRFU0TGpZNU9FTTBPQzQ0TlRneUlEVTVMakEwTVRjZ05EZ3VOekl6T1NBMU9TNHpOekU0SURRNExqUTROQ0ExT1M0Mk1UYzVRelE0TGpNMk5qZ2dOVGt1TnpNM09DQTBPQzR5TWpZNElEVTVMamd6TXpJZ05EZ3VNRGN5TWlBMU9TNDRPVGd5UXpRM0xqa3hOemNnTlRrdU9UWXpNaUEwTnk0M05URTNJRFU1TGprNU5qWWdORGN1TlRnMElEVTVMams1TmpaRE5EY3VOREUyTXlBMU9TNDVPVFkySURRM0xqSTFNRFFnTlRrdU9UWXpNaUEwTnk0d09UVTRJRFU1TGpnNU9ESkRORFl1T1RReE15QTFPUzQ0TXpNeUlEUTJMamd3TVRNZ05Ua3VOek0zT0NBME5pNDJPRFFnTlRrdU5qRTNPVnBOTWpJdU1URTVJRFV6TGpjNFF6SXlMakV6TWpZZ05UTXVNRE0zTWlBeU1pNHpOalV6SURVeUxqTXhORGtnTWpJdU56ZzNPQ0ExTVM0M01ETTVRekl6TGpJeE1EUWdOVEV1TURreU9DQXlNeTQ0TURReElEVXdMall5TURNZ01qUXVORGswTXlBMU1DNHpORFUxUXpJMUxqRTRORFVnTlRBdU1EY3dOaUF5TlM0NU5EQTFJRFV3TGpBd05Ua2dNall1TmpZM05DQTFNQzR4TlRreVF6STNMak01TkRNZ05UQXVNekV5TlNBeU9DNHdOVGs0SURVd0xqWTNOamtnTWpndU5UZ3dNeUExTVM0eU1EZERNamt1TVRBd055QTFNUzQzTXpjeUlESTVMalExTXlBMU1pNDBNRGt6SURJNUxqVTVNamtnTlRNdU1UTTRPVU15T1M0M016STRJRFV6TGpnMk9EVWdNamt1TmpVME1TQTFOQzQyTWpNeklESTVMak0yTmpZZ05UVXVNekE0TTBNeU9TNHdOemt4SURVMUxqazVNelFnTWpndU5UazFOeUExTmk0MU56Z3lJREkzTGprM055QTFOaTQ1T0RrMVF6STNMak0xT0RNZ05UY3VOREF3T0NBeU5pNDJNekU1SURVM0xqWXlNRElnTWpVdU9EZzVJRFUzTGpZeU1ERkRNalF1T0Rnd01TQTFOeTQyTVRBeklESXpMamt4TmpNZ05UY3VNakF3TXlBeU15NHlNRGsySURVMkxqUTRNREpETWpJdU5UQXlPQ0ExTlM0M05qQXlJREl5TGpFeE1Ea2dOVFF1TnpnNE9TQXlNaTR4TWlBMU15NDNPRWd5TWk0eE1UbGFUVEkxTGpnNU1TQTBOeTQ0UXpJMUxqWXpNRGNnTkRjdU9EQXdNaUF5TlM0ek56QTRJRFEzTGpneE9ESWdNalV1TVRFeklEUTNMamcxTkVNeU5TNDVNVGMwSURRMExqazBNRFFnTWpjdU1qUXlNU0EwTWk0eE9UWXlJREk1TGpBeU15QXpPUzQzTlRNNVF6TXdMamd6TnprZ016Y3VNalkwTVNBek15NHhOVEE1SURNMUxqRTNPVE1nTXpVdU9ERTFNU0F6TXk0Mk16RTJRek00TGpRM09USWdNekl1TURnek9TQTBNUzQwTXpZeElETXhMakV3TnpJZ05EUXVORGs0SURNd0xqYzJNemxNTkRFdU56WTVJREk0TGpNME5UbEROREV1TlRFeklESTRMakV4TnlBME1TNHpOVFkySURJM0xqYzVOeklnTkRFdU16TXpNU0F5Tnk0ME5UUTJRelF4TGpNd09UVWdNamN1TVRFeUlEUXhMalF5TURnZ01qWXVOemN6TnlBME1TNDJORE1nTWpZdU5URXlRelF4TGpjMU1UUWdNall1TXpnek15QTBNUzQ0T0RRMUlESTJMakkzTnpnZ05ESXVNRE0wTkNBeU5pNHlNREUwUXpReUxqRTRORE1nTWpZdU1USTFNU0EwTWk0ek5EZ2dNall1TURjNU5DQTBNaTQxTVRVM0lESTJMakEyTnpSRE5ESXVOamd6TlNBeU5pNHdOVFUwSURReUxqZzFNaUF5Tmk0d056Y3lJRFF6TGpBeE1UTWdNall1TVRNeE0wTTBNeTR4TnpBMUlESTJMakU0TlRVZ05ETXVNekUzTkNBeU5pNHlOekV5SURRekxqUTBNeUF5Tmk0ek9ETXhURFE0TGpVNE9DQXpNQzQ1TkRNeFF6UTRMamcwTkNBek1TNHhOekl5SURRNUxqQXdNRFVnTXpFdU5Ea3lNaUEwT1M0d01qUWdNekV1T0RNMVF6UTVMakEwTnpVZ016SXVNVGMzTnlBME9DNDVNell6SURNeUxqVXhOakVnTkRndU56RTBJRE15TGpjM09ERk1ORFF1TWpReElETTRMakF5TWpsRE5EUXVNVE15TmlBek9DNHhOVEUySURRekxqazVPVFVnTXpndU1qVTNOQ0EwTXk0NE5EazFJRE00TGpNek16ZERORE11TmprNU5pQXpPQzQwTVRBeElEUXpMalV6TlRrZ016Z3VORFUxTmlBME15NHpOamdnTXpndU5EWTNOVU0wTXk0eU1EQXlJRE00TGpRM09UVWdORE11TURNeE55QXpPQzQwTlRjMElEUXlMamczTWpRZ016Z3VOREF6TVVNME1pNDNNVE15SURNNExqTTBPRGNnTkRJdU5UWTJOU0F6T0M0eU5qSTVJRFF5TGpRME1TQXpPQzR4TlRBNVF6UXlMakU0TlNBek55NDVNakU1SURReUxqQXlPRFlnTXpjdU5qQXlNU0EwTWk0d01EVXhJRE0zTGpJMU9UVkROREV1T1RneE5TQXpOaTQ1TVRZNUlEUXlMakE1TWpnZ016WXVOVGM0TnlBME1pNHpNVFVnTXpZdU16RTJPVXcwTkM0NE5UZ2dNek11TXpNMVF6UXlMakUwTlRRZ016TXVOakUzTVNBek9TNDFNakl5SURNMExqUTJOVElnTXpjdU1UVTNOeUF6TlM0NE1qUXlRek0wTGpjNU16SWdNemN1TVRnek15QXpNaTQzTkRBeElETTVMakF5TXpJZ016RXVNVE14SURReExqSXlOVEZETWprdU5qQTRJRFF6TGpNd05ETWdNamd1TkRRNU1pQTBOUzQyTWpZNElESTNMamN3TkNBME9DNHdPVFJETWpjdU1URTVOeUEwTnk0NE9UazBJREkyTGpVd056a2dORGN1T0RBd01pQXlOUzQ0T1RJZ05EY3VPRWd5TlM0NE9URmFUVFV6TGpRMU9TQXpNUzQyTnpBNVF6VXpMalEzTWpRZ016QXVPVEk0TVNBMU15NDNNRFE1SURNd0xqSXdOVGtnTlRRdU1USTNOQ0F5T1M0MU9UUTNRelUwTGpVME9UZ2dNamd1T1Rnek5pQTFOUzR4TkRNMElESTRMalV4TURnZ05UVXVPRE16TmlBeU9DNHlNelU0UXpVMkxqVXlNemdnTWpjdU9UWXdPU0ExTnk0eU56azRJREkzTGpnNU5Ua2dOVGd1TURBMk9DQXlPQzR3TkRreFF6VTRMamN6TXpnZ01qZ3VNakF5TWlBMU9TNHpPVGswSURJNExqVTJOallnTlRrdU9USWdNamt1TURrMk4wTTJNQzQwTkRBMUlESTVMall5TmpnZ05qQXVOemt5T1NBek1DNHlPVGc1SURZd0xqa3pNamtnTXpFdU1ESTROa00yTVM0d056STRJRE14TGpjMU9ESWdOakF1T1RrME1TQXpNaTQxTVRJNUlEWXdMamN3TmpjZ016TXVNVGs0UXpZd0xqUXhPVElnTXpNdU9EZ3pNU0ExT1M0NU16VTRJRE0wTGpRMk9ERWdOVGt1TXpFM01TQXpOQzQ0TnprMFF6VTRMalk1T0RRZ016VXVNamt3TnlBMU55NDVOeklnTXpVdU5URXdNU0ExTnk0eU1qa2dNelV1TlRGRE5UWXVNakl3TXlBek5TNDFNREF5SURVMUxqSTFOamNnTXpVdU1Ea3dOU0ExTkM0MU5TQXpOQzR6TnpBMlF6VXpMamcwTXpNZ016TXVOalV3T0NBMU15NDBOVEV5SURNeUxqWTNPVFlnTlRNdU5EWWdNekV1Tmpjd09VZzFNeTQwTlRsYVRUSTVMamd4TVNBek15NDRNVGt4VERJMkxqUTVOQ0F6TUM0ME16bE1Nak11TVRjNElETXpMamd4T1RGRE1qTXVNRFl3TnlBek15NDVNemc0SURJeUxqa3lNRGNnTXpRdU1ETXpPU0F5TWk0M05qWXhJRE0wTGpBNU9EbERNakl1TmpFeE5pQXpOQzR4TmpNNElESXlMalEwTlRZZ016UXVNVGszTXlBeU1pNHlOemdnTXpRdU1UazNNME15TWk0eE1UQTBJRE0wTGpFNU56TWdNakV1T1RRME5DQXpOQzR4TmpNNElESXhMamM0T1RrZ016UXVNRGs0T1VNeU1TNDJNelV6SURNMExqQXpNemtnTWpFdU5EazFNeUF6TXk0NU16ZzRJREl4TGpNM09DQXpNeTQ0TVRreFF6SXhMakV6T0RFZ016TXVOVGN6SURJeExqQXdNemdnTXpNdU1qUXlOeUF5TVM0d01ETTRJRE15TGpnNU9EbERNakV1TURBek9DQXpNaTQxTlRVeUlESXhMakV6T0RFZ016SXVNakkxTVNBeU1TNHpOemdnTXpFdU9UYzVUREkwTGpZNU5TQXlPQzQxT1RreFRESXhMak0zT0NBeU5TNHlNa015TVM0eE16Z3hJREkwTGprM016Z2dNakV1TURBek9DQXlOQzQyTkRNNElESXhMakF3TXpnZ01qUXVNME15TVM0d01ETTRJREl6TGprMU5qTWdNakV1TVRNNE1TQXlNeTQyTWpZZ01qRXVNemM0SURJekxqTTNPVGxETWpFdU5EazFNaUF5TXk0eU5UazVJREl4TGpZek5USWdNak11TVRZME55QXlNUzQzT0RrM0lESXpMakE1T1RaRE1qRXVPVFEwTXlBeU15NHdNelExSURJeUxqRXhNRE1nTWpNdU1EQXhJREl5TGpJM09DQXlNeTR3TURGRE1qSXVORFExTnlBeU15NHdNREVnTWpJdU5qRXhOeUF5TXk0d016UTFJREl5TGpjMk5qTWdNak11TURrNU5rTXlNaTQ1TWpBNUlESXpMakUyTkRjZ01qTXVNRFl3T0NBeU15NHlOVGs1SURJekxqRTNPQ0F5TXk0ek56azVUREkyTGpRNU5DQXlOaTQzTmt3eU9TNDRNVEVnTWpNdU16YzVPVU15T1M0NU1qZ3lJREl6TGpJMU9Ua2dNekF1TURZNE1pQXlNeTR4TmpRM0lETXdMakl5TWpjZ01qTXVNRGs1TmtNek1DNHpOemN6SURJekxqQXpORFVnTXpBdU5UUXpNeUF5TXk0d01ERWdNekF1TnpFeElESXpMakF3TVVNek1DNDROemczSURJekxqQXdNU0F6TVM0d05EUTNJREl6TGpBek5EVWdNekV1TVRrNU15QXlNeTR3T1RrMlF6TXhMak0xTXpnZ01qTXVNVFkwTnlBek1TNDBPVE00SURJekxqSTFPVGtnTXpFdU5qRXhJREl6TGpNM09UbERNekV1T0RVd05TQXlNeTQyTWpZeklETXhMams0TkRRZ01qTXVPVFUyTlNBek1TNDVPRFEwSURJMExqTkRNekV1T1RnME5DQXlOQzQyTkRNMklETXhMamcxTURVZ01qUXVPVGN6TmlBek1TNDJNVEVnTWpVdU1qSk1Namd1TWprMElESTRMall3TURGTU16RXVOakVnTXpFdU9UYzVRek14TGpnME9Ua2dNekl1TWpJMU1TQXpNUzQ1T0RReUlETXlMalUxTlRJZ016RXVPVGcwTWlBek1pNDRPVGc1UXpNeExqazRORElnTXpNdU1qUXlOeUF6TVM0NE5EazVJRE16TGpVM015QXpNUzQyTVNBek15NDRNVGt4UXpNeExqUTVNamNnTXpNdU9UTTVJRE14TGpNMU1qY2dNelF1TURNME1TQXpNUzR4T1RneUlETTBMakE1T1RGRE16RXVNRFF6TmlBek5DNHhOalF4SURNd0xqZzNOemNnTXpRdU1UazNOU0F6TUM0M01TQXpOQzR4T1RjMVF6TXdMalUwTWpRZ016UXVNVGszTlNBek1DNHpOelkwSURNMExqRTJOREVnTXpBdU1qSXhPQ0F6TkM0d09Ua3hRek13TGpBMk56TWdNelF1TURNME1TQXlPUzQ1TWpjeUlETXpMamt6T1NBeU9TNDRNU0F6TXk0NE1Ua3hTREk1TGpneE1Wb2lJR1pwYkd3OUlpTTFPRFUyUkRZaUx6NE5Dand2YzNablBnMEtcIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIzYVdSMGFEMGlPRElpSUdobGFXZG9kRDBpT0RJaUlIWnBaWGRDYjNnOUlqQWdNQ0E0TWlBNE1pSWdabWxzYkQwaWJtOXVaU0lnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JajROQ2p4d1lYUm9JR1E5SWswMU5DQXdTREk0UXpFeUxqVXpOaUF3SURBZ01USXVOVE0ySURBZ01qaFdOVFJETUNBMk9TNDBOalFnTVRJdU5UTTJJRGd5SURJNElEZ3lTRFUwUXpZNUxqUTJOQ0E0TWlBNE1pQTJPUzQwTmpRZ09ESWdOVFJXTWpoRE9ESWdNVEl1TlRNMklEWTVMalEyTkNBd0lEVTBJREJhSWlCbWFXeHNQU0lqUlRSR1JrVkZJaTgrRFFvOGNHRjBhQ0JrUFNKTk16a3VPRFkySURZd1F6TTVMak15TkRRZ05qQXVNREF3T1NBek9DNDRNREF5SURVNUxqZ3dPVE1nTXpndU16ZzJPQ0ExT1M0ME5UazFRek0zTGprM016UWdOVGt1TVRBNU5pQXpOeTQyT1RjM0lEVTRMall5TkRRZ016Y3VOakE1SURVNExqQTVNREZNTXpjdU1UYzJJRFUxTGpRNVF6TTJMak16TXpNZ05UVXVNak13T0NBek5TNDFNVFUySURVMExqZzVOakVnTXpRdU56TXpJRFUwTGpRNVRETXlMalUyTVNBMU5pNHdNelE1UXpNeUxqRTNOallnTlRZdU16RXpNeUF6TVM0M01UTTNJRFUyTGpRMk1qVWdNekV1TWpNNUlEVTJMalEyTURsRE16QXVPVE00TmlBMU5pNDBOakV5SURNd0xqWTBNU0ExTmk0ME1ERTVJRE13TGpNMk16WWdOVFl1TWpnMk5FTXpNQzR3T0RZeUlEVTJMakUzTURrZ01qa3VPRE0wTlNBMU5pNHdNREUySURJNUxqWXlNeUExTlM0M09EZ3hUREkzTGpNeU15QTFNeTQwT0RoRE1qWXVPVE00T0NBMU15NHhNRFkwSURJMkxqY3dNeUExTWk0Mk1EQTJJREkyTGpZMU56Z2dOVEl1TURZeFF6STJMall4TWpVZ05URXVOVEl4TkNBeU5pNDNOakE0SURVd0xqazRNeklnTWpjdU1EYzJJRFV3TGpVME0wd3lPQzQxT1RrZ05EZ3VOREkxTVVNeU9DNHhOalk0SURRM0xqWXlNekVnTWpjdU9ERXlOU0EwTmk0M09ERTNJREkzTGpVME1TQTBOUzQ1TVRJeFRESTBMamt4TXlBME5TNDBOalV4UXpJMExqTTNOamtnTkRVdU16YzJOaUF5TXk0NE9EazVJRFExTGpBNU9Ua2dNak11TlRNNU15QTBOQzQyT0RRNFF6SXpMakU0T0RjZ05EUXVNalk1TnlBeU1pNDVPVGMxSURRekxqYzBNek1nTWpNZ05ETXVNbFl6T1M0NU5EZERNakl1T1RrNE9TQXpPUzQwTURVMElESXpMakU1TURRZ016Z3VPRGd4SURJekxqVTBNRE1nTXpndU5EWTNOVU15TXk0NE9UQXlJRE00TGpBMU5ERWdNalF1TXpjMU55QXpOeTQzTnpnMElESTBMamt4SURNM0xqWTRPVGxNTWpjdU5EYzJJRE0zTGpJMU56RkRNamN1TnpNM05pQXpOaTR6T0RNM0lESTRMakE0TVRnZ016VXVOVE0zTVNBeU9DNDFNRFFnTXpRdU56STVUREkyTGprMU9TQXpNaTQxTlRZNVF6STJMalkwTlRJZ016SXVNVEUyTVNBeU5pNDBPVGMzSURNeExqVTNPRFVnTWpZdU5UUXlPU0F6TVM0d016a3pRekkyTGpVNE9ESWdNekF1TlRBd01TQXlOaTQ0TWpNeElESTVMams1TkRRZ01qY3VNakEySURJNUxqWXhNakZNTWprdU5URTNJREkzTGpNeE1rTXlPUzQ0T1RrZ01qWXVPVEk0TmlBek1DNDBNRFE0SURJMkxqWTVNeklnTXpBdU9UUTBNaUF5Tmk0Mk5EaERNekV1TkRnek5pQXlOaTQyTURJM0lETXlMakF5TVRVZ01qWXVOelV3TlNBek1pNDBOaklnTWpjdU1EWTBPVXd6TkM0MU9EZ2dNamd1TlRrMlF6TTFMak00T1RRZ01qZ3VNVFl6TVNBek5pNHlNekEySURJM0xqZ3dPRFlnTXpjdU1TQXlOeTQxTXpjeFRETTNMalUwT0NBeU5DNDVNRGc1UXpNM0xqWXpOamdnTWpRdU16YzFOeUF6Tnk0NU1URTRJREl6TGpnNU1UTWdNemd1TXpJME1pQXlNeTQxTkRFNFF6TTRMamN6TmpVZ01qTXVNVGt5TWlBek9TNHlOVGswSURJekxqQXdNRElnTXprdU9DQXlNMGcwTXk0d05UUkRORE11TlRrMU5DQXlNaTQ1T1RreElEUTBMakV4T1RZZ01qTXVNVGt3TkNBME5DNDFNek1nTWpNdU5UUkRORFF1T1RRMk5DQXlNeTQ0T0RrM0lEUTFMakl5TWpFZ01qUXVNemMwT1NBME5TNHpNVEVnTWpRdU9UQTRPVXcwTlM0M05ETWdNamN1TkRjMU1VTTBOaTQyTkRjZ01qY3VOelEzTkNBME55NDFNakl4SURJNExqRXdOelFnTkRndU16VTJJREk0TGpVMU1ERk1OVEF1TlRBMUlESTNMakF5UXpVd0xqZzRPVElnTWpZdU56UXhOeUExTVM0ek5URTNJREkyTGpVNU1qWWdOVEV1T0RJMklESTJMalU1TkVNMU1pNHhNalkwSURJMkxqVTVNellnTlRJdU5ESTBJREkyTGpZMU1qY2dOVEl1TnpBeE15QXlOaTQzTmpneFF6VXlMamszT0RjZ01qWXVPRGd6TkNBMU15NHlNekExSURJM0xqQTFNamdnTlRNdU5EUXlJREkzTGpJMk5qRk1OVFV1TnpReUlESTVMalUyTlRsRE5UWXVNVEkyTlNBeU9TNDVORGMySURVMkxqTTJNalFnTXpBdU5EVXpPQ0ExTmk0ME1EYzNJRE13TGprNU16ZEROVFl1TkRVeklETXhMalV6TXpVZ05UWXVNekEwTmlBek1pNHdOekUySURVMUxqazRPU0F6TWk0MU1USk1OVFF1TkRVNUlETTBMalkxTXpGRE5UUXVPRGcwTXlBek5TNDBOVGcxSURVMUxqSXpNelVnTXpZdU16QXhPU0ExTlM0MU1ESWdNemN1TVRjeU1VdzFPQzR4TURJZ016Y3VOakV6UXpVNExqWXpOVGNnTXpjdU5qazVOeUExT1M0eE1qQTBJRE0zTGprM05URWdOVGt1TkRZNElETTRMak00T1RKRE5Ua3VPREUxTnlBek9DNDRNRE15SURZd0xqQXdNeUF6T1M0ek1qZ3pJRFU1TGprNU5pQXpPUzQ0TmpnNVZqUXpMakV5TXpGRE5Ua3VPVGszSURRekxqWTJORFVnTlRrdU9EQTFOU0EwTkM0eE9EZzNJRFU1TGpRMU5Ua2dORFF1TmpBeU1VTTFPUzR4TURZeUlEUTFMakF4TlRRZ05UZ3VOakl4TVNBME5TNHlPVEVnTlRndU1EZzNJRFExTGpNM09UbE1OVFV1TkRnM0lEUTFMamd4TTBNMU5TNHlNVGc0SURRMkxqWTRNemNnTlRRdU9EWTVOaUEwTnk0MU1qYzBJRFUwTGpRME5DQTBPQzR6TXpOTU5UVXVPVGMwSURVd0xqUTRNVU0xTmk0eU9EYzVJRFV3TGpreU1UY2dOVFl1TkRNMU15QTFNUzQwTlRrMklEVTJMak01TURFZ05URXVPVGs0T0VNMU5pNHpORFE1SURVeUxqVXpPQ0ExTmk0eE1EazVJRFV6TGpBME16Y2dOVFV1TnpJM0lEVXpMalF5Tmt3MU15NDBNamNnTlRVdU56STJNVU0xTXk0d05EVWdOVFl1TVRBNU5TQTFNaTQxTXpreUlEVTJMak0wTkRjZ05URXVPVGs1T1NBMU5pNHpPRGs1UXpVeExqUTJNRFVnTlRZdU5ETTFNU0ExTUM0NU1qSTJJRFUyTGpJNE56UWdOVEF1TkRneUlEVTFMamszTWpsTU5EZ3VNelF4SURVMExqUTBNekZETkRjdU5UTTFNU0ExTkM0NE5qZ3hJRFEyTGpZNU1UVWdOVFV1TWpFM01pQTBOUzQ0TWpFZ05UVXVORGcyTVV3ME5TNHpPREVnTlRndU1EZzFPVU0wTlM0eU9USTBJRFU0TGpZeU1ESWdORFV1TURFMk55QTFPUzR4TURVM0lEUTBMall3TXpNZ05Ua3VORFUxTmtNME5DNHhPRGs1SURVNUxqZ3dOVFFnTkRNdU5qWTFOaUExT1M0NU9UY2dORE11TVRJMElEVTVMams1TmpGTU16a3VPRFkySURZd1drMHpOUzR4T1RnZ05USXVNemM0T1VNek5pNHhPVEUzSURVeUxqazFNVFVnTXpjdU1qVTNOU0ExTXk0ek9EZzNJRE00TGpNMk55QTFNeTQyTnpsRE16Z3VOVFl4TnlBMU15NDNNamc0SURNNExqY3pOellnTlRNdU9ETTBNeUF6T0M0NE56TTFJRFV6TGprNE1qUkRNemt1TURBNU15QTFOQzR4TXpBMUlETTVMakE1T1RFZ05UUXVNekUwTnlBek9TNHhNeklnTlRRdU5URXlPVXd6T1M0Mk56TWdOVGN1TnpaRE16a3VOamd3TlNBMU55NDRNRGMxSURNNUxqY3dORGdnTlRjdU9EVXdPQ0F6T1M0M05ERTFJRFUzTGpnNE1UaERNemt1TnpjNE1pQTFOeTQ1TVRJNUlETTVMamd5TkRrZ05UY3VPVEk1TlNBek9TNDROek1nTlRjdU9USTVTRFF6TGpFeU4wTTBNeTR4TnpVeElEVTNMamt5T1RVZ05ETXVNakl4T0NBMU55NDVNVEk1SURRekxqSTFPRFVnTlRjdU9EZ3hPRU0wTXk0eU9UVXpJRFUzTGpnMU1EZ2dORE11TXpFNU5pQTFOeTQ0TURjMUlEUXpMak15TnlBMU55NDNOa3cwTXk0NE56WWdOVFF1TlRFeU9VTTBNeTQ1TURjM0lEVTBMak14TkRJZ05ETXVPVGszTVNBMU5DNHhNamt5SURRMExqRXpNekVnTlRNdU9UZ3hRelEwTGpJMk9USWdOVE11T0RNeU55QTBOQzQwTkRVNElEVXpMamN5TnpZZ05EUXVOalF4SURVekxqWTNPVU0wTlM0M056a3hJRFV6TGpNNE5qa2dORFl1T0RZNU9DQTFNaTQ1TXpRZ05EY3VPRGdnTlRJdU16TTBRelE0TGpBMU16Z2dOVEl1TWpNeE5DQTBPQzR5TlRNMElEVXlMakU0TVRRZ05EZ3VORFUxSURVeUxqRTRPVGRETkRndU5qVTJOU0ExTWk0eE9UZ2dORGd1T0RVeE5DQTFNaTR5TmpRMklEUTVMakF4TmlBMU1pNHpPREV4VERVeExqWTVPQ0ExTkM0eU9VTTFNUzQzTXpFeklEVTBMak14TlRjZ05URXVOemN5SURVMExqTXlPVGdnTlRFdU9ERTBJRFUwTGpNek1ERkROVEV1T0RReE5TQTFOQzR6TXpBMElEVXhMamcyT0RjZ05UUXVNekkwT1NBMU1TNDRPVFFnTlRRdU16RTBNa00xTVM0NU1Ua3pJRFUwTGpNd016VWdOVEV1T1RReU1TQTFOQzR5T0RjNUlEVXhMamsyTVNBMU5DNHlOamd4VERVMExqSTJNU0ExTVM0NU5qaEROVFF1TWprME5DQTFNUzQ1TXpNMElEVTBMak14TkRnZ05URXVPRGc0TkNBMU5DNHpNVGtnTlRFdU9EUXdOa00xTkM0ek1qTXlJRFV4TGpjNU1qY2dOVFF1TXpFd09TQTFNUzQzTkRRNUlEVTBMakk0TkNBMU1TNDNNRFV4VERVeUxqTTNOU0EwT1M0d01UUTVRelV5TGpJMU9EVWdORGd1T0RVd05DQTFNaTR4T1RJeElEUTRMalkxTlRnZ05USXVNVGcwSURRNExqUTFORE5ETlRJdU1UYzFPQ0EwT0M0eU5USTVJRFV5TGpJeU5qSWdORGd1TURVek15QTFNaTR6TWprZ05EY3VPRGM1T1VNMU1pNDVNamc0SURRMkxqZzJPVFVnTlRNdU16Z3hOeUEwTlM0M056a3hJRFV6TGpZM05DQTBOQzQyTkRFeFF6VXpMamN5TkRFZ05EUXVORFEyTXlBMU15NDRNamszSURRMExqSTNJRFV6TGprM056a2dORFF1TVRNMFF6VTBMakV5TmpFZ05ETXVPVGs0TVNBMU5DNHpNVEEySURRekxqa3dPRElnTlRRdU5UQTVJRFF6TGpnM05VdzFOeTQzTlRVZ05ETXVNek0wUXpVM0xqZ3dNamNnTkRNdU16STJPQ0ExTnk0NE5EWXlJRFF6TGpNd01qWWdOVGN1T0RjM05DQTBNeTR5TmpVNVF6VTNMamt3T0RjZ05ETXVNakk1TVNBMU55NDVNalUySURRekxqRTRNak1nTlRjdU9USTFJRFF6TGpFek5FZzFOeTQ1TXpKV016a3VPRGM1T1VNMU55NDVNekkySURNNUxqZ3pNVGNnTlRjdU9URTFOeUF6T1M0M09EVWdOVGN1T0RnME5DQXpPUzQzTkRnelF6VTNMamcxTXpJZ016a3VOekV4TlNBMU55NDRNRGszSURNNUxqWTROeklnTlRjdU56WXlJRE01TGpZM09UbE1OVFF1TlRFMklETTVMakV6TVRGRE5UUXVNekUzTWlBek9TNHdPVGs0SURVMExqRXpNaUF6T1M0d01UQTBJRFV6TGprNE16WWdNemd1T0RjME0wTTFNeTQ0TXpVeklETTRMamN6T0RJZ05UTXVOek13TkNBek9DNDFOakUwSURVekxqWTRNaUF6T0M0ek5qWkROVE11TXpnNU15QXpOeTR5TWpnMElEVXlMamt6TmpVZ016WXVNVE00TVNBMU1pNHpNemNnTXpVdU1USTNPVU0xTWk0eU16UXpJRE0wTGprMU5ERWdOVEl1TVRnMElETTBMamMxTkRNZ05USXVNVGt5TkNBek5DNDFOVEkxUXpVeUxqSXdNRGNnTXpRdU16VXdOeUExTWk0eU5qY3pJRE0wTGpFMU5UY2dOVEl1TXpnMElETXpMams1TVV3MU5DNHlPVE1nTXpFdU16RXdNVU0xTkM0ek1qQXhJRE14TGpJM01ERWdOVFF1TXpNeU5pQXpNUzR5TWpFNUlEVTBMak15T0RRZ016RXVNVGN6T0VNMU5DNHpNalF5SURNeExqRXlOVGNnTlRRdU16QXpOaUF6TVM0d09EQTJJRFUwTGpJM0lETXhMakEwTlRsTU5URXVPVGNnTWpndU56UTJNVU0xTVM0NU5UQTRJREk0TGpjeU5qWWdOVEV1T1RJM09TQXlPQzQzTVRFeElEVXhMamt3TWpjZ01qZ3VOekF3TkVNMU1TNDROemMxSURJNExqWTRPVGdnTlRFdU9EVXdOQ0F5T0M0Mk9EUXlJRFV4TGpneU15QXlPQzQyT0RReFF6VXhMamM0TVRRZ01qZ3VOamcyTnlBMU1TNDNOREUwSURJNExqY3dNRFVnTlRFdU56QTNJREk0TGpjeU5ERk1ORGt1TURRZ016QXVOak01T1VNME9DNDROelUxSURNd0xqYzFOamdnTkRndU5qZ3dOaUF6TUM0NE1qTTBJRFE0TGpRM09TQXpNQzQ0TXpFNFF6UTRMakkzTnpRZ016QXVPRFF3TVNBME9DNHdOemMySURNd0xqYzRPVGtnTkRjdU9UQTBJRE13TGpZNE4wTTBOaTQ0TmprM0lETXdMakEzTmprZ05EVXVOelV5T1NBeU9TNDJNVGc0SURRMExqVTRPQ0F5T1M0ek1qWTVRelEwTGpNNU1UUWdNamt1TWpjMk5DQTBOQzR5TVRNMklESTVMakUyT1RrZ05EUXVNRGMyTkNBeU9TNHdNakF6UXpRekxqa3pPVEVnTWpndU9EY3dOaUEwTXk0NE5EZzBJREk0TGpZNE5ESWdORE11T0RFMUlESTRMalE0TXpsTU5ETXVNamMwSURJMUxqSTJNVU0wTXk0eU5qWTRJREkxTGpJeE16TWdORE11TWpReU5pQXlOUzR4TmprNUlEUXpMakl3TlRnZ01qVXVNVE00TjBNME15NHhOamt4SURJMUxqRXdOelFnTkRNdU1USXlNeUF5TlM0d09UQTFJRFF6TGpBM05DQXlOUzR3T1RFeFNETTVMamd5UXpNNUxqYzNNVGdnTWpVdU1Ea3dOU0F6T1M0M01qVWdNalV1TVRBM05DQXpPUzQyT0RneUlESTFMakV6T0RkRE16a3VOalV4TlNBeU5TNHhOams1SURNNUxqWXlOek1nTWpVdU1qRXpNeUF6T1M0Mk1pQXlOUzR5TmpGTU16a3VNRFkwSURJNExqVXpNVU16T1M0d01qZ3lJREk0TGpjeU9ESWdNemd1T1RNM015QXlPQzQ1TVRFeUlETTRMamd3TVRjZ01qa3VNRFU0T0VNek9DNDJOall4SURJNUxqSXdOalVnTXpndU5Ea3hOU0F5T1M0ek1USTJJRE00TGpJNU9DQXlPUzR6TmpWRE16Y3VNVFl4TmlBeU9TNDJOakUwSURNMkxqQTNNemdnTXpBdU1URTVPQ0F6TlM0d05qZ2dNekF1TnpJMk1VTXpOQzQ0T1RJNUlETXdMamd5T0RnZ016UXVOamt5SURNd0xqZzNPRGtnTXpRdU5EZzVNU0F6TUM0NE56QTJRek0wTGpJNE5qTWdNekF1T0RZeU15QXpOQzR3T1RBeElETXdMamM1TlRjZ016TXVPVEkwSURNd0xqWTNPVXd6TVM0eU5UY2dNamd1TnpjNU1VTXpNUzR5TVRjNUlESTRMamMxTURNZ016RXVNVFk1TmlBeU9DNDNNelkzSURNeExqRXlNVElnTWpndU56UXhRek14TGpBM01qZ2dNamd1TnpRMU1pQXpNUzR3TWpjMklESTRMamMyTmprZ016QXVPVGswSURJNExqZ3dNa3d5T0M0Mk9UUWdNekV1TVRBeU1VTXlPQzQyTmpBNElETXhMakV6TmprZ01qZ3VOalF3TkNBek1TNHhPREl5SURJNExqWXpOalFnTXpFdU1qTXdNa015T0M0Mk16STBJRE14TGpJM09ETWdNamd1TmpRMUlETXhMak15TmpFZ01qZ3VOamN5SURNeExqTTJOa3d6TUM0MU9UWWdNelF1TURZMU9VTXpNQzQzTVRNNElETTBMakl5T0RjZ016QXVOemd4TnlBek5DNDBNakkwSURNd0xqYzVNVE1nTXpRdU5qSXpNVU16TUM0NE1EQTRJRE0wTGpneU16Y2dNekF1TnpVeE9DQXpOUzR3TWpJNElETXdMalkxSURNMUxqRTVOa016TUM0d05UY3pJRE0yTGpJd09UWWdNamt1TmpFeU5TQXpOeTR6TURJMUlESTVMak15T1NBek9DNDBOREU1UXpJNUxqSTNPRGNnTXpndU5qTTROaUF5T1M0eE56SXhJRE00TGpneE5qTWdNamt1TURJeU5DQXpPQzQ1TlRNMFF6STRMamczTWpjZ016a3VNRGt3TlNBeU9DNDJPRFl6SURNNUxqRTRNVElnTWpndU5EZzJJRE01TGpJeE5ERk1NalV1TWpZeklETTVMamMxTkRsRE1qVXVNakUxTXlBek9TNDNOakl4SURJMUxqRTNNVGtnTXprdU56ZzJOU0F5TlM0eE5EQTJJRE01TGpneU16SkRNalV1TVRBNU5DQXpPUzQ0TmlBeU5TNHdPVEkxSURNNUxqa3dOamdnTWpVdU1Ea3pJRE01TGprMU5URldORE11TWpBNFF6STFMakE1TWpVZ05ETXVNalUyTWlBeU5TNHhNRGswSURRekxqTXdNekVnTWpVdU1UUXdOaUEwTXk0ek16azRRekkxTGpFM01Ua2dORE11TXpjMk5pQXlOUzR5TVRVeklEUXpMalF3TURjZ01qVXVNall6SURRekxqUXdPRXd5T0M0MU16TWdORE11T1RZME1VTXlPQzQzTXpBMElEUXpMams1T1RjZ01qZ3VPVEV6TmlBME5DNHdPVEExSURJNUxqQTJNVFVnTkRRdU1qSTJNVU15T1M0eU1Ea3pJRFEwTGpNMk1UY2dNamt1TXpFMU5pQTBOQzQxTXpZMElESTVMak0yT0NBME5DNDNNME15T1M0Mk5qUWdORFV1T0RZMk15QXpNQzR4TWpJZ05EWXVPVFUwTVNBek1DNDNNamdnTkRjdU9UWkRNekF1T0RNd09TQTBPQzR4TXpVeUlETXdMamc0TVRJZ05EZ3VNek0yTXlBek1DNDROek14SURRNExqVXpPVE5ETXpBdU9EWTBPU0EwT0M0M05ESXpJRE13TGpjNU9EWWdORGd1T1RNNE5pQXpNQzQyT0RJZ05Ea3VNVEExVERJNExqYzRNaUExTVM0M056RkRNamd1TnpVMUlEVXhMamd4TURnZ01qZ3VOelF5TlNBMU1TNDROVGcySURJNExqYzBOamNnTlRFdU9UQTJOVU15T0M0M05UQTVJRFV4TGprMU5EUWdNamd1TnpjeE5TQTFNUzQ1T1RrMElESTRMamd3TlNBMU1pNHdNek01VERNeExqRXdOU0ExTkM0ek16UkRNekV1TVRJME15QTFOQzR6TlRNMElETXhMakUwTnpJZ05UUXVNelk0TnlBek1TNHhOekkwSURVMExqTTNPVEpETXpFdU1UazNOaUExTkM0ek9EazJJRE14TGpJeU5EY2dOVFF1TXprMU1TQXpNUzR5TlRJZ05UUXVNemsxUXpNeExqSTVNelFnTlRRdU16a3lOeUF6TVM0ek16TTBJRFUwTGpNM09UWWdNekV1TXpZNElEVTBMak0xTmpsTU16UXVNRGN6SURVeUxqUXpNVGxETXpRdU1qUTNOU0ExTWk0ek1EVTFJRE0wTGpRMU56WWdOVEl1TWpNNE1TQXpOQzQyTnpNZ05USXVNak01UXpNMExqZzFOemNnTlRJdU1qTTVNeUF6TlM0d016a3lJRFV5TGpJNE56RWdNelV1TWlBMU1pNHpOemM1VERNMUxqRTVPQ0ExTWk0ek56ZzVXazB6TXk0MU1pQTBNUzQwT1RZeFF6TXpMalV5TURJZ016a3VPVEUzTVNBek15NDVPRGcySURNNExqTTNNellnTXpRdU9EWTJJRE0zTGpBMk1EaERNelV1TnpRek5DQXpOUzQzTkRnZ016WXVPVGt3TXlBek5DNDNNalE0SURNNExqUTBPVElnTXpRdU1USXdOa016T1M0NU1EZ2dNek11TlRFMk5DQTBNUzQxTVRNeUlETXpMak0xT0RRZ05ETXVNRFl4T1NBek15NDJOalkxUXpRMExqWXhNRFVnTXpNdU9UYzBOaUEwTmk0d016TWdNelF1TnpNMUlEUTNMakUwT1RZZ016VXVPRFV4TmtNME9DNHlOall4SURNMkxqazJPREVnTkRrdU1ESTJOU0F6T0M0ek9UQTJJRFE1TGpNek5EWWdNemt1T1RNNU1rTTBPUzQyTkRJM0lEUXhMalE0TnprZ05Ea3VORGcwTmlBME15NHdPVE15SURRNExqZzRNRFVnTkRRdU5UVXlRelE0TGpJM05qTWdORFl1TURFd09TQTBOeTR5TlRNeElEUTNMakkxTnpZZ05EVXVPVFF3TXlBME9DNHhNelZETkRRdU5qSTNOU0EwT1M0d01USTBJRFF6TGpBNE5DQTBPUzQwT0RBNElEUXhMalV3TlNBME9TNDBPREZETXprdU16ZzNOQ0EwT1M0ME56azVJRE0zTGpNMU5qa2dORGd1TmpNNE1TQXpOUzQ0TlRrMklEUTNMakUwTURaRE16UXVNell5TXlBME5TNDJORE15SURNekxqVXlNRGdnTkRNdU5qRXlOeUF6TXk0MU1pQTBNUzQwT1RVeFZqUXhMalE1TmpGYVRUTTFMall3TnlBME1TNDBPVFl4UXpNMUxqWXdOeUEwTWk0Mk5qTWdNelV1T1RVeklEUXpMamd3TXpjZ016WXVOakF4TXlBME5DNDNOek01UXpNM0xqSTBPVFlnTkRVdU56UTBNaUF6T0M0eE56RXhJRFEyTGpVd01ESWdNemt1TWpRNU1pQTBOaTQ1TkRZNFF6UXdMak15TnpNZ05EY3VNemt6TXlBME1TNDFNVE0ySURRM0xqVXhNRFFnTkRJdU5qVTRJRFEzTGpJNE1qZERORE11T0RBeU5TQTBOeTR3TlRVeElEUTBMamcxTXpnZ05EWXVORGt6TVNBME5TNDJOemc1SURRMUxqWTJPRU0wTmk0MU1EUXhJRFEwTGpnME1qZ2dORGN1TURZMklEUXpMamM1TVRVZ05EY3VNamt6TnlBME1pNDJORGRETkRjdU5USXhNeUEwTVM0MU1ESTFJRFEzTGpRd05EVWdOREF1TXpFMk5DQTBOaTQ1TlRjNUlETTVMakl6T0RORE5EWXVOVEV4TkNBek9DNHhOakF5SURRMUxqYzFOVEVnTXpjdU1qTTROaUEwTkM0M09EUTVJRE0yTGpVNU1ETkRORE11T0RFME5pQXpOUzQ1TkRJZ05ESXVOamN6T1NBek5TNDFPVFlnTkRFdU5UQTNJRE0xTGpVNU5rTXpPUzQ1TkRJMElETTFMalU1TmlBek9DNDBOREU1SURNMkxqSXhOelVnTXpjdU16TTFOQ0F6Tnk0ek1qTTNRek0yTGpJeU9TQXpPQzQwTXlBek5TNDJNRGN6SURNNUxqa3pNRFVnTXpVdU5qQTNJRFF4TGpRNU5URldOREV1TkRrMk1Wb2lJR1pwYkd3OUlpTTBNRGszTlVZaUx6NE5Dand2YzNablBnMEtcIiIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9zbWFydC1kMmM2YWZmYjUzNjg5YWQwZmQ3MmE3MjU1OWE1Y2JhOS5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpT0RJaUlHaGxhV2RvZEQwaU9ESWlJSFpwWlhkQ2IzZzlJakFnTUNBNE1pQTRNaUlnWm1sc2JEMGlibTl1WlNJZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWo0TkNqeHdZWFJvSUdROUlrMDFOQ0F3U0RJNFF6RXlMalV6TmlBd0lEQWdNVEl1TlRNMklEQWdNamhXTlRSRE1DQTJPUzQwTmpRZ01USXVOVE0ySURneUlESTRJRGd5U0RVMFF6WTVMalEyTkNBNE1pQTRNaUEyT1M0ME5qUWdPRElnTlRSV01qaERPRElnTVRJdU5UTTJJRFk1TGpRMk5DQXdJRFUwSURCYUlpQm1hV3hzUFNJalJVRkdPVVpHSWk4K0RRbzhjR0YwYUNCa1BTSk5NekF1TmpVeklEWXhRek13TGpVek1Ua2dOakF1T1RrNU5pQXpNQzQwTVRJZ05qQXVPVGMxTWlBek1DNHpNREF5SURZd0xqa3lPRFZETXpBdU1UZzROQ0EyTUM0NE9ERTNJRE13TGpBNE55QTJNQzQ0TVRNMUlETXdMakF3TVRZZ05qQXVOekkzTlVNeU9TNDVNVFl6SURZd0xqWTBNVFVnTWprdU9EUTROeUEyTUM0MU16azJJREk1TGpnd01qZ2dOakF1TkRJM05VTXlPUzQzTlRZNUlEWXdMak14TlRRZ01qa3VOek16TlNBMk1DNHhPVFV4SURJNUxqY3pOQ0EyTUM0d056UldOVGN1T0Rnek1VTXlPUzQzTXpJeUlEVTNMakUwT1RRZ016QXVNREl4TkNBMU5pNDBORFE1SURNd0xqVXpPRE1nTlRVdU9USTBNME16TVM0d05UVXlJRFUxTGpRd016Y2dNekV1TnpVM05DQTFOUzR4TURrMElETXlMalE1TVRFZ05UVXVNVEEyU0RNMExqSldOVEF1T0RVNE9VTXpOQzR4T1RreElEVXdMalkxTWpFZ016UXVNalkzTlNBMU1DNDBOVEV6SURNMExqTTVORFFnTlRBdU1qZzRNVU16TkM0MU1qRTBJRFV3TGpFeU5Ea2dNelF1TmprNU5DQTFNQzR3TURnNUlETTBMamt3TURFZ05Ea3VPVFU1U0RNMExqa3hNa016TlM0NU1EZzFJRFE1TGpjeU5USWdNell1TnpnMk15QTBPUzR4TXpjNUlETTNMak00TWpRZ05EZ3VNekExT1VNek55NDVOemcwSURRM0xqUTNNemtnTXpndU1qVXlNeUEwTmk0ME5UTTNJRE00TGpFMU15QTBOUzQwTXpVeFF6TTFMamczT0RJZ05EUXVNelk1TWlBek5DNHdNVEEzSURReUxqVTVNemtnTXpJdU9ETXhJRFF3TGpNM05rTXpNaTR6TlRnMUlETTVMalUzTVRFZ016RXVPVFF6T0NBek9DNDNNek00SURNeExqVTVNREVnTXpjdU9EY3dNVU15T1M0Mk1ETXpJRE0yTGpjM05pQXlOeTQ0T1RFZ016VXVNalEwT1NBeU5pNDFPREkwSURNekxqTTVNak5ETWpVdU1qY3pPQ0F6TVM0MU16azRJREkwTGpRd016RWdNamt1TkRFME1pQXlOQzR3TXpZZ01qY3VNVGMyUXpJekxqazNNREVnTWpZdU56WTFNeUF5TXk0NU9UUXhJREkyTGpNME5USWdNalF1TVRBMk1TQXlOUzQ1TkRRMlF6STBMakl4T0RJZ01qVXVOVFEwSURJMExqUXhOVGNnTWpVdU1UY3lNaUF5TkM0Mk9EVXhJREkwTGpnMU5USkRNalF1T1RVME5pQXlOQzQxTXpneklESTFMakk0T1RVZ01qUXVNamd6TlNBeU5TNDJOalk0SURJMExqRXdPRFJETWpZdU1EUTBNaUF5TXk0NU16TXpJREkyTGpRMU5TQXlNeTQ0TkRJeUlESTJMamczTVNBeU15NDROREV4U0RJNUxqWTBObFl5TWk0NU5qZERNamt1TmpRME5DQXlNaTQwTkRnNElESTVMamcwT0RZZ01qRXVPVFV4TVNBek1DNHlNVE0zSURJeExqVTRNek5ETXpBdU5UYzROeUF5TVM0eU1UVTBJRE14TGpBM05EZ2dNakV1TURBM015QXpNUzQxT1RNZ01qRXVNREEwT1VnMU1DNDBNRGRETlRBdU9USTFNeUF5TVM0d01EY3pJRFV4TGpReU1UWWdNakV1TWpFMU5DQTFNUzQzT0RZNElESXhMalU0TXpORE5USXVNVFV5SURJeExqazFNVEVnTlRJdU16VTJNeUF5TWk0ME5EZzNJRFV5TGpNMU5TQXlNaTQ1TmpkV01qTXVPRFF4TVVnMU5TNHhNamt4UXpVMUxqVTBOU0F5TXk0NE5ESXpJRFUxTGprMU5UY2dNak11T1RNek55QTFOaTR6TXpNZ01qUXVNVEE0T1VNMU5pNDNNVEF5SURJMExqSTROQ0ExTnk0d05EVXhJREkwTGpVek9EZ2dOVGN1TXpFME5TQXlOQzQ0TlRVM1F6VTNMalU0TXprZ01qVXVNVGN5TmlBMU55NDNPREUxSURJMUxqVTBOQ0ExTnk0NE9UTTJJREkxTGprME5EWkROVGd1TURBMU55QXlOaTR6TkRVeElEVTRMakF5T1RjZ01qWXVOelkxTXlBMU55NDVOalFnTWpjdU1UYzJRelUzTGpVNU55QXlPUzQwTVRReElEVTJMamN5TmpVZ016RXVOVE01TmlBMU5TNDBNVGd4SURNekxqTTVNakZETlRRdU1UQTVOeUF6TlM0eU5EUTJJRFV5TGpNNU56WWdNell1TnpjMU9TQTFNQzQwTVRFZ016Y3VPRGN3TVVNMU1DNHdOVFkySURNNExqY3pNemNnTkRrdU5qUXhOaUF6T1M0MU56RWdORGt1TVRZNUlEUXdMak0zTmtNME9DNHdNREUySURReUxqVTJNalVnTkRZdU1UWTRPU0EwTkM0ek1qQTVJRFF6TGprek5pQTBOUzR6T1RkRE5ETXVPREkyTXlBME5pNDBNakUxSURRMExqQTVORGtnTkRjdU5EVXdPQ0EwTkM0Mk9URXpJRFE0TGpJNU1VTTBOUzR5T0RjMklEUTVMakV6TVRNZ05EWXVNVGN3TnlBME9TNDNNalExSURRM0xqRTNOQ0EwT1M0NU5UbElORGN1TVRnMVF6UTNMak00TmprZ05UQXVNREEzTmlBME55NDFOalkySURVd0xqRXlNamdnTkRjdU5qazBPU0ExTUM0eU9EWXhRelEzTGpneU16RWdOVEF1TkRRNU5DQTBOeTQ0T1RJMklEVXdMalkxTVRJZ05EY3VPRGt5TVNBMU1DNDROVGc1VmpVMUxqRXdOa2cwT1M0MU9USkROVEF1TXpJMU55QTFOUzR4TURrMElEVXhMakF5T0RFZ05UVXVOREF6TnlBMU1TNDFORFV4SURVMUxqa3lORE5ETlRJdU1EWXlNaUExTmk0ME5EUTVJRFV5TGpNMU1UWWdOVGN1TVRRNU15QTFNaTR6TlNBMU55NDRPRE14VmpZd0xqQTNORU0xTWk0ek5UQTBJRFl3TGpFNU5USWdOVEl1TXpJMk9TQTJNQzR6TVRVMElEVXlMakk0TURrZ05qQXVOREkzTlVNMU1pNHlNelE1SURZd0xqVXpPVFlnTlRJdU1UWTNNaUEyTUM0Mk5ERTJJRFV5TGpBNE1UZ2dOakF1TnpJM05VTTFNUzQ1T1RZMElEWXdMamd4TXpVZ05URXVPRGswT0NBMk1DNDRPRElnTlRFdU56Z3pJRFl3TGpreU9EZEROVEV1TmpjeE1pQTJNQzQ1TnpVMUlEVXhMalUxTVRJZ05qQXVPVGs1TmlBMU1TNDBNeUEyTVVnek1DNDJOVE5hVFRNeExqVTNNakVnTlRjdU9EZ3lNVlkxT1M0eE5EYzVTRFV3TGpVeE5sWTFOeTQ0T0RJeFF6VXdMalV4TmpZZ05UY3VOak0zTmlBMU1DNDBNakF4SURVM0xqUXdNamtnTlRBdU1qUTNPQ0ExTnk0eU1qazFRelV3TGpBM05UVWdOVGN1TURVMk1TQTBPUzQ0TkRFMUlEVTJMamsxT0RFZ05Ea3VOVGszSURVMkxqazFOMGd6TWk0ME9URXhRek15TGpJME5qZ2dOVFl1T1RVNE1TQXpNaTR3TVRJNUlEVTNMakExTlRnZ016RXVPRFF3TmlBMU55NHlNamxETXpFdU5qWTRNeUExTnk0ME1ESXlJRE14TGpVM01UZ2dOVGN1TmpNMk9DQXpNUzQxTnpJeElEVTNMamc0TVRGV05UY3VPRGd5TVZwTk16WXVNRE0wSURVMUxqRXdOVWcwTmk0d05UVldOVEV1Tnpnek9VZ3pOaTR3TXpSV05UVXVNVEExV2swek9TNHdOalF4SURRNUxqRXhOVU16T0M0NE9EQTBJRFE1TGpRd05DQXpPQzQyTnpNZ05Ea3VOamMzTWlBek9DNDBORFFnTkRrdU9UTXhPVWcwTXk0Mk5UTkROREl1TmpVNE1pQTBPQzQ0TXpFMUlEUXlMakE1TnlBME55NDBNRGN6SURReUxqQTNOQ0EwTlM0NU1qUXhRelF4TGpjeE9EUWdORFV1T1RjMk5pQTBNUzR6TlRrMElEUTJMakF3TVRrZ05ERWdORFpETkRBdU5qWTVOU0EwTmlBME1DNHpNemswSURRMUxqazNOekVnTkRBdU1ERXlNU0EwTlM0NU16RTVRek01TGprNU9Ea2dORGN1TURZd01pQXpPUzQyTnpBMUlEUTRMakUyTWpVZ016a3VNRFkwTVNBME9TNHhNVFJXTkRrdU1URTFXazB6TVM0ME9EUWdNakl1T1RZeE9WWXlOeTR6T1RFeFF6TXhMak01TXlBek1TNDFPRGswSURNeUxqUXdNakVnTXpVdU56TTROQ0F6TkM0ME1URWdNemt1TkRJMlF6TTJMakl4TVNBME1pNDBOellnTXpndU5UVWdORFF1TVRVMUlEUXhJRFEwTGpFMU5VTTBNeTQwTlNBME5DNHhOVFVnTkRVdU56a2dOREl1TkRjM0lEUTNMalU0T1NBek9TNDBNalpETkRrdU5UazRJRE0xTGpjek9EUWdOVEF1TmpBM01TQXpNUzQxT0RrMElEVXdMalV4TmlBeU55NHpPVEV4VmpJeUxqazJNVGxETlRBdU5URTJNaUF5TWk0NU5EYzBJRFV3TGpVeE16UWdNakl1T1RNek1TQTFNQzQxTURnZ01qSXVPVEU1TjBNMU1DNDFNREkxSURJeUxqa3dOaklnTlRBdU5EazBOQ0F5TWk0NE9UTTVJRFV3TGpRNE5ESWdNakl1T0Rnek5VTTFNQzQwTnpNNUlESXlMamczTXpJZ05UQXVORFl4TnlBeU1pNDROalVnTlRBdU5EUTRNeUF5TWk0NE5UazBRelV3TGpRek5Ea2dNakl1T0RVek9DQTFNQzQwTWpBMklESXlMamcxTVRFZ05UQXVOREEySURJeUxqZzFNVEZJTXpFdU5Ua3pRek14TGpVMk5DQXlNaTQ0TlRFeklETXhMalV6TmpNZ01qSXVPRFl5T1NBek1TNDFNVFU1SURJeUxqZzRNelZETXpFdU5EazFOU0F5TWk0NU1EUXhJRE14TGpRNE5DQXlNaTQ1TXpFNUlETXhMalE0TkNBeU1pNDVOakE1VmpJeUxqazJNVGxhVFRVeUxqTTFOQ0F5Tnk0ek9URXhRelV5TGpNMk16Z2dNamt1T1RZME5TQTFNaTR3TXpReklETXlMalV5TnpjZ05URXVNemMwTVNBek5TNHdNVFE1UXpVekxqa3hPVFFnTXpJdU9UZzJOeUExTlM0Mk1qQTNJRE13TGpBNE5UWWdOVFl1TVRRNElESTJMamczTkVNMU5pNHhOekl4SURJMkxqY3lPVFFnTlRZdU1UWTBNU0F5Tmk0MU9ERXhJRFUyTGpFeU5EVWdNall1TkRNNU9VTTFOaTR3T0RRNUlESTJMakk1T0RnZ05UWXVNREUwT0NBeU5pNHhOamM1SURVMUxqa3hPU0F5Tmk0d05UWTVRelUxTGpneU1pQXlOUzQ1TkRFeUlEVTFMamN3TURnZ01qVXVPRFE0TVNBMU5TNDFOalFnTWpVdU56ZzBNa00xTlM0ME1qY3lJREkxTGpjeU1ETWdOVFV1TWpjNE1TQXlOUzQyT0RjeUlEVTFMakV5TnlBeU5TNDJPRGRJTlRJdU16VXpNVXcxTWk0ek5UUWdNamN1TXpreE1WcE5Nall1TURjNUlESTJMakExTlRsRE1qVXVPVGd6TVNBeU5pNHhOamN4SURJMUxqa3hNeUF5Tmk0eU9UZ3hJREkxTGpnM016UWdNall1TkRNNU5VTXlOUzQ0TXpNNElESTJMalU0TURnZ01qVXVPREkxT0NBeU5pNDNNamt5SURJMUxqZzFJREkyTGpnM05FTXlOaTR6TnpjM0lETXdMakE0TlRjZ01qZ3VNRGM1TkNBek1pNDVPRFk0SURNd0xqWXlOU0F6TlM0d01UUTVRekk1TGprMk5URWdNekl1TlRJM05pQXlPUzQyTXpVNUlESTVMamsyTkRRZ01qa3VOalEySURJM0xqTTVNVEZXTWpVdU5qa3dPVWd5Tmk0NE56RkRNall1TnpJd05pQXlOUzQyT1RBMElESTJMalUzTVRrZ01qVXVOekl5T0NBeU5pNDBNelV6SURJMUxqYzROVFpETWpZdU1qazROeUF5TlM0NE5EZzFJREkyTGpFM056VWdNalV1T1RRd05DQXlOaTR3T0NBeU5pNHdOVFE1VERJMkxqQTNPU0F5Tmk0d05UVTVXazB6Tnk0MU5URXhJRE0zTGpFeE1qRkRNemN1TkRFeU1TQXpOeTR3TVRBeElETTNMak13TkRNZ016WXVPRGN4TXlBek55NHlNems0SURNMkxqY3hNVFJETXpjdU1UYzFOQ0F6Tmk0MU5URTJJRE0zTGpFMU5qY2dNell1TXpjMk9TQXpOeTR4T0RZZ016WXVNakEzVERNM0xqWTFPU0F6TXk0ME1qUXhURE0xTGpZMU1pQXpNUzQwTlRReFF6TTFMalV5T1RJZ016RXVNek15T1NBek5TNDBOREkxSURNeExqRTRJRE0xTGpRd01UWWdNekV1TURFeU5VTXpOUzR6TmpBMklETXdMamcwTkRrZ016VXVNelkzSURNd0xqWTJPU0F6TlM0ME1pQXpNQzQxTURRNVF6TTFMalEzTWpRZ016QXVNelF3T1NBek5TNDFOamsySURNd0xqRTVOU0F6TlM0M01EQTRJRE13TGpBNE16VkRNelV1T0RNeE9TQXlPUzQ1TnpJZ016VXVPVGt4TnlBeU9TNDRPVGt6SURNMkxqRTJNaUF5T1M0NE56Uk1Nemd1T1RNMUlESTVMalEyT0V3ME1DNHhOelVnTWpZdU9UTTNRelF3TGpJMUlESTJMamM0TWpFZ05EQXVNelkzTVNBeU5pNDJOVEUxSURRd0xqVXhNeUF5Tmk0MU5qQXhRelF3TGpZMU9EZ2dNall1TkRZNE5pQTBNQzQ0TWpjMElESTJMalF5TURJZ05EQXVPVGs1TlNBeU5pNDBNakF5UXpReExqRTNNVGNnTWpZdU5ESXdNaUEwTVM0ek5EQXpJREkyTGpRMk9EWWdOREV1TkRnMk1TQXlOaTQxTmpBeFF6UXhMall6TVRrZ01qWXVOalV4TlNBME1TNDNORGtnTWpZdU56Z3lNU0EwTVM0NE1qUWdNall1T1RNM1REUXpMakEyTXlBeU9TNDBOamhNTkRVdU9ETTJJREk1TGpnM05FTTBOaTR3TURZMklESTVMamc1T1RnZ05EWXVNVFkyTlNBeU9TNDVOekkxSURRMkxqSTVOemtnTXpBdU1EZzBNa00wTmk0ME1qazBJRE13TGpFNU5Ua2dORFl1TlRJM0lETXdMak0wTWpJZ05EWXVOVGM1T1NBek1DNDFNRFl6UXpRMkxqWXpNamdnTXpBdU5qY3dOU0EwTmk0Mk16ZzRJRE13TGpnME5qTWdORFl1TlRrM015QXpNUzR3TVRNM1F6UTJMalUxTlRnZ016RXVNVGd4TVNBME5pNDBOamcwSURNeExqTXpNellnTkRZdU16UTFJRE14TGpRMU5ERk1ORFF1TXpNNUlETXpMalF5TkRGTU5EUXVPREV5SURNMkxqSXdOME0wTkM0NE5ERXhJRE0yTGpNM05qa2dORFF1T0RJeU5DQXpOaTQxTlRFMElEUTBMamMxTnprZ016WXVOekV4TWtNME5DNDJPVE0wSURNMkxqZzNNU0EwTkM0MU9EVTRJRE0zTGpBd09Ua2dORFF1TkRRM01TQXpOeTR4TVRJeFF6UTBMakk1TURRZ016Y3VNakkyT0NBME5DNHhNREV5SURNM0xqSTRPRGdnTkRNdU9UQTNJRE0zTGpJNE9URkRORE11TnpVNE1TQXpOeTR5T0RrMklEUXpMall4TVRRZ016Y3VNalV6TWlBME15NDBPQ0F6Tnk0eE9ETXhURFF4SURNMUxqZzJPRGxNTXpndU5USWdNemN1TVRnek1VTXpPQzR6TmpnMUlETTNMakkyTXpNZ016Z3VNVGszTlNBek55NHlPVGt5SURNNExqQXlOalVnTXpjdU1qZzJPVU16Tnk0NE5UVTFJRE0zTGpJM05EVWdNemN1TmpreE5DQXpOeTR5TVRReUlETTNMalUxTXlBek55NHhNVE5NTXpjdU5UVXhNU0F6Tnk0eE1USXhXazAwTVM0ME1qWXhJRE0wTGpBd01qbE1OREl1TmpnMklETTBMalkyT1RsTU5ESXVORFExSURNekxqSTFOekZETkRJdU5ERTVPU0F6TXk0eE1Ea3pJRFF5TGpRek1Ea2dNekl1T1RVM05TQTBNaTQwTnpjeElETXlMamd4TkRsRE5ESXVOVEl6TWlBek1pNDJOekl6SURReUxqWXdNeklnTXpJdU5UUXpJRFF5TGpjeE1ERWdNekl1TkRNNFREUXpMamN6SURNeExqUXpPRXcwTWk0ek1qSXhJRE14TGpJek1UbEROREl1TVRjME1pQXpNUzR5TVRBeklEUXlMakF6TkNBek1TNHhOVEk1SURReExqa3hNelFnTXpFdU1EWTBOME0wTVM0M09USTRJRE13TGprM05qVWdOREV1TmprMU5TQXpNQzQ0TmpBMElEUXhMall6SURNd0xqY3lOakZNTkRFZ01qa3VORE01T1V3ME1DNHpOeUF6TUM0M01qWXhRelF3TGpNd05EWWdNekF1T0RZd05DQTBNQzR5TURjeklETXdMamszTmpVZ05EQXVNRGcyTnlBek1TNHdOalEzUXpNNUxqazJOakVnTXpFdU1UVXlPU0F6T1M0NE1qVTRJRE14TGpJeE1ETWdNemt1TmpjNElETXhMakl6TVRsTU16Z3VNalk1SURNeExqUXpPRXd6T1M0eU9Ea2dNekl1TkRNNFF6TTVMak01TlRnZ016SXVOVFF6TVNBek9TNDBOelUxSURNeUxqWTNNallnTXprdU5USXhOU0F6TWk0NE1UVXlRek01TGpVMk56UWdNekl1T1RVM09DQXpPUzQxTnpneUlETXpMakV3T1RRZ016a3VOVFV6SURNekxqSTFOekZNTXprdU16RXpJRE0wTGpZMk9UbE1OREF1TlRjeklETTBMakF3TWpsRE5EQXVOekEwTnlBek15NDVNek14SURRd0xqZzFNVFVnTXpNdU9EazJOeUEwTVM0d01EQTFJRE16TGpnNU5qZEROREV1TVRRNU5pQXpNeTQ0T1RZM0lEUXhMakk1TmpNZ016TXVPVE16TVNBME1TNDBNamdnTXpRdU1EQXlPVWcwTVM0ME1qWXhXaUlnWm1sc2JEMGlJek5FUVVKRVJDSXZQZzBLUEM5emRtYytEUW89XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvZ29hbC01MGUwYzVkZDkyZTBhZmIwZDI5Zjc0OWUxN2JkN2M5NS5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFFQUFBQUJBQ0FZQUFBQ3FhWEhlQUFBQUJITkNTVlFJQ0FnSWZBaGtpQUFBQUFsd1NGbHpBQUFCdXdBQUFic0JPdXpqNGdBQUFCbDBSVmgwVTI5bWRIZGhjbVVBZDNkM0xtbHVhM05qWVhCbExtOXlaNXZ1UEJvQUFBMEdTVVJCVkhpYzVadDVkRlJWdHNaL08vTUVTVWhJZ0VBR0VnWUZ3aWdRQnNGQVVCQURSa0VSMnVleklRNGdPRDBSdSsyV3A3N1gwQTNTaUowR1JacEpVU0Uwa0VhZTBBaTBIUXlLRU1JUUVpU0VQQWhrZ0VEbThmUWZ0NnFvVk4xS0tpUXh1UHBiNjY2cWUrNCsrKzc5M1hQTzNYdWZLbEZLMFpZUUVVOWdFVEFHaUFTdUFEOEFLNVJTS2ExdWdGS3F6UTVnS1BBam9IU09HdUIvQWNmV3RFSGFhZ1NJaUE5d0N1Z0NFTlV2Z21GOXVwTmJVRVRTUDFNcExhODBpcjZ2bEpyZmFuYTBJUUdyZ1hpQVZhL080dG00KzB6WHNpNFhNTzJORHppZWNSRzAwVEJlS2JXL1ZleG9Rd0p5Z0s0UGpSN0E5aVV2V0YzUExieEJ2eG0vcHFpa0RDQlpLVFd5TmV4d2FBMmxqVUZFL0lHdUFERkQrK2pLZFBielpzN1VNY2JUQVNMaTJCcTJ0QWtCUURsUUI1alBkU3RFZEEwd2Z2WEFRRmhMbzAwSVVFcVZBcGtBVy9kL1QyMWRuYTdjeVI4dm1aK09FWkVIUldTc2lMaTJsQzF0TlFJQU5nSWNUYi9Bb2crMllya1duZnYvUE5idU9tVGV0QjVJQXI0R0xvcklZaEVKb0psb3kwWFFDZmdXR0F3UVBlUXU1azBiUjJjL0g1TFR6dkhPeHp1NVhseldtSm9pWUw1U2F1TnQyOUdXa2FDSWhLQTkxYjYyWkZ6YmVSTVJFMGZ2QngvSDJjT0xySU83eVRyMEpYbW5mekFYK3l2d2pGSXFyOGsyM0FHaHNCUHdQTEFZOERHL051akpCWXgrZFFtT0x0WlQvdnlCSlBhK0dVOXBmcTZ4cVFCNFhpbjFSWlB1MzlZRUFJaElLTEFOR0FUYVU3Ly9mOVlSRWZOd2cvMHFibHhqLzlzdmtKNzBpWG56WjhCY3BWU2hYZmR1YXdKRUpCYjRDK0FMRU5obk1KTlhmSTUzdCs1MjY4amNtOGkrM3o1TCtiVjhZOU1WSUY0cHRhdlIrOXNpUUVUYUE2OEFJOUd5dEN6Z083UXM3WnpkMXRtNnNUYjBmMmU0QndBRFpzNWp6T3ZMY0hSMmFiSys4bXY1N0h2ck9USy8ybWJldkI1dFd0aGNUWFVKRUpFeHdBWWdXS2RQR2ZDYVV1cURKbHQ1UzM4M3RLRWFCZURpMVo0Sjc2Nmw1LzJQM3E1S0U0NnMrUjNmTEY5azN2UTlFS3VVeXRXVHR5SkFSSUtBa3hnV3BCR1JFUXpvRWN6RnE0VjhsWEtLcXVvYW8raGtwZFRmbW1xZ2lFeENJOWNQSU9EdWdVeGU4UVUrd2VGTlZXV0ZpNGYvVHRKTGoxRlJaRFg5THdDRGxGTFhyZXpSSVdBSEVPdmdJR3hlL0F6VHh0MWp1bmJxL0NVZVdMQ00zTUlib00yejhJYUdsNFZlUitBZFlDRWdBUDFuUE1mWVJlL3BydklvUlhieVhrNTh0b2JLbTlmcE8yMDJ2UitjWVZQLzBYWExPZlNIMTFDMXRRQU1HcjJJNHFJTFpLWjlhaFRacXBTYTFpQUJCaU5MQUxjNVU4YVFzUEJKcXh0dDJadkNyTit1TVo2T1ZFb2wyK0c4Sy9BbGNCK0FpMmM3WXQ3K2tGNlRIck9TclNncTVHVGlPazVzV1UzUnhmcExUWStZT01hOWxZQ0gzNjBBc0thaW5LOStQZHYwSm5CeTlpQjY2am9pK2t5bnBycU1iUjhOcC9CcW1sSDhFYVZVb3JsT3kxQzROK0FHTUg3bzNick9qTCtuWHZZMnNFSFBBUkVSWURrRzV6djI3cy9NeEtOV3p1Y2VQOHllaFUreSt0NGdEaTM5TDNQbnk5RGU4V1R1VFdUOTVENWsvTjlXQUc1ZXptYkxFeU5OenJmekNTSHVsLzhrb3M5MEV4a1BQSmFJaTV1M1VkZnpsdlk1V1p4M01IN3g4L2JTZGNqUDI3UGVxWTdEenNBRHdDeGdITnBhNGdnUWR1OUVIbm8vRVNkWE53Q3F5MG80czJzenFaOG1rSitlYXFucU5QQm50UFhDQ2ZnQWVLejhlZ0ZKQzZZUkhoM0w1V1BKbEY4dkFDQW9kQ3ozVC84Q053Ly9la3E4TzBUUUsvSVhwQjFaQlJBdEltRktxU3hiQkJ3RHFnQ1h6SnlyakIzVTI0cUF6Sng2MFdhbW1lTWpERTVQMXlNR0lMRHZFQnlkWFNqSVNDUDEwd1RPN054RVZXbXh1VWdWa0FqOFdTbDEwS0w3NHlLU0NQd0o4UHR4LzA3VGhiNUQ1ekxxZ1JVNE9GaTZvNkZUdHhGR0FnUVlnZlpLQnl3SVVFcVZpTWczUVBTSE93N3luNU5INCtSWWY1WWtiS3RYbVNvWGtiZUJtVUNZK1FVM0x5ZUdUT3lLZzVNRDMyN1BwcXFpbG0vLzlEYkhOcjFQNWMwaVN4c3ZBR3VBdFEzRjgwcXB6MFhrSUxBYW1BTGc1dUhQaUppbE5wMDNFbUNHZW5icTlkb0pSUCtRbnMzVTExYnkzb3N6Nk5FdGtNSWJKZngrMDVlczJ2cDNjOW50NWllT1RnNzBHOXVKcUVkQ0dEZ2hDQmMzcllpVG4xM0NtV1ROTHpQbjY0RGRRQUt3UnltbFh4U3dnRkxxS2pCVlJGWUNMMVNVRlhBOCtROE1HZk1ibTMzYStZVGc3dG1SOHRKOHNJaHQ5RjZERG1oemI0Nnh6ZFBkdGVIS3pSQi9vdUpDR0JZYmpKZnZyU2l1dHFhT0hjdFBzZk9QcDQxTnA0QXphRk50czFJcTJ3NmZkV0Y0WTMwTmpIWjI4V0wyNjBXSWcrMnEyY1lWb1JRWFpRT3NWMG85Wld5M0dnR0dKeEV2SXFYQWk2QmZ0dW9jMFo2b3VCQ2lIZzZoWTdDbjFmVkxaMit3Wm40SzJTZE5zVWNXTU1iZUpLVXhLS1ZxUldRek1McTZxb1NpYTVuNCttdHJWc0dWVkM2YzNVbWZJYy9nN3Rsd3pVUjM0b2lJSDRiTXpCemVBVzRNbXhMTWlMaFFRaU45OVEyclUreFpjNVp0UzlLb3FUS042bVBBNHkzbHZCa09HNzljdTVwbUl1REFybmp5TGgyaHVxcUVxSmdsRFNxd0lrQkU3Z0oyQWVFQWJwNU9ESjdZbGFpNEVPNGVGWWlEbzloVWxwOWR3b2N2SFNFanhaU1YxYUlsUEl1VlV0Vk5jczArM0RSK3FhNHVOVFdXbDE0Rm9NencyUkRxRVdDWVYwbEFkNEFKYzNyeTZNSklYTndicjBnZjJQUWpXLzc3T0JXbHBsd2hBM2p5SjluZmF3WXNSOEFVRE00L3NyQWZEODNYandiTlVaUlh6c2V2Zk1lSi9hWmtTNkVGTFF2dHpSUGFFcFlFREFJUWdWSFR3M1RFNnlObDUwVTJMRHBLYVZHVnNTa0hlRm9wdGE5RnJXeEZXQklRQk5DaGl3ZStuZHh0ZHFvcXIyWHR5MGRJMlhuUnZIa2o4SUpTNmthTFc5bUtzQ1JBVytIRTlrSUhzUGZqREhQbkM5QXFzb2tOZExsallUdCtiQUM1bWFiRnR4RG9hNGpPZnBabzdzNVF5Yy9aZVdqYnJiRTdBcmMxQmZRZ0ltR0FOM0JhS1ZYVm1Id3o3dE1EZUFTdGNHUGFTTWxLL3l2RlJSY0FxS3pRRXE3Q0s4ZjU3c0JiOWRvczBWd0N2RVJrR1RBSnJab0VVQ1VpZTREbmxGS1htNm0vSGtSa0pscmE3R0Y1TFN0OUIxbnBPK3ExRlZ4SnBlQ0tWYUdsSHBvN0JmeUFsN25sUElBTEVBdWNGSkZoemRRUGdJaTRpTWdxWUJNNnpqY0hUUjRCaFpmS09KOTZyUlpEbVV2RWdiRGVVd2p0Rll1YmV3Y3VaQ1J4K3VoSGdQSUZOb2pJQUtWVStlMGFhTmhEK0FJWUJ1RHY3Y3JtaFVPWk1EaXdTWHBDZjdHYjdEenJ3TFJKQkJ6ODVEd2JmM1cwcXFhcXpnWEF1ME00MFZQL1F1ZmdVYmR1MUN1V2dDNzNjR0JYUEVCUHRMckN5aVpaYTRDSXhBQ2ZBUDRBUTN0MVlPdWJ3K25Xc2VVR2dTNEJ4WVVWSkR4M3VGNWI0ZVV5em4xZkFPQUNRdDk3bmlVcTV2YzR1MWpYQXU0ZVBJZlV3OHU1WHBBT1dnMnVTUVFZS3NtL1F0c3hkZ0I0L3FGdzNudTJQeTVPTGZ2aTBpV2dxcnpXTXN3MXdjdTdHL2ZGcnFWYmVFeURpdjA3RFRBUzBMOHBCb21JTDFwWS9TQ0FwNXNUcXhjTVltYTAzaTVkODZGTGdJT0RFKzA3MU4rcUVuRWdLQ3lhNGRIdm10ZlpiY0xCeWJUYll6dXBzSUNJREFLMllpaGM5dXJham0yL2lhSlBTSHQ3VlRRWnVnUjR0Zy9paVhucGRpbklQTG1GN0l5LzBiUGZFd1QzbUhqYmhvaklMNEZWR0RabUhoM2RsWTlmR1VJNzk4YVhxUTM3c25sNWRTb2w1Vm90SXNESGpVOWVIOHFvdnY2TjlHeEdISEE5L3pTSGRzL2pVdGJYQUJSZVRiMHRBa1RFRGExKzhEU0FrNk93ZEhZa0w4WDFzRnRIVWtvdWhUZHZ4VjQ1K1dXczM1ZDlXd1NjQnZEdGFMc1FVbDFaekhjSEYzTWlaU1YxdGJlcVhGV1ZOMjMyMFlPSXVBQlQwUmE3U0lBdWZ1NTg5c1l3dXd3M3g5TFovZWdYNmsxcFJRMEpTZWU1V1ZaTmRZMWRWWFlyQXBZTkgvZU9YNytoODEvVEU4NU0rNVRrcjE2bHROZ1U0TldpWllSMi8xeE5SQ0xRWG8xUG1mY2JHOW1STFc4TUk5RFh6VjVWSm9RR2V2TG16THNBMkhJZ2g1dGw5cGNmTFhlR2F1Y3U1b3lsa0txclpWL2lMREpQYmpGdlBnek1CUllBLzlIUVRjeWVkandRamJIdWdCYll6SjhTd1JzemV1UG8wSEFkb2pWZzF4cHc5c1JHYytmejBQYjQxeXVsbERSU1BFRjd5amxZakpMNytuY2tmbEozSGg0WmhLdHoyeVdsbGxYaGdWN3RnaFlOajFsQ3o4aVpwdllyT2FhZkFPUUR2WlJTK3FrVlVGdFR3YmxUbjVPYi9ROWprN3Zob0tPM0swOU5DR1hPeERCNkJPbnZQdi9Vc0J3QkQ1Y1VYK3A1NnVqcWVnVFUxcHBXMkRKYnp0ZFVsL0hObmhjNW03cUJ5dkpidjBRUmdlZ0JBY1JQNnM3VUVWMWFQSkt6UklDUEs5bDVaUVQ0MkxlV1dCS3dxbHY0K1A1UjQ1ZkdOdlhHNWFYNW5QajJqNmJ6UUY4M25vb0pZYzZrTU1JNy8zUlBlL1dDd1d4UHZzUzgyQWk3NUMwWHdieTVpOW1PbHM0MkdTSXdmbUFnOFpQQ21CTFZCZWRXZnRwNkdCamh3OEFJbjhZRkRXaXhpcEMvdHl0SFZrWVQxc2s2T2JxVFVlOFJpY2pZRDk5dHQreDQ4ckltSy9KMGRid2puRisyTFlQZ1diczVjQ0svY1dHc0swS3pxcXRMT3B6NlBxSGxMZnVKc1B2SUZYTHl5L2hIV29GZDhwWlR3QW1ncnE1R1IvVG5nWFd2REdIZnNUeW0zMnZmUDJ4YWJBMjRVeEFjNE1IVDk0ZmFMZjl2dnkvd2IwK0E3aFNvckNneWJTaUF0c0hRR0lwS3EzbHI0K2xHNWRvS1JhVTJNa1NMUHpOL2hQNGZtWTNIT1owL1FEZlc1MDQ3UGpLMzMzSUtiRUpMZVBSUWlmYWJQa3MwMU9kT1F6NmF2U2I4Qzk3TGJwM1BRbStHQUFBQUFFbEZUa1N1UW1DQ1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRUFBQUFCQUNBWUFBQUNxYVhIZUFBQUFCSE5DU1ZRSUNBZ0lmQWhraUFBQUFBbHdTRmx6QUFBQjJBQUFBZGdCK2x5bWNnQUFBQmwwUlZoMFUyOW1kSGRoY21VQWQzZDNMbWx1YTNOallYQmxMbTl5WjV2dVBCb0FBQkh5U1VSQlZIaWM3WnQ3WEpUVjFzZS93ekRBTU53RnZDQWdLSG9zZlVORjhocW9hSnFnMkVXenpGdG1pVXAxOGh4VE81WldhbVd2ZWZla3I3ZnNJdDBvc1V4QnZGUVdVV0FxMUVGUkxwYUpjcjhJeU96M2p6M1B3TUFNekpEVlArZjMrVHlmZVdidnRkZmVhKzI5MTE1NzdmM0FmOUV1T0FCdkFNWEFkV0NkSWUzUGdodXdFYmhvZURZYTB2NDA3QVJFczJmbm4xUzNEL0NqbWZxemdjNS9SZ05tQUVLbjBZaXY1andndnB6emdOQnBORW9qWnZ6QmRmc0Nad0RoSHhnazN0aTZXNnpic2t2NEJ3WXA5Wjh4MENqd1JIYk1OZVJJV1Fxb216SzBzN0VCUFZXd0NXQnpUQ1JEQWpvek5LQXoyMk5IQWFDQ0xjQnR0c3ZWUHVoY1hQSHJHc0R5bDliaUh4Z0UwQWRJUVNyQkZ6Z0J6QUk2QU4yQWw0SEZUWG5Zb2dBdGtDREFaVmEvMjVnUjJ0dVlNYlZ2VDJiMjY0MEFaeUFCK2Z0SDRDcHdMMUJWa0hlUmxjOHRvcXlzRkhkM0QzTktTREc4bjBVS0gyM2dNYWNwUTVVTmxlOENadDd1MjRHMHg2ZmdyTEUzeWF5cHY4bmc3UW1jdm5KTm9aMXRxM1J0b0Rld0VIZ0VjRkVTL1FPRFdQN1NXdHpkUFNncksyWGxjNHNveUx1b1pKOEZSaUVWQjNLYVFCTzVyUjBCVTRHWk9vMkdoQ25qV2dnUG9OWFlrekRsSGx3ZE5DQ0gzYTJ3QjNaQURIQVlPQWZNVTZsVUx1R0RockRxMVhWMDd4RkNLeVBCS2xnekFucXE0SHNCTHJ2dkhXMHk5TTFoZDBZMnN6NCtnZ3FxQlF3RXN0cmc3NHZzMldnZ0JOQ1pJOUk2T3pNK2VpS1RwMDRqT0xnSEFNWEYxNW4zMkF3dW5NOXBiU1EwSFFVdFJrQmJDdEFDcDRBN21tZUlsZkVtLzFYTE41Z3JmdzRJQjZvdDhMOGZhYVZkVzIyRVZzdmIreE1KQ096V0lzOUdKZnltTkpmbUx4YXdDNWhwTHNOS0JRRHNSazZKNXJnZmFUQlY0U0UrVEF3UEpLU3pPMDZheGxXcXJMcU81OTVKSjYrb2t1RHVJV3pic1FjdnJ3NHRHTm1naEQ1S2MybitZZ01FdEtvQWEzajZBdWNCMSttUklkdy8yUEtjdmNWS2FORkdXLzJBVzRXRmdHdDRpRStyd2dPNE96dncwa05oQlBxNGtIc2hoeWZtektDNCtIb0xPaSt2RG16ZHZzZG13L2hYS1NBR1lHSjRvRlhFdDBJSmk1NTl3U3p2djBvQndRQWhuZHl0THZCN2xXQUo3YkVCdHdKRmdQZWFSOEs1cmF1SFRRV3R0UWxIRG4vT2tuODhCV0FjL2szc3dPOHlncmNDcndHTHJDRjAwcWdKNmVKT2JIZ2dBM3Y0QU5ZcFlmNFRzL24yMUZjQVZiVDBMWDZYRVF4RmJqSnFhZHlLMWdMSERYbldZQW53cWpXRU4rb2JPSk5Yekl2dlo3RHYrSG1nN2Vsd01mY0NhZDk4RFZBSjlFZjZJMmZOOGJkMUJIZ0FPWUMzaGZ4clNHL084cVF6aFFBb3pVeXlTSENscUpqM2tvN3k4cFo5MU5mZjVGOFA5R3R6Skt4NStRVStTSGdYWUNzUVIrTVd1WVVqMU5ZSUdJUGNQc1lBOXNEVGdQZGRvYzZVSmZkQ25PcU5PTldic3VSZURMdkRHYVJpL202Z25XQW9POFpLWlpoRkp4OHZucHAxUDB2blBRekFKMmw1eGp4ekl5RS83eElIa3o0QnFkeU5CdEtyTkc2SVRHQnBCRGdBYndHVG02VFZBUTRxRlJ6ZEZFaGtmOU1kNzlIMEtxTGk4eEhTMjY0SE5FMnlFNUM3dUxwbWRldFZLaFVsR1Fjc3lXL0VsYUppL2paNk9sb0hlL1kvTTlJa3IrbEkwR3ExMU5UVUFCeWhwZkt0MmcwNkFPOERrejFkMWNUZDU4bnR3WTRBRGgyOTdObTVyRXNMNFFGR2h1bllzYlF6SGIzc0FUUjlnaDJKdTg4VER4YzFTRVcrajJuY01CQmtEMXNEaGE2bTdtYUxQSGRuQjFZOE9FRG1TK0doc2ZkYlJjdDlyZXo1Q1IzYzFTUnZEQ0EweEFtQWltbzlPaWM3N0ZxWk5MT2pQWmdkN1VGRnRSNVhaMG40MkVRUG9oYm1jNzJzWVlLQjl4UURlVHpBMEFGOXpETnJCYTk4ZkpxSDcrcEIxdzZOeGwxdFp6S1lMd0FIcmVIVmZBcmNEUnp5ZEZWemRIT2o4RTF4SksyS2hKUnlUbVpXVTFna2U4UGYxNTdob2M1TUh1VkcxTUNXdTluTW5CdU1pTXVudExJQllEUlFEbnl0dHJOVEgzOXZQWDE2V3JkLzl4dHlQMVhWTndCd2NkS0lWNmFIcS93TlNzZ3FMT1hadDlKQUd1bkZ3TWRtV0xRNUJlNEFlR2lNV3d2aC81TmZSOFM4UE1ZOG1jK09UMHY1T2IrT3FobzlWVFY2ZnNxclkvc25wWXlPenljeUxvK2NnanFUc3FFaFRrd2RZNHhhaHdLckFmWENHZmRhTFR6QTVhOC9JT2ZvUGlaRURhWHlScjNxcldNNXhyenN3aExsOWJnRjRjMml1UUt5QUk1bm1HN2ZUMlJXTTJqT0pVNWtWdVByNWN5SytDRjgvL0hEbFAwd243SWY1cFArMFVPc2lCK0NqNWVXNHhtUzltU21LWThtUExPQlFRQUxwayt5dHAxRytIaDVzSGJKUEFET0ZSaUY1bVRXRmVYMWN3dEZCelI1NzYrOE5GZkFJYUQrYkc0dDFUZjBnT3o1Mkg4V1VsTFJ3SDEzaC9EejRaa3NteGZPSFgvelFhZlZvTk5xQ08zdHk3SjU0Zno4eFN3bWplNUJjWGtEc1lzTE9WOG9SMEpGdFo2c2k3VWdWNEV2Z0VLQXZSOGRwa0d2dDFrSmxkWFMwTm1yWmZOUFh5b205N2NLa0ljMDVoVGdBalIxTnBJd2VJZE5GZUFCTEFjMEhiM3MwVG9hak5qcVg0M0N2N2R1UEs0NkI1SlNjeGsxNHdQYysyL0d2Zjltb21aK3lNRmpGM0Z6Y1dEL0crT05TcGk3NWxjQWRFNTIrSHJhZzF3Ri9vVWh0TDV5NHg3Q1k1K3dXbkFoQk45a1p2SG9ZdWxFRHV6dXpjMEdQYnVPL3F5UXJBZHF6QlNkQlhRSzY5dVJzTDRkUVI2Z21BUnBRcEZlbkZDcEVEdVhkUmJpVkc5eGVIMkFBSVN2bDdNb1NZOFRON09mRXMvT0hkajhSTWI0TEgwaVhOek1ma3BjVDVzbmZEeTFBaERKR3dPRU9OVmI3RmphV2FoVVJ0cXJ3QXRLdWRMTUpLc2V2MDdleHJyOE91akUzdmhJRVJNV29LVGxZamtjZnhRUTcvenZQZUx0MThjcDlDblFPQUkyQUIyRzNlRk15c1pBWmtYTEhWcENTamtBODZlRkdudCt6WnZmZ1J6S2l3RS93L01zVUxkcVd4b0hqMTNFM2RXUnVHbWhKandlamZFZ2VVTUF3ME9kUVI1dmpVQnVWTGhTVkd5aDNhYTRMRVB1VEJrYXpOcnBkM0lvbzRBRDZmbEtlNlpqT2ZiWUgyQm8veTRNRytCbmtxWW9JQnpnNE92K2pCalFxRVRGa01XTWtKWjYzZTRmbEt6bHlNM01MNGJuRmVCNWdEZjIvR0JTNWtRVGd6b3lURWZTV24vbDc1MUFHc0M3QjFLc1VvQ0NTWGQyNDgwalAvSE95UXNBRGNqRGppOWJLVklGY0ttd25JdUZaU1pwaWlQa0NPQ21NN1dKbHczcmZIQ0FIQkhmbjFYMkV1dzFVOGtlWUhYNkdVblQzVkNtOEtxcDU5YWtEa2RnQlRCaTFkYTNBWmdhTThvcXp6RHV6YThvcnF3RjJlT3pnZjF0Rk5rTFBCc3hMYUY1bWxsUHNBV0VFTTJUek8waDdBQlVLcVdNSWJIMTdkWnhZRmw5L2MyWFZtellvMXF4WVk5Wm91YTdSWVB3YVVqaHo3VmFnOFR6aHQvcHlQbS9GMm1EakZPZ0ZxQzh5blJKOHZPUitza3RrTU1tckc4bkpXdTZtVXFtQXd6bzB4R0FDL21sQmg0YUU2S3lTbU1kdFliZlZVZ1AxUEtldUNVZUFRWmpuZkFnYmNRU3BMM3Fpandscm9OR0JYd0xFTDJvZ0tQcFZjWlNkL1dUOXVCQWFpNEFUODgwK2c4cmtJYXZpNEhwRWd3YVZXaVVNbmVGTnRxVTVPK3FHUDlNdnZMMzJ5WU5QSUloVUFxeXg1cytackFQc04yQk1BTkZBZkZBMGNuTWFxTGk4OW1aSkh0djhpanB2bTUrSzVQeXlqckdSd2F4OUlsd2tPdjVhdUF5MHFsWkJUZ3NteGZPUFJGQmxGWFVzdVh0MHdZZTh0Qm54NmZTVmY3cXh4cVFNVUhUZzRXL0NJb0NUaU1qT1N1RmdLVmJpeEFDb2dicWlPam5URkZKRFk4dVBZeGVMMWo1NUJBKzJUcVJFWVA4Y1hIVzRPS3NZY1FnZno3ZE5wRVY4VVBRNndXemx4em1Xa2tOSThOMGpBelRvZGZEc20xRlNwMHJEWFdkQnNLUTgvTUw1RUVKQUQvbEdrY0pGdEorQmo0d2xMMzk5eWlndVRHelJ5NFBEbFdwdlhCMnNpT25vSTVCY3k1UlhON0FwTkU5MlBIeWFOeGRIYzB5SzZ1bzVkR2xSMGhNUGs4SE56WGY3dXhHZHo4SEttdjB1STc4R2VTOGN3RW1JYWRRUDNOOG5MV09yRjB5ajRjbVJBSHd6cWZKTEZxOWplcWFHNWJrK0E2NUxIOWdrL1MwVkVBMGNLQlBzQ05uM2c0MkpwN01yQ1oyY1NIRjVRMTRlMnFaUHkyVTZNZ2dRcnA1SW9UZ2ZGNHBTY2N1c25sZkp0ZEthdWpncGlieDFhNUttQXlBUGcvbmNpNjNGbVR2OVFKdzhuS242NGh3c0xQai9QdGY0QnNSaHNiZGxjdWZwZ0tZS0FEQWI4SUk2c3NxdUhvOG5SNFAzQTE2UFlXcGFkd29OcTd0aDVBeFFKTnpNRnZ3VDBERTNlY3B4S25lSmsvTys5M0ZpQUhPRnQxZzVSa1pwaFBuUCtqZW92eUMrejJOTkZwdlR6RncyZU5pYXVaSFlscldBVEhoNERZQkNFZHZUekUyNDBQUmQrVkNvZFk2R3VuVlRvNmk3NG9GWW16R2g4TFJXL0taY0hDYm1KWjFRRXpOK0ZBTVhEWlhPSFh3VU9pTGtNZnlWcUg1S3AwSjhPN2hjakp6VElkYmo2NE9ITjBVU1BMR0FPYkdldEM3bXlNdVdqdGN0SGJjRnVUSTQ3R2VwR3dNSUdWakFOMzlURy9NZlhPMmhwMUpzcGY4SWdZeVBuRWp2UjZPUmkwdlUrQVc1SWZXeDR2YWF5VlVYZm9GbjZIOWNPcllHSGgyNnVTTno3RCtWRjI2VE8yMUVyUStYcmdGU1pkVzdlaEFyNGRqaVA1a0UxMkdEd0R3UmtVcWNKYzFDakRuME93SEpudTVxVVhLcGdDVkVoZ3ByOUxqb20wOUpBYWcxMFBWamNhUVdHYk9EU1VrUnZkSlVReDZNUjZWWGN0cXYxejBHcGMrTzBGSTNJUDgrc1ZYVkY0b3dDTkVuaDJXNXVUaDBpT0F6bU9Ha0xQbFBicmRjeGZEMXY2akJRK2hGNXg2YmoyNWlTa2dRK0FEa0N1VlRRcFFncUlUUEYzVlRCM2p4dkdNYXM3bDF1THJhYy9xT0I5bVI1cy96dHJ4YVNuTHRoVnh0ZVFtdHdVNUV0bmZtWGNQbDFOUzBVRFhrWGNTc1g0cEtyVjVEZVlrSE9MYkZ6WWIvM3VFQkJLMTYyVUFrbWN0b3pTbk1SeCs1d3Z6Q1prODFpd2YwYURuZVB3cUNsTy9CWG1BRTBsaktNd3FCU2hLc0JnV1Q5NFF3TWd3MDloZlNub1ZVUXZ6VFdpVlAxb2ZUNklUTitIb0tmMEtvUmZrN1ArY25JUkRsRjhzcEtHdTNsTDdXb1hhUVlOYlVGZENwb3dsWlBJNDQ4aTZVVnpHd2RpRjFGd3JBYm5pSkZya1lTRzlBYm1rZkkxME45Y2ovVzRWRUpIN1N6MzNSYnJoNUNBckxLdlVNM2ZORmZKL3F3ZnBKWTRGdmtjZWpqZ01YUFk0UHYxNkc0VS8rZmRYeU5yMUVUZXVseUlhMnUvUWlRWTlONjZYY3ZsNE91VVhDZ2dZTXhTVlNvVzkxZ2tIVngyRnFXa2c3eTMrMnhLUFczMDBkaFhvQ1pRaEhaU3p6aDI5aVQyOEhUdkR6YkwvdlBzWmFTOXV4ZFhOamNWTGxqTThZZ1E2bllzRmRxMmpxcXFTRThkU2VYWE5TaXJLeXdsL1BvNmVVOFlCMEZCWFQrS1lPZFJjTFFacEMzNHd4OFBXdzlGU1pGajdCS2FuUEhYSW5kMW9wUEFnTHpRU2NQZFFvL0FnNXpyQTRpWExHWHRQVEx1RkI5RHBYQmczUG9aL1BydGM4dDUveUppbmR0QVFPR2FvOGplNlpXbUo5cHdPWndJUnlQMjh5dkE0SW8zTmowM29vZ0E2RHphOVlGWitTUnJsNFJFakxGWlFYMS9QaGpkZVkreW9ZWXlMR3M3RzlXdXByN2RzSjRaSFJFcmVGd3ROMGpzTk5oNVdSMW9xYTFVOG9KM29DZUFlN0crU3FIWjBvS0cyanJxNk9uUm1id1RDdGkzcjJidHJoL0gvbnAzYlVhRml3WlBQbUtWWGxLTjJOUFUvM0hzWTYvYkRBdHFqQUd0dmlYa0JPUGw0QXJEdnRoZ1Qrb0w4UER3OXpVZC9QanZ3Q1FDVDNrNUdDRUhpdE5FY1BKQm9VUUVGZVhLSnJDdXZOTll6TGVzQVdtOVBoYVNMSldIK3lEdEMwcFhVbTErQ0N3dGE3dmlhUXdoQjUvNkRXWlJWeHVmSkp5M1NGUlRrbVUxdnNzSllYR3IrU0FWY0FMaCtWaDVmVGNzNndMU3NBL1NkOXlBQStYbVhMQlljSHhNTFFPSzAwZWhvWU5qTjF1OWJGT1JMQmZTZDk2Q3hIb0RyNTR3NzdQUG1TLzZ4Q2tnRXlONWo2b080QnNpUE92THp6ZmNhd09OeDhjeWNQUmNmSDE4ZXJMOUNWMkZ4RzJ6Q1MrR3RJSHVYOFlqUTRnV0V0aFN3aTVZN3ZyYWcwSzBBS0V4TjQreS9HNk94U2lNTExReGJBSTFHdzRJbm4ybDEyRGVGd3F1cEFzNXMyOC9sRStrZ2wrVk5sc3EyWlFRWElNOE0ydnNWeUdXZ1UrYjZ0OVJGcDMraTk0eFlYTHJJNnpvRitXM2JBR3VoOE5KNmUzTGxtOU5rNzA1VWhOY2o3enBmczFUV0drL3dkbVFBVTdkcjBtaG05clBwdW53NGNqbjhQK1QzT3lZNGN1eVV4WlhBV3BTVUZETTZjckM1ckRMaytWK3JSK1hXMklCenlKSEFncVJqWkxWeWpKVlZWTXlDcEdNQUNKaHZLUHN4VWdrcmdBeWdRcUV2YU1VT1dJdG1QQ3FRTHU5S29BZFczQlA0cXo2WmVSZDQwSWE2cmNGN3lDOWJiSUl0cThBQzROeTVxOWVabjVUYUlqTXVLVlVSL2h6eU5uaHJ5R2tqdnoxb0YwOWJQTUVxWkh3Z2JYZEd0aTR5cUt2eDg1azltZG5zenNoVzV2MWtBMjFyK0I3QXp6K0F0UnQyb0ZaYjJwVzNqb2FHbXl4YStCaVhDL01CMHR2RHc5YWFpNUNXUGZiSStRSWlnN3FTWDFiSjFJUkQxTXViSG84QnlWYnd1UVE4VkZGZTVwbWZsMHR3Y0FndXJxNm9WTmJOU0NFRXYvNVN5SnViMXZGVDlsbVFUdGZUeURqR240SmI4ZW5zL3lBdGRadVI1amFlVXFEdjc1S21IWEJBZmpCOUhibkd2azc3UHA3dWdqU1l2Mkc3NEw4aGwxZUxHNTMvd2dyOFB4WS9ZMDUycjZBV0FBQUFBRWxGVGtTdVFtQ0NcIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUVBQUFBQkFDQVlBQUFDcWFYSGVBQUFBQkhOQ1NWUUlDQWdJZkFoa2lBQUFBQWx3U0ZsekFBQUIyQUFBQWRnQitseW1jZ0FBQUJsMFJWaDBVMjltZEhkaGNtVUFkM2QzTG1sdWEzTmpZWEJsTG05eVo1dnVQQm9BQUEwSFNVUkJWSGljNVp0M2RGVFZGc1ovTTVrMFFoSUlLUkJJUWlUQkJCQ1VVS0lnZFZGOFFXazJRQkZRbjJYNVVDelBzbVRwVTdBdnk4UDZiQ0JGUlFTV1VnUjhvU2txblVnTFJSSUNDU1FRUWtLU1NhYWM5OGVaYzNObk1zbE1paE5jNzF2cnJuWFB2ZWZlMmQ4K2U1K3o5ejUzb0dVUUFqd0o3QVVxZ0F2QWVtQThZR2dobVh5R0JPQWdJT280RmdFbVh3bmo1NnNmY3NBZjJBajBBRWk5SXBiYlJxV1RtaGhMM3RsaUtxdXFBWG9DUWNDUFBwYk5KNWlCWTZUdm5UaFVWTzFlSU94Wmk0UTlhNUhJejN4UFhKVWNwNnlnQ3Vqa0M0R012dmdSSGNZRHRJOE01NTJucHVKdnFqSEE5cEhodlBmc05OVU1BREo4SVpDdkZSQVBrTll0a2FCQS8xbzMwM3NtNlpXUzZBdUJmSzJBQW9EOHdoSzNOd3VMUzdGWWJhcFo1Z3VCZksyQW5RQjdzM05adiszM1dqZGYrMnlWdnJuWlJ6TDVGREhBSlVDMGJoVWtYbjlzc3RpLzRsV3hiZEh6WXNiNHdmcWxjR09MU3ZrbllRandGWEtHcnlzR0VNQkpJS2xsUlB4ejRBZThBdGlwbjdnZFdJNE1sTnloSjdBQ3lBRitCbTc5TTRWdUxoaUJMMUFrZzRJRlk2Y0tIcGtybVBxSW9FT2NYZ0VuZ0t2Y3ZNTUVQQVdZcWEyd3UzM0FvZEV3QUIrZ0JPN2NWYkRta0dCbmFjMnhyVkF3K2hZOUtUUHdOVEFWdUFWNERuM1k3QjhneUpna2lHeXYrcC9tTXMwZFFvR2xLTUdOUnNHeW5jN2sxYkc5UkREdFVkbW5QaGRKN2lGWXVFVSs4OUR6K250aHZpRFVrT1NrSDNBSXZmRHB3OXlUMXg5ZmJCS01tQ0FJYnVWTVBENUp1c3l2NTJXL0w3Y0oybmRTOTAvUlJBdndST3hxNENPZ0QzQU1lQmo0b1k2K1hZQVhnZHRyQ1pVKzNMTWszWHJEeS9QQmFvSDhrMkN1Z0tnTzBEWlMzcmRhNEl1MzRjTzVVRjJsbnBxRFZFU2pVWi8yMG9GMU9KdVlEYmdEdVp5QmpOa25BZE9CUWRyN2dvTGhpbFE0dUZ2Mldyd1ZydXpWT0FtTGkrQ0hiMkRKdTNEbWxMcHFBV1lEcnpidXBUV295d0xTa1NNZFpqUVl1RzlnRjc3NExZZnlhcXNmTWw4SHlBTFdvRisyREFZWWRUUE1mQUhlbVMwVkVCNEJ5ZTRtZHgwTzdJTHZGa0hyTUFockErVmxjTzRNSE5vTHh3NkFjQnJrUThDZHdLN0dFUFlHNlVBSklJd0dnL2gwU2o4aDV0MG1OajA4VElRRW1KVHZXWUY4bEo5R3h3cG1QQzVZdmtmNjZZNkxnb2hvZVcvNE9NLytuNUJjL3dRb2p3UEFOS1RWTlJ0Y0xhQS9jdVREalFZREgwL3V5NHgwbVpRTlRvcGk5UU9EeVBoZ2k3S0VEZ0Q4L1dtNDU1OWdkR1J4UjdMZzB6ZWd1RkMyK3c2cVg0SkRleUgzcU92VktxQUlPQTVrSW9zanY5QkVmM2NIdlFMNkkzMCtITUJvZ0pBQTU0S1JpeExreGRaaFVIWVJOcStHdFV0aDV4Wm5rKzA3dUg0SjFuMmp6dXpJZFBraU1sL3dDZFFrcUpFM0dnd0Vtb3hVV215WWpBWVczWlhPK0Y2ZFdMbzdqL1RPN1VpS2FzM21ZMFhPU3FnTDBSMWh6YUc2Nzl2dE1LWWJGT2FEVElDR05RZXBodUlxZEQ3LzJaUitZdVBNb1pxL200d0drUmJYVmdDaVRiQy8yUEhFQ0hkemdqck9BbThqWjJrWnRkWG4reCt0MWo5N2IwdVFOd0x6Y0l6OEo1UDdNajA5a1NISjBheTYvM3BDQWt4WTdZSmRlUmNBS0ttME1PTGRUZXpJTGRiY0lTVEFhUnA1SEZpQ2NpMlA1cjlNblZVRDN6WWpMNjloQUVxQjBEdjZKckJ3YXJyVHpSZldIdUM1TmZzQlNFMU41ZkRod3dnaGFCUHN6My8vTVpUZWNXMWQzY0dHTEdSSVUrNmVCaUgxUktyN3QwTkZPY0FlNU9wVDNjejhQTUlQR0FQRUhUeFRTa3BNR04wN2hHczNGMnpQWWUrcEVzTEN3c2pPemdaZzY5YXRtSzEyOGk5V01ybFBBcDBqUWhqUUpZcHY5dVJoc2RtTjZHdDVSUVZ3T3FmdXcySlJQVHNBazRGZmtRbU96MkFDWmdLYnJYWVJNbVhCTHdEYzJqc09nSzdSb1FDVWxwWXliZG8wTWpNekFSbnYzSHgxblBZUzVRNmozOStNMlNKcmVwM2J0NkpkbU9jbE8rZE1CZWRMcTBHRzB1dUJ3Y0MrNXFIbkZzRkFMNkFiOEpzSkdWR05BVmE1S3VIQjY1UDQ2S2ZqNUJTWHMyeVo1cStvbFVLUGRpRUIrQnNObUpFSzJ2RDZRSkk2dHZZb2pjMHUrT2o3RTh5Y3R3K2JYWVFqYzQ5MFQ4OTVpU0FrMlRUSDBRZEpYRTFjcDlSQ253TnNBMjZ4Q3dKV1pwMGlKU2FNM25GdHVmbWFUdVFXVjFCUVdrbDhSQWhtaTUwcXE1MlZXYWZwR2gxS2o5aHc5aGRjWk5pL04zS2hVcHIwb0o2UlBIWnJzbGNTR2cwRytxYTB4V0lWYk1rNkIzSkRaQVZ5Uldrb2tvRGJnUHVCZndGdkFmY2g5eGl1UWRZazlTTjN3VFVaR2dLc0FrSk1SZ09MNzdwV2N3ZUZUVWNMR2ZQaFZzcXJyZmdaRGJ5WWNSVnZiY3ltNkpLV29USC95VFR1R3VWYzJiTGFCSG1GRlZvb0Z4N2k3K1FpeDA1Zkl2bk85YW81QS9pOGdlUVRnV3prOWxzdFJBUUdrUllaUTFwa05POGQzRWVacFJyZ1c5ZFFlQk4xdUlPQ1dpS1ZFcDc1UHN2cEJhR3RUTnc4dUtQVE5hdE4wUC9CamV3K1dyTWZFR0F5c3VudFFWemJMUUtBa0NBblVRSzlaYTJEelhINEE4UzNEbVhTRlNta1JVYVRGaG5ERmFGeWNqOWZaZWFWZlR2VU03dmM3UXRzUWlxaDNHb1hURm53QzB0MzV6bDFHSkljelpzVHJuWXJ4YTFET3JtU1llR0drMDdrQWFxdGRySlAxdXg5N0RyaWRMOVdjdUFGVGdJVGtYa0VaeXNyR0JPZnlDMkpYVFh5QUx2T09YbVdXd1dBQnlYc0w3aklzNnVjTmphT3FaUHBvNTFOMzJLMU0yZmhZZFhNQTk1VWphNXhOWlBrdWgyYVlGWEk1YkF4K0FISGhrcVZ6VVptZmw2dER0NHFBT3BRZ3Byd2RENy9HTEtZeVpWeG9Rem8wYzdwSlF2V25lU1BnbkxWZkFuZDVKWWFYeE1rcmR1cFhmNEowQjRBUmdLcmdiL1ZJeXZJeWUxelIzOTZSVVR4VUxmYVZycXpSZ0VuZ1BPZXRzWTJvVlBDcFBtLzBPLzFEYTdrdCtMWTczY2QvV3FybmJtTHRkSFBCVDREVWdIYVJ3VFJObFRPVjM4VWxIUDBsSllBcnRPOUlnUDREa2wrSlk3ZFpUZFE1S2VDSlAvakRST0pDQXdDNE9leitSd3NPUS9Bcm5PRjZwbGQ2a0ZQVUVvb3RRdEJwUXgwN01DalNIT2VEbUR5TTNEbnlIaW5CejlmbTB2T21RclZuSXNNZFZNQlV1SkR0WDQ2ODRjYUJXUWc4d00xSWZvalMrYXVTbkJMUGpJb0dJQ1g5MjFuNEtxdjZiMXlNZk9QSGlEM1VtbURGYUNVMEJOWmhId1RHSWhjWS8yUk5VRkc5WTBodGwyUTlrQ1Z4YzVMaTdOVjh3UXczM0dlQXBEcVhnRUZ3Tzk2OG9GK2ZqeDNUVHJCZmlaM1N2QkkvcG1kUDB0NWJEYW1iOUdXV1hCczFEYWszSjJMTEVUcTRXOHdTQ1UrTks2TDA0MVAxK1J3c2xBYi9UbklGRGtXUjhGRldZREZhaWR6VDVIcXR4NXA3aHI1YjRmZlNFWmNJdGZGeERKdXczZFUycXhLQ1pPQW03d2hEeFE2ZmxkWmt3QjJROU8zeHl2V3ZucjlxNysrTjVUUi9XSzBpK1pxR3k4djBVYi9PSEo3REJ5akQ1Q2FJQld3N1VBeFpSVmFZY1hQSFhtQWtSMFRXRG5pSnIwbExQT1MvQmxrZnFFdGtRNlppcHREQVl6cUUzVmp2NVMyVHRjK1hwM0RxYUpLMVp5RExLS0N3LzhCVXVLa0Fsejgvdzdja0Zkd1VRTGdGZm1od0dIa1NuSWpNdVIvV25Wb2lnSlNlbllKbTFOYVlYRktYQ3FyYkx4U00vcEhxU21qZzJQYk95VElSS2NvS2JDTEFuQWxmN2lrbU1lM2IrSEFCVG1MS3lXMENRaWtmMVI3YjhrcmJBQUdJSzBIYU5yM2VFdXlqcGRlODhxU0k3eDBUM2Z0NG45V25TRC92RmsxWDZSbTlGSG4xVlk3MlhsbG5MMVF4WjVqTlJHZ0svbmZMNXhqK0pwbEZKa3IrZnpJQVRiY01KSGU3YUlaMlRHQjgzYzhnTkZRazhwNFFkNHRHcjJ2WmpMeVZtQ0EzOE5menU1bnVQRmFXU0d2cUxMUlpjbzZ6aFNiUVNZbTNaSHh1Y0lBWk54UTYzZnJJNjhRRVJpa0tVR1B4cEtISnJpQVpjUEV6RXRyeG1ya0FUNzg3ZzlGSHVBRm5NbUQvTEJoTmk3MWZTL0lMd2RFY1pXWkVXdS9aZmQ1TFpocEVubG8waHdnWnVoYjVXWXJyMzExUkRVUElaY3FkNWlML09BQjhJcjhvOGdaL0NGY2xOQlU4bzNGOVFIK2ZyOHRmcWF2VldST0VPcDQ3YjRlK2hMMzdmVThuNEhqYTQ5QVB6K3hhdVE0SWU2ZUpjVGRzMFRXaER0RlZGQ3cvajJ6WEo1OUVNZW5OcTFNVGlYNUFuUkw3SitOWHdGeFhmZDJHdm15MVRlSnFEYUJTcGo5MUcxWlRTR3ZvQ21CWmlEZjBGV2dPM0lYaWVHOW83U0w3NjQ4VGxHSmxpRDl5eUdnSzV6Q1d3OW1Qd3U1d2VJTzd5T0p2NHMwKytFMHdld2Jxb0R4SUl1ZTB4eVpYMW1GbFRlKzF1b1hXYmpmNEtpVFBNQzlXemQ0UzE3aEEyQXRNcG9yOWRDM1hqUjBFb3dCR2Nna3hMUUM0SjNseDFSWkc5eVBmcjNrQWZwRXhaUWh3OVNaZUNhdmtFTVR5VVBENDRDN2dVOEF4ZzdvUUpmWTFzeGJjUnlMMVE3eTN4KzljVjdpUEpJSGNZcTROc21HNTU4Mzh4ZEFNSEtTYzkwVXJRYXVkZWxiNTRSM2V0SzlvbjlVZXpFK0lhazhiOWFzWUY4U2NFVmpJc0ZvcEptT1JXNDg3QVNlQUxibyt0UTc4aXR5anpIaHgrOUJ1a3M3NU81MGk2QXh1VUFoY2gvUGhFeGZxMXp1ZXpUN2pFNkpwNE5NcGsvTVZ1c1JXcEE4TkMwWnN1S2M2RUE5NUhNdmxiSzk2QXhqNDd1Y0R1Z2NrV1MyV2k4TG4yL09mMmQ1dGM0SG0wenpLaThUOHRCOGY1andPc2lwbEdaLzJhQTVGREFhV1dBSURERDZzWFJZaGtiK1VFa3hJOWN1MXdjNVR5RTNQaThiTlBWTDYxN0FielE5dkcweE5OVUNFbkZVV21OYnRkWUtGWDhWOHMwQnAvOEVwTFNKRU90R1QzRE42aDVwU1FGOUFRUHlTek4zbjdjKzJZSnkrUlR1bFBCL1ExN0JnTnd1SzBXV3IvNFMrQitITFJyRWtPWjNrZ0FBQUFCSlJVNUVya0pnZ2c9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2xvZ28tZGFyay0yYzk1Mzg3MGU0ZTc1NjJiMGRhMGUyZmZkMDA0OTgyMi5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvbG9nby0xYWYzYjM4NDI1N2Y4ZWI4YWM2MzYwY2Y2MTQ4ZjIyOC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvcGFydG5lci1jZGJjOWEwMDRiMTc4YjQ1Zjg4ZTU2YjJlZGEwYmUyMC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvcGF0dGVybkJHLWJhMWZmZDA0MzcwOGI0ZjJlNGViODNjMWJhNzZmYmFhLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9wYXltZW50LXBhdHRlcm4tZDA0ZDUxMDc2NWM5YzM3ODQ3ZTdjNzM0ZWQxOTNhNjgucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3BheW1lbnRUaHVtYi04OWFhOTY0MmU2YjM0ODQyNjUzZTJlODYxMTAzYzRiYS5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFEY0FBQUEzQ0FZQUFBQ28yOUpHQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQm1VU1VSQlZIZ0JyVnBaa0Z4bmRmN3UxdnM2dTBZem94NVpraVhMUm1NYnNEQzRHTmtVb1lwQXhwVlV3S0Vxd0VOQ1VVVmgrekY1c1Fqd2tFcXFMQ2VWNEtwVVNwZ1hUQktDQWpnMmNlR01TZkFDTWg1anliWnN5V290czI4OVBUTzkzM3Z6bmZOM3o5anhKbU5mNldwYXQrLzg5ei9iZDc1enpyWHdQaC9INy9wU0xwTDJKbUx4N0tGTU5sTkk1SEpqMFhRdVp6bE9ydFdzNlQyZUV5MUZrdGxpNFB1bGFyMDVOZm1MeHgrdk5scFRSNC9kWDhUN2VGaDRINDd4c2JIY05idjc3aHp1em8vSFlzNTRQaDJIWjd0SUpWUElEKzVFcHFjZlRiK0Y2bVlaMHhjdjRmTHNFdFkyNjZqVVcxZ3VsNUhQNWRGcTF0SGIwejJWU0tVZTZCbktuUGp5VjQ4VzhSNlA5eVRjME1EQWVDb1p1eWZpdU9OUngwRnZQb1dobmh3Sy9WMUl1aUY2Y3puczJIMFZ1b1lMcUcydTQrWFRwL0RMazZld1ZtMWlvOVpFcmRGRUlobkg2TWdnZHU4YVJ1R3F2YkJkRDE0a2hwN3UvSW0rb1IzM0RlKzlmaEsvNCtIaWR6Z0tPM2VPZWE1OUwzVXpIZ1lobWtHTG1nOVFtVi9GM0hJWmkwdGw3T3BMSWhtSndxYjZiRGVDUkNZUEo1WkNiM2NldVZhRDEyMWtNeW4wOVdhUXBZQTl3OFBvR1JsQ05qOEVONWJHK25wNW9sbjNKNVptems4MjY3VXY3eGc5VU1TN1BONlZjSVZDSWVjRi9qMzhlSmRIRGVmU0thU2lycHEvMWZSUmIvRnMxREc5dWdLRURZeDBaMkZaQWVLcERLS3BITVlTYVF3TmQrT1ZaNS9ESzhVWm5GdGF3TVdpaS82K0xLN21HbDBEdTdpV0w2c2gwNVZIdlY1SDZBZmpUaVJ5Zm5INjNOSGVuVmQ5NDkzczE3N1NHd3NEQTRXd1dYK1d1NzNMb3RaOTMwZVRGckFzbndCaHdYRnNSRDBYSGsrZjFsemRxS0ZNMTdNaUhpS0pCS0tNdjJReWdkbUxsL0hNMUFzNFhaeEhjV0VUNXhjcldLaGFLRlZkekN5V2NQSGlSVFJxbXdoYmRjUmpjY0NoOGl5cUx3eU9Qdm56SDU4L2ZIaXNjS1Y3dmlMaHJpb1VKcmhKQ21ZWHdqRGtsUkFobjFldU5MQ3kyY0phZzlmaVNUUjRzUlZZakNVZm04MFdmTnRHaEVKNVVXN1NwdHVXVjNIbStaY3hWNnBpb3dHc01QWmVYVmpHSTc5OEh2L3cvWWZ4NEU4Zng4enlKcGJtRjlDcVZ4RDREWVMyMldJUStMRENzTkNiemo5NzQ5all4SlhzK3gyRkd4dTc4VTdIY1g0VWhsYU9wMnJSa2dmeVo2Vld3L3hLQ2E5T3orSlZJdURzOGhyV0tsVUtia05VSUdBUlRhWDAvcENXOWhtYjZWd2FrVmdVcFVvTkVRS0h5M2hzdEZvWUdkMkhjcm1PYjM3N2IvSGpoeDlHWlgyWm5yMUpnWnFpU2xXb3k4ZEdJMjR1OUJzL3V1V2pIN25ybmZiK3RqRTM5cUdQM09uWHE4ZGFmTGg0aHFVUG9VYUlFazFlYzdocG15Z1pNRFpjK2M2akVMenV1UzdpVVEvWmJJcmFEeERRMm5ZWUlCcExZUGZlM1ZncHJUT3lJb3dzQzkycEtPL3ZSMkZIRmdjT0hNRFE1ejZObWNzWHNIVHBBcEx4Qkd3dkJvdXVTUTFCNHR4MUhiV2lZem4zM25ycnAvSFlZdzhkZTlmQzNYakxiUk5odlg2c1JZMVQ1VlFjTmNlNENyaEp5L0lvbUVQRUN4SHhQSFNuazBnVFhCZ1hxRlpyOEJtTDJWaUV3cVdSVEdXSmZ0d2cxNG5HVStndjdFSHloWmZRbjRsaG8yN2lhblRYRUs0NnNBZTdEdXdsV3ZaZy85VUYySDZkYnVXcGgwQThKWFJvYVErcGVCUnhQak1lajZQaFJPOGR2MjJpT1BuekV5ZmVUSVkzZGN1eHcrT0ZNUENQKzBIQWpmcnFpaDNYa01PaDVjVHhJdFJpeEhNUTVVK2Y3Q01nQ0xoMmlId21nYnpBZXphTFJDclBnSkVuT2ZBU1NmU1BqT0xRNFpzeE5EU0F3bUFmQnJvelNFU0FpRTMyMGxqWE0yQzgyUlRJb2dDRUtncG96aGlWWTFQSkg5aS9CMS81MHp2Z1V1N0FzbzRmSHA4b3ZKa2N6cHRkSEJ6ZS9TejNQbURSWXZYcUdscSs4WHNSelJMdm85dUpGZU9SQ0dMUkNQOHY3bWtqazR5aEs1TmtmREdHY2ltTTNYQUQ4anRHNkVxMHVHeVRibVhUNnJtZWJ2UjA1UlJsZCt3Y3dPRElUaW9oUmtXNUZKTDI4aXlOUlp0QVpEbTBudU5vdmd6SVlsQlp3NTZoSGJoeHVBdkZVZzF6UzZXWTdWb1RvOFA3SHlnV1g2cTlyVnZlY1BQNFBUU1VvcUpZck5YeTlicGFUNjdaa2dZQ0ptWnVJdUtnaXk0WnAvVmlNUmRSV20xMXZZb01OM2J3NnF1UTdlNVRkd3diaEVhN1NmUEVtTWlqY0dvZUJtakJURThYMXBibXdMaEdjMzJWV29zZ0ZJR0l2SzdFbXUzeGRLa1lZd09YcE9EbThTT0ljVS9URDk2UGtaNzllTVpTOHhWOE81VDhlL2RidXFXNG94VmFSeTIxa0ZpS0ZndjlyZTg3WEMxa2JJbmIwS1RJSjZMb3p5ZlJtNGpSTFgwVjV0cmRROWkxYTFRM0dEQWxpQ1dKQW96ZFZ0dkZ1REl0RU9HS3VYU2VjWmxCVC84UWt0a2U1c011ZVBFY3JHaVN3a1laYXE1dVV3TERvUlZqaVF5YVhETnF0ZWoyQ1EwVjJROXZ1T3ZtOFlteHQ3UWNIM3U4dlh2NVN3dTFZUEthc1p5bFg0VUVGYURaNEhkMG8wYTlCaWNaNGI0RGhmUWtnMzBnbnlOa2V4U1d5cUZRbGgxVlVBaDVUK2hRTVVTNytzbzh2Mi9SOVpqZ2FSMVdDUlFxeWRSQm1oWmhYblNqYWprVlRMeUdPZzRKVkM2QlNvaEJvamZIOU1OMFlYWmxMT1ZZcElRNDhnYkwwV3JqRkdrOGJDZG9Rd3A4L1JDcXNLRmFTejhIUnNBNmlXKzkzaVNZVURCcXM5a1FNdHpBUnFtRTh2d3NLc3VMQ3VNV3FaZVQ2cUZMSmhGc3JtTDUzSE5vck00VE8xYlIzQ2pwNWwySEx1dkZEZXhUT0l0V1V5dnJGdms4V2p0b1ZsRzkrQ0pDZ3RmNnlIWDR4WE5GbU0wYXQ2TDZ4ejgyUGpIK0J1SDQrM2ZxeGhHMmhXRitvb3ZaYmMwRnRFQW5EaVVaeTMwTnV1RW1oZHRnNHBhelh2ZFIycWlpZUhrQnE1Zm5VVnRaVUpZaE5tOEZUTzdjdEp2SW9qbzlnNDNwaTZqTXpxRzFTYXBWcTV2Y3hUKzJHek1nb2xZenNXYngyVGE5eUUzMXdxK1U0VEFFSG5tRnFCcFlCdUcyOWh5S2hQZThUcml4c2ZFQ3Y1a1E2VHMzU1p6STcwbkM3Z2dtQ1Z2MVl4bWRDTERVYUxFS1hiVE9zeVd1NlljNHQ3Q0MyZElxTnBlWDRHK1U0WmRMT1B2RWY2TytlQkUyR1grc2R3RGxsVFd5a0RKcXl5dW84MmZRYkRDeFc4WVZsVStheEkxMkd2TEZMNTBRVWNhbWNOYi9mZWFNZWxhZzRiWmR1ZEdRNCtQakU3bHR5N24raE5HQWlTMmpDZCtrZ0NEc1dGMHRDUTFzV3hjMGNXaUViVWxPNUwySmFBeVhTMldjV1NoaHM3ekphcUdKMmVlZnhVUGYrUzRlL3ZhMzBKaCtFUkhHV1RMZmh4S0o4dXJzUE9xYkcxUW1sU2RvS1poUGQ5ek9xNUpFR0p2MGx1YktIQnpmeGFrejUxRWpBUkJ1WWFteDFMKzJCS3pad1YxYndvVlcrRVVSUWs1RkVnRUJ0WXp3UWQ4c29GWTB1ckNaa01rM08yNUFKYlJVT0tGWjVZMktDbnRtWmdFWFZzcktZbElNL3MvOTJSM1kvNkVQWUhOK0hwRk1EM0o3cjBVdGNMQldXa090dk1GS3ZhRmJGRmNNZFovMEZncGtCUVp0TFNFQjJYN1lSTlRUcnhTcEJQTnNVVUtnYU5rMlFTZ0d0ajZ1Kzl3L2RyakFLMk1keEpGWVU0UVQwSkNZNC9PVWN0bkdVaUtVSk95T1lITERKa0drMm14cERreWw0dWhuZ2o0d1BJZzBrL3FyVTA5VFZ5MTBYWDBRUXgrN0RiR2VBU1I0Wm9kR2tSMGVRWW5XTGMzUE1UZXZVa2xTUXJVVnJEZ1lHQ0hsK2FKenJ0K3dJM2pwekdsaGVpcVF0WVVhblhBUjdoVFNOY2R6dHVkNFk2L3ROblJLR3FGZTVpR2Q1RzIxMFpLL0xvdnlhY3lKcUxOSUxRdVlDTGxtWXMreGYxTG96ZUw2dlNPNGFyVEE1RXlyRUNGOVVVd2lCU2VkNWM4TVlrendoUnZHME9TNnBlVlYxRmptTkN2cldqM1lLb3h2QkJNQjVUT1Y3WER6UC9uaHYvSjdjZDFnS3dlSG5YMkgyeFN4NWljbVhDdHNqWXNmaEcwQjFSajh0OG5GYlBxK3RCQ0UzMW1oMDNaSi9rOXVvZ1hWSFhrMmVLYkpQRndLRUtmN0RLYklJYnV5NmlucGJKNnd2NEgwb0JTdVVVVkJhcFFVSzhXMndqNzBGWWF3ZFBZQzF0ZVdVYVAxa3IxRERJY21uKzEyOGhHcXE2dDRjbklTejV4K0NjVlhUaU9SMzZGeEx4N1ZrbkRTcUROaWhwWUpEN0s4TVpmeGRxZ2pWc2ZWTkl6Yk1ZVFg1RGlyYlRXVE53a2drc3lGZVBDRHBBU044RTJDME5JR0s5RTY5Z3p2d002ZE84QzJGM1BleTRoMk05ZnRHb1RkUzFyRktpS2E3a1p2WVI4V0wwNFRNb2k4R3lza0F4VjRZYlFkWitJcExUeDM2alMrL1hmL2hCMzBpT0h1T0lsQXFJUStDRHY1RFcycmRRd1hDbXdVU0t6dG5JbmdzSTE4b1hHSjBOZlBnWHpXNEEwVXhZU1dHUUV0RThOdG02K3orR3dTd3NNSU5jMzFtbk9MS0s5dG9ESzlnajRDU0p6OWt4anJPZS8wZWJwbEZKSEJIaXlGRmN6T3JEQmVBd1dra05id21STGNvRVBUYkkzOUo1NzhGZHQvU2V3YXlDQk9odE1nV1JlWHRJSk85bTVYTFczNUxEVUtEcmxFeUlLQ1JSdmFSYWdPRENzS3RkT0RGSXFtdE5wR3ltZzBxcUFUWVhVZ2xvYWtpSFFDdzJ6VkhienhnOWhIOGh5c0xHTGZZWUpYSTBBc2syRStZNzNIcEQyOXRJUi8vSnZqbUR0L0NZZEdzamhFdDA3MzlpbFlpVkpEVFUxU1MvcjQxY2xuV0VvNUpoVlJPRmQ2TmxKUHRrbThHcTJkc2pSSEMra0lnNXk0YXE1alZlV05taEtvU2ZKQ1djeWpJQzVMbkFZMUt2YzRYRmhTaE53cmxiamNHeVBYRXo5SVJNZ1JDVEJySzZ0SVozSnc0eGxFR0hzdVB6ZUpjcFdhV01YRzJhZWZRZm5SSi9HRlBSL0FuLy94SjhsSFEzUU5EaUtSNnlXdjlMWmNURnp6c1VjZnhlTGlpaVJaSktrQVNSVWVLMzVoTkJvdW5UUmxiWU9pR0lXWGN1NVdLZk82NU4zUzlvQkpqSUhtUDJFbmhnTTZha0VwaFRUdmhlMWNLTTBndW1PT0JpeXdtelh6Yno5RmxjaVlwUXRsVDg2UnhiUHVFd0xOT055ZjNJWHdZd2ZnRFNaeC9zTFRxSmN2SVRzd1NHSkN0dzZhS3B5NGxoRHJmejcrUGYyL0FFaUQ5VnhjYWo0SzV5aWdCWWFkaEdISEk3R2QwdGc1MlBiVlVNc0tzWVRtT1hGQldhQmh1S0VDU3R0Rm0xdFdkRFNvMlZ2VTZweVJnb1k0RTFsSmhzUTNScFRNTWRhczgzTklzQUVVMnoySzZKNGh1aTRiUTEwZU4xZkJnSHRBVTBXNnY0L0NNSkZUUUUxWFZOakRQMzBJTTNQTHVyYkFvZnlNUm8xbGRaL2JZYllsa0xuV2JpaHhLMExMYzNxVElHUW52NFdkbkdmYVFpWjVHeFluS1NLUUVsSUFSNjQ0cGhLWHRHR3pvdllZZCtudUhMcFlrNlY1eGtkSEVEMjRHM0hXZVU0bWl5QnFLL3V3K1hpWFNoaTU5Z2FXYmlrbGhtNGtRYmxhbUxsMEdmZjkvWGVVUDFvc2Z1VXhjcTlQbDB2dy81YnRLL3dMYWhvRFdZWmhLVzZvTjVZa21aVDRLV2VFTUVHcEthRHR3MXRwZ0orVFJMa0tXYnhsT2VyanZzYW5yLzdmS1lkYWhPbGFoSlFwejk3S1NBKzgzaTQ0TzN0ZzliRndqWEZaMXpTY2d0RDBabHh5VVMrZVV2Zm1xc3BDbW13eTNYUDBtMG9NUkdtaTZYcXRwWGdneXZlWUp5WHV0VW9QQW16MzVVd0treURrMmtYR1l6Z1Z0aEVsOUEyblZMZzNoRnpCSk1aQWx1UXQzV1R4YzJuMUNXZHNlNHNXcW5JL2V4bnQ5TUhFenJQcGt6ajdOYklZL216VnVENWQzRzlvSEN0Vmt2WGphVGdrMHBhUVpqYWFFRFR3NjkrY3hBd3JDOXVXaHFHdFFzbjlsaVAwTHFFa1FCNnNaWkp0ZHhKZEp5dTBqUUphTGdndkdKZmNOcWxvUytwVUVVd1dGQmZLc0FlcE00R1dyeTAyeDNHM0xDYlhvcXpBSFlNL25QYWsyWUp6a01xd3RkZlZnM1IrQkhIbU9wZkZhQmkyS1lQa3hIYStEQWdpeW1VWnkzWXlnNVBQL2hZQ1o5S2pGRi95dUxZdlNwT2Vqc1IzRy82YlJQUk9NYnRWaDI3SDNuTXU5ekxWb1M2R1dGc2FDNzVkSjVpMEZHcmp0RndpN3FHOFhtTVB4MnNEaXdsdzAvWUxORjRGMGFTbWEzR1Q2aDc4RzgvMElrYUlsN1FnbldoeEpWT00ybXFOa0JZRlR5bUFIVElXZ2ZFeTY3c21RU2tSWndkTWxDaXh5TGFEOEZnMzVkRWpqSUtDRHBBRTRSWW5EdHVZUWM0eHllelRQSUdPMFVMRFVueTZuZThiVWhwanp5SWFOZFg0WnFXaWJUMUpuQTArM05Ia2JtOTFNUVIwSk9EWHFuVUNSRVJHcUcxckNoRU9GQUdGNmR0YVZsSHJMVmJuOVUzdGJqa3Bkc3BvMlNZcjdUcjdNaEFsMkFJSlJoa09lV21ERkMvQ1lVcVZSRjI4QnFFaEdsc0ZkdnNVTi9aRGU4cWVtcG9xVWZlVFc5UXNOTGxPTnVRcFd3ZzRuVW1peEJiNGRoWXgxYm00clFpbmxicmhOR2lGMG5vSXNMaTZ6dTV6QmJYYU91cVZrdlkvWlhMVHFxM0JyNWJaWGlpaHdRNVlRQVMwWXpsalVmNXVkV01ORnk1TXF3dTZiS2ZIMGh4L3NacVE5YU1jbHpYSWRKcmFUZk9WMzFxQjhScTBTelc1a1o0NE5mWFVJMFhYTUlIZ2NkS2RjWU9Lb2JiT0pGQUZraVBzSE5lcWRlMVhkRHBoQWk0aVdMVnRTZHV5dG1vSzZYb3RrV2V1c2hVd2QybEdLWnBVM3RMRWJUa2xrMlhFOWRuRGpHZDdhYUNvS2tWaU1XUTFjTzZWRnpBenZZZ1dmVXFHa0lyVzNLVkhGeFpYTlhLRTJ1Q3Q2NHpkM282MU5qdmh2dy9JYmxRNDF3Mk90UUw3SG9WY3VrVFlLVTV0VTNJSWlaVmZjdWtlVFpiMzBtWFd1a3RZQ1YydlVqUDFucm1IN3NzdVdMbmw0dnhDR1J0K0VjdjgzcVAxeFlxYnBRM3NPYmdmSXdkdVVDVFVrRkJ5YnRQQ1pmelA1QyswM0dwUTBLdjM3VWF4ZUZseldkUUxOWUhMcEVkQ3hsRm10UjE1bmVSdEJBMTBkcUJGMnR6Y1hLMnZyMy9jYjlRTGdkWlNVS2hQSnVKS2dWSWNReTJSTHdwNWxyd21WbkJkVDV1d09WYmVEUW9qdVRIQ0o4ZGtka0RyU1RuRXVTaG0xcXA0OGVJY0ZsaVRDZkwyOVhYcldDdVI3dUpnSks3V2xoR3l0Tmt2blQyRkJ4LzhkdzR1RzlvenZmZXYveElmdkc0dlcvVGNSMjBEV1kraFlrdGN1NWd2TlZVSkp2YTJ1VEVOOHg5VFQwL2V2eVdjSEpsRTZnS2YvU1ZQUmtTa1FXSWR1NjJTemMyNmFhMVFZekxOYVhBdUp3SUl1VTVFSFVYSk9yK0w4NXFRMml4elVZTXVJNVBVS3QzejdNd3kreDR6ZU9Ic0hEZkZPQ1RxYlpBTUNQSTJXZzNkMU1yU1pmekxnei9BYjE2WWdlOUVjZTExQnpIeG1VOXFYdHZabjhQQmZidW9yVlhKZXRvclhhNzRxTlFiSmhkdUVYN3QvM3gxYnFaWTNISkxPYzRXejA0ZTJyOTNrbDJsY1lraGNiK1E2Q2N4VTJVdlg4ZHZUT0lDRW9GV0JZRnFYRnA3aWFndy9yckdYcHUyc2pLUGNlTnMySWFtU3FkallwV05vSk8vUFllVHA4NnJheVU1dnVyaFVFU0l1c3kvbXpTM2J3bno5L0dKMjI3UjhrcENJVW9LSjE0eU9EeE1rTHVFYnJZb2J2M0VLQzdOTG5JUXNvYnAyUkl1emEzZ3BYT1hKbDg4YzJxeUk5UHIydW5KbUhkM3ZWWjlGdTJhVFVteVZMd2FYMDZiZDlJMVdMOUpmZFhpUE54bnpwR3lTRkJUdm5PbE5TSER5RGpKTVdGY1duMDl1UWpXNTllVU5vVUtBSlpxV2hwTGRXRWlqcWtuWGVZMGgraWN6aWJ4NGVzUHFrQ0t5anByOTNUV3R4aGM0bDZhT25IZDJadkNRSlpXM3BubUdnWFdpNS85OHBFN3Zyb2x6K3NHSVU5TXZURGxlcEg3a2h6UWl3VUVuY1JOeFI0YzEycDhTRXRCa0ZUbUFvcUFiYitYZUdzUHVkU1ZZNjR5UlRQVzRzQWk0ZG82b2hLaEJHazdiWXRPSmFMREd2NFJHdng3UjI1Qk91Nml0cjZDeGlaYmZ4c2JUQ0ZNTFd1TCtxSk9nL003ZVRzaVAxQkF2bjhuejBHeW9jdzNLRmp4dGZLOFlZVGxOb09qbTM3MUR4alFCUUVVTXpJMkpZKzgzbVMxT1p4WTA2WEFkV3JmRHlLa1d6R2RIY2g5cGp0bXJPaHcwTitWU25NZ0dXRjd4VGVKWG1wRjZWNWJKajlhVmllUldPZ2owZjdNcDI1aHAzb2RwYVZwNXIyU2t1b21BYVc4Tks5VU1FN2s3ZDJ4Q3g3YkZodWxKZFFkcjNqakgzNzk2UCtYNVEyVDFhbGlzVVR2T2tKc0x5bTUxUXFCY0YrdGF4VWdCV1d6YVpvendpL2xOU2dCaUdqYktwSWFKQzJJVmJ1SXBLNE1FMm0xUVc1YWVwcWVyVlJZcmUrUkxHdmRhQmxYalJLYy91b3Z2c2JLSHRpZ2xjb0xNeWh4UHI2eE9FZTBySEpHSGtOdmI0OVdKZEVrSjBseFRtN1RQU1U3bXptQ056bmVkTEs2VkNxVituTDVNMFRCenl1aU5WdGIzNG5sUE1lVUhMSnBhVHNJbzVGWnRiSjhjVWNCR3hpdUtiSGFhQVhhZ2F3eUZsdHNFVXJMUXNpMmNHaEhHN3ltK1pvaEczbmlpYWZ3azBjZXg4SDkrekM2Yno4UzdMdkVpTHFwZkRkZGNrM0hZdkpxMWRVZnV0V014Unpjc2YvUWJVKzltUnh2K2FyR2k4WGlpWGdzY2plVXNUVGJ6UmlEa2x0dk5XaU9hZzlMNkdJSlVYa1lhdjRScFVpVHgrWDE3bHdhYSt1YkdOclJ6elU0K2czdDlvVFc5RUdrZFNGdXZyeThqRmN2ekdKdWNSVy9mdUU4TXYyNzBEMXlEWWwzTnpKOW96ckRXNW1qRzdKbGIvcm05dDBqZXo1NDRxMWtlTnYzVUo2Y09uMk1xZUZ1ZWJna2FnMzZOZ01YRUtpM2haWm1iTFhlVWhlVVptMkRBT05icnRaNFNRNG1CUUY3T0pEMDJRUHA3OGt4a1dkaCtycXVzbzhhODZZU2RlNDNrOHVnTS94MEJDSHovWFRCUEdPdWlsUnVrTVZ5RFd2TDZ4S0xkdzhNN1QvMmR2dC94NWRzZm52bTFXT05XdlYyTm9GSytzQk9ZUWhqTWRsVXB6c21ncTJ0cnlPVlRtdnlkbTNYVElvdFNmQTJvbVExdi8rSmoyTW9HOEdIYjd5T2lNcmlsMHJyVURrcGUrTE1qei84d1hGOC9XdGYwWGRRWkU2ZXB3VTNsbWJRUGJTUGo0aVVWaFpYYnQ5MXpjM0gzbW52Vi9SNjFMblpoUk5CSzdpZU9hY28rYzFBdVpSR29YYkpKR1JNTDlNM0pST3ZMWEdNMVdoWnJNMHFTdHM4Mi9UL2hYdG0yV0xmdTd1QVcyNGFVMlFWUURIdFZVdXJqLzk4NkdHTlhlbE5TcWxrZS9MdVdGWmE1TVhyUG5yYjlkODY4ZVNKSzluM0ZiL1lWcHliSzc0NlBUdEt4L3lHS1ZCTmdwZGlVdktiVkFjaVpUYVR3QklIR3g0cmdRMmlxRFNPMTlZcTJMMXJnSUN3am9kL05vbmZ2SHdSRjZkbmRjWnRjM0FmSVFzU3JpcHZHUGxzUTBTbHlhdEs4MDBad3lPM2M5OTkzL3ZlL2RkLzVJNjdpMWU2WndmdjhwaGZMVS8yZG1jZTRCUm9qUEZYaUVTa05HS3lsNHFaUHRqSEZzUHlScjFkbFRlUnk2VFVldWxzVEN2cStkVUsreXV1dHM0OUZxQTNYWGNOWGo1N2pvb0t0Ym43aGMvZmpqLzVvODlLUTAwOWdmRTlTU2U1ZmVpYW03NDcrZFRyM3pONXArT0tMZmZhWStxbFl2SFV1VXRIbU0yTzFPdXRFL0pDakxoaTB6ZVFMMGZRSGdhV2lKSnh0Z3VXVm1vWVlFV1FwNUJTVmkwc0xPS1hUNTlFcnJzYk45OTBnMXEvU3VieDBpdm44TE5ISDVOM3lDWVpqMGQyN0w3dVNOL290VlA0SFE0TDc4UHhxY05qaFZxbE9wSFBlVjhjNmsyUG5aOWJ3eXF0dFdkbnY5S28zbnlDeUJxU1djVGhzTHIrcnlmT1lXWFRKT1VrYytXMG9GOWRpRmN3R2JiQ3gyM1dsMFdTQ2J6SDQzMFI3clhIOGFOZktuei9KNU5qNjAxN2ZGZC85bERTODNKWGp3NFVIQytlazg1a09oL0RNODlmTHAyZlh5dFpqak4xNU9ZUFgvanVEeDZhYXZySkU4WGkxSHNXNkxYSC93RWMvRENFcWxOZlh3QUFBQUJKUlU1RXJrSmdnZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFEY0FBQUEzQ0FZQUFBQ28yOUpHQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQmtnU1VSQlZIZ0JyVnBwYkZ6bmRUM3Z6WnMzKzhadHVHdW9oU0psMlpJYzI3RmJPS2JiSkUwQ05KV0JBazMrTkRDS0JpM1ExdmJ2QXJVTjlMK1Y1a2NLdElVVEJJYVJwcW1acFRHQ3hCRzlSTEpqVzZRa1c3SkVjMS9FSVllejcvT1dudTk3YjRhVUk4ZXk0eWNOaHZObTNwdnZmdmZlYzg2OWR4Ujh5c2ZzQzgvRzE3Ym1UNGNDaVJOek02K2tMS3QrTXBZSXhyUHBTdHlDQjFiRFFMakxuOWNEbnVWS3ZwRWZHVDh3cC9qd2NqUTZPUGZsdjM5cUdaL2lvZUJUT0dablg0aUhyYTdITnVZdlRzRnVUZDFZdW9yMGVoN3ZYbHJEUUN5QW9jTkpyQzF1b2xDekVWQlZqTjgxakhxdGdmV1ZYWnk4ZnhKZXZ3K0p2bjVFazBOelhzMy92V3JSbUg3Z2thOHY0dzg4L2lEamxpNi9PYVY0OEdTcGtKdktySzhnZmYwaUxMT0dURHFMTjJZM2tDbTJNQkRYY1hpMEc0MXlFNnM3SlZUb3VUKzY3eUF1WDl0RVgyOEV4eWFIMGQzZkI5V2o4S0hScTMzUU5SLzg4ZTdwM3VIRDN4b1l1M01Hbi9EUThBbU9wZG5mbklUWCt3eTNac3EyYk5pV1FZZFZVZGpkUlhrbkExdTFVV3NhS0RZdHhCaUtxNnU3Q09vK05GVU5OZFBFNGtvT2F6dFZqQTExb1ZGdnludG10N1pRTGxZd05tRUQwUVNDMGVocEcrcnByZVhyTTdadFBqb3dOcm1NajNtb0grZkRzN096OGFWMzNuakcxclJadm1RSTJqRE5GbXJWSWpZWHJ0RElLbG90QzVxbTRiTjNqU0Rvb3pGVkErbHlDL2xhQzl1bE92dzh0N0pkUWl3VVFKNmVMT1dxV0Y5YXcrTFZOVlN5ZFJReXUyZzI2bWp4MGF5V0FkdWNVbFZ0YVdkdDZVbDh6T08yamJzNmV6NFY4elJtNmFqSGJSckYvekJhTGV4c3JHRDU3WFBJYjI2aVVtaWhaU2pZVEZmUmxZaGdPRUZ2R1NacUxSc1ZlckxlTkdFYU5zcjFGaFRlcU1vUUxXYnpXSnZmUm5xcnpJMXBvRmtyTWJSTjNydEp3N2RoMmFaTUh0dTJudHBlWFZoaVBxZHVkODIzWmR6N3MrZE82eDZGaHRrcGFSVVAyN0pRSytWdy9UZS94dnpybDVCZUxXSmhJWXRjb1Vrakc5aEpaeENrQjBYWWVsVUZoc2tROVhuaHNVVXVLRFN1eFlBRlNpVUQ1V3dGSVErUnROSkFPQmlFMFN4ekUwelVxeVUrTjJWMFFMR2hLRWg1Tk85c2VuWHA5TzJzK3lPTlc3aDQ3akZid1F2MFZ0enhtUHZndjBJdUE4TnFRUEdxcURlYU1BeUxJRkxub2hYa2JwUVE0b0lpek9vUXJVandNOE4rRmIxQkRVTWhMdzRrUXVqaDM3MFJIN3BDUEIveFlHQXdCcU5lZzFtcm9iU3ppZkx1TnFxRkhDUFQ2SHd2TFl5ckhyeXd0YjcwK0VldC9mY0N5c0xzdWNkTXl6N0RmWmJHT0VZNWgybTBFQXpIa0J3N2d1eEdGbWFtQmkvUDY1cUtzRmVuQjhzSWVEVWNqZm5sNTBOK0hSb04xQW43T3ZNdTFCVkVLT3lIbjdrbkRQSUdOS2hjZGFObG9GRXFvcmhiQkh3N0NDV1M4QVdqdk5aSHd6enlYc0pHZXVXWnJmVUY5QThmT3ZPeGpidjIxaXVuRGR1U0YwcVRYS3NVZVhOYkxpUVFqaUtjNkVleDNKU2YwdmpkSVYybGtUYVNYSFFpN0VPMEs0UklUeFFlbnc2UEpveUtRd3NFb1FYRDhBZERDSVFpMEJpdVhsMkh4YmdyWjdkeGFlWlh5TkM0N3VFKzVMZFhFZThmZ1ovM1ZGekRGQm1pS2lORWZZWWh1cHdjSFp1K2JlTm16NTlOMGJCblZjc3hTaUh4MnZ0dTdwb0lsWXR0dGt5VUNsVWFwS0pKSUlqNHVNTUVEdUdWM3NFb2dnbDZxQ3RCM29yVGdDRDBRRVFhSVc0UjcwckNHNDdBd3p4VFNSVmdidnJpWFJqZVdDWHB2NGJGNHFwOFBjcjhKZ3ZDVmx4aWxoSEVjNHJnUmp4N1kybHBibUJzYlBtRGR0d3k1N3lLZlphQXdSeXpwRkdXWlVvQXNmZ1FBQ0ZlaTRkSmtQQjQvZkRTWlFWQ2ZpeWd3MjQyQ1JvbXdqUk9VSUxHMFBSNDZEVnFMRDBRNVVaNW9IR3p3bEV5SUVOWWtMZEh1TnhaTlQrcm9lL0FHSVlQZEtHN0o0NytBMGU1VVZIcHFmYTJPbUhrNWlDVXVNZW5uTTB0TGNVLzBuUHZ2bm4yU2N1MGlJb1dGeSsyU25WamdROWhuTnc0aStqbnhHa29IR2FlMktnVDRuMWN0TVdjQ1lhRENBVDloSE51QWtsYUxFaGh2cGlrQUErTlV4aTZsaWs0MG9RbU5vdWJwSUtnSWRiUDd3dkdlekE0UWFPWWU0bitRWGg5L282V2NpSkljU0pJUklBdDMwb1pQbFh3NEJNZjZybXI1MTlNOFJ1ZkVvdVhYcklGMzVCN21uVnF3U3FxUkxGcXRZSjZuV1RkcUVtaXBmOG9LSmc3bW5NekgzUExSOUNnMitBTmhWSEtOOUNxbTlKajNvRGd2UVpVQW82cWlBVXlyQlFDaVlnS2NpWkpUVzZDRm9xaWErU2drNXU2WHdLSjNmR2JDc2N1eDdBT3hObjI0OXZyU3ljLzFEaGI4VDBybi9sbHBtR2dXYWRoOVRwNWgwYVFWQzFETE1DUXo0N3NzdVFYUm51N2FZdUtlQ1RNRVBQaS9iVU1MbDlkeHdwbGw2bnFxRkJXbVF4WFZkUDVlUXYxaXNOalhpNWM4YWd5SW1SQ3djMXRocVpLZ0VtT0hJWS9rbkFNY1UyVEVlUW12d01zU3VkOVZWV2V1V1ZZWGo3L3l5blRNcVprUGpGY0xCcG5pcHdURDU1ek5nY3lrY1ZDeEkzbHJ2RzVmMlFVRzFkV0NPdCtna3NGWFhHQ0JqK3p0TDZEWExhSTNsZ1FacVBGOE5KUnplNUtnNnhtQXdIbW5XbjZvUEQyd2hpVnF4YlJMcjVIMHdPSVJIcDV6NzFVY3J5a3lIKzBaTys4RTZQaXVxa2JhMHRUQXlOak16Y1pSOTU2VE1TK05FeDR4L1dLWlJ2U1FMRTdmR0o0T1Y5aFUySFlyc1VLRlVRMG9rdFBSa01oWHF0UWNqVndvQ2VCQm8ycUZLbFlWdFBvR3Vybi9WdG9VSEtsMzM4ZjVmd09iQ0tvUHhaQnVLY2JrZTUrQkdMZDhwNFdJeU1lVHpyZks2aEhjcTE3S0cyRDNKZUtnOTdpV2RNOEl2ZjJqSnQ5OFlWVXE5azhMVHprRUxYcFh1eHhudTAyRWFqU2k0NzNWR2N2K1hiaHJmY1FGWnRKMEJNeUs1T3JZTWRTc1VGeWpvaHc1VG1iTHRsWlhNWGc4Y1BrTlRLVTE0dXQ2OHZJVTE4T1R4NUNwS3RIS2h1alZXTm82M0xSUGwrSVFhSTR1T0VRWEp1THVNa0sycWYyUENzM2Uwb2daMkpzTEM5OWEyaVdOTXlVRDBPaW1LTklyUGJXT01rcmdFWThXNHBMRGJZRWdWcW1CTDlPYlVqNVpWQUxNdllSQ3dld1dxMmk1OEFvU2d5aFhMVkpJRElSR3ppQWdXTjNFMTBadGh0Vi9PcnFMczVkTCtEOWkrOWhlL0U5R2ZLcXgwdmsxV0VXc25zaDF5azliZGViKzl5NC8rQjdUYi82ZU1kei9QZzNSTXdwRG1qTEQ0aWJTdEZsd1kxbis2WVlsMThnUHN1TjBGbW5lWFhTT084VzdRcHpmV1VreUY5ZkhlMUJ0MUZIT2VhVHFLdnJBa0ZEQ0JQZSt5ZnZ3UGFOUFBxSmtxTURQYmp6d1Q4aXFoWjRYeWNGUEhXQ1dpTUhyYnZYQlE5bmJkSmpjQlRLQjBPei9Zb1I4SkEwN3Z5THo2ZjRvWk1POUxmM3hsWCtwQUp4a1VnLzU5bnE3Sjd0aHFxZ3drQmZETFltMEZBbExZU2hCM1hxd3pwQ1FVb2tqZFVBVWRTbzZnZ3dMM21GVkNROUJ3L2pVSG9IbzRlSGtSdy9qR0NFcEo1TWlwWEorK29SS2hjdCtBSFBxRzQwN1NFbFlPOXR2dEtoZUJtYW1xMTZUMHBFYkpjeXJpcHhYaWdkVHprbXU2aHBLVGVSU0NEWnl6b3NUWFhCTHhjU2pIMlRPR1dYQ0hHdkw0Z1cxVXVwa1lYQ21zNHJPSXViRktEc09uVGZmYWlRcUgwQlAxVHFTK0VWS0k0QlZxc090WDlZM3QrUzMwODE0MnJLTnNoMFF0UU54LzFCMnZKNlRndUVtT3Fnb2J6QTJwZWtDdHBwSjczV0xqdWtoYXFyemhVRWh3ZWtIQk9YdGVwRVYrYWVoeUVZRkhxUzRyakluS3hTWEF1cEpiK0huR2V5eWhiUEVZYWRUOGdyZC9lZGpiVWsxMEU4YkNkcTlwQi8zeHBjd3lUWEFUZnhJVmQza3Bjb0p3VDZpUkNVS0FobjBYdmgzUFlvcEtLUXdLSkFWc2kyV3l5RVJ2cllHakNJbEs0RzVSc2ViNERoMllWcXpzRDIyaTZSajhvalRQUVRDK2Juc2xmZlFYNXRGVTE2VHFPOEVxcEZMa3hnRkFsZVp6ZE01clN5Vnh5M05TWDJHWFRUWXR0L2kwMVNsUlJaeTR3NzV4V3B2QjJ0cGtvTDJ2VmJ1NVp6eEt0SGJrQzd0aEpCYlBGOG9kcmdKVHluaWpwYms2aGFweko1Zi9ZcUlzRUFmQVFTWHlSS3lVYVZRNkhNUGd3SzY0dW9zS2trWkp5VE0ycUhlcmd6SFRGOTg2RjB2SXg5M21vYjVlQ09wSThUWWlVcDRiQjJhb3F6bG90T0V1cmRDeDNERkRkRWJWR2RPR0hKOEJScVFpTm90SWg4NHVZaUpIMVVPSm5sVGNvdUF5dHNBdm55SlJwdk1nUURTTS9QaS9Zcyt5MHFpdXk5aEh2N1dQcUVaVVV2RnRHZ2JnMks4cjJ0UDFYbEp1TXMxd2k3ZzZMNzMrM1lFVmNWV2RvSVIxblNEN0pPZytwZWlEMnVjNVc0UEc4N3BZOVVFbkR5cXk4MVJoQ3dLYkxaSkdMTG9iU2RaL09IWUNFTTliSk8weFcwcUU2MFVKQWx6UkI2Um9hby9JK2hWc3pKWG96VmJMbjNaTjR5RisxOWkvNmdsOXI1MTNHYSswSmNZOXFkaStLcTNlYTJUdmp0cHdJbkJ4MENOL2NScXN4U1djUkNjZEJNcDVJWFhtcFU2NUxNYjl6WXBRUnJ3VkJaMW9RMERCOGRJYmhveUN4ZVJ6YTlpSWJOM2t2UWl6aU56SzR2OFpxR2xING1jOHRQMmRYT3Rac1VpSDJMRUhXRnMrMWFzWi92WEcxcHVWTEdDVDJIODZ5T2t4MUdVRHExbk1nTnhRMVBTeUl0K1l3ZWFiWXNXYy9sdHd2WXpSY1JZYXVoUUZWQ0dZb2JWemN3UXNwb0tFMlVyUm9hdFMzbWFvWDhGbUU0VjBnaERXNk9BMmw2Yk5pVmZOZ1hrbTFEMENIeGp0c2s3amc4cDNiTUZLbXRlUEttYmNxcVc2cDllUlBWcmNEZEQ5cjdudDBpc1UzaWxpUURVZmIwWXAzS252cExmaXdXWVV1QjVZK1BIdTlPOWtpT3N5c2NndlFFMFQ4K0RqWHN3Y3FsTjVtN2ZILzBrSXcxcm9VYnhPcEJjZTZKZlRKcmo2cVVUdlM0Tm5jTWQrbTlUZTU1aGlYeVVOcVh0TDFqdTcwVDl6WFV6am5IU0FkWmJmZHZzUzhlRXJHUzZHVjFvYURCSGtxNXlrNDBoeDJxYXFIaEtjUG9WckN0bGRFWUNLQ2x0MGo2UlF4TkhxV0s5ekVjcVdkWkF0VXJlVGFTZ2k1L3VXeGxLL3RpVSswWXVwL1hZTzlocW5TS0xMYnRaWlcxMVp4enNTcHpSK1JXNTlQN3RWdmJmQkVPTk1hMDJyclR1Wms0bHppVXducStqTjFLSFduS3J4MCtnNEphNHpXMTNUekxJZXJQUmhFVzIrOGlER3NVeGg2UGt4WjFudHROcjdPQkUzWXJEaWZBSUp0VHFyc1VXNEtHWEpyeVFlODVwbmZXcWFwNTBjSllVZHF1RTlnbmpMUFZEcWFLdG5lYkhxUU44bjNYcTIzVlFwbTFsY2xpZFhNWEN4UzhjY3EwRnNzYzF1NElzalBXWUVnbVlqcENVZktmeVhaRmJwM0ZxYkRLa0dqYktGcWNHMndpZnZoZUVucXdEV2RPRFNkcU9ZbUU0bG50Y0c5YnVPK25BbHRSOXVEUnNpNXEvTUNjb2poZjVGUUM2RlM4N1ptQUl3NzJHcksySzZLRnNhYlp4TFhyYS9qaFQxOWlxRFhRTDVTSW01Y1ZvVVFveDZvQ2FIaC9oZktMQ1FWRHFiUGZHZVU5Qklnd3h3ajlOL0lLTG0wdjRlR2VDWFIzUlRxbDIvNWFyczIvYUtzVG9HUG9YcFM1UnR2V2pCcjBxdFB0Um10SDJjbjJuZVhpaCtKV3hxSmF0MlNueW5SbGxrSHd5T1pLZU81SHYwQ3hXRVdSRGFRQjh0blIvamdDTk1UZ2ZUWXFMV1FwemFxV0Ixbk9Ba28wcHRZZ1ZheHNvWkRsTlF4Zlc0K2dFVXhpZG00T1o4KytKZ1czN2ZZbTI1NVNsVDNLYXEvM0puV0NQVUtUR3JkcHpxbW5IbjRrVDZTY2NSUi91eC92M0xUVG43VDJPRTd3a0UwRERZYmE2dklxZnZ5ekdVNXJtcHkvZVRCQ1VJa1NRRHlLZ1ltQkJBNndkNUtnSjBXSXB2TVZiT3hXY08zOUxKWVdjOWpOVk5sOE10R1Rtc0Q0L1Y5QUg3a3dRSGlMb2tvZzRxeUFoYTdjWUxIWXRuaHcyYnREMnNBK1RIQWQ1T0NHYk5JNnhhclplcGxQVSswd3ROMHVqV1FIbHlJY1Q5clNNR0Znb1ZERU5xWFRuYU1oRGhOVkpObXIxRGlWYVZvYURiZkpYeDRjNW5DeFFsREpsTXBpSnpudDhiQ3dsYzBMREIwNmlFTjMzNDNlc1hHNXlQVFNDcFpXdDNGOTV6WFliTjcyREkwaWs5bkIrT0VVRG80Tjh4cFI2Rmw3bm5KRFVkbXI0UndqSGNyNG52aGJHdGRzTnMrd0pmZWtNRW9pa2FXNG5qTmtmV1pJVHpXbEdNNFNEWVhRL2IrWDNtQXZzNFVVUGRSTlhUakU5bDVycXlvajNwQWJZOHQyWDA4eWl1UndIQXIvRGtRamlQV3hrenc4d3ZsQkx6dlFRZW1ad200YTZjMHNLdVV5UFdiZzV6OC9oL0dKRFRGZHhWdHZYOEZmL2VVWGNEQkZoY1BLb2UwOUtlNC9LS3JkL05RVWEzb3ZUSG04OHBQdm4yVXZjVXJrbStncGl2TGwydnd5UTY3T2ZtU0FMWEliei8va1pXUkxiTEt5azV6c2pra1VMTkhBMGI0NFBqTTJnT2J5Z3VBSTlqOUlDOUVnd2l4YW83MHhUbWw4ckFvQ0NQYjAwYU5SdHV0Q2JMTjc1YlBJa1BYNXEvajEvNzZNTnpsT25pZmFlalEvSG5wNENwdXI4MGdkVEhFb1VzYkp1OFp4L3oxSGVYdWQwOW82K3JwWVlYQ04zVDFkU0hRbDBFNUpCdFdQazBNSFRuYzhKNDVHby82MDNUS21EQ2E4TUc2RDJqQ1hMVkhGaDNCOUpZTlh6ODJpWWRnU3NWSkR2YmpqOEFGMDlTZngyaHRYMEJmM28zc2t5YXl0bzNGakUwNlRSNEdmSGVZNDFZbFh0Z3pFSkNjZ08xdWFVQzcrZ0l5eWZEWXQ4MWNoa2NmWXFmYVF6SVhXTUlxNytPeDk5K0s1NTMrSTQ4ZnZ3TnR2WGNDUjBRUVdWckxZSkJqcHpTckhaME9ZWDl1VzgvZC8rZWQvUW9SVEphWlBaNlRsYWYveC9SLytkUGt6eCs2YW1yMjhrSnBmMnNKUHp2NFdsK2RYQlhZaW44dWp3RXBhRVpOU0VicGMvSVdyODdodzZTb0dCNGY1R01TZHg0K3dRenpJMWQ1QU5DcnFOMDAyaklKUk5vUjZPV1B6YzVMREdadVg3UVF4SUJHVmhKeWNOaG9jTW1hUVh0akVlNXlKWjluTjF0bUpGc1BVZ1ZHS2dzMTE1bDZHT1d2aDlkY3Y0TXFWYTlqZVRtT0x6ZDJ2L3NVWDVTaGEwUGVyNTY1aDZuT25adWkxcDMvSE9IRnNaUm9YMzFsZS83dWx6UjAyUkx2UXkyWlBwZGJFMWNVMUx0U0hubGdQZkNUU1RMbEFHbkNHR2w5KzZEN28wVGlPMzNsSTVvaFhaVTFYTC9KdlAvc2tCQm5tU1R3NXdBZ0lVMnhvVXUwTDR5eTI1NXNWM2tlVVNKVUtkdGR2b01vaDQycW1JQ2VwOVdhTnMvVXNQditscitEZzRZT1l2MzVObE1ENDR3ZnV3Zno4SXRjU3g5R2p4MWhPNlRnME1ZRkxGK1lSOGdVZi9zR1Buc3ZmMnJpZHphMzdUejJRR0IwWXZEODFNb0pqaC9wd2ZISU1teHNaeWlRMlViYzJHRzYyVlB0VnpoRUVhb3B4MWJFN1QrRDRIWWNKQ0NXTW43eVAvWkVDZS93UkdqWEl5V2lmOUpiWDY1VUFJTW9pc3lFTUswdE5LYVVjUTdIQzJxL0p1Y0JTdW9BQWFlVmdmeGNWam9hQm9SVEhYUkg4K1ovZWc4TG1HclpaK0FZWUJSdWN1WWU3K3ZHTFY2OGdOVEdKWUxQNjlEZWYrT3ViaHBBM0dTZU9vUU1UcnpmcnphOVZHczE0YnlLQ0VML3c0dVZyR0IzcXdXZnZQc1M0VDBKMENuYTRHRUdzR3pzWmxoWXF2dnhuVStRbkRpRjlERWt4NEdCejFoY0lzNTBYb2NkVVIyRUlFY0F3Tk5tSmh0dXVGMjNxZXFtS1hLNk8rYktKM1ZLRitXZmhNeE1qTUwwaG5MK3dqSzFkcGdRRlE3MVl3TnZ2em1NclYrVG1WbkhpMkNUbU54dllMYXJMLy9hdHh4NzVvQzIvTTUrYm1abk9wMUluSCs3dVNjN21DcVY0S0x5SmJYTGF4RVNLSWFkUjdUZW9SRXlwKzNSL1NJNnozbnpqTFpUSlozNUNlNHZoNnUvcEowSnhrWElpNnVTb2JkaVNWaVFoazJxRUZKTWxFK3Uvd2tZYXk5czF2TVZjRnhUU0hTTjlETEQySzJpNHdIQk1wM1A0eFFaYkUyYWVxcWRGTkE2Z3p2UllXRnRuYXNUejcxMWNmUmkzT0R5M09wblBiK1dQVFQ1NFRmZnJYMHV3aDcreHNjVGlVM0FRT0xuSk1ud1pwblRHQUdmVnNZQVhuNXRJRWlkOVNLV0c2RFZDTlJjY29MQTJhMlZIK3duZU0weUhndzJuMkpVYVVOUnZETStkeFUxY3psbTR0cjB0cDdWaTN0N1BjSHgzWVIwbERrMGlBYllJbTd2U0U2SzZid205cTRpeVJ1WDNlci8rOXF0blhyK1ZIUi82VTQyWFh2cnU5TVJnN3hNeGxpYWlwOUpncnovTDhSVDd4VnlmR0JuYkdCaE00b0Y3ajhNa3RLK3ViVEN2ZkU3NE1ZZlVVRlI2VFpVOUY5c1pnN2xUSkNsOHhSaEx0TnEzTXdpT0hVSEpkdVlUQm9WRG9WYW5ZVnZJVTYrS2RrU3hXVWFlSUZVVHZWR0d1QmhUeDJOZHlCVUxUL3oycGU5TWY1Z052L2QzS04vKzdwa3p1WjBiVDFpMk15NCswdFdIQkdmZ0hrNUREWWJhWmliSGpoVTd4VVNzTGZLYitFV0NtR243ZUU0TWk3M2hCRlBLNDlSZU5GQU1NQjBSNk13QW0wUkpUM2NmWXBPVDhIUEJYcmdqYXQ2N1VxbktHWi9OcWtOcVhMRWh2TzlJZndMMzNIVUVrMGVPUFBIdTNNeVozN2Yrai95UnpmL00vUFFNVStRUlprKyt5Qy9icVJJTWhQZ1JPOC9ZUDM5aEFkYzNhOGdXbTdLcWx1OHg3QVRFNnh3dUNpVWlPOGIwcmpUVW5jeWFkZlpOOUNoNjc3cmJ3WldnYU1wU1FmTGFBOUZ1K0JYT0d6alY5WG85T0RTV1JKeFVjdUxJR0k0ZkhNenJqZG9qenozL25UTWZ0ZmJiK25uVThzTGxhVThvZktwc3RKYnJvbURsVGc2UGpDSEFUdkcvUHZVUHVPK0J1OWxKRmcwWmo5eDVVMWExTGRsWWxiTndZWmpxOVBpRndtbXhsVjRwMXBFOGNhOGtkMUg0Q29GZ3VOT0lXRjhTNDBNa2ZxdUpzRi9IeVlsREdCL3V4NWNldkdPNWxzdWQrcS9wLzU2K25YWGY5Zy9iM3B1YldaNDUrNE14YnZuVElxeW9HREhSbmNERzhoYmV2YktFU1JJcDNJR2c4SkI0dElpSXZvRVVGKzd0MUlZQ1dIWXBuOFkrL3hVV3NWVTVLTkU0L2hKNXJMaGROWlVHWDg4WFdPeHlLc3ZRdlh4cERxc2I2Vy9WUWpqMTc5UFR5N2U3NW8vMWswUnhYSGxuNWlsVHI0M2xOYy9NSmtkUWl4ZFhzSGpwSFh6bGl3KzViVDhMdXBoOWMxRTZQZGNrSXFyaHVQU09TVy9tVnBjUk9YZ1VWZkpXT0JLWGJRYWhRNzNVbkYwY0hmdklrMkZxUkkvaXBUQnZpSUoxcHI4M2VlcVZOMy81K0tPUFBwSC9PR3YxNEJNYytVd212N0l3OTczVStLbVhEVjhnbmkxbkpyNzVOMTlEcVppbFhxeEtPaWptODFLZUJlTUp0dHFqc21EMWNKcWpVc0tOUGZDUTdNVkVpSGpGUW82aXZZR3JsNi9MMzdiMHhLUDRrd2RQSVY5cXpxeXZyVHg2N2RxYlQxK1lPN2VGVDNCOG9sL0t0bytmL2V3L1ovZzBjL2JzaXlrQ3hlbGF1ZnFOYXFWMFVvUnRuY2k0czdWSlRSbGhYdmtSR1J5akFFOWo1TUE0eVo5NTV0VlFJNmdVY2puMlhtcVVialdFTlgwbUd2SzhmTTlkdzJmKzlyRi8vRmhldXRXaDRGTSt6ci80WXNvZjg1NHM3bTVQbFhMNUV3ZU9Uc1lacGluTm84ZTkvcUJFVDNvMFg2SnJTK1g4M09xMTZ5dmhjSFR1MjkvK2orbnBtWmsvMktEOXgvOERIdG5FOU5ZS1RUTUFBQUFBU1VWT1JLNUNZSUk9XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFEY0FBQUEzQ0FZQUFBQ28yOUpHQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQmpVU1VSQlZIZ0JyVm9KY0YxbmRmN3UrdmFucDZmRldpejdPVTY4eEhpTHdXa1NGZ1hLTkcxU0VGT2d5WFJoS1cwek1DVk9PMjJITUVBeWFhQ0ZRcElPMDNZNnd3UklweG5HN1pBMGdZYVV3WElDSkk2VFNBNWU1QzJTTGRuYXBTZTkvYjI3OEozL0xaSzhFR2Y1TlhlZTNuTHYvYzkvenZuT2Q3Ny9hbmlieDU3ZTNrUXVtT3NMMnViMlJMSWxCZmc3Z3BhZFNNUmlpVURBZ21rYXlHWVgwcTdyanVRTFRqb1VEZ3hHdzZIOVJpQTQrS2w3LzMwRWIrUFE4RGFNdnQ1VW9pdlJkWmZobDNyRGdWQnZhMXMzbXVOTlBPS0loRUtJcXNOR01CaUE3N21BN3FOY2NWQXMrWmlabVVFNEVrWXdFSVRtZTRPRlF1NTc2Ym5aeHoveU5oajZsb3o3VE4rN2UxM0gvVW81bCs5Tnhwb1FpMGJSMmRhQ05WMmRhT0gvSVJwaldCb0NuTGhsV0xCdEM3N3YxODcyeFJnYVdJTHJPalRhaCtOVStMNkE4Zms1bkptZWV2eG5MNy82OE9QOVEvMTRrOFBBbXhnZnZQSGFIYnZXZHp3V2k4YnVMWmZLS1VQWEViS0RhR2xPWXMzcWJuUjNkTURpWjRZaGhsVTlacG1XT2xmVE5INXVxUERVdWJUeUt1Y3pUTlZCaTFHaXNmbEtaZE5pdHZqSjNodDM5ellGL1AybnhtYlNlSU5EZnlNL0hoZ2VUb3pOWngvY3N1UEdBYy8xZW5QNVBDcGNiY013RVdMb3RiYTJvaW5Sckx4aldTWW5ia0kzZEI1R3c2aGdJS0ErTjNtT0xndkF3N1p0ZFg0d0dJUnQyWWpTMDJIRHh1ck9MbmllMTJ1SHdzTS8rYjhmZlFWdmNGeXhjY2VHeDFNUlBURGdPZjRlUmhROUVrQzVYRllURE5nQnJPcFloU2hEVWVPWEhvMFRRMngrcm1zNnZXYXFpWXNCWXFnWTd6RWtsY0g4VG9iOEw4UG5TNFRHUlFQTTAyQUlwa1VRMGp4a012UDNuaDZmR2o0MlBKeTYwamxma1hGSFQ1M3I0ODBIT0t1VTVNZk03SXo2WEZaYzBqWVVEcXJKbVp5NDR6aVFlWXJSRW1JVzg4ejFQUEVBaXNVaXNwa015c3l6VXJHa0ZxY2svL01vRm9yS1lNL2h3ZkFVRUdvaUlDVVNUYkFaM3FkUERQSGFic28yeklHancrZjZybVRlcjJ2YzBlSHpkMm02OWtNZmxZVEhGTTBYRjFGaDBsYzBHMldQSVJXSXdLTjNTazRCVGlsTGUwcHcvQ0xLcUtpTWR0V0VIZVRTaThnc1psQVNnN0w4ZmpHSGNyNEEzM0hoME5BaVF6eS9RTU1MWlJUNWU1OHowN2tnczlQakNJVERhRzV1UjdtWWgyZm9DVXYzZmpnMFBMYm5MUmwzOVBUNXUzelhlMGk5OGVWbXZzcUhOYXRYODBSTmhWMkE0ZWJRbTdMNlZRVDBZUk04NU1MaUJib0RBcEErbzg4TUVFZ0VSSHhYZWFPT214S3FFdWEySExZSlRVNldzR1habUprWVI1azRzMm56RnBYZjRsMjVIZ1Bqd2RjejBMemNGeThkUGRWWExwY2VNbXM1SVVYRGtWemlsTUt4S0V5QmVVNHFrMWxrTGJOVm5aSUpSaU14d3I1Tjd6cjBuSVlTUFNHL0MwU2lDRWJEcWl4b3JnZVhpNkdYOGlvbjdXQlk1YUdFZEtGY0FEK0d4L01xWlFlVGs3TUl0SGJEQ2pOQzZHVlpMR2d5QzE4VzRjSGp3MmRITnE1YjgvZ1ZHemN3Y0N6bGU5b2pQb3V0NUlya2o2Uzc1SktzdHFEaWNVNms2RllRb0pjRUtKcVR6V2hwYVNFQU1GdzUwUXJ6SnAzSll2ejhPT2Rpd1lvM28zM1ZLclFRVFJNMFJxc1FhT3lRTWtwS1FLbGNRWjdobnVOMXB4YnlHQmtlUXpwYlJpYnZZT3UyZDNJQkluQXFaZjdlNVh5c0tobFFidGNmSWNnTWJsNjNidVNLalBOdGV4OWZFZ3JWUEs4SzdlSUlNWkVyR3VQRm04d2dpcDZncFZZRkUwRTFldGtWRHpBYVJ5Y21zRGlYWm1HUGNRRnNuRGwxQ2llUEhFWlRMSWFPUkF2V3JWMkRjTlJtS05ySVpiTllXRmpBOE9nNW5CZ2ZwMEZaRkhORnBCZEthT3RhaXcvL3djZkphQ29Lb01Rb1g4Q0s0U252Wlo2YVp1MWptZHE1YzkyNjlHODBidURJNmEvd2xGVERVREdRSytzeEZQU1FoY1ZmSGNUYWdJWk50OTJHWHh3NlFEWXhvMXhxYWlZTHQ2V01kUW9sdE1UaTZHcHB3b2t6MHhpWW1HV29CdEhUSGtOY1o3NlpGU3d1ekNJVzZrSkFrUEQ4S0E2ZkhzVzViSW1BRVdUSWE5aTE4UnBNVEtlUnR4T0lNYVFMcFFyRFVOQ1k1Y05pTkVuTytxZ3hIajhWZ2lGMThPN2x0cXdBbE9jWmpvVHRlMWQ0c1JZMkZmNlY2U21qbkVmYzFwRnNqdUg5NzNzM2RsOTNuYUk1bXZyamFta09FbUVkTGZFZ1ppY21FUS9GMGQyMURwMnBUZmpBcmIrUEpPdGgyK3BPMkxFQVlKV2htYncyRitUcTNUY2dzbWt6eko3MTJMQjVKNDRQSG1ZWmlHRHRsdldNSHBmcjU2djgxSFNGTmhmNlJHcnJuc01uaG5kYzFuTU1xMGZFR0I4clNhY1VaYUkrMllTTGdIeEJhenlkRUU4WWEyTU9hVXh5cVhHZW5NY3FyTGxsUk1oUXRtemN3THcwY1pWbW9aRE5ZT0xWbDlBWkUyQ0pJYzNTNEpZMUlpQlVxTnEyaHVzVE1XUUtjaTVCNXRvTm1LdDR1R3BWaXNiNWF1a2s5MDI5eW5iZ0x4a283K1hRTGVOQnZyMzVJczhkSERqWnl4TjZhKzVTSHZPWFg4RGpCWG00Z3BwRU81TmhtcDlmZ0lCK2U3S1Z5Rlptcm5sRXVnb25RZnJFK3Bkb2FrWThhaUJKNzdSRkkraG9hV2R4anNISkZoQWk4SlM0akxyTEtkRENjbVlPTFV6c05tUVJjdFBvYm84anlEUm9ha2xXRnhoVlNtY3h0K3ZHMUkrNmdUTC9YNTBjN3IzWWN3YnVXdTRwWmJtMjVEOUdHeHg2ekE1R1lZZmppSWJaQlFRWFlJWkQ2T3JzSk5vVkZhdjNXZk5Dekw4S1lkdjBMVVNpemJ4TEhpWG1pTTRGS2RJd1JhRmRNaE8zd0M3QVFFR0tObS9WMDlwTUNoZUR3VVhLWk9jUnpMTm1zaDJTMmxhbmN4S1dMc05VUEZnSHUrVkRNelRKdmY2RzV5VFhmTjlyVUJxZko5VzlKeGVRNGZoU1kxd1k3VjM4djRSc2ZoWnNSb1ZKb2pVUlp5aHlncHhoUmRaRHR4a2lBWGhFdUFyWlI1NEhyV0FZczNRRUpkZDBaQmwrVHNGWHJWQ1V5RXNXcXRKQkRrK1JiYUp2S0lJS1MwWm1vVUFBeWpHVUY1QW5reEh2eWR3YU5BOUwzSlFyMFRzd01KeG9HRWN6K3Z4TGhLSTZxZlphcG5HYVI5NllTR0Nlb1ZRaEY1elBMV0krbjBOVGE1SzVrdU81WEdGNmgxSExTVEhVV0kwRnVnTXN3Q0Y2TUJ5SlMrWmdlbW9HYm9XZnM5NTVycysrTDFTZHBFbXZRRm9lZ2hjOTc3TnpXQ0FsSzVYSzlCcFJsRFZWK0dqVk1BbEpYYjNXUFZnMzBJeDZleHJHOFhxZnFIdXA3cW42ZTZmUlozSEN2TFZESGhWSmJjZmtYSUV3YnFPbmJUVkJ4QkEwUW9GY1VVTFpveGRsRXE1YnZaWVZwQ2NwTWN6TXptSjJaaFpCVGpMT0RrSThFR2xPc0paMUlGZklxKzdCSnhpVnVIQUxSWWNMNXlCR3NCSG0wOWJXcWtoQ2pHUmFycTBXbksvaXlmcjdKWS9vNzFORzdudCtJRVZMZG5qTExCZWp4S0JHd3ZJN1U4Z3gvdy9SenVDcUhpeTBuVVcybUVPSVpERXpNY2NjZ3BxZ2NFZERsNkp1cW5PRlVySDN3K3pzbFBKc2xHZzVQRG1GNHZTTVlpajVVbzdkUWdGejZUUTJ5UDJFYUROQ3B0TTVKTmR0Z2s2RG96VE9rVWlvWkFUVFVCS200bnFOZVVvN0pZZS9sRW9NellHRTlKSTc1QWRlTGM5VXJubGVvN21VbzlxRDBUQUU0Wm5pQ1dvaDdUMFlaUmY5djg4L2h3QnpReEpkWXk2bE9VbDI1eXBrWkVKaTNOVDRCQ3A1QWc1emJwN2ZaOGtmczJRaHdrN09uQnZEejM3K0xJS1JFQXBzaVp3S1pRY0MweXh6TEJoTFlwYVN3K1RrcEdxVDVGcjVRcUdST2tMN3BPMnFJK2lLbEFwRytreERNM3RWalpDZVg3MVcyMzZKVlVNM1ZDOVdqVndQT2Q0bzFoTEh6T1FFSXF4djJXd3pTalN3VEE1YXFiRFlzKzRaTkNyTFVBbHdFWUlNUlpsd3NWamhwSUZ6TkVUcVlaYWNzMFFlV1NaUGM2bXhsSmhmTDczeUtzc0RTMGpZUW83SU8xM080WnBvQWlaelRiSW5HSXVvdVhGNUZjMFR6VVVNazdDVXNLMm5FK3F6OWIwZFpqZ2MyaTRyTGFzaVA1b2dKeHdkSFVXQkszVGl4QWxzMjdZTmtVaUVZYWJ4eGlFODhMWDcwZFhWaFh2dXVZZUZPWTE0VTRMbmt1RXo3Ulp6QlJaZ2hsQmVhSDBaSGF1U2hIZ05pd3pYRTBPbkVXWVl0bEZuV2R2UmdqanBXWWFBNUhOUlF4dDQzK2xwSEh6MUtOYjB0Q0FTaktNQUczR1dCcDlvMmR6ZXluQ09ZV3BxU25scmdhaFpUeDlwdFRxbzJWd0VoRDVTakxuQW5xRmp4enBPbkRpSnJWdTM0dW1ubjFhVG41dWJVN0tCSkxHc3p1enNOTFp2MzRaRGh3NlJGaVdxUmplMzRQeklFQko2a1Y3Mk1UUThTb3JHZkNQcTZaUUdKUGQwSXA0c1hBdkxSaVFRaHB0elVNbTVPSHQ4QkhscVBxVjBoczBxZ1lIZWloQjFoWE5XQ2dReUV1ZTEyM2V4M2hVaFdvMUVsNFNmRUd4SkZSblZIaEpxOGV0aHVYUVF0L0s1WEdyenBrMDBoa2hHTkF1ejYzM3l5U2R4KysyMzQ2bW5uc0pOTjkyRUF3Y080T1NwSVNUWjF1emF0WXRkY1RNV0Z4ZkpFenZWLytXNU02UmhUZFFnWjFrU1NnaFkzWXFhU2RjVnpKZTQ2bkcwZDNHUkZ1bVByaUJsU3hPQkxkY2l5ekQzdkFxUk1ZTW1seUVZRHVEc21JUGo3QXk2dlNLQ0JLbEMwRlQzRmNBUTQ0eGxZcE8wWHNJN1BhOXVrRmNERkdWY3dteW1HeHdXMjU2ZU5YajAwVWZWNUF1NVBOTHo4OWk1Y3lmaWhON3U3aTZzVGExR2tsU29yYTJ0b1ZpWlVvdm9GVjAzR1hKaGJGeDNGVjVrV3hPeURGelQwNGs1MHJNa3hkbldKTFVXMWpXcXk2cDFXY3d2TXZkc2VDRy9XaTdvaUVoSmx0cG5DSmN3NDlyNDNiNFAwZGdva2p5bmxmVE80djFrNHNKU0pLY2FVdUJsaDU4d3IzdlhPL0hvOTc2UHozN3VjN2gyeXhac1lXaHUyNzZkdENtaUxqWkhJN2R1MjQ3eDhWRk1FRWg2VWowNGN2Z0lrYy9CZTYrL0FWbDZQR0pLaWptNGZ1czdzRWdBT1hXSytjV2FjTlhxTGt6T3pxdDJaZTJhTHF4cVN5cUdVcUpYaHZpYjhYTlQ3QzdDNkY3VmdpWWFrYzdrY2VUc09iem5vNTlHY3NkdStHV2lOdHVvdWtKV0w5U1NYdlVpN3RXYTFsb29yc2c5L2FyMTYvR1AzL2c2U2ErTDkvLzJCNFJRNHVqUU1YSkRSMUdoSjU1NlVuMG5DVDFOMVVzd3FhdUhYbXh0d2FmKzVJK1FaLzNTUlBVaU03RTFGNzN2Mm9VdXFzNWpZMk9zVlduTVpuS1lwVGRHR2ZLTExQS0NmQW15bGU3MlRuTFNEdlF3dEtOTUJUWlRHQ1p6Q2JkMVl1ZnVkNUc2ZVlydTZhYmVRTURsSkxuV3h5MHpyRzZVMXZpOThKZDBobkxiVDMvNlU1VkhJcG9PRGc2cS8rV0U2M2Z2VnBKY2tEcmkxcTNiQ09rKzJya1hJUEUvZk9vb1BaZ2phMktzczl1V2hZa1lIbjZ2OXoyNGJ0c1c1ZW56MDNNNDl0cFpIQnVad0hGNjZ2enNBaFo0Ylp1ZTdlNXNWMDFubWd0d2xvWDlsV01uc2ZQNm0ycjltM1FDYkhFTXZZYU1TOFpkYnRSTFd2VjNXdHI0MkIxL2ZDZEJKQ0VJcUJRb3hyYWdwa3hlV0VzeW1heXVEQzhlaTdNakNFUnhpRFhwenIvOERMWEdncXBuT3pmMGtLbXdFeER2OGRWbVRzYWJZcXhSRmc0eGhITXM1ajVybURpaklycWsxQ3BMOUV5UkpIeE1MV2J4OHJIWE1Ndis3cU9mdkZQSmdRUmJHbTRqd29nUlRua2hHaTUvdjd6MWFYaFUwNGFNejM3K2I3aVo0V3lxRzdlaVdWMTJzbW9VS2J1VmliNS85N2YzWW5wNlZFSCswT2dFMXJPelh0L1ZKck9oSEI1VURhdlAyWVVpNUlTcjJuRDR5QkdjT2p2Ry9FdkRFVHJMU1UvU3E5bGNEaG1XZ2RQak0zaDFaQnkzL2VFbjBkWnpOUTByS1FKdUVqekM4Vml0eDcvUVMvb3lZN0FpUEd2NU4yUVdTOFV6Rm10Ui9VZXEwdGNhWGJtQTB2UDV2V1ViU3FQY3UvZkhMUENFZVN0S2I2YWgyVkg4eXc5K0FvdGhlOU03TmpCekhMajB2bTJJVkZmRWFvTElSMjc5SFR4M1lBQXZEaDdGK2ZGSnZNTEMzOXFTZ09GVDczVEttTW1VOE9HUC95bDIzL0Jlc3BPS2FvU2w5dzZ3WUdzWEdiWDBXZ2NWVWNTVy9RSTFBdzZSZU9pREY3cTcvaHRmNmZtR0NsR2Jrdm5rOUR3ZSs2OG5hR2dFc2NScUxFd3VzS1pSYTJULzlzMy9mQktSUC9zWWJyejJLbnFPN1F6WmlNYkpHeVRRS1M1TysvdmZnODJwTlhqMjRDQk9qbzFqK093WkJPM3F0bGFpSzRVUDN2b2hSa1dCalNydkszeFdCRi9lVXltMC9sSk8xUUdqN295NmtUTEVFZFhQcFRQeCs3Vjl3cDVMMnZ5RjlLVjZBVmNwd0tJRWc2clVGKy81T3ZYRUNmVzVIT201TVRiVVUwci8wRHdiWVRaRlgvaUwyM0dqaURyc3lSeUNUTVV2dzJOZjU3SE9sZVZnYlp4Sno1TjU1RlRPVVJiQVk4ODhqOTViKy9EbEwzOEp4VXlCb3BISm5PWEdKZk5XVGRYWExqRTNmOFZSNytucW5RTEw2VHI5NXAwNzA3eEEvOG9mZTZxVnI3cGN0cGtzZlBXQmIySDR0WE5FU3pteHBENFB4VHQ1TVZNbFAxdHY1TFVRdnZTdjM4VytJeWRJeXJsYnloVU1tMkdscWRBTnpKODQ2VndTVjdPVWJMNXFEWm9UUWJMOHJNcXBIei94Sko3djMxL2QzcXJ0Q2wxaXZWY1lkN2xCRHc3dTNMeHVwTnFKdSs3K0ZTZkNVeDFCZ09IMzJxbnp1T2Z2SDhDcmd5ZVV0enhLREFxcG1Gc0dPNEp3ckkzaEpEY2lWSkN0R3FFbTNQZnQ3K1A3UC9vRkRZb290Y3hTY002dUlpKzlXMGt0bWpDVE1kSXNsNHNpWFlGQlJQem1OLzVKRWZZd2M2M09IOS9ZcUJuc2U5OVRScW8zWmYwaCtkZFhvZ1JYT3hURjVOUXN2dnExZjhZWHYzZy9EaDkraldzcmJRWTNHazFQN1locXFBSlBKRW82WnNjNFdYNm5FUXpvY1R2U2pILzc3NmZ4clVmMlFnc0tseXhSTEtJcUptbzBPd1NIZFhOK1pwNnFNbjlQL2FUQ0tQQkl2Q2RJRXZidTNZc21ocVFzbkFwL1JSdjhaWWRYTzZyalFoVk1Kc2UxVTNzSGpXRHVQM2gwSHpsamI0N3cvSjMvZUF3dnZ2alNDdGVieko4Vk1wcmNna0FpOTNOS2M4Z3RUSERyV1BvbzJkQjNsWURxRm9HMXJWRjgreC91aGxaWVFIb3h6NTZ2d2xZcGg5SHo1NUN0RlBIUzhEUWVmL1psVmRRTml4c2lMSWI5eisxSFIwOFhhVnE1V29ZOGE4azRyWWJxN2xJZU5zQlFpY2YrRTV2Vzl2UXRlWTVqUHIxdzN6TS8yWWUvK3R3WDJBVWNYSWFlZWkzM2Fzb3pNMVZKQjVMQXZKUkd5aFVJSktqN3QxRXlZQm5nZWxWODJUT1EvWEFUNDRzbDNQSFhENUIrNWFseWNjT2prR0VuVHNHSEhGTmFxbG5LRFkzRlF2V2E5OS8vQUFHSWFXSEZsaW5NV25VZmpNQ2xqa3VBakVPdkVTNGVxcjl2QlBZUEh2M095Sm16MlY3T09WV0gzT1dlVXQwdjcxRm40K283aXBtaVp2blVKMlV2MjZIMjRiRjlzWFJYMVNuRFZ5R0NFazk4NXJrRGFHMWZoVlJITStHZUhtRlRLNXRzUDMvNU1HWW81RXJ2Sjd0VEZ1dmo2ZE5uc1BkL25tRy81cEcwYjJHYUJCVE1LNUlzbXlId2F5VkFWeko3UGNCWWxmczNydTIrN3lMalpEUjNyRHZFays0VXIyakw0cm1xRGVvTmI0cm5sTkhxYzAzVkl0bW0wZ2dLSHZVRWtkTXRRMU9NeFJlUVlTdmpzSlM4d0NJdVR6VnN2RHFsWHN2ODdZdS9PbzdKeFdKdDA5RldPMGt1UTlzMDQzajVsZVA0TVp0bnljMnhzUWtXL2hadWxTV1VnRlR0Q0x3Vm5qTWMzUHp3dzk5TVg5SzQ5UFRJUkx3NTFjd1YvSzBsZG1Jb0l4cWNXNlE3Q1ZFeHNCYXVDbDFOVVlDcHY0UVRxb3hRTTFmdFNrVTNGSXBLWWZkcDRNREpNVVVHM3IxN3U5SWpYenA4bk55eW9FUW9qOEJTSXRqb3dtN2NBTGxzSjNMc3lBKytjQVRQUFhzQXI1RFRpbGlVVExhaGpkS0R2elFySWRiM3JWL2J1V0lUOHFMQVRhVjZFMTdBSHVDcXBPcWRyNXErNTZqWUY2OUpXQ3F0a0JPT1VGZXBzTytxS2xEY09iQ3FXOGJadWRlNGNvc0tnVWx5aE4rcjI0a1JDK3dSWTBFRFc5ZTJrMENIOE12RFE4aVVlUTkySElHUWFJT2tlNEYycW14dFNpR1R6bDFxcjlmSSt6SzJiTitBdXo3L0NleCs1dzR1U0dYazZ1NzJkUmZhY3RHZStNaElmNXBJZHpNOWtWN1JZcWg5YUtOMjZMV1duOHB6dWFJV1FPcVdFbFZaN3p5Q1FqamF3ZkJpR1JBKzVlbU52SkNOUnZsM2l0TGRMNCtjd2VoY2prS3ZGQnJxajNydFNRaVcvMlR6YXBZV1d5Mi9wellhdFlhT0VxUkNmWHpvRlA3ODAzdllxdTFQYy9mcFpseGlYTFpCV3IvMXRqNUcwdy9sd3RWazltcGhDWGxrb3FwZHVFVzFsU3NlaTNDRFVLU0RzbDlTOWNud3dpam1KeGkrNStsQlN6MXNJMzJqREpIM0tyeWVMZDRXYlZPdjVtK1pobnNNU2Qxb1FrdmJabm85eUtYS3FjVlJNNjExNEo1cVlnMzFlRWQrY2Z3aitmVHBTKzZKWDVZR3pFK2RHRXAyWExQQTNMdWx6cjZobm1IUVZYOWx5RWFGUFA0VXRGVFhVUDIreHRLSmZJS1hzbmN0ZXdvMkFTV2J5emJFSFhuZVMvS1FHd1lrejJ5ekRHV2Rla2pBOVNzcS9FeUxPaVVSV08yZ2VyVlNzTlJrcXp6bmd0MDlmMzdndTVlejRUZHluTG5Ka3k4a096WXVzTGpmY21GcEVDRFJ5U3BFWExKa1I2ZjJTSVpCNzBtZWVacjBaR1QyUm9CeTNIbHVjWlZVdnRSQlNyYTRSTURWdk9yZXRuUUVhcWZJRUxRVWljT2dvRVQ5a25UTjBKZWVxRmd5enI5Ny9GVC9RNzlwL3E5TDRPWW1UN3pRMHJINWtLbHJ0L0NDUVduajZ6SkFoU1RhWkhQcXFYcFc3Y0VVUTVFdXVyYVpMRnRaOG9pSHFaZlV3MjVxaDVUcW1HN0pQcnFsT25IeGRya3NYTFg2UkpMUGNQZGRlVTZzaGVFWFV2SzZlcUtpK2pnRmliNTJ4L2pwZmQ5OXZibGZFVHVkblJnYWF1M1k5QVBaNnVJTkVzdTl1THpXMVBGSDBUWWZqUTdhWW5pNTNHaTBURWM5a0NQU2pmcUsyMWRDRGhUYjhYeUZwT0pGS1o5bFFVNldGWlBkaEZIVFJmaTdFVzZxM0RBeHZPK0ZLNW4zRlZQdm1ZbWg5T3prOFlkYjJxL1JmTFc5N0t2VnJMT1ZlcVBZMERScU9WSU5YN05LZHowUmswenUwamhxbDBhdkVRT3Z0dkdpVjJtSDBrWExSR0dMKzNleWsxdjFtUGF3NWJoM2pJMzBUMXpwbkRXOGlaSGEwWmN5WGVjUjNyUlhiaXcxVDFQUDYxVU5WZ0N3N01xZVRKaE5YMjdoSEVud0F2WFprZ3BwdzZ0V29nYWRVL1dtQ2lEQ1VseWRjbjdITmYyK2E5NTk3dVQvRCtJTmpqZGxYSDFjL1k3YmVqbXJ1NWlIZmZYSEUrc1RWWWJXUkJ4WENMSG9JdFF0Qy9tVERNOGlDNjg4UkxEU09PVmxRcnl3SDkvdytrbkE3eXVtWi9yeEpzZGJNcTQrTm0yNkplWGJWaCszcXo3QnZObXhYSXNSajNxYW94RFU1Q1pKZnZFc0pmaU1ZaG4xd2l5c3A4cUVSQkhROXBOOVA1U1dqYjYzT040VzQ1YVBGQTFsRXUzZ3JNV3IyMGtDRXBycHB4aG9DVU1rQ2FwZDZma3phYzlaVEd1R09jZ0puQ0ZJTU9RcWo3OGRCaTBmdndZOXpkdWdXamFHSkFBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURjQUFBQTNDQVlBQUFDbzI5SkdBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJuUVUxQkFBQ3hqd3Y4WVFVQUFCdTJTVVJCVkhnQnRWcDVkRngzZWIxdm0xWExTQnF0SHNtU0xIbEpIQzhoaXhPU1dHWW5DY1FoWVR1bkxENXBvZEJ5RXY5VnV0QTQ1N1FsWFE0NExSUk9Td2tjT0JBb1lGUEtDUWtrdGdtUVFCeGJqcDNZc21WcHRJNldrV2JSN1BPVzN1ODNzcE5BeUViNmt2Rm9adDY4OS91Mis5M3Yva2JENjN3Y09IQW9Fb2F4MnpEMHJWWEQ2OVUwYlp2bWVSSFBSUVRRNEZZcnFHWlM2WlhwMmJpV3k2VXJUblhZODl3amNEQzhaLysrT0Y3SFE4UHJjSWhCSVZPL2s0c2NzbXhucURLM2dHSStqMUJ6QzN6UktHeURSc21KL01mamY2N25RWGNkbEpkVEtNM09vWmhaZ3U0Qmp1WU1lNjc3OVlwYlBmaUovZmZHOFFjZWY1QnhEeDc0NlpCaG1IZnp6eUhYYzJBdkpHRW41cUJYYkY3WlFOVnhvZnQ4OE1XNllOQklUOWVoMFFneHp0TTAvdTNDNEtNWUgwTm1jb2JCczBFSHdlVkoxV3IxWUJuNmZYdS9jTzlodk1iak5SbjM4SUdIdHdIbTU2RnJRMnFoZkc5bGFSNW5mL01FVE52QllFYzNmQzZONDlXZGNBaWg3aGlxbGgrYUdNZHpmVDZMUnZEbXBTSld4cytodXJUQ3FMazB6WWJyT1B4QVE4WHdJYnltR3cyeG5zT2VyZTI1OVlPNzRuaVZ4NnN5N3Y2NzdvbzArQ0ozaHdiVzN4VnM2NEJybXJ5QXBpNnlzRENIekVxYWl5dkRUV2F4cnEwZGxYQVFPUnBScUZheGxFb2ltVnlBTHhEQTJyWTFhTFFaMVZRV2V0VkJsZEdxMGxwYnMxR0Zqa0JzTGVwNGZmanBFTDZXWkhZMTdMdjF0cDMzdkpyMXZtTGpEdHoxYVlLRGNjaXdmTDJXTHdDOU9RSzlyUTBGMWs1bUpZZlV5Z29zdjhXL2x6R1RtSUdma2FwbjFDcU16a0l5aWRGNEhBRit6K0l0TFVQSHBtZ0h0dmFzUTRNdnBOSzBJR0RUM0FpanF4T1dHV1R3TkxHSlpVb244RE9ubUVkeFppcGVUTTN0Mm5Qdkt3T2VWMlRjUTEvNTFtNTdiUFQrb0c1RnFwYUJzNHpDcWFrNENwNE5SOWV3dUx3TW0vWEZOSVhKOHp0WVl5UG56c05nVkRxaXJiQlpqNkZnQ0hhcGdvRzJMbXp2NmNlVHA1OUdRMzBkM256WjFkQWJtK0YydGNHbDhYSVpWK3FPZjdpTWVLVmNRSDVxQm1WRzNaRFBOS1FkM2R1ejU3Ti9kZkRsMW0yODNBbVAvZXl4Ty8zTnpWOXI2bDBYbU1zczRQNkgveGNQSDNzS2M5a1U2aUtOQ0lYRGNMaVFLZzBKaFVLTTBoTEd4K0xJNTFhd1pldFc2THFCcWVrWkZFcGxwTElaTEtmU3NGMFhiNzdpalpndkZPSHI3VWIzOXEzUVFnSFdJc0hINzJQa0xQaHBZSm5meTU4Zmc1SEx3MkFrSmNLR1lRUTB3L2pBKzIvNVVPWjdEeDk0QXE4MWNzZWZPSHFuNStyN0xkT0g1ZVFpL3U0ZjdzSFpTYVpYMEkvdGwxMUdMN3RJTGkxamJtNGVBWCtBcWFSamtTblkxQlJCcExHdWRuVlhWKzlYQ0RRclRGMkRvS0x6WVRIWkJnWUdFWW0yNEpNZit6ak1nQjhPMDlCZmNwQWpjdVltWjRGU2lVbXBzUlpkbEd3Ylpic0tyNjRSdnE1MitPb2FZT3ZhM2h0dnZuYi9xemJ1MS92K1pYZHdYZjhCLzdwMThQd212dkNsKy9DelJ3K2hxYVVaOVhWaGhKbFNJMmZQSXA4djhHeGRRYmdzM0dCcWhobkJVSDBZNVhJRnR1MnEyelEwTktyWHVWeU9rU1lxMGpHbVljQ3lmUGpvUi9mZzlwdmVCWStvV1J5ZmdjdHJTcHBMUzVCbmNZeERoM3B0VFFnMFJWR1J0SFhaTGxqdi9Qald0OTk0OVl1bTZJdW01ZkhQZnI3WForb1Arb3FsZ0xHNGhPWEZPWHp4Z1c4UnlnMzByRm1EbnA1dVRJekhrVnhlNGtMWmtKa3lFbzA2R3JXMmV3MzhoUHBpdmxocnpFUUZrM1VxS1ZzdWwxRW9GUGdkQndhUlZscUk0OW9ZR1RrTGZUbUxqY0VtV1B4TU55d2E3cU9qRExnMHlyY3VCdjlBTC95TkpEbVdxZEtXeVlDQS9GTW92dU9XalZkOTV6dUhmNXorYlR2TUZ6T095WDhvWk9rUnd5QVVrMTBrenA1RHNaUWpHdm94bDV6RDVNd0VUQnBWejlkczR1aHFhOFd1YTY3R2hyNWVXUFRvRWdGbUlqR0w4ZGxGekdmU3lCRkliTkl1bjg5QW1BaTZRblIxbUdaU2ozSlUrZG0zZi9ZVFZISUYvTkhRVFh6ZllaOHpFT2lNd3Q4azZTZE9ZSHBLZGtnZjlJaTQyUko3WkJ6bHhXUWs0Tk1QSGRqMytlMjM3dHViZmtualJrNk0zRzJzclBScVpCdkdjb2ExNFNIQVl2ZFl6RVV1TWhCMHNJNlJ1NFNQMXBZVzlLN3RaZTMwbzZXdEdaNWJoWlBOd3Nua2NmWlpBMnVaaWs5UHhIRnNiQUx4K1hrVkRUSElaTlNxVlVsTld3QkNlQW0vYStPQlh4eENxSzRPdDcvdmZRaEY2OW40TFVnaEd2eGNrelNtWFNnVFFlTUpGT2VUOEJGTmRWNnpxdG05cGhrVXByVDM5NmJsNmVPbmV3MmZjVkNqZDgzMmRoak56ZXFpQnIxODdPd0lFdWtVS3BVeWJyN3hiZml6T3orSlN5L2RpSzd1ZG9RYkc0a0U3RTFjcU83UXpheXR1bUNZYWVxRHg2ak1FQ0ZYU2xYa0NSQlNROUwyeFNqcFpZNWlKSVl5MmlJb25ZeVA0NHBkTjZDbG8wM1ZyOG5VMCtTWmFLeE5KMUVkbllXZUxhald6aFBVdWdWRjNhQnZ4OGMvOVpjLy9PcTMvblB1Z2ozNjg0MnI4NXYzbTVMVDlKaG02WEJid3JDM0RxQnQ2RHBjdjJzbkY2RGhMVzk1Q3o3MjU1K0NGd2pEcTYrSEhtRWQxRGRDQ3pmQXMwSjgrS0FGQTJ3VFRRU2VSbFZuclkxTmlQQzFvWnNxQThTZ1NxV2krcG11S0ptbTZGaWh5RlJqVFg3aGkvK3VhSmg4cGt2TlRpL0JmWG9jeHZ3eWZBSkNyR2svMjRhZnRlZldCVkYzMlFZMFhYVUZyS2E2enovZm5vdkduZnZTTjRiY295ZUhBak1McW00TUlUNWFEY2FkaGhEYWV2dWxSK09QLytRTzNvNkd5eG02bjFmdzhTRm82YWpVOGt3aUppTlFvVkhTRm15bWxhQm5rUFVwQ3hMd2tZZ3gwVkFsa3RxOGwwTWo1VkcxeXpXQUdSM0IwVjg5RG8wMTY1NGFoemEzeEQ1SDYrbHdrOWZYV2J0ZW5SL1dobTVFcnRvQ2l3VEFJRHZ5bWNiUWs0K2RIdm9kNHdLR2ZxZkJSdXVPVGtCL2FnUm1namt0L0UvK280SDliQW50N1cwWUhCZ0ExTkpxWHhmajFVRERkTlVZRFowcDdMSTJjK2swWm1abkVBb0lCV05FcEJiNW1YeFBVK2lxcWNsQUdzV0ZhTXF6WWwxTTNZZStmeERHWEpvQXdqVXcvVXcrTkVsRDhsVmpmVGVDVjZ5SEdZdENaNXNTT3NjeUppcHJDTUs1K3dYR2pYLzd3Vjc2ZTdjMFZsTVNvWmlEZm5ZTTFXT25ZTkpyT20rdzhaSk51T09PTzRUK3FFTmd2R1loejJjOWVOVXlQRFpabHhGenlpVVUrWWdRdW50aWF4QmovYmgyUmFXb05INTVDSmFybEJRRCtkcXJzUS8xMnViZko4Yk9Jc2RyaW5QRllpMU1QdHZiQWQvV2ZtaWRUZENZbXFiVXFXUUtqUXBJK2s0bVVIN3kyTkR4ZmZkSExocm4zNzUrdDNIbFZsU2pSRHplUUdZc1diNHZWd0ZPVFFDUG42RVhsM0hiTGJ1aGl1UGlMTUJGVllyUThobG9oYkl5VXBwMmlVMWFYMDNEQ2dsdlYzTURydCsybVdTYTZXU29iNmswMUZiN1l5MWl6LzB0UjVGSU9EVTlpekpUMGV0dmgzYnBXbWhkNUtDbXBzcEQzWjdSOGhPUHpQRUZWSC85RERTeUdoL0x3L1ZYN3JyWUNoeS8rUkdQY0c4Mlh3SWtVM0FtNW9GTURpYnJRUmMyVU1nQlp3cnc2RDJ2bzVFTHFDcjBjbGxUS2RLeFIzLzVCTVlUQzFqTzVyQzB0RVN3ckxLZkJSRGpnRG9ZNjBRSEovSTM5UFlobHkvaHA4TW51SEJYcGJMcmFyVWFsQlN0NVlJeWtFaURDaWxYTXF4aDAyVzlFQUNXTHFEVlRsR3Bpekt6aFVCVElVWm96QktmakVYc3VhYTBEdzg3bFhHSjArTzk1QXZiZERaR1Y3NUZpcU0xMVVOYnpLSThsWUNWeXFtT0lVekRjMHJJeHhlaDVaYTUrRENLUzJsOC85c1A0Tm1wV1N5c0ZKRWd0ZEo0blFCbnRySW50SWxwUWxiZlFhN1pTdHEya3dTNXhNOGZPWDZDOVZmbHVZNnFPMDgxY3hyc1hxaGswaTZhbjZCVVVkVnFPVkpEVkU4Tnc5N3NFcW9zRnpOUFlrQUs1cktWZUpLOWRKSWRzbURFNm9lT0h6OGVNZDNqcDdmNWVqc1prVllpbmFHSXJrdUlkYnBhWU5KUWovRHJUaVRna2VWLzlWOC9oL2owSlBxYkdyRno1dzFZdjJzWE52VDJJazd2WlFuaExxTVo2K2hDWTMxSWtXbFpWVE1iZVgyb2ptMG16S0hWUVQvNzUxTnNGVXZaQ2hGUVYzdzAxa0tpemZQT3p5Mml3S2hMaXhCRGk4V2ltamdrWllXWm1QTUVwU25LR0V4WlMrcDBOZG9TRTQwUmMzdmFPZWkyZ2xlV090NXRHcG1sSWUvcEZPenhCdWlEM2REYVd4VVdTZ280a2lLa1FGb0hvOG1hYTNvbWd2LzU1YTl4K09ScDVPcWJNZkNlMjNINXppR2NKdjhzVkVxNDVZMDNvSC85SUNuYUF2SmNUSGVzQjIyczR3SWptbWRrUzJ6dUFaOUpROEpJNTFZVWQyeUxOS0NudllPQ2tZY3RhN3Z4eTlPanFubXpyMkI2WWhLSjg1T29MMWJoVCtVUktMdXEvNm9SbHVmb0RKZmo0M05YSy94ZEpOU0dWbk1HMncvcmJadkpTRzhWUnE5ekhOR09ud1phU0pQV2RzR05SbmdCbzRhTGNpOSsrZXAzNzhiano0eGdvTFVKMTkxOEkvU3lqVkJYRis3WSswbWtxV0xWKzRMTStTQzZDYzBPdlF0cDFwa01xa1RKK1dYeXpQUXlza1RpSmpLZ0JNSEdsTkdIYUxkU3lHUEw0QVlzTGlaVlA2dGhpb2ZUcDA3Z3Y1Z3BIVllZRzNpZm5wWU90SkFNQ1BzaFF3QjYybURTOFE0ZFZ2RTBCWGJpRjBsQS90K3JUWDNyUjhmTmRIYWJ0R1hYa09aTjNzZkZlVXdWcTY4YkxnZFNWeFU4YTRFb1dKbzVEem9Mb2Y1Qk9Jd1daeDRTYmFZQmExQmpQWkFWSy83bjBmQXlaOENWVkFyVFhQUTRWYkdKeFVVc0VLZ1dDVkR6L0t5N3RaTkJZQ09uSTNyYk94RmthajF3NU9jS0dJUlBEclpIMGNBRzVvaTEvTCtkcWIxcDdRQzJYSHNET3JaZWdrQzBvU1pIVkdYOElicXo1eGxjZzB0T1hKMUl4RTE5eCtaZWR6RUQrK3dFREhyWk5RampBaTRrenU0QzZ5M0tNV1JkTHp5eWM0ZEcxNjBicEZ2TVdxR1hxRnE1Yk54VWdZU1ZDRHVCVURmcDZha1ZGR2o0SklXakJHODJ4UWw5SnJWTTR6S29jQ0U5ck0zTmZRTVlJN0cybVNGeWJudDNqMm9UT28wSjhscCtBa1dSVGxJNkp3Zm1Bcm51WW1jbnp0QjVDeVBqaU14RjBOSFpTdHBXaEVoSnJhSzJUUzhRM1RtNU8xN0V0RFdPTmt3elF3UWZHbFBoR0dIbGlweXIySXVZSXVaaUNpNVIwV21Md0NSTE1WcnJpWncwekJZQUlhdG54THo1SmZZNFNVTzVPcGRYTEZNdktYSEJCV1E1eGlTelltUVNjMVRITXV4N05yL1hWZCtFK2RscEZGZXk2R3FKNHZMQlRSaWRueVY2S3RtVzQxU1FTTXNwZzA1c1d4TkRFNDJ5L0NIa3k0eDhjZ2FwOUFMcXlHZm5PVm81eVhuNDJaYTBqaGpCckU0UmVFMDNJMnBpbEhTVjV1aXRvVUpNSTl5WmVWUUo3enI3a2laTmdDZm9TV29mNlpNd3I2ZGtTYUNlZi9wcEJsQ01yQ0I3Ymh4OTczd3JDWE5ZVGVRQzhWV21iRlVFSGtZcHlmNlhMb3FoZWRaWFRqR0xiSDRGTFlFb1ByejdWc1RJWkE0ZEc4YjNIenVDQzZPS1ArQlRpbldrZzBheGpqWGRValZGdVJjNTFxMmYyWk9NbjBkbWFrcU5QcTNoZWpSUmNRdjVPTndHTEdZRDJaYkZmcUcxdHlqbUlNaGhrOVpvZld0Z3J1bUFQVUZQaXBaUlppUUZtYmh3RVd4K2RmZ24rTjVQSHNIWVFocEJGdk5WNUp1ZitlQjdWYU9WdlFCRDBzalFsZHBzVUJzUkpTUkhZM1hUVUJPSGNOVWxwdWNnVWRManRULzNuUWR4NU5TSTZubmk2WTd1THNUVzlzQWdRSG1HY0ZCSFNYd1NVK0c3dWNRa3hpa2VhZVRDOGhYdVN5Qm5GMUY1NWpqbnpUQzYxcmZCVDFKdDJvOGZTeVBhR1BGZnNwNnAxM1NSU1FzQ2VSdDZpSnp0cU5MQTh0Z01Bc0w2T1J4dXVmVTIvUE1QZmdTdG9ZN2NNWWJyMy9GMlZKaTZKZVorZ0dOTmxTcFhtVGZPTWpXbjV1WndmbktDdE14V2ZjdGpKRXRPRlkxMUFVNEJGVHgyNmpoR1ptWVZoRXYvNmVqb1FIZDNON1BDZ3FVbUNFTzFESVBBc3pReGhoVU92VmJWVmdCWEkrMjE1aTZUK2dLTlBFYTBDM0RHak5hSDA0U2lTdHBMTGtSS2oyZWdzOGRaRy9zQk1oUlhNMVdUZFlOazRSdjZZYkVIMmVlblVDREtQWExrR0JhcEZxL3JJZENRSVR4MDVCRk1UMCtnSWhvbWMvOWQxKzFnMmxpWUpUcE9FU2xsU00wSVdLRkdrbTAxSFhpb28wSW0wNER0S0hLRjFsYjJ6b0YxcTlHbFFZeTB4czh5Uk5wME1nR05KTUJrWkcyanR1ZEFOaTVoUXdOckxiWitBMEtSWnE1Qng1UEhUbURicFp2anBxUGJ3NXJteVNyaExjNFM1UllBTW5sQlNKUERxS09ycThEaFZLMXY2VWY4a1RFY2UrSUpiR1l0dEpGNVBNdEdXK1VDamo1ekZrVkd4S1ZESnFZbThlNGJkbUlzTVk5empFcWU2R1Y3TlpadVNlODBQVFFTaUN4bWgwWVFLbkpjNnVKTXRxNS9yUnF1cGRjWjVLOXBNcCtWcFNUOVgrSHlYTlVYWGEvbUlHbG9qWjN0NkZxM0h1R21Gb1dtcmhxZ0hPU3JCUXlmT1prMnJXdnlFMUlmaXNKb3RXa0FIaEd5ZUliazFhanhUWkVGTkJsTVRUdzcrbk1LckNYME5VY1JhKzNGbXkrL0ZrOE5IOFY4bFNTQXJML0VHNWZvMFNmT25FSXFYeWJOeWxCN0thbTAwNWxxT2owZEpNdUlVQjdVYW5ERndwZDBGTVZzV2trSElsV1VLZGdLcTJkclk4UFdsTXhIY3N1TWdOcFFpUkFuZkhSNHlXWEtaK2JZdUMwMXo0bENaeEZzc292MkNkTU5yUXdMV1pFdjBJM0tJNkpwcUh6bXhUVDJNWVZSR2tWWE5HTEh0UnZ3N0pOVCtNUUg3a0NTUmMzMVlzc2x1NUZndWhiWTk1NmRuTUlvWVQvRHZsV2tidUxqelJ5ZVZCZWttc1dHckdZMjFraTlESjI4cGV6anhUcnIyWWp6aWl3TEtzazVabGhrQmxlR2J6cUUzNU9KbndaYVFyc3NZU1JzMUVYdVQvQ2F0dEkvdWF0azEyVEdNczh4ZFBjd0JTWGZRYjU5ditMZHE0Tm83Y210R1VVYTZua2swdFphUXV4bXRNYjh1UDZHTW1IYWo0WEpMTnlzaTNidXp2UnVHbURhVUpCdGJjUHk0MGR4Zm5aS09TakU1bTR4SVFSQVJJVXVVeWNSeVNGRVdjQlZXa29WUWU0ak9Od2RFcU1GSEdRUzE0d2FCZk1VWUxneUJTbS9lOHdlVzgyQ2FveFZKTnRRYzBSdHdyOWdoRzdwdzJiZjluM3BxZU4vYzlqejdLRWF4NnJwRzBvQVVDTkpETDdnRmtMNmdFckxZTVJGMzRaTG9WT1lhYUZnR28yMUlVeHkzTXpOanp4Qkp0d2c2ZWtqSzBtcERGZXFzZ2lvbHFGYVJGMG9xSXdUY2l4ellaYXBTNGJLOFloYUpDTVNaT3ZRV1I3RkVrVWhJUkpTS1laRXhGUGFqU3pSdXpDc2V1b2pwZWpvZ2czZXFwSFFodSs5OThHNEdsWnQxejdDRDJ2RzBVV2FVcWs0MXZ1dWhFbkRCSkU4anpmMUhGVXpUZTFkMUVVeWFHcHVWY0tNUE02UGpwRktUZUZYVHczak4yZEd1T2lpS3Z3Z0M3MjVQa0NEZkdvL1FSQlFVa2RGeUsxdElWdFUwazZlT1U4SCtOSFdGc1g2L241MGRzWXdPallzVUthY0l0ZlNWemN2bGZOWDV6elZCbVRkd3BhWXZqcjdJb1hrcjErY3hLRUg5cnR1L203ZHM1WGRudFlPZitnNlZuT25HaDFsdE5Db0FzdEFLQmViR0IrRHN6eVBtWmxFYmErYk5UWEZPbnZzK05PWW84UXVld0tDYXVMSElFbDFNL3Roa0FPc3lPd0Mrd0w4WW1RcVZ5Sm8wZStzbGFwd1NEYm9DdG5HU2ltUDFyWWVyQi9jampQbmppbzFRRk5SRWJWTUpvbWFWbm14aHRpT05NTlVuMHRmcEtKMjhLSnhrcHFqeC9ZZXBpdUhvQThnVU1jZytzaTRQV00xajcxVk9hNlcxeTZqY1BEUncyUUpjL1I2U0VIOUNoRnhnWXFYVUNSUmxOVkV6aHRHT042RXlSUDlUTlVMVzh6aStSbWV1MXdvRWNhYnFZeVZGR3NwVXk1WXBoVGYxZDJKQWgzVTB0U0Z2cjV0bUp4NFdzMTdIcU1qaTY4aHI2R0FodVYwTVlxcW5ibjZEL2YvMjBQeDV5SW43enZlUGE0MU1CUnNlQ3RISEthUGQwR01mczZ3QzhmR1N6WWoydFdORTVRQmMra1Y1TWs4bE16bjFWaURwTGEwc3pyeXcxYXEwWUtNY3ZjU0Y1Zm11U3RGUnBicFhjZEIxZUY3d2xRYUd1czVMV2xLMGZaeDBSM1JOdlIyOTNLd0piOXNpT0E4VTdSYXpLcnhTT0JlSkFXWDJXU3NpbFdxRC9KN1ZLd3VibW05WUF0cmJ1ek1JZGNJRDhubWh3Uk10RVZOZnc2QkxoNnI3T0RoQjMrTUh4NzhFWmE1UjFkaTVFSitNYVllSjg2T3FvM0VuczRPdERJeUJzRWtTOTF5bGxIUlNHekQzQThRblVXY0pzK3pDd3RZb1Bidk9WS0xGYnp2dHZmZ3ZiZmRyZ2oyeUpsek9EMHlRbUFwNEJ4VE5KdFBNRE1zeFdLa1pWakNWNlUzNnFxRkhMN3ZTNC9zdXJETUYrd1YzSFhYcDArUXhQMnB0cW9LcTRldTQzY09zWlh2OXc5dXhJNDNiS0ttc1lJUHZmZFduRGw5Qm8waEVsZHVrSWhqUkVUS3NCbFBKNWV4ekFsREpQWUd5dS9pYVVsZFM2US9zbzhsN2lXSWxtbUo0VVRUdi83MFg2Q1JvbEtSMzExTXpDdm50alMzVTVKdlVXbVo0VVF2NlhoQjk1VDFDUHBXTlcvWDBhUHhpenM5TDFoNXJDODJ6UFB1VStmTEovckxiWm03bUJrZjVVWmtJNEhEaDF0dWZqdVNuTmVtVW1RbDVJR3ozS3FhcDFaaWNjR05uQmVsSndsNWxyMDVrZitLN0hsTGpMcWtncExKaWV1WGI5K0dDSjNqY3FKT2tuVG5DeW51N2Ztd2FjTjZYUEdHYTZpZDdzR09LOS9FWmkvWHFOUUFTcVJBRi9kOCtjdUg0ODlmM2UrRXBXeTcrM2l6dVBxZGlQYlN4b2tnZStUSVk3anB0ZytvVGYxbVJ1WHR1NjdGSlpzM3NBK0dGRVRMenFuc3BNcW1vN2NLNlhteUVua3RVWlAwa2tlUUJGMTY2enR2ZkljcUJRR3BQTThSVVVrNHBUaTdnMXd5eGozMGQrLytNTFp1dVY3QWd6WG95czVSL0QrK2NuamZiNi92ZDR6cjYrdExleFZuRjlNcS9WS0dTYzljbkI1bHNkZkR4NG5ZRjZoRExwTlNFbDJRa0IrbEpCRG1ndlZWYm5waEdoRERaSWhWKzMyTW9qaXdnVFVvQnF6aHVQT0d5eTlIaGVtNE5EOUh3WWdETXlOcXNqLzZ1WmtTSUIrMUFxYmFMOXl3Y1l1cWZlN3Nwc3NyenE0WFhlT0x2ZG5aMXhjbmt1L0JTMFVOVlp4OTVoUjJYSFd0Mmo4SWN3TmVoQnhaZUZSQVJOZVZuR0F6YXJKSElNWUk2TWdoRVZOOFk3V2VCUUVEWkMxYnQyMVRyMlcvTzV0ZHVhaGJOdEpoZmlFTHhuTVUwZThMWS9UTUlpemIyUFBBd1NmaXI5ZzRPZHJiMXh6VWJXZnZpeHNHR25ZU0R6MzZHQWEyWDZWKzVST2s5MjNXV1h4bUdpV2J5RW52U20rUTM1T0ljUkkxZVRpcisyN3l2bW41bEJNYXFXTkdDU0EzM1hTamFnMGxScTdFWWJkSURTVVFFTGxRWDFWZU5kVjd4VkdOamMxWVRwWDNmdlBnNDcvMzl5Z21YdUpvNllydFg1eWJGV0I1d2FhZW9KTnNJYi83MXR0SnZZSXFZc0dtS0RvNWxSOC9keGFKcFJSU21aTGlobEx3RjNaeUxteDBpTEYxZElhazc3b1k5OWlhNjNIYmU5K1BGcXJSbWVVMFVtUTV5NmtsaFlqaVNyOWZkQkcvMGpPRlZNdDEycUt0ZStPSnhQNlhXdjlMR2lkSGEwZlgvdVQ4VEp4Ni92Mjh1dG9hRXZheDVZcHI2T1V5YWovRW9MV01RaHNYR3V1S0ljVWRuM0l5aDVWOHJpWStrUjZKUUd1dTdvcktGQ0EvYnR2WVA4QXQ2QnZSdjNHd05zWlFOWlBGcDBpNlpTOGh5S2paM0pDTWNsL1FNR3UvQVNQWXBFazQ5Z3h1M2Z5eXZ5RFM4UXFPS0ZQVXRyM3RkRnk4OWs2TlJCazA2TUlyZ1RNL2dhV1JTbGFCdENwTGNWYU1FaVA4Yk5TQ2huNzJNWm0vUkkzdWFJM2lzdlVENUpBdHlMRmxsQ2duVm9tTVJVcnZZVkk2UDBGRVdzMDY2cVMrb0Y4aEtCTWc3dXJ1OWpVOWZTOXJtQnd2RzdrTFIyZG5aNXhQZll2emlYMmNydTRXejRxQUk3S0NMcjhwa2ZHZnZvcTJ0TlZtTVBFY0dZWXdmMkVoa2xxVmNrVU5sVzNjMm1ybFJISG95S1A0cC92MlkvdVZPM0ROam1zdzJOOUhZYWttSW9seDlRMUJOdTZvb25WTXlmdnlSV2Vmb1BrclhmTnIrcjFsSXBIby9jZlBmUHIrTjExMzlkQXlOeWR1WnUwSitqbVU5YzZmT29rRFAvNFJ4aVpua001a0ZZZ0lUUkpna0JqSDJLdWFHNXZJL2wwY09QQUR4VXpLZG0xL29DZldnWGUrODIxWXU2YUxqS1FGRzladlFuMVQ1TEJ1V0h0amZYM0RlSlhISzQ3Yzg0L1ZLTzVxajlRUFpYWC9uVGZCMnkzdkc2eWJydTRZaHE1bWU3Qi9nWE95VDI2R1ZhK1RXVTZvVllqYlYrc3BvMy9qdS84TjJWb1E3Y05UdjBSeE1FMlY2MnZmK0NhdXV2Skt2R1huRFljNzI3cnV1ZlRLcXc3ak5SNnZ5MitjSlpLbVJnTTFmSVFnc3kyZlNXUHFmQnhQblJ4V01rS2VsRXhORGRJZGFmQ0dnY3Z3dDUvOWUvVURBR0h6Tm8xZkU2bWpDbFk5bkM5VmorUktwZjNwZFBvVnB4LytQNDE3L3BGSWpQZFMxOWxXclRoRGhWUjJxMmZia2NUOFF1LzA5R1JrY1hHTytuNFFvNVB6Nlc5Kzl6dHBHamJNdEp5Z3RqOGNLSlVPeGw4SGc1NS8vQitNbUhZZGVuZnk1UUFBQUFCSlJVNUVya0pnZ2c9PVwiIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQmFzZUFjY29yZGlvbiB9IGZyb20gJy4vYmFzZS1hY2NvcmRpb24nO1xyXG5pbXBvcnQge1xyXG4gIEFjY29yZGlvbkJ1dHRvbixcclxuICBBY2NvcmRpb25JdGVtLFxyXG4gIEFjY29yZGlvbkNvbnRlbnRzLFxyXG4gIHNpbmdsZSxcclxuICBwcmV2ZW50Q2xvc2UsXHJcbiAgY29tYmluZVJlZHVjZXJzLFxyXG59IGZyb20gJy4vc2hhcmVkJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFjY29yZGlvbih7IGl0ZW1zLCAuLi5wcm9wcyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCYXNlQWNjb3JkaW9uXHJcbiAgICAgIHN0YXRlUmVkdWNlcj17Y29tYmluZVJlZHVjZXJzKHNpbmdsZSwgcHJldmVudENsb3NlKX1cclxuICAgICAgey4uLnByb3BzfVxyXG4gICAgPlxyXG4gICAgICB7KHsgb3BlbkluZGV4ZXMsIGhhbmRsZUl0ZW1DbGljayB9KSA9PiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIHtpdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxBY2NvcmRpb25JdGVtXHJcbiAgICAgICAgICAgICAga2V5PXtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgIGlzT3Blbj17b3BlbkluZGV4ZXMuaW5jbHVkZXMoaW5kZXgpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPEFjY29yZGlvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVJdGVtQ2xpY2soaW5kZXgpfT5cclxuICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17b3BlbkluZGV4ZXMuaW5jbHVkZXMoaW5kZXgpID8gJ29wZW4nIDogJ2Nsb3NlZCd9XHJcbiAgICAgICAgICAgICAgICA+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAge2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgPC9BY2NvcmRpb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgPEFjY29yZGlvbkNvbnRlbnRzIGlzT3Blbj17b3BlbkluZGV4ZXMuaW5jbHVkZXMoaW5kZXgpfT5cclxuICAgICAgICAgICAgICAgIHtpdGVtLmNvbnRlbnRzfVxyXG4gICAgICAgICAgICAgIDwvQWNjb3JkaW9uQ29udGVudHM+XHJcbiAgICAgICAgICAgIDwvQWNjb3JkaW9uSXRlbT5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG4gICAgPC9CYXNlQWNjb3JkaW9uPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIEJhc2VBY2NvcmRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBzdGF0ZVJlZHVjZXI6IChzdGF0ZSwgY2hhbmdlcykgPT4gY2hhbmdlcyxcclxuICAgIG9uU3RhdGVDaGFuZ2U6ICgpID0+IHt9LFxyXG4gIH07XHJcbiAgc3RhdGUgPSB7IG9wZW5JbmRleGVzOiBbMF0gfTtcclxuICBnZXRTdGF0ZShzdGF0ZSA9IHRoaXMuc3RhdGUpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG9wZW5JbmRleGVzOlxyXG4gICAgICAgIHRoaXMucHJvcHMub3BlbkluZGV4ZXMgPT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgPyBzdGF0ZS5vcGVuSW5kZXhlc1xyXG4gICAgICAgICAgOiB0aGlzLnByb3BzLm9wZW5JbmRleGVzLFxyXG4gICAgfTtcclxuICB9XHJcbiAgaW50ZXJuYWxTZXRTdGF0ZShjaGFuZ2VzLCBjYWxsYmFjayA9ICgpID0+IHt9KSB7XHJcbiAgICBsZXQgYWxsQ2hhbmdlcztcclxuICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgIChzdGF0ZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGFjdHVhbFN0YXRlID0gdGhpcy5nZXRTdGF0ZShzdGF0ZSk7XHJcbiAgICAgICAgY29uc3QgY2hhbmdlc09iamVjdCA9XHJcbiAgICAgICAgICB0eXBlb2YgY2hhbmdlcyA9PT0gJ2Z1bmN0aW9uJyA/IGNoYW5nZXMoYWN0dWFsU3RhdGUpIDogY2hhbmdlcztcclxuICAgICAgICBhbGxDaGFuZ2VzID0gdGhpcy5wcm9wcy5zdGF0ZVJlZHVjZXIoYWN0dWFsU3RhdGUsIGNoYW5nZXNPYmplY3QpO1xyXG4gICAgICAgIHJldHVybiBhbGxDaGFuZ2VzO1xyXG4gICAgICB9LFxyXG4gICAgICAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vblN0YXRlQ2hhbmdlKGFsbENoYW5nZXMpO1xyXG4gICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG4gIGhhbmRsZUl0ZW1DbGljayA9IChpbmRleCkgPT4ge1xyXG4gICAgdGhpcy5pbnRlcm5hbFNldFN0YXRlKChzdGF0ZSkgPT4ge1xyXG4gICAgICBjb25zdCBjbG9zaW5nID0gc3RhdGUub3BlbkluZGV4ZXMuaW5jbHVkZXMoaW5kZXgpO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IGNsb3NpbmcgPyAnY2xvc2luZycgOiAnb3BlbmluZycsXHJcbiAgICAgICAgb3BlbkluZGV4ZXM6IGNsb3NpbmdcclxuICAgICAgICAgID8gc3RhdGUub3BlbkluZGV4ZXMuZmlsdGVyKChpKSA9PiBpICE9PSBpbmRleClcclxuICAgICAgICAgIDogWy4uLnN0YXRlLm9wZW5JbmRleGVzLCBpbmRleF0sXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICAgIGNvbnNvbGUubG9nKCdjbGlja2VkJyk7XHJcbiAgfTtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbih7XHJcbiAgICAgIG9wZW5JbmRleGVzOiB0aGlzLmdldFN0YXRlKCkub3BlbkluZGV4ZXMsXHJcbiAgICAgIGhhbmRsZUl0ZW1DbGljazogdGhpcy5oYW5kbGVJdGVtQ2xpY2ssXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IEJhc2VBY2NvcmRpb24gfTtcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XHJcblxyXG5leHBvcnQgY29uc3QgQWNjb3JkaW9uQnV0dG9uID0gKHsgY2hpbGRyZW4sIC4uLnJlc3QgfSkgPT4gKFxyXG4gIDxkaXYgc3g9e3N0eWxlcy5idXR0b25Ub2dnbGV9IHsuLi5yZXN0fT5cclxuICAgIHtjaGlsZHJlbn1cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBidXR0b25Ub2dnbGU6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGNvbG9yOiAnaGVhZGluZ19zZWNvbmRhcnknLFxyXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICBib3JkZXI6ICdub25lJyxcclxuICAgIGZvbnRTaXplOiBbMiwgbnVsbCwgM10sXHJcbiAgICBmb250V2VpZ2h0OiA1MDAsXHJcbiAgICBsZXR0ZXJTcGFjaW5nOiAtMC41LFxyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICBwYWRkaW5nTGVmdDogWyczM3B4JywgbnVsbCwgJzQ1cHgnXSxcclxuICAgIGxpbmVIZWlnaHQ6IFsxLjUsIG51bGwsIDEuOF0sXHJcbiAgICAnJiA+IHNwYW4nOiB7XHJcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICB3aWR0aDogMjAsXHJcbiAgICAgIGhlaWdodDogMjAsXHJcbiAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyMyNUNCOUUnLFxyXG4gICAgICB0b3A6IFsnMnB4JywgbnVsbCwgJzZweCddLFxyXG4gICAgICBsZWZ0OiBbMCwgbnVsbCwgJzEzcHgnXSxcclxuICAgICAgJyYub3BlbjphZnRlcic6IHtcclxuICAgICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICB9LFxyXG4gICAgICAnJjo6YmVmb3JlJzoge1xyXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcclxuICAgICAgICBoZWlnaHQ6ICcycHgnLFxyXG4gICAgICAgIHdpZHRoOiAxMCxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgdG9wOiAnNTAlJyxcclxuICAgICAgICBsZWZ0OiAnNTAlJyxcclxuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSAsIC01MCUpJyxcclxuICAgICAgfSxcclxuICAgICAgJyY6OmFmdGVyJzoge1xyXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcclxuICAgICAgICBoZWlnaHQ6IDEwLFxyXG4gICAgICAgIHdpZHRoOiAnMnB4JyxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgdG9wOiAnNTAlJyxcclxuICAgICAgICBsZWZ0OiAnNTAlJyxcclxuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSAsIC01MCUpJyxcclxuICAgICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuMjVzJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuXHJcbmNvbnN0IHZhcmlhbnRzID0ge1xyXG4gIG9wZW46IHtcclxuICAgIGhlaWdodDogJ2F1dG8nLFxyXG4gICAgbWFyZ2luVG9wOiAxMixcclxuICB9LFxyXG4gIGNsb3NlZDogeyBoZWlnaHQ6IDAsIG1hcmdpblRvcDogMCB9LFxyXG59O1xyXG5leHBvcnQgZnVuY3Rpb24gQWNjb3JkaW9uQ29udGVudHMoeyBpc09wZW4sIC4uLnByb3BzIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPG1vdGlvbi5kaXZcclxuICAgICAgaW5pdGlhbD1cImNsb3NlZFwiXHJcbiAgICAgIGFuaW1hdGU9e2lzT3BlbiA/ICdvcGVuJyA6ICdjbG9zZWQnfVxyXG4gICAgICB2YXJpYW50cz17dmFyaWFudHN9XHJcbiAgICAgIHN4PXt7XHJcbiAgICAgICAgb3ZlcmZsb3dZOiAnaGlkZGVuJyxcclxuICAgICAgICBmb250U2l6ZTogWzEsIG51bGwsIDJdLFxyXG4gICAgICAgIGxpbmVIZWlnaHQ6IFsxLjg1LCBudWxsLCBudWxsLCAxLjksIDJdLFxyXG4gICAgICAgIGNvbG9yOiAnIzM0M0Q0OCcsXHJcbiAgICAgICAgcGFkZGluZ0xlZnQ6IFsnMzNweCcsIG51bGwsICc0NXB4J10sXHJcbiAgICAgICAgJyA+IGRpdiAnOiB7XHJcbiAgICAgICAgICBwYWRkaW5nQm90dG9tOiBbMSwgMl0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfX1cclxuICAgICAgey4uLnByb3BzfVxyXG4gICAgLz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQWNjb3JkaW9uSXRlbSA9ICh7IGlzT3BlbiwgY2hpbGRyZW4sIC4uLnJlc3QgfSkgPT4gKFxyXG4gIDxkaXZcclxuICAgIGNzcz17e1xyXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICAgIHBhZGRpbmc6ICcxN3B4IDAnLFxyXG4gICAgICBib3JkZXJCb3R0b206ICcxcHggc29saWQgI0U1RUNGNCcsXHJcbiAgICAgICcmOmxhc3QtY2hpbGQnOiB7XHJcbiAgICAgICAgYm9yZGVyQm90dG9tOiAnMHB4IHNvbGlkJyxcclxuICAgICAgfSxcclxuICAgIH19XHJcbiAgICB7Li4ucmVzdH1cclxuICA+XHJcbiAgICB7Y2hpbGRyZW59XHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgcHJldmVudENsb3NlID0gKHN0YXRlLCBjaGFuZ2VzKSA9PlxyXG4gIGNoYW5nZXMudHlwZSA9PT0gJ2Nsb3NpbmcnICYmIHN0YXRlLm9wZW5JbmRleGVzLmxlbmd0aCA8IDJcclxuICAgID8geyAuLi5jaGFuZ2VzLCBvcGVuSW5kZXhlczogc3RhdGUub3BlbkluZGV4ZXMgfVxyXG4gICAgOiBjaGFuZ2VzO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNpbmdsZSA9IChzdGF0ZSwgY2hhbmdlcykgPT5cclxuICBjaGFuZ2VzLnR5cGUgPT09ICdvcGVuaW5nJ1xyXG4gICAgPyB7IC4uLmNoYW5nZXMsIG9wZW5JbmRleGVzOiBjaGFuZ2VzLm9wZW5JbmRleGVzLnNsaWNlKC0xKSB9XHJcbiAgICA6IGNoYW5nZXM7XHJcblxyXG5leHBvcnQgY29uc3QgY29tYmluZVJlZHVjZXJzID0gKC4uLnJlZHVjZXJzKSA9PiAoc3RhdGUsIGNoYW5nZXMpID0+XHJcbiAgcmVkdWNlcnMucmVkdWNlKChhY2MsIHJlZHVjZXIpID0+IHJlZHVjZXIoc3RhdGUsIGFjYyksIGNoYW5nZXMpO1xyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4LCBCb3gsIENvbnRhaW5lciwgRmxleCB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IHsgSW9Jb3NBcnJvd1JvdW5kQmFjaywgSW9Jb3NBcnJvd1JvdW5kRm9yd2FyZCB9IGZyb20gJ3JlYWN0LWljb25zL2lvJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJ1dHRvbkdyb3VwKHsgbmV4dCwgcHJldmlvdXMgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8RmxleCBzeD17eyB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxCb3ggc3g9e3N0eWxlcy5idXR0b25Hcm91cH0+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3ByZXZpb3VzfSBhcmlhLWxhYmVsPVwiUHJldmlvdXNcIj5cclxuICAgICAgICAgICAgPElvSW9zQXJyb3dSb3VuZEJhY2sgLz5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtuZXh0fSBhcmlhLWxhYmVsPVwiTmV4dFwiPlxyXG4gICAgICAgICAgICA8SW9Jb3NBcnJvd1JvdW5kRm9yd2FyZCAvPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9GbGV4PlxyXG4gICk7XHJcbn1cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGJ1dHRvbkdyb3VwOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICBtYjogLTQsXHJcbiAgICBidXR0b246IHtcclxuICAgICAgYmc6ICd0cmFuc3BhcmVudCcsXHJcbiAgICAgIGJvcmRlcjogJzBweCBzb2xpZCcsXHJcbiAgICAgIGZvbnRTaXplOiA0MCxcclxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgIHB4OiAnMnB4JyxcclxuICAgICAgY29sb3I6ICcjQkJDN0Q3JyxcclxuICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjI1cycsXHJcbiAgICAgICcmOmZvY3VzJzoge1xyXG4gICAgICAgIG91dGxpbmU6IDAsXHJcbiAgICAgIH0sXHJcbiAgICAgICcmOmhvdmVyJzoge1xyXG4gICAgICAgIGNvbG9yOiAndGV4dCcsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQm94IH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgUmNEcmF3ZXIgZnJvbSAncmMtZHJhd2VyJztcclxuXHJcbmNvbnN0IERyYXdlciA9ICh7XHJcbiAgY2xhc3NOYW1lLFxyXG4gIGNoaWxkcmVuLFxyXG4gIGNsb3NlQnV0dG9uLFxyXG4gIGNsb3NlQnV0dG9uU3R5bGUsXHJcbiAgZHJhd2VySGFuZGxlcixcclxuICB0b2dnbGVIYW5kbGVyLFxyXG4gIG9wZW4sXHJcbiAgd2lkdGgsXHJcbiAgcGxhY2VtZW50LFxyXG4gIGRyYXdlclN0eWxlLFxyXG4gIGNsb3NlQnRuU3R5bGUsXHJcbiAgLi4ucHJvcHNcclxufSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIDxSY0RyYXdlclxyXG4gICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgb25DbG9zZT17dG9nZ2xlSGFuZGxlcn1cclxuICAgICAgICBjbGFzc05hbWU9e2BkcmF3ZXIgJHtjbGFzc05hbWUgPyBjbGFzc05hbWUgOiAnJ31gLnRyaW0oKX1cclxuICAgICAgICB3aWR0aD17d2lkdGh9XHJcbiAgICAgICAgcGxhY2VtZW50PXtwbGFjZW1lbnR9XHJcbiAgICAgICAgaGFuZGxlcj17ZmFsc2V9XHJcbiAgICAgICAgbGV2ZWw9e251bGx9XHJcbiAgICAgICAgZHVyYXRpb249XCIwLjRzXCJcclxuICAgICAgICB7Li4ucHJvcHN9XHJcbiAgICAgID5cclxuICAgICAgICB7Y2xvc2VCdXR0b24gJiYgKFxyXG4gICAgICAgICAgPEJveCBhcz1cImRpdlwiIG9uQ2xpY2s9e3RvZ2dsZUhhbmRsZXJ9IHN4PXtjbG9zZUJ0blN0eWxlfT5cclxuICAgICAgICAgICAge2Nsb3NlQnV0dG9ufVxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8Qm94IHN4PXtkcmF3ZXJTdHlsZX0+e2NoaWxkcmVufTwvQm94PlxyXG4gICAgICA8L1JjRHJhd2VyPlxyXG4gICAgICA8Qm94XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiZHJhd2VyX19oYW5kbGVyXCJcclxuICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyB9fVxyXG4gICAgICAgIG9uQ2xpY2s9e3RvZ2dsZUhhbmRsZXJ9XHJcbiAgICAgID5cclxuICAgICAgICB7ZHJhd2VySGFuZGxlcn1cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gICk7XHJcbn07XHJcblxyXG5EcmF3ZXIuZGVmYXVsdFByb3BzID0ge1xyXG4gIHdpZHRoOiAnMzIwcHgnLFxyXG4gIHBsYWNlbWVudDogJ2xlZnQnLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRHJhd2VyO1xyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4LCBJbWFnZSwgQm94LCBIZWFkaW5nLCBUZXh0IH0gZnJvbSAndGhlbWUtdWknO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmVhdHVyZUNhcmRDb2x1bW4oe1xyXG4gIHNyYyxcclxuICBhbHRUZXh0ID0gJ2RlZmF1bHQgYWx0IHRleHQnLFxyXG4gIHRpdGxlLFxyXG4gIHRleHQsXHJcbn0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBzeD17c3R5bGVzLmNhcmR9PlxyXG4gICAgICA8SW1hZ2Ugc3JjPXtzcmN9IGFsdD17YWx0VGV4dH0gc3g9e3N0eWxlcy5pbWd9IC8+XHJcblxyXG4gICAgICA8Qm94IHN4PXtzdHlsZXMud3JhcHBlcn0+XHJcbiAgICAgICAgPEhlYWRpbmcgc3g9e3N0eWxlcy53cmFwcGVyLnRpdGxlfT57dGl0bGV9PC9IZWFkaW5nPlxyXG4gICAgICAgIDxUZXh0IHN4PXtzdHlsZXMud3JhcHBlci5zdWJUaXRsZX0+e3RleHR9PC9UZXh0PlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBjYXJkOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCcsXHJcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgfSxcclxuICBpbWc6IHtcclxuICAgIG14OiAnYXV0bycsXHJcbiAgICBtYjogWzMsIG51bGwsIDQsIG51bGwsIG51bGwsIDVdLFxyXG4gICAgd2lkdGg6IFsnODBweCcsICc5MHB4JywgbnVsbCwgbnVsbCwgbnVsbCwgJzEwMHB4JywgJ2F1dG8nXSxcclxuICB9LFxyXG4gIHdyYXBwZXI6IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgIGZvbnRTaXplOiBbMywgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgNF0sXHJcbiAgICAgIGNvbG9yOiAnaGVhZGluZ19zZWNvbmRhcnknLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAxLjQsXHJcbiAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICAgICAgbWI6IFsyLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAzXSxcclxuICAgIH0sXHJcblxyXG4gICAgc3ViVGl0bGU6IHtcclxuICAgICAgZm9udFNpemU6IDEsXHJcbiAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcclxuICAgICAgbGluZUhlaWdodDogWzEuODUsIG51bGwsIG51bGwsIDEuOSwgMl0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3gsIEltYWdlLCBCb3gsIEhlYWRpbmcsIFRleHQgfSBmcm9tICd0aGVtZS11aSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGZWF0dXJlQ2FyZCh7XHJcbiAgc3JjLFxyXG4gIGFsdFRleHQgPSAnZGVmYXVsdCBhbHQgdGV4dCcsXHJcbiAgdGl0bGUsXHJcbiAgdGV4dCxcclxufSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IHN4PXtzdHlsZXMuY2FyZH0+XHJcbiAgICAgIDxJbWFnZSBzcmM9e3NyY30gYWx0PXthbHRUZXh0fSBzeD17c3R5bGVzLmltZ30gLz5cclxuXHJcbiAgICAgIDxCb3ggc3g9e3N0eWxlcy53cmFwcGVyfT5cclxuICAgICAgICA8SGVhZGluZyBzeD17c3R5bGVzLndyYXBwZXIudGl0bGV9Pnt0aXRsZX08L0hlYWRpbmc+XHJcbiAgICAgICAgPFRleHQgc3g9e3N0eWxlcy53cmFwcGVyLnN1YlRpdGxlfT57dGV4dH08L1RleHQ+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGNhcmQ6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdmbGV4LXN0YXJ0JyxcclxuICB9LFxyXG5cclxuICBpbWc6IHtcclxuICAgIHdpZHRoOiBbJzYwcHgnLCBudWxsLCBudWxsLCBudWxsLCAnNTVweCcsICc3MHB4JywgbnVsbCwgJzgwcHgnXSxcclxuICAgIGhlaWdodDogJ2F1dG8nLFxyXG4gICAgZmxleFNocmluazogMCxcclxuICAgIG1yOiBbMywgNCwgbnVsbCwgbnVsbCwgMywgNCwgbnVsbCwgNV0sXHJcbiAgfSxcclxuICB3cmFwcGVyOiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICBtdDogJy01cHgnLFxyXG4gICAgdGl0bGU6IHtcclxuICAgICAgZm9udFNpemU6IFszLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCA0XSxcclxuICAgICAgY29sb3I6ICdoZWFkaW5nX3NlY29uZGFyeScsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IDEuNCxcclxuICAgICAgZm9udFdlaWdodDogNzAwLFxyXG4gICAgICBtYjogWzIsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDNdLFxyXG4gICAgICBtdDogJzJweCcsXHJcbiAgICB9LFxyXG4gICAgc3ViVGl0bGU6IHtcclxuICAgICAgZm9udFNpemU6IDEsXHJcbiAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcclxuICAgICAgbGluZUhlaWdodDogWzEuODUsIG51bGwsIDJdLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCBbXHJcbiAge1xyXG4gICAgaGVhZGVyOiAnQWJvdXQgVXMnLFxyXG4gICAgaXRlbXM6IFtcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICcvJyxcclxuICAgICAgICBsYWJlbDogJ1N1cHBvcnQgQ2VudGVyJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICcvJyxcclxuICAgICAgICBsYWJlbDogJ0N1c3RvbWVyIFN1cHBvcnQnLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJy8nLFxyXG4gICAgICAgIGxhYmVsOiAnQWJvdXQgVXMnLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJy8nLFxyXG4gICAgICAgIGxhYmVsOiAnQ29weXJpZ2h0JyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICcvJyxcclxuICAgICAgICBsYWJlbDogJ1BvcHVsYXIgQ2FtcGFpZ24nLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIGhlYWRlcjogJ091ciBJbmZvcm1hdGlvbicsXHJcbiAgICBpdGVtczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJy8nLFxyXG4gICAgICAgIGxhYmVsOiAnUmV0dXJuIFBvbGljeSAnLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJy8nLFxyXG4gICAgICAgIGxhYmVsOiAnUHJpdmFjeSBQb2xpY3knLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJy8nLFxyXG4gICAgICAgIGxhYmVsOiAnVGVybXMgJiBDb25kaXRpb25zJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICcvJyxcclxuICAgICAgICBsYWJlbDogJ1NpdGUgTWFwJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICcvJyxcclxuICAgICAgICBsYWJlbDogJ1N0b3JlIEhvdXJzJyxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBoZWFkZXI6ICdNeSBBY2NvdW50JyxcclxuICAgIGl0ZW1zOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnLycsXHJcbiAgICAgICAgbGFiZWw6ICdQcmVzcyBpbnF1aXJpZXMnLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJy8nLFxyXG4gICAgICAgIGxhYmVsOiAnU29jaWFsIG1lZGlhICcsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnLycsXHJcbiAgICAgICAgbGFiZWw6ICdkaXJlY3RvcmllcycsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnLycsXHJcbiAgICAgICAgbGFiZWw6ICdJbWFnZXMgJiBCLXJvbGwnLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJy8nLFxyXG4gICAgICAgIGxhYmVsOiAnUGVybWlzc2lvbnMnLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIGhlYWRlcjogJ1BvbGljeScsXHJcbiAgICBpdGVtczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJy8nLFxyXG4gICAgICAgIGxhYmVsOiAnQXBwbGljYXRpb24gc2VjdXJpdHknLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJy8nLFxyXG4gICAgICAgIGxhYmVsOiAnU29mdHdhcmUgcHJpbmNpcGxlcycsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnLycsXHJcbiAgICAgICAgbGFiZWw6ICdVbndhbnRlZCBzb2Z0d2FyZSBwb2xpY3knLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJy8nLFxyXG4gICAgICAgIGxhYmVsOiAnUmVzcG9uc2libGUgc3VwcGx5IGNoYWluJyxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuXTtcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCwgSGVhZGluZywgQm94LCBDb250YWluZXIsIFRleHQgfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdjb21wb25lbnRzL2xpbmsnO1xyXG5pbXBvcnQgbWVudUl0ZW1zIGZyb20gJy4vZm9vdGVyLmRhdGEnO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb290ZXIoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxmb290ZXIgc3g9e3N0eWxlcy5mb290ZXJ9PlxyXG4gICAgICA8Q29udGFpbmVyIHN4PXtzdHlsZXMuZm9vdGVyLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgPEJveCBzeD17c3R5bGVzLmZvb3Rlci5mb290ZXJUb3BBcmVhfT5cclxuICAgICAgICAgIHttZW51SXRlbXMubWFwKCh7IGhlYWRlciwgaXRlbXMgfSwgaSkgPT4gKFxyXG4gICAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMuZm9vdGVyLm1lbnVzfSBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgIDxIZWFkaW5nIHN4PXtzdHlsZXMuZm9vdGVyLmhlYWRpbmd9PntoZWFkZXJ9PC9IZWFkaW5nPlxyXG4gICAgICAgICAgICAgIDxuYXY+XHJcbiAgICAgICAgICAgICAgICB7aXRlbXMubWFwKCh7IHBhdGgsIGxhYmVsIH0sIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICBwYXRoPXtwYXRofVxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17bGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgc3g9e3N0eWxlcy5mb290ZXIubGlua31cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPFRleHQgc3g9e3N0eWxlcy5mb290ZXIuY29weXJpZ2h0fT5cclxuICAgICAgICBBbGwgcmlnaHQgcmVzZXJ2ZWQgLSBEZXNpZ24gJiBEZXZlbG9wZWQgYnlcclxuICAgICAgICA8TGluayBwYXRoPVwiaHR0cHM6Ly9yZWRxLmlvL1wiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgUmVkUSwgSW5jXHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L1RleHQ+XHJcbiAgICA8L2Zvb3Rlcj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgZm9vdGVyOiB7XHJcbiAgICBjb250YWluZXI6IHtcclxuICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgYWxpZ25JdGVtczogJ3N0cmV0Y2gnLFxyXG4gICAgfSxcclxuICAgIGZvb3RlclRvcEFyZWE6IHtcclxuICAgICAgYm9yZGVyVG9wOiAnMXB4IHNvbGlkJyxcclxuICAgICAgYm9yZGVyVG9wQ29sb3I6ICdib3JkZXJfY29sb3InLFxyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGZsZXhXcmFwOiAnd3JhcCcsXHJcbiAgICAgIHB0OiBbNywgbnVsbCwgOF0sXHJcbiAgICAgIHBiOiBbJzEwcHgnLCBudWxsLCBudWxsLCAnMjBweCddLFxyXG4gICAgICBweDogWzAsIG51bGwsIG51bGwsIG51bGwsIDRdLFxyXG4gICAgfSxcclxuICAgIG1lbnVzOiB7XHJcbiAgICAgIHdpZHRoOiBbJzUwJScsIG51bGwsIG51bGwsICcyNSUnXSxcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAgbWI6IFsnNDBweCcsIG51bGwsIG51bGwsICc2MHB4J10sXHJcbiAgICB9LFxyXG5cclxuICAgIGhlYWRpbmc6IHtcclxuICAgICAgZm9udFNpemU6IFszLCBudWxsLCBudWxsLCA0XSxcclxuICAgICAgY29sb3I6ICd0ZXh0X3NlY29uZGFyeScsXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICc1MDAnLFxyXG4gICAgICBtYjogWzMsIDQsIDUsIG51bGwsIDZdLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAnMS4zNScsXHJcbiAgICB9LFxyXG5cclxuICAgIGxpbms6IHtcclxuICAgICAgZm9udFNpemU6IFsnMTRweCcsIG51bGwsIDFdLFxyXG4gICAgICBjb2xvcjogJ3RleHQnLFxyXG4gICAgICBmb250V2VpZ2h0OiAnYm9keScsXHJcbiAgICAgIG1iOiAyLFxyXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjM1cycsXHJcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IFsxLjUsIG51bGwsIG51bGwsIDEuNiwgMS44XSxcclxuICAgICAgJzpob3Zlcic6IHtcclxuICAgICAgICBjb2xvcjogJ3ByaW1hcnknLFxyXG4gICAgICB9LFxyXG4gICAgICAnOmxhc3QtY2hpbGQnOiB7XHJcbiAgICAgICAgbWI6ICcwcHgnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIGNvcHlyaWdodDoge1xyXG4gICAgICBmb250U2l6ZTogWycxNHB4JywgbnVsbCwgMV0sXHJcbiAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgIHA6IFsnMjBweCAyMHB4J10sXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNGQ0ZERkUnLFxyXG4gICAgICBjb2xvcjogJ3RleHQnLFxyXG4gICAgICBhOiB7XHJcbiAgICAgICAgdGV4dERlY29yYXRpb246ICdub25lJyxcclxuICAgICAgICBjb2xvcjogJ2luaGVyaXQnLFxyXG4gICAgICAgIHBsOiAxLFxyXG4gICAgICAgIHRyYW5zaXRpb246ICdhbGwgMC4yNXMnLFxyXG4gICAgICAgICcmOmhvdmVyJzoge1xyXG4gICAgICAgICAgY29sb3I6ICdwcmltYXJ5JyxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCBbXHJcbiAge1xyXG4gICAgcGF0aDogJ2hvbWUnLFxyXG4gICAgbGFiZWw6ICdIb21lJyxcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICdmZWF0dXJlJyxcclxuICAgIGxhYmVsOiAnRmVhdHVyZXMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJ3Rlc3RpbW9uaWFsJyxcclxuICAgIGxhYmVsOiAnVGVzdGltb25pYWwnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJ3ByaWNpbmcnLFxyXG4gICAgbGFiZWw6ICdQcmljaW5nJyxcclxuICB9LFxyXG5dO1xyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4LCBDb250YWluZXIsIEZsZXgsIEJ1dHRvbiB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IHsga2V5ZnJhbWVzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1zY3JvbGwnO1xyXG5pbXBvcnQgTG9nbyBmcm9tICdjb21wb25lbnRzL2xvZ28nO1xyXG5pbXBvcnQgTG9nb0RhcmsgZnJvbSAnYXNzZXRzL2xvZ28tZGFyay5wbmcnO1xyXG5pbXBvcnQgTG9nb1doaXRlIGZyb20gJ2Fzc2V0cy9sb2dvLnBuZyc7XHJcbmltcG9ydCB7IERyYXdlclByb3ZpZGVyIH0gZnJvbSAnLi4vLi4vY29udGV4dHMvZHJhd2VyL2RyYXdlci5wcm92aWRlcic7XHJcbmltcG9ydCBNb2JpbGVEcmF3ZXIgZnJvbSAnLi9tb2JpbGUtZHJhd2VyJztcclxuaW1wb3J0IG1lbnVJdGVtcyBmcm9tICcuL2hlYWRlci5kYXRhJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcih7IGNsYXNzTmFtZSB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxEcmF3ZXJQcm92aWRlcj5cclxuICAgICAgPGhlYWRlciBzeD17c3R5bGVzLmhlYWRlcn0gY2xhc3NOYW1lPXtjbGFzc05hbWV9IGlkPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgPENvbnRhaW5lciBzeD17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICA8TG9nbyBzcmM9e2NsYXNzTmFtZSA9PT0gJ3N0aWNreScgPyBMb2dvRGFyayA6IExvZ29XaGl0ZX0gLz5cclxuICAgICAgICAgIDxoMSBzdHlsZT17e2ZvbnRTaXplOicxcmVtJ319PlRoZSBXYXkgb2YgU3VjY2VzczwvaDE+XHJcbiAgICAgICAgICA8RmxleCBhcz1cIm5hdlwiIHN4PXtzdHlsZXMubmF2fT5cclxuICAgICAgICAgICAge21lbnVJdGVtcy5tYXAoKHsgcGF0aCwgbGFiZWwgfSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICBhY3RpdmVDbGFzcz1cImFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICB0bz17cGF0aH1cclxuICAgICAgICAgICAgICAgIHNweT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIHNtb290aD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIG9mZnNldD17LTcwfVxyXG4gICAgICAgICAgICAgICAgZHVyYXRpb249ezUwMH1cclxuICAgICAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7bGFiZWx9XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvRmxleD5cclxuXHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImRvbmF0ZV9fYnRuXCJcclxuICAgICAgICAgICAgdmFyaWFudD1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJHZXQgU3RhcnRlZFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEdldCBTdGFydGVkXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuXHJcbiAgICAgICAgICA8TW9iaWxlRHJhd2VyIC8+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDwvaGVhZGVyPlxyXG4gICAgPC9EcmF3ZXJQcm92aWRlcj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBwb3NpdGlvbkFuaW0gPSBrZXlmcmFtZXNgXHJcbiAgZnJvbSB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgaGVhZGVyOiB7XHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxyXG4gICAgcHk6IDQsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICB0b3A6IDAsXHJcbiAgICBsZWZ0OiAwLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgdHJhbnNpdGlvbjogJ2FsbCAwLjVzIGVhc2UnLFxyXG4gICAgYW5pbWF0aW9uOiBgJHtwb3NpdGlvbkFuaW19IDAuNHMgZWFzZWAsXHJcbiAgICAnLmRvbmF0ZV9fYnRuJzoge1xyXG4gICAgICBmbGV4U2hyaW5rOiAwLFxyXG4gICAgICBtcjogWzE1LCAyMCwgbnVsbCwgbnVsbCwgMF0sXHJcbiAgICAgIG1sOiBbJ2F1dG8nLCBudWxsLCBudWxsLCBudWxsLCAwXSxcclxuICAgIH0sXHJcbiAgICAnJi5zdGlja3knOiB7XHJcbiAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdiYWNrZ3JvdW5kJyxcclxuICAgICAgY29sb3I6ICcjMDAwMDAwJyxcclxuICAgICAgYm94U2hhZG93OiAnMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNiknLFxyXG4gICAgICBweTogMyxcclxuICAgICAgJ25ldiA+IGEnOiB7XHJcbiAgICAgICAgY29sb3I6ICd0ZXh0JyxcclxuICAgICAgfSxcclxuICAgICAgJy5kb25hdGVfX2J0bic6IHtcclxuICAgICAgICBib3JkZXJDb2xvcjogJ3ByaW1hcnknLFxyXG4gICAgICAgIGNvbG9yOiAncHJpbWFyeScsXHJcbiAgICAgICAgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgICBib3hTaGFkb3c6ICdyZ2JhKDMxLCA2MiwgMTE4LCAwLjU3KSAwcHggOXB4IDIwcHggLTVweCcsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdwcmltYXJ5JyxcclxuICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgY29udGFpbmVyOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXHJcbiAgfSxcclxuICBuYXY6IHtcclxuICAgIG14OiAnYXV0bycsXHJcbiAgICBkaXNwbGF5OiAnbm9uZScsXHJcbiAgICAnQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSc6IHtcclxuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgIH0sXHJcbiAgICBhOiB7XHJcbiAgICAgIGZvbnRTaXplOiAnMTZweCcsXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICc0MDAnLFxyXG4gICAgICBweDogMjUsXHJcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAnMS4yJyxcclxuICAgICAgJyYuYWN0aXZlJzoge1xyXG4gICAgICAgIGNvbG9yOiAnc2Vjb25kYXJ5JyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJveCB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IHsgU2Nyb2xsYmFycyB9IGZyb20gJ3JlYWN0LWN1c3RvbS1zY3JvbGxiYXJzJztcclxuaW1wb3J0IERyYXdlciBmcm9tICdjb21wb25lbnRzL2RyYXdlcic7XHJcbmltcG9ydCB7IERyYXdlckNvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0cy9kcmF3ZXIvZHJhd2VyLmNvbnRleHQnO1xyXG5pbXBvcnQgeyBJb01kQ2xvc2UsIElvTWRNZW51IH0gZnJvbSAncmVhY3QtaWNvbnMvaW8nO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtc2Nyb2xsJztcclxuaW1wb3J0IHtcclxuICBGYUZhY2Vib29rRixcclxuICBGYVR3aXR0ZXIsXHJcbiAgRmFHaXRodWJBbHQsXHJcbiAgRmFEcmliYmJsZSxcclxufSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XHJcbmltcG9ydCBtZW51SXRlbXMgZnJvbSAnLi9oZWFkZXIuZGF0YSc7XHJcblxyXG5jb25zdCBzb2NpYWwgPSBbXHJcbiAge1xyXG4gICAgcGF0aDogJy8nLFxyXG4gICAgaWNvbjogPEZhRmFjZWJvb2tGIC8+LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJy8nLFxyXG4gICAgaWNvbjogPEZhVHdpdHRlciAvPixcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICcvJyxcclxuICAgIGljb246IDxGYUdpdGh1YkFsdCAvPixcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICcvJyxcclxuICAgIGljb246IDxGYURyaWJiYmxlIC8+LFxyXG4gIH0sXHJcbl07XHJcblxyXG5jb25zdCBNb2JpbGVEcmF3ZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBzdGF0ZSwgZGlzcGF0Y2ggfSA9IHVzZUNvbnRleHQoRHJhd2VyQ29udGV4dCk7XHJcblxyXG4gIC8vIFRvZ2dsZSBkcmF3ZXJcclxuICBjb25zdCB0b2dnbGVIYW5kbGVyID0gUmVhY3QudXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiAnVE9HR0xFJyxcclxuICAgIH0pO1xyXG4gIH0sIFtkaXNwYXRjaF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPERyYXdlclxyXG4gICAgICB3aWR0aD1cIjMyMHB4XCJcclxuICAgICAgZHJhd2VySGFuZGxlcj17XHJcbiAgICAgICAgPEJveCBzeD17c3R5bGVzLmhhbmRsZXJ9PlxyXG4gICAgICAgICAgPElvTWRNZW51IHNpemU9XCIyNnB4XCIgLz5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgfVxyXG4gICAgICBvcGVuPXtzdGF0ZS5pc09wZW59XHJcbiAgICAgIHRvZ2dsZUhhbmRsZXI9e3RvZ2dsZUhhbmRsZXJ9XHJcbiAgICAgIGNsb3NlQnV0dG9uPXs8SW9NZENsb3NlIHNpemU9XCIyNHB4XCIgY29sb3I9XCIjMDAwMDAwXCIgLz59XHJcbiAgICAgIGRyYXdlclN0eWxlPXtzdHlsZXMuZHJhd2VyfVxyXG4gICAgICBjbG9zZUJ0blN0eWxlPXtzdHlsZXMuY2xvc2V9XHJcbiAgICA+XHJcbiAgICAgIDxTY3JvbGxiYXJzIGF1dG9IaWRlPlxyXG4gICAgICAgIDxCb3ggc3g9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5tZW51fT5cclxuICAgICAgICAgICAge21lbnVJdGVtcy5tYXAoKHsgcGF0aCwgbGFiZWwgfSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICBhY3RpdmVDbGFzcz1cImFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICB0bz17cGF0aH1cclxuICAgICAgICAgICAgICAgIHNweT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIHNtb290aD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIG9mZnNldD17LTcwfVxyXG4gICAgICAgICAgICAgICAgZHVyYXRpb249ezUwMH1cclxuICAgICAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7bGFiZWx9XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvQm94PlxyXG5cclxuICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5tZW51Rm9vdGVyfT5cclxuICAgICAgICAgICAgPEJveCBzeD17c3R5bGVzLnNvY2lhbH0+XHJcbiAgICAgICAgICAgICAge3NvY2lhbC5tYXAoKHsgcGF0aCwgaWNvbiB9LCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8Qm94IGFzPVwic3BhblwiIGtleT17aX0gc3g9e3N0eWxlcy5zb2NpYWwuaWNvbn0+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtwYXRofT57aWNvbn08L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9TY3JvbGxiYXJzPlxyXG4gICAgPC9EcmF3ZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBoYW5kbGVyOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgIGZsZXhTaHJpbms6ICcwJyxcclxuICAgIHdpZHRoOiAnMjZweCcsXHJcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICdAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpJzoge1xyXG4gICAgICBkaXNwbGF5OiAnbm9uZScsXHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIGRyYXdlcjoge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnZGFyaycsXHJcbiAgfSxcclxuXHJcbiAgY2xvc2U6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICB0b3A6ICcyNXB4JyxcclxuICAgIHJpZ2h0OiAnMzBweCcsXHJcbiAgICB6SW5kZXg6ICcxJyxcclxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gIH0sXHJcblxyXG4gIGNvbnRlbnQ6IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgcHQ6ICcxMDBweCcsXHJcbiAgICBwYjogJzQwcHgnLFxyXG4gICAgcHg6ICczMHB4JyxcclxuICB9LFxyXG5cclxuICBtZW51OiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICBhOiB7XHJcbiAgICAgIGZvbnRTaXplOiAnMTZweCcsXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICc1MDAnLFxyXG4gICAgICBjb2xvcjogJ3RleHRfd2hpdGUnLFxyXG4gICAgICBweTogJzE1cHgnLFxyXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICAgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNlOGU1ZTUnLFxyXG4gICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuMjVzJyxcclxuICAgICAgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgY29sb3I6ICdzZWNvbmRhcnknLFxyXG4gICAgICB9LFxyXG4gICAgICAnJi5hY3RpdmUnOiB7XHJcbiAgICAgICAgY29sb3I6ICdzZWNvbmRhcnknLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICBtZW51Rm9vdGVyOiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIG10OiAnYXV0bycsXHJcbiAgfSxcclxuXHJcbiAgc29jaWFsOiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcblxyXG4gICAgaWNvbjoge1xyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgIGNvbG9yOiAndGV4dCcsXHJcbiAgICAgIGZvbnRTaXplOiAxNCxcclxuICAgICAgbXI6ICcxNXB4JyxcclxuICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjI1cycsXHJcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICAnOmxhc3QtY2hpbGQnOiB7XHJcbiAgICAgICAgbXI6ICcwJyxcclxuICAgICAgfSxcclxuICAgICAgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgY29sb3I6ICdzZWNvbmRhcnknLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICBidXR0b246IHtcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgZm9udFNpemU6ICcxNHB4JyxcclxuICAgIGZ3OiAnNzAwJyxcclxuICAgIGhlaWdodDogJzQ1cHgnLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcclxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgcHk6ICcwJyxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9iaWxlRHJhd2VyO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBJbWFnZSBhcyBJbWcgfSBmcm9tICd0aGVtZS11aSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbWFnZSh7IHNyYywgLi4ucmVzdCB9KSB7XHJcbiAgcmV0dXJuIDxJbWcgc3JjPXtzcmN9IHsuLi5yZXN0fSAvPjtcclxufVxyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4IH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTdGlja3kgZnJvbSAncmVhY3Qtc3RpY2t5bm9kZSc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9oZWFkZXIvaGVhZGVyJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuL2Zvb3Rlci9mb290ZXInO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQoeyBjaGlsZHJlbiB9KSB7XHJcbiAgY29uc3QgW2lzU3RpY2t5LCBzZXRJc1N0aWNreV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgaGFuZGxlU3RhdGVDaGFuZ2UgPSAoc3RhdHVzKSA9PiB7XHJcbiAgICBpZiAoc3RhdHVzLnN0YXR1cyA9PT0gU3RpY2t5LlNUQVRVU19GSVhFRCkge1xyXG4gICAgICBzZXRJc1N0aWNreSh0cnVlKTtcclxuICAgIH0gZWxzZSBpZiAoc3RhdHVzLnN0YXR1cyA9PT0gU3RpY2t5LlNUQVRVU19PUklHSU5BTCkge1xyXG4gICAgICBzZXRJc1N0aWNreShmYWxzZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICA8U3RpY2t5IGlubmVyWj17MTAwMX0gdG9wPXswfSBvblN0YXRlQ2hhbmdlPXtoYW5kbGVTdGF0ZUNoYW5nZX0+XHJcbiAgICAgICAgPEhlYWRlciBjbGFzc05hbWU9e2Ake2lzU3RpY2t5ID8gJ3N0aWNreScgOiAndW5TdGlja3knfWB9IC8+XHJcbiAgICAgIDwvU3RpY2t5PlxyXG4gICAgICA8bWFpblxyXG4gICAgICAgIHN4PXt7XHJcbiAgICAgICAgICB2YXJpYW50OiAnbGF5b3V0Lm1haW4nLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDwvbWFpbj5cclxuICAgICAgPEZvb3RlciAvPlxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICApO1xyXG59XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3gsIE5hdkxpbmsgYXMgTWVudUxpbmssIExpbmsgYXMgQSB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IE5leHRMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmV4cG9ydCBmdW5jdGlvbiBOYXZMaW5rKHsgcGF0aCwgbGFiZWwsIGNoaWxkcmVuLCAuLi5yZXN0IH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPE5leHRMaW5rIGhyZWY9e3BhdGh9PlxyXG4gICAgICA8TWVudUxpbmsgey4uLnJlc3R9PntjaGlsZHJlbiA/IGNoaWxkcmVuIDogbGFiZWx9PC9NZW51TGluaz5cclxuICAgIDwvTmV4dExpbms+XHJcbiAgKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gTGluayh7IHBhdGgsIGxhYmVsLCBjaGlsZHJlbiwgLi4ucmVzdCB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxBIHsuLi5yZXN0fSBocmVmPXtwYXRofT5cclxuICAgICAge2NoaWxkcmVuID8gY2hpbGRyZW4gOiBsYWJlbH1cclxuICAgIDwvQT5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEZsZXgsIEJveCwgSWNvbkJ1dHRvbiB9IGZyb20gJ3RoZW1lLXVpJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExpc3QoeyBpdGVtcyA9IFtdLCBwYXJlbnRTdHlsZSwgY2hpbGRTdHlsZSB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3hcclxuICAgICAgYXM9XCJ1bFwiXHJcbiAgICAgIHN4PXt7XHJcbiAgICAgICAgbGlzdFN0eWxlVHlwZTogJ25vbmUnLFxyXG4gICAgICAgIG1hcmdpbjogMCxcclxuICAgICAgICBwYWRkaW5nOiAwLFxyXG4gICAgICAgIC4uLnBhcmVudFN0eWxlLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICB7aXRlbXMubWFwKCh7IGljb24sIHRleHQsIGlzQXZhaWxhYmxlIH0sIGkpID0+IChcclxuICAgICAgICA8RmxleFxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtpc0F2YWlsYWJsZSA/ICdvcGVuJyA6ICdjbG9zZWQnfVxyXG4gICAgICAgICAgYXM9XCJsaVwiXHJcbiAgICAgICAgICBzeD17eyAuLi5jaGlsZFN0eWxlIH19XHJcbiAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEljb25CdXR0b24gc3g9e3N0eWxlcy5saXN0SWNvbn0gYXJpYS1sYWJlbD1cImxpc3QgaWNvblwiPlxyXG4gICAgICAgICAgICB7aWNvbn1cclxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIHt0ZXh0fVxyXG4gICAgICAgIDwvRmxleD5cclxuICAgICAgKSl9XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59XHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBsaXN0SWNvbjoge1xyXG4gICAgd2lkdGg6IFsyNSwgJzM1cHgnXSxcclxuICAgIGhlaWdodDogJ2F1dG8nLFxyXG4gICAgY29sb3I6ICdzZWNvbmRhcnknLFxyXG4gICAgcGFkZGluZzogMCxcclxuICAgIGZvbnRTaXplOiBbMiwgNV0sXHJcbiAgICBtYXJnaW5MZWZ0OiAnLTFweCcsXHJcbiAgICBmbGV4U2hyaW5rOiAwLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LXN0YXJ0JyxcclxuICAgIG1hcmdpblRvcDogWzEsICcycHgnXSxcclxuICB9LFxyXG59O1xyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4LCBJbWFnZSB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ2NvbXBvbmVudHMvbGluayc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dvKHsgc3JjLCAuLi5yZXN0IH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPExpbmtcclxuICAgICAgcGF0aD1cIi9cIlxyXG4gICAgICBzeD17e1xyXG4gICAgICAgIHZhcmlhbnQ6ICdsaW5rcy5sb2dvJyxcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgICAgbXI6IDE1LFxyXG4gICAgICB9fVxyXG4gICAgICB7Li4ucmVzdH1cclxuICAgID5cclxuICAgICAgPEltYWdlIHNyYz17c3JjfSBhbHQ9XCJzdGFydHVwIGxhbmRpbmcgbG9nb1wiIHN0eWxlPXt7bWF4V2lkdGg6JzRyZW0nfX0gLz5cclxuICAgIFxyXG4gICAgPC9MaW5rPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgQm94LCBDYXJkLCBUZXh0LCBGbGV4LCBIZWFkaW5nLCBCdXR0b24gfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaXN0IGZyb20gJy4vbGlzdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcmljZUNhcmQoe1xyXG4gIGRhdGE6IHtcclxuICAgIGhlYWRlcixcclxuICAgIG5hbWUsXHJcbiAgICBkZXNjcmlwdGlvbixcclxuICAgIHByaWNlV2l0aFVuaXQsXHJcbiAgICBidXR0b25UZXh0ID0gJ1N0YXJ0IEZyZWUgVHJpYWwnLFxyXG4gICAgcG9pbnRzLFxyXG4gIH0sXHJcbn0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPENhcmQgY2xhc3NOYW1lPXtoZWFkZXIgPyAnYWN0aXZlJyA6IG51bGx9IHN4PXtzdHlsZXMucHJpY2luZ0JveH0+XHJcbiAgICAgIHtoZWFkZXIgJiYgPFRleHQgc3g9e3N0eWxlcy5oZWFkZXJ9PntoZWFkZXJ9PC9UZXh0Pn1cclxuICAgICAgPEJveD5cclxuICAgICAgICA8RmxleCBzeD17c3R5bGVzLnByaWNpbmdIZWFkZXJ9PlxyXG4gICAgICAgICAgPEJveD5cclxuICAgICAgICAgICAgPEhlYWRpbmcgY2xhc3NOYW1lPVwicGFja2FnZV9fbmFtZVwiIHN4PXtzdHlsZXMuaGVhZGluZ30+XHJcbiAgICAgICAgICAgICAge25hbWV9XHJcbiAgICAgICAgICAgIDwvSGVhZGluZz5cclxuICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICBhcz1cInBcIlxyXG4gICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiBoZWFkZXIgPyAxIDogMC43LFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IGhlYWRlciA/ICd0ZXh0JyA6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogWzEsIDJdLFxyXG4gICAgICAgICAgICAgICAgbGluZUhlaWdodDogMS4zLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7ZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAge2hlYWRlciAmJiAoXHJcbiAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT1cInBhY2thZ2VfX3ByaWNlXCIgc3g9e3N0eWxlcy5wcmljZX0+XHJcbiAgICAgICAgICAgICAgPHNwYW4+U3RhcnRpbmcgZnJvbTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaWNlXCI+XHJcbiAgICAgICAgICAgICAgICB7cHJpY2VXaXRoVW5pdH1cclxuICAgICAgICAgICAgICAgIDxzdWI+bW88L3N1Yj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgPExpc3QgaXRlbXM9e3BvaW50c30gY2hpbGRTdHlsZT17c3R5bGVzLmxpc3RJdGVtfSAvPlxyXG4gICAgICAgIDxCb3hcclxuICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgIG10OiBbJzQwcHgnLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAnNzBweCddLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIHZhcmlhbnQ9e2hlYWRlciA/ICdwcmltYXJ5JyA6ICd3aGl0ZUJ1dHRvbid9XHJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9e2J1dHRvblRleHR9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtidXR0b25UZXh0fVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9DYXJkPlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBwcmljaW5nQm94OiB7XHJcbiAgICBmbGV4OiBbXHJcbiAgICAgICcwIDEgMTAwJScsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgICcwIDEgNTAlJyxcclxuICAgICAgJzAgMSA0NSUnLFxyXG4gICAgICAnMCAxIDQwJScsXHJcbiAgICAgICcwIDEgMzguNSUnLFxyXG4gICAgXSxcclxuICAgIGJhY2tncm91bmQ6ICcjMkY1MzkyJyxcclxuICAgIGJvcmRlclJhZGl1czogMTAsXHJcbiAgICBtbDogWzAsIG51bGwsIG51bGwsIDVdLFxyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICBtdDogWyc0MHB4JywgbnVsbCwgbnVsbCwgMF0sXHJcbiAgICBwOiBbXHJcbiAgICAgICc1MHB4IDE1cHggNTBweCcsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgICc2MnB4IDI1cHggNTBweCAyNXB4JyxcclxuICAgICAgbnVsbCxcclxuICAgICAgJzYycHggNzBweCA1MHB4IDQwcHgnLFxyXG4gICAgXSxcclxuICAgICdAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MjBweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSc6IHtcclxuICAgICAgbWF4V2lkdGg6ICczODBweCcsXHJcbiAgICB9LFxyXG4gICAgJyY6Zmlyc3Qtb2YtdHlwZSc6IHtcclxuICAgICAgbWw6IDAsXHJcbiAgICAgIG10OiAwLFxyXG4gICAgfSxcclxuICAgICcmLmFjdGl2ZSc6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAnLnBhY2thZ2VfX25hbWUnOiB7XHJcbiAgICAgICAgY29sb3I6ICdoZWFkaW5nX3NlY29uZGFyeScsXHJcbiAgICAgIH0sXHJcbiAgICAgICcucGFja2FnZV9fcHJpY2UgPiBzcGFuJzoge1xyXG4gICAgICAgIGNvbG9yOiAndGV4dCcsXHJcbiAgICAgIH0sXHJcbiAgICAgICcub3Blbic6IHtcclxuICAgICAgICBjb2xvcjogJ3RleHQnLFxyXG4gICAgICB9LFxyXG4gICAgICAnLmNsb3NlZCc6IHtcclxuICAgICAgICBjb2xvcjogJ3RleHQnLFxyXG4gICAgICAgIG9wYWNpdHk6IDAuNixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBoZWFkZXI6IHtcclxuICAgIGhlaWdodDogWycyOHB4JywgbnVsbCwgbnVsbCwgbnVsbCwgJzMycHgnXSxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyNFRjlFNDgnLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcclxuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICAgIGZvbnRTaXplOiAnMTRweCcsXHJcbiAgICBsaW5lSGVpZ2h0OiAnMThweCcsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgIGNvbG9yOiAnI0ZGRkZGRicsXHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIHRvcDogWzMsIG51bGwsIDRdLFxyXG4gICAgbGV0dGVyU3BhY2luZzogJy0uMTRweCcsXHJcbiAgICBweDogJzEwcHgnLFxyXG4gIH0sXHJcblxyXG4gIGhlYWRpbmc6IHtcclxuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICAgIGZvbnRTaXplOiBbNCwgbnVsbCwgbnVsbCwgbnVsbCwgNV0sXHJcbiAgICBsaW5lSGVpZ2h0OiAnMjNweCcsXHJcbiAgICBjb2xvcjogJyNmZmZmZmYnLFxyXG4gICAgbWFyZ2luQm90dG9tOiBbMSwgbnVsbCwgJzEycHgnXSxcclxuICB9LFxyXG4gIHByaWNpbmdIZWFkZXI6IHtcclxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXHJcbiAgICBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCcsXHJcbiAgICBtYjogWyczNXB4JywgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgJzUwcHgnXSxcclxuICB9LFxyXG4gIHByaWNlOiB7XHJcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgICBmb250U2l6ZTogWzQsIG51bGwsIDUsIG51bGwsICcyNnB4J10sXHJcbiAgICBsaW5lSGVpZ2h0OiAxLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgbGV0dGVyU3BhY2luZzogJy0wLjVweCcsXHJcbiAgICBjb2xvcjogJyMwRjIxMzcnLFxyXG4gICAgbWFyZ2luQm90dG9tOiAwLFxyXG4gICAgZmxleFdyYXA6ICd3cmFwJyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgdGV4dEFsaWduOiAncmlnaHQnLFxyXG4gICAgbXQ6IFsnLTNweCcsIG51bGwsICcycHgnXSxcclxuICAgICc+IHNwYW4nOiB7XHJcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2R5JyxcclxuICAgICAgZm9udFNpemU6IFsxLCAyXSxcclxuICAgICAgbGluZUhlaWdodDogMS4yNSxcclxuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgICAgbWFyZ2luQm90dG9tOiAnMTBweCcsXHJcbiAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgfSxcclxuICAgICc+IC5wcmljZSc6IHtcclxuICAgICAgbWFyZ2luQm90dG9tOiAwLFxyXG4gICAgICBjb2xvcjogJ3NlY29uZGFyeScsXHJcbiAgICAgICc+IHN1Yic6IHtcclxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgICBib3R0b206ICc2cHgnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGxpc3RJdGVtOiB7XHJcbiAgICBmb250U3R5bGU6ICdub3JtYWwnLFxyXG4gICAgZm9udFdlaWdodDogJ25vcm1hbCcsXHJcbiAgICBmb250U2l6ZTogWzEsIG51bGwsIG51bGwsIG51bGwsIDJdLFxyXG4gICAgbGluZUhlaWdodDogWzEuNywgbnVsbCwgMS42NV0sXHJcbiAgICBtYXJnaW5Cb3R0b206IFszLCAnMjJweCddLFxyXG4gICAgYWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBwcjogWzIsIG51bGwsIG51bGwsIG51bGwsIDAsIDZdLFxyXG4gICAgJyYuY2xvc2VkJzoge1xyXG4gICAgICBvcGFjaXR5OiAwLjU1LFxyXG4gICAgICBidXR0b246IHtcclxuICAgICAgICBjb2xvcjogJyM3ODhGQjUnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBGYVN0YXIgfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XHJcblxyXG5jb25zdCBSYXRpbmcgPSAoeyByYXRpbmcgfSkgPT4ge1xyXG4gIGNvbnN0IHRvdGFsUmF0aW5nID0gW107XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcclxuICAgIGlmIChpIDwgcmF0aW5nKSB7XHJcbiAgICAgIHRvdGFsUmF0aW5nLnB1c2goXHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cInN0YXJcIiBrZXk9e2ByYXRpbmcta2V5JHtpfWB9PlxyXG4gICAgICAgICAgPEZhU3RhciAvPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0b3RhbFJhdGluZy5wdXNoKFxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJzdGFyLW9cIiBrZXk9e2ByYXRpbmcta2V5JHtpfWB9PlxyXG4gICAgICAgICAgPEZhU3RhciAvPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpbmdcIj5cclxuICAgICAgPHVsPnt0b3RhbFJhdGluZ308L3VsPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJhdGluZztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQm94LCBUZXh0LCBIZWFkaW5nIH0gZnJvbSAndGhlbWUtdWknO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VjdGlvbkhlYWRlcih7IHRpdGxlLCBzbG9nYW4sIGlzV2hpdGUgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IHN4PXt7IHZhcmlhbnQ6ICdzZWN0aW9uSGVhZGVyJyB9fT5cclxuICAgICAgPFRleHRcclxuICAgICAgICBhcz1cInBcIlxyXG4gICAgICAgIHN4PXt7XHJcbiAgICAgICAgICB2YXJpYW50OiAnc2VjdGlvbkhlYWRlci5zdWJUaXRsZScsXHJcbiAgICAgICAgICBjb2xvcjogaXNXaGl0ZSA/ICd3aGl0ZScgOiAnaGVhZGluZycsXHJcbiAgICAgICAgICBvcGFjaXR5OiBpc1doaXRlID8gMC43IDogMSxcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAge3Nsb2dhbn1cclxuICAgICAgPC9UZXh0PlxyXG4gICAgICA8SGVhZGluZ1xyXG4gICAgICAgIGFzPVwiaDJcIlxyXG4gICAgICAgIHN4PXt7XHJcbiAgICAgICAgICB2YXJpYW50OiAnc2VjdGlvbkhlYWRlci50aXRsZScsXHJcbiAgICAgICAgICBjb2xvcjogaXNXaGl0ZSA/ICd3aGl0ZScgOiAnaGVhZGluZ19zZWNvbmRhcnknLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICB7dGl0bGV9XHJcbiAgICAgIDwvSGVhZGluZz5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNFTyh7XHJcbiAgZGVzY3JpcHRpb24gPSAnc3RhcnR1cCBhcHBzIGxhbmRpbmcgcGFnZScsXHJcbiAgYXV0aG9yID0gJ1JlZFEsIEluYycsXHJcbiAgbWV0YSxcclxuICB0aXRsZSA9ICdzdGFydHVwIGxhbmRpbmcgdGl0bGUnLFxyXG59KSB7XHJcbiAgY29uc3QgbWV0YURhdGEgPSBbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IGBkZXNjcmlwdGlvbmAsXHJcbiAgICAgIGNvbnRlbnQ6IGRlc2NyaXB0aW9uLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcHJvcGVydHk6IGBvZzp0aXRsZWAsXHJcbiAgICAgIGNvbnRlbnQ6IHRpdGxlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcHJvcGVydHk6IGBvZzpkZXNjcmlwdGlvbmAsXHJcbiAgICAgIGNvbnRlbnQ6IGRlc2NyaXB0aW9uLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcHJvcGVydHk6IGBvZzp0eXBlYCxcclxuICAgICAgY29udGVudDogYHdlYnNpdGVgLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogYHR3aXR0ZXI6Y2FyZGAsXHJcbiAgICAgIGNvbnRlbnQ6IGBzdW1tYXJ5YCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IGB0d2l0dGVyOmNyZWF0b3JgLFxyXG4gICAgICBjb250ZW50OiBhdXRob3IsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBgdHdpdHRlcjp0aXRsZWAsXHJcbiAgICAgIGNvbnRlbnQ6IHRpdGxlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogYHR3aXR0ZXI6ZGVzY3JpcHRpb25gLFxyXG4gICAgICBjb250ZW50OiBkZXNjcmlwdGlvbixcclxuICAgIH0sXHJcbiAgXS5jb25jYXQobWV0YSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxIZWFkPlxyXG4gICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XHJcbiAgICAgIHttZXRhRGF0YS5tYXAoKHsgbmFtZSwgY29udGVudCB9LCBpKSA9PiAoXHJcbiAgICAgICAgPG1ldGEga2V5PXtpfSBuYW1lPXtuYW1lfSBjb250ZW50PXtjb250ZW50fSAvPlxyXG4gICAgICApKX1cclxuICAgIDwvSGVhZD5cclxuICApO1xyXG59XHJcblxyXG5TRU8uZGVmYXVsdFByb3BzID0ge1xyXG4gIGxhbmc6IGBlbmAsXHJcbiAgbWV0YTogW10sXHJcbn07XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3gsIEJveCwgSGVhZGluZywgVGV4dCwgQnV0dG9uLCBMaW5rIH0gZnJvbSAndGhlbWUtdWknO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGV4dEZlYXR1cmUoe1xyXG4gIHN1YlRpdGxlLFxyXG4gIHRpdGxlLFxyXG4gIGRlc2NyaXB0aW9uLFxyXG4gIGJ0bk5hbWUsXHJcbiAgYnRuVVJMID0gJyMnLFxyXG59KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggc3g9e3N0eWxlcy5jYXJkfT5cclxuICAgICAgPEJveCBzeD17c3R5bGVzLndyYXBwZXJ9PlxyXG4gICAgICAgIDxUZXh0IGFzPVwicFwiIHN4PXtzdHlsZXMud3JhcHBlci5zdWJUaXRsZX0+XHJcbiAgICAgICAgICB7c3ViVGl0bGV9XHJcbiAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgIDxIZWFkaW5nIGFzPVwiaDJcIiBzeD17c3R5bGVzLndyYXBwZXIudGl0bGV9PlxyXG4gICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgIDwvSGVhZGluZz5cclxuICAgICAgPC9Cb3g+XHJcblxyXG4gICAgICB7ZGVzY3JpcHRpb24gJiYgKFxyXG4gICAgICAgIDxUZXh0IGFzPVwicFwiIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCIgc3g9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XHJcbiAgICAgICAgICB7ZGVzY3JpcHRpb259XHJcbiAgICAgICAgPC9UZXh0PlxyXG4gICAgICApfVxyXG5cclxuICAgICAge2J0bk5hbWUgJiYgKFxyXG4gICAgICAgIDxMaW5rIGhyZWY9e2J0blVSTH0gdmFyaWFudD1cImRlZmF1bHRcIj5cclxuICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBhcmlhLWxhYmVsPXtidG5OYW1lfT5cclxuICAgICAgICAgICAge2J0bk5hbWV9XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICl9XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgY2FyZDoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICBmbGV4U2hyaW5rOiAwLFxyXG4gICAgYToge1xyXG4gICAgICBtOiBbJzAgYXV0bycsIG51bGwsIG51bGwsIDBdLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHdyYXBwZXI6IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIG10OiAnLTVweCcsXHJcbiAgICB0aXRsZToge1xyXG4gICAgICBmb250U2l6ZTogWycyNHB4JywgbnVsbCwgJzI4cHgnLCAnMzJweCcsICczNnB4JywgJzQycHgnLCBudWxsLCAnNDZweCddLFxyXG4gICAgICBjb2xvcjogJ2hlYWRpbmdfc2Vjb25kYXJ5JyxcclxuICAgICAgbGluZUhlaWdodDogWzEuMzUsIG51bGwsIG51bGwsIDEuMywgMS4yXSxcclxuICAgICAgZm9udFdlaWdodDogJzcwMCcsXHJcbiAgICAgIGxldHRlclNwYWNpbmc6ICctLjVweCcsXHJcbiAgICAgIG1iOiA1LFxyXG4gICAgfSxcclxuXHJcbiAgICBzdWJUaXRsZToge1xyXG4gICAgICBmb250U2l6ZTogWzAsIG51bGwsICcxNHB4J10sXHJcbiAgICAgIGNvbG9yOiAnaGVhZGluZycsXHJcbiAgICAgIGxldHRlclNwYWNpbmc6ICcycHgnLFxyXG4gICAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcclxuICAgICAgZm9udFdlaWdodDogJzcwMCcsXHJcbiAgICAgIG1iOiBbMiwgbnVsbCwgbnVsbCwgbnVsbCwgM10sXHJcbiAgICAgIGxpbmVIZWlnaHQ6IDEuNSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBkZXNjcmlwdGlvbjoge1xyXG4gICAgZm9udFNpemU6IFsnMTVweCcsIDIsIG51bGwsIG51bGwsIG51bGwsICcxN3B4JywgbnVsbCwgM10sXHJcbiAgICBmb250V2VpZ2h0OiA0MDAsXHJcbiAgICBsaW5lSGVpZ2h0OiBbMS44NSwgbnVsbCwgbnVsbCwgMiwgbnVsbCwgJzIuMiddLFxyXG4gICAgY29sb3I6ICd0ZXh0X3NlY29uZGFyeScsXHJcbiAgICBtYjogJzMwcHgnLFxyXG4gIH0sXHJcbn07XHJcbiIsImltcG9ydCB7IHVzZUNyZWF0ZUNvbnRleHQgfSBmcm9tICcuLi9jcmVhdGUtY29udGV4dCc7XHJcbmltcG9ydCB7IHJlZHVjZXIsIGluaXRpYWxTdGF0ZSB9IGZyb20gJy4vYXBwLnJlZHVjZXInO1xyXG5cclxuY29uc3QgW3N0YXRlLCB1c2VEaXNwYXRjaCwgcHJvdmlkZXJdID0gdXNlQ3JlYXRlQ29udGV4dChpbml0aWFsU3RhdGUsIHJlZHVjZXIpO1xyXG5leHBvcnQgY29uc3QgdXNlU3RpY2t5U3RhdGUgPSBzdGF0ZTtcclxuZXhwb3J0IGNvbnN0IHVzZVN0aWNreURpc3BhdGNoID0gdXNlRGlzcGF0Y2g7XHJcbmV4cG9ydCBjb25zdCBTdGlja3lQcm92aWRlciA9IHByb3ZpZGVyO1xyXG4iLCJleHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGlzU3RpY2t5OiBmYWxzZSxcclxuICBpc1NpZGViYXJTdGlja3k6IHRydWUsXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSwgeyB0eXBlIH0pIHtcclxuICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgIGNhc2UgJ1NFVF9TVElDS1knOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGlzU3RpY2t5OiB0cnVlLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSAnUkVNT1ZFX1NUSUNLWSc6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaXNTdGlja3k6IGZhbHNlLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSAnU0VUX1NJREVCQVJfU1RJQ0tZJzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBpc1NpZGViYXJTdGlja3k6IHRydWUsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlICdSRU1PVkVfU0lERUJBUl9TVElDS1knOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGlzU2lkZWJhclN0aWNreTogZmFsc2UsXHJcbiAgICAgIH07XHJcbiAgICBkZWZhdWx0OiB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVW5zdXBwb3J0ZWQgYWN0aW9uIHR5cGU6ICR7dHlwZX1gKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlQ3JlYXRlQ29udGV4dChkZWZhdWx0VmFsdWUsIHJlZHVjZXIpIHtcclxuICBjb25zdCBkZWZhdWx0RGlzcGF0Y2ggPSAoKSA9PiBkZWZhdWx0VmFsdWU7XHJcbiAgY29uc3Qgc3RhdGVDdHggPSBjcmVhdGVDb250ZXh0KGRlZmF1bHRWYWx1ZSk7XHJcbiAgY29uc3QgZGlzcGF0Y2hDdHggPSBjcmVhdGVDb250ZXh0KGRlZmF1bHREaXNwYXRjaCk7XHJcblxyXG4gIGZ1bmN0aW9uIHVzZVN0YXRlQ3R4KHByb3BlcnR5KSB7XHJcbiAgICBjb25zdCBzdGF0ZSA9IHVzZUNvbnRleHQoc3RhdGVDdHgpO1xyXG4gICAgcmV0dXJuIHN0YXRlW3Byb3BlcnR5XTsgLy8gb25seSBvbmUgZGVwdGggc2VsZWN0b3IgZm9yIGNvbXBhcmlzb25cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHVzZURpc3BhdGNoQ3R4KCkge1xyXG4gICAgcmV0dXJuIHVzZUNvbnRleHQoZGlzcGF0Y2hDdHgpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gUHJvdmlkZXIoeyBjaGlsZHJlbiB9KSB7XHJcbiAgICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IFJlYWN0LnVzZVJlZHVjZXIocmVkdWNlciwgZGVmYXVsdFZhbHVlKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXNwYXRjaEN0eC5Qcm92aWRlciB2YWx1ZT17ZGlzcGF0Y2h9PlxyXG4gICAgICAgIDxzdGF0ZUN0eC5Qcm92aWRlciB2YWx1ZT17c3RhdGV9PntjaGlsZHJlbn08L3N0YXRlQ3R4LlByb3ZpZGVyPlxyXG4gICAgICA8L2Rpc3BhdGNoQ3R4LlByb3ZpZGVyPlxyXG4gICAgKTtcclxuICB9XHJcbiAgcmV0dXJuIFt1c2VTdGF0ZUN0eCwgdXNlRGlzcGF0Y2hDdHgsIFByb3ZpZGVyXTtcclxufVxyXG4iLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IERyYXdlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9KTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IERyYXdlckNvbnRleHQgfSBmcm9tICcuL2RyYXdlci5jb250ZXh0JztcclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGlzT3BlbjogZmFsc2UsXHJcbn07XHJcblxyXG5mdW5jdGlvbiByZWR1Y2VyKHN0YXRlLCBhY3Rpb24pIHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlICdUT0dHTEUnOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGlzT3BlbjogIXN0YXRlLmlzT3BlbixcclxuICAgICAgfTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn1cclxuZXhwb3J0IGNvbnN0IERyYXdlclByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsU3RhdGUpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8RHJhd2VyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBzdGF0ZSwgZGlzcGF0Y2ggfX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvRHJhd2VyQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgeyBTdGlja3lQcm92aWRlciB9IGZyb20gJ2NvbnRleHRzL2FwcC9hcHAucHJvdmlkZXInO1xyXG5pbXBvcnQgdGhlbWUgZnJvbSAndGhlbWUnO1xyXG5pbXBvcnQgU0VPIGZyb20gJ2NvbXBvbmVudHMvc2VvJztcclxuaW1wb3J0IExheW91dCBmcm9tICdjb21wb25lbnRzL2xheW91dCc7XHJcbmltcG9ydCBCYW5uZXIgZnJvbSAnc2VjdGlvbnMvYmFubmVyJztcclxuaW1wb3J0IEtleUZlYXR1cmUgZnJvbSAnc2VjdGlvbnMva2V5LWZlYXR1cmUnO1xyXG5pbXBvcnQgQ29yZUZlYXR1cmUgZnJvbSAnc2VjdGlvbnMvY29yZS1mZWF0dXJlJztcclxuaW1wb3J0IEZlYXR1cmUgZnJvbSAnc2VjdGlvbnMvZmVhdHVyZSc7XHJcbmltcG9ydCBQYXJ0bmVyU2VjdGlvbiBmcm9tICdzZWN0aW9ucy9wYXJ0bmVyJztcclxuaW1wb3J0IFdvcmtGbG93IGZyb20gJ3NlY3Rpb25zL3dvcmtmbG93JztcclxuaW1wb3J0IFRlc3RpbW9uaWFsQ2FyZCBmcm9tICdzZWN0aW9ucy90ZXN0aW1vbmlhbCc7XHJcbmltcG9ydCBTZWN1cmVQYXltZW50IGZyb20gJ3NlY3Rpb25zL3NlY3VyZS1wYXltZW50JztcclxuaW1wb3J0IFBhY2thZ2UgZnJvbSAnc2VjdGlvbnMvcGFja2FnZSc7XHJcbmltcG9ydCBGYXEgZnJvbSAnc2VjdGlvbnMvZmFxJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4UGFnZSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cclxuICAgICAgPFN0aWNreVByb3ZpZGVyPlxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICA8U0VPIHRpdGxlPVwiU3RhcnR1cCBMYW5kaW5nIDAwNFwiIC8+XHJcbiAgICAgICAgICA8QmFubmVyIC8+XHJcbiAgICAgICAgICA8S2V5RmVhdHVyZSAvPlxyXG4gICAgICAgICAgPENvcmVGZWF0dXJlIC8+XHJcbiAgICAgICAgICA8RmVhdHVyZSAvPlxyXG4gICAgICAgICAgPFBhcnRuZXJTZWN0aW9uIC8+XHJcbiAgICAgICAgICA8V29ya0Zsb3cgLz5cclxuICAgICAgICAgIDxUZXN0aW1vbmlhbENhcmQgLz5cclxuICAgICAgICAgIDxTZWN1cmVQYXltZW50IC8+XHJcbiAgICAgICAgICA8UGFja2FnZSAvPlxyXG4gICAgICAgICAgPEZhcSAvPlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICA8L1N0aWNreVByb3ZpZGVyPlxyXG4gICAgPC9UaGVtZVByb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBGbGV4LCBCb3gsIEhlYWRpbmcsIFRleHQsIEltYWdlLCBCdXR0b24gfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE1vZGFsVmlkZW8gZnJvbSAncmVhY3QtbW9kYWwtdmlkZW8nO1xyXG5pbXBvcnQgeyBGYVBsYXlDaXJjbGUgfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XHJcbmltcG9ydCBCYW5uZXJCRyBmcm9tICdhc3NldHMvYmFubmVyQmcucG5nJztcclxuaW1wb3J0IEJhbm5lclRodW1iIGZyb20gJ2Fzc2V0cy9nb2FsLnBuZyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCYW5uZXIoKSB7XHJcbiAgY29uc3QgW3ZpZGVvT3Blbiwgc2V0VmlkZW9PcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRWaWRlb09wZW4odHJ1ZSk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gc3g9e3N0eWxlcy5iYW5uZXJ9IGlkPVwiaG9tZVwiPlxyXG4gICAgICA8Q29udGFpbmVyIHN4PXtzdHlsZXMuYmFubmVyLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgPEJveCBzeD17c3R5bGVzLmJhbm5lci5jb250ZW50Qm94fT5cclxuICAgICAgICAgIDxIZWFkaW5nIGFzPVwiaDFcIiB2YXJpYW50PVwiaGVyb1ByaW1hcnlcIj5cclxuICAgICAgICAgIERpc2NvdmVyIFJlYWwgS25vd2xlZGdlIHdpdGggZXhwZXJ0c1xyXG4gICAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICAgICAgPFRleHQgYXM9XCJwXCIgdmFyaWFudD1cImhlcm9TZWNvbmRhcnlcIj5cclxuICAgICAgICAgIFRoZSBtb3N0IGRpZmZpY3VsdCBwYXJ0IG9mIG1ha2luZyBhIHN1Y2Nlc3NmdWwgY2FycmllciBpcyBnZXR0aW5nIHN0YXJ0ZWQuIEdpdmUgeW91ciBjYXJlZXIgYSBib29zdCBieSBsZWFybmluZyBpbmR1c3RyeSBza2lsbHMsIHdvcmsgb24gcmVhbC1saWZlIHByb2plY3RzLCBpbnRlcm5zaGlwcywgYW5kIGV4cGVydCBndWlkYW5jZS5cclxuICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgIDxGbGV4PlxyXG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJ3aGl0ZUJ1dHRvblwiIGFyaWEtbGFiZWw9XCJHZXQgU3RhcnRlZFwiPlxyXG4gICAgICAgICAgICAgR2V0IFN0YXJ0ZWRcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPE1vZGFsVmlkZW9cclxuICAgICAgICAgICAgICAgIGNoYW5uZWw9XCJ5b3V0dWJlXCJcclxuICAgICAgICAgICAgICAgIGlzT3Blbj17dmlkZW9PcGVufVxyXG4gICAgICAgICAgICAgICAgdmlkZW9JZD1cIlpOQTlybURzWVZFXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHNldFZpZGVvT3BlbihmYWxzZSl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwidGV4dEJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiV2F0Y2ggVmlkZW9cIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEZhUGxheUNpcmNsZSAvPiBXYXRjaCBWaWRlb1xyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgIFxyXG4gICAgICAgIDwvQm94PlxyXG5cclxuICAgICAgICA8Qm94IHN4PXtzdHlsZXMuYmFubmVyLmltYWdlQm94fT5cclxuICAgICAgICAgIDxJbWFnZSBzcmM9e0Jhbm5lclRodW1ifSBhbHQ9XCJiYW5uZXJcIiAvPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgYmFubmVyOiB7XHJcbiAgICBvdmVyZmxvdzogWydoaWRkZW4nLCAnaW5pdGlhbCcsIG51bGwsICdoaWRkZW4nXSxcclxuICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke0Jhbm5lckJHfSlgLFxyXG4gICAgYmFja2dyb3VuZFJlcGVhdDogYG5vLXJlcGVhdGAsXHJcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICd0b3AgbGVmdCcsXHJcbiAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcclxuICAgIGJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzOiBbMTAwLCAxNTAsIG51bGwsIG51bGwsIG51bGwsIDI1MF0sXHJcbiAgICBwdDogWycxNTBweCcsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICcxNDBweCcsICcxMzBweCddLFxyXG4gICAgcGI6IFsnMTAwcHgnLCBudWxsLCBudWxsLCAnMTEwcHgnLCBudWxsLCAxMCwgJzE1MHB4J10sXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdwcmltYXJ5JyxcclxuICAgIGNvbnRhaW5lcjoge1xyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICB9LFxyXG4gICAgY29udGVudEJveDoge1xyXG4gICAgICB3aWR0aDogWycxMDAlJywgbnVsbCwgJzg1JScsICc1NSUnLCAnNTAlJywgJzU1JSddLFxyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgICBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCcsXHJcbiAgICAgIGZsZXhTaHJpbms6IDAsXHJcbiAgICAgIHB0OiBbMCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgNSwgN10sXHJcbiAgICB9LFxyXG4gICAgaW1hZ2VCb3g6IHtcclxuICAgICAgZGlzcGxheTogWydub25lJywgbnVsbCwgbnVsbCwgJ2Jsb2NrJ10sXHJcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgbWw6IFswLCBudWxsLCBudWxsLCAnLTExMHB4JywgJy0xMTVweCcsICctMTUwcHgnLCAnLTIxMHB4JywgJy0yNzBweCddLFxyXG4gICAgICBtcjogWzAsIG51bGwsIG51bGwsICctMTQ1cHgnLCAnLTE2MHB4JywgJy0xODBweCcsICctMjIwcHgnLCAnLTI1MHB4J10sXHJcbiAgICAgIG10OiBbMCwgbnVsbCwgbnVsbCwgJzQwcHgnLCA0LCA3LCAwXSxcclxuICAgICAgbWI6IFswLCBudWxsLCBudWxsLCBudWxsLCAnLTQ1cHgnLCAnLTcwcHgnLCBudWxsLCAnLTExNXB4J10sXHJcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBzcG9uc29yVGl0bGU6IHtcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgZm9udFNpemU6IFsxLCAyXSxcclxuICAgIG9wYWNpdHk6IDAuNixcclxuICAgIHByOiAyMCxcclxuICAgIGZsZXhTaHJpbms6IDAsXHJcbiAgICBwYjogWzIsIG51bGwsIDBdLFxyXG4gIH0sXHJcbiAgc3BvbnNvckJveDoge1xyXG4gICAgcHQ6IFsnMzVweCcsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICc0NXB4J10sXHJcbiAgICBmbGV4RGlyZWN0aW9uOiBbJ2NvbHVtbicsIG51bGwsICdyb3cnXSxcclxuICAgIHNwb25zb3I6IHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgJz4gYSc6IHtcclxuICAgICAgICBtcjogWzUsIG51bGwsIG51bGwsIDQsIDZdLFxyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAnJjpsYXN0LW9mLXR5cGUnOiB7XHJcbiAgICAgICAgICBtcjogMCxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4LCBDb250YWluZXIsIEJveCwgR3JpZCwgVGV4dCwgSGVhZGluZyB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IFRleHRGZWF0dXJlIGZyb20gJ2NvbXBvbmVudHMvdGV4dC1mZWF0dXJlJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ2NvbXBvbmVudHMvaW1hZ2UnO1xyXG5cclxuaW1wb3J0IENvcmVGZWF0dXJlVGh1bWIgZnJvbSAnYXNzZXRzL2NvcmVGZWF0dXJlLnBuZyc7XHJcbmltcG9ydCBCcmllZmNhc2UgZnJvbSAnYXNzZXRzL2NvcmUtZmVhdHVyZS9icmllZmNhc2Uuc3ZnJztcclxuaW1wb3J0IFNlY3VyZSBmcm9tICdhc3NldHMvY29yZS1mZWF0dXJlL3NlY3VyZS5zdmcnO1xyXG5cclxuY29uc3QgZGF0YSA9IHtcclxuICBzdWJUaXRsZTogJ0NvcmUgZmVhdHVyZXMnLFxyXG4gIHRpdGxlOiAnTGVhcm4sUHJhY3RpY2UgYW5kIFBsYWNlZCcsXHJcbiAgZmVhdHVyZXM6IFtcclxuICAgIHtcclxuICAgICAgaWQ6IDEsXHJcbiAgICAgIGltZ1NyYzogQnJpZWZjYXNlLFxyXG4gICAgICBhbHRUZXh0OiAnTWVudG9yc2hpcCcsXHJcbiAgICAgIHRpdGxlOiAnTWVudG9yc2hpcCcsXHJcbiAgICAgIHRleHQ6XHJcbiAgICAgICAgJ0dldCBtZW50b3JzaGlwIGF0IGVhY2ggcGhhc2Ugb2YgeW91ciBsZWFybmluZyBhbmQgbGVhcm4gdGhlIHJpZ2h0IHdheSAnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDIsXHJcbiAgICAgIGltZ1NyYzogU2VjdXJlLFxyXG4gICAgICBhbHRUZXh0OiAnV29ybGQgQ2xhc3MgVHJhaW5pbmcnLFxyXG4gICAgICB0aXRsZTogJ1RyYWluaW5nIENhbXBzJyxcclxuICAgICAgdGV4dDpcclxuICAgICAgICAnQSByZWFsdGltZSBsZWFybmluZyBhbmQgcHJhY3RpbmcgdHJhaW5naW5nIGNhbXBzIHdpdGggbGl2ZSBtZW50b3JzaGlwIGFuZCB0cmFuaW5nIHRvIGJvb3N0IHlvdXIgbGVhcm5pbmcgYW5kIHJlZHVjZSBsZWFybmluZyB0aW1lJyxcclxuICAgIH0sXHJcbiAgXSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvcmVGZWF0dXJlKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBzeD17c3R5bGVzLmNvcmVGZWF0dXJlfT5cclxuICAgICAgPENvbnRhaW5lciBzeD17c3R5bGVzLmNvbnRhaW5lckJveH0+XHJcbiAgICAgICAgPEJveCBzeD17c3R5bGVzLnRodW1ibmFpbH0+XHJcbiAgICAgICAgICA8SW1hZ2Ugc3JjPXtDb3JlRmVhdHVyZVRodW1ifSBhbHQ9XCJUaHVtYm5haWxcIiAvPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICAgIDxCb3ggc3g9e3N0eWxlcy5jb250ZW50Qm94fT5cclxuICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5oZWFkaW5nVG9wfT5cclxuICAgICAgICAgICAgPFRleHRGZWF0dXJlIHN1YlRpdGxlPXtkYXRhLnN1YlRpdGxlfSB0aXRsZT17ZGF0YS50aXRsZX0gLz5cclxuICAgICAgICAgIDwvQm94PlxyXG5cclxuICAgICAgICAgIDxHcmlkIGdhcD1cIjE1cHggMFwiIGNvbHVtbnM9ezF9IHN4PXtzdHlsZXMuZ3JpZH0+XHJcbiAgICAgICAgICAgIHtkYXRhLmZlYXR1cmVzLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5jYXJkfSBrZXk9e2l0ZW0uaWR9PlxyXG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz17aXRlbS5pbWdTcmN9IGFsdD17aXRlbS5hbHRUZXh0fSBzeD17c3R5bGVzLmltZ30gLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMud3JhcHBlcn0+XHJcbiAgICAgICAgICAgICAgICAgIDxIZWFkaW5nIHN4PXtzdHlsZXMud3JhcHBlci50aXRsZX0+e2l0ZW0udGl0bGV9PC9IZWFkaW5nPlxyXG4gICAgICAgICAgICAgICAgICA8VGV4dCBzeD17c3R5bGVzLndyYXBwZXIuc3ViVGl0bGV9PntpdGVtLnRleHR9PC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgY29yZUZlYXR1cmU6IHtcclxuICAgIHB5OiBbMCwgbnVsbCwgbnVsbCwgMiwgbnVsbCwgN10sXHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICcmOjpiZWZvcmUnOiB7XHJcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICBjb250ZW50OiAnXCJcIicsXHJcbiAgICAgIHRvcDogWydhdXRvJywgbnVsbCwgbnVsbCwgJzUwJSddLFxyXG4gICAgICBib3R0b206IFsnMTAwcHgnLCAwLCBudWxsLCAnYXV0byddLFxyXG4gICAgICBsZWZ0OiAwLFxyXG4gICAgICBiYWNrZ3JvdW5kOiAnbGluZWFyLWdyYWRpZW50KC0xNTdkZWcsICNGNkZBRkQsICNGOUZDRkMsICNGQ0ZERkMpJyxcclxuICAgICAgaGVpZ2h0OiBbMzUwLCA1NTAsICc2MCUnXSxcclxuICAgICAgd2lkdGg6ICc1MCUnLFxyXG4gICAgICB6SW5kZXg6IC0xLFxyXG4gICAgICBib3JkZXJUb3BSaWdodFJhZGl1czogJzUwJScsXHJcbiAgICAgIGJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzOiAnNTAlJyxcclxuICAgICAgdHJhbnNmb3JtOiBbJ3RyYW5zbGF0ZVkoMCknLCBudWxsLCBudWxsLCAndHJhbnNsYXRlWSgtNTAlKSddLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGNvbnRhaW5lckJveDoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gICAgZmxleERpcmVjdGlvbjogWydjb2x1bW4nLCBudWxsLCBudWxsLCAncm93J10sXHJcbiAgfSxcclxuICB0aHVtYm5haWw6IHtcclxuICAgIHBsOiBbMCwgNSwgMCwgbnVsbCwgNywgOTVdLFxyXG4gICAgcHI6IFswLCA1LCBudWxsLCBudWxsLCBudWxsLCA3NSwgOTVdLFxyXG4gICAgb3JkZXI6IFsyLCBudWxsLCBudWxsLCAwXSxcclxuICB9LFxyXG4gIGNvbnRlbnRCb3g6IHtcclxuICAgIHdpZHRoOiBbJzEwMCUnLCA0NTAsIDU1MCwgMzUwLCA1MDAsIDU3MF0sXHJcbiAgICBwcjogWzAsIG51bGwsICdhdXRvJywgbnVsbCwgbnVsbCwgODBdLFxyXG4gICAgcGw6ICdhdXRvJyxcclxuICAgIGZsZXhTaHJpbms6IDAsXHJcbiAgfSxcclxuICBoZWFkaW5nVG9wOiB7XHJcbiAgICBwbDogWzAsIG51bGwsIG51bGwsIG51bGwsICczNXB4JywgbnVsbCwgJzU1cHgnLCA2XSxcclxuICAgIG1iOiBbMywgbnVsbCwgbnVsbCwgbnVsbCwgMV0sXHJcbiAgICB0ZXh0QWxpZ246IFsnY2VudGVyJywgbnVsbCwgbnVsbCwgJ2xlZnQnXSxcclxuICB9LFxyXG4gIGdyaWQ6IHtcclxuICAgIHA6IFsnMCAwcHggMzVweCcsIG51bGwsIG51bGwsIG51bGwsICcwIDIwcHggNDBweCcsIG51bGwsICcwIDQwcHggNDBweCcsIDBdLFxyXG4gIH0sXHJcbiAgY2FyZDoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnLFxyXG4gICAgcDogW1xyXG4gICAgICAnMCAxN3B4IDIwcHgnLFxyXG4gICAgICBudWxsLFxyXG4gICAgICBudWxsLFxyXG4gICAgICAnMCAwIDIwcHgnLFxyXG4gICAgICAnMjBweCAxNXB4IDE3cHgnLFxyXG4gICAgICBudWxsLFxyXG4gICAgICBudWxsLFxyXG4gICAgICAnMjVweCAzMHB4IDIzcHgnLFxyXG4gICAgXSxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcclxuICAgIGJvcmRlclJhZGl1czogJzEwcHgnLFxyXG4gICAgdHJhbnNpdGlvbjogJ2FsbCAwLjNzJyxcclxuICAgIHdpZHRoOiBbJzEwMCUnLCAnODUlJywgbnVsbCwgJzEwMCUnXSxcclxuICAgIG14OiAnYXV0bycsXHJcbiAgICAnJjpob3Zlcic6IHtcclxuICAgICAgYm94U2hhZG93OiBbXHJcbiAgICAgICAgJzBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMCknLFxyXG4gICAgICAgIG51bGwsXHJcbiAgICAgICAgbnVsbCxcclxuICAgICAgICBudWxsLFxyXG4gICAgICAgICcwcHggOHB4IDI0cHggcmdiYSg2OSwgODgsIDE1NywgMC4wNyknLFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICBpbWc6IHtcclxuICAgIHdpZHRoOiBbJzUwcHgnLCBudWxsLCAnNTVweCddLFxyXG4gICAgaGVpZ2h0OiAnYXV0bycsXHJcbiAgICBmbGV4U2hyaW5rOiAwLFxyXG4gICAgbXI6IFszLCA0XSxcclxuICB9LFxyXG4gIHdyYXBwZXI6IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIG10OiAnLTVweCcsXHJcbiAgICB0aXRsZToge1xyXG4gICAgICBmb250U2l6ZTogMyxcclxuICAgICAgY29sb3I6ICdoZWFkaW5nX3NlY29uZGFyeScsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IDEuNCxcclxuICAgICAgZm9udFdlaWdodDogNzAwLFxyXG4gICAgICBtYjogWzIsIG51bGwsIG51bGwsIG51bGwsIDNdLFxyXG4gICAgfSxcclxuXHJcbiAgICBzdWJUaXRsZToge1xyXG4gICAgICBmb250U2l6ZTogMSxcclxuICAgICAgZm9udFdlaWdodDogNDAwLFxyXG4gICAgICBsaW5lSGVpZ2h0OiBbMS44NSwgbnVsbCwgMl0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3gsIENvbnRhaW5lciwgQm94IH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgU2VjdGlvbkhlYWRlciBmcm9tICdjb21wb25lbnRzL3NlY3Rpb24taGVhZGVyJztcclxuaW1wb3J0IEFjY29yZGlvbiBmcm9tICdjb21wb25lbnRzL2FjY29yZGlvbi9hY2NvcmRpb24nO1xyXG5jb25zdCBmYXFzID0gW1xyXG4gIHtcclxuICAgIHRpdGxlOiAnSG93IHRvIGNvbnRhY3Qgd2l0aCByaWRlcnMgZW1lcmdlbmN5ID8nLFxyXG4gICAgY29udGVudHM6IChcclxuICAgICAgPGRpdj5cclxuICAgICAgICBHZXQgeW91ciB3ZWJzaXRlIGFkcyB0ZXN0cyBkZWxpdmVyZWQgYXQgbGV0IGNvbGxlY3Qgc2FtcGxlIGZyb20gdGhlXHJcbiAgICAgICAgdmljdG9yeSBvZiB0aGUgbWFuYWdlbWVudHMgdGhhdCBzdXBwbGllcyBiZXN0IGRlc2lnbiBzeXN0ZW0gd2hpY2hcclxuICAgICAgICBndWlkZWxpbmVzIGV2ZXIgd2l0aCBtdWx0aXBsZSBmZWF0dXJlcy5cclxuICAgICAgPC9kaXY+XHJcbiAgICApLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdBcHAgaW5zdGFsbGF0aW9uIGZhaWxlZCwgaG93IHRvIHVwZGF0ZSBzeXN0ZW0gaW5mb3JtYXRpb24/JyxcclxuICAgIGNvbnRlbnRzOiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgUmhpbm8gc2tpbiBtYXliZSB0aGljayBidXQgaXQgY2FuIGJlIHF1aXRlIHNlbnNpdGl2ZSB0byBzdW5idXJucyBhbmRcclxuICAgICAgICBpbnNlY3QgYml0ZXMgd2hpY2ggaXMgd2h5IHRoZXkgbGlrZSB3YWxsb3cgc28gbXVjaCDigJMgd2hlbiB0aGUgbXVkIGRyaWVzXHJcbiAgICAgICAgaXQgYWN0cyBhcyBwcm90ZWN0aW9uIGZyb20gdGhlIHN1bmJ1cm5zIGFuZCBpbnNlY3RzLlxyXG4gICAgICA8L2Rpdj5cclxuICAgICksXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogYFdlYnNpdGUgcmVzcG9uc2UgdGFraW5nIHRpbWUsIGhvdyB0byBpbXByb3ZlP2AsXHJcbiAgICBjb250ZW50czogKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIEdldCB5b3VyIGJsb29kIHRlc3RzIGRlbGl2ZXJlZCBhdCB0aGUgaG9tZSBjb2xsZWN0IGEgc2FtcGxlIGZyb21cclxuICAgICAgICBtYW5hZ2VtZW50IG5ld3MuIEdldCB5b3VyIGJsb29kIHRlc3RzIGRlbGl2ZXJlZCBhdCB0aGUgaG9tZSBjb2xsZWN0IGFcclxuICAgICAgICBzYW1wbGUgZnJvbSBtYW5hZ2VtZW50IG5ld3MuIEdldCB5b3VyIGJsb29kIHRlc3RzIGRlbGl2ZXJlZCBhdCB0aGUgaG9tZVxyXG4gICAgICAgIGNvbGxlY3QgYSBzYW1wbGUgZnJvbSBtYW5hZ2VtZW50IG5ld3MuIEdldCB5b3VyIGJsb29kIHRlc3RzIGRlbGl2ZXJlZCBhdFxyXG4gICAgICAgIHRoZSBob21lLlxyXG4gICAgICA8L2Rpdj5cclxuICAgICksXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogYE5ldyB1cGRhdGUgZml4ZWQgYWxsIGJ1ZyBhbmQgaXNzdWVzYCxcclxuICAgIGNvbnRlbnRzOiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgSWYgeW914oCZcmUgbG9va2luZyB0byBodW50IGEgdW5pY29ybiwgYnV0IGRvbuKAmXQga25vdyB3aGVyZSB0byBiZWdpbiwgdHJ5XHJcbiAgICAgICAgTGFrZSBTdXBlcmlvciBTdGF0ZSBVbml2ZXJzaXR5IGluIFNhdWx0IFN0ZS4gTWFyaWUsIE1pY2hpZ2FuLiBTaW5jZVxyXG4gICAgICAgIDE5NzEsIHRoZSB1bml2ZXJzaXR5IGhhcyBpc3N1ZWQgcGVybWl0cyB0byB1bmljb3JuIHF1ZXN0ZXJzLlxyXG4gICAgICA8L2Rpdj5cclxuICAgICksXHJcbiAgfSxcclxuXTtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmFxKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBzeD17eyB2YXJpYW50OiAnc2VjdGlvbi5mYXEnIH19PlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxTZWN0aW9uSGVhZGVyXHJcbiAgICAgICAgICB0aXRsZT1cIkZyZXF1ZW50bHkgYXNrZWQgcXVlc3Rpb25cIlxyXG4gICAgICAgICAgc2xvZ2FuPVwiR2V0IHlvdXIgcXVlc3Rpb24gYW5zd2VyXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxCb3hcclxuICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgd2lkdGg6IFsnMTAwJScsIG51bGwsIG51bGwsICc2NTBweCcsICc3NDVweCddLFxyXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAgICAgICAgbXg6ICdhdXRvJyxcclxuICAgICAgICAgICAgbXk6IC00LFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8QWNjb3JkaW9uIGl0ZW1zPXtmYXFzfSAvPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3ggfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgR3JpZCB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IFNlY3Rpb25IZWFkZXIgZnJvbSAnY29tcG9uZW50cy9zZWN0aW9uLWhlYWRlcic7XHJcbmltcG9ydCBGZWF0dXJlQ2FyZCBmcm9tICdjb21wb25lbnRzL2ZlYXR1cmUtY2FyZC5qcyc7XHJcbmltcG9ydCBTbWFydCBmcm9tICdhc3NldHMvZmVhdHVyZS9zbWFydC5zdmcnO1xyXG5pbXBvcnQgV2lubmVyIGZyb20gJ2Fzc2V0cy9mZWF0dXJlL3dpbm5lci5zdmcnO1xyXG5pbXBvcnQgQ2xvdWQgZnJvbSAnYXNzZXRzL2ZlYXR1cmUvY2xvdWQuc3ZnJztcclxuaW1wb3J0IFNldHRpbmcgZnJvbSAnYXNzZXRzL2ZlYXR1cmUvc2V0dGluZy5zdmcnO1xyXG5pbXBvcnQgRGVzaWduIGZyb20gJ2Fzc2V0cy9mZWF0dXJlL2Rlc2lnbi5zdmcnO1xyXG5pbXBvcnQgQ2hhdCBmcm9tICdhc3NldHMvZmVhdHVyZS9jaGF0LnN2Zyc7XHJcblxyXG5jb25zdCBkYXRhID0gW1xyXG4gIHtcclxuICAgIGlkOiAxLFxyXG4gICAgaW1nU3JjOiBTbWFydCxcclxuICAgIGFsdFRleHQ6ICdTbWFydCcsXHJcbiAgICB0aXRsZTogJ1NtYXJ0IEZlYXR1cmVzJyxcclxuICAgIHRleHQ6XHJcbiAgICAgICdHZXQgeW91ciBibG9vZCB0ZXN0cyBkZWxpdmVyZWQgYXQgbGV0IGhvbWUgY29sbGVjdCBzYW1wbGUgZnJvbSB0aGUgdmljdG9yeSBvZiB0aGUgbWFuYWdlbWVudHMuJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAyLFxyXG4gICAgaW1nU3JjOiBXaW5uZXIsXHJcbiAgICBhbHRUZXh0OiAnUGVyZm9ybWFuY2UnLFxyXG4gICAgdGl0bGU6ICdGYXN0IFBlcmZvcm1hbmNlJyxcclxuICAgIHRleHQ6XHJcbiAgICAgICdHZXQgeW91ciBibG9vZCB0ZXN0cyBkZWxpdmVyZWQgYXQgbGV0IGhvbWUgY29sbGVjdCBzYW1wbGUgZnJvbSB0aGUgdmljdG9yeSBvZiB0aGUgbWFuYWdlbWVudHMuJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAzLFxyXG4gICAgaW1nU3JjOiBDbG91ZCxcclxuICAgIGFsdFRleHQ6ICdDb250ZW50JyxcclxuICAgIHRpdGxlOiAnVW5saW1pdGVkIENvbnRlbnQnLFxyXG4gICAgdGV4dDpcclxuICAgICAgJ0dldCB5b3VyIGJsb29kIHRlc3RzIGRlbGl2ZXJlZCBhdCBsZXQgaG9tZSBjb2xsZWN0IHNhbXBsZSBmcm9tIHRoZSB2aWN0b3J5IG9mIHRoZSBtYW5hZ2VtZW50cy4nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDQsXHJcbiAgICBpbWdTcmM6IFNldHRpbmcsXHJcbiAgICBhbHRUZXh0OiAnQ3VzdG9taXphdGlvbicsXHJcbiAgICB0aXRsZTogJ1VubGltaXRlZCBDdXN0b21pemF0aW9uJyxcclxuICAgIHRleHQ6XHJcbiAgICAgICdHZXQgeW91ciBibG9vZCB0ZXN0cyBkZWxpdmVyZWQgYXQgbGV0IGhvbWUgY29sbGVjdCBzYW1wbGUgZnJvbSB0aGUgdmljdG9yeSBvZiB0aGUgbWFuYWdlbWVudHMuJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA1LFxyXG4gICAgaW1nU3JjOiBEZXNpZ24sXHJcbiAgICBhbHRUZXh0OiAnUHJvZHVjdGl2aXR5JyxcclxuICAgIHRpdGxlOiAnQm9vc3QgUHJvZHVjdGl2aXR5JyxcclxuICAgIHRleHQ6XHJcbiAgICAgICdHZXQgeW91ciBibG9vZCB0ZXN0cyBkZWxpdmVyZWQgYXQgbGV0IGhvbWUgY29sbGVjdCBzYW1wbGUgZnJvbSB0aGUgdmljdG9yeSBvZiB0aGUgbWFuYWdlbWVudHMuJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA2LFxyXG4gICAgaW1nU3JjOiBDaGF0LFxyXG4gICAgYWx0VGV4dDogJ1N1cHBvcnQnLFxyXG4gICAgdGl0bGU6ICdDdXN0b21lciBTdXBwb3J0JyxcclxuICAgIHRleHQ6XHJcbiAgICAgICdHZXQgeW91ciBibG9vZCB0ZXN0cyBkZWxpdmVyZWQgYXQgbGV0IGhvbWUgY29sbGVjdCBzYW1wbGUgZnJvbSB0aGUgdmljdG9yeSBvZiB0aGUgbWFuYWdlbWVudHMuJyxcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmVhdHVyZSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gc3g9e3sgdmFyaWFudDogJ3NlY3Rpb24uZmVhdHVyZScgfX0+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPFNlY3Rpb25IZWFkZXJcclxuICAgICAgICAgIHNsb2dhbj1cIlF1YWxpdHkgZmVhdHVyZXNcIlxyXG4gICAgICAgICAgdGl0bGU9XCJNZWV0IGV4Y2l0aW5nIGZlYXR1cmUgb2YgYXBwXCJcclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8R3JpZCBzeD17c3R5bGVzLmdyaWR9PlxyXG4gICAgICAgICAge2RhdGEubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgIDxGZWF0dXJlQ2FyZFxyXG4gICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cclxuICAgICAgICAgICAgICBzcmM9e2l0ZW0uaW1nU3JjfVxyXG4gICAgICAgICAgICAgIGFsdD17aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICB0aXRsZT17aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICB0ZXh0PXtpdGVtLnRleHR9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBncmlkOiB7XHJcbiAgICBwdDogWzAsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDNdLFxyXG4gICAgZ3JpZEdhcDogW1xyXG4gICAgICAnMzdweCAwJyxcclxuICAgICAgbnVsbCxcclxuICAgICAgJzQ1cHggMzBweCcsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgICc1MHB4IDMwcHgnLFxyXG4gICAgICBudWxsLFxyXG4gICAgICBudWxsLFxyXG4gICAgICAnOTBweCA3MHB4JyxcclxuICAgIF0sXHJcbiAgICB3aWR0aDogWycxMDAlJywgJzgwJScsICcxMDAlJ10sXHJcbiAgICBteDogJ2F1dG8nLFxyXG4gICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogW1xyXG4gICAgICAncmVwZWF0KDEsMWZyKScsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgICdyZXBlYXQoMiwxZnIpJyxcclxuICAgICAgbnVsbCxcclxuICAgICAgJ3JlcGVhdCgzLDFmciknLFxyXG4gICAgXSxcclxuICB9LFxyXG59O1xyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4IH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIEdyaWQgfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCBTZWN0aW9uSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvc2VjdGlvbi1oZWFkZXInO1xyXG5pbXBvcnQgRmVhdHVyZUNhcmRDb2x1bW4gZnJvbSAnY29tcG9uZW50cy9mZWF0dXJlLWNhcmQtY29sdW1uLmpzJztcclxuaW1wb3J0IFZlY3RvciBmcm9tICdhc3NldHMva2V5LWZlYXR1cmUvcHJhY3RpY2UgKDEpLnBuZyc7XHJcbmltcG9ydCBFZGl0aW5nIGZyb20gJ2Fzc2V0cy9rZXktZmVhdHVyZS9oZWxwICgxKS5wbmcnO1xyXG5pbXBvcnQgU3BlZWQgZnJvbSAnYXNzZXRzL2tleS1mZWF0dXJlL3Byb21vdGlvbiAoMikucG5nJztcclxuXHJcbmNvbnN0IGRhdGEgPSBbXHJcbiAge1xyXG4gICAgaWQ6IDEsXHJcbiAgICBpbWdTcmM6IFZlY3RvcixcclxuICAgIGFsdFRleHQ6ICdQcmFjdGljYWwgTGVhcm5pbmcnLFxyXG4gICAgdGl0bGU6ICdQcmFjdGljYWwgTGVhcm5pbmcnLFxyXG4gICAgdGV4dDpcclxuICAgICAgJ1RoZSB0aGVvcnkgaXMgYWxsIGFib3V0IHJlYWRpbmcgYSBnaXZlbiBzZXQgb2YgbWF0ZXJpYWxzIGFuZCB1bmRlcnN0YW5kaW5nIHdoYXQgdGhlIG1hdGVyaWFscyB3YW50IHRvIGNvbnZleS4gV2hlcmVhcyB0byBnYWluIHByYWN0aWNhbCBrbm93bGVkZ2UsIHlvdSBuZWVkIHRvIGV4cGxvcmUgdmFyaW91cyBvcHRpb25zIGFuZCBzZWUgd2hhdCB3b3JrcyB0aGUgYmVzdC4nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDIsXHJcbiAgICBpbWdTcmM6IEVkaXRpbmcsXHJcbiAgICBhbHRUZXh0OiAnIDI0ICo3IE1lbnRvciBTdXBwb3J0JyxcclxuICAgIHRpdGxlOiAnMjQgKjcgTWVudG9yIFN1cHBvcnQnLFxyXG4gICAgdGV4dDpcclxuICAgICAgJ3RoZSBQYXRoIHRvIHN1Y2Nlc3MgY2FuIGJlIHRvdWdoIGJ1dCB0aGUgcmlnaHQgZ3VpZGFuY2UgYW5kIGFuIGV4cGVydCBoZWxwaW5nIGhhbmQgY2FuIG1ha2UgdGhpcyBwYXRoICBlbmpveWFibGUgYW5kIG1ha2UgeW91ciBlZmZvcnRzIGNvdW50JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAzLFxyXG4gICAgaW1nU3JjOiBTcGVlZCxcclxuICAgIGFsdFRleHQ6ICdJbnRlcm5zaGlwcycsXHJcbiAgICB0aXRsZTogJ0ludGVybnNoaXBzJyxcclxuICAgIHRleHQ6XHJcbiAgICAgICdJbmR1c3RyeSBsZWFkaW5nIGN1cnJpY3VsdW0gZGVzaWduZWQgYnkgZXhwZXJ0IGRldmVsb3BlcnMgdHVybmVkIGVkdWNhdG9ycyB3aG8gaGF2ZSBpbnZlc3RlZCB0aW1lIHRvIGNyZWF0ZSBxdWFsaXR5IGNvbnRlbnQgaW5mdXNlZCB3aXRoIHVuaXF1ZSB0ZWFjaGluZyBtZXRob2RvbG9neS4nLFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBLZXlGZWF0dXJlKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBzeD17eyB2YXJpYW50OiAnc2VjdGlvbi5rZXlGZWF0dXJlJyB9fSBpZD1cImZlYXR1cmVcIj5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8U2VjdGlvbkhlYWRlclxyXG4gICAgICAgICAgc2xvZ2FuPVwiUXVhbGl0eSBmZWF0dXJlc1wiXHJcbiAgICAgICAgICB0aXRsZT1cIkVYQ0xVU0lWRSBGRUFUVVJFU1wiXHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPEdyaWQgc3g9e3N0eWxlcy5ncmlkfT5cclxuICAgICAgICAgIHtkYXRhLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICA8RmVhdHVyZUNhcmRDb2x1bW5cclxuICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgICAgc3JjPXtpdGVtLmltZ1NyY31cclxuICAgICAgICAgICAgICBhbHQ9e2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgdGl0bGU9e2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgdGV4dD17aXRlbS50ZXh0fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgZ3JpZDoge1xyXG4gICAgcHg6IFswLCBudWxsLCBudWxsLCAnNDBweCcsIG51bGwsICc4MHB4J10sXHJcbiAgICBwdDogWzAsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDNdLFxyXG4gICAgZ3JpZEdhcDogWyczNXB4IDAnLCBudWxsLCAnNDBweCAwJ10sXHJcbiAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBbXHJcbiAgICAgICdyZXBlYXQoMSwxZnIpJyxcclxuICAgICAgbnVsbCxcclxuICAgICAgJ3JlcGVhdCgyLDFmciknLFxyXG4gICAgICBudWxsLFxyXG4gICAgICAncmVwZWF0KDMsMWZyKScsXHJcbiAgICBdLFxyXG4gICAgd2lkdGg6IFsnMTAwJScsICc4MCUnLCAnMTAwJSddLFxyXG4gICAgbXg6ICdhdXRvJyxcclxuICAgICcmID4gZGl2Jzoge1xyXG4gICAgICBweDogWzAsICcxNXB4JywgbnVsbCwgJzI1cHgnLCBudWxsLCAnMzBweCcsICc0MHB4JywgJzYwcHgnXSxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCwgQ29udGFpbmVyLCBGbGV4IH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgUHJpY2VDYXJkIGZyb20gJ2NvbXBvbmVudHMvcHJpY2UtY2FyZCc7XHJcbmltcG9ydCBTZWN0aW9uSGVhZGVyIGZyb20gJ2NvbXBvbmVudHMvc2VjdGlvbi1oZWFkZXInO1xyXG5pbXBvcnQgeyBJb0lvc0NoZWNrbWFya0NpcmNsZSwgSW9Jb3NDbG9zZUNpcmNsZSB9IGZyb20gJ3JlYWN0LWljb25zL2lvJztcclxuaW1wb3J0IFBhdHRlcm5CRyBmcm9tICdhc3NldHMvcGF0dGVybkJHLnBuZyc7XHJcblxyXG5jb25zdCBwYWNrYWdlcyA9IFtcclxuICB7XHJcbiAgICBuYW1lOiAnRnJlZSBQbGFuJyxcclxuICAgIGRlc2NyaXB0aW9uOiAnRm9yIFNtYWxsIHRlYW1zIG9yIG9mZmljZScsXHJcbiAgICBidXR0b25UZXh0OiAnU2lnbnVwIE5vdycsXHJcbiAgICBwb2ludHM6IFtcclxuICAgICAge1xyXG4gICAgICAgIGljb246IDxJb0lvc0NoZWNrbWFya0NpcmNsZSAvPixcclxuICAgICAgICB0ZXh0OiAnVWx0aW1hdGUgYWNjZXNzIHRvIGFsbCBjb3Vyc2UsIGV4ZXJjaXNlcyBhbmQgYXNzZXNzbWVudHMnLFxyXG4gICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWNvbjogPElvSW9zQ2hlY2ttYXJrQ2lyY2xlIC8+LFxyXG4gICAgICAgIHRleHQ6XHJcbiAgICAgICAgICAnRnJlZSBhY2Nlc3MgZm9yIGFsbCBraW5kIG9mIGV4ZXJjaXNlIGNvcnJlY3Rpb25zIHdpdGggZG93bmxvYWRzLicsXHJcbiAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpY29uOiA8SW9Jb3NDaGVja21hcmtDaXJjbGUgLz4sXHJcbiAgICAgICAgdGV4dDogJ1RvdGFsIGFzc2Vzc21lbnQgY29ycmVjdGlvbnMgd2l0aCBmcmVlIGRvd25sb2FkIGFjY2VzcyBzeXN0ZW0nLFxyXG4gICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWNvbjogPElvSW9zQ2xvc2VDaXJjbGUgLz4sXHJcbiAgICAgICAgdGV4dDogJ1VubGltaXRlZCBkb3dubG9hZCBvZiBjb3Vyc2VzIG9uIHRoZSBtb2JpbGUgYXBwIGNvbnRlbnRzJyxcclxuICAgICAgICBpc0F2YWlsYWJsZTogZmFsc2UsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpY29uOiA8SW9Jb3NDbG9zZUNpcmNsZSAvPixcclxuICAgICAgICB0ZXh0OiAnRG93bmxvYWQgYW5kIHByaW50IGNvdXJzZXMgYW5kIGV4ZXJjaXNlcyBpbiBQREYnLFxyXG4gICAgICAgIGlzQXZhaWxhYmxlOiBmYWxzZSxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBoZWFkZXI6ICdSZWNvbW1lbmRlZCcsXHJcbiAgICBuYW1lOiAnUHJlbWl1bScsXHJcbiAgICBkZXNjcmlwdGlvbjogJ0ZvciBzdGFydHVwIGVudGVycHJpc2UnLFxyXG4gICAgcHJpY2VXaXRoVW5pdDogJyQyOS45OS8nLFxyXG4gICAgYnV0dG9uVGV4dDogJ1NpZ251cCBOb3cnLFxyXG4gICAgcG9pbnRzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBpY29uOiA8SW9Jb3NDaGVja21hcmtDaXJjbGUgLz4sXHJcbiAgICAgICAgdGV4dDogJ1VsdGltYXRlIGFjY2VzcyB0byBhbGwgY291cnNlLCBleGVyY2lzZXMgYW5kIGFzc2Vzc21lbnRzJyxcclxuICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGljb246IDxJb0lvc0NoZWNrbWFya0NpcmNsZSAvPixcclxuICAgICAgICB0ZXh0OlxyXG4gICAgICAgICAgJ0ZyZWUgYWNjZXNzIGZvciBhbGwga2luZCBvZiBleGVyY2lzZSBjb3JyZWN0aW9ucyB3aXRoIGRvd25sb2Fkcy4nLFxyXG4gICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWNvbjogPElvSW9zQ2hlY2ttYXJrQ2lyY2xlIC8+LFxyXG4gICAgICAgIHRleHQ6ICdUb3RhbCBhc3Nlc3NtZW50IGNvcnJlY3Rpb25zIHdpdGggZnJlZSBkb3dubG9hZCBhY2Nlc3Mgc3lzdGVtJyxcclxuICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGljb246IDxJb0lvc0NoZWNrbWFya0NpcmNsZSAvPixcclxuICAgICAgICB0ZXh0OiAnVW5saW1pdGVkIGRvd25sb2FkIG9mIGNvdXJzZXMgb24gdGhlIG1vYmlsZSBhcHAgY29udGVudHMnLFxyXG4gICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWNvbjogPElvSW9zQ2hlY2ttYXJrQ2lyY2xlIC8+LFxyXG4gICAgICAgIHRleHQ6ICdEb3dubG9hZCBhbmQgcHJpbnQgY291cnNlcyBhbmQgZXhlcmNpc2VzIGluIFBERicsXHJcbiAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0ZyZWUgUGxhbicsXHJcbiAgICBkZXNjcmlwdGlvbjogJ0ZvciBTbWFsbCB0ZWFtcyBvciBvZmZpY2UnLFxyXG4gICAgYnV0dG9uVGV4dDogJ1NpZ251cCBOb3cnLFxyXG4gICAgcG9pbnRzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBpY29uOiA8SW9Jb3NDaGVja21hcmtDaXJjbGUgLz4sXHJcbiAgICAgICAgdGV4dDogJ1VsdGltYXRlIGFjY2VzcyB0byBhbGwgY291cnNlLCBleGVyY2lzZXMgYW5kIGFzc2Vzc21lbnRzJyxcclxuICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGljb246IDxJb0lvc0NoZWNrbWFya0NpcmNsZSAvPixcclxuICAgICAgICB0ZXh0OlxyXG4gICAgICAgICAgJ0ZyZWUgYWNjZXNzIGZvciBhbGwga2luZCBvZiBleGVyY2lzZSBjb3JyZWN0aW9ucyB3aXRoIGRvd25sb2Fkcy4nLFxyXG4gICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWNvbjogPElvSW9zQ2hlY2ttYXJrQ2lyY2xlIC8+LFxyXG4gICAgICAgIHRleHQ6ICdUb3RhbCBhc3Nlc3NtZW50IGNvcnJlY3Rpb25zIHdpdGggZnJlZSBkb3dubG9hZCBhY2Nlc3Mgc3lzdGVtJyxcclxuICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGljb246IDxJb0lvc0Nsb3NlQ2lyY2xlIC8+LFxyXG4gICAgICAgIHRleHQ6ICdVbmxpbWl0ZWQgZG93bmxvYWQgb2YgY291cnNlcyBvbiB0aGUgbW9iaWxlIGFwcCBjb250ZW50cycsXHJcbiAgICAgICAgaXNBdmFpbGFibGU6IGZhbHNlLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWNvbjogPElvSW9zQ2xvc2VDaXJjbGUgLz4sXHJcbiAgICAgICAgdGV4dDogJ0Rvd25sb2FkIGFuZCBwcmludCBjb3Vyc2VzIGFuZCBleGVyY2lzZXMgaW4gUERGJyxcclxuICAgICAgICBpc0F2YWlsYWJsZTogZmFsc2UsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbl07XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhY2thZ2UoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGlkPVwicHJpY2luZ1wiIHN4PXtzdHlsZXMucHJpY2luZ30+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPFNlY3Rpb25IZWFkZXJcclxuICAgICAgICAgIHRpdGxlPVwiTGV04oCZcyBzZWUgaG93IGl0IHdvcmtzXCJcclxuICAgICAgICAgIHNsb2dhbj1cIldoYXRzIHRoZSBmdW5jdGlvblwiXHJcbiAgICAgICAgICBpc1doaXRlPXt0cnVlfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEZsZXhcclxuICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICAgICAgZmxleFdyYXA6IFsnd3JhcCcsIG51bGwsIG51bGwsICdub3dyYXAnXSxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3BhY2thZ2VzLm1hcCgocGFja2FnZURhdGEpID0+IChcclxuICAgICAgICAgICAgPFByaWNlQ2FyZCBkYXRhPXtwYWNrYWdlRGF0YX0ga2V5PXtwYWNrYWdlRGF0YS5uYW1lfSAvPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9GbGV4PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgcHJpY2luZzoge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAncHJpbWFyeScsXHJcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtQYXR0ZXJuQkd9KWAsXHJcbiAgICBiYWNrZ3JvdW5kUmVwZWF0OiBgbm8tcmVwZWF0YCxcclxuICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlciBjZW50ZXInLFxyXG4gICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXHJcbiAgICBweTogWzgsIG51bGwsIDksIG51bGwsIG51bGwsIDEwXSxcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgJyY6OmJlZm9yZSc6IHtcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcclxuICAgICAgdG9wOiAwLFxyXG4gICAgICByaWdodDogMCxcclxuICAgICAgYmFja2dyb3VuZDpcclxuICAgICAgICAnbGluZWFyLWdyYWRpZW50KC00NWRlZywgcmdiYSg0Miw3MiwxMjUsIDAuMykgMjUlLCB0cmFuc3BhcmVudCAyNSUsIHRyYW5zcGFyZW50IDUwJSwgcmdiYSg0Miw3MiwxMjUsIDAuMykgNTAlLCByZ2JhKDQyLDcyLDEyNSwgMC4zKSA3NSUsIHRyYW5zcGFyZW50IDc1JSwgdHJhbnNwYXJlbnQpJyxcclxuICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgYmFja2dyb3VuZFNpemU6ICczNTBweCAzNTBweCcsXHJcbiAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICBvcGFjaXR5OiAwLjMsXHJcbiAgICAgIHpJbmRleDogMCxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCwgQ29udGFpbmVyLCBCb3ggfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCBUZXh0RmVhdHVyZSBmcm9tICdjb21wb25lbnRzL3RleHQtZmVhdHVyZSc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICdjb21wb25lbnRzL2ltYWdlJztcclxuXHJcbmltcG9ydCBQYXJ0bmVyIGZyb20gJ2Fzc2V0cy9wYXJ0bmVyLnBuZyc7XHJcblxyXG5jb25zdCBkYXRhID0ge1xyXG4gIHN1YlRpdGxlOiAnQ29yZSBmZWF0dXJlcycsXHJcbiAgdGl0bGU6ICdTbWFydCBKYWNrcG90cyB0aGF0IHlvdSBtYXkgbG92ZSB0aGlzIGFueXRpbWUgJiBhbnl3aGVyZScsXHJcbiAgZGVzY3JpcHRpb246XHJcbiAgICAnR2V0IHlvdXIgdGVzdHMgZGVsaXZlcmVkIGF0IGxldCBob21lIGNvbGxlY3Qgc2FtcGxlIGZyb20gdGhlIHZpY3Rvcnkgb2YgdGhlIG1hbmFnZW1lbnRzIHRoYXQgc3VwcGxpZXMgYmVzdCBkZXNpZ24gc3lzdGVtIGd1aWRlbGluZXMgZXZlci4gR2V0IHlvdXIgdGVzdHMgZGVsaXZlcmVkIGF0IGxldCBob21lIGNvbGxlY3Qgc2FtcGxlLicsXHJcbiAgYnRuTmFtZTogJ0dldCBTdGFydGVkJyxcclxuICBidG5VUkw6ICcjJyxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhcnRuZXJTZWN0aW9uKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBzeD17eyB2YXJpYW50OiAnc2VjdGlvbi5wYXJ0bmVyJyB9fT5cclxuICAgICAgPENvbnRhaW5lciBzeD17c3R5bGVzLmNvbnRhaW5lckJveH0+XHJcbiAgICAgICAgPEJveCBzeD17c3R5bGVzLmNvbnRlbnRCb3h9PlxyXG4gICAgICAgICAgPFRleHRGZWF0dXJlXHJcbiAgICAgICAgICAgIHN1YlRpdGxlPXtkYXRhLnN1YlRpdGxlfVxyXG4gICAgICAgICAgICB0aXRsZT17ZGF0YS50aXRsZX1cclxuICAgICAgICAgICAgZGVzY3JpcHRpb249e2RhdGEuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgIGJ0bk5hbWU9e2RhdGEuYnRuTmFtZX1cclxuICAgICAgICAgICAgYnRuVVJMPXtkYXRhLmJ0blVSTH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPEJveCBzeD17eyBweDogWzAsIG51bGwsICc0MHB4JywgMF0gfX0+XHJcbiAgICAgICAgICA8SW1hZ2Ugc3JjPXtQYXJ0bmVyfSBhbHQ9XCJQYXJ0bmVyXCIgLz5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGNvbnRhaW5lckJveDoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gICAgZmxleFdyYXA6IFsnd3JhcCcsIG51bGwsIG51bGwsICdub3dyYXAnXSxcclxuICB9LFxyXG4gIGNvbnRlbnRCb3g6IHtcclxuICAgIGZsZXhTaHJpbms6IDAsXHJcbiAgICBweDogWzAsIG51bGwsICczMHB4JywgMF0sXHJcbiAgICB0ZXh0QWxpZ246IFsnY2VudGVyJywgbnVsbCwgbnVsbCwgJ2xlZnQnXSxcclxuICAgIHdpZHRoOiBbJzEwMCUnLCA0NTAsIDU1MCwgJzM1MHB4JywgJzQxMHB4JywgJzQ4NXB4J10sXHJcbiAgICBteDogJ2F1dG8nLFxyXG4gICAgcGI6IFsnMzBweCcsIG51bGwsIG51bGwsIDBdLFxyXG4gICAgJy5kZXNjcmlwdGlvbic6IHtcclxuICAgICAgcHI6IFswLCBudWxsLCBudWxsLCBudWxsLCA0XSxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBCb3ggfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCBUZXh0RmVhdHVyZSBmcm9tICdjb21wb25lbnRzL3RleHQtZmVhdHVyZSc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICdjb21wb25lbnRzL2ltYWdlJztcclxuXHJcbmltcG9ydCBQYXltZW50VGh1bWIgZnJvbSAnYXNzZXRzL3BheW1lbnRUaHVtYi5wbmcnO1xyXG5pbXBvcnQgUGF5bWVudFBhdHRlcm4gZnJvbSAnYXNzZXRzL3BheW1lbnQtcGF0dGVybi5wbmcnO1xyXG5cclxuY29uc3QgZGF0YSA9IHtcclxuICBzdWJUaXRsZTogJ1BBWU1FTlQgU0VDVVJJVFknLFxyXG4gIHRpdGxlOiAnU2VjdXJlIFBheW1lbnQgVHJhbnNhY3Rpb24gU3lzdGVtIHdpdGggIzEgUmFua2luZycsXHJcbiAgZGVzY3JpcHRpb246XHJcbiAgICAnR2V0IHlvdXIgdGVzdHMgZGVsaXZlcmVkIGF0IGxldCBob21lIGNvbGxlY3Qgc2FtcGxlIGZyb20gdGhlIHZpY3Rvcnkgb2YgdGhlIG1hbmFnZW1lbnRzIHRoYXQgc3VwcGxpZXMgYmVzdCBkZXNpZ24gc3lzdGVtIGd1aWRlbGluZXMgZXZlci4gR2V0IHlvdXIgdGVzdHMgZGVsaXZlcmVkIGF0IGxldCBob21lIGNvbGxlY3Qgc2FtcGxlLicsXHJcbiAgYnRuTmFtZTogJ0xlYXJuIE1vcmUnLFxyXG4gIGJ0blVSTDogJyMnLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VjdXJlUGF5bWVudCgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gc3g9e3sgdmFyaWFudDogJ3NlY3Rpb24uc2VjdXJlUGF5bWVudCcgfX0+XHJcbiAgICAgIDxCb3ggc3g9e3N0eWxlcy5iZ092ZXJsYXl9IC8+XHJcbiAgICAgIDxDb250YWluZXIgc3g9e3N0eWxlcy5jb250YWluZXJCb3h9PlxyXG4gICAgICAgIDxCb3ggc3g9e3N0eWxlcy50aHVtYm5haWx9PlxyXG4gICAgICAgICAgPEltYWdlIHNyYz17UGF5bWVudFRodW1ifSBhbHQ9e2RhdGEudGl0bGV9IC8+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPEJveCBzeD17c3R5bGVzLmNvbnRlbnRCb3h9PlxyXG4gICAgICAgICAgPFRleHRGZWF0dXJlXHJcbiAgICAgICAgICAgIHN1YlRpdGxlPXtkYXRhLnN1YlRpdGxlfVxyXG4gICAgICAgICAgICB0aXRsZT17ZGF0YS50aXRsZX1cclxuICAgICAgICAgICAgZGVzY3JpcHRpb249e2RhdGEuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgIGJ0bk5hbWU9e2RhdGEuYnRuTmFtZX1cclxuICAgICAgICAgICAgYnRuVVJMPXtkYXRhLmJ0blVSTH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBiZ092ZXJsYXk6IHtcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgdG9wOiAwLFxyXG4gICAgcmlnaHQ6IDAsXHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgIHpJbmRleDogLTEsXHJcbiAgICB3aWR0aDogW1xyXG4gICAgICAnMTAwJScsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgICdjYWxjKDUwJSArIDQwMHB4KScsXHJcbiAgICAgICdjYWxjKDUwJSArIDQ4MHB4KScsXHJcbiAgICAgICdjYWxjKDUwJSArIDU3MHB4KScsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgICdjYWxjKDUwJSArIDYyNXB4KScsXHJcbiAgICBdLFxyXG4gICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7UGF5bWVudFBhdHRlcm59KWAsXHJcbiAgICBiYWNrZ3JvdW5kUmVwZWF0OiBgbm8tcmVwZWF0YCxcclxuICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ3RvcCBsZWZ0JyxcclxuICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxyXG4gIH0sXHJcbiAgY29udGFpbmVyQm94OiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCcsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gICAgZmxleFdyYXA6IFsnd3JhcCcsIG51bGwsIG51bGwsICdub3dyYXAnXSxcclxuICB9LFxyXG4gIHRodW1ibmFpbDoge1xyXG4gICAgbWI6IC0yLFxyXG4gICAgbWw6IFstNCwgJy00MHB4JywgbnVsbCwgbnVsbCwgMF0sXHJcbiAgICBvcmRlcjogWzIsIG51bGwsIG51bGwsIDBdLFxyXG4gICAgcHI6IFs2LCBudWxsLCA3LCAwXSxcclxuICB9LFxyXG4gIGNvbnRlbnRCb3g6IHtcclxuICAgIHdpZHRoOiBbJzEwMCUnLCA0MjAsIDQ4MCwgMzgwLCA1MDAsIDU3MF0sXHJcbiAgICBteDogJ2F1dG8nLFxyXG4gICAgZmxleFNocmluazogMCxcclxuICAgIHRleHRBbGlnbjogWydjZW50ZXInLCBudWxsLCBudWxsLCAnbGVmdCddLFxyXG4gICAgcHQ6IFswLCBudWxsLCBudWxsLCA0LCAnNTBweCcsIG51bGwsIDQsICc4MHB4J10sXHJcbiAgICBwbDogWzAsIG51bGwsIG51bGwsIDQwLCAnOTBweCddLFxyXG4gICAgcGI6IFs3LCBudWxsLCBudWxsLCA5XSxcclxuICAgIHByOiBbMCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgNl0sXHJcbiAgfSxcclxufTtcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCwgQ29udGFpbmVyLCBIZWFkaW5nLCBUZXh0LCBCb3gsIEltYWdlIH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgU2VjdGlvbkhlYWRlciBmcm9tICdjb21wb25lbnRzL3NlY3Rpb24taGVhZGVyJztcclxuaW1wb3J0IFJhdGluZyBmcm9tICdjb21wb25lbnRzL3JhdGluZyc7XHJcbmltcG9ydCBCdXR0b25Hcm91cCBmcm9tICdjb21wb25lbnRzL2J1dHRvbi1ncm91cCc7XHJcbmltcG9ydCBDYXJvdXNlbCBmcm9tICdyZWFjdC1tdWx0aS1jYXJvdXNlbCc7XHJcblxyXG5pbXBvcnQgQXZhdGFyMSBmcm9tICdhc3NldHMvdGVzdGltb25pYWwvYXZhdGFyMS5wbmcnO1xyXG5pbXBvcnQgQXZhdGFyMiBmcm9tICdhc3NldHMvdGVzdGltb25pYWwvYXZhdGFyMi5wbmcnO1xyXG5pbXBvcnQgQXZhdGFyMyBmcm9tICdhc3NldHMvdGVzdGltb25pYWwvYXZhdGFyMy5wbmcnO1xyXG5pbXBvcnQgQXZhdGFyNCBmcm9tICdhc3NldHMvdGVzdGltb25pYWwvYXZhdGFyNC5wbmcnO1xyXG5cclxuY29uc3QgZGF0YSA9IFtcclxuICB7XHJcbiAgICBpZDogMSxcclxuICAgIHRpdGxlOiAnTW9kZXJuIGxvb2sgJiB0cmVuZGluZyBkZXNpZ24nLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgICdcIkkgIGhhdmUgd29ya2VkIHdpdGggRGF2ZeKAmXMgQnJvdGhlcnMgVGVjaG5vbG9neSAsIEFzIGEgQW5kcm9pZCBEZXZlbG9wZXIgLiBBa2FzaCBEZXYgU2lyIEFsd2F5cyAgaGVscGVkICBtZSAgdG8gd2hlbmV2ZXIgIEkgd2FzIE5lZWRlZCAgdG8gTGVhcm4gbmV3IFRlY2hub2xvZ3kgRm9yICBUaGUgUHJvamVjdOKAmXMuIE15IFdvcmsgRXhwZXJpZW5jZSB3YXMgRXh0cmVtZWx5IEdvb2Qgd2l0aCBBa2FzaCBEYXZlIFNpci4gQWthc2ggIFNpciBBbHdheXMgQ2FyZSB0byBFbXBsb3llZXMgYW5kIGFzIHdlbGwgYXMgQ2xpZW50cy4gVGhleSBBbHdheXMgdHJ5IHRvIEZ1bGwgZmlsbCBhbGwgUmVxdWlyZW1lbnRzIG9mIHRoZSBDbGllbnRzLiBBa2FzaCBEYXZlIERvaW5nIEdyZWF0IFdvcmsuIOKAnScsXHJcbiAgICBhdmF0YXI6IEF2YXRhcjEsXHJcbiAgICBuYW1lOiAnS2Fsa2EgUHJhc2hhZCcsXHJcbiAgICBkZXNpZ25hdGlvbjogJ0BLYWxrYVByYXNoYWQnLFxyXG4gICAgcmV2aWV3OiA0LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDIsXHJcbiAgICB0aXRsZTogJ0Rlc2lnbiBRdWFsaXR5ICYgcGVyZm9ybWFuY2UnLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgICdEYXdheSBpcyBncmVhdCBwbGF0Zm9ybSB0byBsZWFybiB0ZWNobm9sb2dpZXMsIHBlb3BsZXMgd2hvIHdhbnQgdG8gbGVhcm4gcHJvZ3JhbW1pbmcgZnJvbSBzY3JhdGNoIHRoaXMgaXMgYSBhd2Vzb21lIHBsYXRmb3JtIHRoZW0gLHRoZXkgaW5zdXJlIHRoYXQgZXZlcnkgcGVyc29uIGNhbiBzdHVkeSBjb21mb3J0YWJseSBhY2NvcmRpbmcgdG8gdGhlaXIgcGFjZS4gSGlnaGx5IHJlY29tbWVuZGVkIGZvciBwZW9wbGUgd2hvIHdhbnQgdG8gc3RhcnQgdGhlaXIgY2FyZWVyIGluIElUJyxcclxuICAgIGF2YXRhcjogQXZhdGFyMixcclxuICAgIG5hbWU6ICdSaXNoaSBDaG91YmV5JyxcclxuICAgIGRlc2lnbmF0aW9uOiAnQFJpc2hpQ2hvdWJleScsXHJcbiAgICByZXZpZXc6IDUsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMyxcclxuICAgIHRpdGxlOiAnTGF5b3V0IGFuZCBvcmdhbml6ZWQgbGF5ZXJzJyxcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAnRGF3YXkgaXMgYSBiZXN0IHBsYXRmb3JtIGZvciBsZWFybmluZywgSW0gZG9pbmcgbXkgaW50ZXJuc2hpcCBmcm9tIGhlcmUgLCBNZW50b3JzIGFyZSByZWFkeSB0byBndWlkZVxcdGVjaCAgYW55IHRpbWUgd2hlbmV2ZXIgSSBzdHVjayBvbiBwZXJ0aWN1bGFyIHByb2JsZW0gLiBJbSBnZXR0aW5nIHRvIGxlYXJuICBuZXcgdGVjaG5vbG9naWVzIGluIGEgcGVyZmVjdCBtYW5uZXIgd2l0aCBwZXJmZWN0IHR1dG9ycyAsIEFsb25nIHdpdGggdGVhY2hpbmcgdGhleSBhbHNvIG1vdGl2YXRlcyB1cywgIHRvIGNyZWF0ZSBhIGN1cmlvc2l0eSB0byBsZWFybiAgbW9yZS4nLFxyXG4gICAgYXZhdGFyOiBBdmF0YXIzLFxyXG4gICAgbmFtZTogJ0d5YXRyaSBUaXdhcmknLFxyXG4gICAgZGVzaWduYXRpb246ICdAR3lhdHJpVGl3YXJpJyxcclxuICAgIHJldmlldzogNSxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA0LFxyXG4gICAgdGl0bGU6ICdNb2Rlcm4gbG9vayAmIHRyZW5kaW5nIGRlc2lnbicsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgJyBsZWFybmVkIGEgbG90IGluIERhd2F5LiAgd2l0aCBkb2luZyBzZWxmIHN0dWR5LCBJIGFsc28gZ2V0IHRoZSBndWlkYW5jZSBvZiB0ZWFjaGVycyB3aGljaCBpcyB2ZXJ5IGhlbHBmdWwuJyxcclxuICAgIGF2YXRhcjogQXZhdGFyNCxcclxuICAgIG5hbWU6ICdhamVldGEgU2FodScsXHJcbiAgICBkZXNpZ25hdGlvbjogJ0BhamVldGFTYWh1JyxcclxuICAgIHJldmlldzogNCxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA1LFxyXG4gICAgdGl0bGU6ICdNb2Rlcm4gbG9vayAmIHRyZW5kaW5nIGRlc2lnbicsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgJyBJIGFtIHdvcmtpbmcgYXMgYSBpbnRlcm4gaW4gZGF3YXkgdGVjaG5vbG9neSBmb3JtIGxhc3QgMyBtb250aHMgYW5kIGhlcmUgaXMgc29tZSBwb2ludHMgYWJvdXQgbXkgaW50ZXJuc2hpcCBleHBlcmllbmNlLlRoZXkgbW9yZSBmb2N1cyBvbiBzZWxmIGxlYXJuaW5nIHJhdGhlciB0aGVuIGp1c3QgdGVhY2hpbmcgb3IgZXhwbGFpbmluZyB0b3BpY3MuVGhleSBoZWxwIHRvIHVwZ3JhZGUgcHJvZ3JhbW1pbmcgbG9naWNzICBUaGV5IGltcHJvdmVkIG15IERlc2lnbmluZyBza2lsbHMuIFRyYWluZXIgYW5kIGZlbGxvdyBpbnRlcm5zIGFyZSBhbHNvIHZlcnkgaGVscGZ1bCBhbmQga2luZC4nXHJcbiAgICwgYXZhdGFyOiBBdmF0YXI0LFxyXG4gICAgbmFtZTogJ0Fha2Fuc2hhIFNhaHUnLFxyXG4gICAgZGVzaWduYXRpb246ICdAQWFrYW5zaGFTYWh1JyxcclxuICAgIHJldmlldzogNSxcclxuICB9LFxyXG5dO1xyXG5cclxuY29uc3QgcmVzcG9uc2l2ZSA9IHtcclxuICBkZXNrdG9wOiB7XHJcbiAgICBicmVha3BvaW50OiB7IG1heDogMzAwMCwgbWluOiAxNjE5IH0sXHJcbiAgICBpdGVtczogNCxcclxuICAgIHNsaWRlc1RvU2xpZGU6IDQsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IHRvIDEuXHJcbiAgfSxcclxuICBsYXB0b3A6IHtcclxuICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiAxNjE5LCBtaW46IDEwMjQgfSxcclxuICAgIGl0ZW1zOiAzLFxyXG4gICAgc2xpZGVzVG9TbGlkZTogMywgLy8gb3B0aW9uYWwsIGRlZmF1bHQgdG8gMS5cclxuICB9LFxyXG4gIHRhYmxldDoge1xyXG4gICAgYnJlYWtwb2ludDogeyBtYXg6IDEwMjQsIG1pbjogNjQwIH0sXHJcbiAgICBpdGVtczogMixcclxuICAgIHNsaWRlc1RvU2xpZGU6IDIsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IHRvIDEuXHJcbiAgfSxcclxuICBtb2JpbGU6IHtcclxuICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiA2MzksIG1pbjogMCB9LFxyXG4gICAgaXRlbXM6IDEsXHJcbiAgICBzbGlkZXNUb1NsaWRlOiAxLCAvLyBvcHRpb25hbCwgZGVmYXVsdCB0byAxLlxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZXN0aW1vbmlhbENhcmQoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGlkPVwidGVzdGltb25pYWxcIiBzeD17eyB2YXJpYW50OiAnc2VjdGlvbi50ZXN0aW1vbmlhbCcgfX0+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPFNlY3Rpb25IZWFkZXIgc2xvZ2FuPVwiVGVzdGltb25pYWxcIiB0aXRsZT1cIldIQVQgT1VSIFNUVURFTlRTIFNBWSBBQk9VVCBVU1wiIC8+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8Qm94IHN4PXtzdHlsZXMuY2Fyb3VzZWxXcmFwcGVyfT5cclxuICAgICAgICA8Q2Fyb3VzZWxcclxuICAgICAgICBhdXRvUGxheT17dHJ1ZX1cclxuICAgICAgICAgIGFkZGl0aW9uYWxUcmFuc2Zyb209ezB9XHJcbiAgICAgICAgICBhcnJvd3M9e2ZhbHNlfVxyXG4gICAgICAgICAgYXV0b1BsYXlTcGVlZD17MzAwMH1cclxuICAgICAgICAgIGNlbnRlck1vZGU9e2ZhbHNlfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiXCJcclxuICAgICAgICAgIGNvbnRhaW5lckNsYXNzPVwiY2Fyb3VzZWwtY29udGFpbmVyXCJcclxuICAgICAgICAgIGN1c3RvbUJ1dHRvbkdyb3VwPXs8QnV0dG9uR3JvdXAgLz59XHJcbiAgICAgICAgICBkb3RMaXN0Q2xhc3M9XCJcIlxyXG4gICAgICAgICAgZHJhZ2dhYmxlXHJcbiAgICAgICAgICBmb2N1c09uU2VsZWN0PXtmYWxzZX1cclxuICAgICAgICAgIGluZmluaXRlPXt0cnVlfVxyXG4gICAgICAgICAgaXRlbUNsYXNzPVwiXCJcclxuICAgICAgICAgIGtleUJvYXJkQ29udHJvbFxyXG4gICAgICAgICAgbWluaW11bVRvdWNoRHJhZz17ODB9XHJcbiAgICAgICAgICByZW5kZXJCdXR0b25Hcm91cE91dHNpZGVcclxuICAgICAgICAgIHJlbmRlckRvdHNPdXRzaWRlPXtmYWxzZX1cclxuICAgICAgICAgIHJlc3BvbnNpdmU9e3Jlc3BvbnNpdmV9XHJcbiAgICAgICAgICBzaG93RG90cz17ZmFsc2V9XHJcbiAgICAgICAgICBzbGlkZXJDbGFzcz1cIlwiXHJcbiAgICAgICAgICBzbGlkZXNUb1NsaWRlPXsxfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtkYXRhLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMucmV2aWV3Q2FyZH0ga2V5PXtgdGVzdGltb25pYWwtLWtleSR7aXRlbS5pZH1gfT5cclxuICAgICAgICAgICAgICA8UmF0aW5nIHJhdGluZz17aXRlbS5yZXZpZXd9IC8+XHJcbiAgICAgICAgICAgICAgPEhlYWRpbmcgYXM9XCJoM1wiIHN4PXtzdHlsZXMudGl0bGV9PlxyXG4gICAgICAgICAgICAgICAge2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICAgICAgICAgIDxUZXh0IHN4PXtzdHlsZXMuZGVzY3JpcHRpb259PntpdGVtLmRlc2NyaXB0aW9ufTwvVGV4dD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2l0ZW0uYXZhdGFyfSBhbHQ9XCJDbGllbnQgSW1hZ2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJldmlld2VyLWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgPEhlYWRpbmcgYXM9XCJoNFwiIHN4PXtzdHlsZXMuaGVhZGluZ30+XHJcbiAgICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICAgICAgICAgICAgICA8VGV4dCBzeD17c3R5bGVzLmRlc2lnbmF0aW9ufT57aXRlbS5kZXNpZ25hdGlvbn08L1RleHQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L0Nhcm91c2VsPlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgY2Fyb3VzZWxXcmFwcGVyOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgYWxpZ25JdGVtczogJ2ZsZXgtZW5kJyxcclxuICAgIG10OiAnLTM1cHgnLFxyXG4gICAgcHg6ICcxNXB4JyxcclxuICAgICcuY2Fyb3VzZWwtY29udGFpbmVyJzoge1xyXG4gICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICBtYXhXaWR0aDogW1xyXG4gICAgICAgICcxMDAlJyxcclxuICAgICAgICBudWxsLFxyXG4gICAgICAgIG51bGwsXHJcbiAgICAgICAgJzc1MHB4JyxcclxuICAgICAgICAnMTAwMHB4JyxcclxuICAgICAgICAnMTE4MHB4JyxcclxuICAgICAgICBudWxsLFxyXG4gICAgICAgICdjYWxjKDUwJSArIDg2NXB4KScsXHJcbiAgICAgIF0sXHJcbiAgICAgIG1yOiBbJ2F1dG8nLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAnLTIyMHB4J10sXHJcbiAgICAgIG1sOiAnYXV0bycsXHJcbiAgICAgICcucmVhY3QtbXVsdGktY2Fyb3VzZWwtaXRlbSc6IHtcclxuICAgICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuMjVzJyxcclxuICAgICAgfSxcclxuICAgICAgJy5yZWFjdC1tdWx0aS1jYXJvdXNlbC1pdGVtLS1hY3RpdmU6bnRoLW9mLXR5cGUoNG4pJzoge1xyXG4gICAgICAgIG9wYWNpdHk6ICcwLjUnLFxyXG4gICAgICAgICdAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjIwcHgpJzoge1xyXG4gICAgICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHJldmlld0NhcmQ6IHtcclxuICAgIGJveFNoYWRvdzogJzBweCAwcHggMXB4IHJnYmEoMzgsIDc4LCAxMTgsIDAuMzUpJyxcclxuICAgIHRyYW5zaXRpb246ICdhbGwgMC4zcycsXHJcbiAgICBib3JkZXJSYWRpdXM6ICc2cHgnLFxyXG4gICAgcDogW1xyXG4gICAgICAnMzBweCAyMHB4IDM1cHgnLFxyXG4gICAgICAnMzBweCAyNXB4IDM1cHgnLFxyXG4gICAgICAnMzBweCAyMHB4IDM1cHgnLFxyXG4gICAgICAnMzVweCAzMHB4IDQwcHggNDBweCcsXHJcbiAgICAgICczMHB4IDMwcHggMzVweCcsXHJcbiAgICAgICczNXB4IDMwcHggNDBweCA0MHB4JyxcclxuICAgIF0sXHJcbiAgICBiZzogJ3doaXRlJyxcclxuICAgIHRleHRBbGlnbjogJ2xlZnQnLFxyXG4gICAgbTogW1xyXG4gICAgICAnMjhweCA1cHggMzBweCA1cHgnLFxyXG4gICAgICAnMjhweCAyMHB4IDMwcHggMjBweCcsXHJcbiAgICAgICcyOHB4IDE1cHggMzBweCAxNXB4JyxcclxuICAgICAgJzI4cHggMTVweCAzMHB4IDE1cHgnLFxyXG4gICAgICAnMzBweCAyMHB4IDQwcHgnLFxyXG4gICAgXSxcclxuICAgICcmOmhvdmVyJzoge1xyXG4gICAgICBib3hTaGFkb3c6ICcwcHggNnB4IDQ3cHggcmdiYSgzOCwgNzgsIDExOCwgMC4xKScsXHJcbiAgICB9LFxyXG4gICAgJy5yYXRpbmcnOiB7XHJcbiAgICAgIG1iOiBbMSwgbnVsbCwgbnVsbCwgMl0sXHJcbiAgICAgIHVsOiB7XHJcbiAgICAgICAgcGw6IDAsXHJcbiAgICAgICAgbGlzdFN0eWxlOiAnbm9uZScsXHJcbiAgICAgICAgbWI6IDAsXHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICB9LFxyXG4gICAgICBzdmc6IHtcclxuICAgICAgICBtYXJnaW5SaWdodDogJzJweCcsXHJcbiAgICAgICAgJyY6bGFzdC1vZi10eXBlJzoge1xyXG4gICAgICAgICAgbWFyZ2luUmlnaHQ6IDAsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgJy5zdGFyJzoge1xyXG4gICAgICAgIGNvbG9yOiAneWVsbG93JyxcclxuICAgICAgICBtcjogJzFweCcsXHJcbiAgICAgIH0sXHJcbiAgICAgICcuc3Rhci1vJzoge1xyXG4gICAgICAgIGNvbG9yOiAnI2RkZCcsXHJcbiAgICAgICAgbXI6ICcxcHgnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgICcuY2FyZC1mb290ZXInOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgIG1hcmdpblRvcDogWzUsIG51bGwsIG51bGwsICczM3B4J10sXHJcbiAgICAgICcuaW1hZ2UnOiB7XHJcbiAgICAgICAgZmxleFNocmluazogMCxcclxuICAgICAgICBtcjogWzMsIG51bGwsIG51bGwsIDRdLFxyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBpbWc6IHtcclxuICAgICAgICAgIHdpZHRoOiAnNTVweCcsXHJcbiAgICAgICAgICBoZWlnaHQ6ICc1NXB4JyxcclxuICAgICAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXHJcbiAgICAgICAgICBvYmplY3RGaXQ6ICdjb3ZlcicsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICB0aXRsZToge1xyXG4gICAgZm9udFNpemU6IFsxLCAyXSxcclxuICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICAgIG1iOiBbMywgbnVsbCwgbnVsbCwgJzIycHgnXSxcclxuICAgIGNvbG9yOiAndGV4dCcsXHJcbiAgICBsaW5lSGVpZ2h0OiAxLjYsXHJcbiAgfSxcclxuICBkZXNjcmlwdGlvbjoge1xyXG4gICAgZm9udFNpemU6IFsxLCBudWxsLCBudWxsLCAyXSxcclxuICAgIGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxyXG4gICAgY29sb3I6ICd0ZXh0JyxcclxuICAgIGxpbmVIZWlnaHQ6IFsxLjg1LCBudWxsLCAyXSxcclxuICB9LFxyXG4gIGhlYWRpbmc6IHtcclxuICAgIGZvbnRTaXplOiBbMSwgbnVsbCwgbnVsbCwgMl0sXHJcbiAgICBmb250V2VpZ2h0OiA3MDAsXHJcbiAgICBtYjogJzNweCcsXHJcbiAgICBjb2xvcjogJ3RleHQnLFxyXG4gICAgbGluZUhlaWdodDogMS4zLFxyXG4gIH0sXHJcbiAgZGVzaWduYXRpb246IHtcclxuICAgIGNvbG9yOiAnIzI1QTBGRicsXHJcbiAgICBmb250V2VpZ2h0OiAnNTAwJyxcclxuICAgIGZvbnRTaXplOiAxLFxyXG4gICAgbGluZUhlaWdodDogMS40LFxyXG4gIH0sXHJcbn07XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3ggfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgR3JpZCwgQm94LCBIZWFkaW5nLCBUZXh0IH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgU2VjdGlvbkhlYWRlciBmcm9tICdjb21wb25lbnRzL3NlY3Rpb24taGVhZGVyJztcclxuXHJcbmltcG9ydCBQYXR0ZXJuQkcgZnJvbSAnYXNzZXRzL3BhdHRlcm5CRy5wbmcnO1xyXG5pbXBvcnQgQXJyb3dPZGQgZnJvbSAnYXNzZXRzL2Fycm93T2RkLnBuZyc7XHJcbmltcG9ydCBBcnJvd0V2ZW4gZnJvbSAnYXNzZXRzL2Fycm93RXZlbi5wbmcnO1xyXG5cclxuY29uc3QgZGF0YSA9IFtcclxuICB7XHJcbiAgICBpZDogMSxcclxuICAgIHRpdGxlOiAnU2V0IGRpc2J1cnNlbWVudCBJbnN0cnVjdGlvbnMnLFxyXG4gICAgdGV4dDpcclxuICAgICAgJ0dldCB5b3VyIGJsb29kIHRlc3RzIGRlbGl2ZXJlZCBhdCBob21lIGNvbGxlY3QgYSBzYW1wbGUgZnJvbSB0aGUgeW91ciBibG9vZCB0ZXN0cy4nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDIsXHJcbiAgICB0aXRsZTogJ0Fzc2VtYmx5IHJldHJpZXZlcyBmdW5kcyBmcm9tIHlvdXIgYWNjb3VudCcsXHJcbiAgICB0ZXh0OlxyXG4gICAgICAnR2V0IHlvdXIgYmxvb2QgdGVzdHMgZGVsaXZlcmVkIGF0IGhvbWUgY29sbGVjdCBhIHNhbXBsZSBmcm9tIHRoZSB5b3VyIGJsb29kIHRlc3RzLicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMyxcclxuICAgIHRpdGxlOiAnQXNzZW1ibHkgaW5pdGlhdGVzIGRpc2J1cnNlbWVudCcsXHJcbiAgICB0ZXh0OlxyXG4gICAgICAnR2V0IHlvdXIgYmxvb2QgdGVzdHMgZGVsaXZlcmVkIGF0IGhvbWUgY29sbGVjdCBhIHNhbXBsZSBmcm9tIHRoZSB5b3VyIGJsb29kIHRlc3RzLicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNCxcclxuICAgIHRpdGxlOiAnQ3VzdG9tZXIgcmVjZWl2ZXMgZnVuZHMgcGF5bWVudCcsXHJcbiAgICB0ZXh0OlxyXG4gICAgICAnR2V0IHlvdXIgYmxvb2QgdGVzdHMgZGVsaXZlcmVkIGF0IGhvbWUgY29sbGVjdCBhIHNhbXBsZSBmcm9tIHRoZSB5b3VyIGJsb29kIHRlc3RzLicsXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdvcmtGbG93KCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBzeD17c3R5bGVzLndvcmtmbG93fT5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8U2VjdGlvbkhlYWRlclxyXG4gICAgICAgICAgc2xvZ2FuPVwiV2hhdHMgdGhlIGZ1bmN0aW9uXCJcclxuICAgICAgICAgIHRpdGxlPVwiTGV04oCZcyBzZWUgaG93IGl0IHdvcmtzXCJcclxuICAgICAgICAgIGlzV2hpdGU9e3RydWV9XHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPEdyaWQgc3g9e3N0eWxlcy5ncmlkfT5cclxuICAgICAgICAgIHtkYXRhLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMuY2FyZH0ga2V5PXtpdGVtLmlkfT5cclxuICAgICAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMuaWNvbkJveH0+e2AwJHtpdGVtLmlkfWB9PC9Cb3g+XHJcbiAgICAgICAgICAgICAgPEJveCBzeD17c3R5bGVzLndyYXBwZXJ9PlxyXG4gICAgICAgICAgICAgICAgPEhlYWRpbmcgc3g9e3N0eWxlcy53cmFwcGVyLnRpdGxlfT57aXRlbS50aXRsZX08L0hlYWRpbmc+XHJcbiAgICAgICAgICAgICAgICA8VGV4dCBzeD17c3R5bGVzLndyYXBwZXIuc3ViVGl0bGV9PntpdGVtLnRleHR9PC9UZXh0PlxyXG4gICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIHdvcmtmbG93OiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdwcmltYXJ5JyxcclxuICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke1BhdHRlcm5CR30pYCxcclxuICAgIGJhY2tncm91bmRSZXBlYXQ6IGBuby1yZXBlYXRgLFxyXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyIGNlbnRlcicsXHJcbiAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgcHk6IFs4LCBudWxsLCA5LCBudWxsLCBudWxsLCAxMF0sXHJcbiAgICAnJjo6YmVmb3JlJzoge1xyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgY29udGVudDogJ1wiXCInLFxyXG4gICAgICB0b3A6IDAsXHJcbiAgICAgIHJpZ2h0OiAwLFxyXG4gICAgICBiYWNrZ3JvdW5kOlxyXG4gICAgICAgICdsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCByZ2JhKDQyLDcyLDEyNSwgMC4zKSAyNSUsIHRyYW5zcGFyZW50IDI1JSwgdHJhbnNwYXJlbnQgNTAlLCByZ2JhKDQyLDcyLDEyNSwgMC4zKSA1MCUsIHJnYmEoNDIsNzIsMTI1LCAwLjMpIDc1JSwgdHJhbnNwYXJlbnQgNzUlLCB0cmFuc3BhcmVudCknLFxyXG4gICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICBiYWNrZ3JvdW5kU2l6ZTogJzM1MHB4IDM1MHB4JyxcclxuICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgIG9wYWNpdHk6IDAuMyxcclxuICAgICAgekluZGV4OiAwLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGdyaWQ6IHtcclxuICAgIG1iOiAtMSxcclxuICAgIHB0OiAwLFxyXG4gICAgZ3JpZEdhcDogW1xyXG4gICAgICAnMzVweCAwJyxcclxuICAgICAgbnVsbCxcclxuICAgICAgJzQ1cHggNTBweCcsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgICc1MHB4IDI1cHgnLFxyXG4gICAgICBudWxsLFxyXG4gICAgICBudWxsLFxyXG4gICAgICAnNTBweCA2NXB4JyxcclxuICAgIF0sXHJcbiAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBbXHJcbiAgICAgICdyZXBlYXQoMSwxZnIpJyxcclxuICAgICAgbnVsbCxcclxuICAgICAgJ3JlcGVhdCgyLDFmciknLFxyXG4gICAgICBudWxsLFxyXG4gICAgICAncmVwZWF0KDQsMWZyKScsXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAgY2FyZDoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIHRleHRBbGlnbjogWydjZW50ZXInLCBudWxsLCAnbGVmdCddLFxyXG4gICAgd2lkdGg6IFsnMTAwJScsICc4MCUnLCAnMTAwJSddLFxyXG4gICAgbXg6ICdhdXRvJyxcclxuICAgICcmOjpiZWZvcmUnOiB7XHJcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICBjb250ZW50OiAnXCJcIicsXHJcbiAgICAgIHRvcDogMCxcclxuICAgICAgbGVmdDogWzAsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDc1LCBudWxsLCAxMDBdLFxyXG4gICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBgbm8tcmVwZWF0YCxcclxuICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyIGNlbnRlcicsXHJcbiAgICAgIHdpZHRoOiAyMTUsXHJcbiAgICAgIGhlaWdodDogNjAsXHJcbiAgICAgIG9wYWNpdHk6IDAuMyxcclxuICAgICAgJ0BtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTIyMHB4KSc6IHtcclxuICAgICAgICBkaXNwbGF5OiAnbm9uZScsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgJyY6bnRoLW9mLXR5cGUoMm4tMSk6OmJlZm9yZSc6IHtcclxuICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7QXJyb3dPZGR9KWAsXHJcbiAgICB9LFxyXG4gICAgJyY6bnRoLW9mLXR5cGUoMm4pOjpiZWZvcmUnOiB7XHJcbiAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke0Fycm93RXZlbn0pYCxcclxuICAgICAgdG9wOiAxNyxcclxuICAgIH0sXHJcbiAgICAnJjpsYXN0LWNoaWxkOjpiZWZvcmUnOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdub25lJyxcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgaWNvbkJveDoge1xyXG4gICAgd2lkdGg6IFsnNTBweCcsIG51bGwsICc2MHB4JywgbnVsbCwgbnVsbCwgJzcwcHgnXSxcclxuICAgIGhlaWdodDogWyc1MHB4JywgbnVsbCwgJzYwcHgnLCBudWxsLCBudWxsLCAnNzBweCddLFxyXG4gICAgZmxleFNocmluazogMCxcclxuICAgIGJvcmRlclJhZGl1czogWzE1LCBudWxsLCAyMywgbnVsbCwgbnVsbCwgMzBdLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBtYjogWzUsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDZdLFxyXG4gICAgbXg6IFsnYXV0bycsIG51bGwsIDBdLFxyXG4gICAgZm9udFNpemU6IFs2LCBudWxsLCA3LCBudWxsLCBudWxsLCAnMzBweCddLFxyXG4gICAgZm9udFdlaWdodDogNzAwLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgY29sb3I6ICcjMjM0NTgyJyxcclxuICB9LFxyXG4gIHdyYXBwZXI6IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIG10OiAnLTVweCcsXHJcbiAgICB0aXRsZToge1xyXG4gICAgICBmb250U2l6ZTogWzMsIG51bGwsIDQsIG51bGwsIG51bGwsIDVdLFxyXG4gICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgbGluZUhlaWdodDogWzEuNCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgMS41NV0sXHJcbiAgICAgIHByOiBbMCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgMl0sXHJcbiAgICAgIG1iOiBbMiwgM10sXHJcbiAgICB9LFxyXG5cclxuICAgIHN1YlRpdGxlOiB7XHJcbiAgICAgIGZvbnRTaXplOiAxLFxyXG4gICAgICBmb250V2VpZ2h0OiA0MDAsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IFsxLjg1LCBudWxsLCBudWxsLCAxLjksIDJdLFxyXG4gICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgb3BhY2l0eTogMC42NSxcclxuICAgICAgcHI6IFswLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCA1XSxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gIC8vIGV4YW1wbGUgY29sb3JzIHdpdGggZGFyayBtb2RlXHJcbiAgY29sb3JzOiB7XHJcbiAgICB0ZXh0OiAnIzM0M0Q0OCcsIC8vIGJvZHkgY29sb3IgYW5kIHByaW1hcnkgY29sb3JcclxuICAgIHRleHRfc2Vjb25kYXJ5OiAnIzAyMDczRScsIC8vIHNlY29uZGFyeSBib2R5IGNvbG9yXHJcbiAgICBoZWFkaW5nOiAnIzI0NDg4NicsIC8vIHByaW1hcnkgaGVhZGluZyBjb2xvclxyXG4gICAgaGVhZGluZ19zZWNvbmRhcnk6ICcjMEYyMTM3JywgLy8gaGVhZGluZyBjb2xvclxyXG4gICAgYmFja2dyb3VuZDogJyNGRkZGRkYnLCAvLyBib2R5IGJhY2tncm91bmQgY29sb3JcclxuICAgIGJhY2tncm91bmRfc2Vjb25kYXJ5OiAnI0Y5RkJGRCcsIC8vIHNlY29uZGFyeSBiYWNrZ3JvdW5kIGNvbG9yXHJcbiAgICBib3JkZXJfY29sb3I6ICcjRTVFQ0Y0JywgLy8gYm9yZGVyIGNvbG9yXHJcbiAgICBwcmltYXJ5OiAnIzFGM0U3NicsIC8vIHByaW1hcnkgYnV0dG9uIGFuZCBsaW5rIGNvbG9yXHJcbiAgICBzZWNvbmRhcnk6ICcjMjVDQjlFJywgLy8gc2Vjb25kYXJ5IGNvbG9yIC0gY2FuIGJlIHVzZWQgZm9yIGhvdmVyIHN0YXRlc1xyXG4gICAgbXV0ZWQ6ICcjN0I4MTg4JywgLy8gbXV0ZWQgY29sb3JcclxuICAgIGFjY2VudDogJyM2MDknLCAvLyBhIGNvbnRyYXN0IGNvbG9yIGZvciBlbXBoYXNpemluZyBVSVxyXG4gICAgeWVsbG93OiAnI0Y2QzQxNicsXHJcblxyXG4gICAgLy8gaGlnaGxpZ2h0XHRhIGJhY2tncm91bmQgY29sb3IgZm9yIGhpZ2hsaWdodGluZyB0ZXh0XHJcbiAgICBtb2Rlczoge1xyXG4gICAgICBkYXJrOiB7XHJcbiAgICAgICAgdGV4dDogJyNmZmYnLFxyXG4gICAgICAgIGJhY2tncm91bmQ6ICcjMDAwJyxcclxuICAgICAgICBwcmltYXJ5OiAnIzBjZicsXHJcbiAgICAgICAgc2Vjb25kYXJ5OiAnIzA5YycsXHJcbiAgICAgICAgbXV0ZWQ6ICcjMTExJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBicmVha3BvaW50czogW1xyXG4gICAgJzQ4MHB4JyxcclxuICAgICc2NDBweCcsXHJcbiAgICAnNzY4cHgnLFxyXG4gICAgJzEwMjRweCcsXHJcbiAgICAnMTIyMHB4JyxcclxuICAgICcxMzY2cHgnLFxyXG4gICAgJzE2MjBweCcsXHJcbiAgXSxcclxuICBmb250czoge1xyXG4gICAgYm9keTogXCInRE0gU2FucycsIHNhbnMtc2VyaWZcIixcclxuICAgIGhlYWRpbmc6IFwiJ0RNIFNhbnMnLCBzYW5zLXNlcmlmXCIsXHJcbiAgfSxcclxuICBmb250U2l6ZXM6IFsxMiwgMTUsIDE2LCAxOCwgMjAsIDIyLCAyNCwgMjgsIDMyLCAzNiwgNDIsIDQ4LCA1MiwgNjRdLFxyXG4gIGZvbnRXZWlnaHRzOiB7XHJcbiAgICBib2R5OiAnbm9ybWFsJyxcclxuICAgIGhlYWRpbmc6IDUwMCxcclxuICAgIGJvbGQ6IDcwMCxcclxuICB9LFxyXG4gIGxpbmVIZWlnaHRzOiB7XHJcbiAgICBib2R5OiAxLjgsXHJcbiAgICBoZWFkaW5nOiAxLjUsXHJcbiAgfSxcclxuICBsZXR0ZXJTcGFjaW5nczoge1xyXG4gICAgYm9keTogJ25vcm1hbCcsXHJcbiAgICBjYXBzOiAnMC4yZW0nLFxyXG4gICAgaGVhZGluZzogJy0wLjVweCcsXHJcbiAgfSxcclxuICBzcGFjZTogWzAsIDUsIDEwLCAxNSwgMjAsIDI1LCAzMCwgNTAsIDgwLCAxMDAsIDEyMCwgMTUwXSxcclxuICAvLyB2YXJpYW50cyBjYW4gdXNlIGN1c3RvbSwgdXNlci1kZWZpbmVkIG5hbWVzXHJcbiAgbGF5b3V0OiB7XHJcbiAgICBjb250YWluZXI6IHtcclxuICAgICAgbWF4V2lkdGg6IFtcclxuICAgICAgICAnMTAwJScsXHJcbiAgICAgICAgbnVsbCxcclxuICAgICAgICBudWxsLFxyXG4gICAgICAgICc3ODBweCcsXHJcbiAgICAgICAgJzEwMjBweCcsXHJcbiAgICAgICAgJzEyMDBweCcsXHJcbiAgICAgICAgbnVsbCxcclxuICAgICAgICAnMTMxMHB4JyxcclxuICAgICAgXSxcclxuICAgICAgcHg6IFs0LCA2XSxcclxuICAgIH0sXHJcbiAgICBoZWFkZXI6IHtcclxuICAgICAgY29sb3I6ICcjMDIwNzNFJyxcclxuICAgICAgZm9udFdlaWdodDogJ25vcm1hbCcsXHJcbiAgICAgIHB5OiAzLFxyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIH0sXHJcbiAgICB0b29sYmFyOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXHJcbiAgICB9LFxyXG4gICAgbWFpbjoge30sXHJcbiAgfSxcclxuICBzZWN0aW9uOiB7XHJcbiAgICBrZXlGZWF0dXJlOiB7XHJcbiAgICAgIHB5OiBbOCwgbnVsbCwgOSwgbnVsbCwgbnVsbCwgMTBdLFxyXG4gICAgfSxcclxuICAgIGZlYXR1cmU6IHtcclxuICAgICAgcHk6IFs4LCBudWxsLCA5LCBudWxsLCBudWxsLCAxMF0sXHJcbiAgICB9LFxyXG4gICAgcGFydG5lcjoge1xyXG4gICAgICBwdDogWzIsIG51bGwsIG51bGwsIDVdLFxyXG4gICAgICBwYjogWzgsIG51bGwsIDksIG51bGwsIG51bGwsIDEwXSxcclxuICAgIH0sXHJcbiAgICB0ZXN0aW1vbmlhbDoge1xyXG4gICAgICBweTogWzgsIG51bGwsIDksIG51bGwsIG51bGwsIDEwXSxcclxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxyXG4gICAgfSxcclxuICAgIHNlY3VyZVBheW1lbnQ6IHtcclxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxyXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgcHQ6IDksXHJcbiAgICB9LFxyXG4gICAgZmFxOiB7XHJcbiAgICAgIHB5OiBbOCwgbnVsbCwgOSwgbnVsbCwgbnVsbCwgMTBdLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHNlY3Rpb25IZWFkZXI6IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgbXQ6IC0xLFxyXG4gICAgbWFyZ2luQm90dG9tOiBbJzUwcHgnLCBudWxsLCAnNjBweCcsIG51bGwsICc2NXB4JywgJzc1cHgnXSxcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgIGZvbnRTaXplOiBbJzI0cHgnLCBudWxsLCAnMjhweCcsIG51bGwsIG51bGwsICczMnB4JywgbnVsbCwgJzM2cHgnXSxcclxuICAgICAgY29sb3I6ICdoZWFkaW5nX3NlY29uZGFyeScsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IFsxLjMsIG51bGwsIG51bGwsIDEuMl0sXHJcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICc3MDAnLFxyXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAnLS41cHgnLFxyXG4gICAgfSxcclxuXHJcbiAgICBzdWJUaXRsZToge1xyXG4gICAgICBmb250U2l6ZTogWzAsIG51bGwsICcxNHB4J10sXHJcbiAgICAgIGNvbG9yOiAnaGVhZGluZycsXHJcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgIGxldHRlclNwYWNpbmc6IFsnMS41cHgnLCBudWxsLCAnMnB4J10sXHJcbiAgICAgIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxyXG4gICAgICBmb250V2VpZ2h0OiAnNzAwJyxcclxuICAgICAgbWI6ICc4cHgnLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAxLjUsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgdGV4dDoge1xyXG4gICAgaGVhZGluZzoge1xyXG4gICAgICBmb250RmFtaWx5OiAnaGVhZGluZycsXHJcbiAgICAgIGxpbmVIZWlnaHQ6ICdoZWFkaW5nJyxcclxuICAgICAgZm9udFdlaWdodDogJ2hlYWRpbmcnLFxyXG4gICAgICBmb250U2l6ZTogNCxcclxuICAgICAgbGV0dGVyU3BhY2luZzogJ2hlYWRpbmcnLFxyXG4gICAgICBjb2xvcjogJ2hlYWRpbmcnLFxyXG4gICAgfSxcclxuICAgIGhlcm9QcmltYXJ5OiB7XHJcbiAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICBmb250U2l6ZTogW1xyXG4gICAgICAgICc0MHB4JyxcclxuICAgICAgICAnNTJweCcsXHJcbiAgICAgICAgJzYwcHgnLFxyXG4gICAgICAgICc0OHB4JyxcclxuICAgICAgICAnNTJweCcsXHJcbiAgICAgICAgJzYwcHgnLFxyXG4gICAgICAgICc2NnB4JyxcclxuICAgICAgICAnNzhweCcsXHJcbiAgICAgIF0sXHJcbiAgICAgIGxpbmVIZWlnaHQ6IDEuMixcclxuICAgICAgZm9udFdlaWdodDogNzAwLFxyXG4gICAgICBtYjogWzUsIG51bGwsIG51bGwsIG51bGwsICczMHB4J10sXHJcbiAgICB9LFxyXG4gICAgaGVyb1NlY29uZGFyeToge1xyXG4gICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgZm9udFNpemU6IFsyLCAzLCA0LCAnMTdweCcsIG51bGwsIDMsICcxOXB4JywgNF0sXHJcbiAgICAgIGxpbmVIZWlnaHQ6IFsyLCBudWxsLCBudWxsLCBudWxsLCAyLjJdLFxyXG4gICAgICBmb250V2VpZ2h0OiAnYm9keScsXHJcbiAgICAgIHByOiBbMCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgJzEwMHB4JywgbnVsbCwgJzEyNXB4J10sXHJcbiAgICAgIG1iOiBbJzM1cHgnLCBudWxsLCBudWxsLCBudWxsLCAnNDBweCcsIG51bGwsIG51bGwsIDddLFxyXG4gICAgfSxcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgIC8vIGV4dGVuZHMgdGhlIHRleHQuaGVhZGluZyBzdHlsZXNcclxuICAgICAgdmFyaWFudDogJ3RleHQuaGVhZGluZycsXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICAgICAgZm9udFNpemU6IDE4LFxyXG4gICAgICBsaW5lSGVpZ2h0OiAnMzBweCcsXHJcbiAgICAgIGNvbG9yOiAnIzBGMjEzNycsXHJcbiAgICB9LFxyXG4gICAgbGVhZDoge1xyXG4gICAgICBmb250U2l6ZTogNDAsXHJcbiAgICAgIGZvbnRGYW1pbHk6ICdETSBTYW5zJyxcclxuICAgICAgZm9udFdlaWdodDogJzUwMCcsXHJcbiAgICAgIGxpbmVIZWlnaHQ6ICc2MHB4JyxcclxuICAgICAgbGV0dGVyU3BhY2luZzogJy0xLjVweCcsXHJcbiAgICAgIGNvbG9yOiAnIzBGMjEzNycsXHJcbiAgICB9LFxyXG4gICAgbXV0ZWQ6IHtcclxuICAgICAgbGluZUhlaWdodDogJzI2cHgnLFxyXG4gICAgICBjb2xvcjogJ211dGVkJyxcclxuICAgIH0sXHJcbiAgICBzZWNvbmRhcnk6IHtcclxuICAgICAgZm9udFdlaWdodDogNTAwLFxyXG4gICAgICBjb2xvcjogJyMwMEE5OUQnLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAnNDBweCcsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbGlua3M6IHtcclxuICAgIGRlZmF1bHQ6IHtcclxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICB9LFxyXG4gICAgYm9sZDoge1xyXG4gICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgICB9LFxyXG4gICAgbmF2OiB7XHJcbiAgICAgIGRpc3BsYXk6IFsnbm9uZScsIG51bGwsICdpbmxpbmUtYmxvY2snXSxcclxuICAgICAgcHg6IDI1LFxyXG4gICAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcclxuICAgIH0sXHJcbiAgICBmb290ZXI6IHtcclxuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgICAgcHg6IDAsXHJcbiAgICAgIGNvbG9yOiAnaW5oZXJpdCcsXHJcbiAgICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXHJcbiAgICB9LFxyXG4gICAgbG9nbzoge1xyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgaW1hZ2VzOiB7XHJcbiAgICBhdmF0YXI6IHtcclxuICAgICAgd2lkdGg6IDQ4LFxyXG4gICAgICBoZWlnaHQ6IDQ4LFxyXG4gICAgICBib3JkZXJSYWRpdXM6IDk5OTk5LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIC8vIHZhcmlhbnRzIGZvciBidXR0b25zXHJcbiAgYnV0dG9uczoge1xyXG4gICAgbWVudToge1xyXG4gICAgICBkaXNwbGF5OiBbbnVsbCwgbnVsbCwgJ25vbmUnXSxcclxuICAgIH0sIC8vIGRlZmF1bHQgdmFyaWFudCBmb3IgTWVudUJ1dHRvblxyXG4gICAgLy8geW91IGNhbiByZWZlcmVuY2Ugb3RoZXIgdmFsdWVzIGRlZmluZWQgaW4gdGhlIHRoZW1lXHJcbiAgICBkZWZhdWx0QnRuOiB7XHJcbiAgICAgIGJvcmRlclJhZGl1czogJzQ1cHgnLFxyXG4gICAgICBmb250U2l6ZTogWycxNHB4JywgMSwgbnVsbCwgbnVsbCwgMl0sXHJcbiAgICAgIGxldHRlclNwYWNpbmdzOiBbJy0wLjVweCcsIG51bGwsIG51bGwsIG51bGwsICctMC4xNXB4J10sXHJcbiAgICAgIHBhZGRpbmc6IFsnMTFweCAyMHB4IDEwcHgnLCBudWxsLCBudWxsLCBudWxsLCAnMTNweCAzMHB4J10sXHJcbiAgICAgIGZvbnRGYW1pbHk6ICdib2R5JyxcclxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IDEuMixcclxuICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjI1cycsXHJcbiAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcclxuICAgICAgJyY6Zm9jdXMnOiB7XHJcbiAgICAgICAgb3V0bGluZTogMCxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBwcmltYXJ5OiB7XHJcbiAgICAgIHZhcmlhbnQ6ICdidXR0b25zLmRlZmF1bHRCdG4nLFxyXG4gICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgYmc6ICdwcmltYXJ5JyxcclxuICAgICAgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgYm94U2hhZG93OiAncmdiYSgzMSwgNjIsIDExOCwgMC41NykgMHB4IDlweCAyMHB4IC01cHgnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHdoaXRlQnV0dG9uOiB7XHJcbiAgICAgIHZhcmlhbnQ6ICdidXR0b25zLmRlZmF1bHRCdG4nLFxyXG4gICAgICBjb2xvcjogJ2hlYWRpbmdfc2Vjb25kYXJ5JyxcclxuICAgICAgYmc6ICd3aGl0ZScsXHJcbiAgICAgICcmOmhvdmVyJzoge1xyXG4gICAgICAgIGJveFNoYWRvdzogJ3JnYmEoMCwgMCwgMCwgMC41KSAwcHggMTJweCAyNHB4IC0xMHB4JyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBzZWNvbmRhcnk6IHtcclxuICAgICAgdmFyaWFudDogJ2J1dHRvbnMuZGVmYXVsdEJ0bicsXHJcbiAgICAgIGJvcmRlcjogJzEuNXB4IHNvbGlkIHdoaXRlJyxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgYmc6ICd3aGl0ZScsXHJcbiAgICAgICAgY29sb3I6ICdoZWFkaW5nX3NlY29uZGFyeScsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgdGV4dEJ1dHRvbjoge1xyXG4gICAgICB2YXJpYW50OiAnYnV0dG9ucy5kZWZhdWx0QnRuJyxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgc3ZnOiB7XHJcbiAgICAgICAgZm9udFNpemU6IFs0LCA2XSxcclxuICAgICAgICBtcjogMixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBjYXJkczoge1xyXG4gICAgcHJpbWFyeToge1xyXG4gICAgICBwYWRkaW5nOiAyLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IDQsXHJcbiAgICB9LFxyXG4gICAgb2ZmZXI6IHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgZmxleDogWycxIDEgY2FsYyg1MCUgLSAxNnB4KScsICcxIDEgMjAlJ10sXHJcbiAgICAgIG1pbkhlaWdodDogMTMwLFxyXG4gICAgICBtOiAyLFxyXG4gICAgICBiYWNrZ3JvdW5kOiAnI0ZGRkZGRicsXHJcbiAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjRURFRkY2JyxcclxuICAgICAgYm9yZGVyUmFkaXVzOiA1LFxyXG4gICAgfSxcclxuICAgIGZlYXR1cmVDYXJkOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgYWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnLFxyXG4gICAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcclxuICAgICAgcDogMyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBmb3Jtczoge1xyXG4gICAgbGFiZWw6IHtcclxuICAgICAgZm9udFNpemU6IDEsXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICAgIH0sXHJcbiAgICBpbnB1dDoge1xyXG4gICAgICBib3JkZXJSYWRpdXM6IDgsXHJcbiAgICAgIGJvcmRlckNvbG9yOiAnYm9yZGVyX2NvbG9yJyxcclxuICAgICAgaGVpZ2h0OiA2MCxcclxuICAgICAgJyY6Zm9jdXMnOiB7XHJcbiAgICAgICAgYm9yZGVyQ29sb3I6ICdwcmltYXJ5JyxcclxuICAgICAgICBib3hTaGFkb3c6ICh0KSA9PiBgMCAwIDAgMnB4ICR7dC5jb2xvcnMucHJpbWFyeX1gLFxyXG4gICAgICAgIG91dGxpbmU6ICdub25lJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgYmFkZ2VzOiB7XHJcbiAgICBwcmltYXJ5OiB7XHJcbiAgICAgIGNvbG9yOiAnYmFja2dyb3VuZCcsXHJcbiAgICAgIGJnOiAnIzI4QTVGRicsXHJcbiAgICAgIGJvcmRlclJhZGl1czogMzAsXHJcbiAgICAgIHA6ICczcHggMTFweCcsXHJcbiAgICAgIGZvbnRTaXplOiAxLFxyXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAnLTAuNXB4JyxcclxuICAgIH0sXHJcbiAgICBvdXRsaW5lOiB7XHJcbiAgICAgIGNvbG9yOiAncHJpbWFyeScsXHJcbiAgICAgIGJnOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgICBib3hTaGFkb3c6ICdpbnNldCAwIDAgMCAxcHgnLFxyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICBzdHlsZXM6IHtcclxuICAgIC8vIFRvIGFkZCBiYXNlLCB0b3AtbGV2ZWwgc3R5bGVzIHRvIHRoZSA8Ym9keT4gZWxlbWVudCwgdXNlIHRoZW1lLnN0eWxlcy5yb290LlxyXG4gICAgcm9vdDoge1xyXG4gICAgICBmb250RmFtaWx5OiAnYm9keScsXHJcbiAgICAgIGxpbmVIZWlnaHQ6ICdib2R5JyxcclxuICAgICAgZm9udFdlaWdodDogJ2JvZHknLFxyXG4gICAgICBmb250U21vb3RoaW5nOiAnYW50aWFsaWFzZWQnLFxyXG4gICAgICAnLm1vZGFsLXZpZGVvLWNsb3NlLWJ0bic6IHtcclxuICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICAgICB0b3A6ICctMjVweCcsXHJcbiAgICAgICAgcmlnaHQ6ICctMjVweCcsXHJcbiAgICAgICAgd2lkdGg6ICcgMjVweCcsXHJcbiAgICAgICAgaGVpZ2h0OiAnMjVweCcsXHJcbiAgICAgIH0sXHJcbiAgICAgICcubW9kYWwtdmlkZW8tbW92aWUtd3JhcCc6IHtcclxuICAgICAgICBtYXJnaW46IDYsXHJcbiAgICAgICAgd2lkdGg6ICdhdXRvJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICAvLyBEaXZpZGVyIHN0eWxlc1xyXG4gICAgaHI6IHtcclxuICAgICAgYm9yZGVyOiAwLFxyXG4gICAgICBib3JkZXJCb3R0b206ICcxcHggc29saWQnLFxyXG4gICAgICBib3JkZXJDb2xvcjogJyNEOUUwRTcnLFxyXG4gICAgfSxcclxuICAgIC8vIGFsc28geW91IGNhbiB1c2Ugb3RoZXIgSFRNTCBlbGVtZW50cyBzdHlsZSBoZXJlXHJcbiAgICB1bDoge1xyXG4gICAgICBsaXN0U3R5bGU6ICdub25lJyxcclxuICAgIH0sXHJcbiAgICBzck9ubHk6IHtcclxuICAgICAgYm9yZGVyOiAnMCAhaW1wb3J0YW50JyxcclxuICAgICAgY2xpcDogJ3JlY3QoMXB4LCAxcHgsIDFweCwgMXB4KSAhaW1wb3J0YW50JyxcclxuICAgICAgY2xpcFBhdGg6ICdpbnNldCg1MCUpICFpbXBvcnRhbnQnLFxyXG4gICAgICBoZWlnaHQ6ICcxcHggIWltcG9ydGFudCcsXHJcbiAgICAgIG1hcmdpbjogJy0xcHggIWltcG9ydGFudCcsXHJcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuICFpbXBvcnRhbnQnLFxyXG4gICAgICBwYWRkaW5nOiAnMCAhaW1wb3J0YW50JyxcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZSAhaW1wb3J0YW50JyxcclxuICAgICAgd2lkdGg6ICcxcHggIWltcG9ydGFudCcsXHJcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAgIWltcG9ydGFudCcsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBlbW90aW9uL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnJhbWVyLW1vdGlvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmMtZHJhd2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWN1c3RvbS1zY3JvbGxiYXJzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zL2ZhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zL2lvXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LW1vZGFsLXZpZGVvXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LW11bHRpLWNhcm91c2VsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXNjcm9sbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zdGlja3lub2RlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRoZW1lLXVpXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=