'use strict';

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');

  return [first.toUpperCase(), ...others].join(' ');
};

const transformer = function (str, fnc) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fnc(str)}`);
  console.log(`Transformed by: ${fnc.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

const high5 = function () {
  console.log('👋');
};
document.body.addEventListener('click', high5);

['Ephraim', 'Martha', 'Adam'].forEach(high5);
