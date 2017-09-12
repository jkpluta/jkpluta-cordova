/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 23);
/******/ })
/************************************************************************/
/******/ ({

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var jkp = __webpack_require__(3);
function loadUrl(url) {
    if (url == null || url === '' || url === '#')
        return false;
    if (url.substring(0, 1) === '#')
        window.location = "./" + url.substring(1) + ".html";
    else
        window.location = url;
    return true;
}
exports.loadUrl = loadUrl;
function readFromSettings(name) {
    if (typeof (Storage) !== "undefined") {
        return localStorage.getItem(name);
    }
    else {
        if (jkp.sharedObj().settings == null)
            jkp.sharedObj().settings = {};
        return jkp.sharedObj().settings[name];
    }
}
exports.readFromSettings = readFromSettings;
function writeToSettings(name, value) {
    if (typeof (Storage) !== "undefined") {
        localStorage.setItem(name, value);
    }
    else {
        if (jkp.sharedObj().settings == null)
            jkp.sharedObj().settings = {};
        jkp.sharedObj().settings[name] = value;
    }
}
exports.writeToSettings = writeToSettings;
jkp.sharedObj().loadUrl = loadUrl;
jkp.sharedObj().readFromSettings = readFromSettings;
jkp.sharedObj().writeToSettings = writeToSettings;
//# sourceMappingURL=renderer-www.js.map

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
if (window.jkpSharedObj == null)
    window.jkpSharedObj = {};
function version() {
    return "0.1.0.0";
}
exports.version = version;
function sharedObj() {
    return window.jkpSharedObj;
}
exports.sharedObj = sharedObj;
//# sourceMappingURL=jkp-utils.js.map

/***/ })

/******/ });