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
  document.getElementById(`plus${i}`).addEventListener('click', () => {
    const popup = document.getElementById(`popup${i}`);
    const plus = document.getElementById(`plus${i}`);

    popup.classList.toggle('materials__popup--active');
    plus.classList.toggle('materials__plus--active');
  });
}
