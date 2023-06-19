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
  console.log('Click');
};

buttonRef.addEventListener('click', handleBtnClick);
