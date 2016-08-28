'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _woofDom = require('woof-dom');

var _woofDom2 = _interopRequireDefault(_woofDom);

var _Base = require('./Base');

require('./css/Modal.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO: garbage collect event listeners

exports.default = function (component) {
  return new Promise(function (resolve, reject) {
    var body = document.querySelector('body');

    var parent = document.createElement('div');

    body.appendChild(parent);
    body.classList.add('overflow-hidden');

    var removeFromDOM = function removeFromDOM() {
      body.removeChild(parent);
      body.classList.remove('overflow-hidden');
    };

    var onConfirm = function onConfirm(arg) {
      removeFromDOM();
      resolve(arg);
    };

    var onReject = function onReject(arg) {
      removeFromDOM();
      reject(arg);
    };

    _woofDom2.default.render((0, _Base.div)({ className: 'Overlay' }, [(0, _Base.div)({ className: 'Modal' }, [component({
      onConfirm: onConfirm,
      onReject: onReject
    })])]), parent);
  });
};