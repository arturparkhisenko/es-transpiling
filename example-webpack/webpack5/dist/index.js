/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["index"] = factory();
	else
		root["index"] = factory();
})(typeof self !== "undefined" ? self : this, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../src/empty.js":
/*!**************************!*\
  !*** ../../src/empty.js ***!
  \**************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ empty\n/* harmony export */ });\nfunction empty() {}\n\n//# sourceURL=webpack://index/../../src/empty.js?");

/***/ }),

/***/ "../../src/index.js":
/*!**************************!*\
  !*** ../../src/index.js ***!
  \**************************/
/*! namespace exports */
/*! export default [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export empty [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] -> ../../src/empty.js .default */
/*! export generateName [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] -> ../../src/zombie.js .generateName */
/*! export getRandomQuote [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] -> ../../src/zombie.js .getRandomQuote */
/*! export zombie [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] -> ../../src/zombie.js */
/*!   export default [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export generateName [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export getRandomQuote [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export zombieFactory [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] -> ../../src/zombie.js .default */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"empty\": () => /* reexport safe */ _empty__WEBPACK_IMPORTED_MODULE_0__.default,\n/* harmony export */   \"generateName\": () => /* reexport safe */ _zombie__WEBPACK_IMPORTED_MODULE_2__.generateName,\n/* harmony export */   \"getRandomQuote\": () => /* reexport safe */ _zombie__WEBPACK_IMPORTED_MODULE_2__.getRandomQuote,\n/* harmony export */   \"zombieFactory\": () => /* reexport safe */ _zombie__WEBPACK_IMPORTED_MODULE_2__.default,\n/* harmony export */   \"zombie\": () => /* reexport module object */ _zombie__WEBPACK_IMPORTED_MODULE_2__,\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./empty */ \"../../src/empty.js\");\n/* harmony import */ var _unused__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unused */ \"../../src/unused.js\");\n/* harmony import */ var _zombie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./zombie */ \"../../src/zombie.js\");\n\n\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  empty: _empty__WEBPACK_IMPORTED_MODULE_0__.default,\n  generateName: _zombie__WEBPACK_IMPORTED_MODULE_2__.generateName,\n  getRandomQuote: _zombie__WEBPACK_IMPORTED_MODULE_2__.getRandomQuote,\n  zombieFactory: _zombie__WEBPACK_IMPORTED_MODULE_2__.default,\n  zombie: _zombie__WEBPACK_IMPORTED_MODULE_2__\n});\n\n//# sourceURL=webpack://index/../../src/index.js?");

/***/ }),

/***/ "../../src/unused.js":
/*!***************************!*\
  !*** ../../src/unused.js ***!
  \***************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ unused\n/* harmony export */ });\nfunction unused() {\n  return Math.random();\n}\n\n//# sourceURL=webpack://index/../../src/unused.js?");

/***/ }),

/***/ "../../src/zombie.js":
/*!***************************!*\
  !*** ../../src/zombie.js ***!
  \***************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! export generateName [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getRandomQuote [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getRandomQuote\": () => /* binding */ getRandomQuote,\n/* harmony export */   \"generateName\": () => /* binding */ generateName,\n/* harmony export */   \"default\": () => /* binding */ zombieFactory\n/* harmony export */ });\nfunction getRandomQuote() {\n  return Math.random() < 0.5 === true ? 'No guts, no gory.' : 'Me eat brains!';\n}\n\n\nfunction generateName() {\n  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Ghoul';\n  return 'z' + name;\n}\nfunction zombieFactory() {\n  return {\n    name: generateName(),\n    damage: 42,\n    say: getRandomQuote\n  };\n}\n\n//# sourceURL=webpack://index/../../src/zombie.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("../../src/index.js");
/******/ })()
;
});