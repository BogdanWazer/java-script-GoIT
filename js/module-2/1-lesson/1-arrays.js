// const friends = ['Mango', 'Kiwi'];

// console.log(friends.length);

// const lastIndex = friends.length - 1;

// console.log(lastIndex);

// friends[1] = 'Orange';

// console.log(friends);

// // Перебрать массив

// const fruits = ['Mango', 'Kiwi', 'Poly', 'Ajax'];

// const fruitsLastIndex = fruits.length - 1;

// console.log('----------------REGULAR FOR----------------');

// for (let i = 0; i <= fruitsLastIndex; i += 1) {
//   console.log(fruits[i]);
// }

// console.log('----------------FOR OF----------------');

// for (const fruit of fruits) {
//   console.log(fruit);
// }

// console.log('----------------Payment----------------');

// const cart = [54, 56, 58, 60, 62, 55, 39, 81, 83, 1];
// let total = 0;

// Перебрать массив , посчитать общую сумму в переменной,

// for (let i = 0; i < cart.length; i += 1) {
//   total += cart[i];
// }

// console.log(total);

// for (let i = 0; i < cart.length; i += 1) {
//   cart[i] = Math.round(cart[i] * 1.2);
//   total += cart[i];
// }

// console.log(total);

// console.log('----------------Вивести только четние елементи----------------');

// let total = 0;

// for (let i = 0; i < cart.length; i += 1) {
//   const carts = cart[i];
//   console.log(carts);

//   if (carts % 2 === 0) {
//     console.log('Chetnoe');
//     total += carts;
//   }
// }

// console.log('Total is:', total);

// for (const carts of cart) {
//   if (carts % 2 !== 0) {
//     console.log('Skip:', carts);
//     continue;
//   }
//   console.log('Chetnoe');
//   total += carts;
// }
// console.log('Total is:', total);
