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

  return makeDish
};

const mango = makeSheff('Mango');

mango('sss');
