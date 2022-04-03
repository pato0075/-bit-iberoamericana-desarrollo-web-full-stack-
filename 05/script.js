//calculadora

const sumar = (num1,num2)=> {
    return parseInt(num1) + parseInt(num2)
}

const resta = (num1,num2)=> {
    return parseInt(num1) - parseInt(num2)
}

const multiplicar = (num1,num2)=> {
    return parseInt(num1) * parseInt(num2)
}

const dividir = (num1,num2)=> {
    return parseInt(num1) / parseInt(num2)
}

alert("Que operacion deseas ");
let operacion = prompt("1:suma, 2:resta, 3:multiplicacion, 4:division");

if (operacion == 1){
    let numero1 = prompt("Primer numero a sumar");
    let numero2 = prompt("Segundo numero a sumar");
    resultado = sumar(numero1, numero2);
    alert(`tu resultado es ${resultado}`);
}
else if (operacion == 2){
    let numero1 = prompt("Primer numero a restar");
    let numero2 = prompt("Segundo numero a restar");
    resultado = resta(numero1, numero2);
    alert(`tu resultado es ${resultado}`);
}
else if (operacion == 3){
    let numero1 = prompt("Primer numero a multiplicar");
    let numero2 = prompt("Segundo numero a multiplicar");
    resultado = multiplicar(numero1, numero2);
    alert(`tu resultado es ${resultado}`);
}
else if (operacion == 4){
    let numero1 = prompt("Primer numero a dividir");
    let numero2 = prompt("Segundo numero a dividir");
    resultado = dividir(numero1, numero2);
    alert(`tu resultado es ${resultado}`);
}

