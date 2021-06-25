webpackHotUpdate_N_E("pages/index",{

/***/ "./src/sections/key-feature.js":
/*!*************************************!*\
  !*** ./src/sections/key-feature.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KeyFeature; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var _components_section_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/section-header */ "./src/components/section-header.js");
/* harmony import */ var components_feature_card_column_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/feature-card-column.js */ "./src/components/feature-card-column.js");
/* harmony import */ var assets_key_feature_practice_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/key-feature/practice.png */ "./src/assets/key-feature/practice.png");
/* harmony import */ var assets_key_feature_practice_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_key_feature_practice_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var assets_key_feature_help_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/key-feature/help.png */ "./src/assets/key-feature/help.png");
/* harmony import */ var assets_key_feature_help_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_key_feature_help_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var assets_key_feature_promotion_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/key-feature/promotion.png */ "./src/assets/key-feature/promotion.png");
/* harmony import */ var assets_key_feature_promotion_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_key_feature_promotion_png__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\reactprojects\\nexttry1\\src\\sections\\key-feature.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */







var data = [{
  id: 1,
  imgSrc: assets_key_feature_practice_png__WEBPACK_IMPORTED_MODULE_4___default.a,
  altText: 'Practical Learning',
  title: 'Practical Learning',
  text: 'The theory is all about reading a given set of materials and understanding what the materials want to convey. Whereas to gain practical knowledge, you need to explore various options and see what works the best.'
}, {
  id: 2,
  imgSrc: assets_key_feature_help_png__WEBPACK_IMPORTED_MODULE_5___default.a,
  altText: ' 24 *7 Mentor Support',
  title: '24 *7 Mentor Support',
  text: 'the Path to success can be tough but the right guidance and an expert helping hand can make this path  enjoyable and make your efforts count'
}, {
  id: 3,
  imgSrc: assets_key_feature_promotion_png__WEBPACK_IMPORTED_MODULE_6___default.a,
  altText: 'Internships',
  title: 'Internships',
  text: 'Industry leading curriculum designed by expert developers turned educators who have invested time to create quality content infused with unique teaching methodology.'
}];
function KeyFeature() {
  var _this = this;

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
  }, data.map(function (item) {
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_feature_card_column_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: item.id,
      src: item.imgSrc,
      alt: item.title,
      title: item.title,
      text: item.text,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 13
      }
    });
  }))));
}
_c = KeyFeature;
var styles = {
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

var _c;

$RefreshReg$(_c, "KeyFeature");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL2tleS1mZWF0dXJlLmpzIl0sIm5hbWVzIjpbImRhdGEiLCJpZCIsImltZ1NyYyIsIlZlY3RvciIsImFsdFRleHQiLCJ0aXRsZSIsInRleHQiLCJFZGl0aW5nIiwiU3BlZWQiLCJLZXlGZWF0dXJlIiwidmFyaWFudCIsInN0eWxlcyIsImdyaWQiLCJtYXAiLCJpdGVtIiwicHgiLCJwdCIsImdyaWRHYXAiLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwid2lkdGgiLCJteCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLElBQUksR0FBRyxDQUNYO0FBQ0VDLElBQUUsRUFBRSxDQUROO0FBRUVDLFFBQU0sRUFBRUMsc0VBRlY7QUFHRUMsU0FBTyxFQUFFLG9CQUhYO0FBSUVDLE9BQUssRUFBRSxvQkFKVDtBQUtFQyxNQUFJLEVBQ0Y7QUFOSixDQURXLEVBU1g7QUFDRUwsSUFBRSxFQUFFLENBRE47QUFFRUMsUUFBTSxFQUFFSyxrRUFGVjtBQUdFSCxTQUFPLEVBQUUsdUJBSFg7QUFJRUMsT0FBSyxFQUFFLHNCQUpUO0FBS0VDLE1BQUksRUFDRjtBQU5KLENBVFcsRUFpQlg7QUFDRUwsSUFBRSxFQUFFLENBRE47QUFFRUMsUUFBTSxFQUFFTSx1RUFGVjtBQUdFSixTQUFPLEVBQUUsYUFIWDtBQUlFQyxPQUFLLEVBQUUsYUFKVDtBQUtFQyxNQUFJLEVBQ0Y7QUFOSixDQWpCVyxDQUFiO0FBMkJlLFNBQVNHLFVBQVQsR0FBc0I7QUFBQTs7QUFDbkMsU0FDRTtBQUFTLE1BQUUsRUFBRTtBQUFFQyxhQUFPLEVBQUU7QUFBWCxLQUFiO0FBQWdELE1BQUUsRUFBQyxTQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UscURBQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLHFEQUFDLGtFQUFEO0FBQ0UsVUFBTSxFQUFDLGtCQURUO0FBRUUsU0FBSyxFQUFDLG9CQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQU1FLHFEQUFDLDZDQUFEO0FBQU0sTUFBRSxFQUFFQyxNQUFNLENBQUNDLElBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR1osSUFBSSxDQUFDYSxHQUFMLENBQVMsVUFBQ0MsSUFBRDtBQUFBLFdBQ1IscURBQUMseUVBQUQ7QUFDRSxTQUFHLEVBQUVBLElBQUksQ0FBQ2IsRUFEWjtBQUVFLFNBQUcsRUFBRWEsSUFBSSxDQUFDWixNQUZaO0FBR0UsU0FBRyxFQUFFWSxJQUFJLENBQUNULEtBSFo7QUFJRSxXQUFLLEVBQUVTLElBQUksQ0FBQ1QsS0FKZDtBQUtFLFVBQUksRUFBRVMsSUFBSSxDQUFDUixJQUxiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFEUTtBQUFBLEdBQVQsQ0FESCxDQU5GLENBREYsQ0FERjtBQXNCRDtLQXZCdUJHLFU7QUF5QnhCLElBQU1FLE1BQU0sR0FBRztBQUNiQyxNQUFJLEVBQUU7QUFDSkcsTUFBRSxFQUFFLENBQUMsQ0FBRCxFQUFJLElBQUosRUFBVSxJQUFWLEVBQWdCLE1BQWhCLEVBQXdCLElBQXhCLEVBQThCLE1BQTlCLENBREE7QUFFSkMsTUFBRSxFQUFFLENBQUMsQ0FBRCxFQUFJLElBQUosRUFBVSxJQUFWLEVBQWdCLElBQWhCLEVBQXNCLElBQXRCLEVBQTRCLElBQTVCLEVBQWtDLElBQWxDLEVBQXdDLENBQXhDLENBRkE7QUFHSkMsV0FBTyxFQUFFLENBQUMsUUFBRCxFQUFXLElBQVgsRUFBaUIsUUFBakIsQ0FITDtBQUlKQyx1QkFBbUIsRUFBRSxDQUNuQixlQURtQixFQUVuQixJQUZtQixFQUduQixlQUhtQixFQUluQixJQUptQixFQUtuQixlQUxtQixDQUpqQjtBQVdKQyxTQUFLLEVBQUUsQ0FBQyxNQUFELEVBQVMsS0FBVCxFQUFnQixNQUFoQixDQVhIO0FBWUpDLE1BQUUsRUFBRSxNQVpBO0FBYUosZUFBVztBQUNUTCxRQUFFLEVBQUUsQ0FBQyxDQUFELEVBQUksTUFBSixFQUFZLElBQVosRUFBa0IsTUFBbEIsRUFBMEIsSUFBMUIsRUFBZ0MsTUFBaEMsRUFBd0MsTUFBeEMsRUFBZ0QsTUFBaEQ7QUFESztBQWJQO0FBRE8sQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40YzRlMzgzNjMyZGE5NjJhOTFhNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBHcmlkIH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgU2VjdGlvbkhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL3NlY3Rpb24taGVhZGVyJztcclxuaW1wb3J0IEZlYXR1cmVDYXJkQ29sdW1uIGZyb20gJ2NvbXBvbmVudHMvZmVhdHVyZS1jYXJkLWNvbHVtbi5qcyc7XHJcbmltcG9ydCBWZWN0b3IgZnJvbSAnYXNzZXRzL2tleS1mZWF0dXJlL3ByYWN0aWNlLnBuZyc7XHJcbmltcG9ydCBFZGl0aW5nIGZyb20gJ2Fzc2V0cy9rZXktZmVhdHVyZS9oZWxwLnBuZyc7XHJcbmltcG9ydCBTcGVlZCBmcm9tICdhc3NldHMva2V5LWZlYXR1cmUvcHJvbW90aW9uLnBuZyc7XHJcblxyXG5jb25zdCBkYXRhID0gW1xyXG4gIHtcclxuICAgIGlkOiAxLFxyXG4gICAgaW1nU3JjOiBWZWN0b3IsXHJcbiAgICBhbHRUZXh0OiAnUHJhY3RpY2FsIExlYXJuaW5nJyxcclxuICAgIHRpdGxlOiAnUHJhY3RpY2FsIExlYXJuaW5nJyxcclxuICAgIHRleHQ6XHJcbiAgICAgICdUaGUgdGhlb3J5IGlzIGFsbCBhYm91dCByZWFkaW5nIGEgZ2l2ZW4gc2V0IG9mIG1hdGVyaWFscyBhbmQgdW5kZXJzdGFuZGluZyB3aGF0IHRoZSBtYXRlcmlhbHMgd2FudCB0byBjb252ZXkuIFdoZXJlYXMgdG8gZ2FpbiBwcmFjdGljYWwga25vd2xlZGdlLCB5b3UgbmVlZCB0byBleHBsb3JlIHZhcmlvdXMgb3B0aW9ucyBhbmQgc2VlIHdoYXQgd29ya3MgdGhlIGJlc3QuJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAyLFxyXG4gICAgaW1nU3JjOiBFZGl0aW5nLFxyXG4gICAgYWx0VGV4dDogJyAyNCAqNyBNZW50b3IgU3VwcG9ydCcsXHJcbiAgICB0aXRsZTogJzI0ICo3IE1lbnRvciBTdXBwb3J0JyxcclxuICAgIHRleHQ6XHJcbiAgICAgICd0aGUgUGF0aCB0byBzdWNjZXNzIGNhbiBiZSB0b3VnaCBidXQgdGhlIHJpZ2h0IGd1aWRhbmNlIGFuZCBhbiBleHBlcnQgaGVscGluZyBoYW5kIGNhbiBtYWtlIHRoaXMgcGF0aCAgZW5qb3lhYmxlIGFuZCBtYWtlIHlvdXIgZWZmb3J0cyBjb3VudCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMyxcclxuICAgIGltZ1NyYzogU3BlZWQsXHJcbiAgICBhbHRUZXh0OiAnSW50ZXJuc2hpcHMnLFxyXG4gICAgdGl0bGU6ICdJbnRlcm5zaGlwcycsXHJcbiAgICB0ZXh0OlxyXG4gICAgICAnSW5kdXN0cnkgbGVhZGluZyBjdXJyaWN1bHVtIGRlc2lnbmVkIGJ5IGV4cGVydCBkZXZlbG9wZXJzIHR1cm5lZCBlZHVjYXRvcnMgd2hvIGhhdmUgaW52ZXN0ZWQgdGltZSB0byBjcmVhdGUgcXVhbGl0eSBjb250ZW50IGluZnVzZWQgd2l0aCB1bmlxdWUgdGVhY2hpbmcgbWV0aG9kb2xvZ3kuJyxcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gS2V5RmVhdHVyZSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gc3g9e3sgdmFyaWFudDogJ3NlY3Rpb24ua2V5RmVhdHVyZScgfX0gaWQ9XCJmZWF0dXJlXCI+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPFNlY3Rpb25IZWFkZXJcclxuICAgICAgICAgIHNsb2dhbj1cIlF1YWxpdHkgZmVhdHVyZXNcIlxyXG4gICAgICAgICAgdGl0bGU9XCJFWENMVVNJVkUgRkVBVFVSRVNcIlxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxHcmlkIHN4PXtzdHlsZXMuZ3JpZH0+XHJcbiAgICAgICAgICB7ZGF0YS5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgPEZlYXR1cmVDYXJkQ29sdW1uXHJcbiAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxyXG4gICAgICAgICAgICAgIHNyYz17aXRlbS5pbWdTcmN9XHJcbiAgICAgICAgICAgICAgYWx0PXtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgIHRpdGxlPXtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgIHRleHQ9e2l0ZW0udGV4dH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGdyaWQ6IHtcclxuICAgIHB4OiBbMCwgbnVsbCwgbnVsbCwgJzQwcHgnLCBudWxsLCAnODBweCddLFxyXG4gICAgcHQ6IFswLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAzXSxcclxuICAgIGdyaWRHYXA6IFsnMzVweCAwJywgbnVsbCwgJzQwcHggMCddLFxyXG4gICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogW1xyXG4gICAgICAncmVwZWF0KDEsMWZyKScsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgICdyZXBlYXQoMiwxZnIpJyxcclxuICAgICAgbnVsbCxcclxuICAgICAgJ3JlcGVhdCgzLDFmciknLFxyXG4gICAgXSxcclxuICAgIHdpZHRoOiBbJzEwMCUnLCAnODAlJywgJzEwMCUnXSxcclxuICAgIG14OiAnYXV0bycsXHJcbiAgICAnJiA+IGRpdic6IHtcclxuICAgICAgcHg6IFswLCAnMTVweCcsIG51bGwsICcyNXB4JywgbnVsbCwgJzMwcHgnLCAnNDBweCcsICc2MHB4J10sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=