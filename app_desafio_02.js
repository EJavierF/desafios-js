// función suma
const suma = (a, b) => {
    let result = a + b;
    return result;
};

//función resta
const resta = (a, b) => {
    let result = a - b;
    return result;
};

//función multiplicación
const multi = (a, b) => {
    result = a * b;
    return result;
};

//función Serie de Fibonacci  - la elegí para implementar el FOR
const fibonacci = (a) => {
    let numAnt = 1;
    let numAnt2 = 0;
    let resulnum = 0;
    let resulString = "";

    for (let i = 0; i < a; i++) {
        resulnum = parseInt(numAnt) + parseInt(numAnt2);
        numAnt2 = numAnt;
        numAnt = resulnum;

        resulString = resulString + " " + resulnum;
    }
    return resulString;
};

let nombre = prompt("Hola! Dime tu nickname "); // le pido al usuario que elija un nombre
if (nombre == "") {
    nombre = "Ignoto"; // le asigno en caso de que no haya ingresado el nombre
}

// Ahora le pido que elija entre las operaciones disponibles
do {
    let oper_raw = prompt(`¿qué quieres hacer ${nombre}? \n S - Suma \n R - Resta \n M - Multiplicación \n F - Fibonacci`);
    oper = oper_raw.toUpperCase();
} while (oper != "S" && oper != "R" && oper != "M" && oper != "F");

// según la función elegida, le pido un sólo número o dos
let num1 = prompt("Escribe un número");
let num2;
if (oper != "F") {
    num2 = prompt("Escribe otro número");
}

// Chequeo que haya ingresado los vaores necesarios
let mensaje = "";
if (num1 == "" || (num2 == "" && oper != "F")) {
    alert(`${nombre}!!! Escribe todos los valores!!`);
    console.log(`Faltaron valores, recargar la página`);
} else {
    let num_1 = Number(num1);
    let num_2 = Number(num2);

    // con el switch case, ejecuto la función que se eligió.
    // guardo el resultado en una variable string, para imprimir una sola vez más tarde
    switch (oper) {
        case "S":
            let totalsum = suma(num_1, num_2);
            mensaje = `La suma de tus números es: ${totalsum}`;

            break;
        case "R":
            let totalres = resta(num_1, num_2);
            mensaje = `La resta entre el primer número y el segundo es: ${totalres}`;
            break;
        case "M":
            let totalmul = multi(num_1, num_2);
            mensaje = `La multiplicación tus números es: ${totalmul}`;
            break;
        case "F":
            let serieFib = fibonacci(num_1);
            mensaje = `La serie Fibonacci de ${num_1} repeticiones es: ${serieFib}`;
            break;

        default:
            break;
    }
}

// imprimo el resultado por consola
console.log(mensaje);
