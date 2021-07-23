self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Product/Product.jsx":
/*!********************************************!*\
  !*** ./src/components/Product/Product.jsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_Workspace_Expert_Amazon_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/@heroicons/react/solid/esm/index.js");
/* harmony import */ var react_currency_formatter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-currency-formatter */ "./node_modules/react-currency-formatter/dist/react-currency-formatter.umd.js");
/* harmony import */ var react_currency_formatter__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_currency_formatter__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _slices_basketSlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../slices/basketSlice */ "./src/slices/basketSlice.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "D:\\Workspace\\Expert\\Amazon\\src\\components\\Product\\Product.jsx",
    _s = $RefreshSig$();







var MAX_RATING = 5;
var MIN_RATING = 1;

function Product(_ref) {
  _s();

  var _this = this;

  var id = _ref.id,
      title = _ref.title,
      price = _ref.price,
      description = _ref.description,
      category = _ref.category,
      image = _ref.image;
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default().useState(Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING),
      _React$useState2 = (0,D_Workspace_Expert_Amazon_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState, 1),
      rating = _React$useState2[0];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_3___default().useState(Math.random() < 0.5),
      _React$useState4 = (0,D_Workspace_Expert_Amazon_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState3, 1),
      hasPrime = _React$useState4[0];

  var addItemToBasket = function addItemToBasket() {
    var product = {
      id: id,
      title: title,
      price: price,
      description: description,
      category: category,
      image: image,
      hasPrime: hasPrime
    };
    dispatch((0,_slices_basketSlice__WEBPACK_IMPORTED_MODULE_7__.addToBasket)(product));
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "relative flex flex-col m-5 bg-white z-30 p-10 rounded-2xl shadow-md",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: "absolute top-2 right-2 text-xs italic text-gray-400",
      children: category
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
      src: image,
      height: 200,
      width: 200,
      objectFit: "contain"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
      className: "my-3",
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex",
      children: Array(rating).fill().map(function (_, i) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__.StarIcon, {
          className: "h-5 text-yellow-500"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 13
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: "text-xs my-2 line-clamp-2",
      children: description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "mb-5",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_currency_formatter__WEBPACK_IMPORTED_MODULE_5___default()), {
        quantity: price,
        currency: "USD"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, this), hasPrime && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex items-center space-x-2 -mt-5",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        className: "w-12",
        src: "https://links.papareact.com/fdw",
        alt: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "text-xs text-gray-500",
        children: "Free Next-day Delivery"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      className: "mt-auto button",
      onClick: addItemToBasket,
      children: "Add to Basket"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 5
  }, this);
}

_s(Product, "sJhzIrh9xJOgrr8LM7QV9g9XHPs=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch];
});

_c = Product;
/* harmony default export */ __webpack_exports__["default"] = (Product);

var _c;

