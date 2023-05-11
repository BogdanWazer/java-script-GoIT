let price;
let message;

let country = prompt('Enter Country of distination:');

if (country !== null) {
  country = country.toLowerCase();
} else {
  alert = 'Введите страну!';
}

switch (country) {
  case 'China':
    price = 100;
    break;
  case 'chili':
    price = 250;
    break;
  case 'australia':
    price = 170;
    break;
  case 'india':
    price = 80;
    break;
  case 'yamayka':
    price = 120;
    break;

  default:
    break;
}

message = `Доставка в ${country} будет стоить ${price} кредитов`;

console.log(message);

// switch (stars) {
//   case 1:
//     price = 20;
//     break;

//   case 2:
//     price = 30;
//     break;

//   case 3:
//     price = 50;
//     break;

//   default:
//     console.log('Такого нету');
// }
