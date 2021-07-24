// Codigo del cuadrado
console.group()
const ladoCuadrado = 5;

const perimetroCuadrado = ladoCuadrado * 4;

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.groupEnd();

// Codigo del triangulo
console.group()
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.groupEnd();

// Codigo del circulo
console.group()

// Radio
const radioCirculo = 4;
// Diámetro
const diametroCirculo = radioCirculo * 2;

// PI
const PI = Math.PI;

// Circunferencia
const perimetroCuadrado = diametroCirculo * PI;

// Área
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.groupEnd();
