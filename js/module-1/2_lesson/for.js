// for (let i = 0; i < 50; i++) {
//   console.log('Hello!');
// }

// ======================= ZAD 1 ================================

// const minSalary = 500;
// const maxSalary = 5000;
// const employees = 12;
// let totalSalary = 0;

// for (let i = 1; i <= employees; i += 1) {
//   const salary = Math.round(
//     Math.random() * (maxSalary - minSalary) + minSalary
//   );
//   console.log(`ZP: rabotnika ${i} - ${salary}`);
//   totalSalary += salary;
// }
// console.log('Total:', totalSalary);

// ======================= ZAD 2 ================================

// const min = 0;
// const max = 10;
// let total = 0;

// for (let i = min; i <= max; i += 1) {
//   if (i % 2 !== 0) {
//     console.log('ne chetnoe:', i);
//     continue;
//   }

//   console.log('chetnoe:', i);
//   total += i;
// }

// console.log('total:', total);

// ======================= ZAD 2 ================================

// let balance = 600;
// const payment = 495;

// console.log(`Stoimost ${payment}. Proveriaem`);

// payment <= balance;

// if (payment <= balance) {
//   console.log('OK');

//   balance -= payment;
//   console.log('Operation Succesfull!');

//   console.log(`Ostalos: ${balance} credits.`);
// } else {
//   console.log('Not enought money on balance!');
//   console.log('Operation Failed!');
// }

// ======================= ZAD 3 ================================

// let totalSpent = 50;
// let payment = 500;
// let discount = 0;
// if (totalSpent >= 100 && totalSpent <= 1000) {
//   console.log('Skidka 2%');
//   discount = 0.02;
// } else if (totalSpent >= 1000 && totalSpent <= 5000) {
//   console.log('Skidka 5%');
//   discount = 0.05;
// } else if (totalSpent >= 5000) {
//   console.log('Skidka 10%');
//   discount = 0.1;
// } else {
//   console.log('Not a partner!');
// }
// payment -= payment * discount;
// totalSpent += payment;

// console.log('Vsego potracheno:', totalSpent);
// console.log(`Oformlyaem na summu ${payment} with discount: ${discount * 100}%`);
