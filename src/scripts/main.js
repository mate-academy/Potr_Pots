'use strict';

const formSubmit = document.getElementById('form');

formSubmit.addEventListener('submit', (e) => {
  document.getElementById('form').reset();
  document.getElementById('form-submit').innerHTML = 'Submited!';
  e.preventDefault();
});

const btn = document.getElementById('btn');
const acordion = document.getElementById('acordion');

btn.addEventListener('click', () => {
  acordion.classList.toggle('wrapper--hidden');
  
});
