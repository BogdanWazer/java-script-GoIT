// const calculateTotalPrice = function (items) {
//   let total = 0;

//   for (const item of items) {
//     total += item;
//   }

//   return total;
// };

// console.log(calculateTotalPrice([1, 5, 7]));

// const logItems = function (items) {
//   for (const item of items) {
//     console.log(item);
//   }
// };

// logItems(['Kivi', 'Orange']);
// const logins = ['aezakmi', 'qwerty'];

// const findLogin = function (allLogins, loginToFind) {
//   for (const login of allLogins) {
//     if (login === loginToFind) {
//       return `User ${loginToFind} found!`;
//     }
//   }
//   return `User ${loginToFind} not found!`;
// };

// console.log(findLogin(logins, 'aezakmdi'));

const logins = ['aezakmi', 'qwerty'];

const findLogin = function (allLogins, loginToFind) {
  return allLogins.includes(loginToFind)
    ? `User ${loginToFind} found!`
    : `User ${loginToFind} not found!`;
};

console.log(findLogin(logins, 'aezakmi'));

const numbers = [5, 10, 15, 12, 22];

const findSmallestNumber = function (numbers) {
  let smallestNumber = numbers[0];

  for (let number of numbers) {
    if (number < smallestNumber) {
      smallestNumber = number;
    }
  }
  return smallestNumber;
};
console.log('Smallest number:', findSmallestNumber(numbers));

