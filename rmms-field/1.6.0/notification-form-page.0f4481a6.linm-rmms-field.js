"use strict";
(self["webpackChunkrmms_field"] = self["webpackChunkrmms_field"] || []).push([[3],{

/***/ 1803
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ NotificationFormPage_NotificationFormPage)
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
// EXTERNAL MODULE: ./node_modules/react-redux/dist/react-redux.mjs
var react_redux = __webpack_require__(1468);
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
// EXTERNAL MODULE: ./src/services/notification/notificationService.ts + 1 modules
var notificationService = __webpack_require__(8624);
// EXTERNAL MODULE: ./src/services/notification/permissions.ts
var permissions = __webpack_require__(5162);
// EXTERNAL MODULE: ./src/services/notification/lookups.ts
var lookups = __webpack_require__(6857);
// EXTERNAL MODULE: ./src/demo/opsStore.ts
var opsStore = __webpack_require__(9890);
// EXTERNAL MODULE: ./src/pages/buildRmmsGenericToolbar.tsx
var buildRmmsGenericToolbar = __webpack_require__(5503);
// EXTERNAL MODULE: ./src/components/GiaoViecModal/index.ts + 6 modules
var GiaoViecModal = __webpack_require__(3367);
// EXTERNAL MODULE: ./src/components/TaskChatPanel/TaskChatPanel.tsx + 1 modules
var TaskChatPanel = __webpack_require__(4732);
// EXTERNAL MODULE: ./src/utils/taskPriorityPrefill.ts
var taskPriorityPrefill = __webpack_require__(4106);
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./src/pages/NotificationFormPage/NotificationFormPage.module.css
var NotificationFormPage_module = __webpack_require__(5620);
;// ./src/pages/NotificationFormPage/NotificationFormPage.module.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(NotificationFormPage_module/* default */.A, options);




       /* harmony default export */ const NotificationFormPage_NotificationFormPage_module = (NotificationFormPage_module/* default */.A && NotificationFormPage_module/* default */.A.locals ? NotificationFormPage_module/* default */.A.locals : undefined);

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
;// ./src/pages/NotificationFormPage/NotificationFormPage.tsx




function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,defineProperty/* default */.A)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
;















var REQUIRED = ['title', 'body', 'recipient'];
var TEST_ID = 'rmms-ops-form';
var PAGE_ID = 'ops-form';
var MODE_TITLE = {
  create: 'Tạo chỉ đạo',
  edit: 'Sửa chỉ đạo',
  view: 'Xem chỉ đạo',
  copy: 'Sao chép chỉ đạo'
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
  var _dto$priority, _dto$type, _dto$channel, _dto$sender, _dto$linkRef, _dto$reply, _dto$sentAt, _dto$documentNumber, _dto$direction, _dto$summary, _dto$orgUnitCode, _dto$orgUnitName, _dto$orgUnitCode2, _dto$updatedAt;
  return {
    code: asCopy ? (0,opsStore/* genOpsCode */.E8)((0,opsStore/* loadRows */.kh)()) : dto.code,
    title: asCopy ? "".concat(dto.title, " (sao ch\xE9p)") : dto.title,
    body: dto.body,
    recipient: dto.recipient,
    priority: (_dto$priority = dto.priority) !== null && _dto$priority !== void 0 ? _dto$priority : 'cao',
    type: (_dto$type = dto.type) !== null && _dto$type !== void 0 ? _dto$type : 'tuan-tra',
    status: asCopy ? 'nhap' : dto.status,
    channel: (_dto$channel = dto.channel) !== null && _dto$channel !== void 0 ? _dto$channel : 'inbox',
    sender: (_dto$sender = dto.sender) !== null && _dto$sender !== void 0 ? _dto$sender : 'Hạt trưởng A',
    linkRef: (_dto$linkRef = dto.linkRef) !== null && _dto$linkRef !== void 0 ? _dto$linkRef : '',
    reply: asCopy ? '' : (_dto$reply = dto.reply) !== null && _dto$reply !== void 0 ? _dto$reply : '',
    sentAt: (_dto$sentAt = dto.sentAt) !== null && _dto$sentAt !== void 0 ? _dto$sentAt : new Date().toISOString(),
    isUnread: asCopy ? true : Boolean(dto.isUnread),
    documentNumber: (_dto$documentNumber = dto.documentNumber) !== null && _dto$documentNumber !== void 0 ? _dto$documentNumber : '',
    direction: (_dto$direction = dto.direction) !== null && _dto$direction !== void 0 ? _dto$direction : 'di',
    summary: (_dto$summary = dto.summary) !== null && _dto$summary !== void 0 ? _dto$summary : '',
    orgUnitCode: (_dto$orgUnitCode = dto.orgUnitCode) !== null && _dto$orgUnitCode !== void 0 ? _dto$orgUnitCode : 'cc2',
    orgUnitName: (_dto$orgUnitName = dto.orgUnitName) !== null && _dto$orgUnitName !== void 0 ? _dto$orgUnitName : (0,lookups/* lookupLabel */.ZX)(lookups/* ORG_UNIT_LOOKUP */.ne, (_dto$orgUnitCode2 = dto.orgUnitCode) !== null && _dto$orgUnitCode2 !== void 0 ? _dto$orgUnitCode2 : 'cc2'),
    updatedAt: (_dto$updatedAt = dto.updatedAt) !== null && _dto$updatedAt !== void 0 ? _dto$updatedAt : '',
    isActive: dto.isActive !== false
  };
}
function formatSentAt(iso) {
  if (!iso) return '—';
  var d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleString('vi-VN');
}
var CREATE_SLUGS = new Set(['new', 'tao-moi']);
var NotificationFormPage = function NotificationFormPage() {
  var _useParams = (0,dist/* useParams */.g)(),
    id = _useParams.id;
  var _useLocation = (0,dist/* useLocation */.zy)(),
    pathname = _useLocation.pathname;
  var _useSearchParams = (0,react_router_dom_dist/* useSearchParams */.ok)(),
    _useSearchParams2 = (0,slicedToArray/* default */.A)(_useSearchParams, 1),
    searchParams = _useSearchParams2[0];
  var navigate = (0,navigateInAppPath/* useInAppNavigate */.lc)();
  var dispatch = (0,react_redux/* useDispatch */.wA)();
  var perms = (0,permissions/* opsListPermissions */.tI)();
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
  var _useState = (0,external_react_.useState)(_objectSpread({}, opsStore/* EMPTY_FORM */.z3)),
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
              setForm(_objectSpread(_objectSpread({}, opsStore/* EMPTY_FORM */.z3), {}, {
                code: '(tự sinh)',
                sentAt: new Date().toISOString(),
                updatedAt: ''
              }));
              return _context.abrupt("return");
            case 2:
              sourceId = mode === 'copy' ? copyFrom !== null && copyFrom !== void 0 ? copyFrom : id : id;
              if (sourceId) {
                _context.next = 3;
                break;
              }
              navigate('/chi-dao');
              return _context.abrupt("return");
            case 3:
              _context.next = 4;
              return notificationService/* notificationService */.l.getById(sourceId);
            case 4:
              dto = _context.sent;
              if (!cancelled) {
                _context.next = 5;
                break;
              }
              return _context.abrupt("return");
            case 5:
              if (mode === 'view' && dto.isUnread) {
                void notificationService/* notificationService */.l.markRead(dto.id);
              }
              setCurrentId(mode === 'copy' ? null : dto.id);
              setForm(fromDto(dto, mode === 'copy'));
              _context.next = 7;
              break;
            case 6:
              _context.prev = 6;
              _t = _context["catch"](1);
              if (!cancelled) {
                (0,linm_web_common_components_dist/* dispatchAppToast */.tWi)(dispatch, {
                  message: _t instanceof Error ? _t.message : 'Không tải được chỉ đạo. Quay lại danh sách.',
                  type: 'error'
                });
                navigate('/chi-dao');
              }
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
  }, [mode, id, copyFrom, navigate, dispatch]);
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
    navigate('/chi-dao');
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
              var val = snapshot[key];
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
              body: snapshot.body.trim(),
              recipient: snapshot.recipient,
              priority: snapshot.priority,
              type: snapshot.type,
              status: statusToSave,
              channel: snapshot.channel,
              sender: snapshot.sender.trim() || undefined,
              linkRef: snapshot.linkRef.trim() || undefined,
              reply: snapshot.reply.trim() || undefined,
              sentAt: snapshot.sentAt,
              documentNumber: snapshot.documentNumber.trim() || undefined,
              direction: snapshot.direction || undefined,
              summary: snapshot.summary.trim() || undefined,
              orgUnitCode: snapshot.orgUnitCode || undefined,
              orgUnitName: snapshot.orgUnitName || undefined
            };
            if (!(mode === 'edit' && currentId)) {
              _context2.next = 7;
              break;
            }
            _context2.next = 6;
            return notificationService/* notificationService */.l.update(currentId, payload);
          case 6:
            _context2.next = 8;
            break;
          case 7:
            _context2.next = 8;
            return notificationService/* notificationService */.l.create(payload);
          case 8:
            setDirty(false);
            navigate('/chi-dao');
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
  var clearBody = function clearBody() {
    if (isView) return;
    updateField('body', '');
    updateField('reply', '');
  };
  var fieldClass = function fieldClass(key) {
    return [NotificationFormPage_NotificationFormPage_module.field, invalid.has(key) ? NotificationFormPage_NotificationFormPage_module.fieldInvalid : ''].filter(Boolean).join(' ');
  };
  var toolbar = (0,buildRmmsGenericToolbar/* buildRmmsDetailToolbar */.aX)({
    testIdPrefix: TEST_ID,
    onBack: goList,
    right: /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [isView && currentId && perms.canUpdate ? (0,buildRmmsGenericToolbar/* rmmsFormActionButton */.Oo)({
        testId: 'ops-btn-to-edit',
        label: 'Sửa',
        icon: 'fas fa-pen',
        onClick: function onClick() {
          return navigate("/chi-dao/".concat(encodeURIComponent(currentId), "?mode=edit"));
        }
      }) : null, isView && currentId && perms.canCreate ? (0,buildRmmsGenericToolbar/* rmmsFormActionButton */.Oo)({
        testId: 'ops-btn-to-copy',
        label: 'Sao chép',
        icon: 'fas fa-copy',
        onClick: function onClick() {
          return navigate("/chi-dao/tao-moi?copyFrom=".concat(encodeURIComponent(currentId)));
        }
      }) : null, isView && currentId ? (0,buildRmmsGenericToolbar/* rmmsFormActionButton */.Oo)({
        testId: 'ops-btn-assign',
        label: 'Giao việc',
        icon: 'fas fa-tasks',
        onClick: function onClick() {
          var _form$priority, _form$priority2;
          var prefill = (0,taskPriorityPrefill/* opsPriorityPrefill */.bD)((_form$priority = form.priority) !== null && _form$priority !== void 0 ? _form$priority : 'cao');
          setGiaoViecContext({
            source: 'ops',
            sourceEntityType: 'ops_directive',
            sourceEntityId: currentId,
            opsCode: form.code,
            title: form.title || "X\u1EED l\xFD ch\u1EC9 \u0111\u1EA1o \u2014 ".concat(form.code),
            priorityLabel: (0,lookups/* lookupLabel */.ZX)(lookups/* PRIORITY_LOOKUP */.yM, (_form$priority2 = form.priority) !== null && _form$priority2 !== void 0 ? _form$priority2 : ''),
            description: form.summary || form.body,
            priority: prefill.priority,
            assignmentStrategy: 'direct',
            dueDate: prefill.dueDate
          });
          setGiaoViecOpen(true);
        }
      }) : null, !isView ? (0,buildRmmsGenericToolbar/* rmmsFormActionButton */.Oo)({
        testId: 'ops-btn-cancel',
        label: 'Hủy',
        icon: 'fas fa-times',
        onClick: goList
      }) : null, !isView ? (0,buildRmmsGenericToolbar/* rmmsFormActionButton */.Oo)({
        testId: 'ops-btn-clear',
        label: 'Xóa nội dung',
        icon: 'fas fa-eraser',
        onClick: clearBody
      }) : null, !isView ? (0,buildRmmsGenericToolbar/* rmmsFormActionButton */.Oo)({
        testId: 'ops-btn-draft',
        label: 'Lưu nháp',
        icon: 'fas fa-file',
        onClick: function onClick() {
          return void handleSave('nhap');
        },
        loading: saving
      }) : null, !isView ? (0,buildRmmsGenericToolbar/* rmmsFormActionButton */.Oo)({
        testId: 'ops-btn-send',
        label: 'Gửi chỉ đạo',
        icon: 'fas fa-paper-plane',
        variant: 'primary',
        onClick: function onClick() {
          return void handleSave('da-gui');
        },
        loading: saving
      }) : null]
    })
  });
  var viewBody = /*#__PURE__*/(0,jsx_runtime.jsxs)("dl", {
    className: NotificationFormPage_NotificationFormPage_module.viewGrid,
    "data-form-cols": "5",
    "data-testid": "".concat(TEST_ID, "-view"),
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("dt", {
        children: "M\xE3 ch\u1EC9 \u0111\u1EA1o"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("dd", {
        children: form.code || '—'
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("dt", {
        children: "S\u1ED1 c\xF4ng v\u0103n"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("dd", {
        children: form.documentNumber || '—'
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("dt", {
        children: "Chi\u1EC1u"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("dd", {
        children: (0,lookups/* lookupLabel */.ZX)(lookups/* DIRECTION_LOOKUP */.Ze, form.direction)
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("dt", {
        children: "\u0110\u01A1n v\u1ECB"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("dd", {
        children: form.orgUnitName || (0,lookups/* lookupLabel */.ZX)(lookups/* ORG_UNIT_LOOKUP */.ne, form.orgUnitCode) || '—'
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("dt", {
        children: "Tr\u1EA1ng th\xE1i"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("dd", {
        children: (0,lookups/* lookupLabel */.ZX)(lookups/* STATUS_LOOKUP */.cG, form.status)
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: NotificationFormPage_NotificationFormPage_module.spanFull,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("dt", {
        children: "Tr\xEDch y\u1EBFu"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("dd", {
        children: form.summary || '—'
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("dt", {
        children: "Ng\u01B0\u1EDDi g\u1EEDi"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("dd", {
        children: form.sender || '—'
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("dt", {
        children: "Th\u1EDDi gian g\u1EEDi"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("dd", {
        children: formatSentAt(form.sentAt)
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("dt", {
        children: "Ng\u01B0\u1EDDi nh\u1EADn / \u0111\u1ED9i"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("dd", {
        children: (0,lookups/* lookupLabel */.ZX)(lookups/* RECIPIENT_LOOKUP */.Jn, form.recipient)
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("dt", {
        children: "\u0110\u1ED9 \u01B0u ti\xEAn"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("dd", {
        children: (0,lookups/* lookupLabel */.ZX)(lookups/* PRIORITY_LOOKUP */.yM, form.priority)
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("dt", {
        children: "Lo\u1EA1i ch\u1EC9 \u0111\u1EA1o"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("dd", {
        children: (0,lookups/* lookupLabel */.ZX)(lookups/* TYPE_LOOKUP */._E, form.type)
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: NotificationFormPage_NotificationFormPage_module.spanFull,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("dt", {
        children: "Ti\xEAu \u0111\u1EC1"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("dd", {
        children: form.title || '—'
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: NotificationFormPage_NotificationFormPage_module.spanFull,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("dt", {
        children: "N\u1ED9i dung"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("dd", {
        children: form.body || '—'
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("dt", {
        children: "K\xEAnh g\u1EEDi"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("dd", {
        children: (0,lookups/* lookupLabel */.ZX)(lookups/* CHANNEL_LOOKUP */.LO, form.channel)
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: NotificationFormPage_NotificationFormPage_module.span2,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("dt", {
        children: "Li\xEAn k\u1EBFt ngu\u1ED3n"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("dd", {
        children: form.linkRef || '—'
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: NotificationFormPage_NotificationFormPage_module.spanFull,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("dt", {
        children: "Ph\u1EA3n h\u1ED3i thread (P2)"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("dd", {
        children: form.reply || '—'
      })]
    })]
  });
  var editBody = /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: NotificationFormPage_NotificationFormPage_module.z2,
    "data-testid": "ops-form-z2",
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("section", {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("h3", {
        className: NotificationFormPage_NotificationFormPage_module.sectionTitle,
        children: "Th\xF4ng tin ch\u1EC9 \u0111\u1EA1o"
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: NotificationFormPage_NotificationFormPage_module.fields,
        "data-form-cols": "5",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: fieldClass('code'),
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* Input */.pde, {
            label: "M\xE3 ch\u1EC9 \u0111\u1EA1o",
            value: form.code,
            disabled: true,
            fullWidth: true,
            "data-testid": "ops-field-code"
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: NotificationFormPage_NotificationFormPage_module.field,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* Input */.pde, {
            label: "S\u1ED1 c\xF4ng v\u0103n",
            value: form.documentNumber,
            onChange: function onChange(e) {
              return updateField('documentNumber', e.target.value);
            },
            fullWidth: true,
            "data-testid": "ops-field-documentNumber"
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: NotificationFormPage_NotificationFormPage_module.field,
          "data-testid": "ops-field-direction",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* SearchInput */.DOo, {
            label: "Chi\u1EC1u",
            config: lookups/* DIRECTION_LOOKUP_CONFIG */.ct,
            value: form.direction,
            primaryDisplay: (0,lookups/* lookupLabel */.ZX)(lookups/* DIRECTION_LOOKUP */.Ze, form.direction),
            showSecondaryInput: false,
            onChange: function onChange(item) {
              return updateField('direction', item.value);
            },
            onClear: function onClear() {
              return updateField('direction', '');
            }
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: NotificationFormPage_NotificationFormPage_module.field,
          "data-testid": "ops-field-orgUnit",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* SearchInput */.DOo, {
            label: "\u0110\u01A1n v\u1ECB",
            config: lookups/* ORG_UNIT_LOOKUP_CONFIG */.yh,
            value: form.orgUnitCode,
            primaryDisplay: form.orgUnitName || (0,lookups/* lookupLabel */.ZX)(lookups/* ORG_UNIT_LOOKUP */.ne, form.orgUnitCode),
            showSecondaryInput: false,
            onChange: function onChange(item) {
              setDirty(true);
              setForm(function (prev) {
                return _objectSpread(_objectSpread({}, prev), {}, {
                  orgUnitCode: item.value,
                  orgUnitName: (0,lookups/* lookupLabel */.ZX)(lookups/* ORG_UNIT_LOOKUP */.ne, item.value)
                });
              });
            },
            onClear: function onClear() {
              setDirty(true);
              setForm(function (prev) {
                return _objectSpread(_objectSpread({}, prev), {}, {
                  orgUnitCode: '',
                  orgUnitName: ''
                });
              });
            }
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: fieldClass('status'),
          "data-testid": "ops-field-status",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* SearchInput */.DOo, {
            label: "Tr\u1EA1ng th\xE1i",
            config: lookups/* STATUS_LOOKUP_CONFIG */.rV,
            value: form.status,
            primaryDisplay: (0,lookups/* lookupLabel */.ZX)(lookups/* STATUS_LOOKUP */.cG, form.status),
            showSecondaryInput: false,
            onChange: function onChange(item) {
              return updateField('status', item.value);
            },
            onClear: function onClear() {
              return updateField('status', '');
            }
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "".concat(NotificationFormPage_NotificationFormPage_module.field, " ").concat(NotificationFormPage_NotificationFormPage_module.spanFull),
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("label", {
            className: NotificationFormPage_NotificationFormPage_module.label,
            children: ["Tr\xEDch y\u1EBFu", /*#__PURE__*/(0,jsx_runtime.jsx)("textarea", {
              className: NotificationFormPage_NotificationFormPage_module.textarea,
              value: form.summary,
              onChange: function onChange(e) {
                return updateField('summary', e.target.value);
              },
              placeholder: "Tr\xEDch y\u1EBFu c\xF4ng v\u0103n\u2026",
              "data-testid": "ops-field-summary"
            })]
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: NotificationFormPage_NotificationFormPage_module.field,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* Input */.pde, {
            label: "Ng\u01B0\u1EDDi g\u1EEDi",
            value: form.sender,
            onChange: function onChange(e) {
              return updateField('sender', e.target.value);
            },
            fullWidth: true,
            "data-testid": "ops-field-sender"
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: fieldClass('sentAt'),
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* Input */.pde, {
            label: "Th\u1EDDi gian g\u1EEDi",
            type: "datetime-local",
            value: toLocalInput(form.sentAt),
            onChange: function onChange(e) {
              return updateField('sentAt', fromLocalInput(e.target.value));
            },
            fullWidth: true,
            "data-testid": "ops-field-sentAt"
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: fieldClass('recipient'),
          "data-testid": "ops-field-recipient",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* SearchInput */.DOo, {
            label: "Ng\u01B0\u1EDDi nh\u1EADn / \u0111\u1ED9i",
            required: true,
            config: lookups/* RECIPIENT_LOOKUP_CONFIG */.Oj,
            value: form.recipient,
            primaryDisplay: (0,lookups/* lookupLabel */.ZX)(lookups/* RECIPIENT_LOOKUP */.Jn, form.recipient),
            showSecondaryInput: false,
            onChange: function onChange(item) {
              return updateField('recipient', item.value);
            },
            onClear: function onClear() {
              return updateField('recipient', '');
            },
            error: invalid.has('recipient') ? 'Bắt buộc' : undefined
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: NotificationFormPage_NotificationFormPage_module.field,
          "data-testid": "ops-field-priority",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* SearchInput */.DOo, {
            label: "\u0110\u1ED9 \u01B0u ti\xEAn",
            config: lookups/* PRIORITY_LOOKUP_CONFIG */.PW,
            value: form.priority,
            primaryDisplay: (0,lookups/* lookupLabel */.ZX)(lookups/* PRIORITY_LOOKUP */.yM, form.priority),
            showSecondaryInput: false,
            onChange: function onChange(item) {
              return updateField('priority', item.value);
            },
            onClear: function onClear() {
              return updateField('priority', '');
            }
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: NotificationFormPage_NotificationFormPage_module.field,
          "data-testid": "ops-field-type",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* SearchInput */.DOo, {
            label: "Lo\u1EA1i ch\u1EC9 \u0111\u1EA1o",
            config: lookups/* TYPE_LOOKUP_CONFIG */.JZ,
            value: form.type,
            primaryDisplay: (0,lookups/* lookupLabel */.ZX)(lookups/* TYPE_LOOKUP */._E, form.type),
            showSecondaryInput: false,
            onChange: function onChange(item) {
              return updateField('type', item.value);
            },
            onClear: function onClear() {
              return updateField('type', '');
            }
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "".concat(fieldClass('title'), " ").concat(NotificationFormPage_NotificationFormPage_module.spanFull),
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* Input */.pde, {
            label: "Ti\xEAu \u0111\u1EC1",
            required: true,
            value: form.title,
            onChange: function onChange(e) {
              return updateField('title', e.target.value);
            },
            fullWidth: true,
            error: invalid.has('title') ? 'Bắt buộc' : undefined,
            "data-testid": "ops-field-title"
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "".concat(fieldClass('body'), " ").concat(NotificationFormPage_NotificationFormPage_module.spanFull),
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("label", {
            className: NotificationFormPage_NotificationFormPage_module.label,
            children: ["N\u1ED9i dung ", /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
              className: NotificationFormPage_NotificationFormPage_module.req,
              children: "*"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("textarea", {
              className: NotificationFormPage_NotificationFormPage_module.textarea,
              value: form.body,
              onChange: function onChange(e) {
                return updateField('body', e.target.value);
              },
              placeholder: "N\u1ED9i dung ch\u1EC9 \u0111\u1EA1o\u2026",
              "data-testid": "ops-field-body"
            })]
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: NotificationFormPage_NotificationFormPage_module.field,
          "data-testid": "ops-field-channel",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* SearchInput */.DOo, {
            label: "K\xEAnh g\u1EEDi",
            config: lookups/* CHANNEL_LOOKUP_CONFIG */.mH,
            value: form.channel,
            primaryDisplay: (0,lookups/* lookupLabel */.ZX)(lookups/* CHANNEL_LOOKUP */.LO, form.channel),
            showSecondaryInput: false,
            onChange: function onChange(item) {
              return updateField('channel', item.value);
            },
            onClear: function onClear() {
              return updateField('channel', '');
            }
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "".concat(NotificationFormPage_NotificationFormPage_module.field, " ").concat(NotificationFormPage_NotificationFormPage_module.span2),
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* Input */.pde, {
            label: "Li\xEAn k\u1EBFt ngu\u1ED3n (INC/WO/PAT)",
            value: form.linkRef,
            onChange: function onChange(e) {
              return updateField('linkRef', e.target.value);
            },
            fullWidth: true,
            "data-testid": "ops-field-linkRef"
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "".concat(NotificationFormPage_NotificationFormPage_module.field, " ").concat(NotificationFormPage_NotificationFormPage_module.spanFull),
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("label", {
            className: NotificationFormPage_NotificationFormPage_module.label,
            children: ["Ph\u1EA3n h\u1ED3i thread (P2)", /*#__PURE__*/(0,jsx_runtime.jsx)("textarea", {
              className: NotificationFormPage_NotificationFormPage_module.textarea,
              value: form.reply,
              onChange: function onChange(e) {
                return updateField('reply', e.target.value);
              },
              placeholder: "Ph\u1EA3n h\u1ED3i\u2026",
              "data-testid": "ops-field-reply"
            })]
          })
        })]
      })]
    })
  });
  (0,useShellPageTitle/* useShellPageTitle */.D)(MODE_TITLE[mode]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: NotificationFormPage_NotificationFormPage_module.page,
    "data-testid": "".concat(TEST_ID, "-page"),
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* LinPageHeader */.mhJ, {
      pageId: PAGE_ID,
      testIdPrefix: TEST_ID,
      title: MODE_TITLE[mode],
      titleIconClass: "fas fa-bullhorn",
      hint: "Ch\u1EC9 \u0111\u1EA1o \u0111i\u1EC1u h\xE0nh \xB7 inbox Notification"
    }), toolbar, loading ? /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: NotificationFormPage_NotificationFormPage_module.loading,
      "data-testid": "ops-form-loading",
      children: "\u0110ang t\u1EA3i\u2026"
    }) : /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [showBanner ? /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: NotificationFormPage_NotificationFormPage_module.banner,
        "data-testid": "".concat(TEST_ID, "-banner"),
        children: "Vui l\xF2ng nh\u1EADp \u0111\u1EE7 c\xE1c tr\u01B0\u1EDDng b\u1EAFt bu\u1ED9c (ti\xEAu \u0111\u1EC1, n\u1ED9i dung, ng\u01B0\u1EDDi nh\u1EADn)."
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
/* harmony default export */ const NotificationFormPage_NotificationFormPage = (NotificationFormPage);
;// ./src/pages/NotificationFormPage/index.ts


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

/***/ 5620
(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.page___wOnu7 {
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

.actions___bLVat {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
}

.banner___D5NCF {
  padding: 8px 16px;
  border-radius: 4px;
  background: #fef2f2;
  color: #b91c1c;
  font-size: 13px;
}

.z2___EYyXa {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.sectionTitle___ddHsS {
  margin: 0 0 12px;
  font-size: 13px;
  font-weight: 700;
  color: #0d6efd;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  padding-bottom: 8px;
  border-bottom: 1px solid #e9ecef;
}

.fields___a3rVl,
.viewGrid___kBwdy {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 16px;
  align-items: start;
}

.field___x2Bc3 {
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
}

.field___x2Bc3 > * {
  width: 100%;
  min-width: 0;
}

.span2___dgYPP {
  grid-column: span 2;
}

.spanFull___GkaL0 {
  grid-column: 1 / -1;
}

@media (max-width: 1200px) {
  .fields___a3rVl,
  .viewGrid___kBwdy {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 720px) {
  .fields___a3rVl,
  .viewGrid___kBwdy {
    grid-template-columns: 1fr 1fr;
  }

  .span2___dgYPP {
    grid-column: 1 / -1;
  }
}

.fieldInvalid___TOMu3 input,
.fieldInvalid___TOMu3 textarea {
  border-color: #dc3545 !important;
}

.textarea___kZVve {
  min-height: 96px;
  width: 100%;
  box-sizing: border-box;
  padding: 8px;
  border: 1px solid #bababe;
  border-radius: 4px;
  font: inherit;
  resize: vertical;
}

.label___hlPH0 {
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 13px;
  color: #6c757d;
}

.req___AvFhx {
  color: #dc3545;
}

.viewGrid___kBwdy dt {
  margin: 0 0 4px;
  font-size: 13px;
  color: #6c757d;
}

.viewGrid___kBwdy dd {
  margin: 0;
  font-size: 14px;
  white-space: pre-wrap;
}

.z3___D2Hdv {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  width: 100%;
}

.z3___D2Hdv button {
  min-width: 100px;
}

@media (max-width: 640px) {
  .z3___D2Hdv {
    flex-direction: column-reverse;
    align-items: stretch;
  }

  .z3___D2Hdv button {
    width: 100%;
    justify-content: center;
  }
}

.loading___KYRsX {
  padding: 16px;
  text-align: center;
  color: #6c757d;
}
`, "",{"version":3,"sources":["webpack://./src/pages/NotificationFormPage/NotificationFormPage.module.css"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,aAAa;EACb,mBAAmB;EACnB,cAAc;EACd,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,eAAe;EACf,QAAQ;AACV;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,mBAAmB;EACnB,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,gBAAgB;EAChB,cAAc;EACd,yBAAyB;EACzB,qBAAqB;EACrB,mBAAmB;EACnB,gCAAgC;AAClC;;AAEA;;EAEE,aAAa;EACb,gDAAgD;EAChD,SAAS;EACT,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,QAAQ;EACR,YAAY;AACd;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE;;IAEE,gDAAgD;EAClD;AACF;;AAEA;EACE;;IAEE,8BAA8B;EAChC;;EAEA;IACE,mBAAmB;EACrB;AACF;;AAEA;;EAEE,gCAAgC;AAClC;;AAEA;EACE,gBAAgB;EAChB,WAAW;EACX,sBAAsB;EACtB,YAAY;EACZ,yBAAyB;EACzB,kBAAkB;EAClB,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,QAAQ;EACR,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,eAAe;EACf,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,SAAS;EACT,eAAe;EACf,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,yBAAyB;EACzB,mBAAmB;EACnB,eAAe;EACf,QAAQ;EACR,WAAW;AACb;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE;IACE,8BAA8B;IAC9B,oBAAoB;EACtB;;EAEA;IACE,WAAW;IACX,uBAAuB;EACzB;AACF;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,cAAc;AAChB","sourcesContent":[".page {\n  height: 100%;\n  min-height: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  padding: 16px;\n  background: #f5f7fa;\n  color: #1a1a1a;\n  overflow: auto;\n}\n\n.actions {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n\n.banner {\n  padding: 8px 16px;\n  border-radius: 4px;\n  background: #fef2f2;\n  color: #b91c1c;\n  font-size: 13px;\n}\n\n.z2 {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.sectionTitle {\n  margin: 0 0 12px;\n  font-size: 13px;\n  font-weight: 700;\n  color: #0d6efd;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  padding-bottom: 8px;\n  border-bottom: 1px solid #e9ecef;\n}\n\n.fields,\n.viewGrid {\n  display: grid;\n  grid-template-columns: repeat(5, minmax(0, 1fr));\n  gap: 16px;\n  align-items: start;\n}\n\n.field {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  min-width: 0;\n}\n\n.field > :global(*) {\n  width: 100%;\n  min-width: 0;\n}\n\n.span2 {\n  grid-column: span 2;\n}\n\n.spanFull {\n  grid-column: 1 / -1;\n}\n\n@media (max-width: 1200px) {\n  .fields,\n  .viewGrid {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n}\n\n@media (max-width: 720px) {\n  .fields,\n  .viewGrid {\n    grid-template-columns: 1fr 1fr;\n  }\n\n  .span2 {\n    grid-column: 1 / -1;\n  }\n}\n\n.fieldInvalid :global(input),\n.fieldInvalid :global(textarea) {\n  border-color: #dc3545 !important;\n}\n\n.textarea {\n  min-height: 96px;\n  width: 100%;\n  box-sizing: border-box;\n  padding: 8px;\n  border: 1px solid #bababe;\n  border-radius: 4px;\n  font: inherit;\n  resize: vertical;\n}\n\n.label {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  font-size: 13px;\n  color: #6c757d;\n}\n\n.req {\n  color: #dc3545;\n}\n\n.viewGrid dt {\n  margin: 0 0 4px;\n  font-size: 13px;\n  color: #6c757d;\n}\n\n.viewGrid dd {\n  margin: 0;\n  font-size: 14px;\n  white-space: pre-wrap;\n}\n\n.z3 {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 8px;\n  width: 100%;\n}\n\n.z3 :global(button) {\n  min-width: 100px;\n}\n\n@media (max-width: 640px) {\n  .z3 {\n    flex-direction: column-reverse;\n    align-items: stretch;\n  }\n\n  .z3 :global(button) {\n    width: 100%;\n    justify-content: center;\n  }\n}\n\n.loading {\n  padding: 16px;\n  text-align: center;\n  color: #6c757d;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"page": `page___wOnu7`,
	"actions": `actions___bLVat`,
	"banner": `banner___D5NCF`,
	"z2": `z2___EYyXa`,
	"sectionTitle": `sectionTitle___ddHsS`,
	"fields": `fields___a3rVl`,
	"viewGrid": `viewGrid___kBwdy`,
	"field": `field___x2Bc3`,
	"span2": `span2___dgYPP`,
	"spanFull": `spanFull___GkaL0`,
	"fieldInvalid": `fieldInvalid___TOMu3`,
	"textarea": `textarea___kZVve`,
	"label": `label___hlPH0`,
	"req": `req___AvFhx`,
	"z3": `z3___D2Hdv`,
	"loading": `loading___KYRsX`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);

/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ }

}]);
//# sourceMappingURL=notification-form-page.0f4481a6.linm-rmms-field.js.map