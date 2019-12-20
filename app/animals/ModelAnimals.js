export class ModelAnimals {
  constructor() {
    this.link = 'https://maksv21.github.io/softserve/demo2/database/animals_en.json';
  }

  getAnimals() {
    return fetch(this.link)
      .then(resp => resp.json());
  }
}