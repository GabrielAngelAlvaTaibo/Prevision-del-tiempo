let nombreUsuario = prompt("Ingrese su nombre");

while ((nombreUsuario == "") || (nombreUsuario == " ")){
    alert("Por favor, ingrese su nombre")
    nombreUsuario = prompt("Ingrese su nombre");
}

alert("¡Bienvenido "+nombreUsuario+"!");

let mensajeUbicacion = prompt("¿Desea predefinir una zona en específico? \n(-si- para continuar) \n(-s- para salir)");

// Ciclo de filtrado de ubicacion

while(mensajeUbicacion !== "s"){
    let ubicacion = prompt("Por favor, ingrese el lugar de donde quiere información: \nBuenos Aires \n(-s- para salir)");
    if((ubicacion == "") || (ubicacion == " ")){
        alert("Ubicación no encontrada");
        }else{
            alert("En consola encontrará toda la información");
            const ubicacionesFiltradas = filtrarPorCiudad(ubicacion);
            console.table(ubicacionesFiltradas);
        }
    mensajeUbicacion = prompt("¿Desea predefinir otra zona en específico? \n(-si- para continuar) \n(-s- para salir)");
}

// Uso de una función para calcular la cantidad de alertas guardadas
function incrementarNotificaciones(cantidad){
    notificaciones = notificaciones + cantidad;
    alert ("Tiene un total de "+notificaciones+" "+"alertas agregadas.")
}
// Funcion para filtrar por ciudad
function filtrarPorCiudad(_localizaciones){
    const filtro = arrayDias.filter((lugares) => lugares.localizacion);
    return filtro;
}

alert("Gracias por elegirnos")