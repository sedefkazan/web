function UI() {}

function isValidUrl(url) {
    try {
        new URL(url);
        return true;
    } catch (e) {
        return false;
    }
}

UI.prototype.addCarToUI = function (newCar) {
    const carList = document.getElementById("cars");

    const row = document.createElement("tr");

    let imageUrl = isValidUrl(newCar.url) ? newCar.url : 'images/placeholder.jpg';

    row.innerHTML = `
        <td><img src="${imageUrl}" class="img-fluid img-thumbnail" style="width:100px; height:auto;" onerror="this.onerror=null;this.src='https://via.placeholder.com/100';"></td>
        <td>${newCar.title}</td>
        <td>${newCar.price}</td>
        <td><a href="#" class="btn btn-danger delete-car">Aracı Sil</a></td>
    `;

    carList.appendChild(row);
};

UI.prototype.deleteCarFromUI = function (element) {
    element.parentElement.parentElement.remove();
};

UI.prototype.clearAllCarsFromUI = function () {
    document.getElementById("cars").innerHTML = "";
};
