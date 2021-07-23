self["webpackHotUpdate_N_E"]("pages/checkout",{

/***/ "./src/pages/checkout.jsx":
/*!********************************!*\
  !*** ./src/pages/checkout.jsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_Workspace_Expert_Amazon_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var D_Workspace_Expert_Amazon_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Header/Header */ "./src/components/Header/Header.jsx");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _slices_basketSlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../slices/basketSlice */ "./src/slices/basketSlice.js");
/* harmony import */ var _components_CheckoutProduct_CheckoutProduct__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/CheckoutProduct/CheckoutProduct */ "./src/components/CheckoutProduct/CheckoutProduct.jsx");
/* harmony import */ var react_currency_formatter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-currency-formatter */ "./node_modules/react-currency-formatter/dist/react-currency-formatter.umd.js");
/* harmony import */ var react_currency_formatter__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_currency_formatter__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next-auth/client */ "./node_modules/next-auth/dist/client/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "D:\\Workspace\\Expert\\Amazon\\src\\pages\\checkout.jsx",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,D_Workspace_Expert_Amazon_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










function Checkout() {
  _s();

  var _this = this;

  var items = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(_slices_basketSlice__WEBPACK_IMPORTED_MODULE_7__.selectItems);

  var _useSession = useSession(),
      _useSession2 = (0,D_Workspace_Expert_Amazon_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_useSession, 1),
      session = _useSession2[0];

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "bg-gray-100",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header_Header__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      className: "lg:flex max-w-screen-2xl mx-auto",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex-grow m-5 shadow-sm",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
          src: "https://links.papareact.com/ikj",
          width: 1020,
          height: 250,
          objectFit: "contain"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "flex flex-col p-5 space-y-10 bg-white",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
            className: "text-3xl border-b pb-4",
            children: items.length === 0 ? "Your Basket is empty" : "Shopping Basket"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 13
          }, this), items.map(function (item, index) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CheckoutProduct_CheckoutProduct__WEBPACK_IMPORTED_MODULE_8__.default, _objectSpread({}, item), index, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 15
            }, _this);
          })]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: items.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            className: "whitespace-nowrap",
            children: ["Subtotal (", items.length, " items):", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "font-bold"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            children: !session ? "Sign in to Checkout" : "Process to Checkout"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 15
          }, this)]
        }, void 0, true)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

_s(Checkout, "GYrFpkbRTefUG6IsOs+dcatrdqI=", true, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector];
});

_c = Checkout;
/* harmony default export */ __webpack_exports__["default"] = (Checkout);

var _c;

