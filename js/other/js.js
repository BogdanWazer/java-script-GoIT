const options = {
  name: 'test',
  width: 1024,
  height: 1024,
  colors: {
    border: 'black',
    bg: 'red',
  },
};

console.log(options.name);

// for (let key in options) {
//   if (typeof options[key] === 'object') {
//     for (let i in options[key]) {
//       console.log(`Options ${i} has ${options[key][i]}`);
//     }
//   }
// }

// console.log(Object.keys(options).length);

const arr = [1, 2, 3, 4, 11, 5, 6, 7];
console.log(arr.sort(compairNum));

function compairNum(a, b) {
  return a - b;
}

arr.pop(); // delete last arr item
arr.push(8); // add item to last index

console.log(arr);

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

console.log('////');

for (let value of arr) {
  console.log(value);
}

console.log('////');

console.log(arr.length);

arr.forEach(function (item, i, arr) {
  console.log(`${i}: ${item} in arr ${arr}`);
});

// const str = prompt('', '');

const products = str.split(',');
products.sort();
console.log(products.join(';'));
