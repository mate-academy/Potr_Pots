'use strict';

document.addEventListener('DOMContentLoaded', () => {
  let currentSlide = 1;
  const totalSlides = 5;
  let touchStartX = null;

  const showSlide = (index) => {
    const sliders = document.querySelectorAll('.maf__slider');

    sliders.forEach(slider => slider.classList.remove('maf__slider--active'));
    sliders[index - 1].classList.add('maf__slider--active');
  };

  const nextSlide = () => {
    currentSlide = (currentSlide % totalSlides) + 1;
    showSlide(currentSlide);
  };

  const prevSlide = () => {
    currentSlide = (currentSlide === 1) ? totalSlides : currentSlide - 1;
    showSlide(currentSlide);
  };

  const handleTouchStart = (event) => {
    if (window.innerWidth <= 768) {
      touchStartX = event.touches[0].clientX;
    }
  };

  const handleTouchEnd = (event) => {
    if (window.innerWidth <= 768 && touchStartX) {
      const touchEndX = event.changedTouches[0].clientX;
      const diffX = touchStartX - touchEndX;

      if (Math.abs(diffX) > 50) {
        if (diffX > 0) {
          nextSlide();
        } else {
          prevSlide();
        }
      }
      touchStartX = null;
    }
  };

  const sliderWrapper = document.querySelector('.maf__slider-wrapper');

  sliderWrapper.addEventListener('touchstart', handleTouchStart, false);
  sliderWrapper.addEventListener('touchend', handleTouchEnd, false);

  const buttons = document.querySelectorAll('[id^="maf__btn-tablet--"]');
  const sliders = document.querySelectorAll('[id^="maf__slider--"]');

  buttons.forEach((button, index) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();

      const isActive = button.classList.contains('maf__btn-tablet--active');

      buttons.forEach(btn => btn.classList.remove('maf__btn-tablet--active'));
      sliders.forEach(slider => slider.classList.remove('maf__slider--active'));

      if (!isActive) {
        button.classList.add('maf__btn-tablet--active');
        sliders[index].classList.add('maf__slider--active');
      }
    });
  });

  const tabletButtons = document.querySelectorAll('[id^="maf_btn--"]');

  tabletButtons.forEach((button, index) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();

      const isActive = button.classList.contains('maf__button--active');

      tabletButtons.forEach(btn => btn.classList.remove('maf__button--active'));
      sliders.forEach(slider => slider.classList.remove('maf__slider--active'));

      if (!isActive) {
        button.classList.add('maf__button--active');
        sliders[index].classList.add('maf__slider--active');
      }
    });
  });
});

const modal = document.querySelector('.menu');
const modalBG = document.querySelector('.menu__bg, .menu__relative');
const btnOpen = document.querySelector('.header__menu-btn');
const closeModalBtns = document.querySelectorAll(
  '.menu__closed, .menu__bg, .menu__link');

btnOpen.addEventListener('click', showModal);

closeModalBtns.forEach((btn) => {
  btn.addEventListener('click', hideModal);
});

function showModal() {
  modal.classList.add('show');
  modalBG.classList.add('show');
}

function hideModal() {
  modal.classList.remove('show');
  modalBG.classList.remove('show');
}

// form

document.querySelector('.footer__form').addEventListener('submit',
  function(event) {
    event.preventDefault();
    document.querySelector('.footer__form').reset();
  });
