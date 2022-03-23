// You are given an integer array a that contains only digits 0-9.
// Remove all zeros from the start and end of a.

// It is guaranteed that array a has at least two non-zero elements.

// Example
// For a = [0, 9, 0, 4], -> the output should be [9, 0, 4].
// For a = [0, 9, 5, 0, 0, 0, 0, 2, 0, 0], -> the output should be [9, 5, 0, 0, 0, 0, 2].
// For a = [1, 6, 0, 2], -> the output should be [1, 6, 0, 2].

console.log("Removing zeros from de start and the end ...");

// let a = [0, 9, 0, 4];
let a = [0, 0, 9, 5, 0, 0, 0, 0, 2, 0, 0, 5, 0, 0, 0];
// let a = [1, 6, 0, 2];

removeZeros = (a) => {
  let out = [];
  zeroCutter = (a) => {
    let count = 0;
    for (let i = 0; i < a.length; i++) {
      if (a[i] === 0) {
        count++;
      } else {
        break;
      }
    }
    
    return a.slice(count);
  };

  out = zeroCutter(zeroCutter(a).reverse()).reverse();

  return out;
};

console.log(removeZeros(a));
