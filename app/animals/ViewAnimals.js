import { TemplateAnimals } from './TemplateAnimals.js';

export class ViewAnimals {
  constructor() {
    this.domAnimals = document.querySelector('.animals');
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
    let newsStr = animals
      .map((animal, index) => {
        if (index >= offset && index < offset + amount) {
          return this.prepareAnimalCard(animal);
        }
        return '';
      })
      .join('');

    this.domAnimals.innerHTML = newsStr;
  }

  prepareAnimalCard(animal) {
    return TemplateAnimals.getAnimalsTemplate(animal);
  }
}