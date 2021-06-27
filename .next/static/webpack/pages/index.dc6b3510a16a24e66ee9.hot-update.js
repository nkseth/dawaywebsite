webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/price-card.js":
/*!**************************************!*\
  !*** ./src/components/price-card.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PriceCard; });
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list */ "./src/components/list.js");
var _jsxFileName = "C:\\reactprojects\\nexttry1\\src\\components\\price-card.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function PriceCard(_ref) {
  var _ref$data = _ref.data,
      header = _ref$data.header,
      name = _ref$data.name,
      description = _ref$data.description,
      priceWithUnit = _ref$data.priceWithUnit,
      _ref$data$buttonText = _ref$data.buttonText,
      buttonText = _ref$data$buttonText === void 0 ? 'Start Free Trial' : _ref$data$buttonText,
      points = _ref$data.points;
  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Card"], {
    className: header ? 'active' : null,
    sx: styles.pricingBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, header && __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Text"], {
    sx: styles.header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 18
    }
  }, header), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Flex"], {
    sx: styles.pricingHeader,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Heading"], {
    className: "package__name",
    sx: styles.heading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, name), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Text"], {
    as: "p",
    sx: {
      opacity: header ? 1 : 0.7,
      color: header ? 'text' : 'white',
      fontSize: [1, 2],
      lineHeight: 1.3
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, description)), header && __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Text"], {
    className: "package__price",
    sx: styles.price,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 15
    }
  }, "Starting from"), __jsx("div", {
    className: "price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 15
    }
  }, priceWithUnit, __jsx("sub", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }, "mo")))), __jsx(_list__WEBPACK_IMPORTED_MODULE_2__["default"], {
    items: points,
    childStyle: styles.listItem,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    sx: {
      textAlign: 'center',
      mt: ['40px', null, null, null, null, '70px']
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    variant: header ? 'primary' : 'whiteButton',
    "aria-label": buttonText,
    onClick: function onClick() {
      window.open("https://forms.gle/MmH2NwMahJ6PbgQ57");
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }, buttonText))));
}
_c = PriceCard;
var styles = {
  pricingBox: {
    flex: ['0 1 100%', null, null, '0 1 50%', '0 1 45%', '0 1 40%', '0 1 38.5%'],
    background: '#2F5392',
    borderRadius: 10,
    ml: [0, null, null, 5],
    position: 'relative',
    mt: ['40px', null, null, 0],
    p: ['50px 15px 50px', null, '62px 25px 50px 25px', null, '62px 70px 50px 40px'],
    '@media screen and (min-width: 420px) and (max-width: 767px)': {
      maxWidth: '380px'
    },
    '&:first-of-type': {
      ml: 0,
      mt: 0
    },
    '&.active': {
      backgroundColor: 'white',
      '.package__name': {
        color: 'heading_secondary'
      },
      '.package__price > span': {
        color: 'text'
      },
      '.open': {
        color: 'text'
      },
      '.closed': {
        color: 'text',
        opacity: 0.6
      }
    }
  },
  header: {
    height: ['28px', null, null, null, '32px'],
    backgroundColor: '#EF9E48',
    borderRadius: '5px',
    fontWeight: 'bold',
    fontSize: '14px',
    lineHeight: '18px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#FFFFFF',
    position: 'absolute',
    top: [3, null, 4],
    letterSpacing: '-.14px',
    px: '10px'
  },
  heading: {
    fontWeight: 'bold',
    fontSize: [4, null, null, null, 5],
    lineHeight: '23px',
    color: '#ffffff',
    marginBottom: [1, null, '12px']
  },
  pricingHeader: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    mb: ['35px', null, null, null, null, '50px']
  },
  price: {
    fontWeight: 'bold',
    fontSize: [4, null, 5, null, '26px'],
    lineHeight: 1,
    display: 'flex',
    letterSpacing: '-0.5px',
    color: '#0F2137',
    marginBottom: 0,
    flexWrap: 'wrap',
    flexDirection: 'column',
    textAlign: 'right',
    mt: ['-3px', null, '2px'],
    '> span': {
      fontWeight: 'body',
      fontSize: [1, 2],
      lineHeight: 1.25,
      display: 'block',
      marginBottom: '10px',
      color: 'white'
    },
    '> .price': {
      marginBottom: 0,
      color: 'secondary',
      '> sub': {
        position: 'relative',
        bottom: '6px'
      }
    }
  },
  listItem: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: [1, null, null, null, 2],
    lineHeight: [1.7, null, 1.65],
    marginBottom: [3, '22px'],
    alignItems: 'flex-start',
    color: 'white',
    pr: [2, null, null, null, 0, 6],
    '&.closed': {
      opacity: 0.55,
      button: {
        color: '#788FB5'
      }
    }
  }
};

