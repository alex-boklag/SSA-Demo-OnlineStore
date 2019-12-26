import { TemplateSearch} from './TemplateSearch.js';

export class ViewSearch {
  constructor() {
    this.root = document.querySelector('.root');
  }

  addListeners(handleChangeSearch) {
    document.querySelector('.uk-search-input').addEventListener('keyup', handleChangeSearch);
  }

  renderSearch() {
    this.root.insertAdjacentHTML('afterbegin', TemplateSearch.getSearchTemplate());
  }
}