var addButton = document.getElementById("add");
var removeFirstButton = document.getElementById("remove-first");
var removeLastButton = document.getElementById("remove-last");
var vardasInput = document.getElementById("vardasInput");
var pavardeInput = document.getElementById("pavardeInput");
var amziusInput = document.getElementById("amziusInput");
var table = document.getElementById("table");

addButton.addEventListener("click", function() {
    var vardas = vardasInput.value;
    var pavardė = pavardeInput.value;
    var amžius = amziusInput.value;
    if (vardas && pavardė && amžius) {
        var row = table.insertRow(-1);
        var vardasCell = row.insertCell(0);
        var pavardėCell = row.insertCell(1);
        var amžiusCell = row.insertCell(2);
        vardasCell.textContent = vardas;
        pavardėCell.textContent = pavardė;
        amžiusCell.textContent = amžius;
        vardasInput.value = "";
        pavardeInput.value = "";
        amziusInput.value = "";
    } else {
        alert("Užpildykit visus laukelius :)");
    }
})
removeFirstButton.addEventListener("click", function() {
    if (table.rows.length > 1) {
        table.deleteRow(1);
    } else {
        alert("Nebėra ką trinti");
    }
})
removeLastButton.addEventListener("click", function() {
    if (table.rows.length > 1) {
        table.deleteRow(-1);
    } else {
        alert("Nebėra ką trinti");
    }
})
