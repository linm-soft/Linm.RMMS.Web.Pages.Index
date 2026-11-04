"use strict";
(self["webpackChunkrmms_field"] = self["webpackChunkrmms_field"] || []).push([[710],{

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

/***/ 1072
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ PatrolListPage_PatrolListPage)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js + 2 modules
var defineProperty = __webpack_require__(4980);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(467);
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
// EXTERNAL MODULE: ./src/services/patrol/patrolService.ts + 1 modules
var patrolService = __webpack_require__(3880);
// EXTERNAL MODULE: ./src/services/patrol/permissions.ts
var permissions = __webpack_require__(7031);
// EXTERNAL MODULE: ./src/services/patrol/lookups.ts
var lookups = __webpack_require__(5816);
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./src/pages/PatrolListPage/PatrolListPage.module.css
var PatrolListPage_module = __webpack_require__(934);
;// ./src/pages/PatrolListPage/PatrolListPage.module.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(PatrolListPage_module/* default */.A, options);




       /* harmony default export */ const PatrolListPage_PatrolListPage_module = (PatrolListPage_module/* default */.A && PatrolListPage_module/* default */.A.locals ? PatrolListPage_module/* default */.A.locals : undefined);

// EXTERNAL MODULE: ./src/pages/buildRmmsGenericToolbar.tsx
var buildRmmsGenericToolbar = __webpack_require__(5503);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
;// ./src/pages/PatrolListPage/PatrolListPage.tsx



function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,defineProperty/* default */.A)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
;











var TEST_ID = 'rmms-patrol-list';
var PAGE_ID = 'patrol';
var ROW_MENU_HINT_KEY = "".concat(TEST_ID, "-row-menu-hint-dismissed");
function formatDate(iso) {
  if (!iso) return '—';
  try {
    var d = new Date(iso.length === 10 ? "".concat(iso, "T00:00:00") : iso);
    return d.toLocaleDateString('vi-VN');
  } catch (_unused) {
    return iso;
  }
}
var PatrolListPage = function PatrolListPage() {
  var _rowMenu$x, _rowMenu$y;
  var dispatch = (0,react_redux/* useDispatch */.wA)();
  var catalogHistory = (0,linm_web_common_components_dist/* useCatalogHistoryModal */.Sfw)();
  var navigate = (0,navigateInAppPath/* useInAppNavigate */.lc)();
  var _useSearchParams = (0,dist/* useSearchParams */.ok)(),
    _useSearchParams2 = (0,slicedToArray/* default */.A)(_useSearchParams, 2),
    searchParams = _useSearchParams2[0],
    setSearchParams = _useSearchParams2[1];
  var perms = (0,permissions/* patrolListPermissions */.TR)();
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
    search = _useState8[0],
    setSearch = _useState8[1];
  var _useState9 = (0,external_react_.useState)(''),
    _useState0 = (0,slicedToArray/* default */.A)(_useState9, 2),
    statusFilter = _useState0[0],
    setStatusFilter = _useState0[1];
  var _useState1 = (0,external_react_.useState)(''),
    _useState10 = (0,slicedToArray/* default */.A)(_useState1, 2),
    routeFilter = _useState10[0],
    setRouteFilter = _useState10[1];
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
    configHint = _useState22[0],
    setConfigHint = _useState22[1];
  var _useServerPagedListLo = (0,linm_web_common_components_dist/* useServerPagedListLoading */._W4)(),
    showTableLoading = _useServerPagedListLo.showTableLoading,
    pageLoading = _useServerPagedListLo.pageLoading,
    pulseSearch = _useServerPagedListLo.pulseSearch,
    setLoadingMode = _useServerPagedListLo.setLoadingMode,
    beginFetch = _useServerPagedListLo.beginFetch,
    endFetch = _useServerPagedListLo.endFetch;
  var load = (0,external_react_.useCallback)(function () {
    beginFetch();
    patrolService/* patrolService */.W.getList({
      search: search.trim() || undefined,
      status: statusFilter || undefined,
      route: routeFilter || undefined,
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
  }, [search, statusFilter, routeFilter, page, pageSize, beginFetch, endFetch]);
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
      navigate('/td-tk/tao-moi', {
        replace: true
      });
      return;
    }
    if (id && (form === 'edit' || form === 'view' || form === 'copy')) {
      if (form === 'copy') {
        navigate("/td-tk/tao-moi?copyFrom=".concat(encodeURIComponent(id)), {
          replace: true
        });
        return;
      }
      var qs = form === 'edit' ? '?mode=edit' : '';
      navigate("/td-tk/".concat(encodeURIComponent(id)).concat(qs), {
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
  var applyFilters = (0,external_react_.useCallback)(function (nextSearch, nextStatus, nextRoute) {
    pulseSearch(function () {
      setSearch(nextSearch.trim());
      setStatusFilter(nextStatus);
      setRouteFilter(nextRoute);
      setPage(1);
    });
  }, [pulseSearch]);
  (0,external_react_.useEffect)(function () {
    var t = window.setTimeout(function () {
      applyFilters(searchDraft, statusDraft, routeDraft);
    }, 300);
    return function () {
      return window.clearTimeout(t);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- only re-filter when draft inputs change
  }, [searchDraft, statusDraft, routeDraft]);
  var openRow = (0,external_react_.useCallback)(function (row, mode) {
    selectActiveRow(row);
    if (mode === 'create') {
      navigate('/td-tk/tao-moi');
      return;
    }
    if (mode === 'copy') {
      navigate("/td-tk/tao-moi?copyFrom=".concat(encodeURIComponent(row.id)));
      return;
    }
    var qs = mode === 'edit' ? '?mode=edit' : '';
    navigate("/td-tk/".concat(encodeURIComponent(row.id)).concat(qs));
  }, [selectActiveRow, navigate]);
  var openCreate = (0,external_react_.useCallback)(function () {
    if (!perms.canCreate) return;
    navigate('/td-tk/tao-moi');
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
  var editConfigStub = (0,external_react_.useCallback)(function () {
    setConfigHint(true);
  }, []);
  var deleteRow = (0,external_react_.useCallback)(/*#__PURE__*/function () {
    var _ref = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee(row) {
      var _row$userDisplayName;
      var _t;
      return regenerator_default().wrap(function (_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (perms.canDelete) {
              _context.next = 1;
              break;
            }
            window.alert('Không có quyền xóa phiên tuần tra.');
            return _context.abrupt("return");
          case 1:
            if (window.confirm("X\xF3a phi\xEAn tu\u1EA7n \xAB".concat(row.code, " \u2014 ").concat(((_row$userDisplayName = row.userDisplayName) === null || _row$userDisplayName === void 0 ? void 0 : _row$userDisplayName.trim()) || row.userName, " / ").concat(row.route, "\xBB?"))) {
              _context.next = 2;
              break;
            }
            return _context.abrupt("return");
          case 2:
            _context.prev = 2;
            _context.next = 3;
            return patrolService/* patrolService */.W.delete(row.id);
          case 3:
            clearSelection();
            setLoadingMode('filter');
            load();
            _context.next = 5;
            break;
          case 4:
            _context.prev = 4;
            _t = _context["catch"](2);
            window.alert(_t instanceof Error ? _t.message : 'Xóa phiên tuần thất bại.');
          case 5:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[2, 4]]);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }(), [perms.canDelete, clearSelection, setLoadingMode, load]);
  var catalogToolbar = (0,external_react_.useMemo)(function () {
    return {
      testIdPrefix: TEST_ID,
      onRefresh: reloadAll,
      canAdd: perms.canCreate,
      onAdd: openCreate,
      canHistory: true,
      onHistory: handleHistoryToolbar,
      showSchemaConfig: true,
      onEditConfig: editConfigStub,
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
  }, [reloadAll, perms.canCreate, perms.canUpdate, perms.canRead, perms.canDelete, openCreate, handleHistoryToolbar, editConfigStub, activeRow, openRow, deleteRow]);
  var listFilters = (0,external_react_.useMemo)(function () {
    return /*#__PURE__*/(0,jsx_runtime.jsxs)(linm_web_common_components_dist/* ErpListHeaderFilters */.S91, {
      testIdPrefix: TEST_ID,
      filterCols: 3,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* LinListFilterField */.a7f, {
        testId: "".concat(TEST_ID, "-field-search"),
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* SearchTextInput */.UAT, {
          label: "T\xECm ki\u1EBFm",
          placeholder: "M\xE3 / NV / tuy\u1EBFn / lo\u1EA1i / tr\u1EA1ng th\xE1i\u2026",
          value: searchDraft,
          onChange: setSearchDraft,
          onSearch: function onSearch() {
            return applyFilters(searchDraft, statusDraft, routeDraft);
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
        testId: "".concat(TEST_ID, "-field-route"),
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* SearchInput */.DOo, {
          label: "Tuy\u1EBFn",
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
      })]
    });
  }, [searchDraft, statusDraft, routeDraft, applyFilters]);
  var columns = (0,external_react_.useMemo)(function () {
    return [{
      key: 'code',
      label: 'Mã phiên',
      width: 140,
      allowSort: true,
      render: function render(row) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)("button", {
          type: "button",
          className: PatrolListPage_PatrolListPage_module.codeLink,
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
      width: 150,
      allowSort: true,
      render: function render(row) {
        var _row$userDisplayName2;
        return ((_row$userDisplayName2 = row.userDisplayName) === null || _row$userDisplayName2 === void 0 ? void 0 : _row$userDisplayName2.trim()) || row.userName;
      },
      getDisplayValue: function getDisplayValue(r) {
        var _r$userDisplayName;
        return ((_r$userDisplayName = r.userDisplayName) === null || _r$userDisplayName === void 0 ? void 0 : _r$userDisplayName.trim()) || r.userName;
      }
    }, {
      key: 'route',
      label: 'Tuyến',
      width: 90,
      allowSort: true,
      render: function render(row) {
        return row.route;
      },
      getDisplayValue: function getDisplayValue(r) {
        return r.route;
      }
    }, {
      key: 'patrolType',
      label: 'Loại tuần',
      width: 110,
      allowSort: true,
      render: function render(row) {
        return row.patrolType;
      },
      getDisplayValue: function getDisplayValue(r) {
        return r.patrolType;
      }
    }, {
      key: 'plannedDate',
      label: 'Ngày KH',
      width: 110,
      allowSort: true,
      render: function render(row) {
        return formatDate(row.plannedDate);
      },
      getDisplayValue: function getDisplayValue(r) {
        return r.plannedDate;
      }
    }, {
      key: 'checkInCount',
      label: 'Check-in',
      width: 90,
      allowSort: true,
      render: function render(row) {
        return row.checkInCount;
      },
      getDisplayValue: function getDisplayValue(r) {
        return String(r.checkInCount);
      }
    }, {
      key: 'coveragePercent',
      label: 'Coverage %',
      width: 100,
      allowSort: true,
      render: function render(row) {
        return "".concat(Number(row.coveragePercent).toFixed(1), "%");
      },
      getDisplayValue: function getDisplayValue(r) {
        return String(r.coveragePercent);
      }
    }, {
      key: 'status',
      label: 'Trạng thái',
      width: 120,
      allowSort: true,
      render: function render(row) {
        return row.status;
      },
      getDisplayValue: function getDisplayValue(r) {
        return r.status;
      }
    }, {
      key: 'offlineQueued',
      label: 'Offline',
      width: 90,
      allowSort: true,
      render: function render(row) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          className: row.offlineQueued ? PatrolListPage_PatrolListPage_module.offlineBad : PatrolListPage_PatrolListPage_module.offlineOk,
          children: row.offlineQueued ? 'Queue' : 'Online'
        });
      },
      getDisplayValue: function getDisplayValue(r) {
        return r.offlineQueued ? 'Queue' : 'Online';
      }
    }];
  }, [openRow]);
  var rowMenuItems = (0,external_react_.useMemo)(function () {
    return (0,linm_web_common_components_dist/* buildCatalogRowMenuItems */.ZNy)({
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
        void deleteRow(row);
        break;
      case 'history':
        catalogHistory.openHistory({
          documentType: PAGE_ID,
          documentId: row.id,
          documentCode: row.code
        });
        break;
      default:
        break;
    }
  }, [rowMenu === null || rowMenu === void 0 ? void 0 : rowMenu.row, openRow, deleteRow, catalogHistory.openHistory]);
  var emptyMessage = search.trim() || statusFilter || routeFilter ? 'Không có phiên tuần tra phù hợp bộ lọc.' : 'Không có dữ liệu phiên tuần tra.';
  var tableConfig = (0,external_react_.useMemo)(function () {
    return _objectSpread(_objectSpread({}, linm_web_common_components_dist/* DEFAULT_CATALOG_LIST_TABLE_CONFIG */.bkK), {}, {
      resizable: true
    });
  }, []);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: PatrolListPage_PatrolListPage_module.page,
    "data-catalog-list-page": true,
    "data-testid": "".concat(TEST_ID, "-page"),
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* LinPageLayout */.pYq, {
      kind: "catalog",
      filterBarLayout: "standard",
      testIdPrefix: TEST_ID,
      pageId: PAGE_ID,
      header: {
        title: 'Tuần đường / tuần kiểm',
        titleIconClass: 'fas fa-route',
        pageId: PAGE_ID
      },
      toolbar: (0,buildRmmsGenericToolbar/* fromCatalogToolbar */.F$)(catalogToolbar),
      listTitle: "S\u1ED5 phi\xEAn tu\u1EA7n tra / check-in",
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
        }), catalogHistory.modalProps ? /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* LinCatalogHistoryModal */.s6Z, _objectSpread(_objectSpread({}, catalogHistory.modalProps), {}, {
          testIdPrefix: TEST_ID,
          onError: function onError(message) {
            return (0,linm_web_common_components_dist/* dispatchAppToast */.tWi)(dispatch, {
              message: message,
              type: 'error'
            });
          }
        })) : null]
      }),
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: PatrolListPage_PatrolListPage_module.gridWrap,
        "data-testid": "".concat(TEST_ID, "-grid-wrap"),
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* LinCatalogDataGrid */.vEK, {
          testIdPrefix: TEST_ID,
          rows: items,
          page: page,
          pageSize: pageSize,
          columns: columns,
          getRowId: function getRowId(r) {
            return r.id;
          },
          selection: listSelection,
          tableConfig: tableConfig,
          paginateClient: false,
          empty: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: PatrolListPage_PatrolListPage_module.empty,
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
    }), configHint ? /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: PatrolListPage_PatrolListPage_module.configHint,
      role: "dialog",
      "aria-modal": "true",
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: PatrolListPage_PatrolListPage_module.configHintCard,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("p", {
          children: "C\u1EA5u h\xECnh c\u1ED9t l\u01B0\u1EDBi d\xF9ng m\u1EB7c \u0111\u1ECBnh Kind B (k\xE9o/\u0111\u1ED5i \u0111\u1ED9 r\u1ED9ng c\u1ED9t ON). Schema editor \u0111\u1EA7y \u0111\u1EE7 g\u1EAFn catalog-ui-schema khi IAM s\u1EB5n s\xE0ng."
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* Button */.$nd, {
          type: "button",
          onClick: function onClick() {
            return setConfigHint(false);
          },
          children: "\u0110\xF3ng"
        })]
      })
    }) : null]
  });
};
/* harmony default export */ const PatrolListPage_PatrolListPage = (PatrolListPage);
;// ./src/pages/PatrolListPage/index.ts


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

