function calcularMediaArmonica (lista) {
    
    const newArray = []
    lista.forEach(element => {
        const result = 1 / element;
        newArray.push(result)
    });
    
    const sumarNumeros = newArray.reduce((valorAcumulado = 0, elemento) => {
        return valorAcumulado + elemento;
    })

    const operacion = newArray.length / sumarNumeros;

    return operacion;
}