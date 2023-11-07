function checkNumber() {
    var number = document.getElementById("numberInput").value;
    var result = document.getElementById("result");
    
    if (number == 65) {
        result.textContent = "Has acertado, enhorabuena!!";
        result.style.color = "green";
    } else {
        result.textContent = "Has fallado, intentalo de nuevo.";
        result.style.color = "red";
    }
}