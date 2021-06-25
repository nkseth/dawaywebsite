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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL2NvcmUtZmVhdHVyZS5qcyJdLCJuYW1lcyI6WyJkYXRhIiwic3ViVGl0bGUiLCJ0aXRsZSIsImZlYXR1cmVzIiwiaWQiLCJpbWdTcmMiLCJCcmllZmNhc2UiLCJhbHRUZXh0IiwidGV4dCIsIlNlY3VyZSIsIkNvcmVGZWF0dXJlIiwic3R5bGVzIiwiY29yZUZlYXR1cmUiLCJjb250YWluZXJCb3giLCJ0aHVtYm5haWwiLCJDb3JlRmVhdHVyZVRodW1iIiwiY29udGVudEJveCIsImhlYWRpbmdUb3AiLCJncmlkIiwibWFwIiwiaXRlbSIsImNhcmQiLCJpbWciLCJ3cmFwcGVyIiwicHkiLCJwb3NpdGlvbiIsImNvbnRlbnQiLCJ0b3AiLCJib3R0b20iLCJsZWZ0IiwiYmFja2dyb3VuZCIsImhlaWdodCIsIndpZHRoIiwiekluZGV4IiwiYm9yZGVyVG9wUmlnaHRSYWRpdXMiLCJib3JkZXJCb3R0b21SaWdodFJhZGl1cyIsInRyYW5zZm9ybSIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJmbGV4RGlyZWN0aW9uIiwicGwiLCJwciIsIm9yZGVyIiwiZmxleFNocmluayIsIm1iIiwidGV4dEFsaWduIiwicCIsImJhY2tncm91bmRDb2xvciIsImJvcmRlclJhZGl1cyIsInRyYW5zaXRpb24iLCJteCIsImJveFNoYWRvdyIsIm1yIiwibXQiLCJmb250U2l6ZSIsImNvbG9yIiwibGluZUhlaWdodCIsImZvbnRXZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsSUFBSSxHQUFHO0FBQ1hDLFVBQVEsRUFBRSxlQURDO0FBRVhDLE9BQUssRUFBRSwyQkFGSTtBQUdYQyxVQUFRLEVBQUUsQ0FDUjtBQUNFQyxNQUFFLEVBQUUsQ0FETjtBQUVFQyxVQUFNLEVBQUVDLHdFQUZWO0FBR0VDLFdBQU8sRUFBRSxZQUhYO0FBSUVMLFNBQUssRUFBRSxZQUpUO0FBS0VNLFFBQUksRUFDRjtBQU5KLEdBRFEsRUFTUjtBQUNFSixNQUFFLEVBQUUsQ0FETjtBQUVFQyxVQUFNLEVBQUVJLHFFQUZWO0FBR0VGLFdBQU8sRUFBRSxzQkFIWDtBQUlFTCxTQUFLLEVBQUUsZ0JBSlQ7QUFLRU0sUUFBSSxFQUNGO0FBTkosR0FUUTtBQUhDLENBQWI7QUF1QmUsU0FBU0UsV0FBVCxHQUF1QjtBQUFBOztBQUNwQyxTQUNFO0FBQVMsTUFBRSxFQUFFQyxNQUFNLENBQUNDLFdBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxxREFBQyxrREFBRDtBQUFXLE1BQUUsRUFBRUQsTUFBTSxDQUFDRSxZQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UscURBQUMsNENBQUQ7QUFBSyxNQUFFLEVBQUVGLE1BQU0sQ0FBQ0csU0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLHFEQUFDLHdEQUFEO0FBQU8sT0FBRyxFQUFFQyw2REFBWjtBQUE4QixPQUFHLEVBQUMsV0FBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsRUFJRSxxREFBQyw0Q0FBRDtBQUFLLE1BQUUsRUFBRUosTUFBTSxDQUFDSyxVQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UscURBQUMsNENBQUQ7QUFBSyxNQUFFLEVBQUVMLE1BQU0sQ0FBQ00sVUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLHFEQUFDLCtEQUFEO0FBQWEsWUFBUSxFQUFFakIsSUFBSSxDQUFDQyxRQUE1QjtBQUFzQyxTQUFLLEVBQUVELElBQUksQ0FBQ0UsS0FBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsRUFLRSxxREFBQyw2Q0FBRDtBQUFNLE9BQUcsRUFBQyxRQUFWO0FBQW1CLFdBQU8sRUFBRSxDQUE1QjtBQUErQixNQUFFLEVBQUVTLE1BQU0sQ0FBQ08sSUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHbEIsSUFBSSxDQUFDRyxRQUFMLENBQWNnQixHQUFkLENBQWtCLFVBQUNDLElBQUQ7QUFBQSxXQUNqQixxREFBQyw0Q0FBRDtBQUFLLFFBQUUsRUFBRVQsTUFBTSxDQUFDVSxJQUFoQjtBQUFzQixTQUFHLEVBQUVELElBQUksQ0FBQ2hCLEVBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxxREFBQyx3REFBRDtBQUFPLFNBQUcsRUFBRWdCLElBQUksQ0FBQ2YsTUFBakI7QUFBeUIsU0FBRyxFQUFFZSxJQUFJLENBQUNiLE9BQW5DO0FBQTRDLFFBQUUsRUFBRUksTUFBTSxDQUFDVyxHQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsRUFHRSxxREFBQyw0Q0FBRDtBQUFLLFFBQUUsRUFBRVgsTUFBTSxDQUFDWSxPQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UscURBQUMsZ0RBQUQ7QUFBUyxRQUFFLEVBQUVaLE1BQU0sQ0FBQ1ksT0FBUCxDQUFlckIsS0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFvQ2tCLElBQUksQ0FBQ2xCLEtBQXpDLENBREYsRUFFRSxxREFBQyw2Q0FBRDtBQUFNLFFBQUUsRUFBRVMsTUFBTSxDQUFDWSxPQUFQLENBQWV0QixRQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQW9DbUIsSUFBSSxDQUFDWixJQUF6QyxDQUZGLENBSEYsQ0FEaUI7QUFBQSxHQUFsQixDQURILENBTEYsQ0FKRixDQURGLENBREY7QUEyQkQ7S0E1QnVCRSxXO0FBOEJ4QixJQUFNQyxNQUFNLEdBQUc7QUFDYkMsYUFBVyxFQUFFO0FBQ1hZLE1BQUUsRUFBRSxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsSUFBVixFQUFnQixDQUFoQixFQUFtQixJQUFuQixFQUF5QixDQUF6QixDQURPO0FBRVhDLFlBQVEsRUFBRSxVQUZDO0FBR1gsaUJBQWE7QUFDWEEsY0FBUSxFQUFFLFVBREM7QUFFWEMsYUFBTyxFQUFFLElBRkU7QUFHWEMsU0FBRyxFQUFFLENBQUMsTUFBRCxFQUFTLElBQVQsRUFBZSxJQUFmLEVBQXFCLEtBQXJCLENBSE07QUFJWEMsWUFBTSxFQUFFLENBQUMsT0FBRCxFQUFVLENBQVYsRUFBYSxJQUFiLEVBQW1CLE1BQW5CLENBSkc7QUFLWEMsVUFBSSxFQUFFLENBTEs7QUFNWEMsZ0JBQVUsRUFBRSxxREFORDtBQU9YQyxZQUFNLEVBQUUsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEtBQVgsQ0FQRztBQVFYQyxXQUFLLEVBQUUsS0FSSTtBQVNYQyxZQUFNLEVBQUUsQ0FBQyxDQVRFO0FBVVhDLDBCQUFvQixFQUFFLEtBVlg7QUFXWEMsNkJBQXVCLEVBQUUsS0FYZDtBQVlYQyxlQUFTLEVBQUUsQ0FBQyxlQUFELEVBQWtCLElBQWxCLEVBQXdCLElBQXhCLEVBQThCLGtCQUE5QjtBQVpBO0FBSEYsR0FEQTtBQW1CYnZCLGNBQVksRUFBRTtBQUNad0IsV0FBTyxFQUFFLE1BREc7QUFFWkMsY0FBVSxFQUFFLFFBRkE7QUFHWkMsa0JBQWMsRUFBRSxlQUhKO0FBSVpDLGlCQUFhLEVBQUUsQ0FBQyxRQUFELEVBQVcsSUFBWCxFQUFpQixJQUFqQixFQUF1QixLQUF2QjtBQUpILEdBbkJEO0FBeUJiMUIsV0FBUyxFQUFFO0FBQ1QyQixNQUFFLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxJQUFWLEVBQWdCLENBQWhCLEVBQW1CLEVBQW5CLENBREs7QUFFVEMsTUFBRSxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxJQUFQLEVBQWEsSUFBYixFQUFtQixJQUFuQixFQUF5QixFQUF6QixFQUE2QixFQUE3QixDQUZLO0FBR1RDLFNBQUssRUFBRSxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsSUFBVixFQUFnQixDQUFoQjtBQUhFLEdBekJFO0FBOEJiM0IsWUFBVSxFQUFFO0FBQ1ZnQixTQUFLLEVBQUUsQ0FBQyxNQUFELEVBQVMsR0FBVCxFQUFjLEdBQWQsRUFBbUIsR0FBbkIsRUFBd0IsR0FBeEIsRUFBNkIsR0FBN0IsQ0FERztBQUVWVSxNQUFFLEVBQUUsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLE1BQVYsRUFBa0IsSUFBbEIsRUFBd0IsSUFBeEIsRUFBOEIsRUFBOUIsQ0FGTTtBQUdWRCxNQUFFLEVBQUUsTUFITTtBQUlWRyxjQUFVLEVBQUU7QUFKRixHQTlCQztBQW9DYjNCLFlBQVUsRUFBRTtBQUNWd0IsTUFBRSxFQUFFLENBQUMsQ0FBRCxFQUFJLElBQUosRUFBVSxJQUFWLEVBQWdCLElBQWhCLEVBQXNCLE1BQXRCLEVBQThCLElBQTlCLEVBQW9DLE1BQXBDLEVBQTRDLENBQTVDLENBRE07QUFFVkksTUFBRSxFQUFFLENBQUMsQ0FBRCxFQUFJLElBQUosRUFBVSxJQUFWLEVBQWdCLElBQWhCLEVBQXNCLENBQXRCLENBRk07QUFHVkMsYUFBUyxFQUFFLENBQUMsUUFBRCxFQUFXLElBQVgsRUFBaUIsSUFBakIsRUFBdUIsTUFBdkI7QUFIRCxHQXBDQztBQXlDYjVCLE1BQUksRUFBRTtBQUNKNkIsS0FBQyxFQUFFLENBQUMsWUFBRCxFQUFlLElBQWYsRUFBcUIsSUFBckIsRUFBMkIsSUFBM0IsRUFBaUMsYUFBakMsRUFBZ0QsSUFBaEQsRUFBc0QsYUFBdEQsRUFBcUUsQ0FBckU7QUFEQyxHQXpDTztBQTRDYjFCLE1BQUksRUFBRTtBQUNKZ0IsV0FBTyxFQUFFLE1BREw7QUFFSkMsY0FBVSxFQUFFLFlBRlI7QUFHSlMsS0FBQyxFQUFFLENBQ0QsYUFEQyxFQUVELElBRkMsRUFHRCxJQUhDLEVBSUQsVUFKQyxFQUtELGdCQUxDLEVBTUQsSUFOQyxFQU9ELElBUEMsRUFRRCxnQkFSQyxDQUhDO0FBYUpDLG1CQUFlLEVBQUUsT0FiYjtBQWNKQyxnQkFBWSxFQUFFLE1BZFY7QUFlSkMsY0FBVSxFQUFFLFVBZlI7QUFnQkpsQixTQUFLLEVBQUUsQ0FBQyxNQUFELEVBQVMsS0FBVCxFQUFnQixJQUFoQixFQUFzQixNQUF0QixDQWhCSDtBQWlCSm1CLE1BQUUsRUFBRSxNQWpCQTtBQWtCSixlQUFXO0FBQ1RDLGVBQVMsRUFBRSxDQUNULDhCQURTLEVBRVQsSUFGUyxFQUdULElBSFMsRUFJVCxJQUpTLEVBS1Qsc0NBTFM7QUFERjtBQWxCUCxHQTVDTztBQXlFYjlCLEtBQUcsRUFBRTtBQUNIVSxTQUFLLEVBQUUsQ0FBQyxNQUFELEVBQVMsSUFBVCxFQUFlLE1BQWYsQ0FESjtBQUVIRCxVQUFNLEVBQUUsTUFGTDtBQUdIYSxjQUFVLEVBQUUsQ0FIVDtBQUlIUyxNQUFFLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSjtBQUpELEdBekVRO0FBK0ViOUIsU0FBTyxFQUFFO0FBQ1BTLFNBQUssRUFBRSxNQURBO0FBRVBLLFdBQU8sRUFBRSxNQUZGO0FBR1BHLGlCQUFhLEVBQUUsUUFIUjtBQUlQYyxNQUFFLEVBQUUsTUFKRztBQUtQcEQsU0FBSyxFQUFFO0FBQ0xxRCxjQUFRLEVBQUUsQ0FETDtBQUVMQyxXQUFLLEVBQUUsbUJBRkY7QUFHTEMsZ0JBQVUsRUFBRSxHQUhQO0FBSUxDLGdCQUFVLEVBQUUsR0FKUDtBQUtMYixRQUFFLEVBQUUsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLElBQVYsRUFBZ0IsSUFBaEIsRUFBc0IsQ0FBdEI7QUFMQyxLQUxBO0FBYVA1QyxZQUFRLEVBQUU7QUFDUnNELGNBQVEsRUFBRSxDQURGO0FBRVJHLGdCQUFVLEVBQUUsR0FGSjtBQUdSRCxnQkFBVSxFQUFFLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYSxDQUFiO0FBSEo7QUFiSDtBQS9FSSxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmM5MmM2ZjI1ZTFhYzU3NzRmMGZhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4LCBDb250YWluZXIsIEJveCwgR3JpZCwgVGV4dCwgSGVhZGluZyB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IFRleHRGZWF0dXJlIGZyb20gJ2NvbXBvbmVudHMvdGV4dC1mZWF0dXJlJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ2NvbXBvbmVudHMvaW1hZ2UnO1xyXG5cclxuaW1wb3J0IENvcmVGZWF0dXJlVGh1bWIgZnJvbSAnYXNzZXRzL2NvcmVGZWF0dXJlLnBuZyc7XHJcbmltcG9ydCBCcmllZmNhc2UgZnJvbSAnYXNzZXRzL2NvcmUtZmVhdHVyZS9icmllZmNhc2Uuc3ZnJztcclxuaW1wb3J0IFNlY3VyZSBmcm9tICdhc3NldHMvY29yZS1mZWF0dXJlL3NlY3VyZS5zdmcnO1xyXG5cclxuY29uc3QgZGF0YSA9IHtcclxuICBzdWJUaXRsZTogJ0NvcmUgZmVhdHVyZXMnLFxyXG4gIHRpdGxlOiAnTGVhcm4sUHJhY3RpY2UgYW5kIFBsYWNlZCcsXHJcbiAgZmVhdHVyZXM6IFtcclxuICAgIHtcclxuICAgICAgaWQ6IDEsXHJcbiAgICAgIGltZ1NyYzogQnJpZWZjYXNlLFxyXG4gICAgICBhbHRUZXh0OiAnTWVudG9yc2hpcCcsXHJcbiAgICAgIHRpdGxlOiAnTWVudG9yc2hpcCcsXHJcbiAgICAgIHRleHQ6XHJcbiAgICAgICAgJ0dldCBtZW50b3JzaGlwIGF0IGVhY2ggcGhhc2Ugb2YgeW91ciBsZWFybmluZyBhbmQgbGVhcm4gdGhlIHJpZ2h0IHdheSAnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDIsXHJcbiAgICAgIGltZ1NyYzogU2VjdXJlLFxyXG4gICAgICBhbHRUZXh0OiAnV29ybGQgQ2xhc3MgVHJhaW5pbmcnLFxyXG4gICAgICB0aXRsZTogJ1RyYWluaW5nIENhbXBzJyxcclxuICAgICAgdGV4dDpcclxuICAgICAgICAnQSByZWFsdGltZSBsZWFybmluZyBhbmQgcHJhY3RpbmcgdHJhaW5naW5nIGNhbXBzIHdpdGggbGl2ZSBtZW50b3JzaGlwIGFuZCB0cmFuaW5nIHRvIGJvb3N0IHlvdXIgbGVhcm5pbmcgYW5kIHJlZHVjZSBsZWFybmluZyB0aW1lJyxcclxuICAgIH0sXHJcbiAgXSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvcmVGZWF0dXJlKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBzeD17c3R5bGVzLmNvcmVGZWF0dXJlfT5cclxuICAgICAgPENvbnRhaW5lciBzeD17c3R5bGVzLmNvbnRhaW5lckJveH0+XHJcbiAgICAgICAgPEJveCBzeD17c3R5bGVzLnRodW1ibmFpbH0+XHJcbiAgICAgICAgICA8SW1hZ2Ugc3JjPXtDb3JlRmVhdHVyZVRodW1ifSBhbHQ9XCJUaHVtYm5haWxcIiAvPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICAgIDxCb3ggc3g9e3N0eWxlcy5jb250ZW50Qm94fT5cclxuICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5oZWFkaW5nVG9wfT5cclxuICAgICAgICAgICAgPFRleHRGZWF0dXJlIHN1YlRpdGxlPXtkYXRhLnN1YlRpdGxlfSB0aXRsZT17ZGF0YS50aXRsZX0gLz5cclxuICAgICAgICAgIDwvQm94PlxyXG5cclxuICAgICAgICAgIDxHcmlkIGdhcD1cIjE1cHggMFwiIGNvbHVtbnM9ezF9IHN4PXtzdHlsZXMuZ3JpZH0+XHJcbiAgICAgICAgICAgIHtkYXRhLmZlYXR1cmVzLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5jYXJkfSBrZXk9e2l0ZW0uaWR9PlxyXG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz17aXRlbS5pbWdTcmN9IGFsdD17aXRlbS5hbHRUZXh0fSBzeD17c3R5bGVzLmltZ30gLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMud3JhcHBlcn0+XHJcbiAgICAgICAgICAgICAgICAgIDxIZWFkaW5nIHN4PXtzdHlsZXMud3JhcHBlci50aXRsZX0+e2l0ZW0udGl0bGV9PC9IZWFkaW5nPlxyXG4gICAgICAgICAgICAgICAgICA8VGV4dCBzeD17c3R5bGVzLndyYXBwZXIuc3ViVGl0bGV9PntpdGVtLnRleHR9PC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgY29yZUZlYXR1cmU6IHtcclxuICAgIHB5OiBbMCwgbnVsbCwgbnVsbCwgMiwgbnVsbCwgN10sXHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICcmOjpiZWZvcmUnOiB7XHJcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICBjb250ZW50OiAnXCJcIicsXHJcbiAgICAgIHRvcDogWydhdXRvJywgbnVsbCwgbnVsbCwgJzUwJSddLFxyXG4gICAgICBib3R0b206IFsnMTAwcHgnLCAwLCBudWxsLCAnYXV0byddLFxyXG4gICAgICBsZWZ0OiAwLFxyXG4gICAgICBiYWNrZ3JvdW5kOiAnbGluZWFyLWdyYWRpZW50KC0xNTdkZWcsICNGNkZBRkQsICNGOUZDRkMsICNGQ0ZERkMpJyxcclxuICAgICAgaGVpZ2h0OiBbMzUwLCA1NTAsICc2MCUnXSxcclxuICAgICAgd2lkdGg6ICc1MCUnLFxyXG4gICAgICB6SW5kZXg6IC0xLFxyXG4gICAgICBib3JkZXJUb3BSaWdodFJhZGl1czogJzUwJScsXHJcbiAgICAgIGJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzOiAnNTAlJyxcclxuICAgICAgdHJhbnNmb3JtOiBbJ3RyYW5zbGF0ZVkoMCknLCBudWxsLCBudWxsLCAndHJhbnNsYXRlWSgtNTAlKSddLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGNvbnRhaW5lckJveDoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gICAgZmxleERpcmVjdGlvbjogWydjb2x1bW4nLCBudWxsLCBudWxsLCAncm93J10sXHJcbiAgfSxcclxuICB0aHVtYm5haWw6IHtcclxuICAgIHBsOiBbMCwgNSwgMCwgbnVsbCwgNywgOTVdLFxyXG4gICAgcHI6IFswLCA1LCBudWxsLCBudWxsLCBudWxsLCA3NSwgOTVdLFxyXG4gICAgb3JkZXI6IFsyLCBudWxsLCBudWxsLCAwXSxcclxuICB9LFxyXG4gIGNvbnRlbnRCb3g6IHtcclxuICAgIHdpZHRoOiBbJzEwMCUnLCA0NTAsIDU1MCwgMzUwLCA1MDAsIDU3MF0sXHJcbiAgICBwcjogWzAsIG51bGwsICdhdXRvJywgbnVsbCwgbnVsbCwgODBdLFxyXG4gICAgcGw6ICdhdXRvJyxcclxuICAgIGZsZXhTaHJpbms6IDAsXHJcbiAgfSxcclxuICBoZWFkaW5nVG9wOiB7XHJcbiAgICBwbDogWzAsIG51bGwsIG51bGwsIG51bGwsICczNXB4JywgbnVsbCwgJzU1cHgnLCA2XSxcclxuICAgIG1iOiBbMywgbnVsbCwgbnVsbCwgbnVsbCwgMV0sXHJcbiAgICB0ZXh0QWxpZ246IFsnY2VudGVyJywgbnVsbCwgbnVsbCwgJ2xlZnQnXSxcclxuICB9LFxyXG4gIGdyaWQ6IHtcclxuICAgIHA6IFsnMCAwcHggMzVweCcsIG51bGwsIG51bGwsIG51bGwsICcwIDIwcHggNDBweCcsIG51bGwsICcwIDQwcHggNDBweCcsIDBdLFxyXG4gIH0sXHJcbiAgY2FyZDoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnLFxyXG4gICAgcDogW1xyXG4gICAgICAnMCAxN3B4IDIwcHgnLFxyXG4gICAgICBudWxsLFxyXG4gICAgICBudWxsLFxyXG4gICAgICAnMCAwIDIwcHgnLFxyXG4gICAgICAnMjBweCAxNXB4IDE3cHgnLFxyXG4gICAgICBudWxsLFxyXG4gICAgICBudWxsLFxyXG4gICAgICAnMjVweCAzMHB4IDIzcHgnLFxyXG4gICAgXSxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcclxuICAgIGJvcmRlclJhZGl1czogJzEwcHgnLFxyXG4gICAgdHJhbnNpdGlvbjogJ2FsbCAwLjNzJyxcclxuICAgIHdpZHRoOiBbJzEwMCUnLCAnODUlJywgbnVsbCwgJzEwMCUnXSxcclxuICAgIG14OiAnYXV0bycsXHJcbiAgICAnJjpob3Zlcic6IHtcclxuICAgICAgYm94U2hhZG93OiBbXHJcbiAgICAgICAgJzBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMCknLFxyXG4gICAgICAgIG51bGwsXHJcbiAgICAgICAgbnVsbCxcclxuICAgICAgICBudWxsLFxyXG4gICAgICAgICcwcHggOHB4IDI0cHggcmdiYSg2OSwgODgsIDE1NywgMC4wNyknLFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICBpbWc6IHtcclxuICAgIHdpZHRoOiBbJzUwcHgnLCBudWxsLCAnNTVweCddLFxyXG4gICAgaGVpZ2h0OiAnYXV0bycsXHJcbiAgICBmbGV4U2hyaW5rOiAwLFxyXG4gICAgbXI6IFszLCA0XSxcclxuICB9LFxyXG4gIHdyYXBwZXI6IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIG10OiAnLTVweCcsXHJcbiAgICB0aXRsZToge1xyXG4gICAgICBmb250U2l6ZTogMyxcclxuICAgICAgY29sb3I6ICdoZWFkaW5nX3NlY29uZGFyeScsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IDEuNCxcclxuICAgICAgZm9udFdlaWdodDogNzAwLFxyXG4gICAgICBtYjogWzIsIG51bGwsIG51bGwsIG51bGwsIDNdLFxyXG4gICAgfSxcclxuXHJcbiAgICBzdWJUaXRsZToge1xyXG4gICAgICBmb250U2l6ZTogMSxcclxuICAgICAgZm9udFdlaWdodDogNDAwLFxyXG4gICAgICBsaW5lSGVpZ2h0OiBbMS44NSwgbnVsbCwgMl0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=