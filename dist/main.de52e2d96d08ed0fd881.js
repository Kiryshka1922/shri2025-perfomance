"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[792],{

/***/ 416:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(540);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(338);
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }



// Оптимизируем Header с помощью memo, чтобы он не перерендеривался без необходимости
var Header = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(function Header() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    expanded = _React$useState2[0],
    setExpanded = _React$useState2[1];
  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0__.useState(false),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    toggled = _React$useState4[0],
    setToggled = _React$useState4[1];

  // Оптимизируем обработчик клика с useCallback
  var onClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    if (!toggled) {
      setToggled(true);
    }
    setExpanded(function (prev) {
      return !prev;
    });
  }, [toggled]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("header", {
    className: "header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "/",
    className: "header__logo",
    "aria-label": "\u042F\u043D\u0434\u0435\u043A\u0441.\u0414\u043E\u043C"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "header__menu",
    "aria-expanded": expanded ? "true" : "false",
    onClick: onClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "header__menu-text a11y-hidden"
  }, expanded ? "Закрыть меню" : "Открыть меню")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "header__links" + (expanded ? " header__links_opened" : "") + (toggled ? " header__links-toggled" : "")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "header__item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    className: "header__link header__link_current",
    href: "/",
    "aria-current": "page"
  }, "\u0421\u0432\u043E\u0434\u043A\u0430")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "header__item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    className: "header__link",
    href: "/devices"
  }, "\u0423\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "header__item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    className: "header__link",
    href: "/scripts"
  }, "\u0421\u0446\u0435\u043D\u0430\u0440\u0438\u0438"))));
});

// Оптимизируем Event с помощью memo
var Event = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(function Event(props) {
  var ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
  var onSize = props.onSize,
    slim = props.slim,
    icon = props.icon,
    iconLabel = props.iconLabel,
    title = props.title,
    subtitle = props.subtitle;

  // Используем useCallback для оптимизации колбэка
  var handleSize = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    if (ref.current && onSize) {
      var width = ref.current.offsetWidth;
      var height = ref.current.offsetHeight;
      onSize({
        width: width,
        height: height
      });
    }
  }, [onSize]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    handleSize();
  }, [handleSize]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    ref: ref,
    className: "event" + (slim ? " event_slim" : "")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "event__button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "event__icon event__icon_".concat(icon),
    role: "img",
    "aria-label": iconLabel
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", {
    className: "event__title"
  }, title), subtitle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "event__subtitle"
  }, subtitle)));
});

