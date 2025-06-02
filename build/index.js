/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/rich-text":
/*!**********************************!*\
  !*** external ["wp","richText"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["richText"];

/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/rich-text */ "@wordpress/rich-text");
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





const iconPaths = miPluginData;
const icons = {
  cuadrada: [{
    name: "Apio",
    file: "apio.png"
  }, {
    name: "Huevo",
    file: "huevo.png"
  }, {
    name: "Altramuces",
    file: "Altramuces.png"
  }, {
    name: "Crustaceo",
    file: "crustaceo.png"
  }, {
    name: "Cacahuete",
    file: "cacahuete.png"
  }, {
    name: "Fruto de Cascara",
    file: "frutoCascara.png"
  }, {
    name: "Gluten",
    file: "gluten.png"
  }, {
    name: "Leche",
    file: "leche.png"
  }, {
    name: "Molusco",
    file: "molusco.png"
  }, {
    name: "Pescado",
    file: "pescado.png"
  }, {
    name: "Sesamo",
    file: "sesamo.png"
  }, {
    name: "Soja",
    file: "soja.png"
  }, {
    name: "Sulfito",
    file: "sulfito.png"
  }],
  redonda: [{
    name: "Apio",
    file: "apio.png"
  }, {
    name: "Huevo",
    file: "huevo.png"
  }, {
    name: "Altramuces",
    file: "Altramuces.png"
  }, {
    name: "Crustaceo",
    file: "crustaceo.png"
  }, {
    name: "Cacahuete",
    file: "cacahuete.png"
  }, {
    name: "Fruto de Cascara",
    file: "frutoCascara1.png"
  }, {
    name: "Gluten",
    file: "gluten.png"
  }, {
    name: "Leche",
    file: "leche.png"
  }, {
    name: "Molusco",
    file: "molusco1.png"
  }, {
    name: "Pescado",
    file: "pescado.png"
  }, {
    name: "Sesamo",
    file: "sesamo.png"
  }, {
    name: "Soja",
    file: "soja.png"
  }, {
    name: "Sulfito",
    file: "sulfito1.png"
  }],
  triangular: [{
    name: "Apio",
    file: "apio.png"
  }, {
    name: "Huevo",
    file: "huevo.png"
  }, {
    name: "Altramuces",
    file: "Altramuces.png"
  }, {
    name: "Crustaceo",
    file: "crustaceo.png"
  }, {
    name: "Cacahuete",
    file: "cacahuete.png"
  }, {
    name: "Fruto de Cascara",
    file: "frutoCascara.png"
  }, {
    name: "Gluten",
    file: "gluten.png"
  }, {
    name: "Leche",
    file: "leche.png"
  }, {
    name: "Molusco",
    file: "molusco.png"
  }, {
    name: "Pescado",
    file: "pescado.png"
  }, {
    name: "Sesamo",
    file: "sesamo.png"
  }, {
    name: "Soja",
    file: "soja.png"
  }, {
    name: "Sulfito",
    file: "sulfito.png"
  }]
};
const tabColors = {
  cuadrada: {
    background: "#0073aa"
  },
  redonda: {
    background: "#d93025"
  },
  triangular: {
    background: "#3a6f35"
  }
};
const IconoAlergenoButton = ({
  isActive,
  value,
  onChange
}) => {
  const [isOpen, setOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const buttonRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
  const insertIcon = (url, name) => {
    const imgNode = wp.richText.create({
      html: `<img src="${url}" alt="${name}" style="width: 45px; height: 45px; vertical-align: bottom; display: inline-block;" />
`
    });
    const newContent = wp.richText.insert(value, imgNode);
    onChange(newContent);
    setOpen(false);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichTextToolbarButton, {
      icon: "smiley",
      title: "icono al\xE9rgeno",
      onClick: () => setOpen(!isOpen),
      isActive: isActive,
      ref: buttonRef
    }), isOpen && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Popover, {
      anchorRef: buttonRef.current,
      onClose: () => setOpen(false),
      position: "bottom center",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        style: {
          width: "280px"
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
          className: "icon-tabs",
          activeClass: "active-tab",
          tabs: [{
            name: "cuadrada",
            title: "Cuadrada"
          }, {
            name: "redonda",
            title: "Redonda"
          }, {
            name: "triangular",
            title: "Triangular"
          }],
          children: tab => {
            const colors = tabColors[tab.name];
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              style: {
                backgroundColor: colors.background,
                padding: "10px",
                borderRadius: "6px",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center"
              },
              children: icons[tab.name].map(icon => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                style: {
                  width: "70px",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center"
                },
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                  style: {
                    width: "60px",
                    height: "60px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: colors.buttonBg,
                    borderRadius: "6px",
                    cursor: "pointer"
                  },
                  onMouseOver: e => e.currentTarget.style.backgroundColor = colors.buttonHover,
                  onMouseOut: e => e.currentTarget.style.backgroundColor = colors.buttonBg,
                  onClick: () => insertIcon(iconPaths[tab.name] + icon.file, icon.name),
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
                    src: iconPaths[tab.name] + icon.file,
                    alt: icon.name,
                    style: {
                      width: "36px",
                      height: "36px"
                    }
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                  style: {
                    color: "#fff",
                    fontSize: "12px"
                  },
                  children: icon.name
                })]
              }, icon.file))
            });
          }
        })
      })
    })]
  });
};
(0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_0__.registerFormatType)("mi-plugin/icono-alergeno", {
  title: "Insertar icono alérgeno",
  tagName: "span",
  className: null,
  edit: IconoAlergenoButton
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map