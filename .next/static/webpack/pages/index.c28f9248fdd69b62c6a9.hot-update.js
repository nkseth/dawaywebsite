webpackHotUpdate_N_E("pages/index",{

/***/ "./src/sections/core-feature.js":
/*!**************************************!*\
  !*** ./src/sections/core-feature.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CoreFeature; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
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






var data = {
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
  var _this = this;

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
  }, data.features.map(function (item) {
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      sx: styles.card,
      key: item.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 15
      }
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_image__WEBPACK_IMPORTED_MODULE_3__["default"], {
      src: item.imgSrc,
      alt: item.altText,
      sx: styles.img,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }
    }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      sx: styles.wrapper,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
      sx: styles.wrapper.title,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 19
      }
    }, item.title), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      sx: styles.wrapper.subTitle,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 19
      }
    }, item.text)));
  })))));
}
_c = CoreFeature;
var styles = {
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

var _c;

$RefreshReg$(_c, "CoreFeature");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL2NvcmUtZmVhdHVyZS5qcyJdLCJuYW1lcyI6WyJkYXRhIiwic3ViVGl0bGUiLCJ0aXRsZSIsImZlYXR1cmVzIiwiaWQiLCJpbWdTcmMiLCJCcmllZmNhc2UiLCJhbHRUZXh0IiwidGV4dCIsIlNlY3VyZSIsIkNvcmVGZWF0dXJlIiwic3R5bGVzIiwiY29yZUZlYXR1cmUiLCJjb250YWluZXJCb3giLCJ0aHVtYm5haWwiLCJDb3JlRmVhdHVyZVRodW1iIiwiY29udGVudEJveCIsImhlYWRpbmdUb3AiLCJncmlkIiwibWFwIiwiaXRlbSIsImNhcmQiLCJpbWciLCJ3cmFwcGVyIiwicHkiLCJwb3NpdGlvbiIsImNvbnRlbnQiLCJ0b3AiLCJib3R0b20iLCJsZWZ0IiwiYmFja2dyb3VuZCIsImhlaWdodCIsIndpZHRoIiwiekluZGV4IiwiYm9yZGVyVG9wUmlnaHRSYWRpdXMiLCJib3JkZXJCb3R0b21SaWdodFJhZGl1cyIsInRyYW5zZm9ybSIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJmbGV4RGlyZWN0aW9uIiwicHIiLCJwbCIsImZsZXhTaHJpbmsiLCJtYiIsInRleHRBbGlnbiIsInAiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJSYWRpdXMiLCJ0cmFuc2l0aW9uIiwibXgiLCJib3hTaGFkb3ciLCJtciIsIm10IiwiZm9udFNpemUiLCJjb2xvciIsImxpbmVIZWlnaHQiLCJmb250V2VpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLElBQUksR0FBRztBQUNYQyxVQUFRLEVBQUUsZUFEQztBQUVYQyxPQUFLLEVBQUUsK0JBRkk7QUFHWEMsVUFBUSxFQUFFLENBQ1I7QUFDRUMsTUFBRSxFQUFFLENBRE47QUFFRUMsVUFBTSxFQUFFQyx1RUFGVjtBQUdFQyxX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LEdBMUNPO0FBdUViN0IsS0FBRyxFQUFFO0FBQ0hVLFNBQUssRUFBRSxDQUFDLE9BQUQsRUFBVSxJQUFWLEVBQWdCLE1BQWhCLENBREo7QUFFSEQsVUFBTSxFQUFFLE1BRkw7QUFHSFksY0FBVSxFQUFFLENBSFQ7QUFJSFMsTUFBRSxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUo7QUFKRCxHQXZFUTtBQTZFYjdCLFNBQU8sRUFBRTtBQUNQUyxTQUFLLEVBQUUsTUFEQTtBQUVQSyxXQUFPLEVBQUUsTUFGRjtBQUdQRyxpQkFBYSxFQUFFLFFBSFI7QUFJUGEsTUFBRSxFQUFFLE1BSkc7QUFLUG5ELFNBQUssRUFBRTtBQUNMb0QsY0FBUSxFQUFFLENBREw7QUFFTEMsV0FBSyxFQUFFLG1CQUZGO0FBR0xDLGdCQUFVLEVBQUUsR0FIUDtBQUlMQyxnQkFBVSxFQUFFLEdBSlA7QUFLTGIsUUFBRSxFQUFFLENBQUMsQ0FBRCxFQUFJLElBQUosRUFBVSxJQUFWLEVBQWdCLElBQWhCLEVBQXNCLENBQXRCO0FBTEMsS0FMQTtBQWFQM0MsWUFBUSxFQUFFO0FBQ1JxRCxjQUFRLEVBQUUsQ0FERjtBQUVSRyxnQkFBVSxFQUFFLEdBRko7QUFHUkQsZ0JBQVUsRUFBRSxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsQ0FBYjtBQUhKO0FBYkg7QUE3RUksQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jMjhmOTI0OGZkZDY5YjYyYzZhOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCwgQ29udGFpbmVyLCBCb3gsIEdyaWQsIFRleHQsIEhlYWRpbmcgfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCBUZXh0RmVhdHVyZSBmcm9tICdjb21wb25lbnRzL3RleHQtZmVhdHVyZSc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICdjb21wb25lbnRzL2ltYWdlJztcclxuXHJcbmltcG9ydCBDb3JlRmVhdHVyZVRodW1iIGZyb20gJ2Fzc2V0cy9TdWNjZXNzLnBuZyc7XHJcbmltcG9ydCBCcmllZmNhc2UgZnJvbSAnYXNzZXRzL2NvcmUtZmVhdHVyZS9jb2FjaGluZy5wbmcnO1xyXG5pbXBvcnQgU2VjdXJlIGZyb20gJ2Fzc2V0cy9jb3JlLWZlYXR1cmUvdGVudC5wbmcnO1xyXG5cclxuY29uc3QgZGF0YSA9IHtcclxuICBzdWJUaXRsZTogJ0NvcmUgZmVhdHVyZXMnLFxyXG4gIHRpdGxlOiAnTGVhcm4sUHJhY3RpY2UgYW5kIEdldCBQbGFjZWQnLFxyXG4gIGZlYXR1cmVzOiBbXHJcbiAgICB7XHJcbiAgICAgIGlkOiAxLFxyXG4gICAgICBpbWdTcmM6IEJyaWVmY2FzZSxcclxuICAgICAgYWx0VGV4dDogJ01lbnRvcnNoaXAnLFxyXG4gICAgICB0aXRsZTogJ01lbnRvcnNoaXAnLFxyXG4gICAgICB0ZXh0OlxyXG4gICAgICAgICdHZXQgbWVudG9yc2hpcCBhdCBlYWNoIHBoYXNlIG9mIHlvdXIgbGVhcm5pbmcgYW5kIGxlYXJuIHRoZSByaWdodCB3YXkgaW4gYSBmYXN0IGFuZCBlZmZlY3RpdmUgbWFubmVyICAnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDIsXHJcbiAgICAgIGltZ1NyYzogU2VjdXJlLFxyXG4gICAgICBhbHRUZXh0OiAnV29ybGQgQ2xhc3MgVHJhaW5pbmcnLFxyXG4gICAgICB0aXRsZTogJ1RyYWluaW5nIENhbXBzJyxcclxuICAgICAgdGV4dDpcclxuICAgICAgICAnQSByZWFsLXRpbWUgbGVhcm5pbmcgYW5kIHByYWN0aWNlIHRyYWluaW5nIGNhbXBzIHdpdGggbGl2ZSBtZW50b3JzaGlwIGFuZCBndWlkYW5jZSB0byBib29zdCB5b3VyIGxlYXJuaW5nIGFuZCBnaXZlIHlvdSBhbiBlZGdlIG92ZXIgdGhlIHJlc3Qgb2YgdGhlIGNvbXBldGl0aW9uICcsXHJcbiAgICB9LFxyXG4gIF0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb3JlRmVhdHVyZSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gc3g9e3N0eWxlcy5jb3JlRmVhdHVyZX0+XHJcbiAgICAgIDxDb250YWluZXIgc3g9e3N0eWxlcy5jb250YWluZXJCb3h9PlxyXG4gICAgICAgIDxCb3ggc3g9e3N0eWxlcy50aHVtYm5haWx9PlxyXG4gICAgICAgICAgPEltYWdlIHNyYz17Q29yZUZlYXR1cmVUaHVtYn0gYWx0PVwiVGh1bWJuYWlsXCIgLz5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgICA8Qm94IHN4PXtzdHlsZXMuY29udGVudEJveH0+XHJcbiAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMuaGVhZGluZ1RvcH0+XHJcbiAgICAgICAgICAgIDxUZXh0RmVhdHVyZSBzdWJUaXRsZT17ZGF0YS5zdWJUaXRsZX0gdGl0bGU9e2RhdGEudGl0bGV9IC8+XHJcbiAgICAgICAgICA8L0JveD5cclxuXHJcbiAgICAgICAgICA8R3JpZCBnYXA9XCIxNXB4IDBcIiBjb2x1bW5zPXsxfSBzeD17c3R5bGVzLmdyaWR9PlxyXG4gICAgICAgICAgICB7ZGF0YS5mZWF0dXJlcy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMuY2FyZH0ga2V5PXtpdGVtLmlkfT5cclxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2l0ZW0uaW1nU3JjfSBhbHQ9e2l0ZW0uYWx0VGV4dH0gc3g9e3N0eWxlcy5pbWd9IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPEJveCBzeD17c3R5bGVzLndyYXBwZXJ9PlxyXG4gICAgICAgICAgICAgICAgICA8SGVhZGluZyBzeD17c3R5bGVzLndyYXBwZXIudGl0bGV9PntpdGVtLnRpdGxlfTwvSGVhZGluZz5cclxuICAgICAgICAgICAgICAgICAgPFRleHQgc3g9e3N0eWxlcy53cmFwcGVyLnN1YlRpdGxlfT57aXRlbS50ZXh0fTwvVGV4dD5cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGNvcmVGZWF0dXJlOiB7XHJcbiAgICBweTogWzAsIG51bGwsIG51bGwsIDIsIG51bGwsIDddLFxyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAnJjo6YmVmb3JlJzoge1xyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgY29udGVudDogJ1wiXCInLFxyXG4gICAgICB0b3A6IFsnYXV0bycsIG51bGwsIG51bGwsICc1MCUnXSxcclxuICAgICAgYm90dG9tOiBbJzEwMHB4JywgMCwgbnVsbCwgJ2F1dG8nXSxcclxuICAgICAgbGVmdDogMCxcclxuICAgICAgYmFja2dyb3VuZDogJ2xpbmVhci1ncmFkaWVudCgtMTU3ZGVnLCAjRjZGQUZELCAjRjlGQ0ZDLCAjRkNGREZDKScsXHJcbiAgICAgIGhlaWdodDogWzM1MCwgNTUwLCAnNjAlJ10sXHJcbiAgICAgIHdpZHRoOiAnNTAlJyxcclxuICAgICAgekluZGV4OiAtMSxcclxuICAgICAgYm9yZGVyVG9wUmlnaHRSYWRpdXM6ICc1MCUnLFxyXG4gICAgICBib3JkZXJCb3R0b21SaWdodFJhZGl1czogJzUwJScsXHJcbiAgICAgIHRyYW5zZm9ybTogWyd0cmFuc2xhdGVZKDApJywgbnVsbCwgbnVsbCwgJ3RyYW5zbGF0ZVkoLTUwJSknXSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBjb250YWluZXJCb3g6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcclxuICAgIGZsZXhEaXJlY3Rpb246IFsnY29sdW1uJywgbnVsbCwgbnVsbCwgJ3JvdyddLFxyXG4gIH0sXHJcbiAgdGh1bWJuYWlsOiB7XHJcbiAgd2lkdGg6JzkwMHB4J1xyXG4gIH0sXHJcbiAgY29udGVudEJveDoge1xyXG4gICAgd2lkdGg6IFsnMTAwJScsIDQ1MCwgNTUwLCAzNTAsIDUwMCwgNTcwXSxcclxuICAgIHByOiBbMCwgbnVsbCwgJ2F1dG8nLCBudWxsLCBudWxsLCA4MF0sXHJcbiAgICBwbDogJ2F1dG8nLFxyXG4gICAgZmxleFNocmluazogMCxcclxuICB9LFxyXG4gIGhlYWRpbmdUb3A6IHtcclxuICAgIHBsOiBbMCwgbnVsbCwgbnVsbCwgbnVsbCwgJzM1cHgnLCBudWxsLCAnNTVweCcsIDZdLFxyXG4gICAgbWI6IFszLCBudWxsLCBudWxsLCBudWxsLCAxXSxcclxuICAgIHRleHRBbGlnbjogWydjZW50ZXInLCBudWxsLCBudWxsLCAnbGVmdCddLFxyXG4gIH0sXHJcbiAgZ3JpZDoge1xyXG4gICAgcDogWycwIDBweCAzNXB4JywgbnVsbCwgbnVsbCwgbnVsbCwgJzAgMjBweCA0MHB4JywgbnVsbCwgJzAgNDBweCA0MHB4JywgMF0sXHJcbiAgfSxcclxuICBjYXJkOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCcsXHJcbiAgICBwOiBbXHJcbiAgICAgICcwIDE3cHggMjBweCcsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgICcwIDAgMjBweCcsXHJcbiAgICAgICcyMHB4IDE1cHggMTdweCcsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgICcyNXB4IDMwcHggMjNweCcsXHJcbiAgICBdLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnMTBweCcsXHJcbiAgICB0cmFuc2l0aW9uOiAnYWxsIDAuM3MnLFxyXG4gICAgd2lkdGg6IFsnMTAwJScsICc4NSUnLCBudWxsLCAnMTAwJSddLFxyXG4gICAgbXg6ICdhdXRvJyxcclxuICAgICcmOmhvdmVyJzoge1xyXG4gICAgICBib3hTaGFkb3c6IFtcclxuICAgICAgICAnMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwKScsXHJcbiAgICAgICAgbnVsbCxcclxuICAgICAgICBudWxsLFxyXG4gICAgICAgIG51bGwsXHJcbiAgICAgICAgJzBweCA4cHggMjRweCByZ2JhKDY5LCA4OCwgMTU3LCAwLjA3KScsXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIGltZzoge1xyXG4gICAgd2lkdGg6IFsnMTAwcHgnLCBudWxsLCAnNTVweCddLFxyXG4gICAgaGVpZ2h0OiAnYXV0bycsXHJcbiAgICBmbGV4U2hyaW5rOiAwLFxyXG4gICAgbXI6IFszLCA0XSxcclxuICB9LFxyXG4gIHdyYXBwZXI6IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIG10OiAnLTVweCcsXHJcbiAgICB0aXRsZToge1xyXG4gICAgICBmb250U2l6ZTogMyxcclxuICAgICAgY29sb3I6ICdoZWFkaW5nX3NlY29uZGFyeScsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IDEuNCxcclxuICAgICAgZm9udFdlaWdodDogNzAwLFxyXG4gICAgICBtYjogWzIsIG51bGwsIG51bGwsIG51bGwsIDNdLFxyXG4gICAgfSxcclxuXHJcbiAgICBzdWJUaXRsZToge1xyXG4gICAgICBmb250U2l6ZTogMSxcclxuICAgICAgZm9udFdlaWdodDogNDAwLFxyXG4gICAgICBsaW5lSGVpZ2h0OiBbMS44NSwgbnVsbCwgMl0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=