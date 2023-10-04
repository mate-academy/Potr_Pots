'use strict';

function updateLink() {
  const link = document.getElementById('basket/menu');

  if (window.innerWidth < 1279) {
    link.href = '#menu';
  } else {
    link.href = '#message-us';
  }
}

function updateText() {
  const paragraph = document.getElementById('materials__article-text');
  const windowWidth = window.innerWidth;

  if (windowWidth < 1279) {
    paragraph.innerHTML = `All materials used in our pots are
      made from<br><b>100% recycled materials</b> and are <b>100%<br>recyclable
      at the end of life</b> (should you ever<br>choose to get rid of your
      POTR!). All materials<br>have been sourced from within Europe to<br>
      reduce our carbon footprint when transporting<br>the raw materials,
      and all manufacturing is<br>carried out in the UK.`;
  } else {
    paragraph.innerHTML = `All materials used in our pots are
      made from 100% recycled<br> materials and are 100% recyclable
      at the end of life (should you <br> ever choose to get rid of
      your POTR!). All materials have been <br> sourced from within
      Europe to reduce our carbon footprint <br> when transporting
      the raw materials, and all manufacturing is <br> carried out
      in the UK.`;
  }
}

function toggleButton(buttonNumber) {
  const text = document.querySelector('#materials__popup-text--'
  + buttonNumber);
  const button = document.querySelector('#materials__popup-button--'
  + buttonNumber);
  let counter = 1;

  while (true) {
    const tempButton = document.querySelector('#materials__popup-button--'
      + counter);
    const tempText = document.querySelector('#materials__popup-text--'
      + counter);

    if (tempButton) {
      if (tempButton.classList.contains('pressed') && tempButton === button) {
        tempButton.classList.remove('pressed');
        tempText.classList.remove('shown');

        return;
      }

      tempButton.classList.remove('pressed');
      tempText.classList.remove('shown');

      counter++;
    } else {
      break;
    }
  }

  text.classList.add('shown');
  button.classList.add('pressed');
};

function hideMaterials(event) {
  let match = false;

  for (let i = 1; i <= 5; i++) {
    const button = document.getElementById(`materials__popup-button--${i}`);

    if (event.target === button) {
      match = true;
    }
  }

  if (!match) {
    for (let i = 1; i <= 5; i++) {
      const text = document.querySelector(`#materials__popup-text--${i}`);
      const button = document.querySelector(`#materials__popup-button--${i}`);

      text.classList.remove('shown');
      button.classList.remove('pressed');
    }
  }
}

function validateForm() {
  const emailField = document.getElementById('form-email');
  const nameField = document.getElementById('form-name');
  const messageField = document.getElementById('form-message');

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (nameField.value.length < 3) {
    nameField.classList.add('error');
    // eslint-disable-next-line no-undef
    alert('The name must contain at least 3 letters.');

    return false;
  }

  if (!emailPattern.test(emailField.value)) {
    emailField.classList.add('error');
    // eslint-disable-next-line no-undef
    alert('Please, enter correct email.');

    return false;
  }

  if (messageField.value.length < 10) {
    messageField.classList.add('error');
    // eslint-disable-next-line no-undef
    alert('The message must contain at least 10 characters.');

    return false;
  }

  return true;
}

window.onload = () => {
  for (let i = 1; i <= 5; i++) {
    document.getElementById('materials__popup-button--' + i)
      .addEventListener('click',
        function() {
          toggleButton(i);
        });
  }

  const form = document.querySelector('.questions__form-inputs');
  const inputs = form.querySelectorAll('.input');
  const textarea = document
    .querySelector('.questions__form-inputs-field-message');

  inputs.forEach(input => {
    input.addEventListener('focus', function() {
      form.classList.remove('validated');

      inputs.forEach(inp => {
        inp.classList.remove('error');
      });
    });
  });

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const isValid = validateForm();

    if (isValid) {
      form.classList.add('validated');

      form.reset();
      textarea.style.cssText = 'height:auto;';
    }
  });

  textarea.addEventListener('keydown', resize);

  function resize() {
    const el = this;

    setTimeout(function() {
      el.style.cssText = 'height:auto';
      el.style.cssText = 'height:' + el.scrollHeight + 'px';
    }, 1);
  }
};

document.addEventListener('click', hideMaterials);

window.addEventListener('load', updateLink);
window.addEventListener('load', updateText);

window.addEventListener('resize', updateLink);
window.addEventListener('resize', updateText);
