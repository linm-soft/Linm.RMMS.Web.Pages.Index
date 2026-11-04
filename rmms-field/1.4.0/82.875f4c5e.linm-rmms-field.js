"use strict";
(self["webpackChunkrmms_field"] = self["webpackChunkrmms_field"] || []).push([[82],{

/***/ 9466
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  y: () => (/* binding */ ChatSectionHost)
});

// UNUSED EXPORTS: default

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__(296);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(4726);
// EXTERNAL MODULE: ./node_modules/@linm-soft-org/linm-web-common-components/dist/index.js + 583 modules
var dist = __webpack_require__(8755);
// EXTERNAL MODULE: ./src/services/task/origin.ts
var origin = __webpack_require__(2292);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js + 2 modules
var defineProperty = __webpack_require__(4980);
// EXTERNAL MODULE: ./src/dev/isStandalone.ts
var isStandalone = __webpack_require__(7024);
// EXTERNAL MODULE: ./src/utils/platformTaskUrls.ts
var platformTaskUrls = __webpack_require__(9661);
;// ./src/parcels/messageParcelConfig.ts





/** SystemJS key — Message MFE `yarn start` bundle, không file: source. */
var CHAT_SECTION_PARCEL = {
  moduleName: '@linm/message',
  exportName: 'ChatSectionParcel'
};
var RMMS_MESSAGE_PREFIX_MAP = (0,defineProperty/* default */.A)({}, origin/* RMMS_TASK_SYSTEM_CODE */.K, {
  task: 'tasks',
  incident: 'su-co'
});
function rmmsTaskRoute(id) {
  var path = "/platform-task/cv/".concat(encodeURIComponent(id));
  return isStandalone/* isStandalone */.Q ? "".concat(platformTaskUrls/* PLATFORM_TASK_STD_ORIGIN */.ZV).concat(path) : path;
}
var RMMS_MESSAGE_ROUTE_MAP = {
  task: rmmsTaskRoute,
  incident: function incident(id) {
    return "/su-co/".concat(id);
  }
};
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./src/components/ChatSectionHost/ChatSectionHost.module.css
var ChatSectionHost_module = __webpack_require__(4220);
;// ./src/components/ChatSectionHost/ChatSectionHost.module.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(ChatSectionHost_module/* default */.A, options);




       /* harmony default export */ const ChatSectionHost_ChatSectionHost_module = (ChatSectionHost_module/* default */.A && ChatSectionHost_module/* default */.A.locals ? ChatSectionHost_module/* default */.A.locals : undefined);

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
;// ./src/components/ChatSectionHost/ChatSectionHost.tsx







var ChatSectionHost = function ChatSectionHost(_ref) {
  var taskId = _ref.taskId,
    onNavigate = _ref.onNavigate;
  var containerRef = (0,external_react_.useRef)(null);
  var _useState = (0,external_react_.useState)(false),
    _useState2 = (0,slicedToArray/* default */.A)(_useState, 2),
    failed = _useState2[0],
    setFailed = _useState2[1];
  (0,external_react_.useEffect)(function () {
    if (!taskId) return;
    setFailed(false);
    var cancelled = false;
    var parcel = null;
    var timer = window.setTimeout(function () {
      var host = containerRef.current;
      if (!host) return;
      void (0,dist/* mountParcel */.vEu)({
        link: CHAT_SECTION_PARCEL,
        domElement: host,
        customProps: {
          entityType: 'task',
          entityId: taskId,
          onNavigate: onNavigate,
          mode: 'both',
          routeMap: RMMS_MESSAGE_ROUTE_MAP,
          systemCode: origin/* RMMS_TASK_SYSTEM_CODE */.K,
          prefixMap: RMMS_MESSAGE_PREFIX_MAP
        }
      }).then(function (p) {
        if (cancelled) {
          void (0,dist/* unmountParcel */.w6T)(p);
          return;
        }
        parcel = p;
      }).catch(function () {
        if (!cancelled) setFailed(true);
      });
    }, 0);
    return function () {
      cancelled = true;
      window.clearTimeout(timer);
      void (0,dist/* unmountParcel */.w6T)(parcel);
    };
  }, [taskId, onNavigate]);
  if (failed) {
    return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: ChatSectionHost_ChatSectionHost_module.fallback,
      role: "alert",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("i", {
        className: "fas fa-comments"
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
        children: ["Kh\xF4ng t\u1EA3i \u0111\u01B0\u1EE3c ChatSectionParcel. Ch\u1EA1y Message MFE ", /*#__PURE__*/(0,jsx_runtime.jsx)("code", {
          children: "yarn start"
        }), " (:8506) r\u1ED3i t\u1EA3i l\u1EA1i."]
      })]
    });
  }
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    ref: containerRef,
    className: ChatSectionHost_ChatSectionHost_module.host,
    "data-testid": "field-chat-section-host"
  });
};
/* harmony default export */ const ChatSectionHost_ChatSectionHost = ((/* unused pure expression or super */ null && (ChatSectionHost)));

