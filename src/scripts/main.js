'use strict';

for (let i = 1; i <= 5; i++) {
  const circle = document.querySelector(`.circle--${i}`);
  const infocard = document.querySelector(`.infocard--${i}`);

  circle.addEventListener('click', () => {
    circle.classList.toggle('circle--active');
    infocard.classList.toggle('infocard--active');
  });
}

const tx = document.getElementsByTagName('textarea');

for (let i = 0; i < tx.length; i++) {
  tx[i].setAttribute('style', 'height:' + (tx[i].scrollHeight)
  + 'px;overflow-y:hidden;');
  tx[i].addEventListener('input', OnInput, false);
}

function OnInput() {
  this.style.height = 0;
  this.style.height = (this.scrollHeight) + 'px';
}
