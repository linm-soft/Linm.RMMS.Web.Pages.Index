"use strict";
(self["webpackChunkrmms_field"] = self["webpackChunkrmms_field"] || []).push([[693],{

/***/ 8495
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ isPermissionsLocalModeActive)
/* harmony export */ });
/* unused harmony export isVoucherPermissionsLocalModeActive */
/**
 * ERP local dev: skip init-data / catalog permission gates (toolbar list + form).
 *
 * - `VITE_PERMISSIONS_LOCAL_MODE=true` in `.env` (webpack must inject VITE_* — mfe-setup-checklist § Env timing)
 * - Dev server (`import.meta.env.DEV`): enabled unless explicitly `VITE_PERMISSIONS_LOCAL_MODE=false`
 * - Legacy alias: `VITE_VOUCHER_PERMISSIONS_LOCAL_MODE` (deprecated — Finance only)
 */
function readPermissionsLocalFlag() {
  var _import$meta$env$VITE;
  return (_import$meta$env$VITE = "true") !== null && _import$meta$env$VITE !== void 0 ? _import$meta$env$VITE : undefined;
}
function isPermissionsLocalModeActive() {
  var flag = readPermissionsLocalFlag();
  if (flag === 'true') return true;
  if (flag === 'false') return false;
  return false === true;
}

/** @deprecated Use isPermissionsLocalModeActive */
var isVoucherPermissionsLocalModeActive = (/* unused pure expression or super */ null && (isPermissionsLocalModeActive));

/***/ },

/***/ 3457
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   k: () => (/* binding */ useCatalogUiSchema)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(467);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(296);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4756);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4726);
/* harmony import */ var _services_catalogUiSchema_catalogUiSchemaService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5295);





/**
 * Load catalog UI schema for list display.
 * Does **not** auto-PUT — first Save in LinCatalogUiSchemaEditorModal creates override
 * when `hasSavedOverride` is false (seed-only GET still shows full config grid).
 */
function useCatalogUiSchema(catalogKind) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),
    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_useState, 2),
    schema = _useState2[0],
    setSchema = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true),
    _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_useState3, 2),
    loading = _useState4[0],
    setLoading = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),
    _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_useState5, 2),
    error = _useState6[0],
    setError = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0),
    _useState8 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_useState7, 2),
    reloadKey = _useState8[0],
    setReloadKey = _useState8[1];
  var reload = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(function () {
    setReloadKey(function (k) {
      return k + 1;
    });
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    var cancelled = false;
    setLoading(true);
    setError(null);
    var t = window.setTimeout(function () {
      void (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        var data, _t;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function (_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 1;
              return _services_catalogUiSchema_catalogUiSchemaService__WEBPACK_IMPORTED_MODULE_4__/* .catalogUiSchemaService */ .w.get(catalogKind, false);
            case 1:
              data = _context.sent;
              if (!cancelled) setSchema(data);
              _context.next = 3;
              break;
            case 2:
              _context.prev = 2;
              _t = _context["catch"](0);
              if (!cancelled) {
                setError(_t instanceof Error ? _t.message : 'Lỗi tải cấu hình danh mục');
                setSchema(null);
              }
            case 3:
              _context.prev = 3;
              if (!cancelled) setLoading(false);
              return _context.finish(3);
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 2, 3, 4]]);
      }))();
    }, 0);
    return function () {
      cancelled = true;
      window.clearTimeout(t);
    };
  }, [catalogKind, reloadKey]);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    var onCompanyChanged = function onCompanyChanged() {
      return setReloadKey(function (k) {
        return k + 1;
      });
    };
    window.addEventListener('linm:company:changed', onCompanyChanged);
    return function () {
      return window.removeEventListener('linm:company:changed', onCompanyChanged);
    };
  }, []);
  return (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(function () {
    return {
      schema: schema,
      loading: loading,
      error: error,
      reload: reload
    };
  }, [schema, loading, error, reload]);
}

/***/ },

/***/ 1637
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ AttendanceListPage_AttendanceListPage)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__(5458);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(467);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js + 2 modules
var defineProperty = __webpack_require__(4980);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__(296);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(4756);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(4726);
// EXTERNAL MODULE: ./node_modules/react-redux/dist/react-redux.mjs
var react_redux = __webpack_require__(1468);
// EXTERNAL MODULE: ./node_modules/react-router-dom/dist/index.js
var dist = __webpack_require__(4976);
// EXTERNAL MODULE: ./node_modules/@linm-soft-org/linm-web-common-components/dist/index.js + 583 modules
var linm_web_common_components_dist = __webpack_require__(8755);
// EXTERNAL MODULE: ./src/hooks/useCatalogUiSchema.ts
var useCatalogUiSchema = __webpack_require__(3457);
// EXTERNAL MODULE: ./src/services/api.ts
var api = __webpack_require__(8724);
;// ./src/services/attendance/endpoint.ts



