
     //-------------------- PROBLEMAS RESUELTOS ---------------------//


//----- 17. Programa para saber si un número dado es primo o compuesto -----//

var number = prompt("Digita un número");
var primo = 0; // indicará si un número es primo o compuesto
var divisores = ""; // divisores del número

for(var i = 0; i <= number; i++){
    if(number % i == 0){ // si al dividir number con el número en "i" da como módulo 0, "i" es divisor de number
        divisores += i + "<br>"; // se almacenan los divisores
        primo++; // se le suma más 1 a la variable primo. Esta cuenta cuantos divisores hay
    }
}

if(primo == 2){ // si primo es igual a 2, significa el número es primo. Un primo solamente tiene dos divisores positivos
    document.write("El número " + number + " es primo<hr>" + divisores);
} else { // si es mayor a 2 divisores, el número es compuesto
    document.write("El número " + number + " es compuesto<hr>" + divisores);
}



//----- 16. Programa para saber divisores comúnes de dos números dados -----//

var numberOne = prompt("Digita el primer número");
var numberTwo = prompt("Digita el segundo número");

// Divisores de los números uno y dos
var numberOneDivisors = "";
var numberTwoDivisors = "";

var commonDivisors = ""; // Divisores comúnes de los dos números


// Ciclo for para comprobar divisores del número uno
for(var i = 0; i <= numberOne; i++){
    if(numberOne % i == 0){ // Si el residuo de esta operación es 0, el número en "i" es divisor del numberOne
        numberOneDivisors += i + "<br>"; // Se agregan los divisores a su variable
    }
}

// Ciclo for para comprobar divisores del número dos
for(var i = 0; i <= numberTwo; i++){
    if(numberTwo % i == 0){ // Si el residuo de esta operación es 0, el número en "i" es divisor del numberTwo
        numberTwoDivisors += i + "<br>"; // Se agregan los divisores a su variable
    } 
}

// Ciclo for para comprobar divisores comúnes
for(var i = 0; i <= numberOne + numberTwo; i++){
    if(numberOne % i == 0 && numberTwo % i == 0){ // Si el residuo de la operación 1 y 2 es 0, el número en "i" es divisible entre número uno y dos
        commonDivisors += i + "<br>"; // Se agregan los divisores a su variable
    }
}

// Escribiendo divisores de numberOne
document.write("Los divisores del número " + numberOne + " son<br>" + numberOneDivisors + "<hr>");

// Escribiendo divisores de numberTwo
document.write("Los divisores del número " + numberTwo + " son<br>" + numberTwoDivisors + "<hr>");

// Escribiendo divisores comúnes
document.write("Los divisores comunes del número " + numberOne + " y del número " + numberTwo + " son:<br>" + commonDivisors);



//----- 15. Programa que escribe por pantalla los divisores de un número dado -----//

var number = prompt("Digita un número");
var divisors = "";

for(var i = 0; i <= number; i++){
    if(number % i == 0){
        divisors += i + "<br>";
    }
}

document.write("Los divisores del número " + number + " son: <br>" + divisors);



//----- 14. Programa para decir si un número es divisible entre otro -----//

var number = prompt("Digita un número");
var divisors = [2,3,5,7]; // números divisores

for(var i = 0; i < divisors.length; i++){ // se recorre todo el array de divisors
    if(number % divisors[i] == 0){ // si su residuo es igual a 0 significa que es divisible
        document.write(number + " SI es divisible entre " + divisors[i] + "<br>");
    } else {
        document.write(number + " NO es divisible entre " + divisors[i] + "<br>");
    }
}



//----- 13. Programa que dice si un número es divisible entre 5 -----//

var number = prompt("Digita un número");

if(number % 5 == 0){
    document.write("El número " + number + " es divisible por 5")
} else {
    document.write("El número " + number + " NO es divisible por 5");
}



//----- 12. Programa que pide una frase y dice cuantas veces aparecen cada una de las vocales -----//

var frase = prompt("Escribe una frase");
var vocals = ["a", "e", "i", "o", "u"];

// contadores de vocales
var aCount = 0;
var eCount = 0;
var iCount = 0;
var oCount = 0;
var uCount = 0;

// ciclo for para comprobar vocales de la frase y sumarlas a los contadores
for(var i = 0; i < frase.length; i++){
    if(frase.charAt(i) == vocals[0]){
        aCount += 1;
    } else if(frase.charAt(i) == vocals[1]){
        eCount += 1;
    } else if(frase.charAt(i) == vocals[2]){
        iCount += 1;
    } else if(frase.charAt(i) == vocals[3]){
        oCount += 1;
    } else if(frase.charAt(i) == vocals[4]){
        uCount += 1;
    }
}

