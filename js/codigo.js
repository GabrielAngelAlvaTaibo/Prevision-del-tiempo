

let filtro = document.getElementById("filtro");
let boton = document.getElementById("botonBuscar");

function filtrarPorCiudad(localizaciones){
    const listaFiltro = arrayDias.filter((lugares) => lugares.localizacion == localizaciones);
    return listaFiltro;
}

boton.onclick =() => {
    if((filtro == "") || (filtro == " ")){
        alert("Ubicación no encontrada");
        console.log("No te salió papu")
    }else{
        let filtrados = filtrarPorCiudad(filtro.localizacion)
        console.log(`buscaste ${filtro.localizacion}`);
        filtrarPorCiudad(filtrados);
    }
}