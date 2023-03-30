'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.getElementById('form');

function submitForm(event) {
  event.preventDefault();
  form.reset();
}

form.addEventListener('submit', submitForm);

const buttons = document.querySelectorAll('.button-circle');

buttons.forEach(btn => {
  btn.addEventListener('click', function() {
    const textBlockSelector = this.getAttribute('data-target');
    const textBlock = document.getElementById(textBlockSelector);
    const isActive = this.getAttribute('data-active');

    if (isActive === 'false') {
      textBlock.classList.add('active');
      this.innerHTML = '&#8722;';
      this.classList.add('active');
      this.setAttribute('data-active', 'true');
    } else {
      textBlock.classList.remove('active');
      this.innerHTML = '&#43;';
      this.classList.remove('active');
      this.setAttribute('data-active', 'false');
    }
  });
});
