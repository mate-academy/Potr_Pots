'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.materials__slide');
  const buttons = document.querySelectorAll('.materials__icons-button');

  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.style.display = 'block';
      } else {
        slide.style.display = 'none';
      }
    });

    buttons.forEach(button => {
      button.classList.remove('materials__icons-button--active');
    });

    buttons[index].classList.add('materials__icons-button--active');
  }

  showSlide(0);

  buttons.forEach((button, index) => {
    button.addEventListener('click', () => showSlide(index));
  });
});

const myButtons = document.querySelectorAll('.materials__button-img');

myButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    const contentClass = button.dataset.contentClass;

    if (button.classList.contains('materials__button-img--active')) {
      button.classList.remove('materials__button-img--active');
      document.querySelector(`.${contentClass}`).style.display = 'none';
    } else {
      myButtons.forEach(function(btn) {
        btn.classList.remove('materials__button-img--active');

        const btnContentClass = btn.dataset.contentClass;

        document.querySelector(`.${btnContentClass}`).style.display = 'none';
      });
      button.classList.add('materials__button-img--active');
      document.querySelector(`.${contentClass}`).style.display = 'block';
    }
  });
});

const form = document.getElementById('form');
const userName = document.getElementById('user-name');
const userEmail = document.getElementById('user-email');
const userMessage = document.getElementById('user-message');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  userName.value = '';
  userEmail.value = '';
  userMessage.value = '';

  validateInput(userName);
  validateInput(userEmail);
  validateInput(userMessage);

  document.getElementById('form').classList.add('footer__form--success');
});

userName.addEventListener('input', () => validateInput(userName));
userEmail.addEventListener('input', () => validateInput(userEmail));
userMessage.addEventListener('input', () => validateInput(userMessage));

function validateInput(inputElement) {
  if (inputElement.checkValidity()) {
    inputElement.classList.remove('error');
  } else {
    inputElement.classList.add('error');
  }
}
