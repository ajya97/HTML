let bt = document.querySelector('.bt');
let div = document.querySelector('.divon');
let body = document.querySelector('body'); // removed '.' from '.body'
let i = 1;

bt.addEventListener('click', () => {
  if (i % 2 !== 0) {
    bt.innerHTML = 'CLICK ON';
    div.classList.add('divoff');
    div.classList.remove('divon');
    body.style.backgroundColor = 'white';
  } else {
    bt.innerHTML = 'CLICK OFF';
    div.classList.add('divon');
    div.classList.remove('divoff');
    body.style.backgroundColor = 'black';
  }
  i++;
});

