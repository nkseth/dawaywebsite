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
/* harmony import */ var assets_banner_thumb_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/banner-thumb.png */ "./src/assets/banner-thumb.png");
/* harmony import */ var assets_banner_thumb_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_banner_thumb_png__WEBPACK_IMPORTED_MODULE_5__);
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
    src: assets_banner_thumb_png__WEBPACK_IMPORTED_MODULE_5___default.a,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhdGgtbWF0Y2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcHJlcGFyZS1kZXN0aW5hdGlvbi50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yZXNvbHZlLXJld3JpdGVzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2Fycm93RXZlbi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9hcnJvd09kZC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9iYW5uZXItdGh1bWIucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvYmFubmVyQmcucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvY29yZS1mZWF0dXJlL2JyaWVmY2FzZS5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9jb3JlLWZlYXR1cmUvc2VjdXJlLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2NvcmVGZWF0dXJlLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ZlYXR1cmUvY2hhdC5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9mZWF0dXJlL2Nsb3VkLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ZlYXR1cmUvZGVzaWduLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ZlYXR1cmUvc2V0dGluZy5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9mZWF0dXJlL3NtYXJ0LnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ZlYXR1cmUvd2lubmVyLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2tleS1mZWF0dXJlL2hlbHAgKDEpLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2tleS1mZWF0dXJlL3ByYWN0aWNlICgxKS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9rZXktZmVhdHVyZS9wcm9tb3Rpb24gKDIpLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2xvZ28tZGFyay5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9sb2dvLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3BhcnRuZXIucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvcGF0dGVybkJHLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3BheW1lbnQtcGF0dGVybi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9wYXltZW50VGh1bWIucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvdGVzdGltb25pYWwvYXZhdGFyMS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy90ZXN0aW1vbmlhbC9hdmF0YXIyLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3Rlc3RpbW9uaWFsL2F2YXRhcjMucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvdGVzdGltb25pYWwvYXZhdGFyNC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYWNjb3JkaW9uL2FjY29yZGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hY2NvcmRpb24vYmFzZS1hY2NvcmRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYWNjb3JkaW9uL3NoYXJlZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9idXR0b24tZ3JvdXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZHJhd2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2ZlYXR1cmUtY2FyZC1jb2x1bW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZmVhdHVyZS1jYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9tb2JpbGUtZHJhd2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2ltYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9saW5rLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbG9nby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wcmljZS1jYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3JhdGluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zZWN0aW9uLWhlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zZW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGV4dC1mZWF0dXJlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250ZXh0cy9hcHAvYXBwLnByb3ZpZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250ZXh0cy9hcHAvYXBwLnJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRleHRzL2NyZWF0ZS1jb250ZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb250ZXh0cy9kcmF3ZXIvZHJhd2VyLmNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRleHRzL2RyYXdlci9kcmF3ZXIucHJvdmlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zZWN0aW9ucy9iYW5uZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlY3Rpb25zL2NvcmUtZmVhdHVyZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VjdGlvbnMvZmFxLmpzIiwid2VicGFjazovLy8uL3NyYy9zZWN0aW9ucy9mZWF0dXJlLmpzIiwid2VicGFjazovLy8uL3NyYy9zZWN0aW9ucy9rZXktZmVhdHVyZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VjdGlvbnMvcGFja2FnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VjdGlvbnMvcGFydG5lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VjdGlvbnMvc2VjdXJlLXBheW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlY3Rpb25zL3Rlc3RpbW9uaWFsLmpzIiwid2VicGFjazovLy8uL3NyYy9zZWN0aW9ucy93b3JrZmxvdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGhlbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGVtb3Rpb24vY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZyYW1lci1tb3Rpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyYy1kcmF3ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWN1c3RvbS1zY3JvbGxiYXJzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvZmFcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9pb1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtbW9kYWwtdmlkZW9cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1tdWx0aS1jYXJvdXNlbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXNjcm9sbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXN0aWNreW5vZGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0aGVtZS11aVwiIl0sIm5hbWVzIjpbImxpc3RlbmVycyIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwid2luZG93IiwicHJlZmV0Y2hlZCIsImNhY2hlZE9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5IiwiY2IiLCJyb290TWFyZ2luIiwibGlzdGVuVG9JbnRlcnNlY3Rpb25zIiwib2JzZXJ2ZXIiLCJnZXRPYnNlcnZlciIsImNvbnNvbGUiLCJyb3V0ZXIiLCJlcnIiLCJocmVmIiwiZXZlbnQiLCJ0YXJnZXQiLCJlIiwibm9kZU5hbWUiLCJpc01vZGlmaWVkRXZlbnQiLCJzY3JvbGwiLCJhcyIsInJlcGxhY2UiLCJzdWNjZXNzIiwiZG9jdW1lbnQiLCJhcmdzIiwia2V5IiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwiT2JqZWN0IiwicHJvcHMiLCJjcmVhdGVQcm9wRXJyb3IiLCJfIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwic2hhbGxvdyIsInBhc3NIcmVmIiwicHJlZmV0Y2giLCJvcHRpb25hbFByb3BzIiwiaGFzV2FybmVkIiwiUmVhY3QiLCJwIiwicGF0aG5hbWUiLCJyZXNvbHZlZEhyZWYiLCJjaGlsZEVsbSIsImlzUHJlZmV0Y2hlZCIsImNoaWxkcmVuIiwiY2hpbGQiLCJDaGlsZHJlbiIsImNoaWxkUHJvcHMiLCJyZWYiLCJlbCIsInNldENoaWxkRWxtIiwib25DbGljayIsImxpbmtDbGlja2VkIiwicHJpb3JpdHkiLCJMaW5rIiwicGF0aCIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwicHJvY2VzcyIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJnZXQiLCJSb3V0ZXIiLCJmaWVsZCIsImdldFJvdXRlciIsImV2ZW50RmllbGQiLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsIkNvbXBvc2VkQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiV2l0aFJvdXRlcldyYXBwZXIiLCJuYW1lIiwiYWxsIiwib24iLCJvZmYiLCJlbWl0IiwiaGFuZGxlciIsImJhc2VQYXRoIiwiY2FuY2VsbGVkIiwidXJsIiwibG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsImhhc0Jhc2VQYXRoIiwiYmFzZSIsInVybEFzU3RyaW5nIiwiZmluYWxVcmwiLCJQQUdFX0xPQURfRVJST1IiLCJTeW1ib2wiLCJhZGRCYXNlUGF0aCIsInJlc29sdmVIcmVmIiwibWFudWFsU2Nyb2xsUmVzdG9yYXRpb24iLCJjcmVkZW50aWFscyIsInJlcyIsImF0dGVtcHRzIiwiZmV0Y2hSZXRyeSIsImlzU2VydmVyUmVuZGVyIiwibWFya0xvYWRpbmdFcnJvciIsImNvbnN0cnVjdG9yIiwicm91dGUiLCJxdWVyeSIsImFzUGF0aCIsImNvbXBvbmVudHMiLCJzZGMiLCJzdWIiLCJjbGMiLCJwYWdlTG9hZGVyIiwiX2JwcyIsImV2ZW50cyIsIl93cmFwQXBwIiwiaXNTc3IiLCJpc0ZhbGxiYWNrIiwiX2luRmxpZ2h0Um91dGUiLCJfc2hhbGxvdyIsInN0YXRlIiwib3B0aW9ucyIsInN0eWxlU2hlZXRzIiwiX19OX1NTRyIsImluaXRpYWxQcm9wcyIsIl9fTl9TU1AiLCJDb21wb25lbnQiLCJfX05FWFRfREFUQV9fIiwicmVsb2FkIiwiYmFjayIsInB1c2giLCJwcmVwYXJlVXJsQXMiLCJjaGFuZ2UiLCJpc0xvY2FsVVJMIiwiU1QiLCJwZXJmb3JtYW5jZSIsImNsZWFuZWRBcyIsImRlbEJhc2VQYXRoIiwicGFnZXMiLCJfX3Jld3JpdGVzIiwicGFyc2VkIiwibWV0aG9kIiwicmVzb2x2ZWRBcyIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwibWlzc2luZ1BhcmFtcyIsInBhcmFtIiwiYXNQYXRobmFtZSIsInJvdXRlSW5mbyIsImFwcENvbXAiLCJlcnJvciIsImNoYW5nZVN0YXRlIiwiX19OIiwiaGFuZGxlUm91dGVJbmZvRXJyb3IiLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwicGFnZSIsImdldFJvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsInJlcXVpcmUiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJkYXRhSHJlZiIsInNldCIsImJlZm9yZVBvcFN0YXRlIiwib25seUFIYXNoQ2hhbmdlIiwibmV3SGFzaCIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzY3JvbGxUb0hhc2giLCJoYXNoIiwiaWRFbCIsIm5hbWVFbCIsInVybElzTmV3IiwiX3Jlc29sdmVIcmVmIiwiY2xlYW5QYXRobmFtZSIsInBhcnNlZEhyZWYiLCJQcm9taXNlIiwiZmV0Y2hDb21wb25lbnQiLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJfZ2V0RGF0YSIsImZuIiwiZGF0YSIsIl9nZXRTdGF0aWNEYXRhIiwiZmV0Y2hOZXh0RGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiQXBwVHJlZSIsImN0eCIsImFib3J0Q29tcG9uZW50TG9hZCIsIm5vdGlmeSIsInNsYXNoZWRQcm90b2NvbHMiLCJwcm90b2NvbCIsInVybE9iaiIsImhvc3QiLCJhdXRoIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiaG9zdG5hbWUiLCJTdHJpbmciLCJxdWVyeXN0cmluZyIsInNlYXJjaCIsIlRFU1RfUk9VVEUiLCJEVU1NWV9CQVNFIiwicmVzb2x2ZWRCYXNlIiwib3JpZ2luIiwibWF0Y2hlck9wdGlvbnMiLCJzZW5zaXRpdmUiLCJkZWxpbWl0ZXIiLCJkZWNvZGUiLCJjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zIiwic3RyaWN0IiwiY3VzdG9tUm91dGUiLCJrZXlzIiwibWF0Y2hlclJlZ2V4IiwicGF0aFRvUmVnZXhwIiwibWF0Y2hlciIsImRlY29kZVVSSUNvbXBvbmVudCIsInBhcnNlZERlc3RpbmF0aW9uIiwiZGVzdGluYXRpb24iLCJkZXN0UXVlcnkiLCJkZXN0UGF0aCIsImRlc3RQYXRoUGFyYW1LZXlzIiwiZGVzdFBhdGhQYXJhbXMiLCJkZXN0aW5hdGlvbkNvbXBpbGVyIiwidmFsaWRhdGUiLCJ2YWx1ZSIsIkFycmF5Iiwic3RyT3JBcnJheSIsInF1ZXJ5Q29tcGlsZXIiLCJwYXJhbUtleXMiLCJhcHBlbmRQYXJhbXNUb1F1ZXJ5IiwicGFyYW1zIiwic2hvdWxkQWRkQmFzZVBhdGgiLCJuZXdVcmwiLCJlbmNvZGVVUkkiLCJzZWFyY2hQYXJhbXMiLCJyZXN1bHQiLCJpdGVtIiwic2VhcmNoUGFyYW1zTGlzdCIsImN1c3RvbVJvdXRlTWF0Y2hlciIsInJld3JpdGUiLCJkZXN0UmVzIiwicmUiLCJzbHVnTmFtZSIsImciLCJncm91cHMiLCJtIiwic3RyIiwib3B0aW9uYWwiLCJyZXBlYXQiLCJzZWdtZW50cyIsIm5vcm1hbGl6ZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJzZWdtZW50IiwicGFyc2VQYXJhbWV0ZXIiLCJwb3MiLCJlc2NhcGVSZWdleCIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsImkiLCJyb3V0ZUtleXMiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImNsZWFuZWRLZXkiLCJpbnZhbGlkS2V5IiwiaXNOYU4iLCJwYXJzZUludCIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwiQWNjb3JkaW9uIiwiaXRlbXMiLCJjb21iaW5lUmVkdWNlcnMiLCJzaW5nbGUiLCJwcmV2ZW50Q2xvc2UiLCJvcGVuSW5kZXhlcyIsImhhbmRsZUl0ZW1DbGljayIsIm1hcCIsImluZGV4IiwidGl0bGUiLCJpbmNsdWRlcyIsImNvbnRlbnRzIiwiQmFzZUFjY29yZGlvbiIsImludGVybmFsU2V0U3RhdGUiLCJjbG9zaW5nIiwidHlwZSIsImZpbHRlciIsImxvZyIsImdldFN0YXRlIiwidW5kZWZpbmVkIiwiY2hhbmdlcyIsImNhbGxiYWNrIiwiYWxsQ2hhbmdlcyIsInNldFN0YXRlIiwiYWN0dWFsU3RhdGUiLCJjaGFuZ2VzT2JqZWN0Iiwic3RhdGVSZWR1Y2VyIiwib25TdGF0ZUNoYW5nZSIsInJlbmRlciIsIkFjY29yZGlvbkJ1dHRvbiIsInJlc3QiLCJzdHlsZXMiLCJidXR0b25Ub2dnbGUiLCJkaXNwbGF5IiwiY29sb3IiLCJjdXJzb3IiLCJib3JkZXIiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJsZXR0ZXJTcGFjaW5nIiwicG9zaXRpb24iLCJwYWRkaW5nTGVmdCIsImxpbmVIZWlnaHQiLCJ3aWR0aCIsImhlaWdodCIsImJvcmRlclJhZGl1cyIsImJhY2tncm91bmRDb2xvciIsInRvcCIsImxlZnQiLCJvcGFjaXR5IiwiY29udGVudCIsInRyYW5zZm9ybSIsInRyYW5zaXRpb24iLCJ2YXJpYW50cyIsIm9wZW4iLCJtYXJnaW5Ub3AiLCJjbG9zZWQiLCJBY2NvcmRpb25Db250ZW50cyIsImlzT3BlbiIsIm92ZXJmbG93WSIsInBhZGRpbmdCb3R0b20iLCJBY2NvcmRpb25JdGVtIiwib3ZlcmZsb3ciLCJwYWRkaW5nIiwiYm9yZGVyQm90dG9tIiwibGVuZ3RoIiwic2xpY2UiLCJyZWR1Y2VycyIsInJlZHVjZSIsImFjYyIsInJlZHVjZXIiLCJCdXR0b25Hcm91cCIsIm5leHQiLCJwcmV2aW91cyIsImJ1dHRvbkdyb3VwIiwianVzdGlmeUNvbnRlbnQiLCJtYiIsImJ1dHRvbiIsImJnIiwicHgiLCJvdXRsaW5lIiwiRHJhd2VyIiwiY2xhc3NOYW1lIiwiY2xvc2VCdXR0b24iLCJjbG9zZUJ1dHRvblN0eWxlIiwiZHJhd2VySGFuZGxlciIsInRvZ2dsZUhhbmRsZXIiLCJwbGFjZW1lbnQiLCJkcmF3ZXJTdHlsZSIsImNsb3NlQnRuU3R5bGUiLCJ0cmltIiwiZGVmYXVsdFByb3BzIiwiRmVhdHVyZUNhcmRDb2x1bW4iLCJzcmMiLCJhbHRUZXh0IiwidGV4dCIsImNhcmQiLCJpbWciLCJ3cmFwcGVyIiwic3ViVGl0bGUiLCJhbGlnbkl0ZW1zIiwidGV4dEFsaWduIiwiZmxleERpcmVjdGlvbiIsIm14IiwiRmVhdHVyZUNhcmQiLCJmbGV4U2hyaW5rIiwibXIiLCJtdCIsImhlYWRlciIsImxhYmVsIiwiRm9vdGVyIiwiZm9vdGVyIiwiY29udGFpbmVyIiwiZm9vdGVyVG9wQXJlYSIsIm1lbnVJdGVtcyIsIm1lbnVzIiwiaGVhZGluZyIsImxpbmsiLCJjb3B5cmlnaHQiLCJib3JkZXJUb3AiLCJib3JkZXJUb3BDb2xvciIsImZsZXhXcmFwIiwicHQiLCJwYiIsInRleHREZWNvcmF0aW9uIiwiYSIsInBsIiwiSGVhZGVyIiwiTG9nb0RhcmsiLCJMb2dvV2hpdGUiLCJuYXYiLCJwb3NpdGlvbkFuaW0iLCJrZXlmcmFtZXMiLCJweSIsImFuaW1hdGlvbiIsIm1sIiwiYm94U2hhZG93IiwiYm9yZGVyQ29sb3IiLCJzb2NpYWwiLCJpY29uIiwiTW9iaWxlRHJhd2VyIiwiZGlzcGF0Y2giLCJ1c2VDb250ZXh0IiwiRHJhd2VyQ29udGV4dCIsInVzZUNhbGxiYWNrIiwiZHJhd2VyIiwiY2xvc2UiLCJtZW51IiwibWVudUZvb3RlciIsInJpZ2h0IiwiekluZGV4IiwiZnciLCJJbWFnZSIsIkxheW91dCIsImlzU3RpY2t5Iiwic2V0SXNTdGlja3kiLCJ1c2VTdGF0ZSIsImhhbmRsZVN0YXRlQ2hhbmdlIiwic3RhdHVzIiwiU3RpY2t5IiwiU1RBVFVTX0ZJWEVEIiwiU1RBVFVTX09SSUdJTkFMIiwidmFyaWFudCIsIk5hdkxpbmsiLCJMaXN0IiwicGFyZW50U3R5bGUiLCJjaGlsZFN0eWxlIiwibGlzdFN0eWxlVHlwZSIsIm1hcmdpbiIsImlzQXZhaWxhYmxlIiwibGlzdEljb24iLCJtYXJnaW5MZWZ0IiwiTG9nbyIsIm1heFdpZHRoIiwiUHJpY2VDYXJkIiwiZGVzY3JpcHRpb24iLCJwcmljZVdpdGhVbml0IiwiYnV0dG9uVGV4dCIsInBvaW50cyIsInByaWNpbmdCb3giLCJwcmljaW5nSGVhZGVyIiwicHJpY2UiLCJsaXN0SXRlbSIsImZsZXgiLCJiYWNrZ3JvdW5kIiwibWFyZ2luQm90dG9tIiwiYm90dG9tIiwiZm9udFN0eWxlIiwicHIiLCJSYXRpbmciLCJyYXRpbmciLCJ0b3RhbFJhdGluZyIsIlNlY3Rpb25IZWFkZXIiLCJzbG9nYW4iLCJpc1doaXRlIiwiU0VPIiwiYXV0aG9yIiwibWV0YSIsIm1ldGFEYXRhIiwicHJvcGVydHkiLCJjb25jYXQiLCJsYW5nIiwiVGV4dEZlYXR1cmUiLCJidG5OYW1lIiwiYnRuVVJMIiwidGV4dFRyYW5zZm9ybSIsInVzZURpc3BhdGNoIiwicHJvdmlkZXIiLCJ1c2VDcmVhdGVDb250ZXh0IiwiaW5pdGlhbFN0YXRlIiwidXNlU3RpY2t5U3RhdGUiLCJ1c2VTdGlja3lEaXNwYXRjaCIsIlN0aWNreVByb3ZpZGVyIiwiaXNTaWRlYmFyU3RpY2t5IiwiRXJyb3IiLCJkZWZhdWx0VmFsdWUiLCJkZWZhdWx0RGlzcGF0Y2giLCJzdGF0ZUN0eCIsImNyZWF0ZUNvbnRleHQiLCJkaXNwYXRjaEN0eCIsInVzZVN0YXRlQ3R4IiwidXNlRGlzcGF0Y2hDdHgiLCJQcm92aWRlciIsInVzZVJlZHVjZXIiLCJhY3Rpb24iLCJEcmF3ZXJQcm92aWRlciIsIkluZGV4UGFnZSIsInRoZW1lIiwiQmFubmVyIiwidmlkZW9PcGVuIiwic2V0VmlkZW9PcGVuIiwiaGFuZGxlQ2xpY2siLCJwcmV2ZW50RGVmYXVsdCIsImJhbm5lciIsImNvbnRlbnRCb3giLCJpbWFnZUJveCIsIkJhbm5lclRodW1iIiwiYmFja2dyb3VuZEltYWdlIiwiQmFubmVyQkciLCJiYWNrZ3JvdW5kUmVwZWF0IiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiYmFja2dyb3VuZFNpemUiLCJib3JkZXJCb3R0b21SaWdodFJhZGl1cyIsInNwb25zb3JUaXRsZSIsInNwb25zb3JCb3giLCJzcG9uc29yIiwiZmVhdHVyZXMiLCJpZCIsImltZ1NyYyIsIkJyaWVmY2FzZSIsIlNlY3VyZSIsIkNvcmVGZWF0dXJlIiwiY29yZUZlYXR1cmUiLCJjb250YWluZXJCb3giLCJ0aHVtYm5haWwiLCJDb3JlRmVhdHVyZVRodW1iIiwiaGVhZGluZ1RvcCIsImdyaWQiLCJib3JkZXJUb3BSaWdodFJhZGl1cyIsIm9yZGVyIiwiZmFxcyIsIkZhcSIsIm15IiwiU21hcnQiLCJXaW5uZXIiLCJDbG91ZCIsIlNldHRpbmciLCJEZXNpZ24iLCJDaGF0IiwiRmVhdHVyZSIsImdyaWRHYXAiLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwiVmVjdG9yIiwiRWRpdGluZyIsIlNwZWVkIiwiS2V5RmVhdHVyZSIsInBhY2thZ2VzIiwiUGFja2FnZSIsInByaWNpbmciLCJwYWNrYWdlRGF0YSIsIlBhdHRlcm5CRyIsIlBhcnRuZXJTZWN0aW9uIiwiUGFydG5lciIsIlNlY3VyZVBheW1lbnQiLCJiZ092ZXJsYXkiLCJQYXltZW50VGh1bWIiLCJQYXltZW50UGF0dGVybiIsImF2YXRhciIsIkF2YXRhcjEiLCJkZXNpZ25hdGlvbiIsInJldmlldyIsIkF2YXRhcjIiLCJBdmF0YXIzIiwiQXZhdGFyNCIsInJlc3BvbnNpdmUiLCJkZXNrdG9wIiwiYnJlYWtwb2ludCIsIm1heCIsIm1pbiIsInNsaWRlc1RvU2xpZGUiLCJsYXB0b3AiLCJ0YWJsZXQiLCJtb2JpbGUiLCJUZXN0aW1vbmlhbENhcmQiLCJjYXJvdXNlbFdyYXBwZXIiLCJyZXZpZXdDYXJkIiwidWwiLCJsaXN0U3R5bGUiLCJzdmciLCJtYXJnaW5SaWdodCIsIm9iamVjdEZpdCIsIldvcmtGbG93Iiwid29ya2Zsb3ciLCJpY29uQm94IiwiQXJyb3dPZGQiLCJBcnJvd0V2ZW4iLCJjb2xvcnMiLCJ0ZXh0X3NlY29uZGFyeSIsImhlYWRpbmdfc2Vjb25kYXJ5IiwiYmFja2dyb3VuZF9zZWNvbmRhcnkiLCJib3JkZXJfY29sb3IiLCJwcmltYXJ5Iiwic2Vjb25kYXJ5IiwibXV0ZWQiLCJhY2NlbnQiLCJ5ZWxsb3ciLCJtb2RlcyIsImRhcmsiLCJicmVha3BvaW50cyIsImZvbnRzIiwiYm9keSIsImZvbnRTaXplcyIsImZvbnRXZWlnaHRzIiwiYm9sZCIsImxpbmVIZWlnaHRzIiwibGV0dGVyU3BhY2luZ3MiLCJjYXBzIiwic3BhY2UiLCJsYXlvdXQiLCJ0b29sYmFyIiwibWFpbiIsInNlY3Rpb24iLCJrZXlGZWF0dXJlIiwiZmVhdHVyZSIsInBhcnRuZXIiLCJ0ZXN0aW1vbmlhbCIsInNlY3VyZVBheW1lbnQiLCJmYXEiLCJzZWN0aW9uSGVhZGVyIiwiZm9udEZhbWlseSIsImhlcm9QcmltYXJ5IiwiaGVyb1NlY29uZGFyeSIsImxlYWQiLCJsaW5rcyIsImRlZmF1bHQiLCJsb2dvIiwiaW1hZ2VzIiwiYnV0dG9ucyIsImRlZmF1bHRCdG4iLCJ3aGl0ZUJ1dHRvbiIsInRleHRCdXR0b24iLCJjYXJkcyIsIm9mZmVyIiwibWluSGVpZ2h0IiwiZmVhdHVyZUNhcmQiLCJmb3JtcyIsImlucHV0IiwidCIsImJhZGdlcyIsInJvb3QiLCJmb250U21vb3RoaW5nIiwiaHIiLCJzck9ubHkiLCJjbGlwIiwiY2xpcFBhdGgiLCJ3aGl0ZVNwYWNlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUN4RkEsd0U7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3Qzs7Ozs7Ozs7Ozs7QUNOQSxjQUFjLG1CQUFPLENBQUMsMEVBQW1COztBQUV6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87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WDs7QUFDQSxNQUFNL0ksRUFBRSxHQUNiK0ksRUFBRSxJQUNGLE9BQU85SSxXQUFXLENBQWxCLFNBREE4SSxjQUVBLE9BQU85SSxXQUFXLENBQWxCLFlBSEs7Ozs7Ozs7Ozs7Ozs7QUNqWU0sd0JBQXdCLDBDQUEwQyxnREFBZ0QsZ0NBQWdDLGdDQUFnQyxtQ0FBbUMsNEJBQTRCLCtCQUErQixvQkFBb0IseUJBQXlCLFVBQVU7QUFDcFYsaUQ7Ozs7Ozs7Ozs7O0FDREEsaUJBQWlCLG1CQUFPLENBQUMsbUVBQW9COzs7Ozs7Ozs7Ozs7QUNBN0MsaUNBQWlDLGcwQzs7Ozs7Ozs7Ozs7QUNBakMsaUNBQWlDLDR5Qzs7Ozs7Ozs7Ozs7QUNBakMsMEY7Ozs7Ozs7Ozs7O0FDQUEsc0Y7Ozs7Ozs7Ozs7O0FDQUEscUNBQXFDLHd5RTs7Ozs7Ozs7Ozs7QUNBckMscUNBQXFDLDR6Rjs7Ozs7Ozs7Ozs7QUNBckMseUY7Ozs7Ozs7Ozs7O0FDQUEscUNBQXFDLG93Rjs7Ozs7Ozs7Ozs7QUNBckMscUNBQXFDLHdzVDs7Ozs7Ozs7Ozs7QUNBckMscUNBQXFDLDQzTTs7Ozs7Ozs7Ozs7QUNBckMscUNBQXFDLHdvVDs7Ozs7Ozs7Ozs7QUNBckMsbUY7Ozs7Ozs7Ozs7O0FDQUEscUNBQXFDLDQ2Tzs7Ozs7Ozs7Ozs7QUNBckMsaUNBQWlDLG9oSjs7Ozs7Ozs7Ozs7QUNBakMsaUNBQWlDLG9xTTs7Ozs7Ozs7Ozs7QUNBakMsaUNBQWlDLHdoSjs7Ozs7Ozs7Ozs7QUNBakMsdUY7Ozs7Ozs7Ozs7O0FDQUEsa0Y7Ozs7Ozs7Ozs7O0FDQUEscUY7Ozs7Ozs7Ozs7O0FDQUEsdUY7Ozs7Ozs7Ozs7O0FDQUEsNkY7Ozs7Ozs7Ozs7O0FDQUEsMEY7Ozs7Ozs7Ozs7O0FDQUEsaUNBQWlDLG9yUjs7Ozs7Ozs7Ozs7QUNBakMsaUNBQWlDLHdoUjs7Ozs7Ozs7Ozs7QUNBakMsaUNBQWlDLG83UTs7Ozs7Ozs7Ozs7QUNBakMsaUNBQWlDLDQ0Uzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQWpDO0FBQ0E7QUFDQTtBQVNlLFNBQVMrSSxT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VSxNQUFFLEVBQUU7QUFDRi9VLFlBQU0sRUFBRSxDQUROO0FBRUY0QixrQkFBWSxFQUFFLFdBRlo7QUFHRnlFLGlCQUFXLEVBQUU7QUFIWCxLQXBCRTtBQXlCTjtBQUNBeUssTUFBRSxFQUFFO0FBQ0ZDLGVBQVMsRUFBRTtBQURULEtBMUJFO0FBNkJOaUUsVUFBTSxFQUFFO0FBQ05oVixZQUFNLEVBQUUsY0FERjtBQUVOaVYsVUFBSSxFQUFFLHFDQUZBO0FBR05DLGNBQVEsRUFBRSx1QkFISjtBQUlOMVUsWUFBTSxFQUFFLGdCQUpGO0FBS040SCxZQUFNLEVBQUUsaUJBTEY7QUFNTjFHLGNBQVEsRUFBRSxtQkFOSjtBQU9OQyxhQUFPLEVBQUUsY0FQSDtBQVFOdkIsY0FBUSxFQUFFLHFCQVJKO0FBU05HLFdBQUssRUFBRSxnQkFURDtBQVVONFUsZ0JBQVUsRUFBRTtBQVZOO0FBN0JGO0FBblZLLENBQWYsRTs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxpRDs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxxQyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIGFkZEJhc2VQYXRoLFxuICBpc0xvY2FsVVJMLFxuICBOZXh0Um91dGVyLFxuICBQcmVmZXRjaE9wdGlvbnMsXG4gIHJlc29sdmVIcmVmLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxudHlwZSBSZXF1aXJlZEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IG5ldmVyIDogS1xufVtrZXlvZiBUXVxudHlwZSBPcHRpb25hbEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IEsgOiBuZXZlclxufVtrZXlvZiBUXVxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbn1cbnR5cGUgTGlua1Byb3BzUmVxdWlyZWQgPSBSZXF1aXJlZEtleXM8TGlua1Byb3BzPlxudHlwZSBMaW5rUHJvcHNPcHRpb25hbCA9IE9wdGlvbmFsS2V5czxMaW5rUHJvcHM+XG5cbmxldCBjYWNoZWRPYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbmNvbnN0IGxpc3RlbmVycyA9IG5ldyBNYXA8RWxlbWVudCwgKCkgPT4gdm9pZD4oKVxuY29uc3QgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPVxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlciA6IG51bGxcbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBnZXRPYnNlcnZlcigpOiBJbnRlcnNlY3Rpb25PYnNlcnZlciB8IHVuZGVmaW5lZCB7XG4gIC8vIFJldHVybiBzaGFyZWQgaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgYWxyZWFkeSBjcmVhdGVkXG4gIGlmIChjYWNoZWRPYnNlcnZlcikge1xuICAgIHJldHVybiBjYWNoZWRPYnNlcnZlclxuICB9XG5cbiAgLy8gT25seSBjcmVhdGUgc2hhcmVkIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIHN1cHBvcnRlZCBpbiBicm93c2VyXG4gIGlmICghSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICByZXR1cm4gKGNhY2hlZE9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgIChlbnRyaWVzKSA9PiB7XG4gICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgIGlmICghbGlzdGVuZXJzLmhhcyhlbnRyeS50YXJnZXQpKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjYiA9IGxpc3RlbmVycy5nZXQoZW50cnkudGFyZ2V0KSFcbiAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMCkge1xuICAgICAgICAgIGNhY2hlZE9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgbGlzdGVuZXJzLmRlbGV0ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgY2IoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgeyByb290TWFyZ2luOiAnMjAwcHgnIH1cbiAgKSlcbn1cblxuY29uc3QgbGlzdGVuVG9JbnRlcnNlY3Rpb25zID0gKGVsOiBFbGVtZW50LCBjYjogKCkgPT4gdm9pZCkgPT4ge1xuICBjb25zdCBvYnNlcnZlciA9IGdldE9ic2VydmVyKClcbiAgaWYgKCFvYnNlcnZlcikge1xuICAgIHJldHVybiAoKSA9PiB7fVxuICB9XG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbClcbiAgbGlzdGVuZXJzLnNldChlbCwgY2IpXG4gIHJldHVybiAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbClcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgIH1cbiAgICBsaXN0ZW5lcnMuZGVsZXRlKGVsKVxuICB9XG59XG5cbmZ1bmN0aW9uIHByZWZldGNoKFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgb3B0aW9ucz86IFByZWZldGNoT3B0aW9uc1xuKTogdm9pZCB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuXG4gIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycikgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH0pXG4gIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXSA9IHRydWVcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50KSB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gIHJldHVybiAoXG4gICAgKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgZXZlbnQubWV0YUtleSB8fFxuICAgIGV2ZW50LmN0cmxLZXkgfHxcbiAgICBldmVudC5zaGlmdEtleSB8fFxuICAgIGV2ZW50LmFsdEtleSB8fCAvLyB0cmlnZ2VycyByZXNvdXJjZSBkb3dubG9hZFxuICAgIChldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMilcbiAgKVxufVxuXG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChcbiAgZTogUmVhY3QuTW91c2VFdmVudCxcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIHJlcGxhY2U/OiBib29sZWFuLFxuICBzaGFsbG93PzogYm9vbGVhbixcbiAgc2Nyb2xsPzogYm9vbGVhblxuKTogdm9pZCB7XG4gIGNvbnN0IHsgbm9kZU5hbWUgfSA9IGUuY3VycmVudFRhcmdldFxuXG4gIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgIWlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgcmV0dXJuXG4gIH1cblxuICBlLnByZXZlbnREZWZhdWx0KClcblxuICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICB9XG5cbiAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywgeyBzaGFsbG93IH0pLnRoZW4oXG4gICAgKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmICghc3VjY2VzcykgcmV0dXJuXG4gICAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKClcbiAgICAgIH1cbiAgICB9XG4gIClcbn1cblxuZnVuY3Rpb24gTGluayhwcm9wczogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48TGlua1Byb3BzPikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzOiB7XG4gICAgICBrZXk6IHN0cmluZ1xuICAgICAgZXhwZWN0ZWQ6IHN0cmluZ1xuICAgICAgYWN0dWFsOiBzdHJpbmdcbiAgICB9KSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgICAgICBgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCArXG4gICAgICAgICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIlxuICAgICAgICAgICAgOiAnJylcbiAgICAgIClcbiAgICB9XG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc1JlcXVpcmVkLCB0cnVlPiA9IHtcbiAgICAgIGhyZWY6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHM6IExpbmtQcm9wc1JlcXVpcmVkW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIHJlcXVpcmVkUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzUmVxdWlyZWRbXVxuICAgIHJlcXVpcmVkUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNSZXF1aXJlZCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2hyZWYnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldID09IG51bGwgfHxcbiAgICAgICAgICAodHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0JylcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiBwcm9wc1trZXldID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc09wdGlvbmFsLCB0cnVlPiA9IHtcbiAgICAgIGFzOiB0cnVlLFxuICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgIHNjcm9sbDogdHJ1ZSxcbiAgICAgIHNoYWxsb3c6IHRydWUsXG4gICAgICBwYXNzSHJlZjogdHJ1ZSxcbiAgICAgIHByZWZldGNoOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCBvcHRpb25hbFByb3BzOiBMaW5rUHJvcHNPcHRpb25hbFtdID0gT2JqZWN0LmtleXMoXG4gICAgICBvcHRpb25hbFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc09wdGlvbmFsW11cbiAgICBvcHRpb25hbFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzT3B0aW9uYWwpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdhcycpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gJiZcbiAgICAgICAgICB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiZcbiAgICAgICAgICB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCdcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBrZXkgPT09ICdyZXBsYWNlJyB8fFxuICAgICAgICBrZXkgPT09ICdzY3JvbGwnIHx8XG4gICAgICAgIGtleSA9PT0gJ3NoYWxsb3cnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Bhc3NIcmVmJyB8fFxuICAgICAgICBrZXkgPT09ICdwcmVmZXRjaCdcbiAgICAgICkge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAhPSBudWxsICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgYWN0dWFsOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgY29uc3QgaGFzV2FybmVkID0gUmVhY3QudXNlUmVmKGZhbHNlKVxuICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcbiAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnXG4gICAgICApXG4gICAgfVxuICB9XG4gIGNvbnN0IHAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2VcblxuICBjb25zdCBbY2hpbGRFbG0sIHNldENoaWxkRWxtXSA9IFJlYWN0LnVzZVN0YXRlPEVsZW1lbnQ+KClcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBwYXRobmFtZSA9IChyb3V0ZXIgJiYgcm91dGVyLnBhdGhuYW1lKSB8fCAnLydcblxuICBjb25zdCB7IGhyZWYsIGFzIH0gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPSByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuaHJlZilcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogcmVzb2x2ZWRIcmVmLFxuICAgICAgYXM6IHByb3BzLmFzID8gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmFzKSA6IHJlc29sdmVkSHJlZixcbiAgICB9XG4gIH0sIFtwYXRobmFtZSwgcHJvcHMuaHJlZiwgcHJvcHMuYXNdKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKFxuICAgICAgcCAmJlxuICAgICAgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgJiZcbiAgICAgIGNoaWxkRWxtICYmXG4gICAgICBjaGlsZEVsbS50YWdOYW1lICYmXG4gICAgICBpc0xvY2FsVVJMKGhyZWYpXG4gICAgKSB7XG4gICAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgICAgY29uc3QgaXNQcmVmZXRjaGVkID0gcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdXG4gICAgICBpZiAoIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgICByZXR1cm4gbGlzdGVuVG9JbnRlcnNlY3Rpb25zKGNoaWxkRWxtLCAoKSA9PiB7XG4gICAgICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcylcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtwLCBjaGlsZEVsbSwgaHJlZiwgYXMsIHJvdXRlcl0pXG5cbiAgbGV0IHsgY2hpbGRyZW4sIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCB9ID0gcHJvcHNcbiAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICB9XG5cbiAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICBjb25zdCBjaGlsZFByb3BzOiB7XG4gICAgb25Nb3VzZUVudGVyPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIGhyZWY/OiBzdHJpbmdcbiAgICByZWY/OiBhbnlcbiAgfSA9IHtcbiAgICByZWY6IChlbDogYW55KSA9PiB7XG4gICAgICBpZiAoZWwpIHNldENoaWxkRWxtKGVsKVxuXG4gICAgICBpZiAoY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWYpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkLnJlZihlbClcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjaGlsZC5yZWYuY3VycmVudCA9IGVsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKVxuICAgICAgfVxuICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsKVxuICAgICAgfVxuICAgIH0sXG4gIH1cblxuICBpZiAocCkge1xuICAgIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICAgIH1cbiAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgICB9XG4gIH1cblxuICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gIGlmIChwcm9wcy5wYXNzSHJlZiB8fCAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkpIHtcbiAgICBjaGlsZFByb3BzLmhyZWYgPSBhZGRCYXNlUGF0aChhcylcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiIsIi8qKlxuICogUmVtb3ZlcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGlmIHRoZXJlIGlzIG9uZS4gUHJlc2VydmVzIHRoZSByb290IHBhdGggYC9gLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSAmJiBwYXRoICE9PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGhcbn1cblxuLyoqXG4gKiBOb3JtYWxpemVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggYWNjb3JkaW5nIHRvIHRoZSBgdHJhaWxpbmdTbGFzaGAgb3B0aW9uXG4gKiBpbiBgbmV4dC5jb25maWcuanNgLlxuICovXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBwcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0hcbiAgPyAocGF0aDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICAgIGlmICgvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aClcbiAgICAgIH0gZWxzZSBpZiAocGF0aC5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgIHJldHVybiBwYXRoXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGF0aCArICcvJ1xuICAgICAgfVxuICAgIH1cbiAgOiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaFxuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG5dXG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICdoYXNoQ2hhbmdlQ29tcGxldGUnLFxuXVxuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgJ3B1c2gnLFxuICAncmVwbGFjZScsXG4gICdyZWxvYWQnLFxuICAnYmFjaycsXG4gICdwcmVmZXRjaCcsXG4gICdiZWZvcmVQb3BTdGF0ZScsXG5dXG5cbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gIGdldCgpIHtcbiAgICByZXR1cm4gUm91dGVyLmV2ZW50c1xuICB9LFxufSlcblxudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpID0+IHtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoXG4gICAgICAgIDFcbiAgICAgICl9YFxuICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlciBhcyBhbnlcbiAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGdldFJvdXRlcigpOiBSb3V0ZXIge1xuICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArXG4gICAgICAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b25Sb3V0ZXIgYXMgU2luZ2xldG9uUm91dGVyXG5cbi8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhSb3V0ZXIgfSBmcm9tICcuL3dpdGgtcm91dGVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUm91dGVyKCk6IE5leHRSb3V0ZXIge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChSb3V0ZXJDb250ZXh0KVxufVxuXG4vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcblxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5leHBvcnQgY29uc3QgY3JlYXRlUm91dGVyID0gKC4uLmFyZ3M6IFJvdXRlckFyZ3MpOiBSb3V0ZXIgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IFJvdXRlciguLi5hcmdzKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiKCkpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdXG5cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXI6IFJvdXRlcik6IE5leHRSb3V0ZXIge1xuICBjb25zdCBfcm91dGVyID0gcm91dGVyIGFzIGFueVxuICBjb25zdCBpbnN0YW5jZSA9IHt9IGFzIGFueVxuXG4gIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpIHtcbiAgICBpZiAodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbih7fSwgX3JvdXRlcltwcm9wZXJ0eV0pIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSkge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBUb2tlbml6ZSBpbnB1dCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGxleGVyKHN0cikge1xuICAgIHZhciB0b2tlbnMgPSBbXTtcbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gc3RyW2ldO1xuICAgICAgICBpZiAoY2hhciA9PT0gXCIqXCIgfHwgY2hhciA9PT0gXCIrXCIgfHwgY2hhciA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJNT0RJRklFUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRVNDQVBFRF9DSEFSXCIsIGluZGV4OiBpKyssIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIntcIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk9QRU5cIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIn1cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNMT1NFXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCI6XCIpIHtcbiAgICAgICAgICAgIHZhciBuYW1lID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29kZSA9IHN0ci5jaGFyQ29kZUF0KGopO1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAvLyBgMC05YFxuICAgICAgICAgICAgICAgIChjb2RlID49IDQ4ICYmIGNvZGUgPD0gNTcpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBBLVpgXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDY1ICYmIGNvZGUgPD0gOTApIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBhLXpgXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDk3ICYmIGNvZGUgPD0gMTIyKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgX2BcbiAgICAgICAgICAgICAgICAgICAgY29kZSA9PT0gOTUpIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZSArPSBzdHJbaisrXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFuYW1lKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhcmFtZXRlciBuYW1lIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTkFNRVwiLCBpbmRleDogaSwgdmFsdWU6IG5hbWUgfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIihcIikge1xuICAgICAgICAgICAgdmFyIGNvdW50ID0gMTtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIj9cIikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQYXR0ZXJuIGNhbm5vdCBzdGFydCB3aXRoIFxcXCI/XFxcIiBhdCBcIiArIGopO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXSArIHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCIpXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQtLTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBqKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzdHJbal0gPT09IFwiKFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdHJbaiArIDFdICE9PSBcIj9cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhcHR1cmluZyBncm91cHMgYXJlIG5vdCBhbGxvd2VkIGF0IFwiICsgaik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb3VudClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5iYWxhbmNlZCBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICBpZiAoIXBhdHRlcm4pXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGF0dGVybiBhdCBcIiArIGkpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIlBBVFRFUk5cIiwgaW5kZXg6IGksIHZhbHVlOiBwYXR0ZXJuIH0pO1xuICAgICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0hBUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgIH1cbiAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRU5EXCIsIGluZGV4OiBpLCB2YWx1ZTogXCJcIiB9KTtcbiAgICByZXR1cm4gdG9rZW5zO1xufVxuLyoqXG4gKiBQYXJzZSBhIHN0cmluZyBmb3IgdGhlIHJhdyB0b2tlbnMuXG4gKi9cbmZ1bmN0aW9uIHBhcnNlKHN0ciwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIHRva2VucyA9IGxleGVyKHN0cik7XG4gICAgdmFyIF9hID0gb3B0aW9ucy5wcmVmaXhlcywgcHJlZml4ZXMgPSBfYSA9PT0gdm9pZCAwID8gXCIuL1wiIDogX2E7XG4gICAgdmFyIGRlZmF1bHRQYXR0ZXJuID0gXCJbXlwiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiLyM/XCIpICsgXCJdKz9cIjtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgdmFyIGtleSA9IDA7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICB2YXIgdHJ5Q29uc3VtZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIGlmIChpIDwgdG9rZW5zLmxlbmd0aCAmJiB0b2tlbnNbaV0udHlwZSA9PT0gdHlwZSlcbiAgICAgICAgICAgIHJldHVybiB0b2tlbnNbaSsrXS52YWx1ZTtcbiAgICB9O1xuICAgIHZhciBtdXN0Q29uc3VtZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRyeUNvbnN1bWUodHlwZSk7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB2YXIgX2EgPSB0b2tlbnNbaV0sIG5leHRUeXBlID0gX2EudHlwZSwgaW5kZXggPSBfYS5pbmRleDtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuZXhwZWN0ZWQgXCIgKyBuZXh0VHlwZSArIFwiIGF0IFwiICsgaW5kZXggKyBcIiwgZXhwZWN0ZWQgXCIgKyB0eXBlKTtcbiAgICB9O1xuICAgIHZhciBjb25zdW1lVGV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFwiXCI7XG4gICAgICAgIHZhciB2YWx1ZTtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgIHdoaWxlICgodmFsdWUgPSB0cnlDb25zdW1lKFwiQ0hBUlwiKSB8fCB0cnlDb25zdW1lKFwiRVNDQVBFRF9DSEFSXCIpKSkge1xuICAgICAgICAgICAgcmVzdWx0ICs9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICB3aGlsZSAoaSA8IHRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSB0cnlDb25zdW1lKFwiQ0hBUlwiKTtcbiAgICAgICAgdmFyIG5hbWUgPSB0cnlDb25zdW1lKFwiTkFNRVwiKTtcbiAgICAgICAgdmFyIHBhdHRlcm4gPSB0cnlDb25zdW1lKFwiUEFUVEVSTlwiKTtcbiAgICAgICAgaWYgKG5hbWUgfHwgcGF0dGVybikge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGNoYXIgfHwgXCJcIjtcbiAgICAgICAgICAgIGlmIChwcmVmaXhlcy5pbmRleE9mKHByZWZpeCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcGF0aCArPSBwcmVmaXg7XG4gICAgICAgICAgICAgICAgcHJlZml4ID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gocGF0aCk7XG4gICAgICAgICAgICAgICAgcGF0aCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZSB8fCBrZXkrKyxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogcGF0dGVybiB8fCBkZWZhdWx0UGF0dGVybixcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZShcIk1PRElGSUVSXCIpIHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHZhbHVlID0gY2hhciB8fCB0cnlDb25zdW1lKFwiRVNDQVBFRF9DSEFSXCIpO1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHBhdGggKz0gdmFsdWU7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2gocGF0aCk7XG4gICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgb3BlbiA9IHRyeUNvbnN1bWUoXCJPUEVOXCIpO1xuICAgICAgICBpZiAob3Blbikge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGNvbnN1bWVUZXh0KCk7XG4gICAgICAgICAgICB2YXIgbmFtZV8xID0gdHJ5Q29uc3VtZShcIk5BTUVcIikgfHwgXCJcIjtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuXzEgPSB0cnlDb25zdW1lKFwiUEFUVEVSTlwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGNvbnN1bWVUZXh0KCk7XG4gICAgICAgICAgICBtdXN0Q29uc3VtZShcIkNMT1NFXCIpO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWVfMSB8fCAocGF0dGVybl8xID8ga2V5KysgOiBcIlwiKSxcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBuYW1lXzEgJiYgIXBhdHRlcm5fMSA/IGRlZmF1bHRQYXR0ZXJuIDogcGF0dGVybl8xLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogc3VmZml4LFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBtdXN0Q29uc3VtZShcIkVORFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydHMucGFyc2UgPSBwYXJzZTtcbi8qKlxuICogQ29tcGlsZSBhIHN0cmluZyB0byBhIHRlbXBsYXRlIGZ1bmN0aW9uIGZvciB0aGUgcGF0aC5cbiAqL1xuZnVuY3Rpb24gY29tcGlsZShzdHIsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9GdW5jdGlvbihwYXJzZShzdHIsIG9wdGlvbnMpLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMuY29tcGlsZSA9IGNvbXBpbGU7XG4vKipcbiAqIEV4cG9zZSBhIG1ldGhvZCBmb3IgdHJhbnNmb3JtaW5nIHRva2VucyBpbnRvIHRoZSBwYXRoIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb0Z1bmN0aW9uKHRva2Vucywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIHJlRmxhZ3MgPSBmbGFncyhvcHRpb25zKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLmVuY29kZSwgZW5jb2RlID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2EsIF9iID0gb3B0aW9ucy52YWxpZGF0ZSwgdmFsaWRhdGUgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iO1xuICAgIC8vIENvbXBpbGUgYWxsIHRoZSB0b2tlbnMgaW50byByZWdleHBzLlxuICAgIHZhciBtYXRjaGVzID0gdG9rZW5zLm1hcChmdW5jdGlvbiAodG9rZW4pIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoXCJeKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpJFwiLCByZUZsYWdzKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaV07XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbjtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGRhdGEgPyBkYXRhW3Rva2VuLm5hbWVdIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgdmFyIG9wdGlvbmFsID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiP1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIjtcbiAgICAgICAgICAgIHZhciByZXBlYXQgPSB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXBlYXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbm90IHJlcGVhdCwgYnV0IGdvdCBhbiBhcnJheVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9uYWwpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbm90IGJlIGVtcHR5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHZhbHVlLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWdtZW50ID0gZW5jb2RlKHZhbHVlW2pdLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgYWxsIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbWF0Y2ggXFxcIlwiICsgdG9rZW4ucGF0dGVybiArIFwiXFxcIiwgYnV0IGdvdCBcXFwiXCIgKyBzZWdtZW50ICsgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudCArIHRva2VuLnN1ZmZpeDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiIHx8IHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgIHZhciBzZWdtZW50ID0gZW5jb2RlKFN0cmluZyh2YWx1ZSksIHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudCArIHRva2VuLnN1ZmZpeDtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIHZhciB0eXBlT2ZNZXNzYWdlID0gcmVwZWF0ID8gXCJhbiBhcnJheVwiIDogXCJhIHN0cmluZ1wiO1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gYmUgXCIgKyB0eXBlT2ZNZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICB9O1xufVxuZXhwb3J0cy50b2tlbnNUb0Z1bmN0aW9uID0gdG9rZW5zVG9GdW5jdGlvbjtcbi8qKlxuICogQ3JlYXRlIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIHNwZWMuXG4gKi9cbmZ1bmN0aW9uIG1hdGNoKHN0ciwgb3B0aW9ucykge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgdmFyIHJlID0gcGF0aFRvUmVnZXhwKHN0ciwga2V5cywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5tYXRjaCA9IG1hdGNoO1xuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBvdXRwdXQuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuZGVjb2RlLCBkZWNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHBhdGhuYW1lKSB7XG4gICAgICAgIHZhciBtID0gcmUuZXhlYyhwYXRobmFtZSk7XG4gICAgICAgIGlmICghbSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIHBhdGggPSBtWzBdLCBpbmRleCA9IG0uaW5kZXg7XG4gICAgICAgIHZhciBwYXJhbXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgIGlmIChtW2ldID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiY29udGludWVcIjtcbiAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzW2kgLSAxXTtcbiAgICAgICAgICAgIGlmIChrZXkubW9kaWZpZXIgPT09IFwiKlwiIHx8IGtleS5tb2RpZmllciA9PT0gXCIrXCIpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gbVtpXS5zcGxpdChrZXkucHJlZml4ICsga2V5LnN1ZmZpeCkubWFwKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVjb2RlKHZhbHVlLCBrZXkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IGRlY29kZShtW2ldLCBrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IG0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIF9sb29wXzEoaSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgcGF0aDogcGF0aCwgaW5kZXg6IGluZGV4LCBwYXJhbXM6IHBhcmFtcyB9O1xuICAgIH07XG59XG5leHBvcnRzLnJlZ2V4cFRvRnVuY3Rpb24gPSByZWdleHBUb0Z1bmN0aW9uO1xuLyoqXG4gKiBFc2NhcGUgYSByZWd1bGFyIGV4cHJlc3Npb24gc3RyaW5nLlxuICovXG5mdW5jdGlvbiBlc2NhcGVTdHJpbmcoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oWy4rKj89XiE6JHt9KClbXFxdfC9cXFxcXSkvZywgXCJcXFxcJDFcIik7XG59XG4vKipcbiAqIEdldCB0aGUgZmxhZ3MgZm9yIGEgcmVnZXhwIGZyb20gdGhlIG9wdGlvbnMuXG4gKi9cbmZ1bmN0aW9uIGZsYWdzKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gb3B0aW9ucyAmJiBvcHRpb25zLnNlbnNpdGl2ZSA/IFwiXCIgOiBcImlcIjtcbn1cbi8qKlxuICogUHVsbCBvdXQga2V5cyBmcm9tIGEgcmVnZXhwLlxuICovXG5mdW5jdGlvbiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzKSB7XG4gICAgaWYgKCFrZXlzKVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICAvLyBVc2UgYSBuZWdhdGl2ZSBsb29rYWhlYWQgdG8gbWF0Y2ggb25seSBjYXB0dXJpbmcgZ3JvdXBzLlxuICAgIHZhciBncm91cHMgPSBwYXRoLnNvdXJjZS5tYXRjaCgvXFwoKD8hXFw/KS9nKTtcbiAgICBpZiAoZ3JvdXBzKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ3JvdXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBrZXlzLnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IGksXG4gICAgICAgICAgICAgICAgcHJlZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbi8qKlxuICogVHJhbnNmb3JtIGFuIGFycmF5IGludG8gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5VG9SZWdleHAocGF0aHMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICB2YXIgcGFydHMgPSBwYXRocy5tYXAoZnVuY3Rpb24gKHBhdGgpIHsgcmV0dXJuIHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKS5zb3VyY2U7IH0pO1xuICAgIHJldHVybiBuZXcgUmVnRXhwKFwiKD86XCIgKyBwYXJ0cy5qb2luKFwifFwiKSArIFwiKVwiLCBmbGFncyhvcHRpb25zKSk7XG59XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggcmVnZXhwIGZyb20gc3RyaW5nIGlucHV0LlxuICovXG5mdW5jdGlvbiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRva2Vuc1RvUmVnZXhwKHBhcnNlKHBhdGgsIG9wdGlvbnMpLCBrZXlzLCBvcHRpb25zKTtcbn1cbi8qKlxuICogRXhwb3NlIGEgZnVuY3Rpb24gZm9yIHRha2luZyB0b2tlbnMgYW5kIHJldHVybmluZyBhIFJlZ0V4cC5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9SZWdleHAodG9rZW5zLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLnN0cmljdCwgc3RyaWN0ID0gX2EgPT09IHZvaWQgMCA/IGZhbHNlIDogX2EsIF9iID0gb3B0aW9ucy5zdGFydCwgc3RhcnQgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iLCBfYyA9IG9wdGlvbnMuZW5kLCBlbmQgPSBfYyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9jLCBfZCA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfZCA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfZDtcbiAgICB2YXIgZW5kc1dpdGggPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmVuZHNXaXRoIHx8IFwiXCIpICsgXCJdfCRcIjtcbiAgICB2YXIgZGVsaW1pdGVyID0gXCJbXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl1cIjtcbiAgICB2YXIgcm91dGUgPSBzdGFydCA/IFwiXlwiIDogXCJcIjtcbiAgICAvLyBJdGVyYXRlIG92ZXIgdGhlIHRva2VucyBhbmQgY3JlYXRlIG91ciByZWdleHAgc3RyaW5nLlxuICAgIGZvciAodmFyIF9pID0gMCwgdG9rZW5zXzEgPSB0b2tlbnM7IF9pIDwgdG9rZW5zXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc18xW19pXTtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgcm91dGUgKz0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbikpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4ucHJlZml4KSk7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5zdWZmaXgpKTtcbiAgICAgICAgICAgIGlmICh0b2tlbi5wYXR0ZXJuKSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleXMpXG4gICAgICAgICAgICAgICAgICAgIGtleXMucHVzaCh0b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHByZWZpeCB8fCBzdWZmaXgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRva2VuLm1vZGlmaWVyID09PSBcIitcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtb2QgPSB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIgPyBcIj9cIiA6IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgXCIoKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKD86XCIgKyBzdWZmaXggKyBwcmVmaXggKyBcIig/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSkqKVwiICsgc3VmZml4ICsgXCIpXCIgKyBtb2Q7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgXCIoXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpXCIgKyBzdWZmaXggKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBzdWZmaXggKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChlbmQpIHtcbiAgICAgICAgaWYgKCFzdHJpY3QpXG4gICAgICAgICAgICByb3V0ZSArPSBkZWxpbWl0ZXIgKyBcIj9cIjtcbiAgICAgICAgcm91dGUgKz0gIW9wdGlvbnMuZW5kc1dpdGggPyBcIiRcIiA6IFwiKD89XCIgKyBlbmRzV2l0aCArIFwiKVwiO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIGVuZFRva2VuID0gdG9rZW5zW3Rva2Vucy5sZW5ndGggLSAxXTtcbiAgICAgICAgdmFyIGlzRW5kRGVsaW1pdGVkID0gdHlwZW9mIGVuZFRva2VuID09PSBcInN0cmluZ1wiXG4gICAgICAgICAgICA/IGRlbGltaXRlci5pbmRleE9mKGVuZFRva2VuW2VuZFRva2VuLmxlbmd0aCAtIDFdKSA+IC0xXG4gICAgICAgICAgICA6IC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgICAgIGVuZFRva2VuID09PSB1bmRlZmluZWQ7XG4gICAgICAgIGlmICghc3RyaWN0KSB7XG4gICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgZGVsaW1pdGVyICsgXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpKT9cIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzRW5kRGVsaW1pdGVkKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBcIig/PVwiICsgZGVsaW1pdGVyICsgXCJ8XCIgKyBlbmRzV2l0aCArIFwiKVwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXcgUmVnRXhwKHJvdXRlLCBmbGFncyhvcHRpb25zKSk7XG59XG5leHBvcnRzLnRva2Vuc1RvUmVnZXhwID0gdG9rZW5zVG9SZWdleHA7XG4vKipcbiAqIE5vcm1hbGl6ZSB0aGUgZ2l2ZW4gcGF0aCBzdHJpbmcsIHJldHVybmluZyBhIHJlZ3VsYXIgZXhwcmVzc2lvbi5cbiAqXG4gKiBBbiBlbXB0eSBhcnJheSBjYW4gYmUgcGFzc2VkIGluIGZvciB0aGUga2V5cywgd2hpY2ggd2lsbCBob2xkIHRoZVxuICogcGxhY2Vob2xkZXIga2V5IGRlc2NyaXB0aW9ucy4gRm9yIGV4YW1wbGUsIHVzaW5nIGAvdXNlci86aWRgLCBga2V5c2Agd2lsbFxuICogY29udGFpbiBgW3sgbmFtZTogJ2lkJywgZGVsaW1pdGVyOiAnLycsIG9wdGlvbmFsOiBmYWxzZSwgcmVwZWF0OiBmYWxzZSB9XWAuXG4gKi9cbmZ1bmN0aW9uIHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKHBhdGggaW5zdGFuY2VvZiBSZWdFeHApXG4gICAgICAgIHJldHVybiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzKTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwYXRoKSlcbiAgICAgICAgcmV0dXJuIGFycmF5VG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5wYXRoVG9SZWdleHAgPSBwYXRoVG9SZWdleHA7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBfX05FWFRfREFUQV9fICovXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gsXG4gIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuaW1wb3J0IHsgR29vZFBhZ2VDYWNoZSwgU3R5bGVTaGVldFR1cGxlIH0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3BhZ2UtbG9hZGVyJ1xuaW1wb3J0IHsgZGVub3JtYWxpemVQYWdlUGF0aCB9IGZyb20gJy4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGgnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldExvY2F0aW9uT3JpZ2luLFxuICBnZXRVUkwsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIE5leHRQYWdlQ29udGV4dCxcbiAgU1QsXG59IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgaXNEeW5hbWljUm91dGUgfSBmcm9tICcuL3V0aWxzL2lzLWR5bmFtaWMnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi91dGlscy9xdWVyeXN0cmluZydcbmltcG9ydCByZXNvbHZlUmV3cml0ZXMgZnJvbSAnLi91dGlscy9yZXNvbHZlLXJld3JpdGVzJ1xuaW1wb3J0IHsgZ2V0Um91dGVNYXRjaGVyIH0gZnJvbSAnLi91dGlscy9yb3V0ZS1tYXRjaGVyJ1xuaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vdXRpbHMvcm91dGUtcmVnZXgnXG5cbmludGVyZmFjZSBUcmFuc2l0aW9uT3B0aW9ucyB7XG4gIHNoYWxsb3c/OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBOZXh0SGlzdG9yeVN0YXRlIHtcbiAgdXJsOiBzdHJpbmdcbiAgYXM6IHN0cmluZ1xuICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xufVxuXG50eXBlIEhpc3RvcnlTdGF0ZSA9IG51bGwgfCB7IF9fTjogZmFsc2UgfSB8ICh7IF9fTjogdHJ1ZSB9ICYgTmV4dEhpc3RvcnlTdGF0ZSlcblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICBjYW5jZWxsZWQ6IHRydWUsXG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gIHJldHVybiBiYXNlUGF0aCAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nKVxuICAgID8gcGF0aCA9PT0gJy8nXG4gICAgICA/IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGJhc2VQYXRoKVxuICAgICAgOiBiYXNlUGF0aCArIHBhdGhcbiAgICA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG59XG5cbi8qKlxuICogRGV0ZWN0cyB3aGV0aGVyIGEgZ2l2ZW4gdXJsIGlzIHJvdXRhYmxlIGJ5IHRoZSBOZXh0LmpzIHJvdXRlciAoYnJvd3NlciBvbmx5KS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTG9jYWxVUkwodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykpIHJldHVybiB0cnVlXG4gIHRyeSB7XG4gICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gICAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pXG4gICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG4vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUhyZWYoY3VycmVudFBhdGg6IHN0cmluZywgaHJlZjogVXJsKTogc3RyaW5nIHtcbiAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgY29uc3QgYmFzZSA9IG5ldyBVUkwoY3VycmVudFBhdGgsICdodHRwOi8vbicpXG4gIGNvbnN0IHVybEFzU3RyaW5nID1cbiAgICB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZilcbiAgdHJ5IHtcbiAgICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwodXJsQXNTdHJpbmcsIGJhc2UpXG4gICAgZmluYWxVcmwucGF0aG5hbWUgPSBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSlcbiAgICAvLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuICAgIHJldHVybiBmaW5hbFVybC5vcmlnaW4gPT09IGJhc2Uub3JpZ2luXG4gICAgICA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aClcbiAgICAgIDogZmluYWxVcmwuaHJlZlxuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIHVybEFzU3RyaW5nXG4gIH1cbn1cblxuY29uc3QgUEFHRV9MT0FEX0VSUk9SID0gU3ltYm9sKCdQQUdFX0xPQURfRVJST1InKVxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtMb2FkaW5nRXJyb3IoZXJyOiBFcnJvcik6IEVycm9yIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsIFBBR0VfTE9BRF9FUlJPUiwge30pXG59XG5cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXI6IE5leHRSb3V0ZXIsIHVybDogVXJsLCBhczogVXJsKSB7XG4gIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICByZXR1cm4ge1xuICAgIHVybDogYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCB1cmwpKSxcbiAgICBhczogYXMgPyBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIGFzKSkgOiBhcyxcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgTmV4dFJvdXRlciA9IEJhc2VSb3V0ZXIgJlxuICBQaWNrPFxuICAgIFJvdXRlcixcbiAgICB8ICdwdXNoJ1xuICAgIHwgJ3JlcGxhY2UnXG4gICAgfCAncmVsb2FkJ1xuICAgIHwgJ2JhY2snXG4gICAgfCAncHJlZmV0Y2gnXG4gICAgfCAnYmVmb3JlUG9wU3RhdGUnXG4gICAgfCAnZXZlbnRzJ1xuICAgIHwgJ2lzRmFsbGJhY2snXG4gID5cblxuZXhwb3J0IHR5cGUgUHJlZmV0Y2hPcHRpb25zID0ge1xuICBwcmlvcml0eT86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIHN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxuICBwcm9wcz86IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgZXJyPzogRXJyb3JcbiAgZXJyb3I/OiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHMgPSBQaWNrPFByaXZhdGVSb3V0ZUluZm8sICdDb21wb25lbnQnIHwgJ2Vycic+ICYge1xuICByb3V0ZXI6IFJvdXRlclxufSAmIFJlY29yZDxzdHJpbmcsIGFueT5cbmV4cG9ydCB0eXBlIEFwcENvbXBvbmVudCA9IENvbXBvbmVudFR5cGU8QXBwUHJvcHM+XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sIEFwcDogQXBwQ29tcG9uZW50KSA9PiBQcm9taXNlPHZvaWQ+XG5cbnR5cGUgQmVmb3JlUG9wU3RhdGVDYWxsYmFjayA9IChzdGF0ZTogTmV4dEhpc3RvcnlTdGF0ZSkgPT4gYm9vbGVhblxuXG50eXBlIENvbXBvbmVudExvYWRDYW5jZWwgPSAoKCkgPT4gdm9pZCkgfCBudWxsXG5cbnR5cGUgSGlzdG9yeU1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnIHwgJ3B1c2hTdGF0ZSdcblxuY29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gPVxuICBwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OICYmXG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICdzY3JvbGxSZXN0b3JhdGlvbicgaW4gd2luZG93Lmhpc3RvcnlcblxuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmw6IHN0cmluZywgYXR0ZW1wdHM6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAvL1xuICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAvLyA+IG9wdGlvbi5cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgLy9cbiAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgIGlmICghcmVzLm9rKSB7XG4gICAgICBpZiAoYXR0ZW1wdHMgPiAxICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgIHJldHVybiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMgLSAxKVxuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgIH1cblxuICAgIHJldHVybiByZXMuanNvbigpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWY6IHN0cmluZywgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAvLyBsb29wLlxuICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgIG1hcmtMb2FkaW5nRXJyb3IoZXJyKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIGltcGxlbWVudHMgQmFzZVJvdXRlciB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqL1xuICBjb21wb25lbnRzOiB7IFtwYXRobmFtZTogc3RyaW5nXTogUHJpdmF0ZVJvdXRlSW5mbyB9XG4gIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gIHNkYzogeyBbYXNQYXRoOiBzdHJpbmddOiBvYmplY3QgfSA9IHt9XG4gIHN1YjogU3Vic2NyaXB0aW9uXG4gIGNsYzogQ29tcG9uZW50TG9hZENhbmNlbFxuICBwYWdlTG9hZGVyOiBhbnlcbiAgX2JwczogQmVmb3JlUG9wU3RhdGVDYWxsYmFjayB8IHVuZGVmaW5lZFxuICBldmVudHM6IE1pdHRFbWl0dGVyXG4gIF93cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICBpc1NzcjogYm9vbGVhblxuICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gIF9pbkZsaWdodFJvdXRlPzogc3RyaW5nXG4gIF9zaGFsbG93PzogYm9vbGVhblxuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGluaXRpYWxTdHlsZVNoZWV0cyxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgfToge1xuICAgICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25cbiAgICAgIGluaXRpYWxQcm9wczogYW55XG4gICAgICBwYWdlTG9hZGVyOiBhbnlcbiAgICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgaW5pdGlhbFN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICAgICAgQXBwOiBBcHBDb21wb25lbnRcbiAgICAgIHdyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gICAgICBlcnI/OiBFcnJvclxuICAgICAgaXNGYWxsYmFjazogYm9vbGVhblxuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0czogaW5pdGlhbFN0eWxlU2hlZXRzLFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgIENvbXBvbmVudDogQXBwIGFzIENvbXBvbmVudFR5cGUsXG4gICAgICBzdHlsZVNoZWV0czogW1xuICAgICAgICAvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXG4gICAgICBdLFxuICAgIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgdGhpcy5hc1BhdGggPVxuICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgICAgZ2V0VVJMKClcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG5cbiAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCdcblxuICAgICAgICAgIGxldCBzY3JvbGxEZWJvdW5jZVRpbWVvdXQ6IHVuZGVmaW5lZCB8IE5vZGVKUy5UaW1lb3V0XG5cbiAgICAgICAgICBjb25zdCBkZWJvdW5jZWRTY3JvbGxTYXZlID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHNjcm9sbERlYm91bmNlVGltZW91dCkgY2xlYXJUaW1lb3V0KHNjcm9sbERlYm91bmNlVGltZW91dClcblxuICAgICAgICAgICAgc2Nyb2xsRGVib3VuY2VUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgdXJsLCBhczogY3VyQXMsIG9wdGlvbnMgfSA9IGhpc3Rvcnkuc3RhdGVcbiAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgY3VyQXMsXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICAgICAgICAgICAgX05fWDogd2luZG93LnNjcm9sbFgsXG4gICAgICAgICAgICAgICAgICBfTl9ZOiB3aW5kb3cuc2Nyb2xsWSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9LCAxMClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZGVib3VuY2VkU2Nyb2xsU2F2ZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0gZS5zdGF0ZSBhcyBIaXN0b3J5U3RhdGVcblxuICAgIGlmICghc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zIH0gPSBzdGF0ZVxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAodGhpcy5pc1NzciAmJiBhcyA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhzdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlKFxuICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICB1cmwsXG4gICAgICBhcyxcbiAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXG4gICAgICB9KVxuICAgIClcbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgYXN5bmMgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybFxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICB9XG4gICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgIGlmIChTVCkge1xuICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9pbkZsaWdodFJvdXRlKSB7XG4gICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlKVxuICAgIH1cblxuICAgIGNvbnN0IGNsZWFuZWRBcyA9IGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzXG4gICAgdGhpcy5faW5GbGlnaHRSb3V0ZSA9IGFzXG5cbiAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpIHtcbiAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzKVxuICAgICAgLy8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKVxuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdKVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcylcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuICAgIC8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuICAgIGNvbnN0IHsgX19yZXdyaXRlczogcmV3cml0ZXMgfSA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5wcm9taXNlZEJ1aWxkTWFuaWZlc3RcblxuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lLCBzZWFyY2hQYXJhbXMgfSA9IHBhcnNlZFxuXG4gICAgcGFyc2VkID0gdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkLCBwYWdlcykgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuXG4gICAgY29uc3QgcXVlcnkgPSBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcylcblxuICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICA/IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSlcbiAgICAgIDogcGF0aG5hbWVcblxuICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpKSB7XG4gICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcblxuICAgIC8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4gICAgLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTKSB7XG4gICAgICByZXNvbHZlZEFzID0gcmVzb2x2ZVJld3JpdGVzKFxuICAgICAgICBhcyxcbiAgICAgICAgcGFnZXMsXG4gICAgICAgIGJhc2VQYXRoLFxuICAgICAgICByZXdyaXRlcyxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIChwOiBzdHJpbmcpID0+IHRoaXMuX3Jlc29sdmVIcmVmKHsgcGF0aG5hbWU6IHAgfSwgcGFnZXMpLnBhdGhuYW1lIVxuICAgICAgKVxuICAgIH1cbiAgICByZXNvbHZlZEFzID0gZGVsQmFzZVBhdGgocmVzb2x2ZWRBcylcblxuICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgIGNvbnN0IHsgcGF0aG5hbWU6IGFzUGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwocmVzb2x2ZWRBcylcbiAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICApXG5cbiAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYCBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgICtcbiAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW5jb21wYXRpYmxlLWhyZWYtYXNgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgfVxuICAgIH1cblxuICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzKVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgc2hhbGxvd1xuICAgICAgKVxuICAgICAgbGV0IHsgZXJyb3IgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcylcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBhcHBDb21wOiBhbnkgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50XG4gICAgICAgIDsod2luZG93IGFzIGFueSkubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgIShyb3V0ZUluZm8uQ29tcG9uZW50IGFzIGFueSkuZ2V0SW5pdGlhbFByb3BzXG4gICAgICB9XG5cbiAgICAgIGF3YWl0IHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZSEsIHF1ZXJ5LCBjbGVhbmVkQXMsIHJvdXRlSW5mbykuY2F0Y2goXG4gICAgICAgIChlKSA9PiB7XG4gICAgICAgICAgaWYgKGUuY2FuY2VsbGVkKSBlcnJvciA9IGVycm9yIHx8IGVcbiAgICAgICAgICBlbHNlIHRocm93IGVcbiAgICAgICAgfVxuICAgICAgKVxuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGNsZWFuZWRBcylcbiAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgIH1cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uICYmICdfTl9YJyBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgd2luZG93LnNjcm9sbFRvKChvcHRpb25zIGFzIGFueSkuX05fWCwgKG9wdGlvbnMgYXMgYW55KS5fTl9ZKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcylcblxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fVxuICApOiB2b2lkIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IGdldFVSTCgpICE9PSBhcykge1xuICAgICAgdGhpcy5fc2hhbGxvdyA9IG9wdGlvbnMuc2hhbGxvd1xuICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXShcbiAgICAgICAge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgIF9fTjogdHJ1ZSxcbiAgICAgICAgfSBhcyBIaXN0b3J5U3RhdGUsXG4gICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAnJyxcbiAgICAgICAgYXNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICBlcnI6IEVycm9yICYgeyBjb2RlOiBhbnk7IGNhbmNlbGxlZDogYm9vbGVhbiB9LFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgbG9hZEVycm9yRmFpbD86IGJvb2xlYW5cbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgIC8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG5cbiAgICBpZiAoUEFHRV9MT0FEX0VSUk9SIGluIGVyciB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzKVxuXG4gICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcblxuICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG5cbiAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgIHRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IHBhZ2U6IENvbXBvbmVudCwgc3R5bGVTaGVldHMgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoXG4gICAgICAgICcvX2Vycm9yJ1xuICAgICAgKVxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzLFxuICAgICAgICBlcnIsXG4gICAgICAgIGVycm9yOiBlcnIsXG4gICAgICB9XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IGF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgIGVycixcbiAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgfSBhcyBhbnkpXG4gICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKVxuICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihyb3V0ZUluZm9FcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHRydWUpXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgc2hhbGxvdzogYm9vbGVhbiA9IGZhbHNlXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdXG5cbiAgICAgIGlmIChzaGFsbG93ICYmIGNhY2hlZFJvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICByZXR1cm4gY2FjaGVkUm91dGVJbmZvXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyA9IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA/IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA6IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oKHJlcykgPT4gKHtcbiAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICBzdHlsZVNoZWV0czogcmVzLnN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgIH0pKVxuXG4gICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpXG4gICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBkYXRhSHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChfX05fU1NHIHx8IF9fTl9TU1ApIHtcbiAgICAgICAgZGF0YUhyZWYgPSB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgICAgZGVsQmFzZVBhdGgoYXMpLFxuICAgICAgICAgIF9fTl9TU0dcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGE8UHJpdmF0ZVJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgX19OX1NTR1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgKVxuICAgICAgKVxuICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm9cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcylcbiAgICB9XG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm9cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSlcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9cbiAgYmVmb3JlUG9wU3RhdGUoY2I6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2spIHtcbiAgICB0aGlzLl9icHMgPSBjYlxuICB9XG5cbiAgb25seUFIYXNoQ2hhbmdlKGFzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJylcbiAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJylcblxuICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2hcbiAgfVxuXG4gIHNjcm9sbFRvSGFzaChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpXG4gICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlXG4gICAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICBfcmVzb2x2ZUhyZWYocGFyc2VkSHJlZjogVXJsT2JqZWN0LCBwYWdlczogc3RyaW5nW10pIHtcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRIcmVmXG4gICAgY29uc3QgY2xlYW5QYXRobmFtZSA9IGRlbm9ybWFsaXplUGFnZVBhdGgoZGVsQmFzZVBhdGgocGF0aG5hbWUhKSlcblxuICAgIGlmIChjbGVhblBhdGhuYW1lID09PSAnLzQwNCcgfHwgY2xlYW5QYXRobmFtZSA9PT0gJy9fZXJyb3InKSB7XG4gICAgICByZXR1cm4gcGFyc2VkSHJlZlxuICAgIH1cblxuICAgIC8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbiAgICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUhKSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgcGFnZXMuc29tZSgocGFnZSkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgaXNEeW5hbWljUm91dGUocGFnZSkgJiZcbiAgICAgICAgICBnZXRSb3V0ZVJlZ2V4KHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSEpXG4gICAgICAgICkge1xuICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYWdlKVxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiBwYXJzZWRIcmVmXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBhc3luYyBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSB9ID0gcGFyc2VkXG5cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgdGhpcy5wYWdlTG9hZGVyLnByZWZldGNoRGF0YSh1cmwsIGFzUGF0aCksXG4gICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgXSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPEdvb2RQYWdlQ2FjaGU+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1tjYWNoZUtleV0pIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKVxuICAgIH1cbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwIGFzIEFwcENvbXBvbmVudClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksIGFzKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KGRhdGE6IFByaXZhdGVSb3V0ZUluZm8pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCBhcyBBcHBDb21wb25lbnQpXG4gIH1cbn1cbiIsIi8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgKiBhcyBxdWVyeXN0cmluZyBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzID0gL2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqOiBVcmxPYmplY3QpIHtcbiAgbGV0IHsgYXV0aCwgaG9zdG5hbWUgfSA9IHVybE9ialxuICBsZXQgcHJvdG9jb2wgPSB1cmxPYmoucHJvdG9jb2wgfHwgJydcbiAgbGV0IHBhdGhuYW1lID0gdXJsT2JqLnBhdGhuYW1lIHx8ICcnXG4gIGxldCBoYXNoID0gdXJsT2JqLmhhc2ggfHwgJydcbiAgbGV0IHF1ZXJ5ID0gdXJsT2JqLnF1ZXJ5IHx8ICcnXG4gIGxldCBob3N0OiBzdHJpbmcgfCBmYWxzZSA9IGZhbHNlXG5cbiAgYXV0aCA9IGF1dGggPyBlbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksICc6JykgKyAnQCcgOiAnJ1xuXG4gIGlmICh1cmxPYmouaG9zdCkge1xuICAgIGhvc3QgPSBhdXRoICsgdXJsT2JqLmhvc3RcbiAgfSBlbHNlIGlmIChob3N0bmFtZSkge1xuICAgIGhvc3QgPSBhdXRoICsgKH5ob3N0bmFtZS5pbmRleE9mKCc6JykgPyBgWyR7aG9zdG5hbWV9XWAgOiBob3N0bmFtZSlcbiAgICBpZiAodXJsT2JqLnBvcnQpIHtcbiAgICAgIGhvc3QgKz0gJzonICsgdXJsT2JqLnBvcnRcbiAgICB9XG4gIH1cblxuICBpZiAocXVlcnkgJiYgdHlwZW9mIHF1ZXJ5ID09PSAnb2JqZWN0Jykge1xuICAgIHF1ZXJ5ID0gU3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkgYXMgUGFyc2VkVXJsUXVlcnkpKVxuICB9XG5cbiAgbGV0IHNlYXJjaCA9IHVybE9iai5zZWFyY2ggfHwgKHF1ZXJ5ICYmIGA/JHtxdWVyeX1gKSB8fCAnJ1xuXG4gIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5zdWJzdHIoLTEpICE9PSAnOicpIHByb3RvY29sICs9ICc6J1xuXG4gIGlmIChcbiAgICB1cmxPYmouc2xhc2hlcyB8fFxuICAgICgoIXByb3RvY29sIHx8IHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpICYmIGhvc3QgIT09IGZhbHNlKVxuICApIHtcbiAgICBob3N0ID0gJy8vJyArIChob3N0IHx8ICcnKVxuICAgIGlmIChwYXRobmFtZSAmJiBwYXRobmFtZVswXSAhPT0gJy8nKSBwYXRobmFtZSA9ICcvJyArIHBhdGhuYW1lXG4gIH0gZWxzZSBpZiAoIWhvc3QpIHtcbiAgICBob3N0ID0gJydcbiAgfVxuXG4gIGlmIChoYXNoICYmIGhhc2hbMF0gIT09ICcjJykgaGFzaCA9ICcjJyArIGhhc2hcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2hbMF0gIT09ICc/Jykgc2VhcmNoID0gJz8nICsgc2VhcmNoXG5cbiAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csIGVuY29kZVVSSUNvbXBvbmVudClcbiAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoJyMnLCAnJTIzJylcblxuICByZXR1cm4gYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWBcbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0TG9jYXRpb25PcmlnaW4gfSBmcm9tICcuLi8uLi91dGlscydcblxuY29uc3QgRFVNTVlfQkFTRSA9IG5ldyBVUkwoXG4gIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gJ2h0dHA6Ly9uJyA6IGdldExvY2F0aW9uT3JpZ2luKClcbilcblxuLyoqXG4gKiBQYXJzZXMgcGF0aC1yZWxhdGl2ZSB1cmxzIChlLmcuIGAvaGVsbG8vd29ybGQ/Zm9vPWJhcmApLiBJZiB1cmwgaXNuJ3QgcGF0aC1yZWxhdGl2ZVxuICogKGUuZy4gYC4vaGVsbG9gKSB0aGVuIGF0IGxlYXN0IGJhc2UgbXVzdCBiZS5cbiAqIEFic29sdXRlIHVybHMgYXJlIHJlamVjdGVkIHdpdGggb25lIGV4Y2VwdGlvbiwgaW4gdGhlIGJyb3dzZXIsIGFic29sdXRlIHVybHMgdGhhdCBhcmUgb25cbiAqIHRoZSBjdXJyZW50IG9yaWdpbiB3aWxsIGJlIHBhcnNlZCBhcyByZWxhdGl2ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VSZWxhdGl2ZVVybCh1cmw6IHN0cmluZywgYmFzZT86IHN0cmluZykge1xuICBjb25zdCByZXNvbHZlZEJhc2UgPSBiYXNlID8gbmV3IFVSTChiYXNlLCBEVU1NWV9CQVNFKSA6IERVTU1ZX0JBU0VcbiAgY29uc3Qge1xuICAgIHBhdGhuYW1lLFxuICAgIHNlYXJjaFBhcmFtcyxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmLFxuICAgIG9yaWdpbixcbiAgICBwcm90b2NvbCxcbiAgfSA9IG5ldyBVUkwodXJsLCByZXNvbHZlZEJhc2UpXG4gIGlmIChcbiAgICBvcmlnaW4gIT09IERVTU1ZX0JBU0Uub3JpZ2luIHx8XG4gICAgKHByb3RvY29sICE9PSAnaHR0cDonICYmIHByb3RvY29sICE9PSAnaHR0cHM6JylcbiAgKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQ6IGludmFsaWQgcmVsYXRpdmUgVVJMJylcbiAgfVxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIHNlYXJjaFBhcmFtcyxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmOiBocmVmLnNsaWNlKERVTU1ZX0JBU0Uub3JpZ2luLmxlbmd0aCksXG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICduZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAnXG5cbmV4cG9ydCB7IHBhdGhUb1JlZ2V4cCB9XG5cbmV4cG9ydCBjb25zdCBtYXRjaGVyT3B0aW9ucyA9IHtcbiAgc2Vuc2l0aXZlOiBmYWxzZSxcbiAgZGVsaW1pdGVyOiAnLycsXG4gIGRlY29kZTogZGVjb2RlUGFyYW0sXG59XG5cbmV4cG9ydCBjb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zID0ge1xuICAuLi5tYXRjaGVyT3B0aW9ucyxcbiAgc3RyaWN0OiB0cnVlLFxufVxuXG5leHBvcnQgZGVmYXVsdCAoY3VzdG9tUm91dGUgPSBmYWxzZSkgPT4ge1xuICByZXR1cm4gKHBhdGg6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IGtleXM6IHBhdGhUb1JlZ2V4cC5LZXlbXSA9IFtdXG4gICAgY29uc3QgbWF0Y2hlclJlZ2V4ID0gcGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChcbiAgICAgIHBhdGgsXG4gICAgICBrZXlzLFxuICAgICAgY3VzdG9tUm91dGUgPyBjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zIDogbWF0Y2hlck9wdGlvbnNcbiAgICApXG4gICAgY29uc3QgbWF0Y2hlciA9IHBhdGhUb1JlZ2V4cC5yZWdleHBUb0Z1bmN0aW9uKFxuICAgICAgbWF0Y2hlclJlZ2V4LFxuICAgICAga2V5cyxcbiAgICAgIG1hdGNoZXJPcHRpb25zXG4gICAgKVxuXG4gICAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCwgcGFyYW1zPzogYW55KSA9PiB7XG4gICAgICBjb25zdCByZXMgPSBwYXRobmFtZSA9PSBudWxsID8gZmFsc2UgOiBtYXRjaGVyKHBhdGhuYW1lKVxuICAgICAgaWYgKCFyZXMpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGlmIChjdXN0b21Sb3V0ZSkge1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgICAgICAgLy8gdW5uYW1lZCBwYXJhbXMgc2hvdWxkIGJlIHJlbW92ZWQgYXMgdGhleVxuICAgICAgICAgIC8vIGFyZSBub3QgYWxsb3dlZCB0byBiZSB1c2VkIGluIHRoZSBkZXN0aW5hdGlvblxuICAgICAgICAgIGlmICh0eXBlb2Yga2V5Lm5hbWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBkZWxldGUgKHJlcy5wYXJhbXMgYXMgYW55KVtrZXkubmFtZV1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsgLi4ucGFyYW1zLCAuLi5yZXMucGFyYW1zIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVjb2RlUGFyYW0ocGFyYW06IHN0cmluZykge1xuICB0cnkge1xuICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nKVxuICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgdGhyb3cgZXJyXG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi9xdWVyeXN0cmluZydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICduZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAnXG5cbnR5cGUgUGFyYW1zID0geyBbcGFyYW06IHN0cmluZ106IGFueSB9XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByZXBhcmVEZXN0aW5hdGlvbihcbiAgZGVzdGluYXRpb246IHN0cmluZyxcbiAgcGFyYW1zOiBQYXJhbXMsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgYXBwZW5kUGFyYW1zVG9RdWVyeTogYm9vbGVhbixcbiAgYmFzZVBhdGg6IHN0cmluZ1xuKSB7XG4gIGxldCBwYXJzZWREZXN0aW5hdGlvbjoge1xuICAgIHF1ZXJ5PzogUGFyc2VkVXJsUXVlcnlcbiAgICBwcm90b2NvbD86IHN0cmluZ1xuICAgIGhvc3RuYW1lPzogc3RyaW5nXG4gICAgcG9ydD86IHN0cmluZ1xuICB9ICYgUmV0dXJuVHlwZTx0eXBlb2YgcGFyc2VSZWxhdGl2ZVVybD4gPSB7fSBhcyBhbnlcblxuICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHtcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgc2VhcmNoUGFyYW1zLFxuICAgICAgaGFzaCxcbiAgICAgIGhvc3RuYW1lLFxuICAgICAgcG9ydCxcbiAgICAgIHByb3RvY29sLFxuICAgICAgc2VhcmNoLFxuICAgICAgaHJlZixcbiAgICB9ID0gbmV3IFVSTChkZXN0aW5hdGlvbilcblxuICAgIHBhcnNlZERlc3RpbmF0aW9uID0ge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBzZWFyY2hQYXJhbXMsXG4gICAgICBoYXNoLFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBob3N0bmFtZSxcbiAgICAgIHBvcnQsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH1cbiAgfVxuXG4gIHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5ID0gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5zZWFyY2hQYXJhbXNcbiAgKVxuICBjb25zdCBkZXN0UXVlcnkgPSBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeVxuICBjb25zdCBkZXN0UGF0aCA9IGAke3BhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lIX0ke1xuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggfHwgJydcbiAgfWBcbiAgY29uc3QgZGVzdFBhdGhQYXJhbUtleXM6IHBhdGhUb1JlZ2V4cC5LZXlbXSA9IFtdXG4gIHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoZGVzdFBhdGgsIGRlc3RQYXRoUGFyYW1LZXlzKVxuXG4gIGNvbnN0IGRlc3RQYXRoUGFyYW1zID0gZGVzdFBhdGhQYXJhbUtleXMubWFwKChrZXkpID0+IGtleS5uYW1lKVxuXG4gIGxldCBkZXN0aW5hdGlvbkNvbXBpbGVyID0gcGF0aFRvUmVnZXhwLmNvbXBpbGUoXG4gICAgZGVzdFBhdGgsXG4gICAgLy8gd2UgZG9uJ3QgdmFsaWRhdGUgd2hpbGUgY29tcGlsaW5nIHRoZSBkZXN0aW5hdGlvbiBzaW5jZSB3ZSBzaG91bGRcbiAgICAvLyBoYXZlIGFscmVhZHkgdmFsaWRhdGVkIGJlZm9yZSB3ZSBnb3QgdG8gdGhpcyBwb2ludCBhbmQgdmFsaWRhdGluZ1xuICAgIC8vIGJyZWFrcyBjb21waWxpbmcgZGVzdGluYXRpb25zIHdpdGggbmFtZWQgcGF0dGVybiBwYXJhbXMgZnJvbSB0aGUgc291cmNlXG4gICAgLy8gZS5nLiAvc29tZXRoaW5nOmhlbGxvKC4qKSAtPiAvYW5vdGhlci86aGVsbG8gaXMgYnJva2VuIHdpdGggdmFsaWRhdGlvblxuICAgIC8vIHNpbmNlIGNvbXBpbGUgdmFsaWRhdGlvbiBpcyBtZWFudCBmb3IgcmV2ZXJzaW5nIGFuZCBub3QgZm9yIGluc2VydGluZ1xuICAgIC8vIHBhcmFtcyBmcm9tIGEgc2VwYXJhdGUgcGF0aC1yZWdleCBpbnRvIGFub3RoZXJcbiAgICB7IHZhbGlkYXRlOiBmYWxzZSB9XG4gIClcbiAgbGV0IG5ld1VybFxuXG4gIC8vIHVwZGF0ZSBhbnkgcGFyYW1zIGluIHF1ZXJ5IHZhbHVlc1xuICBmb3IgKGNvbnN0IFtrZXksIHN0ck9yQXJyYXldIG9mIE9iamVjdC5lbnRyaWVzKGRlc3RRdWVyeSkpIHtcbiAgICBsZXQgdmFsdWUgPSBBcnJheS5pc0FycmF5KHN0ck9yQXJyYXkpID8gc3RyT3JBcnJheVswXSA6IHN0ck9yQXJyYXlcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIC8vIHRoZSB2YWx1ZSBuZWVkcyB0byBzdGFydCB3aXRoIGEgZm9yd2FyZC1zbGFzaCB0byBiZSBjb21waWxlZFxuICAgICAgLy8gY29ycmVjdGx5XG4gICAgICB2YWx1ZSA9IGAvJHt2YWx1ZX1gXG4gICAgICBjb25zdCBxdWVyeUNvbXBpbGVyID0gcGF0aFRvUmVnZXhwLmNvbXBpbGUodmFsdWUsIHsgdmFsaWRhdGU6IGZhbHNlIH0pXG4gICAgICB2YWx1ZSA9IHF1ZXJ5Q29tcGlsZXIocGFyYW1zKS5zdWJzdHIoMSlcbiAgICB9XG4gICAgZGVzdFF1ZXJ5W2tleV0gPSB2YWx1ZVxuICB9XG5cbiAgLy8gYWRkIHBhdGggcGFyYW1zIHRvIHF1ZXJ5IGlmIGl0J3Mgbm90IGEgcmVkaXJlY3QgYW5kIG5vdFxuICAvLyBhbHJlYWR5IGRlZmluZWQgaW4gZGVzdGluYXRpb24gcXVlcnkgb3IgcGF0aFxuICBjb25zdCBwYXJhbUtleXMgPSBPYmplY3Qua2V5cyhwYXJhbXMpXG5cbiAgaWYgKFxuICAgIGFwcGVuZFBhcmFtc1RvUXVlcnkgJiZcbiAgICAhcGFyYW1LZXlzLnNvbWUoKGtleSkgPT4gZGVzdFBhdGhQYXJhbXMuaW5jbHVkZXMoa2V5KSlcbiAgKSB7XG4gICAgZm9yIChjb25zdCBrZXkgb2YgcGFyYW1LZXlzKSB7XG4gICAgICBpZiAoIShrZXkgaW4gZGVzdFF1ZXJ5KSkge1xuICAgICAgICBkZXN0UXVlcnlba2V5XSA9IHBhcmFtc1trZXldXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc2hvdWxkQWRkQmFzZVBhdGggPSBkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykgJiYgYmFzZVBhdGhcblxuICB0cnkge1xuICAgIG5ld1VybCA9IGAke3Nob3VsZEFkZEJhc2VQYXRoID8gYmFzZVBhdGggOiAnJ30ke2VuY29kZVVSSShcbiAgICAgIGRlc3RpbmF0aW9uQ29tcGlsZXIocGFyYW1zKVxuICAgICl9YFxuXG4gICAgY29uc3QgW3BhdGhuYW1lLCBoYXNoXSA9IG5ld1VybC5zcGxpdCgnIycpXG4gICAgcGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggPSBgJHtoYXNoID8gJyMnIDogJyd9JHtoYXNoIHx8ICcnfWBcbiAgICBkZWxldGUgcGFyc2VkRGVzdGluYXRpb24uc2VhcmNoXG4gICAgZGVsZXRlIHBhcnNlZERlc3RpbmF0aW9uLnNlYXJjaFBhcmFtc1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBpZiAoZXJyLm1lc3NhZ2UubWF0Y2goL0V4cGVjdGVkIC4qPyB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5LykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYFRvIHVzZSBhIG11bHRpLW1hdGNoIGluIHRoZSBkZXN0aW5hdGlvbiB5b3UgbXVzdCBhZGQgXFxgKlxcYCBhdCB0aGUgZW5kIG9mIHRoZSBwYXJhbSBuYW1lIHRvIHNpZ25pZnkgaXQgc2hvdWxkIHJlcGVhdC4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW52YWxpZC1tdWx0aS1tYXRjaGBcbiAgICAgIClcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH1cblxuICAvLyBRdWVyeSBtZXJnZSBvcmRlciBsb3dlc3QgcHJpb3JpdHkgdG8gaGlnaGVzdFxuICAvLyAxLiBpbml0aWFsIFVSTCBxdWVyeSB2YWx1ZXNcbiAgLy8gMi4gcGF0aCBzZWdtZW50IHZhbHVlc1xuICAvLyAzLiBkZXN0aW5hdGlvbiBzcGVjaWZpZWQgcXVlcnkgdmFsdWVzXG4gIHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5ID0ge1xuICAgIC4uLnF1ZXJ5LFxuICAgIC4uLnBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5LFxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBuZXdVcmwsXG4gICAgcGFyc2VkRGVzdGluYXRpb24sXG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KFxuICBzZWFyY2hQYXJhbXM6IFVSTFNlYXJjaFBhcmFtc1xuKTogUGFyc2VkVXJsUXVlcnkge1xuICBjb25zdCBxdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgIGlmICh0eXBlb2YgcXVlcnlba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSB2YWx1ZVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSkge1xuICAgICAgOyhxdWVyeVtrZXldIGFzIHN0cmluZ1tdKS5wdXNoKHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV0gYXMgc3RyaW5nLCB2YWx1ZV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBxdWVyeVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhcbiAgdXJsUXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBjb25zdCByZXN1bHQgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcbiAgT2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4gcmVzdWx0LmFwcGVuZChrZXksIGl0ZW0pKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQuc2V0KGtleSwgdmFsdWUpXG4gICAgfVxuICB9KVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24oXG4gIHRhcmdldDogVVJMU2VhcmNoUGFyYW1zLFxuICAuLi5zZWFyY2hQYXJhbXNMaXN0OiBVUkxTZWFyY2hQYXJhbXNbXVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgc2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKChzZWFyY2hQYXJhbXMpID0+IHtcbiAgICBBcnJheS5mcm9tKHNlYXJjaFBhcmFtcy5rZXlzKCkpLmZvckVhY2goKGtleSkgPT4gdGFyZ2V0LmRlbGV0ZShrZXkpKVxuICAgIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB0YXJnZXQuYXBwZW5kKGtleSwgdmFsdWUpKVxuICB9KVxuICByZXR1cm4gdGFyZ2V0XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHBhdGhNYXRjaCBmcm9tICcuL3BhdGgtbWF0Y2gnXG5pbXBvcnQgcHJlcGFyZURlc3RpbmF0aW9uIGZyb20gJy4vcHJlcGFyZS1kZXN0aW5hdGlvbidcbmltcG9ydCB7IFJld3JpdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvbG9hZC1jdXN0b20tcm91dGVzJ1xuXG5jb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXIgPSBwYXRoTWF0Y2godHJ1ZSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVzb2x2ZVJld3JpdGVzKFxuICBhc1BhdGg6IHN0cmluZyxcbiAgcGFnZXM6IHN0cmluZ1tdLFxuICBiYXNlUGF0aDogc3RyaW5nLFxuICByZXdyaXRlczogUmV3cml0ZVtdLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gIHJlc29sdmVIcmVmOiAocGF0aDogc3RyaW5nKSA9PiBzdHJpbmdcbikge1xuICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGFzUGF0aCkpIHtcbiAgICBmb3IgKGNvbnN0IHJld3JpdGUgb2YgcmV3cml0ZXMpIHtcbiAgICAgIGNvbnN0IG1hdGNoZXIgPSBjdXN0b21Sb3V0ZU1hdGNoZXIocmV3cml0ZS5zb3VyY2UpXG4gICAgICBjb25zdCBwYXJhbXMgPSBtYXRjaGVyKGFzUGF0aClcblxuICAgICAgaWYgKHBhcmFtcykge1xuICAgICAgICBpZiAoIXJld3JpdGUuZGVzdGluYXRpb24pIHtcbiAgICAgICAgICAvLyB0aGlzIGlzIGEgcHJveGllZCByZXdyaXRlIHdoaWNoIGlzbid0IGhhbmRsZWQgb24gdGhlIGNsaWVudFxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGVzdFJlcyA9IHByZXBhcmVEZXN0aW5hdGlvbihcbiAgICAgICAgICByZXdyaXRlLmRlc3RpbmF0aW9uLFxuICAgICAgICAgIHBhcmFtcyxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICB0cnVlLFxuICAgICAgICAgIHJld3JpdGUuYmFzZVBhdGggPT09IGZhbHNlID8gJycgOiBiYXNlUGF0aFxuICAgICAgICApXG4gICAgICAgIGFzUGF0aCA9IGRlc3RSZXMucGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIGRlc3RSZXMucGFyc2VkRGVzdGluYXRpb24ucXVlcnkpXG5cbiAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKGFzUGF0aCkpIHtcbiAgICAgICAgICAvLyBjaGVjayBpZiB3ZSBub3cgbWF0Y2ggYSBwYWdlIGFzIHRoaXMgbWVhbnMgd2UgYXJlIGRvbmVcbiAgICAgICAgICAvLyByZXNvbHZpbmcgdGhlIHJld3JpdGVzXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNoZWNrIGlmIHdlIG1hdGNoIGEgZHluYW1pYy1yb3V0ZSwgaWYgc28gd2UgYnJlYWsgdGhlIHJld3JpdGVzIGNoYWluXG4gICAgICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IHJlc29sdmVIcmVmKGFzUGF0aClcblxuICAgICAgICBpZiAocmVzb2x2ZWRIcmVmICE9PSBhc1BhdGggJiYgcGFnZXMuaW5jbHVkZXMocmVzb2x2ZWRIcmVmKSkge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFzUGF0aFxufVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCJpbnRlcmZhY2UgR3JvdXAge1xuICBwb3M6IG51bWJlclxuICByZXBlYXQ6IGJvb2xlYW5cbiAgb3B0aW9uYWw6IGJvb2xlYW5cbn1cblxuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW06IHN0cmluZykge1xuICBjb25zdCBvcHRpb25hbCA9IHBhcmFtLnN0YXJ0c1dpdGgoJ1snKSAmJiBwYXJhbS5lbmRzV2l0aCgnXScpXG4gIGlmIChvcHRpb25hbCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMSwgLTEpXG4gIH1cbiAgY29uc3QgcmVwZWF0ID0gcGFyYW0uc3RhcnRzV2l0aCgnLi4uJylcbiAgaWYgKHJlcGVhdCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMylcbiAgfVxuICByZXR1cm4geyBrZXk6IHBhcmFtLCByZXBlYXQsIG9wdGlvbmFsIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICByb3V0ZUtleXM/OiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH1cbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH1cbn0ge1xuICBjb25zdCBzZWdtZW50cyA9IChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG4gICAgLnNsaWNlKDEpXG4gICAgLnNwbGl0KCcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICBncm91cHNba2V5XSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdCwgb3B0aW9uYWwgfVxuICAgICAgICByZXR1cm4gcmVwZWF0ID8gKG9wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgIH1cbiAgICB9KVxuICAgIC5qb2luKCcnKVxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgbGV0IHJvdXRlS2V5Q2hhckxlbmd0aCA9IDFcblxuICAgIC8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbiAgICBjb25zdCBnZXRTYWZlUm91dGVLZXkgPSAoKSA9PiB7XG4gICAgICBsZXQgcm91dGVLZXkgPSAnJ1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlS2V5Q2hhckxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdXRlS2V5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSlcbiAgICAgICAgcm91dGVLZXlDaGFyQ29kZSsrXG5cbiAgICAgICAgaWYgKHJvdXRlS2V5Q2hhckNvZGUgPiAxMjIpIHtcbiAgICAgICAgICByb3V0ZUtleUNoYXJMZW5ndGgrK1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcm91dGVLZXlcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZUtleXM6IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XG5cbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICAgIC8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbiAgICAgICAgICAvLyB0aGUgbmFtZWQgcmVnZXhcbiAgICAgICAgICBsZXQgY2xlYW5lZEtleSA9IGtleS5yZXBsYWNlKC9cXFcvZywgJycpXG4gICAgICAgICAgbGV0IGludmFsaWRLZXkgPSBmYWxzZVxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4gICAgICAgICAgLy8gc2FmZSBrZXlcbiAgICAgICAgICBpZiAoY2xlYW5lZEtleS5sZW5ndGggPT09IDAgfHwgY2xlYW5lZEtleS5sZW5ndGggPiAzMCkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLCAxKSkpKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbnZhbGlkS2V5KSB7XG4gICAgICAgICAgICBjbGVhbmVkS2V5ID0gZ2V0U2FmZVJvdXRlS2V5KClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUtleXNbY2xlYW5lZEtleV0gPSBrZXlcbiAgICAgICAgICByZXR1cm4gcmVwZWF0XG4gICAgICAgICAgICA/IG9wdGlvbmFsXG4gICAgICAgICAgICAgID8gYCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2BcbiAgICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWBcbiAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuam9pbignJylcblxuICAgIHJldHVybiB7XG4gICAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICAgIGdyb3VwcyxcbiAgICAgIHJvdXRlS2V5cyxcbiAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgIGdyb3VwcyxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgZm9ybWF0VXJsIH0gZnJvbSAnLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybCdcbmltcG9ydCB7IE1hbmlmZXN0SXRlbSB9IGZyb20gJy4uL3NlcnZlci9sb2FkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnLi4vLi4vbGliL2xvYWQtZW52LWNvbmZpZydcbmltcG9ydCB7IEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG4vKipcbiAqIFdlYiB2aXRhbHMgcHJvdmlkZWQgdG8gX2FwcC5yZXBvcnRXZWJWaXRhbHMgYnkgQ29yZSBXZWIgVml0YWxzIHBsdWdpbiBkZXZlbG9wZWQgYnkgR29vZ2xlIENocm9tZSB0ZWFtLlxuICogaHR0cHM6Ly9uZXh0anMub3JnL2Jsb2cvbmV4dC05LTQjaW50ZWdyYXRlZC13ZWItdml0YWxzLXJlcG9ydGluZ1xuICovXG5leHBvcnQgdHlwZSBOZXh0V2ViVml0YWxzTWV0cmljID0ge1xuICBpZDogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIHN0YXJ0VGltZTogbnVtYmVyXG4gIHZhbHVlOiBudW1iZXJcbn1cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiBzdHJpbmdbXVxuICBlcnI/OiBFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9XG4gIGdzcD86IGJvb2xlYW5cbiAgZ3NzcD86IGJvb2xlYW5cbiAgY3VzdG9tU2VydmVyPzogYm9vbGVhblxuICBnaXA/OiBib29sZWFuXG4gIGFwcEdpcD86IGJvb2xlYW5cbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGRvY0NvbXBvbmVudHNSZW5kZXJlZDoge1xuICAgIEh0bWw/OiBib29sZWFuXG4gICAgTWFpbj86IGJvb2xlYW5cbiAgICBIZWFkPzogYm9vbGVhblxuICAgIE5leHRTY3JpcHQ/OiBib29sZWFuXG4gIH1cbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdFxuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG4gIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nOiBzdHJpbmdcbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0QXBpUmVxdWVzdCBleHRlbmRzIEluY29taW5nTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYHF1ZXJ5YCB2YWx1ZXMgZnJvbSB1cmxcbiAgICovXG4gIHF1ZXJ5OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW11cbiAgfVxuICAvKipcbiAgICogT2JqZWN0IG9mIGBjb29raWVzYCBmcm9tIGhlYWRlclxuICAgKi9cbiAgY29va2llczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9XG5cbiAgYm9keTogYW55XG5cbiAgZW52OiBFbnZcblxuICBwcmV2aWV3PzogYm9vbGVhblxuICAvKipcbiAgICogUHJldmlldyBkYXRhIHNldCBvbiB0aGUgcmVxdWVzdCwgaWYgYW55XG4gICAqICovXG4gIHByZXZpZXdEYXRhPzogYW55XG59XG5cbi8qKlxuICogU2VuZCBib2R5IG9mIHJlc3BvbnNlXG4gKi9cbnR5cGUgU2VuZDxUPiA9IChib2R5OiBUKSA9PiB2b2lkXG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXNwb25zZVxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpUmVzcG9uc2U8VCA9IGFueT4gPSBTZXJ2ZXJSZXNwb25zZSAmIHtcbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBgYW55YCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBzZW5kOiBTZW5kPFQ+XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGpzb25gIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIGpzb246IFNlbmQ8VD5cbiAgc3RhdHVzOiAoc3RhdHVzQ29kZTogbnVtYmVyKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3QodXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3Qoc3RhdHVzOiBudW1iZXIsIHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybDogVXJsT2JqZWN0KTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvcm1hdFVybCh1cmwpXG59XG5cbmV4cG9ydCBjb25zdCBTUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCdcbmV4cG9ydCBjb25zdCBTVCA9XG4gIFNQICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nXG4iLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZVBhdGhTZXA9bm9ybWFsaXplUGF0aFNlcDtleHBvcnRzLmRlbm9ybWFsaXplUGFnZVBhdGg9ZGVub3JtYWxpemVQYWdlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVQYXRoU2VwKHBhdGgpe3JldHVybiBwYXRoLnJlcGxhY2UoL1xcXFwvZywnLycpO31mdW5jdGlvbiBkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhZ2Upe3BhZ2U9bm9ybWFsaXplUGF0aFNlcChwYWdlKTtpZihwYWdlLnN0YXJ0c1dpdGgoJy9pbmRleC8nKSl7cGFnZT1wYWdlLnNsaWNlKDYpO31lbHNlIGlmKHBhZ2U9PT0nL2luZGV4Jyl7cGFnZT0nLyc7fXJldHVybiBwYWdlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFNd0FBQUFyQ0FZQUFBQTBZMmZJQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQU45U1VSQlZIZ0I3WjJMZGRvd0ZJYXZleklBRzlRYmxFNVFkd05HWUlPU0NXQUQyQUEyWUFUSUJKQUpUQ2FBVHFEcTRsK05Zc3dqUkFacy9kODVpckdrK0lGMWRSK1NUQ0tFUklZeHBwTWt5Yzdieit3bXc2N216L3h5UXFMRENzWFVwcFZOVzkyV3lrYm1JMTBoSkFhMHNkczBoTmJ3OCtkSUU1dDZKLzYvVTNVOElhU05xS0JBUzR3a0FKNzJ5WVNRTmxMV0VsODlWa2dCSktUMXdQZFpDQ0hrUEZaWVVpR0VFRUxxUmRWTlNDZUprQ1lDNTc1em9peDFPeHFiem1tbmtWaEJLRnBsWUhxa3ZJOUkyWGMzTUpNemJFWmlSU05naUlSMWo1VHZ4Mkw4akZRSWlaUno3UjlXMkg0NnpaUCtTWkprSTRSRVFIbmlwWEpCKzMrMTZlM2NnWWYwYlVpYjBEbGttSHlaeVpWOE8xSDJpdTNlR2FMZ2tLYUNTTENPMU05dFdrc3hoYitXRTNXOHlXZTVFTkl3SUN4YnBJSGNBcHowTmljakpEQUlDNmZ5U1p4bU1sd2ZROGg1NElxWVlPNElnZ0pqK2pmazNzQjlHR29JV0FJQTdYSjBNUE9hQStvRnpweC93MVZwNUY3WXR2Y0hQb295a1FDWTk0Vm9xWVFFa2pnTGViR0VYQW9HRlExOGpVd0NZdXFjWXdtSlRJV1FHNEtwWFptMEJZMVFDQ0VCYUgyMHlyTUQ4MnREZTRTZ0hTMXE4U2tPejVYZmRTSnk2V1p6anVlUVM0RzU1ZHJPRm9Qb3Rma1ZYbVNzTC9mR0N3NWtRc2dGd0NxNWFRTTJUVmhNU1NFaWpXaW9qd0RVcmpQWHB2Uno0Z0ltK3hnbUY0WG1FdkNsdWJFY1pTeWsxWmhpcXYzQzgwOG03Q3cvQ2Z5Y2dUbng3bHZTRHZDY1YzVTc4dEVDdFQxa0w5UXNUREdGS2hOeVd6ejFiZEF6RGRnelBTWVFrbjdKNU9LenVqVXcyZHlENElLMkJ3VUJISC9zaE90SkhoRkUzS1p3S05tajFRdzZzTFFpdjBjenJBRkErMnc5MDIzQkJ4Y081NC9BbjNSYVpDU2syZUNoVHVEcjlDcktxWDJ1QUpyRG1Wb0wrSkdwUkVRaUVXS0tsN0tsVXJ4QjVNV21aWklrUzRrY2RDU1pUYjkwMzM0bnp4WGw2bytzK2FPcEVZR2UwbWtnUjZlaVhqVE9xbWRpL1k5RUNqa2dTZzFUUmdYRDlwanJVcDRLMEZhS2QxaTVkMW05MkhxTldsVUtrMGtGWDdjLzhMbG43K090Vkc4azcvZEtEWElFQ3N3UklERHEvMmdEMDRhbSt6dmJrSDZYNm1tNVR1WFJodmJYcG8wVURXNHROWUxyMDVRaTZlZGxoZURQY1IrS0U0am51cStQa0VvUVlGaVZvblBUaW5vOW1EMDVIT2E5MDF4UnIrK1ZuNm8zTTRmMGoxeGYxekRRRVlRbklWOEN3WUtmYnY5RTFFaDc5eVUrcDE3ZUpXd3E4aVk0M2dacFYyVkdNWmdSbG44cmtqMThjMzRYcVFBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQU13QUFBQXJDQVlBQUFBMFkyZklBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJuUVUxQkFBQ3hqd3Y4WVFVQUFBTnZTVVJCVkhnQjdaM3JkZHBBRUlXSG5QeVBTMWhYRUplZ2RPQlVFRkpCbkFxZ2d5Z1ZRQWU0QTl3QlRnWGdDc0FWYkdhc0s3UGVDQ3lDSGtpNjN6bDdKS1FCQ1dsbjU3Rzcwa2hJcFhqdkhWWjNvOUZvRisxTGRmRkp5eFdLOGJWQWJobi9yc3A4S1RqV1dCY2JmTnlvekVaSXJYd1VjalphY1dlNlNMUzRZTE90N3lMUno4SDJuWngzVEZPNFdiVE5sT2E2UUM2UlRLRWVoWndGRmVZSVd0bHVKS3RzVnRGdDNXbjVyaFh2UGhKOTF2S2c1VW4yeXZBYy8xNlJsU2lpakp4WkpUMi9hOWtycVRzZ2F1ZTlzQldWdDRVcHpZTisvNmVRa3hrSmVYV2pZcGNHTHRRUHlkd2VxMmltRUduWFhCLzlINGxrTHFBcGp5bi9rLzZIdTBqRzluM1Q4a2ZMSTYwUmVjVXFoNVk3TFFzdFc1K1JGc2hkd2FYcFBSWVBCZGZDWS8xT0NOR0tjSXRLc2JiNEE1WGxSa2plbU5qMW1NTXl4ZnNUWHF1ZVlTNFdMTWhTeTZwZy8yQXNSOVhZOVl3YW0xc2gzUVUzMGdjM05SVlNHV2lNeHBFN3k4Ym4wamwwazB4QllGMmNrTm9wY3M4Q3BYSkMyZ1UrOUM4R3BaZExFQ042dU1WaldxR0dnYUpzZ3d4TzZobDhYaXl3TW1uZ0lrK0ZOQWNVWm9FbFc2c09nWHZtQ3JielBwNUxyaGhDZWsrUWFVdUVsQWRwM2tua2Nqa2h2UVgzZkI2NGJMWWNDM2tmQklaNWdKZ0lHUlJJQ2xqL3prekkreUJBZEVJR0RXT2FnTUR0WW54Q1NoUEVPVTRhb2xYRkxZaFBsbXhKU0JsUWQ2WkJuRk83NGlBVHU1SzJ3QWt3UGlIL0RWejJYSEZxalhOODF1bTZicTFSOTlubzEwUUlPUk1vVHUwVnVSRmxnZmtjQ3lFTjQ3czBicTBnUnVGd0ZkSVk4R0R5dnJ1SlZFeWwxaWJ3OXhpamtOYUFxellQT2tBcm1hT0QrSHNwVlFGVFNFVWhGd0dzemJvcUx3ZUpCcy82VFVnSkVHNjhqSXpQdDMwNDRjc1R6LzRUMGtIZ3NvM2xSUENBeGQreWYxaGlxWU1sUVp6Q0NWdWtjL2hzd21FZTN6aXBBNWlqOEVDSkVOSlJFRy9uRFgvbDJiUmNZZFlJZk9pS2tjNFRaTlBXUWdncHg2a0dBTm0zNVp2c20rZndlakpnamlrUkxKTi9TUndFc1Fwbk9aSkJFaWpFNUloTWxsNkd1WG1UYXlaa1NNQm9wRkFhZDBERzR2bFovc0VKSVFQbldDYVlPa0lJSVlRUTBqcWUwMVlJS1FlR2gzSFVNdWtuVlk5TThkbkRON3dRMGtmUUs3K3RRbkdDSWY1OHlDRHBKeGhvbVViYmJIYndDck1vcDBmNlcvNTVPOTB4ZVVKNkNlS1FwZCsvY2pDSjlvZmNIL29kdm5hY0RCS3pJcGdnbG4rZUJydnR0ZXVGU3ZNWGFkWW9ob2IzcjV3QUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9iYW5uZXItdGh1bWItY2ZmNDA0MDlkOTQ0MjhiOGRiNDFlZDAxMmQ4ZWE3NjEucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2Jhbm5lckJnLTFiMDkzNTI0YmFhNmY4YmQxZjllMjk1ZjI2ZDZlY2U4LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIzYVdSMGFEMGlOVGNpSUdobGFXZG9kRDBpTlRjaUlIWnBaWGRDYjNnOUlqQWdNQ0ExTnlBMU55SWdabWxzYkQwaWJtOXVaU0lnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JajROQ2p4d1lYUm9JRzl3WVdOcGRIazlJakF1TVNJZ1ptbHNiQzF5ZFd4bFBTSmxkbVZ1YjJSa0lpQmpiR2x3TFhKMWJHVTlJbVYyWlc1dlpHUWlJR1E5SWsweU5DNDFOREUySURBdU56a3hOakUyU0RNeUxqUTFPRE5ETkRVdU5UYzFJREF1TnpreE5qRTJJRFUyTGpJd09ETWdNVEV1TkRJME5pQTFOaTR5TURneklESTBMalUwTVRaV016SXVORFU0TTBNMU5pNHlNRGd6SURRMUxqVTNORGdnTkRVdU5UYzFJRFUyTGpJd09ESWdNekl1TkRVNE15QTFOaTR5TURneVNESTBMalUwTVRaRE1URXVOREkwT1NBMU5pNHlNRGd5SURBdU56a3hOamN6SURRMUxqVTNORGdnTUM0M09URTJOek1nTXpJdU5EVTRNMVl5TkM0MU5ERTJRekF1TnpreE5qY3pJREV4TGpReU5EWWdNVEV1TkRJME9TQXdMamM1TVRZeE5pQXlOQzQxTkRFMklEQXVOemt4TmpFMldpSWdabWxzYkQwaWRYSnNLQ053WVdsdWREQmZiR2x1WldGeUtTSXZQZzBLUEhCaGRHZ2dabWxzYkMxeWRXeGxQU0psZG1WdWIyUmtJaUJqYkdsd0xYSjFiR1U5SW1WMlpXNXZaR1FpSUdROUlrMHpNUzR5TVRjeElETXlMamsyTWpWRE16RXVNemcwT1NBek1pNDNPVEl6SURNeExqUTJPRGdnTXpJdU5Ua3hOQ0F6TVM0ME5qZzRJRE15TGpNMU9WWXpNQzR5TVRRM1NEUXdMak0zTkRsV016WXVOalE0UXpRd0xqTTNORGtnTXpjdU1qTTNNU0EwTUM0eE5qYzBJRE0zTGpjME1qTWdNemt1TnpVeUlETTRMakUyTWtNek9TNHpNelk0SURNNExqVTRNakVnTXpndU9ETTNOU0F6T0M0M09URTVJRE00TGpJMU5EVWdNemd1TnpreE9VZ3hPQzQzTkRVMlF6RTRMakUyTWpRZ016Z3VOemt4T1NBeE55NDJOak14SURNNExqVTRNakVnTVRjdU1qUTNPU0F6T0M0eE5qSkRNVFl1T0RNeU5TQXpOeTQzTkRJeklERTJMall5TkRrZ016Y3VNak0zTVNBeE5pNDJNalE1SURNMkxqWTBPRll6TUM0eU1UUTNTREkxTGpVek1USldNekl1TXpVNVF6STFMalV6TVRJZ016SXVOVGt4TkNBeU5TNDJNVFV4SURNeUxqYzVNak1nTWpVdU56Z3pJRE15TGprMk1qVkRNalV1T1RVd09TQXpNeTR4TXpFNUlESTJMakUwT1RjZ016TXVNakUzTVNBeU5pNHpOemsxSURNekxqSXhOekZJTXpBdU5qSXdOa016TUM0NE5UQXlJRE16TGpJeE56RWdNekV1TURRNU1pQXpNeTR4TXpFNUlETXhMakl4TnpFZ016SXVPVFl5TlZwTk16QXVNVGsyTmlBek1DNHlNVFEzU0RJMkxqZ3dNelJXTXpFdU9UTklNekF1TVRrMk5sWXpNQzR5TVRRM1drMHpPUzQzTlRJeElESXlMakkyTnpSRE16a3VNek0yT1NBeU1TNDRORFk1SURNNExqZ3pOellnTWpFdU5qTTNJRE00TGpJMU5EVWdNakV1TmpNM1NETXpMalU0T1RGV01Ua3VORGt5TjBNek15NDFPRGt4SURFNUxqRXpOVElnTXpNdU5EWTFOaUF4T0M0NE16RTNJRE16TGpJeE9ERWdNVGd1TlRneFF6TXlMamszTURrZ01UZ3VNek14TmlBek1pNDJOekF6SURFNExqSXdOakVnTXpJdU16RTNJREU0TGpJd05qRklNalF1Tmpnek1VTXlOQzR6TWprM0lERTRMakl3TmpFZ01qUXVNREk1TXlBeE9DNHpNekUySURJekxqYzRNVGtnTVRndU5UZ3hRekl6TGpVek5EVWdNVGd1T0RNeE15QXlNeTQwTVRBNElERTVMakV6TlRJZ01qTXVOREV3T0NBeE9TNDBPVEkzVmpJeExqWXpOMGd4T0M0M05EVTJRekU0TGpFMk1qUWdNakV1TmpNM0lERTNMalkyTXpFZ01qRXVPRFEyT1NBeE55NHlORGM1SURJeUxqSTJOelJETVRZdU9ETXlOU0F5TWk0Mk9EWTJJREUyTGpZeU5Ea2dNak11TVRreE5DQXhOaTQyTWpRNUlESXpMamM0TVROV01qZ3VPVEk0U0RRd0xqTTNORGxXTWpNdU56Z3hNME0wTUM0ek56UTVJREl6TGpFNU1UUWdOREF1TVRZM05DQXlNaTQyT0RZMklETTVMamMxTWpFZ01qSXVNalkzTkZwTk16RXVPRGt5T1NBeU1TNDJNemRJTWpVdU1UQTNNbFl4T1M0NU1qRXpTRE14TGpnNU1qbFdNakV1TmpNM1dpSWdabWxzYkQwaUkwWkdORFUxTUNJdlBnMEtQR1JsWm5NK0RRbzhiR2x1WldGeVIzSmhaR2xsYm5RZ2FXUTlJbkJoYVc1ME1GOXNhVzVsWVhJaUlIZ3hQU0l6TWk0M09EVTFJaUI1TVQwaU9Ea3VOemcxTlNJZ2VESTlJamc1TGpjNE5UVWlJSGt5UFNJeU5DNHlNVFExSWlCbmNtRmthV1Z1ZEZWdWFYUnpQU0oxYzJWeVUzQmhZMlZQYmxWelpTSStEUW84YzNSdmNDQnpkRzl3TFdOdmJHOXlQU0lqUmtZME1UWkRJaTgrRFFvOGMzUnZjQ0J2Wm1aelpYUTlJakVpSUhOMGIzQXRZMjlzYjNJOUlpTkdSalJDTWtJaUx6NE5Dand2YkdsdVpXRnlSM0poWkdsbGJuUStEUW84TDJSbFpuTStEUW84TDNOMlp6NE5DZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpTlRjaUlHaGxhV2RvZEQwaU5UY2lJSFpwWlhkQ2IzZzlJakFnTUNBMU55QTFOeUlnWm1sc2JEMGlibTl1WlNJZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWo0TkNqeHdZWFJvSUc5d1lXTnBkSGs5SWpBdU1TSWdabWxzYkMxeWRXeGxQU0psZG1WdWIyUmtJaUJqYkdsd0xYSjFiR1U5SW1WMlpXNXZaR1FpSUdROUlrMHlOQzQxTkRFMklEQXVOemt4TmpFMlNETXlMalExT0RORE5EVXVOVGMxTVNBd0xqYzVNVFl4TmlBMU5pNHlNRGd6SURFeExqUXlORFlnTlRZdU1qQTRNeUF5TkM0MU5ERTJWak15TGpRMU9ETkROVFl1TWpBNE15QTBOUzQxTnpRNElEUTFMalUzTlRFZ05UWXVNakE0TWlBek1pNDBOVGd6SURVMkxqSXdPREpJTWpRdU5UUXhOa014TVM0ME1qUTVJRFUyTGpJd09ESWdNQzQzT1RFMk1UWWdORFV1TlRjME9DQXdMamM1TVRZeE5pQXpNaTQwTlRnelZqSTBMalUwTVRaRE1DNDNPVEUyTVRZZ01URXVOREkwTmlBeE1TNDBNalE1SURBdU56a3hOakUySURJMExqVTBNVFlnTUM0M09URTJNVFphSWlCbWFXeHNQU0oxY213b0kzQmhhVzUwTUY5c2FXNWxZWElwSWk4K0RRbzhjR0YwYUNCbWFXeHNMWEoxYkdVOUltVjJaVzV2WkdRaUlHTnNhWEF0Y25Wc1pUMGlaWFpsYm05a1pDSWdaRDBpVFRReUxqTTRPVEVnTWpVdU1qSXhORU0wTWk0ek9UTTJJREkxTGpNd01qTWdOREl1TXpnM055QXlOUzR6T0RRMUlEUXlMak0yTnpVZ01qVXVORFkzVERRd0xqVTJNRGNnTXpJdU56SXpOVU0wTUM0ME5qazFJRE16TGpBNE9EY2dOREF1TVRRek1pQXpNeTR6TkRZeUlETTVMamMyT0RFZ016TXVNelE0TTB3eU9DNDVNamMwSURNekxqUXdNek5ETWpndU9USTJJRE16TGpRd016TWdNamd1T1RJME55QXpNeTQwTURNeklESTRMamt5TXpJZ016TXVOREF6TTBneE9DNHdPREkxUXpFM0xqY3dOVE1nTXpNdU5EQXpNeUF4Tnk0ek56WTNJRE16TGpFME5Ea2dNVGN1TWpnMU55QXpNaTQzTnpjMlRERTFMalEzT0RrZ01qVXVORGt6TkVNeE5TNDBOVGdnTWpVdU5EQTVNU0F4TlM0ME5USXhJREkxTGpNeU5EUWdNVFV1TkRVM015QXlOUzR5TkRFMFF6RTBMamMxT0RNZ01qVXVNREl3TmlBeE5DNHlOU0F5TkM0ek5qTTRJREUwTGpJMUlESXpMalU1UXpFMExqSTFJREl5TGpZek5EVWdNVFV1TURJek5pQXlNUzQ0TlRjM0lERTFMamszTkRZZ01qRXVPRFUzTjBNeE5pNDVNalUySURJeExqZzFOemNnTVRjdU5qazVNeUF5TWk0Mk16UTFJREUzTGpZNU9UTWdNak11TlRsRE1UY3VOams1TXlBeU5DNHhNamMySURFM0xqUTFNemdnTWpRdU5qQTROU0F4Tnk0d05qazJJREkwTGpreU5qbE1NVGt1TXpNeE55QXlOeTR5TVRVeFF6RTVMamt3TXpRZ01qY3VOemt6TlNBeU1DNDJPVFkzSURJNExqRXlOVFVnTWpFdU5UQTRNeUF5T0M0eE1qVTFRekl5TGpRMk9DQXlPQzR4TWpVMUlESXpMak00TXlBeU55NDJOamMxSURJekxqazFPVElnTWpZdU9UQXhUREkzTGpZM05qa2dNakV1T1RVME4wTXlOeTR6TmpRMklESXhMalkwTVRVZ01qY3VNVGN4TVNBeU1TNHlNRGcySURJM0xqRTNNVEVnTWpBdU56TXhNVU15Tnk0eE56RXhJREU1TGpjM05pQXlOeTQ1TkRRNElERTRMams1T0RnZ01qZ3VPRGsxT0NBeE9DNDVPVGc0UXpJNUxqZzBOamdnTVRndU9UazRPQ0F6TUM0Mk1qQTBJREU1TGpjM05pQXpNQzQyTWpBMElESXdMamN6TVRGRE16QXVOakl3TkNBeU1TNHhPVFF5SURNd0xqUXpOek1nTWpFdU5qRTBNaUF6TUM0eE5ERXpJREl4TGpreU5UUkRNekF1TVRReU15QXlNUzQ1TWpZM0lETXdMakUwTXpZZ01qRXVPVEkzT1NBek1DNHhORFExSURJeExqa3lPVEpNTXpNdU9ETTFNU0F5Tmk0NE9EbERNelF1TkRFeE1pQXlOeTQyTmpJNElETTFMak15T1RRZ01qZ3VNVEkxTlNBek5pNHlPVEU0SURJNExqRXlOVFZETXpjdU1URXdPU0F5T0M0eE1qVTFJRE0zTGpnNE1USWdNamN1T0RBMUlETTRMalEyTURNZ01qY3VNakl6Tmt3ME1DNDNNelkySURJMExqa3pOelZETkRBdU16UTBNeUF5TkM0Mk1UazJJRFF3TGpBNU1qTWdNalF1TVRNME5DQTBNQzR3T1RJeklESXpMalU1UXpRd0xqQTVNak1nTWpJdU5qTTBOU0EwTUM0NE5qWWdNakV1T0RVM055QTBNUzQ0TVRjZ01qRXVPRFUzTjBNME1pNDNOamdnTWpFdU9EVTNOeUEwTXk0MU5ERTNJREl5TGpZek5EVWdORE11TlRReE55QXlNeTQxT1VNME15NDFOREUzSURJMExqTTBNamtnTkRNdU1EVTVNaUF5TkM0NU9ETTVJRFF5TGpNNE9URWdNalV1TWpJeE5GcE5OREF1TXpnME5DQXpOUzQ1T0RZNFF6UXdMak00TkRRZ016VXVOVE14T0NBME1DNHdNVFkySURNMUxqRTJNalFnTXprdU5UWXpNU0F6TlM0eE5qSTBTREU0TGpNeE9UaERNVGN1T0RZMk1pQXpOUzR4TmpJMElERTNMalE1T0RVZ016VXVOVE14T0NBeE55NDBPVGcxSURNMUxqazROamhXTXpjdU9UWTJRekUzTGpRNU9EVWdNemd1TkRJeE9DQXhOeTQ0TmpZeUlETTRMamM1TURnZ01UZ3VNekU1T0NBek9DNDNPVEE0U0RNNUxqVTJNekZETkRBdU1ERTJOaUF6T0M0M09UQTRJRFF3TGpNNE5EUWdNemd1TkRJeE9DQTBNQzR6T0RRMElETTNMamsyTmxZek5TNDVPRFk0V2lJZ1ptbHNiRDBpSTBaRk5UZzJPQ0l2UGcwS1BHUmxabk0rRFFvOGJHbHVaV0Z5UjNKaFpHbGxiblFnYVdROUluQmhhVzUwTUY5c2FXNWxZWElpSUhneFBTSXpNaTQzT0RVMUlpQjVNVDBpT0RrdU56ZzFOU0lnZURJOUlqZzVMamM0TlRVaUlIa3lQU0l5TkM0eU1UUTFJaUJuY21Ga2FXVnVkRlZ1YVhSelBTSjFjMlZ5VTNCaFkyVlBibFZ6WlNJK0RRbzhjM1J2Y0NCemRHOXdMV052Ykc5eVBTSWpSa1kxT0RVNElpOCtEUW84YzNSdmNDQnZabVp6WlhROUlqRWlJSE4wYjNBdFkyOXNiM0k5SWlOR09EVTNRVFlpTHo0TkNqd3ZiR2x1WldGeVIzSmhaR2xsYm5RK0RRbzhMMlJsWm5NK0RRbzhMM04yWno0TkNnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9jb3JlRmVhdHVyZS05ZThhMzBiNDcyZjBiZGMwZTU4OWRkODRlMmUwMzU2OS5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpT0RJaUlHaGxhV2RvZEQwaU9ESWlJSFpwWlhkQ2IzZzlJakFnTUNBNE1pQTRNaUlnWm1sc2JEMGlibTl1WlNJZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWlCNGJXeHVjenA0YkdsdWF6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNVGs1T1M5NGJHbHVheUkrRFFvOGNHRjBhQ0J2Y0dGamFYUjVQU0l3TGpFeU1pSWdaRDBpVFRVMElEQklNamhETVRJdU5UTTJJREFnTUNBeE1pNDFNellnTUNBeU9GWTFORU13SURZNUxqUTJOQ0F4TWk0MU16WWdPRElnTWpnZ09ESklOVFJETmprdU5EWTBJRGd5SURneUlEWTVMalEyTkNBNE1pQTFORll5T0VNNE1pQXhNaTQxTXpZZ05qa3VORFkwSURBZ05UUWdNRm9pSUdacGJHdzlJaU5GT1RjME1qVWlMejROQ2p4eVpXTjBJSGc5SWpJMElpQjVQU0l5TkNJZ2QybGtkR2c5SWpNMElpQm9aV2xuYUhROUlqTTBJaUJtYVd4c1BTSjFjbXdvSTNCaGRIUmxjbTR3S1NJdlBnMEtQR1JsWm5NK0RRbzhjR0YwZEdWeWJpQnBaRDBpY0dGMGRHVnliakFpSUhCaGRIUmxjbTVEYjI1MFpXNTBWVzVwZEhNOUltOWlhbVZqZEVKdmRXNWthVzVuUW05NElpQjNhV1IwYUQwaU1TSWdhR1ZwWjJoMFBTSXhJajROQ2p4MWMyVWdlR3hwYm1zNmFISmxaajBpSTJsdFlXZGxNQ0lnZEhKaGJuTm1iM0p0UFNKelkyRnNaU2d3TGpBeU9UUXhNVGdwSWk4K0RRbzhMM0JoZEhSbGNtNCtEUW84YVcxaFoyVWdhV1E5SW1sdFlXZGxNQ0lnZDJsa2RHZzlJak0wSWlCb1pXbG5hSFE5SWpNMElpQjRiR2x1YXpwb2NtVm1QU0prWVhSaE9tbHRZV2RsTDNCdVp6dGlZWE5sTmpRc2FWWkNUMUozTUV0SFoyOUJRVUZCVGxOVmFFVlZaMEZCUVVOSlFVRkJRV2xEUVZsQlFVRkJObEozZGtOQlFVRkJRa2hPUTFOV1VVbERRV2RKWmtGb2EybEJRVUZDUVdoS1VrVkdWVmRKV0Vac01YVkpWbXhWVldkTUwzbzVNM05hWVhnMFZUTlNiVkpYVkVVM2NGbDBSVmxTWTNGSloyRjVTVWh5U1UxeFJrbDFNR3BUU1VodVdrWkVNVmRaVEd4RWRXZHBWaXRLUVd4b1VURmtPRTFYYVVNd01teHBWREF4V21SdmJXbHpZVWt6U25GQ2FuQk1UbXBMWlVoMFl6ZE5ZV1o2THpnMU9IcHBVelEwTjBndlYxaHRkblppTDFwbFpUWXJNV3Q2VWs1QldXcFBWR2RFZFVJck5FRnlaMUZ0VFZSaU5VaG1aME15UjJnNE1rWmlWMHRWYmxSc1QycHplR05FY25kRVYzRklkMFFyU0dsT1NXVXJOek5YYlVOV09GTkdkRFZXVTFCNmNsbENiVFJEY21kR00zRXZRVzVSVURCaFVVTTBSamRuVFdWQlJtTkJkbmRNY0ZkVWMyMHJWbEl4VEdkT1pVRklORU5pYWtFdk4zaDNhbmRJTkc1UFRHZFVaVUYyTkVWYWNtTmhkSGMzWTNGaUsyWkxla3hYUjBadlFUTkJOM05CZWxsYVNETlpNSE42WXl0MlFqSmtabEZwTkVkaVoyVmxURGhKY0VGYVkwRlNkMFJRYVhWQmJVdGlPVWMwU0RWM1MxQkJPWFZxYzJzd1YwUkJNWFV3ZG1GcFJraFVWMmRVVlVkTFdXMUpOV05DTTNkTk4wRlpWMEZQYTNkT1VGSXlWbXRHWm14dVFVUTNXVU54WlhWQmFWVkpNV3M1ZFRBM1ZFa3JZa0ZYU1hwek5FVTNaMXAxUWxCWk1EaGpka2QyUlZjelRteEhiMUJ0UTBnNFlVVjJSREZLUjJWdlJYcG5XSGhOV2tWamVVdGxSUzlVTnlzNFNFbHlUM0pxV1N0UVJuTkdOVUZHWjNaUVNHaGhTRk15UlN0b1JXZHVkMEUyUTI1b00zZE9jMVlyYUhoM1FuZGtXVE5XTURsdWVtcDNPVXBUU1UxaFNGRlhRWGRQYW5OSUswUnFXRGxpYW5odlpHMHlOVTlWUkRRNFRVeGxWVll3WkdnM2QwaDJRa2xrU0ZweVZWWjNNR3R5VHpBelVUa3dSMmd2VjJ4UVVUZFpOMVJESzFCQmFEaEtWQ3NyV0VSYWNtTnVhMDhyUWtZMFIzWnFkelpqVmk5SFdrVmFlVGxJTkcxeFVEaFhSa0U1WVRoQlJIQm9ZbUZWVjAxRU5HVlJOMlJvWXpCcFZVdzJSMWhCZERCcVVYWTFlbkkzZDJOUFFVOHlWbEZMUzNwSVZVTk5lbkkxVkhoUkt6VnBXSFl4SzNvMmJuSjVSVUp1Um1Ka2JXMVFRV0k0UVdaS1pUSjZZazgyVFVReU9GZEhWbUprYldvM1oxVjFVRVJ6YkdFeU1HUnROWGRGVEdkTlRFRjBUMngwTkRNeFVtUkZWbkpXUm5SSVdtbFZaelpYUVN0TlZpOVZWMjlDWVdSUVVUWnpUbm8yT0ZaQ2IydFBjbk5CTmtGSmJVRk5aVkoyVTNoNmFUQTFhRXBOYTA0MlVubFlOVkJ3Yms0elRFdG5kM2hRUlhBeFpFTlVlR1paZEVwdE9HbDJkMEowUTA0dlFsQmFLMFZRUVZRd1ZXZERXRUV3VDNSMVR6TkNUMHhXWWpoalQwSjBORUYwYVUxV1J6aEtZMmw2TjBkVWJXVmxaV3N6VUhWNWRGTndOa0l2UVU1TlFucFpaMmhqZUdnMFJVaHFVVE5rTUdSeGJtRTNSRlVyTjAxM1kyODNUMHhyUTFWbVJGWlBUSHB2TjJwNFRuTXdWelZHTTJwUk9HNDFTMlUyWkhKWmFHaGpPVTAwUldablVIVlFSRTR5YjNwVlpIWm9aMkpXVVRKMFFtZHpha3A1U0djd1UxcGlXV2xpVVhKU1FUbDNNWEZ0VkRoVE9YWndUMlF3UWtwSWRHVjRhMmROZEVwTGMwWjJiVzlWVjJVeVNXbEVVR2xUTjJwM05VWlNUbXAwTVhOek4yODNRbFJxZHpCRk9YZHdMM0prTVV0cmFuQlVLMnMwTUZBelZURnpaR2RPWmtsYVdGbFhiVVJTZVZwdk9Fd3diakl3YVhWVE5rOTVNWGxHZEc1RmJFdFFaRUZPVmxRNFdWRnJjbGRJWVRKTlRqWnNNMEYxWVZaQk1VOXJSM0JKY1M5dlEwcEJXRzV4VWtkQmVHcENiRWhJWVdOb1YxaG5NVTF5VVVOUlNYSmtkRUl4U1RRek1uUTRLMFJKTmxjd1kyVmtkRlpCTDI4NVJWcDVZMm9yVjJNclkyMHJkRTVFTm5OcE9EZDFRbTFoWTAxb1EwWlRXa1JWYzFWS1ZucDVRM1o0TTA1UFMxVm5UMkZCYkZOeFYxaGFLMlZDY0VGV1IxbFhOVWhGVDBKVk5HTjBjRUZHUjFsWE9FTnhVUzlCYzJkcU1XeG1TemwxYTBsM1FVRkJRVUpLVWxVMVJYSnJTbWRuWnowOUlpOCtEUW84TDJSbFpuTStEUW84TDNOMlp6NE5DZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpT0RJaUlHaGxhV2RvZEQwaU9ESWlJSFpwWlhkQ2IzZzlJakFnTUNBNE1pQTRNaUlnWm1sc2JEMGlibTl1WlNJZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWo0TkNqeHdZWFJvSUdROUlrMDFOQ0F3U0RJNFF6RXlMalV6TmlBd0lEQWdNVEl1TlRNMklEQWdNamhXTlRSRE1DQTJPUzQwTmpRZ01USXVOVE0ySURneUlESTRJRGd5U0RVMFF6WTVMalEyTkNBNE1pQTRNaUEyT1M0ME5qUWdPRElnTlRSV01qaERPRElnTVRJdU5UTTJJRFk1TGpRMk5DQXdJRFUwSURCYUlpQm1hV3hzUFNJalJrWkdOa1F6SWk4K0RRbzhjR0YwYUNCa1BTSk5ORFV1TlRNMElEUTJMamMzT0RGRE5EVXVOREEzTnlBME5pNDNOemd4SURRMUxqSTRNalVnTkRZdU56VXpNaUEwTlM0eE5qVTRJRFEyTGpjd05EaERORFV1TURRNU1TQTBOaTQyTlRZMUlEUTBMamswTXpFZ05EWXVOVGcxTmlBME5DNDROVE00SURRMkxqUTVOak5ETkRRdU56WTBOQ0EwTmk0ME1EY2dORFF1Tmprek5TQTBOaTR6TURBNUlEUTBMalkwTlRJZ05EWXVNVGcwTWtNME5DNDFPVFk1SURRMkxqQTJOelVnTkRRdU5UY3lJRFExTGprME1qUWdORFF1TlRjeUlEUTFMamd4TmtNME5DNDFOeklnTkRVdU5qZzVOeUEwTkM0MU9UWTVJRFExTGpVMk5EWWdORFF1TmpRMU1pQTBOUzQwTkRjNVF6UTBMalk1TXpVZ05EVXVNek14TWlBME5DNDNOalEwSURRMUxqSXlOVEVnTkRRdU9EVXpPQ0EwTlM0eE16VTRRelEwTGprME16RWdORFV1TURRMk5TQTBOUzR3TkRreElEUTBMamszTlRZZ05EVXVNVFkxT0NBME5DNDVNamN6UXpRMUxqSTRNalVnTkRRdU9EYzRPU0EwTlM0ME1EYzNJRFEwTGpnMU5DQTBOUzQxTXpRZ05EUXVPRFUwU0RRNUxqQTNNa00xTUM0Mk5ERTJJRFEwTGpnMklEVXlMakUxTVRVZ05EUXVNalV5TVNBMU15NHlOemtnTkRNdU1UWkROVE11T0RJNU9DQTBNaTQyTXlBMU5DNHlOamdnTkRFdU9UazBNaUExTkM0MU5qY3pJRFF4TGpJNU1EbEROVFF1T0RZMk5pQTBNQzQxT0RjMUlEVTFMakF5TURnZ016a3VPRE13T1NBMU5TNHdNakE0SURNNUxqQTJOalZETlRVdU1ESXdPQ0F6T0M0ek1ESXhJRFUwTGpnMk5qWWdNemN1TlRRMU5pQTFOQzQxTmpjeklETTJMamcwTWpKRE5UUXVNalk0SURNMkxqRXpPRGdnTlRNdU9ESTVPQ0F6TlM0MU1ETXhJRFV6TGpJM09TQXpOQzQ1TnpORE5USXVNVFV4TlNBek15NDRPREVnTlRBdU5qUXhOaUF6TXk0eU56TWdORGt1TURjeUlETXpMakkzT1VNME9DNDRORFlnTXpNdU1qYzVJRFE0TGpZME1TQXpNeTR5T0RnZ05EZ3VORFl4SURNekxqTXdOa00wT0M0eU5qRWdNek11TXpJMklEUTRMakEyTVNBek15NHpOVFUwSURRM0xqZzJNU0F6TXk0ek9UUkRORGN1TmpNMU5DQXpNeTQwTkRBNElEUTNMalF3TURZZ016TXVOREEzTkNBME55NHhPVFk1SURNekxqSTVPVGRETkRZdU9Ua3pNaUF6TXk0eE9USWdORFl1T0RNek5DQXpNeTR3TVRZNElEUTJMamMwTlNBek1pNDRNRFF4UXpRMkxqRTFOelFnTXpFdU16VTBJRFExTGpFME5ESWdNekF1TVRFMU9TQTBNeTQ0TXprZ01qa3VNalV6UXpReUxqTXhNek1nTWpndU1qUTNOaUEwTUM0ME9URXpJREkzTGpjNU1EWWdNemd1TmpjeE9DQXlOeTQ1TlRZNFF6TTJMamcxTWpJZ01qZ3VNVEl6TVNBek5TNHhORE14SURJNExqa3dNamdnTXpNdU9ESTFJRE13TGpFMk9FTXpNeTR3T1RZZ016QXVPRGN3TkNBek1pNDFNVFlnTXpFdU56RXlOQ0F6TWk0eE1UazBJRE15TGpZME16ZERNekV1TnpJeU9TQXpNeTQxTnpVeElETXhMalV4T0NBek5DNDFOelk0SURNeExqVXhOeUF6TlM0MU9EbERNekV1TlRFM0lETTFMall4TkNBek1TNDFNVGNnTXpVdU5qUWdNekV1TlRFM0lETTFMalkyTlZZek5TNDNNRFV4UXpNeExqVXhOVFFnTXpVdU9UWXlOeUF6TVM0ME1URTJJRE0yTGpJd09URWdNekV1TWpJNE5DQXpOaTR6T1RBeVF6TXhMakEwTlRJZ016WXVOVGN4TkNBek1DNDNPVGMySURNMkxqWTNNalFnTXpBdU5UUWdNell1TmpjeFNETXdMalE0TlV3ek1DNHpNVFlnTXpZdU5qWXpTRE13TGpFNE9FTXlPUzR3TnpjeElETTJMalkxT1RNZ01qZ3VNREE0TnlBek55NHdPRGs1SURJM0xqSXhNU0F6Tnk0NE5qTkRNall1T0RJeElETTRMakl6T0NBeU5pNDFNVEE0SURNNExqWTROemNnTWpZdU1qazRPQ0F6T1M0eE9EVTFRekkyTGpBNE5qa2dNemt1Tmpnek1pQXlOUzQ1TnpjM0lEUXdMakl4T0RZZ01qVXVPVGMzTnlBME1DNDNOVGsxUXpJMUxqazNOemNnTkRFdU16QXdOU0F5Tmk0d09EWTVJRFF4TGpnek5Ua2dNall1TWprNE9DQTBNaTR6TXpNMlF6STJMalV4TURnZ05ESXVPRE14TXlBeU5pNDRNakVnTkRNdU1qZ3hNU0F5Tnk0eU1URWdORE11TmpVMlF6STRMakF3T0RnZ05EUXVOREk1TVNBeU9TNHdOemN4SURRMExqZzFPVGNnTXpBdU1UZzRJRFEwTGpnMU5qRklNelF1T1RSRE16VXVNVGsxTVNBME5DNDROVFl4SURNMUxqUXpPVGdnTkRRdU9UVTNOQ0F6TlM0Mk1qQXlJRFExTGpFek56aERNelV1T0RBd05pQTBOUzR6TVRneUlETTFMamt3TWlBME5TNDFOakk1SURNMUxqa3dNaUEwTlM0NE1UaERNelV1T1RBeUlEUTJMakEzTXpJZ016VXVPREF3TmlBME5pNHpNVGM1SURNMUxqWXlNRElnTkRZdU5EazRNME16TlM0ME16azRJRFEyTGpZM09EY2dNelV1TVRrMU1TQTBOaTQzT0NBek5DNDVOQ0EwTmk0M09FZ3pNQzR4T0RoRE1qZ3VOVFUxTWlBME5pNDNPRFUwSURJMkxqazRORGtnTkRZdU1UVXlPQ0F5TlM0NE1USWdORFV1TURFM1F6STFMakl6T0RNZ05EUXVORFkyTkNBeU5DNDNPREU1SURRekxqZ3dOVFVnTWpRdU5EY3dNU0EwTXk0d056UXhRekkwTGpFMU9ETWdOREl1TXpReU5pQXlNeTQ1T1RjMklEUXhMalUxTlRjZ01qTXVPVGszTmlBME1DNDNOakExUXpJekxqazVOellnTXprdU9UWTFOQ0F5TkM0eE5UZ3pJRE01TGpFM09EVWdNalF1TkRjd01TQXpPQzQwTkRkRE1qUXVOemd4T1NBek55NDNNVFUxSURJMUxqSXpPRE1nTXpjdU1EVTBOaUF5TlM0NE1USWdNell1TlRBMFF6STJMamd6TVRFZ016VXVOVEV6T1NBeU9DNHhOVGMwSURNMExqa3dNRGtnTWprdU5UY3lJRE0wTGpjMk5rTXlPUzQzTnpVeElETXlMalV3TURrZ016QXVOemc0TVNBek1DNHpPRFE1SURNeUxqUXlOU0F5T0M0NE1EWkRNelF1TURjeU9DQXlOeTR5TWpJeElETTJMakl4TURjZ01qWXVNalEyTWlBek9DNDBPRGNnTWpZdU1ETTVRelF3TGpjMk16TWdNalV1T0RNeE9DQTBNeTR3TkRJeUlESTJMalF3TlRZZ05EUXVPVFE1SURJM0xqWTJOakZETkRZdU16VTVNU0F5T0M0MU9UazBJRFEzTGpVd01URWdNamt1T0RnME9DQTBPQzR5TmpJZ016RXVNemsxUXpRNExqVTBOaUF6TVM0ek5qY2dORGd1T0RFMUlETXhMak0xTXlBME9TNHdOaklnTXpFdU16VXpRelV4TGpFMU16Y2dNekV1TXpRMk1pQTFNeTR4TmpVeklETXlMakUxTmprZ05UUXVOalk0SURNekxqWXhNa00xTlM0ME1ERTVJRE0wTGpNeE56UWdOVFV1T1RnMU55QXpOUzR4TmpNM0lEVTJMak00TkRZZ016WXVNVEF3TWtNMU5pNDNPRE0wSURNM0xqQXpOamNnTlRZdU9UZzVJRE00TGpBME5ERWdOVFl1T1RnNUlETTVMakEyTWtNMU5pNDVPRGtnTkRBdU1EZ2dOVFl1Tnpnek5DQTBNUzR3T0RjMElEVTJMak00TkRZZ05ESXVNREl6T1VNMU5TNDVPRFUzSURReUxqazJNRFFnTlRVdU5EQXhPU0EwTXk0NE1EWTNJRFUwTGpZMk9DQTBOQzQxTVRKRE5UTXVNVFkxTXlBME5TNDVOamN5SURVeExqRTFNemNnTkRZdU56YzNPQ0EwT1M0d05qSWdORFl1TnpjeFREUTFMalV6TkNBME5pNDNOemd4V2lJZ1ptbHNiRDBpSXpNek16TXpNeUl2UGcwS1BIQmhkR2dnWkQwaVRUTTVMalV4TVNBek5pNHhNVGN4UXpNNUxqVXhNU0F6TlM0NE5UUTRJRE01TGpZeE5USWdNelV1TmpBek1pQXpPUzQ0TURBM0lETTFMalF4TnpkRE16a3VPVGcyTVNBek5TNHlNekl6SURRd0xqSXpOemNnTXpVdU1USTRNU0EwTUM0MUlETTFMakV5T0RGRE5EQXVOell5TXlBek5TNHhNamd4SURReExqQXhNemdnTXpVdU1qTXlNeUEwTVM0eE9Ua3pJRE0xTGpReE56ZEROREV1TXpnME9DQXpOUzQyTURNeUlEUXhMalE0T1NBek5TNDROVFE0SURReExqUTRPU0F6Tmk0eE1UY3hWalUxTGpBek9ERkROREV1TkRnNUlEVTFMak13TURRZ05ERXVNemcwT0NBMU5TNDFOVEU1SURReExqRTVPVE1nTlRVdU56TTNORU0wTVM0d01UTTRJRFUxTGpreU1qa2dOREF1TnpZeU15QTFOaTR3TWpjeElEUXdMalVnTlRZdU1ESTNNVU0wTUM0eU16YzNJRFUyTGpBeU56RWdNemt1T1RnMk1TQTFOUzQ1TWpJNUlETTVMamd3TURjZ05UVXVOek0zTkVNek9TNDJNVFV5SURVMUxqVTFNVGtnTXprdU5URXhJRFUxTGpNd01EUWdNemt1TlRFeElEVTFMakF6T0RGV016WXVNVEUzTVZvaUlHWnBiR3c5SWlNek16TXpNek1pTHo0TkNqeHdZWFJvSUdROUlrMDBOeTR6TURJZ05EQXVOems0TVVNME55NHpPVE16SURRd0xqZzROVGdnTkRjdU5EWTJJRFF3TGprNU1URWdORGN1TlRFMU5pQTBNUzR4TURjMlF6UTNMalUyTlRNZ05ERXVNakkwTVNBME55NDFPVEE1SURReExqTTBPVFFnTkRjdU5Ua3dPU0EwTVM0ME56WXhRelEzTGpVNU1Ea2dOREV1TmpBeU55QTBOeTQxTmpVeklEUXhMamN5T0RFZ05EY3VOVEUxTmlBME1TNDRORFEyUXpRM0xqUTJOaUEwTVM0NU5qRXhJRFEzTGpNNU16TWdOREl1TURZMk15QTBOeTR6TURJZ05ESXVNVFUwTVVNME55NHhNVFExSURReUxqTXpORElnTkRZdU9EWTBOU0EwTWk0ME16UTRJRFEyTGpZd05EVWdOREl1TkRNME9FTTBOaTR6TkRRMUlEUXlMalF6TkRnZ05EWXVNRGswTlNBME1pNHpNelF5SURRMUxqa3dOeUEwTWk0eE5UUXhURFF3TGpVd055QXpOaTQ0TlRReFRETTFMakV3TnlBME1pNHhOVFF4UXpNMExqa3hPVFVnTkRJdU16TTBNaUF6TkM0Mk5qazFJRFF5TGpRek5EZ2dNelF1TkRBNU5TQTBNaTQwTXpRNFF6TTBMakUwT1RVZ05ESXVORE0wT0NBek15NDRPVGsxSURReUxqTXpORElnTXpNdU56RXlJRFF5TGpFMU5ERkRNek11TmpJd05pQTBNaTR3TmpZeklETXpMalUwTnprZ05ERXVPVFl4TVNBek15NDBPVGd6SURReExqZzBORFpETXpNdU5EUTROaUEwTVM0M01qZ3hJRE16TGpReU15QTBNUzQyTURJM0lETXpMalF5TXlBME1TNDBOell4UXpNekxqUXlNeUEwTVM0ek5EazBJRE16TGpRME9EWWdOREV1TWpJME1TQXpNeTQwT1RneklEUXhMakV3TnpaRE16TXVOVFEzT1NBME1DNDVPVEV4SURNekxqWXlNRFlnTkRBdU9EZzFPQ0F6TXk0M01USWdOREF1TnprNE1Vd3pPUzQ0TVRJZ016UXVPREV5TVVNek9TNDVPVGsxSURNMExqWXpNaUEwTUM0eU5EazBJRE0wTGpVek1UUWdOREF1TlRBNU5TQXpOQzQxTXpFMFF6UXdMamMyT1RVZ016UXVOVE14TkNBME1TNHdNVGswSURNMExqWXpNaUEwTVM0eU1EY2dNelF1T0RFeU1VdzBOeTR6TURZNUlEUXdMamM1T0RGSU5EY3VNekF5V2lJZ1ptbHNiRDBpSXpNek16TXpNeUl2UGcwS1BIQmhkR2dnWkQwaVRUTTVMalV4TVNBMU5TNHdNemhXTXpjdU9ESXhURE0xTGpBNU55QTBNaTR4TlRBNFF6TTBMamt3T1RNZ05ESXVNek15TkNBek5DNDJOVGd5SURReUxqUXpOQ0F6TkM0ek9UY2dOREl1TkRNMFF6TTBMakV6TlRnZ05ESXVORE0wSURNekxqZzRORGdnTkRJdU16TXlOQ0F6TXk0Mk9UY2dOREl1TVRVd09FTXpNeTQyTURVNElEUXlMakEyTXlBek15NDFNek15SURReExqazFOemdnTXpNdU5EZ3pOaUEwTVM0NE5ERXpRek16TGpRek5ERWdOREV1TnpJME9DQXpNeTQwTURnMklEUXhMalU1T1RVZ016TXVOREE0TmlBME1TNDBOekk0UXpNekxqUXdPRFlnTkRFdU16UTJNaUF6TXk0ME16UXhJRFF4TGpJeU1Ea2dNek11TkRnek5pQTBNUzR4TURRMFF6TXpMalV6TXpJZ05EQXVPVGczT1NBek15NDJNRFU0SURRd0xqZzRNamNnTXpNdU5qazNJRFF3TGpjNU5EbE1Nemt1TnprM0lETTBMamd3T1VNek9TNDVPRFE1SURNMExqWXlOemNnTkRBdU1qTTFPQ0F6TkM0MU1qWXpJRFF3TGpRNU5qa2dNelF1TlRJMk0wTTBNQzQzTlRneElETTBMalV5TmpNZ05ERXVNREE1TVNBek5DNDJNamMzSURReExqRTVOeUF6TkM0NE1EbE1ORGN1TWprM0lEUXdMamM1TkRsRE5EY3VNemc0TWlBME1DNDRPREkzSURRM0xqUTJNRGdnTkRBdU9UZzNPU0EwTnk0MU1UQTBJRFF4TGpFd05EUkRORGN1TlRVNU9TQTBNUzR5TWpBNUlEUTNMalU0TlRRZ05ERXVNelEyTWlBME55NDFPRFUwSURReExqUTNNamhETkRjdU5UZzFOQ0EwTVM0MU9UazFJRFEzTGpVMU9Ua2dOREV1TnpJME9DQTBOeTQxTVRBMElEUXhMamcwTVRORE5EY3VORFl3T0NBME1TNDVOVGM0SURRM0xqTTRPRElnTkRJdU1EWXpJRFEzTGpJNU55QTBNaTR4TlRBNFF6UTNMakV3T1RZZ05ESXVNek13T1NBME5pNDROVGs0SURReUxqUXpNVFlnTkRZdU5pQTBNaTQwTXpFMlF6UTJMak0wTURFZ05ESXVORE14TmlBME5pNHdPVEF6SURReUxqTXpNRGtnTkRVdU9UQXpJRFF5TGpFMU1EaE1OREV1TkRnNUlETTNMamd5TVZZMU5TNHdNemhETkRFdU5EYzNOaUExTlM0eU9USTJJRFF4TGpNMk9ETWdOVFV1TlRNeU9DQTBNUzR4T0RReElEVTFMamN3T0RsRE5EQXVPVGs1T1NBMU5TNDRPRFV4SURRd0xqYzFORGtnTlRVdU9UZ3pNeUEwTUM0MUlEVTFMams0TXpORE5EQXVNalExTVNBMU5TNDVPRE16SURRd0xqQXdNREVnTlRVdU9EZzFNU0F6T1M0NE1UVTVJRFUxTGpjd09EbERNemt1TmpNeE55QTFOUzQxTXpJNElETTVMalV5TWpRZ05UVXVNamt5TmlBek9TNDFNVEVnTlRVdU1ETTRXazAwTlM0MU16UXhJRFEyTGpjM09FTTBOUzR5TnpnNUlEUTJMamMzT0NBME5TNHdNelF5SURRMkxqWTNOamNnTkRRdU9EVXpPQ0EwTmk0ME9UWXpRelEwTGpZM016TWdORFl1TXpFMU9TQTBOQzQxTnpJZ05EWXVNRGN4SURRMExqVTNNaUEwTlM0NE1UVTVRelEwTGpVM01pQTBOUzQxTmpBM0lEUTBMalkzTXpNZ05EVXVNekUyTVNBME5DNDROVE00SURRMUxqRXpOVGRETkRVdU1ETTBNaUEwTkM0NU5UVXpJRFExTGpJM09Ea2dORFF1T0RVMElEUTFMalV6TkRFZ05EUXVPRFUwU0RRNUxqQTNNVU0xTUM0Mk5ERXlJRFEwTGpnMk1ESWdOVEl1TVRVeE5pQTBOQzR5TlRFM0lEVXpMakkzT1RFZ05ETXVNVFU0T1VNMU15NDRNams1SURReUxqWXlPRGdnTlRRdU1qWTRJRFF4TGprNU16RWdOVFF1TlRZM015QTBNUzR5T0RrM1F6VTBMamcyTmpZZ05EQXVOVGcyTkNBMU5TNHdNakE1SURNNUxqZ3lPVGdnTlRVdU1ESXdPU0F6T1M0d05qVTBRelUxTGpBeU1Ea2dNemd1TXpBeElEVTBMamcyTmpZZ016Y3VOVFEwTkNBMU5DNDFOamN6SURNMkxqZzBNVU0xTkM0eU5qZ2dNell1TVRNM05pQTFNeTQ0TWprNUlETTFMalV3TVRrZ05UTXVNamM1TVNBek5DNDVOekU1UXpVeUxqRTFNVElnTXpNdU9EYzVPQ0ExTUM0Mk5ERWdNek11TWpjeUlEUTVMakEzTVNBek15NHlOemhETkRndU9EUTJJRE16TGpJM09DQTBPQzQyTkRFeElETXpMakk0TmprZ05EZ3VORFl4TVNBek15NHpNRFE1UXpRNExqSTFPVGNnTXpNdU16SXpPQ0EwT0M0d05Ua3pJRE16TGpNMU16TWdORGN1T0RZeElETXpMak01TTBNME55NDJNelUwSURNekxqUXpPVFVnTkRjdU5EQXdOaUF6TXk0ME1EVTVJRFEzTGpFNU55QXpNeTR5T1RnelF6UTJMams1TXpRZ016TXVNVGt3TmlBME5pNDRNek0ySURNekxqQXhOVFVnTkRZdU56UTFJRE15TGpnd01qbERORFl1TVRVM05TQXpNUzR6TlRJMUlEUTFMakUwTkRNZ016QXVNVEUwTVNBME15NDRNemtnTWprdU1qVXdPVU0wTWk0ek1UTTBJREk0TGpJME5UZ2dOREF1TkRreE5pQXlOeTQzT0RnNElETTRMalkzTWpJZ01qY3VPVFUxUXpNMkxqZzFNamtnTWpndU1USXhNeUF6TlM0eE5EUXhJREk0TGprd01TQXpNeTQ0TWpZZ016QXVNVFkyUXpNekxqQTVOeUF6TUM0NE5qZ3pJRE15TGpVeE5qa2dNekV1TnpFd01pQXpNaTR4TWpBMElETXlMalkwTVRaRE16RXVOekl6T0NBek15NDFOekk1SURNeExqVXhPRGtnTXpRdU5UYzBOaUF6TVM0MU1UYzVJRE0xTGpVNE5qbERNekV1TlRFM09TQXpOUzQyTVRFNUlETXhMalV4TnprZ016VXVOak01SURNeExqVXhOemtnTXpVdU5qWTBWak0xTGpjd05ERkRNekV1TlRFM015QXpOUzQ0TXpFMklETXhMalE1TVRZZ016VXVPVFUzT0NBek1TNDBOREl4SURNMkxqQTNOVFJETXpFdU16a3lOeUF6Tmk0eE9UTWdNekV1TXpJd05TQXpOaTR5T1RrMklETXhMakl5T1RjZ016WXVNemc1TkVNek1TNHhNemtnTXpZdU5EYzVNU0F6TVM0d016RTFJRE0yTGpVMU1ESWdNekF1T1RFek15QXpOaTQxT1RnelF6TXdMamM1TlRJZ016WXVOalEyTlNBek1DNDJOamcySURNMkxqWTNNRGNnTXpBdU5UUXhJRE0yTGpZMk9UbElNekF1TkRnMlRETXdMak14T0NBek5pNDJOak5JTXpBdU1UZzVPVU15T1M0d056a2dNell1TmpVNE9DQXlPQzR3TVRBMUlETTNMakE0T1RVZ01qY3VNakV6SURNM0xqZzJNME15Tmk0NE1qSTVJRE00TGpJek56Y2dNall1TlRFeU5pQXpPQzQyT0RjMElESTJMak13TURjZ016a3VNVGcxUXpJMkxqQTRPRGNnTXprdU5qZ3lOeUF5TlM0NU56azBJRFF3TGpJeE9ERWdNalV1T1RjNU5DQTBNQzQzTlRsRE1qVXVPVGM1TkNBME1TNHlPVGs1SURJMkxqQTRPRGNnTkRFdU9ETTFNeUF5Tmk0ek1EQTNJRFF5TGpNek0wTXlOaTQxTVRJMklEUXlMamd6TURZZ01qWXVPREl5T1NBME15NHlPREF5SURJM0xqSXhNeUEwTXk0Mk5UVkRNamd1TURFd05pQTBOQzQwTWpneklESTVMakEzT1NBME5DNDROVGc1SURNd0xqRTRPVGtnTkRRdU9EVTBPVWd6TkM0NU5ESkRNelV1TVRrM01pQTBOQzQ0TlRRNUlETTFMalEwTVRnZ05EUXVPVFUyTXlBek5TNDJNakl5SURRMUxqRXpOamRETXpVdU9EQXlOaUEwTlM0ek1UY3hJRE0xTGprd05ERWdORFV1TlRZeE55QXpOUzQ1TURReElEUTFMamd4TmpoRE16VXVPVEEwTVNBME5pNHdOeklnTXpVdU9EQXlOaUEwTmk0ek1UWTVJRE0xTGpZeU1qSWdORFl1TkRrM00wTXpOUzQwTkRFNElEUTJMalkzTnpjZ016VXVNVGszTWlBME5pNDNOemtnTXpRdU9UUXlJRFEyTGpjM09VZ3pNQzR4T0RrNVF6STRMalUxTmprZ05EWXVOemcwTlNBeU5pNDVPRFl6SURRMkxqRTFNVGtnTWpVdU9ERXpJRFExTGpBeE5qRkRNalV1TWpRd01TQTBOQzQwTmpVZ01qUXVOemcwTXlBME15NDRNRE01SURJMExqUTNNeUEwTXk0d056STFRekkwTGpFMk1UY2dOREl1TXpReE1TQXlOQzR3TURFeUlEUXhMalUxTkRRZ01qUXVNREF4TWlBME1DNDNOVGsxUXpJMExqQXdNVElnTXprdU9UWTBOaUF5TkM0eE5qRTNJRE01TGpFM056a2dNalF1TkRjeklETTRMalEwTmpWRE1qUXVOemcwTXlBek55NDNNVFV4SURJMUxqSTBNREVnTXpjdU1EVXpPU0F5TlM0NE1UTWdNell1TlRBeU9VTXlOaTQ0TXpReUlETTFMalV4TXpRZ01qZ3VNVFl5TXlBek5DNDVNREU0SURJNUxqVTNPQ0F6TkM0M05qbERNamt1TnpneElETXlMalV3TkNBek1DNDNPVE0ySURNd0xqTTRPREVnTXpJdU5ETXdNU0F5T0M0NE1EbERNelF1TURjM09TQXlOeTR5TWpVeElETTJMakl4TlRnZ01qWXVNalE1TVNBek9DNDBPVEl4SURJMkxqQTBNVGxETkRBdU56WTRNeUF5TlM0NE16UTNJRFF6TGpBME56SWdNall1TkRBNE5TQTBOQzQ1TlRRZ01qY3VOalk0T1VNME5pNHpOalEwSURJNExqWXdNalFnTkRjdU5UQTJOQ0F5T1M0NE9EZ3lJRFE0TGpJMk55QXpNUzR6T1RnNVF6UTRMalUxTVNBek1TNHpOekE1SURRNExqZ3lJRE14TGpNMU5qa2dORGt1TURZM0lETXhMak0xTmpsRE5URXVNVFU1TVNBek1TNHpOU0ExTXk0eE56RWdNekl1TVRZd055QTFOQzQyTnpRZ016TXVOakUxT1VNMU5TNDBNRGM1SURNMExqTXlNVE1nTlRVdU9Ua3hPQ0F6TlM0eE5qYzNJRFUyTGpNNU1EWWdNell1TVRBME1rTTFOaTQzT0RrMUlETTNMakEwTURjZ05UWXVPVGsxTVNBek9DNHdORGdnTlRZdU9UazFNU0F6T1M0d05qVTVRelUyTGprNU5URWdOREF1TURnek9DQTFOaTQzT0RrMUlEUXhMakE1TVRNZ05UWXVNemt3TmlBME1pNHdNamM0UXpVMUxqazVNVGdnTkRJdU9UWTBNeUExTlM0ME1EYzVJRFF6TGpneE1EY2dOVFF1TmpjMElEUTBMalV4TmpGRE5UTXVNVGN4SURRMUxqazNNVE1nTlRFdU1UVTVNU0EwTmk0M09ERTNJRFE1TGpBMk55QTBOaTQzTnpRNVREUTFMalV6TkRFZ05EWXVOemM0V2lJZ1ptbHNiRDBpSTBRMlFVSXdNQ0l2UGcwS1BDOXpkbWMrRFFvPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjNhV1IwYUQwaU9ESWlJR2hsYVdkb2REMGlPRElpSUhacFpYZENiM2c5SWpBZ01DQTRNaUE0TWlJZ1ptbHNiRDBpYm05dVpTSWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklqNE5Danh3WVhSb0lHUTlJazAxTkNBd1NESTRRekV5TGpVek5pQXdJREFnTVRJdU5UTTJJREFnTWpoV05UUkRNQ0EyT1M0ME5qUWdNVEl1TlRNMklEZ3lJREk0SURneVNEVTBRelk1TGpRMk5DQTRNaUE0TWlBMk9TNDBOalFnT0RJZ05UUldNamhET0RJZ01USXVOVE0ySURZNUxqUTJOQ0F3SURVMElEQmFJaUJtYVd4c1BTSWpSalJHTkVaR0lpOCtEUW84Y0dGMGFDQmtQU0pOTkRZdU5qZzBJRFU1TGpZeE56bE1ORE11TXpZNElEVTJMakl6T0V3ME1DNHdOVEVnTlRrdU5qRTNPVU16T1M0NU16TTRJRFU1TGpjek56Z2dNemt1Tnprek9DQTFPUzQ0TXpNeUlETTVMall6T1RJZ05Ua3VPRGs0TWtNek9TNDBPRFEzSURVNUxqazJNeklnTXprdU16RTROeUExT1M0NU9UWTJJRE01TGpFMU1TQTFPUzQ1T1RZMlF6TTRMams0TXpNZ05Ua3VPVGsyTmlBek9DNDRNVGN6SURVNUxqazJNeklnTXpndU5qWXlPQ0ExT1M0NE9UZ3lRek00TGpVd09ESWdOVGt1T0RNek1pQXpPQzR6TmpneUlEVTVMamN6TnpnZ016Z3VNalV4SURVNUxqWXhOemxETXpndU1ERXhJRFU1TGpNM01UZ2dNemN1T0RjMk9DQTFPUzR3TkRFM0lETTNMamczTmpnZ05UZ3VOams0UXpNM0xqZzNOamdnTlRndU16VTBNeUF6T0M0d01URWdOVGd1TURJME1pQXpPQzR5TlRFZ05UY3VOemM0TVV3ME1TNDFOamdnTlRRdU16azNPVXd6T0M0eU5URWdOVEV1TURFNVF6TTRMakF4TVNBMU1DNDNOekk1SURNM0xqZzNOamdnTlRBdU5EUXlPU0F6Tnk0NE56WTRJRFV3TGpBNU9URkRNemN1T0RjMk9DQTBPUzQzTlRVMElETTRMakF4TVNBME9TNDBNalV4SURNNExqSTFNU0EwT1M0eE56bERNemd1TXpZNE15QTBPUzR3TlRreUlETTRMalV3T0RRZ05EZ3VPVFkwTVNBek9DNDJOakk1SURRNExqZzVPVEpETXpndU9ERTNOQ0EwT0M0NE16UXlJRE00TGprNE16UWdORGd1T0RBd09DQXpPUzR4TlRFZ05EZ3VPREF3T0VNek9TNHpNVGcySURRNExqZ3dNRGdnTXprdU5EZzBOaUEwT0M0NE16UXlJRE01TGpZek9URWdORGd1T0RrNU1rTXpPUzQzT1RNMklEUTRMamsyTkRFZ016a3VPVE16TnlBME9TNHdOVGt5SURRd0xqQTFNU0EwT1M0eE56bE1ORE11TXpZNElEVXlMalUxT1RGTU5EWXVOamcwSURRNUxqRTNPVU0wTmk0NE1ERXpJRFE1TGpBMU9USWdORFl1T1RReE15QTBPQzQ1TmpReElEUTNMakE1TlRrZ05EZ3VPRGs1TWtNME55NHlOVEEwSURRNExqZ3pORElnTkRjdU5ERTJOQ0EwT0M0NE1EQTRJRFEzTGpVNE5DQTBPQzQ0TURBNFF6UTNMamMxTVRZZ05EZ3VPREF3T0NBME55NDVNVGMySURRNExqZ3pORElnTkRndU1EY3lNU0EwT0M0NE9Ua3lRelE0TGpJeU5qY2dORGd1T1RZME1TQTBPQzR6TmpZM0lEUTVMakExT1RJZ05EZ3VORGcwSURRNUxqRTNPVU0wT0M0M01qTTNJRFE1TGpReU5USWdORGd1T0RVM09DQTBPUzQzTlRVMUlEUTRMamcxTnpnZ05UQXVNRGs1TVVNME9DNDROVGM0SURVd0xqUTBNamdnTkRndU56SXpOeUExTUM0M056STRJRFE0TGpRNE5DQTFNUzR3TVRsTU5EVXVNVFk0SURVMExqTTVOemxNTkRndU5EZzBJRFUzTGpjM09ERkRORGd1TnpJek9TQTFPQzR3TWpReUlEUTRMamcxT0RJZ05UZ3VNelUwTXlBME9DNDROVGd5SURVNExqWTVPRU0wT0M0NE5UZ3lJRFU1TGpBME1UY2dORGd1TnpJek9TQTFPUzR6TnpFNElEUTRMalE0TkNBMU9TNDJNVGM1UXpRNExqTTJOamdnTlRrdU56TTNPQ0EwT0M0eU1qWTRJRFU1TGpnek16SWdORGd1TURjeU1pQTFPUzQ0T1RneVF6UTNMamt4TnpjZ05Ua3VPVFl6TWlBME55NDNOVEUzSURVNUxqazVOallnTkRjdU5UZzBJRFU1TGprNU5qWkRORGN1TkRFMk15QTFPUzQ1T1RZMklEUTNMakkxTURRZ05Ua3VPVFl6TWlBME55NHdPVFU0SURVNUxqZzVPREpETkRZdU9UUXhNeUExT1M0NE16TXlJRFEyTGpnd01UTWdOVGt1TnpNM09DQTBOaTQyT0RRZ05Ua3VOakUzT1ZwTk1qSXVNVEU1SURVekxqYzRRekl5TGpFek1qWWdOVE11TURNM01pQXlNaTR6TmpVeklEVXlMak14TkRrZ01qSXVOemczT0NBMU1TNDNNRE01UXpJekxqSXhNRFFnTlRFdU1Ea3lPQ0F5TXk0NE1EUXhJRFV3TGpZeU1ETWdNalF1TkRrME15QTFNQzR6TkRVMVF6STFMakU0TkRVZ05UQXVNRGN3TmlBeU5TNDVOREExSURVd0xqQXdOVGtnTWpZdU5qWTNOQ0ExTUM0eE5Ua3lRekkzTGpNNU5ETWdOVEF1TXpFeU5TQXlPQzR3TlRrNElEVXdMalkzTmprZ01qZ3VOVGd3TXlBMU1TNHlNRGRETWprdU1UQXdOeUExTVM0M016Y3lJREk1TGpRMU15QTFNaTQwTURreklESTVMalU1TWprZ05UTXVNVE00T1VNeU9TNDNNekk0SURVekxqZzJPRFVnTWprdU5qVTBNU0ExTkM0Mk1qTXpJREk1TGpNMk5qWWdOVFV1TXpBNE0wTXlPUzR3TnpreElEVTFMams1TXpRZ01qZ3VOVGsxTnlBMU5pNDFOemd5SURJM0xqazNOeUExTmk0NU9EazFRekkzTGpNMU9ETWdOVGN1TkRBd09DQXlOaTQyTXpFNUlEVTNMall5TURJZ01qVXVPRGc1SURVM0xqWXlNREZETWpRdU9EZ3dNU0ExTnk0Mk1UQXpJREl6TGpreE5qTWdOVGN1TWpBd015QXlNeTR5TURrMklEVTJMalE0TURKRE1qSXVOVEF5T0NBMU5TNDNOakF5SURJeUxqRXhNRGtnTlRRdU56ZzRPU0F5TWk0eE1pQTFNeTQzT0VneU1pNHhNVGxhVFRJMUxqZzVNU0EwTnk0NFF6STFMall6TURjZ05EY3VPREF3TWlBeU5TNHpOekE0SURRM0xqZ3hPRElnTWpVdU1URXpJRFEzTGpnMU5FTXlOUzQ1TVRjMElEUTBMamswTURRZ01qY3VNalF5TVNBME1pNHhPVFl5SURJNUxqQXlNeUF6T1M0M05UTTVRek13TGpnek56a2dNemN1TWpZME1TQXpNeTR4TlRBNUlETTFMakUzT1RNZ016VXVPREUxTVNBek15NDJNekUyUXpNNExqUTNPVElnTXpJdU1EZ3pPU0EwTVM0ME16WXhJRE14TGpFd056SWdORFF1TkRrNElETXdMamMyTXpsTU5ERXVOelk1SURJNExqTTBOVGxETkRFdU5URXpJREk0TGpFeE55QTBNUzR6TlRZMklESTNMamM1TnpJZ05ERXVNek16TVNBeU55NDBOVFEyUXpReExqTXdPVFVnTWpjdU1URXlJRFF4TGpReU1EZ2dNall1Tnpjek55QTBNUzQyTkRNZ01qWXVOVEV5UXpReExqYzFNVFFnTWpZdU16Z3pNeUEwTVM0NE9EUTFJREkyTGpJM056Z2dOREl1TURNME5DQXlOaTR5TURFMFF6UXlMakU0TkRNZ01qWXVNVEkxTVNBME1pNHpORGdnTWpZdU1EYzVOQ0EwTWk0MU1UVTNJREkyTGpBMk56UkROREl1Tmpnek5TQXlOaTR3TlRVMElEUXlMamcxTWlBeU5pNHdOemN5SURRekxqQXhNVE1nTWpZdU1UTXhNME0wTXk0eE56QTFJREkyTGpFNE5UVWdORE11TXpFM05DQXlOaTR5TnpFeUlEUXpMalEwTXlBeU5pNHpPRE14VERRNExqVTRPQ0F6TUM0NU5ETXhRelE0TGpnME5DQXpNUzR4TnpJeUlEUTVMakF3TURVZ016RXVORGt5TWlBME9TNHdNalFnTXpFdU9ETTFRelE1TGpBME56VWdNekl1TVRjM055QTBPQzQ1TXpZeklETXlMalV4TmpFZ05EZ3VOekUwSURNeUxqYzNPREZNTkRRdU1qUXhJRE00TGpBeU1qbERORFF1TVRNeU5pQXpPQzR4TlRFMklEUXpMams1T1RVZ016Z3VNalUzTkNBME15NDRORGsxSURNNExqTXpNemRETkRNdU5qazVOaUF6T0M0ME1UQXhJRFF6TGpVek5Ua2dNemd1TkRVMU5pQTBNeTR6TmpnZ016Z3VORFkzTlVNME15NHlNREF5SURNNExqUTNPVFVnTkRNdU1ETXhOeUF6T0M0ME5UYzBJRFF5TGpnM01qUWdNemd1TkRBek1VTTBNaTQzTVRNeUlETTRMak0wT0RjZ05ESXVOVFkyTlNBek9DNHlOakk1SURReUxqUTBNU0F6T0M0eE5UQTVRelF5TGpFNE5TQXpOeTQ1TWpFNUlEUXlMakF5T0RZZ016Y3VOakF5TVNBME1pNHdNRFV4SURNM0xqSTFPVFZETkRFdU9UZ3hOU0F6Tmk0NU1UWTVJRFF5TGpBNU1qZ2dNell1TlRjNE55QTBNaTR6TVRVZ016WXVNekUyT1V3ME5DNDROVGdnTXpNdU16TTFRelF5TGpFME5UUWdNek11TmpFM01TQXpPUzQxTWpJeUlETTBMalEyTlRJZ016Y3VNVFUzTnlBek5TNDRNalF5UXpNMExqYzVNeklnTXpjdU1UZ3pNeUF6TWk0M05EQXhJRE01TGpBeU16SWdNekV1TVRNeElEUXhMakl5TlRGRE1qa3VOakE0SURRekxqTXdORE1nTWpndU5EUTVNaUEwTlM0Mk1qWTRJREkzTGpjd05DQTBPQzR3T1RSRE1qY3VNVEU1TnlBME55NDRPVGswSURJMkxqVXdOemtnTkRjdU9EQXdNaUF5TlM0NE9USWdORGN1T0VneU5TNDRPVEZhVFRVekxqUTFPU0F6TVM0Mk56QTVRelV6TGpRM01qUWdNekF1T1RJNE1TQTFNeTQzTURRNUlETXdMakl3TlRrZ05UUXVNVEkzTkNBeU9TNDFPVFEzUXpVMExqVTBPVGdnTWpndU9UZ3pOaUExTlM0eE5ETTBJREk0TGpVeE1EZ2dOVFV1T0RNek5pQXlPQzR5TXpVNFF6VTJMalV5TXpnZ01qY3VPVFl3T1NBMU55NHlOems0SURJM0xqZzVOVGtnTlRndU1EQTJPQ0F5T0M0d05Ea3hRelU0TGpjek16Z2dNamd1TWpBeU1pQTFPUzR6T1RrMElESTRMalUyTmpZZ05Ua3VPVElnTWprdU1EazJOME0yTUM0ME5EQTFJREk1TGpZeU5qZ2dOakF1TnpreU9TQXpNQzR5T1RnNUlEWXdMamt6TWprZ016RXVNREk0TmtNMk1TNHdOekk0SURNeExqYzFPRElnTmpBdU9UazBNU0F6TWk0MU1USTVJRFl3TGpjd05qY2dNek11TVRrNFF6WXdMalF4T1RJZ016TXVPRGd6TVNBMU9TNDVNelU0SURNMExqUTJPREVnTlRrdU16RTNNU0F6TkM0NE56azBRelU0TGpZNU9EUWdNelV1TWprd055QTFOeTQ1TnpJZ016VXVOVEV3TVNBMU55NHlNamtnTXpVdU5URkROVFl1TWpJd015QXpOUzQxTURBeUlEVTFMakkxTmpjZ016VXVNRGt3TlNBMU5DNDFOU0F6TkM0ek56QTJRelV6TGpnME16TWdNek11TmpVd09DQTFNeTQwTlRFeUlETXlMalkzT1RZZ05UTXVORFlnTXpFdU5qY3dPVWcxTXk0ME5UbGFUVEk1TGpneE1TQXpNeTQ0TVRreFRESTJMalE1TkNBek1DNDBNemxNTWpNdU1UYzRJRE16TGpneE9URkRNak11TURZd055QXpNeTQ1TXpnNElESXlMamt5TURjZ016UXVNRE16T1NBeU1pNDNOall4SURNMExqQTVPRGxETWpJdU5qRXhOaUF6TkM0eE5qTTRJREl5TGpRME5UWWdNelF1TVRrM015QXlNaTR5TnpnZ016UXVNVGszTTBNeU1pNHhNVEEwSURNMExqRTVOek1nTWpFdU9UUTBOQ0F6TkM0eE5qTTRJREl4TGpjNE9Ua2dNelF1TURrNE9VTXlNUzQyTXpVeklETTBMakF6TXprZ01qRXVORGsxTXlBek15NDVNemc0SURJeExqTTNPQ0F6TXk0NE1Ua3hRekl4TGpFek9ERWdNek11TlRjeklESXhMakF3TXpnZ016TXVNalF5TnlBeU1TNHdNRE00SURNeUxqZzVPRGxETWpFdU1EQXpPQ0F6TWk0MU5UVXlJREl4TGpFek9ERWdNekl1TWpJMU1TQXlNUzR6TnpnZ016RXVPVGM1VERJMExqWTVOU0F5T0M0MU9Ua3hUREl4TGpNM09DQXlOUzR5TWtNeU1TNHhNemd4SURJMExqazNNemdnTWpFdU1EQXpPQ0F5TkM0Mk5ETTRJREl4TGpBd016Z2dNalF1TTBNeU1TNHdNRE00SURJekxqazFOak1nTWpFdU1UTTRNU0F5TXk0Mk1qWWdNakV1TXpjNElESXpMak0zT1RsRE1qRXVORGsxTWlBeU15NHlOVGs1SURJeExqWXpOVElnTWpNdU1UWTBOeUF5TVM0M09EazNJREl6TGpBNU9UWkRNakV1T1RRME15QXlNeTR3TXpRMUlESXlMakV4TURNZ01qTXVNREF4SURJeUxqSTNPQ0F5TXk0d01ERkRNakl1TkRRMU55QXlNeTR3TURFZ01qSXVOakV4TnlBeU15NHdNelExSURJeUxqYzJOak1nTWpNdU1EazVOa015TWk0NU1qQTVJREl6TGpFMk5EY2dNak11TURZd09DQXlNeTR5TlRrNUlESXpMakUzT0NBeU15NHpOems1VERJMkxqUTVOQ0F5Tmk0M05rd3lPUzQ0TVRFZ01qTXVNemM1T1VNeU9TNDVNamd5SURJekxqSTFPVGtnTXpBdU1EWTRNaUF5TXk0eE5qUTNJRE13TGpJeU1qY2dNak11TURrNU5rTXpNQzR6TnpjeklESXpMakF6TkRVZ016QXVOVFF6TXlBeU15NHdNREVnTXpBdU56RXhJREl6TGpBd01VTXpNQzQ0TnpnM0lESXpMakF3TVNBek1TNHdORFEzSURJekxqQXpORFVnTXpFdU1UazVNeUF5TXk0d09UazJRek14TGpNMU16Z2dNak11TVRZME55QXpNUzQwT1RNNElESXpMakkxT1RrZ016RXVOakV4SURJekxqTTNPVGxETXpFdU9EVXdOU0F5TXk0Mk1qWXpJRE14TGprNE5EUWdNak11T1RVMk5TQXpNUzQ1T0RRMElESTBMak5ETXpFdU9UZzBOQ0F5TkM0Mk5ETTJJRE14TGpnMU1EVWdNalF1T1Rjek5pQXpNUzQyTVRFZ01qVXVNakpNTWpndU1qazBJREk0TGpZd01ERk1NekV1TmpFZ016RXVPVGM1UXpNeExqZzBPVGtnTXpJdU1qSTFNU0F6TVM0NU9EUXlJRE15TGpVMU5USWdNekV1T1RnME1pQXpNaTQ0T1RnNVF6TXhMams0TkRJZ016TXVNalF5TnlBek1TNDRORGs1SURNekxqVTNNeUF6TVM0Mk1TQXpNeTQ0TVRreFF6TXhMalE1TWpjZ016TXVPVE01SURNeExqTTFNamNnTXpRdU1ETTBNU0F6TVM0eE9UZ3lJRE0wTGpBNU9URkRNekV1TURRek5pQXpOQzR4TmpReElETXdMamczTnpjZ016UXVNVGszTlNBek1DNDNNU0F6TkM0eE9UYzFRek13TGpVME1qUWdNelF1TVRrM05TQXpNQzR6TnpZMElETTBMakUyTkRFZ016QXVNakl4T0NBek5DNHdPVGt4UXpNd0xqQTJOek1nTXpRdU1ETTBNU0F5T1M0NU1qY3lJRE16TGprek9TQXlPUzQ0TVNBek15NDRNVGt4U0RJNUxqZ3hNVm9pSUdacGJHdzlJaU0xT0RVMlJEWWlMejROQ2p3dmMzWm5QZzBLXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpT0RJaUlHaGxhV2RvZEQwaU9ESWlJSFpwWlhkQ2IzZzlJakFnTUNBNE1pQTRNaUlnWm1sc2JEMGlibTl1WlNJZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWo0TkNqeHdZWFJvSUdROUlrMDFOQ0F3U0RJNFF6RXlMalV6TmlBd0lEQWdNVEl1TlRNMklEQWdNamhXTlRSRE1DQTJPUzQwTmpRZ01USXVOVE0ySURneUlESTRJRGd5U0RVMFF6WTVMalEyTkNBNE1pQTRNaUEyT1M0ME5qUWdPRElnTlRSV01qaERPRElnTVRJdU5UTTJJRFk1TGpRMk5DQXdJRFUwSURCYUlpQm1hV3hzUFNJalJUUkdSa1ZGSWk4K0RRbzhjR0YwYUNCa1BTSk5Nemt1T0RZMklEWXdRek01TGpNeU5EUWdOakF1TURBd09TQXpPQzQ0TURBeUlEVTVMamd3T1RNZ016Z3VNemcyT0NBMU9TNDBOVGsxUXpNM0xqazNNelFnTlRrdU1UQTVOaUF6Tnk0Mk9UYzNJRFU0TGpZeU5EUWdNemN1TmpBNUlEVTRMakE1TURGTU16Y3VNVGMySURVMUxqUTVRek0yTGpNek16TWdOVFV1TWpNd09DQXpOUzQxTVRVMklEVTBMamc1TmpFZ016UXVOek16SURVMExqUTVURE15TGpVMk1TQTFOaTR3TXpRNVF6TXlMakUzTmpZZ05UWXVNekV6TXlBek1TNDNNVE0zSURVMkxqUTJNalVnTXpFdU1qTTVJRFUyTGpRMk1EbERNekF1T1RNNE5pQTFOaTQwTmpFeUlETXdMalkwTVNBMU5pNDBNREU1SURNd0xqTTJNellnTlRZdU1qZzJORU16TUM0d09EWXlJRFUyTGpFM01Ea2dNamt1T0RNME5TQTFOaTR3TURFMklESTVMall5TXlBMU5TNDNPRGd4VERJM0xqTXlNeUExTXk0ME9EaERNall1T1RNNE9DQTFNeTR4TURZMElESTJMamN3TXlBMU1pNDJNREEySURJMkxqWTFOemdnTlRJdU1EWXhRekkyTGpZeE1qVWdOVEV1TlRJeE5DQXlOaTQzTmpBNElEVXdMams0TXpJZ01qY3VNRGMySURVd0xqVTBNMHd5T0M0MU9Ua2dORGd1TkRJMU1VTXlPQzR4TmpZNElEUTNMall5TXpFZ01qY3VPREV5TlNBME5pNDNPREUzSURJM0xqVTBNU0EwTlM0NU1USXhUREkwTGpreE15QTBOUzQwTmpVeFF6STBMak0zTmprZ05EVXVNemMyTmlBeU15NDRPRGs1SURRMUxqQTVPVGtnTWpNdU5UTTVNeUEwTkM0Mk9EUTRRekl6TGpFNE9EY2dORFF1TWpZNU55QXlNaTQ1T1RjMUlEUXpMamMwTXpNZ01qTWdORE11TWxZek9TNDVORGRETWpJdU9UazRPU0F6T1M0ME1EVTBJREl6TGpFNU1EUWdNemd1T0RneElESXpMalUwTURNZ016Z3VORFkzTlVNeU15NDRPVEF5SURNNExqQTFOREVnTWpRdU16YzFOeUF6Tnk0M056ZzBJREkwTGpreElETTNMalk0T1RsTU1qY3VORGMySURNM0xqSTFOekZETWpjdU56TTNOaUF6Tmk0ek9ETTNJREk0TGpBNE1UZ2dNelV1TlRNM01TQXlPQzQxTURRZ016UXVOekk1VERJMkxqazFPU0F6TWk0MU5UWTVRekkyTGpZME5USWdNekl1TVRFMk1TQXlOaTQwT1RjM0lETXhMalUzT0RVZ01qWXVOVFF5T1NBek1TNHdNemt6UXpJMkxqVTRPRElnTXpBdU5UQXdNU0F5Tmk0NE1qTXhJREk1TGprNU5EUWdNamN1TWpBMklESTVMall4TWpGTU1qa3VOVEUzSURJM0xqTXhNa015T1M0NE9Ua2dNall1T1RJNE5pQXpNQzQwTURRNElESTJMalk1TXpJZ016QXVPVFEwTWlBeU5pNDJORGhETXpFdU5EZ3pOaUF5Tmk0Mk1ESTNJRE15TGpBeU1UVWdNall1TnpVd05TQXpNaTQwTmpJZ01qY3VNRFkwT1V3ek5DNDFPRGdnTWpndU5UazJRek0xTGpNNE9UUWdNamd1TVRZek1TQXpOaTR5TXpBMklESTNMamd3T0RZZ016Y3VNU0F5Tnk0MU16Y3hURE0zTGpVME9DQXlOQzQ1TURnNVF6TTNMall6TmpnZ01qUXVNemMxTnlBek55NDVNVEU0SURJekxqZzVNVE1nTXpndU16STBNaUF5TXk0MU5ERTRRek00TGpjek5qVWdNak11TVRreU1pQXpPUzR5TlRrMElESXpMakF3TURJZ016a3VPQ0F5TTBnME15NHdOVFJETkRNdU5UazFOQ0F5TWk0NU9Ua3hJRFEwTGpFeE9UWWdNak11TVRrd05DQTBOQzQxTXpNZ01qTXVOVFJETkRRdU9UUTJOQ0F5TXk0NE9EazNJRFExTGpJeU1qRWdNalF1TXpjME9TQTBOUzR6TVRFZ01qUXVPVEE0T1V3ME5TNDNORE1nTWpjdU5EYzFNVU0wTmk0Mk5EY2dNamN1TnpRM05DQTBOeTQxTWpJeElESTRMakV3TnpRZ05EZ3VNelUySURJNExqVTFNREZNTlRBdU5UQTFJREkzTGpBeVF6VXdMamc0T1RJZ01qWXVOelF4TnlBMU1TNHpOVEUzSURJMkxqVTVNallnTlRFdU9ESTJJREkyTGpVNU5FTTFNaTR4TWpZMElESTJMalU1TXpZZ05USXVOREkwSURJMkxqWTFNamNnTlRJdU56QXhNeUF5Tmk0M05qZ3hRelV5TGprM09EY2dNall1T0Rnek5DQTFNeTR5TXpBMUlESTNMakExTWpnZ05UTXVORFF5SURJM0xqSTJOakZNTlRVdU56UXlJREk1TGpVMk5UbEROVFl1TVRJMk5TQXlPUzQ1TkRjMklEVTJMak0yTWpRZ016QXVORFV6T0NBMU5pNDBNRGMzSURNd0xqazVNemRETlRZdU5EVXpJRE14TGpVek16VWdOVFl1TXpBME5pQXpNaTR3TnpFMklEVTFMams0T1NBek1pNDFNVEpNTlRRdU5EVTVJRE0wTGpZMU16RkROVFF1T0RnME15QXpOUzQwTlRnMUlEVTFMakl6TXpVZ016WXVNekF4T1NBMU5TNDFNRElnTXpjdU1UY3lNVXcxT0M0eE1ESWdNemN1TmpFelF6VTRMall6TlRjZ016Y3VOams1TnlBMU9TNHhNakEwSURNM0xqazNOVEVnTlRrdU5EWTRJRE00TGpNNE9USkROVGt1T0RFMU55QXpPQzQ0TURNeUlEWXdMakF3TXlBek9TNHpNamd6SURVNUxqazVOaUF6T1M0NE5qZzVWalF6TGpFeU16RkROVGt1T1RrM0lEUXpMalkyTkRVZ05Ua3VPREExTlNBME5DNHhPRGczSURVNUxqUTFOVGtnTkRRdU5qQXlNVU0xT1M0eE1EWXlJRFExTGpBeE5UUWdOVGd1TmpJeE1TQTBOUzR5T1RFZ05UZ3VNRGczSURRMUxqTTNPVGxNTlRVdU5EZzNJRFExTGpneE0wTTFOUzR5TVRnNElEUTJMalk0TXpjZ05UUXVPRFk1TmlBME55NDFNamMwSURVMExqUTBOQ0EwT0M0ek16Tk1OVFV1T1RjMElEVXdMalE0TVVNMU5pNHlPRGM1SURVd0xqa3lNVGNnTlRZdU5ETTFNeUExTVM0ME5UazJJRFUyTGpNNU1ERWdOVEV1T1RrNE9FTTFOaTR6TkRRNUlEVXlMalV6T0NBMU5pNHhNRGs1SURVekxqQTBNemNnTlRVdU56STNJRFV6TGpReU5rdzFNeTQwTWpjZ05UVXVOekkyTVVNMU15NHdORFVnTlRZdU1UQTVOU0ExTWk0MU16a3lJRFUyTGpNME5EY2dOVEV1T1RrNU9TQTFOaTR6T0RrNVF6VXhMalEyTURVZ05UWXVORE0xTVNBMU1DNDVNakkySURVMkxqSTROelFnTlRBdU5EZ3lJRFUxTGprM01qbE1ORGd1TXpReElEVTBMalEwTXpGRE5EY3VOVE0xTVNBMU5DNDROamd4SURRMkxqWTVNVFVnTlRVdU1qRTNNaUEwTlM0NE1qRWdOVFV1TkRnMk1VdzBOUzR6T0RFZ05UZ3VNRGcxT1VNME5TNHlPVEkwSURVNExqWXlNRElnTkRVdU1ERTJOeUExT1M0eE1EVTNJRFEwTGpZd016TWdOVGt1TkRVMU5rTTBOQzR4T0RrNUlEVTVMamd3TlRRZ05ETXVOalkxTmlBMU9TNDVPVGNnTkRNdU1USTBJRFU1TGprNU5qRk1Nemt1T0RZMklEWXdXazB6TlM0eE9UZ2dOVEl1TXpjNE9VTXpOaTR4T1RFM0lEVXlMamsxTVRVZ016Y3VNalUzTlNBMU15NHpPRGczSURNNExqTTJOeUExTXk0Mk56bERNemd1TlRZeE55QTFNeTQzTWpnNElETTRMamN6TnpZZ05UTXVPRE0wTXlBek9DNDROek0xSURVekxqazRNalJETXprdU1EQTVNeUExTkM0eE16QTFJRE01TGpBNU9URWdOVFF1TXpFME55QXpPUzR4TXpJZ05UUXVOVEV5T1V3ek9TNDJOek1nTlRjdU56WkRNemt1Tmpnd05TQTFOeTQ0TURjMUlETTVMamN3TkRnZ05UY3VPRFV3T0NBek9TNDNOREUxSURVM0xqZzRNVGhETXprdU56YzRNaUExTnk0NU1USTVJRE01TGpneU5Ea2dOVGN1T1RJNU5TQXpPUzQ0TnpNZ05UY3VPVEk1U0RRekxqRXlOME0wTXk0eE56VXhJRFUzTGpreU9UVWdORE11TWpJeE9DQTFOeTQ1TVRJNUlEUXpMakkxT0RVZ05UY3VPRGd4T0VNME15NHlPVFV6SURVM0xqZzFNRGdnTkRNdU16RTVOaUExTnk0NE1EYzFJRFF6TGpNeU55QTFOeTQzTmt3ME15NDROellnTlRRdU5URXlPVU0wTXk0NU1EYzNJRFUwTGpNeE5ESWdORE11T1RrM01TQTFOQzR4TWpreUlEUTBMakV6TXpFZ05UTXVPVGd4UXpRMExqSTJPVElnTlRNdU9ETXlOeUEwTkM0ME5EVTRJRFV6TGpjeU56WWdORFF1TmpReElEVXpMalkzT1VNME5TNDNOemt4SURVekxqTTROamtnTkRZdU9EWTVPQ0ExTWk0NU16UWdORGN1T0RnZ05USXVNek0wUXpRNExqQTFNemdnTlRJdU1qTXhOQ0EwT0M0eU5UTTBJRFV5TGpFNE1UUWdORGd1TkRVMUlEVXlMakU0T1RkRE5EZ3VOalUyTlNBMU1pNHhPVGdnTkRndU9EVXhOQ0ExTWk0eU5qUTJJRFE1TGpBeE5pQTFNaTR6T0RFeFREVXhMalk1T0NBMU5DNHlPVU0xTVM0M016RXpJRFUwTGpNeE5UY2dOVEV1TnpjeUlEVTBMak15T1RnZ05URXVPREUwSURVMExqTXpNREZETlRFdU9EUXhOU0ExTkM0ek16QTBJRFV4TGpnMk9EY2dOVFF1TXpJME9TQTFNUzQ0T1RRZ05UUXVNekUwTWtNMU1TNDVNVGt6SURVMExqTXdNelVnTlRFdU9UUXlNU0ExTkM0eU9EYzVJRFV4TGprMk1TQTFOQzR5TmpneFREVTBMakkyTVNBMU1TNDVOamhETlRRdU1qazBOQ0ExTVM0NU16TTBJRFUwTGpNeE5EZ2dOVEV1T0RnNE5DQTFOQzR6TVRrZ05URXVPRFF3TmtNMU5DNHpNak15SURVeExqYzVNamNnTlRRdU16RXdPU0ExTVM0M05EUTVJRFUwTGpJNE5DQTFNUzQzTURVeFREVXlMak0zTlNBME9TNHdNVFE1UXpVeUxqSTFPRFVnTkRndU9EVXdOQ0ExTWk0eE9USXhJRFE0TGpZMU5UZ2dOVEl1TVRnMElEUTRMalExTkRORE5USXVNVGMxT0NBME9DNHlOVEk1SURVeUxqSXlOaklnTkRndU1EVXpNeUExTWk0ek1qa2dORGN1T0RjNU9VTTFNaTQ1TWpnNElEUTJMamcyT1RVZ05UTXVNemd4TnlBME5TNDNOemt4SURVekxqWTNOQ0EwTkM0Mk5ERXhRelV6TGpjeU5ERWdORFF1TkRRMk15QTFNeTQ0TWprM0lEUTBMakkzSURVekxqazNOemtnTkRRdU1UTTBRelUwTGpFeU5qRWdORE11T1RrNE1TQTFOQzR6TVRBMklEUXpMamt3T0RJZ05UUXVOVEE1SURRekxqZzNOVXcxTnk0M05UVWdORE11TXpNMFF6VTNMamd3TWpjZ05ETXVNekkyT0NBMU55NDRORFl5SURRekxqTXdNallnTlRjdU9EYzNOQ0EwTXk0eU5qVTVRelUzTGprd09EY2dORE11TWpJNU1TQTFOeTQ1TWpVMklEUXpMakU0TWpNZ05UY3VPVEkxSURRekxqRXpORWcxTnk0NU16SldNemt1T0RjNU9VTTFOeTQ1TXpJMklETTVMamd6TVRjZ05UY3VPVEUxTnlBek9TNDNPRFVnTlRjdU9EZzBOQ0F6T1M0M05EZ3pRelUzTGpnMU16SWdNemt1TnpFeE5TQTFOeTQ0TURrM0lETTVMalk0TnpJZ05UY3VOell5SURNNUxqWTNPVGxNTlRRdU5URTJJRE01TGpFek1URkROVFF1TXpFM01pQXpPUzR3T1RrNElEVTBMakV6TWlBek9TNHdNVEEwSURVekxqazRNellnTXpndU9EYzBNME0xTXk0NE16VXpJRE00TGpjek9ESWdOVE11TnpNd05DQXpPQzQxTmpFMElEVXpMalk0TWlBek9DNHpOalpETlRNdU16ZzVNeUF6Tnk0eU1qZzBJRFV5TGprek5qVWdNell1TVRNNE1TQTFNaTR6TXpjZ016VXVNVEkzT1VNMU1pNHlNelF6SURNMExqazFOREVnTlRJdU1UZzBJRE0wTGpjMU5ETWdOVEl1TVRreU5DQXpOQzQxTlRJMVF6VXlMakl3TURjZ016UXVNelV3TnlBMU1pNHlOamN6SURNMExqRTFOVGNnTlRJdU16ZzBJRE16TGprNU1VdzFOQzR5T1RNZ016RXVNekV3TVVNMU5DNHpNakF4SURNeExqSTNNREVnTlRRdU16TXlOaUF6TVM0eU1qRTVJRFUwTGpNeU9EUWdNekV1TVRjek9FTTFOQzR6TWpReUlETXhMakV5TlRjZ05UUXVNekF6TmlBek1TNHdPREEySURVMExqSTNJRE14TGpBME5UbE1OVEV1T1RjZ01qZ3VOelEyTVVNMU1TNDVOVEE0SURJNExqY3lOallnTlRFdU9USTNPU0F5T0M0M01URXhJRFV4TGprd01qY2dNamd1TnpBd05FTTFNUzQ0TnpjMUlESTRMalk0T1RnZ05URXVPRFV3TkNBeU9DNDJPRFF5SURVeExqZ3lNeUF5T0M0Mk9EUXhRelV4TGpjNE1UUWdNamd1TmpnMk55QTFNUzQzTkRFMElESTRMamN3TURVZ05URXVOekEzSURJNExqY3lOREZNTkRrdU1EUWdNekF1TmpNNU9VTTBPQzQ0TnpVMUlETXdMamMxTmpnZ05EZ3VOamd3TmlBek1DNDRNak0wSURRNExqUTNPU0F6TUM0NE16RTRRelE0TGpJM056UWdNekF1T0RRd01TQTBPQzR3TnpjMklETXdMamM0T1RrZ05EY3VPVEEwSURNd0xqWTROME0wTmk0NE5qazNJRE13TGpBM05qa2dORFV1TnpVeU9TQXlPUzQyTVRnNElEUTBMalU0T0NBeU9TNHpNalk1UXpRMExqTTVNVFFnTWprdU1qYzJOQ0EwTkM0eU1UTTJJREk1TGpFMk9Ua2dORFF1TURjMk5DQXlPUzR3TWpBelF6UXpMamt6T1RFZ01qZ3VPRGN3TmlBME15NDRORGcwSURJNExqWTRORElnTkRNdU9ERTFJREk0TGpRNE16bE1ORE11TWpjMElESTFMakkyTVVNME15NHlOalk0SURJMUxqSXhNek1nTkRNdU1qUXlOaUF5TlM0eE5qazVJRFF6TGpJd05UZ2dNalV1TVRNNE4wTTBNeTR4TmpreElESTFMakV3TnpRZ05ETXVNVEl5TXlBeU5TNHdPVEExSURRekxqQTNOQ0F5TlM0d09URXhTRE01TGpneVF6TTVMamMzTVRnZ01qVXVNRGt3TlNBek9TNDNNalVnTWpVdU1UQTNOQ0F6T1M0Mk9EZ3lJREkxTGpFek9EZERNemt1TmpVeE5TQXlOUzR4TmprNUlETTVMall5TnpNZ01qVXVNakV6TXlBek9TNDJNaUF5TlM0eU5qRk1Nemt1TURZMElESTRMalV6TVVNek9TNHdNamd5SURJNExqY3lPRElnTXpndU9UTTNNeUF5T0M0NU1URXlJRE00TGpnd01UY2dNamt1TURVNE9FTXpPQzQyTmpZeElESTVMakl3TmpVZ016Z3VORGt4TlNBeU9TNHpNVEkySURNNExqSTVPQ0F5T1M0ek5qVkRNemN1TVRZeE5pQXlPUzQyTmpFMElETTJMakEzTXpnZ016QXVNVEU1T0NBek5TNHdOamdnTXpBdU56STJNVU16TkM0NE9USTVJRE13TGpneU9EZ2dNelF1TmpreUlETXdMamczT0RrZ016UXVORGc1TVNBek1DNDROekEyUXpNMExqSTROak1nTXpBdU9EWXlNeUF6TkM0d09UQXhJRE13TGpjNU5UY2dNek11T1RJMElETXdMalkzT1V3ek1TNHlOVGNnTWpndU56YzVNVU16TVM0eU1UYzVJREk0TGpjMU1ETWdNekV1TVRZNU5pQXlPQzQzTXpZM0lETXhMakV5TVRJZ01qZ3VOelF4UXpNeExqQTNNamdnTWpndU56UTFNaUF6TVM0d01qYzJJREk0TGpjMk5qa2dNekF1T1RrMElESTRMamd3TWt3eU9DNDJPVFFnTXpFdU1UQXlNVU15T0M0Mk5qQTRJRE14TGpFek5qa2dNamd1TmpRd05DQXpNUzR4T0RJeUlESTRMall6TmpRZ016RXVNak13TWtNeU9DNDJNekkwSURNeExqSTNPRE1nTWpndU5qUTFJRE14TGpNeU5qRWdNamd1TmpjeUlETXhMak0yTmt3ek1DNDFPVFlnTXpRdU1EWTFPVU16TUM0M01UTTRJRE0wTGpJeU9EY2dNekF1TnpneE55QXpOQzQwTWpJMElETXdMamM1TVRNZ016UXVOakl6TVVNek1DNDRNREE0SURNMExqZ3lNemNnTXpBdU56VXhPQ0F6TlM0d01qSTRJRE13TGpZMUlETTFMakU1TmtNek1DNHdOVGN6SURNMkxqSXdPVFlnTWprdU5qRXlOU0F6Tnk0ek1ESTFJREk1TGpNeU9TQXpPQzQwTkRFNVF6STVMakkzT0RjZ016Z3VOak00TmlBeU9TNHhOekl4SURNNExqZ3hOak1nTWprdU1ESXlOQ0F6T0M0NU5UTTBRekk0TGpnM01qY2dNemt1TURrd05TQXlPQzQyT0RZeklETTVMakU0TVRJZ01qZ3VORGcySURNNUxqSXhOREZNTWpVdU1qWXpJRE01TGpjMU5EbERNalV1TWpFMU15QXpPUzQzTmpJeElESTFMakUzTVRrZ016a3VOemcyTlNBeU5TNHhOREEySURNNUxqZ3lNekpETWpVdU1UQTVOQ0F6T1M0NE5pQXlOUzR3T1RJMUlETTVMamt3TmpnZ01qVXVNRGt6SURNNUxqazFOVEZXTkRNdU1qQTRRekkxTGpBNU1qVWdORE11TWpVMk1pQXlOUzR4TURrMElEUXpMak13TXpFZ01qVXVNVFF3TmlBME15NHpNems0UXpJMUxqRTNNVGtnTkRNdU16YzJOaUF5TlM0eU1UVXpJRFF6TGpRd01EY2dNalV1TWpZeklEUXpMalF3T0V3eU9DNDFNek1nTkRNdU9UWTBNVU15T0M0M016QTBJRFF6TGprNU9UY2dNamd1T1RFek5pQTBOQzR3T1RBMUlESTVMakEyTVRVZ05EUXVNakkyTVVNeU9TNHlNRGt6SURRMExqTTJNVGNnTWprdU16RTFOaUEwTkM0MU16WTBJREk1TGpNMk9DQTBOQzQzTTBNeU9TNDJOalFnTkRVdU9EWTJNeUF6TUM0eE1qSWdORFl1T1RVME1TQXpNQzQzTWpnZ05EY3VPVFpETXpBdU9ETXdPU0EwT0M0eE16VXlJRE13TGpnNE1USWdORGd1TXpNMk15QXpNQzQ0TnpNeElEUTRMalV6T1RORE16QXVPRFkwT1NBME9DNDNOREl6SURNd0xqYzVPRFlnTkRndU9UTTROaUF6TUM0Mk9ESWdORGt1TVRBMVRESTRMamM0TWlBMU1TNDNOekZETWpndU56VTFJRFV4TGpneE1EZ2dNamd1TnpReU5TQTFNUzQ0TlRnMklESTRMamMwTmpjZ05URXVPVEEyTlVNeU9DNDNOVEE1SURVeExqazFORFFnTWpndU56Y3hOU0ExTVM0NU9UazBJREk0TGpnd05TQTFNaTR3TXpNNVRETXhMakV3TlNBMU5DNHpNelJETXpFdU1USTBNeUExTkM0ek5UTTBJRE14TGpFME56SWdOVFF1TXpZNE55QXpNUzR4TnpJMElEVTBMak0zT1RKRE16RXVNVGszTmlBMU5DNHpPRGsySURNeExqSXlORGNnTlRRdU16azFNU0F6TVM0eU5USWdOVFF1TXprMVF6TXhMakk1TXpRZ05UUXVNemt5TnlBek1TNHpNek0wSURVMExqTTNPVFlnTXpFdU16WTRJRFUwTGpNMU5qbE1NelF1TURjeklEVXlMalF6TVRsRE16UXVNalEzTlNBMU1pNHpNRFUxSURNMExqUTFOellnTlRJdU1qTTRNU0F6TkM0Mk56TWdOVEl1TWpNNVF6TTBMamcxTnpjZ05USXVNak01TXlBek5TNHdNemt5SURVeUxqSTROekVnTXpVdU1pQTFNaTR6TnpjNVRETTFMakU1T0NBMU1pNHpOemc1V2swek15NDFNaUEwTVM0ME9UWXhRek16TGpVeU1ESWdNemt1T1RFM01TQXpNeTQ1T0RnMklETTRMak0zTXpZZ016UXVPRFkySURNM0xqQTJNRGhETXpVdU56UXpOQ0F6TlM0M05EZ2dNell1T1Rrd015QXpOQzQzTWpRNElETTRMalEwT1RJZ016UXVNVEl3TmtNek9TNDVNRGdnTXpNdU5URTJOQ0EwTVM0MU1UTXlJRE16TGpNMU9EUWdORE11TURZeE9TQXpNeTQyTmpZMVF6UTBMall4TURVZ016TXVPVGMwTmlBME5pNHdNek1nTXpRdU56TTFJRFEzTGpFME9UWWdNelV1T0RVeE5rTTBPQzR5TmpZeElETTJMamsyT0RFZ05Ea3VNREkyTlNBek9DNHpPVEEySURRNUxqTXpORFlnTXprdU9UTTVNa00wT1M0Mk5ESTNJRFF4TGpRNE56a2dORGt1TkRnME5pQTBNeTR3T1RNeUlEUTRMamc0TURVZ05EUXVOVFV5UXpRNExqSTNOak1nTkRZdU1ERXdPU0EwTnk0eU5UTXhJRFEzTGpJMU56WWdORFV1T1RRd015QTBPQzR4TXpWRE5EUXVOakkzTlNBME9TNHdNVEkwSURRekxqQTROQ0EwT1M0ME9EQTRJRFF4TGpVd05TQTBPUzQwT0RGRE16a3VNemczTkNBME9TNDBOems1SURNM0xqTTFOamtnTkRndU5qTTRNU0F6TlM0NE5UazJJRFEzTGpFME1EWkRNelF1TXpZeU15QTBOUzQyTkRNeUlETXpMalV5TURnZ05ETXVOakV5TnlBek15NDFNaUEwTVM0ME9UVXhWalF4TGpRNU5qRmFUVE0xTGpZd055QTBNUzQwT1RZeFF6TTFMall3TnlBME1pNDJOak1nTXpVdU9UVXpJRFF6TGpnd016Y2dNell1TmpBeE15QTBOQzQzTnpNNVF6TTNMakkwT1RZZ05EVXVOelEwTWlBek9DNHhOekV4SURRMkxqVXdNRElnTXprdU1qUTVNaUEwTmk0NU5EWTRRelF3TGpNeU56TWdORGN1TXprek15QTBNUzQxTVRNMklEUTNMalV4TURRZ05ESXVOalU0SURRM0xqSTRNamRETkRNdU9EQXlOU0EwTnk0d05UVXhJRFEwTGpnMU16Z2dORFl1TkRrek1TQTBOUzQyTnpnNUlEUTFMalkyT0VNME5pNDFNRFF4SURRMExqZzBNamdnTkRjdU1EWTJJRFF6TGpjNU1UVWdORGN1TWprek55QTBNaTQyTkRkRE5EY3VOVEl4TXlBME1TNDFNREkxSURRM0xqUXdORFVnTkRBdU16RTJOQ0EwTmk0NU5UYzVJRE01TGpJek9ETkRORFl1TlRFeE5DQXpPQzR4TmpBeUlEUTFMamMxTlRFZ016Y3VNak00TmlBME5DNDNPRFE1SURNMkxqVTVNRE5ETkRNdU9ERTBOaUF6TlM0NU5ESWdOREl1Tmpjek9TQXpOUzQxT1RZZ05ERXVOVEEzSURNMUxqVTVOa016T1M0NU5ESTBJRE0xTGpVNU5pQXpPQzQwTkRFNUlETTJMakl4TnpVZ016Y3VNek0xTkNBek55NHpNak0zUXpNMkxqSXlPU0F6T0M0ME15QXpOUzQyTURjeklETTVMamt6TURVZ016VXVOakEzSURReExqUTVOVEZXTkRFdU5EazJNVm9pSUdacGJHdzlJaU0wTURrM05VWWlMejROQ2p3dmMzWm5QZzBLXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvc21hcnQtZDJjNmFmZmI1MzY4OWFkMGZkNzJhNzI1NTlhNWNiYTkuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjNhV1IwYUQwaU9ESWlJR2hsYVdkb2REMGlPRElpSUhacFpYZENiM2c5SWpBZ01DQTRNaUE0TWlJZ1ptbHNiRDBpYm05dVpTSWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklqNE5Danh3WVhSb0lHUTlJazAxTkNBd1NESTRRekV5TGpVek5pQXdJREFnTVRJdU5UTTJJREFnTWpoV05UUkRNQ0EyT1M0ME5qUWdNVEl1TlRNMklEZ3lJREk0SURneVNEVTBRelk1TGpRMk5DQTRNaUE0TWlBMk9TNDBOalFnT0RJZ05UUldNamhET0RJZ01USXVOVE0ySURZNUxqUTJOQ0F3SURVMElEQmFJaUJtYVd4c1BTSWpSVUZHT1VaR0lpOCtEUW84Y0dGMGFDQmtQU0pOTXpBdU5qVXpJRFl4UXpNd0xqVXpNVGtnTmpBdU9UazVOaUF6TUM0ME1USWdOakF1T1RjMU1pQXpNQzR6TURBeUlEWXdMamt5T0RWRE16QXVNVGc0TkNBMk1DNDRPREUzSURNd0xqQTROeUEyTUM0NE1UTTFJRE13TGpBd01UWWdOakF1TnpJM05VTXlPUzQ1TVRZeklEWXdMalkwTVRVZ01qa3VPRFE0TnlBMk1DNDFNemsySURJNUxqZ3dNamdnTmpBdU5ESTNOVU15T1M0M05UWTVJRFl3TGpNeE5UUWdNamt1TnpNek5TQTJNQzR4T1RVeElESTVMamN6TkNBMk1DNHdOelJXTlRjdU9EZ3pNVU15T1M0M016SXlJRFUzTGpFME9UUWdNekF1TURJeE5DQTFOaTQwTkRRNUlETXdMalV6T0RNZ05UVXVPVEkwTTBNek1TNHdOVFV5SURVMUxqUXdNemNnTXpFdU56VTNOQ0ExTlM0eE1EazBJRE15TGpRNU1URWdOVFV1TVRBMlNETTBMakpXTlRBdU9EVTRPVU16TkM0eE9Ua3hJRFV3TGpZMU1qRWdNelF1TWpZM05TQTFNQzQwTlRFeklETTBMak01TkRRZ05UQXVNamc0TVVNek5DNDFNakUwSURVd0xqRXlORGtnTXpRdU5qazVOQ0ExTUM0d01EZzVJRE0wTGprd01ERWdORGt1T1RVNVNETTBMamt4TWtNek5TNDVNRGcxSURRNUxqY3lOVElnTXpZdU56ZzJNeUEwT1M0eE16YzVJRE0zTGpNNE1qUWdORGd1TXpBMU9VTXpOeTQ1TnpnMElEUTNMalEzTXprZ016Z3VNalV5TXlBME5pNDBOVE0zSURNNExqRTFNeUEwTlM0ME16VXhRek0xTGpnM09ESWdORFF1TXpZNU1pQXpOQzR3TVRBM0lEUXlMalU1TXprZ016SXVPRE14SURRd0xqTTNOa016TWk0ek5UZzFJRE01TGpVM01URWdNekV1T1RRek9DQXpPQzQzTXpNNElETXhMalU1TURFZ016Y3VPRGN3TVVNeU9TNDJNRE16SURNMkxqYzNOaUF5Tnk0NE9URWdNelV1TWpRME9TQXlOaTQxT0RJMElETXpMak01TWpORE1qVXVNamN6T0NBek1TNDFNems0SURJMExqUXdNekVnTWprdU5ERTBNaUF5TkM0d016WWdNamN1TVRjMlF6SXpMamszTURFZ01qWXVOelkxTXlBeU15NDVPVFF4SURJMkxqTTBOVElnTWpRdU1UQTJNU0F5TlM0NU5EUTJRekkwTGpJeE9ESWdNalV1TlRRMElESTBMalF4TlRjZ01qVXVNVGN5TWlBeU5DNDJPRFV4SURJMExqZzFOVEpETWpRdU9UVTBOaUF5TkM0MU16Z3pJREkxTGpJNE9UVWdNalF1TWpnek5TQXlOUzQyTmpZNElESTBMakV3T0RSRE1qWXVNRFEwTWlBeU15NDVNek16SURJMkxqUTFOU0F5TXk0NE5ESXlJREkyTGpnM01TQXlNeTQ0TkRFeFNESTVMalkwTmxZeU1pNDVOamRETWprdU5qUTBOQ0F5TWk0ME5EZzRJREk1TGpnME9EWWdNakV1T1RVeE1TQXpNQzR5TVRNM0lESXhMalU0TXpORE16QXVOVGM0TnlBeU1TNHlNVFUwSURNeExqQTNORGdnTWpFdU1EQTNNeUF6TVM0MU9UTWdNakV1TURBME9VZzFNQzQwTURkRE5UQXVPVEkxTXlBeU1TNHdNRGN6SURVeExqUXlNVFlnTWpFdU1qRTFOQ0ExTVM0M09EWTRJREl4TGpVNE16TkROVEl1TVRVeUlESXhMamsxTVRFZ05USXVNelUyTXlBeU1pNDBORGczSURVeUxqTTFOU0F5TWk0NU5qZFdNak11T0RReE1VZzFOUzR4TWpreFF6VTFMalUwTlNBeU15NDROREl6SURVMUxqazFOVGNnTWpNdU9UTXpOeUExTmk0ek16TWdNalF1TVRBNE9VTTFOaTQzTVRBeUlESTBMakk0TkNBMU55NHdORFV4SURJMExqVXpPRGdnTlRjdU16RTBOU0F5TkM0NE5UVTNRelUzTGpVNE16a2dNalV1TVRjeU5pQTFOeTQzT0RFMUlESTFMalUwTkNBMU55NDRPVE0ySURJMUxqazBORFpETlRndU1EQTFOeUF5Tmk0ek5EVXhJRFU0TGpBeU9UY2dNall1TnpZMU15QTFOeTQ1TmpRZ01qY3VNVGMyUXpVM0xqVTVOeUF5T1M0ME1UUXhJRFUyTGpjeU5qVWdNekV1TlRNNU5pQTFOUzQwTVRneElETXpMak01TWpGRE5UUXVNVEE1TnlBek5TNHlORFEySURVeUxqTTVOellnTXpZdU56YzFPU0ExTUM0ME1URWdNemN1T0Rjd01VTTFNQzR3TlRZMklETTRMamN6TXpjZ05Ea3VOalF4TmlBek9TNDFOekVnTkRrdU1UWTVJRFF3TGpNM05rTTBPQzR3TURFMklEUXlMalUyTWpVZ05EWXVNVFk0T1NBME5DNHpNakE1SURRekxqa3pOaUEwTlM0ek9UZERORE11T0RJMk15QTBOaTQwTWpFMUlEUTBMakE1TkRrZ05EY3VORFV3T0NBME5DNDJPVEV6SURRNExqSTVNVU0wTlM0eU9EYzJJRFE1TGpFek1UTWdORFl1TVRjd055QTBPUzQzTWpRMUlEUTNMakUzTkNBME9TNDVOVGxJTkRjdU1UZzFRelEzTGpNNE5qa2dOVEF1TURBM05pQTBOeTQxTmpZMklEVXdMakV5TWpnZ05EY3VOamswT1NBMU1DNHlPRFl4UXpRM0xqZ3lNekVnTlRBdU5EUTVOQ0EwTnk0NE9USTJJRFV3TGpZMU1USWdORGN1T0RreU1TQTFNQzQ0TlRnNVZqVTFMakV3TmtnME9TNDFPVEpETlRBdU16STFOeUExTlM0eE1EazBJRFV4TGpBeU9ERWdOVFV1TkRBek55QTFNUzQxTkRVeElEVTFMamt5TkRORE5USXVNRFl5TWlBMU5pNDBORFE1SURVeUxqTTFNVFlnTlRjdU1UUTVNeUExTWk0ek5TQTFOeTQ0T0RNeFZqWXdMakEzTkVNMU1pNHpOVEEwSURZd0xqRTVOVElnTlRJdU16STJPU0EyTUM0ek1UVTBJRFV5TGpJNE1Ea2dOakF1TkRJM05VTTFNaTR5TXpRNUlEWXdMalV6T1RZZ05USXVNVFkzTWlBMk1DNDJOREUySURVeUxqQTRNVGdnTmpBdU56STNOVU0xTVM0NU9UWTBJRFl3TGpneE16VWdOVEV1T0RrME9DQTJNQzQ0T0RJZ05URXVOemd6SURZd0xqa3lPRGRETlRFdU5qY3hNaUEyTUM0NU56VTFJRFV4TGpVMU1USWdOakF1T1RrNU5pQTFNUzQwTXlBMk1VZ3pNQzQyTlROYVRUTXhMalUzTWpFZ05UY3VPRGd5TVZZMU9TNHhORGM1U0RVd0xqVXhObFkxTnk0NE9ESXhRelV3TGpVeE5qWWdOVGN1TmpNM05pQTFNQzQwTWpBeElEVTNMalF3TWprZ05UQXVNalEzT0NBMU55NHlNamsxUXpVd0xqQTNOVFVnTlRjdU1EVTJNU0EwT1M0NE5ERTFJRFUyTGprMU9ERWdORGt1TlRrM0lEVTJMamsxTjBnek1pNDBPVEV4UXpNeUxqSTBOamdnTlRZdU9UVTRNU0F6TWk0d01USTVJRFUzTGpBMU5UZ2dNekV1T0RRd05pQTFOeTR5TWpsRE16RXVOalk0TXlBMU55NDBNREl5SURNeExqVTNNVGdnTlRjdU5qTTJPQ0F6TVM0MU56SXhJRFUzTGpnNE1URldOVGN1T0RneU1WcE5Nell1TURNMElEVTFMakV3TlVnME5pNHdOVFZXTlRFdU56Z3pPVWd6Tmk0d016UldOVFV1TVRBMVdrMHpPUzR3TmpReElEUTVMakV4TlVNek9DNDRPREEwSURRNUxqUXdOQ0F6T0M0Mk56TWdORGt1TmpjM01pQXpPQzQwTkRRZ05Ea3VPVE14T1VnME15NDJOVE5ETkRJdU5qVTRNaUEwT0M0NE16RTFJRFF5TGpBNU55QTBOeTQwTURjeklEUXlMakEzTkNBME5TNDVNalF4UXpReExqY3hPRFFnTkRVdU9UYzJOaUEwTVM0ek5UazBJRFEyTGpBd01Ua2dOREVnTkRaRE5EQXVOalk1TlNBME5pQTBNQzR6TXprMElEUTFMamszTnpFZ05EQXVNREV5TVNBME5TNDVNekU1UXpNNUxqazVPRGtnTkRjdU1EWXdNaUF6T1M0Mk56QTFJRFE0TGpFMk1qVWdNemt1TURZME1TQTBPUzR4TVRSV05Ea3VNVEUxV2swek1TNDBPRFFnTWpJdU9UWXhPVll5Tnk0ek9URXhRek14TGpNNU15QXpNUzQxT0RrMElETXlMalF3TWpFZ016VXVOek00TkNBek5DNDBNVEVnTXprdU5ESTJRek0yTGpJeE1TQTBNaTQwTnpZZ016Z3VOVFVnTkRRdU1UVTFJRFF4SURRMExqRTFOVU0wTXk0ME5TQTBOQzR4TlRVZ05EVXVOemtnTkRJdU5EYzNJRFEzTGpVNE9TQXpPUzQwTWpaRE5Ea3VOVGs0SURNMUxqY3pPRFFnTlRBdU5qQTNNU0F6TVM0MU9EazBJRFV3TGpVeE5pQXlOeTR6T1RFeFZqSXlMamsyTVRsRE5UQXVOVEUyTWlBeU1pNDVORGMwSURVd0xqVXhNelFnTWpJdU9UTXpNU0ExTUM0MU1EZ2dNakl1T1RFNU4wTTFNQzQxTURJMUlESXlMamt3TmpJZ05UQXVORGswTkNBeU1pNDRPVE01SURVd0xqUTRORElnTWpJdU9EZ3pOVU0xTUM0ME56TTVJREl5TGpnM016SWdOVEF1TkRZeE55QXlNaTQ0TmpVZ05UQXVORFE0TXlBeU1pNDROVGswUXpVd0xqUXpORGtnTWpJdU9EVXpPQ0ExTUM0ME1qQTJJREl5TGpnMU1URWdOVEF1TkRBMklESXlMamcxTVRGSU16RXVOVGt6UXpNeExqVTJOQ0F5TWk0NE5URXpJRE14TGpVek5qTWdNakl1T0RZeU9TQXpNUzQxTVRVNUlESXlMamc0TXpWRE16RXVORGsxTlNBeU1pNDVNRFF4SURNeExqUTROQ0F5TWk0NU16RTVJRE14TGpRNE5DQXlNaTQ1TmpBNVZqSXlMamsyTVRsYVRUVXlMak0xTkNBeU55NHpPVEV4UXpVeUxqTTJNemdnTWprdU9UWTBOU0ExTWk0d016UXpJRE15TGpVeU56Y2dOVEV1TXpjME1TQXpOUzR3TVRRNVF6VXpMamt4T1RRZ016SXVPVGcyTnlBMU5TNDJNakEzSURNd0xqQTROVFlnTlRZdU1UUTRJREkyTGpnM05FTTFOaTR4TnpJeElESTJMamN5T1RRZ05UWXVNVFkwTVNBeU5pNDFPREV4SURVMkxqRXlORFVnTWpZdU5ETTVPVU0xTmk0d09EUTVJREkyTGpJNU9EZ2dOVFl1TURFME9DQXlOaTR4TmpjNUlEVTFMamt4T1NBeU5pNHdOVFk1UXpVMUxqZ3lNaUF5TlM0NU5ERXlJRFUxTGpjd01EZ2dNalV1T0RRNE1TQTFOUzQxTmpRZ01qVXVOemcwTWtNMU5TNDBNamN5SURJMUxqY3lNRE1nTlRVdU1qYzRNU0F5TlM0Mk9EY3lJRFUxTGpFeU55QXlOUzQyT0RkSU5USXVNelV6TVV3MU1pNHpOVFFnTWpjdU16a3hNVnBOTWpZdU1EYzVJREkyTGpBMU5UbERNalV1T1Rnek1TQXlOaTR4TmpjeElESTFMamt4TXlBeU5pNHlPVGd4SURJMUxqZzNNelFnTWpZdU5ETTVOVU15TlM0NE16TTRJREkyTGpVNE1EZ2dNalV1T0RJMU9DQXlOaTQzTWpreUlESTFMamcxSURJMkxqZzNORU15Tmk0ek56YzNJRE13TGpBNE5UY2dNamd1TURjNU5DQXpNaTQ1T0RZNElETXdMall5TlNBek5TNHdNVFE1UXpJNUxqazJOVEVnTXpJdU5USTNOaUF5T1M0Mk16VTVJREk1TGprMk5EUWdNamt1TmpRMklESTNMak01TVRGV01qVXVOamt3T1VneU5pNDROekZETWpZdU56SXdOaUF5TlM0Mk9UQTBJREkyTGpVM01Ua2dNalV1TnpJeU9DQXlOaTQwTXpVeklESTFMamM0TlRaRE1qWXVNams0TnlBeU5TNDRORGcxSURJMkxqRTNOelVnTWpVdU9UUXdOQ0F5Tmk0d09DQXlOaTR3TlRRNVRESTJMakEzT1NBeU5pNHdOVFU1V2swek55NDFOVEV4SURNM0xqRXhNakZETXpjdU5ERXlNU0F6Tnk0d01UQXhJRE0zTGpNd05ETWdNell1T0RjeE15QXpOeTR5TXprNElETTJMamN4TVRSRE16Y3VNVGMxTkNBek5pNDFOVEUySURNM0xqRTFOamNnTXpZdU16YzJPU0F6Tnk0eE9EWWdNell1TWpBM1RETTNMalkxT1NBek15NDBNalF4VERNMUxqWTFNaUF6TVM0ME5UUXhRek0xTGpVeU9USWdNekV1TXpNeU9TQXpOUzQwTkRJMUlETXhMakU0SURNMUxqUXdNVFlnTXpFdU1ERXlOVU16TlM0ek5qQTJJRE13TGpnME5Ea2dNelV1TXpZM0lETXdMalkyT1NBek5TNDBNaUF6TUM0MU1EUTVRek0xTGpRM01qUWdNekF1TXpRd09TQXpOUzQxTmprMklETXdMakU1TlNBek5TNDNNREE0SURNd0xqQTRNelZETXpVdU9ETXhPU0F5T1M0NU56SWdNelV1T1RreE55QXlPUzQ0T1RreklETTJMakUyTWlBeU9TNDROelJNTXpndU9UTTFJREk1TGpRMk9FdzBNQzR4TnpVZ01qWXVPVE0zUXpRd0xqSTFJREkyTGpjNE1qRWdOREF1TXpZM01TQXlOaTQyTlRFMUlEUXdMalV4TXlBeU5pNDFOakF4UXpRd0xqWTFPRGdnTWpZdU5EWTROaUEwTUM0NE1qYzBJREkyTGpReU1ESWdOREF1T1RrNU5TQXlOaTQwTWpBeVF6UXhMakUzTVRjZ01qWXVOREl3TWlBME1TNHpOREF6SURJMkxqUTJPRFlnTkRFdU5EZzJNU0F5Tmk0MU5qQXhRelF4TGpZek1Ua2dNall1TmpVeE5TQTBNUzQzTkRrZ01qWXVOemd5TVNBME1TNDRNalFnTWpZdU9UTTNURFF6TGpBMk15QXlPUzQwTmpoTU5EVXVPRE0ySURJNUxqZzNORU0wTmk0d01EWTJJREk1TGpnNU9UZ2dORFl1TVRZMk5TQXlPUzQ1TnpJMUlEUTJMakk1TnprZ016QXVNRGcwTWtNME5pNDBNamswSURNd0xqRTVOVGtnTkRZdU5USTNJRE13TGpNME1qSWdORFl1TlRjNU9TQXpNQzQxTURZelF6UTJMall6TWpnZ016QXVOamN3TlNBME5pNDJNemc0SURNd0xqZzBOak1nTkRZdU5UazNNeUF6TVM0d01UTTNRelEyTGpVMU5UZ2dNekV1TVRneE1TQTBOaTQwTmpnMElETXhMak16TXpZZ05EWXVNelExSURNeExqUTFOREZNTkRRdU16TTVJRE16TGpReU5ERk1ORFF1T0RFeUlETTJMakl3TjBNME5DNDROREV4SURNMkxqTTNOamtnTkRRdU9ESXlOQ0F6Tmk0MU5URTBJRFEwTGpjMU56a2dNell1TnpFeE1rTTBOQzQyT1RNMElETTJMamczTVNBME5DNDFPRFU0SURNM0xqQXdPVGtnTkRRdU5EUTNNU0F6Tnk0eE1USXhRelEwTGpJNU1EUWdNemN1TWpJMk9DQTBOQzR4TURFeUlETTNMakk0T0RnZ05ETXVPVEEzSURNM0xqSTRPVEZETkRNdU56VTRNU0F6Tnk0eU9EazJJRFF6TGpZeE1UUWdNemN1TWpVek1pQTBNeTQwT0NBek55NHhPRE14VERReElETTFMamcyT0RsTU16Z3VOVElnTXpjdU1UZ3pNVU16T0M0ek5qZzFJRE0zTGpJMk16TWdNemd1TVRrM05TQXpOeTR5T1RreUlETTRMakF5TmpVZ016Y3VNamcyT1VNek55NDROVFUxSURNM0xqSTNORFVnTXpjdU5qa3hOQ0F6Tnk0eU1UUXlJRE0zTGpVMU15QXpOeTR4TVROTU16Y3VOVFV4TVNBek55NHhNVEl4V2swME1TNDBNall4SURNMExqQXdNamxNTkRJdU5qZzJJRE0wTGpZMk9UbE1OREl1TkRRMUlETXpMakkxTnpGRE5ESXVOREU1T1NBek15NHhNRGt6SURReUxqUXpNRGtnTXpJdU9UVTNOU0EwTWk0ME56Y3hJRE15TGpneE5EbEROREl1TlRJek1pQXpNaTQyTnpJeklEUXlMall3TXpJZ016SXVOVFF6SURReUxqY3hNREVnTXpJdU5ETTRURFF6TGpjeklETXhMalF6T0V3ME1pNHpNakl4SURNeExqSXpNVGxETkRJdU1UYzBNaUF6TVM0eU1UQXpJRFF5TGpBek5DQXpNUzR4TlRJNUlEUXhMamt4TXpRZ016RXVNRFkwTjBNME1TNDNPVEk0SURNd0xqazNOalVnTkRFdU5qazFOU0F6TUM0NE5qQTBJRFF4TGpZeklETXdMamN5TmpGTU5ERWdNamt1TkRNNU9VdzBNQzR6TnlBek1DNDNNall4UXpRd0xqTXdORFlnTXpBdU9EWXdOQ0EwTUM0eU1EY3pJRE13TGprM05qVWdOREF1TURnMk55QXpNUzR3TmpRM1F6TTVMamsyTmpFZ016RXVNVFV5T1NBek9TNDRNalU0SURNeExqSXhNRE1nTXprdU5qYzRJRE14TGpJek1UbE1Nemd1TWpZNUlETXhMalF6T0V3ek9TNHlPRGtnTXpJdU5ETTRRek01TGpNNU5UZ2dNekl1TlRRek1TQXpPUzQwTnpVMUlETXlMalkzTWpZZ016a3VOVEl4TlNBek1pNDRNVFV5UXpNNUxqVTJOelFnTXpJdU9UVTNPQ0F6T1M0MU56Z3lJRE16TGpFd09UUWdNemt1TlRVeklETXpMakkxTnpGTU16a3VNekV6SURNMExqWTJPVGxNTkRBdU5UY3pJRE0wTGpBd01qbEROREF1TnpBME55QXpNeTQ1TXpNeElEUXdMamcxTVRVZ016TXVPRGsyTnlBME1TNHdNREExSURNekxqZzVOamRETkRFdU1UUTVOaUF6TXk0NE9UWTNJRFF4TGpJNU5qTWdNek11T1RNek1TQTBNUzQwTWpnZ016UXVNREF5T1VnME1TNDBNall4V2lJZ1ptbHNiRDBpSXpORVFVSkVSQ0l2UGcwS1BDOXpkbWMrRFFvPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRUFBQUFCQUNBWUFBQUNxYVhIZUFBQUFCSE5DU1ZRSUNBZ0lmQWhraUFBQUFBbHdTRmx6QUFBQnV3QUFBYnNCT3V6ajRnQUFBQmwwUlZoMFUyOW1kSGRoY21VQWQzZDNMbWx1YTNOallYQmxMbTl5WjV2dVBCb0FBQTBHU1VSQlZIaWM1WnQ1ZEZSVnRzWi9PL01FU1VoSWdFQUdFZ1lGd2lnUUJzRkFVQkFEUmtFUjJ1ZXpJUTRnT0QwUnUrMldwNzdYMEEzU2lKMEdSWnBKVVNFMGtFYWUwQWkwSFF5S0VNSVFFaVNFUEFoa2dFRG04ZlFmdDZxb1ZOMUtLaVF4dVBwYjY2NnFlKzQrKys3OTNYUE8zWHVmS2xGSzBaWVFFVTlnRVRBR2lBU3VBRDhBSzVSU0thMXVnRktxelE1Z0tQQWpvSFNPR3VCL0FjZld0RUhhYWdTSWlBOXdDdWdDRU5VdmdtRjl1cE5iVUVUU1AxTXBMYTgwaXI2dmxKcmZhbmEwSVFHcmdYaUFWYS9PNHRtNCswelhzaTRYTU8yTkR6aWVjUkcwMFRCZUtiVy9WZXhvUXdKeWdLNFBqUjdBOWlVdldGM1BMYnhCdnhtL3BxaWtEQ0JaS1RXeU5leHdhQTJsalVGRS9JR3VBREZEKytqS2RQYnpaczdVTWNiVEFTTGkyQnEydEFrQlFEbFFCNWpQZFN0RWRBMHdmdlhBUUZoTG8wMElVRXFWQXBrQVcvZC9UMjFkbmE3Y3lSOHZtWitPRVpFSFJXU3NpTGkybEMxdE5RSUFOZ0ljVGIvQW9nKzJZcmtXbmZ2L1BOYnVPbVRldEI1SUFyNEdMb3JJWWhFSm9KbG95MFhRQ2ZnV0dBd1FQZVF1NWswYlIyYy9INUxUenZIT3h6dTVYbHpXbUpvaVlMNVNhdU50MjlHV2thQ0loS0E5MWI2MlpGemJlUk1SRTBmdkJ4L0gyY09McklPN3lUcjBKWG1uZnpBWCt5dndqRklxcjhrMjNBR2hzQlB3UExBWThERy9OdWpKQll4K2RRbU9MdFpUL3Z5QkpQYStHVTlwZnE2eHFRQjRYaW4xUlpQdTM5WUVBSWhJS0xBTkdBVGFVNy8vZjlZUkVmTndnLzBxYmx4ai85c3ZrSjcwaVhuelo4QmNwVlNoWGZkdWF3SkVKQmI0QytBTEVOaG5NSk5YZkk1M3QrNTI2OGpjbThpKzN6NUwrYlY4WTlNVklGNHB0YXZSKzlzaVFFVGFBNjhBSTlHeXRDemdPN1FzN1p6ZDF0bTZzVGIwZjJlNEJ3QURaczVqek92TGNIUjJhYksrOG12NTdIdnJPVEsvMm1iZXZCNXRXdGhjVFhVSkVKRXh3QVlnV0tkUEdmQ2FVdXFESmx0NVMzODN0S0VhQmVEaTFaNEo3NjZsNS8yUDNxNUtFNDZzK1IzZkxGOWszdlE5RUt1VXl0V1R0eUpBUklLQWt4Z1dwQkdSRVF6b0VjekZxNFY4bFhLS3F1b2FvK2hrcGRUZm1tcWdpRXhDSTljUElPRHVnVXhlOFFVK3dlRk5WV1dGaTRmL1R0SkxqMUZSWkRYOUx3Q0RsRkxYcmV6UklXQUhFT3ZnSUd4ZS9BelR4dDFqdW5icS9DVWVXTENNM01JYm9NMno4SWFHbDRWZVIrQWRZQ0VnQVAxblBNZllSZS9wcnZJb1JYYnlYazU4dG9iS205ZnBPMjAydlIrY1lWUC8wWFhMT2ZTSDExQzF0UUFNR3IySTRxSUxaS1o5YWhUWnFwU2ExaUFCQmlOTEFMYzVVOGFRc1BCSnF4dHQyWnZDck4rdU1aNk9WRW9sMitHOEsvQWxjQitBaTJjN1l0NytrRjZUSHJPU3JTZ3E1R1RpT2s1c1dVM1J4ZnBMVFkrWU9NYTlsWUNIMzYwQXNLYWluSzkrUGR2MEpuQnk5aUI2NmpvaStreW5wcnFNYlI4TnAvQnFtbEg4RWFWVW9ybE95MUM0TitBR01IN28zYnJPakwrblh2WTJzRUhQQVJFUllEa0c1enYyN3MvTXhLTld6dWNlUDh5ZWhVK3krdDRnRGkzOUwzUG55OURlOFdUdVRXVDk1RDVrL045V0FHNWV6bWJMRXlOTnpyZnpDU0h1bC84a29zOTBFeGtQUEphSWk1dTNVZGZ6bHZZNVdaeDNNSDd4OC9iU2RjalAyN1BlcVk3RHpzQUR3Q3hnSE5wYTRnZ1FkdTlFSG5vL0VTZFhOd0NxeTBvNHMyc3pxWjhta0orZWFxbnFOUEJudFBYQ0NmZ0FlS3o4ZWdGSkM2WVJIaDNMNVdQSmxGOHZBQ0FvZEN6M1QvOENOdy8vZWtxOE8wVFFLL0lYcEIxWkJSQXRJbUZLcVN4YkJCd0RxZ0NYekp5cmpCM1UyNHFBekp4NjBXYW1tZU1qREU1UDF5TUdJTER2RUJ5ZFhTaklTQ1AxMHdUTzdOeEVWV214dVVnVmtBajhXU2wxMEtMNzR5S1NDUHdKOFB0eC8wN1RoYjVENXpMcWdSVTRPRmk2bzZGVHR4RkdBZ1FZZ2ZaS0J5d0lVRXFWaU1nM1FQU0hPdzd5bjVOSDQrUllmNVlrYkt0WG1Tb1hrYmVCbVVDWStRVTNMeWVHVE95S2c1TUQzMjdQcHFxaWxtLy85RGJITnIxUDVjMGlTeHN2QUd1QXRRM0Y4MHFwejBYa0lMQWFtQUxnNXVIUGlKaWxOcDAzRW1DR2VuYnE5ZG9KUlArUW5zM1UxMWJ5M29zejZORXRrTUliSmZ4KzA1ZXMydnAzYzludDVpZU9UZzcwRzl1SnFFZENHRGdoQ0JjM3JZaVRuMTNDbVdUTkx6UG42NERkUUFLd1J5bWxYeFN3Z0ZMcUtqQlZSRllDTDFTVUZYQTgrUThNR2ZNYm0zM2ErWVRnN3RtUjh0SjhzSWh0OUY2RERtaHpiNDZ4emRQZHRlSEt6UkIvb3VKQ0dCWWJqSmZ2clNpdXRxYU9IY3RQc2ZPUHA0MU5wNEF6YUZOdHMxSXEydzZmZFdGNFkzME5qSFoyOFdMMjYwV0lnKzJxMmNZVm9SUVhaUU9zVjBvOVpXeTNHZ0dHSnhFdklxWEFpNkJmdHVvYzBaNm91QkNpSGc2aFk3Q24xZlZMWjIrd1puNEsyU2ROc1VjV01NYmVKS1V4S0tWcVJXUXpNTHE2cW9TaWE1bjQrbXRyVnNHVlZDNmMzVW1mSWMvZzd0bHd6VVIzNG9pSUg0Yk16QnplQVc0TW14TE1pTGhRUWlOOTlRMnJVK3haYzVadFM5S29xVEtONm1QQTR5M2x2QmtPRzc5Y3U1cG1JdURBcm5qeUxoMmh1cXFFcUpnbERTcXdJa0JFN2dKMkFlRUFicDVPREo3WWxhaTRFTzRlRllpRG85aFVscDlkd29jdkhTRWp4WlNWMWFJbFBJdVZVdFZOY3MwKzNEUitxYTR1TlRXV2wxNEZvTXp3MlJEcUVXQ1lWMGxBZDRBSmMzcnk2TUpJWE53YnIwZ2YyUFFqVy83N09CV2xwbHdoQTNqeUo5bmZhd1lzUjhBVURNNC9zckFmRDgzWGp3Yk5VWlJYenNldmZNZUovYVprUzZFRkxRdnR6UlBhRXBZRURBSVFnVkhUdzNURTZ5Tmw1MFUyTERwS2FWR1ZzU2tIZUZvcHRhOUZyV3hGV0JJUUJOQ2hpd2UrbmR4dGRxb3FyMlh0eTBkSTJYblJ2SGtqOElKUzZrYUxXOW1Lc0NSQVcrSEU5a0lIc1BmakRIUG5DOUFxc29rTmRMbGpZVHQrYkFDNW1hYkZ0eERvYTRqT2ZwWm83czVReWMvWmVXamJyYkU3QXJjMUJmUWdJbUdBTjNCYUtWWFZtSHd6N3RNRGVBU3RjR1BhU01sSy95dkZSUmNBcUt6UUVxN0NLOGY1N3NCYjlkb3MwVndDdkVSa0dUQUpyWm9FVUNVaWU0RG5sRktYbTZtL0hrUmtKbHJhN0dGNUxTdDlCMW5wTytxMUZWeEpwZUNLVmFHbEhwbzdCZnlBbDdubFBJQUxFQXVjRkpGaHpkUVBnSWk0aU1ncVlCTTZ6amNIVFI0QmhaZktPSjk2clJaRG1VdkVnYkRlVXdqdEZZdWJld2N1WkNSeCt1aEhnUElGTm9qSUFLVlUrZTBhYU5oRCtBSVlCdUR2N2NybWhVT1pNRGl3U1hwQ2Y3R2I3RHpyd0xSSkJCejg1RHdiZjNXMHFxYXF6Z1hBdTBNNDBWUC9RdWZnVWJkdTFDdVdnQzczY0dCWFBFQlB0THJDeWlaWmE0Q0l4QUNmQVA0QVEzdDFZT3VidytuV3NlVUdnUzRCeFlVVkpEeDN1RjViNGVVeXpuMWZBT0FDUXQ5N25pVXE1dmM0dTFqWEF1NGVQSWZVdzh1NVhwQU9XZzJ1U1FRWUtzbS9RdHN4ZGdCNC9xRnczbnUyUHk1T0xmdmkwaVdncXJ6V01zdzF3Y3U3Ry9mRnJxVmJlRXlEaXYwN0RUQVMwTDhwQm9tSUwxcFkvU0NBcDVzVHF4Y01ZbWEwM2k1ZDg2RkxnSU9ERSswNzFOK3FFbkVnS0N5YTRkSHZtdGZaYmNMQnliVGJZenVwc0lDSURBSzJZaWhjOXVyYWptMi9pYUpQU0h0N1ZUUVp1Z1I0dGcvaWlYbnBkaW5JUExtRjdJeS8wYlBmRXdUM21IamJob2pJTDRGVkdEWm1IaDNkbFk5ZkdVSTc5OGFYcVEzN3NubDVkU29sNVZvdElzREhqVTllSDhxb3Z2Nk45R3hHSEhBOS96U0hkcy9qVXRiWEFCUmVUYjB0QWtURURhMSs4RFNBazZPd2RIWWtMOFgxc0Z0SFVrb3VoVGR2eFY0NStXV3MzNWQ5V3dTY0J2RHRhTHNRVWwxWnpIY0hGM01pWlNWMXRiZXFYRldWTjIzMjBZT0l1QUJUMFJhN1NJQXVmdTU4OXNZd3V3dzN4OUxaL2VnWDZrMXBSUTBKU2VlNVdWWk5kWTFkVlhZckFwWU5IL2VPWDcraDgxL1RFODVNKzVUa3IxNmx0TmdVNE5XaVpZUjIvMXhOUkNMUVhvMVBtZmNiRzltUkxXOE1JOURYelY1VkpvUUdldkxtekxzQTJISWdoNXRsOXBjZkxYZUdhdWN1NW95bGtLcXJaVi9pTERKUGJqRnZQZ3pNQlJZQS85SFFUY3llZGp3UWpiSHVnQmJZeko4U3dSc3pldVBvMEhBZG9qVmcxeHB3OXNSR2MrZnowUGI0MXl1bGxEUlNQRUY3eWpsWWpKTDcrbmNrZmxKM0hoNFpoS3R6MnlXbGxsWGhnVjd0Z2hZTmoxbEN6OGlacHZZck9hYWZBT1FEdlpSUytxa1ZVRnRUd2JsVG41T2IvUTlqazd2aG9LTzNLMDlOQ0dYT3hEQjZCT252UHYvVXNCd0JENWNVWCtwNTZ1anFlZ1RVMXBwVzJESmJ6dGRVbC9ITm5oYzVtN3FCeXZKYnYwUVJnZWdCQWNSUDZzN1VFVjFhUEpLelJJQ1BLOWw1WlFUNDJMZVdXQkt3cWx2NCtQNVI0NWZHTnZYRzVhWDVuUGoyajZielFGODNub29KWWM2a01NSTcvM1JQZS9XQ3dXeFB2c1M4MkFpNzVDMFh3Ynk1aTltT2xzNDJHU0l3Zm1BZzhaUENtQkxWQmVkV2Z0cDZHQmpodzhBSW44WUZEV2l4aXBDL3R5dEhWa1lUMXNrNk9icVRVZThSaWNqWUQ5OXR0K3g0OHJJbUsvSjBkYndqbkYrMkxZUGdXYnM1Y0NLL2NXR3NLMEt6cXF0TE9wejZQcUhsTGZ1SnNQdklGWEx5eS9oSFdvRmQ4cFpUd0FtZ3JxNUdSL1RuZ1hXdkRHSGZzVHltMzJ2ZlAyeGFiQTI0VXhBYzRNSFQ5NGZhTGY5dnZ5L3diMCtBN2hTb3JDZ3liU2lBdHNIUUdJcEtxM2xyNCtsRzVkb0tSYVUyTWtTTFB6Ti9oUDRmbVkzSE9aMC9RRGZXNTA0N1BqSzMzM0lLYkVKTGVQUlFpZmFiUGtzMDFPZE9RejZhdlNiOEM5N0xicDNQUW0rR0FBQUFBRWxGVGtTdVFtQ0NcIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUVBQUFBQkFDQVlBQUFDcWFYSGVBQUFBQkhOQ1NWUUlDQWdJZkFoa2lBQUFBQWx3U0ZsekFBQUIyQUFBQWRnQitseW1jZ0FBQUJsMFJWaDBVMjltZEhkaGNtVUFkM2QzTG1sdWEzTmpZWEJsTG05eVo1dnVQQm9BQUJIeVNVUkJWSGljN1p0N1hKVFYxc2Uvd3pEQU1Od0Z2Q0FnS0hvc2ZVTkY4aHFvYUpxZzJFV3p6RnRtaVVwMThoeFRPNVpXYW1XdmVmZWtyN2ZzSXQwb3NVeEJ2RlFXVVdBcTFFRlJMcGFKY3I4SXlPejNqejNQd01BTXpKRFZQK2YzK1R5ZmVXYnZ0ZGZlYSsyOTExNTc3ZjNBZjlFdU9BQnZBTVhBZFdDZEllM1BnaHV3RWJob2VEWWEwdjQwN0FSRXMyZm5uMVMzRC9Dam1mcXpnYzUvUmdObUFFS24wWWl2NWp3Z3ZwenpnTkJwTkVvalp2ekJkZnNDWndEaEh4Z2szdGk2VzZ6YnNrdjRCd1lwOVo4eDBDandSSGJNTmVSSVdRcW9tekswczdFQlBWV3dDV0J6VENSREFqb3pOS0F6MjJOSEFhQ0NMY0J0dHN2VlB1aGNYUEhyR3NEeWw5YmlIeGdFMEFkSVFTckJGemdCekFJNkFOMkFsNEhGVFhuWW9nQXRrQ0RBWlZhLzI1Z1IydHVZTWJWdlQyYjI2NDBBWnlBQitmdEg0Q3B3TDFCVmtIZVJsYzh0b3F5c0ZIZDNEM05LU0RHOG4wVUtIMjNnTWFjcFE1VU5sZThDWnQ3dTI0RzB4NmZnckxFM3lheXB2OG5nN1FtY3ZuSk5vWjF0cTNSdG9EZXdFSGdFY0ZFUy9RT0RXUDdTV3R6ZFBTZ3JLMlhsYzRzb3lMdW9aSjhGUmlFVkIzS2FRQk81clIwQlU0R1pPbzJHaENualdnZ1BvTlhZa3pEbEhsd2ROQ0NIM2Eyd0IzWkFESEFZT0FmTVU2bFVMdUdEaHJEcTFYVjA3eEZDS3lQQktsZ3pBbnFxNEhzQkxydnZIVzB5OU0xaGQwWTJzejQrZ2dxcUJRd0VzdHJnNzR2czJXZ2dCTkNaSTlJNk96TStlaUtUcDA0ak9MZ0hBTVhGMTVuMzJBd3VuTTlwYlNRMEhRVXRSa0JiQ3RBQ3A0QTdtbWVJbGZFbS8xWExONWdyZnc0SUI2b3Q4TDhmYWFWZFcyMkVWc3ZiK3hNSkNPeldJczlHSmZ5bU5KZm1MeGF3QzVocExzTktCUURzUms2SjVyZ2ZhVEJWNFNFK1RBd1BKS1N6TzA2YXhsV3FyTHFPNTk1Sko2K29rdUR1SVd6YnNRY3ZydzR0R05tZ2hENUtjMm4rWWdNRXRLb0FhM2o2QXVjQjErbVJJZHcvMlBLY3ZjVkthTkZHVy8yQVc0V0ZnR3Q0aUUrcndnTzRPenZ3MGtOaEJQcTRrSHNoaHlmbXpLQzQrSG9MT2krdkRtemR2c2Rtdy9oWEtTQUdZR0o0b0ZYRXQwSUppNTU5d1N6dnYwb0J3UUFobmR5dEx2QjdsV0FKN2JFQnR3SkZnUGVhUjhLNXJhdUhUUVd0dFFsSERuL09rbjg4QldBYy9rM3N3Tzh5Z3JjQ3J3R0xyQ0YwMHFnSjZlSk9iSGdnQTN2NEFOWXBZZjRUcy9uMjFGY0FWYlQwTFg2WEVReEZiakpxYWR5SzFnTEhEWG5XWUFud3FqV0VOK29iT0pOWHpJdnZaN0R2K0htZzdlbHdNZmNDYWQ5OERWQUo5RWY2STJmTjhiZDFCSGdBT1lDM2hmeHJTRy9POHFRemhRQW96VXl5U0hDbHFKajNrbzd5OHBaOTFOZmY1RjhQOUd0ekpLeDUrUVUrU0hnWFlDc1FSK01XdVlVajFOWUlHSVBjUHNZQTlzRFRnUGRkb2M2VUpmZENuT3FOT05XYnN1UmVETHZER2FSaS9tNmduV0FvTzhaS1paaEZKeDh2bnBwMVAwdm5QUXpBSjJsNXhqeHpJeUUvN3hJSGt6NEJxZHlOQnRLck5HNklUR0JwQkRnQWJ3R1RtNlRWQVE0cUZSemRGRWhrZjlNZDc5SDBLcUxpOHhIUzI2NEhORTJ5RTVDN3VMcG1kZXRWS2hVbEdRY3N5Vy9FbGFKaS9qWjZPbG9IZS9ZL005SWtyK2xJMEdxMTFOVFVBQnlocGZLdDJnMDZBTzhEa3oxZDFjVGQ1OG50d1k0QURoMjk3Tm01ckVzTDRRRkdodW5Zc2JRekhiM3NBVFI5Z2gySnU4OFREeGMxU0VXK2oybmNNQkJrRDFzRGhhNm03bWFMUEhkbkIxWThPRURtUytHaHNmZGJSY3Q5cmV6NUNSM2MxU1J2RENBMHhBbUFpbW85T2ljNzdGcVpOTE9qUFpnZDdVRkZ0UjVYWjBuNDJFUVBvaGJtYzcyc1lZS0I5eFFEZVR6QTBBRjl6RE5yQmE5OGZKcUg3K3BCMXc2TnhsMXRaektZTHdBSHJlSFZmQXJjRFJ6eWRGVnpkSE9qOEUxeEpLMktoSlJ5VG1aV1UxZ2tlOFBmMTU3aG9jNU1IdVZHMU1DV3U5bk1uQnVNaU11bnRMSUJZRFJRRG55dHRyTlRIMzl2UFgxNldyZC85eHR5UDFYVk53QndjZEtJVjZhSHEvd05Tc2dxTE9YWnQ5SkFHdW5Gd01kbVdMUTVCZTRBZUdpTVd3dmgvNU5mUjhTOFBNWThtYytPVDB2NU9iK09xaG85VlRWNmZzcXJZL3NucFl5T3p5Y3lMbytjZ2pxVHNxRWhUa3dkWTR4YWh3S3JBZlhDR2ZkYUxUekE1YTgvSU9mb1BpWkVEYVh5UnIzcXJXTTV4cnpzd2hMbDliZ0Y0YzJpdVFLeUFJNW5tRzdmVDJSV00yak9KVTVrVnVQcjVjeUsrQ0Y4Ly9IRGxQMHduN0lmNXBQKzBVT3NpQitDajVlVzR4bVM5bVNtS1k4bVBMT0JRUUFMcGsreXRwMUcrSGg1c0hiSlBBRE9GUmlGNW1UV0ZlWDFjd3RGQnpSNTc2KzhORmZBSWFEK2JHNHQxVGYwZ096NTJIOFdVbExSd0gxM2gvRHo0WmtzbXhmT0hYL3pRYWZWb05OcUNPM3R5N0o1NGZ6OHhTd21qZTVCY1hrRHNZc0xPVjhvUjBKRnRaNnNpN1VnVjRFdmdFS0F2UjhkcGtHdnQxa0psZFhTME5tclpmTlBYeW9tOTdjS2tJYzA1aFRnQWpSMU5wSXdlSWRORmVBQkxBYzBIYjNzMFRvYWpOanFYNDNDdjdkdVBLNDZCNUpTY3hrMTR3UGMrMi9HdmY5bW9tWit5TUZqRjNGemNXRC9HK09OU3BpNzVsY0FkRTUyK0hyYWcxd0Yvb1VodEw1eTR4N0NZNSt3V25BaEJOOWtadkhvWXVsRUR1enV6YzBHUGJ1Ty9xeVFyQWRxekJTZEJYUUs2OXVSc0w0ZFFSNmdtQVJwUXBGZW5GQ3BFRHVYZFJiaVZHOXhlSDJBQUlTdmw3TW9TWThUTjdPZkVzL09IZGo4Uk1iNExIMGlYTnpNZmtwY1Q1c25mRHkxQWhESkd3T0VPTlZiN0ZqYVdhaFVSdHFyd0F0S3VkTE1KS3NldjA3ZXhycjhPdWpFM3ZoSUVSTVdvS1RsWWprY2Z4UVE3L3p2UGVMdDE4Y3A5Q25RT0FJMkFCMkczZUZNeXNaQVprWExIVnBDU2prQTg2ZUZHbnQrelp2ZmdSektpd0Uvdy9Nc1VMZHFXeG9IajEzRTNkV1J1R21oSmp3ZWpmRWdlVU1BdzBPZFFSNXZqVUJ1VkxoU1ZHeWgzYWE0TEVQdVRCa2F6TnJwZDNJb280QUQ2ZmxLZTZaak9mYllIMkJvL3k0TUcrQm5rcVlvSUJ6ZzRPditqQmpRcUVURmtNV01rSlo2M2U0ZmxLemx5TTNNTDRibkZlQjVnRGYyL0dCUzVrUVRnem95VEVmU1duL2w3NTFBR3NDN0IxS3NVb0NDU1hkMjQ4MGpQL0hPeVFzQURjakRqaTliS1ZJRmNLbXduSXVGWlNacGlpUGtDT0NtTTdXSmx3M3JmSENBSEJIZm4xWDJFdXcxVThrZVlIWDZHVW5UM1ZDbThLcXA1OWFrRGtkZ0JUQmkxZGEzQVpnYU04b3F6ekR1emE4b3Jxd0YyZU96Z2YxdEZOa0xQQnN4TGFGNW1sbFBzQVdFRU0yVHpPMGg3QUJVS3FXTUliSDE3ZFp4WUZsOS9jMlhWbXpZbzFxeFlZOVpvdWE3UllQd2FVamh6N1ZhZzhUemh0L3B5UG0vRjJtRGpGT2dGcUM4eW5SSjh2T1Irc2t0a01NbXJHOG5KV3U2bVVxbUF3em8weEdBQy9tbEJoNGFFNkt5U21NZHRZYmZWVWdQMVBLZXVDVWVBUVpqbmZBZ2JjUVNwTDNxaWp3bHJvTkdCWHdMRUwyb2dLUHBWY1pTZC9XVDl1QkFhaTRBVDg4MCtnOHJrSWF2aTRIcEVnd2FWV2lVTW5lRk50cVU1TytxR1A5TXZ2TDMyeVlOUElJaFVBcXl4NXMrWnJBUHNOMkJNQU5GQWZGQTBjbk1hcUxpODltWkpIdHY4aWpwdm01K0s1UHl5anJHUndheDlJbHdrT3Y1YXVBeTBxbFpCVGdzbXhmT1BSRkJsRlhVc3VYdDB3WWU4dEJueDZmU1ZmN3F4eHFRTVVIVGc0Vy9DSW9DVGlNak9TdUZnS1ZiaXhBQ29nYnFpT2puVEZGSkRZOHVQWXhlTDFqNTVCQSsyVHFSRVlQOGNYSFc0T0tzWWNRZ2Z6N2ROcEVWOFVQUTZ3V3pseHptV2trTkk4TjBqQXpUb2RmRHNtMUZTcDByRFhXZEJzS1E4L01MNUVFSkFEL2xHa2NKRnRKK0JqNHdsTDM5OXlpZ3VUR3pSeTRQRGxXcHZYQjJzaU9ub0k1QmN5NVJYTjdBcE5FOTJQSHlhTnhkSGMweUs2dW81ZEdsUjBoTVBrOEhOelhmN3V4R2R6OEhLbXYwdUk3OEdlUzhjd0VtSWFkUVAzTjhuTFdPckYweWo0Y21SQUh3enFmSkxGcTlqZXFhRzViaytBNjVMSDlnay9TMFZFQTBjS0JQc0NObjNnNDJKcDdNckNaMmNTSEY1UTE0ZTJxWlB5MlU2TWdnUXJwNUlvVGdmRjRwU2NjdXNubGZKdGRLYXVqZ3BpYngxYTVLbUF5QVBnL25jaTYzRm1UdjlRSnc4bktuNjRod3NMUGovUHRmNEJzUmhzYmRsY3VmcGdLWUtBREFiOElJNnNzcXVIbzhuUjRQM0ExNlBZV3BhZHdvTnE3dGg1QXhRSk56TUZ2d1QwREUzZWNweEtuZUprL08rOTNGaUFIT0Z0MWc1UmtacGhQblAramVvdnlDK3oyTk5GcHZUekZ3MmVOaWF1WkhZbHJXQVRIaDREWUJDRWR2VHpFMjQwUFJkK1ZDb2RZNkd1blZUbzZpNzRvRlltekdoOExSVy9LWmNIQ2JtSloxUUV6TitGQU1YRFpYT0hYd1VPaUxrTWZ5VnFINUtwMEo4TzdoY2pKelRJZGJqNjRPSE4wVVNQTEdBT2JHZXRDN215TXVXanRjdEhiY0Z1VEk0N0dlcEd3TUlHVmpBTjM5VEcvTWZYTzJocDFKc3BmOElnWXlQbkVqdlI2T1JpMHZVK0FXNUlmV3g0dmFheVZVWGZvRm42SDljT3JZR0hoMjZ1U056N0QrVkYyNlRPMjFFclErWHJnRlNaZFc3ZWhBcjRkamlQNWtFMTJHRHdEd1JrVXFjSmMxQ2pEbjBPd0hKbnU1cVVYS3BnQ1ZFaGdwcjlMam9tMDlKQWFnMTBQVmpjYVFXR2JPRFNVa1J2ZEpVUXg2TVI2VlhjdHF2MXowR3BjK08wRkkzSVA4K3NWWFZGNG93Q05FbmgyVzV1VGgwaU9Bem1PR2tMUGxQYnJkY3hmRDF2NmpCUStoRjV4NmJqMjVpU2tnUStBRGtDdVZUUXBRZ3FJVFBGM1ZUQjNqeHZHTWFzN2wxdUxyYWMvcU9COW1SNXMvenRyeGFTbkx0aFZ4dGVRbXR3VTVFdG5mbVhjUGwxTlMwVURYa1hjU3NYNHBLclY1RGVZa0hPTGJGelliLzN1RUJCSzE2MlVBa21jdG96U25NUngrNXd2ekNaazgxaXdmMGFEbmVQd3FDbE8vQlhtQUUwbGpLTXdxQlNoS3NCZ1dUOTRRd01ndzA5aGZTbm9WVVF2elRXaVZQMW9mVDZJVE4rSG9LZjBLb1JmazdQK2NuSVJEbEY4c3BLR3UzbEw3V29YYVFZTmJVRmRDcG93bFpQSTQ0OGk2VVZ6R3dkaUYxRndyQWJuaUpGcmtZU0c5QWJta2ZJMTBOOWNqL1c0VkVKSDdTejMzUmJyaDVDQXJMS3ZVTTNmTkZmSi9xd2ZwSlk0RnZrY2VqamdNWFBZNFB2MTZHNFUvK2ZkWHlOcjFFVGV1bHlJYTJ1L1FpUVk5TjY2WGN2bDRPdVVYQ2dnWU14U1ZTb1c5MWdrSFZ4MkZxV2tnN3kzKzJ4S1BXMzAwZGhYb0NaUWhIWlN6emgyOWlUMjhIVHZEemJML3ZQc1phUzl1eGRYTmpjVkxsak04WWdRNm5Zc0ZkcTJqcXFxU0U4ZFNlWFhOU2lyS3l3bC9QbzZlVThZQjBGQlhUK0tZT2RSY0xRWnBDMzR3eDhQV3c5RlNaRmo3QkthblBIWEluZDFvcFBBZ0x6UVNjUGRRby9BZzV6ckE0aVhMR1h0UFRMdUZCOURwWEJnM1BvWi9QcnRjOHQ1L3lKaW5kdEFRT0dhbzhqZTZaV21KOXB3T1p3SVJ5UDI4eXZBNElvM05qMDNvb2dBNkR6YTlZRlorU1JybDRSRWpMRlpRWDEvUGhqZGVZK3lvWVl5TEdzN0c5V3Vwcjdkc0o0WkhSRXJlRnd0TjBqc05OaDVXUjFvcWExVThvSjNvQ2VBZTdHK1NxSFowb0tHMmpycTZPblJtYndUQ3RpM3IyYnRyaC9IL25wM2JVYUZpd1pQUG1LVlhsS04yTlBVLzNIc1k2L2JEQXRxakFHdHZpWGtCT1BsNEFyRHZ0aGdUK29MOFBEdzl6VWQvUGp2d0NRQ1QzazVHQ0VIaXRORWNQSkJvVVFFRmVYS0pyQ3V2Tk5Zekxlc0FXbTlQaGFTTEpXSCt5RHRDMHBYVW0xK0NDd3RhN3ZpYVF3aEI1LzZEV1pSVnh1ZkpKeTNTRlJUa21VMXZzc0pZWEdyK1NBVmNBTGgrVmg1ZlRjczZ3TFNzQS9TZDl5QUErWG1YTEJZY0h4TUxRT0swMGVob1lOak4xdTliRk9STEJmU2Q5NkN4SG9EcjU0dzc3UFBtUy82eENrZ0V5TjVqNm9PNEJzaVBPdkx6emZjYXdPTng4Y3ljUFJjZkgxOGVyTDlDVjJGeEcyekNTK0d0SUh1WDhZalE0Z1dFdGhTd2k1WTd2cmFnMEswQUtFeE40K3kvRzZPeFNpTUxMUXhiQUkxR3c0SW5uMmwxMkRlRndxdXBBczVzMjgvbEUra2dsK1ZObHNxMlpRUVhJTThNMnZzVnlHV2dVK2I2dDlSRnAzK2k5NHhZWExySTZ6b0YrVzNiQUd1aDhOSjZlM0xsbTlOazcwNVVoTmNqN3pwZnMxVFdHay93ZG1RQVU3ZHIwbWhtOXJQcHVudzRjam44UCtUM095WTRjdXlVeFpYQVdwU1VGRE02Y3JDNXJETGsrVityUitYVzJJQnp5SkhBZ3FSalpMVnlqSlZWVk15Q3BHTUFDSmh2S1BzeFVna3JnQXlnUXFFdmFNVU9XSXRtUENxUUx1OUtvQWRXM0JQNHF6NlplUmQ0MElhNnJjRjd5QzliYklJdHE4QUM0Tnk1cTllWm41VGFJak11S1ZVUi9oenlObmhyeUdranZ6MW9GMDliUE1FcVpId2diWGRHdGk0eXFLdng4NWs5bWRuc3pzaFc1djFrQTIxcitCN0F6eitBdFJ0Mm9GWmIycFczam9hR215eGErQmlYQy9NQjB0dkR3OWFhaTVDV1BmYkkrUUlpZzdxU1gxYkoxSVJEMU11YkhvOEJ5VmJ3dVFROFZGRmU1cG1mbDB0d2NBZ3VycTZvVk5iTlNDRUV2LzVTeUp1YjF2RlQ5bG1RVHRmVHlEakduNEpiOGVucy95QXRkWnVSNWphZVVxRHY3NUttSFhCQWZqQjlIYm5Hdms3N1BwN3VnalNZdjJHNzRMOGhsMWVMRzUzL3dncjhQeFkvWTA1MnI2QVdBQUFBQUVsRlRrU3VRbUNDXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFFQUFBQUJBQ0FZQUFBQ3FhWEhlQUFBQUJITkNTVlFJQ0FnSWZBaGtpQUFBQUFsd1NGbHpBQUFCMkFBQUFkZ0IrbHltY2dBQUFCbDBSVmgwVTI5bWRIZGhjbVVBZDNkM0xtbHVhM05qWVhCbExtOXlaNXZ1UEJvQUFBMEhTVVJCVkhpYzVadDNkRlRWRnNaL001azBRaElJS1JCSVFpVEJCQkNVVUtJZ2RWRjhRV2syUUJGUW4yWDVVQ3pQc21UcFU3QXZ5OFA2YkNCRlJRU1dVZ1I4b1NrcW5VZ0xSUklDQ1NRUVFrS1NTYWFjOThlWmMzTm5Nc2xNaWhOYzcxdnJyblhQdmVmZTJkOCtlNSt6OXo1M29HVVFBandKN0FVcWdBdkFlbUE4WUdnaG1YeUdCT0FnSU9vNEZnRW1Yd25qNTZzZmNzQWYyQWowQUVpOUlwYmJScVdUbWhoTDN0bGlLcXVxQVhvQ1FjQ1BQcGJOSjVpQlk2VHZuVGhVVk8xZUlPeFppNFE5YTVISXozeFBYSlVjcDZ5Z0N1amtDNEdNdnZnUkhjWUR0SThNNTUybnB1SnZxakhBOXBIaHZQZnNOTlVNQURKOElaQ3ZGUkFQa05ZdGthQkEvMW8zMDNzbTZaV1M2QXVCZksyQUFvRDh3aEszTnd1TFM3RlliYXBaNWd1QmZLMkFuUUI3czNOWnYrMzNXamRmKzJ5VnZyblpSekw1RkRIQUpVQzBiaFVrWG45c3N0aS80bFd4YmRIellzYjR3ZnFsY0dPTFN2a25ZUWp3RlhLR3J5c0dFTUJKSUtsbFJQeHo0QWU4QXRpcG43Z2RXSTRNbE55aEo3QUN5QUYrQm03OU00VnVMaGlCTDFBa2c0SUZZNmNLSHBrcm1QcUlvRU9jWGdFbmdLdmN2TU1FUEFXWXFhMnd1MzNBb2RFd0FCK2dCTzdjVmJEbWtHQm5hYzJ4clZBdytoWTlLVFB3TlRBVnVBVjREbjNZN0I4Z3lKZ2tpR3l2K3AvbU1zMGRRb0dsS01HTlJzR3luYzdrMWJHOVJERHRVZG1uUGhkSjdpRll1RVUrODlEeitudGh2aURVa09Ta0gzQUl2ZkRwdzl5VDF4OWZiQktNbUNBSWJ1Vk1QRDVKdXN5djUyVy9MN2NKMm5kUzkwL1JSQXZ3Uk94cTRDT2dEM0FNZUJqNG9ZNitYWUFYZ2R0ckNaVSszTE1rM1hyRHkvUEJhb0g4azJDdWdLZ08wRFpTM3JkYTRJdTM0Y081VUYybG5wcURWRVNqVVovMjBvRjFPSnVZRGJnRHVaeUJqTmtuQWRPQlFkcjdnb0xoaWxRNHVGdjJXcndWcnV6Vk9BbUxpK0NIYjJESnUzRG1sTHBxQVdZRHJ6YnVwVFdveXdMU2tTTWRaalFZdUc5Z0Y3NzRMWWZ5YXFzZk1sOEh5QUxXb0YrMkRBWVlkVFBNZkFIZW1TMFZFQjRCeWU0bWR4ME83SUx2RmtIck1BaHJBK1ZsY080TUhOb0x4dzZBY0Jya1E4Q2R3SzdHRVBZRzZVQUpJSXdHZy9oMFNqOGg1dDBtTmowOFRJUUVtSlR2V1lGOGxKOUd4d3BtUEM1WXZrZjY2WTZMZ29ob2VXLzRPTS8rbjVCYy93UW9qd1BBTktUVk5SdGNMYUEvY3VURGpRWURIMC91eTR4MG1aUU5Ub3BpOVFPRHlQaGdpN0tFRGdEOC9XbTQ1NTlnZEdSeFI3TGcwemVndUZDMit3NnFYNEpEZXlIM3FPdlZLcUFJT0E1a0lvc2p2OUJFZjNjSHZRTDZJMzArSE1Cb2dKQUE1NEtSaXhMa3hkWmhVSFlSTnErR3RVdGg1eFpuayswN3VINEoxbjJqenV6SWRQa2lNbC93Q2RRa3FKRTNHZ3dFbW94VVdteVlqQVlXM1pYTytGNmRXTG83ai9UTzdVaUthczNtWTBYT1NxZ0wwUjFoemFHNjc5dnRNS1liRk9hRFRJQ0dOUWVwaHVJcWRENy8yWlIrWXVQTW9acS9tNHdHa1JiWFZnQ2lUYkMvMlBIRUNIZHpnanJPQW04aloya1p0ZFhuK3grdDFqOTdiMHVRTndMemNJejhKNVA3TWowOWtTSEowYXk2LzNwQ0FreFk3WUpkZVJjQUtLbTBNT0xkVGV6SUxkYmNJU1RBYVJwNUhGaUNjaTJQNXI5TW5WVUQzellqTDY5aEFFcUIwRHY2SnJCd2FyclR6UmZXSHVDNU5mc0JTRTFONWZEaHd3Z2hhQlBzejMvL01aVGVjVzFkM2NHR0xHUklVKzZlQmlIMVJLcjd0ME5GT2NBZTVPcFQzY3o4UE1JUEdBUEVIVHhUU2twTUdOMDdoR3MzRjJ6UFllK3BFc0xDd3NqT3pnWmc2OWF0bUsxMjhpOVdNcmxQQXAwalFoalFKWXB2OXVSaHNkbU42R3Q1UlFWd09xZnV3MkpSUFRzQWs0RmZrUW1PejJBQ1pnS2JyWFlSTW1YQkx3RGMyanNPZ0s3Um9RQ1VscFl5YmRvME1qTXpBUm52M0h4MW5QWVM1UTZqMzkrTTJTSnJlcDNidDZKZG1PY2xPK2RNQmVkTHEwR0cwdXVCd2NDKzVxSG5Gc0ZBTDZBYjhKc0pHVkdOQVZhNUt1SEI2NVA0NktmajVCU1hzMnlaNXErb2xVS1BkaUVCK0JzTm1KRUsydkQ2UUpJNnR2WW9qYzB1K09qN0U4eWN0dytiWFlRamM0OTBUODk1aVNBazJUVEgwUWRKWEUxY3A5UkNud05zQTI2eEN3SldacDBpSlNhTTNuRnR1Zm1hVHVRV1YxQlFXa2w4UkFobWk1MHFxNTJWV2FmcEdoMUtqOWh3OWhkY1pOaS9OM0toVXByMG9KNlJQSFpyc2xjU0dnMEcrcWEweFdJVmJNazZCM0pEWkFWeVJXa29rb0RiZ1B1QmZ3RnZBZmNoOXhpdVFkWWs5U04zd1RVWkdnS3NBa0pNUmdPTDc3cFdjd2VGVFVjTEdmUGhWc3FycmZnWkRieVljUlZ2YmN5bTZKS1dvVEgveVRUdUd1VmMyYkxhQkhtRkZWb29GeDdpNytRaXgwNWZJdm5POWFvNUEvaThnZVFUZ1d6azlsc3RSQVFHa1JZWlExcGtOTzhkM0VlWnBScmdXOWRRZUJOMXVJT0NXaUtWRXA3NVBzdnBCYUd0VE53OHVLUFROYXROMFAvQmpldytXck1mRUdBeXN1bnRRVnpiTFFLQWtDQW5VUUs5WmEyRHpYSDRBOFMzRG1YU0ZTbWtSVWFURmhuREZhRnljajlmWmVhVmZUdlVNN3ZjN1F0c1FpcWgzR29YVEZud0MwdDM1emwxR0pJY3pac1RybllyeGExRE9ybVNZZUdHazA3a0FhcXRkckpQMXV4OTdEcmlkTDlXY3VBRlRnSVRrWGtFWnlzckdCT2Z5QzJKWFRYeUFMdk9PWG1XV3dXQUJ5WHNMN2pJczZ1Y05qYU9xWlBwbzUxTjMySzFNMmZoWWRYTUE5NVVqYTV4TlpQa3VoMmFZRlhJNWJBeCtBSEhoa3FWelVabWZsNnREdDRxQU9wUWdwcndkRDcvR0xLWXlaVnhvUXpvMGM3cEpRdlduZVNQZ25MVmZBbmQ1SllhWHhNa3JkdXBYZjRKMEI0QVJnS3JnYi9WSXl2SXllMXpSMzk2UlVUeFVMZmFWcnF6UmdFbmdQT2V0c1kyb1ZQQ3BQbS8wTy8xRGE3a3QrTFk3M2NkL1dxcm5ibUx0ZEhQQlQ0RFVnSGFSd1RSTmxUT1YzOFVsSFAwbEpZQXJ0TzlJZ1A0RGtsK0pZN2RaVGRRNUtlQ0pQL2pEUk9KQ0F3QzRPZXorUndzT1EvQXJuT0Y2cGxkNmtGUFVFb290UXRCcFF4MDdNQ2pTSE9lRG1EeU0zRG55SGluQno5Zm0wdk9tUXJWbklzTWRWTUJVdUpEdFg0Njg0Y2FCV1FnOHdNMUlmb2pTK2F1U25CTFBqSW9HSUNYOTIxbjRLcXY2YjF5TWZPUEhpRDNVbW1ERmFDVTBCTlpoSHdUR0loY1kvMlJOVUZHOVkwaHRsMlE5a0NWeGM1TGk3TlY4d1F3MzNHZUFwRHFYZ0VGd085NjhvRitmangzVFRyQmZpWjNTdkJJL3BtZFAwdDViRGFtYjlHV1dYQnMxRGFrM0oyTExFVHE0Vzh3U0NVK05LNkwwNDFQMStSd3NsQWIvVG5JRkRrV1I4RkZXWURGYWlkelQ1SHF0eDVwN2hyNWI0ZmZTRVpjSXRmRnhESnV3M2RVMnF4S0NaT0FtN3doRHhRNmZsZFprd0IyUTlPM3h5dld2bnI5cTcrK041VFIvV0swaStacUd5OHYwVWIvT0hKN0RCeWpENUNhSUJXdzdVQXhaUlZhWWNYUEhYbUFrUjBUV0RuaUpyMGxMUE9TL0Jsa2ZxRXRrUTZaaXB0REFZenFFM1ZqdjVTMlR0YytYcDNEcWFKSzFaeURMS0tDdy84QlV1S2tBbHo4L3c3Y2tGZHdVUUxnRmZtaHdHSGtTbklqTXVSL1duVm9pZ0pTZW5ZSm0xTmFZWEZLWENxcmJMeFNNL3BIcVNtamcyUGJPeVRJUktjb0tiQ0xBbkFsZjdpa21NZTNiK0hBQlRtTEt5VzBDUWlrZjFSN2I4a3JiQUFHSUswSGFOcjNlRXV5anBkZTg4cVNJN3gwVDNmdDRuOVduU0QvdkZrMVg2Um05RkhuMVZZNzJYbGxuTDFReFo1ak5SR2dLL25mTDV4aitKcGxGSmtyK2Z6SUFUYmNNSkhlN2FJWjJUR0I4M2M4Z05GUWs4cDRRZDR0R3IydlpqTHlWbUNBMzhOZnp1NW51UEZhV1NHdnFMTFJaY282emhTYlFTWW0zWkh4dWNJQVpOeFE2M2ZySTY4UUVSaWtLVUdQeHBLSEpyaUFaY1BFekV0cnhtcmtBVDc4N2c5Rkh1QUZuTW1EL0xCaE5pNzFmUy9JTHdkRWNaV1pFV3UvWmZkNUxaaHBFbmxvMGh3Z1p1aGI1V1lycjMxMVJEVVBJWmNxZDVpTC9PQUI4SXI4bzhnWi9DRmNsTkJVOG8zRjlRSCtmcjh0ZnFhdlZXUk9FT3A0N2I0ZStoTDM3ZlU4bjRIamE0OUFQeit4YXVRNEllNmVKY1RkczBUV2hEdEZWRkN3L2oyelhKNTlFTWVuTnExTVRpWDVBblJMN0orTlh3RnhYZmQyR3ZteTFUZUpxRGFCU3BqOTFHMVpUU0d2b0NtQlppRGYwRldnTzNJWGllRzlvN1NMNzY0OFRsR0psaUQ5eXlHZ0s1ekNXdzltUHd1NXdlSU83eU9KdjRzMCsrRTB3ZXdicW9EeElJdWUweHlaWDFtRmxUZSsxdW9YV2JqZjRLaVRQTUM5V3pkNFMxN2hBMkF0TXBvcjlkQzNYalIwRW93QkdjZ2t4TFFDNEozbHgxUlpHOXlQZnIza0FmcEV4WlFodzlTWmVDYXZrRU1UeVVQRDQ0QzdnVThBeGc3b1FKZlkxc3hiY1J5TDFRN3kzeCs5Y1Y3aVBKSUhjWXE0TnNtRzU1ODM4eGRBTUhLU2M5MFVyUWF1ZGVsYjU0UjNldEs5b245VWV6RStJYWs4Yjlhc1lGOFNjRVZqSXNGb3BKbU9SVzQ4N0FTZUFMYm8rdFE3OGl0eWp6SGh4KzlCdWtzNzVPNTBpNkF4dVVBaGNoL1BoRXhmcTF6dWV6VDdqRTZKcDROTXBrL01WdXNSV3BBOE5DMFpzdUtjNkVBOTVITXZsYks5NkF4ajQ3dWNEdWdja1dTMldpOExuMi9PZjJkNXRjNEhtMHp6S2k4VDh0QjhmNWp3T3NpcGxHWi8yYUE1RkRBYVdXQUlEREQ2c1hSWWhrYitVRWt4STljdTF3YzVUeUUzUGk4Yk5QVkw2MTdBYnpROXZHMHhOTlVDRW5GVVdtTmJ0ZFlLRlg4VjhzMEJwLzhFcExTSkVPdEdUM0RONmg1cFNRRjlBUVB5U3pOM243YysyWUp5K1JUdWxQQi9RMTdCZ053dUswV1dyLzRTK0IrSExSckVrT1oza2dBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9sb2dvLWRhcmstMmM5NTM4NzBlNGU3NTYyYjBkYTBlMmZmZDAwNDk4MjIucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2xvZ28tMWFmM2IzODQyNTdmOGViOGFjNjM2MGNmNjE0OGYyMjgucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3BhcnRuZXItY2RiYzlhMDA0YjE3OGI0NWY4OGU1NmIyZWRhMGJlMjAucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3BhdHRlcm5CRy1iYTFmZmQwNDM3MDhiNGYyZTRlYjgzYzFiYTc2ZmJhYS5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvcGF5bWVudC1wYXR0ZXJuLWQwNGQ1MTA3NjVjOWMzNzg0N2U3YzczNGVkMTkzYTY4LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9wYXltZW50VGh1bWItODlhYTk2NDJlNmIzNDg0MjY1M2UyZTg2MTEwM2M0YmEucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRGNBQUFBM0NBWUFBQUNvMjlKR0FBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUJtVVNVUkJWSGdCclZwWmtGeG5kZjd1MXZzNnUwWXpveDVaa2lYTFJtTWJzREM0R05rVW9ZcEF4cFZVd0tFcXdFTkNVVVZoK3pGNXNRandrRXFxTENlVjRLcFVTcGdYVEJLQ0FqZzJjZUdNU2ZBQ01oNWp5YlpzeVdvdHMyODlQVE85MzN2em5mTjN6OWp4Sm1OZjZXcGF0Ky84OXovYmQ3NXp6clh3UGgvSDcvcFNMcEwySm1MeDdLRk1ObE5JNUhKajBYUXVaemxPcnRXczZUMmVFeTFGa3RsaTRQdWxhcjA1TmZtTHh4K3ZObHBUUjQvZFg4VDdlRmg0SDQ3eHNiSGNOYnY3N2h6dXpvL0hZczU0UGgySFo3dElKVlBJRCs1RXBxY2ZUYitGNm1ZWjB4Y3Y0ZkxzRXRZMjY2alVXMWd1bDVIUDVkRnExdEhiMHoyVlNLVWU2Qm5LblBqeVY0OFc4UjZQOXlUYzBNREFlQ29adXlmaXVPTlJ4MEZ2UG9XaG5od0svVjFJdWlGNmN6bnMySDBWdW9ZTHFHMnU0K1hUcC9ETGs2ZXdWbTFpbzlaRXJkRkVJaG5INk1nZ2R1OGFSdUdxdmJCZEQxNGtocDd1L0ltK29SMzNEZSs5ZmhLLzQrSGlkemdLTzNlT2VhNTlMM1V6SGdZaG1rR0xtZzlRbVYvRjNISVppMHRsN09wTElobUp3cWI2YkRlQ1JDWVBKNVpDYjNjZXVWYUQxMjFrTXluMDlXYVFwWUE5dzhQb0dSbENOajhFTjViRytucDVvbG4zSjVabXprODI2N1V2N3hnOVVNUzdQTjZWY0lWQ0llY0YvajM4ZUpkSERlZlNLYVNpcnBxLzFmUlJiL0ZzMURHOXVnS0VEWXgwWjJGWkFlS3BES0twSE1ZU2FRd05kK09WWjUvREs4VVpuRnRhd01XaWkvNitMSzdtR2wwRHU3aVdMNnNoMDVWSHZWNUg2QWZqVGlSeWZuSDYzTkhlblZkOTQ5M3MxNzdTR3dzREE0V3dXWCtXdTczTG90WjkzMGVURnJBc253Qmh3WEZzUkQwWEhrK2YxbHpkcUtGTTE3TWlIaUtKQktLTXYyUXlnZG1MbC9ITTFBczRYWnhIY1dFVDV4Y3JXS2hhS0ZWZHpDeVdjUEhpUlRScW13aGJkY1JqY2NDaDhpeXFMd3lPUHZuekg1OC9mSGlzY0tWN3ZpTGhyaW9VSnJoSkNtWVh3akRrbFJBaG4xZXVOTEN5MmNKYWc5ZmlTVFI0c1JWWWpDVWZtODBXZk50R2hFSjVVVzdTcHR1V1YzSG0rWmN4VjZwaW93R3NNUFplWFZqR0k3OThIdi93L1lmeDRFOGZ4OHp5SnBibUY5Q3FWeEQ0RFlTMjJXSVErTERDc05DYnpqOTc0OWpZeEpYcyt4MkZHeHU3OFU3SGNYNFVobGFPcDJyUmtnZnlaNlZXdy94S0NhOU96K0pWSXVEczhocldLbFVLYmtOVUlHQVJUYVgwL3BDVzlobWI2Vndha1ZnVXBVb05FUUtIeTNoc3RGb1lHZDJIY3JtT2IzNzdiL0hqaHg5R1pYMlpucjFKZ1pxaVNsV295OGRHSTI0dTlCcy91dVdqSDducm5mYit0akUzOXFHUDNPblhxOGRhZkxoNGhxVVBvVWFJRWsxZWM3aHBteWdaTURaYytjNmpFTHp1dVM3aVVRL1piSXJhRHhEUTJuWVlJQnBMWVBmZTNWZ3ByVE95SW93c0M5MnBLTy92UjJGSEZnY09ITURRNXo2Tm1jc1hzSFRwQXBMeEJHd3ZCb3V1U1ExQjR0eDFIYldpWXpuMzNucnJwL0hZWXc4ZGU5ZkMzWGpMYlJOaHZYNnNSWTFUNVZRY05jZTRDcmhKeS9Jb21FUEVDeEh4UEhTbmswZ1RYQmdYcUZacjhCbUwyVmlFd3FXUlRHV0pmdHdnMTRuR1UrZ3Y3RUh5aFpmUW40bGhvMjdpYW5UWEVLNDZzQWU3RHV3bFd2WmcvOVVGMkg2ZGJ1V3BoMEE4SlhSb2FRK3BlQlJ4UGpNZWo2UGhSTzhkdjIyaU9QbnpFeWZlVElZM2RjdXh3K09GTVBDUCswSEFqZnJxaWgzWGtNT2g1Y1R4SXRSaXhITVE1VStmN0NNZ0NMaDJpSHdtZ2J6QWV6YUxSQ3JQZ0pFbk9mQVNTZlNQak9MUTRac3hORFNBd21BZkJyb3pTRVNBaUUzMjBsalhNMkM4MlJUSW9nQ0VLZ3BvemhpVlkxUEpIOWkvQjEvNTB6dmdVdTdBc280ZkhwOG92SmtjenB0ZEhCemUvU3ozUG1EUll2WHFHbHErOFhzUnpSTHZvOXVKRmVPUkNHTFJDUDh2N21rams0eWhLNU5rZkRHR2NpbU0zWEFEOGp0RzZFcTB1R3lUYm1YVDZybWVidlIwNVJSbGQrd2N3T0RJVGlvaFJrVzVGSkwyOGl5TlJadEFaRG0wbnVOb3ZneklZbEJadzU2aEhiaHh1QXZGVWcxelM2V1k3Vm9UbzhQN0h5Z1dYNnE5clZ2ZWNQUDRQVFNVb3FKWXJOWHk5YnBhVDY3WmtnWUNKbVp1SXVLZ2l5NFpwL1ZpTVJkUldtMTF2WW9NTjNidzZxdVE3ZTVUZHd3YmhFYTdTZlBFbU1pamNHb2VCbWpCVEU4WDFwYm13TGhHYzMyVldvc2dGSUdJdks3RW11M3hkS2tZWXdPWHBPRG04U09JY1UvVEQ5NlBrWjc5ZU1aUzh4VjhPNVQ4ZS9kYnVxVzRveFZhUnkyMWtGaUtGZ3Y5cmU4N1hDMWtiSW5iMEtUSUo2TG96eWZSbTRqUkxYMFY1dHJkUTlpMWExUTNHREFsaUNXSkFvemRWdHZGdURJdEVPR0t1WFNlY1psQlQvOFFrdGtlNXNNdWVQRWNyR2lTd2tZWmFxNXVVd0xEb1JWamlReWFYRE5xdGVqMkNRMFYyUTl2dU92bThZbXh0N1FjSDN1OHZYdjVTd3UxWVBLYXNaeWxYNFVFRmFEWjRIZDBvMGE5QmljWjRiNERoZlFrZzMwZ255TmtleFNXeXFGUWxoMVZVQWg1VCtoUU1VUzcrc284djIvUjlaamdhUjFXQ1JRcXlkUkJtaFpoWG5TamFqa1ZUTHlHT2c0SlZDNkJTb2hCb2pmSDlNTjBZWFpsTE9WWXBJUTQ4Z2JMMFdyakZHazhiQ2RvUXdwOC9SQ3FzS0ZhU3o4SFJzQTZpVys5M2lTWVVEQnFzOWtRTXR6QVJxbUU4dndzS3N1TEN1TVdxWmVUNnFGTEpoRnNybUw1M0hOb3JNNFRPMWJSM0NqcDVsMkhMdXZGRGV4VE9JdFdVeXZyRnZrOFdqdG9WbEc5K0NKQ2d0ZjZ5SFg0eFhORm1NMGF0Nkw2eHo4MlBqSCtCdUg0KzNmcXhoRzJoV0Yrb292WmJjMEZ0RUFuRGlVWnkzME51dUVtaGR0ZzRwYXpYdmRSMnFpaWVIa0JxNWZuVVZ0WlVKWWhObThGVE83Y3RKdklvam85ZzQzcGk2ak16cUcxU2FwVnE1dmN4VCsyR3pNZ29sWXpzV2J4MlRhOXlFMzF3cStVNFRBRUhubUZxQnBZQnVHMjloeUtoUGU4VHJpeHNmRUN2NWtRNlRzM1Naekk3MG5DN2dnbUNWdjFZeG1kQ0xEVWFMRUtYYlRPc3lXdTZZYzR0N0NDMmRJcU5wZVg0RytVNFpkTE9QdkVmNk8rZUJFMkdYK3Nkd0RsbFRXeWtESnF5eXVvODJmUWJEQ3hXOFlWbFUrYXhJMTJHdkxGTDUwUVVjYW1jTmIvZmVhTWVsYWc0YlpkdWRHUTQrUGpFN2x0eTduK2hOR0FpUzJqQ2Qra2dDRHNXRjB0Q1Exc1d4YzBjV2lFYlVsTzVMMkphQXlYUzJXY1dTaGhzN3pKYXFHSjJlZWZ4VVBmK1M0ZS92YTMwSmgrRVJIR1dUTGZoeEtKOHVyc1BPcWJHMVFtbFNkb0taaFBkOXpPcTVKRUdKdjBsdWJLSEJ6Znhha3o1MUVqQVJCdVlhbXgxTCsyQkt6WndWMWJ3b1ZXK0VVUlFrNUZFZ0VCdFl6d1FkOHNvRlkwdXJDWmtNazNPMjVBSmJSVU9LRlo1WTJLQ250bVpnRVhWc3JLWWxJTS9zLzkyUjNZLzZFUFlITitIcEZNRDNKN3IwVXRjTEJXV2tPdHZNRkt2YUZiRkZjTWRaLzBGZ3BrQlFadExTRUIyWDdZUk5UVHJ4U3BCUE5zVVVLZ2FOazJRU2dHdGo2dSs5dy9kcmpBSzJNZHhKRllVNFFUMEpDWTQvT1VjdG5HVWlLVUpPeU9ZSExESmtHazJteHBEa3lsNHVobmdqNHdQSWcway9xclUwOVRWeTEwWFgwUVF4KzdEYkdlQVNSNFpvZEdrUjBlUVluV0xjM1BNVGV2VWtsU1FyVVZyRGdZR0NIbCthSnpydCt3STNqcHpHbGhlaXFRdFlVYW5YQVI3aFRTTmNkenR1ZDRZNi90Tm5SS0dxRmU1aUdkNUcyMTBaSy9Mb3Z5YWN5SnFMTklMUXVZQ0xsbVlzK3hmMUxvemVMNnZTTzRhclRBNUV5ckVDRjlVVXdpQlNlZDVjOE1Za3p3aFJ2RzBPUzZwZVZWMUZqbU5DdnJXajNZS294dkJCTUI1VE9WN1hEelAvbmh2L0o3Y2QxZ0t3ZUhuWDJIMnhTeDVpY21YQ3RzallzZmhHMEIxUmo4dDhuRmJQcSt0QkNFMzFtaDAzWkovazl1b2dYVkhYazJlS2JKUEZ3S0VLZjdES2JJSWJ1eTZpbnBiSjZ3djRIMG9CU3VVVVZCYXBRVUs4VzJ3ajcwRllhd2RQWUMxdGVXVWFQMWtyMURESWNtbisxMjhoR3FxNnQ0Y25JU3o1eCtDY1ZYVGlPUjM2RnhMeDdWa25EU3FETmlocFlKRDdLOE1aZnhkcWdqVnNmVk5JemJNWVRYNURpcmJUV1ROd2tna3N5RmVQQ0RwQVNOOEUyQzBOSUdLOUU2OWd6dndNNmRPOEMyRjNQZXk0aDJNOWZ0R29UZFMxckZLaUthN2tadllSOFdMMDRUTW9pOEd5c2tBeFY0WWJRZForSXBMVHgzNmpTKy9YZi9oQjMwaU9IdU9JbEFxSVErQ0R2NURXMnJkUXdYQ213VVNLenRuSW5nc0kxOG9YR0owTmZQZ1h6VzRBMFV4WVNXR1FFdEU4TnRtNit6K0d3U3dzTUlOYzMxbW5PTEtLOXRvREs5Z2o0Q1NKejlreGpyT2UvMGVicGxGSkhCSGl5RkZjek9yREJlQXdXa2tOYndtUkxjb0VQVGJJMzlKNTc4RmR0L1Nld2F5Q0JPaHRNZ1dSZVh0SUpPOW01WExXMzVMRFVLRHJsRXlJS0NSUnZhUmFnT0RDc0t0ZE9ERklxbXROcEd5bWcwcXFBVFlYVWdsb2FraUhRQ3cyelZIYnp4ZzloSDhoeXNMR0xmWVlKWEkwQXNrMkUrWTczSHBEMjl0SVIvL0p2am1EdC9DWWRHc2poRXQwNzM5aWxZaVZKRFRVMVNTL3I0MWNsbldFbzVKaFZST0ZkNk5sSlB0a204R3EyZHNqUkhDK2tJZzV5NGFxNWpWZVdObWhLb1NmSkNXY3lqSUM1TG5BWTFLdmM0WEZoU2hOd3JsYmpjR3lQWEV6OUlSTWdSQ1RCcks2dElaM0p3NHhsRUdIc3VQemVKY3BXYVdNWEcyYWVmUWZuUkovR0ZQUi9Bbi8veEo4bEhRM1FORGlLUjZ5V3Y5TFpjVEZ6enNVY2Z4ZUxpaWlSWkpLa0FTUlVlSzM1aE5Cb3VuVFJsYllPaUdJV1hjdTVXS2ZPNjVOM1M5b0JKaklIbVAyRW5oZ002YWtFcGhUVHZoZTFjS00wZ3VtT09CaXl3bXpYemJ6OUZsY2lZcFF0bFQ4NlJ4YlB1RXdMTk9OeWYzSVh3WXdmZ0RTWngvc0xUcUpjdklUc3dTR0pDdHc2YUtweTRsaERyZno3K1BmMi9BRWlEOVZ4Y2FqNEs1eWlnQllhZGhHSEhJN0dkMHRnNTJQYlZVTXNLc1lUbU9YRkJXYUJodUtFQ1N0dEZtMXRXZERTbzJWdlU2cHlSZ29ZNEUxbEpoc1EzUnBUTU1kYXM4M05Jc0FFVTJ6Mks2SjRodWk0YlExMGVOMWZCZ0h0QVUwVzZ2NC9DTUpGVFFFMVhWTmpEUDMwSU0zUEx1cmJBb2Z5TVJvMWxkWi9iWWJZbGtMbldiaWh4SzBMTGMzcVRJR1FudjRXZG5HZmFRaVo1R3hZbktTS1FFbElBUjY0NHBoS1h0R0d6b3ZZWWQrbnVITHBZazZWNXhrZEhFRDI0RzNIV2VVNG1peUJxSy91dytYaVhTaGk1OWdhV2Jpa2xobTRrUWJsYW1MbDBHZmY5L1hlVVAxb3NmdVV4Y3E5UGwwdncvNWJ0Sy93TGFob0RXWVpoS1c2b041WWttWlQ0S1dlRU1FR3BLYUR0dzF0cGdKK1RSTGtLV2J4bE9lcmp2c2Fuci83ZktZZGFoT2xhaEpRcHo5N0tTQSs4M2k0NE8zdGc5YkZ3alhGWjF6U2NndEQwWmx4eVVTK2VVdmZtcXNwQ21td3kzWFAwbTBvTVJHbWk2WHF0cFhnZ3l2ZVlKeVh1dFVvUEFtejM1VXdLa3lEazJrWEdZemdWdGhFbDlBMm5WTGczaEZ6QkpNWkFsdVF0M1dUeGMybjFDV2RzZTRzV3FuSS9leG50OU1IRXpyUHBremo3TmJJWS9telZ1RDVkM0c5b0hDdFZrdlhqYVRnazBwYVFaamFhRURUdzY5K2N4QXdyQzl1V2hxR3RRc245bGlQMExxRWtRQjZzWlpKdGR4SmRKeXUwalFKYUxnZ3ZHSmZjTnFsb1MrcFVFVXdXRkJmS3NBZXBNNEdXcnkwMngzRzNMQ2JYb3F6QUhZTS9uUGFrMllKemtNcXd0ZGZWZzNSK0JISG1PcGZGYUJpMktZUGt4SGErREFnaXltVVp5M1l5ZzVQUC9oWUNaOUtqRkYveXVMWXZTcE9lanNSM0cvNmJSUFJPTWJ0VmgyN0gzbk11OXpMVm9TNkdXRnNhQzc1ZEo1aTBGR3JqdEZ3aTdxRzhYbU1QeDJzRGl3bHcwL1lMTkY0RjBhU21hM0dUNmg3OEc4LzBJa2FJbDdRZ25XaHhKVk9NMm1xTmtCWUZUeW1BSFRJV2dmRXk2N3NtUVNrUlp3ZE1sQ2l4eUxhRDhGZzM1ZEVqaklLQ0RwQUU0UlluRHR1WVFjNHh5ZXpUUElHTzBVTERVbnk2bmU4YlVocGp6eUlhTmRYNFpxV2liVDFKbkEwKzNOSGtibTkxTVFSMEpPRFhxblVDUkVSR3FHMXJDaEVPRkFHRjZkdGFWbEhyTFZibjlVM3RiamtwZHNwbzJTWXI3VHI3TWhBbDJBSUpSaGtPZVdtREZDL0NZVXFWUkYyOEJxRWhHbHNGZHZzVU4vWkRlOHFlbXBvcVVmZVRXOVFzTkxsT051UXBXd2c0blVtaXhCYjRkaFl4MWJtNHJRaW5sYnJoTkdpRjBub0lzTGk2enU1ekJiWGFPdXFWa3ZZL1pYTFRxcTNCcjViWlhpaWh3UTVZUUFTMFl6bGpVZjV1ZFdNTkZ5NU1xd3U2YktmSDBoeC9zWnFROWFNY2x6WElkSnJhVGZPVjMxcUI4UnEwU3pXNWtaNDROZlhVSTBYWE1JSGdjZEtkY1lPS29iYk9KRkFGa2lQc0hOZXFkZTFYZERwaEFpNGlXTFZ0U2R1eXRtb0s2WG90a1dldXNoVXdkMmxHS1pwVTN0TEViVGtsazJYRTlkbkRqR2Q3YWFDb0trVmlNV1ExY082VkZ6QXp2WWdXZlVxR2tJclczS1ZIRnhaWE5YS0UydUN0NjR6ZDNvNjFOanZodncvSWJsUTQxdzJPdFFMN0hvVmN1a1RZS1U1dFUzSUlpWlZmY3VrZVRaYjMwbVhXdWt0WUNWMnZValAxbnJtSDdzc3VXTG5sNHZ4Q0dSdCtFY3Y4M3FQMXhZcWJwUTNzT2JnZkl3ZHVVQ1RVa0ZCeWJ0UENaZnpQNUMrMDNHcFEwS3YzN1VheGVGbHpXZFFMTllITHBFZEN4bEZtdFIxNW5lUnRCQTEwZHFCRjJ0emNYSzJ2cjMvY2I5UUxnZFpTVUtoUEp1SktnVkljUXkyUkx3cDVscndtVm5CZFQ1dXdPVmJlRFFvanVUSENKOGRrZGtEclNUbkV1U2htMXFwNDhlSWNGbGlUQ2ZMMjlYWHJXQ3VSN3VKZ0pLN1dsaEd5dE5rdm5UMkZCeC84ZHc0dUc5b3p2ZmV2L3hJZnZHNHZXL1RjUjIwRFdZK2hZa3RjdTVndk5WVUpKdmEydVRFTjh4OVRUMC9ldnlXY0hKbEU2Z0tmL1NWUFJrU2tRV0lkdTYyU3pjMjZhYTFRWXpMTmFYQXVKd0lJdVU1RUhVWEpPcitMODVxUTJpeHpVWU11STVQVUt0M3o3TXd5K3g0emVPSHNIRGZGT0NUcWJaQU1DUEkyV2czZDFNclNaZnpMZ3ovQWIxNllnZTlFY2UxMUJ6SHhtVTlxWHR2Wm44UEJmYnVvclZYSmV0b3JYYTc0cU5RYkpoZHVFWDd0LzN4MWJxWlkzSEpMT2M0V3owNGUycjkza2wybGNZa2hjYitRNkNjeFUyVXZYOGR2VE9JQ0VvRldCWUZxWEZwN2lhZ3cvcnJHWHB1MnNqS1BjZU5zMklhbVNxZGpZcFdOb0pPL1BZZVRwODZyYXlVNXZ1cmhVRVNJdXN5L216UzNid256OS9HSjIyN1I4a3BDSVVvS0oxNHlPRHhNa0x1RWJyWW9idjNFS0M3TkxuSVFzb2JwMlJJdXphM2dwWE9YSmw4OGMycXlJOVByMnVuSm1IZDN2Vlo5RnUyYVRVbXlWTHdhWDA2YmQ5STFXTDlKZmRYaVBOeG56cEd5U0ZCVHZuT2xOU0hEeURqSk1XRmNXbjA5dVFqVzU5ZVVOb1VLQUpacVdocExkV0VpanFrblhlWTBoK2ljemlieDRlc1Bxa0NLeWpwcjkzVFd0eGhjNGw2YU9uSGQyWnZDUUpaVzNwbm1HZ1hXaTUvOThwRTd2cm9seitzR0lVOU12VERsZXBIN2toelFpd1VFbmNSTnhSNGMxMnA4U0V0QmtGVG1Bb3FBYmIrWGVHc1B1ZFNWWTY0eVJUUFc0c0FpNGRvNm9oS2hCR2s3Yll0T0phTERHdjRSR3Z4N1IyNUJPdTZpdHI2Q3hpWmJmeHNiVENGTUxXdUwrcUpPZy9NN2VUc2lQMUJBdm44bnowR3lvY3czS0ZqeHRmSzhZWVRsTm9Pam0zNzFEeGpRQlFFVU16STJKWSs4M21TMU9aeFkwNlhBZFdyZkR5S2tXekdkSGNoOXBqdG1yT2h3ME4rVlNuTWdHV0Y3eFRlSlhtcEY2VjViSmo5YVZpZVJXT2dqMGY3TXAyNWhwM29kcGFWcDVyMlNrdW9tQWFXOE5LOVVNRTdrN2QyeEN4N2JGaHVsSmRRZHIzampIMzc5NlArWDVRMlQxYWxpc1VUdk9rSnNMeW01MVFxQmNGK3RheFVnQldXemFab3p3aS9sTlNnQmlHamJLcElhSkMySVZidUlwSzRNRTJtMVFXNWFlcHFlclZSWXJlK1JMR3ZkYUJsWGpSS2MvdW92dnNiS0h0aWdsY29MTXloeFByNnhPRWUwckhKR0hrTnZiNDlXSmRFa0owbHhUbTdUUFNVN216bUNOem5lZExLNlZDcVYrbkw1TTBUQnp5dWlOVnRiMzRubFBNZVVITEpwYVRzSW81Rlp0Yko4Y1VjQkd4aXVLYkhhYUFYYWdhd3lGbHRzRVVyTFFzaTJjR2hIRzd5bStab2hHM25paWFmd2swY2V4OEg5K3pDNmJ6OFM3THZFaUxxcGZEZGRjazNIWXZKcTFkVWZ1dFdNeFJ6Y3NmL1FiVSs5bVJ4dithckdpOFhpaVhnc2NqZVVzVFRielJpRGtsdHZOV2lPYWc5TDZHSUpVWGtZYXY0UnBVaVR4K1gxN2x3YWErdWJHTnJSenpVNCtnM3Q5b1RXOUVHa2RTRnV2cnk4akZjdnpHSnVjUlcvZnVFOE12MjcwRDF5RFlsM056SjlvenJEVzVtakc3SmxiL3JtOXQwamV6NTQ0cTFrZU52M1VKNmNPbjJNcWVGdWViZ2thZzM2TmdNWEVLaTNoWlptYkxYZVVoZVVabTJEQU9OYnJ0WjRTUTRtQlFGN09KRDAyUVBwNzhreGtXZGgrcnF1c284YTg2WVNkZTQzazh1Z00veDBCQ0h6L1hUQlBHT3VpbFJ1a01WeURXdkw2eEtMZHc4TTdULzJkdnQveDVkc2Zudm0xV09OV3ZWMk5vRksrc0JPWVFoak1kbFVwenNtZ3EydHJ5T1ZUbXZ5ZG0zWFRJb3RTZkEyb21RMXYvK0pqMk1vRzhHSGI3eU9pTXJpbDByclVEa3BlK0xNanovOHdYRjgvV3RmMFhkUVpFNmVwd1UzbG1iUVBiU1BqNGlVVmhaWGJ0OTF6YzNIM21udlYvUjYxTG5aaFJOQks3aWVPYWNvK2MxQXVaUkdvWGJKSkdSTUw5TTNKUk92TFhHTTFXaFpyTTBxU3RzODIvVC9oWHRtMldMZnU3dUFXMjRhVTJRVlFESHRWVXVyai85ODZHR05YZWxOU3Fsa2UvTHVXRlphNU1YclBucmI5ZDg2OGVTSks5bjNGYi9ZVnB5Yks3NDZQVHRLeC95R0tWQk5ncGRpVXZLYlZBY2laVGFUd0JJSEd4NHJnUTJpcURTTzE5WXEyTDFyZ0lDd2pvZC9Ob25mdkh3UkY2ZG5kY1p0YzNBZklRc1NyaXB2R1Bsc1EwU2x5YXRLODAwWnd5TzNjOTk5My92ZS9kZC81STY3aTFlNlp3ZnY4cGhmTFUvMmRtY2U0QlJvalBGWGlFU2tOR0t5bDRxWlB0akhGc1B5UnIxZGxUZVJ5NlRVZXVsc1RDdnErZFVLK3l1dXRzNDlGcUEzWFhjTlhqNTdqb29LdGJuN2hjL2Zqai81bzg5S1EwMDlnZkU5U1NlNWZlaWFtNzQ3K2RUcjN6TjVwK09LTGZmYVkrcWxZdkhVdVV0SG1NMk8xT3V0RS9KQ2pMaGkwemVRTDBmUUhnYVdpSkp4dGd1V1Ztb1lZRVdRcDVCU1ZpMHNMT0tYVDU5RXJyc2JOOTkwZzFxL1N1YngwaXZuOExOSEg1TjN5Q1laajBkMjdMN3VTTi9vdFZQNEhRNEw3OFB4cWNOamhWcWxPcEhQZVY4YzZrMlBuWjlid3lxdHRXZG52OUtvM255Q3lCcVNXY1Roc0xyK3J5Zk9ZV1hUSk9Va2MrVzBvRjlkaUZjd0diYkN4MjNXbDBXU0Niekg0MzBSN3JYSDhhTmZLbnovSjVOajYwMTdmRmQvOWxEUzgzSlhqdzRVSEMrZWs4NWtPaC9ETTg5ZkxwMmZYeXRaampOMTVPWVBYL2p1RHg2YWF2ckpFOFhpMUhzVzZMWEgvd0VjL0RDRXFsTmZYd0FBQUFCSlJVNUVya0pnZ2c9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRGNBQUFBM0NBWUFBQUNvMjlKR0FBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUJrZ1NVUkJWSGdCclZwcGJGem5kVDN2elpzMys4WnR1R3VvaFNKbDJaSWMyN0ZiT0tiYkpFMENOSldCQWszK05EQ0tCaTNRMXZidkFyVU45TCtWNWtjS3RJVVRCSWFScHFtWnBUR0N4Qkc5UkxKalc2UWtXN0pFYzEvRUlZZXo3L09XbnU5N2I0YVVJOGV5NHljTmh2Tm0zcHZ2ZnZmZWM4NjlkeFI4eXNmc0M4L0cxN2JtVDRjQ2lSTnpNNitrTEt0K01wWUl4clBwU3R5Q0IxYkRRTGpMbjljRG51Vkt2cEVmR1Q4d3AvandjalE2T1BmbHYzOXFHWi9pb2VCVE9HWm5YNGlIcmE3SE51WXZUc0Z1VGQxWXVvcjBlaDd2WGxyRFFDeUFvY05KckMxdW9sQ3pFVkJWak44MWpIcXRnZldWWFp5OGZ4SmV2dytKdm41RWswTnpYczMvdldyUm1IN2drYTh2NHc4OC9pRGpsaTYvT2FWNDhHU3BrSnZLcks4Z2ZmMGlMTE9HVERxTE4yWTNrQ20yTUJEWGNYaTBHNDF5RTZzN0pWVG91VCs2N3lBdVg5dEVYMjhFeHlhSDBkM2ZCOVdqOEtIUnEzM1FOUi84OGU3cDN1SEQzeG9ZdTNNR24vRFE4QW1PcGRuZm5JVFgrd3kzWnNxMmJOaVdRWWRWVWRqZFJYa25BMXUxVVdzYUtEWXR4QmlLcTZ1N0NPbytORlVOTmRQRTRrb09henRWakExMW9WRnZ5bnRtdDdaUUxsWXdObUVEMFFTQzBlaHBHK3JwcmVYck03WnRQam93TnJtTWozbW9IK2ZEczdPejhhVjMzbmpHMXJSWnZtUUkyakRORm1yVklqWVhydERJS2xvdEM1cW00Yk4zalNEb296RlZBK2x5Qy9sYUM5dWxPdnc4dDdKZFFpd1VRSjZlTE9XcVdGOWF3K0xWTlZTeWRSUXl1MmcyNm1qeDBheVdBZHVjVWxWdGFXZHQ2VWw4ek9PMmpiczZlejRWOHpSbTZhakhiUnJGL3pCYUxleHNyR0Q1N1hQSWIyNmlVbWloWlNqWVRGZlJsWWhnT0VGdkdTWnFMUnNWZXJMZU5HRWFOc3IxRmhUZXFNb1FMV2J6V0p2ZlJucXJ6STFwb0Zrck1iUk4zcnRKdzdkaDJhWk1IdHUybnRwZVhWaGlQcWR1ZDgyM1pkejdzK2RPNng2Rmh0a3BhUlVQMjdKUUsrVncvVGUveHZ6cmw1QmVMV0poSVl0Y29Va2pHOWhKWnhDa0IwWFllbFVGaHNrUTlYbmhzVVV1S0RTdXhZQUZTaVVENVd3RklRK1J0TkpBT0JpRTBTeHpFMHpVcXlVK04yVjBRTEdoS0VoNU5POXNlblhwOU8ycyt5T05XN2g0N2pGYndRdjBWdHp4bVB2Z3YwSXVBOE5xUVBHcXFEZWFNQXlMSUZMbm9oWGticFFRNG9JaXpPb1FyVWp3TThOK0ZiMUJEVU1oTHc0a1F1amgzNzBSSDdwQ1BCL3hZR0F3QnFOZWcxbXJvYlN6aWZMdU5xcUZIQ1BUNkh3dkxZeXJIcnl3dGI3MCtFZXQvZmNDeXNMc3VjZE15ejdEZlpiR09FWTVoMm0wRUF6SGtCdzdndXhHRm1hbUJpL1A2NXFLc0ZlbkI4c0llRFVjamZubDUwTitIUm9OMUFuN092TXUxQlZFS095SG43a25EUElHTktoY2RhTmxvRkVxb3JoYkJIdzdDQ1dTOEFXanZOWkh3enp5WHNKR2V1V1pyZlVGOUE4Zk92T3hqYnYyMWl1bkRkdVNGMHFUWEtzVWVYTmJMaVFRamlLYzZFZXgzSlNmMHZqZElWMmxrVGFTWEhRaTdFTzBLNFJJVHhRZW53NlBKb3lLUXdzRW9RWEQ4QWREQ0lRaTBCaXVYbDJIeGJnclo3ZHhhZVpYeU5DNDd1RSs1TGRYRWU4ZmdaLzNWRnpERkJtaUtpTkVmWVlodXB3Y0hadStiZU5tejU5TjBiQm5WY3N4U2lIeDJ2dHU3cG9JbFl0dHRreVVDbFVhcEtKSklJajR1TU1FRHVHVjNzRW9nZ2w2cUN0QjNvclRnQ0QwUUVRYUlXNFI3MHJDRzQ3QXd6eFRTUlZnYnZyaVhSamVXQ1hwdjRiRjRxcDhQY3I4Smd2Q1ZseGlsaEhFYzRyZ1JqeDdZMmxwYm1Cc2JQbURkdHd5NTd5S2ZaYUF3Unl6cEZHV1pVb0FzZmdRQUNGZWk0ZEprUEI0L2ZEU1pRVkNmaXlndzI0MkNSb213alJPVUlMRzBQUjQ2RFZxTEQwUTVVWjVvSEd6d2xFeUlFTllrTGRIdU54Wk5UK3JvZS9BR0lZUGRLRzdKNDcrQTBlNVVWSHBxZmEyT21IazVpQ1V1TWVubk0wdExjVS8wblB2dm5uMlNjdTBpSW9XRnkrMlNuVmpnUTlobk53NGkram54R2tvSEdhZTJLZ1Q0bjFjdE1XY0NZYURDQVQ5aEhOdUFrbGFMRWhodnBpa0FBK05VeGk2bGlrNDBvUW1Ob3VicElLZ0lkYlA3d3ZHZXpBNFFhT1llNG4rUVhoOS9vNldjaUpJY1NKSVJJQXQzMG9aUGxYdzRCTWY2cm1yNTE5TThSdWZFb3VYWHJJRjM1QjdtblZxd1NxcVJMRnF0WUo2bldUZHFFbWlwZjhvS0pnN21uTXpIM1BMUjlDZzIrQU5oVkhLTjlDcW05Smozb0RndlFaVUFvNnFpQVV5ckJRQ2lZZ0tjaVpKVFc2Q0ZvcWlhK1NnazV1Nlh3S0ozZkdiQ3NjdXg3QU94Tm4yNDl2clN5Yy8xRGhiOFQwcm4vbGxwbUdnV2FkaDlUcDVoMGFRVkMxRExNQ1F6NDdzc3VRWFJudTdhWXVLZUNUTUVQUGkvYlVNTGw5ZHh3cGxsNm5xcUZCV21ReFhWZFA1ZVF2MWlzTmpYaTVjOGFneUltUkN3YzF0aHFaS2dFbU9ISVkva25BTWNVMlRFZVFtdndNc1N1ZDlWVldldVdWWVhqNy95eW5UTXFaa1BqRmNMQnBuaXB3VEQ1NXpOZ2N5a2NWQ3hJM2xydkc1ZjJRVUcxZFdDT3QrZ2tzRlhYR0NCait6dEw2RFhMYUkzbGdRWnFQRjhOSlJ6ZTVLZzZ4bUF3SG1uV242b1BEMndoaVZxeGJSTHI1SDB3T0lSSHA1ejcxVWNyeWt5SCswWk8rOEU2UGl1cWtiYTB0VEF5TmpNemNaUjk1NlRNUytORXg0eC9XS1pSdlNRTEU3ZkdKNE9WOWhVMkhZcnNVS0ZVUTBva3RQUmtNaFhxdFFjalZ3b0NlQkJvMnFGS2xZVnRQb0d1cm4vVnRvVUhLbDMzOGY1ZndPYkNLb1B4WkJ1S2Nia2U1K0JHTGQ4cDRXSXlNZVR6cmZLNmhIY3ExN0tHMkQzSmVLZzk3aVdkTThJdmYyakp0OThZVlVxOWs4TFR6a0VMWHBYdXh4bnUwMkVhalNpNDczVkdjditYYmhyZmNRRlp0SjBCTXlLNU9yWU1kU3NVRnlqb2h3NVRtYkx0bFpYTVhnOGNQa05US1UxNHV0Njh2SVUxOE9UeDVDcEt0SEtodWpWV05vNjNMUlBsK0lRYUk0dU9FUVhKdUx1TWtLMnFmMlBDczNlMG9nWjJKc0xDOTlhMmlXTk15VUQwT2ltS05JclBiV09Na3JnRVk4VzRwTERiWUVnVnFtQkw5T2JVajVaVkFMTXZZUkN3ZXdXcTJpNThBb1NneWhYTFZKSURJUkd6aUFnV04zRTEwWnRodFYvT3JxTHM1ZEwrRDlpKzloZS9FOUdmS3F4MHZrMVdFV3Nuc2gxeWs5YmRlYis5eTQvK0I3VGIvNmVNZHovUGczUk13cERtakxENGliU3RGbHdZMW4rNllZbDE4Z1BzdU4wRm1uZVhYU09POFc3UXB6ZldVa3lGOWZIZTFCdDFGSE9lYVRxS3ZyQWtGRENCUGUreWZ2d1BhTlBQcUprcU1EUGJqendUOGlxaFo0WHljRlBIV0NXaU1IcmJ2WEJROW5iZEpqY0JUS0IwT3ovWW9SOEpBMDd2eUx6NmY0b1pNTzlMZjN4bFgrcEFKeGtVZy81OW5xN0o3dGhxcWd3a0JmRExZbTBGQWxMWVNoQjNYcXd6cENRVW9ramRVQVVkU282Z2d3TDNtRlZDUTlCdy9qVUhvSG80ZUhrUncvakdDRXBKNU1pcFhKKytvUktoY3QrQUhQcUc0MDdTRWxZTzl0dnRLaGVCbWFtcTE2VDBwRWJKY3lyaXB4WGlnZFR6a211NmhwS1RlUlNDRFp5em9zVFhYQkx4Y1NqSDJUT0dXWENIR3ZMNGdXMVV1cGtZWENtczRyT0l1YkZLRHNPblRmZmFpUXFIMEJQMVRxUytFVktJNEJWcXNPdFg5WTN0K1MzMDgxNDJyS05zaDBRdFFOeC8xQjJ2SjZUZ3VFbU9xZ29iekEycGVrQ3RwcEo3M1dManVraGFxcnpoVUVod2VrSEJPWHRlcEVWK2FlaHlFWUZIcVM0cmpJbkt4U1hBdXBKYitIbkdleXloYlBFWWFkVDhncmQvZWRqYlVrMTBFOGJDZHE5cEIvM3hwY3d5VFhBVGZ4SVZkM2twY29Kd1Q2aVJDVUtBaG4wWHZoM1BZb3BLS1F3S0pBVnNpMld5eUVSdnJZR2pDSWxLNEc1UnNlYjREaDJZVnF6c0QyMmk2Umo4b2pUUFFUQytibnNsZmZRWDV0RlUxNlRxTzhFcXBGTGt4Z0ZBbGVaemRNNXJTeVZ4eTNOU1gyR1hUVFl0dC9pMDFTbFJSWnk0dzc1eFdwdkIydHBrb0wydlZidTVaenhLdEhia0M3dGhKQmJQRjhvZHJnSlR5bmlqcGJrNmhhcHpKNWYvWXFJc0VBZkFRU1h5Ukt5VWFWUTZITVBnd0s2NHVvc0tra1pKeVRNMnFIZXJnekhURjk4NkYwdkl4OTNtb2I1ZUNPcEk4VFlpVXA0YkIyYW9xemxvdE9FdXJkQ3gzREZEZEViVkdkT0dISjhCUnFRaU5vdEloODR1WWlKSDFVT0pubFRjb3VBeXRzQXZueUpScHZNZ1FEU00vUGkvWXMreTBxaXV5OWhIdjdXUHFFWlVVdkZ0R2diZzJLOHIydFAxWGxKdU1zMXdpN2c2TDczKzNZRVZjVldkb0lSMW5TRDdKT2crcGVpRDJ1YzVXNFBHODdwWTlVRW5EeXF5ODFSaEN3S2JMWkpHTExvYlNkWi9PSFlDRU05YkpPMHhXMHFFNjBVSkFselJCNlJvYW8vSStoVnN6SlhvelZiTG4zWk40eUYrMTlpLzZnbDlyNTEzR2ErMEpjWTlxZGkrS3EzZWEyVHZqdHB3SW5CeDBDTi9jUnFzeFNXY1JDY2RCTXA1SVhYbXBVNjVMTWI5ellwUVJyd1ZCWjFvUTBEQjhkSWJob3lDeGVSemE5aUliTjNrdlFpemlOeks0djhacUdsSDRtYzh0UDJkWE90WnNVaUgyTEVIV0ZzKzFhc1ovdlhHMXB1VkxHQ1QySDg2eU9reDFHVURxMW5NZ054UTFQU3lJdCtZd2VhYllzV2MvbHR3dll6UmNSWWF1aFFGVkNHWW9iVnpjd1FzcG9LRTJVclJvYXRTM21hb1g4Rm1FNFYwZ2hEVzZPQTJsNmJOaVZmTmdYa20xRDBDSHhqdHNrN2pnOHAzYk1GS210ZVBLbWJjcXFXNnA5ZVJQVnJjRGREOXI3bnQwaXNVM2lsaVFEVWZiMFlwM0tudnBMZml3V1lVdUI1WStQSHU5TzlraU9zeXNjZ3ZRRTBUOCtEalhzd2NxbE41bTdmSC8wa0l3MXJvVWJ4T3BCY2U2SmZUSnJqNnFVVHZTNE5uY01kK205VGU1NWhpWHlVTnFYdEwxanU3MFQ5elhVempuSFNBZFpiZmR2c1M4ZUVyR1M2R1Yxb2FEQkhrcTV5azQwaHgycWFxSGhLY1BvVnJDdGxkRVlDS0NsdDBqNlJReE5IcVdLOXpFY3FXZFpBdFVyZVRhU2dpNS91V3hsSy90aVUrMFl1cC9YWU85aHFuU0tMTGJ0WlpXMTFaeHpzU3B6UitSVzU5UDd0VnZiZkJFT05NYTAycnJUdVprNGx6aVV3bnErak4xS0hXbktyeDArZzRKYTR6VzEzVHpMSWVyUFJoRVcyKzhpREdzVXhoNlBreFoxbnR0TnI3T0JFM1lyRGlmQUlKdFRxcnNVVzRLR1hKcnlRZTg1cG5mV3FhcDUwY0pZVWRxdUU5Z25qTFBWRHFhS3RuZWJIcVFOOG4zWHEyM1ZRcG0xbGNsaWRYTVhDeFM4Y2NxMEZzc2MxdTRJc2pQV1lFZ21ZanBDVWZLZnlYWkZicDNGcWJES2tHamJLRnFjRzJ3aWZ2aGVFbnF3RFdkT0RTZHFPWW1FNGxudGNHOWJ1TytuQWx0Ujl1RFJzaTVxL01DY29qaGY1RlFDNkZTODdabUFJdzcyR3JLMks2S0ZzYWJaeExYcmEvamhUMTlpcURYUUw1U0ltNWNWb1VRb3g2b0NhSGgvaGZLTENRVkRxYlBmR2VVOUJJZ3d4d2o5Ti9JS0xtMHY0ZUdlQ1hSM1JUcWwyLzVhcnMyL2FLc1RvR1BvWHBTNVJ0dldqQnIwcXRQdFJtdEgyY24ybmVYaWgrSld4cUphdDJTbnluUmxsa0h3eU9aS2VPNUh2MEN4V0VXUkRhUUI4dG5SL2pnQ05NVGdmVFlxTFdRcHphcVdCMW5PQWtvMHB0WWdWYXhzb1pEbE5ReGZXNCtnRVV4aWRtNE9aOCsrSmdXMzdmWW0yNTVTbFQzS2FxLzNKbldDUFVLVEdyZHB6cW1uSG40a1Q2U2NjUlIvdXgvdjNMVFRuN1QyT0U3d2tFMEREWWJhNnZJcWZ2eXpHVTVybXB5L2VUQkNVSWtTUUR5S2dZbUJCQTZ3ZDVLZ0owV0lwdk1WYk94V2NPMzlMSllXYzlqTlZObDhNdEdUbXNENC9WOUFIN2t3UUhpTG9rb2c0cXlBaGE3Y1lMSFl0bmh3MmJ0RDJzQStUSEFkNU9DR2JOSTZ4YXJaZXBsUFUrMHd0TjB1aldRSGx5SWNUOXJTTUdGZ29WREVOcVhUbmFNaERoTlZKTm1yMURpVmFWb2FEYmZKWHg0YzVuQ3hRbERKbE1waUp6bnQ4YkN3bGMwTERCMDZpRU4zMzQzZXNYRzV5UFRTQ3BaV3QzRjk1elhZYk43MkRJMGlrOW5CK09FVURvNE44eHBSNkZsN25uSkRVZG1yNFJ3akhjcjRudmhiR3Rkc05zK3dKZmVrTUVvaWthVzRuak5rZldaSVR6V2xHTTRTRFlYUS9iK1gzbUF2czRVVVBkUk5YVGpFOWw1cnF5b2ozcEFiWTh0MlgwOHlpdVJ3SEFyL0RrUWppUFd4a3p3OHd2bEJMenZRUWVtWndtNGE2YzBzS3VVeVBXYmc1ejgvaC9HSkRURmR4VnR2WDhGZi9lVVhjREJGaGNQS29lMDlLZTQvS0tyZC9OUVVhM292VEhtODhwUHZuMlV2Y1Vya20rZ3BpdkxsMnZ3eVE2N09mbVNBTFhJYnovL2taV1JMYkxLeWs1enNqa2tVTE5IQTBiNDRQak0yZ09ieWd1QUk5ajlJQzlFZ3dpeGFvNzB4VG1sOHJBb0NDUGIwMGFOUnR1dENiTE43NWJQSWtQWDVxL2oxLzc2TU56bE9uaWZhZWpRL0hucDRDcHVyODBnZFRIRW9Vc2JKdThaeC96MUhlWHVkMDlvNitycFlZWENOM1QxZFNIUWwwRTVKQnRXUGswTUhUbmM4SjQ1R28vNjAzVEttRENhOE1HNkQyakNYTFZIRmgzQjlKWU5YejgyaVlkZ1NzVkpEdmJqajhBRjA5U2Z4Mmh0WDBCZjNvM3NreWF5dG8zRmpFMDZUUjRHZkhlWTQxWWxYdGd6RUpDY2dPMXVhVUM3K2dJeXlmRFl0ODFjaGtjZllxZmFReklYV01JcTcrT3g5OStLNTUzK0k0OGZ2d050dlhjQ1IwUVFXVnJMWUpCanB6U3JIWjBPWVg5dVc4L2QvK2VkL1FvUlRKYVpQWjZUbGFmL3gvUi8rZFBrengrNmFtcjI4a0pwZjJzSlB6djRXbCtkWEJYWWluOHVqd0VwYUVaTlNFYnBjL0lXcjg3aHc2U29HQjRmNUdNU2R4NCt3UXp6STFkNUFOQ3JxTjAwMmpJSlJOb1I2T1dQemM1TERHWnVYN1FReElCR1ZoSnljTmhvY01tYVFYdGpFZTV5Slo5bk4xdG1KRnNQVWdWR0tnczExNWw2R09Xdmg5ZGN2NE1xVmE5amVUbU9MemQydi9zVVg1U2hhMFBlcjU2NWg2bk9uWnVpMXAzL0hPSEZzWlJvWDMxbGUvN3VselIwMlJMdlF5MlpQcGRiRTFjVTFMdFNIbmxnUGZDVFNUTGxBR25DR0dsOSs2RDdvMFRpTzMzbEk1b2hYWlUxWEwvSnZQL3NrQkJubVNUdzV3QWdJVTJ4b1V1MEw0eXkyNTVzVjNrZVVTSlVLZHRkdm9Nb2g0MnFtSUNlcDlXYU5zL1VzUHYrbHIrRGc0WU9ZdjM1TmxNRDQ0d2Z1d2Z6OEl0Y1N4OUdqeDFoTzZUZzBNWUZMRitZUjhnVWYvc0dQbnN2ZjJyaWR6YTM3VHoyUUdCMFl2RDgxTW9KamgvcHdmSElNbXhzWnlpUTJVYmMyR0c2MlZQdFZ6aEVFYW9weDFiRTdUK0Q0SFljSkNDV01uN3lQL1pFQ2Uvd1JHalhJeVdpZjlKYlg2NVVBSU1vaXN5RU1LMHROS2FVY1E3SEMycS9KdWNCU3VvQUFhZVZnZnhjVmpvYUJvUlRIWFJIOCtaL2VnOExtR3JaWitBWVlCUnVjdVllNyt2R0xWNjhnTlRHSllMUDY5RGVmK091YmhwQTNHU2VPb1FNVHJ6ZnJ6YTlWR3MxNGJ5S0NFTC93NHVWckdCM3F3V2Z2UHNTNFQwSjBDbmE0R0VHc0d6c1psaFlxdnZ4blUrUW5EaUY5REVreDRHQnoxaGNJczUwWG9jZFVSMkVJRWNBd05ObUpodHV1RjIzcWVxbUtYSzZPK2JLSjNWS0YrV2ZoTXhNak1MMGhuTCt3aksxZHBnUUZRNzFZd052dnptTXJWK1RtVm5IaTJDVG1OeHZZTGFyTC8vYXR4eDc1b0MyL001K2JtWm5PcDFJbkgrN3VTYzdtQ3FWNEtMeUpiWExheEVTS0lhZFI3VGVvUkV5cCszUi9TSTZ6M256akxaVEpaMzVDZTR2aDZ1L3BKMEp4a1hJaTZ1U29iZGlTVmlRaGsycUVGSk1sRSt1L3drWWF5OXMxdk1WY0Z4VFNIU045RExEMksyaTR3SEJNcDNQNHhRWmJFMmFlcXFkRk5BNmd6dlJZV0Z0bmFzVHo3MTFjZlJpM09EeTNPcG5QYitXUFRUNTRUZmZyWDB1d2g3K3hzY1RpVTNBUU9MbkpNbndacG5UR0FHZlZzWUFYbjV0SUVpZDlTS1dHNkRWQ05SY2NvTEEyYTJWSCt3bmVNMHlIZ3cybjJKVWFVTlJ2RE0rZHhVMWN6bG00dHIwdHA3VmkzdDdQY0h4M1lSMGxEazBpQWJZSW03dlNFNks2YndtOXE0aXlSdVgzZXIvKzlxdG5YcitWSFIvNlU0MlhYdnJ1OU1SZzd4TXhsaWFpcDlKZ3J6L0w4UlQ3eFZ5ZkdCbmJHQmhNNG9GN2o4TWt0Syt1YlRDdmZFNzRNWWZVVUZSNlRaVTlGOXNaZzdsVEpDbDh4UmhMdE5xM013aU9IVUhKZHVZVEJvVkRvVmFuWVZ2SVU2K0tka1N4V1VhZUlGVVR2VkdHdUJoVHgyTmR5QlVMVC96MnBlOU1mNWdOdi9kM0tOLys3cGt6dVowYlQxaTJNeTQrMHRXSEJHZmdIazVERFliYVppYkhqaFU3eFVTc0xmS2IrRVdDbUduN2VFNE1pNzNoQkZQSzQ5UmVORkFNTUIwUjZNd0FtMFJKVDNjZllwT1Q4SFBCWHJnamF0NjdVcW5LR1ovTnFrTnFYTEVodk85SWZ3TDMzSFVFazBlT1BQSHUzTXlaMzdmK2oveVJ6Zi9NL1BRTVUrUVJaaysreUMvYnFSSU1oUGdSTzgvWVAzOWhBZGMzYThnV203S3FsdTh4N0FURTZ4d3VDaVVpTzhiMHJqVFVuY3lhZGZaTjlDaDY3N3Jid1pXZ2FNcFNRZkxhQTlGdStCWE9HempWOVhvOU9EU1dSSnhVY3VMSUdJNGZITXpyamRvanp6My9uVE1mdGZiYitublU4c0xsYVU4b2ZLcHN0SmJyb21EbFRnNlBqQ0hBVHZHL1B2VVB1TytCdTlsSkZnMFpqOXg1VTFhMUxkbFlsYk53WVpqcTlQaUZ3bW14bFY0cDFwRThjYThrZDFINENvRmd1Tk9JV0Y4UzQwTWtmcXVKc0YvSHlZbERHQi91eDVjZXZHTzVsc3VkK3EvcC81NituWFhmOWcvYjNwdWJXWjQ1KzRNeGJ2blRJcXlvR0RIUm5jREc4aGJldmJLRVNSSXAzSUdnOEpCNHRJaUl2b0VVRis3dDFJWUNXSFlwbjhZKy94VVdzVlU1S05FNC9oSjVyTGhkTlpVR1g4OFhXT3h5S3N2UXZYeHBEcXNiNlcvVlFqajE3OVBUeTdlNzVvLzFrMFJ4WEhsbjVpbFRyNDNsTmMvTUprZFFpeGRYc0hqcEhYemxpdys1YlQ4THVwaDljMUU2UGRja0lxcmh1UFNPU1cvbVZwY1JPWGdVVmZKV09CS1hiUWFoUTczVW5GMGNIZnZJazJGcVJJL2lwVEJ2aUlKMXByODNlZXFWTjMvNStLT1BQcEgvT0d2MTRCTWMrVXdtdjdJdzk3M1UrS21YRFY4Z25pMW5Kcjc1TjE5RHFaaWxYcXhLT2lqbTgxS2VCZU1KdHRxanNtRDFjSnFqVXNLTlBmQ1E3TVZFaUhqRlFvNml2WUdybDYvTDM3YjB4S1A0a3dkUElWOXF6cXl2clR4NjdkcWJUMStZTzdlRlQzQjhvbC9LdG8rZi9ldy9aL2cwYy9ic2l5a0N4ZWxhdWZxTmFxVjBVb1J0bmNpNHM3VkpUUmxoWHZrUkdSeWpBRTlqNU1BNHlaOTU1dFZRSTZnVWNqbjJYbXFVYmpXRU5YMG1Hdks4Zk05ZHcyZis5ckYvL0ZoZXV0V2g0Rk0renIvNFlzb2Y4NTRzN201UGxYTDVFd2VPVHNZWnBpbk5vOGU5L3FCRVQzbzBYNkpyUytYODNPcTE2eXZoY0hUdTI5LytqK25wbVprLzJLRDl4LzhESHRuRTlOWUtUVE1BQUFBQVNVVk9SSzVDWUlJPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRGNBQUFBM0NBWUFBQUNvMjlKR0FBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUJqVVNVUkJWSGdCclZvSmNGMW5kZjd1K3ZhbnA2ZkZXaXo3T1U2OHhIaUx3V2tTRmdYS05HMVNFRk9neVhSaEtXMHpNQ1ZPTzIySE1FQXlhYUNGUXBJTzAzWTZ3d1JJcHhuRzdaQTBnWWFVd1hJQ0pJNlRTQTVlNUMyU0xkbmFwU2U5L2IyNzhKMy9MWks4RUdmNU5YZWUzbkx2L2M5L3p2bk9kNzcvYW5pYng1N2Uza1F1bU9zTDJ1YjJSTElsQmZnN2dwYWRTTVJpaVVEQWdta2F5R1lYMHE3cmp1UUxUam9VRGd4R3c2SDlSaUE0K0tsNy8zMEViK1BROERhTXZ0NVVvaXZSZFpmaGwzckRnVkJ2YTFzM211Tk5QT0tJaEVLSXFzTkdNQmlBNzdtQTdxTmNjVkFzK1ppWm1VRTRFa1l3RUlUbWU0T0ZRdTU3NmJuWnh6L3lOaGo2bG96N1ROKzdlMTNIL1VvNWwrOU54cG9RaTBiUjJkYUNOVjJkYU9IL0lScGpXQm9DbkxobFdMQnRDNzd2MTg3MnhSZ2FXSUxyT2pUYWgrTlUrTDZBOGZrNW5KbWVldnhuTDcvNjhPUDlRLzE0azhQQW14Z2Z2UEhhSGJ2V2R6d1dpOGJ1TFpmS0tVUFhFYktEYUdsT1lzM3FiblIzZE1EaVo0WWhobFU5WnBtV09sZlROSDV1cVBEVXViVHlLdWN6VE5WQmkxR2lzZmxLWmROaXR2akozaHQzOXpZRi9QMm54bWJTZUlORGZ5TS9IaGdlVG96Tlp4L2NzdVBHQWMvMWVuUDVQQ3BjYmNNd0VXTG90YmEyb2luUnJMeGpXU1luYmtJM2RCNUd3NmhnSUtBK04zbU9MZ3ZBdzdadGRYNHdHSVJ0MllqUzAySER4dXJPTG5pZTEydUh3c00vK2I4ZmZRVnZjRnl4Y2NlR3gxTVJQVERnT2Y0ZVJoUTlFa0M1WEZZVEROZ0JyT3BZaFNoRFVlT1hIbzBUUTJ4K3JtczZ2V2FxaVlzQllxZ1k3ekVrbGNIOFRvYjhMOFBuUzRUR1JRUE0wMkFJcGtVUTBqeGtNdlAzbmg2ZkdqNDJQSnk2MGpsZmtYRkhUNTNyNDgwSE9LdVU1TWZNN0l6NlhGWmMwallVRHFySm1aeTQ0emlRZVlyUkVtSVc4OHoxUFBFQWlzVWlzcGtNeXN5elVyR2tGcWNrLy9Nb0ZvcktZTS9od2ZBVUVHb2lJQ1VTVGJBWjNxZFBEUEhhYnNvMnpJR2p3K2Y2cm1UZXIydmMwZUh6ZDJtNjlrTWZsWVRIRk0wWEYxRmgwbGMwRzJXUElSV0l3S04zU2s0QlRpbExlMHB3L0NMS3FLaU1kdFdFSGVUU2k4Z3NabEFTZzdMOGZqR0hjcjRBMzNIaDBOQWlRenkvUU1NTFpSVDVlNTh6MDdrZ3M5UGpDSVREYUc1dVI3bVloMmZvQ1V2M2ZqZzBQTGJuTFJsMzlQVDV1M3pYZTBpOThlVm12c3FITmF0WDgwUk5oVjJBNGViUW03TDZWUVQwWVJNODVNTGlCYm9EQXBBK284OE1FRWdFUkh4WGVhT09teEtxRXVhMkhMWUpUVTZXc0dYWm1Ka1lSNWs0czJuekZwWGY0bDI1SGdQandkY3owTHpjRnk4ZFBkVlhMcGNlTW1zNUlVWERrVnppbE1LeEtFeUJlVTRxazFsa0xiTlZuWklKUmlNeHdyNU43enIwbklZU1BTRy9DMFNpQ0ViRHFpeG9yZ2VYaTZHWDhpb243V0JZNWFHRWRLRmNBRCtHeC9NcVpRZVRrN01JdEhiRENqTkM2R1ZaTEdneUMxOFc0Y0hqdzJkSE5xNWI4L2dWR3pjd2NDemxlOW9qUG91dDVJcmtqNlM3NUpLc3RxRGljVTZrNkZZUW9KY0VLSnFUeldocGFTRUFNRnc1MFFyekpwM0pZdno4T09kaXdZbzNvMzNWS3JRUVRSTTBScXNRYU95UU1rcEtRS2xjUVo3aG51TjFweGJ5R0JrZVF6cGJSaWJ2WU91MmQzSUJJbkFxWmY3ZTVYeXNLaGxRYnRjZkljZ01ibDYzYnVTS2pQTnRleDlmRWdyVlBLOEs3ZUlJTVpFckd1UEZtOHdnaXA2Z3BWWUZFMEUxZXRrVkR6QWFSeWNtc0RpWFptR1BjUUZzbkRsMUNpZVBIRVpUTElhT1JBdldyVjJEY05SbUtOcklaYk5ZV0ZqQThPZzVuQmdmcDBGWkZITkZwQmRLYU90YWl3Ly93Y2ZKYUNvS29NUW9YOENLNFNudlpaNmFadTFqbWRxNWM5MjY5RzgwYnVESTZhL3dsRlREVURHUUsrc3hGUFNRaGNWZkhjVGFnSVpOdDkyR1h4dzZRRFl4bzF4cWFpWUx0NldNZFFvbHRNVGk2R3Bwd29rejB4aVltR1dvQnRIVEhrTmNaNzZaRlN3dXpDSVc2a0pBa1BEOEtBNmZIc1c1YkltQUVXVElhOWkxOFJwTVRLZVJ0eE9JTWFRTHBRckRVTkNZNWNOaU5Fbk8rcWd4SGo4VmdpRjE4TzdsdHF3QWxPY1pqb1R0ZTFkNHNSWTJGZjZWNlNtam5FZmMxcEZzanVIOTczczNkbDkzbmFJNW12cmphbWtPRW1FZExmRWdaaWNtRVEvRjBkMjFEcDJwVGZqQXJiK1BKT3RoMitwTzJMRUFZSldobWJ3MkYrVHEzVGNnc21renpKNzEyTEI1SjQ0UEhtWVppR0R0bHZXTUhwZnI1NnY4MUhTRk5oZjZSR3JybnNNbmhuZGMxbk1NcTBmRUdCOHJTYWNVWmFJKzJZU0xnSHhCYXp5ZEVFOFlhMk1PYVV4eXFYR2VuTWNxckxsbFJNaFF0bXpjd0x3MGNaVm1vWkROWU9MVmw5QVpFMkNKSWMzUzRKWTFJaUJVcU5xMmh1c1RNV1FLY2k1QjV0b05tS3Q0dUdwVmlzYjVhdWtrOTAyOXluYmdMeGtvNytYUUxlTkJ2cjM1SXM4ZEhEalp5eE42YSs1U0h2T1hYOERqQlhtNGdwcEVPNU5obXA5ZmdJQitlN0tWeUZabXJubEV1Z29uUWZyRStwZG9ha1k4YWlCSjc3UkZJK2hvYVdkeGpzSEpGaEFpOEpTNGpMckxLZERDY21ZT0xVenNObVFSY3RQb2JvOGp5RFJvYWtsV0Z4aFZTbWN4dCt2RzFJKzZnVEwvWDUwYzdyM1ljd2J1V3U0cFpibTI1RDlHR3h4NnpBNUdZWWZqaUliWkJRUVhZSVpENk9yc0pOb1ZGYXYzV2ZOQ3pMOEtZZHYwTFVTaXpieExIaVhtaU00RktkSXdSYUZkTWhPM3dDN0FRRUdLTm0vVjA5cE1DaGVEd1VYS1pPY1J6TE5tc2gyUzJsYW5jeEtXTHNOVVBGZ0h1K1ZETXpUSnZmNkc1eVRYZk45clVCcWZKOVc5SnhlUTRmaFNZMXdZN1YzOHY0UnNmaFpzUm9WSm9qVVJaeWh5Z3B4aFJkWkR0eGtpQVhoRXVBclpSNTRIcldBWXMzUUVKZGQwWkJsK1RzRlhyVkNVeUVzV3F0SkJEaytSYmFKdktJSUtTMFptb1VBQXlqR1VGNUFua3hIdnlkd2FOQTlMM0pRcjBUc3dNSnhvR0Vjeit2eExoS0k2cWZaYXBuR2FSOTZZU0dDZW9WUWhGNXpQTFdJK24wTlRhNUs1a3VPNVhHRjZoMUhMU1RIVVdJMEZ1Z01zd0NGNk1CeUpTK1pnZW1vR2JvV2ZzOTU1cnMrK0wxU2RwRW12UUZvZWdoYzk3N056V0NBbEs1WEs5QnBSbERWVitHalZNQWxKWGIzV1BWZzMwSXg2ZXhyRzhYcWZxSHVwN3FuNmU2ZlJaM0hDdkxWREhoVkpiY2ZrWElFd2JxT25iVFZCeEJBMFFvRmNVVUxab3hkbEVxNWJ2WllWcENjcE1jek16bUoyWmhaQlRqTE9Ea0k4RUdsT3NKWjFJRmZJcSs3Qkp4aVZ1SEFMUlljTDV5QkdzQkhtMDliV3FraENqR1JhcnEwV25LL2l5ZnI3SlkvbzcxTkc3bnQrSUVWTGRuakxMQmVqeEtCR3d2STdVOGd4L3cvUnp1Q3FIaXkwblVXMm1FT0laREV6TWNjY2dwcWdjRWREbDZKdXFuT0ZVckgzdyt6c2xQSnNsR2c1UERtRjR2U01ZaWo1VW83ZFFnRno2VFEyeVAyRWFETkNwdE01Sk5kdGdrNkRvelRPa1Vpb1pBVFRVQkttNG5xTmVVbzdKWWUvbEVvTXpZR0U5Skk3NUFkZUxjOVVybmxlbzdtVW85cUQwVEFFNFpuaUNXb2g3VDBZWlJmOXY4OC9od0J6UXhKZFl5NmxPVWwyNXlwa1pFSmkzTlQ0QkNwNUFnNXpicDdmWjhrZnMyUWh3azdPbkJ2RHozNytMSUtSRUFwc2lad0taUWNDMHl4ekxCaExZcGFTdytUa3BHcVQ1RnI1UXFHUk9rTDdwTzJxSStpS2xBcEcra3hETTN0VmpaQ2VYNzFXMjM2SlZVTTNWQzlXalZ3UE9kNG8xaExIek9RRUlxeHYyV3d6U2pTd1RBNWFxYkRZcys0Wk5DckxVQWx3RVlJTVJabHdzVmpocElGek5FVHFZWmFjczBRZVdTWlBjNm14bEpoZkw3M3lLc3NEUzBqWVFvN0lPMTNPNFpwb0FpWnpUYkluR0l1b3VYRjVGYzBUelVVTWs3Q1VzSzJuRStxejliMGRaamdjMmk0ckxhc2lQNW9nSnh3ZEhVV0JLM1RpeEFsczI3WU5rVWlFWWFieHhpRTg4TFg3MGRYVmhYdnV1WWVGT1kxNFU0TG5rdUV6N1JaekJSWmdobEJlYUgwWkhhdVNoSGdOaXd6WEUwT25FV1lZdGxGbldkdlJnampwV1lhQTVITlJReHQ0MytscEhIejFLTmIwdENBU2pLTUFHM0dXQnA5bzJkemV5bkNPWVdwcVNubHJnYWhaVHg5cHRUcW8yVndFaEQ1U2pMbkFucUZqeHpwT25EaUpyVnUzNHVtbm4xYVRuNXViVTdLQkpMR3N6dXpzTkxadjM0WkRodzZSRmlXcVJqZTM0UHpJRUJKNmtWNzJNVFE4U29yR2ZDUHE2WlFHSlBkMElwNHNYQXZMUmlRUWhwdHpVTW01T0h0OEJIbHFQcVYwaHMwcWdZSGVpaEIxaFhOV0NnUXlFdWUxMjNleDNoVWhXbzFFbDRTZkVHeEpGUm5WSGhKcThldGh1WFFRdC9LNVhHcnpwazAwaGtoR05BdXo2MzN5eVNkeCsrMjM0Nm1ubnNKTk45MkVBd2NPNE9TcElTVFoxdXphdFl0ZGNUTVdGeGZKRXp2Vi8rVzVNNlJoVGRRZ1oxa1NTZ2hZM1lxYVNkY1Z6SmU0Nm5HMGQzR1JGdW1QcmlCbFN4T0JMZGNpeXpEM3ZBcVJNWU1tbHlFWUR1RHNtSVBqN0F5NnZTS0NCS2xDMEZUM0ZjQVE0NHhsWXBPMFhzSTdQYTl1a0ZjREZHVmN3bXltR3h3VzI1NmVOWGowMFVmVjVBdTVQTkx6ODlpNWN5ZmloTjd1N2k2c1RhMUdrbFNvcmEydG9WaVpVb3ZvRlYwM0dYSmhiRngzRlY1a1d4T3lERnpUMDRrNTByTWt4ZG5XSkxVVzFqV3F5NnAxV2N3dk12ZHNlQ0cvV2k3b2lFaEpsdHBuQ0pjdzQ5cjQzYjRQMGRnb2tqeW5sZlRPNHYxazRzSlNKS2NhVXVCbGg1OHdyM3ZYTy9Ibzk3NlB6Mzd1YzdoMnl4WnNZV2h1Mjc2ZHRDbWlMalpISTdkdTI0N3g4VkZNRUVoNlVqMDRjdmdJa2MvQmU2Ky9BVmw2UEdKS2lqbTRmdXM3c0VnQU9YV0srY1dhY05YcUxrek96cXQyWmUyYUxxeHFTeXFHVXFKWGh2aWI4WE5UN0M3QzZGN1ZnaVlha2M3a2NlVHNPYnpubzU5R2NzZHUrR1dpTnR1b3VrSldMOVNTWHZVaTd0V2ExbG9vcnNnOS9hcjE2L0dQMy9nNlNhK0w5Ly8yQjRSUTR1alFNWEpEUjFHaEo1NTZVbjBuQ1QxTjFVc3dxYXVIWG14dHdhZis1SStRWi8zU1JQVWlNN0UxRjczdjJvVXVxczVqWTJPc1ZXbk1abktZcFRkR0dmS0xMUEtDZkFteWxlNzJUbkxTRHZRd3RLTk1CVFpUR0NaekNiZDFZdWZ1ZDVHNmVZcnU2YWJlUU1EbEpMbld4eTB6ckc2VTF2aTk4SmQwaG5MYlQzLzZVNVZISXBvT0RnNnEvK1dFNjNmdlZwSmNrRHJpMXEzYkNPaysycmtYSVBFL2ZPb29QWmdqYTJLc3M5dVdoWWtZSG42djl6MjRidHNXNWVuejAzTTQ5dHBaSEJ1WndIRjY2dnpzQWhaNGJadWU3ZTVzVjAxbm1ndHdsb1g5bFdNbnNmUDZtMnI5bTNRQ2JIRU12WWFNUzhaZGJ0UkxXdlYzV3RyNDJCMS9mQ2RCSkNFSXFCUW94cmFncGt4ZVdFc3ltYXl1REM4ZWk3TWpDRVJ4aURYcHpyLzhETFhHZ3Fwbk96ZjBrS213RXhEdjhkVm1Uc2FiWXF4UkZnNHhoSE1zNWo1cm1EaWpJcnFrMUNwTDlFeVJKSHhNTFdieDhySFhNTXYrN3FPZnZGUEpnUVJiR200andvZ1JUbmtoR2k1L3Y3ejFhWGhVMDRhTXozNytiN2laNFd5cUc3ZWlXVjEyc21vVUtidVZpYjUvOTdmM1lucDZWRUgrME9nRTFyT3pYdC9WSnJPaEhCNVVEYXZQMllVaTVJU3IybkQ0eUJHY09qdkcvRXZERVRyTFNVL1NxOWxjRGhtV2dkUGpNM2gxWkJ5My9lRW4wZFp6TlEwcktRSnVFanpDOFZpdHg3L1FTL295WTdBaVBHdjVOMlFXUzhVekZtdFIvVWVxMHRjYVhibUEwdlA1dldVYlNxUGN1L2ZITFBDRWVTdEtiNmFoMlZIOHl3OStBb3RoZTlNN05qQnpITGowdm0ySVZGZkVhb0xJUjI3OUhUeDNZQUF2RGg3RitmRkp2TUxDMzlxU2dPRlQ3M1RLbU1tVThPR1AveWwyMy9CZXNwT0thb1NsOXc2d1lHc1hHYlgwV2djVlVjU1cvUUkxQXc2UmVPaURGN3E3L2h0ZjZmbUdDbEdia3ZuazlEd2UrNjhuYUdnRXNjUnFMRXd1c0taUmEyVC85czMvZkJLUlAvc1licnoyS25xTzdRelppTWJKR3lUUUtTNU8rL3ZmZzgycE5YajI0Q0JPam8xaitPd1pCTzNxdGxhaUs0VVAzdm9oUmtXQmpTcnZLM3hXQkYvZVV5bTAvbEpPMVFHajdveTZrVExFRWRYUHBUUHgrN1Y5d3A1TDJ2eUY5S1Y2QVZjcHdLSUVnNnJVRisvNU92WEVDZlc1SE9tNU1UYlVVMHIvMER3YllUWkZYL2lMMjNHamlEcnN5UnlDVE1VdncyTmY1N0hPbGVWZ2JaeEp6NU41NUZUT1VSYkFZODg4ajk1YisvRGxMMzhKeFV5Qm9wSEpuT1hHSmZOV1RkWFhMakUzZjhWUjcrbnFuUUxMNlRyOTVwMDcwN3hBLzhvZmU2cVZyN3BjdHBrc2ZQV0JiMkg0dFhORVN6bXhwRDRQeFR0NU1WTWxQMXR2NUxVUXZ2U3YzOFcrSXlkSXlybGJ5aFVNbTJHbHFkQU56Sjg0NlZ3U1Y3T1ViTDVxRFpvVFFiTDhyTXFwSHoveEpKN3YzMS9kM3FydENsMWl2VmNZZDdsQkR3N3UzTHh1cE5xSnUrNytGU2ZDVXgxQmdPSDMycW56dU9mdkg4Q3JneWVVdHp4S0RBcXBtRnNHTzRKd3JJM2hKRGNpVkpDdEdxRW0zUGZ0NytQN1Avb0ZEWW9vdGN4U2NNNnVJaSs5VzBrdG1qQ1RNZElzbDRzaVhZRkJSUHptTi81SkVmWXdjNjNPSDkvWXFCbnNlOTlUUnFvM1pmMGgrZGRYb2dSWE94VEY1TlFzdnZxMWY4WVh2M2cvRGg5K2pXc3JiUVkzR2sxUDdZaHFxQUpQSkVvNlpzYzRXWDZuRVF6b2NUdlNqSC83NzZmeHJVZjJRZ3NLbHl4UkxLSXFKbW8wT3dTSGRYTitacDZxTW45UC9hVENLUEJJdkNkSUV2YnUzWXNtaHFRc25BcC9SUnY4WllkWE82cmpRaFZNSnNlMVUzc0hqV0R1UDNoMEh6bGpiNDd3L0ozL2VBd3Z2dmpTQ3RlYnpKOFZNcHJjZ2tBaTkzTktjOGd0VEhEcldQb28yZEIzbFlEcUZvRzFyVkY4K3gvdWhsWllRSG94ejU2dndsWXBoOUh6NTVDdEZQSFM4RFFlZi9abFZkUU5peHNpTEliOXorMUhSMDhYYVZxNVdvWThhOGs0cllicTdsSWVOc0JRaWNmK0U1dlc5dlF0ZVk1alByMXczek0vMlllLyt0d1gyQVVjWElhZWVpMzNhc296TTFWSkI1TEF2SlJHeWhVSUpLajd0MUV5WUJuZ2VsVjgyVE9RL1hBVDQ0c2wzUEhYRDVCKzVhbHljY09qa0dFblRzR0hIRk5hcWxuS0RZM0ZRdldhOTkvL0FBR0lhV0hGbGluTVduVWZqTUNsamt1QWpFT3ZFUzRlcXI5dkJQWVBIdjNPeUptejJWN09PVldIM09XZVV0MHY3MUZuNCtvN2lwbWladm5VSjJVdjI2SDI0YkY5c1hSWDFTbkRWeUdDRWs5ODVya0RhRzFmaFZSSE0rR2VIbUZUSzV0c1AzLzVNR1lvNUVydko3dFRGdXZqNmRObnNQZC9ubUcvNXBHMGIyR2FCQlRNSzVJc215SHdheVZBVnpKN1BjQllsZnMzcnUyKzd5TGpaRFIzckR2RWsrNFVyMmpMNHJtcURlb05iNHJubE5IcWMwM1ZJdG1tMGdnS0h2VUVrZE10UTFPTXhSZVFZU3Zqc0pTOHdDSXVUelZzdkRxbFhzdjg3WXUvT283SnhXSnQwOUZXTzBrdVE5czA0M2o1bGVQNE1adG55YzJ4c1FrVy9oWnVsU1dVZ0ZUdENMd1Zuak1jM1B6d3c5OU1YOUs0OVBUSVJMdzUxY3dWL0swbGRtSW9JeHFjVzZRN0NWRXhzQmF1Q2wxTlVZQ3B2NFFUcW94UU0xZnRTa1UzRklwS1lmZHA0TURKTVVVRzNyMTd1OUlqWHpwOG5OeXlvRVFvajhCU0l0am93bTdjQUxsc0ozTHN5QSsrY0FUUFBYc0FyNURUaWxpVVRMYWhqZEtEdnpRcklkYjNyVi9idVdJVDhxTEFUYVY2RTE3QUh1Q3FwT3FkcjVxKzU2allGNjlKV0NxdGtCT09VRmVwc08rcUtsRGNPYkNxVzhiWnVkZTRjb3NLZ1VseWhOK3IyNGtSQyt3UlkwRURXOWUyazBDSDhNdkRROGlVZVE5MkhJR1FhSU9rZTRGMnFteHRTaUdUemwxcXI5ZkkreksyYk4rQXV6Ny9DZXgrNXc0dVNHWGs2dTcyZFJmYWN0R2UrTWhJZjVwSWR6TTlrVjdSWXFoOWFLTjI2TFdXbjhwenVhSVdRT3FXRWxWWjd6eUNRamphd2ZCaUdSQSs1ZW1OdkpDTlJ2bDNpdExkTDQrY3dlaGNqa0t2RkJycWozcnRTUWlXLzJUemFwWVdXeTIvcHpZYXRZYU9FcVJDZlh6b0ZQNzgwM3ZZcXUxUGMvZnBabHhpWExaQldyLzF0ajVHMHcvbHd0Vms5bXBoQ1hsa29xcGR1RVcxbFNzZWkzQ0RVS1NEc2w5Uzljbnd3aWptSnhpKzUrbEJTejFzSTMyakRKSDNLcnllTGQ0V2JWT3Y1bStaaG5zTVNkMW9Ra3ZiWm5vOXlLWEtxY1ZSTTYxMTRKNXFZZzMxZUVkK2Nmd2orZlRwUys2Slg1WUd6RStkR0VwMlhMUEEzTHVsenI2aG5tSFFWWDlseUVhRlBQNFV0RlRYVVAyK3h0S0pmSUtYc25jdGV3bzJBU1dieXpiRUhYbmVTL0tRR3dZa3oyeXpER1dkZWtqQTlTc3EvRXlMT2lVUldPMmdlclZTc05Sa3F6em5ndDA5ZjM3Z3U1ZXo0VGR5bkxuSmt5OGtPell1c0xqZmNtRnBFQ0RSeVNwRVhMSmtSNmYyU0laQjcwbWVlWnIwWkdUMlJvQnkzSGx1Y1pWVXZ0UkJTcmE0Uk1EVnZPcmV0blFFYXFmSUVMUVVpY09nb0VUOWtuVE4wSmVlcUZneXpyOTcvRlQvUTc5cC9xOUw0T1ltVDd6UTBySDVrS2xydC9DQ1FXbmo2ekpBaFNUYVpIUHFxWHBXN2NFVVE1RXV1cmFaTEZ0WjhvaUhxWmZVdzI1cWg1VHFtRzdKUHJxbE9uSHhkcmtzWExYNlJKTFBjUGRkZVU2c2hlRVhVdks2ZXFLaStqZ0ZpYjUyeC9qcGZkOTl2YmxmRVR1ZG5SZ2FhdTNZOUFQWjZ1SU5Fc3U5dUx6VzFQRkgwVFlmalE3YVluaTUzR2kwVEVjOWtDUFNqZnFLMjFkQ0RoVGI4WHlGcE9KRktaOWxRVTZXRlpQZGhGSFRSZmk3RVc2cTNEQXh2TytGSzVuM0ZWUHZtWW1oOU96azhZZGIycS9SZkxXOTdLdlZyTE9WZXFQWTBEUnFPVklOWDdOS2R6MFJrMHp1MGpocWwwYXZFUU92dHZHaVYybUgwa1hMUkdHTCszZXlrMXYxbVBhdzViaDNqSTMwVDF6cG5EVzhpWkhhMFpjeVhlY1IzclJYYml3MVQxUFA2MVVOVmdDdzdNcWVUSmhOWDI3aEhFbndBdlhaa2dwcHc2dFdvZ2FkVS9XbUNpRENVbHlkY243SE5mMithOTU5N3VUL0QrSU5qamRsWEgxYy9ZN2Jlam1ydTVpSGZmWEhFK3NUVlliV1JCeFhDTEhvSXRRdEMvbVRETThpQzY4OFJMRFNPT1ZsUXJ5d0g5L3cra25BN3l1bVovcnhKc2RiTXE0K05tMjZKZVhiVmgrM3F6N0J2Tm14WElzUmozcWFveERVNUNaSmZ2RXNKZmlNWWhuMXdpeXNwOHFFUkJIUTlwTjlQNVNXamI2M09ONFc0NWFQRkExbEV1M2dyTVdyMjBrQ0VwcnBweGhvQ1VNa0NhcGQ2Zmt6YWM5WlRHdUdPY2dKbkNGSU1PUXFqNzhkQmkwZnZ3WTl6ZHVnV2phR0pBQUFBQUJKUlU1RXJrSmdnZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFEY0FBQUEzQ0FZQUFBQ28yOUpHQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQnUyU1VSQlZIZ0J0VnA1ZEZ4M2ViMXZtMVhMU0JxdEhzbVNMSGxKSEM4aGl4T1NXR1luQ2NRaFlUdW5MRDVwb2RCeUV2OVZ1dEE0NTdRbFhRNDRMUlJPU3drY09CQW9ZRlBLQ1Fra3RnbVFRQnhianAzWXNtVnB0STZXa1diUjdQT1czdTgzc3BOQXlFYjZrdkZvWnQ2ODkvdTIrOTN2L2tiRDYzd2NPSEFvRW9heDJ6RDByVlhENjlVMGJadm1lUkhQUlFUUTRGWXJxR1pTNlpYcDJiaVd5NlVyVG5YWTg5d2pjREM4Wi8rK09GN0hROFByY0loQklWTy9rNHNjc214bnFESzNnR0krajFCekMzelJLR3lEUnNtSi9NZmpmNjduUVhjZGxKZFRLTTNPb1poWmd1NEJqdVlNZTY3NzlZcGJQZmlKL2ZmRzhRY2VmNUJ4RHg3NDZaQmhtSGZ6enlIWGMyQXZKR0VuNXFCWGJGN1pRTlZ4b2Z0ODhNVzZZTkJJVDllaDBRZ3h6dE0wL3UzQzRLTVlIME5tY29iQnMwRUh3ZVZKMVdyMVlCbjZmWHUvY085aHZNYmpOUm4zOElHSHR3SG01NkZyUTJxaGZHOWxhUjVuZi9NRVROdkJZRWMzZkM2TjQ5V2RjQWloN2hpcWxoK2FHTWR6ZlQ2TFJ2RG1wU0pXeHMraHVyVENxTGswellick9QeEFROFh3SWJ5bUd3Mnhuc09lcmUyNTlZTzc0bmlWeDZzeTd2Njc3b28wK0NKM2h3YlczeFZzNjRCcm1yeUFwaTZ5c0RDSHpFcWFpeXZEVFdheHJxMGRsWEFRT1JwUnFGYXhsRW9pbVZ5QUx4REEyclkxYUxRWjFWUVdldFZCbGRHcTBscGJzMUdGamtCc0xlcDRmZmpwRUw2V1pIWTE3THYxdHAzM3ZKcjF2bUxqRHR6MWFZS0RjY2l3ZkwyV0x3QzlPUUs5clEwRjFrNW1KWWZVeWdvc3Y4Vy9sekdUbUlHZmthcG4xQ3FNemtJeWlkRjRIQUYreitJdExVUEhwbWdIdHZhc1E0TXZwTkswSUdEVDNBaWpxeE9XR1dUd05MR0paVW9uOERPbm1FZHhaaXBlVE0zdDJuUHZLd09lVjJUY1ExLzUxbTU3YlBUK29HNUZxcGFCczR6Q3FhazRDcDROUjlld3VMd01tL1hGTklYSjh6dFlZeVBuenNOZ1ZEcWlyYkJaajZGZ0NIYXBnb0cyTG16djZjZVRwNTlHUTMwZDNueloxZEFibStGMnRjR2w4WElaVitxT2Y3aU1lS1ZjUUg1cUJtVkczWkRQTktRZDNkdXo1N04vZGZEbDFtMjgzQW1QL2V5eE8vM056VjlyNmwwWG1Nc3M0UDZIL3hjUEgzc0tjOWtVNmlLTkNJWERjTGlRS2cwSmhVS00waExHeCtMSTUxYXdaZXRXNkxxQnFla1pGRXBscExJWkxLZlNzRjBYYjc3aWpaZ3ZGT0hyN1ViMzlxM1FRZ0hXSXNISDcyUGtMUGhwWUpuZnk1OGZnNUhMdzJBa0pjS0dZUVEwdy9qQSsyLzVVT1o3RHg5NEFxODFjc2VmT0hxbjUrcjdMZE9INWVRaS91NGY3c0haU2FaWDBJL3RsMTFHTDd0SUxpMWpibTRlQVgrQXFhUmprU25ZMUJSQnBMR3VkblZYVis5WENEUXJURjJEb0tMellUSFpCZ1lHRVltMjRKTWYrempNZ0I4TzA5QmZjcEFqY3VZbVo0RlNpVW1wc1JaZGxHd2JaYnNLcjY0UnZxNTIrT29hWU92YTNodHZ2bmIvcXpidTEvditaWGR3WGY4Qi83cDE4UHdtdnZDbCsvQ3pSdytocWFVWjlYVmhoSmxTSTJmUElwOHY4R3hkUWJnczNHQnFoaG5CVUgwWTVYSUZ0dTJxMnpRME5Lclh1VnlPa1NZcTBqR21ZY0N5ZlBqb1IvZmc5cHZlQlkrb1dSeWZnY3RyU3BwTFM1Qm5jWXhEaDNwdFRRZzBSVkdSdEhYWkxsanYvUGpXdDk5NDlZdW02SXVtNWZIUGZyN1haK29QK29xbGdMRzRoT1hGT1h6eGdXOFJ5ZzMwckZtRG5wNXVUSXpIa1Z4ZTRrTFprSmt5RW8wNkdyVzJldzM4aFBwaXZsaHJ6RVFGazNVcUtWc3VsMUVvRlBnZEJ3YVJWbHFJNDlvWUdUa0xmVG1MamNFbVdQeE1OeXdhN3FPakRMZzB5cmN1QnY5QUwveU5KRG1XcWRLV3lZQ0EvRk1vdnVPV2pWZDk1enVIZjV6K2JUdk1Gek9PeVg4b1pPa1J3eUFVazEwa3pwNURzWlFqR3ZveGw1ekQ1TXdFVEJwVno5ZHM0dWhxYThXdWE2N0docjVlV1BUb0VnRm1JakdMOGRsRnpHZlN5QkZJYk5JdW44OUFtQWk2UW5SMW1HWlNqM0pVK2RtM2YvWVRWSElGL05IUVRYemZZWjh6RU9pTXd0OGs2U2RPWUhwS2RrZ2Y5SWk0MlJKN1pCemx4V1FrNE5NUEhkajMrZTIzN3R1YmZrbmpSazZNM0cyc3JQUnFaQnZHY29hMTRTSEFZdmRZekVVdU1oQjBzSTZSdTRTUDFwWVc5Szd0WmUzMG82V3RHWjViaFpQTndzbmtjZlpaQTJ1WmlrOVB4SEZzYkFMeCtYa1ZEVEhJWk5TcVZVbE5Xd0JDZUFtL2ErT0JYeHhDcUs0T3Q3L3ZmUWhGNjluNExVZ2hHdnhja3pTbVhTZ1RRZU1KRk9lVDhCRk5kVjZ6cXRtOXBoa1VwclQzOTZibDZlT25ldzJmY1ZDamQ4MzJkaGpOemVxaUJyMTg3T3dJRXVrVUtwVXlicjd4YmZpek96K0pTeS9kaUs3dWRvUWJHNGtFN0UxY3FPN1F6YXl0dW1DWWFlcUR4NmpNRUNGWFNsWGtDUkJTUTlMMnhTanBaWTVpSklZeTJpSW9uWXlQNDRwZE42Q2xvMDNWcjhuVTArU1phS3hOSjFFZG5ZV2VMYWpXemhQVXVnVkYzYUJ2eDhjLzlaYy8vT3EzL25QdWdqMzY4NDJyODV2M201TFQ5SmhtNlhCYndyQzNEcUJ0NkRwY3Yyc25GNkRoTFc5NUN6NzI1NStDRndqRHE2K0hIbUVkMURkQ0N6ZkFzMEo4K0tBRkEyd1RUUVNlUmxWbnJZMU5pUEMxb1pzcUE4U2dTcVdpK3BtdUtKbW02RmloeUZSalRYN2hpLyt1YUpoOHBrdk5UaS9CZlhvY3h2d3lmQUpDckdrLzI0YWZ0ZWZXQlZGMzJRWTBYWFVGckthNnp6L2Zub3ZHbmZ2U040YmNveWVIQWpNTHFtNE1JVDVhRGNhZGhoRGFldnVsUitPUC8rUU8zbzZHeXhtNm4xZnc4U0ZvNmFqVThrd2lKaU5Rb1ZIU0ZteW1sYUJua1BVcEN4THdrWWd4MFZBbGt0cThsME1qNVZHMXl6V0FHUjNCMFY4OURvMDE2NTRhaHphM3hENUg2K2x3azlmWFdidGVuUi9XaG01RXJ0b0Npd1RBSUR2eW1jYlFrNCtkSHZvZDR3S0dmcWZCUnV1T1RrQi9hZ1JtZ2prdC9FLytvNEg5YkFudDdXMFlIQmdBMU5KcVh4ZmoxVUREZE5VWURaMHA3TEkyYytrMFptWm5FQW9JQldORXBCYjVtWHhQVStpcXFjbEFHc1dGYU1xellsMU0zWWUrZnhER1hKb0F3alV3L1V3K05FbEQ4bFZqZlRlQ1Y2eUhHWXRDWjVzU09zY3lKaXByQ01LNSt3WEdqWC83d1Y3NmU3YzBWbE1Tb1ppRGZuWU0xV09uWU5Kck9tK3c4WkpOdU9PT080VCtxRU5ndkdZaHoyYzllTlV5UERaWmx4Rnp5aVVVK1lnUXVudGlheEJqL2JoMlJhV29OSDU1Q0phcmxCUUQrZHFyc1EvMTJ1YmZKOGJPSXNkcmluUEZZaTFNUHR2YkFkL1dmbWlkVGRDWW1xYlVxV1FLalFwSStrNG1VSDd5Mk5EeGZmZEhMaHJuMzc1K3QzSGxWbFNqUkR6ZVFHWXNXYjR2VndGT1RRQ1BuNkVYbDNIYkxidWhpdVBpTE1CRlZZclE4aGxvaGJJeVVwcDJpVTFhWDAzRENnbHZWM01EcnQrMm1XU2E2V1NvYjZrMDFGYjdZeTFpei8wdFI1RklPRFU5aXpKVDBldHZoM2JwV21oZDVLQ21wc3BEM1o3UjhoT1B6UEVGVkgvOUREU3lHaC9Mdy9WWDdycllDaHkvK1JHUGNHODJYd0lrVTNBbTVvRk1EaWJyUVJjMlVNZ0Jad3J3NkQydm81RUxxQ3IwY2xsVEtkS3hSMy81Qk1ZVEMxak81ckMwdEVTd3JMS2ZCUkRqZ0RvWTYwUUhKL0kzOVBZaGx5L2hwOE1udUhCWHBiTHJhclVhbEJTdDVZSXlrRWlEQ2lsWE1xeGgwMlc5RUFDV0xxRFZUbEdwaXpLemhVQlRJVVpvekJLZmpFWHN1YWEwRHc4N2xYR0owK085NUF2YmREWkdWNzVGaXFNMTFVTmJ6S0k4bFlDVnlxbU9JVXpEYzBySXh4ZWg1WmE1K0RDS1MybDgvOXNQNE5tcFdTeXNGSkVndGRKNG5RQm50ckludElscFFsYmZRYTdaU3RxMmt3UzV4TThmT1g2QzlWZmx1WTZxTzA4MWN4cnNYcWhrMGk2YW42QlVVZFZxT1ZKRFZFOE53OTdzRXFvc0Z6TlBZa0FLNXJLVmVKSzlkSklkc21ERTZvZU9IejhlTWQzanA3ZjVlanNaa1ZZaW5hR0lya3VJZGJwYVlOSlFqL0RyVGlUZ2tlVi85VjgvaC9qMEpQcWJHckZ6NXcxWXYyc1hOdlQySWs3dlpRbmhMcU1aNitoQ1kzMUlrV2xaVlRNYmVYMm9qbTBtektIVlFULzc1MU5zRlV2WkNoRlFWM3cwMWtLaXpmUE96eTJpd0toTGl4QkRpOFdpbWpna1pZV1ptUE1FcFNuS0dFeFpTK3AwTmRvU0U0MFJjM3ZhT2VpMmdsZVdPdDV0R3BtbEllL3BGT3p4QnVpRDNkRGFXeFVXU2dvNGtpS2tRRm9IbzhtYWEzb21ndi81NWE5eCtPUnA1T3FiTWZDZTIzSDV6aUdjSnY4c1ZFcTQ1WTAzb0gvOUlDbmFBdkpjVEhlc0IyMnM0d0lqbW1ka1MyenVBWjlKUThKSTUxWVVkMnlMTktDbnZZT0NrWWN0YTd2eHk5T2pxbm16cjJCNlloS0o4NU9vTDFiaFQrVVJLTHVxLzZvUmx1Zm9ESmZqNDNOWEsveGRKTlNHVm5NRzJ3L3JiWnZKU0c4VlJxOXpITkdPbndaYVNKUFdkc0dOUm5nQm80YUxjaTkrK2VwMzc4Ymp6NHhnb0xVSjE5MThJL1N5alZCWEYrN1krMG1rcVdMVis0TE0rU0M2Q2MwT3ZRdHAxcGtNcWtUSitXWHl6UFF5c2tUaUpqS2dCTUhHbE5HSGFMZFN5R1BMNEFZc0xpWlZQNnRoaW9mVHAwN2d2NWdwSFZZWUczaWZucFlPdEpBTUNQc2hRd0I2Mm1EUzhRNGRWdkUwQlhiaUYwbEEvdCtyVFgzclI4Zk5kSGFidEdYWGtPWk4zc2ZGZVV3VnE2OGJMZ2RTVnhVOGE0RW9XSm81RHpvTG9mNUJPSXdXWng0U2JhWUJhMUJqUFpBVksvN24wZkF5WjhDVlZBclRYUFE0VmJHSnhVVXNFS2dXQ1ZEei9LeTd0Wk5CWUNPbkkzcmJPeEZrYWoxdzVPY0tHSVJQRHJaSDBjQUc1b2kxL0wrZHFiMXA3UUMyWEhzRE9yWmVna0Mwb1NaSFZHWDhJYnF6NXhsY2cwdE9YSjFJeEUxOXgrWmVkekVEKyt3RURIclpOUWpqQWk0a3p1NEM2eTNLTVdSZEx6eXljNGRHMTYwYnBGdk1XcUdYcUZxNWJOeFVnWVNWQ0R1QlVEZnA2YWtWRkdqNEpJV2pCRzgyeFFsOUpyVk00ektvY0NFOXJNM05mUU1ZSTdHMm1TRnlibnQzajJvVE9vMEo4bHArQWtXUlRsSTZKd2ZtQXJudVltY256dEI1Q3lQamlNeEYwTkhaU3RwV2hFaEpyYUsyVFM4UTNUbTVPMTdFdERXT05rd3pRd1FmR2xQaEdHSGxpcHlyMkl1WUl1WmlDaTVSMFdtTHdDUkxNVnJyaVp3MHpCWUFJYXRueEx6NUpmWTRTVU81T3BkWExGTXZLWEhCQldRNXhpU3pZbVFTYzFUSE11eDdOci9YVmQrRStkbHBGRmV5NkdxSjR2TEJUUmlkbnlWNkt0bVc0MVNRU01zcGcwNXNXeE5ERTQyeS9DSGt5NHg4Y2dhcDlBTHF5R2ZuT1ZvNXlYbjQyWmEwamhqQnJFNFJlRTAzSTJwaWxIU1Y1dWl0b1VKTUk5eVplVlFKN3pyN2tpWk5nQ2ZvU1dvZjZaTXdyNmRrU2FDZWYvcHBCbENNckNCN2JoeDk3M3dyQ1hOWVRlUUM4VldtYkZVRUhrWXB5ZjZYTG9xaGVkWlhUakdMYkg0RkxZRW9Qcno3VnNUSVpBNGRHOGIzSHp1Q0M2T0tQK0JUaW5Xa2cwYXhqalhkVWpWRnVSYzUxcTJmMlpPTW4wZG1ha3FOUHEzaGVqUlJjUXY1T053R0xHWUQyWmJGZnFHMXR5am1JTWhoazlab2ZXdGdydW1BUFVGUGlwWlJaaVFGbWJod0VXeCtkZmduK041UEhzSFlRaHBCRnZOVjVKdWYrZUI3VmFPVnZRQkQwc2pRbGRwc1VCc1JKU1JIWTNYVFVCT0hjTlVscHVjZ1VkTGp0VC8zblFkeDVOU0k2bm5pNlk3dUxzVFc5c0FnUUhtR2NGQkhTWHdTVStHN3VjUWt4aWtlYWVUQzhoWHVTeUJuRjFGNTVqam56VEM2MXJmQlQxSnQybzhmU3lQYUdQRmZzcDZwMTNTUlNRc0NlUnQ2aUp6dHFOTEE4dGdNQXNMNk9SeHV1ZlUyL1BNUGZnU3RvWTdjTVlicjMvRjJWSmk2SmVaK2dHTk5sU3BYbVRmT01qV241dVp3Zm5LQ3RNeFdmY3RqSkV0T0ZZMTFBVTRCRlR4MjZqaEdabVlWaEV2LzZlam9RSGQzTjdQQ2dxVW1DRU8xRElQQXN6UXhoaFVPdlZiVlZnQlhJKzIxNWk2VCtnS05QRWEwQzNER2pOYUgwNFNpU3RwTExrUktqMmVnczhkWkcvc0JNaFJYTTFXVGRZTms0UnY2WWJFSDJlZW5VQ0RLUFhMa0dCYXBGcS9ySWRDUUlUeDA1QkZNVDArZ0lob21jLzlkMSsxZzJsaVlKVHBPRVNsbFNNMElXS0ZHa20wMUhYaW9vMEltMDREdEtIS0YxbGIyem9GMXE5R2xRWXkweHM4eVJOcDBNZ0dOSk1Ca1pHMmp0dWRBTmk1aFF3TnJMYlorQTBLUlpxNUJ4NVBIVG1EYnBadmpwcVBidzVybXlTcmhMYzRTNVJZQU1ubEJTSlBEcUtPcnE4RGhWSzF2NlVmOGtURWNlK0lKYkdZdHRKRjVQTXRHVytVQ2pqNXpGa1ZHeEtWREpxWW04ZTRiZG1Jc01ZOXpqRXFlNkdWN05aWnVTZTgwUFRRU2lDeG1oMFlRS25KYzZ1Sk10cTUvclJxdXBkY1o1SzlwTXArVnBTVDlYK0h5WE5VWFhhL21JR2xvalozdDZGcTNIdUdtRm9XbXJocWdIT1NyQlF5Zk9aazJyV3Z5RTFJZmlzSm90V2tBSGhHeWVJYmsxYWp4VFpFRk5CbE1UVHc3K25NS3JDWDBOVWNSYSszRm15Ky9GazhOSDhWOGxTU0FyTC9FRzVmbzBTZk9uRUlxWHliTnlsQjdLYW0wMDVscU9qMGRKTXVJVUI3VWFuREZ3cGQwRk1Wc1dra0hJbFdVS2RnS3EyZHJZOFBXbE14SGNzdU1nTnBRaVJBbmZIUjR5V1hLWitiWXVDMDF6NGxDWnhGc3NvdjJDZE1OclF3TFdaRXYwSTNLSTZKcHFIem14VFQyTVlWUkdrVlhOR0xIdFJ2dzdKTlQrTVFIN2tDU1JjMzFZc3NsdTVGZ3VoYlk5NTZkbk1Jb1lUL0R2bFdrYnVManpSeWVWQmVrbXNXR3JHWTIxa2k5REoyOHBlemp4VHJyMllqemlpd0xLc2s1Wmxoa0JsZUdienFFMzVPSm53WmFRcnNzWVNSczFFWHVUL0NhdHRJL3VhdGsxMlRHTXM4eGRQY3dCU1hmUWI1OXYrTGRxNE5vN2NtdEdVVWE2bmtrMHRaYVF1eG10TWI4dVA2R01tSGFqNFhKTE55c2kzYnV6dlJ1R21EYVVKQnRiY1B5NDBkeGZuWktPU2pFNW00eElRUkFSSVV1VXljUnlTRkVXY0JWV2tvVlFlNGpPTndkRXFNRkhHUVMxNHdhQmZNVVlMZ3lCU20vZTh3ZVc4MkNhb3hWSk50UWMwUnR3cjlnaEc3cHcyYmY5bjNwcWVOL2M5ano3S0VheDZycEcwb0FVQ05KREw3Z0ZrTDZnRXJMWU1SRjM0WkxvVk9ZYWFGZ0dvMjFJVXh5M016Tmp6eEJKdHdnNmVrakswbXBERmVxc2dpb2xxRmFSRjBvcUl3VGNpeHpZWmFwUzRiSzhZaGFKQ01TWk92UVdSN0ZFa1VoSVJKU0tZWkV4RlBhalN6UnV6Q3NldW9qcGVqb2dnM2VxcEhRaHUrOTk4RzRHbFp0MXo3Q0QydkcwVVdhVXFrNDF2dXVoRW5EQkpFOGp6ZjFIRlV6VGUxZDFFVXlhR3B1VmNLTVBNNlBqcEZLVGVGWFR3M2pOMmRHdU9paUt2d2dDNzI1UGtDRGZHby9RUkJRVWtkRnlLMXRJVnRVMGs2ZU9VOEgrTkhXRnNYNi9uNTBkc1l3T2pZc1VLYWNJdGZTVnpjdmxmTlg1enpWQm1UZHdwYVl2anI3SW9Ya3IxK2N4S0VIOXJ0dS9tN2RzNVhkbnRZT2YrZzZWbk9uR2gxbHROQ29Bc3RBS0JlYkdCK0RzenlQbVpsRWJhK2JOVFhGT252cytOT1lvOFF1ZXdLQ2F1TEhJRWwxTS90aGtBT3N5T3dDK3dMOFltUXFWeUpvMGUrc2xhcHdTRGJvQ3RuR1NpbVAxclllckIvY2pqUG5qaW8xUUZOUkViVk1Kb21hVm5teGh0aU9OTU5VbjB0ZnBLSjI4S0p4a3BxangvWWVwaXVIb0E4Z1VNY2crc2k0UFdNMWo3MVZPYTZXMXk2amNQRFJ3MlFKYy9SNlNFSDlDaEZ4Z1lxWFVDUlJsTlZFemh0R09ONkV5UlA5VE5VTFc4emkrUm1ldTF3b0VjYWJxWXlWRkdzcFV5NVlwaFRmMWQySkFoM1UwdFNGdnI1dG1KeDRXczE3SHFNamk2OGhyNkdBaHVWME1ZcXFuYm42RC9mLzIwUHg1eUluN3p2ZVBhNDFNQlJzZUN0SEhLYVBkMEdNZnM2d0M4ZkdTellqMnRXTkU1UUJjK2tWNU1rOGxNem4xVmlEcExhMHN6cnl3MWFxMFlLTWN2Y1NGNWZtdVN0RlJwYnBYY2RCMWVGN3dsUWFHdXM1TFdsSzBmWngwUjNSTnZSMjkzS3dKYjlzaU9BOFU3UmF6S3J4U09CZUpBV1gyV1NzaWxXcUQvSjdWS3d1Ym1tOVlBdHJidXpNSWRjSUQ4bm1od1JNdEVWTmZ3NkJMaDZyN09EaEIzK01IeDc4RVphNVIxZGk1RUorTWFZZUo4Nk9xbzNFbnM0T3RESXlCc0VrUzkxeWxsSFJTR3pEM0E4UW5VV2NKcyt6Q3d0WW9QYnZPVktMRmJ6dnR2Zmd2YmZkcmdqMnlKbHpPRDB5UW1BcDRCeFROSnRQTURNc3hXS2taVmpDVjZVMzZxcUZITDd2UzQvc3VyRE1GK3dWM0hYWHAwK1F4UDJwdHFvS3E0ZXU0M2NPc1pYdjl3OXV4STQzYktLbXNZSVB2ZmRXbkRsOUJvMGhFbGR1a0loalJFVEtzQmxQSjVleHpBbERKUFlHeXUvaWFVbGRTNlEvc284bDdpV0lsbW1KNFVUVHYvNzBYNkNSb2xLUjMxMU16Q3ZudGpTM1U1SnZVV21aNFVRdjZYaEI5NVQxQ1BwV05XL1gwYVB4aXpzOUwxaDVyQzgyelBQdVUrZkxKL3JMYlptN21Ca2Y1VVprSTRIRGgxdHVmanVTbk5lbVVtUWw1SUd6M0txYXAxWmljY0dObkJlbEp3bDVscjA1a2YrSzdIbExqTHFrZ3BMSmlldVhiOStHQ0ozamNxSk9rblRuQ3ludTdmbXdhY042WFBHR2E2aWQ3c0dPSzkvRVppL1hxTlFBU3FSQUYvZDgrY3VINDg5ZjNlK0VwV3k3KzNpenVQcWRpUGJTeG9rZ2UrVElZN2pwdGcrb1RmMW1SdVh0dTY3RkpaczNzQStHRkVUTHpxbnNwTXFtbzdjSzZYbXlFbmt0VVpQMGtrZVFCRjE2Nnp0dmZJY3FCUUdwUE04UlVVazRwVGk3ZzF3eXhqMzBkKy8rTUxadXVWN0FnelhveXM1Ui9EKytjbmpmYjYvdmQ0enI2K3RMZXhWbkY5TXEvVktHU2M5Y25CNWxzZGZEeDRuWUY2aERMcE5TRWwyUWtCK2xKQkRtZ3ZWVmJucGhHaEREWkloViszMk1vaml3Z1RVb0Jxemh1UE9HeXk5SGhlbTRORDlId1lnRE15TnFzai82dVprU0lCKzFBcWJhTDl5d2NZdXFmZTdzcHNzcnpxNFhYZU9MdmRuWjF4Y25rdS9CUzBVTlZaeDk1aFIyWEhXdDJqOEljd05laEJ4WmVGUkFSTmVWbkdBemFySkhJTVlJNk1naEVWTjhZN1dlQlFFRFpDMWJ0MjFUcjJXL081dGR1YWhiTnRKaGZpRUx4bk1VMGU4TFkvVE1JaXpiMlBQQXdTZmlyOWc0T2RyYjF4elViV2Z2aXhzR0duWVNEejM2R0FhMlg2Vis1Uk9rOTIzV1dYeG1HaVdieUVudlNtK1EzNU9JY1JJMWVUaXIrMjd5dm1uNWxCTWFxV05HQ1NBMzNYU2phZzBsUnE3RVliZElEU1VRRUxsUVgxVmVOZFY3eFZHTmpjMVlUcFgzZnZQZzQ3LzM5eWdtWHVKbzZZcnRYNXliRldCNXdhYWVvSk5zSWIvNzF0dEp2WUlxWXNHbUtEbzVsUjgvZHhhSnBSUlNtWkxpaGxMd0YzWnlMbXgwaUxGMWRJYWs3N29ZOTlpYTYzSGJlOStQRnFyUm1lVTBVbVE1eTZrbGhZamlTcjlmZEJHLzBqT0ZWTXQxMnFLdGUrT0p4UDZYV3Y5TEdpZEhhMGZYL3VUOFRKeDYvdjI4dXRvYUV2YXg1WXByNk9VeWFqL0VvTFdNUWhzWEd1dUtJY1VkbjNJeWg1VjhyaVkra1I2SlFHdXU3b3JLRkNBL2J0dllQOEF0NkJ2UnYzR3dOc1pRTlpQRnAwaTZaUzhoeUtqWjNKQ01jbC9RTUd1L0FTUFlwRWs0OWd4dTNmeXl2eURTOFFxT0tGUFV0cjN0ZEZ5ODlrNk5SQmswNk1JcmdUTS9nYVdSU2xhQnRDcExjVmFNRWlQOGJOU0NobjcyTVptL1JJM3VhSTNpc3ZVRDVKQXR5TEZsbENnblZvbU1SVXJ2WVZJNlAwRkVXczA2NnFTK29GOGhLQk1nN3VydTlqVTlmUzlybUJ3dkc3a0xSMmRuWjV4UGZZdnppWDJjcnU0V3o0cUFJN0tDTHI4cGtmR2Z2b3EydE5WbU1QRWNHWVl3ZjJFaGtscVZja1VObFczYzJtcmxSSEhveUtQNHAvdjJZL3VWTzNETmptc3cyTjlIWWFrbUlvbHg5UTFCTnU2b29uVk15ZnZ5UldlZm9Qa3JYZk5yK3IxbElwSG8vY2ZQZlByK04xMTM5ZEF5TnlkdVp1MEoram1VOWM2Zk9va0RQLzRSeGlabmtNNWtGWWdJVFJKZ2tCakgyS3VhRzV2SS9sMGNPUEFEeFV6S2RtMS9vQ2ZXZ1hlKzgyMVl1NmFMaktRRkc5WnZRbjFUNUxCdVdIdGpmWDNEZUpYSEs0N2M4NC9WS081cWo5UVBaWFgvblRmQjJ5M3ZHNnlicnU0WWhxNW1lN0IvZ1hPeVQyNkdWYStUV1U2b1ZZamJWK3NwbzMvanUvOE4yVm9RN2NOVHYwUnhNRTJWNjJ2ZitDYXV1dkpLdkdYbkRZYzcyN3J1dWZUS3F3N2pOUjZ2eTIrY0paS21SZ00xZklRZ3N5MmZTV1BxZkJ4UG5SeFdNa0tlbEV4TkRkSWRhZkNHZ2N2d3Q1LzllL1VEQUdIek5vMWZFNm1qQ2xZOW5DOVZqK1JLcGYzcGRQb1ZweC8rUDQxNy9wRklqUGRTMTlsV3JUaERoVlIycTJmYmtjVDhRdS8wOUdSa2NYR08rbjRRbzVQejZXOSs5enRwR2piTXRKeWd0ajhjS0pVT3hsOEhnNTUvL0IrTW1IWWRlbmZ5NVFBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJhc2VBY2NvcmRpb24gfSBmcm9tICcuL2Jhc2UtYWNjb3JkaW9uJztcclxuaW1wb3J0IHtcclxuICBBY2NvcmRpb25CdXR0b24sXHJcbiAgQWNjb3JkaW9uSXRlbSxcclxuICBBY2NvcmRpb25Db250ZW50cyxcclxuICBzaW5nbGUsXHJcbiAgcHJldmVudENsb3NlLFxyXG4gIGNvbWJpbmVSZWR1Y2VycyxcclxufSBmcm9tICcuL3NoYXJlZCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBY2NvcmRpb24oeyBpdGVtcywgLi4ucHJvcHMgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8QmFzZUFjY29yZGlvblxyXG4gICAgICBzdGF0ZVJlZHVjZXI9e2NvbWJpbmVSZWR1Y2VycyhzaW5nbGUsIHByZXZlbnRDbG9zZSl9XHJcbiAgICAgIHsuLi5wcm9wc31cclxuICAgID5cclxuICAgICAgeyh7IG9wZW5JbmRleGVzLCBoYW5kbGVJdGVtQ2xpY2sgfSkgPT4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICB7aXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8QWNjb3JkaW9uSXRlbVxyXG4gICAgICAgICAgICAgIGtleT17aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICBpc09wZW49e29wZW5JbmRleGVzLmluY2x1ZGVzKGluZGV4KX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxBY2NvcmRpb25CdXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlSXRlbUNsaWNrKGluZGV4KX0+XHJcbiAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e29wZW5JbmRleGVzLmluY2x1ZGVzKGluZGV4KSA/ICdvcGVuJyA6ICdjbG9zZWQnfVxyXG4gICAgICAgICAgICAgICAgPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgIDwvQWNjb3JkaW9uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxBY2NvcmRpb25Db250ZW50cyBpc09wZW49e29wZW5JbmRleGVzLmluY2x1ZGVzKGluZGV4KX0+XHJcbiAgICAgICAgICAgICAgICB7aXRlbS5jb250ZW50c31cclxuICAgICAgICAgICAgICA8L0FjY29yZGlvbkNvbnRlbnRzPlxyXG4gICAgICAgICAgICA8L0FjY29yZGlvbkl0ZW0+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuICAgIDwvQmFzZUFjY29yZGlvbj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBCYXNlQWNjb3JkaW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgc3RhdGVSZWR1Y2VyOiAoc3RhdGUsIGNoYW5nZXMpID0+IGNoYW5nZXMsXHJcbiAgICBvblN0YXRlQ2hhbmdlOiAoKSA9PiB7fSxcclxuICB9O1xyXG4gIHN0YXRlID0geyBvcGVuSW5kZXhlczogWzBdIH07XHJcbiAgZ2V0U3RhdGUoc3RhdGUgPSB0aGlzLnN0YXRlKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBvcGVuSW5kZXhlczpcclxuICAgICAgICB0aGlzLnByb3BzLm9wZW5JbmRleGVzID09PSB1bmRlZmluZWRcclxuICAgICAgICAgID8gc3RhdGUub3BlbkluZGV4ZXNcclxuICAgICAgICAgIDogdGhpcy5wcm9wcy5vcGVuSW5kZXhlcyxcclxuICAgIH07XHJcbiAgfVxyXG4gIGludGVybmFsU2V0U3RhdGUoY2hhbmdlcywgY2FsbGJhY2sgPSAoKSA9PiB7fSkge1xyXG4gICAgbGV0IGFsbENoYW5nZXM7XHJcbiAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICAoc3RhdGUpID0+IHtcclxuICAgICAgICBjb25zdCBhY3R1YWxTdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoc3RhdGUpO1xyXG4gICAgICAgIGNvbnN0IGNoYW5nZXNPYmplY3QgPVxyXG4gICAgICAgICAgdHlwZW9mIGNoYW5nZXMgPT09ICdmdW5jdGlvbicgPyBjaGFuZ2VzKGFjdHVhbFN0YXRlKSA6IGNoYW5nZXM7XHJcbiAgICAgICAgYWxsQ2hhbmdlcyA9IHRoaXMucHJvcHMuc3RhdGVSZWR1Y2VyKGFjdHVhbFN0YXRlLCBjaGFuZ2VzT2JqZWN0KTtcclxuICAgICAgICByZXR1cm4gYWxsQ2hhbmdlcztcclxuICAgICAgfSxcclxuICAgICAgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucHJvcHMub25TdGF0ZUNoYW5nZShhbGxDaGFuZ2VzKTtcclxuICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuICBoYW5kbGVJdGVtQ2xpY2sgPSAoaW5kZXgpID0+IHtcclxuICAgIHRoaXMuaW50ZXJuYWxTZXRTdGF0ZSgoc3RhdGUpID0+IHtcclxuICAgICAgY29uc3QgY2xvc2luZyA9IHN0YXRlLm9wZW5JbmRleGVzLmluY2x1ZGVzKGluZGV4KTtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBjbG9zaW5nID8gJ2Nsb3NpbmcnIDogJ29wZW5pbmcnLFxyXG4gICAgICAgIG9wZW5JbmRleGVzOiBjbG9zaW5nXHJcbiAgICAgICAgICA/IHN0YXRlLm9wZW5JbmRleGVzLmZpbHRlcigoaSkgPT4gaSAhPT0gaW5kZXgpXHJcbiAgICAgICAgICA6IFsuLi5zdGF0ZS5vcGVuSW5kZXhlcywgaW5kZXhdLFxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgICBjb25zb2xlLmxvZygnY2xpY2tlZCcpO1xyXG4gIH07XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW4oe1xyXG4gICAgICBvcGVuSW5kZXhlczogdGhpcy5nZXRTdGF0ZSgpLm9wZW5JbmRleGVzLFxyXG4gICAgICBoYW5kbGVJdGVtQ2xpY2s6IHRoaXMuaGFuZGxlSXRlbUNsaWNrLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBCYXNlQWNjb3JkaW9uIH07XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3ggfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFjY29yZGlvbkJ1dHRvbiA9ICh7IGNoaWxkcmVuLCAuLi5yZXN0IH0pID0+IChcclxuICA8ZGl2IHN4PXtzdHlsZXMuYnV0dG9uVG9nZ2xlfSB7Li4ucmVzdH0+XHJcbiAgICB7Y2hpbGRyZW59XHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgYnV0dG9uVG9nZ2xlOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBjb2xvcjogJ2hlYWRpbmdfc2Vjb25kYXJ5JyxcclxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgYm9yZGVyOiAnbm9uZScsXHJcbiAgICBmb250U2l6ZTogWzIsIG51bGwsIDNdLFxyXG4gICAgZm9udFdlaWdodDogNTAwLFxyXG4gICAgbGV0dGVyU3BhY2luZzogLTAuNSxcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgcGFkZGluZ0xlZnQ6IFsnMzNweCcsIG51bGwsICc0NXB4J10sXHJcbiAgICBsaW5lSGVpZ2h0OiBbMS41LCBudWxsLCAxLjhdLFxyXG4gICAgJyYgPiBzcGFuJzoge1xyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgd2lkdGg6IDIwLFxyXG4gICAgICBoZWlnaHQ6IDIwLFxyXG4gICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMjVDQjlFJyxcclxuICAgICAgdG9wOiBbJzJweCcsIG51bGwsICc2cHgnXSxcclxuICAgICAgbGVmdDogWzAsIG51bGwsICcxM3B4J10sXHJcbiAgICAgICcmLm9wZW46YWZ0ZXInOiB7XHJcbiAgICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgfSxcclxuICAgICAgJyY6OmJlZm9yZSc6IHtcclxuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICBjb250ZW50OiAnXCJcIicsXHJcbiAgICAgICAgaGVpZ2h0OiAnMnB4JyxcclxuICAgICAgICB3aWR0aDogMTAsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgIHRvcDogJzUwJScsXHJcbiAgICAgICAgbGVmdDogJzUwJScsXHJcbiAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUgLCAtNTAlKScsXHJcbiAgICAgIH0sXHJcbiAgICAgICcmOjphZnRlcic6IHtcclxuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICBjb250ZW50OiAnXCJcIicsXHJcbiAgICAgICAgaGVpZ2h0OiAxMCxcclxuICAgICAgICB3aWR0aDogJzJweCcsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgIHRvcDogJzUwJScsXHJcbiAgICAgICAgbGVmdDogJzUwJScsXHJcbiAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUgLCAtNTAlKScsXHJcbiAgICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjI1cycsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcblxyXG5jb25zdCB2YXJpYW50cyA9IHtcclxuICBvcGVuOiB7XHJcbiAgICBoZWlnaHQ6ICdhdXRvJyxcclxuICAgIG1hcmdpblRvcDogMTIsXHJcbiAgfSxcclxuICBjbG9zZWQ6IHsgaGVpZ2h0OiAwLCBtYXJnaW5Ub3A6IDAgfSxcclxufTtcclxuZXhwb3J0IGZ1bmN0aW9uIEFjY29yZGlvbkNvbnRlbnRzKHsgaXNPcGVuLCAuLi5wcm9wcyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgIGluaXRpYWw9XCJjbG9zZWRcIlxyXG4gICAgICBhbmltYXRlPXtpc09wZW4gPyAnb3BlbicgOiAnY2xvc2VkJ31cclxuICAgICAgdmFyaWFudHM9e3ZhcmlhbnRzfVxyXG4gICAgICBzeD17e1xyXG4gICAgICAgIG92ZXJmbG93WTogJ2hpZGRlbicsXHJcbiAgICAgICAgZm9udFNpemU6IFsxLCBudWxsLCAyXSxcclxuICAgICAgICBsaW5lSGVpZ2h0OiBbMS44NSwgbnVsbCwgbnVsbCwgMS45LCAyXSxcclxuICAgICAgICBjb2xvcjogJyMzNDNENDgnLFxyXG4gICAgICAgIHBhZGRpbmdMZWZ0OiBbJzMzcHgnLCBudWxsLCAnNDVweCddLFxyXG4gICAgICAgICcgPiBkaXYgJzoge1xyXG4gICAgICAgICAgcGFkZGluZ0JvdHRvbTogWzEsIDJdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH19XHJcbiAgICAgIHsuLi5wcm9wc31cclxuICAgIC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEFjY29yZGlvbkl0ZW0gPSAoeyBpc09wZW4sIGNoaWxkcmVuLCAuLi5yZXN0IH0pID0+IChcclxuICA8ZGl2XHJcbiAgICBjc3M9e3tcclxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxyXG4gICAgICBwYWRkaW5nOiAnMTdweCAwJyxcclxuICAgICAgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNFNUVDRjQnLFxyXG4gICAgICAnJjpsYXN0LWNoaWxkJzoge1xyXG4gICAgICAgIGJvcmRlckJvdHRvbTogJzBweCBzb2xpZCcsXHJcbiAgICAgIH0sXHJcbiAgICB9fVxyXG4gICAgey4uLnJlc3R9XHJcbiAgPlxyXG4gICAge2NoaWxkcmVufVxyXG4gIDwvZGl2PlxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHByZXZlbnRDbG9zZSA9IChzdGF0ZSwgY2hhbmdlcykgPT5cclxuICBjaGFuZ2VzLnR5cGUgPT09ICdjbG9zaW5nJyAmJiBzdGF0ZS5vcGVuSW5kZXhlcy5sZW5ndGggPCAyXHJcbiAgICA/IHsgLi4uY2hhbmdlcywgb3BlbkluZGV4ZXM6IHN0YXRlLm9wZW5JbmRleGVzIH1cclxuICAgIDogY2hhbmdlcztcclxuXHJcbmV4cG9ydCBjb25zdCBzaW5nbGUgPSAoc3RhdGUsIGNoYW5nZXMpID0+XHJcbiAgY2hhbmdlcy50eXBlID09PSAnb3BlbmluZydcclxuICAgID8geyAuLi5jaGFuZ2VzLCBvcGVuSW5kZXhlczogY2hhbmdlcy5vcGVuSW5kZXhlcy5zbGljZSgtMSkgfVxyXG4gICAgOiBjaGFuZ2VzO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbWJpbmVSZWR1Y2VycyA9ICguLi5yZWR1Y2VycykgPT4gKHN0YXRlLCBjaGFuZ2VzKSA9PlxyXG4gIHJlZHVjZXJzLnJlZHVjZSgoYWNjLCByZWR1Y2VyKSA9PiByZWR1Y2VyKHN0YXRlLCBhY2MpLCBjaGFuZ2VzKTtcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCwgQm94LCBDb250YWluZXIsIEZsZXggfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCB7IElvSW9zQXJyb3dSb3VuZEJhY2ssIElvSW9zQXJyb3dSb3VuZEZvcndhcmQgfSBmcm9tICdyZWFjdC1pY29ucy9pbyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCdXR0b25Hcm91cCh7IG5leHQsIHByZXZpb3VzIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEZsZXggc3g9e3sgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8Qm94IHN4PXtzdHlsZXMuYnV0dG9uR3JvdXB9PlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtwcmV2aW91c30gYXJpYS1sYWJlbD1cIlByZXZpb3VzXCI+XHJcbiAgICAgICAgICAgIDxJb0lvc0Fycm93Um91bmRCYWNrIC8+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17bmV4dH0gYXJpYS1sYWJlbD1cIk5leHRcIj5cclxuICAgICAgICAgICAgPElvSW9zQXJyb3dSb3VuZEZvcndhcmQgLz5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvRmxleD5cclxuICApO1xyXG59XHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBidXR0b25Hcm91cDoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgbWI6IC00LFxyXG4gICAgYnV0dG9uOiB7XHJcbiAgICAgIGJnOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgICBib3JkZXI6ICcwcHggc29saWQnLFxyXG4gICAgICBmb250U2l6ZTogNDAsXHJcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICBweDogJzJweCcsXHJcbiAgICAgIGNvbG9yOiAnI0JCQzdENycsXHJcbiAgICAgIHRyYW5zaXRpb246ICdhbGwgMC4yNXMnLFxyXG4gICAgICAnJjpmb2N1cyc6IHtcclxuICAgICAgICBvdXRsaW5lOiAwLFxyXG4gICAgICB9LFxyXG4gICAgICAnJjpob3Zlcic6IHtcclxuICAgICAgICBjb2xvcjogJ3RleHQnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJveCB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IFJjRHJhd2VyIGZyb20gJ3JjLWRyYXdlcic7XHJcblxyXG5jb25zdCBEcmF3ZXIgPSAoe1xyXG4gIGNsYXNzTmFtZSxcclxuICBjaGlsZHJlbixcclxuICBjbG9zZUJ1dHRvbixcclxuICBjbG9zZUJ1dHRvblN0eWxlLFxyXG4gIGRyYXdlckhhbmRsZXIsXHJcbiAgdG9nZ2xlSGFuZGxlcixcclxuICBvcGVuLFxyXG4gIHdpZHRoLFxyXG4gIHBsYWNlbWVudCxcclxuICBkcmF3ZXJTdHlsZSxcclxuICBjbG9zZUJ0blN0eWxlLFxyXG4gIC4uLnByb3BzXHJcbn0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEZyYWdtZW50PlxyXG4gICAgICA8UmNEcmF3ZXJcclxuICAgICAgICBvcGVuPXtvcGVufVxyXG4gICAgICAgIG9uQ2xvc2U9e3RvZ2dsZUhhbmRsZXJ9XHJcbiAgICAgICAgY2xhc3NOYW1lPXtgZHJhd2VyICR7Y2xhc3NOYW1lID8gY2xhc3NOYW1lIDogJyd9YC50cmltKCl9XHJcbiAgICAgICAgd2lkdGg9e3dpZHRofVxyXG4gICAgICAgIHBsYWNlbWVudD17cGxhY2VtZW50fVxyXG4gICAgICAgIGhhbmRsZXI9e2ZhbHNlfVxyXG4gICAgICAgIGxldmVsPXtudWxsfVxyXG4gICAgICAgIGR1cmF0aW9uPVwiMC40c1wiXHJcbiAgICAgICAgey4uLnByb3BzfVxyXG4gICAgICA+XHJcbiAgICAgICAge2Nsb3NlQnV0dG9uICYmIChcclxuICAgICAgICAgIDxCb3ggYXM9XCJkaXZcIiBvbkNsaWNrPXt0b2dnbGVIYW5kbGVyfSBzeD17Y2xvc2VCdG5TdHlsZX0+XHJcbiAgICAgICAgICAgIHtjbG9zZUJ1dHRvbn1cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPEJveCBzeD17ZHJhd2VyU3R5bGV9PntjaGlsZHJlbn08L0JveD5cclxuICAgICAgPC9SY0RyYXdlcj5cclxuICAgICAgPEJveFxyXG4gICAgICAgIGNsYXNzTmFtZT1cImRyYXdlcl9faGFuZGxlclwiXHJcbiAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogJ2lubGluZS1ibG9jaycgfX1cclxuICAgICAgICBvbkNsaWNrPXt0b2dnbGVIYW5kbGVyfVxyXG4gICAgICA+XHJcbiAgICAgICAge2RyYXdlckhhbmRsZXJ9XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9GcmFnbWVudD5cclxuICApO1xyXG59O1xyXG5cclxuRHJhd2VyLmRlZmF1bHRQcm9wcyA9IHtcclxuICB3aWR0aDogJzMyMHB4JyxcclxuICBwbGFjZW1lbnQ6ICdsZWZ0JyxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERyYXdlcjtcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCwgSW1hZ2UsIEJveCwgSGVhZGluZywgVGV4dCB9IGZyb20gJ3RoZW1lLXVpJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZlYXR1cmVDYXJkQ29sdW1uKHtcclxuICBzcmMsXHJcbiAgYWx0VGV4dCA9ICdkZWZhdWx0IGFsdCB0ZXh0JyxcclxuICB0aXRsZSxcclxuICB0ZXh0LFxyXG59KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggc3g9e3N0eWxlcy5jYXJkfT5cclxuICAgICAgPEltYWdlIHNyYz17c3JjfSBhbHQ9e2FsdFRleHR9IHN4PXtzdHlsZXMuaW1nfSAvPlxyXG5cclxuICAgICAgPEJveCBzeD17c3R5bGVzLndyYXBwZXJ9PlxyXG4gICAgICAgIDxIZWFkaW5nIHN4PXtzdHlsZXMud3JhcHBlci50aXRsZX0+e3RpdGxlfTwvSGVhZGluZz5cclxuICAgICAgICA8VGV4dCBzeD17c3R5bGVzLndyYXBwZXIuc3ViVGl0bGV9Pnt0ZXh0fTwvVGV4dD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgY2FyZDoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnLFxyXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gIH0sXHJcbiAgaW1nOiB7XHJcbiAgICBteDogJ2F1dG8nLFxyXG4gICAgbWI6IFszLCBudWxsLCA0LCBudWxsLCBudWxsLCA1XSxcclxuICAgIHdpZHRoOiBbJzgwcHgnLCAnOTBweCcsIG51bGwsIG51bGwsIG51bGwsICcxMDBweCcsICdhdXRvJ10sXHJcbiAgfSxcclxuICB3cmFwcGVyOiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICB0aXRsZToge1xyXG4gICAgICBmb250U2l6ZTogWzMsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDRdLFxyXG4gICAgICBjb2xvcjogJ2hlYWRpbmdfc2Vjb25kYXJ5JyxcclxuICAgICAgbGluZUhlaWdodDogMS40LFxyXG4gICAgICBmb250V2VpZ2h0OiA3MDAsXHJcbiAgICAgIG1iOiBbMiwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgM10sXHJcbiAgICB9LFxyXG5cclxuICAgIHN1YlRpdGxlOiB7XHJcbiAgICAgIGZvbnRTaXplOiAxLFxyXG4gICAgICBmb250V2VpZ2h0OiA0MDAsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IFsxLjg1LCBudWxsLCBudWxsLCAxLjksIDJdLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4LCBJbWFnZSwgQm94LCBIZWFkaW5nLCBUZXh0IH0gZnJvbSAndGhlbWUtdWknO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmVhdHVyZUNhcmQoe1xyXG4gIHNyYyxcclxuICBhbHRUZXh0ID0gJ2RlZmF1bHQgYWx0IHRleHQnLFxyXG4gIHRpdGxlLFxyXG4gIHRleHQsXHJcbn0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBzeD17c3R5bGVzLmNhcmR9PlxyXG4gICAgICA8SW1hZ2Ugc3JjPXtzcmN9IGFsdD17YWx0VGV4dH0gc3g9e3N0eWxlcy5pbWd9IC8+XHJcblxyXG4gICAgICA8Qm94IHN4PXtzdHlsZXMud3JhcHBlcn0+XHJcbiAgICAgICAgPEhlYWRpbmcgc3g9e3N0eWxlcy53cmFwcGVyLnRpdGxlfT57dGl0bGV9PC9IZWFkaW5nPlxyXG4gICAgICAgIDxUZXh0IHN4PXtzdHlsZXMud3JhcHBlci5zdWJUaXRsZX0+e3RleHR9PC9UZXh0PlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBjYXJkOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCcsXHJcbiAgfSxcclxuXHJcbiAgaW1nOiB7XHJcbiAgICB3aWR0aDogWyc2MHB4JywgbnVsbCwgbnVsbCwgbnVsbCwgJzU1cHgnLCAnNzBweCcsIG51bGwsICc4MHB4J10sXHJcbiAgICBoZWlnaHQ6ICdhdXRvJyxcclxuICAgIGZsZXhTaHJpbms6IDAsXHJcbiAgICBtcjogWzMsIDQsIG51bGwsIG51bGwsIDMsIDQsIG51bGwsIDVdLFxyXG4gIH0sXHJcbiAgd3JhcHBlcjoge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgbXQ6ICctNXB4JyxcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgIGZvbnRTaXplOiBbMywgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgNF0sXHJcbiAgICAgIGNvbG9yOiAnaGVhZGluZ19zZWNvbmRhcnknLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAxLjQsXHJcbiAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICAgICAgbWI6IFsyLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAzXSxcclxuICAgICAgbXQ6ICcycHgnLFxyXG4gICAgfSxcclxuICAgIHN1YlRpdGxlOiB7XHJcbiAgICAgIGZvbnRTaXplOiAxLFxyXG4gICAgICBmb250V2VpZ2h0OiA0MDAsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IFsxLjg1LCBudWxsLCAyXSxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgW1xyXG4gIHtcclxuICAgIGhlYWRlcjogJ0Fib3V0IFVzJyxcclxuICAgIGl0ZW1zOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnLycsXHJcbiAgICAgICAgbGFiZWw6ICdTdXBwb3J0IENlbnRlcicsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnLycsXHJcbiAgICAgICAgbGFiZWw6ICdDdXN0b21lciBTdXBwb3J0JyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICcvJyxcclxuICAgICAgICBsYWJlbDogJ0Fib3V0IFVzJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICcvJyxcclxuICAgICAgICBsYWJlbDogJ0NvcHlyaWdodCcsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnLycsXHJcbiAgICAgICAgbGFiZWw6ICdQb3B1bGFyIENhbXBhaWduJyxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBoZWFkZXI6ICdPdXIgSW5mb3JtYXRpb24nLFxyXG4gICAgaXRlbXM6IFtcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICcvJyxcclxuICAgICAgICBsYWJlbDogJ1JldHVybiBQb2xpY3kgJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICcvJyxcclxuICAgICAgICBsYWJlbDogJ1ByaXZhY3kgUG9saWN5JyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICcvJyxcclxuICAgICAgICBsYWJlbDogJ1Rlcm1zICYgQ29uZGl0aW9ucycsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnLycsXHJcbiAgICAgICAgbGFiZWw6ICdTaXRlIE1hcCcsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnLycsXHJcbiAgICAgICAgbGFiZWw6ICdTdG9yZSBIb3VycycsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaGVhZGVyOiAnTXkgQWNjb3VudCcsXHJcbiAgICBpdGVtczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJy8nLFxyXG4gICAgICAgIGxhYmVsOiAnUHJlc3MgaW5xdWlyaWVzJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICcvJyxcclxuICAgICAgICBsYWJlbDogJ1NvY2lhbCBtZWRpYSAnLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJy8nLFxyXG4gICAgICAgIGxhYmVsOiAnZGlyZWN0b3JpZXMnLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJy8nLFxyXG4gICAgICAgIGxhYmVsOiAnSW1hZ2VzICYgQi1yb2xsJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICcvJyxcclxuICAgICAgICBsYWJlbDogJ1Blcm1pc3Npb25zJyxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBoZWFkZXI6ICdQb2xpY3knLFxyXG4gICAgaXRlbXM6IFtcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICcvJyxcclxuICAgICAgICBsYWJlbDogJ0FwcGxpY2F0aW9uIHNlY3VyaXR5JyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICcvJyxcclxuICAgICAgICBsYWJlbDogJ1NvZnR3YXJlIHByaW5jaXBsZXMnLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJy8nLFxyXG4gICAgICAgIGxhYmVsOiAnVW53YW50ZWQgc29mdHdhcmUgcG9saWN5JyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICcvJyxcclxuICAgICAgICBsYWJlbDogJ1Jlc3BvbnNpYmxlIHN1cHBseSBjaGFpbicsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbl07XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3gsIEhlYWRpbmcsIEJveCwgQ29udGFpbmVyLCBUZXh0IH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnY29tcG9uZW50cy9saW5rJztcclxuaW1wb3J0IG1lbnVJdGVtcyBmcm9tICcuL2Zvb3Rlci5kYXRhJztcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9vdGVyIHN4PXtzdHlsZXMuZm9vdGVyfT5cclxuICAgICAgPENvbnRhaW5lciBzeD17c3R5bGVzLmZvb3Rlci5jb250YWluZXJ9PlxyXG4gICAgICAgIDxCb3ggc3g9e3N0eWxlcy5mb290ZXIuZm9vdGVyVG9wQXJlYX0+XHJcbiAgICAgICAgICB7bWVudUl0ZW1zLm1hcCgoeyBoZWFkZXIsIGl0ZW1zIH0sIGkpID0+IChcclxuICAgICAgICAgICAgPEJveCBzeD17c3R5bGVzLmZvb3Rlci5tZW51c30ga2V5PXtpfT5cclxuICAgICAgICAgICAgICA8SGVhZGluZyBzeD17c3R5bGVzLmZvb3Rlci5oZWFkaW5nfT57aGVhZGVyfTwvSGVhZGluZz5cclxuICAgICAgICAgICAgICA8bmF2PlxyXG4gICAgICAgICAgICAgICAge2l0ZW1zLm1hcCgoeyBwYXRoLCBsYWJlbCB9LCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aD17cGF0aH1cclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2xhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgIHN4PXtzdHlsZXMuZm9vdGVyLmxpbmt9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDxUZXh0IHN4PXtzdHlsZXMuZm9vdGVyLmNvcHlyaWdodH0+XHJcbiAgICAgICAgQWxsIHJpZ2h0IHJlc2VydmVkIC0gRGVzaWduICYgRGV2ZWxvcGVkIGJ5XHJcbiAgICAgICAgPExpbmsgcGF0aD1cImh0dHBzOi8vcmVkcS5pby9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgIFJlZFEsIEluY1xyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9UZXh0PlxyXG4gICAgPC9mb290ZXI+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGZvb3Rlcjoge1xyXG4gICAgY29udGFpbmVyOiB7XHJcbiAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgIGFsaWduSXRlbXM6ICdzdHJldGNoJyxcclxuICAgIH0sXHJcbiAgICBmb290ZXJUb3BBcmVhOiB7XHJcbiAgICAgIGJvcmRlclRvcDogJzFweCBzb2xpZCcsXHJcbiAgICAgIGJvcmRlclRvcENvbG9yOiAnYm9yZGVyX2NvbG9yJyxcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBmbGV4V3JhcDogJ3dyYXAnLFxyXG4gICAgICBwdDogWzcsIG51bGwsIDhdLFxyXG4gICAgICBwYjogWycxMHB4JywgbnVsbCwgbnVsbCwgJzIwcHgnXSxcclxuICAgICAgcHg6IFswLCBudWxsLCBudWxsLCBudWxsLCA0XSxcclxuICAgIH0sXHJcbiAgICBtZW51czoge1xyXG4gICAgICB3aWR0aDogWyc1MCUnLCBudWxsLCBudWxsLCAnMjUlJ10sXHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICAgIG1iOiBbJzQwcHgnLCBudWxsLCBudWxsLCAnNjBweCddLFxyXG4gICAgfSxcclxuXHJcbiAgICBoZWFkaW5nOiB7XHJcbiAgICAgIGZvbnRTaXplOiBbMywgbnVsbCwgbnVsbCwgNF0sXHJcbiAgICAgIGNvbG9yOiAndGV4dF9zZWNvbmRhcnknLFxyXG4gICAgICBmb250V2VpZ2h0OiAnNTAwJyxcclxuICAgICAgbWI6IFszLCA0LCA1LCBudWxsLCA2XSxcclxuICAgICAgbGluZUhlaWdodDogJzEuMzUnLFxyXG4gICAgfSxcclxuXHJcbiAgICBsaW5rOiB7XHJcbiAgICAgIGZvbnRTaXplOiBbJzE0cHgnLCBudWxsLCAxXSxcclxuICAgICAgY29sb3I6ICd0ZXh0JyxcclxuICAgICAgZm9udFdlaWdodDogJ2JvZHknLFxyXG4gICAgICBtYjogMixcclxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgIHRyYW5zaXRpb246ICdhbGwgMC4zNXMnLFxyXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxyXG4gICAgICBsaW5lSGVpZ2h0OiBbMS41LCBudWxsLCBudWxsLCAxLjYsIDEuOF0sXHJcbiAgICAgICc6aG92ZXInOiB7XHJcbiAgICAgICAgY29sb3I6ICdwcmltYXJ5JyxcclxuICAgICAgfSxcclxuICAgICAgJzpsYXN0LWNoaWxkJzoge1xyXG4gICAgICAgIG1iOiAnMHB4JyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBjb3B5cmlnaHQ6IHtcclxuICAgICAgZm9udFNpemU6IFsnMTRweCcsIG51bGwsIDFdLFxyXG4gICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICBwOiBbJzIwcHggMjBweCddLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRkNGREZFJyxcclxuICAgICAgY29sb3I6ICd0ZXh0JyxcclxuICAgICAgYToge1xyXG4gICAgICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXHJcbiAgICAgICAgY29sb3I6ICdpbmhlcml0JyxcclxuICAgICAgICBwbDogMSxcclxuICAgICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuMjVzJyxcclxuICAgICAgICAnJjpob3Zlcic6IHtcclxuICAgICAgICAgIGNvbG9yOiAncHJpbWFyeScsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgW1xyXG4gIHtcclxuICAgIHBhdGg6ICdob21lJyxcclxuICAgIGxhYmVsOiAnSG9tZScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAnZmVhdHVyZScsXHJcbiAgICBsYWJlbDogJ0ZlYXR1cmVzJyxcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICd0ZXN0aW1vbmlhbCcsXHJcbiAgICBsYWJlbDogJ1Rlc3RpbW9uaWFsJyxcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICdwcmljaW5nJyxcclxuICAgIGxhYmVsOiAnUHJpY2luZycsXHJcbiAgfSxcclxuXTtcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCwgQ29udGFpbmVyLCBGbGV4LCBCdXR0b24gfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCB7IGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtc2Nyb2xsJztcclxuaW1wb3J0IExvZ28gZnJvbSAnY29tcG9uZW50cy9sb2dvJztcclxuaW1wb3J0IExvZ29EYXJrIGZyb20gJ2Fzc2V0cy9sb2dvLWRhcmsucG5nJztcclxuaW1wb3J0IExvZ29XaGl0ZSBmcm9tICdhc3NldHMvbG9nby5wbmcnO1xyXG5pbXBvcnQgeyBEcmF3ZXJQcm92aWRlciB9IGZyb20gJy4uLy4uL2NvbnRleHRzL2RyYXdlci9kcmF3ZXIucHJvdmlkZXInO1xyXG5pbXBvcnQgTW9iaWxlRHJhd2VyIGZyb20gJy4vbW9iaWxlLWRyYXdlcic7XHJcbmltcG9ydCBtZW51SXRlbXMgZnJvbSAnLi9oZWFkZXIuZGF0YSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoeyBjbGFzc05hbWUgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8RHJhd2VyUHJvdmlkZXI+XHJcbiAgICAgIDxoZWFkZXIgc3g9e3N0eWxlcy5oZWFkZXJ9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBpZD1cImhlYWRlclwiPlxyXG4gICAgICAgIDxDb250YWluZXIgc3g9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgPExvZ28gc3JjPXtjbGFzc05hbWUgPT09ICdzdGlja3knID8gTG9nb0RhcmsgOiBMb2dvV2hpdGV9IC8+XHJcbiAgICAgICAgICA8aDEgc3R5bGU9e3tmb250U2l6ZTonMXJlbSd9fT5UaGUgV2F5IG9mIFN1Y2Nlc3M8L2gxPlxyXG4gICAgICAgICAgPEZsZXggYXM9XCJuYXZcIiBzeD17c3R5bGVzLm5hdn0+XHJcbiAgICAgICAgICAgIHttZW51SXRlbXMubWFwKCh7IHBhdGgsIGxhYmVsIH0sIGkpID0+IChcclxuICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgYWN0aXZlQ2xhc3M9XCJhY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgdG89e3BhdGh9XHJcbiAgICAgICAgICAgICAgICBzcHk9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBzbW9vdGg9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBvZmZzZXQ9ey03MH1cclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uPXs1MDB9XHJcbiAgICAgICAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2xhYmVsfVxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L0ZsZXg+XHJcblxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJkb25hdGVfX2J0blwiXHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiR2V0IFN0YXJ0ZWRcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBHZXQgU3RhcnRlZFxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcblxyXG4gICAgICAgICAgPE1vYmlsZURyYXdlciAvPlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8L2hlYWRlcj5cclxuICAgIDwvRHJhd2VyUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgcG9zaXRpb25BbmltID0ga2V5ZnJhbWVzYFxyXG4gIGZyb20ge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGhlYWRlcjoge1xyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcclxuICAgIHB5OiA0LFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgdG9wOiAwLFxyXG4gICAgbGVmdDogMCxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcclxuICAgIHRyYW5zaXRpb246ICdhbGwgMC41cyBlYXNlJyxcclxuICAgIGFuaW1hdGlvbjogYCR7cG9zaXRpb25BbmltfSAwLjRzIGVhc2VgLFxyXG4gICAgJy5kb25hdGVfX2J0bic6IHtcclxuICAgICAgZmxleFNocmluazogMCxcclxuICAgICAgbXI6IFsxNSwgMjAsIG51bGwsIG51bGwsIDBdLFxyXG4gICAgICBtbDogWydhdXRvJywgbnVsbCwgbnVsbCwgbnVsbCwgMF0sXHJcbiAgICB9LFxyXG4gICAgJyYuc3RpY2t5Jzoge1xyXG4gICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnYmFja2dyb3VuZCcsXHJcbiAgICAgIGNvbG9yOiAnIzAwMDAwMCcsXHJcbiAgICAgIGJveFNoYWRvdzogJzAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDYpJyxcclxuICAgICAgcHk6IDMsXHJcbiAgICAgICduZXYgPiBhJzoge1xyXG4gICAgICAgIGNvbG9yOiAndGV4dCcsXHJcbiAgICAgIH0sXHJcbiAgICAgICcuZG9uYXRlX19idG4nOiB7XHJcbiAgICAgICAgYm9yZGVyQ29sb3I6ICdwcmltYXJ5JyxcclxuICAgICAgICBjb2xvcjogJ3ByaW1hcnknLFxyXG4gICAgICAgICcmOmhvdmVyJzoge1xyXG4gICAgICAgICAgYm94U2hhZG93OiAncmdiYSgzMSwgNjIsIDExOCwgMC41NykgMHB4IDlweCAyMHB4IC01cHgnLFxyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncHJpbWFyeScsXHJcbiAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGNvbnRhaW5lcjoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gIH0sXHJcbiAgbmF2OiB7XHJcbiAgICBteDogJ2F1dG8nLFxyXG4gICAgZGlzcGxheTogJ25vbmUnLFxyXG4gICAgJ0BtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCknOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICB9LFxyXG4gICAgYToge1xyXG4gICAgICBmb250U2l6ZTogJzE2cHgnLFxyXG4gICAgICBmb250V2VpZ2h0OiAnNDAwJyxcclxuICAgICAgcHg6IDI1LFxyXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICAgbGluZUhlaWdodDogJzEuMicsXHJcbiAgICAgICcmLmFjdGl2ZSc6IHtcclxuICAgICAgICBjb2xvcjogJ3NlY29uZGFyeScsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCb3ggfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCB7IFNjcm9sbGJhcnMgfSBmcm9tICdyZWFjdC1jdXN0b20tc2Nyb2xsYmFycyc7XHJcbmltcG9ydCBEcmF3ZXIgZnJvbSAnY29tcG9uZW50cy9kcmF3ZXInO1xyXG5pbXBvcnQgeyBEcmF3ZXJDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dHMvZHJhd2VyL2RyYXdlci5jb250ZXh0JztcclxuaW1wb3J0IHsgSW9NZENsb3NlLCBJb01kTWVudSB9IGZyb20gJ3JlYWN0LWljb25zL2lvJztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXNjcm9sbCc7XHJcbmltcG9ydCB7XHJcbiAgRmFGYWNlYm9va0YsXHJcbiAgRmFUd2l0dGVyLFxyXG4gIEZhR2l0aHViQWx0LFxyXG4gIEZhRHJpYmJibGUsXHJcbn0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xyXG5pbXBvcnQgbWVudUl0ZW1zIGZyb20gJy4vaGVhZGVyLmRhdGEnO1xyXG5cclxuY29uc3Qgc29jaWFsID0gW1xyXG4gIHtcclxuICAgIHBhdGg6ICcvJyxcclxuICAgIGljb246IDxGYUZhY2Vib29rRiAvPixcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICcvJyxcclxuICAgIGljb246IDxGYVR3aXR0ZXIgLz4sXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAnLycsXHJcbiAgICBpY29uOiA8RmFHaXRodWJBbHQgLz4sXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAnLycsXHJcbiAgICBpY29uOiA8RmFEcmliYmJsZSAvPixcclxuICB9LFxyXG5dO1xyXG5cclxuY29uc3QgTW9iaWxlRHJhd2VyID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgc3RhdGUsIGRpc3BhdGNoIH0gPSB1c2VDb250ZXh0KERyYXdlckNvbnRleHQpO1xyXG5cclxuICAvLyBUb2dnbGUgZHJhd2VyXHJcbiAgY29uc3QgdG9nZ2xlSGFuZGxlciA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogJ1RPR0dMRScsXHJcbiAgICB9KTtcclxuICB9LCBbZGlzcGF0Y2hdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxEcmF3ZXJcclxuICAgICAgd2lkdGg9XCIzMjBweFwiXHJcbiAgICAgIGRyYXdlckhhbmRsZXI9e1xyXG4gICAgICAgIDxCb3ggc3g9e3N0eWxlcy5oYW5kbGVyfT5cclxuICAgICAgICAgIDxJb01kTWVudSBzaXplPVwiMjZweFwiIC8+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIH1cclxuICAgICAgb3Blbj17c3RhdGUuaXNPcGVufVxyXG4gICAgICB0b2dnbGVIYW5kbGVyPXt0b2dnbGVIYW5kbGVyfVxyXG4gICAgICBjbG9zZUJ1dHRvbj17PElvTWRDbG9zZSBzaXplPVwiMjRweFwiIGNvbG9yPVwiIzAwMDAwMFwiIC8+fVxyXG4gICAgICBkcmF3ZXJTdHlsZT17c3R5bGVzLmRyYXdlcn1cclxuICAgICAgY2xvc2VCdG5TdHlsZT17c3R5bGVzLmNsb3NlfVxyXG4gICAgPlxyXG4gICAgICA8U2Nyb2xsYmFycyBhdXRvSGlkZT5cclxuICAgICAgICA8Qm94IHN4PXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMubWVudX0+XHJcbiAgICAgICAgICAgIHttZW51SXRlbXMubWFwKCh7IHBhdGgsIGxhYmVsIH0sIGkpID0+IChcclxuICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgYWN0aXZlQ2xhc3M9XCJhY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgdG89e3BhdGh9XHJcbiAgICAgICAgICAgICAgICBzcHk9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBzbW9vdGg9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBvZmZzZXQ9ey03MH1cclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uPXs1MDB9XHJcbiAgICAgICAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2xhYmVsfVxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L0JveD5cclxuXHJcbiAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMubWVudUZvb3Rlcn0+XHJcbiAgICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5zb2NpYWx9PlxyXG4gICAgICAgICAgICAgIHtzb2NpYWwubWFwKCh7IHBhdGgsIGljb24gfSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPEJveCBhcz1cInNwYW5cIiBrZXk9e2l9IHN4PXtzdHlsZXMuc29jaWFsLmljb259PlxyXG4gICAgICAgICAgICAgICAgICA8TGluayB0bz17cGF0aH0+e2ljb259PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvU2Nyb2xsYmFycz5cclxuICAgIDwvRHJhd2VyPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgaGFuZGxlcjoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICBmbGV4U2hyaW5rOiAnMCcsXHJcbiAgICB3aWR0aDogJzI2cHgnLFxyXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAnQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSc6IHtcclxuICAgICAgZGlzcGxheTogJ25vbmUnLFxyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICBkcmF3ZXI6IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ2RhcmsnLFxyXG4gIH0sXHJcblxyXG4gIGNsb3NlOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgdG9wOiAnMjVweCcsXHJcbiAgICByaWdodDogJzMwcHgnLFxyXG4gICAgekluZGV4OiAnMScsXHJcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICB9LFxyXG5cclxuICBjb250ZW50OiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIHB0OiAnMTAwcHgnLFxyXG4gICAgcGI6ICc0MHB4JyxcclxuICAgIHB4OiAnMzBweCcsXHJcbiAgfSxcclxuXHJcbiAgbWVudToge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgYToge1xyXG4gICAgICBmb250U2l6ZTogJzE2cHgnLFxyXG4gICAgICBmb250V2VpZ2h0OiAnNTAwJyxcclxuICAgICAgY29sb3I6ICd0ZXh0X3doaXRlJyxcclxuICAgICAgcHk6ICcxNXB4JyxcclxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjZThlNWU1JyxcclxuICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjI1cycsXHJcbiAgICAgICcmOmhvdmVyJzoge1xyXG4gICAgICAgIGNvbG9yOiAnc2Vjb25kYXJ5JyxcclxuICAgICAgfSxcclxuICAgICAgJyYuYWN0aXZlJzoge1xyXG4gICAgICAgIGNvbG9yOiAnc2Vjb25kYXJ5JyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgbWVudUZvb3Rlcjoge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBtdDogJ2F1dG8nLFxyXG4gIH0sXHJcblxyXG4gIHNvY2lhbDoge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG5cclxuICAgIGljb246IHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICBjb2xvcjogJ3RleHQnLFxyXG4gICAgICBmb250U2l6ZTogMTQsXHJcbiAgICAgIG1yOiAnMTVweCcsXHJcbiAgICAgIHRyYW5zaXRpb246ICdhbGwgMC4yNXMnLFxyXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICAgJzpsYXN0LWNoaWxkJzoge1xyXG4gICAgICAgIG1yOiAnMCcsXHJcbiAgICAgIH0sXHJcbiAgICAgICcmOmhvdmVyJzoge1xyXG4gICAgICAgIGNvbG9yOiAnc2Vjb25kYXJ5JyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgYnV0dG9uOiB7XHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGZvbnRTaXplOiAnMTRweCcsXHJcbiAgICBmdzogJzcwMCcsXHJcbiAgICBoZWlnaHQ6ICc0NXB4JyxcclxuICAgIGJvcmRlclJhZGl1czogJzVweCcsXHJcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgIHB5OiAnMCcsXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vYmlsZURyYXdlcjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgSW1hZ2UgYXMgSW1nIH0gZnJvbSAndGhlbWUtdWknO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW1hZ2UoeyBzcmMsIC4uLnJlc3QgfSkge1xyXG4gIHJldHVybiA8SW1nIHNyYz17c3JjfSB7Li4ucmVzdH0gLz47XHJcbn1cclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU3RpY2t5IGZyb20gJ3JlYWN0LXN0aWNreW5vZGUnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vaGVhZGVyL2hlYWRlcic7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9mb290ZXIvZm9vdGVyJztcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHsgY2hpbGRyZW4gfSkge1xyXG4gIGNvbnN0IFtpc1N0aWNreSwgc2V0SXNTdGlja3ldID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGhhbmRsZVN0YXRlQ2hhbmdlID0gKHN0YXR1cykgPT4ge1xyXG4gICAgaWYgKHN0YXR1cy5zdGF0dXMgPT09IFN0aWNreS5TVEFUVVNfRklYRUQpIHtcclxuICAgICAgc2V0SXNTdGlja3kodHJ1ZSk7XHJcbiAgICB9IGVsc2UgaWYgKHN0YXR1cy5zdGF0dXMgPT09IFN0aWNreS5TVEFUVVNfT1JJR0lOQUwpIHtcclxuICAgICAgc2V0SXNTdGlja3koZmFsc2UpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgPFN0aWNreSBpbm5lclo9ezEwMDF9IHRvcD17MH0gb25TdGF0ZUNoYW5nZT17aGFuZGxlU3RhdGVDaGFuZ2V9PlxyXG4gICAgICAgIDxIZWFkZXIgY2xhc3NOYW1lPXtgJHtpc1N0aWNreSA/ICdzdGlja3knIDogJ3VuU3RpY2t5J31gfSAvPlxyXG4gICAgICA8L1N0aWNreT5cclxuICAgICAgPG1haW5cclxuICAgICAgICBzeD17e1xyXG4gICAgICAgICAgdmFyaWFudDogJ2xheW91dC5tYWluJyxcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L21haW4+XHJcbiAgICAgIDxGb290ZXIgLz5cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgKTtcclxufVxyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4LCBOYXZMaW5rIGFzIE1lbnVMaW5rLCBMaW5rIGFzIEEgfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCBOZXh0TGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5leHBvcnQgZnVuY3Rpb24gTmF2TGluayh7IHBhdGgsIGxhYmVsLCBjaGlsZHJlbiwgLi4ucmVzdCB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxOZXh0TGluayBocmVmPXtwYXRofT5cclxuICAgICAgPE1lbnVMaW5rIHsuLi5yZXN0fT57Y2hpbGRyZW4gPyBjaGlsZHJlbiA6IGxhYmVsfTwvTWVudUxpbms+XHJcbiAgICA8L05leHRMaW5rPlxyXG4gICk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIExpbmsoeyBwYXRoLCBsYWJlbCwgY2hpbGRyZW4sIC4uLnJlc3QgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8QSB7Li4ucmVzdH0gaHJlZj17cGF0aH0+XHJcbiAgICAgIHtjaGlsZHJlbiA/IGNoaWxkcmVuIDogbGFiZWx9XHJcbiAgICA8L0E+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBGbGV4LCBCb3gsIEljb25CdXR0b24gfSBmcm9tICd0aGVtZS11aSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMaXN0KHsgaXRlbXMgPSBbXSwgcGFyZW50U3R5bGUsIGNoaWxkU3R5bGUgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94XHJcbiAgICAgIGFzPVwidWxcIlxyXG4gICAgICBzeD17e1xyXG4gICAgICAgIGxpc3RTdHlsZVR5cGU6ICdub25lJyxcclxuICAgICAgICBtYXJnaW46IDAsXHJcbiAgICAgICAgcGFkZGluZzogMCxcclxuICAgICAgICAuLi5wYXJlbnRTdHlsZSxcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAge2l0ZW1zLm1hcCgoeyBpY29uLCB0ZXh0LCBpc0F2YWlsYWJsZSB9LCBpKSA9PiAoXHJcbiAgICAgICAgPEZsZXhcclxuICAgICAgICAgIGNsYXNzTmFtZT17aXNBdmFpbGFibGUgPyAnb3BlbicgOiAnY2xvc2VkJ31cclxuICAgICAgICAgIGFzPVwibGlcIlxyXG4gICAgICAgICAgc3g9e3sgLi4uY2hpbGRTdHlsZSB9fVxyXG4gICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxJY29uQnV0dG9uIHN4PXtzdHlsZXMubGlzdEljb259IGFyaWEtbGFiZWw9XCJsaXN0IGljb25cIj5cclxuICAgICAgICAgICAge2ljb259XHJcbiAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICB7dGV4dH1cclxuICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICkpfVxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufVxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgbGlzdEljb246IHtcclxuICAgIHdpZHRoOiBbMjUsICczNXB4J10sXHJcbiAgICBoZWlnaHQ6ICdhdXRvJyxcclxuICAgIGNvbG9yOiAnc2Vjb25kYXJ5JyxcclxuICAgIHBhZGRpbmc6IDAsXHJcbiAgICBmb250U2l6ZTogWzIsIDVdLFxyXG4gICAgbWFyZ2luTGVmdDogJy0xcHgnLFxyXG4gICAgZmxleFNocmluazogMCxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1zdGFydCcsXHJcbiAgICBtYXJnaW5Ub3A6IFsxLCAnMnB4J10sXHJcbiAgfSxcclxufTtcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCwgSW1hZ2UgfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdjb21wb25lbnRzL2xpbmsnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9nbyh7IHNyYywgLi4ucmVzdCB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMaW5rXHJcbiAgICAgIHBhdGg9XCIvXCJcclxuICAgICAgc3g9e3tcclxuICAgICAgICB2YXJpYW50OiAnbGlua3MubG9nbycsXHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICAgIG1yOiAxNSxcclxuICAgICAgfX1cclxuICAgICAgey4uLnJlc3R9XHJcbiAgICA+XHJcbiAgICAgIDxJbWFnZSBzcmM9e3NyY30gYWx0PVwic3RhcnR1cCBsYW5kaW5nIGxvZ29cIiBzdHlsZT17e21heFdpZHRoOic0cmVtJ319IC8+XHJcbiAgICBcclxuICAgIDwvTGluaz5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7IEJveCwgQ2FyZCwgVGV4dCwgRmxleCwgSGVhZGluZywgQnV0dG9uIH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGlzdCBmcm9tICcuL2xpc3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJpY2VDYXJkKHtcclxuICBkYXRhOiB7XHJcbiAgICBoZWFkZXIsXHJcbiAgICBuYW1lLFxyXG4gICAgZGVzY3JpcHRpb24sXHJcbiAgICBwcmljZVdpdGhVbml0LFxyXG4gICAgYnV0dG9uVGV4dCA9ICdTdGFydCBGcmVlIFRyaWFsJyxcclxuICAgIHBvaW50cyxcclxuICB9LFxyXG59KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJkIGNsYXNzTmFtZT17aGVhZGVyID8gJ2FjdGl2ZScgOiBudWxsfSBzeD17c3R5bGVzLnByaWNpbmdCb3h9PlxyXG4gICAgICB7aGVhZGVyICYmIDxUZXh0IHN4PXtzdHlsZXMuaGVhZGVyfT57aGVhZGVyfTwvVGV4dD59XHJcbiAgICAgIDxCb3g+XHJcbiAgICAgICAgPEZsZXggc3g9e3N0eWxlcy5wcmljaW5nSGVhZGVyfT5cclxuICAgICAgICAgIDxCb3g+XHJcbiAgICAgICAgICAgIDxIZWFkaW5nIGNsYXNzTmFtZT1cInBhY2thZ2VfX25hbWVcIiBzeD17c3R5bGVzLmhlYWRpbmd9PlxyXG4gICAgICAgICAgICAgIHtuYW1lfVxyXG4gICAgICAgICAgICA8L0hlYWRpbmc+XHJcbiAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgYXM9XCJwXCJcclxuICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogaGVhZGVyID8gMSA6IDAuNyxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBoZWFkZXIgPyAndGV4dCcgOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IFsxLCAyXSxcclxuICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IDEuMyxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2Rlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIHtoZWFkZXIgJiYgKFxyXG4gICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9XCJwYWNrYWdlX19wcmljZVwiIHN4PXtzdHlsZXMucHJpY2V9PlxyXG4gICAgICAgICAgICAgIDxzcGFuPlN0YXJ0aW5nIGZyb208L3NwYW4+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmljZVwiPlxyXG4gICAgICAgICAgICAgICAge3ByaWNlV2l0aFVuaXR9XHJcbiAgICAgICAgICAgICAgICA8c3ViPm1vPC9zdWI+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgIDxMaXN0IGl0ZW1zPXtwb2ludHN9IGNoaWxkU3R5bGU9e3N0eWxlcy5saXN0SXRlbX0gLz5cclxuICAgICAgICA8Qm94XHJcbiAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICBtdDogWyc0MHB4JywgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgJzcwcHgnXSxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICB2YXJpYW50PXtoZWFkZXIgPyAncHJpbWFyeScgOiAnd2hpdGVCdXR0b24nfVxyXG4gICAgICAgICAgICBhcmlhLWxhYmVsPXtidXR0b25UZXh0fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7YnV0dG9uVGV4dH1cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvQ2FyZD5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgcHJpY2luZ0JveDoge1xyXG4gICAgZmxleDogW1xyXG4gICAgICAnMCAxIDEwMCUnLFxyXG4gICAgICBudWxsLFxyXG4gICAgICBudWxsLFxyXG4gICAgICAnMCAxIDUwJScsXHJcbiAgICAgICcwIDEgNDUlJyxcclxuICAgICAgJzAgMSA0MCUnLFxyXG4gICAgICAnMCAxIDM4LjUlJyxcclxuICAgIF0sXHJcbiAgICBiYWNrZ3JvdW5kOiAnIzJGNTM5MicsXHJcbiAgICBib3JkZXJSYWRpdXM6IDEwLFxyXG4gICAgbWw6IFswLCBudWxsLCBudWxsLCA1XSxcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgbXQ6IFsnNDBweCcsIG51bGwsIG51bGwsIDBdLFxyXG4gICAgcDogW1xyXG4gICAgICAnNTBweCAxNXB4IDUwcHgnLFxyXG4gICAgICBudWxsLFxyXG4gICAgICAnNjJweCAyNXB4IDUwcHggMjVweCcsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgICc2MnB4IDcwcHggNTBweCA0MHB4JyxcclxuICAgIF0sXHJcbiAgICAnQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDIwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCknOiB7XHJcbiAgICAgIG1heFdpZHRoOiAnMzgwcHgnLFxyXG4gICAgfSxcclxuICAgICcmOmZpcnN0LW9mLXR5cGUnOiB7XHJcbiAgICAgIG1sOiAwLFxyXG4gICAgICBtdDogMCxcclxuICAgIH0sXHJcbiAgICAnJi5hY3RpdmUnOiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcclxuICAgICAgJy5wYWNrYWdlX19uYW1lJzoge1xyXG4gICAgICAgIGNvbG9yOiAnaGVhZGluZ19zZWNvbmRhcnknLFxyXG4gICAgICB9LFxyXG4gICAgICAnLnBhY2thZ2VfX3ByaWNlID4gc3Bhbic6IHtcclxuICAgICAgICBjb2xvcjogJ3RleHQnLFxyXG4gICAgICB9LFxyXG4gICAgICAnLm9wZW4nOiB7XHJcbiAgICAgICAgY29sb3I6ICd0ZXh0JyxcclxuICAgICAgfSxcclxuICAgICAgJy5jbG9zZWQnOiB7XHJcbiAgICAgICAgY29sb3I6ICd0ZXh0JyxcclxuICAgICAgICBvcGFjaXR5OiAwLjYsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgaGVhZGVyOiB7XHJcbiAgICBoZWlnaHQ6IFsnMjhweCcsIG51bGwsIG51bGwsIG51bGwsICczMnB4J10sXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRUY5RTQ4JyxcclxuICAgIGJvcmRlclJhZGl1czogJzVweCcsXHJcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgICBmb250U2l6ZTogJzE0cHgnLFxyXG4gICAgbGluZUhlaWdodDogJzE4cHgnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICBjb2xvcjogJyNGRkZGRkYnLFxyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICB0b3A6IFszLCBudWxsLCA0XSxcclxuICAgIGxldHRlclNwYWNpbmc6ICctLjE0cHgnLFxyXG4gICAgcHg6ICcxMHB4JyxcclxuICB9LFxyXG5cclxuICBoZWFkaW5nOiB7XHJcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgICBmb250U2l6ZTogWzQsIG51bGwsIG51bGwsIG51bGwsIDVdLFxyXG4gICAgbGluZUhlaWdodDogJzIzcHgnLFxyXG4gICAgY29sb3I6ICcjZmZmZmZmJyxcclxuICAgIG1hcmdpbkJvdHRvbTogWzEsIG51bGwsICcxMnB4J10sXHJcbiAgfSxcclxuICBwcmljaW5nSGVhZGVyOiB7XHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gICAgYWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnLFxyXG4gICAgbWI6IFsnMzVweCcsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICc1MHB4J10sXHJcbiAgfSxcclxuICBwcmljZToge1xyXG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gICAgZm9udFNpemU6IFs0LCBudWxsLCA1LCBudWxsLCAnMjZweCddLFxyXG4gICAgbGluZUhlaWdodDogMSxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGxldHRlclNwYWNpbmc6ICctMC41cHgnLFxyXG4gICAgY29sb3I6ICcjMEYyMTM3JyxcclxuICAgIG1hcmdpbkJvdHRvbTogMCxcclxuICAgIGZsZXhXcmFwOiAnd3JhcCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIHRleHRBbGlnbjogJ3JpZ2h0JyxcclxuICAgIG10OiBbJy0zcHgnLCBudWxsLCAnMnB4J10sXHJcbiAgICAnPiBzcGFuJzoge1xyXG4gICAgICBmb250V2VpZ2h0OiAnYm9keScsXHJcbiAgICAgIGZvbnRTaXplOiBbMSwgMl0sXHJcbiAgICAgIGxpbmVIZWlnaHQ6IDEuMjUsXHJcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICAgIG1hcmdpbkJvdHRvbTogJzEwcHgnLFxyXG4gICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIH0sXHJcbiAgICAnPiAucHJpY2UnOiB7XHJcbiAgICAgIG1hcmdpbkJvdHRvbTogMCxcclxuICAgICAgY29sb3I6ICdzZWNvbmRhcnknLFxyXG4gICAgICAnPiBzdWInOiB7XHJcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgICAgYm90dG9tOiAnNnB4JyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBsaXN0SXRlbToge1xyXG4gICAgZm9udFN0eWxlOiAnbm9ybWFsJyxcclxuICAgIGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxyXG4gICAgZm9udFNpemU6IFsxLCBudWxsLCBudWxsLCBudWxsLCAyXSxcclxuICAgIGxpbmVIZWlnaHQ6IFsxLjcsIG51bGwsIDEuNjVdLFxyXG4gICAgbWFyZ2luQm90dG9tOiBbMywgJzIycHgnXSxcclxuICAgIGFsaWduSXRlbXM6ICdmbGV4LXN0YXJ0JyxcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgcHI6IFsyLCBudWxsLCBudWxsLCBudWxsLCAwLCA2XSxcclxuICAgICcmLmNsb3NlZCc6IHtcclxuICAgICAgb3BhY2l0eTogMC41NSxcclxuICAgICAgYnV0dG9uOiB7XHJcbiAgICAgICAgY29sb3I6ICcjNzg4RkI1JyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRmFTdGFyIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xyXG5cclxuY29uc3QgUmF0aW5nID0gKHsgcmF0aW5nIH0pID0+IHtcclxuICBjb25zdCB0b3RhbFJhdGluZyA9IFtdO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XHJcbiAgICBpZiAoaSA8IHJhdGluZykge1xyXG4gICAgICB0b3RhbFJhdGluZy5wdXNoKFxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJzdGFyXCIga2V5PXtgcmF0aW5nLWtleSR7aX1gfT5cclxuICAgICAgICAgIDxGYVN0YXIgLz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdG90YWxSYXRpbmcucHVzaChcclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwic3Rhci1vXCIga2V5PXtgcmF0aW5nLWtleSR7aX1gfT5cclxuICAgICAgICAgIDxGYVN0YXIgLz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0aW5nXCI+XHJcbiAgICAgIDx1bD57dG90YWxSYXRpbmd9PC91bD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSYXRpbmc7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJveCwgVGV4dCwgSGVhZGluZyB9IGZyb20gJ3RoZW1lLXVpJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlY3Rpb25IZWFkZXIoeyB0aXRsZSwgc2xvZ2FuLCBpc1doaXRlIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBzeD17eyB2YXJpYW50OiAnc2VjdGlvbkhlYWRlcicgfX0+XHJcbiAgICAgIDxUZXh0XHJcbiAgICAgICAgYXM9XCJwXCJcclxuICAgICAgICBzeD17e1xyXG4gICAgICAgICAgdmFyaWFudDogJ3NlY3Rpb25IZWFkZXIuc3ViVGl0bGUnLFxyXG4gICAgICAgICAgY29sb3I6IGlzV2hpdGUgPyAnd2hpdGUnIDogJ2hlYWRpbmcnLFxyXG4gICAgICAgICAgb3BhY2l0eTogaXNXaGl0ZSA/IDAuNyA6IDEsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIHtzbG9nYW59XHJcbiAgICAgIDwvVGV4dD5cclxuICAgICAgPEhlYWRpbmdcclxuICAgICAgICBhcz1cImgyXCJcclxuICAgICAgICBzeD17e1xyXG4gICAgICAgICAgdmFyaWFudDogJ3NlY3Rpb25IZWFkZXIudGl0bGUnLFxyXG4gICAgICAgICAgY29sb3I6IGlzV2hpdGUgPyAnd2hpdGUnIDogJ2hlYWRpbmdfc2Vjb25kYXJ5JyxcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAge3RpdGxlfVxyXG4gICAgICA8L0hlYWRpbmc+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTRU8oe1xyXG4gIGRlc2NyaXB0aW9uID0gJ3N0YXJ0dXAgYXBwcyBsYW5kaW5nIHBhZ2UnLFxyXG4gIGF1dGhvciA9ICdSZWRRLCBJbmMnLFxyXG4gIG1ldGEsXHJcbiAgdGl0bGUgPSAnc3RhcnR1cCBsYW5kaW5nIHRpdGxlJyxcclxufSkge1xyXG4gIGNvbnN0IG1ldGFEYXRhID0gW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiBgZGVzY3JpcHRpb25gLFxyXG4gICAgICBjb250ZW50OiBkZXNjcmlwdGlvbixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHByb3BlcnR5OiBgb2c6dGl0bGVgLFxyXG4gICAgICBjb250ZW50OiB0aXRsZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHByb3BlcnR5OiBgb2c6ZGVzY3JpcHRpb25gLFxyXG4gICAgICBjb250ZW50OiBkZXNjcmlwdGlvbixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHByb3BlcnR5OiBgb2c6dHlwZWAsXHJcbiAgICAgIGNvbnRlbnQ6IGB3ZWJzaXRlYCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IGB0d2l0dGVyOmNhcmRgLFxyXG4gICAgICBjb250ZW50OiBgc3VtbWFyeWAsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBgdHdpdHRlcjpjcmVhdG9yYCxcclxuICAgICAgY29udGVudDogYXV0aG9yLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogYHR3aXR0ZXI6dGl0bGVgLFxyXG4gICAgICBjb250ZW50OiB0aXRsZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IGB0d2l0dGVyOmRlc2NyaXB0aW9uYCxcclxuICAgICAgY29udGVudDogZGVzY3JpcHRpb24sXHJcbiAgICB9LFxyXG4gIF0uY29uY2F0KG1ldGEpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8SGVhZD5cclxuICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxyXG4gICAgICB7bWV0YURhdGEubWFwKCh7IG5hbWUsIGNvbnRlbnQgfSwgaSkgPT4gKFxyXG4gICAgICAgIDxtZXRhIGtleT17aX0gbmFtZT17bmFtZX0gY29udGVudD17Y29udGVudH0gLz5cclxuICAgICAgKSl9XHJcbiAgICA8L0hlYWQ+XHJcbiAgKTtcclxufVxyXG5cclxuU0VPLmRlZmF1bHRQcm9wcyA9IHtcclxuICBsYW5nOiBgZW5gLFxyXG4gIG1ldGE6IFtdLFxyXG59O1xyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4LCBCb3gsIEhlYWRpbmcsIFRleHQsIEJ1dHRvbiwgTGluayB9IGZyb20gJ3RoZW1lLXVpJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRleHRGZWF0dXJlKHtcclxuICBzdWJUaXRsZSxcclxuICB0aXRsZSxcclxuICBkZXNjcmlwdGlvbixcclxuICBidG5OYW1lLFxyXG4gIGJ0blVSTCA9ICcjJyxcclxufSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IHN4PXtzdHlsZXMuY2FyZH0+XHJcbiAgICAgIDxCb3ggc3g9e3N0eWxlcy53cmFwcGVyfT5cclxuICAgICAgICA8VGV4dCBhcz1cInBcIiBzeD17c3R5bGVzLndyYXBwZXIuc3ViVGl0bGV9PlxyXG4gICAgICAgICAge3N1YlRpdGxlfVxyXG4gICAgICAgIDwvVGV4dD5cclxuICAgICAgICA8SGVhZGluZyBhcz1cImgyXCIgc3g9e3N0eWxlcy53cmFwcGVyLnRpdGxlfT5cclxuICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICA8L0hlYWRpbmc+XHJcbiAgICAgIDwvQm94PlxyXG5cclxuICAgICAge2Rlc2NyaXB0aW9uICYmIChcclxuICAgICAgICA8VGV4dCBhcz1cInBcIiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiIHN4PXtzdHlsZXMuZGVzY3JpcHRpb259PlxyXG4gICAgICAgICAge2Rlc2NyaXB0aW9ufVxyXG4gICAgICAgIDwvVGV4dD5cclxuICAgICAgKX1cclxuXHJcbiAgICAgIHtidG5OYW1lICYmIChcclxuICAgICAgICA8TGluayBocmVmPXtidG5VUkx9IHZhcmlhbnQ9XCJkZWZhdWx0XCI+XHJcbiAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgYXJpYS1sYWJlbD17YnRuTmFtZX0+XHJcbiAgICAgICAgICAgIHtidG5OYW1lfVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICApfVxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGNhcmQ6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdmbGV4LXN0YXJ0JyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgZmxleFNocmluazogMCxcclxuICAgIGE6IHtcclxuICAgICAgbTogWycwIGF1dG8nLCBudWxsLCBudWxsLCAwXSxcclxuICAgIH0sXHJcbiAgfSxcclxuICB3cmFwcGVyOiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICBtdDogJy01cHgnLFxyXG4gICAgdGl0bGU6IHtcclxuICAgICAgZm9udFNpemU6IFsnMjRweCcsIG51bGwsICcyOHB4JywgJzMycHgnLCAnMzZweCcsICc0MnB4JywgbnVsbCwgJzQ2cHgnXSxcclxuICAgICAgY29sb3I6ICdoZWFkaW5nX3NlY29uZGFyeScsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IFsxLjM1LCBudWxsLCBudWxsLCAxLjMsIDEuMl0sXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICc3MDAnLFxyXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAnLS41cHgnLFxyXG4gICAgICBtYjogNSxcclxuICAgIH0sXHJcblxyXG4gICAgc3ViVGl0bGU6IHtcclxuICAgICAgZm9udFNpemU6IFswLCBudWxsLCAnMTRweCddLFxyXG4gICAgICBjb2xvcjogJ2hlYWRpbmcnLFxyXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAnMnB4JyxcclxuICAgICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICc3MDAnLFxyXG4gICAgICBtYjogWzIsIG51bGwsIG51bGwsIG51bGwsIDNdLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAxLjUsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZGVzY3JpcHRpb246IHtcclxuICAgIGZvbnRTaXplOiBbJzE1cHgnLCAyLCBudWxsLCBudWxsLCBudWxsLCAnMTdweCcsIG51bGwsIDNdLFxyXG4gICAgZm9udFdlaWdodDogNDAwLFxyXG4gICAgbGluZUhlaWdodDogWzEuODUsIG51bGwsIG51bGwsIDIsIG51bGwsICcyLjInXSxcclxuICAgIGNvbG9yOiAndGV4dF9zZWNvbmRhcnknLFxyXG4gICAgbWI6ICczMHB4JyxcclxuICB9LFxyXG59O1xyXG4iLCJpbXBvcnQgeyB1c2VDcmVhdGVDb250ZXh0IH0gZnJvbSAnLi4vY3JlYXRlLWNvbnRleHQnO1xyXG5pbXBvcnQgeyByZWR1Y2VyLCBpbml0aWFsU3RhdGUgfSBmcm9tICcuL2FwcC5yZWR1Y2VyJztcclxuXHJcbmNvbnN0IFtzdGF0ZSwgdXNlRGlzcGF0Y2gsIHByb3ZpZGVyXSA9IHVzZUNyZWF0ZUNvbnRleHQoaW5pdGlhbFN0YXRlLCByZWR1Y2VyKTtcclxuZXhwb3J0IGNvbnN0IHVzZVN0aWNreVN0YXRlID0gc3RhdGU7XHJcbmV4cG9ydCBjb25zdCB1c2VTdGlja3lEaXNwYXRjaCA9IHVzZURpc3BhdGNoO1xyXG5leHBvcnQgY29uc3QgU3RpY2t5UHJvdmlkZXIgPSBwcm92aWRlcjtcclxuIiwiZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBpc1N0aWNreTogZmFsc2UsXHJcbiAgaXNTaWRlYmFyU3RpY2t5OiB0cnVlLFxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUsIHsgdHlwZSB9KSB7XHJcbiAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICBjYXNlICdTRVRfU1RJQ0tZJzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBpc1N0aWNreTogdHJ1ZSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgJ1JFTU9WRV9TVElDS1knOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGlzU3RpY2t5OiBmYWxzZSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgJ1NFVF9TSURFQkFSX1NUSUNLWSc6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaXNTaWRlYmFyU3RpY2t5OiB0cnVlLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSAnUkVNT1ZFX1NJREVCQVJfU1RJQ0tZJzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBpc1NpZGViYXJTdGlja3k6IGZhbHNlLFxyXG4gICAgICB9O1xyXG4gICAgZGVmYXVsdDoge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuc3VwcG9ydGVkIGFjdGlvbiB0eXBlOiAke3R5cGV9YCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUNyZWF0ZUNvbnRleHQoZGVmYXVsdFZhbHVlLCByZWR1Y2VyKSB7XHJcbiAgY29uc3QgZGVmYXVsdERpc3BhdGNoID0gKCkgPT4gZGVmYXVsdFZhbHVlO1xyXG4gIGNvbnN0IHN0YXRlQ3R4ID0gY3JlYXRlQ29udGV4dChkZWZhdWx0VmFsdWUpO1xyXG4gIGNvbnN0IGRpc3BhdGNoQ3R4ID0gY3JlYXRlQ29udGV4dChkZWZhdWx0RGlzcGF0Y2gpO1xyXG5cclxuICBmdW5jdGlvbiB1c2VTdGF0ZUN0eChwcm9wZXJ0eSkge1xyXG4gICAgY29uc3Qgc3RhdGUgPSB1c2VDb250ZXh0KHN0YXRlQ3R4KTtcclxuICAgIHJldHVybiBzdGF0ZVtwcm9wZXJ0eV07IC8vIG9ubHkgb25lIGRlcHRoIHNlbGVjdG9yIGZvciBjb21wYXJpc29uXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB1c2VEaXNwYXRjaEN0eCgpIHtcclxuICAgIHJldHVybiB1c2VDb250ZXh0KGRpc3BhdGNoQ3R4KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIFByb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xyXG4gICAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSBSZWFjdC51c2VSZWR1Y2VyKHJlZHVjZXIsIGRlZmF1bHRWYWx1ZSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGlzcGF0Y2hDdHguUHJvdmlkZXIgdmFsdWU9e2Rpc3BhdGNofT5cclxuICAgICAgICA8c3RhdGVDdHguUHJvdmlkZXIgdmFsdWU9e3N0YXRlfT57Y2hpbGRyZW59PC9zdGF0ZUN0eC5Qcm92aWRlcj5cclxuICAgICAgPC9kaXNwYXRjaEN0eC5Qcm92aWRlcj5cclxuICAgICk7XHJcbiAgfVxyXG4gIHJldHVybiBbdXNlU3RhdGVDdHgsIHVzZURpc3BhdGNoQ3R4LCBQcm92aWRlcl07XHJcbn1cclxuIiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBjb25zdCBEcmF3ZXJDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSk7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBEcmF3ZXJDb250ZXh0IH0gZnJvbSAnLi9kcmF3ZXIuY29udGV4dCc7XHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBpc09wZW46IGZhbHNlLFxyXG59O1xyXG5cclxuZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSwgYWN0aW9uKSB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSAnVE9HR0xFJzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBpc09wZW46ICFzdGF0ZS5pc09wZW4sXHJcbiAgICAgIH07XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBjb25zdCBEcmF3ZXJQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbFN0YXRlKTtcclxuICByZXR1cm4gKFxyXG4gICAgPERyYXdlckNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgc3RhdGUsIGRpc3BhdGNoIH19PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0RyYXdlckNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IHsgU3RpY2t5UHJvdmlkZXIgfSBmcm9tICdjb250ZXh0cy9hcHAvYXBwLnByb3ZpZGVyJztcclxuaW1wb3J0IHRoZW1lIGZyb20gJ3RoZW1lJztcclxuaW1wb3J0IFNFTyBmcm9tICdjb21wb25lbnRzL3Nlbyc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnY29tcG9uZW50cy9sYXlvdXQnO1xyXG5pbXBvcnQgQmFubmVyIGZyb20gJ3NlY3Rpb25zL2Jhbm5lcic7XHJcbmltcG9ydCBLZXlGZWF0dXJlIGZyb20gJ3NlY3Rpb25zL2tleS1mZWF0dXJlJztcclxuaW1wb3J0IENvcmVGZWF0dXJlIGZyb20gJ3NlY3Rpb25zL2NvcmUtZmVhdHVyZSc7XHJcbmltcG9ydCBGZWF0dXJlIGZyb20gJ3NlY3Rpb25zL2ZlYXR1cmUnO1xyXG5pbXBvcnQgUGFydG5lclNlY3Rpb24gZnJvbSAnc2VjdGlvbnMvcGFydG5lcic7XHJcbmltcG9ydCBXb3JrRmxvdyBmcm9tICdzZWN0aW9ucy93b3JrZmxvdyc7XHJcbmltcG9ydCBUZXN0aW1vbmlhbENhcmQgZnJvbSAnc2VjdGlvbnMvdGVzdGltb25pYWwnO1xyXG5pbXBvcnQgU2VjdXJlUGF5bWVudCBmcm9tICdzZWN0aW9ucy9zZWN1cmUtcGF5bWVudCc7XHJcbmltcG9ydCBQYWNrYWdlIGZyb20gJ3NlY3Rpb25zL3BhY2thZ2UnO1xyXG5pbXBvcnQgRmFxIGZyb20gJ3NlY3Rpb25zL2ZhcSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleFBhZ2UoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XHJcbiAgICAgIDxTdGlja3lQcm92aWRlcj5cclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgPFNFTyB0aXRsZT1cIlN0YXJ0dXAgTGFuZGluZyAwMDRcIiAvPlxyXG4gICAgICAgICAgPEJhbm5lciAvPlxyXG4gICAgICAgICAgPEtleUZlYXR1cmUgLz5cclxuICAgICAgICAgIDxDb3JlRmVhdHVyZSAvPlxyXG4gICAgICAgICAgPEZlYXR1cmUgLz5cclxuICAgICAgICAgIDxQYXJ0bmVyU2VjdGlvbiAvPlxyXG4gICAgICAgICAgPFdvcmtGbG93IC8+XHJcbiAgICAgICAgICA8VGVzdGltb25pYWxDYXJkIC8+XHJcbiAgICAgICAgICA8U2VjdXJlUGF5bWVudCAvPlxyXG4gICAgICAgICAgPFBhY2thZ2UgLz5cclxuICAgICAgICAgIDxGYXEgLz5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgICAgPC9TdGlja3lQcm92aWRlcj5cclxuICAgIDwvVGhlbWVQcm92aWRlcj5cclxuICApO1xyXG59XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3ggfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgRmxleCwgQm94LCBIZWFkaW5nLCBUZXh0LCBJbWFnZSwgQnV0dG9uIH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBNb2RhbFZpZGVvIGZyb20gJ3JlYWN0LW1vZGFsLXZpZGVvJztcclxuaW1wb3J0IHsgRmFQbGF5Q2lyY2xlIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xyXG5pbXBvcnQgQmFubmVyQkcgZnJvbSAnYXNzZXRzL2Jhbm5lckJnLnBuZyc7XHJcbmltcG9ydCBCYW5uZXJUaHVtYiBmcm9tICdhc3NldHMvYmFubmVyLXRodW1iLnBuZyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCYW5uZXIoKSB7XHJcbiAgY29uc3QgW3ZpZGVvT3Blbiwgc2V0VmlkZW9PcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRWaWRlb09wZW4odHJ1ZSk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gc3g9e3N0eWxlcy5iYW5uZXJ9IGlkPVwiaG9tZVwiPlxyXG4gICAgICA8Q29udGFpbmVyIHN4PXtzdHlsZXMuYmFubmVyLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgPEJveCBzeD17c3R5bGVzLmJhbm5lci5jb250ZW50Qm94fT5cclxuICAgICAgICAgIDxIZWFkaW5nIGFzPVwiaDFcIiB2YXJpYW50PVwiaGVyb1ByaW1hcnlcIj5cclxuICAgICAgICAgIERpc2NvdmVyIFJlYWwgS25vd2xlZGdlIHdpdGggZXhwZXJ0c1xyXG4gICAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICAgICAgPFRleHQgYXM9XCJwXCIgdmFyaWFudD1cImhlcm9TZWNvbmRhcnlcIj5cclxuICAgICAgICAgIFRoZSBtb3N0IGRpZmZpY3VsdCBwYXJ0IG9mIG1ha2luZyBhIHN1Y2Nlc3NmdWwgY2FycmllciBpcyBnZXR0aW5nIHN0YXJ0ZWQuIEdpdmUgeW91ciBjYXJlZXIgYSBib29zdCBieSBsZWFybmluZyBpbmR1c3RyeSBza2lsbHMsIHdvcmsgb24gcmVhbC1saWZlIHByb2plY3RzLCBpbnRlcm5zaGlwcywgYW5kIGV4cGVydCBndWlkYW5jZS5cclxuICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgIDxGbGV4PlxyXG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJ3aGl0ZUJ1dHRvblwiIGFyaWEtbGFiZWw9XCJHZXQgU3RhcnRlZFwiPlxyXG4gICAgICAgICAgICAgR2V0IFN0YXJ0ZWRcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPE1vZGFsVmlkZW9cclxuICAgICAgICAgICAgICAgIGNoYW5uZWw9XCJ5b3V0dWJlXCJcclxuICAgICAgICAgICAgICAgIGlzT3Blbj17dmlkZW9PcGVufVxyXG4gICAgICAgICAgICAgICAgdmlkZW9JZD1cIlpOQTlybURzWVZFXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHNldFZpZGVvT3BlbihmYWxzZSl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwidGV4dEJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiV2F0Y2ggVmlkZW9cIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEZhUGxheUNpcmNsZSAvPiBXYXRjaCBWaWRlb1xyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgIFxyXG4gICAgICAgIDwvQm94PlxyXG5cclxuICAgICAgICA8Qm94IHN4PXtzdHlsZXMuYmFubmVyLmltYWdlQm94fT5cclxuICAgICAgICAgIDxJbWFnZSBzcmM9e0Jhbm5lclRodW1ifSBhbHQ9XCJiYW5uZXJcIiAvPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgYmFubmVyOiB7XHJcbiAgICBvdmVyZmxvdzogWydoaWRkZW4nLCAnaW5pdGlhbCcsIG51bGwsICdoaWRkZW4nXSxcclxuICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke0Jhbm5lckJHfSlgLFxyXG4gICAgYmFja2dyb3VuZFJlcGVhdDogYG5vLXJlcGVhdGAsXHJcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICd0b3AgbGVmdCcsXHJcbiAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcclxuICAgIGJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzOiBbMTAwLCAxNTAsIG51bGwsIG51bGwsIG51bGwsIDI1MF0sXHJcbiAgICBwdDogWycxNTBweCcsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICcxNDBweCcsICcxMzBweCddLFxyXG4gICAgcGI6IFsnMTAwcHgnLCBudWxsLCBudWxsLCAnMTEwcHgnLCBudWxsLCAxMCwgJzE1MHB4J10sXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdwcmltYXJ5JyxcclxuICAgIGNvbnRhaW5lcjoge1xyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICB9LFxyXG4gICAgY29udGVudEJveDoge1xyXG4gICAgICB3aWR0aDogWycxMDAlJywgbnVsbCwgJzg1JScsICc1NSUnLCAnNTAlJywgJzU1JSddLFxyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgICBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCcsXHJcbiAgICAgIGZsZXhTaHJpbms6IDAsXHJcbiAgICAgIHB0OiBbMCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgNSwgN10sXHJcbiAgICB9LFxyXG4gICAgaW1hZ2VCb3g6IHtcclxuICAgICAgZGlzcGxheTogWydub25lJywgbnVsbCwgbnVsbCwgJ2Jsb2NrJ10sXHJcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgbWw6IFswLCBudWxsLCBudWxsLCAnLTExMHB4JywgJy0xMTVweCcsICctMTUwcHgnLCAnLTIxMHB4JywgJy0yNzBweCddLFxyXG4gICAgICBtcjogWzAsIG51bGwsIG51bGwsICctMTQ1cHgnLCAnLTE2MHB4JywgJy0xODBweCcsICctMjIwcHgnLCAnLTI5MHB4J10sXHJcbiAgICAgIG10OiBbMCwgbnVsbCwgbnVsbCwgJzQwcHgnLCA0LCA3LCAwXSxcclxuICAgICAgbWI6IFswLCBudWxsLCBudWxsLCBudWxsLCAnLTQ1cHgnLCAnLTcwcHgnLCBudWxsLCAnLTExNXB4J10sXHJcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgICAgdGV4dEFsaWduOiAncmlnaHQnLFxyXG4gICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHNwb25zb3JUaXRsZToge1xyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBmb250U2l6ZTogWzEsIDJdLFxyXG4gICAgb3BhY2l0eTogMC42LFxyXG4gICAgcHI6IDIwLFxyXG4gICAgZmxleFNocmluazogMCxcclxuICAgIHBiOiBbMiwgbnVsbCwgMF0sXHJcbiAgfSxcclxuICBzcG9uc29yQm94OiB7XHJcbiAgICBwdDogWyczNXB4JywgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgJzQ1cHgnXSxcclxuICAgIGZsZXhEaXJlY3Rpb246IFsnY29sdW1uJywgbnVsbCwgJ3JvdyddLFxyXG4gICAgc3BvbnNvcjoge1xyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAnPiBhJzoge1xyXG4gICAgICAgIG1yOiBbNSwgbnVsbCwgbnVsbCwgNCwgNl0sXHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICcmOmxhc3Qtb2YtdHlwZSc6IHtcclxuICAgICAgICAgIG1yOiAwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3gsIENvbnRhaW5lciwgQm94LCBHcmlkLCBUZXh0LCBIZWFkaW5nIH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgVGV4dEZlYXR1cmUgZnJvbSAnY29tcG9uZW50cy90ZXh0LWZlYXR1cmUnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnY29tcG9uZW50cy9pbWFnZSc7XHJcblxyXG5pbXBvcnQgQ29yZUZlYXR1cmVUaHVtYiBmcm9tICdhc3NldHMvY29yZUZlYXR1cmUucG5nJztcclxuaW1wb3J0IEJyaWVmY2FzZSBmcm9tICdhc3NldHMvY29yZS1mZWF0dXJlL2JyaWVmY2FzZS5zdmcnO1xyXG5pbXBvcnQgU2VjdXJlIGZyb20gJ2Fzc2V0cy9jb3JlLWZlYXR1cmUvc2VjdXJlLnN2Zyc7XHJcblxyXG5jb25zdCBkYXRhID0ge1xyXG4gIHN1YlRpdGxlOiAnQ29yZSBmZWF0dXJlcycsXHJcbiAgdGl0bGU6ICdMZWFybixQcmFjdGljZSBhbmQgUGxhY2VkJyxcclxuICBmZWF0dXJlczogW1xyXG4gICAge1xyXG4gICAgICBpZDogMSxcclxuICAgICAgaW1nU3JjOiBCcmllZmNhc2UsXHJcbiAgICAgIGFsdFRleHQ6ICdNZW50b3JzaGlwJyxcclxuICAgICAgdGl0bGU6ICdNZW50b3JzaGlwJyxcclxuICAgICAgdGV4dDpcclxuICAgICAgICAnR2V0IG1lbnRvcnNoaXAgYXQgZWFjaCBwaGFzZSBvZiB5b3VyIGxlYXJuaW5nIGFuZCBsZWFybiB0aGUgcmlnaHQgd2F5ICcsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogMixcclxuICAgICAgaW1nU3JjOiBTZWN1cmUsXHJcbiAgICAgIGFsdFRleHQ6ICdXb3JsZCBDbGFzcyBUcmFpbmluZycsXHJcbiAgICAgIHRpdGxlOiAnVHJhaW5pbmcgQ2FtcHMnLFxyXG4gICAgICB0ZXh0OlxyXG4gICAgICAgICdBIHJlYWx0aW1lIGxlYXJuaW5nIGFuZCBwcmFjdGluZyB0cmFpbmdpbmcgY2FtcHMgd2l0aCBsaXZlIG1lbnRvcnNoaXAgYW5kIHRyYW5pbmcgdG8gYm9vc3QgeW91ciBsZWFybmluZyBhbmQgcmVkdWNlIGxlYXJuaW5nIHRpbWUnLFxyXG4gICAgfSxcclxuICBdLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29yZUZlYXR1cmUoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIHN4PXtzdHlsZXMuY29yZUZlYXR1cmV9PlxyXG4gICAgICA8Q29udGFpbmVyIHN4PXtzdHlsZXMuY29udGFpbmVyQm94fT5cclxuICAgICAgICA8Qm94IHN4PXtzdHlsZXMudGh1bWJuYWlsfT5cclxuICAgICAgICAgIDxJbWFnZSBzcmM9e0NvcmVGZWF0dXJlVGh1bWJ9IGFsdD1cIlRodW1ibmFpbFwiIC8+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPEJveCBzeD17c3R5bGVzLmNvbnRlbnRCb3h9PlxyXG4gICAgICAgICAgPEJveCBzeD17c3R5bGVzLmhlYWRpbmdUb3B9PlxyXG4gICAgICAgICAgICA8VGV4dEZlYXR1cmUgc3ViVGl0bGU9e2RhdGEuc3ViVGl0bGV9IHRpdGxlPXtkYXRhLnRpdGxlfSAvPlxyXG4gICAgICAgICAgPC9Cb3g+XHJcblxyXG4gICAgICAgICAgPEdyaWQgZ2FwPVwiMTVweCAwXCIgY29sdW1ucz17MX0gc3g9e3N0eWxlcy5ncmlkfT5cclxuICAgICAgICAgICAge2RhdGEuZmVhdHVyZXMubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgPEJveCBzeD17c3R5bGVzLmNhcmR9IGtleT17aXRlbS5pZH0+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtpdGVtLmltZ1NyY30gYWx0PXtpdGVtLmFsdFRleHR9IHN4PXtzdHlsZXMuaW1nfSAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy53cmFwcGVyfT5cclxuICAgICAgICAgICAgICAgICAgPEhlYWRpbmcgc3g9e3N0eWxlcy53cmFwcGVyLnRpdGxlfT57aXRlbS50aXRsZX08L0hlYWRpbmc+XHJcbiAgICAgICAgICAgICAgICAgIDxUZXh0IHN4PXtzdHlsZXMud3JhcHBlci5zdWJUaXRsZX0+e2l0ZW0udGV4dH08L1RleHQ+XHJcbiAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBjb3JlRmVhdHVyZToge1xyXG4gICAgcHk6IFswLCBudWxsLCBudWxsLCAyLCBudWxsLCA3XSxcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgJyY6OmJlZm9yZSc6IHtcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcclxuICAgICAgdG9wOiBbJ2F1dG8nLCBudWxsLCBudWxsLCAnNTAlJ10sXHJcbiAgICAgIGJvdHRvbTogWycxMDBweCcsIDAsIG51bGwsICdhdXRvJ10sXHJcbiAgICAgIGxlZnQ6IDAsXHJcbiAgICAgIGJhY2tncm91bmQ6ICdsaW5lYXItZ3JhZGllbnQoLTE1N2RlZywgI0Y2RkFGRCwgI0Y5RkNGQywgI0ZDRkRGQyknLFxyXG4gICAgICBoZWlnaHQ6IFszNTAsIDU1MCwgJzYwJSddLFxyXG4gICAgICB3aWR0aDogJzUwJScsXHJcbiAgICAgIHpJbmRleDogLTEsXHJcbiAgICAgIGJvcmRlclRvcFJpZ2h0UmFkaXVzOiAnNTAlJyxcclxuICAgICAgYm9yZGVyQm90dG9tUmlnaHRSYWRpdXM6ICc1MCUnLFxyXG4gICAgICB0cmFuc2Zvcm06IFsndHJhbnNsYXRlWSgwKScsIG51bGwsIG51bGwsICd0cmFuc2xhdGVZKC01MCUpJ10sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgY29udGFpbmVyQm94OiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiBbJ2NvbHVtbicsIG51bGwsIG51bGwsICdyb3cnXSxcclxuICB9LFxyXG4gIHRodW1ibmFpbDoge1xyXG4gICAgcGw6IFswLCA1LCAwLCBudWxsLCA3LCA5NV0sXHJcbiAgICBwcjogWzAsIDUsIG51bGwsIG51bGwsIG51bGwsIDc1LCA5NV0sXHJcbiAgICBvcmRlcjogWzIsIG51bGwsIG51bGwsIDBdLFxyXG4gIH0sXHJcbiAgY29udGVudEJveDoge1xyXG4gICAgd2lkdGg6IFsnMTAwJScsIDQ1MCwgNTUwLCAzNTAsIDUwMCwgNTcwXSxcclxuICAgIHByOiBbMCwgbnVsbCwgJ2F1dG8nLCBudWxsLCBudWxsLCA4MF0sXHJcbiAgICBwbDogJ2F1dG8nLFxyXG4gICAgZmxleFNocmluazogMCxcclxuICB9LFxyXG4gIGhlYWRpbmdUb3A6IHtcclxuICAgIHBsOiBbMCwgbnVsbCwgbnVsbCwgbnVsbCwgJzM1cHgnLCBudWxsLCAnNTVweCcsIDZdLFxyXG4gICAgbWI6IFszLCBudWxsLCBudWxsLCBudWxsLCAxXSxcclxuICAgIHRleHRBbGlnbjogWydjZW50ZXInLCBudWxsLCBudWxsLCAnbGVmdCddLFxyXG4gIH0sXHJcbiAgZ3JpZDoge1xyXG4gICAgcDogWycwIDBweCAzNXB4JywgbnVsbCwgbnVsbCwgbnVsbCwgJzAgMjBweCA0MHB4JywgbnVsbCwgJzAgNDBweCA0MHB4JywgMF0sXHJcbiAgfSxcclxuICBjYXJkOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCcsXHJcbiAgICBwOiBbXHJcbiAgICAgICcwIDE3cHggMjBweCcsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgICcwIDAgMjBweCcsXHJcbiAgICAgICcyMHB4IDE1cHggMTdweCcsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgICcyNXB4IDMwcHggMjNweCcsXHJcbiAgICBdLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnMTBweCcsXHJcbiAgICB0cmFuc2l0aW9uOiAnYWxsIDAuM3MnLFxyXG4gICAgd2lkdGg6IFsnMTAwJScsICc4NSUnLCBudWxsLCAnMTAwJSddLFxyXG4gICAgbXg6ICdhdXRvJyxcclxuICAgICcmOmhvdmVyJzoge1xyXG4gICAgICBib3hTaGFkb3c6IFtcclxuICAgICAgICAnMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwKScsXHJcbiAgICAgICAgbnVsbCxcclxuICAgICAgICBudWxsLFxyXG4gICAgICAgIG51bGwsXHJcbiAgICAgICAgJzBweCA4cHggMjRweCByZ2JhKDY5LCA4OCwgMTU3LCAwLjA3KScsXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIGltZzoge1xyXG4gICAgd2lkdGg6IFsnNTBweCcsIG51bGwsICc1NXB4J10sXHJcbiAgICBoZWlnaHQ6ICdhdXRvJyxcclxuICAgIGZsZXhTaHJpbms6IDAsXHJcbiAgICBtcjogWzMsIDRdLFxyXG4gIH0sXHJcbiAgd3JhcHBlcjoge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgbXQ6ICctNXB4JyxcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgIGZvbnRTaXplOiAzLFxyXG4gICAgICBjb2xvcjogJ2hlYWRpbmdfc2Vjb25kYXJ5JyxcclxuICAgICAgbGluZUhlaWdodDogMS40LFxyXG4gICAgICBmb250V2VpZ2h0OiA3MDAsXHJcbiAgICAgIG1iOiBbMiwgbnVsbCwgbnVsbCwgbnVsbCwgM10sXHJcbiAgICB9LFxyXG5cclxuICAgIHN1YlRpdGxlOiB7XHJcbiAgICAgIGZvbnRTaXplOiAxLFxyXG4gICAgICBmb250V2VpZ2h0OiA0MDAsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IFsxLjg1LCBudWxsLCAyXSxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCwgQ29udGFpbmVyLCBCb3ggfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCBTZWN0aW9uSGVhZGVyIGZyb20gJ2NvbXBvbmVudHMvc2VjdGlvbi1oZWFkZXInO1xyXG5pbXBvcnQgQWNjb3JkaW9uIGZyb20gJ2NvbXBvbmVudHMvYWNjb3JkaW9uL2FjY29yZGlvbic7XHJcbmNvbnN0IGZhcXMgPSBbXHJcbiAge1xyXG4gICAgdGl0bGU6ICdIb3cgdG8gY29udGFjdCB3aXRoIHJpZGVycyBlbWVyZ2VuY3kgPycsXHJcbiAgICBjb250ZW50czogKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIEdldCB5b3VyIHdlYnNpdGUgYWRzIHRlc3RzIGRlbGl2ZXJlZCBhdCBsZXQgY29sbGVjdCBzYW1wbGUgZnJvbSB0aGVcclxuICAgICAgICB2aWN0b3J5IG9mIHRoZSBtYW5hZ2VtZW50cyB0aGF0IHN1cHBsaWVzIGJlc3QgZGVzaWduIHN5c3RlbSB3aGljaFxyXG4gICAgICAgIGd1aWRlbGluZXMgZXZlciB3aXRoIG11bHRpcGxlIGZlYXR1cmVzLlxyXG4gICAgICA8L2Rpdj5cclxuICAgICksXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ0FwcCBpbnN0YWxsYXRpb24gZmFpbGVkLCBob3cgdG8gdXBkYXRlIHN5c3RlbSBpbmZvcm1hdGlvbj8nLFxyXG4gICAgY29udGVudHM6IChcclxuICAgICAgPGRpdj5cclxuICAgICAgICBSaGlubyBza2luIG1heWJlIHRoaWNrIGJ1dCBpdCBjYW4gYmUgcXVpdGUgc2Vuc2l0aXZlIHRvIHN1bmJ1cm5zIGFuZFxyXG4gICAgICAgIGluc2VjdCBiaXRlcyB3aGljaCBpcyB3aHkgdGhleSBsaWtlIHdhbGxvdyBzbyBtdWNoIOKAkyB3aGVuIHRoZSBtdWQgZHJpZXNcclxuICAgICAgICBpdCBhY3RzIGFzIHByb3RlY3Rpb24gZnJvbSB0aGUgc3VuYnVybnMgYW5kIGluc2VjdHMuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBgV2Vic2l0ZSByZXNwb25zZSB0YWtpbmcgdGltZSwgaG93IHRvIGltcHJvdmU/YCxcclxuICAgIGNvbnRlbnRzOiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgR2V0IHlvdXIgYmxvb2QgdGVzdHMgZGVsaXZlcmVkIGF0IHRoZSBob21lIGNvbGxlY3QgYSBzYW1wbGUgZnJvbVxyXG4gICAgICAgIG1hbmFnZW1lbnQgbmV3cy4gR2V0IHlvdXIgYmxvb2QgdGVzdHMgZGVsaXZlcmVkIGF0IHRoZSBob21lIGNvbGxlY3QgYVxyXG4gICAgICAgIHNhbXBsZSBmcm9tIG1hbmFnZW1lbnQgbmV3cy4gR2V0IHlvdXIgYmxvb2QgdGVzdHMgZGVsaXZlcmVkIGF0IHRoZSBob21lXHJcbiAgICAgICAgY29sbGVjdCBhIHNhbXBsZSBmcm9tIG1hbmFnZW1lbnQgbmV3cy4gR2V0IHlvdXIgYmxvb2QgdGVzdHMgZGVsaXZlcmVkIGF0XHJcbiAgICAgICAgdGhlIGhvbWUuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBgTmV3IHVwZGF0ZSBmaXhlZCBhbGwgYnVnIGFuZCBpc3N1ZXNgLFxyXG4gICAgY29udGVudHM6IChcclxuICAgICAgPGRpdj5cclxuICAgICAgICBJZiB5b3XigJlyZSBsb29raW5nIHRvIGh1bnQgYSB1bmljb3JuLCBidXQgZG9u4oCZdCBrbm93IHdoZXJlIHRvIGJlZ2luLCB0cnlcclxuICAgICAgICBMYWtlIFN1cGVyaW9yIFN0YXRlIFVuaXZlcnNpdHkgaW4gU2F1bHQgU3RlLiBNYXJpZSwgTWljaGlnYW4uIFNpbmNlXHJcbiAgICAgICAgMTk3MSwgdGhlIHVuaXZlcnNpdHkgaGFzIGlzc3VlZCBwZXJtaXRzIHRvIHVuaWNvcm4gcXVlc3RlcnMuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKSxcclxuICB9LFxyXG5dO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGYXEoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIHN4PXt7IHZhcmlhbnQ6ICdzZWN0aW9uLmZhcScgfX0+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPFNlY3Rpb25IZWFkZXJcclxuICAgICAgICAgIHRpdGxlPVwiRnJlcXVlbnRseSBhc2tlZCBxdWVzdGlvblwiXHJcbiAgICAgICAgICBzbG9nYW49XCJHZXQgeW91ciBxdWVzdGlvbiBhbnN3ZXJcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEJveFxyXG4gICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICB3aWR0aDogWycxMDAlJywgbnVsbCwgbnVsbCwgJzY1MHB4JywgJzc0NXB4J10sXHJcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgICAgICAgICBteDogJ2F1dG8nLFxyXG4gICAgICAgICAgICBteTogLTQsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxBY2NvcmRpb24gaXRlbXM9e2ZhcXN9IC8+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBHcmlkIH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgU2VjdGlvbkhlYWRlciBmcm9tICdjb21wb25lbnRzL3NlY3Rpb24taGVhZGVyJztcclxuaW1wb3J0IEZlYXR1cmVDYXJkIGZyb20gJ2NvbXBvbmVudHMvZmVhdHVyZS1jYXJkLmpzJztcclxuaW1wb3J0IFNtYXJ0IGZyb20gJ2Fzc2V0cy9mZWF0dXJlL3NtYXJ0LnN2Zyc7XHJcbmltcG9ydCBXaW5uZXIgZnJvbSAnYXNzZXRzL2ZlYXR1cmUvd2lubmVyLnN2Zyc7XHJcbmltcG9ydCBDbG91ZCBmcm9tICdhc3NldHMvZmVhdHVyZS9jbG91ZC5zdmcnO1xyXG5pbXBvcnQgU2V0dGluZyBmcm9tICdhc3NldHMvZmVhdHVyZS9zZXR0aW5nLnN2Zyc7XHJcbmltcG9ydCBEZXNpZ24gZnJvbSAnYXNzZXRzL2ZlYXR1cmUvZGVzaWduLnN2Zyc7XHJcbmltcG9ydCBDaGF0IGZyb20gJ2Fzc2V0cy9mZWF0dXJlL2NoYXQuc3ZnJztcclxuXHJcbmNvbnN0IGRhdGEgPSBbXHJcbiAge1xyXG4gICAgaWQ6IDEsXHJcbiAgICBpbWdTcmM6IFNtYXJ0LFxyXG4gICAgYWx0VGV4dDogJ1NtYXJ0JyxcclxuICAgIHRpdGxlOiAnU21hcnQgRmVhdHVyZXMnLFxyXG4gICAgdGV4dDpcclxuICAgICAgJ0dldCB5b3VyIGJsb29kIHRlc3RzIGRlbGl2ZXJlZCBhdCBsZXQgaG9tZSBjb2xsZWN0IHNhbXBsZSBmcm9tIHRoZSB2aWN0b3J5IG9mIHRoZSBtYW5hZ2VtZW50cy4nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDIsXHJcbiAgICBpbWdTcmM6IFdpbm5lcixcclxuICAgIGFsdFRleHQ6ICdQZXJmb3JtYW5jZScsXHJcbiAgICB0aXRsZTogJ0Zhc3QgUGVyZm9ybWFuY2UnLFxyXG4gICAgdGV4dDpcclxuICAgICAgJ0dldCB5b3VyIGJsb29kIHRlc3RzIGRlbGl2ZXJlZCBhdCBsZXQgaG9tZSBjb2xsZWN0IHNhbXBsZSBmcm9tIHRoZSB2aWN0b3J5IG9mIHRoZSBtYW5hZ2VtZW50cy4nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDMsXHJcbiAgICBpbWdTcmM6IENsb3VkLFxyXG4gICAgYWx0VGV4dDogJ0NvbnRlbnQnLFxyXG4gICAgdGl0bGU6ICdVbmxpbWl0ZWQgQ29udGVudCcsXHJcbiAgICB0ZXh0OlxyXG4gICAgICAnR2V0IHlvdXIgYmxvb2QgdGVzdHMgZGVsaXZlcmVkIGF0IGxldCBob21lIGNvbGxlY3Qgc2FtcGxlIGZyb20gdGhlIHZpY3Rvcnkgb2YgdGhlIG1hbmFnZW1lbnRzLicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNCxcclxuICAgIGltZ1NyYzogU2V0dGluZyxcclxuICAgIGFsdFRleHQ6ICdDdXN0b21pemF0aW9uJyxcclxuICAgIHRpdGxlOiAnVW5saW1pdGVkIEN1c3RvbWl6YXRpb24nLFxyXG4gICAgdGV4dDpcclxuICAgICAgJ0dldCB5b3VyIGJsb29kIHRlc3RzIGRlbGl2ZXJlZCBhdCBsZXQgaG9tZSBjb2xsZWN0IHNhbXBsZSBmcm9tIHRoZSB2aWN0b3J5IG9mIHRoZSBtYW5hZ2VtZW50cy4nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDUsXHJcbiAgICBpbWdTcmM6IERlc2lnbixcclxuICAgIGFsdFRleHQ6ICdQcm9kdWN0aXZpdHknLFxyXG4gICAgdGl0bGU6ICdCb29zdCBQcm9kdWN0aXZpdHknLFxyXG4gICAgdGV4dDpcclxuICAgICAgJ0dldCB5b3VyIGJsb29kIHRlc3RzIGRlbGl2ZXJlZCBhdCBsZXQgaG9tZSBjb2xsZWN0IHNhbXBsZSBmcm9tIHRoZSB2aWN0b3J5IG9mIHRoZSBtYW5hZ2VtZW50cy4nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDYsXHJcbiAgICBpbWdTcmM6IENoYXQsXHJcbiAgICBhbHRUZXh0OiAnU3VwcG9ydCcsXHJcbiAgICB0aXRsZTogJ0N1c3RvbWVyIFN1cHBvcnQnLFxyXG4gICAgdGV4dDpcclxuICAgICAgJ0dldCB5b3VyIGJsb29kIHRlc3RzIGRlbGl2ZXJlZCBhdCBsZXQgaG9tZSBjb2xsZWN0IHNhbXBsZSBmcm9tIHRoZSB2aWN0b3J5IG9mIHRoZSBtYW5hZ2VtZW50cy4nLFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGZWF0dXJlKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBzeD17eyB2YXJpYW50OiAnc2VjdGlvbi5mZWF0dXJlJyB9fT5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8U2VjdGlvbkhlYWRlclxyXG4gICAgICAgICAgc2xvZ2FuPVwiUXVhbGl0eSBmZWF0dXJlc1wiXHJcbiAgICAgICAgICB0aXRsZT1cIk1lZXQgZXhjaXRpbmcgZmVhdHVyZSBvZiBhcHBcIlxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxHcmlkIHN4PXtzdHlsZXMuZ3JpZH0+XHJcbiAgICAgICAgICB7ZGF0YS5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgPEZlYXR1cmVDYXJkXHJcbiAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxyXG4gICAgICAgICAgICAgIHNyYz17aXRlbS5pbWdTcmN9XHJcbiAgICAgICAgICAgICAgYWx0PXtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgIHRpdGxlPXtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgIHRleHQ9e2l0ZW0udGV4dH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGdyaWQ6IHtcclxuICAgIHB0OiBbMCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgM10sXHJcbiAgICBncmlkR2FwOiBbXHJcbiAgICAgICczN3B4IDAnLFxyXG4gICAgICBudWxsLFxyXG4gICAgICAnNDVweCAzMHB4JyxcclxuICAgICAgbnVsbCxcclxuICAgICAgJzUwcHggMzBweCcsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgICc5MHB4IDcwcHgnLFxyXG4gICAgXSxcclxuICAgIHdpZHRoOiBbJzEwMCUnLCAnODAlJywgJzEwMCUnXSxcclxuICAgIG14OiAnYXV0bycsXHJcbiAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBbXHJcbiAgICAgICdyZXBlYXQoMSwxZnIpJyxcclxuICAgICAgbnVsbCxcclxuICAgICAgJ3JlcGVhdCgyLDFmciknLFxyXG4gICAgICBudWxsLFxyXG4gICAgICAncmVwZWF0KDMsMWZyKScsXHJcbiAgICBdLFxyXG4gIH0sXHJcbn07XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3ggfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgR3JpZCB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IFNlY3Rpb25IZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9zZWN0aW9uLWhlYWRlcic7XHJcbmltcG9ydCBGZWF0dXJlQ2FyZENvbHVtbiBmcm9tICdjb21wb25lbnRzL2ZlYXR1cmUtY2FyZC1jb2x1bW4uanMnO1xyXG5pbXBvcnQgVmVjdG9yIGZyb20gJ2Fzc2V0cy9rZXktZmVhdHVyZS9wcmFjdGljZSAoMSkucG5nJztcclxuaW1wb3J0IEVkaXRpbmcgZnJvbSAnYXNzZXRzL2tleS1mZWF0dXJlL2hlbHAgKDEpLnBuZyc7XHJcbmltcG9ydCBTcGVlZCBmcm9tICdhc3NldHMva2V5LWZlYXR1cmUvcHJvbW90aW9uICgyKS5wbmcnO1xyXG5cclxuY29uc3QgZGF0YSA9IFtcclxuICB7XHJcbiAgICBpZDogMSxcclxuICAgIGltZ1NyYzogVmVjdG9yLFxyXG4gICAgYWx0VGV4dDogJ1ByYWN0aWNhbCBMZWFybmluZycsXHJcbiAgICB0aXRsZTogJ1ByYWN0aWNhbCBMZWFybmluZycsXHJcbiAgICB0ZXh0OlxyXG4gICAgICAnVGhlIHRoZW9yeSBpcyBhbGwgYWJvdXQgcmVhZGluZyBhIGdpdmVuIHNldCBvZiBtYXRlcmlhbHMgYW5kIHVuZGVyc3RhbmRpbmcgd2hhdCB0aGUgbWF0ZXJpYWxzIHdhbnQgdG8gY29udmV5LiBXaGVyZWFzIHRvIGdhaW4gcHJhY3RpY2FsIGtub3dsZWRnZSwgeW91IG5lZWQgdG8gZXhwbG9yZSB2YXJpb3VzIG9wdGlvbnMgYW5kIHNlZSB3aGF0IHdvcmtzIHRoZSBiZXN0LicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMixcclxuICAgIGltZ1NyYzogRWRpdGluZyxcclxuICAgIGFsdFRleHQ6ICcgMjQgKjcgTWVudG9yIFN1cHBvcnQnLFxyXG4gICAgdGl0bGU6ICcyNCAqNyBNZW50b3IgU3VwcG9ydCcsXHJcbiAgICB0ZXh0OlxyXG4gICAgICAndGhlIFBhdGggdG8gc3VjY2VzcyBjYW4gYmUgdG91Z2ggYnV0IHRoZSByaWdodCBndWlkYW5jZSBhbmQgYW4gZXhwZXJ0IGhlbHBpbmcgaGFuZCBjYW4gbWFrZSB0aGlzIHBhdGggIGVuam95YWJsZSBhbmQgbWFrZSB5b3VyIGVmZm9ydHMgY291bnQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDMsXHJcbiAgICBpbWdTcmM6IFNwZWVkLFxyXG4gICAgYWx0VGV4dDogJ0ludGVybnNoaXBzJyxcclxuICAgIHRpdGxlOiAnSW50ZXJuc2hpcHMnLFxyXG4gICAgdGV4dDpcclxuICAgICAgJ0luZHVzdHJ5IGxlYWRpbmcgY3VycmljdWx1bSBkZXNpZ25lZCBieSBleHBlcnQgZGV2ZWxvcGVycyB0dXJuZWQgZWR1Y2F0b3JzIHdobyBoYXZlIGludmVzdGVkIHRpbWUgdG8gY3JlYXRlIHF1YWxpdHkgY29udGVudCBpbmZ1c2VkIHdpdGggdW5pcXVlIHRlYWNoaW5nIG1ldGhvZG9sb2d5LicsXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEtleUZlYXR1cmUoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIHN4PXt7IHZhcmlhbnQ6ICdzZWN0aW9uLmtleUZlYXR1cmUnIH19IGlkPVwiZmVhdHVyZVwiPlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxTZWN0aW9uSGVhZGVyXHJcbiAgICAgICAgICBzbG9nYW49XCJRdWFsaXR5IGZlYXR1cmVzXCJcclxuICAgICAgICAgIHRpdGxlPVwiRVhDTFVTSVZFIEZFQVRVUkVTXCJcclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8R3JpZCBzeD17c3R5bGVzLmdyaWR9PlxyXG4gICAgICAgICAge2RhdGEubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgIDxGZWF0dXJlQ2FyZENvbHVtblxyXG4gICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cclxuICAgICAgICAgICAgICBzcmM9e2l0ZW0uaW1nU3JjfVxyXG4gICAgICAgICAgICAgIGFsdD17aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICB0aXRsZT17aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICB0ZXh0PXtpdGVtLnRleHR9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBncmlkOiB7XHJcbiAgICBweDogWzAsIG51bGwsIG51bGwsICc0MHB4JywgbnVsbCwgJzgwcHgnXSxcclxuICAgIHB0OiBbMCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgM10sXHJcbiAgICBncmlkR2FwOiBbJzM1cHggMCcsIG51bGwsICc0MHB4IDAnXSxcclxuICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFtcclxuICAgICAgJ3JlcGVhdCgxLDFmciknLFxyXG4gICAgICBudWxsLFxyXG4gICAgICAncmVwZWF0KDIsMWZyKScsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgICdyZXBlYXQoMywxZnIpJyxcclxuICAgIF0sXHJcbiAgICB3aWR0aDogWycxMDAlJywgJzgwJScsICcxMDAlJ10sXHJcbiAgICBteDogJ2F1dG8nLFxyXG4gICAgJyYgPiBkaXYnOiB7XHJcbiAgICAgIHB4OiBbMCwgJzE1cHgnLCBudWxsLCAnMjVweCcsIG51bGwsICczMHB4JywgJzQwcHgnLCAnNjBweCddLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4LCBDb250YWluZXIsIEZsZXggfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCBQcmljZUNhcmQgZnJvbSAnY29tcG9uZW50cy9wcmljZS1jYXJkJztcclxuaW1wb3J0IFNlY3Rpb25IZWFkZXIgZnJvbSAnY29tcG9uZW50cy9zZWN0aW9uLWhlYWRlcic7XHJcbmltcG9ydCB7IElvSW9zQ2hlY2ttYXJrQ2lyY2xlLCBJb0lvc0Nsb3NlQ2lyY2xlIH0gZnJvbSAncmVhY3QtaWNvbnMvaW8nO1xyXG5pbXBvcnQgUGF0dGVybkJHIGZyb20gJ2Fzc2V0cy9wYXR0ZXJuQkcucG5nJztcclxuXHJcbmNvbnN0IHBhY2thZ2VzID0gW1xyXG4gIHtcclxuICAgIG5hbWU6ICdGcmVlIFBsYW4nLFxyXG4gICAgZGVzY3JpcHRpb246ICdGb3IgU21hbGwgdGVhbXMgb3Igb2ZmaWNlJyxcclxuICAgIGJ1dHRvblRleHQ6ICdTaWdudXAgTm93JyxcclxuICAgIHBvaW50czogW1xyXG4gICAgICB7XHJcbiAgICAgICAgaWNvbjogPElvSW9zQ2hlY2ttYXJrQ2lyY2xlIC8+LFxyXG4gICAgICAgIHRleHQ6ICdVbHRpbWF0ZSBhY2Nlc3MgdG8gYWxsIGNvdXJzZSwgZXhlcmNpc2VzIGFuZCBhc3Nlc3NtZW50cycsXHJcbiAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpY29uOiA8SW9Jb3NDaGVja21hcmtDaXJjbGUgLz4sXHJcbiAgICAgICAgdGV4dDpcclxuICAgICAgICAgICdGcmVlIGFjY2VzcyBmb3IgYWxsIGtpbmQgb2YgZXhlcmNpc2UgY29ycmVjdGlvbnMgd2l0aCBkb3dubG9hZHMuJyxcclxuICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGljb246IDxJb0lvc0NoZWNrbWFya0NpcmNsZSAvPixcclxuICAgICAgICB0ZXh0OiAnVG90YWwgYXNzZXNzbWVudCBjb3JyZWN0aW9ucyB3aXRoIGZyZWUgZG93bmxvYWQgYWNjZXNzIHN5c3RlbScsXHJcbiAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpY29uOiA8SW9Jb3NDbG9zZUNpcmNsZSAvPixcclxuICAgICAgICB0ZXh0OiAnVW5saW1pdGVkIGRvd25sb2FkIG9mIGNvdXJzZXMgb24gdGhlIG1vYmlsZSBhcHAgY29udGVudHMnLFxyXG4gICAgICAgIGlzQXZhaWxhYmxlOiBmYWxzZSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGljb246IDxJb0lvc0Nsb3NlQ2lyY2xlIC8+LFxyXG4gICAgICAgIHRleHQ6ICdEb3dubG9hZCBhbmQgcHJpbnQgY291cnNlcyBhbmQgZXhlcmNpc2VzIGluIFBERicsXHJcbiAgICAgICAgaXNBdmFpbGFibGU6IGZhbHNlLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIGhlYWRlcjogJ1JlY29tbWVuZGVkJyxcclxuICAgIG5hbWU6ICdQcmVtaXVtJyxcclxuICAgIGRlc2NyaXB0aW9uOiAnRm9yIHN0YXJ0dXAgZW50ZXJwcmlzZScsXHJcbiAgICBwcmljZVdpdGhVbml0OiAnJDI5Ljk5LycsXHJcbiAgICBidXR0b25UZXh0OiAnU2lnbnVwIE5vdycsXHJcbiAgICBwb2ludHM6IFtcclxuICAgICAge1xyXG4gICAgICAgIGljb246IDxJb0lvc0NoZWNrbWFya0NpcmNsZSAvPixcclxuICAgICAgICB0ZXh0OiAnVWx0aW1hdGUgYWNjZXNzIHRvIGFsbCBjb3Vyc2UsIGV4ZXJjaXNlcyBhbmQgYXNzZXNzbWVudHMnLFxyXG4gICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWNvbjogPElvSW9zQ2hlY2ttYXJrQ2lyY2xlIC8+LFxyXG4gICAgICAgIHRleHQ6XHJcbiAgICAgICAgICAnRnJlZSBhY2Nlc3MgZm9yIGFsbCBraW5kIG9mIGV4ZXJjaXNlIGNvcnJlY3Rpb25zIHdpdGggZG93bmxvYWRzLicsXHJcbiAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpY29uOiA8SW9Jb3NDaGVja21hcmtDaXJjbGUgLz4sXHJcbiAgICAgICAgdGV4dDogJ1RvdGFsIGFzc2Vzc21lbnQgY29ycmVjdGlvbnMgd2l0aCBmcmVlIGRvd25sb2FkIGFjY2VzcyBzeXN0ZW0nLFxyXG4gICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWNvbjogPElvSW9zQ2hlY2ttYXJrQ2lyY2xlIC8+LFxyXG4gICAgICAgIHRleHQ6ICdVbmxpbWl0ZWQgZG93bmxvYWQgb2YgY291cnNlcyBvbiB0aGUgbW9iaWxlIGFwcCBjb250ZW50cycsXHJcbiAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpY29uOiA8SW9Jb3NDaGVja21hcmtDaXJjbGUgLz4sXHJcbiAgICAgICAgdGV4dDogJ0Rvd25sb2FkIGFuZCBwcmludCBjb3Vyc2VzIGFuZCBleGVyY2lzZXMgaW4gUERGJyxcclxuICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnRnJlZSBQbGFuJyxcclxuICAgIGRlc2NyaXB0aW9uOiAnRm9yIFNtYWxsIHRlYW1zIG9yIG9mZmljZScsXHJcbiAgICBidXR0b25UZXh0OiAnU2lnbnVwIE5vdycsXHJcbiAgICBwb2ludHM6IFtcclxuICAgICAge1xyXG4gICAgICAgIGljb246IDxJb0lvc0NoZWNrbWFya0NpcmNsZSAvPixcclxuICAgICAgICB0ZXh0OiAnVWx0aW1hdGUgYWNjZXNzIHRvIGFsbCBjb3Vyc2UsIGV4ZXJjaXNlcyBhbmQgYXNzZXNzbWVudHMnLFxyXG4gICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWNvbjogPElvSW9zQ2hlY2ttYXJrQ2lyY2xlIC8+LFxyXG4gICAgICAgIHRleHQ6XHJcbiAgICAgICAgICAnRnJlZSBhY2Nlc3MgZm9yIGFsbCBraW5kIG9mIGV4ZXJjaXNlIGNvcnJlY3Rpb25zIHdpdGggZG93bmxvYWRzLicsXHJcbiAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpY29uOiA8SW9Jb3NDaGVja21hcmtDaXJjbGUgLz4sXHJcbiAgICAgICAgdGV4dDogJ1RvdGFsIGFzc2Vzc21lbnQgY29ycmVjdGlvbnMgd2l0aCBmcmVlIGRvd25sb2FkIGFjY2VzcyBzeXN0ZW0nLFxyXG4gICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWNvbjogPElvSW9zQ2xvc2VDaXJjbGUgLz4sXHJcbiAgICAgICAgdGV4dDogJ1VubGltaXRlZCBkb3dubG9hZCBvZiBjb3Vyc2VzIG9uIHRoZSBtb2JpbGUgYXBwIGNvbnRlbnRzJyxcclxuICAgICAgICBpc0F2YWlsYWJsZTogZmFsc2UsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpY29uOiA8SW9Jb3NDbG9zZUNpcmNsZSAvPixcclxuICAgICAgICB0ZXh0OiAnRG93bmxvYWQgYW5kIHByaW50IGNvdXJzZXMgYW5kIGV4ZXJjaXNlcyBpbiBQREYnLFxyXG4gICAgICAgIGlzQXZhaWxhYmxlOiBmYWxzZSxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuXTtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFja2FnZSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gaWQ9XCJwcmljaW5nXCIgc3g9e3N0eWxlcy5wcmljaW5nfT5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8U2VjdGlvbkhlYWRlclxyXG4gICAgICAgICAgdGl0bGU9XCJMZXTigJlzIHNlZSBob3cgaXQgd29ya3NcIlxyXG4gICAgICAgICAgc2xvZ2FuPVwiV2hhdHMgdGhlIGZ1bmN0aW9uXCJcclxuICAgICAgICAgIGlzV2hpdGU9e3RydWV9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8RmxleFxyXG4gICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICBmbGV4V3JhcDogWyd3cmFwJywgbnVsbCwgbnVsbCwgJ25vd3JhcCddLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7cGFja2FnZXMubWFwKChwYWNrYWdlRGF0YSkgPT4gKFxyXG4gICAgICAgICAgICA8UHJpY2VDYXJkIGRhdGE9e3BhY2thZ2VEYXRhfSBrZXk9e3BhY2thZ2VEYXRhLm5hbWV9IC8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L0ZsZXg+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBwcmljaW5nOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdwcmltYXJ5JyxcclxuICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke1BhdHRlcm5CR30pYCxcclxuICAgIGJhY2tncm91bmRSZXBlYXQ6IGBuby1yZXBlYXRgLFxyXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyIGNlbnRlcicsXHJcbiAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcclxuICAgIHB5OiBbOCwgbnVsbCwgOSwgbnVsbCwgbnVsbCwgMTBdLFxyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAnJjo6YmVmb3JlJzoge1xyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgY29udGVudDogJ1wiXCInLFxyXG4gICAgICB0b3A6IDAsXHJcbiAgICAgIHJpZ2h0OiAwLFxyXG4gICAgICBiYWNrZ3JvdW5kOlxyXG4gICAgICAgICdsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCByZ2JhKDQyLDcyLDEyNSwgMC4zKSAyNSUsIHRyYW5zcGFyZW50IDI1JSwgdHJhbnNwYXJlbnQgNTAlLCByZ2JhKDQyLDcyLDEyNSwgMC4zKSA1MCUsIHJnYmEoNDIsNzIsMTI1LCAwLjMpIDc1JSwgdHJhbnNwYXJlbnQgNzUlLCB0cmFuc3BhcmVudCknLFxyXG4gICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICBiYWNrZ3JvdW5kU2l6ZTogJzM1MHB4IDM1MHB4JyxcclxuICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgIG9wYWNpdHk6IDAuMyxcclxuICAgICAgekluZGV4OiAwLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4LCBDb250YWluZXIsIEJveCB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IFRleHRGZWF0dXJlIGZyb20gJ2NvbXBvbmVudHMvdGV4dC1mZWF0dXJlJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ2NvbXBvbmVudHMvaW1hZ2UnO1xyXG5cclxuaW1wb3J0IFBhcnRuZXIgZnJvbSAnYXNzZXRzL3BhcnRuZXIucG5nJztcclxuXHJcbmNvbnN0IGRhdGEgPSB7XHJcbiAgc3ViVGl0bGU6ICdDb3JlIGZlYXR1cmVzJyxcclxuICB0aXRsZTogJ1NtYXJ0IEphY2twb3RzIHRoYXQgeW91IG1heSBsb3ZlIHRoaXMgYW55dGltZSAmIGFueXdoZXJlJyxcclxuICBkZXNjcmlwdGlvbjpcclxuICAgICdHZXQgeW91ciB0ZXN0cyBkZWxpdmVyZWQgYXQgbGV0IGhvbWUgY29sbGVjdCBzYW1wbGUgZnJvbSB0aGUgdmljdG9yeSBvZiB0aGUgbWFuYWdlbWVudHMgdGhhdCBzdXBwbGllcyBiZXN0IGRlc2lnbiBzeXN0ZW0gZ3VpZGVsaW5lcyBldmVyLiBHZXQgeW91ciB0ZXN0cyBkZWxpdmVyZWQgYXQgbGV0IGhvbWUgY29sbGVjdCBzYW1wbGUuJyxcclxuICBidG5OYW1lOiAnR2V0IFN0YXJ0ZWQnLFxyXG4gIGJ0blVSTDogJyMnLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFydG5lclNlY3Rpb24oKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIHN4PXt7IHZhcmlhbnQ6ICdzZWN0aW9uLnBhcnRuZXInIH19PlxyXG4gICAgICA8Q29udGFpbmVyIHN4PXtzdHlsZXMuY29udGFpbmVyQm94fT5cclxuICAgICAgICA8Qm94IHN4PXtzdHlsZXMuY29udGVudEJveH0+XHJcbiAgICAgICAgICA8VGV4dEZlYXR1cmVcclxuICAgICAgICAgICAgc3ViVGl0bGU9e2RhdGEuc3ViVGl0bGV9XHJcbiAgICAgICAgICAgIHRpdGxlPXtkYXRhLnRpdGxlfVxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj17ZGF0YS5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgYnRuTmFtZT17ZGF0YS5idG5OYW1lfVxyXG4gICAgICAgICAgICBidG5VUkw9e2RhdGEuYnRuVVJMfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgICA8Qm94IHN4PXt7IHB4OiBbMCwgbnVsbCwgJzQwcHgnLCAwXSB9fT5cclxuICAgICAgICAgIDxJbWFnZSBzcmM9e1BhcnRuZXJ9IGFsdD1cIlBhcnRuZXJcIiAvPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgY29udGFpbmVyQm94OiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXHJcbiAgICBmbGV4V3JhcDogWyd3cmFwJywgbnVsbCwgbnVsbCwgJ25vd3JhcCddLFxyXG4gIH0sXHJcbiAgY29udGVudEJveDoge1xyXG4gICAgZmxleFNocmluazogMCxcclxuICAgIHB4OiBbMCwgbnVsbCwgJzMwcHgnLCAwXSxcclxuICAgIHRleHRBbGlnbjogWydjZW50ZXInLCBudWxsLCBudWxsLCAnbGVmdCddLFxyXG4gICAgd2lkdGg6IFsnMTAwJScsIDQ1MCwgNTUwLCAnMzUwcHgnLCAnNDEwcHgnLCAnNDg1cHgnXSxcclxuICAgIG14OiAnYXV0bycsXHJcbiAgICBwYjogWyczMHB4JywgbnVsbCwgbnVsbCwgMF0sXHJcbiAgICAnLmRlc2NyaXB0aW9uJzoge1xyXG4gICAgICBwcjogWzAsIG51bGwsIG51bGwsIG51bGwsIDRdLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4IH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIEJveCB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IFRleHRGZWF0dXJlIGZyb20gJ2NvbXBvbmVudHMvdGV4dC1mZWF0dXJlJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ2NvbXBvbmVudHMvaW1hZ2UnO1xyXG5cclxuaW1wb3J0IFBheW1lbnRUaHVtYiBmcm9tICdhc3NldHMvcGF5bWVudFRodW1iLnBuZyc7XHJcbmltcG9ydCBQYXltZW50UGF0dGVybiBmcm9tICdhc3NldHMvcGF5bWVudC1wYXR0ZXJuLnBuZyc7XHJcblxyXG5jb25zdCBkYXRhID0ge1xyXG4gIHN1YlRpdGxlOiAnUEFZTUVOVCBTRUNVUklUWScsXHJcbiAgdGl0bGU6ICdTZWN1cmUgUGF5bWVudCBUcmFuc2FjdGlvbiBTeXN0ZW0gd2l0aCAjMSBSYW5raW5nJyxcclxuICBkZXNjcmlwdGlvbjpcclxuICAgICdHZXQgeW91ciB0ZXN0cyBkZWxpdmVyZWQgYXQgbGV0IGhvbWUgY29sbGVjdCBzYW1wbGUgZnJvbSB0aGUgdmljdG9yeSBvZiB0aGUgbWFuYWdlbWVudHMgdGhhdCBzdXBwbGllcyBiZXN0IGRlc2lnbiBzeXN0ZW0gZ3VpZGVsaW5lcyBldmVyLiBHZXQgeW91ciB0ZXN0cyBkZWxpdmVyZWQgYXQgbGV0IGhvbWUgY29sbGVjdCBzYW1wbGUuJyxcclxuICBidG5OYW1lOiAnTGVhcm4gTW9yZScsXHJcbiAgYnRuVVJMOiAnIycsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWN1cmVQYXltZW50KCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBzeD17eyB2YXJpYW50OiAnc2VjdGlvbi5zZWN1cmVQYXltZW50JyB9fT5cclxuICAgICAgPEJveCBzeD17c3R5bGVzLmJnT3ZlcmxheX0gLz5cclxuICAgICAgPENvbnRhaW5lciBzeD17c3R5bGVzLmNvbnRhaW5lckJveH0+XHJcbiAgICAgICAgPEJveCBzeD17c3R5bGVzLnRodW1ibmFpbH0+XHJcbiAgICAgICAgICA8SW1hZ2Ugc3JjPXtQYXltZW50VGh1bWJ9IGFsdD17ZGF0YS50aXRsZX0gLz5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgICA8Qm94IHN4PXtzdHlsZXMuY29udGVudEJveH0+XHJcbiAgICAgICAgICA8VGV4dEZlYXR1cmVcclxuICAgICAgICAgICAgc3ViVGl0bGU9e2RhdGEuc3ViVGl0bGV9XHJcbiAgICAgICAgICAgIHRpdGxlPXtkYXRhLnRpdGxlfVxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj17ZGF0YS5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgYnRuTmFtZT17ZGF0YS5idG5OYW1lfVxyXG4gICAgICAgICAgICBidG5VUkw9e2RhdGEuYnRuVVJMfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGJnT3ZlcmxheToge1xyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICB0b3A6IDAsXHJcbiAgICByaWdodDogMCxcclxuICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgekluZGV4OiAtMSxcclxuICAgIHdpZHRoOiBbXHJcbiAgICAgICcxMDAlJyxcclxuICAgICAgbnVsbCxcclxuICAgICAgbnVsbCxcclxuICAgICAgJ2NhbGMoNTAlICsgNDAwcHgpJyxcclxuICAgICAgJ2NhbGMoNTAlICsgNDgwcHgpJyxcclxuICAgICAgJ2NhbGMoNTAlICsgNTcwcHgpJyxcclxuICAgICAgbnVsbCxcclxuICAgICAgJ2NhbGMoNTAlICsgNjI1cHgpJyxcclxuICAgIF0sXHJcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtQYXltZW50UGF0dGVybn0pYCxcclxuICAgIGJhY2tncm91bmRSZXBlYXQ6IGBuby1yZXBlYXRgLFxyXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiAndG9wIGxlZnQnLFxyXG4gICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXHJcbiAgfSxcclxuICBjb250YWluZXJCb3g6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdmbGV4LXN0YXJ0JyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXHJcbiAgICBmbGV4V3JhcDogWyd3cmFwJywgbnVsbCwgbnVsbCwgJ25vd3JhcCddLFxyXG4gIH0sXHJcbiAgdGh1bWJuYWlsOiB7XHJcbiAgICBtYjogLTIsXHJcbiAgICBtbDogWy00LCAnLTQwcHgnLCBudWxsLCBudWxsLCAwXSxcclxuICAgIG9yZGVyOiBbMiwgbnVsbCwgbnVsbCwgMF0sXHJcbiAgICBwcjogWzYsIG51bGwsIDcsIDBdLFxyXG4gIH0sXHJcbiAgY29udGVudEJveDoge1xyXG4gICAgd2lkdGg6IFsnMTAwJScsIDQyMCwgNDgwLCAzODAsIDUwMCwgNTcwXSxcclxuICAgIG14OiAnYXV0bycsXHJcbiAgICBmbGV4U2hyaW5rOiAwLFxyXG4gICAgdGV4dEFsaWduOiBbJ2NlbnRlcicsIG51bGwsIG51bGwsICdsZWZ0J10sXHJcbiAgICBwdDogWzAsIG51bGwsIG51bGwsIDQsICc1MHB4JywgbnVsbCwgNCwgJzgwcHgnXSxcclxuICAgIHBsOiBbMCwgbnVsbCwgbnVsbCwgNDAsICc5MHB4J10sXHJcbiAgICBwYjogWzcsIG51bGwsIG51bGwsIDldLFxyXG4gICAgcHI6IFswLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCA2XSxcclxuICB9LFxyXG59O1xyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4LCBDb250YWluZXIsIEhlYWRpbmcsIFRleHQsIEJveCwgSW1hZ2UgfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCBTZWN0aW9uSGVhZGVyIGZyb20gJ2NvbXBvbmVudHMvc2VjdGlvbi1oZWFkZXInO1xyXG5pbXBvcnQgUmF0aW5nIGZyb20gJ2NvbXBvbmVudHMvcmF0aW5nJztcclxuaW1wb3J0IEJ1dHRvbkdyb3VwIGZyb20gJ2NvbXBvbmVudHMvYnV0dG9uLWdyb3VwJztcclxuaW1wb3J0IENhcm91c2VsIGZyb20gJ3JlYWN0LW11bHRpLWNhcm91c2VsJztcclxuXHJcbmltcG9ydCBBdmF0YXIxIGZyb20gJ2Fzc2V0cy90ZXN0aW1vbmlhbC9hdmF0YXIxLnBuZyc7XHJcbmltcG9ydCBBdmF0YXIyIGZyb20gJ2Fzc2V0cy90ZXN0aW1vbmlhbC9hdmF0YXIyLnBuZyc7XHJcbmltcG9ydCBBdmF0YXIzIGZyb20gJ2Fzc2V0cy90ZXN0aW1vbmlhbC9hdmF0YXIzLnBuZyc7XHJcbmltcG9ydCBBdmF0YXI0IGZyb20gJ2Fzc2V0cy90ZXN0aW1vbmlhbC9hdmF0YXI0LnBuZyc7XHJcblxyXG5jb25zdCBkYXRhID0gW1xyXG4gIHtcclxuICAgIGlkOiAxLFxyXG4gICAgdGl0bGU6ICdNb2Rlcm4gbG9vayAmIHRyZW5kaW5nIGRlc2lnbicsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgJ1wiSSAgaGF2ZSB3b3JrZWQgd2l0aCBEYXZl4oCZcyBCcm90aGVycyBUZWNobm9sb2d5ICwgQXMgYSBBbmRyb2lkIERldmVsb3BlciAuIEFrYXNoIERldiBTaXIgQWx3YXlzICBoZWxwZWQgIG1lICB0byB3aGVuZXZlciAgSSB3YXMgTmVlZGVkICB0byBMZWFybiBuZXcgVGVjaG5vbG9neSBGb3IgIFRoZSBQcm9qZWN04oCZcy4gTXkgV29yayBFeHBlcmllbmNlIHdhcyBFeHRyZW1lbHkgR29vZCB3aXRoIEFrYXNoIERhdmUgU2lyLiBBa2FzaCAgU2lyIEFsd2F5cyBDYXJlIHRvIEVtcGxveWVlcyBhbmQgYXMgd2VsbCBhcyBDbGllbnRzLiBUaGV5IEFsd2F5cyB0cnkgdG8gRnVsbCBmaWxsIGFsbCBSZXF1aXJlbWVudHMgb2YgdGhlIENsaWVudHMuIEFrYXNoIERhdmUgRG9pbmcgR3JlYXQgV29yay4g4oCdJyxcclxuICAgIGF2YXRhcjogQXZhdGFyMSxcclxuICAgIG5hbWU6ICdLYWxrYSBQcmFzaGFkJyxcclxuICAgIGRlc2lnbmF0aW9uOiAnQEthbGthUHJhc2hhZCcsXHJcbiAgICByZXZpZXc6IDQsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMixcclxuICAgIHRpdGxlOiAnRGVzaWduIFF1YWxpdHkgJiBwZXJmb3JtYW5jZScsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgJ0Rhd2F5IGlzIGdyZWF0IHBsYXRmb3JtIHRvIGxlYXJuIHRlY2hub2xvZ2llcywgcGVvcGxlcyB3aG8gd2FudCB0byBsZWFybiBwcm9ncmFtbWluZyBmcm9tIHNjcmF0Y2ggdGhpcyBpcyBhIGF3ZXNvbWUgcGxhdGZvcm0gdGhlbSAsdGhleSBpbnN1cmUgdGhhdCBldmVyeSBwZXJzb24gY2FuIHN0dWR5IGNvbWZvcnRhYmx5IGFjY29yZGluZyB0byB0aGVpciBwYWNlLiBIaWdobHkgcmVjb21tZW5kZWQgZm9yIHBlb3BsZSB3aG8gd2FudCB0byBzdGFydCB0aGVpciBjYXJlZXIgaW4gSVQnLFxyXG4gICAgYXZhdGFyOiBBdmF0YXIyLFxyXG4gICAgbmFtZTogJ1Jpc2hpIENob3ViZXknLFxyXG4gICAgZGVzaWduYXRpb246ICdAUmlzaGlDaG91YmV5JyxcclxuICAgIHJldmlldzogNSxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAzLFxyXG4gICAgdGl0bGU6ICdMYXlvdXQgYW5kIG9yZ2FuaXplZCBsYXllcnMnLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgICdEYXdheSBpcyBhIGJlc3QgcGxhdGZvcm0gZm9yIGxlYXJuaW5nLCBJbSBkb2luZyBteSBpbnRlcm5zaGlwIGZyb20gaGVyZSAsIE1lbnRvcnMgYXJlIHJlYWR5IHRvIGd1aWRlXFx0ZWNoICBhbnkgdGltZSB3aGVuZXZlciBJIHN0dWNrIG9uIHBlcnRpY3VsYXIgcHJvYmxlbSAuIEltIGdldHRpbmcgdG8gbGVhcm4gIG5ldyB0ZWNobm9sb2dpZXMgaW4gYSBwZXJmZWN0IG1hbm5lciB3aXRoIHBlcmZlY3QgdHV0b3JzICwgQWxvbmcgd2l0aCB0ZWFjaGluZyB0aGV5IGFsc28gbW90aXZhdGVzIHVzLCAgdG8gY3JlYXRlIGEgY3VyaW9zaXR5IHRvIGxlYXJuICBtb3JlLicsXHJcbiAgICBhdmF0YXI6IEF2YXRhcjMsXHJcbiAgICBuYW1lOiAnR3lhdHJpIFRpd2FyaScsXHJcbiAgICBkZXNpZ25hdGlvbjogJ0BHeWF0cmlUaXdhcmknLFxyXG4gICAgcmV2aWV3OiA1LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDQsXHJcbiAgICB0aXRsZTogJ01vZGVybiBsb29rICYgdHJlbmRpbmcgZGVzaWduJyxcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAnIGxlYXJuZWQgYSBsb3QgaW4gRGF3YXkuICB3aXRoIGRvaW5nIHNlbGYgc3R1ZHksIEkgYWxzbyBnZXQgdGhlIGd1aWRhbmNlIG9mIHRlYWNoZXJzIHdoaWNoIGlzIHZlcnkgaGVscGZ1bC4nLFxyXG4gICAgYXZhdGFyOiBBdmF0YXI0LFxyXG4gICAgbmFtZTogJ2FqZWV0YSBTYWh1JyxcclxuICAgIGRlc2lnbmF0aW9uOiAnQGFqZWV0YVNhaHUnLFxyXG4gICAgcmV2aWV3OiA0LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDUsXHJcbiAgICB0aXRsZTogJ01vZGVybiBsb29rICYgdHJlbmRpbmcgZGVzaWduJyxcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAnIEkgYW0gd29ya2luZyBhcyBhIGludGVybiBpbiBkYXdheSB0ZWNobm9sb2d5IGZvcm0gbGFzdCAzIG1vbnRocyBhbmQgaGVyZSBpcyBzb21lIHBvaW50cyBhYm91dCBteSBpbnRlcm5zaGlwIGV4cGVyaWVuY2UuVGhleSBtb3JlIGZvY3VzIG9uIHNlbGYgbGVhcm5pbmcgcmF0aGVyIHRoZW4ganVzdCB0ZWFjaGluZyBvciBleHBsYWluaW5nIHRvcGljcy5UaGV5IGhlbHAgdG8gdXBncmFkZSBwcm9ncmFtbWluZyBsb2dpY3MgIFRoZXkgaW1wcm92ZWQgbXkgRGVzaWduaW5nIHNraWxscy4gVHJhaW5lciBhbmQgZmVsbG93IGludGVybnMgYXJlIGFsc28gdmVyeSBoZWxwZnVsIGFuZCBraW5kLidcclxuICAgLCBhdmF0YXI6IEF2YXRhcjQsXHJcbiAgICBuYW1lOiAnQWFrYW5zaGEgU2FodScsXHJcbiAgICBkZXNpZ25hdGlvbjogJ0BBYWthbnNoYVNhaHUnLFxyXG4gICAgcmV2aWV3OiA1LFxyXG4gIH0sXHJcbl07XHJcblxyXG5jb25zdCByZXNwb25zaXZlID0ge1xyXG4gIGRlc2t0b3A6IHtcclxuICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiAzMDAwLCBtaW46IDE2MTkgfSxcclxuICAgIGl0ZW1zOiA0LFxyXG4gICAgc2xpZGVzVG9TbGlkZTogNCwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgdG8gMS5cclxuICB9LFxyXG4gIGxhcHRvcDoge1xyXG4gICAgYnJlYWtwb2ludDogeyBtYXg6IDE2MTksIG1pbjogMTAyNCB9LFxyXG4gICAgaXRlbXM6IDMsXHJcbiAgICBzbGlkZXNUb1NsaWRlOiAzLCAvLyBvcHRpb25hbCwgZGVmYXVsdCB0byAxLlxyXG4gIH0sXHJcbiAgdGFibGV0OiB7XHJcbiAgICBicmVha3BvaW50OiB7IG1heDogMTAyNCwgbWluOiA2NDAgfSxcclxuICAgIGl0ZW1zOiAyLFxyXG4gICAgc2xpZGVzVG9TbGlkZTogMiwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgdG8gMS5cclxuICB9LFxyXG4gIG1vYmlsZToge1xyXG4gICAgYnJlYWtwb2ludDogeyBtYXg6IDYzOSwgbWluOiAwIH0sXHJcbiAgICBpdGVtczogMSxcclxuICAgIHNsaWRlc1RvU2xpZGU6IDEsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IHRvIDEuXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRlc3RpbW9uaWFsQ2FyZCgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gaWQ9XCJ0ZXN0aW1vbmlhbFwiIHN4PXt7IHZhcmlhbnQ6ICdzZWN0aW9uLnRlc3RpbW9uaWFsJyB9fT5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8U2VjdGlvbkhlYWRlciBzbG9nYW49XCJUZXN0aW1vbmlhbFwiIHRpdGxlPVwiV0hBVCBPVVIgU1RVREVOVFMgU0FZIEFCT1VUIFVTXCIgLz5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDxCb3ggc3g9e3N0eWxlcy5jYXJvdXNlbFdyYXBwZXJ9PlxyXG4gICAgICAgIDxDYXJvdXNlbFxyXG4gICAgICAgIGF1dG9QbGF5PXt0cnVlfVxyXG4gICAgICAgICAgYWRkaXRpb25hbFRyYW5zZnJvbT17MH1cclxuICAgICAgICAgIGFycm93cz17ZmFsc2V9XHJcbiAgICAgICAgICBhdXRvUGxheVNwZWVkPXszMDAwfVxyXG4gICAgICAgICAgY2VudGVyTW9kZT17ZmFsc2V9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJcIlxyXG4gICAgICAgICAgY29udGFpbmVyQ2xhc3M9XCJjYXJvdXNlbC1jb250YWluZXJcIlxyXG4gICAgICAgICAgY3VzdG9tQnV0dG9uR3JvdXA9ezxCdXR0b25Hcm91cCAvPn1cclxuICAgICAgICAgIGRvdExpc3RDbGFzcz1cIlwiXHJcbiAgICAgICAgICBkcmFnZ2FibGVcclxuICAgICAgICAgIGZvY3VzT25TZWxlY3Q9e2ZhbHNlfVxyXG4gICAgICAgICAgaW5maW5pdGU9e3RydWV9XHJcbiAgICAgICAgICBpdGVtQ2xhc3M9XCJcIlxyXG4gICAgICAgICAga2V5Qm9hcmRDb250cm9sXHJcbiAgICAgICAgICBtaW5pbXVtVG91Y2hEcmFnPXs4MH1cclxuICAgICAgICAgIHJlbmRlckJ1dHRvbkdyb3VwT3V0c2lkZVxyXG4gICAgICAgICAgcmVuZGVyRG90c091dHNpZGU9e2ZhbHNlfVxyXG4gICAgICAgICAgcmVzcG9uc2l2ZT17cmVzcG9uc2l2ZX1cclxuICAgICAgICAgIHNob3dEb3RzPXtmYWxzZX1cclxuICAgICAgICAgIHNsaWRlckNsYXNzPVwiXCJcclxuICAgICAgICAgIHNsaWRlc1RvU2xpZGU9ezF9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2RhdGEubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5yZXZpZXdDYXJkfSBrZXk9e2B0ZXN0aW1vbmlhbC0ta2V5JHtpdGVtLmlkfWB9PlxyXG4gICAgICAgICAgICAgIDxSYXRpbmcgcmF0aW5nPXtpdGVtLnJldmlld30gLz5cclxuICAgICAgICAgICAgICA8SGVhZGluZyBhcz1cImgzXCIgc3g9e3N0eWxlcy50aXRsZX0+XHJcbiAgICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICA8L0hlYWRpbmc+XHJcbiAgICAgICAgICAgICAgPFRleHQgc3g9e3N0eWxlcy5kZXNjcmlwdGlvbn0+e2l0ZW0uZGVzY3JpcHRpb259PC9UZXh0PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17aXRlbS5hdmF0YXJ9IGFsdD1cIkNsaWVudCBJbWFnZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmV2aWV3ZXItaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICA8SGVhZGluZyBhcz1cImg0XCIgc3g9e3N0eWxlcy5oZWFkaW5nfT5cclxuICAgICAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICA8L0hlYWRpbmc+XHJcbiAgICAgICAgICAgICAgICAgIDxUZXh0IHN4PXtzdHlsZXMuZGVzaWduYXRpb259PntpdGVtLmRlc2lnbmF0aW9ufTwvVGV4dD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvQ2Fyb3VzZWw+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBjYXJvdXNlbFdyYXBwZXI6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICBhbGlnbkl0ZW1zOiAnZmxleC1lbmQnLFxyXG4gICAgbXQ6ICctMzVweCcsXHJcbiAgICBweDogJzE1cHgnLFxyXG4gICAgJy5jYXJvdXNlbC1jb250YWluZXInOiB7XHJcbiAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgIG1heFdpZHRoOiBbXHJcbiAgICAgICAgJzEwMCUnLFxyXG4gICAgICAgIG51bGwsXHJcbiAgICAgICAgbnVsbCxcclxuICAgICAgICAnNzUwcHgnLFxyXG4gICAgICAgICcxMDAwcHgnLFxyXG4gICAgICAgICcxMTgwcHgnLFxyXG4gICAgICAgIG51bGwsXHJcbiAgICAgICAgJ2NhbGMoNTAlICsgODY1cHgpJyxcclxuICAgICAgXSxcclxuICAgICAgbXI6IFsnYXV0bycsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICctMjIwcHgnXSxcclxuICAgICAgbWw6ICdhdXRvJyxcclxuICAgICAgJy5yZWFjdC1tdWx0aS1jYXJvdXNlbC1pdGVtJzoge1xyXG4gICAgICAgIHRyYW5zaXRpb246ICdhbGwgMC4yNXMnLFxyXG4gICAgICB9LFxyXG4gICAgICAnLnJlYWN0LW11bHRpLWNhcm91c2VsLWl0ZW0tLWFjdGl2ZTpudGgtb2YtdHlwZSg0biknOiB7XHJcbiAgICAgICAgb3BhY2l0eTogJzAuNScsXHJcbiAgICAgICAgJ0BtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2MjBweCknOiB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgcmV2aWV3Q2FyZDoge1xyXG4gICAgYm94U2hhZG93OiAnMHB4IDBweCAxcHggcmdiYSgzOCwgNzgsIDExOCwgMC4zNSknLFxyXG4gICAgdHJhbnNpdGlvbjogJ2FsbCAwLjNzJyxcclxuICAgIGJvcmRlclJhZGl1czogJzZweCcsXHJcbiAgICBwOiBbXHJcbiAgICAgICczMHB4IDIwcHggMzVweCcsXHJcbiAgICAgICczMHB4IDI1cHggMzVweCcsXHJcbiAgICAgICczMHB4IDIwcHggMzVweCcsXHJcbiAgICAgICczNXB4IDMwcHggNDBweCA0MHB4JyxcclxuICAgICAgJzMwcHggMzBweCAzNXB4JyxcclxuICAgICAgJzM1cHggMzBweCA0MHB4IDQwcHgnLFxyXG4gICAgXSxcclxuICAgIGJnOiAnd2hpdGUnLFxyXG4gICAgdGV4dEFsaWduOiAnbGVmdCcsXHJcbiAgICBtOiBbXHJcbiAgICAgICcyOHB4IDVweCAzMHB4IDVweCcsXHJcbiAgICAgICcyOHB4IDIwcHggMzBweCAyMHB4JyxcclxuICAgICAgJzI4cHggMTVweCAzMHB4IDE1cHgnLFxyXG4gICAgICAnMjhweCAxNXB4IDMwcHggMTVweCcsXHJcbiAgICAgICczMHB4IDIwcHggNDBweCcsXHJcbiAgICBdLFxyXG4gICAgJyY6aG92ZXInOiB7XHJcbiAgICAgIGJveFNoYWRvdzogJzBweCA2cHggNDdweCByZ2JhKDM4LCA3OCwgMTE4LCAwLjEpJyxcclxuICAgIH0sXHJcbiAgICAnLnJhdGluZyc6IHtcclxuICAgICAgbWI6IFsxLCBudWxsLCBudWxsLCAyXSxcclxuICAgICAgdWw6IHtcclxuICAgICAgICBwbDogMCxcclxuICAgICAgICBsaXN0U3R5bGU6ICdub25lJyxcclxuICAgICAgICBtYjogMCxcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIH0sXHJcbiAgICAgIHN2Zzoge1xyXG4gICAgICAgIG1hcmdpblJpZ2h0OiAnMnB4JyxcclxuICAgICAgICAnJjpsYXN0LW9mLXR5cGUnOiB7XHJcbiAgICAgICAgICBtYXJnaW5SaWdodDogMCxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICAnLnN0YXInOiB7XHJcbiAgICAgICAgY29sb3I6ICd5ZWxsb3cnLFxyXG4gICAgICAgIG1yOiAnMXB4JyxcclxuICAgICAgfSxcclxuICAgICAgJy5zdGFyLW8nOiB7XHJcbiAgICAgICAgY29sb3I6ICcjZGRkJyxcclxuICAgICAgICBtcjogJzFweCcsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgJy5jYXJkLWZvb3Rlcic6IHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgbWFyZ2luVG9wOiBbNSwgbnVsbCwgbnVsbCwgJzMzcHgnXSxcclxuICAgICAgJy5pbWFnZSc6IHtcclxuICAgICAgICBmbGV4U2hyaW5rOiAwLFxyXG4gICAgICAgIG1yOiBbMywgbnVsbCwgbnVsbCwgNF0sXHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGltZzoge1xyXG4gICAgICAgICAgd2lkdGg6ICc1NXB4JyxcclxuICAgICAgICAgIGhlaWdodDogJzU1cHgnLFxyXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcclxuICAgICAgICAgIG9iamVjdEZpdDogJ2NvdmVyJyxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHRpdGxlOiB7XHJcbiAgICBmb250U2l6ZTogWzEsIDJdLFxyXG4gICAgZm9udFdlaWdodDogNzAwLFxyXG4gICAgbWI6IFszLCBudWxsLCBudWxsLCAnMjJweCddLFxyXG4gICAgY29sb3I6ICd0ZXh0JyxcclxuICAgIGxpbmVIZWlnaHQ6IDEuNixcclxuICB9LFxyXG4gIGRlc2NyaXB0aW9uOiB7XHJcbiAgICBmb250U2l6ZTogWzEsIG51bGwsIG51bGwsIDJdLFxyXG4gICAgZm9udFdlaWdodDogJ25vcm1hbCcsXHJcbiAgICBjb2xvcjogJ3RleHQnLFxyXG4gICAgbGluZUhlaWdodDogWzEuODUsIG51bGwsIDJdLFxyXG4gIH0sXHJcbiAgaGVhZGluZzoge1xyXG4gICAgZm9udFNpemU6IFsxLCBudWxsLCBudWxsLCAyXSxcclxuICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICAgIG1iOiAnM3B4JyxcclxuICAgIGNvbG9yOiAndGV4dCcsXHJcbiAgICBsaW5lSGVpZ2h0OiAxLjMsXHJcbiAgfSxcclxuICBkZXNpZ25hdGlvbjoge1xyXG4gICAgY29sb3I6ICcjMjVBMEZGJyxcclxuICAgIGZvbnRXZWlnaHQ6ICc1MDAnLFxyXG4gICAgZm9udFNpemU6IDEsXHJcbiAgICBsaW5lSGVpZ2h0OiAxLjQsXHJcbiAgfSxcclxufTtcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBHcmlkLCBCb3gsIEhlYWRpbmcsIFRleHQgfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCBTZWN0aW9uSGVhZGVyIGZyb20gJ2NvbXBvbmVudHMvc2VjdGlvbi1oZWFkZXInO1xyXG5cclxuaW1wb3J0IFBhdHRlcm5CRyBmcm9tICdhc3NldHMvcGF0dGVybkJHLnBuZyc7XHJcbmltcG9ydCBBcnJvd09kZCBmcm9tICdhc3NldHMvYXJyb3dPZGQucG5nJztcclxuaW1wb3J0IEFycm93RXZlbiBmcm9tICdhc3NldHMvYXJyb3dFdmVuLnBuZyc7XHJcblxyXG5jb25zdCBkYXRhID0gW1xyXG4gIHtcclxuICAgIGlkOiAxLFxyXG4gICAgdGl0bGU6ICdTZXQgZGlzYnVyc2VtZW50IEluc3RydWN0aW9ucycsXHJcbiAgICB0ZXh0OlxyXG4gICAgICAnR2V0IHlvdXIgYmxvb2QgdGVzdHMgZGVsaXZlcmVkIGF0IGhvbWUgY29sbGVjdCBhIHNhbXBsZSBmcm9tIHRoZSB5b3VyIGJsb29kIHRlc3RzLicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMixcclxuICAgIHRpdGxlOiAnQXNzZW1ibHkgcmV0cmlldmVzIGZ1bmRzIGZyb20geW91ciBhY2NvdW50JyxcclxuICAgIHRleHQ6XHJcbiAgICAgICdHZXQgeW91ciBibG9vZCB0ZXN0cyBkZWxpdmVyZWQgYXQgaG9tZSBjb2xsZWN0IGEgc2FtcGxlIGZyb20gdGhlIHlvdXIgYmxvb2QgdGVzdHMuJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAzLFxyXG4gICAgdGl0bGU6ICdBc3NlbWJseSBpbml0aWF0ZXMgZGlzYnVyc2VtZW50JyxcclxuICAgIHRleHQ6XHJcbiAgICAgICdHZXQgeW91ciBibG9vZCB0ZXN0cyBkZWxpdmVyZWQgYXQgaG9tZSBjb2xsZWN0IGEgc2FtcGxlIGZyb20gdGhlIHlvdXIgYmxvb2QgdGVzdHMuJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA0LFxyXG4gICAgdGl0bGU6ICdDdXN0b21lciByZWNlaXZlcyBmdW5kcyBwYXltZW50JyxcclxuICAgIHRleHQ6XHJcbiAgICAgICdHZXQgeW91ciBibG9vZCB0ZXN0cyBkZWxpdmVyZWQgYXQgaG9tZSBjb2xsZWN0IGEgc2FtcGxlIGZyb20gdGhlIHlvdXIgYmxvb2QgdGVzdHMuJyxcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV29ya0Zsb3coKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIHN4PXtzdHlsZXMud29ya2Zsb3d9PlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxTZWN0aW9uSGVhZGVyXHJcbiAgICAgICAgICBzbG9nYW49XCJXaGF0cyB0aGUgZnVuY3Rpb25cIlxyXG4gICAgICAgICAgdGl0bGU9XCJMZXTigJlzIHNlZSBob3cgaXQgd29ya3NcIlxyXG4gICAgICAgICAgaXNXaGl0ZT17dHJ1ZX1cclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8R3JpZCBzeD17c3R5bGVzLmdyaWR9PlxyXG4gICAgICAgICAge2RhdGEubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5jYXJkfSBrZXk9e2l0ZW0uaWR9PlxyXG4gICAgICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5pY29uQm94fT57YDAke2l0ZW0uaWR9YH08L0JveD5cclxuICAgICAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMud3JhcHBlcn0+XHJcbiAgICAgICAgICAgICAgICA8SGVhZGluZyBzeD17c3R5bGVzLndyYXBwZXIudGl0bGV9PntpdGVtLnRpdGxlfTwvSGVhZGluZz5cclxuICAgICAgICAgICAgICAgIDxUZXh0IHN4PXtzdHlsZXMud3JhcHBlci5zdWJUaXRsZX0+e2l0ZW0udGV4dH08L1RleHQ+XHJcbiAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgd29ya2Zsb3c6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ3ByaW1hcnknLFxyXG4gICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7UGF0dGVybkJHfSlgLFxyXG4gICAgYmFja2dyb3VuZFJlcGVhdDogYG5vLXJlcGVhdGAsXHJcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXIgY2VudGVyJyxcclxuICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICBweTogWzgsIG51bGwsIDksIG51bGwsIG51bGwsIDEwXSxcclxuICAgICcmOjpiZWZvcmUnOiB7XHJcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICBjb250ZW50OiAnXCJcIicsXHJcbiAgICAgIHRvcDogMCxcclxuICAgICAgcmlnaHQ6IDAsXHJcbiAgICAgIGJhY2tncm91bmQ6XHJcbiAgICAgICAgJ2xpbmVhci1ncmFkaWVudCgtNDVkZWcsIHJnYmEoNDIsNzIsMTI1LCAwLjMpIDI1JSwgdHJhbnNwYXJlbnQgMjUlLCB0cmFuc3BhcmVudCA1MCUsIHJnYmEoNDIsNzIsMTI1LCAwLjMpIDUwJSwgcmdiYSg0Miw3MiwxMjUsIDAuMykgNzUlLCB0cmFuc3BhcmVudCA3NSUsIHRyYW5zcGFyZW50KScsXHJcbiAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgIGJhY2tncm91bmRTaXplOiAnMzUwcHggMzUwcHgnLFxyXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgb3BhY2l0eTogMC4zLFxyXG4gICAgICB6SW5kZXg6IDAsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZ3JpZDoge1xyXG4gICAgbWI6IC0xLFxyXG4gICAgcHQ6IDAsXHJcbiAgICBncmlkR2FwOiBbXHJcbiAgICAgICczNXB4IDAnLFxyXG4gICAgICBudWxsLFxyXG4gICAgICAnNDVweCA1MHB4JyxcclxuICAgICAgbnVsbCxcclxuICAgICAgJzUwcHggMjVweCcsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgICc1MHB4IDY1cHgnLFxyXG4gICAgXSxcclxuICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFtcclxuICAgICAgJ3JlcGVhdCgxLDFmciknLFxyXG4gICAgICBudWxsLFxyXG4gICAgICAncmVwZWF0KDIsMWZyKScsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgICdyZXBlYXQoNCwxZnIpJyxcclxuICAgIF0sXHJcbiAgfSxcclxuICBjYXJkOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgdGV4dEFsaWduOiBbJ2NlbnRlcicsIG51bGwsICdsZWZ0J10sXHJcbiAgICB3aWR0aDogWycxMDAlJywgJzgwJScsICcxMDAlJ10sXHJcbiAgICBteDogJ2F1dG8nLFxyXG4gICAgJyY6OmJlZm9yZSc6IHtcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcclxuICAgICAgdG9wOiAwLFxyXG4gICAgICBsZWZ0OiBbMCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgNzUsIG51bGwsIDEwMF0sXHJcbiAgICAgIGJhY2tncm91bmRSZXBlYXQ6IGBuby1yZXBlYXRgLFxyXG4gICAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXIgY2VudGVyJyxcclxuICAgICAgd2lkdGg6IDIxNSxcclxuICAgICAgaGVpZ2h0OiA2MCxcclxuICAgICAgb3BhY2l0eTogMC4zLFxyXG4gICAgICAnQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMjIwcHgpJzoge1xyXG4gICAgICAgIGRpc3BsYXk6ICdub25lJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICAnJjpudGgtb2YtdHlwZSgybi0xKTo6YmVmb3JlJzoge1xyXG4gICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtBcnJvd09kZH0pYCxcclxuICAgIH0sXHJcbiAgICAnJjpudGgtb2YtdHlwZSgybik6OmJlZm9yZSc6IHtcclxuICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7QXJyb3dFdmVufSlgLFxyXG4gICAgICB0b3A6IDE3LFxyXG4gICAgfSxcclxuICAgICcmOmxhc3QtY2hpbGQ6OmJlZm9yZSc6IHtcclxuICAgICAgZGlzcGxheTogJ25vbmUnLFxyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICBpY29uQm94OiB7XHJcbiAgICB3aWR0aDogWyc1MHB4JywgbnVsbCwgJzYwcHgnLCBudWxsLCBudWxsLCAnNzBweCddLFxyXG4gICAgaGVpZ2h0OiBbJzUwcHgnLCBudWxsLCAnNjBweCcsIG51bGwsIG51bGwsICc3MHB4J10sXHJcbiAgICBmbGV4U2hyaW5rOiAwLFxyXG4gICAgYm9yZGVyUmFkaXVzOiBbMTUsIG51bGwsIDIzLCBudWxsLCBudWxsLCAzMF0sXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIG1iOiBbNSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgNl0sXHJcbiAgICBteDogWydhdXRvJywgbnVsbCwgMF0sXHJcbiAgICBmb250U2l6ZTogWzYsIG51bGwsIDcsIG51bGwsIG51bGwsICczMHB4J10sXHJcbiAgICBmb250V2VpZ2h0OiA3MDAsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICBjb2xvcjogJyMyMzQ1ODInLFxyXG4gIH0sXHJcbiAgd3JhcHBlcjoge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgbXQ6ICctNXB4JyxcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgIGZvbnRTaXplOiBbMywgbnVsbCwgNCwgbnVsbCwgbnVsbCwgNV0sXHJcbiAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICBsaW5lSGVpZ2h0OiBbMS40LCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAxLjU1XSxcclxuICAgICAgcHI6IFswLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAyXSxcclxuICAgICAgbWI6IFsyLCAzXSxcclxuICAgIH0sXHJcblxyXG4gICAgc3ViVGl0bGU6IHtcclxuICAgICAgZm9udFNpemU6IDEsXHJcbiAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcclxuICAgICAgbGluZUhlaWdodDogWzEuODUsIG51bGwsIG51bGwsIDEuOSwgMl0sXHJcbiAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICBvcGFjaXR5OiAwLjY1LFxyXG4gICAgICBwcjogWzAsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDVdLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgLy8gZXhhbXBsZSBjb2xvcnMgd2l0aCBkYXJrIG1vZGVcclxuICBjb2xvcnM6IHtcclxuICAgIHRleHQ6ICcjMzQzRDQ4JywgLy8gYm9keSBjb2xvciBhbmQgcHJpbWFyeSBjb2xvclxyXG4gICAgdGV4dF9zZWNvbmRhcnk6ICcjMDIwNzNFJywgLy8gc2Vjb25kYXJ5IGJvZHkgY29sb3JcclxuICAgIGhlYWRpbmc6ICcjMjQ0ODg2JywgLy8gcHJpbWFyeSBoZWFkaW5nIGNvbG9yXHJcbiAgICBoZWFkaW5nX3NlY29uZGFyeTogJyMwRjIxMzcnLCAvLyBoZWFkaW5nIGNvbG9yXHJcbiAgICBiYWNrZ3JvdW5kOiAnI0ZGRkZGRicsIC8vIGJvZHkgYmFja2dyb3VuZCBjb2xvclxyXG4gICAgYmFja2dyb3VuZF9zZWNvbmRhcnk6ICcjRjlGQkZEJywgLy8gc2Vjb25kYXJ5IGJhY2tncm91bmQgY29sb3JcclxuICAgIGJvcmRlcl9jb2xvcjogJyNFNUVDRjQnLCAvLyBib3JkZXIgY29sb3JcclxuICAgIHByaW1hcnk6ICcjMUYzRTc2JywgLy8gcHJpbWFyeSBidXR0b24gYW5kIGxpbmsgY29sb3JcclxuICAgIHNlY29uZGFyeTogJyMyNUNCOUUnLCAvLyBzZWNvbmRhcnkgY29sb3IgLSBjYW4gYmUgdXNlZCBmb3IgaG92ZXIgc3RhdGVzXHJcbiAgICBtdXRlZDogJyM3QjgxODgnLCAvLyBtdXRlZCBjb2xvclxyXG4gICAgYWNjZW50OiAnIzYwOScsIC8vIGEgY29udHJhc3QgY29sb3IgZm9yIGVtcGhhc2l6aW5nIFVJXHJcbiAgICB5ZWxsb3c6ICcjRjZDNDE2JyxcclxuXHJcbiAgICAvLyBoaWdobGlnaHRcdGEgYmFja2dyb3VuZCBjb2xvciBmb3IgaGlnaGxpZ2h0aW5nIHRleHRcclxuICAgIG1vZGVzOiB7XHJcbiAgICAgIGRhcms6IHtcclxuICAgICAgICB0ZXh0OiAnI2ZmZicsXHJcbiAgICAgICAgYmFja2dyb3VuZDogJyMwMDAnLFxyXG4gICAgICAgIHByaW1hcnk6ICcjMGNmJyxcclxuICAgICAgICBzZWNvbmRhcnk6ICcjMDljJyxcclxuICAgICAgICBtdXRlZDogJyMxMTEnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGJyZWFrcG9pbnRzOiBbXHJcbiAgICAnNDgwcHgnLFxyXG4gICAgJzY0MHB4JyxcclxuICAgICc3NjhweCcsXHJcbiAgICAnMTAyNHB4JyxcclxuICAgICcxMjIwcHgnLFxyXG4gICAgJzEzNjZweCcsXHJcbiAgICAnMTYyMHB4JyxcclxuICBdLFxyXG4gIGZvbnRzOiB7XHJcbiAgICBib2R5OiBcIidETSBTYW5zJywgc2Fucy1zZXJpZlwiLFxyXG4gICAgaGVhZGluZzogXCInRE0gU2FucycsIHNhbnMtc2VyaWZcIixcclxuICB9LFxyXG4gIGZvbnRTaXplczogWzEyLCAxNSwgMTYsIDE4LCAyMCwgMjIsIDI0LCAyOCwgMzIsIDM2LCA0MiwgNDgsIDUyLCA2NF0sXHJcbiAgZm9udFdlaWdodHM6IHtcclxuICAgIGJvZHk6ICdub3JtYWwnLFxyXG4gICAgaGVhZGluZzogNTAwLFxyXG4gICAgYm9sZDogNzAwLFxyXG4gIH0sXHJcbiAgbGluZUhlaWdodHM6IHtcclxuICAgIGJvZHk6IDEuOCxcclxuICAgIGhlYWRpbmc6IDEuNSxcclxuICB9LFxyXG4gIGxldHRlclNwYWNpbmdzOiB7XHJcbiAgICBib2R5OiAnbm9ybWFsJyxcclxuICAgIGNhcHM6ICcwLjJlbScsXHJcbiAgICBoZWFkaW5nOiAnLTAuNXB4JyxcclxuICB9LFxyXG4gIHNwYWNlOiBbMCwgNSwgMTAsIDE1LCAyMCwgMjUsIDMwLCA1MCwgODAsIDEwMCwgMTIwLCAxNTBdLFxyXG4gIC8vIHZhcmlhbnRzIGNhbiB1c2UgY3VzdG9tLCB1c2VyLWRlZmluZWQgbmFtZXNcclxuICBsYXlvdXQ6IHtcclxuICAgIGNvbnRhaW5lcjoge1xyXG4gICAgICBtYXhXaWR0aDogW1xyXG4gICAgICAgICcxMDAlJyxcclxuICAgICAgICBudWxsLFxyXG4gICAgICAgIG51bGwsXHJcbiAgICAgICAgJzc4MHB4JyxcclxuICAgICAgICAnMTAyMHB4JyxcclxuICAgICAgICAnMTIwMHB4JyxcclxuICAgICAgICBudWxsLFxyXG4gICAgICAgICcxMzEwcHgnLFxyXG4gICAgICBdLFxyXG4gICAgICBweDogWzQsIDZdLFxyXG4gICAgfSxcclxuICAgIGhlYWRlcjoge1xyXG4gICAgICBjb2xvcjogJyMwMjA3M0UnLFxyXG4gICAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcclxuICAgICAgcHk6IDMsXHJcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgfSxcclxuICAgIHRvb2xiYXI6IHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcclxuICAgIH0sXHJcbiAgICBtYWluOiB7fSxcclxuICB9LFxyXG4gIHNlY3Rpb246IHtcclxuICAgIGtleUZlYXR1cmU6IHtcclxuICAgICAgcHk6IFs4LCBudWxsLCA5LCBudWxsLCBudWxsLCAxMF0sXHJcbiAgICB9LFxyXG4gICAgZmVhdHVyZToge1xyXG4gICAgICBweTogWzgsIG51bGwsIDksIG51bGwsIG51bGwsIDEwXSxcclxuICAgIH0sXHJcbiAgICBwYXJ0bmVyOiB7XHJcbiAgICAgIHB0OiBbMiwgbnVsbCwgbnVsbCwgNV0sXHJcbiAgICAgIHBiOiBbOCwgbnVsbCwgOSwgbnVsbCwgbnVsbCwgMTBdLFxyXG4gICAgfSxcclxuICAgIHRlc3RpbW9uaWFsOiB7XHJcbiAgICAgIHB5OiBbOCwgbnVsbCwgOSwgbnVsbCwgbnVsbCwgMTBdLFxyXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICB9LFxyXG4gICAgc2VjdXJlUGF5bWVudDoge1xyXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICBwdDogOSxcclxuICAgIH0sXHJcbiAgICBmYXE6IHtcclxuICAgICAgcHk6IFs4LCBudWxsLCA5LCBudWxsLCBudWxsLCAxMF0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc2VjdGlvbkhlYWRlcjoge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBtdDogLTEsXHJcbiAgICBtYXJnaW5Cb3R0b206IFsnNTBweCcsIG51bGwsICc2MHB4JywgbnVsbCwgJzY1cHgnLCAnNzVweCddLFxyXG4gICAgdGl0bGU6IHtcclxuICAgICAgZm9udFNpemU6IFsnMjRweCcsIG51bGwsICcyOHB4JywgbnVsbCwgbnVsbCwgJzMycHgnLCBudWxsLCAnMzZweCddLFxyXG4gICAgICBjb2xvcjogJ2hlYWRpbmdfc2Vjb25kYXJ5JyxcclxuICAgICAgbGluZUhlaWdodDogWzEuMywgbnVsbCwgbnVsbCwgMS4yXSxcclxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgZm9udFdlaWdodDogJzcwMCcsXHJcbiAgICAgIGxldHRlclNwYWNpbmc6ICctLjVweCcsXHJcbiAgICB9LFxyXG5cclxuICAgIHN1YlRpdGxlOiB7XHJcbiAgICAgIGZvbnRTaXplOiBbMCwgbnVsbCwgJzE0cHgnXSxcclxuICAgICAgY29sb3I6ICdoZWFkaW5nJyxcclxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgbGV0dGVyU3BhY2luZzogWycxLjVweCcsIG51bGwsICcycHgnXSxcclxuICAgICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICc3MDAnLFxyXG4gICAgICBtYjogJzhweCcsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IDEuNSxcclxuICAgIH0sXHJcbiAgfSxcclxuICB0ZXh0OiB7XHJcbiAgICBoZWFkaW5nOiB7XHJcbiAgICAgIGZvbnRGYW1pbHk6ICdoZWFkaW5nJyxcclxuICAgICAgbGluZUhlaWdodDogJ2hlYWRpbmcnLFxyXG4gICAgICBmb250V2VpZ2h0OiAnaGVhZGluZycsXHJcbiAgICAgIGZvbnRTaXplOiA0LFxyXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAnaGVhZGluZycsXHJcbiAgICAgIGNvbG9yOiAnaGVhZGluZycsXHJcbiAgICB9LFxyXG4gICAgaGVyb1ByaW1hcnk6IHtcclxuICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgIGZvbnRTaXplOiBbXHJcbiAgICAgICAgJzQwcHgnLFxyXG4gICAgICAgICc1MnB4JyxcclxuICAgICAgICAnNjBweCcsXHJcbiAgICAgICAgJzQ4cHgnLFxyXG4gICAgICAgICc1MnB4JyxcclxuICAgICAgICAnNjBweCcsXHJcbiAgICAgICAgJzY2cHgnLFxyXG4gICAgICAgICc3OHB4JyxcclxuICAgICAgXSxcclxuICAgICAgbGluZUhlaWdodDogMS4yLFxyXG4gICAgICBmb250V2VpZ2h0OiA3MDAsXHJcbiAgICAgIG1iOiBbNSwgbnVsbCwgbnVsbCwgbnVsbCwgJzMwcHgnXSxcclxuICAgIH0sXHJcbiAgICBoZXJvU2Vjb25kYXJ5OiB7XHJcbiAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICBmb250U2l6ZTogWzIsIDMsIDQsICcxN3B4JywgbnVsbCwgMywgJzE5cHgnLCA0XSxcclxuICAgICAgbGluZUhlaWdodDogWzIsIG51bGwsIG51bGwsIG51bGwsIDIuMl0sXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2R5JyxcclxuICAgICAgcHI6IFswLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAnMTAwcHgnLCBudWxsLCAnMTI1cHgnXSxcclxuICAgICAgbWI6IFsnMzVweCcsIG51bGwsIG51bGwsIG51bGwsICc0MHB4JywgbnVsbCwgbnVsbCwgN10sXHJcbiAgICB9LFxyXG4gICAgdGl0bGU6IHtcclxuICAgICAgLy8gZXh0ZW5kcyB0aGUgdGV4dC5oZWFkaW5nIHN0eWxlc1xyXG4gICAgICB2YXJpYW50OiAndGV4dC5oZWFkaW5nJyxcclxuICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gICAgICBmb250U2l6ZTogMTgsXHJcbiAgICAgIGxpbmVIZWlnaHQ6ICczMHB4JyxcclxuICAgICAgY29sb3I6ICcjMEYyMTM3JyxcclxuICAgIH0sXHJcbiAgICBsZWFkOiB7XHJcbiAgICAgIGZvbnRTaXplOiA0MCxcclxuICAgICAgZm9udEZhbWlseTogJ0RNIFNhbnMnLFxyXG4gICAgICBmb250V2VpZ2h0OiAnNTAwJyxcclxuICAgICAgbGluZUhlaWdodDogJzYwcHgnLFxyXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAnLTEuNXB4JyxcclxuICAgICAgY29sb3I6ICcjMEYyMTM3JyxcclxuICAgIH0sXHJcbiAgICBtdXRlZDoge1xyXG4gICAgICBsaW5lSGVpZ2h0OiAnMjZweCcsXHJcbiAgICAgIGNvbG9yOiAnbXV0ZWQnLFxyXG4gICAgfSxcclxuICAgIHNlY29uZGFyeToge1xyXG4gICAgICBmb250V2VpZ2h0OiA1MDAsXHJcbiAgICAgIGNvbG9yOiAnIzAwQTk5RCcsXHJcbiAgICAgIGxpbmVIZWlnaHQ6ICc0MHB4JyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBsaW5rczoge1xyXG4gICAgZGVmYXVsdDoge1xyXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgIH0sXHJcbiAgICBib2xkOiB7XHJcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICAgIH0sXHJcbiAgICBuYXY6IHtcclxuICAgICAgZGlzcGxheTogWydub25lJywgbnVsbCwgJ2lubGluZS1ibG9jayddLFxyXG4gICAgICBweDogMjUsXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxyXG4gICAgfSxcclxuICAgIGZvb3Rlcjoge1xyXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgICBweDogMCxcclxuICAgICAgY29sb3I6ICdpbmhlcml0JyxcclxuICAgICAgdGV4dERlY29yYXRpb246ICdub25lJyxcclxuICAgIH0sXHJcbiAgICBsb2dvOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBpbWFnZXM6IHtcclxuICAgIGF2YXRhcjoge1xyXG4gICAgICB3aWR0aDogNDgsXHJcbiAgICAgIGhlaWdodDogNDgsXHJcbiAgICAgIGJvcmRlclJhZGl1czogOTk5OTksXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgLy8gdmFyaWFudHMgZm9yIGJ1dHRvbnNcclxuICBidXR0b25zOiB7XHJcbiAgICBtZW51OiB7XHJcbiAgICAgIGRpc3BsYXk6IFtudWxsLCBudWxsLCAnbm9uZSddLFxyXG4gICAgfSwgLy8gZGVmYXVsdCB2YXJpYW50IGZvciBNZW51QnV0dG9uXHJcbiAgICAvLyB5b3UgY2FuIHJlZmVyZW5jZSBvdGhlciB2YWx1ZXMgZGVmaW5lZCBpbiB0aGUgdGhlbWVcclxuICAgIGRlZmF1bHRCdG46IHtcclxuICAgICAgYm9yZGVyUmFkaXVzOiAnNDVweCcsXHJcbiAgICAgIGZvbnRTaXplOiBbJzE0cHgnLCAxLCBudWxsLCBudWxsLCAyXSxcclxuICAgICAgbGV0dGVyU3BhY2luZ3M6IFsnLTAuNXB4JywgbnVsbCwgbnVsbCwgbnVsbCwgJy0wLjE1cHgnXSxcclxuICAgICAgcGFkZGluZzogWycxMXB4IDIwcHggMTBweCcsIG51bGwsIG51bGwsIG51bGwsICcxM3B4IDMwcHgnXSxcclxuICAgICAgZm9udEZhbWlseTogJ2JvZHknLFxyXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICAgbGluZUhlaWdodDogMS4yLFxyXG4gICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuMjVzJyxcclxuICAgICAgZm9udFdlaWdodDogNTAwLFxyXG4gICAgICAnJjpmb2N1cyc6IHtcclxuICAgICAgICBvdXRsaW5lOiAwLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHByaW1hcnk6IHtcclxuICAgICAgdmFyaWFudDogJ2J1dHRvbnMuZGVmYXVsdEJ0bicsXHJcbiAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICBiZzogJ3ByaW1hcnknLFxyXG4gICAgICAnJjpob3Zlcic6IHtcclxuICAgICAgICBib3hTaGFkb3c6ICdyZ2JhKDMxLCA2MiwgMTE4LCAwLjU3KSAwcHggOXB4IDIwcHggLTVweCcsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgd2hpdGVCdXR0b246IHtcclxuICAgICAgdmFyaWFudDogJ2J1dHRvbnMuZGVmYXVsdEJ0bicsXHJcbiAgICAgIGNvbG9yOiAnaGVhZGluZ19zZWNvbmRhcnknLFxyXG4gICAgICBiZzogJ3doaXRlJyxcclxuICAgICAgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgYm94U2hhZG93OiAncmdiYSgwLCAwLCAwLCAwLjUpIDBweCAxMnB4IDI0cHggLTEwcHgnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHNlY29uZGFyeToge1xyXG4gICAgICB2YXJpYW50OiAnYnV0dG9ucy5kZWZhdWx0QnRuJyxcclxuICAgICAgYm9yZGVyOiAnMS41cHggc29saWQgd2hpdGUnLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXHJcbiAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAnJjpob3Zlcic6IHtcclxuICAgICAgICBiZzogJ3doaXRlJyxcclxuICAgICAgICBjb2xvcjogJ2hlYWRpbmdfc2Vjb25kYXJ5JyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB0ZXh0QnV0dG9uOiB7XHJcbiAgICAgIHZhcmlhbnQ6ICdidXR0b25zLmRlZmF1bHRCdG4nLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXHJcbiAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICBzdmc6IHtcclxuICAgICAgICBmb250U2l6ZTogWzQsIDZdLFxyXG4gICAgICAgIG1yOiAyLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGNhcmRzOiB7XHJcbiAgICBwcmltYXJ5OiB7XHJcbiAgICAgIHBhZGRpbmc6IDIsXHJcbiAgICAgIGJvcmRlclJhZGl1czogNCxcclxuICAgIH0sXHJcbiAgICBvZmZlcjoge1xyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICBmbGV4OiBbJzEgMSBjYWxjKDUwJSAtIDE2cHgpJywgJzEgMSAyMCUnXSxcclxuICAgICAgbWluSGVpZ2h0OiAxMzAsXHJcbiAgICAgIG06IDIsXHJcbiAgICAgIGJhY2tncm91bmQ6ICcjRkZGRkZGJyxcclxuICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICNFREVGRjYnLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IDUsXHJcbiAgICB9LFxyXG4gICAgZmVhdHVyZUNhcmQ6IHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCcsXHJcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxyXG4gICAgICBwOiAzLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGZvcm1zOiB7XHJcbiAgICBsYWJlbDoge1xyXG4gICAgICBmb250U2l6ZTogMSxcclxuICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gICAgfSxcclxuICAgIGlucHV0OiB7XHJcbiAgICAgIGJvcmRlclJhZGl1czogOCxcclxuICAgICAgYm9yZGVyQ29sb3I6ICdib3JkZXJfY29sb3InLFxyXG4gICAgICBoZWlnaHQ6IDYwLFxyXG4gICAgICAnJjpmb2N1cyc6IHtcclxuICAgICAgICBib3JkZXJDb2xvcjogJ3ByaW1hcnknLFxyXG4gICAgICAgIGJveFNoYWRvdzogKHQpID0+IGAwIDAgMCAycHggJHt0LmNvbG9ycy5wcmltYXJ5fWAsXHJcbiAgICAgICAgb3V0bGluZTogJ25vbmUnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICBiYWRnZXM6IHtcclxuICAgIHByaW1hcnk6IHtcclxuICAgICAgY29sb3I6ICdiYWNrZ3JvdW5kJyxcclxuICAgICAgYmc6ICcjMjhBNUZGJyxcclxuICAgICAgYm9yZGVyUmFkaXVzOiAzMCxcclxuICAgICAgcDogJzNweCAxMXB4JyxcclxuICAgICAgZm9udFNpemU6IDEsXHJcbiAgICAgIGxldHRlclNwYWNpbmc6ICctMC41cHgnLFxyXG4gICAgfSxcclxuICAgIG91dGxpbmU6IHtcclxuICAgICAgY29sb3I6ICdwcmltYXJ5JyxcclxuICAgICAgYmc6ICd0cmFuc3BhcmVudCcsXHJcbiAgICAgIGJveFNoYWRvdzogJ2luc2V0IDAgMCAwIDFweCcsXHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIHN0eWxlczoge1xyXG4gICAgLy8gVG8gYWRkIGJhc2UsIHRvcC1sZXZlbCBzdHlsZXMgdG8gdGhlIDxib2R5PiBlbGVtZW50LCB1c2UgdGhlbWUuc3R5bGVzLnJvb3QuXHJcbiAgICByb290OiB7XHJcbiAgICAgIGZvbnRGYW1pbHk6ICdib2R5JyxcclxuICAgICAgbGluZUhlaWdodDogJ2JvZHknLFxyXG4gICAgICBmb250V2VpZ2h0OiAnYm9keScsXHJcbiAgICAgIGZvbnRTbW9vdGhpbmc6ICdhbnRpYWxpYXNlZCcsXHJcbiAgICAgICcubW9kYWwtdmlkZW8tY2xvc2UtYnRuJzoge1xyXG4gICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICAgIHRvcDogJy0yNXB4JyxcclxuICAgICAgICByaWdodDogJy0yNXB4JyxcclxuICAgICAgICB3aWR0aDogJyAyNXB4JyxcclxuICAgICAgICBoZWlnaHQ6ICcyNXB4JyxcclxuICAgICAgfSxcclxuICAgICAgJy5tb2RhbC12aWRlby1tb3ZpZS13cmFwJzoge1xyXG4gICAgICAgIG1hcmdpbjogNixcclxuICAgICAgICB3aWR0aDogJ2F1dG8nLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIC8vIERpdmlkZXIgc3R5bGVzXHJcbiAgICBocjoge1xyXG4gICAgICBib3JkZXI6IDAsXHJcbiAgICAgIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCcsXHJcbiAgICAgIGJvcmRlckNvbG9yOiAnI0Q5RTBFNycsXHJcbiAgICB9LFxyXG4gICAgLy8gYWxzbyB5b3UgY2FuIHVzZSBvdGhlciBIVE1MIGVsZW1lbnRzIHN0eWxlIGhlcmVcclxuICAgIHVsOiB7XHJcbiAgICAgIGxpc3RTdHlsZTogJ25vbmUnLFxyXG4gICAgfSxcclxuICAgIHNyT25seToge1xyXG4gICAgICBib3JkZXI6ICcwICFpbXBvcnRhbnQnLFxyXG4gICAgICBjbGlwOiAncmVjdCgxcHgsIDFweCwgMXB4LCAxcHgpICFpbXBvcnRhbnQnLFxyXG4gICAgICBjbGlwUGF0aDogJ2luc2V0KDUwJSkgIWltcG9ydGFudCcsXHJcbiAgICAgIGhlaWdodDogJzFweCAhaW1wb3J0YW50JyxcclxuICAgICAgbWFyZ2luOiAnLTFweCAhaW1wb3J0YW50JyxcclxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4gIWltcG9ydGFudCcsXHJcbiAgICAgIHBhZGRpbmc6ICcwICFpbXBvcnRhbnQnLFxyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlICFpbXBvcnRhbnQnLFxyXG4gICAgICB3aWR0aDogJzFweCAhaW1wb3J0YW50JyxcclxuICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCAhaW1wb3J0YW50JyxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGVtb3Rpb24vY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmcmFtZXItbW90aW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyYy1kcmF3ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtY3VzdG9tLXNjcm9sbGJhcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMvZmFcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMvaW9cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbW9kYWwtdmlkZW9cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbXVsdGktY2Fyb3VzZWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc2Nyb2xsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXN0aWNreW5vZGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidGhlbWUtdWlcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==