export class TemplateSearch {
  static getSearchTemplate() {
    return `<div class="search__wrapper uk-width-1-2 uk-margin-small">
        <form class="uk-search uk-search-default uk-margin-top uk-width-1-1">
          <span uk-search-icon></span>
          <input class="uk-search-input" type="search" placeholder="Search...">
        </form>
      </div>`;
  }
}