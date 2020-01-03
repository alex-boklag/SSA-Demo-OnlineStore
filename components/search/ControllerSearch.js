import { ModelSearch } from './ModelSearch.js';
import { ViewSearch } from './ViewSearch.js';

export class ControllerSearch {
  constructor({ subscribe, publish }) {
    this.publish = publish;
    this.model = new ModelSearch();
    this.view = new ViewSearch(subscribe);
    this.view.renderSearchFiltersSort();
    this.listeners = {
      handleChangeSearch: this.handleChangeSearch.bind(this),
      handleChangeFilter: this.handleChangeFilter.bind(this),
      handleChangeSort: this.handleChangeSort.bind(this)
    }
    this.view.addListeners(this.listeners);
  }

  handleChangeSearch(ev) {
    const search = ev.target.value.toLowerCase().trim();
    this.model.applySearch(search);

    this.publish('search-changed', this.model.getActualAnimals());
  }

  handleChangeFilter(ev) {
    const filter = ev.target.dataset.value.toLowerCase();
    this.model.applyFilter(filter);

    this.publish('filter-changed', this.model.getActualAnimals());
  }

  handleChangeSort(ev) {
    const sortBy = ev.target.className.split(' ')[1];
    this.model.apllySort(sortBy); 

    this.publish('sort-changed', this.model.getActualAnimals());
  }
}