/***/ 5816
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ch: () => (/* reexport safe */ _attendance_lookups__WEBPACK_IMPORTED_MODULE_5__.Ch),
/* harmony export */   EZ: () => (/* reexport safe */ _attendance_lookups__WEBPACK_IMPORTED_MODULE_5__.ZX),
/* harmony export */   FJ: () => (/* reexport safe */ _attendance_lookups__WEBPACK_IMPORTED_MODULE_5__.FJ),
/* harmony export */   FR: () => (/* reexport safe */ _attendance_lookups__WEBPACK_IMPORTED_MODULE_5__.FR),
/* harmony export */   JZ: () => (/* binding */ TYPE_LOOKUP_CONFIG),
/* harmony export */   ZX: () => (/* binding */ lookupLabel),
/* harmony export */   _E: () => (/* binding */ TYPE_LOOKUP),
/* harmony export */   an: () => (/* binding */ OFFLINE_LOOKUP_CONFIG),
/* harmony export */   cG: () => (/* binding */ STATUS_LOOKUP),
/* harmony export */   rV: () => (/* binding */ STATUS_LOOKUP_CONFIG)
/* harmony export */ });
/* unused harmony exports OFFLINE_LOOKUP, masterLookupConfig */
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(467);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4980);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4756);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _search_searchDropdownDefaults__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6415);
/* harmony import */ var _demo_patrolStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4968);
/* harmony import */ var _attendance_lookups__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8969);



