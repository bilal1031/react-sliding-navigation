"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _Components = require("../Components");

var _useNavigator = require("../hooks/useNavigator");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const NavBar = _ref => {
  let {
    navItems,
    navbarColor,
    indicatorColor,
    navBrand
  } = _ref;

  require("./navbar.css");

  const home = /*#__PURE__*/(0, _react.createRef)();
  const {
    setIsActive
  } = (0, _useNavigator.useNavigator)();
  const [indicatorLocation, setIndicatorLocation] = (0, _react.useState)(0);
  const [indicatorWidth, setIndicatorWidth] = (0, _react.useState)(64);

  const translatePage = current => {
    const index = navItems.findIndex(function (item, i) {
      return item.name === current;
    });
    let items = [];

    for (let i = 0; i < navItems.length; i++) items.push(0);

    items[index] = 1;
    setIsActive(items);
  };

  const handleNavClick = e => {
    setIndicatorLocation(e.target.offsetLeft);
    setIndicatorWidth(e.target.clientWidth);

    if (window.innerWidth > 768) {
      translatePage(e.target.innerHTML);
    }
  };

  return /*#__PURE__*/_react.default.createElement(_Components.NavDiv, {
    style: {
      backgroundColor: navbarColor
    }
  }, /*#__PURE__*/_react.default.createElement(_Components.NavBrand, null, navBrand), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      position: "relative"
    }
  }, navItems.map((e, index) => /*#__PURE__*/_react.default.createElement(_Components.NavItem, {
    ref: home,
    onClick: handleNavClick,
    key: index
  }, e.name)), /*#__PURE__*/_react.default.createElement(_Components.Indicator, {
    indicatorLocation: indicatorLocation,
    indicatorWidth: indicatorWidth,
    indicatorColor: indicatorColor
  })));
};

var _default = NavBar;
exports.default = _default;