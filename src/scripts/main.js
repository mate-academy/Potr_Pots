/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
'use strict';

const year = document.querySelector('.copyright__year');

function getYear() {
  year.innerHTML = (new Date().getFullYear());
}

getYear();

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  slideClass: 'swiper__slide',
  slideActiveClass: 'swiper__slide--active',
  wrapperClass: 'swiper__wrapper',

  pagination: {
    el: '.swiper__pagination',
    bulletClass: 'swiper__bullet',
    bulletActiveClass: 'swiper__bullet--active',
  },
});

const materialsButton = document.querySelectorAll('.materials__button');

materialsButton.forEach((el) => {
  el.addEventListener('click', () => {
    el.classList.toggle('icon__materials--active');
    el.children[0].classList.toggle('materials__window--active');
  });
});

const teamMartin = document.querySelector('.team__bg--martin');

const martinObserver = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) {
    teamMartin.classList.add('animated--team-bg--martin',
      entries[0].isIntersecting);
  }
});

martinObserver.observe(teamMartin);

const teamAndy = document.querySelector('.team__bg--andy');

const andyObserver = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) {
    teamAndy.classList.add('animated--team-bg--andy',
      entries[0].isIntersecting);
  }
});

andyObserver.observe(teamAndy);

const discount = document.querySelector('.benefits__discount');

const discountObserver = new IntersectionObserver(entries => {
  discount.classList.toggle('animated--discount', entries[0].isIntersecting);
});

discountObserver.observe(discount);

const sections = document.querySelectorAll('.section, .header, .footer');

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animated--section', entry.isIntersecting);
    }
  });
});

sections.forEach(section => {
  sectionObserver.observe(section);
});

const textarea = document.querySelector('.form__input--textarea');

textarea.addEventListener('keydown', autosize);

function autosize() {
  const el = this;

  setTimeout(function() {
    el.style.cssText = 'height:auto';
    el.style.cssText = 'box-sizing:content-box';
    el.style.cssText = 'height:' + el.scrollHeight + 'px';
  }, 0);
}
