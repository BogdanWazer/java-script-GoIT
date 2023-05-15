const cards = [
  'Карточка-1',
  'Карточка-2',
  'Карточка-3',
  'Карточка-4',
  'Карточка-5',
];

// console.table(cards);

// const cardToRemove = 'Карточка-3';
// const index = cards.indexOf(cardToRemove);

// const index = 3;

// cards.splice(0, 0, 5, 10, 21);

console.table(cards);

const cardToUpdate = 'Карточка-4';
const index = cards.indexOf(cardToUpdate);

cards.splice(index, 1, 'Карточка-4.1');

console.log(cards);
