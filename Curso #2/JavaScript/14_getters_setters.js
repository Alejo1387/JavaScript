const gato = {
    nombre : "Michu",
    duerme : true,
    edad : 4,
    enemigos : ["Agua", "Perros"],
    // Asi es el get, y el get no recibe paramatros
    get nombreMayuscula() {
        return this.nombre.toUpperCase()
    }
}

// Asi mostramos el getpone parentesis
console.log(gato.nombreMayuscula);