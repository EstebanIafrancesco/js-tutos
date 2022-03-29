function decToBinary(dec) {

  let digits = [];
  while (dec > 0) {
    digits.push(dec % 2);
    dec = Math.floor(dec / 2);
  }
  return Number(digits.reverse().join(""));
}

console.log(decToBinary(321));



module.exports = {
  decToBinary: decToBinary,
};
