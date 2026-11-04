"use strict";
(self["webpackChunkrmms_field"] = self["webpackChunkrmms_field"] || []).push([[534],{

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

/***/ 2516
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ NghiemThuFormPage_NghiemThuFormPage)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(467);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__(296);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__(5458);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js + 2 modules
var defineProperty = __webpack_require__(4980);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(4756);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(4726);
// EXTERNAL MODULE: ./node_modules/react-redux/dist/react-redux.mjs
var react_redux = __webpack_require__(1468);
// EXTERNAL MODULE: ./node_modules/react-router/dist/index.js
var dist = __webpack_require__(7767);
// EXTERNAL MODULE: ./node_modules/react-router-dom/dist/index.js
var react_router_dom_dist = __webpack_require__(4976);
// EXTERNAL MODULE: ./node_modules/@linm-soft-org/linm-web-common-components/dist/index.js + 583 modules
var linm_web_common_components_dist = __webpack_require__(8755);
// EXTERNAL MODULE: ./src/router/useShellPageTitle.ts
var useShellPageTitle = __webpack_require__(7619);
// EXTERNAL MODULE: ./src/router/navigateInAppPath.ts
var navigateInAppPath = __webpack_require__(2381);
// EXTERNAL MODULE: ./src/filters/RmmsOrgFormFields.tsx + 1 modules
var RmmsOrgFormFields = __webpack_require__(5538);
// EXTERNAL MODULE: ./src/filters/rmmsOrgForm.ts
var rmmsOrgForm = __webpack_require__(1704);
// EXTERNAL MODULE: ./src/services/nghiemThu/nghiemThuService.ts + 1 modules
var nghiemThuService = __webpack_require__(6566);
// EXTERNAL MODULE: ./src/services/nghiemThu/permissions.ts
var permissions = __webpack_require__(2610);
// EXTERNAL MODULE: ./src/services/nghiemThu/responseModel.ts
var responseModel = __webpack_require__(874);
;// ./src/services/nghiemThu/mediaUpload.ts


function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
;
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,defineProperty/* default */.A)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/** Nghiệm thu FileMulti — FileService guid[] · MIME FE enforce (DES-NT-UPLOAD). */

;
var NGHIEM_THU_MEDIA_MAX = 10;
var NGHIEM_THU_IMAGE_MAX_BYTES = 10 * 1024 * 1024;
var NGHIEM_THU_VIDEO_MAX_BYTES = 50 * 1024 * 1024;
var NGHIEM_THU_MEDIA_ACCEPT = 'image/jpeg,image/png,image/webp,video/mp4,video/webm,.jpg,.jpeg,.png,.webp,.mp4,.webm';
var NGHIEM_THU_MEDIA_LABELS = {
  dropTitle: 'Kéo thả ảnh / video hiện trường',
  dropHint: 'JPEG/PNG/WebP ≤10MB · MP4/WebM ≤50MB · tối đa {max} tệp (≤{maxMb}MB/video)',
  retry: 'Thử lại',
  remove: 'Xóa',
  extError: '«{name}» không đúng định dạng (jpeg/png/webp/mp4/webm).',
  sizeError: '«{name}» vượt quá {maxMb}MB.',
  maxError: 'Tối đa {max} tệp / phiếu.',
  minError: 'Cần tối thiểu {min} tệp.',
  uploading: 'Đang tải…',
  failed: 'Tải thất bại',
  preview: 'Xem',
  committedTitle: 'Đã gắn phiếu',
  uploadTitle: 'Ảnh / video nghiệm thu',
  tmpTitle: 'Chưa lưu',
  remaining: 'Còn [{count}] tệp',
  download: 'Tải xuống',
  view: 'Xem',
  cancel: 'Hủy',
  submit: 'Xong',
  objectMissing: 'Tệp không còn trên kho lưu trữ.',
  editName: 'Đổi tên',
  displayNamePlaceholder: 'Tên hiển thị',
  zoomIn: 'Phóng to',
  zoomOut: 'Thu nhỏ',
  zoomReset: '100%',
  fullPage: 'Toàn màn hình',
  exitFullPage: 'Thoát',
  close: 'Đóng',
  actionLoading: 'Đang xử lý…',
  removeConfirmTitle: 'Xóa tệp?',
  removeConfirmMessage: 'Tệp sẽ bị gỡ khỏi phiếu (không xóa FileService).',
  removeConfirmOk: 'Xóa',
  removeCancel: 'Giữ'
};
function isImageContentType(contentType, fileName) {
  var t = (contentType || '').toLowerCase();
  if (/^image\/(jpeg|png|webp)$/.test(t)) return true;
  return /\.(jpe?g|png|webp)$/i.test(fileName || '');
}
function isVideoContentType(contentType, fileName) {
  var t = (contentType || '').toLowerCase();
  if (/^video\/(mp4|webm)$/.test(t)) return true;
  return /\.(mp4|webm)$/i.test(fileName || '');
}
function createNghiemThuMediaUploadApi() {
  var base = (0,linm_web_common_components_dist/* createDefaultLinImageUploadApi */.DDH)();
  return _objectSpread(_objectSpread({}, base), {}, {
    init: function () {
      var _init = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee(body) {
        var img, vid, err, _err;
        return regenerator_default().wrap(function (_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              img = isImageContentType(body.contentType, body.fileName);
              vid = isVideoContentType(body.contentType, body.fileName);
              if (!(!img && !vid)) {
                _context.next = 1;
                break;
              }
              throw new Error('Định dạng không hỗ trợ (jpeg/png/webp/mp4/webm).');
            case 1:
              if (!(img && body.sizeBytes > NGHIEM_THU_IMAGE_MAX_BYTES)) {
                _context.next = 2;
                break;
              }
              err = new Error('FILE_TOO_LARGE');
              err.errorCode = 'FILE_TOO_LARGE';
              err.status = 413;
              throw err;
            case 2:
              if (!(vid && body.sizeBytes > NGHIEM_THU_VIDEO_MAX_BYTES)) {
                _context.next = 3;
                break;
              }
              _err = new Error('FILE_TOO_LARGE');
              _err.errorCode = 'FILE_TOO_LARGE';
              _err.status = 413;
              throw _err;
            case 3:
              return _context.abrupt("return", base.init(body));
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function init(_x) {
        return _init.apply(this, arguments);
      }
      return init;
    }()
  });
}
function mediaIdsFromUploadItems(items) {
  var ids = [];
  var _iterator = _createForOfIteratorHelper(items),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var item = _step.value;
      if (item.status === 'error' || item.status === 'uploading' || item.status === 'pending') {
        continue;
      }
      var id = (item.attachmentId || item.uploadId || '').trim();
      if (!id) continue;
      if (!ids.includes(id)) ids.push(id);
      if (ids.length >= NGHIEM_THU_MEDIA_MAX) break;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return ids;
}
function uploadItemsFromMediaIds(ids) {
  if (!(ids !== null && ids !== void 0 && ids.length)) return [];
  return ids.slice(0, NGHIEM_THU_MEDIA_MAX).map(function (id, index) {
    return {
      localId: "committed-".concat(id),
      fileName: "media-".concat(index + 1),
      displayName: "T\u1EC7p ".concat(index + 1),
      sizeBytes: 0,
      contentType: '',
      attachmentId: id,
      status: 'committed'
    };
  });
}
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./src/pages/NghiemThuFormPage/NghiemThuFormPage.module.css
var NghiemThuFormPage_module = __webpack_require__(8978);
;// ./src/pages/NghiemThuFormPage/NghiemThuFormPage.module.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(NghiemThuFormPage_module/* default */.A, options);




       /* harmony default export */ const NghiemThuFormPage_NghiemThuFormPage_module = (NghiemThuFormPage_module/* default */.A && NghiemThuFormPage_module/* default */.A.locals ? NghiemThuFormPage_module/* default */.A.locals : undefined);

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
;// ./src/pages/NghiemThuFormPage/NghiemThuFormPage.tsx





function NghiemThuFormPage_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function NghiemThuFormPage_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? NghiemThuFormPage_ownKeys(Object(t), !0).forEach(function (r) { (0,defineProperty/* default */.A)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : NghiemThuFormPage_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
;














var LIST_PATH = '/nghiem-thu';
var TEST_ID = 'rmms-nghiem-thu-form';
var CREATE_SLUGS = new Set(['new', 'tao-moi']);
var emptyForm = NghiemThuFormPage_objectSpread(NghiemThuFormPage_objectSpread({
  code: '',
  status: '',
  templateType: ''
}, rmmsOrgForm/* EMPTY_RMMS_ORG_FORM */.Q2), {}, {
  inspectedAt: '',
  kmFrom: '',
  kmTo: '',
  fieldInfo: '',
  note: '',
  mediaIds: [],
  updatedAt: ''
});
var MODE_TITLE = {
  create: 'Thêm nghiệm thu',
  edit: 'Sửa nghiệm thu',
  view: 'Xem nghiệm thu',
  copy: 'Sao chép nghiệm thu'
};
var modeBadge = function modeBadge(mode) {
  if (mode === 'create' || mode === 'copy') return 'Thêm';
  if (mode === 'view') return 'Xem';
  return 'Sửa';
};
function toDateInput(iso) {
  if (!iso) return '';
  var d = new Date(iso.length === 10 ? "".concat(iso, "T00:00:00") : iso);
  if (Number.isNaN(d.getTime())) return iso.slice(0, 10);
  var pad = function pad(n) {
    return String(n).padStart(2, '0');
  };
  return "".concat(d.getFullYear(), "-").concat(pad(d.getMonth() + 1), "-").concat(pad(d.getDate()));
}
function fromDateInput(local) {
  if (!local) return '';
  var d = new Date("".concat(local, "T00:00:00"));
  return Number.isNaN(d.getTime()) ? local : d.toISOString();
}
function formatDateTime(iso) {
  if (!iso) return '—';
  try {
    return new Date(iso).toLocaleString('vi-VN');
  } catch (_unused) {
    return iso;
  }
}
function orgOf(form) {
  return {
    zoneOrgCode: form.zoneOrgCode,
    zoneOrgName: form.zoneOrgName,
    vpOrgCode: form.vpOrgCode,
    vpOrgName: form.vpOrgName,
    assigneeCode: form.assigneeCode,
    assigneeName: form.assigneeName,
    routeCode: form.routeCode,
    routeName: form.routeName
  };
}
function fromDto(dto, asCopy) {
  var _dto$fieldInfo, _dto$note, _dto$mediaIds, _dto$updatedAt;
  var org = (0,rmmsOrgForm/* orgFromDto */._x)(NghiemThuFormPage_objectSpread(NghiemThuFormPage_objectSpread({}, dto), {}, {
    route: dto.route
  }));
  return NghiemThuFormPage_objectSpread(NghiemThuFormPage_objectSpread({
    code: asCopy ? '' : dto.code,
    status: dto.status,
    templateType: dto.templateType
  }, org), {}, {
    inspectedAt: dto.inspectedAt,
    kmFrom: dto.kmFrom == null ? '' : String(dto.kmFrom),
    kmTo: dto.kmTo == null ? '' : String(dto.kmTo),
    fieldInfo: (_dto$fieldInfo = dto.fieldInfo) !== null && _dto$fieldInfo !== void 0 ? _dto$fieldInfo : '',
    note: (_dto$note = dto.note) !== null && _dto$note !== void 0 ? _dto$note : '',
    mediaIds: (0,toConsumableArray/* default */.A)((_dto$mediaIds = dto.mediaIds) !== null && _dto$mediaIds !== void 0 ? _dto$mediaIds : []).slice(0, NGHIEM_THU_MEDIA_MAX),
    updatedAt: asCopy ? '' : (_dto$updatedAt = dto.updatedAt) !== null && _dto$updatedAt !== void 0 ? _dto$updatedAt : ''
  });
}
function parseOptionalNumber(raw) {
  var t = raw.trim();
  if (!t) return null;
  var n = Number(t);
  return Number.isNaN(n) ? null : n;
}
var NghiemThuFormPage = function NghiemThuFormPage() {
  var _useParams = (0,dist/* useParams */.g)(),
    id = _useParams.id;
  var _useLocation = (0,dist/* useLocation */.zy)(),
    pathname = _useLocation.pathname;
  var _useSearchParams = (0,react_router_dom_dist/* useSearchParams */.ok)(),
    _useSearchParams2 = (0,slicedToArray/* default */.A)(_useSearchParams, 1),
    searchParams = _useSearchParams2[0];
  var navigate = (0,navigateInAppPath/* useInAppNavigate */.lc)();
  var dispatch = (0,react_redux/* useDispatch */.wA)();
  var perms = (0,permissions/* nghiemThuListPermissions */.sW)();
  var copyFrom = searchParams.get('copyFrom');
  var modeParam = searchParams.get('mode');
  var mode = (0,external_react_.useMemo)(function () {
    var isCreatePath = pathname.endsWith('/new') || pathname.endsWith('/tao-moi') || !id || CREATE_SLUGS.has(id);
    if (isCreatePath) return copyFrom ? 'copy' : 'create';
    if (modeParam === 'edit') return 'edit';
    if (modeParam === 'copy') return 'copy';
    return 'view';
  }, [id, copyFrom, modeParam, pathname]);
  var readOnly = mode === 'view';
  var _useState = (0,external_react_.useState)(emptyForm),
    _useState2 = (0,slicedToArray/* default */.A)(_useState, 2),
    form = _useState2[0],
    setForm = _useState2[1];
  var _useState3 = (0,external_react_.useState)(null),
    _useState4 = (0,slicedToArray/* default */.A)(_useState3, 2),
    recordId = _useState4[0],
    setRecordId = _useState4[1];
  var _useState5 = (0,external_react_.useState)({}),
    _useState6 = (0,slicedToArray/* default */.A)(_useState5, 2),
    fieldErrors = _useState6[0],
    setFieldErrors = _useState6[1];
  var _useState7 = (0,external_react_.useState)(null),
    _useState8 = (0,slicedToArray/* default */.A)(_useState7, 2),
    error = _useState8[0],
    setError = _useState8[1];
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
  var _useState13 = (0,external_react_.useState)(responseModel/* FALLBACK_INIT_DATA */.Vd.statuses),
    _useState14 = (0,slicedToArray/* default */.A)(_useState13, 2),
    statuses = _useState14[0],
    setStatuses = _useState14[1];
  var _useState15 = (0,external_react_.useState)(responseModel/* FALLBACK_INIT_DATA */.Vd.templateTypes),
    _useState16 = (0,slicedToArray/* default */.A)(_useState15, 2),
    templateTypes = _useState16[0],
    setTemplateTypes = _useState16[1];
  var _useState17 = (0,external_react_.useState)([]),
    _useState18 = (0,slicedToArray/* default */.A)(_useState17, 2),
    mediaItems = _useState18[0],
    setMediaItems = _useState18[1];
  var mediaApi = (0,external_react_.useMemo)(function () {
    return createNghiemThuMediaUploadApi();
  }, []);
  (0,useShellPageTitle/* useShellPageTitle */.D)(MODE_TITLE[mode]);
  var _useFormLeaveGuard = (0,linm_web_common_components_dist/* useFormLeaveGuard */.Gjw)({
      isDirty: !readOnly && dirty,
      title: 'Bạn có dữ liệu chưa lưu',
      message: 'Tất cả thay đổi chưa được lưu sẽ bị mất. Bạn có chắc muốn rời khỏi trang này không?',
      stayLabel: 'Ở lại trang',
      leaveLabel: 'Rời khỏi trang',
      onBeforeLeave: function onBeforeLeave() {
        setDirty(false);
      }
    }),
    guardedNavigate = _useFormLeaveGuard.guardedNavigate,
    leaveConfirmModalProps = _useFormLeaveGuard.leaveConfirmModalProps;
  var goList = (0,external_react_.useCallback)(function () {
    guardedNavigate(function () {
      return navigate(LIST_PATH);
    });
  }, [guardedNavigate, navigate]);
  var patch = (0,external_react_.useCallback)(function (partial) {
    if (readOnly) return;
    setForm(function (prev) {
      return NghiemThuFormPage_objectSpread(NghiemThuFormPage_objectSpread({}, prev), partial);
    });
    setDirty(true);
    setFieldErrors(function (prev) {
      var next = NghiemThuFormPage_objectSpread({}, prev);
      Object.keys(partial).forEach(function (k) {
        delete next[k];
      });
      return next;
    });
  }, [readOnly]);
  (0,external_react_.useEffect)(function () {
    var cancelled = false;
    var boot = /*#__PURE__*/function () {
      var _ref = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee() {
        var _init$statuses, _init$templateTypes, init, _ref2, _init$statuses$0$valu, _init$statuses2, _FALLBACK_INIT_DATA$s, _ref3, _init$templateTypes$, _init$templateTypes2, _FALLBACK_INIT_DATA$t, sourceId, dto, next, msg, _t;
        return regenerator_default().wrap(function (_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              setLoading(true);
              setError(null);
              setFieldErrors({});
              setDirty(false);
              _context.prev = 1;
              _context.next = 2;
              return nghiemThuService/* nghiemThuService */.P.getInitData();
            case 2:
              init = _context.sent;
              if (!cancelled) {
                _context.next = 3;
                break;
              }
              return _context.abrupt("return");
            case 3:
              if ((_init$statuses = init.statuses) !== null && _init$statuses !== void 0 && _init$statuses.length) setStatuses(init.statuses);
              if ((_init$templateTypes = init.templateTypes) !== null && _init$templateTypes !== void 0 && _init$templateTypes.length) setTemplateTypes(init.templateTypes);
              if (!(mode === 'create')) {
                _context.next = 4;
                break;
              }
              setRecordId(null);
              setForm(NghiemThuFormPage_objectSpread(NghiemThuFormPage_objectSpread({}, emptyForm), {}, {
                code: '(tự sinh)',
                status: (_ref2 = (_init$statuses$0$valu = (_init$statuses2 = init.statuses) === null || _init$statuses2 === void 0 || (_init$statuses2 = _init$statuses2[0]) === null || _init$statuses2 === void 0 ? void 0 : _init$statuses2.value) !== null && _init$statuses$0$valu !== void 0 ? _init$statuses$0$valu : (_FALLBACK_INIT_DATA$s = responseModel/* FALLBACK_INIT_DATA */.Vd.statuses[0]) === null || _FALLBACK_INIT_DATA$s === void 0 ? void 0 : _FALLBACK_INIT_DATA$s.value) !== null && _ref2 !== void 0 ? _ref2 : '',
                templateType: (_ref3 = (_init$templateTypes$ = (_init$templateTypes2 = init.templateTypes) === null || _init$templateTypes2 === void 0 || (_init$templateTypes2 = _init$templateTypes2[0]) === null || _init$templateTypes2 === void 0 ? void 0 : _init$templateTypes2.value) !== null && _init$templateTypes$ !== void 0 ? _init$templateTypes$ : (_FALLBACK_INIT_DATA$t = responseModel/* FALLBACK_INIT_DATA */.Vd.templateTypes[0]) === null || _FALLBACK_INIT_DATA$t === void 0 ? void 0 : _FALLBACK_INIT_DATA$t.value) !== null && _ref3 !== void 0 ? _ref3 : '',
                inspectedAt: new Date().toISOString()
              }));
              setMediaItems([]);
              return _context.abrupt("return");
            case 4:
              sourceId = mode === 'copy' ? copyFrom !== null && copyFrom !== void 0 ? copyFrom : id : id;
              if (!(!sourceId || CREATE_SLUGS.has(sourceId))) {
                _context.next = 5;
                break;
              }
              navigate(LIST_PATH);
              return _context.abrupt("return");
            case 5:
              _context.next = 6;
              return nghiemThuService/* nghiemThuService */.P.getById(sourceId);
            case 6:
              dto = _context.sent;
              if (!cancelled) {
                _context.next = 7;
                break;
              }
              return _context.abrupt("return");
            case 7:
              next = fromDto(dto, mode === 'copy');
              setRecordId(mode === 'copy' ? null : dto.id);
              setForm(next);
              setMediaItems(uploadItemsFromMediaIds(next.mediaIds));
              _context.next = 9;
              break;
            case 8:
              _context.prev = 8;
              _t = _context["catch"](1);
              if (!cancelled) {
                msg = _t instanceof Error ? _t.message : 'Không tải được dữ liệu';
                setError(msg);
                (0,linm_web_common_components_dist/* dispatchAppToast */.tWi)(dispatch, {
                  message: msg,
                  type: 'error'
                });
                navigate(LIST_PATH);
              }
            case 9:
              _context.prev = 9;
              if (!cancelled) setLoading(false);
              return _context.finish(9);
            case 10:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[1, 8, 9, 10]]);
      }));
      return function boot() {
        return _ref.apply(this, arguments);
      };
    }();
    void boot();
    return function () {
      cancelled = true;
    };
  }, [mode, id, copyFrom, navigate, dispatch]);
  var onMediaChange = (0,external_react_.useCallback)(function (items) {
    if (readOnly) return;
    setDirty(true);
    setMediaItems(items);
    setForm(function (prev) {
      return NghiemThuFormPage_objectSpread(NghiemThuFormPage_objectSpread({}, prev), {}, {
        mediaIds: mediaIdsFromUploadItems(items)
      });
    });
  }, [readOnly]);
  var validate = (0,external_react_.useCallback)(function () {
    var next = {};
    if (!form.status) next.status = 'Bắt buộc chọn trạng thái';
    if (!form.templateType) next.templateType = 'Bắt buộc chọn mẫu';
    if (!(form.routeCode || '').trim()) next.routeCode = 'Bắt buộc chọn tuyến';
    if (!(form.assigneeCode || '').trim()) next.assigneeCode = 'Bắt buộc chọn cán bộ';
    if (!form.inspectedAt) next.inspectedAt = 'Bắt buộc nhập ngày nghiệm thu';
    if (!(form.fieldInfo || '').trim()) next.fieldInfo = 'Bắt buộc nhập thông tin hiện trường';
    if (form.kmFrom.trim() && Number.isNaN(Number(form.kmFrom))) {
      next.kmFrom = 'Km đầu phải là số';
    }
    if (form.kmTo.trim() && Number.isNaN(Number(form.kmTo))) {
      next.kmTo = 'Km cuối phải là số';
    }
    setFieldErrors(next);
    return Object.keys(next).length === 0;
  }, [form]);
  var handleSave = (0,external_react_.useCallback)(/*#__PURE__*/(0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee2() {
    var _org$zoneOrgCode, _org$vpOrgCode;
    var org, mediaIds, body, dto, msg, _t2;
    return regenerator_default().wrap(function (_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          if (!readOnly) {
            _context2.next = 1;
            break;
          }
          return _context2.abrupt("return");
        case 1:
          if (!((mode === 'create' || mode === 'copy') && !perms.canCreate)) {
            _context2.next = 2;
            break;
          }
          ;(0,linm_web_common_components_dist/* dispatchAppToast */.tWi)(dispatch, {
            message: 'Không có quyền thêm',
            type: 'warning'
          });
          return _context2.abrupt("return");
        case 2:
          if (!(mode === 'edit' && !perms.canUpdate)) {
            _context2.next = 3;
            break;
          }
          ;(0,linm_web_common_components_dist/* dispatchAppToast */.tWi)(dispatch, {
            message: 'Không có quyền sửa',
            type: 'warning'
          });
          return _context2.abrupt("return");
        case 3:
          if (validate()) {
            _context2.next = 4;
            break;
          }
          return _context2.abrupt("return");
        case 4:
          setSaving(true);
          setError(null);
          org = (0,rmmsOrgForm/* orgPersistPayload */.xr)(orgOf(form));
          mediaIds = mediaIdsFromUploadItems(mediaItems);
          body = {
            status: form.status,
            templateType: form.templateType,
            route: (form.routeCode || '').trim(),
            zoneOrgCode: (_org$zoneOrgCode = org.zoneOrgCode) !== null && _org$zoneOrgCode !== void 0 ? _org$zoneOrgCode : null,
            vpOrgCode: (_org$vpOrgCode = org.vpOrgCode) !== null && _org$vpOrgCode !== void 0 ? _org$vpOrgCode : null,
            assigneeCode: (form.assigneeCode || '').trim(),
            inspectedAt: form.inspectedAt.includes('T') ? form.inspectedAt : fromDateInput(toDateInput(form.inspectedAt)),
            kmFrom: parseOptionalNumber(form.kmFrom),
            kmTo: parseOptionalNumber(form.kmTo),
            fieldInfo: form.fieldInfo.trim(),
            note: form.note.trim() || null,
            mediaIds: mediaIds
          };
          _context2.prev = 5;
          if (!(mode === 'edit' && recordId)) {
            _context2.next = 7;
            break;
          }
          _context2.next = 6;
          return nghiemThuService/* nghiemThuService */.P.update(recordId, body);
        case 6:
          setDirty(false);
          (0,linm_web_common_components_dist/* dispatchAppToast */.tWi)(dispatch, {
            message: 'Đã lưu nghiệm thu',
            type: 'success'
          });
          navigate(LIST_PATH);
          _context2.next = 9;
          break;
        case 7:
          _context2.next = 8;
          return nghiemThuService/* nghiemThuService */.P.create(body);
        case 8:
          dto = _context2.sent;
          setDirty(false);
          (0,linm_web_common_components_dist/* dispatchAppToast */.tWi)(dispatch, {
            message: 'Đã tạo nghiệm thu',
            type: 'success'
          });
          navigate("".concat(LIST_PATH, "/").concat(dto.id), {
            replace: true
          });
        case 9:
          _context2.next = 11;
          break;
        case 10:
          _context2.prev = 10;
          _t2 = _context2["catch"](5);
          msg = _t2 instanceof Error ? _t2.message : 'Lưu thất bại';
          setError(msg);
          (0,linm_web_common_components_dist/* dispatchAppToast */.tWi)(dispatch, {
            message: msg,
            type: 'error'
          });
        case 11:
          _context2.prev = 11;
          setSaving(false);
          return _context2.finish(11);
        case 12:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[5, 10, 11, 12]]);
  })), [readOnly, mode, perms.canCreate, perms.canUpdate, validate, form, mediaItems, recordId, dispatch, navigate]);
  var statusSelectOptions = (0,external_react_.useMemo)(function () {
    return statuses.map(function (o) {
      return {
        value: o.value,
        label: o.label
      };
    });
  }, [statuses]);
  var templateSelectOptions = (0,external_react_.useMemo)(function () {
    return templateTypes.map(function (o) {
      return {
        value: o.value,
        label: o.label
      };
    });
  }, [templateTypes]);
  var rightActions = readOnly ? /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [perms.canUpdate && recordId ? (0,buildRmmsGenericToolbar/* rmmsFormActionButton */.Oo)({
      testId: "".concat(TEST_ID, "-btn-to-edit"),
      label: 'Sửa',
      icon: 'fas fa-pen',
      onClick: function onClick() {
        return navigate("".concat(LIST_PATH, "/").concat(encodeURIComponent(recordId), "?mode=edit"));
      }
    }) : null, perms.canCreate && recordId ? (0,buildRmmsGenericToolbar/* rmmsFormActionButton */.Oo)({
      testId: "".concat(TEST_ID, "-btn-to-copy"),
      label: 'Sao chép',
      icon: 'fas fa-copy',
      onClick: function onClick() {
        return navigate("".concat(LIST_PATH, "/new?copyFrom=").concat(encodeURIComponent(recordId)));
      }
    }) : null]
  }) : /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,buildRmmsGenericToolbar/* rmmsFormActionButton */.Oo)({
      testId: "".concat(TEST_ID, "-btn-cancel"),
      label: 'Hủy',
      icon: 'fas fa-times',
      onClick: goList
    }), (0,buildRmmsGenericToolbar/* rmmsFormActionButton */.Oo)({
      testId: "".concat(TEST_ID, "-btn-save"),
      label: saving ? 'Đang lưu…' : 'Lưu',
      icon: 'fas fa-save',
      variant: 'primary',
      onClick: function onClick() {
        return void handleSave();
      },
      loading: saving
    })]
  });
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: NghiemThuFormPage_NghiemThuFormPage_module.page,
    "data-testid": "".concat(TEST_ID, "-page"),
    children: [(0,buildRmmsGenericToolbar/* buildRmmsDetailToolbar */.aX)({
      testIdPrefix: TEST_ID,
      onBack: goList,
      right: rightActions
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: NghiemThuFormPage_NghiemThuFormPage_module.headingRow,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("h1", {
        className: NghiemThuFormPage_NghiemThuFormPage_module.heading,
        children: MODE_TITLE[mode]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        className: NghiemThuFormPage_NghiemThuFormPage_module.badge,
        children: modeBadge(mode)
      })]
    }), error ? /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: NghiemThuFormPage_NghiemThuFormPage_module.errorBanner,
      "data-testid": "".concat(TEST_ID, "-error"),
      children: error
    }) : null, loading ? /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      "data-testid": "".concat(TEST_ID, "-loading"),
      children: "\u0110ang t\u1EA3i\u2026"
    }) : /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: NghiemThuFormPage_NghiemThuFormPage_module.card,
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: NghiemThuFormPage_NghiemThuFormPage_module.fields,
        "data-form-cols": "5",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          "data-testid": "".concat(TEST_ID, "-field-code"),
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* Input */.pde, {
            label: "M\xE3 nghi\u1EC7m thu",
            value: form.code || (mode === 'create' || mode === 'copy' ? '(tự sinh)' : ''),
            readOnly: true,
            disabled: true,
            fullWidth: true,
            "data-testid": "".concat(TEST_ID, "-code")
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          "data-testid": "".concat(TEST_ID, "-field-status"),
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* Select */.l6P, {
            label: "Tr\u1EA1ng th\xE1i",
            value: form.status,
            options: statusSelectOptions,
            onChange: function onChange(e) {
              var _e$target$value;
              return patch({
                status: String((_e$target$value = e.target.value) !== null && _e$target$value !== void 0 ? _e$target$value : '')
              });
            },
            disabled: readOnly,
            fullWidth: true,
            "data-testid": "".concat(TEST_ID, "-status")
          }), fieldErrors.status ? /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: NghiemThuFormPage_NghiemThuFormPage_module.fieldError,
            children: fieldErrors.status
          }) : null]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          "data-testid": "".concat(TEST_ID, "-field-templateType"),
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* Select */.l6P, {
            label: "M\u1EABu nghi\u1EC7m thu",
            value: form.templateType,
            options: templateSelectOptions,
            onChange: function onChange(e) {
              var _e$target$value2;
              return patch({
                templateType: String((_e$target$value2 = e.target.value) !== null && _e$target$value2 !== void 0 ? _e$target$value2 : '')
              });
            },
            disabled: readOnly,
            fullWidth: true,
            "data-testid": "".concat(TEST_ID, "-templateType")
          }), fieldErrors.templateType ? /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: NghiemThuFormPage_NghiemThuFormPage_module.fieldError,
            children: fieldErrors.templateType
          }) : null]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(RmmsOrgFormFields/* RmmsOrgFormFields */.J, {
          testIdPrefix: TEST_ID,
          value: orgOf(form),
          disabled: readOnly,
          routeRequired: true,
          routeError: fieldErrors.routeCode,
          onChange: function onChange(next) {
            patch({
              zoneOrgCode: next.zoneOrgCode,
              zoneOrgName: next.zoneOrgName,
              vpOrgCode: next.vpOrgCode,
              vpOrgName: next.vpOrgName,
              assigneeCode: next.assigneeCode,
              assigneeName: next.assigneeName,
              routeCode: next.routeCode,
              routeName: next.routeName
            });
          }
        }), fieldErrors.assigneeCode ? /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: NghiemThuFormPage_NghiemThuFormPage_module.fieldError,
          "data-testid": "".concat(TEST_ID, "-assignee-error"),
          children: fieldErrors.assigneeCode
        }) : null, /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          "data-testid": "".concat(TEST_ID, "-field-inspectedAt"),
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* Input */.pde, {
            label: "Ng\xE0y nghi\u1EC7m thu",
            type: "date",
            required: true,
            value: toDateInput(form.inspectedAt),
            onChange: function onChange(e) {
              return patch({
                inspectedAt: fromDateInput(e.target.value)
              });
            },
            readOnly: readOnly,
            disabled: readOnly,
            fullWidth: true,
            "data-testid": "".concat(TEST_ID, "-inspectedAt")
          }), fieldErrors.inspectedAt ? /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: NghiemThuFormPage_NghiemThuFormPage_module.fieldError,
            children: fieldErrors.inspectedAt
          }) : null]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          "data-testid": "".concat(TEST_ID, "-field-kmFrom"),
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* Input */.pde, {
            label: "Km \u0111\u1EA7u",
            type: "number",
            value: form.kmFrom,
            onChange: function onChange(e) {
              return patch({
                kmFrom: e.target.value
              });
            },
            readOnly: readOnly,
            disabled: readOnly,
            fullWidth: true,
            "data-testid": "".concat(TEST_ID, "-kmFrom")
          }), fieldErrors.kmFrom ? /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: NghiemThuFormPage_NghiemThuFormPage_module.fieldError,
            children: fieldErrors.kmFrom
          }) : null]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          "data-testid": "".concat(TEST_ID, "-field-kmTo"),
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* Input */.pde, {
            label: "Km cu\u1ED1i",
            type: "number",
            value: form.kmTo,
            onChange: function onChange(e) {
              return patch({
                kmTo: e.target.value
              });
            },
            readOnly: readOnly,
            disabled: readOnly,
            fullWidth: true,
            "data-testid": "".concat(TEST_ID, "-kmTo")
          }), fieldErrors.kmTo ? /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: NghiemThuFormPage_NghiemThuFormPage_module.fieldError,
            children: fieldErrors.kmTo
          }) : null]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: NghiemThuFormPage_NghiemThuFormPage_module.span2,
          "data-testid": "".concat(TEST_ID, "-field-fieldInfo"),
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* Input */.pde, {
            label: "Th\xF4ng tin hi\u1EC7n tr\u01B0\u1EDDng",
            value: form.fieldInfo,
            onChange: function onChange(e) {
              return patch({
                fieldInfo: e.target.value
              });
            },
            readOnly: readOnly,
            disabled: readOnly,
            required: true,
            fullWidth: true,
            "data-testid": "".concat(TEST_ID, "-fieldInfo")
          }), fieldErrors.fieldInfo ? /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: NghiemThuFormPage_NghiemThuFormPage_module.fieldError,
            children: fieldErrors.fieldInfo
          }) : null]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: NghiemThuFormPage_NghiemThuFormPage_module.span2,
          "data-testid": "".concat(TEST_ID, "-field-note"),
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* Input */.pde, {
            label: "Ghi ch\xFA",
            value: form.note,
            onChange: function onChange(e) {
              return patch({
                note: e.target.value
              });
            },
            readOnly: readOnly,
            disabled: readOnly,
            fullWidth: true,
            "data-testid": "".concat(TEST_ID, "-note")
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          "data-testid": "".concat(TEST_ID, "-field-updatedAt"),
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* Input */.pde, {
            label: "C\u1EADp nh\u1EADt",
            value: form.updatedAt ? formatDateTime(form.updatedAt) : '—',
            readOnly: true,
            disabled: true,
            fullWidth: true,
            "data-testid": "".concat(TEST_ID, "-updatedAt")
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: NghiemThuFormPage_NghiemThuFormPage_module.spanFull,
          "data-zone": "upload",
          "data-testid": "".concat(TEST_ID, "-upload"),
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* LinImageUpload */.oHE, {
            purpose: "nghiem-thu-media",
            product: "rmms",
            entityType: "nghiem_thu",
            entityId: recordId !== null && recordId !== void 0 ? recordId : undefined,
            items: mediaItems,
            onChange: onMediaChange,
            maxFiles: NGHIEM_THU_MEDIA_MAX,
            maxBytes: NGHIEM_THU_VIDEO_MAX_BYTES,
            accept: NGHIEM_THU_MEDIA_ACCEPT,
            disabled: readOnly,
            confirmRemove: mode === 'edit',
            labels: NGHIEM_THU_MEDIA_LABELS,
            client: mediaApi,
            testId: "".concat(TEST_ID, "-field-mediaIds")
          })
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* LeaveConfirmModal */.N24, NghiemThuFormPage_objectSpread({}, leaveConfirmModalProps))]
  });
};
/* harmony default export */ const NghiemThuFormPage_NghiemThuFormPage = (NghiemThuFormPage);
;// ./src/pages/NghiemThuFormPage/index.ts


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

