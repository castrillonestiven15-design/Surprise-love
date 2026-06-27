// 1. Definición de la función de validación
function puedeReservar(rosasActuales) {
    return rosasActuales > 0;
}

// 2. Selección única de los elementos del HTML
const botonReservar = document.querySelector("#boton-reservar");
const contadorRosas = document.querySelector("#contador-rosas");

// 3. Un solo evento para manejar el clic del usuario
botonReservar.addEventListener("click", function() {
    console.log("El usuario hizo clic"); // Mantenemos su mensaje en consola

    const rosasActuales = Number(contadorRosas.textContent);

    if (puedeReservar(rosasActuales)){
        contadorRosas.textContent = rosasActuales - 1;
    } else {
        botonReservar.textContent = "sin cupos";
        botonReservar.disabled = true;
    }
});
