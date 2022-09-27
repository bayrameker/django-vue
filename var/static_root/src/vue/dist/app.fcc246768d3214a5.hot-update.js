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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm-bundler.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../router */ \"./src/router.js\");\n\n\n\nconsole.log();\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,vuex__WEBPACK_IMPORTED_MODULE_2__.createStore)({\n  state: {\n    posts: [],\n    getDetailPost: []\n  },\n  getters: {\n    allPosts: state => state.posts,\n    getDetailPost: state => state.getDetailPost\n  },\n  actions: {\n    async fetchPosts({\n      commit\n    }) {\n      const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(\"post-api/posts/\");\n      commit('setPosts', res.data);\n    },\n\n    async fetchDetailPost({\n      commit\n    }) {\n      const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`post-api/posts/${_router__WEBPACK_IMPORTED_MODULE_1__[\"default\"].currentRoute.value.params}/`);\n      commit(\"setPostDetail\", res.data);\n    }\n\n  },\n  mutations: {\n    setPosts: (state, posts) => state.posts = posts,\n    setPostDetail: (state, detail) => state.getDetailPost = detail\n  }\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvcG9zdHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBOztBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTs7QUFWQTtBQVlBO0FBQ0E7QUFDQTtBQUZBO0FBckJBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvc3RvcmUvcG9zdHMuanM/ODQzMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTdG9yZSB9IGZyb20gJ3Z1ZXgnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHJvdXRlciBmcm9tICcuLi9yb3V0ZXInXHJcblxyXG5jb25zb2xlLmxvZygpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdG9yZSh7XHJcbiAgICBzdGF0ZToge1xyXG4gICAgICAgIHBvc3RzOiBbXSxcclxuICAgICAgICBnZXREZXRhaWxQb3N0OiBbXSxcclxuICAgIH0sXHJcbiAgICBnZXR0ZXJzOiB7XHJcbiAgICAgICAgYWxsUG9zdHM6IChzdGF0ZSkgPT4gc3RhdGUucG9zdHMsXHJcbiAgICAgICAgZ2V0RGV0YWlsUG9zdDogKHN0YXRlKSA9PiBzdGF0ZS5nZXREZXRhaWxQb3N0LFxyXG4gICAgfSxcclxuICAgIGFjdGlvbnM6IHtcclxuICAgICAgICBhc3luYyBmZXRjaFBvc3RzKHsgY29tbWl0IH0pIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KFwicG9zdC1hcGkvcG9zdHMvXCIpXHJcblxyXG4gICAgICAgICAgICBjb21taXQoJ3NldFBvc3RzJywgcmVzLmRhdGEpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhc3luYyBmZXRjaERldGFpbFBvc3Qoe2NvbW1pdH0pIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGBwb3N0LWFwaS9wb3N0cy8ke3JvdXRlci5jdXJyZW50Um91dGUudmFsdWUucGFyYW1zfS9gKVxyXG5cclxuICAgICAgICAgICAgY29tbWl0KFwic2V0UG9zdERldGFpbFwiLCByZXMuZGF0YSlcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbXV0YXRpb25zOiB7XHJcbiAgICAgICAgc2V0UG9zdHM6IChzdGF0ZSwgcG9zdHMpID0+IChzdGF0ZS5wb3N0cyA9IHBvc3RzKSxcclxuICAgICAgICBzZXRQb3N0RGV0YWlsOiAoc3RhdGUsIGRldGFpbCkgPT4gc3RhdGUuZ2V0RGV0YWlsUG9zdCA9IGRldGFpbFxyXG4gICAgfVxyXG59KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/store/posts.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "ed04c0f10aefa3a2"; }
/******/ }();
/******/ 
/******/ }
);