"use strict";
(self["webpackChunkrmms_field"] = self["webpackChunkrmms_field"] || []).push([[372],{

/***/ 2328
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ IncidentFormPage_IncidentFormPage)
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
// EXTERNAL MODULE: ./node_modules/react-redux/dist/react-redux.mjs
var react_redux = __webpack_require__(1468);
// EXTERNAL MODULE: ./node_modules/react-router/dist/index.js
var dist = __webpack_require__(7767);
// EXTERNAL MODULE: ./node_modules/react-router-dom/dist/index.js
var react_router_dom_dist = __webpack_require__(4976);
// EXTERNAL MODULE: ./node_modules/@linm-soft-org/linm-web-common-components/dist/index.js + 583 modules
var linm_web_common_components_dist = __webpack_require__(8755);
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./src/components/catalog-form/CatalogFormToolbar.module.css
var CatalogFormToolbar_module = __webpack_require__(842);
;// ./src/components/catalog-form/CatalogFormToolbar.module.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(CatalogFormToolbar_module/* default */.A, options);




       /* harmony default export */ const catalog_form_CatalogFormToolbar_module = (CatalogFormToolbar_module/* default */.A && CatalogFormToolbar_module/* default */.A.locals ? CatalogFormToolbar_module/* default */.A.locals : undefined);

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
;// ./src/components/catalog-form/CatalogFormToolbar.tsx




function tid(prefix, name) {
  return "".concat(prefix, "-").concat(name);
}
var CatalogFormToolbar = function CatalogFormToolbar(_ref) {
  var testIdPrefix = _ref.testIdPrefix,
    title = _ref.title,
    mode = _ref.mode,
    _ref$saving = _ref.saving,
    saving = _ref$saving === void 0 ? false : _ref$saving,
    _ref$canSave = _ref.canSave,
    canSave = _ref$canSave === void 0 ? true : _ref$canSave,
    _ref$canEdit = _ref.canEdit,
    canEdit = _ref$canEdit === void 0 ? false : _ref$canEdit,
    _ref$canCopy = _ref.canCopy,
    canCopy = _ref$canCopy === void 0 ? false : _ref$canCopy,
    _ref$canDelete = _ref.canDelete,
    canDelete = _ref$canDelete === void 0 ? false : _ref$canDelete,
    copySourceCode = _ref.copySourceCode,
    extraActions = _ref.extraActions,
    onBack = _ref.onBack,
    onCancel = _ref.onCancel,
    onSave = _ref.onSave,
    onEdit = _ref.onEdit,
    onCopy = _ref.onCopy,
    onDelete = _ref.onDelete;
  var isView = mode === 'view';
  var isCreate = mode === 'create' || mode === 'copy';
  var saveLabel = isCreate ? 'Tạo mới' : 'Lưu thay đổi';
  var right = /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: catalog_form_CatalogFormToolbar_module.toolbarRight,
    children: [extraActions, isView ? /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [canEdit && onEdit ? /*#__PURE__*/(0,jsx_runtime.jsxs)(linm_web_common_components_dist/* Button */.$nd, {
        variant: "primary",
        size: "sm",
        "data-testid": tid(testIdPrefix, 'btn-to-edit'),
        onClick: onEdit,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("i", {
          className: "fas fa-pen",
          "aria-hidden": true
        }), " S\u1EEDa"]
      }) : null, canCopy && onCopy ? /*#__PURE__*/(0,jsx_runtime.jsxs)(linm_web_common_components_dist/* Button */.$nd, {
        variant: "secondary",
        size: "sm",
        "data-testid": tid(testIdPrefix, 'btn-to-copy'),
        onClick: onCopy,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("i", {
          className: "fas fa-copy",
          "aria-hidden": true
        }), " Sao ch\xE9p"]
      }) : null, canDelete && onDelete ? /*#__PURE__*/(0,jsx_runtime.jsxs)(linm_web_common_components_dist/* Button */.$nd, {
        variant: "secondary",
        size: "sm",
        "data-testid": tid(testIdPrefix, 'btn-delete'),
        onClick: onDelete,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("i", {
          className: "fas fa-trash",
          "aria-hidden": true
        }), " X\xF3a"]
      }) : null]
    }) : /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(linm_web_common_components_dist/* Button */.$nd, {
        variant: "secondary",
        size: "sm",
        "data-testid": tid(testIdPrefix, 'btn-cancel'),
        onClick: onCancel,
        disabled: saving,
        title: "H\u1EE7y thay \u0111\u1ED5i",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("i", {
          className: "fas fa-times",
          "aria-hidden": true
        }), " H\u1EE7y"]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(linm_web_common_components_dist/* Button */.$nd, {
        variant: "primary",
        size: "sm",
        "data-testid": tid(testIdPrefix, 'btn-save'),
        onClick: onSave,
        disabled: saving || !canSave,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("i", {
          className: "fas ".concat(saving ? 'fa-spinner fa-spin' : 'fa-save'),
          "aria-hidden": true
        }), ' ', saveLabel]
      })]
    })]
  });
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: catalog_form_CatalogFormToolbar_module.stickyTop,
    "data-testid": tid(testIdPrefix, 'z1'),
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* LinListToolbar */.fYf, {
      testIdPrefix: testIdPrefix,
      profile: "generic",
      actions: [{
        id: 'back',
        placement: 'left',
        testId: tid(testIdPrefix, 'back-btn'),
        render: function render() {
          return /*#__PURE__*/(0,jsx_runtime.jsxs)(linm_web_common_components_dist/* Button */.$nd, {
            variant: "secondary",
            size: "sm",
            "data-testid": tid(testIdPrefix, 'btn-back'),
            onClick: onBack,
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("i", {
              className: "fas fa-arrow-left",
              "aria-hidden": true
            }), " Quay l\u1EA1i"]
          });
        }
      }, {
        id: 'right',
        placement: 'right',
        render: function render() {
          return right;
        }
      }]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: catalog_form_CatalogFormToolbar_module.titleBlock,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("h1", {
        className: catalog_form_CatalogFormToolbar_module.title,
        "data-testid": tid(testIdPrefix, 'title'),
        children: title
      }), isView ? /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: catalog_form_CatalogFormToolbar_module.viewHint,
        "data-testid": tid(testIdPrefix, 'view-hint'),
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("i", {
          className: "fas fa-eye",
          "aria-hidden": true
        }), " Ch\u1EBF \u0111\u1ED9 xem \u2014 nh\u1EA5n ", /*#__PURE__*/(0,jsx_runtime.jsx)("strong", {
          children: "S\u1EEDa"
        }), " \u0111\u1EC3 ch\u1EC9nh s\u1EEDa"]
      }) : copySourceCode !== null && copySourceCode !== void 0 && copySourceCode.trim() && mode === 'copy' ? /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: catalog_form_CatalogFormToolbar_module.editHint,
        "data-testid": tid(testIdPrefix, 'copy-hint'),
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("i", {
          className: "fas fa-copy",
          "aria-hidden": true
        }), " B\u1EA1n \u0111ang th\u1EF1c hi\u1EC7n copy t\u1EEB", ' ', /*#__PURE__*/(0,jsx_runtime.jsx)("strong", {
          children: copySourceCode.trim()
        })]
      }) : /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: catalog_form_CatalogFormToolbar_module.editHint,
        "data-testid": tid(testIdPrefix, 'edit-hint'),
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("i", {
          className: "fas fa-pen",
          "aria-hidden": true
        }), " \u0110ang", ' ', isCreate ? 'tạo mới' : 'chỉnh sửa', " \u2014 L\u01B0u ho\u1EB7c H\u1EE7y"]
      })]
    })]
  });
};
var CatalogFormShell = function CatalogFormShell(_ref2) {
  var testId = _ref2.testId,
    header = _ref2.header,
    children = _ref2.children;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: catalog_form_CatalogFormToolbar_module.page,
    "data-testid": testId,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: catalog_form_CatalogFormToolbar_module.pageFormHeader,
      children: header
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: catalog_form_CatalogFormToolbar_module.pageFormScroll,
      children: children
    })]
  });
};

;// ./src/components/catalog-form/index.ts

// EXTERNAL MODULE: ./src/demo/incidentStore.ts
var incidentStore = __webpack_require__(5908);
// EXTERNAL MODULE: ./src/router/navigateInAppPath.ts
var navigateInAppPath = __webpack_require__(2381);
// EXTERNAL MODULE: ./src/router/useShellPageTitle.ts
var useShellPageTitle = __webpack_require__(7619);
// EXTERNAL MODULE: ./src/filters/RmmsOrgFormFields.tsx + 1 modules
var RmmsOrgFormFields = __webpack_require__(5538);
// EXTERNAL MODULE: ./src/filters/rmmsOrgForm.ts
var rmmsOrgForm = __webpack_require__(1704);
// EXTERNAL MODULE: ./src/services/incident/incidentService.ts + 1 modules
var incidentService = __webpack_require__(8162);
;// ./src/services/incident/mediaUpload.ts


