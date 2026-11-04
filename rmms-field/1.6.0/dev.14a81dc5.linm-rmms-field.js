"use strict";
(self["webpackChunkrmms_field"] = self["webpackChunkrmms_field"] || []).push([[508],{

/***/ 6299
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  DevPageRoute: () => (/* binding */ DevPageRoute),
  "default": () => (/* binding */ dev_DevPageRoute)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(4726);
// EXTERNAL MODULE: ./node_modules/react-router-dom/dist/index.js
var dist = __webpack_require__(4976);
// EXTERNAL MODULE: ./node_modules/@linm-soft-org/linm-web-common-components/dist/index.js + 583 modules
var linm_web_common_components_dist = __webpack_require__(8755);
// EXTERNAL MODULE: ./src/config/viteLocal.ts
var viteLocal = __webpack_require__(6483);
// EXTERNAL MODULE: ./src/store/hooks.ts
var hooks = __webpack_require__(3029);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(467);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__(296);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(2284);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(4756);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./src/dev/DevPage.module.css
var DevPage_module = __webpack_require__(4806);
;// ./src/dev/DevPage.module.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(DevPage_module/* default */.A, options);




       /* harmony default export */ const dev_DevPage_module = (DevPage_module/* default */.A && DevPage_module/* default */.A.locals ? DevPage_module/* default */.A.locals : undefined);

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
;// ./src/dev/DevLoginCard.tsx









function readLoginError(err) {
  var _message;
  var raw = err && (0,esm_typeof/* default */.A)(err) === 'object' && 'message' in err ? String((_message = err.message) !== null && _message !== void 0 ? _message : '') : '';
  var wrapped = raw ? new Error(raw) : err;
  return (0,linm_web_common_components_dist/* getApiErrorMessage */.SUM)(wrapped, 'Tên đăng nhập hoặc mật khẩu không đúng');
}

/** Standalone `/dev` login — `login` thunk (same contract as Mobile `authService.login`). */
var DevLoginCard = function DevLoginCard() {
  var dispatch = (0,hooks/* useAppDispatch */.j)();
  var user = (0,hooks/* useAppSelector */.G)(function (s) {
    return s.auth.user;
  });
  var authed = (0,hooks/* useAppSelector */.G)(function (s) {
    return s.auth.isAuthenticated;
  });
  var busy = (0,hooks/* useAppSelector */.G)(function (s) {
    return s.auth.loading || s.auth.logoutLoading;
  });
  var _useState = (0,external_react_.useState)(''),
    _useState2 = (0,slicedToArray/* default */.A)(_useState, 2),
    username = _useState2[0],
    setUsername = _useState2[1];
  var _useState3 = (0,external_react_.useState)(''),
    _useState4 = (0,slicedToArray/* default */.A)(_useState3, 2),
    password = _useState4[0],
    setPassword = _useState4[1];
  var _useState5 = (0,external_react_.useState)(''),
    _useState6 = (0,slicedToArray/* default */.A)(_useState5, 2),
    message = _useState6[0],
    setMessage = _useState6[1];
  var _useState7 = (0,external_react_.useState)(false),
    _useState8 = (0,slicedToArray/* default */.A)(_useState7, 2),
    ok = _useState8[0],
    setOk = _useState8[1];
  var _onSubmit = /*#__PURE__*/function () {
    var _ref = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee(event) {
      var id, activeCompanyCode, _t;
      return regenerator_default().wrap(function (_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            event.preventDefault();
            if (!busy) {
              _context.next = 1;
              break;
            }
            return _context.abrupt("return");
          case 1:
            id = username.trim();
            if (!(!id || !password)) {
              _context.next = 2;
              break;
            }
            setOk(false);
            setMessage('Nhập tài khoản và mật khẩu');
            return _context.abrupt("return");
          case 2:
            setMessage('');
            _context.prev = 3;
            activeCompanyCode = (0,linm_web_common_components_dist/* getActiveCompanyCode */.JsI)() || undefined;
            _context.next = 4;
            return dispatch((0,linm_web_common_components_dist/* login */.iDC)({
              username: id,
              password: password,
              activeCompanyCode: activeCompanyCode
            })).unwrap();
          case 4:
            setPassword('');
            setOk(true);
            setMessage('Đăng nhập thành công');
            _context.next = 6;
            break;
          case 5:
            _context.prev = 5;
            _t = _context["catch"](3);
            setOk(false);
            setMessage(readLoginError(_t));
          case 6:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[3, 5]]);
    }));
    return function onSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  var onLogout = function onLogout() {
    void dispatch((0,linm_web_common_components_dist/* logout */.rig)());
    setOk(false);
    setMessage('');
  };
  if (authed && user) {
    var name = user.fullName || user.username;
    return /*#__PURE__*/(0,jsx_runtime.jsxs)("section", {
      className: dev_DevPage_module.loginCard,
      "data-feature": "dev-login",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: dev_DevPage_module.loginHead,
        children: "\u0110\u0103ng nh\u1EADp"
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
        className: dev_DevPage_module.loginSession,
        children: [name, user.companyCode ? " \xB7 ".concat(user.companyCode) : '']
      }), message ? /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
        className: ok ? dev_DevPage_module.loginOk : dev_DevPage_module.loginErr,
        role: "status",
        children: message
      }) : null, /*#__PURE__*/(0,jsx_runtime.jsx)("button", {
        type: "button",
        className: dev_DevPage_module.loginButton,
        onClick: onLogout,
        disabled: busy,
        children: "\u0110\u0103ng xu\u1EA5t"
      })]
    });
  }
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("form", {
    className: dev_DevPage_module.loginCard,
    "data-feature": "dev-login",
    onSubmit: function onSubmit(e) {
      return void _onSubmit(e);
    },
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: dev_DevPage_module.loginHead,
      children: "\u0110\u0103ng nh\u1EADp"
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("label", {
      className: dev_DevPage_module.loginLabel,
      htmlFor: "dev-login-user",
      children: ["T\xE0i kho\u1EA3n", /*#__PURE__*/(0,jsx_runtime.jsx)("input", {
        id: "dev-login-user",
        className: dev_DevPage_module.loginInput,
        autoComplete: "username",
        value: username,
        onChange: function onChange(e) {
          return setUsername(e.target.value);
        }
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("label", {
      className: dev_DevPage_module.loginLabel,
      htmlFor: "dev-login-pass",
      children: ["M\u1EADt kh\u1EA9u", /*#__PURE__*/(0,jsx_runtime.jsx)("input", {
        id: "dev-login-pass",
        className: dev_DevPage_module.loginInput,
        type: "password",
        autoComplete: "current-password",
        value: password,
        onChange: function onChange(e) {
          return setPassword(e.target.value);
        }
      })]
    }), message ? /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
      className: ok ? dev_DevPage_module.loginOk : dev_DevPage_module.loginErr,
      role: "alert",
      children: message
    }) : null, /*#__PURE__*/(0,jsx_runtime.jsx)("button", {
      type: "submit",
      className: dev_DevPage_module.loginButton,
      disabled: busy,
      children: busy ? 'Đang đăng nhập…' : 'Đăng nhập'
    })]
  });
};
/* harmony default export */ const dev_DevLoginCard = ((/* unused pure expression or super */ null && (DevLoginCard)));
;// ./src/dev/DevPageView.tsx








var BADGE_CLASS = {
  GET: dev_DevPage_module.badgeGET,
  FORM: dev_DevPage_module.badgeFORM,
  DETAIL: dev_DevPage_module.badgeDETAIL,
  REPORT: dev_DevPage_module.badgeREPORT,
  MANAGE: dev_DevPage_module.badgeMANAGE
};
var LEGEND = ['GET', 'FORM', 'DETAIL', 'REPORT', 'MANAGE'];
var DevPage = function DevPage(_ref) {
  var _ref2;
  var modules = _ref.modules,
    appName = _ref.appName;
  var authed = (0,hooks/* useAppSelector */.G)(function (s) {
    return s.auth.isAuthenticated;
  });
  var localDocker = (0,viteLocal/* isViteLocal */.e)();
  var totalRoutes = modules.reduce(function (s, m) {
    return s + m.routes.length;
  }, 0);
  var title = (_ref2 = appName !== null && appName !== void 0 ? appName : "RMMS FieldOps") !== null && _ref2 !== void 0 ? _ref2 : 'ERP';
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: dev_DevPage_module.page,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: dev_DevPage_module.inner,
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("header", {
        className: dev_DevPage_module.header,
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: dev_DevPage_module.titleRow,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("h1", {
            className: dev_DevPage_module.title,
            children: "Dev Navigation"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
            className: dev_DevPage_module.devTag,
            children: "DEV ONLY"
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
          className: dev_DevPage_module.subtitle,
          children: [title, " \xB7 ", totalRoutes, " routes \xB7 ", modules.length, " nh\xF3m \xB7 Click \u0111\u1EC3 m\u1EDF trang", /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
            className: dev_DevPage_module.badgeLegend,
            children: LEGEND.map(function (b) {
              return /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                className: "".concat(dev_DevPage_module.legendTag, " ").concat(dev_DevPage_module["legend".concat(b)]),
                children: b
              }, b);
            })
          })]
        })]
      }), localDocker ? null : /*#__PURE__*/(0,jsx_runtime.jsx)(DevLoginCard, {}), localDocker || authed ? /*#__PURE__*/(0,jsx_runtime.jsx)(linm_web_common_components_dist/* DevCompanyPicker */.TXv, {}) : null, /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: dev_DevPage_module.grid,
        children: modules.map(function (mod) {
          return /*#__PURE__*/(0,jsx_runtime.jsxs)("section", {
            className: dev_DevPage_module.card,
            style: {
              '--module-color': mod.color
            },
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: dev_DevPage_module.cardHeader,
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)("i", {
                className: mod.iconClass,
                "aria-hidden": true
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                children: mod.title
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                className: dev_DevPage_module.count,
                children: mod.routes.length
              })]
            }), mod.routes.map(function (r, i) {
              return /*#__PURE__*/(0,jsx_runtime.jsxs)(external_react_["default"].Fragment, {
                children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(dist/* Link */.N_, {
                  to: r.url,
                  className: dev_DevPage_module.routeLink,
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                    className: dev_DevPage_module.routeLabel,
                    children: r.label
                  }), /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
                    className: dev_DevPage_module.routeMeta,
                    children: [r.badge && /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                      className: "".concat(dev_DevPage_module.routeBadge, " ").concat(BADGE_CLASS[r.badge]),
                      children: r.badge
                    }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                      className: dev_DevPage_module.routeUrl,
                      children: r.url
                    })]
                  })]
                }), i < mod.routes.length - 1 && /*#__PURE__*/(0,jsx_runtime.jsx)("hr", {
                  className: dev_DevPage_module.divider
                })]
              }, r.url);
            })]
          }, mod.prefix);
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
        className: dev_DevPage_module.footer,
        children: ["Ch\u1EC9 hi\u1EC3n th\u1ECB khi ", /*#__PURE__*/(0,jsx_runtime.jsx)("code", {
          children: "yarn start:std"
        }), ". Kh\xF4ng c\xF3 trong production build t\xEDch h\u1EE3p root."]
      })]
    })
  });
};
/* harmony default export */ const DevPageView = ((/* unused pure expression or super */ null && (DevPage)));
// EXTERNAL MODULE: ./src/dev/devRoutes.ts
var devRoutes = __webpack_require__(2529);
;// ./src/dev/DevPageRoute.tsx




