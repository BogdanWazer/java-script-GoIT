const numbers = [5, 10, 15, 20, 25];

numbers.forEach(
  function (number, index, array) {
    console.log('number', number);
    console.log(this);
  },
  { a: 5, b: 10 }
);

console.log(numbers);

const prices = [50, 118, 253];

prices.forEach(function (number, index, array) {
  console.log('Price:', number);
});

const doublePrices = numbers.map(function (number) {
  console.log('not double:', number);
  return number * 2;
});

console.log('doubleNums:', doublePrices);

const players = [
  { id: 'player', name: 'Mango' },
  { id: 'player2', name: 'Alex' },
];

const playersName = players.map((player) => {
  console.log(player);
  return player.name;
});

console.log('playerNames:', playersName);

const playerIds = players.map((playerId) => {
  return playerId.id;
});

console.log(playerIds);

const res = players.map(({ name, id }) => ({ name, id }));

console.log(res);

const updatedPlayers = players.map((player) => {
  console.log(player);
  return { ...player, id: player.id + 1 };
});

console.table(updatedPlayers);

const playerIdToUpdate = 'player';

// const updatedPlayer2 = players.map(
//   (player) =>
//     playerIdToUpdate === player.id
//       ? { ...player, id: player.id + 3411234 }
//       : player
//   console.log(player.id);
//   if (playerIdToUpdate === player.id) {
//     console.log('Founded');
//     return { ...player, id: player.id + 3411234 };
//   }
//   return player;
// );

const updatedPlayer2 = players.map((player) =>
  playerIdToUpdate === player.id
    ? { ...player, id: player.id + 3411234 }
    : player
);
console.log(updatedPlayer2);

// FILTER

const filteredNumbers = numbers.filter((number) => {
  console.log(number);

  return number < 15;
});
console.log(filteredNumbers);
console.log('numbers:', filteredNumbers );
 