/** Relative to VITE_API_URL (already includes /api/v1 or web-bff/api/v1). */
var BASE = '/patrol/attendance-logs';
function normalizePaged(raw) {
  var _raw$items, _raw$totalCount, _raw$page, _raw$pageSize, _raw$totalPages;
  if (Array.isArray(raw)) {
    return {
      items: raw,
      totalCount: raw.length,
      page: 1,
      pageSize: raw.length || 50,
      totalPages: 1
    };
  }
  var items = (_raw$items = raw === null || raw === void 0 ? void 0 : raw.items) !== null && _raw$items !== void 0 ? _raw$items : [];
  var totalCount = (_raw$totalCount = raw === null || raw === void 0 ? void 0 : raw.totalCount) !== null && _raw$totalCount !== void 0 ? _raw$totalCount : items.length;
  var page = (_raw$page = raw === null || raw === void 0 ? void 0 : raw.page) !== null && _raw$page !== void 0 ? _raw$page : 1;
  var pageSize = (_raw$pageSize = raw === null || raw === void 0 ? void 0 : raw.pageSize) !== null && _raw$pageSize !== void 0 ? _raw$pageSize : 50;
  var totalPages = (_raw$totalPages = raw === null || raw === void 0 ? void 0 : raw.totalPages) !== null && _raw$totalPages !== void 0 ? _raw$totalPages : Math.max(1, Math.ceil(totalCount / Math.max(pageSize, 1)));
  return {
    items: items,
    totalCount: totalCount,
    page: page,
    pageSize: pageSize,
    totalPages: totalPages
  };
}
var attendanceEndpoint = {
  getList: function () {
    var _getList = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee(params) {
      var _params$page, _params$pageSize;
      var qs, res;
      return regenerator_default().wrap(function (_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            qs = new URLSearchParams();
            if (params !== null && params !== void 0 && params.search) qs.set('search', params.search);
            if (params !== null && params !== void 0 && params.status) qs.set('status', params.status);
            if (params !== null && params !== void 0 && params.route) qs.set('route', params.route);
            if (params !== null && params !== void 0 && params.onlyOutZone) qs.set('onlyOutZone', 'true');
            qs.set('page', String((_params$page = params === null || params === void 0 ? void 0 : params.page) !== null && _params$page !== void 0 ? _params$page : 1));
            qs.set('pageSize', String((_params$pageSize = params === null || params === void 0 ? void 0 : params.pageSize) !== null && _params$pageSize !== void 0 ? _params$pageSize : 50));
            _context.next = 1;
            return api/* apiClient */.u.get("".concat(BASE, "?").concat(qs));
          case 1:
            res = _context.sent;
            return _context.abrupt("return", normalizePaged((0,api/* unwrap */.o)(res)));
          case 2:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    function getList(_x) {
      return _getList.apply(this, arguments);
    }
    return getList;
  }(),
  getById: function () {
    var _getById = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee2(id) {
      var res;
      return regenerator_default().wrap(function (_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 1;
            return api/* apiClient */.u.get("".concat(BASE, "/").concat(id));
          case 1:
            res = _context2.sent;
            return _context2.abrupt("return", (0,api/* unwrap */.o)(res));
          case 2:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    function getById(_x2) {
      return _getById.apply(this, arguments);
    }
    return getById;
  }(),
  create: function () {
    var _create = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee3(data) {
      var res;
      return regenerator_default().wrap(function (_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 1;
            return api/* apiClient */.u.post(BASE, data);
          case 1:
            res = _context3.sent;
            return _context3.abrupt("return", (0,api/* unwrap */.o)(res));
          case 2:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    function create(_x3) {
      return _create.apply(this, arguments);
    }
    return create;
  }(),
  update: function () {
    var _update = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee4(id, data) {
      var res;
      return regenerator_default().wrap(function (_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 1;
            return api/* apiClient */.u.put("".concat(BASE, "/").concat(id), data);
          case 1:
            res = _context4.sent;
            return _context4.abrupt("return", (0,api/* unwrap */.o)(res));
          case 2:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    function update(_x4, _x5) {
      return _update.apply(this, arguments);
    }
    return update;
  }(),
  delete: function () {
    var _delete2 = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee5(id) {
      return regenerator_default().wrap(function (_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 1;
            return api/* apiClient */.u.delete("".concat(BASE, "/").concat(id));
          case 1:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    }));
    function _delete(_x6) {
      return _delete2.apply(this, arguments);
    }
    return _delete;
  }()
};
;// ./src/demo/attendanceStore.ts
/** Attendance log catalog — local fallback seed (demo parity · no BE). */

var STORAGE_KEY = 'rmms-mfe:attendance:rows:v2';
var ATTENDANCE_STATUSES = ['Đúng tuyến', 'Lệch zone', 'Thiếu điểm'];
var EMPTY_FORM = {
  code: '',
  userName: '',
  route: 'QL.1',
  zoneOrgCode: '',
  zoneOrgName: '',
  vpOrgCode: '',
  vpOrgName: '',
  assigneeCode: '',
  assigneeOrgName: '',
  routeCode: 'QL.1',
  checkInAt: new Date().toISOString(),
  kmPoint: '',
  lat: 10.98,
  lng: 106.65,
  inZone: true,
  status: 'Đúng tuyến',
  note: '',
  updatedAt: '',
  isActive: true
};
var SEED = [{
  id: 'att-seed-1',
  code: 'CC-20260808-001',
  userName: 'Nguyễn Văn A',
  route: 'QL.1',
  checkInAt: '2026-08-08T00:12:00.000Z',
  kmPoint: 'km12+000',
  lat: 10.9801,
  lng: 106.6512,
  inZone: true,
  status: 'Đúng tuyến',
  note: 'Đầu ca',
  updatedAt: '2026-08-08T00:12:00.000Z',
  isActive: true
}, {
  id: 'att-seed-2',
  code: 'CC-20260808-002',
  userName: 'Nguyễn Văn A',
  route: 'QL.1',
  checkInAt: '2026-08-08T01:05:00.000Z',
  kmPoint: 'km15+200',
  lat: 10.991,
  lng: 106.662,
  inZone: true,
  status: 'Đúng tuyến',
  note: '',
  updatedAt: '2026-08-08T01:05:00.000Z',
  isActive: true
}, {
  id: 'att-seed-3',
  code: 'CC-20260808-003',
  userName: 'Trần Thị B',
  route: 'QL.1',
  checkInAt: '2026-08-08T01:40:00.000Z',
  kmPoint: 'km18+050',
  lat: 11.002,
  lng: 106.67,
  inZone: false,
  status: 'Lệch zone',
  note: 'Ngoài buffer geo-fence',
  updatedAt: '2026-08-08T01:40:00.000Z',
  isActive: true
}, {
  id: 'att-seed-4',
  code: 'CC-20260808-004',
  userName: 'Trần Thị B',
  route: 'QL.1',
  checkInAt: '2026-08-08T02:15:00.000Z',
  kmPoint: 'km20+000',
  lat: 11.01,
  lng: 106.68,
  inZone: true,
  status: 'Đúng tuyến',
  note: '',
  updatedAt: '2026-08-08T02:15:00.000Z',
  isActive: true
}, {
  id: 'att-seed-5',
  code: 'CC-20260808-005',
  userName: 'Nguyễn Văn A',
  route: 'QL.1',
  checkInAt: '2026-08-08T03:00:00.000Z',
  kmPoint: '',
  lat: 11.02,
  lng: 106.69,
  inZone: false,
  status: 'Thiếu điểm',
  note: 'Chưa đủ 3 điểm/ngày',
  updatedAt: '2026-08-08T03:00:00.000Z',
  isActive: true
}];
function loadRows() {
  try {
    var raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      saveRows(SEED);
      return [].concat(SEED);
    }
    var parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter(function (r) {
      return r.isActive !== false;
    }) : [].concat(SEED);
  } catch (_unused) {
    return [].concat(SEED);
  }
}
function saveRows(rows) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(rows));
}
function genCode(rows) {
  var day = new Date().toISOString().slice(0, 10).replace(/-/g, '');
  var prefix = "CC-".concat(day, "-");
  var max = 0;
  rows.forEach(function (r) {
    if (r.code.startsWith(prefix)) {
      var n = Number(r.code.slice(prefix.length));
      if (!Number.isNaN(n) && n > max) max = n;
    }
  });
  return "".concat(prefix).concat(String(max + 1).padStart(3, '0'));
}
function filterRows(rows, opts) {
  var _opts$search, _opts$status, _opts$route;
  var search = ((_opts$search = opts.search) !== null && _opts$search !== void 0 ? _opts$search : '').trim().toLowerCase();
  var status = ((_opts$status = opts.status) !== null && _opts$status !== void 0 ? _opts$status : '').trim();
  var route = ((_opts$route = opts.route) !== null && _opts$route !== void 0 ? _opts$route : '').trim();
  var onlyOutZone = opts.onlyOutZone === true;
  return rows.filter(function (r) {
    if (status && r.status !== status) return false;
    if (route && r.route !== route) return false;
    if (onlyOutZone && r.inZone) return false;
    if (!search) return true;
    var blob = [r.code, r.userName, r.route, r.status, r.kmPoint, r.note, String(r.lat), String(r.lng)].join(' ').toLowerCase();
    return blob.includes(search);
  });
}
function formatGps(lat, lng) {
  if (lat == null || lng == null || Number.isNaN(lat) || Number.isNaN(lng)) return '—';
  return "".concat(Number(lat).toFixed(5), ", ").concat(Number(lng).toFixed(5));
}
// EXTERNAL MODULE: ./src/services/attendance/lookups.ts
var lookups = __webpack_require__(8969);
;// ./src/services/attendance/attendanceService.ts




function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,defineProperty/* default */.A)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
;


function toDto(row) {
  return {
    id: row.id,
    code: row.code,
    userName: row.userName,
    route: row.route,
    checkInAt: row.checkInAt,
    kmPoint: row.kmPoint,
    lat: row.lat,
    lng: row.lng,
    inZone: row.inZone,
    status: row.status,
    note: row.note,
    updatedAt: row.updatedAt,
    isActive: row.isActive
  };
}
function localList(params) {
  var _params$page, _params$pageSize, _params$search, _params$status, _params$route;
  var page = (_params$page = params === null || params === void 0 ? void 0 : params.page) !== null && _params$page !== void 0 ? _params$page : 1;
  var pageSize = (_params$pageSize = params === null || params === void 0 ? void 0 : params.pageSize) !== null && _params$pageSize !== void 0 ? _params$pageSize : 50;
  var filtered = filterRows(loadRows(), {
    search: (_params$search = params === null || params === void 0 ? void 0 : params.search) !== null && _params$search !== void 0 ? _params$search : '',
    status: (_params$status = params === null || params === void 0 ? void 0 : params.status) !== null && _params$status !== void 0 ? _params$status : '',
    route: (_params$route = params === null || params === void 0 ? void 0 : params.route) !== null && _params$route !== void 0 ? _params$route : '',
    onlyOutZone: (params === null || params === void 0 ? void 0 : params.onlyOutZone) === true
  });
  var start = (page - 1) * pageSize;
  var items = filtered.slice(start, start + pageSize).map(toDto);
  var totalCount = filtered.length;
  return {
    items: items,
    totalCount: totalCount,
    page: page,
    pageSize: pageSize,
    totalPages: Math.max(1, Math.ceil(totalCount / pageSize))
  };
}
function assertWritable(data) {
  var code = data.route.trim();
  if (code.toUpperCase() === 'QL.22') {
    throw new Error('Tuyến QL.22 không thuộc danh mục tuyến đường CUC2. Chọn mã tuyến hợp lệ (ví dụ QL.1).');
  }
  if (!lookups/* ROAD_ROUTE_SEED */.FJ.some(function (r) {
    return r.value === code;
  })) {
    throw new Error("Tuy\u1EBFn \xAB".concat(code, "\xBB kh\xF4ng t\u1ED3n t\u1EA1i trong danh m\u1EE5c tuy\u1EBFn \u0111\u01B0\u1EDDng \u0111ang hi\u1EC7u l\u1EF1c."));
  }
  if (!ATTENDANCE_STATUSES.includes(data.status)) {
    throw new Error('Trạng thái công phải là Đúng tuyến, Lệch zone hoặc Thiếu điểm.');
  }
}
function withFallback(_x, _x2) {
  return _withFallback.apply(this, arguments);
}
function _withFallback() {
  _withFallback = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee(fn, fallback) {
    var _t;
    return regenerator_default().wrap(function (_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 1;
          return fn();
        case 1:
          return _context.abrupt("return", _context.sent);
        case 2:
          _context.prev = 2;
          _t = _context["catch"](0);
          return _context.abrupt("return", fallback());
        case 3:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 2]]);
  }));
  return _withFallback.apply(this, arguments);
}
var attendanceService = {
  getList: function getList(params) {
    return withFallback(function () {
      return attendanceEndpoint.getList(params);
    }, function () {
      return localList(params);
    });
  },
  getById: function getById(id) {
    return withFallback(function () {
      return attendanceEndpoint.getById(id);
    }, function () {
      var row = loadRows().find(function (r) {
        return r.id === id || r.code === id;
      });
      if (!row) throw new Error("Kh\xF4ng t\xECm th\u1EA5y ch\u1EA5m c\xF4ng ".concat(id));
      return toDto(row);
    });
  },
  create: function create(data) {
    return withFallback(function () {
      return attendanceEndpoint.create(data);
    }, function () {
      var _data$kmPoint, _data$note;
      assertWritable(data);
      var rows = loadRows();
      var row = {
        id: crypto.randomUUID(),
        code: genCode(rows),
        userName: data.userName,
        route: data.route,
        checkInAt: data.checkInAt,
        kmPoint: (_data$kmPoint = data.kmPoint) !== null && _data$kmPoint !== void 0 ? _data$kmPoint : '',
        lat: data.lat,
        lng: data.lng,
        inZone: data.inZone,
        status: data.status,
        note: (_data$note = data.note) !== null && _data$note !== void 0 ? _data$note : '',
        updatedAt: new Date().toISOString(),
        isActive: true
      };
      saveRows([row].concat((0,toConsumableArray/* default */.A)(rows)));
      return toDto(row);
    });
  },
  update: function update(id, data) {
    return withFallback(function () {
      return attendanceEndpoint.update(id, data);
    }, function () {
      var _data$kmPoint2, _data$note2, _data$isActive;
      assertWritable(data);
      var rows = loadRows();
      var idx = rows.findIndex(function (r) {
        return r.id === id || r.code === id;
      });
      if (idx < 0) throw new Error("Kh\xF4ng t\xECm th\u1EA5y ch\u1EA5m c\xF4ng ".concat(id));
      var next = _objectSpread(_objectSpread({}, rows[idx]), {}, {
        userName: data.userName,
        route: data.route,
        checkInAt: data.checkInAt,
        kmPoint: (_data$kmPoint2 = data.kmPoint) !== null && _data$kmPoint2 !== void 0 ? _data$kmPoint2 : '',
        lat: data.lat,
        lng: data.lng,
        inZone: data.inZone,
        status: data.status,
        note: (_data$note2 = data.note) !== null && _data$note2 !== void 0 ? _data$note2 : '',
        isActive: (_data$isActive = data.isActive) !== null && _data$isActive !== void 0 ? _data$isActive : rows[idx].isActive,
        updatedAt: new Date().toISOString()
      });
      var copy = (0,toConsumableArray/* default */.A)(rows);
      copy[idx] = next;
      saveRows(copy);
      return toDto(next);
    });
  },
  delete: function _delete(id) {
    return withFallback(function () {
      return attendanceEndpoint.delete(id);
    }, function () {
      var rows = loadRows().map(function (r) {
        return r.id === id || r.code === id ? _objectSpread(_objectSpread({}, r), {}, {
          isActive: false
        }) : r;
      });
      saveRows(rows);
    });
  }
};
// EXTERNAL MODULE: ./src/dev/isPermissionsLocalMode.ts
var isPermissionsLocalMode = __webpack_require__(8495);
;// ./src/services/attendance/permissions.ts
/**
 * T-PERM-01 — permission codes for attendance-logs (Auth stub until CommonLib mount).
 */

var ATTENDANCE_PERMS = {
  read: 'rmms-field:attendance:read',
  create: 'rmms-field:attendance:write',
  update: 'rmms-field:attendance:write',
  delete: 'rmms-field:attendance:write'
};
function hasAttendancePermission(code) {
  if ((0,isPermissionsLocalMode/* isPermissionsLocalModeActive */.z)()) return true;
  var bag = window.__LINM_PERMS__;
  if (!bag) return true;
  return bag[code] === true;
}
function attendanceListPermissions() {
  return {
    canRead: hasAttendancePermission(ATTENDANCE_PERMS.read),
    canCreate: hasAttendancePermission(ATTENDANCE_PERMS.create),
    canUpdate: hasAttendancePermission(ATTENDANCE_PERMS.update),
    canDelete: hasAttendancePermission(ATTENDANCE_PERMS.delete)
  };
}
// EXTERNAL MODULE: ./src/services/catalogUiSchema/catalogUiSchemaService.ts
var catalogUiSchemaService = __webpack_require__(5295);
// EXTERNAL MODULE: ./src/utils/bootstrapCatalogUiSchema.ts + 1 modules
var bootstrapCatalogUiSchema = __webpack_require__(8772);
// EXTERNAL MODULE: ./src/router/useShellPageTitle.ts
var useShellPageTitle = __webpack_require__(7619);
// EXTERNAL MODULE: ./src/filters/RmmsOrgFormFields.tsx + 1 modules
var RmmsOrgFormFields = __webpack_require__(5538);
// EXTERNAL MODULE: ./src/filters/rmmsOrgForm.ts
var rmmsOrgForm = __webpack_require__(1704);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(5072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(7825);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(7659);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(5056);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(540);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(1113);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./src/pages/AttendanceListPage/AttendanceFormSlideout.module.css
var AttendanceFormSlideout_module = __webpack_require__(8798);
;// ./src/pages/AttendanceListPage/AttendanceFormSlideout.module.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(AttendanceFormSlideout_module/* default */.A, options);




       /* harmony default export */ const AttendanceListPage_AttendanceFormSlideout_module = (AttendanceFormSlideout_module/* default */.A && AttendanceFormSlideout_module/* default */.A.locals ? AttendanceFormSlideout_module/* default */.A.locals : undefined);

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
;// ./src/pages/AttendanceListPage/AttendanceFormSlideout.tsx




function AttendanceFormSlideout_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function AttendanceFormSlideout_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? AttendanceFormSlideout_ownKeys(Object(t), !0).forEach(function (r) { (0,defineProperty/* default */.A)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : AttendanceFormSlideout_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
;










var REQUIRED = ['userName', 'route', 'checkInAt', 'lat', 'lng', 'status'];
function orgOf(form) {
  var _form$zoneOrgCode, _form$zoneOrgName, _form$vpOrgCode, _form$vpOrgName, _form$assigneeCode, _form$assigneeOrgName;
  return {
    zoneOrgCode: (_form$zoneOrgCode = form.zoneOrgCode) !== null && _form$zoneOrgCode !== void 0 ? _form$zoneOrgCode : '',
    zoneOrgName: (_form$zoneOrgName = form.zoneOrgName) !== null && _form$zoneOrgName !== void 0 ? _form$zoneOrgName : '',
    vpOrgCode: (_form$vpOrgCode = form.vpOrgCode) !== null && _form$vpOrgCode !== void 0 ? _form$vpOrgCode : '',
    vpOrgName: (_form$vpOrgName = form.vpOrgName) !== null && _form$vpOrgName !== void 0 ? _form$vpOrgName : '',
    assigneeCode: (_form$assigneeCode = form.assigneeCode) !== null && _form$assigneeCode !== void 0 ? _form$assigneeCode : '',
    assigneeName: (_form$assigneeOrgName = form.assigneeOrgName) !== null && _form$assigneeOrgName !== void 0 ? _form$assigneeOrgName : '',
    routeCode: form.routeCode || form.route || '',
    routeName: ''
  };
}
var MODE_TITLE = {
  create: 'Tạo mới chấm công',
  edit: 'Sửa chấm công',
  view: 'Xem chấm công',
  copy: 'Sao chép chấm công'
};
var MODE_HINT = {
  create: 'Nhập log check-in. Mã chấm công do hệ thống sinh khi lưu.',
  edit: 'Chỉnh sửa — các trường bắt buộc đánh dấu *.',
  view: 'Chế độ xem — trường dùng readOnly (không disabled xám).',
  copy: 'Sao chép từ bản ghi gốc — mã mới khi lưu.'
};
function toLocalInput(iso) {
  if (!iso) return '';
  var d = new Date(iso);
  if (Number.isNaN(d.getTime())) return '';
  var pad = function pad(n) {
    return String(n).padStart(2, '0');
  };
  return "".concat(d.getFullYear(), "-").concat(pad(d.getMonth() + 1), "-").concat(pad(d.getDate()), "T").concat(pad(d.getHours()), ":").concat(pad(d.getMinutes()));
}
function fromLocalInput(local) {
  if (!local) return new Date().toISOString();
  var d = new Date(local);
  return Number.isNaN(d.getTime()) ? new Date().toISOString() : d.toISOString();
}
function fromDto(dto, asCopy) {
  var _dto$assigneeOrgName, _dto$kmPoint, _dto$note, _dto$updatedAt;
  return AttendanceFormSlideout_objectSpread(AttendanceFormSlideout_objectSpread({
    code: asCopy ? genCode(loadRows()) : dto.code,
    userName: dto.userName,
    route: dto.route
  }, (0,rmmsOrgForm/* orgFromDto */._x)(AttendanceFormSlideout_objectSpread(AttendanceFormSlideout_objectSpread({}, dto), {}, {
    route: dto.route
  }))), {}, {
    assigneeOrgName: (_dto$assigneeOrgName = dto.assigneeOrgName) !== null && _dto$assigneeOrgName !== void 0 ? _dto$assigneeOrgName : '',
    checkInAt: dto.checkInAt,
    kmPoint: (_dto$kmPoint = dto.kmPoint) !== null && _dto$kmPoint !== void 0 ? _dto$kmPoint : '',
    lat: dto.lat,
    lng: dto.lng,
    inZone: dto.inZone,
    status: dto.status,
    note: (_dto$note = dto.note) !== null && _dto$note !== void 0 ? _dto$note : '',
    updatedAt: (_dto$updatedAt = dto.updatedAt) !== null && _dto$updatedAt !== void 0 ? _dto$updatedAt : '',
    isActive: dto.isActive !== false
  });
}
var AttendanceFormSlideout = function AttendanceFormSlideout(_ref) {
  var _editing$userDisplayN, _form$lat, _form$lng;
  var open = _ref.open,
    mode = _ref.mode,
    editing = _ref.editing,
    onClose = _ref.onClose,
    onSaved = _ref.onSaved,
    onModeChange = _ref.onModeChange;
  var dispatch = (0,react_redux/* useDispatch */.wA)();
  var perms = attendanceListPermissions();
  var readOnly = mode === 'view';
  var _useState = (0,external_react_.useState)(AttendanceFormSlideout_objectSpread({}, EMPTY_FORM)),
    _useState2 = (0,slicedToArray/* default */.A)(_useState, 2),
    form = _useState2[0],
    setForm = _useState2[1];
  var _useState3 = (0,external_react_.useState)(null),
    _useState4 = (0,slicedToArray/* default */.A)(_useState3, 2),
    currentId = _useState4[0],
    setCurrentId = _useState4[1];
  var _useState5 = (0,external_react_.useState)(new Set()),
    _useState6 = (0,slicedToArray/* default */.A)(_useState5, 2),
    invalid = _useState6[0],
    setInvalid = _useState6[1];
  var _useState7 = (0,external_react_.useState)(false),
    _useState8 = (0,slicedToArray/* default */.A)(_useState7, 2),
    showBanner = _useState8[0],
    setShowBanner = _useState8[1];
  var _useState9 = (0,external_react_.useState)(false),
    _useState0 = (0,slicedToArray/* default */.A)(_useState9, 2),
    loading = _useState0[0],
    setLoading = _useState0[1];
  var _useState1 = (0,external_react_.useState)(false),
    _useState10 = (0,slicedToArray/* default */.A)(_useState1, 2),
    saving = _useState10[0],
    setSaving = _useState10[1];
  var _useState11 = (0,external_react_.useState)(false),
    _useState12 = (0,slicedToArray/* default */.A)(_useState11, 2),
    dirty = _useState12[0],
    setDirty = _useState12[1];
  var _useLeaveConfirm = (0,linm_web_common_components_dist/* useLeaveConfirm */.b5S)({
      isDirty: dirty && !readOnly
    }),
    guardedNavigate = _useLeaveConfirm.guardedNavigate,
    leaveConfirmModalProps = _useLeaveConfirm.leaveConfirmModalProps;
  (0,external_react_.useEffect)(function () {
    if (!open) return;
    var cancelled = false;
    var boot = /*#__PURE__*/function () {
      var _ref2 = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee() {
        var dto, _t;
        return regenerator_default().wrap(function (_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              setLoading(true);
              setInvalid(new Set());
              setShowBanner(false);
              setDirty(false);
              _context.prev = 1;
              if (!(mode === 'create')) {
                _context.next = 2;
                break;
              }
              setCurrentId(null);
              setForm(AttendanceFormSlideout_objectSpread(AttendanceFormSlideout_objectSpread({}, EMPTY_FORM), {}, {
                code: '(tự sinh)',
                checkInAt: new Date().toISOString(),
                updatedAt: ''
              }));
              return _context.abrupt("return");
            case 2:
              if (editing) {
                _context.next = 3;
                break;
              }
              return _context.abrupt("return");
            case 3:
              if (!(mode === 'copy' || mode === 'edit' || mode === 'view')) {
                _context.next = 6;
                break;
              }
              _context.next = 4;
              return attendanceService.getById(editing.id);
            case 4:
              dto = _context.sent;
              if (!cancelled) {
                _context.next = 5;
                break;
              }
              return _context.abrupt("return");
            case 5:
              setCurrentId(mode === 'copy' ? null : dto.id);
              setForm(fromDto(dto, mode === 'copy'));
            case 6:
              _context.next = 8;
              break;
            case 7:
              _context.prev = 7;
              _t = _context["catch"](1);
              if (!cancelled) onClose();
            case 8:
              _context.prev = 8;
              if (!cancelled) setLoading(false);
              return _context.finish(8);
            case 9:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[1, 7, 8, 9]]);
      }));
      return function boot() {
        return _ref2.apply(this, arguments);
      };
    }();
    void boot();
    return function () {
      cancelled = true;
    };
  }, [open, mode, editing, onClose]);
  var statusOptions = (0,external_react_.useMemo)(function () {
    return ATTENDANCE_STATUSES.map(function (s) {
      return {
        value: s,
        label: s
      };
    });
  }, []);
  var inZoneOptions = (0,external_react_.useMemo)(function () {
    return [{
      value: 'true',
      label: 'Trong zone'
    }, {
      value: 'false',
      label: 'Ngoài zone'
    }];
  }, []);
  var updateField = function updateField(key, value) {
    if (readOnly) return;
    setDirty(true);
    setForm(function (prev) {
      return AttendanceFormSlideout_objectSpread(AttendanceFormSlideout_objectSpread({}, prev), {}, (0,defineProperty/* default */.A)({}, key, value));
    });
    setInvalid(function (prev) {
      var next = new Set(prev);
      next.delete(String(key));
      return next;
    });
  };
  var validate = function validate() {
    var bad = new Set();
    REQUIRED.forEach(function (key) {
      var val = form[key];
      if (val === '' || val == null || typeof val === 'string' && !val.trim()) {
        bad.add(key);
      }
    });
    if (Number.isNaN(Number(form.lat))) bad.add('lat');
    if (Number.isNaN(Number(form.lng))) bad.add('lng');
    setInvalid(bad);
    setShowBanner(bad.size > 0);
    return bad.size === 0;
  };
  var handleClose = function handleClose() {
    guardedNavigate(function () {
      return onClose();
    });
  };
  var handleSave = /*#__PURE__*/function () {
    var _ref3 = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee2() {
      var payload, _t2;
      return regenerator_default().wrap(function (_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            if (!readOnly) {
              _context2.next = 1;
              break;
            }
            return _context2.abrupt("return");
          case 1:
            if (!(mode === 'edit' && !perms.canUpdate)) {
              _context2.next = 2;
              break;
            }
            return _context2.abrupt("return");
          case 2:
            if (!((mode === 'create' || mode === 'copy') && !perms.canCreate)) {
              _context2.next = 3;
              break;
            }
            return _context2.abrupt("return");
          case 3:
            if (validate()) {
              _context2.next = 4;
              break;
            }
            return _context2.abrupt("return");
          case 4:
            setSaving(true);
            _context2.prev = 5;
            payload = AttendanceFormSlideout_objectSpread(AttendanceFormSlideout_objectSpread({
              userName: form.userName.trim(),
              route: (form.routeCode || form.route).trim()
            }, (0,rmmsOrgForm/* orgPersistPayload */.xr)(orgOf(form))), {}, {
              checkInAt: form.checkInAt,
              kmPoint: form.kmPoint.trim(),
              lat: Number(form.lat),
              lng: Number(form.lng),
              inZone: form.inZone,
              status: form.status,
              note: form.note
            });
            if (!(mode === 'edit' && currentId)) {
              _context2.next = 7;
              break;
            }
            _context2.next = 6;
            return attendanceService.update(currentId, payload);
          case 6:
            _context2.next = 8;
            break;
          case 7:
            _context2.next = 8;
            return attendanceService.create(payload);
          case 8:
            setDirty(false);
            (0,linm_web_common_components_dist/* dispatchAppToast */.tWi)(dispatch, {
              message: 'Đã lưu bản ghi chấm công',
              type: 'success'
            });
            onSaved();
            _context2.next = 10;
            break;
          case 9:
            _context2.prev = 9;
            _t2 = _context2["catch"](5);
            (0,linm_web_common_components_dist/* dispatchAppToast */.tWi)(dispatch, {
              message: _t2 instanceof Error ? _t2.message : 'Lưu chấm công thất bại',
              type: 'error'
            });
          case 10:
            _context2.prev = 10;
            setSaving(false);
            return _context2.finish(10);
          case 11:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[5, 9, 10, 11]]);
    }));
    return function handleSave() {
      return _ref3.apply(this, arguments);
    };
  }();
  var fieldClass = function fieldClass(key) {
    return [AttendanceListPage_AttendanceFormSlideout_module.field, invalid.has(key) ? AttendanceListPage_AttendanceFormSlideout_module.fieldInvalid : ''].filter(Boolean).join(' ');
  };
  var titleNode = /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: AttendanceListPage_AttendanceFormSlideout_module.titleBlock,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("h2", {
      className: AttendanceListPage_AttendanceFormSlideout_module.title,
      children: MODE_TITLE[mode]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
      className: AttendanceListPage_AttendanceFormSlideout_module.badge,
      children: mode
    })]
  });
  var body = loading ? /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: AttendanceListPage_AttendanceFormSlideout_module.loading,
    "data-testid": "attendance-form-loading",
    children: "\u0110ang t\u1EA3i\u2026"
  }) : /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
      className: AttendanceListPage_AttendanceFormSlideout_module.z1h,
      "data-testid": "attendance-form-z1h",
      children: [MODE_HINT[mode], " \xB7 Slideout \xB7 footer actions only \xB7 10 controls"]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "".concat(AttendanceListPage_AttendanceFormSlideout_module.banner, " ").concat(showBanner ? AttendanceListPage_AttendanceFormSlideout_module.bannerOn : ''),
      children: "Vui l\xF2ng nh\u1EADp \u0111\u1EE7 c\xE1c tr\u01B0\u1EDDng b\u1EAFt bu\u1ED9c (\u0111\xE1nh d\u1EA5u *)."
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: AttendanceListPage_AttendanceFormSlideout_module.z2,
      "data-testid": "attendance-form-z2",
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("section", {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("h3", {
          className: AttendanceListPage_AttendanceFormSlideout_module.sectionTitle,
          children: "Th\xF4ng tin ch\u1EA5m c\xF4ng"
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: AttendanceListPage_AttendanceFormSlideout_module.fields,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: fieldClass('code'),
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* Input */.pde, {
              label: "M\xE3 ch\u1EA5m c\xF4ng",
              value: form.code,
              readOnly: true,
              fullWidth: true,
              "data-testid": "attendance-field-code"
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: fieldClass('status'),
            children: [readOnly ? /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* Input */.pde, {
              label: "Tr\u1EA1ng th\xE1i c\xF4ng",
              required: true,
              value: form.status,
              readOnly: true,
              fullWidth: true,
              "data-testid": "attendance-field-status"
            }) : /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* Select */.l6P, {
              label: "Tr\u1EA1ng th\xE1i c\xF4ng",
              required: true,
              value: form.status,
              options: statusOptions,
              onChange: function onChange(e) {
                return updateField('status', e.target.value);
              },
              fullWidth: true,
              "data-testid": "attendance-field-status"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
              className: AttendanceListPage_AttendanceFormSlideout_module.fieldError,
              children: "B\u1EAFt bu\u1ED9c"
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "".concat(fieldClass('userName'), " ").concat(AttendanceListPage_AttendanceFormSlideout_module.span2),
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* Input */.pde, {
              label: "Nh\xE2n vi\xEAn",
              required: true,
              value: readOnly ? (editing === null || editing === void 0 || (_editing$userDisplayN = editing.userDisplayName) === null || _editing$userDisplayN === void 0 ? void 0 : _editing$userDisplayN.trim()) || form.userName : form.userName,
              readOnly: readOnly,
              onChange: function onChange(e) {
                return updateField('userName', e.target.value);
              },
              fullWidth: true,
              "data-testid": "attendance-field-userName"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
              className: AttendanceListPage_AttendanceFormSlideout_module.fieldError,
              children: "B\u1EAFt bu\u1ED9c"
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(RmmsOrgFormFields/* RmmsOrgFormFields */.J, {
            testIdPrefix: "attendance",
            value: orgOf(form),
            disabled: readOnly,
            routeError: invalid.has('route') ? 'Bắt buộc' : undefined,
            onChange: function onChange(next) {
              setForm(function (f) {
                return AttendanceFormSlideout_objectSpread(AttendanceFormSlideout_objectSpread({}, f), {}, {
                  zoneOrgCode: next.zoneOrgCode,
                  zoneOrgName: next.zoneOrgName,
                  vpOrgCode: next.vpOrgCode,
                  vpOrgName: next.vpOrgName,
                  assigneeCode: next.assigneeCode,
                  assigneeOrgName: next.assigneeName,
                  routeCode: next.routeCode,
                  route: next.routeCode
                });
              });
              setDirty(true);
            }
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: fieldClass('checkInAt'),
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* Input */.pde, {
              label: "Th\u1EDDi \u0111i\u1EC3m check-in",
              required: true,
              type: "datetime-local",
              value: toLocalInput(form.checkInAt),
              readOnly: readOnly,
              onChange: function onChange(e) {
                return updateField('checkInAt', fromLocalInput(e.target.value));
              },
              fullWidth: true,
              "data-testid": "attendance-field-checkInAt"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
              className: AttendanceListPage_AttendanceFormSlideout_module.fieldError,
              children: "B\u1EAFt bu\u1ED9c"
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: AttendanceListPage_AttendanceFormSlideout_module.field,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* Input */.pde, {
              label: "L\xFD tr\xECnh (Km+)",
              value: form.kmPoint,
              readOnly: readOnly,
              onChange: function onChange(e) {
                return updateField('kmPoint', e.target.value);
              },
              placeholder: "VD: km12+000",
              fullWidth: true,
              "data-testid": "attendance-field-kmPoint"
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: fieldClass('inZone'),
            children: readOnly ? /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* Input */.pde, {
              label: "Trong zone (InZone)",
              value: form.inZone ? 'Trong zone' : 'Ngoài zone',
              readOnly: true,
              fullWidth: true,
              "data-testid": "attendance-field-inZone"
            }) : /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* Select */.l6P, {
              label: "Trong zone (InZone)",
              value: form.inZone ? 'true' : 'false',
              options: inZoneOptions,
              onChange: function onChange(e) {
                return updateField('inZone', e.target.value === 'true');
              },
              fullWidth: true,
              "data-testid": "attendance-field-inZone"
            })
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("section", {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("h3", {
          className: AttendanceListPage_AttendanceFormSlideout_module.sectionTitle,
          children: "\u0110\u1ECBnh v\u1ECB GPS"
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: AttendanceListPage_AttendanceFormSlideout_module.fields,
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: fieldClass('lat'),
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* Input */.pde, {
              label: "V\u0129 \u0111\u1ED9 (Lat)",
              required: true,
              type: "number",
              step: "0.00001",
              value: (_form$lat = form.lat) !== null && _form$lat !== void 0 ? _form$lat : '',
              readOnly: readOnly,
              onChange: function onChange(e) {
                return updateField('lat', e.target.value === '' ? 0 : Number(e.target.value));
              },
              fullWidth: true,
              "data-testid": "attendance-field-lat"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
              className: AttendanceListPage_AttendanceFormSlideout_module.fieldError,
              children: "B\u1EAFt bu\u1ED9c"
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: fieldClass('lng'),
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* Input */.pde, {
              label: "Kinh \u0111\u1ED9 (Lng)",
              required: true,
              type: "number",
              step: "0.00001",
              value: (_form$lng = form.lng) !== null && _form$lng !== void 0 ? _form$lng : '',
              readOnly: readOnly,
              onChange: function onChange(e) {
                return updateField('lng', e.target.value === '' ? 0 : Number(e.target.value));
              },
              fullWidth: true,
              "data-testid": "attendance-field-lng"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
              className: AttendanceListPage_AttendanceFormSlideout_module.fieldError,
              children: "B\u1EAFt bu\u1ED9c"
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "".concat(AttendanceListPage_AttendanceFormSlideout_module.field, " ").concat(AttendanceListPage_AttendanceFormSlideout_module.span2),
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* Input */.pde, {
              label: "Ghi ch\xFA",
              value: form.note,
              readOnly: readOnly,
              onChange: function onChange(e) {
                return updateField('note', e.target.value);
              },
              fullWidth: true,
              "data-testid": "attendance-field-note"
            })
          })]
        })]
      })]
    })]
  });
  var footer = /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: AttendanceListPage_AttendanceFormSlideout_module.z3,
    "data-testid": "attendance-form-z3",
    children: readOnly ? /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* Button */.$nd, {
        variant: "secondary",
        onClick: handleClose,
        "data-testid": "attendance-btn-close",
        children: "\u0110\xF3ng"
      }), currentId && perms.canCreate ? /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* Button */.$nd, {
        variant: "secondary",
        onClick: function onClick() {
          return onModeChange('copy');
        },
        "data-testid": "attendance-btn-to-copy",
        children: "Sao ch\xE9p"
      }) : null, currentId && perms.canUpdate ? /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* Button */.$nd, {
        variant: "primary",
        onClick: function onClick() {
          return onModeChange('edit');
        },
        "data-testid": "attendance-btn-to-edit",
        children: "S\u1EEDa"
      }) : null]
    }) : /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* Button */.$nd, {
        variant: "secondary",
        onClick: handleClose,
        "data-testid": "attendance-btn-cancel",
        children: "H\u1EE7y"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* Button */.$nd, {
        variant: "primary",
        onClick: function onClick() {
          return void handleSave();
        },
        loading: saving,
        "data-testid": "attendance-btn-save",
        children: "L\u01B0u"
      })]
    })
  });
  (0,useShellPageTitle/* useShellPageTitle */.D)(MODE_TITLE[mode]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* Slideout */.SZS, {
      isOpen: open,
      onClose: handleClose,
      title: titleNode,
      width: 720,
      customFooter: footer,
      "data-testid": "rmms-attendance-form-slideout",
      children: body
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* LeaveConfirmModal */.N24, AttendanceFormSlideout_objectSpread({}, leaveConfirmModalProps))]
  });
};
/* harmony default export */ const AttendanceListPage_AttendanceFormSlideout = ((/* unused pure expression or super */ null && (AttendanceFormSlideout)));
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./src/pages/AttendanceListPage/AttendanceListPage.module.css
var AttendanceListPage_module = __webpack_require__(5184);
;// ./src/pages/AttendanceListPage/AttendanceListPage.module.css

      
      
      
      
      
      
      
      
      

