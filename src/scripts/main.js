'use strict';

const icon = document.getElementById('header-burger');

for (let i = 1; i <= 6; i++) {
  const item = document.getElementById(`item${i}`);

  item.addEventListener('click', () => {
    document.getElementById('menu-container').classList.toggle('menu-opened');
  });
}

icon.addEventListener('click', () => {
  document.getElementById('menu-container').classList.toggle('menu-opened');
});

for (let i = 1; i <= 5; i++) {
  const plus = document.querySelector(`.materials__plus--${i}`);

  plus.addEventListener('click', () => {
    const popup = document.querySelector(`.materials__popup--${i}`);

    popup.classList.toggle('materials__popup--active');
    plus.classList.toggle('materials__plus--active');
  });
}
