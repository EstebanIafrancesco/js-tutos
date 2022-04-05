console.log('Select aleatory running...');
console.log();

let arr = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

function selectAleatory(arr){
    return arr[Math.floor(Math.random()*arr.length)];
}


console.log(selectAleatory(arr));