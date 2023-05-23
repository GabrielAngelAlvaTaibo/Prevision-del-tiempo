let nombreUsuario = prompt("Ingrese su nombre");

while ((nombreUsuario == "") || (nombreUsuario == " ")){
    alert("Por favor, ingrese su nombre")
    nombreUsuario = prompt("Ingrese su nombre");
}

alert("¡Bienvenido "+nombreUsuario+"!");

let mensaje = prompt("¿Desea saber el clima de esta semana? (-si- para continuar)");
// Variante global para contabilizar alertas
let notificaciones = 0;

//Ciclo para que el usuario indage el clima

while (mensaje.toLocaleLowerCase() == "si"){
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

alert("Gracias por elegirnos")

// Uso de una función para calcular la cantidad de alertas guardadas
function incrementarNotificaciones(cantidad){
    notificaciones = notificaciones + cantidad;
    alert ("Tiene un total de "+notificaciones+" "+"alertas agregadas.")
}