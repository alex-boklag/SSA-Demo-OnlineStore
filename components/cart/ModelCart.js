export class ModelCart {
  constructor() { }

  removeAnimalFromCart(id) {
    localStorage.animalsList = JSON.stringify(JSON.parse(localStorage.animalsList).map(animal => {
      if (animal.id === id) {
        animal.buy = false;
      }
      return animal;
    }));
  }

  removeAllAnimalsFromCart() {
    localStorage.animalsList = JSON.stringify(JSON.parse(localStorage.animalsList).map(animal => {
      animal.buy = false;
      return animal;
    }));
  }

  getAnimalsToBuy() {
    return JSON.parse(localStorage.animalsList).filter(animal => animal.buy === true);
  }

  getNumberAnimalsToBuy() {
    return JSON.parse(localStorage.animalsList).filter(animal => animal.buy === true).length;
  }

  getTotalPriceAnimalsToBuy() {
    return JSON.parse(localStorage.animalsList).reduce((total, animal) => {
      if (animal.buy === true) {
        return total + animal.price;
      }
      return total;
    }, 0);
  }

  getActualAnimals() {
    return JSON.parse(localStorage.currentAnimalsList)
      .slice(localStorage.offset, Number(localStorage.offset) + Number(localStorage.pageSize));
  }
}