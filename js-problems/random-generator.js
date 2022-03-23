function random(n) {
  let arrayRandom = [];
  for (let i = 0; i < n; i++) {
    arrayRandom.push(Math.floor(Math.random() * n));
  }
  return arrayRandom;
}

// to generate a par of random numbers in a specific range
function rand2(a,b){
    
}
// console.table(random(22));
module.exports = {
  random: random,
};
