'use strict';

// buy button functionality
const buyButton = document.querySelector('.summary__buy-button');
const elementsNames = ['a', 'b', 'c', 'd', 'e', 'f'];

const sergeant = (soldierName, command) => {
  if (command === 'formUp') {
    document.querySelector(`.summary__photo-card--${soldierName}`)
      .classList.add(`summary__photo-card--${soldierName}-linedUp`);
  } else {
    document.querySelector(`.summary__photo-card--${soldierName}`)
      .classList.remove(`summary__photo-card--${soldierName}-linedUp`);
  }
};

buyButton.addEventListener('mouseover', () => {
  elementsNames.forEach(soldier => sergeant(soldier, 'formUp'));
});

buyButton.addEventListener('mouseleave', () => {
  elementsNames.forEach(soldier => sergeant(soldier, ''));
});

// header visibility logic
const header = document.querySelector('.header');
let prevScrollY = 0;

const scrollHeaderToggler = (event) => {
  if (window.scrollY > header.offsetHeight / 2) {
    header.style.top = `-${header.offsetHeight}px`;
  }

  if (prevScrollY > window.scrollY) {
    header.style.top = '0';
  }

  if (header.style.top === '0px' && window.scrollY > header.offsetHeight) {
    header.classList.add('header--filled');
  } else {
    header.classList.remove('header--filled');
  }

  prevScrollY = window.scrollY;
};

document.addEventListener('scroll', scrollHeaderToggler);

// form prevent default
document.querySelector('.message-us__form')
  .addEventListener('submit', (event) => {
    event.preventDefault();
    document.querySelector('#popupToggler').checked = true;
  });