/***/ },

/***/ 3367
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  t: () => (/* reexport */ GiaoViecModal)
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
// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__(1867);
// EXTERNAL MODULE: ./node_modules/@linm-soft-org/linm-web-common-components/dist/index.js + 583 modules
var dist = __webpack_require__(8755);
// EXTERNAL MODULE: ./src/demo/incidentStore.ts
var incidentStore = __webpack_require__(5908);
// EXTERNAL MODULE: ./src/services/api.ts
var api = __webpack_require__(8724);
// EXTERNAL MODULE: ./src/services/task/origin.ts
var origin = __webpack_require__(2292);
;// ./src/services/task/endpoint.ts


/**
 * Platform Task create — cite Medical BFF `/tasks` (P1 · GAP-RTI-BFF-01).
 * Body origin quad — cấm parentEntity / parentId / domainSource.
 */



var taskEndpoint = {
  createTask: function () {
    var _createTask = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee(data) {
      var _data$description;
      var payload, res;
      return regenerator_default().wrap(function (_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            payload = {
              title: data.title,
              description: (_data$description = data.description) !== null && _data$description !== void 0 ? _data$description : '',
              priority: data.priority,
              assignmentStrategy: data.assignmentStrategy,
              estimatedHours: 0,
              skillsRequired: [],
              tags: [],
              dueDate: data.dueDate || undefined,
              assigneeId: data.assigneeId || undefined,
              assigneeName: data.assigneeName || undefined,
              systemCode: data.systemCode || origin/* RMMS_TASK_SYSTEM_CODE */.K,
              source: data.source,
              sourceEntityType: data.sourceEntityType,
              sourceEntityId: data.sourceEntityId
            };
            _context.next = 1;
            return api/* apiClient */.u.post('/tasks', payload);
          case 1:
            res = _context.sent;
            return _context.abrupt("return", (0,api/* unwrap */.o)(res));
          case 2:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    function createTask(_x) {
      return _createTask.apply(this, arguments);
    }
    return createTask;
  }()
};
;// ./src/services/task/taskService.ts

var taskService = {
  create: function create(data) {
    return taskEndpoint.createTask(data);
  }
};
;// ./src/services/task/index.ts


// EXTERNAL MODULE: external "single-spa"
var external_single_spa_ = __webpack_require__(1496);
// EXTERNAL MODULE: ./src/utils/platformTaskUrls.ts
var platformTaskUrls = __webpack_require__(9661);
;// ./src/utils/taskPostNavigate.ts



/** DES-RTI-NAV — post-create: shell `/platform-task/cv/:id` or Task standalone :8608. */
function navigateToCreatedTask(taskId, from, sourceId) {
  var href = (0,platformTaskUrls/* platformTaskDetailHref */.Vl)(taskId, from, sourceId);
  if (/^https?:\/\//i.test(href)) {
    window.location.assign(href);
    return;
  }
  ;(0,external_single_spa_.navigateToUrl)(href);
}
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./src/components/GiaoViecModal/GiaoViecModal.module.css
var GiaoViecModal_module = __webpack_require__(7676);
;// ./src/components/GiaoViecModal/GiaoViecModal.module.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(GiaoViecModal_module/* default */.A, options);




       /* harmony default export */ const GiaoViecModal_GiaoViecModal_module = (GiaoViecModal_module/* default */.A && GiaoViecModal_module/* default */.A.locals ? GiaoViecModal_module/* default */.A.locals : undefined);

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
;// ./src/components/GiaoViecModal/GiaoViecModal.tsx



function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,defineProperty/* default */.A)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
;








var TEST_ID = 'rmms-giao-viec-modal';
var PRIORITY_OPTIONS = [{
  value: 'critical',
  label: 'Khẩn cấp (critical)'
}, {
  value: 'high',
  label: 'Cao (high)'
}, {
  value: 'medium',
  label: 'Trung bình (medium)'
}, {
  value: 'low',
  label: 'Thấp (low)'
}];
var STRATEGY_OPTIONS = [{
  value: 'pool',
  label: 'Pool'
}, {
  value: 'direct',
  label: 'Trực tiếp (direct)'
}, {
  value: 'team',
  label: 'Team'
}];
var GiaoViecModal = function GiaoViecModal(_ref) {
  var open = _ref.open,
    context = _ref.context,
    onClose = _ref.onClose,
    onCreated = _ref.onCreated;
  var toast = (0,dist/* useAppToast */.Sf6)();
  var _useState = (0,external_react_.useState)(''),
    _useState2 = (0,slicedToArray/* default */.A)(_useState, 2),
    title = _useState2[0],
    setTitle = _useState2[1];
  var _useState3 = (0,external_react_.useState)(''),
    _useState4 = (0,slicedToArray/* default */.A)(_useState3, 2),
    description = _useState4[0],
    setDescription = _useState4[1];
  var _useState5 = (0,external_react_.useState)('high'),
    _useState6 = (0,slicedToArray/* default */.A)(_useState5, 2),
    priority = _useState6[0],
    setPriority = _useState6[1];
  var _useState7 = (0,external_react_.useState)('pool'),
    _useState8 = (0,slicedToArray/* default */.A)(_useState7, 2),
    assignmentStrategy = _useState8[0],
    setAssignmentStrategy = _useState8[1];
  var _useState9 = (0,external_react_.useState)(''),
    _useState0 = (0,slicedToArray/* default */.A)(_useState9, 2),
    dueDate = _useState0[0],
    setDueDate = _useState0[1];
  var _useState1 = (0,external_react_.useState)(false),
    _useState10 = (0,slicedToArray/* default */.A)(_useState1, 2),
    submitting = _useState10[0],
    setSubmitting = _useState10[1];
  var _useState11 = (0,external_react_.useState)(false),
    _useState12 = (0,slicedToArray/* default */.A)(_useState11, 2),
    dirty = _useState12[0],
    setDirty = _useState12[1];
  var _useLeaveConfirm = (0,dist/* useLeaveConfirm */.b5S)({
      isDirty: dirty,
      title: 'Bỏ thay đổi?',
      message: 'Thông tin giao việc chưa được tạo. Đóng modal?'
    }),
    guardedNavigate = _useLeaveConfirm.guardedNavigate,
    leaveConfirmModalProps = _useLeaveConfirm.leaveConfirmModalProps;
  (0,external_react_.useEffect)(function () {
    var _context$description;
    if (!open || !context) return;
    setTitle(context.title);
    setDescription((_context$description = context.description) !== null && _context$description !== void 0 ? _context$description : '');
    setPriority(context.priority);
    setAssignmentStrategy(context.assignmentStrategy);
    setDueDate((0,dist/* utcToLocalInputValue */.I6r)(context.dueDate));
    setDirty(false);
    setSubmitting(false);
  }, [open, context]);
  var modalTitle = (0,external_react_.useMemo)(function () {
    if (!context) return 'Giao việc';
    return context.source === 'patrol' ? 'Giao việc — Xử lý từ tuần tra' : 'Giao việc — Xử lý từ sự cố';
  }, [context]);
  var requestClose = (0,external_react_.useCallback)(function () {
    guardedNavigate(onClose);
  }, [guardedNavigate, onClose]);
  var handleSubmit = /*#__PURE__*/function () {
    var _ref2 = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee() {
      var trimmedTitle, payload, created, _t;
      return regenerator_default().wrap(function (_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (context) {
              _context.next = 1;
              break;
            }
            return _context.abrupt("return");
          case 1:
            trimmedTitle = title.trim();
            if (trimmedTitle) {
              _context.next = 2;
              break;
            }
            toast.warning('Tiêu đề không được để trống.');
            return _context.abrupt("return");
          case 2:
            if (dueDate) {
              _context.next = 3;
              break;
            }
            toast.warning('Hạn xử lý không được để trống.');
            return _context.abrupt("return");
          case 3:
            payload = {
              title: trimmedTitle,
              description: description.trim(),
              priority: priority,
              assignmentStrategy: assignmentStrategy,
              dueDate: (0,dist/* localInputToISOWithOffset */.zv5)(dueDate),
              systemCode: origin/* RMMS_TASK_SYSTEM_CODE */.K,
              source: context.source,
              sourceEntityType: context.sourceEntityType,
              sourceEntityId: context.sourceEntityId
            };
            setSubmitting(true);
            _context.prev = 4;
            _context.next = 5;
            return taskService.create(payload);
          case 5:
            created = _context.sent;
            toast.success('Đã tạo công việc thành công.');
            setDirty(false);
            onClose();
            if (!onCreated) {
              _context.next = 6;
              break;
            }
            onCreated(created, context);
            return _context.abrupt("return");
          case 6:
            navigateToCreatedTask(created.id, context.source, context.sourceEntityId);
            _context.next = 8;
            break;
          case 7:
            _context.prev = 7;
            _t = _context["catch"](4);
            toast.error(_t instanceof Error ? _t.message : 'Không tạo được công việc.');
          case 8:
            _context.prev = 8;
            setSubmitting(false);
            return _context.finish(8);
          case 9:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[4, 7, 8, 9]]);
    }));
    return function handleSubmit() {
      return _ref2.apply(this, arguments);
    };
  }();
  if (!open || !context) return null;
  return /*#__PURE__*/(0,external_react_dom_.createPortal)(/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: GiaoViecModal_GiaoViecModal_module.giaoViecOverlay,
      "data-des-id": "DES-RTI-MODAL",
      "data-testid": "".concat(TEST_ID, "-overlay"),
      onClick: function onClick(e) {
        if (e.target === e.currentTarget) requestClose();
      },
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: GiaoViecModal_GiaoViecModal_module.modal,
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "".concat(TEST_ID, "-title"),
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: GiaoViecModal_GiaoViecModal_module.header,
          id: "".concat(TEST_ID, "-title"),
          children: modalTitle
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: GiaoViecModal_GiaoViecModal_module.contextStrip,
          children: context.source === 'patrol' ? /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)("strong", {
                children: "M\xE3 ca:"
              }), " ", context.sessionCode]
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)("strong", {
                children: "Tuy\u1EBFn:"
              }), " ", context.route]
            })]
          }) : /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)("strong", {
                children: "M\xE3 V\u0110:"
              }), " ", context.incidentCode]
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)("strong", {
                children: "M\u1EE9c \u0111\u1ED9:"
              }), ' ', /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                className: GiaoViecModal_GiaoViecModal_module.severityChip,
                children: (0,incidentStore/* severityLabel */.yi)(context.severity)
              })]
            })]
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: GiaoViecModal_GiaoViecModal_module.body,
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: GiaoViecModal_GiaoViecModal_module.field,
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("label", {
              htmlFor: "".concat(TEST_ID, "-title-input"),
              children: "Ti\xEAu \u0111\u1EC1 *"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("input", {
              id: "".concat(TEST_ID, "-title-input"),
              value: title,
              onChange: function onChange(e) {
                setDirty(true);
                setTitle(e.target.value);
              },
              "data-testid": "".concat(TEST_ID, "-title")
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: GiaoViecModal_GiaoViecModal_module.field,
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("label", {
              htmlFor: "".concat(TEST_ID, "-description"),
              children: "Ghi ch\xFA"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("textarea", {
              id: "".concat(TEST_ID, "-description"),
              rows: 2,
              value: description,
              placeholder: "Ghi ch\xFA t\u1EEB ca / s\u1EF1 c\u1ED1\u2026",
              onChange: function onChange(e) {
                setDirty(true);
                setDescription(e.target.value);
              },
              "data-testid": "".concat(TEST_ID, "-description")
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: GiaoViecModal_GiaoViecModal_module.row2,
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: GiaoViecModal_GiaoViecModal_module.field,
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)("label", {
                htmlFor: "".concat(TEST_ID, "-priority"),
                children: "\u01AFu ti\xEAn *"
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("select", {
                id: "".concat(TEST_ID, "-priority"),
                value: priority,
                onChange: function onChange(e) {
                  setDirty(true);
                  setPriority(e.target.value);
                },
                "data-testid": "".concat(TEST_ID, "-priority"),
                children: PRIORITY_OPTIONS.map(function (o) {
                  return /*#__PURE__*/(0,jsx_runtime.jsx)("option", {
                    value: o.value,
                    children: o.label
                  }, o.value);
                })
              })]
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: GiaoViecModal_GiaoViecModal_module.field,
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)("label", {
                htmlFor: "".concat(TEST_ID, "-strategy"),
                children: "C\xE1ch g\xE1n *"
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("select", {
                id: "".concat(TEST_ID, "-strategy"),
                value: assignmentStrategy,
                onChange: function onChange(e) {
                  setDirty(true);
                  setAssignmentStrategy(e.target.value);
                },
                "data-testid": "".concat(TEST_ID, "-strategy"),
                children: STRATEGY_OPTIONS.map(function (o) {
                  return /*#__PURE__*/(0,jsx_runtime.jsx)("option", {
                    value: o.value,
                    children: o.label
                  }, o.value);
                })
              })]
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: GiaoViecModal_GiaoViecModal_module.field,
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("label", {
              htmlFor: "".concat(TEST_ID, "-dueDate"),
              children: "H\u1EA1n x\u1EED l\xFD *"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("input", {
              id: "".concat(TEST_ID, "-dueDate"),
              type: "datetime-local",
              value: dueDate,
              onChange: function onChange(e) {
                setDirty(true);
                setDueDate(e.target.value);
              },
              "data-testid": "".concat(TEST_ID, "-dueDate")
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("input", {
            type: "hidden",
            "data-testid": "".concat(TEST_ID, "-system-code"),
            value: origin/* RMMS_TASK_SYSTEM_CODE */.K,
            readOnly: true
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("input", {
            type: "hidden",
            "data-testid": "".concat(TEST_ID, "-source"),
            value: context.source,
            readOnly: true
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("input", {
            type: "hidden",
            "data-testid": "".concat(TEST_ID, "-source-entity-type"),
            value: context.sourceEntityType,
            readOnly: true
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("input", {
            type: "hidden",
            "data-testid": "".concat(TEST_ID, "-source-entity-id"),
            value: context.sourceEntityId,
            readOnly: true
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: GiaoViecModal_GiaoViecModal_module.footer,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(dist/* Button */.$nd, {
            variant: "secondary",
            onClick: requestClose,
            "data-testid": "".concat(TEST_ID, "-cancel"),
            children: "H\u1EE7y"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(dist/* Button */.$nd, {
            variant: "primary",
            loading: submitting,
            onClick: function onClick() {
              return void handleSubmit();
            },
            "data-testid": "".concat(TEST_ID, "-confirm"),
            children: "T\u1EA1o CV"
          })]
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(dist/* LeaveConfirmModal */.N24, _objectSpread({}, leaveConfirmModalProps))]
  }), document.body);
};
/* harmony default export */ const GiaoViecModal_GiaoViecModal = ((/* unused pure expression or super */ null && (GiaoViecModal)));
;// ./src/components/GiaoViecModal/index.ts


/***/ },

/***/ 4732
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  M: () => (/* binding */ TaskChatPanel)
});

// UNUSED EXPORTS: default

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(4726);
// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__(1867);
// EXTERNAL MODULE: ./node_modules/@linm-soft-org/linm-web-common-components/dist/index.js + 583 modules
var dist = __webpack_require__(8755);
// EXTERNAL MODULE: ./src/components/ChatSectionHost/ChatSectionHost.tsx + 2 modules
var ChatSectionHost = __webpack_require__(9466);
// EXTERNAL MODULE: ./src/utils/platformTaskUrls.ts
var platformTaskUrls = __webpack_require__(9661);
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./src/components/TaskChatPanel/TaskChatPanel.module.css
var TaskChatPanel_module = __webpack_require__(644);
;// ./src/components/TaskChatPanel/TaskChatPanel.module.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(TaskChatPanel_module/* default */.A, options);




       /* harmony default export */ const TaskChatPanel_TaskChatPanel_module = (TaskChatPanel_module/* default */.A && TaskChatPanel_module/* default */.A.locals ? TaskChatPanel_module/* default */.A.locals : undefined);

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
;// ./src/components/TaskChatPanel/TaskChatPanel.tsx








var TaskChatPanel = function TaskChatPanel(_ref) {
  var target = _ref.target,
    onClose = _ref.onClose;
  var navigate = (0,navigateInAppPath/* useInAppNavigate */.lc)();
  var onParcelNavigate = (0,external_react_.useCallback)(function (path) {
    if (/^https?:\/\//i.test(path)) {
      window.location.assign(path);
      return;
    }
    navigate(path);
  }, [navigate]);
  if (!target) return null;
  var taskHref = (0,platformTaskUrls/* platformTaskDetailHref */.Vl)(target.taskId, target.from, target.sourceId);
  return /*#__PURE__*/(0,external_react_dom_.createPortal)(/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: TaskChatPanel_TaskChatPanel_module.overlay,
    "data-testid": "field-task-chat-overlay",
    onClick: function onClick(e) {
      if (e.target === e.currentTarget) onClose();
    },
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: TaskChatPanel_TaskChatPanel_module.panel,
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": "field-task-chat-title",
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: TaskChatPanel_TaskChatPanel_module.header,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("h2", {
          id: "field-task-chat-title",
          children: "Trao \u0111\u1ED5i c\xF4ng vi\u1EC7c"
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: TaskChatPanel_TaskChatPanel_module.actions,
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(dist/* Button */.$nd, {
            variant: "secondary",
            size: "sm",
            onClick: function onClick() {
              if (/^https?:\/\//i.test(taskHref)) window.location.assign(taskHref);else navigate(taskHref);
            },
            "data-testid": "field-task-chat-open-task",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("i", {
              className: "fas fa-external-link-alt"
            }), " M\u1EDF Task MFE"]
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(dist/* Button */.$nd, {
            variant: "secondary",
            size: "sm",
            onClick: onClose,
            "data-testid": "field-task-chat-close",
            children: "\u0110\xF3ng"
          })]
        })]
      }), target.title ? /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
        className: TaskChatPanel_TaskChatPanel_module.sub,
        children: target.title
      }) : null, /*#__PURE__*/(0,jsx_runtime.jsx)(ChatSectionHost/* ChatSectionHost */.y, {
        taskId: target.taskId,
        onNavigate: onParcelNavigate
      })]
    })
  }), document.body);
};
/* harmony default export */ const TaskChatPanel_TaskChatPanel = ((/* unused pure expression or super */ null && (TaskChatPanel)));

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

/***/ 2292
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ RMMS_TASK_SYSTEM_CODE)
/* harmony export */ });
/** Origin quad — SSOT origin-link-fields.md · systemCode ≠ company_code. */
var RMMS_TASK_SYSTEM_CODE = 'rmms';

/***/ },

