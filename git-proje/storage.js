function Storage() {}

Storage.prototype.addCarToStorage = function (newCar) {
    let cars = this.getCarsFromStorage();
    cars.push(newCar);
    localStorage.setItem("cars", JSON.stringify(cars));
};

Storage.prototype.getCarsFromStorage = function () {
    let cars = localStorage.getItem("cars");
    return cars ? JSON.parse(cars) : [];
};

Storage.prototype.deleteCarFromStorage = function (carTitle) {
    let cars = this.getCarsFromStorage();
    cars = cars.filter(car => car.title !== carTitle);
    localStorage.setItem("cars", JSON.stringify(cars));
};

Storage.prototype.clearAllCarsFromStorage = function () {
    localStorage.removeItem("cars");
};
