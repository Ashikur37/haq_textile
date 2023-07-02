exports.id = 103;
exports.ids = [103];
exports.modules = {

/***/ 93981:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 77891))

/***/ }),

/***/ 77891:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ AdminSidebar)
});

// EXTERNAL MODULE: external "next/dist/compiled/react-experimental/jsx-runtime"
var jsx_runtime_ = __webpack_require__(76931);
// EXTERNAL MODULE: ./src/components/icons.tsx
var icons = __webpack_require__(33821);
// EXTERNAL MODULE: ./src/lib/utils.ts
var utils = __webpack_require__(41253);
// EXTERNAL MODULE: external "next/dist/compiled/react-experimental"
var react_experimental_ = __webpack_require__(17640);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.4.7_@babel+core@7.22.5_react-dom@18.2.0_react@18.2.0/node_modules/next/link.js
var next_link = __webpack_require__(81293);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/layouts/sidebar-link.tsx





function SidebarLink({ label, open, subMenus }) {
    const [submenuOpen, setSubmenuOpen] = (0,react_experimental_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                className: "text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:text-white rounded-md mt-2 hover:bg-[#2F2326BE]",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "text-2xl block float-left",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(icons/* Icons */.P.menu, {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: (0,utils.cn)("text-base font-medium flex-1 duration-200", !open && "hidden"),
                        children: label
                    }),
                    submenuOpen ? /*#__PURE__*/ jsx_runtime_.jsx(icons/* Icons */.P.chevronUp, {
                        onClick: ()=>setSubmenuOpen(!submenuOpen)
                    }) : /*#__PURE__*/ jsx_runtime_.jsx(icons/* Icons */.P.chevronRight, {
                        onClick: ()=>setSubmenuOpen(!submenuOpen)
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                className: (0,utils.cn)("duration-500", (!open || !submenuOpen) && "hidden"),
                children: subMenus.map((subMenu, index)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: subMenu.link,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:text-white rounded-md mt-2 hover:bg-[#2F2326BE]",
                            children: subMenu.label
                        })
                    }, index))
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/layouts/admin-sidebar.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 




function AdminSidebar() {
    const [open, setOpen] = (0,react_experimental_.useState)(true);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (0,utils.cn)("w-3/10 h-screen bg-deepcolor p-5 pt-8 relative duration-500", open ? "w-72" : "w-20"),
        children: [
            open ? /*#__PURE__*/ jsx_runtime_.jsx(icons/* Icons */.P.left, {
                onClick: ()=>setOpen(false),
                className: "rounded-full cursor-pointer bg-white text-3xl absolute -right-3 top-39 border border-themecolor"
            }) : /*#__PURE__*/ jsx_runtime_.jsx(icons/* Icons */.P.right, {
                onClick: ()=>setOpen(true),
                className: "rounded-full cursor-pointer bg-white text-3xl absolute -right-3 top-39 border border-themecolor"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "inline-flex",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(icons/* Icons */.P.calendar, {
                        className: (0,utils.cn)("text-4xl text-white float-left mr-2 duration-500", open && "rotate-[360deg] ")
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: (0,utils.cn)("text-white origin-left font-medium text-2xl duration-500", !open && "scale-0"),
                        children: "HaqueTextile"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (0,utils.cn)("flex items-center rounded-md bg-[#2F2326BE] mt-6 py-2 duration-500", open ? "px-4" : "px-2.5"),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(icons/* Icons */.P.search, {
                        className: (0,utils.cn)("text-white text-lg block float-left cursor-pointer duration-500", open && "mr-2")
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: "search",
                        placeholder: "Search",
                        className: (0,utils.cn)("text-base bg-transparent w-full text-white focus:outline-none", !open && "hidden")
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                className: "pt-2",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(SidebarLink, {
                        label: "Product",
                        open: open,
                        subMenus: [
                            {
                                label: "Product List",
                                link: "/admin/products"
                            },
                            {
                                label: "Add Product",
                                link: "/admin/products/add"
                            }
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(SidebarLink, {
                        label: "Image",
                        open: open,
                        subMenus: [
                            {
                                label: "Image List",
                                link: "/admin/images"
                            },
                            {
                                label: "Add Image",
                                link: "/admin/images/add"
                            }
                        ]
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 71120:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ Button)
/* harmony export */ });
/* unused harmony export buttonVariants */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76931);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17640);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(27090);
/* harmony import */ var class_variance_authority__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71331);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41253);





const buttonVariants = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_2__/* .cva */ .j)("inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
            outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2",
            sm: "h-8 rounded-md px-3 text-xs",
            lg: "h-10 rounded-md px-8",
            icon: "h-9 w-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_4__/* .Slot */ .g7 : "button";
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Comp, {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    });
});
Button.displayName = "Button";



/***/ }),

/***/ 70280:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ AdminLayout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react-experimental/jsx-runtime"
var jsx_runtime_ = __webpack_require__(76931);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.4.7_@babel+core@7.22.5_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(83023);
;// CONCATENATED MODULE: ./src/components/layouts/admin-sidebar.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/media/piash/New Volume/next js/my-project/src/components/layouts/admin-sidebar.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const admin_sidebar = (__default__);
;// CONCATENATED MODULE: ./src/app/admin/layout.tsx


async function AdminLayout({ children }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(admin_sidebar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container px-4 py-4",
                children: children
            })
        ]
    });
}


