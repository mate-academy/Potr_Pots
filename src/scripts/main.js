'use strict';

const title = document.querySelector('.nav');
const button = document.querySelector('.header__toggler');
const background = document.querySelector('.page-home__background');
const toggler = document.querySelector('#toggler');
const linkBasket = document.querySelector('#basket');
const linkFeatures = document.querySelector('#link-features');
const linkAboutUs = document.querySelector('#link-about-us');
const linkMaterials = document.querySelector('#link-materials');
const linkContacts = document.querySelector('#link-contacts');

toggler.addEventListener('click', () => {
  title.classList.toggle('nav--active');
  button.classList.toggle('header__toggler--active');
  background.classList.toggle('page-home__background--active');
});

background.addEventListener('click', () => {
  title.classList.remove('nav--active');
  button.classList.remove('header__toggler--active');
  background.classList.remove('page-home__background--active');
});

linkBasket.addEventListener('click', () => {
  title.classList.remove('nav--active');
  button.classList.remove('header__toggler--active');
  background.classList.remove('page-home__background--active');
});

linkFeatures.addEventListener('click', () => {
  title.classList.remove('nav--active');
  button.classList.remove('header__toggler--active');
  background.classList.remove('page-home__background--active');
});

linkAboutUs.addEventListener('click', () => {
  title.classList.remove('nav--active');
  button.classList.remove('header__toggler--active');
  background.classList.remove('page-home__background--active');
});

linkMaterials.addEventListener('click', () => {
  title.classList.remove('nav--active');
  button.classList.remove('header__toggler--active');
  background.classList.remove('page-home__background--active');
});

linkContacts.addEventListener('click', () => {
  title.classList.remove('nav--active');
  button.classList.remove('header__toggler--active');
  background.classList.remove('page-home__background--active');
});
