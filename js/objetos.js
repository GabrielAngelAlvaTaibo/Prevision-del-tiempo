
//las imágenes fueron elegidas a lo "bruto" por el momento. Para diferenciar las targetas fácilmente


// Constructor para crear objetos de las búsquedas
class Provincia {
    constructor(nombre)
    {
    this.lugar = nombre;
    }
}
// Funcion de para extraer datos de la API
function llamarAPI(city) {
    const paises = document.getElementById("paises");
    const apiId = "33acf28cfb62ccf988fbc9d31f0d88b5";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${paises.value}&appid=${apiId}`;
    fetch(url)
        .then(data => {
            return data.json();
        })
        .then(dataJSON => {
            if (dataJSON.cod === '404') {
                Swal.fire(`¡Ciudad no encontrada!`, '', 'error')
            } else {
                // clearHTML();
                mostrarCards(dataJSON);
            }
            //console.log(dataJSON);
        })
        .catch(error => {
            console.log(error);
        })
}
function deKelvinACentigrados(temp){
    return parseInt(temp - 273.15);
}