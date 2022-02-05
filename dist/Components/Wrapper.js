"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const Wrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  // background-color: ", ";\n  width: 100%;\n  height: ", "px;\n  transition: 0.5s;\n  position: absolute;\n  left: 100vw;\n  padding: 0px;\n  margin-bottom: 30px;\n  transform: translateX(", "%);\n  @media only screen and (max-width: 768px) {\n     {\n      transform: translateX(0%);\n      position: relative;\n      left: 0;\n    }\n  }\n"])), props => props.color, window.innerHeight - 48, props => props.translate);

var _default = Wrapper;
exports.default = _default;