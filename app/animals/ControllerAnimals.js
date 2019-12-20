import { ModelAnimals } from './ModelAnimals.js';
import { ViewAnimals } from './ViewAnimals.js';

export class ControllerAnimals {
  constructor() {
    this.model = new ModelAnimals();
    this.view = new ViewAnimals();
    this.view.addListeners(this.handleClickPrevPage.bind(this), this.handleClickNextPage.bind(this), this.handleClickPageNumber.bind(this), );
    this.offset = 0;
    this.amount = 20;
    this.showAnimals(this.offset, this.amount);
  }

  handleClickPrevPage() {
    if (this.offset - this.amount >= 0) {
      this.offset -= this.amount;
      this.showAnimals(this.offset, this.amount);
    }
  }

  handleClickNextPage() {
    if (this.offset + this.amount < 320) {
      this.offset += this.amount;
      this.showAnimals(this.offset, this.amount);
    }
  }

  handleClickPageNumber(ev) {
    const pageNumber = Number(ev.target.innerText);
    this.offset = pageNumber * this.amount - this.amount;
    this.showAnimals(this.offset, this.amount);
  }

  showAnimals(offset, amount) {
    this.model.getAnimals()
      .then(obj => this.view.renderAnimals(obj, offset, amount));
  }
}