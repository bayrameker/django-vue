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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm-bundler.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'core-js/fn/symbol'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,vuex__WEBPACK_IMPORTED_MODULE_2__.createStore)({\n  state: {\n    posts: [],\n    search: []\n  },\n  getters: {\n    allPosts: state => state.posts,\n\n    search(state) {\n      return key => state.search.filter(item => {\n        return item.name === key;\n      });\n    }\n\n  },\n  actions: {\n    async fetchPosts({\n      commit\n    }) {\n      const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(\"post-api/posts/\");\n      commit('setPosts', res.data);\n    },\n\n    async fetchDetailPost({\n      commit\n    }) {\n      const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`post-api/posts/`);\n      commit(\"setPostDetail\", res.data);\n    }\n\n  },\n  mutations: {\n    setPosts: (state, posts) => state.posts = posts,\n    setPostDetail: (state, detail) => state.getDetailPost = detail\n  }\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvcG9zdHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQU5BO0FBUUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7O0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBOztBQVZBO0FBWUE7QUFDQTtBQUNBO0FBRkE7QUF6QkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9zdG9yZS9wb3N0cy5qcz84NDMyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVN0b3JlIH0gZnJvbSAndnVleCdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgeyBzZWFyY2ggfSBmcm9tICdjb3JlLWpzL2ZuL3N5bWJvbCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN0b3JlKHtcclxuICAgIHN0YXRlOiB7XHJcbiAgICAgICAgcG9zdHM6IFtdLFxyXG4gICAgICAgIHNlYXJjaDogW10sXHJcbiAgICB9LFxyXG4gICAgZ2V0dGVyczoge1xyXG4gICAgICAgIGFsbFBvc3RzOiAoc3RhdGUpID0+IHN0YXRlLnBvc3RzLFxyXG4gICAgICAgIHNlYXJjaChzdGF0ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4ga2V5ID0+IHN0YXRlLnNlYXJjaC5maWx0ZXIoaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5uYW1lID09PSBrZXlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgYWN0aW9uczoge1xyXG4gICAgICAgIGFzeW5jIGZldGNoUG9zdHMoeyBjb21taXQgfSkge1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoXCJwb3N0LWFwaS9wb3N0cy9cIilcclxuXHJcbiAgICAgICAgICAgIGNvbW1pdCgnc2V0UG9zdHMnLCByZXMuZGF0YSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFzeW5jIGZldGNoRGV0YWlsUG9zdCh7Y29tbWl0fSkge1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYHBvc3QtYXBpL3Bvc3RzL2ApXHJcblxyXG4gICAgICAgICAgICBjb21taXQoXCJzZXRQb3N0RGV0YWlsXCIsIHJlcy5kYXRhKVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtdXRhdGlvbnM6IHtcclxuICAgICAgICBzZXRQb3N0czogKHN0YXRlLCBwb3N0cykgPT4gKHN0YXRlLnBvc3RzID0gcG9zdHMpLFxyXG4gICAgICAgIHNldFBvc3REZXRhaWw6IChzdGF0ZSwgZGV0YWlsKSA9PiBzdGF0ZS5nZXREZXRhaWxQb3N0ID0gZGV0YWlsXHJcbiAgICB9XHJcbn0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/store/posts.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "1478c5d3fe0418a1"; }
/******/ }();
/******/ 
/******/ }
);