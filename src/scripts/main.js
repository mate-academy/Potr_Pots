/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
'use strict';

const form = document.querySelector('form');
const inputs = document.querySelectorAll('.form__fild');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  inputs.forEach(function(elem) {
    elem.value = '';
  });
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const sections = document.querySelectorAll('.page__section');

sections.forEach((el) => {
  const sectionObserver = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      el.classList.add('active__down', entries[0].isIntersecting);
    }
  });

  sectionObserver.observe(el);
});

const Names = document.querySelector('.about-us__container');

const namesObserver = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) {
    Names.classList.add('active__names',
      entries[0].isIntersecting);
  }
});

namesObserver.observe(Names);

// Swiper/////////////////////////////////
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// MODAL/////////////////////////////////
const btns = document.querySelectorAll('.button__modal');
const modals = document.querySelectorAll('.materials__modal-window');
const modalOverlay = document.querySelector('.materials__modal');

btns.forEach((button) => {
  button.addEventListener('click', (e) => {
    const path = e.currentTarget.getAttribute('data-path');
    const isActive = button.classList.contains('button__modal--active');

    btns.forEach((btn) => {
      btn.classList.remove('button__modal--active');
    });

    modals.forEach((modal) => {
      modal.classList.remove('materials__modal-window--active');
    });

    if (!isActive) {
      document.querySelector(`[data-target="${path}"]`)
        .classList.add('materials__modal-window--active');
      button.classList.add('button__modal--active');
    }
  });
});

modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) {
    modals.forEach((el) => {
      el.classList.remove('materials__modal-window--active');
    });

    btns.forEach((el) => {
      el.classList.remove('button__modal--active');
    });
  }
});

// BUTTON-------------------------------------------------------------
const mobileMediaQuery = window.matchMedia('(min-width: 767px)');

function handleMediaQueryChange(mediaQuery) {
  const button = document.querySelector('#benefits__button');

  if (mediaQuery.matches) {
    button.classList.add('button__secondary');
  } else {
    button.classList.remove('button__secondary');
  }
}

mobileMediaQuery.addListener(handleMediaQueryChange);

handleMediaQueryChange(mobileMediaQuery);
