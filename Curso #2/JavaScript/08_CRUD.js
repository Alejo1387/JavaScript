const gato = {
    nombre : "Michu",
    duerme : true,
    edad : 4,
    enemigos : ["Agua", "Perros"]
}

// creamos una nueva propiedad y clave
gato.color = "Amarillo";

// actualizar
gato.edad = 4.7;

// borrar
delete gato.duerme;

// este es leer
console.log(gato.color);
console.log(gato.edad);
console.log(gato);