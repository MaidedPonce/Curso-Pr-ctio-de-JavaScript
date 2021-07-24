function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

function diametroCirculo(radio) {
    return radio *2
}

function perimetroCirculo(radio) {
    const PI = Math.PI;
    const diametro = diametroCirculo(radio)
    return diametro * PI;
}

function areaCirculo(radio) {
    const PI = Math.PI;
    return (radio * radio) * PI;
}

function alturaIsoceles(a, b) {
    const hipotenusa = Math.pow(a, 2);
    const cateto = b /2;
    const catetoCuadrado = Math.pow(cateto, 2)

    const operation = Math.sqrt(hipotenusa - catetoCuadrado)

    return operation;
}
function calcularPerimetroCuadrado() {
    const input = document.getElementById('InputCuadrado');
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    if(!value) {
        return null;
    }
    const element = document.createElement('p');
    element.innerText = perimetro;
    const read = document.getElementById('containerCuadrado');
    read.appendChild(element)
}

function calcularAreaCuadrado(){
    const input = document.getElementById('InputCuadrado');
    const value = input.value;
    if(!value){
        return null;
    }

    const area = areaCuadrado(value);
    
    const element = document.createElement('p');
    element.innerHTML = (area);

    const read = document.getElementById('containerCuadrado');
    read.appendChild(element)
}

function calcularperimetroTriangulo() {
    const inputlado = document.getElementById('ladoTriangulo1');
    const valuelado = Number(inputlado.value);

    const inputlado2 = document.getElementById('ladoTriangulo2');
    const valuelado2 = Number(inputlado2.value);

    const inputBase = document.getElementById('baseTriangulo');
    const valueBase = Number(inputBase.value);

    const perimetro = perimetroTriangulo(valuelado, valuelado2, valueBase);


    if(!valuelado || !valuelado2 || !valueBase){
        return null;
    }
    
    const element = document.createElement('p');
    element.innerHTML = perimetro;

    const read = document.getElementById('containerTriangulo');
    read.appendChild(element);
}

function calcularAreaTriangulo() {
    const input = document.getElementById('baseTriangulo');
    const value = input.value;

    const input2 = document.getElementById('alturaTriangulo')
    const value2 = input2.value;

    const area = areaTriangulo(value, value2);

    if(!value || !value2){
        return null;
    }

    const element = document.createElement('p');
    element.innerHTML = area;

    const read = document.getElementById('containerTriangulo');
    read.appendChild(element)
}

function calcularAreaCirculo() {
    const input = document.getElementById('radio');
    const value = input.value;

    const area = areaCirculo(value);
    
    if(!value) {
        return null;
    }
    const element = document.createElement('p');
    element.innerHTML = area;

    const read = document.getElementById('containerCirculo');
    read.appendChild(element)
}

function calcularPerimetroCirculo() {
    const input = document.getElementById('radio')
    const value = input.value;

    const perimetro = perimetroCirculo(value);

    if(!value) {
        return null;
    }
    const element = document.createElement('p');
    element.innerHTML = perimetro;

    const read = document.getElementById('containerCirculo');
    read.appendChild(element)
}

function calcularAlturaIsoceles() {
    const input = document.getElementById('isocelesHip');
    const value = input.value;

    const input2 = document.getElementById('isocelesCat');
    const value2 = input2.value;

    const altura = alturaIsoceles(value, value2);

    if(!value || !value2) {
        return null;
    }
    const element = document.createElement('p');
    element.innerHTML = altura;

    const read = document.getElementById('containerIsoceles');
    read.appendChild(element)
}

