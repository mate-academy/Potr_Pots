'use strict';

(function sliderModule() {
  let slideIndex = 0;
  let touchStartX = 0;
  const swiperContainer = document.querySelector('.swiper-container');
  const bullets = document.querySelectorAll('.swiper-item');

  function showSlides(n) {
    const slides = document.querySelectorAll('.swiper-slide');

    if (n >= slides.length) {
      slideIndex = 0;
    }

    if (n < 0) {
      slideIndex = slides.length - 1;
    }

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }

    slides[slideIndex].style.display = 'block';
    updateBullets(slideIndex);
  }

  function swipeRight() {
    showSlides((slideIndex += 1));
  }

  function swipeLeft() {
    showSlides((slideIndex -= 1));
  }

  swiperContainer.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].clientX;
  });

  swiperContainer.addEventListener('touchend', (e) => {
    const touchEndX = e.changedTouches[0].clientX;

    if (touchEndX > touchStartX) {
      swipeLeft();
    } else {
      swipeRight();
    }
  });

  function updateBullets(index) {
    bullets.forEach((bullet, bulletIndex) => {
      if (bulletIndex === index) {
        bullet.classList.add('active');
      } else {
        bullet.classList.remove('active');
      }
    });
  }

  function setupBulletClicks() {
    bullets.forEach((bullet, index) => {
      bullet.addEventListener('click', function() {
        slideIndex = index;
        showSlides(slideIndex);
      });
    });
  }

  window.addEventListener('load', function() {
    setupBulletClicks();
    updateBullets(slideIndex);
    showSlides(slideIndex);
  });
})();

(function menuModule() {
  window.addEventListener('hashchange', () => {
    if (window.location.hash === '#menu') {
      document.body.classList.add('page__body--with-menu');
    } else {
      document.body.classList.remove('page__body--with-menu');
    }
  });

  window.addEventListener('load', function() {
    const hash = window.location.hash.substring(1);

    if (hash === 'menu') {
      document.querySelector('.page').classList.add('page__body--with-menu');
    }
  });
})();

(function popUpModule() {
  const popUpBlocks = document.querySelectorAll('.pop-up__block');

  const resetPopUpElements = () => {
    document.querySelectorAll('.pop-up__modal-container')
      .forEach(e => e.remove());

    document.querySelectorAll('.pop-up__button')
      // eslint-disable-next-line no-return-assign
      .forEach(btn => btn.textContent = '+');

    document.querySelectorAll('.pop-up__block')
      .forEach(blk => blk.classList.remove('active-modal'));
  };

  const createModal = (button, block) => {
    const modalContainer = document.createElement('div');
    const modal = document.createElement('div');
    const modalContent = document.createElement('div');

    modalContainer.classList.add('pop-up__modal-container');
    modal.classList.add('pop-up__modal');
    modalContent.classList.add('pop-up__modal-content');
    block.classList.add('active-modal');
    modalContent.textContent = button.getAttribute('data-text');

    modal.appendChild(modalContent);
    modalContainer.appendChild(modal);
    block.appendChild(modalContainer);

    modalContainer.style.top
     = button.getAttribute('data-position-top') + 'px';

    modalContainer.style.left
      = button.getAttribute('data-position-left') + 'px';

    button.textContent = '-';
  };

  popUpBlocks.forEach(function(block) {
    block.addEventListener('click', function() {
      const button = block.querySelector('.pop-up__button');
      const existingModalContainer
       = block.querySelector('.pop-up__modal-container');

      if (existingModalContainer) {
        existingModalContainer.remove();
        button.textContent = '+';
        block.classList.remove('active-modal');

        return;
      }

      resetPopUpElements();
      createModal(button, block);
    });
  });
})();

(function formModule() {
  const form = document.querySelector('.form');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  const removeClasses = (input, ...classes) => {
    classes.forEach((className) => input.classList.remove(className));
  };

  const addClass = (input, className) => {
    input.classList.add(className);
  };

  const validateInput = (input, regex) => {
    if (regex.test(input.value)) {
      removeClasses(input, 'invalid');
      addClass(input, 'valid');

      return true;
    } else {
      removeClasses(input, 'valid');
      addClass(input, 'invalid');

      return false;
    }
  };

  [nameInput, emailInput, messageInput].forEach(input => {
    input.addEventListener('focus',
      () => removeClasses(input, 'valid', 'invalid'));
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Regular expressions for input fields
    // _NAME At least 2 symbols
    // _EMAIL generally accepted email form
    const regex = /.{2,}/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    let isFormValid = validateInput(nameInput, regex);

    isFormValid
      = validateInput(emailInput, emailRegex) && isFormValid;
    addClass(messageInput, 'valid');

    if (isFormValid) {
      form.reset();

      [nameInput, emailInput, messageInput].forEach(
        input => removeClasses(input, 'valid', 'invalid')
      );
    }
  });
})();

(function IntersectionObserverModule() {
  // eslint-disable-next-line no-undef
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // Если элемент в поле зрения и еще не был анимирован
      if (entry.isIntersecting && !entry.target.dataset.animated) {
        // Добавьте класс для анимации
        entry.target.classList.add('animate');
        entry.target.classList.remove('hide');
        // Отметьте элемент как анимированный
        entry.target.dataset.animated = true;
      }
    });
  }, {
    rootMargin: '-10% 0px',
  });

  const elements = document.querySelectorAll('.animate-on-scroll');

  elements.forEach((element) => {
    element.classList.add('hide');
    observer.observe(element);
  });
})();
