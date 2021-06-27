webpackHotUpdate_N_E("pages/index",{

/***/ "./src/sections/package.js":
/*!*********************************!*\
  !*** ./src/sections/package.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Package; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var components_price_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/price-card */ "./src/components/price-card.js");
/* harmony import */ var components_section_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/section-header */ "./src/components/section-header.js");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");
/* harmony import */ var assets_patternBG_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/patternBG.png */ "./src/assets/patternBG.png");
/* harmony import */ var assets_patternBG_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_patternBG_png__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\reactprojects\\nexttry1\\src\\sections\\package.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */





var packages = [{
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
  priceWithUnit: 'Rs499/',
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
}];
function Package() {
  var _this = this;

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("section", {
    id: "pricing",
    sx: styles.pricing,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_section_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Let\u2019s see how it works",
    slogan: "Whats the function",
    isWhite: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
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
      lineNumber: 88,
      columnNumber: 9
    }
  }, packages.map(function (packageData) {
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_price_card__WEBPACK_IMPORTED_MODULE_2__["default"], {
      data: packageData,
      key: packageData.name,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 13
      }
    });
  }))));
}
_c = Package;
var styles = {
  pricing: {
    backgroundColor: 'primary',
    backgroundImage: "url(".concat(assets_patternBG_png__WEBPACK_IMPORTED_MODULE_5___default.a, ")"),
    backgroundRepeat: "no-repeat",
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

var _c;

$RefreshReg$(_c, "Package");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL3BhY2thZ2UuanMiXSwibmFtZXMiOlsicGFja2FnZXMiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJidXR0b25UZXh0IiwicG9pbnRzIiwiaWNvbiIsInRleHQiLCJpc0F2YWlsYWJsZSIsImhlYWRlciIsInByaWNlV2l0aFVuaXQiLCJQYWNrYWdlIiwic3R5bGVzIiwicHJpY2luZyIsImp1c3RpZnlDb250ZW50IiwiZmxleFdyYXAiLCJtYXAiLCJwYWNrYWdlRGF0YSIsImJhY2tncm91bmRDb2xvciIsImJhY2tncm91bmRJbWFnZSIsIlBhdHRlcm5CRyIsImJhY2tncm91bmRSZXBlYXQiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJiYWNrZ3JvdW5kU2l6ZSIsInB5IiwicG9zaXRpb24iLCJjb250ZW50IiwidG9wIiwicmlnaHQiLCJiYWNrZ3JvdW5kIiwid2lkdGgiLCJoZWlnaHQiLCJvcGFjaXR5IiwiekluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxRQUFRLEdBQUcsQ0FDZjtBQUNFQyxNQUFJLEVBQUUsV0FEUjtBQUVFQyxhQUFXLEVBQUUsMkJBRmY7QUFHRUMsWUFBVSxFQUFFLFlBSGQ7QUFJRUMsUUFBTSxFQUFFLENBQ047QUFDRUMsUUFBSSxFQUFFLHFEQUFDLG1FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFEUjtBQUVFQyxRQUFJLEVBQUUsMERBRlI7QUFHRUMsZUFBVyxFQUFFO0FBSGYsR0FETSxFQU1OO0FBQ0VGLFFBQUksRUFBRSxxREFBQyxtRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRFI7QUFFRUMsUUFBSSxFQUNGLGtFQUhKO0FBSUVDLGVBQVcsRUFBRTtBQUpmLEdBTk0sRUFZTjtBQUNFRixRQUFJLEVBQUUscURBQUMsbUVB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QUFDUEssbUJBQWUsRUFBRSxTQURWO0FBRVBDLG1CQUFlLGdCQUFTQywyREFBVCxNQUZSO0FBR1BDLG9CQUFnQixhQUhUO0FBSVBDLHNCQUFrQixFQUFFLGVBSmI7QUFLUEMsa0JBQWMsRUFBRSxPQUxUO0FBTVBDLE1BQUUsRUFBRSxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsQ0FBVixFQUFhLElBQWIsRUFBbUIsSUFBbkIsRUFBeUIsRUFBekIsQ0FORztBQU9QQyxZQUFRLEVBQUUsVUFQSDtBQVFQLGlCQUFhO0FBQ1hBLGNBQVEsRUFBRSxVQURDO0FBRVhDLGFBQU8sRUFBRSxJQUZFO0FBR1hDLFNBQUcsRUFBRSxDQUhNO0FBSVhDLFdBQUssRUFBRSxDQUpJO0FBS1hDLGdCQUFVLEVBQ1IsdUtBTlM7QUFPWEMsV0FBSyxFQUFFLE1BUEk7QUFRWFAsb0JBQWMsRUFBRSxhQVJMO0FBU1hRLFlBQU0sRUFBRSxNQVRHO0FBVVhDLGFBQU8sRUFBRSxHQVZFO0FBV1hDLFlBQU0sRUFBRTtBQVhHO0FBUk47QUFESSxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmY5YWU0NWY4YmFlNmM4YTM0ZGM4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4LCBDb250YWluZXIsIEZsZXggfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCBQcmljZUNhcmQgZnJvbSAnY29tcG9uZW50cy9wcmljZS1jYXJkJztcclxuaW1wb3J0IFNlY3Rpb25IZWFkZXIgZnJvbSAnY29tcG9uZW50cy9zZWN0aW9uLWhlYWRlcic7XHJcbmltcG9ydCB7IElvSW9zQ2hlY2ttYXJrQ2lyY2xlLCBJb0lvc0Nsb3NlQ2lyY2xlIH0gZnJvbSAncmVhY3QtaWNvbnMvaW8nO1xyXG5pbXBvcnQgUGF0dGVybkJHIGZyb20gJ2Fzc2V0cy9wYXR0ZXJuQkcucG5nJztcclxuXHJcbmNvbnN0IHBhY2thZ2VzID0gW1xyXG4gIHtcclxuICAgIG5hbWU6ICdGcmVlIFBsYW4nLFxyXG4gICAgZGVzY3JpcHRpb246ICdGb3IgU21hbGwgdGVhbXMgb3Igb2ZmaWNlJyxcclxuICAgIGJ1dHRvblRleHQ6ICdTaWdudXAgTm93JyxcclxuICAgIHBvaW50czogW1xyXG4gICAgICB7XHJcbiAgICAgICAgaWNvbjogPElvSW9zQ2hlY2ttYXJrQ2lyY2xlIC8+LFxyXG4gICAgICAgIHRleHQ6ICdVbHRpbWF0ZSBhY2Nlc3MgdG8gYWxsIGNvdXJzZSwgZXhlcmNpc2VzIGFuZCBhc3Nlc3NtZW50cycsXHJcbiAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpY29uOiA8SW9Jb3NDaGVja21hcmtDaXJjbGUgLz4sXHJcbiAgICAgICAgdGV4dDpcclxuICAgICAgICAgICdGcmVlIGFjY2VzcyBmb3IgYWxsIGtpbmQgb2YgZXhlcmNpc2UgY29ycmVjdGlvbnMgd2l0aCBkb3dubG9hZHMuJyxcclxuICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGljb246IDxJb0lvc0NoZWNrbWFya0NpcmNsZSAvPixcclxuICAgICAgICB0ZXh0OiAnVG90YWwgYXNzZXNzbWVudCBjb3JyZWN0aW9ucyB3aXRoIGZyZWUgZG93bmxvYWQgYWNjZXNzIHN5c3RlbScsXHJcbiAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpY29uOiA8SW9Jb3NDbG9zZUNpcmNsZSAvPixcclxuICAgICAgICB0ZXh0OiAnVW5saW1pdGVkIGRvd25sb2FkIG9mIGNvdXJzZXMgb24gdGhlIG1vYmlsZSBhcHAgY29udGVudHMnLFxyXG4gICAgICAgIGlzQXZhaWxhYmxlOiBmYWxzZSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGljb246IDxJb0lvc0Nsb3NlQ2lyY2xlIC8+LFxyXG4gICAgICAgIHRleHQ6ICdEb3dubG9hZCBhbmQgcHJpbnQgY291cnNlcyBhbmQgZXhlcmNpc2VzIGluIFBERicsXHJcbiAgICAgICAgaXNBdmFpbGFibGU6IGZhbHNlLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIGhlYWRlcjogJ1JlY29tbWVuZGVkJyxcclxuICAgIG5hbWU6ICdQcmVtaXVtJyxcclxuICAgIGRlc2NyaXB0aW9uOiAnRm9yIHN0YXJ0dXAgZW50ZXJwcmlzZScsXHJcbiAgICBwcmljZVdpdGhVbml0OiAnUnM0OTkvJyxcclxuICAgIGJ1dHRvblRleHQ6ICdTaWdudXAgTm93JyxcclxuICAgIHBvaW50czogW1xyXG4gICAgICB7XHJcbiAgICAgICAgaWNvbjogPElvSW9zQ2hlY2ttYXJrQ2lyY2xlIC8+LFxyXG4gICAgICAgIHRleHQ6ICdVbHRpbWF0ZSBhY2Nlc3MgdG8gYWxsIGNvdXJzZSwgZXhlcmNpc2VzIGFuZCBhc3Nlc3NtZW50cycsXHJcbiAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpY29uOiA8SW9Jb3NDaGVja21hcmtDaXJjbGUgLz4sXHJcbiAgICAgICAgdGV4dDpcclxuICAgICAgICAgICdGcmVlIGFjY2VzcyBmb3IgYWxsIGtpbmQgb2YgZXhlcmNpc2UgY29ycmVjdGlvbnMgd2l0aCBkb3dubG9hZHMuJyxcclxuICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGljb246IDxJb0lvc0NoZWNrbWFya0NpcmNsZSAvPixcclxuICAgICAgICB0ZXh0OiAnVG90YWwgYXNzZXNzbWVudCBjb3JyZWN0aW9ucyB3aXRoIGZyZWUgZG93bmxvYWQgYWNjZXNzIHN5c3RlbScsXHJcbiAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpY29uOiA8SW9Jb3NDaGVja21hcmtDaXJjbGUgLz4sXHJcbiAgICAgICAgdGV4dDogJ1VubGltaXRlZCBkb3dubG9hZCBvZiBjb3Vyc2VzIG9uIHRoZSBtb2JpbGUgYXBwIGNvbnRlbnRzJyxcclxuICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGljb246IDxJb0lvc0NoZWNrbWFya0NpcmNsZSAvPixcclxuICAgICAgICB0ZXh0OiAnRG93bmxvYWQgYW5kIHByaW50IGNvdXJzZXMgYW5kIGV4ZXJjaXNlcyBpbiBQREYnLFxyXG4gICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIFxyXG5dO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWNrYWdlKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBpZD1cInByaWNpbmdcIiBzeD17c3R5bGVzLnByaWNpbmd9PlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxTZWN0aW9uSGVhZGVyXHJcbiAgICAgICAgICB0aXRsZT1cIkxldOKAmXMgc2VlIGhvdyBpdCB3b3Jrc1wiXHJcbiAgICAgICAgICBzbG9nYW49XCJXaGF0cyB0aGUgZnVuY3Rpb25cIlxyXG4gICAgICAgICAgaXNXaGl0ZT17dHJ1ZX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxGbGV4XHJcbiAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgIGZsZXhXcmFwOiBbJ3dyYXAnLCBudWxsLCBudWxsLCAnbm93cmFwJ10sXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtwYWNrYWdlcy5tYXAoKHBhY2thZ2VEYXRhKSA9PiAoXHJcbiAgICAgICAgICAgIDxQcmljZUNhcmQgZGF0YT17cGFja2FnZURhdGF9IGtleT17cGFja2FnZURhdGEubmFtZX0gLz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvRmxleD5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIHByaWNpbmc6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ3ByaW1hcnknLFxyXG4gICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7UGF0dGVybkJHfSlgLFxyXG4gICAgYmFja2dyb3VuZFJlcGVhdDogYG5vLXJlcGVhdGAsXHJcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXIgY2VudGVyJyxcclxuICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxyXG4gICAgcHk6IFs4LCBudWxsLCA5LCBudWxsLCBudWxsLCAxMF0sXHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICcmOjpiZWZvcmUnOiB7XHJcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICBjb250ZW50OiAnXCJcIicsXHJcbiAgICAgIHRvcDogMCxcclxuICAgICAgcmlnaHQ6IDAsXHJcbiAgICAgIGJhY2tncm91bmQ6XHJcbiAgICAgICAgJ2xpbmVhci1ncmFkaWVudCgtNDVkZWcsIHJnYmEoNDIsNzIsMTI1LCAwLjMpIDI1JSwgdHJhbnNwYXJlbnQgMjUlLCB0cmFuc3BhcmVudCA1MCUsIHJnYmEoNDIsNzIsMTI1LCAwLjMpIDUwJSwgcmdiYSg0Miw3MiwxMjUsIDAuMykgNzUlLCB0cmFuc3BhcmVudCA3NSUsIHRyYW5zcGFyZW50KScsXHJcbiAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgIGJhY2tncm91bmRTaXplOiAnMzUwcHggMzUwcHgnLFxyXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgb3BhY2l0eTogMC4zLFxyXG4gICAgICB6SW5kZXg6IDAsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=