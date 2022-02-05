"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const Indicator = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  border-bottom-color: gold;\n  border-bottom-width: 50px;\n  position: absolute;\n  bottom: 0px;\n  height: 3px;\n  transition: 0.5s;\n  background: ", ";\n  left: ", "px;\n  width: ", "px;\n"])), props => props.indicatorColor, props => props.indicatorLocation, props => props.indicatorWidth);

var _default = Indicator;
exports.default = _default;