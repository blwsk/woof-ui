import Core from './Core';
import './css/Layout.css';

export const layout = Core('div', {
  className: 'layout'
});

export const row = width => Core('div', {
  className: 'row',
  style: width ? `max-width: 100%; width: ${width}px;` : '' 
});

export const col = Core('div', {
  className: 'col'
});

export const well = Core('div', {
  className: 'well'
});
