webpackHotUpdate_N_E("pages/index",{

/***/ "./src/sections/partner.js":
/*!*********************************!*\
  !*** ./src/sections/partner.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PartnerSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var components_text_feature__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/text-feature */ "./src/components/text-feature.js");
/* harmony import */ var components_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/image */ "./src/components/image.js");
/* harmony import */ var assets_partner_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/partner.png */ "./src/assets/partner.png");
/* harmony import */ var assets_partner_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_partner_png__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\reactprojects\\nexttry1\\src\\sections\\partner.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */




var data = {
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
_c = PartnerSection;
var styles = {
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

var _c;

$RefreshReg$(_c, "PartnerSection");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL3BhcnRuZXIuanMiXSwibmFtZXMiOlsiZGF0YSIsInN1YlRpdGxlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImJ0bk5hbWUiLCJidG5VUkwiLCJQYXJ0bmVyU2VjdGlvbiIsInZhcmlhbnQiLCJzdHlsZXMiLCJjb250YWluZXJCb3giLCJjb250ZW50Qm94IiwicHgiLCJQYXJ0bmVyIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImZsZXhXcmFwIiwiZmxleFNocmluayIsInRleHRBbGlnbiIsIndpZHRoIiwibXgiLCJwYiIsInByIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQSxJQUFNQSxJQUFJLEdBQUc7QUFDWEMsVUFBUSxFQUFFLHlCQURDO0FBRVhDLE9BQUssRUFBRSw2Q0FGSTtBQUdYQyxhQUFXLEVBQ1QsMEtBSlM7QUFLWEMsU0FBTyxFQUFFLGFBTEU7QUFNWEMsUUFBTSxFQUFFO0FBTkcsQ0FBYjtBQVNlLFNBQVNDLGNBQVQsR0FBMEI7QUFDdkMsU0FDRTtBQUFTLE1BQUUsRUFBRTtBQUFFQyxhQUFPLEVBQUU7QUFBWCxLQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxxREFBQyxrREFBRDtBQUFXLE1BQUUsRUFBRUMsTUFBTSxDQUFDQyxZQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UscURBQUMsNENBQUQ7QUFBSyxNQUFFLEVBQUVELE1BQU0sQ0FBQ0UsVUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLHFEQUFDLCtEQUFEO0FBQ0UsWUFBUSxFQUFFVixJQUFJLENBQUNDLFFBRGpCO0FBRUUsU0FBSyxFQUFFRCxJQUFJLENBQUNFLEtBRmQ7QUFHRSxlQUFXLEVBQUVGLElBQUksQ0FBQ0csV0FIcEI7QUFJRSxXQUFPLEVBQUVILElBQUksQ0FBQ0ksT0FKaEI7QUFLRSxVQUFNLEVBQUVKLElBQUksQ0FBQ0ssTUFMZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQVVFLHFEQUFDLDRDQUFEO0FBQUssTUFBRSxFQUFFO0FBQUVNLFFBQUUsRUFBRSxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsTUFBVixFQUFrQixDQUFsQjtBQUFOLEtBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLHFEQUFDLHdEQUFEO0FBQU8sT0FBRyxFQUFFQyx5REFBWjtBQUFxQixPQUFHLEVBQUMsU0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBVkYsQ0FERixDQURGO0FBa0JEO0tBbkJ1Qk4sYztBQXFCeEIsSUFBTUUsTUFBTSxHQUFHO0FBQ2JDLGNBQVksRUFBRTtBQUNaSSxXQUFPLEVBQUUsTUFERztBQUVaQyxjQUFVLEVBQUUsUUFGQTtBQUdaQyxrQkFBYyxFQUFFLGVBSEo7QUFJWkMsWUFBUSxFQUFFLENBQUMsTUFBRCxFQUFTLElBQVQsRUFBZSxJQUFmLEVBQXFCLFFBQXJCO0FBSkUsR0FERDtBQU9iTixZQUFVLEVBQUU7QUFDVk8sY0FBVSxFQUFFLENBREY7QUFFVk4sTUFBRSxFQUFFLENBQUMsQ0FBRCxFQUFJLElBQUosRUFBVSxNQUFWLEVBQWtCLENBQWxCLENBRk07QUFHVk8sYUFBUyxFQUFFLENBQUMsUUFBRCxFQUFXLElBQVgsRUFBaUIsSUFBakIsRUFBdUIsTUFBdkIsQ0FIRDtBQUlWQyxTQUFLLEVBQUUsQ0FBQyxNQUFELEVBQVMsR0FBVCxFQUFjLEdBQWQsRUFBbUIsT0FBbkIsRUFBNEIsT0FBNUIsRUFBcUMsT0FBckMsQ0FKRztBQUtWQyxNQUFFLEVBQUUsTUFMTTtBQU1WQyxNQUFFLEVBQUUsQ0FBQyxNQUFELEVBQVMsSUFBVCxFQUFlLElBQWYsRUFBcUIsQ0FBckIsQ0FOTTtBQU9WLG9CQUFnQjtBQUNkQyxRQUFFLEVBQUUsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLElBQVYsRUFBZ0IsSUFBaEIsRUFBc0IsQ0FBdEI7QUFEVTtBQVBOO0FBUEMsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kNWNkZWQ3NGY1NDg1MjJhYzlhNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCwgQ29udGFpbmVyLCBCb3ggfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCBUZXh0RmVhdHVyZSBmcm9tICdjb21wb25lbnRzL3RleHQtZmVhdHVyZSc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICdjb21wb25lbnRzL2ltYWdlJztcclxuXHJcbmltcG9ydCBQYXJ0bmVyIGZyb20gJ2Fzc2V0cy9wYXJ0bmVyLnBuZyc7XHJcblxyXG5jb25zdCBkYXRhID0ge1xyXG4gIHN1YlRpdGxlOiAnQ3V0dGluZyBFZGdlIHRlY2hub2xvZ3knLFxyXG4gIHRpdGxlOiAnTGVhcm4gdGhlIE1vc3QgQWR2YW5jZSBhbmQgRGVtYW5kaW5nIFNraWxscycsXHJcbiAgZGVzY3JpcHRpb246XHJcbiAgICAnTGVhcm4gdGhlIGxhdGVzdCB0ZWNobm9sb2d5IHdlYiBkZXZlbG9wbWVudCwgQW5kcm9pZCBBcHAgZGV2ZWxvcG1lbnQsIE5hdGl2ZSBBcHAsIFBXRCBhcHBzIGFuZCBJT1MgYXBwcyB3aXRoIHRoZSBOb2RlSnMgRGphbmdvIEdyYXBoUWwgYW5kIG11Y2ggbW9yZSB0ZWNobm9sb2d5IHRvIGxlYXJuJyxcclxuICBidG5OYW1lOiAnR2V0IFN0YXJ0ZWQnLFxyXG4gIGJ0blVSTDogJyMnLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFydG5lclNlY3Rpb24oKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIHN4PXt7IHZhcmlhbnQ6ICdzZWN0aW9uLnBhcnRuZXInIH19PlxyXG4gICAgICA8Q29udGFpbmVyIHN4PXtzdHlsZXMuY29udGFpbmVyQm94fT5cclxuICAgICAgICA8Qm94IHN4PXtzdHlsZXMuY29udGVudEJveH0+XHJcbiAgICAgICAgICA8VGV4dEZlYXR1cmVcclxuICAgICAgICAgICAgc3ViVGl0bGU9e2RhdGEuc3ViVGl0bGV9XHJcbiAgICAgICAgICAgIHRpdGxlPXtkYXRhLnRpdGxlfVxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj17ZGF0YS5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgYnRuTmFtZT17ZGF0YS5idG5OYW1lfVxyXG4gICAgICAgICAgICBidG5VUkw9e2RhdGEuYnRuVVJMfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgICA8Qm94IHN4PXt7IHB4OiBbMCwgbnVsbCwgJzQwcHgnLCAwXSB9fT5cclxuICAgICAgICAgIDxJbWFnZSBzcmM9e1BhcnRuZXJ9IGFsdD1cIlBhcnRuZXJcIiAvPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgY29udGFpbmVyQm94OiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXHJcbiAgICBmbGV4V3JhcDogWyd3cmFwJywgbnVsbCwgbnVsbCwgJ25vd3JhcCddLFxyXG4gIH0sXHJcbiAgY29udGVudEJveDoge1xyXG4gICAgZmxleFNocmluazogMCxcclxuICAgIHB4OiBbMCwgbnVsbCwgJzMwcHgnLCAwXSxcclxuICAgIHRleHRBbGlnbjogWydjZW50ZXInLCBudWxsLCBudWxsLCAnbGVmdCddLFxyXG4gICAgd2lkdGg6IFsnMTAwJScsIDQ1MCwgNTUwLCAnMzUwcHgnLCAnNDEwcHgnLCAnNDg1cHgnXSxcclxuICAgIG14OiAnYXV0bycsXHJcbiAgICBwYjogWyczMHB4JywgbnVsbCwgbnVsbCwgMF0sXHJcbiAgICAnLmRlc2NyaXB0aW9uJzoge1xyXG4gICAgICBwcjogWzAsIG51bGwsIG51bGwsIG51bGwsIDRdLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9