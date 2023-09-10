'use strict';

function addClassToHeader() {
  const header = document.getElementById('header-content');

  if (window.innerWidth >= 768) {
    header.classList.add('container');
  } else {
    header.classList.remove('container');
  }
};

addClassToHeader();
window.addEventListener('resize', addClassToHeader);

function removeClassIfScreenWidthIsSmall() {
  const element = document.getElementById('header-title');
  const screenWidth = window.innerWidth;

  if (screenWidth >= 768) {
    element.classList.remove('container');
  } else {
    element.classList.add('container');
  }
};

window.addEventListener('load', removeClassIfScreenWidthIsSmall);
window.addEventListener('resize', removeClassIfScreenWidthIsSmall);
