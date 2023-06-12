'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.getElementById('form');

form.onsubmit = function() {
  document.getElementById('form').reset();

  return false;
};

document.querySelector('div.materials__content-buttons')
  .addEventListener('click', function(ev) {
    const cl = ev.target.classList;

    if (cl.contains('materials__content-button')) {
      cl.toggle('materials__content-button--active');
    }
  });
;
