'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

function deconstructClassNameObject(obj) {
  return Object.keys(obj).reduce(function (str, key) {
    var val = obj[key];

    if (val) {
      return str + ' ' + val;
    }
  }, '');
}

exports.default = function () {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var phrases = [].concat(args);

  return phrases.map(function (phrase) {
    switch (typeof phrase === 'undefined' ? 'undefined' : _typeof(phrase)) {
      case 'object':
        return deconstructClassNameObject(phrase);
      case 'string':
      default:
        return phrase;
    }
  }).join(' ');
};