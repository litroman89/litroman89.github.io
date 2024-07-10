/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/modules/homePage/team/team.js":
/*!**************************************************!*\
  !*** ./src/blocks/modules/homePage/team/team.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _amcharts_amcharts5__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @amcharts/amcharts5 */ "./node_modules/@amcharts/amcharts5/.internal/core/Root.js");
/* harmony import */ var _amcharts_amcharts5__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @amcharts/amcharts5 */ "./node_modules/@amcharts/amcharts5/.internal/core/util/Color.js");
/* harmony import */ var _amcharts_amcharts5__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @amcharts/amcharts5 */ "./node_modules/@amcharts/amcharts5/.internal/core/render/Container.js");
/* harmony import */ var _amcharts_amcharts5__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @amcharts/amcharts5 */ "./node_modules/@amcharts/amcharts5/.internal/core/render/Circle.js");
/* harmony import */ var _amcharts_amcharts5__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @amcharts/amcharts5 */ "./node_modules/@amcharts/amcharts5/.internal/core/render/Label.js");
/* harmony import */ var _amcharts_amcharts5__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @amcharts/amcharts5 */ "./node_modules/@amcharts/amcharts5/.internal/core/util/Percent.js");
/* harmony import */ var _amcharts_amcharts5__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @amcharts/amcharts5 */ "./node_modules/@amcharts/amcharts5/.internal/core/render/Bullet.js");
/* harmony import */ var _amcharts_amcharts5__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @amcharts/amcharts5 */ "./node_modules/@amcharts/amcharts5/.internal/core/util/Ease.js");
/* harmony import */ var _amcharts_amcharts5_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @amcharts/amcharts5/map */ "./node_modules/@amcharts/amcharts5/.internal/charts/map/MapChart.js");
/* harmony import */ var _amcharts_amcharts5_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @amcharts/amcharts5/map */ "./node_modules/d3-geo/src/projection/orthographic.js");
/* harmony import */ var _amcharts_amcharts5_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @amcharts/amcharts5/map */ "./node_modules/@amcharts/amcharts5/.internal/charts/map/MapPolygonSeries.js");
/* harmony import */ var _amcharts_amcharts5_map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @amcharts/amcharts5/map */ "./node_modules/@amcharts/amcharts5/.internal/charts/map/ClusteredPointSeries.js");
/* harmony import */ var _amcharts_amcharts5_themes_Animated__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @amcharts/amcharts5/themes/Animated */ "./node_modules/@amcharts/amcharts5/themes/Animated.js");
/* harmony import */ var _worldMoroccoLow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./worldMoroccoLow */ "./src/blocks/modules/homePage/team/worldMoroccoLow.js");
/* harmony import */ var _worldMoroccoLow__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_worldMoroccoLow__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






// Set data
// var cities = [
//   { title: "Vienna", latitude: 48.2092, longitude: 16.3728 },
//   { title: "Minsk", latitude: 53.9678, longitude: 27.5766 },
//   { title: "Brussels", latitude: 50.8371, longitude: 4.3676 },
//   { title: "Sarajevo", latitude: 43.8608, longitude: 18.4214 },
//   { title: "Sofia", latitude: 42.7105, longitude: 23.3238 },
//   { title: "Zagreb", latitude: 45.815, longitude: 15.9785 },
//   { title: "Pristina", latitude: 42.666667, longitude: 21.166667 },
//   { title: "Prague", latitude: 50.0878, longitude: 14.4205 },
//   { title: "Copenhagen", latitude: 55.6763, longitude: 12.5681 },
//   { title: "Tallinn", latitude: 59.4389, longitude: 24.7545 },
//   { title: "Helsinki", latitude: 60.1699, longitude: 24.9384 },
//   { title: "Paris", latitude: 48.8567, longitude: 2.351 },
//   { title: "Berlin", latitude: 52.5235, longitude: 13.4115 },
//   { title: "Athens", latitude: 37.9792, longitude: 23.7166 },
//   { title: "Budapest", latitude: 47.4984, longitude: 19.0408 },
//   { title: "Reykjavik", latitude: 64.1353, longitude: -21.8952 },
//   { title: "Dublin", latitude: 53.3441, longitude: -6.2675 },
//   { title: "Rome", latitude: 41.8955, longitude: 12.4823 },
//   { title: "Riga", latitude: 56.9465, longitude: 24.1049 },
//   { title: "Vaduz", latitude: 47.1411, longitude: 9.5215 },
//   { title: "Vilnius", latitude: 54.6896, longitude: 25.2799 },
//   { title: "Luxembourg", latitude: 49.61, longitude: 6.1296 },
//   { title: "Skopje", latitude: 42.0024, longitude: 21.4361 },
//   { title: "Valletta", latitude: 35.9042, longitude: 14.5189 },
//   { title: "Chisinau", latitude: 47.0167, longitude: 28.8497 },
//   { title: "Monaco", latitude: 43.7325, longitude: 7.4189 },
//   { title: "Podgorica", latitude: 42.4602, longitude: 19.2595 },
//   { title: "Amsterdam", latitude: 52.3738, longitude: 4.891 },
//   { title: "Oslo", latitude: 59.9138, longitude: 10.7387 },
//   { title: "Warsaw", latitude: 52.2297, longitude: 21.0122 },
//   { title: "Lisbon", latitude: 38.7072, longitude: -9.1355 },
//   { title: "Bucharest", latitude: 44.4479, longitude: 26.0979 },
//   { title: "Moscow", latitude: 55.7558, longitude: 37.6176 },
//   { title: "San Marino", latitude: 43.9424, longitude: 12.4578 },
//   { title: "Belgrade", latitude: 44.8048, longitude: 20.4781 },
//   { title: "Bratislava", latitude: 48.2116, longitude: 17.1547 },
//   { title: "Ljubljana", latitude: 46.0514, longitude: 14.506 },
//   { title: "Madrid", latitude: 40.4167, longitude: -3.7033 },
//   { title: "Stockholm", latitude: 59.3328, longitude: 18.0645 },
//   { title: "Bern", latitude: 46.948, longitude: 7.4481 },
//   { title: "Kiev", latitude: 50.4422, longitude: 30.5367 },
//   { title: "London", latitude: 51.5002, longitude: -0.1262 },
//   { title: "Gibraltar", latitude: 36.1377, longitude: -5.3453 },
//   { title: "Saint Peter Port", latitude: 49.466, longitude: -2.5522 },
//   { title: "Douglas", latitude: 54.167, longitude: -4.4821 },
//   { title: "Saint Helier", latitude: 49.1919, longitude: -2.1071 },
//   { title: "Longyearbyen", latitude: 78.2186, longitude: 15.6488 },
//   { title: "Kabul", latitude: 34.5155, longitude: 69.1952 },
//   { title: "Yerevan", latitude: 40.1596, longitude: 44.509 },
//   { title: "Baku", latitude: 40.3834, longitude: 49.8932 },
//   { title: "Manama", latitude: 26.1921, longitude: 50.5354 },
//   { title: "Dhaka", latitude: 23.7106, longitude: 90.3978 },
//   { title: "Thimphu", latitude: 27.4405, longitude: 89.673 },
//   { title: "Bandar Seri Begawan", latitude: 4.9431, longitude: 114.9425 },
//   { title: "Phnom Penh", latitude: 11.5434, longitude: 104.8984 },
//   { title: "Peking", latitude: 39.9056, longitude: 116.3958 },
//   { title: "Nicosia", latitude: 35.1676, longitude: 33.3736 },
//   { title: "T'bilisi", latitude: 41.701, longitude: 44.793 },
//   { title: "New Delhi", latitude: 28.6353, longitude: 77.225 },
//   { title: "Jakarta", latitude: -6.1862, longitude: 106.8063 },
//   { title: "Teheran", latitude: 35.7061, longitude: 51.4358 },
//   { title: "Baghdad", latitude: 33.3157, longitude: 44.3922 },
//   { title: "Jerusalem", latitude: 31.76, longitude: 35.17 },
//   { title: "Tokyo", latitude: 35.6785, longitude: 139.6823 },
//   { title: "Amman", latitude: 31.9394, longitude: 35.9349 },
//   { title: "Astana", latitude: 51.1796, longitude: 71.4475 },
//   { title: "Kuwait", latitude: 29.3721, longitude: 47.9824 },
//   { title: "Bishkek", latitude: 42.8679, longitude: 74.5984 },
//   { title: "Vientiane", latitude: 17.9689, longitude: 102.6137 },
//   { title: "Beyrouth / Beirut", latitude: 33.8872, longitude: 35.5134 },
//   { title: "Kuala Lumpur", latitude: 3.1502, longitude: 101.7077 },
//   { title: "Ulan Bator", latitude: 47.9138, longitude: 106.922 },
//   { title: "Pyinmana", latitude: 19.7378, longitude: 96.2083 },
//   { title: "Kathmandu", latitude: 27.7058, longitude: 85.3157 },
//   { title: "Muscat", latitude: 23.6086, longitude: 58.5922 },
//   { title: "Islamabad", latitude: 33.6751, longitude: 73.0946 },
//   { title: "Manila", latitude: 14.579, longitude: 120.9726 },
//   { title: "Doha", latitude: 25.2948, longitude: 51.5082 },
//   { title: "Riyadh", latitude: 24.6748, longitude: 46.6977 },
//   { title: "Singapore", latitude: 1.2894, longitude: 103.85 },
//   { title: "Seoul", latitude: 37.5139, longitude: 126.9828 },
//   { title: "Colombo", latitude: 6.9155, longitude: 79.8572 },
//   { title: "Damascus", latitude: 33.5158, longitude: 36.2939 },
//   { title: "Taipei", latitude: 25.0338, longitude: 121.5645 },
//   { title: "Dushanbe", latitude: 38.5737, longitude: 68.7738 },
//   { title: "Bangkok", latitude: 13.7573, longitude: 100.502 },
//   { title: "Dili", latitude: -8.5662, longitude: 125.588 },
//   { title: "Ankara", latitude: 39.9439, longitude: 32.856 },
//   { title: "Ashgabat", latitude: 37.9509, longitude: 58.3794 },
//   { title: "Abu Dhabi", latitude: 24.4764, longitude: 54.3705 },
//   { title: "Tashkent", latitude: 41.3193, longitude: 69.2481 },
//   { title: "Hanoi", latitude: 21.0341, longitude: 105.8372 },
//   { title: "Sanaa", latitude: 15.3556, longitude: 44.2081 },
//   { title: "Buenos Aires", latitude: -34.6118, longitude: -58.4173 },
//   { title: "Bridgetown", latitude: 13.0935, longitude: -59.6105 },
//   { title: "Belmopan", latitude: 17.2534, longitude: -88.7713 },
//   { title: "Sucre", latitude: -19.0421, longitude: -65.2559 },
//   { title: "Brasilia", latitude: -15.7801, longitude: -47.9292 },
//   { title: "Ottawa", latitude: 45.4235, longitude: -75.6979 },
//   { title: "Santiago", latitude: -33.4691, longitude: -70.642 },
//   { title: "Bogota", latitude: 4.6473, longitude: -74.0962 },
//   { title: "San Jose", latitude: 9.9402, longitude: -84.1002 },
//   { title: "Havana", latitude: 23.1333, longitude: -82.3667 },
//   { title: "Roseau", latitude: 15.2976, longitude: -61.39 },
//   { title: "Santo Domingo", latitude: 18.479, longitude: -69.8908 },
//   { title: "Quito", latitude: -0.2295, longitude: -78.5243 },
//   { title: "San Salvador", latitude: 13.7034, longitude: -89.2073 },
//   { title: "Guatemala", latitude: 14.6248, longitude: -90.5328 },
//   { title: "Ciudad de Mexico", latitude: 19.4271, longitude: -99.1276 },
//   { title: "Managua", latitude: 12.1475, longitude: -86.2734 },
//   { title: "Panama", latitude: 8.9943, longitude: -79.5188 },
//   { title: "Asuncion", latitude: -25.3005, longitude: -57.6362 },
//   { title: "Lima", latitude: -12.0931, longitude: -77.0465 },
//   { title: "Castries", latitude: 13.9972, longitude: -60.0018 },
//   { title: "Paramaribo", latitude: 5.8232, longitude: -55.1679 },
//   { title: "Washington D.C.", latitude: 38.8921, longitude: -77.0241 },
//   { title: "Montevideo", latitude: -34.8941, longitude: -56.0675 },
//   { title: "Caracas", latitude: 10.4961, longitude: -66.8983 },
//   { title: "Oranjestad", latitude: 12.5246, longitude: -70.0265 },
//   { title: "Cayenne", latitude: 4.9346, longitude: -52.3303 },
//   { title: "Plymouth", latitude: 16.6802, longitude: -62.2014 },
//   { title: "San Juan", latitude: 18.45, longitude: -66.0667 },
//   { title: "Algiers", latitude: 36.7755, longitude: 3.0597 },
//   { title: "Luanda", latitude: -8.8159, longitude: 13.2306 },
//   { title: "Porto-Novo", latitude: 6.4779, longitude: 2.6323 },
//   { title: "Gaborone", latitude: -24.657, longitude: 25.9089 },
//   { title: "Ouagadougou", latitude: 12.3569, longitude: -1.5352 },
//   { title: "Bujumbura", latitude: -3.3818, longitude: 29.3622 },
//   { title: "Yaounde", latitude: 3.8612, longitude: 11.5217 },
//   { title: "Bangui", latitude: 4.3621, longitude: 18.5873 },
//   { title: "Brazzaville", latitude: -4.2767, longitude: 15.2662 },
//   { title: "Kinshasa", latitude: -4.3369, longitude: 15.3271 },
//   { title: "Yamoussoukro", latitude: 6.8067, longitude: -5.2728 },
//   { title: "Djibouti", latitude: 11.5806, longitude: 43.1425 },
//   { title: "Cairo", latitude: 30.0571, longitude: 31.2272 },
//   { title: "Asmara", latitude: 15.3315, longitude: 38.9183 },
//   { title: "Addis Abeba", latitude: 9.0084, longitude: 38.7575 },
//   { title: "Libreville", latitude: 0.3858, longitude: 9.4496 },
//   { title: "Banjul", latitude: 13.4399, longitude: -16.6775 },
//   { title: "Accra", latitude: 5.5401, longitude: -0.2074 },
//   { title: "Conakry", latitude: 9.537, longitude: -13.6785 },
//   { title: "Bissau", latitude: 11.8598, longitude: -15.5875 },
//   { title: "Nairobi", latitude: -1.2762, longitude: 36.7965 },
//   { title: "Maseru", latitude: -29.2976, longitude: 27.4854 },
//   { title: "Monrovia", latitude: 6.3106, longitude: -10.8047 },
//   { title: "Tripoli", latitude: 32.883, longitude: 13.1897 },
//   { title: "Antananarivo", latitude: -18.9201, longitude: 47.5237 },
//   { title: "Lilongwe", latitude: -13.9899, longitude: 33.7703 },
//   { title: "Bamako", latitude: 12.653, longitude: -7.9864 },
//   { title: "Nouakchott", latitude: 18.0669, longitude: -15.99 },
//   { title: "Port Louis", latitude: -20.1654, longitude: 57.4896 },
//   { title: "Rabat", latitude: 33.9905, longitude: -6.8704 },
//   { title: "Maputo", latitude: -25.9686, longitude: 32.5804 },
//   { title: "Windhoek", latitude: -22.5749, longitude: 17.0805 },
//   { title: "Niamey", latitude: 13.5164, longitude: 2.1157 },
//   { title: "Abuja", latitude: 9.058, longitude: 7.4891 },
//   { title: "Kigali", latitude: -1.9441, longitude: 30.0619 },
//   { title: "Dakar", latitude: 14.6953, longitude: -17.4439 },
//   { title: "Freetown", latitude: 8.4697, longitude: -13.2659 },
//   { title: "Mogadishu", latitude: 2.0411, longitude: 45.3426 },
//   { title: "Pretoria", latitude: -25.7463, longitude: 28.1876 },
//   { title: "Mbabane", latitude: -26.3186, longitude: 31.141 },
//   { title: "Dodoma", latitude: -6.167, longitude: 35.7497 },
//   { title: "Lome", latitude: 6.1228, longitude: 1.2255 },
//   { title: "Tunis", latitude: 36.8117, longitude: 10.1761 },
// ];

document.addEventListener("DOMContentLoaded", /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(event) {
    var cities, getTickets, _getTickets, root, chart, polygonSeries, backgroundSeries, pointSeries, i, city, addCity, mapNewWidth;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          mapNewWidth = function _mapNewWidth() {
            if (window.innerWidth < 1371) {
              // let newWidth = window.innerWidth - 590 - 40;
              var newWidth = "60%";
              if (window.innerWidth < 600) {
                newWidth = "80%";
              }
              document.querySelector("#map").style.width = newWidth;
            } else {
              document.querySelector("#map").style.width = 690 + "px";
            }
          };
          addCity = function _addCity(longitude, latitude, title) {
            pointSeries.data.push({
              geometry: {
                type: "Point",
                coordinates: [longitude, latitude]
              },
              title: title
            });
          };
          _getTickets = function _getTickets3() {
            _getTickets = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var response, data, arrOfCities;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return fetch("https://mobileapp.oursupport.co/api/v1/tickets-countries");
                  case 2:
                    response = _context.sent;
                    _context.next = 5;
                    return response.json();
                  case 5:
                    data = _context.sent;
                    arrOfCities = data.reduce(function (results, item) {
                      if (item.latitude) {
                        results.push({
                          title: item.name,
                          latitude: item.latitude,
                          longitude: item.longitude
                        });
                      }
                      return results;
                    }, []);
                    return _context.abrupt("return", arrOfCities);
                  case 8:
                  case "end":
                    return _context.stop();
                }
              }, _callee);
            }));
            return _getTickets.apply(this, arguments);
          };
          getTickets = function _getTickets2() {
            return _getTickets.apply(this, arguments);
          };
          _context2.next = 6;
          return getTickets();
        case 6:
          cities = _context2.sent;
          root = _amcharts_amcharts5__WEBPACK_IMPORTED_MODULE_1__.Root["new"]("map");
          root.setThemes([_amcharts_amcharts5_themes_Animated__WEBPACK_IMPORTED_MODULE_2__["default"]["new"](root)]);
          chart = root.container.children.push(_amcharts_amcharts5_map__WEBPACK_IMPORTED_MODULE_3__.MapChart["new"](root, {
            panX: "rotateX",
            // panY: "translateY",
            panY: "none",
            // projection: am5map.geoNaturalEarth1(),
            projection: _amcharts_amcharts5_map__WEBPACK_IMPORTED_MODULE_4__["default"](),
            zoomLevel: 1,
            centerX: 0,
            centerY: 0,
            rotationZ: 10,
            rotationY: -20
          })); // root.setThemes([am5themes_Responsive.new(root)]);
          // let zoomControl = chart.set("zoomControl", am5map.ZoomControl.new(root, {}));
          // //changing color for zoom btn
          // zoomControl.plusButton.get("background").setAll({
          //   fill: am5.color(0x001efc),
          // });
          // zoomControl.minusButton.get("background").setAll({
          //   fill: am5.color(0x001efc),
          // });
          // console.log(zoomControl.plusButton._settings);
          // Create polygon series
          polygonSeries = chart.series.push(_amcharts_amcharts5_map__WEBPACK_IMPORTED_MODULE_5__.MapPolygonSeries["new"](root, {
            geoJSON: am5geodata_worldMoroccoLow,
            exclude: ["AQ"]
          }));
          polygonSeries.mapPolygons.template.setAll({
            fill: "#e7e7e7",
            fillOpacity: 0.15,
            strokeWidth: 0.5,
            stroke: "#040829"
          });
          backgroundSeries = chart.series.unshift(_amcharts_amcharts5_map__WEBPACK_IMPORTED_MODULE_5__.MapPolygonSeries["new"](root, {}));
          backgroundSeries.mapPolygons.template.setAll({
            fill: _amcharts_amcharts5__WEBPACK_IMPORTED_MODULE_6__.color(0x167e9e),
            stroke: _amcharts_amcharts5__WEBPACK_IMPORTED_MODULE_6__.color(0xedf7fa)
          });
          pointSeries = chart.series.push(_amcharts_amcharts5_map__WEBPACK_IMPORTED_MODULE_7__.ClusteredPointSeries["new"](root, {}));
          pointSeries.set("clusteredBullet", function (root) {
            var container = _amcharts_amcharts5__WEBPACK_IMPORTED_MODULE_8__.Container["new"](root, {
              cursorOverStyle: "pointer"
            });
            var circle1 = container.children.push(_amcharts_amcharts5__WEBPACK_IMPORTED_MODULE_9__.Circle["new"](root, {
              radius: 8,
              tooltipY: 0,
              fill: _amcharts_amcharts5__WEBPACK_IMPORTED_MODULE_6__.color(0x001efc)
            }));
            var circle2 = container.children.push(_amcharts_amcharts5__WEBPACK_IMPORTED_MODULE_9__.Circle["new"](root, {
              radius: 12,
              fillOpacity: 0.3,
              tooltipY: 0,
              fill: _amcharts_amcharts5__WEBPACK_IMPORTED_MODULE_6__.color(0x001efc)
            }));
            var circle3 = container.children.push(_amcharts_amcharts5__WEBPACK_IMPORTED_MODULE_9__.Circle["new"](root, {
              radius: 16,
              fillOpacity: 0.3,
              tooltipY: 0,
              fill: _amcharts_amcharts5__WEBPACK_IMPORTED_MODULE_6__.color(0x001efc)
            }));
            var label = container.children.push(_amcharts_amcharts5__WEBPACK_IMPORTED_MODULE_10__.Label["new"](root, {
              centerX: _amcharts_amcharts5__WEBPACK_IMPORTED_MODULE_11__.p50,
              centerY: _amcharts_amcharts5__WEBPACK_IMPORTED_MODULE_11__.p50,
              fill: _amcharts_amcharts5__WEBPACK_IMPORTED_MODULE_6__.color(0xffffff),
              populateText: true,
              fontSize: "8",
              text: "{value}"
            }));
            container.events.on("click", function (e) {
              pointSeries.zoomToCluster(e.target.dataItem);
            });
            return _amcharts_amcharts5__WEBPACK_IMPORTED_MODULE_12__.Bullet["new"](root, {
              sprite: container
            });
          });
          pointSeries.bullets.push(function () {
            var circle = _amcharts_amcharts5__WEBPACK_IMPORTED_MODULE_9__.Circle["new"](root, {
              radius: 6,
              tooltipY: 0,
              fill: _amcharts_amcharts5__WEBPACK_IMPORTED_MODULE_6__.color(0x001efc),
              tooltipText: "{title}"
            });
            return _amcharts_amcharts5__WEBPACK_IMPORTED_MODULE_12__.Bullet["new"](root, {
              sprite: circle
            });
          });
          chart.animate({
            key: "rotationX",
            to: -360,
            loops: Infinity,
            duration: 20000,
            easing: _amcharts_amcharts5__WEBPACK_IMPORTED_MODULE_13__.linear
          });
          for (i = 0; i < cities.length; i++) {
            city = cities[i];
            addCity(city.longitude, city.latitude, city.title);
          }
          // Make stuff animate on load
          chart.appear(1000, 100);
          mapNewWidth();
          window.addEventListener("resize", mapNewWidth);
        case 22:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());

/***/ }),

/***/ "./src/blocks/modules/homePage/team/worldMoroccoLow.js":
/*!*************************************************************!*\
  !*** ./src/blocks/modules/homePage/team/worldMoroccoLow.js ***!
  \*************************************************************/
/***/ (() => {

window.am5geodata_worldMoroccoLow = function () {
  var map = {
    "type": "FeatureCollection",
    "features": [{
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[-69.8992, 12.4518], [-69.9421, 12.4385], [-70.0662, 12.5469], [-69.9732, 12.5677], [-69.8992, 12.4518]]]
      },
      "properties": {
        "id": "AW",
        "name": "Aruba"
      },
      "id": "AW"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[-61.7161, 17.0368], [-61.8597, 17.0133], [-61.8173, 17.169], [-61.7161, 17.0368]]]
      },
      "properties": {
        "id": "AG",
        "name": "Antigua and Barbuda"
      },
      "id": "AG"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[74.8912, 37.2317], [74.5414, 37.0221], [74.0016, 36.8233], [73.7691, 36.8885], [72.623, 36.8295], [71.6207, 36.4367], [71.1852, 36.042], [71.4275, 35.8338], [71.6207, 35.1831], [70.9654, 34.5306], [71.0516, 34.0498], [69.8681, 33.8976], [70.2841, 33.3689], [69.9201, 33.1123], [69.5015, 33.02], [69.2414, 32.4336], [69.2791, 31.9369], [68.869, 31.6342], [68.2137, 31.8073], [67.5781, 31.5064], [67.2874, 31.2178], [66.9242, 31.3057], [66.3973, 30.9124], [66.1771, 29.8355], [65.0954, 29.5594], [64.521, 29.5643], [64.0988, 29.3921], [63.5675, 29.4982], [62.4765, 29.4085], [60.8433, 29.8586], [61.104, 30.1285], [61.7844, 30.8321], [61.6602, 31.3825], [60.8541, 31.4833], [60.8292, 32.2494], [60.5606, 33.1376], [60.9171, 33.5052], [60.5109, 33.6389], [60.4856, 34.0947], [61.0799, 34.8554], [61.262, 35.6194], [62.6105, 35.2333], [63.0567, 35.4459], [63.1086, 35.8187], [63.8622, 36.0123], [64.5107, 36.3408], [64.8162, 37.1322], [65.5549, 37.2512], [65.7648, 37.569], [66.5221, 37.3484], [67.069, 37.3347], [67.7592, 37.1721], [68.0678, 36.9498], [68.9604, 37.3248], [69.2649, 37.1083], [69.4921, 37.553], [70.2513, 37.664], [70.2148, 37.9246], [70.8789, 38.4563], [71.2557, 38.3067], [71.5518, 37.933], [71.4329, 37.1273], [71.8021, 36.6941], [72.8955, 37.2676], [73.4815, 37.4718], [73.7495, 37.2317], [74.2596, 37.4154], [74.8912, 37.2317]]]
      },
      "properties": {
        "id": "AF",
        "name": "Afghanistan"
      },
      "id": "AF"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [[[[23.9665, -10.8716], [23.9914, -12.4221], [23.8431, -13.001], [21.9788, -13.001], [21.9798, -15.9555], [22.1506, -16.5973], [23.3807, -17.6406], [21.4169, -18.0006], [20.6249, -17.9965], [20.3928, -17.8874], [19.6395, -17.8687], [18.8259, -17.7662], [18.3962, -17.3995], [16.9137, -17.3915], [13.9382, -17.3889], [13.4038, -17.0079], [13.1011, -16.9675], [12.548, -17.2125], [11.7431, -17.2495], [11.819, -16.7044], [11.7507, -15.8321], [11.9677, -15.634], [12.2802, -14.6376], [12.5506, -13.4377], [12.9834, -12.7758], [13.417, -12.5202], [13.7855, -11.8127], [13.8477, -11.0545], [13.2093, -9.7033], [12.9984, -9.0481], [13.3588, -8.6872], [13.3784, -8.3699], [12.8623, -7.2317], [12.8236, -6.9547], [12.5213, -6.5903], [12.3024, -6.0926], [13.0681, -5.865], [14.3986, -5.8925], [16.3153, -5.8658], [16.7178, -6.2413], [16.7094, -6.4718], [16.9847, -7.2574], [17.5359, -8.076], [18.6532, -7.9361], [19.3408, -7.9667], [19.5276, -7.1447], [19.8752, -6.9862], [20.482, -6.9162], [20.6076, -7.2779], [21.7512, -7.3053], [21.9056, -8.6934], [21.8132, -9.4689], [22.1976, -10.0406], [22.3068, -10.6913], [22.5613, -11.0558], [23.8339, -11.0136], [23.9665, -10.8716]]], [[[12.2137, -5.7589], [12.0183, -5.0042], [12.3846, -4.6189], [12.8809, -4.4454], [13.0726, -4.635], [12.8297, -4.7366], [12.5221, -5.1489], [12.5035, -5.6959], [12.2137, -5.7589]]]]
      },
      "properties": {
        "id": "AO",
        "name": "Angola"
      },
      "id": "AO"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[-63.0012, 18.222], [-63.1534, 18.2002], [-63.026, 18.27], [-63.0012, 18.222]]]
      },
      "properties": {
        "id": "AI",
        "name": "Anguilla"
      },
      "id": "AI"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[20.0638, 42.5473], [20.4856, 42.2232], [20.5659, 41.8739], [20.4891, 41.2724], [20.9641, 40.8498], [21.0312, 40.6585], [20.6575, 40.1175], [20.0013, 39.7095], [19.8518, 40.0437], [19.398, 40.2848], [19.4407, 41.4246], [19.3426, 41.869], [19.2808, 42.1727], [19.6546, 42.6285], [20.0638, 42.5473]]]
      },
      "properties": {
        "id": "AL",
        "name": "Albania"
      },
      "id": "AL"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[19.9893, 60.3511], [20.2588, 60.2612], [19.746, 60.0989], [19.687, 60.2677], [19.9893, 60.3511]]]
      },
      "properties": {
        "id": "AX",
        "name": "Aland Islands"
      },
      "id": "AX"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[1.7059, 42.5033], [1.4861, 42.4345], [1.4285, 42.5961], [1.7059, 42.5033]]]
      },
      "properties": {
        "id": "AD",
        "name": "Andorra"
      },
      "id": "AD"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[56.2979, 25.6505], [56.388, 24.9793], [56.064, 24.7387], [55.7959, 24.8679], [55.7608, 24.2425], [55.1997, 23.0347], [55.186, 22.7039], [55.1043, 22.6214], [52.5551, 22.933], [51.5927, 24.0786], [51.5682, 24.286], [51.9061, 23.9855], [52.6482, 24.1546], [53.8933, 24.0769], [54.3973, 24.278], [54.7469, 24.8102], [55.0981, 25.0415], [55.523, 25.4983], [55.9411, 25.7939], [56.0804, 26.0624], [56.2979, 25.6505]]]
      },
      "properties": {
        "id": "AE",
        "name": "United Arab Emirates"
      },
      "id": "AE"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [[[[-68.6533, -54.8538], [-68.6299, -52.6525], [-68.2781, -52.984], [-68.0085, -53.5638], [-67.2943, -54.0499], [-65.3461, -54.8777], [-66.5112, -55.0321], [-66.9305, -54.9248], [-68.6533, -54.8538]]], [[[-62.6509, -22.2339], [-62.3726, -22.439], [-61.7985, -23.1821], [-61.033, -23.7557], [-59.8924, -24.0933], [-59.373, -24.4539], [-58.3654, -24.9594], [-57.8216, -25.1366], [-57.5873, -25.405], [-57.8907, -26.0065], [-58.2031, -26.3816], [-58.1913, -26.6302], [-58.6186, -27.1322], [-57.1118, -27.47], [-56.3705, -27.5375], [-56.0673, -27.3076], [-55.7147, -27.4151], [-55.4266, -27.0094], [-55.1359, -26.9311], [-54.7552, -26.533], [-54.6159, -25.576], [-54.1546, -25.5231], [-53.8912, -25.6687], [-53.6712, -26.225], [-53.8381, -27.1212], [-54.3271, -27.4235], [-54.8291, -27.5509], [-55.1015, -27.8669], [-55.7256, -28.2043], [-56.9387, -29.5949], [-57.609, -30.188], [-57.8724, -30.5911], [-57.8105, -30.8587], [-58.189, -31.924], [-58.2011, -32.4718], [-58.1709, -32.9592], [-58.4244, -33.1115], [-58.5471, -33.6637], [-58.2834, -34.6837], [-57.3036, -35.1885], [-57.1589, -35.5057], [-57.354, -35.7202], [-57.265, -36.1441], [-56.6982, -36.4265], [-56.6721, -36.8514], [-57.3957, -37.7448], [-57.5471, -38.0858], [-58.1792, -38.4359], [-59.8282, -38.8381], [-61.1122, -38.9931], [-62.067, -38.9189], [-62.3382, -39.1507], [-62.0537, -39.3739], [-62.2869, -39.8955], [-62.3951, -40.8906], [-62.959, -41.1096], [-63.7731, -41.1499], [-64.8531, -40.8139], [-65.1334, -40.8804], [-65.0591, -41.9698], [-64.4205, -42.4336], [-63.596, -42.4066], [-63.6925, -42.8052], [-64.1306, -42.8615], [-64.6504, -42.5313], [-65.0269, -42.759], [-64.4323, -43.0591], [-64.9856, -43.2935], [-65.2837, -43.6299], [-65.3614, -44.4773], [-65.6476, -44.6615], [-65.6388, -45.0078], [-66.1901, -44.9647], [-66.9414, -45.2573], [-67.5566, -45.9702], [-67.5633, -46.3453], [-66.7769, -47.0057], [-65.9986, -47.0936], [-65.7382, -47.3449], [-65.8101, -47.941], [-66.3934, -48.3423], [-67.033, -48.6277], [-67.6849, -49.2465], [-67.7835, -49.8592], [-68.9396, -50.3824], [-69.2352, -50.9506], [-69.0326, -51.6364], [-68.4432, -52.3568], [-69.9603, -52.0084], [-71.9188, -51.9897], [-72.4077, -51.541], [-72.2763, -50.9102], [-72.5098, -50.6075], [-73.153, -50.7384], [-73.5012, -50.1254], [-73.5762, -49.5829], [-72.6143, -48.7929], [-72.3549, -48.3658], [-72.518, -47.8762], [-72.346, -47.4926], [-71.905, -47.2015], [-71.9402, -46.8312], [-71.6952, -46.5782], [-71.8757, -46.1606], [-71.6315, -45.9537], [-71.7463, -45.5791], [-71.3537, -45.2306], [-71.5962, -44.9793], [-71.2611, -44.7633], [-71.2128, -44.4413], [-71.82, -44.3832], [-71.6802, -43.9295], [-71.905, -43.44], [-71.7816, -43.1669], [-72.1464, -42.9898], [-72.1247, -42.2983], [-71.75, -42.0466], [-71.9114, -41.6506], [-71.9321, -40.6918], [-71.6952, -40.3354], [-71.7199, -39.6354], [-71.5394, -39.6025], [-71.4256, -38.9855], [-70.9517, -38.7383], [-71.0281, -38.0414], [-71.1677, -37.7621], [-71.0556, -36.5237], [-70.4049, -36.0616], [-70.4703, -35.326], [-70.2899, -34.733], [-69.8524, -34.2243], [-69.7978, -33.3987], [-70.0198, -33.2717], [-70.1696, -32.4718], [-70.5853, -31.5695], [-70.5196, -31.1487], [-70.1613, -30.4401], [-69.9563, -30.358], [-69.9277, -29.7695], [-70.0269, -29.3241], [-69.8278, -29.1031], [-69.6569, -28.4139], [-69.1744, -27.9246], [-68.8463, -27.1536], [-68.346, -27.028], [-68.5811, -26.5183], [-68.4144, -26.1538], [-68.6002, -25.4859], [-68.3843, -25.0921], [-68.562, -24.8378], [-68.2502, -24.3921], [-67.3562, -24.0338], [-67.0088, -23.0014], [-67.1948, -22.8216], [-66.7117, -22.2162], [-66.3652, -22.1136], [-66.0986, -21.8352], [-65.771, -22.0994], [-65.058, -22.103], [-64.6056, -22.229], [-64.3739, -22.7613], [-63.9762, -22.0728], [-63.8186, -22.0053], [-62.8433, -21.9973], [-62.6509, -22.2339]]]]
      },
      "properties": {
        "id": "AR",
        "name": "Argentina"
      },
      "id": "AR"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[46.4906, 38.9065], [46.1146, 38.8776], [45.7661, 39.3783], [45.0315, 39.7649], [44.7683, 39.7037], [44.2893, 40.0406], [43.7918, 40.0703], [43.5693, 40.4823], [43.7225, 40.7193], [43.4392, 41.1073], [45.0014, 41.2911], [45.5876, 40.8467], [45.3759, 40.6381], [45.9645, 40.2336], [45.7897, 39.8812], [46.55, 39.2012], [46.4906, 38.9065]]]
      },
      "properties": {
        "id": "AM",
        "name": "Armenia"
      },
      "id": "AM"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[-170.7262, -14.3512], [-170.8205, -14.3122], [-170.6892, -14.2576], [-170.7262, -14.3512]]]
      },
      "properties": {
        "id": "AS",
        "name": "American Samoa"
      },
      "id": "AS"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [[[[-73.7068, -70.6349], [-74.205, -70.9239], [-76.1763, -71.1327], [-76.5004, -70.9413], [-75.0076, -70.6088], [-73.7068, -70.6349]]], [[[-98.091, -71.9125], [-96.8695, -71.8508], [-95.6095, -72.0682], [-96.0518, -72.5775], [-98.4078, -72.5477], [-100.1951, -72.2725], [-102.2647, -72.1353], [-102.128, -71.9853], [-98.6155, -71.7638], [-98.091, -71.9125]]], [[[-91.1608, -73.182], [-91.6699, -72.6236], [-90.8072, -72.6107], [-91.1608, -73.182]]], [[[-74.3544, -73.0986], [-74.5748, -73.6113], [-75.9009, -73.3325], [-75.3769, -72.8202], [-74.3544, -73.0986]]], [[[-126.3299, -73.2863], [-124.9933, -73.8298], [-124.8731, -74.2084], [-127.4143, -73.5163], [-126.3299, -73.2863]]], [[[-120.5562, -73.756], [-120.2726, -73.9891], [-121.0625, -74.3375], [-122.8591, -74.3429], [-122.6248, -73.9655], [-123.1121, -73.6823], [-120.5562, -73.756]]], [[[-45.2226, -78.8107], [-43.722, -78.8186], [-42.9654, -79.4769], [-43.5278, -80.1916], [-49.1875, -80.643], [-49.773, -80.7841], [-54.1626, -80.8702], [-53.4823, -80.1889], [-52.2972, -80.1414], [-50.3391, -79.4795], [-50.7331, -79.2829], [-50.2197, -78.6051], [-49.0812, -78.0475], [-46.8258, -77.7853], [-45.5303, -77.8816], [-43.8086, -78.2863], [-43.9473, -78.5975], [-45.2226, -78.8107]]], [[[-70.334, -79.6797], [-71.7836, -79.4446], [-70.544, -78.8839], [-67.4785, -78.3628], [-66.7281, -78.3836], [-69.251, -79.2102], [-70.334, -79.6797]]], [[[-159.053, -79.8075], [-161.8655, -79.7037], [-164.2259, -79.3206], [-163.2562, -78.7223], [-161.643, -78.9011], [-159.6842, -79.4024], [-159.053, -79.8075]]], [[[-59.7339, -80.3443], [-60.5828, -80.9484], [-64.2683, -80.7486], [-65.9802, -80.3846], [-62.5188, -80.3736], [-61.3432, -79.8866], [-59.7063, -79.8756], [-59.7339, -80.3443]]], [[[-57.0206, -63.373], [-58.2631, -63.7635], [-58.8954, -64.389], [-59.9632, -64.4312], [-61.0598, -64.9811], [-61.7361, -65.0335], [-62.1454, -65.3319], [-62.3051, -65.8406], [-61.8755, -66.2959], [-63.7525, -66.2778], [-64.0779, -66.6542], [-64.6862, -66.8064], [-64.8193, -67.3076], [-65.4433, -67.3263], [-65.6394, -68.1306], [-64.8984, -68.6735], [-63.3436, -68.8106], [-63.4559, -69.0419], [-62.4505, -69.5844], [-61.9611, -70.1201], [-61.9611, -70.9005], [-61.0172, -71.1668], [-61.2136, -71.564], [-60.7193, -72.0727], [-60.3846, -73.0072], [-61.4054, -73.467], [-60.8789, -73.6122], [-61.0108, -74.4782], [-62.2257, -74.5058], [-63.9247, -75.0047], [-63.3633, -75.4517], [-66.3706, -76.0131], [-69.3045, -76.3505], [-70.0955, -76.6546], [-71.7987, -76.7527], [-75.2684, -76.5814], [-77.1899, -76.6298], [-76.2487, -77.2748], [-75.3869, -77.474], [-72.852, -77.5904], [-73.2515, -77.8943], [-74.8121, -78.1776], [-80.6015, -77.7519], [-81.4411, -77.8856], [-77.4325, -78.4346], [-77.8691, -78.7454], [-80.2923, -78.8226], [-83.246, -78.3569], [-83.26, -78.7742], [-80.1512, -79.2682], [-76.499, -79.3256], [-76.5578, -79.9034], [-75.2366, -80.8028], [-73.0296, -80.9173], [-70.239, -80.8565], [-64.7501, -81.5219], [-64.1371, -81.8695], [-65.9133, -82.1833], [-62.7357, -82.5272], [-61.5898, -83.3414], [-59.5159, -83.4585], [-57.3535, -82.8403], [-53.9862, -82.2006], [-48.3607, -81.8921], [-43.6693, -82.2699], [-41.4338, -81.2977], [-38.7717, -80.8823], [-37.2093, -81.0639], [-35.3269, -80.6505], [-29.3291, -80.172], [-24.2402, -80.062], [-25.2586, -79.7624], [-29.9494, -79.599], [-30.3161, -79.163], [-32.9943, -79.2288], [-36.2392, -78.7742], [-36.181, -78.4684], [-34.0758, -77.4253], [-32.0635, -77.1598], [-28.9336, -76.3701], [-26.0594, -75.9572], [-24.2696, -75.7669], [-19.4931, -75.5399], [-17.2989, -74.334], [-15.6725, -74.4072], [-15.7489, -73.9455], [-16.5188, -73.6441], [-15.5959, -73.0968], [-14.3211, -73.1229], [-14.2978, -72.7329], [-13.2087, -72.7853], [-11.4971, -72.4128], [-10.8255, -71.5535], [-9.888, -71.0274], [-9.2308, -71.1739], [-8.6466, -71.6727], [-7.7138, -71.5464], [-7.8736, -70.9403], [-5.9364, -70.7126], [-5.5879, -70.8569], [-5.9499, -71.3417], [-2.8121, -71.3208], [-0.8958, -71.3492], [-0.5431, -71.7127], [0.835, -71.2023], [2.6096, -70.9], [5.1132, -70.6558], [8.5231, -70.4738], [9.1415, -70.1835], [10.2175, -70.508], [11.7014, -70.7664], [12.9292, -70.2133], [13.8228, -70.3434], [15.8069, -70.3238], [18.1245, -70.5405], [19.1965, -70.2932], [19.2649, -70.9023], [21.0706, -70.8437], [21.7049, -70.2586], [22.9789, -70.8104], [23.8037, -70.4047], [24.7568, -70.8921], [25.9743, -71.0371], [27.2071, -70.9111], [30.0035, -70.2999], [31.3787, -70.2257], [32.6212, -70.0007], [32.9892, -69.6242], [32.5674, -69.0743], [33.1214, -68.6889], [34.193, -68.7023], [35.2245, -69.6371], [37.56, -69.7183], [38.8592, -70.006], [39.7052, -69.4258], [39.8637, -68.9669], [41.1328, -68.5749], [42.409, -68.3521], [42.8196, -68.123], [44.6999, -67.9042], [44.9893, -67.7693], [47.1173, -67.5726], [48.6479, -67.7941], [48.7136, -67.217], [49.247, -66.9413], [50.6058, -67.1501], [50.3325, -66.4447], [51.8843, -66.0199], [53.6718, -65.8588], [54.948, -65.9164], [55.7102, -66.0797], [57.1852, -66.6133], [56.4533, -66.7799], [56.8918, -67.0564], [57.6274, -67.0142], [58.7375, -67.2295], [59.2507, -67.4852], [60.4821, -67.3853], [62.6878, -67.6476], [63.6989, -67.5083], [68.3277, -67.8895], [69.4162, -67.743], [69.9822, -68.4644], [69.5343, -68.7368], [69.6292, -69.2314], [68.9062, -69.3726], [69.0825, -69.8667], [68.1782, -69.8374], [67.2678, -70.2732], [67.9408, -70.4228], [69.2502, -70.4313], [68.8725, -71.0354], [68.0375, -71.391], [67.432, -72.0031], [66.8919, -72.9486], [67.9714, -73.0857], [68.4197, -72.5149], [69.5547, -72.3746], [71.2766, -71.624], [71.9047, -70.7069], [72.7601, -70.3958], [72.8223, -70.0962], [73.9422, -69.7433], [75.4239, -69.8933], [75.8913, -69.5755], [77.8174, -69.069], [78.7264, -68.278], [79.288, -68.1195], [82.0171, -67.6902], [83.3043, -67.6032], [84.4851, -67.1146], [85.7107, -67.161], [87.9803, -66.7883], [89.6985, -66.8228], [92.0733, -66.5078], [93.9644, -66.6897], [94.8397, -66.5015], [95.5411, -66.6312], [98.2577, -66.4673], [99.37, -66.6484], [100.889, -66.3581], [101.4746, -65.9511], [102.674, -65.8655], [103.951, -65.9879], [108.1578, -66.6391], [109.4629, -66.9085], [110.6224, -66.5241], [110.9069, -66.0767], [113.0992, -65.8002], [113.7095, -65.9298], [114.3367, -66.3603], [115.3102, -66.5609], [115.2738, -67.0279], [113.9911, -67.2117], [114.0266, -67.4412], [116.7135, -67.0471], [118.1388, -67.0826], [119.133, -67.3706], [121.4874, -67.0905], [122.1825, -66.8593], [123.9692, -66.608], [124.5978, -66.7083], [125.8655, -66.3643], [126.6645, -66.4976], [127.5412, -67.051], [129.2369, -67.0418], [129.7411, -66.4686], [130.9517, -66.1912], [131.831, -66.2356], [133.4447, -66.0815], [134.9716, -66.3302], [135.352, -66.1274], [136.1941, -66.2924], [137.7539, -66.4065], [139.9001, -66.715], [141.9726, -66.8069], [142.8883, -66.9999], [143.4481, -66.877], [144.6213, -67.1416], [143.9422, -67.7941], [145.9752, -67.6241], [146.828, -67.9646], [146.7977, -68.2735], [148.4561, -68.467], [151.068, -68.3849], [151.5621, -68.6939], [153.082, -68.8567], [154.1996, -68.4178], [155.5202, -69.0246], [157.4814, -69.3087], [158.1578, -69.2088], [159.7838, -69.5217], [160.2095, -69.975], [161.0369, -70.3171], [161.4245, -70.8268], [162.6748, -70.3047], [163.3487, -70.6208], [164.4034, -70.5103], [166.6269, -70.6643], [167.5692, -70.8104], [168.1725, -71.1832], [170.1624, -71.6307], [169.8287, -72.7288], [169.545, -73.0502], [167.1555, -73.1475], [167.6158, -73.3369], [164.7757, -74.0286], [165.3027, -74.5937], [163.1672, -74.6021], [162.5337, -75.1672], [161.6797, -75.2177], [162.8156, -75.8463], [162.7627, -76.7456], [164.4296, -78.0423], [166.2086, -78.4515], [164.6347, -78.6034], [160.483, -79.2017], [160.5419, -80.4251], [160.9078, -81.3901], [162.8213, -81.8663], [167.2327, -82.9521], [168.1099, -83.3618], [171.9172, -83.6441], [179.403, -84.2061], [-180, -89.9989], [-180, -89.583], [-180, -89.2931], [-180, -88.5869], [-180, -87.8811], [-180, -87.1752], [-180, -86.4696], [-180, -85.7633], [-180, -85.0574], [-180, -84.3518], [-171.7037, -84.5426], [-162.9334, -84.9012], [-157.1276, -85.1857], [-156.9864, -84.8112], [-163.5685, -84.5289], [-164.951, -83.8058], [-167.5528, -83.811], [-169.1677, -83.4497], [-174.066, -82.9002], [-171.8213, -82.8474], [-168.4178, -83.2286], [-163.111, -83.329], [-159.4445, -83.5434], [-157.6795, -83.1293], [-155.4594, -82.9806], [-153.0098, -82.4497], [-154.7174, -81.941], [-153.9566, -81.7004], [-157.0326, -81.3191], [-156.5283, -81.1624], [-148.1228, -80.9009], [-150.5755, -80.3535], [-148.3172, -80.0708], [-148.1765, -79.7761], [-152.0914, -79.2417], [-155.21, -78.9647], [-156.4693, -78.6353], [-154.7164, -78.3983], [-155.3416, -78.1918], [-157.2667, -78.1998], [-158.5003, -77.7786], [-158.2135, -77.1571], [-154.8149, -77.1269], [-153.4606, -77.4159], [-151.719, -77.4261], [-149.7177, -77.7977], [-145.967, -77.0688], [-145.7504, -76.7492], [-147.3404, -76.4384], [-146.3829, -76.0998], [-143.5742, -75.5635], [-142.3298, -75.4907], [-141.5057, -75.6906], [-139.6911, -75.2129], [-137.6181, -75.0757], [-136.5494, -75.1397], [-135.362, -74.6904], [-133.4748, -74.8519], [-132.0495, -74.7658], [-129.7907, -74.8915], [-127.8633, -74.7193], [-123.8894, -74.773], [-119.6771, -74.6545], [-118.3421, -74.3814], [-115.1052, -74.4552], [-114.7909, -73.9887], [-113.5085, -74.0889], [-113.9318, -74.982], [-111.6963, -74.7921], [-111.8064, -74.2696], [-110.307, -74.3668], [-110.3005, -74.7109], [-111.4631, -75.1334], [-109.2723, -75.1848], [-106.6189, -75.3438], [-104.9019, -75.1152], [-101.7081, -75.1272], [-101.0394, -75.422], [-98.5578, -75.1898], [-101.2518, -74.4858], [-101.7154, -74.0236], [-102.7663, -73.8839], [-102.4108, -73.6167], [-100.9855, -73.7573], [-99.7812, -73.7201], [-100.0209, -73.4027], [-102.6751, -73.321], [-102.4092, -72.9876], [-98.0125, -73.0333], [-96.1521, -73.3094], [-94.2463, -73.313], [-92.241, -73.1785], [-90.9209, -73.3193], [-90.2954, -72.9779], [-88.1945, -72.8585], [-88.4193, -73.2291], [-87.0379, -73.3538], [-85.9808, -73.2087], [-84.9812, -73.5021], [-82.1835, -73.8568], [-81.3088, -73.7382], [-81.2624, -73.3148], [-80.4422, -72.9446], [-79.5217, -73.0897], [-78.4078, -73.5559], [-76.8506, -73.4603], [-77.1349, -73.8176], [-75.293, -73.6389], [-73.9962, -73.6997], [-72.9293, -73.448], [-68.8211, -73.1053], [-67.6671, -72.8345], [-66.8277, -72.0906], [-67.4603, -71.5268], [-67.8884, -70.4214], [-68.4033, -70.0197], [-68.7079, -69.4321], [-67.3718, -69.4125], [-66.9749, -69.1608], [-67.3906, -68.8612], [-66.7933, -68.2403], [-67.1498, -68.0245], [-66.705, -67.5273], [-67.5859, -67.435], [-67.4933, -67.1128], [-66.371, -66.6088], [-65.7664, -66.6249], [-65.6172, -66.1353], [-64.0659, -65.5538], [-64.0381, -65.1792], [-62.5762, -64.7557], [-61.6317, -64.6047], [-60.8643, -64.0734], [-59.5102, -63.8209], [-58.8721, -63.5518], [-57.3897, -63.2264], [-57.0206, -63.373]]], [[[-67.9885, -67.4746], [-68.5804, -67.7328], [-69.0825, -67.403], [-68.3358, -66.802], [-67.6877, -67.1473], [-67.9885, -67.4746]]], [[[-70.0511, -69.1892], [-69.417, -69.5834], [-68.3361, -70.8561], [-68.2411, -71.822], [-69.2092, -72.5344], [-72.3675, -72.6698], [-73.0864, -72.4079], [-71.1066, -72.0471], [-72.4121, -71.6622], [-73.8994, -72.1522], [-75.3531, -71.8783], [-75.2925, -71.6151], [-74.1873, -71.383], [-72.6217, -71.3882], [-71.1941, -70.9847], [-71.0611, -70.5368], [-70.3281, -70.3611], [-71.8537, -69.9692], [-71.869, -68.9411], [-70.4171, -68.7889], [-70.0511, -69.1892]]], [[[-74.9871, -69.7277], [-74.8488, -70.1791], [-75.7267, -70.0962], [-74.9871, -69.7277]]]]
      },
      "properties": {
        "id": "AQ",
        "name": "Antarctica"
      },
      "id": "AQ"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[69.185, -49.1094], [69.9157, -49.3485], [69.6129, -49.6509], [68.872, -49.4445], [69.185, -49.1094]]]
      },
      "properties": {
        "id": "TF",
        "name": "French Southern and Antarctic Lands"
      },
      "id": "TF"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [[[[143.1787, -11.9548], [143.1103, -12.3036], [143.4014, -12.64], [143.5866, -13.4434], [143.5484, -13.7409], [143.7562, -14.3491], [143.9618, -14.4626], [144.473, -14.2319], [144.648, -14.4924], [145.2876, -14.943], [145.2717, -15.4765], [145.458, -16.0563], [145.4261, -16.4061], [145.9019, -17.0701], [146.1257, -17.6351], [146.0325, -18.273], [146.3334, -18.5536], [146.4813, -19.0786], [147.1387, -19.3929], [147.4183, -19.3783], [147.9154, -19.8693], [148.7593, -20.2897], [148.6839, -20.5804], [149.205, -21.1251], [149.7039, -22.4408], [150.0764, -22.1647], [150.5415, -22.5593], [150.7639, -22.5762], [150.8429, -23.4582], [151.1537, -23.784], [151.9025, -24.2008], [152.1297, -24.5976], [152.4565, -24.8023], [152.9137, -25.4321], [153.165, -25.9643], [153.0841, -26.304], [153.1171, -27.1944], [153.5756, -28.2406], [153.6044, -28.8545], [153.3482, -29.2905], [153.2723, -29.8923], [153.0304, -30.5635], [152.9438, -31.4349], [152.5595, -32.0457], [152.4703, -32.439], [151.8128, -32.901], [151.4839, -33.3477], [151.2314, -34.0294], [150.96, -34.2971], [150.6902, -35.1777], [150.1953, -35.8334], [149.9605, -36.8455], [149.9324, -37.5286], [149.2986, -37.8021], [148.2625, -37.8309], [147.3957, -38.2189], [146.8568, -38.6633], [145.9352, -38.9017], [145.791, -38.6668], [144.6653, -38.21], [143.5392, -38.8208], [142.6122, -38.4515], [141.7248, -38.2713], [141.4244, -38.3636], [141.0112, -38.0769], [140.6272, -38.0285], [139.7842, -37.2459], [139.8575, -36.6622], [139.5485, -36.0966], [139.0377, -35.6892], [138.1844, -35.6128], [138.5111, -35.0243], [138.4898, -34.7636], [138.0895, -34.1697], [137.6917, -35.1432], [136.8834, -35.24], [137.0144, -34.9158], [137.3908, -34.9133], [137.4937, -34.1613], [137.9318, -33.5788], [137.8524, -33.2007], [137.4423, -33.1935], [137.2372, -33.6295], [136.4306, -34.0299], [135.6477, -34.9394], [135.1856, -33.907], [134.7909, -33.3285], [134.3013, -33.1652], [134.1002, -32.7488], [134.2343, -32.5487], [133.551, -32.1828], [133.2119, -32.1837], [132.7575, -31.956], [132.2146, -32.007], [131.7214, -31.6964], [131.1434, -31.4957], [130.783, -31.604], [130.1296, -31.5791], [128.9462, -31.7025], [128.0677, -32.0666], [127.3198, -32.2642], [125.917, -32.2969], [124.759, -32.8829], [124.1259, -33.1292], [123.6506, -33.8364], [123.2075, -33.9882], [122.7774, -33.8909], [122.1511, -33.9917], [121.4052, -33.8266], [119.854, -33.9749], [119.4505, -34.3681], [118.8951, -34.4801], [118.1356, -34.9865], [117.5816, -35.0978], [116.5171, -34.9878], [115.9868, -34.7952], [115.7261, -34.5262], [115.0088, -34.2559], [115.1815, -33.6433], [115.5153, -33.5314], [115.6831, -33.1927], [115.6982, -31.6946], [115.1766, -30.8081], [114.9947, -30.2164], [114.9592, -29.4334], [114.5374, -28.543], [114.165, -28.0809], [114.0283, -27.347], [113.5817, -26.5583], [113.853, -26.3319], [113.5889, -26.0985], [113.5396, -25.6253], [114.2156, -26.2894], [114.2143, -25.8517], [113.6709, -24.9772], [113.4176, -24.4357], [113.5529, -23.7329], [113.7572, -23.4182], [113.683, -22.6379], [113.9586, -21.9392], [114.1637, -22.3231], [114.3777, -22.3413], [114.8588, -21.7359], [115.4564, -21.4917], [116.0107, -21.0305], [116.7068, -20.6536], [117.4064, -20.7211], [118.1992, -20.3754], [118.7513, -20.2616], [119.1046, -19.9953], [119.5858, -20.0384], [120.8784, -19.665], [121.4937, -19.1067], [121.8337, -18.4773], [122.2372, -17.9686], [122.1604, -17.3138], [122.7201, -16.7878], [122.9706, -16.4366], [123.5254, -17.4856], [123.7779, -16.8677], [123.4903, -16.4908], [124.5769, -16.1135], [124.3816, -15.758], [124.8389, -15.161], [125.2432, -14.9448], [125.1788, -14.7149], [125.6813, -14.3881], [126.0209, -14.4946], [126.1115, -14.1142], [126.5696, -14.1608], [126.9033, -13.744], [127.6727, -14.195], [128.1995, -14.7516], [129.4588, -14.9332], [129.7536, -14.7894], [129.3785, -14.3926], [129.7097, -13.9802], [129.8388, -13.5731], [130.2597, -13.3024], [130.1682, -12.9575], [130.3999, -12.6879], [130.898, -12.5238], [131.0458, -12.1896], [131.4381, -12.277], [132.3721, -12.2393], [132.6305, -12.035], [132.6829, -11.5055], [133.0246, -11.4527], [133.1853, -11.7057], [133.904, -11.8321], [134.2369, -12.0079], [134.7301, -11.9845], [135.218, -12.2214], [135.7884, -11.9071], [136.0817, -12.4225], [136.5403, -11.9577], [136.9474, -12.3497], [136.5372, -12.7843], [136.5944, -13.0036], [135.9272, -13.3041], [135.9894, -13.8101], [135.8833, -14.1532], [135.4052, -14.7583], [135.5308, -15.0002], [136.2051, -15.4033], [136.7845, -15.8942], [137.002, -15.8783], [137.7037, -16.2329], [138.2449, -16.7181], [139.0096, -16.8992], [139.2484, -17.3285], [140.0359, -17.7026], [140.5113, -17.6245], [140.8305, -17.4146], [141.2189, -16.6462], [141.412, -16.0695], [141.4515, -15.6052], [141.6255, -15.0566], [141.523, -14.4703], [141.5944, -14.1528], [141.4723, -13.7977], [141.6454, -13.2592], [141.6779, -12.4913], [141.9513, -11.8961], [142.1683, -10.9466], [142.4564, -10.7074], [142.8368, -11.307], [142.8723, -11.8215], [143.1787, -11.9548]]], [[[130.6188, -11.3763], [131.2682, -11.1898], [131.5385, -11.4366], [130.9508, -11.9263], [130.6449, -11.7425], [130.6188, -11.3763]]], [[[136.7147, -13.804], [136.8946, -14.2931], [136.3632, -14.2287], [136.4249, -13.8648], [136.7147, -13.804]]], [[[137.5964, -35.7384], [137.4484, -36.0749], [136.7552, -36.0331], [136.6388, -35.749], [137.334, -35.5924], [137.5964, -35.7384]]], [[[145.0431, -40.7868], [145.2832, -40.77], [146.3175, -41.1637], [146.9898, -40.9924], [147.4546, -41.0016], [147.9688, -40.7797], [148.2927, -40.9471], [148.3017, -42.0399], [147.9243, -42.5727], [147.9807, -43.1572], [147.4081, -42.894], [146.8741, -43.6126], [146.0431, -43.5474], [145.2681, -42.5442], [145.2384, -42.0195], [144.7781, -41.4189], [144.6462, -40.9808], [145.0431, -40.7868]]]]
      },
      "properties": {
        "id": "AU",
        "name": "Australia"
      },
      "id": "AU"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[16.9531, 48.5989], [17.1475, 48.0058], [16.4342, 47.3675], [16.4533, 47.0066], [16.0929, 46.8632], [15.9574, 46.6777], [15.0009, 46.6262], [14.5037, 46.4171], [13.6998, 46.5201], [12.3881, 46.7025], [12.1542, 46.9351], [11.2442, 46.9755], [11.025, 46.7971], [10.4527, 46.865], [9.5801, 47.0572], [9.5277, 47.2707], [9.5242, 47.5242], [10.3129, 47.3133], [10.4306, 47.541], [11.2979, 47.4248], [11.717, 47.5837], [12.6859, 47.6693], [12.8143, 48.1607], [13.4095, 48.3942], [13.8147, 48.7669], [14.0491, 48.6024], [14.6915, 48.5992], [14.9721, 48.9839], [16.0573, 48.7548], [16.4777, 48.8001], [16.9531, 48.5989]]]
      },
      "properties": {
        "id": "AT",
        "name": "Austria"
      },
      "id": "AT"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [[[[46.1146, 38.8776], [45.4799, 39.0063], [44.8172, 39.6504], [44.7683, 39.7037], [45.0315, 39.7649], [45.7661, 39.3783], [46.1146, 38.8776]]], [[[48.5729, 41.8446], [49.1064, 41.3017], [49.2262, 41.0261], [49.7758, 40.584], [49.3244, 39.6082], [49.363, 39.3495], [49.0136, 39.1341], [48.8686, 38.4355], [48.5928, 38.4111], [48.0233, 38.819], [48.2422, 38.9788], [47.9957, 39.6842], [47.7729, 39.6486], [46.4906, 38.9065], [46.55, 39.2012], [45.7897, 39.8812], [45.9645, 40.2336], [45.3759, 40.6381], [45.5876, 40.8467], [45.0014, 41.2911], [45.281, 41.4495], [46.4577, 41.07], [46.6188, 41.3439], [46.182, 41.6573], [46.4298, 41.8907], [46.7494, 41.8127], [47.2612, 41.315], [47.8608, 41.2129], [48.5729, 41.8446]]]]
      },
      "properties": {
        "id": "AZ",
        "name": "Azerbaijan"
      },
      "id": "AZ"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[30.5536, -2.4], [30.5149, -2.9175], [30.79, -3.2744], [30.4253, -3.5891], [30.1469, -4.0854], [29.7177, -4.456], [29.4034, -4.4493], [29.2231, -3.911], [29.2245, -3.0533], [29.0145, -2.7204], [29.3901, -2.8087], [29.8681, -2.7164], [29.9303, -2.3396], [30.5536, -2.4]]]
      },
      "properties": {
        "id": "BI",
        "name": "Burundi"
      },
      "id": "BI"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[3.5955, 11.6964], [3.4878, 11.3953], [3.7163, 11.0798], [3.8344, 10.6075], [3.5764, 10.2683], [3.5574, 9.9074], [3.3252, 9.7783], [3.0451, 9.084], [2.7748, 9.0485], [2.6859, 7.874], [2.7748, 6.7118], [2.7064, 6.3692], [1.6225, 6.2169], [1.6002, 9.0499], [1.4244, 9.2851], [1.33, 9.9971], [0.7798, 10.3598], [0.9007, 10.9931], [1.4266, 11.4473], [1.9803, 11.4184], [2.3889, 11.897], [2.366, 12.2218], [2.8782, 12.3679], [3.5955, 11.6964]]]
      },
      "properties": {
        "id": "BJ",
        "name": "Benin"
      },
      "id": "BJ"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[0.2175, 14.9115], [0.1638, 14.4973], [0.6184, 13.7036], [0.978, 13.5518], [0.9872, 13.0418], [1.5651, 12.6356], [2.0739, 12.7142], [2.0912, 12.2778], [2.3889, 11.897], [1.9803, 11.4184], [1.4266, 11.4473], [0.9007, 10.9931], [-0.0686, 11.1157], [-0.7014, 10.9887], [-2.8298, 10.9985], [-2.9148, 10.5924], [-2.7866, 10.402], [-2.6958, 9.4812], [-3.2236, 9.8955], [-3.8777, 9.895], [-4.6258, 9.7134], [-4.9698, 9.93], [-5.0999, 10.2417], [-5.5236, 10.4259], [-5.4905, 11.0424], [-5.2998, 11.2058], [-5.2881, 11.8277], [-4.798, 12.0319], [-4.4287, 12.3377], [-4.4807, 12.6725], [-4.2272, 12.7937], [-4.3286, 13.119], [-4.0512, 13.3822], [-3.5758, 13.194], [-3.3017, 13.2806], [-3.1985, 13.6729], [-2.4572, 14.274], [-2.1132, 14.1684], [-1.7678, 14.4862], [-1.0496, 14.8195], [-0.7604, 15.0477], [-0.2359, 15.0592], [0.2175, 14.9115]]]
      },
      "properties": {
        "id": "BF",
        "name": "Burkina Faso"
      },
      "id": "BF"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[92.575, 21.9782], [92.5936, 21.4672], [92.1794, 21.2932], [92.3243, 20.7917], [92.0561, 21.1747], [92.0081, 21.6848], [91.6929, 22.5047], [91.4094, 22.7972], [90.9454, 22.597], [90.6335, 23.0941], [90.435, 22.7518], [90.5894, 22.2583], [90.1589, 21.817], [89.8117, 21.9835], [89.2343, 21.7225], [89.0515, 22.0932], [88.7407, 23.4369], [88.5671, 23.6743], [88.7335, 24.231], [88.1453, 24.4858], [88.4561, 25.1884], [88.4521, 25.5745], [88.0847, 25.8885], [88.4402, 26.3696], [89.1082, 26.2023], [89.2893, 26.0376], [89.8229, 25.9412], [89.814, 25.3052], [90.4394, 25.1578], [92.0498, 25.1694], [92.2514, 24.895], [91.8767, 24.1955], [91.3672, 24.0933], [91.1603, 23.6605], [91.3153, 23.1044], [91.6197, 22.9797], [91.938, 23.5047], [92.2461, 23.6837], [92.3615, 22.929], [92.4916, 22.6853], [92.575, 21.9782]]]
      },
      "properties": {
        "id": "BD",
        "name": "Bangladesh"
      },
      "id": "BD"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[28.5853, 43.7422], [28.4654, 43.3893], [27.9288, 43.1861], [27.8888, 42.7497], [27.4849, 42.4683], [28.0144, 41.9689], [27.295, 42.0793], [26.6154, 41.9649], [26.3209, 41.7167], [26.1355, 41.3856], [25.2511, 41.2435], [24.0558, 41.5272], [23.635, 41.3869], [22.9159, 41.3363], [23.0055, 41.7172], [22.8369, 41.9937], [22.3441, 42.3138], [22.4667, 42.8424], [22.9767, 43.1878], [22.5546, 43.4546], [22.421, 44.0077], [22.705, 44.2376], [23.2244, 43.8741], [25.4971, 43.6708], [26.2157, 44.0072], [27.0867, 44.1675], [28.5853, 43.7422]]]
      },
      "properties": {
        "id": "BG",
        "name": "Bulgaria"
      },
      "id": "BG"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[19.007, 44.8693], [19.3568, 44.8586], [19.1517, 44.3025], [19.4882, 43.7036], [19.1943, 43.5331], [18.9404, 43.4968], [18.4437, 42.9685], [18.4361, 42.5598], [17.6678, 42.8971], [17.5852, 42.9384], [17.6247, 43.0426], [16.2141, 44.215], [15.7368, 44.7658], [15.788, 45.1791], [16.2935, 45.0087], [16.5305, 45.2168], [17.813, 45.0779], [18.6625, 45.0774], [19.007, 44.8693]]]
      },
      "properties": {
        "id": "BA",
        "name": "Bosnia and Herzegovina"
      },
      "id": "BA"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[50.6072, 25.8831], [50.4661, 25.9657], [50.4524, 26.1907], [50.6099, 26.1246], [50.6072, 25.8831]]]
      },
      "properties": {
        "id": "BH",
        "name": "Bahrain"
      },
      "id": "BH"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [[[[-77.2257, 25.904], [-77.4033, 26.0247], [-77.2468, 26.1566], [-77.2062, 26.489], [-77.0384, 26.3332], [-77.1674, 26.2404], [-77.2257, 25.904]]], [[[-77.744, 24.7072], [-78.0449, 24.2873], [-78.2988, 24.7538], [-78.0333, 25.1432], [-77.744, 24.7072]]]]
      },
      "properties": {
        "id": "BS",
        "name": "Bahamas"
      },
      "id": "BS"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[-62.832, 17.8766], [-62.8655, 17.9184], [-62.7996, 17.9085], [-62.832, 17.8766]]]
      },
      "properties": {
        "id": "BL",
        "name": "Saint Barthelemy"
      },
      "id": "BL"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[28.148, 56.143], [28.7948, 55.9426], [29.375, 55.9386], [29.4824, 55.6845], [30.2334, 55.8451], [30.9069, 55.5699], [31.1212, 54.6484], [31.4035, 54.1959], [31.792, 54.0558], [32.7042, 53.3363], [32.1421, 53.0913], [31.4178, 53.196], [31.5771, 52.3122], [31.7635, 52.1011], [30.9806, 52.0461], [30.533, 51.5965], [29.3465, 51.3825], [29.1357, 51.6173], [28.5991, 51.5427], [27.2701, 51.6135], [27.1422, 51.752], [25.925, 51.9136], [24.3616, 51.8675], [23.6053, 51.5179], [23.6522, 52.0403], [23.1969, 52.257], [23.8445, 52.6642], [23.8871, 53.0275], [23.4845, 53.9397], [24.7683, 53.9746], [25.5473, 54.3317], [25.8593, 54.9192], [26.175, 55.0033], [26.5936, 55.6676], [27.5767, 55.7987], [28.148, 56.143]]]
      },
      "properties": {
        "id": "BY",
        "name": "Belarus"
      },
      "id": "BY"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[-88.894, 15.8907], [-89.2374, 15.8942], [-89.1615, 17.8149], [-88.8064, 17.9654], [-88.523, 18.4457], [-88.2957, 18.4723], [-88.0972, 18.1217], [-88.2717, 17.6099], [-88.3134, 16.6328], [-88.894, 15.8907]]]
      },
      "properties": {
        "id": "BZ",
        "name": "Belize"
      },
      "id": "BZ"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[-64.7304, 32.2933], [-64.8202, 32.2597], [-64.6946, 32.387], [-64.7304, 32.2933]]]
      },
      "properties": {
        "id": "BM",
        "name": "Bermuda"
      },
      "id": "BM"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[-58.1599, -20.1645], [-58.1803, -19.8178], [-59.0905, -19.286], [-60.0073, -19.2976], [-61.757, -19.6452], [-61.917, -20.0553], [-62.2763, -20.5626], [-62.2768, -21.066], [-62.6509, -22.2339], [-62.8433, -21.9973], [-63.8186, -22.0053], [-63.9762, -22.0728], [-64.3739, -22.7613], [-64.6056, -22.229], [-65.058, -22.103], [-65.771, -22.0994], [-66.0986, -21.8352], [-66.3652, -22.1136], [-66.7117, -22.2162], [-67.1948, -22.8216], [-67.8795, -22.823], [-67.9883, -22.0573], [-68.1969, -21.3004], [-68.4998, -20.612], [-68.7452, -20.4588], [-68.6983, -19.7211], [-68.4628, -19.4329], [-68.9684, -18.9682], [-69.094, -18.0507], [-69.3133, -17.9433], [-69.5109, -17.506], [-69.6249, -17.2002], [-69.0208, -16.6422], [-68.9134, -16.2618], [-69.2177, -16.149], [-69.4185, -15.6034], [-69.1727, -15.2368], [-69.3748, -14.9629], [-69.235, -14.5972], [-68.8803, -14.199], [-69.0741, -13.6828], [-68.9786, -12.8802], [-68.6852, -12.502], [-69.5786, -10.9519], [-68.398, -11.0185], [-68.0718, -10.7029], [-67.5824, -10.5058], [-66.7301, -9.9755], [-66.2636, -9.8262], [-65.3962, -9.7126], [-65.3132, -10.2533], [-65.4368, -10.449], [-65.334, -10.8929], [-65.39, -11.2462], [-64.9924, -11.9751], [-64.5135, -12.2508], [-64.4205, -12.4399], [-63.5858, -12.5188], [-63.0675, -12.6693], [-62.7655, -12.9973], [-62.1759, -13.1336], [-61.79, -13.5256], [-61.0769, -13.4897], [-60.5065, -13.7897], [-60.299, -14.6185], [-60.1756, -16.2693], [-58.5381, -16.3284], [-58.396, -17.2343], [-57.8325, -17.5123], [-57.5741, -18.2792], [-57.8005, -19.0809], [-58.1315, -19.7445], [-58.1599, -20.1645]]]
      },
      "properties": {
        "id": "BO",
        "name": "Bolivia"
      },
      "id": "BO"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [[[[-56.4828, 1.9422], [-56.0199, 1.8423], [-56.1295, 2.2995], [-55.0058, 2.593], [-54.6163, 2.3266], [-54.13, 2.1211], [-53.7678, 2.3551], [-52.9648, 2.1837], [-52.7006, 2.3635], [-51.9907, 3.7018], [-51.6526, 4.0614], [-51.4615, 4.314], [-51.2198, 4.0937], [-51.0525, 3.2819], [-50.659, 2.1309], [-50.459, 1.8295], [-49.9572, 1.6599], [-49.8988, 1.1627], [-50.2945, 0.8356], [-50.8163, 0.1724], [-51.2829, -0.085], [-51.7025, -0.7624], [-51.9476, -1.5866], [-51.2973, -1.2237], [-50.9178, -1.1154], [-50.69, -1.7616], [-50.4033, -2.0155], [-49.9991, -1.8317], [-49.7195, -1.9263], [-49.3138, -1.7318], [-48.9913, -1.8299], [-48.115, -0.7375], [-47.3981, -0.6265], [-46.8113, -0.7797], [-46.6173, -0.9706], [-46.2192, -1.0314], [-45.6448, -1.3478], [-45.0764, -1.4664], [-44.6513, -1.7456], [-44.3082, -2.5353], [-43.9329, -2.5832], [-42.9368, -2.4652], [-42.2496, -2.7918], [-41.8762, -2.7466], [-41.3182, -2.9361], [-40.4745, -2.7955], [-39.9647, -2.8616], [-38.4757, -3.7174], [-38.0489, -4.2163], [-37.1747, -4.9123], [-36.5907, -5.0975], [-35.9799, -5.0544], [-35.5493, -5.1293], [-35.2355, -5.5666], [-34.9882, -6.3936], [-34.8056, -7.2886], [-34.8347, -7.9716], [-35.1578, -8.9304], [-35.341, -9.2306], [-36.3983, -10.4842], [-36.9378, -10.8206], [-37.4119, -11.497], [-37.6887, -12.0998], [-38.2398, -12.8443], [-38.788, -12.7825], [-38.8353, -13.147], [-39.0894, -13.5882], [-38.9422, -14.0308], [-39.0596, -14.6548], [-38.8805, -15.8645], [-39.2152, -17.3156], [-39.154, -17.7039], [-39.4869, -17.9904], [-39.7399, -18.6397], [-39.6999, -19.278], [-40.0013, -19.7419], [-40.3959, -20.5693], [-40.7893, -20.9062], [-41.0472, -21.506], [-41.1226, -22.0843], [-41.7054, -22.3098], [-41.9804, -22.5806], [-42.0423, -22.9472], [-42.9583, -22.9672], [-43.5327, -23.0462], [-43.8661, -22.9103], [-44.6373, -23.0555], [-45.4232, -23.6854], [-45.9722, -23.7955], [-46.8672, -24.2363], [-47.8766, -24.9975], [-48.5452, -25.8162], [-48.6777, -26.703], [-48.5543, -27.1961], [-48.6208, -28.0755], [-48.7997, -28.5753], [-49.2714, -28.871], [-49.7461, -29.3632], [-50.2994, -30.4259], [-51.1572, -30.3641], [-51.4637, -31.0527], [-51.9725, -31.3839], [-52.1935, -31.8855], [-52.1274, -32.1678], [-52.6522, -33.1376], [-53.3707, -33.7422], [-53.5314, -33.1709], [-53.1255, -32.7368], [-53.6018, -32.403], [-53.7618, -32.0568], [-54.2206, -31.8553], [-54.5876, -31.4851], [-55.2546, -31.2258], [-55.5573, -30.876], [-55.8736, -31.0696], [-56.1761, -30.6283], [-56.8329, -30.1072], [-57.2143, -30.2835], [-57.609, -30.188], [-56.9387, -29.5949], [-55.7256, -28.2043], [-55.1015, -27.8669], [-54.8291, -27.5509], [-54.3271, -27.4235], [-53.8381, -27.1212], [-53.6712, -26.225], [-53.8912, -25.6687], [-54.1546, -25.5231], [-54.6159, -25.576], [-54.4731, -25.2204], [-54.2418, -24.0472], [-54.6253, -23.8123], [-55.3662, -23.9913], [-55.6541, -22.8105], [-55.8492, -22.3076], [-56.5239, -22.1024], [-56.9374, -22.2712], [-57.8203, -22.1424], [-57.9856, -22.0461], [-57.8303, -20.9981], [-58.1599, -20.1645], [-58.1315, -19.7445], [-57.8005, -19.0809], [-57.5741, -18.2792], [-57.8325, -17.5123], [-58.396, -17.2343], [-58.5381, -16.3284], [-60.1756, -16.2693], [-60.299, -14.6185], [-60.5065, -13.7897], [-61.0769, -13.4897], [-61.79, -13.5256], [-62.1759, -13.1336], [-62.7655, -12.9973], [-63.0675, -12.6693], [-63.5858, -12.5188], [-64.4205, -12.4399], [-64.5135, -12.2508], [-64.9924, -11.9751], [-65.39, -11.2462], [-65.334, -10.8929], [-65.4368, -10.449], [-65.3132, -10.2533], [-65.3962, -9.7126], [-66.2636, -9.8262], [-66.7301, -9.9755], [-67.5824, -10.5058], [-68.0718, -10.7029], [-68.398, -11.0185], [-69.5786, -10.9519], [-70.2202, -11.0478], [-70.6424, -11.0101], [-70.637, -9.4782], [-71.2381, -9.9661], [-72.1815, -10.0038], [-72.3791, -9.5102], [-73.2093, -9.4116], [-72.9741, -8.993], [-73.5492, -8.3458], [-74.0022, -7.5562], [-73.7496, -7.3356], [-73.758, -6.9058], [-73.1374, -6.466], [-73.2355, -6.0984], [-72.9799, -5.6351], [-72.8871, -5.1228], [-72.6987, -5.0673], [-71.8449, -4.5044], [-70.9737, -4.3505], [-70.7995, -4.1733], [-69.9658, -4.2358], [-69.6691, -2.6676], [-69.4003, -1.1948], [-69.6675, -0.4823], [-70.0706, -0.1387], [-70.0539, 0.5786], [-69.1632, 0.864], [-69.3615, 1.0642], [-69.8522, 1.0594], [-69.8486, 1.7087], [-68.1765, 1.7198], [-67.8152, 1.7899], [-67.352, 2.086], [-66.8761, 1.2231], [-66.4293, 0.8219], [-66.06, 0.7854], [-65.6814, 0.9835], [-65.3609, 0.8685], [-65.1037, 1.1082], [-64.1149, 1.6191], [-64.0354, 1.9045], [-63.394, 2.2224], [-63.3894, 2.4118], [-63.9243, 2.4523], [-64.2188, 3.2046], [-64.2212, 3.5873], [-64.5679, 3.8998], [-64.2556, 4.1404], [-64.0215, 3.9291], [-63.2948, 3.9224], [-62.9685, 3.594], [-62.7122, 4.0179], [-62.1531, 4.0982], [-61.0028, 4.5355], [-60.6046, 4.9944], [-60.7422, 5.2022], [-60.1421, 5.239], [-59.9907, 5.0828], [-60.1112, 4.511], [-59.8333, 4.476], [-59.5513, 3.9336], [-59.8544, 3.5873], [-59.9942, 2.6902], [-59.7552, 2.2742], [-59.7563, 1.9005], [-59.2312, 1.3758], [-58.8626, 1.2036], [-58.5119, 1.2848], [-58.3407, 1.5876], [-57.5943, 1.7043], [-57.119, 2.0141], [-56.8369, 1.8814], [-56.4828, 1.9422]]], [[[-49.6287, -0.2293], [-49.1169, -0.1635], [-48.3798, -0.3527], [-48.5396, -0.8011], [-48.9289, -1.4824], [-49.5879, -1.7123], [-50.5076, -1.7877], [-50.7597, -1.2405], [-50.7713, -0.6452], [-50.6454, -0.2728], [-50.2481, -0.1166], [-49.6287, -0.2293]]], [[[-51.8326, -1.4335], [-51.5461, -0.6496], [-51.1608, -0.6665], [-51.2764, -1.0216], [-51.8326, -1.4335]]]]
      },
      "properties": {
        "id": "BR",
        "name": "Brazil"
      },
      "id": "BR"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[-59.4933, 13.0821], [-59.6114, 13.1022], [-59.5916, 13.3178], [-59.4276, 13.1527], [-59.4933, 13.0821]]]
      },
      "properties": {
        "id": "BB",
        "name": "Barbados"
      },
      "id": "BB"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[115.0267, 4.8999], [114.7465, 4.7179], [114.8402, 4.3934], [114.6084, 4.0241], [114.0638, 4.5928], [114.2995, 4.6074], [115.0267, 4.8999], [115.1399, 4.8999], [115.0267, 4.8999]]]
      },
      "properties": {
        "id": "BN",
        "name": "Brunei"
      },
      "id": "BN"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[91.6317, 27.7599], [91.5949, 27.5575], [92.0835, 27.2907], [91.9984, 26.8548], [90.7395, 26.7718], [90.3457, 26.8903], [89.7638, 26.7017], [88.8578, 26.9613], [88.8912, 27.316], [89.537, 28.1075], [89.9808, 28.3112], [90.353, 28.0804], [91.6056, 27.9516], [91.6317, 27.7599]]]
      },
      "properties": {
        "id": "BT",
        "name": "Bhutan"
      },
      "id": "BT"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[25.2588, -17.7936], [25.2241, -17.9152], [25.7613, -18.6496], [26.1683, -19.5381], [26.6783, -19.8928], [27.2217, -20.1458], [27.2807, -20.4787], [27.6997, -20.5308], [27.6695, -21.0643], [28.0455, -21.5729], [29.0371, -21.8113], [29.3648, -22.194], [28.8397, -22.4807], [28.2102, -22.6938], [27.8906, -23.0737], [27.1462, -23.5243], [26.8349, -24.2408], [26.3974, -24.6136], [25.9123, -24.7476], [25.5836, -25.6061], [24.7483, -25.8174], [23.8938, -25.6008], [23.2661, -25.2665], [22.8786, -25.4579], [22.6403, -26.0714], [22.0908, -26.5801], [21.6464, -26.8544], [20.7399, -26.849], [20.6267, -26.4438], [20.7932, -25.9155], [20.3454, -25.0299], [19.9804, -24.7769], [19.9774, -21.9999], [20.9708, -21.9999], [20.977, -20.1525], [20.9739, -18.3188], [23.2985, -18.0276], [23.5804, -18.4529], [24.3591, -17.9782], [25.2588, -17.7936]]]
      },
      "properties": {
        "id": "BW",
        "name": "Botswana"
      },
      "id": "BW"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[5.6937, 50.7745], [5.7973, 50.7546], [5.9939, 50.7504], [6.3645, 50.3162], [6.1163, 50.1209], [5.7439, 49.9196], [5.7896, 49.5384], [4.8677, 49.788], [4.1744, 50.2466], [2.8396, 50.7117], [2.5249, 51.0971], [3.35, 51.3776], [3.9022, 51.2076], [4.2262, 51.3865], [4.5032, 51.4746], [5.827, 51.1257], [5.6937, 50.7745]]]
      },
      "properties": {
        "id": "BE",
        "name": "Belgium"
      },
      "id": "BE"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[22.86, 10.9195], [23.2559, 10.4579], [23.6461, 9.8231], [23.5373, 8.8159], [24.1472, 8.6654], [24.2916, 8.2912], [24.8534, 8.1377], [25.2472, 7.7244], [25.3808, 7.3333], [25.8891, 7.0648], [26.3619, 6.6355], [26.5141, 6.0692], [27.0837, 5.777], [27.4032, 5.1094], [27.1151, 5.1977], [26.8222, 5.0624], [25.525, 5.3122], [25.2494, 5.0247], [24.7655, 4.9301], [24.3199, 4.994], [23.417, 4.6633], [22.7557, 4.6469], [22.4223, 4.135], [21.5376, 4.2447], [20.558, 4.4627], [20.2264, 4.8297], [19.8064, 5.0894], [19.501, 5.1276], [19.0687, 4.8914], [18.5675, 4.2576], [18.6101, 3.4785], [18.161, 3.4998], [17.4378, 3.6845], [16.6734, 3.5354], [16.4683, 2.8318], [16.1835, 2.2703], [16.0636, 2.9086], [15.775, 3.1269], [15.1288, 3.827], [15.0226, 4.3584], [14.7088, 4.6655], [14.6169, 5.8649], [14.7394, 6.2799], [15.2459, 7.2636], [15.4803, 7.5237], [15.8451, 7.4754], [16.3787, 7.6835], [16.7848, 7.5508], [17.6496, 7.9836], [18.4553, 8.032], [19.1086, 8.6561], [19.1455, 9.0161], [20.3422, 9.127], [20.7732, 9.4058], [21.2637, 9.9745], [21.7258, 10.3665], [21.7063, 10.5746], [22.4938, 10.9963], [22.86, 10.9195]]]
      },
      "properties": {
        "id": "CF",
        "name": "Central African Republic"
      },
      "id": "CF"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [[[[-69.4889, 83.0169], [-63.641, 82.8127], [-61.3925, 82.4418], [-62.1766, 82.0435], [-64.5741, 81.7336], [-65.4839, 81.2848], [-70.1434, 80.3977], [-71.3878, 79.7618], [-75.2595, 79.4209], [-76.2558, 79.0068], [-74.4332, 78.724], [-75.866, 78.0098], [-78.0127, 77.9461], [-78.0762, 77.5191], [-79.3408, 77.1584], [-78.2888, 76.978], [-78.2844, 76.5711], [-80.6903, 76.1765], [-81.1708, 76.5128], [-83.8856, 76.453], [-85.1412, 76.3046], [-89.5701, 76.4919], [-89.4997, 76.8268], [-88.3982, 77.104], [-86.8737, 77.2004], [-88.0946, 77.7193], [-87.018, 77.8921], [-87.5517, 78.1767], [-86.808, 78.7744], [-84.3162, 78.9753], [-85.0899, 79.6122], [-86.4207, 79.8452], [-86.3073, 80.3193], [-83.7236, 80.2291], [-80.0511, 80.5286], [-83.4014, 80.714], [-85.3074, 80.526], [-88.9214, 80.8056], [-89.9474, 81.1725], [-88.8923, 81.4742], [-91.6476, 81.6839], [-82.1225, 82.6018], [-79.8864, 82.9386], [-69.97, 83.1161], [-69.4889, 83.0169]]], [[[-91.8857, 81.1328], [-90.643, 80.5937], [-87.6749, 80.3722], [-87.1442, 79.6626], [-85.5014, 79.5304], [-85.2899, 79.2083], [-87.0164, 78.8987], [-88.7911, 78.1925], [-90.6144, 78.1498], [-92.6782, 78.3891], [-95.1032, 79.29], [-95.297, 79.6531], [-96.7733, 80.1358], [-95.6146, 80.3961], [-96.1328, 80.6914], [-95.2697, 81.0007], [-91.8857, 81.1328]]], [[[-103.426, 79.3157], [-99.6094, 78.5831], [-99.1663, 77.8569], [-100.5859, 77.8917], [-101.0742, 78.1938], [-102.7313, 78.3711], [-103.5183, 78.7691], [-105.5358, 79.0325], [-105.3878, 79.3235], [-103.426, 79.3157]]], [[[-96.2045, 78.5314], [-94.8873, 78.3451], [-95.087, 77.9927], [-96.9895, 77.806], [-98.2549, 78.4293], [-96.2045, 78.5314]]], [[[-109.816, 78.6503], [-109.3906, 78.3367], [-113.1499, 78.4084], [-110.4077, 78.7566], [-109.816, 78.6503]]], [[[-110.4581, 78.1032], [-109.7719, 77.9574], [-110.1985, 77.5246], [-111.952, 77.3442], [-113.1643, 77.5302], [-113.2151, 77.9035], [-110.4581, 78.1032]]], [[[-95.4842, 77.7921], [-93.301, 77.7399], [-93.5196, 77.4744], [-95.987, 77.484], [-95.4842, 77.7921]]], [[[-115.5513, 77.3632], [-116.2205, 76.6111], [-119.3679, 76.2218], [-119.9127, 75.8589], [-121.9083, 76.0347], [-121.6138, 76.4415], [-119.0903, 77.3051], [-115.5513, 77.3632]]], [[[-94.2949, 76.9125], [-92.7162, 76.6029], [-91.305, 76.6808], [-90.2515, 76.0536], [-88.2014, 75.512], [-86.0687, 75.5022], [-83.932, 75.8189], [-82.1538, 75.8309], [-79.6602, 75.4494], [-79.508, 74.8801], [-80.2777, 74.5816], [-81.8089, 74.4767], [-85.0116, 74.6043], [-85.8079, 74.499], [-89.8444, 74.5486], [-91.9615, 74.7931], [-92.4281, 75.3828], [-92.1851, 75.8465], [-93.0917, 76.3541], [-95.2739, 76.2644], [-96.6397, 76.703], [-95.6383, 77.0639], [-94.2949, 76.9125]]], [[[-108.3869, 76.0666], [-105.4809, 75.7457], [-105.8625, 75.1915], [-107.1533, 74.9272], [-108.8312, 75.0648], [-110.9408, 74.6386], [-112.5193, 74.4169], [-113.5141, 74.43], [-114.4518, 75.0879], [-115.7289, 74.9683], [-117.6001, 75.2717], [-116.6098, 76.0738], [-115.5806, 76.4375], [-114.1939, 76.4515], [-112.6975, 76.2016], [-111.0527, 75.5484], [-109.0865, 75.5064], [-108.9449, 75.6989], [-110.2701, 76.4169], [-109.3386, 76.76], [-108.467, 76.7376], [-108.3869, 76.0666]]], [[[-97.7008, 76.4664], [-97.4097, 75.5522], [-97.7994, 75.1167], [-100.2344, 75.0077], [-100.712, 75.4064], [-102.5413, 75.5136], [-101.4314, 75.9919], [-102.1378, 76.2848], [-100.388, 76.6135], [-97.7008, 76.4664]]], [[[-102.2275, 76.0149], [-103.3148, 75.7641], [-104.3506, 76.1823], [-102.5841, 76.2817], [-102.2275, 76.0149]]], [[[-93.5427, 75.0279], [-93.5471, 74.691], [-94.6973, 74.6422], [-96.5658, 75.0988], [-95.6707, 75.5287], [-94.4272, 75.5934], [-93.5427, 75.0279]]], [[[-119.7363, 74.1126], [-117.5149, 74.2318], [-115.5107, 73.6188], [-115.4468, 73.4388], [-118.9615, 72.6842], [-120.18, 72.2126], [-120.6192, 71.5057], [-123.2107, 71.1235], [-124.0077, 71.6775], [-125.7627, 72.1375], [-124.9872, 72.5881], [-124.8365, 73.0762], [-123.7973, 73.7681], [-124.6962, 74.3481], [-121.3153, 74.5299], [-119.7363, 74.1126]]], [[[-93.4102, 74.1788], [-92.2228, 73.9723], [-90.3547, 73.8687], [-92.118, 72.7539], [-93.3407, 72.8018], [-94.0377, 72.0288], [-95.1929, 72.0275], [-95.5475, 72.7816], [-95.633, 73.6954], [-95.0397, 74.0239], [-93.4102, 74.1788]]], [[[-100.002, 73.9459], [-99.158, 73.7316], [-97.5819, 73.8876], [-97.0017, 73.6665], [-97.7959, 73.2852], [-97.0519, 72.6367], [-96.6134, 71.8339], [-98.663, 71.3021], [-99.167, 71.3671], [-100.5944, 72.1524], [-101.7239, 72.3149], [-102.7137, 72.783], [-100.4848, 72.773], [-100.2827, 73.1203], [-101.4509, 73.4311], [-100.9151, 73.8052], [-100.002, 73.9459]]], [[[-86.5894, 71.0107], [-84.7896, 71.0933], [-84.6995, 71.6315], [-85.9116, 71.9866], [-85.3412, 72.4216], [-85.6446, 72.7745], [-85.0185, 73.3356], [-82.6596, 73.7296], [-81.4061, 73.6345], [-80.2748, 72.7454], [-80.9413, 72.2101], [-78.4531, 72.4351], [-77.7533, 72.7248], [-75.2943, 72.4809], [-74.9032, 72.1005], [-73.7137, 71.7198], [-71.6407, 71.5163], [-70.7926, 71.1033], [-70.5609, 70.7381], [-69.1686, 70.7642], [-67.3637, 70.0344], [-66.6853, 69.2857], [-67.7517, 69.0387], [-68.038, 68.5507], [-67.033, 68.3261], [-66.2252, 67.9587], [-64.5275, 67.8127], [-64.0079, 67.3473], [-61.9685, 67.019], [-61.2998, 66.6488], [-61.9915, 66.0353], [-62.6589, 65.6398], [-63.3642, 65.5433], [-63.4018, 65.1185], [-64.6653, 65.1689], [-65.4015, 65.7639], [-65.3055, 66.0085], [-66.4771, 66.2798], [-67.1833, 66.0345], [-68.2569, 65.9386], [-67.3034, 65.4829], [-66.8606, 65.0917], [-65.2748, 64.6316], [-65.0107, 64.0088], [-64.6785, 64.0281], [-64.5144, 63.2639], [-64.6724, 62.9219], [-65.3966, 62.7883], [-66.6364, 63.0802], [-67.6761, 63.0935], [-66.2813, 62.3026], [-66.2567, 61.8684], [-67.4401, 62.1513], [-69.0823, 62.4052], [-69.5452, 62.7445], [-70.2362, 62.7634], [-71.2538, 63.0424], [-73.4437, 64.4236], [-74.5124, 64.6702], [-75.0675, 64.4567], [-76.7239, 64.242], [-77.7912, 64.367], [-78.0957, 64.9392], [-77.4474, 65.1615], [-77.3267, 65.4532], [-75.8283, 65.2271], [-73.5607, 65.5429], [-74.434, 66.139], [-73.0334, 66.7283], [-72.2202, 67.2543], [-73.3283, 68.2668], [-74.648, 68.7076], [-74.9172, 68.9828], [-76.4034, 68.6923], [-75.7873, 69.3186], [-77.1289, 69.6527], [-78.9797, 70.5812], [-79.3475, 70.3722], [-78.7778, 70.0477], [-79.3033, 69.8948], [-81.0982, 70.0912], [-82.1387, 69.8413], [-86.3219, 70.1454], [-86.6244, 70.4012], [-87.9006, 70.2519], [-88.8483, 70.5229], [-89.3654, 71.0671], [-87.8449, 70.9443], [-87.8724, 71.2085], [-89.0794, 71.2879], [-89.8458, 71.4924], [-90.0251, 71.9489], [-89.2631, 73.0691], [-87.7197, 73.7229], [-85.1106, 73.8081], [-86.6294, 72.8709], [-86.036, 71.7709], [-85.0233, 71.3532], [-86.5894, 71.0107]]], [[[-79.5373, 73.6545], [-78.2866, 73.6658], [-77.2066, 73.4996], [-76.2896, 73.081], [-76.4005, 72.8207], [-77.8361, 72.8968], [-79.5007, 72.7559], [-80.8241, 73.3807], [-80.849, 73.7212], [-79.5373, 73.6545]]], [[[-105.289, 72.9199], [-106.9216, 73.4799], [-105.5122, 73.7658], [-104.583, 73.3538], [-105.289, 72.9199]]], [[[-114.5215, 72.593], [-113.5001, 72.6944], [-112.7537, 72.986], [-111.2698, 72.7137], [-108.7549, 72.551], [-107.7199, 73.3289], [-106.4822, 73.1962], [-105.415, 72.7883], [-104.3495, 71.4339], [-104.5696, 71.1039], [-103.105, 70.5102], [-101.1486, 70.1476], [-100.935, 69.7152], [-102.2343, 69.8422], [-102.9197, 69.5648], [-101.9756, 69.407], [-101.857, 69.0239], [-103.4681, 68.8086], [-105.0195, 69.0814], [-106.1408, 69.1621], [-106.659, 69.4396], [-107.4398, 69.0021], [-108.946, 68.7597], [-111.3108, 68.542], [-113.1277, 68.4941], [-113.6941, 69.195], [-116.5134, 69.4247], [-117.1354, 70.1001], [-114.5923, 70.3125], [-112.6378, 70.2252], [-112.1143, 70.4467], [-113.7573, 70.6907], [-115.991, 70.5864], [-117.587, 70.6296], [-118.2642, 70.8882], [-117.814, 71.1585], [-118.8683, 71.6868], [-118.9447, 71.9855], [-118.2136, 72.2629], [-118.3745, 72.5339], [-117.5517, 72.8311], [-114.6382, 73.3726], [-114.1091, 72.8611], [-114.5215, 72.593]]], [[[-74.7088, 45.0038], [-75.1794, 44.8994], [-75.7919, 44.4969], [-76.8937, 44.0755], [-77.2102, 43.8638], [-77.7074, 44.0185], [-78.9957, 43.8352], [-79.5425, 43.5782], [-79.7162, 43.2304], [-79.0592, 43.278], [-79.0661, 43.1061], [-79.069, 42.8425], [-80.2135, 42.7783], [-80.4205, 42.5784], [-81.2024, 42.6616], [-82.4573, 42.0525], [-82.9832, 41.9883], [-83.0732, 42.3003], [-82.8817, 42.3798], [-82.5755, 42.6044], [-82.4173, 43.0174], [-81.7238, 43.3922], [-81.7309, 44.1095], [-81.2777, 44.5878], [-81.1956, 44.9804], [-80.6067, 44.6271], [-80.082, 44.4772], [-79.7244, 44.7806], [-80.6666, 45.8149], [-81.0021, 45.9613], [-83.5313, 46.2896], [-84.0377, 46.1587], [-84.1921, 46.5494], [-84.5035, 46.494], [-84.5806, 46.7653], [-84.455, 46.9466], [-84.8062, 47.0437], [-84.6149, 47.3083], [-85.0289, 47.5676], [-84.9314, 47.9436], [-85.8256, 47.9602], [-86.1539, 48.2291], [-86.4775, 48.7535], [-87.2537, 48.7535], [-88.0889, 48.9915], [-88.4791, 48.825], [-88.6528, 48.4704], [-89.163, 48.4299], [-89.5776, 48.0019], [-90.8403, 48.2007], [-91.5184, 48.0582], [-92.9962, 48.6117], [-93.2579, 48.629], [-93.378, 48.6165], [-93.3769, 48.617], [-93.378, 48.6165], [-93.7078, 48.5256], [-94.6209, 48.7426], [-95.162, 48.9917], [-97.5298, 48.9933], [-99.2354, 48.993], [-101.7935, 48.993], [-104.352, 48.993], [-106.4839, 48.993], [-109.4684, 48.993], [-112.0268, 48.993], [-113.7322, 48.993], [-116.2906, 48.993], [-118.849, 48.993], [-120.5544, 48.993], [-122.7888, 48.993], [-123.0491, 48.993], [-123.3356, 49.4591], [-123.859, 49.4829], [-124.1415, 49.7927], [-124.7823, 50.0202], [-125.0566, 50.4185], [-126.4045, 50.5298], [-126.6318, 50.9151], [-127.0577, 50.8675], [-127.7082, 51.1512], [-127.9022, 52.1509], [-128.3576, 52.1588], [-128.1088, 52.858], [-128.6524, 53.2437], [-129.2843, 53.3931], [-129.5637, 53.2515], [-130.3351, 53.724], [-130.0433, 54.1335], [-130.4303, 54.4209], [-129.6666, 55.4365], [-130.0251, 55.8882], [-130.4772, 56.2307], [-131.5751, 56.5989], [-131.8661, 56.7929], [-133.8208, 58.7049], [-134.9439, 59.2882], [-135.4758, 59.7933], [-136.3219, 59.6049], [-136.5787, 59.1522], [-137.4386, 58.9031], [-137.5933, 59.2263], [-139.1852, 60.0837], [-141.0021, 60.3003], [-141.0021, 62.9301], [-141.0021, 64.6832], [-141.0021, 67.021], [-141.0021, 69.6509], [-139.1815, 69.5155], [-138.1283, 69.1519], [-136.7174, 68.8892], [-135.8763, 68.9169], [-135.6913, 69.311], [-135.1409, 69.4677], [-133.1632, 69.4338], [-130.4985, 70.1431], [-128.9715, 69.7123], [-127.765, 70.2219], [-127.1385, 70.2392], [-126.0638, 69.4671], [-124.7678, 69.99], [-123.6091, 69.3774], [-123.0258, 69.81], [-120.9623, 69.6604], [-120.2925, 69.4205], [-118.8687, 69.2571], [-118.0953, 69.0429], [-116.0652, 68.8554], [-115.6312, 68.9726], [-114.4139, 68.6597], [-115.1332, 67.8191], [-112.4352, 67.6848], [-110.9901, 67.7907], [-110.0426, 67.9772], [-109.6305, 67.7328], [-108.5929, 67.591], [-107.6263, 67.003], [-108.261, 68.1498], [-108.3134, 68.6108], [-106.1645, 68.9197], [-105.4285, 68.4583], [-104.1935, 68.0311], [-103.4741, 68.115], [-102.692, 67.8116], [-101.555, 67.6931], [-100.4561, 67.8396], [-99.0321, 67.7188], [-98.4171, 67.8265], [-98.2184, 68.3174], [-97.2659, 68.453], [-96.036, 68.1578], [-96.3714, 67.5539], [-95.7825, 67.1937], [-95.2588, 67.2625], [-95.6505, 67.7374], [-93.6517, 68.5431], [-93.6814, 68.8873], [-94.3382, 69.4742], [-96.0503, 69.8311], [-96.4924, 70.1249], [-96.2265, 70.5418], [-96.549, 70.8088], [-96.4056, 71.2737], [-95.2013, 71.9036], [-94.3084, 71.7649], [-92.9488, 71.2622], [-92.9814, 70.8522], [-91.5641, 70.1782], [-92.751, 69.7139], [-90.8221, 69.2904], [-90.4683, 68.8638], [-89.0568, 69.266], [-88.0413, 68.8117], [-87.8103, 68.4042], [-88.347, 68.2883], [-88.1958, 67.7659], [-87.2663, 67.1839], [-86.5363, 67.5162], [-85.9526, 68.0724], [-85.7337, 68.6301], [-84.8622, 69.074], [-85.3869, 69.2318], [-85.5074, 69.8453], [-82.6183, 69.691], [-82.6421, 69.4585], [-81.3286, 69.12], [-81.2816, 68.6572], [-82.5526, 68.4464], [-81.9764, 67.862], [-81.2702, 67.4598], [-81.4675, 67.0698], [-82.6416, 66.5876], [-84.4785, 66.1794], [-85.604, 66.5683], [-86.6331, 66.5314], [-86.0429, 66.0225], [-87.2914, 65.3548], [-87.9701, 65.3489], [-89.7495, 65.9359], [-89.9241, 65.7804], [-88.974, 65.3482], [-87.0275, 65.1982], [-87.2805, 64.8262], [-88.1057, 64.1832], [-88.653, 64.0094], [-90.1418, 63.982], [-90.0135, 63.8043], [-91.3301, 63.5067], [-90.7466, 63.3516], [-90.8712, 62.9459], [-91.4491, 62.804], [-92.3613, 62.8194], [-93.4207, 61.7058], [-93.9127, 61.4815], [-94.6466, 60.4163], [-94.7858, 59.9534], [-94.7134, 58.9033], [-94.2871, 58.716], [-93.2781, 58.7564], [-92.249, 57.0091], [-91.1113, 57.2412], [-90.5922, 57.2246], [-89.791, 56.9813], [-88.9484, 56.8512], [-88.0751, 56.4673], [-87.5608, 56.0564], [-85.8306, 55.657], [-85.061, 55.2856], [-83.9107, 55.3147], [-82.5775, 55.1487], [-82.2195, 54.8136], [-82.4181, 54.3559], [-82.1414, 53.8177], [-82.2605, 52.9612], [-81.5994, 52.4325], [-81.6613, 52.2938], [-80.6579, 51.7582], [-80.368, 51.3299], [-79.8362, 51.1734], [-79.4976, 51.5698], [-78.9777, 51.7339], [-78.4917, 52.2521], [-78.7238, 52.6278], [-79.2418, 54.0989], [-79.6656, 54.6975], [-77.8911, 55.2364], [-77.3249, 55.5555], [-76.6504, 56.1073], [-76.573, 57.1812], [-77.1569, 58.0188], [-78.5152, 58.6822], [-77.7606, 59.3801], [-77.3119, 60.0424], [-77.8716, 60.7859], [-77.7362, 61.4373], [-78.1372, 62.1073], [-78.0682, 62.3555], [-77.3724, 62.5725], [-74.6899, 62.1834], [-73.63, 62.4543], [-72.0814, 61.7283], [-71.4227, 61.159], [-70.2792, 61.0686], [-69.4334, 60.8143], [-69.7595, 60.4403], [-69.682, 59.3417], [-69.1735, 58.8967], [-68.6981, 58.9044], [-67.5697, 58.2135], [-66.608, 58.5489], [-65.6061, 59.1106], [-64.9312, 60.2519], [-64.4996, 60.2683], [-63.1854, 58.8578], [-62.5939, 58.4741], [-62.3056, 57.9723], [-61.899, 57.8613], [-61.8511, 57.3812], [-61.3337, 57.0106], [-61.5146, 56.3902], [-59.9303, 55.2594], [-58.997, 55.1493], [-58.7802, 54.8384], [-58.1952, 54.8659], [-57.4045, 54.5705], [-58.1514, 54.3504], [-57.4161, 54.1628], [-57.1489, 53.8476], [-56.4651, 53.7651], [-55.7979, 53.212], [-55.8337, 52.3104], [-55.6952, 52.1377], [-56.976, 51.4577], [-58.5103, 51.295], [-59.1655, 50.7799], [-60.0801, 50.2545], [-61.2897, 50.202], [-62.7155, 50.3016], [-64.868, 50.2754], [-65.2686, 50.3201], [-66.4955, 50.212], [-66.9412, 49.9937], [-67.3719, 49.3486], [-68.282, 49.1972], [-68.9291, 48.829], [-69.775, 48.0981], [-69.9055, 47.8322], [-70.7058, 47.1397], [-71.2678, 46.7957], [-71.8797, 46.687], [-72.981, 46.2098], [-73.974, 45.3451], [-74.7088, 45.0038]]], [[[-97.4394, 69.6427], [-96.3, 69.3443], [-95.6856, 68.7358], [-96.4016, 68.4708], [-97.4721, 68.5438], [-99.2541, 68.8631], [-99.5641, 69.0341], [-97.4394, 69.6427]]], [[[-75.6759, 68.3225], [-75.1538, 68.234], [-75.1274, 67.5373], [-75.7801, 67.2836], [-77.0048, 67.267], [-77.3058, 67.7061], [-76.7403, 68.2313], [-75.6759, 68.3225]]], [[[-85.0559, 65.4374], [-83.4071, 65.1038], [-82.0501, 64.6442], [-81.7161, 64.0219], [-80.829, 64.09], [-80.3021, 63.7622], [-81.0462, 63.4615], [-82.3781, 63.7067], [-82.4672, 63.9268], [-83.4943, 64.0993], [-83.7283, 63.8134], [-84.633, 63.3092], [-85.4954, 63.1392], [-85.7142, 63.6579], [-87.1889, 63.6723], [-86.252, 64.1369], [-86.3743, 64.5659], [-85.9617, 65.7043], [-85.241, 65.7954], [-85.0559, 65.4374]]], [[[-82.0477, 62.9705], [-82.1138, 62.6522], [-83.0158, 62.2099], [-83.6989, 62.1602], [-83.8994, 62.4764], [-83.3765, 62.905], [-82.0477, 62.9705]]], [[[-79.5452, 62.4116], [-79.324, 62.0261], [-79.7143, 61.6126], [-80.2652, 61.8182], [-80.0216, 62.3431], [-79.5452, 62.4116]]], [[[-78.9356, 56.2662], [-79.1755, 55.8851], [-80.0009, 55.9321], [-79.5963, 56.2444], [-78.9356, 56.2662]]], [[[-132.6556, 54.1275], [-131.7026, 53.9863], [-132.0112, 53.2653], [-132.7475, 53.3105], [-133.0522, 53.7782], [-132.6556, 54.1275]]], [[[-131.8535, 53.2298], [-131.6524, 53.103], [-131.8097, 52.5417], [-132.3455, 53.1361], [-131.8535, 53.2298]]], [[[-80.7318, 52.7472], [-81.8391, 52.9579], [-81.8473, 53.1862], [-81.1357, 53.2058], [-80.7318, 52.7472]]], [[[-55.4588, 51.5365], [-55.8714, 50.9073], [-56.6939, 50.0597], [-55.7648, 49.9605], [-55.892, 49.5803], [-54.9827, 49.268], [-54.579, 49.4908], [-53.9578, 49.4418], [-53.5733, 49.1413], [-53.853, 48.8112], [-53.5312, 48.2317], [-52.955, 48.0293], [-53.1756, 47.6529], [-52.6536, 47.5494], [-53.0697, 46.6812], [-53.6164, 46.6803], [-54.1737, 46.8805], [-53.8692, 47.387], [-54.8567, 47.3848], [-56.2212, 47.6716], [-56.9524, 47.5744], [-58.3332, 47.6769], [-59.1169, 47.5708], [-59.3623, 47.8655], [-58.7105, 48.325], [-58.7165, 48.5979], [-58.0158, 49.5426], [-57.4656, 50.4637], [-56.7503, 51.2748], [-56.0256, 51.5685], [-55.4588, 51.5365]]], [[[-127.1972, 50.6402], [-125.4821, 50.3167], [-124.6429, 49.4287], [-123.9959, 49.2241], [-123.497, 48.582], [-123.5947, 48.3334], [-124.6892, 48.5975], [-125.8286, 49.0917], [-125.8354, 49.2767], [-126.5485, 49.4189], [-126.683, 49.8764], [-127.1143, 49.8797], [-128.2675, 50.6092], [-127.9181, 50.8605], [-127.1972, 50.6402]]], [[[-61.8011, 49.094], [-62.2195, 49.0791], [-63.5658, 49.3994], [-64.1315, 49.9416], [-62.8585, 49.7054], [-61.8171, 49.2835], [-61.8011, 49.094]]], [[[-74.7088, 45.0038], [-73.558, 45.425], [-73.1596, 46.0101], [-71.901, 46.632], [-71.2611, 46.7563], [-70.5196, 47.0323], [-68.9871, 48.2748], [-67.5608, 48.8558], [-66.1781, 49.2132], [-64.8365, 49.1916], [-64.2619, 48.9218], [-64.2538, 48.5505], [-65.2595, 48.0214], [-65.9267, 48.1887], [-65.6665, 47.6959], [-65.2282, 47.8114], [-64.7033, 47.7248], [-64.9121, 47.3688], [-65.3189, 47.1012], [-64.9057, 46.8881], [-64.5415, 46.2404], [-63.2928, 45.7521], [-62.4832, 45.6216], [-61.9556, 45.868], [-61.4924, 45.6869], [-61.2838, 45.2355], [-63.7611, 44.4861], [-64.286, 44.5501], [-64.8624, 43.8678], [-65.7382, 43.5607], [-66.1257, 43.8137], [-66.0995, 44.3677], [-65.6568, 44.7605], [-64.4489, 45.2558], [-64.8979, 45.6261], [-65.8845, 45.223], [-66.8726, 45.0672], [-67.1249, 45.1693], [-67.4725, 45.2759], [-67.4328, 45.603], [-67.7846, 45.7016], [-67.8067, 47.0829], [-68.311, 47.3546], [-68.8288, 47.2033], [-69.243, 47.4629], [-70.0078, 46.7087], [-70.2963, 45.9062], [-70.898, 45.2625], [-71.3272, 45.2901], [-71.5174, 45.0078], [-74.7088, 45.0038]]], [[[-63.8337, 46.4939], [-63.1295, 46.422], [-62.1636, 46.4872], [-62.8785, 46.0012], [-63.117, 46.2529], [-63.5689, 46.2093], [-63.8337, 46.4939]]], [[[-61.1053, 45.9448], [-60.8062, 45.738], [-60.5049, 46.204], [-59.8651, 46.1597], [-60.3862, 45.6545], [-61.2838, 45.5737], [-61.4953, 45.9413], [-60.8702, 46.7966], [-60.3318, 46.7678], [-60.5769, 46.1721], [-61.1053, 45.9448]]], [[[-82.8067, 45.9898], [-82.0036, 45.9755], [-81.589, 45.7729], [-81.818, 45.5329], [-82.7175, 45.8042], [-82.8067, 45.9898]]]]
      },
      "properties": {
        "id": "CA",
        "name": "Canada"
      },
      "id": "CA"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[96.8403, -12.1819], [96.8351, -12.1798], [96.8279, -12.1509], [96.8257, -12.1261], [96.8328, -12.1261], [96.8395, -12.1602], [96.8403, -12.1819]]]
      },
      "properties": {
        "id": "CC",
        "name": "Cocos (Keeling) Islands"
      },
      "id": "CC"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[9.5242, 47.5242], [9.5277, 47.2707], [9.4877, 47.062], [9.5801, 47.0572], [10.4527, 46.865], [9.9391, 46.3616], [9.2511, 46.2866], [8.9537, 45.8298], [8.4583, 46.2457], [7.9931, 46.0158], [7.021, 45.9257], [6.7582, 46.4158], [6.06, 46.4282], [7.0007, 47.3226], [7.6154, 47.5925], [8.1982, 47.6067], [8.6177, 47.7661], [9.5242, 47.5242]]]
      },
      "properties": {
        "id": "CH",
        "name": "Switzerland"
      },
      "id": "CH"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [[[[-67.1948, -22.8216], [-67.0088, -23.0014], [-67.3562, -24.0338], [-68.2502, -24.3921], [-68.562, -24.8378], [-68.3843, -25.0921], [-68.6002, -25.4859], [-68.4144, -26.1538], [-68.5811, -26.5183], [-68.346, -27.028], [-68.8463, -27.1536], [-69.1744, -27.9246], [-69.6569, -28.4139], [-69.8278, -29.1031], [-70.0269, -29.3241], [-69.9277, -29.7695], [-69.9563, -30.358], [-70.1613, -30.4401], [-70.5196, -31.1487], [-70.5853, -31.5695], [-70.1696, -32.4718], [-70.0198, -33.2717], [-69.7978, -33.3987], [-69.8524, -34.2243], [-70.2899, -34.733], [-70.4703, -35.326], [-70.4049, -36.0616], [-71.0556, -36.5237], [-71.1677, -37.7621], [-71.0281, -38.0414], [-70.9517, -38.7383], [-71.4256, -38.9855], [-71.5394, -39.6025], [-71.7199, -39.6354], [-71.6952, -40.3354], [-71.9321, -40.6918], [-71.9114, -41.6506], [-71.75, -42.0466], [-72.1247, -42.2983], [-72.1464, -42.9898], [-71.7816, -43.1669], [-71.905, -43.44], [-71.6802, -43.9295], [-71.82, -44.3832], [-71.2128, -44.4413], [-71.2611, -44.7633], [-71.5962, -44.9793], [-71.3537, -45.2306], [-71.7463, -45.5791], [-71.6315, -45.9537], [-71.8757, -46.1606], [-71.6952, -46.5782], [-71.9402, -46.8312], [-71.905, -47.2015], [-72.346, -47.4926], [-72.518, -47.8762], [-72.3549, -48.3658], [-72.6143, -48.7929], [-73.5762, -49.5829], [-73.5012, -50.1254], [-73.153, -50.7384], [-72.5098, -50.6075], [-72.2763, -50.9102], [-72.4077, -51.541], [-71.9188, -51.9897], [-69.9603, -52.0084], [-68.4432, -52.3568], [-69.2409, -52.2055], [-69.5606, -52.4217], [-70.795, -52.7688], [-70.9959, -53.7791], [-71.2977, -53.8833], [-72.1744, -53.6321], [-71.8528, -53.2855], [-71.4002, -53.107], [-71.3878, -52.7643], [-72.4583, -53.2544], [-73.0527, -53.2433], [-74.0144, -52.6391], [-73.5183, -52.0408], [-73.9733, -51.7847], [-73.8958, -51.3315], [-74.8147, -51.0629], [-75.0948, -50.6812], [-74.3338, -49.9745], [-74.3411, -48.5957], [-74.5772, -48.2744], [-74.6549, -47.7022], [-74.1584, -47.1825], [-74.1519, -46.9742], [-75.6567, -46.6102], [-74.9246, -46.1597], [-75.0666, -45.8751], [-74.158, -45.7673], [-74.0377, -45.4175], [-73.5498, -45.4836], [-73.3625, -44.9781], [-72.7391, -44.7343], [-72.6638, -44.4365], [-73.2651, -44.1689], [-72.9965, -43.6317], [-72.7852, -42.3014], [-72.4994, -41.9808], [-72.6698, -41.6595], [-73.0149, -41.5441], [-73.5214, -41.7971], [-73.9659, -41.1184], [-73.6695, -40.0824], [-73.4104, -39.789], [-73.2264, -39.2244], [-73.5326, -38.3667], [-73.4648, -38.0404], [-73.6619, -37.6987], [-73.6017, -37.1886], [-73.216, -37.1669], [-73.1181, -36.6883], [-72.8746, -36.3905], [-72.6239, -35.5857], [-72.2237, -35.0961], [-72.0028, -34.1652], [-71.6644, -33.6526], [-71.743, -33.095], [-71.4522, -32.6597], [-71.5259, -31.8059], [-71.6619, -31.1695], [-71.6695, -30.3306], [-71.4005, -30.1432], [-71.3157, -29.6496], [-71.5192, -28.9264], [-71.1863, -28.3778], [-71.0527, -27.7274], [-70.6466, -26.3293], [-70.7138, -25.7842], [-70.4455, -25.1724], [-70.5742, -24.6442], [-70.4878, -23.7818], [-70.5633, -23.0568], [-70.3316, -22.8487], [-70.0875, -21.4931], [-70.1971, -20.7255], [-70.1483, -19.8049], [-70.4184, -18.3455], [-69.9263, -18.206], [-69.8522, -17.7039], [-69.5109, -17.506], [-69.3133, -17.9433], [-69.094, -18.0507], [-68.9684, -18.9682], [-68.4628, -19.4329], [-68.6983, -19.7211], [-68.7452, -20.4588], [-68.4998, -20.612], [-68.1969, -21.3004], [-67.9883, -22.0573], [-67.8795, -22.823], [-67.1948, -22.8216]]], [[[-73.7733, -43.3459], [-74.355, -43.2637], [-74.2095, -42.8789], [-74.0368, -41.7954], [-73.5279, -41.8961], [-73.4709, -42.4665], [-73.7893, -42.5859], [-73.4364, -42.9366], [-73.7733, -43.3459]]], [[[-73.7354, -44.3948], [-73.9833, -44.4947], [-73.7271, -45.1192], [-74.0991, -45.3252], [-74.6178, -44.6478], [-74.5017, -44.4733], [-73.7354, -44.3948]]], [[[-72.9861, -44.7801], [-73.4451, -44.6411], [-73.2078, -44.3348], [-72.7641, -44.5488], [-72.9861, -44.7801]]], [[[-74.5672, -48.5918], [-74.923, -48.6264], [-75.2129, -48.1416], [-74.7293, -48.1261], [-74.5672, -48.5918]]], [[[-74.4762, -49.148], [-74.5699, -49.991], [-75.3001, -49.8476], [-75.1842, -49.0836], [-74.7934, -48.705], [-74.4762, -49.148]]], [[[-68.6299, -52.6525], [-68.6533, -54.8538], [-69.4862, -54.8591], [-69.7235, -54.7121], [-70.4972, -54.8093], [-71.4409, -54.6198], [-70.8982, -54.3379], [-70.8678, -53.8843], [-70.0903, -53.4182], [-70.3906, -53.0262], [-69.7637, -52.7315], [-68.6299, -52.6525]]], [[[-72.9233, -53.4817], [-72.2055, -53.8076], [-73.3048, -53.9438], [-73.6865, -53.4266], [-72.9233, -53.4817]]], [[[-69.703, -54.919], [-68.9007, -55.0175], [-68.2826, -55.255], [-68.2933, -55.5214], [-69.4119, -55.4442], [-69.9798, -55.1475], [-69.703, -54.919]]], [[[-67.0799, -55.1538], [-68.07, -55.2213], [-68.1071, -54.9292], [-67.2453, -54.9777], [-67.0799, -55.1538]]]]
      },
      "properties": {
        "id": "CL",
        "name": "Chile"
      },
      "id": "CL"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [[[[130.5269, 42.5353], [130.2405, 42.8917], [129.8983, 42.9982], [129.7199, 42.4749], [129.3138, 42.4137], [128.9236, 42.0381], [128.0451, 41.9875], [128.2909, 41.5627], [128.1112, 41.3891], [127.1795, 41.5312], [126.9033, 41.7811], [125.9889, 40.9049], [124.8895, 40.4596], [124.3621, 40.0042], [124.1055, 39.8409], [123.3482, 39.7632], [122.3348, 39.3663], [121.6499, 38.8652], [121.7853, 39.401], [121.5177, 39.6389], [122.2749, 40.5418], [121.859, 40.8423], [121.1745, 40.9013], [120.4789, 40.231], [119.5912, 39.9026], [118.9125, 39.1666], [118.2977, 39.0672], [117.7845, 39.1347], [117.5577, 38.6251], [118.0149, 38.1833], [118.94, 38.0426], [119.0891, 37.7008], [118.9527, 37.3311], [119.45, 37.1247], [120.3702, 37.7008], [120.7502, 37.8341], [121.6401, 37.4603], [122.6025, 37.4266], [122.5195, 36.9467], [121.9326, 36.9595], [120.9899, 36.5978], [120.3933, 36.054], [120.0545, 35.8613], [119.2156, 35.0117], [119.5827, 34.5821], [120.2015, 34.3255], [120.8709, 33.0164], [120.8531, 32.6613], [121.4009, 32.3719], [121.3521, 31.8588], [121.0556, 31.7194], [121.6605, 31.32], [121.8781, 30.9169], [120.9974, 30.5582], [121.1594, 30.3017], [121.9442, 29.8941], [121.7174, 29.2563], [121.6019, 28.3667], [121.0986, 28.2904], [120.2787, 27.0972], [119.6484, 25.9186], [119.5391, 25.5914], [119.0247, 25.2235], [118.5604, 24.5803], [118.0872, 24.6269], [118.0562, 24.246], [116.538, 23.1798], [116.4706, 22.9459], [115.4985, 22.7191], [115.1958, 22.8172], [114.8539, 22.6169], [114.2657, 22.5411], [114.0154, 22.5117], [113.6194, 22.8615], [113.5467, 22.2242], [113.4943, 22.2414], [113.4787, 22.1957], [113.0082, 22.1194], [112.5861, 21.7766], [111.9438, 21.8495], [111.6029, 21.5592], [110.771, 21.3865], [110.1935, 21.0376], [110.5113, 20.5182], [110.1229, 20.2638], [109.6626, 20.9169], [109.9308, 21.4806], [109.5441, 21.5379], [109.1486, 21.4256], [109.0305, 21.6267], [108.3247, 21.6936], [107.9727, 21.5081], [107.3512, 21.6089], [106.7294, 22.0004], [106.5363, 22.3955], [106.7804, 22.7789], [106.5421, 22.9081], [105.8429, 22.9228], [105.2751, 23.3454], [104.8646, 23.1363], [104.7958, 22.9113], [104.3719, 22.7039], [103.3563, 22.7546], [103.0052, 22.4532], [102.5172, 22.7408], [102.1276, 22.379], [101.6712, 22.4625], [101.5243, 22.2539], [101.744, 21.778], [101.705, 21.1503], [101.2241, 21.2236], [101.139, 21.5676], [100.8349, 21.6551], [100.2148, 21.4628], [99.9179, 22.0279], [99.193, 22.126], [99.3377, 22.498], [99.3407, 23.0959], [98.8636, 23.1913], [98.7642, 24.116], [98.2125, 24.1106], [97.6859, 23.898], [97.5315, 24.4916], [97.8196, 25.2519], [98.0109, 25.2922], [98.6545, 25.9178], [98.7318, 26.5835], [98.651, 27.5726], [98.299, 27.55], [98.0988, 28.1421], [97.5377, 28.5101], [97.3224, 28.2179], [96.776, 28.3672], [96.4355, 29.0507], [96.0351, 29.4472], [95.4204, 29.0543], [94.7696, 29.1759], [94.6231, 29.3126], [93.9022, 28.803], [93.2067, 28.5909], [92.7019, 28.1469], [92.6642, 27.949], [91.9775, 27.7301], [91.6317, 27.7599], [91.6056, 27.9516], [90.353, 28.0804], [89.9808, 28.3112], [89.537, 28.1075], [88.8912, 27.316], [88.8484, 27.8687], [88.6212, 28.0919], [88.1098, 27.8704], [87.1413, 27.8384], [86.5544, 28.0852], [86.4089, 27.9286], [85.6782, 28.2775], [85.1225, 28.316], [85.159, 28.5922], [84.7141, 28.5957], [84.2285, 28.9117], [84.1016, 29.2199], [83.5834, 29.1835], [83.1556, 29.6127], [82.8542, 29.6833], [82.1591, 30.1151], [82.0432, 30.327], [81.4169, 30.3375], [81.0103, 30.1645], [80.6823, 30.4149], [80.1912, 30.5684], [79.9246, 30.8889], [79.9166, 30.8942], [79.3696, 31.0797], [79.3386, 31.1055], [79.1073, 31.4025], [78.8446, 31.3017], [78.7198, 31.8876], [78.3895, 32.5197], [79.2191, 32.5011], [79.2165, 32.5641], [79.1353, 33.1718], [79.1126, 33.2265], [78.8018, 33.4998], [78.7532, 34.0875], [78.9364, 34.3522], [78.2821, 34.654], [77.8107, 35.4846], [77.7991, 35.496], [77.4467, 35.4756], [76.2518, 35.8108], [75.945, 36.0176], [75.8402, 36.6497], [75.3466, 36.9134], [74.5414, 37.0221], [74.8912, 37.2317], [74.7452, 38.5101], [74.2774, 38.6597], [73.8015, 38.6068], [73.6314, 39.4489], [73.9147, 39.6065], [73.9914, 40.0433], [74.4118, 40.1373], [75.0044, 40.4494], [75.5836, 40.6052], [75.8718, 40.3034], [76.4804, 40.4494], [76.8239, 40.9821], [78.1232, 41.0758], [78.3624, 41.3718], [79.2937, 41.7829], [80.2162, 42.0324], [80.2095, 42.1899], [80.1651, 42.6653], [80.7856, 43.1616], [80.355, 44.0973], [80.4554, 44.7463], [80.0589, 45.0064], [81.602, 45.3109], [82.4787, 45.1236], [82.3264, 45.52], [83.0042, 47.0337], [83.1929, 47.1864], [84.7861, 46.8308], [85.6565, 47.2547], [85.526, 47.9156], [85.7493, 48.3849], [86.5496, 48.5287], [86.7534, 49.0088], [87.3229, 49.0858], [87.8141, 49.1624], [87.9799, 48.5549], [88.5169, 48.3844], [89.0478, 48.0027], [89.561, 48.004], [90.3133, 47.676], [90.4962, 47.2854], [90.8699, 46.9546], [91.0338, 46.529], [91.0018, 46.0358], [90.6618, 45.5253], [90.8771, 45.1959], [91.5842, 45.0765], [92.7876, 45.0357], [93.6563, 44.9008], [94.7118, 44.3508], [95.3502, 44.278], [95.9127, 43.2065], [96.3854, 42.7204], [97.2057, 42.7897], [99.4677, 42.5682], [99.984, 42.6774], [101.7138, 42.4656], [101.973, 42.2157], [103.0726, 42.0061], [103.7109, 41.7513], [104.4984, 41.877], [104.4984, 41.6586], [105.1971, 41.7381], [106.7702, 42.2889], [108.1712, 42.4474], [109.4433, 42.4559], [110.4005, 42.7737], [111.0073, 43.3414], [111.9331, 43.7116], [111.4022, 44.3672], [111.8981, 45.0641], [113.5871, 44.7459], [114.0305, 44.9425], [114.517, 45.3647], [115.6809, 45.4583], [116.2406, 45.7961], [116.5625, 46.2897], [117.3334, 46.3621], [118.3087, 46.7172], [119.7065, 46.6062], [119.8979, 46.8579], [119.711, 47.1499], [118.4983, 47.984], [117.7685, 47.9881], [117.3508, 47.652], [116.7604, 47.8699], [115.8984, 47.6871], [115.5575, 47.9449], [116.6832, 49.8237], [117.8733, 49.5135], [118.4517, 49.8444], [119.26, 50.0663], [119.1921, 50.3797], [120.067, 51.6007], [120.7498, 52.0965], [120.656, 52.5666], [120.0945, 52.7872], [120.704, 53.1718], [122.3379, 53.485], [123.608, 53.5464], [124.8121, 53.1339], [125.649, 53.0422], [126.313, 52.3996], [126.9247, 51.1002], [127.5901, 50.2091], [127.5027, 49.8735], [127.9998, 49.5685], [128.5268, 49.5943], [129.5339, 49.3235], [130.1962, 48.8916], [130.8043, 48.3414], [130.712, 48.1279], [131.0027, 47.6915], [132.5616, 47.7683], [133.1441, 48.1057], [133.4686, 48.0972], [134.2933, 48.3733], [134.5637, 48.3218], [134.7522, 47.7155], [134.1677, 47.3022], [133.8614, 46.2476], [133.1857, 45.4947], [132.9358, 45.0299], [131.9774, 45.2439], [131.0822, 44.9101], [131.2553, 44.0716], [131.2619, 43.4332], [131.0685, 42.9024], [130.5771, 42.8118], [130.5269, 42.5353]]], [[[110.8886, 19.9917], [111.0138, 19.6553], [110.5722, 19.1719], [110.4514, 18.748], [109.5192, 18.2184], [108.7015, 18.5354], [108.6936, 19.3384], [109.6511, 19.9843], [110.5886, 20.0726], [110.8886, 19.9917]]]]
      },
      "properties": {
        "id": "CN",
        "name": "China"
      },
      "id": "CN"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[-5.5236, 10.4259], [-5.0999, 10.2417], [-4.9698, 9.93], [-4.6258, 9.7134], [-3.8777, 9.895], [-3.2236, 9.8955], [-2.6958, 9.4812], [-2.7466, 9.1097], [-2.5058, 8.2087], [-2.7899, 7.9321], [-2.9858, 7.2051], [-3.2357, 6.8073], [-3.2007, 6.3483], [-2.7952, 5.1844], [-3.0191, 5.1307], [-4.0372, 5.2301], [-5.5647, 5.0894], [-6.9229, 4.6385], [-7.5451, 4.3512], [-7.5688, 5.0806], [-7.4299, 5.3247], [-7.4543, 5.8413], [-7.7965, 5.9749], [-7.8886, 6.2347], [-8.6035, 6.5076], [-8.3325, 6.8015], [-8.2965, 7.0741], [-8.4863, 7.5584], [-8.232, 7.5566], [-7.8236, 8.4674], [-7.951, 8.7866], [-7.8962, 9.416], [-8.137, 9.4955], [-8.1366, 10.0219], [-7.9908, 10.1627], [-7.6612, 10.4272], [-7.105, 10.2035], [-6.6932, 10.3496], [-6.2611, 10.7242], [-6.0345, 10.1947], [-5.5236, 10.4259]]]
      },
      "properties": {
        "id": "CI",
        "name": "Côte d'Ivoire"
      },
      "id": "CI"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[15.4803, 7.5237], [15.2459, 7.2636], [14.7394, 6.2799], [14.6169, 5.8649], [14.7088, 4.6655], [15.0226, 4.3584], [15.1288, 3.827], [15.775, 3.1269], [16.0636, 2.9086], [16.1835, 2.2703], [16.0595, 1.6764], [15.7417, 1.9152], [14.9024, 2.0124], [14.4842, 2.1549], [13.2937, 2.1615], [13.2203, 2.2565], [11.3485, 2.2995], [11.3285, 2.1673], [9.98, 2.1677], [9.8007, 2.3044], [9.8762, 3.3099], [9.4251, 3.9224], [8.9998, 4.0916], [8.9027, 4.4351], [8.5561, 4.7552], [8.801, 5.1973], [9.0602, 6.0092], [10.1438, 6.9964], [10.6064, 7.063], [11.0325, 6.6981], [11.1531, 6.4379], [11.5518, 6.6972], [11.7676, 7.272], [12.0161, 7.5898], [12.4036, 8.5957], [12.8067, 8.8865], [12.9296, 9.4262], [13.1756, 9.5394], [13.2697, 10.0362], [13.5351, 10.6052], [13.8921, 11.1401], [14.5596, 11.4922], [14.6271, 12.1086], [14.1975, 12.3839], [14.0639, 13.0786], [14.5161, 12.9796], [14.7611, 12.6556], [15.0811, 11.8455], [15.0297, 11.1135], [15.2761, 10.3575], [15.5412, 9.9602], [14.2432, 9.9798], [13.9772, 9.6917], [14.3323, 9.2034], [15.1162, 8.5572], [15.4429, 7.8518], [15.4803, 7.5237]]]
      },
      "properties": {
        "id": "CM",
        "name": "Cameroon"
      },
      "id": "CM"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[27.4032, 5.1094], [27.788, 4.6446], [28.192, 4.3504], [28.7269, 4.5049], [29.1513, 4.3881], [29.6768, 4.587], [30.1948, 3.9819], [30.5082, 3.8359], [30.8384, 3.4905], [30.7284, 2.4554], [31.1763, 2.2703], [31.2527, 2.0448], [30.9424, 1.683], [29.9427, 0.8192], [29.9343, 0.4992], [29.7177, 0.0983], [29.5619, -0.9772], [29.5769, -1.3878], [29.1295, -1.8602], [29.1064, -2.2334], [28.8765, -2.4003], [29.0145, -2.7204], [29.2245, -3.0533], [29.2231, -3.911], [29.4034, -4.4493], [29.3425, -4.9829], [29.5943, -5.651], [29.4801, -6.0251], [29.7097, -6.617], [30.3133, -7.2037], [30.751, -8.1936], [28.9723, -8.4648], [28.9178, -8.7005], [28.4006, -9.2247], [28.6302, -9.8311], [28.639, -10.6692], [28.3571, -11.4828], [28.4823, -11.8122], [29.0642, -12.3489], [29.4274, -12.4315], [29.7954, -12.1553], [29.7954, -13.393], [29.5543, -13.249], [29.0141, -13.3689], [28.3575, -12.4821], [27.5333, -12.1953], [27.0459, -11.616], [26.9495, -11.8989], [26.5962, -11.972], [26.0258, -11.8904], [25.3492, -11.6231], [25.1846, -11.2432], [24.5184, -11.4384], [24.3199, -11.0718], [23.9665, -10.8716], [23.8339, -11.0136], [22.5613, -11.0558], [22.3068, -10.6913], [22.1976, -10.0406], [21.8132, -9.4689], [21.9056, -8.6934], [21.7512, -7.3053], [20.6076, -7.2779], [20.482, -6.9162], [19.8752, -6.9862], [19.5276, -7.1447], [19.3408, -7.9667], [18.6532, -7.9361], [17.5359, -8.076], [16.9847, -7.2574], [16.7094, -6.4718], [16.7178, -6.2413], [16.3153, -5.8658], [14.3986, -5.8925], [13.0681, -5.865], [12.4116, -5.9866], [12.2137, -5.7589], [12.5035, -5.6959], [12.5221, -5.1489], [12.8297, -4.7366], [13.0726, -4.635], [13.4149, -4.8374], [14.3582, -4.2993], [14.4105, -4.8311], [14.7794, -4.8458], [15.6, -4.0307], [15.8722, -3.9344], [16.1466, -3.4639], [16.217, -3.0302], [16.2153, -2.178], [16.5407, -1.8401], [16.8799, -1.2259], [17.2789, -0.9995], [17.7529, -0.5488], [17.7241, -0.2777], [17.8875, 0.2341], [17.9026, 1.1179], [18.058, 1.5347], [18.0721, 2.0133], [18.4908, 2.9246], [18.6101, 3.4785], [18.5675, 4.2576], [19.0687, 4.8914], [19.501, 5.1276], [19.8064, 5.0894], [20.2264, 4.8297], [20.558, 4.4627], [21.5376, 4.2447], [22.4223, 4.135], [22.7557, 4.6469], [23.417, 4.6633], [24.3199, 4.994], [24.7655, 4.9301], [25.2494, 5.0247], [25.525, 5.3122], [26.8222, 5.0624], [27.1151, 5.1977], [27.4032, 5.1094]]]
      },
      "properties": {
        "id": "CD",
        "name": "Democratic Republic of Congo"
      },
      "id": "CD"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[18.6101, 3.4785], [18.4908, 2.9246], [18.0721, 2.0133], [18.058, 1.5347], [17.9026, 1.1179], [17.8875, 0.2341], [17.7241, -0.2777], [17.7529, -0.5488], [17.2789, -0.9995], [16.8799, -1.2259], [16.5407, -1.8401], [16.2153, -2.178], [16.217, -3.0302], [16.1466, -3.4639], [15.8722, -3.9344], [15.6, -4.0307], [14.7794, -4.8458], [14.4105, -4.8311], [14.3582, -4.2993], [13.4149, -4.8374], [13.0726, -4.635], [12.8809, -4.4454], [12.3846, -4.6189], [12.0183, -5.0042], [11.7773, -4.5657], [11.1301, -3.9163], [11.5043, -3.5202], [11.6859, -3.6819], [11.934, -3.3188], [11.5377, -2.8367], [11.5754, -2.3973], [12.4462, -2.3298], [12.432, -1.929], [12.7934, -1.9315], [12.9918, -2.3133], [13.465, -2.3955], [13.7841, -2.1638], [14.0873, -2.467], [14.3838, -1.8899], [14.4806, -0.6181], [13.8601, -0.2035], [13.8844, 0.1907], [14.0873, 0.5364], [14.4344, 0.8116], [14.1811, 1.3701], [13.8512, 1.4189], [13.2741, 1.2409], [13.1627, 1.6479], [13.2937, 2.1615], [14.4842, 2.1549], [14.9024, 2.0124], [15.7417, 1.9152], [16.0595, 1.6764], [16.1835, 2.2703], [16.4683, 2.8318], [16.6734, 3.5354], [17.4378, 3.6845], [18.161, 3.4998], [18.6101, 3.4785]]]
      },
      "properties": {
        "id": "CG",
        "name": "Republic of Congo"
      },
      "id": "CG"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[-159.7406, -21.2494], [-159.8395, -21.2382], [-159.832, -21.2005], [-159.7683, -21.1885], [-159.7406, -21.2494]]]
      },
      "properties": {
        "id": "CK",
        "name": "Cook Islands"
      },
      "id": "CK"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[-71.3197, 11.8618], [-71.958, 11.6666], [-72.2486, 11.1965], [-72.6903, 10.8361], [-72.8693, 10.4911], [-73.0065, 9.7894], [-73.3563, 9.2269], [-72.7963, 9.1089], [-72.6653, 8.6276], [-72.4166, 8.3817], [-72.443, 7.4549], [-72.0843, 7.0967], [-71.0134, 6.9946], [-70.6552, 7.083], [-70.095, 6.9378], [-69.4392, 6.1348], [-68.4717, 6.1565], [-67.8591, 6.2898], [-67.4394, 6.0256], [-67.825, 5.2706], [-67.8553, 4.5071], [-67.6616, 3.8643], [-67.3111, 3.4159], [-67.8347, 2.8926], [-67.2108, 2.3901], [-66.8761, 1.2231], [-67.352, 2.086], [-67.8152, 1.7899], [-68.1765, 1.7198], [-69.8486, 1.7087], [-69.8522, 1.0594], [-69.3615, 1.0642], [-69.1632, 0.864], [-70.0539, 0.5786], [-70.0706, -0.1387], [-69.6675, -0.4823], [-69.4003, -1.1948], [-69.6691, -2.6676], [-69.9658, -4.2358], [-70.3396, -3.8141], [-70.7351, -3.7817], [-70.0741, -2.7501], [-70.0959, -2.6582], [-70.9146, -2.2183], [-71.397, -2.3342], [-71.7525, -2.1527], [-72.3957, -2.4288], [-72.8871, -2.4084], [-73.1545, -2.2783], [-73.1969, -1.8305], [-73.4963, -1.6932], [-73.6644, -1.249], [-74.2465, -0.9706], [-74.4178, -0.5808], [-74.8019, -0.2], [-75.2846, -0.1063], [-75.8798, 0.1511], [-76.311, 0.4485], [-76.4946, 0.2355], [-77.4228, 0.425], [-77.4676, 0.6363], [-78.3121, 1.046], [-78.8596, 1.4552], [-78.5769, 1.774], [-78.6171, 2.3066], [-78.1201, 2.4882], [-77.67, 2.8789], [-77.2428, 3.5855], [-77.1667, 3.862], [-77.4272, 4.0605], [-77.2863, 4.7219], [-77.4017, 5.4161], [-77.2492, 5.7802], [-77.4694, 6.177], [-77.3599, 6.5046], [-77.9011, 7.2295], [-77.744, 7.5371], [-77.3509, 7.7057], [-77.2124, 8.0338], [-77.3742, 8.6583], [-76.8519, 8.0906], [-76.8879, 8.6197], [-76.2769, 8.9891], [-76.1355, 9.2656], [-75.6395, 9.4502], [-75.671, 10.1964], [-75.4459, 10.611], [-74.8446, 11.1095], [-74.4543, 10.9892], [-74.0592, 11.3407], [-73.3134, 11.2959], [-72.7219, 11.7123], [-72.2749, 11.8894], [-72.1358, 12.1886], [-71.7145, 12.4199], [-71.2622, 12.3351], [-71.3197, 11.8618]]]
      },
      "properties": {
        "id": "CO",
        "name": "Colombia"
      },
      "id": "CO"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[43.4659, -11.9014], [43.2267, -11.7519], [43.3793, -11.6142], [43.4659, -11.9014]]]
      },
      "properties": {
        "id": "KM",
        "name": "Comoros"
      },
      "id": "KM"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[-23.4442, 15.0078], [-23.7054, 14.9611], [-23.7007, 15.2715], [-23.4442, 15.0078]]]
      },
      "properties": {
        "id": "CV",
        "name": "Cape Verde"
      },
      "id": "CV"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[-83.642, 10.9173], [-83.4482, 10.4658], [-82.7783, 9.6695], [-82.5635, 9.5767], [-82.9399, 9.4493], [-82.9171, 8.7405], [-82.9976, 8.3676], [-82.8794, 8.0706], [-83.1626, 8.5882], [-83.7341, 8.6144], [-83.6373, 9.0352], [-83.8956, 9.2762], [-84.6589, 9.6468], [-85.1145, 9.5816], [-85.6248, 9.9026], [-85.8306, 10.3979], [-85.6672, 10.7451], [-85.7444, 11.062], [-85.6215, 11.1846], [-84.9093, 10.9452], [-84.3484, 10.9799], [-84.1684, 10.7806], [-83.8113, 10.7433], [-83.642, 10.9173]]]
      },
      "properties": {
        "id": "CR",
        "name": "Costa Rica"
      },
      "id": "CR"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [[[[-81.8375, 23.163], [-81.1786, 23.0595], [-80.6501, 23.1031], [-80.0753, 22.9423], [-79.183, 22.3879], [-78.6865, 22.3671], [-77.8651, 21.9005], [-77.4973, 21.8717], [-76.6476, 21.2844], [-75.7229, 21.1108], [-75.6428, 20.7335], [-74.8826, 20.6506], [-74.2529, 20.0796], [-75.1166, 19.9012], [-76.1586, 19.9895], [-77.7151, 19.8555], [-77.2135, 20.3002], [-77.2297, 20.6439], [-77.9974, 20.7153], [-78.4908, 21.0536], [-78.6366, 21.5157], [-79.2745, 21.5627], [-80.2313, 21.8721], [-80.4992, 22.0634], [-80.9619, 22.0528], [-81.8162, 22.2002], [-81.9034, 22.6791], [-82.7381, 22.6893], [-83.3796, 22.2227], [-84.3264, 22.0746], [-84.3612, 22.379], [-84.045, 22.6662], [-83.2577, 22.9676], [-82.1014, 23.1904], [-81.8375, 23.163]]], [[[-82.5617, 21.5716], [-82.8531, 21.4437], [-83.0826, 21.7913], [-82.7147, 21.8903], [-82.5617, 21.5716]]]]
      },
      "properties": {
        "id": "CU",
        "name": "Cuba"
      },
      "id": "CU"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[-68.7511, 12.0599], [-68.8032, 12.0457], [-68.995, 12.142], [-69.1539, 12.2982], [-69.0767, 12.3422], [-69.0133, 12.2312], [-68.8275, 12.1584], [-68.7511, 12.0599]]]
      },
      "properties": {
        "id": "CW",
        "name": "Curaçao"
      },
      "id": "CW"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[105.7254, -10.493], [105.6969, -10.564], [105.5841, -10.5125], [105.7053, -10.4308], [105.7254, -10.493]]]
      },
      "properties": {
        "id": "CX",
        "name": "Christmas Island"
      },
      "id": "CX"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[-81.3696, 19.349], [-81.1306, 19.3468], [-81.3037, 19.2717], [-81.3696, 19.349]]]
      },
      "properties": {
        "id": "KY",
        "name": "Cayman Islands"
      },
      "id": "KY"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[34.4633, 35.5937], [33.9417, 35.2919], [34.05, 34.9882], [32.9416, 34.5759], [32.4489, 34.7294], [32.3171, 34.9532], [32.9416, 35.3904], [33.4587, 35.3359], [34.4633, 35.5937]]]
      },
      "properties": {
        "id": "CY",
        "name": "Cyprus"
      },
      "id": "CY"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[14.8096, 50.8589], [16.0072, 50.6117], [16.6793, 50.0974], [17.152, 50.3784], [17.8746, 49.9722], [18.5622, 49.8792], [18.8321, 49.5108], [18.161, 49.2573], [17.7583, 48.888], [17.1883, 48.8609], [16.9531, 48.5989], [16.4777, 48.8001], [16.0573, 48.7548], [14.9721, 48.9839], [14.6915, 48.5992], [14.0491, 48.6024], [13.8147, 48.7669], [12.6318, 49.4613], [12.2763, 50.0424], [12.4525, 50.3498], [14.3692, 50.8986], [14.8096, 50.8589]]]
      },
      "properties": {
        "id": "CZ",
        "name": "Czechia"
      },
      "id": "CZ"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[9.7399, 54.8255], [10.3604, 54.4383], [11.3996, 53.9446], [12.1111, 54.1683], [12.5755, 54.4673], [13.0286, 54.4109], [13.8654, 53.8534], [14.2587, 53.7296], [14.4145, 53.2834], [14.1286, 52.8782], [14.6195, 52.5284], [14.7527, 52.0818], [14.6018, 51.8323], [15.0164, 51.2526], [14.8096, 50.8589], [14.3692, 50.8986], [12.4525, 50.3498], [12.2763, 50.0424], [12.6318, 49.4613], [13.8147, 48.7669], [13.4095, 48.3942], [12.8143, 48.1607], [12.6859, 47.6693], [11.717, 47.5837], [11.2979, 47.4248], [10.4306, 47.541], [10.3129, 47.3133], [9.5242, 47.5242], [8.6177, 47.7661], [8.1982, 47.6067], [7.6154, 47.5925], [7.5843, 48.0643], [8.1348, 48.9735], [7.4507, 49.1522], [6.7356, 49.1606], [6.344, 49.4527], [6.4875, 49.7984], [6.1163, 50.1209], [6.3645, 50.3162], [5.9939, 50.7504], [5.8948, 50.9843], [6.1932, 51.4888], [5.9486, 51.7624], [6.7417, 51.9109], [7.0352, 52.3801], [7.1973, 53.2824], [7.2852, 53.6814], [8.0091, 53.6907], [8.5387, 53.5569], [8.8978, 53.8357], [8.9573, 54.5383], [8.67, 54.9034], [9.7399, 54.8255]]]
      },
      "properties": {
        "id": "DE",
        "name": "Germany"
      },
      "id": "DE"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[43.2461, 11.4997], [42.9226, 10.9994], [42.5577, 11.0807], [41.7981, 10.9803], [41.7667, 11.5889], [42.3784, 12.4664], [42.67, 12.3764], [43.1165, 12.7084], [43.41, 12.1899], [43.2719, 11.9698], [42.7992, 11.7393], [43.2461, 11.4997]]]
      },
      "properties": {
        "id": "DJ",
        "name": "Djibouti"
      },
      "id": "DJ"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[-61.2817, 15.2492], [-61.481, 15.5253], [-61.3202, 15.5852], [-61.2817, 15.2492]]]
      },
      "properties": {
        "id": "DM",
        "name": "Dominica"
      },
      "id": "DM"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [[[[10.645, 55.6099], [10.7852, 55.1333], [9.9889, 55.1631], [9.8606, 55.5155], [10.645, 55.6099]]], [[[12.5688, 55.785], [11.6539, 55.1868], [11.2864, 55.2044], [10.9788, 55.7215], [12.219, 56.1186], [12.5688, 55.785]]], [[[9.7399, 54.8255], [8.67, 54.9034], [8.6159, 55.4181], [8.1321, 55.5999], [8.1641, 56.6069], [8.6186, 57.1114], [9.5542, 57.2325], [9.9623, 57.581], [10.5371, 57.4485], [10.2827, 56.6204], [10.1828, 55.8651], [9.5911, 55.4931], [9.7399, 54.8255]]]]
      },
      "properties": {
        "id": "DK",
        "name": "Denmark"
      },
      "id": "DK"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[-71.7683, 18.0391], [-71.6571, 19.1306], [-71.7791, 19.7184], [-71.5579, 19.8954], [-70.9542, 19.914], [-70.1294, 19.6362], [-69.7395, 19.2993], [-68.6848, 18.9047], [-68.3594, 18.538], [-68.6588, 18.222], [-68.9349, 18.4079], [-69.7707, 18.4434], [-70.1831, 18.2517], [-70.6447, 18.336], [-71.0278, 18.273], [-71.3958, 17.6463], [-71.7683, 18.0391]]]
      },
      "properties": {
        "id": "DO",
        "name": "Dominican Republic"
      },
      "id": "DO"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[8.5764, 36.9374], [8.2306, 36.5454], [8.3486, 36.3679], [8.2457, 35.8707], [8.3944, 35.204], [8.2457, 34.7339], [7.5138, 34.0804], [7.5, 33.8323], [7.7627, 33.2331], [8.2111, 32.9268], [8.3332, 32.5437], [9.0438, 32.0723], [9.5187, 30.2292], [9.3102, 30.1151], [9.64, 29.6362], [9.8424, 28.9669], [9.9162, 27.7857], [9.7474, 27.3306], [9.8593, 26.5521], [9.4912, 26.3337], [9.4482, 26.0673], [10.0009, 25.3322], [10.2556, 24.591], [10.6863, 24.5514], [11.5074, 24.3144], [11.9677, 23.5181], [9.3784, 21.9915], [7.4818, 20.8729], [5.8367, 19.4791], [4.2276, 19.1426], [3.4007, 18.9885], [3.106, 19.1502], [3.2559, 19.4108], [3.2035, 19.7898], [2.4063, 20.0637], [2.2195, 20.2479], [1.6855, 20.3784], [1.1657, 20.8174], [1.1457, 21.1024], [-1.2931, 22.6964], [-3.2579, 23.9811], [-4.8227, 24.9958], [-6.9908, 26.2906], [-8.6834, 27.2858], [-8.6599, 28.7187], [-7.6851, 29.3494], [-7.095, 29.6252], [-6.6353, 29.5687], [-6.5008, 29.8093], [-5.4488, 29.9567], [-4.9683, 30.4654], [-4.3228, 30.6989], [-3.8334, 31.1978], [-3.8268, 31.6617], [-3.0174, 31.8344], [-2.9308, 32.0426], [-2.4486, 32.13], [-1.2753, 32.0892], [-1.0656, 32.4682], [-1.5099, 32.8776], [-1.6792, 33.3188], [-1.7956, 34.7521], [-2.2197, 35.1041], [-1.9132, 35.0943], [-0.9175, 35.6683], [-0.4261, 35.8613], [0.0479, 35.9005], [0.5149, 36.2617], [1.2571, 36.5196], [2.5932, 36.6009], [2.9728, 36.7846], [3.7788, 36.8961], [4.758, 36.8965], [5.1957, 36.6768], [6.0649, 36.8641], [6.4865, 37.0856], [6.9274, 36.9196], [7.6078, 37], [7.9106, 36.8565], [8.5764, 36.9374]]]
      },
      "properties": {
        "id": "DZ",
        "name": "Algeria"
      },
      "id": "DZ"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [[[[-75.2846, -0.1063], [-75.2632, -0.5555], [-75.5706, -1.5313], [-76.0897, -2.1332], [-76.679, -2.5628], [-77.8607, -2.9819], [-78.3472, -3.4311], [-78.4198, -3.7769], [-79.0763, -4.9905], [-79.3309, -4.9279], [-79.6385, -4.4547], [-80.1396, -4.2961], [-80.4885, -4.3939], [-80.5101, -4.0694], [-80.1794, -3.8776], [-80.3247, -3.388], [-79.9217, -3.0902], [-79.7299, -2.5793], [-80.4501, -2.6259], [-80.9628, -2.189], [-80.7704, -2.0767], [-80.8015, -1.3834], [-80.9024, -1.0789], [-80.554, -0.848], [-80.4823, -0.3683], [-80.1334, -0.006], [-80.0251, 0.4104], [-80.0884, 0.7846], [-79.7412, 0.9798], [-78.8996, 1.2063], [-78.8596, 1.4552], [-78.3121, 1.046], [-77.4676, 0.6363], [-77.4228, 0.425], [-76.4946, 0.2355], [-76.311, 0.4485], [-75.8798, 0.1511], [-75.2846, -0.1063]]], [[[-91.2722, 0.0251], [-90.7997, -0.7522], [-90.9056, -0.9404], [-91.3692, -0.2869], [-91.2722, 0.0251]]]]
      },
      "properties": {
        "id": "EC",
        "name": "Ecuador"
      },
      "id": "EC"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[34.1983, 31.3226], [34.2453, 31.2085], [34.9042, 29.4773], [34.7363, 29.2704], [34.3999, 28.016], [34.2201, 27.7643], [33.7602, 28.0475], [33.2474, 28.5677], [33.0757, 29.0729], [32.7215, 29.5217], [32.6318, 28.9921], [32.8982, 28.5651], [33.5471, 27.8984], [33.5498, 27.6072], [33.8929, 27.0497], [33.959, 26.6488], [34.565, 25.6913], [35.1939, 24.475], [35.6245, 24.0658], [35.5229, 23.4426], [35.6977, 22.9463], [36.2296, 22.629], [36.8713, 21.9969], [35.2308, 21.9963], [32.6061, 21.996], [30.7106, 21.9951], [28.8005, 21.9951], [26.1261, 21.9955], [24.9804, 21.996], [24.9804, 24.4662], [24.9804, 26.4872], [24.9804, 29.1817], [24.7114, 30.1316], [24.9738, 30.7766], [24.8526, 31.335], [25.1505, 31.655], [25.3822, 31.513], [25.8931, 31.6209], [27.2478, 31.378], [27.9673, 31.0975], [28.5147, 31.0505], [29.0722, 30.8303], [29.5915, 31.0114], [30.395, 31.4575], [30.7004, 31.4038], [31.1941, 31.5876], [32.1019, 31.0927], [33.1298, 31.1681], [33.6665, 31.1304], [34.1983, 31.3226]]]
      },
      "properties": {
        "id": "EG",
        "name": "Egypt"
      },
      "id": "EG"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [[[[-3.1097, 58.5154], [-3.2125, 58.3212], [-3.9902, 57.959], [-3.4029, 57.7082], [-2.0741, 57.7024], [-1.778, 57.4937], [-2.6527, 56.3183], [-3.1783, 56.0802], [-2.1471, 55.9031], [-1.6555, 55.5704], [-1.2917, 54.7738], [-0.6714, 54.5039], [-0.2056, 54.0217], [0.5589, 52.967], [1.6566, 52.7537], [1.5589, 52.0869], [0.9553, 51.8077], [0.6867, 51.3865], [1.4151, 51.3632], [0.9601, 50.926], [0.205, 50.763], [-1.5168, 50.7475], [-2.5477, 50.6163], [-3.4047, 50.6323], [-3.7933, 50.2293], [-4.1726, 50.3908], [-5.3423, 50.2461], [-4.583, 50.7763], [-4.1881, 51.1885], [-3.1359, 51.2049], [-4.3864, 51.7411], [-4.9023, 51.6262], [-5.0881, 51.996], [-4.3832, 52.1972], [-3.9804, 52.5417], [-4.1111, 53.2189], [-3.0647, 53.4269], [-2.925, 53.7327], [-3.958, 54.7809], [-5.1354, 54.8575], [-4.7213, 55.4211], [-5.2457, 55.9293], [-5.6097, 56.0553], [-5.3919, 56.5148], [-5.9368, 56.6057], [-5.562, 57.2327], [-5.8181, 57.4361], [-5.3383, 58.2386], [-4.7155, 58.5101], [-3.1097, 58.5154]]], [[[-6.2181, 54.0887], [-7.3553, 54.1213], [-8.1184, 54.4143], [-7.2186, 55.0921], [-6.1293, 55.2175], [-5.4703, 54.5002], [-5.6068, 54.2727], [-6.2181, 54.0887]]]]
      },
      "properties": {
        "id": "GB",
        "name": "United Kingdom"
      },
      "id": "GB"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[38.6093, 18.0049], [38.9116, 17.427], [39.1423, 16.7291], [39.2991, 15.9213], [39.5063, 15.532], [39.8637, 15.4703], [40.2041, 15.014], [41.1762, 14.6202], [41.6584, 13.9833], [42.2451, 13.5878], [42.796, 12.8642], [43.1165, 12.7084], [42.67, 12.3764], [42.3784, 12.4664], [41.7649, 13.1838], [41.3627, 13.4999], [40.7697, 14.1444], [40.2216, 14.4312], [39.0741, 14.6282], [38.5045, 14.4245], [37.8844, 14.8524], [37.5709, 14.1493], [37.2572, 14.4537], [37.0245, 14.2718], [36.5243, 14.2567], [36.4266, 15.1321], [36.9135, 16.2964], [37.0091, 17.059], [37.4112, 17.0616], [37.7822, 17.458], [38.2537, 17.5846], [38.6093, 18.0049]]]
      },
      "properties": {
        "id": "ER",
        "name": "Eritrea"
      },
      "id": "ER"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [[[[3.1454, 39.7902], [3.4619, 39.6979], [3.0726, 39.3011], [2.3713, 39.6131], [2.785, 39.8547], [3.1454, 39.7902]]], [[[-1.794, 43.4075], [-1.2855, 43.0595], [-0.0411, 42.6893], [1.4285, 42.5961], [1.4861, 42.4345], [1.7059, 42.5033], [2.0326, 42.3537], [3.2115, 42.4309], [3.248, 41.9445], [2.0827, 41.2875], [1.0329, 41.062], [-0.327, 39.52], [-0.2049, 39.0628], [0.2015, 38.7591], [-0.3814, 38.4355], [-0.6468, 38.1519], [-0.8221, 37.581], [-1.3275, 37.5611], [-1.7975, 37.233], [-2.1116, 36.7766], [-4.3668, 36.718], [-4.6742, 36.5064], [-5.1716, 36.4238], [-5.6255, 36.0261], [-6.0407, 36.1885], [-6.4924, 36.9546], [-6.8846, 37.1944], [-7.4062, 37.1793], [-7.5035, 37.5855], [-7.1855, 38.0062], [-7.3431, 38.4572], [-7.0462, 38.9068], [-7.4452, 39.5363], [-7.0368, 39.7139], [-6.8102, 40.3429], [-6.9285, 41.0092], [-6.2125, 41.5321], [-6.6182, 41.9422], [-7.4037, 41.8335], [-7.9208, 41.8837], [-8.2131, 42.1336], [-8.7771, 41.9409], [-8.691, 42.2743], [-9.2352, 42.977], [-8.8736, 43.3342], [-7.6982, 43.7644], [-7.2621, 43.5948], [-5.6659, 43.5825], [-4.523, 43.416], [-3.6047, 43.5193], [-3.0456, 43.3716], [-2.3371, 43.3281], [-1.794, 43.4075]]], [[[-16.3346, 28.38], [-16.6579, 28.0072], [-16.9054, 28.3396], [-16.3346, 28.38]]]]
      },
      "properties": {
        "id": "ES",
        "name": "Spain"
      },
      "id": "ES"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [[[[22.6171, 58.6212], [23.2928, 58.4834], [22.1875, 58.1543], [22.0814, 58.4781], [22.6171, 58.6212]]], [[[28.0127, 59.4842], [27.4272, 58.7331], [27.753, 57.8411], [27.3517, 57.5282], [26.5328, 57.531], [25.9912, 57.8382], [25.1109, 58.0635], [24.3226, 57.8706], [24.5289, 58.3542], [23.7677, 58.3609], [23.5094, 58.6585], [23.4943, 59.1956], [24.3803, 59.4726], [25.5091, 59.6388], [26.9749, 59.4507], [28.0127, 59.4842]]]]
      },
      "properties": {
        "id": "EE",
        "name": "Estonia"
      },
      "id": "EE"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[42.3784, 12.4664], [41.7667, 11.5889], [41.7981, 10.9803], [42.5577, 11.0807], [42.9226, 10.9994], [42.6594, 10.6212], [42.8417, 10.2031], [43.1818, 9.8799], [43.4827, 9.3796], [44.023, 8.9859], [46.9784, 7.9969], [47.9781, 7.9969], [45.9348, 5.9972], [44.9404, 4.9119], [44.0283, 4.9509], [43.5383, 4.8404], [43.0158, 4.5634], [42.7916, 4.2922], [42.0241, 4.1377], [41.8838, 3.9779], [41.2207, 3.9438], [40.7652, 4.2731], [39.8424, 3.8514], [39.4943, 3.4559], [38.0863, 3.649], [36.9056, 4.4116], [36.0817, 4.4498], [35.763, 4.808], [35.7448, 5.3442], [35.2681, 5.4925], [35.0821, 5.6731], [34.7105, 6.6604], [34.0643, 7.2259], [33.6661, 7.6711], [33.2262, 7.7608], [33.0126, 7.9516], [33.2342, 8.3964], [33.9533, 8.4434], [34.0945, 8.5824], [34.078, 9.4613], [34.2915, 10.125], [34.2756, 10.528], [34.5717, 10.88], [34.9312, 10.8649], [35.1123, 11.8167], [35.5961, 12.5375], [36.1076, 12.7266], [36.2123, 13.2713], [36.3907, 13.6259], [36.5243, 14.2567], [37.0245, 14.2718], [37.2572, 14.4537], [37.5709, 14.1493], [37.8844, 14.8524], [38.5045, 14.4245], [39.0741, 14.6282], [40.2216, 14.4312], [40.7697, 14.1444], [41.3627, 13.4999], [41.7649, 13.1838], [42.3784, 12.4664]]]
      },
      "properties": {
        "id": "ET",
        "name": "Ethiopia"
      },
      "id": "ET"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[28.9657, 69.0219], [28.4708, 68.4883], [29.3439, 68.0619], [29.9413, 67.5475], [29.0869, 66.9708], [29.9032, 66.0911], [29.604, 64.9685], [30.0727, 64.7649], [30.1082, 64.3661], [30.5037, 64.0205], [30.0555, 63.689], [31.1808, 63.2082], [31.5341, 62.8855], [31.2855, 62.5679], [29.6901, 61.5461], [27.7978, 60.5362], [25.6565, 60.3331], [23.7215, 59.9656], [22.7934, 60.0768], [22.5759, 60.3591], [21.4359, 60.5963], [21.3606, 60.9674], [21.606, 61.5915], [21.2562, 61.9897], [21.1034, 62.6229], [22.2434, 63.438], [23.2488, 63.8963], [24.5579, 64.8009], [25.3728, 65.0096], [25.348, 65.4791], [24.1557, 65.8052], [23.7011, 66.4808], [23.9883, 66.8106], [23.4682, 67.45], [23.6391, 67.9543], [22.7823, 68.3911], [21.9974, 68.5207], [20.6223, 69.0369], [21.622, 69.2707], [22.4108, 68.7198], [23.8539, 68.8059], [24.9413, 68.5933], [25.7484, 68.9901], [26.0116, 69.6527], [26.5256, 69.915], [27.8896, 70.0617], [29.1414, 69.6715], [28.9657, 69.0219]]]
      },
      "properties": {
        "id": "FI",
        "name": "Finland"
      },
      "id": "FI"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [[[[179.999, -16.1686], [179.7483, -16.4464], [179.928, -16.7443], [179.007, -16.9002], [178.805, -16.6316], [179.5516, -16.2498], [179.999, -16.1686]]], [[[178.2803, -17.372], [178.5914, -17.6516], [178.6679, -18.0808], [177.8471, -18.2548], [177.3215, -18.0773], [177.2639, -17.8633], [177.618, -17.4611], [178.2803, -17.372]]]]
      },
      "properties": {
        "id": "FJ",
        "name": "Fiji"
      },
      "id": "FJ"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [[[[-60.2863, -51.462], [-59.2681, -51.4273], [-59.9215, -51.9693], [-60.2863, -51.462]]], [[[-58.8501, -51.2697], [-58.4737, -51.509], [-57.9765, -51.3843], [-57.8383, -51.7092], [-58.6834, -51.936], [-59.0681, -52.1731], [-59.5708, -51.9254], [-59.0596, -51.6857], [-58.8501, -51.2697]]]]
      },
      "properties": {
        "id": "FK",
        "name": "Falkland Islands"
      },
      "id": "FK"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[-6.6311, 62.2279], [-7.0135, 62.0941], [-7.1722, 62.2856], [-6.6311, 62.2279]]]
      },
      "properties": {
        "id": "FO",
        "name": "Faroe Islands"
      },
      "id": "FO"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[158.315, 6.8135], [158.1836, 6.8011], [158.1347, 6.9449], [158.2945, 6.9511], [158.315, 6.8135]]]
      },
      "properties": {
        "id": "FM",
        "name": "Federated States of Micronesia"
      },
      "id": "FM"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [[[[9.4802, 42.8056], [9.5507, 42.1295], [9.1863, 41.3847], [8.8077, 41.5885], [8.7131, 42.5499], [9.4802, 42.8056]]], [[[5.7896, 49.5384], [6.344, 49.4527], [6.7356, 49.1606], [7.4507, 49.1522], [8.1348, 48.9735], [7.5843, 48.0643], [7.6154, 47.5925], [7.0007, 47.3226], [6.06, 46.4282], [6.7582, 46.4158], [7.021, 45.9257], [6.8043, 45.8147], [7.1533, 45.401], [6.6277, 45.1178], [7.0307, 44.7166], [6.9673, 44.2802], [7.6514, 44.0339], [7.4929, 43.7671], [7.4387, 43.7507], [7.4143, 43.7711], [7.3779, 43.7316], [6.4941, 43.1692], [6.1159, 43.0724], [5.4065, 43.2286], [5.0599, 43.4444], [4.6288, 43.3872], [4.0527, 43.5931], [3.2591, 43.1931], [3.0518, 42.9153], [3.2115, 42.4309], [2.0326, 42.3537], [1.7059, 42.5033], [1.4285, 42.5961], [-0.0411, 42.6893], [-1.2855, 43.0595], [-1.794, 43.4075], [-1.4848, 43.5638], [-1.2456, 44.5599], [-1.066, 45.8059], [-1.1464, 46.3115], [-1.7866, 46.5148], [-2.0188, 47.0377], [-3.1588, 47.6946], [-4.312, 47.8229], [-4.6292, 48.0857], [-4.3932, 48.3676], [-4.7208, 48.5398], [-3.2315, 48.8407], [-2.6924, 48.5367], [-2.4463, 48.6483], [-1.4375, 48.6414], [-1.8564, 49.6837], [-1.2587, 49.6801], [-1.1386, 49.3879], [-0.1636, 49.2968], [0.1869, 49.703], [1.2456, 49.9982], [1.5514, 50.2939], [1.5793, 50.7393], [1.9122, 50.9905], [2.5249, 51.0971], [2.8396, 50.7117], [4.1744, 50.2466], [4.8677, 49.788], [5.7896, 49.5384]]]]
      },
      "properties": {
        "id": "FR",
        "name": "France"
      },
      "id": "FR"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[13.2937, 2.1615], [13.1627, 1.6479], [13.2741, 1.2409], [13.8512, 1.4189], [14.1811, 1.3701], [14.4344, 0.8116], [14.0873, 0.5364], [13.8844, 0.1907], [13.8601, -0.2035], [14.4806, -0.6181], [14.3838, -1.8899], [14.0873, -2.467], [13.7841, -2.1638], [13.465, -2.3955], [12.9918, -2.3133], [12.7934, -1.9315], [12.432, -1.929], [12.4462, -2.3298], [11.5754, -2.3973], [11.5377, -2.8367], [11.934, -3.3188], [11.6859, -3.6819], [11.5043, -3.5202], [11.1301, -3.9163], [10.3475, -3.0129], [9.6245, -2.367], [9.2658, -1.825], [9.3305, -1.5348], [9.0647, -1.2982], [8.8215, -0.7083], [9.2968, -0.3514], [9.5907, 1.0318], [11.3352, 0.9998], [11.3285, 2.1673], [11.3485, 2.2995], [13.2203, 2.2565], [13.2937, 2.1615]]]
      },
      "properties": {
        "id": "GA",
        "name": "Gabon"
      },
      "id": "GA"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[46.4298, 41.8907], [46.182, 41.6573], [46.6188, 41.3439], [46.4577, 41.07], [45.281, 41.4495], [45.0014, 41.2911], [43.4392, 41.1073], [42.7876, 41.5636], [42.4663, 41.4398], [41.5101, 41.5175], [41.7632, 41.9702], [41.4888, 42.6591], [40.8368, 43.0635], [39.9783, 43.4199], [40.6481, 43.534], [41.5807, 43.2193], [42.4192, 43.2242], [43.7824, 42.747], [43.9573, 42.5663], [44.5059, 42.7488], [45.1603, 42.6751], [45.7275, 42.4749], [45.6388, 42.205], [46.4298, 41.8907]]]
      },
      "properties": {
        "id": "GE",
        "name": "Georgia"
      },
      "id": "GE"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[-2.5124, 49.4946], [-2.5475, 49.4287], [-2.646, 49.4682], [-2.5124, 49.4946]]]
      },
      "properties": {
        "id": "GG",
        "name": "Guernsey"
      },
      "id": "GG"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[-0.0686, 11.1157], [-0.0578, 10.6305], [0.3627, 10.2364], [0.2619, 9.4955], [0.5291, 9.3584], [0.4153, 8.6526], [0.688, 8.304], [0.5837, 8.1457], [0.6348, 7.3538], [0.5256, 6.8509], [0.7369, 6.4526], [1.1875, 6.0895], [0.9499, 5.8103], [0.2597, 5.7575], [-0.7977, 5.2266], [-1.6384, 4.9807], [-2.0018, 4.7623], [-3.1139, 5.0886], [-3.0869, 5.1285], [-3.0191, 5.1307], [-2.7952, 5.1844], [-3.2007, 6.3483], [-3.2357, 6.8073], [-2.9858, 7.2051], [-2.7899, 7.9321], [-2.5058, 8.2087], [-2.7466, 9.1097], [-2.6958, 9.4812], [-2.7866, 10.402], [-2.9148, 10.5924], [-2.8298, 10.9985], [-0.7014, 10.9887], [-0.0686, 11.1157]]]
      },
      "properties": {
        "id": "GH",
        "name": "Ghana"
      },
      "id": "GH"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[-11.3894, 12.4043], [-11.3053, 12.0155], [-10.9333, 12.205], [-10.6774, 11.8996], [-10.2748, 12.2125], [-9.8207, 12.0426], [-9.043, 12.4026], [-8.8219, 11.6732], [-8.4075, 11.3865], [-8.2316, 10.4378], [-7.9908, 10.1627], [-8.1366, 10.0219], [-8.137, 9.4955], [-7.8962, 9.416], [-7.951, 8.7866], [-7.8236, 8.4674], [-8.232, 7.5566], [-8.4863, 7.5584], [-8.7083, 7.6591], [-8.8896, 7.2627], [-9.4638, 7.4158], [-9.3691, 7.7039], [-9.5182, 8.3462], [-9.7683, 8.5345], [-10.2832, 8.4852], [-10.5005, 8.6876], [-10.6905, 9.3144], [-11.2056, 9.9776], [-11.9109, 9.9931], [-12.5016, 9.8622], [-12.7559, 9.3734], [-13.2928, 9.0493], [-13.7005, 9.8511], [-14.427, 10.2484], [-14.7758, 10.9314], [-15.0431, 10.9404], [-14.6831, 11.5085], [-13.7327, 11.7358], [-13.7294, 12.6738], [-13.0828, 12.6334], [-12.2912, 12.328], [-11.3894, 12.4043]]]
      },
      "properties": {
        "id": "GN",
        "name": "Guinea"
      },
      "id": "GN"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[-61.3272, 16.2302], [-61.5221, 16.228], [-61.529, 16.4339], [-61.4065, 16.4682], [-61.3272, 16.2302]]]
      },
      "properties": {
        "id": "GP",
        "name": "Guadeloupe"
      },
      "id": "GP"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[-16.7633, 13.064], [-16.8249, 13.341], [-16.5623, 13.5873], [-15.5096, 13.5864], [-15.8343, 13.1563], [-16.6489, 13.154], [-16.7633, 13.064]]]
      },
      "properties": {
        "id": "GM",
        "name": "Gambia"
      },
      "id": "GM"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[-15.0431, 10.9404], [-15.3931, 11.2173], [-15.5018, 11.7239], [-16.1384, 11.9174], [-16.7119, 12.3551], [-15.5748, 12.4904], [-15.1962, 12.6799], [-13.7294, 12.6738], [-13.7327, 11.7358], [-14.6831, 11.5085], [-15.0431, 10.9404]]]
      },
      "properties": {
        "id": "GW",
        "name": "Guinea-Bissau"
      },
      "id": "GW"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [[[[9.5907, 1.0318], [9.3861, 1.1392], [9.8069, 1.9276], [9.8007, 2.3044], [9.98, 2.1677], [11.3285, 2.1673], [11.3352, 0.9998], [9.5907, 1.0318]]], [[[8.7358, 3.7582], [8.9462, 3.6277], [8.7038, 3.2238], [8.4748, 3.2646], [8.7358, 3.7582]]]]
      },
      "properties": {
        "id": "GQ",
        "name": "Equatorial Guinea"
      },
      "id": "GQ"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [[[[23.4153, 38.9589], [24.0989, 38.6712], [23.7588, 38.4013], [23.252, 38.8013], [23.4153, 38.9589]]], [[[26.0392, 40.7269], [25.1044, 40.9945], [24.3838, 40.9129], [23.8786, 40.5444], [23.6644, 40.224], [23.3118, 40.2164], [22.6295, 40.4956], [22.5923, 40.037], [22.9191, 39.6291], [22.9656, 39.0308], [23.2528, 38.6615], [23.9671, 38.2748], [23.5804, 38.0107], [23.1937, 37.9592], [23.1614, 37.3338], [22.7651, 37.3932], [23.0735, 36.7749], [22.6083, 36.7798], [22.0804, 37.0288], [21.5829, 37.0807], [21.5713, 37.541], [21.1448, 37.9192], [21.4036, 38.1967], [21.8248, 38.3281], [22.7996, 37.9814], [22.4218, 38.4386], [21.4724, 38.3214], [21.1133, 38.385], [20.7794, 39.0086], [20.301, 39.3273], [20.0013, 39.7095], [20.6575, 40.1175], [21.0312, 40.6585], [20.9641, 40.8498], [21.5758, 40.8689], [21.9296, 41.1073], [22.7246, 41.1783], [22.9159, 41.3363], [23.635, 41.3869], [24.0558, 41.5272], [25.2511, 41.2435], [26.1355, 41.3856], [26.3209, 41.7167], [26.6246, 41.4015], [26.0392, 40.7269]]], [[[23.8521, 35.5355], [24.3128, 35.3638], [24.7213, 35.425], [25.4758, 35.3061], [25.7449, 35.1427], [24.7997, 34.9345], [24.4638, 35.1604], [23.5618, 35.2949], [23.8521, 35.5355]]]]
      },
      "properties": {
        "id": "GR",
        "name": "Greece"
      },
      "id": "GR"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[-61.7154, 12.0128], [-61.715, 12.185], [-61.6071, 12.2233], [-61.6271, 12.0541], [-61.7154, 12.0128]]]
      },
      "properties": {
        "id": "GD",
        "name": "Grenada"
      },
      "id": "GD"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [[[[-29.953, 83.5649], [-25.9475, 83.2896], [-24.4703, 82.8772], [-21.5208, 82.5954], [-25.1489, 82.001], [-21.3379, 82.0687], [-21.1466, 81.6952], [-17.2261, 81.4304], [-15.5555, 81.8337], [-12.1929, 81.649], [-11.5288, 81.424], [-14.5035, 80.7633], [-16.7607, 80.5733], [-16.8683, 80.1982], [-19.4292, 80.2576], [-20.1385, 79.8033], [-19.2836, 79.6831], [-19.0749, 79.1524], [-20.9557, 78.5551], [-20.8625, 77.9119], [-20.232, 77.3684], [-18.339, 77.2152], [-18.5103, 76.7782], [-20.9422, 76.887], [-21.8772, 76.5734], [-21.5692, 76.2937], [-20.1037, 76.2191], [-19.509, 75.7575], [-19.4261, 75.2299], [-20.485, 75.3143], [-19.2252, 74.4795], [-19.3693, 74.284], [-21.1295, 74.1109], [-20.3673, 73.8483], [-20.5096, 73.493], [-22.1851, 73.2699], [-22.0364, 72.9184], [-22.2932, 72.1196], [-24.0692, 72.4986], [-24.6669, 72.4374], [-22.0133, 71.6888], [-21.7522, 71.4784], [-21.5228, 70.5262], [-23.3279, 70.451], [-23.7917, 70.555], [-24.377, 71.1463], [-25.7422, 71.1836], [-26.7179, 70.9505], [-27.6887, 70.9934], [-28.5409, 70.4769], [-28.0149, 70.4024], [-26.7472, 70.4756], [-23.1732, 70.1145], [-23.0882, 69.883], [-26.3414, 68.7023], [-29.2496, 68.2988], [-29.8687, 68.3117], [-30.9786, 68.0613], [-32.1373, 68.3849], [-32.2748, 67.9228], [-33.157, 67.6267], [-34.1016, 66.7258], [-34.6329, 66.4348], [-36.3792, 65.8307], [-37.7541, 65.593], [-39.961, 65.5562], [-39.5779, 65.3407], [-40.6554, 64.9154], [-40.1822, 64.48], [-40.6177, 64.1317], [-40.5504, 63.7254], [-42.1529, 62.5685], [-42.3216, 62.1526], [-42.1103, 61.8572], [-42.4188, 61.5369], [-42.7171, 60.7675], [-43.3202, 59.9281], [-44.0654, 59.9247], [-45.3793, 60.2028], [-46.0467, 60.6157], [-46.0116, 61.0969], [-46.8745, 60.8163], [-47.7963, 60.829], [-48.922, 61.2775], [-49.2892, 61.59], [-49.5534, 62.2328], [-50.3191, 62.4731], [-50.3383, 62.8287], [-51.4689, 63.6423], [-51.4511, 63.9047], [-52.0934, 64.4158], [-52.259, 65.1549], [-53.6346, 66.4136], [-53.0383, 66.8268], [-53.8845, 67.1356], [-53.4189, 67.5746], [-53.578, 67.8369], [-53.0393, 68.6108], [-51.2493, 68.74], [-50.5, 69.9358], [-52.2545, 70.0591], [-54.0143, 70.4217], [-54.1659, 70.8201], [-52.4052, 70.6867], [-51.5246, 70.4395], [-51.1302, 70.9716], [-53.117, 71.3128], [-53.4761, 71.6401], [-54.6891, 71.3671], [-55.5939, 71.5536], [-55.3156, 72.1106], [-55.6017, 72.4536], [-54.7732, 72.9175], [-56.104, 73.5582], [-55.9295, 73.8954], [-56.7063, 74.2192], [-56.2555, 74.5268], [-58.6035, 75.3853], [-58.5163, 75.6891], [-61.3747, 76.18], [-63.4388, 76.3394], [-66.8262, 75.9687], [-69.3728, 76.3319], [-69.2521, 76.6861], [-70.7928, 76.869], [-70.863, 77.1755], [-69.3515, 77.4671], [-72.818, 78.1944], [-72.3957, 78.5043], [-68.9935, 78.8574], [-67.4823, 79.1168], [-65.9679, 79.1324], [-64.7923, 80.0006], [-66.8437, 80.0761], [-66.996, 80.413], [-62.9932, 81.2069], [-61.436, 81.1337], [-61.203, 81.7469], [-58.7174, 82.0931], [-54.7259, 82.3513], [-52.7756, 82.3218], [-50.8944, 81.8952], [-48.8612, 82.4055], [-45.2912, 81.8288], [-44.239, 82.3681], [-46.4782, 82.9518], [-43.1945, 83.255], [-32.9846, 83.5995], [-29.953, 83.5649]]], [[[-52.7313, 69.9447], [-52.0452, 69.8071], [-52.1125, 69.489], [-53.5784, 69.2567], [-53.7831, 69.5064], [-54.804, 69.6304], [-54.8304, 70.1611], [-53.3752, 70.2212], [-52.7313, 69.9447]]], [[[-25.4323, 70.9213], [-25.4022, 70.6527], [-27.898, 70.4541], [-27.7089, 70.8971], [-25.4323, 70.9213]]]]
      },
      "properties": {
        "id": "GL",
        "name": "Greenland"
      },
      "id": "GL"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[-89.1615, 17.8149], [-89.2374, 15.8942], [-88.894, 15.8907], [-88.2284, 15.729], [-88.9764, 15.1427], [-89.2223, 14.8661], [-89.3626, 14.416], [-89.8726, 14.0454], [-90.0952, 13.7365], [-90.607, 13.929], [-91.1461, 13.9255], [-91.8191, 14.2283], [-92.2352, 14.5452], [-92.0748, 15.0743], [-92.1871, 15.3207], [-91.7365, 16.07], [-90.4472, 16.0727], [-90.4171, 16.3909], [-90.7107, 16.7083], [-91.4096, 17.256], [-90.993, 17.2525], [-90.9893, 17.8163], [-89.1615, 17.8149]]]
      },
      "properties": {
        "id": "GT",
        "name": "Guatemala"
      },
      "id": "GT"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[-51.6526, 4.0614], [-51.9907, 3.7018], [-52.7006, 2.3635], [-52.9648, 2.1837], [-53.7678, 2.3551], [-54.13, 2.1211], [-54.6163, 2.3266], [-54.1955, 2.8181], [-54.2032, 3.1381], [-53.9904, 3.5895], [-54.3508, 4.0543], [-54.4522, 5.0135], [-54.1559, 5.3589], [-53.8472, 5.7824], [-53.4544, 5.5635], [-52.8993, 5.425], [-52.2905, 4.942], [-51.9196, 4.5244], [-51.6526, 4.0614]]]
      },
      "properties": {
        "id": "GF",
        "name": "French Guiana"
      },
      "id": "GF"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[144.7416, 13.2593], [144.6493, 13.4288], [144.7905, 13.5269], [144.7416, 13.2593]]]
      },
      "properties": {
        "id": "GU",
        "name": "Guam"
      },
      "id": "GU"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[-57.1948, 5.5484], [-57.3309, 5.0202], [-57.7111, 4.9909], [-58.0544, 4.1719], [-57.8327, 3.6761], [-57.5497, 3.3529], [-57.3036, 3.3769], [-57.2097, 2.8829], [-56.7044, 2.0364], [-56.4828, 1.9422], [-56.8369, 1.8814], [-57.119, 2.0141], [-57.5943, 1.7043], [-58.3407, 1.5876], [-58.5119, 1.2848], [-58.8626, 1.2036], [-59.2312, 1.3758], [-59.7563, 1.9005], [-59.7552, 2.2742], [-59.9942, 2.6902], [-59.8544, 3.5873], [-59.5513, 3.9336], [-59.8333, 4.476], [-60.1112, 4.511], [-59.9907, 5.0828], [-60.1421, 5.239], [-60.7422, 5.2022], [-61.3768, 5.9071], [-61.1286, 6.2143], [-61.1457, 6.6946], [-60.3951, 6.9453], [-60.7192, 7.4989], [-60.5136, 7.8132], [-60.0324, 8.0537], [-59.8315, 8.3059], [-60.0175, 8.5491], [-59.2003, 8.0746], [-58.6266, 7.5459], [-58.4806, 7.0381], [-57.9825, 6.786], [-57.1902, 6.0975], [-57.1948, 5.5484]]]
      },
      "properties": {
        "id": "GY",
        "name": "Guyana"
      },
      "id": "GY"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[114.0154, 22.5117], [114.2657, 22.5411], [114.268, 22.2955], [114.0154, 22.5117]]]
      },
      "properties": {
        "id": "HK",
        "name": "Hong Kong"
      },
      "id": "HK"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[73.7074, -53.1372], [73.465, -53.1843], [73.3363, -53.0297], [73.5857, -53.0272], [73.7074, -53.1372]]]
      },
      "properties": {
        "id": "HM",
        "name": "Heard Island and McDonald Islands"
      },
      "id": "HM"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[-83.1577, 14.9931], [-83.4152, 15.0082], [-83.8674, 14.7947], [-84.646, 14.6611], [-84.9851, 14.7526], [-85.1796, 14.3433], [-85.7868, 13.8443], [-86.1512, 13.9948], [-86.3317, 13.7701], [-86.7336, 13.7635], [-86.7108, 13.3134], [-87.0593, 12.9916], [-87.3374, 12.9791], [-87.4891, 13.3529], [-87.8143, 13.3991], [-87.7153, 13.8128], [-88.151, 13.9872], [-88.449, 13.851], [-89.0572, 14.329], [-89.3626, 14.416], [-89.2223, 14.8661], [-88.9764, 15.1427], [-88.2284, 15.729], [-87.6181, 15.9097], [-86.9072, 15.7623], [-86.3568, 15.7832], [-85.784, 16.0029], [-85.4836, 15.8995], [-84.9738, 15.9901], [-84.2614, 15.8227], [-83.7604, 15.2203], [-83.3691, 15.2399], [-83.1577, 14.9931]]]
      },
      "properties": {
        "id": "HN",
        "name": "Honduras"
      },
      "id": "HN"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [[[[17.6678, 42.8971], [18.4361, 42.5598], [18.5173, 42.4328], [17.6678, 42.8971]]], [[[18.9054, 45.9315], [19.0549, 45.5271], [19.007, 44.8693], [18.6625, 45.0774], [17.813, 45.0779], [16.5305, 45.2168], [16.2935, 45.0087], [15.788, 45.1791], [15.7368, 44.7658], [16.2141, 44.215], [17.6247, 43.0426], [17.5852, 42.9384], [16.9029, 43.3924], [15.9414, 43.6565], [15.1229, 44.2567], [14.8549, 45.081], [14.3861, 45.342], [13.9656, 44.8355], [13.6292, 45.1081], [13.5778, 45.5169], [13.8787, 45.4286], [15.3395, 45.4672], [15.6246, 45.8338], [15.6361, 46.2005], [16.5164, 46.4997], [17.3104, 45.9963], [17.9639, 45.7704], [18.9054, 45.9315]]]]
      },
      "properties": {
        "id": "HR",
        "name": "Croatia"
      },
      "id": "HR"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[-71.7791, 19.7184], [-71.6571, 19.1306], [-71.7683, 18.0391], [-72.0599, 18.2286], [-72.8766, 18.1518], [-73.3851, 18.2513], [-73.885, 18.0418], [-74.4189, 18.3462], [-74.2276, 18.6627], [-72.7894, 18.4346], [-72.3478, 18.6748], [-72.8112, 19.0716], [-72.7033, 19.4409], [-73.0527, 19.6109], [-73.1177, 19.9038], [-72.6369, 19.9008], [-71.7791, 19.7184]]]
      },
      "properties": {
        "id": "HT",
        "name": "Haiti"
      },
      "id": "HT"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[22.132, 48.4053], [22.8763, 47.9472], [22.2905, 47.7279], [21.1518, 46.3043], [20.2419, 46.1086], [19.5308, 46.1552], [18.9054, 45.9315], [17.9639, 45.7704], [17.3104, 45.9963], [16.5164, 46.4997], [16.0929, 46.8632], [16.4533, 47.0066], [16.4342, 47.3675], [17.1475, 48.0058], [17.7618, 47.7701], [18.7242, 47.787], [18.7917, 48.0005], [19.8988, 48.1314], [20.4901, 48.5269], [21.4515, 48.5522], [22.132, 48.4053]]]
      },
      "properties": {
        "id": "HU",
        "name": "Hungary"
      },
      "id": "HU"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [[[[135.383, -0.6514], [135.8935, -0.726], [135.8389, -1.1193], [135.383, -0.6514]]], [[[99.1636, -1.7781], [98.8743, -1.6639], [98.6018, -1.1978], [98.8689, -0.9155], [99.2672, -1.6276], [99.1636, -1.7781]]], [[[128.153, -1.6604], [127.5617, -1.7283], [127.7428, -1.3602], [128.153, -1.6604]]], [[[106.0457, -1.6693], [106.3659, -2.4648], [106.6788, -2.7039], [106.547, -3.0555], [105.9987, -2.8248], [105.7857, -2.1815], [105.1331, -2.0425], [105.5855, -1.5268], [106.0457, -1.6693]]], [[[135.4741, -1.5916], [136.2016, -1.6551], [136.1927, -1.8593], [135.4741, -1.5916]]], [[[124.9694, -1.7057], [124.8344, -1.8943], [124.4176, -2.0053], [124.3808, -1.6875], [124.9694, -1.7057]]], [[[108.2071, -2.9978], [107.6145, -3.2096], [107.6664, -2.5664], [108.0743, -2.597], [108.2071, -2.9978]]], [[[129.7545, -2.866], [130.379, -2.9894], [130.8597, -3.5704], [130.8052, -3.8577], [129.8441, -3.3272], [129.4678, -3.4533], [128.9675, -3.3258], [128.4193, -3.416], [128.0819, -3.1838], [128.1987, -2.866], [129.4274, -2.7906], [129.7545, -2.866]]], [[[126.8613, -3.088], [127.2274, -3.3911], [127.2296, -3.633], [126.6863, -3.8235], [126.2144, -3.6051], [126.0262, -3.1704], [126.8613, -3.088]]], [[[122.6451, -5.2693], [122.3961, -5.0699], [122.369, -4.7671], [122.702, -4.6184], [122.6451, -5.2693]]], [[[134.7469, -5.7069], [134.7558, -6.1708], [134.4411, -6.335], [134.3412, -5.7128], [134.7469, -5.7069]]], [[[107.3739, -6.0075], [107.6669, -6.2156], [108.295, -6.2649], [108.6776, -6.7905], [110.4261, -6.9472], [110.7369, -6.4722], [111.1546, -6.6692], [111.5403, -6.6484], [112.0873, -6.8934], [112.5391, -6.9264], [112.7943, -7.5526], [113.2483, -7.7182], [114.0705, -7.633], [114.4442, -7.8957], [114.3869, -8.4054], [114.5835, -8.7698], [113.2532, -8.2869], [112.6789, -8.4093], [111.5101, -8.305], [110.6072, -8.1496], [110.0385, -7.8904], [109.2818, -7.7049], [108.7411, -7.6672], [108.4517, -7.7968], [107.9172, -7.7239], [107.2851, -7.4718], [106.6312, -7.4155], [106.5199, -7.0537], [105.4839, -6.7816], [105.8682, -6.1167], [106.075, -5.9142], [106.8252, -6.0984], [107.0463, -5.9044], [107.3739, -6.0075]]], [[[134.5371, -6.4424], [134.3559, -6.8149], [134.0589, -6.7692], [134.1682, -6.1761], [134.5371, -6.4424]]], [[[113.8445, -7.1051], [113.4707, -7.2183], [112.7637, -7.1398], [112.8679, -6.9001], [113.9746, -6.873], [113.8445, -7.1051]]], [[[131.3255, -7.9997], [131.0866, -7.8651], [131.2602, -7.4706], [131.6912, -7.439], [131.3255, -7.9997]]], [[[138.5351, -8.2735], [138.2963, -8.4054], [137.685, -8.2624], [138.0073, -7.6414], [138.2954, -7.4386], [138.7699, -7.3906], [138.9893, -7.696], [138.5351, -8.2735]]], [[[126.8008, -7.668], [126.472, -7.9503], [125.8434, -7.8167], [126.6096, -7.5716], [126.8008, -7.668]]], [[[115.4479, -8.1549], [115.7045, -8.4071], [115.236, -8.7977], [114.4752, -8.1196], [115.4479, -8.1549]]], [[[118.2426, -8.3179], [118.9879, -8.3379], [119.0061, -8.7497], [118.1898, -8.8403], [117.0613, -9.0991], [116.7884, -9.0064], [116.8349, -8.5323], [117.1649, -8.3671], [117.5671, -8.4266], [118.1174, -8.1221], [118.2426, -8.3179]]], [[[122.7827, -8.6117], [121.6512, -8.899], [121.0352, -8.9354], [119.8077, -8.6974], [119.9183, -8.4453], [120.6103, -8.2407], [121.4444, -8.578], [121.9663, -8.455], [122.263, -8.6251], [122.6034, -8.4027], [122.7827, -8.6117]]], [[[116.6407, -8.6139], [116.3774, -8.9292], [116.0764, -8.745], [116.0613, -8.4374], [116.4014, -8.2043], [116.7343, -8.3872], [116.6407, -8.6139]]], [[[125.0678, -9.5119], [124.4273, -10.1485], [123.8574, -10.3439], [123.5893, -9.967], [123.7092, -9.6149], [124.0362, -9.3416], [124.4441, -9.1902], [124.9223, -8.9424], [125.0678, -9.5119]]], [[[120.0123, -9.3748], [120.5038, -9.674], [120.8327, -10.0375], [120.439, -10.2941], [120.1447, -10.1999], [119.6009, -9.7734], [119.0855, -9.7069], [119.1855, -9.3846], [120.0123, -9.3748]]], [[[96.4924, 5.2293], [97.4512, 5.2359], [97.9084, 4.8799], [98.2483, 4.4147], [98.3074, 4.0928], [99.7323, 3.1829], [100.4572, 2.2574], [100.6854, 2.1202], [101.0463, 2.2574], [101.4768, 1.6933], [101.7848, 1.6214], [102.1572, 1.2591], [102.4694, 0.7792], [102.8493, 0.7153], [103.0663, 0.4921], [103.4787, 0.48], [103.7869, 0.0468], [103.4286, -0.1916], [103.4313, -0.5334], [103.7211, -0.8867], [104.3608, -1.0385], [104.5685, -1.9219], [104.8451, -2.0932], [104.6683, -2.3857], [105.3968, -2.3804], [105.5819, -2.4918], [106.0444, -3.1061], [105.8439, -3.6136], [105.8873, -5.0096], [105.8163, -5.6767], [105.6183, -5.7997], [105.3493, -5.5494], [105.0811, -5.7455], [104.6395, -5.5205], [104.6013, -5.9044], [103.8312, -5.0797], [102.9189, -4.4707], [102.5378, -4.1519], [102.1276, -3.5993], [101.5784, -3.1669], [100.8478, -2.1438], [100.8554, -1.9343], [100.4865, -1.2991], [100.308, -0.8267], [99.5978, 0.1023], [99.1592, 0.3518], [98.7962, 1.4948], [98.5645, 1.9023], [97.7006, 2.3586], [97.591, 2.8465], [97.3912, 2.9752], [96.9691, 3.5753], [96.4448, 3.8163], [95.4949, 4.7613], [95.2068, 5.2839], [95.2277, 5.5648], [95.6289, 5.6092], [96.1332, 5.294], [96.4924, 5.2293]]], [[[117.5745, 4.1705], [117.6301, 3.6362], [117.1661, 3.5922], [117.6105, 3.0643], [118.0664, 2.3178], [117.8648, 1.9684], [118.0805, 1.7017], [118.9847, 0.982], [118.5346, 0.8135], [118.196, 0.8743], [117.745, 0.7295], [117.5221, 0.2359], [117.4626, -0.3238], [117.5626, -0.7708], [116.5544, -1.474], [116.4235, -2.0528], [116.5655, -2.2996], [116.3308, -2.9025], [115.956, -3.5949], [114.6937, -4.1698], [114.5361, -3.4946], [114.0825, -3.2789], [113.7957, -3.4564], [113.5258, -3.1838], [112.9714, -3.187], [112.6003, -3.4005], [112.2852, -3.3209], [111.8222, -3.5324], [111.8231, -3.0572], [111.3676, -2.9335], [111.0445, -3.0555], [110.5739, -2.8913], [110.2326, -2.925], [110.0191, -1.3989], [109.7873, -1.0114], [109.454, -0.8689], [109.1606, -0.4947], [109.2573, 0.0312], [108.9444, 0.3557], [108.9058, 0.7939], [109.0758, 1.4957], [109.3786, 1.9226], [109.6289, 2.0274], [109.6542, 1.615], [110.5056, 0.8618], [110.9378, 1.0172], [111.7698, 0.9994], [112.0783, 1.1432], [112.1857, 1.4393], [112.4761, 1.5591], [113.6222, 1.236], [113.9022, 1.4344], [114.5458, 1.4673], [114.8303, 1.98], [114.7865, 2.2503], [115.1509, 2.4931], [115.0861, 2.8411], [115.4545, 3.0342], [115.5686, 3.9389], [115.8962, 4.3486], [117.1005, 4.337], [117.5745, 4.1705]]], [[[96.4636, 2.36], [95.8087, 2.6556], [95.8061, 2.9162], [96.4174, 2.5153], [96.4636, 2.36]]], [[[127.7326, 0.848], [128.1609, 1.1578], [128.4241, 1.5175], [128.6882, 1.5725], [128.7025, 1.1064], [128.2989, 0.8769], [128.6914, 0.3602], [127.9829, 0.4721], [127.8875, 0.2985], [128.0464, -0.706], [127.6917, -0.2417], [127.7086, 0.2883], [127.5555, 0.4899], [127.42, 1.252], [127.6318, 1.8437], [128.0109, 1.7012], [128.0118, 1.3318], [127.6527, 1.014], [127.7326, 0.848]]], [[[124.889, 0.9954], [124.4273, 0.4707], [123.7539, 0.3056], [123.2653, 0.3265], [123.0824, 0.4858], [121.8421, 0.4366], [121.4258, 0.4947], [120.349, 0.4494], [120.1273, 0.1667], [120.0119, -0.307], [120.0973, -0.6501], [120.5175, -1.0394], [120.6676, -1.3701], [121.0338, -1.4065], [121.5194, -0.8557], [121.9695, -0.9334], [122.2798, -0.7571], [122.8888, -0.7554], [122.5066, -1.3478], [121.7187, -1.8628], [121.349, -1.9459], [121.8484, -2.3315], [122.3993, -3.2007], [122.2528, -3.6206], [122.8772, -4.1089], [122.8973, -4.349], [122.2071, -4.4964], [121.9171, -4.848], [121.4866, -4.5812], [121.6179, -4.0929], [120.9144, -3.5557], [121.0542, -3.1669], [121.0521, -2.7515], [120.6539, -2.6676], [120.2539, -3.0529], [120.4369, -3.7072], [120.3627, -4.0858], [120.42, -4.6176], [120.2792, -5.1462], [120.3115, -5.5417], [119.7172, -5.6932], [119.3763, -5.425], [119.6116, -4.4237], [119.6235, -4.0344], [119.4199, -3.4755], [118.9945, -3.5376], [118.8126, -3.1567], [118.7836, -2.7647], [119.0922, -2.483], [119.3217, -1.9298], [119.3088, -1.4083], [119.7718, -0.4836], [119.8091, 0.2386], [120.2695, 0.971], [120.5167, 0.8174], [120.9122, 1.2888], [121.44, 1.2143], [121.5918, 1.0677], [122.4365, 1.0181], [122.8923, 0.8499], [123.2782, 0.9279], [123.8468, 0.8383], [124.2738, 1.022], [124.9893, 1.7012], [125.2339, 1.5024], [124.889, 0.9954]]], [[[97.4813, 1.4651], [97.9319, 0.9741], [97.8764, 0.6283], [97.4054, 0.9471], [97.2443, 1.4238], [97.4813, 1.4651]]], [[[140.9735, -2.6099], [140.9743, -4.8364], [140.9752, -6.9054], [140.976, -9.1187], [139.9347, -8.1013], [139.3856, -8.1892], [138.8561, -8.1452], [139.0878, -7.5873], [138.7477, -7.2516], [138.8645, -6.8583], [138.4388, -6.3435], [138.061, -5.4654], [137.0894, -4.9243], [136.6188, -4.8187], [135.9796, -4.531], [135.1956, -4.4507], [134.1473, -3.7968], [133.9736, -3.8182], [133.6532, -3.3645], [133.2489, -4.0623], [132.9687, -4.0947], [132.7539, -3.7037], [132.7512, -3.2948], [132.3481, -2.9752], [133.191, -2.4377], [133.6089, -2.5473], [133.905, -2.391], [133.9218, -2.102], [132.963, -2.2725], [132.3078, -2.2423], [132.0233, -1.9902], [131.9305, -1.5596], [131.2935, -1.3936], [131.2571, -0.8557], [131.8044, -0.7038], [132.1284, -0.4539], [132.6252, -0.3589], [133.4725, -0.7259], [133.9746, -0.7442], [134.2596, -1.363], [134.106, -1.7212], [134.1557, -2.1952], [135.0373, -3.333], [135.4865, -3.345], [136.2433, -2.5832], [136.3898, -2.2734], [136.8431, -2.1975], [137.1235, -1.8411], [137.8062, -1.4833], [138.6496, -1.7909], [139.7895, -2.3484], [140.6223, -2.4457], [140.9735, -2.6099]]]]
      },
      "properties": {
        "id": "ID",
        "name": "Indonesia"
      },
      "id": "ID"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[-4.4121, 54.1854], [-4.7457, 54.1189], [-4.5086, 54.3768], [-4.4121, 54.1854]]]
      },
      "properties": {
        "id": "IM",
        "name": "Isle of Man"
      },
      "id": "IM"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[78.7198, 31.8876], [78.8446, 31.3017], [79.1073, 31.4025], [79.3386, 31.1055], [79.3696, 31.0797], [79.9166, 30.8942], [79.9246, 30.8889], [80.1912, 30.5684], [80.6823, 30.4149], [81.0103, 30.1645], [80.4017, 29.7304], [80.0705, 28.8301], [80.5867, 28.6495], [81.8529, 27.8669], [81.9877, 27.9139], [82.7334, 27.5189], [83.2897, 27.371], [84.0909, 27.4913], [84.6103, 27.2987], [84.6852, 27.0413], [85.293, 26.7412], [86.3662, 26.5742], [86.7014, 26.4348], [87.0166, 26.5556], [87.2873, 26.3603], [88.0549, 26.43], [88.1614, 26.7248], [87.9842, 27.134], [88.1098, 27.8704], [88.6212, 28.0919], [88.8484, 27.8687], [88.8912, 27.316], [88.8578, 26.9613], [89.7638, 26.7017], [90.3457, 26.8903], [90.7395, 26.7718], [91.9984, 26.8548], [92.0835, 27.2907], [91.5949, 27.5575], [91.6317, 27.7599], [91.9775, 27.7301], [92.6642, 27.949], [92.7019, 28.1469], [93.2067, 28.5909], [93.9022, 28.803], [94.6231, 29.3126], [94.7696, 29.1759], [95.4204, 29.0543], [96.0351, 29.4472], [96.4355, 29.0507], [96.776, 28.3672], [97.3224, 28.2179], [97.3353, 27.9379], [96.666, 27.339], [96.0614, 27.217], [95.1287, 26.5973], [95.1323, 26.0412], [94.6227, 25.4099], [94.7074, 25.0486], [94.2929, 24.3219], [94.1278, 23.8763], [93.3075, 24.0219], [93.4148, 23.6823], [93.366, 23.1323], [93.0788, 22.7181], [93.1618, 22.3604], [92.9644, 22.0039], [92.575, 21.9782], [92.4916, 22.6853], [92.3615, 22.929], [92.2461, 23.6837], [91.938, 23.5047], [91.6197, 22.9797], [91.3153, 23.1044], [91.1603, 23.6605], [91.3672, 24.0933], [91.8767, 24.1955], [92.2514, 24.895], [92.0498, 25.1694], [90.4394, 25.1578], [89.814, 25.3052], [89.8229, 25.9412], [89.2893, 26.0376], [89.1082, 26.2023], [88.4402, 26.3696], [88.0847, 25.8885], [88.4521, 25.5745], [88.4561, 25.1884], [88.1453, 24.4858], [88.7335, 24.231], [88.5671, 23.6743], [88.7407, 23.4369], [89.0515, 22.0932], [89.0518, 21.6542], [88.2536, 21.6222], [87.9483, 21.8255], [87.1005, 21.5005], [86.8595, 21.2369], [86.9753, 20.7002], [86.7502, 20.3131], [86.2792, 19.9194], [85.5749, 19.6931], [84.7709, 19.1253], [84.1043, 18.2925], [83.654, 18.0697], [83.1981, 17.609], [82.3597, 17.0963], [82.2589, 16.56], [81.7618, 16.3297], [81.2384, 16.2639], [80.9787, 15.7584], [80.6468, 15.8951], [80.2933, 15.7109], [80.0532, 15.0739], [80.1656, 14.5777], [80.1118, 14.2123], [80.3422, 13.3613], [80.229, 12.6902], [79.8583, 11.9889], [79.7541, 11.5751], [79.8486, 11.197], [79.8379, 10.3225], [79.3905, 10.306], [78.9963, 9.6832], [78.9794, 9.2687], [78.4215, 9.1049], [78.1924, 8.891], [78.0602, 8.3845], [77.5178, 8.0782], [76.9669, 8.407], [76.5536, 8.9029], [76.3246, 9.452], [76.3464, 9.9221], [75.9224, 10.7841], [75.7239, 11.3616], [75.1966, 12.0577], [74.7705, 13.0773], [74.671, 13.6676], [74.3822, 14.4946], [73.9492, 15.0748], [73.9319, 15.3971], [73.476, 16.0544], [73.3375, 16.4598], [73.156, 17.6218], [72.8712, 18.6832], [72.6677, 19.8311], [72.8812, 20.563], [72.8139, 21.1171], [72.543, 21.6968], [72.5901, 22.2783], [72.3327, 22.2703], [72.037, 21.8233], [72.254, 21.5312], [72.0152, 21.1557], [71.0245, 20.7388], [70.7191, 20.7406], [70.1273, 21.0948], [69.0087, 22.1966], [70.1771, 22.5726], [70.2513, 22.9707], [69.6644, 22.7591], [69.236, 22.8487], [68.6408, 23.1901], [68.1649, 23.8572], [68.7242, 23.9646], [68.7282, 24.2656], [69.5592, 24.2731], [69.7163, 24.1728], [70.5468, 24.4183], [71.0439, 24.4001], [71.048, 24.6877], [70.6521, 25.4228], [70.2645, 25.7064], [70.0776, 26.0717], [70.1566, 26.4713], [69.47, 26.8047], [69.5681, 27.1744], [70.1446, 27.8492], [70.4035, 28.0249], [70.7373, 27.7293], [71.8701, 27.9624], [72.3419, 28.752], [72.903, 29.029], [73.3816, 29.9345], [73.809, 30.0934], [73.8991, 30.4352], [74.6329, 31.0345], [74.5099, 31.7127], [75.3333, 32.2792], [74.6578, 32.5189], [73.9941, 33.2424], [74.1499, 33.507], [73.9612, 34.6536], [74.3003, 34.7654], [75.7093, 34.5031], [76.5944, 34.7356], [77.0485, 35.1099], [77.7991, 35.496], [77.8107, 35.4846], [78.2821, 34.654], [78.9364, 34.3522], [78.7532, 34.0875], [78.8018, 33.4998], [79.1126, 33.2265], [79.1353, 33.1718], [79.2165, 32.5641], [79.2191, 32.5011], [78.3895, 32.5197], [78.7198, 31.8876]]]
      },
      "properties": {
        "id": "IN",
        "name": "India"
      },
      "id": "IN"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[72.4919, -7.3772], [72.467, -7.3676], [72.4737, -7.3097], [72.4357, -7.2303], [72.4938, -7.2618], [72.4919, -7.3772]]]
      },
      "properties": {
        "id": "IO",
        "name": "British Indian Ocean Territory"
      },
      "id": "IO"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[-6.2181, 54.0887], [-6.0274, 52.927], [-6.5612, 52.1888], [-7.5273, 52.0989], [-8.8135, 51.5849], [-10.3787, 51.8687], [-9.9559, 52.1366], [-9.2993, 53.0974], [-9.7954, 53.3951], [-9.996, 54.276], [-8.623, 54.3468], [-8.764, 54.6812], [-8.2746, 55.1462], [-7.2468, 55.3531], [-7.2186, 55.0921], [-8.1184, 54.4143], [-7.3553, 54.1213], [-6.2181, 54.0887]]]
      },
      "properties": {
        "id": "IE",
        "name": "Ireland"
      },
      "id": "IE"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[46.1146, 38.8776], [46.4906, 38.9065], [47.7729, 39.6486], [47.9957, 39.6842], [48.2422, 38.9788], [48.0233, 38.819], [48.5928, 38.4111], [48.8686, 38.4355], [49.0811, 37.6676], [49.4699, 37.4966], [50.1304, 37.407], [50.5331, 37.0137], [51.1186, 36.7425], [52.1901, 36.6217], [54.0172, 36.9524], [53.9142, 37.3435], [54.7451, 37.502], [55.0754, 37.9023], [55.5783, 38.0999], [56.2286, 38.0733], [56.4409, 38.2495], [57.1937, 38.2162], [57.4236, 37.9476], [58.4357, 37.6387], [58.8157, 37.6836], [59.2409, 37.5206], [59.5622, 37.1788], [60.0625, 36.9631], [60.3413, 36.6377], [61.1195, 36.6426], [61.262, 35.6194], [61.0799, 34.8554], [60.4856, 34.0947], [60.5109, 33.6389], [60.9171, 33.5052], [60.5606, 33.1376], [60.8292, 32.2494], [60.8541, 31.4833], [61.6602, 31.3825], [61.7844, 30.8321], [61.104, 30.1285], [60.8433, 29.8586], [61.3183, 29.3726], [61.6229, 28.7915], [61.8901, 28.5465], [62.3531, 28.4146], [62.7397, 28.0023], [62.7632, 27.2503], [63.1667, 27.2526], [63.168, 26.6657], [62.4391, 26.5609], [61.8697, 26.2422], [61.6686, 25.769], [61.5878, 25.2022], [61.412, 25.1023], [60.664, 25.282], [59.4562, 25.4814], [59.0461, 25.4175], [58.7978, 25.5547], [57.796, 25.6532], [57.3344, 25.7916], [56.9824, 26.9054], [56.356, 27.2002], [55.6503, 26.9778], [54.8956, 26.5565], [53.7056, 26.7256], [53.4548, 26.9432], [52.6916, 27.3236], [52.4761, 27.6165], [51.6663, 27.8451], [51.2789, 28.1315], [51.0622, 28.7262], [50.6751, 29.1466], [50.6498, 29.4201], [49.9831, 30.2093], [49.5548, 30.029], [48.919, 30.1209], [48.5466, 29.9625], [48.0148, 30.4654], [48.0105, 30.9897], [47.6793, 31.0025], [47.8298, 31.7944], [47.3713, 32.4239], [47.1213, 32.4665], [46.3769, 32.9291], [45.3967, 33.9708], [45.4377, 34.4152], [45.6782, 34.7982], [46.1336, 35.1276], [45.7235, 35.8365], [45.3617, 36.0154], [45.031, 36.5263], [44.7651, 37.1424], [44.5614, 37.7448], [44.2112, 37.9081], [44.4309, 38.3569], [44.023, 39.3774], [44.8172, 39.6504], [45.4799, 39.0063], [46.1146, 38.8776]]]
      },
      "properties": {
        "id": "IR",
        "name": "Iran"
      },
      "id": "IR"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[44.7651, 37.1424], [45.031, 36.5263], [45.3617, 36.0154], [45.7235, 35.8365], [46.1336, 35.1276], [45.6782, 34.7982], [45.4377, 34.4152], [45.3967, 33.9708], [46.3769, 32.9291], [47.1213, 32.4665], [47.3713, 32.4239], [47.8298, 31.7944], [47.6793, 31.0025], [48.0105, 30.9897], [48.0148, 30.4654], [48.5466, 29.9625], [47.9785, 29.983], [47.6727, 30.0956], [47.1143, 29.9612], [46.9056, 29.5377], [46.5314, 29.0965], [46.3565, 29.0636], [44.7164, 29.1937], [42.8577, 30.4952], [42.0743, 31.0802], [40.3693, 31.9391], [39.1455, 32.1247], [38.7736, 33.372], [40.6893, 34.3321], [40.9873, 34.4289], [41.1945, 34.769], [41.3543, 35.6403], [41.2455, 36.0735], [41.4169, 36.5148], [41.7885, 36.5973], [42.3588, 37.1087], [42.7748, 37.3719], [43.516, 37.2445], [44.1561, 37.2832], [44.2817, 36.9782], [44.7651, 37.1424]]]
      },
      "properties": {
        "id": "IQ",
        "name": "Iraq"
      },
      "id": "IQ"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[-15.5431, 66.2284], [-14.6981, 66.0203], [-14.7577, 65.7557], [-13.616, 65.4872], [-13.853, 64.8621], [-15.0215, 64.296], [-16.0604, 64.1113], [-16.6404, 63.8654], [-17.8156, 63.7129], [-18.6537, 63.4066], [-20.1982, 63.5558], [-21.8329, 64.2054], [-21.9503, 64.515], [-22.684, 65.0264], [-22.0057, 65.4934], [-22.9024, 65.5804], [-24.2241, 65.4872], [-23.7372, 66.0695], [-22.4261, 66.4302], [-21.3036, 65.8764], [-21.2301, 65.4205], [-20.3567, 65.7191], [-20.3567, 66.0331], [-18.7776, 66.1688], [-16.7485, 66.1317], [-15.9855, 66.5145], [-15.5431, 66.2284]]]
      },
      "properties": {
        "id": "IS",
        "name": "Iceland"
      },
      "id": "IS"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[35.7874, 32.735], [35.5512, 32.3955], [35.193, 32.5344], [34.956, 32.1611], [34.9507, 31.6023], [35.4506, 31.4792], [35.4394, 31.1326], [35.174, 30.524], [34.9734, 29.5549], [34.9042, 29.4773], [34.2453, 31.2085], [34.4775, 31.5849], [34.6786, 31.8956], [35.1088, 33.0835], [35.4109, 33.0755], [35.869, 33.432], [35.7874, 32.735]]]
      },
      "properties": {
        "id": "IL",
        "name": "Israel"
      },
      "id": "IL"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [[[[13.6998, 46.5201], [13.3993, 46.3177], [13.7198, 45.5875], [13.2062, 45.7712], [12.2744, 45.4459], [12.5235, 44.9678], [12.2483, 44.7223], [12.3961, 44.2239], [13.564, 43.5713], [14.0105, 42.6897], [14.8659, 42.0523], [15.1687, 41.9338], [15.9641, 41.9396], [16.0124, 41.4353], [17.1032, 41.062], [17.955, 40.6554], [18.4858, 40.105], [18.0779, 39.9367], [17.8648, 40.2803], [16.9283, 40.4579], [16.5301, 39.8595], [16.5976, 39.6389], [17.1148, 39.3806], [17.1746, 38.9979], [16.5589, 38.7147], [16.5457, 38.4093], [16.0569, 37.9419], [15.7244, 37.9393], [15.9725, 38.7124], [16.1967, 38.7591], [16.0236, 39.3535], [15.6929, 39.99], [14.9507, 40.2391], [14.7656, 40.6683], [14.1024, 40.8272], [13.7332, 41.2356], [13.0887, 41.244], [12.6309, 41.4696], [11.6375, 42.2876], [10.7084, 42.9361], [10.0475, 44.0201], [8.7659, 44.4222], [8.0814, 43.9189], [7.4929, 43.7671], [7.6514, 44.0339], [6.9673, 44.2802], [7.0307, 44.7166], [6.6277, 45.1178], [7.1533, 45.401], [6.8043, 45.8147], [7.021, 45.9257], [7.9931, 46.0158], [8.4583, 46.2457], [8.9537, 45.8298], [9.2511, 46.2866], [9.9391, 46.3616], [10.4527, 46.865], [11.025, 46.7971], [11.2442, 46.9755], [12.1542, 46.9351], [12.3881, 46.7025], [13.6998, 46.5201]], [[12.397, 43.9345], [12.4854, 43.9016], [12.5146, 43.9531], [12.4409, 43.9824], [12.397, 43.9345]]], [[[15.5765, 38.2202], [15.0994, 37.4585], [15.2944, 37.0132], [15.1127, 36.6879], [14.5019, 36.7989], [12.4356, 37.8198], [13.3518, 38.1807], [13.6816, 38.0009], [14.5059, 38.0453], [14.8459, 38.1718], [15.5765, 38.2202]]], [[[9.6319, 40.8823], [9.8051, 40.4996], [9.5623, 39.1661], [9.0562, 39.2394], [8.8813, 38.9126], [8.4179, 39.2057], [8.4712, 40.2927], [8.1897, 40.6518], [9.2831, 41.2018], [9.6319, 40.8823]]]]
      },
      "properties": {
        "id": "IT",
        "name": "Italy"
      },
      "id": "IT"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[-77.2614, 18.4572], [-76.3499, 18.1518], [-76.5246, 17.8664], [-76.8533, 17.9738], [-77.3615, 17.8336], [-77.7681, 17.8775], [-78.2167, 18.4479], [-77.8736, 18.522], [-77.2614, 18.4572]]]
      },
      "properties": {
        "id": "JM",
        "name": "Jamaica"
      },
      "id": "JM"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[-2.0186, 49.2311], [-2.2359, 49.1763], [-2.2206, 49.2665], [-2.0186, 49.2311]]]
      },
      "properties": {
        "id": "JE",
        "name": "Jersey"
      },
      "id": "JE"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[39.1455, 32.1247], [38.9621, 31.995], [36.9584, 31.4917], [37.9803, 30.5], [37.6335, 30.3132], [37.4693, 29.9949], [36.7551, 29.8662], [36.476, 29.4951], [36.0155, 29.1905], [34.9507, 29.3535], [34.9734, 29.5549], [35.174, 30.524], [35.4394, 31.1326], [35.4506, 31.4792], [35.5589, 31.7656], [35.5512, 32.3955], [35.7874, 32.735], [36.372, 32.387], [36.8182, 32.3173], [38.7736, 33.372], [39.1455, 32.1247]]]
      },
      "properties": {
        "id": "JO",
        "name": "Jordan"
      },
      "id": "JO"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [[[[143.8242, 44.1168], [144.7985, 43.9402], [145.1012, 43.7644], [145.3476, 43.1767], [144.6307, 42.9468], [143.9692, 42.8815], [143.4295, 42.419], [143.2364, 42.0004], [141.8514, 42.5793], [140.9864, 42.3421], [140.7098, 42.5557], [140.3151, 42.3342], [140.6601, 41.8157], [140.3849, 41.5192], [139.9951, 41.5764], [140.1083, 41.913], [139.821, 42.3875], [139.8913, 42.6494], [140.7808, 43.2149], [141.2962, 43.1998], [141.6446, 44.0196], [141.7822, 44.7166], [141.5828, 45.156], [141.9375, 45.5093], [142.7041, 44.8191], [143.8242, 44.1168]]], [[[141.2295, 41.3727], [141.4626, 40.611], [141.7968, 40.2914], [141.978, 39.8444], [141.9006, 39.1115], [141.6583, 38.9749], [141.4675, 38.4039], [141.1084, 38.3378], [140.9281, 37.9495], [141.0365, 37.4674], [140.9685, 37.0022], [140.6272, 36.5028], [140.6219, 36.0594], [140.874, 35.7251], [140.4571, 35.5102], [140.4163, 35.2669], [139.7993, 34.9567], [139.6502, 35.4091], [139.2494, 35.2781], [138.9826, 34.6984], [138.5773, 35.0863], [138.1888, 34.5963], [136.8848, 34.8058], [136.5332, 34.6784], [136.8536, 34.3241], [136.3299, 34.1767], [135.9162, 33.5615], [135.4528, 33.5536], [135.1752, 33.898], [135.1003, 34.2882], [135.3848, 34.5004], [134.7398, 34.7654], [134.208, 34.6975], [133.9683, 34.5274], [133.1423, 34.3024], [132.2381, 34.2269], [132.0902, 33.8554], [131.7405, 34.052], [130.9188, 33.9757], [131.0041, 34.3925], [131.3543, 34.4134], [132.923, 35.5111], [133.3766, 35.4587], [134.2139, 35.5391], [135.1744, 35.7473], [135.6804, 35.5032], [136.0955, 35.7677], [136.0062, 35.9905], [136.6982, 36.7421], [137.3424, 36.7704], [137.5142, 36.9515], [138.3199, 37.2183], [138.8849, 37.8437], [139.4012, 38.1425], [140.0479, 39.4635], [139.9081, 40.0215], [139.9227, 40.5986], [140.2813, 40.8462], [141.1186, 40.8823], [141.2295, 41.3727]]], [[[134.3572, 34.2562], [134.6373, 34.2265], [134.7389, 33.8204], [134.3772, 33.6082], [134.1814, 33.2473], [133.6319, 33.511], [133.2861, 33.3601], [132.9772, 32.842], [132.4951, 32.9166], [132.3659, 33.5123], [132.7841, 33.9925], [133.5822, 34.017], [134.0758, 34.3583], [134.3572, 34.2562]]], [[[131.1745, 33.6024], [131.5829, 33.6526], [131.8967, 33.2548], [131.9766, 32.8438], [131.732, 32.593], [131.3374, 31.4047], [130.5886, 31.1783], [130.2006, 31.2919], [130.3218, 31.6014], [130.1943, 32.0909], [130.6406, 32.6192], [129.58, 33.2361], [130.3648, 33.6344], [130.4838, 33.8345], [130.953, 33.8719], [131.1745, 33.6024]]]]
      },
      "properties": {
        "id": "JP",
        "name": "Japan"
      },
      "id": "JP"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[87.3229, 49.0858], [86.7534, 49.0088], [86.5496, 48.5287], [85.7493, 48.3849], [85.526, 47.9156], [85.6565, 47.2547], [84.7861, 46.8308], [83.1929, 47.1864], [83.0042, 47.0337], [82.3264, 45.52], [82.4787, 45.1236], [81.602, 45.3109], [80.0589, 45.0064], [80.4554, 44.7463], [80.355, 44.0973], [80.7856, 43.1616], [80.1651, 42.6653], [80.2095, 42.1899], [79.4899, 42.4576], [79.1646, 42.759], [76.9442, 42.9716], [75.0475, 42.9046], [74.2089, 43.2402], [73.5564, 43.0027], [73.4219, 42.5934], [72.8551, 42.561], [71.8168, 42.822], [71.2566, 42.7337], [70.9468, 42.2485], [70.4159, 42.0785], [70.0954, 41.8206], [69.0651, 41.367], [68.2919, 40.6562], [67.9359, 41.1965], [66.8142, 41.1423], [66.6686, 41.2707], [66.4986, 41.9951], [66.0094, 42.0048], [66.1004, 42.9908], [65.803, 42.877], [65.4963, 43.3108], [64.9055, 43.7147], [64.4433, 43.5513], [63.2071, 43.6282], [61.9904, 43.4923], [61.1607, 44.1689], [61.008, 44.3939], [58.5552, 45.5555], [55.9756, 44.9949], [55.977, 42.47], [55.9774, 41.3221], [55.5451, 41.2627], [54.9037, 41.9192], [54.1211, 42.3351], [53.2502, 42.2059], [52.4937, 41.7802], [52.5967, 42.7603], [51.8439, 42.9104], [51.3019, 43.4826], [50.8305, 44.1928], [50.3311, 44.3255], [50.4092, 44.6242], [50.8603, 44.6287], [51.4155, 45.358], [52.531, 45.3988], [52.7738, 45.5728], [53.1352, 46.1916], [53.1703, 46.6693], [52.9159, 46.9542], [52.1888, 46.8397], [51.1781, 47.11], [50.4194, 46.8797], [50, 46.6341], [49.3475, 46.5192], [49.2321, 46.3372], [48.6102, 46.5663], [48.9595, 46.7744], [48.1099, 47.7453], [47.0934, 47.9476], [47.0041, 48.2846], [46.6609, 48.4124], [46.7027, 48.8054], [47.0144, 49.0984], [46.8022, 49.367], [47.3264, 50.2734], [47.706, 50.3779], [48.4344, 49.8284], [48.8433, 50.0131], [48.8086, 50.6012], [49.498, 51.0835], [50.2468, 51.2895], [50.7941, 51.7292], [51.6091, 51.4839], [52.3309, 51.6812], [52.571, 51.4817], [53.3381, 51.4824], [54.0416, 51.1152], [54.4216, 50.7803], [54.727, 50.998], [55.5424, 50.6017], [55.7976, 50.6021], [56.4915, 51.0196], [57.0116, 51.0651], [57.4422, 50.8889], [57.8387, 51.0917], [58.3594, 51.0638], [58.8836, 50.6945], [59.8122, 50.5819], [59.9552, 50.7992], [60.6378, 50.6638], [61.3893, 50.8609], [61.5851, 51.2298], [61.3632, 51.4419], [60.4647, 51.6513], [60.0657, 51.9764], [60.9375, 52.2805], [60.8021, 52.7448], [61.0476, 52.9725], [61.974, 52.9436], [62.0147, 53.1079], [61.1994, 53.2872], [60.9796, 53.6217], [61.3339, 54.0491], [61.9286, 53.9464], [63.0739, 54.1053], [64.4611, 54.384], [65.1576, 54.3643], [65.4767, 54.6234], [66.2224, 54.6673], [68.0739, 54.9595], [68.2063, 55.1609], [68.9773, 55.3895], [70.1824, 55.1624], [70.7382, 55.3051], [71.1856, 54.5994], [71.0933, 54.2123], [72.9141, 54.1073], [73.3993, 53.8115], [73.2857, 53.5984], [74.4518, 53.6472], [76.2664, 54.312], [76.5757, 53.9424], [77.7042, 53.3791], [78.4756, 52.6385], [79.4687, 51.493], [79.9862, 50.7745], [80.8771, 51.2815], [81.4656, 50.7397], [82.4938, 50.7275], [83.357, 50.9945], [83.9454, 50.7745], [84.2577, 50.2883], [84.9893, 50.0615], [85.2099, 49.6648], [86.1807, 49.4992], [86.6144, 49.6098], [87.3229, 49.0858]]]
      },
      "properties": {
        "id": "KZ",
        "name": "Kazakhstan"
      },
      "id": "KZ"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[41.8838, 3.9779], [41.3418, 3.2015], [40.9645, 2.8145], [40.9699, 1.3781], [40.9788, -0.8703], [41.5327, -1.6955], [40.9957, -1.9507], [40.6441, -2.5393], [40.2223, -2.6884], [40.1154, -3.2504], [39.4908, -4.4786], [39.2218, -4.6922], [37.7974, -3.6744], [37.6087, -3.4604], [37.6437, -3.0453], [36.2633, -2.2747], [33.9794, -1.0022], [33.9031, -1.0022], [33.9431, 0.1738], [34.4814, 1.042], [34.7873, 1.2307], [34.9653, 1.6435], [34.964, 2.0626], [34.7425, 2.8181], [34.4478, 3.1634], [34.3927, 3.6916], [34.165, 3.8128], [33.9759, 4.2203], [35.2681, 5.4925], [35.7448, 5.3442], [35.763, 4.808], [36.0817, 4.4498], [36.9056, 4.4116], [38.0863, 3.649], [39.4943, 3.4559], [39.8424, 3.8514], [40.7652, 4.2731], [41.2207, 3.9438], [41.8838, 3.9779]]]
      },
      "properties": {
        "id": "KE",
        "name": "Kenya"
      },
      "id": "KE"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[80.2095, 42.1899], [80.2162, 42.0324], [79.2937, 41.7829], [78.3624, 41.3718], [78.1232, 41.0758], [76.8239, 40.9821], [76.4804, 40.4494], [75.8718, 40.3034], [75.5836, 40.6052], [75.0044, 40.4494], [74.4118, 40.1373], [73.9914, 40.0433], [73.9147, 39.6065], [73.6314, 39.4489], [73.2351, 39.3743], [72.0427, 39.3521], [71.8061, 39.2758], [71.4044, 39.598], [70.7333, 39.4134], [70.6076, 39.5643], [69.5986, 39.5736], [69.229, 39.761], [69.5303, 40.0974], [69.9666, 40.2022], [70.4514, 40.0491], [70.958, 40.2391], [71.6925, 40.1524], [73.113, 40.7859], [72.6585, 40.8698], [71.7924, 41.4131], [71.4084, 41.1361], [70.7826, 41.2627], [70.1811, 41.5716], [70.842, 42.0195], [70.9468, 42.2485], [71.2566, 42.7337], [71.8168, 42.822], [72.8551, 42.561], [73.4219, 42.5934], [73.5564, 43.0027], [74.2089, 43.2402], [75.0475, 42.9046], [76.9442, 42.9716], [79.1646, 42.759], [79.4899, 42.4576], [80.2095, 42.1899]]]
      },
      "properties": {
        "id": "KG",
        "name": "Kyrgyzstan"
      },
      "id": "KG"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[104.4264, 10.4113], [104.2623, 10.5413], [103.5321, 10.6048], [103.722, 10.8902], [103.5325, 11.1468], [103.153, 10.9137], [103.1254, 11.4606], [102.9341, 11.7065], [102.7366, 12.0897], [102.7556, 12.4261], [102.4995, 12.6697], [102.3198, 13.5399], [102.729, 13.8421], [103.1995, 14.3326], [104.779, 14.4281], [105.1833, 14.3463], [105.9047, 13.9246], [105.9787, 14.3433], [106.5013, 14.578], [106.8199, 14.3149], [107.5195, 14.705], [107.3313, 14.1266], [107.6056, 13.4377], [107.4755, 13.0303], [107.5061, 12.3644], [106.9305, 12.0776], [106.4137, 11.9485], [106.3401, 11.6817], [105.8513, 11.6351], [105.8558, 11.2942], [106.1678, 11.0123], [105.3866, 10.9399], [104.8504, 10.5347], [104.4264, 10.4113]]]
      },
      "properties": {
        "id": "KH",
        "name": "Cambodia"
      },
      "id": "KH"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[-157.3422, 1.8557], [-157.2461, 1.7318], [-157.4201, 1.7873], [-157.3422, 1.8557]]]
      },
      "properties": {
        "id": "KI",
        "name": "Kiribati"
      },
      "id": "KI"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[-62.6308, 17.2401], [-62.8389, 17.3391], [-62.7945, 17.4026], [-62.7137, 17.3533], [-62.6308, 17.2401]]]
      },
      "properties": {
        "id": "KN",
        "name": "Saint Kitts and Nevis"
      },
      "id": "KN"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[128.3744, 38.6233], [128.6191, 38.1763], [129.335, 37.2747], [129.4735, 36.7421], [129.4033, 36.0522], [129.5618, 35.9475], [129.2143, 35.1818], [128.5112, 35.101], [128.4441, 34.8706], [127.7149, 34.9545], [127.0308, 34.6069], [126.4817, 34.4937], [126.2913, 35.1543], [126.4884, 35.647], [126.7173, 35.7691], [126.5482, 36.4775], [126.2171, 36.8708], [126.7462, 37.1935], [126.6339, 37.7817], [127.1697, 38.3045], [128.0389, 38.3085], [128.3744, 38.6233]]]
      },
      "properties": {
        "id": "KR",
        "name": "South Korea"
      },
      "id": "KR"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[21.5625, 42.2477], [21.0595, 42.1713], [20.5659, 41.8739], [20.4856, 42.2232], [20.0638, 42.5473], [20.3444, 42.8278], [21.0569, 43.0915], [21.3906, 42.7514], [21.7529, 42.6698], [21.5625, 42.2477]]]
      },
      "properties": {
        "id": "XK",
        "name": "Kosovo"
      },
      "id": "XK"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[48.4423, 28.543], [47.6713, 28.5331], [47.4333, 28.9894], [46.5314, 29.0965], [46.9056, 29.5377], [47.1143, 29.9612], [47.6727, 30.0956], [47.9785, 29.983], [47.9696, 29.6167], [48.1836, 28.9792], [48.4423, 28.543]]]
      },
      "properties": {
        "id": "KW",
        "name": "Kuwait"
      },
      "id": "KW"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[102.1276, 22.379], [102.9487, 21.5698], [102.8511, 21.2658], [103.1046, 20.8916], [103.635, 20.6971], [104.0518, 20.9413], [104.5832, 20.6465], [104.6187, 20.3744], [104.928, 20.0179], [104.5463, 19.6105], [104.0319, 19.6753], [103.8965, 19.3401], [104.7164, 18.8034], [105.1149, 18.6787], [105.0856, 18.4501], [105.458, 18.1545], [105.6916, 17.7377], [106.5021, 16.9542], [106.6961, 16.4589], [107.3965, 16.0429], [107.1897, 15.7473], [107.6531, 15.255], [107.5195, 14.705], [106.8199, 14.3149], [106.5013, 14.578], [105.9787, 14.3433], [105.9047, 13.9246], [105.1833, 14.3463], [105.4754, 14.5301], [105.5131, 15.3606], [105.6224, 15.6998], [105.4062, 15.9874], [105.047, 16.1601], [104.7505, 16.6475], [104.8162, 17.3004], [103.9497, 18.3192], [103.3668, 18.4235], [103.0912, 18.1381], [102.7175, 17.8922], [102.1013, 18.2105], [101.1052, 17.4793], [100.9086, 17.5837], [101.1133, 18.0334], [101.0507, 18.4071], [101.2864, 18.977], [101.1545, 19.5793], [100.6253, 19.4999], [100.3978, 19.7561], [100.5428, 20.0886], [100.1225, 20.3168], [100.2494, 20.7304], [100.7564, 21.3128], [101.139, 21.5676], [101.2241, 21.2236], [101.705, 21.1503], [101.744, 21.778], [101.5243, 22.2539], [101.6712, 22.4625], [102.1276, 22.379]]]
      },
      "properties": {
        "id": "LA",
        "name": "Lao People's Democratic Republic"
      },
      "id": "LA"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[35.869, 33.432], [35.4109, 33.0755], [35.1088, 33.0835], [35.9761, 34.6291], [36.4329, 34.6136], [36.5851, 34.2212], [35.9423, 33.6677], [35.869, 33.432]]]
      },
      "properties": {
        "id": "LB",
        "name": "Lebanon"
      },
      "id": "LB"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[-8.4863, 7.5584], [-8.2965, 7.0741], [-8.3325, 6.8015], [-8.6035, 6.5076], [-7.8886, 6.2347], [-7.7965, 5.9749], [-7.4543, 5.8413], [-7.4299, 5.3247], [-7.5688, 5.0806], [-7.5451, 4.3512], [-8.259, 4.59], [-9.1322, 5.0548], [-10.2763, 6.0775], [-10.7857, 6.3101], [-10.849, 6.465], [-11.5075, 6.9068], [-11.2678, 7.2326], [-10.6474, 7.7595], [-10.2832, 8.4852], [-9.7683, 8.5345], [-9.5182, 8.3462], [-9.3691, 7.7039], [-9.4638, 7.4158], [-8.8896, 7.2627], [-8.7083, 7.6591], [-8.4863, 7.5584]]]
      },
      "properties": {
        "id": "LR",
        "name": "Liberia"
      },
      "id": "LR"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[25.1505, 31.655], [24.8526, 31.335], [24.9738, 30.7766], [24.7114, 30.1316], [24.9804, 29.1817], [24.9804, 26.4872], [24.9804, 24.4662], [24.9804, 21.996], [24.9671, 19.9953], [23.9804, 19.9958], [23.9804, 19.4968], [21.5847, 20.6794], [19.6683, 21.6258], [17.7521, 22.5721], [15.9841, 23.4453], [14.9791, 22.996], [14.2307, 22.6183], [13.4814, 23.1802], [11.9677, 23.5181], [11.5074, 24.3144], [10.6863, 24.5514], [10.2556, 24.591], [10.0009, 25.3322], [9.4482, 26.0673], [9.4912, 26.3337], [9.8593, 26.5521], [9.7474, 27.3306], [9.9162, 27.7857], [9.8424, 28.9669], [9.64, 29.6362], [9.3102, 30.1151], [9.5187, 30.2292], [9.8952, 30.3873], [10.2161, 30.7833], [10.1149, 31.4637], [10.8264, 32.0807], [11.5047, 32.4137], [11.5043, 33.182], [12.2798, 32.8584], [12.7534, 32.8012], [13.2834, 32.9148], [14.237, 32.6813], [14.5135, 32.5109], [15.1767, 32.391], [15.4963, 31.6568], [16.123, 31.2644], [17.3491, 31.0816], [18.1903, 30.7775], [18.9364, 30.2906], [19.2915, 30.2879], [19.7132, 30.4885], [20.1509, 31.0784], [19.9263, 31.8175], [20.1217, 32.2188], [20.621, 32.5801], [21.6357, 32.9375], [22.1875, 32.9183], [23.0908, 32.6187], [23.2865, 32.2139], [24.1295, 32.0093], [24.6839, 32.0159], [25.1505, 31.655]]]
      },
      "properties": {
        "id": "LY",
        "name": "Libya"
      },
      "id": "LY"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[-60.8953, 13.8222], [-61.0636, 13.9158], [-60.8867, 14.0112], [-60.8953, 13.8222]]]
      },
      "properties": {
        "id": "LC",
        "name": "Saint Lucia"
      },
      "id": "LC"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[9.5801, 47.0572], [9.4877, 47.062], [9.5277, 47.2707], [9.5801, 47.0572]]]
      },
      "properties": {
        "id": "LI",
        "name": "Liechtenstein"
      },
      "id": "LI"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[79.9822, 9.8129], [80.253, 9.7964], [80.7111, 9.3663], [81.373, 8.4315], [81.4359, 8.1189], [81.8741, 7.2885], [81.8611, 6.9014], [81.6375, 6.4251], [80.724, 5.979], [80.0954, 6.153], [79.8593, 6.8295], [79.7922, 7.5854], [79.929, 8.8994], [80.1184, 9.3268], [79.9822, 9.8129]]]
      },
      "properties": {
        "id": "LK",
        "name": "Sri Lanka"
      },
      "id": "LK"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[28.7367, -30.1019], [28.3922, -30.1476], [28.0179, -30.6421], [27.3886, -30.3159], [27.0517, -29.6642], [27.2944, -29.5195], [27.7356, -28.9402], [28.6257, -28.5815], [29.3013, -29.0897], [29.3904, -29.2696], [29.0979, -29.919], [28.7367, -30.1019]]]
      },
      "properties": {
        "id": "LS",
        "name": "Lesotho"
      },
      "id": "LS"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[26.5936, 55.6676], [26.175, 55.0033], [25.8593, 54.9192], [25.5473, 54.3317], [24.7683, 53.9746], [23.4845, 53.9397], [23.3699, 54.2005], [22.7663, 54.3567], [22.8312, 54.8384], [21.2358, 55.2641], [21.0463, 56.07], [22.0845, 56.4067], [24.1207, 56.2642], [24.9033, 56.3983], [26.5936, 55.6676]]]
      },
      "properties": {
        "id": "LT",
        "name": "Lithuania"
      },
      "id": "LT"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[6.1163, 50.1209], [6.4875, 49.7984], [6.344, 49.4527], [5.7896, 49.5384], [5.7439, 49.9196], [6.1163, 50.1209]]]
      },
      "properties": {
        "id": "LU",
        "name": "Luxembourg"
      },
      "id": "LU"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[27.3517, 57.5282], [27.797, 57.3169], [27.8062, 56.867], [28.148, 56.143], [27.5767, 55.7987], [26.5936, 55.6676], [24.9033, 56.3983], [24.1207, 56.2642], [22.0845, 56.4067], [21.0463, 56.07], [21.0711, 56.8237], [21.7285, 57.571], [22.5546, 57.7241], [23.6479, 56.9711], [24.4033, 57.3251], [24.3226, 57.8706], [25.1109, 58.0635], [25.9912, 57.8382], [26.5328, 57.531], [27.3517, 57.5282]]]
      },
      "properties": {
        "id": "LV",
        "name": "Latvia"
      },
      "id": "LV"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[113.4787, 22.1957], [113.4943, 22.2414], [113.5467, 22.2242], [113.4787, 22.1957]]]
      },
      "properties": {
        "id": "MO",
        "name": "Macau"
      },
      "id": "MO"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[-63.0112, 18.0689], [-63.123, 18.0689], [-63.0631, 18.1154], [-63.0112, 18.0689]]]
      },
      "properties": {
        "id": "MF",
        "name": "Saint Martin"
      },
      "id": "MF"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[7.4387, 43.7507], [7.3779, 43.7316], [7.4143, 43.7711], [7.4387, 43.7507]]]
      },
      "properties": {
        "id": "MC",
        "name": "Monaco"
      },
      "id": "MC"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[28.2124, 45.4503], [28.0997, 45.9728], [28.2443, 46.4513], [28.0717, 46.9786], [27.3366, 47.6396], [26.9807, 48.155], [26.6189, 48.2597], [27.5492, 48.4777], [29.1948, 47.8824], [29.1597, 47.4558], [29.5493, 47.2467], [29.8779, 46.829], [29.838, 46.3505], [29.1464, 46.5267], [28.9475, 46.05], [28.2124, 45.4503]]]
      },
      "properties": {
        "id": "MD",
        "name": "Moldova"
      },
      "id": "MD"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[49.5383, -12.4323], [49.9374, -13.0725], [50.174, -14.04], [50.2352, -14.7322], [50.483, -15.3855], [50.2091, -15.9605], [49.8925, -15.4579], [49.6498, -15.5671], [49.8389, -16.4864], [49.4491, -17.2406], [49.4779, -17.8984], [48.607, -20.4575], [48.3509, -21.3489], [47.9083, -22.4661], [47.5581, -23.8746], [47.1773, -24.7872], [46.7284, -25.1498], [46.1585, -25.2306], [45.5078, -25.5631], [45.1154, -25.5431], [44.813, -25.334], [44.3457, -25.2262], [44.0354, -24.9958], [43.6873, -24.358], [43.7225, -23.5297], [43.398, -22.8864], [43.2665, -22.0493], [43.5018, -21.3563], [43.8557, -21.0767], [44.4046, -19.922], [44.4487, -19.4284], [44.2387, -19.0751], [44.233, -18.7404], [44.0399, -18.2886], [43.9795, -17.3915], [44.4215, -16.7026], [44.4762, -16.2174], [44.9094, -16.1743], [45.1668, -15.983], [45.5983, -15.9928], [45.7, -15.8139], [46.3317, -15.7135], [46.475, -15.5134], [47.8115, -14.5448], [47.9954, -13.9606], [48.7966, -13.2673], [48.8996, -12.4585], [49.2072, -12.0794], [49.5383, -12.4323]]]
      },
      "properties": {
        "id": "MG",
        "name": "Madagascar"
      },
      "id": "MG"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[73.5121, 4.1644], [73.473, 4.1705], [73.5041, 4.2345], [73.5284, 4.2434], [73.5121, 4.1644]]]
      },
      "properties": {
        "id": "MV",
        "name": "Maldives"
      },
      "id": "MV"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[-97.1462, 25.9617], [-97.5071, 25.0144], [-97.6676, 24.3899], [-97.8578, 22.6245], [-97.6376, 21.6036], [-97.1214, 20.6151], [-96.456, 19.8697], [-96.2895, 19.3437], [-95.821, 18.7547], [-95.1818, 18.7004], [-94.798, 18.5145], [-94.5461, 18.1749], [-94.189, 18.1953], [-93.5522, 18.4306], [-92.8849, 18.4688], [-92.7102, 18.6117], [-91.9738, 18.7161], [-91.8031, 18.4705], [-91.2753, 18.6246], [-91.343, 18.9007], [-90.7393, 19.3522], [-90.5071, 19.9119], [-90.4841, 20.5564], [-90.3531, 21.0097], [-89.8198, 21.2746], [-88.8787, 21.414], [-88.1317, 21.6159], [-86.8242, 21.4215], [-86.8648, 20.8849], [-87.4672, 20.1023], [-87.4248, 19.5834], [-87.7619, 18.4461], [-88.1967, 18.7196], [-88.2957, 18.4723], [-88.523, 18.4457], [-88.8064, 17.9654], [-89.1615, 17.8149], [-90.9893, 17.8163], [-90.993, 17.2525], [-91.4096, 17.256], [-90.7107, 16.7083], [-90.4171, 16.3909], [-90.4472, 16.0727], [-91.7365, 16.07], [-92.1871, 15.3207], [-92.0748, 15.0743], [-92.2352, 14.5452], [-92.8089, 15.1387], [-93.916, 16.0535], [-94.3741, 16.2849], [-94.6615, 16.2018], [-94.9004, 16.4176], [-95.4643, 15.9746], [-96.5108, 15.6519], [-97.1847, 15.9093], [-97.7548, 15.967], [-98.5203, 16.3048], [-98.7622, 16.5347], [-99.6906, 16.7198], [-100.0244, 16.9205], [-100.8478, 17.2006], [-101.6002, 17.6516], [-101.8471, 17.9223], [-102.6995, 18.0626], [-103.4415, 18.3254], [-103.9125, 18.8283], [-104.9386, 19.3095], [-105.4821, 19.9763], [-105.6694, 20.3855], [-105.2371, 21.1193], [-105.2086, 21.4908], [-105.6492, 21.9879], [-105.7917, 22.6276], [-106.4023, 23.1958], [-106.9353, 23.8812], [-107.9513, 24.615], [-108.3736, 25.1942], [-109.385, 25.7273], [-109.4256, 26.0327], [-109.1997, 26.3053], [-109.4829, 26.7105], [-109.7548, 26.703], [-109.9441, 27.0794], [-110.4779, 27.3227], [-110.5298, 27.8642], [-111.1215, 27.9672], [-111.6802, 28.4705], [-112.1618, 29.0188], [-112.2235, 29.2696], [-112.7384, 29.9856], [-113.1104, 30.7935], [-113.0467, 31.1792], [-114.1493, 31.5072], [-114.8395, 31.7984], [-114.882, 31.1566], [-114.6333, 30.5067], [-114.6498, 30.2382], [-114.3726, 29.8302], [-113.7556, 29.3677], [-113.4997, 28.9269], [-112.8709, 28.4244], [-112.7339, 27.826], [-112.3291, 27.5233], [-112.009, 26.9671], [-111.5696, 26.7075], [-111.2917, 25.7899], [-111.0345, 25.5271], [-110.6774, 24.7884], [-110.5471, 24.2141], [-110.0229, 24.1746], [-109.421, 23.4803], [-109.458, 23.2149], [-109.9234, 22.886], [-110.0861, 23.0053], [-110.3627, 23.6051], [-111.4193, 24.329], [-112.0725, 24.84], [-112.0557, 25.4881], [-112.3773, 26.2139], [-113.0207, 26.5832], [-113.2058, 26.857], [-113.5986, 26.7212], [-113.841, 26.9666], [-114.4454, 27.2184], [-114.9936, 27.7359], [-114.3007, 27.8731], [-114.0485, 28.4262], [-114.1455, 28.6055], [-114.9936, 29.3845], [-115.6739, 29.7566], [-116.0623, 30.8041], [-116.6622, 31.565], [-117.1283, 32.5335], [-114.7248, 32.7155], [-114.836, 32.5082], [-112.939, 31.916], [-111.0421, 31.3243], [-108.2145, 31.3293], [-108.2118, 31.7794], [-106.4533, 31.77], [-106.2558, 31.5445], [-104.9179, 30.5835], [-104.5039, 29.6775], [-104.1107, 29.3864], [-103.2577, 29.001], [-102.892, 29.2163], [-102.7342, 29.6438], [-102.269, 29.871], [-101.4404, 29.7769], [-100.6587, 29.0685], [-100.2961, 28.3276], [-99.5053, 27.5481], [-99.4435, 27.0368], [-99.1078, 26.4469], [-98.0828, 26.0643], [-97.3582, 25.8707], [-97.1462, 25.9617]]]
      },
      "properties": {
        "id": "MX",
        "name": "Mexico"
      },
      "id": "MX"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[171.1017, 7.1384], [171.2268, 7.0869], [171.2025, 7.0736], [171.0954, 7.1092], [171.1017, 7.1384]]]
      },
      "properties": {
        "id": "MH",
        "name": "Marshall Islands"
      },
      "id": "MH"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[22.3441, 42.3138], [22.8369, 41.9937], [23.0055, 41.7172], [22.9159, 41.3363], [22.7246, 41.1783], [21.9296, 41.1073], [21.5758, 40.8689], [20.9641, 40.8498], [20.4891, 41.2724], [20.5659, 41.8739], [21.0595, 42.1713], [21.5625, 42.2477], [22.3441, 42.3138]]]
      },
      "properties": {
        "id": "MK",
        "name": "North Macedonia"
      },
      "id": "MK"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[4.2276, 19.1426], [4.2346, 16.9964], [4.1824, 16.5818], [3.8769, 15.7552], [3.5041, 15.3562], [1.3002, 15.2724], [0.9601, 14.9869], [0.2175, 14.9115], [-0.2359, 15.0592], [-0.7604, 15.0477], [-1.0496, 14.8195], [-1.7678, 14.4862], [-2.1132, 14.1684], [-2.4572, 14.274], [-3.1985, 13.6729], [-3.3017, 13.2806], [-3.5758, 13.194], [-4.0512, 13.3822], [-4.3286, 13.119], [-4.2272, 12.7937], [-4.4807, 12.6725], [-4.4287, 12.3377], [-4.798, 12.0319], [-5.2881, 11.8277], [-5.2998, 11.2058], [-5.4905, 11.0424], [-5.5236, 10.4259], [-6.0345, 10.1947], [-6.2611, 10.7242], [-6.6932, 10.3496], [-7.105, 10.2035], [-7.6612, 10.4272], [-7.9908, 10.1627], [-8.2316, 10.4378], [-8.4075, 11.3865], [-8.8219, 11.6732], [-9.043, 12.4026], [-9.8207, 12.0426], [-10.2748, 12.2125], [-10.6774, 11.8996], [-10.9333, 12.205], [-11.3053, 12.0155], [-11.3894, 12.4043], [-11.3903, 12.9418], [-11.6349, 13.3698], [-12.0543, 13.633], [-12.0193, 14.2065], [-12.2807, 14.8089], [-11.8728, 14.9953], [-11.7603, 15.4255], [-11.5026, 15.6368], [-10.8955, 15.1502], [-10.6965, 15.4228], [-9.9414, 15.374], [-9.1768, 15.496], [-6.9476, 15.496], [-5.5125, 15.4965], [-5.36, 16.2831], [-5.6285, 16.5685], [-5.9124, 19.0476], [-6.2258, 21.7829], [-6.4251, 23.5234], [-6.594, 24.9945], [-4.8227, 24.9958], [-3.2579, 23.9811], [-1.2931, 22.6964], [1.1457, 21.1024], [1.1657, 20.8174], [1.6855, 20.3784], [2.2195, 20.2479], [2.4063, 20.0637], [3.2035, 19.7898], [3.2559, 19.4108], [3.106, 19.1502], [3.4007, 18.9885], [4.2276, 19.1426]]]
      },
      "properties": {
        "id": "ML",
        "name": "Mali"
      },
      "id": "ML"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[14.5663, 35.8529], [14.4363, 35.8219], [14.3524, 35.8725], [14.4482, 35.9572], [14.5663, 35.8529]]]
      },
      "properties": {
        "id": "MT",
        "name": "Malta"
      },
      "id": "MT"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[101.139, 21.5676], [100.7564, 21.3128], [100.2494, 20.7304], [100.1225, 20.3168], [99.8903, 20.4246], [99.3382, 20.0787], [99.0208, 20.0419], [98.9168, 19.7729], [98.1112, 19.7623], [97.817, 19.46], [97.7539, 18.621], [97.4848, 18.4941], [97.7929, 17.6813], [98.4389, 16.9755], [98.6892, 16.3052], [98.5653, 15.4037], [98.1911, 15.204], [98.2462, 14.8146], [99.1366, 13.7165], [99.2195, 12.7399], [99.4052, 12.5477], [99.6147, 11.7811], [99.1903, 11.1051], [98.7571, 10.6612], [98.7026, 10.1902], [98.465, 10.6759], [98.6753, 10.987], [98.7416, 11.5916], [98.576, 13.1621], [98.2453, 13.7334], [97.8121, 14.8591], [97.7105, 15.8755], [97.5843, 16.0194], [97.6194, 16.5375], [97.3758, 16.5228], [97.1782, 17.0621], [96.6225, 16.564], [95.7635, 16.169], [95.3896, 15.7229], [94.9427, 15.8183], [94.5876, 16.2888], [94.2143, 16.1268], [94.5889, 17.5695], [94.4309, 18.2016], [94.07, 18.8936], [93.7055, 19.0267], [93.9981, 19.4409], [93.3624, 20.0584], [93.0021, 20.0748], [92.7357, 20.5627], [92.3243, 20.7917], [92.1794, 21.2932], [92.5936, 21.4672], [92.575, 21.9782], [92.9644, 22.0039], [93.1618, 22.3604], [93.0788, 22.7181], [93.366, 23.1323], [93.4148, 23.6823], [93.3075, 24.0219], [94.1278, 23.8763], [94.2929, 24.3219], [94.7074, 25.0486], [94.6227, 25.4099], [95.1323, 26.0412], [95.1287, 26.5973], [96.0614, 27.217], [96.666, 27.339], [97.3353, 27.9379], [97.3224, 28.2179], [97.5377, 28.5101], [98.0988, 28.1421], [98.299, 27.55], [98.651, 27.5726], [98.7318, 26.5835], [98.6545, 25.9178], [98.0109, 25.2922], [97.8196, 25.2519], [97.5315, 24.4916], [97.6859, 23.898], [98.2125, 24.1106], [98.7642, 24.116], [98.8636, 23.1913], [99.3407, 23.0959], [99.3377, 22.498], [99.193, 22.126], [99.9179, 22.0279], [100.2148, 21.4628], [100.8349, 21.6551], [101.139, 21.5676]]]
      },
      "properties": {
        "id": "MM",
        "name": "Myanmar"
      },
      "id": "MM"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[19.1943, 43.5331], [19.5516, 43.2123], [20.3444, 42.8278], [20.0638, 42.5473], [19.6546, 42.6285], [19.2808, 42.1727], [19.3426, 41.869], [18.5173, 42.4328], [18.4361, 42.5598], [18.4437, 42.9685], [18.9404, 43.4968], [19.1943, 43.5331]]]
      },
      "properties": {
        "id": "ME",
        "name": "Montenegro"
      },
      "id": "ME"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[116.6832, 49.8237], [115.5575, 47.9449], [115.8984, 47.6871], [116.7604, 47.8699], [117.3508, 47.652], [117.7685, 47.9881], [118.4983, 47.984], [119.711, 47.1499], [119.8979, 46.8579], [119.7065, 46.6062], [118.3087, 46.7172], [117.3334, 46.3621], [116.5625, 46.2897], [116.2406, 45.7961], [115.6809, 45.4583], [114.517, 45.3647], [114.0305, 44.9425], [113.5871, 44.7459], [111.8981, 45.0641], [111.4022, 44.3672], [111.9331, 43.7116], [111.0073, 43.3414], [110.4005, 42.7737], [109.4433, 42.4559], [108.1712, 42.4474], [106.7702, 42.2889], [105.1971, 41.7381], [104.4984, 41.6586], [104.4984, 41.877], [103.7109, 41.7513], [103.0726, 42.0061], [101.973, 42.2157], [101.7138, 42.4656], [99.984, 42.6774], [99.4677, 42.5682], [97.2057, 42.7897], [96.3854, 42.7204], [95.9127, 43.2065], [95.3502, 44.278], [94.7118, 44.3508], [93.6563, 44.9008], [92.7876, 45.0357], [91.5842, 45.0765], [90.8771, 45.1959], [90.6618, 45.5253], [91.0018, 46.0358], [91.0338, 46.529], [90.8699, 46.9546], [90.4962, 47.2854], [90.3133, 47.676], [89.561, 48.004], [89.0478, 48.0027], [88.5169, 48.3844], [87.9799, 48.5549], [87.8141, 49.1624], [88.1924, 49.4517], [88.8316, 49.4484], [89.6541, 49.7174], [89.6439, 49.903], [91.8044, 50.6936], [94.2512, 50.5564], [94.6147, 50.0237], [95.5229, 49.9112], [95.8518, 50.0128], [96.986, 49.8828], [97.2088, 49.7308], [98.1032, 50.0779], [98.2795, 50.5333], [97.8254, 50.9852], [97.9469, 51.3483], [98.8486, 52.07], [100.4688, 51.726], [101.3813, 51.4526], [102.1115, 51.3534], [102.2882, 50.585], [102.6833, 50.387], [103.6329, 50.1387], [105.3835, 50.4736], [106.218, 50.3045], [106.7112, 50.3125], [107.2332, 49.9893], [107.948, 49.9247], [108.0339, 49.594], [108.6136, 49.3229], [109.2365, 49.3348], [110.1997, 49.1704], [110.8278, 49.1661], [111.3365, 49.3559], [113.0556, 49.6162], [113.1641, 49.7971], [114.2969, 50.2743], [114.743, 50.2337], [115.2743, 49.9489], [116.1345, 50.0109], [116.6832, 49.8237]]]
      },
      "properties": {
        "id": "MN",
        "name": "Mongolia"
      },
      "id": "MN"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[145.7519, 15.1334], [145.6844, 15.125], [145.7132, 15.2155], [145.7821, 15.1746], [145.7519, 15.1334]]]
      },
      "properties": {
        "id": "MP",
        "name": "Northern Mariana Islands"
      },
      "id": "MP"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[32.8862, -26.8495], [32.1129, -26.8393], [31.9482, -25.9577], [31.9859, -24.4605], [31.7995, -23.8922], [31.5457, -23.4821], [31.2877, -22.4021], [32.3712, -21.335], [32.4778, -20.7131], [33.0069, -19.8737], [32.7166, -19.0019], [32.9932, -18.3596], [32.9478, -16.7123], [32.2434, -16.4486], [31.9398, -16.4287], [31.2361, -16.0238], [30.4377, -15.9954], [30.3959, -15.643], [30.2316, -14.9905], [31.7289, -14.4959], [33.2017, -14.0135], [33.6363, -14.5684], [34.3324, -14.4085], [34.5055, -14.5982], [34.541, -15.2972], [34.248, -15.8875], [34.3955, -16.1992], [35.2903, -17.0968], [35.1673, -16.56], [35.3586, -16.1606], [35.7555, -16.0585], [35.8474, -14.6709], [35.2476, -13.8968], [34.5636, -13.36], [34.3607, -12.2104], [34.6596, -11.5885], [34.9595, -11.5783], [35.6312, -11.5818], [35.7853, -11.4531], [36.5185, -11.7164], [36.9788, -11.5667], [37.5417, -11.675], [37.9203, -11.2946], [38.4916, -11.4132], [38.7947, -11.229], [39.3217, -11.1223], [39.9889, -10.821], [40.4634, -10.4641], [40.5446, -11.0657], [40.403, -11.3319], [40.5806, -12.6356], [40.5451, -13.463], [40.6401, -14.3898], [40.8349, -14.7916], [40.5588, -15.4734], [40.1088, -15.9794], [39.8447, -16.4358], [39.0842, -16.973], [38.145, -17.2428], [37.2443, -17.7399], [36.5403, -18.5181], [35.6512, -19.164], [34.9481, -19.813], [34.7558, -19.8218], [34.6982, -20.4042], [34.9822, -20.8064], [35.2677, -21.651], [35.3156, -22.3969], [35.5753, -22.9632], [35.3702, -23.7982], [35.438, -24.171], [35.1557, -24.5412], [34.6071, -24.8213], [33.3473, -25.2608], [32.7921, -25.6443], [32.5905, -26.0039], [32.9337, -26.2524], [32.8862, -26.8495]]]
      },
      "properties": {
        "id": "MZ",
        "name": "Mozambique"
      },
      "id": "MZ"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[-12.2807, 14.8089], [-12.8584, 15.2426], [-13.258, 15.7002], [-13.4096, 16.0593], [-13.8685, 16.1481], [-14.3, 16.5804], [-15.1128, 16.6449], [-15.6208, 16.5068], [-16.1683, 16.5471], [-16.4411, 16.2045], [-16.5352, 15.8383], [-16.5357, 16.2866], [-16.0789, 17.5459], [-16.0849, 18.5211], [-16.2131, 19.0032], [-16.5146, 19.3619], [-16.2835, 19.7871], [-16.2105, 20.2279], [-16.4298, 20.6523], [-17.0481, 20.8063], [-16.9647, 21.3292], [-15.0018, 21.3314], [-13.0163, 21.3341], [-13.0944, 22.4957], [-13.0316, 23.0001], [-12.6203, 23.2713], [-12.0234, 23.4675], [-12.0164, 25.9954], [-10.0035, 25.9954], [-8.6821, 25.9954], [-8.6834, 27.2858], [-6.9908, 26.2906], [-4.8227, 24.9958], [-6.594, 24.9945], [-6.4251, 23.5234], [-6.2258, 21.7829], [-5.9124, 19.0476], [-5.6285, 16.5685], [-5.36, 16.2831], [-5.5125, 15.4965], [-6.9476, 15.496], [-9.1768, 15.496], [-9.9414, 15.374], [-10.6965, 15.4228], [-10.8955, 15.1502], [-11.5026, 15.6368], [-11.7603, 15.4255], [-11.8728, 14.9953], [-12.2807, 14.8089]]]
      },
      "properties": {
        "id": "MR",
        "name": "Mauritania"
      },
      "id": "MR"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[-62.1484, 16.7403], [-62.1542, 16.6812], [-62.2216, 16.6994], [-62.223, 16.7518], [-62.1484, 16.7403]]]
      },
      "properties": {
        "id": "MS",
        "name": "Montserrat"
      },
      "id": "MS"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[-60.8263, 14.4946], [-61.0638, 14.4671], [-61.2198, 14.8044], [-60.9187, 14.7352], [-60.8263, 14.4946]]]
      },
      "properties": {
        "id": "MQ",
        "name": "Martinique"
      },
      "id": "MQ"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[57.6513, -20.4849], [57.3859, -20.2284], [57.5758, -19.9972], [57.792, -20.2124], [57.6513, -20.4849]]]
      },
      "properties": {
        "id": "MU",
        "name": "Mauritius"
      },
      "id": "MU"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[34.9595, -11.5783], [34.6596, -11.5885], [34.3607, -12.2104], [34.5636, -13.36], [35.2476, -13.8968], [35.8474, -14.6709], [35.7555, -16.0585], [35.3586, -16.1606], [35.1673, -16.56], [35.2903, -17.0968], [34.3955, -16.1992], [34.248, -15.8875], [34.541, -15.2972], [34.5055, -14.5982], [34.3324, -14.4085], [33.6363, -14.5684], [33.2017, -14.0135], [32.9922, -14.0224], [32.6722, -13.6104], [32.9679, -13.2251], [33.0216, -12.6303], [33.3979, -12.49], [33.2524, -12.1127], [33.2262, -11.5347], [33.3798, -11.1579], [33.2613, -10.8934], [33.659, -10.5907], [33.351, -9.8623], [32.92, -9.4072], [34.3208, -9.7316], [34.5241, -10.0299], [34.6617, -10.71], [34.608, -11.0806], [34.9595, -11.5783]]]
      },
      "properties": {
        "id": "MW",
        "name": "Malawi"
      },
      "id": "MW"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [[[[117.5745, 4.1705], [117.1005, 4.337], [115.8962, 4.3486], [115.5686, 3.9389], [115.4545, 3.0342], [115.0861, 2.8411], [115.1509, 2.4931], [114.7865, 2.2503], [114.8303, 1.98], [114.5458, 1.4673], [113.9022, 1.4344], [113.6222, 1.236], [112.4761, 1.5591], [112.1857, 1.4393], [112.0783, 1.1432], [111.7698, 0.9994], [110.9378, 1.0172], [110.5056, 0.8618], [109.6542, 1.615], [109.6289, 2.0274], [109.9844, 1.7176], [110.3493, 1.7198], [110.9402, 1.5175], [111.154, 1.739], [111.2419, 2.4358], [111.7276, 2.8539], [112.7375, 3.0706], [113.0446, 3.2051], [113.924, 4.2434], [114.0638, 4.5928], [114.6084, 4.0241], [114.8402, 4.3934], [114.7465, 4.7179], [115.0267, 4.8999], [115.1399, 4.8999], [115.5197, 5.0491], [115.419, 5.413], [115.7968, 5.536], [116.1387, 6.1294], [116.4945, 6.5219], [117.294, 6.6768], [117.6455, 6.4734], [117.6172, 5.9408], [118.0038, 6.0532], [118.1156, 5.8627], [118.5947, 5.5919], [119.2236, 5.4126], [119.1322, 5.1005], [118.1853, 4.8284], [118.4978, 4.3623], [117.5745, 4.1705]]], [[[102.1009, 6.2422], [102.9825, 5.5249], [103.4157, 4.8502], [103.4685, 4.3934], [103.362, 3.7693], [103.4397, 2.933], [103.8122, 2.5806], [104.2884, 1.4806], [103.6945, 1.4495], [102.7273, 1.8557], [101.2952, 2.8851], [101.2996, 3.2535], [100.7156, 3.9664], [100.6144, 4.6522], [100.3524, 5.5875], [100.3431, 5.9843], [100.1188, 6.442], [100.3452, 6.5498], [101.0533, 6.2426], [101.2571, 5.7895], [101.5563, 5.908], [101.8737, 5.8254], [102.1009, 6.2422]]]]
      },
      "properties": {
        "id": "MY",
        "name": "Malaysia"
      },
      "id": "MY"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[45.1802, -12.9765], [45.0692, -12.8957], [45.135, -12.7093], [45.2232, -12.7519], [45.1802, -12.9765]]]
      },
      "properties": {
        "id": "YT",
        "name": "Mayotte"
      },
      "id": "YT"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[23.3807, -17.6406], [24.2751, -17.4811], [24.9325, -17.5433], [25.2588, -17.7936], [24.3591, -17.9782], [23.5804, -18.4529], [23.2985, -18.0276], [20.9739, -18.3188], [20.977, -20.1525], [20.9708, -21.9999], [19.9774, -21.9999], [19.9804, -24.7769], [19.9804, -26.5312], [19.9804, -28.4516], [19.6715, -28.5039], [19.2458, -28.9016], [18.1027, -28.8719], [17.448, -28.6984], [17.3855, -28.3534], [17.0561, -28.0311], [16.7555, -28.4523], [16.4475, -28.6175], [15.7191, -27.966], [15.3413, -27.3866], [14.9676, -26.3182], [14.8451, -25.7255], [14.8371, -25.0331], [14.5014, -24.2021], [14.474, -23.281], [14.5259, -22.7027], [14.3217, -22.19], [13.9733, -21.7677], [13.4504, -20.9169], [13.1685, -20.1845], [12.4583, -18.9269], [12.0956, -18.5411], [11.776, -18.0018], [11.7431, -17.2495], [12.548, -17.2125], [13.1011, -16.9675], [13.4038, -17.0079], [13.9382, -17.3889], [16.9137, -17.3915], [18.3962, -17.3995], [18.8259, -17.7662], [19.6395, -17.8687], [20.3928, -17.8874], [20.6249, -17.9965], [21.4169, -18.0006], [23.3807, -17.6406]]]
      },
      "properties": {
        "id": "NA",
        "name": "Namibia"
      },
      "id": "NA"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[164.2023, -20.2461], [164.4358, -20.282], [165.1916, -20.7691], [165.6627, -21.2671], [166.9424, -22.09], [166.7742, -22.3759], [166.0959, -21.9564], [165.2418, -21.5254], [164.4549, -20.829], [164.1699, -20.4801], [164.2023, -20.2461]]]
      },
      "properties": {
        "id": "NC",
        "name": "New Caledonia"
      },
      "id": "NC"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[14.9791, 22.996], [15.1722, 21.9222], [15.182, 21.5232], [15.6073, 20.9546], [15.5873, 20.7335], [15.9491, 20.3034], [15.735, 19.9038], [15.4745, 16.9085], [14.3678, 15.75], [13.4481, 14.3805], [13.6062, 13.7045], [13.3239, 13.6707], [12.6549, 13.3267], [12.4631, 13.0937], [11.4121, 13.3538], [10.9587, 13.3715], [10.1846, 13.2699], [9.616, 12.8105], [8.7504, 12.9081], [8.0952, 13.2912], [7.7885, 13.3379], [7.0566, 13], [6.8043, 13.1074], [6.3862, 13.6038], [5.4918, 13.8727], [4.8233, 13.7599], [4.1477, 13.4577], [3.948, 12.775], [3.6467, 12.53], [3.5955, 11.6964], [2.8782, 12.3679], [2.366, 12.2218], [2.3889, 11.897], [2.0912, 12.2778], [2.0739, 12.7142], [1.5651, 12.6356], [0.9872, 13.0418], [0.978, 13.5518], [0.6184, 13.7036], [0.1638, 14.4973], [0.2175, 14.9115], [0.9601, 14.9869], [1.3002, 15.2724], [3.5041, 15.3562], [3.8769, 15.7552], [4.1824, 16.5818], [4.2346, 16.9964], [4.2276, 19.1426], [5.8367, 19.4791], [7.4818, 20.8729], [9.3784, 21.9915], [11.9677, 23.5181], [13.4814, 23.1802], [14.2307, 22.6183], [14.9791, 22.996]]]
      },
      "properties": {
        "id": "NE",
        "name": "Niger"
      },
      "id": "NE"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[167.9395, -29.0175], [167.9788, -29.0756], [167.9203, -29.0827], [167.9395, -29.0175]]]
      },
      "properties": {
        "id": "NF",
        "name": "Norfolk Island"
      },
      "id": "NF"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[13.6062, 13.7045], [14.0639, 13.0786], [14.1975, 12.3839], [14.6271, 12.1086], [14.5596, 11.4922], [13.8921, 11.1401], [13.5351, 10.6052], [13.2697, 10.0362], [13.1756, 9.5394], [12.9296, 9.4262], [12.8067, 8.8865], [12.4036, 8.5957], [12.0161, 7.5898], [11.7676, 7.272], [11.5518, 6.6972], [11.1531, 6.4379], [11.0325, 6.6981], [10.6064, 7.063], [10.1438, 6.9964], [9.0602, 6.0092], [8.801, 5.1973], [8.5561, 4.7552], [8.2932, 4.5576], [7.1546, 4.5145], [6.7568, 4.3437], [6.0764, 4.2904], [5.5877, 4.6473], [5.2326, 5.4836], [4.861, 6.0264], [4.4313, 6.3487], [4.1259, 6.4114], [2.7064, 6.3692], [2.7748, 6.7118], [2.6859, 7.874], [2.7748, 9.0485], [3.0451, 9.084], [3.3252, 9.7783], [3.5574, 9.9074], [3.5764, 10.2683], [3.8344, 10.6075], [3.7163, 11.0798], [3.4878, 11.3953], [3.5955, 11.6964], [3.6467, 12.53], [3.948, 12.775], [4.1477, 13.4577], [4.8233, 13.7599], [5.4918, 13.8727], [6.3862, 13.6038], [6.8043, 13.1074], [7.0566, 13], [7.7885, 13.3379], [8.0952, 13.2912], [8.7504, 12.9081], [9.616, 12.8105], [10.1846, 13.2699], [10.9587, 13.3715], [11.4121, 13.3538], [12.4631, 13.0937], [12.6549, 13.3267], [13.3239, 13.6707], [13.6062, 13.7045]]]
      },
      "properties": {
        "id": "NG",
        "name": "Nigeria"
      },
      "id": "NG"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[-83.1577, 14.9931], [-83.2992, 14.749], [-83.1879, 14.3402], [-83.4124, 13.9965], [-83.5674, 13.3205], [-83.511, 12.4119], [-83.7694, 11.9316], [-83.6517, 11.6421], [-83.8679, 11.2999], [-83.642, 10.9173], [-83.8113, 10.7433], [-84.1684, 10.7806], [-84.3484, 10.9799], [-84.9093, 10.9452], [-85.6215, 11.1846], [-85.7444, 11.062], [-86.4689, 11.7384], [-86.7556, 12.1566], [-87.6676, 12.9037], [-87.3374, 12.9791], [-87.0593, 12.9916], [-86.7108, 13.3134], [-86.7336, 13.7635], [-86.3317, 13.7701], [-86.1512, 13.9948], [-85.7868, 13.8443], [-85.1796, 14.3433], [-84.9851, 14.7526], [-84.646, 14.6611], [-83.8674, 14.7947], [-83.4152, 15.0082], [-83.1577, 14.9931]]]
      },
      "properties": {
        "id": "NI",
        "name": "Nicaragua"
      },
      "id": "NI"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[-169.8033, -19.0831], [-169.9039, -19.1377], [-169.9483, -19.0729], [-169.834, -18.966], [-169.8033, -19.0831]]]
      },
      "properties": {
        "id": "NU",
        "name": "Niue"
      },
      "id": "NU"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[30.8695, 69.7833], [28.9657, 69.0219], [29.1414, 69.6715], [27.8896, 70.0617], [26.5256, 69.915], [26.0116, 69.6527], [25.7484, 68.9901], [24.9413, 68.5933], [23.8539, 68.8059], [22.4108, 68.7198], [21.622, 69.2707], [20.6223, 69.0369], [19.9698, 68.3565], [18.3784, 68.5625], [17.9168, 67.965], [17.3246, 68.1039], [16.1274, 67.4259], [16.4035, 67.055], [15.423, 66.4899], [14.5432, 66.1292], [14.4798, 65.3014], [13.6501, 64.5816], [14.0776, 64.464], [13.9604, 64.0141], [12.6624, 63.9404], [11.9997, 63.2917], [12.2182, 63.0007], [12.3034, 62.2856], [12.1554, 61.7207], [12.8809, 61.3523], [12.294, 61.0027], [12.5887, 60.4507], [12.4862, 60.1067], [11.6805, 59.5923], [11.7982, 59.29], [11.3885, 59.0365], [10.8345, 59.1839], [9.6182, 58.9459], [8.1663, 58.1452], [7.005, 58.0242], [5.7066, 58.5236], [5.8452, 59.3535], [5.1314, 59.2265], [5.2441, 60.5695], [5.0492, 60.7075], [4.9276, 61.7107], [5.5336, 62.3108], [6.3529, 62.6112], [7.2838, 62.6023], [7.0086, 62.9576], [8.1005, 63.091], [8.3979, 63.5351], [9.6968, 63.6246], [9.7079, 63.8649], [11.3498, 64.9059], [12.1596, 65.1789], [12.2727, 65.5682], [12.9763, 66.0191], [13.1046, 66.5394], [14.7549, 67.4991], [14.7988, 67.8094], [16.0644, 68.2], [16.6517, 68.6257], [18.1014, 69.1563], [18.2932, 69.4751], [20.0688, 69.8835], [21.163, 69.8895], [21.4005, 70.1744], [22.6846, 70.3749], [23.0464, 70.1018], [24.4199, 70.702], [24.6582, 71.0009], [25.7683, 70.8531], [27.5971, 71.0913], [29.1024, 70.8607], [30.9442, 70.2746], [29.6014, 69.9767], [29.7922, 69.7279], [30.8695, 69.7833]]]
      },
      "properties": {
        "id": "NO",
        "name": "Norway"
      },
      "id": "NO"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[88.1098, 27.8704], [87.9842, 27.134], [88.1614, 26.7248], [88.0549, 26.43], [87.2873, 26.3603], [87.0166, 26.5556], [86.7014, 26.4348], [86.3662, 26.5742], [85.293, 26.7412], [84.6852, 27.0413], [84.6103, 27.2987], [84.0909, 27.4913], [83.2897, 27.371], [82.7334, 27.5189], [81.9877, 27.9139], [81.8529, 27.8669], [80.5867, 28.6495], [80.0705, 28.8301], [80.4017, 29.7304], [81.0103, 30.1645], [81.4169, 30.3375], [82.0432, 30.327], [82.1591, 30.1151], [82.8542, 29.6833], [83.1556, 29.6127], [83.5834, 29.1835], [84.1016, 29.2199], [84.2285, 28.9117], [84.7141, 28.5957], [85.159, 28.5922], [85.1225, 28.316], [85.6782, 28.2775], [86.4089, 27.9286], [86.5544, 28.0852], [87.1413, 27.8384], [88.1098, 27.8704]]]
      },
      "properties": {
        "id": "NP",
        "name": "Nepal"
      },
      "id": "NP"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[166.9584, -0.5165], [166.9162, -0.5466], [166.9136, -0.4992], [166.9584, -0.5165]]]
      },
      "properties": {
        "id": "NR",
        "name": "Nauru"
      },
      "id": "NR"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [[[[21.6082, 78.5957], [23.1166, 77.9916], [24.2382, 77.8986], [23.8414, 77.4978], [22.057, 77.5011], [21.6082, 77.9161], [20.2282, 78.4778], [21.6082, 78.5957]]], [[[16.7866, 79.9068], [18.5813, 79.5716], [19.0896, 79.157], [20.4581, 79.1293], [21.3889, 78.7404], [19.7687, 78.6228], [18.4393, 78.0251], [16.7006, 76.5794], [14.3656, 77.2345], [14.921, 77.6888], [13.6807, 78.028], [11.7738, 78.7165], [10.8661, 79.7965], [12.7534, 79.7758], [13.3837, 79.4808], [15.8163, 79.6819], [16.7866, 79.9068]]], [[[20.898, 80.2499], [22.4508, 80.4021], [26.8608, 80.16], [27.1986, 79.9065], [25.6409, 79.4029], [23.9475, 79.1943], [20.8611, 79.3978], [18.7251, 79.7607], [18.3438, 80.0595], [20.898, 80.2499]]]]
      },
      "properties": {
        "id": "SJ",
        "name": "Svalbard and Jan Mayen"
      },
      "id": "SJ"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [[[[173.2691, -34.935], [173.8441, -35.0265], [174.3203, -35.2466], [174.5437, -35.5822], [174.3909, -35.7739], [174.802, -36.3093], [174.7225, -36.841], [175.2996, -36.9934], [175.4607, -36.4757], [175.8762, -36.9579], [176.1084, -37.6449], [177.3357, -37.9908], [178.0092, -37.5548], [178.5361, -37.692], [178.2679, -38.5509], [177.9762, -38.7222], [177.9656, -39.1427], [177.4076, -39.081], [176.954, -39.3677], [177.1098, -39.6731], [176.8421, -40.1578], [175.9828, -41.2134], [175.3099, -41.6106], [174.6356, -41.2893], [175.1625, -40.6217], [175.2543, -40.2893], [175.0093, -39.9523], [173.9342, -39.5093], [173.8441, -39.1395], [174.5973, -38.7849], [174.9281, -37.8043], [174.7292, -37.4487], [174.7821, -36.9435], [174.4757, -36.9418], [174.4469, -36.4509], [173.9454, -36.1761], [173.1166, -35.2053], [173.2691, -34.935]]], [[[173.1152, -41.2791], [173.738, -40.9887], [174.3026, -41.0195], [174.0922, -41.5051], [174.283, -41.7407], [173.5449, -42.518], [173.2213, -42.9765], [172.7184, -43.2589], [172.9207, -43.8914], [172.3855, -43.8297], [171.4427, -44.1359], [171.1133, -45.0393], [170.7005, -45.6844], [169.6865, -46.5517], [168.382, -46.6053], [168.1889, -46.3622], [167.6819, -46.1929], [166.7317, -46.1978], [166.7339, -45.5436], [167.1947, -44.9634], [167.7871, -44.595], [168.3665, -44.0818], [168.8063, -43.9921], [169.6613, -43.5913], [170.3027, -43.1075], [170.7417, -42.9272], [171.2571, -42.4652], [171.4862, -41.7948], [172.0108, -41.4446], [172.1395, -40.9471], [172.6407, -40.5182], [172.9886, -40.8481], [173.1152, -41.2791]]]]
      },
      "properties": {
        "id": "NZ",
        "name": "New Zealand"
      },
      "id": "NZ"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[56.388, 24.9793], [56.6407, 24.4702], [57.2199, 23.9229], [58.5782, 23.6437], [59.7998, 22.2201], [59.3713, 21.4988], [58.8956, 21.1126], [58.4743, 20.4068], [57.8617, 20.2439], [57.7153, 19.6069], [57.8116, 19.017], [57.1764, 18.9024], [56.6552, 18.5872], [56.5509, 18.1661], [56.2704, 17.9507], [55.479, 17.8433], [55.0643, 17.039], [54.0683, 17.0057], [53.6098, 16.7598], [53.0854, 16.6484], [52.7291, 17.3004], [51.9775, 18.9961], [53.6669, 19.559], [54.9773, 19.9958], [55.6409, 22.0017], [55.186, 22.7039], [55.1997, 23.0347], [55.7608, 24.2425], [55.7959, 24.8679], [56.064, 24.7387], [56.388, 24.9793]]]
      },
      "properties": {
        "id": "OM",
        "name": "Oman"
      },
      "id": "OM"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[77.7991, 35.496], [77.0485, 35.1099], [76.5944, 34.7356], [75.7093, 34.5031], [74.3003, 34.7654], [73.9612, 34.6536], [74.1499, 33.507], [73.9941, 33.2424], [74.6578, 32.5189], [75.3333, 32.2792], [74.5099, 31.7127], [74.6329, 31.0345], [73.8991, 30.4352], [73.809, 30.0934], [73.3816, 29.9345], [72.903, 29.029], [72.3419, 28.752], [71.8701, 27.9624], [70.7373, 27.7293], [70.4035, 28.0249], [70.1446, 27.8492], [69.5681, 27.1744], [69.47, 26.8047], [70.1566, 26.4713], [70.0776, 26.0717], [70.2645, 25.7064], [70.6521, 25.4228], [71.048, 24.6877], [71.0439, 24.4001], [70.5468, 24.4183], [69.7163, 24.1728], [69.5592, 24.2731], [68.7282, 24.2656], [68.7242, 23.9646], [68.1649, 23.8572], [67.6687, 23.811], [67.3095, 24.175], [67.1715, 24.7561], [66.7032, 24.8609], [66.6988, 25.2261], [66.4284, 25.5755], [65.6796, 25.3553], [64.7768, 25.3074], [64.6591, 25.184], [63.7207, 25.3859], [63.4912, 25.2106], [62.5723, 25.2545], [62.3153, 25.1347], [61.5878, 25.2022], [61.6686, 25.769], [61.8697, 26.2422], [62.4391, 26.5609], [63.168, 26.6657], [63.1667, 27.2526], [62.7632, 27.2503], [62.7397, 28.0023], [62.3531, 28.4146], [61.8901, 28.5465], [61.6229, 28.7915], [61.3183, 29.3726], [60.8433, 29.8586], [62.4765, 29.4085], [63.5675, 29.4982], [64.0988, 29.3921], [64.521, 29.5643], [65.0954, 29.5594], [66.1771, 29.8355], [66.3973, 30.9124], [66.9242, 31.3057], [67.2874, 31.2178], [67.5781, 31.5064], [68.2137, 31.8073], [68.869, 31.6342], [69.2791, 31.9369], [69.2414, 32.4336], [69.5015, 33.02], [69.9201, 33.1123], [70.2841, 33.3689], [69.8681, 33.8976], [71.0516, 34.0498], [70.9654, 34.5306], [71.6207, 35.1831], [71.4275, 35.8338], [71.1852, 36.042], [71.6207, 36.4367], [72.623, 36.8295], [73.7691, 36.8885], [74.0016, 36.8233], [74.5414, 37.0221], [75.3466, 36.9134], [75.8402, 36.6497], [75.945, 36.0176], [76.2518, 35.8108], [77.4467, 35.4756], [77.7991, 35.496]]]
      },
      "properties": {
        "id": "PK",
        "name": "Pakistan"
      },
      "id": "PK"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[-77.3742, 8.6583], [-77.2124, 8.0338], [-77.3509, 7.7057], [-77.744, 7.5371], [-77.9011, 7.2295], [-78.1701, 7.5437], [-78.4216, 8.0608], [-78.1139, 8.3795], [-79.0865, 8.997], [-79.4416, 9.0059], [-79.7506, 8.5953], [-80.3687, 8.289], [-80.4582, 8.0768], [-80.0753, 7.6671], [-80.4388, 7.2752], [-80.8456, 7.2201], [-81.0352, 7.711], [-81.5041, 7.7213], [-81.7277, 8.1377], [-82.6796, 8.3219], [-82.8794, 8.0706], [-82.9976, 8.3676], [-82.9171, 8.7405], [-82.9399, 9.4493], [-82.5635, 9.5767], [-82.2441, 9.0316], [-81.3548, 8.7804], [-80.8388, 8.8874], [-80.1272, 9.2101], [-79.5774, 9.598], [-78.5044, 9.4063], [-78.0829, 9.2363], [-77.3742, 8.6583]]]
      },
      "properties": {
        "id": "PA",
        "name": "Panama"
      },
      "id": "PA"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[-128.2901, -24.3974], [-128.3205, -24.3997], [-128.3502, -24.3401], [-128.3037, -24.3334], [-128.2901, -24.3974]]]
      },
      "properties": {
        "id": "PN",
        "name": "Pitcairn Islands"
      },
      "id": "PN"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[-69.9658, -4.2358], [-70.7995, -4.1733], [-70.9737, -4.3505], [-71.8449, -4.5044], [-72.6987, -5.0673], [-72.8871, -5.1228], [-72.9799, -5.6351], [-73.2355, -6.0984], [-73.1374, -6.466], [-73.758, -6.9058], [-73.7496, -7.3356], [-74.0022, -7.5562], [-73.5492, -8.3458], [-72.9741, -8.993], [-73.2093, -9.4116], [-72.3791, -9.5102], [-72.1815, -10.0038], [-71.2381, -9.9661], [-70.637, -9.4782], [-70.6424, -11.0101], [-70.2202, -11.0478], [-69.5786, -10.9519], [-68.6852, -12.502], [-68.9786, -12.8802], [-69.0741, -13.6828], [-68.8803, -14.199], [-69.235, -14.5972], [-69.3748, -14.9629], [-69.1727, -15.2368], [-69.4185, -15.6034], [-69.2177, -16.149], [-68.9134, -16.2618], [-69.0208, -16.6422], [-69.6249, -17.2002], [-69.5109, -17.506], [-69.8522, -17.7039], [-69.9263, -18.206], [-70.4184, -18.3455], [-71.337, -17.6828], [-71.5323, -17.2943], [-72.1114, -17.0026], [-72.4676, -16.7079], [-73.8251, -16.1529], [-74.1471, -15.9125], [-75.1043, -15.4118], [-75.5336, -14.8991], [-75.9339, -14.6337], [-76.2891, -14.1334], [-76.1839, -13.5154], [-76.8322, -12.3489], [-77.1527, -12.0603], [-77.2204, -11.6635], [-77.6332, -11.2879], [-77.7362, -10.8365], [-78.1857, -10.089], [-78.7622, -8.6171], [-79.3773, -7.8353], [-79.7621, -7.0666], [-80.1103, -6.6498], [-80.8117, -6.2821], [-81.1805, -5.9427], [-80.8827, -5.7589], [-81.1084, -5.0277], [-81.3366, -4.6695], [-81.2833, -4.3224], [-80.7986, -3.7311], [-80.3247, -3.388], [-80.1794, -3.8776], [-80.5101, -4.0694], [-80.4885, -4.3939], [-80.1396, -4.2961], [-79.6385, -4.4547], [-79.3309, -4.9279], [-79.0763, -4.9905], [-78.4198, -3.7769], [-78.3472, -3.4311], [-77.8607, -2.9819], [-76.679, -2.5628], [-76.0897, -2.1332], [-75.5706, -1.5313], [-75.2632, -0.5555], [-75.2846, -0.1063], [-74.8019, -0.2], [-74.4178, -0.5808], [-74.2465, -0.9706], [-73.6644, -1.249], [-73.4963, -1.6932], [-73.1969, -1.8305], [-73.1545, -2.2783], [-72.8871, -2.4084], [-72.3957, -2.4288], [-71.7525, -2.1527], [-71.397, -2.3342], [-70.9146, -2.2183], [-70.0959, -2.6582], [-70.0741, -2.7501], [-70.7351, -3.7817], [-70.3396, -3.8141], [-69.9658, -4.2358]]]
      },
      "properties": {
        "id": "PE",
        "name": "Peru"
      },
      "id": "PE"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [[[[121.1018, 18.6153], [121.8457, 18.2953], [122.2998, 18.4027], [122.1511, 17.7563], [122.2367, 17.435], [122.519, 17.1247], [122.1351, 16.1849], [121.5953, 15.9333], [121.3925, 15.3242], [121.6956, 14.7375], [121.8004, 14.1138], [122.4907, 14.3224], [122.856, 14.2509], [123.2315, 13.7475], [123.4322, 13.9664], [123.7261, 13.8842], [123.608, 13.5283], [124.1428, 13.036], [124.0598, 12.5673], [123.311, 13.044], [123.1631, 13.4417], [122.5955, 13.9078], [122.4068, 13.4927], [121.7777, 13.9375], [121.2034, 13.6401], [120.6166, 14.1879], [120.922, 14.4933], [120.8883, 14.7157], [120.0821, 14.851], [119.8309, 16.3265], [120.1598, 16.0478], [120.3892, 16.2218], [120.3054, 16.5294], [120.4088, 16.9555], [120.3582, 17.6383], [120.5997, 18.5078], [121.1018, 18.6153]]], [[[120.7045, 13.4794], [121.2029, 13.4324], [121.5225, 13.131], [121.5408, 12.6383], [121.2367, 12.2188], [120.922, 12.5117], [120.7635, 12.9698], [120.5082, 13.2602], [120.7045, 13.4794]]], [[[125.2396, 12.5277], [125.5357, 12.1913], [125.4566, 11.9525], [125.6281, 11.1322], [125.2334, 11.145], [124.8841, 11.7754], [124.3847, 12.2441], [124.2946, 12.5695], [125.2396, 12.5277]]], [[[122.4964, 11.6151], [123.1583, 11.5356], [123.0166, 11.1165], [122.7698, 10.8236], [122.1977, 10.6229], [121.9642, 10.8716], [122.1036, 11.643], [122.4964, 11.6151]]], [[[124.5748, 11.3429], [124.9298, 11.3727], [125.0132, 10.7855], [125.2534, 10.2639], [125.0266, 10.033], [124.7808, 10.168], [124.7869, 10.7815], [124.4456, 10.9235], [124.5748, 11.3429]]], [[[117.3109, 8.4395], [117.3499, 8.7133], [117.8849, 9.2407], [118.1148, 9.3468], [119.0238, 10.3536], [119.2241, 10.4774], [119.2613, 10.845], [119.5268, 10.9532], [119.6843, 10.5516], [119.1916, 10.061], [118.7819, 9.9163], [118.4348, 9.2562], [117.9896, 8.8772], [117.3109, 8.4395]]], [[[123.3705, 9.4498], [123.3859, 9.9669], [123.7113, 10.4739], [123.952, 10.3167], [123.6435, 10.0202], [123.3705, 9.4498]]], [[[123.1307, 9.064], [122.5626, 9.4826], [122.4715, 9.9616], [122.8556, 10.0868], [122.8169, 10.5036], [122.9833, 10.8866], [123.2564, 10.9941], [123.5675, 10.7806], [123.1618, 9.8644], [123.3082, 9.357], [123.1307, 9.064]]], [[[124.5938, 9.7871], [124.3599, 9.63], [123.9356, 9.6238], [123.817, 9.8173], [124.1726, 10.1351], [124.5769, 10.0269], [124.5938, 9.7871]]], [[[126.0058, 9.3211], [126.1932, 9.2766], [126.3196, 8.8447], [126.4356, 7.8327], [126.5816, 7.2476], [126.08, 6.7332], [125.8243, 7.3333], [125.4007, 6.7957], [125.5887, 6.4659], [125.6681, 5.9785], [125.4559, 5.6643], [124.6364, 5.998], [124.0781, 6.4042], [123.9853, 6.9938], [124.2068, 7.3963], [123.9684, 7.6645], [123.493, 7.8078], [123.3909, 7.4075], [122.4977, 7.6729], [122.1759, 7.0044], [122.0472, 7.3635], [122.1319, 7.8104], [122.3371, 8.0284], [122.911, 8.1563], [123.0175, 8.3983], [123.4344, 8.7031], [124.2258, 8.2713], [124.4514, 8.6064], [124.7309, 8.5629], [124.8691, 8.9722], [125.5335, 9.1408], [125.5212, 9.7592], [126.0058, 9.3211]]]]
      },
      "properties": {
        "id": "PH",
        "name": "Philippines"
      },
      "id": "PH"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[134.5957, 7.3822], [134.5064, 7.4372], [134.556, 7.5939], [134.6595, 7.6631], [134.5957, 7.3822]]]
      },
      "properties": {
        "id": "PW",
        "name": "Palau"
      },
      "id": "PW"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [[[[152.9656, -4.7565], [152.6806, -4.4986], [152.5985, -3.9948], [153.1241, -4.2524], [152.9656, -4.7565]]], [[[140.976, -9.1187], [140.9752, -6.9054], [140.9743, -4.8364], [140.9735, -2.6099], [141.1856, -2.6276], [142.2114, -3.0835], [142.9052, -3.3206], [143.5089, -3.4311], [144.0159, -3.7836], [144.4775, -3.8253], [145.0879, -4.349], [145.3347, -4.3854], [145.767, -4.8231], [145.8527, -5.4712], [146.4036, -5.6164], [147.0343, -5.9191], [147.3766, -5.9506], [147.8018, -6.3151], [147.8454, -6.6627], [147.1191, -6.7216], [146.9606, -6.9289], [147.1902, -7.3782], [147.7242, -7.8763], [148.1267, -8.1035], [148.247, -8.5545], [148.583, -9.0516], [149.2476, -9.0712], [149.2032, -9.4067], [149.7611, -9.8058], [149.8743, -10.0132], [150.6671, -10.2572], [150.4825, -10.6368], [150.0168, -10.5773], [149.7541, -10.3531], [147.7685, -10.0699], [146.6966, -9.0255], [146.0334, -8.0764], [144.9738, -7.8021], [144.5099, -7.5673], [143.6137, -8.2002], [143.0948, -8.3112], [143.3659, -8.961], [142.6473, -9.3277], [142.2296, -9.1698], [141.1332, -9.2212], [140.976, -9.1187]]], [[[151.9159, -4.2967], [152.4055, -4.3406], [152.4, -4.7313], [152.0135, -5.0037], [152.1431, -5.3572], [151.8652, -5.5648], [151.515, -5.5524], [151.2292, -5.92], [150.4284, -6.2764], [149.6524, -6.2906], [149.3825, -6.078], [149.1265, -6.1277], [148.401, -5.7651], [148.3447, -5.5449], [148.9989, -5.4846], [149.2454, -5.5728], [150.2988, -5.5356], [150.953, -5.4238], [151.3267, -4.9602], [151.6713, -4.8835], [151.5517, -4.3455], [151.9159, -4.2967]]], [[[155.9574, -6.687], [155.7191, -6.8628], [155.3439, -6.7216], [155.2019, -6.3074], [154.7821, -5.9705], [154.7411, -5.5454], [154.9969, -5.54], [155.467, -6.145], [155.8225, -6.3804], [155.9574, -6.687]]]]
      },
      "properties": {
        "id": "PG",
        "name": "Papua New Guinea"
      },
      "id": "PG"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[19.6045, 54.4591], [22.7663, 54.3567], [23.3699, 54.2005], [23.4845, 53.9397], [23.8871, 53.0275], [23.8445, 52.6642], [23.1969, 52.257], [23.6522, 52.0403], [23.6053, 51.5179], [24.1056, 50.8449], [23.7118, 50.3773], [22.6496, 49.539], [22.5387, 49.0727], [21.6397, 49.412], [20.6161, 49.3916], [19.8019, 49.1923], [19.4416, 49.5976], [18.8321, 49.5108], [18.5622, 49.8792], [17.8746, 49.9722], [17.152, 50.3784], [16.6793, 50.0974], [16.0072, 50.6117], [14.8096, 50.8589], [15.0164, 51.2526], [14.6018, 51.8323], [14.7527, 52.0818], [14.6195, 52.5284], [14.1286, 52.8782], [14.4145, 53.2834], [14.2587, 53.7296], [14.2138, 53.8707], [14.2112, 53.9504], [16.1865, 54.2904], [16.5598, 54.5538], [17.2621, 54.7294], [18.3234, 54.8382], [18.6695, 54.4309], [19.6045, 54.4591]]]
      },
      "properties": {
        "id": "PL",
        "name": "Poland"
      },
      "id": "PL"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[-66.1295, 18.4449], [-65.6288, 18.3813], [-65.9708, 17.9743], [-67.1969, 17.9942], [-67.1586, 18.4993], [-66.1295, 18.4449]]]
      },
      "properties": {
        "id": "PR",
        "name": "Puerto Rico"
      },
      "id": "PR"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[130.5269, 42.5353], [130.6871, 42.3027], [130.4576, 42.3018], [129.7563, 41.7123], [129.7088, 40.8573], [128.3043, 40.0362], [127.5684, 39.7818], [127.3944, 39.2079], [127.7863, 39.084], [128.3744, 38.6233], [128.0389, 38.3085], [127.1697, 38.3045], [126.6339, 37.7817], [125.942, 37.8735], [125.4492, 37.7302], [125.193, 38.0378], [124.6909, 38.1292], [125.0674, 38.5567], [125.4097, 39.2882], [125.3608, 39.5266], [124.5573, 39.7907], [124.3621, 40.0042], [124.8895, 40.4596], [125.9889, 40.9049], [126.9033, 41.7811], [127.1795, 41.5312], [128.1112, 41.3891], [128.2909, 41.5627], [128.0451, 41.9875], [128.9236, 42.0381], [129.3138, 42.4137], [129.7199, 42.4749], [129.8983, 42.9982], [130.2405, 42.8917], [130.5269, 42.5353]]]
      },
      "properties": {
        "id": "KP",
        "name": "North Korea"
      },
      "id": "KP"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[-7.4062, 37.1793], [-7.8342, 37.0058], [-8.5978, 37.1211], [-8.8142, 37.431], [-8.9147, 38.5123], [-9.4742, 38.7307], [-9.3748, 39.3384], [-9.1482, 39.5426], [-8.8867, 40.1795], [-8.6557, 41.0296], [-8.7771, 41.9409], [-8.2131, 42.1336], [-7.9208, 41.8837], [-7.4037, 41.8335], [-6.6182, 41.9422], [-6.2125, 41.5321], [-6.9285, 41.0092], [-6.8102, 40.3429], [-7.0368, 39.7139], [-7.4452, 39.5363], [-7.0462, 38.9068], [-7.3431, 38.4572], [-7.1855, 38.0062], [-7.5035, 37.5855], [-7.4062, 37.1793]]]
      },
      "properties": {
        "id": "PT",
        "name": "Portugal"
      },
      "id": "PT"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[-54.6159, -25.576], [-54.7552, -26.533], [-55.1359, -26.9311], [-55.4266, -27.0094], [-55.7147, -27.4151], [-56.0673, -27.3076], [-56.3705, -27.5375], [-57.1118, -27.47], [-58.6186, -27.1322], [-58.1913, -26.6302], [-58.2031, -26.3816], [-57.8907, -26.0065], [-57.5873, -25.405], [-57.8216, -25.1366], [-58.3654, -24.9594], [-59.373, -24.4539], [-59.8924, -24.0933], [-61.033, -23.7557], [-61.7985, -23.1821], [-62.3726, -22.439], [-62.6509, -22.2339], [-62.2768, -21.066], [-62.2763, -20.5626], [-61.917, -20.0553], [-61.757, -19.6452], [-60.0073, -19.2976], [-59.0905, -19.286], [-58.1803, -19.8178], [-58.1599, -20.1645], [-57.8303, -20.9981], [-57.9856, -22.0461], [-57.8203, -22.1424], [-56.9374, -22.2712], [-56.5239, -22.1024], [-55.8492, -22.3076], [-55.6541, -22.8105], [-55.3662, -23.9913], [-54.6253, -23.8123], [-54.2418, -24.0472], [-54.4731, -25.2204], [-54.6159, -25.576]]]
      },
      "properties": {
        "id": "PY",
        "name": "Paraguay"
      },
      "id": "PY"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[-149.3216, -17.6902], [-149.5789, -17.735], [-149.6114, -17.5318], [-149.3792, -17.5224], [-149.3216, -17.6902]]]
      },
      "properties": {
        "id": "PF",
        "name": "French Polynesia"
      },
      "id": "PF"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[51.2682, 24.6074], [50.8043, 24.7893], [50.763, 25.4446], [51.0031, 25.9817], [51.2625, 26.1534], [51.543, 25.9022], [51.4853, 25.5249], [51.602, 25.148], [51.2682, 24.6074]]]
      },
      "properties": {
        "id": "QA",
        "name": "Qatar"
      },
      "id": "QA"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[55.7972, -21.3394], [55.3626, -21.2738], [55.3111, -20.904], [55.6618, -20.9062], [55.7972, -21.3394]]]
      },
      "properties": {
        "id": "RE",
        "name": "Reunion"
      },
      "id": "RE"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[28.2124, 45.4503], [28.7606, 45.2342], [29.2236, 45.4028], [29.7061, 45.2599], [29.5574, 44.8435], [29.0483, 44.7574], [28.6453, 44.2958], [28.5853, 43.7422], [27.0867, 44.1675], [26.2157, 44.0072], [25.4971, 43.6708], [23.2244, 43.8741], [22.705, 44.2376], [21.3845, 44.8701], [21.4919, 45.1223], [20.7742, 45.4845], [20.775, 45.7499], [20.2419, 46.1086], [21.1518, 46.3043], [22.2905, 47.7279], [22.8763, 47.9472], [23.2026, 48.0843], [24.8934, 47.7177], [25.4644, 47.9108], [26.1626, 47.9925], [26.6189, 48.2597], [26.9807, 48.155], [27.3366, 47.6396], [28.0717, 46.9786], [28.2443, 46.4513], [28.0997, 45.9728], [28.2124, 45.4503]]]
      },
      "properties": {
        "id": "RO",
        "name": "Romania"
      },
      "id": "RO"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [[[[62.1679, 80.8347], [61.0511, 80.4186], [59.3044, 80.5216], [59.592, 80.8165], [62.1679, 80.8347]]], [[[54.719, 81.1159], [57.6939, 80.7923], [55.7124, 80.6372], [54.0665, 80.8136], [54.719, 81.1159]]], [[[96.5265, 81.0755], [97.8316, 80.7983], [97.1751, 80.241], [94.565, 80.1261], [93.8725, 80.0102], [91.5238, 80.3584], [93.2626, 80.7912], [93.0651, 80.9885], [95.8008, 81.2804], [96.5265, 81.0755]]], [[[148.5996, 45.3176], [147.9137, 44.9904], [147.7694, 45.1906], [148.5996, 45.3176]]], [[[142.7611, 54.3938], [142.9181, 53.7941], [143.2235, 53.2961], [143.3234, 52.6136], [143.1556, 52.0838], [143.4552, 51.4715], [143.8161, 50.2825], [144.2719, 49.3113], [143.105, 49.1988], [142.5741, 48.0719], [142.5568, 47.7381], [143.0055, 47.2228], [143.2821, 46.5591], [142.5781, 46.7008], [142.2088, 46.089], [141.8301, 46.4508], [142.0387, 47.1402], [141.9642, 47.5872], [142.1817, 48.0133], [141.8661, 48.75], [142.1422, 49.5692], [142.0711, 50.5149], [142.2065, 51.2224], [141.7223, 51.7362], [141.8235, 53.3394], [142.5262, 53.4475], [142.7611, 54.3938]]], [[[21.2358, 55.2641], [22.8312, 54.8384], [22.7663, 54.3567], [19.6045, 54.4591], [19.9747, 54.9212], [20.5202, 54.9949], [20.8998, 55.2868], [20.9579, 55.2789], [21.2358, 55.2641]]], [[[163.6349, 58.6033], [163.761, 59.0149], [164.6156, 58.8856], [163.6349, 58.6033]]], [[[-179.7985, 68.9404], [-178.8738, 68.7542], [-177.4074, 68.245], [-175.3451, 67.678], [-174.4476, 67.1031], [-173.6797, 67.1448], [-172.6405, 66.9249], [-171.7955, 66.9318], [-170.192, 66.2014], [-170.6663, 65.6214], [-172.2115, 65.4252], [-172.2132, 65.0481], [-172.9239, 64.705], [-173.0092, 64.2975], [-173.7298, 64.3645], [-174.318, 64.6375], [-175.3951, 64.8024], [-175.8538, 65.0108], [-176.0933, 65.4709], [-177.0563, 65.6136], [-178.3103, 65.4849], [-178.8794, 65.9364], [-179.7284, 65.8038], [-179.3521, 65.5167], [-180, 65.0672], [-180, 65.312], [-180, 65.5568], [-180, 65.8014], [-180, 66.0462], [-180, 66.2911], [-180, 66.5359], [-180, 66.7807], [-180, 67.0253], [-180, 67.27], [-180, 67.5148], [-180, 67.7597], [-180, 68.0044], [-180, 68.249], [-180, 68.4938], [-180, 68.7386], [-180, 68.9835], [-179.7985, 68.9404]]], [[[50.265, 69.1856], [49.6262, 68.8596], [48.667, 68.7331], [48.279, 69.0403], [48.6315, 69.436], [49.2249, 69.5112], [50.265, 69.1856]]], [[[169.201, 69.5805], [167.789, 69.8369], [168.3581, 70.0157], [169.3751, 69.8826], [169.201, 69.5805]]], [[[60.4505, 69.935], [59.5783, 69.7385], [58.473, 70.2667], [59.0053, 70.4652], [60.4505, 69.935]]], [[[178.8614, 70.8265], [178.8912, 71.2311], [180, 71.5378], [180, 70.993], [178.8614, 70.8265]]], [[[-178.8765, 71.5769], [-177.5322, 71.2631], [-177.8219, 71.0676], [-179.5066, 70.9235], [-180, 70.993], [-180, 71.1843], [-180, 71.3998], [-180, 71.5378], [-178.8765, 71.5769]]], [[[55.3199, 73.3083], [56.4293, 73.2011], [56.0835, 72.7894], [55.356, 72.4652], [55.2978, 71.9354], [57.1458, 70.589], [54.6009, 70.68], [53.7224, 70.8146], [53.3637, 71.5416], [51.8124, 71.4912], [51.5824, 72.0711], [52.622, 72.3009], [53.753, 73.2932], [55.3199, 73.3083]]], [[[142.1849, 73.8958], [143.3438, 73.5686], [143.1933, 73.2207], [140.6627, 73.4519], [141.0848, 73.8658], [142.1849, 73.8958]]], [[[113.3873, 74.4005], [112.7823, 74.0951], [111.6429, 74.2729], [112.0845, 74.549], [113.3873, 74.4005]]], [[[146.7951, 75.3709], [150.1038, 75.2193], [150.6463, 74.9445], [149.5969, 74.7725], [148.0926, 74.8258], [146.1484, 75.1984], [146.7951, 75.3709]]], [[[140.0489, 75.8289], [140.9442, 75.7005], [142.4605, 75.9035], [143.6857, 75.8636], [145.2552, 75.5857], [144.0198, 75.0446], [141.9873, 74.9914], [139.0993, 74.6566], [138.0921, 74.7973], [137.0064, 75.235], [137.5014, 75.9098], [138.8139, 76.1996], [140.0489, 75.8289]]], [[[67.7654, 76.2375], [66.2824, 75.9836], [61.3561, 75.3149], [60.2224, 74.7965], [58.5346, 74.4988], [58.4415, 74.1288], [56.9637, 73.3664], [55.0066, 73.4539], [53.7629, 73.7662], [54.6426, 73.9595], [57.0876, 75.3837], [58.8814, 75.8547], [62.9713, 76.2366], [65.8628, 76.6133], [67.535, 77.0077], [68.4859, 76.9338], [68.9, 76.5729], [67.7654, 76.2375]]], [[[130.6871, 42.3027], [130.5269, 42.5353], [130.5771, 42.8118], [131.0685, 42.9024], [131.2619, 43.4332], [131.2553, 44.0716], [131.0822, 44.9101], [131.9774, 45.2439], [132.9358, 45.0299], [133.1857, 45.4947], [133.8614, 46.2476], [134.1677, 47.3022], [134.7522, 47.7155], [134.5637, 48.3218], [134.2933, 48.3733], [133.4686, 48.0972], [133.1441, 48.1057], [132.5616, 47.7683], [131.0027, 47.6915], [130.712, 48.1279], [130.8043, 48.3414], [130.1962, 48.8916], [129.5339, 49.3235], [128.5268, 49.5943], [127.9998, 49.5685], [127.5027, 49.8735], [127.5901, 50.2091], [126.9247, 51.1002], [126.313, 52.3996], [125.649, 53.0422], [124.8121, 53.1339], [123.608, 53.5464], [122.3379, 53.485], [120.704, 53.1718], [120.0945, 52.7872], [120.656, 52.5666], [120.7498, 52.0965], [120.067, 51.6007], [119.1921, 50.3797], [119.26, 50.0663], [118.4517, 49.8444], [117.8733, 49.5135], [116.6832, 49.8237], [116.1345, 50.0109], [115.2743, 49.9489], [114.743, 50.2337], [114.2969, 50.2743], [113.1641, 49.7971], [113.0556, 49.6162], [111.3365, 49.3559], [110.8278, 49.1661], [110.1997, 49.1704], [109.2365, 49.3348], [108.6136, 49.3229], [108.0339, 49.594], [107.948, 49.9247], [107.2332, 49.9893], [106.7112, 50.3125], [106.218, 50.3045], [105.3835, 50.4736], [103.6329, 50.1387], [102.6833, 50.387], [102.2882, 50.585], [102.1115, 51.3534], [101.3813, 51.4526], [100.4688, 51.726], [98.8486, 52.07], [97.9469, 51.3483], [97.8254, 50.9852], [98.2795, 50.5333], [98.1032, 50.0779], [97.2088, 49.7308], [96.986, 49.8828], [95.8518, 50.0128], [95.5229, 49.9112], [94.6147, 50.0237], [94.2512, 50.5564], [91.8044, 50.6936], [89.6439, 49.903], [89.6541, 49.7174], [88.8316, 49.4484], [88.1924, 49.4517], [87.8141, 49.1624], [87.3229, 49.0858], [86.6144, 49.6098], [86.1807, 49.4992], [85.2099, 49.6648], [84.9893, 50.0615], [84.2577, 50.2883], [83.9454, 50.7745], [83.357, 50.9945], [82.4938, 50.7275], [81.4656, 50.7397], [80.8771, 51.2815], [79.9862, 50.7745], [79.4687, 51.493], [78.4756, 52.6385], [77.7042, 53.3791], [76.5757, 53.9424], [76.2664, 54.312], [74.4518, 53.6472], [73.2857, 53.5984], [73.3993, 53.8115], [72.9141, 54.1073], [71.0933, 54.2123], [71.1856, 54.5994], [70.7382, 55.3051], [70.1824, 55.1624], [68.9773, 55.3895], [68.2063, 55.1609], [68.0739, 54.9595], [66.2224, 54.6673], [65.4767, 54.6234], [65.1576, 54.3643], [64.4611, 54.384], [63.0739, 54.1053], [61.9286, 53.9464], [61.3339, 54.0491], [60.9796, 53.6217], [61.1994, 53.2872], [62.0147, 53.1079], [61.974, 52.9436], [61.0476, 52.9725], [60.8021, 52.7448], [60.9375, 52.2805], [60.0657, 51.9764], [60.4647, 51.6513], [61.3632, 51.4419], [61.5851, 51.2298], [61.3893, 50.8609], [60.6378, 50.6638], [59.9552, 50.7992], [59.8122, 50.5819], [58.8836, 50.6945], [58.3594, 51.0638], [57.8387, 51.0917], [57.4422, 50.8889], [57.0116, 51.0651], [56.4915, 51.0196], [55.7976, 50.6021], [55.5424, 50.6017], [54.727, 50.998], [54.4216, 50.7803], [54.0416, 51.1152], [53.3381, 51.4824], [52.571, 51.4817], [52.3309, 51.6812], [51.6091, 51.4839], [50.7941, 51.7292], [50.2468, 51.2895], [49.498, 51.0835], [48.8086, 50.6012], [48.8433, 50.0131], [48.4344, 49.8284], [47.706, 50.3779], [47.3264, 50.2734], [46.8022, 49.367], [47.0144, 49.0984], [46.7027, 48.8054], [46.6609, 48.4124], [47.0041, 48.2846], [47.0934, 47.9476], [48.1099, 47.7453], [48.9595, 46.7744], [48.6102, 46.5663], [49.2321, 46.3372], [48.1591, 45.7371], [47.5244, 45.6017], [46.7529, 44.4205], [47.23, 44.1923], [47.5088, 43.5097], [47.4631, 43.0351], [48.5729, 41.8446], [47.8608, 41.2129], [47.2612, 41.315], [46.7494, 41.8127], [46.4298, 41.8907], [45.6388, 42.205], [45.7275, 42.4749], [45.1603, 42.6751], [44.5059, 42.7488], [43.9573, 42.5663], [43.7824, 42.747], [42.4192, 43.2242], [41.5807, 43.2193], [40.6481, 43.534], [39.9783, 43.4199], [38.717, 44.2882], [38.1813, 44.4196], [37.8515, 44.6988], [37.4112, 44.7352], [36.9411, 45.2896], [37.6474, 45.3771], [37.9332, 46.0016], [38.1835, 46.0948], [37.9678, 46.6182], [39.2933, 47.1056], [38.2142, 47.0914], [38.2874, 47.5592], [38.9005, 47.8553], [39.7359, 47.8446], [39.9609, 48.2379], [39.6866, 49.0079], [40.0701, 49.2003], [39.7807, 49.5721], [39.1748, 49.8559], [38.2586, 50.0523], [38.0469, 49.9201], [37.4228, 50.4115], [36.3059, 50.2805], [35.4115, 50.5398], [35.3121, 51.0438], [34.2808, 51.3117], [34.3977, 51.7804], [33.7353, 52.3449], [32.508, 52.3084], [31.7635, 52.1011], [31.5771, 52.3122], [31.4178, 53.196], [32.1421, 53.0913], [32.7042, 53.3363], [31.792, 54.0558], [31.4035, 54.1959], [31.1212, 54.6484], [30.9069, 55.5699], [30.2334, 55.8451], [29.4824, 55.6845], [29.375, 55.9386], [28.7948, 55.9426], [28.148, 56.143], [27.8062, 56.867], [27.797, 57.3169], [27.3517, 57.5282], [27.753, 57.8411], [27.4272, 58.7331], [28.0127, 59.4842], [28.014, 59.7248], [28.947, 59.8289], [29.0691, 60.1915], [28.6506, 60.611], [27.7978, 60.5362], [29.6901, 61.5461], [31.2855, 62.5679], [31.5341, 62.8855], [31.1808, 63.2082], [30.0555, 63.689], [30.5037, 64.0205], [30.1082, 64.3661], [30.0727, 64.7649], [29.604, 64.9685], [29.9032, 66.0911], [29.0869, 66.9708], [29.9413, 67.5475], [29.3439, 68.0619], [28.4708, 68.4883], [28.9657, 69.0219], [30.8695, 69.7833], [31.9846, 69.9536], [32.9416, 69.7518], [32.3775, 69.4791], [33.6843, 69.3101], [35.858, 69.1916], [40.3808, 67.8318], [40.9663, 67.7135], [41.1887, 66.8261], [40.5215, 66.4466], [39.2889, 66.1321], [38.3975, 66.0644], [35.5135, 66.3958], [34.8245, 66.6111], [32.4636, 66.9163], [33.5666, 66.321], [34.7865, 65.8644], [34.4064, 65.3957], [34.8034, 64.986], [34.8695, 64.5601], [35.6472, 64.3783], [36.3649, 64.0028], [37.4423, 63.8134], [38.0708, 64.0259], [37.9536, 64.3202], [37.1834, 64.4085], [36.5282, 64.8472], [36.8829, 65.1724], [38.0096, 64.8788], [39.758, 64.577], [40.281, 64.998], [39.8166, 65.5979], [41.4759, 66.1235], [42.2105, 66.5196], [44.0972, 66.2351], [44.4886, 66.6719], [44.2919, 67.0996], [43.7824, 67.2545], [44.2253, 67.9956], [44.0483, 68.5489], [45.8923, 68.4797], [46.6903, 67.8489], [45.5287, 67.7576], [44.9396, 67.4776], [45.9859, 66.853], [46.6907, 66.8255], [47.7091, 67.045], [47.8745, 67.5841], [48.8778, 67.7315], [50.8389, 68.3498], [52.5501, 68.5924], [53.8019, 68.9959], [53.968, 68.2273], [54.5614, 68.273], [56.0436, 68.649], [57.1266, 68.554], [58.9191, 69.0039], [59.8974, 68.4219], [60.9335, 68.9868], [60.1704, 69.591], [61.0161, 69.8515], [63.3616, 69.6752], [68.5041, 68.3484], [69.1406, 68.9506], [68.5427, 68.967], [68.006, 69.48], [67.0645, 69.6937], [66.9264, 70.0141], [67.2847, 70.7386], [66.6663, 70.9006], [66.9175, 71.2824], [68.2692, 71.6828], [69.039, 72.67], [69.6449, 72.8975], [71.5002, 72.9137], [72.8121, 72.6916], [72.6244, 72.0794], [71.9118, 71.5478], [72.7317, 70.8229], [72.5296, 70.1724], [72.5275, 69.0805], [73.548, 68.5744], [73.1521, 67.865], [72.5946, 67.587], [71.5514, 66.7604], [70.9391, 66.5481], [69.877, 66.8455], [69.1943, 66.5787], [70.3396, 66.3423], [71.9171, 66.2466], [72.4174, 66.5607], [73.7921, 66.9953], [74.0744, 67.4141], [74.7696, 67.7663], [74.3914, 68.4206], [74.5796, 68.7511], [76.459, 68.9784], [77.2384, 68.4696], [77.6508, 68.9029], [76.0009, 69.2349], [74.8148, 69.0907], [73.7757, 69.1983], [73.56, 69.7072], [74.311, 70.6536], [73.0863, 71.4448], [73.6718, 71.845], [75.7413, 72.2962], [76.0325, 71.9103], [78.4828, 72.395], [79.422, 72.3808], [80.7625, 72.0892], [81.511, 71.7463], [82.9861, 71.7487], [82.1834, 72.2376], [80.827, 72.4882], [80.5096, 73.0861], [80.5832, 73.5684], [83.5449, 73.6665], [86.5913, 73.8943], [86.6512, 74.6824], [87.6713, 75.1296], [90.1851, 75.591], [93.5498, 75.854], [94.5757, 76.1516], [96.879, 75.931], [100.3223, 76.479], [100.9898, 76.9904], [103.1312, 77.6265], [104.0145, 77.7304], [105.8945, 77.4889], [104.912, 77.1749], [107.4298, 76.9265], [108.0278, 76.7185], [111.115, 76.7229], [112.6193, 76.3836], [113.8712, 75.856], [113.6137, 75.2929], [111.8683, 74.7401], [109.8402, 74.3219], [108.1995, 73.694], [107.2709, 73.621], [106.4782, 73.1395], [107.7504, 73.1731], [109.8553, 73.4726], [110.2614, 74.0174], [112.1471, 73.7089], [114.0607, 73.5846], [115.3378, 73.7025], [118.4504, 73.5897], [118.4303, 73.2466], [119.7504, 72.9791], [123.1605, 72.955], [123.6221, 73.1933], [123.3053, 73.5329], [124.3882, 73.7549], [125.617, 73.5207], [127.7406, 73.4816], [128.8885, 73.1903], [129.4117, 72.3156], [128.359, 72.0883], [129.7621, 71.1195], [131.1571, 70.7421], [131.5621, 70.9011], [132.5621, 71.8951], [134.1029, 71.3789], [135.8847, 71.6306], [137.3154, 71.3594], [138.1183, 71.5663], [139.6949, 71.7003], [139.6013, 72.496], [142.0615, 72.7208], [145.4857, 72.5421], [146.594, 72.3024], [148.402, 72.312], [149.5014, 72.1644], [150.5997, 71.5201], [151.5825, 71.2871], [152.5089, 70.8345], [153.7943, 70.88], [155.8953, 71.0955], [158.0372, 71.0393], [159.3506, 70.7908], [160.0061, 70.3096], [159.8327, 69.7849], [161.5367, 69.3797], [162.3756, 69.6491], [164.1597, 69.7192], [164.5135, 69.6092], [166.8203, 69.4995], [167.6282, 69.7403], [168.303, 69.2716], [169.3105, 69.0796], [169.6097, 68.7861], [170.5375, 68.8254], [170.9951, 69.0454], [170.5823, 69.5834], [170.4869, 70.1076], [172.5595, 69.9682], [173.2772, 69.8237], [176.1075, 69.8603], [176.9243, 69.646], [178.8484, 69.3872], [180, 68.9835], [180, 65.0672], [178.5196, 64.6029], [177.4671, 64.7368], [177.433, 64.4445], [178.6501, 63.9653], [178.7064, 63.5216], [179.3324, 63.1902], [179.5704, 62.6875], [179.1205, 62.3205], [177.3513, 62.5874], [175.2681, 62.1025], [174.5144, 61.8237], [173.6234, 61.716], [172.8564, 61.4692], [172.3926, 61.0617], [170.6081, 60.435], [169.9826, 60.067], [169.2267, 60.5959], [168.1374, 60.574], [166.9642, 60.3069], [166.3521, 60.4847], [165.0843, 60.0985], [163.7801, 60.041], [163.4099, 59.8348], [163.2728, 59.3027], [162.1418, 58.4475], [161.9603, 58.0768], [162.467, 57.7661], [163.2138, 57.6869], [162.7792, 57.3577], [162.8027, 56.8115], [163.2563, 56.6881], [163.3354, 56.2325], [162.5284, 56.2606], [162.0849, 56.0897], [161.7294, 55.358], [162.1058, 54.7521], [161.7259, 54.533], [160.7728, 54.5414], [160.0746, 54.1892], [159.8437, 53.7837], [159.8974, 53.3807], [158.6088, 52.8735], [158.4637, 52.3049], [158.1037, 51.8095], [156.7476, 50.9692], [156.5003, 51.475], [156.3645, 52.5093], [156.0987, 53.0064], [155.62, 54.8646], [155.5549, 55.3485], [155.9827, 56.6952], [156.7285, 57.1522], [157.4502, 57.7994], [158.2102, 58.0253], [159.0368, 58.424], [159.8472, 59.1271], [161.7534, 60.1523], [162.0037, 60.4201], [162.9732, 60.7828], [163.71, 60.9169], [164.0053, 61.3439], [164.2556, 62.6966], [163.3318, 62.5508], [163.0091, 61.7915], [162.3925, 61.6622], [160.7665, 60.7532], [159.8832, 61.2917], [160.3174, 61.7933], [159.5525, 61.7194], [159.0767, 61.9222], [158.07, 61.7536], [157.4694, 61.7988], [156.6801, 61.4806], [156.63, 61.2724], [155.8531, 60.7772], [154.9707, 60.3766], [154.2929, 59.8333], [154.5827, 59.5401], [155.1668, 59.3601], [154.0111, 59.0756], [153.3611, 59.2148], [152.8822, 58.9391], [151.9899, 59.1601], [151.4856, 59.5241], [150.4572, 59.5907], [149.6427, 59.7705], [149.205, 59.4881], [147.8746, 59.3881], [147.5146, 59.2686], [146.4444, 59.4305], [145.9316, 59.1983], [145.5543, 59.4136], [143.1921, 59.3701], [142.0254, 58.9997], [141.7546, 58.7453], [140.6849, 58.2122], [140.4469, 57.8136], [140.0022, 57.6875], [138.662, 56.9655], [137.6913, 56.1395], [136.175, 55.3522], [135.2623, 54.9434], [135.8513, 54.5839], [136.7973, 54.6209], [136.6827, 53.9313], [137.1555, 53.8217], [137.3282, 53.5389], [138.2924, 53.5924], [138.6608, 53.7449], [138.6958, 54.32], [139.7074, 54.2771], [140.3471, 53.8126], [141.4023, 53.1841], [141.1696, 52.3684], [141.4853, 52.1786], [140.6876, 51.2322], [140.4763, 50.546], [140.5171, 49.596], [140.1704, 48.5238], [139.3727, 47.8873], [139.0012, 47.3835], [138.5866, 47.0572], [138.3368, 46.5431], [137.6856, 45.8183], [136.8035, 45.1711], [136.142, 44.4893], [135.8744, 44.3735], [135.1309, 43.5256], [133.7091, 42.83], [133.1601, 42.6969], [132.4814, 42.9099], [132.3344, 43.2388], [131.7946, 43.2553], [131.1585, 42.6259], [130.6871, 42.3027]]], [[[102.8848, 79.254], [105.146, 78.8188], [105.3125, 78.4998], [103.7194, 78.2581], [101.2043, 78.192], [100.2841, 78.6792], [101.5905, 79.3504], [102.8848, 79.254]]], [[[97.6744, 80.1582], [100.0612, 79.7772], [99.4393, 78.8341], [97.5555, 78.8265], [94.6524, 79.1275], [93.0709, 79.4953], [94.9871, 80.0967], [97.6744, 80.1582]]]]
      },
      "properties": {
        "id": "RU",
        "name": "Russia"
      },
      "id": "RU"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[30.51, -1.0673], [30.8128, -1.5631], [30.8287, -2.3386], [30.5536, -2.4], [29.9303, -2.3396], [29.8681, -2.7164], [29.3901, -2.8087], [29.0145, -2.7204], [28.8765, -2.4003], [29.1064, -2.2334], [29.1295, -1.8602], [29.5769, -1.3878], [30.1017, -1.3687], [30.51, -1.0673]]]
      },
      "properties": {
        "id": "RW",
        "name": "Rwanda"
      },
      "id": "RW"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[-8.6834, 27.2858], [-8.6821, 25.9954], [-10.0035, 25.9954], [-12.0164, 25.9954], [-12.0234, 23.4675], [-12.6203, 23.2713], [-13.0316, 23.0001], [-13.0944, 22.4957], [-13.0163, 21.3341], [-15.0018, 21.3314], [-16.9647, 21.3292], [-17.0481, 20.8063], [-16.9309, 21.9], [-16.5143, 22.3333], [-16.2103, 23.0981], [-15.5864, 24.0729], [-15.0389, 24.5488], [-14.856, 24.8714], [-14.7949, 25.4042], [-14.4139, 26.2538], [-13.5758, 26.735], [-13.176, 27.6556], [-12.949, 27.9144], [-11.986, 28.1292], [-11.4303, 28.3822], [-11.0809, 28.7138], [-10.4865, 29.0649], [-9.6671, 30.1094], [-9.6529, 30.4476], [-9.8755, 30.718], [-9.8087, 31.4247], [-9.3475, 32.0865], [-9.2458, 32.5726], [-8.5962, 33.1874], [-6.901, 33.9691], [-6.3532, 34.776], [-5.9248, 35.7859], [-5.3973, 35.9297], [-5.1054, 35.4677], [-4.33, 35.1613], [-3.6932, 35.2799], [-2.8401, 35.1281], [-2.2197, 35.1041], [-1.7956, 34.7521], [-1.6792, 33.3188], [-1.5099, 32.8776], [-1.0656, 32.4682], [-1.2753, 32.0892], [-2.4486, 32.13], [-2.9308, 32.0426], [-3.0174, 31.8344], [-3.8268, 31.6617], [-3.8334, 31.1978], [-4.3228, 30.6989], [-4.9683, 30.4654], [-5.4488, 29.9567], [-6.5008, 29.8093], [-6.6353, 29.5687], [-7.095, 29.6252], [-7.6851, 29.3494], [-8.6599, 28.7187], [-8.6834, 27.2858]]]
      },
      "properties": {
        "id": "MA",
        "name": "Morocco"
      },
      "id": "MA"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[46.5314, 29.0965], [47.4333, 28.9894], [47.6713, 28.5331], [48.4423, 28.543], [48.9066, 27.6289], [49.4052, 27.181], [49.9862, 26.8291], [50.2138, 26.3083], [50.0316, 26.1109], [50.5579, 25.0867], [50.8043, 24.7893], [51.2682, 24.6074], [51.5682, 24.286], [51.5927, 24.0786], [52.5551, 22.933], [55.1043, 22.6214], [55.186, 22.7039], [55.6409, 22.0017], [54.9773, 19.9958], [53.6669, 19.559], [51.9775, 18.9961], [49.042, 18.582], [48.172, 18.1568], [47.5795, 17.4483], [47.4418, 17.1118], [46.9758, 16.9534], [46.6819, 17.2685], [46.3104, 17.2313], [45.4066, 17.32], [45.1482, 17.4274], [44.1557, 17.3986], [43.9169, 17.3249], [43.418, 17.5162], [43.191, 17.3595], [43.1649, 16.6892], [42.7992, 16.3719], [42.6988, 16.7371], [42.3831, 17.1225], [42.294, 17.435], [41.7498, 17.8855], [41.2296, 18.6783], [41.1159, 19.0822], [40.7591, 19.7557], [40.0808, 20.2661], [39.6138, 20.5178], [39.0936, 21.3101], [38.9879, 21.8819], [39.0958, 22.3928], [38.9412, 22.8819], [38.4641, 23.7121], [37.9195, 24.1852], [37.5431, 24.2918], [37.1809, 24.82], [37.1489, 25.291], [36.7626, 25.7513], [36.2496, 26.5947], [35.5815, 27.4323], [35.1806, 28.0347], [34.616, 28.1483], [34.7798, 28.5075], [34.9507, 29.3535], [36.0155, 29.1905], [36.476, 29.4951], [36.7551, 29.8662], [37.4693, 29.9949], [37.6335, 30.3132], [37.9803, 30.5], [36.9584, 31.4917], [38.9621, 31.995], [39.1455, 32.1247], [40.3693, 31.9391], [42.0743, 31.0802], [42.8577, 30.4952], [44.7164, 29.1937], [46.3565, 29.0636], [46.5314, 29.0965]]]
      },
      "properties": {
        "id": "SA",
        "name": "Saudi Arabia"
      },
      "id": "SA"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[36.8713, 21.9969], [36.9269, 21.5867], [37.1507, 21.1037], [37.2274, 20.5569], [37.2482, 19.5821], [37.4711, 18.8203], [37.9217, 18.5558], [38.6093, 18.0049], [38.2537, 17.5846], [37.7822, 17.458], [37.4112, 17.0616], [37.0091, 17.059], [36.9135, 16.2964], [36.4266, 15.1321], [36.5243, 14.2567], [36.3907, 13.6259], [36.2123, 13.2713], [36.1076, 12.7266], [35.5961, 12.5375], [35.1123, 11.8167], [34.9312, 10.8649], [34.5717, 10.88], [34.2756, 10.528], [34.2915, 10.125], [34.078, 9.4613], [33.892, 10.199], [33.172, 10.8502], [33.0731, 11.5916], [33.1991, 12.2175], [32.7365, 12.0097], [32.0721, 12.0066], [32.3353, 11.7159], [32.404, 11.0576], [31.9331, 10.6625], [31.6548, 10.2213], [31.2247, 9.7991], [30.7396, 9.7428], [30.0031, 10.2772], [29.6054, 10.065], [29.4731, 9.7685], [28.9994, 9.61], [28.8445, 9.3259], [28.0491, 9.3286], [27.8857, 9.5998], [27.0743, 9.614], [26.5514, 9.5257], [25.8913, 10.2026], [25.7981, 10.4206], [25.0669, 10.2936], [24.7851, 9.7747], [24.5321, 8.8869], [24.1472, 8.6654], [23.5373, 8.8159], [23.6461, 9.8231], [23.2559, 10.4579], [22.86, 10.9195], [22.9226, 11.3447], [22.5563, 11.6697], [22.3522, 12.6604], [21.8252, 12.7905], [22.2283, 13.3294], [22.1076, 13.7302], [22.5097, 14.1275], [22.3815, 14.5506], [22.6708, 14.7223], [22.9324, 15.1622], [23.105, 15.7025], [23.9834, 15.7801], [23.9822, 17.2662], [23.9804, 19.4968], [23.9804, 19.9958], [24.9671, 19.9953], [24.9804, 21.996], [26.1261, 21.9955], [28.8005, 21.9951], [30.7106, 21.9951], [32.6061, 21.996], [35.2308, 21.9963], [36.8713, 21.9969]]]
      },
      "properties": {
        "id": "SD",
        "name": "Sudan"
      },
      "id": "SD"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[34.078, 9.4613], [34.0945, 8.5824], [33.9533, 8.4434], [33.2342, 8.3964], [33.0126, 7.9516], [33.2262, 7.7608], [33.6661, 7.6711], [34.0643, 7.2259], [34.7105, 6.6604], [35.0821, 5.6731], [35.2681, 5.4925], [33.9759, 4.2203], [33.4895, 3.7551], [32.8382, 3.7986], [32.3357, 3.7063], [32.0996, 3.5291], [31.7982, 3.8026], [31.48, 3.6805], [31.1523, 3.7858], [30.8384, 3.4905], [30.5082, 3.8359], [30.1948, 3.9819], [29.6768, 4.587], [29.1513, 4.3881], [28.7269, 4.5049], [28.192, 4.3504], [27.788, 4.6446], [27.4032, 5.1094], [27.0837, 5.777], [26.5141, 6.0692], [26.3619, 6.6355], [25.8891, 7.0648], [25.3808, 7.3333], [25.2472, 7.7244], [24.8534, 8.1377], [24.2916, 8.2912], [24.1472, 8.6654], [24.5321, 8.8869], [24.7851, 9.7747], [25.0669, 10.2936], [25.7981, 10.4206], [25.8913, 10.2026], [26.5514, 9.5257], [27.0743, 9.614], [27.8857, 9.5998], [28.0491, 9.3286], [28.8445, 9.3259], [28.9994, 9.61], [29.4731, 9.7685], [29.6054, 10.065], [30.0031, 10.2772], [30.7396, 9.7428], [31.2247, 9.7991], [31.6548, 10.2213], [31.9331, 10.6625], [32.404, 11.0576], [32.3353, 11.7159], [32.0721, 12.0066], [32.7365, 12.0097], [33.1991, 12.2175], [33.0731, 11.5916], [33.172, 10.8502], [33.892, 10.199], [34.078, 9.4613]]]
      },
      "properties": {
        "id": "SS",
        "name": "South Sudan"
      },
      "id": "SS"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[-12.2807, 14.8089], [-12.0193, 14.2065], [-12.0543, 13.633], [-11.6349, 13.3698], [-11.3903, 12.9418], [-11.3894, 12.4043], [-12.2912, 12.328], [-13.0828, 12.6334], [-13.7294, 12.6738], [-15.1962, 12.6799], [-15.5748, 12.4904], [-16.7119, 12.3551], [-16.7633, 13.064], [-16.6489, 13.154], [-15.8343, 13.1563], [-15.5096, 13.5864], [-16.5623, 13.5873], [-17.168, 14.6406], [-17.1471, 14.9221], [-16.5352, 15.8383], [-16.4411, 16.2045], [-16.1683, 16.5471], [-15.6208, 16.5068], [-15.1128, 16.6449], [-14.3, 16.5804], [-13.8685, 16.1481], [-13.4096, 16.0593], [-13.258, 15.7002], [-12.8584, 15.2426], [-12.2807, 14.8089]]]
      },
      "properties": {
        "id": "SN",
        "name": "Senegal"
      },
      "id": "SN"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[103.9697, 1.3314], [103.8201, 1.2653], [103.6501, 1.3257], [103.8179, 1.4473], [103.9697, 1.3314]]]
      },
      "properties": {
        "id": "SG",
        "name": "Singapore"
      },
      "id": "SG"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[-37.1034, -54.0658], [-36.3264, -54.251], [-35.9133, -54.7108], [-36.2518, -54.7801], [-37.1034, -54.0658]]]
      },
      "properties": {
        "id": "GS",
        "name": "South Georgia and South Sandwich Islands"
      },
      "id": "GS"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[-5.6923, -15.9977], [-5.775, -15.9568], [-5.7078, -15.9061], [-5.6923, -15.9977]]]
      },
      "properties": {
        "id": "SH",
        "name": "Saint Helena"
      },
      "id": "SH"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [[[[160.7493, -8.3138], [160.9979, -8.6122], [161.2584, -9.3171], [160.8736, -9.1568], [160.5903, -8.3729], [160.7493, -8.3138]]], [[[159.7505, -9.2727], [159.9708, -9.4334], [160.3547, -9.4214], [160.6254, -9.5887], [160.6494, -9.9288], [159.8535, -9.7916], [159.6218, -9.5319], [159.7505, -9.2727]]], [[[161.7152, -10.3873], [162.1055, -10.4539], [162.1236, -10.8246], [161.538, -10.5666], [161.7152, -10.3873]]], [[[159.8792, -8.534], [158.9439, -8.0409], [159.1095, -7.9038], [159.8432, -8.3272], [159.8792, -8.534]]]]
      },
      "properties": {
        "id": "SB",
        "name": "Solomon Islands"
      },
      "id": "SB"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[-10.2832, 8.4852], [-10.6474, 7.7595], [-11.2678, 7.2326], [-11.5075, 6.9068], [-11.7334, 7.0887], [-12.4856, 7.3861], [-12.5104, 7.6658], [-12.8809, 7.8567], [-13.2284, 8.696], [-13.2928, 9.0493], [-12.7559, 9.3734], [-12.5016, 9.8622], [-11.9109, 9.9931], [-11.2056, 9.9776], [-10.6905, 9.3144], [-10.5005, 8.6876], [-10.2832, 8.4852]]]
      },
      "properties": {
        "id": "SL",
        "name": "Sierra Leone"
      },
      "id": "SL"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[-89.3626, 14.416], [-89.0572, 14.329], [-88.449, 13.851], [-88.151, 13.9872], [-87.7153, 13.8128], [-87.8143, 13.3991], [-87.9308, 13.1807], [-88.5121, 13.1838], [-89.2775, 13.4782], [-89.8042, 13.5602], [-90.0952, 13.7365], [-89.8726, 14.0454], [-89.3626, 14.416]]]
      },
      "properties": {
        "id": "SV",
        "name": "El Salvador"
      },
      "id": "SV"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[12.397, 43.9345], [12.4409, 43.9824], [12.5146, 43.9531], [12.4854, 43.9016], [12.397, 43.9345]]]
      },
      "properties": {
        "id": "SM",
        "name": "San Marino"
      },
      "id": "SM"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[41.5327, -1.6955], [40.9788, -0.8703], [40.9699, 1.3781], [40.9645, 2.8145], [41.3418, 3.2015], [41.8838, 3.9779], [42.0241, 4.1377], [42.7916, 4.2922], [43.0158, 4.5634], [43.5383, 4.8404], [44.0283, 4.9509], [44.9404, 4.9119], [45.9348, 5.9972], [47.9781, 7.9969], [46.9784, 7.9969], [44.023, 8.9859], [43.4827, 9.3796], [43.1818, 9.8799], [42.8417, 10.2031], [42.6594, 10.6212], [42.9226, 10.9994], [43.2461, 11.4997], [43.8529, 10.7841], [44.3865, 10.4303], [44.9428, 10.4365], [45.8168, 10.8361], [46.5651, 10.746], [47.405, 11.1738], [48.0193, 11.1392], [48.6745, 11.3226], [48.9031, 11.2547], [50.11, 11.5294], [50.7923, 11.9835], [51.2548, 11.8308], [51.0843, 11.3355], [51.1408, 10.6567], [50.8985, 10.2533], [50.8248, 9.428], [50.4297, 8.8452], [50.103, 8.1998], [49.3483, 6.9906], [49.0491, 6.1738], [48.6492, 5.4943], [47.9754, 4.4968], [46.8789, 3.2855], [46.0512, 2.4753], [44.92, 1.81], [44.3328, 1.3909], [43.4676, 0.6217], [41.9797, -0.9728], [41.5327, -1.6955]]]
      },
      "properties": {
        "id": "SO",
        "name": "Somalia"
      },
      "id": "SO"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[-56.2671, 46.8384], [-56.3869, 47.0678], [-56.2873, 47.071], [-56.3148, 46.9538], [-56.2671, 46.8384]]]
      },
      "properties": {
        "id": "PM",
        "name": "Saint Pierre and Miquelon"
      },
      "id": "PM"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[20.2419, 46.1086], [20.775, 45.7499], [20.7742, 45.4845], [21.4919, 45.1223], [21.3845, 44.8701], [22.705, 44.2376], [22.421, 44.0077], [22.5546, 43.4546], [22.9767, 43.1878], [22.4667, 42.8424], [22.3441, 42.3138], [21.5625, 42.2477], [21.7529, 42.6698], [21.3906, 42.7514], [21.0569, 43.0915], [20.3444, 42.8278], [19.5516, 43.2123], [19.1943, 43.5331], [19.4882, 43.7036], [19.1517, 44.3025], [19.3568, 44.8586], [19.007, 44.8693], [19.0549, 45.5271], [18.9054, 45.9315], [19.5308, 46.1552], [20.2419, 46.1086]]]
      },
      "properties": {
        "id": "RS",
        "name": "Serbia"
      },
      "id": "RS"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[6.6601, 0.1205], [6.5243, 0.3403], [6.6868, 0.4042], [6.7498, 0.2434], [6.6601, 0.1205]]]
      },
      "properties": {
        "id": "ST",
        "name": "Sao Tome and Principe"
      },
      "id": "ST"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[-54.1559, 5.3589], [-54.4522, 5.0135], [-54.3508, 4.0543], [-53.9904, 3.5895], [-54.2032, 3.1381], [-54.1955, 2.8181], [-54.6163, 2.3266], [-55.0058, 2.593], [-56.1295, 2.2995], [-56.0199, 1.8423], [-56.4828, 1.9422], [-56.7044, 2.0364], [-57.2097, 2.8829], [-57.3036, 3.3769], [-57.5497, 3.3529], [-57.8327, 3.6761], [-58.0544, 4.1719], [-57.7111, 4.9909], [-57.3309, 5.0202], [-57.1948, 5.5484], [-56.9698, 5.9928], [-55.9395, 5.7956], [-55.8283, 5.9617], [-54.8338, 5.9883], [-54.0543, 5.8081], [-54.1559, 5.3589]]]
      },
      "properties": {
        "id": "SR",
        "name": "Suriname"
      },
      "id": "SR"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[22.5387, 49.0727], [22.132, 48.4053], [21.4515, 48.5522], [20.4901, 48.5269], [19.8988, 48.1314], [18.7917, 48.0005], [18.7242, 47.787], [17.7618, 47.7701], [17.1475, 48.0058], [16.9531, 48.5989], [17.1883, 48.8609], [17.7583, 48.888], [18.161, 49.2573], [18.8321, 49.5108], [19.4416, 49.5976], [19.8019, 49.1923], [20.6161, 49.3916], [21.6397, 49.412], [22.5387, 49.0727]]]
      },
      "properties": {
        "id": "SK",
        "name": "Slovakia"
      },
      "id": "SK"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[16.5164, 46.4997], [15.6361, 46.2005], [15.6246, 45.8338], [15.3395, 45.4672], [13.8787, 45.4286], [13.5778, 45.5169], [13.7198, 45.5875], [13.3993, 46.3177], [13.6998, 46.5201], [14.5037, 46.4171], [15.0009, 46.6262], [15.9574, 46.6777], [16.0929, 46.8632], [16.5164, 46.4997]]]
      },
      "properties": {
        "id": "SI",
        "name": "Slovenia"
      },
      "id": "SI"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [[[[19.0767, 57.836], [18.6998, 57.2427], [18.1365, 57.5565], [18.5374, 57.8305], [19.0767, 57.836]]], [[[24.1557, 65.8052], [23.1023, 65.7353], [21.5656, 65.4081], [21.1381, 64.8087], [21.4652, 64.3797], [20.7626, 63.8678], [19.0345, 63.2377], [18.4632, 62.896], [17.8954, 62.8305], [17.4175, 61.7407], [17.1307, 61.5758], [17.2509, 60.7009], [17.9559, 60.5897], [18.5573, 60.2537], [18.9707, 59.7571], [17.876, 59.2709], [17.4569, 58.8585], [16.6522, 58.4344], [16.5278, 57.068], [15.9965, 56.2227], [14.782, 56.1619], [14.2152, 55.8325], [14.3417, 55.5278], [13.3211, 55.3464], [12.5923, 56.1376], [12.8835, 56.6178], [12.4214, 56.9063], [11.4493, 58.1183], [11.147, 58.9886], [11.3885, 59.0365], [11.7982, 59.29], [11.6805, 59.5923], [12.4862, 60.1067], [12.5887, 60.4507], [12.294, 61.0027], [12.8809, 61.3523], [12.1554, 61.7207], [12.3034, 62.2856], [12.2182, 63.0007], [11.9997, 63.2917], [12.6624, 63.9404], [13.9604, 64.0141], [14.0776, 64.464], [13.6501, 64.5816], [14.4798, 65.3014], [14.5432, 66.1292], [15.423, 66.4899], [16.4035, 67.055], [16.1274, 67.4259], [17.3246, 68.1039], [17.9168, 67.965], [18.3784, 68.5625], [19.9698, 68.3565], [20.6223, 69.0369], [21.9974, 68.5207], [22.7823, 68.3911], [23.6391, 67.9543], [23.4682, 67.45], [23.9883, 66.8106], [23.7011, 66.4808], [24.1557, 65.8052]]]]
      },
      "properties": {
        "id": "SE",
        "name": "Sweden"
      },
      "id": "SE"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[31.9482, -25.9577], [32.1129, -26.8393], [31.9584, -27.3058], [31.4698, -27.2956], [31.0635, -27.1122], [30.7941, -26.7643], [30.8034, -26.4136], [31.2073, -25.8432], [31.4151, -25.7464], [31.9482, -25.9577]]]
      },
      "properties": {
        "id": "SZ",
        "name": "Eswatini"
      },
      "id": "SZ"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[-63.123, 18.0689], [-63.0112, 18.0689], [-63.0232, 18.0191], [-63.123, 18.0689]]]
      },
      "properties": {
        "id": "SX",
        "name": "Sint Maarten"
      },
      "id": "SX"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[55.5402, -4.6931], [55.3835, -4.6092], [55.4559, -4.5586], [55.5402, -4.6931]]]
      },
      "properties": {
        "id": "SC",
        "name": "Seychelles"
      },
      "id": "SC"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[42.3588, 37.1087], [41.7885, 36.5973], [41.4169, 36.5148], [41.2455, 36.0735], [41.3543, 35.6403], [41.1945, 34.769], [40.9873, 34.4289], [40.6893, 34.3321], [38.7736, 33.372], [36.8182, 32.3173], [36.372, 32.387], [35.7874, 32.735], [35.869, 33.432], [35.9423, 33.6677], [36.5851, 34.2212], [36.4329, 34.6136], [35.9761, 34.6291], [35.9432, 35.2239], [35.7644, 35.5715], [35.8926, 35.9165], [36.1274, 35.8316], [36.6583, 36.8024], [37.4365, 36.6435], [38.1916, 36.9014], [38.7669, 36.6932], [39.3568, 36.6816], [40.0164, 36.8259], [40.7057, 37.0976], [41.5154, 37.0892], [42.2683, 37.2765], [42.3588, 37.1087]]]
      },
      "properties": {
        "id": "SY",
        "name": "Syria"
      },
      "id": "SY"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[-71.6684, 21.8335], [-71.7219, 21.7904], [-71.8304, 21.7904], [-71.8062, 21.8521], [-71.6684, 21.8335]]]
      },
      "properties": {
        "id": "TC",
        "name": "Turks and Caicos Islands"
      },
      "id": "TC"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[22.86, 10.9195], [22.4938, 10.9963], [21.7063, 10.5746], [21.7258, 10.3665], [21.2637, 9.9745], [20.7732, 9.4058], [20.3422, 9.127], [19.1455, 9.0161], [19.1086, 8.6561], [18.4553, 8.032], [17.6496, 7.9836], [16.7848, 7.5508], [16.3787, 7.6835], [15.8451, 7.4754], [15.4803, 7.5237], [15.4429, 7.8518], [15.1162, 8.5572], [14.3323, 9.2034], [13.9772, 9.6917], [14.2432, 9.9798], [15.5412, 9.9602], [15.2761, 10.3575], [15.0297, 11.1135], [15.0811, 11.8455], [14.7611, 12.6556], [14.5161, 12.9796], [14.0639, 13.0786], [13.6062, 13.7045], [13.4481, 14.3805], [14.3678, 15.75], [15.4745, 16.9085], [15.735, 19.9038], [15.9491, 20.3034], [15.5873, 20.7335], [15.6073, 20.9546], [15.182, 21.5232], [15.1722, 21.9222], [14.9791, 22.996], [15.9841, 23.4453], [17.7521, 22.5721], [19.6683, 21.6258], [21.5847, 20.6794], [23.9804, 19.4968], [23.9822, 17.2662], [23.9834, 15.7801], [23.105, 15.7025], [22.9324, 15.1622], [22.6708, 14.7223], [22.3815, 14.5506], [22.5097, 14.1275], [22.1076, 13.7302], [22.2283, 13.3294], [21.8252, 12.7905], [22.3522, 12.6604], [22.5563, 11.6697], [22.9226, 11.3447], [22.86, 10.9195]]]
      },
      "properties": {
        "id": "TD",
        "name": "Chad"
      },
      "id": "TD"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[0.9007, 10.9931], [0.7798, 10.3598], [1.33, 9.9971], [1.4244, 9.2851], [1.6002, 9.0499], [1.6225, 6.2169], [1.1875, 6.0895], [0.7369, 6.4526], [0.5256, 6.8509], [0.6348, 7.3538], [0.5837, 8.1457], [0.688, 8.304], [0.4153, 8.6526], [0.5291, 9.3584], [0.2619, 9.4955], [0.3627, 10.2364], [-0.0578, 10.6305], [-0.0686, 11.1157], [0.9007, 10.9931]]]
      },
      "properties": {
        "id": "TG",
        "name": "Togo"
      },
      "id": "TG"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[100.1225, 20.3168], [100.5428, 20.0886], [100.3978, 19.7561], [100.6253, 19.4999], [101.1545, 19.5793], [101.2864, 18.977], [101.0507, 18.4071], [101.1133, 18.0334], [100.9086, 17.5837], [101.1052, 17.4793], [102.1013, 18.2105], [102.7175, 17.8922], [103.0912, 18.1381], [103.3668, 18.4235], [103.9497, 18.3192], [104.8162, 17.3004], [104.7505, 16.6475], [105.047, 16.1601], [105.4062, 15.9874], [105.6224, 15.6998], [105.5131, 15.3606], [105.4754, 14.5301], [105.1833, 14.3463], [104.779, 14.4281], [103.1995, 14.3326], [102.729, 13.8421], [102.3198, 13.5399], [102.4995, 12.6697], [102.7556, 12.4261], [102.7366, 12.0897], [102.9341, 11.7065], [102.7628, 12.0123], [101.7236, 12.6893], [101.4448, 12.6188], [100.8634, 12.7146], [100.9628, 13.4319], [100.656, 13.5211], [100.0172, 13.3534], [100.09, 13.0457], [99.9641, 12.6902], [99.9889, 12.1709], [99.6272, 11.4628], [99.4869, 10.8898], [99.165, 10.3198], [99.1605, 9.7338], [99.3936, 9.2136], [99.7239, 9.3144], [99.9046, 9.1129], [99.9605, 8.6712], [100.2791, 8.2685], [100.4537, 7.4425], [100.5863, 7.1761], [101.0178, 6.861], [101.4977, 6.8654], [102.1009, 6.2422], [101.8737, 5.8254], [101.5563, 5.908], [101.2571, 5.7895], [101.0533, 6.2426], [100.3452, 6.5498], [100.1188, 6.442], [99.6959, 6.8765], [99.7203, 7.1061], [99.3586, 7.3724], [99.051, 7.8877], [98.579, 8.3445], [98.2382, 8.423], [98.3714, 9.2904], [98.7026, 10.1902], [98.7571, 10.6612], [99.1903, 11.1051], [99.6147, 11.7811], [99.4052, 12.5477], [99.2195, 12.7399], [99.1366, 13.7165], [98.2462, 14.8146], [98.1911, 15.204], [98.5653, 15.4037], [98.6892, 16.3052], [98.4389, 16.9755], [97.7929, 17.6813], [97.4848, 18.4941], [97.7539, 18.621], [97.817, 19.46], [98.1112, 19.7623], [98.9168, 19.7729], [99.0208, 20.0419], [99.3382, 20.0787], [99.8903, 20.4246], [100.1225, 20.3168]]]
      },
      "properties": {
        "id": "TH",
        "name": "Thailand"
      },
      "id": "TH"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[70.958, 40.2391], [70.4514, 40.0491], [69.9666, 40.2022], [69.5303, 40.0974], [69.229, 39.761], [69.5986, 39.5736], [70.6076, 39.5643], [70.7333, 39.4134], [71.4044, 39.598], [71.8061, 39.2758], [72.0427, 39.3521], [73.2351, 39.3743], [73.6314, 39.4489], [73.8015, 38.6068], [74.2774, 38.6597], [74.7452, 38.5101], [74.8912, 37.2317], [74.2596, 37.4154], [73.7495, 37.2317], [73.4815, 37.4718], [72.8955, 37.2676], [71.8021, 36.6941], [71.4329, 37.1273], [71.5518, 37.933], [71.2557, 38.3067], [70.8789, 38.4563], [70.2148, 37.9246], [70.2513, 37.664], [69.4921, 37.553], [69.2649, 37.1083], [68.9604, 37.3248], [68.0678, 36.9498], [67.7592, 37.1721], [67.8143, 37.4869], [68.2942, 38.0329], [68.0477, 38.6695], [68.1037, 38.962], [67.6766, 39.0086], [67.3495, 39.2421], [67.7192, 39.6216], [68.4633, 39.5368], [68.6528, 40.1827], [69.228, 40.1875], [69.2063, 40.5666], [69.7128, 40.6572], [70.4416, 41.0234], [70.751, 40.7397], [70.3825, 40.4534], [70.958, 40.2391]]]
      },
      "properties": {
        "id": "TJ",
        "name": "Tajikistan"
      },
      "id": "TJ"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[-172.4792, -8.5806], [-172.4836, -8.5829], [-172.4987, -8.5478], [-172.4873, -8.5563], [-172.4792, -8.5806]]]
      },
      "properties": {
        "id": "TK",
        "name": "Tokelau"
      },
      "id": "TK"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[66.5221, 37.3484], [65.7648, 37.569], [65.5549, 37.2512], [64.8162, 37.1322], [64.5107, 36.3408], [63.8622, 36.0123], [63.1086, 35.8187], [63.0567, 35.4459], [62.6105, 35.2333], [61.262, 35.6194], [61.1195, 36.6426], [60.3413, 36.6377], [60.0625, 36.9631], [59.5622, 37.1788], [59.2409, 37.5206], [58.8157, 37.6836], [58.4357, 37.6387], [57.4236, 37.9476], [57.1937, 38.2162], [56.4409, 38.2495], [56.2286, 38.0733], [55.5783, 38.0999], [55.0754, 37.9023], [54.7451, 37.502], [53.9142, 37.3435], [53.8237, 37.9281], [53.8685, 38.949], [53.6177, 39.2159], [53.125, 39.4321], [53.4721, 39.6686], [53.4042, 39.9603], [52.9873, 39.9878], [52.7334, 40.3989], [53.1454, 40.825], [53.8699, 40.6488], [54.7101, 40.8911], [54.592, 41.1934], [54.0949, 41.5192], [53.8464, 42.0914], [52.9701, 41.9764], [52.4937, 41.7802], [53.2502, 42.2059], [54.1211, 42.3351], [54.9037, 41.9192], [55.5451, 41.2627], [55.9774, 41.3221], [57.0179, 41.2635], [56.9642, 41.8566], [57.3818, 42.1562], [57.8143, 42.1899], [58.2595, 42.688], [58.5888, 42.7785], [59.4508, 42.2996], [59.8584, 42.2951], [60.107, 41.9076], [60.0896, 41.3993], [60.455, 41.2218], [61.9029, 41.0936], [62.6505, 39.8586], [64.1628, 38.9535], [65.613, 38.2384], [65.8571, 38.2686], [66.5744, 38.0107], [66.5221, 37.3484]]]
      },
      "properties": {
        "id": "TM",
        "name": "Turkmenistan"
      },
      "id": "TM"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[125.0678, -9.5119], [124.9223, -8.9424], [125.178, -8.6477], [125.8043, -8.4923], [126.6198, -8.4595], [126.9149, -8.7152], [126.3822, -8.9575], [125.408, -9.2758], [125.0678, -9.5119]]]
      },
      "properties": {
        "id": "TL",
        "name": "Timor-Leste"
      },
      "id": "TL"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[-175.162, -21.1694], [-175.1567, -21.2635], [-175.3353, -21.158], [-175.2255, -21.1189], [-175.162, -21.1694]]]
      },
      "properties": {
        "id": "TO",
        "name": "Tonga"
      },
      "id": "TO"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[-61.0121, 10.1343], [-61.5967, 10.0646], [-61.4649, 10.5391], [-61.0338, 10.6701], [-61.0121, 10.1343]]]
      },
      "properties": {
        "id": "TT",
        "name": "Trinidad and Tobago"
      },
      "id": "TT"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[11.5043, 33.182], [11.5047, 32.4137], [10.8264, 32.0807], [10.1149, 31.4637], [10.2161, 30.7833], [9.8952, 30.3873], [9.5187, 30.2292], [9.0438, 32.0723], [8.3332, 32.5437], [8.2111, 32.9268], [7.7627, 33.2331], [7.5, 33.8323], [7.5138, 34.0804], [8.2457, 34.7339], [8.3944, 35.204], [8.2457, 35.8707], [8.3486, 36.3679], [8.2306, 36.5454], [8.5764, 36.9374], [9.6878, 37.3405], [10.1962, 37.2059], [10.5712, 36.8796], [11.1266, 36.8739], [10.5255, 36.3235], [10.5908, 35.8871], [11.0044, 35.6336], [11.1199, 35.2404], [10.5349, 34.5448], [10.0647, 34.2119], [10.1589, 33.8501], [10.7226, 33.5145], [11.0844, 33.5629], [11.2025, 33.2491], [11.5043, 33.182]]]
      },
      "properties": {
        "id": "TN",
        "name": "Tunisia"
      },
      "id": "TN"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [[[[41.5101, 41.5175], [42.4663, 41.4398], [42.7876, 41.5636], [43.4392, 41.1073], [43.7225, 40.7193], [43.5693, 40.4823], [43.7918, 40.0703], [44.2893, 40.0406], [44.7683, 39.7037], [44.8172, 39.6504], [44.023, 39.3774], [44.4309, 38.3569], [44.2112, 37.9081], [44.5614, 37.7448], [44.7651, 37.1424], [44.2817, 36.9782], [44.1561, 37.2832], [43.516, 37.2445], [42.7748, 37.3719], [42.3588, 37.1087], [42.2683, 37.2765], [41.5154, 37.0892], [40.7057, 37.0976], [40.0164, 36.8259], [39.3568, 36.6816], [38.7669, 36.6932], [38.1916, 36.9014], [37.4365, 36.6435], [36.6583, 36.8024], [36.1274, 35.8316], [35.8926, 35.9165], [35.8109, 36.3097], [36.1883, 36.659], [36.0489, 36.9107], [35.5375, 36.5969], [34.6013, 36.7846], [33.6945, 36.1819], [32.7948, 36.0358], [32.3775, 36.1836], [32.0219, 36.5352], [31.3525, 36.8011], [30.644, 36.8655], [30.4838, 36.3106], [29.6893, 36.1566], [29.1433, 36.3971], [29.0381, 36.6937], [28.4837, 36.8037], [28.1339, 37.0297], [27.3491, 37.0195], [27.0778, 37.6875], [27.2324, 37.9787], [26.6827, 38.1984], [26.7636, 38.7098], [27.0134, 38.887], [26.6819, 39.2922], [26.1132, 39.4676], [26.1812, 39.99], [26.7378, 40.4002], [27.4755, 40.3198], [28.2893, 40.4033], [29.3648, 40.8094], [29.3221, 41.2275], [31.2548, 41.1077], [31.4582, 41.3199], [32.3065, 41.7296], [33.3816, 42.0177], [34.7505, 41.9569], [35.2977, 41.7288], [36.0515, 41.6826], [36.5096, 41.2627], [38.3811, 40.9244], [39.4265, 41.1064], [40.2655, 40.9612], [40.9597, 41.2116], [41.5101, 41.5175]]], [[[28.0144, 41.9689], [28.3465, 41.4664], [29.0572, 41.2298], [28.7801, 40.9741], [28.1721, 41.0806], [27.4996, 40.9732], [27.258, 40.6873], [26.1053, 40.6115], [26.0392, 40.7269], [26.6246, 41.4015], [26.3209, 41.7167], [26.6154, 41.9649], [27.295, 42.0793], [28.0144, 41.9689]]]]
      },
      "properties": {
        "id": "TR",
        "name": "Türkiye"
      },
      "id": "TR"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[121.0089, 22.6205], [120.5814, 22.3563], [120.3258, 22.5423], [120.0724, 23.1496], [120.1589, 23.709], [121.0405, 25.0326], [121.5936, 25.2754], [121.9291, 24.9735], [121.2957, 22.9667], [121.0089, 22.6205]]]
      },
      "properties": {
        "id": "TW",
        "name": "Taiwan"
      },
      "id": "TW"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[33.9031, -1.0022], [33.9794, -1.0022], [36.2633, -2.2747], [37.6437, -3.0453], [37.6087, -3.4604], [37.7974, -3.6744], [39.2218, -4.6922], [38.8193, -5.8778], [38.8738, -6.3315], [39.4722, -6.8787], [39.5192, -7.1243], [39.2885, -7.518], [39.4411, -8.0116], [39.304, -8.4439], [39.7839, -9.9146], [40.4634, -10.4641], [39.9889, -10.821], [39.3217, -11.1223], [38.7947, -11.229], [38.4916, -11.4132], [37.9203, -11.2946], [37.5417, -11.675], [36.9788, -11.5667], [36.5185, -11.7164], [35.7853, -11.4531], [35.6312, -11.5818], [34.9595, -11.5783], [34.608, -11.0806], [34.6617, -10.71], [34.5241, -10.0299], [34.3208, -9.7316], [32.92, -9.4072], [32.4334, -9.1564], [31.9424, -9.0538], [31.3508, -8.6069], [31.0764, -8.6117], [30.751, -8.1936], [30.3133, -7.2037], [29.7097, -6.617], [29.4801, -6.0251], [29.5943, -5.651], [29.3425, -4.9829], [29.4034, -4.4493], [29.7177, -4.456], [30.1469, -4.0854], [30.4253, -3.5891], [30.79, -3.2744], [30.5149, -2.9175], [30.5536, -2.4], [30.8287, -2.3386], [30.8128, -1.5631], [30.51, -1.0673], [30.7421, -1.0074], [32.3717, -1.0022], [33.9031, -1.0022]]]
      },
      "properties": {
        "id": "TZ",
        "name": "Tanzania"
      },
      "id": "TZ"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[33.9031, -1.0022], [32.3717, -1.0022], [30.7421, -1.0074], [30.51, -1.0673], [30.1017, -1.3687], [29.5769, -1.3878], [29.5619, -0.9772], [29.7177, 0.0983], [29.9343, 0.4992], [29.9427, 0.8192], [30.9424, 1.683], [31.2527, 2.0448], [31.1763, 2.2703], [30.7284, 2.4554], [30.8384, 3.4905], [31.1523, 3.7858], [31.48, 3.6805], [31.7982, 3.8026], [32.0996, 3.5291], [32.3357, 3.7063], [32.8382, 3.7986], [33.4895, 3.7551], [33.9759, 4.2203], [34.165, 3.8128], [34.3927, 3.6916], [34.4478, 3.1634], [34.7425, 2.8181], [34.964, 2.0626], [34.9653, 1.6435], [34.7873, 1.2307], [34.4814, 1.042], [33.9431, 0.1738], [33.9031, -1.0022]]]
      },
      "properties": {
        "id": "UG",
        "name": "Uganda"
      },
      "id": "UG"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[38.2142, 47.0914], [37.5434, 47.0745], [37.3398, 46.9169], [36.2792, 46.6586], [35.827, 46.6244], [34.8495, 46.1898], [35.0231, 45.7011], [35.5579, 45.3109], [36.1705, 45.4529], [36.3934, 45.0654], [35.5695, 45.1191], [35.0879, 44.8027], [34.7168, 44.8071], [33.9098, 44.3876], [33.4508, 44.5536], [33.555, 45.0979], [32.508, 45.4037], [33.6647, 45.947], [33.2023, 46.1757], [32.4768, 46.0838], [32.0356, 46.2608], [31.9744, 46.7087], [30.7963, 46.5521], [30.2192, 45.8667], [29.6017, 45.6825], [29.7061, 45.2599], [29.2236, 45.4028], [28.7606, 45.2342], [28.2124, 45.4503], [28.9475, 46.05], [29.1464, 46.5267], [29.838, 46.3505], [29.8779, 46.829], [29.5493, 47.2467], [29.1597, 47.4558], [29.1948, 47.8824], [27.5492, 48.4777], [26.6189, 48.2597], [26.1626, 47.9925], [25.4644, 47.9108], [24.8934, 47.7177], [23.2026, 48.0843], [22.8763, 47.9472], [22.132, 48.4053], [22.5387, 49.0727], [22.6496, 49.539], [23.7118, 50.3773], [24.1056, 50.8449], [23.6053, 51.5179], [24.3616, 51.8675], [25.925, 51.9136], [27.1422, 51.752], [27.2701, 51.6135], [28.5991, 51.5427], [29.1357, 51.6173], [29.3465, 51.3825], [30.533, 51.5965], [30.9806, 52.0461], [31.7635, 52.1011], [32.508, 52.3084], [33.7353, 52.3449], [34.3977, 51.7804], [34.2808, 51.3117], [35.3121, 51.0438], [35.4115, 50.5398], [36.3059, 50.2805], [37.4228, 50.4115], [38.0469, 49.9201], [38.2586, 50.0523], [39.1748, 49.8559], [39.7807, 49.5721], [40.0701, 49.2003], [39.6866, 49.0079], [39.9609, 48.2379], [39.7359, 47.8446], [38.9005, 47.8553], [38.2874, 47.5592], [38.2142, 47.0914]]]
      },
      "properties": {
        "id": "UA",
        "name": "Ukraine"
      },
      "id": "UA"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[-53.3707, -33.7422], [-53.7853, -34.3806], [-54.1686, -34.6708], [-54.9024, -34.9327], [-55.6732, -34.7756], [-56.118, -34.9079], [-56.8553, -34.6767], [-57.1707, -34.4525], [-57.8292, -34.4773], [-58.4002, -33.9123], [-58.3534, -33.2602], [-58.0824, -32.8936], [-58.2011, -32.4718], [-58.189, -31.924], [-57.8105, -30.8587], [-57.8724, -30.5911], [-57.609, -30.188], [-57.2143, -30.2835], [-56.8329, -30.1072], [-56.1761, -30.6283], [-55.8736, -31.0696], [-55.5573, -30.876], [-55.2546, -31.2258], [-54.5876, -31.4851], [-54.2206, -31.8553], [-53.7618, -32.0568], [-53.6018, -32.403], [-53.1255, -32.7368], [-53.5314, -33.1709], [-53.3707, -33.7422]]]
      },
      "properties": {
        "id": "UY",
        "name": "Uruguay"
      },
      "id": "UY"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [[[[-141.0021, 69.6509], [-141.0021, 67.021], [-141.0021, 64.6832], [-141.0021, 62.9301], [-141.0021, 60.3003], [-139.1852, 60.0837], [-137.5933, 59.2263], [-137.4386, 58.9031], [-136.5787, 59.1522], [-136.3219, 59.6049], [-135.4758, 59.7933], [-134.9439, 59.2882], [-133.8208, 58.7049], [-131.8661, 56.7929], [-131.5751, 56.5989], [-130.4772, 56.2307], [-130.0251, 55.8882], [-130.0366, 55.2978], [-130.2142, 55.0259], [-130.5753, 54.7696], [-131.0478, 55.1576], [-130.9187, 55.7359], [-131.2875, 56.012], [-131.8439, 56.1601], [-132.8143, 57.0408], [-133.4659, 57.1722], [-133.5542, 57.695], [-134.0634, 58.2111], [-134.7761, 58.4539], [-135.3025, 58.2559], [-135.8618, 58.5771], [-136.5827, 58.2452], [-137.544, 58.5811], [-138.3525, 59.0874], [-140.2168, 59.7265], [-140.8432, 59.749], [-141.6702, 59.9698], [-142.9457, 60.0969], [-143.8051, 60.0129], [-144.9012, 60.3351], [-145.8989, 60.4783], [-146.8742, 61.005], [-148.3445, 60.8536], [-148.1976, 60.1678], [-148.4306, 59.9891], [-149.4323, 60.0011], [-150.9608, 59.244], [-151.7383, 59.1886], [-151.7345, 59.9882], [-151.4515, 60.2027], [-151.3217, 60.7428], [-150.4412, 61.0236], [-150.6124, 61.3013], [-151.7341, 60.9106], [-151.7505, 60.7548], [-153.1061, 59.875], [-154.0883, 59.3632], [-154.1297, 59.1199], [-153.327, 58.8843], [-154.0199, 58.493], [-154.2469, 58.1594], [-155.0069, 58.016], [-156.4784, 57.328], [-156.4751, 57.1051], [-157.5784, 56.6344], [-158.4144, 56.4358], [-158.2757, 56.1963], [-159.5232, 55.8101], [-159.9623, 55.7948], [-161.0995, 55.4057], [-161.7416, 55.391], [-162.0741, 55.1394], [-162.8651, 54.9544], [-162.9621, 55.1838], [-162.1571, 55.7195], [-161.2156, 56.0214], [-160.8514, 55.7719], [-160.3021, 56.3141], [-159.2831, 56.6885], [-158.3209, 57.2978], [-157.6076, 57.6014], [-157.5236, 58.4213], [-158.5032, 58.8503], [-159.0827, 58.4697], [-159.6702, 58.9111], [-160.3631, 59.0512], [-161.7554, 58.6119], [-161.8286, 59.5887], [-162.2426, 60.1782], [-163.2194, 59.8455], [-163.9069, 59.8067], [-164.6622, 60.3038], [-165.3538, 60.5413], [-164.8051, 60.892], [-165.5659, 61.1024], [-166.0789, 61.8031], [-165.1944, 62.4736], [-164.409, 63.2151], [-163.359, 63.0457], [-161.974, 63.453], [-161.0998, 63.558], [-160.7786, 63.819], [-160.932, 64.5792], [-161.7594, 64.8162], [-162.807, 64.3743], [-163.7132, 64.5883], [-164.8995, 64.4606], [-166.1428, 64.5827], [-167.4039, 65.4221], [-168.0884, 65.6579], [-164.6742, 66.5549], [-163.7755, 66.5312], [-163.6954, 66.0838], [-161.8164, 66.0536], [-161.557, 66.2505], [-160.2317, 66.4202], [-160.8641, 66.6708], [-161.8566, 66.7003], [-161.9653, 67.0497], [-163.0016, 67.0272], [-163.7205, 67.1955], [-164.1251, 67.6067], [-166.3805, 68.425], [-166.2091, 68.8854], [-164.3024, 68.9364], [-163.1614, 69.3878], [-162.9521, 69.758], [-161.881, 70.3318], [-160.9963, 70.3045], [-159.3144, 70.8784], [-157.9985, 70.8454], [-156.7833, 71.319], [-155.1669, 71.0992], [-154.1953, 70.8009], [-153.2329, 70.9326], [-152.233, 70.8104], [-151.9447, 70.4521], [-149.2694, 70.5007], [-147.7053, 70.2173], [-145.8232, 70.16], [-145.1973, 70.0087], [-143.2184, 70.1163], [-141.4078, 69.6533], [-141.0021, 69.6509]]], [[[-171.4631, 63.6401], [-170.4303, 63.6989], [-169.7778, 63.0936], [-171.4631, 63.6401]]], [[[-166.1355, 60.3835], [-165.7298, 60.3143], [-165.5917, 59.9132], [-166.1876, 59.7738], [-167.1389, 60.0086], [-166.1355, 60.3835]]], [[[-134.6802, 58.1616], [-133.9611, 57.6143], [-133.9253, 57.3368], [-134.4354, 57.057], [-134.66, 57.638], [-134.6802, 58.1616]]], [[[-135.7304, 58.2441], [-135.002, 58.0511], [-135.0848, 57.5111], [-136.0767, 57.6747], [-136.5124, 58.0959], [-135.7304, 58.2441]]], [[[-152.8979, 57.8238], [-152.4121, 57.4547], [-153.7933, 56.9895], [-154.3391, 56.9209], [-154.7059, 57.3353], [-154.2813, 57.638], [-153.8184, 57.5956], [-152.8979, 57.8238]]], [[[-134.9698, 57.3515], [-134.6207, 56.7183], [-135.787, 57.3173], [-134.9698, 57.3515]]], [[[-133.7078, 57.0627], [-133.0708, 56.9742], [-132.9592, 56.677], [-133.6028, 56.4641], [-133.7078, 57.0627]]], [[[-133.566, 56.3392], [-133.2029, 56.3199], [-131.9764, 55.2086], [-131.9809, 54.8049], [-132.7823, 55.0484], [-133.447, 55.797], [-133.566, 56.3392]]], [[[-130.9792, 55.4891], [-131.0827, 55.2668], [-131.8111, 55.223], [-131.6249, 55.8316], [-131.2694, 55.9555], [-130.9792, 55.4891]]], [[[-163.511, 55.0142], [-163.358, 54.7356], [-164.5907, 54.4042], [-164.8877, 54.6078], [-164.5297, 54.8808], [-163.511, 55.0142]]], [[[-166.3847, 53.7205], [-167.136, 53.5265], [-166.9782, 53.9628], [-166.3847, 53.7205]]], [[[-93.378, 48.6165], [-93.3769, 48.617], [-93.2579, 48.629], [-92.9962, 48.6117], [-91.5184, 48.0582], [-90.8403, 48.2007], [-89.5776, 48.0019], [-90.5975, 47.6878], [-92.0644, 46.8188], [-91.8356, 46.7021], [-90.9461, 46.9538], [-90.4689, 46.584], [-89.3551, 46.8819], [-88.8297, 47.1458], [-87.6375, 46.8265], [-87.3581, 46.5244], [-86.6376, 46.453], [-86.2313, 46.6563], [-85.0146, 46.7834], [-85.0343, 46.5058], [-84.5284, 46.436], [-84.3275, 46.4915], [-83.9787, 45.9616], [-84.8019, 45.8743], [-85.3859, 46.1087], [-87.0848, 45.7298], [-87.8302, 44.9424], [-87.3374, 44.7758], [-87.9017, 43.2449], [-87.7975, 42.2114], [-87.5147, 41.7206], [-87.2532, 41.6377], [-86.6325, 41.9113], [-86.2995, 42.4176], [-86.2215, 42.9004], [-86.5421, 43.6373], [-86.5192, 44.0738], [-86.237, 44.7202], [-85.3756, 45.277], [-84.772, 45.7948], [-83.4785, 45.3389], [-83.3306, 44.3752], [-83.9157, 43.7006], [-83.4689, 43.7308], [-82.9472, 44.0669], [-82.6633, 43.8542], [-82.4173, 43.0174], [-82.5755, 42.6044], [-82.8817, 42.3798], [-83.0732, 42.3003], [-83.4563, 41.7424], [-82.5243, 41.407], [-81.7233, 41.511], [-81.2287, 41.7704], [-80.3345, 42.0409], [-79.2092, 42.5552], [-78.8778, 42.7991], [-79.0661, 43.1061], [-79.0592, 43.278], [-78.1749, 43.3946], [-76.9765, 43.2775], [-76.2027, 43.5745], [-76.2377, 44.1832], [-75.7919, 44.4969], [-75.1794, 44.8994], [-74.7088, 45.0038], [-71.5174, 45.0078], [-71.3272, 45.2901], [-70.898, 45.2625], [-70.2963, 45.9062], [-70.0078, 46.7087], [-69.243, 47.4629], [-68.8288, 47.2033], [-68.311, 47.3546], [-67.8067, 47.0829], [-67.7846, 45.7016], [-67.4328, 45.603], [-67.4725, 45.2759], [-67.1249, 45.1693], [-67.1067, 44.8853], [-67.9071, 44.4538], [-68.2775, 44.5075], [-69.7916, 43.8053], [-70.1789, 43.7661], [-70.829, 42.8252], [-71.0463, 42.3311], [-70.7382, 42.229], [-70.4046, 41.6271], [-70.6572, 41.5343], [-71.4264, 41.6333], [-71.5228, 41.3789], [-72.8472, 41.2657], [-73.5831, 41.022], [-74.2268, 40.6079], [-73.9575, 40.3282], [-74.1761, 39.7268], [-74.429, 39.3873], [-74.897, 39.1453], [-75.3922, 39.0929], [-75.036, 38.5034], [-75.6592, 37.9539], [-76.2948, 38.4946], [-76.2635, 37.3568], [-75.8905, 36.6568], [-76.4789, 36.0283], [-75.7722, 35.8999], [-75.7739, 35.647], [-76.513, 35.2705], [-76.745, 34.9412], [-77.7508, 34.2851], [-78.0134, 33.9118], [-78.5778, 33.8732], [-78.9202, 33.6587], [-79.276, 33.1354], [-80.8492, 32.114], [-81.5203, 30.8747], [-81.2496, 29.7938], [-80.9, 29.0498], [-80.524, 28.4861], [-80.6501, 28.1812], [-80.2262, 27.2072], [-80.0413, 26.5685], [-80.1263, 25.8334], [-80.3669, 25.3313], [-80.7366, 25.1564], [-81.0977, 25.3193], [-81.365, 25.8312], [-81.7154, 25.983], [-81.8666, 26.4348], [-82.4414, 27.0599], [-82.6609, 27.7186], [-82.8436, 27.846], [-82.6607, 28.4857], [-82.6516, 28.8873], [-83.2906, 29.452], [-83.6943, 29.9261], [-84.0443, 30.1036], [-84.3828, 29.9075], [-85.3189, 29.6802], [-85.3536, 29.8759], [-86.2574, 30.4929], [-87.7903, 30.2918], [-88.9051, 30.4152], [-89.5885, 30.1658], [-90.2253, 30.3793], [-90.413, 30.1405], [-89.5894, 29.9149], [-90.1014, 29.1817], [-90.3793, 29.2953], [-90.7511, 29.1311], [-91.2902, 29.2892], [-91.331, 29.5137], [-91.8932, 29.836], [-92.2607, 29.5568], [-93.1756, 29.7791], [-93.6948, 29.7698], [-94.8883, 29.3707], [-95.2734, 28.9638], [-95.8534, 28.6402], [-96.4487, 28.5944], [-96.5616, 28.3672], [-97.1564, 28.1443], [-97.1715, 27.8797], [-97.5546, 26.9675], [-97.4023, 26.3967], [-97.1462, 25.9617], [-97.3582, 25.8707], [-98.0828, 26.0643], [-99.1078, 26.4469], [-99.4435, 27.0368], [-99.5053, 27.5481], [-100.2961, 28.3276], [-100.6587, 29.0685], [-101.4404, 29.7769], [-102.269, 29.871], [-102.7342, 29.6438], [-102.892, 29.2163], [-103.2577, 29.001], [-104.1107, 29.3864], [-104.5039, 29.6775], [-104.9179, 30.5835], [-106.2558, 31.5445], [-106.4533, 31.77], [-108.2118, 31.7794], [-108.2145, 31.3293], [-111.0421, 31.3243], [-112.939, 31.916], [-114.836, 32.5082], [-114.7248, 32.7155], [-117.1283, 32.5335], [-117.4674, 33.2957], [-118.5063, 34.0175], [-119.1437, 34.112], [-119.6061, 34.4178], [-120.4812, 34.4715], [-120.6448, 34.5798], [-120.6336, 35.0766], [-120.8603, 35.3656], [-121.8774, 36.3309], [-121.79, 36.7323], [-122.3948, 37.2077], [-122.4669, 37.838], [-122.9681, 38.0968], [-122.9865, 38.277], [-123.7012, 38.9074], [-123.8845, 39.8608], [-124.324, 40.2519], [-124.3717, 40.4912], [-124.0685, 41.3843], [-124.5397, 42.8127], [-124.1486, 43.6916], [-123.9293, 45.5768], [-124.0716, 46.7447], [-124.3761, 47.6586], [-124.6212, 47.9042], [-124.6326, 48.3751], [-123.9757, 48.1682], [-122.2421, 48.0107], [-122.7888, 48.993], [-120.5544, 48.993], [-118.849, 48.993], [-116.2906, 48.993], [-113.7322, 48.993], [-112.0268, 48.993], [-109.4684, 48.993], [-106.4839, 48.993], [-104.352, 48.993], [-101.7935, 48.993], [-99.2354, 48.993], [-97.5298, 48.9933], [-95.162, 48.9917], [-94.6209, 48.7426], [-93.7078, 48.5256], [-93.378, 48.6165]]], [[[-72.5098, 40.9862], [-73.1943, 40.6541], [-73.5738, 40.9195], [-72.5098, 40.9862]]], [[[-155.5353, 19.1089], [-155.8814, 19.0706], [-156.0487, 19.7499], [-155.8317, 20.2759], [-155.1988, 19.9945], [-154.8043, 19.5243], [-155.5353, 19.1089]]]]
      },
      "properties": {
        "id": "US",
        "name": "United States"
      },
      "id": "US"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[70.9468, 42.2485], [70.842, 42.0195], [70.1811, 41.5716], [70.7826, 41.2627], [71.4084, 41.1361], [71.7924, 41.4131], [72.6585, 40.8698], [73.113, 40.7859], [71.6925, 40.1524], [70.958, 40.2391], [70.3825, 40.4534], [70.751, 40.7397], [70.4416, 41.0234], [69.7128, 40.6572], [69.2063, 40.5666], [69.228, 40.1875], [68.6528, 40.1827], [68.4633, 39.5368], [67.7192, 39.6216], [67.3495, 39.2421], [67.6766, 39.0086], [68.1037, 38.962], [68.0477, 38.6695], [68.2942, 38.0329], [67.8143, 37.4869], [67.7592, 37.1721], [67.069, 37.3347], [66.5221, 37.3484], [66.5744, 38.0107], [65.8571, 38.2686], [65.613, 38.2384], [64.1628, 38.9535], [62.6505, 39.8586], [61.9029, 41.0936], [60.455, 41.2218], [60.0896, 41.3993], [60.107, 41.9076], [59.8584, 42.2951], [59.4508, 42.2996], [58.5888, 42.7785], [58.2595, 42.688], [57.8143, 42.1899], [57.3818, 42.1562], [56.9642, 41.8566], [57.0179, 41.2635], [55.9774, 41.3221], [55.977, 42.47], [55.9756, 44.9949], [58.5552, 45.5555], [61.008, 44.3939], [61.1607, 44.1689], [61.9904, 43.4923], [63.2071, 43.6282], [64.4433, 43.5513], [64.9055, 43.7147], [65.4963, 43.3108], [65.803, 42.877], [66.1004, 42.9908], [66.0094, 42.0048], [66.4986, 41.9951], [66.6686, 41.2707], [66.8142, 41.1423], [67.9359, 41.1965], [68.2919, 40.6562], [69.0651, 41.367], [70.0954, 41.8206], [70.4159, 42.0785], [70.9468, 42.2485]]]
      },
      "properties": {
        "id": "UZ",
        "name": "Uzbekistan"
      },
      "id": "UZ"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[12.4392, 41.8983], [12.4307, 41.8974], [12.4307, 41.9054], [12.4383, 41.9063], [12.4392, 41.8983]]]
      },
      "properties": {
        "id": "VA",
        "name": "Vatican City"
      },
      "id": "VA"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[-61.1745, 13.1581], [-61.2773, 13.2096], [-61.1821, 13.356], [-61.124, 13.2939], [-61.1745, 13.1581]]]
      },
      "properties": {
        "id": "VC",
        "name": "Saint Vincent and the Grenadines"
      },
      "id": "VC"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[-60.0175, 8.5491], [-59.8315, 8.3059], [-60.0324, 8.0537], [-60.5136, 7.8132], [-60.7192, 7.4989], [-60.3951, 6.9453], [-61.1457, 6.6946], [-61.1286, 6.2143], [-61.3768, 5.9071], [-60.7422, 5.2022], [-60.6046, 4.9944], [-61.0028, 4.5355], [-62.1531, 4.0982], [-62.7122, 4.0179], [-62.9685, 3.594], [-63.2948, 3.9224], [-64.0215, 3.9291], [-64.2556, 4.1404], [-64.5679, 3.8998], [-64.2212, 3.5873], [-64.2188, 3.2046], [-63.9243, 2.4523], [-63.3894, 2.4118], [-63.394, 2.2224], [-64.0354, 1.9045], [-64.1149, 1.6191], [-65.1037, 1.1082], [-65.3609, 0.8685], [-65.6814, 0.9835], [-66.06, 0.7854], [-66.4293, 0.8219], [-66.8761, 1.2231], [-67.2108, 2.3901], [-67.8347, 2.8926], [-67.3111, 3.4159], [-67.6616, 3.8643], [-67.8553, 4.5071], [-67.825, 5.2706], [-67.4394, 6.0256], [-67.8591, 6.2898], [-68.4717, 6.1565], [-69.4392, 6.1348], [-70.095, 6.9378], [-70.6552, 7.083], [-71.0134, 6.9946], [-72.0843, 7.0967], [-72.443, 7.4549], [-72.4166, 8.3817], [-72.6653, 8.6276], [-72.7963, 9.1089], [-73.3563, 9.2269], [-73.0065, 9.7894], [-72.8693, 10.4911], [-72.6903, 10.8361], [-72.2486, 11.1965], [-71.958, 11.6666], [-71.3197, 11.8618], [-71.8686, 11.6275], [-71.9469, 11.4145], [-71.5943, 10.6572], [-72.1129, 9.8156], [-71.6869, 9.0725], [-71.2979, 9.1257], [-71.0858, 9.3482], [-71.0527, 9.7059], [-71.3867, 10.2639], [-71.5445, 10.7788], [-71.4695, 10.9643], [-70.2326, 11.3732], [-70.2866, 11.8858], [-70.004, 12.1779], [-69.6316, 11.4801], [-68.8279, 11.4317], [-68.3987, 11.161], [-68.234, 10.5693], [-67.8716, 10.472], [-66.9891, 10.6105], [-66.2471, 10.6323], [-65.8518, 10.2577], [-65.1292, 10.0699], [-64.8504, 10.0979], [-63.8734, 10.6638], [-62.7024, 10.7499], [-62.8429, 10.4179], [-62.5151, 10.176], [-60.7924, 9.3606], [-61.0531, 9.0951], [-61.304, 8.4102], [-60.801, 8.5921], [-60.0175, 8.5491]]]
      },
      "properties": {
        "id": "VE",
        "name": "Venezuela"
      },
      "id": "VE"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[-64.3952, 18.4648], [-64.4261, 18.5131], [-64.3246, 18.5176], [-64.3952, 18.4648]]]
      },
      "properties": {
        "id": "VG",
        "name": "British Virgin Islands"
      },
      "id": "VG"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[-64.7656, 17.7945], [-64.6862, 17.7062], [-64.889, 17.7017], [-64.8848, 17.7723], [-64.7656, 17.7945]]]
      },
      "properties": {
        "id": "VI",
        "name": "US Virgin Islands"
      },
      "id": "VI"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[107.9727, 21.5081], [107.4098, 21.2848], [107.3543, 21.0554], [106.6757, 20.9603], [106.7533, 20.7348], [106.5182, 20.2887], [105.9841, 19.939], [105.6218, 18.9664], [105.8882, 18.5025], [106.499, 17.9463], [106.479, 17.7195], [107.1803, 16.8978], [108.0295, 16.331], [108.8214, 15.378], [109.0846, 14.7161], [109.3036, 13.8563], [109.272, 13.2793], [109.4238, 12.9561], [109.2187, 12.6458], [109.1988, 11.7247], [108.8205, 11.3154], [108.2715, 10.9342], [107.2617, 10.3984], [106.8128, 10.4334], [106.5723, 9.6411], [105.5012, 9.0933], [105.3222, 8.8012], [104.8922, 8.5834], [104.8184, 8.8017], [104.8451, 9.606], [105.028, 10.0672], [104.6635, 10.1698], [104.4264, 10.4113], [104.8504, 10.5347], [105.3866, 10.9399], [106.1678, 11.0123], [105.8558, 11.2942], [105.8513, 11.6351], [106.3401, 11.6817], [106.4137, 11.9485], [106.9305, 12.0776], [107.5061, 12.3644], [107.4755, 13.0303], [107.6056, 13.4377], [107.3313, 14.1266], [107.5195, 14.705], [107.6531, 15.255], [107.1897, 15.7473], [107.3965, 16.0429], [106.6961, 16.4589], [106.5021, 16.9542], [105.6916, 17.7377], [105.458, 18.1545], [105.0856, 18.4501], [105.1149, 18.6787], [104.7164, 18.8034], [103.8965, 19.3401], [104.0319, 19.6753], [104.5463, 19.6105], [104.928, 20.0179], [104.6187, 20.3744], [104.5832, 20.6465], [104.0518, 20.9413], [103.635, 20.6971], [103.1046, 20.8916], [102.8511, 21.2658], [102.9487, 21.5698], [102.1276, 22.379], [102.5172, 22.7408], [103.0052, 22.4532], [103.3563, 22.7546], [104.3719, 22.7039], [104.7958, 22.9113], [104.8646, 23.1363], [105.2751, 23.3454], [105.8429, 22.9228], [106.5421, 22.9081], [106.7804, 22.7789], [106.5363, 22.3955], [106.7294, 22.0004], [107.3512, 21.6089], [107.9727, 21.5081]]]
      },
      "properties": {
        "id": "VN",
        "name": "Vietnam"
      },
      "id": "VN"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [[[[166.7458, -14.8267], [166.8101, -15.1573], [167.1316, -15.1352], [167.1994, -15.4858], [166.8257, -15.635], [166.6312, -15.406], [166.5274, -14.8502], [166.7458, -14.8267]]], [[[167.4125, -16.0958], [167.8364, -16.4496], [167.4494, -16.5551], [167.4125, -16.0958]]]]
      },
      "properties": {
        "id": "VU",
        "name": "Vanuatu"
      },
      "id": "VU"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [[[[35.4506, 31.4792], [34.9507, 31.6023], [34.956, 32.1611], [35.193, 32.5344], [35.5512, 32.3955], [35.5589, 31.7656], [35.4506, 31.4792]]], [[[34.2453, 31.2085], [34.1983, 31.3226], [34.4775, 31.5849], [34.2453, 31.2085]]]]
      },
      "properties": {
        "id": "PS",
        "name": "Palestinian Territories"
      },
      "id": "PS"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[-178.0467, -14.3184], [-178.1585, -14.3117], [-178.1423, -14.2425], [-178.0467, -14.3184]]]
      },
      "properties": {
        "id": "WF",
        "name": "Wallis and Futuna"
      },
      "id": "WF"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[-172.3335, -13.4652], [-172.225, -13.8044], [-172.5358, -13.7915], [-172.7441, -13.579], [-172.3335, -13.4652]]]
      },
      "properties": {
        "id": "WS",
        "name": "Samoa"
      },
      "id": "WS"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [[[[53.0854, 16.6484], [52.3277, 16.2937], [52.2177, 15.6554], [51.6037, 15.3367], [50.5269, 15.0384], [50.1669, 14.851], [49.3497, 14.638], [48.6683, 14.0503], [47.99, 14.048], [47.4077, 13.6614], [46.7888, 13.4657], [45.6574, 13.3388], [45.0387, 12.8158], [44.6178, 12.8171], [43.9298, 12.6165], [43.4753, 12.8388], [43.232, 13.2672], [43.2826, 13.6397], [43.089, 14.0108], [43.0211, 14.555], [42.717, 15.6545], [42.7992, 16.3719], [43.1649, 16.6892], [43.191, 17.3595], [43.418, 17.5162], [43.9169, 17.3249], [44.1557, 17.3986], [45.1482, 17.4274], [45.4066, 17.32], [46.3104, 17.2313], [46.6819, 17.2685], [46.9758, 16.9534], [47.4418, 17.1118], [47.5795, 17.4483], [48.172, 18.1568], [49.042, 18.582], [51.9775, 18.9961], [52.7291, 17.3004], [53.0854, 16.6484]]], [[[53.7632, 12.637], [54.1872, 12.664], [54.1295, 12.3608], [53.5982, 12.3422], [53.7632, 12.637]]]]
      },
      "properties": {
        "id": "YE",
        "name": "Yemen"
      },
      "id": "YE"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[31.2877, -22.4021], [31.5457, -23.4821], [31.7995, -23.8922], [31.9859, -24.4605], [31.9482, -25.9577], [31.4151, -25.7464], [31.2073, -25.8432], [30.8034, -26.4136], [30.7941, -26.7643], [31.0635, -27.1122], [31.4698, -27.2956], [31.9584, -27.3058], [32.1129, -26.8393], [32.8862, -26.8495], [32.5346, -28.1998], [32.2856, -28.6215], [31.7782, -28.9371], [31.3352, -29.3779], [30.2885, -30.9702], [28.8561, -32.2942], [27.8604, -33.0538], [27.0774, -33.5212], [26.4292, -33.7595], [25.9894, -33.7112], [25.6382, -34.0113], [25.0031, -33.9736], [24.8273, -34.1688], [23.5857, -33.9851], [23.2683, -34.0814], [22.2456, -34.0694], [21.7889, -34.3726], [21.06, -34.3646], [20.53, -34.4632], [20.0204, -34.7859], [19.6351, -34.7534], [18.8086, -34.1079], [18.3545, -33.9388], [18.4331, -33.7173], [17.8782, -32.9614], [18.251, -32.652], [18.3105, -32.1225], [18.2107, -31.7425], [17.6776, -31.019], [17.1893, -30.0997], [16.95, -29.4036], [16.4475, -28.6175], [16.7555, -28.4523], [17.0561, -28.0311], [17.3855, -28.3534], [17.448, -28.6984], [18.1027, -28.8719], [19.2458, -28.9016], [19.6715, -28.5039], [19.9804, -28.4516], [19.9804, -26.5312], [19.9804, -24.7769], [20.3454, -25.0299], [20.7932, -25.9155], [20.6267, -26.4438], [20.7399, -26.849], [21.6464, -26.8544], [22.0908, -26.5801], [22.6403, -26.0714], [22.8786, -25.4579], [23.2661, -25.2665], [23.8938, -25.6008], [24.7483, -25.8174], [25.5836, -25.6061], [25.9123, -24.7476], [26.3974, -24.6136], [26.8349, -24.2408], [27.1462, -23.5243], [27.8906, -23.0737], [28.2102, -22.6938], [28.8397, -22.4807], [29.3648, -22.194], [29.6631, -22.1464], [30.4602, -22.3288], [31.2877, -22.4021]], [[28.7367, -30.1019], [29.0979, -29.919], [29.3904, -29.2696], [29.3013, -29.0897], [28.6257, -28.5815], [27.7356, -28.9402], [27.2944, -29.5195], [27.0517, -29.6642], [27.3886, -30.3159], [28.0179, -30.6421], [28.3922, -30.1476], [28.7367, -30.1019]]]
      },
      "properties": {
        "id": "ZA",
        "name": "South Africa"
      },
      "id": "ZA"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[32.92, -9.4072], [33.351, -9.8623], [33.659, -10.5907], [33.2613, -10.8934], [33.3798, -11.1579], [33.2262, -11.5347], [33.2524, -12.1127], [33.3979, -12.49], [33.0216, -12.6303], [32.9679, -13.2251], [32.6722, -13.6104], [32.9922, -14.0224], [33.2017, -14.0135], [31.7289, -14.4959], [30.2316, -14.9905], [30.3959, -15.643], [29.7296, -15.6448], [28.9129, -15.9879], [28.7606, -16.5321], [27.9323, -16.8961], [27.0206, -17.9584], [25.8634, -17.9521], [25.2588, -17.7936], [24.9325, -17.5433], [24.2751, -17.4811], [23.3807, -17.6406], [22.1506, -16.5973], [21.9798, -15.9555], [21.9788, -13.001], [23.8431, -13.001], [23.9914, -12.4221], [23.9665, -10.8716], [24.3199, -11.0718], [24.5184, -11.4384], [25.1846, -11.2432], [25.3492, -11.6231], [26.0258, -11.8904], [26.5962, -11.972], [26.9495, -11.8989], [27.0459, -11.616], [27.5333, -12.1953], [28.3575, -12.4821], [29.0141, -13.3689], [29.5543, -13.249], [29.7954, -13.393], [29.7954, -12.1553], [29.4274, -12.4315], [29.0642, -12.3489], [28.4823, -11.8122], [28.3571, -11.4828], [28.639, -10.6692], [28.6302, -9.8311], [28.4006, -9.2247], [28.9178, -8.7005], [28.9723, -8.4648], [30.751, -8.1936], [31.0764, -8.6117], [31.3508, -8.6069], [31.9424, -9.0538], [32.4334, -9.1564], [32.92, -9.4072]]]
      },
      "properties": {
        "id": "ZM",
        "name": "Zambia"
      },
      "id": "ZM"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[31.2877, -22.4021], [30.4602, -22.3288], [29.6631, -22.1464], [29.3648, -22.194], [29.0371, -21.8113], [28.0455, -21.5729], [27.6695, -21.0643], [27.6997, -20.5308], [27.2807, -20.4787], [27.2217, -20.1458], [26.6783, -19.8928], [26.1683, -19.5381], [25.7613, -18.6496], [25.2241, -17.9152], [25.2588, -17.7936], [25.8634, -17.9521], [27.0206, -17.9584], [27.9323, -16.8961], [28.7606, -16.5321], [28.9129, -15.9879], [29.7296, -15.6448], [30.3959, -15.643], [30.4377, -15.9954], [31.2361, -16.0238], [31.9398, -16.4287], [32.2434, -16.4486], [32.9478, -16.7123], [32.9932, -18.3596], [32.7166, -19.0019], [33.0069, -19.8737], [32.4778, -20.7131], [32.3712, -21.335], [31.2877, -22.4021]]]
      },
      "properties": {
        "id": "ZW",
        "name": "Zimbabwe"
      },
      "id": "ZW"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [[[[4.2262, 51.3865], [3.5871, 51.4539], [4.4829, 52.3091], [4.7687, 52.9412], [5.1202, 52.3881], [5.5611, 52.5947], [5.3755, 53.0957], [6.0622, 53.407], [6.8164, 53.4413], [7.1973, 53.2824], [7.0352, 52.3801], [6.7417, 51.9109], [5.9486, 51.7624], [6.1932, 51.4888], [5.8948, 50.9843], [5.9939, 50.7504], [5.7973, 50.7546], [5.6937, 50.7745], [5.827, 51.1257], [4.5032, 51.4746], [4.2262, 51.3865]]], [[[4.2262, 51.3865], [3.9022, 51.2076], [3.35, 51.3776], [4.2262, 51.3865]]]]
      },
      "properties": {
        "id": "NL",
        "name": "Netherlands"
      },
      "id": "NL"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[-68.2059, 12.1447], [-68.2873, 12.1718], [-68.3712, 12.2574], [-68.3694, 12.3018], [-68.2196, 12.2312], [-68.2059, 12.1447]]]
      },
      "properties": {
        "id": "BQ",
        "name": "Bonair, Saint Eustachius and Saba"
      },
      "id": "BQ"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[166.6589, 19.2829], [166.6087, 19.3072], [166.6277, 19.3246], [166.6589, 19.3117], [166.6589, 19.2829]]]
      },
      "properties": {
        "id": "UM-WQ",
        "name": "Wake Island"
      },
      "id": "UM-WQ"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[-177.3881, 28.1865], [-177.3879, 28.2144], [-177.3646, 28.2042], [-177.3881, 28.1865]]]
      },
      "properties": {
        "id": "UM-MQ",
        "name": "Midway Islands"
      },
      "id": "UM-MQ"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[-169.5237, 16.7305], [-169.5388, 16.7243], [-169.5388, 16.7296], [-169.5237, 16.7305]]]
      },
      "properties": {
        "id": "UM-JQ",
        "name": "Johnston Atoll"
      },
      "id": "UM-JQ"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[-176.6311, 0.7952], [-176.6433, 0.7934], [-176.6429, 0.8081], [-176.6329, 0.8085], [-176.6311, 0.7952]]]
      },
      "properties": {
        "id": "UM-HQ",
        "name": "Howland Island"
      },
      "id": "UM-HQ"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[-176.4559, 0.2226], [-176.4615, 0.2151], [-176.4675, 0.2195], [-176.4559, 0.2226]]]
      },
      "properties": {
        "id": "UM-FQ",
        "name": "Baker Island"
      },
      "id": "UM-FQ"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[-160.0213, -0.3979], [-160.0453, -0.3803], [-160.0178, -0.3745], [-160.0213, -0.3979]]]
      },
      "properties": {
        "id": "UM-DQ",
        "name": "Jarvis Island"
      },
      "id": "UM-DQ"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[42.7579, -17.075], [42.7414, -17.074], [42.7379, -17.0519], [42.761, -17.0652], [42.7579, -17.075]]]
      },
      "properties": {
        "id": "JU",
        "name": "Juan De Nova Island"
      },
      "id": "JU"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[47.3029, -11.5752], [47.2821, -11.5747], [47.2789, -11.5575], [47.2971, -11.5543], [47.3029, -11.5752]]]
      },
      "properties": {
        "id": "GO",
        "name": "Glorioso Islands"
      },
      "id": "GO"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[-5.3345, 36.1624], [-5.3383, 36.1122], [-5.3562, 36.1263], [-5.3551, 36.1455], [-5.3345, 36.1624]]]
      },
      "properties": {
        "id": "GI",
        "name": "Gibraltar"
      },
      "id": "GI"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[3.4624, -54.4471], [3.3461, -54.4511], [3.3669, -54.3997], [3.4814, -54.4001], [3.4624, -54.4471]]]
      },
      "properties": {
        "id": "BV",
        "name": "Bouvet Island"
      },
      "id": "BV"
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[179.2223, -8.5541], [179.2023, -8.4652], [179.2312, -8.5047], [179.2223, -8.5541]]]
      },
      "properties": {
        "id": "TV",
        "name": "Tuvalu"
      },
      "id": "TV"
    }]
  };
  return map;
}();

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"animatedWorld": 0
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
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkgulp_scss_starter"] = self["webpackChunkgulp_scss_starter"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./src/blocks/modules/homePage/team/team.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=animatedWorld.js.map