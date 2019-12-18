export class Model {
  constructor() {
    this.link = '../../data/animals-en-general.json';
  }

  getAnimals() {
    return fetch(this.link)
      .then(resp => resp.json());
  }
}