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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _slices_basketSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../slices/basketSlice */ "./src/slices/basketSlice.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\Workspace\\Expert\\Amazon\\src\\components\\CheckoutProduct\\CheckoutProduct.jsx",
    _s = $RefreshSig$();








function CheckoutProduct(_ref) {
  _s();

  var _this = this;

  var id = _ref.id,
      title = _ref.title,
      description = _ref.description,
      price = _ref.price,
      rating = _ref.rating,
      category = _ref.category,
      image = _ref.image,
      hasPrime = _ref.hasPrime;
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();

  var addItemToBasket = function addItemToBasket() {};

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "grid grid-cols-5",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
      src: image,
      height: 200,
      width: 200,
      objectFit: "contain"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "col-span-3 mx-5",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex",
        children: Array(rating).fill().map(function (_, index) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__.StarIcon, {
            className: "h-5 text-yellow-500"
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 15
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "text-xs mt-2 mb-2 line-clamp-3",
        children: description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_currency_formatter__WEBPACK_IMPORTED_MODULE_4___default()), {
        quantity: price,
        currency: "USD"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
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
          lineNumber: 36,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: "text-xs text-gray-500",
          children: "Free Next-day delivery"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex flex-col space-y-2 my-auto justify-self-end",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "button",
        onClick: addItemToBasket,
        children: "Add to Basket"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "button",
        children: "Remove from Basket"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, this);
}

_s(CheckoutProduct, "rgTLoBID190wEKCp9+G8W6F7A5M=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2hlY2tvdXRQcm9kdWN0L0NoZWNrb3V0UHJvZHVjdC5qc3giXSwibmFtZXMiOlsiQ2hlY2tvdXRQcm9kdWN0IiwiaWQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwicHJpY2UiLCJyYXRpbmciLCJjYXRlZ29yeSIsImltYWdlIiwiaGFzUHJpbWUiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiYWRkSXRlbVRvQmFza2V0IiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiXyIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsZUFBVCxPQVNHO0FBQUE7O0FBQUE7O0FBQUEsTUFSREMsRUFRQyxRQVJEQSxFQVFDO0FBQUEsTUFQREMsS0FPQyxRQVBEQSxLQU9DO0FBQUEsTUFOREMsV0FNQyxRQU5EQSxXQU1DO0FBQUEsTUFMREMsS0FLQyxRQUxEQSxLQUtDO0FBQUEsTUFKREMsTUFJQyxRQUpEQSxNQUlDO0FBQUEsTUFIREMsUUFHQyxRQUhEQSxRQUdDO0FBQUEsTUFGREMsS0FFQyxRQUZEQSxLQUVDO0FBQUEsTUFEREMsUUFDQyxRQUREQSxRQUNDO0FBQ0QsTUFBTUMsUUFBUSxHQUFHQyx3REFBVyxFQUE1Qjs7QUFDQSxNQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU0sQ0FBRSxDQUFoQzs7QUFDQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxrQkFBZjtBQUFBLDRCQUNFLDhEQUFDLG1EQUFEO0FBQU8sU0FBRyxFQUFFSixLQUFaO0FBQW1CLFlBQU0sRUFBRSxHQUEzQjtBQUFnQyxXQUFLLEVBQUUsR0FBdkM7QUFBNEMsZUFBUyxFQUFDO0FBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFO0FBQUssZUFBUyxFQUFDLGlCQUFmO0FBQUEsOEJBQ0U7QUFBQSxrQkFBSUw7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFLLGlCQUFTLEVBQUMsTUFBZjtBQUFBLGtCQUNHVSxLQUFLLENBQUNQLE1BQUQsQ0FBTCxDQUNFUSxJQURGLEdBRUVDLEdBRkYsQ0FFTSxVQUFDQyxDQUFELEVBQUlDLEtBQUo7QUFBQSw4QkFDSCw4REFBQyw4REFBRDtBQUFzQixxQkFBUyxFQUFDO0FBQWhDLGFBQWVBLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERztBQUFBLFNBRk47QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFTRTtBQUFHLGlCQUFTLEVBQUMsZ0NBQWI7QUFBQSxrQkFBK0NiO0FBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FURixlQVVFLDhEQUFDLGlFQUFEO0FBQVUsZ0JBQVEsRUFBRUMsS0FBcEI7QUFBMkIsZ0JBQVEsRUFBQztBQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVkYsRUFXR0ksUUFBUSxpQkFDUDtBQUFLLGlCQUFTLEVBQUMsNkJBQWY7QUFBQSxnQ0FDRTtBQUNFLGlCQUFPLEVBQUMsTUFEVjtBQUVFLG1CQUFTLEVBQUMsTUFGWjtBQUdFLGFBQUcsRUFBQyxpQ0FITjtBQUlFLGFBQUcsRUFBQztBQUpOO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFPRTtBQUFHLG1CQUFTLEVBQUMsdUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUF5QkU7QUFBSyxlQUFTLEVBQUMsa0RBQWY7QUFBQSw4QkFDRTtBQUFRLGlCQUFTLEVBQUMsUUFBbEI7QUFBMkIsZUFBTyxFQUFFRyxlQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBSUU7QUFBUSxpQkFBUyxFQUFDLFFBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBekJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBa0NEOztHQTlDUVgsZTtVQVVVVSxvRDs7O0tBVlZWLGU7QUFnRFQsK0RBQWVBLGVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2hlY2tvdXQuNWM5MmRkODI1ZmIwNGUzOWEzZTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0YXJJY29uIH0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3Qvb3V0bGluZVwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ3VycmVuY3kgZnJvbSBcInJlYWN0LWN1cnJlbmN5LWZvcm1hdHRlclwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBhZGRUb0Jhc2tldCwgcmVtb3ZlRnJvbUJhc2tldCB9IGZyb20gXCIuLi8uLi9zbGljZXMvYmFza2V0U2xpY2VcIjtcclxuXHJcbmZ1bmN0aW9uIENoZWNrb3V0UHJvZHVjdCh7XHJcbiAgaWQsXHJcbiAgdGl0bGUsXHJcbiAgZGVzY3JpcHRpb24sXHJcbiAgcHJpY2UsXHJcbiAgcmF0aW5nLFxyXG4gIGNhdGVnb3J5LFxyXG4gIGltYWdlLFxyXG4gIGhhc1ByaW1lLFxyXG59KSB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IGFkZEl0ZW1Ub0Jhc2tldCA9ICgpID0+IHt9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTVcIj5cclxuICAgICAgPEltYWdlIHNyYz17aW1hZ2V9IGhlaWdodD17MjAwfSB3aWR0aD17MjAwfSBvYmplY3RGaXQ9XCJjb250YWluXCIgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0zIG14LTVcIj5cclxuICAgICAgICA8cD57dGl0bGV9PC9wPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxyXG4gICAgICAgICAge0FycmF5KHJhdGluZylcclxuICAgICAgICAgICAgLmZpbGwoKVxyXG4gICAgICAgICAgICAubWFwKChfLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxTdGFySWNvbiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJoLTUgdGV4dC15ZWxsb3ctNTAwXCIgLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyBtdC0yIG1iLTIgbGluZS1jbGFtcC0zXCI+e2Rlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICA8Q3VycmVuY3kgcXVhbnRpdHk9e3ByaWNlfSBjdXJyZW5jeT1cIlVTRFwiIC8+XHJcbiAgICAgICAge2hhc1ByaW1lICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0yXCI+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xMlwiXHJcbiAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9saW5rcy5wYXBhcmVhY3QuY29tL2Zkd1wiXHJcbiAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNTAwXCI+RnJlZSBOZXh0LWRheSBkZWxpdmVyeTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc3BhY2UteS0yIG15LWF1dG8ganVzdGlmeS1zZWxmLWVuZFwiPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uXCIgb25DbGljaz17YWRkSXRlbVRvQmFza2V0fT5cclxuICAgICAgICAgIEFkZCB0byBCYXNrZXRcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvblwiPlJlbW92ZSBmcm9tIEJhc2tldDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoZWNrb3V0UHJvZHVjdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==