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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header/Header */ "./src/components/Header/Header.jsx");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _slices_basketSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../slices/basketSlice */ "./src/slices/basketSlice.js");
/* harmony import */ var _components_CheckoutProduct_CheckoutProduct__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/CheckoutProduct/CheckoutProduct */ "./src/components/CheckoutProduct/CheckoutProduct.jsx");
/* harmony import */ var react_currency_formatter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-currency-formatter */ "./node_modules/react-currency-formatter/dist/react-currency-formatter.umd.js");
/* harmony import */ var react_currency_formatter__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_currency_formatter__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next-auth/client */ "./node_modules/next-auth/dist/client/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "D:\\Workspace\\Expert\\Amazon\\src\\pages\\checkout.jsx",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,D_Workspace_Expert_Amazon_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










function Checkout() {
  _s();

  var _this = this;

  var items = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(_slices_basketSlice__WEBPACK_IMPORTED_MODULE_6__.selectItems);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "bg-gray-100",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header_Header__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      className: "lg:flex max-w-screen-2xl mx-auto",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex-grow m-5 shadow-sm",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
          src: "https://links.papareact.com/ikj",
          width: 1020,
          height: 250,
          objectFit: "contain"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "flex flex-col p-5 space-y-10 bg-white",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
            className: "text-3xl border-b pb-4",
            children: items.length === 0 ? "Your Basket is empty" : "Shopping Basket"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 13
          }, this), items.map(function (item, index) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CheckoutProduct_CheckoutProduct__WEBPACK_IMPORTED_MODULE_7__.default, _objectSpread({}, item), index, false, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 15
            }, _this);
          })]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: items.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            className: "whitespace-nowrap",
            children: ["Subtotal (", items.length, " items):", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "font-bold"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            children: !next_auth_client__WEBPACK_IMPORTED_MODULE_9__.session ? "Sign in to Checkout" : "Process to Checkout"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 15
          }, this)]
        }, void 0, true)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

_s(Checkout, "tY2Gvv5VcC5OmHFNMSHq17tjIN8=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2NoZWNrb3V0LmpzeCJdLCJuYW1lcyI6WyJDaGVja291dCIsIml0ZW1zIiwidXNlU2VsZWN0b3IiLCJzZWxlY3RJdGVtcyIsImxlbmd0aCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInNlc3Npb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsU0FBU0EsUUFBVCxHQUFvQjtBQUFBOztBQUFBOztBQUNsQixNQUFNQyxLQUFLLEdBQUdDLHdEQUFXLENBQUNDLDREQUFELENBQXpCO0FBQ0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUMsYUFBZjtBQUFBLDRCQUNFLDhEQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFO0FBQU0sZUFBUyxFQUFDLGtDQUFoQjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQyx5QkFBZjtBQUFBLGdDQUNFLDhEQUFDLG1EQUFEO0FBQ0UsYUFBRyxFQUFDLGlDQUROO0FBRUUsZUFBSyxFQUFFLElBRlQ7QUFHRSxnQkFBTSxFQUFFLEdBSFY7QUFJRSxtQkFBUyxFQUFDO0FBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQU9FO0FBQUssbUJBQVMsRUFBQyx1Q0FBZjtBQUFBLGtDQUNFO0FBQUkscUJBQVMsRUFBQyx3QkFBZDtBQUFBLHNCQUNHRixLQUFLLENBQUNHLE1BQU4sS0FBaUIsQ0FBakIsR0FBcUIsc0JBQXJCLEdBQThDO0FBRGpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsRUFLR0gsS0FBSyxDQUFDSSxHQUFOLENBQVUsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQO0FBQUEsZ0NBQ1QsOERBQUMsZ0ZBQUQsb0JBQWlDRCxJQUFqQyxHQUFzQkMsS0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEUztBQUFBLFdBQVYsQ0FMSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFrQkU7QUFBQSxrQkFDR04sS0FBSyxDQUFDRyxNQUFOLEdBQWUsQ0FBZixpQkFDQztBQUFBLGtDQUNFO0FBQUkscUJBQVMsRUFBQyxtQkFBZDtBQUFBLHFDQUNhSCxLQUFLLENBQUNHLE1BRG5CLDJCQUVFO0FBQU0sdUJBQVMsRUFBQztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQU9FO0FBQUEsc0JBQ0csQ0FBQ0kscURBQUQsR0FBVyxxQkFBWCxHQUFtQztBQUR0QztBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVBGO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBbEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBdUNEOztHQXpDUVIsUTtVQUNPRSxvRDs7O0tBRFBGLFE7QUEyQ1QsK0RBQWVBLFFBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2hlY2tvdXQuNTg5ZTNlMTE5OTczM2MxYTJhNTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBzZWxlY3RJdGVtcyB9IGZyb20gXCIuLi9zbGljZXMvYmFza2V0U2xpY2VcIjtcclxuaW1wb3J0IENoZWNrb3V0UHJvZHVjdCBmcm9tIFwiLi4vY29tcG9uZW50cy9DaGVja291dFByb2R1Y3QvQ2hlY2tvdXRQcm9kdWN0XCI7XHJcbmltcG9ydCBDdXJyZW5jeSBmcm9tIFwicmVhY3QtY3VycmVuY3ktZm9ybWF0dGVyXCI7XHJcbmltcG9ydCB7IHNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL2NsaWVudFwiO1xyXG5mdW5jdGlvbiBDaGVja291dCgpIHtcclxuICBjb25zdCBpdGVtcyA9IHVzZVNlbGVjdG9yKHNlbGVjdEl0ZW1zKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5LTEwMFwiPlxyXG4gICAgICA8SGVhZGVyIC8+XHJcbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cImxnOmZsZXggbWF4LXctc2NyZWVuLTJ4bCBteC1hdXRvXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWdyb3cgbS01IHNoYWRvdy1zbVwiPlxyXG4gICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vbGlua3MucGFwYXJlYWN0LmNvbS9pa2pcIlxyXG4gICAgICAgICAgICB3aWR0aD17MTAyMH1cclxuICAgICAgICAgICAgaGVpZ2h0PXsyNTB9XHJcbiAgICAgICAgICAgIG9iamVjdEZpdD1cImNvbnRhaW5cIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBwLTUgc3BhY2UteS0xMCBiZy13aGl0ZVwiPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgYm9yZGVyLWIgcGItNFwiPlxyXG4gICAgICAgICAgICAgIHtpdGVtcy5sZW5ndGggPT09IDAgPyBcIllvdXIgQmFza2V0IGlzIGVtcHR5XCIgOiBcIlNob3BwaW5nIEJhc2tldFwifVxyXG4gICAgICAgICAgICA8L2gxPlxyXG5cclxuICAgICAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICA8Q2hlY2tvdXRQcm9kdWN0IGtleT17aW5kZXh9IHsuLi5pdGVtfSAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICB7aXRlbXMubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIndoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICBTdWJ0b3RhbCAoe2l0ZW1zLmxlbmd0aH0gaXRlbXMpOlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8Q3VycmVuY3kgcXVhbnRpdHk9e30gLz4gKi99XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICA8YnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgeyFzZXNzaW9uID8gXCJTaWduIGluIHRvIENoZWNrb3V0XCIgOiBcIlByb2Nlc3MgdG8gQ2hlY2tvdXRcIn1cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L21haW4+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGVja291dDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==