/***/ }),

/***/ 51389:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ loading)
});

// EXTERNAL MODULE: external "next/dist/compiled/react-experimental/jsx-runtime"
var jsx_runtime_ = __webpack_require__(76931);
;// CONCATENATED MODULE: ./src/components/ui/skeleton.tsx

function Skeleton({ className, ...props }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        role: "status",
        className: " p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex items-center justify-between pt-4",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex items-center justify-between pt-4",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex items-center justify-between pt-4",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex items-center justify-between pt-4",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "sr-only",
                children: "Loading..."
            })
        ]
    });
}


// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.4.7_@babel+core@7.22.5_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react-experimental/react.shared-subset.js
var react_shared_subset = __webpack_require__(71975);
;// CONCATENATED MODULE: ./src/app/admin/loading.tsx



function loading({}) {
    return /*#__PURE__*/ jsx_runtime_.jsx(Skeleton, {
        className: "h-6 container"
    });
}


/***/ }),

/***/ 80106:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteImageFromCloudinary: () => (/* binding */ deleteImageFromCloudinary)
/* harmony export */ });
/* harmony import */ var private_next_rsc_action_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91761);
/* harmony import */ var cloudinary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31696);
/* harmony import */ var cloudinary__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cloudinary__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var private_next_rsc_action_validate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(30359);
/* __next_internal_action_entry_do_not_use__ deleteImageFromCloudinary */ 

function getCloudinaryPublicId(imageUrl) {
    const regex = /\/[^/]+\/([^./]+)\.[^/]+$/;
    const match = imageUrl.match(regex);
    if (match && match.length > 1) {
        return "images/" + match[1];
    }
    return null; // Return null if the public ID cannot be extracted
}
async function deleteImageFromCloudinary(image) {
    const publicId = getCloudinaryPublicId(image);
    if (!publicId) {
        return {
            err: "No public id found"
        };
    }
    cloudinary__WEBPACK_IMPORTED_MODULE_1___default().v2.config({
        cloud_name: "dxlmkfscm",
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET
    });
    console.log(process.env.DATABASE_URL);
    try {
        const result = await cloudinary__WEBPACK_IMPORTED_MODULE_1___default().v2.uploader.destroy(publicId);
        console.log(result);
    } catch (error) {
        console.error("Error deleting image from Cloudinary:", error);
        throw error;
    }
}

(0,private_next_rsc_action_validate__WEBPACK_IMPORTED_MODULE_2__["default"])([
    deleteImageFromCloudinary
]);
(0,private_next_rsc_action_proxy__WEBPACK_IMPORTED_MODULE_0__["default"])("cacfbea101c63e5b084019376808544cce76b943", null, deleteImageFromCloudinary);


/***/ }),

/***/ 17782:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   db: () => (/* binding */ db)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53524);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);


let prisma;
if (true) {
    prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();
} else {}
const db = prisma;


/***/ })

};
;