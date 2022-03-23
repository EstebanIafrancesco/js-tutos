const op = require("./b");
const rdm = require("./random-generator");

function message() {
    return 'La operación que has hecho es: ' ;
  }
let nums = rdm.random(55);
console.log(nums[4]);
console.log(nums[9]);
console.log(message());

console.log(op.sumar(nums[4],nums[9]));
console.log(op.restar(nums[4],nums[9]));
console.log(op.multiplicar(nums[4],nums[9]));
console.log(op.dividir(nums[4],nums[9]));