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

  var addItemToBasket = function addItemToBasket() {
    var product = {
      id: id,
      title: title,
      description: description,
      price: price,
      rating: rating,
      category: category,
      image: image,
      hasPrime: hasPrime
    };
    dispatch((0,_slices_basketSlice__WEBPACK_IMPORTED_MODULE_6__.addToBasket)(product));
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "grid grid-cols-5",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
      src: image,
      height: 200,
      width: 200,
      objectFit: "contain"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "col-span-3 mx-5",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex",
        children: Array(rating).fill().map(function (_, index) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__.StarIcon, {
            className: "h-5 text-yellow-500"
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 15
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "text-xs mt-2 mb-2 line-clamp-3",
        children: description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_currency_formatter__WEBPACK_IMPORTED_MODULE_4___default()), {
        quantity: price,
        currency: "USD"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
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
          lineNumber: 49,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: "text-xs text-gray-500",
          children: "Free Next-day delivery"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex flex-col space-y-2 my-auto justify-self-end",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "button",
        onClick: addItemToBasket,
        children: "Add to Basket"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "button",
        children: "Remove from Basket"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 34,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2hlY2tvdXRQcm9kdWN0L0NoZWNrb3V0UHJvZHVjdC5qc3giXSwibmFtZXMiOlsiQ2hlY2tvdXRQcm9kdWN0IiwiaWQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwicHJpY2UiLCJyYXRpbmciLCJjYXRlZ29yeSIsImltYWdlIiwiaGFzUHJpbWUiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiYWRkSXRlbVRvQmFza2V0IiwicHJvZHVjdCIsImFkZFRvQmFza2V0IiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiXyIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsZUFBVCxPQVNHO0FBQUE7O0FBQUE7O0FBQUEsTUFSREMsRUFRQyxRQVJEQSxFQVFDO0FBQUEsTUFQREMsS0FPQyxRQVBEQSxLQU9DO0FBQUEsTUFOREMsV0FNQyxRQU5EQSxXQU1DO0FBQUEsTUFMREMsS0FLQyxRQUxEQSxLQUtDO0FBQUEsTUFKREMsTUFJQyxRQUpEQSxNQUlDO0FBQUEsTUFIREMsUUFHQyxRQUhEQSxRQUdDO0FBQUEsTUFGREMsS0FFQyxRQUZEQSxLQUVDO0FBQUEsTUFEREMsUUFDQyxRQUREQSxRQUNDO0FBQ0QsTUFBTUMsUUFBUSxHQUFHQyx3REFBVyxFQUE1Qjs7QUFDQSxNQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFDNUIsUUFBTUMsT0FBTyxHQUFHO0FBQ2RYLFFBQUUsRUFBRkEsRUFEYztBQUVkQyxXQUFLLEVBQUxBLEtBRmM7QUFHZEMsaUJBQVcsRUFBWEEsV0FIYztBQUlkQyxXQUFLLEVBQUxBLEtBSmM7QUFLZEMsWUFBTSxFQUFOQSxNQUxjO0FBTWRDLGNBQVEsRUFBUkEsUUFOYztBQU9kQyxXQUFLLEVBQUxBLEtBUGM7QUFRZEMsY0FBUSxFQUFSQTtBQVJjLEtBQWhCO0FBVUFDLFlBQVEsQ0FBQ0ksZ0VBQVcsQ0FBQ0QsT0FBRCxDQUFaLENBQVI7QUFDRCxHQVpEOztBQWNBLHNCQUNFO0FBQUssYUFBUyxFQUFDLGtCQUFmO0FBQUEsNEJBQ0UsOERBQUMsbURBQUQ7QUFBTyxTQUFHLEVBQUVMLEtBQVo7QUFBbUIsWUFBTSxFQUFFLEdBQTNCO0FBQWdDLFdBQUssRUFBRSxHQUF2QztBQUE0QyxlQUFTLEVBQUM7QUFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBSyxlQUFTLEVBQUMsaUJBQWY7QUFBQSw4QkFDRTtBQUFBLGtCQUFJTDtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQUssaUJBQVMsRUFBQyxNQUFmO0FBQUEsa0JBQ0dZLEtBQUssQ0FBQ1QsTUFBRCxDQUFMLENBQ0VVLElBREYsR0FFRUMsR0FGRixDQUVNLFVBQUNDLENBQUQsRUFBSUMsS0FBSjtBQUFBLDhCQUNILDhEQUFDLDhEQUFEO0FBQXNCLHFCQUFTLEVBQUM7QUFBaEMsYUFBZUEsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURHO0FBQUEsU0FGTjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQVNFO0FBQUcsaUJBQVMsRUFBQyxnQ0FBYjtBQUFBLGtCQUErQ2Y7QUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVRGLGVBVUUsOERBQUMsaUVBQUQ7QUFBVSxnQkFBUSxFQUFFQyxLQUFwQjtBQUEyQixnQkFBUSxFQUFDO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FWRixFQVdHSSxRQUFRLGlCQUNQO0FBQUssaUJBQVMsRUFBQyw2QkFBZjtBQUFBLGdDQUNFO0FBQ0UsaUJBQU8sRUFBQyxNQURWO0FBRUUsbUJBQVMsRUFBQyxNQUZaO0FBR0UsYUFBRyxFQUFDLGlDQUhOO0FBSUUsYUFBRyxFQUFDO0FBSk47QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQU9FO0FBQUcsbUJBQVMsRUFBQyx1QkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FaSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQXlCRTtBQUFLLGVBQVMsRUFBQyxrREFBZjtBQUFBLDhCQUNFO0FBQVEsaUJBQVMsRUFBQyxRQUFsQjtBQUEyQixlQUFPLEVBQUVHLGVBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFJRTtBQUFRLGlCQUFTLEVBQUMsUUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF6QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFrQ0Q7O0dBM0RRWCxlO1VBVVVVLG9EOzs7S0FWVlYsZTtBQTZEVCwrREFBZUEsZUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jaGVja291dC43ZWIyYzcyNjAxZmZlZThkMjgzNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3Rhckljb24gfSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC9vdXRsaW5lXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDdXJyZW5jeSBmcm9tIFwicmVhY3QtY3VycmVuY3ktZm9ybWF0dGVyXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IGFkZFRvQmFza2V0LCByZW1vdmVGcm9tQmFza2V0IH0gZnJvbSBcIi4uLy4uL3NsaWNlcy9iYXNrZXRTbGljZVwiO1xyXG5cclxuZnVuY3Rpb24gQ2hlY2tvdXRQcm9kdWN0KHtcclxuICBpZCxcclxuICB0aXRsZSxcclxuICBkZXNjcmlwdGlvbixcclxuICBwcmljZSxcclxuICByYXRpbmcsXHJcbiAgY2F0ZWdvcnksXHJcbiAgaW1hZ2UsXHJcbiAgaGFzUHJpbWUsXHJcbn0pIHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgYWRkSXRlbVRvQmFza2V0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcHJvZHVjdCA9IHtcclxuICAgICAgaWQsXHJcbiAgICAgIHRpdGxlLFxyXG4gICAgICBkZXNjcmlwdGlvbixcclxuICAgICAgcHJpY2UsXHJcbiAgICAgIHJhdGluZyxcclxuICAgICAgY2F0ZWdvcnksXHJcbiAgICAgIGltYWdlLFxyXG4gICAgICBoYXNQcmltZSxcclxuICAgIH07XHJcbiAgICBkaXNwYXRjaChhZGRUb0Jhc2tldChwcm9kdWN0KSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtNVwiPlxyXG4gICAgICA8SW1hZ2Ugc3JjPXtpbWFnZX0gaGVpZ2h0PXsyMDB9IHdpZHRoPXsyMDB9IG9iamVjdEZpdD1cImNvbnRhaW5cIiAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTMgbXgtNVwiPlxyXG4gICAgICAgIDxwPnt0aXRsZX08L3A+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XHJcbiAgICAgICAgICB7QXJyYXkocmF0aW5nKVxyXG4gICAgICAgICAgICAuZmlsbCgpXHJcbiAgICAgICAgICAgIC5tYXAoKF8sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPFN0YXJJY29uIGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImgtNSB0ZXh0LXllbGxvdy01MDBcIiAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIG10LTIgbWItMiBsaW5lLWNsYW1wLTNcIj57ZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgIDxDdXJyZW5jeSBxdWFudGl0eT17cHJpY2V9IGN1cnJlbmN5PVwiVVNEXCIgLz5cclxuICAgICAgICB7aGFzUHJpbWUgJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTJcIj5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEyXCJcclxuICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2xpbmtzLnBhcGFyZWFjdC5jb20vZmR3XCJcclxuICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZ3JheS01MDBcIj5GcmVlIE5leHQtZGF5IGRlbGl2ZXJ5PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzcGFjZS15LTIgbXktYXV0byBqdXN0aWZ5LXNlbGYtZW5kXCI+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b25cIiBvbkNsaWNrPXthZGRJdGVtVG9CYXNrZXR9PlxyXG4gICAgICAgICAgQWRkIHRvIEJhc2tldFxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uXCI+UmVtb3ZlIGZyb20gQmFza2V0PC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tvdXRQcm9kdWN0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9