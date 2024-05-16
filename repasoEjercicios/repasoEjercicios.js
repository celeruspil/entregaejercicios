"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var numero1 = rls.questionInt("Ingrese un numero entero: ");
var numero2 = rls.questionInt("Ingrese otro numero entero: ");
var inicio;
var fin;
var suma = 0;
if (numero1 <= numero2) {
    inicio = numero1;
    fin = numero2;
}
else {
    inicio = numero2;
    fin = numero1;
}
for (var contador = inicio; contador <= fin; contador++) {
    suma += contador;
}
console.log("suma" + suma);
