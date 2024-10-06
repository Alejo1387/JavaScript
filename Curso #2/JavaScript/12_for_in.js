const gato = {
    nombre : "Michu",
    duerme : true,
    edad : 4,
    enemigos : ["Agua", "Perros"]
}

for (let iterador in gato) {
    console.log(gato[iterador]);
}
console.log("");
// otra forma de iterar
console.log(Object.values(gato));
console.log("");
// otra forma de iterar
Object.values(gato).forEach((item) => console.log(item));
console.log("");



const nombreUsu = "Alejandro";

for (let iterador in nombreUsu) {
    console.log(nombreUsu[iterador]);
}