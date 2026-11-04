"use strict";
(self["webpackChunkrmms_field"] = self["webpackChunkrmms_field"] || []).push([[961],{

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

/***/ 3400
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ NotificationListPage_NotificationListPage)
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
// EXTERNAL MODULE: ./src/services/catalogUiSchema/catalogUiSchemaService.ts
var catalogUiSchemaService = __webpack_require__(5295);
// EXTERNAL MODULE: ./src/services/notification/notificationService.ts + 1 modules
var notificationService = __webpack_require__(8624);
// EXTERNAL MODULE: ./src/services/notification/permissions.ts
var permissions = __webpack_require__(5162);
// EXTERNAL MODULE: ./src/services/notification/lookups.ts
var lookups = __webpack_require__(6857);
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./src/pages/NotificationListPage/NotificationListPage.module.css
var NotificationListPage_module = __webpack_require__(6560);
;// ./src/pages/NotificationListPage/NotificationListPage.module.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(NotificationListPage_module/* default */.A, options);




       /* harmony default export */ const NotificationListPage_NotificationListPage_module = (NotificationListPage_module/* default */.A && NotificationListPage_module/* default */.A.locals ? NotificationListPage_module/* default */.A.locals : undefined);

// EXTERNAL MODULE: ./src/pages/buildRmmsGenericToolbar.tsx
var buildRmmsGenericToolbar = __webpack_require__(5503);
// EXTERNAL MODULE: ./src/components/GiaoViecModal/index.ts + 6 modules
var GiaoViecModal = __webpack_require__(3367);
// EXTERNAL MODULE: ./src/components/TaskChatPanel/TaskChatPanel.tsx + 1 modules
var TaskChatPanel = __webpack_require__(4732);
// EXTERNAL MODULE: ./src/utils/taskPriorityPrefill.ts
var taskPriorityPrefill = __webpack_require__(4106);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
;// ./src/pages/NotificationListPage/NotificationListPage.tsx





function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,defineProperty/* default */.A)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
;
















var TEST_ID = 'rmms-ops-list';
var PAGE_ID = 'ops';
var CATALOG_KIND = 'ops-inbox';
var ROW_MENU_HINT_KEY = "".concat(TEST_ID, "-row-menu-hint-dismissed");
var EMPTY_OVERVIEW = {
  unreadCount: 0,
  staffOnline: 0,
  openIncidents: 0,
  woInProgress: 0
};
function formatSentAt(iso) {
  if (!iso) return '—';
  var d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  var pad = function pad(n) {
    return String(n).padStart(2, '0');
  };
  return "".concat(pad(d.getDate()), "/").concat(pad(d.getMonth() + 1), "/").concat(d.getFullYear(), " ").concat(pad(d.getHours()), ":").concat(pad(d.getMinutes()));
}
var NotificationListPage = function NotificationListPage() {
  var _rowMenu$x, _rowMenu$y;
  var dispatch = (0,react_redux/* useDispatch */.wA)();
  var catalogHistory = (0,linm_web_common_components_dist/* useCatalogHistoryModal */.Sfw)();
  var navigate = (0,navigateInAppPath/* useInAppNavigate */.lc)();
  var _useSearchParams = (0,dist/* useSearchParams */.ok)(),
    _useSearchParams2 = (0,slicedToArray/* default */.A)(_useSearchParams, 2),
    searchParams = _useSearchParams2[0],
    setSearchParams = _useSearchParams2[1];
  var perms = (0,permissions/* opsListPermissions */.tI)();
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
    priorityDraft = _useState6[0],
    setPriorityDraft = _useState6[1];
  var _useState7 = (0,external_react_.useState)(''),
    _useState8 = (0,slicedToArray/* default */.A)(_useState7, 2),
    typeDraft = _useState8[0],
    setTypeDraft = _useState8[1];
  var _useState9 = (0,external_react_.useState)(''),
    _useState0 = (0,slicedToArray/* default */.A)(_useState9, 2),
    unreadDraft = _useState0[0],
    setUnreadDraft = _useState0[1];
  var _useState1 = (0,external_react_.useState)(''),
    _useState10 = (0,slicedToArray/* default */.A)(_useState1, 2),
    directionDraft = _useState10[0],
    setDirectionDraft = _useState10[1];
  var _useState11 = (0,external_react_.useState)(''),
    _useState12 = (0,slicedToArray/* default */.A)(_useState11, 2),
    orgDraft = _useState12[0],
    setOrgDraft = _useState12[1];
  var _useState13 = (0,external_react_.useState)(''),
    _useState14 = (0,slicedToArray/* default */.A)(_useState13, 2),
    search = _useState14[0],
    setSearch = _useState14[1];
  var _useState15 = (0,external_react_.useState)(''),
    _useState16 = (0,slicedToArray/* default */.A)(_useState15, 2),
    statusFilter = _useState16[0],
    setStatusFilter = _useState16[1];
  var _useState17 = (0,external_react_.useState)(''),
    _useState18 = (0,slicedToArray/* default */.A)(_useState17, 2),
    priorityFilter = _useState18[0],
    setPriorityFilter = _useState18[1];
  var _useState19 = (0,external_react_.useState)(''),
    _useState20 = (0,slicedToArray/* default */.A)(_useState19, 2),
    typeFilter = _useState20[0],
    setTypeFilter = _useState20[1];
  var _useState21 = (0,external_react_.useState)(false),
    _useState22 = (0,slicedToArray/* default */.A)(_useState21, 2),
    unreadOnly = _useState22[0],
    setUnreadOnly = _useState22[1];
  var _useState23 = (0,external_react_.useState)(''),
    _useState24 = (0,slicedToArray/* default */.A)(_useState23, 2),
    directionFilter = _useState24[0],
    setDirectionFilter = _useState24[1];
  var _useState25 = (0,external_react_.useState)(''),
    _useState26 = (0,slicedToArray/* default */.A)(_useState25, 2),
    orgFilter = _useState26[0],
    setOrgFilter = _useState26[1];
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
  var _useState35 = (0,external_react_.useState)(EMPTY_OVERVIEW),
    _useState36 = (0,slicedToArray/* default */.A)(_useState35, 2),
    overview = _useState36[0],
    setOverview = _useState36[1];
  var _useState37 = (0,external_react_.useState)(null),
    _useState38 = (0,slicedToArray/* default */.A)(_useState37, 2),
    rowMenu = _useState38[0],
    setRowMenu = _useState38[1];
  var _useState39 = (0,external_react_.useState)(false),
    _useState40 = (0,slicedToArray/* default */.A)(_useState39, 2),
    configOpen = _useState40[0],
    setConfigOpen = _useState40[1];
  var _useState41 = (0,external_react_.useState)(false),
    _useState42 = (0,slicedToArray/* default */.A)(_useState41, 2),
    giaoViecOpen = _useState42[0],
    setGiaoViecOpen = _useState42[1];
  var _useState43 = (0,external_react_.useState)(null),
    _useState44 = (0,slicedToArray/* default */.A)(_useState43, 2),
    giaoViecContext = _useState44[0],
    setGiaoViecContext = _useState44[1];
  var _useState45 = (0,external_react_.useState)(null),
    _useState46 = (0,slicedToArray/* default */.A)(_useState45, 2),
    chatTarget = _useState46[0],
    setChatTarget = _useState46[1];
  var _useState47 = (0,external_react_.useState)(function () {
      return _objectSpread(_objectSpread(_objectSpread({}, linm_web_common_components_dist/* DEFAULT_CATALOG_LIST_TABLE_CONFIG */.bkK), (0,linm_web_common_components_dist/* catalogListTableConfigFromSchema */.D5f)(undefined)), {}, {
        resizable: true
      });
    }),
    _useState48 = (0,slicedToArray/* default */.A)(_useState47, 2),
    tableConfig = _useState48[0],
    setTableConfig = _useState48[1];
  var _useServerPagedListLo = (0,linm_web_common_components_dist/* useServerPagedListLoading */._W4)(),
    showTableLoading = _useServerPagedListLo.showTableLoading,
    pageLoading = _useServerPagedListLo.pageLoading,
    pulseSearch = _useServerPagedListLo.pulseSearch,
    setLoadingMode = _useServerPagedListLo.setLoadingMode,
    beginFetch = _useServerPagedListLo.beginFetch,
    endFetch = _useServerPagedListLo.endFetch;
  var load = (0,external_react_.useCallback)(function () {
    beginFetch();
    Promise.all([notificationService/* notificationService */.l.getList({
      search: search.trim() || undefined,
      status: statusFilter || undefined,
      priority: priorityFilter || undefined,
      type: typeFilter || undefined,
      unreadOnly: unreadOnly || undefined,
      direction: directionFilter || undefined,
      orgUnitCode: orgFilter || undefined,
      page: page,
      pageSize: pageSize
    }), notificationService/* notificationService */.l.getOverview()]).then(function (_ref) {
      var _ref2 = (0,slicedToArray/* default */.A)(_ref, 2),
        res = _ref2[0],
        ov = _ref2[1];
      setItems(res.items);
      setTotalCount(res.totalCount);
      setOverview(ov);
    }).catch(function () {
      setItems([]);
      setTotalCount(0);
      setOverview(EMPTY_OVERVIEW);
    }).finally(function () {
      return endFetch();
    });
  }, [search, statusFilter, priorityFilter, typeFilter, unreadOnly, directionFilter, orgFilter, page, pageSize, beginFetch, endFetch]);
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
      navigate('/chi-dao/tao-moi', {
        replace: true
      });
      return;
    }
    if (id && (form === 'edit' || form === 'view' || form === 'copy')) {
      if (form === 'copy') {
        navigate("/chi-dao/tao-moi?copyFrom=".concat(encodeURIComponent(id)), {
          replace: true
        });
        return;
      }
      var qs = form === 'edit' ? '?mode=edit' : '';
      navigate("/chi-dao/".concat(encodeURIComponent(id)).concat(qs), {
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
  var applyFilters = (0,external_react_.useCallback)(function (nextSearch, nextStatus, nextPriority, nextType, nextUnread, nextDirection, nextOrg) {
    pulseSearch(function () {
      setSearch(nextSearch.trim());
      setStatusFilter(nextStatus);
      setPriorityFilter(nextPriority);
      setTypeFilter(nextType);
      setUnreadOnly(nextUnread === '1');
      setDirectionFilter(nextDirection);
      setOrgFilter(nextOrg);
      setPage(1);
    });
  }, [pulseSearch]);
  (0,external_react_.useEffect)(function () {
    var t = window.setTimeout(function () {
      applyFilters(searchDraft, statusDraft, priorityDraft, typeDraft, unreadDraft, directionDraft, orgDraft);
    }, 300);
    return function () {
      return window.clearTimeout(t);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- draft-only debounce
  }, [searchDraft, statusDraft, priorityDraft, typeDraft, unreadDraft, directionDraft, orgDraft]);
  var openRow = (0,external_react_.useCallback)(function (row, mode) {
    selectActiveRow(row);
    if (mode === 'create') {
      navigate('/chi-dao/tao-moi');
      return;
    }
    if (mode === 'copy') {
      navigate("/chi-dao/tao-moi?copyFrom=".concat(encodeURIComponent(row.id)));
      return;
    }
    var qs = mode === 'edit' ? '?mode=edit' : '';
    navigate("/chi-dao/".concat(encodeURIComponent(row.id)).concat(qs));
  }, [selectActiveRow, navigate]);
  var openCreate = (0,external_react_.useCallback)(function () {
    if (!perms.canCreate) return;
    navigate('/chi-dao/tao-moi');
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
    var _ref3 = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee(row) {
      var _t;
      return regenerator_default().wrap(function (_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (perms.canDelete) {
              _context.next = 1;
              break;
            }
            window.alert('Không có quyền xóa chỉ đạo.');
            return _context.abrupt("return");
          case 1:
            if (window.confirm("X\xF3a ch\u1EC9 \u0111\u1EA1o \xAB".concat(row.code, " \u2014 ").concat(row.title, "\xBB?"))) {
              _context.next = 2;
              break;
            }
            return _context.abrupt("return");
          case 2:
            _context.prev = 2;
            _context.next = 3;
            return notificationService/* notificationService */.l.delete(row.id);
          case 3:
            clearSelection();
            setLoadingMode('filter');
            load();
            _context.next = 5;
            break;
          case 4:
            _context.prev = 4;
            _t = _context["catch"](2);
            window.alert(_t instanceof Error ? _t.message : 'Xóa chỉ đạo thất bại.');
          case 5:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[2, 4]]);
    }));
    return function (_x) {
      return _ref3.apply(this, arguments);
    };
  }(), [perms.canDelete, clearSelection, setLoadingMode, load]);
  var markReadRow = (0,external_react_.useCallback)(/*#__PURE__*/function () {
    var _ref4 = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee2(row) {
      var _t2;
      return regenerator_default().wrap(function (_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 1;
            return notificationService/* notificationService */.l.markRead(row.id);
          case 1:
            setLoadingMode('filter');
            load();
            _context2.next = 3;
            break;
          case 2:
            _context2.prev = 2;
            _t2 = _context2["catch"](0);
            window.alert('Đánh dấu đã đọc thất bại.');
          case 3:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 2]]);
    }));
    return function (_x2) {
      return _ref4.apply(this, arguments);
    };
  }(), [setLoadingMode, load]);
  var markAllRead = (0,external_react_.useCallback)(/*#__PURE__*/(0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee3() {
    var _t3;
    return regenerator_default().wrap(function (_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 1;
          return notificationService/* notificationService */.l.markAllRead();
        case 1:
          setLoadingMode('filter');
          load();
          _context3.next = 3;
          break;
        case 2:
          _context3.prev = 2;
          _t3 = _context3["catch"](0);
          window.alert('Đánh dấu tất cả đã đọc thất bại.');
        case 3:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 2]]);
  })), [setLoadingMode, load]);
  var openGiaoViec = (0,external_react_.useCallback)(function (row) {
    var _row$priority, _row$priority2;
    var prefill = (0,taskPriorityPrefill/* opsPriorityPrefill */.bD)((_row$priority = row.priority) !== null && _row$priority !== void 0 ? _row$priority : 'cao');
    setGiaoViecContext({
      source: 'ops',
      sourceEntityType: 'ops_directive',
      sourceEntityId: row.id,
      opsCode: row.code,
      title: row.title || "X\u1EED l\xFD ch\u1EC9 \u0111\u1EA1o \u2014 ".concat(row.code),
      priorityLabel: (0,lookups/* lookupLabel */.ZX)(lookups/* PRIORITY_LOOKUP */.yM, (_row$priority2 = row.priority) !== null && _row$priority2 !== void 0 ? _row$priority2 : ''),
      description: row.summary || row.body,
      priority: prefill.priority,
      assignmentStrategy: 'direct',
      dueDate: prefill.dueDate
    });
    setGiaoViecOpen(true);
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
        void deleteRow(activeRow);
      } : undefined
    };
  }, [reloadAll, perms.canCreate, perms.canUpdate, perms.canRead, perms.canDelete, openCreate, handleHistoryToolbar, openConfig, activeRow, openRow, deleteRow]);
  var listFilters = (0,external_react_.useMemo)(function () {
    return /*#__PURE__*/(0,jsx_runtime.jsxs)(linm_web_common_components_dist/* ErpListHeaderFilters */.S91, {
      testIdPrefix: TEST_ID,
      filterCols: 4,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* LinListFilterField */.a7f, {
        testId: "".concat(TEST_ID, "-field-search"),
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* SearchTextInput */.UAT, {
          label: "T\xECm ki\u1EBFm",
          placeholder: "M\xE3 \xB7 ti\xEAu \u0111\u1EC1 \xB7 \u0111\u1ED9i\u2026",
          value: searchDraft,
          onChange: setSearchDraft,
          onSearch: function onSearch() {
            return applyFilters(searchDraft, statusDraft, priorityDraft, typeDraft, unreadDraft, directionDraft, orgDraft);
          },
          testId: "".concat(TEST_ID, "-search-text")
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* LinListFilterField */.a7f, {
        testId: "".concat(TEST_ID, "-field-status"),
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* SearchInput */.DOo, {
          label: "Tr\u1EA1ng th\xE1i",
          config: lookups/* STATUS_LOOKUP_CONFIG */.rV,
          value: statusDraft,
          primaryDisplay: (0,lookups/* lookupLabel */.ZX)(lookups/* STATUS_LOOKUP */.cG, statusDraft),
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
        testId: "".concat(TEST_ID, "-field-priority"),
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* SearchInput */.DOo, {
          label: "\u01AFu ti\xEAn",
          config: lookups/* PRIORITY_LOOKUP_CONFIG */.PW,
          value: priorityDraft,
          primaryDisplay: (0,lookups/* lookupLabel */.ZX)(lookups/* PRIORITY_LOOKUP */.yM, priorityDraft),
          showSecondaryInput: false,
          placeholder: "T\u1EA5t c\u1EA3 \u01B0u ti\xEAn",
          onChange: function onChange(item) {
            return setPriorityDraft(item.value);
          },
          onClear: function onClear() {
            return setPriorityDraft('');
          }
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* LinListFilterField */.a7f, {
        testId: "".concat(TEST_ID, "-field-type"),
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* SearchInput */.DOo, {
          label: "Lo\u1EA1i",
          config: lookups/* TYPE_LOOKUP_CONFIG */.JZ,
          value: typeDraft,
          primaryDisplay: (0,lookups/* lookupLabel */.ZX)(lookups/* TYPE_LOOKUP */._E, typeDraft),
          showSecondaryInput: false,
          placeholder: "T\u1EA5t c\u1EA3 lo\u1EA1i",
          onChange: function onChange(item) {
            return setTypeDraft(item.value);
          },
          onClear: function onClear() {
            return setTypeDraft('');
          }
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* LinListFilterField */.a7f, {
        testId: "".concat(TEST_ID, "-field-direction"),
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* SearchInput */.DOo, {
          label: "Chi\u1EC1u",
          config: lookups/* DIRECTION_LOOKUP_CONFIG */.ct,
          value: directionDraft,
          primaryDisplay: (0,lookups/* lookupLabel */.ZX)(lookups/* DIRECTION_LOOKUP */.Ze, directionDraft),
          showSecondaryInput: false,
          placeholder: "T\u1EA5t c\u1EA3 chi\u1EC1u",
          onChange: function onChange(item) {
            return setDirectionDraft(item.value);
          },
          onClear: function onClear() {
            return setDirectionDraft('');
          }
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* LinListFilterField */.a7f, {
        testId: "".concat(TEST_ID, "-field-org"),
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* SearchInput */.DOo, {
          label: "\u0110\u01A1n v\u1ECB",
          config: lookups/* ORG_UNIT_LOOKUP_CONFIG */.yh,
          value: orgDraft,
          primaryDisplay: (0,lookups/* lookupLabel */.ZX)(lookups/* ORG_UNIT_LOOKUP */.ne, orgDraft),
          showSecondaryInput: false,
          placeholder: "T\u1EA5t c\u1EA3 \u0111\u01A1n v\u1ECB",
          onChange: function onChange(item) {
            return setOrgDraft(item.value);
          },
          onClear: function onClear() {
            return setOrgDraft('');
          }
        })
      })]
    });
  }, [searchDraft, statusDraft, priorityDraft, typeDraft, unreadDraft, directionDraft, orgDraft, applyFilters]);
  var uiColumns = (0,external_react_.useMemo)(function () {
    return [{
      key: 'code',
      label: 'Mã',
      width: '10rem',
      allowSort: true,
      render: function render(row) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)("button", {
          type: "button",
          className: NotificationListPage_NotificationListPage_module.codeLink,
          onClick: function onClick() {
            return openRow(row, perms.canUpdate ? 'edit' : 'view');
          },
          "data-testid": "".concat(TEST_ID, "-code-").concat(row.code),
          children: row.code
        });
      },
      getDisplayValue: function getDisplayValue(r) {
        return r.code;
      }
    }, {
      key: 'documentNumber',
      label: 'Số CV',
      width: '8rem',
      allowSort: true,
      render: function render(row) {
        return row.documentNumber || '—';
      },
      getDisplayValue: function getDisplayValue(r) {
        return r.documentNumber || '';
      }
    }, {
      key: 'direction',
      label: 'Chiều',
      width: '6rem',
      control: 'SELECT',
      allowSort: true,
      render: function render(row) {
        return (0,lookups/* lookupLabel */.ZX)(lookups/* DIRECTION_LOOKUP */.Ze, row.direction || '');
      },
      getDisplayValue: function getDisplayValue(r) {
        return r.direction || '';
      }
    }, {
      key: 'summary',
      label: 'Trích yếu',
      width: '14rem',
      allowSort: true,
      render: function render(row) {
        return row.summary || '—';
      },
      getDisplayValue: function getDisplayValue(r) {
        return r.summary || '';
      }
    }, {
      key: 'orgUnitName',
      label: 'Đơn vị',
      width: '10rem',
      allowSort: true,
      render: function render(row) {
        return row.orgUnitName || (0,lookups/* lookupLabel */.ZX)(lookups/* ORG_UNIT_LOOKUP */.ne, row.orgUnitCode || '') || '—';
      },
      getDisplayValue: function getDisplayValue(r) {
        return r.orgUnitName || r.orgUnitCode || '';
      }
    }, {
      key: 'title',
      label: 'Tiêu đề',
      width: '14rem',
      allowSort: true,
      render: function render(row) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          className: row.isUnread ? NotificationListPage_NotificationListPage_module.unreadTitle : undefined,
          children: row.title
        });
      },
      getDisplayValue: function getDisplayValue(r) {
        return r.title;
      }
    }, {
      key: 'sender',
      label: 'Người gửi',
      width: '8rem',
      allowSort: true,
      render: function render(row) {
        return row.sender || '—';
      },
      getDisplayValue: function getDisplayValue(r) {
        return r.sender || '';
      }
    }, {
      key: 'recipient',
      label: 'Người nhận',
      width: '8rem',
      control: 'SELECT',
      allowSort: true,
      render: function render(row) {
        return (0,lookups/* lookupLabel */.ZX)(lookups/* RECIPIENT_LOOKUP */.Jn, row.recipient);
      },
      getDisplayValue: function getDisplayValue(r) {
        return r.recipient;
      }
    }, {
      key: 'priority',
      label: 'Ưu tiên',
      width: '7rem',
      control: 'SELECT',
      allowSort: true,
      render: function render(row) {
        return (0,lookups/* lookupLabel */.ZX)(lookups/* PRIORITY_LOOKUP */.yM, row.priority || '');
      },
      getDisplayValue: function getDisplayValue(r) {
        return r.priority || '';
      }
    }, {
      key: 'type',
      label: 'Loại',
      width: '7rem',
      control: 'SELECT',
      allowSort: true,
      render: function render(row) {
        return (0,lookups/* lookupLabel */.ZX)(lookups/* TYPE_LOOKUP */._E, row.type || '');
      },
      getDisplayValue: function getDisplayValue(r) {
        return r.type || '';
      }
    }, {
      key: 'status',
      label: 'TT',
      width: '7rem',
      control: 'SELECT',
      allowSort: true,
      render: function render(row) {
        return (0,lookups/* lookupLabel */.ZX)(lookups/* STATUS_LOOKUP */.cG, row.status);
      },
      getDisplayValue: function getDisplayValue(r) {
        return r.status;
      }
    }, {
      key: 'sentAt',
      label: 'Thời gian',
      width: '10rem',
      control: 'DATE',
      allowSort: true,
      render: function render(row) {
        return formatSentAt(row.sentAt);
      },
      getDisplayValue: function getDisplayValue(r) {
        return r.sentAt || '';
      }
    }];
  }, [openRow, perms.canUpdate]);
  var gridColumns = (0,external_react_.useMemo)(function () {
    return (0,bootstrapCatalogUiSchema/* buildDynamicGridColumns */.fo)(schema, uiColumns);
  }, [schema, uiColumns]);
  (0,external_react_.useEffect)(function () {
    if (!(schema !== null && schema !== void 0 && schema.list)) return;
    setTableConfig(_objectSpread(_objectSpread(_objectSpread({}, linm_web_common_components_dist/* DEFAULT_CATALOG_LIST_TABLE_CONFIG */.bkK), (0,linm_web_common_components_dist/* catalogListTableConfigFromSchema */.D5f)(schema.list)), {}, {
      resizable: true
    }));
  }, [schema]);
  var rowMenuItems = (0,external_react_.useMemo)(function () {
    var base = (0,linm_web_common_components_dist/* buildCatalogRowMenuItems */.ZNy)({
      showView: perms.canRead,
      showEdit: perms.canUpdate,
      showCopy: perms.canCreate,
      showHistory: perms.canRead,
      showDelete: perms.canDelete
    });
    var extras = [{
      id: 'mark-read',
      label: 'Đánh dấu đã đọc',
      icon: 'fas fa-envelope-open',
      separatorBefore: true
    }, {
      id: 'assign',
      label: 'Giao việc',
      icon: 'fas fa-user-plus'
    }];
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
      case 'mark-read':
        void markReadRow(row);
        break;
      case 'assign':
        openGiaoViec(row);
        break;
      default:
        break;
    }
  }, [rowMenu === null || rowMenu === void 0 ? void 0 : rowMenu.row, openRow, deleteRow, markReadRow, catalogHistory.openHistory, openGiaoViec]);
  var emptyMessage = search.trim() || statusFilter || priorityFilter || typeFilter || unreadOnly || directionFilter || orgFilter ? 'Không có chỉ đạo phù hợp bộ lọc.' : 'Không có dữ liệu chỉ đạo điều hành.';
  var beforeToolbar = /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: NotificationListPage_NotificationListPage_module.kpiStrip,
      "data-testid": "".concat(TEST_ID, "-kpi"),
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: NotificationListPage_NotificationListPage_module.kpi,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: NotificationListPage_NotificationListPage_module.kpiLabel,
          children: "C\xE1n b\u1ED9 online"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: NotificationListPage_NotificationListPage_module.kpiValue,
          children: overview.staffOnline
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: NotificationListPage_NotificationListPage_module.kpi,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: NotificationListPage_NotificationListPage_module.kpiLabel,
          children: "S\u1EF1 c\u1ED1 m\u1EDF"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: NotificationListPage_NotificationListPage_module.kpiValue,
          children: overview.openIncidents
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: NotificationListPage_NotificationListPage_module.kpi,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: NotificationListPage_NotificationListPage_module.kpiLabel,
          children: "WO \u0111ang SC"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: NotificationListPage_NotificationListPage_module.kpiValue,
          children: overview.woInProgress
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: NotificationListPage_NotificationListPage_module.kpi,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: NotificationListPage_NotificationListPage_module.kpiLabel,
          children: "Ch\u01B0a \u0111\u1ECDc"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: NotificationListPage_NotificationListPage_module.kpiValue,
          children: overview.unreadCount
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: NotificationListPage_NotificationListPage_module.extraBar,
      "data-testid": "".concat(TEST_ID, "-extra-actions"),
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* Button */.$nd, {
        type: "button",
        variant: "secondary",
        size: "sm",
        onClick: function onClick() {
          return setUnreadDraft(unreadDraft === '1' ? '' : '1');
        },
        "data-testid": "".concat(TEST_ID, "-unread-toggle"),
        children: unreadDraft === '1' ? 'Bỏ lọc chưa đọc' : 'Lọc chưa đọc'
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* Button */.$nd, {
        type: "button",
        variant: "secondary",
        size: "sm",
        onClick: function onClick() {
          return void markAllRead();
        },
        children: "\u0110\xE1nh d\u1EA5u t\u1EA5t c\u1EA3 \u0111\xE3 \u0111\u1ECDc"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* Button */.$nd, {
        type: "button",
        variant: "secondary",
        size: "sm",
        onClick: function onClick() {
          return window.alert('Xuất inbox — stub P1.');
        },
        children: "Xu\u1EA5t"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* Button */.$nd, {
        type: "button",
        variant: "secondary",
        size: "sm",
        onClick: function onClick() {
          return window.alert('Navigate → Giám sát (patrol) — cross-MFE stub.');
        },
        children: "Gi\xE1m s\xE1t"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* Button */.$nd, {
        type: "button",
        variant: "secondary",
        size: "sm",
        onClick: function onClick() {
          return window.alert('Navigate → Bản đồ (gis) — cross-MFE stub.');
        },
        children: "B\u1EA3n \u0111\u1ED3"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* Button */.$nd, {
        type: "button",
        variant: "secondary",
        size: "sm",
        onClick: function onClick() {
          return window.alert('Navigate → Sự cố (incident) — cross-MFE stub.');
        },
        children: "S\u1EF1 c\u1ED1"
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(linm_web_common_components_dist/* Button */.$nd, {
        type: "button",
        variant: "secondary",
        size: "sm",
        onClick: function onClick() {
          return window.alert('Command center — DEFER P2 (GAP-F-OPS-01).');
        },
        children: ["Command ", /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          className: NotificationListPage_NotificationListPage_module.badgeP2,
          children: "P2"
        })]
      })]
    })]
  });
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: NotificationListPage_NotificationListPage_module.page,
    "data-catalog-list-page": true,
    "data-testid": "".concat(TEST_ID, "-page"),
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* LinPageLayout */.pYq, {
      kind: "catalog",
      filterBarLayout: "standard",
      testIdPrefix: TEST_ID,
      pageId: PAGE_ID,
      header: {
        title: 'Chỉ đạo điều hành',
        titleIconClass: 'fas fa-bullhorn',
        pageId: PAGE_ID
      },
      beforeToolbar: beforeToolbar,
      toolbar: (0,buildRmmsGenericToolbar/* fromCatalogToolbar */.F$)(catalogToolbar),
      listTitle: "Danh s\xE1ch ch\u1EC9 \u0111\u1EA1o / th\xF4ng b\xE1o",
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
        })) : null, /*#__PURE__*/(0,jsx_runtime.jsx)(GiaoViecModal/* GiaoViecModal */.t, {
          open: giaoViecOpen,
          context: giaoViecContext,
          onClose: function onClose() {
            return setGiaoViecOpen(false);
          },
          onCreated: function onCreated(task, ctx) {
            return setChatTarget({
              taskId: task.id,
              from: ctx.source,
              sourceId: ctx.sourceEntityId,
              title: task.title
            });
          }
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(TaskChatPanel/* TaskChatPanel */.M, {
          target: chatTarget,
          onClose: function onClose() {
            return setChatTarget(null);
          }
        })]
      }),
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: NotificationListPage_NotificationListPage_module.gridWrap,
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
            className: NotificationListPage_NotificationListPage_module.empty,
            "data-testid": "".concat(TEST_ID, "-empty"),
            children: emptyMessage
          }),
          onRowOpenActionMenu: function onRowOpenActionMenu(_ref6) {
            var row = _ref6.row,
              x = _ref6.x,
              y = _ref6.y;
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
/* harmony default export */ const NotificationListPage_NotificationListPage = (NotificationListPage);
;// ./src/pages/NotificationListPage/index.ts


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

/***/ 6857
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JZ: () => (/* binding */ TYPE_LOOKUP_CONFIG),
/* harmony export */   Jn: () => (/* binding */ RECIPIENT_LOOKUP),
/* harmony export */   LO: () => (/* binding */ CHANNEL_LOOKUP),
/* harmony export */   Oj: () => (/* binding */ RECIPIENT_LOOKUP_CONFIG),
/* harmony export */   PW: () => (/* binding */ PRIORITY_LOOKUP_CONFIG),
/* harmony export */   ZX: () => (/* binding */ lookupLabel),
/* harmony export */   Ze: () => (/* binding */ DIRECTION_LOOKUP),
/* harmony export */   _E: () => (/* binding */ TYPE_LOOKUP),
/* harmony export */   cG: () => (/* binding */ STATUS_LOOKUP),
/* harmony export */   ct: () => (/* binding */ DIRECTION_LOOKUP_CONFIG),
/* harmony export */   mH: () => (/* binding */ CHANNEL_LOOKUP_CONFIG),
/* harmony export */   ne: () => (/* binding */ ORG_UNIT_LOOKUP),
/* harmony export */   rV: () => (/* binding */ STATUS_LOOKUP_CONFIG),
/* harmony export */   yM: () => (/* binding */ PRIORITY_LOOKUP),
/* harmony export */   yh: () => (/* binding */ ORG_UNIT_LOOKUP_CONFIG)
/* harmony export */ });
/* unused harmony export masterLookupConfig */
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(467);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4980);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4756);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _search_searchDropdownDefaults__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6415);
/* harmony import */ var _demo_opsStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9890);



