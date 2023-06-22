const fnA = function (parametr) {
  const innerVariable = 'Fna variable';

  const innerFunction = function () {
	console.log(parametr)
    console.log(innerVariable);
    console.log('Inner');
  };

  return innerFunction;
};

const fnB = fnA();

fnB();

console.log(fnB);
