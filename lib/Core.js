'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _woofDom = require('woof-dom');

exports.default = function (tag, props) {
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var customProps = {};
    var children = [];

    var argumentList = [].concat(args);

    if (argumentList.length === 1) {
      children = argumentList[0];
    }

    var propsClassName = props.className ? props.className : '';

    var customClassName = customProps.className ? customProps.className : '';

    var className = propsClassName + ' ' + customClassName;

    return (0, _woofDom.createElement)(tag, Object.assign({}, props, customProps, {
      className: className
    }), children);
  };
};