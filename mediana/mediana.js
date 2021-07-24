function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    )
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}
const lista1 = [
    100,
    200,
    500,
    400000000,
];

function esPar(numero) {
    if (numero % 2 === 0){
        return true;
    }else {
        return false;
    }
}

function ordenando(lista) {
    for(let i = lista.length; i > 0; i--) {
        if(lista[i] < lista[i - 1]) {
            const first = lista[i - 1];
            const holding = lista[i];
            lista[i - 1] = holding;
            lista[i] = first;
        } 
    }
    return lista;
}

function medianaCal(lista) {

  /* lista.sort(function(a, b) {
       return a - b;
   })
   console.log(lista)
    let mediana;*/
   const listaOrdenada = ordenando(lista)
    const mitadLista1 = parseInt(listaOrdenada.length / 2);

    if (esPar(listaOrdenada.length)) {
        const elemento1 = listaOrdenada[mitadLista1 -1];
        const elemento2 = listaOrdenada[mitadLista1];
    
        const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2])
        mediana = promedioElemento1y2;
    } else {
        mediana = listaOrdenada[mitadLista1];
    }

    return mediana;
}