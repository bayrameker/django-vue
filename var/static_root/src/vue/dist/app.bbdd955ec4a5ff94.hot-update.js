"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(typeof self !== 'undefined' ? self : this)["webpackHotUpdatefrontend"]("app",{

/***/ "./src/store/posts.js":
/*!****************************!*\
  !*** ./src/store/posts.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm-bundler.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,vuex__WEBPACK_IMPORTED_MODULE_1__.createStore)({\n  state: {\n    posts: [],\n    getDetailPost: []\n  },\n  getters: {\n    allPosts: state => state.posts,\n    getDetailPost: state => state.getDetailPost\n  },\n  actions: {\n    async fetchPosts({\n      commit\n    }) {\n      const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(\"post-api/posts/\");\n      commit('setPosts', res.data);\n    },\n\n    async fetchDetailPost({\n      commit\n    }) {\n      const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().get('http://127.0.0.1:8000/post-api/posts/');\n    }\n\n  },\n  mutations: {\n    setPosts: (state, posts) => state.posts = posts\n  }\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvcG9zdHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTs7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQVJBO0FBVUE7QUFDQTtBQURBO0FBbkJBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvc3RvcmUvcG9zdHMuanM/ODQzMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTdG9yZSB9IGZyb20gJ3Z1ZXgnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN0b3JlKHtcclxuICAgIHN0YXRlOiB7XHJcbiAgICAgICAgcG9zdHM6IFtdLFxyXG4gICAgICAgIGdldERldGFpbFBvc3Q6IFtdLFxyXG4gICAgfSxcclxuICAgIGdldHRlcnM6IHtcclxuICAgICAgICBhbGxQb3N0czogKHN0YXRlKSA9PiBzdGF0ZS5wb3N0cyxcclxuICAgICAgICBnZXREZXRhaWxQb3N0OiAoc3RhdGUpID0+IHN0YXRlLmdldERldGFpbFBvc3QsXHJcbiAgICB9LFxyXG4gICAgYWN0aW9uczoge1xyXG4gICAgICAgIGFzeW5jIGZldGNoUG9zdHMoeyBjb21taXQgfSkge1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoXCJwb3N0LWFwaS9wb3N0cy9cIilcclxuXHJcbiAgICAgICAgICAgIGNvbW1pdCgnc2V0UG9zdHMnLCByZXMuZGF0YSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFzeW5jIGZldGNoRGV0YWlsUG9zdCh7Y29tbWl0fSkge1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHA6Ly8xMjcuMC4wLjE6ODAwMC9wb3N0LWFwaS9wb3N0cy8nKVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtdXRhdGlvbnM6IHtcclxuICAgICAgICBzZXRQb3N0czogKHN0YXRlLCBwb3N0cykgPT4gKHN0YXRlLnBvc3RzID0gcG9zdHMpXHJcbiAgICB9XHJcbn0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/store/posts.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "cb1012e9f34fc035"; }
/******/ }();
/******/ 
/******/ }
);