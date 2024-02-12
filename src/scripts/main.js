'use strict';

import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', function() {
  const menuButton = document.querySelector('.header__open-button');
  const closeButton = document.querySelector('.nav__close-button');
  const menu = document.querySelector('.nav');
  const materialsTab = document.querySelector('.materials__tab');

  const openMenu = () => menu.classList.add('is-open');
  const closeMenu = () => menu.classList.remove('is-open');

  menuButton.addEventListener('click', openMenu);
  closeButton.addEventListener('click', closeMenu);
  menu.addEventListener('click', closeMenu);

  const closeOpenTab = (container) => {
    const currentOpen = container.querySelector('.is-open');

    if (currentOpen) {
      currentOpen.classList.remove('is-open');
    }
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

  const swiper = new Swiper('.materials__mob', {
    modules: [Pagination],
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
  });

  swiper.init();
});
