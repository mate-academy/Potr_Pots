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

// for block menu;
const menu = document.getElementById('menu');

function openMenu() {
  menu.style.transform = 'translateX(0%)';
  document.documentElement.style.overflow = 'hidden';
}

function closeMenu() {
  menu.style.transform = 'translateX(100%)';
  document.documentElement.style.overflow = 'auto';
}

const menuIcon = document.querySelector('.icon__menu');
const closeIcon = document.querySelector('.icon__close');

menuIcon.addEventListener('click', openMenu);
closeIcon.addEventListener('click', closeMenu);

// slider block
const slides = document.querySelectorAll('.slider__slide');
const buttons = document.querySelectorAll('.pagination__button');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    showSlide(index);
  });
});

function showSlide(slideIndex) {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}
