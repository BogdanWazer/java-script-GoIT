'use strict';

// let str = 'some';
// let strObj = new String(str);

// console.log(typeof strObj);

console.dir([1, 2, 3]);

const soldier = {
  health: 400,
  armor: 100,
  sayHello: function () {
    console.log('Hello');
  },
};

const john = Object.create(soldier);
john.sayHello();

// john.__proto__ = soldier;

// console.log(john.sayHello());

// Object.setPrototypeOf(john, soldier);
// john.sayHello();
