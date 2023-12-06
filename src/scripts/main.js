'use strict';

const body = document.body;
const menu = document.querySelector('.menu');
const menuToggle = document.querySelector('.header__icon--menu');
const menuClose = document.querySelector('.menu__close');
const menuLinks = document.querySelectorAll('.menu__link');

const disableScroll = () => {
  body.style.overflow = 'hidden';
};

const enableScroll = () => {
  body.style.overflow = '';
};

const closeMenu = () => {
  menu.classList.remove('menu--open');
  enableScroll();
  window.location.hash = '#';
};

const openMenu = () => {
  menu.classList.add('menu--open');
  disableScroll();
  window.location.hash = '#menu';
};

menuToggle.addEventListener('click', () => {
  if (menu.classList.contains('menu--open')) {
    closeMenu();
  } else {
    openMenu();
  }
});

menuClose.addEventListener('click', closeMenu);

document.addEventListener('click', (event) => {
  if (menu.classList.contains('menu--open')
  && !menu.contains(event.target) && event.target !== menuToggle) {
    closeMenu();
  }
});

menuLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    closeMenu();
  });
});

if (window.location.hash === '#menu') {
  openMenu();
}

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    openMenu();
  } else {
    closeMenu();
  }
});

const form = document.querySelector('.questions__form');
const inputs = document.querySelectorAll('.questions__input');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  inputs.forEach(input => {
    input.value = '';
  });
});

window.onload = () => {
  let openSlide = null;

  const isTabletOrLarger = window.innerWidth >= 640;

  for (let i = 1; i <= 5; i++) {
    const input = document.getElementById(`slide${i}`);
    const label = document.querySelector(`.materials__label--${i}`);
    const slide = document.querySelector(`.materials__slide--${i}`);

    if (i === 1) {
      input.checked = true;
      slide.style.display = 'block';
      label.classList.add('active');
      openSlide = slide;
    }

    label.addEventListener('click', () => {
      if (openSlide !== slide) {
        if (openSlide !== null) {
          openSlide.style.display = 'none';

          const prevLabel = document.querySelector('.materials__label.active');

          prevLabel.classList.remove('active');
        }

        input.checked = true;
        slide.style.display = 'block';
        label.classList.add('active');
        openSlide = slide;
      } else if (isTabletOrLarger) {
        input.checked = false;
        slide.style.display = 'none';
        label.classList.remove('active');
        openSlide = null;
      }
    });
  }
};