// Выносим константу TABS за пределы компонента, чтобы она не пересоздавалась
var TABS = {
  all: {
    title: "Все",
    items: [{
      icon: "light2",
      iconLabel: "Освещение",
      title: "Xiaomi Yeelight LED Smart Bulb",
      subtitle: "Включено"
    }, {
      icon: "light",
      iconLabel: "Освещение",
      title: "D-Link Omna 180 Cam",
      subtitle: "Включится в 17:00"
    }, {
      icon: "temp",
      iconLabel: "Температура",
      title: "Elgato Eve Degree Connected",
      subtitle: "Выключено до 17:00"
    }, {
      icon: "light",
      iconLabel: "Освещение",
      title: "LIFX Mini Day & Dusk A60 E27",
      subtitle: "Включится в 17:00"
    }, {
      icon: "light2",
      iconLabel: "Освещение",
      title: "Xiaomi Mi Air Purifier 2S",
      subtitle: "Включено"
    }, {
      icon: "light",
      iconLabel: "Освещение",
      title: "Philips Zhirui",
      subtitle: "Включено"
    }, {
      icon: "light",
      iconLabel: "Освещение",
      title: "Philips Zhirui",
      subtitle: "Включено"
    }, {
      icon: "light2",
      iconLabel: "Освещение",
      title: "Xiaomi Mi Air Purifier 2S",
      subtitle: "Включено"
    }]
  },
  kitchen: {
    title: "Кухня",
    items: [{
      icon: "light2",
      iconLabel: "Освещение",
      title: "Xiaomi Yeelight LED Smart Bulb",
      subtitle: "Включено"
    }, {
      icon: "temp",
      iconLabel: "Температура",
      title: "Elgato Eve Degree Connected",
      subtitle: "Выключено до 17:00"
    }]
  },
  hall: {
    title: "Зал",
    items: [{
      icon: "light",
      iconLabel: "Освещение",
      title: "Philips Zhirui",
      subtitle: "Выключено"
    }, {
      icon: "light2",
      iconLabel: "Освещение",
      title: "Xiaomi Mi Air Purifier 2S",
      subtitle: "Выключено"
    }]
  },
  lights: {
    title: "Лампочки",
    items: [{
      icon: "light",
      iconLabel: "Освещение",
      title: "D-Link Omna 180 Cam",
      subtitle: "Включится в 17:00"
    }, {
      icon: "light",
      iconLabel: "Освещение",
      title: "LIFX Mini Day & Dusk A60 E27",
      subtitle: "Включится в 17:00"
    }, {
      icon: "light2",
      iconLabel: "Освещение",
      title: "Xiaomi Mi Air Purifier 2S",
      subtitle: "Включено"
    }, {
      icon: "light",
      iconLabel: "Освещение",
      title: "Philips Zhirui",
      subtitle: "Включено"
    }]
  },
  cameras: {
    title: "Камеры",
    items: [{
      icon: "light2",
      iconLabel: "Освещение",
      title: "Xiaomi Mi Air Purifier 2S",
      subtitle: "Включено"
    }]
  }
};
TABS.all.items = Array(Math.pow(2, 6)).fill(TABS.all.items).flat();
var TABS_KEYS = Object.keys(TABS);
var Main = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(function Main() {
  var ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
  var initedRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_0__.useState(""),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    activeTab = _React$useState6[0],
    setActiveTab = _React$useState6[1];
  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_0__.useState(false),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    hasRightScroll = _React$useState8[0],
    setHasRightScroll = _React$useState8[1];
  var onTabClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (key) {
    setActiveTab(key);
  }, []);
  var onArrowClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    var _ref$current;
    var scroller = (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.querySelector(".section__panel:not(.section__panel_hidden)");
    if (scroller) {
      scroller.scrollTo({
        left: scroller.scrollLeft + 400,
        behavior: "smooth"
      });
    }
  }, []);
  var onSelectInput = function onSelectInput(event) {
    setActiveTab(event.target.value);
  };
  var currentTabItems = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    var _TABS$activeTab;
    return ((_TABS$activeTab = TABS[activeTab]) === null || _TABS$activeTab === void 0 ? void 0 : _TABS$activeTab.items) || [];
  }, [activeTab]);
  var renderTabItems = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return currentTabItems.map(function (item, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Event, _extends({
        key: index
      }, item, {
        onSize: handleSize
      }));
    });
  }, [currentTabItems]);
  var handleSize = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    if (ref.current) {
      var items = ref.current.querySelectorAll(".event");
      var sumWidth = 0;
      items.forEach(function (item) {
        sumWidth += item.offsetWidth;
      });
      var newHasRightScroll = sumWidth > ref.current.offsetWidth;
      if (newHasRightScroll !== hasRightScroll) {
        setHasRightScroll(newHasRightScroll);
      }
    }
  }, [hasRightScroll]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    if (!activeTab && !initedRef.current) {
      initedRef.current = true;
      setActiveTab(new URLSearchParams(location.search).get("tab") || "all");
    }
  }, [activeTab]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", {
    className: "main"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
    className: "section main__general"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
    className: "section__title section__title-header section__main-title"
  }, "\u0413\u043B\u0430\u0432\u043D\u043E\u0435"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "hero-dashboard"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "hero-dashboard__primary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {
    className: "hero-dashboard__title"
  }, "\u041F\u0440\u0438\u0432\u0435\u0442, \u0413\u0435\u043D\u043D\u0430\u0434\u0438\u0439!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "hero-dashboard__subtitle"
  }, "\u0414\u0432\u0435\u0440\u0438 \u0438 \u043E\u043A\u043D\u0430 \u0437\u0430\u043A\u0440\u044B\u0442\u044B, \u0441\u0438\u0433\u043D\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F \u0432\u043A\u043B\u044E\u0447\u0435\u043D\u0430."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "hero-dashboard__info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "hero-dashboard__item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "hero-dashboard__item-title"
  }, "\u0414\u043E\u043C\u0430"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "hero-dashboard__item-details"
  }, "+23", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "a11y-hidden"
  }, "\xB0"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "hero-dashboard__item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "hero-dashboard__item-title"
  }, "\u0417\u0430 \u043E\u043A\u043D\u043E\u043C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "hero-dashboard__item-details"
  }, "+19", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "a11y-hidden"
  }, "\xB0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "hero-dashboard__icon hero-dashboard__icon_rain",
    role: "img",
    "aria-label": "\u0414\u043E\u0436\u0434\u044C"
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "hero-dashboard__schedule"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Event, {
    icon: "temp",
    iconLabel: "\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430",
    title: "Philips Cooler",
    subtitle: "\u041D\u0430\u0447\u043D\u0435\u0442 \u043E\u0445\u043B\u0430\u0436\u0434\u0430\u0442\u044C \u0432 16:30"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Event, {
    icon: "light",
    iconLabel: "\u041E\u0441\u0432\u0435\u0449\u0435\u043D\u0438\u0435",
    title: "Xiaomi Yeelight LED Smart Bulb",
    subtitle: "\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u0441\u044F \u0432 17:00"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Event, {
    icon: "light",
    iconLabel: "\u041E\u0441\u0432\u0435\u0449\u0435\u043D\u0438\u0435",
    title: "Xiaomi Yeelight LED Smart Bulb",
    subtitle: "\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u0441\u044F \u0432 17:00"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
    className: "section main__scripts"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
    className: "section__title section__title-header"
  }, "\u0418\u0437\u0431\u0440\u0430\u043D\u043D\u044B\u0435 \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0438"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "event-grid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Event, {
    slim: true,
    icon: "light2",
    iconLabel: "\u041E\u0441\u0432\u0435\u0449\u0435\u043D\u0438\u0435",
    title: "\u0412\u044B\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0432\u0435\u0441\u044C \u0441\u0432\u0435\u0442 \u0432 \u0434\u043E\u043C\u0435 \u0438 \u0432\u043E \u0434\u0432\u043E\u0440\u0435"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Event, {
    slim: true,
    icon: "schedule",
    iconLabel: "\u0420\u0430\u0441\u043F\u0438\u0441\u0430\u043D\u0438\u0435",
    title: "\u042F \u0443\u0445\u043E\u0436\u0443"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Event, {
    slim: true,
    icon: "light2",
    iconLabel: "\u041E\u0441\u0432\u0435\u0449\u0435\u043D\u0438\u0435",
    title: "\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0441\u0432\u0435\u0442 \u0432 \u043A\u043E\u0440\u0438\u0434\u043E\u0440\u0435"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Event, {
    slim: true,
    icon: "temp2",
    iconLabel: "\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430",
    title: "\u041D\u0430\u0431\u0440\u0430\u0442\u044C \u0433\u043E\u0440\u044F\u0447\u0443\u044E \u0432\u0430\u043D\u043D\u0443",
    subtitle: "\u041D\u0430\u0447\u043D\u0451\u0442\u0441\u044F \u0432 18:00"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Event, {
    slim: true,
    icon: "temp2",
    iconLabel: "\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430",
    title: "\u0421\u0434\u0435\u043B\u0430\u0442\u044C \u043F\u043E\u043B \u0442\u0451\u043F\u043B\u044B\u043C \u0432\u043E \u0432\u0441\u0435\u0439 \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u0435"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
    className: "section main__devices"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "section__title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
    className: "section__title-header"
  }, "\u0418\u0437\u0431\u0440\u0430\u043D\u043D\u044B\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", {
    className: "section__select",
    defaultValue: "all",
    onInput: onSelectInput
  }, TABS_KEYS.map(function (key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
      key: key,
      value: key
    }, TABS[key].title);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    role: "tablist",
    className: "section__tabs"
  }, TABS_KEYS.map(function (key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      key: key,
      role: "tab",
      "aria-selected": key === activeTab ? "true" : "false",
      tabIndex: key === activeTab ? "0" : undefined,
      className: "section__tab" + (key === activeTab ? " section__tab_active" : ""),
      id: "tab_".concat(key),
      "aria-controls": "panel_".concat(key),
      onClick: function onClick() {
        return onTabClick(key);
      }
    }, TABS[key].title);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "section__panel-wrapper",
    ref: ref
  }, TABS_KEYS.map(function (key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      key: key,
      role: "tabpanel",
      className: "section__panel" + (key === activeTab ? "" : " section__panel_hidden"),
      "aria-hidden": key === activeTab ? "false" : "true",
      id: "panel_".concat(key),
      "aria-labelledby": "tab_".concat(key)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
      className: "section__panel-list"
    }, key === activeTab ? renderTabItems : null));
  }), hasRightScroll && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "section__arrow",
    onClick: onArrowClick
  }))));
});
var root = react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot(document.getElementById("app"));
root.render(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.StrictMode, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Header, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Main, null)));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [317,134], () => (__webpack_exec__(416)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);