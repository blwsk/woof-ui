import Woof from 'woof-dom';

import './css/Button.css';

const button = (props, children) => Woof.createElement('button', props, children);

export class Button extends Woof.Component {
  getUse() {
    const {
      use
    } = this.props;

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

  render() {
    return button({
      className: `Button ${this.getUse()}`,
      onClick: this.props.onClick
    }, this.props.text);
  }
}
