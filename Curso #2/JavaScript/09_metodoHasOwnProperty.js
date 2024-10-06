const gato = {
    nombre : "Michu",
    duerme : true,
    edad : 4,
    enemigos : ["Agua", "Perros"]
}

// Existe
console.log(gato.hasOwnProperty("nombre"));

// No existe
console.log(gato.hasOwnProperty("nobr"));

// Cambiar algo
if(gato.hasOwnProperty("nombre")) {
    gato.nombre = "Michu Daniel";
}

console.log(gato);