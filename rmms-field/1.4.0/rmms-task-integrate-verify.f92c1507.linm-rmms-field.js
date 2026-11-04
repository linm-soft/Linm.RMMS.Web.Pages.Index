"use strict";
(self["webpackChunkrmms_field"] = self["webpackChunkrmms_field"] || []).push([[78],{

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

/***/ 3177
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ RmmsTaskIntegrateVerifyPage_RmmsTaskIntegrateVerifyPage)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__(296);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(4726);
// EXTERNAL MODULE: ./node_modules/react-router-dom/dist/index.js
var dist = __webpack_require__(4976);
// EXTERNAL MODULE: ./node_modules/@linm-soft-org/linm-web-common-components/dist/index.js + 583 modules
var linm_web_common_components_dist = __webpack_require__(8755);
// EXTERNAL MODULE: ./src/components/ChatSectionHost/ChatSectionHost.tsx + 2 modules
var ChatSectionHost = __webpack_require__(9466);
// EXTERNAL MODULE: ./src/router/navigateInAppPath.ts
var navigateInAppPath = __webpack_require__(2381);
// EXTERNAL MODULE: ./src/router/useShellPageTitle.ts
var useShellPageTitle = __webpack_require__(7619);
// EXTERNAL MODULE: ./src/utils/platformTaskPrereq.ts
var platformTaskPrereq = __webpack_require__(2700);
// EXTERNAL MODULE: ./src/utils/platformTaskUrls.ts
var platformTaskUrls = __webpack_require__(9661);
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./src/pages/RmmsTaskIntegrateVerifyPage/RmmsTaskIntegrateVerifyPage.module.css
var RmmsTaskIntegrateVerifyPage_module = __webpack_require__(9574);
;// ./src/pages/RmmsTaskIntegrateVerifyPage/RmmsTaskIntegrateVerifyPage.module.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(RmmsTaskIntegrateVerifyPage_module/* default */.A, options);




       /* harmony default export */ const RmmsTaskIntegrateVerifyPage_RmmsTaskIntegrateVerifyPage_module = (RmmsTaskIntegrateVerifyPage_module/* default */.A && RmmsTaskIntegrateVerifyPage_module/* default */.A.locals ? RmmsTaskIntegrateVerifyPage_module/* default */.A.locals : undefined);

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
;// ./src/pages/RmmsTaskIntegrateVerifyPage/RmmsTaskIntegrateVerifyPage.tsx











var TEST_ID = 'rmms-task-integrate-verify';
var RmmsTaskIntegrateVerifyPage = function RmmsTaskIntegrateVerifyPage() {
  var _searchParams$get, _searchParams$get2;
  (0,useShellPageTitle/* useShellPageTitle */.D)('RMMS Task Integrate — Verify');
  var taskListHref = (0,platformTaskUrls/* platformTaskListHref */.MC)();
  var navigate = (0,navigateInAppPath/* useInAppNavigate */.lc)();
  var _useSearchParams = (0,dist/* useSearchParams */.ok)(),
    _useSearchParams2 = (0,slicedToArray/* default */.A)(_useSearchParams, 1),
    searchParams = _useSearchParams2[0];
  var _useState = (0,external_react_.useState)((_searchParams$get = searchParams.get('taskId')) !== null && _searchParams$get !== void 0 ? _searchParams$get : ''),
    _useState2 = (0,slicedToArray/* default */.A)(_useState, 2),
    taskIdInput = _useState2[0],
    setTaskIdInput = _useState2[1];
  var _useState3 = (0,external_react_.useState)((_searchParams$get2 = searchParams.get('taskId')) !== null && _searchParams$get2 !== void 0 ? _searchParams$get2 : ''),
    _useState4 = (0,slicedToArray/* default */.A)(_useState3, 2),
    mountedTaskId = _useState4[0],
    setMountedTaskId = _useState4[1];
  var onParcelNavigate = (0,external_react_.useCallback)(function (path) {
    if (/^https?:\/\//i.test(path)) {
      window.location.assign(path);
      return;
    }
    navigate(path);
  }, [navigate]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: RmmsTaskIntegrateVerifyPage_RmmsTaskIntegrateVerifyPage_module.page,
    "data-testid": "".concat(TEST_ID, "-page"),
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("h1", {
      className: RmmsTaskIntegrateVerifyPage_RmmsTaskIntegrateVerifyPage_module.title,
      children: "rmms-task-integrate"
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: RmmsTaskIntegrateVerifyPage_RmmsTaskIntegrateVerifyPage_module.meta,
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("strong", {
          children: "packKind:"
        }), " platform integration"]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("strong", {
          children: "prereq gate:"
        }), " ", (0,platformTaskPrereq/* isPlatformTaskIntegrationReady */.Y)() ? 'OFF' : 'ON']
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("strong", {
          children: "parcel:"
        }), " @linm/message ChatSectionParcel"]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("strong", {
          children: "routeMap:"
        }), " task=/platform-task/cv/:id \xB7 incident=/su-co/:id"]
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("section", {
      className: RmmsTaskIntegrateVerifyPage_RmmsTaskIntegrateVerifyPage_module.card,
      "data-des-id": "DES-RTI-NAV",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("h2", {
        children: "C\xF4ng vi\u1EC7c \u2014 n\u01A1i xem Task"
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
        children: ["Field (:9304) kh\xF4ng host list/detail Task. Sau Giao vi\u1EC7c: \u1EDF l\u1EA1i Field + m\u1EDF ChatSectionParcel. Link \xABM\u1EDF Task MFE\xBB \u2192 ", /*#__PURE__*/(0,jsx_runtime.jsx)("code", {
          children: "http://localhost:8608/cv/:id"
        }), ". :9302 l\xE0 Gis, kh\xF4ng ph\u1EA3i Task."]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: RmmsTaskIntegrateVerifyPage_RmmsTaskIntegrateVerifyPage_module.links,
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("a", {
          className: RmmsTaskIntegrateVerifyPage_RmmsTaskIntegrateVerifyPage_module.link,
          href: taskListHref,
          "data-testid": "".concat(TEST_ID, "-open-task-list"),
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("i", {
            className: "fas fa-tasks"
          }), " Danh s\xE1ch c\xF4ng vi\u1EC7c"]
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("section", {
      className: RmmsTaskIntegrateVerifyPage_RmmsTaskIntegrateVerifyPage_module.card,
      "data-des-id": "DES-RTI-CHAT",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("h2", {
        children: "ChatSectionParcel \u2014 Message yarn start :8506"
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
        children: ["Mount c\xF9ng parcel Task MFE d\xF9ng. C\u1EA7n Message ", /*#__PURE__*/(0,jsx_runtime.jsx)("code", {
          children: "yarn start"
        }), " (bundle, kh\xF4ng", ' ', /*#__PURE__*/(0,jsx_runtime.jsx)("code", {
          children: "start:std"
        }), ")."]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: RmmsTaskIntegrateVerifyPage_RmmsTaskIntegrateVerifyPage_module.mountRow,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("input", {
          value: taskIdInput,
          onChange: function onChange(e) {
            return setTaskIdInput(e.target.value);
          },
          placeholder: "taskId",
          "data-testid": "".concat(TEST_ID, "-task-id")
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* Button */.$nd, {
          variant: "primary",
          size: "sm",
          onClick: function onClick() {
            return setMountedTaskId(taskIdInput.trim());
          },
          "data-testid": "".concat(TEST_ID, "-mount-chat"),
          children: "Mount chat"
        })]
      }), mountedTaskId ? /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: RmmsTaskIntegrateVerifyPage_RmmsTaskIntegrateVerifyPage_module.hostWrap,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(ChatSectionHost/* ChatSectionHost */.y, {
          taskId: mountedTaskId,
          onNavigate: onParcelNavigate
        })
      }) : null]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("section", {
      className: RmmsTaskIntegrateVerifyPage_RmmsTaskIntegrateVerifyPage_module.card,
      "data-des-id": "DES-RTI-PATROL-FOOTER",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("h2", {
        children: "Patrol \u2014 Giao vi\u1EC7c"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
        children: "View mode \u2192 footer \xABGiao vi\u1EC7c\xBB \u2192 POST origin quad \u2192 toast \u2192 panel ChatSectionParcel + \xABM\u1EDF Task MFE\xBB. Kh\xF4ng t\u1EF1 r\u1EDDi Field."
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: RmmsTaskIntegrateVerifyPage_RmmsTaskIntegrateVerifyPage_module.links,
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(dist/* Link */.N_, {
          className: RmmsTaskIntegrateVerifyPage_RmmsTaskIntegrateVerifyPage_module.link,
          to: "/td-tk",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("i", {
            className: "fas fa-route"
          }), " Danh s\xE1ch tu\u1EA7n tra"]
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("section", {
      className: RmmsTaskIntegrateVerifyPage_RmmsTaskIntegrateVerifyPage_module.card,
      "data-des-id": "DES-RTI-INC-ACTION",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("h2", {
        children: "Incident \u2014 Giao vi\u1EC7c"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
        children: "View slideout ho\u1EB7c row menu \u2192 shared modal \u2192 panel chat tr\xEAn Field."
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: RmmsTaskIntegrateVerifyPage_RmmsTaskIntegrateVerifyPage_module.links,
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(dist/* Link */.N_, {
          className: RmmsTaskIntegrateVerifyPage_RmmsTaskIntegrateVerifyPage_module.link,
          to: "/su-co",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("i", {
            className: "fas fa-exclamation-triangle"
          }), " Danh s\xE1ch s\u1EF1 c\u1ED1"]
        })
      })]
    })]
  });
};
/* harmony default export */ const RmmsTaskIntegrateVerifyPage_RmmsTaskIntegrateVerifyPage = (RmmsTaskIntegrateVerifyPage);
;// ./src/pages/RmmsTaskIntegrateVerifyPage/index.ts


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

/***/ 9574
(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.page___hY5aY {
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 960px;
}

.title___yg08S {
  margin: 0;
  font-size: 20px;
  font-weight: 700;
}

.meta___eZ2ab {
  font-size: 13px;
  color: #6b7280;
  display: flex;
  flex-wrap: wrap;
  gap: 8px 16px;
}

.card___dQmtZ {
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  padding: 16px;
}

.card___dQmtZ h2 {
  margin: 0 0 8px;
  font-size: 15px;
}

.card___dQmtZ p {
  margin: 0 0 12px;
  font-size: 13px;
  color: #6b7280;
}

.links___GZbJS {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.link___G2g9Y {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  border-radius: 6px;
  border: 1px solid #e5e7eb;
  background: #f9fafb;
  color: #111827;
  text-decoration: none;
  font-size: 13px;
  font-weight: 600;
}

.link___G2g9Y:hover {
  background: #eff6ff;
  border-color: #93c5fd;
}

.mountRow___niJDX {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 12px;
}

.mountRow___niJDX input {
  flex: 1 1 180px;
  min-height: 36px;
  padding: 6px 10px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
}

.hostWrap___dAXiQ {
  margin-top: 8px;
}
`, "",{"version":3,"sources":["webpack://./src/pages/RmmsTaskIntegrateVerifyPage/RmmsTaskIntegrateVerifyPage.module.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,gBAAgB;AAClB;;AAEA;EACE,SAAS;EACT,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,cAAc;EACd,aAAa;EACb,eAAe;EACf,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,yBAAyB;EACzB,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,QAAQ;AACV;;AAEA;EACE,oBAAoB;EACpB,mBAAmB;EACnB,QAAQ;EACR,iBAAiB;EACjB,kBAAkB;EAClB,yBAAyB;EACzB,mBAAmB;EACnB,cAAc;EACd,qBAAqB;EACrB,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;EACnB,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,QAAQ;EACR,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,iBAAiB;EACjB,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,eAAe;AACjB","sourcesContent":[".page {\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  max-width: 960px;\n}\n\n.title {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 700;\n}\n\n.meta {\n  font-size: 13px;\n  color: #6b7280;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px 16px;\n}\n\n.card {\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 10px;\n  padding: 16px;\n}\n\n.card h2 {\n  margin: 0 0 8px;\n  font-size: 15px;\n}\n\n.card p {\n  margin: 0 0 12px;\n  font-size: 13px;\n  color: #6b7280;\n}\n\n.links {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n\n.link {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 12px;\n  border-radius: 6px;\n  border: 1px solid #e5e7eb;\n  background: #f9fafb;\n  color: #111827;\n  text-decoration: none;\n  font-size: 13px;\n  font-weight: 600;\n}\n\n.link:hover {\n  background: #eff6ff;\n  border-color: #93c5fd;\n}\n\n.mountRow {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-bottom: 12px;\n}\n\n.mountRow input {\n  flex: 1 1 180px;\n  min-height: 36px;\n  padding: 6px 10px;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n}\n\n.hostWrap {\n  margin-top: 8px;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"page": `page___hY5aY`,
	"title": `title___yg08S`,
	"meta": `meta___eZ2ab`,
	"card": `card___dQmtZ`,
	"links": `links___GZbJS`,
	"link": `link___G2g9Y`,
	"mountRow": `mountRow___niJDX`,
	"hostWrap": `hostWrap___dAXiQ`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);

/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ }

}]);
//# sourceMappingURL=rmms-task-integrate-verify.f92c1507.linm-rmms-field.js.map