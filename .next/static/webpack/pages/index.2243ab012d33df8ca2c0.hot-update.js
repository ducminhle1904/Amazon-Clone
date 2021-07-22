self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/ProductFeed/ProductFeed.jsx":
/*!****************************************************!*\
  !*** ./src/components/ProductFeed/ProductFeed.jsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Product_Product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Product/Product */ "./src/components/Product/Product.jsx");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "D:\\Workspace\\Expert\\Amazon\\src\\components\\ProductFeed\\ProductFeed.jsx";



function ProductFeed(_ref) {
  var _this = this;

  var products = _ref.products;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto",
    children: [products.slice(0, 4).map(function (_ref2) {
      var id = _ref2.id,
          title = _ref2.title,
          price = _ref2.price,
          description = _ref2.description,
          category = _ref2.category,
          image = _ref2.image;
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Product_Product__WEBPACK_IMPORTED_MODULE_2__.default, {
        id: id,
        title: title,
        price: price,
        description: description,
        category: category,
        image: image
      }, id, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 13
      }, _this);
    }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
      className: "md:col-span-full",
      src: "https://links.papareact.com/dyz",
      alt: ""
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "md:col-span-2",
      children: products.slice(4, 5).map(function (_ref3) {
        var id = _ref3.id,
            title = _ref3.title,
            price = _ref3.price,
            description = _ref3.description,
            category = _ref3.category,
            image = _ref3.image;
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Product_Product__WEBPACK_IMPORTED_MODULE_2__.default, {
          id: id,
          title: title,
          price: price,
          description: description,
          category: category,
          image: image
        }, id, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 15
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, this), products.slice(5, 9).map(function (_ref4) {
      var id = _ref4.id,
          title = _ref4.title,
          price = _ref4.price,
          description = _ref4.description,
          category = _ref4.category,
          image = _ref4.image;
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Product_Product__WEBPACK_IMPORTED_MODULE_2__.default, {
        id: id,
        title: title,
        price: price,
        description: description,
        category: category,
        image: image
      }, id, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 13
      }, _this);
    }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "md:col-span-2",
      children: products.slice(9, 10).map(function (_ref5) {
        var id = _ref5.id,
            title = _ref5.title,
            price = _ref5.price,
            description = _ref5.description,
            category = _ref5.category,
            image = _ref5.image;
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Product_Product__WEBPACK_IMPORTED_MODULE_2__.default, {
          id: id,
          title: title,
          price: price,
          description: description,
          category: category,
          image: image
        }, id, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 15
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, this), products.slice(10, products.length).map(function (_ref6) {
      var id = _ref6.id,
          title = _ref6.title,
          price = _ref6.price,
          description = _ref6.description,
          category = _ref6.category,
          image = _ref6.image;
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Product_Product__WEBPACK_IMPORTED_MODULE_2__.default, {
        id: id,
        title: title,
        price: price,
        description: description,
        category: category,
        image: image
      }, id, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 13
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

_c = ProductFeed;
/* harmony default export */ __webpack_exports__["default"] = (ProductFeed);

var _c;

$RefreshReg$(_c, "ProductFeed");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdEZlZWQvUHJvZHVjdEZlZWQuanN4Il0sIm5hbWVzIjpbIlByb2R1Y3RGZWVkIiwicHJvZHVjdHMiLCJzbGljZSIsIm1hcCIsImlkIiwidGl0bGUiLCJwcmljZSIsImRlc2NyaXB0aW9uIiwiY2F0ZWdvcnkiLCJpbWFnZSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxXQUFULE9BQW1DO0FBQUE7O0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZO0FBQ2pDLHNCQUNFO0FBQUssYUFBUyxFQUFDLHlGQUFmO0FBQUEsZUFDR0EsUUFBUSxDQUNOQyxLQURGLENBQ1EsQ0FEUixFQUNXLENBRFgsRUFFRUMsR0FGRixDQUVNLGlCQUF3RDtBQUFBLFVBQXJEQyxFQUFxRCxTQUFyREEsRUFBcUQ7QUFBQSxVQUFqREMsS0FBaUQsU0FBakRBLEtBQWlEO0FBQUEsVUFBMUNDLEtBQTBDLFNBQTFDQSxLQUEwQztBQUFBLFVBQW5DQyxXQUFtQyxTQUFuQ0EsV0FBbUM7QUFBQSxVQUF0QkMsUUFBc0IsU0FBdEJBLFFBQXNCO0FBQUEsVUFBWkMsS0FBWSxTQUFaQSxLQUFZO0FBQzNELDBCQUNFLDhEQUFDLHFEQUFEO0FBRUUsVUFBRSxFQUFFTCxFQUZOO0FBR0UsYUFBSyxFQUFFQyxLQUhUO0FBSUUsYUFBSyxFQUFFQyxLQUpUO0FBS0UsbUJBQVcsRUFBRUMsV0FMZjtBQU1FLGdCQUFRLEVBQUVDLFFBTlo7QUFPRSxhQUFLLEVBQUVDO0FBUFQsU0FDT0wsRUFEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFXRCxLQWRGLENBREgsZUFnQkU7QUFDRSxlQUFTLEVBQUMsa0JBRFo7QUFFRSxTQUFHLEVBQUMsaUNBRk47QUFHRSxTQUFHLEVBQUM7QUFITjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBaEJGLGVBcUJFO0FBQUssZUFBUyxFQUFDLGVB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bUJBQVcsRUFBRUMsV0FMZjtBQU1FLGdCQUFRLEVBQUVDLFFBTlo7QUFPRSxhQUFLLEVBQUVDO0FBUFQsU0FDT0wsRUFEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFXRCxLQWRGLENBdEVIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBd0ZEOztLQXpGUUosVztBQTJGVCwrREFBZUEsV0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4yMjQzYWIwMTJkMzNkZjhjYTJjMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvZHVjdCBmcm9tIFwiLi4vUHJvZHVjdC9Qcm9kdWN0XCI7XHJcblxyXG5mdW5jdGlvbiBQcm9kdWN0RmVlZCh7IHByb2R1Y3RzIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtZmxvdy1yb3ctZGVuc2UgbWQ6Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgeGw6Z3JpZC1jb2xzLTQgbWQ6LW10LTUyIG14LWF1dG9cIj5cclxuICAgICAge3Byb2R1Y3RzXHJcbiAgICAgICAgLnNsaWNlKDAsIDQpXHJcbiAgICAgICAgLm1hcCgoeyBpZCwgdGl0bGUsIHByaWNlLCBkZXNjcmlwdGlvbiwgY2F0ZWdvcnksIGltYWdlIH0pID0+IHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxQcm9kdWN0XHJcbiAgICAgICAgICAgICAga2V5PXtpZH1cclxuICAgICAgICAgICAgICBpZD17aWR9XHJcbiAgICAgICAgICAgICAgdGl0bGU9e3RpdGxlfVxyXG4gICAgICAgICAgICAgIHByaWNlPXtwcmljZX1cclxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgY2F0ZWdvcnk9e2NhdGVnb3J5fVxyXG4gICAgICAgICAgICAgIGltYWdlPXtpbWFnZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDxpbWdcclxuICAgICAgICBjbGFzc05hbWU9XCJtZDpjb2wtc3Bhbi1mdWxsXCJcclxuICAgICAgICBzcmM9XCJodHRwczovL2xpbmtzLnBhcGFyZWFjdC5jb20vZHl6XCJcclxuICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOmNvbC1zcGFuLTJcIj5cclxuICAgICAgICB7cHJvZHVjdHNcclxuICAgICAgICAgIC5zbGljZSg0LCA1KVxyXG4gICAgICAgICAgLm1hcCgoeyBpZCwgdGl0bGUsIHByaWNlLCBkZXNjcmlwdGlvbiwgY2F0ZWdvcnksIGltYWdlIH0pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8UHJvZHVjdFxyXG4gICAgICAgICAgICAgICAga2V5PXtpZH1cclxuICAgICAgICAgICAgICAgIGlkPXtpZH1cclxuICAgICAgICAgICAgICAgIHRpdGxlPXt0aXRsZX1cclxuICAgICAgICAgICAgICAgIHByaWNlPXtwcmljZX1cclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5PXtjYXRlZ29yeX1cclxuICAgICAgICAgICAgICAgIGltYWdlPXtpbWFnZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7cHJvZHVjdHNcclxuICAgICAgICAuc2xpY2UoNSwgOSlcclxuICAgICAgICAubWFwKCh7IGlkLCB0aXRsZSwgcHJpY2UsIGRlc2NyaXB0aW9uLCBjYXRlZ29yeSwgaW1hZ2UgfSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFByb2R1Y3RcclxuICAgICAgICAgICAgICBrZXk9e2lkfVxyXG4gICAgICAgICAgICAgIGlkPXtpZH1cclxuICAgICAgICAgICAgICB0aXRsZT17dGl0bGV9XHJcbiAgICAgICAgICAgICAgcHJpY2U9e3ByaWNlfVxyXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICBjYXRlZ29yeT17Y2F0ZWdvcnl9XHJcbiAgICAgICAgICAgICAgaW1hZ2U9e2ltYWdlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDpjb2wtc3Bhbi0yXCI+XHJcbiAgICAgICAge3Byb2R1Y3RzXHJcbiAgICAgICAgICAuc2xpY2UoOSwgMTApXHJcbiAgICAgICAgICAubWFwKCh7IGlkLCB0aXRsZSwgcHJpY2UsIGRlc2NyaXB0aW9uLCBjYXRlZ29yeSwgaW1hZ2UgfSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxQcm9kdWN0XHJcbiAgICAgICAgICAgICAgICBrZXk9e2lkfVxyXG4gICAgICAgICAgICAgICAgaWQ9e2lkfVxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e3RpdGxlfVxyXG4gICAgICAgICAgICAgICAgcHJpY2U9e3ByaWNlfVxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk9e2NhdGVnb3J5fVxyXG4gICAgICAgICAgICAgICAgaW1hZ2U9e2ltYWdlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtwcm9kdWN0c1xyXG4gICAgICAgIC5zbGljZSgxMCwgcHJvZHVjdHMubGVuZ3RoKVxyXG4gICAgICAgIC5tYXAoKHsgaWQsIHRpdGxlLCBwcmljZSwgZGVzY3JpcHRpb24sIGNhdGVnb3J5LCBpbWFnZSB9KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8UHJvZHVjdFxyXG4gICAgICAgICAgICAgIGtleT17aWR9XHJcbiAgICAgICAgICAgICAgaWQ9e2lkfVxyXG4gICAgICAgICAgICAgIHRpdGxlPXt0aXRsZX1cclxuICAgICAgICAgICAgICBwcmljZT17cHJpY2V9XHJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgIGNhdGVnb3J5PXtjYXRlZ29yeX1cclxuICAgICAgICAgICAgICBpbWFnZT17aW1hZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdEZlZWQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=