import { TemplateSearch } from './TemplateSearch.js';

export class ViewSearch {
  constructor() {
    this.searchWrapper = document.querySelector('.search__wrapper');
    this.filtersWrapper = document.querySelector('.filters__wrapper');
  }

  addListeners(handlers) {
    document.querySelector('.search').addEventListener('keyup', handlers.handleChangeSearch);
    document.querySelector('.filters__wrapper').addEventListener('click', ev => {
      if (ev.target.dataset.value) {
        handlers.handleChangeFilter(ev);
      }
      else if (ev.target.classList.contains('sortBy')) {
        handlers.handleChangeSort(ev);
      }
    });
  }

  renderSearchFiltersSort() {
    this.searchWrapper.insertAdjacentHTML('afterbegin', TemplateSearch.getSearchTemplate());
    this.filtersWrapper.insertAdjacentHTML('afterbegin', TemplateSearch.getFiltersAndSortTemplate());
  }

  highlightCurrentFilter(curFilter) {
    const allFilters = [...document.querySelectorAll('.filter')];

    allFilters.forEach(filter => {
      (filter.dataset.value === curFilter)
        ? filter.classList.add('filter-highlight')
        : filter.classList.remove('filter-highlight')
    });
  }
}