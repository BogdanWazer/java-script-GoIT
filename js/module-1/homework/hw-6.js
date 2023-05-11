let number = prompt('Enter number:');
number = Number(number);
let total;

if (number == Number) {
  number = prompt('Enter number:');
}

total += Number(number);

if (number == NaN || number == null) {
  console.log('Было введено не число, попробуйте еще раз');
  console.log(`Total is: ${total}`);
}
