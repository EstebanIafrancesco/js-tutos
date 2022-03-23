// Realizar un programa que defina un vector llamado “vector_numeros” de 10 enteros, a continuación lo inicialice con valores aleatorios
// (del 1 al 10) y posteriormente muestre en pantalla cada elemento del vector junto con su cuadrado y su cubo.

// definir vector

let vector_numeros = Array(10).fill(1);

// llenar el vector con 10 valores aleatorios

const basicNumbers = vector_numeros.map(
   (el) => el * Math.round(10 * Math.random())
);

// calcular cuadrados y cubos
const basicNumbersSq = basicNumbers.map(el => el * el);
const basicNumbersCub = basicNumbers.map(el => el * el * el);
// console.log(vector_numeros);
// console.log(basicNumbers);
// console.log(basicNumbersSq);
// console.log(basicNumbersCub);
let arregloNumeros = [];

// Construir objetos de numeros con su base, cuadrado y cubo
for (let i = 0; i < 10; i++) {
  let numSqrCub = {
    numeroBase : basicNumbers[i],
    numeroAlCuadrado : basicNumbersSq[i],
    numeroAlCubo : basicNumbersCub[i],
  }
  arregloNumeros.push(numSqrCub);
  // console.log(numSqrCub);
  console.log('El número que tengo es: ' +  numSqrCub.numeroBase + ', su cuadrado es: ' + numSqrCub.numeroAlCuadrado + ' y su cubo es: ' + numSqrCub.numeroAlCubo + '.')
}

console.log(arregloNumeros.filter(el => el.numeroBase < 5 && el.numeroAlCubo < 50));



