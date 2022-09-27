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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm-bundler.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,vuex__WEBPACK_IMPORTED_MODULE_1__.createStore)({\n  state: {\n    posts: [],\n    post: []\n  },\n  getters: {\n    allPosts: state => state.posts,\n    postDetail: state => state.post\n  },\n  actions: {\n    async fetchPosts({\n      commit\n    }) {\n      const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(\"post-api/posts/\");\n      commit('SET_POSTS', res.data);\n    },\n\n    async fetchDetail({\n      commit\n    }, postId) {\n      const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`post-api/posts/${postId}`);\n      commit('SET_DETAIL', res.data);\n    }\n\n  },\n  mutations: {\n    SET_POSTS: (state, posts) => state.posts = posts,\n    SET_DETAIL: (state, post) => state.post = post\n  }\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvcG9zdHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTs7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7O0FBVkE7QUFZQTtBQUNBO0FBQ0E7QUFGQTtBQXJCQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3N0b3JlL3Bvc3RzLmpzPzg0MzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tICd2dWV4J1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdG9yZSh7XHJcbiAgICBzdGF0ZToge1xyXG4gICAgICAgIHBvc3RzOiBbXSxcclxuICAgICAgICBwb3N0OiBbXVxyXG4gICAgfSxcclxuICAgIGdldHRlcnM6IHtcclxuICAgICAgICBhbGxQb3N0czogKHN0YXRlKSA9PiBzdGF0ZS5wb3N0cyxcclxuICAgICAgICBwb3N0RGV0YWlsOiAoc3RhdGUpID0+IHN0YXRlLnBvc3RcclxuICAgIH0sXHJcbiAgICBhY3Rpb25zOiB7XHJcbiAgICAgICAgYXN5bmMgZmV0Y2hQb3N0cyh7IGNvbW1pdCB9KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChcInBvc3QtYXBpL3Bvc3RzL1wiKVxyXG5cclxuICAgICAgICAgICAgY29tbWl0KCdTRVRfUE9TVFMnLCByZXMuZGF0YSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFzeW5jIGZldGNoRGV0YWlsKHsgY29tbWl0IH0sIHBvc3RJZCkge1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYHBvc3QtYXBpL3Bvc3RzLyR7cG9zdElkfWApXHJcblxyXG4gICAgICAgICAgICBjb21taXQoJ1NFVF9ERVRBSUwnLCByZXMuZGF0YSlcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbXV0YXRpb25zOiB7XHJcbiAgICAgICAgU0VUX1BPU1RTOiAoc3RhdGUsIHBvc3RzKSA9PiAoc3RhdGUucG9zdHMgPSBwb3N0cyksXHJcbiAgICAgICAgU0VUX0RFVEFJTDogKHN0YXRlLCBwb3N0KSA9PiAoc3RhdGUucG9zdCA9IHBvc3QpXHJcbiAgICB9XHJcbn0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/store/posts.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "77dd005f4993daf5"; }
/******/ }();
/******/ 
/******/ }
);