function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
;

var STATUS_LOOKUP = _demo_opsStore__WEBPACK_IMPORTED_MODULE_4__/* .OPS_STATUSES */ .qV.map(function (s) {
  return {
    value: s.value,
    label: s.label
  };
});
var PRIORITY_LOOKUP = _demo_opsStore__WEBPACK_IMPORTED_MODULE_4__/* .OPS_PRIORITIES */ .w3.map(function (s) {
  return {
    value: s.value,
    label: s.label
  };
});
var TYPE_LOOKUP = _demo_opsStore__WEBPACK_IMPORTED_MODULE_4__/* .OPS_TYPES */ .dA.map(function (s) {
  return {
    value: s.value,
    label: s.label
  };
});
var CHANNEL_LOOKUP = _demo_opsStore__WEBPACK_IMPORTED_MODULE_4__/* .OPS_CHANNELS */ .A7.map(function (s) {
  return {
    value: s.value,
    label: s.label
  };
});
var RECIPIENT_LOOKUP = _demo_opsStore__WEBPACK_IMPORTED_MODULE_4__/* .OPS_RECIPIENTS */ .gV.map(function (s) {
  return {
    value: s.value,
    label: s.label
  };
});
function searchMaster(items, search) {
  var q = (search !== null && search !== void 0 ? search : '').trim().toLowerCase();
  var filtered = q ? items.filter(function (i) {
    return i.value.toLowerCase().includes(q) || i.label.toLowerCase().includes(q);
  }) : items;
  return {
    items: filtered,
    page: 1,
    totalPages: 1
  };
}
function masterLookupConfig(items) {
  return _objectSpread(_objectSpread({
    api: {
      getItemKey: function getItemKey(i) {
        return i.value;
      },
      search: function () {
        var _search2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(_ref) {
          var _search;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function (_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _search = _ref.search;
                return _context.abrupt("return", searchMaster(items, _search));
              case 1:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
        function search(_x) {
          return _search2.apply(this, arguments);
        }
        return search;
      }(),
      getDetail: function () {
        var _getDetail = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2(id) {
          var _items$find;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function (_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", (_items$find = items.find(function (i) {
                  return i.value === id;
                })) !== null && _items$find !== void 0 ? _items$find : {
                  value: id,
                  label: id
                });
              case 1:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }));
        function getDetail(_x2) {
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
        return i.label;
      },
      getSingleDisplay: function getSingleDisplay(i) {
        return i.label;
      }
    }
  }, _search_searchDropdownDefaults__WEBPACK_IMPORTED_MODULE_3__/* .SEARCH_DROPDOWN_PORTAL */ .AA), {}, {
    columns: (0,_search_searchDropdownDefaults__WEBPACK_IMPORTED_MODULE_3__/* .catalogLookupColumns */ .zz)(),
    header: (0,_search_searchDropdownDefaults__WEBPACK_IMPORTED_MODULE_3__/* .catalogLookupHeader */ .hH)(),
    pageSize: 50
  });
}
var STATUS_LOOKUP_CONFIG = masterLookupConfig(STATUS_LOOKUP);
var PRIORITY_LOOKUP_CONFIG = masterLookupConfig(PRIORITY_LOOKUP);
var TYPE_LOOKUP_CONFIG = masterLookupConfig(TYPE_LOOKUP);
var CHANNEL_LOOKUP_CONFIG = masterLookupConfig(CHANNEL_LOOKUP);
var RECIPIENT_LOOKUP_CONFIG = masterLookupConfig(RECIPIENT_LOOKUP);
var DIRECTION_LOOKUP = _demo_opsStore__WEBPACK_IMPORTED_MODULE_4__/* .OPS_DIRECTIONS */ .qD.map(function (s) {
  return {
    value: s.value,
    label: s.label
  };
});
var ORG_UNIT_LOOKUP = _demo_opsStore__WEBPACK_IMPORTED_MODULE_4__/* .OPS_ORG_UNITS */ .el.map(function (s) {
  return {
    value: s.value,
    label: s.label
  };
});
var DIRECTION_LOOKUP_CONFIG = masterLookupConfig(DIRECTION_LOOKUP);
var ORG_UNIT_LOOKUP_CONFIG = masterLookupConfig(ORG_UNIT_LOOKUP);
function lookupLabel(items, value) {
  var _items$find$label, _items$find2;
  return (_items$find$label = (_items$find2 = items.find(function (i) {
    return i.value === value;
  })) === null || _items$find2 === void 0 ? void 0 : _items$find2.label) !== null && _items$find$label !== void 0 ? _items$find$label : value;
}

