
document.addEventListener("DOMContentLoaded", function () {

document.getElementById('formulario').addEventListener('submit', function (event) {
    event.preventDefault();

    const num = parseInt(document.getElementById("num").value);

    const resultado = document.getElementById("resultado");

    if (num === 0) {

        resultado.innerHTML = "el número no es par ni impar";

    } else if (num%2 === 0){

        resultado.innerHTML = "el número es par";

    }else {

        resultado.innerHTML = "el número es impar";

    }

});

});