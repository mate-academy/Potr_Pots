export function openHint() {
  const materialsHints = document.querySelector('.materials__hints');
  let activeHint = null;

  materialsHints.addEventListener('click', function (event) {
      const hint = event.target.closest('.materials__hint');

      if (!hint) return;

      const open = hint.querySelector('.materials__open');
      const close = hint.querySelector('.materials__close');

      if (hint === activeHint) {
          hint.classList.remove('_active');
          open.classList.remove('_active');
          close.classList.add('_active');
          activeHint = null;
          return;
      }

      const allHints = materialsHints.querySelectorAll('.materials__hint');

      allHints.forEach(h => {
          if (h !== hint) {
              h.classList.remove('_active');
              h.querySelector('.materials__open').classList.remove('_active');
              h.querySelector('.materials__close').classList.add('_active');
          }
      });

      hint.classList.add('_active');
      open.classList.toggle('_active');
      close.classList.toggle('_active');
      activeHint = hint;
  });

  document.addEventListener('click', function (event) {
      if (!event.target.closest('.materials__hint')) {
          resetHints();
      }
  });

  function resetHints() {
      const allHints = materialsHints.querySelectorAll('.materials__hint');

      allHints.forEach(h => {
          h.classList.remove('_active');
          h.querySelector('.materials__open').classList.remove('_active');
          h.querySelector('.materials__close').classList.add('_active');
      });

      activeHint = null;
  }
}

openHint();
