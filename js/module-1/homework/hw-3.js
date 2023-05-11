let message;

const ADMIN_PASSWORD = 1111;

const password = prompt('Enter your password');

// if (password === null) {
//   console.log('Отменено пользователем');
// }

if (password == ADMIN_PASSWORD) {
  message = 'Добро пожаловать';
} else if (password === null) {
  message = 'Отменено пользователем';
} else {
  message = 'Доступ запрещен, неверный пароль';
}

console.log(message);
