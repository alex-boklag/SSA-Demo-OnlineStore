export class ModelSearch {
  constructor() {
    this.searchCurrent = '';
    this.serachHistory = [];
  }

  saveSearch(value) {
    this.searchCurrent = value;
    this.serachHistory.push(value);
  }
}