'use strict';

const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  e.stopPropagation();

  const inputs = document.getElementsByClassName('main__form-input');

  for (const input of inputs) {
    input.value = '';
  }
});

const plusses = document.getElementsByClassName('main__mf-plus');

for (const plus of plusses) {
  plus.addEventListener('click', (e) => {
    if (e.target.classList.contains('main__mf-plus--active')) {
      e.target.classList.remove('main__mf-plus--active');
    } else {
      e.target.classList.add('main__mf-plus--active');
    }
  });
}
