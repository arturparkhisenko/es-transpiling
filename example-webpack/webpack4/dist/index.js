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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "../../src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../src/empty.js":
/*!*****************************************************************!*\
  !*** /Users/artur/Documents/GitHub/es-transpiling/src/empty.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return empty; });\nfunction empty() {}\n\n//# sourceURL=webpack://index//Users/artur/Documents/GitHub/es-transpiling/src/empty.js?");

/***/ }),

/***/ "../../src/index.js":
/*!*****************************************************************!*\
  !*** /Users/artur/Documents/GitHub/es-transpiling/src/index.js ***!
  \*****************************************************************/
/*! exports provided: empty, generateName, getRandomQuote, zombieFactory, zombie, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./empty */ \"../../src/empty.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"empty\", function() { return _empty__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _unused__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unused */ \"../../src/unused.js\");\n/* harmony import */ var _zombie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./zombie */ \"../../src/zombie.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"zombieFactory\", function() { return _zombie__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, \"zombie\", function() { return _zombie__WEBPACK_IMPORTED_MODULE_2__; });\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getRandomQuote\", function() { return _zombie__WEBPACK_IMPORTED_MODULE_2__[\"getRandomQuote\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"generateName\", function() { return _zombie__WEBPACK_IMPORTED_MODULE_2__[\"generateName\"]; });\n\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  empty: _empty__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  generateName: _zombie__WEBPACK_IMPORTED_MODULE_2__[\"generateName\"],\n  getRandomQuote: _zombie__WEBPACK_IMPORTED_MODULE_2__[\"getRandomQuote\"],\n  zombieFactory: _zombie__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  zombie: _zombie__WEBPACK_IMPORTED_MODULE_2__\n});\n\n//# sourceURL=webpack://index//Users/artur/Documents/GitHub/es-transpiling/src/index.js?");

/***/ }),

/***/ "../../src/unused.js":
/*!******************************************************************!*\
  !*** /Users/artur/Documents/GitHub/es-transpiling/src/unused.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return unused; });\nfunction unused() {\n  return Math.random();\n}\n\n//# sourceURL=webpack://index//Users/artur/Documents/GitHub/es-transpiling/src/unused.js?");

/***/ }),

/***/ "../../src/zombie.js":
/*!******************************************************************!*\
  !*** /Users/artur/Documents/GitHub/es-transpiling/src/zombie.js ***!
  \******************************************************************/
/*! exports provided: getRandomQuote, generateName, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRandomQuote\", function() { return getRandomQuote; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generateName\", function() { return generateName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return zombieFactory; });\nfunction getRandomQuote() {\n  return Math.random() < 0.5 === true ? 'No guts, no gory.' : 'Me eat brains!';\n}\n\n\nfunction generateName() {\n  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Ghoul';\n  return 'z' + name;\n}\nfunction zombieFactory() {\n  return {\n    name: generateName(),\n    damage: 42,\n    say: getRandomQuote\n  };\n}\n\n//# sourceURL=webpack://index//Users/artur/Documents/GitHub/es-transpiling/src/zombie.js?");

/***/ })

/******/ });
});