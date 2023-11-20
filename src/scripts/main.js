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

const headerBurgerBtn = document.querySelector('.header__menu-btn');
const pageBody = document.querySelector('.page__body');
const menuLinks = document.querySelectorAll('.menu__link');
const menuBurgerBtn = document.querySelector('.menu__burger-btn');
const menuLogo = document.querySelector('.menu__logo');

function addLockClass() {
  pageBody.classList.add('lock');
}

function removeLockClass() {
  pageBody.classList.remove('lock');
}

headerBurgerBtn.addEventListener('click', addLockClass);

menuLinks.forEach(function(menuLink) {
  menuLink.addEventListener('click', removeLockClass);
});

menuBurgerBtn.addEventListener('click', removeLockClass);

menuLogo.addEventListener('click', removeLockClass);

// form

document.querySelector('.footer__form').addEventListener('submit',
  function(event) {
    event.preventDefault();
    document.querySelector('.footer__form').reset();
  });
