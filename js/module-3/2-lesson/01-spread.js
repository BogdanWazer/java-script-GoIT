const numbers = [0, 5, 10, ...[1, 2, 3], 4, 5, ...[15, 16, 756, 1234]];
console.log(numbers);

console.log(Math.max(...numbers)); //spread to numbers

const a = [1, 2, 3, 4, 5];

const b = [...a];
console.log('a:', b);

const ac = [{ x: 1 }, { y: 2 }, { z: 3 }];
const abc = [...ac];
console.log('abc:', abc);

const lastWeek = [1, 2, 3];
const currentWeek = [4, 5, 6];
const nextWeek = [7, 8, 9];

const allWeeks = [...lastWeek, ...currentWeek, ...nextWeek];

const allWeeksConcat = lastWeek.concat(currentWeek, nextWeek); // concat

console.table(allWeeks);
console.table(allWeeksConcat);

const asdf = [{ x: 1, y: 2, z: 3 }];
const fdsa = [{ t: 1, e: 2, c: 3 }];

const c = Object.assign({}, asdf, fdsa);
console.table(c);

console.log(...'qwe');

const sdf = {
  ...a,
  name: 'Mango',
};
console.log(sdf);

const defaultSettings = {
  theme: 'light',
  showNotification: true,
  hideSidebar: false,
};

const userSettings = {
  theme: 'dark',
  showNotification: false,
  hideSidebar: true,
};

const finalSettings = {
  ...defaultSettings,
  ...userSettings,
};

console.table(finalSettings);

const playlist = {
  name: [1, 2, 3],
  rating: 5,
  tracks: ['track1', 'track2', 'track3'],
  trackCount: 3,
};

// const { rating, name: newUserName = 5, author = 555 } = playlist; // destructirization of objects
// console.log(newUserName);

const playlist2 = {
  name: [1, 2, 3],
  ratings: 5,
  tracks: ['track1', 'track2', 'track3'],
  trackCount: 3,
  stats: {
    followers: 33,
    views: 55,
    likes: 15,
  },
};

const {
  ratings,
  name,
  stats: { followers, views, likes }, // destructirization of object in object
} = playlist2;

// const { name } = playlist2;

const realFollowers = playlist2.stats.followers;
const realName = playlist2.name;
console.log('real name is:', realName);
console.log('real followers is:', realFollowers);
console.log('full playlist is:', playlist2);

const rgb = [255, 100, 80]; // destructirization of array

const [a1, , c1] = rgb;
console.log(a1, c1);

const authors = {
  kiwi: 4,
  poly: 7,
  apple: 9,
  ajax: 11,
};

const entries = Object.entries(authors);

for (const [name, rating] of entries) {
  console.log(name, rating);
}

const playlist3 = {
  name: [1, 2, 3],
  ratings: 5,
  tracks: ['track1', 'track2', 'track3'],
  trackCount: 3,
  stats: {
    followers: 33,
    views: 55,
    likes: 15,
  },
};

const { name: NewNames, ratings: NewRatings, ...restItems } = playlist3;

console.log('New Names:', NewNames);

const fn = function (a, b, c, d, e, f) {};

fn({
  age: 10,
  friends: 5,
  hobbies: [],
  rating: 6,
});

const profile = {
  name: [1, 2, 3],
  tag: 5,
  location: 'New Orlean',
  avatar: 'facebook.com',
  stats: {
    followers: 33,
    views: 55,
    likes: 15,
  },
};

const showProfileInfo = function ({
  name,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
} = userProfile) {
  console.log(name, tag, location, avatar);
};

showProfileInfo(profile);
