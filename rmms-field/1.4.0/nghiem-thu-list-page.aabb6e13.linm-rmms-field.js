"use strict";
(self["webpackChunkrmms_field"] = self["webpackChunkrmms_field"] || []).push([[36],{

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

/***/ 1220
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ NghiemThuListPage_NghiemThuListPage)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(467);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__(5458);
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
// EXTERNAL MODULE: ./node_modules/@linm-soft-org/linm-web-common-components/dist/index.js + 583 modules
var dist = __webpack_require__(8755);
// EXTERNAL MODULE: ./src/hooks/useCatalogUiSchema.ts
var useCatalogUiSchema = __webpack_require__(3457);
// EXTERNAL MODULE: ./src/services/nghiemThu/nghiemThuService.ts + 1 modules
var nghiemThuService = __webpack_require__(6566);
// EXTERNAL MODULE: ./src/services/nghiemThu/permissions.ts
var permissions = __webpack_require__(2610);
// EXTERNAL MODULE: ./src/services/nghiemThu/responseModel.ts
var responseModel = __webpack_require__(874);
// EXTERNAL MODULE: ./src/services/catalogUiSchema/catalogUiSchemaService.ts
var catalogUiSchemaService = __webpack_require__(5295);
// EXTERNAL MODULE: ./src/utils/bootstrapCatalogUiSchema.ts + 1 modules
var bootstrapCatalogUiSchema = __webpack_require__(8772);
// EXTERNAL MODULE: ./src/services/attendance/lookups.ts
var lookups = __webpack_require__(8969);
// EXTERNAL MODULE: ./src/router/navigateInAppPath.ts
var navigateInAppPath = __webpack_require__(2381);
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./src/pages/NghiemThuListPage/NghiemThuListPage.module.css
var NghiemThuListPage_module = __webpack_require__(6258);
;// ./src/pages/NghiemThuListPage/NghiemThuListPage.module.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(NghiemThuListPage_module/* default */.A, options);




       /* harmony default export */ const NghiemThuListPage_NghiemThuListPage_module = (NghiemThuListPage_module/* default */.A && NghiemThuListPage_module/* default */.A.locals ? NghiemThuListPage_module/* default */.A.locals : undefined);

// EXTERNAL MODULE: ./src/pages/buildRmmsGenericToolbar.tsx
var buildRmmsGenericToolbar = __webpack_require__(5503);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
;// ./src/pages/NghiemThuListPage/NghiemThuListPage.tsx





function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,defineProperty/* default */.A)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
;













var LIST_PATH = '/nghiem-thu';
var TEST_ID = 'rmms-nghiem-thu-list';
var PAGE_ID = 'nghiem-thu';
var CATALOG_KIND = 'nghiem-thu';
var HISTORY_DOC_TYPE = 'nghiem-thu';
var ROW_MENU_HINT_KEY = "".concat(TEST_ID, "-row-menu-hint-dismissed");
function formatDateTime(iso) {
  if (!iso) return '—';
  try {
    return new Date(iso).toLocaleString('vi-VN');
  } catch (_unused) {
    return iso;
  }
}
var NghiemThuListPage = function NghiemThuListPage() {
  var _rowMenu$x, _rowMenu$y;
  var dispatch = (0,react_redux/* useDispatch */.wA)();
  var catalogHistory = (0,dist/* useCatalogHistoryModal */.Sfw)();
  var navigate = (0,navigateInAppPath/* useInAppNavigate */.lc)();
  var perms = (0,permissions/* nghiemThuListPermissions */.sW)();
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
  var _useState7 = (0,external_react_.useState)(''),
    _useState8 = (0,slicedToArray/* default */.A)(_useState7, 2),
    templateTypeDraft = _useState8[0],
    setTemplateTypeDraft = _useState8[1];
  var _useState9 = (0,external_react_.useState)(''),
    _useState0 = (0,slicedToArray/* default */.A)(_useState9, 2),
    fromDateDraft = _useState0[0],
    setFromDateDraft = _useState0[1];
  var _useState1 = (0,external_react_.useState)(''),
    _useState10 = (0,slicedToArray/* default */.A)(_useState1, 2),
    toDateDraft = _useState10[0],
    setToDateDraft = _useState10[1];
  var _useState11 = (0,external_react_.useState)(''),
    _useState12 = (0,slicedToArray/* default */.A)(_useState11, 2),
    search = _useState12[0],
    setSearch = _useState12[1];
  var _useState13 = (0,external_react_.useState)(''),
    _useState14 = (0,slicedToArray/* default */.A)(_useState13, 2),
    statusFilter = _useState14[0],
    setStatusFilter = _useState14[1];
  var _useState15 = (0,external_react_.useState)(''),
    _useState16 = (0,slicedToArray/* default */.A)(_useState15, 2),
    routeFilter = _useState16[0],
    setRouteFilter = _useState16[1];
  var _useState17 = (0,external_react_.useState)(''),
    _useState18 = (0,slicedToArray/* default */.A)(_useState17, 2),
    templateTypeFilter = _useState18[0],
    setTemplateTypeFilter = _useState18[1];
  var _useState19 = (0,external_react_.useState)(''),
    _useState20 = (0,slicedToArray/* default */.A)(_useState19, 2),
    fromDate = _useState20[0],
    setFromDate = _useState20[1];
  var _useState21 = (0,external_react_.useState)(''),
    _useState22 = (0,slicedToArray/* default */.A)(_useState21, 2),
    toDate = _useState22[0],
    setToDate = _useState22[1];
  var _useState23 = (0,external_react_.useState)(responseModel/* FALLBACK_INIT_DATA */.Vd.statuses),
    _useState24 = (0,slicedToArray/* default */.A)(_useState23, 2),
    initStatuses = _useState24[0],
    setInitStatuses = _useState24[1];
  var _useState25 = (0,external_react_.useState)(responseModel/* FALLBACK_INIT_DATA */.Vd.templateTypes),
    _useState26 = (0,slicedToArray/* default */.A)(_useState25, 2),
    initTemplateTypes = _useState26[0],
    setInitTemplateTypes = _useState26[1];
  var _useState27 = (0,external_react_.useState)(1),
    _useState28 = (0,slicedToArray/* default */.A)(_useState27, 2),
    page = _useState28[0],
    setPage = _useState28[1];
  var _useState29 = (0,external_react_.useState)(50),
    _useState30 = (0,slicedToArray/* default */.A)(_useState29, 2),
    pageSize = _useState30[0],
    setPageSize = _useState30[1];
  var _useState31 = (0,external_react_.useState)([]),
    _useState32 = (0,slicedToArray/* default */.A)(_useState31, 2),
    items = _useState32[0],
    setItems = _useState32[1];
  var _useState33 = (0,external_react_.useState)(0),
    _useState34 = (0,slicedToArray/* default */.A)(_useState33, 2),
    totalCount = _useState34[0],
    setTotalCount = _useState34[1];
  var _useState35 = (0,external_react_.useState)(null),
    _useState36 = (0,slicedToArray/* default */.A)(_useState35, 2),
    rowMenu = _useState36[0],
    setRowMenu = _useState36[1];
  var _useState37 = (0,external_react_.useState)(false),
    _useState38 = (0,slicedToArray/* default */.A)(_useState37, 2),
    configOpen = _useState38[0],
    setConfigOpen = _useState38[1];
  var _useState39 = (0,external_react_.useState)(null),
    _useState40 = (0,slicedToArray/* default */.A)(_useState39, 2),
    pendingDelete = _useState40[0],
    setPendingDelete = _useState40[1];
  var _useState41 = (0,external_react_.useState)(function () {
      return _objectSpread(_objectSpread(_objectSpread({}, dist/* DEFAULT_CATALOG_LIST_TABLE_CONFIG */.bkK), (0,dist/* catalogListTableConfigFromSchema */.D5f)(undefined)), {}, {
        resizable: true
      });
    }),
    _useState42 = (0,slicedToArray/* default */.A)(_useState41, 2),
    tableConfig = _useState42[0],
    setTableConfig = _useState42[1];
  (0,external_react_.useEffect)(function () {
    if (!(schema !== null && schema !== void 0 && schema.list)) return;
    setTableConfig(_objectSpread(_objectSpread(_objectSpread({}, dist/* DEFAULT_CATALOG_LIST_TABLE_CONFIG */.bkK), (0,dist/* catalogListTableConfigFromSchema */.D5f)(schema.list)), {}, {
      resizable: true
    }));
  }, [schema]);
  var _useServerPagedListLo = (0,dist/* useServerPagedListLoading */._W4)(),
    showTableLoading = _useServerPagedListLo.showTableLoading,
    pageLoading = _useServerPagedListLo.pageLoading,
    pulseSearch = _useServerPagedListLo.pulseSearch,
    setLoadingMode = _useServerPagedListLo.setLoadingMode,
    beginFetch = _useServerPagedListLo.beginFetch,
    endFetch = _useServerPagedListLo.endFetch;
  var _useLinCatalogColumnF = (0,dist/* useLinCatalogColumnFilterSort */.ijx)({
      onResetPage: function onResetPage() {
        return setPage(1);
      }
    }),
    columnFilters = _useLinCatalogColumnF.columnFilters,
    sortState = _useLinCatalogColumnF.sortState,
    onColumnFilterConfirm = _useLinCatalogColumnF.onColumnFilterConfirm,
    onColumnFilterClear = _useLinCatalogColumnF.onColumnFilterClear,
    onSortChange = _useLinCatalogColumnF.onSortChange,
    processRows = _useLinCatalogColumnF.processRows;
  var load = (0,external_react_.useCallback)(function () {
    beginFetch();
    nghiemThuService/* nghiemThuService */.P.getList({
      search: search.trim() || undefined,
      status: statusFilter || undefined,
      route: routeFilter || undefined,
      templateType: templateTypeFilter || undefined,
      fromDate: fromDate || undefined,
      toDate: toDate || undefined,
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
  }, [search, statusFilter, routeFilter, templateTypeFilter, fromDate, toDate, page, pageSize, beginFetch, endFetch]);
  (0,external_react_.useEffect)(function () {
    var cancelled = false;
    void nghiemThuService/* nghiemThuService */.P.getInitData().then(function (data) {
      var _data$statuses, _data$templateTypes;
      if (cancelled || !data) return;
      if ((_data$statuses = data.statuses) !== null && _data$statuses !== void 0 && _data$statuses.length) setInitStatuses(data.statuses);
      if ((_data$templateTypes = data.templateTypes) !== null && _data$templateTypes !== void 0 && _data$templateTypes.length) setInitTemplateTypes(data.templateTypes);
    });
    return function () {
      cancelled = true;
    };
  }, []);
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
  var applyFilters = (0,external_react_.useCallback)(function (nextSearch, nextStatus, nextRoute, nextTemplateType, nextFrom, nextTo) {
    pulseSearch(function () {
      setSearch(nextSearch.trim());
      setStatusFilter(nextStatus);
      setRouteFilter(nextRoute);
      setTemplateTypeFilter(nextTemplateType);
      setFromDate(nextFrom);
      setToDate(nextTo);
      setPage(1);
    });
  }, [pulseSearch]);
  var handleSearchClick = (0,external_react_.useCallback)(function () {
    applyFilters(searchDraft, statusDraft, routeDraft, templateTypeDraft, fromDateDraft, toDateDraft);
  }, [applyFilters, searchDraft, statusDraft, routeDraft, templateTypeDraft, fromDateDraft, toDateDraft]);
  (0,external_react_.useEffect)(function () {
    var t = window.setTimeout(function () {
      applyFilters(searchDraft, statusDraft, routeDraft, templateTypeDraft, fromDateDraft, toDateDraft);
    }, 300);
    return function () {
      return window.clearTimeout(t);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- only re-filter when draft inputs change
  }, [searchDraft, statusDraft, routeDraft, templateTypeDraft, fromDateDraft, toDateDraft]);
  var handleDateRangeChange = (0,external_react_.useCallback)(function (from, to) {
    setFromDateDraft(from !== null && from !== void 0 ? from : '');
    setToDateDraft(to !== null && to !== void 0 ? to : '');
  }, []);
  var statusOptions = (0,external_react_.useMemo)(function () {
    return [{
      value: '',
      label: 'Tất cả'
    }].concat((0,toConsumableArray/* default */.A)(initStatuses.map(function (t) {
      return {
        value: t.value,
        label: t.label || (0,responseModel/* statusLabel */.Rh)(t.value, initStatuses)
      };
    })));
  }, [initStatuses]);
  var templateTypeOptions = (0,external_react_.useMemo)(function () {
    return [{
      value: '',
      label: 'Tất cả'
    }].concat((0,toConsumableArray/* default */.A)(initTemplateTypes.map(function (t) {
      return {
        value: t.value,
        label: t.label || (0,responseModel/* templateTypeLabel */.$A)(t.value, initTemplateTypes)
      };
    })));
  }, [initTemplateTypes]);
  var openCreate = (0,external_react_.useCallback)(function () {
    if (!perms.canCreate) return;
    navigate("".concat(LIST_PATH, "/new"));
  }, [perms.canCreate, navigate]);
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
  var uiColumns = (0,external_react_.useMemo)(function () {
    return [{
      key: 'code',
      label: 'Mã',
      width: '120px',
      control: 'TEXT',
      allowSort: true,
      render: function render(row) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)("button", {
          type: "button",
          className: NghiemThuListPage_NghiemThuListPage_module.codeLink,
          onClick: function onClick() {
            navigate("".concat(LIST_PATH, "/").concat(encodeURIComponent(row.id)));
          },
          "data-testid": "".concat(TEST_ID, "-code-").concat(row.code),
          children: row.code
        });
      },
      getDisplayValue: function getDisplayValue(r) {
        return r.code;
      }
    }, {
      key: 'status',
      label: 'Trạng thái',
      width: '110px',
      control: 'SELECT',
      allowSort: true,
      render: function render(row) {
        return (0,responseModel/* statusLabel */.Rh)(row.status, initStatuses);
      },
      getDisplayValue: function getDisplayValue(r) {
        return (0,responseModel/* statusLabel */.Rh)(r.status, initStatuses);
      }
    }, {
      key: 'route',
      label: 'Tuyến đường',
      width: '160px',
      control: 'TEXT',
      allowSort: true,
      render: function render(row) {
        return row.route || '—';
      },
      getDisplayValue: function getDisplayValue(r) {
        return r.route;
      }
    }, {
      key: 'templateType',
      label: 'Mẫu NT',
      width: '140px',
      control: 'SELECT',
      allowSort: true,
      render: function render(row) {
        return (0,responseModel/* templateTypeLabel */.$A)(row.templateType, initTemplateTypes);
      },
      getDisplayValue: function getDisplayValue(r) {
        return (0,responseModel/* templateTypeLabel */.$A)(r.templateType, initTemplateTypes);
      }
    }, {
      key: 'assigneeCode',
      label: 'Cán bộ NT',
      width: '120px',
      control: 'TEXT',
      allowSort: true,
      render: function render(row) {
        return row.assigneeCode || '—';
      },
      getDisplayValue: function getDisplayValue(r) {
        return r.assigneeCode;
      }
    }, {
      key: 'inspectedAt',
      label: 'Ngày NT',
      width: '150px',
      control: 'DATE',
      allowSort: true,
      render: function render(row) {
        return formatDateTime(row.inspectedAt);
      },
      getDisplayValue: function getDisplayValue(r) {
        return r.inspectedAt;
      }
    }, {
      key: 'updatedAt',
      label: 'Cập nhật',
      width: '150px',
      control: 'DATE',
      allowSort: true,
      render: function render(row) {
        return formatDateTime(row.updatedAt);
      },
      getDisplayValue: function getDisplayValue(r) {
        return r.updatedAt;
      }
    }];
  }, [navigate, initStatuses, initTemplateTypes]);
  var gridColumns = (0,external_react_.useMemo)(function () {
    return (0,bootstrapCatalogUiSchema/* buildDynamicGridColumns */.fo)(schema, uiColumns);
  }, [schema, uiColumns]);
  var tableRows = (0,external_react_.useMemo)(function () {
    return processRows(items, gridColumns);
  }, [processRows, items, gridColumns]);
  var listSelection = (0,dist/* useErpListSelection */.tk)({
    rows: tableRows,
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
  var openRow = (0,external_react_.useCallback)(function (row, mode) {
    selectActiveRow(row);
    var next = mode;
    if (mode === 'edit' && !perms.canUpdate) next = 'view';
    if (mode === 'copy' && !perms.canCreate) next = 'view';
    if (next === 'edit') {
      navigate("".concat(LIST_PATH, "/").concat(encodeURIComponent(row.id), "?mode=edit"));
    } else if (next === 'copy') {
      navigate("".concat(LIST_PATH, "/new?copyFrom=").concat(encodeURIComponent(row.id)));
    } else if (next === 'create') {
      navigate("".concat(LIST_PATH, "/new"));
    } else {
      navigate("".concat(LIST_PATH, "/").concat(encodeURIComponent(row.id)));
    }
  }, [selectActiveRow, perms.canUpdate, perms.canCreate, navigate]);
  var handleHistoryToolbar = (0,external_react_.useCallback)(function () {
    if (!activeRow) {
      (0,dist/* dispatchAppToast */.tWi)(dispatch, {
        message: 'Chọn một dòng (menu dòng) rồi mở Lịch sử.',
        type: 'info'
      });
      return;
    }
    catalogHistory.openHistory({
      documentType: HISTORY_DOC_TYPE,
      documentId: activeRow.id,
      documentCode: activeRow.code
    });
  }, [activeRow, catalogHistory.openHistory, dispatch]);
  var openConfig = (0,external_react_.useCallback)(function () {
    setConfigOpen(true);
  }, []);
  var requestDelete = (0,external_react_.useCallback)(function (row) {
    if (!perms.canDelete) {
      (0,dist/* dispatchAppToast */.tWi)(dispatch, {
        message: 'Không có quyền xóa nghiệm thu.',
        type: 'warning'
      });
      return;
    }
    setPendingDelete(row);
  }, [perms.canDelete, dispatch]);
  var confirmDelete = (0,external_react_.useCallback)(/*#__PURE__*/(0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee() {
    var row, _t;
    return regenerator_default().wrap(function (_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          row = pendingDelete;
          if (row) {
            _context.next = 1;
            break;
          }
          return _context.abrupt("return");
        case 1:
          setPendingDelete(null);
          _context.prev = 2;
          _context.next = 3;
          return nghiemThuService/* nghiemThuService */.P.delete(row.id);
        case 3:
          (0,dist/* dispatchAppToast */.tWi)(dispatch, {
            message: "\u0110\xE3 x\xF3a nghi\u1EC7m thu ".concat(row.code),
            type: 'success'
          });
          clearSelection();
          setLoadingMode('filter');
          load();
          _context.next = 5;
          break;
        case 4:
          _context.prev = 4;
          _t = _context["catch"](2);
          (0,dist/* dispatchAppToast */.tWi)(dispatch, {
            message: _t instanceof Error ? _t.message : 'Xóa nghiệm thu thất bại.',
            type: 'error'
          });
        case 5:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[2, 4]]);
  })), [pendingDelete, dispatch, clearSelection, setLoadingMode, load]);
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
    return /*#__PURE__*/(0,jsx_runtime.jsx)(dist/* LinErpListFilterBar */.yEc, {
      testIdPrefix: TEST_ID,
      fromDate: fromDateDraft,
      toDate: toDateDraft,
      onDateChange: handleDateRangeChange,
      onSearch: handleSearchClick,
      searchAriaLabel: "T\xECm",
      loading: showTableLoading,
      leading: /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          "data-testid": "".concat(TEST_ID, "-field-search"),
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(dist/* SearchTextInput */.UAT, {
            label: "T\xECm ki\u1EBFm",
            placeholder: "M\xE3 / tuy\u1EBFn / c\xE1n b\u1ED9\u2026",
            value: searchDraft,
            onChange: setSearchDraft,
            testId: "".concat(TEST_ID, "-search-text")
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          "data-testid": "".concat(TEST_ID, "-field-status"),
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(dist/* Select */.l6P, {
            label: "Tr\u1EA1ng th\xE1i",
            options: statusOptions,
            value: statusDraft,
            onChange: function onChange(e) {
              return setStatusDraft(String(e.target.value));
            },
            "data-testid": "".concat(TEST_ID, "-status-filter"),
            fullWidth: true,
            size: "small"
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          "data-testid": "".concat(TEST_ID, "-field-route"),
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(dist/* SearchInput */.DOo, {
            label: "Tuy\u1EBFn \u0111\u01B0\u1EDDng",
            config: lookups/* ROAD_ROUTE_LOOKUP_CONFIG */.FR,
            value: routeDraft,
            primaryDisplay: (0,lookups/* lookupNameOnly */.Ch)(lookups/* ROAD_ROUTE_SEED */.FJ, routeDraft),
            showSecondaryInput: false,
            placeholder: "T\u1EA5t c\u1EA3 tuy\u1EBFn",
            onChange: function onChange(item) {
              return setRouteDraft(item.value);
            },
            onClear: function onClear() {
              return setRouteDraft('');
            }
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          "data-testid": "".concat(TEST_ID, "-field-templateType"),
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(dist/* Select */.l6P, {
            label: "M\u1EABu NT",
            options: templateTypeOptions,
            value: templateTypeDraft,
            onChange: function onChange(e) {
              return setTemplateTypeDraft(String(e.target.value));
            },
            "data-testid": "".concat(TEST_ID, "-templateType-filter"),
            fullWidth: true,
            size: "small"
          })
        })]
      })
    });
  }, [searchDraft, statusDraft, routeDraft, templateTypeDraft, fromDateDraft, toDateDraft, handleSearchClick, handleDateRangeChange, statusOptions, templateTypeOptions, showTableLoading]);
  var rowMenuItems = (0,external_react_.useMemo)(function () {
    return (0,dist/* buildCatalogRowMenuItems */.ZNy)({
      showView: perms.canRead,
      showEdit: perms.canUpdate,
      showCopy: perms.canCreate,
      showDelete: perms.canDelete,
      showHistory: perms.canRead
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
      case 'delete':
        requestDelete(row);
        break;
      case 'history':
        catalogHistory.openHistory({
          documentType: HISTORY_DOC_TYPE,
          documentId: row.id,
          documentCode: row.code
        });
        break;
      default:
        break;
    }
  }, [rowMenu === null || rowMenu === void 0 ? void 0 : rowMenu.row, openRow, requestDelete, catalogHistory.openHistory]);
  var emptyMessage = search.trim() || statusFilter || routeFilter || templateTypeFilter || fromDate || toDate ? 'Không có nghiệm thu phù hợp bộ lọc.' : 'Không có dữ liệu nghiệm thu.';
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: NghiemThuListPage_NghiemThuListPage_module.page,
    "data-catalog-list-page": true,
    "data-lin-list-layout": "erp-filter-bar",
    "data-testid": "".concat(TEST_ID, "-page"),
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(dist/* LinPageLayout */.pYq, {
      kind: "catalog",
      listLayoutVariant: "erp-filter-bar",
      listHeaderClassName: dist/* LIN_ERP_LIST_FILTER_LAYOUT */.j9$.header,
      listFiltersClassName: dist/* LIN_ERP_LIST_FILTER_LAYOUT */.j9$.filtersHost,
      testIdPrefix: TEST_ID,
      pageId: PAGE_ID,
      header: {
        title: 'Nghiệm thu',
        titleIconClass: 'fas fa-clipboard-check',
        pageId: PAGE_ID
      },
      toolbar: (0,buildRmmsGenericToolbar/* fromCatalogToolbar */.F$)(catalogToolbar),
      listTitle: "Danh s\xE1ch nghi\u1EC7m thu",
      listRowMenuHelp: true,
      filters: listFilters,
      filtersTestId: "".concat(TEST_ID, "-filters"),
      showTableLoading: showTableLoading,
      pageLoading: pageLoading,
      skeletonRows: 8,
      footer: /*#__PURE__*/(0,jsx_runtime.jsx)(dist/* LinCatalogListPagination */.nUj, {
        testIdPrefix: TEST_ID,
        page: page,
        pageSize: pageSize,
        totalCount: totalCount,
        onPageChange: handlePageChange,
        onPageSizeChange: handlePageSizeChange
      }),
      modals: /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(dist/* LinCatalogRowActionMenu */.G42, {
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
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(dist/* LinCatalogUiSchemaEditorModal */.uwB, {
          isOpen: configOpen,
          onClose: function onClose() {
            return setConfigOpen(false);
          },
          testIdPrefix: TEST_ID,
          catalogKind: CATALOG_KIND,
          loadSchema: catalogUiSchemaService/* catalogUiSchemaService */.w.get,
          saveSchema: catalogUiSchemaService/* catalogUiSchemaService */.w.save,
          onSaved: function onSaved(next) {
            setTableConfig(_objectSpread(_objectSpread(_objectSpread({}, dist/* DEFAULT_CATALOG_LIST_TABLE_CONFIG */.bkK), (0,dist/* catalogListTableConfigFromSchema */.D5f)(next.list)), {}, {
              resizable: true
            }));
            reloadSchema();
            setConfigOpen(false);
          },
          onError: function onError(message) {
            return (0,dist/* dispatchAppToast */.tWi)(dispatch, {
              message: message,
              type: 'error'
            });
          },
          onSuccess: function onSuccess(message) {
            return (0,dist/* dispatchAppToast */.tWi)(dispatch, {
              message: message,
              type: 'success'
            });
          }
        }), catalogHistory.modalProps ? /*#__PURE__*/(0,jsx_runtime.jsx)(dist/* LinCatalogHistoryModal */.s6Z, _objectSpread(_objectSpread({}, catalogHistory.modalProps), {}, {
          testIdPrefix: TEST_ID,
          onError: function onError(message) {
            return (0,dist/* dispatchAppToast */.tWi)(dispatch, {
              message: message,
              type: 'error'
            });
          }
        })) : null, /*#__PURE__*/(0,jsx_runtime.jsxs)(dist/* Modal */.aFV, {
          isOpen: pendingDelete != null,
          onClose: function onClose() {
            return setPendingDelete(null);
          },
          title: "X\xF3a nghi\u1EC7m thu",
          size: "sm",
          stacked: true,
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
            children: ["X\xF3a nghi\u1EC7m thu \xAB", pendingDelete === null || pendingDelete === void 0 ? void 0 : pendingDelete.code, "\xBB? Thao t\xE1c \u1EA9n b\u1EA3n ghi (soft delete)."]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            style: {
              display: 'flex',
              gap: 8,
              justifyContent: 'flex-end',
              marginTop: 16
            },
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(dist/* Button */.$nd, {
              type: "button",
              variant: "secondary",
              size: "sm",
              onClick: function onClick() {
                return setPendingDelete(null);
              },
              "data-testid": "".concat(TEST_ID, "-delete-cancel"),
              children: "H\u1EE7y"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(dist/* Button */.$nd, {
              type: "button",
              variant: "primary",
              size: "sm",
              onClick: function onClick() {
                return void confirmDelete();
              },
              "data-testid": "".concat(TEST_ID, "-confirm-delete"),
              children: "X\xF3a"
            })]
          })]
        })]
      }),
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: NghiemThuListPage_NghiemThuListPage_module.gridWrap,
        "data-testid": "".concat(TEST_ID, "-grid-wrap"),
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(dist/* LinCatalogDataGrid */.vEK, {
          testIdPrefix: TEST_ID,
          rows: tableRows,
          page: page,
          pageSize: pageSize,
          columns: gridColumns,
          getRowId: function getRowId(r) {
            return r.id;
          },
          selection: listSelection,
          tableConfig: tableConfig,
          filterSourceRows: items,
          paginateClient: false,
          columnFilters: columnFilters,
          onColumnFilterConfirm: onColumnFilterConfirm,
          onColumnFilterClear: onColumnFilterClear,
          sortState: sortState,
          onSortChange: onSortChange,
          empty: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: NghiemThuListPage_NghiemThuListPage_module.empty,
            "data-testid": "".concat(TEST_ID, "-empty"),
            children: emptyMessage
          }),
          onRowOpenActionMenu: function onRowOpenActionMenu(_ref2) {
            var row = _ref2.row,
              x = _ref2.x,
              y = _ref2.y;
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
/* harmony default export */ const NghiemThuListPage_NghiemThuListPage = (NghiemThuListPage);
;// ./src/pages/NghiemThuListPage/index.ts


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
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_linm_soft_org_linm_web_common_components__WEBPACK_IMPORTED_MODULE_2__/* .LinListToolbar */ .fYf, {
    testIdPrefix: tb.testIdPrefix,
    profile: "catalog",
    actions: (0,_linm_soft_org_linm_web_common_components__WEBPACK_IMPORTED_MODULE_2__/* .buildCatalogListToolbarActions */ .WOW)({
      testIdPrefix: tb.testIdPrefix,
      canAdd: tb.canAdd,
      onAdd: tb.onAdd,
      createLabel: tb.createLabel,
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
    })
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

/***/ 2381
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lc: () => (/* binding */ useInAppNavigate)
/* harmony export */ });
/* unused harmony exports toInAppPath, navigateInAppPath */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4726);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7767);
/* harmony import */ var single_spa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1496);
/* harmony import */ var _dev_isStandalone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7024);




