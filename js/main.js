sessionStorage.setItem("notificaciones", 0);
sessionStorage.setItem("notificacionesGuardadas", JSON.stringify(arrayStorage));

let contCartas = document.getElementById("contCiudades");
let filtrado = document.getElementById("filtrado");
let boton = document.getElementById("botonBuscar");
let notificaciones = document.getElementById("botoNotificacion");
let notificacionesResultado = parseInt(sessionStorage.getItem("notificaciones"))
const notificacionEspecificas = JSON.parse(sessionStorage.getItem("notificacionesGuardadas"));

console.log(typeof notificacionesResultado)
console.log(notificacionEspecificas);
console.log(typeof notificacionEspecificas);
console.log(notificacionEspecificas)

//Mintras no se escriba nada, se mostrarán todas las cards por defecto
while(filtrado == ""){
    mostrarCards(arrayDias)
}

//Funcionalidad de botón "filtrar"
boton.onclick = () => {
    console.log(`buscaste ${filtrado.value}`)
    filtrarPorCiudad(filtrado.value)
    Swal.fire({
        position: 'top-end',
        title: `¿Desea añadir ${filtrado.value} a notificaciones?`,
        showConfirmButton: true,
        showDenyButton: true,
        confirmButtonText: "Guardar",
        denyButtonText: "No guardar",        
    })
    .then((result) => {
    if (result.isConfirmed) {
        Swal.fire(`${filtrado.value} se a añadido a tus notificaciones!`, '', 'success')
        sessionStorage.setItem("notificaciones", parseInt(incrementarNotificaciones(1)));
        sessionStorage.setItem("notificacionesGuardadas", JSON.stringify(arrayStorage.push(`${filtrado.value}`)));
        console.log(notificacionesResultado);
        console.log(typeof notificacionesResultado);
        console.log(notificacionEspecificas);
        console.log(typeof notificacionEspecificas);
    } else if (result.isDenied) {
        Swal.fire('De acuerdo :(', '')
    }
    })
    if((filtrado.value == " ") || (filtrado.value == "")){
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Localización no encontrada',
        })
        mostrarCards(arrayDias)
    }
}


//Función para mostrar cards 
function mostrarCards(dias){
    // Vaciado de anteriores búsquedas
    contCartas.innerHTML='';
    for(const dia of dias){
        // Resultado del filtrado
        contCartas.innerHTML+=`        
        <div class="carta card col-sm-2">
            <img src="./imgs/lugares1.jpg" class="card-img-top" alt="imagen">
            <div class="card-body">
            <p class="card-text">${dia.localizacion}</p>
                <p class="card-text">${dia.nombre}</p>
                <p class="card-text">${dia.estado}</p>
            </div>
        </div>
        `;
    }
};

//Función para filtrar cards
function filtrarPorCiudad(localizaciones){
    const listaFiltro = arrayDias.filter((lugares) => lugares.localizacion == localizaciones);
    return mostrarCards(listaFiltro);
}

//Función para notificaciones
function incrementarNotificaciones(cantidad){
    notificacionesResultado = notificacionesResultado + cantidad;
    return notificacionesResultado
}