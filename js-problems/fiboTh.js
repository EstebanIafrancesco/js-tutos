// I love Fibonacci numbers in general, but I must admit I love some more than others.

// I would like for you to write me a function that when given a number (n) returns the
// n-th number in the Fibonacci Sequence.

// For example:
function nthFibo(n) {
  let fiboBase = [0, 1];
  for (let i = 2; i < n; i++) {
    fiboBase.push(fiboBase[i - 1] + fiboBase[i - 2]);
  }
  return fiboBase[n-1];
}

console.log(nthFibo(4));
