export function burger() {
  const hideMenu = document.querySelector('.menu__close');
  const links = document.querySelectorAll('.menu__link');

  document.addEventListener('click', openMenu);
  hideMenu.addEventListener('click', closeMenu);

  function openMenu(e) {
      const targetItem = e.target;

      if (targetItem.closest('.icon-menu')) {
          document.documentElement.classList.add('menu-open');
          hideMenu.classList.remove('hidden');
      }
  }

  function closeMenu() {
      document.documentElement.classList.remove('menu-open');
      hideMenu.classList.add('hidden');
  }

  links.forEach(link => {
      link.addEventListener('click', () => {
          closeMenu();
      });
  });
};

burger();
