const logins = ['m4ngoDoge', 'k1widab3st'];

const loginToFind = 'k1widab3st';
let message = '';

for (let i = 0; i < logins.length; i += 1) {
  const login = logins[i];

  if (login === loginToFind) {
    message = `User ${loginToFind} found`;
    break;
  }

  message = `User ${loginToFind} found`;

  
}

console.log(message);
