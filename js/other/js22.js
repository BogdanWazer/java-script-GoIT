'use strict';

const obj = { a: 5, b: 1 };

const copy = obj;

copy.a = 10;

console.log(copy);
console.log(obj);

function copy2(mainObject) {
  let objCopy = {};
  for (const key in mainObject) {
    objCopy[key] = mainObject[key];
  }

  return objCopy;
}

const numbers = copy2(obj);
console.log('numbers is:', numbers);

numbers.a = 15;

console.log(numbers);
console.log(obj);

const add = {
  d: 17,
  e: 20,
};

console.log(Object.assign(numbers, add));

const clone = Object.assign({}, add); // object cloning

clone.d = 20;

console.log(add);
console.log(clone);
