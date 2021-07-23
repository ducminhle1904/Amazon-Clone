self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/slices/basketSlice.js":
/*!***********************************!*\
  !*** ./src/slices/basketSlice.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "basketSlice": function() { return /* binding */ basketSlice; },
/* harmony export */   "addToBasket": function() { return /* binding */ addToBasket; },
/* harmony export */   "removeFromBasket": function() { return /* binding */ removeFromBasket; },
/* harmony export */   "selectItems": function() { return /* binding */ selectItems; },
/* harmony export */   "selectTotal": function() { return /* binding */ selectTotal; }
/* harmony export */ });
/* harmony import */ var D_Workspace_Expert_Amazon_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var initialState = {
  items: []
};
var basketSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({
  name: "basket",
  initialState: initialState,
  reducers: {
    addToBasket: function addToBasket(state, action) {
      state.items = [].concat((0,D_Workspace_Expert_Amazon_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(state.items), [action.payload]);
    },
    removeFromBasket: function removeFromBasket(state, action) {
      var index = state.items.findIndex(function (basket) {
        return basket.id === action.payload.id;
      });

      var newBasket = (0,D_Workspace_Expert_Amazon_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(state.items);

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn("Cant remove product (id: ".concat(action.payload.id, ") as its not in the basket"));
      }

      state.items = newBasket;
    }
  }
});
var _basketSlice$actions = basketSlice.actions,
    addToBasket = _basketSlice$actions.addToBasket,
    removeFromBasket = _basketSlice$actions.removeFromBasket; // Selectors - This is how we pull information from the Global store slice


var selectItems = function selectItems(state) {
  return state.basket.items;
};
var selectTotal = function selectTotal(state) {
  return state.basket.items.reduce(function (total, item) {
    return total + item.price;
  }, 0);
};
/* harmony default export */ __webpack_exports__["default"] = (basketSlice.reducer);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NsaWNlcy9iYXNrZXRTbGljZS5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJpdGVtcyIsImJhc2tldFNsaWNlIiwiY3JlYXRlU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJhZGRUb0Jhc2tldCIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsInJlbW92ZUZyb21CYXNrZXQiLCJpbmRleCIsImZpbmRJbmRleCIsImJhc2tldCIsImlkIiwibmV3QmFza2V0Iiwic3BsaWNlIiwiY29uc29sZSIsIndhcm4iLCJhY3Rpb25zIiwic2VsZWN0SXRlbXMiLCJzZWxlY3RUb3RhbCIsInJlZHVjZSIsInRvdGFsIiwiaXRlbSIsInByaWNlIiwicmVkdWNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSxJQUFNQSxZQUFZLEdBQUc7QUFDbkJDLE9BQUssRUFBRTtBQURZLENBQXJCO0FBSU8sSUFBTUMsV0FBVyxHQUFHQyw2REFBVyxDQUFDO0FBQ3JDQyxNQUFJLEVBQUUsUUFEK0I7QUFFckNKLGNBQVksRUFBWkEsWUFGcUM7QUFHckNLLFVBQVEsRUFBRTtBQUNSQyxlQUFXLEVBQUUscUJBQUNDLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUM5QkQsV0FBSyxDQUFDTixLQUFOLDJKQUFrQk0sS0FBSyxDQUFDTixLQUF4QixJQUErQk8sTUFBTSxDQUFDQyxPQUF0QztBQUNELEtBSE87QUFJUkMsb0JBQWdCLEVBQUUsMEJBQUNILEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUNuQyxVQUFNRyxLQUFLLEdBQUdKLEtBQUssQ0FBQ04sS0FBTixDQUFZVyxTQUFaLENBQ1osVUFBQ0MsTUFBRDtBQUFBLGVBQVlBLE1BQU0sQ0FBQ0MsRUFBUCxLQUFjTixNQUFNLENBQUNDLE9BQVAsQ0FBZUssRUFBekM7QUFBQSxPQURZLENBQWQ7O0FBR0EsVUFBSUMsU0FBUyxHQUFHLDhJQUFJUixLQUFLLENBQUNOLEtBQWIsQ0FBYjs7QUFDQSxVQUFJVSxLQUFLLElBQUksQ0FBYixFQUFnQjtBQUNkSSxpQkFBUyxDQUFDQyxNQUFWLENBQWlCTCxLQUFqQixFQUF3QixDQUF4QjtBQUNELE9BRkQsTUFFTztBQUNMTSxlQUFPLENBQUNDLElBQVIsb0NBQzhCVixNQUFNLENBQUNDLE9BQVAsQ0FBZUssRUFEN0M7QUFHRDs7QUFDRFAsV0FBSyxDQUFDTixLQUFOLEdBQWNjLFNBQWQ7QUFDRDtBQWpCTztBQUgyQixDQUFELENBQS9COzJCQXdCMENiLFdBQVcsQ0FBQ2lCLE87SUFBOUNiLFcsd0JBQUFBLFc7SUFBYUksZ0Isd0JBQUFBLGdCLEVBRTVCOzs7QUFDTyxJQUFNVSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDYixLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDTSxNQUFOLENBQWFaLEtBQXhCO0FBQUEsQ0FBcEI7QUFDQSxJQUFNb0IsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ2QsS0FBRDtBQUFBLFNBQ3pCQSxLQUFLLENBQUNNLE1BQU4sQ0FBYVosS0FBYixDQUFtQnFCLE1BQW5CLENBQTBCLFVBQUNDLEtBQUQsRUFBUUMsSUFBUjtBQUFBLFdBQWlCRCxLQUFLLEdBQUdDLElBQUksQ0FBQ0MsS0FBOUI7QUFBQSxHQUExQixFQUErRCxDQUEvRCxDQUR5QjtBQUFBLENBQXBCO0FBR1AsK0RBQWV2QixXQUFXLENBQUN3QixPQUEzQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hMzhiMmMwNjlmMjhlOTEwYWZkZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGl0ZW1zOiBbXSxcbn07XG5cbmV4cG9ydCBjb25zdCBiYXNrZXRTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZTogXCJiYXNrZXRcIixcbiAgaW5pdGlhbFN0YXRlLFxuICByZWR1Y2Vyczoge1xuICAgIGFkZFRvQmFza2V0OiAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgc3RhdGUuaXRlbXMgPSBbLi4uc3RhdGUuaXRlbXMsIGFjdGlvbi5wYXlsb2FkXTtcbiAgICB9LFxuICAgIHJlbW92ZUZyb21CYXNrZXQ6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICBjb25zdCBpbmRleCA9IHN0YXRlLml0ZW1zLmZpbmRJbmRleChcbiAgICAgICAgKGJhc2tldCkgPT4gYmFza2V0LmlkID09PSBhY3Rpb24ucGF5bG9hZC5pZFxuICAgICAgKTtcbiAgICAgIGxldCBuZXdCYXNrZXQgPSBbLi4uc3RhdGUuaXRlbXNdO1xuICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgbmV3QmFza2V0LnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgYENhbnQgcmVtb3ZlIHByb2R1Y3QgKGlkOiAke2FjdGlvbi5wYXlsb2FkLmlkfSkgYXMgaXRzIG5vdCBpbiB0aGUgYmFza2V0YFxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgc3RhdGUuaXRlbXMgPSBuZXdCYXNrZXQ7XG4gICAgfSxcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgeyBhZGRUb0Jhc2tldCwgcmVtb3ZlRnJvbUJhc2tldCB9ID0gYmFza2V0U2xpY2UuYWN0aW9ucztcblxuLy8gU2VsZWN0b3JzIC0gVGhpcyBpcyBob3cgd2UgcHVsbCBpbmZvcm1hdGlvbiBmcm9tIHRoZSBHbG9iYWwgc3RvcmUgc2xpY2VcbmV4cG9ydCBjb25zdCBzZWxlY3RJdGVtcyA9IChzdGF0ZSkgPT4gc3RhdGUuYmFza2V0Lml0ZW1zO1xuZXhwb3J0IGNvbnN0IHNlbGVjdFRvdGFsID0gKHN0YXRlKSA9PlxuICBzdGF0ZS5iYXNrZXQuaXRlbXMucmVkdWNlKCh0b3RhbCwgaXRlbSkgPT4gdG90YWwgKyBpdGVtLnByaWNlLCAwKTtcblxuZXhwb3J0IGRlZmF1bHQgYmFza2V0U2xpY2UucmVkdWNlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=