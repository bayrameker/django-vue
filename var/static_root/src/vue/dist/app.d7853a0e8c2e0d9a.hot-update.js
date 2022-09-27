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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm-bundler.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,vuex__WEBPACK_IMPORTED_MODULE_1__.createStore)({\n  state: {\n    posts: []\n  },\n  getters: {\n    allPosts: state => state.posts\n  },\n  actions: {\n    async fetchPosts({\n      commit\n    }) {\n      const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(\"http://127.0.0.1:8000/post-api/posts/\");\n      commit('setPosts', res.data);\n    }\n\n  },\n  mutations: {\n    setPosts: (state, posts) => state.posts = posts\n  }\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvcG9zdHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBOztBQUxBO0FBT0E7QUFDQTtBQURBO0FBZEEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9zdG9yZS9wb3N0cy5qcz84NDMyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVN0b3JlIH0gZnJvbSAndnVleCdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3RvcmUoe1xyXG4gICAgc3RhdGU6IHtcclxuICAgICAgICBwb3N0czogW11cclxuICAgIH0sXHJcbiAgICBnZXR0ZXJzOiB7XHJcbiAgICAgICAgYWxsUG9zdHM6IChzdGF0ZSkgPT4gc3RhdGUucG9zdHNcclxuICAgIH0sXHJcbiAgICBhY3Rpb25zOiB7XHJcbiAgICAgICAgYXN5bmMgZmV0Y2hQb3N0cyh7IGNvbW1pdCB9KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChcImh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9wb3N0LWFwaS9wb3N0cy9cIilcclxuXHJcbiAgICAgICAgICAgIGNvbW1pdCgnc2V0UG9zdHMnLCByZXMuZGF0YSlcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbXV0YXRpb25zOiB7XHJcbiAgICAgICAgc2V0UG9zdHM6IChzdGF0ZSwgcG9zdHMpID0+IChzdGF0ZS5wb3N0cyA9IHBvc3RzKVxyXG4gICAgfVxyXG59KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/store/posts.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "6d5e06fffaa5650e"; }
/******/ }();
/******/ 
/******/ }
);