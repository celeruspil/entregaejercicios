import*as rls from "readline-sync"; 
let numero1:number =rls.questionInt("Ingrese un numero entero: ");
let numero2:number =rls.questionInt("Ingrese otro numero entero: ");
let inicio:number;
let fin:number;
let suma=0;
if (numero1 <= numero2){
    inicio=numero1;
    fin=numero2;
}else{
    inicio=numero2
    fin=numero1
}
for (let contador = inicio; contador <= fin; contador++){
suma+=contador
}
console.log("suma" + suma);

