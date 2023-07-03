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

const obj = {
  a: 5,
  b: 7,
  c: {
    d: 5,
    e: 7,
  },
};

console.log(`first:`, obj);

const obj2 = {
  ...obj,
};

const obj3 = obj;

obj2.a = 10;

obj3.a = 150;

console.log(obj2);
console.log(obj);

// Filter

const numbers1 = [5, 10, 15, 20];

const filteredNumbers = numbers1.filter((number) => number < 10 || number > 15);

const otherfilteredNumbers = numbers1.filter((number) => number >= 10);
console.log('other', otherfilteredNumbers);
console.log('filtered', filteredNumbers);

// Find

const findNumber = numbers1.find((number) => number >= 6);
console.log(findNumber);

const findPlayer = players.find((player) => player.id == 'player');

console.log(findPlayer);

const total = numbers1.reduce((acc, number) => {
  console.log('acc', acc);
  console.log('number', number);

  return acc + number;
}, 0);
console.log(total);

const salary = {
  mango: 100,
  poly: 50,
  ajax: 150,
};

const totalSalary = Object.values(salary).reduce((total, value) => {
  return total + value;
});

console.log(totalSalary);

const tweets = [
  { id: '001', likes: 5, tags: ['js', 'nodeJs'] },
  { id: '002', likes: 6, tags: ['js', 'nodeJs', 'html', 'react'] },
];

const allTags = tweets.reduce((tags, tweet) => [...tags, ...tweet.tags], []); // accumulator - []
console.log('All tags:', allTags);

const tagsStats = allTags.reduce((acc, tag) => {
  // console.log(acc[tag]);
  // if (acc[tag]) {
  //   acc[tag] += 1;
  //   return acc;
  // }
  // acc[tag] = 1;
  // return acc;

  return {
    ...acc,
    [tag]: acc[tag] ? acc[tag] + 1 : 1,
  };
}, {});
console.log(tagsStats);

const user = {
  name: 'Mango',
};

const key = 'name';

console.log(user['name']);
