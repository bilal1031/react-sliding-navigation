"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const NavItem = _styledComponents.default.span(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    color: white;\n    margin-right: 20px;\n    margin-top: 5px;\n    cursor: pointer;\n    display: inline-block;\n"])));

var _default = NavItem;
exports.default = _default;