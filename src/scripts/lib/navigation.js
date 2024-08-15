export function navigation() {
  const menu = document.querySelector('.menu__list');
  const logo = document.querySelector('.header__logo');

  logo.addEventListener('click', function(e) {
      e.preventDefault();

      document.querySelector(logo.getAttribute('href')).scrollIntoView({
          behavior: 'smooth',
      });
  })

  menu.addEventListener('click', function(e) {
      e.preventDefault();

      if (e.target.classList.contains('menu__link')) {
          const id = e.target.getAttribute('href');

          document.querySelector(id).scrollIntoView({
              behavior: 'smooth',
          });
      }
  });
}

export function scrollTo() {
  const btnScrollTo = document.querySelector('.hero__scroll');
  const section1 = document.querySelector('#section--scrollTo');

  btnScrollTo.addEventListener('click', function(e) {
      const s1coords = section1.getBoundingClientRect();

      window.scrollTo({
          left: s1coords.left + window.pageXOffset,
          top: s1coords.top + window.pageYOffset,
          behavior: 'smooth',
      })
  });
}

navigation()
scrollTo();
