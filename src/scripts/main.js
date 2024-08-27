$(document).ready(function () {
  if (window.innerWidth < 768) {
    $('.carousel').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: true,
      initialSlide: 0,
    });

    $('.carousel').on('afterChange', function (event, slick, currentSlide) {
      $('.indicator').removeClass('active');
      $('.indicator').eq(currentSlide).addClass('active');
    });

    $('.indicator').eq(0).addClass('active');
  }
});

function slickGoToSlide(slideIndex) {
  if (window.innerWidth < 768) {
    $('.carousel').slick('slickGoTo', slideIndex);
  }
}

function toggleText(index) {
  const textBox = document.getElementById(`text-${index}`);
  const linkButton = document.querySelector(`.link-button--${index}`);

  if (window.innerWidth > 768) {

    if (textBox.style.display === 'none' || textBox.style.display === '') {
      textBox.style.display = 'block';
      linkButton.classList.add('link-button--active');
    } else {
      textBox.style.display = 'none';
      linkButton.classList.remove('link-button--active');
    }
  } else {
    if (textBox.classList.contains('text-box--active')) {
      textBox.style.display = 'none';
      textBox.classList.remove('text-box--active');
      linkButton.classList.remove('link-button--active');
    } else {
      document.querySelectorAll('.text-box').forEach((box) => {
        box.style.display = 'none';
        box.classList.remove('text-box--active');
      });
      document.querySelectorAll('.link-button').forEach((button) => {
        button.classList.remove('link-button--active');
      });
      textBox.style.display = 'block';
      textBox.classList.add('text-box--active');
      linkButton.classList.add('link-button--active');
    }
  }
}
