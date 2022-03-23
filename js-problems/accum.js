// Write a function that performs the following logic
// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

console.log("Rolling function ...");

let base = "HbideVbxncC";
let basediv = base
  .split("")
  .map((el, i) => {
    return el.toUpperCase() + el.repeat(i).toLowerCase();
  })
  .join("-");

console.log('input  -->  ' + base);
console.log('output -->  ' + basediv);
