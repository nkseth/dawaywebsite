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
/* harmony import */ var assets_coreFeature_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/coreFeature.png */ "./src/assets/coreFeature.png");
/* harmony import */ var assets_coreFeature_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_coreFeature_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var assets_core_feature_briefcase_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/core-feature/briefcase.svg */ "./src/assets/core-feature/briefcase.svg");
/* harmony import */ var assets_core_feature_briefcase_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_core_feature_briefcase_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var assets_core_feature_secure_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/core-feature/secure.svg */ "./src/assets/core-feature/secure.svg");
/* harmony import */ var assets_core_feature_secure_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_core_feature_secure_svg__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\reactprojects\\nexttry1\\src\\sections\\core-feature.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */






var data = {
  subTitle: 'Core features',
  title: 'Learn,Practice and Placed',
  features: [{
    id: 1,
    imgSrc: assets_core_feature_briefcase_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
    altText: 'Mentorship in chnage',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL2NvcmUtZmVhdHVyZS5qcyJdLCJuYW1lcyI6WyJkYXRhIiwic3ViVGl0bGUiLCJ0aXRsZSIsImZlYXR1cmVzIiwiaWQiLCJpbWdTcmMiLCJCcmllZmNhc2UiLCJhbHRUZXh0IiwidGV4dCIsIlNlY3VyZSIsIkNvcmVGZWF0dXJlIiwic3R5bGVzIiwiY29yZUZlYXR1cmUiLCJjb250YWluZXJCb3giLCJ0aHVtYm5haWwiLCJDb3JlRmVhdHVyZVRodW1iIiwiY29udGVudEJveCIsImhlYWRpbmdUb3AiLCJncmlkIiwibWFwIiwiaXRlbSIsImNhcmQiLCJpbWciLCJ3cmFwcGVyIiwicHkiLCJwb3NpdGlvbiIsImNvbnRlbnQiLCJ0b3AiLCJib3R0b20iLCJsZWZ0IiwiYmFja2dyb3VuZCIsImhlaWdodCIsIndpZHRoIiwiekluZGV4IiwiYm9yZGVyVG9wUmlnaHRSYWRpdXMiLCJib3JkZXJCb3R0b21SaWdodFJhZGl1cyIsInRyYW5zZm9ybSIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJmbGV4RGlyZWN0aW9uIiwicGwiLCJwciIsIm9yZGVyIiwiZmxleFNocmluayIsIm1iIiwidGV4dEFsaWduIiwicCIsImJhY2tncm91bmRDb2xvciIsImJvcmRlclJhZGl1cyIsInRyYW5zaXRpb24iLCJteCIsImJveFNoYWRvdyIsIm1yIiwibXQiLCJmb250U2l6ZSIsImNvbG9yIiwibGluZUhlaWdodCIsImZvbnRXZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsSUFBSSxHQUFHO0FBQ1hDLFVBQVEsRUFBRSxlQURDO0FBRVhDLE9BQUssRUFBRSwyQkFGSTtBQUdYQyxVQUFRLEVBQUUsQ0FDUjtBQUNFQyxNQUFFLEVBQUUsQ0FETjtBQUVFQyxVQUFNLEVBQUVDLHdFQUZW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QUFFLE9BYmI7QUFjSkMsZ0JBQVksRUFBRSxNQWRWO0FBZUpDLGNBQVUsRUFBRSxVQWZSO0FBZ0JKbEIsU0FBSyxFQUFFLENBQUMsTUFBRCxFQUFTLEtBQVQsRUFBZ0IsSUFBaEIsRUFBc0IsTUFBdEIsQ0FoQkg7QUFpQkptQixNQUFFLEVBQUUsTUFqQkE7QUFrQkosZUFBVztBQUNUQyxlQUFTLEVBQUUsQ0FDVCw4QkFEUyxFQUVULElBRlMsRUFHVCxJQUhTLEVBSVQsSUFKUyxFQUtULHNDQUxTO0FBREY7QUFsQlAsR0E1Q087QUF5RWI5QixLQUFHLEVBQUU7QUFDSFUsU0FBSyxFQUFFLENBQUMsTUFBRCxFQUFTLElBQVQsRUFBZSxNQUFmLENBREo7QUFFSEQsVUFBTSxFQUFFLE1BRkw7QUFHSGEsY0FBVSxFQUFFLENBSFQ7QUFJSFMsTUFBRSxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUo7QUFKRCxHQXpFUTtBQStFYjlCLFNBQU8sRUFBRTtBQUNQUyxTQUFLLEVBQUUsTUFEQTtBQUVQSyxXQUFPLEVBQUUsTUFGRjtBQUdQRyxpQkFBYSxFQUFFLFFBSFI7QUFJUGMsTUFBRSxFQUFFLE1BSkc7QUFLUHBELFNBQUssRUFBRTtBQUNMcUQsY0FBUSxFQUFFLENBREw7QUFFTEMsV0FBSyxFQUFFLG1CQUZGO0FBR0xDLGdCQUFVLEVBQUUsR0FIUDtBQUlMQyxnQkFBVSxFQUFFLEdBSlA7QUFLTGIsUUFBRSxFQUFFLENBQUMsQ0FBRCxFQUFJLElBQUosRUFBVSxJQUFWLEVBQWdCLElBQWhCLEVBQXNCLENBQXRCO0FBTEMsS0FMQTtBQWFQNUMsWUFBUSxFQUFFO0FBQ1JzRCxjQUFRLEVBQUUsQ0FERjtBQUVSRyxnQkFBVSxFQUFFLEdBRko7QUFHUkQsZ0JBQVUsRUFBRSxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsQ0FBYjtBQUhKO0FBYkg7QUEvRUksQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xOGQ4ZmYxZGQ2MzM3OTUwY2M3Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCwgQ29udGFpbmVyLCBCb3gsIEdyaWQsIFRleHQsIEhlYWRpbmcgfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCBUZXh0RmVhdHVyZSBmcm9tICdjb21wb25lbnRzL3RleHQtZmVhdHVyZSc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICdjb21wb25lbnRzL2ltYWdlJztcclxuXHJcbmltcG9ydCBDb3JlRmVhdHVyZVRodW1iIGZyb20gJ2Fzc2V0cy9jb3JlRmVhdHVyZS5wbmcnO1xyXG5pbXBvcnQgQnJpZWZjYXNlIGZyb20gJ2Fzc2V0cy9jb3JlLWZlYXR1cmUvYnJpZWZjYXNlLnN2Zyc7XHJcbmltcG9ydCBTZWN1cmUgZnJvbSAnYXNzZXRzL2NvcmUtZmVhdHVyZS9zZWN1cmUuc3ZnJztcclxuXHJcbmNvbnN0IGRhdGEgPSB7XHJcbiAgc3ViVGl0bGU6ICdDb3JlIGZlYXR1cmVzJyxcclxuICB0aXRsZTogJ0xlYXJuLFByYWN0aWNlIGFuZCBQbGFjZWQnLFxyXG4gIGZlYXR1cmVzOiBbXHJcbiAgICB7XHJcbiAgICAgIGlkOiAxLFxyXG4gICAgICBpbWdTcmM6IEJyaWVmY2FzZSxcclxuICAgICAgYWx0VGV4dDogJ01lbnRvcnNoaXAgaW4gY2huYWdlJyxcclxuICAgICAgdGl0bGU6ICdNZW50b3JzaGlwJyxcclxuICAgICAgdGV4dDpcclxuICAgICAgICAnR2V0IG1lbnRvcnNoaXAgYXQgZWFjaCBwaGFzZSBvZiB5b3VyIGxlYXJuaW5nIGFuZCBsZWFybiB0aGUgcmlnaHQgd2F5ICcsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogMixcclxuICAgICAgaW1nU3JjOiBTZWN1cmUsXHJcbiAgICAgIGFsdFRleHQ6ICdXb3JsZCBDbGFzcyBUcmFpbmluZycsXHJcbiAgICAgIHRpdGxlOiAnVHJhaW5pbmcgQ2FtcHMnLFxyXG4gICAgICB0ZXh0OlxyXG4gICAgICAgICdBIHJlYWx0aW1lIGxlYXJuaW5nIGFuZCBwcmFjdGluZyB0cmFpbmdpbmcgY2FtcHMgd2l0aCBsaXZlIG1lbnRvcnNoaXAgYW5kIHRyYW5pbmcgdG8gYm9vc3QgeW91ciBsZWFybmluZyBhbmQgcmVkdWNlIGxlYXJuaW5nIHRpbWUnLFxyXG4gICAgfSxcclxuICBdLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29yZUZlYXR1cmUoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIHN4PXtzdHlsZXMuY29yZUZlYXR1cmV9PlxyXG4gICAgICA8Q29udGFpbmVyIHN4PXtzdHlsZXMuY29udGFpbmVyQm94fT5cclxuICAgICAgICA8Qm94IHN4PXtzdHlsZXMudGh1bWJuYWlsfT5cclxuICAgICAgICAgIDxJbWFnZSBzcmM9e0NvcmVGZWF0dXJlVGh1bWJ9IGFsdD1cIlRodW1ibmFpbFwiIC8+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPEJveCBzeD17c3R5bGVzLmNvbnRlbnRCb3h9PlxyXG4gICAgICAgICAgPEJveCBzeD17c3R5bGVzLmhlYWRpbmdUb3B9PlxyXG4gICAgICAgICAgICA8VGV4dEZlYXR1cmUgc3ViVGl0bGU9e2RhdGEuc3ViVGl0bGV9IHRpdGxlPXtkYXRhLnRpdGxlfSAvPlxyXG4gICAgICAgICAgPC9Cb3g+XHJcblxyXG4gICAgICAgICAgPEdyaWQgZ2FwPVwiMTVweCAwXCIgY29sdW1ucz17MX0gc3g9e3N0eWxlcy5ncmlkfT5cclxuICAgICAgICAgICAge2RhdGEuZmVhdHVyZXMubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgPEJveCBzeD17c3R5bGVzLmNhcmR9IGtleT17aXRlbS5pZH0+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtpdGVtLmltZ1NyY30gYWx0PXtpdGVtLmFsdFRleHR9IHN4PXtzdHlsZXMuaW1nfSAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy53cmFwcGVyfT5cclxuICAgICAgICAgICAgICAgICAgPEhlYWRpbmcgc3g9e3N0eWxlcy53cmFwcGVyLnRpdGxlfT57aXRlbS50aXRsZX08L0hlYWRpbmc+XHJcbiAgICAgICAgICAgICAgICAgIDxUZXh0IHN4PXtzdHlsZXMud3JhcHBlci5zdWJUaXRsZX0+e2l0ZW0udGV4dH08L1RleHQ+XHJcbiAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBjb3JlRmVhdHVyZToge1xyXG4gICAgcHk6IFswLCBudWxsLCBudWxsLCAyLCBudWxsLCA3XSxcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgJyY6OmJlZm9yZSc6IHtcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcclxuICAgICAgdG9wOiBbJ2F1dG8nLCBudWxsLCBudWxsLCAnNTAlJ10sXHJcbiAgICAgIGJvdHRvbTogWycxMDBweCcsIDAsIG51bGwsICdhdXRvJ10sXHJcbiAgICAgIGxlZnQ6IDAsXHJcbiAgICAgIGJhY2tncm91bmQ6ICdsaW5lYXItZ3JhZGllbnQoLTE1N2RlZywgI0Y2RkFGRCwgI0Y5RkNGQywgI0ZDRkRGQyknLFxyXG4gICAgICBoZWlnaHQ6IFszNTAsIDU1MCwgJzYwJSddLFxyXG4gICAgICB3aWR0aDogJzUwJScsXHJcbiAgICAgIHpJbmRleDogLTEsXHJcbiAgICAgIGJvcmRlclRvcFJpZ2h0UmFkaXVzOiAnNTAlJyxcclxuICAgICAgYm9yZGVyQm90dG9tUmlnaHRSYWRpdXM6ICc1MCUnLFxyXG4gICAgICB0cmFuc2Zvcm06IFsndHJhbnNsYXRlWSgwKScsIG51bGwsIG51bGwsICd0cmFuc2xhdGVZKC01MCUpJ10sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgY29udGFpbmVyQm94OiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiBbJ2NvbHVtbicsIG51bGwsIG51bGwsICdyb3cnXSxcclxuICB9LFxyXG4gIHRodW1ibmFpbDoge1xyXG4gICAgcGw6IFswLCA1LCAwLCBudWxsLCA3LCA5NV0sXHJcbiAgICBwcjogWzAsIDUsIG51bGwsIG51bGwsIG51bGwsIDc1LCA5NV0sXHJcbiAgICBvcmRlcjogWzIsIG51bGwsIG51bGwsIDBdLFxyXG4gIH0sXHJcbiAgY29udGVudEJveDoge1xyXG4gICAgd2lkdGg6IFsnMTAwJScsIDQ1MCwgNTUwLCAzNTAsIDUwMCwgNTcwXSxcclxuICAgIHByOiBbMCwgbnVsbCwgJ2F1dG8nLCBudWxsLCBudWxsLCA4MF0sXHJcbiAgICBwbDogJ2F1dG8nLFxyXG4gICAgZmxleFNocmluazogMCxcclxuICB9LFxyXG4gIGhlYWRpbmdUb3A6IHtcclxuICAgIHBsOiBbMCwgbnVsbCwgbnVsbCwgbnVsbCwgJzM1cHgnLCBudWxsLCAnNTVweCcsIDZdLFxyXG4gICAgbWI6IFszLCBudWxsLCBudWxsLCBudWxsLCAxXSxcclxuICAgIHRleHRBbGlnbjogWydjZW50ZXInLCBudWxsLCBudWxsLCAnbGVmdCddLFxyXG4gIH0sXHJcbiAgZ3JpZDoge1xyXG4gICAgcDogWycwIDBweCAzNXB4JywgbnVsbCwgbnVsbCwgbnVsbCwgJzAgMjBweCA0MHB4JywgbnVsbCwgJzAgNDBweCA0MHB4JywgMF0sXHJcbiAgfSxcclxuICBjYXJkOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCcsXHJcbiAgICBwOiBbXHJcbiAgICAgICcwIDE3cHggMjBweCcsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgICcwIDAgMjBweCcsXHJcbiAgICAgICcyMHB4IDE1cHggMTdweCcsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgICcyNXB4IDMwcHggMjNweCcsXHJcbiAgICBdLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnMTBweCcsXHJcbiAgICB0cmFuc2l0aW9uOiAnYWxsIDAuM3MnLFxyXG4gICAgd2lkdGg6IFsnMTAwJScsICc4NSUnLCBudWxsLCAnMTAwJSddLFxyXG4gICAgbXg6ICdhdXRvJyxcclxuICAgICcmOmhvdmVyJzoge1xyXG4gICAgICBib3hTaGFkb3c6IFtcclxuICAgICAgICAnMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwKScsXHJcbiAgICAgICAgbnVsbCxcclxuICAgICAgICBudWxsLFxyXG4gICAgICAgIG51bGwsXHJcbiAgICAgICAgJzBweCA4cHggMjRweCByZ2JhKDY5LCA4OCwgMTU3LCAwLjA3KScsXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIGltZzoge1xyXG4gICAgd2lkdGg6IFsnNTBweCcsIG51bGwsICc1NXB4J10sXHJcbiAgICBoZWlnaHQ6ICdhdXRvJyxcclxuICAgIGZsZXhTaHJpbms6IDAsXHJcbiAgICBtcjogWzMsIDRdLFxyXG4gIH0sXHJcbiAgd3JhcHBlcjoge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgbXQ6ICctNXB4JyxcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgIGZvbnRTaXplOiAzLFxyXG4gICAgICBjb2xvcjogJ2hlYWRpbmdfc2Vjb25kYXJ5JyxcclxuICAgICAgbGluZUhlaWdodDogMS40LFxyXG4gICAgICBmb250V2VpZ2h0OiA3MDAsXHJcbiAgICAgIG1iOiBbMiwgbnVsbCwgbnVsbCwgbnVsbCwgM10sXHJcbiAgICB9LFxyXG5cclxuICAgIHN1YlRpdGxlOiB7XHJcbiAgICAgIGZvbnRTaXplOiAxLFxyXG4gICAgICBmb250V2VpZ2h0OiA0MDAsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IFsxLjg1LCBudWxsLCAyXSxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==