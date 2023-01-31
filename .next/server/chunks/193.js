"use strict";
exports.id = 193;
exports.ids = [193];
exports.modules = {

/***/ 5193:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTodo": () => (/* binding */ addTodo),
/* harmony export */   "default": () => (/* binding */ handler),
/* harmony export */   "deleteTodo": () => (/* binding */ deleteTodo),
/* harmony export */   "updateTodo": () => (/* binding */ updateTodo)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5828);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);

let todos = [
    {
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__.v4)(),
        name: "Learn Next.js",
        isDone: false
    },
    {
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__.v4)(),
        name: "Learn HTML",
        isDone: false
    },
    {
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__.v4)(),
        name: "Start new sideproject",
        isDone: false
    }
];
const addTodo = (name)=>{
    let newTodo = {
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__.v4)(),
        name,
        isDone: false
    };
    todos.push(newTodo);
};
const deleteTodo = (id)=>{
    todos = todos.filter((obj)=>{
        return obj.id !== id;
    });
};
const updateTodo = ({ id , isDone  })=>{
    // only isDone can be updated atm
    let newTodos = [];
    todos.map((obj)=>{
        let newTodo = {
            ...obj
        };
        if (obj.id == id) {
            newTodo = {
                id,
                name: obj.name,
                isDone
            };
        }
        newTodos.push(newTodo);
    });
    todos = newTodos;
};
function handler(req, res) {
    res.status(200).json({
        todos
    });
}


/***/ })

};
;