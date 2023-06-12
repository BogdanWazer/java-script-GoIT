// const friends = [
//   { name: 'Mango', online: false },
//   { name: 'Kiwi', online: true },
//   { name: 'Poly', online: false },
//   { name: 'Ajax', online: true },
//   { name: 'Brandon', online: true },
//   { name: 'Jak', online: true },
// ];

// for (const friend of friends) {
//   console.log(friend.name); // get name value
//   console.log(friend.online); // get online value

//   friend.newprop = 555; // adding new property
// }
// console.table(friends);

// const findFriendByName = function (allFriends, name) {
//   // new function
//   for (const friend of allFriends) {
//     // for loop
//     if (friend.name === name) {
//       // if state
//       return 'Find!';
//     }
//   }
//   return 'Didn`t';
// };

// console.log(findFriendByName(friends, 'Kiwi'));

// const findStatusByValue = function (storage, neededUserStatus) {
//   for (const userStatus of storage) {
//     if (userStatus.online === neededUserStatus) {
//       return 'Online!';
//     }
//   }
// };

// console.log(findStatusByValue(friends, true));

// const getAllNames = function (allFriends) {
//   const names = [];

//   for (const friend of allFriends) {
//     names.push(friend.name);
//   }
//   return names;
// };

// console.log(getAllNames(friends));

// const getOnlineFriends = function(onlineFriends) {
//   for(const onlineFriend of onlineFriends) {
//     console.log(onlineFriend);
//   }
// }

// getOnlineFriends(friends);