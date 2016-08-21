'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _woofDom = require('woof-dom');

var _woofDom2 = _interopRequireDefault(_woofDom);

var _Base = require('./Base');

var _Layout = require('./Layout');

var _Typography = require('./Typography.js');

var _Button = require('./Button.js');

require('./css/index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ButtonPrimary = _woofDom2.default.y(_Button.Button);
var ButtonConfirm = _woofDom2.default.y(_Button.Button);
var ButtonReject = _woofDom2.default.y(_Button.Button);

var _App = function (_Woof$Component) {
  _inherits(_App, _Woof$Component);

  function _App() {
    _classCallCheck(this, _App);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(_App).apply(this, arguments));
  }

  _createClass(_App, [{
    key: 'render',
    value: function render() {
      return (0, _Layout.layout)([(0, _Layout.row)(800)([(0, _Layout.col)([(0, _Layout.well)([(0, _Typography.h1)({}, 'Heading 1'), (0, _Base.hr)(), (0, _Base.br)(), (0, _Typography.p)({}, 'We chose this approach because it seems to have fewer major problems. (Approach A fails in mobile browsers in ways that are unacceptable. Approach B fails, too, but less often and with fewer consequences. Your mileage may vary.)'), ButtonPrimary({ text: 'Primary' }), ButtonConfirm({
        text: 'Confirm',
        use: 'confirm'
      }), ButtonReject({
        text: 'Reject',
        use: 'reject'
      })])])]), (0, _Layout.row)(800)([(0, _Layout.col)([(0, _Layout.well)([(0, _Typography.h1)({}, 'Heading 1'), (0, _Typography.h2)({}, 'Heading 2'), (0, _Typography.h3)({}, 'Heading 3'), (0, _Typography.h4)({}, 'Heading 4'), (0, _Typography.h5)({}, 'Heading 5'), (0, _Typography.h6)({}, 'Heading 6'), (0, _Typography.p)({}, 'We chose this approach because it seems to have fewer major problems. (Approach A fails in mobile browsers in ways that are unacceptable. Approach B fails, too, but less often and with fewer consequences. Your mileage may vary.)')])]), (0, _Layout.col)([(0, _Layout.well)([ButtonPrimary({ text: 'Primary' }), ButtonConfirm({
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