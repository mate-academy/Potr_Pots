'use strict';

const buttons = document.querySelector('.slider__btn-box');
const buttonsAll = document.querySelectorAll('.slider__btn');
const content = document.querySelector('.slider__content');
const sliderItems = document.querySelectorAll('.slider__item');
const slider = document.querySelector('.slider');

let slideWidth;
let gap;

computeParams();

buttons.addEventListener('click', slide);

window.addEventListener('resize', computeParams);

function slide(event) {
  const num = event.target.getAttribute('data-num');

  content.style.transform = `translateX(-${num * (slideWidth + gap)}px)`;

  buttonsAll.forEach(el => {
    el.classList.remove('slider__btn--active');
  });

  if (event.target.classList.contains('slider__btn')) {
    event.target.classList.add('slider__btn--active');
  };
}

function computeParams() {
  slider.style.display = 'none';

  if (window.innerWidth >= 768) {
    return;
  }
  slideWidth = window.innerWidth - 120;

  sliderItems.forEach(el => {
    el.style.width = slideWidth + 'px';
  });

  slider.style.width = window.innerWidth - 20 + 'px';
  gap = +window.getComputedStyle(content).gap.split('px')[0];
  slider.style.display = 'flex';
  content.style.transform = `translateX(0)`;

  buttonsAll.forEach(el => {
    el.classList.remove('slider__btn--active');
  });

  document.querySelector('.slider__btn').classList.add('slider__btn--active');
}
