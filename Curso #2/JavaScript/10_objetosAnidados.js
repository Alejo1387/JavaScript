const gato = {
    nombre : "Michu",
    duerme : true,
    edad : 4,
    enemigos : ["Agua", "Perros"],
    // Segundo objeto literal
    otros : {
        amigos : ["Tomy", "Maylon"],
        // Tercer objeto literal
        favoritos : {
            // Cuarto objeto literal
            comidas : {
                frio : "Mirringo",
                caliente : "Ratones"
            }
        }
    }
}

console.log(gato.otros.favoritos.comidas.frio);
console.log(gato.otros.amigos[1]);

// Encedenamiento opcional
console.log(gato.otros.favorito?.comidas.frio);
