self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _extends; }
/* harmony export */ });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _objectSpread2; }
/* harmony export */ });
/* harmony import */ var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        (0,_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _objectWithoutPropertiesLoose; }
/* harmony export */ });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

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

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default().useState(Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING),
      _React$useState2 = (0,D_Workspace_Expert_Amazon_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState, 1),
      rating = _React$useState2[0];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_3___default().useState(Math.random() < 0.5),
      _React$useState4 = (0,D_Workspace_Expert_Amazon_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState3, 1),
      hasPrime = _React$useState4[0];

  var addItemToBasket = function addItemToBasket() {};

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "relative flex flex-col m-5 bg-white z-30 p-10 rounded-2xl shadow-md",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: "absolute top-2 right-2 text-xs italic text-gray-400",
      children: category
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
      src: image,
      height: 200,
      width: 200,
      objectFit: "contain"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
      className: "my-3",
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex",
      children: Array(rating).fill().map(function (_, i) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__.StarIcon, {
          className: "h-5 text-yellow-500"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 13
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: "text-xs my-2 line-clamp-2",
      children: description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "mb-5",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_currency_formatter__WEBPACK_IMPORTED_MODULE_5___default()), {
        quantity: price,
        currency: "USD"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, this), hasPrime && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex items-center space-x-2 -mt-5",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        className: "w-12",
        src: "https://links.papareact.com/fdw",
        alt: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "text-xs text-gray-500",
        children: "Free Next-day Delivery"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      className: "mt-auto button",
      onClick: addItemToBasket,
      children: "Add to Basket"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

_s(Product, "iAFI4jNUmIsuo72nUPAkXMwMyHY=");

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


/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var reactIs = __webpack_require__(/*! react-is */ "./node_modules/hoist-non-react-statics/node_modules/react-is/index.js");

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.development.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.development.js ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/hoist-non-react-statics/node_modules/react-is/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/node_modules/react-is/index.js ***!
  \*****************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-redux/es/components/Context.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/components/Context.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReactReduxContext": function() { return /* binding */ ReactReduxContext; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var ReactReduxContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext(null);

if (true) {
  ReactReduxContext.displayName = 'ReactRedux';
}

/* harmony default export */ __webpack_exports__["default"] = (ReactReduxContext);

/***/ }),

/***/ "./node_modules/react-redux/es/components/Provider.js":
/*!************************************************************!*\
  !*** ./node_modules/react-redux/es/components/Provider.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Context */ "./node_modules/react-redux/es/components/Context.js");
/* harmony import */ var _utils_Subscription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/Subscription */ "./node_modules/react-redux/es/utils/Subscription.js");





function Provider(_ref) {
  var store = _ref.store,
      context = _ref.context,
      children = _ref.children;
  var contextValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    var subscription = new _utils_Subscription__WEBPACK_IMPORTED_MODULE_3__.default(store);
    subscription.onStateChange = subscription.notifyNestedSubs;
    return {
      store: store,
      subscription: subscription
    };
  }, [store]);
  var previousState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return store.getState();
  }, [store]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var subscription = contextValue.subscription;
    subscription.trySubscribe();

    if (previousState !== store.getState()) {
      subscription.notifyNestedSubs();
    }

    return function () {
      subscription.tryUnsubscribe();
      subscription.onStateChange = null;
    };
  }, [contextValue, previousState]);
  var Context = context || _Context__WEBPACK_IMPORTED_MODULE_2__.ReactReduxContext;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Context.Provider, {
    value: contextValue
  }, children);
}

if (true) {
  Provider.propTypes = {
    store: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
      subscribe: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
      dispatch: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
      getState: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired)
    }),
    context: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
    children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().any)
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Provider);

/***/ }),

/***/ "./node_modules/react-redux/es/components/connectAdvanced.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-redux/es/components/connectAdvanced.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ connectAdvanced; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-is */ "./node_modules/react-redux/node_modules/react-is/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_Subscription__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/Subscription */ "./node_modules/react-redux/es/utils/Subscription.js");
/* harmony import */ var _utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/useIsomorphicLayoutEffect */ "./node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js");
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Context */ "./node_modules/react-redux/es/components/Context.js");







 // Define some constant arrays just to avoid re-creating these

var EMPTY_ARRAY = [];
var NO_SUBSCRIPTION_ARRAY = [null, null];

var stringifyComponent = function stringifyComponent(Comp) {
  try {
    return JSON.stringify(Comp);
  } catch (err) {
    return String(Comp);
  }
};

function storeStateUpdatesReducer(state, action) {
  var updateCount = state[1];
  return [action.payload, updateCount + 1];
}

function useIsomorphicLayoutEffectWithArgs(effectFunc, effectArgs, dependencies) {
  (0,_utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_6__.useIsomorphicLayoutEffect)(function () {
    return effectFunc.apply(void 0, effectArgs);
  }, dependencies);
}

function captureWrapperProps(lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, actualChildProps, childPropsFromStoreUpdate, notifyNestedSubs) {
  // We want to capture the wrapper props and child props we used for later comparisons
  lastWrapperProps.current = wrapperProps;
  lastChildProps.current = actualChildProps;
  renderIsScheduled.current = false; // If the render was from a store update, clear out that reference and cascade the subscriber update

  if (childPropsFromStoreUpdate.current) {
    childPropsFromStoreUpdate.current = null;
    notifyNestedSubs();
  }
}

function subscribeUpdates(shouldHandleStateChanges, store, subscription, childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, childPropsFromStoreUpdate, notifyNestedSubs, forceComponentUpdateDispatch) {
  // If we're not subscribed to the store, nothing to do here
  if (!shouldHandleStateChanges) return; // Capture values for checking if and when this component unmounts

  var didUnsubscribe = false;
  var lastThrownError = null; // We'll run this callback every time a store subscription update propagates to this component

  var checkForUpdates = function checkForUpdates() {
    if (didUnsubscribe) {
      // Don't run stale listeners.
      // Redux doesn't guarantee unsubscriptions happen until next dispatch.
      return;
    }

    var latestStoreState = store.getState();
    var newChildProps, error;

    try {
      // Actually run the selector with the most recent store state and wrapper props
      // to determine what the child props should be
      newChildProps = childPropsSelector(latestStoreState, lastWrapperProps.current);
    } catch (e) {
      error = e;
      lastThrownError = e;
    }

    if (!error) {
      lastThrownError = null;
    } // If the child props haven't changed, nothing to do here - cascade the subscription update


    if (newChildProps === lastChildProps.current) {
      if (!renderIsScheduled.current) {
        notifyNestedSubs();
      }
    } else {
      // Save references to the new child props.  Note that we track the "child props from store update"
      // as a ref instead of a useState/useReducer because we need a way to determine if that value has
      // been processed.  If this went into useState/useReducer, we couldn't clear out the value without
      // forcing another re-render, which we don't want.
      lastChildProps.current = newChildProps;
      childPropsFromStoreUpdate.current = newChildProps;
      renderIsScheduled.current = true; // If the child props _did_ change (or we caught an error), this wrapper component needs to re-render

      forceComponentUpdateDispatch({
        type: 'STORE_UPDATED',
        payload: {
          error: error
        }
      });
    }
  }; // Actually subscribe to the nearest connected ancestor (or store)


  subscription.onStateChange = checkForUpdates;
  subscription.trySubscribe(); // Pull data from the store after first render in case the store has
  // changed since we began.

  checkForUpdates();

  var unsubscribeWrapper = function unsubscribeWrapper() {
    didUnsubscribe = true;
    subscription.tryUnsubscribe();
    subscription.onStateChange = null;

    if (lastThrownError) {
      // It's possible that we caught an error due to a bad mapState function, but the
      // parent re-rendered without this component and we're about to unmount.
      // This shouldn't happen as long as we do top-down subscriptions correctly, but
      // if we ever do those wrong, this throw will surface the error in our tests.
      // In that case, throw the error from here so it doesn't get lost.
      throw lastThrownError;
    }
  };

  return unsubscribeWrapper;
}

var initStateUpdates = function initStateUpdates() {
  return [null, 0];
};

function connectAdvanced(
/*
  selectorFactory is a func that is responsible for returning the selector function used to
  compute new props from state, props, and dispatch. For example:
     export default connectAdvanced((dispatch, options) => (state, props) => ({
      thing: state.things[props.thingId],
      saveThing: fields => dispatch(actionCreators.saveThing(props.thingId, fields)),
    }))(YourComponent)
   Access to dispatch is provided to the factory so selectorFactories can bind actionCreators
  outside of their selector as an optimization. Options passed to connectAdvanced are passed to
  the selectorFactory, along with displayName and WrappedComponent, as the second argument.
   Note that selectorFactory is responsible for all caching/memoization of inbound and outbound
  props. Do not use connectAdvanced directly without memoizing results between calls to your
  selector, otherwise the Connect component will re-render on every state or props change.
*/
selectorFactory, // options object:
_ref) {
  if (_ref === void 0) {
    _ref = {};
  }

  var _ref2 = _ref,
      _ref2$getDisplayName = _ref2.getDisplayName,
      getDisplayName = _ref2$getDisplayName === void 0 ? function (name) {
    return "ConnectAdvanced(" + name + ")";
  } : _ref2$getDisplayName,
      _ref2$methodName = _ref2.methodName,
      methodName = _ref2$methodName === void 0 ? 'connectAdvanced' : _ref2$methodName,
      _ref2$renderCountProp = _ref2.renderCountProp,
      renderCountProp = _ref2$renderCountProp === void 0 ? undefined : _ref2$renderCountProp,
      _ref2$shouldHandleSta = _ref2.shouldHandleStateChanges,
      shouldHandleStateChanges = _ref2$shouldHandleSta === void 0 ? true : _ref2$shouldHandleSta,
      _ref2$storeKey = _ref2.storeKey,
      storeKey = _ref2$storeKey === void 0 ? 'store' : _ref2$storeKey,
      _ref2$withRef = _ref2.withRef,
      withRef = _ref2$withRef === void 0 ? false : _ref2$withRef,
      _ref2$forwardRef = _ref2.forwardRef,
      forwardRef = _ref2$forwardRef === void 0 ? false : _ref2$forwardRef,
      _ref2$context = _ref2.context,
      context = _ref2$context === void 0 ? _Context__WEBPACK_IMPORTED_MODULE_7__.ReactReduxContext : _ref2$context,
      connectOptions = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__.default)(_ref2, ["getDisplayName", "methodName", "renderCountProp", "shouldHandleStateChanges", "storeKey", "withRef", "forwardRef", "context"]);

  if (true) {
    if (renderCountProp !== undefined) {
      throw new Error("renderCountProp is removed. render counting is built into the latest React Dev Tools profiling extension");
    }

    if (withRef) {
      throw new Error('withRef is removed. To access the wrapped instance, use a ref on the connected component');
    }

    var customStoreWarningMessage = 'To use a custom Redux store for specific components, create a custom React context with ' + "React.createContext(), and pass the context object to React Redux's Provider and specific components" + ' like: <Provider context={MyContext}><ConnectedComponent context={MyContext} /></Provider>. ' + 'You may also pass a {context : MyContext} option to connect';

    if (storeKey !== 'store') {
      throw new Error('storeKey has been removed and does not do anything. ' + customStoreWarningMessage);
    }
  }

  var Context = context;
  return function wrapWithConnect(WrappedComponent) {
    if ( true && !(0,react_is__WEBPACK_IMPORTED_MODULE_4__.isValidElementType)(WrappedComponent)) {
      throw new Error("You must pass a component to the function returned by " + (methodName + ". Instead received " + stringifyComponent(WrappedComponent)));
    }

    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
    var displayName = getDisplayName(wrappedComponentName);

    var selectorFactoryOptions = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, connectOptions, {
      getDisplayName: getDisplayName,
      methodName: methodName,
      renderCountProp: renderCountProp,
      shouldHandleStateChanges: shouldHandleStateChanges,
      storeKey: storeKey,
      displayName: displayName,
      wrappedComponentName: wrappedComponentName,
      WrappedComponent: WrappedComponent
    });

    var pure = connectOptions.pure;

    function createChildSelector(store) {
      return selectorFactory(store.dispatch, selectorFactoryOptions);
    } // If we aren't running in "pure" mode, we don't want to memoize values.
    // To avoid conditionally calling hooks, we fall back to a tiny wrapper
    // that just executes the given callback immediately.


    var usePureOnlyMemo = pure ? react__WEBPACK_IMPORTED_MODULE_3__.useMemo : function (callback) {
      return callback();
    };

    function ConnectFunction(props) {
      var _useMemo = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(function () {
        // Distinguish between actual "data" props that were passed to the wrapper component,
        // and values needed to control behavior (forwarded refs, alternate context instances).
        // To maintain the wrapperProps object reference, memoize this destructuring.
        var reactReduxForwardedRef = props.reactReduxForwardedRef,
            wrapperProps = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["reactReduxForwardedRef"]);

        return [props.context, reactReduxForwardedRef, wrapperProps];
      }, [props]),
          propsContext = _useMemo[0],
          reactReduxForwardedRef = _useMemo[1],
          wrapperProps = _useMemo[2];

      var ContextToUse = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(function () {
        // Users may optionally pass in a custom context instance to use instead of our ReactReduxContext.
        // Memoize the check that determines which context instance we should use.
        return propsContext && propsContext.Consumer && (0,react_is__WEBPACK_IMPORTED_MODULE_4__.isContextConsumer)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(propsContext.Consumer, null)) ? propsContext : Context;
      }, [propsContext, Context]); // Retrieve the store and ancestor subscription via context, if available

      var contextValue = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(ContextToUse); // The store _must_ exist as either a prop or in context.
      // We'll check to see if it _looks_ like a Redux store first.
      // This allows us to pass through a `store` prop that is just a plain value.

      var didStoreComeFromProps = Boolean(props.store) && Boolean(props.store.getState) && Boolean(props.store.dispatch);
      var didStoreComeFromContext = Boolean(contextValue) && Boolean(contextValue.store);

      if ( true && !didStoreComeFromProps && !didStoreComeFromContext) {
        throw new Error("Could not find \"store\" in the context of " + ("\"" + displayName + "\". Either wrap the root component in a <Provider>, ") + "or pass a custom React context provider to <Provider> and the corresponding " + ("React context consumer to " + displayName + " in connect options."));
      } // Based on the previous check, one of these must be true


      var store = didStoreComeFromProps ? props.store : contextValue.store;
      var childPropsSelector = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(function () {
        // The child props selector needs the store reference as an input.
        // Re-create this selector whenever the store changes.
        return createChildSelector(store);
      }, [store]);

      var _useMemo2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(function () {
        if (!shouldHandleStateChanges) return NO_SUBSCRIPTION_ARRAY; // This Subscription's source should match where store came from: props vs. context. A component
        // connected to the store via props shouldn't use subscription from context, or vice versa.

        var subscription = new _utils_Subscription__WEBPACK_IMPORTED_MODULE_5__.default(store, didStoreComeFromProps ? null : contextValue.subscription); // `notifyNestedSubs` is duplicated to handle the case where the component is unmounted in
        // the middle of the notification loop, where `subscription` will then be null. This can
        // probably be avoided if Subscription's listeners logic is changed to not call listeners
        // that have been unsubscribed in the  middle of the notification loop.

        var notifyNestedSubs = subscription.notifyNestedSubs.bind(subscription);
        return [subscription, notifyNestedSubs];
      }, [store, didStoreComeFromProps, contextValue]),
          subscription = _useMemo2[0],
          notifyNestedSubs = _useMemo2[1]; // Determine what {store, subscription} value should be put into nested context, if necessary,
      // and memoize that value to avoid unnecessary context updates.


      var overriddenContextValue = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(function () {
        if (didStoreComeFromProps) {
          // This component is directly subscribed to a store from props.
          // We don't want descendants reading from this store - pass down whatever
          // the existing context value is from the nearest connected ancestor.
          return contextValue;
        } // Otherwise, put this component's subscription instance into context, so that
        // connected descendants won't update until after this component is done


        return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, contextValue, {
          subscription: subscription
        });
      }, [didStoreComeFromProps, contextValue, subscription]); // We need to force this wrapper component to re-render whenever a Redux store update
      // causes a change to the calculated child component props (or we caught an error in mapState)

      var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_3__.useReducer)(storeStateUpdatesReducer, EMPTY_ARRAY, initStateUpdates),
          _useReducer$ = _useReducer[0],
          previousStateUpdateResult = _useReducer$[0],
          forceComponentUpdateDispatch = _useReducer[1]; // Propagate any mapState/mapDispatch errors upwards


      if (previousStateUpdateResult && previousStateUpdateResult.error) {
        throw previousStateUpdateResult.error;
      } // Set up refs to coordinate values between the subscription effect and the render logic


      var lastChildProps = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();
      var lastWrapperProps = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(wrapperProps);
      var childPropsFromStoreUpdate = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();
      var renderIsScheduled = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(false);
      var actualChildProps = usePureOnlyMemo(function () {
        // Tricky logic here:
        // - This render may have been triggered by a Redux store update that produced new child props
        // - However, we may have gotten new wrapper props after that
        // If we have new child props, and the same wrapper props, we know we should use the new child props as-is.
        // But, if we have new wrapper props, those might change the child props, so we have to recalculate things.
        // So, we'll use the child props from store update only if the wrapper props are the same as last time.
        if (childPropsFromStoreUpdate.current && wrapperProps === lastWrapperProps.current) {
          return childPropsFromStoreUpdate.current;
        } // TODO We're reading the store directly in render() here. Bad idea?
        // This will likely cause Bad Things (TM) to happen in Concurrent Mode.
        // Note that we do this because on renders _not_ caused by store updates, we need the latest store state
        // to determine what the child props should be.


        return childPropsSelector(store.getState(), wrapperProps);
      }, [store, previousStateUpdateResult, wrapperProps]); // We need this to execute synchronously every time we re-render. However, React warns
      // about useLayoutEffect in SSR, so we try to detect environment and fall back to
      // just useEffect instead to avoid the warning, since neither will run anyway.

      useIsomorphicLayoutEffectWithArgs(captureWrapperProps, [lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, actualChildProps, childPropsFromStoreUpdate, notifyNestedSubs]); // Our re-subscribe logic only runs when the store/subscription setup changes

      useIsomorphicLayoutEffectWithArgs(subscribeUpdates, [shouldHandleStateChanges, store, subscription, childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, childPropsFromStoreUpdate, notifyNestedSubs, forceComponentUpdateDispatch], [store, subscription, childPropsSelector]); // Now that all that's done, we can finally try to actually render the child component.
      // We memoize the elements for the rendered child component as an optimization.

      var renderedWrappedComponent = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(function () {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(WrappedComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, actualChildProps, {
          ref: reactReduxForwardedRef
        }));
      }, [reactReduxForwardedRef, WrappedComponent, actualChildProps]); // If React sees the exact same element reference as last time, it bails out of re-rendering
      // that child, same as if it was wrapped in React.memo() or returned false from shouldComponentUpdate.

      var renderedChild = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(function () {
        if (shouldHandleStateChanges) {
          // If this component is subscribed to store updates, we need to pass its own
          // subscription instance down to our descendants. That means rendering the same
          // Context instance, and putting a different value into the context.
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(ContextToUse.Provider, {
            value: overriddenContextValue
          }, renderedWrappedComponent);
        }

        return renderedWrappedComponent;
      }, [ContextToUse, renderedWrappedComponent, overriddenContextValue]);
      return renderedChild;
    } // If we're in "pure" mode, ensure our wrapper component only re-renders when incoming props have changed.


    var Connect = pure ? react__WEBPACK_IMPORTED_MODULE_3___default().memo(ConnectFunction) : ConnectFunction;
    Connect.WrappedComponent = WrappedComponent;
    Connect.displayName = displayName;

    if (forwardRef) {
      var forwarded = react__WEBPACK_IMPORTED_MODULE_3___default().forwardRef(function forwardConnectRef(props, ref) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(Connect, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, props, {
          reactReduxForwardedRef: ref
        }));
      });
      forwarded.displayName = displayName;
      forwarded.WrappedComponent = WrappedComponent;
      return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default()(forwarded, WrappedComponent);
    }

    return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default()(Connect, WrappedComponent);
  };
}

/***/ }),

/***/ "./node_modules/react-redux/es/connect/connect.js":
/*!********************************************************!*\
  !*** ./node_modules/react-redux/es/connect/connect.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createConnect": function() { return /* binding */ createConnect; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _components_connectAdvanced__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/connectAdvanced */ "./node_modules/react-redux/es/components/connectAdvanced.js");
/* harmony import */ var _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/shallowEqual */ "./node_modules/react-redux/es/utils/shallowEqual.js");
/* harmony import */ var _mapDispatchToProps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mapDispatchToProps */ "./node_modules/react-redux/es/connect/mapDispatchToProps.js");
/* harmony import */ var _mapStateToProps__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mapStateToProps */ "./node_modules/react-redux/es/connect/mapStateToProps.js");
/* harmony import */ var _mergeProps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mergeProps */ "./node_modules/react-redux/es/connect/mergeProps.js");
/* harmony import */ var _selectorFactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./selectorFactory */ "./node_modules/react-redux/es/connect/selectorFactory.js");








/*
  connect is a facade over connectAdvanced. It turns its args into a compatible
  selectorFactory, which has the signature:

    (dispatch, options) => (nextState, nextOwnProps) => nextFinalProps
  
  connect passes its args to connectAdvanced as options, which will in turn pass them to
  selectorFactory each time a Connect component instance is instantiated or hot reloaded.

  selectorFactory returns a final props selector from its mapStateToProps,
  mapStateToPropsFactories, mapDispatchToProps, mapDispatchToPropsFactories, mergeProps,
  mergePropsFactories, and pure args.

  The resulting final props selector is called by the Connect component instance whenever
  it receives new props or store state.
 */

function match(arg, factories, name) {
  for (var i = factories.length - 1; i >= 0; i--) {
    var result = factories[i](arg);
    if (result) return result;
  }

  return function (dispatch, options) {
    throw new Error("Invalid value of type " + typeof arg + " for " + name + " argument when connecting component " + options.wrappedComponentName + ".");
  };
}

function strictEqual(a, b) {
  return a === b;
} // createConnect with default args builds the 'official' connect behavior. Calling it with
// different options opens up some testing and extensibility scenarios


function createConnect(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$connectHOC = _ref.connectHOC,
      connectHOC = _ref$connectHOC === void 0 ? _components_connectAdvanced__WEBPACK_IMPORTED_MODULE_2__.default : _ref$connectHOC,
      _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
      mapStateToPropsFactories = _ref$mapStateToPropsF === void 0 ? _mapStateToProps__WEBPACK_IMPORTED_MODULE_5__.default : _ref$mapStateToPropsF,
      _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,
      mapDispatchToPropsFactories = _ref$mapDispatchToPro === void 0 ? _mapDispatchToProps__WEBPACK_IMPORTED_MODULE_4__.default : _ref$mapDispatchToPro,
      _ref$mergePropsFactor = _ref.mergePropsFactories,
      mergePropsFactories = _ref$mergePropsFactor === void 0 ? _mergeProps__WEBPACK_IMPORTED_MODULE_6__.default : _ref$mergePropsFactor,
      _ref$selectorFactory = _ref.selectorFactory,
      selectorFactory = _ref$selectorFactory === void 0 ? _selectorFactory__WEBPACK_IMPORTED_MODULE_7__.default : _ref$selectorFactory;

  return function connect(mapStateToProps, mapDispatchToProps, mergeProps, _ref2) {
    if (_ref2 === void 0) {
      _ref2 = {};
    }

    var _ref3 = _ref2,
        _ref3$pure = _ref3.pure,
        pure = _ref3$pure === void 0 ? true : _ref3$pure,
        _ref3$areStatesEqual = _ref3.areStatesEqual,
        areStatesEqual = _ref3$areStatesEqual === void 0 ? strictEqual : _ref3$areStatesEqual,
        _ref3$areOwnPropsEqua = _ref3.areOwnPropsEqual,
        areOwnPropsEqual = _ref3$areOwnPropsEqua === void 0 ? _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_3__.default : _ref3$areOwnPropsEqua,
        _ref3$areStatePropsEq = _ref3.areStatePropsEqual,
        areStatePropsEqual = _ref3$areStatePropsEq === void 0 ? _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_3__.default : _ref3$areStatePropsEq,
        _ref3$areMergedPropsE = _ref3.areMergedPropsEqual,
        areMergedPropsEqual = _ref3$areMergedPropsE === void 0 ? _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_3__.default : _ref3$areMergedPropsE,
        extraOptions = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__.default)(_ref3, ["pure", "areStatesEqual", "areOwnPropsEqual", "areStatePropsEqual", "areMergedPropsEqual"]);

    var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');
    var initMapDispatchToProps = match(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');
    var initMergeProps = match(mergeProps, mergePropsFactories, 'mergeProps');
    return connectHOC(selectorFactory, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
      // used in error messages
      methodName: 'connect',
      // used to compute Connect's displayName from the wrapped component's displayName.
      getDisplayName: function getDisplayName(name) {
        return "Connect(" + name + ")";
      },
      // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
      shouldHandleStateChanges: Boolean(mapStateToProps),
      // passed through to selectorFactory
      initMapStateToProps: initMapStateToProps,
      initMapDispatchToProps: initMapDispatchToProps,
      initMergeProps: initMergeProps,
      pure: pure,
      areStatesEqual: areStatesEqual,
      areOwnPropsEqual: areOwnPropsEqual,
      areStatePropsEqual: areStatePropsEqual,
      areMergedPropsEqual: areMergedPropsEqual
    }, extraOptions));
  };
}
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/createConnect());

/***/ }),

/***/ "./node_modules/react-redux/es/connect/mapDispatchToProps.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/mapDispatchToProps.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "whenMapDispatchToPropsIsFunction": function() { return /* binding */ whenMapDispatchToPropsIsFunction; },
/* harmony export */   "whenMapDispatchToPropsIsMissing": function() { return /* binding */ whenMapDispatchToPropsIsMissing; },
/* harmony export */   "whenMapDispatchToPropsIsObject": function() { return /* binding */ whenMapDispatchToPropsIsObject; }
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wrapMapToProps */ "./node_modules/react-redux/es/connect/wrapMapToProps.js");


function whenMapDispatchToPropsIsFunction(mapDispatchToProps) {
  return typeof mapDispatchToProps === 'function' ? (0,_wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__.wrapMapToPropsFunc)(mapDispatchToProps, 'mapDispatchToProps') : undefined;
}
function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
  return !mapDispatchToProps ? (0,_wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__.wrapMapToPropsConstant)(function (dispatch) {
    return {
      dispatch: dispatch
    };
  }) : undefined;
}
function whenMapDispatchToPropsIsObject(mapDispatchToProps) {
  return mapDispatchToProps && typeof mapDispatchToProps === 'object' ? (0,_wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__.wrapMapToPropsConstant)(function (dispatch) {
    return (0,redux__WEBPACK_IMPORTED_MODULE_1__.bindActionCreators)(mapDispatchToProps, dispatch);
  }) : undefined;
}
/* harmony default export */ __webpack_exports__["default"] = ([whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject]);

/***/ }),

/***/ "./node_modules/react-redux/es/connect/mapStateToProps.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/mapStateToProps.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "whenMapStateToPropsIsFunction": function() { return /* binding */ whenMapStateToPropsIsFunction; },
/* harmony export */   "whenMapStateToPropsIsMissing": function() { return /* binding */ whenMapStateToPropsIsMissing; }
/* harmony export */ });
/* harmony import */ var _wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wrapMapToProps */ "./node_modules/react-redux/es/connect/wrapMapToProps.js");

function whenMapStateToPropsIsFunction(mapStateToProps) {
  return typeof mapStateToProps === 'function' ? (0,_wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__.wrapMapToPropsFunc)(mapStateToProps, 'mapStateToProps') : undefined;
}
function whenMapStateToPropsIsMissing(mapStateToProps) {
  return !mapStateToProps ? (0,_wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__.wrapMapToPropsConstant)(function () {
    return {};
  }) : undefined;
}
/* harmony default export */ __webpack_exports__["default"] = ([whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing]);

/***/ }),

/***/ "./node_modules/react-redux/es/connect/mergeProps.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/connect/mergeProps.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultMergeProps": function() { return /* binding */ defaultMergeProps; },
/* harmony export */   "wrapMergePropsFunc": function() { return /* binding */ wrapMergePropsFunc; },
/* harmony export */   "whenMergePropsIsFunction": function() { return /* binding */ whenMergePropsIsFunction; },
/* harmony export */   "whenMergePropsIsOmitted": function() { return /* binding */ whenMergePropsIsOmitted; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/verifyPlainObject */ "./node_modules/react-redux/es/utils/verifyPlainObject.js");


function defaultMergeProps(stateProps, dispatchProps, ownProps) {
  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, ownProps, stateProps, dispatchProps);
}
function wrapMergePropsFunc(mergeProps) {
  return function initMergePropsProxy(dispatch, _ref) {
    var displayName = _ref.displayName,
        pure = _ref.pure,
        areMergedPropsEqual = _ref.areMergedPropsEqual;
    var hasRunOnce = false;
    var mergedProps;
    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
      var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);

      if (hasRunOnce) {
        if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
      } else {
        hasRunOnce = true;
        mergedProps = nextMergedProps;
        if (true) (0,_utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_1__.default)(mergedProps, displayName, 'mergeProps');
      }

      return mergedProps;
    };
  };
}
function whenMergePropsIsFunction(mergeProps) {
  return typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : undefined;
}
function whenMergePropsIsOmitted(mergeProps) {
  return !mergeProps ? function () {
    return defaultMergeProps;
  } : undefined;
}
/* harmony default export */ __webpack_exports__["default"] = ([whenMergePropsIsFunction, whenMergePropsIsOmitted]);

/***/ }),

/***/ "./node_modules/react-redux/es/connect/selectorFactory.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/selectorFactory.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "impureFinalPropsSelectorFactory": function() { return /* binding */ impureFinalPropsSelectorFactory; },
/* harmony export */   "pureFinalPropsSelectorFactory": function() { return /* binding */ pureFinalPropsSelectorFactory; },
/* harmony export */   "default": function() { return /* binding */ finalPropsSelectorFactory; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _verifySubselectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verifySubselectors */ "./node_modules/react-redux/es/connect/verifySubselectors.js");


function impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch) {
  return function impureFinalPropsSelector(state, ownProps) {
    return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps(dispatch, ownProps), ownProps);
  };
}
function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, _ref) {
  var areStatesEqual = _ref.areStatesEqual,
      areOwnPropsEqual = _ref.areOwnPropsEqual,
      areStatePropsEqual = _ref.areStatePropsEqual;
  var hasRunAtLeastOnce = false;
  var state;
  var ownProps;
  var stateProps;
  var dispatchProps;
  var mergedProps;

  function handleFirstCall(firstState, firstOwnProps) {
    state = firstState;
    ownProps = firstOwnProps;
    stateProps = mapStateToProps(state, ownProps);
    dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    hasRunAtLeastOnce = true;
    return mergedProps;
  }

  function handleNewPropsAndNewState() {
    stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewProps() {
    if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewState() {
    var nextStateProps = mapStateToProps(state, ownProps);
    var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
    stateProps = nextStateProps;
    if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleSubsequentCalls(nextState, nextOwnProps) {
    var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
    var stateChanged = !areStatesEqual(nextState, state);
    state = nextState;
    ownProps = nextOwnProps;
    if (propsChanged && stateChanged) return handleNewPropsAndNewState();
    if (propsChanged) return handleNewProps();
    if (stateChanged) return handleNewState();
    return mergedProps;
  }

  return function pureFinalPropsSelector(nextState, nextOwnProps) {
    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
  };
} // TODO: Add more comments
// If pure is true, the selector returned by selectorFactory will memoize its results,
// allowing connectAdvanced's shouldComponentUpdate to return false if final
// props have not changed. If false, the selector will always return a new
// object and shouldComponentUpdate will always return true.

function finalPropsSelectorFactory(dispatch, _ref2) {
  var initMapStateToProps = _ref2.initMapStateToProps,
      initMapDispatchToProps = _ref2.initMapDispatchToProps,
      initMergeProps = _ref2.initMergeProps,
      options = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__.default)(_ref2, ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"]);

  var mapStateToProps = initMapStateToProps(dispatch, options);
  var mapDispatchToProps = initMapDispatchToProps(dispatch, options);
  var mergeProps = initMergeProps(dispatch, options);

  if (true) {
    (0,_verifySubselectors__WEBPACK_IMPORTED_MODULE_1__.default)(mapStateToProps, mapDispatchToProps, mergeProps, options.displayName);
  }

  var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;
  return selectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
}

/***/ }),

/***/ "./node_modules/react-redux/es/connect/verifySubselectors.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/verifySubselectors.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ verifySubselectors; }
/* harmony export */ });
/* harmony import */ var _utils_warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/warning */ "./node_modules/react-redux/es/utils/warning.js");


function verify(selector, methodName, displayName) {
  if (!selector) {
    throw new Error("Unexpected value for " + methodName + " in " + displayName + ".");
  } else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {
    if (!Object.prototype.hasOwnProperty.call(selector, 'dependsOnOwnProps')) {
      (0,_utils_warning__WEBPACK_IMPORTED_MODULE_0__.default)("The selector for " + methodName + " of " + displayName + " did not specify a value for dependsOnOwnProps.");
    }
  }
}

function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, displayName) {
  verify(mapStateToProps, 'mapStateToProps', displayName);
  verify(mapDispatchToProps, 'mapDispatchToProps', displayName);
  verify(mergeProps, 'mergeProps', displayName);
}

/***/ }),

/***/ "./node_modules/react-redux/es/connect/wrapMapToProps.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/wrapMapToProps.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "wrapMapToPropsConstant": function() { return /* binding */ wrapMapToPropsConstant; },
/* harmony export */   "getDependsOnOwnProps": function() { return /* binding */ getDependsOnOwnProps; },
/* harmony export */   "wrapMapToPropsFunc": function() { return /* binding */ wrapMapToPropsFunc; }
/* harmony export */ });
/* harmony import */ var _utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/verifyPlainObject */ "./node_modules/react-redux/es/utils/verifyPlainObject.js");

function wrapMapToPropsConstant(getConstant) {
  return function initConstantSelector(dispatch, options) {
    var constant = getConstant(dispatch, options);

    function constantSelector() {
      return constant;
    }

    constantSelector.dependsOnOwnProps = false;
    return constantSelector;
  };
} // dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
// whether mapToProps needs to be invoked when props have changed.
//
// A length of one signals that mapToProps does not depend on props from the parent component.
// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
// therefore not reporting its length accurately..

function getDependsOnOwnProps(mapToProps) {
  return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
} // Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
// this function wraps mapToProps in a proxy function which does several things:
//
//  * Detects whether the mapToProps function being called depends on props, which
//    is used by selectorFactory to decide if it should reinvoke on props changes.
//
//  * On first call, handles mapToProps if returns another function, and treats that
//    new function as the true mapToProps for subsequent calls.
//
//  * On first call, verifies the first result is a plain object, in order to warn
//    the developer that their mapToProps function is not returning a valid result.
//

function wrapMapToPropsFunc(mapToProps, methodName) {
  return function initProxySelector(dispatch, _ref) {
    var displayName = _ref.displayName;

    var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
    }; // allow detectFactoryAndVerify to get ownProps


    proxy.dependsOnOwnProps = true;

    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
      proxy.mapToProps = mapToProps;
      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
      var props = proxy(stateOrDispatch, ownProps);

      if (typeof props === 'function') {
        proxy.mapToProps = props;
        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
        props = proxy(stateOrDispatch, ownProps);
      }

      if (true) (0,_utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_0__.default)(props, displayName, methodName);
      return props;
    };

    return proxy;
  };
}

/***/ }),

/***/ "./node_modules/react-redux/es/hooks/useDispatch.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-redux/es/hooks/useDispatch.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDispatchHook": function() { return /* binding */ createDispatchHook; },
/* harmony export */   "useDispatch": function() { return /* binding */ useDispatch; }
/* harmony export */ });
/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Context */ "./node_modules/react-redux/es/components/Context.js");
/* harmony import */ var _useStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useStore */ "./node_modules/react-redux/es/hooks/useStore.js");


/**
 * Hook factory, which creates a `useDispatch` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useDispatch` hook bound to the specified context.
 */

function createDispatchHook(context) {
  if (context === void 0) {
    context = _components_Context__WEBPACK_IMPORTED_MODULE_0__.ReactReduxContext;
  }

  var useStore = context === _components_Context__WEBPACK_IMPORTED_MODULE_0__.ReactReduxContext ? _useStore__WEBPACK_IMPORTED_MODULE_1__.useStore : (0,_useStore__WEBPACK_IMPORTED_MODULE_1__.createStoreHook)(context);
  return function useDispatch() {
    var store = useStore();
    return store.dispatch;
  };
}
/**
 * A hook to access the redux `dispatch` function.
 *
 * @returns {any|function} redux store's `dispatch` function
 *
 * @example
 *
 * import React, { useCallback } from 'react'
 * import { useDispatch } from 'react-redux'
 *
 * export const CounterComponent = ({ value }) => {
 *   const dispatch = useDispatch()
 *   const increaseCounter = useCallback(() => dispatch({ type: 'increase-counter' }), [])
 *   return (
 *     <div>
 *       <span>{value}</span>
 *       <button onClick={increaseCounter}>Increase counter</button>
 *     </div>
 *   )
 * }
 */

var useDispatch = /*#__PURE__*/createDispatchHook();

/***/ }),

/***/ "./node_modules/react-redux/es/hooks/useReduxContext.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-redux/es/hooks/useReduxContext.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useReduxContext": function() { return /* binding */ useReduxContext; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Context */ "./node_modules/react-redux/es/components/Context.js");


