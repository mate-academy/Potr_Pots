'use strict';

function changeClassToLargeScrins() {
  const header = document.getElementById('header-content');
  const content = document.getElementById('meet-content');
  const element = document.getElementById('header-title');

  if (window.innerWidth >= 768) {
    header.classList.add('container');
    content.classList.add('container');
    element.classList.remove('container');
  } else {
    header.classList.remove('container');
    content.classList.remove('container');
    element.classList.add('container');
  }
};

changeClassToLargeScrins();
window.addEventListener('resize', changeClassToLargeScrins);

/* --------------------remove_container------------------------- */

// function removeClassIfScreenWidthIsSmall() {
//   const element = document.getElementById('header-title');
//   const screenWidth = window.innerWidth;

//   if (screenWidth >= 768) {
//     element.classList.remove('container');
//   } else {
//     element.classList.add('container');
//   }
// };

// window.addEventListener('load', removeClassIfScreenWidthIsSmall);
// window.addEventListener('resize', removeClassIfScreenWidthIsSmall);

/* --------------------------------------------------------------- */

// function addClassToMeet() {
//   const content = document.getElementById('meet-content');

//   if (window.innerWidth >= 768) {
//     content.classList.add('container');
//   } else {
//     content.classList.remove('container');
//   }
// };

// addClassToHeader();
// window.addEventListener('resize', addClassToMeet);

/* ----------------------------slider---------------------------- */
