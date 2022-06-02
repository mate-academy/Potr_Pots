'use strict';

const toggler1 = document.querySelector('#toggler1');
const droptext1 = document.querySelector('#droptext1');

toggler1.addEventListener('click', () => {
  droptext1.classList.toggle('dropdown__droptext--hidden');
  toggler1.classList.toggle('dropdown__toggler--open');
});

const toggler2 = document.querySelector('#toggler2');
const droptext2 = document.querySelector('#droptext2');

toggler2.addEventListener('click', () => {
  droptext2.classList.toggle('dropdown__droptext--hidden');
  toggler2.classList.toggle('dropdown__toggler--open');
});

const toggler3 = document.querySelector('#toggler3');
const droptext3 = document.querySelector('#droptext3');

toggler3.addEventListener('click', () => {
  droptext3.classList.toggle('dropdown__droptext--hidden');
  toggler3.classList.toggle('dropdown__toggler--open');
});

const toggler4 = document.querySelector('#toggler4');
const droptext4 = document.querySelector('#droptext4');

toggler4.addEventListener('click', () => {
  droptext4.classList.toggle('dropdown__droptext--hidden');
  toggler4.classList.toggle('dropdown__toggler--open');
});

const toggler5 = document.querySelector('#toggler5');
const droptext5 = document.querySelector('#droptext5');

toggler5.addEventListener('click', () => {
  droptext5.classList.toggle('dropdown__droptext--hidden');
  toggler5.classList.toggle('dropdown__toggler--open');
});

const menuOpener = document.querySelector('#menu-opener');
const menuCloser = document.querySelector('#menu-closer');
const menu = document.querySelector('#menu');

menuOpener.addEventListener('click', () => {
  menuOpener.classList.toggle('icon--menu-none');
  menu.classList.toggle('menu--active');
});

menuCloser.addEventListener('click', () => {
  menuOpener.classList.toggle('icon--menu-none');
  menu.classList.toggle('menu--active');
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('header--with-menu');
  } else {
    document.body.classList.remove('header--with-menu');
  }
});

const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  form.reset();
});

const slider = initSlider(document.querySelector('#slider'));

function initSlider(sliderElement) {
  const dots = sliderElement.querySelectorAll('.slider__button');
  const list = sliderElement.querySelector('.slider__list');
  const maxShift = list.children.length - 1;

  let currentIndex = 1;

  move(currentIndex);

  function move(newIndex) {
    dots[currentIndex].classList.remove('slider__button--active');

    if (newIndex < 0) {
      currentIndex = maxShift;
    } else if (newIndex > maxShift) {
      currentIndex = 0;
    } else {
      currentIndex = newIndex;
    }

    dots[currentIndex].classList.add('slider__button--active');
    list.style.transform = `translateX(${currentIndex * (-100)}%)`;
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener('click', () => {
      move(i);
    });
  }

  return {
    move: move,
    prev() {
      move(currentIndex - 1);
    },
    next() {
      move(currentIndex + 1);
    },
  };
}

setInterval(() => {
  slider.next();
}, 4000);
