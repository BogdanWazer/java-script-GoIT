// // for iteration do not use for IN

// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };

// // Keys + Values
// const keys = Object.keys(feedback); // getting keys [good,neutral,bad]
// console.log(keys); // print all keys in array

// let totalFeedback = 0; // initialize 
// for (const key of keys) { // start for loop
//   console.log(key); 
//   console.log(feedback[key]); // print key VALUE
//   // for loop

//   totalFeedback += feedback[key]; // Sum of VALUES OF KEYS
// }

// console.log('totalFeedback:', totalFeedback, 'values.'); // RESULT

// // SUM OF VALUES

// const values = Object.values(feedback); // just values: [5,10,3]

// let totalValues = 0;
// for (const value of values) {
//   totalValues += value;
// }

// console.log(totalValues);