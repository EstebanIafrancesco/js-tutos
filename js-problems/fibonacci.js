// function that returns a fibonacci series
// the series works like this 0,1,1,2,3,5,8,13,21,34,55,89.....
let fiboSeed = [0,1];

function fibonacci(n){
    for (let i = 2; i <= n; i++) {
        fiboSeed.push(fiboSeed[i-1]+fiboSeed[i-2]);
    }
    return fiboSeed;
}

// console.table(fibonacci());

module.exports = {
    fibonacci:fibonacci
}