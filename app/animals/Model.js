export class Model {
  constructor() {
    this.link = '/SSA-Demo-OnlineStore/data/animals-en-general.json';
  }

  getAnimals() {
    return fetch(this.link)
      .then(resp => resp.json());
  }
}