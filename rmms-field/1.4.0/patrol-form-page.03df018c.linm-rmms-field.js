"use strict";
(self["webpackChunkrmms_field"] = self["webpackChunkrmms_field"] || []).push([[576],{

/***/ 9656
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ PatrolFormPage_PatrolFormPage)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(467);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__(296);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js + 2 modules
var defineProperty = __webpack_require__(4980);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__(5458);
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
// EXTERNAL MODULE: ./src/components/GiaoViecModal/index.ts + 6 modules
var GiaoViecModal = __webpack_require__(3367);
// EXTERNAL MODULE: ./src/components/TaskChatPanel/TaskChatPanel.tsx + 1 modules
var TaskChatPanel = __webpack_require__(4732);
// EXTERNAL MODULE: ./src/router/navigateInAppPath.ts
var navigateInAppPath = __webpack_require__(2381);
// EXTERNAL MODULE: ./src/utils/platformTaskPrereq.ts
var platformTaskPrereq = __webpack_require__(2700);
// EXTERNAL MODULE: ./src/utils/taskPriorityPrefill.ts
var taskPriorityPrefill = __webpack_require__(4106);
// EXTERNAL MODULE: ./src/services/patrol/patrolService.ts + 1 modules
var patrolService = __webpack_require__(3880);
// EXTERNAL MODULE: ./src/services/patrol/permissions.ts
var permissions = __webpack_require__(7031);
;// ./src/services/patrol/mediaUpload.ts


function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
;
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,defineProperty/* default */.A)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/** Patrol FileMulti helpers — FileService guid[] · MIME FE enforce. */

;
var PATROL_MEDIA_MAX = 10;
var PATROL_IMAGE_MAX_BYTES = 10 * 1024 * 1024;
var PATROL_VIDEO_MAX_BYTES = 50 * 1024 * 1024;

/** jpeg|png|webp + mp4|webm — LinImageUpload accept list. */
var PATROL_MEDIA_ACCEPT = 'image/jpeg,image/png,image/webp,video/mp4,video/webm,.jpg,.jpeg,.png,.webp,.mp4,.webm';
var PATROL_MEDIA_LABELS = {
  dropTitle: 'Kéo thả ảnh / video hiện trường',
  dropHint: 'JPEG/PNG/WebP ≤10MB · MP4/WebM ≤50MB · tối đa {max} tệp (≤{maxMb}MB/video)',
  retry: 'Thử lại',
  remove: 'Xóa',
  extError: '«{name}» không đúng định dạng (jpeg/png/webp/mp4/webm).',
  sizeError: '«{name}» vượt quá {maxMb}MB.',
  maxError: 'Tối đa {max} tệp / phiên.',
  minError: 'Cần tối thiểu {min} tệp.',
  uploading: 'Đang tải…',
  failed: 'Tải thất bại',
  preview: 'Xem',
  committedTitle: 'Đã gắn phiên',
  uploadTitle: 'Ảnh / video hiện trường',
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
  removeConfirmMessage: 'Tệp sẽ bị gỡ khỏi phiên (không xóa FileService).',
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

/** Wrap FileService client — image ≤10MB · video ≤50MB (BE count only). */
function createPatrolMediaUploadApi() {
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
              if (!(img && body.sizeBytes > PATROL_IMAGE_MAX_BYTES)) {
                _context.next = 2;
                break;
              }
              err = new Error('FILE_TOO_LARGE');
              err.errorCode = 'FILE_TOO_LARGE';
              err.status = 413;
              throw err;
            case 2:
              if (!(vid && body.sizeBytes > PATROL_VIDEO_MAX_BYTES)) {
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

/** Persist guids only — staged uploadId or committed attachmentId. */
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
      if (ids.length >= PATROL_MEDIA_MAX) break;
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
  return ids.slice(0, PATROL_MEDIA_MAX).map(function (id, index) {
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
// EXTERNAL MODULE: ./src/services/patrol/lookups.ts
var lookups = __webpack_require__(5816);
// EXTERNAL MODULE: ./src/filters/RmmsOrgFormFields.tsx + 1 modules
var RmmsOrgFormFields = __webpack_require__(5538);
// EXTERNAL MODULE: ./src/filters/rmmsOrgForm.ts
var rmmsOrgForm = __webpack_require__(1704);
// EXTERNAL MODULE: ./src/demo/patrolStore.ts
var patrolStore = __webpack_require__(4968);
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./src/pages/PatrolFormPage/PatrolFormPage.module.css
var PatrolFormPage_module = __webpack_require__(6978);
;// ./src/pages/PatrolFormPage/PatrolFormPage.module.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(PatrolFormPage_module/* default */.A, options);




       /* harmony default export */ const PatrolFormPage_PatrolFormPage_module = (PatrolFormPage_module/* default */.A && PatrolFormPage_module/* default */.A.locals ? PatrolFormPage_module/* default */.A.locals : undefined);

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
;// ./src/pages/PatrolFormPage/PatrolFormPage.tsx





function PatrolFormPage_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function PatrolFormPage_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? PatrolFormPage_ownKeys(Object(t), !0).forEach(function (r) { (0,defineProperty/* default */.A)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : PatrolFormPage_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
;


















var REQUIRED = ['userName', 'route', 'patrolType', 'plannedDate', 'checkInCount', 'status'];
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
var TEST_ID = 'rmms-patrol-form';
var PAGE_ID = 'patrol-form';
var MODE_TITLE = {
  create: 'Tạo mới phiên tuần',
  edit: 'Sửa phiên tuần',
  view: 'Xem phiên tuần',
  copy: 'Sao chép phiên tuần'
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
  if (!local) return '';
  var d = new Date(local);
  return Number.isNaN(d.getTime()) ? '' : d.toISOString();
}
function fromDto(dto, asCopy) {
  var _dto$mediaIds, _dto$assigneeOrgName, _dto$startedAt, _dto$note, _dto$updatedAt;
  var mediaIds = (0,toConsumableArray/* default */.A)((_dto$mediaIds = dto.mediaIds) !== null && _dto$mediaIds !== void 0 ? _dto$mediaIds : []).slice(0, PATROL_MEDIA_MAX);
  return PatrolFormPage_objectSpread(PatrolFormPage_objectSpread({
    code: asCopy ? (0,patrolStore/* genCode */.u8)((0,patrolStore/* loadRows */.kh)()) : dto.code,
    userName: dto.userName,
    route: dto.route
  }, (0,rmmsOrgForm/* orgFromDto */._x)(PatrolFormPage_objectSpread(PatrolFormPage_objectSpread({}, dto), {}, {
    route: dto.route
  }))), {}, {
    assigneeOrgName: (_dto$assigneeOrgName = dto.assigneeOrgName) !== null && _dto$assigneeOrgName !== void 0 ? _dto$assigneeOrgName : '',
    patrolType: dto.patrolType,
    plannedDate: (dto.plannedDate || '').slice(0, 10),
    startedAt: (_dto$startedAt = dto.startedAt) !== null && _dto$startedAt !== void 0 ? _dto$startedAt : '',
    checkInCount: dto.checkInCount,
    coveragePercent: dto.coveragePercent,
    status: dto.status,
    offlineQueued: dto.offlineQueued,
    note: (_dto$note = dto.note) !== null && _dto$note !== void 0 ? _dto$note : '',
    mediaIds: mediaIds,
    updatedAt: (_dto$updatedAt = dto.updatedAt) !== null && _dto$updatedAt !== void 0 ? _dto$updatedAt : '',
    isActive: dto.isActive !== false
  });
}
function formatDate(iso) {
  if (!iso) return '—';
  try {
    var d = new Date(iso.length === 10 ? "".concat(iso, "T00:00:00") : iso);
    return d.toLocaleString('vi-VN');
  } catch (_unused) {
    return iso;
  }
}
var CREATE_SLUGS = new Set(['new', 'tao-moi']);
var PatrolFormPage = function PatrolFormPage() {
  var _useParams = (0,dist/* useParams */.g)(),
    id = _useParams.id;
  var _useLocation = (0,dist/* useLocation */.zy)(),
    pathname = _useLocation.pathname;
  var _useSearchParams = (0,react_router_dom_dist/* useSearchParams */.ok)(),
    _useSearchParams2 = (0,slicedToArray/* default */.A)(_useSearchParams, 1),
    searchParams = _useSearchParams2[0];
  var navigate = (0,navigateInAppPath/* useInAppNavigate */.lc)();
  var perms = (0,permissions/* patrolListPermissions */.TR)();
  var copyFrom = searchParams.get('copyFrom');
  var modeParam = searchParams.get('mode');
  var mode = (0,external_react_.useMemo)(function () {
    var isCreatePath = pathname.endsWith('/tao-moi') || !id || CREATE_SLUGS.has(id);
    if (isCreatePath) return copyFrom ? 'copy' : 'create';
    if (modeParam === 'edit') return 'edit';
    if (modeParam === 'copy') return 'copy';
    return 'view';
  }, [id, copyFrom, modeParam, pathname]);
  var isView = mode === 'view';
  var _useState = (0,external_react_.useState)(PatrolFormPage_objectSpread({}, patrolStore/* EMPTY_FORM */.z3)),
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
  var _useState13 = (0,external_react_.useState)(false),
    _useState14 = (0,slicedToArray/* default */.A)(_useState13, 2),
    giaoViecOpen = _useState14[0],
    setGiaoViecOpen = _useState14[1];
  var _useState15 = (0,external_react_.useState)(null),
    _useState16 = (0,slicedToArray/* default */.A)(_useState15, 2),
    giaoViecContext = _useState16[0],
    setGiaoViecContext = _useState16[1];
  var _useState17 = (0,external_react_.useState)(null),
    _useState18 = (0,slicedToArray/* default */.A)(_useState17, 2),
    chatTarget = _useState18[0],
    setChatTarget = _useState18[1];
  var toast = (0,linm_web_common_components_dist/* useAppToast */.Sf6)();
  var platformReady = (0,platformTaskPrereq/* isPlatformTaskIntegrationReady */.Y)();
  var _useState19 = (0,external_react_.useState)([]),
    _useState20 = (0,slicedToArray/* default */.A)(_useState19, 2),
    mediaItems = _useState20[0],
    setMediaItems = _useState20[1];
  var mediaApi = (0,external_react_.useMemo)(function () {
    return createPatrolMediaUploadApi();
  }, []);
  (0,external_react_.useEffect)(function () {
    var cancelled = false;
    var boot = /*#__PURE__*/function () {
      var _ref = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee() {
        var sourceId, dto, next, _t;
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
              setForm(PatrolFormPage_objectSpread(PatrolFormPage_objectSpread({}, patrolStore/* EMPTY_FORM */.z3), {}, {
                code: '(tự sinh)',
                plannedDate: new Date().toISOString().slice(0, 10),
                startedAt: new Date().toISOString(),
                updatedAt: '',
                mediaIds: []
              }));
              setMediaItems([]);
              return _context.abrupt("return");
            case 2:
              sourceId = mode === 'copy' ? copyFrom !== null && copyFrom !== void 0 ? copyFrom : id : id;
              if (sourceId) {
                _context.next = 3;
                break;
              }
              navigate('/td-tk');
              return _context.abrupt("return");
            case 3:
              _context.next = 4;
              return patrolService/* patrolService */.W.getById(sourceId);
            case 4:
              dto = _context.sent;
              if (!cancelled) {
                _context.next = 5;
                break;
              }
              return _context.abrupt("return");
            case 5:
              setCurrentId(mode === 'copy' ? null : dto.id);
              next = fromDto(dto, mode === 'copy');
              setForm(next);
              // Copy clones guid[] (share FileService refs · no re-upload).
              setMediaItems(uploadItemsFromMediaIds(next.mediaIds));
              _context.next = 7;
              break;
            case 6:
              _context.prev = 6;
              _t = _context["catch"](1);
              if (!cancelled) navigate('/td-tk');
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
  }, [mode, id, copyFrom, navigate]);
  var onMediaChange = function onMediaChange(items) {
    if (isView) return;
    setDirty(true);
    setMediaItems(items);
    setForm(function (prev) {
      return PatrolFormPage_objectSpread(PatrolFormPage_objectSpread({}, prev), {}, {
        mediaIds: mediaIdsFromUploadItems(items)
      });
    });
  };
  var updateField = function updateField(key, value) {
    if (isView) return;
    setDirty(true);
    setForm(function (prev) {
      return PatrolFormPage_objectSpread(PatrolFormPage_objectSpread({}, prev), {}, (0,defineProperty/* default */.A)({}, key, value));
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
    navigate('/td-tk');
  };
  var validate = function validate(snapshot) {
    var bad = new Set();
    REQUIRED.forEach(function (key) {
      var val = snapshot[key];
      if (val === '' || val == null || typeof val === 'string' && !val.trim()) {
        bad.add(key);
      }
    });
    if (Number.isNaN(Number(snapshot.checkInCount)) || snapshot.checkInCount < 0) {
      bad.add('checkInCount');
    }
    if (Number.isNaN(Number(snapshot.coveragePercent)) || snapshot.coveragePercent < 0 || snapshot.coveragePercent > 100) {
      bad.add('coveragePercent');
    }
    setInvalid(bad);
    setShowBanner(bad.size > 0);
    return bad.size === 0;
  };
  var handleSave = /*#__PURE__*/function () {
    var _ref2 = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee2() {
      var mediaIds, payload;
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
            if (validate(form)) {
              _context2.next = 4;
              break;
            }
            return _context2.abrupt("return");
          case 4:
            setSaving(true);
            _context2.prev = 5;
            mediaIds = mediaIdsFromUploadItems(mediaItems);
            payload = PatrolFormPage_objectSpread(PatrolFormPage_objectSpread({
              userName: form.userName.trim(),
              route: (form.routeCode || form.route).trim()
            }, (0,rmmsOrgForm/* orgPersistPayload */.xr)(orgOf(form))), {}, {
              patrolType: form.patrolType,
              plannedDate: form.plannedDate,
              startedAt: form.startedAt || null,
              checkInCount: Number(form.checkInCount),
              coveragePercent: Number(form.coveragePercent),
              status: form.status,
              offlineQueued: form.offlineQueued,
              note: form.note,
              mediaIds: mediaIds
            });
            if (!(mode === 'edit' && currentId)) {
              _context2.next = 7;
              break;
            }
            _context2.next = 6;
            return patrolService/* patrolService */.W.update(currentId, payload);
          case 6:
            _context2.next = 8;
            break;
          case 7:
            _context2.next = 8;
            return patrolService/* patrolService */.W.create(payload);
          case 8:
            setDirty(false);
            navigate('/td-tk');
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
    return function handleSave() {
      return _ref2.apply(this, arguments);
    };
  }();
  var fieldClass = function fieldClass(key) {
    return [PatrolFormPage_PatrolFormPage_module.field, invalid.has(key) ? PatrolFormPage_PatrolFormPage_module.fieldInvalid : ''].filter(Boolean).join(' ');
  };
  var toolbar = (0,buildRmmsGenericToolbar/* buildRmmsDetailToolbar */.aX)({
    testIdPrefix: TEST_ID,
    onBack: goList,
    right: /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [isView && currentId && perms.canUpdate ? (0,buildRmmsGenericToolbar/* rmmsFormActionButton */.Oo)({
        testId: "".concat(TEST_ID, "-btn-to-edit"),
        label: 'Sửa',
        icon: 'fas fa-pen',
        onClick: function onClick() {
          return navigate("/td-tk/".concat(encodeURIComponent(currentId), "?mode=edit"));
        }
      }) : null, isView && currentId && perms.canCreate ? (0,buildRmmsGenericToolbar/* rmmsFormActionButton */.Oo)({
        testId: "".concat(TEST_ID, "-btn-to-copy"),
        label: 'Sao chép',
        icon: 'fas fa-copy',
        onClick: function onClick() {
          return navigate("/td-tk/tao-moi?copyFrom=".concat(encodeURIComponent(currentId)));
        }
      }) : null, !isView ? (0,buildRmmsGenericToolbar/* rmmsFormActionButton */.Oo)({
        testId: "".concat(TEST_ID, "-btn-cancel"),
        label: 'Hủy',
        icon: 'fas fa-times',
        onClick: goList
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
  var openGiaoViec = function openGiaoViec() {
    if (!platformReady) return;
    if (!currentId) return;
    var routeLabel = (0,lookups/* lookupRoadRouteLabel */.EZ)(lookups/* ROAD_ROUTE_SEED */.FJ, form.route) || form.route || 'Tuần tra';
    var prefill = (0,taskPriorityPrefill/* patrolSessionPrefill */.dD)(routeLabel);
    setGiaoViecContext({
      source: 'patrol',
      sourceEntityType: 'patrol_session',
      sourceEntityId: currentId,
      sessionCode: form.code,
      route: routeLabel,
      title: prefill.title,
      description: form.note ? "T\u1EEB phi\xEAn tu\u1EA7n tra: ".concat(form.note) : 'Từ kết ca tuần đường',
      priority: prefill.priority,
      assignmentStrategy: 'pool',
      dueDate: prefill.dueDate
    });
    setGiaoViecOpen(true);
  };
  var viewBody = /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: PatrolFormPage_PatrolFormPage_module.contextStrip,
      "data-des-id": "DES-RTI-PATROL-FOOTER",
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("strong", {
          children: "M\xE3 ca:"
        }), " ", form.code || '—']
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("strong", {
          children: "Tuy\u1EBFn:"
        }), ' ', (0,lookups/* lookupRoadRouteLabel */.EZ)(lookups/* ROAD_ROUTE_SEED */.FJ, form.route) || form.route || '—']
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("dl", {
      className: PatrolFormPage_PatrolFormPage_module.viewGrid,
      "data-form-cols": "5",
      "data-testid": "".concat(TEST_ID, "-view"),
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("dt", {
          children: "M\xE3 phi\xEAn tu\u1EA7n"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("dd", {
          children: form.code || '—'
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("dt", {
          children: "Tr\u1EA1ng th\xE1i"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("dd", {
          children: (0,lookups/* lookupLabel */.ZX)(lookups/* STATUS_LOOKUP */.cG, form.status)
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: PatrolFormPage_PatrolFormPage_module.span2,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("dt", {
          children: "Nh\xE2n vi\xEAn"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("dd", {
          children: form.userName || '—'
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("dt", {
          children: "Tuy\u1EBFn \u0111\u01B0\u1EDDng"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("dd", {
          children: (0,lookups/* lookupRoadRouteLabel */.EZ)(lookups/* ROAD_ROUTE_SEED */.FJ, form.route) || form.route || '—'
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("dt", {
          children: "Lo\u1EA1i tu\u1EA7n"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("dd", {
          children: (0,lookups/* lookupLabel */.ZX)(lookups/* TYPE_LOOKUP */._E, form.patrolType)
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("dt", {
          children: "Ng\xE0y k\u1EBF ho\u1EA1ch"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("dd", {
          children: form.plannedDate ? formatDate(form.plannedDate) : '—'
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("dt", {
          children: "B\u1EAFt \u0111\u1EA7u th\u1EF1c t\u1EBF"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("dd", {
          children: form.startedAt ? formatDate(form.startedAt) : '—'
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("dt", {
          children: "S\u1ED1 \u0111i\u1EC3m check-in"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("dd", {
          children: form.checkInCount
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("dt", {
          children: "Coverage %"
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("dd", {
          children: [Number(form.coveragePercent).toFixed(1), "%"]
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("dt", {
          children: "H\xE0ng \u0111\u1EE3i offline"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("dd", {
          children: form.offlineQueued ? 'Offline queue' : 'Online'
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: PatrolFormPage_PatrolFormPage_module.span2,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("dt", {
          children: "Ghi ch\xFA"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("dd", {
          children: form.note || '—'
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("section", {
      className: PatrolFormPage_PatrolFormPage_module.mediaGallery,
      "data-zone": "media-gallery",
      "data-testid": "".concat(TEST_ID, "-media-gallery"),
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("h3", {
        className: PatrolFormPage_PatrolFormPage_module.sectionTitle,
        children: "\u1EA2nh / video hi\u1EC7n tr\u01B0\u1EDDng"
      }), mediaItems.length === 0 ? /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
        className: PatrolFormPage_PatrolFormPage_module.mediaEmpty,
        "data-testid": "".concat(TEST_ID, "-media-empty"),
        children: "Ch\u01B0a c\xF3 t\u1EC7p \u0111\xEDnh k\xE8m."
      }) : /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* LinImageUpload */.oHE, {
        purpose: "patrol-session-media",
        product: "rmms",
        entityType: "patrol_session",
        entityId: currentId !== null && currentId !== void 0 ? currentId : undefined,
        items: mediaItems,
        onChange: function onChange() {
          return undefined;
        },
        maxFiles: PATROL_MEDIA_MAX,
        maxBytes: PATROL_VIDEO_MAX_BYTES,
        accept: PATROL_MEDIA_ACCEPT,
        disabled: true,
        allowRename: false,
        labels: PATROL_MEDIA_LABELS,
        client: mediaApi,
        testId: "".concat(TEST_ID, "-media-view")
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: PatrolFormPage_PatrolFormPage_module.patrolFooter,
      "data-des-id": "DES-RTI-PATROL-FOOTER",
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(linm_web_common_components_dist/* Button */.$nd, {
        variant: "primary",
        onClick: function onClick() {
          return toast.info('«Kết ca» giữ nguyên flow supervise — không gộp create task.');
        },
        "data-testid": "".concat(TEST_ID, "-btn-ket-ca"),
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("i", {
          className: "fas fa-flag-checkered"
        }), " K\u1EBFt ca"]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(linm_web_common_components_dist/* Button */.$nd, {
        variant: "secondary",
        disabled: !platformReady,
        title: platformReady ? undefined : (0,platformTaskPrereq/* platformTaskPrereqTooltip */.T)(),
        onClick: openGiaoViec,
        "data-testid": "".concat(TEST_ID, "-btn-giao-viec"),
        "data-des-id": "DES-RTI-PREREQ",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("i", {
          className: "fas fa-tasks"
        }), " Giao vi\u1EC7c"]
      })]
    })]
  });
  var editBody = /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: PatrolFormPage_PatrolFormPage_module.z2,
    "data-form-cols": "5",
    "data-testid": "".concat(TEST_ID, "-z2"),
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("section", {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("h3", {
        className: PatrolFormPage_PatrolFormPage_module.sectionTitle,
        children: "Th\xF4ng tin phi\xEAn tu\u1EA7n"
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: PatrolFormPage_PatrolFormPage_module.fields,
        "data-form-cols": "5",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: fieldClass('code'),
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* Input */.pde, {
            label: "M\xE3 phi\xEAn tu\u1EA7n",
            value: form.code,
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
            config: lookups/* STATUS_LOOKUP_CONFIG */.rV,
            value: form.status,
            primaryDisplay: (0,lookups/* lookupLabel */.ZX)(lookups/* STATUS_LOOKUP */.cG, form.status),
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
          className: "".concat(fieldClass('userName'), " ").concat(PatrolFormPage_PatrolFormPage_module.span2),
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* Input */.pde, {
            label: "Nh\xE2n vi\xEAn",
            required: true,
            value: form.userName,
            onChange: function onChange(e) {
              return updateField('userName', e.target.value);
            },
            fullWidth: true,
            error: invalid.has('userName') ? 'Bắt buộc' : undefined,
            "data-testid": "".concat(TEST_ID, "-field-userName")
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(RmmsOrgFormFields/* RmmsOrgFormFields */.J, {
          testIdPrefix: TEST_ID,
          value: orgOf(form),
          disabled: isView,
          routeError: invalid.has('route') ? 'Bắt buộc' : undefined,
          onChange: function onChange(next) {
            setForm(function (f) {
              return PatrolFormPage_objectSpread(PatrolFormPage_objectSpread({}, f), {}, {
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
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: fieldClass('patrolType'),
          "data-testid": "".concat(TEST_ID, "-field-patrolType"),
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* SearchInput */.DOo, {
            label: "Lo\u1EA1i tu\u1EA7n",
            required: true,
            config: lookups/* TYPE_LOOKUP_CONFIG */.JZ,
            value: form.patrolType,
            primaryDisplay: (0,lookups/* lookupLabel */.ZX)(lookups/* TYPE_LOOKUP */._E, form.patrolType),
            showSecondaryInput: false,
            onChange: function onChange(item) {
              return updateField('patrolType', item.value);
            },
            onClear: function onClear() {
              return updateField('patrolType', '');
            },
            error: invalid.has('patrolType') ? 'Bắt buộc' : undefined
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: fieldClass('plannedDate'),
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* Input */.pde, {
            label: "Ng\xE0y k\u1EBF ho\u1EA1ch",
            required: true,
            type: "date",
            value: form.plannedDate,
            onChange: function onChange(e) {
              return updateField('plannedDate', e.target.value);
            },
            fullWidth: true,
            error: invalid.has('plannedDate') ? 'Bắt buộc' : undefined,
            "data-testid": "".concat(TEST_ID, "-field-plannedDate")
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: PatrolFormPage_PatrolFormPage_module.field,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* Input */.pde, {
            label: "B\u1EAFt \u0111\u1EA7u th\u1EF1c t\u1EBF",
            type: "datetime-local",
            value: toLocalInput(form.startedAt),
            onChange: function onChange(e) {
              return updateField('startedAt', fromLocalInput(e.target.value));
            },
            fullWidth: true,
            "data-testid": "".concat(TEST_ID, "-field-startedAt")
          })
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("section", {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("h3", {
        className: PatrolFormPage_PatrolFormPage_module.sectionTitle,
        children: "KPI / offline"
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: PatrolFormPage_PatrolFormPage_module.fields,
        "data-form-cols": "5",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: fieldClass('checkInCount'),
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* Input */.pde, {
            label: "S\u1ED1 \u0111i\u1EC3m check-in",
            required: true,
            type: "number",
            min: 0,
            value: form.checkInCount,
            onChange: function onChange(e) {
              return updateField('checkInCount', e.target.value === '' ? 0 : Number(e.target.value));
            },
            fullWidth: true,
            error: invalid.has('checkInCount') ? 'Bắt buộc ≥ 0' : undefined,
            "data-testid": "".concat(TEST_ID, "-field-checkInCount")
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: fieldClass('coveragePercent'),
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* Input */.pde, {
            label: "Coverage %",
            type: "number",
            min: 0,
            max: 100,
            step: "0.1",
            value: form.coveragePercent,
            onChange: function onChange(e) {
              return updateField('coveragePercent', e.target.value === '' ? 0 : Number(e.target.value));
            },
            fullWidth: true,
            error: invalid.has('coveragePercent') ? '0–100' : undefined,
            "data-testid": "".concat(TEST_ID, "-field-coveragePercent")
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: fieldClass('offlineQueued'),
          "data-testid": "".concat(TEST_ID, "-field-offlineQueued"),
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* SearchInput */.DOo, {
            label: "H\xE0ng \u0111\u1EE3i offline",
            config: lookups/* OFFLINE_LOOKUP_CONFIG */.an,
            value: form.offlineQueued ? 'true' : 'false',
            primaryDisplay: form.offlineQueued ? 'Offline queue' : 'Online',
            showSecondaryInput: false,
            onChange: function onChange(item) {
              return updateField('offlineQueued', item.value === 'true');
            },
            onClear: function onClear() {
              return updateField('offlineQueued', false);
            }
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "".concat(PatrolFormPage_PatrolFormPage_module.field, " ").concat(PatrolFormPage_PatrolFormPage_module.span2),
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* Input */.pde, {
            label: "Ghi ch\xFA",
            value: form.note,
            onChange: function onChange(e) {
              return updateField('note', e.target.value);
            },
            fullWidth: true,
            "data-testid": "".concat(TEST_ID, "-field-note")
          })
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("section", {
      "data-zone": "upload",
      "data-testid": "".concat(TEST_ID, "-upload"),
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("h3", {
        className: PatrolFormPage_PatrolFormPage_module.sectionTitle,
        children: "\u1EA2nh / video hi\u1EC7n tr\u01B0\u1EDDng"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: PatrolFormPage_PatrolFormPage_module.mediaUpload,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* LinImageUpload */.oHE, {
          purpose: "patrol-session-media",
          product: "rmms",
          entityType: "patrol_session",
          entityId: currentId !== null && currentId !== void 0 ? currentId : undefined,
          items: mediaItems,
          onChange: onMediaChange,
          maxFiles: PATROL_MEDIA_MAX,
          maxBytes: PATROL_VIDEO_MAX_BYTES,
          accept: PATROL_MEDIA_ACCEPT,
          disabled: isView,
          confirmRemove: mode === 'edit',
          labels: PATROL_MEDIA_LABELS,
          client: mediaApi,
          testId: "".concat(TEST_ID, "-field-mediaIds")
        })
      })]
    })]
  });
  (0,useShellPageTitle/* useShellPageTitle */.D)(MODE_TITLE[mode]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: PatrolFormPage_PatrolFormPage_module.page,
    "data-testid": "".concat(TEST_ID, "-page"),
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* LinPageHeader */.mhJ, {
      pageId: PAGE_ID,
      testIdPrefix: TEST_ID,
      title: MODE_TITLE[mode],
      titleIconClass: "fas fa-route",
      hint: "Tu\u1EA7n \u0111\u01B0\u1EDDng / tu\u1EA7n ki\u1EC3m"
    }), toolbar, loading ? /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: PatrolFormPage_PatrolFormPage_module.loading,
      "data-testid": "".concat(TEST_ID, "-loading"),
      children: "\u0110ang t\u1EA3i\u2026"
    }) : /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [showBanner ? /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: PatrolFormPage_PatrolFormPage_module.banner,
        "data-testid": "".concat(TEST_ID, "-banner"),
        children: "Vui l\xF2ng nh\u1EADp \u0111\u1EE7 c\xE1c tr\u01B0\u1EDDng b\u1EAFt bu\u1ED9c (\u0111\xE1nh d\u1EA5u *)."
      }) : null, isView ? viewBody : editBody]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(GiaoViecModal/* GiaoViecModal */.t, {
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
  });
};
/* harmony default export */ const PatrolFormPage_PatrolFormPage = (PatrolFormPage);
;// ./src/pages/PatrolFormPage/index.ts


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

/***/ 6978
(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.page___kzrwe {
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

.actions___bblTA {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
}

.banner___vAAln {
  padding: 8px 16px;
  border-radius: 4px;
  background: #fef2f2;
  color: #b91c1c;
  font-size: 13px;
}

.z2___meEVu {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.sectionTitle___rKJwG {
  margin: 0 0 8px;
  font-size: 13px;
  font-weight: 700;
}

.fields___I_5Uf,
.viewGrid___lM_sA {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 16px;
  align-items: start;
}

@media (max-width: 1024px) {
  .fields___I_5Uf,
  .viewGrid___lM_sA {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .fields___I_5Uf,
  .viewGrid___lM_sA {
    grid-template-columns: 1fr;
  }
}

.field___zbdK4 {
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
}

.span2___HUx_S {
  grid-column: 1 / -1;
}

.fieldInvalid___MFGPk input {
  border-color: #dc3545 !important;
}

.viewGrid___lM_sA dt {
  margin: 0 0 4px;
  font-size: 12px;
  color: #6c757d;
}

.viewGrid___lM_sA dd {
  margin: 0;
  font-size: 14px;
}

.z3___rmvDJ {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  width: 100%;
}

.z3___rmvDJ button {
  min-width: 100px;
}

@media (max-width: 640px) {
  .z3___rmvDJ {
    flex-direction: column-reverse;
    align-items: stretch;
  }

  .z3___rmvDJ button {
    width: 100%;
    justify-content: center;
  }
}

.patrolFooter___RD4fU {
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 10px;
  padding: 14px 0 0;
  border-top: 1px solid #e5e7eb;
  margin-top: 8px;
}

.contextStrip___NvtoM {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 16px;
  padding: 12px 16px;
  margin-bottom: 12px;
  background: #eff6ff;
  border: 1px solid #dbeafe;
  border-radius: 8px;
  font-size: 13px;
}

.loading___WijT1 {
  padding: 16px;
  text-align: center;
  color: #6c757d;
}

.mediaGallery___I8bPX,
.mediaUpload___cJ7id {
  margin-top: 8px;
}

.mediaEmpty___S2ipM {
  margin: 0;
  padding: 12px 0;
  font-size: 13px;
  color: #6c757d;
}
`, "",{"version":3,"sources":["webpack://./src/pages/PatrolFormPage/PatrolFormPage.module.css"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,aAAa;EACb,mBAAmB;EACnB,cAAc;EACd,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,eAAe;EACf,QAAQ;AACV;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,mBAAmB;EACnB,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,eAAe;EACf,eAAe;EACf,gBAAgB;AAClB;;AAEA;;EAEE,aAAa;EACb,gDAAgD;EAChD,SAAS;EACT,kBAAkB;AACpB;;AAEA;EACE;;IAEE,gDAAgD;EAClD;AACF;;AAEA;EACE;;IAEE,0BAA0B;EAC5B;AACF;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,QAAQ;EACR,YAAY;AACd;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,eAAe;EACf,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,SAAS;EACT,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,yBAAyB;EACzB,mBAAmB;EACnB,eAAe;EACf,QAAQ;EACR,WAAW;AACb;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE;IACE,8BAA8B;IAC9B,oBAAoB;EACtB;;EAEA;IACE,WAAW;IACX,uBAAuB;EACzB;AACF;;AAEA;EACE,aAAa;EACb,yBAAyB;EACzB,eAAe;EACf,SAAS;EACT,iBAAiB;EACjB,6BAA6B;EAC7B,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,aAAa;EACb,kBAAkB;EAClB,mBAAmB;EACnB,mBAAmB;EACnB,yBAAyB;EACzB,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,cAAc;AAChB;;AAEA;;EAEE,eAAe;AACjB;;AAEA;EACE,SAAS;EACT,eAAe;EACf,eAAe;EACf,cAAc;AAChB","sourcesContent":[".page {\n  height: 100%;\n  min-height: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  padding: 16px;\n  background: #f5f7fa;\n  color: #1a1a1a;\n  overflow: auto;\n}\n\n.actions {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n\n.banner {\n  padding: 8px 16px;\n  border-radius: 4px;\n  background: #fef2f2;\n  color: #b91c1c;\n  font-size: 13px;\n}\n\n.z2 {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.sectionTitle {\n  margin: 0 0 8px;\n  font-size: 13px;\n  font-weight: 700;\n}\n\n.fields,\n.viewGrid {\n  display: grid;\n  grid-template-columns: repeat(5, minmax(0, 1fr));\n  gap: 16px;\n  align-items: start;\n}\n\n@media (max-width: 1024px) {\n  .fields,\n  .viewGrid {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n}\n\n@media (max-width: 640px) {\n  .fields,\n  .viewGrid {\n    grid-template-columns: 1fr;\n  }\n}\n\n.field {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  min-width: 0;\n}\n\n.span2 {\n  grid-column: 1 / -1;\n}\n\n.fieldInvalid :global(input) {\n  border-color: #dc3545 !important;\n}\n\n.viewGrid dt {\n  margin: 0 0 4px;\n  font-size: 12px;\n  color: #6c757d;\n}\n\n.viewGrid dd {\n  margin: 0;\n  font-size: 14px;\n}\n\n.z3 {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 8px;\n  width: 100%;\n}\n\n.z3 :global(button) {\n  min-width: 100px;\n}\n\n@media (max-width: 640px) {\n  .z3 {\n    flex-direction: column-reverse;\n    align-items: stretch;\n  }\n\n  .z3 :global(button) {\n    width: 100%;\n    justify-content: center;\n  }\n}\n\n.patrolFooter {\n  display: flex;\n  justify-content: flex-end;\n  flex-wrap: wrap;\n  gap: 10px;\n  padding: 14px 0 0;\n  border-top: 1px solid #e5e7eb;\n  margin-top: 8px;\n}\n\n.contextStrip {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px 16px;\n  padding: 12px 16px;\n  margin-bottom: 12px;\n  background: #eff6ff;\n  border: 1px solid #dbeafe;\n  border-radius: 8px;\n  font-size: 13px;\n}\n\n.loading {\n  padding: 16px;\n  text-align: center;\n  color: #6c757d;\n}\n\n.mediaGallery,\n.mediaUpload {\n  margin-top: 8px;\n}\n\n.mediaEmpty {\n  margin: 0;\n  padding: 12px 0;\n  font-size: 13px;\n  color: #6c757d;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"page": `page___kzrwe`,
	"actions": `actions___bblTA`,
	"banner": `banner___vAAln`,
	"z2": `z2___meEVu`,
	"sectionTitle": `sectionTitle___rKJwG`,
	"fields": `fields___I_5Uf`,
	"viewGrid": `viewGrid___lM_sA`,
	"field": `field___zbdK4`,
	"span2": `span2___HUx_S`,
	"fieldInvalid": `fieldInvalid___MFGPk`,
	"z3": `z3___rmvDJ`,
	"patrolFooter": `patrolFooter___RD4fU`,
	"contextStrip": `contextStrip___NvtoM`,
	"loading": `loading___WijT1`,
	"mediaGallery": `mediaGallery___I8bPX`,
	"mediaUpload": `mediaUpload___cJ7id`,
	"mediaEmpty": `mediaEmpty___S2ipM`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);

/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ }

}]);
//# sourceMappingURL=patrol-form-page.03df018c.linm-rmms-field.js.map