function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
;



var STATUS_LOOKUP = _demo_patrolStore__WEBPACK_IMPORTED_MODULE_4__/* .PATROL_STATUSES */ .oY.map(function (value) {
  return {
    value: value,
    label: value
  };
});
var TYPE_LOOKUP = _demo_patrolStore__WEBPACK_IMPORTED_MODULE_4__/* .PATROL_TYPES */ .X1.map(function (value) {
  return {
    value: value,
    label: value
  };
});
var OFFLINE_LOOKUP = [{
  value: 'false',
  label: 'Online'
}, {
  value: 'true',
  label: 'Offline queue'
}];
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
var TYPE_LOOKUP_CONFIG = masterLookupConfig(TYPE_LOOKUP);
var OFFLINE_LOOKUP_CONFIG = masterLookupConfig(OFFLINE_LOOKUP);
function lookupLabel(items, value) {
  var _items$find$label, _items$find2;
  return (_items$find$label = (_items$find2 = items.find(function (i) {
    return i.value === value;
  })) === null || _items$find2 === void 0 ? void 0 : _items$find2.label) !== null && _items$find$label !== void 0 ? _items$find$label : value;
}

/***/ },

/***/ 7031
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TR: () => (/* binding */ patrolListPermissions)
/* harmony export */ });
/* unused harmony exports PATROL_PERMS, hasPatrolPermission */
/* harmony import */ var _dev_isPermissionsLocalMode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8495);
/**
 * T-PERM-01 — permission codes for patrol sessions (Auth stub until CommonLib mount).
 */

