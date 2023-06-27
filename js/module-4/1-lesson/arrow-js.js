const add = function (a,b) {
    return a + b;
}

console.log(add(5,5))

const addArr = (a,b) => a + b; // arrow function

console.log(addArr(5,5))

const someEqual = message => message;

console.log(someEqual('U r id'))

const greet = () => {
    console.log('Hello there!')
}
greet()

// explicit return

const add2 = (a,b) => {
    return a+b;
}

//emplicit return

const add3 = (a,b) => a+b;
console.log('Add3:',add3(5,6))

