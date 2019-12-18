import { Model } from './Model.js';
import { View } from './View.js';

export class Controller {
  constructor() {
    this.model = new Model();
    this.view = new View();
    this.showAnimals();
  }

  showAnimals() {
    this.model.getAnimals()
      .then(obj => this.view.renderAnimals(obj.animals));
  }
}