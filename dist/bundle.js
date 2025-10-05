/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! assets/gray.png */ \"./src/assets/gray.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! assets/white.png */ \"./src/assets/white.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n\t--bcg-color-gray: #7C7B7B;\n\t--bcg-color-lightgray: #969595;\n\t--color-gradedwhite: #B9B8B8;\n\t--bcg-color-white: #F8F7F6;\n\t--bcg-color-orange: #EC6D13;\n\t--color-white: #FFFFFF;\n}\n\n* {\n\tmargin: 0;\n\tpadding: 0;\n\tbox-sizing: border-box;\n\t/* color: var(--color-white); */\n\tfont-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\nhtml, body {\n\theight: 100%;\n\twidth: 100%;\n\tmargin: 0;\n\toverflow-x: hidden;\n}\n\n.views {\n\twidth: 100%;\n\tmin-height: 100vh;\n}\n\n.home {\n\twidth: 100%;\n\tmin-height: 100vh;\n\tbackground-color: var(--bcg-color-gray);\n}\n\n.home header {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tposition: relative;\n\tpadding: 28px 20px;\n}\n\n.home .logo {\n\tdisplay: flex;\n\talign-items: center;\n\tfont-size: 24px;\n\tfont-weight: 700;\n\n}\n\n.home .logo::before {\n\tcontent: \"\";\n\tdisplay: inline-block;\n\twidth: 28px;\n\theight: 28px;\n\tmargin-right: 12px;\n\tbackground: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) no-repeat center/contain;\n}\n\n.home .navbar {\n\tdisplay: flex;\n\tgap: 20px;\n}\n\n.home button {\n\tborder: none;\n\tbackground-color: var(--bcg-color-gray);\n\tcolor: var(--color-white);\n\tfont-size: 16px;\n\tfont-weight: 600;\n}\n\n.home .order > button {\n\tbackground-color: var(--bcg-color-orange);\n\tpadding: 6px 16px;\n\tborder-radius: 20px;\n}\n\n.home {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n}\n\n.home .content {\n\tflex: 1;\n}\n\n.home footer {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tpadding-bottom: 20px;\n\tcolor: var(--color-gradedwhite)\n}\n\n.home #content {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n\tgap: 30px;\n\twidth: 95%;\n\tmargin: auto auto;\n}\n\n.home .content__title {\n\tfont-size: 60px;\n\tfont-weight: 900;\n\tcolor: var(--color-white);\n\ttext-shadow: 0 0 10px var(--color-gradedwhite), 0 0 20px var(--color-gradedwhite);\n}\n\n.home .content__description {\n\twidth: 60%;\n\tfont-size: 20px;\n\tfont-weight: 400;\n}\n\n.home .viewmenu {\n\tbackground-color: var(--bcg-color-orange);\n\tpadding: 12px 28px;\n\tborder-radius: 24px;\n\tmargin: 20px;\n}\n\n.home .booktable {\n\tbackground-color: var(--bcg-color-lightgray);\n\tpadding: 12px 28px;\n\tborder-radius: 24px;\n}\n\n.menu {\n\twidth: 100%;\n\tmin-height: 100vh;\n\tbackground-color: var(--bcg-color-white);\n\tcolor: black;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n}\n\n.menu .header {\n\tborder-bottom: 3px solid #F7EAE0;\n\tpadding: 20px;\n\tdisplay: flex;\n\tjustify-content: space-between;\n}\n\n.menu .logo {\n\tpadding-left: 20px;\n\tdisplay: flex;\n\talign-items: center;\n\tfont-size: 22px;\n\tfont-weight: 700;\n}\n\n.menu .logo::before {\n\tcontent: \"\";\n\tdisplay: inline-block;\n\twidth: 28px;\n\theight: 28px;\n\tmargin-right: 12px;\n\tbackground: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) no-repeat center/contain;\n}\n\n.menu .navbar {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tgap: 14px;\n\tpadding-right: 20px;\n}\n\n.menu .navbar button {\n\tborder: none;\n\tbackground-color: transparent;\n\tfont-size: 17px;\n\tcolor: #555555;\n}\n\n.menu .footer {\n\tborder-top: 3px solid #F7EAE0;\n\tpadding: 12px;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n\tgap: 8px;\n\tcolor: #555555;\n}\n\n.menu .main {\n\tflex: 1;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\t/* justify-content: center;\t */\n\tmargin: 20px;\n\tgap: 20px;\n}\n\n.menu .title {\n\tfont-size: 48px;\n\tfont-weight: 900;\n\tgap: 20px\n}\n\n.menu .panes {\n\tdisplay: flex;\n\tgap: 16px;\n\tflex-wrap: wrap;\n}\n\n.menu .pane {\n\tbackground-color: white;\n\twidth: 380px;\n\tmax-height: 600px;\n\tbox-shadow: 0 4px 10px rgba(0,0,0,0.15);\n\tborder-radius: 20px;\n\tposition: relative;\n}\n\n.menu img {\n\twidth: 380px;\n\theight: 300px;\n\tobject-fit: cover;\n\tobject-position: bottom;\n\tborder-top-left-radius: 20px;\n\tborder-top-right-radius: 20px;\n}\n\n.menu .pane__description {\n\tpadding: 10px;\n}\n\n.menu .pane__title {\n\tposition: absolute;\n\tbottom: 150px;\n\tleft: 20px;\n\t/* transform: translateX(-100%); */\n\tcolor: white;\n\tfont-size: 18px;\n\tfont-weight: 900;\n}\n\n.menu .pane__price {\n\tposition: absolute;\n\tbottom: 125px;\n\tleft: 20px;\n\tfont-size: 18px;\n\tfont-weight: 900;\n\tcolor: #EC6D13;\n}\n\n.about {\n\twidth: 100%;\n\tmin-height: 100vh;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n\tbackground-color: #F8F7F6;\n}\n\n.about .header {\n\tpadding: 20px 30px;\n\tborder-bottom: 2px solid #EEEDEF;\n\tdisplay: flex;\n\tjustify-content: space-between;\n}\n\n.about .logo {\n\tfont-size: 20px;\n\tfont-weight: 600;\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 8px;\n}\n\n.about .logo::before {\n\tcontent: \"\";\n\tdisplay: inline-block;\n\tbackground: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) no-repeat center/contain;\n\twidth: 28px;\n\theight: 28px;\n}\n\n.about .navbar {\n\tdisplay: flex;\n\tgap: 26px;\n}\n\n.about .navbar button {\n\tbackground-color: transparent;\n\tborder: none;\n\tfont-size: 16px;\n}\n\n.about .footer {\n\tborder-top: 2px solid #EEEDEF;\n\tpadding: 20px;\n\tdisplay: flex;\n\tjustify-content: space-between;\n}\n\n.about .main {\n\twidth: 60%;\n\tmargin: auto;\n}\n\n.about .footer .logo {\n\tfont-size: 16px;\n}\n\n.about .footer {\n\tfont-size: 15px;\n}\n\n.about .footer .rights {\n\tcolor: var(--color-gradedwhite);\n}\n\n.main {\n\tpadding-top: 40px;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n}\n\n.main .section {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 30px;\n\tmargin-bottom: 80px;\n}\n\n.main .section.reverse {\n\tflex-direction: row-reverse;\n}\n\n.main .section__image img {\n\twidth: 400px;\n\tmax-height: 300px;\n\tobject-fit: cover;\n\tobject-position: center;\n\tborder-radius: 20px;\n}\n\n.main .section__text .title {\n\tfont-size: 30px;\n\tfont-weight: 800;\n\tpadding: 8px;\n\t/* font-size: 40px;\n\tfont-weight: 900;\n\tfont-family: Helvetica, sans-serif;\n\tline-height: 1.2; */\n}\n\n.main .section__text .description {\n\tfont-size: 18px;\n\tpadding: 8px;\n\tfont-weight: 300;\n\tcolor: #3F3F46;\n\t/* font-size: 18px;\n\tfont-weight: 400;\n\tfont-family: Helvetica, sans-serif;\n\tline-height: 1.5; */\n}\n\n.main #lastsection {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n}\n\n.main #lastsection .title {\n\ttext-align: center;\n}\n\nbutton {\n\tcursor: pointer;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin_restaurant-page/./src/styles.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://odin_restaurant-page/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("{\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://odin_restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin_restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin_restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin_restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin_restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin_restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin_restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin_restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ }),

/***/ "./src/assets/gray.png":
/*!*****************************!*\
  !*** ./src/assets/gray.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"d738eb60a8f38d8ffdc0.png\";\n\n//# sourceURL=webpack://odin_restaurant-page/./src/assets/gray.png?\n}");

/***/ }),

