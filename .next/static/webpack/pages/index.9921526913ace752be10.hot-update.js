webpackHotUpdate_N_E("pages/index",{

/***/ "./src/sections/workflow.js":
/*!**********************************!*\
  !*** ./src/sections/workflow.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WorkFlow; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
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






var data = [{
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
  var _this = this;

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
  }, data.map(function (item) {
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      sx: styles.card,
      key: item.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 13
      }
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      sx: styles.iconBox,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 15
      }
    }, "0".concat(item.id)), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      sx: styles.wrapper,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 15
      }
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
      sx: styles.wrapper.title,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      }
    }, item.title), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      sx: styles.wrapper.subTitle,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }
    }, item.text)));
  }))));
}
_c = WorkFlow;
var styles = {
  workflow: {
    backgroundColor: 'primary',
    backgroundImage: "url(".concat(assets_patternBG_png__WEBPACK_IMPORTED_MODULE_3___default.a, ")"),
    backgroundRepeat: "no-repeat",
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
      backgroundRepeat: "no-repeat",
      backgroundPosition: 'center center',
      width: 215,
      height: 60,
      opacity: 0.3,
      '@media screen and (max-width:1220px)': {
        display: 'none'
      }
    },
    '&:nth-of-type(2n-1)::before': {
      backgroundImage: "url(".concat(assets_arrowOdd_png__WEBPACK_IMPORTED_MODULE_4___default.a, ")")
    },
    '&:nth-of-type(2n)::before': {
      backgroundImage: "url(".concat(assets_arrowEven_png__WEBPACK_IMPORTED_MODULE_5___default.a, ")"),
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

var _c;

$RefreshReg$(_c, "WorkFlow");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL3dvcmtmbG93LmpzIl0sIm5hbWVzIjpbImRhdGEiLCJpZCIsInRpdGxlIiwidGV4dCIsIldvcmtGbG93Iiwic3R5bGVzIiwid29ya2Zsb3ciLCJncmlkIiwibWFwIiwiaXRlbSIsImNhcmQiLCJpY29uQm94Iiwid3JhcHBlciIsInN1YlRpdGxlIiwiYmFja2dyb3VuZENvbG9yIiwiYmFja2dyb3VuZEltYWdlIiwiUGF0dGVybkJHIiwiYmFja2dyb3VuZFJlcGVhdCIsImJhY2tncm91bmRQb3NpdGlvbiIsImJhY2tncm91bmRTaXplIiwicG9zaXRpb24iLCJweSIsImNvbnRlbnQiLCJ0b3AiLCJyaWdodCIsImJhY2tncm91bmQiLCJ3aWR0aCIsImhlaWdodCIsIm9wYWNpdHkiLCJ6SW5kZXgiLCJtYiIsInB0IiwiZ3JpZEdhcCIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsInRleHRBbGlnbiIsIm14IiwibGVmdCIsIkFycm93T2RkIiwiQXJyb3dFdmVuIiwiZmxleFNocmluayIsImJvcmRlclJhZGl1cyIsImFsaWduSXRlbXMiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJqdXN0aWZ5Q29udGVudCIsImNvbG9yIiwibXQiLCJsaW5lSGVpZ2h0IiwicHIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxJQUFJLEdBQUcsQ0FDWDtBQUNFQyxJQUFFLEVBQUUsQ0FETjtBQUVFQyxPQUFLLEVBQUUsY0FGVDtBQUdFQyxNQUFJLEVBQ0Y7QUFKSixDQURXLEVBT1g7QUFDRUYsSUFBRSxFQUFFLENBRE47QUFFRUMsT0FBSyxFQUFFLGtCQUZUO0FBR0VDLE1BQUksRUFDRjtBQUpKLENBUFcsRUFhWDtBQUNFRixJQUFFLEVBQUUsQ0FETjtBQUVFQyxPQUFLLEVBQUUs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UUFBRSxFQUFFLENBQUMsQ0FBRCxFQUFJLElBQUosRUFBVSxJQUFWLEVBQWdCLElBQWhCLEVBQXNCLElBQXRCLEVBQTRCLENBQTVCLENBSkM7QUFLTHBCLFFBQUUsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKO0FBTEMsS0FMQTtBQWFQakIsWUFBUSxFQUFFO0FBQ1IrQixjQUFRLEVBQUUsQ0FERjtBQUVSQyxnQkFBVSxFQUFFLEdBRko7QUFHUkksZ0JBQVUsRUFBRSxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsSUFBYixFQUFtQixHQUFuQixFQUF3QixDQUF4QixDQUhKO0FBSVJGLFdBQUssRUFBRSxPQUpDO0FBS1JuQixhQUFPLEVBQUUsSUFMRDtBQU1Sc0IsUUFBRSxFQUFFLENBQUMsQ0FBRCxFQUFJLElBQUosRUFBVSxJQUFWLEVBQWdCLElBQWhCLEVBQXNCLElBQXRCLEVBQTRCLENBQTVCO0FBTkk7QUFiSDtBQTVGSSxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljk5MjE1MjY5MTNhY2U3NTJiZTEwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4IH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIEdyaWQsIEJveCwgSGVhZGluZywgVGV4dCB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IFNlY3Rpb25IZWFkZXIgZnJvbSAnY29tcG9uZW50cy9zZWN0aW9uLWhlYWRlcic7XHJcblxyXG5pbXBvcnQgUGF0dGVybkJHIGZyb20gJ2Fzc2V0cy9wYXR0ZXJuQkcucG5nJztcclxuaW1wb3J0IEFycm93T2RkIGZyb20gJ2Fzc2V0cy9hcnJvd09kZC5wbmcnO1xyXG5pbXBvcnQgQXJyb3dFdmVuIGZyb20gJ2Fzc2V0cy9hcnJvd0V2ZW4ucG5nJztcclxuXHJcbmNvbnN0IGRhdGEgPSBbXHJcbiAge1xyXG4gICAgaWQ6IDEsXHJcbiAgICB0aXRsZTogJ0xlYXJuIFNraWxscycsXHJcbiAgICB0ZXh0OlxyXG4gICAgICAnVG8gZ2FpbiBwcmFjdGljYWwga25vd2xlZGdlLCB5b3UgbmVlZCB0byBleHBsb3JlIHZhcmlvdXMgb3B0aW9ucyBhbmQgc2VlIHdoYXQgd29ya3MgdGhlIGJlc3QuJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAyLFxyXG4gICAgdGl0bGU6ICcgQnVpbGQgUG9ydGZvbGlvJyxcclxuICAgIHRleHQ6XHJcbiAgICAgICd3aGVuIFlvdSBwcmFjdGljZSB5b3UgbGVhcm4gYW5kIGFzIHlvdSBsZWFybiBpdCBzaG91bGQgYWxzbyBnaXZlIHlvdSB3b3J0aCBhcyBwcm9vZiBvZiB5b3VyIGVmZm9ydHMgYnkgcHJhY3RpY2luZyBhbmQgdXNpbmcgdGhpcyBwcmFjdGljZSB0byBidWlsZCBhIHN0cm9uZyBwb3J0Zm9saW8gd2l0aCBoZWxwIHlvdSBpbiBsb25nIHJ1bicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMyxcclxuICAgIHRpdGxlOiAnSW50ZXJuc2hpcHMnLFxyXG4gICAgdGV4dDpcclxuICAgICAgJ1doZW4gaXQgY29tZXMgZG93biB0byBwcmFjdGljZSB5b3VyIHNraWxsIGFuZCBtYWtlIGl0IG1vcmUgdXNlZnVsIHRoZSBiZXN0IHdheSB0byBnZXQgcGFzcyBpdCBieSB3b3JraW5nIGluIGEgcmVhbC1saWZlIGVudmlyb25tZW50IGluIHdoaWNoIG91ciBpbnRlcm5zaGlwIHByb2dyYW0gaGVscHMgeW91IHRvIHNoYXBlbiB5b3VyIHNraWxscycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNCxcclxuICAgIHRpdGxlOiAnTGFuZCBZb3VyIERyZWFtIEpvYicsXHJcbiAgICB0ZXh0OlxyXG4gICAgICAnV2l0aCB0aGUgcmlnaHQgc2tpbGwgc2V0ICxrbm93bGVkZ2UscHJhY3RpY2UgYW5kIFBvcnRmb2xpbyB5b3UgY2FuIGVhc2xpeSBhY2hpdmUgd2FodCBpdCB0YWtlIHRvIGdldCB0byB5b3VyIGRyZWFtIEpvYi4nLFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXb3JrRmxvdygpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gc3g9e3N0eWxlcy53b3JrZmxvd30+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPFNlY3Rpb25IZWFkZXJcclxuICAgICAgICAgIHNsb2dhbj1cIldoYXRzIHRoZSBmdW5jdGlvblwiXHJcbiAgICAgICAgICB0aXRsZT1cIkxldOKAmXMgc2VlIGhvdyBpdCB3b3Jrc1wiXHJcbiAgICAgICAgICBpc1doaXRlPXt0cnVlfVxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxHcmlkIHN4PXtzdHlsZXMuZ3JpZH0+XHJcbiAgICAgICAgICB7ZGF0YS5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgPEJveCBzeD17c3R5bGVzLmNhcmR9IGtleT17aXRlbS5pZH0+XHJcbiAgICAgICAgICAgICAgPEJveCBzeD17c3R5bGVzLmljb25Cb3h9PntgMCR7aXRlbS5pZH1gfTwvQm94PlxyXG4gICAgICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy53cmFwcGVyfT5cclxuICAgICAgICAgICAgICAgIDxIZWFkaW5nIHN4PXtzdHlsZXMud3JhcHBlci50aXRsZX0+e2l0ZW0udGl0bGV9PC9IZWFkaW5nPlxyXG4gICAgICAgICAgICAgICAgPFRleHQgc3g9e3N0eWxlcy53cmFwcGVyLnN1YlRpdGxlfT57aXRlbS50ZXh0fTwvVGV4dD5cclxuICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICB3b3JrZmxvdzoge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAncHJpbWFyeScsXHJcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtQYXR0ZXJuQkd9KWAsXHJcbiAgICBiYWNrZ3JvdW5kUmVwZWF0OiBgbm8tcmVwZWF0YCxcclxuICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlciBjZW50ZXInLFxyXG4gICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIHB5OiBbOCwgbnVsbCwgOSwgbnVsbCwgbnVsbCwgMTBdLFxyXG4gICAgJyY6OmJlZm9yZSc6IHtcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcclxuICAgICAgdG9wOiAwLFxyXG4gICAgICByaWdodDogMCxcclxuICAgICAgYmFja2dyb3VuZDpcclxuICAgICAgICAnbGluZWFyLWdyYWRpZW50KC00NWRlZywgcmdiYSg0Miw3MiwxMjUsIDAuMykgMjUlLCB0cmFuc3BhcmVudCAyNSUsIHRyYW5zcGFyZW50IDUwJSwgcmdiYSg0Miw3MiwxMjUsIDAuMykgNTAlLCByZ2JhKDQyLDcyLDEyNSwgMC4zKSA3NSUsIHRyYW5zcGFyZW50IDc1JSwgdHJhbnNwYXJlbnQpJyxcclxuICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgYmFja2dyb3VuZFNpemU6ICczNTBweCAzNTBweCcsXHJcbiAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICBvcGFjaXR5OiAwLjMsXHJcbiAgICAgIHpJbmRleDogMCxcclxuICAgIH0sXHJcbiAgfSxcclxuICBncmlkOiB7XHJcbiAgICBtYjogLTEsXHJcbiAgICBwdDogMCxcclxuICAgIGdyaWRHYXA6IFtcclxuICAgICAgJzM1cHggMCcsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgICc0NXB4IDUwcHgnLFxyXG4gICAgICBudWxsLFxyXG4gICAgICAnNTBweCAyNXB4JyxcclxuICAgICAgbnVsbCxcclxuICAgICAgbnVsbCxcclxuICAgICAgJzUwcHggNjVweCcsXHJcbiAgICBdLFxyXG4gICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogW1xyXG4gICAgICAncmVwZWF0KDEsMWZyKScsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgICdyZXBlYXQoMiwxZnIpJyxcclxuICAgICAgbnVsbCxcclxuICAgICAgJ3JlcGVhdCg0LDFmciknLFxyXG4gICAgXSxcclxuICB9LFxyXG4gIGNhcmQ6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICB0ZXh0QWxpZ246IFsnY2VudGVyJywgbnVsbCwgJ2xlZnQnXSxcclxuICAgIHdpZHRoOiBbJzEwMCUnLCAnODAlJywgJzEwMCUnXSxcclxuICAgIG14OiAnYXV0bycsXHJcbiAgICAnJjo6YmVmb3JlJzoge1xyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgY29udGVudDogJ1wiXCInLFxyXG4gICAgICB0b3A6IDAsXHJcbiAgICAgIGxlZnQ6IFswLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCA3NSwgbnVsbCwgMTAwXSxcclxuICAgICAgYmFja2dyb3VuZFJlcGVhdDogYG5vLXJlcGVhdGAsXHJcbiAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlciBjZW50ZXInLFxyXG4gICAgICB3aWR0aDogMjE1LFxyXG4gICAgICBoZWlnaHQ6IDYwLFxyXG4gICAgICBvcGFjaXR5OiAwLjMsXHJcbiAgICAgICdAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEyMjBweCknOiB7XHJcbiAgICAgICAgZGlzcGxheTogJ25vbmUnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgICcmOm50aC1vZi10eXBlKDJuLTEpOjpiZWZvcmUnOiB7XHJcbiAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke0Fycm93T2RkfSlgLFxyXG4gICAgfSxcclxuICAgICcmOm50aC1vZi10eXBlKDJuKTo6YmVmb3JlJzoge1xyXG4gICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtBcnJvd0V2ZW59KWAsXHJcbiAgICAgIHRvcDogMTcsXHJcbiAgICB9LFxyXG4gICAgJyY6bGFzdC1jaGlsZDo6YmVmb3JlJzoge1xyXG4gICAgICBkaXNwbGF5OiAnbm9uZScsXHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIGljb25Cb3g6IHtcclxuICAgIHdpZHRoOiBbJzUwcHgnLCBudWxsLCAnNjBweCcsIG51bGwsIG51bGwsICc3MHB4J10sXHJcbiAgICBoZWlnaHQ6IFsnNTBweCcsIG51bGwsICc2MHB4JywgbnVsbCwgbnVsbCwgJzcwcHgnXSxcclxuICAgIGZsZXhTaHJpbms6IDAsXHJcbiAgICBib3JkZXJSYWRpdXM6IFsxNSwgbnVsbCwgMjMsIG51bGwsIG51bGwsIDMwXSxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgbWI6IFs1LCBudWxsLCBudWxsLCBudWxsLCBudWxsLCA2XSxcclxuICAgIG14OiBbJ2F1dG8nLCBudWxsLCAwXSxcclxuICAgIGZvbnRTaXplOiBbNiwgbnVsbCwgNywgbnVsbCwgbnVsbCwgJzMwcHgnXSxcclxuICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgIGNvbG9yOiAnIzIzNDU4MicsXHJcbiAgfSxcclxuICB3cmFwcGVyOiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICBtdDogJy01cHgnLFxyXG4gICAgdGl0bGU6IHtcclxuICAgICAgZm9udFNpemU6IFszLCBudWxsLCA0LCBudWxsLCBudWxsLCA1XSxcclxuICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IFsxLjQsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDEuNTVdLFxyXG4gICAgICBwcjogWzAsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDJdLFxyXG4gICAgICBtYjogWzIsIDNdLFxyXG4gICAgfSxcclxuXHJcbiAgICBzdWJUaXRsZToge1xyXG4gICAgICBmb250U2l6ZTogMSxcclxuICAgICAgZm9udFdlaWdodDogNDAwLFxyXG4gICAgICBsaW5lSGVpZ2h0OiBbMS44NSwgbnVsbCwgbnVsbCwgMS45LCAyXSxcclxuICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgIG9wYWNpdHk6IDAuNjUsXHJcbiAgICAgIHByOiBbMCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgNV0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=