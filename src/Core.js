import {createElement} from 'woof-dom';

export default (tag, props) => (...args) =>  {
  let customProps = {};
  let children = [];

  const argumentList = [...args];

  if (argumentList.length === 1) {
    children = argumentList[0];
  }

  const propsClassName = props.className
    ? props.className
    : '';

  const customClassName = customProps.className
    ? customProps.className
    : '';

  const className = `${propsClassName} ${customClassName}`;

  return createElement(
    tag,
    Object.assign({}, props, customProps, {
      className
    }),
    children
  );
};
