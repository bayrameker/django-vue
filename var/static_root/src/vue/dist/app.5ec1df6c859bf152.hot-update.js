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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm-bundler.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,vuex__WEBPACK_IMPORTED_MODULE_1__.createStore)({\n  state: {\n    posts: [],\n    search: []\n  },\n  getters: {\n    allPosts: state => state.posts,\n\n    search(state) {\n      return key => state.search.filter(item => {\n        return item.name === key;\n      });\n      console.log(item);\n    }\n\n  },\n  actions: {\n    async fetchPosts({\n      commit\n    }) {\n      const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(\"post-api/posts/\");\n      commit('setPosts', res.data);\n    },\n\n    async fetchDetailPost({\n      commit\n    }) {\n      const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`post-api/posts/`);\n      commit(\"setPostDetail\", res.data);\n    }\n\n  },\n  mutations: {\n    setPosts: (state, posts) => state.posts = posts,\n    setPostDetail: (state, detail) => state.getDetailPost = detail\n  }\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvcG9zdHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBUEE7QUFTQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTs7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7O0FBVkE7QUFZQTtBQUNBO0FBQ0E7QUFGQTtBQTFCQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3N0b3JlL3Bvc3RzLmpzPzg0MzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tICd2dWV4J1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdG9yZSh7XHJcbiAgICBzdGF0ZToge1xyXG4gICAgICAgIHBvc3RzOiBbXSxcclxuICAgICAgICBzZWFyY2g6IFtdLFxyXG4gICAgfSxcclxuICAgIGdldHRlcnM6IHtcclxuICAgICAgICBhbGxQb3N0czogKHN0YXRlKSA9PiBzdGF0ZS5wb3N0cyxcclxuICAgICAgICBzZWFyY2goc3RhdGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGtleSA9PiBzdGF0ZS5zZWFyY2guZmlsdGVyKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0ubmFtZSA9PT0ga2V5XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGl0ZW0pXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGFjdGlvbnM6IHtcclxuICAgICAgICBhc3luYyBmZXRjaFBvc3RzKHsgY29tbWl0IH0pIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KFwicG9zdC1hcGkvcG9zdHMvXCIpXHJcblxyXG4gICAgICAgICAgICBjb21taXQoJ3NldFBvc3RzJywgcmVzLmRhdGEpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhc3luYyBmZXRjaERldGFpbFBvc3Qoe2NvbW1pdH0pIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGBwb3N0LWFwaS9wb3N0cy9gKVxyXG5cclxuICAgICAgICAgICAgY29tbWl0KFwic2V0UG9zdERldGFpbFwiLCByZXMuZGF0YSlcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbXV0YXRpb25zOiB7XHJcbiAgICAgICAgc2V0UG9zdHM6IChzdGF0ZSwgcG9zdHMpID0+IChzdGF0ZS5wb3N0cyA9IHBvc3RzKSxcclxuICAgICAgICBzZXRQb3N0RGV0YWlsOiAoc3RhdGUsIGRldGFpbCkgPT4gc3RhdGUuZ2V0RGV0YWlsUG9zdCA9IGRldGFpbFxyXG4gICAgfVxyXG59KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/store/posts.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "e8227197248dc053"; }
/******/ }();
/******/ 
/******/ }
);