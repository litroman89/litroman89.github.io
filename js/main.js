/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/***/ (() => {



/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/***/ (() => {



/***/ }),

/***/ "./src/blocks/modules/homePage/hero/hero.js":
/*!**************************************************!*\
  !*** ./src/blocks/modules/homePage/hero/hero.js ***!
  \**************************************************/
/***/ (() => {

document.addEventListener("DOMContentLoaded", function () {
  var hero = document.querySelector(".hero");
  if (hero) {
    window.addEventListener("resize", function () {
      if (window.innerHeight < 875) {
        hero.style.backgroundPosition = "0 0";
      } else {
        hero.style.backgroundPosition = "center";
      }
    });
  }
});

/***/ }),

/***/ "./src/blocks/modules/intouch/intouch.js":
/*!***********************************************!*\
  !*** ./src/blocks/modules/intouch/intouch.js ***!
  \***********************************************/
/***/ (() => {

document.addEventListener("DOMContentLoaded", function () {
  if (!document.querySelector("form")) {
    return;
  }
  document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    var formData = new FormData(this);
    fetch("/mailer/smart.php", {
      method: "POST",
      body: formData
    }).then(function (response) {
      if (!response.ok) {
        return alert("Something went wrong. Please check your internet connection and try again.");
      }
      return alert("Thank you for your message!");
    }).then(function () {
      // document.querySelector('input').value = "";
      // document.querySelector('.overlay').style.display = 'block';

      // document.querySelector('[data-modal=msg_sent]').addEventListener('click', function() {
      //     document.querySelector('.overlay').style.display = 'none';
      // });

      document.querySelector("form").reset();
    })["catch"](function (error) {
      console.error("There has been a problem with your fetch operation:", error);
    });
    return false;
  });
});

/***/ }),

/***/ "./src/blocks/modules/mobile-header/mobile-header.js":
/*!***********************************************************!*\
  !*** ./src/blocks/modules/mobile-header/mobile-header.js ***!
  \***********************************************************/
/***/ (() => {

// OS specific
if (navigator.appVersion.indexOf("Mac") !== -1) document.querySelector(".mobileHeader .current-language") //adding class to mobile current language
.classList.add("ios");

/***/ }),

/***/ "./src/blocks/modules/mobile-menu/mobile-menu.js":
/*!*******************************************************!*\
  !*** ./src/blocks/modules/mobile-menu/mobile-menu.js ***!
  \*******************************************************/
/***/ (() => {

document.addEventListener("DOMContentLoaded", function () {
  var menuIcons = document.querySelectorAll(".mobileHeader__menu-icon");
  var menu = document.querySelector(".mobile-menu");
  menuIcons.forEach(function (icon) {
    icon.addEventListener("click", function () {
      menuIcons.forEach(function (icon) {
        icon.classList.toggle("hidden");
      });
      menu.classList.toggle("active-menu");
    });
  });
});

/***/ }),

/***/ "./src/js/import/components.js":
/*!*************************************!*\
  !*** ./src/js/import/components.js ***!
  \*************************************/
/***/ (() => {



/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_mobile_header_mobile_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/mobile-header/mobile-header */ "./src/blocks/modules/mobile-header/mobile-header.js");
/* harmony import */ var _modules_mobile_header_mobile_header__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_mobile_header_mobile_header__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_homePage_hero_hero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/homePage/hero/hero */ "./src/blocks/modules/homePage/hero/hero.js");
/* harmony import */ var _modules_homePage_hero_hero__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_homePage_hero_hero__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_mobile_menu_mobile_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/mobile-menu/mobile-menu */ "./src/blocks/modules/mobile-menu/mobile-menu.js");
/* harmony import */ var _modules_mobile_menu_mobile_menu__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_mobile_menu_mobile_menu__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modules_intouch_intouch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! %modules%/intouch/intouch */ "./src/blocks/modules/intouch/intouch.js");
/* harmony import */ var _modules_intouch_intouch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_modules_intouch_intouch__WEBPACK_IMPORTED_MODULE_5__);





// import "%modules%/homePage/team/team"; // it's bundled separately


/***/ }),

/***/ "./src/js/switchLang.js":
/*!******************************!*\
  !*** ./src/js/switchLang.js ***!
  \******************************/
