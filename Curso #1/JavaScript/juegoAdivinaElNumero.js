// Esto es para que la maquina elija un numero aleatorio entre un minimo y un maximo
let numeroMaquina = Math.floor(Math.random() * (10 - 1)) + 1;

let vidas = 3;

console.log(numeroMaquina);

// para pedir un numero al usuario
var numUsu = parseInt(prompt("Adivina el numero del 1 al 10:"));

while(numeroMaquina!==numUsu && vidas>1){
    let mensaje = (numeroMaquina>numUsu) ? "El numero de la maquina es mayor" : "El numero de la maquina es menor";
    console.log("Te equivocaste!!  "+mensaje)
    numUsu = parseInt(prompt("Numero del 1 al 10:"));
    vidas--;
}

if(numeroMaquina===numUsu){
    console.log("Ganaste!!")
}else{
    console.log("Perdiste!!")
}