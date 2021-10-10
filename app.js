//Empezamos ejercicio de objetos

//lo comento porque funciona, pero voy a usar la clase que es más ordenada
// function articulo(titulo, tema, autor, fecha) {
//     this.titulo = titulo;
//     this.tema = tema;
//     this.autor = autor;
//     this.fecha = fecha;
//     this.fechaCarga = new Date();

//     this.describir = function () {
//         alert(
//             `El título del artículo es: ${this.titulo} \n Clasificado como: ${this.tema} \n Creado por: ${this.autor} \n Escrito el día: ${this.fecha} \n Cargado en el sitio el: ${this.fechaCarga}`
//         );
//     };
// }
class articulo {
    constructor(titulo, tema, autor, fecha) {
        this.titulo = titulo;
        this.tema = tema;
        this.autor = autor;
        this.fecha = fecha;
        this.fechaCarga = new Date();
    }

    describir() {
        alert(
            `El título del artículo es: ${this.titulo} \n Clasificado como: ${this.tema} \n Creado por: ${this.autor} \n Escrito el día: ${this.fecha} \n Cargado en el sitio el: ${this.fechaCarga}`
        );
    }
}

// funcion para solicitar al usuario que ingrese los datos de un objeto nuevo
const crearArticulo = () => {
    let ingTitulo = prompt("Ingresa el titulo");
    let ingTema = prompt("Tema del cual trata el artículo:");
    let ingAutor = prompt("Autor del artículo:");
    let ingFecha = prompt("Fecha en formato AAAA/MM/DD:");
    let artNuevo = new articulo(ingTitulo.toLowerCase(), ingTema.toLowerCase(), ingAutor.toLowerCase(), new Date(ingFecha));

    return artNuevo;
};

//vector con lista completa de articulos
let articulosLista = [];

//funcion para listar los nombres de articulos
const mostrarArticulos = () => {
    console.log("Lista de articulos en crudo");
    for (const art of articulosLista) {
        console.log(art.titulo);
    }
};
//Ordenando por fecha
const ordenaFecha = () => {
    const artOrdFecha = articulosLista.slice().sort((a, b) => b.fecha - a.fecha);
    console.log("Lista de articulos ordenada por fecha decreciente");

    for (const art of artOrdFecha) {
        console.log(art.fecha, " - ", art.titulo);
    }
};

// Por practicidad para el ejercicio, sólo pido un articulo y los demás estan cargados
const art01 = crearArticulo();
articulosLista.push(art01);

const art02 = new articulo("primera animacion stop motion", "stop motion", "papá", new Date("2021-09-24"));
const art03 = new articulo("dibujando a Hank 3D", "dibujo", "niño", new Date("2021/08/12"));
const art04 = new articulo("animaciones con Piskel", "animaciones", "niño", new Date("2021/05/20"));
const art05 = new articulo("animaciones de Paint 3D", "animaciones", "papá", new Date("2021/06/19"));
articulosLista.push(art02, art03, art04, art05);

//Muestro todo el array de objetos
console.log(articulosLista);

//Imprime solo los titulos
mostrarArticulos();

//Imprime los articulos ordenados por fecha
ordenaFecha();

//art01.describir();
