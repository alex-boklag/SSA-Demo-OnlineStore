import { ModelAnimals } from './ModelAnimals.js';
import { ViewAnimals } from './ViewAnimals.js';

export class ControllerAnimals {
  constructor({ subscribe, publish }) {
    this.publish = publish;
    this.model = new ModelAnimals(publish);
    this.view = new ViewAnimals();
    this.listeners = {
      handleClickPrevPage: this.handleClickPrevPage.bind(this),
      handleClickNextPage: this.handleClickNextPage.bind(this),
      handleClickPageNumber: this.handleClickPageNumber.bind(this),
      handleClickBuy: this.handleClickBuy.bind(this),
      handleClickDetails: this.handleClickDetails.bind(this), 
    }
    this.view.addListeners(this.listeners);

    subscribe('animals-data-updated', this.view.renderAnimalCards.bind(this.view));
    subscribe('search-changed', this.view.renderAnimalCards.bind(this.view));
    subscribe('filter-changed', this.view.renderAnimalCards.bind(this.view));
  }

  handleClickPrevPage() {
    if (localStorage.offset - localStorage.pageSize >= 0) {
      localStorage.offset = localStorage.offset - localStorage.pageSize;

      const data = JSON.parse(localStorage.filteredAnimalsList);
      const curPageData = data.slice(localStorage.offset, Number(localStorage.offset) + Number(localStorage.pageSize));

      this.publish('animals-data-updated', curPageData);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  handleClickNextPage() {
    if (Number(localStorage.offset) + Number(localStorage.pageSize) < JSON.parse(localStorage.filteredAnimalsList).length) {
      localStorage.offset = Number(localStorage.offset) + Number(localStorage.pageSize);

      const data = JSON.parse(localStorage.filteredAnimalsList);
      const curPageData = data.slice(localStorage.offset, Number(localStorage.offset) + Number(localStorage.pageSize));

      this.publish('animals-data-updated', curPageData);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  handleClickPageNumber(pageNumber) {
    if (!isNaN(pageNumber)) {
      localStorage.offset = pageNumber * localStorage.pageSize - localStorage.pageSize;

      const data = JSON.parse(localStorage.filteredAnimalsList);
      const curPageData = data.slice(localStorage.offset, Number(localStorage.offset) + Number(localStorage.pageSize));

      this.publish('animals-data-updated', curPageData);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  handleClickBuy(animalId) {
    console.log(`buy ${animalId}`);
    this.publish('buy-click', animalId);
  }

  handleClickDetails(animalId) {
    console.log(`details ${animalId}`);
    this.publish('details-click', animalId);
  }
}