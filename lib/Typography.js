'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.p = exports.h6 = exports.h5 = exports.h4 = exports.h3 = exports.h2 = exports.h1 = undefined;

var _woofDom = require('woof-dom');

var _woofDom2 = _interopRequireDefault(_woofDom);

require('./css/Typography.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var h1 = exports.h1 = function h1(props, children) {
  return _woofDom2.default.createElement('h1', props, children);
};
var h2 = exports.h2 = function h2(props, children) {
  return _woofDom2.default.createElement('h2', props, children);
};
var h3 = exports.h3 = function h3(props, children) {
  return _woofDom2.default.createElement('h3', props, children);
};
var h4 = exports.h4 = function h4(props, children) {
  return _woofDom2.default.createElement('h4', props, children);
};
var h5 = exports.h5 = function h5(props, children) {
  return _woofDom2.default.createElement('h5', props, children);
};
var h6 = exports.h6 = function h6(props, children) {
  return _woofDom2.default.createElement('h6', props, children);
};

var p = exports.p = function p(props, children) {
  return _woofDom2.default.createElement('p', props, children);
};