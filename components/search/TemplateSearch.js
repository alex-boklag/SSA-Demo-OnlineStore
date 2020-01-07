export class TemplateSearch {
  static getSearchTemplate() {
    return `<form class="uk-search uk-search-default uk-margin-top uk-width-1-1">
          <span uk-search-icon></span>
          <input class="search uk-search-input uk-border-rounded" type="search" placeholder="Search...">
        </form>`;
  }

  static getFiltersAndSortTemplate() {
    return `<ul class="filters uk-nav uk-nav-default uk-flex uk-flex-center uk-text-bold">
        <li class="filter filter-highlight uk-button uk-button-default uk-margin-small-right uk-border-rounded" data-value="all">ALL</li>
        <li class="filter uk-button uk-button-default uk-margin-small-right uk-border-rounded" data-value="cat">CATS</li>
        <li class="filter uk-button uk-button-default uk-margin-small-right uk-border-rounded" data-value="dog">DOGS</li>
        <li class="filter uk-button uk-button-default uk-margin-small-right uk-border-rounded" data-value="fish">FISHES</li>
        <li class="filter uk-button uk-button-default uk-margin-small-right uk-border-rounded" data-value="bird">BIRDS</li>
        <li class="uk-button uk-button-default uk-border-rounded" type="button">Sort by</li>
          <div uk-dropdown>
              <ul class="uk-nav uk-dropdown-nav">
                <li class="sortBy priceAsc"><span uk-icon="icon: chevron-up"></span> Price</li>
                <li class="sortBy priceDesc"><span uk-icon="icon: chevron-down"></span> Price</li>
                <li class="sortBy ageAsc"><span uk-icon="icon: chevron-up"></span> Age</li> 
                <li class="sortBy ageDesc"><span uk-icon="icon: chevron-down"></span> Age</li>
              </ul>
          </div>
    </ul>`;
  }
}