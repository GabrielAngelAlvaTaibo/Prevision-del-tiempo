// Variables, constantes, arrays y storage utilizados
localStorage.setItem("notificaciones", 0);
let contCartas=document.getElementById("contCiudades");
const filtrado = document.getElementById("filtrado");
const boton = document.getElementById("botonAgregar");
const notificaciones = document.getElementById("botoNotificacion");
let notificacionesResultado = parseInt(localStorage.getItem("notificaciones"))
const arrayProvincias = JSON.parse(localStorage.getItem("provincias")) || [];


// Impresión para comprobar propiedades

console.log(typeof notificacionesResultado)
console.log(arrayProvincias);
console.log(typeof arrayProvincias);
console.log(arrayProvincias)

//No se mostrarán las cards por defecto

//Funcionalidad de botón "filtrar" y label
filtrado.addEventListener("input", () => {
    console.log(`buscaste ${filtrado.value}`)
    filtrarPorCiudad(filtrado.value)
    });

//Funcionalidad de botón "filtrar" y label
boton.addEventListener("click",() => {
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
            Swal.fire(`${filtrado.value} se a añadido ha tus notificaciones!`, '', 'success')
            localStorage.setItem("notificaciones", parseInt(incrementarNotificaciones(1)));
            crearObjeto();
            console.log(notificacionesResultado);
            console.log(typeof notificacionesResultado);
            console.log(arrayProvincias);
            console.log(typeof arrayProvincias);
        } else if (result.isDenied) {
            Swal.fire('De acuerdo :(', '')
        }
        });
    }
);

// Funcionalidad del boton "Notificaciones guardadas"
notificaciones.onclick = () =>{
    console.log(typeof arrayProvincias);
    console.log(arrayProvincias);
    mostrarNotif(arrayProvincias)
}

//Funcionalidad del boton "Eliminar"
const notifi = document.getElementById("notif");

function mostrarNotif(guardadas){
    notifi.innerHTML=`
    <thead>
        <tr>
            <th>Notificaciones guardadas</th>
            <th>${notificacionesResultado}</th>
        </tr>
    </thead>
    `;
    for(const notif of guardadas){  
        notifi.innerHTML +=`        
        <tr id="tablaCreada" class = "table table-dark table-striped">
            <th>${JSON.stringify(notif.lugar)}</th>
            <th><input type="submit" value="eliminar" id="botonEliminar"></th>                
        </tr>`;
        const eliminar = document.getElementById("botonEliminar");
        eliminar.addEventListener("click",()=>{
        const tablaCreada = document.getElementById("tablaCreada");
        tablaCreada.remove();
        });
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
            <img src=${dia.imagen} class="card-img-top" alt="imagen">
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
    return notificacionesResultado;
}
// Función para guardar toda provincia que se quiera almacenar en un array que, a la vez, va a ser almacenado
// en el local storage
function crearObjeto(){
    // e.preventDefault(e);

    const objeto = new Provincia(filtrado.value);

    arrayProvincias.push(objeto);

    localStorage.setItem("provincias", JSON.stringify(arrayProvincias))
}