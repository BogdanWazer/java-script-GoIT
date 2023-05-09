const btnAdd = document.querySelector('button[data-add]'); // получение доступа к кнопке по селектору атрибута
const valueInput = document.querySelector('input[data-value]');
const outputEl = document.querySelector('.js-output span');
const resetBtn = document.querySelector('button[data-reset]');

let total = 0;
// console.log(btnAdd.textContent); // вивод кнопки в консоль
// btnAdd.textContent = 'qwerty'; // изменение подписи кнопки

btnAdd.addEventListener('click', function () {
  // при нажатии виводит сообщение в консоль
  console.log('Clicked');

  const value = Number(valueInput.value);
  console.log(value);

  total += value;
  outputEl.textContent = total;

  valueInput.value = '';
});

resetBtn.addEventListener('click', function () {
  total = 0;
  outputEl.textContent = total;
});