/***/ "./src/assets/white.png":
/*!******************************!*\
  !*** ./src/assets/white.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"71bdf5a172424a5486af.png\";\n\n//# sourceURL=webpack://odin_restaurant-page/./src/assets/white.png?\n}");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _views_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views.js */ \"./src/views.js\");\n\n\n\nconst viewsDiv = document.querySelector(\".views\");\n\nfunction render(view, path = \"/\") {\n\tviewsDiv.innerHTML = view;\n\thistory.pushState({ path }, \"\", path);\n\n\tconst homeBtn = viewsDiv.querySelector(\".gohome\")\n\t\t.addEventListener(\"click\", () => render(_views_js__WEBPACK_IMPORTED_MODULE_1__.homeView, \"/\"));\n\n\tconst menuBtn = viewsDiv.querySelector(\".gomenu\")\n\t\t.addEventListener(\"click\", () => render(_views_js__WEBPACK_IMPORTED_MODULE_1__.menuView, \"/menu\"));\n\t\n\tconst aboutBtn = viewsDiv.querySelector(\".goabout\")\n\t\t.addEventListener(\"click\", () => render(_views_js__WEBPACK_IMPORTED_MODULE_1__.aboutView, \"/about\"));\n}\n\nwindow.addEventListener(\"popstate\", (e) => {\n\tif (!e.state)\n\t\treturn;\n\tswitch (e.state.path) {\n\t\tcase \"/\": render(_views_js__WEBPACK_IMPORTED_MODULE_1__.homeView, \"/\"); break;\n\t\tcase \"/home\": render(_views_js__WEBPACK_IMPORTED_MODULE_1__.homeView, \"/home\"); break;\n\t\tcase \"/about\": render(_views_js__WEBPACK_IMPORTED_MODULE_1__.aboutView, \"/about\"); break;\n\t}\n});\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n\trender(_views_js__WEBPACK_IMPORTED_MODULE_1__.homeView, \"/\");\n});\n\n\n\n//# sourceURL=webpack://odin_restaurant-page/./src/main.js?\n}");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin_restaurant-page/./src/styles.css?\n}");

