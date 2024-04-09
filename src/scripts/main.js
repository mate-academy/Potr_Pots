'use strict';

const TOTAL_BUTTONS = 5;

const texts = [
  'POTR Pots are constructed using recycled polypropylene which can be fully recycled. ',
  'POTR pots are flat pack, origami planters designed to self-water your plants, made from recycled materials.',
  'Once assembled the cotton cord doubles as the watering system, allowing your plants to self-regulate their water intake using tried and tested wicking technology.',
  'Shipped flat packed so they can be slipped through your letterbox, POTR Pots have the smallest carbon footprint possible during transit. ',
  'We have chosen Bobbiny recycled cotton cord to use as our draw string and wicking cord. Not only is it 100% recycled, it looks great and works really well at wicking water. ',
]

const buttonsIds = Array.from({ length: TOTAL_BUTTONS }, (_, index) => index + 1);
const dialogue = document.getElementById('materials__dialogue');
const dialogueText = document.getElementById('materials__dialogue-text');

buttonsIds.forEach(buttonId => {
  const button = document.getElementById(`materials__button-${buttonId}`);
  button.addEventListener('click', toggleButton);
});

function toggleButton() {
  const id = this.id.charAt(this.id.length - 1);


  if (this.classList.contains('materials__button-hide')) {
    this.classList.remove('materials__button-hide');
    dialogue.className = 'materials__dialogue';
  } else {
    clearAllButtons();
    dialogue.className = 'materials__dialogue';
    this.classList.add('materials__button-hide');
    dialogueText.textContent = texts[+id - 1];
    dialogue.classList.add('materials__dialogue-active', `materials__dialogue-${id}`);
  }
}

function clearAllButtons() {
  buttonsIds.forEach(id => {
    const button = document.getElementById(`materials__button-${id}`);
    button.classList.remove('materials__button-hide')
  })
}

document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  let isValid = true;

  if (nameInput.value.trim() === '') {
    nameInput.classList.add('questions__form-item-error')
    isValid = false;
    nameInput.setAttribute('placeholder', 'Enter your name');
  } else {
    nameInput.classList.remove('questions__form-item-error')
    nameInput.classList.add('questions__form-item-success')
  }


  if (!isValidEmail(emailInput.value)) {
    emailInput.classList.add('questions__form-item-error')
    isValid = false;
    emailInput.setAttribute('placeholder', 'Enter your name');
  } else {
    emailInput.classList.remove('questions__form-item-error')
    emailInput.classList.add('questions__form-item-success')
  }

  if (messageInput.value.trim() === '') {
    messageInput.classList.add('questions__form-item-error')
    isValid = false;
    messageInput.setAttribute('placeholder', 'Enter your name');
  } else {
    messageInput.classList.remove('questions__form-item-error')
    messageInput.classList.add('questions__form-item-success')
  }

  if (isValid) {
    document.getElementById('successMessage').style.display = 'block';
    setTimeout(function() {
        document.getElementById('successMessage').style.display = 'none';
    }, 3000);

    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';
  }

});

function isValidEmail(email) {
  const emailRegex = /^\S+@\S+\.\S+$/;
  return emailRegex.test(email);
}

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider");
  const slides = document.querySelectorAll(".slide");
  const dotsContainer = document.querySelector(".dots-container");

  let currentIndex = 0;

  function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  function updateDots() {
    dotsContainer.innerHTML = "";
    slides.forEach((slide, index) => {
      const dot = document.createElement("span");
      dot.classList.add("dot");
      if (index === currentIndex) {
        dot.classList.add("active");
      }
      dot.addEventListener("click", () => {
        currentIndex = index;
        updateSlider();
        updateDots();
      });
      dotsContainer.appendChild(dot);
    });
  }

  updateDots();

  setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
    updateDots();
  }, 3000);
});
