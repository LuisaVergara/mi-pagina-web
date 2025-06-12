// Paso 1: Declaración de variables con valores asignados
let num1 = 10;
let num2 = 5;
let operacion = "suma";
let pregunta;

// Paso 2: Función para realizar operaciones
const realizarOperacion = (num1, num2, operacion) => {
    if (operacion == "suma") {
        return num1 + num2;
    } 
    else if (operacion == "resta") {
        return num1 - num2;
    }
    else if (operacion == "multiplicacion") {
        return num1 * num2;
    }
    else if (operacion == "division") {
        if (num2 == 0) {
            return "No es posible realizar una división por cero";
        }
        return num1 / num2;
    }
    else {
        return "Esta operación no es válida";
    }
}

// Paso 4: Bucle para múltiples operaciones
while (operacion != "salir") {
    num1 = prompt("Ingrese el primer número:");
    num2 = prompt("Ingrese el segundo número:");
    operacion = prompt("Ingrese la operación (suma, resta, multiplicacion, division):");

    // Paso 5: Mostrar el resultado
    console.log("El resultado es:");
    console.log(realizarOperacion(+num1, +num2, operacion));

    // Pregunta para continuar
    pregunta = prompt("¿Desea realizar otra operación? (si/no)");

    if (pregunta == "si") {
        continue;
    } else {
        console.log("Gracias por usar la calculadora. ¡Adiós!");
        break;
    }
}
