(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["index"] = factory();
	else
		root["index"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomQuote", function() { return getRandomQuote; });
/* harmony export (immutable) */ __webpack_exports__["generateName"] = generateName;
/* harmony export (immutable) */ __webpack_exports__["default"] = zombieFactory;
function getRandomQuote() {
  return Math.random() < 0.5 === true ? 'No guts, no gory.' : 'Me eat brains!';
}


function generateName() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'zGhoul';
  return 'z' + name;
}
function zombieFactory() {
  return {
    name: generateName(),
    damage: 42,
    say: getRandomQuote
  };
}

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__empty__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__unused__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__zombie__ = __webpack_require__(0);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return __WEBPACK_IMPORTED_MODULE_0__empty__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "generateName", function() { return __WEBPACK_IMPORTED_MODULE_2__zombie__["generateName"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomQuote", function() { return __WEBPACK_IMPORTED_MODULE_2__zombie__["getRandomQuote"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "zombieFactory", function() { return __WEBPACK_IMPORTED_MODULE_2__zombie__["default"]; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "zombie", function() { return __WEBPACK_IMPORTED_MODULE_2__zombie__; });







/* harmony default export */ __webpack_exports__["default"] = ({
  empty: __WEBPACK_IMPORTED_MODULE_0__empty__["a" /* default */],
  generateName: __WEBPACK_IMPORTED_MODULE_2__zombie__["generateName"],
  getRandomQuote: __WEBPACK_IMPORTED_MODULE_2__zombie__["getRandomQuote"],
  zombieFactory: __WEBPACK_IMPORTED_MODULE_2__zombie__["default"],
  zombie: __WEBPACK_IMPORTED_MODULE_2__zombie__
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = empty;
function empty() {}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
function unused() {
  return Math.random();
}

/***/ })
/******/ ]);
});