$RefreshReg$(_c, "Checkout");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2NoZWNrb3V0LmpzeCJdLCJuYW1lcyI6WyJDaGVja291dCIsIml0ZW1zIiwidXNlU2VsZWN0b3IiLCJzZWxlY3RJdGVtcyIsInVzZVNlc3Npb24iLCJzZXNzaW9uIiwibGVuZ3RoIiwibWFwIiwiaXRlbSIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsU0FBU0EsUUFBVCxHQUFvQjtBQUFBOztBQUFBOztBQUNsQixNQUFNQyxLQUFLLEdBQUdDLHdEQUFXLENBQUNDLDREQUFELENBQXpCOztBQURrQixvQkFFQUMsVUFBVSxFQUZWO0FBQUE7QUFBQSxNQUVYQyxPQUZXOztBQUdsQixzQkFDRTtBQUFLLGFBQVMsRUFBQyxhQUFmO0FBQUEsNEJBQ0UsOERBQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBTSxlQUFTLEVBQUMsa0NBQWhCO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFDLHlCQUFmO0FBQUEsZ0NBQ0UsOERBQUMsbURBQUQ7QUFDRSxhQUFHLEVBQUMsaUNBRE47QUFFRSxlQUFLLEVBQUUsSUFGVDtBQUdFLGdCQUFNLEVBQUUsR0FIVjtBQUlFLG1CQUFTLEVBQUM7QUFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBT0U7QUFBSyxtQkFBUyxFQUFDLHVDQUFmO0FBQUEsa0NBQ0U7QUFBSSxxQkFBUyxFQUFDLHdCQUFkO0FBQUEsc0JBQ0dKLEtBQUssQ0FBQ0ssTUFBTixLQUFpQixDQUFqQixHQUFxQixzQkFBckIsR0FBOEM7QUFEakQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixFQUtHTCxLQUFLLENBQUNNLEdBQU4sQ0FBVSxVQUFDQyxJQUFELEVBQU9DLEtBQVA7QUFBQSxnQ0FDVCw4REFBQyxnRkFBRCxvQkFBaUNELElBQWpDLEdBQXNCQyxLQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURTO0FBQUEsV0FBVixDQUxIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQWtCRTtBQUFBLGtCQUNHUixLQUFLLENBQUNLLE1BQU4sR0FBZSxDQUFmLGlCQUNDO0FBQUEsa0NBQ0U7QUFBSSxxQkFBUyxFQUFDLG1CQUFkO0FBQUEscUNBQ2FMLEtBQUssQ0FBQ0ssTUFEbkIsMkJBRUU7QUFBTSx1QkFBUyxFQUFDO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBT0U7QUFBQSxzQkFDRyxDQUFDRCxPQUFELEdBQVcscUJBQVgsR0FBbUM7QUFEdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFQRjtBQUFBO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWxCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXVDRDs7R0ExQ1FMLFE7VUFDT0Usb0Q7OztLQURQRixRO0FBNENULCtEQUFlQSxRQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NoZWNrb3V0LjYxYmVjMGY4Y2ZlMTRjNThjNGEzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlclwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgc2VsZWN0SXRlbXMgfSBmcm9tIFwiLi4vc2xpY2VzL2Jhc2tldFNsaWNlXCI7XHJcbmltcG9ydCBDaGVja291dFByb2R1Y3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2hlY2tvdXRQcm9kdWN0L0NoZWNrb3V0UHJvZHVjdFwiO1xyXG5pbXBvcnQgQ3VycmVuY3kgZnJvbSBcInJlYWN0LWN1cnJlbmN5LWZvcm1hdHRlclwiO1xyXG5pbXBvcnQgeyBzZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9jbGllbnRcIjtcclxuZnVuY3Rpb24gQ2hlY2tvdXQoKSB7XHJcbiAgY29uc3QgaXRlbXMgPSB1c2VTZWxlY3RvcihzZWxlY3RJdGVtcyk7XHJcbiAgY29uc3QgW3Nlc3Npb25dID0gdXNlU2Vzc2lvbigpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYXktMTAwXCI+XHJcbiAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwibGc6ZmxleCBtYXgtdy1zY3JlZW4tMnhsIG14LWF1dG9cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtZ3JvdyBtLTUgc2hhZG93LXNtXCI+XHJcbiAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9saW5rcy5wYXBhcmVhY3QuY29tL2lralwiXHJcbiAgICAgICAgICAgIHdpZHRoPXsxMDIwfVxyXG4gICAgICAgICAgICBoZWlnaHQ9ezI1MH1cclxuICAgICAgICAgICAgb2JqZWN0Rml0PVwiY29udGFpblwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHAtNSBzcGFjZS15LTEwIGJnLXdoaXRlXCI+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBib3JkZXItYiBwYi00XCI+XHJcbiAgICAgICAgICAgICAge2l0ZW1zLmxlbmd0aCA9PT0gMCA/IFwiWW91ciBCYXNrZXQgaXMgZW1wdHlcIiA6IFwiU2hvcHBpbmcgQmFza2V0XCJ9XHJcbiAgICAgICAgICAgIDwvaDE+XHJcblxyXG4gICAgICAgICAgICB7aXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxDaGVja291dFByb2R1Y3Qga2V5PXtpbmRleH0gey4uLml0ZW19IC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIHtpdGVtcy5sZW5ndGggPiAwICYmIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwid2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgIFN1YnRvdGFsICh7aXRlbXMubGVuZ3RofSBpdGVtcyk6XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5cclxuICAgICAgICAgICAgICAgICAgey8qIDxDdXJyZW5jeSBxdWFudGl0eT17fSAvPiAqL31cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgIDxidXR0b24+XHJcbiAgICAgICAgICAgICAgICB7IXNlc3Npb24gPyBcIlNpZ24gaW4gdG8gQ2hlY2tvdXRcIiA6IFwiUHJvY2VzcyB0byBDaGVja291dFwifVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoZWNrb3V0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9