/***/ 2700
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ platformTaskPrereqTooltip),
/* harmony export */   Y: () => (/* binding */ isPlatformTaskIntegrationReady)
/* harmony export */ });
/** DES-RTI-PREREQ — disable «Giao việc» until platform-message + platform-task QA green. */

var PREREQ_TOOLTIP = 'Đang triển khai Platform Task';
function isPlatformTaskIntegrationReady() {
  if (false) // removed by dead control flow
{}
  // P1: platform-message QA blocked · platform-task QA paused — keep gate ON
  return false;
}
function platformTaskPrereqTooltip() {
  return PREREQ_TOOLTIP;
}

/***/ },

/***/ 9661
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MC: () => (/* binding */ platformTaskListHref),
/* harmony export */   Vl: () => (/* binding */ platformTaskDetailHref),
/* harmony export */   ZV: () => (/* binding */ PLATFORM_TASK_STD_ORIGIN)
/* harmony export */ });
/* unused harmony exports PLATFORM_TASK_LIST_PATH, platformTaskDetailPath */
/* harmony import */ var _dev_isStandalone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7024);


/**
 * Task MFE standalone (`Linm.Web.Task` `yarn start:std`).
 * :9302 is Gis — not Platform Task.
 */
var PLATFORM_TASK_STD_ORIGIN = "http://localhost:8608" || 0;
var PLATFORM_TASK_LIST_PATH = '/platform-task/cv';
function platformTaskListHref() {
  return "".concat(PLATFORM_TASK_STD_ORIGIN).concat(PLATFORM_TASK_LIST_PATH);
}
function platformTaskDetailPath(taskId, from, sourceId) {
  var qs = new URLSearchParams({
    from: from,
    sourceId: sourceId
  });
  return "".concat(PLATFORM_TASK_LIST_PATH, "/").concat(encodeURIComponent(taskId), "?").concat(qs);
}

