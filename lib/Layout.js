'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.well = exports.col = exports.row = exports.layout = undefined;

var _Core = require('./Core');

var _Core2 = _interopRequireDefault(_Core);

require('./css/Layout.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var layout = exports.layout = (0, _Core2.default)('div', {
  className: 'layout'
});

var row = exports.row = function row(width) {
  return (0, _Core2.default)('div', {
    className: 'row',
    style: width ? 'max-width: 100%; width: ' + width + 'px;' : ''
  });
};

var col = exports.col = (0, _Core2.default)('div', {
  className: 'col'
});

var well = exports.well = (0, _Core2.default)('div', {
  className: 'well'
});