/***/ (() => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
document.addEventListener("DOMContentLoaded", function () {
  // desktop language switcher
  var desktopLangSwitcher = document.querySelector(".desktopHeader .language-switcher");
  var desktopLanguageList = document.querySelector(".desktopHeader .language-list");
  var desktopCurrentIcon = document.querySelector(".desktopHeader .current-language-icon img");
  var desktopCurrentLang = document.querySelector(".desktopHeader .current-language-name");

  //mobile language switcher
  var mobileLangSwitcher = document.querySelector(".mobileHeader .language-switcher");
  var mobileLanguageList = document.querySelector(".mobileHeader .language-list");
  var mobileCurrentIcon = document.querySelector(".mobileHeader .current-language-icon img");
  var mobileCurrentLang = document.querySelector(".mobileHeader .current-language-name");

  //footer language switcher
  var footerLangSwitcher = document.querySelector(".footer-language-switcher");
  var footerLanguageList = document.querySelector(".footer-language-list");
  var footerCurrentIcon = document.querySelector(".footer-current-language-icon img");
  var footerCurrentLang = document.querySelector(".footer-current-language-name");
  var allTextFieldsOnPage = document.querySelectorAll("[data-localization]");

  //getting cuurent file name (e.g. index.html) and removing extension
  var currentFile = !!window.location.pathname.split("/").pop() ? window.location.pathname.split("/").pop().split(".")[0] // remove .html extension
  : "index";
  function changeTextLanguage(_x) {
    return _changeTextLanguage.apply(this, arguments);
  }
  function _changeTextLanguage() {
    _changeTextLanguage = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(langCode) {
      var fetchedText, textData;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return fetch("/locales/".concat(langCode.toLowerCase(), "/").concat(currentFile, ".json"));
          case 3:
            fetchedText = _context.sent;
            _context.next = 6;
            return fetchedText.json();
          case 6:
            textData = _context.sent;
            allTextFieldsOnPage.forEach(function (el) {
              var splitted = el.getAttribute("data-localization").split("-");
              if (splitted.length === 1) {
                el.textContent = textData[splitted[0]];
                return;
              }
              if (textData[splitted[0]] && textData[splitted[0]][splitted[1]]) {
                el.innerHTML = textData[splitted[0]][splitted[1]];
              }
            });
            _context.next = 12;
            break;
          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
          case 12:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 10]]);
    }));
    return _changeTextLanguage.apply(this, arguments);
  }
  function createLi(list, lang) {
    var li = document.createElement("li");
    li.innerHTML = "<div class=\"language-list-icon\"><img src=\"".concat(lang.icon, "\" alt=\"Language flag\"></div><span>").concat(lang.name, "</span>");
    li.addEventListener("click", function () {
      desktopCurrentIcon.src = lang.icon;
      desktopCurrentLang.textContent = lang.code;
      mobileCurrentIcon.src = lang.icon;
      mobileCurrentLang.textContent = lang.code;
      footerCurrentIcon.src = lang.icon;
      footerCurrentLang.textContent = lang.name;
      list.classList.add("hidden-lang-list");
      changeTextLanguage(lang.code);
    });
    return li;
  }
  function fillLanguageLists() {
    //getting languages list and filling it on a page
    fetch("/locales/languages.json").then(function (response) {
      return response.json();
    }).then(function (data) {
      data.languages.forEach(function (lang) {
        desktopLanguageList.appendChild(createLi(desktopLanguageList, lang));
        mobileLanguageList.appendChild(createLi(mobileLanguageList, lang));
        footerLanguageList.appendChild(createLi(footerLanguageList, lang));
      });
    });
  }
  fillLanguageLists();

  // allHeaderLangSwitchers.forEach((switcher) => {
  //   switcher.addEventListener("mouseover", (e) => {
  //     allLanguageLists.forEach((list) => {
  //       list.classList.remove("hidden-lang-list");
  //     });
  //   });

  //   switcher.addEventListener("mouseleave", (e) => {
  //     allLanguageLists.forEach((list) => {
  //       list.classList.add("hidden-lang-list");
  //     });
  //   });
  // });

  function toggleDropdown(e, list) {
    if (!list.contains(e.target)) {
      list.classList.toggle("hidden-lang-list");
    }
  }
  desktopLangSwitcher.addEventListener("click", function (e) {
    toggleDropdown(e, desktopLanguageList);
  });
  mobileLangSwitcher.addEventListener("click", function (e) {
    toggleDropdown(e, mobileLanguageList);
  });
  footerLangSwitcher.addEventListener("click", function (e) {
    toggleDropdown(e, footerLanguageList);
  });
  function onClickOutside(e, switcher, list) {
    if (!switcher.contains(e.target) && !list.classList.contains("hidden-lang-list")) {
      list.classList.add("hidden-lang-list");
    }
  }
  document.addEventListener("click", function (e) {
    onClickOutside(e, desktopLangSwitcher, desktopLanguageList);
    onClickOutside(e, mobileLangSwitcher, mobileLanguageList);
    onClickOutside(e, footerLangSwitcher, footerLanguageList);
  });
});

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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/components */ "./src/js/import/components.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_import_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _switchLang__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./switchLang */ "./src/js/switchLang.js");
/* harmony import */ var _switchLang__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_switchLang__WEBPACK_IMPORTED_MODULE_2__);



})();

/******/ })()
;
//# sourceMappingURL=main.js.map