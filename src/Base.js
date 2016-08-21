import Woof from 'woof-dom';

import './css/Base.css';

export const div = (props, children) => Woof.createElement('div', props, children);
export const span = (props, children) => Woof.createElement('span', props, children);
export const br = () => Woof.createElement('br', {});
export const hr = () => Woof.createElement('hr', {});
