'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#burger-menu') {
    document.body.classList.add('page__body--scroll-off');
  } else {
    document.body.classList.remove('page__body--scroll-off');
  }
});
