"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/PaymentForm.js":
/*!***********************************!*\
  !*** ./components/PaymentForm.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n// components/PaymentForm.js\n\nvar _s = $RefreshSig$();\n\nconst PaymentForm = ()=>{\n    _s();\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        fullName: \"\",\n        cardNumber: \"\",\n        cvv: \"\",\n        address: \"\",\n        phoneNumber: \"\",\n        paymentProof: null\n    });\n    const handleInputChange = (e)=>{\n        const { name, value } = e.target;\n        setFormData({\n            ...formData,\n            [name]: value\n        });\n    };\n    const handleFileUpload = (e)=>{\n        const file = e.target.files[0];\n        setFormData({\n            ...formData,\n            paymentProof: file\n        });\n    };\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        // Lakukan validasi di sini\n        if (formData.fullName && formData.cardNumber && formData.cvv && formData.address && formData.phoneNumber && formData.paymentProof) {\n            // Kirim data pembayaran\n            sendPaymentData(formData);\n        } else {\n            // Tangani kesalahan jika ada input yang belum diisi\n            alert(\"Mohon lengkapi semua kolom dan unggah bukti pembayaran\");\n        }\n    };\n    const validateCardNumber = (cardNumber)=>{\n        const cardNumberRegex = /^[0-9]{16}$/;\n        return cardNumberRegex.test(cardNumber);\n    };\n    const validateAddress = (address)=>{\n        const addressRegex = /^[a-zA-Z0-9\\s,'-]*$/;\n        return addressRegex.test(address);\n    };\n    const validateCVV = (cvv)=>{\n        const cvvRegex = /^[0-9]{3,4}$/;\n        return cvvRegex.test(cvv);\n    };\n    const phoneRegex = /^\\+(?:[0-9] ?){6,14}[0-9]$/;\n    const validatePhoneNumber = (phoneNumber)=>{\n        return phoneRegex.test(phoneNumber);\n    };\n    const sendPaymentData = (data)=>{\n        // Kode untuk mengirim data pembayaran ke backend\n        // Misalnya, menggunakan fetch ke endpoint backend\n        fetch(\"/api/payment\", {\n            method: \"POST\",\n            body: JSON.stringify(data),\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        }).then((response)=>{\n            // Tangani respons dari server\n            if (response.ok) {\n                // Berhasil\n                alert(\"Pembayaran berhasil\");\n            } else {\n                // Tangani kesalahan dari server\n                alert(\"Terjadi kesalahan saat melakukan pembayaran\");\n            }\n        }).catch((error)=>{\n            // Tangani kesalahan jaringan\n            alert(\"Terjadi kesalahan jaringan\");\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit,\n        className: \"w-full max-w-sm mx-auto mt-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"fullName\",\n                        className: \"block text-gray-700\",\n                        children: \"Nama Lengkap\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\TUGAS KAMPUS DHANI\\\\STUPEN RAKAMIN AKADEMI\\\\payment finpro\\\\components\\\\PaymentForm.js\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        id: \"fullName\",\n                        name: \"fullName\",\n                        value: formData.fullName,\n                        onChange: handleInputChange,\n                        className: \"w-full border-gray-300 rounded-md focus:ring focus:ring-indigo-200 focus:outline-none px-4 py-2 mt-1\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\TUGAS KAMPUS DHANI\\\\STUPEN RAKAMIN AKADEMI\\\\payment finpro\\\\components\\\\PaymentForm.js\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\TUGAS KAMPUS DHANI\\\\STUPEN RAKAMIN AKADEMI\\\\payment finpro\\\\components\\\\PaymentForm.js\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"cardNumber\",\n                        className: \"block text-gray-700\",\n                        children: \"Nomor Kartu Kredit\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\TUGAS KAMPUS DHANI\\\\STUPEN RAKAMIN AKADEMI\\\\payment finpro\\\\components\\\\PaymentForm.js\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        id: \"cardNumber\",\n                        name: \"cardNumber\",\n                        value: formData.cardNumber,\n                        onChange: handleInputChange,\n                        className: \"w-full border-gray-300 rounded-md focus:ring focus:ring-indigo-200 focus:outline-none px-4 py-2 mt-1\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\TUGAS KAMPUS DHANI\\\\STUPEN RAKAMIN AKADEMI\\\\payment finpro\\\\components\\\\PaymentForm.js\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\TUGAS KAMPUS DHANI\\\\STUPEN RAKAMIN AKADEMI\\\\payment finpro\\\\components\\\\PaymentForm.js\",\n                lineNumber: 91,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"address\",\n                        className: \"block text-gray-700\",\n                        children: \"Alamat\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\TUGAS KAMPUS DHANI\\\\STUPEN RAKAMIN AKADEMI\\\\payment finpro\\\\components\\\\PaymentForm.js\",\n                        lineNumber: 97,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        id: \"address\",\n                        name: \"address\",\n                        value: formData.addressRegex,\n                        onChange: handleInputChange,\n                        className: \"w-full border-gray-300 rounded-md focus:ring focus:ring-indigo-200 focus:outline-none px-4 py-2 mt-1\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\TUGAS KAMPUS DHANI\\\\STUPEN RAKAMIN AKADEMI\\\\payment finpro\\\\components\\\\PaymentForm.js\",\n                        lineNumber: 98,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\TUGAS KAMPUS DHANI\\\\STUPEN RAKAMIN AKADEMI\\\\payment finpro\\\\components\\\\PaymentForm.js\",\n                lineNumber: 96,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"cvv\",\n                        className: \"block text-gray-700\",\n                        children: \"CVV\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\TUGAS KAMPUS DHANI\\\\STUPEN RAKAMIN AKADEMI\\\\payment finpro\\\\components\\\\PaymentForm.js\",\n                        lineNumber: 102,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        id: \"cvv\",\n                        name: \"cvv\",\n                        value: formData.cvv,\n                        onChange: handleInputChange,\n                        className: \"w-full border-gray-300 rounded-md focus:ring focus:ring-indigo-200 focus:outline-none px-4 py-2 mt-1\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\TUGAS KAMPUS DHANI\\\\STUPEN RAKAMIN AKADEMI\\\\payment finpro\\\\components\\\\PaymentForm.js\",\n                        lineNumber: 103,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\TUGAS KAMPUS DHANI\\\\STUPEN RAKAMIN AKADEMI\\\\payment finpro\\\\components\\\\PaymentForm.js\",\n                lineNumber: 101,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"phoneNumber\",\n                        className: \"block text-gray-700\",\n                        children: \"Nomor Telepon\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\TUGAS KAMPUS DHANI\\\\STUPEN RAKAMIN AKADEMI\\\\payment finpro\\\\components\\\\PaymentForm.js\",\n                        lineNumber: 107,\n                        columnNumber: 10\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        id: \"phoneNumber\",\n                        name: \"phoneNumber\",\n                        value: formData.phoneNumber,\n                        onChange: handleInputChange,\n                        className: \"w-full border-gray-300 rounded-md focus:ring focus:ring-indigo-200 focus:outline-none px-4 py-2 mt-1\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\TUGAS KAMPUS DHANI\\\\STUPEN RAKAMIN AKADEMI\\\\payment finpro\\\\components\\\\PaymentForm.js\",\n                        lineNumber: 108,\n                        columnNumber: 10\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\TUGAS KAMPUS DHANI\\\\STUPEN RAKAMIN AKADEMI\\\\payment finpro\\\\components\\\\PaymentForm.js\",\n                lineNumber: 106,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"paymentProof\",\n                        className: \"block text-gray-700\",\n                        children: \"Bukti Pembayaran\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\TUGAS KAMPUS DHANI\\\\STUPEN RAKAMIN AKADEMI\\\\payment finpro\\\\components\\\\PaymentForm.js\",\n                        lineNumber: 112,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"file\",\n                        id: \"paymentProof\",\n                        name: \"paymentProof\",\n                        onChange: handleFileUpload,\n                        className: \"w-full border-gray-300 rounded-md focus:ring focus:ring-indigo-200 focus:outline-none px-4 py-2 mt-1\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\TUGAS KAMPUS DHANI\\\\STUPEN RAKAMIN AKADEMI\\\\payment finpro\\\\components\\\\PaymentForm.js\",\n                        lineNumber: 113,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\TUGAS KAMPUS DHANI\\\\STUPEN RAKAMIN AKADEMI\\\\payment finpro\\\\components\\\\PaymentForm.js\",\n                lineNumber: 111,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                className: \"bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600\",\n                children: \"Bayar\"\n            }, void 0, false, {\n                fileName: \"E:\\\\TUGAS KAMPUS DHANI\\\\STUPEN RAKAMIN AKADEMI\\\\payment finpro\\\\components\\\\PaymentForm.js\",\n                lineNumber: 115,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\TUGAS KAMPUS DHANI\\\\STUPEN RAKAMIN AKADEMI\\\\payment finpro\\\\components\\\\PaymentForm.js\",\n        lineNumber: 84,\n        columnNumber: 5\n    }, undefined);\n};\n_s(PaymentForm, \"s2zOk/li5uDErxxWpVb5a4HIzxg=\");\n_c = PaymentForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PaymentForm);\nvar _c;\n$RefreshReg$(_c, \"PaymentForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bnRGb3JtLmpzPzc1ZDkiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gY29tcG9uZW50cy9QYXltZW50Rm9ybS5qc1xyXG5cclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBQYXltZW50Rm9ybSA9ICgpID0+IHtcclxuICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKHtcclxuICAgIGZ1bGxOYW1lOiAnJyxcclxuICAgIGNhcmROdW1iZXI6ICcnLFxyXG4gICAgY3Z2OiAnJyxcclxuICAgIGFkZHJlc3M6ICcnLCAvLyBUYW1iYWhrYW4gYmFnaWFuIGFsYW1hdFxyXG4gICAgcGhvbmVOdW1iZXI6ICcnLCAvLyBUYW1iYWhrYW4gYmFnaWFuIG5vbW9yIHRlbGVwb25cclxuICAgIHBheW1lbnRQcm9vZjogbnVsbCxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXQ7XHJcbiAgICBzZXRGb3JtRGF0YSh7IC4uLmZvcm1EYXRhLCBbbmFtZV06IHZhbHVlIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUZpbGVVcGxvYWQgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgZmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xyXG4gICAgc2V0Rm9ybURhdGEoeyAuLi5mb3JtRGF0YSwgcGF5bWVudFByb29mOiBmaWxlIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvLyBMYWt1a2FuIHZhbGlkYXNpIGRpIHNpbmlcclxuICAgIGlmIChmb3JtRGF0YS5mdWxsTmFtZSAmJiBmb3JtRGF0YS5jYXJkTnVtYmVyICYmIGZvcm1EYXRhLmN2diAmJiBmb3JtRGF0YS5hZGRyZXNzICYmIGZvcm1EYXRhLnBob25lTnVtYmVyICYmIGZvcm1EYXRhLnBheW1lbnRQcm9vZikge1xyXG4gICAgICAvLyBLaXJpbSBkYXRhIHBlbWJheWFyYW5cclxuICAgICAgc2VuZFBheW1lbnREYXRhKGZvcm1EYXRhKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIFRhbmdhbmkga2VzYWxhaGFuIGppa2EgYWRhIGlucHV0IHlhbmcgYmVsdW0gZGlpc2lcclxuICAgICAgYWxlcnQoJ01vaG9uIGxlbmdrYXBpIHNlbXVhIGtvbG9tIGRhbiB1bmdnYWggYnVrdGkgcGVtYmF5YXJhbicpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHZhbGlkYXRlQ2FyZE51bWJlciA9IChjYXJkTnVtYmVyKSA9PiB7XHJcbiAgICBjb25zdCBjYXJkTnVtYmVyUmVnZXggPSAvXlswLTldezE2fSQvO1xyXG4gICAgcmV0dXJuIGNhcmROdW1iZXJSZWdleC50ZXN0KGNhcmROdW1iZXIpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHZhbGlkYXRlQWRkcmVzcyA9IChhZGRyZXNzKSA9PiB7XHJcbiAgY29uc3QgYWRkcmVzc1JlZ2V4ID0gL15bYS16QS1aMC05XFxzLCctXSokLzsgXHJcbiAgICByZXR1cm4gYWRkcmVzc1JlZ2V4LnRlc3QoYWRkcmVzcyk7XHJcbiAgfTtcclxuICBcclxuICBjb25zdCB2YWxpZGF0ZUNWViA9IChjdnYpID0+IHtcclxuICAgIGNvbnN0IGN2dlJlZ2V4ID0gL15bMC05XXszLDR9JC87XHJcbiAgICByZXR1cm4gY3Z2UmVnZXgudGVzdChjdnYpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHBob25lUmVnZXggPSAvXlxcKyg/OlswLTldID8pezYsMTR9WzAtOV0kLztcclxuICAgIGNvbnN0IHZhbGlkYXRlUGhvbmVOdW1iZXIgPSAocGhvbmVOdW1iZXIpID0+IHtcclxuICAgIHJldHVybiBwaG9uZVJlZ2V4LnRlc3QocGhvbmVOdW1iZXIpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNlbmRQYXltZW50RGF0YSA9IChkYXRhKSA9PiB7XHJcbiAgICAvLyBLb2RlIHVudHVrIG1lbmdpcmltIGRhdGEgcGVtYmF5YXJhbiBrZSBiYWNrZW5kXHJcbiAgICAvLyBNaXNhbG55YSwgbWVuZ2d1bmFrYW4gZmV0Y2gga2UgZW5kcG9pbnQgYmFja2VuZFxyXG4gICAgZmV0Y2goJy9hcGkvcGF5bWVudCcsIHtcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgfSxcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIC8vIFRhbmdhbmkgcmVzcG9ucyBkYXJpIHNlcnZlclxyXG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgLy8gQmVyaGFzaWxcclxuICAgICAgICAgIGFsZXJ0KCdQZW1iYXlhcmFuIGJlcmhhc2lsJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vIFRhbmdhbmkga2VzYWxhaGFuIGRhcmkgc2VydmVyXHJcbiAgICAgICAgICBhbGVydCgnVGVyamFkaSBrZXNhbGFoYW4gc2FhdCBtZWxha3VrYW4gcGVtYmF5YXJhbicpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIC8vIFRhbmdhbmkga2VzYWxhaGFuIGphcmluZ2FuXHJcbiAgICAgICAgYWxlcnQoJ1RlcmphZGkga2VzYWxhaGFuIGphcmluZ2FuJyk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LXctc20gbXgtYXV0byBtdC04XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZnVsbE5hbWVcIiBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwXCI+TmFtYSBMZW5na2FwPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImZ1bGxOYW1lXCIgbmFtZT1cImZ1bGxOYW1lXCIgdmFsdWU9e2Zvcm1EYXRhLmZ1bGxOYW1lfSBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IGNsYXNzTmFtZT1cInctZnVsbCBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1tZCBmb2N1czpyaW5nIGZvY3VzOnJpbmctaW5kaWdvLTIwMCBmb2N1czpvdXRsaW5lLW5vbmUgcHgtNCBweS0yIG10LTFcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgey8qIFRhbWJhaGthbiBpbnB1dCB1bnR1ayBub21vciBrYXJ0dSwgdGFuZ2dhbCBrYWRhbHVhcnNhLCBDVlYsIGRsbCAqL31cclxuICAgICAgey8qIC4uLiAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjYXJkTnVtYmVyXCIgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMFwiPk5vbW9yIEthcnR1IEtyZWRpdDwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJjYXJkTnVtYmVyXCIgbmFtZT1cImNhcmROdW1iZXJcIiB2YWx1ZT17Zm9ybURhdGEuY2FyZE51bWJlcn0gb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSBjbGFzc05hbWU9XCJ3LWZ1bGwgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWQgZm9jdXM6cmluZyBmb2N1czpyaW5nLWluZGlnby0yMDAgZm9jdXM6b3V0bGluZS1ub25lIHB4LTQgcHktMiBtdC0xXCIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHsvKiBDb250b2ggaW5wdXQgdW50dWsgdGFuZ2dhbCBrYWRhbHVhcnNhICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImFkZHJlc3NcIiBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwXCI+QWxhbWF0PC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImFkZHJlc3NcIiBuYW1lPVwiYWRkcmVzc1wiIHZhbHVlPXtmb3JtRGF0YS5hZGRyZXNzUmVnZXh9IG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gY2xhc3NOYW1lPVwidy1mdWxsIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kIGZvY3VzOnJpbmcgZm9jdXM6cmluZy1pbmRpZ28tMjAwIGZvY3VzOm91dGxpbmUtbm9uZSBweC00IHB5LTIgbXQtMVwiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7LyogQ29udG9oIGlucHV0IHVudHVrIENWViAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjdnZcIiBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwXCI+Q1ZWPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImN2dlwiIG5hbWU9XCJjdnZcIiB2YWx1ZT17Zm9ybURhdGEuY3Z2fSBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IGNsYXNzTmFtZT1cInctZnVsbCBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1tZCBmb2N1czpyaW5nIGZvY3VzOnJpbmctaW5kaWdvLTIwMCBmb2N1czpvdXRsaW5lLW5vbmUgcHgtNCBweS0yIG10LTFcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgey8qIENvbnRvaCBpbnB1dCB1bnR1ayBub21vciB0ZWxlcG9uICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cclxuICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwaG9uZU51bWJlclwiIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDBcIj5Ob21vciBUZWxlcG9uPC9sYWJlbD5cclxuICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJwaG9uZU51bWJlclwiIG5hbWU9XCJwaG9uZU51bWJlclwiIHZhbHVlPXtmb3JtRGF0YS5waG9uZU51bWJlcn0gb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSBcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1tZCBmb2N1czpyaW5nIGZvY3VzOnJpbmctaW5kaWdvLTIwMCBmb2N1czpvdXRsaW5lLW5vbmUgcHgtNCBweS0yIG10LTFcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXltZW50UHJvb2ZcIiBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwXCI+QnVrdGkgUGVtYmF5YXJhbjwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgaWQ9XCJwYXltZW50UHJvb2ZcIiBuYW1lPVwicGF5bWVudFByb29mXCIgb25DaGFuZ2U9e2hhbmRsZUZpbGVVcGxvYWR9IGNsYXNzTmFtZT1cInctZnVsbCBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1tZCBmb2N1czpyaW5nIGZvY3VzOnJpbmctaW5kaWdvLTIwMCBmb2N1czpvdXRsaW5lLW5vbmUgcHgtNCBweS0yIG10LTFcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYmctaW5kaWdvLTUwMCB0ZXh0LXdoaXRlIHB5LTIgcHgtNCByb3VuZGVkLW1kIGhvdmVyOmJnLWluZGlnby02MDBcIj5CYXlhcjwvYnV0dG9uPlxyXG4gICAgPC9mb3JtPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYXltZW50Rm9ybTtcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiUGF5bWVudEZvcm0iLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwiZnVsbE5hbWUiLCJjYXJkTnVtYmVyIiwiY3Z2IiwiYWRkcmVzcyIsInBob25lTnVtYmVyIiwicGF5bWVudFByb29mIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJlIiwibmFtZSIsInZhbHVlIiwidGFyZ2V0IiwiaGFuZGxlRmlsZVVwbG9hZCIsImZpbGUiLCJmaWxlcyIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0Iiwic2VuZFBheW1lbnREYXRhIiwiYWxlcnQiLCJ2YWxpZGF0ZUNhcmROdW1iZXIiLCJjYXJkTnVtYmVyUmVnZXgiLCJ0ZXN0IiwidmFsaWRhdGVBZGRyZXNzIiwiYWRkcmVzc1JlZ2V4IiwidmFsaWRhdGVDVlYiLCJjdnZSZWdleCIsInBob25lUmVnZXgiLCJ2YWxpZGF0ZVBob25lTnVtYmVyIiwiZGF0YSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwidGhlbiIsInJlc3BvbnNlIiwib2siLCJjYXRjaCIsImVycm9yIiwiZm9ybSIsIm9uU3VibWl0IiwiY2xhc3NOYW1lIiwiZGl2IiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJvbkNoYW5nZSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/PaymentForm.js\n"));

/***/ })

});