function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
;
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,defineProperty/* default */.A)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/** Incident FileMulti helpers — FileService guid[] · MIME FE enforce. */

;
var INCIDENT_MEDIA_MAX = 10;
var INCIDENT_IMAGE_MAX_BYTES = 10 * 1024 * 1024;
var INCIDENT_VIDEO_MAX_BYTES = 50 * 1024 * 1024;

/** jpeg|png|webp + mp4|webm — LinImageUpload accept list. */
var INCIDENT_MEDIA_ACCEPT = 'image/jpeg,image/png,image/webp,video/mp4,video/webm,.jpg,.jpeg,.png,.webp,.mp4,.webm';
var INCIDENT_MEDIA_LABELS = {
  dropTitle: 'Kéo thả ảnh / video sự cố',
  dropHint: 'JPEG/PNG/WebP ≤10MB · MP4/WebM ≤50MB · tối đa {max} tệp (≤{maxMb}MB/video)',
  retry: 'Thử lại',
  remove: 'Xóa',
  extError: '«{name}» không đúng định dạng (jpeg/png/webp/mp4/webm).',
  sizeError: '«{name}» vượt quá {maxMb}MB.',
  maxError: 'Tối đa {max} tệp / sự cố.',
  minError: 'Cần tối thiểu {min} tệp.',
  uploading: 'Đang tải…',
  failed: 'Tải thất bại',
  preview: 'Xem',
  committedTitle: 'Đã gắn sự cố',
  uploadTitle: 'Ảnh / video sự cố',
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
  removeConfirmMessage: 'Tệp sẽ bị gỡ khỏi sự cố (không xóa FileService).',
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
function createIncidentMediaUploadApi() {
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
              if (!(img && body.sizeBytes > INCIDENT_IMAGE_MAX_BYTES)) {
                _context.next = 2;
                break;
              }
              err = new Error('FILE_TOO_LARGE');
              err.errorCode = 'FILE_TOO_LARGE';
              err.status = 413;
              throw err;
            case 2:
              if (!(vid && body.sizeBytes > INCIDENT_VIDEO_MAX_BYTES)) {
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
      if (ids.length >= INCIDENT_MEDIA_MAX) break;
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
  return ids.slice(0, INCIDENT_MEDIA_MAX).map(function (id, index) {
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
// EXTERNAL MODULE: ./src/services/incident/permissions.ts
var permissions = __webpack_require__(4439);
// EXTERNAL MODULE: ./src/components/GiaoViecModal/index.ts + 6 modules
var GiaoViecModal = __webpack_require__(3367);
// EXTERNAL MODULE: ./src/components/TaskChatPanel/TaskChatPanel.tsx + 1 modules
var TaskChatPanel = __webpack_require__(4732);
// EXTERNAL MODULE: ./src/utils/taskPriorityPrefill.ts
var taskPriorityPrefill = __webpack_require__(4106);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./src/pages/IncidentFormPage/IncidentFormPage.module.css
var IncidentFormPage_module = __webpack_require__(4962);
;// ./src/pages/IncidentFormPage/IncidentFormPage.module.css

      
      
      
      
      
      
      
      
      

var IncidentFormPage_module_options = {};

IncidentFormPage_module_options.styleTagTransform = (styleTagTransform_default());
IncidentFormPage_module_options.setAttributes = (setAttributesWithoutAttributes_default());
IncidentFormPage_module_options.insert = insertBySelector_default().bind(null, "head");
IncidentFormPage_module_options.domAPI = (styleDomAPI_default());
IncidentFormPage_module_options.insertStyleElement = (insertStyleElement_default());

var IncidentFormPage_module_update = injectStylesIntoStyleTag_default()(IncidentFormPage_module/* default */.A, IncidentFormPage_module_options);




       /* harmony default export */ const IncidentFormPage_IncidentFormPage_module = (IncidentFormPage_module/* default */.A && IncidentFormPage_module/* default */.A.locals ? IncidentFormPage_module/* default */.A.locals : undefined);

;// ./src/pages/IncidentFormPage/IncidentFormPage.tsx





function IncidentFormPage_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function IncidentFormPage_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? IncidentFormPage_ownKeys(Object(t), !0).forEach(function (r) { (0,defineProperty/* default */.A)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : IncidentFormPage_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
;

















var TEST_ID = 'rmms-incident';
var LIST_PATH = '/su-co';
var REQUIRED = ['title', 'incidentType', 'status', 'requestedAt'];
function orgOf(form) {
  var _form$zoneOrgCode, _form$zoneOrgName, _form$vpOrgCode, _form$vpOrgName, _form$assigneeCode, _form$assigneeOrgName, _form$routeName;
  return {
    zoneOrgCode: (_form$zoneOrgCode = form.zoneOrgCode) !== null && _form$zoneOrgCode !== void 0 ? _form$zoneOrgCode : '',
    zoneOrgName: (_form$zoneOrgName = form.zoneOrgName) !== null && _form$zoneOrgName !== void 0 ? _form$zoneOrgName : '',
    vpOrgCode: (_form$vpOrgCode = form.vpOrgCode) !== null && _form$vpOrgCode !== void 0 ? _form$vpOrgCode : '',
    vpOrgName: (_form$vpOrgName = form.vpOrgName) !== null && _form$vpOrgName !== void 0 ? _form$vpOrgName : '',
    assigneeCode: (_form$assigneeCode = form.assigneeCode) !== null && _form$assigneeCode !== void 0 ? _form$assigneeCode : '',
    assigneeName: (_form$assigneeOrgName = form.assigneeOrgName) !== null && _form$assigneeOrgName !== void 0 ? _form$assigneeOrgName : '',
    routeCode: form.routeCode || form.routeName || '',
    routeName: (_form$routeName = form.routeName) !== null && _form$routeName !== void 0 ? _form$routeName : ''
  };
}
var MODE_TITLE = {
  create: 'Tạo sự cố / vấn đề',
  edit: 'Sửa sự cố',
  view: 'Xem sự cố',
  copy: 'Sao chép sự cố'
};
var BOOL_OPTIONS = [{
  value: 'false',
  label: 'Không'
}, {
  value: 'true',
  label: 'Có'
}];
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
  var _dto$mediaIds, _dto$severity, _dto$reporterName, _dto$handleDirection, _dto$readStatus, _dto$reportStatus, _dto$assetLabel, _dto$kmStart, _dto$kmEnd, _dto$weather, _dto$detectionId, _dto$description, _dto$assigneeOrgName, _dto$assigneeName, _dto$updatedAt;
  var mediaIds = (0,toConsumableArray/* default */.A)((_dto$mediaIds = dto.mediaIds) !== null && _dto$mediaIds !== void 0 ? _dto$mediaIds : []).slice(0, INCIDENT_MEDIA_MAX);
  return IncidentFormPage_objectSpread(IncidentFormPage_objectSpread({
    code: asCopy ? '(tự sinh khi lưu)' : dto.code,
    title: dto.title
  }, (0,rmmsOrgForm/* orgFromDto */._x)(dto)), {}, {
    routeName: dto.routeName,
    incidentType: dto.incidentType,
    status: dto.status,
    severity: (_dto$severity = dto.severity) !== null && _dto$severity !== void 0 ? _dto$severity : 'medium',
    reporterName: (_dto$reporterName = dto.reporterName) !== null && _dto$reporterName !== void 0 ? _dto$reporterName : '',
    handleDirection: (_dto$handleDirection = dto.handleDirection) !== null && _dto$handleDirection !== void 0 ? _dto$handleDirection : '',
    readStatus: (_dto$readStatus = dto.readStatus) !== null && _dto$readStatus !== void 0 ? _dto$readStatus : '',
    reportStatus: (_dto$reportStatus = dto.reportStatus) !== null && _dto$reportStatus !== void 0 ? _dto$reportStatus : '',
    assetLabel: (_dto$assetLabel = dto.assetLabel) !== null && _dto$assetLabel !== void 0 ? _dto$assetLabel : '',
    kmStart: (_dto$kmStart = dto.kmStart) !== null && _dto$kmStart !== void 0 ? _dto$kmStart : '',
    kmEnd: (_dto$kmEnd = dto.kmEnd) !== null && _dto$kmEnd !== void 0 ? _dto$kmEnd : '',
    weather: (_dto$weather = dto.weather) !== null && _dto$weather !== void 0 ? _dto$weather : '',
    requestedAt: dto.requestedAt,
    detectionId: (_dto$detectionId = dto.detectionId) !== null && _dto$detectionId !== void 0 ? _dto$detectionId : '',
    description: (_dto$description = dto.description) !== null && _dto$description !== void 0 ? _dto$description : '',
    mediaIds: mediaIds,
    causesCongestion: Boolean(dto.causesCongestion),
    hasGps: Boolean(dto.hasGps),
    assigneeOrgName: (_dto$assigneeOrgName = dto.assigneeOrgName) !== null && _dto$assigneeOrgName !== void 0 ? _dto$assigneeOrgName : '',
    assigneeName: (_dto$assigneeName = dto.assigneeName) !== null && _dto$assigneeName !== void 0 ? _dto$assigneeName : '',
    updatedAt: (_dto$updatedAt = dto.updatedAt) !== null && _dto$updatedAt !== void 0 ? _dto$updatedAt : '',
    isActive: dto.isActive !== false
  });
}
function optionLabel(options, value, fallback) {
  var _options$find$label, _options$find;
  return (_options$find$label = (_options$find = options.find(function (o) {
    return o.value === value;
  })) === null || _options$find === void 0 ? void 0 : _options$find.label) !== null && _options$find$label !== void 0 ? _options$find$label : fallback;
}
var IncidentFormPage = function IncidentFormPage() {
  var _searchParams$get, _STATUS_LABELS$form$s;
  var _useParams = (0,dist/* useParams */.g)(),
    idParam = _useParams.id;
  var location = (0,dist/* useLocation */.zy)();
  var _useSearchParams = (0,react_router_dom_dist/* useSearchParams */.ok)(),
    _useSearchParams2 = (0,slicedToArray/* default */.A)(_useSearchParams, 1),
    searchParams = _useSearchParams2[0];
  var navigate = (0,navigateInAppPath/* useInAppNavigate */.lc)();
  var dispatch = (0,react_redux/* useDispatch */.wA)();
  var perms = (0,permissions/* incidentListPermissions */.NM)();
  var copyFrom = searchParams.get('copyFrom');
  var modeParam = searchParams.get('mode');
  var id = (_searchParams$get = searchParams.get('id')) !== null && _searchParams$get !== void 0 ? _searchParams$get : idParam;
  var mode = (0,external_react_.useMemo)(function () {
    var path = location.pathname;
    if (path.endsWith('/sua') || modeParam === 'edit') return 'edit';
    if (path.endsWith('/copy') || modeParam === 'copy') return 'copy';
    if (!idParam || idParam === 'new' || path.endsWith('/tao-moi')) {
      return copyFrom ? 'copy' : 'create';
    }
    return 'view';
  }, [idParam, copyFrom, modeParam, location.pathname]);
  (0,useShellPageTitle/* useShellPageTitle */.D)(MODE_TITLE[mode]);
  var isView = mode === 'view';
  var _useState = (0,external_react_.useState)(IncidentFormPage_objectSpread({}, incidentStore/* EMPTY_FORM */.z3)),
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
  var _useState19 = (0,external_react_.useState)(''),
    _useState20 = (0,slicedToArray/* default */.A)(_useState19, 2),
    copySourceCode = _useState20[0],
    setCopySourceCode = _useState20[1];
  var _useState21 = (0,external_react_.useState)(incidentStore/* FALLBACK_INIT_DATA */.Vd.statuses),
    _useState22 = (0,slicedToArray/* default */.A)(_useState21, 2),
    localStatuses = _useState22[0],
    setLocalStatuses = _useState22[1];
  var _useState23 = (0,external_react_.useState)(incidentStore/* FALLBACK_INIT_DATA */.Vd.severities),
    _useState24 = (0,slicedToArray/* default */.A)(_useState23, 2),
    localSeverities = _useState24[0],
    setLocalSeverities = _useState24[1];
  var _useState25 = (0,external_react_.useState)(incidentStore/* FALLBACK_INIT_DATA */.Vd.incidentTypes),
    _useState26 = (0,slicedToArray/* default */.A)(_useState25, 2),
    localTypes = _useState26[0],
    setLocalTypes = _useState26[1];
  var _useState27 = (0,external_react_.useState)(incidentStore/* FALLBACK_INIT_DATA */.Vd.handleDirections),
    _useState28 = (0,slicedToArray/* default */.A)(_useState27, 2),
    localHandleDirs = _useState28[0],
    setLocalHandleDirs = _useState28[1];
  var _useState29 = (0,external_react_.useState)(incidentStore/* FALLBACK_INIT_DATA */.Vd.readStatuses),
    _useState30 = (0,slicedToArray/* default */.A)(_useState29, 2),
    localReadStatuses = _useState30[0],
    setLocalReadStatuses = _useState30[1];
  var _useState31 = (0,external_react_.useState)(incidentStore/* FALLBACK_INIT_DATA */.Vd.reportStatuses),
    _useState32 = (0,slicedToArray/* default */.A)(_useState31, 2),
    localReportStatuses = _useState32[0],
    setLocalReportStatuses = _useState32[1];
  var _useState33 = (0,external_react_.useState)([]),
    _useState34 = (0,slicedToArray/* default */.A)(_useState33, 2),
    mediaItems = _useState34[0],
    setMediaItems = _useState34[1];
  var mediaApi = (0,external_react_.useMemo)(function () {
    return createIncidentMediaUploadApi();
  }, []);
  (0,external_react_.useEffect)(function () {
    var cancelled = false;
    var boot = /*#__PURE__*/function () {
      var _ref = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee() {
        var init, _init$statuses, _init$severities, _init$incidentTypes, _init$handleDirection, _init$readStatuses, _init$reportStatuses, sourceId, dto, next, _next, _t;
        return regenerator_default().wrap(function (_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              setLoading(true);
              setInvalid(new Set());
              setShowBanner(false);
              setDirty(false);
              _context.prev = 1;
              _context.next = 2;
              return incidentService/* incidentService */.U.getInitData();
            case 2:
              init = _context.sent;
              if (!cancelled && init) {
                if ((_init$statuses = init.statuses) !== null && _init$statuses !== void 0 && _init$statuses.length) setLocalStatuses(init.statuses);
                if ((_init$severities = init.severities) !== null && _init$severities !== void 0 && _init$severities.length) setLocalSeverities(init.severities);
                if ((_init$incidentTypes = init.incidentTypes) !== null && _init$incidentTypes !== void 0 && _init$incidentTypes.length) setLocalTypes(init.incidentTypes);
                if ((_init$handleDirection = init.handleDirections) !== null && _init$handleDirection !== void 0 && _init$handleDirection.length) setLocalHandleDirs(init.handleDirections);
                if ((_init$readStatuses = init.readStatuses) !== null && _init$readStatuses !== void 0 && _init$readStatuses.length) setLocalReadStatuses(init.readStatuses);
                if ((_init$reportStatuses = init.reportStatuses) !== null && _init$reportStatuses !== void 0 && _init$reportStatuses.length) setLocalReportStatuses(init.reportStatuses);
              }
              if (!(mode === 'create')) {
                _context.next = 3;
                break;
              }
              setCurrentId(null);
              setCopySourceCode('');
              setForm(IncidentFormPage_objectSpread(IncidentFormPage_objectSpread({}, incidentStore/* EMPTY_FORM */.z3), {}, {
                code: '(tự sinh)',
                requestedAt: new Date().toISOString(),
                updatedAt: '',
                mediaIds: []
              }));
              setMediaItems([]);
              return _context.abrupt("return");
            case 3:
              sourceId = mode === 'copy' ? copyFrom !== null && copyFrom !== void 0 ? copyFrom : id : id;
              if (sourceId) {
                _context.next = 4;
                break;
              }
              navigate(LIST_PATH);
              return _context.abrupt("return");
            case 4:
              _context.next = 5;
              return incidentService/* incidentService */.U.getById(sourceId);
            case 5:
              dto = _context.sent;
              if (!cancelled) {
                _context.next = 6;
                break;
              }
              return _context.abrupt("return");
            case 6:
              if (mode === 'copy') {
                setCurrentId(null);
                setCopySourceCode(dto.code);
                next = fromDto(dto, true);
                setForm(next);
                setMediaItems(uploadItemsFromMediaIds(next.mediaIds));
              } else {
                setCopySourceCode('');
                setCurrentId(dto.id);
                _next = fromDto(dto, false);
                setForm(_next);
                setMediaItems(uploadItemsFromMediaIds(_next.mediaIds));
              }
              _context.next = 8;
              break;
            case 7:
              _context.prev = 7;
              _t = _context["catch"](1);
              if (!cancelled) {
                (0,linm_web_common_components_dist/* dispatchAppToast */.tWi)(dispatch, {
                  message: 'Không tải được bản ghi sự cố.',
                  type: 'error'
                });
                navigate(LIST_PATH);
              }
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
        return _ref.apply(this, arguments);
      };
    }();
    void boot();
    return function () {
      cancelled = true;
    };
  }, [mode, id, copyFrom, navigate, dispatch]);
  var statusOptions = (0,external_react_.useMemo)(function () {
    return localStatuses.map(function (s) {
      return {
        value: s.value,
        label: s.label
      };
    });
  }, [localStatuses]);
  var typeOptions = (0,external_react_.useMemo)(function () {
    return localTypes.map(function (t) {
      return {
        value: t.value,
        label: t.label
      };
    });
  }, [localTypes]);
  var severityOptions = (0,external_react_.useMemo)(function () {
    return localSeverities.map(function (t) {
      return {
        value: t.value,
        label: t.label
      };
    });
  }, [localSeverities]);
  var handleDirOptions = (0,external_react_.useMemo)(function () {
    return [{
      value: '',
      label: '—'
    }].concat((0,toConsumableArray/* default */.A)(localHandleDirs.map(function (t) {
      return {
        value: t.value,
        label: t.label
      };
    })));
  }, [localHandleDirs]);
  var readStatusOptions = (0,external_react_.useMemo)(function () {
    return [{
      value: '',
      label: '—'
    }].concat((0,toConsumableArray/* default */.A)(localReadStatuses.map(function (t) {
      return {
        value: t.value,
        label: t.label
      };
    })));
  }, [localReadStatuses]);
  var reportStatusOptions = (0,external_react_.useMemo)(function () {
    return [{
      value: '',
      label: '—'
    }].concat((0,toConsumableArray/* default */.A)(localReportStatuses.map(function (t) {
      return {
        value: t.value,
        label: t.label
      };
    })));
  }, [localReportStatuses]);
  var updateField = function updateField(key, value) {
    if (isView) return;
    setDirty(true);
    setForm(function (prev) {
      return IncidentFormPage_objectSpread(IncidentFormPage_objectSpread({}, prev), {}, (0,defineProperty/* default */.A)({}, key, value));
    });
    setInvalid(function (prev) {
      var next = new Set(prev);
      next.delete(String(key));
      return next;
    });
  };
  var onMediaChange = function onMediaChange(items) {
    if (isView) return;
    setDirty(true);
    setMediaItems(items);
    setForm(function (prev) {
      return IncidentFormPage_objectSpread(IncidentFormPage_objectSpread({}, prev), {}, {
        mediaIds: mediaIdsFromUploadItems(items)
      });
    });
  };
  var goList = function goList() {
    if (!isView && dirty) {
      var ok = window.confirm('Có thay đổi chưa lưu. Thoát mà không lưu?');
      if (!ok) return;
    }
    navigate(LIST_PATH);
  };
  var handleSave = /*#__PURE__*/function () {
    var _ref2 = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee2() {
      var bad, payload, _t2;
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
            bad = new Set();
            REQUIRED.forEach(function (key) {
              var val = form[key];
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
            payload = IncidentFormPage_objectSpread(IncidentFormPage_objectSpread({
              title: form.title.trim(),
              routeName: (form.routeName || form.routeCode || '').trim()
            }, (0,rmmsOrgForm/* orgPersistPayload */.xr)(orgOf(form))), {}, {
              incidentType: form.incidentType,
              status: form.status,
              severity: form.severity,
              reporterName: form.reporterName.trim() || undefined,
              handleDirection: form.handleDirection.trim() || undefined,
              readStatus: form.readStatus.trim() || undefined,
              reportStatus: form.reportStatus.trim() || undefined,
              assetLabel: form.assetLabel.trim() || undefined,
              kmStart: form.kmStart.trim() || undefined,
              kmEnd: form.kmEnd.trim() || undefined,
              weather: form.weather.trim() || undefined,
              requestedAt: form.requestedAt,
              detectionId: form.detectionId.trim() || undefined,
              description: form.description.trim() || undefined,
              mediaIds: mediaIdsFromUploadItems(mediaItems),
              causesCongestion: form.causesCongestion,
              hasGps: form.hasGps,
              assigneeName: form.assigneeName.trim() || undefined
            });
            if (!(mode === 'edit' && currentId)) {
              _context2.next = 7;
              break;
            }
            _context2.next = 6;
            return incidentService/* incidentService */.U.update(currentId, payload);
          case 6:
            (0,linm_web_common_components_dist/* dispatchAppToast */.tWi)(dispatch, {
              message: 'Đã cập nhật sự cố.',
              type: 'success'
            });
            _context2.next = 9;
            break;
          case 7:
            _context2.next = 8;
            return incidentService/* incidentService */.U.create(payload);
          case 8:
            (0,linm_web_common_components_dist/* dispatchAppToast */.tWi)(dispatch, {
              message: 'Đã lưu sự cố.',
              type: 'success'
            });
          case 9:
            setDirty(false);
            navigate(LIST_PATH);
            _context2.next = 11;
            break;
          case 10:
            _context2.prev = 10;
            _t2 = _context2["catch"](5);
            (0,linm_web_common_components_dist/* dispatchAppToast */.tWi)(dispatch, {
              message: _t2 instanceof Error ? _t2.message : 'Lưu sự cố thất bại.',
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
    }));
    return function handleSave() {
      return _ref2.apply(this, arguments);
    };
  }();
  var openGiaoViec = (0,external_react_.useCallback)(function () {
    if (!currentId) return;
    if (!(0,taskPriorityPrefill/* canSuggestTaskFromIncident */.QE)(form.severity, form.status)) {
      (0,linm_web_common_components_dist/* dispatchAppToast */.tWi)(dispatch, {
        message: 'Sự cố đã đóng — không tạo công việc.',
        type: 'info'
      });
      return;
    }
    var prefill = (0,taskPriorityPrefill/* incidentSeverityPrefill */.A$)(form.severity);
    if (!prefill) return;
    setGiaoViecContext({
      source: 'incident',
      sourceEntityType: 'incident',
      sourceEntityId: currentId,
      incidentCode: form.code,
      title: form.title || "X\u1EED l\xFD s\u1EF1 c\u1ED1 \u2014 ".concat(form.code),
      severity: form.severity,
      description: form.description,
      priority: prefill.priority,
      assignmentStrategy: 'direct',
      dueDate: prefill.dueDate
    });
    setGiaoViecOpen(true);
  }, [currentId, form, dispatch]);
  var handleDelete = /*#__PURE__*/function () {
    var _ref3 = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee3() {
      var _t3;
      return regenerator_default().wrap(function (_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            if (!(!currentId || !perms.canDelete)) {
              _context3.next = 1;
              break;
            }
            return _context3.abrupt("return");
          case 1:
            if (window.confirm("X\xF3a s\u1EF1 c\u1ED1 \xAB".concat(form.code, " \u2014 ").concat(form.title, "\xBB?"))) {
              _context3.next = 2;
              break;
            }
            return _context3.abrupt("return");
          case 2:
            _context3.prev = 2;
            _context3.next = 3;
            return incidentService/* incidentService */.U.delete(currentId);
          case 3:
            (0,linm_web_common_components_dist/* dispatchAppToast */.tWi)(dispatch, {
              message: 'Đã xóa sự cố',
              type: 'success'
            });
            navigate(LIST_PATH);
            _context3.next = 5;
            break;
          case 4:
            _context3.prev = 4;
            _t3 = _context3["catch"](2);
            (0,linm_web_common_components_dist/* dispatchAppToast */.tWi)(dispatch, {
              message: _t3 instanceof Error ? _t3.message : 'Xóa sự cố thất bại',
              type: 'error'
            });
          case 5:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[2, 4]]);
    }));
    return function handleDelete() {
      return _ref3.apply(this, arguments);
    };
  }();
  var fieldClass = function fieldClass(key) {
    return [IncidentFormPage_IncidentFormPage_module.field, invalid.has(key) ? IncidentFormPage_IncidentFormPage_module.fieldInvalid : ''].filter(Boolean).join(' ');
  };
  var canSave = mode === 'edit' ? perms.canUpdate : mode === 'create' || mode === 'copy' ? perms.canCreate : false;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(CatalogFormShell, {
    testId: "".concat(TEST_ID, "-form-shell"),
    header: /*#__PURE__*/(0,jsx_runtime.jsx)(CatalogFormToolbar, {
      testIdPrefix: TEST_ID,
      title: MODE_TITLE[mode],
      mode: mode,
      saving: saving,
      canSave: canSave,
      canEdit: !!currentId && perms.canUpdate,
      canCopy: !!currentId && perms.canCreate,
      canDelete: !!currentId && perms.canDelete,
      copySourceCode: copySourceCode,
      onBack: goList,
      onCancel: goList,
      onSave: function onSave() {
        return void handleSave();
      },
      onEdit: currentId ? function () {
        return navigate("".concat(LIST_PATH, "/sua?id=").concat(encodeURIComponent(currentId)));
      } : undefined,
      onCopy: currentId ? function () {
        return navigate("".concat(LIST_PATH, "/tao-moi?copyFrom=").concat(encodeURIComponent(currentId)));
      } : undefined,
      onDelete: function onDelete() {
        return void handleDelete();
      },
      extraActions: isView && currentId ? /*#__PURE__*/(0,jsx_runtime.jsxs)(linm_web_common_components_dist/* Button */.$nd, {
        variant: "secondary",
        size: "sm",
        "data-testid": "".concat(TEST_ID, "-btn-giao-viec"),
        "data-des-id": "DES-RTI-INC-ACTION",
        onClick: openGiaoViec,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("i", {
          className: "fas fa-tasks",
          "aria-hidden": true
        }), " Giao vi\u1EC7c"]
      }) : null
    }),
    children: [loading ? /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: catalog_form_CatalogFormToolbar_module.loading,
      "data-testid": "incident-form-loading",
      children: "\u0110ang t\u1EA3i\u2026"
    }) : /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [showBanner ? /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: catalog_form_CatalogFormToolbar_module.banner,
        "data-testid": "".concat(TEST_ID, "-banner"),
        children: "Vui l\xF2ng nh\u1EADp \u0111\u1EE7 c\xE1c tr\u01B0\u1EDDng b\u1EAFt bu\u1ED9c (ti\xEAu \u0111\u1EC1, lo\u1EA1i, tr\u1EA1ng th\xE1i, ng\xE0y YC *)."
      }) : null, /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: [catalog_form_CatalogFormToolbar_module.formBody, isView ? catalog_form_CatalogFormToolbar_module.viewDisabled : ''].filter(Boolean).join(' '),
        "data-testid": "incident-form-z2",
        "data-form-mode": mode,
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("section", {
          className: catalog_form_CatalogFormToolbar_module.section,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("h3", {
            className: catalog_form_CatalogFormToolbar_module.sectionTitle,
            children: "Th\xF4ng tin chung"
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: IncidentFormPage_IncidentFormPage_module.fields,
            "data-form-cols": "5",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: fieldClass('code'),
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* Input */.pde, {
                label: "M\xE3 s\u1EF1 c\u1ED1",
                value: form.code,
                readOnly: true,
                fullWidth: true,
                "data-testid": "incident-field-code"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: fieldClass('status'),
              children: isView ? /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* Input */.pde, {
                label: "Tr\u1EA1ng th\xE1i",
                required: true,
                value: optionLabel(localStatuses, form.status, (_STATUS_LABELS$form$s = incidentStore/* STATUS_LABELS */.Zt[form.status]) !== null && _STATUS_LABELS$form$s !== void 0 ? _STATUS_LABELS$form$s : form.status),
                readOnly: true,
                fullWidth: true,
                "data-testid": "incident-field-status"
              }) : /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* Select */.l6P, {
                label: "Tr\u1EA1ng th\xE1i",
                required: true,
                value: form.status,
                options: statusOptions,
                onChange: function onChange(e) {
                  return updateField('status', e.target.value);
                },
                fullWidth: true,
                "data-testid": "incident-field-status"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: "".concat(fieldClass('title'), " ").concat(IncidentFormPage_IncidentFormPage_module.span2),
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* Input */.pde, {
                label: "Ti\xEAu \u0111\u1EC1",
                required: true,
                value: form.title,
                readOnly: isView,
                onChange: function onChange(e) {
                  return updateField('title', e.target.value);
                },
                fullWidth: true,
                "data-testid": "incident-field-title"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(RmmsOrgFormFields/* RmmsOrgFormFields */.J, {
              testIdPrefix: TEST_ID,
              value: orgOf(form),
              disabled: isView,
              routeRequired: false,
              onChange: function onChange(next) {
                setForm(function (f) {
                  return IncidentFormPage_objectSpread(IncidentFormPage_objectSpread({}, f), {}, {
                    zoneOrgCode: next.zoneOrgCode,
                    zoneOrgName: next.zoneOrgName,
                    vpOrgCode: next.vpOrgCode,
                    vpOrgName: next.vpOrgName,
                    assigneeCode: next.assigneeCode,
                    assigneeOrgName: next.assigneeName,
                    routeCode: next.routeCode,
                    routeName: next.routeName || next.routeCode
                  });
                });
                setDirty(true);
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: fieldClass('incidentType'),
              children: isView ? /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* Input */.pde, {
                label: "Lo\u1EA1i s\u1EF1 c\u1ED1",
                required: true,
                value: optionLabel(localTypes, form.incidentType, (0,incidentStore/* typeLabel */.Dd)(form.incidentType)),
                readOnly: true,
                fullWidth: true,
                "data-testid": "incident-field-incidentType"
              }) : /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* Select */.l6P, {
                label: "Lo\u1EA1i s\u1EF1 c\u1ED1",
                required: true,
                value: form.incidentType,
                options: typeOptions,
                onChange: function onChange(e) {
                  return updateField('incidentType', e.target.value);
                },
                fullWidth: true,
                "data-testid": "incident-field-incidentType"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: IncidentFormPage_IncidentFormPage_module.field,
              children: isView ? /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* Input */.pde, {
                label: "M\u1EE9c \u0111\u1ED9",
                value: optionLabel(localSeverities, form.severity, (0,incidentStore/* severityLabel */.yi)(form.severity)),
                readOnly: true,
                fullWidth: true,
                "data-testid": "incident-field-severity"
              }) : /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* Select */.l6P, {
                label: "M\u1EE9c \u0111\u1ED9",
                value: form.severity,
                options: severityOptions,
                onChange: function onChange(e) {
                  return updateField('severity', e.target.value);
                },
                fullWidth: true,
                "data-testid": "incident-field-severity"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: fieldClass('requestedAt'),
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* Input */.pde, {
                label: "Ng\xE0y y\xEAu c\u1EA7u",
                required: true,
                type: "datetime-local",
                value: toLocalInput(form.requestedAt),
                readOnly: isView,
                onChange: function onChange(e) {
                  return updateField('requestedAt', fromLocalInput(e.target.value));
                },
                fullWidth: true,
                "data-testid": "incident-field-requestedAt"
              })
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("section", {
          className: catalog_form_CatalogFormToolbar_module.section,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("h3", {
            className: catalog_form_CatalogFormToolbar_module.sectionTitle,
            children: "Hi\u1EC7n tr\u01B0\u1EDDng & x\u1EED l\xFD"
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: IncidentFormPage_IncidentFormPage_module.fields,
            "data-form-cols": "5",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: IncidentFormPage_IncidentFormPage_module.field,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* Input */.pde, {
                label: "Ng\u01B0\u1EDDi b\xE1o",
                value: form.reporterName,
                readOnly: isView,
                onChange: function onChange(e) {
                  return updateField('reporterName', e.target.value);
                },
                fullWidth: true,
                "data-testid": "incident-field-reporterName"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: IncidentFormPage_IncidentFormPage_module.field,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* Input */.pde, {
                label: "Ng\u01B0\u1EDDi x\u1EED l\xFD",
                value: form.assigneeName,
                readOnly: isView,
                onChange: function onChange(e) {
                  return updateField('assigneeName', e.target.value);
                },
                fullWidth: true,
                "data-testid": "incident-field-assigneeName"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: IncidentFormPage_IncidentFormPage_module.field,
              children: isView ? /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* Input */.pde, {
                label: "H\u01B0\u1EDBng x\u1EED l\xFD",
                value: optionLabel(localHandleDirs, form.handleDirection, form.handleDirection),
                readOnly: true,
                fullWidth: true,
                "data-testid": "incident-field-handleDirection"
              }) : /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* Select */.l6P, {
                label: "H\u01B0\u1EDBng x\u1EED l\xFD",
                value: form.handleDirection,
                options: handleDirOptions,
                onChange: function onChange(e) {
                  return updateField('handleDirection', e.target.value);
                },
                fullWidth: true,
                "data-testid": "incident-field-handleDirection"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: IncidentFormPage_IncidentFormPage_module.field,
              children: isView ? /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* Input */.pde, {
                label: "Tr\u1EA1ng th\xE1i \u0111\u1ECDc",
                value: optionLabel(localReadStatuses, form.readStatus, form.readStatus),
                readOnly: true,
                fullWidth: true,
                "data-testid": "incident-field-readStatus"
              }) : /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* Select */.l6P, {
                label: "Tr\u1EA1ng th\xE1i \u0111\u1ECDc",
                value: form.readStatus,
                options: readStatusOptions,
                onChange: function onChange(e) {
                  return updateField('readStatus', e.target.value);
                },
                fullWidth: true,
                "data-testid": "incident-field-readStatus"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: IncidentFormPage_IncidentFormPage_module.field,
              children: isView ? /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* Input */.pde, {
                label: "Tr\u1EA1ng th\xE1i b\xE1o c\xE1o",
                value: optionLabel(localReportStatuses, form.reportStatus, form.reportStatus),
                readOnly: true,
                fullWidth: true,
                "data-testid": "incident-field-reportStatus"
              }) : /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* Select */.l6P, {
                label: "Tr\u1EA1ng th\xE1i b\xE1o c\xE1o",
                value: form.reportStatus,
                options: reportStatusOptions,
                onChange: function onChange(e) {
                  return updateField('reportStatus', e.target.value);
                },
                fullWidth: true,
                "data-testid": "incident-field-reportStatus"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: IncidentFormPage_IncidentFormPage_module.field,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* Input */.pde, {
                label: "T\xE0i s\u1EA3n / h\u1EA1ng m\u1EE5c",
                value: form.assetLabel,
                readOnly: isView,
                onChange: function onChange(e) {
                  return updateField('assetLabel', e.target.value);
                },
                fullWidth: true,
                "data-testid": "incident-field-assetLabel"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: IncidentFormPage_IncidentFormPage_module.field,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* Input */.pde, {
                label: "Km \u0111\u1EA7u",
                value: form.kmStart,
                readOnly: isView,
                onChange: function onChange(e) {
                  return updateField('kmStart', e.target.value);
                },
                fullWidth: true,
                "data-testid": "incident-field-kmStart"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: IncidentFormPage_IncidentFormPage_module.field,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* Input */.pde, {
                label: "Km cu\u1ED1i",
                value: form.kmEnd,
                readOnly: isView,
                onChange: function onChange(e) {
                  return updateField('kmEnd', e.target.value);
                },
                fullWidth: true,
                "data-testid": "incident-field-kmEnd"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: IncidentFormPage_IncidentFormPage_module.field,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* Input */.pde, {
                label: "Th\u1EDDi ti\u1EBFt",
                value: form.weather,
                readOnly: isView,
                onChange: function onChange(e) {
                  return updateField('weather', e.target.value);
                },
                fullWidth: true,
                "data-testid": "incident-field-weather"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: IncidentFormPage_IncidentFormPage_module.field,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* Input */.pde, {
                label: "AI Detection Id",
                value: form.detectionId,
                readOnly: isView,
                onChange: function onChange(e) {
                  return updateField('detectionId', e.target.value);
                },
                fullWidth: true,
                "data-testid": "incident-field-detectionId"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: IncidentFormPage_IncidentFormPage_module.field,
              children: isView ? /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* Input */.pde, {
                label: "G\xE2y \xF9n t\u1EAFc",
                value: form.causesCongestion ? 'Có' : 'Không',
                readOnly: true,
                fullWidth: true,
                "data-testid": "incident-field-causesCongestion"
              }) : /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* Select */.l6P, {
                label: "G\xE2y \xF9n t\u1EAFc",
                value: form.causesCongestion ? 'true' : 'false',
                options: BOOL_OPTIONS,
                onChange: function onChange(e) {
                  return updateField('causesCongestion', e.target.value === 'true');
                },
                fullWidth: true,
                "data-testid": "incident-field-causesCongestion"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: IncidentFormPage_IncidentFormPage_module.field,
              children: isView ? /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* Input */.pde, {
                label: "C\xF3 GPS",
                value: form.hasGps ? 'Có' : 'Không',
                readOnly: true,
                fullWidth: true,
                "data-testid": "incident-field-hasGps"
              }) : /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* Select */.l6P, {
                label: "C\xF3 GPS",
                value: form.hasGps ? 'true' : 'false',
                options: BOOL_OPTIONS,
                onChange: function onChange(e) {
                  return updateField('hasGps', e.target.value === 'true');
                },
                fullWidth: true,
                "data-testid": "incident-field-hasGps"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: "".concat(IncidentFormPage_IncidentFormPage_module.field, " ").concat(IncidentFormPage_IncidentFormPage_module.spanFull),
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)("label", {
                className: IncidentFormPage_IncidentFormPage_module.label,
                children: ["M\xF4 t\u1EA3", /*#__PURE__*/(0,jsx_runtime.jsx)("textarea", {
                  className: IncidentFormPage_IncidentFormPage_module.textarea,
                  value: form.description,
                  readOnly: isView,
                  onChange: function onChange(e) {
                    return updateField('description', e.target.value);
                  },
                  placeholder: "M\xF4 t\u1EA3 s\u1EF1 c\u1ED1\u2026",
                  "data-testid": "incident-field-description"
                })]
              })
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("section", {
          className: catalog_form_CatalogFormToolbar_module.section,
          "data-zone": isView ? 'media-gallery' : 'upload',
          "data-des-id": "DES-FORM-Z2-MEDIA",
          "data-testid": "".concat(TEST_ID, "-upload"),
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("h3", {
            className: catalog_form_CatalogFormToolbar_module.sectionTitle,
            children: "\u1EA2nh / video s\u1EF1 c\u1ED1"
          }), isView && mediaItems.length === 0 ? /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
            className: IncidentFormPage_IncidentFormPage_module.mediaEmpty,
            "data-testid": "".concat(TEST_ID, "-media-empty"),
            children: "Ch\u01B0a c\xF3 t\u1EC7p \u0111\xEDnh k\xE8m."
          }) : /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: IncidentFormPage_IncidentFormPage_module.mediaUpload,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* LinImageUpload */.oHE, {
              purpose: "incident-media",
              product: "rmms",
              entityType: "incident",
              entityId: currentId !== null && currentId !== void 0 ? currentId : undefined,
              items: mediaItems,
              onChange: isView ? function () {
                return undefined;
              } : onMediaChange,
              maxFiles: INCIDENT_MEDIA_MAX,
              maxBytes: INCIDENT_VIDEO_MAX_BYTES,
              accept: INCIDENT_MEDIA_ACCEPT,
              disabled: isView,
              confirmRemove: mode === 'edit',
              allowRename: !isView,
              labels: INCIDENT_MEDIA_LABELS,
              client: mediaApi,
              testId: "".concat(TEST_ID, "-field-mediaIds")
            })
          })]
        })]
      })]
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
/* harmony default export */ const IncidentFormPage_IncidentFormPage = (IncidentFormPage);
;// ./src/pages/IncidentFormPage/index.ts


/***/ },

/***/ 4439
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NM: () => (/* binding */ incidentListPermissions)
/* harmony export */ });
/* unused harmony exports INCIDENT_PERMS, hasIncidentPermission */
/* harmony import */ var _dev_isPermissionsLocalMode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8495);
/**
 * T-PERM-01 — permission codes for incidents (Auth stub until CommonLib mount).
 */

var INCIDENT_PERMS = {
  read: 'rmms-field:incidents:read',
  create: 'rmms-field:incidents:write',
  update: 'rmms-field:incidents:write',
  delete: 'rmms-field:incidents:write'
};
function hasIncidentPermission(code) {
  if ((0,_dev_isPermissionsLocalMode__WEBPACK_IMPORTED_MODULE_0__/* .isPermissionsLocalModeActive */ .z)()) return true;
  var bag = window.__LINM_PERMS__;
  if (!bag) return true;
  return bag[code] === true;
}
function incidentListPermissions() {
  return {
    canRead: hasIncidentPermission(INCIDENT_PERMS.read),
    canCreate: hasIncidentPermission(INCIDENT_PERMS.create),
    canUpdate: hasIncidentPermission(INCIDENT_PERMS.update),
    canDelete: hasIncidentPermission(INCIDENT_PERMS.delete)
  };
}

/***/ },

/***/ 842
(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Catalog full-page chrome — visual parity with ERP voucher header/toolbar/detail.
   No voucher actions (Phê duyệt / Ghi sổ / pager / money footer). */

.page___He7PK {
  display: grid;
  grid-template-rows: auto minmax(0, 1fr);
  height: 100%;
  min-width: 0;
  min-height: 0;
  max-width: 100%;
  overflow: hidden;
  padding: 0;
  background: var(--color-bg-page, #f5f7fa);
  box-sizing: border-box;
}

.pageFormHeader___SzYRa {
  min-width: 0;
  max-width: 100%;
  margin: 0;
  padding: 16px 16px 0;
  box-sizing: border-box;
  background: var(--color-bg-page, #f5f7fa);
}

.stickyTop___TLLFL {
  position: relative;
  margin: 0;
  padding: 0;
  overflow: visible;
  border: 1px solid var(--color-border-light, #e9ecef);
  border-radius: var(--ds-radius-md, 8px);
  background: var(--ds-color-bg-white, #ffffff);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.toolbarRow___q9qUG {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;
  width: 100%;
  min-height: 36px;
  padding: 16px 20px 12px;
  border-bottom: 1px solid var(--color-border-light, #e9ecef);
}

.toolbarRight___KRBHI {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;
  margin-left: auto;
  justify-content: flex-end;
}

.toolbarBtn___q0sS1 {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 6px 12px;
  font-size: 13px;
  font-weight: 500;
  border: 1px solid var(--color-border, #dee2e6);
  border-radius: var(--ds-radius-md, 4px);
  background: var(--ds-color-bg-white, #fff);
  color: var(--color-text-primary, #212529);
  cursor: pointer;
  white-space: nowrap;
  transition: background 0.15s, border-color 0.15s;
  box-sizing: border-box;
  line-height: 1;
}

.toolbarBtn___q0sS1:hover:not(:disabled) {
  background: var(--color-bg-secondary, #f8f9fa);
  border-color: var(--color-border-dark, #ced4da);
}

.toolbarBtn___q0sS1:disabled {
  opacity: 0.45;
  cursor: not-allowed;
}

.toolbarBtnPrimary___I43BD {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 6px 12px;
  font-size: 13px;
  font-weight: 500;
  border-radius: var(--ds-radius-md, 4px);
  cursor: pointer;
  white-space: nowrap;
  background: var(--color-primary, #0d6efd);
  border: 1px solid var(--color-primary, #0d6efd);
  color: #fff;
  box-sizing: border-box;
  line-height: 1;
}

.toolbarBtnPrimary___I43BD:hover:not(:disabled) {
  background: var(--color-primary-hover, #0b5ed7);
  border-color: var(--color-primary-hover, #0b5ed7);
}

.toolbarBtnPrimary___I43BD:disabled {
  opacity: 0.45;
  cursor: not-allowed;
}

.toolbarBtnDanger___us0RQ {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 6px 12px;
  font-size: 13px;
  font-weight: 500;
  border-radius: var(--ds-radius-md, 4px);
  cursor: pointer;
  white-space: nowrap;
  background: var(--ds-color-bg-white, #fff);
  color: var(--ds-color-danger, #dc3545);
  border: 1px solid var(--ds-color-danger-border, #f5c2c7);
  box-sizing: border-box;
  line-height: 1;
}

.toolbarBtnDanger___us0RQ:hover:not(:disabled) {
  background: var(--ds-color-error-bg, #faeae3);
}

.titleBlock___LfHhk {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 12px 20px 16px;
}

.title___oRixZ {
  margin: 0;
  font-size: 18px;
  font-weight: 700;
  color: var(--color-text-primary, #212529);
}

.editHint___lMaLk {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 4px;
  font-size: 12px;
  color: var(--ds-color-text-tertiary, #6b7280);
  background: var(--ds-color-bg-muted, #f3f4f6);
  border: 1px dashed var(--color-border-light, #e5e7eb);
  padding: 3px 8px;
  border-radius: 6px;
}

.viewHint___RNKZm {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 6px;
  padding: 6px 12px;
  font-size: 13px;
  font-weight: 500;
  color: #854d0e;
  background: #fef9c3;
  border: 1px solid #fde047;
  border-radius: 6px;
  box-shadow: 0 1px 2px rgba(234, 179, 8, 0.15);
}

.viewHint___RNKZm i {
  color: #ca8a04;
}

.pageFormScroll___Gzr35 {
  min-width: 0;
  min-height: 0;
  max-width: 100%;
  margin: 16px 16px 0;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-bottom: 16px;
  -webkit-overflow-scrolling: touch;
}

.formBody___XqcL_ {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.formBody___XqcL_.viewDisabled___LGvdJ .section___pn_BW {
  pointer-events: none;
}

.section___pn_BW {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
  background: var(--ds-color-bg-white, #ffffff);
  border: 1px solid var(--color-border-light, #e9ecef);
  border-radius: 8px;
  min-width: 0;
  overflow-x: visible;
}

.sectionTitle___odXQ2 {
  margin: 0;
  font-size: 13px;
  font-weight: 700;
  color: var(--color-primary, #0d6efd);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--color-border-light, #e9ecef);
}

.banner___AAEBu {
  padding: 8px 16px;
  border-radius: 4px;
  background: #fef2f2;
  color: #b91c1c;
  font-size: 13px;
}

.loading___NrReV {
  padding: 40px;
  text-align: center;
  color: var(--color-text-secondary, #6c757d);
}
`, "",{"version":3,"sources":["webpack://./src/components/catalog-form/CatalogFormToolbar.module.css"],"names":[],"mappings":"AAAA;oEACoE;;AAEpE;EACE,aAAa;EACb,uCAAuC;EACvC,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,eAAe;EACf,gBAAgB;EAChB,UAAU;EACV,yCAAyC;EACzC,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,SAAS;EACT,oBAAoB;EACpB,sBAAsB;EACtB,yCAAyC;AAC3C;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,UAAU;EACV,iBAAiB;EACjB,oDAAoD;EACpD,uCAAuC;EACvC,6CAA6C;EAC7C,0CAA0C;AAC5C;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,eAAe;EACf,QAAQ;EACR,WAAW;EACX,gBAAgB;EAChB,uBAAuB;EACvB,2DAA2D;AAC7D;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,eAAe;EACf,QAAQ;EACR,iBAAiB;EACjB,yBAAyB;AAC3B;;AAEA;EACE,oBAAoB;EACpB,mBAAmB;EACnB,uBAAuB;EACvB,QAAQ;EACR,iBAAiB;EACjB,eAAe;EACf,gBAAgB;EAChB,8CAA8C;EAC9C,uCAAuC;EACvC,0CAA0C;EAC1C,yCAAyC;EACzC,eAAe;EACf,mBAAmB;EACnB,gDAAgD;EAChD,sBAAsB;EACtB,cAAc;AAChB;;AAEA;EACE,8CAA8C;EAC9C,+CAA+C;AACjD;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,oBAAoB;EACpB,mBAAmB;EACnB,uBAAuB;EACvB,QAAQ;EACR,iBAAiB;EACjB,eAAe;EACf,gBAAgB;EAChB,uCAAuC;EACvC,eAAe;EACf,mBAAmB;EACnB,yCAAyC;EACzC,+CAA+C;EAC/C,WAAW;EACX,sBAAsB;EACtB,cAAc;AAChB;;AAEA;EACE,+CAA+C;EAC/C,iDAAiD;AACnD;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,oBAAoB;EACpB,mBAAmB;EACnB,uBAAuB;EACvB,QAAQ;EACR,iBAAiB;EACjB,eAAe;EACf,gBAAgB;EAChB,uCAAuC;EACvC,eAAe;EACf,mBAAmB;EACnB,0CAA0C;EAC1C,sCAAsC;EACtC,wDAAwD;EACxD,sBAAsB;EACtB,cAAc;AAChB;;AAEA;EACE,6CAA6C;AAC/C;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,QAAQ;EACR,uBAAuB;AACzB;;AAEA;EACE,SAAS;EACT,eAAe;EACf,gBAAgB;EAChB,yCAAyC;AAC3C;;AAEA;EACE,oBAAoB;EACpB,mBAAmB;EACnB,QAAQ;EACR,eAAe;EACf,eAAe;EACf,6CAA6C;EAC7C,6CAA6C;EAC7C,qDAAqD;EACrD,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,oBAAoB;EACpB,mBAAmB;EACnB,QAAQ;EACR,eAAe;EACf,iBAAiB;EACjB,eAAe;EACf,gBAAgB;EAChB,cAAc;EACd,mBAAmB;EACnB,yBAAyB;EACzB,kBAAkB;EAClB,6CAA6C;AAC/C;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,eAAe;EACf,mBAAmB;EACnB,gBAAgB;EAChB,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,oBAAoB;EACpB,iCAAiC;AACnC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,aAAa;EACb,6CAA6C;EAC7C,oDAAoD;EACpD,kBAAkB;EAClB,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,SAAS;EACT,eAAe;EACf,gBAAgB;EAChB,oCAAoC;EACpC,yBAAyB;EACzB,qBAAqB;EACrB,mBAAmB;EACnB,2DAA2D;AAC7D;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,mBAAmB;EACnB,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,2CAA2C;AAC7C","sourcesContent":["/* Catalog full-page chrome — visual parity with ERP voucher header/toolbar/detail.\n   No voucher actions (Phê duyệt / Ghi sổ / pager / money footer). */\n\n.page {\n  display: grid;\n  grid-template-rows: auto minmax(0, 1fr);\n  height: 100%;\n  min-width: 0;\n  min-height: 0;\n  max-width: 100%;\n  overflow: hidden;\n  padding: 0;\n  background: var(--color-bg-page, #f5f7fa);\n  box-sizing: border-box;\n}\n\n.pageFormHeader {\n  min-width: 0;\n  max-width: 100%;\n  margin: 0;\n  padding: 16px 16px 0;\n  box-sizing: border-box;\n  background: var(--color-bg-page, #f5f7fa);\n}\n\n.stickyTop {\n  position: relative;\n  margin: 0;\n  padding: 0;\n  overflow: visible;\n  border: 1px solid var(--color-border-light, #e9ecef);\n  border-radius: var(--ds-radius-md, 8px);\n  background: var(--ds-color-bg-white, #ffffff);\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);\n}\n\n.toolbarRow {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 6px;\n  width: 100%;\n  min-height: 36px;\n  padding: 16px 20px 12px;\n  border-bottom: 1px solid var(--color-border-light, #e9ecef);\n}\n\n.toolbarRight {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 6px;\n  margin-left: auto;\n  justify-content: flex-end;\n}\n\n.toolbarBtn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  padding: 6px 12px;\n  font-size: 13px;\n  font-weight: 500;\n  border: 1px solid var(--color-border, #dee2e6);\n  border-radius: var(--ds-radius-md, 4px);\n  background: var(--ds-color-bg-white, #fff);\n  color: var(--color-text-primary, #212529);\n  cursor: pointer;\n  white-space: nowrap;\n  transition: background 0.15s, border-color 0.15s;\n  box-sizing: border-box;\n  line-height: 1;\n}\n\n.toolbarBtn:hover:not(:disabled) {\n  background: var(--color-bg-secondary, #f8f9fa);\n  border-color: var(--color-border-dark, #ced4da);\n}\n\n.toolbarBtn:disabled {\n  opacity: 0.45;\n  cursor: not-allowed;\n}\n\n.toolbarBtnPrimary {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  padding: 6px 12px;\n  font-size: 13px;\n  font-weight: 500;\n  border-radius: var(--ds-radius-md, 4px);\n  cursor: pointer;\n  white-space: nowrap;\n  background: var(--color-primary, #0d6efd);\n  border: 1px solid var(--color-primary, #0d6efd);\n  color: #fff;\n  box-sizing: border-box;\n  line-height: 1;\n}\n\n.toolbarBtnPrimary:hover:not(:disabled) {\n  background: var(--color-primary-hover, #0b5ed7);\n  border-color: var(--color-primary-hover, #0b5ed7);\n}\n\n.toolbarBtnPrimary:disabled {\n  opacity: 0.45;\n  cursor: not-allowed;\n}\n\n.toolbarBtnDanger {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  padding: 6px 12px;\n  font-size: 13px;\n  font-weight: 500;\n  border-radius: var(--ds-radius-md, 4px);\n  cursor: pointer;\n  white-space: nowrap;\n  background: var(--ds-color-bg-white, #fff);\n  color: var(--ds-color-danger, #dc3545);\n  border: 1px solid var(--ds-color-danger-border, #f5c2c7);\n  box-sizing: border-box;\n  line-height: 1;\n}\n\n.toolbarBtnDanger:hover:not(:disabled) {\n  background: var(--ds-color-error-bg, #faeae3);\n}\n\n.titleBlock {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  padding: 12px 20px 16px;\n}\n\n.title {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 700;\n  color: var(--color-text-primary, #212529);\n}\n\n.editHint {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  margin-top: 4px;\n  font-size: 12px;\n  color: var(--ds-color-text-tertiary, #6b7280);\n  background: var(--ds-color-bg-muted, #f3f4f6);\n  border: 1px dashed var(--color-border-light, #e5e7eb);\n  padding: 3px 8px;\n  border-radius: 6px;\n}\n\n.viewHint {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  margin-top: 6px;\n  padding: 6px 12px;\n  font-size: 13px;\n  font-weight: 500;\n  color: #854d0e;\n  background: #fef9c3;\n  border: 1px solid #fde047;\n  border-radius: 6px;\n  box-shadow: 0 1px 2px rgba(234, 179, 8, 0.15);\n}\n\n.viewHint i {\n  color: #ca8a04;\n}\n\n.pageFormScroll {\n  min-width: 0;\n  min-height: 0;\n  max-width: 100%;\n  margin: 16px 16px 0;\n  overflow-y: auto;\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  padding-bottom: 16px;\n  -webkit-overflow-scrolling: touch;\n}\n\n.formBody {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.formBody.viewDisabled .section {\n  pointer-events: none;\n}\n\n.section {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  padding: 16px;\n  background: var(--ds-color-bg-white, #ffffff);\n  border: 1px solid var(--color-border-light, #e9ecef);\n  border-radius: 8px;\n  min-width: 0;\n  overflow-x: visible;\n}\n\n.sectionTitle {\n  margin: 0;\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--color-primary, #0d6efd);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  padding-bottom: 8px;\n  border-bottom: 1px solid var(--color-border-light, #e9ecef);\n}\n\n.banner {\n  padding: 8px 16px;\n  border-radius: 4px;\n  background: #fef2f2;\n  color: #b91c1c;\n  font-size: 13px;\n}\n\n.loading {\n  padding: 40px;\n  text-align: center;\n  color: var(--color-text-secondary, #6c757d);\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"page": `page___He7PK`,
	"pageFormHeader": `pageFormHeader___SzYRa`,
	"stickyTop": `stickyTop___TLLFL`,
	"toolbarRow": `toolbarRow___q9qUG`,
	"toolbarRight": `toolbarRight___KRBHI`,
	"toolbarBtn": `toolbarBtn___q0sS1`,
	"toolbarBtnPrimary": `toolbarBtnPrimary___I43BD`,
	"toolbarBtnDanger": `toolbarBtnDanger___us0RQ`,
	"titleBlock": `titleBlock___LfHhk`,
	"title": `title___oRixZ`,
	"editHint": `editHint___lMaLk`,
	"viewHint": `viewHint___RNKZm`,
	"pageFormScroll": `pageFormScroll___Gzr35`,
	"formBody": `formBody___XqcL_`,
	"viewDisabled": `viewDisabled___LGvdJ`,
	"section": `section___pn_BW`,
	"sectionTitle": `sectionTitle___odXQ2`,
	"banner": `banner___AAEBu`,
	"loading": `loading___NrReV`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);

/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 4962
(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.fields___Vz3iL {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 16px;
  align-items: start;
}

.field___VJDAr {
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
}

.span2___qObC1 {
  grid-column: span 2;
}

.spanFull___IbqyI {
  grid-column: 1 / -1;
}

@media (max-width: 1200px) {
  .fields___Vz3iL {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 720px) {
  .fields___Vz3iL {
    grid-template-columns: 1fr 1fr;
  }

  .span2___qObC1 {
    grid-column: 1 / -1;
  }
}

.fieldInvalid___FUbqc input {
  border-color: #dc3545 !important;
}

.textarea___ozdhk {
  width: 100%;
  min-height: 88px;
  padding: 8px 10px;
  font: inherit;
  border: 1px solid var(--color-border, #dee2e6);
  border-radius: 4px;
  resize: vertical;
  box-sizing: border-box;
}

.label___IeAP9 {
  font-size: 13px;
  font-weight: 500;
  color: var(--color-text-primary, #212529);
}

.mediaGallery___xE6ZG,
.mediaUpload___MoJjF {
  margin-top: 8px;
}

.mediaEmpty___xCGoF {
  margin: 0;
  padding: 12px 0;
  font-size: 13px;
  color: #6c757d;
}
`, "",{"version":3,"sources":["webpack://./src/pages/IncidentFormPage/IncidentFormPage.module.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,gDAAgD;EAChD,SAAS;EACT,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,QAAQ;EACR,YAAY;AACd;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE;IACE,gDAAgD;EAClD;AACF;;AAEA;EACE;IACE,8BAA8B;EAChC;;EAEA;IACE,mBAAmB;EACrB;AACF;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,WAAW;EACX,gBAAgB;EAChB,iBAAiB;EACjB,aAAa;EACb,8CAA8C;EAC9C,kBAAkB;EAClB,gBAAgB;EAChB,sBAAsB;AACxB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,yCAAyC;AAC3C;;AAEA;;EAEE,eAAe;AACjB;;AAEA;EACE,SAAS;EACT,eAAe;EACf,eAAe;EACf,cAAc;AAChB","sourcesContent":[".fields {\n  display: grid;\n  grid-template-columns: repeat(5, minmax(0, 1fr));\n  gap: 16px;\n  align-items: start;\n}\n\n.field {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  min-width: 0;\n}\n\n.span2 {\n  grid-column: span 2;\n}\n\n.spanFull {\n  grid-column: 1 / -1;\n}\n\n@media (max-width: 1200px) {\n  .fields {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n}\n\n@media (max-width: 720px) {\n  .fields {\n    grid-template-columns: 1fr 1fr;\n  }\n\n  .span2 {\n    grid-column: 1 / -1;\n  }\n}\n\n.fieldInvalid :global(input) {\n  border-color: #dc3545 !important;\n}\n\n.textarea {\n  width: 100%;\n  min-height: 88px;\n  padding: 8px 10px;\n  font: inherit;\n  border: 1px solid var(--color-border, #dee2e6);\n  border-radius: 4px;\n  resize: vertical;\n  box-sizing: border-box;\n}\n\n.label {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--color-text-primary, #212529);\n}\n\n.mediaGallery,\n.mediaUpload {\n  margin-top: 8px;\n}\n\n.mediaEmpty {\n  margin: 0;\n  padding: 12px 0;\n  font-size: 13px;\n  color: #6c757d;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"fields": `fields___Vz3iL`,
	"field": `field___VJDAr`,
	"span2": `span2___qObC1`,
	"spanFull": `spanFull___IbqyI`,
	"fieldInvalid": `fieldInvalid___FUbqc`,
	"textarea": `textarea___ozdhk`,
	"label": `label___IeAP9`,
	"mediaGallery": `mediaGallery___xE6ZG`,
	"mediaUpload": `mediaUpload___MoJjF`,
	"mediaEmpty": `mediaEmpty___xCGoF`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);

/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ }

}]);
//# sourceMappingURL=incident-form-page.6cd39868.linm-rmms-field.js.map