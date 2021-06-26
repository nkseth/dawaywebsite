webpackHotUpdate_N_E("pages/index",{

/***/ "./src/assets/banner-thumb.png":
false,

/***/ "./src/assets/goal.png":
/*!*****************************!*\
  !*** ./src/assets/goal.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/goal-50e0c5dd92e0afb0d29f749e17bd7c95.png";

/***/ }),

/***/ "./src/sections/banner.js":
/*!********************************!*\
  !*** ./src/sections/banner.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Banner; });
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-modal-video */ "./node_modules/react-modal-video/lib/index.js");
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_modal_video__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var assets_bannerBg_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/bannerBg.png */ "./src/assets/bannerBg.png");
/* harmony import */ var assets_bannerBg_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_bannerBg_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var assets_goal_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/goal.png */ "./src/assets/goal.png");
/* harmony import */ var assets_goal_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_goal_png__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\reactprojects\\nexttry1\\src\\sections\\banner.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/** @jsx jsx */







function Banner() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      videoOpen = _useState[0],
      setVideoOpen = _useState[1];

  var handleClick = function handleClick(e) {
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
    onClose: function onClose() {
      return setVideoOpen(false);
    },
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

_s(Banner, "fjrTXSMqqo5cVpzR03nEXJYpFAo=");

_c = Banner;
var styles = {
  banner: {
    overflow: ['hidden', 'initial', null, 'hidden'],
    backgroundImage: "url(".concat(assets_bannerBg_png__WEBPACK_IMPORTED_MODULE_4___default.a, ")"),
    backgroundRepeat: "no-repeat",
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

var _c;

$RefreshReg$(_c, "Banner");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2Fzc2V0cy9nb2FsLnBuZyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL2Jhbm5lci5qcyJdLCJuYW1lcyI6WyJCYW5uZXIiLCJ1c2VTdGF0ZSIsInZpZGVvT3BlbiIsInNldFZpZGVvT3BlbiIsImhhbmRsZUNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3R5bGVzIiwiYmFubmVyIiwiY29udGFpbmVyIiwiY29udGVudEJveCIsImltYWdlQm94IiwiQmFubmVyVGh1bWIiLCJvdmVyZmxvdyIsImJhY2tncm91bmRJbWFnZSIsIkJhbm5lckJHIiwiYmFja2dyb3VuZFJlcGVhdCIsImJhY2tncm91bmRQb3NpdGlvbiIsImJhY2tncm91bmRTaXplIiwiYm9yZGVyQm90dG9tUmlnaHRSYWRpdXMiLCJwdCIsInBiIiwiYmFja2dyb3VuZENvbG9yIiwiZGlzcGxheSIsIndpZHRoIiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJmbGV4U2hyaW5rIiwianVzdGlmeUNvbnRlbnQiLCJtbCIsIm1yIiwibXQiLCJtYiIsInRleHRBbGlnbiIsInNwb25zb3JUaXRsZSIsImNvbG9yIiwiZm9udFNpemUiLCJvcGFjaXR5IiwicHIiLCJzcG9uc29yQm94Iiwic3BvbnNvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLE1BQVQsR0FBa0I7QUFBQTs7QUFDL0Isa0JBQWtDQyxzREFBUSxDQUFDLEtBQUQsQ0FBMUM7QUFBQSxNQUFPQyxTQUFQO0FBQUEsTUFBa0JDLFlBQWxCOztBQUNBLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLENBQUQsRUFBTztBQUN6QkEsS0FBQyxDQUFDQyxjQUFGO0FBQ0FILGdCQUFZLENBQUMsSUFBRCxDQUFaO0FBQ0Qs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Ukg7QUFTUlQsV0FBSyxFQUFFO0FBVEM7QUFyQkosR0FESztBQWtDYlUsY0FBWSxFQUFFO0FBQ1pDLFNBQUssRUFBRSxPQURLO0FBRVpDLFlBQVEsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLENBRkU7QUFHWkMsV0FBTyxFQUFFLEdBSEc7QUFJWkMsTUFBRSxFQUFFLEVBSlE7QUFLWlgsY0FBVSxFQUFFLENBTEE7QUFNWk4sTUFBRSxFQUFFLENBQUMsQ0FBRCxFQUFJLElBQUosRUFBVSxDQUFWO0FBTlEsR0FsQ0Q7QUEwQ2JrQixZQUFVLEVBQUU7QUFDVm5CLE1BQUUsRUFBRSxDQUFDLE1BQUQsRUFBUyxJQUFULEVBQWUsSUFBZixFQUFxQixJQUFyQixFQUEyQixJQUEzQixFQUFpQyxNQUFqQyxDQURNO0FBRVZLLGlCQUFhLEVBQUUsQ0FBQyxRQUFELEVBQVcsSUFBWCxFQUFpQixLQUFqQixDQUZMO0FBR1ZlLFdBQU8sRUFBRTtBQUNQakIsYUFBTyxFQUFFLE1BREY7QUFFUEcsZ0JBQVUsRUFBRSxRQUZMO0FBR1AsYUFBTztBQUNMSSxVQUFFLEVBQUUsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLElBQVYsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsQ0FEQztBQUVMUCxlQUFPLEVBQUUsTUFGSjtBQUdMLDBCQUFrQjtBQUNoQk8sWUFBRSxFQUFFO0FBRFk7QUFIYjtBQUhBO0FBSEM7QUExQ0MsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41N2YyNTAxMzVjYTc1ZTEwNjY1Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2dvYWwtNTBlMGM1ZGQ5MmUwYWZiMGQyOWY3NDllMTdiZDdjOTUucG5nXCI7IiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBGbGV4LCBCb3gsIEhlYWRpbmcsIFRleHQsIEltYWdlLCBCdXR0b24gfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE1vZGFsVmlkZW8gZnJvbSAncmVhY3QtbW9kYWwtdmlkZW8nO1xyXG5pbXBvcnQgeyBGYVBsYXlDaXJjbGUgfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XHJcbmltcG9ydCBCYW5uZXJCRyBmcm9tICdhc3NldHMvYmFubmVyQmcucG5nJztcclxuaW1wb3J0IEJhbm5lclRodW1iIGZyb20gJ2Fzc2V0cy9nb2FsLnBuZyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCYW5uZXIoKSB7XHJcbiAgY29uc3QgW3ZpZGVvT3Blbiwgc2V0VmlkZW9PcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRWaWRlb09wZW4odHJ1ZSk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gc3g9e3N0eWxlcy5iYW5uZXJ9IGlkPVwiaG9tZVwiPlxyXG4gICAgICA8Q29udGFpbmVyIHN4PXtzdHlsZXMuYmFubmVyLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgPEJveCBzeD17c3R5bGVzLmJhbm5lci5jb250ZW50Qm94fT5cclxuICAgICAgICAgIDxIZWFkaW5nIGFzPVwiaDFcIiB2YXJpYW50PVwiaGVyb1ByaW1hcnlcIj5cclxuICAgICAgICAgIERpc2NvdmVyIFJlYWwgS25vd2xlZGdlIHdpdGggZXhwZXJ0c1xyXG4gICAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICAgICAgPFRleHQgYXM9XCJwXCIgdmFyaWFudD1cImhlcm9TZWNvbmRhcnlcIj5cclxuICAgICAgICAgIFRoZSBtb3N0IGRpZmZpY3VsdCBwYXJ0IG9mIG1ha2luZyBhIHN1Y2Nlc3NmdWwgY2FycmllciBpcyBnZXR0aW5nIHN0YXJ0ZWQuIEdpdmUgeW91ciBjYXJlZXIgYSBib29zdCBieSBsZWFybmluZyBpbmR1c3RyeSBza2lsbHMsIHdvcmsgb24gcmVhbC1saWZlIHByb2plY3RzLCBpbnRlcm5zaGlwcywgYW5kIGV4cGVydCBndWlkYW5jZS5cclxuICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgIDxGbGV4PlxyXG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJ3aGl0ZUJ1dHRvblwiIGFyaWEtbGFiZWw9XCJHZXQgU3RhcnRlZFwiPlxyXG4gICAgICAgICAgICAgR2V0IFN0YXJ0ZWRcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPE1vZGFsVmlkZW9cclxuICAgICAgICAgICAgICAgIGNoYW5uZWw9XCJ5b3V0dWJlXCJcclxuICAgICAgICAgICAgICAgIGlzT3Blbj17dmlkZW9PcGVufVxyXG4gICAgICAgICAgICAgICAgdmlkZW9JZD1cIlpOQTlybURzWVZFXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHNldFZpZGVvT3BlbihmYWxzZSl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwidGV4dEJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiV2F0Y2ggVmlkZW9cIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEZhUGxheUNpcmNsZSAvPiBXYXRjaCBWaWRlb1xyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgIFxyXG4gICAgICAgIDwvQm94PlxyXG5cclxuICAgICAgICA8Qm94IHN4PXtzdHlsZXMuYmFubmVyLmltYWdlQm94fT5cclxuICAgICAgICAgIDxJbWFnZSBzcmM9e0Jhbm5lclRodW1ifSBhbHQ9XCJiYW5uZXJcIiAvPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgYmFubmVyOiB7XHJcbiAgICBvdmVyZmxvdzogWydoaWRkZW4nLCAnaW5pdGlhbCcsIG51bGwsICdoaWRkZW4nXSxcclxuICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke0Jhbm5lckJHfSlgLFxyXG4gICAgYmFja2dyb3VuZFJlcGVhdDogYG5vLXJlcGVhdGAsXHJcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICd0b3AgbGVmdCcsXHJcbiAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcclxuICAgIGJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzOiBbMTAwLCAxNTAsIG51bGwsIG51bGwsIG51bGwsIDI1MF0sXHJcbiAgICBwdDogWycxNTBweCcsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICcxNDBweCcsICcxMzBweCddLFxyXG4gICAgcGI6IFsnMTAwcHgnLCBudWxsLCBudWxsLCAnMTEwcHgnLCBudWxsLCAxMCwgJzE1MHB4J10sXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdwcmltYXJ5JyxcclxuICAgIGNvbnRhaW5lcjoge1xyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICB9LFxyXG4gICAgY29udGVudEJveDoge1xyXG4gICAgICB3aWR0aDogWycxMDAlJywgbnVsbCwgJzg1JScsICc1NSUnLCAnNTAlJywgJzU1JSddLFxyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgICBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCcsXHJcbiAgICAgIGZsZXhTaHJpbms6IDAsXHJcbiAgICAgIHB0OiBbMCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgNSwgN10sXHJcbiAgICB9LFxyXG4gICAgaW1hZ2VCb3g6IHtcclxuICAgICAgZGlzcGxheTogWydub25lJywgbnVsbCwgbnVsbCwgJ2Jsb2NrJ10sXHJcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgbWw6IFswLCBudWxsLCBudWxsLCAnLTExMHB4JywgJy0xMTVweCcsICctMTUwcHgnLCAnLTIxMHB4JywgJy0yNzBweCddLFxyXG4gICAgICBtcjogWzAsIG51bGwsIG51bGwsICctMTQ1cHgnLCAnLTE2MHB4JywgJy0xODBweCcsICctMjIwcHgnLCAnLTI5MHB4J10sXHJcbiAgICAgIG10OiBbMCwgbnVsbCwgbnVsbCwgJzQwcHgnLCA0LCA3LCAwXSxcclxuICAgICAgbWI6IFswLCBudWxsLCBudWxsLCBudWxsLCAnLTQ1cHgnLCAnLTcwcHgnLCBudWxsLCAnLTExNXB4J10sXHJcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgICAgdGV4dEFsaWduOiAncmlnaHQnLFxyXG4gICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHNwb25zb3JUaXRsZToge1xyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBmb250U2l6ZTogWzEsIDJdLFxyXG4gICAgb3BhY2l0eTogMC42LFxyXG4gICAgcHI6IDIwLFxyXG4gICAgZmxleFNocmluazogMCxcclxuICAgIHBiOiBbMiwgbnVsbCwgMF0sXHJcbiAgfSxcclxuICBzcG9uc29yQm94OiB7XHJcbiAgICBwdDogWyczNXB4JywgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgJzQ1cHgnXSxcclxuICAgIGZsZXhEaXJlY3Rpb246IFsnY29sdW1uJywgbnVsbCwgJ3JvdyddLFxyXG4gICAgc3BvbnNvcjoge1xyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAnPiBhJzoge1xyXG4gICAgICAgIG1yOiBbNSwgbnVsbCwgbnVsbCwgNCwgNl0sXHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICcmOmxhc3Qtb2YtdHlwZSc6IHtcclxuICAgICAgICAgIG1yOiAwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=