/***/ }),

/***/ "./src/views.js":
/*!**********************!*\
  !*** ./src/views.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   aboutView: () => (/* binding */ aboutView),\n/* harmony export */   homeView: () => (/* binding */ homeView),\n/* harmony export */   menuView: () => (/* binding */ menuView)\n/* harmony export */ });\nconst homeView = `\n<div class=\"home\">\n\t\t\t<header>\n\t\t\t\t<div class=\"logo\">The Golden Spoon</div>\n\t\t\t\t<nav class=\"navbar\">\n\t\t\t\t\t<button class=\"gohome\">Home</button>\n\t\t\t\t\t<button class=\"gomenu\">Menu</button>\n\t\t\t\t\t<button class=\"goabout\">About</button>\n\t\t\t\t</nav>\n\t\t\t\t<div class=\"order\">\n\t\t\t\t\t<button class=\"order__online\">Order Online</button>\n\t\t\t\t</div>\n\t\t\t</header>\n\t\t\t<div id=\"content\">\n\t\t\t\t<div class=\"content__title\">Welcome to The Golden Spoon</div>\n\t\t\t\t<div class=\"content__description\">\n\t\t\t\t\tExperience the finest dining in town. Our chefs craft exquisite dishes using the freshest ingredients, ensuring a memorable culinary journey for every guest.\n\t\t\t\t</div>\n\t\t\t\t<div class=\"content__actions\">\n\t\t\t\t\t<button class=\"viewmenu\">View Menu</button>\n\t\t\t\t\t<button class=\"booktable\">Book a Table</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<footer>\n\t\t\t\t<div class=\"footer\">&copy; The Golden Spoon. All Rights Reserved.</div>\n\t\t\t</footer>\n</div>\n`;\n\nconst menuView = `\n<div class=\"menu\">\n\t<div class=\"header\">\n\t\t<div class=\"logo\">The Golden Spoon</div>\n\t\t<div class=\"navbar\">\n\t\t\t<button class=\"gohome\">Home</button>\n\t\t\t<button class=\"gomenu\">Menu</button>\n\t\t\t<button class=\"goabout\">About</button>\n\t\t</div>\n\t</div>\n\t<div class=\"main\">\n\t\t<div class=\"title\">Our Culinary Delights</div>\n\t\t<div class=\"panes\">\n\t\t\t<div class=\"pane\">\n\t\t\t\t<div class=\"pane__image\">\n\t\t\t\t\t<img src=\"https://lh3.googleusercontent.com/aida-public/AB6AXuBX0SLL09mjERIKuGRFdWJ5SEQg076-oVgYF2UcvqmaHxTydpiiezmwcsrxU7gRiRVG47tfhoGNXwWUM8YaB-bt0T9JmYv4DxLLVkN8YUusdPryrLLu6GDG1uk12oHYTZYJj_QC9BtJ1z0h2NuUghkWZIP0-k4jXP7WsTcOiauNaNNFE6Y4FwwYbD2KJL3WXfBt5Ze82cmmCGh7Pgt_kRCxtmpjcpPIynHoQ5746_9c1Oblcj32jbLU9EpC2ifqmHgYv4z3nqVLK7E\" alt=\"A Burger with Grilled Beef\">\n\t\t\t\t\t<div class=\"pane__title\">The Classic Burger</div>\n\t\t\t\t\t<div class=\"pane__price\">$15.99</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"pane__description\">A juicy, handcrafted beef patty with melted cheddar cheese, crisp lettuce,ripe tomato, and our signature secret suace, all nestled in a toasted brioche bun. cancer.</div>\n\t\t\t</div>\n\t\t\t<div class=\"pane\">\n\t\t\t\t<div class=\"pane__image\">\n\t\t\t\t\t<img src=\"https://lh3.googleusercontent.com/aida-public/AB6AXuChtgZM-ALAo-txE1rOKG5ft6_9NDl879tiWamzP3mmMqcUwZPmgC8pyPR3AlmOz1ap3Ut-TS_Ndwd0jCVJhTLh0DDIXZ-NNtuSNFGjRk-XuP3XCNO-efcjlJJ-2qt6BbfUQpayIWMX8AsBi2XhbigZcf6gZWus8N755M_mzcFjpwRZ5iaxA1nXjS5lcVRZfCGn_fone7kUDdOTMANKF0B4vVwScHOugJQacfrcKWzMY50pJh4ITik_aP_xXUTpvXzCsNRZOi0SZ5Y\" alt=\"A Raw Salmon and Asparagus\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"pane__title\">Grilld Salmon</div>\n\t\t\t\t<div class=\"pane__price\">$22.50</div>\n\t\t\t\t<div class=\"pane__description\">Perfectly grilled Atlantic salmon fillet with a crispy skin, served on a bed of tender asparagus and drizzled with a zesty lemon-dill sauce. hahah.</div>\n\t\t\t</div>\n\t\t\t<div class=\"pane\">\n\t\t\t\t<div class=\"pane__image\">\n\t\t\t\t\t<img src=\"https://lh3.googleusercontent.com/aida-public/AB6AXuBUIqOEmKgkgvAMxfe77B5I-tD19OQD4e4fa9V_PeGGhHtvta818G_RF8-spHyQ_pI6fklL-OEXRxup4cwbRA6WYUbUmXFfG5245m0Qgzf1E3irb1MwrIaOiDqqFxyHzneUHfFLcOWVQOMtOTHZz0jjvFl15Hg1mLhBGrBOij78qrZvSdcV6gYcLBY7FL9JNuldlzO5RN8Uj0ARH__SuKWlTd-THSl_7PpjuZzz68JNi4wVjnW-nDsfgwPLAc9Am0ahMr3uq3I7VDs\" alt=\"Creamy Pesto Pasta\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"pane__title\">Creamy Pesto Pasta</div>\n\t\t\t\t<div class=\"pane__price\">$18.00</div>\n\t\t\t\t<div class=\"pane__description\">Al dnete linuine tossed in a rich and creamy basil pesto sauce, finished with sun-dired tomatoes, pine nuts, and a generous shaving of Paresan cheese. feces.</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"footer\">\n\t\t<div class=\"notice\">All prices are subject to change without notice.</div>\n\t\t<div class=\"rights\">&copy; The Golden Spoon. All Rights Reserved.</div>\n\t</div>\n</div>\n`;\n\nconst aboutView = `\n<div class=\"about\">\n\t<div class=\"header\">\n\t\t<div class=\"logo\">The Golden Spoon</div>\n\t\t<div class=\"navbar\">\n\t\t\t<button class=\"gohome\">Home</button>\n\t\t\t<button class=\"gomenu\">Menu</button>\n\t\t\t<button class=\"goabout\">About</button>\n\t\t</div>\n\t</div>\n\t<div class=\"main\">\n\t\t<div class=\"section\">\n\t\t\t<div class=\"section__text\">\n\t\t\t\t<div class=\"title\">Our Story</div>\n\t\t\t\t<div class=\"description\">At The Golden Spoon, our journey began with a simple passion: to create a dining expeience that transcends the ordinay. Founded by Chef Isabella Rossi, a culinary visionary with over two decades of expeience in Michelin-starred restaurants, our establishement is a testament to her unweavering commitment to excellence. From the moment you step through our doors, you'll be enveloped in an atmosphere of warmth and sophistication, where every detail is meticulously crafted to delight your senses. </div>\n\t\t\t</div>\n\t\t\t<div class=\"section__image\">\n\t\t\t\t<img src=\"https://lh3.googleusercontent.com/aida-public/AB6AXuAqzklwoFxBneedUtcr9C5tk058bolBGMGhozXw1zrsp9BXL-MKYU3_NyYi_ZVON2s0kBCEKDERPEMlRWNZrOYD0IAMvTEvvdv_7Tq2QqYSfDcnclh0cqOIKnKsSAF_pWizAgKVtDUeSgbVy5JeGKHGToLmCtABMmvFG6-zJ-2R0HwlCpIDDSdD1CgdTFTCxLDHldQy8HaQ_r3jHgh9IZdIfrMyy0ZWiNaQraoC3qYa05LG7-orVSnuIPT-hJBfOoy7AxiYae8_dCs\" alt=\"Dining area in a restaurant with a yellow ambient light\">\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"section reverse\">\n\t\t\t<div class=\"section__text\">\n\t\t\t\t<div class=\"title\">Our Mission</div>\n\t\t\t\t<div class=\"description\">Our mission is to provide an unforgettable culinary journey, where each dish is a masterpiece of flavor and presentation. We source only the finest, freshest ingredients, partnering with local farmers and artisans who share our dedication to qualify. Our menu is a celebration of seasonal bounty, showcasing the vibrant flavors of each ingredient in innovative and exciting ways. Whether you're joining us for a romantic dinner, a special celebration, or a casual gathering with friends, we strive to create an experience that exceesd your expectations.</div>\n\t\t\t</div>\n\t\t\t<div class=\"section__image\">\n\t\t\t\t<img src=\"https://lh3.googleusercontent.com/aida-public/AB6AXuA2DbublqcpduQCoJws-IgbVid7stdWLfgc3JYARIIQQRAStDkXC76j9fTSWWywwhg6PZeH7rciI8v0qqO0m2J47nlEO_qh7E364m2iTgNgekzErLYW1ZnXDpLW4vqIYNQ87t_HBaz8b9xyvz3dDY5DL6VX-pzISHCJKhzaLMa981RT3tL-6umrNdqpI4oN3vzrXaf5Y7S3cFBhcWVtBpsDi6CgnH5fr9ntcdicWnD4cIYL4iFPnzFRfODH0wlwcZre9M2hy5EkFss\" alt=\"Cheese Burger served in plate with salad.\">\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"section\" id=\"lastsection\">\n\t\t\t<div class=\"section__text\">\n\t\t\t\t<div class=\"title\">\n\t\t\t\t\tWhat Sets Us Apart\n\t\t\t\t</div>\n\t\t\t\t<div class=\"description\">\n\t\t\t\t\tAt The Golden Spoon, we believe that dining is more than just a meal; it's an expeience. Our commitment to exceptiona lservice, combined with our passion for culinary innovation, sets us apart. Our team of talented chefs, sommeliers, and service staff work in harmony to ensure tht every aspect of your visit is flawless. From our carefully curated wine list to our handcrafted cocktails, every detail is desinged to enhance your enjoyment. We invite you to join us and sicover the magico of Gourmet Bistro, where every dish tells a story and every visit is a celebratio.\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"footer\">\n\t\t<div class=\"logo\">The Golden Spoon</div>\n\t\t<div class=\"rights\">&copy; The Golden Spoon. All Rights Reserved.</div>\n\t</div>\n</div>\n`;\n\n//# sourceURL=webpack://odin_restaurant-page/./src/views.js?\n}");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = (document && document.baseURI) || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;