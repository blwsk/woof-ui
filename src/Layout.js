import Woof from 'woof-dom';

import './css/Layout.css';

export const layout = children => Woof.createElement('div', {
  className: 'layout'
}, children);

export const row = width => children => Woof.createElement('div', {
  className: 'row',
  style: width ? `max-width: 100%; width: ${width}px;` : ''
}, children);

export const col = children => Woof.createElement('div', {
  className: 'col'
}, children);

export const well = children => Woof.createElement('div', {
  className: 'well'
}, children);