$RefreshReg$(_c, "Product");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdC9Qcm9kdWN0LmpzeCJdLCJuYW1lcyI6WyJNQVhfUkFUSU5HIiwiTUlOX1JBVElORyIsIlByb2R1Y3QiLCJpZCIsInRpdGxlIiwicHJpY2UiLCJkZXNjcmlwdGlvbiIsImNhdGVnb3J5IiwiaW1hZ2UiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiUmVhY3QiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJyYXRpbmciLCJoYXNQcmltZSIsImFkZEl0ZW1Ub0Jhc2tldCIsInByb2R1Y3QiLCJhZGRUb0Jhc2tldCIsIkFycmF5IiwiZmlsbCIsIm1hcCIsIl8iLCJpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFVBQVUsR0FBRyxDQUFuQjtBQUNBLElBQU1DLFVBQVUsR0FBRyxDQUFuQjs7QUFFQSxTQUFTQyxPQUFULE9BQXFFO0FBQUE7O0FBQUE7O0FBQUEsTUFBbERDLEVBQWtELFFBQWxEQSxFQUFrRDtBQUFBLE1BQTlDQyxLQUE4QyxRQUE5Q0EsS0FBOEM7QUFBQSxNQUF2Q0MsS0FBdUMsUUFBdkNBLEtBQXVDO0FBQUEsTUFBaENDLFdBQWdDLFFBQWhDQSxXQUFnQztBQUFBLE1BQW5CQyxRQUFtQixRQUFuQkEsUUFBbUI7QUFBQSxNQUFUQyxLQUFTLFFBQVRBLEtBQVM7QUFDbkUsTUFBTUMsUUFBUSxHQUFHQyx3REFBVyxFQUE1Qjs7QUFEbUUsd0JBR2xEQyxxREFBQSxDQUNmQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLE1BQWlCZCxVQUFVLEdBQUdDLFVBQWIsR0FBMEIsQ0FBM0MsQ0FBWCxJQUE0REEsVUFEN0MsQ0FIa0Q7QUFBQTtBQUFBLE1BRzVEYyxNQUg0RDs7QUFBQSx5QkFNaERKLHFEQUFBLENBQWVDLElBQUksQ0FBQ0UsTUFBTCxLQUFnQixHQUEvQixDQU5nRDtBQUFBO0FBQUEsTUFNNURFLFFBTjREOztBQVFuRSxNQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFDNUIsUUFBTUMsT0FBTyxHQUFHO0FBQ2RmLFFBQUUsRUFBRkEsRUFEYztBQUVkQyxXQUFLLEVBQUxBLEtBRmM7QUFHZEMsV0FBSyxFQUFMQSxLQUhjO0FBSWRDLGlCQUFXLEVBQVhBLFdBSmM7QUFLZEMsY0FBUSxFQUFSQSxRQUxjO0FBTWRDLFdBQUssRUFBTEEsS0FOYztBQU9kUSxjQUFRLEVBQVJBO0FBUGMsS0FBaEI7QUFTQVAsWUFBUSxDQUFDVSxnRUFBVyxDQUFDRCxPQUFELENBQVosQ0FBUjtBQUNELEdBWEQ7O0FBYUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUMscUVBQWY7QUFBQSw0QkFDRTtBQUFHLGVBQVMsRUFBQyxxREFBYjtBQUFBLGdCQUNHWDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUlFLDhEQUFDLG1EQUFEO0FBQU8sU0FBRyxFQUFFQyxLQUFaO0FBQW1CLFlBQU0sRUFBRSxHQUEzQjtBQUFnQyxXQUFLLEVBQUUsR0FBdkM7QUFBNEMsZUFBUyxFQUFDO0FBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRixlQUtFO0FBQUksZUFBUyxFQUFDLE1BQWQ7QUFBQSxnQkFBc0JKO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRixlQU1FO0FBQUssZUFBUyxFQUFDLE1BQWY7QUFBQSxnQkFDR2dCLEtBQUssQ0FBQ0wsTUFBRCxDQUFMLENBQ0VNLElBREYsR0FFRUMsR0FGRixDQUVNLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLDRCQUNILDhEQUFDLDREQUFEO0FBQVUsbUJBQVMsRUFBQztBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURHO0FBQUEsT0FGTjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORixlQWFFO0FBQUcsZUFBUyxFQUFDLDJCQUFiO0FBQUEsZ0JBQTBDbEI7QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWJGLGVBY0U7QUFBSyxlQUFTLEVBQUMsTUFBZjtBQUFBLDZCQUNFLDhEQUFDLGlFQUFEO0FBQVUsZ0JBQVEsRUFBRUQsS0FBcEI7QUFBMkIsZ0JBQVEsRUFBQztBQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWRGLEVBaUJHVyxRQUFRLGlCQUNQO0FBQUssZUFBUyxFQUFDLG1DQUFmO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFDLE1BQWY7QUFBc0IsV0FBRyxFQUFDLGlDQUExQjtBQUE0RCxXQUFHLEVBQUM7QUFBaEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBRyxpQkFBUyxFQUFDLHVCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbEJKLGVBd0JFO0FBQVEsZUFBUyxFQUFDLGdCQUFsQjtBQUFtQyxhQUFPLEVBQUVDLGVBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBeEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBOEJEOztHQW5EUWYsTztVQUNVUSxvRDs7O0tBRFZSLE87QUFxRFQsK0RBQWVBLE9BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguN2Q2Njc3NmE3NDAzNzFlODQxYjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFN0YXJJY29uIH0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3Qvc29saWRcIjtcclxuaW1wb3J0IEN1cnJlbmN5IGZyb20gXCJyZWFjdC1jdXJyZW5jeS1mb3JtYXR0ZXJcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgYWRkVG9CYXNrZXQgfSBmcm9tIFwiLi4vLi4vc2xpY2VzL2Jhc2tldFNsaWNlXCI7XHJcblxyXG5jb25zdCBNQVhfUkFUSU5HID0gNTtcclxuY29uc3QgTUlOX1JBVElORyA9IDE7XHJcblxyXG5mdW5jdGlvbiBQcm9kdWN0KHsgaWQsIHRpdGxlLCBwcmljZSwgZGVzY3JpcHRpb24sIGNhdGVnb3J5LCBpbWFnZSB9KSB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICBjb25zdCBbcmF0aW5nXSA9IFJlYWN0LnVzZVN0YXRlKFxyXG4gICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKE1BWF9SQVRJTkcgLSBNSU5fUkFUSU5HICsgMSkpICsgTUlOX1JBVElOR1xyXG4gICk7XHJcbiAgY29uc3QgW2hhc1ByaW1lXSA9IFJlYWN0LnVzZVN0YXRlKE1hdGgucmFuZG9tKCkgPCAwLjUpO1xyXG5cclxuICBjb25zdCBhZGRJdGVtVG9CYXNrZXQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBwcm9kdWN0ID0ge1xyXG4gICAgICBpZCxcclxuICAgICAgdGl0bGUsXHJcbiAgICAgIHByaWNlLFxyXG4gICAgICBkZXNjcmlwdGlvbixcclxuICAgICAgY2F0ZWdvcnksXHJcbiAgICAgIGltYWdlLFxyXG4gICAgICBoYXNQcmltZSxcclxuICAgIH07XHJcbiAgICBkaXNwYXRjaChhZGRUb0Jhc2tldChwcm9kdWN0KSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBmbGV4LWNvbCBtLTUgYmctd2hpdGUgei0zMCBwLTEwIHJvdW5kZWQtMnhsIHNoYWRvdy1tZFwiPlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMiByaWdodC0yIHRleHQteHMgaXRhbGljIHRleHQtZ3JheS00MDBcIj5cclxuICAgICAgICB7Y2F0ZWdvcnl9XHJcbiAgICAgIDwvcD5cclxuICAgICAgPEltYWdlIHNyYz17aW1hZ2V9IGhlaWdodD17MjAwfSB3aWR0aD17MjAwfSBvYmplY3RGaXQ9XCJjb250YWluXCIgLz5cclxuICAgICAgPGg0IGNsYXNzTmFtZT1cIm15LTNcIj57dGl0bGV9PC9oND5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XHJcbiAgICAgICAge0FycmF5KHJhdGluZylcclxuICAgICAgICAgIC5maWxsKClcclxuICAgICAgICAgIC5tYXAoKF8sIGkpID0+IChcclxuICAgICAgICAgICAgPFN0YXJJY29uIGNsYXNzTmFtZT1cImgtNSB0ZXh0LXllbGxvdy01MDBcIiAvPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIG15LTIgbGluZS1jbGFtcC0yXCI+e2Rlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi01XCI+XHJcbiAgICAgICAgPEN1cnJlbmN5IHF1YW50aXR5PXtwcmljZX0gY3VycmVuY3k9XCJVU0RcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge2hhc1ByaW1lICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMiAtbXQtNVwiPlxyXG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ3LTEyXCIgc3JjPVwiaHR0cHM6Ly9saW5rcy5wYXBhcmVhY3QuY29tL2Zkd1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZ3JheS01MDBcIj5GcmVlIE5leHQtZGF5IERlbGl2ZXJ5PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG5cclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtdC1hdXRvIGJ1dHRvblwiIG9uQ2xpY2s9e2FkZEl0ZW1Ub0Jhc2tldH0+XHJcbiAgICAgICAgQWRkIHRvIEJhc2tldFxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3Q7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=