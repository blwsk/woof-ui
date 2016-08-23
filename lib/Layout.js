'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.well = exports.col = exports.row = exports.layout = undefined;

var _woofDom = require('woof-dom');

var _woofDom2 = _interopRequireDefault(_woofDom);

require('./css/Layout.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var layout = exports.layout = function layout(children) {
  return _woofDom2.default.createElement('div', {
    className: 'layout'
  }, children);
};

var row = exports.row = function row(width) {
  return function (children) {
    return _woofDom2.default.createElement('div', {
      className: 'row',
      style: width ? 'max-width: ' + width + 'px' : ''
    }, children);
  };
};

var col = exports.col = function col(children) {
  return _woofDom2.default.createElement('div', {
    className: 'col'
  }, children);
};

var well = exports.well = function well(children) {
  return _woofDom2.default.createElement('div', {
    className: 'well'
  }, children);
};