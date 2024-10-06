//  funcion declarativa
function saludar() {
    return "Hola mundo!";
}
console.log(saludar());

// funcion de feacha
/* 
forma normal

const funFlecha = () => {
    return "Hola mundoo!";
}*/
// forma mejorada
const funFlecha = () => "Hola mundoo!";
console.log(funFlecha());