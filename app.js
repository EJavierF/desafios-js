let nombre = prompt("Hola! ingresa tu nombre por favor: ");
let num1 = prompt("Ingresa el primer número");
let num2 = prompt("Ingresa el segundo número");

if (nombre == "" || num1 == "" || num2 == "") {
    alert("por favor responde a todos los carteles");
} else {
    let num_1 = Number(num1);
    let num_2 = Number(num2);
    let alerta = prompt("Ingresa 1 si prefieres un cartel o 2 si prefieres ver en consola");

    if (alerta == 2) {
        console.log("Hola " + nombre);
        console.log("Ingresaste los números: " + num1 + " y " + num2);
        console.log("La suma de tus números es: " + (num_1 + num_2));
        console.log("La resta entre el primer número y el segundo es: " + (num_1 - num_2));
        console.log("La multiplicación tus números es: " + num_1 * num_2);
    } else if (alerta == 1) {
        alert(
            ` Hola ${nombre} \n ingresaste los números  ${num_1} y ${num_2}\n La suma de tus números es: ${num_1 + num_2} \n La resta entre el primer número y el segundo es: ${
                num_1 - num_2
            } \n La multiplicación tus números es: ${num_1 * num_2}`
        );
    } else {
        alert("Por favor elige una opcion para ver los resultados");
    }
}
