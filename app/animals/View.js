import { TemplateAnimals } from '../share/TemplateAnimals.js';

export class View {
  constructor() {
    this.domAnimals = document.querySelector('.animals');
    this.templater = new TemplateAnimals();
  }

  renderAnimals(animals) {
    let newsStr = '';

    animals.forEach(animal => {
      newsStr += this.prepareAnimalCard(animal);
    });

    this.domAnimals.innerHTML = newsStr;
  }

  prepareAnimalCard(animal) {
    return this.templater.getAnimalsTemplate(animal);
  }
}