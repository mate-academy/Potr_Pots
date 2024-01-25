'use strict';

const closeButton = document.querySelector('.menu__close-btn');
const openButton = document.querySelector('.menu__open-btn');
const nav = document.querySelector('.menu');
const link1 = document.querySelector('.menu__nav-link');
const link2 = document.querySelector('.menu__nav-link--2');
const link3 = document.querySelector('.menu__nav-link--3');
const link4 = document.querySelector('.menu__nav-link--4');
const link5 = document.querySelector('.menu__nav-link--5');

link1.addEventListener('click', () => {
  nav.classList.add('menu-close');
});

link2.addEventListener('click', () => {
  nav.classList.add('menu-close');
});

link3.addEventListener('click', () => {
  nav.classList.add('menu-close');
});

link4.addEventListener('click', () => {
  nav.classList.add('menu-close');
});

link5.addEventListener('click', () => {
  nav.classList.add('menu-close');
});

closeButton.addEventListener('click', () => {
  nav.classList.add('menu-close');
});

openButton.addEventListener('click', () => {
  nav.classList.remove('menu-close');
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('no-scroll');
  } else {
    document.body.classList.remove('no-scroll');
  }
});

document.addEventListener('submit', function (event) {
  event.preventDefault();
  event.target.reset();
});

const carousel = document.querySelector('.carousel__items');
const slides = Array.from(carousel.children);
const leftBtn = document.querySelector('.carousel__button--left');
const rightBtn = document.querySelector('.carousel__button--right');
const dotsNav = document.querySelector('.carousel__nav');
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + 'px';
};

slides.forEach(setSlidePosition);

const moveToSlide = (carousele, currentSlide, targetSlide) => {
  carousel.style.transform = 'translateX(-' + targetSlide.style.left + ')';
  currentSlide.classList.remove('current-slide');
  targetSlide.classList.add('current-slide');
};

const updateDots = (currentDot, targetDot) => {
  currentDot.classList.remove('current-slide');
  targetDot.classList.add('current-slide');
};

const hideShowArrows = (slides_, leftBtn_, rightBtn_, targetIndex) => {
  if (targetIndex === 0) {
    leftBtn.classList.add('is-hidden');
    rightBtn.classList.remove('is-hidden');
  } else if (targetIndex === slides.length - 1) {
    leftBtn.classList.remove('is-hidden');
    rightBtn.classList.add('is-hidden');
  } else {
    leftBtn.classList.remove('is-hidden');
    rightBtn.classList.remove('is-hidden');
  }
};

// on click slides move left
rightBtn.addEventListener('click', (e) => {
  const currentSlide = carousel.querySelector('.current-slide');
  const nextSlide = currentSlide.nextElementSibling;
  const currentDot = dotsNav.querySelector('.current-slide');
  const nextDot = currentDot.nextElementSibling;
  const nextIndex = slides.findIndex((slide) => slide === nextSlide);

  moveToSlide(carousel, currentSlide, nextSlide);
  updateDots(currentDot, nextDot);
  hideShowArrows(slides, leftBtn, rightBtn, nextIndex);
});

leftBtn.addEventListener('click', (e) => {
  const currentSlide = carousel.querySelector('.current-slide');
  const prevSlide = currentSlide.previousElementSibling;
  const currentDot = dotsNav.querySelector('.current-slide');
  const prevDot = currentDot.previousElementSibling;
  const prevIndex = slides.findIndex((slide) => slide === prevSlide);

  moveToSlide(carousel, currentSlide, prevSlide);
  updateDots(currentDot, prevDot);
  hideShowArrows(slides, leftBtn, rightBtn, prevIndex);
});

dotsNav.addEventListener('click', (e) => {
  const targetDot = e.target.closest('button');

  if (!targetDot) {
    return;
  }

  const currentSlide = carousel.querySelector('.current-slide');
  const currentDot = dotsNav.querySelector('.current-slide');
  const targetIndex = dots.findIndex((dot) => dot === targetDot);
  const targetSlide = slides[targetIndex];

  moveToSlide(carousel, currentSlide, targetSlide);
  updateDots(currentDot, targetDot);
  hideShowArrows(slides, leftBtn, rightBtn, targetIndex);
});

