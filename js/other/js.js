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

for (let key in options) {
  if (typeof options[key] === 'object') {
    for (let i in options[key]) {
      console.log(`Options ${i} has ${options[key][i]}`);
    }
  }
}

console.log(Object.keys(options).length);
