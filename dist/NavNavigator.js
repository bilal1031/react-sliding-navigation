"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Components = require("./Components");

var _useNavigator = require("./hooks/useNavigator");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const NavNavigator = _ref => {
  let {
    pages
  } = _ref;
  const {
    isActive
  } = (0, _useNavigator.useNavigator)();
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, pages.map((e, index) => /*#__PURE__*/_react.default.createElement(_Components.Wrapper //   color="black"
  , {
    translate: isActive[index] === 1 ? "-100" : "0",
    key: index,
    index: index
  }, e())));
};

var _default = NavNavigator;
exports.default = _default;