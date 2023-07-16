const box = document.getElementById('box'),
  btns = document.getElementsByTagName('button'),
  circles = document.getElementsByClassName('circle'),
  hearts = document.querySelectorAll('.heart'),
  firstHeart = document.querySelector('.heart'),
  firstButton = document.querySelector('button');

box.style.backgroundColor = 'gray';
box.style.height = '150px';
box.style.width = '50px';
const num = 300;
box.style.cssText = `background-color: blue; width: 500px; height: ${num}px`;

// for (let i = 0; i < hearts.length; i++) {
//   hearts[i].style.backgroundColor = 'red';
// }

hearts.forEach((item) => {
  item.style.backgroundColor = 'red';
});

const div = document.createElement('div');
div.classList.add('black');

div.style.cssText = 'weight: 100px; height: 100px; ';
document.body.appendChild(div);
div.innerHTML = '<h1>Hello!</h1>';

div.insertAdjacentHTML('afterend', 'Hello2');
