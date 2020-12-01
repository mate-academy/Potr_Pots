'use strict';

// show/hide navigation
const navShow = document.querySelector('.js-nav-show');
const navHide = document.querySelector('.js-nav-hide');
const navMenu = document.querySelector('#navMenu');
const navMenuClasses = navMenu.classList;

navShow.addEventListener('click', () => {
  if (!navMenuClasses.contains('nav--active')) {
    navMenuClasses.add('nav--active');
  }
});

navHide.addEventListener('click', () => {
  if (navMenuClasses.contains('nav--active')) {
    navMenuClasses.remove('nav--active');
  }
});

// smooth scroll
$(document).ready(function() {
  // Add smooth scrolling to all links
  $('a').on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== '') {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      const hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top,
      }, 500, function() {
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

// parallax
if (document.documentElement.clientWidth > 1024) {
  const scene = document.getElementById('jsParallaxScene');
  const parallax = new Parallax(scene);
}
