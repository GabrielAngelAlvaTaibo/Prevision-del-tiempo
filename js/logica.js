let nombreUsuario = prompt("Ingrese su nombre");

while ((nombreUsuario == "") || (nombreUsuario == " ")){
    alert("Por favor, ingrese su nombre")
    nombreUsuario = prompt("Ingrese su nombre");
}

alert("¡Bienvenido "+nombreUsuario+"!");

let mensajeUbicacion = prompt("¿Desea predefinir una zona en específico? \n(-si- para continuar) \n(-s- para salir)");
let ubicacion;
// Ciclo de filtrado de ubicacion

while(mensajeUbicacion !== "s"){
    let propuesta
    ubicacion = prompt("Por favor, ingrese el lugar de donde quiere información: \nBuenos Aires \nCórdoba \nSanta Fe \nMendoza \n(-s- para salir)");
    if((ubicacion == "") || (ubicacion == " ")){
        alert("Ubicación no encontrada");
        }else{
            alert("En consola encontrará toda la información");
            const ubicacionesFiltradas = filtrarPorCiudad(ubicacion);
            console.table(ubicacionesFiltradas);
            propuesta = prompt ("¿Quiere una notificación de ahora en adelante para "+ubicacion+"? (-si- para añadir a notificaciones / -no- para omitir)");
                if (propuesta.toLowerCase() == "si"){
                    alert("Agregaste"+ubicacion+" en tus alertas");
                    incrementarNotificaciones(1);
                    }else{
                        alert("De acuerdo");
                    }
        }
    mensajeUbicacion = prompt("¿Desea predefinir otra zona en específico? \n(-si- para continuar) \n(-s- para salir)");
}

// Uso de una función para calcular la cantidad de alertas guardadas
function incrementarNotificaciones(cantidad){
    notificaciones = notificaciones + cantidad;
    alert ("Tiene un total de "+notificaciones+" "+"alertas agregadas.")
}
// Función para filtrar por ciudad
function filtrarPorCiudad(_localizaciones){
    const filtro = arrayDias.filter((lugares) => lugares.localizacion == ubicacion);
    return filtro;
}

alert("Gracias por elegirnos");