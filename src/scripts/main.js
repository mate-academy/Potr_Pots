'use strict';

const title = document.querySelector('.nav');
const button = document.querySelector('.header__toggler');
const background = document.querySelector('.page-home__background');
const toggler = document.querySelector('#toggler');

toggler.addEventListener('click', () => {
  title.classList.toggle('nav--active');
  button.classList.toggle('header__toggler--active');
  background.classList.toggle('page-home__background--active');
});
