
import Splide from '../scripts/lib/splide.min.js';

const nav = document.querySelector('.nav');
const headerBtn = document.querySelector('.burger-btn');
const headerBtnLine = document.querySelector('.burger-btn__line');
const togglers = document.querySelectorAll('.nav__link, .burger-btn');
// const pageBody = document.getElementById('home');

togglers.forEach(toogler => {
  toogler.addEventListener('click', () => {
    // pageBody.classList.toggle('page__body--with-menu');
    nav.classList.toggle('nav--active');
    headerBtn.classList.toggle('burger-btn--active');
    headerBtnLine.classList.toggle('burger-btn__line--active');
  });
});

new Splide('.splide', {
  arrows: false,
  breakpoints: {
    2000: {
      width: '40vw',
    },
    1100: {
      width: '60vw  ',
    },
    640: {
      width: '80vw',
    },
  },
}).mount();
