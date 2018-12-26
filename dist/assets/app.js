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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/* no static exports found */
/* all exports used */
/*!********************************!*\
  !*** ./src/assets/styles.scss ***!
  \********************************/
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: ModuleBuildError: Module build failed: \\n  font-weight: $font-weight-bolder; // Add the correct font weight in Chrome, Edge, and Safari\\n              ^\\n      Undefined variable: \\\"$font-weight-bolder\\\".\\n      in /Users/carlosvazquezm/Documents/Sites/shoperti/shoperti-themes/truereligion/node_modules/bootstrap/scss/_reboot.scss (line 154, column 16)\\n    at runLoaders (/Users/carlosvazquezm/Documents/Sites/shoperti/shoperti-themes/truereligion/node_modules/webpack/lib/NormalModule.js:192:19)\\n    at /Users/carlosvazquezm/Documents/Sites/shoperti/shoperti-themes/truereligion/node_modules/loader-runner/lib/LoaderRunner.js:364:11\\n    at /Users/carlosvazquezm/Documents/Sites/shoperti/shoperti-themes/truereligion/node_modules/loader-runner/lib/LoaderRunner.js:230:18\\n    at context.callback (/Users/carlosvazquezm/Documents/Sites/shoperti/shoperti-themes/truereligion/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\\n    at Object.asyncSassJobQueue.push [as callback] (/Users/carlosvazquezm/Documents/Sites/shoperti/shoperti-themes/truereligion/node_modules/sass-loader/lib/loader.js:55:13)\\n    at Object.done [as callback] (/Users/carlosvazquezm/Documents/Sites/shoperti/shoperti-themes/truereligion/node_modules/neo-async/async.js:8077:18)\\n    at options.error (/Users/carlosvazquezm/Documents/Sites/shoperti/shoperti-themes/truereligion/node_modules/node-sass/lib/index.js:294:32)\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/* no static exports found */
/* all exports used */
/*!********************!*\
  !*** ./src/dev.js ***!
  \********************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// Default Stylesheet using SASS\n\nvar styles = __webpack_require__(/*! ./assets/styles.scss */ 0);\n\n// Uncomment next lines if you want to include those extensions files\n// var lessfile = require('./assets/lessfile.less');\n// var css = require('./assets/style.css');//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvZGV2LmpzPzExOTciXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuLy8gRGVmYXVsdCBTdHlsZXNoZWV0IHVzaW5nIFNBU1NcbnZhciBzdHlsZXMgPSByZXF1aXJlKCcuL2Fzc2V0cy9zdHlsZXMuc2NzcycpO1xuXG4vLyBVbmNvbW1lbnQgbmV4dCBsaW5lcyBpZiB5b3Ugd2FudCB0byBpbmNsdWRlIHRob3NlIGV4dGVuc2lvbnMgZmlsZXNcbi8vIHZhciBsZXNzZmlsZSA9IHJlcXVpcmUoJy4vYXNzZXRzL2xlc3NmaWxlLmxlc3MnKTtcbi8vIHZhciBjc3MgPSByZXF1aXJlKCcuL2Fzc2V0cy9zdHlsZS5jc3MnKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvZGV2LmpzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ })
/******/ ]);