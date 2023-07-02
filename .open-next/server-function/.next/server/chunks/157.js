exports.id = 157;
exports.ids = [157];
exports.modules = {

/***/ 50416:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const actions = {
'f16850a304d688022911fb97665cadbf8d1e15f5': () => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 88930)).then(mod => mod["addImageAction"]),
'2fecca1861497a6b59f1a3255c3fe84b1c2d7ba2': () => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 88930)).then(mod => mod["deleteImageAction"]),
}

async function endpoint(id, ...args) {
  const action = await actions[id]()
  return action.apply(null, args)
}

// Using CJS to avoid this to be tree-shaken away due to unused exports.
module.exports = {
  'f16850a304d688022911fb97665cadbf8d1e15f5': endpoint.bind(null, 'f16850a304d688022911fb97665cadbf8d1e15f5'),
  '2fecca1861497a6b59f1a3255c3fe84b1c2d7ba2': endpoint.bind(null, '2fecca1861497a6b59f1a3255c3fe84b1c2d7ba2'),
}


/***/ }),

/***/ 68433:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ deleteImageAction),
/* harmony export */   n: () => (/* binding */ addImageAction)
/* harmony export */ });
/* harmony import */ var next_dist_client_app_call_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72583);
/* harmony import */ var next_dist_client_app_call_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_app_call_server__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var private_next_rsc_action_proxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38684);
/* harmony import */ var private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16857);



function __build_action__(action, args) {
  return callServer(action.$$id, args)
}

/* __next_internal_action_entry_do_not_use__ addImageAction,deleteImageAction */ 

var addImageAction = (0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)("f16850a304d688022911fb97665cadbf8d1e15f5");
var deleteImageAction = (0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)("2fecca1861497a6b59f1a3255c3fe84b1c2d7ba2");



/***/ }),

/***/ 88930:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addImageAction: () => (/* binding */ addImageAction),
/* harmony export */   deleteImageAction: () => (/* binding */ deleteImageAction)
/* harmony export */ });
/* harmony import */ var private_next_rsc_action_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91761);
/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17782);
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99181);
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_cache__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_cloudinary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80106);
/* harmony import */ var private_next_rsc_action_validate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(30359);
/* __next_internal_action_entry_do_not_use__ addImageAction,deleteImageAction */ 



async function addImageAction(input) {
    const res = await _lib_db__WEBPACK_IMPORTED_MODULE_1__.db.image.create({
        data: {
            image: input.image
        }
    });
    (0,next_cache__WEBPACK_IMPORTED_MODULE_2__.revalidatePath)("/admin/images");
    return res.image;
}
async function deleteImageAction(id) {
    const image = await _lib_db__WEBPACK_IMPORTED_MODULE_1__.db.image.findUnique({
        where: {
            id
        }
    });
    await (0,_lib_cloudinary__WEBPACK_IMPORTED_MODULE_3__.deleteImageFromCloudinary)(image?.image);
    await _lib_db__WEBPACK_IMPORTED_MODULE_1__.db.image.delete({
        where: {
            id
        }
    });
    (0,next_cache__WEBPACK_IMPORTED_MODULE_2__.revalidatePath)("/admin/images");
}

(0,private_next_rsc_action_validate__WEBPACK_IMPORTED_MODULE_4__["default"])([
    addImageAction,
    deleteImageAction
]);
(0,private_next_rsc_action_proxy__WEBPACK_IMPORTED_MODULE_0__["default"])("f16850a304d688022911fb97665cadbf8d1e15f5", null, addImageAction);
(0,private_next_rsc_action_proxy__WEBPACK_IMPORTED_MODULE_0__["default"])("2fecca1861497a6b59f1a3255c3fe84b1c2d7ba2", null, deleteImageAction);


/***/ })

};
;