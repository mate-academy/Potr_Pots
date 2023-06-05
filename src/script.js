'use strict';

function setActiveClass(radioGroup, activeClass) {
  const radios = document.getElementsByName(radioGroup);
  const setActive = function() {
    for (let i = 0; i < radios.length; i++) {
      const radio = radios[i];

      const label = document.querySelector(`label[for="${radio.id}"]`);

      if (radio.checked) {
        if (label) {
          label.classList.add(activeClass);
        }
      } else {
        if (label) {
          label.classList.remove(activeClass);
        }
      }
    }
  };

  for (let i = 0; i < radios.length; i++) {
    const radio = radios[i];

    radio.addEventListener('change', setActive);
  }
}

setActiveClass('r', 'active');

window.addEventListener('load', function() {
  const buttons = document.querySelectorAll('.info-button');
  const infoModal = document.getElementById('info-modal');

  buttons.forEach(function(button) {
    button.addEventListener('click', function() {
      closeAllModals();
      this.classList.add('active');

      const modalPosition = this.getAttribute('data-modal-position');
      const modalText = this.getAttribute('data-modal-text');

      infoModal.setAttribute('data-modal-position', modalPosition);
      infoModal.textContent = modalText;

      infoModal.style.display = 'block';
    });
  });

  function closeAllModals() {
    buttons.forEach(function(button) {
      button.classList.remove('active');
    });

    infoModal.style.display = 'none';
  }

  const activeButton = document.querySelector('.info-button.active');

  if (activeButton) {
    activeButton.click();
  }
});

const toggleButton = document.querySelector('.toggle-button');

toggleButton.addEventListener('click', function() {
  if (this.textContent === '+') {
    this.textContent = '-';
  } else {
    this.textContent = '+';
  }
});

const form = document.querySelector('#message-us__form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.reset();
});

//   var buttons = document. жжжжж  querySelectorAll('.info-button');
//   var infoModal = document.getElementById('info-modal');

//   buttons.forEach(function(button) {
//     button.addEventListener('click', function() {
//       // Закрываем все открытые модальные окна
//       closeAllModals();

//       // Добавляем класс active к нажатой кнопке
//       this.classList.add('active');

//       // Получаем позицию и текст модального окна из атрибутов data
//       var modalPosition = this.getAttribute('data-modal-position');
//       var modalText = this.getAttribute('data-modal-text');

//       // Устанавливаем атрибуты data для модального окна
//       infoModal.setAttribute('data-modal-position', modalPosition);
//       infoModal.textContent = modalText;

//       // Показываем модальное окно
//       infoModal.style.display = 'block';
//     });
//   });

//   function closeAllModals() {
//     // Удаляем класс active у всех кнопок
//     buttons.forEach(function(button) {
//       button.classList.remove('active');
//     });

//     infoModal.style.display = 'none';}
// });
