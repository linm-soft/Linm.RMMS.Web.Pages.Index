"use strict";
(self["webpackChunkrmms_field"] = self["webpackChunkrmms_field"] || []).push([[397],{

/***/ 7786
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ BcThPage_BcThPage)
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
// EXTERNAL MODULE: ./node_modules/@linm-soft-org/linm-web-common-components/dist/index.js + 583 modules
var dist = __webpack_require__(8755);
// EXTERNAL MODULE: ./src/router/navigateInAppPath.ts
var navigateInAppPath = __webpack_require__(2381);
// EXTERNAL MODULE: ./src/services/api.ts
var api = __webpack_require__(8724);
;// ./src/services/patrol/bcThEndpoint.ts




var BASE = '/patrol/bc-th';
var EMPTY_COLUMN = {
  groupCount: 0,
  checkInCount: 0,
  userCount: 0,
  groups: []
};
var EMPTY_BC_TH_DETAIL = {
  levels: {
    khu: EMPTY_COLUMN,
    vanPhong: EMPTY_COLUMN,
    phong: EMPTY_COLUMN
  },
  rows: []
};
function qs(query, extra) {
  var params = new URLSearchParams();
  params.set('grain', query.grain);
  params.set('from', query.from);
  params.set('to', query.to);
  if (query.route) params.set('route', query.route);
  if (query.zoneOrgCode) params.set('zoneOrgCode', query.zoneOrgCode);
  if (extra) {
    Object.entries(extra).forEach(function (_ref) {
      var _ref2 = (0,slicedToArray/* default */.A)(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];
      if (value) params.set(key, value);
    });
  }
  return params.toString();
}
var bcThEndpoint = {
  summary: function () {
    var _summary = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee(query) {
      var res;
      return regenerator_default().wrap(function (_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 1;
            return api/* apiClient */.u.get("".concat(BASE, "/summary?").concat(qs(query)));
          case 1:
            res = _context.sent;
            return _context.abrupt("return", (0,api/* unwrap */.o)(res));
          case 2:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    function summary(_x) {
      return _summary.apply(this, arguments);
    }
    return summary;
  }(),
  detail: function () {
    var _detail = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee2(query, indicator, bucket, group) {
      var _unwrap;
      var res;
      return regenerator_default().wrap(function (_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 1;
            return api/* apiClient */.u.get("".concat(BASE, "/detail?").concat(qs(query, {
              indicator: indicator,
              bucket: bucket !== null && bucket !== void 0 ? bucket : '',
              group: group !== null && group !== void 0 ? group : ''
            })));
          case 1:
            res = _context2.sent;
            return _context2.abrupt("return", (_unwrap = (0,api/* unwrap */.o)(res)) !== null && _unwrap !== void 0 ? _unwrap : EMPTY_BC_TH_DETAIL);
          case 2:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    function detail(_x2, _x3, _x4, _x5) {
      return _detail.apply(this, arguments);
    }
    return detail;
  }(),
  exportFile: function exportFile(query, format) {
    return api/* apiClient */.u.getBlob("".concat(BASE, "/export?").concat(qs(query, {
      format: format
    })));
  }
};
;// ./src/pages/BcThPage/bcThManagerLabels.ts
var LABELS = {
  'bcTh.manager.khu': 'Khu quản lý',
  'bcTh.manager.vanPhong': 'Văn phòng',
  'bcTh.manager.phong': 'Phòng/Công ty',
  'bcTh.manager.sessions': 'phiên',
  'bcTh.manager.people': 'người',
  'bcTh.manager.empty': 'Chưa có tên',
  'bcTh.manager.collapse': 'Thu gọn',
  'bcTh.manager.clear': 'Xóa lọc',
  'bcTh.manager.route': 'Tuyến',
  'bcTh.manager.staff': 'Nhân viên',
  'bcTh.manager.sessionsCol': 'Số phiên'
};
function bcThLabel(key) {
  var _LABELS$key;
  return (_LABELS$key = LABELS[key]) !== null && _LABELS$key !== void 0 ? _LABELS$key : key;
}
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
;// ./src/pages/BcThPage/BcThChart.tsx



var BC_TH_COLORS = ['#1677ff', '#52c41a', '#fa8c16', '#722ed1', '#eb2f96', '#13c2c2'];
var BcThChart = function BcThChart(_ref) {
  var testIdPrefix = _ref.testIdPrefix,
    points = _ref.points,
    series = _ref.series,
    onPick = _ref.onPick;
  var buckets = Array.from(new Set(points.map(function (p) {
    return p.bucketStart.slice(0, 10);
  }))).sort();
  var max = Math.max.apply(Math, [1].concat((0,toConsumableArray/* default */.A)(points.map(function (p) {
    return p.value;
  }))));
  var slot = 22;
  var groupWidth = series.length * slot + 8;
  var width = Math.max(320, buckets.length * groupWidth + 16);
  var height = 176;
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    "data-testid": "".concat(testIdPrefix, "-chart"),
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("svg", {
      viewBox: "0 0 ".concat(width, " ").concat(height),
      width: width,
      height: height,
      role: "img",
      children: buckets.map(function (bucket, index) {
        return /*#__PURE__*/(0,jsx_runtime.jsxs)("g", {
          transform: "translate(".concat(8 + index * groupWidth, ", 0)"),
          children: [series.map(function (item, seriesIndex) {
            var _points$find$value, _points$find;
            var value = (_points$find$value = (_points$find = points.find(function (p) {
              return p.indicatorCode === item.code && p.bucketStart.slice(0, 10) === bucket;
            })) === null || _points$find === void 0 ? void 0 : _points$find.value) !== null && _points$find$value !== void 0 ? _points$find$value : 0;
            var barHeight = value / max * 112;
            var y = 136 - barHeight;
            return /*#__PURE__*/(0,jsx_runtime.jsxs)("g", {
              children: [value > 0 ? /*#__PURE__*/(0,jsx_runtime.jsx)("text", {
                x: seriesIndex * slot + 6,
                y: Math.max(10, y - 2),
                textAnchor: "middle",
                fontSize: 9,
                fill: "#262626",
                children: value
              }) : null, /*#__PURE__*/(0,jsx_runtime.jsx)("rect", {
                x: seriesIndex * slot,
                y: y,
                width: 12,
                height: Math.max(barHeight, value > 0 ? 2 : 0),
                fill: BC_TH_COLORS[seriesIndex % BC_TH_COLORS.length],
                "data-testid": "".concat(testIdPrefix, "-bar-").concat(item.code, "-").concat(bucket),
                onClick: function onClick() {
                  return onPick(item.code, bucket);
                },
                children: /*#__PURE__*/(0,jsx_runtime.jsx)("title", {
                  children: "".concat(item.label, " ").concat(bucket, ": ").concat(value)
                })
              })]
            }, item.code);
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("text", {
            x: 0,
            y: 164,
            fontSize: 9,
            fill: "#595959",
            children: bucket.slice(5)
          })]
        }, bucket);
      })
    })
  });
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./src/pages/BcThPage/BcThPage.module.css
var BcThPage_module = __webpack_require__(6664);
;// ./src/pages/BcThPage/BcThPage.module.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(BcThPage_module/* default */.A, options);




       /* harmony default export */ const BcThPage_BcThPage_module = (BcThPage_module/* default */.A && BcThPage_module/* default */.A.locals ? BcThPage_module/* default */.A.locals : undefined);

;// ./src/pages/BcThPage/BcThPage.tsx





function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,defineProperty/* default */.A)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
;








var TEST_ID = 'rmms-bc-th';
var PAGE_ID = 'bc-th';
var GRAIN_OPTIONS = [{
  value: 'day',
  label: 'Ngày'
}, {
  value: 'month',
  label: 'Tháng'
}, {
  value: 'year',
  label: 'Năm'
}];
var SESSION_SERIES = [{
  code: 'td_sessions',
  label: 'Số phiên tuần đường'
}, {
  code: 'td_staff',
  label: 'Số người tuần đường'
}, {
  code: 'tk_sessions',
  label: 'Số phiên tuần kiểm'
}, {
  code: 'tk_staff',
  label: 'Số người tuần kiểm'
}];
var TASK_SERIES = [{
  code: 'task_created',
  label: 'Task mới tạo'
}, {
  code: 'task_assigned',
  label: 'Task đã giao'
}, {
  code: 'task_in_progress',
  label: 'Task đang xử lý'
}, {
  code: 'task_completed',
  label: 'Task hoàn thành'
}, {
  code: 'task_cancelled',
  label: 'Task đã hủy'
}];
function isoDay(d) {
  return "".concat(d.getFullYear(), "-").concat(String(d.getMonth() + 1).padStart(2, '0'), "-").concat(String(d.getDate()).padStart(2, '0'));
}
function defaultRange(grain) {
  var today = new Date();
  var to = isoDay(today);
  if (grain === 'year') {
    var _from = new Date(today.getFullYear() - 2, 0, 1);
    return {
      from: isoDay(_from),
      to: to
    };
  }
  if (grain === 'month') {
    var _from2 = new Date(today.getFullYear(), today.getMonth() - 5, 1);
    return {
      from: isoDay(_from2),
      to: to
    };
  }
  var from = new Date(today);
  from.setDate(from.getDate() - 13);
  return {
    from: isoDay(from),
    to: to
  };
}
function saveBlob(blob, name) {
  var url = URL.createObjectURL(blob);
  var a = document.createElement('a');
  a.href = url;
  a.download = name;
  a.click();
  URL.revokeObjectURL(url);
}
var LEVELS = [{
  key: 'khu',
  label: bcThLabel('bcTh.manager.khu')
}, {
  key: 'vanPhong',
  label: bcThLabel('bcTh.manager.vanPhong')
}, {
  key: 'phong',
  label: bcThLabel('bcTh.manager.phong')
}];
function buildLevelGrid(rows) {
  var grouped = new Map();
  rows.forEach(function (row) {
    var _row$khuName, _row$vanPhongName, _row$phongName, _row$routeName;
    var khu = ((_row$khuName = row.khuName) === null || _row$khuName === void 0 ? void 0 : _row$khuName.trim()) || '';
    var vp = ((_row$vanPhongName = row.vanPhongName) === null || _row$vanPhongName === void 0 ? void 0 : _row$vanPhongName.trim()) || '';
    var phong = ((_row$phongName = row.phongName) === null || _row$phongName === void 0 ? void 0 : _row$phongName.trim()) || '';
    var route = ((_row$routeName = row.routeName) === null || _row$routeName === void 0 ? void 0 : _row$routeName.trim()) || '';
    var person = (row.actorName || (row.kind === 'task' ? row.title : '')).trim();
    var key = [khu, vp, phong, route, person].join("\x1F");
    var hit = grouped.get(key);
    if (hit) {
      hit.count += 1;
      return;
    }
    grouped.set(key, {
      khu: khu,
      vp: vp,
      phong: phong,
      route: route,
      person: person,
      count: 1,
      refId: row.refId,
      kind: row.kind,
      khuSpan: 1,
      vpSpan: 1,
      phongSpan: 1,
      showKhu: true,
      showVp: true,
      showPhong: true
    });
  });
  var lines = (0,toConsumableArray/* default */.A)(grouped.values()).sort(function (a, b) {
    return a.khu.localeCompare(b.khu, 'vi') || a.vp.localeCompare(b.vp, 'vi') || a.phong.localeCompare(b.phong, 'vi') || a.route.localeCompare(b.route, 'vi') || a.person.localeCompare(b.person, 'vi');
  });
  var span = function span(index, same, set, hide) {
    var size = 1;
    while (index + size < lines.length && same(lines[index + size])) size += 1;
    set(lines[index], size);
    for (var step = 1; step < size; step += 1) hide(lines[index + step]);
  };
  var _loop = function _loop() {
    var line = lines[index];
    if (line.showKhu) {
      span(index, function (next) {
        return next.khu === line.khu;
      }, function (row, n) {
        row.khuSpan = n;
      }, function (row) {
        row.showKhu = false;
      });
    }
    if (line.showVp) {
      span(index, function (next) {
        return next.khu === line.khu && next.vp === line.vp;
      }, function (row, n) {
        row.vpSpan = n;
      }, function (row) {
        row.showVp = false;
      });
    }
    if (line.showPhong) {
      span(index, function (next) {
        return next.khu === line.khu && next.vp === line.vp && next.phong === line.phong;
      }, function (row, n) {
        row.phongSpan = n;
      }, function (row) {
        row.showPhong = false;
      });
    }
  };
  for (var index = 0; index < lines.length; index += 1) {
    _loop();
  }
  return lines;
}
function activityLine(column) {
  return "".concat(column.checkInCount, " ").concat(bcThLabel('bcTh.manager.sessions'), " \xB7 ").concat(column.userCount, " ").concat(bcThLabel('bcTh.manager.people'));
}
var ManagerDetail = function ManagerDetail(_ref) {
  var _detail$levels, _open$cell$groups;
  var detail = _ref.detail,
    openLevel = _ref.openLevel,
    group = _ref.group,
    onOpenLevel = _ref.onOpenLevel,
    onGroup = _ref.onGroup,
    onOpen = _ref.onOpen;
  var levels = (_detail$levels = detail.levels) !== null && _detail$levels !== void 0 ? _detail$levels : EMPTY_BC_TH_DETAIL.levels;
  var columns = LEVELS.map(function (level) {
    var _levels$level$key;
    return _objectSpread(_objectSpread({}, level), {}, {
      cell: (_levels$level$key = levels[level.key]) !== null && _levels$level$key !== void 0 ? _levels$level$key : EMPTY_BC_TH_DETAIL.levels.khu
    });
  });
  var open = columns.find(function (col) {
    return col.key === openLevel;
  });
  var cards = (_open$cell$groups = open === null || open === void 0 ? void 0 : open.cell.groups) !== null && _open$cell$groups !== void 0 ? _open$cell$groups : [];
  var showLevels = columns.some(function (col) {
    return col.cell.groupCount > 0 || col.cell.groups.length > 0;
  });
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [showLevels ? /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: BcThPage_BcThPage_module.levels,
      "data-testid": "".concat(TEST_ID, "-levels"),
      children: [columns.map(function (col) {
        return /*#__PURE__*/(0,jsx_runtime.jsxs)("button", {
          type: "button",
          className: openLevel === col.key ? "".concat(BcThPage_BcThPage_module.level, " ").concat(BcThPage_BcThPage_module.levelOn) : BcThPage_BcThPage_module.level,
          "aria-expanded": openLevel === col.key,
          onClick: function onClick() {
            return onOpenLevel(openLevel === col.key ? '' : col.key);
          },
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
            className: BcThPage_BcThPage_module.levelLabel,
            children: col.label
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
            className: BcThPage_BcThPage_module.levelCount,
            children: col.cell.groupCount
          })]
        }, col.key);
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: BcThPage_BcThPage_module.levelFoot,
        children: activityLine(columns[0].cell)
      }), open ? /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: BcThPage_BcThPage_module.nameList,
        children: cards.length === 0 ? /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
          className: BcThPage_BcThPage_module.empty,
          children: bcThLabel('bcTh.manager.empty')
        }) : cards.map(function (card, index) {
          return /*#__PURE__*/(0,jsx_runtime.jsx)(ManagerName, {
            card: card,
            previous: index > 0 ? cards[index - 1] : null,
            pressed: group === card.key,
            onClick: function onClick() {
              return onGroup(group === card.key ? '' : card.key);
            }
          }, card.key);
        })
      }) : null, openLevel || group ? /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: BcThPage_BcThPage_module.levelActions,
        children: [group ? /*#__PURE__*/(0,jsx_runtime.jsx)("button", {
          type: "button",
          className: BcThPage_BcThPage_module.textBtn,
          onClick: function onClick() {
            return onGroup('');
          },
          children: bcThLabel('bcTh.manager.clear')
        }) : null, openLevel ? /*#__PURE__*/(0,jsx_runtime.jsx)("button", {
          type: "button",
          className: BcThPage_BcThPage_module.textBtn,
          onClick: function onClick() {
            return onOpenLevel('');
          },
          children: bcThLabel('bcTh.manager.collapse')
        }) : null]
      }) : null]
    }) : null, detail.rows.length === 0 ? /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
      className: BcThPage_BcThPage_module.empty,
      children: "Kh\xF4ng c\xF3 d\xF2ng cho ch\u1EC9 s\u1ED1 n\xE0y."
    }) : /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: BcThPage_BcThPage_module.gridWrap,
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("table", {
        className: BcThPage_BcThPage_module.grid,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("thead", {
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("th", {
              children: bcThLabel('bcTh.manager.khu')
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
              children: bcThLabel('bcTh.manager.vanPhong')
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
              children: bcThLabel('bcTh.manager.phong')
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
              children: bcThLabel('bcTh.manager.route')
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
              children: bcThLabel('bcTh.manager.staff')
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
              children: bcThLabel('bcTh.manager.sessionsCol')
            })]
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("tbody", {
          children: buildLevelGrid(detail.rows).map(function (line) {
            return /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
              "data-testid": "".concat(TEST_ID, "-detail-row-").concat(line.refId),
              onClick: function onClick() {
                if (line.kind === 'session' && line.refId) onOpen(line.refId);
              },
              children: [line.showKhu ? /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                rowSpan: line.khuSpan,
                children: line.khu || '—'
              }) : null, line.showVp ? /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                rowSpan: line.vpSpan,
                children: line.vp || '—'
              }) : null, line.showPhong ? /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                rowSpan: line.phongSpan,
                children: line.phong || '—'
              }) : null, /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                children: line.route || '—'
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                children: line.person || '—'
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                children: line.count
              })]
            }, "".concat(line.khu, "-").concat(line.vp, "-").concat(line.phong, "-").concat(line.route, "-").concat(line.person, "-").concat(line.refId));
          })
        })]
      })
    })]
  });
};
var ManagerName = function ManagerName(_ref2) {
  var _previous$masterKey, _previous$parentKey;
  var card = _ref2.card,
    previous = _ref2.previous,
    pressed = _ref2.pressed,
    onClick = _ref2.onClick;
  var master = card.masterName.trim();
  var parent = card.parentName.trim();
  var showMaster = master.length > 0 && card.masterKey !== ((_previous$masterKey = previous === null || previous === void 0 ? void 0 : previous.masterKey) !== null && _previous$masterKey !== void 0 ? _previous$masterKey : '');
  var showParent = parent.length > 0 && (showMaster || card.parentKey !== ((_previous$parentKey = previous === null || previous === void 0 ? void 0 : previous.parentKey) !== null && _previous$parentKey !== void 0 ? _previous$parentKey : ''));
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [showMaster ? /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: BcThPage_BcThPage_module.masterHead,
      children: master
    }) : null, showParent ? /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: BcThPage_BcThPage_module.parentHead,
      children: parent
    }) : null, /*#__PURE__*/(0,jsx_runtime.jsxs)("button", {
      type: "button",
      className: pressed ? "".concat(BcThPage_BcThPage_module.nameBtn, " ").concat(BcThPage_BcThPage_module.nameBtnOn) : BcThPage_BcThPage_module.nameBtn,
      "aria-pressed": pressed,
      onClick: onClick,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        children: card.name
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        className: BcThPage_BcThPage_module.groupMeta,
        children: activityLine(card)
      })]
    })]
  });
};
var BcThPage = function BcThPage() {
  var dispatch = (0,react_redux/* useDispatch */.wA)();
  var navigate = (0,navigateInAppPath/* useInAppNavigate */.lc)();
  var initial = defaultRange('day');
  var _useState = (0,external_react_.useState)('day'),
    _useState2 = (0,slicedToArray/* default */.A)(_useState, 2),
    grain = _useState2[0],
    setGrain = _useState2[1];
  var _useState3 = (0,external_react_.useState)(initial.from),
    _useState4 = (0,slicedToArray/* default */.A)(_useState3, 2),
    from = _useState4[0],
    setFrom = _useState4[1];
  var _useState5 = (0,external_react_.useState)(initial.to),
    _useState6 = (0,slicedToArray/* default */.A)(_useState5, 2),
    to = _useState6[0],
    setTo = _useState6[1];
  var _useState7 = (0,external_react_.useState)(''),
    _useState8 = (0,slicedToArray/* default */.A)(_useState7, 2),
    route = _useState8[0],
    setRoute = _useState8[1];
  var _useState9 = (0,external_react_.useState)(''),
    _useState0 = (0,slicedToArray/* default */.A)(_useState9, 2),
    zoneOrgCode = _useState0[0],
    setZoneOrgCode = _useState0[1];
  var _useState1 = (0,external_react_.useState)(false),
    _useState10 = (0,slicedToArray/* default */.A)(_useState1, 2),
    viewed = _useState10[0],
    setViewed = _useState10[1];
  var _useState11 = (0,external_react_.useState)(false),
    _useState12 = (0,slicedToArray/* default */.A)(_useState11, 2),
    loading = _useState12[0],
    setLoading = _useState12[1];
  var _useState13 = (0,external_react_.useState)(null),
    _useState14 = (0,slicedToArray/* default */.A)(_useState13, 2),
    summary = _useState14[0],
    setSummary = _useState14[1];
  var _useState15 = (0,external_react_.useState)(null),
    _useState16 = (0,slicedToArray/* default */.A)(_useState15, 2),
    pick = _useState16[0],
    setPick = _useState16[1];
  var _useState17 = (0,external_react_.useState)(''),
    _useState18 = (0,slicedToArray/* default */.A)(_useState17, 2),
    group = _useState18[0],
    setGroup = _useState18[1];
  var _useState19 = (0,external_react_.useState)(''),
    _useState20 = (0,slicedToArray/* default */.A)(_useState19, 2),
    openLevel = _useState20[0],
    setOpenLevel = _useState20[1];
  var _useState21 = (0,external_react_.useState)(EMPTY_BC_TH_DETAIL),
    _useState22 = (0,slicedToArray/* default */.A)(_useState21, 2),
    detail = _useState22[0],
    setDetail = _useState22[1];
  var _useState23 = (0,external_react_.useState)(false),
    _useState24 = (0,slicedToArray/* default */.A)(_useState23, 2),
    detailLoading = _useState24[0],
    setDetailLoading = _useState24[1];
  var query = (0,external_react_.useMemo)(function () {
    return {
      grain: grain,
      from: from,
      to: to,
      route: route.trim() || undefined,
      zoneOrgCode: zoneOrgCode.trim() || undefined
    };
  }, [grain, from, to, route, zoneOrgCode]);
  var load = (0,external_react_.useCallback)(/*#__PURE__*/(0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee() {
    var data, message, _t;
    return regenerator_default().wrap(function (_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          setLoading(true);
          setPick(null);
          setGroup('');
          setOpenLevel('');
          setDetail(EMPTY_BC_TH_DETAIL);
          _context.prev = 1;
          _context.next = 2;
          return bcThEndpoint.summary(query);
        case 2:
          data = _context.sent;
          setSummary(data);
          setViewed(true);
          if (data.tasksUnavailable) {
            (0,dist/* dispatchAppToast */.tWi)(dispatch, {
              message: 'TaskService chưa trả series — phần tuần vẫn hiển thị',
              type: 'warning'
            });
          }
          _context.next = 4;
          break;
        case 3:
          _context.prev = 3;
          _t = _context["catch"](1);
          message = _t instanceof Error ? _t.message : 'Không tải được báo cáo';
          (0,dist/* dispatchAppToast */.tWi)(dispatch, {
            message: message,
            type: 'error'
          });
        case 4:
          _context.prev = 4;
          setLoading(false);
          return _context.finish(4);
        case 5:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[1, 3, 4, 5]]);
  })), [dispatch, query]);
  (0,external_react_.useEffect)(function () {
    if (!viewed || !pick || !summary) return;
    var timer = setTimeout(function () {
      setDetailLoading(true);
      bcThEndpoint.detail(query, pick.indicator, pick.bucket, group).then(function (data) {
        return setDetail(data);
      }).catch(function (err) {
        var message = err instanceof Error ? err.message : 'Không tải được chi tiết';
        (0,dist/* dispatchAppToast */.tWi)(dispatch, {
          message: message,
          type: 'error'
        });
        setDetail(EMPTY_BC_TH_DETAIL);
      }).finally(function () {
        return setDetailLoading(false);
      });
    }, 0);
    return function () {
      return clearTimeout(timer);
    };
  }, [viewed, pick, summary, query, group, dispatch]);
  var onGrain = function onGrain(next) {
    var range = defaultRange(next);
    setGrain(next);
    setFrom(range.from);
    setTo(range.to);
    setViewed(false);
    setSummary(null);
    setPick(null);
    setGroup('');
    setOpenLevel('');
  };
  var chooseIndicator = function chooseIndicator(indicator, bucket) {
    setPick({
      indicator: indicator,
      bucket: bucket
    });
    setGroup('');
    setOpenLevel('');
  };
  var exportAs = /*#__PURE__*/function () {
    var _ref4 = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee2(format) {
      var blob, message, _t2;
      return regenerator_default().wrap(function (_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            if (viewed) {
              _context2.next = 1;
              break;
            }
            return _context2.abrupt("return");
          case 1:
            _context2.prev = 1;
            _context2.next = 2;
            return bcThEndpoint.exportFile(query, format);
          case 2:
            blob = _context2.sent;
            saveBlob(blob, "bc-th.".concat(format));
            _context2.next = 4;
            break;
          case 3:
            _context2.prev = 3;
            _t2 = _context2["catch"](1);
            message = _t2 instanceof Error ? _t2.message : 'Không xuất được file';
            (0,dist/* dispatchAppToast */.tWi)(dispatch, {
              message: message,
              type: 'error'
            });
          case 4:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[1, 3]]);
    }));
    return function exportAs(_x) {
      return _ref4.apply(this, arguments);
    };
  }();
  var toolbar = /*#__PURE__*/(0,jsx_runtime.jsx)(dist/* LinListToolbar */.fYf, {
    testIdPrefix: TEST_ID,
    profile: "generic",
    actions: [{
      id: 'refresh',
      placement: 'left',
      testId: "".concat(TEST_ID, "-refresh"),
      render: function render() {
        return /*#__PURE__*/(0,jsx_runtime.jsx)(dist/* Button */.$nd, {
          variant: "secondary",
          size: "sm",
          "data-testid": "".concat(TEST_ID, "-refresh"),
          onClick: function onClick() {
            return void load();
          },
          children: (0,dist/* getErpListToolbarActionLabel */.br2)('refresh')
        });
      }
    }, {
      id: 'pdf',
      placement: 'right',
      testId: "".concat(TEST_ID, "-export-pdf"),
      render: function render() {
        return /*#__PURE__*/(0,jsx_runtime.jsx)(dist/* Button */.$nd, {
          variant: "secondary",
          size: "sm",
          "data-testid": "".concat(TEST_ID, "-export-pdf"),
          disabled: !viewed,
          onClick: function onClick() {
            return void exportAs('pdf');
          },
          children: "PDF"
        });
      }
    }, {
      id: 'docx',
      placement: 'right',
      testId: "".concat(TEST_ID, "-export-docx"),
      render: function render() {
        return /*#__PURE__*/(0,jsx_runtime.jsx)(dist/* Button */.$nd, {
          variant: "secondary",
          size: "sm",
          "data-testid": "".concat(TEST_ID, "-export-docx"),
          disabled: !viewed,
          onClick: function onClick() {
            return void exportAs('docx');
          },
          children: "Word"
        });
      }
    }, {
      id: 'csv',
      placement: 'right',
      testId: "".concat(TEST_ID, "-export-csv"),
      render: function render() {
        return /*#__PURE__*/(0,jsx_runtime.jsx)(dist/* Button */.$nd, {
          variant: "secondary",
          size: "sm",
          "data-testid": "".concat(TEST_ID, "-export-csv"),
          disabled: !viewed,
          onClick: function onClick() {
            return void exportAs('csv');
          },
          children: "CSV"
        });
      }
    }]
  });
  var clearView = function clearView() {
    setViewed(false);
    setSummary(null);
    setPick(null);
  };
  var listFilters = /*#__PURE__*/(0,jsx_runtime.jsx)(dist/* LinErpListFilterBar */.yEc, {
    testIdPrefix: TEST_ID,
    fromDate: from,
    toDate: to,
    dateLabel: "Th\u1EDDi gian",
    onDateChange: function onDateChange(nextFrom, nextTo) {
      setFrom(nextFrom !== null && nextFrom !== void 0 ? nextFrom : '');
      setTo(nextTo !== null && nextTo !== void 0 ? nextTo : '');
      clearView();
    },
    onSearch: function onSearch() {
      return void load();
    },
    searchAriaLabel: (0,dist/* getErpListToolbarActionLabel */.br2)('view'),
    loading: loading,
    dateLeading: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      "data-testid": "".concat(TEST_ID, "-field-grain"),
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(dist/* Select */.l6P, {
        label: "K\u1EF3",
        options: GRAIN_OPTIONS,
        value: grain,
        onChange: function onChange(e) {
          return onGrain(String(e.target.value));
        },
        "data-testid": "".concat(TEST_ID, "-grain"),
        fullWidth: true,
        size: "small"
      })
    }),
    leading: /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        "data-testid": "".concat(TEST_ID, "-field-route"),
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(dist/* Input */.pde, {
          label: "Tuy\u1EBFn",
          value: route,
          onChange: function onChange(e) {
            return setRoute(e.target.value);
          },
          "data-testid": "".concat(TEST_ID, "-route")
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        "data-testid": "".concat(TEST_ID, "-field-zone"),
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(dist/* Input */.pde, {
          label: "M\xE3 khu",
          value: zoneOrgCode,
          onChange: function onChange(e) {
            return setZoneOrgCode(e.target.value);
          },
          "data-testid": "".concat(TEST_ID, "-zone")
        })
      })]
    })
  });
  var legend = function legend(series) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: BcThPage_BcThPage_module.legend,
      children: series.map(function (item, index) {
        var _summary$cards$find;
        return /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("i", {
            className: BcThPage_BcThPage_module.swatch,
            style: {
              background: BC_TH_COLORS[index % BC_TH_COLORS.length]
            }
          }), (summary === null || summary === void 0 || (_summary$cards$find = summary.cards.find(function (c) {
            return c.indicatorCode === item.code;
          })) === null || _summary$cards$find === void 0 ? void 0 : _summary$cards$find.label) || item.label]
        }, item.code);
      })
    });
  };
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: BcThPage_BcThPage_module.page,
    "data-catalog-list-page": true,
    "data-lin-list-layout": "erp-filter-bar",
    "data-testid": "".concat(TEST_ID, "-page"),
    "data-required-permission": "patrol.bc-th.read",
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(dist/* LinPageLayout */.pYq, {
      kind: "report",
      listLayoutVariant: "erp-filter-bar",
      listHeaderClassName: dist/* LIN_ERP_LIST_FILTER_LAYOUT */.j9$.header,
      listFiltersClassName: dist/* LIN_ERP_LIST_FILTER_LAYOUT */.j9$.filtersHost,
      testIdPrefix: TEST_ID,
      pageId: PAGE_ID,
      header: {
        title: 'Báo cáo tổng hợp',
        titleIconClass: 'fas fa-chart-column',
        pageId: PAGE_ID
      },
      toolbar: toolbar,
      listTitle: "K\u1EBFt qu\u1EA3",
      filters: listFilters,
      filtersTestId: "".concat(TEST_ID, "-filters"),
      showTableLoading: false,
      pageLoading: loading,
      skeletonRows: 0,
      children: !viewed || !summary ? /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
        className: BcThPage_BcThPage_module.empty,
        "data-testid": "".concat(TEST_ID, "-hint"),
        children: "Nh\u1EA5n Xem \u0111\u1EC3 t\u1EA3i s\u1ED1 li\u1EC7u."
      }) : /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("section", {
          className: BcThPage_BcThPage_module.cards,
          "aria-label": "Ch\u1EC9 s\u1ED1",
          children: summary.cards.map(function (card) {
            return /*#__PURE__*/(0,jsx_runtime.jsxs)("button", {
              type: "button",
              className: "".concat(BcThPage_BcThPage_module.card).concat((pick === null || pick === void 0 ? void 0 : pick.indicator) === card.indicatorCode && !pick.bucket ? " ".concat(BcThPage_BcThPage_module.cardOn) : ''),
              "data-testid": "".concat(TEST_ID, "-card-").concat(card.indicatorCode),
              onClick: function onClick() {
                return chooseIndicator(card.indicatorCode);
              },
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                className: BcThPage_BcThPage_module.cardLabel,
                children: card.label
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                className: BcThPage_BcThPage_module.cardValue,
                children: card.value.toLocaleString('vi-VN')
              })]
            }, card.indicatorCode);
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("section", {
          className: BcThPage_BcThPage_module.chartCard,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("h2", {
            children: "Tu\u1EA7n \u0111\u01B0\u1EDDng / tu\u1EA7n ki\u1EC3m"
          }), legend(SESSION_SERIES), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: BcThPage_BcThPage_module.chartScroll,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(BcThChart, {
              testIdPrefix: "".concat(TEST_ID, "-patrol"),
              points: summary.points,
              series: SESSION_SERIES.map(function (item) {
                var _summary$cards$find2;
                return _objectSpread(_objectSpread({}, item), {}, {
                  label: ((_summary$cards$find2 = summary.cards.find(function (c) {
                    return c.indicatorCode === item.code;
                  })) === null || _summary$cards$find2 === void 0 ? void 0 : _summary$cards$find2.label) || item.label
                });
              }),
              onPick: chooseIndicator
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("section", {
          className: BcThPage_BcThPage_module.chartCard,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("h2", {
            children: "Tr\u1EA1ng th\xE1i task"
          }), legend(TASK_SERIES), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: BcThPage_BcThPage_module.chartScroll,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(BcThChart, {
              testIdPrefix: "".concat(TEST_ID, "-task"),
              points: summary.points,
              series: TASK_SERIES.map(function (item) {
                var _summary$cards$find3;
                return _objectSpread(_objectSpread({}, item), {}, {
                  label: ((_summary$cards$find3 = summary.cards.find(function (c) {
                    return c.indicatorCode === item.code;
                  })) === null || _summary$cards$find3 === void 0 ? void 0 : _summary$cards$find3.label) || item.label
                });
              }),
              onPick: chooseIndicator
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("section", {
          className: BcThPage_BcThPage_module.detail,
          "data-testid": "".concat(TEST_ID, "-detail"),
          children: !pick ? /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
            className: BcThPage_BcThPage_module.empty,
            children: "Ch\u1ECDn m\u1ED9t th\u1EBB ho\u1EB7c m\u1ED9t c\u1ED9t \u0111\u1EC3 xem d\xF2ng."
          }) : detailLoading ? /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
            className: BcThPage_BcThPage_module.empty,
            children: "\u0110ang t\u1EA3i chi ti\u1EBFt\u2026"
          }) : /*#__PURE__*/(0,jsx_runtime.jsx)(ManagerDetail, {
            detail: detail,
            openLevel: openLevel,
            group: group,
            onOpenLevel: setOpenLevel,
            onGroup: setGroup,
            onOpen: function onOpen(refId) {
              return navigate("/td-tk/".concat(encodeURIComponent(refId)));
            }
          })
        })]
      })
    })
  });
};
/* harmony default export */ const BcThPage_BcThPage = (BcThPage);
;// ./src/pages/BcThPage/index.ts


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

