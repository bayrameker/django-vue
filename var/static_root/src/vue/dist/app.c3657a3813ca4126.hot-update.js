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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm-bundler.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../router */ \"./src/router.js\");\n\n\n\nconsole.log(_router__WEBPACK_IMPORTED_MODULE_1__[\"default\"].currentRoute._value);\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,vuex__WEBPACK_IMPORTED_MODULE_2__.createStore)({\n  state: {\n    posts: [],\n    getDetailPost: []\n  },\n  getters: {\n    allPosts: state => state.posts,\n    getDetailPost: state => state.getDetailPost\n  },\n  actions: {\n    async fetchPosts({\n      commit\n    }) {\n      const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(\"post-api/posts/\");\n      commit('setPosts', res.data);\n    },\n\n    async fetchDetailPost({\n      commit\n    }) {\n      const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`post-api/posts/`);\n      commit(\"setPostDetail\", res.data);\n    }\n\n  },\n  mutations: {\n    setPosts: (state, posts) => state.posts = posts,\n    setPostDetail: (state, detail) => state.getDetailPost = detail\n  }\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvcG9zdHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBOztBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTs7QUFWQTtBQVlBO0FBQ0E7QUFDQTtBQUZBO0FBckJBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvc3RvcmUvcG9zdHMuanM/ODQzMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTdG9yZSB9IGZyb20gJ3Z1ZXgnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHJvdXRlciBmcm9tICcuLi9yb3V0ZXInXHJcblxyXG5jb25zb2xlLmxvZyhyb3V0ZXIuY3VycmVudFJvdXRlLl92YWx1ZSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN0b3JlKHtcclxuICAgIHN0YXRlOiB7XHJcbiAgICAgICAgcG9zdHM6IFtdLFxyXG4gICAgICAgIGdldERldGFpbFBvc3Q6IFtdLFxyXG4gICAgfSxcclxuICAgIGdldHRlcnM6IHtcclxuICAgICAgICBhbGxQb3N0czogKHN0YXRlKSA9PiBzdGF0ZS5wb3N0cyxcclxuICAgICAgICBnZXREZXRhaWxQb3N0OiAoc3RhdGUpID0+IHN0YXRlLmdldERldGFpbFBvc3QsXHJcbiAgICB9LFxyXG4gICAgYWN0aW9uczoge1xyXG4gICAgICAgIGFzeW5jIGZldGNoUG9zdHMoeyBjb21taXQgfSkge1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoXCJwb3N0LWFwaS9wb3N0cy9cIilcclxuXHJcbiAgICAgICAgICAgIGNvbW1pdCgnc2V0UG9zdHMnLCByZXMuZGF0YSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFzeW5jIGZldGNoRGV0YWlsUG9zdCh7Y29tbWl0fSkge1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYHBvc3QtYXBpL3Bvc3RzL2ApXHJcblxyXG4gICAgICAgICAgICBjb21taXQoXCJzZXRQb3N0RGV0YWlsXCIsIHJlcy5kYXRhKVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtdXRhdGlvbnM6IHtcclxuICAgICAgICBzZXRQb3N0czogKHN0YXRlLCBwb3N0cykgPT4gKHN0YXRlLnBvc3RzID0gcG9zdHMpLFxyXG4gICAgICAgIHNldFBvc3REZXRhaWw6IChzdGF0ZSwgZGV0YWlsKSA9PiBzdGF0ZS5nZXREZXRhaWxQb3N0ID0gZGV0YWlsXHJcbiAgICB9XHJcbn0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/store/posts.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "0d1793f42a2dd2c7"; }
/******/ }();
/******/ 
/******/ }
);