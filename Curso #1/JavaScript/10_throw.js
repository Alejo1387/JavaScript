function dividir(a, b) {
    if (b===0) {
        throw new Error("No se puede dividir por cero")
    }
    console.log(a/b)
}

dividir(3, 0)