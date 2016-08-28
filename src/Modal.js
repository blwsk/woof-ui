import Woof from 'woof-dom';
import {div} from './Base';
import './css/Modal.css';

// TODO: garbage collect event listeners

export default component => {
  return new Promise((resolve, reject) => {
    const body = document.querySelector('body');

    const parent = document.createElement('div');

    body.appendChild(parent);
    body.classList.add('overflow-hidden');

    const removeFromDOM = () => {
      body.removeChild(parent);
      body.classList.remove('overflow-hidden');
    };

    const onConfirm = arg => {
      removeFromDOM();
      resolve(arg);
    };

    const onReject = arg => {
      removeFromDOM();
      reject(arg);
    };

    Woof.render(
      div({className: 'Overlay'}, [
        div({className: 'Modal'}, [
          component({
            onConfirm,
            onReject
          })
        ])
      ]),
      parent
    );
  });
};