document.write("En la frase " + "'" + frase + "'" + " se encontró el siguiente número de vocales:<hr>")

// Se escribe en el documento el número de veces que aparece cada vocal en la frase
document.write("a: " + aCount + " ");
document.write("e: " + eCount + " ");
document.write("i: " + iCount + " ");
document.write("o: " + oCount + " ");
document.write("u: " + uCount + " ");



//----- 11. Programa que pide una frase e indica cuantas vocales hay en la frase -----//

var frase = prompt("Escribe una frase");
var vocals = ["a", "e", "i", "o", "u"];

var counterVocals = 0;
var counterCharacters = 0;

for(var i = 0; i < frase.length; i++){
    counterCharacters += 1;
    if(vocals.includes(frase.charAt(i))){
        counterVocals += 1;
    }
}

document.write("En la frase " + "'" + frase + "'" + " se encontraron " + counterVocals + " vocales entre " + counterCharacters + " caracteres");



//----- 10. Programa que encuentra las vocales de una frase -----//

var frase = prompt("Escribe una frase");
var storageVocals = "";

var vocales = ["a","e","i","o","u"]; // array de vocalese

for(var i = 0; i < frase.length; i++){
    if(vocales.includes(frase.charAt(i))){ // vocales.includes() se usa para buscar el elemento indicado entre paréntesiu en el array. frase.charAt(i) se usa para recorrer cada uno de los caracteres de la frase
        storageVocals += frase.charAt(i) + " "; // solo escribirá las vocales de la frase
    }
}

document.write("En la frase " + "'" + frase + "'" + " se encontraron las siguientes vocales: " + storageVocals);



//----- 9. Programa para escribir cuantas veces aparece la letra a en una frase -----//

var frase = prompt("Escribe una frase");
var aS = 0; // contador de número de a's

for(var i = 0; i < frase.length; i++){ // frase.length es la cantidad de caracteres que se encuentran en la variable fraso
    if(frase.charAt(i) == "a"){ // charAt(i) nos permite revisar cada uno de los caracteres y compararlo con "ae
        aS += 1; // se agrega al contador las veces que aparece "a"
    }
}

document.write("En la frase " + "'" + frase + "'" + " se han encontrado " + aS + " a's");



//----- 8. Programa para saber si un número dado es divisible entre 2 -----//
var number = prompt("Ingresa un número");

if(number % 2 == 0){
    document.write(number + " es divisible entre 2");
} else {
    document.write(number + " NO es divisible entre 2");
}



//----- 7. Programa que pida tres números e indique cual es el mayor de los tres -----//
var n1 = prompt("Ingresa el primer número");
var n2 = prompt("Ingresa el segundo número");
var n3 = prompt("Ingresa el tercer número");

if(n1 > n2 && n1 > n3){ // n1 mayor que n2 y n3
    document.write(n1 + " es mayor que " + n2 + " y " + n3);
} else if(n2 > n1 && n2 > n3){ // n2 mayor que n1 y n3
    document.write(n2 + " es mayor que " + n1 + " y " + n3);
} else { // n3 mayor que n1 y n2
    document.write(n3 + " es mayor que " + n1 + " y " + n2);
}



//----- 6. Programa que pida dos números e indique cuál es el mayor -----//
var n1 = prompt("Ingresa el primer número");
var n2 = prompt("Ingresa el segundo número");

if(n1 > n2){
    document.write(n1 + " es mayor que " + n2);
} else {
    document.write(n2 + " es mayor que " + n1);
}



//----- 5. Programa de tres líneas de código que pida dos números y escriba el resultado al sumarlos -----//
var n1 = parseInt(prompt("Ingresa el primer número"));
var n2 = parseInt(prompt("Ingresa el segundo número"));
document.write(n1 + " + " + n2 + " es igual a " + (n1 + n2));



//----- 4. Programa que pida el nombre del usuario y que se escriba por pantalla "Hola nombreDeUsuario" -----//
var name = prompt("Cuál es tu nombre?");
document.write("Hola " + name);



//----- 3. Programa que escriba el resultado al sumar 3 + 5 -----//
document.write("3 + 5 es igual a "+ (3 + 5));



//----- 2. Escribir por pantalla "Hello World" -----//
document.write("Hello World");



//----- 1. Programa de una sola linea para disparar una alerta diciendo "Hello World" -----//
alert("Hello World");
