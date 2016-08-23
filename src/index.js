import Woof from 'woof-dom';
import {
  Base,
  Layout,
  Typography,
  Button
} from './src.js';

const {br, hr} = Base;
const {layout, row, col, well} = Layout;
const {h1, h2, h3, h4, h5, h6, p} = Typography;

const ButtonPrimary = Woof.y(Button);
const ButtonConfirm = Woof.y(Button);
const ButtonReject = Woof.y(Button);

class _App extends Woof.Component {
  render() {
    return layout([
      row(800)([
        col([
          well([
            h1({}, 'Heading 1'),
            hr(),
            br(),
            p({}, 'We chose this approach because it seems to have fewer major problems. (Approach A fails in mobile browsers in ways that are unacceptable. Approach B fails, too, but less often and with fewer consequences. Your mileage may vary.)'),
            ButtonPrimary({text: 'Primary'}),
            ButtonConfirm({
              text: 'Confirm',
              use: 'confirm'
            }),
            ButtonReject({
              text: 'Reject',
              use: 'reject'
            })
          ])
        ])
      ]),
      row(800)([
        col([
          well([
            h1({}, 'Heading 1'),
            h2({}, 'Heading 2'),
            h3({}, 'Heading 3'),
            h4({}, 'Heading 4'),
            h5({}, 'Heading 5'),
            h6({}, 'Heading 6'),
            p({}, 'We chose this approach because it seems to have fewer major problems. (Approach A fails in mobile browsers in ways that are unacceptable. Approach B fails, too, but less often and with fewer consequences. Your mileage may vary.)')
          ])
        ]),
        col([
          well([
            ButtonPrimary({text: 'Primary'}),
            ButtonConfirm({
              text: 'Confirm',
              use: 'confirm'
            }),
            ButtonReject({
              text: 'Reject',
              use: 'reject'
            })
          ])
        ])
      ])
    ]);
  }
}

const App = Woof.y(_App);

Woof.render(
  App(),
  document.getElementById('root')
);
