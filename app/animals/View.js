import { TemplateAnimals } from '../share/TemplateAnimals.js';

export class View {
  constructor() {
    this.domAnimals = document.querySelector('.animals');
    this.templater = new TemplateAnimals();
  }

  addListeners(handleClickPrevPage, handleClickNextPage, handleClickPageNumber) {
    const btnPrevPage = document.querySelector('.prev-page');
    const btnNextPage = document.querySelector('.next-page');
    const btnPageNumbers = [...document.querySelectorAll('[class*="page-"]')];

    btnPrevPage.addEventListener('click', handleClickPrevPage);
    btnNextPage.addEventListener('click', handleClickNextPage);
    btnPageNumbers.forEach(item => item.addEventListener('click', handleClickPageNumber));

    document.addEventListener('keypress', event => (event.key === 'a') ? handleClickPrevPage() : null);
    document.addEventListener('keypress', event => (event.key === 'd') ? handleClickNextPage() : null);
  }

  renderAnimals(animals, offset, amount) {
    let newsStr = '';

    animals.forEach((animal, index) => {
      if (index >= offset && index < offset + amount) {
        newsStr += this.prepareAnimalCard(animal);
      }
    });

    this.domAnimals.innerHTML = newsStr;
  }

  prepareAnimalCard(animal) {
    return this.templater.getAnimalsTemplate(animal);
  }
}