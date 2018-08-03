window.onload = calculateNoOfPizzas();

// 7. Area of a Rectangular Room
function calculateArea() {
    let length = document.getElementById("length_input").value;
    let width = document.getElementById("width_input").value;
    if (!length || !width) {
        setAreaLbl('');
        return;
    }

    const conversionFactor = 0.09290304;
    let area = conversionFactor * (length * width);
    setAreaLbl(area);
}

function setAreaLbl(area) {
    let areaLbl = document.getElementById("area_lbl");
    if (!area) {
        areaLbl.innerHTML = '';
        return;
    }

    let selectedUnit = getSelectedOption("unit_select");
    let resultMessage = `The area is ${area} square`;

    switch (selectedUnit.value) {
        case "meter":
            resultMessage += " meters";
            break;
        case "feet":
            resultMessage += " feet";
            break;
    }
    areaLbl.innerHTML = resultMessage;
}

// 8. Pizza Party
function calculateNoOfPizzas() {
    let noOfPeople = document.getElementById("noOfPeople_input").value;
    let noOfPizzas = document.getElementById("noOfPizzas_input").value;
    if (!noOfPeople || !noOfPizzas) {
        document.getElementById("pizzaParty_lbl").innerHTML = '';
        return;
    }
}