var AttendanceListPage_module_options = {};

AttendanceListPage_module_options.styleTagTransform = (styleTagTransform_default());
AttendanceListPage_module_options.setAttributes = (setAttributesWithoutAttributes_default());
AttendanceListPage_module_options.insert = insertBySelector_default().bind(null, "head");
AttendanceListPage_module_options.domAPI = (styleDomAPI_default());
AttendanceListPage_module_options.insertStyleElement = (insertStyleElement_default());

var AttendanceListPage_module_update = injectStylesIntoStyleTag_default()(AttendanceListPage_module/* default */.A, AttendanceListPage_module_options);




       /* harmony default export */ const AttendanceListPage_AttendanceListPage_module = (AttendanceListPage_module/* default */.A && AttendanceListPage_module/* default */.A.locals ? AttendanceListPage_module/* default */.A.locals : undefined);

// EXTERNAL MODULE: ./src/pages/buildRmmsGenericToolbar.tsx
var buildRmmsGenericToolbar = __webpack_require__(5503);
;// ./src/pages/AttendanceListPage/AttendanceListPage.tsx





function AttendanceListPage_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function AttendanceListPage_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? AttendanceListPage_ownKeys(Object(t), !0).forEach(function (r) { (0,defineProperty/* default */.A)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : AttendanceListPage_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
;














var TEST_ID = 'rmms-attendance-list';
var PAGE_ID = 'attendance';
var CATALOG_KIND = 'attendance-logs';
var ROW_MENU_HINT_KEY = "".concat(TEST_ID, "-row-menu-hint-dismissed");
function formatCheckIn(iso) {
  if (!iso) return '—';
  try {
    return new Date(iso).toLocaleString('vi-VN');
  } catch (_unused) {
    return iso;
  }
}
var AttendanceListPage = function AttendanceListPage() {
  var _rowMenu$x, _rowMenu$y, _pendingDelete$userDi;
  var dispatch = (0,react_redux/* useDispatch */.wA)();
  var catalogHistory = (0,linm_web_common_components_dist/* useCatalogHistoryModal */.Sfw)();
  var _useSearchParams = (0,dist/* useSearchParams */.ok)(),
    _useSearchParams2 = (0,slicedToArray/* default */.A)(_useSearchParams, 2),
    searchParams = _useSearchParams2[0],
    setSearchParams = _useSearchParams2[1];
  var perms = attendanceListPermissions();
  var _useCatalogUiSchema = (0,useCatalogUiSchema/* useCatalogUiSchema */.k)(CATALOG_KIND),
    schema = _useCatalogUiSchema.schema,
    reloadSchema = _useCatalogUiSchema.reload;
  var _useState = (0,external_react_.useState)(''),
    _useState2 = (0,slicedToArray/* default */.A)(_useState, 2),
    searchDraft = _useState2[0],
    setSearchDraft = _useState2[1];
  var _useState3 = (0,external_react_.useState)(''),
    _useState4 = (0,slicedToArray/* default */.A)(_useState3, 2),
    statusDraft = _useState4[0],
    setStatusDraft = _useState4[1];
  var _useState5 = (0,external_react_.useState)(''),
    _useState6 = (0,slicedToArray/* default */.A)(_useState5, 2),
    routeDraft = _useState6[0],
    setRouteDraft = _useState6[1];
  var _useState7 = (0,external_react_.useState)(false),
    _useState8 = (0,slicedToArray/* default */.A)(_useState7, 2),
    onlyOutZoneDraft = _useState8[0],
    setOnlyOutZoneDraft = _useState8[1];
  var _useState9 = (0,external_react_.useState)(''),
    _useState0 = (0,slicedToArray/* default */.A)(_useState9, 2),
    search = _useState0[0],
    setSearch = _useState0[1];
  var _useState1 = (0,external_react_.useState)(''),
    _useState10 = (0,slicedToArray/* default */.A)(_useState1, 2),
    statusFilter = _useState10[0],
    setStatusFilter = _useState10[1];
  var _useState11 = (0,external_react_.useState)(''),
    _useState12 = (0,slicedToArray/* default */.A)(_useState11, 2),
    routeFilter = _useState12[0],
    setRouteFilter = _useState12[1];
  var _useState13 = (0,external_react_.useState)(false),
    _useState14 = (0,slicedToArray/* default */.A)(_useState13, 2),
    onlyOutZone = _useState14[0],
    setOnlyOutZone = _useState14[1];
  var _useState15 = (0,external_react_.useState)(1),
    _useState16 = (0,slicedToArray/* default */.A)(_useState15, 2),
    page = _useState16[0],
    setPage = _useState16[1];
  var _useState17 = (0,external_react_.useState)(50),
    _useState18 = (0,slicedToArray/* default */.A)(_useState17, 2),
    pageSize = _useState18[0],
    setPageSize = _useState18[1];
  var _useState19 = (0,external_react_.useState)([]),
    _useState20 = (0,slicedToArray/* default */.A)(_useState19, 2),
    items = _useState20[0],
    setItems = _useState20[1];
  var _useState21 = (0,external_react_.useState)(0),
    _useState22 = (0,slicedToArray/* default */.A)(_useState21, 2),
    totalCount = _useState22[0],
    setTotalCount = _useState22[1];
  var _useState23 = (0,external_react_.useState)(false),
    _useState24 = (0,slicedToArray/* default */.A)(_useState23, 2),
    slideOpen = _useState24[0],
    setSlideOpen = _useState24[1];
  var _useState25 = (0,external_react_.useState)('create'),
    _useState26 = (0,slicedToArray/* default */.A)(_useState25, 2),
    slideMode = _useState26[0],
    setSlideMode = _useState26[1];
  var _useState27 = (0,external_react_.useState)(null),
    _useState28 = (0,slicedToArray/* default */.A)(_useState27, 2),
    editing = _useState28[0],
    setEditing = _useState28[1];
  var _useState29 = (0,external_react_.useState)(null),
    _useState30 = (0,slicedToArray/* default */.A)(_useState29, 2),
    rowMenu = _useState30[0],
    setRowMenu = _useState30[1];
  var _useState31 = (0,external_react_.useState)(false),
    _useState32 = (0,slicedToArray/* default */.A)(_useState31, 2),
    configOpen = _useState32[0],
    setConfigOpen = _useState32[1];
  var _useState33 = (0,external_react_.useState)(null),
    _useState34 = (0,slicedToArray/* default */.A)(_useState33, 2),
    pendingDelete = _useState34[0],
    setPendingDelete = _useState34[1];
  var _useState35 = (0,external_react_.useState)(function () {
      return AttendanceListPage_objectSpread(AttendanceListPage_objectSpread(AttendanceListPage_objectSpread({}, linm_web_common_components_dist/* DEFAULT_CATALOG_LIST_TABLE_CONFIG */.bkK), (0,linm_web_common_components_dist/* catalogListTableConfigFromSchema */.D5f)(undefined)), {}, {
        resizable: true
      });
    }),
    _useState36 = (0,slicedToArray/* default */.A)(_useState35, 2),
    tableConfig = _useState36[0],
    setTableConfig = _useState36[1];
  (0,external_react_.useEffect)(function () {
    if (!(schema !== null && schema !== void 0 && schema.list)) return;
    setTableConfig(AttendanceListPage_objectSpread(AttendanceListPage_objectSpread(AttendanceListPage_objectSpread({}, linm_web_common_components_dist/* DEFAULT_CATALOG_LIST_TABLE_CONFIG */.bkK), (0,linm_web_common_components_dist/* catalogListTableConfigFromSchema */.D5f)(schema.list)), {}, {
      resizable: true
    }));
  }, [schema]);
  var _useServerPagedListLo = (0,linm_web_common_components_dist/* useServerPagedListLoading */._W4)(),
    showTableLoading = _useServerPagedListLo.showTableLoading,
    pageLoading = _useServerPagedListLo.pageLoading,
    pulseSearch = _useServerPagedListLo.pulseSearch,
    setLoadingMode = _useServerPagedListLo.setLoadingMode,
    beginFetch = _useServerPagedListLo.beginFetch,
    endFetch = _useServerPagedListLo.endFetch;
  var load = (0,external_react_.useCallback)(function () {
    beginFetch();
    attendanceService.getList({
      search: search.trim() || undefined,
      status: statusFilter || undefined,
      route: routeFilter || undefined,
      onlyOutZone: onlyOutZone || undefined,
      page: page,
      pageSize: pageSize
    }).then(function (res) {
      setItems(res.items);
      setTotalCount(res.totalCount);
    }).catch(function () {
      setItems([]);
      setTotalCount(0);
    }).finally(function () {
      return endFetch();
    });
  }, [search, statusFilter, routeFilter, onlyOutZone, page, pageSize, beginFetch, endFetch]);
  (0,external_react_.useEffect)(function () {
    var cancelled = false;
    var t = window.setTimeout(function () {
      if (!cancelled) load();
    }, 0);
    return function () {
      cancelled = true;
      window.clearTimeout(t);
    };
  }, [load]);
  (0,external_react_.useEffect)(function () {
    var form = searchParams.get('form');
    if (!form) return;
    var cancelled = false;
    var run = /*#__PURE__*/function () {
      var _ref = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee() {
        var row, _t;
        return regenerator_default().wrap(function (_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!(form === 'create')) {
                _context.next = 2;
                break;
              }
              if (!cancelled) {
                _context.next = 1;
                break;
              }
              return _context.abrupt("return");
            case 1:
              setEditing(null);
              setSlideMode('create');
              setSlideOpen(true);
              _context.next = 7;
              break;
            case 2:
              if (!((form === 'edit' || form === 'view' || form === 'copy') && searchParams.get('id'))) {
                _context.next = 7;
                break;
              }
              _context.prev = 3;
              _context.next = 4;
              return attendanceService.getById(searchParams.get('id'));
            case 4:
              row = _context.sent;
              if (!cancelled) {
                _context.next = 5;
                break;
              }
              return _context.abrupt("return");
            case 5:
              setEditing(row);
              setSlideMode(form);
              setSlideOpen(true);
              _context.next = 7;
              break;
            case 6:
              _context.prev = 6;
              _t = _context["catch"](3);
            case 7:
              setSearchParams({}, {
                replace: true
              });
            case 8:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[3, 6]]);
      }));
      return function run() {
        return _ref.apply(this, arguments);
      };
    }();
    void run();
    return function () {
      cancelled = true;
    };
  }, [searchParams, setSearchParams]);
  var listSelection = (0,linm_web_common_components_dist/* useErpListSelection */.tk)({
    rows: items,
    totalCount: totalCount,
    page: page,
    pageSize: pageSize,
    getRowId: function getRowId(r) {
      return r.id;
    }
  });
  var activeRow = listSelection.activeRow,
    selectActiveRow = listSelection.selectActiveRow,
    clearSelection = listSelection.clearSelection;
  var applyFilters = (0,external_react_.useCallback)(function (nextSearch, nextStatus, nextRoute, nextOutZone) {
    pulseSearch(function () {
      setSearch(nextSearch.trim());
      setStatusFilter(nextStatus);
      setRouteFilter(nextRoute);
      setOnlyOutZone(nextOutZone);
      setPage(1);
    });
  }, [pulseSearch]);
  var handleSearch = (0,external_react_.useCallback)(function () {
    applyFilters(searchDraft, statusDraft, routeDraft, onlyOutZoneDraft);
  }, [applyFilters, searchDraft, statusDraft, routeDraft, onlyOutZoneDraft]);
  var handleStatusChange = (0,external_react_.useCallback)(function (value) {
    setStatusDraft(value);
    applyFilters(searchDraft, value, routeDraft, onlyOutZoneDraft);
  }, [applyFilters, searchDraft, routeDraft, onlyOutZoneDraft]);
  var handleRouteChange = (0,external_react_.useCallback)(function (value) {
    setRouteDraft(value);
    applyFilters(searchDraft, statusDraft, value, onlyOutZoneDraft);
  }, [applyFilters, searchDraft, statusDraft, onlyOutZoneDraft]);
  var handleOnlyOutZoneChange = (0,external_react_.useCallback)(function (checked) {
    setOnlyOutZoneDraft(checked);
    applyFilters(searchDraft, statusDraft, routeDraft, checked);
  }, [applyFilters, searchDraft, statusDraft, routeDraft]);
  var statusOptions = (0,external_react_.useMemo)(function () {
    return [{
      value: '',
      label: 'Tất cả trạng thái'
    }].concat((0,toConsumableArray/* default */.A)(ATTENDANCE_STATUSES.map(function (t) {
      return {
        value: t,
        label: t
      };
    })));
  }, []);
  var openRow = (0,external_react_.useCallback)(function (row, mode) {
    selectActiveRow(row);
    setEditing(row);
    setSlideMode(mode);
    setSlideOpen(true);
  }, [selectActiveRow]);
  var openCreate = (0,external_react_.useCallback)(function () {
    if (!perms.canCreate) return;
    setEditing(null);
    setSlideMode('create');
    setSlideOpen(true);
  }, [perms.canCreate]);
  var requestDelete = (0,external_react_.useCallback)(function (row) {
    if (!perms.canDelete) {
      (0,linm_web_common_components_dist/* dispatchAppToast */.tWi)(dispatch, {
        message: 'Không có quyền xóa chấm công',
        type: 'warning'
      });
      return;
    }
    setPendingDelete(row);
  }, [perms.canDelete, dispatch]);
  var confirmDelete = (0,external_react_.useCallback)(/*#__PURE__*/(0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee2() {
    var row, _t2;
    return regenerator_default().wrap(function (_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          row = pendingDelete;
          if (row) {
            _context2.next = 1;
            break;
          }
          return _context2.abrupt("return");
        case 1:
          setPendingDelete(null);
          _context2.prev = 2;
          _context2.next = 3;
          return attendanceService.delete(row.id);
        case 3:
          (0,linm_web_common_components_dist/* dispatchAppToast */.tWi)(dispatch, {
            message: 'Đã xóa bản ghi chấm công',
            type: 'success'
          });
          clearSelection();
          setLoadingMode('filter');
          load();
          _context2.next = 5;
          break;
        case 4:
          _context2.prev = 4;
          _t2 = _context2["catch"](2);
          (0,linm_web_common_components_dist/* dispatchAppToast */.tWi)(dispatch, {
            message: _t2 instanceof Error ? _t2.message : 'Xóa chấm công thất bại',
            type: 'error'
          });
        case 5:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[2, 4]]);
  })), [pendingDelete, dispatch, clearSelection, setLoadingMode, load]);
  var reloadAll = (0,external_react_.useCallback)(function () {
    setLoadingMode('filter');
    load();
  }, [load, setLoadingMode]);
  var handlePageChange = (0,external_react_.useCallback)(function (next) {
    setPage(next);
  }, []);
  var handlePageSizeChange = (0,external_react_.useCallback)(function (next) {
    setPageSize(next);
    setPage(1);
  }, []);
  var handleHistoryToolbar = (0,external_react_.useCallback)(function () {
    if (!activeRow) {
      (0,linm_web_common_components_dist/* dispatchAppToast */.tWi)(dispatch, {
        message: 'Chọn một dòng (menu dòng) rồi mở Lịch sử.',
        type: 'info'
      });
      return;
    }
    catalogHistory.openHistory({
      documentType: PAGE_ID,
      documentId: activeRow.id,
      documentCode: activeRow.code
    });
  }, [activeRow, catalogHistory.openHistory, dispatch]);
  var openConfig = (0,external_react_.useCallback)(function () {
    setConfigOpen(true);
  }, []);
  var catalogToolbar = (0,external_react_.useMemo)(function () {
    return {
      testIdPrefix: TEST_ID,
      onRefresh: reloadAll,
      canAdd: perms.canCreate,
      onAdd: openCreate,
      canHistory: true,
      onHistory: handleHistoryToolbar,
      showSchemaConfig: true,
      onEditConfig: openConfig,
      showEdit: Boolean(activeRow && perms.canUpdate),
      showView: Boolean(activeRow && perms.canRead),
      onEdit: activeRow ? function () {
        return openRow(activeRow, 'edit');
      } : undefined,
      onView: activeRow ? function () {
        return openRow(activeRow, 'view');
      } : undefined,
      canDelete: Boolean(activeRow && perms.canDelete),
      onDelete: activeRow ? function () {
        requestDelete(activeRow);
      } : undefined
    };
  }, [reloadAll, perms.canCreate, perms.canUpdate, perms.canRead, perms.canDelete, openCreate, handleHistoryToolbar, openConfig, activeRow, openRow, requestDelete]);
  var listFilters = (0,external_react_.useMemo)(function () {
    return /*#__PURE__*/(0,jsx_runtime.jsxs)(linm_web_common_components_dist/* ErpListHeaderFilters */.S91, {
      testIdPrefix: TEST_ID,
      filterCols: 4,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* LinListFilterField */.a7f, {
        testId: "".concat(TEST_ID, "-field-search"),
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* SearchTextInput */.UAT, {
          label: "T\xECm ki\u1EBFm",
          placeholder: "M\xE3 / NV / tuy\u1EBFn / tr\u1EA1ng th\xE1i / GPS\u2026",
          value: searchDraft,
          onChange: setSearchDraft,
          onSearch: handleSearch,
          testId: "".concat(TEST_ID, "-search-text")
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* LinListFilterField */.a7f, {
        testId: "".concat(TEST_ID, "-field-status"),
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* Select */.l6P, {
          label: "Tr\u1EA1ng th\xE1i c\xF4ng",
          options: statusOptions,
          value: statusDraft,
          onChange: function onChange(e) {
            return handleStatusChange(String(e.target.value));
          },
          "data-testid": "".concat(TEST_ID, "-status-filter"),
          fullWidth: true,
          size: "small"
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* LinListFilterField */.a7f, {
        testId: "".concat(TEST_ID, "-field-route"),
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* SearchInput */.DOo, {
          label: "Tuy\u1EBFn \u0111\u01B0\u1EDDng",
          config: lookups/* ROAD_ROUTE_LOOKUP_CONFIG */.FR,
          value: routeDraft,
          primaryDisplay: (0,lookups/* lookupNameOnly */.Ch)(lookups/* ROAD_ROUTE_SEED */.FJ, routeDraft),
          showSecondaryInput: false,
          placeholder: "T\u1EA5t c\u1EA3 tuy\u1EBFn",
          onChange: function onChange(item) {
            return handleRouteChange(item.value);
          },
          onClear: function onClear() {
            return handleRouteChange('');
          }
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* LinListFilterField */.a7f, {
        testId: "".concat(TEST_ID, "-field-only-out-zone"),
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* Checkbox */.Sc0, {
          label: "Ch\u1EC9 l\u1EC7ch zone",
          checked: onlyOutZoneDraft,
          onChange: function onChange(e) {
            return handleOnlyOutZoneChange(e.target.checked);
          },
          "data-testid": "".concat(TEST_ID, "-only-out-zone")
        })
      })]
    });
  }, [searchDraft, statusDraft, routeDraft, onlyOutZoneDraft, handleSearch, handleStatusChange, handleRouteChange, handleOnlyOutZoneChange, statusOptions]);
  var uiColumns = (0,external_react_.useMemo)(function () {
    return [{
      key: 'code',
      label: 'Mã chấm công',
      width: '140px',
      control: 'TEXT',
      allowSort: true,
      render: function render(row) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)("button", {
          type: "button",
          className: AttendanceListPage_AttendanceListPage_module.codeLink,
          onClick: function onClick() {
            return openRow(row, 'view');
          },
          "data-testid": "".concat(TEST_ID, "-code-").concat(row.code),
          children: row.code
        });
      },
      getDisplayValue: function getDisplayValue(r) {
        return r.code;
      }
    }, {
      key: 'userName',
      label: 'Nhân viên',
      width: '160px',
      control: 'TEXT',
      allowSort: true,
      render: function render(row) {
        var _row$userDisplayName;
        return ((_row$userDisplayName = row.userDisplayName) === null || _row$userDisplayName === void 0 ? void 0 : _row$userDisplayName.trim()) || row.userName;
      },
      getDisplayValue: function getDisplayValue(r) {
        var _r$userDisplayName;
        return ((_r$userDisplayName = r.userDisplayName) === null || _r$userDisplayName === void 0 ? void 0 : _r$userDisplayName.trim()) || r.userName;
      }
    }, {
      key: 'route',
      label: 'Tuyến đường',
      width: '100px',
      control: 'LOOKUP',
      allowSort: true,
      render: function render(row) {
        return row.route;
      },
      getDisplayValue: function getDisplayValue(r) {
        return r.route;
      }
    }, {
      key: 'checkInAt',
      label: 'Thời điểm',
      width: '160px',
      control: 'DATE',
      allowSort: true,
      render: function render(row) {
        return formatCheckIn(row.checkInAt);
      },
      getDisplayValue: function getDisplayValue(r) {
        return r.checkInAt;
      }
    }, {
      key: 'kmPoint',
      label: 'Lý trình',
      width: '110px',
      control: 'TEXT',
      render: function render(row) {
        return row.kmPoint || '—';
      },
      getDisplayValue: function getDisplayValue(r) {
        return r.kmPoint || '';
      }
    }, {
      key: 'inZone',
      label: 'InZone',
      width: '90px',
      control: 'SELECT',
      allowSort: true,
      render: function render(row) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          className: row.inZone ? AttendanceListPage_AttendanceListPage_module.inZoneOk : AttendanceListPage_AttendanceListPage_module.inZoneBad,
          children: row.inZone ? 'Trong zone' : 'Ngoài zone'
        });
      },
      getDisplayValue: function getDisplayValue(r) {
        return r.inZone ? 'Trong zone' : 'Ngoài zone';
      }
    }, {
      key: 'status',
      label: 'Trạng thái',
      width: '120px',
      control: 'SELECT',
      allowSort: true,
      render: function render(row) {
        return row.status;
      },
      getDisplayValue: function getDisplayValue(r) {
        return r.status;
      }
    }, {
      key: 'gps',
      label: 'GPS',
      width: '160px',
      control: 'TEXT',
      render: function render(row) {
        return formatGps(row.lat, row.lng);
      },
      getDisplayValue: function getDisplayValue(r) {
        return formatGps(r.lat, r.lng);
      }
    }];
  }, [openRow]);
  var gridColumns = (0,external_react_.useMemo)(function () {
    return (0,bootstrapCatalogUiSchema/* buildDynamicGridColumns */.fo)(schema, uiColumns);
  }, [schema, uiColumns]);
  var rowMenuItems = (0,external_react_.useMemo)(function () {
    return (0,linm_web_common_components_dist/* buildCatalogRowMenuItems */.ZNy)({
      showView: perms.canRead,
      showEdit: perms.canUpdate,
      showCopy: perms.canCreate,
      showHistory: perms.canRead,
      showDelete: perms.canDelete
    });
  }, [perms.canRead, perms.canUpdate, perms.canCreate, perms.canDelete]);
  var handleRowMenuSelect = (0,external_react_.useCallback)(function (action) {
    var row = rowMenu === null || rowMenu === void 0 ? void 0 : rowMenu.row;
    setRowMenu(null);
    if (!row) return;
    switch (action) {
      case 'view':
        openRow(row, 'view');
        break;
      case 'edit':
        openRow(row, 'edit');
        break;
      case 'copy':
        openRow(row, 'copy');
        break;
      case 'history':
        catalogHistory.openHistory({
          documentType: PAGE_ID,
          documentId: row.id,
          documentCode: row.code
        });
        break;
      case 'delete':
        requestDelete(row);
        break;
      default:
        break;
    }
  }, [rowMenu === null || rowMenu === void 0 ? void 0 : rowMenu.row, openRow, requestDelete, catalogHistory.openHistory]);
  var emptyMessage = search.trim() || statusFilter || routeFilter || onlyOutZone ? 'Không có bản ghi chấm công phù hợp bộ lọc.' : 'Không có dữ liệu chấm công.';
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: AttendanceListPage_AttendanceListPage_module.page,
    "data-catalog-list-page": true,
    "data-testid": "".concat(TEST_ID, "-page"),
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* LinPageLayout */.pYq, {
      kind: "catalog",
      filterBarLayout: "standard",
      testIdPrefix: TEST_ID,
      pageId: PAGE_ID,
      header: {
        title: 'Chấm công và định vị',
        titleIconClass: 'fas fa-user-clock',
        pageId: PAGE_ID
      },
      toolbar: (0,buildRmmsGenericToolbar/* fromCatalogToolbar */.F$)(catalogToolbar),
      listTitle: "S\u1ED5 ch\u1EA5m c\xF4ng / check-in",
      listRowMenuHelp: true,
      filters: listFilters,
      filtersTestId: "".concat(TEST_ID, "-filters"),
      showTableLoading: showTableLoading,
      pageLoading: pageLoading,
      skeletonRows: 8,
      footer: /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* LinCatalogListPagination */.nUj, {
        testIdPrefix: TEST_ID,
        page: page,
        pageSize: pageSize,
        totalCount: totalCount,
        onPageChange: handlePageChange,
        onPageSizeChange: handlePageSizeChange
      }),
      modals: /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(AttendanceFormSlideout, {
          open: slideOpen,
          mode: slideMode,
          editing: editing,
          onClose: function onClose() {
            return setSlideOpen(false);
          },
          onSaved: function onSaved() {
            setSlideOpen(false);
            setLoadingMode('filter');
            load();
          },
          onModeChange: setSlideMode
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* LinCatalogRowActionMenu */.G42, {
          open: rowMenu != null,
          x: (_rowMenu$x = rowMenu === null || rowMenu === void 0 ? void 0 : rowMenu.x) !== null && _rowMenu$x !== void 0 ? _rowMenu$x : 0,
          y: (_rowMenu$y = rowMenu === null || rowMenu === void 0 ? void 0 : rowMenu.y) !== null && _rowMenu$y !== void 0 ? _rowMenu$y : 0,
          testIdPrefix: TEST_ID,
          onClose: function onClose() {
            return setRowMenu(null);
          },
          onSelect: function onSelect(action) {
            handleRowMenuSelect(action);
          },
          items: rowMenuItems
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* LinCatalogUiSchemaEditorModal */.uwB, {
          isOpen: configOpen,
          onClose: function onClose() {
            return setConfigOpen(false);
          },
          testIdPrefix: TEST_ID,
          catalogKind: CATALOG_KIND,
          loadSchema: catalogUiSchemaService/* catalogUiSchemaService */.w.get,
          saveSchema: catalogUiSchemaService/* catalogUiSchemaService */.w.save,
          onSaved: function onSaved(next) {
            setTableConfig(AttendanceListPage_objectSpread(AttendanceListPage_objectSpread(AttendanceListPage_objectSpread({}, linm_web_common_components_dist/* DEFAULT_CATALOG_LIST_TABLE_CONFIG */.bkK), (0,linm_web_common_components_dist/* catalogListTableConfigFromSchema */.D5f)(next.list)), {}, {
              resizable: true
            }));
            reloadSchema();
            setConfigOpen(false);
          },
          onError: function onError(message) {
            return (0,linm_web_common_components_dist/* dispatchAppToast */.tWi)(dispatch, {
              message: message,
              type: 'error'
            });
          },
          onSuccess: function onSuccess(message) {
            return (0,linm_web_common_components_dist/* dispatchAppToast */.tWi)(dispatch, {
              message: message,
              type: 'success'
            });
          }
        }), catalogHistory.modalProps ? /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* LinCatalogHistoryModal */.s6Z, AttendanceListPage_objectSpread(AttendanceListPage_objectSpread({}, catalogHistory.modalProps), {}, {
          testIdPrefix: TEST_ID,
          onError: function onError(message) {
            return (0,linm_web_common_components_dist/* dispatchAppToast */.tWi)(dispatch, {
              message: message,
              type: 'error'
            });
          }
        })) : null, pendingDelete ? /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: AttendanceListPage_AttendanceListPage_module.confirmOverlay,
          "data-testid": "".concat(TEST_ID, "-confirm"),
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: AttendanceListPage_AttendanceListPage_module.confirmCard,
            role: "dialog",
            "aria-modal": "true",
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
              children: ["X\xF3a b\u1EA3n ghi ch\u1EA5m c\xF4ng \xAB", pendingDelete.code, " \u2014 ", ((_pendingDelete$userDi = pendingDelete.userDisplayName) === null || _pendingDelete$userDi === void 0 ? void 0 : _pendingDelete$userDi.trim()) || pendingDelete.userName, "\xBB?"]
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: AttendanceListPage_AttendanceListPage_module.confirmActions,
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* Button */.$nd, {
                variant: "secondary",
                size: "sm",
                onClick: function onClick() {
                  return setPendingDelete(null);
                },
                children: "H\u1EE7y"
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* Button */.$nd, {
                variant: "primary",
                size: "sm",
                onClick: function onClick() {
                  return void confirmDelete();
                },
                children: "X\xF3a"
              })]
            })]
          })
        }) : null]
      }),
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: AttendanceListPage_AttendanceListPage_module.gridWrap,
        "data-testid": "".concat(TEST_ID, "-grid-wrap"),
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* LinCatalogDataGrid */.vEK, {
          testIdPrefix: TEST_ID,
          rows: items,
          page: page,
          pageSize: pageSize,
          columns: gridColumns,
          getRowId: function getRowId(r) {
            return r.id;
          },
          selection: listSelection,
          tableConfig: tableConfig,
          paginateClient: false,
          empty: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: AttendanceListPage_AttendanceListPage_module.empty,
            "data-testid": "".concat(TEST_ID, "-empty"),
            children: emptyMessage
          }),
          onRowOpenActionMenu: function onRowOpenActionMenu(_ref3) {
            var row = _ref3.row,
              x = _ref3.x,
              y = _ref3.y;
            selectActiveRow(row);
            setRowMenu({
              row: row,
              x: x,
              y: y
            });
          },
          onRowDoubleClick: function onRowDoubleClick(row) {
            return openRow(row, 'view');
          },
          rowMenuHintDismissStorageKey: ROW_MENU_HINT_KEY
        })
      })
    })
  });
};
/* harmony default export */ const AttendanceListPage_AttendanceListPage = (AttendanceListPage);
;// ./src/pages/AttendanceListPage/index.ts


