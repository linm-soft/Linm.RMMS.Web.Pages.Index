"use strict";
(self["webpackChunkrmms_field"] = self["webpackChunkrmms_field"] || []).push([[889],{

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

/***/ 2651
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ MaintenanceFormPage_MaintenanceFormPage)
});

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
// EXTERNAL MODULE: ./node_modules/react-router/dist/index.js
var dist = __webpack_require__(7767);
// EXTERNAL MODULE: ./node_modules/react-router-dom/dist/index.js
var react_router_dom_dist = __webpack_require__(4976);
// EXTERNAL MODULE: ./src/router/useShellPageTitle.ts
var useShellPageTitle = __webpack_require__(7619);
// EXTERNAL MODULE: ./node_modules/@linm-soft-org/linm-web-common-components/dist/index.js + 583 modules
var linm_web_common_components_dist = __webpack_require__(8755);
// EXTERNAL MODULE: ./src/router/navigateInAppPath.ts
var navigateInAppPath = __webpack_require__(2381);
// EXTERNAL MODULE: ./src/services/maintenance/maintenanceService.ts + 1 modules
var maintenanceService = __webpack_require__(1545);
// EXTERNAL MODULE: ./src/services/maintenance/permissions.ts
var permissions = __webpack_require__(5420);
// EXTERNAL MODULE: ./src/services/maintenance/lookups.ts
var maintenance_lookups = __webpack_require__(8483);
// EXTERNAL MODULE: ./src/pages/buildRmmsGenericToolbar.tsx
var buildRmmsGenericToolbar = __webpack_require__(5503);
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./src/pages/MaintenanceFormPage/MaintenanceFormPage.module.css
var MaintenanceFormPage_module = __webpack_require__(8866);
;// ./src/pages/MaintenanceFormPage/MaintenanceFormPage.module.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(MaintenanceFormPage_module/* default */.A, options);




       /* harmony default export */ const MaintenanceFormPage_MaintenanceFormPage_module = (MaintenanceFormPage_module/* default */.A && MaintenanceFormPage_module/* default */.A.locals ? MaintenanceFormPage_module/* default */.A.locals : undefined);

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
;// ./src/pages/MaintenanceFormPage/MaintenanceFormPage.tsx




function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,defineProperty/* default */.A)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
;










