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

/* --------------------remove_container------------------------- */

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

/* ----------------visible_elemene----------------------------- */

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();

  return (
    rect.top >= 0
    && rect.left >= 0
    && rect.bottom <= (window.innerHeight
      || document.documentElement.clientHeight)
    && rect.right <= (window.innerWidth
      || document.documentElement.clientWidth)
  );
}

/* ---------------------animation------------------------------ */

function addClassToVisibleElements() {
  const favicons = document.querySelectorAll('.item__favicon');
  const texts = document.querySelectorAll('.item__text');
  const titles = document.querySelectorAll('.item__title');

  favicons.forEach(function(favicon) {
    if (isElementInViewport(favicon)) {
      favicon.classList.add('active');
    } else {
      favicon.classList.remove('active');
    }
  });

  texts.forEach(function(text) {
    if (isElementInViewport(text)) {
      text.classList.add('active-text');
    } else {
      text.classList.remove('active-text');
    }
  });

  titles.forEach(function(title) {
    if (isElementInViewport(title)) {
      title.classList.add('active-title');
    } else {
      title.classList.remove('active-title');
    }
  });
}

window.addEventListener('scroll', addClassToVisibleElements);
document.addEventListener('DOMContentLoaded', addClassToVisibleElements);
