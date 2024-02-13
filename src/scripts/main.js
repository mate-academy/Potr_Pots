'use strict';

function calculateClientWidth() {
  document.documentElement
    .style
    .setProperty(
      '--cw',
      document.documentElement.clientWidth + 'px',
    );
}

window.addEventListener('resize', calculateClientWidth, false);

document.addEventListener('DOMContentLoaded', calculateClientWidth, false);

window.addEventListener('load', calculateClientWidth);