/***/ },

/***/ 5503
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F$: () => (/* binding */ fromCatalogToolbar),
/* harmony export */   Oo: () => (/* binding */ rmmsFormActionButton),
/* harmony export */   aX: () => (/* binding */ buildRmmsDetailToolbar)
/* harmony export */ });
/* unused harmony export buildRmmsGenericListToolbar */
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5458);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4726);
/* harmony import */ var _linm_soft_org_linm_web_common_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8755);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4848);




/** Kind B catalog toolbar FULL — buildCatalogListToolbarActions (SSOT). */
function fromCatalogToolbar(tb) {
  var _tb$createLabel;
  var actions = (0,_linm_soft_org_linm_web_common_components__WEBPACK_IMPORTED_MODULE_2__/* .buildCatalogListToolbarActions */ .WOW)({
    testIdPrefix: tb.testIdPrefix,
    canAdd: tb.canAdd,
    onAdd: tb.onAdd,
    onRefresh: tb.onRefresh,
    canHistory: tb.canHistory,
    onHistory: tb.onHistory,
    showSchemaConfig: tb.showSchemaConfig,
    onEditConfig: tb.onEditConfig,
    showEdit: tb.showEdit,
    showView: tb.showView,
    onEdit: tb.onEdit,
    onView: tb.onView,
    canDelete: tb.canDelete,
    onDelete: tb.onDelete,
    selectedCount: tb.selectedCount
  });
  var createLabel = (_tb$createLabel = tb.createLabel) === null || _tb$createLabel === void 0 ? void 0 : _tb$createLabel.trim();
  if (createLabel) {
    var create = actions.find(function (action) {
      return action.id === 'create';
    });
    if (create) create.label = createLabel;
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_linm_soft_org_linm_web_common_components__WEBPACK_IMPORTED_MODULE_2__/* .LinListToolbar */ .fYf, {
    testIdPrefix: tb.testIdPrefix,
    profile: "catalog",
    actions: actions
  });
}
/** List chrome — minimal generic (Làm mới · Tạo mới). */
function buildRmmsGenericListToolbar(p) {
  return fromCatalogToolbar({
    testIdPrefix: p.testIdPrefix,
    onRefresh: p.onRefresh,
    canAdd: p.canCreate !== false && Boolean(p.onCreate),
    onAdd: p.onCreate,
    createLabel: p.createLabel
  });
}
function rmmsFormActionButton(p) {
  var _p$variant;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_linm_soft_org_linm_web_common_components__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .$nd, {
    variant: (_p$variant = p.variant) !== null && _p$variant !== void 0 ? _p$variant : 'secondary',
    size: "md",
    title: p.label,
    onClick: p.onClick,
    loading: p.loading,
    "data-testid": p.testId,
    style: {
      minWidth: 100
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("i", {
      className: p.icon,
      "aria-hidden": true
    }), " ", p.label]
  });
}
/** Detail chrome — Quay lại trái · workflow phải · title/badge dưới toolbar. */
function buildRmmsDetailToolbar(p) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_linm_soft_org_linm_web_common_components__WEBPACK_IMPORTED_MODULE_2__/* .LinListToolbar */ .fYf, {
    testIdPrefix: p.testIdPrefix,
    profile: "generic",
    actions: [{
      id: 'back',
      placement: 'left',
      testId: "".concat(p.testIdPrefix, "-back-btn"),
      render: function render() {
        var _p$backLabel;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_linm_soft_org_linm_web_common_components__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .$nd, {
          variant: "secondary",
          size: "sm",
          "data-testid": "".concat(p.testIdPrefix, "-back-btn"),
          onClick: p.onBack,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("i", {
            className: "fas fa-arrow-left",
            "aria-hidden": true
          }), " ", (_p$backLabel = p.backLabel) !== null && _p$backLabel !== void 0 ? _p$backLabel : 'Quay lại']
        });
      }
    }].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(p.right ? [{
      id: 'right',
      placement: 'right',
      render: function render() {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
          children: p.right
        });
      }
    }] : []))
  });
}

