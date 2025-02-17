'use strict';

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('hey');
greeterHey('Ephraim');
greeterHey('Steven');

greet('Hello')('Ephraim');

const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('Hi')('Eph');
