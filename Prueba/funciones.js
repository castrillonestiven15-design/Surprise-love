// funcion que calcula

function calcularPrecio (precioUnitario, cantidad) {
    const total = precioUnitario * cantidad;
    return total;
}
console.log(calcularPrecio(5, 2));
console.log(calcularPrecio(3, 4));
console.log(calcularPrecio(7, 1));

// funcion que decide

function puedeReservar(cantidad) {
   if (cantidad <= 2) {
   return true;
   } else {
    return false;
   }
}
if (puedeReservar(2)) {
    console.log("Reserva Confirmada");
} else {
    console.log("Lo siento, maximo 2 tazas por persona");
}
