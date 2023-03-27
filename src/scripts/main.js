'use strict';

/* eslint-disable */
var links = document.querySelectorAll('.menu a');
var linksLength = links.length

for(var i = 0; i < linksLength; i++) {
  links[i].addEventListener('click', function() {
    document.getElementById('header__vector').checked = false;
  });
}

const pageReload = document.querySelector('#form');

pageReload.addEventListener('submit', (event) => {
  event.preventDefault();
  pageReload.reset();
});
