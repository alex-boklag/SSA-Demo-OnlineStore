import { ModelAnimals } from './ModelAnimals.js';
import { ViewAnimals } from './ViewAnimals.js';

export class ControllerAnimals {
  constructor({ subscribe, publish }) {
    this.publish = publish;
    this.model = new ModelAnimals(publish);
    this.view = new ViewAnimals();
    this.view.renderAnimalCards(JSON.parse(localStorage.animalsList)
      .slice(localStorage.offset, Number(localStorage.offset) + Number(localStorage.pageSize)));
    this.listeners = {
      handleClickPrevPage: this.handleClickPrevPage.bind(this),
      handleClickNextPage: this.handleClickNextPage.bind(this),
      handleClickPageNumber: this.handleClickPageNumber.bind(this),
      handleClickBuyRemove: this.handleClickBuyRemove.bind(this),
      handleClickDetails: this.handleClickDetails.bind(this),
    }
    this.view.addListeners(this.listeners);

    subscribe('data-changed', this.view.renderAnimalCards.bind(this.view));
    subscribe('search-changed', this.view.renderAnimalCards.bind(this.view));
    subscribe('filter-changed', this.view.renderAnimalCards.bind(this.view));
    subscribe('sort-changed', this.view.renderAnimalCards.bind(this.view));
  }


  handleClickPrevPage() {
    if (localStorage.offset - localStorage.pageSize >= 0) {
      localStorage.offset = localStorage.offset - localStorage.pageSize;

      const data = JSON.parse(localStorage.filteredAnimalsList);
      const curPageData = data.slice(localStorage.offset, Number(localStorage.offset) + Number(localStorage.pageSize));

      this.publish('data-changed', curPageData);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  handleClickNextPage() {
    if (Number(localStorage.offset) + Number(localStorage.pageSize) < JSON.parse(localStorage.filteredAnimalsList).length) {
      localStorage.offset = Number(localStorage.offset) + Number(localStorage.pageSize);

      const data = JSON.parse(localStorage.filteredAnimalsList);
      const curPageData = data.slice(localStorage.offset, Number(localStorage.offset) + Number(localStorage.pageSize));

      this.publish('data-changed', curPageData);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  handleClickPageNumber(ev) {
    const pageNumber = Number(ev.target.className.split('page-')[1]);

    if (!isNaN(pageNumber)) {
      localStorage.offset = pageNumber * localStorage.pageSize - localStorage.pageSize;

      const data = JSON.parse(localStorage.filteredAnimalsList);
      const curPageData = data.slice(localStorage.offset, Number(localStorage.offset) + Number(localStorage.pageSize));

      this.publish('data-changed', curPageData);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  handleClickBuyRemove(ev) {
    const animalId = Number(ev.target.parentNode.parentNode.dataset.id);

    if (ev.target.innerText === 'BUY') {
      ev.target.innerText = 'REMOVE';
      ev.target.classList.remove('button-success');
      ev.target.classList.add('button-danger');

      localStorage.animalsList = JSON.stringify(JSON.parse(localStorage.animalsList).map(animal => {
        if (animal.id === animalId) {
          animal.buy = true;
        }
        return animal;
      }));
    }
    else {
      ev.target.innerText = 'BUY';
      ev.target.classList.remove('button-danger');
      ev.target.classList.add('button-success');

      localStorage.animalsList = JSON.stringify(JSON.parse(localStorage.animalsList).map(animal => {
        if (animal.id === animalId) {
          animal.buy = false;
        }
        return animal;
      }));
    }
  }

  handleClickDetails(ev) {
    this.publish('details-click', ev.target.parentNode.parentNode.dataset);
  }
}