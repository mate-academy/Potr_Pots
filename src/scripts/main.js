'use strict';

const button = document.querySelector('.header__burger-button');
const menu = document.querySelector('.header__burger-menu');
const closeB = document.querySelector('.burger-nav__close');

button.addEventListener('click', function() {
  menu.style.transform = 'translateX(0)';
});

closeB.addEventListener('click', function() {
  menu.style.transform = 'translateX(75vw)';
});

const tx = document.getElementsByTagName('textArea');

for (let i = 0; i < tx.length; i++) {
  tx[i].setAttribute('style', 'height:'
  + (tx[i].scrollHeight)
  + 'px;overflow-y:hidden;');
  tx[i].addEventListener('input', OnInput, false);
}

function OnInput() {
  this.style.height = 'auto';
  this.style.height = (this.scrollHeight) + 'px';
}
