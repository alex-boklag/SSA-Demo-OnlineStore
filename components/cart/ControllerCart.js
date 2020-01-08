import { ModelCart } from './ModelCart.js';
import { ViewCart } from './ViewCart.js';
import { TemplateCart } from './TemplateCart.js';

export class ControllerCart {
  constructor({ publish, subscribe }) {
    this.publish = publish;
    this.model = new ModelCart();
    this.view = new ViewCart();
    this.view.renderCartIcon();
    this.view.changeCartCounter(this.model.getNumberAnimalsToBuy());
    this.listeners = {
      handleCartIconClick: this.handleCartIconClick.bind(this),
      handleRemoveClick: this.handleRemoveClick.bind(this),
      handleConfirmClick: this.handleConfirmClick.bind(this),
      handleClearClick: this.handleClearClick.bind(this),
      handleSendClick: this.handleSendClick.bind(this),
    };
    this.view.addListeners(this.listeners);
    subscribe('counter-changed', this.view.changeCartCounter);
  }

  handleCartIconClick(ev) {
    if (ev.target.parentNode.classList.contains('cart-icon')) {
      this.view.renderCart(this.model.getAnimalsToBuy(), this.model.getTotalPriceAnimalsToBuy());
    }
  }

  handleRemoveClick(ev) {
    const animalId = Number(ev.target.parentNode.parentNode.dataset.id);
    this.model.removeAnimalFromCart(animalId);

    this.publish('data-changed', this.model.getActualAnimals());
    this.view.renderCart(this.model.getAnimalsToBuy(), this.model.getTotalPriceAnimalsToBuy());
  
    this.view.changeCartCounter(this.model.getNumberAnimalsToBuy());
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

    this.view.changeCartCounter(this.model.getNumberAnimalsToBuy());

    this.view.closeCart();
  }

  handleSendClick(ev) {
    if (ev.target.classList.contains('user-info-form')) {
      const myChatId = 258111327, groupChatId = -377489566, parse_mode = 'MarkDown';
      const text = TemplateCart.getTemplateOrder(ev.target.elements, this.model.getAnimalsToBuy(), this.model.getTotalPriceAnimalsToBuy());

      fetch(`https://api.telegram.org/bot1038146133:AAGVbTT2H_gG7nTGo2z8sJiFAKXItf_DZXM/sendMessage?chat_id=${groupChatId}&text=${encodeURIComponent(text)}&parse_mode=${parse_mode}`)
        .then(d => d.json())
        .then(data => console.log(data));

      this.model.removeAllAnimalsFromCart();
      this.publish('data-changed', this.model.getActualAnimals());

      this.view.changeCartCounter(this.model.getNumberAnimalsToBuy());
      this.view.closeCart();
      this.view.showSuccessMessage();
    }
  }
}