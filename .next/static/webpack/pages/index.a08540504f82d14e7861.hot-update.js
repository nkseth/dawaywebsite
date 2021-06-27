webpackHotUpdate_N_E("pages/index",{

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
    onClick: function onClick() {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL2Jhbm5lci5qcyJdLCJuYW1lcyI6WyJCYW5uZXIiLCJ1c2VTdGF0ZSIsInZpZGVvT3BlbiIsInNldFZpZGVvT3BlbiIsImhhbmRsZUNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3R5bGVzIiwiYmFubmVyIiwiY29udGFpbmVyIiwiY29udGVudEJveCIsIndpbmRvdyIsIm9wZW4iLCJpbWFnZUJveCIsIkJhbm5lclRodW1iIiwib3ZlcmZsb3ciLCJiYWNrZ3JvdW5kSW1hZ2UiLCJCYW5uZXJCRyIsImJhY2tncm91bmRSZXBlYXQiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJiYWNrZ3JvdW5kU2l6ZSIsImJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzIiwicHQiLCJwYiIsImJhY2tncm91bmRDb2xvciIsImRpc3BsYXkiLCJ3aWR0aCIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwiZmxleFNocmluayIsImp1c3RpZnlDb250ZW50IiwibWwiLCJtciIsIm10IiwibWIiLCJ0ZXh0QWxpZ24iLCJzcG9uc29yVGl0bGUiLCJjb2xvciIsImZvbnRTaXplIiwib3BhY2l0eSIsInByIiwic3BvbnNvckJveCIsInNwb25zb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxNQUFULEdBQWtCO0FBQUE7O0FBQy9CLGtCQUFrQ0Msc0RBQVEsQ0FBQyxLQUFELENBQTFDO0FBQUEsTUFBT0MsU0FBUDtBQUFBLE1BQWtCQyxZQUFsQjs7QUFDQSxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxDQUFELEVBQU87QUFDekJBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBSCxnQkFBWSxDQUFDLElBQUQsQ0FBWjtBQUNELEdBSEQ7O0FBSUEsU0FDRTtBQUFTLE1BQUUsRUFBRUksTUFBTSxDQUFDQyxN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LFFBUEY7QUFRUm9CLGVBQVMsRUFBRSxRQVJIO0FBU1JULFdBQUssRUFBRTtBQVRDO0FBckJKLEdBREs7QUFrQ2JVLGNBQVksRUFBRTtBQUNaQyxTQUFLLEVBQUUsT0FESztBQUVaQyxZQUFRLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUZFO0FBR1pDLFdBQU8sRUFBRSxHQUhHO0FBSVpDLE1BQUUsRUFBRSxFQUpRO0FBS1pYLGNBQVUsRUFBRSxDQUxBO0FBTVpOLE1BQUUsRUFBRSxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsQ0FBVjtBQU5RLEdBbENEO0FBMENia0IsWUFBVSxFQUFFO0FBQ1ZuQixNQUFFLEVBQUUsQ0FBQyxNQUFELEVBQVMsSUFBVCxFQUFlLElBQWYsRUFBcUIsSUFBckIsRUFBMkIsSUFBM0IsRUFBaUMsTUFBakMsQ0FETTtBQUVWSyxpQkFBYSxFQUFFLENBQUMsUUFBRCxFQUFXLElBQVgsRUFBaUIsS0FBakIsQ0FGTDtBQUdWZSxXQUFPLEVBQUU7QUFDUGpCLGFBQU8sRUFBRSxNQURGO0FBRVBHLGdCQUFVLEVBQUUsUUFGTDtBQUdQLGFBQU87QUFDTEksVUFBRSxFQUFFLENBQUMsQ0FBRCxFQUFJLElBQUosRUFBVSxJQUFWLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLENBREM7QUFFTFAsZUFBTyxFQUFFLE1BRko7QUFHTCwwQkFBa0I7QUFDaEJPLFlBQUUsRUFBRTtBQURZO0FBSGI7QUFIQTtBQUhDO0FBMUNDLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTA4NTQwNTA0ZjgyZDE0ZTc4NjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3ggfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgRmxleCwgQm94LCBIZWFkaW5nLCBUZXh0LCBJbWFnZSwgQnV0dG9uIH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBNb2RhbFZpZGVvIGZyb20gJ3JlYWN0LW1vZGFsLXZpZGVvJztcclxuaW1wb3J0IHsgRmFQbGF5Q2lyY2xlIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xyXG5pbXBvcnQgQmFubmVyQkcgZnJvbSAnYXNzZXRzL2Jhbm5lckJnLnBuZyc7XHJcbmltcG9ydCBCYW5uZXJUaHVtYiBmcm9tICdhc3NldHMvZ29hbC5wbmcnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmFubmVyKCkge1xyXG4gIGNvbnN0IFt2aWRlb09wZW4sIHNldFZpZGVvT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0VmlkZW9PcGVuKHRydWUpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIHN4PXtzdHlsZXMuYmFubmVyfSBpZD1cImhvbWVcIj5cclxuICAgICAgPENvbnRhaW5lciBzeD17c3R5bGVzLmJhbm5lci5jb250YWluZXJ9PlxyXG4gICAgICAgIDxCb3ggc3g9e3N0eWxlcy5iYW5uZXIuY29udGVudEJveH0+XHJcbiAgICAgICAgICA8SGVhZGluZyBhcz1cImgxXCIgdmFyaWFudD1cImhlcm9QcmltYXJ5XCI+XHJcbiAgICAgICAgICBEaXNjb3ZlciBSZWFsIEtub3dsZWRnZSB3aXRoIGV4cGVydHNcclxuICAgICAgICAgIDwvSGVhZGluZz5cclxuICAgICAgICAgIDxUZXh0IGFzPVwicFwiIHZhcmlhbnQ9XCJoZXJvU2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICBUaGUgbW9zdCBkaWZmaWN1bHQgcGFydCBvZiBtYWtpbmcgYSBzdWNjZXNzZnVsIGNhcnJpZXIgaXMgZ2V0dGluZyBzdGFydGVkLiBHaXZlIHlvdXIgY2FyZWVyIGEgYm9vc3QgYnkgbGVhcm5pbmcgaW5kdXN0cnkgc2tpbGxzLCB3b3JrIG9uIHJlYWwtbGlmZSBwcm9qZWN0cywgaW50ZXJuc2hpcHMsIGFuZCBleHBlcnQgZ3VpZGFuY2UuXHJcbiAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICA8RmxleD5cclxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKT0+e3dpbmRvdy5vcGVuKFwiaHR0cHM6Ly9mb3Jtcy5nbGUvTW1IMk53TWFoSjZQYmdRNTdcIil9fSB2YXJpYW50PVwid2hpdGVCdXR0b25cIiBhcmlhLWxhYmVsPVwiR2V0IFN0YXJ0ZWRcIj5cclxuICAgICAgICAgICAgIEdldCBTdGFydGVkXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxNb2RhbFZpZGVvXHJcbiAgICAgICAgICAgICAgICBjaGFubmVsPVwieW91dHViZVwiXHJcbiAgICAgICAgICAgICAgICBpc09wZW49e3ZpZGVvT3Blbn1cclxuICAgICAgICAgICAgICAgIHZpZGVvSWQ9XCJaTkE5cm1Ec1lWRVwiXHJcbiAgICAgICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRWaWRlb09wZW4oZmFsc2UpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cInRleHRCdXR0b25cIlxyXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIldhdGNoIFZpZGVvXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxGYVBsYXlDaXJjbGUgLz4gV2F0Y2ggVmlkZW9cclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICBcclxuICAgICAgICA8L0JveD5cclxuXHJcbiAgICAgICAgPEJveCBzeD17c3R5bGVzLmJhbm5lci5pbWFnZUJveH0+XHJcbiAgICAgICAgICA8SW1hZ2Ugc3JjPXtCYW5uZXJUaHVtYn0gYWx0PVwiYmFubmVyXCIgLz5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGJhbm5lcjoge1xyXG4gICAgb3ZlcmZsb3c6IFsnaGlkZGVuJywgJ2luaXRpYWwnLCBudWxsLCAnaGlkZGVuJ10sXHJcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtCYW5uZXJCR30pYCxcclxuICAgIGJhY2tncm91bmRSZXBlYXQ6IGBuby1yZXBlYXRgLFxyXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiAndG9wIGxlZnQnLFxyXG4gICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXHJcbiAgICBib3JkZXJCb3R0b21SaWdodFJhZGl1czogWzEwMCwgMTUwLCBudWxsLCBudWxsLCBudWxsLCAyNTBdLFxyXG4gICAgcHQ6IFsnMTUwcHgnLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAnMTQwcHgnLCAnMTMwcHgnXSxcclxuICAgIHBiOiBbJzEwMHB4JywgbnVsbCwgbnVsbCwgJzExMHB4JywgbnVsbCwgMTAsICcxNTBweCddLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAncHJpbWFyeScsXHJcbiAgICBjb250YWluZXI6IHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgfSxcclxuICAgIGNvbnRlbnRCb3g6IHtcclxuICAgICAgd2lkdGg6IFsnMTAwJScsIG51bGwsICc4NSUnLCAnNTUlJywgJzUwJScsICc1NSUnXSxcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAgYWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnLFxyXG4gICAgICBmbGV4U2hyaW5rOiAwLFxyXG4gICAgICBwdDogWzAsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDUsIDddLFxyXG4gICAgfSxcclxuICAgIGltYWdlQm94OiB7XHJcbiAgICAgIGRpc3BsYXk6IFsnbm9uZScsIG51bGwsIG51bGwsICdibG9jayddLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgIG1sOiBbMCwgbnVsbCwgbnVsbCwgJy0xMTBweCcsICctMTE1cHgnLCAnLTE1MHB4JywgJy0yMTBweCcsICctMjcwcHgnXSxcclxuICAgICAgbXI6IFswLCBudWxsLCBudWxsLCAnLTE0NXB4JywgJy0xNjBweCcsICctMTgwcHgnLCAnLTIyMHB4JywgJy0yNTBweCddLFxyXG4gICAgICBtdDogWzAsIG51bGwsIG51bGwsICc0MHB4JywgNCwgNywgMF0sXHJcbiAgICAgIG1iOiBbMCwgbnVsbCwgbnVsbCwgbnVsbCwgJy00NXB4JywgJy03MHB4JywgbnVsbCwgJy0xMTVweCddLFxyXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc3BvbnNvclRpdGxlOiB7XHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGZvbnRTaXplOiBbMSwgMl0sXHJcbiAgICBvcGFjaXR5OiAwLjYsXHJcbiAgICBwcjogMjAsXHJcbiAgICBmbGV4U2hyaW5rOiAwLFxyXG4gICAgcGI6IFsyLCBudWxsLCAwXSxcclxuICB9LFxyXG4gIHNwb25zb3JCb3g6IHtcclxuICAgIHB0OiBbJzM1cHgnLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAnNDVweCddLFxyXG4gICAgZmxleERpcmVjdGlvbjogWydjb2x1bW4nLCBudWxsLCAncm93J10sXHJcbiAgICBzcG9uc29yOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICc+IGEnOiB7XHJcbiAgICAgICAgbXI6IFs1LCBudWxsLCBudWxsLCA0LCA2XSxcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgJyY6bGFzdC1vZi10eXBlJzoge1xyXG4gICAgICAgICAgbXI6IDAsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==