function verificarReservaRosas(cantidad) {
    // Definimos el límite máximo permitido
    const MAX_ROSAS = 2;

    // Validamos si la cantidad es mayor a 0 y no supera el máximo
    if (cantidad > 0 && cantidad <= MAX_ROSAS) {
        return {
            puedeReservar: true,
            mensaje: `¡Perfecto! Tu reserva de ${cantidad} ${cantidad === 1 ? 'rosa' : 'rosas'} ha sido aprobada.`
        };
    } else if (cantidad > MAX_ROSAS) {
        return {
            puedeReservar: false,
            mensaje: `Lo sentimos, en Surprise Love solo puedes reservar un máximo de ${MAX_ROSAS} rosas.`
        };
    } else {
        return {
            puedeReservar: false,
            mensaje: "Por favor, ingresa una cantidad válida de rosas."
        };
    }
}