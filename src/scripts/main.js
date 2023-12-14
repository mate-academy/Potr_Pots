'use strict';

const bullets = document.querySelectorAll('.materials__bullet');

bullets.forEach(bullet => {
  bullet.addEventListener('click', function() {
    bullet.classList.contains('materials__bullet--active')
      ? bullet.classList.remove('materials__bullet--active')
      : bullet.classList.add('materials__bullet--active');
  });
});

// Initialize Swiper
// eslint-disable-next-line
const swiper = new Swiper(".materials__swiper", {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function(index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  },
});