/** Same-prefix Field MFE: MemoryRouter paths are already shell URLs. */
function toInAppPath(path) {
  return path.startsWith('/') ? path : "/".concat(path);
}

/**
 * List → form in Root shell must update `window.location`.
 * Memory-only `useNavigate` is reset by MemoryRouterSync on `single-spa:routing-event`.
 * Rule: web-app/rule/mfe-run-modes.md · ROUTER-P1-01
 */
function navigateInAppPath(path, navigate, options) {
  var memoryPath = toInAppPath(path);
  var shellPath = toInAppPath(path);
  if (_dev_isStandalone__WEBPACK_IMPORTED_MODULE_3__/* .isStandalone */ .Q) {
    navigate(memoryPath, {
      replace: options === null || options === void 0 ? void 0 : options.replace,
      state: options === null || options === void 0 ? void 0 : options.state
    });
    return;
  }
  if ((options === null || options === void 0 ? void 0 : options.state) !== undefined) {
    var _options$replace;
    navigate(memoryPath, {
      replace: (_options$replace = options === null || options === void 0 ? void 0 : options.replace) !== null && _options$replace !== void 0 ? _options$replace : true,
      state: options.state
    });
    var current = window.location.pathname + window.location.search;
    if (current !== shellPath) {
      window.history.replaceState(null, '', shellPath);
    }
    return;
  }
  ;(0,single_spa__WEBPACK_IMPORTED_MODULE_2__.navigateToUrl)(shellPath);
}
function useInAppNavigate() {
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__/* .useNavigate */ .Zp)();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (path, options) {
    navigateInAppPath(path, navigate, options);
  }, [navigate]);
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

