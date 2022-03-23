// By Esteban Iafrancesco
// 10-02-2022

const enunciado =
  "Demostración de que en un grupo de 60 personas la probabilidad de que haya dos iguales es del mas de 99%";
console.log("Coding running... ");
// console.log(enunciado);

// función para calcular números aleatorios entre 1 y 365

function aleatory(n) {
  return Math.round(Math.random() * n);
}



// console.log(aleatory(365));

// funcion de calcular 60 números aleatorios entre 1 y 365
let sample = [];
for (let i = 0; i < 20; i++) {
  sample.push(aleatory(365));
}
// console.log(sample);

// funcion de verificar si se repite algún número en el arreglo --> true
function duplicated(n){
    
    let out = 0;
    let verify = n.sort();
    for (let i = 0; i < verify.length; i++) {
        if (verify[i-1] === verify[i]) {
            out++;
        }else{
            out = out;
        }
    }
    return out;
}


// console.log("la afirmación es ..." + duplicated(sample));

/* funcion para verificar cuantas veces es verdadera la función anterior 
en 100 iteraciones, esto debe arrojar un porcentaje */
let count = 0;
for (let i = 0; i < 100; i++) {
    if (duplicated(sample) >0) {
        count++;
    }else{
        count = count;
    };
}
let mensaje = 'La probabilidad en una muestra de 100 fue de ' + count + '%';

console.log(mensaje);


//// VERIFICAR MEJOR LOS RESULTADOS USANDO debbugger ojooooo!!