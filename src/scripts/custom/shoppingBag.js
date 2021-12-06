import { shoppingBagModal, overlay } from './consts';

export function shoppingBagShow() {
  shoppingBagModal.classList.add('shoppingBagModal_active');
  overlay.classList.add('overlay_active');
}

export function shoppingBagHide() {
  shoppingBagModal.classList.remove('shoppingBagModal_active');
  overlay.classList.remove('overlay_active');
}