/***/ 6566
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  P: () => (/* binding */ nghiemThuService)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(467);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(4756);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ./src/services/api.ts
var api = __webpack_require__(8724);
;// ./src/services/nghiemThu/endpoint.ts



/** Relative to VITE_API_URL (already includes /api/v1 or web-bff/api/v1). */
var BASE = '/patrol/nghiem-thu';
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
var nghiemThuEndpoint = {
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
            if (params !== null && params !== void 0 && params.templateType) qs.set('templateType', params.templateType);
            if (params !== null && params !== void 0 && params.fromDate) qs.set('fromDate', params.fromDate);
            if (params !== null && params !== void 0 && params.toDate) qs.set('toDate', params.toDate);
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
  getInitData: function () {
    var _getInitData = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee2() {
      var res;
      return regenerator_default().wrap(function (_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 1;
            return api/* apiClient */.u.get("".concat(BASE, "/init-data"));
          case 1:
            res = _context2.sent;
            return _context2.abrupt("return", (0,api/* unwrap */.o)(res));
          case 2:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    function getInitData() {
      return _getInitData.apply(this, arguments);
    }
    return getInitData;
  }(),
  getById: function () {
    var _getById = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee3(id) {
      var res;
      return regenerator_default().wrap(function (_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 1;
            return api/* apiClient */.u.get("".concat(BASE, "/").concat(id));
          case 1:
            res = _context3.sent;
            return _context3.abrupt("return", (0,api/* unwrap */.o)(res));
          case 2:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    function getById(_x2) {
      return _getById.apply(this, arguments);
    }
    return getById;
  }(),
  create: function () {
    var _create = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee4(data) {
      var res;
      return regenerator_default().wrap(function (_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 1;
            return api/* apiClient */.u.post(BASE, data);
          case 1:
            res = _context4.sent;
            return _context4.abrupt("return", (0,api/* unwrap */.o)(res));
          case 2:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    function create(_x3) {
      return _create.apply(this, arguments);
    }
    return create;
  }(),
  update: function () {
    var _update = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee5(id, data) {
      var res;
      return regenerator_default().wrap(function (_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 1;
            return api/* apiClient */.u.put("".concat(BASE, "/").concat(id), data);
          case 1:
            res = _context5.sent;
            return _context5.abrupt("return", (0,api/* unwrap */.o)(res));
          case 2:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    }));
    function update(_x4, _x5) {
      return _update.apply(this, arguments);
    }
    return update;
  }(),
  delete: function () {
    var _delete2 = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee6(id) {
      return regenerator_default().wrap(function (_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 1;
            return api/* apiClient */.u.delete("".concat(BASE, "/").concat(id));
          case 1:
          case "end":
            return _context6.stop();
        }
      }, _callee6);
    }));
    function _delete(_x6) {
      return _delete2.apply(this, arguments);
    }
    return _delete;
  }()
};
// EXTERNAL MODULE: ./src/services/nghiemThu/responseModel.ts
var responseModel = __webpack_require__(874);
;// ./src/services/nghiemThu/nghiemThuService.ts




var nghiemThuService = {
  getList: function getList(params) {
    return nghiemThuEndpoint.getList(params);
  },
  getInitData: function () {
    var _getInitData = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee() {
      var _data$statuses, _data$templateTypes, data, _t;
      return regenerator_default().wrap(function (_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 1;
            return nghiemThuEndpoint.getInitData();
          case 1:
            data = _context.sent;
            return _context.abrupt("return", {
              statuses: data !== null && data !== void 0 && (_data$statuses = data.statuses) !== null && _data$statuses !== void 0 && _data$statuses.length ? data.statuses : responseModel/* FALLBACK_INIT_DATA */.Vd.statuses,
              templateTypes: data !== null && data !== void 0 && (_data$templateTypes = data.templateTypes) !== null && _data$templateTypes !== void 0 && _data$templateTypes.length ? data.templateTypes : responseModel/* FALLBACK_INIT_DATA */.Vd.templateTypes
            });
          case 2:
            _context.prev = 2;
            _t = _context["catch"](0);
            return _context.abrupt("return", responseModel/* FALLBACK_INIT_DATA */.Vd);
          case 3:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 2]]);
    }));
    function getInitData() {
      return _getInitData.apply(this, arguments);
    }
    return getInitData;
  }(),
  getById: function getById(id) {
    return nghiemThuEndpoint.getById(id);
  },
  create: function create(data) {
    return nghiemThuEndpoint.create(data);
  },
  update: function update(id, data) {
    return nghiemThuEndpoint.update(id, data);
  },
  delete: function _delete(id) {
    return nghiemThuEndpoint.delete(id);
  }
};

/***/ },

/***/ 2610
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sW: () => (/* binding */ nghiemThuListPermissions)
/* harmony export */ });
/* unused harmony exports NGHIEM_THU_PERMS, hasNghiemThuPermission */
/* harmony import */ var _dev_isPermissionsLocalMode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8495);
/**
 * T-PERM-01 — patrol.nghiem-thu.read|write (Auth stub / local mode).
 */

