const form = document.getElementById("car-form");
const titleElement = document.querySelector("#title");
const priceElement = document.querySelector("#price");
const urlElement = document.querySelector("#url");
const carList = document.getElementById("cars");
const clearCarsBtn = document.getElementById("clear-cars");

const ui = new UI();
const storage = new Storage();

eventListeners();

function eventListeners() {
    document.addEventListener("DOMContentLoaded", loadCars);
    form.addEventListener("submit", addCar);
    carList.addEventListener("click", deleteCar);
    clearCarsBtn.addEventListener("click", clearAllCars);

}

function addCar(e) {
    e.preventDefault(); 

    const title = titleElement.value.trim();
    const price = priceElement.value.trim();
    const url = urlElement.value.trim();

    if (title === "" || price === "" || url === "") {
        alert("Lütfen tüm alanları doldurun!");
        return;
    }

    const newCar = new Car(title, price, url);
    ui.addCarToUI(newCar);
    storage.addCarToStorage(newCar);
    form.reset();
}

function deleteCar(e) {
    if (e.target.classList.contains("delete-car")) {
        const carTitle = e.target.parentElement.previousElementSibling.previousElementSibling.textContent;
        ui.deleteCarFromUI(e.target);
        storage.deleteCarFromStorage(carTitle);
    }
}

function clearAllCars() {
    if (confirm("Tüm araçları silmek istediğinize emin misiniz?")) {
        ui.clearAllCarsFromUI();
        storage.clearAllCarsFromStorage();
    }
}

function loadCars() {
    let cars = storage.getCarsFromStorage();
    cars.forEach(car => ui.addCarToUI(car));
}
