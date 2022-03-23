/* 
Write an algorithm that takes an array and moves all of the zeros to the end, preserving 
the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0] 
*/
let arr = [false, 1, 0, 1, 2, 0, 1, 3, "a"];

function moveZeros(arr) {
  let arrNoZ = [];
  let arrZ = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arrZ.push(0);
    } else {
      arrNoZ.push(arr[i]);
    }
  }

  return arrNoZ.concat(arrZ);
}

console.log(moveZeros(arr));