/**
 * A hook to access the value of the `ReactReduxContext`. This is a low-level
 * hook that you should usually not need to call directly.
 *
 * @returns {any} the value of the `ReactReduxContext`
 *
 * @example
 *
 * import React from 'react'
 * import { useReduxContext } from 'react-redux'
 *
 * export const CounterComponent = ({ value }) => {
 *   const { store } = useReduxContext()
 *   return <div>{store.getState()}</div>
 * }
 */

function useReduxContext() {
  var contextValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_components_Context__WEBPACK_IMPORTED_MODULE_1__.ReactReduxContext);

  if ( true && !contextValue) {
    throw new Error('could not find react-redux context value; please ensure the component is wrapped in a <Provider>');
  }

  return contextValue;
}

/***/ }),

/***/ "./node_modules/react-redux/es/hooks/useSelector.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-redux/es/hooks/useSelector.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createSelectorHook": function() { return /* binding */ createSelectorHook; },
/* harmony export */   "useSelector": function() { return /* binding */ useSelector; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useReduxContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useReduxContext */ "./node_modules/react-redux/es/hooks/useReduxContext.js");
/* harmony import */ var _utils_Subscription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/Subscription */ "./node_modules/react-redux/es/utils/Subscription.js");
/* harmony import */ var _utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/useIsomorphicLayoutEffect */ "./node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js");
/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Context */ "./node_modules/react-redux/es/components/Context.js");






var refEquality = function refEquality(a, b) {
  return a === b;
};

function useSelectorWithStoreAndSubscription(selector, equalityFn, store, contextSub) {
  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(function (s) {
    return s + 1;
  }, 0),
      forceRender = _useReducer[1];

  var subscription = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return new _utils_Subscription__WEBPACK_IMPORTED_MODULE_2__.default(store, contextSub);
  }, [store, contextSub]);
  var latestSubscriptionCallbackError = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var latestSelector = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var latestStoreState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var latestSelectedState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var storeState = store.getState();
  var selectedState;

  try {
    if (selector !== latestSelector.current || storeState !== latestStoreState.current || latestSubscriptionCallbackError.current) {
      selectedState = selector(storeState);
    } else {
      selectedState = latestSelectedState.current;
    }
  } catch (err) {
    if (latestSubscriptionCallbackError.current) {
      err.message += "\nThe error may be correlated with this previous error:\n" + latestSubscriptionCallbackError.current.stack + "\n\n";
    }

    throw err;
  }

  (0,_utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_3__.useIsomorphicLayoutEffect)(function () {
    latestSelector.current = selector;
    latestStoreState.current = storeState;
    latestSelectedState.current = selectedState;
    latestSubscriptionCallbackError.current = undefined;
  });
  (0,_utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_3__.useIsomorphicLayoutEffect)(function () {
    function checkForUpdates() {
      try {
        var newSelectedState = latestSelector.current(store.getState());

        if (equalityFn(newSelectedState, latestSelectedState.current)) {
          return;
        }

        latestSelectedState.current = newSelectedState;
      } catch (err) {
        // we ignore all errors here, since when the component
        // is re-rendered, the selectors are called again, and
        // will throw again, if neither props nor store state
        // changed
        latestSubscriptionCallbackError.current = err;
      }

      forceRender();
    }

    subscription.onStateChange = checkForUpdates;
    subscription.trySubscribe();
    checkForUpdates();
    return function () {
      return subscription.tryUnsubscribe();
    };
  }, [store, subscription]);
  return selectedState;
}
/**
 * Hook factory, which creates a `useSelector` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useSelector` hook bound to the specified context.
 */


function createSelectorHook(context) {
  if (context === void 0) {
    context = _components_Context__WEBPACK_IMPORTED_MODULE_4__.ReactReduxContext;
  }

  var useReduxContext = context === _components_Context__WEBPACK_IMPORTED_MODULE_4__.ReactReduxContext ? _useReduxContext__WEBPACK_IMPORTED_MODULE_1__.useReduxContext : function () {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(context);
  };
  return function useSelector(selector, equalityFn) {
    if (equalityFn === void 0) {
      equalityFn = refEquality;
    }

    if ( true && !selector) {
      throw new Error("You must pass a selector to useSelector");
    }

    var _useReduxContext = useReduxContext(),
        store = _useReduxContext.store,
        contextSub = _useReduxContext.subscription;

    var selectedState = useSelectorWithStoreAndSubscription(selector, equalityFn, store, contextSub);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useDebugValue)(selectedState);
    return selectedState;
  };
}
/**
 * A hook to access the redux store's state. This hook takes a selector function
 * as an argument. The selector is called with the store state.
 *
 * This hook takes an optional equality comparison function as the second parameter
 * that allows you to customize the way the selected state is compared to determine
 * whether the component needs to be re-rendered.
 *
 * @param {Function} selector the selector function
 * @param {Function=} equalityFn the function that will be used to determine equality
 *
 * @returns {any} the selected state
 *
 * @example
 *
 * import React from 'react'
 * import { useSelector } from 'react-redux'
 *
 * export const CounterComponent = () => {
 *   const counter = useSelector(state => state.counter)
 *   return <div>{counter}</div>
 * }
 */

var useSelector = /*#__PURE__*/createSelectorHook();

/***/ }),

/***/ "./node_modules/react-redux/es/hooks/useStore.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-redux/es/hooks/useStore.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createStoreHook": function() { return /* binding */ createStoreHook; },
/* harmony export */   "useStore": function() { return /* binding */ useStore; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Context */ "./node_modules/react-redux/es/components/Context.js");
/* harmony import */ var _useReduxContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useReduxContext */ "./node_modules/react-redux/es/hooks/useReduxContext.js");



/**
 * Hook factory, which creates a `useStore` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useStore` hook bound to the specified context.
 */

function createStoreHook(context) {
  if (context === void 0) {
    context = _components_Context__WEBPACK_IMPORTED_MODULE_1__.ReactReduxContext;
  }

  var useReduxContext = context === _components_Context__WEBPACK_IMPORTED_MODULE_1__.ReactReduxContext ? _useReduxContext__WEBPACK_IMPORTED_MODULE_2__.useReduxContext : function () {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(context);
  };
  return function useStore() {
    var _useReduxContext = useReduxContext(),
        store = _useReduxContext.store;

    return store;
  };
}
/**
 * A hook to access the redux store.
 *
 * @returns {any} the redux store
 *
 * @example
 *
 * import React from 'react'
 * import { useStore } from 'react-redux'
 *
 * export const ExampleComponent = () => {
 *   const store = useStore()
 *   return <div>{store.getState()}</div>
 * }
 */

var useStore = /*#__PURE__*/createStoreHook();

/***/ }),

/***/ "./node_modules/react-redux/es/index.js":
/*!**********************************************!*\
  !*** ./node_modules/react-redux/es/index.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Provider": function() { return /* reexport safe */ _components_Provider__WEBPACK_IMPORTED_MODULE_0__.default; },
/* harmony export */   "connectAdvanced": function() { return /* reexport safe */ _components_connectAdvanced__WEBPACK_IMPORTED_MODULE_1__.default; },
/* harmony export */   "ReactReduxContext": function() { return /* reexport safe */ _components_Context__WEBPACK_IMPORTED_MODULE_2__.ReactReduxContext; },
/* harmony export */   "connect": function() { return /* reexport safe */ _connect_connect__WEBPACK_IMPORTED_MODULE_3__.default; },
/* harmony export */   "batch": function() { return /* reexport safe */ _utils_reactBatchedUpdates__WEBPACK_IMPORTED_MODULE_8__.unstable_batchedUpdates; },
/* harmony export */   "useDispatch": function() { return /* reexport safe */ _hooks_useDispatch__WEBPACK_IMPORTED_MODULE_4__.useDispatch; },
/* harmony export */   "createDispatchHook": function() { return /* reexport safe */ _hooks_useDispatch__WEBPACK_IMPORTED_MODULE_4__.createDispatchHook; },
/* harmony export */   "useSelector": function() { return /* reexport safe */ _hooks_useSelector__WEBPACK_IMPORTED_MODULE_5__.useSelector; },
/* harmony export */   "createSelectorHook": function() { return /* reexport safe */ _hooks_useSelector__WEBPACK_IMPORTED_MODULE_5__.createSelectorHook; },
/* harmony export */   "useStore": function() { return /* reexport safe */ _hooks_useStore__WEBPACK_IMPORTED_MODULE_6__.useStore; },
/* harmony export */   "createStoreHook": function() { return /* reexport safe */ _hooks_useStore__WEBPACK_IMPORTED_MODULE_6__.createStoreHook; },
/* harmony export */   "shallowEqual": function() { return /* reexport safe */ _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_9__.default; }
/* harmony export */ });
/* harmony import */ var _components_Provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Provider */ "./node_modules/react-redux/es/components/Provider.js");
/* harmony import */ var _components_connectAdvanced__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/connectAdvanced */ "./node_modules/react-redux/es/components/connectAdvanced.js");
/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Context */ "./node_modules/react-redux/es/components/Context.js");
/* harmony import */ var _connect_connect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./connect/connect */ "./node_modules/react-redux/es/connect/connect.js");
/* harmony import */ var _hooks_useDispatch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hooks/useDispatch */ "./node_modules/react-redux/es/hooks/useDispatch.js");
/* harmony import */ var _hooks_useSelector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hooks/useSelector */ "./node_modules/react-redux/es/hooks/useSelector.js");
/* harmony import */ var _hooks_useStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hooks/useStore */ "./node_modules/react-redux/es/hooks/useStore.js");
/* harmony import */ var _utils_batch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/batch */ "./node_modules/react-redux/es/utils/batch.js");
/* harmony import */ var _utils_reactBatchedUpdates__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/reactBatchedUpdates */ "./node_modules/react-redux/es/utils/reactBatchedUpdates.js");
/* harmony import */ var _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/shallowEqual */ "./node_modules/react-redux/es/utils/shallowEqual.js");










(0,_utils_batch__WEBPACK_IMPORTED_MODULE_7__.setBatch)(_utils_reactBatchedUpdates__WEBPACK_IMPORTED_MODULE_8__.unstable_batchedUpdates);


/***/ }),

/***/ "./node_modules/react-redux/es/utils/Subscription.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/utils/Subscription.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Subscription; }
/* harmony export */ });
/* harmony import */ var _batch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./batch */ "./node_modules/react-redux/es/utils/batch.js");
 // encapsulates the subscription logic for connecting a component to the redux store, as
// well as nesting subscriptions of descendant components, so that we can ensure the
// ancestor components re-render before descendants

var nullListeners = {
  notify: function notify() {}
};

function createListenerCollection() {
  var batch = (0,_batch__WEBPACK_IMPORTED_MODULE_0__.getBatch)();
  var first = null;
  var last = null;
  return {
    clear: function clear() {
      first = null;
      last = null;
    },
    notify: function notify() {
      batch(function () {
        var listener = first;

        while (listener) {
          listener.callback();
          listener = listener.next;
        }
      });
    },
    get: function get() {
      var listeners = [];
      var listener = first;

      while (listener) {
        listeners.push(listener);
        listener = listener.next;
      }

      return listeners;
    },
    subscribe: function subscribe(callback) {
      var isSubscribed = true;
      var listener = last = {
        callback: callback,
        next: null,
        prev: last
      };

      if (listener.prev) {
        listener.prev.next = listener;
      } else {
        first = listener;
      }

      return function unsubscribe() {
        if (!isSubscribed || first === null) return;
        isSubscribed = false;

        if (listener.next) {
          listener.next.prev = listener.prev;
        } else {
          last = listener.prev;
        }

        if (listener.prev) {
          listener.prev.next = listener.next;
        } else {
          first = listener.next;
        }
      };
    }
  };
}

var Subscription = /*#__PURE__*/function () {
  function Subscription(store, parentSub) {
    this.store = store;
    this.parentSub = parentSub;
    this.unsubscribe = null;
    this.listeners = nullListeners;
    this.handleChangeWrapper = this.handleChangeWrapper.bind(this);
  }

  var _proto = Subscription.prototype;

  _proto.addNestedSub = function addNestedSub(listener) {
    this.trySubscribe();
    return this.listeners.subscribe(listener);
  };

  _proto.notifyNestedSubs = function notifyNestedSubs() {
    this.listeners.notify();
  };

  _proto.handleChangeWrapper = function handleChangeWrapper() {
    if (this.onStateChange) {
      this.onStateChange();
    }
  };

  _proto.isSubscribed = function isSubscribed() {
    return Boolean(this.unsubscribe);
  };

  _proto.trySubscribe = function trySubscribe() {
    if (!this.unsubscribe) {
      this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.handleChangeWrapper) : this.store.subscribe(this.handleChangeWrapper);
      this.listeners = createListenerCollection();
    }
  };

  _proto.tryUnsubscribe = function tryUnsubscribe() {
    if (this.unsubscribe) {
      this.unsubscribe();
      this.unsubscribe = null;
      this.listeners.clear();
      this.listeners = nullListeners;
    }
  };

  return Subscription;
}();



/***/ }),

/***/ "./node_modules/react-redux/es/utils/batch.js":
/*!****************************************************!*\
  !*** ./node_modules/react-redux/es/utils/batch.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setBatch": function() { return /* binding */ setBatch; },
/* harmony export */   "getBatch": function() { return /* binding */ getBatch; }
/* harmony export */ });
// Default to a dummy "batch" implementation that just runs the callback
function defaultNoopBatch(callback) {
  callback();
}

var batch = defaultNoopBatch; // Allow injecting another batching function later

var setBatch = function setBatch(newBatch) {
  return batch = newBatch;
}; // Supply a getter just to skip dealing with ESM bindings

var getBatch = function getBatch() {
  return batch;
};

/***/ }),

/***/ "./node_modules/react-redux/es/utils/isPlainObject.js":
/*!************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/isPlainObject.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ isPlainObject; }
/* harmony export */ });
/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = Object.getPrototypeOf(obj);
  if (proto === null) return true;
  var baseProto = proto;

  while (Object.getPrototypeOf(baseProto) !== null) {
    baseProto = Object.getPrototypeOf(baseProto);
  }

  return proto === baseProto;
}

/***/ }),

/***/ "./node_modules/react-redux/es/utils/reactBatchedUpdates.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/reactBatchedUpdates.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "unstable_batchedUpdates": function() { return /* reexport safe */ react_dom__WEBPACK_IMPORTED_MODULE_0__.unstable_batchedUpdates; }
/* harmony export */ });
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable import/no-unresolved */


/***/ }),

/***/ "./node_modules/react-redux/es/utils/shallowEqual.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/utils/shallowEqual.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ shallowEqual; }
/* harmony export */ });
function is(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function shallowEqual(objA, objB) {
  if (is(objA, objB)) return true;

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) return false;

  for (var i = 0; i < keysA.length; i++) {
    if (!Object.prototype.hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

/***/ }),

/***/ "./node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useIsomorphicLayoutEffect": function() { return /* binding */ useIsomorphicLayoutEffect; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
 // React currently throws a warning when using useLayoutEffect on the server.
// To get around it, we can conditionally useEffect on the server (no-op) and
// useLayoutEffect in the browser. We need useLayoutEffect to ensure the store
// subscription callback always has the selector from the latest render commit
// available, otherwise a store update may happen between render and the effect,
// which may cause missed updates; we also must ensure the store subscription
// is created synchronously, otherwise a store update may occur before the
// subscription is created and an inconsistent state may be observed

var useIsomorphicLayoutEffect = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined' ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;

/***/ }),

/***/ "./node_modules/react-redux/es/utils/verifyPlainObject.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/verifyPlainObject.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ verifyPlainObject; }
/* harmony export */ });
/* harmony import */ var _isPlainObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isPlainObject */ "./node_modules/react-redux/es/utils/isPlainObject.js");
/* harmony import */ var _warning__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./warning */ "./node_modules/react-redux/es/utils/warning.js");


function verifyPlainObject(value, displayName, methodName) {
  if (!(0,_isPlainObject__WEBPACK_IMPORTED_MODULE_0__.default)(value)) {
    (0,_warning__WEBPACK_IMPORTED_MODULE_1__.default)(methodName + "() in " + displayName + " must return a plain object. Instead received " + value + ".");
  }
}

/***/ }),

/***/ "./node_modules/react-redux/es/utils/warning.js":
/*!******************************************************!*\
  !*** ./node_modules/react-redux/es/utils/warning.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ warning; }
/* harmony export */ });
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */

}

/***/ }),

/***/ "./node_modules/react-redux/node_modules/react-is/cjs/react-is.development.js":
/*!************************************************************************************!*\
  !*** ./node_modules/react-redux/node_modules/react-is/cjs/react-is.development.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-redux/node_modules/react-is/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-redux/node_modules/react-is/index.js ***!
  \*****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-redux/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/redux/es/redux.js":
/*!****************************************!*\
  !*** ./node_modules/redux/es/redux.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__DO_NOT_USE__ActionTypes": function() { return /* binding */ ActionTypes; },
/* harmony export */   "applyMiddleware": function() { return /* binding */ applyMiddleware; },
/* harmony export */   "bindActionCreators": function() { return /* binding */ bindActionCreators; },
/* harmony export */   "combineReducers": function() { return /* binding */ combineReducers; },
/* harmony export */   "compose": function() { return /* binding */ compose; },
/* harmony export */   "createStore": function() { return /* binding */ createStore; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");


/**
 * Adapted from React: https://github.com/facebook/react/blob/master/packages/shared/formatProdErrorMessage.js
 *
 * Do not require this module directly! Use normal throw error calls. These messages will be replaced with error codes
 * during build.
 * @param {number} code
 */
function formatProdErrorMessage(code) {
  return "Minified Redux error #" + code + "; visit https://redux.js.org/Errors?code=" + code + " for the full message or " + 'use the non-minified dev environment for full errors. ';
}

// Inlined version of the `symbol-observable` polyfill
var $$observable = (function () {
  return typeof Symbol === 'function' && Symbol.observable || '@@observable';
})();

/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var randomString = function randomString() {
  return Math.random().toString(36).substring(7).split('').join('.');
};

var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = obj;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}

function kindOf(val) {
  var typeOfVal = typeof val;

  if (true) {
    // Inlined / shortened version of `kindOf` from https://github.com/jonschlinkert/kind-of
    function miniKindOf(val) {
      if (val === void 0) return 'undefined';
      if (val === null) return 'null';
      var type = typeof val;

      switch (type) {
        case 'boolean':
        case 'string':
        case 'number':
        case 'symbol':
        case 'function':
          {
            return type;
          }
      }

      if (Array.isArray(val)) return 'array';
      if (isDate(val)) return 'date';
      if (isError(val)) return 'error';
      var constructorName = ctorName(val);

      switch (constructorName) {
        case 'Symbol':
        case 'Promise':
        case 'WeakMap':
        case 'WeakSet':
        case 'Map':
        case 'Set':
          return constructorName;
      } // other


      return type.slice(8, -1).toLowerCase().replace(/\s/g, '');
    }

    function ctorName(val) {
      return typeof val.constructor === 'function' ? val.constructor.name : null;
    }

    function isError(val) {
      return val instanceof Error || typeof val.message === 'string' && val.constructor && typeof val.constructor.stackTraceLimit === 'number';
    }

    function isDate(val) {
      if (val instanceof Date) return true;
      return typeof val.toDateString === 'function' && typeof val.getDate === 'function' && typeof val.setDate === 'function';
    }

    typeOfVal = miniKindOf(val);
  }

  return typeOfVal;
}

/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */

function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
    throw new Error( false ? 0 : 'It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.');
  }

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error( false ? 0 : "Expected the enhancer to be a function. Instead, received: '" + kindOf(enhancer) + "'");
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error( false ? 0 : "Expected the root reducer to be a function. Instead, received: '" + kindOf(reducer) + "'");
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  /**
   * This makes a shallow copy of currentListeners so we can use
   * nextListeners as a temporary list while dispatching.
   *
   * This prevents any bugs around consumers calling
   * subscribe/unsubscribe in the middle of a dispatch.
   */

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */


  function getState() {
    if (isDispatching) {
      throw new Error( false ? 0 : 'You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
    }

    return currentState;
  }
  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */


  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error( false ? 0 : "Expected the listener to be a function. Instead, received: '" + kindOf(listener) + "'");
    }

    if (isDispatching) {
      throw new Error( false ? 0 : 'You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api/store#subscribelistener for more details.');
    }

    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error( false ? 0 : 'You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api/store#subscribelistener for more details.');
      }

      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
      currentListeners = null;
    };
  }
  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */


  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error( false ? 0 : "Actions must be plain objects. Instead, the actual type was: '" + kindOf(action) + "'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");
    }

    if (typeof action.type === 'undefined') {
      throw new Error( false ? 0 : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    }

    if (isDispatching) {
      throw new Error( false ? 0 : 'Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }
  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */


  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error( false ? 0 : "Expected the nextReducer to be a function. Instead, received: '" + kindOf(nextReducer));
    }

    currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
    // Any reducers that existed in both the new and old rootReducer
    // will receive the previous state. This effectively populates
    // the new state tree with any relevant data from the old one.

    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */


  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object' || observer === null) {
          throw new Error( false ? 0 : "Expected the observer to be an object. Instead, received: '" + kindOf(observer) + "'");
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe: unsubscribe
        };
      }
    }, _ref[$$observable] = function () {
      return this;
    }, _ref;
  } // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.


  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[$$observable] = observable, _ref2;
}

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty

}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!isPlainObject(inputState)) {
    return "The " + argumentName + " has unexpected type of \"" + kindOf(inputState) + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });
  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });
  if (action && action.type === ActionTypes.REPLACE) return;

  if (unexpectedKeys.length > 0) {
    return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, {
      type: ActionTypes.INIT
    });

    if (typeof initialState === 'undefined') {
      throw new Error( false ? 0 : "The slice reducer for key \"" + key + "\" returned undefined during initialization. " + "If the state passed to the reducer is undefined, you must " + "explicitly return the initial state. The initial state may " + "not be undefined. If you don't want to set a value for this reducer, " + "you can use null instead of undefined.");
    }

    if (typeof reducer(undefined, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === 'undefined') {
      throw new Error( false ? 0 : "The slice reducer for key \"" + key + "\" returned undefined when probed with a random type. " + ("Don't try to handle '" + ActionTypes.INIT + "' or other actions in \"redux/*\" ") + "namespace. They are considered private. Instead, you must return the " + "current state for any unknown actions, unless it is undefined, " + "in which case you must return the initial state, regardless of the " + "action type. The initial state may not be undefined, but can be null.");
    }
  });
}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */


function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};

  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (true) {
      if (typeof reducers[key] === 'undefined') {
        warning("No reducer provided for key \"" + key + "\"");
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }

  var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same
  // keys multiple times.

  var unexpectedKeyCache;

  if (true) {
    unexpectedKeyCache = {};
  }

  var shapeAssertionError;

  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination(state, action) {
    if (state === void 0) {
      state = {};
    }

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (true) {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);

      if (warningMessage) {
        warning(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};

    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);

      if (typeof nextStateForKey === 'undefined') {
        var actionType = action && action.type;
        throw new Error( false ? 0 : "When called with an action of type " + (actionType ? "\"" + String(actionType) + "\"" : '(unknown type)') + ", the slice reducer for key \"" + _key + "\" returned undefined. " + "To ignore an action, you must explicitly return the previous state. " + "If you want this reducer to hold no value, you can return null instead of undefined.");
      }

      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }

    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
    return hasChanged ? nextState : state;
  };
}

function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments));
  };
}
/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass an action creator as the first argument,
 * and get a dispatch wrapped function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */


function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error( false ? 0 : "bindActionCreators expected an object or a function, but instead received: '" + kindOf(actionCreators) + "'. " + "Did you write \"import ActionCreators from\" instead of \"import * as ActionCreators from\"?");
  }

  var boundActionCreators = {};

  for (var key in actionCreators) {
    var actionCreator = actionCreators[key];

    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }

  return boundActionCreators;
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  });
}

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */

function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function () {
      var store = createStore.apply(void 0, arguments);

      var _dispatch = function dispatch() {
        throw new Error( false ? 0 : 'Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store.dispatch);
      return (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.default)((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.default)({}, store), {}, {
        dispatch: _dispatch
      });
    };
  };
}

/*
 * This is a dummy function to check if the function name has been altered by minification.
 * If the function has been minified and NODE_ENV !== 'production', warn the user.
 */

function isCrushed() {}

if ( true && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
  warning('You are currently using minified code outside of NODE_ENV === "production". ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or setting mode to production in webpack (https://webpack.js.org/concepts/mode/) ' + 'to ensure you have the correct code for your production build.');
}




