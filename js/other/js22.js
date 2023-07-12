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

const oldArray = ['a', 'b', 'c'];

const newArray = oldArray.slice(); // copy arrays
newArray[1] = 'asdfadsfdsaf';
console.log(newArray);
console.log(oldArray);

// spread

const video = ['youtube', 'vimeo', 'spotify'],
  blogs = ['wordpress', 'livejournal', 'blogger'],
  internet = [...blogs, ...video, 'facebook', 'other'];
internet[1] = 'Live';
console.log(blogs);
console.log(internet);

function log(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

const num = [2, 5, 7];
log(...num);

const array = ['a', 'b'];
const newArray2 = [...array];

console.log(newArray2);

const q = {
  one: 1,
  two: 2,
  three: 3,
  four: {
	five: 5,
	six: 6
  }
};

const qNew = { ...q };
console.log(qNew)