/***/ },

/***/ 5295
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ catalogUiSchemaService)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(467);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4756);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8724);



var base = function base(catalogKind) {
  return "/integration/catalogs/".concat(encodeURIComponent(catalogKind), "/ui-schema");
};
var catalogUiSchemaService = {
  get: function () {
    var _get = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(catalogKind) {
      var configMode,
        qs,
        res,
        _args = arguments;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function (_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            configMode = _args.length > 1 && _args[1] !== undefined ? _args[1] : false;
            qs = configMode ? '?configMode=true' : '';
            _context.next = 1;
            return _api__WEBPACK_IMPORTED_MODULE_2__/* .apiClient */ .u.get("".concat(base(catalogKind)).concat(qs));
          case 1:
            res = _context.sent;
            return _context.abrupt("return", (0,_api__WEBPACK_IMPORTED_MODULE_2__/* .unwrap */ .o)(res));
          case 2:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    function get(_x) {
      return _get.apply(this, arguments);
    }
    return get;
  }(),
  save: function () {
    var _save = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(catalogKind, body) {
      var res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function (_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 1;
            return _api__WEBPACK_IMPORTED_MODULE_2__/* .apiClient */ .u.put(base(catalogKind), body);
          case 1:
            res = _context2.sent;
            return _context2.abrupt("return", (0,_api__WEBPACK_IMPORTED_MODULE_2__/* .unwrap */ .o)(res));
          case 2:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    function save(_x2, _x3) {
      return _save.apply(this, arguments);
    }
    return save;
  }()
};

/***/ },

/***/ 8772
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  fo: () => (/* binding */ buildDynamicGridColumns)
});

// UNUSED EXPORTS: buildSaveBodyFromUiColumns, needsUiSchemaBootstrap

;// ./src/utils/catalogUiSchemaGrid.ts
/** List-surface visible fields ordered by schema (display mode). */
function listVisibleFields(schema) {
  var _schema$fields;
  if (!(schema !== null && schema !== void 0 && (_schema$fields = schema.fields) !== null && _schema$fields !== void 0 && _schema$fields.length)) return [];
  return schema.fields.filter(function (f) {
    var _f$list;
    return ((_f$list = f.list) === null || _f$list === void 0 ? void 0 : _f$list.visible) === true;
  }).sort(function (a, b) {
    var _a$list$order, _a$list, _b$list$order, _b$list;
    return ((_a$list$order = (_a$list = a.list) === null || _a$list === void 0 ? void 0 : _a$list.order) !== null && _a$list$order !== void 0 ? _a$list$order : 999) - ((_b$list$order = (_b$list = b.list) === null || _b$list === void 0 ? void 0 : _b$list.order) !== null && _b$list$order !== void 0 ? _b$list$order : 999);
  });
}
;// ./src/utils/bootstrapCatalogUiSchema.ts


/** UI column used to bootstrap BE schema + bind renderers for dynamic grid. */

function buildSaveBodyFromUiColumns(columns, opts) {
  var _opts$schemaVersion, _opts$hintText, _ref, _columns$find$key, _columns$find, _columns$, _columns$find$key2, _columns$find2;
  var fields = columns.map(function (c, i) {
    var _c$control, _c$width, _c$showFilter, _c$allowSort, _c$width2;
    return {
      key: c.key,
      control: (_c$control = c.control) !== null && _c$control !== void 0 ? _c$control : 'TEXT',
      label: c.label,
      configurable: true,
      systemOnly: false,
      list: {
        visible: true,
        order: i + 1,
        width: (_c$width = c.width) !== null && _c$width !== void 0 ? _c$width : null,
        showFilter: (_c$showFilter = c.showFilter) !== null && _c$showFilter !== void 0 ? _c$showFilter : false,
        allowSort: (_c$allowSort = c.allowSort) !== null && _c$allowSort !== void 0 ? _c$allowSort : false
      },
      lookup: {
        visible: c.key === 'code' || c.key === 'name',
        order: i + 1,
        width: (_c$width2 = c.width) !== null && _c$width2 !== void 0 ? _c$width2 : null
      },
      proposal: {
        editable: false,
        order: i + 1
      }
    };
  });
  var searchKeys = columns.map(function (c) {
    return c.key;
  }).filter(function (k) {
    return k === 'code' || k === 'name';
  });
  return {
    schemaVersion: (_opts$schemaVersion = opts === null || opts === void 0 ? void 0 : opts.schemaVersion) !== null && _opts$schemaVersion !== void 0 ? _opts$schemaVersion : 1,
    bootstrapFromUi: true,
    hintText: (_opts$hintText = opts === null || opts === void 0 ? void 0 : opts.hintText) !== null && _opts$hintText !== void 0 ? _opts$hintText : null,
    fields: fields,
    lookup: {
      searchFieldKeys: searchKeys.length ? searchKeys : columns.slice(0, 2).map(function (c) {
        return c.key;
      }),
      primaryDisplayKey: (_ref = (_columns$find$key = (_columns$find = columns.find(function (c) {
        return c.key === 'name';
      })) === null || _columns$find === void 0 ? void 0 : _columns$find.key) !== null && _columns$find$key !== void 0 ? _columns$find$key : (_columns$ = columns[0]) === null || _columns$ === void 0 ? void 0 : _columns$.key) !== null && _ref !== void 0 ? _ref : 'name',
      secondaryDisplayKey: (_columns$find$key2 = (_columns$find2 = columns.find(function (c) {
        return c.key === 'code';
      })) === null || _columns$find2 === void 0 ? void 0 : _columns$find2.key) !== null && _columns$find$key2 !== void 0 ? _columns$find$key2 : null
    },
    list: {
      searchFieldKeys: searchKeys.length ? searchKeys : columns.map(function (c) {
        return c.key;
      }),
      defaultPageSize: 50,
      stickyHeader: true,
      heightMode: 'auto',
      height: null,
      resizableColumns: true
    }
  };
}

/**
 * Dynamic grid columns from BE schema order/visibility/width.
 * Fallback = UI columns when schema not ready.
 */
function buildDynamicGridColumns(schema, uiColumns) {
  var byKey = new Map(uiColumns.map(function (c) {
    return [c.key, c];
  }));
  var visible = listVisibleFields(schema);
  if (!visible.length) {
    return uiColumns.map(function (c) {
      var _c$showFilter2, _c$allowSort2;
      return {
        key: c.key,
        label: c.label,
        width: c.width,
        treeIndent: c.treeIndent,
        showFilter: (_c$showFilter2 = c.showFilter) !== null && _c$showFilter2 !== void 0 ? _c$showFilter2 : false,
        allowSort: (_c$allowSort2 = c.allowSort) !== null && _c$allowSort2 !== void 0 ? _c$allowSort2 : false,
        getDisplayValue: c.getDisplayValue,
        render: c.render
      };
    });
  }
  return visible.map(function (field) {
    var _field$list$width2, _field$list4, _ref2, _field$list$showFilte, _field$list5, _ref3, _field$list$allowSort, _field$list6;
    var ui = byKey.get(field.key);
    if (!ui) {
      var _field$list$width, _field$list, _field$list2, _field$list3;
      return {
        key: field.key,
        label: field.label,
        width: (_field$list$width = (_field$list = field.list) === null || _field$list === void 0 ? void 0 : _field$list.width) !== null && _field$list$width !== void 0 ? _field$list$width : undefined,
        showFilter: (_field$list2 = field.list) === null || _field$list2 === void 0 ? void 0 : _field$list2.showFilter,
        allowSort: (_field$list3 = field.list) === null || _field$list3 === void 0 ? void 0 : _field$list3.allowSort,
        getDisplayValue: function getDisplayValue(row) {
          var rec = row;
          var v = rec[field.key];
          return v == null ? '' : String(v);
        },
        render: function render(row) {
          var rec = row;
          var v = rec[field.key];
          return v == null || v === '' ? '—' : String(v);
        }
      };
    }
    return {
      key: field.key,
      label: field.label || ui.label,
      width: (_field$list$width2 = (_field$list4 = field.list) === null || _field$list4 === void 0 ? void 0 : _field$list4.width) !== null && _field$list$width2 !== void 0 ? _field$list$width2 : ui.width,
      treeIndent: ui.treeIndent,
      showFilter: (_ref2 = (_field$list$showFilte = (_field$list5 = field.list) === null || _field$list5 === void 0 ? void 0 : _field$list5.showFilter) !== null && _field$list$showFilte !== void 0 ? _field$list$showFilte : ui.showFilter) !== null && _ref2 !== void 0 ? _ref2 : false,
      allowSort: (_ref3 = (_field$list$allowSort = (_field$list6 = field.list) === null || _field$list6 === void 0 ? void 0 : _field$list6.allowSort) !== null && _field$list$allowSort !== void 0 ? _field$list$allowSort : ui.allowSort) !== null && _ref3 !== void 0 ? _ref3 : false,
      getDisplayValue: ui.getDisplayValue,
      render: ui.render
    };
  });
}

/** No tenant override yet → first Save = create/register (not edit). */
function needsUiSchemaBootstrap(schema) {
  if (!schema) return true;
  if (schema.hasSavedOverride === true) return false;
  return true;
}

/***/ },

