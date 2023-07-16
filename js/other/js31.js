const btn = document.querySelector('button');

// btn.onclick = function () {
//   alert('Hello world2');
// };

// btn.addEventListener('click', () => {
//   alert('Hello world!!!!!!!!!!!!!!!!');
// });
let i = 0;
const deleteElement = (e) => {
  console.log(e.target);
  i++;
  if (i == 1) {
    btn.removeEventListener('click', deleteElement);
  }
  //   e.target.remove();
};

btn.addEventListener('mouseenter', deleteElement);
