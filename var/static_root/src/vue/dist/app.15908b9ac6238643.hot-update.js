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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm-bundler.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../router */ \"./src/router.js\");\n\n\n\nconsole.log(_router__WEBPACK_IMPORTED_MODULE_1__[\"default\"].currentRoute);\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,vuex__WEBPACK_IMPORTED_MODULE_2__.createStore)({\n  state: {\n    posts: [],\n    getDetailPost: []\n  },\n  getters: {\n    allPosts: state => state.posts,\n    getDetailPost: state => state.getDetailPost\n  },\n  actions: {\n    async fetchPosts({\n      commit\n    }) {\n      const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(\"post-api/posts/\");\n      commit('setPosts', res.data);\n    },\n\n    async fetchDetailPost({\n      commit\n    }) {\n      const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`post-api/posts/`);\n      commit(\"setPostDetail\", res.data);\n    }\n\n  },\n  mutations: {\n    setPosts: (state, posts) => state.posts = posts,\n    setPostDetail: (state, detail) => state.getDetailPost = detail\n  }\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvcG9zdHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBOztBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTs7QUFWQTtBQVlBO0FBQ0E7QUFDQTtBQUZBO0FBckJBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvc3RvcmUvcG9zdHMuanM/ODQzMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTdG9yZSB9IGZyb20gJ3Z1ZXgnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHJvdXRlciBmcm9tICcuLi9yb3V0ZXInXHJcblxyXG5jb25zb2xlLmxvZyhyb3V0ZXIuY3VycmVudFJvdXRlKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3RvcmUoe1xyXG4gICAgc3RhdGU6IHtcclxuICAgICAgICBwb3N0czogW10sXHJcbiAgICAgICAgZ2V0RGV0YWlsUG9zdDogW10sXHJcbiAgICB9LFxyXG4gICAgZ2V0dGVyczoge1xyXG4gICAgICAgIGFsbFBvc3RzOiAoc3RhdGUpID0+IHN0YXRlLnBvc3RzLFxyXG4gICAgICAgIGdldERldGFpbFBvc3Q6IChzdGF0ZSkgPT4gc3RhdGUuZ2V0RGV0YWlsUG9zdCxcclxuICAgIH0sXHJcbiAgICBhY3Rpb25zOiB7XHJcbiAgICAgICAgYXN5bmMgZmV0Y2hQb3N0cyh7IGNvbW1pdCB9KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChcInBvc3QtYXBpL3Bvc3RzL1wiKVxyXG5cclxuICAgICAgICAgICAgY29tbWl0KCdzZXRQb3N0cycsIHJlcy5kYXRhKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXN5bmMgZmV0Y2hEZXRhaWxQb3N0KHtjb21taXR9KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgcG9zdC1hcGkvcG9zdHMvYClcclxuXHJcbiAgICAgICAgICAgIGNvbW1pdChcInNldFBvc3REZXRhaWxcIiwgcmVzLmRhdGEpXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG11dGF0aW9uczoge1xyXG4gICAgICAgIHNldFBvc3RzOiAoc3RhdGUsIHBvc3RzKSA9PiAoc3RhdGUucG9zdHMgPSBwb3N0cyksXHJcbiAgICAgICAgc2V0UG9zdERldGFpbDogKHN0YXRlLCBkZXRhaWwpID0+IHN0YXRlLmdldERldGFpbFBvc3QgPSBkZXRhaWxcclxuICAgIH1cclxufSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/store/posts.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "773f9026663a19ee"; }
/******/ }();
/******/ 
/******/ }
);