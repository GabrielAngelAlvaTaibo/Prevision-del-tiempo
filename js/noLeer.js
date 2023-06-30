
// Zona de pruebas

// let mensaje = prompt("¿Desea saber el clima de esta semana? (-si- para continuar)");
// Variante global para contabilizar alertas
// let notificaciones = 0;

//Ciclo para que el usuario conozca el clima de determinada zona

/*while (mensaje.toLocaleLowerCase() == "si"){
    let semana = prompt("Elija un día escribiendo su número correspondiente: \n1- Lunes \n2- Martes \n3- Miércoles \n4- Jueves \n5- Viernes \n6- Sábado \n7- Domingo");
    let propuesta
    // Condicional switch para mostrar opciones
    // Cada condicion contiene una condición dentro para guardar alertas en la memoria
    switch (semana){
        case "1":
            alert("Este día será nublado, con posiblidad de lluvia");
            propuesta = prompt ("¿Quiere una notificación de ahora en adelante sobre los días Lunes? (-si- para añadir a notificaciones / -no- para omitir)");
            if (propuesta.toLowerCase() == "si"){
                alert("Agregaste -Lunes- en tus alertas");
                incrementarNotificaciones(1);
                }else{
                    alert("De acuerdo");
                }
            break;
        case "2":
            alert("Este día será soleado, temperatura máxima de 25°grados");
            propuesta = prompt ("¿Quiere una notificación de ahora en adelante sobre los días Martes? (-si- para añadir a notificaciones / -no- para omitir)");
            if (propuesta.toLowerCase() == "si"){
                alert("Agregaste -Martes- en tus alertas");
                incrementarNotificaciones(1);
                }else{
                    alert("De acuerdo");
                }
            break;
        case "3":
            alert("Este día será lluvioso, bajas probabilidades de tormenta");
            propuesta = prompt ("¿Quiere una notificación de ahora en adelante sobre los días Miércoles? (-si- para añadir a notificacion / -no- para omitir)");
                if (propuesta.toLowerCase() == "si"){
                alert("Agregaste -Miércoles- en tus alertas");
                incrementarNotificaciones(1);
                }else{
                    alert("De acuerdo");
                }
            break;
        case "4":
            alert("Este día será soleado, temperatura máxima de 21°grados");
            propuesta = prompt ("¿Quiere una notificación de ahora en adelante sobre los días Jueves? (-si- para añadir a notificaciones / -no- para omitir)");
                if (propuesta.toLowerCase() == "si"){
                    alert("Agregaste -Jueves- en tus alertas");
                    incrementarNotificaciones(1);
                    }else{
                        alert("De acuerdo");
                    }
            break;
        case "5":
            alert("Este día será lluvioso, altas probabilidades de tormenta");
            propuesta = prompt ("¿Quiere una notificación de ahora en adelante sobre los días Viernes? (-si- para añadir a notificaciones / -no- para omitir)");
                if (propuesta.toLowerCase() == "si"){
                    alert("Agregaste -viernes- en tus alertas");
                    incrementarNotificaciones(1);
                    }else{
                        alert("De acuerdo");
                    }
            break;
        case "6":
            alert("Este día será soleado, temperatura máxima de 20°grados, bajas probabilidades de tormenta");
            propuesta = prompt ("¿Quiere una notificación de ahora en adelante sobre los días Sábado? (-si- para añadir a notificaciones / -no- para omitir)");
                if (propuesta.toLowerCase() == "si"){
                    alert("Agregaste -Sábado- en tus alertas");
                    incrementarNotificaciones(1);
                    }else{
                        alert("De acuerdo");
                    }
            break;
        case "7":
            alert("Este día será lluvioso, probabilidad de neblina");
            propuesta = prompt ("¿Quiere una notificación de ahora en adelante sobre los días Domingo? (-si- para añadir a notificaciones / -no- para omitir)");
            if (propuesta.toLowerCase() == "si"){
                alert("Agregaste -Domingo- en tus alertas");
                incrementarNotificaciones(1);
                }else{
                    alert("De acuerdo");
                }
            break;
        default:
            alert("Número inválido");
            break;
        }

    mensaje = prompt("¿Desea saber el clima de algún otro día? (-si- para continuar)");
}
*/

let contCartas = document.createElement("li");
let listaProvincias = document.getElementById("provincias");
function listas(lista){
    for(const listaElegida of lista){
    listaProvincias.innerHTML=`
    <ul>
        <h2> ${listaElegida.localizacion}</h2>
        <li>
            ${contCartas}
        </li>
    </ul>
`;
}
}


// function mostrarCards(dias){
//     for(const dia of dias){
//         contCartas.innerHTML+=`
        
//         <div class="carta card col-sm-2">
//             <img src="./imgs/lugares1.jpg" class="card-img-top" alt="imagen">
//             <div class="card-body">
//                 <p class="card-text">${arrayDias.nombre}</p>
//                 <p class="card-text">${arrayDias.estado}</p>
//             </div>
//         </div>
//         `;
// //     }
// // };
// // let contVarProv = document.getElementById("provincias");
// // function mostrarProvincias(array){
// //     for(const provincia of array){
// //         contVarProv.innerHTML+=`
// //         <div>
// //             <h2>${provincia.localizacion}</h2>
// //         </div>
// //         `;
// //     }
// // };

// listas(arrayDias);

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
                    alert("Agregaste "+ubicacion+" en tus alertas");
                    incrementarNotificaciones(1);
                    }else{
                        alert("De acuerdo");
                    }
        }
    mensajeUbicacion = prompt("¿Desea predefinir otra zona en específico? \n(-si- para continuar) \n(-s- para salir)");
};

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