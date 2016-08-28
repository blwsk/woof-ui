'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _woofDom = require('woof-dom');

var _woofDom2 = _interopRequireDefault(_woofDom);

require('./css/Button.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var button = function button(props, children) {
  return _woofDom2.default.createElement('button', props, children);
};

var Button = exports.Button = function (_Woof$Component) {
  _inherits(Button, _Woof$Component);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Button).apply(this, arguments));
  }

  _createClass(Button, [{
    key: 'getUse',
    value: function getUse() {
      var use = this.props.use;


      switch (use) {
        case 'confirm':
          return 'Button-confirm';

        case 'reject':
          return 'Button-reject';

        case 'primary':
        default:
          return 'Button-primary';
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return button({
        className: 'Button ' + this.getUse(),
        onClick: this.props.onClick
      }, this.props.text);
    }
  }]);

  return Button;
}(_woofDom2.default.Component);