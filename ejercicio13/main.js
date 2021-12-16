let operando1=prompt("Escribe el operando 1");


let operacion=prompt("Escribe el codigo de operacion");

let operando2=prompt("Escribe el operando 2");




switch (operacion){
    case "1":
    resultado=operando1+operando2;
    break;
    case "2":
    resultado=operando1-operando2;
    break;
    case "3":
    resultado=operando1*operando2;
    break;
    case "4":
    resultado=operando1/operando2;
    break;
    case "5":
    resultado=(operando1^operando2);
    break;
    case "6":
    resultado=operando1%operando2;
    break;
}
console.log(null, operando1+" "+operacion+" "+operando2+" = "+resultado);