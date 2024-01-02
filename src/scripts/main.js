function showFeature(featureNumber) {
  const descriptions = document.querySelectorAll('.materials__description');

  descriptions.forEach(function(description) {
    description.classList.remove('active');
  });

  const selectedDescription = document.querySelector(
    '.features--' + featureNumber,
  );

  selectedDescription.classList.add('active');
}

const buttons = document.querySelectorAll('.button__features');

buttons.forEach(function(button, index) {
  button.addEventListener('click', function listener() {
    showFeature(index + 1);
  });
});