var EMPTY_FORM = {
  code: '',
  title: '',
  routeName: '',
  workType: 'repair',
  status: 'new',
  teamName: '',
  assigneeName: '',
  dueAt: new Date().toISOString(),
  progressPercent: 0,
  slaHours: null,
  incidentId: '',
  description: '',
  note: '',
  updatedAt: '',
  isActive: true
};
var REQUIRED = ['routeName', 'workType', 'status', 'dueAt'];
var TEST_ID = 'rmms-maintenance-form';
var PAGE_ID = 'maintenance-form';
var MODE_TITLE = {
  create: 'Công việc bảo trì',
  edit: 'Sửa công việc',
  view: 'Xem công việc',
  copy: 'Sao chép công việc'
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
  var _dto$teamName, _dto$assigneeName, _dto$progressPercent, _dto$slaHours, _dto$incidentId, _dto$description, _dto$note, _dto$updatedAt;
  return {
    code: asCopy ? '' : dto.code,
    title: dto.title,
    routeName: dto.routeName,
    workType: dto.workType,
    status: dto.status,
    teamName: (_dto$teamName = dto.teamName) !== null && _dto$teamName !== void 0 ? _dto$teamName : '',
    assigneeName: (_dto$assigneeName = dto.assigneeName) !== null && _dto$assigneeName !== void 0 ? _dto$assigneeName : '',
    dueAt: dto.dueAt,
    progressPercent: (_dto$progressPercent = dto.progressPercent) !== null && _dto$progressPercent !== void 0 ? _dto$progressPercent : 0,
    slaHours: (_dto$slaHours = dto.slaHours) !== null && _dto$slaHours !== void 0 ? _dto$slaHours : null,
    incidentId: (_dto$incidentId = dto.incidentId) !== null && _dto$incidentId !== void 0 ? _dto$incidentId : '',
    description: (_dto$description = dto.description) !== null && _dto$description !== void 0 ? _dto$description : '',
    note: (_dto$note = dto.note) !== null && _dto$note !== void 0 ? _dto$note : '',
    updatedAt: (_dto$updatedAt = dto.updatedAt) !== null && _dto$updatedAt !== void 0 ? _dto$updatedAt : '',
    isActive: dto.isActive !== false
  };
}
function formatDue(iso) {
  if (!iso) return '—';
  try {
    return new Date(iso).toLocaleString('vi-VN');
  } catch (_unused) {
    return iso;
  }
}
var MaintenanceFormPage = function MaintenanceFormPage() {
  var _searchParams$get, _form$code, _form$progressPercent;
  var _useParams = (0,dist/* useParams */.g)(),
    idParam = _useParams.id;
  var _useLocation = (0,dist/* useLocation */.zy)(),
    pathname = _useLocation.pathname;
  var _useSearchParams = (0,react_router_dom_dist/* useSearchParams */.ok)(),
    _useSearchParams2 = (0,slicedToArray/* default */.A)(_useSearchParams, 1),
    searchParams = _useSearchParams2[0];
  var navigate = (0,navigateInAppPath/* useInAppNavigate */.lc)();
  var perms = (0,permissions/* maintenanceListPermissions */.mO)();
  var lookups = (0,maintenance_lookups/* useMaintenanceLookups */.AQ)();
  var recordId = (_searchParams$get = searchParams.get('id')) !== null && _searchParams$get !== void 0 ? _searchParams$get : idParam;
  var mode = (0,external_react_.useMemo)(function () {
    if (pathname.endsWith('/sua')) return 'edit';
    if (pathname.endsWith('/tao-moi')) {
      return searchParams.get('id') ? 'copy' : 'create';
    }
    if (!recordId) return 'create';
    return 'view';
  }, [recordId, pathname, searchParams]);
  var isView = mode === 'view';
  var _useState = (0,external_react_.useState)(_objectSpread({}, EMPTY_FORM)),
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
  var _useState9 = (0,external_react_.useState)(true),
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
  (0,external_react_.useEffect)(function () {
    var cancelled = false;
    var boot = /*#__PURE__*/function () {
      var _ref = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee() {
        var sourceId, dto, _t;
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
              setForm(_objectSpread(_objectSpread({}, EMPTY_FORM), {}, {
                code: '',
                dueAt: new Date().toISOString(),
                updatedAt: ''
              }));
              return _context.abrupt("return");
            case 2:
              sourceId = recordId;
              if (sourceId) {
                _context.next = 3;
                break;
              }
              navigate('/sc-bt');
              return _context.abrupt("return");
            case 3:
              _context.next = 4;
              return maintenanceService/* maintenanceService */.B.getById(sourceId);
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
              _context.next = 7;
              break;
            case 6:
              _context.prev = 6;
              _t = _context["catch"](1);
              if (!cancelled) navigate('/sc-bt');
            case 7:
              _context.prev = 7;
              if (!cancelled) setLoading(false);
              return _context.finish(7);
            case 8:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[1, 6, 7, 8]]);
      }));
      return function boot() {
        return _ref.apply(this, arguments);
      };
    }();
    void boot();
    return function () {
      cancelled = true;
    };
  }, [mode, recordId, navigate]);
  var updateField = function updateField(key, value) {
    if (isView) return;
    setDirty(true);
    setForm(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, (0,defineProperty/* default */.A)({}, key, value));
    });
    setInvalid(function (prev) {
      var next = new Set(prev);
      next.delete(String(key));
      return next;
    });
  };
  var goList = function goList() {
    if (!isView && dirty) {
      var ok = window.confirm('Bạn có thay đổi chưa lưu. Thoát mà không lưu?');
      if (!ok) return;
    }
    navigate('/sc-bt');
  };
  var handleSave = /*#__PURE__*/function () {
    var _ref2 = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee2(nextStatus) {
      var statusToSave, snapshot, bad, payload;
      return regenerator_default().wrap(function (_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            if (!isView) {
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
            statusToSave = nextStatus !== null && nextStatus !== void 0 ? nextStatus : form.status;
            snapshot = _objectSpread(_objectSpread({}, form), {}, {
              status: statusToSave
            });
            if (nextStatus) setForm(snapshot);
            bad = new Set();
            REQUIRED.forEach(function (key) {
              var val = key === 'status' ? statusToSave : snapshot[key];
              if (val === '' || val == null || typeof val === 'string' && !val.trim()) {
                bad.add(key);
              }
            });
            setInvalid(bad);
            setShowBanner(bad.size > 0);
            if (!(bad.size > 0)) {
              _context2.next = 4;
              break;
            }
            return _context2.abrupt("return");
          case 4:
            setSaving(true);
            _context2.prev = 5;
            payload = {
              title: snapshot.title.trim(),
              routeName: snapshot.routeName.trim(),
              workType: snapshot.workType,
              status: statusToSave,
              teamName: snapshot.teamName.trim() || undefined,
              assigneeName: snapshot.assigneeName.trim() || undefined,
              dueAt: snapshot.dueAt,
              progressPercent: snapshot.progressPercent,
              slaHours: snapshot.slaHours,
              incidentId: snapshot.incidentId.trim() || undefined,
              description: snapshot.description.trim() || undefined,
              note: snapshot.note.trim() || undefined
            };
            if (!(mode === 'edit' && currentId)) {
              _context2.next = 7;
              break;
            }
            _context2.next = 6;
            return maintenanceService/* maintenanceService */.B.update(currentId, payload);
          case 6:
            _context2.next = 8;
            break;
          case 7:
            _context2.next = 8;
            return maintenanceService/* maintenanceService */.B.create(payload);
          case 8:
            setDirty(false);
            navigate('/sc-bt');
          case 9:
            _context2.prev = 9;
            setSaving(false);
            return _context2.finish(9);
          case 10:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[5,, 9, 10]]);
    }));
    return function handleSave(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  var fieldClass = function fieldClass(key) {
    return [MaintenanceFormPage_MaintenanceFormPage_module.field, invalid.has(key) ? MaintenanceFormPage_MaintenanceFormPage_module.fieldInvalid : ''].filter(Boolean).join(' ');
  };
  var codeDisplay = (_form$code = form.code) !== null && _form$code !== void 0 && _form$code.trim() ? form.code : '(tự sinh)';
  var toolbar = (0,buildRmmsGenericToolbar/* buildRmmsDetailToolbar */.aX)({
    testIdPrefix: TEST_ID,
    onBack: goList,
    right: /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [isView && currentId && perms.canUpdate ? (0,buildRmmsGenericToolbar/* rmmsFormActionButton */.Oo)({
        testId: "".concat(TEST_ID, "-btn-to-edit"),
        label: 'Sửa',
        icon: 'fas fa-pen',
        onClick: function onClick() {
          return navigate("/sc-bt/sua?id=".concat(encodeURIComponent(currentId)));
        }
      }) : null, isView && currentId && perms.canCreate ? (0,buildRmmsGenericToolbar/* rmmsFormActionButton */.Oo)({
        testId: "".concat(TEST_ID, "-btn-to-copy"),
        label: 'Sao chép',
        icon: 'fas fa-copy',
        onClick: function onClick() {
          return navigate("/sc-bt/tao-moi?id=".concat(encodeURIComponent(currentId)));
        }
      }) : null, !isView ? (0,buildRmmsGenericToolbar/* rmmsFormActionButton */.Oo)({
        testId: "".concat(TEST_ID, "-btn-cancel"),
        label: 'Hủy',
        icon: 'fas fa-times',
        onClick: goList
      }) : null, !isView ? (0,buildRmmsGenericToolbar/* rmmsFormActionButton */.Oo)({
        testId: "".concat(TEST_ID, "-btn-save-new"),
        label: 'Lưu (Mới)',
        icon: 'fas fa-file',
        onClick: function onClick() {
          return void handleSave('new');
        },
        loading: saving
      }) : null, !isView ? (0,buildRmmsGenericToolbar/* rmmsFormActionButton */.Oo)({
        testId: "".concat(TEST_ID, "-btn-save"),
        label: 'Lưu',
        icon: 'fas fa-save',
        variant: 'primary',
        onClick: function onClick() {
          return void handleSave();
        },
        loading: saving
      }) : null]
    })
  });
  var viewBody = /*#__PURE__*/(0,jsx_runtime.jsxs)("dl", {
    className: MaintenanceFormPage_MaintenanceFormPage_module.viewGrid,
    "data-form-cols": "5",
    "data-testid": "".concat(TEST_ID, "-view"),
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("dt", {
        children: "M\xE3"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("dd", {
        children: form.code || '—'
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("dt", {
        children: "Tr\u1EA1ng th\xE1i"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("dd", {
        children: (0,maintenance_lookups/* lookupLabel */.ZX)(lookups.statusItems, form.status)
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: MaintenanceFormPage_MaintenanceFormPage_module.span2,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("dt", {
        children: "Ti\xEAu \u0111\u1EC1"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("dd", {
        children: form.title || '—'
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("dt", {
        children: "Tuy\u1EBFn \u0111\u01B0\u1EDDng"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("dd", {
        children: form.routeName || '—'
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("dt", {
        children: "Lo\u1EA1i c\xF4ng vi\u1EC7c"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("dd", {
        children: (0,maintenance_lookups/* lookupLabel */.ZX)(lookups.workTypeItems, form.workType)
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("dt", {
        children: "H\u1EA1n ho\xE0n th\xE0nh"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("dd", {
        children: formatDue(form.dueAt)
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("dt", {
        children: "\u0110\u1ED9i SC"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("dd", {
        children: form.teamName || '—'
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("dt", {
        children: "C\xE1n b\u1ED9"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("dd", {
        children: form.assigneeName || '—'
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("dt", {
        children: "Ti\u1EBFn \u0111\u1ED9"
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("dd", {
        children: [(_form$progressPercent = form.progressPercent) !== null && _form$progressPercent !== void 0 ? _form$progressPercent : 0, "%"]
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("dt", {
        children: "SLA (gi\u1EDD)"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("dd", {
        children: form.slaHours == null ? '—' : String(form.slaHours)
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("dt", {
        children: "S\u1EF1 c\u1ED1 li\xEAn k\u1EBFt"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("dd", {
        children: form.incidentId || '—'
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: MaintenanceFormPage_MaintenanceFormPage_module.span2,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("dt", {
        children: "M\xF4 t\u1EA3"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("dd", {
        children: form.description || '—'
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: MaintenanceFormPage_MaintenanceFormPage_module.span2,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("dt", {
        children: "Ghi ch\xFA ti\u1EBFn \u0111\u1ED9"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("dd", {
        children: form.note || '—'
      })]
    })]
  });
  var editBody = /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: MaintenanceFormPage_MaintenanceFormPage_module.z2,
    "data-form-cols": "5",
    "data-testid": "".concat(TEST_ID, "-z2"),
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("section", {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("h3", {
        className: MaintenanceFormPage_MaintenanceFormPage_module.sectionTitle,
        children: "Th\xF4ng tin chung"
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: MaintenanceFormPage_MaintenanceFormPage_module.fields,
        "data-form-cols": "5",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: fieldClass('code'),
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* Input */.pde, {
            label: "M\xE3 c\xF4ng vi\u1EC7c",
            value: codeDisplay,
            disabled: true,
            fullWidth: true,
            "data-testid": "".concat(TEST_ID, "-field-code")
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: fieldClass('status'),
          "data-testid": "".concat(TEST_ID, "-field-status"),
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* SearchInput */.DOo, {
            label: "Tr\u1EA1ng th\xE1i",
            required: true,
            config: lookups.statusConfig,
            value: form.status,
            primaryDisplay: (0,maintenance_lookups/* lookupLabel */.ZX)(lookups.statusItems, form.status),
            showSecondaryInput: false,
            onChange: function onChange(item) {
              return updateField('status', item.value);
            },
            onClear: function onClear() {
              return updateField('status', '');
            },
            error: invalid.has('status') ? 'Bắt buộc' : undefined
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "".concat(fieldClass('title'), " ").concat(MaintenanceFormPage_MaintenanceFormPage_module.span2),
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* Input */.pde, {
            label: "Ti\xEAu \u0111\u1EC1",
            value: form.title,
            onChange: function onChange(e) {
              return updateField('title', e.target.value);
            },
            fullWidth: true,
            "data-testid": "".concat(TEST_ID, "-field-title")
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: fieldClass('routeName'),
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* Input */.pde, {
            label: "Tuy\u1EBFn \u0111\u01B0\u1EDDng",
            required: true,
            value: form.routeName,
            onChange: function onChange(e) {
              return updateField('routeName', e.target.value);
            },
            fullWidth: true,
            error: invalid.has('routeName') ? 'Bắt buộc' : undefined,
            "data-testid": "".concat(TEST_ID, "-field-routeName")
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: fieldClass('workType'),
          "data-testid": "".concat(TEST_ID, "-field-workType"),
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* SearchInput */.DOo, {
            label: "Lo\u1EA1i c\xF4ng vi\u1EC7c",
            required: true,
            config: lookups.workTypeConfig,
            value: form.workType,
            primaryDisplay: (0,maintenance_lookups/* lookupLabel */.ZX)(lookups.workTypeItems, form.workType),
            showSecondaryInput: false,
            onChange: function onChange(item) {
              return updateField('workType', item.value);
            },
            onClear: function onClear() {
              return updateField('workType', '');
            },
            error: invalid.has('workType') ? 'Bắt buộc' : undefined
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: fieldClass('dueAt'),
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* Input */.pde, {
            label: "H\u1EA1n ho\xE0n th\xE0nh",
            required: true,
            type: "datetime-local",
            value: toLocalInput(form.dueAt),
            onChange: function onChange(e) {
              return updateField('dueAt', fromLocalInput(e.target.value));
            },
            fullWidth: true,
            error: invalid.has('dueAt') ? 'Bắt buộc' : undefined,
            "data-testid": "".concat(TEST_ID, "-field-dueAt")
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: MaintenanceFormPage_MaintenanceFormPage_module.field,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* Input */.pde, {
            label: "\u0110\u1ED9i SC",
            value: form.teamName,
            onChange: function onChange(e) {
              return updateField('teamName', e.target.value);
            },
            fullWidth: true,
            "data-testid": "".concat(TEST_ID, "-field-teamName")
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: MaintenanceFormPage_MaintenanceFormPage_module.field,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* Input */.pde, {
            label: "C\xE1n b\u1ED9",
            value: form.assigneeName,
            onChange: function onChange(e) {
              return updateField('assigneeName', e.target.value);
            },
            fullWidth: true,
            "data-testid": "".concat(TEST_ID, "-field-assigneeName")
          })
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("section", {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("h3", {
        className: MaintenanceFormPage_MaintenanceFormPage_module.sectionTitle,
        children: "Ti\u1EBFn \u0111\u1ED9 & li\xEAn k\u1EBFt"
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: MaintenanceFormPage_MaintenanceFormPage_module.fields,
        "data-form-cols": "5",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: MaintenanceFormPage_MaintenanceFormPage_module.field,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* Input */.pde, {
            label: "Ti\u1EBFn \u0111\u1ED9 (%)",
            type: "number",
            value: String(form.progressPercent),
            onChange: function onChange(e) {
              var n = Number(e.target.value);
              updateField('progressPercent', Number.isNaN(n) ? 0 : Math.min(100, Math.max(0, n)));
            },
            fullWidth: true,
            "data-testid": "".concat(TEST_ID, "-field-progressPercent")
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: MaintenanceFormPage_MaintenanceFormPage_module.field,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* Input */.pde, {
            label: "SLA (gi\u1EDD)",
            type: "number",
            value: form.slaHours == null ? '' : String(form.slaHours),
            onChange: function onChange(e) {
              var raw = e.target.value.trim();
              if (!raw) {
                updateField('slaHours', null);
                return;
              }
              var n = Number(raw);
              updateField('slaHours', Number.isNaN(n) ? null : n);
            },
            fullWidth: true,
            "data-testid": "".concat(TEST_ID, "-field-slaHours")
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: MaintenanceFormPage_MaintenanceFormPage_module.field,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* Input */.pde, {
            label: "S\u1EF1 c\u1ED1 li\xEAn k\u1EBFt",
            value: form.incidentId,
            onChange: function onChange(e) {
              return updateField('incidentId', e.target.value);
            },
            fullWidth: true,
            "data-testid": "".concat(TEST_ID, "-field-incidentId")
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "".concat(MaintenanceFormPage_MaintenanceFormPage_module.field, " ").concat(MaintenanceFormPage_MaintenanceFormPage_module.span2),
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* Input */.pde, {
            label: "M\xF4 t\u1EA3",
            value: form.description,
            onChange: function onChange(e) {
              return updateField('description', e.target.value);
            },
            fullWidth: true,
            "data-testid": "".concat(TEST_ID, "-field-description")
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "".concat(MaintenanceFormPage_MaintenanceFormPage_module.field, " ").concat(MaintenanceFormPage_MaintenanceFormPage_module.span2),
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* Input */.pde, {
            label: "Ghi ch\xFA ti\u1EBFn \u0111\u1ED9",
            value: form.note,
            onChange: function onChange(e) {
              return updateField('note', e.target.value);
            },
            fullWidth: true,
            "data-testid": "".concat(TEST_ID, "-field-note")
          })
        })]
      })]
    })]
  });
  (0,useShellPageTitle/* useShellPageTitle */.D)(MODE_TITLE[mode]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: MaintenanceFormPage_MaintenanceFormPage_module.page,
    "data-testid": "".concat(TEST_ID, "-page"),
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* LinPageHeader */.mhJ, {
      pageId: PAGE_ID,
      testIdPrefix: TEST_ID,
      title: MODE_TITLE[mode],
      titleIconClass: "fas fa-tools",
      hint: "L\u1EADp l\u1ECBch s\u1EEDa ch\u1EEFa / b\u1EA3o tr\xEC"
    }), toolbar, loading ? /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: MaintenanceFormPage_MaintenanceFormPage_module.loading,
      "data-testid": "".concat(TEST_ID, "-loading"),
      children: "\u0110ang t\u1EA3i\u2026"
    }) : /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [showBanner ? /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: MaintenanceFormPage_MaintenanceFormPage_module.banner,
        "data-testid": "".concat(TEST_ID, "-banner"),
        children: "Vui l\xF2ng nh\u1EADp \u0111\u1EE7 c\xE1c tr\u01B0\u1EDDng b\u1EAFt bu\u1ED9c (tuy\u1EBFn, lo\u1EA1i, tr\u1EA1ng th\xE1i, h\u1EA1n)."
      }) : null, isView ? viewBody : editBody]
    })]
  });
};
/* harmony default export */ const MaintenanceFormPage_MaintenanceFormPage = (MaintenanceFormPage);
;// ./src/pages/MaintenanceFormPage/index.ts


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

/***/ 8866
(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.page___e0vu5 {
  height: 100%;
  min-height: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  background: #f5f7fa;
  color: #1a1a1a;
  overflow: auto;
}

.actions___VP2qI {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
}

.banner___dy_0u {
  padding: 8px 16px;
  border-radius: 4px;
  background: #fef2f2;
  color: #b91c1c;
  font-size: 13px;
}

.z2___adEG3 {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.sectionTitle___xEYwT {
  margin: 0 0 8px;
  font-size: 13px;
  font-weight: 700;
}

.fields___I7wS7,
.viewGrid___g8Zqa {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 16px;
  align-items: start;
}

@media (max-width: 1024px) {
  .fields___I7wS7,
  .viewGrid___g8Zqa {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .fields___I7wS7,
  .viewGrid___g8Zqa {
    grid-template-columns: 1fr;
  }
}

.field___RfKGF {
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
}

.span2___unbmC {
  grid-column: 1 / -1;
}

.fieldInvalid___gmKf1 input {
  border-color: #dc3545 !important;
}

.viewGrid___g8Zqa dt {
  margin: 0 0 4px;
  font-size: 12px;
  color: #6c757d;
}

.viewGrid___g8Zqa dd {
  margin: 0;
  font-size: 14px;
}

.z3___Ly3jJ {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  width: 100%;
}

.z3___Ly3jJ button {
  min-width: 100px;
}

@media (max-width: 640px) {
  .z3___Ly3jJ {
    flex-direction: column-reverse;
    align-items: stretch;
  }

  .z3___Ly3jJ button {
    width: 100%;
    justify-content: center;
  }
}

.loading___hJgzX {
  padding: 16px;
  text-align: center;
  color: #6c757d;
}
`, "",{"version":3,"sources":["webpack://./src/pages/MaintenanceFormPage/MaintenanceFormPage.module.css"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,aAAa;EACb,mBAAmB;EACnB,cAAc;EACd,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,eAAe;EACf,QAAQ;AACV;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,mBAAmB;EACnB,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,eAAe;EACf,eAAe;EACf,gBAAgB;AAClB;;AAEA;;EAEE,aAAa;EACb,gDAAgD;EAChD,SAAS;EACT,kBAAkB;AACpB;;AAEA;EACE;;IAEE,gDAAgD;EAClD;AACF;;AAEA;EACE;;IAEE,0BAA0B;EAC5B;AACF;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,QAAQ;EACR,YAAY;AACd;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,eAAe;EACf,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,SAAS;EACT,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,yBAAyB;EACzB,mBAAmB;EACnB,eAAe;EACf,QAAQ;EACR,WAAW;AACb;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE;IACE,8BAA8B;IAC9B,oBAAoB;EACtB;;EAEA;IACE,WAAW;IACX,uBAAuB;EACzB;AACF;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,cAAc;AAChB","sourcesContent":[".page {\n  height: 100%;\n  min-height: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  padding: 16px;\n  background: #f5f7fa;\n  color: #1a1a1a;\n  overflow: auto;\n}\n\n.actions {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n\n.banner {\n  padding: 8px 16px;\n  border-radius: 4px;\n  background: #fef2f2;\n  color: #b91c1c;\n  font-size: 13px;\n}\n\n.z2 {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.sectionTitle {\n  margin: 0 0 8px;\n  font-size: 13px;\n  font-weight: 700;\n}\n\n.fields,\n.viewGrid {\n  display: grid;\n  grid-template-columns: repeat(5, minmax(0, 1fr));\n  gap: 16px;\n  align-items: start;\n}\n\n@media (max-width: 1024px) {\n  .fields,\n  .viewGrid {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n}\n\n@media (max-width: 640px) {\n  .fields,\n  .viewGrid {\n    grid-template-columns: 1fr;\n  }\n}\n\n.field {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  min-width: 0;\n}\n\n.span2 {\n  grid-column: 1 / -1;\n}\n\n.fieldInvalid :global(input) {\n  border-color: #dc3545 !important;\n}\n\n.viewGrid dt {\n  margin: 0 0 4px;\n  font-size: 12px;\n  color: #6c757d;\n}\n\n.viewGrid dd {\n  margin: 0;\n  font-size: 14px;\n}\n\n.z3 {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 8px;\n  width: 100%;\n}\n\n.z3 :global(button) {\n  min-width: 100px;\n}\n\n@media (max-width: 640px) {\n  .z3 {\n    flex-direction: column-reverse;\n    align-items: stretch;\n  }\n\n  .z3 :global(button) {\n    width: 100%;\n    justify-content: center;\n  }\n}\n\n.loading {\n  padding: 16px;\n  text-align: center;\n  color: #6c757d;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"page": `page___e0vu5`,
	"actions": `actions___VP2qI`,
	"banner": `banner___dy_0u`,
	"z2": `z2___adEG3`,
	"sectionTitle": `sectionTitle___xEYwT`,
	"fields": `fields___I7wS7`,
	"viewGrid": `viewGrid___g8Zqa`,
	"field": `field___RfKGF`,
	"span2": `span2___unbmC`,
	"fieldInvalid": `fieldInvalid___gmKf1`,
	"z3": `z3___Ly3jJ`,
	"loading": `loading___hJgzX`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);

/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ }

}]);
//# sourceMappingURL=maintenance-form-page.90004acb.linm-rmms-field.js.map