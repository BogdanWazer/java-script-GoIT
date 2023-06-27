function User(defaultName) {
  let _name = defaultName;

  return {
    getName() {
      return _name;
    },

    setName(n) {
      _name = n;
    },
  };
}

const someuser = User('Victor');
console.log(someuser.getName());

someuser.setName('Petya');
console.log(someuser.getName());

function Animal(defaultName = '') {
  let _name = defaultName;

  return class AnimalClass {
    get name() {
      return _name;
    }

    set name(n) {
      _name = n;
    }
  };
}

const animal = new (Animal('rabbit'))();
console.log(animal.name);

const add = function (a, b, c, d) {
  console.log(arguments);
  return a + b + c;
};

const addArrow = (a, b, c) => a + b + c; // arrow function

const addArrow2 = (...args) => {
  console.log(args);
}; // arrow function

console.log(`Add is:`, add(5, 7, 9));
console.log(`Add arrow 1:`, addArrow(5, 5, 6));
console.log(`Add arrow 2:`, addArrow2(7, 5, 6));

const arrowFnA = () => ({arrowA:5});

console.log(arrowFnA())