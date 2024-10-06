// creamos el array vacio
const frutas = [];

// Esta es la primera fruta
const fruta = prompt("Que fruta deseas comprar?");
// aqui la agregamos al array
frutas.push(fruta);

/* el confirm sirve para hacer una pregunta y esto devuelve true o false
depende lo que salga para que el ciclo continue */
while (confirm("Deseas agregar otro elemento en el carrito?")){
    // aqui pedimos otra fruta y la agregamos
    const fruta = prompt("Que fruta deseas comprar?");
    frutas.push(fruta);
}

// aqui mostramos toda la compra
console.log("Compraste: ")
for (const fruta of frutas){
    console.log(fruta)
}