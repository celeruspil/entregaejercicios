import*as rls from "readline-sync";
let numero1:number =rls.questionInt("ingrese un numero: ");
let numero2:number=rls.questionInt("ingrese el segundo numero: ");
let opcionMenu :number=rls.questionInt("Ingrese 1 para sumar,2 para restar, cualquier otra sale del menu ");
let resultadoFuncion:number=0;

function calcularResultado (numero1:number,numero2:number, opcionMenu:number):number{
    let resultado:number=0;
    if (opcionMenu == 1) {
        resultado= numero1 + numero2;
    } else if (opcionMenu =2) {
        resultado= numero1 - numero2;
    }
    return resultado;
}

resultadoFuncion=calcularResultado(1,2,opcionMenu);

dibujarGuionesN (resultadoFuncion)
console.log("el resultado es: ",resultadoFuncion);

dibujarGuionesN (resultadoFuncion)
function dibujarGuionesN (numeroDeGuiones : number) {
let i : number;
let linea: string = "";
for (i = 0; i <= numeroDeGuiones; i++){
            linea = linea + "-"
}
console.log(linea);
}