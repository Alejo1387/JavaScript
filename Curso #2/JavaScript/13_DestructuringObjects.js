const edad = 3;

// froma simple
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

/*    Foema normal    */
const nombreGato = gato.nombre;
console.log(nombreGato);
console.log();

/*    Con desestructuracion de objetos    */
const {nombre} = gato;
console.log(nombre);
console.log();

/*    Alias    */
const {edad : edadGato} = gato;
console.log(edadGato);
console.log();

/*    Por defecto    */
const {comida = "No existe esta variable"} = gato;
console.log(comida);
console.log();

/*    Con objetos anidados    */

// Primer ejemplo
const {amigos : amigosGato} = gato.otros;
console.log(amigosGato);
console.log();

//Segundo ejemplo
const { otros : {amigos : amigosGato2}} = gato;
console.log(amigosGato2);
console.log();

// Tercer ejemplo
const { otros : {favoritos : {comidas : {caliente : comidaCaliente}}}} = gato;
console.log(comidaCaliente);
console.log();

/*      desestructuracion de arrays      */
const [amigoUno, amigoDos, amigoTres, amigoCuatro = "No existe"] = gato.otros.amigos;
console.log(amigoDos);
console.log(amigoTres);
console.log(amigoCuatro);