/* eslint-disable */

new WOW().init();

const content = document.querySelectorAll('.materials__hidden-text');

$('.materials__slider').slick({
  dots: true,
  dotsClass: 'materials__slider--dots',
  arrows: false,
  fade: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
});

$(document).ready(function(){
  [...content].forEach(item => {
    $('.materials__slider').slick('slickAdd', `<div>${item.textContent.trim()}</div>`);
  });
});