var NGHIEM_THU_PERMS = {
  read: 'patrol.nghiem-thu.read',
  create: 'patrol.nghiem-thu.write',
  update: 'patrol.nghiem-thu.write',
  delete: 'patrol.nghiem-thu.write'
};
function hasNghiemThuPermission(code) {
  if ((0,_dev_isPermissionsLocalMode__WEBPACK_IMPORTED_MODULE_0__/* .isPermissionsLocalModeActive */ .z)()) return true;
  var bag = window.__LINM_PERMS__;
  if (!bag) return true;
  return bag[code] === true;
}
function nghiemThuListPermissions() {
  return {
    canRead: hasNghiemThuPermission(NGHIEM_THU_PERMS.read),
    canCreate: hasNghiemThuPermission(NGHIEM_THU_PERMS.create),
    canUpdate: hasNghiemThuPermission(NGHIEM_THU_PERMS.update),
    canDelete: hasNghiemThuPermission(NGHIEM_THU_PERMS.delete)
  };
}

/***/ },

/***/ 874
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $A: () => (/* binding */ templateTypeLabel),
/* harmony export */   Rh: () => (/* binding */ statusLabel),
/* harmony export */   Vd: () => (/* binding */ FALLBACK_INIT_DATA)
/* harmony export */ });
var FALLBACK_INIT_DATA = {
  statuses: [{
    value: 'draft',
    label: 'Nháp'
  }, {
    value: 'in_progress',
    label: 'Đang NT'
  }, {
    value: 'done',
    label: 'Hoàn thành'
  }, {
    value: 'cancelled',
    label: 'Hủy'
  }],
  templateTypes: Array.from({
    length: 10
  }, function (_, i) {
    var n = String(i + 1).padStart(2, '0');
    return {
      value: "mau-".concat(n),
      label: "M\u1EABu nghi\u1EC7m thu ".concat(n)
    };
  })
};
function statusLabel(value) {
  var _ref, _options$find$label, _options$find;
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : FALLBACK_INIT_DATA.statuses;
  return (_ref = (_options$find$label = (_options$find = options.find(function (o) {
    return o.value === value;
  })) === null || _options$find === void 0 ? void 0 : _options$find.label) !== null && _options$find$label !== void 0 ? _options$find$label : value) !== null && _ref !== void 0 ? _ref : '—';
}
function templateTypeLabel(value) {
  var _ref2, _options$find$label2, _options$find2;
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : FALLBACK_INIT_DATA.templateTypes;
  return (_ref2 = (_options$find$label2 = (_options$find2 = options.find(function (o) {
    return o.value === value;
  })) === null || _options$find2 === void 0 ? void 0 : _options$find2.label) !== null && _options$find$label2 !== void 0 ? _options$find$label2 : value) !== null && _ref2 !== void 0 ? _ref2 : '—';
}

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

