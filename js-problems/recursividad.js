console.log();
console.log('Usando recursividad ...');
let cont = [];
let min = 77;
function aleatorio(){
    let num = Math.floor(Math.random()*100);
    if (cont.length < min) {
        cont.push(num);
        aleatorio();
    }
}

aleatorio();

console.log(cont);