var DevPageRoute = function DevPageRoute() {
  return /*#__PURE__*/(0,jsx_runtime.jsx)(DevPage, {
    modules: devRoutes/* DEV_MODULES */.U,
    appName: "RMMS FieldOps"
  });
};
/* harmony default export */ const dev_DevPageRoute = (DevPageRoute);

/***/ },

/***/ 4806
(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.page___ZlGlw {
  padding: 24px 32px;
  background: var(--color-bg-page, #f5f7fa);
  min-height: 100%;
  box-sizing: border-box;
}

.inner___l5nmW {
  max-width: 1400px;
  margin: 0 auto;
}

.header___uGSe0 {
  margin-bottom: 24px;
}

.titleRow___NwHzz {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.title___C0EL2 {
  margin: 0;
  font-size: 22px;
  font-weight: 700;
  color: var(--color-primary, #0d6efd);
}

.devTag___CevfF {
  display: inline-block;
  padding: 2px 10px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
  background: #fff1f0;
  color: #cf1322;
  border: 1px solid #ffccc7;
}

.subtitle___DS80Y {
  margin: 8px 0 0;
  font-size: 13px;
  color: var(--color-text-secondary, #6c757d);
}

.badgeLegend___OSppw {
  display: inline-flex;
  gap: 6px;
  margin-left: 16px;
  flex-wrap: wrap;
}

.legendTag___jti6g {
  display: inline-block;
  padding: 1px 8px;
  border-radius: 4px;
  font-size: 11px;
  font-weight: 500;
}

.legendGET___DdW3a { background: #e6f4ff; color: #0958d9; }
.legendFORM___t4_85 { background: #f6ffed; color: #389e0d; }
.legendDETAIL___Jd4jr { background: #f9f0ff; color: #531dab; }
.legendREPORT___VEn4f { background: #fffbe6; color: #d48806; }
.legendMANAGE___q7CVE { background: #fff7e6; color: #d46b08; }

.grid___jfSkO {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 16px;
}

.card___bryzS {
  background: var(--ds-color-bg-white, #fff);
  border: 1px solid var(--color-border-light, #e9ecef);
  border-radius: 8px;
  overflow: hidden;
  border-top: 3px solid var(--module-color, #1677ff);
}

.cardHeader___EZnqE {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 12px;
  border-bottom: 2px solid var(--module-color, #1677ff);
  font-weight: 700;
  font-size: 13px;
}

.cardHeader___EZnqE i {
  color: var(--module-color, #1677ff);
  width: 18px;
  text-align: center;
}

.count___akxrc {
  margin-left: auto;
  font-size: 11px;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 10px;
  background: var(--module-color, #1677ff);
  color: #fff;
}

.routeLink___bmwCk {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 8px 12px;
  color: var(--color-text-primary, #212529);
  text-decoration: none;
  font-size: 13px;
  transition: background 0.15s;
}

.routeLink___bmwCk:hover {
  background: var(--ds-color-primary-bg, rgba(13, 110, 253, 0.06));
}

.routeLabel___kPWZ5 {
  flex: 1;
  min-width: 0;
}

.routeMeta___er7gj {
  display: flex;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
}

.routeBadge___qOrCZ {
  font-size: 10px;
  font-weight: 600;
  padding: 1px 6px;
  border-radius: 4px;
  line-height: 18px;
}

.badgeGET___DWomJ { background: #e6f4ff; color: #0958d9; }
.badgeFORM___G2x_K { background: #f6ffed; color: #389e0d; }
.badgeDETAIL___VH2An { background: #f9f0ff; color: #531dab; }
.badgeREPORT___Tm97D { background: #fffbe6; color: #d48806; }
.badgeMANAGE____J8VI { background: #fff7e6; color: #d46b08; }

.routeUrl___TVj2J {
  font-size: 11px;
  font-family: ui-monospace, monospace;
  color: var(--color-text-secondary, #6c757d);
}

.divider___YFHzS {
  height: 1px;
  background: #f0f0f0;
  margin: 0;
}

.footer___P0bIR {
  margin-top: 24px;
  text-align: center;
  font-size: 12px;
  color: var(--color-text-secondary, #6c757d);
}

.loginCard___swSkn {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  gap: 12px;
  margin-bottom: 16px;
  padding: 16px;
  background: #fff;
  border: 1px solid var(--color-border-light, #e9ecef);
  border-radius: 8px;
  border-top: 3px solid var(--color-primary, #0d6efd);
}

.loginHead___AScSo {
  flex: 1 0 100%;
  font-size: 14px;
  font-weight: 700;
  color: var(--color-primary, #0d6efd);
}

.loginLabel___DJQ16 {
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 12px;
  color: var(--color-text-secondary, #6c757d);
  min-width: 180px;
}

.loginInput___GkPml {
  height: 36px;
  padding: 0 10px;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  font-size: 14px;
  color: #212529;
  background: #fff;
}

.loginButton___tIZRp {
  height: 36px;
  padding: 0 16px;
  border: 0;
  border-radius: 6px;
  background: var(--color-primary, #0d6efd);
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
}

.loginButton___tIZRp:disabled {
  opacity: 0.7;
  cursor: default;
}

.loginSession___mEPs6 {
  margin: 0;
  font-size: 14px;
  color: #212529;
}

.loginOk___KofiV,
.loginErr___SdqTu {
  flex: 1 0 100%;
  margin: 0;
  font-size: 13px;
}

.loginOk___KofiV { color: #389e0d; }
.loginErr___SdqTu { color: #cf1322; }
`, "",{"version":3,"sources":["webpack://./src/dev/DevPage.module.css"],"names":[],"mappings":"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","sourcesContent":[".page {\n  padding: 24px 32px;\n  background: var(--color-bg-page, #f5f7fa);\n  min-height: 100%;\n  box-sizing: border-box;\n}\n\n.inner {\n  max-width: 1400px;\n  margin: 0 auto;\n}\n\n.header {\n  margin-bottom: 24px;\n}\n\n.titleRow {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n\n.title {\n  margin: 0;\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--color-primary, #0d6efd);\n}\n\n.devTag {\n  display: inline-block;\n  padding: 2px 10px;\n  border-radius: 4px;\n  font-size: 12px;\n  font-weight: 600;\n  background: #fff1f0;\n  color: #cf1322;\n  border: 1px solid #ffccc7;\n}\n\n.subtitle {\n  margin: 8px 0 0;\n  font-size: 13px;\n  color: var(--color-text-secondary, #6c757d);\n}\n\n.badgeLegend {\n  display: inline-flex;\n  gap: 6px;\n  margin-left: 16px;\n  flex-wrap: wrap;\n}\n\n.legendTag {\n  display: inline-block;\n  padding: 1px 8px;\n  border-radius: 4px;\n  font-size: 11px;\n  font-weight: 500;\n}\n\n.legendGET { background: #e6f4ff; color: #0958d9; }\n.legendFORM { background: #f6ffed; color: #389e0d; }\n.legendDETAIL { background: #f9f0ff; color: #531dab; }\n.legendREPORT { background: #fffbe6; color: #d48806; }\n.legendMANAGE { background: #fff7e6; color: #d46b08; }\n\n.grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  gap: 16px;\n}\n\n.card {\n  background: var(--ds-color-bg-white, #fff);\n  border: 1px solid var(--color-border-light, #e9ecef);\n  border-radius: 8px;\n  overflow: hidden;\n  border-top: 3px solid var(--module-color, #1677ff);\n}\n\n.cardHeader {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 12px;\n  border-bottom: 2px solid var(--module-color, #1677ff);\n  font-weight: 700;\n  font-size: 13px;\n}\n\n.cardHeader i {\n  color: var(--module-color, #1677ff);\n  width: 18px;\n  text-align: center;\n}\n\n.count {\n  margin-left: auto;\n  font-size: 11px;\n  font-weight: 600;\n  padding: 2px 8px;\n  border-radius: 10px;\n  background: var(--module-color, #1677ff);\n  color: #fff;\n}\n\n.routeLink {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n  padding: 8px 12px;\n  color: var(--color-text-primary, #212529);\n  text-decoration: none;\n  font-size: 13px;\n  transition: background 0.15s;\n}\n\n.routeLink:hover {\n  background: var(--ds-color-primary-bg, rgba(13, 110, 253, 0.06));\n}\n\n.routeLabel {\n  flex: 1;\n  min-width: 0;\n}\n\n.routeMeta {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-shrink: 0;\n}\n\n.routeBadge {\n  font-size: 10px;\n  font-weight: 600;\n  padding: 1px 6px;\n  border-radius: 4px;\n  line-height: 18px;\n}\n\n.badgeGET { background: #e6f4ff; color: #0958d9; }\n.badgeFORM { background: #f6ffed; color: #389e0d; }\n.badgeDETAIL { background: #f9f0ff; color: #531dab; }\n.badgeREPORT { background: #fffbe6; color: #d48806; }\n.badgeMANAGE { background: #fff7e6; color: #d46b08; }\n\n.routeUrl {\n  font-size: 11px;\n  font-family: ui-monospace, monospace;\n  color: var(--color-text-secondary, #6c757d);\n}\n\n.divider {\n  height: 1px;\n  background: #f0f0f0;\n  margin: 0;\n}\n\n.footer {\n  margin-top: 24px;\n  text-align: center;\n  font-size: 12px;\n  color: var(--color-text-secondary, #6c757d);\n}\n\n.loginCard {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-end;\n  gap: 12px;\n  margin-bottom: 16px;\n  padding: 16px;\n  background: #fff;\n  border: 1px solid var(--color-border-light, #e9ecef);\n  border-radius: 8px;\n  border-top: 3px solid var(--color-primary, #0d6efd);\n}\n\n.loginHead {\n  flex: 1 0 100%;\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--color-primary, #0d6efd);\n}\n\n.loginLabel {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  font-size: 12px;\n  color: var(--color-text-secondary, #6c757d);\n  min-width: 180px;\n}\n\n.loginInput {\n  height: 36px;\n  padding: 0 10px;\n  border: 1px solid #d9d9d9;\n  border-radius: 6px;\n  font-size: 14px;\n  color: #212529;\n  background: #fff;\n}\n\n.loginButton {\n  height: 36px;\n  padding: 0 16px;\n  border: 0;\n  border-radius: 6px;\n  background: var(--color-primary, #0d6efd);\n  color: #fff;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n}\n\n.loginButton:disabled {\n  opacity: 0.7;\n  cursor: default;\n}\n\n.loginSession {\n  margin: 0;\n  font-size: 14px;\n  color: #212529;\n}\n\n.loginOk,\n.loginErr {\n  flex: 1 0 100%;\n  margin: 0;\n  font-size: 13px;\n}\n\n.loginOk { color: #389e0d; }\n.loginErr { color: #cf1322; }\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"page": `page___ZlGlw`,
	"inner": `inner___l5nmW`,
	"header": `header___uGSe0`,
	"titleRow": `titleRow___NwHzz`,
	"title": `title___C0EL2`,
	"devTag": `devTag___CevfF`,
	"subtitle": `subtitle___DS80Y`,
	"badgeLegend": `badgeLegend___OSppw`,
	"legendTag": `legendTag___jti6g`,
	"legendGet": `legendGET___DdW3a`,
	"legendForm": `legendFORM___t4_85`,
	"legendDetail": `legendDETAIL___Jd4jr`,
	"legendReport": `legendREPORT___VEn4f`,
	"legendManage": `legendMANAGE___q7CVE`,
	"grid": `grid___jfSkO`,
	"card": `card___bryzS`,
	"cardHeader": `cardHeader___EZnqE`,
	"count": `count___akxrc`,
	"routeLink": `routeLink___bmwCk`,
	"routeLabel": `routeLabel___kPWZ5`,
	"routeMeta": `routeMeta___er7gj`,
	"routeBadge": `routeBadge___qOrCZ`,
	"badgeGet": `badgeGET___DWomJ`,
	"badgeForm": `badgeFORM___G2x_K`,
	"badgeDetail": `badgeDETAIL___VH2An`,
	"badgeReport": `badgeREPORT___Tm97D`,
	"badgeManage": `badgeMANAGE____J8VI`,
	"routeUrl": `routeUrl___TVj2J`,
	"divider": `divider___YFHzS`,
	"footer": `footer___P0bIR`,
	"loginCard": `loginCard___swSkn`,
	"loginHead": `loginHead___AScSo`,
	"loginLabel": `loginLabel___DJQ16`,
	"loginInput": `loginInput___GkPml`,
	"loginButton": `loginButton___tIZRp`,
	"loginSession": `loginSession___mEPs6`,
	"loginOk": `loginOk___KofiV`,
	"loginErr": `loginErr___SdqTu`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);

/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ }

}]);
//# sourceMappingURL=dev.14a81dc5.linm-rmms-field.js.map