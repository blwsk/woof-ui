'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _woofDom = require('woof-dom');

var _woofDom2 = _interopRequireDefault(_woofDom);

var _src = require('./src');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var br = _src.Base.br;
var hr = _src.Base.hr;
var layout = _src.Layout.layout;
var row = _src.Layout.row;
var col = _src.Layout.col;
var well = _src.Layout.well;
var h1 = _src.Typography.h1;
var h2 = _src.Typography.h2;
var h3 = _src.Typography.h3;
var h4 = _src.Typography.h4;
var h5 = _src.Typography.h5;
var h6 = _src.Typography.h6;
var p = _src.Typography.p;


var ButtonPrimary = _woofDom2.default.y(_src.Button);
var ButtonConfirm = _woofDom2.default.y(_src.Button);
var ButtonReject = _woofDom2.default.y(_src.Button);

var _App = function (_Woof$Component) {
  _inherits(_App, _Woof$Component);

  function _App() {
    _classCallCheck(this, _App);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(_App).apply(this, arguments));
  }

  _createClass(_App, [{
    key: 'render',
    value: function render() {
      return layout([row(800)([col([well([h1({}, 'Heading 1'), hr(), br(), p({}, 'We chose this approach because it seems to have fewer major problems. (Approach A fails in mobile browsers in ways that are unacceptable. Approach B fails, too, but less often and with fewer consequences. Your mileage may vary.)'), ButtonPrimary({ text: 'Primary' }), ButtonConfirm({
        text: 'Confirm',
        use: 'confirm'
      }), ButtonReject({
        text: 'Reject',
        use: 'reject'
      })])])]), row(800)([col([well([h1({}, 'Heading 1'), h2({}, 'Heading 2'), h3({}, 'Heading 3'), h4({}, 'Heading 4'), h5({}, 'Heading 5'), h6({}, 'Heading 6'), p({}, 'We chose this approach because it seems to have fewer major problems. (Approach A fails in mobile browsers in ways that are unacceptable. Approach B fails, too, but less often and with fewer consequences. Your mileage may vary.)')])]), col([well([ButtonPrimary({ text: 'Primary' }), ButtonConfirm({
        text: 'Confirm',
        use: 'confirm'
      }), ButtonReject({
        text: 'Reject',
        use: 'reject'
      })])])])]);
    }
  }]);

  return _App;
}(_woofDom2.default.Component);

var App = _woofDom2.default.y(_App);

_woofDom2.default.render(App(), document.getElementById('root'));