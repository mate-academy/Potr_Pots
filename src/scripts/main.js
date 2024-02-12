'use strict';
import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', function() {
  const menuButton = document.querySelector('.header__open-button');
  const closeButton = document.querySelector('.nav__close-button');
  const menu = document.querySelector('.nav');
  const materialsTab = document.querySelector('.materials__tab');

  menuButton.addEventListener('click', function() {
    menu.classList.add('is-open');
  });

  closeButton.addEventListener('click', function() {
    menu.classList.remove('is-open');
  });

  menu.addEventListener('click', function() {
    menu.classList.remove('is-open');
  });

  const closeOpenTab = (container) => {
    const currentOpen = container.querySelector('.is-open');

    if (currentOpen) {
      currentOpen.classList.remove('is-open');
    };
  };

  materialsTab.addEventListener('click', function(event) {
    const target = event.target;
    const parent = target.closest('.materials__tab-info');

    if (parent) {
      closeOpenTab(materialsTab);

      const textEl = parent.querySelector('.materials__tab-info-text');

      textEl.classList.add('is-open');
    } else {
      closeOpenTab(materialsTab);
    }
  });
});

const swiper = new Swiper('.materials__mob', {
  modules: [Pagination],
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },
});

swiper();
