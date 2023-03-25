/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/source.js":
/*!**************************!*\
  !*** ./src/js/source.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("function createTextElement(text) {\n  const textElement = document.createElement(\"p\");\n  textElement.textContent = text;\n  return textElement;\n}\n\nfunction createPngImgElement() {\n  const pngImage = __webpack_require__(/*! ../assets/images/favicon-js.png */ \"./src/assets/images/favicon-js.png\");\n  const pngImgElement = document.createElement(\"img\");\n  pngImgElement.setAttribute(\"src\", pngImage);\n  pngImgElement.width = 100;\n  pngImgElement.height = 100;\n  return pngImgElement;\n}\n\nfunction createJpegImgElement() {\n  const jpegImage = __webpack_require__(/*! ../assets/images/favicon-js.jpg */ \"./src/assets/images/favicon-js.jpg\");\n  const jpegImgElement = document.createElement(\"img\");\n  jpegImgElement.setAttribute(\"src\", jpegImage);\n  jpegImgElement.width = 100;\n  jpegImgElement.height = 100;\n  return jpegImgElement;\n}\n\ndocument.addEventListener(\"DOMContentLoaded\", function() {\n  const bodyElement = document.body;\n  bodyElement.appendChild(createTextElement(\"JavaScript由来<img>要素・PNG画像\"));\n  bodyElement.appendChild(createPngImgElement());\n  bodyElement.appendChild(createTextElement(\"JavaScript由来<img>要素・JPEG画像\"));\n  bodyElement.appendChild(createJpegImgElement());\n});\n\n\n//# sourceURL=webpack://my-image-project/./src/js/source.js?");

/***/ }),

/***/ "./src/assets/images/favicon-js.jpg":
/*!******************************************!*\
  !*** ./src/assets/images/favicon-js.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/favicon-js.jpg\";\n\n//# sourceURL=webpack://my-image-project/./src/assets/images/favicon-js.jpg?");

/***/ }),

/***/ "./src/assets/images/favicon-js.png":
/*!******************************************!*\
  !*** ./src/assets/images/favicon-js.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/favicon-js.png\";\n\n//# sourceURL=webpack://my-image-project/./src/assets/images/favicon-js.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/source.js");
/******/ 	
/******/ })()
;