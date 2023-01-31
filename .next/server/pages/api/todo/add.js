"use strict";
(() => {
var exports = {};
exports.id = 253;
exports.ids = [253,945];
exports.modules = {

/***/ 5828:
/***/ ((module) => {

module.exports = require("uuid");

/***/ }),

/***/ 2541:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5193);

function handler(req, res) {
    if (req.method === "POST") {
        let { name: todo  } = JSON.parse(req.body);
        (0,_list__WEBPACK_IMPORTED_MODULE_0__.addTodo)(todo);
        res.status(200).json({
            msg: "todo added"
        });
    } else {
        res.status(400).json({
            msg: "invalid request method"
        });
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [193], () => (__webpack_exec__(2541)));
module.exports = __webpack_exports__;

})();