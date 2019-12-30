import { TemplateCart } from './TemplateCart.js';

export class ViewCart {
  constructor() {
    this.root = document.querySelector('.root');
    this.cartWrapper = document.querySelector('.cart__wrapper');
    this.cartWrapper.insertAdjacentHTML('afterbegin', TemplateCart.getCartTemplate());
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
        handlers.handleClearClick(ev);
      }
    });
  }

  renderCartIcon() {
    this.root.insertAdjacentHTML('beforeend', TemplateCart.getCartButtonTemplate());
  }

  renderCart() {
    this.cartBody = document.querySelector('.cart-body');

    let cartBody = '';
    const animalsToBuy = JSON.parse(localStorage.animalsList).filter(animal => animal.buy === true);

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
}