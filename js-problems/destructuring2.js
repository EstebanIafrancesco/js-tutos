console.log('destructuring...');

let alphabet = ['A','B','C','D','E'];
let numbers = [1,2,3,4,5,6];

const [a,b] = numbers;
// console.log(a);
// console.log(b);


function sumMult(a, b){
    return [a+b, a*b, a/b];
}

const [sum, mult = 'no hay ninguna multi miijo', div = 'Non divition']  = sumMult(5,6);

// console.log(sum);
// console.log(mult);
// console.log(div);


const person = {
    name : 'Esteban',
    lastname : 'Iafrancesco',
    address : {
        street: 38,
        avenue :'El dorado'
    }
}
const person2 = {
    name : 'Mario',
    lastname : 'Bros',
    address : {
        street: 100,
        avenue :'El hongo'
    }
}


const {name: firstname, lastname, age = 18, address: {street} } = person2;

console.log(firstname);
console.log(lastname);
console.log(street);
