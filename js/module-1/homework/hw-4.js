const credits = 23580;
const pricePerDroid = 3000;

let messege;
let totalPrice;
let quantity = prompt('Enter quantity of droids');

totalPrice = Number(quantity) * 300;

if (totalPrice > credits) {
  messege = 'Недостаточно средств на счету!';
} else {
  messege = `Вы купили ${quantity} дроидов, на счету осталось ${
    credits - totalPrice
  } кредитов.`;
}

console.log(messege);