/***/ 8978
(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.page___wwQsc {
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

.headingRow___QwjFy {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.heading___Gqwv1 {
  margin: 0;
  font-size: 22px;
  font-weight: 700;
  line-height: 1.3;
}

.badge___JPMNN {
  display: inline-flex;
  align-items: center;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
  background: #e7f1ff;
  color: #0b5ed7;
}

.errorBanner___Sn3Qa {
  padding: 8px 16px;
  border-radius: 4px;
  background: #fef2f2;
  color: #b91c1c;
  font-size: 13px;
}

.card___jaoFs {
  background: #fff;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  padding: 16px;
}

.fields___G67ja {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 16px;
  align-items: start;
}

.span2___I7j2Z {
  grid-column: span 2;
}

.spanFull___Jh2WA {
  grid-column: 1 / -1;
}

.fieldError___wtIGU {
  margin-top: 4px;
  font-size: 12px;
  color: #dc3545;
}

@media (max-width: 1024px) {
  .fields___G67ja {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .fields___G67ja {
    grid-template-columns: 1fr;
  }

  .span2___I7j2Z {
    grid-column: 1 / -1;
  }
}
`, "",{"version":3,"sources":["webpack://./src/pages/NghiemThuFormPage/NghiemThuFormPage.module.css"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,aAAa;EACb,mBAAmB;EACnB,cAAc;EACd,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,eAAe;AACjB;;AAEA;EACE,SAAS;EACT,eAAe;EACf,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,oBAAoB;EACpB,mBAAmB;EACnB,gBAAgB;EAChB,kBAAkB;EAClB,eAAe;EACf,gBAAgB;EAChB,mBAAmB;EACnB,cAAc;AAChB;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,mBAAmB;EACnB,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,gBAAgB;EAChB,yBAAyB;EACzB,kBAAkB;EAClB,aAAa;AACf;;AAEA;EACE,aAAa;EACb,gDAAgD;EAChD,SAAS;EACT,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,eAAe;EACf,cAAc;AAChB;;AAEA;EACE;IACE,gDAAgD;EAClD;AACF;;AAEA;EACE;IACE,0BAA0B;EAC5B;;EAEA;IACE,mBAAmB;EACrB;AACF","sourcesContent":[".page {\n  height: 100%;\n  min-height: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  padding: 16px;\n  background: #f5f7fa;\n  color: #1a1a1a;\n  overflow: auto;\n}\n\n.headingRow {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n\n.heading {\n  margin: 0;\n  font-size: 22px;\n  font-weight: 700;\n  line-height: 1.3;\n}\n\n.badge {\n  display: inline-flex;\n  align-items: center;\n  padding: 2px 8px;\n  border-radius: 4px;\n  font-size: 12px;\n  font-weight: 600;\n  background: #e7f1ff;\n  color: #0b5ed7;\n}\n\n.errorBanner {\n  padding: 8px 16px;\n  border-radius: 4px;\n  background: #fef2f2;\n  color: #b91c1c;\n  font-size: 13px;\n}\n\n.card {\n  background: #fff;\n  border: 1px solid #e9ecef;\n  border-radius: 8px;\n  padding: 16px;\n}\n\n.fields {\n  display: grid;\n  grid-template-columns: repeat(5, minmax(0, 1fr));\n  gap: 16px;\n  align-items: start;\n}\n\n.span2 {\n  grid-column: span 2;\n}\n\n.spanFull {\n  grid-column: 1 / -1;\n}\n\n.fieldError {\n  margin-top: 4px;\n  font-size: 12px;\n  color: #dc3545;\n}\n\n@media (max-width: 1024px) {\n  .fields {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n}\n\n@media (max-width: 640px) {\n  .fields {\n    grid-template-columns: 1fr;\n  }\n\n  .span2 {\n    grid-column: 1 / -1;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"page": `page___wwQsc`,
	"headingRow": `headingRow___QwjFy`,
	"heading": `heading___Gqwv1`,
	"badge": `badge___JPMNN`,
	"errorBanner": `errorBanner___Sn3Qa`,
	"card": `card___jaoFs`,
	"fields": `fields___G67ja`,
	"span2": `span2___I7j2Z`,
	"spanFull": `spanFull___Jh2WA`,
	"fieldError": `fieldError___wtIGU`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);

/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ }

}]);
//# sourceMappingURL=nghiem-thu-form-page.97e0c786.linm-rmms-field.js.map