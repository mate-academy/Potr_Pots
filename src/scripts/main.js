'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

// function showPopUp() {
//   const popUpText = document.getElementById('advantage-1');

//   popUpText.classList.toggle('show');
// }
