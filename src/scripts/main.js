'use strict';

const form = document.querySelector('.form');
const pageElement = document.querySelector('.page');
const menuMobOpenBtn = document.querySelector('.nav__menu-opened');
const menuMob = document.querySelector('.header__wrapper-nav-mob');
const menuMobCloceBtn = document.querySelector('.nav-mob__btn-close');
const navList = document.querySelector('.nav-mob__list');
const backCloseElement = document.querySelector('.header__background-nav-mob');
const materialsBtnArr = document.querySelectorAll('.materials__card-btn');
const modal = document.querySelector('.modal');
const btnCloseModal = document.querySelector('.modal__btn-close');
const btnOpenModalHead = document.querySelector('.header__btn-buy');
const btnOpenModBenef = document.querySelector('.benefits__btn-buy');
const btnOpenBascetMob = document.querySelector('.nav-mob__btn-bascet');
const btnOpenBascetDesc = document.querySelector('.nav__bascet');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  form.reset();
});

function handlerOpenMenu() {
  menuMob.classList.add('nav-mob__open');
  pageElement.classList.add('page--scroll-none');
}

function handlerCloceMenu() {
  menuMob.classList.remove('nav-mob__open');
  pageElement.classList.remove('page--scroll-none');
}

function handlerNavList(event) {
  const { tagName } = event.target;

  if (tagName === 'A') {
    menuMob.classList.remove('nav-mob__open');
    pageElement.classList.remove('page--scroll-none');
  }
}

function handlerOpenDescriptMaterials(event) {
  const tooltip = event.currentTarget
    .parentNode.querySelector('.materials__card-description');

  tooltip.classList.toggle('materials__open-card-descriptional');
  event.currentTarget.classList.toggle('materials__btn-minus');
}

function handlerCloseModal() {
  modal.classList.remove('modal__open');
  pageElement.classList.remove('page--scroll-none');
}

function handlerOpenModalBascet() {
  modal.classList.add('modal__open');
  pageElement.classList.add('page--scroll-none');
}

menuMobOpenBtn.addEventListener('click', handlerOpenMenu);
menuMobCloceBtn.addEventListener('click', handlerCloceMenu);
navList.addEventListener('click', handlerNavList);
backCloseElement.addEventListener('click', handlerCloceMenu);

materialsBtnArr.forEach((el) => {
  el.addEventListener('click', handlerOpenDescriptMaterials);
});

btnCloseModal.addEventListener('click', handlerCloseModal);
btnOpenModBenef.addEventListener('click', handlerOpenModalBascet);
btnOpenModalHead.addEventListener('click', handlerOpenModalBascet);
btnOpenBascetMob.addEventListener('click', handlerOpenModalBascet);
btnOpenBascetDesc.addEventListener('click', handlerOpenModalBascet);
