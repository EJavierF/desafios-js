//Empezamos ejercicio de objetos
function articulo(titulo, tema, autor, fecha) {
    this.titulo = titulo;
    this.tema = tema;
    this.autor = autor;
    this.fecha = fecha;
    this.fechaCarga = new Date();
}

let ingTitulo = prompt("Ingresa el titulo");
let ingTema = prompt("Tema del cual trata el artículo:");
let ingAutor = prompt("Autor del artículo:");
let ingFecha = prompt("Fecha:");

const art01 = new articulo(ingTitulo, ingTema, ingAutor, ingFecha);

console.log(art01.titulo);
console.log(art01.tema);
console.log(art01.autor);
console.log(art01.fecha);
console.log(art01.fechaCarga);
