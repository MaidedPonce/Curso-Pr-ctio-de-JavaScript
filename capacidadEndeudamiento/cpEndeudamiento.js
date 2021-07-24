function calcularCPEMin(ingresos, gastos) {
    const ingNeto = ingresos - gastos;

    const treintaPorciento = (ingNeto * 30) / 100;
    return treintaPorciento;
}

function calcularCPEMax(ingresos, gastos) {
    const ingNeto = ingresos - gastos;

    const cuarentaPorciento = (ingNeto * 40) / 100;
    return cuarentaPorciento;
}

function cpEndeudamiento() {
    const inputIngreso = document.getElementById('inputIngresos');
    const valueIng = inputIngreso.value;

    const inputGasto = document.getElementById('inputGastos');
    const valueGasto = inputGasto.value;

    const inputminMax = document.getElementById('minMax');
    const valueminMax = inputminMax.value;

    const validate = valueminMax == '40' ? calcularCPEMax(valueIng, valueGasto) : null;
    const validate2 = valueminMax == '30' ? calcularCPEMin(valueIng, valueGasto) : validate;
    const calcular = validate2;

    const paint = document.getElementById('result');
    paint.innerText = calcular == null ? 'Ingrese 30 o 40' : `Tu capacidad mínima de endeudamiento es de ${calcular}`;
}
