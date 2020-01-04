import { ModelCart } from './ModelCart.js';
import { ViewCart } from './ViewCart.js';
import { TemplateCart } from './TemplateCart.js';

export class ControllerCart {
  constructor({ publish }) {
    this.publish = publish;
    this.model = new ModelCart();
    this.view = new ViewCart();
    this.view.renderCartIcon();
    this.listeners = {
      handleCartIconClick: this.handleCartIconClick.bind(this),
      handleRemoveClick: this.handleRemoveClick.bind(this),
      handleConfirmClick: this.handleConfirmClick.bind(this),
      handleClearClick: this.handleClearClick.bind(this),
      handleSendClick: this.handleSendClick.bind(this),
    };
    this.view.addListeners(this.listeners);
  }

  handleCartIconClick(ev) {
    if (ev.target.parentNode.className && ev.target.parentNode.className.includes('cart-icon')) {
      this.view.renderCart(this.model.getAnimalsToBuy());
    }
  }

  handleRemoveClick(ev) {

    const animalId = Number(ev.target.parentNode.parentNode.dataset.id);
    this.model.removeAnimalFromCart(animalId);

    this.view.renderCart(this.model.getAnimalsToBuy());
    this.publish('data-changed', this.model.getActualAnimals());
  }

  handleConfirmClick() {
    if (this.model.getAnimalsToBuy().length > 0) {
      this.view.renderCartUserInfo();
    }
  }

  handleClearClick() {
    this.model.removeAllAnimalsFromCart();

    this.view.renderCart(this.model.getAnimalsToBuy());
    this.publish('data-changed', this.model.getActualAnimals());

    this.view.closeCart();
  }

  handleSendClick(ev) {
    if (ev.target.className.includes('user-info-form')) {
      const myChatId = 258111327, groupChatId = -377489566, parse_mode = 'MarkDown';
      const text = TemplateCart.getTemplateOrder(ev.target.elements, this.model.getAnimalsToBuy());

      fetch(`https://api.telegram.org/bot1038146133:AAGVbTT2H_gG7nTGo2z8sJiFAKXItf_DZXM/sendMessage?chat_id=${myChatId}&text=${encodeURIComponent(text)}&parse_mode=${parse_mode}`)
        .then(d => d.json())
        .then(data => console.log(data));

      this.view.closeCart();
      this.view.showSuccessMessage();
    }
  }
}