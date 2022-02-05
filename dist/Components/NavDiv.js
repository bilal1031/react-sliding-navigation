"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const NavDiv = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display:flex;\n    padding: 1rem;\n    flex-direction:row;\n    justify-content: space-between;\n    \n"])));

var _default = NavDiv;
exports.default = _default;