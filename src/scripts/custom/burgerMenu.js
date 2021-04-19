import { nav, overlay, page } from './consts';

export function showMenu() {
  nav.classList.add('nav_active');
  overlay.classList.add('overlay_active');
  page.classList.add('page_no-scroll');
}

export function hideMenu() {
  nav.classList.remove('nav_active');
  overlay.classList.remove('overlay_active');
  page.classList.remove('page_no-scroll');
}
