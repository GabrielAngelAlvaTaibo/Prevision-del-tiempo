// Variables, constantes, arrays y storage utilizados
localStorage.setItem("notificaciones", 0);
let contCartas=document.getElementById("contCiudades");
const filtradoProv = document.getElementById("filtradoProv");
const botonBuscar = document.getElementById("botonBuscar");
const boton = document.getElementById("botonAgregar");
const notificaciones = document.getElementById("botoNotificacion");
const notifi = document.getElementById("notif");
let notificacionesResultado = parseInt(localStorage.getItem("notificaciones"))
const arrayProvincias = JSON.parse(localStorage.getItem("provincias")) || [];


// Impresión para comprobar propiedades

console.log(typeof notificacionesResultado)
console.log(arrayProvincias);
console.log(typeof arrayProvincias);
console.log(arrayProvincias)

//No se mostrarán las cards por defecto

//Funcionalidad de botón "filtrar" y label
botonBuscar.addEventListener("click", ()=>{
    console.log(`buscaste ${filtradoProv.value}`);
    llamarAPI(filtradoProv.value)
})
//Funcionalidad de botón "añadir"
boton.addEventListener("click", () => {
    Swal.fire({
        position: 'top-end',
        title: `¿Desea añadir ${filtradoProv.value} a notificaciones?`,
        showConfirmButton: true,
        showDenyButton: true,
        confirmButtonText: "Guardar",
        denyButtonText: "No guardar",        
    })
    .then((result) => {
        if (result.isConfirmed) {
            Swal.fire(`${filtradoProv.value} se a añadido ha tus notificaciones!`, '', 'success')
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
// Funcion que muestra las notificaciones guardadas en pantalla
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
        //Funcionalidad del boton "Eliminar"
        const eliminar = document.getElementById("botonEliminar");
        eliminar.addEventListener("click",()=>{
            localStorage.removeItem("provincias");
            localStorage.setItem("notificaciones", parseInt(incrementarNotificaciones(-1)))
            const tablaCreada = document.getElementById("tablaCreada");
            tablaCreada.remove();
        });
    }
}


//Función para mostrar cards 
function mostrarCards(data){
    // Vaciado de anteriores búsquedas
    contCartas.innerHTML='';
    // Datos extraidos de API
    const {name, main:{temp, temp_min, temp_max}, weather:[arr]} = data;
    const degrees = deKelvinACentigrados(temp);
    const min = deKelvinACentigrados(temp_min);
    const max = deKelvinACentigrados(temp_max);
    // Lo que es mostrado en pantalla
    contCartas.innerHTML = `
        <div class="estilosCarta">
            <h5 class="estilosCartaTitulo">Clima en ${name}</h5>
            <img class="cartaImg" src="https://openweathermap.org/img/wn/${arr.icon}@2x.png" alt="icon">
            <div>
                <h2 class="">${degrees}°C</h2>
                <p class="">Max: ${max}°C</p>
                <p class="">Min: ${min}°C</p>
            </div>
        </div>
        `;
}
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
// Función para guardar todo lugar que se quiera almacenar en un array que, a la vez, va a ser almacenado
// en el local storage
function crearObjeto(){
    // e.preventDefault(e);

    const objeto = new Provincia(filtradoProv.value);

    arrayProvincias.push(objeto);

    localStorage.setItem("provincias", JSON.stringify(arrayProvincias))
}