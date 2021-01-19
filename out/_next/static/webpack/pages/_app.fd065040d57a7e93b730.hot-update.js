webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/app/containers/global/index.tsx":
/*!*********************************************!*\
  !*** ./src/app/containers/global/index.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GlobalWrapper; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* harmony import */ var data_states_ThemeStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! data/states/ThemeStore */ \"./src/app/data/states/ThemeStore.ts\");\n/* harmony import */ var themes_LightTheme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! themes/LightTheme */ \"./src/app/themes/LightTheme.ts\");\n/* harmony import */ var themes_DarkTheme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! themes/DarkTheme */ \"./src/app/themes/DarkTheme.ts\");\n/* harmony import */ var _layouts_BlurContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layouts/BlurContainer */ \"./src/app/containers/global/layouts/BlurContainer.tsx\");\n\n\n\nvar _jsxFileName = \"/home/nikan/Projects/nikan.dev/nikan.dev/src/app/containers/global/index.tsx\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar useGlobalStyle = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])(function (theme) {\n  return {\n    \"@global\": {\n      html: {\n        backgroundColor: theme.palette.background[\"default\"],\n        background: \"url(/images/background.jpg) no-repeat center center fixed\",\n        backgroundSize: \"cover\"\n      },\n      body: {}\n    }\n  };\n});\n\nfunction GlobalStyles() {\n  _s();\n\n  useGlobalStyle();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {}, void 0, false);\n}\n\n_s(GlobalStyles, \"94mEy9yVgmxpfwjSsA8wLF82fOA=\", false, function () {\n  return [useGlobalStyle];\n});\n\n_c = GlobalStyles;\n\nfunction ThemeWrapper(_ref) {\n  _s2();\n\n  var children = _ref.children;\n  var activeTheme = Object(recoil__WEBPACK_IMPORTED_MODULE_3__[\"useRecoilValue\"])(data_states_ThemeStore__WEBPACK_IMPORTED_MODULE_4__[\"ThemeState\"]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"ThemeProvider\"], {\n    theme: activeTheme === \"light\" ? themes_LightTheme__WEBPACK_IMPORTED_MODULE_5__[\"default\"] : themes_DarkTheme__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"CssBaseline\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(GlobalStyles, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_layouts_BlurContainer__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      children: children\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 33,\n    columnNumber: 5\n  }, this);\n}\n\n_s2(ThemeWrapper, \"qFaqiR6P2of0LCsT1LxOpWWWRcY=\", false, function () {\n  return [recoil__WEBPACK_IMPORTED_MODULE_3__[\"useRecoilValue\"]];\n});\n\n_c2 = ThemeWrapper;\nfunction GlobalWrapper(_ref2) {\n  var children = _ref2.children;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(recoil__WEBPACK_IMPORTED_MODULE_3__[\"RecoilRoot\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ThemeWrapper, {\n      children: children\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 43,\n    columnNumber: 5\n  }, this);\n}\n_c3 = GlobalWrapper;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"GlobalStyles\");\n$RefreshReg$(_c2, \"ThemeWrapper\");\n$RefreshReg$(_c3, \"GlobalWrapper\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb250YWluZXJzL2dsb2JhbC9pbmRleC50c3g/NGYwMSJdLCJuYW1lcyI6WyJ1c2VHbG9iYWxTdHlsZSIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImh0bWwiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWxldHRlIiwiYmFja2dyb3VuZCIsImJhY2tncm91bmRTaXplIiwiYm9keSIsIkdsb2JhbFN0eWxlcyIsIlRoZW1lV3JhcHBlciIsImNoaWxkcmVuIiwiYWN0aXZlVGhlbWUiLCJ1c2VSZWNvaWxWYWx1ZSIsIlRoZW1lU3RhdGUiLCJMaWdodFRoZW1lIiwiRGFya1RoZW1lIiwiR2xvYmFsV3JhcHBlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUEsSUFBTUEsY0FBYyxHQUFHQyxvRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQzVDLGVBQVc7QUFDVEMsVUFBSSxFQUFFO0FBQ0pDLHVCQUFlLEVBQUVGLEtBQUssQ0FBQ0csT0FBTixDQUFjQyxVQUFkLFdBRGI7QUFFSkEsa0JBQVUsRUFBRSwyREFGUjtBQUdKQyxzQkFBYyxFQUFFO0FBSFosT0FERztBQU1UQyxVQUFJLEVBQUU7QUFORztBQURpQyxHQUFaO0FBQUEsQ0FBRCxDQUFqQzs7QUFXQSxTQUFTQyxZQUFULEdBQXdCO0FBQUE7O0FBQ3RCVCxnQkFBYztBQUNkLHNCQUFPLHVKQUFQO0FBQ0Q7O0dBSFFTLFk7VUFDUFQsYzs7O0tBRE9TLFk7O0FBS1QsU0FBU0MsWUFBVCxPQUF5RDtBQUFBOztBQUFBLE1BQWpDQyxRQUFpQyxRQUFqQ0EsUUFBaUM7QUFDdkQsTUFBTUMsV0FBVyxHQUFHQyw2REFBYyxDQUFDQyxpRUFBRCxDQUFsQztBQUVBLHNCQUNFLHFFQUFDLCtEQUFEO0FBQWUsU0FBSyxFQUFFRixXQUFXLEtBQUssT0FBaEIsR0FBMEJHLHlEQUExQixHQUF1Q0Msd0RBQTdEO0FBQUEsNEJBQ0UscUVBQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUUscUVBQUMsWUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUFHRSxxRUFBQyw4REFBRDtBQUFBLGdCQUFnQkw7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBT0Q7O0lBVlFELFk7VUFDYUcscUQ7OztNQURiSCxZO0FBWU0sU0FBU08sYUFBVCxRQUEwRDtBQUFBLE1BQWpDTixRQUFpQyxTQUFqQ0EsUUFBaUM7QUFDdkUsc0JBQ0UscUVBQUMsaURBQUQ7QUFBQSwyQkFDRSxxRUFBQyxZQUFEO0FBQUEsZ0JBQWVBO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUtEO01BTnVCTSxhIiwiZmlsZSI6Ii4vc3JjL2FwcC9jb250YWluZXJzL2dsb2JhbC9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IG1ha2VTdHlsZXMsIFRoZW1lUHJvdmlkZXIsIENzc0Jhc2VsaW5lIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgeyBSZWNvaWxSb290LCB1c2VSZWNvaWxWYWx1ZSB9IGZyb20gXCJyZWNvaWxcIjtcbmltcG9ydCB7IFRoZW1lU3RhdGUgfSBmcm9tIFwiZGF0YS9zdGF0ZXMvVGhlbWVTdG9yZVwiO1xuaW1wb3J0IExpZ2h0VGhlbWUgZnJvbSBcInRoZW1lcy9MaWdodFRoZW1lXCI7XG5pbXBvcnQgRGFya1RoZW1lIGZyb20gXCJ0aGVtZXMvRGFya1RoZW1lXCI7XG5pbXBvcnQgQmx1ckNvbnRhaW5lciBmcm9tIFwiLi9sYXlvdXRzL0JsdXJDb250YWluZXJcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJR2xvYmFsV3JhcHBlclByb3BzIHtcbiAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGU7XG59XG5cbmNvbnN0IHVzZUdsb2JhbFN0eWxlID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XG4gIFwiQGdsb2JhbFwiOiB7XG4gICAgaHRtbDoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQuZGVmYXVsdCxcbiAgICAgIGJhY2tncm91bmQ6IFwidXJsKC9pbWFnZXMvYmFja2dyb3VuZC5qcGcpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkXCIsXG4gICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxuICAgIH0sXG4gICAgYm9keToge30sXG4gIH0sXG59KSk7XG5cbmZ1bmN0aW9uIEdsb2JhbFN0eWxlcygpIHtcbiAgdXNlR2xvYmFsU3R5bGUoKTtcbiAgcmV0dXJuIDw+PC8+O1xufVxuXG5mdW5jdGlvbiBUaGVtZVdyYXBwZXIoeyBjaGlsZHJlbiB9OiBJR2xvYmFsV3JhcHBlclByb3BzKSB7XG4gIGNvbnN0IGFjdGl2ZVRoZW1lID0gdXNlUmVjb2lsVmFsdWUoVGhlbWVTdGF0ZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17YWN0aXZlVGhlbWUgPT09IFwibGlnaHRcIiA/IExpZ2h0VGhlbWUgOiBEYXJrVGhlbWV9PlxuICAgICAgPENzc0Jhc2VsaW5lIC8+XG4gICAgICA8R2xvYmFsU3R5bGVzIC8+XG4gICAgICA8Qmx1ckNvbnRhaW5lcj57Y2hpbGRyZW59PC9CbHVyQ29udGFpbmVyPlxuICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2xvYmFsV3JhcHBlcih7IGNoaWxkcmVuIH06IElHbG9iYWxXcmFwcGVyUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8UmVjb2lsUm9vdD5cbiAgICAgIDxUaGVtZVdyYXBwZXI+e2NoaWxkcmVufTwvVGhlbWVXcmFwcGVyPlxuICAgIDwvUmVjb2lsUm9vdD5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/app/containers/global/index.tsx\n");

/***/ })

})