'use strict';

//  SWIPER
// eslint-disable-next-line no-unused-vars, no-undef
const swiper = new Swiper('.swiper', {
  speed: 400,
  spaceBetween: 100,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// MATERIALS

let activeSlide;
let activeButton;

const buttons = document.querySelectorAll('.materials__button');
const slides = Array.from(
  document.querySelectorAll('.materials__button-slide')
);
const hideSlide = function(slide, button) {
  button.classList.remove('materials__button--open');
  button.textContent = '+';
  slide.style.display = 'none';
  activeSlide = null;
  activeButton = null;
};

buttons.forEach(button => {
  button.addEventListener('click', function() {
    const number = button.dataset.button;
    const neededSlide = slides.find(slide => slide.dataset.slide === number);

    if (neededSlide === activeSlide) {
      hideSlide(neededSlide, button);

      return;
    }

    if (activeSlide) {
      hideSlide(activeSlide, activeButton);
    }

    neededSlide.style.display = 'block';
    button.classList.add('materials__button--open');
    button.textContent = '-';
    activeSlide = neededSlide;
    activeButton = button;
  });
});

// FORM

document
  .querySelector('.contacts__button')
  .addEventListener('click', function(e) {
    const inputs = Array.from(document.querySelectorAll('.contacts__input'));
    let isValid;

    inputs.forEach(input => {
      isValid = input.reportValidity();
    });

    if (!isValid) {
      return;
    }
    e.preventDefault();

    inputs.forEach(input => {
      input.value = '';
    });
  });
