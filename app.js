const suma = (a, b) => {
    let result = a + b;
    return result;
};

const resta = (a, b) => {
    let result = a - b;
    return result;
};

const multi = (a, b) => {
    result = a * b;
    return result;
};

//corregir, seguro que así no anda
const fibonacci = (a) => {
    let numAnt = 1;
    let resulString = "";

    for (let i = 0; i < a; i++) {
        resulString = numAnt + " " + resulString;
        numAnt = parseInt(numAnt) + parseInt(i);
    }
    return resulString;
};

let nombre = prompt("Hola! Dime tu nickname ");
if (nombre == "") {
    nombre = "Ignoto";
}

do {
    let oper_raw = prompt(`¿qué quieres hacer ${nombre}? \n S - Suma \n R - Resta \n M - Multiplicación \n F - Fibonacci`);
    oper = oper_raw.toUpperCase();
} while (oper != "S" && oper != "R" && oper != "M" && oper != "F");

let num1 = prompt("Escribe un número");
let num2;
if (oper != "F") {
    num2 = prompt("Escribe otro número");
}

if (num1 == "" || (num2 == "" && oper != "F")) {
    alert(`${nombre}!!! Escribe todos los valores!!`);
} else {
    let num_1 = Number(num1);
    let num_2 = Number(num2);

    switch (oper) {
        case "S":
            let totalsum = suma(num_1, num_2);
            console.log("La suma de tus números es: ", totalsum);
            break;
        case "R":
            let totalres = resta(num_1, num_2);
            console.log("La resta entre el primer número y el segundo es: ", totalres);
            break;
        case "M":
            let totalmul = multi(num_1, num_2);
            console.log("La multiplicación tus números es: ", totalmul);
            break;
        case "F":
            let serieFib = fibonacci(num_1);
            console.log("La serie Fibonacci de ", num_1, " repeticiones es: ", serieFib);
            break;

        default:
            break;
    }
}
