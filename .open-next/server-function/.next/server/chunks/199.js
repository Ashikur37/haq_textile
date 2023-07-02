exports.id = 199;
exports.ids = [199];
exports.modules = {

/***/ 67745:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 61673));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 85452))

/***/ }),

/***/ 85452:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavLink: () => (/* binding */ NavLink)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76931);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81293);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41253);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48386);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);
/* __next_internal_client_entry_do_not_use__ NavLink auto */ 



function NavLink({ path, label }) {
    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: path,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
            className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)(pathname === path && "text-themecolor"),
            children: label
        })
    });
}


/***/ }),

/***/ 61673:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemeToggle: () => (/* binding */ ThemeToggle)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76931);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60287);
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33821);
/* __next_internal_client_entry_do_not_use__ ThemeToggle auto */ 


function ThemeToggle() {
    const { setTheme, theme } = (0,next_themes__WEBPACK_IMPORTED_MODULE_1__/* .useTheme */ .F)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
        onClick: ()=>setTheme(theme === "light" ? "dark" : "light"),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons__WEBPACK_IMPORTED_MODULE_2__/* .Icons */ .P.sun, {
                className: "h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0",
                "aria-hidden": "true"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons__WEBPACK_IMPORTED_MODULE_2__/* .Icons */ .P.moon, {
                className: "absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100",
                "aria-hidden": "true"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "sr-only",
                children: "Toggle theme"
            })
        ]
    });
}


/***/ }),

/***/ 54516:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ FrontLayout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react-experimental/jsx-runtime"
var jsx_runtime_ = __webpack_require__(76931);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.4.7_@babel+core@7.22.5_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(83023);
;// CONCATENATED MODULE: ./src/components/layouts/theme-toggle.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/media/piash/New Volume/next js/my-project/src/components/layouts/theme-toggle.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["ThemeToggle"];

;// CONCATENATED MODULE: ./src/components/layouts/front-footer.tsx


function FrontFooter() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx(e0, {})
    });
}

// EXTERNAL MODULE: ./src/config/site.ts
var site = __webpack_require__(44867);
;// CONCATENATED MODULE: ./src/components/layouts/nav-link.tsx

const nav_link_proxy = (0,module_proxy.createProxy)(String.raw`/media/piash/New Volume/next js/my-project/src/components/layouts/nav-link.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: nav_link_esModule, $$typeof: nav_link_$$typeof } = nav_link_proxy;
const nav_link_default_ = nav_link_proxy.default;

const nav_link_e0 = nav_link_proxy["NavLink"];

;// CONCATENATED MODULE: ./src/components/layouts/front-header.tsx



function FrontHeader() {
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: "sticky top-0 z-40 w-full border-b bg-background py-2",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex container justify-between ",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(nav_link_e0, {
                    path: "/",
                    label: site/* siteConfig */.J.name
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex justify-end gap-5 grow",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(nav_link_e0, {
                            path: "/",
                            label: "Home"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(nav_link_e0, {
                            path: "/shop",
                            label: "Shop"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(nav_link_e0, {
                            path: "/about",
                            label: "About"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(nav_link_e0, {
                            path: "/contact",
                            label: "Contact"
                        })
                    ]
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./src/app/(front)/layout.tsx



async function FrontLayout({ children }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "relative flex min-h-screen flex-col",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(FrontHeader, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                className: "flex-1",
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(FrontFooter, {})
        ]
    });
}


/***/ })

};
;