/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFNwcmVhZDIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0L1Byb2R1Y3QuanN4Iiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MvZGlzdC9ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy5janMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy9ub2RlX21vZHVsZXMvcmVhY3QtaXMvY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3Mvbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvY29tcG9uZW50cy9Db250ZXh0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvY29tcG9uZW50cy9Qcm92aWRlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL2NvbXBvbmVudHMvY29ubmVjdEFkdmFuY2VkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvY29ubmVjdC9jb25uZWN0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvY29ubmVjdC9tYXBEaXNwYXRjaFRvUHJvcHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy9jb25uZWN0L21hcFN0YXRlVG9Qcm9wcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL2Nvbm5lY3QvbWVyZ2VQcm9wcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL2Nvbm5lY3Qvc2VsZWN0b3JGYWN0b3J5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvY29ubmVjdC92ZXJpZnlTdWJzZWxlY3RvcnMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy9jb25uZWN0L3dyYXBNYXBUb1Byb3BzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvaG9va3MvdXNlRGlzcGF0Y2guanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy9ob29rcy91c2VSZWR1eENvbnRleHQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy9ob29rcy91c2VTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL2hvb2tzL3VzZVN0b3JlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy91dGlscy9TdWJzY3JpcHRpb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy91dGlscy9iYXRjaC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL3V0aWxzL2lzUGxhaW5PYmplY3QuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy91dGlscy9yZWFjdEJhdGNoZWRVcGRhdGVzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvdXRpbHMvc2hhbGxvd0VxdWFsLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvdXRpbHMvdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL3V0aWxzL3ZlcmlmeVBsYWluT2JqZWN0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvdXRpbHMvd2FybmluZy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L25vZGVfbW9kdWxlcy9yZWFjdC1pcy9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9ub2RlX21vZHVsZXMvcmVhY3QtaXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWR1eC9lcy9yZWR1eC5qcyJdLCJuYW1lcyI6WyJNQVhfUkFUSU5HIiwiTUlOX1JBVElORyIsIlByb2R1Y3QiLCJpZCIsInRpdGxlIiwicHJpY2UiLCJkZXNjcmlwdGlvbiIsImNhdGVnb3J5IiwiaW1hZ2UiLCJSZWFjdCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInJhdGluZyIsImhhc1ByaW1lIiwiYWRkSXRlbVRvQmFza2V0IiwiQXJyYXkiLCJmaWxs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Q0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG1CQUFtQixpQkFBaUI7QUFDcEM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQ3RHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOzs7O0FBSWIsSUFBSSxJQUFxQztBQUN6QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBFQUEwRTtBQUMxRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Q7O0FBRWhEO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRDs7QUFFakQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCO0FB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O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxZQUFZO0FBQ3ZCLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNFQUFzRSxhQUFhO0FBQ25GO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFlBQVk7QUFDdkIsYUFBYSxTQUFTO0FBQ3RCOztBQUVBO0FBQ0EsNEVBQTRFLGFBQWE7QUFDekY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0IsTUFBcUMsR0FBRyxDQUEwQjtBQUMxRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsYUFBYSxpRkFBYSxDQUFDLGlGQUFhLEdBQUcsWUFBWTtBQUN2RDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsSUFBSSxLQUFxQztBQUN6QztBQUNBOztBQUVnSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wYzAyOGVlYWY5OTdhN2YxNDlmYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn0iLCJpbXBvcnQgZGVmaW5lUHJvcGVydHkgZnJvbSBcIi4vZGVmaW5lUHJvcGVydHkuanNcIjtcblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTtcblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpO1xuXG4gICAgaWYgKGVudW1lcmFibGVPbmx5KSB7XG4gICAgICBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTtcbiAgfVxuXG4gIHJldHVybiBrZXlzO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfb2JqZWN0U3ByZWFkMih0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTtcblxuICAgIGlmIChpICUgMikge1xuICAgICAgb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIGRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufSIsImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFN0YXJJY29uIH0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3Qvc29saWRcIjtcclxuaW1wb3J0IEN1cnJlbmN5IGZyb20gXCJyZWFjdC1jdXJyZW5jeS1mb3JtYXR0ZXJcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcbmNvbnN0IE1BWF9SQVRJTkcgPSA1O1xyXG5jb25zdCBNSU5fUkFUSU5HID0gMTtcclxuXHJcbmZ1bmN0aW9uIFByb2R1Y3QoeyBpZCwgdGl0bGUsIHByaWNlLCBkZXNjcmlwdGlvbiwgY2F0ZWdvcnksIGltYWdlIH0pIHtcclxuICBjb25zdCBbcmF0aW5nXSA9IFJlYWN0LnVzZVN0YXRlKFxyXG4gICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKE1BWF9SQVRJTkcgLSBNSU5fUkFUSU5HICsgMSkpICsgTUlOX1JBVElOR1xyXG4gICk7XHJcbiAgY29uc3QgW2hhc1ByaW1lXSA9IFJlYWN0LnVzZVN0YXRlKE1hdGgucmFuZG9tKCkgPCAwLjUpO1xyXG5cclxuICBjb25zdCBhZGRJdGVtVG9CYXNrZXQgPSAoKSA9PiB7fTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGZsZXgtY29sIG0tNSBiZy13aGl0ZSB6LTMwIHAtMTAgcm91bmRlZC0yeGwgc2hhZG93LW1kXCI+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0yIHJpZ2h0LTIgdGV4dC14cyBpdGFsaWMgdGV4dC1ncmF5LTQwMFwiPlxyXG4gICAgICAgIHtjYXRlZ29yeX1cclxuICAgICAgPC9wPlxyXG4gICAgICA8SW1hZ2Ugc3JjPXtpbWFnZX0gaGVpZ2h0PXsyMDB9IHdpZHRoPXsyMDB9IG9iamVjdEZpdD1cImNvbnRhaW5cIiAvPlxyXG4gICAgICA8aDQgY2xhc3NOYW1lPVwibXktM1wiPnt0aXRsZX08L2g0PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cclxuICAgICAgICB7QXJyYXkocmF0aW5nKVxyXG4gICAgICAgICAgLmZpbGwoKVxyXG4gICAgICAgICAgLm1hcCgoXywgaSkgPT4gKFxyXG4gICAgICAgICAgICA8U3Rhckljb24gY2xhc3NOYW1lPVwiaC01IHRleHQteWVsbG93LTUwMFwiIC8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgbXktMiBsaW5lLWNsYW1wLTJcIj57ZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTVcIj5cclxuICAgICAgICA8Q3VycmVuY3kgcXVhbnRpdHk9e3ByaWNlfSBjdXJyZW5jeT1cIlVTRFwiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7aGFzUHJpbWUgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0yIC1tdC01XCI+XHJcbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInctMTJcIiBzcmM9XCJodHRwczovL2xpbmtzLnBhcGFyZWFjdC5jb20vZmR3XCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTUwMFwiPkZyZWUgTmV4dC1kYXkgRGVsaXZlcnk8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm10LWF1dG8gYnV0dG9uXCIgb25DbGljaz17YWRkSXRlbVRvQmFza2V0fT5cclxuICAgICAgICBBZGQgdG8gQmFza2V0XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdDtcclxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcmVhY3RJcyA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG5cbi8qKlxuICogQ29weXJpZ2h0IDIwMTUsIFlhaG9vISBJbmMuXG4gKiBDb3B5cmlnaHRzIGxpY2Vuc2VkIHVuZGVyIHRoZSBOZXcgQlNEIExpY2Vuc2UuIFNlZSB0aGUgYWNjb21wYW55aW5nIExJQ0VOU0UgZmlsZSBmb3IgdGVybXMuXG4gKi9cbnZhciBSRUFDVF9TVEFUSUNTID0ge1xuICBjaGlsZENvbnRleHRUeXBlczogdHJ1ZSxcbiAgY29udGV4dFR5cGU6IHRydWUsXG4gIGNvbnRleHRUeXBlczogdHJ1ZSxcbiAgZGVmYXVsdFByb3BzOiB0cnVlLFxuICBkaXNwbGF5TmFtZTogdHJ1ZSxcbiAgZ2V0RGVmYXVsdFByb3BzOiB0cnVlLFxuICBnZXREZXJpdmVkU3RhdGVGcm9tRXJyb3I6IHRydWUsXG4gIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wczogdHJ1ZSxcbiAgbWl4aW5zOiB0cnVlLFxuICBwcm9wVHlwZXM6IHRydWUsXG4gIHR5cGU6IHRydWVcbn07XG52YXIgS05PV05fU1RBVElDUyA9IHtcbiAgbmFtZTogdHJ1ZSxcbiAgbGVuZ3RoOiB0cnVlLFxuICBwcm90b3R5cGU6IHRydWUsXG4gIGNhbGxlcjogdHJ1ZSxcbiAgY2FsbGVlOiB0cnVlLFxuICBhcmd1bWVudHM6IHRydWUsXG4gIGFyaXR5OiB0cnVlXG59O1xudmFyIEZPUldBUkRfUkVGX1NUQVRJQ1MgPSB7XG4gICckJHR5cGVvZic6IHRydWUsXG4gIHJlbmRlcjogdHJ1ZSxcbiAgZGVmYXVsdFByb3BzOiB0cnVlLFxuICBkaXNwbGF5TmFtZTogdHJ1ZSxcbiAgcHJvcFR5cGVzOiB0cnVlXG59O1xudmFyIE1FTU9fU1RBVElDUyA9IHtcbiAgJyQkdHlwZW9mJzogdHJ1ZSxcbiAgY29tcGFyZTogdHJ1ZSxcbiAgZGVmYXVsdFByb3BzOiB0cnVlLFxuICBkaXNwbGF5TmFtZTogdHJ1ZSxcbiAgcHJvcFR5cGVzOiB0cnVlLFxuICB0eXBlOiB0cnVlXG59O1xudmFyIFRZUEVfU1RBVElDUyA9IHt9O1xuVFlQRV9TVEFUSUNTW3JlYWN0SXMuRm9yd2FyZFJlZl0gPSBGT1JXQVJEX1JFRl9TVEFUSUNTO1xuVFlQRV9TVEFUSUNTW3JlYWN0SXMuTWVtb10gPSBNRU1PX1NUQVRJQ1M7XG5cbmZ1bmN0aW9uIGdldFN0YXRpY3MoY29tcG9uZW50KSB7XG4gIC8vIFJlYWN0IHYxNi4xMSBhbmQgYmVsb3dcbiAgaWYgKHJlYWN0SXMuaXNNZW1vKGNvbXBvbmVudCkpIHtcbiAgICByZXR1cm4gTUVNT19TVEFUSUNTO1xuICB9IC8vIFJlYWN0IHYxNi4xMiBhbmQgYWJvdmVcblxuXG4gIHJldHVybiBUWVBFX1NUQVRJQ1NbY29tcG9uZW50WyckJHR5cGVvZiddXSB8fCBSRUFDVF9TVEFUSUNTO1xufVxuXG52YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgZ2V0T3duUHJvcGVydHlOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBnZXRQcm90b3R5cGVPZiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbnZhciBvYmplY3RQcm90b3R5cGUgPSBPYmplY3QucHJvdG90eXBlO1xuZnVuY3Rpb24gaG9pc3ROb25SZWFjdFN0YXRpY3ModGFyZ2V0Q29tcG9uZW50LCBzb3VyY2VDb21wb25lbnQsIGJsYWNrbGlzdCkge1xuICBpZiAodHlwZW9mIHNvdXJjZUNvbXBvbmVudCAhPT0gJ3N0cmluZycpIHtcbiAgICAvLyBkb24ndCBob2lzdCBvdmVyIHN0cmluZyAoaHRtbCkgY29tcG9uZW50c1xuICAgIGlmIChvYmplY3RQcm90b3R5cGUpIHtcbiAgICAgIHZhciBpbmhlcml0ZWRDb21wb25lbnQgPSBnZXRQcm90b3R5cGVPZihzb3VyY2VDb21wb25lbnQpO1xuXG4gICAgICBpZiAoaW5oZXJpdGVkQ29tcG9uZW50ICYmIGluaGVyaXRlZENvbXBvbmVudCAhPT0gb2JqZWN0UHJvdG90eXBlKSB7XG4gICAgICAgIGhvaXN0Tm9uUmVhY3RTdGF0aWNzKHRhcmdldENvbXBvbmVudCwgaW5oZXJpdGVkQ29tcG9uZW50LCBibGFja2xpc3QpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBrZXlzID0gZ2V0T3duUHJvcGVydHlOYW1lcyhzb3VyY2VDb21wb25lbnQpO1xuXG4gICAgaWYgKGdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgICAga2V5cyA9IGtleXMuY29uY2F0KGdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2VDb21wb25lbnQpKTtcbiAgICB9XG5cbiAgICB2YXIgdGFyZ2V0U3RhdGljcyA9IGdldFN0YXRpY3ModGFyZ2V0Q29tcG9uZW50KTtcbiAgICB2YXIgc291cmNlU3RhdGljcyA9IGdldFN0YXRpY3Moc291cmNlQ29tcG9uZW50KTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgdmFyIGtleSA9IGtleXNbaV07XG5cbiAgICAgIGlmICghS05PV05fU1RBVElDU1trZXldICYmICEoYmxhY2tsaXN0ICYmIGJsYWNrbGlzdFtrZXldKSAmJiAhKHNvdXJjZVN0YXRpY3MgJiYgc291cmNlU3RhdGljc1trZXldKSAmJiAhKHRhcmdldFN0YXRpY3MgJiYgdGFyZ2V0U3RhdGljc1trZXldKSkge1xuICAgICAgICB2YXIgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2VDb21wb25lbnQsIGtleSk7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBBdm9pZCBmYWlsdXJlcyBmcm9tIHJlYWQtb25seSBwcm9wZXJ0aWVzXG4gICAgICAgICAgZGVmaW5lUHJvcGVydHkodGFyZ2V0Q29tcG9uZW50LCBrZXksIGRlc2NyaXB0b3IpO1xuICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXRDb21wb25lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaG9pc3ROb25SZWFjdFN0YXRpY3M7XG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE2LjEzLjFcbiAqIHJlYWN0LWlzLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLiBJZiB0aGVyZSBpcyBubyBuYXRpdmUgU3ltYm9sXG4vLyBub3IgcG9seWZpbGwsIHRoZW4gYSBwbGFpbiBudW1iZXIgaXMgdXNlZCBmb3IgcGVyZm9ybWFuY2UuXG52YXIgaGFzU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yO1xudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSA6IDB4ZWFjNztcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnBvcnRhbCcpIDogMHhlYWNhO1xudmFyIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mcmFnbWVudCcpIDogMHhlYWNiO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpIDogMHhlYWNjO1xudmFyIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wcm9maWxlcicpIDogMHhlYWQyO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wcm92aWRlcicpIDogMHhlYWNkO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbnRleHQnKSA6IDB4ZWFjZTsgLy8gVE9ETzogV2UgZG9uJ3QgdXNlIEFzeW5jTW9kZSBvciBDb25jdXJyZW50TW9kZSBhbnltb3JlLiBUaGV5IHdlcmUgdGVtcG9yYXJ5XG4vLyAodW5zdGFibGUpIEFQSXMgdGhhdCBoYXZlIGJlZW4gcmVtb3ZlZC4gQ2FuIHdlIHJlbW92ZSB0aGUgc3ltYm9scz9cblxudmFyIFJFQUNUX0FTWU5DX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmFzeW5jX21vZGUnKSA6IDB4ZWFjZjtcbnZhciBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbmN1cnJlbnRfbW9kZScpIDogMHhlYWNmO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpIDogMHhlYWQwO1xudmFyIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZScpIDogMHhlYWQxO1xudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlX2xpc3QnKSA6IDB4ZWFkODtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5tZW1vJykgOiAweGVhZDM7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QubGF6eScpIDogMHhlYWQ0O1xudmFyIFJFQUNUX0JMT0NLX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5ibG9jaycpIDogMHhlYWQ5O1xudmFyIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mdW5kYW1lbnRhbCcpIDogMHhlYWQ1O1xudmFyIFJFQUNUX1JFU1BPTkRFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucmVzcG9uZGVyJykgOiAweGVhZDY7XG52YXIgUkVBQ1RfU0NPUEVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnNjb3BlJykgOiAweGVhZDc7XG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIHJldHVybiB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgfHwgLy8gTm90ZTogaXRzIHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIGlmIGl0J3MgYSBwb2x5ZmlsbC5cbiAgdHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1JFU1BPTkRFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1NDT1BFX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQkxPQ0tfVFlQRSk7XG59XG5cbmZ1bmN0aW9uIHR5cGVPZihvYmplY3QpIHtcbiAgaWYgKHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCkge1xuICAgIHZhciAkJHR5cGVvZiA9IG9iamVjdC4kJHR5cGVvZjtcblxuICAgIHN3aXRjaCAoJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRUxFTUVOVF9UWVBFOlxuICAgICAgICB2YXIgdHlwZSA9IG9iamVjdC50eXBlO1xuXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgIGNhc2UgUkVBQ1RfQVNZTkNfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9GUkFHTUVOVF9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPRklMRVJfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgICAgICAgcmV0dXJuIHR5cGU7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdmFyICQkdHlwZW9mVHlwZSA9IHR5cGUgJiYgdHlwZS4kJHR5cGVvZjtcblxuICAgICAgICAgICAgc3dpdGNoICgkJHR5cGVvZlR5cGUpIHtcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mVHlwZTtcblxuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufSAvLyBBc3luY01vZGUgaXMgZGVwcmVjYXRlZCBhbG9uZyB3aXRoIGlzQXN5bmNNb2RlXG5cbnZhciBBc3luY01vZGUgPSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU7XG52YXIgQ29uY3VycmVudE1vZGUgPSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTtcbnZhciBDb250ZXh0Q29uc3VtZXIgPSBSRUFDVF9DT05URVhUX1RZUEU7XG52YXIgQ29udGV4dFByb3ZpZGVyID0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbnZhciBFbGVtZW50ID0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xudmFyIEZvcndhcmRSZWYgPSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xudmFyIEZyYWdtZW50ID0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbnZhciBMYXp5ID0gUkVBQ1RfTEFaWV9UWVBFO1xudmFyIE1lbW8gPSBSRUFDVF9NRU1PX1RZUEU7XG52YXIgUG9ydGFsID0gUkVBQ1RfUE9SVEFMX1RZUEU7XG52YXIgUHJvZmlsZXIgPSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xudmFyIFN0cmljdE1vZGUgPSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xudmFyIFN1c3BlbnNlID0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbnZhciBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IGZhbHNlOyAvLyBBc3luY01vZGUgc2hvdWxkIGJlIGRlcHJlY2F0ZWRcblxuZnVuY3Rpb24gaXNBc3luY01vZGUob2JqZWN0KSB7XG4gIHtcbiAgICBpZiAoIWhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlKSB7XG4gICAgICBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IHRydWU7IC8vIFVzaW5nIGNvbnNvbGVbJ3dhcm4nXSB0byBldmFkZSBCYWJlbCBhbmQgRVNMaW50XG5cbiAgICAgIGNvbnNvbGVbJ3dhcm4nXSgnVGhlIFJlYWN0SXMuaXNBc3luY01vZGUoKSBhbGlhcyBoYXMgYmVlbiBkZXByZWNhdGVkLCAnICsgJ2FuZCB3aWxsIGJlIHJlbW92ZWQgaW4gUmVhY3QgMTcrLiBVcGRhdGUgeW91ciBjb2RlIHRvIHVzZSAnICsgJ1JlYWN0SXMuaXNDb25jdXJyZW50TW9kZSgpIGluc3RlYWQuIEl0IGhhcyB0aGUgZXhhY3Qgc2FtZSBBUEkuJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGlzQ29uY3VycmVudE1vZGUob2JqZWN0KSB8fCB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQVNZTkNfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dENvbnN1bWVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTlRFWFRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dFByb3ZpZGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST1ZJREVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc0VsZW1lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZvcndhcmRSZWYob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRnJhZ21lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTGF6eShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9MQVpZX1RZUEU7XG59XG5mdW5jdGlvbiBpc01lbW8ob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTUVNT19UWVBFO1xufVxuZnVuY3Rpb24gaXNQb3J0YWwob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUE9SVEFMX1RZUEU7XG59XG5mdW5jdGlvbiBpc1Byb2ZpbGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N0cmljdE1vZGUob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3VzcGVuc2Uob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbn1cblxuZXhwb3J0cy5Bc3luY01vZGUgPSBBc3luY01vZGU7XG5leHBvcnRzLkNvbmN1cnJlbnRNb2RlID0gQ29uY3VycmVudE1vZGU7XG5leHBvcnRzLkNvbnRleHRDb25zdW1lciA9IENvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuQ29udGV4dFByb3ZpZGVyID0gQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5FbGVtZW50ID0gRWxlbWVudDtcbmV4cG9ydHMuRm9yd2FyZFJlZiA9IEZvcndhcmRSZWY7XG5leHBvcnRzLkZyYWdtZW50ID0gRnJhZ21lbnQ7XG5leHBvcnRzLkxhenkgPSBMYXp5O1xuZXhwb3J0cy5NZW1vID0gTWVtbztcbmV4cG9ydHMuUG9ydGFsID0gUG9ydGFsO1xuZXhwb3J0cy5Qcm9maWxlciA9IFByb2ZpbGVyO1xuZXhwb3J0cy5TdHJpY3RNb2RlID0gU3RyaWN0TW9kZTtcbmV4cG9ydHMuU3VzcGVuc2UgPSBTdXNwZW5zZTtcbmV4cG9ydHMuaXNBc3luY01vZGUgPSBpc0FzeW5jTW9kZTtcbmV4cG9ydHMuaXNDb25jdXJyZW50TW9kZSA9IGlzQ29uY3VycmVudE1vZGU7XG5leHBvcnRzLmlzQ29udGV4dENvbnN1bWVyID0gaXNDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLmlzQ29udGV4dFByb3ZpZGVyID0gaXNDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLmlzRWxlbWVudCA9IGlzRWxlbWVudDtcbmV4cG9ydHMuaXNGb3J3YXJkUmVmID0gaXNGb3J3YXJkUmVmO1xuZXhwb3J0cy5pc0ZyYWdtZW50ID0gaXNGcmFnbWVudDtcbmV4cG9ydHMuaXNMYXp5ID0gaXNMYXp5O1xuZXhwb3J0cy5pc01lbW8gPSBpc01lbW87XG5leHBvcnRzLmlzUG9ydGFsID0gaXNQb3J0YWw7XG5leHBvcnRzLmlzUHJvZmlsZXIgPSBpc1Byb2ZpbGVyO1xuZXhwb3J0cy5pc1N0cmljdE1vZGUgPSBpc1N0cmljdE1vZGU7XG5leHBvcnRzLmlzU3VzcGVuc2UgPSBpc1N1c3BlbnNlO1xuZXhwb3J0cy5pc1ZhbGlkRWxlbWVudFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGU7XG5leHBvcnRzLnR5cGVPZiA9IHR5cGVPZjtcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmV4cG9ydCB2YXIgUmVhY3RSZWR1eENvbnRleHQgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlQ29udGV4dChudWxsKTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgUmVhY3RSZWR1eENvbnRleHQuZGlzcGxheU5hbWUgPSAnUmVhY3RSZWR1eCc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0UmVkdXhDb250ZXh0OyIsImltcG9ydCBSZWFjdCwgeyB1c2VNZW1vLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgUmVhY3RSZWR1eENvbnRleHQgfSBmcm9tICcuL0NvbnRleHQnO1xuaW1wb3J0IFN1YnNjcmlwdGlvbiBmcm9tICcuLi91dGlscy9TdWJzY3JpcHRpb24nO1xuXG5mdW5jdGlvbiBQcm92aWRlcihfcmVmKSB7XG4gIHZhciBzdG9yZSA9IF9yZWYuc3RvcmUsXG4gICAgICBjb250ZXh0ID0gX3JlZi5jb250ZXh0LFxuICAgICAgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuO1xuICB2YXIgY29udGV4dFZhbHVlID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oc3RvcmUpO1xuICAgIHN1YnNjcmlwdGlvbi5vblN0YXRlQ2hhbmdlID0gc3Vic2NyaXB0aW9uLm5vdGlmeU5lc3RlZFN1YnM7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0b3JlOiBzdG9yZSxcbiAgICAgIHN1YnNjcmlwdGlvbjogc3Vic2NyaXB0aW9uXG4gICAgfTtcbiAgfSwgW3N0b3JlXSk7XG4gIHZhciBwcmV2aW91c1N0YXRlID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHN0b3JlLmdldFN0YXRlKCk7XG4gIH0sIFtzdG9yZV0pO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHZhciBzdWJzY3JpcHRpb24gPSBjb250ZXh0VmFsdWUuc3Vic2NyaXB0aW9uO1xuICAgIHN1YnNjcmlwdGlvbi50cnlTdWJzY3JpYmUoKTtcblxuICAgIGlmIChwcmV2aW91c1N0YXRlICE9PSBzdG9yZS5nZXRTdGF0ZSgpKSB7XG4gICAgICBzdWJzY3JpcHRpb24ubm90aWZ5TmVzdGVkU3VicygpO1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBzdWJzY3JpcHRpb24udHJ5VW5zdWJzY3JpYmUoKTtcbiAgICAgIHN1YnNjcmlwdGlvbi5vblN0YXRlQ2hhbmdlID0gbnVsbDtcbiAgICB9O1xuICB9LCBbY29udGV4dFZhbHVlLCBwcmV2aW91c1N0YXRlXSk7XG4gIHZhciBDb250ZXh0ID0gY29udGV4dCB8fCBSZWFjdFJlZHV4Q29udGV4dDtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogY29udGV4dFZhbHVlXG4gIH0sIGNoaWxkcmVuKTtcbn1cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgUHJvdmlkZXIucHJvcFR5cGVzID0ge1xuICAgIHN0b3JlOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgc3Vic2NyaWJlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgZGlzcGF0Y2g6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICBnZXRTdGF0ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxuICAgIH0pLFxuICAgIGNvbnRleHQ6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5hbnlcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvdmlkZXI7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIjtcbmltcG9ydCBob2lzdFN0YXRpY3MgZnJvbSAnaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZU1lbW8sIHVzZVJlZiwgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGlzVmFsaWRFbGVtZW50VHlwZSwgaXNDb250ZXh0Q29uc3VtZXIgfSBmcm9tICdyZWFjdC1pcyc7XG5pbXBvcnQgU3Vic2NyaXB0aW9uIGZyb20gJy4uL3V0aWxzL1N1YnNjcmlwdGlvbic7XG5pbXBvcnQgeyB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0IH0gZnJvbSAnLi4vdXRpbHMvdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCc7XG5pbXBvcnQgeyBSZWFjdFJlZHV4Q29udGV4dCB9IGZyb20gJy4vQ29udGV4dCc7IC8vIERlZmluZSBzb21lIGNvbnN0YW50IGFycmF5cyBqdXN0IHRvIGF2b2lkIHJlLWNyZWF0aW5nIHRoZXNlXG5cbnZhciBFTVBUWV9BUlJBWSA9IFtdO1xudmFyIE5PX1NVQlNDUklQVElPTl9BUlJBWSA9IFtudWxsLCBudWxsXTtcblxudmFyIHN0cmluZ2lmeUNvbXBvbmVudCA9IGZ1bmN0aW9uIHN0cmluZ2lmeUNvbXBvbmVudChDb21wKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KENvbXApO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gU3RyaW5nKENvbXApO1xuICB9XG59O1xuXG5mdW5jdGlvbiBzdG9yZVN0YXRlVXBkYXRlc1JlZHVjZXIoc3RhdGUsIGFjdGlvbikge1xuICB2YXIgdXBkYXRlQ291bnQgPSBzdGF0ZVsxXTtcbiAgcmV0dXJuIFthY3Rpb24ucGF5bG9hZCwgdXBkYXRlQ291bnQgKyAxXTtcbn1cblxuZnVuY3Rpb24gdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdFdpdGhBcmdzKGVmZmVjdEZ1bmMsIGVmZmVjdEFyZ3MsIGRlcGVuZGVuY2llcykge1xuICB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZWZmZWN0RnVuYy5hcHBseSh2b2lkIDAsIGVmZmVjdEFyZ3MpO1xuICB9LCBkZXBlbmRlbmNpZXMpO1xufVxuXG5mdW5jdGlvbiBjYXB0dXJlV3JhcHBlclByb3BzKGxhc3RXcmFwcGVyUHJvcHMsIGxhc3RDaGlsZFByb3BzLCByZW5kZXJJc1NjaGVkdWxlZCwgd3JhcHBlclByb3BzLCBhY3R1YWxDaGlsZFByb3BzLCBjaGlsZFByb3BzRnJvbVN0b3JlVXBkYXRlLCBub3RpZnlOZXN0ZWRTdWJzKSB7XG4gIC8vIFdlIHdhbnQgdG8gY2FwdHVyZSB0aGUgd3JhcHBlciBwcm9wcyBhbmQgY2hpbGQgcHJvcHMgd2UgdXNlZCBmb3IgbGF0ZXIgY29tcGFyaXNvbnNcbiAgbGFzdFdyYXBwZXJQcm9wcy5jdXJyZW50ID0gd3JhcHBlclByb3BzO1xuICBsYXN0Q2hpbGRQcm9wcy5jdXJyZW50ID0gYWN0dWFsQ2hpbGRQcm9wcztcbiAgcmVuZGVySXNTY2hlZHVsZWQuY3VycmVudCA9IGZhbHNlOyAvLyBJZiB0aGUgcmVuZGVyIHdhcyBmcm9tIGEgc3RvcmUgdXBkYXRlLCBjbGVhciBvdXQgdGhhdCByZWZlcmVuY2UgYW5kIGNhc2NhZGUgdGhlIHN1YnNjcmliZXIgdXBkYXRlXG5cbiAgaWYgKGNoaWxkUHJvcHNGcm9tU3RvcmVVcGRhdGUuY3VycmVudCkge1xuICAgIGNoaWxkUHJvcHNGcm9tU3RvcmVVcGRhdGUuY3VycmVudCA9IG51bGw7XG4gICAgbm90aWZ5TmVzdGVkU3VicygpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHN1YnNjcmliZVVwZGF0ZXMoc2hvdWxkSGFuZGxlU3RhdGVDaGFuZ2VzLCBzdG9yZSwgc3Vic2NyaXB0aW9uLCBjaGlsZFByb3BzU2VsZWN0b3IsIGxhc3RXcmFwcGVyUHJvcHMsIGxhc3RDaGlsZFByb3BzLCByZW5kZXJJc1NjaGVkdWxlZCwgY2hpbGRQcm9wc0Zyb21TdG9yZVVwZGF0ZSwgbm90aWZ5TmVzdGVkU3VicywgZm9yY2VDb21wb25lbnRVcGRhdGVEaXNwYXRjaCkge1xuICAvLyBJZiB3ZSdyZSBub3Qgc3Vic2NyaWJlZCB0byB0aGUgc3RvcmUsIG5vdGhpbmcgdG8gZG8gaGVyZVxuICBpZiAoIXNob3VsZEhhbmRsZVN0YXRlQ2hhbmdlcykgcmV0dXJuOyAvLyBDYXB0dXJlIHZhbHVlcyBmb3IgY2hlY2tpbmcgaWYgYW5kIHdoZW4gdGhpcyBjb21wb25lbnQgdW5tb3VudHNcblxuICB2YXIgZGlkVW5zdWJzY3JpYmUgPSBmYWxzZTtcbiAgdmFyIGxhc3RUaHJvd25FcnJvciA9IG51bGw7IC8vIFdlJ2xsIHJ1biB0aGlzIGNhbGxiYWNrIGV2ZXJ5IHRpbWUgYSBzdG9yZSBzdWJzY3JpcHRpb24gdXBkYXRlIHByb3BhZ2F0ZXMgdG8gdGhpcyBjb21wb25lbnRcblxuICB2YXIgY2hlY2tGb3JVcGRhdGVzID0gZnVuY3Rpb24gY2hlY2tGb3JVcGRhdGVzKCkge1xuICAgIGlmIChkaWRVbnN1YnNjcmliZSkge1xuICAgICAgLy8gRG9uJ3QgcnVuIHN0YWxlIGxpc3RlbmVycy5cbiAgICAgIC8vIFJlZHV4IGRvZXNuJ3QgZ3VhcmFudGVlIHVuc3Vic2NyaXB0aW9ucyBoYXBwZW4gdW50aWwgbmV4dCBkaXNwYXRjaC5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgbGF0ZXN0U3RvcmVTdGF0ZSA9IHN0b3JlLmdldFN0YXRlKCk7XG4gICAgdmFyIG5ld0NoaWxkUHJvcHMsIGVycm9yO1xuXG4gICAgdHJ5IHtcbiAgICAgIC8vIEFjdHVhbGx5IHJ1biB0aGUgc2VsZWN0b3Igd2l0aCB0aGUgbW9zdCByZWNlbnQgc3RvcmUgc3RhdGUgYW5kIHdyYXBwZXIgcHJvcHNcbiAgICAgIC8vIHRvIGRldGVybWluZSB3aGF0IHRoZSBjaGlsZCBwcm9wcyBzaG91bGQgYmVcbiAgICAgIG5ld0NoaWxkUHJvcHMgPSBjaGlsZFByb3BzU2VsZWN0b3IobGF0ZXN0U3RvcmVTdGF0ZSwgbGFzdFdyYXBwZXJQcm9wcy5jdXJyZW50KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBlcnJvciA9IGU7XG4gICAgICBsYXN0VGhyb3duRXJyb3IgPSBlO1xuICAgIH1cblxuICAgIGlmICghZXJyb3IpIHtcbiAgICAgIGxhc3RUaHJvd25FcnJvciA9IG51bGw7XG4gICAgfSAvLyBJZiB0aGUgY2hpbGQgcHJvcHMgaGF2ZW4ndCBjaGFuZ2VkLCBub3RoaW5nIHRvIGRvIGhlcmUgLSBjYXNjYWRlIHRoZSBzdWJzY3JpcHRpb24gdXBkYXRlXG5cblxuICAgIGlmIChuZXdDaGlsZFByb3BzID09PSBsYXN0Q2hpbGRQcm9wcy5jdXJyZW50KSB7XG4gICAgICBpZiAoIXJlbmRlcklzU2NoZWR1bGVkLmN1cnJlbnQpIHtcbiAgICAgICAgbm90aWZ5TmVzdGVkU3VicygpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTYXZlIHJlZmVyZW5jZXMgdG8gdGhlIG5ldyBjaGlsZCBwcm9wcy4gIE5vdGUgdGhhdCB3ZSB0cmFjayB0aGUgXCJjaGlsZCBwcm9wcyBmcm9tIHN0b3JlIHVwZGF0ZVwiXG4gICAgICAvLyBhcyBhIHJlZiBpbnN0ZWFkIG9mIGEgdXNlU3RhdGUvdXNlUmVkdWNlciBiZWNhdXNlIHdlIG5lZWQgYSB3YXkgdG8gZGV0ZXJtaW5lIGlmIHRoYXQgdmFsdWUgaGFzXG4gICAgICAvLyBiZWVuIHByb2Nlc3NlZC4gIElmIHRoaXMgd2VudCBpbnRvIHVzZVN0YXRlL3VzZVJlZHVjZXIsIHdlIGNvdWxkbid0IGNsZWFyIG91dCB0aGUgdmFsdWUgd2l0aG91dFxuICAgICAgLy8gZm9yY2luZyBhbm90aGVyIHJlLXJlbmRlciwgd2hpY2ggd2UgZG9uJ3Qgd2FudC5cbiAgICAgIGxhc3RDaGlsZFByb3BzLmN1cnJlbnQgPSBuZXdDaGlsZFByb3BzO1xuICAgICAgY2hpbGRQcm9wc0Zyb21TdG9yZVVwZGF0ZS5jdXJyZW50ID0gbmV3Q2hpbGRQcm9wcztcbiAgICAgIHJlbmRlcklzU2NoZWR1bGVkLmN1cnJlbnQgPSB0cnVlOyAvLyBJZiB0aGUgY2hpbGQgcHJvcHMgX2RpZF8gY2hhbmdlIChvciB3ZSBjYXVnaHQgYW4gZXJyb3IpLCB0aGlzIHdyYXBwZXIgY29tcG9uZW50IG5lZWRzIHRvIHJlLXJlbmRlclxuXG4gICAgICBmb3JjZUNvbXBvbmVudFVwZGF0ZURpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogJ1NUT1JFX1VQREFURUQnLFxuICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgZXJyb3I6IGVycm9yXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfTsgLy8gQWN0dWFsbHkgc3Vic2NyaWJlIHRvIHRoZSBuZWFyZXN0IGNvbm5lY3RlZCBhbmNlc3RvciAob3Igc3RvcmUpXG5cblxuICBzdWJzY3JpcHRpb24ub25TdGF0ZUNoYW5nZSA9IGNoZWNrRm9yVXBkYXRlcztcbiAgc3Vic2NyaXB0aW9uLnRyeVN1YnNjcmliZSgpOyAvLyBQdWxsIGRhdGEgZnJvbSB0aGUgc3RvcmUgYWZ0ZXIgZmlyc3QgcmVuZGVyIGluIGNhc2UgdGhlIHN0b3JlIGhhc1xuICAvLyBjaGFuZ2VkIHNpbmNlIHdlIGJlZ2FuLlxuXG4gIGNoZWNrRm9yVXBkYXRlcygpO1xuXG4gIHZhciB1bnN1YnNjcmliZVdyYXBwZXIgPSBmdW5jdGlvbiB1bnN1YnNjcmliZVdyYXBwZXIoKSB7XG4gICAgZGlkVW5zdWJzY3JpYmUgPSB0cnVlO1xuICAgIHN1YnNjcmlwdGlvbi50cnlVbnN1YnNjcmliZSgpO1xuICAgIHN1YnNjcmlwdGlvbi5vblN0YXRlQ2hhbmdlID0gbnVsbDtcblxuICAgIGlmIChsYXN0VGhyb3duRXJyb3IpIHtcbiAgICAgIC8vIEl0J3MgcG9zc2libGUgdGhhdCB3ZSBjYXVnaHQgYW4gZXJyb3IgZHVlIHRvIGEgYmFkIG1hcFN0YXRlIGZ1bmN0aW9uLCBidXQgdGhlXG4gICAgICAvLyBwYXJlbnQgcmUtcmVuZGVyZWQgd2l0aG91dCB0aGlzIGNvbXBvbmVudCBhbmQgd2UncmUgYWJvdXQgdG8gdW5tb3VudC5cbiAgICAgIC8vIFRoaXMgc2hvdWxkbid0IGhhcHBlbiBhcyBsb25nIGFzIHdlIGRvIHRvcC1kb3duIHN1YnNjcmlwdGlvbnMgY29ycmVjdGx5LCBidXRcbiAgICAgIC8vIGlmIHdlIGV2ZXIgZG8gdGhvc2Ugd3JvbmcsIHRoaXMgdGhyb3cgd2lsbCBzdXJmYWNlIHRoZSBlcnJvciBpbiBvdXIgdGVzdHMuXG4gICAgICAvLyBJbiB0aGF0IGNhc2UsIHRocm93IHRoZSBlcnJvciBmcm9tIGhlcmUgc28gaXQgZG9lc24ndCBnZXQgbG9zdC5cbiAgICAgIHRocm93IGxhc3RUaHJvd25FcnJvcjtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVuc3Vic2NyaWJlV3JhcHBlcjtcbn1cblxudmFyIGluaXRTdGF0ZVVwZGF0ZXMgPSBmdW5jdGlvbiBpbml0U3RhdGVVcGRhdGVzKCkge1xuICByZXR1cm4gW251bGwsIDBdO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29ubmVjdEFkdmFuY2VkKFxuLypcbiAgc2VsZWN0b3JGYWN0b3J5IGlzIGEgZnVuYyB0aGF0IGlzIHJlc3BvbnNpYmxlIGZvciByZXR1cm5pbmcgdGhlIHNlbGVjdG9yIGZ1bmN0aW9uIHVzZWQgdG9cbiAgY29tcHV0ZSBuZXcgcHJvcHMgZnJvbSBzdGF0ZSwgcHJvcHMsIGFuZCBkaXNwYXRjaC4gRm9yIGV4YW1wbGU6XG4gICAgIGV4cG9ydCBkZWZhdWx0IGNvbm5lY3RBZHZhbmNlZCgoZGlzcGF0Y2gsIG9wdGlvbnMpID0+IChzdGF0ZSwgcHJvcHMpID0+ICh7XG4gICAgICB0aGluZzogc3RhdGUudGhpbmdzW3Byb3BzLnRoaW5nSWRdLFxuICAgICAgc2F2ZVRoaW5nOiBmaWVsZHMgPT4gZGlzcGF0Y2goYWN0aW9uQ3JlYXRvcnMuc2F2ZVRoaW5nKHByb3BzLnRoaW5nSWQsIGZpZWxkcykpLFxuICAgIH0pKShZb3VyQ29tcG9uZW50KVxuICAgQWNjZXNzIHRvIGRpc3BhdGNoIGlzIHByb3ZpZGVkIHRvIHRoZSBmYWN0b3J5IHNvIHNlbGVjdG9yRmFjdG9yaWVzIGNhbiBiaW5kIGFjdGlvbkNyZWF0b3JzXG4gIG91dHNpZGUgb2YgdGhlaXIgc2VsZWN0b3IgYXMgYW4gb3B0aW1pemF0aW9uLiBPcHRpb25zIHBhc3NlZCB0byBjb25uZWN0QWR2YW5jZWQgYXJlIHBhc3NlZCB0b1xuICB0aGUgc2VsZWN0b3JGYWN0b3J5LCBhbG9uZyB3aXRoIGRpc3BsYXlOYW1lIGFuZCBXcmFwcGVkQ29tcG9uZW50LCBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50LlxuICAgTm90ZSB0aGF0IHNlbGVjdG9yRmFjdG9yeSBpcyByZXNwb25zaWJsZSBmb3IgYWxsIGNhY2hpbmcvbWVtb2l6YXRpb24gb2YgaW5ib3VuZCBhbmQgb3V0Ym91bmRcbiAgcHJvcHMuIERvIG5vdCB1c2UgY29ubmVjdEFkdmFuY2VkIGRpcmVjdGx5IHdpdGhvdXQgbWVtb2l6aW5nIHJlc3VsdHMgYmV0d2VlbiBjYWxscyB0byB5b3VyXG4gIHNlbGVjdG9yLCBvdGhlcndpc2UgdGhlIENvbm5lY3QgY29tcG9uZW50IHdpbGwgcmUtcmVuZGVyIG9uIGV2ZXJ5IHN0YXRlIG9yIHByb3BzIGNoYW5nZS5cbiovXG5zZWxlY3RvckZhY3RvcnksIC8vIG9wdGlvbnMgb2JqZWN0OlxuX3JlZikge1xuICBpZiAoX3JlZiA9PT0gdm9pZCAwKSB7XG4gICAgX3JlZiA9IHt9O1xuICB9XG5cbiAgdmFyIF9yZWYyID0gX3JlZixcbiAgICAgIF9yZWYyJGdldERpc3BsYXlOYW1lID0gX3JlZjIuZ2V0RGlzcGxheU5hbWUsXG4gICAgICBnZXREaXNwbGF5TmFtZSA9IF9yZWYyJGdldERpc3BsYXlOYW1lID09PSB2b2lkIDAgPyBmdW5jdGlvbiAobmFtZSkge1xuICAgIHJldHVybiBcIkNvbm5lY3RBZHZhbmNlZChcIiArIG5hbWUgKyBcIilcIjtcbiAgfSA6IF9yZWYyJGdldERpc3BsYXlOYW1lLFxuICAgICAgX3JlZjIkbWV0aG9kTmFtZSA9IF9yZWYyLm1ldGhvZE5hbWUsXG4gICAgICBtZXRob2ROYW1lID0gX3JlZjIkbWV0aG9kTmFtZSA9PT0gdm9pZCAwID8gJ2Nvbm5lY3RBZHZhbmNlZCcgOiBfcmVmMiRtZXRob2ROYW1lLFxuICAgICAgX3JlZjIkcmVuZGVyQ291bnRQcm9wID0gX3JlZjIucmVuZGVyQ291bnRQcm9wLFxuICAgICAgcmVuZGVyQ291bnRQcm9wID0gX3JlZjIkcmVuZGVyQ291bnRQcm9wID09PSB2b2lkIDAgPyB1bmRlZmluZWQgOiBfcmVmMiRyZW5kZXJDb3VudFByb3AsXG4gICAgICBfcmVmMiRzaG91bGRIYW5kbGVTdGEgPSBfcmVmMi5zaG91bGRIYW5kbGVTdGF0ZUNoYW5nZXMsXG4gICAgICBzaG91bGRIYW5kbGVTdGF0ZUNoYW5nZXMgPSBfcmVmMiRzaG91bGRIYW5kbGVTdGEgPT09IHZvaWQgMCA/IHRydWUgOiBfcmVmMiRzaG91bGRIYW5kbGVTdGEsXG4gICAgICBfcmVmMiRzdG9yZUtleSA9IF9yZWYyLnN0b3JlS2V5LFxuICAgICAgc3RvcmVLZXkgPSBfcmVmMiRzdG9yZUtleSA9PT0gdm9pZCAwID8gJ3N0b3JlJyA6IF9yZWYyJHN0b3JlS2V5LFxuICAgICAgX3JlZjIkd2l0aFJlZiA9IF9yZWYyLndpdGhSZWYsXG4gICAgICB3aXRoUmVmID0gX3JlZjIkd2l0aFJlZiA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmMiR3aXRoUmVmLFxuICAgICAgX3JlZjIkZm9yd2FyZFJlZiA9IF9yZWYyLmZvcndhcmRSZWYsXG4gICAgICBmb3J3YXJkUmVmID0gX3JlZjIkZm9yd2FyZFJlZiA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmMiRmb3J3YXJkUmVmLFxuICAgICAgX3JlZjIkY29udGV4dCA9IF9yZWYyLmNvbnRleHQsXG4gICAgICBjb250ZXh0ID0gX3JlZjIkY29udGV4dCA9PT0gdm9pZCAwID8gUmVhY3RSZWR1eENvbnRleHQgOiBfcmVmMiRjb250ZXh0LFxuICAgICAgY29ubmVjdE9wdGlvbnMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmMiwgW1wiZ2V0RGlzcGxheU5hbWVcIiwgXCJtZXRob2ROYW1lXCIsIFwicmVuZGVyQ291bnRQcm9wXCIsIFwic2hvdWxkSGFuZGxlU3RhdGVDaGFuZ2VzXCIsIFwic3RvcmVLZXlcIiwgXCJ3aXRoUmVmXCIsIFwiZm9yd2FyZFJlZlwiLCBcImNvbnRleHRcIl0pO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKHJlbmRlckNvdW50UHJvcCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJyZW5kZXJDb3VudFByb3AgaXMgcmVtb3ZlZC4gcmVuZGVyIGNvdW50aW5nIGlzIGJ1aWx0IGludG8gdGhlIGxhdGVzdCBSZWFjdCBEZXYgVG9vbHMgcHJvZmlsaW5nIGV4dGVuc2lvblwiKTtcbiAgICB9XG5cbiAgICBpZiAod2l0aFJlZikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCd3aXRoUmVmIGlzIHJlbW92ZWQuIFRvIGFjY2VzcyB0aGUgd3JhcHBlZCBpbnN0YW5jZSwgdXNlIGEgcmVmIG9uIHRoZSBjb25uZWN0ZWQgY29tcG9uZW50Jyk7XG4gICAgfVxuXG4gICAgdmFyIGN1c3RvbVN0b3JlV2FybmluZ01lc3NhZ2UgPSAnVG8gdXNlIGEgY3VzdG9tIFJlZHV4IHN0b3JlIGZvciBzcGVjaWZpYyBjb21wb25lbnRzLCBjcmVhdGUgYSBjdXN0b20gUmVhY3QgY29udGV4dCB3aXRoICcgKyBcIlJlYWN0LmNyZWF0ZUNvbnRleHQoKSwgYW5kIHBhc3MgdGhlIGNvbnRleHQgb2JqZWN0IHRvIFJlYWN0IFJlZHV4J3MgUHJvdmlkZXIgYW5kIHNwZWNpZmljIGNvbXBvbmVudHNcIiArICcgbGlrZTogPFByb3ZpZGVyIGNvbnRleHQ9e015Q29udGV4dH0+PENvbm5lY3RlZENvbXBvbmVudCBjb250ZXh0PXtNeUNvbnRleHR9IC8+PC9Qcm92aWRlcj4uICcgKyAnWW91IG1heSBhbHNvIHBhc3MgYSB7Y29udGV4dCA6IE15Q29udGV4dH0gb3B0aW9uIHRvIGNvbm5lY3QnO1xuXG4gICAgaWYgKHN0b3JlS2V5ICE9PSAnc3RvcmUnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ3N0b3JlS2V5IGhhcyBiZWVuIHJlbW92ZWQgYW5kIGRvZXMgbm90IGRvIGFueXRoaW5nLiAnICsgY3VzdG9tU3RvcmVXYXJuaW5nTWVzc2FnZSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIENvbnRleHQgPSBjb250ZXh0O1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcFdpdGhDb25uZWN0KFdyYXBwZWRDb21wb25lbnQpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiAhaXNWYWxpZEVsZW1lbnRUeXBlKFdyYXBwZWRDb21wb25lbnQpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJZb3UgbXVzdCBwYXNzIGEgY29tcG9uZW50IHRvIHRoZSBmdW5jdGlvbiByZXR1cm5lZCBieSBcIiArIChtZXRob2ROYW1lICsgXCIuIEluc3RlYWQgcmVjZWl2ZWQgXCIgKyBzdHJpbmdpZnlDb21wb25lbnQoV3JhcHBlZENvbXBvbmVudCkpKTtcbiAgICB9XG5cbiAgICB2YXIgd3JhcHBlZENvbXBvbmVudE5hbWUgPSBXcmFwcGVkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IFdyYXBwZWRDb21wb25lbnQubmFtZSB8fCAnQ29tcG9uZW50JztcbiAgICB2YXIgZGlzcGxheU5hbWUgPSBnZXREaXNwbGF5TmFtZSh3cmFwcGVkQ29tcG9uZW50TmFtZSk7XG5cbiAgICB2YXIgc2VsZWN0b3JGYWN0b3J5T3B0aW9ucyA9IF9leHRlbmRzKHt9LCBjb25uZWN0T3B0aW9ucywge1xuICAgICAgZ2V0RGlzcGxheU5hbWU6IGdldERpc3BsYXlOYW1lLFxuICAgICAgbWV0aG9kTmFtZTogbWV0aG9kTmFtZSxcbiAgICAgIHJlbmRlckNvdW50UHJvcDogcmVuZGVyQ291bnRQcm9wLFxuICAgICAgc2hvdWxkSGFuZGxlU3RhdGVDaGFuZ2VzOiBzaG91bGRIYW5kbGVTdGF0ZUNoYW5nZXMsXG4gICAgICBzdG9yZUtleTogc3RvcmVLZXksXG4gICAgICBkaXNwbGF5TmFtZTogZGlzcGxheU5hbWUsXG4gICAgICB3cmFwcGVkQ29tcG9uZW50TmFtZTogd3JhcHBlZENvbXBvbmVudE5hbWUsXG4gICAgICBXcmFwcGVkQ29tcG9uZW50OiBXcmFwcGVkQ29tcG9uZW50XG4gICAgfSk7XG5cbiAgICB2YXIgcHVyZSA9IGNvbm5lY3RPcHRpb25zLnB1cmU7XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVDaGlsZFNlbGVjdG9yKHN0b3JlKSB7XG4gICAgICByZXR1cm4gc2VsZWN0b3JGYWN0b3J5KHN0b3JlLmRpc3BhdGNoLCBzZWxlY3RvckZhY3RvcnlPcHRpb25zKTtcbiAgICB9IC8vIElmIHdlIGFyZW4ndCBydW5uaW5nIGluIFwicHVyZVwiIG1vZGUsIHdlIGRvbid0IHdhbnQgdG8gbWVtb2l6ZSB2YWx1ZXMuXG4gICAgLy8gVG8gYXZvaWQgY29uZGl0aW9uYWxseSBjYWxsaW5nIGhvb2tzLCB3ZSBmYWxsIGJhY2sgdG8gYSB0aW55IHdyYXBwZXJcbiAgICAvLyB0aGF0IGp1c3QgZXhlY3V0ZXMgdGhlIGdpdmVuIGNhbGxiYWNrIGltbWVkaWF0ZWx5LlxuXG5cbiAgICB2YXIgdXNlUHVyZU9ubHlNZW1vID0gcHVyZSA/IHVzZU1lbW8gOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgIHJldHVybiBjYWxsYmFjaygpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBDb25uZWN0RnVuY3Rpb24ocHJvcHMpIHtcbiAgICAgIHZhciBfdXNlTWVtbyA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBEaXN0aW5ndWlzaCBiZXR3ZWVuIGFjdHVhbCBcImRhdGFcIiBwcm9wcyB0aGF0IHdlcmUgcGFzc2VkIHRvIHRoZSB3cmFwcGVyIGNvbXBvbmVudCxcbiAgICAgICAgLy8gYW5kIHZhbHVlcyBuZWVkZWQgdG8gY29udHJvbCBiZWhhdmlvciAoZm9yd2FyZGVkIHJlZnMsIGFsdGVybmF0ZSBjb250ZXh0IGluc3RhbmNlcykuXG4gICAgICAgIC8vIFRvIG1haW50YWluIHRoZSB3cmFwcGVyUHJvcHMgb2JqZWN0IHJlZmVyZW5jZSwgbWVtb2l6ZSB0aGlzIGRlc3RydWN0dXJpbmcuXG4gICAgICAgIHZhciByZWFjdFJlZHV4Rm9yd2FyZGVkUmVmID0gcHJvcHMucmVhY3RSZWR1eEZvcndhcmRlZFJlZixcbiAgICAgICAgICAgIHdyYXBwZXJQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBbXCJyZWFjdFJlZHV4Rm9yd2FyZGVkUmVmXCJdKTtcblxuICAgICAgICByZXR1cm4gW3Byb3BzLmNvbnRleHQsIHJlYWN0UmVkdXhGb3J3YXJkZWRSZWYsIHdyYXBwZXJQcm9wc107XG4gICAgICB9LCBbcHJvcHNdKSxcbiAgICAgICAgICBwcm9wc0NvbnRleHQgPSBfdXNlTWVtb1swXSxcbiAgICAgICAgICByZWFjdFJlZHV4Rm9yd2FyZGVkUmVmID0gX3VzZU1lbW9bMV0sXG4gICAgICAgICAgd3JhcHBlclByb3BzID0gX3VzZU1lbW9bMl07XG5cbiAgICAgIHZhciBDb250ZXh0VG9Vc2UgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gVXNlcnMgbWF5IG9wdGlvbmFsbHkgcGFzcyBpbiBhIGN1c3RvbSBjb250ZXh0IGluc3RhbmNlIHRvIHVzZSBpbnN0ZWFkIG9mIG91ciBSZWFjdFJlZHV4Q29udGV4dC5cbiAgICAgICAgLy8gTWVtb2l6ZSB0aGUgY2hlY2sgdGhhdCBkZXRlcm1pbmVzIHdoaWNoIGNvbnRleHQgaW5zdGFuY2Ugd2Ugc2hvdWxkIHVzZS5cbiAgICAgICAgcmV0dXJuIHByb3BzQ29udGV4dCAmJiBwcm9wc0NvbnRleHQuQ29uc3VtZXIgJiYgaXNDb250ZXh0Q29uc3VtZXIoIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KHByb3BzQ29udGV4dC5Db25zdW1lciwgbnVsbCkpID8gcHJvcHNDb250ZXh0IDogQ29udGV4dDtcbiAgICAgIH0sIFtwcm9wc0NvbnRleHQsIENvbnRleHRdKTsgLy8gUmV0cmlldmUgdGhlIHN0b3JlIGFuZCBhbmNlc3RvciBzdWJzY3JpcHRpb24gdmlhIGNvbnRleHQsIGlmIGF2YWlsYWJsZVxuXG4gICAgICB2YXIgY29udGV4dFZhbHVlID0gdXNlQ29udGV4dChDb250ZXh0VG9Vc2UpOyAvLyBUaGUgc3RvcmUgX211c3RfIGV4aXN0IGFzIGVpdGhlciBhIHByb3Agb3IgaW4gY29udGV4dC5cbiAgICAgIC8vIFdlJ2xsIGNoZWNrIHRvIHNlZSBpZiBpdCBfbG9va3NfIGxpa2UgYSBSZWR1eCBzdG9yZSBmaXJzdC5cbiAgICAgIC8vIFRoaXMgYWxsb3dzIHVzIHRvIHBhc3MgdGhyb3VnaCBhIGBzdG9yZWAgcHJvcCB0aGF0IGlzIGp1c3QgYSBwbGFpbiB2YWx1ZS5cblxuICAgICAgdmFyIGRpZFN0b3JlQ29tZUZyb21Qcm9wcyA9IEJvb2xlYW4ocHJvcHMuc3RvcmUpICYmIEJvb2xlYW4ocHJvcHMuc3RvcmUuZ2V0U3RhdGUpICYmIEJvb2xlYW4ocHJvcHMuc3RvcmUuZGlzcGF0Y2gpO1xuICAgICAgdmFyIGRpZFN0b3JlQ29tZUZyb21Db250ZXh0ID0gQm9vbGVhbihjb250ZXh0VmFsdWUpICYmIEJvb2xlYW4oY29udGV4dFZhbHVlLnN0b3JlKTtcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgIWRpZFN0b3JlQ29tZUZyb21Qcm9wcyAmJiAhZGlkU3RvcmVDb21lRnJvbUNvbnRleHQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgXFxcInN0b3JlXFxcIiBpbiB0aGUgY29udGV4dCBvZiBcIiArIChcIlxcXCJcIiArIGRpc3BsYXlOYW1lICsgXCJcXFwiLiBFaXRoZXIgd3JhcCB0aGUgcm9vdCBjb21wb25lbnQgaW4gYSA8UHJvdmlkZXI+LCBcIikgKyBcIm9yIHBhc3MgYSBjdXN0b20gUmVhY3QgY29udGV4dCBwcm92aWRlciB0byA8UHJvdmlkZXI+IGFuZCB0aGUgY29ycmVzcG9uZGluZyBcIiArIChcIlJlYWN0IGNvbnRleHQgY29uc3VtZXIgdG8gXCIgKyBkaXNwbGF5TmFtZSArIFwiIGluIGNvbm5lY3Qgb3B0aW9ucy5cIikpO1xuICAgICAgfSAvLyBCYXNlZCBvbiB0aGUgcHJldmlvdXMgY2hlY2ssIG9uZSBvZiB0aGVzZSBtdXN0IGJlIHRydWVcblxuXG4gICAgICB2YXIgc3RvcmUgPSBkaWRTdG9yZUNvbWVGcm9tUHJvcHMgPyBwcm9wcy5zdG9yZSA6IGNvbnRleHRWYWx1ZS5zdG9yZTtcbiAgICAgIHZhciBjaGlsZFByb3BzU2VsZWN0b3IgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gVGhlIGNoaWxkIHByb3BzIHNlbGVjdG9yIG5lZWRzIHRoZSBzdG9yZSByZWZlcmVuY2UgYXMgYW4gaW5wdXQuXG4gICAgICAgIC8vIFJlLWNyZWF0ZSB0aGlzIHNlbGVjdG9yIHdoZW5ldmVyIHRoZSBzdG9yZSBjaGFuZ2VzLlxuICAgICAgICByZXR1cm4gY3JlYXRlQ2hpbGRTZWxlY3RvcihzdG9yZSk7XG4gICAgICB9LCBbc3RvcmVdKTtcblxuICAgICAgdmFyIF91c2VNZW1vMiA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXNob3VsZEhhbmRsZVN0YXRlQ2hhbmdlcykgcmV0dXJuIE5PX1NVQlNDUklQVElPTl9BUlJBWTsgLy8gVGhpcyBTdWJzY3JpcHRpb24ncyBzb3VyY2Ugc2hvdWxkIG1hdGNoIHdoZXJlIHN0b3JlIGNhbWUgZnJvbTogcHJvcHMgdnMuIGNvbnRleHQuIEEgY29tcG9uZW50XG4gICAgICAgIC8vIGNvbm5lY3RlZCB0byB0aGUgc3RvcmUgdmlhIHByb3BzIHNob3VsZG4ndCB1c2Ugc3Vic2NyaXB0aW9uIGZyb20gY29udGV4dCwgb3IgdmljZSB2ZXJzYS5cblxuICAgICAgICB2YXIgc3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbihzdG9yZSwgZGlkU3RvcmVDb21lRnJvbVByb3BzID8gbnVsbCA6IGNvbnRleHRWYWx1ZS5zdWJzY3JpcHRpb24pOyAvLyBgbm90aWZ5TmVzdGVkU3Vic2AgaXMgZHVwbGljYXRlZCB0byBoYW5kbGUgdGhlIGNhc2Ugd2hlcmUgdGhlIGNvbXBvbmVudCBpcyB1bm1vdW50ZWQgaW5cbiAgICAgICAgLy8gdGhlIG1pZGRsZSBvZiB0aGUgbm90aWZpY2F0aW9uIGxvb3AsIHdoZXJlIGBzdWJzY3JpcHRpb25gIHdpbGwgdGhlbiBiZSBudWxsLiBUaGlzIGNhblxuICAgICAgICAvLyBwcm9iYWJseSBiZSBhdm9pZGVkIGlmIFN1YnNjcmlwdGlvbidzIGxpc3RlbmVycyBsb2dpYyBpcyBjaGFuZ2VkIHRvIG5vdCBjYWxsIGxpc3RlbmVyc1xuICAgICAgICAvLyB0aGF0IGhhdmUgYmVlbiB1bnN1YnNjcmliZWQgaW4gdGhlICBtaWRkbGUgb2YgdGhlIG5vdGlmaWNhdGlvbiBsb29wLlxuXG4gICAgICAgIHZhciBub3RpZnlOZXN0ZWRTdWJzID0gc3Vic2NyaXB0aW9uLm5vdGlmeU5lc3RlZFN1YnMuYmluZChzdWJzY3JpcHRpb24pO1xuICAgICAgICByZXR1cm4gW3N1YnNjcmlwdGlvbiwgbm90aWZ5TmVzdGVkU3Vic107XG4gICAgICB9LCBbc3RvcmUsIGRpZFN0b3JlQ29tZUZyb21Qcm9wcywgY29udGV4dFZhbHVlXSksXG4gICAgICAgICAgc3Vic2NyaXB0aW9uID0gX3VzZU1lbW8yWzBdLFxuICAgICAgICAgIG5vdGlmeU5lc3RlZFN1YnMgPSBfdXNlTWVtbzJbMV07IC8vIERldGVybWluZSB3aGF0IHtzdG9yZSwgc3Vic2NyaXB0aW9ufSB2YWx1ZSBzaG91bGQgYmUgcHV0IGludG8gbmVzdGVkIGNvbnRleHQsIGlmIG5lY2Vzc2FyeSxcbiAgICAgIC8vIGFuZCBtZW1vaXplIHRoYXQgdmFsdWUgdG8gYXZvaWQgdW5uZWNlc3NhcnkgY29udGV4dCB1cGRhdGVzLlxuXG5cbiAgICAgIHZhciBvdmVycmlkZGVuQ29udGV4dFZhbHVlID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChkaWRTdG9yZUNvbWVGcm9tUHJvcHMpIHtcbiAgICAgICAgICAvLyBUaGlzIGNvbXBvbmVudCBpcyBkaXJlY3RseSBzdWJzY3JpYmVkIHRvIGEgc3RvcmUgZnJvbSBwcm9wcy5cbiAgICAgICAgICAvLyBXZSBkb24ndCB3YW50IGRlc2NlbmRhbnRzIHJlYWRpbmcgZnJvbSB0aGlzIHN0b3JlIC0gcGFzcyBkb3duIHdoYXRldmVyXG4gICAgICAgICAgLy8gdGhlIGV4aXN0aW5nIGNvbnRleHQgdmFsdWUgaXMgZnJvbSB0aGUgbmVhcmVzdCBjb25uZWN0ZWQgYW5jZXN0b3IuXG4gICAgICAgICAgcmV0dXJuIGNvbnRleHRWYWx1ZTtcbiAgICAgICAgfSAvLyBPdGhlcndpc2UsIHB1dCB0aGlzIGNvbXBvbmVudCdzIHN1YnNjcmlwdGlvbiBpbnN0YW5jZSBpbnRvIGNvbnRleHQsIHNvIHRoYXRcbiAgICAgICAgLy8gY29ubmVjdGVkIGRlc2NlbmRhbnRzIHdvbid0IHVwZGF0ZSB1bnRpbCBhZnRlciB0aGlzIGNvbXBvbmVudCBpcyBkb25lXG5cblxuICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIGNvbnRleHRWYWx1ZSwge1xuICAgICAgICAgIHN1YnNjcmlwdGlvbjogc3Vic2NyaXB0aW9uXG4gICAgICAgIH0pO1xuICAgICAgfSwgW2RpZFN0b3JlQ29tZUZyb21Qcm9wcywgY29udGV4dFZhbHVlLCBzdWJzY3JpcHRpb25dKTsgLy8gV2UgbmVlZCB0byBmb3JjZSB0aGlzIHdyYXBwZXIgY29tcG9uZW50IHRvIHJlLXJlbmRlciB3aGVuZXZlciBhIFJlZHV4IHN0b3JlIHVwZGF0ZVxuICAgICAgLy8gY2F1c2VzIGEgY2hhbmdlIHRvIHRoZSBjYWxjdWxhdGVkIGNoaWxkIGNvbXBvbmVudCBwcm9wcyAob3Igd2UgY2F1Z2h0IGFuIGVycm9yIGluIG1hcFN0YXRlKVxuXG4gICAgICB2YXIgX3VzZVJlZHVjZXIgPSB1c2VSZWR1Y2VyKHN0b3JlU3RhdGVVcGRhdGVzUmVkdWNlciwgRU1QVFlfQVJSQVksIGluaXRTdGF0ZVVwZGF0ZXMpLFxuICAgICAgICAgIF91c2VSZWR1Y2VyJCA9IF91c2VSZWR1Y2VyWzBdLFxuICAgICAgICAgIHByZXZpb3VzU3RhdGVVcGRhdGVSZXN1bHQgPSBfdXNlUmVkdWNlciRbMF0sXG4gICAgICAgICAgZm9yY2VDb21wb25lbnRVcGRhdGVEaXNwYXRjaCA9IF91c2VSZWR1Y2VyWzFdOyAvLyBQcm9wYWdhdGUgYW55IG1hcFN0YXRlL21hcERpc3BhdGNoIGVycm9ycyB1cHdhcmRzXG5cblxuICAgICAgaWYgKHByZXZpb3VzU3RhdGVVcGRhdGVSZXN1bHQgJiYgcHJldmlvdXNTdGF0ZVVwZGF0ZVJlc3VsdC5lcnJvcikge1xuICAgICAgICB0aHJvdyBwcmV2aW91c1N0YXRlVXBkYXRlUmVzdWx0LmVycm9yO1xuICAgICAgfSAvLyBTZXQgdXAgcmVmcyB0byBjb29yZGluYXRlIHZhbHVlcyBiZXR3ZWVuIHRoZSBzdWJzY3JpcHRpb24gZWZmZWN0IGFuZCB0aGUgcmVuZGVyIGxvZ2ljXG5cblxuICAgICAgdmFyIGxhc3RDaGlsZFByb3BzID0gdXNlUmVmKCk7XG4gICAgICB2YXIgbGFzdFdyYXBwZXJQcm9wcyA9IHVzZVJlZih3cmFwcGVyUHJvcHMpO1xuICAgICAgdmFyIGNoaWxkUHJvcHNGcm9tU3RvcmVVcGRhdGUgPSB1c2VSZWYoKTtcbiAgICAgIHZhciByZW5kZXJJc1NjaGVkdWxlZCA9IHVzZVJlZihmYWxzZSk7XG4gICAgICB2YXIgYWN0dWFsQ2hpbGRQcm9wcyA9IHVzZVB1cmVPbmx5TWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFRyaWNreSBsb2dpYyBoZXJlOlxuICAgICAgICAvLyAtIFRoaXMgcmVuZGVyIG1heSBoYXZlIGJlZW4gdHJpZ2dlcmVkIGJ5IGEgUmVkdXggc3RvcmUgdXBkYXRlIHRoYXQgcHJvZHVjZWQgbmV3IGNoaWxkIHByb3BzXG4gICAgICAgIC8vIC0gSG93ZXZlciwgd2UgbWF5IGhhdmUgZ290dGVuIG5ldyB3cmFwcGVyIHByb3BzIGFmdGVyIHRoYXRcbiAgICAgICAgLy8gSWYgd2UgaGF2ZSBuZXcgY2hpbGQgcHJvcHMsIGFuZCB0aGUgc2FtZSB3cmFwcGVyIHByb3BzLCB3ZSBrbm93IHdlIHNob3VsZCB1c2UgdGhlIG5ldyBjaGlsZCBwcm9wcyBhcy1pcy5cbiAgICAgICAgLy8gQnV0LCBpZiB3ZSBoYXZlIG5ldyB3cmFwcGVyIHByb3BzLCB0aG9zZSBtaWdodCBjaGFuZ2UgdGhlIGNoaWxkIHByb3BzLCBzbyB3ZSBoYXZlIHRvIHJlY2FsY3VsYXRlIHRoaW5ncy5cbiAgICAgICAgLy8gU28sIHdlJ2xsIHVzZSB0aGUgY2hpbGQgcHJvcHMgZnJvbSBzdG9yZSB1cGRhdGUgb25seSBpZiB0aGUgd3JhcHBlciBwcm9wcyBhcmUgdGhlIHNhbWUgYXMgbGFzdCB0aW1lLlxuICAgICAgICBpZiAoY2hpbGRQcm9wc0Zyb21TdG9yZVVwZGF0ZS5jdXJyZW50ICYmIHdyYXBwZXJQcm9wcyA9PT0gbGFzdFdyYXBwZXJQcm9wcy5jdXJyZW50KSB7XG4gICAgICAgICAgcmV0dXJuIGNoaWxkUHJvcHNGcm9tU3RvcmVVcGRhdGUuY3VycmVudDtcbiAgICAgICAgfSAvLyBUT0RPIFdlJ3JlIHJlYWRpbmcgdGhlIHN0b3JlIGRpcmVjdGx5IGluIHJlbmRlcigpIGhlcmUuIEJhZCBpZGVhP1xuICAgICAgICAvLyBUaGlzIHdpbGwgbGlrZWx5IGNhdXNlIEJhZCBUaGluZ3MgKFRNKSB0byBoYXBwZW4gaW4gQ29uY3VycmVudCBNb2RlLlxuICAgICAgICAvLyBOb3RlIHRoYXQgd2UgZG8gdGhpcyBiZWNhdXNlIG9uIHJlbmRlcnMgX25vdF8gY2F1c2VkIGJ5IHN0b3JlIHVwZGF0ZXMsIHdlIG5lZWQgdGhlIGxhdGVzdCBzdG9yZSBzdGF0ZVxuICAgICAgICAvLyB0byBkZXRlcm1pbmUgd2hhdCB0aGUgY2hpbGQgcHJvcHMgc2hvdWxkIGJlLlxuXG5cbiAgICAgICAgcmV0dXJuIGNoaWxkUHJvcHNTZWxlY3RvcihzdG9yZS5nZXRTdGF0ZSgpLCB3cmFwcGVyUHJvcHMpO1xuICAgICAgfSwgW3N0b3JlLCBwcmV2aW91c1N0YXRlVXBkYXRlUmVzdWx0LCB3cmFwcGVyUHJvcHNdKTsgLy8gV2UgbmVlZCB0aGlzIHRvIGV4ZWN1dGUgc3luY2hyb25vdXNseSBldmVyeSB0aW1lIHdlIHJlLXJlbmRlci4gSG93ZXZlciwgUmVhY3Qgd2FybnNcbiAgICAgIC8vIGFib3V0IHVzZUxheW91dEVmZmVjdCBpbiBTU1IsIHNvIHdlIHRyeSB0byBkZXRlY3QgZW52aXJvbm1lbnQgYW5kIGZhbGwgYmFjayB0b1xuICAgICAgLy8ganVzdCB1c2VFZmZlY3QgaW5zdGVhZCB0byBhdm9pZCB0aGUgd2FybmluZywgc2luY2UgbmVpdGhlciB3aWxsIHJ1biBhbnl3YXkuXG5cbiAgICAgIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3RXaXRoQXJncyhjYXB0dXJlV3JhcHBlclByb3BzLCBbbGFzdFdyYXBwZXJQcm9wcywgbGFzdENoaWxkUHJvcHMsIHJlbmRlcklzU2NoZWR1bGVkLCB3cmFwcGVyUHJvcHMsIGFjdHVhbENoaWxkUHJvcHMsIGNoaWxkUHJvcHNGcm9tU3RvcmVVcGRhdGUsIG5vdGlmeU5lc3RlZFN1YnNdKTsgLy8gT3VyIHJlLXN1YnNjcmliZSBsb2dpYyBvbmx5IHJ1bnMgd2hlbiB0aGUgc3RvcmUvc3Vic2NyaXB0aW9uIHNldHVwIGNoYW5nZXNcblxuICAgICAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdFdpdGhBcmdzKHN1YnNjcmliZVVwZGF0ZXMsIFtzaG91bGRIYW5kbGVTdGF0ZUNoYW5nZXMsIHN0b3JlLCBzdWJzY3JpcHRpb24sIGNoaWxkUHJvcHNTZWxlY3RvciwgbGFzdFdyYXBwZXJQcm9wcywgbGFzdENoaWxkUHJvcHMsIHJlbmRlcklzU2NoZWR1bGVkLCBjaGlsZFByb3BzRnJvbVN0b3JlVXBkYXRlLCBub3RpZnlOZXN0ZWRTdWJzLCBmb3JjZUNvbXBvbmVudFVwZGF0ZURpc3BhdGNoXSwgW3N0b3JlLCBzdWJzY3JpcHRpb24sIGNoaWxkUHJvcHNTZWxlY3Rvcl0pOyAvLyBOb3cgdGhhdCBhbGwgdGhhdCdzIGRvbmUsIHdlIGNhbiBmaW5hbGx5IHRyeSB0byBhY3R1YWxseSByZW5kZXIgdGhlIGNoaWxkIGNvbXBvbmVudC5cbiAgICAgIC8vIFdlIG1lbW9pemUgdGhlIGVsZW1lbnRzIGZvciB0aGUgcmVuZGVyZWQgY2hpbGQgY29tcG9uZW50IGFzIGFuIG9wdGltaXphdGlvbi5cblxuICAgICAgdmFyIHJlbmRlcmVkV3JhcHBlZENvbXBvbmVudCA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoV3JhcHBlZENvbXBvbmVudCwgX2V4dGVuZHMoe30sIGFjdHVhbENoaWxkUHJvcHMsIHtcbiAgICAgICAgICByZWY6IHJlYWN0UmVkdXhGb3J3YXJkZWRSZWZcbiAgICAgICAgfSkpO1xuICAgICAgfSwgW3JlYWN0UmVkdXhGb3J3YXJkZWRSZWYsIFdyYXBwZWRDb21wb25lbnQsIGFjdHVhbENoaWxkUHJvcHNdKTsgLy8gSWYgUmVhY3Qgc2VlcyB0aGUgZXhhY3Qgc2FtZSBlbGVtZW50IHJlZmVyZW5jZSBhcyBsYXN0IHRpbWUsIGl0IGJhaWxzIG91dCBvZiByZS1yZW5kZXJpbmdcbiAgICAgIC8vIHRoYXQgY2hpbGQsIHNhbWUgYXMgaWYgaXQgd2FzIHdyYXBwZWQgaW4gUmVhY3QubWVtbygpIG9yIHJldHVybmVkIGZhbHNlIGZyb20gc2hvdWxkQ29tcG9uZW50VXBkYXRlLlxuXG4gICAgICB2YXIgcmVuZGVyZWRDaGlsZCA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoc2hvdWxkSGFuZGxlU3RhdGVDaGFuZ2VzKSB7XG4gICAgICAgICAgLy8gSWYgdGhpcyBjb21wb25lbnQgaXMgc3Vic2NyaWJlZCB0byBzdG9yZSB1cGRhdGVzLCB3ZSBuZWVkIHRvIHBhc3MgaXRzIG93blxuICAgICAgICAgIC8vIHN1YnNjcmlwdGlvbiBpbnN0YW5jZSBkb3duIHRvIG91ciBkZXNjZW5kYW50cy4gVGhhdCBtZWFucyByZW5kZXJpbmcgdGhlIHNhbWVcbiAgICAgICAgICAvLyBDb250ZXh0IGluc3RhbmNlLCBhbmQgcHV0dGluZyBhIGRpZmZlcmVudCB2YWx1ZSBpbnRvIHRoZSBjb250ZXh0LlxuICAgICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDb250ZXh0VG9Vc2UuUHJvdmlkZXIsIHtcbiAgICAgICAgICAgIHZhbHVlOiBvdmVycmlkZGVuQ29udGV4dFZhbHVlXG4gICAgICAgICAgfSwgcmVuZGVyZWRXcmFwcGVkQ29tcG9uZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZW5kZXJlZFdyYXBwZWRDb21wb25lbnQ7XG4gICAgICB9LCBbQ29udGV4dFRvVXNlLCByZW5kZXJlZFdyYXBwZWRDb21wb25lbnQsIG92ZXJyaWRkZW5Db250ZXh0VmFsdWVdKTtcbiAgICAgIHJldHVybiByZW5kZXJlZENoaWxkO1xuICAgIH0gLy8gSWYgd2UncmUgaW4gXCJwdXJlXCIgbW9kZSwgZW5zdXJlIG91ciB3cmFwcGVyIGNvbXBvbmVudCBvbmx5IHJlLXJlbmRlcnMgd2hlbiBpbmNvbWluZyBwcm9wcyBoYXZlIGNoYW5nZWQuXG5cblxuICAgIHZhciBDb25uZWN0ID0gcHVyZSA/IFJlYWN0Lm1lbW8oQ29ubmVjdEZ1bmN0aW9uKSA6IENvbm5lY3RGdW5jdGlvbjtcbiAgICBDb25uZWN0LldyYXBwZWRDb21wb25lbnQgPSBXcmFwcGVkQ29tcG9uZW50O1xuICAgIENvbm5lY3QuZGlzcGxheU5hbWUgPSBkaXNwbGF5TmFtZTtcblxuICAgIGlmIChmb3J3YXJkUmVmKSB7XG4gICAgICB2YXIgZm9yd2FyZGVkID0gUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBmb3J3YXJkQ29ubmVjdFJlZihwcm9wcywgcmVmKSB7XG4gICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDb25uZWN0LCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICAgICAgICByZWFjdFJlZHV4Rm9yd2FyZGVkUmVmOiByZWZcbiAgICAgICAgfSkpO1xuICAgICAgfSk7XG4gICAgICBmb3J3YXJkZWQuZGlzcGxheU5hbWUgPSBkaXNwbGF5TmFtZTtcbiAgICAgIGZvcndhcmRlZC5XcmFwcGVkQ29tcG9uZW50ID0gV3JhcHBlZENvbXBvbmVudDtcbiAgICAgIHJldHVybiBob2lzdFN0YXRpY3MoZm9yd2FyZGVkLCBXcmFwcGVkQ29tcG9uZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gaG9pc3RTdGF0aWNzKENvbm5lY3QsIFdyYXBwZWRDb21wb25lbnQpO1xuICB9O1xufSIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCI7XG5pbXBvcnQgY29ubmVjdEFkdmFuY2VkIGZyb20gJy4uL2NvbXBvbmVudHMvY29ubmVjdEFkdmFuY2VkJztcbmltcG9ydCBzaGFsbG93RXF1YWwgZnJvbSAnLi4vdXRpbHMvc2hhbGxvd0VxdWFsJztcbmltcG9ydCBkZWZhdWx0TWFwRGlzcGF0Y2hUb1Byb3BzRmFjdG9yaWVzIGZyb20gJy4vbWFwRGlzcGF0Y2hUb1Byb3BzJztcbmltcG9ydCBkZWZhdWx0TWFwU3RhdGVUb1Byb3BzRmFjdG9yaWVzIGZyb20gJy4vbWFwU3RhdGVUb1Byb3BzJztcbmltcG9ydCBkZWZhdWx0TWVyZ2VQcm9wc0ZhY3RvcmllcyBmcm9tICcuL21lcmdlUHJvcHMnO1xuaW1wb3J0IGRlZmF1bHRTZWxlY3RvckZhY3RvcnkgZnJvbSAnLi9zZWxlY3RvckZhY3RvcnknO1xuLypcbiAgY29ubmVjdCBpcyBhIGZhY2FkZSBvdmVyIGNvbm5lY3RBZHZhbmNlZC4gSXQgdHVybnMgaXRzIGFyZ3MgaW50byBhIGNvbXBhdGlibGVcbiAgc2VsZWN0b3JGYWN0b3J5LCB3aGljaCBoYXMgdGhlIHNpZ25hdHVyZTpcblxuICAgIChkaXNwYXRjaCwgb3B0aW9ucykgPT4gKG5leHRTdGF0ZSwgbmV4dE93blByb3BzKSA9PiBuZXh0RmluYWxQcm9wc1xuICBcbiAgY29ubmVjdCBwYXNzZXMgaXRzIGFyZ3MgdG8gY29ubmVjdEFkdmFuY2VkIGFzIG9wdGlvbnMsIHdoaWNoIHdpbGwgaW4gdHVybiBwYXNzIHRoZW0gdG9cbiAgc2VsZWN0b3JGYWN0b3J5IGVhY2ggdGltZSBhIENvbm5lY3QgY29tcG9uZW50IGluc3RhbmNlIGlzIGluc3RhbnRpYXRlZCBvciBob3QgcmVsb2FkZWQuXG5cbiAgc2VsZWN0b3JGYWN0b3J5IHJldHVybnMgYSBmaW5hbCBwcm9wcyBzZWxlY3RvciBmcm9tIGl0cyBtYXBTdGF0ZVRvUHJvcHMsXG4gIG1hcFN0YXRlVG9Qcm9wc0ZhY3RvcmllcywgbWFwRGlzcGF0Y2hUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHNGYWN0b3JpZXMsIG1lcmdlUHJvcHMsXG4gIG1lcmdlUHJvcHNGYWN0b3JpZXMsIGFuZCBwdXJlIGFyZ3MuXG5cbiAgVGhlIHJlc3VsdGluZyBmaW5hbCBwcm9wcyBzZWxlY3RvciBpcyBjYWxsZWQgYnkgdGhlIENvbm5lY3QgY29tcG9uZW50IGluc3RhbmNlIHdoZW5ldmVyXG4gIGl0IHJlY2VpdmVzIG5ldyBwcm9wcyBvciBzdG9yZSBzdGF0ZS5cbiAqL1xuXG5mdW5jdGlvbiBtYXRjaChhcmcsIGZhY3RvcmllcywgbmFtZSkge1xuICBmb3IgKHZhciBpID0gZmFjdG9yaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgdmFyIHJlc3VsdCA9IGZhY3Rvcmllc1tpXShhcmcpO1xuICAgIGlmIChyZXN1bHQpIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoLCBvcHRpb25zKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB2YWx1ZSBvZiB0eXBlIFwiICsgdHlwZW9mIGFyZyArIFwiIGZvciBcIiArIG5hbWUgKyBcIiBhcmd1bWVudCB3aGVuIGNvbm5lY3RpbmcgY29tcG9uZW50IFwiICsgb3B0aW9ucy53cmFwcGVkQ29tcG9uZW50TmFtZSArIFwiLlwiKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gc3RyaWN0RXF1YWwoYSwgYikge1xuICByZXR1cm4gYSA9PT0gYjtcbn0gLy8gY3JlYXRlQ29ubmVjdCB3aXRoIGRlZmF1bHQgYXJncyBidWlsZHMgdGhlICdvZmZpY2lhbCcgY29ubmVjdCBiZWhhdmlvci4gQ2FsbGluZyBpdCB3aXRoXG4vLyBkaWZmZXJlbnQgb3B0aW9ucyBvcGVucyB1cCBzb21lIHRlc3RpbmcgYW5kIGV4dGVuc2liaWxpdHkgc2NlbmFyaW9zXG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbm5lY3QoX3RlbXApIHtcbiAgdmFyIF9yZWYgPSBfdGVtcCA9PT0gdm9pZCAwID8ge30gOiBfdGVtcCxcbiAgICAgIF9yZWYkY29ubmVjdEhPQyA9IF9yZWYuY29ubmVjdEhPQyxcbiAgICAgIGNvbm5lY3RIT0MgPSBfcmVmJGNvbm5lY3RIT0MgPT09IHZvaWQgMCA/IGNvbm5lY3RBZHZhbmNlZCA6IF9yZWYkY29ubmVjdEhPQyxcbiAgICAgIF9yZWYkbWFwU3RhdGVUb1Byb3BzRiA9IF9yZWYubWFwU3RhdGVUb1Byb3BzRmFjdG9yaWVzLFxuICAgICAgbWFwU3RhdGVUb1Byb3BzRmFjdG9yaWVzID0gX3JlZiRtYXBTdGF0ZVRvUHJvcHNGID09PSB2b2lkIDAgPyBkZWZhdWx0TWFwU3RhdGVUb1Byb3BzRmFjdG9yaWVzIDogX3JlZiRtYXBTdGF0ZVRvUHJvcHNGLFxuICAgICAgX3JlZiRtYXBEaXNwYXRjaFRvUHJvID0gX3JlZi5tYXBEaXNwYXRjaFRvUHJvcHNGYWN0b3JpZXMsXG4gICAgICBtYXBEaXNwYXRjaFRvUHJvcHNGYWN0b3JpZXMgPSBfcmVmJG1hcERpc3BhdGNoVG9Qcm8gPT09IHZvaWQgMCA/IGRlZmF1bHRNYXBEaXNwYXRjaFRvUHJvcHNGYWN0b3JpZXMgOiBfcmVmJG1hcERpc3BhdGNoVG9Qcm8sXG4gICAgICBfcmVmJG1lcmdlUHJvcHNGYWN0b3IgPSBfcmVmLm1lcmdlUHJvcHNGYWN0b3JpZXMsXG4gICAgICBtZXJnZVByb3BzRmFjdG9yaWVzID0gX3JlZiRtZXJnZVByb3BzRmFjdG9yID09PSB2b2lkIDAgPyBkZWZhdWx0TWVyZ2VQcm9wc0ZhY3RvcmllcyA6IF9yZWYkbWVyZ2VQcm9wc0ZhY3RvcixcbiAgICAgIF9yZWYkc2VsZWN0b3JGYWN0b3J5ID0gX3JlZi5zZWxlY3RvckZhY3RvcnksXG4gICAgICBzZWxlY3RvckZhY3RvcnkgPSBfcmVmJHNlbGVjdG9yRmFjdG9yeSA9PT0gdm9pZCAwID8gZGVmYXVsdFNlbGVjdG9yRmFjdG9yeSA6IF9yZWYkc2VsZWN0b3JGYWN0b3J5O1xuXG4gIHJldHVybiBmdW5jdGlvbiBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzLCBtZXJnZVByb3BzLCBfcmVmMikge1xuICAgIGlmIChfcmVmMiA9PT0gdm9pZCAwKSB7XG4gICAgICBfcmVmMiA9IHt9O1xuICAgIH1cblxuICAgIHZhciBfcmVmMyA9IF9yZWYyLFxuICAgICAgICBfcmVmMyRwdXJlID0gX3JlZjMucHVyZSxcbiAgICAgICAgcHVyZSA9IF9yZWYzJHB1cmUgPT09IHZvaWQgMCA/IHRydWUgOiBfcmVmMyRwdXJlLFxuICAgICAgICBfcmVmMyRhcmVTdGF0ZXNFcXVhbCA9IF9yZWYzLmFyZVN0YXRlc0VxdWFsLFxuICAgICAgICBhcmVTdGF0ZXNFcXVhbCA9IF9yZWYzJGFyZVN0YXRlc0VxdWFsID09PSB2b2lkIDAgPyBzdHJpY3RFcXVhbCA6IF9yZWYzJGFyZVN0YXRlc0VxdWFsLFxuICAgICAgICBfcmVmMyRhcmVPd25Qcm9wc0VxdWEgPSBfcmVmMy5hcmVPd25Qcm9wc0VxdWFsLFxuICAgICAgICBhcmVPd25Qcm9wc0VxdWFsID0gX3JlZjMkYXJlT3duUHJvcHNFcXVhID09PSB2b2lkIDAgPyBzaGFsbG93RXF1YWwgOiBfcmVmMyRhcmVPd25Qcm9wc0VxdWEsXG4gICAgICAgIF9yZWYzJGFyZVN0YXRlUHJvcHNFcSA9IF9yZWYzLmFyZVN0YXRlUHJvcHNFcXVhbCxcbiAgICAgICAgYXJlU3RhdGVQcm9wc0VxdWFsID0gX3JlZjMkYXJlU3RhdGVQcm9wc0VxID09PSB2b2lkIDAgPyBzaGFsbG93RXF1YWwgOiBfcmVmMyRhcmVTdGF0ZVByb3BzRXEsXG4gICAgICAgIF9yZWYzJGFyZU1lcmdlZFByb3BzRSA9IF9yZWYzLmFyZU1lcmdlZFByb3BzRXF1YWwsXG4gICAgICAgIGFyZU1lcmdlZFByb3BzRXF1YWwgPSBfcmVmMyRhcmVNZXJnZWRQcm9wc0UgPT09IHZvaWQgMCA/IHNoYWxsb3dFcXVhbCA6IF9yZWYzJGFyZU1lcmdlZFByb3BzRSxcbiAgICAgICAgZXh0cmFPcHRpb25zID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZjMsIFtcInB1cmVcIiwgXCJhcmVTdGF0ZXNFcXVhbFwiLCBcImFyZU93blByb3BzRXF1YWxcIiwgXCJhcmVTdGF0ZVByb3BzRXF1YWxcIiwgXCJhcmVNZXJnZWRQcm9wc0VxdWFsXCJdKTtcblxuICAgIHZhciBpbml0TWFwU3RhdGVUb1Byb3BzID0gbWF0Y2gobWFwU3RhdGVUb1Byb3BzLCBtYXBTdGF0ZVRvUHJvcHNGYWN0b3JpZXMsICdtYXBTdGF0ZVRvUHJvcHMnKTtcbiAgICB2YXIgaW5pdE1hcERpc3BhdGNoVG9Qcm9wcyA9IG1hdGNoKG1hcERpc3BhdGNoVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzRmFjdG9yaWVzLCAnbWFwRGlzcGF0Y2hUb1Byb3BzJyk7XG4gICAgdmFyIGluaXRNZXJnZVByb3BzID0gbWF0Y2gobWVyZ2VQcm9wcywgbWVyZ2VQcm9wc0ZhY3RvcmllcywgJ21lcmdlUHJvcHMnKTtcbiAgICByZXR1cm4gY29ubmVjdEhPQyhzZWxlY3RvckZhY3RvcnksIF9leHRlbmRzKHtcbiAgICAgIC8vIHVzZWQgaW4gZXJyb3IgbWVzc2FnZXNcbiAgICAgIG1ldGhvZE5hbWU6ICdjb25uZWN0JyxcbiAgICAgIC8vIHVzZWQgdG8gY29tcHV0ZSBDb25uZWN0J3MgZGlzcGxheU5hbWUgZnJvbSB0aGUgd3JhcHBlZCBjb21wb25lbnQncyBkaXNwbGF5TmFtZS5cbiAgICAgIGdldERpc3BsYXlOYW1lOiBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZShuYW1lKSB7XG4gICAgICAgIHJldHVybiBcIkNvbm5lY3QoXCIgKyBuYW1lICsgXCIpXCI7XG4gICAgICB9LFxuICAgICAgLy8gaWYgbWFwU3RhdGVUb1Byb3BzIGlzIGZhbHN5LCB0aGUgQ29ubmVjdCBjb21wb25lbnQgZG9lc24ndCBzdWJzY3JpYmUgdG8gc3RvcmUgc3RhdGUgY2hhbmdlc1xuICAgICAgc2hvdWxkSGFuZGxlU3RhdGVDaGFuZ2VzOiBCb29sZWFuKG1hcFN0YXRlVG9Qcm9wcyksXG4gICAgICAvLyBwYXNzZWQgdGhyb3VnaCB0byBzZWxlY3RvckZhY3RvcnlcbiAgICAgIGluaXRNYXBTdGF0ZVRvUHJvcHM6IGluaXRNYXBTdGF0ZVRvUHJvcHMsXG4gICAgICBpbml0TWFwRGlzcGF0Y2hUb1Byb3BzOiBpbml0TWFwRGlzcGF0Y2hUb1Byb3BzLFxuICAgICAgaW5pdE1lcmdlUHJvcHM6IGluaXRNZXJnZVByb3BzLFxuICAgICAgcHVyZTogcHVyZSxcbiAgICAgIGFyZVN0YXRlc0VxdWFsOiBhcmVTdGF0ZXNFcXVhbCxcbiAgICAgIGFyZU93blByb3BzRXF1YWw6IGFyZU93blByb3BzRXF1YWwsXG4gICAgICBhcmVTdGF0ZVByb3BzRXF1YWw6IGFyZVN0YXRlUHJvcHNFcXVhbCxcbiAgICAgIGFyZU1lcmdlZFByb3BzRXF1YWw6IGFyZU1lcmdlZFByb3BzRXF1YWxcbiAgICB9LCBleHRyYU9wdGlvbnMpKTtcbiAgfTtcbn1cbmV4cG9ydCBkZWZhdWx0IC8qI19fUFVSRV9fKi9jcmVhdGVDb25uZWN0KCk7IiwiaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgd3JhcE1hcFRvUHJvcHNDb25zdGFudCwgd3JhcE1hcFRvUHJvcHNGdW5jIH0gZnJvbSAnLi93cmFwTWFwVG9Qcm9wcyc7XG5leHBvcnQgZnVuY3Rpb24gd2hlbk1hcERpc3BhdGNoVG9Qcm9wc0lzRnVuY3Rpb24obWFwRGlzcGF0Y2hUb1Byb3BzKSB7XG4gIHJldHVybiB0eXBlb2YgbWFwRGlzcGF0Y2hUb1Byb3BzID09PSAnZnVuY3Rpb24nID8gd3JhcE1hcFRvUHJvcHNGdW5jKG1hcERpc3BhdGNoVG9Qcm9wcywgJ21hcERpc3BhdGNoVG9Qcm9wcycpIDogdW5kZWZpbmVkO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHdoZW5NYXBEaXNwYXRjaFRvUHJvcHNJc01pc3NpbmcobWFwRGlzcGF0Y2hUb1Byb3BzKSB7XG4gIHJldHVybiAhbWFwRGlzcGF0Y2hUb1Byb3BzID8gd3JhcE1hcFRvUHJvcHNDb25zdGFudChmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZGlzcGF0Y2g6IGRpc3BhdGNoXG4gICAgfTtcbiAgfSkgOiB1bmRlZmluZWQ7XG59XG5leHBvcnQgZnVuY3Rpb24gd2hlbk1hcERpc3BhdGNoVG9Qcm9wc0lzT2JqZWN0KG1hcERpc3BhdGNoVG9Qcm9wcykge1xuICByZXR1cm4gbWFwRGlzcGF0Y2hUb1Byb3BzICYmIHR5cGVvZiBtYXBEaXNwYXRjaFRvUHJvcHMgPT09ICdvYmplY3QnID8gd3JhcE1hcFRvUHJvcHNDb25zdGFudChmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcbiAgICByZXR1cm4gYmluZEFjdGlvbkNyZWF0b3JzKG1hcERpc3BhdGNoVG9Qcm9wcywgZGlzcGF0Y2gpO1xuICB9KSA6IHVuZGVmaW5lZDtcbn1cbmV4cG9ydCBkZWZhdWx0IFt3aGVuTWFwRGlzcGF0Y2hUb1Byb3BzSXNGdW5jdGlvbiwgd2hlbk1hcERpc3BhdGNoVG9Qcm9wc0lzTWlzc2luZywgd2hlbk1hcERpc3BhdGNoVG9Qcm9wc0lzT2JqZWN0XTsiLCJpbXBvcnQgeyB3cmFwTWFwVG9Qcm9wc0NvbnN0YW50LCB3cmFwTWFwVG9Qcm9wc0Z1bmMgfSBmcm9tICcuL3dyYXBNYXBUb1Byb3BzJztcbmV4cG9ydCBmdW5jdGlvbiB3aGVuTWFwU3RhdGVUb1Byb3BzSXNGdW5jdGlvbihtYXBTdGF0ZVRvUHJvcHMpIHtcbiAgcmV0dXJuIHR5cGVvZiBtYXBTdGF0ZVRvUHJvcHMgPT09ICdmdW5jdGlvbicgPyB3cmFwTWFwVG9Qcm9wc0Z1bmMobWFwU3RhdGVUb1Byb3BzLCAnbWFwU3RhdGVUb1Byb3BzJykgOiB1bmRlZmluZWQ7XG59XG5leHBvcnQgZnVuY3Rpb24gd2hlbk1hcFN0YXRlVG9Qcm9wc0lzTWlzc2luZyhtYXBTdGF0ZVRvUHJvcHMpIHtcbiAgcmV0dXJuICFtYXBTdGF0ZVRvUHJvcHMgPyB3cmFwTWFwVG9Qcm9wc0NvbnN0YW50KGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge307XG4gIH0pIDogdW5kZWZpbmVkO1xufVxuZXhwb3J0IGRlZmF1bHQgW3doZW5NYXBTdGF0ZVRvUHJvcHNJc0Z1bmN0aW9uLCB3aGVuTWFwU3RhdGVUb1Byb3BzSXNNaXNzaW5nXTsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCB2ZXJpZnlQbGFpbk9iamVjdCBmcm9tICcuLi91dGlscy92ZXJpZnlQbGFpbk9iamVjdCc7XG5leHBvcnQgZnVuY3Rpb24gZGVmYXVsdE1lcmdlUHJvcHMoc3RhdGVQcm9wcywgZGlzcGF0Y2hQcm9wcywgb3duUHJvcHMpIHtcbiAgcmV0dXJuIF9leHRlbmRzKHt9LCBvd25Qcm9wcywgc3RhdGVQcm9wcywgZGlzcGF0Y2hQcm9wcyk7XG59XG5leHBvcnQgZnVuY3Rpb24gd3JhcE1lcmdlUHJvcHNGdW5jKG1lcmdlUHJvcHMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGluaXRNZXJnZVByb3BzUHJveHkoZGlzcGF0Y2gsIF9yZWYpIHtcbiAgICB2YXIgZGlzcGxheU5hbWUgPSBfcmVmLmRpc3BsYXlOYW1lLFxuICAgICAgICBwdXJlID0gX3JlZi5wdXJlLFxuICAgICAgICBhcmVNZXJnZWRQcm9wc0VxdWFsID0gX3JlZi5hcmVNZXJnZWRQcm9wc0VxdWFsO1xuICAgIHZhciBoYXNSdW5PbmNlID0gZmFsc2U7XG4gICAgdmFyIG1lcmdlZFByb3BzO1xuICAgIHJldHVybiBmdW5jdGlvbiBtZXJnZVByb3BzUHJveHkoc3RhdGVQcm9wcywgZGlzcGF0Y2hQcm9wcywgb3duUHJvcHMpIHtcbiAgICAgIHZhciBuZXh0TWVyZ2VkUHJvcHMgPSBtZXJnZVByb3BzKHN0YXRlUHJvcHMsIGRpc3BhdGNoUHJvcHMsIG93blByb3BzKTtcblxuICAgICAgaWYgKGhhc1J1bk9uY2UpIHtcbiAgICAgICAgaWYgKCFwdXJlIHx8ICFhcmVNZXJnZWRQcm9wc0VxdWFsKG5leHRNZXJnZWRQcm9wcywgbWVyZ2VkUHJvcHMpKSBtZXJnZWRQcm9wcyA9IG5leHRNZXJnZWRQcm9wcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGhhc1J1bk9uY2UgPSB0cnVlO1xuICAgICAgICBtZXJnZWRQcm9wcyA9IG5leHRNZXJnZWRQcm9wcztcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHZlcmlmeVBsYWluT2JqZWN0KG1lcmdlZFByb3BzLCBkaXNwbGF5TmFtZSwgJ21lcmdlUHJvcHMnKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG1lcmdlZFByb3BzO1xuICAgIH07XG4gIH07XG59XG5leHBvcnQgZnVuY3Rpb24gd2hlbk1lcmdlUHJvcHNJc0Z1bmN0aW9uKG1lcmdlUHJvcHMpIHtcbiAgcmV0dXJuIHR5cGVvZiBtZXJnZVByb3BzID09PSAnZnVuY3Rpb24nID8gd3JhcE1lcmdlUHJvcHNGdW5jKG1lcmdlUHJvcHMpIDogdW5kZWZpbmVkO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHdoZW5NZXJnZVByb3BzSXNPbWl0dGVkKG1lcmdlUHJvcHMpIHtcbiAgcmV0dXJuICFtZXJnZVByb3BzID8gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBkZWZhdWx0TWVyZ2VQcm9wcztcbiAgfSA6IHVuZGVmaW5lZDtcbn1cbmV4cG9ydCBkZWZhdWx0IFt3aGVuTWVyZ2VQcm9wc0lzRnVuY3Rpb24sIHdoZW5NZXJnZVByb3BzSXNPbWl0dGVkXTsiLCJpbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIjtcbmltcG9ydCB2ZXJpZnlTdWJzZWxlY3RvcnMgZnJvbSAnLi92ZXJpZnlTdWJzZWxlY3RvcnMnO1xuZXhwb3J0IGZ1bmN0aW9uIGltcHVyZUZpbmFsUHJvcHNTZWxlY3RvckZhY3RvcnkobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMsIG1lcmdlUHJvcHMsIGRpc3BhdGNoKSB7XG4gIHJldHVybiBmdW5jdGlvbiBpbXB1cmVGaW5hbFByb3BzU2VsZWN0b3Ioc3RhdGUsIG93blByb3BzKSB7XG4gICAgcmV0dXJuIG1lcmdlUHJvcHMobWFwU3RhdGVUb1Byb3BzKHN0YXRlLCBvd25Qcm9wcyksIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCwgb3duUHJvcHMpLCBvd25Qcm9wcyk7XG4gIH07XG59XG5leHBvcnQgZnVuY3Rpb24gcHVyZUZpbmFsUHJvcHNTZWxlY3RvckZhY3RvcnkobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMsIG1lcmdlUHJvcHMsIGRpc3BhdGNoLCBfcmVmKSB7XG4gIHZhciBhcmVTdGF0ZXNFcXVhbCA9IF9yZWYuYXJlU3RhdGVzRXF1YWwsXG4gICAgICBhcmVPd25Qcm9wc0VxdWFsID0gX3JlZi5hcmVPd25Qcm9wc0VxdWFsLFxuICAgICAgYXJlU3RhdGVQcm9wc0VxdWFsID0gX3JlZi5hcmVTdGF0ZVByb3BzRXF1YWw7XG4gIHZhciBoYXNSdW5BdExlYXN0T25jZSA9IGZhbHNlO1xuICB2YXIgc3RhdGU7XG4gIHZhciBvd25Qcm9wcztcbiAgdmFyIHN0YXRlUHJvcHM7XG4gIHZhciBkaXNwYXRjaFByb3BzO1xuICB2YXIgbWVyZ2VkUHJvcHM7XG5cbiAgZnVuY3Rpb24gaGFuZGxlRmlyc3RDYWxsKGZpcnN0U3RhdGUsIGZpcnN0T3duUHJvcHMpIHtcbiAgICBzdGF0ZSA9IGZpcnN0U3RhdGU7XG4gICAgb3duUHJvcHMgPSBmaXJzdE93blByb3BzO1xuICAgIHN0YXRlUHJvcHMgPSBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUsIG93blByb3BzKTtcbiAgICBkaXNwYXRjaFByb3BzID0gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoLCBvd25Qcm9wcyk7XG4gICAgbWVyZ2VkUHJvcHMgPSBtZXJnZVByb3BzKHN0YXRlUHJvcHMsIGRpc3BhdGNoUHJvcHMsIG93blByb3BzKTtcbiAgICBoYXNSdW5BdExlYXN0T25jZSA9IHRydWU7XG4gICAgcmV0dXJuIG1lcmdlZFByb3BzO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlTmV3UHJvcHNBbmROZXdTdGF0ZSgpIHtcbiAgICBzdGF0ZVByb3BzID0gbWFwU3RhdGVUb1Byb3BzKHN0YXRlLCBvd25Qcm9wcyk7XG4gICAgaWYgKG1hcERpc3BhdGNoVG9Qcm9wcy5kZXBlbmRzT25Pd25Qcm9wcykgZGlzcGF0Y2hQcm9wcyA9IG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCwgb3duUHJvcHMpO1xuICAgIG1lcmdlZFByb3BzID0gbWVyZ2VQcm9wcyhzdGF0ZVByb3BzLCBkaXNwYXRjaFByb3BzLCBvd25Qcm9wcyk7XG4gICAgcmV0dXJuIG1lcmdlZFByb3BzO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlTmV3UHJvcHMoKSB7XG4gICAgaWYgKG1hcFN0YXRlVG9Qcm9wcy5kZXBlbmRzT25Pd25Qcm9wcykgc3RhdGVQcm9wcyA9IG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSwgb3duUHJvcHMpO1xuICAgIGlmIChtYXBEaXNwYXRjaFRvUHJvcHMuZGVwZW5kc09uT3duUHJvcHMpIGRpc3BhdGNoUHJvcHMgPSBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gsIG93blByb3BzKTtcbiAgICBtZXJnZWRQcm9wcyA9IG1lcmdlUHJvcHMoc3RhdGVQcm9wcywgZGlzcGF0Y2hQcm9wcywgb3duUHJvcHMpO1xuICAgIHJldHVybiBtZXJnZWRQcm9wcztcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZU5ld1N0YXRlKCkge1xuICAgIHZhciBuZXh0U3RhdGVQcm9wcyA9IG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSwgb3duUHJvcHMpO1xuICAgIHZhciBzdGF0ZVByb3BzQ2hhbmdlZCA9ICFhcmVTdGF0ZVByb3BzRXF1YWwobmV4dFN0YXRlUHJvcHMsIHN0YXRlUHJvcHMpO1xuICAgIHN0YXRlUHJvcHMgPSBuZXh0U3RhdGVQcm9wcztcbiAgICBpZiAoc3RhdGVQcm9wc0NoYW5nZWQpIG1lcmdlZFByb3BzID0gbWVyZ2VQcm9wcyhzdGF0ZVByb3BzLCBkaXNwYXRjaFByb3BzLCBvd25Qcm9wcyk7XG4gICAgcmV0dXJuIG1lcmdlZFByb3BzO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlU3Vic2VxdWVudENhbGxzKG5leHRTdGF0ZSwgbmV4dE93blByb3BzKSB7XG4gICAgdmFyIHByb3BzQ2hhbmdlZCA9ICFhcmVPd25Qcm9wc0VxdWFsKG5leHRPd25Qcm9wcywgb3duUHJvcHMpO1xuICAgIHZhciBzdGF0ZUNoYW5nZWQgPSAhYXJlU3RhdGVzRXF1YWwobmV4dFN0YXRlLCBzdGF0ZSk7XG4gICAgc3RhdGUgPSBuZXh0U3RhdGU7XG4gICAgb3duUHJvcHMgPSBuZXh0T3duUHJvcHM7XG4gICAgaWYgKHByb3BzQ2hhbmdlZCAmJiBzdGF0ZUNoYW5nZWQpIHJldHVybiBoYW5kbGVOZXdQcm9wc0FuZE5ld1N0YXRlKCk7XG4gICAgaWYgKHByb3BzQ2hhbmdlZCkgcmV0dXJuIGhhbmRsZU5ld1Byb3BzKCk7XG4gICAgaWYgKHN0YXRlQ2hhbmdlZCkgcmV0dXJuIGhhbmRsZU5ld1N0YXRlKCk7XG4gICAgcmV0dXJuIG1lcmdlZFByb3BzO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHB1cmVGaW5hbFByb3BzU2VsZWN0b3IobmV4dFN0YXRlLCBuZXh0T3duUHJvcHMpIHtcbiAgICByZXR1cm4gaGFzUnVuQXRMZWFzdE9uY2UgPyBoYW5kbGVTdWJzZXF1ZW50Q2FsbHMobmV4dFN0YXRlLCBuZXh0T3duUHJvcHMpIDogaGFuZGxlRmlyc3RDYWxsKG5leHRTdGF0ZSwgbmV4dE93blByb3BzKTtcbiAgfTtcbn0gLy8gVE9ETzogQWRkIG1vcmUgY29tbWVudHNcbi8vIElmIHB1cmUgaXMgdHJ1ZSwgdGhlIHNlbGVjdG9yIHJldHVybmVkIGJ5IHNlbGVjdG9yRmFjdG9yeSB3aWxsIG1lbW9pemUgaXRzIHJlc3VsdHMsXG4vLyBhbGxvd2luZyBjb25uZWN0QWR2YW5jZWQncyBzaG91bGRDb21wb25lbnRVcGRhdGUgdG8gcmV0dXJuIGZhbHNlIGlmIGZpbmFsXG4vLyBwcm9wcyBoYXZlIG5vdCBjaGFuZ2VkLiBJZiBmYWxzZSwgdGhlIHNlbGVjdG9yIHdpbGwgYWx3YXlzIHJldHVybiBhIG5ld1xuLy8gb2JqZWN0IGFuZCBzaG91bGRDb21wb25lbnRVcGRhdGUgd2lsbCBhbHdheXMgcmV0dXJuIHRydWUuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZpbmFsUHJvcHNTZWxlY3RvckZhY3RvcnkoZGlzcGF0Y2gsIF9yZWYyKSB7XG4gIHZhciBpbml0TWFwU3RhdGVUb1Byb3BzID0gX3JlZjIuaW5pdE1hcFN0YXRlVG9Qcm9wcyxcbiAgICAgIGluaXRNYXBEaXNwYXRjaFRvUHJvcHMgPSBfcmVmMi5pbml0TWFwRGlzcGF0Y2hUb1Byb3BzLFxuICAgICAgaW5pdE1lcmdlUHJvcHMgPSBfcmVmMi5pbml0TWVyZ2VQcm9wcyxcbiAgICAgIG9wdGlvbnMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmMiwgW1wiaW5pdE1hcFN0YXRlVG9Qcm9wc1wiLCBcImluaXRNYXBEaXNwYXRjaFRvUHJvcHNcIiwgXCJpbml0TWVyZ2VQcm9wc1wiXSk7XG5cbiAgdmFyIG1hcFN0YXRlVG9Qcm9wcyA9IGluaXRNYXBTdGF0ZVRvUHJvcHMoZGlzcGF0Y2gsIG9wdGlvbnMpO1xuICB2YXIgbWFwRGlzcGF0Y2hUb1Byb3BzID0gaW5pdE1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCwgb3B0aW9ucyk7XG4gIHZhciBtZXJnZVByb3BzID0gaW5pdE1lcmdlUHJvcHMoZGlzcGF0Y2gsIG9wdGlvbnMpO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgdmVyaWZ5U3Vic2VsZWN0b3JzKG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzLCBtZXJnZVByb3BzLCBvcHRpb25zLmRpc3BsYXlOYW1lKTtcbiAgfVxuXG4gIHZhciBzZWxlY3RvckZhY3RvcnkgPSBvcHRpb25zLnB1cmUgPyBwdXJlRmluYWxQcm9wc1NlbGVjdG9yRmFjdG9yeSA6IGltcHVyZUZpbmFsUHJvcHNTZWxlY3RvckZhY3Rvcnk7XG4gIHJldHVybiBzZWxlY3RvckZhY3RvcnkobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMsIG1lcmdlUHJvcHMsIGRpc3BhdGNoLCBvcHRpb25zKTtcbn0iLCJpbXBvcnQgd2FybmluZyBmcm9tICcuLi91dGlscy93YXJuaW5nJztcblxuZnVuY3Rpb24gdmVyaWZ5KHNlbGVjdG9yLCBtZXRob2ROYW1lLCBkaXNwbGF5TmFtZSkge1xuICBpZiAoIXNlbGVjdG9yKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVW5leHBlY3RlZCB2YWx1ZSBmb3IgXCIgKyBtZXRob2ROYW1lICsgXCIgaW4gXCIgKyBkaXNwbGF5TmFtZSArIFwiLlwiKTtcbiAgfSBlbHNlIGlmIChtZXRob2ROYW1lID09PSAnbWFwU3RhdGVUb1Byb3BzJyB8fCBtZXRob2ROYW1lID09PSAnbWFwRGlzcGF0Y2hUb1Byb3BzJykge1xuICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNlbGVjdG9yLCAnZGVwZW5kc09uT3duUHJvcHMnKSkge1xuICAgICAgd2FybmluZyhcIlRoZSBzZWxlY3RvciBmb3IgXCIgKyBtZXRob2ROYW1lICsgXCIgb2YgXCIgKyBkaXNwbGF5TmFtZSArIFwiIGRpZCBub3Qgc3BlY2lmeSBhIHZhbHVlIGZvciBkZXBlbmRzT25Pd25Qcm9wcy5cIik7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeVN1YnNlbGVjdG9ycyhtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcywgbWVyZ2VQcm9wcywgZGlzcGxheU5hbWUpIHtcbiAgdmVyaWZ5KG1hcFN0YXRlVG9Qcm9wcywgJ21hcFN0YXRlVG9Qcm9wcycsIGRpc3BsYXlOYW1lKTtcbiAgdmVyaWZ5KG1hcERpc3BhdGNoVG9Qcm9wcywgJ21hcERpc3BhdGNoVG9Qcm9wcycsIGRpc3BsYXlOYW1lKTtcbiAgdmVyaWZ5KG1lcmdlUHJvcHMsICdtZXJnZVByb3BzJywgZGlzcGxheU5hbWUpO1xufSIsImltcG9ydCB2ZXJpZnlQbGFpbk9iamVjdCBmcm9tICcuLi91dGlscy92ZXJpZnlQbGFpbk9iamVjdCc7XG5leHBvcnQgZnVuY3Rpb24gd3JhcE1hcFRvUHJvcHNDb25zdGFudChnZXRDb25zdGFudCkge1xuICByZXR1cm4gZnVuY3Rpb24gaW5pdENvbnN0YW50U2VsZWN0b3IoZGlzcGF0Y2gsIG9wdGlvbnMpIHtcbiAgICB2YXIgY29uc3RhbnQgPSBnZXRDb25zdGFudChkaXNwYXRjaCwgb3B0aW9ucyk7XG5cbiAgICBmdW5jdGlvbiBjb25zdGFudFNlbGVjdG9yKCkge1xuICAgICAgcmV0dXJuIGNvbnN0YW50O1xuICAgIH1cblxuICAgIGNvbnN0YW50U2VsZWN0b3IuZGVwZW5kc09uT3duUHJvcHMgPSBmYWxzZTtcbiAgICByZXR1cm4gY29uc3RhbnRTZWxlY3RvcjtcbiAgfTtcbn0gLy8gZGVwZW5kc09uT3duUHJvcHMgaXMgdXNlZCBieSBjcmVhdGVNYXBUb1Byb3BzUHJveHkgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgdG8gcGFzcyBwcm9wcyBhcyBhcmdzXG4vLyB0byB0aGUgbWFwVG9Qcm9wcyBmdW5jdGlvbiBiZWluZyB3cmFwcGVkLiBJdCBpcyBhbHNvIHVzZWQgYnkgbWFrZVB1cmVQcm9wc1NlbGVjdG9yIHRvIGRldGVybWluZVxuLy8gd2hldGhlciBtYXBUb1Byb3BzIG5lZWRzIHRvIGJlIGludm9rZWQgd2hlbiBwcm9wcyBoYXZlIGNoYW5nZWQuXG4vL1xuLy8gQSBsZW5ndGggb2Ygb25lIHNpZ25hbHMgdGhhdCBtYXBUb1Byb3BzIGRvZXMgbm90IGRlcGVuZCBvbiBwcm9wcyBmcm9tIHRoZSBwYXJlbnQgY29tcG9uZW50LlxuLy8gQSBsZW5ndGggb2YgemVybyBpcyBhc3N1bWVkIHRvIG1lYW4gbWFwVG9Qcm9wcyBpcyBnZXR0aW5nIGFyZ3MgdmlhIGFyZ3VtZW50cyBvciAuLi5hcmdzIGFuZFxuLy8gdGhlcmVmb3JlIG5vdCByZXBvcnRpbmcgaXRzIGxlbmd0aCBhY2N1cmF0ZWx5Li5cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERlcGVuZHNPbk93blByb3BzKG1hcFRvUHJvcHMpIHtcbiAgcmV0dXJuIG1hcFRvUHJvcHMuZGVwZW5kc09uT3duUHJvcHMgIT09IG51bGwgJiYgbWFwVG9Qcm9wcy5kZXBlbmRzT25Pd25Qcm9wcyAhPT0gdW5kZWZpbmVkID8gQm9vbGVhbihtYXBUb1Byb3BzLmRlcGVuZHNPbk93blByb3BzKSA6IG1hcFRvUHJvcHMubGVuZ3RoICE9PSAxO1xufSAvLyBVc2VkIGJ5IHdoZW5NYXBTdGF0ZVRvUHJvcHNJc0Z1bmN0aW9uIGFuZCB3aGVuTWFwRGlzcGF0Y2hUb1Byb3BzSXNGdW5jdGlvbixcbi8vIHRoaXMgZnVuY3Rpb24gd3JhcHMgbWFwVG9Qcm9wcyBpbiBhIHByb3h5IGZ1bmN0aW9uIHdoaWNoIGRvZXMgc2V2ZXJhbCB0aGluZ3M6XG4vL1xuLy8gICogRGV0ZWN0cyB3aGV0aGVyIHRoZSBtYXBUb1Byb3BzIGZ1bmN0aW9uIGJlaW5nIGNhbGxlZCBkZXBlbmRzIG9uIHByb3BzLCB3aGljaFxuLy8gICAgaXMgdXNlZCBieSBzZWxlY3RvckZhY3RvcnkgdG8gZGVjaWRlIGlmIGl0IHNob3VsZCByZWludm9rZSBvbiBwcm9wcyBjaGFuZ2VzLlxuLy9cbi8vICAqIE9uIGZpcnN0IGNhbGwsIGhhbmRsZXMgbWFwVG9Qcm9wcyBpZiByZXR1cm5zIGFub3RoZXIgZnVuY3Rpb24sIGFuZCB0cmVhdHMgdGhhdFxuLy8gICAgbmV3IGZ1bmN0aW9uIGFzIHRoZSB0cnVlIG1hcFRvUHJvcHMgZm9yIHN1YnNlcXVlbnQgY2FsbHMuXG4vL1xuLy8gICogT24gZmlyc3QgY2FsbCwgdmVyaWZpZXMgdGhlIGZpcnN0IHJlc3VsdCBpcyBhIHBsYWluIG9iamVjdCwgaW4gb3JkZXIgdG8gd2FyblxuLy8gICAgdGhlIGRldmVsb3BlciB0aGF0IHRoZWlyIG1hcFRvUHJvcHMgZnVuY3Rpb24gaXMgbm90IHJldHVybmluZyBhIHZhbGlkIHJlc3VsdC5cbi8vXG5cbmV4cG9ydCBmdW5jdGlvbiB3cmFwTWFwVG9Qcm9wc0Z1bmMobWFwVG9Qcm9wcywgbWV0aG9kTmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24gaW5pdFByb3h5U2VsZWN0b3IoZGlzcGF0Y2gsIF9yZWYpIHtcbiAgICB2YXIgZGlzcGxheU5hbWUgPSBfcmVmLmRpc3BsYXlOYW1lO1xuXG4gICAgdmFyIHByb3h5ID0gZnVuY3Rpb24gbWFwVG9Qcm9wc1Byb3h5KHN0YXRlT3JEaXNwYXRjaCwgb3duUHJvcHMpIHtcbiAgICAgIHJldHVybiBwcm94eS5kZXBlbmRzT25Pd25Qcm9wcyA/IHByb3h5Lm1hcFRvUHJvcHMoc3RhdGVPckRpc3BhdGNoLCBvd25Qcm9wcykgOiBwcm94eS5tYXBUb1Byb3BzKHN0YXRlT3JEaXNwYXRjaCk7XG4gICAgfTsgLy8gYWxsb3cgZGV0ZWN0RmFjdG9yeUFuZFZlcmlmeSB0byBnZXQgb3duUHJvcHNcblxuXG4gICAgcHJveHkuZGVwZW5kc09uT3duUHJvcHMgPSB0cnVlO1xuXG4gICAgcHJveHkubWFwVG9Qcm9wcyA9IGZ1bmN0aW9uIGRldGVjdEZhY3RvcnlBbmRWZXJpZnkoc3RhdGVPckRpc3BhdGNoLCBvd25Qcm9wcykge1xuICAgICAgcHJveHkubWFwVG9Qcm9wcyA9IG1hcFRvUHJvcHM7XG4gICAgICBwcm94eS5kZXBlbmRzT25Pd25Qcm9wcyA9IGdldERlcGVuZHNPbk93blByb3BzKG1hcFRvUHJvcHMpO1xuICAgICAgdmFyIHByb3BzID0gcHJveHkoc3RhdGVPckRpc3BhdGNoLCBvd25Qcm9wcyk7XG5cbiAgICAgIGlmICh0eXBlb2YgcHJvcHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcHJveHkubWFwVG9Qcm9wcyA9IHByb3BzO1xuICAgICAgICBwcm94eS5kZXBlbmRzT25Pd25Qcm9wcyA9IGdldERlcGVuZHNPbk93blByb3BzKHByb3BzKTtcbiAgICAgICAgcHJvcHMgPSBwcm94eShzdGF0ZU9yRGlzcGF0Y2gsIG93blByb3BzKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHZlcmlmeVBsYWluT2JqZWN0KHByb3BzLCBkaXNwbGF5TmFtZSwgbWV0aG9kTmFtZSk7XG4gICAgICByZXR1cm4gcHJvcHM7XG4gICAgfTtcblxuICAgIHJldHVybiBwcm94eTtcbiAgfTtcbn0iLCJpbXBvcnQgeyBSZWFjdFJlZHV4Q29udGV4dCB9IGZyb20gJy4uL2NvbXBvbmVudHMvQ29udGV4dCc7XG5pbXBvcnQgeyB1c2VTdG9yZSBhcyB1c2VEZWZhdWx0U3RvcmUsIGNyZWF0ZVN0b3JlSG9vayB9IGZyb20gJy4vdXNlU3RvcmUnO1xuLyoqXG4gKiBIb29rIGZhY3RvcnksIHdoaWNoIGNyZWF0ZXMgYSBgdXNlRGlzcGF0Y2hgIGhvb2sgYm91bmQgdG8gYSBnaXZlbiBjb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhY3QuQ29udGV4dH0gW2NvbnRleHQ9UmVhY3RSZWR1eENvbnRleHRdIENvbnRleHQgcGFzc2VkIHRvIHlvdXIgYDxQcm92aWRlcj5gLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBBIGB1c2VEaXNwYXRjaGAgaG9vayBib3VuZCB0byB0aGUgc3BlY2lmaWVkIGNvbnRleHQuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZURpc3BhdGNoSG9vayhjb250ZXh0KSB7XG4gIGlmIChjb250ZXh0ID09PSB2b2lkIDApIHtcbiAgICBjb250ZXh0ID0gUmVhY3RSZWR1eENvbnRleHQ7XG4gIH1cblxuICB2YXIgdXNlU3RvcmUgPSBjb250ZXh0ID09PSBSZWFjdFJlZHV4Q29udGV4dCA/IHVzZURlZmF1bHRTdG9yZSA6IGNyZWF0ZVN0b3JlSG9vayhjb250ZXh0KTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVzZURpc3BhdGNoKCkge1xuICAgIHZhciBzdG9yZSA9IHVzZVN0b3JlKCk7XG4gICAgcmV0dXJuIHN0b3JlLmRpc3BhdGNoO1xuICB9O1xufVxuLyoqXG4gKiBBIGhvb2sgdG8gYWNjZXNzIHRoZSByZWR1eCBgZGlzcGF0Y2hgIGZ1bmN0aW9uLlxuICpcbiAqIEByZXR1cm5zIHthbnl8ZnVuY3Rpb259IHJlZHV4IHN0b3JlJ3MgYGRpc3BhdGNoYCBmdW5jdGlvblxuICpcbiAqIEBleGFtcGxlXG4gKlxuICogaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnXG4gKiBpbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuICpcbiAqIGV4cG9ydCBjb25zdCBDb3VudGVyQ29tcG9uZW50ID0gKHsgdmFsdWUgfSkgPT4ge1xuICogICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcbiAqICAgY29uc3QgaW5jcmVhc2VDb3VudGVyID0gdXNlQ2FsbGJhY2soKCkgPT4gZGlzcGF0Y2goeyB0eXBlOiAnaW5jcmVhc2UtY291bnRlcicgfSksIFtdKVxuICogICByZXR1cm4gKFxuICogICAgIDxkaXY+XG4gKiAgICAgICA8c3Bhbj57dmFsdWV9PC9zcGFuPlxuICogICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtpbmNyZWFzZUNvdW50ZXJ9PkluY3JlYXNlIGNvdW50ZXI8L2J1dHRvbj5cbiAqICAgICA8L2Rpdj5cbiAqICAgKVxuICogfVxuICovXG5cbmV4cG9ydCB2YXIgdXNlRGlzcGF0Y2ggPSAvKiNfX1BVUkVfXyovY3JlYXRlRGlzcGF0Y2hIb29rKCk7IiwiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJlYWN0UmVkdXhDb250ZXh0IH0gZnJvbSAnLi4vY29tcG9uZW50cy9Db250ZXh0Jztcbi8qKlxuICogQSBob29rIHRvIGFjY2VzcyB0aGUgdmFsdWUgb2YgdGhlIGBSZWFjdFJlZHV4Q29udGV4dGAuIFRoaXMgaXMgYSBsb3ctbGV2ZWxcbiAqIGhvb2sgdGhhdCB5b3Ugc2hvdWxkIHVzdWFsbHkgbm90IG5lZWQgdG8gY2FsbCBkaXJlY3RseS5cbiAqXG4gKiBAcmV0dXJucyB7YW55fSB0aGUgdmFsdWUgb2YgdGhlIGBSZWFjdFJlZHV4Q29udGV4dGBcbiAqXG4gKiBAZXhhbXBsZVxuICpcbiAqIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbiAqIGltcG9ydCB7IHVzZVJlZHV4Q29udGV4dCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuICpcbiAqIGV4cG9ydCBjb25zdCBDb3VudGVyQ29tcG9uZW50ID0gKHsgdmFsdWUgfSkgPT4ge1xuICogICBjb25zdCB7IHN0b3JlIH0gPSB1c2VSZWR1eENvbnRleHQoKVxuICogICByZXR1cm4gPGRpdj57c3RvcmUuZ2V0U3RhdGUoKX08L2Rpdj5cbiAqIH1cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUmVkdXhDb250ZXh0KCkge1xuICB2YXIgY29udGV4dFZhbHVlID0gdXNlQ29udGV4dChSZWFjdFJlZHV4Q29udGV4dCk7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgIWNvbnRleHRWYWx1ZSkge1xuICAgIHRocm93IG5ldyBFcnJvcignY291bGQgbm90IGZpbmQgcmVhY3QtcmVkdXggY29udGV4dCB2YWx1ZTsgcGxlYXNlIGVuc3VyZSB0aGUgY29tcG9uZW50IGlzIHdyYXBwZWQgaW4gYSA8UHJvdmlkZXI+Jyk7XG4gIH1cblxuICByZXR1cm4gY29udGV4dFZhbHVlO1xufSIsImltcG9ydCB7IHVzZVJlZHVjZXIsIHVzZVJlZiwgdXNlTWVtbywgdXNlQ29udGV4dCwgdXNlRGVidWdWYWx1ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJlZHV4Q29udGV4dCBhcyB1c2VEZWZhdWx0UmVkdXhDb250ZXh0IH0gZnJvbSAnLi91c2VSZWR1eENvbnRleHQnO1xuaW1wb3J0IFN1YnNjcmlwdGlvbiBmcm9tICcuLi91dGlscy9TdWJzY3JpcHRpb24nO1xuaW1wb3J0IHsgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCB9IGZyb20gJy4uL3V0aWxzL3VzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QnO1xuaW1wb3J0IHsgUmVhY3RSZWR1eENvbnRleHQgfSBmcm9tICcuLi9jb21wb25lbnRzL0NvbnRleHQnO1xuXG52YXIgcmVmRXF1YWxpdHkgPSBmdW5jdGlvbiByZWZFcXVhbGl0eShhLCBiKSB7XG4gIHJldHVybiBhID09PSBiO1xufTtcblxuZnVuY3Rpb24gdXNlU2VsZWN0b3JXaXRoU3RvcmVBbmRTdWJzY3JpcHRpb24oc2VsZWN0b3IsIGVxdWFsaXR5Rm4sIHN0b3JlLCBjb250ZXh0U3ViKSB7XG4gIHZhciBfdXNlUmVkdWNlciA9IHVzZVJlZHVjZXIoZnVuY3Rpb24gKHMpIHtcbiAgICByZXR1cm4gcyArIDE7XG4gIH0sIDApLFxuICAgICAgZm9yY2VSZW5kZXIgPSBfdXNlUmVkdWNlclsxXTtcblxuICB2YXIgc3Vic2NyaXB0aW9uID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG5ldyBTdWJzY3JpcHRpb24oc3RvcmUsIGNvbnRleHRTdWIpO1xuICB9LCBbc3RvcmUsIGNvbnRleHRTdWJdKTtcbiAgdmFyIGxhdGVzdFN1YnNjcmlwdGlvbkNhbGxiYWNrRXJyb3IgPSB1c2VSZWYoKTtcbiAgdmFyIGxhdGVzdFNlbGVjdG9yID0gdXNlUmVmKCk7XG4gIHZhciBsYXRlc3RTdG9yZVN0YXRlID0gdXNlUmVmKCk7XG4gIHZhciBsYXRlc3RTZWxlY3RlZFN0YXRlID0gdXNlUmVmKCk7XG4gIHZhciBzdG9yZVN0YXRlID0gc3RvcmUuZ2V0U3RhdGUoKTtcbiAgdmFyIHNlbGVjdGVkU3RhdGU7XG5cbiAgdHJ5IHtcbiAgICBpZiAoc2VsZWN0b3IgIT09IGxhdGVzdFNlbGVjdG9yLmN1cnJlbnQgfHwgc3RvcmVTdGF0ZSAhPT0gbGF0ZXN0U3RvcmVTdGF0ZS5jdXJyZW50IHx8IGxhdGVzdFN1YnNjcmlwdGlvbkNhbGxiYWNrRXJyb3IuY3VycmVudCkge1xuICAgICAgc2VsZWN0ZWRTdGF0ZSA9IHNlbGVjdG9yKHN0b3JlU3RhdGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZWxlY3RlZFN0YXRlID0gbGF0ZXN0U2VsZWN0ZWRTdGF0ZS5jdXJyZW50O1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgaWYgKGxhdGVzdFN1YnNjcmlwdGlvbkNhbGxiYWNrRXJyb3IuY3VycmVudCkge1xuICAgICAgZXJyLm1lc3NhZ2UgKz0gXCJcXG5UaGUgZXJyb3IgbWF5IGJlIGNvcnJlbGF0ZWQgd2l0aCB0aGlzIHByZXZpb3VzIGVycm9yOlxcblwiICsgbGF0ZXN0U3Vic2NyaXB0aW9uQ2FsbGJhY2tFcnJvci5jdXJyZW50LnN0YWNrICsgXCJcXG5cXG5cIjtcbiAgICB9XG5cbiAgICB0aHJvdyBlcnI7XG4gIH1cblxuICB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBsYXRlc3RTZWxlY3Rvci5jdXJyZW50ID0gc2VsZWN0b3I7XG4gICAgbGF0ZXN0U3RvcmVTdGF0ZS5jdXJyZW50ID0gc3RvcmVTdGF0ZTtcbiAgICBsYXRlc3RTZWxlY3RlZFN0YXRlLmN1cnJlbnQgPSBzZWxlY3RlZFN0YXRlO1xuICAgIGxhdGVzdFN1YnNjcmlwdGlvbkNhbGxiYWNrRXJyb3IuY3VycmVudCA9IHVuZGVmaW5lZDtcbiAgfSk7XG4gIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIGNoZWNrRm9yVXBkYXRlcygpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciBuZXdTZWxlY3RlZFN0YXRlID0gbGF0ZXN0U2VsZWN0b3IuY3VycmVudChzdG9yZS5nZXRTdGF0ZSgpKTtcblxuICAgICAgICBpZiAoZXF1YWxpdHlGbihuZXdTZWxlY3RlZFN0YXRlLCBsYXRlc3RTZWxlY3RlZFN0YXRlLmN1cnJlbnQpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGF0ZXN0U2VsZWN0ZWRTdGF0ZS5jdXJyZW50ID0gbmV3U2VsZWN0ZWRTdGF0ZTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAvLyB3ZSBpZ25vcmUgYWxsIGVycm9ycyBoZXJlLCBzaW5jZSB3aGVuIHRoZSBjb21wb25lbnRcbiAgICAgICAgLy8gaXMgcmUtcmVuZGVyZWQsIHRoZSBzZWxlY3RvcnMgYXJlIGNhbGxlZCBhZ2FpbiwgYW5kXG4gICAgICAgIC8vIHdpbGwgdGhyb3cgYWdhaW4sIGlmIG5laXRoZXIgcHJvcHMgbm9yIHN0b3JlIHN0YXRlXG4gICAgICAgIC8vIGNoYW5nZWRcbiAgICAgICAgbGF0ZXN0U3Vic2NyaXB0aW9uQ2FsbGJhY2tFcnJvci5jdXJyZW50ID0gZXJyO1xuICAgICAgfVxuXG4gICAgICBmb3JjZVJlbmRlcigpO1xuICAgIH1cblxuICAgIHN1YnNjcmlwdGlvbi5vblN0YXRlQ2hhbmdlID0gY2hlY2tGb3JVcGRhdGVzO1xuICAgIHN1YnNjcmlwdGlvbi50cnlTdWJzY3JpYmUoKTtcbiAgICBjaGVja0ZvclVwZGF0ZXMoKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHN1YnNjcmlwdGlvbi50cnlVbnN1YnNjcmliZSgpO1xuICAgIH07XG4gIH0sIFtzdG9yZSwgc3Vic2NyaXB0aW9uXSk7XG4gIHJldHVybiBzZWxlY3RlZFN0YXRlO1xufVxuLyoqXG4gKiBIb29rIGZhY3RvcnksIHdoaWNoIGNyZWF0ZXMgYSBgdXNlU2VsZWN0b3JgIGhvb2sgYm91bmQgdG8gYSBnaXZlbiBjb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhY3QuQ29udGV4dH0gW2NvbnRleHQ9UmVhY3RSZWR1eENvbnRleHRdIENvbnRleHQgcGFzc2VkIHRvIHlvdXIgYDxQcm92aWRlcj5gLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBBIGB1c2VTZWxlY3RvcmAgaG9vayBib3VuZCB0byB0aGUgc3BlY2lmaWVkIGNvbnRleHQuXG4gKi9cblxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU2VsZWN0b3JIb29rKGNvbnRleHQpIHtcbiAgaWYgKGNvbnRleHQgPT09IHZvaWQgMCkge1xuICAgIGNvbnRleHQgPSBSZWFjdFJlZHV4Q29udGV4dDtcbiAgfVxuXG4gIHZhciB1c2VSZWR1eENvbnRleHQgPSBjb250ZXh0ID09PSBSZWFjdFJlZHV4Q29udGV4dCA/IHVzZURlZmF1bHRSZWR1eENvbnRleHQgOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHVzZUNvbnRleHQoY29udGV4dCk7XG4gIH07XG4gIHJldHVybiBmdW5jdGlvbiB1c2VTZWxlY3RvcihzZWxlY3RvciwgZXF1YWxpdHlGbikge1xuICAgIGlmIChlcXVhbGl0eUZuID09PSB2b2lkIDApIHtcbiAgICAgIGVxdWFsaXR5Rm4gPSByZWZFcXVhbGl0eTtcbiAgICB9XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiAhc2VsZWN0b3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIllvdSBtdXN0IHBhc3MgYSBzZWxlY3RvciB0byB1c2VTZWxlY3RvclwiKTtcbiAgICB9XG5cbiAgICB2YXIgX3VzZVJlZHV4Q29udGV4dCA9IHVzZVJlZHV4Q29udGV4dCgpLFxuICAgICAgICBzdG9yZSA9IF91c2VSZWR1eENvbnRleHQuc3RvcmUsXG4gICAgICAgIGNvbnRleHRTdWIgPSBfdXNlUmVkdXhDb250ZXh0LnN1YnNjcmlwdGlvbjtcblxuICAgIHZhciBzZWxlY3RlZFN0YXRlID0gdXNlU2VsZWN0b3JXaXRoU3RvcmVBbmRTdWJzY3JpcHRpb24oc2VsZWN0b3IsIGVxdWFsaXR5Rm4sIHN0b3JlLCBjb250ZXh0U3ViKTtcbiAgICB1c2VEZWJ1Z1ZhbHVlKHNlbGVjdGVkU3RhdGUpO1xuICAgIHJldHVybiBzZWxlY3RlZFN0YXRlO1xuICB9O1xufVxuLyoqXG4gKiBBIGhvb2sgdG8gYWNjZXNzIHRoZSByZWR1eCBzdG9yZSdzIHN0YXRlLiBUaGlzIGhvb2sgdGFrZXMgYSBzZWxlY3RvciBmdW5jdGlvblxuICogYXMgYW4gYXJndW1lbnQuIFRoZSBzZWxlY3RvciBpcyBjYWxsZWQgd2l0aCB0aGUgc3RvcmUgc3RhdGUuXG4gKlxuICogVGhpcyBob29rIHRha2VzIGFuIG9wdGlvbmFsIGVxdWFsaXR5IGNvbXBhcmlzb24gZnVuY3Rpb24gYXMgdGhlIHNlY29uZCBwYXJhbWV0ZXJcbiAqIHRoYXQgYWxsb3dzIHlvdSB0byBjdXN0b21pemUgdGhlIHdheSB0aGUgc2VsZWN0ZWQgc3RhdGUgaXMgY29tcGFyZWQgdG8gZGV0ZXJtaW5lXG4gKiB3aGV0aGVyIHRoZSBjb21wb25lbnQgbmVlZHMgdG8gYmUgcmUtcmVuZGVyZWQuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gc2VsZWN0b3IgdGhlIHNlbGVjdG9yIGZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9uPX0gZXF1YWxpdHlGbiB0aGUgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIHVzZWQgdG8gZGV0ZXJtaW5lIGVxdWFsaXR5XG4gKlxuICogQHJldHVybnMge2FueX0gdGhlIHNlbGVjdGVkIHN0YXRlXG4gKlxuICogQGV4YW1wbGVcbiAqXG4gKiBpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG4gKiBpbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuICpcbiAqIGV4cG9ydCBjb25zdCBDb3VudGVyQ29tcG9uZW50ID0gKCkgPT4ge1xuICogICBjb25zdCBjb3VudGVyID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuY291bnRlcilcbiAqICAgcmV0dXJuIDxkaXY+e2NvdW50ZXJ9PC9kaXY+XG4gKiB9XG4gKi9cblxuZXhwb3J0IHZhciB1c2VTZWxlY3RvciA9IC8qI19fUFVSRV9fKi9jcmVhdGVTZWxlY3Rvckhvb2soKTsiLCJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUmVhY3RSZWR1eENvbnRleHQgfSBmcm9tICcuLi9jb21wb25lbnRzL0NvbnRleHQnO1xuaW1wb3J0IHsgdXNlUmVkdXhDb250ZXh0IGFzIHVzZURlZmF1bHRSZWR1eENvbnRleHQgfSBmcm9tICcuL3VzZVJlZHV4Q29udGV4dCc7XG4vKipcbiAqIEhvb2sgZmFjdG9yeSwgd2hpY2ggY3JlYXRlcyBhIGB1c2VTdG9yZWAgaG9vayBib3VuZCB0byBhIGdpdmVuIGNvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFjdC5Db250ZXh0fSBbY29udGV4dD1SZWFjdFJlZHV4Q29udGV4dF0gQ29udGV4dCBwYXNzZWQgdG8geW91ciBgPFByb3ZpZGVyPmAuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgYHVzZVN0b3JlYCBob29rIGJvdW5kIHRvIHRoZSBzcGVjaWZpZWQgY29udGV4dC5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU3RvcmVIb29rKGNvbnRleHQpIHtcbiAgaWYgKGNvbnRleHQgPT09IHZvaWQgMCkge1xuICAgIGNvbnRleHQgPSBSZWFjdFJlZHV4Q29udGV4dDtcbiAgfVxuXG4gIHZhciB1c2VSZWR1eENvbnRleHQgPSBjb250ZXh0ID09PSBSZWFjdFJlZHV4Q29udGV4dCA/IHVzZURlZmF1bHRSZWR1eENvbnRleHQgOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHVzZUNvbnRleHQoY29udGV4dCk7XG4gIH07XG4gIHJldHVybiBmdW5jdGlvbiB1c2VTdG9yZSgpIHtcbiAgICB2YXIgX3VzZVJlZHV4Q29udGV4dCA9IHVzZVJlZHV4Q29udGV4dCgpLFxuICAgICAgICBzdG9yZSA9IF91c2VSZWR1eENvbnRleHQuc3RvcmU7XG5cbiAgICByZXR1cm4gc3RvcmU7XG4gIH07XG59XG4vKipcbiAqIEEgaG9vayB0byBhY2Nlc3MgdGhlIHJlZHV4IHN0b3JlLlxuICpcbiAqIEByZXR1cm5zIHthbnl9IHRoZSByZWR1eCBzdG9yZVxuICpcbiAqIEBleGFtcGxlXG4gKlxuICogaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuICogaW1wb3J0IHsgdXNlU3RvcmUgfSBmcm9tICdyZWFjdC1yZWR1eCdcbiAqXG4gKiBleHBvcnQgY29uc3QgRXhhbXBsZUNvbXBvbmVudCA9ICgpID0+IHtcbiAqICAgY29uc3Qgc3RvcmUgPSB1c2VTdG9yZSgpXG4gKiAgIHJldHVybiA8ZGl2PntzdG9yZS5nZXRTdGF0ZSgpfTwvZGl2PlxuICogfVxuICovXG5cbmV4cG9ydCB2YXIgdXNlU3RvcmUgPSAvKiNfX1BVUkVfXyovY3JlYXRlU3RvcmVIb29rKCk7IiwiaW1wb3J0IFByb3ZpZGVyIGZyb20gJy4vY29tcG9uZW50cy9Qcm92aWRlcic7XG5pbXBvcnQgY29ubmVjdEFkdmFuY2VkIGZyb20gJy4vY29tcG9uZW50cy9jb25uZWN0QWR2YW5jZWQnO1xuaW1wb3J0IHsgUmVhY3RSZWR1eENvbnRleHQgfSBmcm9tICcuL2NvbXBvbmVudHMvQ29udGV4dCc7XG5pbXBvcnQgY29ubmVjdCBmcm9tICcuL2Nvbm5lY3QvY29ubmVjdCc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgY3JlYXRlRGlzcGF0Y2hIb29rIH0gZnJvbSAnLi9ob29rcy91c2VEaXNwYXRjaCc7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgY3JlYXRlU2VsZWN0b3JIb29rIH0gZnJvbSAnLi9ob29rcy91c2VTZWxlY3Rvcic7XG5pbXBvcnQgeyB1c2VTdG9yZSwgY3JlYXRlU3RvcmVIb29rIH0gZnJvbSAnLi9ob29rcy91c2VTdG9yZSc7XG5pbXBvcnQgeyBzZXRCYXRjaCB9IGZyb20gJy4vdXRpbHMvYmF0Y2gnO1xuaW1wb3J0IHsgdW5zdGFibGVfYmF0Y2hlZFVwZGF0ZXMgYXMgYmF0Y2ggfSBmcm9tICcuL3V0aWxzL3JlYWN0QmF0Y2hlZFVwZGF0ZXMnO1xuaW1wb3J0IHNoYWxsb3dFcXVhbCBmcm9tICcuL3V0aWxzL3NoYWxsb3dFcXVhbCc7XG5zZXRCYXRjaChiYXRjaCk7XG5leHBvcnQgeyBQcm92aWRlciwgY29ubmVjdEFkdmFuY2VkLCBSZWFjdFJlZHV4Q29udGV4dCwgY29ubmVjdCwgYmF0Y2gsIHVzZURpc3BhdGNoLCBjcmVhdGVEaXNwYXRjaEhvb2ssIHVzZVNlbGVjdG9yLCBjcmVhdGVTZWxlY3Rvckhvb2ssIHVzZVN0b3JlLCBjcmVhdGVTdG9yZUhvb2ssIHNoYWxsb3dFcXVhbCB9OyIsImltcG9ydCB7IGdldEJhdGNoIH0gZnJvbSAnLi9iYXRjaCc7IC8vIGVuY2Fwc3VsYXRlcyB0aGUgc3Vic2NyaXB0aW9uIGxvZ2ljIGZvciBjb25uZWN0aW5nIGEgY29tcG9uZW50IHRvIHRoZSByZWR1eCBzdG9yZSwgYXNcbi8vIHdlbGwgYXMgbmVzdGluZyBzdWJzY3JpcHRpb25zIG9mIGRlc2NlbmRhbnQgY29tcG9uZW50cywgc28gdGhhdCB3ZSBjYW4gZW5zdXJlIHRoZVxuLy8gYW5jZXN0b3IgY29tcG9uZW50cyByZS1yZW5kZXIgYmVmb3JlIGRlc2NlbmRhbnRzXG5cbnZhciBudWxsTGlzdGVuZXJzID0ge1xuICBub3RpZnk6IGZ1bmN0aW9uIG5vdGlmeSgpIHt9XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVMaXN0ZW5lckNvbGxlY3Rpb24oKSB7XG4gIHZhciBiYXRjaCA9IGdldEJhdGNoKCk7XG4gIHZhciBmaXJzdCA9IG51bGw7XG4gIHZhciBsYXN0ID0gbnVsbDtcbiAgcmV0dXJuIHtcbiAgICBjbGVhcjogZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgICBmaXJzdCA9IG51bGw7XG4gICAgICBsYXN0ID0gbnVsbDtcbiAgICB9LFxuICAgIG5vdGlmeTogZnVuY3Rpb24gbm90aWZ5KCkge1xuICAgICAgYmF0Y2goZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbGlzdGVuZXIgPSBmaXJzdDtcblxuICAgICAgICB3aGlsZSAobGlzdGVuZXIpIHtcbiAgICAgICAgICBsaXN0ZW5lci5jYWxsYmFjaygpO1xuICAgICAgICAgIGxpc3RlbmVyID0gbGlzdGVuZXIubmV4dDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHZhciBsaXN0ZW5lcnMgPSBbXTtcbiAgICAgIHZhciBsaXN0ZW5lciA9IGZpcnN0O1xuXG4gICAgICB3aGlsZSAobGlzdGVuZXIpIHtcbiAgICAgICAgbGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICAgICAgICBsaXN0ZW5lciA9IGxpc3RlbmVyLm5leHQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBsaXN0ZW5lcnM7XG4gICAgfSxcbiAgICBzdWJzY3JpYmU6IGZ1bmN0aW9uIHN1YnNjcmliZShjYWxsYmFjaykge1xuICAgICAgdmFyIGlzU3Vic2NyaWJlZCA9IHRydWU7XG4gICAgICB2YXIgbGlzdGVuZXIgPSBsYXN0ID0ge1xuICAgICAgICBjYWxsYmFjazogY2FsbGJhY2ssXG4gICAgICAgIG5leHQ6IG51bGwsXG4gICAgICAgIHByZXY6IGxhc3RcbiAgICAgIH07XG5cbiAgICAgIGlmIChsaXN0ZW5lci5wcmV2KSB7XG4gICAgICAgIGxpc3RlbmVyLnByZXYubmV4dCA9IGxpc3RlbmVyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmlyc3QgPSBsaXN0ZW5lcjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZ1bmN0aW9uIHVuc3Vic2NyaWJlKCkge1xuICAgICAgICBpZiAoIWlzU3Vic2NyaWJlZCB8fCBmaXJzdCA9PT0gbnVsbCkgcmV0dXJuO1xuICAgICAgICBpc1N1YnNjcmliZWQgPSBmYWxzZTtcblxuICAgICAgICBpZiAobGlzdGVuZXIubmV4dCkge1xuICAgICAgICAgIGxpc3RlbmVyLm5leHQucHJldiA9IGxpc3RlbmVyLnByZXY7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGFzdCA9IGxpc3RlbmVyLnByZXY7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobGlzdGVuZXIucHJldikge1xuICAgICAgICAgIGxpc3RlbmVyLnByZXYubmV4dCA9IGxpc3RlbmVyLm5leHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZmlyc3QgPSBsaXN0ZW5lci5uZXh0O1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfTtcbn1cblxudmFyIFN1YnNjcmlwdGlvbiA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFN1YnNjcmlwdGlvbihzdG9yZSwgcGFyZW50U3ViKSB7XG4gICAgdGhpcy5zdG9yZSA9IHN0b3JlO1xuICAgIHRoaXMucGFyZW50U3ViID0gcGFyZW50U3ViO1xuICAgIHRoaXMudW5zdWJzY3JpYmUgPSBudWxsO1xuICAgIHRoaXMubGlzdGVuZXJzID0gbnVsbExpc3RlbmVycztcbiAgICB0aGlzLmhhbmRsZUNoYW5nZVdyYXBwZXIgPSB0aGlzLmhhbmRsZUNoYW5nZVdyYXBwZXIuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBTdWJzY3JpcHRpb24ucHJvdG90eXBlO1xuXG4gIF9wcm90by5hZGROZXN0ZWRTdWIgPSBmdW5jdGlvbiBhZGROZXN0ZWRTdWIobGlzdGVuZXIpIHtcbiAgICB0aGlzLnRyeVN1YnNjcmliZSgpO1xuICAgIHJldHVybiB0aGlzLmxpc3RlbmVycy5zdWJzY3JpYmUobGlzdGVuZXIpO1xuICB9O1xuXG4gIF9wcm90by5ub3RpZnlOZXN0ZWRTdWJzID0gZnVuY3Rpb24gbm90aWZ5TmVzdGVkU3VicygpIHtcbiAgICB0aGlzLmxpc3RlbmVycy5ub3RpZnkoKTtcbiAgfTtcblxuICBfcHJvdG8uaGFuZGxlQ2hhbmdlV3JhcHBlciA9IGZ1bmN0aW9uIGhhbmRsZUNoYW5nZVdyYXBwZXIoKSB7XG4gICAgaWYgKHRoaXMub25TdGF0ZUNoYW5nZSkge1xuICAgICAgdGhpcy5vblN0YXRlQ2hhbmdlKCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5pc1N1YnNjcmliZWQgPSBmdW5jdGlvbiBpc1N1YnNjcmliZWQoKSB7XG4gICAgcmV0dXJuIEJvb2xlYW4odGhpcy51bnN1YnNjcmliZSk7XG4gIH07XG5cbiAgX3Byb3RvLnRyeVN1YnNjcmliZSA9IGZ1bmN0aW9uIHRyeVN1YnNjcmliZSgpIHtcbiAgICBpZiAoIXRoaXMudW5zdWJzY3JpYmUpIHtcbiAgICAgIHRoaXMudW5zdWJzY3JpYmUgPSB0aGlzLnBhcmVudFN1YiA/IHRoaXMucGFyZW50U3ViLmFkZE5lc3RlZFN1Yih0aGlzLmhhbmRsZUNoYW5nZVdyYXBwZXIpIDogdGhpcy5zdG9yZS5zdWJzY3JpYmUodGhpcy5oYW5kbGVDaGFuZ2VXcmFwcGVyKTtcbiAgICAgIHRoaXMubGlzdGVuZXJzID0gY3JlYXRlTGlzdGVuZXJDb2xsZWN0aW9uKCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by50cnlVbnN1YnNjcmliZSA9IGZ1bmN0aW9uIHRyeVVuc3Vic2NyaWJlKCkge1xuICAgIGlmICh0aGlzLnVuc3Vic2NyaWJlKSB7XG4gICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLnVuc3Vic2NyaWJlID0gbnVsbDtcbiAgICAgIHRoaXMubGlzdGVuZXJzLmNsZWFyKCk7XG4gICAgICB0aGlzLmxpc3RlbmVycyA9IG51bGxMaXN0ZW5lcnM7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBTdWJzY3JpcHRpb247XG59KCk7XG5cbmV4cG9ydCB7IFN1YnNjcmlwdGlvbiBhcyBkZWZhdWx0IH07IiwiLy8gRGVmYXVsdCB0byBhIGR1bW15IFwiYmF0Y2hcIiBpbXBsZW1lbnRhdGlvbiB0aGF0IGp1c3QgcnVucyB0aGUgY2FsbGJhY2tcbmZ1bmN0aW9uIGRlZmF1bHROb29wQmF0Y2goY2FsbGJhY2spIHtcbiAgY2FsbGJhY2soKTtcbn1cblxudmFyIGJhdGNoID0gZGVmYXVsdE5vb3BCYXRjaDsgLy8gQWxsb3cgaW5qZWN0aW5nIGFub3RoZXIgYmF0Y2hpbmcgZnVuY3Rpb24gbGF0ZXJcblxuZXhwb3J0IHZhciBzZXRCYXRjaCA9IGZ1bmN0aW9uIHNldEJhdGNoKG5ld0JhdGNoKSB7XG4gIHJldHVybiBiYXRjaCA9IG5ld0JhdGNoO1xufTsgLy8gU3VwcGx5IGEgZ2V0dGVyIGp1c3QgdG8gc2tpcCBkZWFsaW5nIHdpdGggRVNNIGJpbmRpbmdzXG5cbmV4cG9ydCB2YXIgZ2V0QmF0Y2ggPSBmdW5jdGlvbiBnZXRCYXRjaCgpIHtcbiAgcmV0dXJuIGJhdGNoO1xufTsiLCIvKipcbiAqIEBwYXJhbSB7YW55fSBvYmogVGhlIG9iamVjdCB0byBpbnNwZWN0LlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIGFyZ3VtZW50IGFwcGVhcnMgdG8gYmUgYSBwbGFpbiBvYmplY3QuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzUGxhaW5PYmplY3Qob2JqKSB7XG4gIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0JyB8fCBvYmogPT09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgdmFyIHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iaik7XG4gIGlmIChwcm90byA9PT0gbnVsbCkgcmV0dXJuIHRydWU7XG4gIHZhciBiYXNlUHJvdG8gPSBwcm90bztcblxuICB3aGlsZSAoT2JqZWN0LmdldFByb3RvdHlwZU9mKGJhc2VQcm90bykgIT09IG51bGwpIHtcbiAgICBiYXNlUHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoYmFzZVByb3RvKTtcbiAgfVxuXG4gIHJldHVybiBwcm90byA9PT0gYmFzZVByb3RvO1xufSIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby11bnJlc29sdmVkICovXG5leHBvcnQgeyB1bnN0YWJsZV9iYXRjaGVkVXBkYXRlcyB9IGZyb20gJ3JlYWN0LWRvbSc7IiwiZnVuY3Rpb24gaXMoeCwgeSkge1xuICBpZiAoeCA9PT0geSkge1xuICAgIHJldHVybiB4ICE9PSAwIHx8IHkgIT09IDAgfHwgMSAvIHggPT09IDEgLyB5O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB4ICE9PSB4ICYmIHkgIT09IHk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2hhbGxvd0VxdWFsKG9iakEsIG9iakIpIHtcbiAgaWYgKGlzKG9iakEsIG9iakIpKSByZXR1cm4gdHJ1ZTtcblxuICBpZiAodHlwZW9mIG9iakEgIT09ICdvYmplY3QnIHx8IG9iakEgPT09IG51bGwgfHwgdHlwZW9mIG9iakIgIT09ICdvYmplY3QnIHx8IG9iakIgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIga2V5c0EgPSBPYmplY3Qua2V5cyhvYmpBKTtcbiAgdmFyIGtleXNCID0gT2JqZWN0LmtleXMob2JqQik7XG4gIGlmIChrZXlzQS5sZW5ndGggIT09IGtleXNCLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5c0EubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmpCLCBrZXlzQVtpXSkgfHwgIWlzKG9iakFba2V5c0FbaV1dLCBvYmpCW2tleXNBW2ldXSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn0iLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZUxheW91dEVmZmVjdCB9IGZyb20gJ3JlYWN0JzsgLy8gUmVhY3QgY3VycmVudGx5IHRocm93cyBhIHdhcm5pbmcgd2hlbiB1c2luZyB1c2VMYXlvdXRFZmZlY3Qgb24gdGhlIHNlcnZlci5cbi8vIFRvIGdldCBhcm91bmQgaXQsIHdlIGNhbiBjb25kaXRpb25hbGx5IHVzZUVmZmVjdCBvbiB0aGUgc2VydmVyIChuby1vcCkgYW5kXG4vLyB1c2VMYXlvdXRFZmZlY3QgaW4gdGhlIGJyb3dzZXIuIFdlIG5lZWQgdXNlTGF5b3V0RWZmZWN0IHRvIGVuc3VyZSB0aGUgc3RvcmVcbi8vIHN1YnNjcmlwdGlvbiBjYWxsYmFjayBhbHdheXMgaGFzIHRoZSBzZWxlY3RvciBmcm9tIHRoZSBsYXRlc3QgcmVuZGVyIGNvbW1pdFxuLy8gYXZhaWxhYmxlLCBvdGhlcndpc2UgYSBzdG9yZSB1cGRhdGUgbWF5IGhhcHBlbiBiZXR3ZWVuIHJlbmRlciBhbmQgdGhlIGVmZmVjdCxcbi8vIHdoaWNoIG1heSBjYXVzZSBtaXNzZWQgdXBkYXRlczsgd2UgYWxzbyBtdXN0IGVuc3VyZSB0aGUgc3RvcmUgc3Vic2NyaXB0aW9uXG4vLyBpcyBjcmVhdGVkIHN5bmNocm9ub3VzbHksIG90aGVyd2lzZSBhIHN0b3JlIHVwZGF0ZSBtYXkgb2NjdXIgYmVmb3JlIHRoZVxuLy8gc3Vic2NyaXB0aW9uIGlzIGNyZWF0ZWQgYW5kIGFuIGluY29uc2lzdGVudCBzdGF0ZSBtYXkgYmUgb2JzZXJ2ZWRcblxuZXhwb3J0IHZhciB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0ID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy5kb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50ICE9PSAndW5kZWZpbmVkJyA/IHVzZUxheW91dEVmZmVjdCA6IHVzZUVmZmVjdDsiLCJpbXBvcnQgaXNQbGFpbk9iamVjdCBmcm9tICcuL2lzUGxhaW5PYmplY3QnO1xuaW1wb3J0IHdhcm5pbmcgZnJvbSAnLi93YXJuaW5nJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeVBsYWluT2JqZWN0KHZhbHVlLCBkaXNwbGF5TmFtZSwgbWV0aG9kTmFtZSkge1xuICBpZiAoIWlzUGxhaW5PYmplY3QodmFsdWUpKSB7XG4gICAgd2FybmluZyhtZXRob2ROYW1lICsgXCIoKSBpbiBcIiArIGRpc3BsYXlOYW1lICsgXCIgbXVzdCByZXR1cm4gYSBwbGFpbiBvYmplY3QuIEluc3RlYWQgcmVjZWl2ZWQgXCIgKyB2YWx1ZSArIFwiLlwiKTtcbiAgfVxufSIsIi8qKlxuICogUHJpbnRzIGEgd2FybmluZyBpbiB0aGUgY29uc29sZSBpZiBpdCBleGlzdHMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2UgVGhlIHdhcm5pbmcgbWVzc2FnZS5cbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3YXJuaW5nKG1lc3NhZ2UpIHtcbiAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBjb25zb2xlLmVycm9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgfVxuICAvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbnNvbGUgKi9cblxuXG4gIHRyeSB7XG4gICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCBpZiB5b3UgZW5hYmxlXG4gICAgLy8gXCJicmVhayBvbiBhbGwgZXhjZXB0aW9uc1wiIGluIHlvdXIgY29uc29sZSxcbiAgICAvLyBpdCB3b3VsZCBwYXVzZSB0aGUgZXhlY3V0aW9uIGF0IHRoaXMgbGluZS5cbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tZW1wdHkgKi9cbiAgfSBjYXRjaCAoZSkge31cbiAgLyogZXNsaW50LWVuYWJsZSBuby1lbXB0eSAqL1xuXG59IiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNi4xMy4xXG4gKiByZWFjdC1pcy5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIGhhc1N5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcjtcbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgOiAweGVhYzc7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wb3J0YWwnKSA6IDB4ZWFjYTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZnJhZ21lbnQnKSA6IDB4ZWFjYjtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3RyaWN0X21vZGUnKSA6IDB4ZWFjYztcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvZmlsZXInKSA6IDB4ZWFkMjtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvdmlkZXInKSA6IDB4ZWFjZDtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb250ZXh0JykgOiAweGVhY2U7IC8vIFRPRE86IFdlIGRvbid0IHVzZSBBc3luY01vZGUgb3IgQ29uY3VycmVudE1vZGUgYW55bW9yZS4gVGhleSB3ZXJlIHRlbXBvcmFyeVxuLy8gKHVuc3RhYmxlKSBBUElzIHRoYXQgaGF2ZSBiZWVuIHJlbW92ZWQuIENhbiB3ZSByZW1vdmUgdGhlIHN5bWJvbHM/XG5cbnZhciBSRUFDVF9BU1lOQ19NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5hc3luY19tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb25jdXJyZW50X21vZGUnKSA6IDB4ZWFjZjtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZm9yd2FyZF9yZWYnKSA6IDB4ZWFkMDtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2UnKSA6IDB4ZWFkMTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0JykgOiAweGVhZDg7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QubWVtbycpIDogMHhlYWQzO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmxhenknKSA6IDB4ZWFkNDtcbnZhciBSRUFDVF9CTE9DS19UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuYmxvY2snKSA6IDB4ZWFkOTtcbnZhciBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZnVuZGFtZW50YWwnKSA6IDB4ZWFkNTtcbnZhciBSRUFDVF9SRVNQT05ERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnJlc3BvbmRlcicpIDogMHhlYWQ2O1xudmFyIFJFQUNUX1NDT1BFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zY29wZScpIDogMHhlYWQ3O1xuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICByZXR1cm4gdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nIHx8IC8vIE5vdGU6IGl0cyB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyBpZiBpdCdzIGEgcG9seWZpbGwuXG4gIHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9SRVNQT05ERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9TQ09QRV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0JMT0NLX1RZUEUpO1xufVxuXG5mdW5jdGlvbiB0eXBlT2Yob2JqZWN0KSB7XG4gIGlmICh0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwpIHtcbiAgICB2YXIgJCR0eXBlb2YgPSBvYmplY3QuJCR0eXBlb2Y7XG5cbiAgICBzd2l0Y2ggKCQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTpcbiAgICAgICAgdmFyIHR5cGUgPSBvYmplY3QudHlwZTtcblxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0FTWU5DX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfRlJBR01FTlRfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgICAgICAgIHJldHVybiB0eXBlO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHZhciAkJHR5cGVvZlR5cGUgPSB0eXBlICYmIHR5cGUuJCR0eXBlb2Y7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoJCR0eXBlb2ZUeXBlKSB7XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZlR5cGU7XG5cbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn0gLy8gQXN5bmNNb2RlIGlzIGRlcHJlY2F0ZWQgYWxvbmcgd2l0aCBpc0FzeW5jTW9kZVxuXG52YXIgQXN5bmNNb2RlID0gUkVBQ1RfQVNZTkNfTU9ERV9UWVBFO1xudmFyIENvbmN1cnJlbnRNb2RlID0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU7XG52YXIgQ29udGV4dENvbnN1bWVyID0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xudmFyIENvbnRleHRQcm92aWRlciA9IFJFQUNUX1BST1ZJREVSX1RZUEU7XG52YXIgRWxlbWVudCA9IFJFQUNUX0VMRU1FTlRfVFlQRTtcbnZhciBGb3J3YXJkUmVmID0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbnZhciBGcmFnbWVudCA9IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG52YXIgTGF6eSA9IFJFQUNUX0xBWllfVFlQRTtcbnZhciBNZW1vID0gUkVBQ1RfTUVNT19UWVBFO1xudmFyIFBvcnRhbCA9IFJFQUNUX1BPUlRBTF9UWVBFO1xudmFyIFByb2ZpbGVyID0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbnZhciBTdHJpY3RNb2RlID0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbnZhciBTdXNwZW5zZSA9IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG52YXIgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSBmYWxzZTsgLy8gQXN5bmNNb2RlIHNob3VsZCBiZSBkZXByZWNhdGVkXG5cbmZ1bmN0aW9uIGlzQXN5bmNNb2RlKG9iamVjdCkge1xuICB7XG4gICAgaWYgKCFoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSkge1xuICAgICAgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSB0cnVlOyAvLyBVc2luZyBjb25zb2xlWyd3YXJuJ10gdG8gZXZhZGUgQmFiZWwgYW5kIEVTTGludFxuXG4gICAgICBjb25zb2xlWyd3YXJuJ10oJ1RoZSBSZWFjdElzLmlzQXN5bmNNb2RlKCkgYWxpYXMgaGFzIGJlZW4gZGVwcmVjYXRlZCwgJyArICdhbmQgd2lsbCBiZSByZW1vdmVkIGluIFJlYWN0IDE3Ky4gVXBkYXRlIHlvdXIgY29kZSB0byB1c2UgJyArICdSZWFjdElzLmlzQ29uY3VycmVudE1vZGUoKSBpbnN0ZWFkLiBJdCBoYXMgdGhlIGV4YWN0IHNhbWUgQVBJLicpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkgfHwgdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0FTWU5DX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29uY3VycmVudE1vZGUob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRDb25zdW1lcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05URVhUX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRQcm92aWRlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9WSURFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNFbGVtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNGb3J3YXJkUmVmKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZyYWdtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0xhenkob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTEFaWV9UWVBFO1xufVxuZnVuY3Rpb24gaXNNZW1vKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX01FTU9fVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUG9ydGFsKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BPUlRBTF9UWVBFO1xufVxuZnVuY3Rpb24gaXNQcm9maWxlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdHJpY3RNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N1c3BlbnNlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG59XG5cbmV4cG9ydHMuQXN5bmNNb2RlID0gQXN5bmNNb2RlO1xuZXhwb3J0cy5Db25jdXJyZW50TW9kZSA9IENvbmN1cnJlbnRNb2RlO1xuZXhwb3J0cy5Db250ZXh0Q29uc3VtZXIgPSBDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLkNvbnRleHRQcm92aWRlciA9IENvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuRWxlbWVudCA9IEVsZW1lbnQ7XG5leHBvcnRzLkZvcndhcmRSZWYgPSBGb3J3YXJkUmVmO1xuZXhwb3J0cy5GcmFnbWVudCA9IEZyYWdtZW50O1xuZXhwb3J0cy5MYXp5ID0gTGF6eTtcbmV4cG9ydHMuTWVtbyA9IE1lbW87XG5leHBvcnRzLlBvcnRhbCA9IFBvcnRhbDtcbmV4cG9ydHMuUHJvZmlsZXIgPSBQcm9maWxlcjtcbmV4cG9ydHMuU3RyaWN0TW9kZSA9IFN0cmljdE1vZGU7XG5leHBvcnRzLlN1c3BlbnNlID0gU3VzcGVuc2U7XG5leHBvcnRzLmlzQXN5bmNNb2RlID0gaXNBc3luY01vZGU7XG5leHBvcnRzLmlzQ29uY3VycmVudE1vZGUgPSBpc0NvbmN1cnJlbnRNb2RlO1xuZXhwb3J0cy5pc0NvbnRleHRDb25zdW1lciA9IGlzQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5pc0NvbnRleHRQcm92aWRlciA9IGlzQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5pc0VsZW1lbnQgPSBpc0VsZW1lbnQ7XG5leHBvcnRzLmlzRm9yd2FyZFJlZiA9IGlzRm9yd2FyZFJlZjtcbmV4cG9ydHMuaXNGcmFnbWVudCA9IGlzRnJhZ21lbnQ7XG5leHBvcnRzLmlzTGF6eSA9IGlzTGF6eTtcbmV4cG9ydHMuaXNNZW1vID0gaXNNZW1vO1xuZXhwb3J0cy5pc1BvcnRhbCA9IGlzUG9ydGFsO1xuZXhwb3J0cy5pc1Byb2ZpbGVyID0gaXNQcm9maWxlcjtcbmV4cG9ydHMuaXNTdHJpY3RNb2RlID0gaXNTdHJpY3RNb2RlO1xuZXhwb3J0cy5pc1N1c3BlbnNlID0gaXNTdXNwZW5zZTtcbmV4cG9ydHMuaXNWYWxpZEVsZW1lbnRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlO1xuZXhwb3J0cy50eXBlT2YgPSB0eXBlT2Y7XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsImltcG9ydCBfb2JqZWN0U3ByZWFkIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFNwcmVhZDInO1xuXG4vKipcbiAqIEFkYXB0ZWQgZnJvbSBSZWFjdDogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2Jsb2IvbWFzdGVyL3BhY2thZ2VzL3NoYXJlZC9mb3JtYXRQcm9kRXJyb3JNZXNzYWdlLmpzXG4gKlxuICogRG8gbm90IHJlcXVpcmUgdGhpcyBtb2R1bGUgZGlyZWN0bHkhIFVzZSBub3JtYWwgdGhyb3cgZXJyb3IgY2FsbHMuIFRoZXNlIG1lc3NhZ2VzIHdpbGwgYmUgcmVwbGFjZWQgd2l0aCBlcnJvciBjb2Rlc1xuICogZHVyaW5nIGJ1aWxkLlxuICogQHBhcmFtIHtudW1iZXJ9IGNvZGVcbiAqL1xuZnVuY3Rpb24gZm9ybWF0UHJvZEVycm9yTWVzc2FnZShjb2RlKSB7XG4gIHJldHVybiBcIk1pbmlmaWVkIFJlZHV4IGVycm9yICNcIiArIGNvZGUgKyBcIjsgdmlzaXQgaHR0cHM6Ly9yZWR1eC5qcy5vcmcvRXJyb3JzP2NvZGU9XCIgKyBjb2RlICsgXCIgZm9yIHRoZSBmdWxsIG1lc3NhZ2Ugb3IgXCIgKyAndXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50IGZvciBmdWxsIGVycm9ycy4gJztcbn1cblxuLy8gSW5saW5lZCB2ZXJzaW9uIG9mIHRoZSBgc3ltYm9sLW9ic2VydmFibGVgIHBvbHlmaWxsXG52YXIgJCRvYnNlcnZhYmxlID0gKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLm9ic2VydmFibGUgfHwgJ0BAb2JzZXJ2YWJsZSc7XG59KSgpO1xuXG4vKipcbiAqIFRoZXNlIGFyZSBwcml2YXRlIGFjdGlvbiB0eXBlcyByZXNlcnZlZCBieSBSZWR1eC5cbiAqIEZvciBhbnkgdW5rbm93biBhY3Rpb25zLCB5b3UgbXVzdCByZXR1cm4gdGhlIGN1cnJlbnQgc3RhdGUuXG4gKiBJZiB0aGUgY3VycmVudCBzdGF0ZSBpcyB1bmRlZmluZWQsIHlvdSBtdXN0IHJldHVybiB0aGUgaW5pdGlhbCBzdGF0ZS5cbiAqIERvIG5vdCByZWZlcmVuY2UgdGhlc2UgYWN0aW9uIHR5cGVzIGRpcmVjdGx5IGluIHlvdXIgY29kZS5cbiAqL1xudmFyIHJhbmRvbVN0cmluZyA9IGZ1bmN0aW9uIHJhbmRvbVN0cmluZygpIHtcbiAgcmV0dXJuIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZyg3KS5zcGxpdCgnJykuam9pbignLicpO1xufTtcblxudmFyIEFjdGlvblR5cGVzID0ge1xuICBJTklUOiBcIkBAcmVkdXgvSU5JVFwiICsgcmFuZG9tU3RyaW5nKCksXG4gIFJFUExBQ0U6IFwiQEByZWR1eC9SRVBMQUNFXCIgKyByYW5kb21TdHJpbmcoKSxcbiAgUFJPQkVfVU5LTk9XTl9BQ1RJT046IGZ1bmN0aW9uIFBST0JFX1VOS05PV05fQUNUSU9OKCkge1xuICAgIHJldHVybiBcIkBAcmVkdXgvUFJPQkVfVU5LTk9XTl9BQ1RJT05cIiArIHJhbmRvbVN0cmluZygpO1xuICB9XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7YW55fSBvYmogVGhlIG9iamVjdCB0byBpbnNwZWN0LlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIGFyZ3VtZW50IGFwcGVhcnMgdG8gYmUgYSBwbGFpbiBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIGlzUGxhaW5PYmplY3Qob2JqKSB7XG4gIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0JyB8fCBvYmogPT09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgdmFyIHByb3RvID0gb2JqO1xuXG4gIHdoaWxlIChPYmplY3QuZ2V0UHJvdG90eXBlT2YocHJvdG8pICE9PSBudWxsKSB7XG4gICAgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YocHJvdG8pO1xuICB9XG5cbiAgcmV0dXJuIE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmopID09PSBwcm90bztcbn1cblxuZnVuY3Rpb24ga2luZE9mKHZhbCkge1xuICB2YXIgdHlwZU9mVmFsID0gdHlwZW9mIHZhbDtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIC8vIElubGluZWQgLyBzaG9ydGVuZWQgdmVyc2lvbiBvZiBga2luZE9mYCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9qb25zY2hsaW5rZXJ0L2tpbmQtb2ZcbiAgICBmdW5jdGlvbiBtaW5pS2luZE9mKHZhbCkge1xuICAgICAgaWYgKHZhbCA9PT0gdm9pZCAwKSByZXR1cm4gJ3VuZGVmaW5lZCc7XG4gICAgICBpZiAodmFsID09PSBudWxsKSByZXR1cm4gJ251bGwnO1xuICAgICAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsO1xuXG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgIGNhc2UgJ3N5bWJvbCc6XG4gICAgICAgIGNhc2UgJ2Z1bmN0aW9uJzpcbiAgICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdHlwZTtcbiAgICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbCkpIHJldHVybiAnYXJyYXknO1xuICAgICAgaWYgKGlzRGF0ZSh2YWwpKSByZXR1cm4gJ2RhdGUnO1xuICAgICAgaWYgKGlzRXJyb3IodmFsKSkgcmV0dXJuICdlcnJvcic7XG4gICAgICB2YXIgY29uc3RydWN0b3JOYW1lID0gY3Rvck5hbWUodmFsKTtcblxuICAgICAgc3dpdGNoIChjb25zdHJ1Y3Rvck5hbWUpIHtcbiAgICAgICAgY2FzZSAnU3ltYm9sJzpcbiAgICAgICAgY2FzZSAnUHJvbWlzZSc6XG4gICAgICAgIGNhc2UgJ1dlYWtNYXAnOlxuICAgICAgICBjYXNlICdXZWFrU2V0JzpcbiAgICAgICAgY2FzZSAnTWFwJzpcbiAgICAgICAgY2FzZSAnU2V0JzpcbiAgICAgICAgICByZXR1cm4gY29uc3RydWN0b3JOYW1lO1xuICAgICAgfSAvLyBvdGhlclxuXG5cbiAgICAgIHJldHVybiB0eXBlLnNsaWNlKDgsIC0xKS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1xccy9nLCAnJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3Rvck5hbWUodmFsKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIHZhbC5jb25zdHJ1Y3RvciA9PT0gJ2Z1bmN0aW9uJyA/IHZhbC5jb25zdHJ1Y3Rvci5uYW1lIDogbnVsbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc0Vycm9yKHZhbCkge1xuICAgICAgcmV0dXJuIHZhbCBpbnN0YW5jZW9mIEVycm9yIHx8IHR5cGVvZiB2YWwubWVzc2FnZSA9PT0gJ3N0cmluZycgJiYgdmFsLmNvbnN0cnVjdG9yICYmIHR5cGVvZiB2YWwuY29uc3RydWN0b3Iuc3RhY2tUcmFjZUxpbWl0ID09PSAnbnVtYmVyJztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc0RhdGUodmFsKSB7XG4gICAgICBpZiAodmFsIGluc3RhbmNlb2YgRGF0ZSkgcmV0dXJuIHRydWU7XG4gICAgICByZXR1cm4gdHlwZW9mIHZhbC50b0RhdGVTdHJpbmcgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHZhbC5nZXREYXRlID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiB2YWwuc2V0RGF0ZSA9PT0gJ2Z1bmN0aW9uJztcbiAgICB9XG5cbiAgICB0eXBlT2ZWYWwgPSBtaW5pS2luZE9mKHZhbCk7XG4gIH1cblxuICByZXR1cm4gdHlwZU9mVmFsO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBSZWR1eCBzdG9yZSB0aGF0IGhvbGRzIHRoZSBzdGF0ZSB0cmVlLlxuICogVGhlIG9ubHkgd2F5IHRvIGNoYW5nZSB0aGUgZGF0YSBpbiB0aGUgc3RvcmUgaXMgdG8gY2FsbCBgZGlzcGF0Y2goKWAgb24gaXQuXG4gKlxuICogVGhlcmUgc2hvdWxkIG9ubHkgYmUgYSBzaW5nbGUgc3RvcmUgaW4geW91ciBhcHAuIFRvIHNwZWNpZnkgaG93IGRpZmZlcmVudFxuICogcGFydHMgb2YgdGhlIHN0YXRlIHRyZWUgcmVzcG9uZCB0byBhY3Rpb25zLCB5b3UgbWF5IGNvbWJpbmUgc2V2ZXJhbCByZWR1Y2Vyc1xuICogaW50byBhIHNpbmdsZSByZWR1Y2VyIGZ1bmN0aW9uIGJ5IHVzaW5nIGBjb21iaW5lUmVkdWNlcnNgLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlZHVjZXIgQSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIG5leHQgc3RhdGUgdHJlZSwgZ2l2ZW5cbiAqIHRoZSBjdXJyZW50IHN0YXRlIHRyZWUgYW5kIHRoZSBhY3Rpb24gdG8gaGFuZGxlLlxuICpcbiAqIEBwYXJhbSB7YW55fSBbcHJlbG9hZGVkU3RhdGVdIFRoZSBpbml0aWFsIHN0YXRlLiBZb3UgbWF5IG9wdGlvbmFsbHkgc3BlY2lmeSBpdFxuICogdG8gaHlkcmF0ZSB0aGUgc3RhdGUgZnJvbSB0aGUgc2VydmVyIGluIHVuaXZlcnNhbCBhcHBzLCBvciB0byByZXN0b3JlIGFcbiAqIHByZXZpb3VzbHkgc2VyaWFsaXplZCB1c2VyIHNlc3Npb24uXG4gKiBJZiB5b3UgdXNlIGBjb21iaW5lUmVkdWNlcnNgIHRvIHByb2R1Y2UgdGhlIHJvb3QgcmVkdWNlciBmdW5jdGlvbiwgdGhpcyBtdXN0IGJlXG4gKiBhbiBvYmplY3Qgd2l0aCB0aGUgc2FtZSBzaGFwZSBhcyBgY29tYmluZVJlZHVjZXJzYCBrZXlzLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtlbmhhbmNlcl0gVGhlIHN0b3JlIGVuaGFuY2VyLiBZb3UgbWF5IG9wdGlvbmFsbHkgc3BlY2lmeSBpdFxuICogdG8gZW5oYW5jZSB0aGUgc3RvcmUgd2l0aCB0aGlyZC1wYXJ0eSBjYXBhYmlsaXRpZXMgc3VjaCBhcyBtaWRkbGV3YXJlLFxuICogdGltZSB0cmF2ZWwsIHBlcnNpc3RlbmNlLCBldGMuIFRoZSBvbmx5IHN0b3JlIGVuaGFuY2VyIHRoYXQgc2hpcHMgd2l0aCBSZWR1eFxuICogaXMgYGFwcGx5TWlkZGxld2FyZSgpYC5cbiAqXG4gKiBAcmV0dXJucyB7U3RvcmV9IEEgUmVkdXggc3RvcmUgdGhhdCBsZXRzIHlvdSByZWFkIHRoZSBzdGF0ZSwgZGlzcGF0Y2ggYWN0aW9uc1xuICogYW5kIHN1YnNjcmliZSB0byBjaGFuZ2VzLlxuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZVN0b3JlKHJlZHVjZXIsIHByZWxvYWRlZFN0YXRlLCBlbmhhbmNlcikge1xuICB2YXIgX3JlZjI7XG5cbiAgaWYgKHR5cGVvZiBwcmVsb2FkZWRTdGF0ZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZW5oYW5jZXIgPT09ICdmdW5jdGlvbicgfHwgdHlwZW9mIGVuaGFuY2VyID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBhcmd1bWVudHNbM10gPT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gZm9ybWF0UHJvZEVycm9yTWVzc2FnZSgwKSA6ICdJdCBsb29rcyBsaWtlIHlvdSBhcmUgcGFzc2luZyBzZXZlcmFsIHN0b3JlIGVuaGFuY2VycyB0byAnICsgJ2NyZWF0ZVN0b3JlKCkuIFRoaXMgaXMgbm90IHN1cHBvcnRlZC4gSW5zdGVhZCwgY29tcG9zZSB0aGVtICcgKyAndG9nZXRoZXIgdG8gYSBzaW5nbGUgZnVuY3Rpb24uIFNlZSBodHRwczovL3JlZHV4LmpzLm9yZy90dXRvcmlhbHMvZnVuZGFtZW50YWxzL3BhcnQtNC1zdG9yZSNjcmVhdGluZy1hLXN0b3JlLXdpdGgtZW5oYW5jZXJzIGZvciBhbiBleGFtcGxlLicpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBwcmVsb2FkZWRTdGF0ZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZW5oYW5jZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgZW5oYW5jZXIgPSBwcmVsb2FkZWRTdGF0ZTtcbiAgICBwcmVsb2FkZWRTdGF0ZSA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgZW5oYW5jZXIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKHR5cGVvZiBlbmhhbmNlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoMSkgOiBcIkV4cGVjdGVkIHRoZSBlbmhhbmNlciB0byBiZSBhIGZ1bmN0aW9uLiBJbnN0ZWFkLCByZWNlaXZlZDogJ1wiICsga2luZE9mKGVuaGFuY2VyKSArIFwiJ1wiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZW5oYW5jZXIoY3JlYXRlU3RvcmUpKHJlZHVjZXIsIHByZWxvYWRlZFN0YXRlKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgcmVkdWNlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDIpIDogXCJFeHBlY3RlZCB0aGUgcm9vdCByZWR1Y2VyIHRvIGJlIGEgZnVuY3Rpb24uIEluc3RlYWQsIHJlY2VpdmVkOiAnXCIgKyBraW5kT2YocmVkdWNlcikgKyBcIidcIik7XG4gIH1cblxuICB2YXIgY3VycmVudFJlZHVjZXIgPSByZWR1Y2VyO1xuICB2YXIgY3VycmVudFN0YXRlID0gcHJlbG9hZGVkU3RhdGU7XG4gIHZhciBjdXJyZW50TGlzdGVuZXJzID0gW107XG4gIHZhciBuZXh0TGlzdGVuZXJzID0gY3VycmVudExpc3RlbmVycztcbiAgdmFyIGlzRGlzcGF0Y2hpbmcgPSBmYWxzZTtcbiAgLyoqXG4gICAqIFRoaXMgbWFrZXMgYSBzaGFsbG93IGNvcHkgb2YgY3VycmVudExpc3RlbmVycyBzbyB3ZSBjYW4gdXNlXG4gICAqIG5leHRMaXN0ZW5lcnMgYXMgYSB0ZW1wb3JhcnkgbGlzdCB3aGlsZSBkaXNwYXRjaGluZy5cbiAgICpcbiAgICogVGhpcyBwcmV2ZW50cyBhbnkgYnVncyBhcm91bmQgY29uc3VtZXJzIGNhbGxpbmdcbiAgICogc3Vic2NyaWJlL3Vuc3Vic2NyaWJlIGluIHRoZSBtaWRkbGUgb2YgYSBkaXNwYXRjaC5cbiAgICovXG5cbiAgZnVuY3Rpb24gZW5zdXJlQ2FuTXV0YXRlTmV4dExpc3RlbmVycygpIHtcbiAgICBpZiAobmV4dExpc3RlbmVycyA9PT0gY3VycmVudExpc3RlbmVycykge1xuICAgICAgbmV4dExpc3RlbmVycyA9IGN1cnJlbnRMaXN0ZW5lcnMuc2xpY2UoKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIFJlYWRzIHRoZSBzdGF0ZSB0cmVlIG1hbmFnZWQgYnkgdGhlIHN0b3JlLlxuICAgKlxuICAgKiBAcmV0dXJucyB7YW55fSBUaGUgY3VycmVudCBzdGF0ZSB0cmVlIG9mIHlvdXIgYXBwbGljYXRpb24uXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gZ2V0U3RhdGUoKSB7XG4gICAgaWYgKGlzRGlzcGF0Y2hpbmcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDMpIDogJ1lvdSBtYXkgbm90IGNhbGwgc3RvcmUuZ2V0U3RhdGUoKSB3aGlsZSB0aGUgcmVkdWNlciBpcyBleGVjdXRpbmcuICcgKyAnVGhlIHJlZHVjZXIgaGFzIGFscmVhZHkgcmVjZWl2ZWQgdGhlIHN0YXRlIGFzIGFuIGFyZ3VtZW50LiAnICsgJ1Bhc3MgaXQgZG93biBmcm9tIHRoZSB0b3AgcmVkdWNlciBpbnN0ZWFkIG9mIHJlYWRpbmcgaXQgZnJvbSB0aGUgc3RvcmUuJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGN1cnJlbnRTdGF0ZTtcbiAgfVxuICAvKipcbiAgICogQWRkcyBhIGNoYW5nZSBsaXN0ZW5lci4gSXQgd2lsbCBiZSBjYWxsZWQgYW55IHRpbWUgYW4gYWN0aW9uIGlzIGRpc3BhdGNoZWQsXG4gICAqIGFuZCBzb21lIHBhcnQgb2YgdGhlIHN0YXRlIHRyZWUgbWF5IHBvdGVudGlhbGx5IGhhdmUgY2hhbmdlZC4gWW91IG1heSB0aGVuXG4gICAqIGNhbGwgYGdldFN0YXRlKClgIHRvIHJlYWQgdGhlIGN1cnJlbnQgc3RhdGUgdHJlZSBpbnNpZGUgdGhlIGNhbGxiYWNrLlxuICAgKlxuICAgKiBZb3UgbWF5IGNhbGwgYGRpc3BhdGNoKClgIGZyb20gYSBjaGFuZ2UgbGlzdGVuZXIsIHdpdGggdGhlIGZvbGxvd2luZ1xuICAgKiBjYXZlYXRzOlxuICAgKlxuICAgKiAxLiBUaGUgc3Vic2NyaXB0aW9ucyBhcmUgc25hcHNob3R0ZWQganVzdCBiZWZvcmUgZXZlcnkgYGRpc3BhdGNoKClgIGNhbGwuXG4gICAqIElmIHlvdSBzdWJzY3JpYmUgb3IgdW5zdWJzY3JpYmUgd2hpbGUgdGhlIGxpc3RlbmVycyBhcmUgYmVpbmcgaW52b2tlZCwgdGhpc1xuICAgKiB3aWxsIG5vdCBoYXZlIGFueSBlZmZlY3Qgb24gdGhlIGBkaXNwYXRjaCgpYCB0aGF0IGlzIGN1cnJlbnRseSBpbiBwcm9ncmVzcy5cbiAgICogSG93ZXZlciwgdGhlIG5leHQgYGRpc3BhdGNoKClgIGNhbGwsIHdoZXRoZXIgbmVzdGVkIG9yIG5vdCwgd2lsbCB1c2UgYSBtb3JlXG4gICAqIHJlY2VudCBzbmFwc2hvdCBvZiB0aGUgc3Vic2NyaXB0aW9uIGxpc3QuXG4gICAqXG4gICAqIDIuIFRoZSBsaXN0ZW5lciBzaG91bGQgbm90IGV4cGVjdCB0byBzZWUgYWxsIHN0YXRlIGNoYW5nZXMsIGFzIHRoZSBzdGF0ZVxuICAgKiBtaWdodCBoYXZlIGJlZW4gdXBkYXRlZCBtdWx0aXBsZSB0aW1lcyBkdXJpbmcgYSBuZXN0ZWQgYGRpc3BhdGNoKClgIGJlZm9yZVxuICAgKiB0aGUgbGlzdGVuZXIgaXMgY2FsbGVkLiBJdCBpcywgaG93ZXZlciwgZ3VhcmFudGVlZCB0aGF0IGFsbCBzdWJzY3JpYmVyc1xuICAgKiByZWdpc3RlcmVkIGJlZm9yZSB0aGUgYGRpc3BhdGNoKClgIHN0YXJ0ZWQgd2lsbCBiZSBjYWxsZWQgd2l0aCB0aGUgbGF0ZXN0XG4gICAqIHN0YXRlIGJ5IHRoZSB0aW1lIGl0IGV4aXRzLlxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lciBBIGNhbGxiYWNrIHRvIGJlIGludm9rZWQgb24gZXZlcnkgZGlzcGF0Y2guXG4gICAqIEByZXR1cm5zIHtGdW5jdGlvbn0gQSBmdW5jdGlvbiB0byByZW1vdmUgdGhpcyBjaGFuZ2UgbGlzdGVuZXIuXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gc3Vic2NyaWJlKGxpc3RlbmVyKSB7XG4gICAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoNCkgOiBcIkV4cGVjdGVkIHRoZSBsaXN0ZW5lciB0byBiZSBhIGZ1bmN0aW9uLiBJbnN0ZWFkLCByZWNlaXZlZDogJ1wiICsga2luZE9mKGxpc3RlbmVyKSArIFwiJ1wiKTtcbiAgICB9XG5cbiAgICBpZiAoaXNEaXNwYXRjaGluZykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoNSkgOiAnWW91IG1heSBub3QgY2FsbCBzdG9yZS5zdWJzY3JpYmUoKSB3aGlsZSB0aGUgcmVkdWNlciBpcyBleGVjdXRpbmcuICcgKyAnSWYgeW91IHdvdWxkIGxpa2UgdG8gYmUgbm90aWZpZWQgYWZ0ZXIgdGhlIHN0b3JlIGhhcyBiZWVuIHVwZGF0ZWQsIHN1YnNjcmliZSBmcm9tIGEgJyArICdjb21wb25lbnQgYW5kIGludm9rZSBzdG9yZS5nZXRTdGF0ZSgpIGluIHRoZSBjYWxsYmFjayB0byBhY2Nlc3MgdGhlIGxhdGVzdCBzdGF0ZS4gJyArICdTZWUgaHR0cHM6Ly9yZWR1eC5qcy5vcmcvYXBpL3N0b3JlI3N1YnNjcmliZWxpc3RlbmVyIGZvciBtb3JlIGRldGFpbHMuJyk7XG4gICAgfVxuXG4gICAgdmFyIGlzU3Vic2NyaWJlZCA9IHRydWU7XG4gICAgZW5zdXJlQ2FuTXV0YXRlTmV4dExpc3RlbmVycygpO1xuICAgIG5leHRMaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHVuc3Vic2NyaWJlKCkge1xuICAgICAgaWYgKCFpc1N1YnNjcmliZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNEaXNwYXRjaGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gZm9ybWF0UHJvZEVycm9yTWVzc2FnZSg2KSA6ICdZb3UgbWF5IG5vdCB1bnN1YnNjcmliZSBmcm9tIGEgc3RvcmUgbGlzdGVuZXIgd2hpbGUgdGhlIHJlZHVjZXIgaXMgZXhlY3V0aW5nLiAnICsgJ1NlZSBodHRwczovL3JlZHV4LmpzLm9yZy9hcGkvc3RvcmUjc3Vic2NyaWJlbGlzdGVuZXIgZm9yIG1vcmUgZGV0YWlscy4nKTtcbiAgICAgIH1cblxuICAgICAgaXNTdWJzY3JpYmVkID0gZmFsc2U7XG4gICAgICBlbnN1cmVDYW5NdXRhdGVOZXh0TGlzdGVuZXJzKCk7XG4gICAgICB2YXIgaW5kZXggPSBuZXh0TGlzdGVuZXJzLmluZGV4T2YobGlzdGVuZXIpO1xuICAgICAgbmV4dExpc3RlbmVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgY3VycmVudExpc3RlbmVycyA9IG51bGw7XG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogRGlzcGF0Y2hlcyBhbiBhY3Rpb24uIEl0IGlzIHRoZSBvbmx5IHdheSB0byB0cmlnZ2VyIGEgc3RhdGUgY2hhbmdlLlxuICAgKlxuICAgKiBUaGUgYHJlZHVjZXJgIGZ1bmN0aW9uLCB1c2VkIHRvIGNyZWF0ZSB0aGUgc3RvcmUsIHdpbGwgYmUgY2FsbGVkIHdpdGggdGhlXG4gICAqIGN1cnJlbnQgc3RhdGUgdHJlZSBhbmQgdGhlIGdpdmVuIGBhY3Rpb25gLiBJdHMgcmV0dXJuIHZhbHVlIHdpbGxcbiAgICogYmUgY29uc2lkZXJlZCB0aGUgKipuZXh0Kiogc3RhdGUgb2YgdGhlIHRyZWUsIGFuZCB0aGUgY2hhbmdlIGxpc3RlbmVyc1xuICAgKiB3aWxsIGJlIG5vdGlmaWVkLlxuICAgKlxuICAgKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvbmx5IHN1cHBvcnRzIHBsYWluIG9iamVjdCBhY3Rpb25zLiBJZiB5b3Ugd2FudCB0b1xuICAgKiBkaXNwYXRjaCBhIFByb21pc2UsIGFuIE9ic2VydmFibGUsIGEgdGh1bmssIG9yIHNvbWV0aGluZyBlbHNlLCB5b3UgbmVlZCB0b1xuICAgKiB3cmFwIHlvdXIgc3RvcmUgY3JlYXRpbmcgZnVuY3Rpb24gaW50byB0aGUgY29ycmVzcG9uZGluZyBtaWRkbGV3YXJlLiBGb3JcbiAgICogZXhhbXBsZSwgc2VlIHRoZSBkb2N1bWVudGF0aW9uIGZvciB0aGUgYHJlZHV4LXRodW5rYCBwYWNrYWdlLiBFdmVuIHRoZVxuICAgKiBtaWRkbGV3YXJlIHdpbGwgZXZlbnR1YWxseSBkaXNwYXRjaCBwbGFpbiBvYmplY3QgYWN0aW9ucyB1c2luZyB0aGlzIG1ldGhvZC5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbiBBIHBsYWluIG9iamVjdCByZXByZXNlbnRpbmcg4oCcd2hhdCBjaGFuZ2Vk4oCdLiBJdCBpc1xuICAgKiBhIGdvb2QgaWRlYSB0byBrZWVwIGFjdGlvbnMgc2VyaWFsaXphYmxlIHNvIHlvdSBjYW4gcmVjb3JkIGFuZCByZXBsYXkgdXNlclxuICAgKiBzZXNzaW9ucywgb3IgdXNlIHRoZSB0aW1lIHRyYXZlbGxpbmcgYHJlZHV4LWRldnRvb2xzYC4gQW4gYWN0aW9uIG11c3QgaGF2ZVxuICAgKiBhIGB0eXBlYCBwcm9wZXJ0eSB3aGljaCBtYXkgbm90IGJlIGB1bmRlZmluZWRgLiBJdCBpcyBhIGdvb2QgaWRlYSB0byB1c2VcbiAgICogc3RyaW5nIGNvbnN0YW50cyBmb3IgYWN0aW9uIHR5cGVzLlxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBGb3IgY29udmVuaWVuY2UsIHRoZSBzYW1lIGFjdGlvbiBvYmplY3QgeW91IGRpc3BhdGNoZWQuXG4gICAqXG4gICAqIE5vdGUgdGhhdCwgaWYgeW91IHVzZSBhIGN1c3RvbSBtaWRkbGV3YXJlLCBpdCBtYXkgd3JhcCBgZGlzcGF0Y2goKWAgdG9cbiAgICogcmV0dXJuIHNvbWV0aGluZyBlbHNlIChmb3IgZXhhbXBsZSwgYSBQcm9taXNlIHlvdSBjYW4gYXdhaXQpLlxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIGRpc3BhdGNoKGFjdGlvbikge1xuICAgIGlmICghaXNQbGFpbk9iamVjdChhY3Rpb24pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gZm9ybWF0UHJvZEVycm9yTWVzc2FnZSg3KSA6IFwiQWN0aW9ucyBtdXN0IGJlIHBsYWluIG9iamVjdHMuIEluc3RlYWQsIHRoZSBhY3R1YWwgdHlwZSB3YXM6ICdcIiArIGtpbmRPZihhY3Rpb24pICsgXCInLiBZb3UgbWF5IG5lZWQgdG8gYWRkIG1pZGRsZXdhcmUgdG8geW91ciBzdG9yZSBzZXR1cCB0byBoYW5kbGUgZGlzcGF0Y2hpbmcgb3RoZXIgdmFsdWVzLCBzdWNoIGFzICdyZWR1eC10aHVuaycgdG8gaGFuZGxlIGRpc3BhdGNoaW5nIGZ1bmN0aW9ucy4gU2VlIGh0dHBzOi8vcmVkdXguanMub3JnL3R1dG9yaWFscy9mdW5kYW1lbnRhbHMvcGFydC00LXN0b3JlI21pZGRsZXdhcmUgYW5kIGh0dHBzOi8vcmVkdXguanMub3JnL3R1dG9yaWFscy9mdW5kYW1lbnRhbHMvcGFydC02LWFzeW5jLWxvZ2ljI3VzaW5nLXRoZS1yZWR1eC10aHVuay1taWRkbGV3YXJlIGZvciBleGFtcGxlcy5cIik7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBhY3Rpb24udHlwZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDgpIDogJ0FjdGlvbnMgbWF5IG5vdCBoYXZlIGFuIHVuZGVmaW5lZCBcInR5cGVcIiBwcm9wZXJ0eS4gWW91IG1heSBoYXZlIG1pc3NwZWxsZWQgYW4gYWN0aW9uIHR5cGUgc3RyaW5nIGNvbnN0YW50LicpO1xuICAgIH1cblxuICAgIGlmIChpc0Rpc3BhdGNoaW5nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gZm9ybWF0UHJvZEVycm9yTWVzc2FnZSg5KSA6ICdSZWR1Y2VycyBtYXkgbm90IGRpc3BhdGNoIGFjdGlvbnMuJyk7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGlzRGlzcGF0Y2hpbmcgPSB0cnVlO1xuICAgICAgY3VycmVudFN0YXRlID0gY3VycmVudFJlZHVjZXIoY3VycmVudFN0YXRlLCBhY3Rpb24pO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpc0Rpc3BhdGNoaW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIGxpc3RlbmVycyA9IGN1cnJlbnRMaXN0ZW5lcnMgPSBuZXh0TGlzdGVuZXJzO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBsaXN0ZW5lciA9IGxpc3RlbmVyc1tpXTtcbiAgICAgIGxpc3RlbmVyKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFjdGlvbjtcbiAgfVxuICAvKipcbiAgICogUmVwbGFjZXMgdGhlIHJlZHVjZXIgY3VycmVudGx5IHVzZWQgYnkgdGhlIHN0b3JlIHRvIGNhbGN1bGF0ZSB0aGUgc3RhdGUuXG4gICAqXG4gICAqIFlvdSBtaWdodCBuZWVkIHRoaXMgaWYgeW91ciBhcHAgaW1wbGVtZW50cyBjb2RlIHNwbGl0dGluZyBhbmQgeW91IHdhbnQgdG9cbiAgICogbG9hZCBzb21lIG9mIHRoZSByZWR1Y2VycyBkeW5hbWljYWxseS4gWW91IG1pZ2h0IGFsc28gbmVlZCB0aGlzIGlmIHlvdVxuICAgKiBpbXBsZW1lbnQgYSBob3QgcmVsb2FkaW5nIG1lY2hhbmlzbSBmb3IgUmVkdXguXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IG5leHRSZWR1Y2VyIFRoZSByZWR1Y2VyIGZvciB0aGUgc3RvcmUgdG8gdXNlIGluc3RlYWQuXG4gICAqIEByZXR1cm5zIHt2b2lkfVxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIHJlcGxhY2VSZWR1Y2VyKG5leHRSZWR1Y2VyKSB7XG4gICAgaWYgKHR5cGVvZiBuZXh0UmVkdWNlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoMTApIDogXCJFeHBlY3RlZCB0aGUgbmV4dFJlZHVjZXIgdG8gYmUgYSBmdW5jdGlvbi4gSW5zdGVhZCwgcmVjZWl2ZWQ6ICdcIiArIGtpbmRPZihuZXh0UmVkdWNlcikpO1xuICAgIH1cblxuICAgIGN1cnJlbnRSZWR1Y2VyID0gbmV4dFJlZHVjZXI7IC8vIFRoaXMgYWN0aW9uIGhhcyBhIHNpbWlsaWFyIGVmZmVjdCB0byBBY3Rpb25UeXBlcy5JTklULlxuICAgIC8vIEFueSByZWR1Y2VycyB0aGF0IGV4aXN0ZWQgaW4gYm90aCB0aGUgbmV3IGFuZCBvbGQgcm9vdFJlZHVjZXJcbiAgICAvLyB3aWxsIHJlY2VpdmUgdGhlIHByZXZpb3VzIHN0YXRlLiBUaGlzIGVmZmVjdGl2ZWx5IHBvcHVsYXRlc1xuICAgIC8vIHRoZSBuZXcgc3RhdGUgdHJlZSB3aXRoIGFueSByZWxldmFudCBkYXRhIGZyb20gdGhlIG9sZCBvbmUuXG5cbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBBY3Rpb25UeXBlcy5SRVBMQUNFXG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICAqIEludGVyb3BlcmFiaWxpdHkgcG9pbnQgZm9yIG9ic2VydmFibGUvcmVhY3RpdmUgbGlicmFyaWVzLlxuICAgKiBAcmV0dXJucyB7b2JzZXJ2YWJsZX0gQSBtaW5pbWFsIG9ic2VydmFibGUgb2Ygc3RhdGUgY2hhbmdlcy5cbiAgICogRm9yIG1vcmUgaW5mb3JtYXRpb24sIHNlZSB0aGUgb2JzZXJ2YWJsZSBwcm9wb3NhbDpcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtb2JzZXJ2YWJsZVxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIG9ic2VydmFibGUoKSB7XG4gICAgdmFyIF9yZWY7XG5cbiAgICB2YXIgb3V0ZXJTdWJzY3JpYmUgPSBzdWJzY3JpYmU7XG4gICAgcmV0dXJuIF9yZWYgPSB7XG4gICAgICAvKipcbiAgICAgICAqIFRoZSBtaW5pbWFsIG9ic2VydmFibGUgc3Vic2NyaXB0aW9uIG1ldGhvZC5cbiAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvYnNlcnZlciBBbnkgb2JqZWN0IHRoYXQgY2FuIGJlIHVzZWQgYXMgYW4gb2JzZXJ2ZXIuXG4gICAgICAgKiBUaGUgb2JzZXJ2ZXIgb2JqZWN0IHNob3VsZCBoYXZlIGEgYG5leHRgIG1ldGhvZC5cbiAgICAgICAqIEByZXR1cm5zIHtzdWJzY3JpcHRpb259IEFuIG9iamVjdCB3aXRoIGFuIGB1bnN1YnNjcmliZWAgbWV0aG9kIHRoYXQgY2FuXG4gICAgICAgKiBiZSB1c2VkIHRvIHVuc3Vic2NyaWJlIHRoZSBvYnNlcnZhYmxlIGZyb20gdGhlIHN0b3JlLCBhbmQgcHJldmVudCBmdXJ0aGVyXG4gICAgICAgKiBlbWlzc2lvbiBvZiB2YWx1ZXMgZnJvbSB0aGUgb2JzZXJ2YWJsZS5cbiAgICAgICAqL1xuICAgICAgc3Vic2NyaWJlOiBmdW5jdGlvbiBzdWJzY3JpYmUob2JzZXJ2ZXIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBvYnNlcnZlciAhPT0gJ29iamVjdCcgfHwgb2JzZXJ2ZXIgPT09IG51bGwpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gZm9ybWF0UHJvZEVycm9yTWVzc2FnZSgxMSkgOiBcIkV4cGVjdGVkIHRoZSBvYnNlcnZlciB0byBiZSBhbiBvYmplY3QuIEluc3RlYWQsIHJlY2VpdmVkOiAnXCIgKyBraW5kT2Yob2JzZXJ2ZXIpICsgXCInXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gb2JzZXJ2ZVN0YXRlKCkge1xuICAgICAgICAgIGlmIChvYnNlcnZlci5uZXh0KSB7XG4gICAgICAgICAgICBvYnNlcnZlci5uZXh0KGdldFN0YXRlKCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG9ic2VydmVTdGF0ZSgpO1xuICAgICAgICB2YXIgdW5zdWJzY3JpYmUgPSBvdXRlclN1YnNjcmliZShvYnNlcnZlU3RhdGUpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHVuc3Vic2NyaWJlOiB1bnN1YnNjcmliZVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0sIF9yZWZbJCRvYnNlcnZhYmxlXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sIF9yZWY7XG4gIH0gLy8gV2hlbiBhIHN0b3JlIGlzIGNyZWF0ZWQsIGFuIFwiSU5JVFwiIGFjdGlvbiBpcyBkaXNwYXRjaGVkIHNvIHRoYXQgZXZlcnlcbiAgLy8gcmVkdWNlciByZXR1cm5zIHRoZWlyIGluaXRpYWwgc3RhdGUuIFRoaXMgZWZmZWN0aXZlbHkgcG9wdWxhdGVzXG4gIC8vIHRoZSBpbml0aWFsIHN0YXRlIHRyZWUuXG5cblxuICBkaXNwYXRjaCh7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuSU5JVFxuICB9KTtcbiAgcmV0dXJuIF9yZWYyID0ge1xuICAgIGRpc3BhdGNoOiBkaXNwYXRjaCxcbiAgICBzdWJzY3JpYmU6IHN1YnNjcmliZSxcbiAgICBnZXRTdGF0ZTogZ2V0U3RhdGUsXG4gICAgcmVwbGFjZVJlZHVjZXI6IHJlcGxhY2VSZWR1Y2VyXG4gIH0sIF9yZWYyWyQkb2JzZXJ2YWJsZV0gPSBvYnNlcnZhYmxlLCBfcmVmMjtcbn1cblxuLyoqXG4gKiBQcmludHMgYSB3YXJuaW5nIGluIHRoZSBjb25zb2xlIGlmIGl0IGV4aXN0cy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZSBUaGUgd2FybmluZyBtZXNzYWdlLlxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIHdhcm5pbmcobWVzc2FnZSkge1xuICAvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG4gIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGNvbnNvbGUuZXJyb3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICB9XG4gIC8qIGVzbGludC1lbmFibGUgbm8tY29uc29sZSAqL1xuXG5cbiAgdHJ5IHtcbiAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IGlmIHlvdSBlbmFibGVcbiAgICAvLyBcImJyZWFrIG9uIGFsbCBleGNlcHRpb25zXCIgaW4geW91ciBjb25zb2xlLFxuICAgIC8vIGl0IHdvdWxkIHBhdXNlIHRoZSBleGVjdXRpb24gYXQgdGhpcyBsaW5lLlxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgfSBjYXRjaCAoZSkge30gLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1lbXB0eVxuXG59XG5cbmZ1bmN0aW9uIGdldFVuZXhwZWN0ZWRTdGF0ZVNoYXBlV2FybmluZ01lc3NhZ2UoaW5wdXRTdGF0ZSwgcmVkdWNlcnMsIGFjdGlvbiwgdW5leHBlY3RlZEtleUNhY2hlKSB7XG4gIHZhciByZWR1Y2VyS2V5cyA9IE9iamVjdC5rZXlzKHJlZHVjZXJzKTtcbiAgdmFyIGFyZ3VtZW50TmFtZSA9IGFjdGlvbiAmJiBhY3Rpb24udHlwZSA9PT0gQWN0aW9uVHlwZXMuSU5JVCA/ICdwcmVsb2FkZWRTdGF0ZSBhcmd1bWVudCBwYXNzZWQgdG8gY3JlYXRlU3RvcmUnIDogJ3ByZXZpb3VzIHN0YXRlIHJlY2VpdmVkIGJ5IHRoZSByZWR1Y2VyJztcblxuICBpZiAocmVkdWNlcktleXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuICdTdG9yZSBkb2VzIG5vdCBoYXZlIGEgdmFsaWQgcmVkdWNlci4gTWFrZSBzdXJlIHRoZSBhcmd1bWVudCBwYXNzZWQgJyArICd0byBjb21iaW5lUmVkdWNlcnMgaXMgYW4gb2JqZWN0IHdob3NlIHZhbHVlcyBhcmUgcmVkdWNlcnMuJztcbiAgfVxuXG4gIGlmICghaXNQbGFpbk9iamVjdChpbnB1dFN0YXRlKSkge1xuICAgIHJldHVybiBcIlRoZSBcIiArIGFyZ3VtZW50TmFtZSArIFwiIGhhcyB1bmV4cGVjdGVkIHR5cGUgb2YgXFxcIlwiICsga2luZE9mKGlucHV0U3RhdGUpICsgXCJcXFwiLiBFeHBlY3RlZCBhcmd1bWVudCB0byBiZSBhbiBvYmplY3Qgd2l0aCB0aGUgZm9sbG93aW5nIFwiICsgKFwia2V5czogXFxcIlwiICsgcmVkdWNlcktleXMuam9pbignXCIsIFwiJykgKyBcIlxcXCJcIik7XG4gIH1cblxuICB2YXIgdW5leHBlY3RlZEtleXMgPSBPYmplY3Qua2V5cyhpbnB1dFN0YXRlKS5maWx0ZXIoZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiAhcmVkdWNlcnMuaGFzT3duUHJvcGVydHkoa2V5KSAmJiAhdW5leHBlY3RlZEtleUNhY2hlW2tleV07XG4gIH0pO1xuICB1bmV4cGVjdGVkS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICB1bmV4cGVjdGVkS2V5Q2FjaGVba2V5XSA9IHRydWU7XG4gIH0pO1xuICBpZiAoYWN0aW9uICYmIGFjdGlvbi50eXBlID09PSBBY3Rpb25UeXBlcy5SRVBMQUNFKSByZXR1cm47XG5cbiAgaWYgKHVuZXhwZWN0ZWRLZXlzLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gXCJVbmV4cGVjdGVkIFwiICsgKHVuZXhwZWN0ZWRLZXlzLmxlbmd0aCA+IDEgPyAna2V5cycgOiAna2V5JykgKyBcIiBcIiArIChcIlxcXCJcIiArIHVuZXhwZWN0ZWRLZXlzLmpvaW4oJ1wiLCBcIicpICsgXCJcXFwiIGZvdW5kIGluIFwiICsgYXJndW1lbnROYW1lICsgXCIuIFwiKSArIFwiRXhwZWN0ZWQgdG8gZmluZCBvbmUgb2YgdGhlIGtub3duIHJlZHVjZXIga2V5cyBpbnN0ZWFkOiBcIiArIChcIlxcXCJcIiArIHJlZHVjZXJLZXlzLmpvaW4oJ1wiLCBcIicpICsgXCJcXFwiLiBVbmV4cGVjdGVkIGtleXMgd2lsbCBiZSBpZ25vcmVkLlwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhc3NlcnRSZWR1Y2VyU2hhcGUocmVkdWNlcnMpIHtcbiAgT2JqZWN0LmtleXMocmVkdWNlcnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHZhciByZWR1Y2VyID0gcmVkdWNlcnNba2V5XTtcbiAgICB2YXIgaW5pdGlhbFN0YXRlID0gcmVkdWNlcih1bmRlZmluZWQsIHtcbiAgICAgIHR5cGU6IEFjdGlvblR5cGVzLklOSVRcbiAgICB9KTtcblxuICAgIGlmICh0eXBlb2YgaW5pdGlhbFN0YXRlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoMTIpIDogXCJUaGUgc2xpY2UgcmVkdWNlciBmb3Iga2V5IFxcXCJcIiArIGtleSArIFwiXFxcIiByZXR1cm5lZCB1bmRlZmluZWQgZHVyaW5nIGluaXRpYWxpemF0aW9uLiBcIiArIFwiSWYgdGhlIHN0YXRlIHBhc3NlZCB0byB0aGUgcmVkdWNlciBpcyB1bmRlZmluZWQsIHlvdSBtdXN0IFwiICsgXCJleHBsaWNpdGx5IHJldHVybiB0aGUgaW5pdGlhbCBzdGF0ZS4gVGhlIGluaXRpYWwgc3RhdGUgbWF5IFwiICsgXCJub3QgYmUgdW5kZWZpbmVkLiBJZiB5b3UgZG9uJ3Qgd2FudCB0byBzZXQgYSB2YWx1ZSBmb3IgdGhpcyByZWR1Y2VyLCBcIiArIFwieW91IGNhbiB1c2UgbnVsbCBpbnN0ZWFkIG9mIHVuZGVmaW5lZC5cIik7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiByZWR1Y2VyKHVuZGVmaW5lZCwge1xuICAgICAgdHlwZTogQWN0aW9uVHlwZXMuUFJPQkVfVU5LTk9XTl9BQ1RJT04oKVxuICAgIH0pID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoMTMpIDogXCJUaGUgc2xpY2UgcmVkdWNlciBmb3Iga2V5IFxcXCJcIiArIGtleSArIFwiXFxcIiByZXR1cm5lZCB1bmRlZmluZWQgd2hlbiBwcm9iZWQgd2l0aCBhIHJhbmRvbSB0eXBlLiBcIiArIChcIkRvbid0IHRyeSB0byBoYW5kbGUgJ1wiICsgQWN0aW9uVHlwZXMuSU5JVCArIFwiJyBvciBvdGhlciBhY3Rpb25zIGluIFxcXCJyZWR1eC8qXFxcIiBcIikgKyBcIm5hbWVzcGFjZS4gVGhleSBhcmUgY29uc2lkZXJlZCBwcml2YXRlLiBJbnN0ZWFkLCB5b3UgbXVzdCByZXR1cm4gdGhlIFwiICsgXCJjdXJyZW50IHN0YXRlIGZvciBhbnkgdW5rbm93biBhY3Rpb25zLCB1bmxlc3MgaXQgaXMgdW5kZWZpbmVkLCBcIiArIFwiaW4gd2hpY2ggY2FzZSB5b3UgbXVzdCByZXR1cm4gdGhlIGluaXRpYWwgc3RhdGUsIHJlZ2FyZGxlc3Mgb2YgdGhlIFwiICsgXCJhY3Rpb24gdHlwZS4gVGhlIGluaXRpYWwgc3RhdGUgbWF5IG5vdCBiZSB1bmRlZmluZWQsIGJ1dCBjYW4gYmUgbnVsbC5cIik7XG4gICAgfVxuICB9KTtcbn1cbi8qKlxuICogVHVybnMgYW4gb2JqZWN0IHdob3NlIHZhbHVlcyBhcmUgZGlmZmVyZW50IHJlZHVjZXIgZnVuY3Rpb25zLCBpbnRvIGEgc2luZ2xlXG4gKiByZWR1Y2VyIGZ1bmN0aW9uLiBJdCB3aWxsIGNhbGwgZXZlcnkgY2hpbGQgcmVkdWNlciwgYW5kIGdhdGhlciB0aGVpciByZXN1bHRzXG4gKiBpbnRvIGEgc2luZ2xlIHN0YXRlIG9iamVjdCwgd2hvc2Uga2V5cyBjb3JyZXNwb25kIHRvIHRoZSBrZXlzIG9mIHRoZSBwYXNzZWRcbiAqIHJlZHVjZXIgZnVuY3Rpb25zLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSByZWR1Y2VycyBBbiBvYmplY3Qgd2hvc2UgdmFsdWVzIGNvcnJlc3BvbmQgdG8gZGlmZmVyZW50XG4gKiByZWR1Y2VyIGZ1bmN0aW9ucyB0aGF0IG5lZWQgdG8gYmUgY29tYmluZWQgaW50byBvbmUuIE9uZSBoYW5keSB3YXkgdG8gb2J0YWluXG4gKiBpdCBpcyB0byB1c2UgRVM2IGBpbXBvcnQgKiBhcyByZWR1Y2Vyc2Agc3ludGF4LiBUaGUgcmVkdWNlcnMgbWF5IG5ldmVyIHJldHVyblxuICogdW5kZWZpbmVkIGZvciBhbnkgYWN0aW9uLiBJbnN0ZWFkLCB0aGV5IHNob3VsZCByZXR1cm4gdGhlaXIgaW5pdGlhbCBzdGF0ZVxuICogaWYgdGhlIHN0YXRlIHBhc3NlZCB0byB0aGVtIHdhcyB1bmRlZmluZWQsIGFuZCB0aGUgY3VycmVudCBzdGF0ZSBmb3IgYW55XG4gKiB1bnJlY29nbml6ZWQgYWN0aW9uLlxuICpcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gQSByZWR1Y2VyIGZ1bmN0aW9uIHRoYXQgaW52b2tlcyBldmVyeSByZWR1Y2VyIGluc2lkZSB0aGVcbiAqIHBhc3NlZCBvYmplY3QsIGFuZCBidWlsZHMgYSBzdGF0ZSBvYmplY3Qgd2l0aCB0aGUgc2FtZSBzaGFwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIGNvbWJpbmVSZWR1Y2VycyhyZWR1Y2Vycykge1xuICB2YXIgcmVkdWNlcktleXMgPSBPYmplY3Qua2V5cyhyZWR1Y2Vycyk7XG4gIHZhciBmaW5hbFJlZHVjZXJzID0ge307XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCByZWR1Y2VyS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBrZXkgPSByZWR1Y2VyS2V5c1tpXTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHJlZHVjZXJzW2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHdhcm5pbmcoXCJObyByZWR1Y2VyIHByb3ZpZGVkIGZvciBrZXkgXFxcIlwiICsga2V5ICsgXCJcXFwiXCIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgcmVkdWNlcnNba2V5XSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZmluYWxSZWR1Y2Vyc1trZXldID0gcmVkdWNlcnNba2V5XTtcbiAgICB9XG4gIH1cblxuICB2YXIgZmluYWxSZWR1Y2VyS2V5cyA9IE9iamVjdC5rZXlzKGZpbmFsUmVkdWNlcnMpOyAvLyBUaGlzIGlzIHVzZWQgdG8gbWFrZSBzdXJlIHdlIGRvbid0IHdhcm4gYWJvdXQgdGhlIHNhbWVcbiAgLy8ga2V5cyBtdWx0aXBsZSB0aW1lcy5cblxuICB2YXIgdW5leHBlY3RlZEtleUNhY2hlO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgdW5leHBlY3RlZEtleUNhY2hlID0ge307XG4gIH1cblxuICB2YXIgc2hhcGVBc3NlcnRpb25FcnJvcjtcblxuICB0cnkge1xuICAgIGFzc2VydFJlZHVjZXJTaGFwZShmaW5hbFJlZHVjZXJzKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHNoYXBlQXNzZXJ0aW9uRXJyb3IgPSBlO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIGNvbWJpbmF0aW9uKHN0YXRlLCBhY3Rpb24pIHtcbiAgICBpZiAoc3RhdGUgPT09IHZvaWQgMCkge1xuICAgICAgc3RhdGUgPSB7fTtcbiAgICB9XG5cbiAgICBpZiAoc2hhcGVBc3NlcnRpb25FcnJvcikge1xuICAgICAgdGhyb3cgc2hhcGVBc3NlcnRpb25FcnJvcjtcbiAgICB9XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdmFyIHdhcm5pbmdNZXNzYWdlID0gZ2V0VW5leHBlY3RlZFN0YXRlU2hhcGVXYXJuaW5nTWVzc2FnZShzdGF0ZSwgZmluYWxSZWR1Y2VycywgYWN0aW9uLCB1bmV4cGVjdGVkS2V5Q2FjaGUpO1xuXG4gICAgICBpZiAod2FybmluZ01lc3NhZ2UpIHtcbiAgICAgICAgd2FybmluZyh3YXJuaW5nTWVzc2FnZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGhhc0NoYW5nZWQgPSBmYWxzZTtcbiAgICB2YXIgbmV4dFN0YXRlID0ge307XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgZmluYWxSZWR1Y2VyS2V5cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfa2V5ID0gZmluYWxSZWR1Y2VyS2V5c1tfaV07XG4gICAgICB2YXIgcmVkdWNlciA9IGZpbmFsUmVkdWNlcnNbX2tleV07XG4gICAgICB2YXIgcHJldmlvdXNTdGF0ZUZvcktleSA9IHN0YXRlW19rZXldO1xuICAgICAgdmFyIG5leHRTdGF0ZUZvcktleSA9IHJlZHVjZXIocHJldmlvdXNTdGF0ZUZvcktleSwgYWN0aW9uKTtcblxuICAgICAgaWYgKHR5cGVvZiBuZXh0U3RhdGVGb3JLZXkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHZhciBhY3Rpb25UeXBlID0gYWN0aW9uICYmIGFjdGlvbi50eXBlO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gZm9ybWF0UHJvZEVycm9yTWVzc2FnZSgxNCkgOiBcIldoZW4gY2FsbGVkIHdpdGggYW4gYWN0aW9uIG9mIHR5cGUgXCIgKyAoYWN0aW9uVHlwZSA/IFwiXFxcIlwiICsgU3RyaW5nKGFjdGlvblR5cGUpICsgXCJcXFwiXCIgOiAnKHVua25vd24gdHlwZSknKSArIFwiLCB0aGUgc2xpY2UgcmVkdWNlciBmb3Iga2V5IFxcXCJcIiArIF9rZXkgKyBcIlxcXCIgcmV0dXJuZWQgdW5kZWZpbmVkLiBcIiArIFwiVG8gaWdub3JlIGFuIGFjdGlvbiwgeW91IG11c3QgZXhwbGljaXRseSByZXR1cm4gdGhlIHByZXZpb3VzIHN0YXRlLiBcIiArIFwiSWYgeW91IHdhbnQgdGhpcyByZWR1Y2VyIHRvIGhvbGQgbm8gdmFsdWUsIHlvdSBjYW4gcmV0dXJuIG51bGwgaW5zdGVhZCBvZiB1bmRlZmluZWQuXCIpO1xuICAgICAgfVxuXG4gICAgICBuZXh0U3RhdGVbX2tleV0gPSBuZXh0U3RhdGVGb3JLZXk7XG4gICAgICBoYXNDaGFuZ2VkID0gaGFzQ2hhbmdlZCB8fCBuZXh0U3RhdGVGb3JLZXkgIT09IHByZXZpb3VzU3RhdGVGb3JLZXk7XG4gICAgfVxuXG4gICAgaGFzQ2hhbmdlZCA9IGhhc0NoYW5nZWQgfHwgZmluYWxSZWR1Y2VyS2V5cy5sZW5ndGggIT09IE9iamVjdC5rZXlzKHN0YXRlKS5sZW5ndGg7XG4gICAgcmV0dXJuIGhhc0NoYW5nZWQgPyBuZXh0U3RhdGUgOiBzdGF0ZTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gYmluZEFjdGlvbkNyZWF0b3IoYWN0aW9uQ3JlYXRvciwgZGlzcGF0Y2gpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZGlzcGF0Y2goYWN0aW9uQ3JlYXRvci5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfTtcbn1cbi8qKlxuICogVHVybnMgYW4gb2JqZWN0IHdob3NlIHZhbHVlcyBhcmUgYWN0aW9uIGNyZWF0b3JzLCBpbnRvIGFuIG9iamVjdCB3aXRoIHRoZVxuICogc2FtZSBrZXlzLCBidXQgd2l0aCBldmVyeSBmdW5jdGlvbiB3cmFwcGVkIGludG8gYSBgZGlzcGF0Y2hgIGNhbGwgc28gdGhleVxuICogbWF5IGJlIGludm9rZWQgZGlyZWN0bHkuIFRoaXMgaXMganVzdCBhIGNvbnZlbmllbmNlIG1ldGhvZCwgYXMgeW91IGNhbiBjYWxsXG4gKiBgc3RvcmUuZGlzcGF0Y2goTXlBY3Rpb25DcmVhdG9ycy5kb1NvbWV0aGluZygpKWAgeW91cnNlbGYganVzdCBmaW5lLlxuICpcbiAqIEZvciBjb252ZW5pZW5jZSwgeW91IGNhbiBhbHNvIHBhc3MgYW4gYWN0aW9uIGNyZWF0b3IgYXMgdGhlIGZpcnN0IGFyZ3VtZW50LFxuICogYW5kIGdldCBhIGRpc3BhdGNoIHdyYXBwZWQgZnVuY3Rpb24gaW4gcmV0dXJuLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb258T2JqZWN0fSBhY3Rpb25DcmVhdG9ycyBBbiBvYmplY3Qgd2hvc2UgdmFsdWVzIGFyZSBhY3Rpb25cbiAqIGNyZWF0b3IgZnVuY3Rpb25zLiBPbmUgaGFuZHkgd2F5IHRvIG9idGFpbiBpdCBpcyB0byB1c2UgRVM2IGBpbXBvcnQgKiBhc2BcbiAqIHN5bnRheC4gWW91IG1heSBhbHNvIHBhc3MgYSBzaW5nbGUgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZGlzcGF0Y2ggVGhlIGBkaXNwYXRjaGAgZnVuY3Rpb24gYXZhaWxhYmxlIG9uIHlvdXIgUmVkdXhcbiAqIHN0b3JlLlxuICpcbiAqIEByZXR1cm5zIHtGdW5jdGlvbnxPYmplY3R9IFRoZSBvYmplY3QgbWltaWNraW5nIHRoZSBvcmlnaW5hbCBvYmplY3QsIGJ1dCB3aXRoXG4gKiBldmVyeSBhY3Rpb24gY3JlYXRvciB3cmFwcGVkIGludG8gdGhlIGBkaXNwYXRjaGAgY2FsbC4gSWYgeW91IHBhc3NlZCBhXG4gKiBmdW5jdGlvbiBhcyBgYWN0aW9uQ3JlYXRvcnNgLCB0aGUgcmV0dXJuIHZhbHVlIHdpbGwgYWxzbyBiZSBhIHNpbmdsZVxuICogZnVuY3Rpb24uXG4gKi9cblxuXG5mdW5jdGlvbiBiaW5kQWN0aW9uQ3JlYXRvcnMoYWN0aW9uQ3JlYXRvcnMsIGRpc3BhdGNoKSB7XG4gIGlmICh0eXBlb2YgYWN0aW9uQ3JlYXRvcnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gYmluZEFjdGlvbkNyZWF0b3IoYWN0aW9uQ3JlYXRvcnMsIGRpc3BhdGNoKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYWN0aW9uQ3JlYXRvcnMgIT09ICdvYmplY3QnIHx8IGFjdGlvbkNyZWF0b3JzID09PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoMTYpIDogXCJiaW5kQWN0aW9uQ3JlYXRvcnMgZXhwZWN0ZWQgYW4gb2JqZWN0IG9yIGEgZnVuY3Rpb24sIGJ1dCBpbnN0ZWFkIHJlY2VpdmVkOiAnXCIgKyBraW5kT2YoYWN0aW9uQ3JlYXRvcnMpICsgXCInLiBcIiArIFwiRGlkIHlvdSB3cml0ZSBcXFwiaW1wb3J0IEFjdGlvbkNyZWF0b3JzIGZyb21cXFwiIGluc3RlYWQgb2YgXFxcImltcG9ydCAqIGFzIEFjdGlvbkNyZWF0b3JzIGZyb21cXFwiP1wiKTtcbiAgfVxuXG4gIHZhciBib3VuZEFjdGlvbkNyZWF0b3JzID0ge307XG5cbiAgZm9yICh2YXIga2V5IGluIGFjdGlvbkNyZWF0b3JzKSB7XG4gICAgdmFyIGFjdGlvbkNyZWF0b3IgPSBhY3Rpb25DcmVhdG9yc1trZXldO1xuXG4gICAgaWYgKHR5cGVvZiBhY3Rpb25DcmVhdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBib3VuZEFjdGlvbkNyZWF0b3JzW2tleV0gPSBiaW5kQWN0aW9uQ3JlYXRvcihhY3Rpb25DcmVhdG9yLCBkaXNwYXRjaCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJvdW5kQWN0aW9uQ3JlYXRvcnM7XG59XG5cbi8qKlxuICogQ29tcG9zZXMgc2luZ2xlLWFyZ3VtZW50IGZ1bmN0aW9ucyBmcm9tIHJpZ2h0IHRvIGxlZnQuIFRoZSByaWdodG1vc3RcbiAqIGZ1bmN0aW9uIGNhbiB0YWtlIG11bHRpcGxlIGFyZ3VtZW50cyBhcyBpdCBwcm92aWRlcyB0aGUgc2lnbmF0dXJlIGZvclxuICogdGhlIHJlc3VsdGluZyBjb21wb3NpdGUgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHsuLi5GdW5jdGlvbn0gZnVuY3MgVGhlIGZ1bmN0aW9ucyB0byBjb21wb3NlLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBBIGZ1bmN0aW9uIG9idGFpbmVkIGJ5IGNvbXBvc2luZyB0aGUgYXJndW1lbnQgZnVuY3Rpb25zXG4gKiBmcm9tIHJpZ2h0IHRvIGxlZnQuIEZvciBleGFtcGxlLCBjb21wb3NlKGYsIGcsIGgpIGlzIGlkZW50aWNhbCB0byBkb2luZ1xuICogKC4uLmFyZ3MpID0+IGYoZyhoKC4uLmFyZ3MpKSkuXG4gKi9cbmZ1bmN0aW9uIGNvbXBvc2UoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBmdW5jcyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBmdW5jc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIGlmIChmdW5jcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGFyZykge1xuICAgICAgcmV0dXJuIGFyZztcbiAgICB9O1xuICB9XG5cbiAgaWYgKGZ1bmNzLmxlbmd0aCA9PT0gMSkge1xuICAgIHJldHVybiBmdW5jc1swXTtcbiAgfVxuXG4gIHJldHVybiBmdW5jcy5yZWR1Y2UoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGEoYi5hcHBseSh2b2lkIDAsIGFyZ3VtZW50cykpO1xuICAgIH07XG4gIH0pO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBzdG9yZSBlbmhhbmNlciB0aGF0IGFwcGxpZXMgbWlkZGxld2FyZSB0byB0aGUgZGlzcGF0Y2ggbWV0aG9kXG4gKiBvZiB0aGUgUmVkdXggc3RvcmUuIFRoaXMgaXMgaGFuZHkgZm9yIGEgdmFyaWV0eSBvZiB0YXNrcywgc3VjaCBhcyBleHByZXNzaW5nXG4gKiBhc3luY2hyb25vdXMgYWN0aW9ucyBpbiBhIGNvbmNpc2UgbWFubmVyLCBvciBsb2dnaW5nIGV2ZXJ5IGFjdGlvbiBwYXlsb2FkLlxuICpcbiAqIFNlZSBgcmVkdXgtdGh1bmtgIHBhY2thZ2UgYXMgYW4gZXhhbXBsZSBvZiB0aGUgUmVkdXggbWlkZGxld2FyZS5cbiAqXG4gKiBCZWNhdXNlIG1pZGRsZXdhcmUgaXMgcG90ZW50aWFsbHkgYXN5bmNocm9ub3VzLCB0aGlzIHNob3VsZCBiZSB0aGUgZmlyc3RcbiAqIHN0b3JlIGVuaGFuY2VyIGluIHRoZSBjb21wb3NpdGlvbiBjaGFpbi5cbiAqXG4gKiBOb3RlIHRoYXQgZWFjaCBtaWRkbGV3YXJlIHdpbGwgYmUgZ2l2ZW4gdGhlIGBkaXNwYXRjaGAgYW5kIGBnZXRTdGF0ZWAgZnVuY3Rpb25zXG4gKiBhcyBuYW1lZCBhcmd1bWVudHMuXG4gKlxuICogQHBhcmFtIHsuLi5GdW5jdGlvbn0gbWlkZGxld2FyZXMgVGhlIG1pZGRsZXdhcmUgY2hhaW4gdG8gYmUgYXBwbGllZC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gQSBzdG9yZSBlbmhhbmNlciBhcHBseWluZyB0aGUgbWlkZGxld2FyZS5cbiAqL1xuXG5mdW5jdGlvbiBhcHBseU1pZGRsZXdhcmUoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBtaWRkbGV3YXJlcyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBtaWRkbGV3YXJlc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoY3JlYXRlU3RvcmUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHN0b3JlID0gY3JlYXRlU3RvcmUuYXBwbHkodm9pZCAwLCBhcmd1bWVudHMpO1xuXG4gICAgICB2YXIgX2Rpc3BhdGNoID0gZnVuY3Rpb24gZGlzcGF0Y2goKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDE1KSA6ICdEaXNwYXRjaGluZyB3aGlsZSBjb25zdHJ1Y3RpbmcgeW91ciBtaWRkbGV3YXJlIGlzIG5vdCBhbGxvd2VkLiAnICsgJ090aGVyIG1pZGRsZXdhcmUgd291bGQgbm90IGJlIGFwcGxpZWQgdG8gdGhpcyBkaXNwYXRjaC4nKTtcbiAgICAgIH07XG5cbiAgICAgIHZhciBtaWRkbGV3YXJlQVBJID0ge1xuICAgICAgICBnZXRTdGF0ZTogc3RvcmUuZ2V0U3RhdGUsXG4gICAgICAgIGRpc3BhdGNoOiBmdW5jdGlvbiBkaXNwYXRjaCgpIHtcbiAgICAgICAgICByZXR1cm4gX2Rpc3BhdGNoLmFwcGx5KHZvaWQgMCwgYXJndW1lbnRzKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHZhciBjaGFpbiA9IG1pZGRsZXdhcmVzLm1hcChmdW5jdGlvbiAobWlkZGxld2FyZSkge1xuICAgICAgICByZXR1cm4gbWlkZGxld2FyZShtaWRkbGV3YXJlQVBJKTtcbiAgICAgIH0pO1xuICAgICAgX2Rpc3BhdGNoID0gY29tcG9zZS5hcHBseSh2b2lkIDAsIGNoYWluKShzdG9yZS5kaXNwYXRjaCk7XG4gICAgICByZXR1cm4gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBzdG9yZSksIHt9LCB7XG4gICAgICAgIGRpc3BhdGNoOiBfZGlzcGF0Y2hcbiAgICAgIH0pO1xuICAgIH07XG4gIH07XG59XG5cbi8qXG4gKiBUaGlzIGlzIGEgZHVtbXkgZnVuY3Rpb24gdG8gY2hlY2sgaWYgdGhlIGZ1bmN0aW9uIG5hbWUgaGFzIGJlZW4gYWx0ZXJlZCBieSBtaW5pZmljYXRpb24uXG4gKiBJZiB0aGUgZnVuY3Rpb24gaGFzIGJlZW4gbWluaWZpZWQgYW5kIE5PREVfRU5WICE9PSAncHJvZHVjdGlvbicsIHdhcm4gdGhlIHVzZXIuXG4gKi9cblxuZnVuY3Rpb24gaXNDcnVzaGVkKCkge31cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdHlwZW9mIGlzQ3J1c2hlZC5uYW1lID09PSAnc3RyaW5nJyAmJiBpc0NydXNoZWQubmFtZSAhPT0gJ2lzQ3J1c2hlZCcpIHtcbiAgd2FybmluZygnWW91IGFyZSBjdXJyZW50bHkgdXNpbmcgbWluaWZpZWQgY29kZSBvdXRzaWRlIG9mIE5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIi4gJyArICdUaGlzIG1lYW5zIHRoYXQgeW91IGFyZSBydW5uaW5nIGEgc2xvd2VyIGRldmVsb3BtZW50IGJ1aWxkIG9mIFJlZHV4LiAnICsgJ1lvdSBjYW4gdXNlIGxvb3NlLWVudmlmeSAoaHR0cHM6Ly9naXRodWIuY29tL3plcnRvc2gvbG9vc2UtZW52aWZ5KSBmb3IgYnJvd3NlcmlmeSAnICsgJ29yIHNldHRpbmcgbW9kZSB0byBwcm9kdWN0aW9uIGluIHdlYnBhY2sgKGh0dHBzOi8vd2VicGFjay5qcy5vcmcvY29uY2VwdHMvbW9kZS8pICcgKyAndG8gZW5zdXJlIHlvdSBoYXZlIHRoZSBjb3JyZWN0IGNvZGUgZm9yIHlvdXIgcHJvZHVjdGlvbiBidWlsZC4nKTtcbn1cblxuZXhwb3J0IHsgQWN0aW9uVHlwZXMgYXMgX19ET19OT1RfVVNFX19BY3Rpb25UeXBlcywgYXBwbHlNaWRkbGV3YXJlLCBiaW5kQWN0aW9uQ3JlYXRvcnMsIGNvbWJpbmVSZWR1Y2VycywgY29tcG9zZSwgY3JlYXRlU3RvcmUgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=