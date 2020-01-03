import { TemplateCart } from './TemplateCart.js';

export class ViewCart {
  constructor() {
    this.root = document.querySelector('.root');
    this.cartWrapper = document.querySelector('.cart__wrapper');
    this.cartWrapper.innerHTML = TemplateCart.getCartTemplate();
  }

  addListeners(handlers) {
    this.root.addEventListener('click', ev => handlers.handleCartIconClick(ev));

    this.cartWrapper.addEventListener('click', ev => {
      if (ev.target.className.includes('button__remove')) {
        handlers.handleRemoveClick(ev);
      }
      else if (ev.target.className.includes('button__confirm')) {
        handlers.handleConfirmClick();
      }
      else if (ev.target.className.includes('button__clear')) {
        handlers.handleClearClick();
      }
    });

    this.cartWrapper.addEventListener('submit', ev => {
      ev.preventDefault();
      handlers.handleSendClick(ev);
    });
  }

  renderCartIcon() {
    this.root.insertAdjacentHTML('beforeend', TemplateCart.getCartButtonTemplate());
  }

  renderCart(animalsToBuy) {
    this.cartWrapper.innerHTML = TemplateCart.getCartTemplate();
    this.cartBody = document.querySelector('.cart-body');

    let cartBody = '';

    if (animalsToBuy.length) {
      cartBody = animalsToBuy.map(animal => {
        return this.prepareCartItem(animal);
      }).join('')
    }
    else {
      cartBody = '<p>The cart is empty :( </p>';
    }

    this.cartBody.innerHTML = cartBody;
  }

  prepareCartItem(animal) {
    return TemplateCart.getCartItemTemplate(animal);
  }

  renderCartUserInfo() {
    this.cartWrapper.innerHTML = TemplateCart.getUserInfoTemlate();
  }
}