/***/ },

/***/ 5162
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   tI: () => (/* binding */ opsListPermissions)
/* harmony export */ });
/* unused harmony exports OPS_PERMS, hasOpsPermission */
/* harmony import */ var _dev_isPermissionsLocalMode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8495);
/**
 * T-PERM-01 — permission codes for ops inbox (Auth stub until CommonLib mount).
 * Codes must match Auth: rmms-field:ops-inbox:read|write
 */

var OPS_PERMS = {
  read: 'rmms-field:ops-inbox:read',
  create: 'rmms-field:ops-inbox:write',
  update: 'rmms-field:ops-inbox:write',
  delete: 'rmms-field:ops-inbox:write'
};
/** Local/dev: all true. Host: read from window.__LINM_PERMS__ when Auth lands. */
function hasOpsPermission(code) {
  if ((0,_dev_isPermissionsLocalMode__WEBPACK_IMPORTED_MODULE_0__/* .isPermissionsLocalModeActive */ .z)()) return true;
  var bag = window.__LINM_PERMS__;
  if (!bag) return true;
  return bag[code] === true;
}
function opsListPermissions() {
  return {
    canRead: hasOpsPermission(OPS_PERMS.read),
    canCreate: hasOpsPermission(OPS_PERMS.create),
    canUpdate: hasOpsPermission(OPS_PERMS.update),
    canDelete: hasOpsPermission(OPS_PERMS.delete)
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

/***/ 6560
(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.page___ZzaOs {
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

.kpiStrip___lWuQK {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 8px;
  padding: 0 0 8px;
}

@media (max-width: 900px) {
  .kpiStrip___lWuQK {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

.kpi___a6wbs {
  background: var(--card);
  border: 1px solid var(--border-soft);
  border-radius: 8px;
  padding: 8px 16px;
  min-width: 0;
}

.kpiLabel___q7XDS {
  font-size: 11px;
  color: var(--muted);
  font-weight: 600;
}

.kpiValue___qIIY2 {
  margin-top: 4px;
  font-size: 16px;
  font-weight: 800;
  color: #0f766e;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.extraBar___U5Go8 {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 0 0 8px;
}

.gridWrap___ZpWEx {
  flex: 1 1 auto;
  min-height: 0;
  width: 100%;
  overflow: auto;
}

.codeLink___rsFiP {
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

.unreadTitle___B6XKj {
  font-weight: 700;
}

.empty___USLF3 {
  padding: 32px 16px;
  text-align: center;
  color: var(--muted);
  font-size: 14px;
}

.badgeP2___zk7Qo {
  display: inline-block;
  margin-left: 4px;
  font-size: 10px;
  font-weight: 700;
  padding: 1px 6px;
  border-radius: 4px;
  background: #e0e7ff;
  color: #3730a3;
}
`, "",{"version":3,"sources":["webpack://./src/pages/NotificationListPage/NotificationListPage.module.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,YAAY;EACZ,iBAAiB;EACjB,sBAAsB;EACtB,cAAc;EACd,gBAAgB;EAChB,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,qBAAqB;EACrB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,gDAAgD;EAChD,QAAQ;EACR,gBAAgB;AAClB;;AAEA;EACE;IACE,gDAAgD;EAClD;AACF;;AAEA;EACE,uBAAuB;EACvB,oCAAoC;EACpC,kBAAkB;EAClB,iBAAiB;EACjB,YAAY;AACd;;AAEA;EACE,eAAe;EACf,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,eAAe;EACf,gBAAgB;EAChB,cAAc;EACd,kCAAkC;EAClC,mBAAmB;EACnB,gBAAgB;EAChB,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,QAAQ;EACR,gBAAgB;AAClB;;AAEA;EACE,cAAc;EACd,aAAa;EACb,WAAW;EACX,cAAc;AAChB;;AAEA;EACE,SAAS;EACT,uBAAuB;EACvB,qBAAqB;EACrB,qEAAqE;EACrE,eAAe;EACf,eAAe;EACf,UAAU;EACV,0BAA0B;EAC1B,0BAA0B;AAC5B;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,qBAAqB;EACrB,gBAAgB;EAChB,eAAe;EACf,gBAAgB;EAChB,gBAAgB;EAChB,kBAAkB;EAClB,mBAAmB;EACnB,cAAc;AAChB","sourcesContent":[".page {\n  --bg: #f5f7fa;\n  --card: #fff;\n  --border: #bababe;\n  --border-soft: #e9ecef;\n  --txt: #1a1a1a;\n  --muted: #6c757d;\n  --primary: #0d6efd;\n  height: 100%;\n  min-height: 0;\n  display: flex;\n  flex-direction: column;\n  background: var(--bg);\n  color: var(--txt);\n}\n\n.kpiStrip {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 8px;\n  padding: 0 0 8px;\n}\n\n@media (max-width: 900px) {\n  .kpiStrip {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n\n.kpi {\n  background: var(--card);\n  border: 1px solid var(--border-soft);\n  border-radius: 8px;\n  padding: 8px 16px;\n  min-width: 0;\n}\n\n.kpiLabel {\n  font-size: 11px;\n  color: var(--muted);\n  font-weight: 600;\n}\n\n.kpiValue {\n  margin-top: 4px;\n  font-size: 16px;\n  font-weight: 800;\n  color: #0f766e;\n  font-variant-numeric: tabular-nums;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.extraBar {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  padding: 0 0 8px;\n}\n\n.gridWrap {\n  flex: 1 1 auto;\n  min-height: 0;\n  width: 100%;\n  overflow: auto;\n}\n\n.codeLink {\n  border: 0;\n  background: transparent;\n  color: var(--primary);\n  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;\n  font-size: 13px;\n  cursor: pointer;\n  padding: 0;\n  text-decoration: underline;\n  text-underline-offset: 2px;\n}\n\n.unreadTitle {\n  font-weight: 700;\n}\n\n.empty {\n  padding: 32px 16px;\n  text-align: center;\n  color: var(--muted);\n  font-size: 14px;\n}\n\n.badgeP2 {\n  display: inline-block;\n  margin-left: 4px;\n  font-size: 10px;\n  font-weight: 700;\n  padding: 1px 6px;\n  border-radius: 4px;\n  background: #e0e7ff;\n  color: #3730a3;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"page": `page___ZzaOs`,
	"kpiStrip": `kpiStrip___lWuQK`,
	"kpi": `kpi___a6wbs`,
	"kpiLabel": `kpiLabel___q7XDS`,
	"kpiValue": `kpiValue___qIIY2`,
	"extraBar": `extraBar___U5Go8`,
	"gridWrap": `gridWrap___ZpWEx`,
	"codeLink": `codeLink___rsFiP`,
	"unreadTitle": `unreadTitle___B6XKj`,
	"empty": `empty___USLF3`,
	"badgeP2": `badgeP2___zk7Qo`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);

/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ }

}]);
//# sourceMappingURL=notification-list-page.53c7788c.linm-rmms-field.js.map