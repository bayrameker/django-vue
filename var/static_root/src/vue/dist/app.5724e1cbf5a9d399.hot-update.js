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

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./src/App.vue\");\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router */ \"./src/router.js\");\n/* harmony import */ var _store_posts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/posts */ \"./src/store/posts.js\");\n\n\n\n\nconst app = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\napp.use(_router__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\napp.use(_store_posts__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\napp.mount('#app');//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9tYWluLmpzP2ZiZWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQXBwIH0gZnJvbSAndnVlJ1xuaW1wb3J0IEFwcCBmcm9tICcuL0FwcC52dWUnXG5pbXBvcnQgcm91dGVyIGZyb20gJy4vcm91dGVyJ1xuaW1wb3J0IHN0b3JlIGZyb20gJy4vc3RvcmUvcG9zdHMnXG5cbmNvbnN0IGFwcCA9IGNyZWF0ZUFwcChBcHApXG5hcHAudXNlKHJvdXRlcilcbmFwcC51c2Uoc3RvcmUpXG5hcHAubW91bnQoJyNhcHAnKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/main.js\n");

/***/ }),

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
/******/ 	__webpack_require__.h = function() { return "3194aead4bf55314"; }
/******/ }();
/******/ 
/******/ }
);