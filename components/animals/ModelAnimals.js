export class ModelAnimals {
  constructor(publish) {
    this.links = {
      en: 'https://jsonstorage.net/api/items/d301cfd4-7636-4dab-a1ae-753fbca366b4',
      ru: 'https://maksv21.github.io/softserve/demo2/database/animals_ru.json'
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
        
        this.publish('total-pages-changed', Number(localStorage.totalPages));
        this.publish('animals-data-updated', this.animalsList.slice(localStorage.offset, Number(localStorage.offset) + Number(localStorage.pageSize)));
      });
  }
}