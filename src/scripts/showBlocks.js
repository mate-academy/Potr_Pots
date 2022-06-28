'use strict';

const showInfoLinks = document.querySelectorAll('.show-info');

if (showInfoLinks.length > 0) {
  for (let index = 0; index < showInfoLinks.length; index++) {
    const showInfoLink = showInfoLinks[index];

    showInfoLink.addEventListener('click', function(e) {
      const dropdownName = showInfoLink.getAttribute('href').replace('#', '');
      const currentDropdown = document.getElementById(dropdownName);

      if (showInfoLink.innerHTML === '+') {
        showInfoLink.innerHTML = '-';
      } else {
        showInfoLink.innerHTML = '+';
      }

      showInfoLink.classList.toggle('round-btn--active');
      currentDropdown.classList.toggle('materials--active');
      e.preventDefault();
    });
  }
}
