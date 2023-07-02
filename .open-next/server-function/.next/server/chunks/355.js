exports.id = 355;
exports.ids = [355];
exports.modules = {

/***/ 95674:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const actions = {
'bb929477abcb1484cf39483b0d54bf0d8a5f13ce': () => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2496)).then(mod => mod["addProductAction"]),
'4c1427ec0e978e74473ca0e712e6af31bfa10c24': () => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2496)).then(mod => mod["deleteProductAction"]),
'63e38a045abbf99a647c09c52ff29d1b3343d972': () => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2496)).then(mod => mod["featureProductAction"]),
}

async function endpoint(id, ...args) {
  const action = await actions[id]()
  return action.apply(null, args)
}

// Using CJS to avoid this to be tree-shaken away due to unused exports.
module.exports = {
  'bb929477abcb1484cf39483b0d54bf0d8a5f13ce': endpoint.bind(null, 'bb929477abcb1484cf39483b0d54bf0d8a5f13ce'),
  '4c1427ec0e978e74473ca0e712e6af31bfa10c24': endpoint.bind(null, '4c1427ec0e978e74473ca0e712e6af31bfa10c24'),
  '63e38a045abbf99a647c09c52ff29d1b3343d972': endpoint.bind(null, '63e38a045abbf99a647c09c52ff29d1b3343d972'),
}


/***/ }),

/***/ 37426:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lw: () => (/* binding */ deleteProductAction),
/* harmony export */   mc: () => (/* binding */ addProductAction),
/* harmony export */   tv: () => (/* binding */ featureProductAction)
/* harmony export */ });
/* harmony import */ var next_dist_client_app_call_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72583);
/* harmony import */ var next_dist_client_app_call_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_app_call_server__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var private_next_rsc_action_proxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38684);
/* harmony import */ var private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16857);



function __build_action__(action, args) {
  return callServer(action.$$id, args)
}

/* __next_internal_action_entry_do_not_use__ addProductAction,deleteProductAction,featureProductAction */ 

var addProductAction = (0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)("bb929477abcb1484cf39483b0d54bf0d8a5f13ce");
var deleteProductAction = (0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)("4c1427ec0e978e74473ca0e712e6af31bfa10c24");
var featureProductAction = (0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)("63e38a045abbf99a647c09c52ff29d1b3343d972");



/***/ }),

/***/ 2496:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addProductAction: () => (/* binding */ addProductAction),
/* harmony export */   deleteProductAction: () => (/* binding */ deleteProductAction),
/* harmony export */   featureProductAction: () => (/* binding */ featureProductAction)
/* harmony export */ });
/* harmony import */ var private_next_rsc_action_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91761);
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99181);
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_cache__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var slug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56047);
/* harmony import */ var slug__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(slug__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_cloudinary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80106);
/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17782);
/* harmony import */ var private_next_rsc_action_validate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(30359);
/* __next_internal_action_entry_do_not_use__ addProductAction,deleteProductAction,featureProductAction */ 




async function addProductAction(input) {
    const res = await _lib_db__WEBPACK_IMPORTED_MODULE_4__.db.product.create({
        data: {
            name: input.name,
            image: input.image,
            price_from: input.price_from,
            price_to: input.price_to,
            description: input.description,
            slug: slug__WEBPACK_IMPORTED_MODULE_2___default()(input.name)
        }
    });
    (0,next_cache__WEBPACK_IMPORTED_MODULE_1__.revalidatePath)("/admin/products");
    return res.image;
}
async function deleteProductAction(id) {
    const product = await _lib_db__WEBPACK_IMPORTED_MODULE_4__.db.product.findUnique({
        where: {
            id
        }
    });
    await (0,_lib_cloudinary__WEBPACK_IMPORTED_MODULE_3__.deleteImageFromCloudinary)(product?.image);
    await _lib_db__WEBPACK_IMPORTED_MODULE_4__.db.product.delete({
        where: {
            id
        }
    });
    (0,next_cache__WEBPACK_IMPORTED_MODULE_1__.revalidatePath)("/admin/products");
}
async function featureProductAction(id, featured) {
    await _lib_db__WEBPACK_IMPORTED_MODULE_4__.db.product.update({
        data: {
            featured
        },
        where: {
            id
        }
    });
    (0,next_cache__WEBPACK_IMPORTED_MODULE_1__.revalidatePath)("/admin/products");
}

(0,private_next_rsc_action_validate__WEBPACK_IMPORTED_MODULE_5__["default"])([
    addProductAction,
    deleteProductAction,
    featureProductAction
]);
(0,private_next_rsc_action_proxy__WEBPACK_IMPORTED_MODULE_0__["default"])("bb929477abcb1484cf39483b0d54bf0d8a5f13ce", null, addProductAction);
(0,private_next_rsc_action_proxy__WEBPACK_IMPORTED_MODULE_0__["default"])("4c1427ec0e978e74473ca0e712e6af31bfa10c24", null, deleteProductAction);
(0,private_next_rsc_action_proxy__WEBPACK_IMPORTED_MODULE_0__["default"])("63e38a045abbf99a647c09c52ff29d1b3343d972", null, featureProductAction);


/***/ })

};
;