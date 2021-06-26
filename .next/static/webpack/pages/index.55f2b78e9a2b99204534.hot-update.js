webpackHotUpdate_N_E("pages/index",{

/***/ "./src/sections/feature.js":
/*!*********************************!*\
  !*** ./src/sections/feature.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Feature; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
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










var data = [{
  id: 1,
  imgSrc: assets_feature_smart_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
  altText: 'Practical Learning',
  title: 'Practical Learning',
  text: 'Get your blood tests delivered at let home collect sample from the victory of the managements.'
}, {
  id: 2,
  imgSrc: assets_feature_winner_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
  altText: 'Interaction With Expert',
  title: 'Interaction With Expert',
  text: 'Get your blood tests delivered at let home collect sample from the victory of the managements.'
}, {
  id: 3,
  imgSrc: assets_feature_cloud_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
  altText: 'Quizzes',
  title: 'Quizzes',
  text: 'Get your blood tests delivered at let home collect sample from the victory of the managements.'
}, {
  id: 4,
  imgSrc: assets_feature_setting_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
  altText: 'Real-time Assignments',
  title: 'Real-time Assignments',
  text: 'Get your blood tests delivered at let home collect sample from the victory of the managements.'
}, {
  id: 5,
  imgSrc: assets_feature_design_svg__WEBPACK_IMPORTED_MODULE_8___default.a,
  altText: 'Doubt Checking',
  title: 'Doubt Checking',
  text: 'Get your blood tests delivered at let home collect sample from the victory of the managements.'
}, {
  id: 6,
  imgSrc: assets_feature_chat_svg__WEBPACK_IMPORTED_MODULE_9___default.a,
  altText: 'Internships',
  title: 'Internships',
  text: 'Get your blood tests delivered at let home collect sample from the victory of the managements.'
}];
function Feature() {
  var _this = this;

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
  }, data.map(function (item) {
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_feature_card_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: item.id,
      src: item.imgSrc,
      alt: item.title,
      title: item.title,
      text: item.text,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 13
      }
    });
  }))));
}
_c = Feature;
var styles = {
  grid: {
    pt: [0, null, null, null, null, null, null, 3],
    gridGap: ['37px 0', null, '45px 30px', null, '50px 30px', null, null, '90px 70px'],
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)', null, 'repeat(3,1fr)']
  }
};

var _c;

$RefreshReg$(_c, "Feature");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL2ZlYXR1cmUuanMiXSwibmFtZXMiOlsiZGF0YSIsImlkIiwiaW1nU3JjIiwiU21hcnQiLCJhbHRUZXh0IiwidGl0bGUiLCJ0ZXh0IiwiV2lubmVyIiwiQ2xvdWQiLCJTZXR0aW5nIiwiRGVzaWduIiwiQ2hhdCIsIkZlYXR1cmUiLCJ2YXJpYW50Iiwic3R5bGVzIiwiZ3JpZCIsIm1hcCIsIml0ZW0iLCJwdCIsImdyaWRHYXAiLCJ3aWR0aCIsIm14IiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLElBQUksR0FBRyxDQUNYO0FBQ0VDLElBQUUsRUFBRSxDQUROO0FBRUVDLFFBQU0sRUFBRUMsK0RBRlY7QUFHRUMsU0FBTyxFQUFFLG9CQUhYO0FBSUVDLE9BQUssRUFBRSxvQkFKVDtBQUtFQyxNQUFJLEVBQ0Y7QUFOSixDQURXLEVBU1g7QUFDRUwsSUFBRSxFQUFFLENBRE47QUFFRUMsUUFBTSxFQUFFSyxnRUFGVjtBQUdFSCxTQUFPLEVBQUUseUJBSFg7QUFJRUMsT0FBSyxFQUFFLHlCQUpUO0FBS0VDLE1BQUksRUFDRjtBQU5KLENBVFcsRUFpQlg7QUFDRUwsSUFBRSxFQUFFLENBRE47QUFFRUMsUUFBTSxFQUFFTSwrREFGVjtBQUdFSixTQUFPLEVBQUUsU0FIWDtBQUlFQyxPQUFLLEVBQUUsU0FKVDtBQUtFQyxNQUFJLEVBQ0Y7QUFOSixDQWpCVyxFQXlCWDtBQUNFTCxJQUFFLEVBQUUsQ0FETjtBQUVFQyxRQUFNLEVBQUVPLGlFQUZWO0FBR0VMLFNBQU8sRUFBRSx1QkFIWDtBQUlFQyxPQUFLLEVBQUUsdUJBSlQ7QUFLRUMsTUFBSSxFQUNGO0FBTkosQ0F6QlcsRUFpQ1g7QUFDRUwsSUFBRSxFQUFFLENBRE47QUFFRUMsUUFBTSxFQUFFUSxnRUFGVjtBQUdFTixTQUFPLEVBQUUsZ0JBSFg7QUFJRUMsT0FBSyxFQUFFLGdCQUpUO0FBS0VDLE1BQUksRUFDRjtBQU5KLENBakNXLEVBeUNYO0FBQ0VMLElBQUUsRUFBRSxDQUROO0FBRUVDLFFBQU0sRUFBRVMsOERBRlY7QUFHRVAsU0FBTyxFQUFFLGFBSFg7QUFJRUMsT0FBSyxFQUFFLGFBSlQ7QUFLRUMsTUFBSSxFQUNGO0FBTkosQ0F6Q1csQ0FBYjtBQW1EZSxTQUFTTSxPQUFULEdBQW1CO0FBQUE7O0FBQ2hDLFNBQ0U7QUFBUyxNQUFFLEVBQUU7QUFBRUMsYUFBTyxFQUFFO0FBQVgsS0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UscURBQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLHFEQUFDLGlFQUFEO0FBQ0UsVUFBTSxFQUFDLGtCQURUO0FBRUUsU0FBSyxFQUFDLDhCQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQU1FLHFEQUFDLDZDQUFEO0FBQU0sTUFBRSxFQUFFQyxNQUFNLENBQUNDLElBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR2YsSUFBSSxDQUFDZ0IsR0FBTCxDQUFTLFVBQUNDLElBQUQ7QUFBQSxXQUNSLHFEQUFDLGtFQUFEO0FBQ0UsU0FBRyxFQUFFQSxJQUFJLENBQUNoQixFQURaO0FBRUUsU0FBRyxFQUFFZ0IsSUFBSSxDQUFDZixNQUZaO0FBR0UsU0FBRyxFQUFFZSxJQUFJLENBQUNaLEtBSFo7QUFJRSxXQUFLLEVBQUVZLElBQUksQ0FBQ1osS0FKZDtBQUtFLFVBQUksRUFBRVksSUFBSSxDQUFDWCxJQUxiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFEUTtBQUFBLEdBQVQsQ0FESCxDQU5GLENBREYsQ0FERjtBQXNCRDtLQXZCdUJNLE87QUF5QnhCLElBQU1FLE1BQU0sR0FBRztBQUNiQyxNQUFJLEVBQUU7QUFDSkcsTUFBRSxFQUFFLENBQUMsQ0FBRCxFQUFJLElBQUosRUFBVSxJQUFWLEVBQWdCLElBQWhCLEVBQXNCLElBQXRCLEVBQTRCLElBQTVCLEVBQWtDLElBQWxDLEVBQXdDLENBQXhDLENBREE7QUFFSkMsV0FBTyxFQUFFLENBQ1AsUUFETyxFQUVQLElBRk8sRUFHUCxXQUhPLEVBSVAsSUFKTyxFQUtQLFdBTE8sRUFNUCxJQU5PLEVBT1AsSUFQTyxFQVFQLFdBUk8sQ0FGTDtBQVlKQyxTQUFLLEVBQUUsQ0FBQyxNQUFELEVBQVMsS0FBVCxFQUFnQixNQUFoQixDQVpIO0FBYUpDLE1BQUUsRUFBRSxNQWJBO0FBY0pDLHVCQUFtQixFQUFFLENBQ25CLGVBRG1CLEVBRW5CLElBRm1CLEVBR25CLGVBSG1CLEVBSW5CLElBSm1CLEVBS25CLGVBTG1CO0FBZGpCO0FBRE8sQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41NWYyYjc4ZTlhMmI5OTIwNDUzNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBHcmlkIH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgU2VjdGlvbkhlYWRlciBmcm9tICdjb21wb25lbnRzL3NlY3Rpb24taGVhZGVyJztcclxuaW1wb3J0IEZlYXR1cmVDYXJkIGZyb20gJ2NvbXBvbmVudHMvZmVhdHVyZS1jYXJkLmpzJztcclxuaW1wb3J0IFNtYXJ0IGZyb20gJ2Fzc2V0cy9mZWF0dXJlL3NtYXJ0LnN2Zyc7XHJcbmltcG9ydCBXaW5uZXIgZnJvbSAnYXNzZXRzL2ZlYXR1cmUvd2lubmVyLnN2Zyc7XHJcbmltcG9ydCBDbG91ZCBmcm9tICdhc3NldHMvZmVhdHVyZS9jbG91ZC5zdmcnO1xyXG5pbXBvcnQgU2V0dGluZyBmcm9tICdhc3NldHMvZmVhdHVyZS9zZXR0aW5nLnN2Zyc7XHJcbmltcG9ydCBEZXNpZ24gZnJvbSAnYXNzZXRzL2ZlYXR1cmUvZGVzaWduLnN2Zyc7XHJcbmltcG9ydCBDaGF0IGZyb20gJ2Fzc2V0cy9mZWF0dXJlL2NoYXQuc3ZnJztcclxuXHJcbmNvbnN0IGRhdGEgPSBbXHJcbiAge1xyXG4gICAgaWQ6IDEsXHJcbiAgICBpbWdTcmM6IFNtYXJ0LFxyXG4gICAgYWx0VGV4dDogJ1ByYWN0aWNhbCBMZWFybmluZycsXHJcbiAgICB0aXRsZTogJ1ByYWN0aWNhbCBMZWFybmluZycsXHJcbiAgICB0ZXh0OlxyXG4gICAgICAnR2V0IHlvdXIgYmxvb2QgdGVzdHMgZGVsaXZlcmVkIGF0IGxldCBob21lIGNvbGxlY3Qgc2FtcGxlIGZyb20gdGhlIHZpY3Rvcnkgb2YgdGhlIG1hbmFnZW1lbnRzLicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMixcclxuICAgIGltZ1NyYzogV2lubmVyLFxyXG4gICAgYWx0VGV4dDogJ0ludGVyYWN0aW9uIFdpdGggRXhwZXJ0JyxcclxuICAgIHRpdGxlOiAnSW50ZXJhY3Rpb24gV2l0aCBFeHBlcnQnLFxyXG4gICAgdGV4dDpcclxuICAgICAgJ0dldCB5b3VyIGJsb29kIHRlc3RzIGRlbGl2ZXJlZCBhdCBsZXQgaG9tZSBjb2xsZWN0IHNhbXBsZSBmcm9tIHRoZSB2aWN0b3J5IG9mIHRoZSBtYW5hZ2VtZW50cy4nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDMsXHJcbiAgICBpbWdTcmM6IENsb3VkLFxyXG4gICAgYWx0VGV4dDogJ1F1aXp6ZXMnLFxyXG4gICAgdGl0bGU6ICdRdWl6emVzJyxcclxuICAgIHRleHQ6XHJcbiAgICAgICdHZXQgeW91ciBibG9vZCB0ZXN0cyBkZWxpdmVyZWQgYXQgbGV0IGhvbWUgY29sbGVjdCBzYW1wbGUgZnJvbSB0aGUgdmljdG9yeSBvZiB0aGUgbWFuYWdlbWVudHMuJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA0LFxyXG4gICAgaW1nU3JjOiBTZXR0aW5nLFxyXG4gICAgYWx0VGV4dDogJ1JlYWwtdGltZSBBc3NpZ25tZW50cycsXHJcbiAgICB0aXRsZTogJ1JlYWwtdGltZSBBc3NpZ25tZW50cycsXHJcbiAgICB0ZXh0OlxyXG4gICAgICAnR2V0IHlvdXIgYmxvb2QgdGVzdHMgZGVsaXZlcmVkIGF0IGxldCBob21lIGNvbGxlY3Qgc2FtcGxlIGZyb20gdGhlIHZpY3Rvcnkgb2YgdGhlIG1hbmFnZW1lbnRzLicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNSxcclxuICAgIGltZ1NyYzogRGVzaWduLFxyXG4gICAgYWx0VGV4dDogJ0RvdWJ0IENoZWNraW5nJyxcclxuICAgIHRpdGxlOiAnRG91YnQgQ2hlY2tpbmcnLFxyXG4gICAgdGV4dDpcclxuICAgICAgJ0dldCB5b3VyIGJsb29kIHRlc3RzIGRlbGl2ZXJlZCBhdCBsZXQgaG9tZSBjb2xsZWN0IHNhbXBsZSBmcm9tIHRoZSB2aWN0b3J5IG9mIHRoZSBtYW5hZ2VtZW50cy4nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDYsXHJcbiAgICBpbWdTcmM6IENoYXQsXHJcbiAgICBhbHRUZXh0OiAnSW50ZXJuc2hpcHMnLFxyXG4gICAgdGl0bGU6ICdJbnRlcm5zaGlwcycsXHJcbiAgICB0ZXh0OlxyXG4gICAgICAnR2V0IHlvdXIgYmxvb2QgdGVzdHMgZGVsaXZlcmVkIGF0IGxldCBob21lIGNvbGxlY3Qgc2FtcGxlIGZyb20gdGhlIHZpY3Rvcnkgb2YgdGhlIG1hbmFnZW1lbnRzLicsXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZlYXR1cmUoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIHN4PXt7IHZhcmlhbnQ6ICdzZWN0aW9uLmZlYXR1cmUnIH19PlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxTZWN0aW9uSGVhZGVyXHJcbiAgICAgICAgICBzbG9nYW49XCJRdWFsaXR5IGZlYXR1cmVzXCJcclxuICAgICAgICAgIHRpdGxlPVwiTWVldCBleGNpdGluZyBmZWF0dXJlIG9mIGFwcFwiXHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPEdyaWQgc3g9e3N0eWxlcy5ncmlkfT5cclxuICAgICAgICAgIHtkYXRhLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICA8RmVhdHVyZUNhcmRcclxuICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgICAgc3JjPXtpdGVtLmltZ1NyY31cclxuICAgICAgICAgICAgICBhbHQ9e2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgdGl0bGU9e2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgdGV4dD17aXRlbS50ZXh0fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgZ3JpZDoge1xyXG4gICAgcHQ6IFswLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAzXSxcclxuICAgIGdyaWRHYXA6IFtcclxuICAgICAgJzM3cHggMCcsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgICc0NXB4IDMwcHgnLFxyXG4gICAgICBudWxsLFxyXG4gICAgICAnNTBweCAzMHB4JyxcclxuICAgICAgbnVsbCxcclxuICAgICAgbnVsbCxcclxuICAgICAgJzkwcHggNzBweCcsXHJcbiAgICBdLFxyXG4gICAgd2lkdGg6IFsnMTAwJScsICc4MCUnLCAnMTAwJSddLFxyXG4gICAgbXg6ICdhdXRvJyxcclxuICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFtcclxuICAgICAgJ3JlcGVhdCgxLDFmciknLFxyXG4gICAgICBudWxsLFxyXG4gICAgICAncmVwZWF0KDIsMWZyKScsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgICdyZXBlYXQoMywxZnIpJyxcclxuICAgIF0sXHJcbiAgfSxcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==