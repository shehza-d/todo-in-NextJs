"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/todo/list";
exports.ids = ["pages/api/todo/list"];
exports.modules = {

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("uuid");

/***/ }),

/***/ "(api)/./pages/api/todo/list.js":
/*!********************************!*\
  !*** ./pages/api/todo/list.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTodo\": () => (/* binding */ addTodo),\n/* harmony export */   \"default\": () => (/* binding */ handler),\n/* harmony export */   \"deleteTodo\": () => (/* binding */ deleteTodo),\n/* harmony export */   \"updateTodo\": () => (/* binding */ updateTodo)\n/* harmony export */ });\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ \"uuid\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);\n\nlet todos = [\n    {\n        id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__.v4)(),\n        name: \"Learn Next.js\",\n        isDone: false\n    },\n    {\n        id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__.v4)(),\n        name: \"Learn HTML\",\n        isDone: false\n    },\n    {\n        id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__.v4)(),\n        name: \"Start new sideproject\",\n        isDone: false\n    }\n];\nconst addTodo = (name)=>{\n    let newTodo = {\n        id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__.v4)(),\n        name,\n        isDone: false\n    };\n    todos.push(newTodo);\n};\nconst deleteTodo = (id)=>{\n    todos = todos.filter((obj)=>{\n        return obj.id !== id;\n    });\n};\nconst updateTodo = ({ id , isDone  })=>{\n    // only isDone can be updated atm\n    let newTodos = [];\n    todos.map((obj)=>{\n        let newTodo = {\n            ...obj\n        };\n        if (obj.id == id) {\n            newTodo = {\n                id,\n                name: obj.name,\n                isDone\n            };\n        }\n        newTodos.push(newTodo);\n    });\n    todos = newTodos;\n};\nfunction handler(req, res) {\n    res.status(200).json({\n        todos\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdG9kby9saXN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFvQztBQUVwQyxJQUFJRSxRQUFRO0lBQ1Y7UUFDRUMsSUFBSUYsd0NBQU1BO1FBQ1ZHLE1BQU07UUFDTkMsUUFBUSxLQUFLO0lBQ2Y7SUFDQTtRQUNFRixJQUFJRix3Q0FBTUE7UUFDVkcsTUFBTTtRQUNOQyxRQUFRLEtBQUs7SUFDZjtJQUNBO1FBQ0VGLElBQUlGLHdDQUFNQTtRQUNWRyxNQUFNO1FBQ05DLFFBQVEsS0FBSztJQUNmO0NBQ0Q7QUFFTSxNQUFNQyxVQUFVLENBQUNGLE9BQVM7SUFDL0IsSUFBSUcsVUFBVTtRQUNaSixJQUFJRix3Q0FBTUE7UUFDVkc7UUFDQUMsUUFBUSxLQUFLO0lBQ2Y7SUFDQUgsTUFBTU0sSUFBSSxDQUFDRDtBQUNiLEVBQUU7QUFFSyxNQUFNRSxhQUFhLENBQUNOLEtBQU87SUFDaENELFFBQVFBLE1BQU1RLE1BQU0sQ0FBQyxDQUFDQyxNQUFRO1FBQzVCLE9BQU9BLElBQUlSLEVBQUUsS0FBS0E7SUFDcEI7QUFDRixFQUFFO0FBRUssTUFBTVMsYUFBYSxDQUFDLEVBQUVULEdBQUUsRUFBRUUsT0FBTSxFQUFFLEdBQUs7SUFDNUMsaUNBQWlDO0lBQ2pDLElBQUlRLFdBQVcsRUFBRTtJQUNqQlgsTUFBTVksR0FBRyxDQUFDLENBQUNILE1BQVE7UUFDakIsSUFBSUosVUFBVTtZQUFFLEdBQUdJLEdBQUc7UUFBQztRQUN2QixJQUFJQSxJQUFJUixFQUFFLElBQUlBLElBQUk7WUFDaEJJLFVBQVU7Z0JBQ1JKO2dCQUNBQyxNQUFNTyxJQUFJUCxJQUFJO2dCQUNkQztZQUNGO1FBQ0YsQ0FBQztRQUNEUSxTQUFTTCxJQUFJLENBQUNEO0lBQ2hCO0lBQ0FMLFFBQVFXO0FBQ1YsRUFBRTtBQUVhLFNBQVNFLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ3hDQSxJQUFJQyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1FBQUVqQjtJQUFNO0FBQy9CLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWFwcC8uL3BhZ2VzL2FwaS90b2RvL2xpc3QuanM/MjI4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xuXG5sZXQgdG9kb3MgPSBbXG4gIHtcbiAgICBpZDogdXVpZHY0KCksXG4gICAgbmFtZTogXCJMZWFybiBOZXh0LmpzXCIsXG4gICAgaXNEb25lOiBmYWxzZSxcbiAgfSxcbiAge1xuICAgIGlkOiB1dWlkdjQoKSxcbiAgICBuYW1lOiBcIkxlYXJuIEhUTUxcIixcbiAgICBpc0RvbmU6IGZhbHNlLFxuICB9LFxuICB7XG4gICAgaWQ6IHV1aWR2NCgpLFxuICAgIG5hbWU6IFwiU3RhcnQgbmV3IHNpZGVwcm9qZWN0XCIsXG4gICAgaXNEb25lOiBmYWxzZSxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBhZGRUb2RvID0gKG5hbWUpID0+IHtcbiAgbGV0IG5ld1RvZG8gPSB7XG4gICAgaWQ6IHV1aWR2NCgpLFxuICAgIG5hbWUsXG4gICAgaXNEb25lOiBmYWxzZSxcbiAgfTtcbiAgdG9kb3MucHVzaChuZXdUb2RvKTtcbn07XG5cbmV4cG9ydCBjb25zdCBkZWxldGVUb2RvID0gKGlkKSA9PiB7XG4gIHRvZG9zID0gdG9kb3MuZmlsdGVyKChvYmopID0+IHtcbiAgICByZXR1cm4gb2JqLmlkICE9PSBpZDtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlVG9kbyA9ICh7IGlkLCBpc0RvbmUgfSkgPT4ge1xuICAvLyBvbmx5IGlzRG9uZSBjYW4gYmUgdXBkYXRlZCBhdG1cbiAgbGV0IG5ld1RvZG9zID0gW107XG4gIHRvZG9zLm1hcCgob2JqKSA9PiB7XG4gICAgbGV0IG5ld1RvZG8gPSB7IC4uLm9iaiB9O1xuICAgIGlmIChvYmouaWQgPT0gaWQpIHtcbiAgICAgIG5ld1RvZG8gPSB7XG4gICAgICAgIGlkLFxuICAgICAgICBuYW1lOiBvYmoubmFtZSxcbiAgICAgICAgaXNEb25lLFxuICAgICAgfTtcbiAgICB9XG4gICAgbmV3VG9kb3MucHVzaChuZXdUb2RvKTtcbiAgfSk7XG4gIHRvZG9zID0gbmV3VG9kb3M7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgdG9kb3MgfSk7XG59XG4iXSwibmFtZXMiOlsidjQiLCJ1dWlkdjQiLCJ0b2RvcyIsImlkIiwibmFtZSIsImlzRG9uZSIsImFkZFRvZG8iLCJuZXdUb2RvIiwicHVzaCIsImRlbGV0ZVRvZG8iLCJmaWx0ZXIiLCJvYmoiLCJ1cGRhdGVUb2RvIiwibmV3VG9kb3MiLCJtYXAiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/todo/list.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/todo/list.js"));
module.exports = __webpack_exports__;

})();