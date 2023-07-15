"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Modal.css");
var _close = _interopRequireDefault(require("./close.svg"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Modal = _ref => {
  let {
    setIsOpen,
    children
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "backGr",
    onClick: () => setIsOpen(false)
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "modal"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _close.default,
    className: "closeBtn",
    alt: "close btn",
    onClick: () => setIsOpen(false)
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "modalContent"
  }, children)));
};
var _default = Modal;
exports.default = _default;