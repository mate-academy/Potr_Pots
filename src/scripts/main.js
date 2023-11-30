/* eslint-disable max-len */
'use strict';

const background = document.querySelector('.info');
const info = document.createElement('div');
const buttons = document.querySelectorAll('.materials__button');
const arrayButtons = Array.from(buttons);

const paginationButtons = document
  .querySelectorAll('.materials__description__button-item');
const array = Array.from(paginationButtons);

background.append(info);

function changeContent(pageNumber, classNumber) {
  const materialsDescription = document
    .querySelector('.materials__description-text');
  let text = materialsDescription.textContent;

  switch (pageNumber) {
    case 0:
      text = 'We have chosen Bobbiny recycled cotton cord to use as our draw string and wicking cord. Not only is it 100% recycled, it looks great and works really well at wicking water. ';
      break;
    case 1:
      text = 'Shipped flat packed so they can be slipped through your letterbox, POTR Pots have the smallest carbon footprint possible during transit. ';
      break;
    case 2:
      text = 'Once assembled the cotton cord doubles as the watering system, allowing your plants to self-regulate their water intake using tried and tested wicking technology. ';
      break;
    case 3:
      text = 'POTR pots are flat pack, origami planters designed to self-water your plants, made from recycled materials.';
      break;
    case 4:
      text = 'POTR Pots are constructed using recycled polypropylene which can be fully recycled. ';
      break;
  }

  materialsDescription.textContent = text;
  info.textContent = text;
  info.className = (`materials__info materials__info--${classNumber}`);

  info.classList.toggle('materials__info--active');

  arrayButtons[classNumber].classList.toggle('materials__button--red');
  arrayButtons[classNumber].classList.toggle('materials__button--grey');
}

for (let i = 0; i < array.length; i++) {
  array[i].addEventListener('click', function() {
    changeContent(i);
  });
}

for (let i = 0; i < arrayButtons.length; i++) {
  arrayButtons[i].addEventListener('mouseover', function() {
    changeContent(i, i);
    arrayButtons[i].textContent = '-';
  });

  arrayButtons[i].addEventListener('mouseout', function() {
    info.classList.remove('materials__info--active');
    info.classList.add('materials__info--none');
    arrayButtons[i].classList.remove('materials__button--grey');
    arrayButtons[i].classList.add('materials__button--red');
    arrayButtons[i].textContent = '+';
  });
}

const form = document.querySelector('.contact__form');

const inputs = document.querySelectorAll('.contact__form-field');

function handler(event) {
  event.preventDefault();

  inputs.forEach(input => {
    input.value = '';
  });
}

form.addEventListener('submit', handler);

function handleHashChange() {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
}

handleHashChange();

window.addEventListener('hashchange', handleHashChange);