/***/ 8798
(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.z1h___Jrv_P {
  margin: 0 0 12px;
  font-size: 12px;
  color: #6c757d;
}

.titleBlock___AHz7Y {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 12px;
}

.title___kav0y {
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  color: #212529;
}

.badge___IUp3q {
  display: inline-block;
  align-self: flex-start;
  font-size: 11px;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 4px;
  background: #e7f1ff;
  color: #0b5ed7;
  text-transform: uppercase;
}

.banner___cPuwj {
  display: none;
  margin: 0 0 12px;
  padding: 10px 12px;
  border-radius: 4px;
  background: #fef2f2;
  color: #b91c1c;
  font-size: 13px;
}

.bannerOn___iYA01 {
  display: block;
}

.z2___NAFHa {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.sectionTitle___wm0Gp {
  margin: 0 0 10px;
  font-size: 13px;
  font-weight: 700;
  color: #212529;
}

.fields___sYKoo {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.field___QgDeD {
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
}

.span2___DTVXB {
  grid-column: 1 / -1;
}

.fieldInvalid___CxoTW input,
.fieldInvalid___CxoTW select {
  border-color: #dc3545 !important;
}

.fieldError___C1y15 {
  display: none;
  font-size: 11px;
  color: #dc3545;
}

.fieldInvalid___CxoTW .fieldError___C1y15 {
  display: block;
}

.z3___EM_eD {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  width: 100%;
}

.z3___EM_eD button {
  min-width: 100px;
}

@media (max-width: 640px) {
  .z3___EM_eD {
    flex-direction: column-reverse;
    align-items: stretch;
  }

  .z3___EM_eD button {
    width: 100%;
    justify-content: center;
  }
}

.loading___zUmbo {
  padding: 24px;
  text-align: center;
  color: #6c757d;
}
`, "",{"version":3,"sources":["webpack://./src/pages/AttendanceListPage/AttendanceFormSlideout.module.css"],"names":[],"mappings":"AAAA;EACE,gBAAgB;EAChB,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,QAAQ;EACR,mBAAmB;AACrB;;AAEA;EACE,SAAS;EACT,eAAe;EACf,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,qBAAqB;EACrB,sBAAsB;EACtB,eAAe;EACf,gBAAgB;EAChB,gBAAgB;EAChB,kBAAkB;EAClB,mBAAmB;EACnB,cAAc;EACd,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,gBAAgB;EAChB,kBAAkB;EAClB,kBAAkB;EAClB,mBAAmB;EACnB,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,SAAS;AACX;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,QAAQ;EACR,YAAY;AACd;;AAEA;EACE,mBAAmB;AACrB;;AAEA;;EAEE,gCAAgC;AAClC;;AAEA;EACE,aAAa;EACb,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,yBAAyB;EACzB,mBAAmB;EACnB,eAAe;EACf,QAAQ;EACR,WAAW;AACb;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE;IACE,8BAA8B;IAC9B,oBAAoB;EACtB;;EAEA;IACE,WAAW;IACX,uBAAuB;EACzB;AACF;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,cAAc;AAChB","sourcesContent":[".z1h {\n  margin: 0 0 12px;\n  font-size: 12px;\n  color: #6c757d;\n}\n\n.titleBlock {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  margin-bottom: 12px;\n}\n\n.title {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 700;\n  color: #212529;\n}\n\n.badge {\n  display: inline-block;\n  align-self: flex-start;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 2px 8px;\n  border-radius: 4px;\n  background: #e7f1ff;\n  color: #0b5ed7;\n  text-transform: uppercase;\n}\n\n.banner {\n  display: none;\n  margin: 0 0 12px;\n  padding: 10px 12px;\n  border-radius: 4px;\n  background: #fef2f2;\n  color: #b91c1c;\n  font-size: 13px;\n}\n\n.bannerOn {\n  display: block;\n}\n\n.z2 {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.sectionTitle {\n  margin: 0 0 10px;\n  font-size: 13px;\n  font-weight: 700;\n  color: #212529;\n}\n\n.fields {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n\n.field {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  min-width: 0;\n}\n\n.span2 {\n  grid-column: 1 / -1;\n}\n\n.fieldInvalid :global(input),\n.fieldInvalid :global(select) {\n  border-color: #dc3545 !important;\n}\n\n.fieldError {\n  display: none;\n  font-size: 11px;\n  color: #dc3545;\n}\n\n.fieldInvalid .fieldError {\n  display: block;\n}\n\n.z3 {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 8px;\n  width: 100%;\n}\n\n.z3 :global(button) {\n  min-width: 100px;\n}\n\n@media (max-width: 640px) {\n  .z3 {\n    flex-direction: column-reverse;\n    align-items: stretch;\n  }\n\n  .z3 :global(button) {\n    width: 100%;\n    justify-content: center;\n  }\n}\n\n.loading {\n  padding: 24px;\n  text-align: center;\n  color: #6c757d;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"z1H": `z1h___Jrv_P`,
	"titleBlock": `titleBlock___AHz7Y`,
	"title": `title___kav0y`,
	"badge": `badge___IUp3q`,
	"banner": `banner___cPuwj`,
	"bannerOn": `bannerOn___iYA01`,
	"z2": `z2___NAFHa`,
	"sectionTitle": `sectionTitle___wm0Gp`,
	"fields": `fields___sYKoo`,
	"field": `field___QgDeD`,
	"span2": `span2___DTVXB`,
	"fieldInvalid": `fieldInvalid___CxoTW`,
	"fieldError": `fieldError___C1y15`,
	"z3": `z3___EM_eD`,
	"loading": `loading___zUmbo`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);

/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 5184
(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.page___OJrmb {
  --bg: #f5f7fa;
  --card: #fff;
  --border: #bababe;
  --border-soft: #e9ecef;
  --txt: #1a1a1a;
  --muted: #6c757d;
  --primary: #0d6efd;
  height: 100%;
  min-height: 0;
  display: flex;
  flex-direction: column;
  background: var(--bg);
  color: var(--txt);
}

.gridWrap___v7zj0 {
  flex: 1 1 auto;
  min-height: 0;
  width: 100%;
  overflow: auto;
}

.codeLink___Bf4da {
  border: 0;
  background: transparent;
  color: var(--primary);
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  font-size: 13px;
  cursor: pointer;
  padding: 0;
  text-decoration: underline;
  text-underline-offset: 2px;
}

.empty___FR6Dk {
  padding: 32px 16px;
  text-align: center;
  color: var(--muted);
  font-size: 14px;
}

.inZoneOk___Q7Icz {
  color: #047857;
  font-weight: 700;
  font-size: 12px;
}

.inZoneBad___ZxVth {
  color: #b91c1c;
  font-weight: 700;
  font-size: 12px;
}

.confirmOverlay___fctVw {
  position: fixed;
  inset: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(15, 23, 42, 0.35);
}

.confirmCard___fizkL {
  max-width: 420px;
  margin: 16px;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  border: 1px solid var(--border-soft);
  box-shadow: 0 12px 32px rgba(15, 23, 42, 0.16);
}

.confirmCard___fizkL p {
  margin: 0 0 16px;
  font-size: 14px;
  color: var(--txt);
  line-height: 1.45;
}

.confirmActions___SuORL {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}
`, "",{"version":3,"sources":["webpack://./src/pages/AttendanceListPage/AttendanceListPage.module.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,YAAY;EACZ,iBAAiB;EACjB,sBAAsB;EACtB,cAAc;EACd,gBAAgB;EAChB,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,qBAAqB;EACrB,iBAAiB;AACnB;;AAEA;EACE,cAAc;EACd,aAAa;EACb,WAAW;EACX,cAAc;AAChB;;AAEA;EACE,SAAS;EACT,uBAAuB;EACvB,qBAAqB;EACrB,qEAAqE;EACrE,eAAe;EACf,eAAe;EACf,UAAU;EACV,0BAA0B;EAC1B,0BAA0B;AAC5B;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,QAAQ;EACR,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,kCAAkC;AACpC;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,aAAa;EACb,gBAAgB;EAChB,kBAAkB;EAClB,oCAAoC;EACpC,8CAA8C;AAChD;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,yBAAyB;EACzB,QAAQ;AACV","sourcesContent":[".page {\n  --bg: #f5f7fa;\n  --card: #fff;\n  --border: #bababe;\n  --border-soft: #e9ecef;\n  --txt: #1a1a1a;\n  --muted: #6c757d;\n  --primary: #0d6efd;\n  height: 100%;\n  min-height: 0;\n  display: flex;\n  flex-direction: column;\n  background: var(--bg);\n  color: var(--txt);\n}\n\n.gridWrap {\n  flex: 1 1 auto;\n  min-height: 0;\n  width: 100%;\n  overflow: auto;\n}\n\n.codeLink {\n  border: 0;\n  background: transparent;\n  color: var(--primary);\n  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;\n  font-size: 13px;\n  cursor: pointer;\n  padding: 0;\n  text-decoration: underline;\n  text-underline-offset: 2px;\n}\n\n.empty {\n  padding: 32px 16px;\n  text-align: center;\n  color: var(--muted);\n  font-size: 14px;\n}\n\n.inZoneOk {\n  color: #047857;\n  font-weight: 700;\n  font-size: 12px;\n}\n\n.inZoneBad {\n  color: #b91c1c;\n  font-weight: 700;\n  font-size: 12px;\n}\n\n.confirmOverlay {\n  position: fixed;\n  inset: 0;\n  z-index: 50;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(15, 23, 42, 0.35);\n}\n\n.confirmCard {\n  max-width: 420px;\n  margin: 16px;\n  padding: 20px;\n  background: #fff;\n  border-radius: 8px;\n  border: 1px solid var(--border-soft);\n  box-shadow: 0 12px 32px rgba(15, 23, 42, 0.16);\n}\n\n.confirmCard p {\n  margin: 0 0 16px;\n  font-size: 14px;\n  color: var(--txt);\n  line-height: 1.45;\n}\n\n.confirmActions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"page": `page___OJrmb`,
	"gridWrap": `gridWrap___v7zj0`,
	"codeLink": `codeLink___Bf4da`,
	"empty": `empty___FR6Dk`,
	"inZoneOk": `inZoneOk___Q7Icz`,
	"inZoneBad": `inZoneBad___ZxVth`,
	"confirmOverlay": `confirmOverlay___fctVw`,
	"confirmCard": `confirmCard___fizkL`,
	"confirmActions": `confirmActions___SuORL`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);

/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ }

}]);
//# sourceMappingURL=attendance-list-page.0a1568c3.linm-rmms-field.js.map