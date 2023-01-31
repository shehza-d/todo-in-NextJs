"use strict";
(() => {
var exports = {};
exports.id = 309;
exports.ids = [309];
exports.modules = {

/***/ 1037:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const companies = [
    {
        id: 100,
        name: "Bluechip Tech"
    },
    {
        id: 101,
        name: "Sunrise Software Solutions"
    },
    {
        id: 102,
        name: "Code Insider"
    },
    {
        id: 103,
        name: "HighStreet Code"
    },
    {
        id: 104,
        name: "Kuomo Solutions"
    }
];
const sleep = async (ms)=>{
    return new Promise((r)=>setTimeout(r, ms));
};
async function handler(req, res) {
    await sleep(2000);
    res.status(200).json({
        companies
    });
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1037));
module.exports = __webpack_exports__;

})();