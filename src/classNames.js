function deconstructClassNameObject(obj) {
  return Object.keys(obj).reduce((str, key) => {
    const val = obj[key];
    
    if (val) {
      return `${str} ${val}`;
    }
  }, '');
}

export default (...args) => {
  const phrases = [...args];

  return phrases
    .map(phrase => {
      switch (typeof phrase) {
        case 'object':
          return deconstructClassNameObject(phrase);
        case 'string':
        default:
          return phrase;
      }
    })
    .join(' ');
};
