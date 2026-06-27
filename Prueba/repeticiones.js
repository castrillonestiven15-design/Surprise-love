console.log("AnchetaPadre");
console.log("AnchetaMadre");
console.log("RosasEternasG");

// lista de metodos, se llaman arrays
const metodos = ["AnchetaPadre", "AnchetaMadre", "RosasEternasG"];

// instruccion que recorre la lista y que hace algo en cada elemento

for (const metodo of metodos) {
    console.log(metodo);
}

console.log("Fin del programa")

// ejemplo de bucle de reservas e un dia

const reservasDelDia = [2, 1, 2, 1, 2];
let totalAnchetas = 0;

// for (const cantidad of reservasDelDia) {
// totalAnchetas = totalAnchetas + cantidad;
// }
// ejemplo de un for que corre pero no hace lo que queremos

for (const cantidad of reservasDelDia) {
    totalAnchetas = totalAnchetas + cantidad;
}

console.log(totalAnchetas)

