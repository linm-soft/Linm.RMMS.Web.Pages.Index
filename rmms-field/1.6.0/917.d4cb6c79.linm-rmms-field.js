"use strict";
(self["webpackChunkrmms_field"] = self["webpackChunkrmms_field"] || []).push([[917],{

/***/ 5538
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  J: () => (/* binding */ RmmsOrgFormFields)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js + 2 modules
var defineProperty = __webpack_require__(4980);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(4726);
// EXTERNAL MODULE: ./node_modules/@linm-soft-org/linm-web-common-components/dist/index.js + 583 modules
var dist = __webpack_require__(8755);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__(5458);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__(296);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(467);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(4756);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ./src/search/searchDropdownDefaults.ts + 1 modules
var searchDropdownDefaults = __webpack_require__(6415);
// EXTERNAL MODULE: ./src/services/api.ts
var api = __webpack_require__(8724);
// EXTERNAL MODULE: ./src/services/attendance/lookups.ts
var lookups = __webpack_require__(8969);
;// ./src/services/org/orgFormLookups.ts




function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
;
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,defineProperty/* default */.A)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
;


var ORG_FORM_LOOKUP_PORTAL = _objectSpread(_objectSpread({}, searchDropdownDefaults/* SEARCH_DROPDOWN_PORTAL */.AA), {}, {
  dropdownMatch: 'row',
  dropdownMinWidth: '32rem'
});
function pagedItems(raw) {
  var _raw$items;
  return Array.isArray(raw) ? raw : (_raw$items = raw === null || raw === void 0 ? void 0 : raw.items) !== null && _raw$items !== void 0 ? _raw$items : [];
}
function toLookup(code, name) {
  var c = code.trim();
  return {
    value: c,
    label: name !== null && name !== void 0 && name.trim() ? "".concat(c, " \u2014 ").concat(name.trim()) : c
  };
}
function matchLookup(item, search) {
  var q = (search !== null && search !== void 0 ? search : '').trim().toLowerCase();
  if (!q) return true;
  return item.value.toLowerCase().includes(q) || item.label.toLowerCase().includes(q);
}
function searchOrgUnits(_x) {
  return _searchOrgUnits.apply(this, arguments);
}
function _searchOrgUnits() {
  _searchOrgUnits = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee8(opts) {
    var qs, res;
    return regenerator_default().wrap(function (_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          qs = new URLSearchParams();
          qs.set('page', '1');
          qs.set('pageSize', '100');
          if (opts.search) qs.set('search', opts.search);
          if (opts.kind) qs.set('kind', opts.kind);
          if (opts.parentCode) qs.set('parentCode', opts.parentCode);
          _context8.next = 1;
          return api/* apiClient */.u.get("/integration/org-units?".concat(qs));
        case 1:
          res = _context8.sent;
          return _context8.abrupt("return", pagedItems((0,api/* unwrap */.o)(res)));
        case 2:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  }));
  return _searchOrgUnits.apply(this, arguments);
}
function searchPartners(_x2) {
  return _searchPartners.apply(this, arguments);
}
function _searchPartners() {
  _searchPartners = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee9(opts) {
    var qs, res;
    return regenerator_default().wrap(function (_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          qs = new URLSearchParams();
          qs.set('page', '1');
          qs.set('pageSize', '100');
          if (opts !== null && opts !== void 0 && opts.search) qs.set('search', opts.search);
          if (opts !== null && opts !== void 0 && opts.zoneOrgCode) qs.set('zoneOrgCode', opts.zoneOrgCode);
          if (opts !== null && opts !== void 0 && opts.vpOrgCode) qs.set('vpOrgCode', opts.vpOrgCode);
          _context9.next = 1;
          return api/* apiClient */.u.get("/integration/partner-units/search?".concat(qs));
        case 1:
          res = _context9.sent;
          return _context9.abrupt("return", pagedItems((0,api/* unwrap */.o)(res)));
        case 2:
        case "end":
          return _context9.stop();
      }
    }, _callee9);
  }));
  return _searchPartners.apply(this, arguments);
}
function findOrgByCode(_x3) {
  return _findOrgByCode.apply(this, arguments);
}
function _findOrgByCode() {
  _findOrgByCode = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee0(code) {
    var needle, rows, hit, _t;
    return regenerator_default().wrap(function (_context0) {
      while (1) switch (_context0.prev = _context0.next) {
        case 0:
          needle = code.trim();
          if (needle) {
            _context0.next = 1;
            break;
          }
          return _context0.abrupt("return", {
            value: '',
            label: ''
          });
        case 1:
          _context0.prev = 1;
          _context0.next = 2;
          return searchOrgUnits({
            search: needle
          });
        case 2:
          rows = _context0.sent;
          hit = rows.find(function (r) {
            var _r$code2;
            return ((_r$code2 = r.code) !== null && _r$code2 !== void 0 ? _r$code2 : '').toUpperCase() === needle.toUpperCase();
          });
          if (!(hit !== null && hit !== void 0 && hit.code)) {
            _context0.next = 3;
            break;
          }
          return _context0.abrupt("return", toLookup(hit.code, hit.name));
        case 3:
          _context0.next = 5;
          break;
        case 4:
          _context0.prev = 4;
          _t = _context0["catch"](1);
        case 5:
          return _context0.abrupt("return", {
            value: needle,
            label: needle
          });
        case 6:
        case "end":
          return _context0.stop();
      }
    }, _callee0, null, [[1, 4]]);
  }));
  return _findOrgByCode.apply(this, arguments);
}
function findPartnerByCode(_x4) {
  return _findPartnerByCode.apply(this, arguments);
}
function _findPartnerByCode() {
  _findPartnerByCode = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee1(code) {
    var needle, rows, hit, _t2;
    return regenerator_default().wrap(function (_context1) {
      while (1) switch (_context1.prev = _context1.next) {
        case 0:
          needle = code.trim();
          if (needle) {
            _context1.next = 1;
            break;
          }
          return _context1.abrupt("return", {
            value: '',
            label: ''
          });
        case 1:
          _context1.prev = 1;
          _context1.next = 2;
          return searchPartners({
            search: needle
          });
        case 2:
          rows = _context1.sent;
          hit = rows.find(function (r) {
            var _r$code3;
            return ((_r$code3 = r.code) !== null && _r$code3 !== void 0 ? _r$code3 : '').toUpperCase() === needle.toUpperCase();
          });
          if (!(hit !== null && hit !== void 0 && hit.code)) {
            _context1.next = 3;
            break;
          }
          return _context1.abrupt("return", toLookup(hit.code, hit.name));
        case 3:
          _context1.next = 5;
          break;
        case 4:
          _context1.prev = 4;
          _t2 = _context1["catch"](1);
        case 5:
          return _context1.abrupt("return", {
            value: needle,
            label: needle
          });
        case 6:
        case "end":
          return _context1.stop();
      }
    }, _callee1, null, [[1, 4]]);
  }));
  return _findPartnerByCode.apply(this, arguments);
}
function lookupConfig(_search, detail) {
  return _objectSpread(_objectSpread({
    pageSize: 50,
    api: {
      getItemKey: function getItemKey(i) {
        return i.value;
      },
      search: function () {
        var _search2 = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee(_ref) {
          var q, items;
          return regenerator_default().wrap(function (_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                q = _ref.search;
                _context.next = 1;
                return _search(q);
              case 1:
                items = _context.sent;
                return _context.abrupt("return", {
                  items: items,
                  page: 1,
                  totalPages: 1
                });
              case 2:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
        function search(_x5) {
          return _search2.apply(this, arguments);
        }
        return search;
      }(),
      getDetail: detail
    },
    display: {
      getPrimaryDisplay: function getPrimaryDisplay(i) {
        return i.value;
      },
      getSecondaryDisplay: function getSecondaryDisplay(i) {
        return (0,searchDropdownDefaults/* catalogColumnName */.BW)(i.value, i.label);
      },
      getSingleDisplay: function getSingleDisplay(i) {
        return i.label;
      }
    }
  }, ORG_FORM_LOOKUP_PORTAL), {}, {
    columns: (0,searchDropdownDefaults/* catalogLookupColumns */.zz)(),
    header: (0,searchDropdownDefaults/* catalogLookupHeader */.hH)()
  });
}
function createVpOrgLookupConfig(options) {
  return lookupConfig(/*#__PURE__*/function () {
    var _ref2 = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee2(search) {
      var rows;
      return regenerator_default().wrap(function (_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 1;
            return searchOrgUnits({
              search: search,
              kind: 'VP',
              parentCode: (options === null || options === void 0 ? void 0 : options.parentCode) || undefined
            });
          case 1:
            rows = _context2.sent;
            return _context2.abrupt("return", rows.filter(function (r) {
              var _r$kind;
              return r.code && ((_r$kind = r.kind) !== null && _r$kind !== void 0 ? _r$kind : '').toUpperCase() === 'VP';
            }).map(function (r) {
              return toLookup(String(r.code), r.name);
            }));
          case 2:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function (_x6) {
      return _ref2.apply(this, arguments);
    };
  }(), /*#__PURE__*/function () {
    var _ref3 = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee3(id) {
      return regenerator_default().wrap(function (_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt("return", findOrgByCode(id));
          case 1:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function (_x7) {
      return _ref3.apply(this, arguments);
    };
  }());
}
var SU_GROUP = 'SU';
function loadAssigneeUnits(_x8) {
  return _loadAssigneeUnits.apply(this, arguments);
}
function _loadAssigneeUnits() {
  _loadAssigneeUnits = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee10(options) {
    var _options$vpOrgCode2, _options$zoneOrgCode2;
    var vp, zone, map, put, _yield$Promise$all, _yield$Promise$all2, su, partners, children, _iterator, _step, x, _iterator2, _step2, _x11, _iterator3, _step3, _x12;
    return regenerator_default().wrap(function (_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          vp = ((_options$vpOrgCode2 = options === null || options === void 0 ? void 0 : options.vpOrgCode) !== null && _options$vpOrgCode2 !== void 0 ? _options$vpOrgCode2 : '').trim().toUpperCase();
          zone = ((_options$zoneOrgCode2 = options === null || options === void 0 ? void 0 : options.zoneOrgCode) !== null && _options$zoneOrgCode2 !== void 0 ? _options$zoneOrgCode2 : '').trim().toUpperCase();
          map = new Map();
          put = function put(code, name, kind) {
            var key = code.trim().toUpperCase();
            var k = (kind !== null && kind !== void 0 ? kind : '').toUpperCase();
            if (!key || key === SU_GROUP || k === 'VP' || k === 'ROOM' || map.has(key)) return;
            if (vp && key === vp) return;
            map.set(key, toLookup(code, name));
          };
          _context10.next = 1;
          return Promise.all([vp ? Promise.resolve([]) : searchOrgUnits({
            kind: 'SU'
          }), searchPartners({
            zoneOrgCode: zone || undefined,
            vpOrgCode: vp || undefined
          }), vp ? searchOrgUnits({
            parentCode: vp
          }) : Promise.resolve([])]);
        case 1:
          _yield$Promise$all = _context10.sent;
          _yield$Promise$all2 = (0,slicedToArray/* default */.A)(_yield$Promise$all, 3);
          su = _yield$Promise$all2[0];
          partners = _yield$Promise$all2[1];
          children = _yield$Promise$all2[2];
          _iterator = _createForOfIteratorHelper(su);
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              x = _step.value;
              if (x.code) put(x.code, x.name, x.kind || 'SU');
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          _iterator2 = _createForOfIteratorHelper(children);
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              _x11 = _step2.value;
              if (_x11.code) put(_x11.code, _x11.name, _x11.kind);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
          _iterator3 = _createForOfIteratorHelper(partners);
          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              _x12 = _step3.value;
              if (_x12.code) put(_x12.code, _x12.name, 'PARTNER');
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
          return _context10.abrupt("return", (0,toConsumableArray/* default */.A)(map.values()));
        case 2:
        case "end":
          return _context10.stop();
      }
    }, _callee10);
  }));
  return _loadAssigneeUnits.apply(this, arguments);
}
function createAssigneeUnitLookupConfig(options) {
  var _options$vpOrgCode, _options$zoneOrgCode;
  var vp = ((_options$vpOrgCode = options === null || options === void 0 ? void 0 : options.vpOrgCode) !== null && _options$vpOrgCode !== void 0 ? _options$vpOrgCode : '').trim().toUpperCase();
  var zone = ((_options$zoneOrgCode = options === null || options === void 0 ? void 0 : options.zoneOrgCode) !== null && _options$zoneOrgCode !== void 0 ? _options$zoneOrgCode : '').trim().toUpperCase();
  return lookupConfig(/*#__PURE__*/function () {
    var _ref4 = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee4(search) {
      var items;
      return regenerator_default().wrap(function (_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 1;
            return loadAssigneeUnits({
              zoneOrgCode: zone || undefined,
              vpOrgCode: vp || undefined
            });
          case 1:
            items = _context4.sent;
            return _context4.abrupt("return", items.filter(function (i) {
              return matchLookup(i, search);
            }));
          case 2:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    return function (_x9) {
      return _ref4.apply(this, arguments);
    };
  }(), /*#__PURE__*/function () {
    var _ref5 = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee5(id) {
      var _org$value;
      var partner, org;
      return regenerator_default().wrap(function (_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 1;
            return findPartnerByCode(id);
          case 1:
            partner = _context5.sent;
            if (!(partner.label !== partner.value)) {
              _context5.next = 2;
              break;
            }
            return _context5.abrupt("return", partner);
          case 2:
            _context5.next = 3;
            return findOrgByCode(id);
          case 3:
            org = _context5.sent;
            if (!(((_org$value = org.value) !== null && _org$value !== void 0 ? _org$value : '').toUpperCase() === vp)) {
              _context5.next = 4;
              break;
            }
            return _context5.abrupt("return", partner);
          case 4:
            return _context5.abrupt("return", org);
          case 5:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    }));
    return function (_x0) {
      return _ref5.apply(this, arguments);
    };
  }());
}
var ZONE_ORG_FORM_CONFIG = lookupConfig(/*#__PURE__*/function () {
  var _ref6 = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee6(search) {
    var rows;
    return regenerator_default().wrap(function (_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 1;
          return searchOrgUnits({
            search: search,
            kind: 'REG'
          });
        case 1:
          rows = _context6.sent;
          return _context6.abrupt("return", rows.filter(function (r) {
            var _r$code;
            return r.code && ((_r$code = r.code) !== null && _r$code !== void 0 ? _r$code : '').toUpperCase() !== 'REG';
          }).map(function (r) {
            return toLookup(String(r.code), r.name);
          }));
        case 2:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function (_x1) {
    return _ref6.apply(this, arguments);
  };
}(), /*#__PURE__*/function () {
  var _ref7 = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee7(id) {
    return regenerator_default().wrap(function (_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          return _context7.abrupt("return", findOrgByCode(id));
        case 1:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return function (_x10) {
    return _ref7.apply(this, arguments);
  };
}());
var ROAD_ROUTE_FORM_CONFIG = _objectSpread(_objectSpread(_objectSpread({}, lookups/* ROAD_ROUTE_LOOKUP_CONFIG */.FR), ORG_FORM_LOOKUP_PORTAL), {}, {
  display: {
    getPrimaryDisplay: function getPrimaryDisplay(i) {
      return i.value;
    },
    getSecondaryDisplay: function getSecondaryDisplay(i) {
      return (0,searchDropdownDefaults/* catalogColumnName */.BW)(i.value, i.label);
    },
    getSingleDisplay: function getSingleDisplay(i) {
      return i.label;
    }
  }
});
function pickOrgCodeName(item) {
  var code = (item.code || item.value || '').trim();
  var raw = (item.name || item.label || '').trim();
  return {
    code: code,
    name: (0,searchDropdownDefaults/* catalogColumnName */.BW)(code, raw) || code
  };
}
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
;// ./src/filters/RmmsOrgFormFields.tsx

function RmmsOrgFormFields_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function RmmsOrgFormFields_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? RmmsOrgFormFields_ownKeys(Object(t), !0).forEach(function (r) { (0,defineProperty/* default */.A)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : RmmsOrgFormFields_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
;



/**
 * Form cascade Khu → VP → Đơn vị → Tuyến.
 * Đổi Khu → clear VP+ĐV+Tuyến. Đổi VP → clear ĐV. Cục không ô. km_skip.
 */
var RmmsOrgFormFields = function RmmsOrgFormFields(_ref) {
  var testIdPrefix = _ref.testIdPrefix,
    value = _ref.value,
    _onChange = _ref.onChange,
    disabled = _ref.disabled,
    _ref$routeRequired = _ref.routeRequired,
    routeRequired = _ref$routeRequired === void 0 ? true : _ref$routeRequired,
    routeError = _ref.routeError;
  var vpConfig = (0,external_react_.useMemo)(function () {
    return createVpOrgLookupConfig({
      parentCode: value.zoneOrgCode || undefined
    });
  }, [value.zoneOrgCode]);
  var unitConfig = (0,external_react_.useMemo)(function () {
    return createAssigneeUnitLookupConfig({
      zoneOrgCode: value.zoneOrgCode || undefined,
      vpOrgCode: value.vpOrgCode || undefined
    });
  }, [value.zoneOrgCode, value.vpOrgCode]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      "data-testid": "".concat(testIdPrefix, "-field-zoneOrgCode"),
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(dist/* SearchInput */.DOo, {
        label: "Khu",
        config: ZONE_ORG_FORM_CONFIG,
        value: value.zoneOrgCode,
        primaryDisplay: value.zoneOrgCode || undefined,
        secondaryDisplay: value.zoneOrgName || undefined,
        placeholder: "M\xE3\u2026",
        disabled: disabled,
        onChange: function onChange(item) {
          var _pickOrgCodeName = pickOrgCodeName(item),
            code = _pickOrgCodeName.code,
            name = _pickOrgCodeName.name;
          _onChange(RmmsOrgFormFields_objectSpread(RmmsOrgFormFields_objectSpread({}, value), {}, {
            zoneOrgCode: code,
            zoneOrgName: name,
            vpOrgCode: '',
            vpOrgName: '',
            assigneeCode: '',
            assigneeName: '',
            routeCode: '',
            routeName: ''
          }));
        },
        onClear: function onClear() {
          return _onChange(RmmsOrgFormFields_objectSpread(RmmsOrgFormFields_objectSpread({}, value), {}, {
            zoneOrgCode: '',
            zoneOrgName: '',
            vpOrgCode: '',
            vpOrgName: '',
            assigneeCode: '',
            assigneeName: '',
            routeCode: '',
            routeName: ''
          }));
        },
        "data-testid": "".concat(testIdPrefix, "-zoneOrgCode")
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      "data-testid": "".concat(testIdPrefix, "-field-vpOrgCode"),
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(dist/* SearchInput */.DOo, {
        label: "V\u0103n ph\xF2ng",
        config: vpConfig,
        value: value.vpOrgCode,
        primaryDisplay: value.vpOrgCode || undefined,
        secondaryDisplay: value.vpOrgName || undefined,
        placeholder: "M\xE3\u2026",
        disabled: disabled,
        onChange: function onChange(item) {
          var _pickOrgCodeName2 = pickOrgCodeName(item),
            code = _pickOrgCodeName2.code,
            name = _pickOrgCodeName2.name;
          _onChange(RmmsOrgFormFields_objectSpread(RmmsOrgFormFields_objectSpread({}, value), {}, {
            vpOrgCode: code,
            vpOrgName: name,
            assigneeCode: '',
            assigneeName: ''
          }));
        },
        onClear: function onClear() {
          return _onChange(RmmsOrgFormFields_objectSpread(RmmsOrgFormFields_objectSpread({}, value), {}, {
            vpOrgCode: '',
            vpOrgName: '',
            assigneeCode: '',
            assigneeName: ''
          }));
        },
        "data-testid": "".concat(testIdPrefix, "-vpOrgCode")
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      "data-testid": "".concat(testIdPrefix, "-field-assigneeCode"),
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(dist/* SearchInput */.DOo, {
        label: "\u0110\u01A1n v\u1ECB",
        config: unitConfig,
        value: value.assigneeCode,
        primaryDisplay: value.assigneeCode || undefined,
        secondaryDisplay: value.assigneeName || undefined,
        placeholder: "M\xE3\u2026",
        disabled: disabled,
        onChange: function onChange(item) {
          var _pickOrgCodeName3 = pickOrgCodeName(item),
            code = _pickOrgCodeName3.code,
            name = _pickOrgCodeName3.name;
          _onChange(RmmsOrgFormFields_objectSpread(RmmsOrgFormFields_objectSpread({}, value), {}, {
            assigneeCode: code,
            assigneeName: name
          }));
        },
        onClear: function onClear() {
          return _onChange(RmmsOrgFormFields_objectSpread(RmmsOrgFormFields_objectSpread({}, value), {}, {
            assigneeCode: '',
            assigneeName: ''
          }));
        },
        "data-testid": "".concat(testIdPrefix, "-assigneeCode")
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      "data-testid": "".concat(testIdPrefix, "-field-routeCode"),
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(dist/* SearchInput */.DOo, {
        label: "Tuy\u1EBFn",
        required: routeRequired,
        config: ROAD_ROUTE_FORM_CONFIG,
        value: value.routeCode,
        primaryDisplay: value.routeCode || undefined,
        secondaryDisplay: value.routeName || undefined,
        placeholder: "M\xE3\u2026",
        disabled: disabled,
        onChange: function onChange(item) {
          var _pickOrgCodeName4 = pickOrgCodeName(item),
            code = _pickOrgCodeName4.code,
            name = _pickOrgCodeName4.name;
          _onChange(RmmsOrgFormFields_objectSpread(RmmsOrgFormFields_objectSpread({}, value), {}, {
            routeCode: code,
            routeName: name
          }));
        },
        onClear: function onClear() {
          return _onChange(RmmsOrgFormFields_objectSpread(RmmsOrgFormFields_objectSpread({}, value), {}, {
            routeCode: '',
            routeName: ''
          }));
        },
        error: routeError,
        "data-testid": "".concat(testIdPrefix, "-routeCode")
      })
    })]
  });
};

/***/ },

/***/ 1704
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q2: () => (/* binding */ EMPTY_RMMS_ORG_FORM),
/* harmony export */   _x: () => (/* binding */ orgFromDto),
/* harmony export */   xr: () => (/* binding */ orgPersistPayload)
/* harmony export */ });
var EMPTY_RMMS_ORG_FORM = {
  zoneOrgCode: '',
  zoneOrgName: '',
  vpOrgCode: '',
  vpOrgName: '',
  assigneeCode: '',
  assigneeName: '',
  routeCode: '',
  routeName: ''
};

/** POST/PUT body — assigneeOrgName = Đơn vị (≠ người xử lý). */
function orgPersistPayload(org) {
  var n = function n(v) {
    return v.trim() || undefined;
  };
  return {
    zoneOrgCode: n(org.zoneOrgCode),
    zoneOrgName: n(org.zoneOrgName),
    vpOrgCode: n(org.vpOrgCode),
    vpOrgName: n(org.vpOrgName),
    assigneeCode: n(org.assigneeCode),
    assigneeOrgName: n(org.assigneeName),
    routeCode: n(org.routeCode)
  };
}
function orgFromDto(dto) {
  var _dto$zoneOrgCode, _dto$zoneOrgName, _dto$vpOrgCode, _dto$vpOrgName, _dto$assigneeCode, _dto$assigneeOrgName, _dto$routeName;
  var routeCode = (dto.routeCode || dto.route || dto.routeName || '').trim();
  return {
    zoneOrgCode: (_dto$zoneOrgCode = dto.zoneOrgCode) !== null && _dto$zoneOrgCode !== void 0 ? _dto$zoneOrgCode : '',
    zoneOrgName: (_dto$zoneOrgName = dto.zoneOrgName) !== null && _dto$zoneOrgName !== void 0 ? _dto$zoneOrgName : '',
    vpOrgCode: (_dto$vpOrgCode = dto.vpOrgCode) !== null && _dto$vpOrgCode !== void 0 ? _dto$vpOrgCode : '',
    vpOrgName: (_dto$vpOrgName = dto.vpOrgName) !== null && _dto$vpOrgName !== void 0 ? _dto$vpOrgName : '',
    assigneeCode: (_dto$assigneeCode = dto.assigneeCode) !== null && _dto$assigneeCode !== void 0 ? _dto$assigneeCode : '',
    assigneeName: (_dto$assigneeOrgName = dto.assigneeOrgName) !== null && _dto$assigneeOrgName !== void 0 ? _dto$assigneeOrgName : '',
    routeCode: routeCode,
    routeName: (_dto$routeName = dto.routeName) !== null && _dto$routeName !== void 0 ? _dto$routeName : ''
  };
}

/***/ },

/***/ 7619
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ useShellPageTitle)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4726);
/* harmony import */ var _linm_soft_org_linm_web_common_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8755);
/* harmony import */ var _dev_isStandalone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7024);




/** Form / sub-route title override for shell topbar (ROUTER-P1-08). */
function useShellPageTitle(title) {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (_dev_isStandalone__WEBPACK_IMPORTED_MODULE_2__/* .isStandalone */ .Q) return;
    (0,_linm_soft_org_linm_web_common_components__WEBPACK_IMPORTED_MODULE_1__/* .setNavTitle */ .OrN)(title);
    return function () {
      return (0,_linm_soft_org_linm_web_common_components__WEBPACK_IMPORTED_MODULE_1__/* .setNavTitle */ .OrN)('');
    };
  }, [title]);
}

/***/ },

/***/ 8969
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ch: () => (/* binding */ lookupNameOnly),
/* harmony export */   FJ: () => (/* binding */ ROAD_ROUTE_SEED),
/* harmony export */   FR: () => (/* binding */ ROAD_ROUTE_LOOKUP_CONFIG),
/* harmony export */   ZX: () => (/* binding */ lookupLabel)
/* harmony export */ });
/* unused harmony exports normalizeSearchText, routeNameOnly */
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4980);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(467);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4756);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _search_searchDropdownDefaults__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6415);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8724);



function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
;

/** CUC2 38-route seed — BFF down fallback only; never invent QL.22. */
var ROAD_ROUTE_SEED = [{
  value: 'QL.1',
  label: 'QL.1 — Quốc lộ 1'
}, {
  value: 'HCM',
  label: 'HCM — Đường Hồ Chí Minh'
}, {
  value: 'QL.7',
  label: 'QL.7 — Quốc lộ 7'
}, {
  value: 'QL.7B',
  label: 'QL.7B — Quốc lộ 7B'
}, {
  value: 'QL.8',
  label: 'QL.8 — Quốc lộ 8'
}, {
  value: 'QL.8B',
  label: 'QL.8B — Quốc lộ 8B'
}, {
  value: 'QL.8C',
  label: 'QL.8C — Quốc lộ 8C'
}, {
  value: 'QL.9',
  label: 'QL.9 — Quốc lộ 9'
}, {
  value: 'QL.9B',
  label: 'QL.9B — Quốc lộ 9B'
}, {
  value: 'QL.9D',
  label: 'QL.9D — Quốc lộ 9D'
}, {
  value: 'QL.10',
  label: 'QL.10 — Quốc lộ 10'
}, {
  value: 'QL.12A',
  label: 'QL.12A — Quốc lộ 12A'
}, {
  value: 'QL.12C',
  label: 'QL.12C — Quốc lộ 12C'
}, {
  value: 'QL.15',
  label: 'QL.15 — Quốc lộ 15'
}, {
  value: 'QL.15A',
  label: 'QL.15A — Quốc lộ 15A'
}, {
  value: 'QL.15B',
  label: 'QL.15B — Quốc lộ 15B'
}, {
  value: 'QL.15C',
  label: 'QL.15C — Quốc lộ 15C'
}, {
  value: 'QL.15D',
  label: 'QL.15D — Quốc lộ 15D'
}, {
  value: 'QL.16',
  label: 'QL.16 — Quốc lộ 16'
}, {
  value: 'QL.45',
  label: 'QL.45 — Quốc lộ 45'
}, {
  value: 'QL.46',
  label: 'QL.46 — Quốc lộ 46'
}, {
  value: 'QL.46B',
  label: 'QL.46B — Quốc lộ 46B'
}, {
  value: 'QL.46C',
  label: 'QL.46C — Quốc lộ 46C'
}, {
  value: 'QL.47',
  label: 'QL.47 — Quốc lộ 47'
}, {
  value: 'QL.47B',
  label: 'QL.47B — Quốc lộ 47B'
}, {
  value: 'QL.47C',
  label: 'QL.47C — Quốc lộ 47C'
}, {
  value: 'QL.48',
  label: 'QL.48 — Quốc lộ 48'
}, {
  value: 'QL.48B',
  label: 'QL.48B — Quốc lộ 48B'
}, {
  value: 'QL.48C',
  label: 'QL.48C — Quốc lộ 48C'
}, {
  value: 'QL.48D',
  label: 'QL.48D — Quốc lộ 48D'
}, {
  value: 'QL.48E',
  label: 'QL.48E — Quốc lộ 48E'
}, {
  value: 'QL.49',
  label: 'QL.49 — Quốc lộ 49'
}, {
  value: 'QL.49B',
  label: 'QL.49B — Quốc lộ 49B'
}, {
  value: 'QL.49C',
  label: 'QL.49C — Quốc lộ 49C'
}, {
  value: 'QL.217',
  label: 'QL.217 — Quốc lộ 217'
}, {
  value: 'QL.217B',
  label: 'QL.217B — Quốc lộ 217B'
}, {
  value: 'CT.NS-HCM',
  label: 'CT.NS-HCM — Đường nối cảng Nghi Sơn – HCM'
}, {
  value: 'CT.001',
  label: 'CT.001 — Cao tốc (CUC 2)'
}];
function normalizeSearchRows(raw) {
  var _raw$items;
  var rows = Array.isArray(raw) ? raw : (_raw$items = raw === null || raw === void 0 ? void 0 : raw.items) !== null && _raw$items !== void 0 ? _raw$items : [];
  return rows.filter(function (r) {
    return r.code && r.code !== 'QL.22';
  }).map(function (r) {
    return {
      value: String(r.code),
      label: r.name ? "".concat(r.code, " \u2014 ").concat(r.name) : String(r.code)
    };
  });
}

/** SSOT `search-input.md` — không dấu · CI · space. */
function normalizeSearchText(value) {
  return (value !== null && value !== void 0 ? value : '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D').toLowerCase().replace(/\s+/g, ' ').trim();
}

/** Tên only — cấm nhét mã vào secondary (`QL.1 — QL.1 — Quốc lộ 1`). */
function routeNameOnly(item) {
  var sep = ' — ';
  var prefix = "".concat(item.value).concat(sep);
  if (item.label.startsWith(prefix)) return item.label.slice(prefix.length);
  return item.label === item.value ? '' : item.label;
}
function filterSeed(search) {
  var q = normalizeSearchText(search);
  if (!q) return ROAD_ROUTE_SEED;
  return ROAD_ROUTE_SEED.filter(function (i) {
    return normalizeSearchText(i.value).includes(q) || normalizeSearchText(i.label).includes(q);
  });
}
function searchRoadRoutes(_x) {
  return _searchRoadRoutes.apply(this, arguments);
}
function _searchRoadRoutes() {
  _searchRoadRoutes = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3(search) {
    var qs, res, items, _t;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function (_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          qs = new URLSearchParams();
          if (search) qs.set('search', search);
          qs.set('page', '1');
          qs.set('pageSize', '50');
          _context3.next = 1;
          return _api__WEBPACK_IMPORTED_MODULE_4__/* .apiClient */ .u.get("/integration/road-routes/search?".concat(qs));
        case 1:
          res = _context3.sent;
          items = normalizeSearchRows((0,_api__WEBPACK_IMPORTED_MODULE_4__/* .unwrap */ .o)(res));
          if (!(items.length > 0)) {
            _context3.next = 2;
            break;
          }
          return _context3.abrupt("return", items);
        case 2:
          return _context3.abrupt("return", filterSeed(search));
        case 3:
          _context3.prev = 3;
          _t = _context3["catch"](0);
          return _context3.abrupt("return", filterSeed(search));
        case 4:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 3]]);
  }));
  return _searchRoadRoutes.apply(this, arguments);
}
function lookupLabel(items, value) {
  var _items$find$label, _items$find;
  return (_items$find$label = (_items$find = items.find(function (i) {
    return i.value === value;
  })) === null || _items$find === void 0 ? void 0 : _items$find.label) !== null && _items$find$label !== void 0 ? _items$find$label : value;
}
function lookupNameOnly(items, value) {
  var item = items.find(function (i) {
    return i.value === value;
  });
  return item ? routeNameOnly(item) : '';
}
var ROAD_ROUTE_LOOKUP_CONFIG = _objectSpread(_objectSpread({
  api: {
    getItemKey: function getItemKey(i) {
      return i.value;
    },
    search: function () {
      var _search2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(_ref) {
        var _search, items;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function (_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _search = _ref.search;
              _context.next = 1;
              return searchRoadRoutes(_search);
            case 1:
              items = _context.sent;
              return _context.abrupt("return", {
                items: items,
                page: 1,
                totalPages: 1
              });
            case 2:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function search(_x2) {
        return _search2.apply(this, arguments);
      }
      return search;
    }(),
    getDetail: function () {
      var _getDetail = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2(id) {
        var _items$find2;
        var seed, items;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function (_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              seed = ROAD_ROUTE_SEED.find(function (i) {
                return i.value === id;
              });
              if (!seed) {
                _context2.next = 1;
                break;
              }
              return _context2.abrupt("return", seed);
            case 1:
              _context2.next = 2;
              return searchRoadRoutes(id);
            case 2:
              items = _context2.sent;
              return _context2.abrupt("return", (_items$find2 = items.find(function (i) {
                return i.value === id;
              })) !== null && _items$find2 !== void 0 ? _items$find2 : {
                value: id,
                label: id
              });
            case 3:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      function getDetail(_x3) {
        return _getDetail.apply(this, arguments);
      }
      return getDetail;
    }()
  },
  display: {
    getPrimaryDisplay: function getPrimaryDisplay(i) {
      return i.label;
    },
    getSecondaryDisplay: function getSecondaryDisplay(i) {
      return routeNameOnly(i);
    },
    getSingleDisplay: function getSingleDisplay(i) {
      return routeNameOnly(i) || i.label;
    }
  }
}, _search_searchDropdownDefaults__WEBPACK_IMPORTED_MODULE_3__/* .SEARCH_DROPDOWN_PORTAL */ .AA), {}, {
  columns: (0,_search_searchDropdownDefaults__WEBPACK_IMPORTED_MODULE_3__/* .catalogLookupColumns */ .zz)(),
  header: (0,_search_searchDropdownDefaults__WEBPACK_IMPORTED_MODULE_3__/* .catalogLookupHeader */ .hH)(),
  pageSize: 50
});

/***/ }

}]);
//# sourceMappingURL=917.d4cb6c79.linm-rmms-field.js.map