const arr = require("./fibonacci");
const binary = require("./decToBinary");

// fuction that converts numbers of any array of decimal numbers into it's binary version
console.time();
const arrayOfFibo = arr.fibonacci(12);
const out = arrayOfFibo.map((el) => {
    return { fibonacci_series: el, binary_equivalent: binary.decToBinary(el) };
});


console.table(out);
console.timeEnd();
