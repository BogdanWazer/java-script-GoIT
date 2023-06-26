const fnA = function (parametr) {
  const innerVariable = 'Fna variable';

  const innerFunction = function () {
    console.log(parametr);
    console.log(innerVariable);
    console.log('Inner');
  };

  return innerFunction;
};

const fnB = fnA();

fnB();

console.log(fnB);

const makeSheff = function (name) {
  const makeDish = function (dish) {
    console.log(`${name} coock ${dish}`);
  };

  return makeDish;
};

const mango = makeSheff('Mango');

mango('sss');

const floatingPoint = 3.456123;
const someInt = Math.round(floatingPoint);
const withDecimals = Number(floatingPoint.toFixed(2));

const rounder = function (places) {
  return function (number) {
    return Number(number.toFixed(places));
  };
};

const rounder2 = rounder(2);
const rounder3 = rounder(3);

console.log(rounder2(3.4567));
console.log(rounder3(3.4587));

