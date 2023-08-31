'use strict';

const link = document.getElementById('basket/menu');

function updateLink() {
  if (window.innerWidth < 1279) {
    link.href = '#menu';
  } else {
    link.href = '#';
  }
}

window.addEventListener('load', updateLink);
window.addEventListener('resize', updateLink);
