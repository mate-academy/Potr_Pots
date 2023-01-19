'use strict';

const nav = document.querySelector('.header__nav');
const htmlTag = document.getElementsByTagName('html')[0];
const form = document.querySelector('.form');
const inputs = form.querySelectorAll('[data-cy="input"]');
const navLinks = document.querySelectorAll('.nav__link');

const allModals = document.querySelectorAll('.modal');
const modalIcons = document.querySelectorAll('.modal__icon');

function getNavClosed() {
  nav.classList.remove('active-nav');

  document.body.style.overflowY = 'visible';
  htmlTag.style.overflowY = 'visible';
}

document.addEventListener('click', (e) => {
  const isOpenNavClicked = e.target.closest('.header__burger');
  const isCloseNavClicked = e.target.closest('.nav__close');
  const isMenuOpen = nav.classList.contains('active-nav');
  const isNavBlur = !e.target.closest('.header__nav');

  if (isOpenNavClicked) {
    window.scrollTo(0, 0);
    nav.classList.add('active-nav');

    document.body.style.overflowY = 'hidden';
    htmlTag.style.overflowY = 'hidden';
  }

  if (isCloseNavClicked) {
    getNavClosed();
  }

  if (isMenuOpen && isNavBlur) {
    getNavClosed();
  }
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    getNavClosed();
  });
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const inputWithoutValue = [...inputs].filter(el => {
    if (el.value.length === 0) {
      return el;
    }
  });

  if (inputWithoutValue.length > 0) {
    inputs.forEach(el => {
      if (el.value.length === 0) {
        el.classList.remove('success');
        el.classList.add('invalid');
      } else {
        el.classList.remove('invalid');
      }
    });
  }

  if (inputWithoutValue.length === 0) {
    inputs.forEach(input => {
      input.value = '';
      input.classList.remove('invalid');
      input.classList.add('success');
    });
  }
});

[...inputs].forEach(input => {
  input.addEventListener('keyup', () => {
    input.classList.remove('invalid');
    input.classList.remove('success');

    inputs.forEach(el => {
      el.classList.remove('success');
    });
  });
});

modalIcons.forEach(modalIcon => {
  modalIcon.addEventListener('click', (e) => {
    const currentModal = e.target.closest('.modal');

    allModals.forEach(anotherModal => {
      if (anotherModal !== currentModal) {
        anotherModal.classList.remove('is-active');
      }
    });

    currentModal.classList.toggle('is-active');
  });
});

// eslint-disable-next-line no-undef, no-unused-vars
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    paginationType: 'custom',
  },
});
