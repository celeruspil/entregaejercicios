import*as readlineSync from "readline-sync";
let meses: string[]= new Array("Enero", "Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
let nroMes : number = readlineSync.questionInt("ingrese el numero de mes que le interesa");
let indice:number =nroMes - 1;
console.log("El mes es "+ meses[indice]);