/***/ 6258
(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.page___YjRNz {
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

.gridWrap___J7pHn {
  flex: 1 1 auto;
  min-height: 0;
  width: 100%;
  overflow: auto;
}

.codeLink___rzr6r {
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

.empty___lAWN2 {
  padding: 32px 16px;
  text-align: center;
  color: var(--muted);
  font-size: 14px;
}
`, "",{"version":3,"sources":["webpack://./src/pages/NghiemThuListPage/NghiemThuListPage.module.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,YAAY;EACZ,iBAAiB;EACjB,sBAAsB;EACtB,cAAc;EACd,gBAAgB;EAChB,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,qBAAqB;EACrB,iBAAiB;AACnB;;AAEA;EACE,cAAc;EACd,aAAa;EACb,WAAW;EACX,cAAc;AAChB;;AAEA;EACE,SAAS;EACT,uBAAuB;EACvB,qBAAqB;EACrB,qEAAqE;EACrE,eAAe;EACf,eAAe;EACf,UAAU;EACV,0BAA0B;EAC1B,0BAA0B;AAC5B;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,mBAAmB;EACnB,eAAe;AACjB","sourcesContent":[".page {\n  --bg: #f5f7fa;\n  --card: #fff;\n  --border: #bababe;\n  --border-soft: #e9ecef;\n  --txt: #1a1a1a;\n  --muted: #6c757d;\n  --primary: #0d6efd;\n  height: 100%;\n  min-height: 0;\n  display: flex;\n  flex-direction: column;\n  background: var(--bg);\n  color: var(--txt);\n}\n\n.gridWrap {\n  flex: 1 1 auto;\n  min-height: 0;\n  width: 100%;\n  overflow: auto;\n}\n\n.codeLink {\n  border: 0;\n  background: transparent;\n  color: var(--primary);\n  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;\n  font-size: 13px;\n  cursor: pointer;\n  padding: 0;\n  text-decoration: underline;\n  text-underline-offset: 2px;\n}\n\n.empty {\n  padding: 32px 16px;\n  text-align: center;\n  color: var(--muted);\n  font-size: 14px;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"page": `page___YjRNz`,
	"gridWrap": `gridWrap___J7pHn`,
	"codeLink": `codeLink___rzr6r`,
	"empty": `empty___lAWN2`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);

/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ }

}]);
//# sourceMappingURL=nghiem-thu-list-page.aabb6e13.linm-rmms-field.js.map