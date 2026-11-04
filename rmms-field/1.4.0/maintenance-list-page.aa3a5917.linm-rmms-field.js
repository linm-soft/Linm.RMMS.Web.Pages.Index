"use strict";
(self["webpackChunkrmms_field"] = self["webpackChunkrmms_field"] || []).push([[199],{

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

/***/ 7974
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ MaintenanceListPage_MaintenanceListPage)
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
// EXTERNAL MODULE: ./src/router/navigateInAppPath.ts
var navigateInAppPath = __webpack_require__(2381);
// EXTERNAL MODULE: ./src/hooks/useCatalogUiSchema.ts
var useCatalogUiSchema = __webpack_require__(3457);
// EXTERNAL MODULE: ./src/services/maintenance/maintenanceService.ts + 1 modules
var maintenanceService = __webpack_require__(1545);
// EXTERNAL MODULE: ./src/services/maintenance/permissions.ts
var permissions = __webpack_require__(5420);
// EXTERNAL MODULE: ./src/services/maintenance/lookups.ts
var maintenance_lookups = __webpack_require__(8483);
// EXTERNAL MODULE: ./src/services/catalogUiSchema/catalogUiSchemaService.ts
var catalogUiSchemaService = __webpack_require__(5295);
// EXTERNAL MODULE: ./src/utils/bootstrapCatalogUiSchema.ts + 1 modules
var bootstrapCatalogUiSchema = __webpack_require__(8772);
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./src/pages/MaintenanceListPage/MaintenanceListPage.module.css
var MaintenanceListPage_module = __webpack_require__(5370);
;// ./src/pages/MaintenanceListPage/MaintenanceListPage.module.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(MaintenanceListPage_module/* default */.A, options);




       /* harmony default export */ const MaintenanceListPage_MaintenanceListPage_module = (MaintenanceListPage_module/* default */.A && MaintenanceListPage_module/* default */.A.locals ? MaintenanceListPage_module/* default */.A.locals : undefined);

// EXTERNAL MODULE: ./src/pages/buildRmmsGenericToolbar.tsx
var buildRmmsGenericToolbar = __webpack_require__(5503);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
;// ./src/pages/MaintenanceListPage/MaintenanceListPage.tsx





function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,defineProperty/* default */.A)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
;













var TEST_ID = 'rmms-maintenance-list';
var PAGE_ID = 'maintenance';
var CATALOG_KIND = 'work-orders';
var ROW_MENU_HINT_KEY = "".concat(TEST_ID, "-row-menu-hint-dismissed");
function formatDue(iso) {
  if (!iso) return '—';
  try {
    return new Date(iso).toLocaleString('vi-VN');
  } catch (_unused) {
    return iso;
  }
}
var MaintenanceListPage = function MaintenanceListPage() {
  var _rowMenu$x, _rowMenu$y;
  var dispatch = (0,react_redux/* useDispatch */.wA)();
  var catalogHistory = (0,linm_web_common_components_dist/* useCatalogHistoryModal */.Sfw)();
  var navigate = (0,navigateInAppPath/* useInAppNavigate */.lc)();
  var _useSearchParams = (0,dist/* useSearchParams */.ok)(),
    _useSearchParams2 = (0,slicedToArray/* default */.A)(_useSearchParams, 2),
    searchParams = _useSearchParams2[0],
    setSearchParams = _useSearchParams2[1];
  var perms = (0,permissions/* maintenanceListPermissions */.mO)();
  var _useCatalogUiSchema = (0,useCatalogUiSchema/* useCatalogUiSchema */.k)(CATALOG_KIND),
    schema = _useCatalogUiSchema.schema,
    reloadSchema = _useCatalogUiSchema.reload;
  var lookups = (0,maintenance_lookups/* useMaintenanceLookups */.AQ)();
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
    workTypeDraft = _useState6[0],
    setWorkTypeDraft = _useState6[1];
  var _useState7 = (0,external_react_.useState)(''),
    _useState8 = (0,slicedToArray/* default */.A)(_useState7, 2),
    search = _useState8[0],
    setSearch = _useState8[1];
  var _useState9 = (0,external_react_.useState)(''),
    _useState0 = (0,slicedToArray/* default */.A)(_useState9, 2),
    statusFilter = _useState0[0],
    setStatusFilter = _useState0[1];
  var _useState1 = (0,external_react_.useState)(''),
    _useState10 = (0,slicedToArray/* default */.A)(_useState1, 2),
    workTypeFilter = _useState10[0],
    setWorkTypeFilter = _useState10[1];
  var _useState11 = (0,external_react_.useState)(1),
    _useState12 = (0,slicedToArray/* default */.A)(_useState11, 2),
    page = _useState12[0],
    setPage = _useState12[1];
  var _useState13 = (0,external_react_.useState)(50),
    _useState14 = (0,slicedToArray/* default */.A)(_useState13, 2),
    pageSize = _useState14[0],
    setPageSize = _useState14[1];
  var _useState15 = (0,external_react_.useState)([]),
    _useState16 = (0,slicedToArray/* default */.A)(_useState15, 2),
    items = _useState16[0],
    setItems = _useState16[1];
  var _useState17 = (0,external_react_.useState)(0),
    _useState18 = (0,slicedToArray/* default */.A)(_useState17, 2),
    totalCount = _useState18[0],
    setTotalCount = _useState18[1];
  var _useState19 = (0,external_react_.useState)(null),
    _useState20 = (0,slicedToArray/* default */.A)(_useState19, 2),
    rowMenu = _useState20[0],
    setRowMenu = _useState20[1];
  var _useState21 = (0,external_react_.useState)(false),
    _useState22 = (0,slicedToArray/* default */.A)(_useState21, 2),
    configOpen = _useState22[0],
    setConfigOpen = _useState22[1];
  var _useState23 = (0,external_react_.useState)(null),
    _useState24 = (0,slicedToArray/* default */.A)(_useState23, 2),
    pendingDelete = _useState24[0],
    setPendingDelete = _useState24[1];
  var _useState25 = (0,external_react_.useState)(null),
    _useState26 = (0,slicedToArray/* default */.A)(_useState25, 2),
    pendingComplete = _useState26[0],
    setPendingComplete = _useState26[1];
  var _useState27 = (0,external_react_.useState)(null),
    _useState28 = (0,slicedToArray/* default */.A)(_useState27, 2),
    progressRow = _useState28[0],
    setProgressRow = _useState28[1];
  var _useState29 = (0,external_react_.useState)('0'),
    _useState30 = (0,slicedToArray/* default */.A)(_useState29, 2),
    progressPct = _useState30[0],
    setProgressPct = _useState30[1];
  var _useState31 = (0,external_react_.useState)(''),
    _useState32 = (0,slicedToArray/* default */.A)(_useState31, 2),
    progressNote = _useState32[0],
    setProgressNote = _useState32[1];
  var _useState33 = (0,external_react_.useState)(function () {
      return _objectSpread(_objectSpread(_objectSpread({}, linm_web_common_components_dist/* DEFAULT_CATALOG_LIST_TABLE_CONFIG */.bkK), (0,linm_web_common_components_dist/* catalogListTableConfigFromSchema */.D5f)(undefined)), {}, {
        resizable: true
      });
    }),
    _useState34 = (0,slicedToArray/* default */.A)(_useState33, 2),
    tableConfig = _useState34[0],
    setTableConfig = _useState34[1];
  (0,external_react_.useEffect)(function () {
    if (!(schema !== null && schema !== void 0 && schema.list)) return;
    setTableConfig(_objectSpread(_objectSpread(_objectSpread({}, linm_web_common_components_dist/* DEFAULT_CATALOG_LIST_TABLE_CONFIG */.bkK), (0,linm_web_common_components_dist/* catalogListTableConfigFromSchema */.D5f)(schema.list)), {}, {
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
    maintenanceService/* maintenanceService */.B.getList({
      search: search.trim() || undefined,
      status: statusFilter || undefined,
      workType: workTypeFilter || undefined,
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
  }, [search, statusFilter, workTypeFilter, page, pageSize, beginFetch, endFetch]);
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
    var id = searchParams.get('id');
    if (form === 'create') {
      navigate('/sc-bt/tao-moi', {
        replace: true
      });
      return;
    }
    if (id && (form === 'edit' || form === 'view' || form === 'copy')) {
      if (form === 'copy') {
        navigate("/sc-bt/tao-moi?id=".concat(encodeURIComponent(id)), {
          replace: true
        });
        return;
      }
      if (form === 'edit') {
        navigate("/sc-bt/sua?id=".concat(encodeURIComponent(id)), {
          replace: true
        });
        return;
      }
      navigate("/sc-bt/".concat(encodeURIComponent(id)), {
        replace: true
      });
      return;
    }
    setSearchParams({}, {
      replace: true
    });
  }, [searchParams, setSearchParams, navigate]);
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
  var applyFilters = (0,external_react_.useCallback)(function (nextSearch, nextStatus, nextWorkType) {
    pulseSearch(function () {
      setSearch(nextSearch.trim());
      setStatusFilter(nextStatus);
      setWorkTypeFilter(nextWorkType);
      setPage(1);
    });
  }, [pulseSearch]);
  (0,external_react_.useEffect)(function () {
    var t = window.setTimeout(function () {
      applyFilters(searchDraft, statusDraft, workTypeDraft);
    }, 300);
    return function () {
      return window.clearTimeout(t);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- only re-filter when draft inputs change
  }, [searchDraft, statusDraft, workTypeDraft]);
  var openRow = (0,external_react_.useCallback)(function (row, mode) {
    selectActiveRow(row);
    if (mode === 'create') {
      navigate('/sc-bt/tao-moi');
      return;
    }
    if (mode === 'copy') {
      navigate("/sc-bt/tao-moi?id=".concat(encodeURIComponent(row.id)));
      return;
    }
    if (mode === 'edit') {
      navigate("/sc-bt/sua?id=".concat(encodeURIComponent(row.id)));
      return;
    }
    navigate("/sc-bt/".concat(encodeURIComponent(row.id)));
  }, [selectActiveRow, navigate]);
  var openCreate = (0,external_react_.useCallback)(function () {
    if (!perms.canCreate) return;
    navigate('/sc-bt/tao-moi');
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
  var deleteRow = (0,external_react_.useCallback)(/*#__PURE__*/function () {
    var _ref = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee(row) {
      return regenerator_default().wrap(function (_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (perms.canDelete) {
              _context.next = 1;
              break;
            }
            ;(0,linm_web_common_components_dist/* dispatchAppToast */.tWi)(dispatch, {
              message: 'Không có quyền xóa công việc.',
              type: 'error'
            });
            return _context.abrupt("return");
          case 1:
            setPendingDelete(row);
          case 2:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }(), [perms.canDelete, dispatch]);
  var confirmDelete = (0,external_react_.useCallback)(/*#__PURE__*/(0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee2() {
    var row, _t;
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
          return maintenanceService/* maintenanceService */.B.delete(row.id);
        case 3:
          clearSelection();
          setLoadingMode('filter');
          load();
          (0,linm_web_common_components_dist/* dispatchAppToast */.tWi)(dispatch, {
            message: "\u0110\xE3 x\xF3a ".concat(row.code, "."),
            type: 'success'
          });
          _context2.next = 5;
          break;
        case 4:
          _context2.prev = 4;
          _t = _context2["catch"](2);
          (0,linm_web_common_components_dist/* dispatchAppToast */.tWi)(dispatch, {
            message: _t instanceof Error ? _t.message : 'Xóa công việc thất bại.',
            type: 'error'
          });
        case 5:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[2, 4]]);
  })), [pendingDelete, clearSelection, setLoadingMode, load, dispatch]);
  var updateProgress = (0,external_react_.useCallback)(function (row) {
    var _row$progressPercent, _row$note;
    setProgressRow(row);
    setProgressPct(String((_row$progressPercent = row.progressPercent) !== null && _row$progressPercent !== void 0 ? _row$progressPercent : 0));
    setProgressNote((_row$note = row.note) !== null && _row$note !== void 0 ? _row$note : '');
  }, []);
  var confirmProgress = (0,external_react_.useCallback)(/*#__PURE__*/(0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee3() {
    var row, pct, _t2;
    return regenerator_default().wrap(function (_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          row = progressRow;
          if (row) {
            _context3.next = 1;
            break;
          }
          return _context3.abrupt("return");
        case 1:
          pct = Number(progressPct);
          if (!(Number.isNaN(pct) || pct < 0 || pct > 100)) {
            _context3.next = 2;
            break;
          }
          ;(0,linm_web_common_components_dist/* dispatchAppToast */.tWi)(dispatch, {
            message: 'Tiến độ phải là số từ 0 đến 100.',
            type: 'error'
          });
          return _context3.abrupt("return");
        case 2:
          setProgressRow(null);
          _context3.prev = 3;
          _context3.next = 4;
          return maintenanceService/* maintenanceService */.B.progress(row.id, {
            progressPercent: pct,
            note: progressNote.trim() || undefined
          });
        case 4:
          setLoadingMode('filter');
          load();
          (0,linm_web_common_components_dist/* dispatchAppToast */.tWi)(dispatch, {
            message: "\u0110\xE3 c\u1EADp nh\u1EADt ti\u1EBFn \u0111\u1ED9 ".concat(row.code, "."),
            type: 'success'
          });
          _context3.next = 6;
          break;
        case 5:
          _context3.prev = 5;
          _t2 = _context3["catch"](3);
          (0,linm_web_common_components_dist/* dispatchAppToast */.tWi)(dispatch, {
            message: 'Không cập nhật được tiến độ.',
            type: 'error'
          });
        case 6:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[3, 5]]);
  })), [progressRow, progressPct, progressNote, load, setLoadingMode, dispatch]);
  var completeRow = (0,external_react_.useCallback)(function (row) {
    if (row.status === 'done') {
      (0,linm_web_common_components_dist/* dispatchAppToast */.tWi)(dispatch, {
        message: "".concat(row.code, " \u0111\xE3 nghi\u1EC7m thu."),
        type: 'info'
      });
      return;
    }
    setPendingComplete(row);
  }, [dispatch]);
  var confirmComplete = (0,external_react_.useCallback)(/*#__PURE__*/(0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee4() {
    var row, _t3;
    return regenerator_default().wrap(function (_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          row = pendingComplete;
          if (row) {
            _context4.next = 1;
            break;
          }
          return _context4.abrupt("return");
        case 1:
          setPendingComplete(null);
          _context4.prev = 2;
          _context4.next = 3;
          return maintenanceService/* maintenanceService */.B.complete(row.id);
        case 3:
          setLoadingMode('filter');
          load();
          (0,linm_web_common_components_dist/* dispatchAppToast */.tWi)(dispatch, {
            message: "\u0110\xE3 nghi\u1EC7m thu ".concat(row.code, "."),
            type: 'success'
          });
          _context4.next = 5;
          break;
        case 4:
          _context4.prev = 4;
          _t3 = _context4["catch"](2);
          (0,linm_web_common_components_dist/* dispatchAppToast */.tWi)(dispatch, {
            message: "Nghi\u1EC7m thu ".concat(row.code, " th\u1EA5t b\u1EA1i."),
            type: 'error'
          });
        case 5:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[2, 4]]);
  })), [pendingComplete, load, setLoadingMode, dispatch]);
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
        void deleteRow(activeRow);
      } : undefined
    };
  }, [reloadAll, perms.canCreate, perms.canUpdate, perms.canRead, perms.canDelete, openCreate, handleHistoryToolbar, openConfig, activeRow, openRow, deleteRow]);
  var listFilters = (0,external_react_.useMemo)(function () {
    return /*#__PURE__*/(0,jsx_runtime.jsxs)(linm_web_common_components_dist/* ErpListHeaderFilters */.S91, {
      testIdPrefix: TEST_ID,
      filterCols: 3,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* LinListFilterField */.a7f, {
        testId: "".concat(TEST_ID, "-field-search"),
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* SearchTextInput */.UAT, {
          label: "T\xECm ki\u1EBFm",
          placeholder: "M\xE3 / tuy\u1EBFn / lo\u1EA1i / \u0111\u1ED9i / c\xE1n b\u1ED9\u2026",
          value: searchDraft,
          onChange: setSearchDraft,
          onSearch: function onSearch() {
            return applyFilters(searchDraft, statusDraft, workTypeDraft);
          },
          testId: "".concat(TEST_ID, "-search-text")
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* LinListFilterField */.a7f, {
        testId: "".concat(TEST_ID, "-field-status"),
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* SearchInput */.DOo, {
          label: "Tr\u1EA1ng th\xE1i",
          config: lookups.statusConfig,
          value: statusDraft,
          primaryDisplay: (0,maintenance_lookups/* lookupLabel */.ZX)(lookups.statusItems, statusDraft),
          showSecondaryInput: false,
          placeholder: "T\u1EA5t c\u1EA3 tr\u1EA1ng th\xE1i",
          onChange: function onChange(item) {
            return setStatusDraft(item.value);
          },
          onClear: function onClear() {
            return setStatusDraft('');
          }
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* LinListFilterField */.a7f, {
        testId: "".concat(TEST_ID, "-field-workType"),
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* SearchInput */.DOo, {
          label: "Lo\u1EA1i",
          config: lookups.workTypeConfig,
          value: workTypeDraft,
          primaryDisplay: (0,maintenance_lookups/* lookupLabel */.ZX)(lookups.workTypeItems, workTypeDraft),
          showSecondaryInput: false,
          placeholder: "T\u1EA5t c\u1EA3 lo\u1EA1i",
          onChange: function onChange(item) {
            return setWorkTypeDraft(item.value);
          },
          onClear: function onClear() {
            return setWorkTypeDraft('');
          }
        })
      })]
    });
  }, [searchDraft, statusDraft, workTypeDraft, applyFilters, lookups]);
  var uiColumns = (0,external_react_.useMemo)(function () {
    return [{
      key: 'code',
      label: 'Mã',
      width: '140px',
      allowSort: true,
      render: function render(row) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)("button", {
          type: "button",
          className: MaintenanceListPage_MaintenanceListPage_module.codeLink,
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
      key: 'routeName',
      label: 'Tuyến',
      width: '180px',
      allowSort: true,
      render: function render(row) {
        return row.routeName;
      },
      getDisplayValue: function getDisplayValue(r) {
        return r.routeName;
      }
    }, {
      key: 'workType',
      label: 'Loại',
      width: '110px',
      control: 'SELECT',
      allowSort: true,
      render: function render(row) {
        return lookups.workTypeLabel(row.workType);
      },
      getDisplayValue: function getDisplayValue(r) {
        return lookups.workTypeLabel(r.workType);
      }
    }, {
      key: 'teamName',
      label: 'Đội',
      width: '120px',
      allowSort: true,
      render: function render(row) {
        return row.teamName || '—';
      },
      getDisplayValue: function getDisplayValue(r) {
        var _r$teamName;
        return (_r$teamName = r.teamName) !== null && _r$teamName !== void 0 ? _r$teamName : '';
      }
    }, {
      key: 'assigneeName',
      label: 'Cán bộ',
      width: '120px',
      allowSort: true,
      render: function render(row) {
        return row.assigneeName || '—';
      },
      getDisplayValue: function getDisplayValue(r) {
        var _r$assigneeName;
        return (_r$assigneeName = r.assigneeName) !== null && _r$assigneeName !== void 0 ? _r$assigneeName : '';
      }
    }, {
      key: 'dueAt',
      label: 'Hạn',
      width: '150px',
      control: 'DATE',
      allowSort: true,
      render: function render(row) {
        return formatDue(row.dueAt);
      },
      getDisplayValue: function getDisplayValue(r) {
        return r.dueAt;
      }
    }, {
      key: 'status',
      label: 'Trạng thái',
      width: '100px',
      control: 'SELECT',
      allowSort: true,
      render: function render(row) {
        return lookups.statusLabel(row.status);
      },
      getDisplayValue: function getDisplayValue(r) {
        return lookups.statusLabel(r.status);
      }
    }, {
      key: 'progressPercent',
      label: 'Tiến độ',
      width: '90px',
      control: 'NUMBER',
      allowSort: true,
      render: function render(row) {
        var _row$progressPercent2;
        return /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
          className: MaintenanceListPage_MaintenanceListPage_module.progressCell,
          children: [(_row$progressPercent2 = row.progressPercent) !== null && _row$progressPercent2 !== void 0 ? _row$progressPercent2 : 0, "%"]
        });
      },
      getDisplayValue: function getDisplayValue(r) {
        var _r$progressPercent;
        return String((_r$progressPercent = r.progressPercent) !== null && _r$progressPercent !== void 0 ? _r$progressPercent : 0);
      }
    }];
  }, [openRow, lookups]);
  var gridColumns = (0,external_react_.useMemo)(function () {
    return (0,bootstrapCatalogUiSchema/* buildDynamicGridColumns */.fo)(schema, uiColumns);
  }, [schema, uiColumns]);
  var rowMenuItems = (0,external_react_.useMemo)(function () {
    var base = (0,linm_web_common_components_dist/* buildCatalogRowMenuItems */.ZNy)({
      showView: perms.canRead,
      showEdit: perms.canUpdate,
      showCopy: perms.canCreate,
      showDelete: perms.canDelete,
      showHistory: perms.canRead
    });
    var extras = [];
    if (perms.canUpdate) {
      extras.push({
        id: 'progress',
        label: 'Cập nhật tiến độ',
        icon: 'fas fa-tasks',
        separatorBefore: true
      }, {
        id: 'complete',
        label: 'Nghiệm thu',
        icon: 'fas fa-clipboard-check'
      });
    }
    return [].concat((0,toConsumableArray/* default */.A)(base), extras);
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
        void deleteRow(row);
        break;
      case 'history':
        catalogHistory.openHistory({
          documentType: PAGE_ID,
          documentId: row.id,
          documentCode: row.code
        });
        break;
      case 'progress':
        void updateProgress(row);
        break;
      case 'complete':
        void completeRow(row);
        break;
      default:
        break;
    }
  }, [rowMenu === null || rowMenu === void 0 ? void 0 : rowMenu.row, openRow, deleteRow, updateProgress, completeRow, catalogHistory.openHistory]);
  var emptyMessage = search.trim() || statusFilter || workTypeFilter ? 'Không có công việc phù hợp bộ lọc.' : 'Không có dữ liệu công việc.';
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: MaintenanceListPage_MaintenanceListPage_module.page,
    "data-catalog-list-page": true,
    "data-testid": "".concat(TEST_ID, "-page"),
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* LinPageLayout */.pYq, {
      kind: "catalog",
      filterBarLayout: "standard",
      testIdPrefix: TEST_ID,
      pageId: PAGE_ID,
      header: {
        title: 'Lập lịch sửa chữa / bảo trì',
        titleIconClass: 'fas fa-tools',
        pageId: PAGE_ID
      },
      toolbar: (0,buildRmmsGenericToolbar/* fromCatalogToolbar */.F$)(catalogToolbar),
      listTitle: "Danh s\xE1ch c\xF4ng vi\u1EC7c",
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
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* LinCatalogRowActionMenu */.G42, {
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
            setTableConfig(_objectSpread(_objectSpread(_objectSpread({}, linm_web_common_components_dist/* DEFAULT_CATALOG_LIST_TABLE_CONFIG */.bkK), (0,linm_web_common_components_dist/* catalogListTableConfigFromSchema */.D5f)(next.list)), {}, {
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
        }), catalogHistory.modalProps ? /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* LinCatalogHistoryModal */.s6Z, _objectSpread(_objectSpread({}, catalogHistory.modalProps), {}, {
          testIdPrefix: TEST_ID,
          onError: function onError(message) {
            return (0,linm_web_common_components_dist/* dispatchAppToast */.tWi)(dispatch, {
              message: message,
              type: 'error'
            });
          }
        })) : null, pendingDelete || pendingComplete || progressRow ? /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: MaintenanceListPage_MaintenanceListPage_module.confirmOverlay,
          "data-testid": "".concat(TEST_ID, "-confirm"),
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: MaintenanceListPage_MaintenanceListPage_module.confirmCard,
            role: "dialog",
            "aria-modal": "true",
            children: [pendingDelete ? /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
              children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
                children: ["X\xF3a c\xF4ng vi\u1EC7c \xAB", pendingDelete.code, " \u2014", ' ', pendingDelete.title || pendingDelete.routeName, "\xBB?"]
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                className: MaintenanceListPage_MaintenanceListPage_module.confirmActions,
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
            }) : null, pendingComplete ? /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
              children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
                children: ["Nghi\u1EC7m thu c\xF4ng vi\u1EC7c ", pendingComplete.code, "?"]
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                className: MaintenanceListPage_MaintenanceListPage_module.confirmActions,
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* Button */.$nd, {
                  variant: "secondary",
                  size: "sm",
                  onClick: function onClick() {
                    return setPendingComplete(null);
                  },
                  children: "H\u1EE7y"
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* Button */.$nd, {
                  variant: "primary",
                  size: "sm",
                  onClick: function onClick() {
                    return void confirmComplete();
                  },
                  children: "Nghi\u1EC7m thu"
                })]
              })]
            }) : null, progressRow ? /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
              children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
                children: ["C\u1EADp nh\u1EADt ti\u1EBFn \u0111\u1ED9 ", progressRow.code]
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* Input */.pde, {
                label: "Ti\u1EBFn \u0111\u1ED9 (0\u2013100)",
                type: "number",
                value: progressPct,
                onChange: function onChange(e) {
                  return setProgressPct(e.target.value);
                },
                fullWidth: true
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* Input */.pde, {
                label: "Ghi ch\xFA (tu\u1EF3 ch\u1ECDn)",
                value: progressNote,
                onChange: function onChange(e) {
                  return setProgressNote(e.target.value);
                },
                fullWidth: true
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                className: MaintenanceListPage_MaintenanceListPage_module.confirmActions,
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* Button */.$nd, {
                  variant: "secondary",
                  size: "sm",
                  onClick: function onClick() {
                    return setProgressRow(null);
                  },
                  children: "H\u1EE7y"
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* Button */.$nd, {
                  variant: "primary",
                  size: "sm",
                  onClick: function onClick() {
                    return void confirmProgress();
                  },
                  children: "L\u01B0u"
                })]
              })]
            }) : null]
          })
        }) : null]
      }),
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: MaintenanceListPage_MaintenanceListPage_module.gridWrap,
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
            className: MaintenanceListPage_MaintenanceListPage_module.empty,
            "data-testid": "".concat(TEST_ID, "-empty"),
            children: emptyMessage
          }),
          onRowOpenActionMenu: function onRowOpenActionMenu(_ref5) {
            var row = _ref5.row,
              x = _ref5.x,
              y = _ref5.y;
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
/* harmony default export */ const MaintenanceListPage_MaintenanceListPage = (MaintenanceListPage);
;// ./src/pages/MaintenanceListPage/index.ts


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

/***/ 5420
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mO: () => (/* binding */ maintenanceListPermissions)
/* harmony export */ });
/* unused harmony exports MAINTENANCE_PERMS, hasMaintenancePermission */
/* harmony import */ var _dev_isPermissionsLocalMode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8495);
/**
 * T-PERM-01 — permission codes for maintenance work-orders (Auth stub until CommonLib mount).
 */