var PATROL_PERMS = {
  read: 'rmms-field:patrol-sessions:read',
  create: 'rmms-field:patrol-sessions:write',
  update: 'rmms-field:patrol-sessions:write',
  delete: 'rmms-field:patrol-sessions:write'
};
function hasPatrolPermission(code) {
  if ((0,_dev_isPermissionsLocalMode__WEBPACK_IMPORTED_MODULE_0__/* .isPermissionsLocalModeActive */ .z)()) return true;
  var bag = window.__LINM_PERMS__;
  if (!bag) return true;
  return bag[code] === true;
}
function patrolListPermissions() {
  return {
    canRead: hasPatrolPermission(PATROL_PERMS.read),
    canCreate: hasPatrolPermission(PATROL_PERMS.create),
    canUpdate: hasPatrolPermission(PATROL_PERMS.update),
    canDelete: hasPatrolPermission(PATROL_PERMS.delete)
  };
}

/***/ },

/***/ 934
(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.page___sZZDB {
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

.gridWrap___Ck4dK {
  flex: 1 1 auto;
  min-height: 0;
  width: 100%;
  overflow: auto;
}

.codeLink___YBKLg {
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

.empty___mfipo {
  padding: 32px 16px;
  text-align: center;
  color: var(--muted);
  font-size: 14px;
}

.offlineOk___uaX_t {
  color: #047857;
  font-weight: 700;
  font-size: 12px;
}

.offlineBad___mBv2U {
  color: #b45309;
  font-weight: 700;
  font-size: 12px;
}

.configHint___LuuPI {
  position: fixed;
  inset: 0;
  z-index: 40;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(15, 23, 42, 0.35);
}

.configHintCard___I45tc {
  max-width: 420px;
  margin: 16px;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  border: 1px solid var(--border-soft);
  box-shadow: 0 12px 32px rgba(15, 23, 42, 0.16);
}

.configHintCard___I45tc p {
  margin: 0 0 16px;
  font-size: 14px;
  color: var(--txt);
  line-height: 1.45;
}
`, "",{"version":3,"sources":["webpack://./src/pages/PatrolListPage/PatrolListPage.module.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,YAAY;EACZ,iBAAiB;EACjB,sBAAsB;EACtB,cAAc;EACd,gBAAgB;EAChB,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,qBAAqB;EACrB,iBAAiB;AACnB;;AAEA;EACE,cAAc;EACd,aAAa;EACb,WAAW;EACX,cAAc;AAChB;;AAEA;EACE,SAAS;EACT,uBAAuB;EACvB,qBAAqB;EACrB,qEAAqE;EACrE,eAAe;EACf,eAAe;EACf,UAAU;EACV,0BAA0B;EAC1B,0BAA0B;AAC5B;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,QAAQ;EACR,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,kCAAkC;AACpC;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,aAAa;EACb,gBAAgB;EAChB,kBAAkB;EAClB,oCAAoC;EACpC,8CAA8C;AAChD;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,iBAAiB;AACnB","sourcesContent":[".page {\n  --bg: #f5f7fa;\n  --card: #fff;\n  --border: #bababe;\n  --border-soft: #e9ecef;\n  --txt: #1a1a1a;\n  --muted: #6c757d;\n  --primary: #0d6efd;\n  height: 100%;\n  min-height: 0;\n  display: flex;\n  flex-direction: column;\n  background: var(--bg);\n  color: var(--txt);\n}\n\n.gridWrap {\n  flex: 1 1 auto;\n  min-height: 0;\n  width: 100%;\n  overflow: auto;\n}\n\n.codeLink {\n  border: 0;\n  background: transparent;\n  color: var(--primary);\n  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;\n  font-size: 13px;\n  cursor: pointer;\n  padding: 0;\n  text-decoration: underline;\n  text-underline-offset: 2px;\n}\n\n.empty {\n  padding: 32px 16px;\n  text-align: center;\n  color: var(--muted);\n  font-size: 14px;\n}\n\n.offlineOk {\n  color: #047857;\n  font-weight: 700;\n  font-size: 12px;\n}\n\n.offlineBad {\n  color: #b45309;\n  font-weight: 700;\n  font-size: 12px;\n}\n\n.configHint {\n  position: fixed;\n  inset: 0;\n  z-index: 40;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(15, 23, 42, 0.35);\n}\n\n.configHintCard {\n  max-width: 420px;\n  margin: 16px;\n  padding: 20px;\n  background: #fff;\n  border-radius: 8px;\n  border: 1px solid var(--border-soft);\n  box-shadow: 0 12px 32px rgba(15, 23, 42, 0.16);\n}\n\n.configHintCard p {\n  margin: 0 0 16px;\n  font-size: 14px;\n  color: var(--txt);\n  line-height: 1.45;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"page": `page___sZZDB`,
	"gridWrap": `gridWrap___Ck4dK`,
	"codeLink": `codeLink___YBKLg`,
	"empty": `empty___mfipo`,
	"offlineOk": `offlineOk___uaX_t`,
	"offlineBad": `offlineBad___mBv2U`,
	"configHint": `configHint___LuuPI`,
	"configHintCard": `configHintCard___I45tc`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);

/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ }

}]);
//# sourceMappingURL=patrol-list-page.a446a30e.linm-rmms-field.js.map