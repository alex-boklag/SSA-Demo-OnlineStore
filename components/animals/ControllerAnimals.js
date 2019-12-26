import { ModelAnimals } from './ModelAnimals.js';
import { ViewAnimals } from './ViewAnimals.js';

export class ControllerAnimals {
  constructor({ subscribe, unsubscribe, publish }) {
    this.publish = publish;
    this.model = new ModelAnimals(publish);
    this.view = new ViewAnimals(subscribe);
    this.listeners = {
      handleClickPrevPage: this.handleClickPrevPage.bind(this),
      handleClickNextPage: this.handleClickNextPage.bind(this),
      handleClickPageNumber: this.handleClickPageNumber.bind(this)
    }
    this.view.addListeners(this.listeners);
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
    if (Number(localStorage.offset) + Number(localStorage.pageSize) < localStorage.animalsList.length) {
      localStorage.offset = Number(localStorage.offset) + Number(localStorage.pageSize);

      const data = JSON.parse(localStorage.filteredAnimalsList);
      const curPageData = data.slice(localStorage.offset, Number(localStorage.offset) + Number(localStorage.pageSize));

      this.publish('animals-data-updated', curPageData);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  handleClickPageNumber(ev) {
    const pageNumber = Number(ev.target.innerText);

    if (!isNaN(pageNumber)) {
      localStorage.offset = pageNumber * localStorage.pageSize - localStorage.pageSize;
      
      const data = JSON.parse(localStorage.filteredAnimalsList);
      const curPageData = data.slice(localStorage.offset, Number(localStorage.offset) + Number(localStorage.pageSize));

      this.publish('animals-data-updated', curPageData);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }
}