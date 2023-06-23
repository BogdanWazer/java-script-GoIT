// const fnA = function (message, callback) {
//   console.log(message);
//   console.log(callback)
//   callback(100);
// };

// const fnB = function (number) {
//   console.log(`FNB, ${number}`);
// };

// fnA('qweqwe', fnB);

const doMath = function (a, b, callback) {
  const result = callback(a, b);

  console.log(result);
};

const add = function (x, y) {
  return x + y;
};

const sub = function (x, y) {
  return x - y;
};

doMath(2, 3, sub);

const buttonRef = document.querySelector('.js-button');

const handleBtnClick = function () {
  console.log('Click' + Date.now());
};

buttonRef.addEventListener('click', handleBtnClick);

function addEventListener(eventType, callback) {
  if (eventType === event) {
    callback();
  }
}

const onGetPositionSuccess = function (position) {
  console.log(position);
};

const onGetPositionError = function (error) {
  console.log(error);
};

window.navigator.geolocation.getCurrentPosition(
  onGetPositionError,
  onGetPositionSuccess
);

const callback = function () {
  console.log('Some');
};
setTimeout(callback, 2000);

const onRequestSucces = function (response) {};

const filter = function (array, test) {
  const filteredArray = [];
  for (const el of array) {
    console.log(el);
    console.log(test(el));
  }

  return filteredArray;
};

const callback1 = function (value) {
  return value >= 3;
};

const r1 = filter([1, 2, 3, 4, 5, 6], callback1);
console.log(r1);

// const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

const someFilter = function (value, someBack) {
  const someFilteredArray = [];

  for (const element of value) {
    console.log(element);
    const passed = someBack(element);

    if (passed) {
      someFilteredArray.push(element);
    }
  }
  return someFilteredArray;
};

const someCallback = function (value) {
  return value >= 5;
};

// const someResult1 = someFilter([1, 3, 6, 9, 12, 15], someCallback);
const someResult2 = someFilter([1, 3, 6, 9, 12, 15], function (value) {
  return value <= 5;
});

console.log(someResult2);

const fruits = [
  { name: 'Banana', quantity: 200, isFresh: true },
  { name: 'Apple', quantity: 150, isFresh: true },
  { name: 'Cherry', quantity: 100, isFresh: true },
];

const getFruitsQuantity = function(fruitQuantityValue) {
  return fruitQuantityValue.quantity >= 150;
};

const fruitsResult = filter(fruits, getFruitsQuantity);
console.log(fruitsResult);
