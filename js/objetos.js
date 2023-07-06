
//las imágenes fueron elegidas a lo "bruto" por el momento. Para diferenciar las targetas fácilmente


class Provincia {
    constructor(nombre)
    {
    this.provincias = nombre;
    }
}

const arrayProvincias = JSON.parse(localStorage.getItem("provincias")) || [];

function crearObjeto(e){
    e.preventDefault();

    const objeto = new Provincia(filtrado.value);

    arrayProvincias.push(objeto);

    localStorage.setItem("provincias", JSON.stringify(arrayProvincias))
}



const arrayDias =[
    {
        localizacion: "Buenos Aires",
        nombre: "Lunes",
        estado: "Este día será nublado, con posiblidad de lluvia",
        imagen:"./imgs/buenosAires.jpg"
    },
    {
        localizacion: "Buenos Aires",
        nombre: "Martes",
        estado: "Este día será soleado, temperatura máxima de 25°grados",
        imagen:"./imgs/buenosAires.jpg"
    },
    {
        localizacion: "Buenos Aires",
        nombre: "Miércoles",
        estado: "Este día será lluvioso, bajas probabilidades de tormenta",
        imagen:"./imgs/buenosAires.jpg"
    },
    {
        localizacion: "Buenos Aires",
        nombre: "Jueves",
        estado: "Este día será soleado, temperatura máxima de 21°grado",
        imagen:"./imgs/buenosAires.jpg"
    },
    {
        localizacion: "Buenos Aires",
        nombre: "Viernes",
        estado: "Este día será lluvioso, altas probabilidades de tormenta",
        imagen:"./imgs/buenosAires.jpg"
    },
    {
        localizacion: "Buenos Aires",
        nombre: "Sábado",
        estado: "Este día será soleado, temperatura máxima de 20°grados, bajas probabilidades de tormenta",
        imagen:"./imgs/buenosAires.jpg"
    },
    {
        localizacion: "Buenos Aires",
        nombre: "Domingo",
        estado: "Este día será lluvioso, probabilidad de neblina",
        imagen:"./imgs/buenosAires.jpg"
    },
    {
        localizacion: "Córdoba",
        nombre: "Lunes",
        estado: "Este día será nublado, con posiblidad de lluvia",
        imagen:"./imgs/cordoba.jpg"
    },
    {
        localizacion: "Córdoba",
        nombre: "Martes",
        estado: "Este día será soleado, temperatura máxima de 25°grados",
        imagen:"./imgs/cordoba.jpg"
    },
    {
        localizacion: "Córdoba",
        nombre: "Miércoles",
        estado: "Este día será lluvioso, bajas probabilidades de tormenta",
        imagen:"./imgs/cordoba.jpg"
    },
    {
        localizacion: "Córdoba",
        nombre: "Jueves",
        estado: "Este día será soleado, temperatura máxima de 21°grado",
        imagen:"./imgs/cordoba.jpg"
    },
    {
        localizacion: "Córdoba",
        nombre: "Viernes",
        estado: "Este día será lluvioso, altas probabilidades de tormenta",
        imagen:"./imgs/cordoba.jpg"
    },
    {
        localizacion: "Córdoba",
        nombre: "Sábado",
        estado: "Este día será soleado, temperatura máxima de 20°grados, bajas probabilidades de tormenta",
        imagen:"./imgs/cordoba.jpg"
    },
    {
        localizacion: "Córdoba",
        nombre: "Domingo",
        estado: "Este día será lluvioso, probabilidad de neblina",
        imagen:"./imgs/cordoba.jpg"
    },
    {
        localizacion: "Santa Fe",
        nombre: "Lunes",
        estado: "Este día será nublado, con posiblidad de lluvia",
        imagen:"./imgs/santaFe.jpg"
    },
    {
        localizacion: "Santa Fe",
        nombre: "Martes",
        estado: "Este día será soleado, temperatura máxima de 25°grados",
        imagen:"./imgs/santaFe.jpg"
    },
    {
        localizacion: "Santa Fe",
        nombre: "Miércoles",
        estado: "Este día será lluvioso, bajas probabilidades de tormenta",
        imagen:"./imgs/santaFe.jpg"
    },
    {
        localizacion: "Santa Fe",
        nombre: "Jueves",
        estado: "Este día será soleado, temperatura máxima de 21°grado",
        imagen:"./imgs/santaFe.jpg"
    },
    {
        localizacion: "Santa Fe",
        nombre: "Viernes",
        estado: "Este día será lluvioso, altas probabilidades de tormenta",
        imagen:"./imgs/santaFe.jpg"
    },
    {
        localizacion: "Santa Fe",
        nombre: "Sábado",
        estado: "Este día será soleado, temperatura máxima de 20°grados, bajas probabilidades de tormenta",
        imagen:"./imgs/santaFe.jpg"
    },
    {
        localizacion: "Santa Fe",
        nombre: "Domingo",
        estado: "Este día será lluvioso, probabilidad de neblina",
        imagen:"./imgs/santaFe.jpg"
    },
    {
        localizacion: "Mendoza",
        nombre: "Lunes",
        estado: "Este día será nublado, con posiblidad de lluvia",
        imagen:"./imgs/mendoza.webp"
    },
    {
        localizacion: "Mendoza",
        nombre: "Martes",
        estado: "Este día será soleado, temperatura máxima de 25°grados",
        imagen:"./imgs/mendoza.webp"
    },
    {
        localizacion: "Mendoza",
        nombre: "Miércoles",
        estado: "Este día será lluvioso, bajas probabilidades de tormenta",
        imagen:"./imgs/mendoza.webp"
    },
    {
        localizacion: "Mendoza",
        nombre: "Jueves",
        estado: "Este día será soleado, temperatura máxima de 21°grado",
        imagen:"./imgs/mendoza.webp"
    },
    {
        localizacion: "Mendoza",
        nombre: "Viernes",
        estado: "Este día será lluvioso, altas probabilidades de tormenta",
        imagen:"./imgs/mendoza.webp"
    },
    {
        localizacion: "Mendoza",
        nombre: "Sábado",
        estado: "Este día será soleado, temperatura máxima de 20°grados, bajas probabilidades de tormenta",
        imagen:"./imgs/mendoza.webp"
    },
    {
        localizacion: "Mendoza",
        nombre: "Domingo",
        estado: "Este día será lluvioso, probabilidad de neblina",
        imagen:"./imgs/mendoza.webp"
    }
]