var MAINTENANCE_PERMS = {
  read: 'rmms-field:work-orders:read',
  create: 'rmms-field:work-orders:write',
  update: 'rmms-field:work-orders:write',
  delete: 'rmms-field:work-orders:write'
};
function hasMaintenancePermission(code) {
  if ((0,_dev_isPermissionsLocalMode__WEBPACK_IMPORTED_MODULE_0__/* .isPermissionsLocalModeActive */ .z)()) return true;
  var bag = window.__LINM_PERMS__;
  if (!bag) return true;
  return bag[code] === true;
}
function maintenanceListPermissions() {
  return {
    canRead: hasMaintenancePermission(MAINTENANCE_PERMS.read),
    canCreate: hasMaintenancePermission(MAINTENANCE_PERMS.create),
    canUpdate: hasMaintenancePermission(MAINTENANCE_PERMS.update),
    canDelete: hasMaintenancePermission(MAINTENANCE_PERMS.delete)
  };
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

/***/ 5370
(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.page___tFBKv {
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

.gridWrap___J45s3 {
  flex: 1 1 auto;
  min-height: 0;
  width: 100%;
  overflow: auto;
}

.codeLink___pzsyL {
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

.empty___KFbYL {
  padding: 16px;
  text-align: center;
  color: var(--muted);
  font-size: 14px;
}

.progressCell___PZczX {
  font-variant-numeric: tabular-nums;
  font-size: 13px;
}

.confirmOverlay___sgg4G {
  position: fixed;
  inset: 0;
  z-index: 80;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(17, 24, 39, 0.35);
}

.confirmCard___mJnYc {
  width: min(420px, calc(100% - 32px));
  background: var(--card);
  border: 1px solid var(--border-soft);
  border-radius: 8px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.confirmCard___mJnYc p {
  margin: 0 0 8px;
  font-size: 14px;
}

.confirmActions___dZo7K {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 8px;
}
`, "",{"version":3,"sources":["webpack://./src/pages/MaintenanceListPage/MaintenanceListPage.module.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,YAAY;EACZ,iBAAiB;EACjB,sBAAsB;EACtB,cAAc;EACd,gBAAgB;EAChB,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,qBAAqB;EACrB,iBAAiB;AACnB;;AAEA;EACE,cAAc;EACd,aAAa;EACb,WAAW;EACX,cAAc;AAChB;;AAEA;EACE,SAAS;EACT,uBAAuB;EACvB,qBAAqB;EACrB,qEAAqE;EACrE,eAAe;EACf,eAAe;EACf,UAAU;EACV,0BAA0B;EAC1B,0BAA0B;AAC5B;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,kCAAkC;EAClC,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,QAAQ;EACR,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,kCAAkC;AACpC;;AAEA;EACE,oCAAoC;EACpC,uBAAuB;EACvB,oCAAoC;EACpC,kBAAkB;EAClB,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,QAAQ;AACV;;AAEA;EACE,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,yBAAyB;EACzB,QAAQ;EACR,eAAe;AACjB","sourcesContent":[".page {\n  --bg: #f5f7fa;\n  --card: #fff;\n  --border: #bababe;\n  --border-soft: #e9ecef;\n  --txt: #1a1a1a;\n  --muted: #6c757d;\n  --primary: #0d6efd;\n  height: 100%;\n  min-height: 0;\n  display: flex;\n  flex-direction: column;\n  background: var(--bg);\n  color: var(--txt);\n}\n\n.gridWrap {\n  flex: 1 1 auto;\n  min-height: 0;\n  width: 100%;\n  overflow: auto;\n}\n\n.codeLink {\n  border: 0;\n  background: transparent;\n  color: var(--primary);\n  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;\n  font-size: 13px;\n  cursor: pointer;\n  padding: 0;\n  text-decoration: underline;\n  text-underline-offset: 2px;\n}\n\n.empty {\n  padding: 16px;\n  text-align: center;\n  color: var(--muted);\n  font-size: 14px;\n}\n\n.progressCell {\n  font-variant-numeric: tabular-nums;\n  font-size: 13px;\n}\n\n.confirmOverlay {\n  position: fixed;\n  inset: 0;\n  z-index: 80;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(17, 24, 39, 0.35);\n}\n\n.confirmCard {\n  width: min(420px, calc(100% - 32px));\n  background: var(--card);\n  border: 1px solid var(--border-soft);\n  border-radius: 8px;\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.confirmCard p {\n  margin: 0 0 8px;\n  font-size: 14px;\n}\n\n.confirmActions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  margin-top: 8px;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"page": `page___tFBKv`,
	"gridWrap": `gridWrap___J45s3`,
	"codeLink": `codeLink___pzsyL`,
	"empty": `empty___KFbYL`,
	"progressCell": `progressCell___PZczX`,
	"confirmOverlay": `confirmOverlay___sgg4G`,
	"confirmCard": `confirmCard___mJnYc`,
	"confirmActions": `confirmActions___dZo7K`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);

/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ }

}]);
//# sourceMappingURL=maintenance-list-page.aa3a5917.linm-rmms-field.js.map