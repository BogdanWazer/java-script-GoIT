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

