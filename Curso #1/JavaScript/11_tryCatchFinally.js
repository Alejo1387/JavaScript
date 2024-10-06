try {
    let result = 10/0;
    console.log(result);
} catch(error) {
    console.log("Error capturado: ", error);
} finally {
    console.log("Este bloque siempre se ejecuta");
}