/** Shell path on host; absolute Task origin when Field is standalone (:9304). */
function platformTaskDetailHref(taskId, from, sourceId) {
  var path = platformTaskDetailPath(taskId, from, sourceId);
  return _dev_isStandalone__WEBPACK_IMPORTED_MODULE_0__/* .isStandalone */ .Q ? "".concat(PLATFORM_TASK_STD_ORIGIN).concat(path) : path;
}

/***/ },

/***/ 4106
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A$: () => (/* binding */ incidentSeverityPrefill),
/* harmony export */   QE: () => (/* binding */ canSuggestTaskFromIncident),
/* harmony export */   dD: () => (/* binding */ patrolSessionPrefill)
/* harmony export */ });
function addHours(base, hours) {
  return new Date(base.getTime() + hours * 60 * 60 * 1000).toISOString();
}
function addDays(base, days) {
  return new Date(base.getTime() + days * 24 * 60 * 60 * 1000).toISOString();
}

/** Patrol session footer default (GAP-RTI-PATROL-02 · SA §5A). */
function patrolSessionPrefill(route) {
  var now = new Date();
  return {
    title: "X\u1EED l\xFD \u0111i\u1EC3m C\u1EA5p b\xE1ch \u2014 ".concat(route || 'Tuần tra'),
    priority: 'high',
    dueDate: addHours(now, 48)
  };
}

