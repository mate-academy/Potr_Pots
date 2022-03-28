'use strict';

// Swiper
const swiper = new Swiper('.swiper', { // eslint-disable-line
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

// Page scroll off
window.addEventListener('hashchange', () => {
  if (window.location.hash === '#burger-menu') {
    document.body.classList.add('page__body--scroll-off');
  } else {
    document.body.classList.remove('page__body--scroll-off');
  }
});
