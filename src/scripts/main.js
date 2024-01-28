 'use strict';
window.addEventListener('hashchange', () => {
  if (window.location.hash === '#slide-menu') {
    document.body.classList.add('body__lock');
  } else {
    document.body.classList.remove('body__lock');
  }
});

/* function submitForm() {
  const form = document.getElementById('form');

  form.reset();
}

document.addEventListener('DOMContentLoaded', function() {
  submitForm();
});
 */
