export class ModelSearch {
  constructor() { }

  applySearch(search) {
    let animalsList = JSON.parse(localStorage.animalsList);
    localStorage.filteredAnimalsList = JSON.stringify(animalsList
      .filter(animal => animal.breed.toLowerCase().includes(search)));

    localStorage.totalPages = Math.ceil(JSON.parse(localStorage.filteredAnimalsList).length / localStorage.pageSize);
    localStorage.offset = 0;
  }

  applyFilter(filter) {
    localStorage.filteredAnimalsList = localStorage.animalsList;

    if (filter !== 'all') {
      let animalsList = JSON.parse(localStorage.animalsList);
      localStorage.filteredAnimalsList = JSON.stringify(animalsList
        .filter(animal => {
          return filter === animal.species.toLowerCase();
        }));
    }

    localStorage.totalPages = Math.ceil(JSON.parse(localStorage.filteredAnimalsList).length / localStorage.pageSize);
    localStorage.offset = 0;
  }

  apllySort(sortBy) {
    let animalsList = JSON.parse(localStorage.filteredAnimalsList);

    switch (sortBy) {
      case "priceDesc":
        localStorage.filteredAnimalsList = JSON.stringify(animalsList.sort((a1, a2) => a2.price - a1.price));
        break;
      case "priceAsc":
        localStorage.filteredAnimalsList = JSON.stringify(animalsList.sort((a1, a2) => a1.price - a2.price));
        break;
      case "ageDesc":
        localStorage.filteredAnimalsList = JSON.stringify(animalsList.sort((a1, a2) => a1.birth_date - a2.birth_date));
        break;
      case "ageAsc":
        localStorage.filteredAnimalsList = JSON.stringify(animalsList.sort((a1, a2) => a2.birth_date - a1.birth_date));
        break;
      default:
        break;
    }
  }

  getActualAnimals() {
    return JSON.parse(localStorage.filteredAnimalsList)
      .slice(localStorage.offset, Number(localStorage.offset) + Number(localStorage.pageSize));
  };
}