/***/ 6664
(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.page___Vi_M2 {
  height: 100%;
  min-height: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.cards___b9s83 {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 8px;
  margin-bottom: 12px;
}

.card___VSnfQ {
  text-align: left;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  background: #fff;
  padding: 10px 12px;
  cursor: pointer;
}

.cardOn___cE1ks {
  border-color: #1677ff;
  box-shadow: inset 0 0 0 1px #1677ff;
}

.cardLabel___MDQV3 {
  display: block;
  color: #595959;
  font-size: 12px;
}

.cardValue___DAVor {
  display: block;
  font-size: 22px;
  font-weight: 600;
}

.chartCard___UxcoC {
  border: 1px solid #f0f0f0;
  border-radius: 8px;
  padding: 8px 12px 12px;
  margin-bottom: 12px;
  background: #fff;
}

.chartCard___UxcoC h2 {
  margin: 0 0 8px;
  font-size: 14px;
}

.legend___hrlLF {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 12px;
  margin-bottom: 8px;
  font-size: 12px;
}

.swatch___oDIhh {
  display: inline-block;
  width: 10px;
  height: 10px;
  margin-right: 4px;
  border-radius: 2px;
}

.chartScroll___ct8uk {
  overflow-x: scroll;
  overflow-y: hidden;
}

.chartScroll___ct8uk svg {
  display: block;
  max-width: none;
}

.detail___yBu4_ table {
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
}

.detail___yBu4_ th,
.detail___yBu4_ td {
  border-bottom: 1px solid #f0f0f0;
  padding: 6px 8px;
  text-align: left;
}

.detail___yBu4_ tr {
  cursor: pointer;
}

.empty___sfJJd {
  color: #8c8c8c;
  padding: 12px 0;
}

.levels___v_pFl {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 8px;
  margin-bottom: 8px;
}

.level___P_HW6 {
  text-align: left;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  background: #fff;
  padding: 8px 10px;
  cursor: pointer;
}

.levelOn___JfOqx {
  border-color: #1677ff;
}

.levelLabel___BH2Ry {
  display: block;
  color: #595959;
  font-size: 12px;
}

.levelCount___zSCf9 {
  display: block;
  font-size: 20px;
  font-weight: 600;
}

.levelFoot___JGfj2,
.levelActions___pFzhX {
  grid-column: 1 / -1;
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  color: #595959;
  font-size: 12px;
}

.nameList____7tKg {
  grid-column: 1 / -1;
  max-height: 36vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.masterHead___WOhcr,
.parentHead___gSMbZ {
  font-size: 12px;
  font-weight: 600;
  color: #595959;
}

.parentHead___gSMbZ {
  padding-left: 8px;
}

.nameBtn___0asg6,
.textBtn___ToNlh,
.tag___pWMgZ {
  border: 1px solid #f0f0f0;
  border-radius: 8px;
  background: #fff;
  text-align: left;
  cursor: pointer;
}

.nameBtn___0asg6 {
  display: flex;
  justify-content: space-between;
  gap: 8px;
  padding: 8px 10px;
}

.nameBtnOn___JrbqB {
  border-color: #1677ff;
}

.groupMeta___HIwV5 {
  color: #8c8c8c;
  font-size: 12px;
}

.textBtn___ToNlh {
  padding: 4px 8px;
  color: #1677ff;
}

.gridWrap___qpCma {
  overflow: auto;
  max-height: 48vh;
  margin-top: 8px;
}

.grid___jhelK {
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
}

.grid___jhelK th,
.grid___jhelK td {
  border: 1px solid #f0f0f0;
  padding: 6px 8px;
  text-align: left;
  vertical-align: top;
}

.grid___jhelK th {
  position: sticky;
  top: 0;
  background: #fafafa;
  font-weight: 600;
}

.grid___jhelK tbody tr {
  cursor: pointer;
}

.grid___jhelK td:last-child {
  text-align: right;
  width: 72px;
}
`, "",{"version":3,"sources":["webpack://./src/pages/BcThPage/BcThPage.module.css"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,4DAA4D;EAC5D,QAAQ;EACR,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,yBAAyB;EACzB,kBAAkB;EAClB,gBAAgB;EAChB,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,qBAAqB;EACrB,mCAAmC;AACrC;;AAEA;EACE,cAAc;EACd,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,yBAAyB;EACzB,kBAAkB;EAClB,sBAAsB;EACtB,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,aAAa;EACb,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,qBAAqB;EACrB,WAAW;EACX,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,yBAAyB;EACzB,eAAe;AACjB;;AAEA;;EAEE,gCAAgC;EAChC,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,gDAAgD;EAChD,QAAQ;EACR,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,yBAAyB;EACzB,kBAAkB;EAClB,gBAAgB;EAChB,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,cAAc;EACd,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,eAAe;EACf,gBAAgB;AAClB;;AAEA;;EAEE,mBAAmB;EACnB,aAAa;EACb,yBAAyB;EACzB,QAAQ;EACR,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,mBAAmB;EACnB,gBAAgB;EAChB,cAAc;EACd,aAAa;EACb,sBAAsB;EACtB,QAAQ;AACV;;AAEA;;EAEE,eAAe;EACf,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;;;EAGE,yBAAyB;EACzB,kBAAkB;EAClB,gBAAgB;EAChB,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,QAAQ;EACR,iBAAiB;AACnB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,cAAc;EACd,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,yBAAyB;EACzB,eAAe;AACjB;;AAEA;;EAEE,yBAAyB;EACzB,gBAAgB;EAChB,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,MAAM;EACN,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,iBAAiB;EACjB,WAAW;AACb","sourcesContent":[".page {\n  height: 100%;\n  min-height: 0;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n\n.cards {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));\n  gap: 8px;\n  margin-bottom: 12px;\n}\n\n.card {\n  text-align: left;\n  border: 1px solid #d9d9d9;\n  border-radius: 8px;\n  background: #fff;\n  padding: 10px 12px;\n  cursor: pointer;\n}\n\n.cardOn {\n  border-color: #1677ff;\n  box-shadow: inset 0 0 0 1px #1677ff;\n}\n\n.cardLabel {\n  display: block;\n  color: #595959;\n  font-size: 12px;\n}\n\n.cardValue {\n  display: block;\n  font-size: 22px;\n  font-weight: 600;\n}\n\n.chartCard {\n  border: 1px solid #f0f0f0;\n  border-radius: 8px;\n  padding: 8px 12px 12px;\n  margin-bottom: 12px;\n  background: #fff;\n}\n\n.chartCard h2 {\n  margin: 0 0 8px;\n  font-size: 14px;\n}\n\n.legend {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px 12px;\n  margin-bottom: 8px;\n  font-size: 12px;\n}\n\n.swatch {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  margin-right: 4px;\n  border-radius: 2px;\n}\n\n.chartScroll {\n  overflow-x: scroll;\n  overflow-y: hidden;\n}\n\n.chartScroll svg {\n  display: block;\n  max-width: none;\n}\n\n.detail table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n\n.detail th,\n.detail td {\n  border-bottom: 1px solid #f0f0f0;\n  padding: 6px 8px;\n  text-align: left;\n}\n\n.detail tr {\n  cursor: pointer;\n}\n\n.empty {\n  color: #8c8c8c;\n  padding: 12px 0;\n}\n\n.levels {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 8px;\n  margin-bottom: 8px;\n}\n\n.level {\n  text-align: left;\n  border: 1px solid #d9d9d9;\n  border-radius: 8px;\n  background: #fff;\n  padding: 8px 10px;\n  cursor: pointer;\n}\n\n.levelOn {\n  border-color: #1677ff;\n}\n\n.levelLabel {\n  display: block;\n  color: #595959;\n  font-size: 12px;\n}\n\n.levelCount {\n  display: block;\n  font-size: 20px;\n  font-weight: 600;\n}\n\n.levelFoot,\n.levelActions {\n  grid-column: 1 / -1;\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  color: #595959;\n  font-size: 12px;\n}\n\n.nameList {\n  grid-column: 1 / -1;\n  max-height: 36vh;\n  overflow: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n\n.masterHead,\n.parentHead {\n  font-size: 12px;\n  font-weight: 600;\n  color: #595959;\n}\n\n.parentHead {\n  padding-left: 8px;\n}\n\n.nameBtn,\n.textBtn,\n.tag {\n  border: 1px solid #f0f0f0;\n  border-radius: 8px;\n  background: #fff;\n  text-align: left;\n  cursor: pointer;\n}\n\n.nameBtn {\n  display: flex;\n  justify-content: space-between;\n  gap: 8px;\n  padding: 8px 10px;\n}\n\n.nameBtnOn {\n  border-color: #1677ff;\n}\n\n.groupMeta {\n  color: #8c8c8c;\n  font-size: 12px;\n}\n\n.textBtn {\n  padding: 4px 8px;\n  color: #1677ff;\n}\n\n.gridWrap {\n  overflow: auto;\n  max-height: 48vh;\n  margin-top: 8px;\n}\n\n.grid {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n\n.grid th,\n.grid td {\n  border: 1px solid #f0f0f0;\n  padding: 6px 8px;\n  text-align: left;\n  vertical-align: top;\n}\n\n.grid th {\n  position: sticky;\n  top: 0;\n  background: #fafafa;\n  font-weight: 600;\n}\n\n.grid tbody tr {\n  cursor: pointer;\n}\n\n.grid td:last-child {\n  text-align: right;\n  width: 72px;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"page": `page___Vi_M2`,
	"cards": `cards___b9s83`,
	"card": `card___VSnfQ`,
	"cardOn": `cardOn___cE1ks`,
	"cardLabel": `cardLabel___MDQV3`,
	"cardValue": `cardValue___DAVor`,
	"chartCard": `chartCard___UxcoC`,
	"legend": `legend___hrlLF`,
	"swatch": `swatch___oDIhh`,
	"chartScroll": `chartScroll___ct8uk`,
	"detail": `detail___yBu4_`,
	"empty": `empty___sfJJd`,
	"levels": `levels___v_pFl`,
	"level": `level___P_HW6`,
	"levelOn": `levelOn___JfOqx`,
	"levelLabel": `levelLabel___BH2Ry`,
	"levelCount": `levelCount___zSCf9`,
	"levelFoot": `levelFoot___JGfj2`,
	"levelActions": `levelActions___pFzhX`,
	"nameList": `nameList____7tKg`,
	"masterHead": `masterHead___WOhcr`,
	"parentHead": `parentHead___gSMbZ`,
	"nameBtn": `nameBtn___0asg6`,
	"textBtn": `textBtn___ToNlh`,
	"tag": `tag___pWMgZ`,
	"nameBtnOn": `nameBtnOn___JrbqB`,
	"groupMeta": `groupMeta___HIwV5`,
	"gridWrap": `gridWrap___qpCma`,
	"grid": `grid___jhelK`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);

/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ }

}]);
//# sourceMappingURL=bc-th-page.5a16ccac.linm-rmms-field.js.map