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
    initialSlide: 0,
  });

  $('.carousel').on('afterChange', function (event, slick, currentSlide) {
    $('.indicator').removeClass('active');
    $('.indicator').eq(currentSlide).addClass('active');
  });

  $('.indicator').eq(0).addClass('active');
});

function slickGoToSlide(slideIndex) {
  $('.carousel').slick('slickGoTo', slideIndex);
}

function toggleText(index) {
  const textBox = document.getElementById(`text-${index}`);
  const linkButton = document.querySelector(`.link-button--${index}`);

  if (textBox.style.display === 'none' || textBox.style.display === '') {
    textBox.style.display = 'block';
    linkButton.classList.add('active');
  } else {
    textBox.style.display = 'none';
    linkButton.classList.remove('active');
  }
}
