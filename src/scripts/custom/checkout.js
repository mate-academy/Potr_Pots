import { checkoutModal, shoppingBagModal, overlay } from './consts';

export function checkoutModalShow() {
  checkoutModal.classList.add('checkoutModal_active');
  shoppingBagModal.classList.remove('shoppingBagModal_active');
}

export function checkoutModalHide() {
  checkoutModal.classList.remove('checkoutModal_active');
  overlay.classList.remove('overlay_active');
}
