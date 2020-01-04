export class ModelSearch {
  constructor() { }

  applySearch(search) {
    const animalsList = JSON.parse(localStorage.animalsList);
    const filteredAnimalsList = JSON.parse(localStorage.filteredAnimalsList);
    const searchedAnimalsList = animalsList.filter(animal => animal.breed.toLowerCase().includes(search));

    localStorage.searchedAnimalsList = JSON.stringify(searchedAnimalsList);
    localStorage.currentAnimalsList = JSON.stringify(searchedAnimalsList
      .filter(animal => {
        for (let i = 0; i < filteredAnimalsList.length; i++) {
          if (animal.id === filteredAnimalsList[i].id) {
            return true;
          }
        }
        return false;
      }));

    localStorage.totalPages = Math.ceil(JSON.parse(localStorage.currentAnimalsList).length / localStorage.pageSize);
    localStorage.offset = 0;
  }

  applyFilter(filter) {
    const animalsList = JSON.parse(localStorage.animalsList);
    const searchedAnimalsList = JSON.parse(localStorage.searchedAnimalsList);
    let filteredAnimalsList = [];

    if (filter !== 'all') {
      filteredAnimalsList = animalsList.filter(animal => filter === animal.species.toLowerCase());
    }
    else {
      filteredAnimalsList = animalsList;
    }

    localStorage.filteredAnimalsList = JSON.stringify(filteredAnimalsList);
    localStorage.currentAnimalsList = JSON.stringify(filteredAnimalsList
      .filter(animal => {
        for (let i = 0; i < searchedAnimalsList.length; i++) {
          if (animal.id === searchedAnimalsList[i].id) {
            return true;
          }
        }
        return false;
      }));

    localStorage.totalPages = Math.ceil(JSON.parse(localStorage.currentAnimalsList).length / localStorage.pageSize);
    localStorage.offset = 0;
  }

  apllySort(sortBy) {
    let currentAnimalsList = JSON.parse(localStorage.currentAnimalsList);

    switch (sortBy) {
      case "priceDesc":
        localStorage.currentAnimalsList = JSON.stringify(currentAnimalsList.sort((a1, a2) => a2.price - a1.price));
        break;
      case "priceAsc":
        localStorage.currentAnimalsList = JSON.stringify(currentAnimalsList.sort((a1, a2) => a1.price - a2.price));
        break;
      case "ageDesc":
        localStorage.currentAnimalsList = JSON.stringify(currentAnimalsList.sort((a1, a2) => a1.birth_date - a2.birth_date));
        break;
      case "ageAsc":
        localStorage.currentAnimalsList = JSON.stringify(currentAnimalsList.sort((a1, a2) => a2.birth_date - a1.birth_date));
        break;
      default:
        break;
    }
  }

  getActualAnimals() {
    return JSON.parse(localStorage.currentAnimalsList)
      .slice(localStorage.offset, Number(localStorage.offset) + Number(localStorage.pageSize));
  };
}