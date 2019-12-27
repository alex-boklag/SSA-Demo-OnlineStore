export class ModelAnimals {
  constructor(publish) {
    this.links = {
      en: 'https://alex-boklag.github.io/SSA-Demo-OnlineStore/database/animals_en.json',
      ru: 'https://alex-boklag.github.io/SSA-Demo-OnlineStore/database/animals_ru.json'
    };
    this.publish = publish;
    this.animalsList;
    this.getAnimalsList(this.links.en);
  }

  getAnimalsList(link) {
    fetch(link)
      .then(response => response.json())
      .then(animalsList => {
        this.animalsList = animalsList.map(animal => {
          animal.buy = false;
          return animal;
        })

        localStorage.setItem('animalsList', JSON.stringify(this.animalsList));
        localStorage.setItem('filteredAnimalsList', JSON.stringify(this.animalsList));
        localStorage.setItem('offset', 0);
        localStorage.setItem('pageSize', 20);
        localStorage.setItem('totalPages', Math.ceil(this.animalsList.length / localStorage.pageSize));
        
        this.publish('animals-data-updated', this.animalsList.slice(localStorage.offset, Number(localStorage.offset) + Number(localStorage.pageSize)));
      });
  }
}