const modalOpen1 = document.querySelector('.modals__button--plus--1');

modalOpen1.addEventListener('click', () => {
  document.querySelector('.modals__info--1').classList.remove('is-hidden');

  document
    .querySelector('.modals__button--minus--1')
    .classList.remove('is-hidden');
  document.querySelector('.modals__button--plus--1').classList.add('is-hidden');
});

const modalClose1 = document.querySelector('.modals__button--minus--1');

modalClose1.addEventListener('click', () => {
  document.querySelector('.modals__info--1').classList.add('is-hidden');

  document
    .querySelector('.modals__button--minus--1')
    .classList.add('is-hidden');

  document
    .querySelector('.modals__button--plus--1')
    .classList.remove('is-hidden');
});

const modalOpen2 = document.querySelector('.modals__button--plus--2');

modalOpen2.addEventListener('click', () => {
  document.querySelector('.modals__info--2').classList.remove('is-hidden');

  document
    .querySelector('.modals__button--minus--2')
    .classList.remove('is-hidden');
  document.querySelector('.modals__button--plus--2').classList.add('is-hidden');
});

const modalClose2 = document.querySelector('.modals__button--minus--2');

modalClose2.addEventListener('click', () => {
  document.querySelector('.modals__info--2').classList.add('is-hidden');

  document
    .querySelector('.modals__button--minus--2')
    .classList.add('is-hidden');

  document.querySelector('.modals__button--plus--2')
    .classList.remove('is-hidden');
});

const modalOpen3 = document.querySelector('.modals__button--plus--3');

modalOpen3.addEventListener('click', () => {
  document.querySelector('.modals__info--3').classList.remove('is-hidden');

  document
    .querySelector('.modals__button--minus--3')
    .classList.remove('is-hidden');
  document.querySelector('.modals__button--plus--3').classList.add('is-hidden');
});

const modalClose3 = document.querySelector('.modals__button--minus--3');

modalClose3.addEventListener('click', () => {
  document.querySelector('.modals__info--3').classList.add('is-hidden');

  document
    .querySelector('.modals__button--minus--3')
    .classList.add('is-hidden');

  document
    .querySelector('.modals__button--plus--3')
    .classList.remove('is-hidden');
});

const modalOpen4 = document.querySelector('.modals__button--plus--4');

modalOpen4.addEventListener('click', () => {
  document.querySelector('.modals__info--4').classList.remove('is-hidden');

  document
    .querySelector('.modals__button--minus--4')
    .classList.remove('is-hidden');
  document.querySelector('.modals__button--plus--4').classList.add('is-hidden');
});

const modalClose4 = document.querySelector('.modals__button--minus--4');

modalClose4.addEventListener('click', () => {
  document.querySelector('.modals__info--4').classList.add('is-hidden');

  document
    .querySelector('.modals__button--minus--4')
    .classList.add('is-hidden');

  document
    .querySelector('.modals__button--plus--4')
    .classList.remove('is-hidden');
});

const modalOpen5 = document.querySelector('.modals__button--plus--5');

modalOpen5.addEventListener('click', () => {
  document.querySelector('.modals__info--5').classList.remove('is-hidden');

  document
    .querySelector('.modals__button--minus--5')
    .classList.remove('is-hidden');
  document.querySelector('.modals__button--plus--5').classList.add('is-hidden');
});

const modalClose5 = document.querySelector('.modals__button--minus--5');

modalClose5.addEventListener('click', () => {
  document.querySelector('.modals__info--5').classList.add('is-hidden');

  document
    .querySelector('.modals__button--minus--5')
    .classList.add('is-hidden');

  document
    .querySelector('.modals__button--plus--5')
    .classList.remove('is-hidden');
});