/** Incident severity → priority + dueDate (SA §5B). */
function incidentSeverityPrefill(severity) {
  var now = new Date();
  switch (severity) {
    case 'critical':
      return {
        priority: 'critical',
        dueDate: addHours(now, 24)
      };
    case 'high':
      return {
        priority: 'high',
        dueDate: addHours(now, 48)
      };
    case 'medium':
      return {
        priority: 'medium',
        dueDate: addDays(now, 7)
      };
    case 'low':
      return {
        priority: 'low',
        dueDate: addDays(now, 14)
      };
    default:
      return {
        priority: 'medium',
        dueDate: addDays(now, 7)
      };
  }
}
function canSuggestTaskFromIncident(severity, status) {
  if (status === 'closed') return false;
  return severity !== 'low';
}

/***/ },

/***/ 4220
(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.host___jhmlX {
  min-height: 320px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background: #fff;
}

.fallback___glsn2 {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1.25rem;
  border: 1px dashed #d1d5db;
  border-radius: 8px;
  color: #4b5563;
  font-size: 14px;
}

.fallback___glsn2 i {
  color: #3b82f6;
}
`, "",{"version":3,"sources":["webpack://./src/components/ChatSectionHost/ChatSectionHost.module.css"],"names":[],"mappings":"AAAA;EACE,iBAAiB;EACjB,yBAAyB;EACzB,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,gBAAgB;EAChB,0BAA0B;EAC1B,kBAAkB;EAClB,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,cAAc;AAChB","sourcesContent":[".host {\n  min-height: 320px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: #fff;\n}\n\n.fallback {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 1.25rem;\n  border: 1px dashed #d1d5db;\n  border-radius: 8px;\n  color: #4b5563;\n  font-size: 14px;\n}\n\n.fallback i {\n  color: #3b82f6;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"host": `host___jhmlX`,
	"fallback": `fallback___glsn2`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);

/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 7676
(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.giaoViecOverlay___aNdBs {
  position: fixed;
  inset: 0;
  /* Above Slideout (--z-slideout 1050). Overlay is portaled to document.body. */
  z-index: var(--z-modal-stacked-backdrop, 1200);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  background: rgba(17, 24, 39, 0.45);
}

.modal___fWH3P {
  width: 100%;
  max-width: 520px;
  max-height: calc(100vh - 32px);
  overflow: auto;
  background: #fff;
  border-radius: 10px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.header___Q3gmd {
  padding: 16px;
  border-bottom: 1px solid #e5e7eb;
  font-size: 16px;
  font-weight: 700;
}

.contextStrip___vIS9O {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 16px;
  padding: 12px 16px;
  background: #eff6ff;
  border-bottom: 1px solid #e5e7eb;
  font-size: 13px;
  color: #374151;
}

.body___OyMWN {
  padding: 16px;
  display: grid;
  gap: 12px;
}

.row2___IWABH {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.field___rUwbX label {
  display: block;
  margin-bottom: 4px;
  font-size: 13px;
  color: #6b7280;
}

.field___rUwbX input,
.field___rUwbX select,
.field___rUwbX textarea {
  width: 100%;
  font-size: 14px;
  padding: 8px 10px;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  font-family: inherit;
}

.field___rUwbX textarea {
  resize: vertical;
  min-height: 72px;
}

.severityChip___pUWeH {
  display: inline-block;
  padding: 2px 8px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 600;
  background: #fee2e2;
  color: #b91c1c;
}

.footer___Pl7Js {
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 10px;
  padding: 14px 16px;
  border-top: 1px solid #e5e7eb;
}

@media (max-width: 600px) {
  .row2___IWABH {
    grid-template-columns: 1fr;
  }

  .field___rUwbX input,
  .field___rUwbX select,
  .field___rUwbX textarea {
    font-size: 16px;
  }
}

@media (max-width: 375px) {
  .giaoViecOverlay___aNdBs {
    padding: 8px;
    align-items: flex-end;
  }

  .modal___fWH3P {
    max-height: calc(100vh - 16px);
  }
}
`, "",{"version":3,"sources":["webpack://./src/components/GiaoViecModal/GiaoViecModal.module.css"],"names":[],"mappings":"AAAA;EACE,eAAe;EACf,QAAQ;EACR,8EAA8E;EAC9E,8CAA8C;EAC9C,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,aAAa;EACb,kCAAkC;AACpC;;AAEA;EACE,WAAW;EACX,gBAAgB;EAChB,8BAA8B;EAC9B,cAAc;EACd,gBAAgB;EAChB,mBAAmB;EACnB,yBAAyB;EACzB,0CAA0C;AAC5C;;AAEA;EACE,aAAa;EACb,gCAAgC;EAChC,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,aAAa;EACb,kBAAkB;EAClB,mBAAmB;EACnB,gCAAgC;EAChC,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,SAAS;AACX;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,SAAS;AACX;;AAEA;EACE,cAAc;EACd,kBAAkB;EAClB,eAAe;EACf,cAAc;AAChB;;AAEA;;;EAGE,WAAW;EACX,eAAe;EACf,iBAAiB;EACjB,yBAAyB;EACzB,kBAAkB;EAClB,oBAAoB;AACtB;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,qBAAqB;EACrB,gBAAgB;EAChB,oBAAoB;EACpB,eAAe;EACf,gBAAgB;EAChB,mBAAmB;EACnB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,yBAAyB;EACzB,eAAe;EACf,SAAS;EACT,kBAAkB;EAClB,6BAA6B;AAC/B;;AAEA;EACE;IACE,0BAA0B;EAC5B;;EAEA;;;IAGE,eAAe;EACjB;AACF;;AAEA;EACE;IACE,YAAY;IACZ,qBAAqB;EACvB;;EAEA;IACE,8BAA8B;EAChC;AACF","sourcesContent":[".giaoViecOverlay {\n  position: fixed;\n  inset: 0;\n  /* Above Slideout (--z-slideout 1050). Overlay is portaled to document.body. */\n  z-index: var(--z-modal-stacked-backdrop, 1200);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 16px;\n  background: rgba(17, 24, 39, 0.45);\n}\n\n.modal {\n  width: 100%;\n  max-width: 520px;\n  max-height: calc(100vh - 32px);\n  overflow: auto;\n  background: #fff;\n  border-radius: 10px;\n  border: 1px solid #e5e7eb;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);\n}\n\n.header {\n  padding: 16px;\n  border-bottom: 1px solid #e5e7eb;\n  font-size: 16px;\n  font-weight: 700;\n}\n\n.contextStrip {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px 16px;\n  padding: 12px 16px;\n  background: #eff6ff;\n  border-bottom: 1px solid #e5e7eb;\n  font-size: 13px;\n  color: #374151;\n}\n\n.body {\n  padding: 16px;\n  display: grid;\n  gap: 12px;\n}\n\n.row2 {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n\n.field label {\n  display: block;\n  margin-bottom: 4px;\n  font-size: 13px;\n  color: #6b7280;\n}\n\n.field input,\n.field select,\n.field textarea {\n  width: 100%;\n  font-size: 14px;\n  padding: 8px 10px;\n  border: 1px solid #e5e7eb;\n  border-radius: 6px;\n  font-family: inherit;\n}\n\n.field textarea {\n  resize: vertical;\n  min-height: 72px;\n}\n\n.severityChip {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 999px;\n  font-size: 11px;\n  font-weight: 600;\n  background: #fee2e2;\n  color: #b91c1c;\n}\n\n.footer {\n  display: flex;\n  justify-content: flex-end;\n  flex-wrap: wrap;\n  gap: 10px;\n  padding: 14px 16px;\n  border-top: 1px solid #e5e7eb;\n}\n\n@media (max-width: 600px) {\n  .row2 {\n    grid-template-columns: 1fr;\n  }\n\n  .field input,\n  .field select,\n  .field textarea {\n    font-size: 16px;\n  }\n}\n\n@media (max-width: 375px) {\n  .giaoViecOverlay {\n    padding: 8px;\n    align-items: flex-end;\n  }\n\n  .modal {\n    max-height: calc(100vh - 16px);\n  }\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"giaoViecOverlay": `giaoViecOverlay___aNdBs`,
	"modal": `modal___fWH3P`,
	"header": `header___Q3gmd`,
	"contextStrip": `contextStrip___vIS9O`,
	"body": `body___OyMWN`,
	"row2": `row2___IWABH`,
	"field": `field___rUwbX`,
	"severityChip": `severityChip___pUWeH`,
	"footer": `footer___Pl7Js`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);

/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 644
(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.overlay___s5dNZ {
  position: fixed;
  inset: 0;
  z-index: var(--z-modal-stacked, 1210);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 16px;
  background: rgba(17, 24, 39, 0.45);
}

.panel___xCOKn {
  width: 100%;
  max-width: 720px;
  max-height: calc(100vh - 32px);
  overflow: auto;
  background: #fff;
  border-radius: 10px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  padding: 16px;
}

.header___CyHsx {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 8px;
}

.header___CyHsx h2 {
  margin: 0;
  font-size: 16px;
  font-weight: 700;
}

.actions___v3Ep8 {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.sub___Ni1K4 {
  margin: 0 0 12px;
  font-size: 13px;
  color: #6b7280;
}

@media (min-width: 768px) {
  .overlay___s5dNZ {
    align-items: center;
  }
}
`, "",{"version":3,"sources":["webpack://./src/components/TaskChatPanel/TaskChatPanel.module.css"],"names":[],"mappings":"AAAA;EACE,eAAe;EACf,QAAQ;EACR,qCAAqC;EACrC,aAAa;EACb,qBAAqB;EACrB,uBAAuB;EACvB,aAAa;EACb,kCAAkC;AACpC;;AAEA;EACE,WAAW;EACX,gBAAgB;EAChB,8BAA8B;EAC9B,cAAc;EACd,gBAAgB;EAChB,mBAAmB;EACnB,yBAAyB;EACzB,0CAA0C;EAC1C,aAAa;AACf;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,SAAS;EACT,kBAAkB;AACpB;;AAEA;EACE,SAAS;EACT,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,QAAQ;AACV;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,cAAc;AAChB;;AAEA;EACE;IACE,mBAAmB;EACrB;AACF","sourcesContent":[".overlay {\n  position: fixed;\n  inset: 0;\n  z-index: var(--z-modal-stacked, 1210);\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  padding: 16px;\n  background: rgba(17, 24, 39, 0.45);\n}\n\n.panel {\n  width: 100%;\n  max-width: 720px;\n  max-height: calc(100vh - 32px);\n  overflow: auto;\n  background: #fff;\n  border-radius: 10px;\n  border: 1px solid #e5e7eb;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);\n  padding: 16px;\n}\n\n.header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  margin-bottom: 8px;\n}\n\n.header h2 {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 700;\n}\n\n.actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n\n.sub {\n  margin: 0 0 12px;\n  font-size: 13px;\n  color: #6b7280;\n}\n\n@media (min-width: 768px) {\n  .overlay {\n    align-items: center;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"overlay": `overlay___s5dNZ`,
	"panel": `panel___xCOKn`,
	"header": `header___CyHsx`,
	"actions": `actions___v3Ep8`,
	"sub": `sub___Ni1K4`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);

/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ }

}]);
//# sourceMappingURL=82.875f4c5e.linm-rmms-field.js.map