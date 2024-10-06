const gato = {
    nombre : "Michu",
    duerme : true,
    edad : 4,
    enemigos : ["Agua", "Perros"],
    // Forma uno
    comer : function() {
        console.log("Gato comiendo");
    },
    // Forma dos
    comerDos(alimeto){
        console.log("Gato comiendo dos: "+alimeto);
        console.log(`
        // tiene metodo this para mostrar
        ${this.nombre} esta comiendo: ${alimeto}
        ${gato.nombre} esta comiendo: ${alimeto}
        `)
    },
    // funcion de flecha
    funFlecha : (alimentoo) => {
        console.log(`
        // no tiene metodo this
        ${this.nombre} esta comiendo: ${alimentoo}
        ${gato.nombre} esta comiendo: ${alimentoo}
        `)
    }
}

gato.comer();
gato.comerDos("Mirringo");
gato.funFlecha("Raton");

console.log(gato.nombre.concat(" Hola."))
