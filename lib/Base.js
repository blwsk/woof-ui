'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hr = exports.br = exports.span = exports.div = undefined;

var _woofDom = require('woof-dom');

var _woofDom2 = _interopRequireDefault(_woofDom);

require('./css/Base.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var div = exports.div = function div(props, children) {
  return _woofDom2.default.createElement('div', props, children);
};
var span = exports.span = function span(props, children) {
  return _woofDom2.default.createElement('span', props, children);
};
var br = exports.br = function br() {
  return _woofDom2.default.createElement('br', {});
};
var hr = exports.hr = function hr() {
  return _woofDom2.default.createElement('hr', {});
};