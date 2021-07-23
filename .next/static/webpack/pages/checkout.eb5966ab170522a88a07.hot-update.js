self["webpackHotUpdate_N_E"]("pages/checkout",{

/***/ "./src/components/CheckoutProduct/CheckoutProduct.jsx":
/*!************************************************************!*\
  !*** ./src/components/CheckoutProduct/CheckoutProduct.jsx ***!
  \************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/@heroicons/react/outline/esm/index.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_currency_formatter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-currency-formatter */ "./node_modules/react-currency-formatter/dist/react-currency-formatter.umd.js");
/* harmony import */ var react_currency_formatter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_currency_formatter__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "D:\\Workspace\\Expert\\Amazon\\src\\components\\CheckoutProduct\\CheckoutProduct.jsx";





function CheckoutProduct(_ref) {
  var _this = this;

  var id = _ref.id,
      title = _ref.title,
      description = _ref.description,
      price = _ref.price,
      rating = _ref.rating,
      category = _ref.category,
      image = _ref.image,
      hasPrime = _ref.hasPrime;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "grid grid-cols-5",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
      src: image,
      height: 200,
      width: 200,
      objectFit: "contain"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "col-span-3 mx-5",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex",
        children: Array(rating).fill().map(function (_, index) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__.StarIcon, {
            className: "h-5 text-yellow-500"
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 15
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "text-xs mt-2 mb-2 line-clamp-3",
        children: description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_currency_formatter__WEBPACK_IMPORTED_MODULE_4___default()), {
        quantity: price,
        currency: "USD"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this), hasPrime && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex items-center space-x-2",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          loading: "lazy",
          className: "w-12",
          src: "https://links.papareact.com/fdw",
          alt: ""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: "text-xs text-gray-500",
          children: "Free Next-day delivery"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

_c = CheckoutProduct;
/* harmony default export */ __webpack_exports__["default"] = (CheckoutProduct);

var _c;

$RefreshReg$(_c, "CheckoutProduct");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2hlY2tvdXRQcm9kdWN0L0NoZWNrb3V0UHJvZHVjdC5qc3giXSwibmFtZXMiOlsiQ2hlY2tvdXRQcm9kdWN0IiwiaWQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwicHJpY2UiLCJyYXRpbmciLCJjYXRlZ29yeSIsImltYWdlIiwiaGFzUHJpbWUiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJfIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxlQUFULE9BU0c7QUFBQTs7QUFBQSxNQVJEQyxFQVFDLFFBUkRBLEVBUUM7QUFBQSxNQVBEQyxLQU9DLFFBUERBLEtBT0M7QUFBQSxNQU5EQyxXQU1DLFFBTkRBLFdBTUM7QUFBQSxNQUxEQyxLQUtDLFFBTERBLEtBS0M7QUFBQSxNQUpEQyxNQUlDLFFBSkRBLE1BSUM7QUFBQSxNQUhEQyxRQUdDLFFBSERBLFFBR0M7QUFBQSxNQUZEQyxLQUVDLFFBRkRBLEtBRUM7QUFBQSxNQUREQyxRQUNDLFFBRERBLFFBQ0M7QUFDRCxzQkFDRTtBQUFLLGFBQVMsRUFBQyxrQkFBZjtBQUFBLDRCQUNFLDhEQUFDLG1EQUFEO0FBQU8sU0FBRyxFQUFFRCxLQUFaO0FBQW1CLFlBQU0sRUFBRSxHQUEzQjtBQUFnQyxXQUFLLEVBQUUsR0FBdkM7QUFBNEMsZUFBUyxFQUFDO0FBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFO0FBQUssZUFBUyxFQUFDLGlCQUFmO0FBQUEsOEJBQ0U7QUFBQSxrQkFBSUw7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFLLGlCQUFTLEVBQUMsTUFBZjtBQUFBLGtCQUNHTyxLQUFLLENBQUNKLE1BQUQsQ0FBTCxDQUNFSyxJQURGLEdBRUVDLEdBRkYsQ0FFTSxVQUFDQyxDQUFELEVBQUlDLEtBQUo7QUFBQSw4QkFDSCw4REFBQyw4REFBRDtBQUFzQixxQkFBUyxFQUFDO0FBQWhDLGFBQWVBLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERztBQUFBLFNBRk47QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFTRTtBQUFHLGlCQUFTLEVBQUMsZ0NBQWI7QUFBQSxrQkFBK0NWO0FBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FURixlQVVFLDhEQUFDLGlFQUFEO0FBQVUsZ0JBQVEsRUFBRUMsS0FBcEI7QUFBMkIsZ0JBQVEsRUFBQztBQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVkYsRUFXR0ksUUFBUSxpQkFDUDtBQUFLLGlCQUFTLEVBQUMsNkJBQWY7QUFBQSxnQ0FDRTtBQUNFLGlCQUFPLEVBQUMsTUFEVjtBQUVFLG1CQUFTLEVBQUMsTUFGWjtBQUdFLGFBQUcsRUFBQyxpQ0FITjtBQUlFLGFBQUcsRUFBQztBQUpOO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFPRTtBQUFHLG1CQUFTLEVBQUMsdUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE0QkQ7O0tBdENRUixlO0FBd0NULCtEQUFlQSxlQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NoZWNrb3V0LmViNTk2NmFiMTcwNTIyYTg4YTA3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdGFySWNvbiB9IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0L291dGxpbmVcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEN1cnJlbmN5IGZyb20gXCJyZWFjdC1jdXJyZW5jeS1mb3JtYXR0ZXJcIjtcclxuXHJcbmZ1bmN0aW9uIENoZWNrb3V0UHJvZHVjdCh7XHJcbiAgaWQsXHJcbiAgdGl0bGUsXHJcbiAgZGVzY3JpcHRpb24sXHJcbiAgcHJpY2UsXHJcbiAgcmF0aW5nLFxyXG4gIGNhdGVnb3J5LFxyXG4gIGltYWdlLFxyXG4gIGhhc1ByaW1lLFxyXG59KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtNVwiPlxyXG4gICAgICA8SW1hZ2Ugc3JjPXtpbWFnZX0gaGVpZ2h0PXsyMDB9IHdpZHRoPXsyMDB9IG9iamVjdEZpdD1cImNvbnRhaW5cIiAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTMgbXgtNVwiPlxyXG4gICAgICAgIDxwPnt0aXRsZX08L3A+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XHJcbiAgICAgICAgICB7QXJyYXkocmF0aW5nKVxyXG4gICAgICAgICAgICAuZmlsbCgpXHJcbiAgICAgICAgICAgIC5tYXAoKF8sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPFN0YXJJY29uIGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImgtNSB0ZXh0LXllbGxvdy01MDBcIiAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIG10LTIgbWItMiBsaW5lLWNsYW1wLTNcIj57ZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgIDxDdXJyZW5jeSBxdWFudGl0eT17cHJpY2V9IGN1cnJlbmN5PVwiVVNEXCIgLz5cclxuICAgICAgICB7aGFzUHJpbWUgJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTJcIj5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEyXCJcclxuICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2xpbmtzLnBhcGFyZWFjdC5jb20vZmR3XCJcclxuICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZ3JheS01MDBcIj5GcmVlIE5leHQtZGF5IGRlbGl2ZXJ5PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGVja291dFByb2R1Y3Q7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=