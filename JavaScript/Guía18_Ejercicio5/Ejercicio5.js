
document.addEventListener("DOMContentLoaded", function () {

document.getElementById('formulario').addEventListener('submit', function (event) {
    event.preventDefault();

const num1 = parseInt(document.getElementById("num1").value);
const num2 = parseInt(document.getElementById("num2").value);

const operacion = document.getElementById("operacion").value;
const resultado = document.getElementById("resultado");

switch (operacion) {
    case "suma":

        resultado.innerHTML = num1 + num2;
        
        break;

    case "resta":

        resultado.innerHTML = num1 - num2;

        break;

    case "multiplicacion":

        resultado.innerHTML = num1 * num2;

        break;

    case "division":

        resultado.innerHTML = num1 / num2;

        break;

    default:

        console.log("Algo salió mal")

        break;
};

})
});