var _c;

$RefreshReg$(_c, "PriceCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcHJpY2UtY2FyZC5qcyJdLCJuYW1lcyI6WyJQcmljZUNhcmQiLCJkYXRhIiwiaGVhZGVyIiwibmFtZSIsImRlc2NyaXB0aW9uIiwicHJpY2VXaXRoVW5pdCIsImJ1dHRvblRleHQiLCJwb2ludHMiLCJzdHlsZXMiLCJwcmljaW5nQm94IiwicHJpY2luZ0hlYWRlciIsImhlYWRpbmciLCJvcGFjaXR5IiwiY29sb3IiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJwcmljZSIsImxpc3RJdGVtIiwidGV4dEFsaWduIiwibXQiLCJ3aW5kb3ciLCJvcGVuIiwiZmxleCIsImJhY2tncm91bmQiLCJib3JkZXJSYWRpdXMiLCJtbCIsInBvc2l0aW9uIiwicCIsIm1heFdpZHRoIiwiYmFja2dyb3VuZENvbG9yIiwiaGVpZ2h0IiwiZm9udFdlaWdodCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJ0b3AiLCJsZXR0ZXJTcGFjaW5nIiwicHgiLCJtYXJnaW5Cb3R0b20iLCJtYiIsImZsZXhXcmFwIiwiZmxleERpcmVjdGlvbiIsImJvdHRvbSIsImZvbnRTdHlsZSIsInByIiwiYnV0dG9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxTQUFULE9BU1o7QUFBQSx1QkFSREMsSUFRQztBQUFBLE1BUENDLE1BT0QsYUFQQ0EsTUFPRDtBQUFBLE1BTkNDLElBTUQsYUFOQ0EsSUFNRDtBQUFBLE1BTENDLFdBS0QsYUFMQ0EsV0FLRDtBQUFBLE1BSkNDLGFBSUQsYUFKQ0EsYUFJRDtBQUFBLHVDQUhDQyxVQUdEO0FBQUEsTUFIQ0EsVUFHRCxxQ0FIYyxrQkFHZDtBQUFBLE1BRkNDLE1BRUQsYUFGQ0EsTUFFRDtBQUNELFNBQ0UsTUFBQyw2Q0FBRDtBQUFNLGFBQVMsRUFBRUwsTUFBTSxHQUFHLFFBQUgsR0FBYyxJQUFyQztBQUEyQyxN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SjtBQUVWekIsV0FBSyxFQUFFLFdBRkc7QUFHVixlQUFTO0FBQ1BhLGdCQUFRLEVBQUUsVUFESDtBQUVQZ0IsY0FBTSxFQUFFO0FBRkQ7QUFIQztBQXBCUCxHQTVFTTtBQXlHYnpCLFVBQVEsRUFBRTtBQUNSMEIsYUFBUyxFQUFFLFFBREg7QUFFUlosY0FBVSxFQUFFLFFBRko7QUFHUmpCLFlBQVEsRUFBRSxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsSUFBVixFQUFnQixJQUFoQixFQUFzQixDQUF0QixDQUhGO0FBSVJDLGNBQVUsRUFBRSxDQUFDLEdBQUQsRUFBTSxJQUFOLEVBQVksSUFBWixDQUpKO0FBS1J1QixnQkFBWSxFQUFFLENBQUMsQ0FBRCxFQUFJLE1BQUosQ0FMTjtBQU1STCxjQUFVLEVBQUUsWUFOSjtBQU9ScEIsU0FBSyxFQUFFLE9BUEM7QUFRUitCLE1BQUUsRUFBRSxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsSUFBVixFQUFnQixJQUFoQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixDQVJJO0FBU1IsZ0JBQVk7QUFDVmhDLGFBQU8sRUFBRSxJQURDO0FBRVZpQyxZQUFNLEVBQUU7QUFDTmhDLGFBQUssRUFBRTtBQUREO0FBRkU7QUFUSjtBQXpHRyxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmRjNmIzNTEwYTE2YTI0ZTY2ZWU5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIENhcmQsIFRleHQsIEZsZXgsIEhlYWRpbmcsIEJ1dHRvbiB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpc3QgZnJvbSAnLi9saXN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByaWNlQ2FyZCh7XHJcbiAgZGF0YToge1xyXG4gICAgaGVhZGVyLFxyXG4gICAgbmFtZSxcclxuICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgcHJpY2VXaXRoVW5pdCxcclxuICAgIGJ1dHRvblRleHQgPSAnU3RhcnQgRnJlZSBUcmlhbCcsXHJcbiAgICBwb2ludHMsXHJcbiAgfSxcclxufSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FyZCBjbGFzc05hbWU9e2hlYWRlciA/ICdhY3RpdmUnIDogbnVsbH0gc3g9e3N0eWxlcy5wcmljaW5nQm94fT5cclxuICAgICAge2hlYWRlciAmJiA8VGV4dCBzeD17c3R5bGVzLmhlYWRlcn0+e2hlYWRlcn08L1RleHQ+fVxyXG4gICAgICA8Qm94PlxyXG4gICAgICAgIDxGbGV4IHN4PXtzdHlsZXMucHJpY2luZ0hlYWRlcn0+XHJcbiAgICAgICAgICA8Qm94PlxyXG4gICAgICAgICAgICA8SGVhZGluZyBjbGFzc05hbWU9XCJwYWNrYWdlX19uYW1lXCIgc3g9e3N0eWxlcy5oZWFkaW5nfT5cclxuICAgICAgICAgICAgICB7bmFtZX1cclxuICAgICAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgIGFzPVwicFwiXHJcbiAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IGhlYWRlciA/IDEgOiAwLjcsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogaGVhZGVyID8gJ3RleHQnIDogJ3doaXRlJyxcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiBbMSwgMl0sXHJcbiAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiAxLjMsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtkZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICB7aGVhZGVyICYmIChcclxuICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPVwicGFja2FnZV9fcHJpY2VcIiBzeD17c3R5bGVzLnByaWNlfT5cclxuICAgICAgICAgICAgICA8c3Bhbj5TdGFydGluZyBmcm9tPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJpY2VcIj5cclxuICAgICAgICAgICAgICAgIHtwcmljZVdpdGhVbml0fVxyXG4gICAgICAgICAgICAgICAgPHN1Yj5tbzwvc3ViPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvRmxleD5cclxuICAgICAgICA8TGlzdCBpdGVtcz17cG9pbnRzfSBjaGlsZFN0eWxlPXtzdHlsZXMubGlzdEl0ZW19IC8+XHJcbiAgICAgICAgPEJveFxyXG4gICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgbXQ6IFsnNDBweCcsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICc3MHB4J10sXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgdmFyaWFudD17aGVhZGVyID8gJ3ByaW1hcnknIDogJ3doaXRlQnV0dG9uJ31cclxuICAgICAgICAgICAgYXJpYS1sYWJlbD17YnV0dG9uVGV4dH0gb25DbGljaz17KCk9Pnt3aW5kb3cub3BlbihcImh0dHBzOi8vZm9ybXMuZ2xlL01tSDJOd01haEo2UGJnUTU3XCIpfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2J1dHRvblRleHR9XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L0NhcmQ+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIHByaWNpbmdCb3g6IHtcclxuICAgIGZsZXg6IFtcclxuICAgICAgJzAgMSAxMDAlJyxcclxuICAgICAgbnVsbCxcclxuICAgICAgbnVsbCxcclxuICAgICAgJzAgMSA1MCUnLFxyXG4gICAgICAnMCAxIDQ1JScsXHJcbiAgICAgICcwIDEgNDAlJyxcclxuICAgICAgJzAgMSAzOC41JScsXHJcbiAgICBdLFxyXG4gICAgYmFja2dyb3VuZDogJyMyRjUzOTInLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAxMCxcclxuICAgIG1sOiBbMCwgbnVsbCwgbnVsbCwgNV0sXHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIG10OiBbJzQwcHgnLCBudWxsLCBudWxsLCAwXSxcclxuICAgIHA6IFtcclxuICAgICAgJzUwcHggMTVweCA1MHB4JyxcclxuICAgICAgbnVsbCxcclxuICAgICAgJzYycHggMjVweCA1MHB4IDI1cHgnLFxyXG4gICAgICBudWxsLFxyXG4gICAgICAnNjJweCA3MHB4IDUwcHggNDBweCcsXHJcbiAgICBdLFxyXG4gICAgJ0BtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQyMHB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpJzoge1xyXG4gICAgICBtYXhXaWR0aDogJzM4MHB4JyxcclxuICAgIH0sXHJcbiAgICAnJjpmaXJzdC1vZi10eXBlJzoge1xyXG4gICAgICBtbDogMCxcclxuICAgICAgbXQ6IDAsXHJcbiAgICB9LFxyXG4gICAgJyYuYWN0aXZlJzoge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICcucGFja2FnZV9fbmFtZSc6IHtcclxuICAgICAgICBjb2xvcjogJ2hlYWRpbmdfc2Vjb25kYXJ5JyxcclxuICAgICAgfSxcclxuICAgICAgJy5wYWNrYWdlX19wcmljZSA+IHNwYW4nOiB7XHJcbiAgICAgICAgY29sb3I6ICd0ZXh0JyxcclxuICAgICAgfSxcclxuICAgICAgJy5vcGVuJzoge1xyXG4gICAgICAgIGNvbG9yOiAndGV4dCcsXHJcbiAgICAgIH0sXHJcbiAgICAgICcuY2xvc2VkJzoge1xyXG4gICAgICAgIGNvbG9yOiAndGV4dCcsXHJcbiAgICAgICAgb3BhY2l0eTogMC42LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGhlYWRlcjoge1xyXG4gICAgaGVpZ2h0OiBbJzI4cHgnLCBudWxsLCBudWxsLCBudWxsLCAnMzJweCddLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnI0VGOUU0OCcsXHJcbiAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxyXG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gICAgZm9udFNpemU6ICcxNHB4JyxcclxuICAgIGxpbmVIZWlnaHQ6ICcxOHB4JyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgY29sb3I6ICcjRkZGRkZGJyxcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgdG9wOiBbMywgbnVsbCwgNF0sXHJcbiAgICBsZXR0ZXJTcGFjaW5nOiAnLS4xNHB4JyxcclxuICAgIHB4OiAnMTBweCcsXHJcbiAgfSxcclxuXHJcbiAgaGVhZGluZzoge1xyXG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gICAgZm9udFNpemU6IFs0LCBudWxsLCBudWxsLCBudWxsLCA1XSxcclxuICAgIGxpbmVIZWlnaHQ6ICcyM3B4JyxcclxuICAgIGNvbG9yOiAnI2ZmZmZmZicsXHJcbiAgICBtYXJnaW5Cb3R0b206IFsxLCBudWxsLCAnMTJweCddLFxyXG4gIH0sXHJcbiAgcHJpY2luZ0hlYWRlcjoge1xyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcclxuICAgIGFsaWduSXRlbXM6ICdmbGV4LXN0YXJ0JyxcclxuICAgIG1iOiBbJzM1cHgnLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAnNTBweCddLFxyXG4gIH0sXHJcbiAgcHJpY2U6IHtcclxuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICAgIGZvbnRTaXplOiBbNCwgbnVsbCwgNSwgbnVsbCwgJzI2cHgnXSxcclxuICAgIGxpbmVIZWlnaHQ6IDEsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBsZXR0ZXJTcGFjaW5nOiAnLTAuNXB4JyxcclxuICAgIGNvbG9yOiAnIzBGMjEzNycsXHJcbiAgICBtYXJnaW5Cb3R0b206IDAsXHJcbiAgICBmbGV4V3JhcDogJ3dyYXAnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICB0ZXh0QWxpZ246ICdyaWdodCcsXHJcbiAgICBtdDogWyctM3B4JywgbnVsbCwgJzJweCddLFxyXG4gICAgJz4gc3Bhbic6IHtcclxuICAgICAgZm9udFdlaWdodDogJ2JvZHknLFxyXG4gICAgICBmb250U2l6ZTogWzEsIDJdLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAxLjI1LFxyXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgICBtYXJnaW5Cb3R0b206ICcxMHB4JyxcclxuICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICB9LFxyXG4gICAgJz4gLnByaWNlJzoge1xyXG4gICAgICBtYXJnaW5Cb3R0b206IDAsXHJcbiAgICAgIGNvbG9yOiAnc2Vjb25kYXJ5JyxcclxuICAgICAgJz4gc3ViJzoge1xyXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICAgIGJvdHRvbTogJzZweCcsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbGlzdEl0ZW06IHtcclxuICAgIGZvbnRTdHlsZTogJ25vcm1hbCcsXHJcbiAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcclxuICAgIGZvbnRTaXplOiBbMSwgbnVsbCwgbnVsbCwgbnVsbCwgMl0sXHJcbiAgICBsaW5lSGVpZ2h0OiBbMS43LCBudWxsLCAxLjY1XSxcclxuICAgIG1hcmdpbkJvdHRvbTogWzMsICcyMnB4J10sXHJcbiAgICBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCcsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIHByOiBbMiwgbnVsbCwgbnVsbCwgbnVsbCwgMCwgNl0sXHJcbiAgICAnJi5jbG9zZWQnOiB7XHJcbiAgICAgIG9wYWNpdHk6IDAuNTUsXHJcbiAgICAgIGJ1dHRvbjoge1xyXG4gICAgICAgIGNvbG9yOiAnIzc4OEZCNScsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=