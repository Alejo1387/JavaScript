const gato = {
    nombre : "Michu",
    duerme : true,
    edad : 4,
    enemigos : ["Agua", "Perros"]
}

// muestra todos los objetos literales
console.log(gato);

// muestra solo el valor
console.log(gato.nombre);

// para mostrar solo el valor de otra forma
console.log(gato["edad"]);

// para mostrar un solo elemento de un array
console.log(gato.enemigos[0]);
console.log(gato["enemigos"][1]);