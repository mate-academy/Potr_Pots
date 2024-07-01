
$(document).ready(function () {
  $('.carousel').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  });

  $('.carousel').on('afterChange', function (event, slick, currentSlide) {
    $('.indicator').removeClass('active');
    $('.indicator').eq(currentSlide).addClass('active');
  });
});

function slickGoToSlide(slideIndex) {
  $('.carousel').slick('slickGoTo', slideIndex);
}

function toggleText(index) {
  const textBox = document.getElementById(`text-${index}`);
  const linkButton = document.querySelector(`.link-button--${index}`);

  if (textBox.style.display === 'none' || textBox.style.display === '') {
    textBox.style.display = 'block';
    linkButton.classList.add('visited');
  } else {
    textBox.style.display = 'none';
    linkButton.classList.remove('visited');
  }
}
