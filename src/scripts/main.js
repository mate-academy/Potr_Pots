'use strict';

function changeClassToLargeScrins() {
  const header = document.getElementById('header-content');
  const content = document.getElementById('meet-content');
  const element = document.getElementById('header-title');
  const textPotr = document.getElementById('potr-size_content_bottom');
  const textPotrRemove = document.getElementById('potr-size_text');

  if (window.innerWidth >= 768) {
    header.classList.add('container');
    content.classList.add('container');
    textPotr.classList.add('container');
    element.classList.remove('container');
    textPotrRemove.classList.remove('container');
  } else {
    header.classList.remove('container');
    content.classList.remove('container');
    textPotr.classList.remove('container');
    element.classList.add('container');
    textPotrRemove.classList.add('container');
  }
};

changeClassToLargeScrins();
window.addEventListener('resize', changeClassToLargeScrins);

/* --------------------remove_container------------------------- */

function changeClassContainer() {
  const textPotr = document.getElementById('potr-size_content_bottom');
  const sizeContent = document.getElementById('potr-size_content');

  if (window.innerWidth >= 1440) {
    textPotr.classList.remove('container');
    sizeContent.classList.add('container');
  } else {
    textPotr.classList.add('container');
    sizeContent.classList.remove('container');
  }
};

changeClassContainer();
window.addEventListener('resize', changeClassContainer);

/* ------------------------------------------------------------ */

function removeClassToText() {
  const textPotrRemove = document.getElementById('potr-size_text');

  if (window.innerWidth < 768) {
    textPotrRemove.classList.remove('container');
  }
}

removeClassToText();
window.addEventListener('resize', removeClassToText);

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
