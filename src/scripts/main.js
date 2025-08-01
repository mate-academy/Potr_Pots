'use strict';

const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slider__slide');
const points = document.querySelectorAll('.slider__point');
const sumSlides = slides.length;
let slideIndex = 0;

slider.addEventListener('click', () => {
  slides[slideIndex].classList.remove('slider__slide--active');
  points[slideIndex].classList.remove('slider__point--active');

  slideIndex = (slideIndex + 1) % sumSlides;

  slides[slideIndex].classList.add('slider__slide--active');
  points[slideIndex].classList.add('slider__point--active');
});
