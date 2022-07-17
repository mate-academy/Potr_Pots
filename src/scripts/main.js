'use strict';

// disable page scrolling under the menu
window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

// Page shouldn't be reloaded on form submit
const form = document.querySelector('form');
const submitbutton = document.querySelector('#submit-button');

submitbutton.addEventListener('click', function(event) {
  event.preventDefault();

  form.reset();
});

// smootscroll

// you need to add to your config file

// {
//   "parserOptions": {
//       "sourceType": "module",
//   }
// }
// import smoothscroll from 'smoothscroll-polyfill';

// kick off the polyfill!
// smoothscroll.polyfill();
