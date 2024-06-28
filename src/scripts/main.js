'use strict';




document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.card__item-button');
  const images = document.querySelectorAll('.card__item-text');

  buttons.forEach((button, index) => {
    button.addEventListener('click', function() {
      if (images[index].style.display === 'none') {
        images.forEach(image => {
          image.style.display = 'none';
        });
        buttons.forEach(btn => btn.classList.remove('gray'));
        images[index].style.display = 'block';
        button.classList.add('gray');
      } else {
        images[index].style.display = 'none';
        button.classList.remove('gray');
      }
    });
  });
});
