const input = "Hello how are you doing today";
// output = "ehT ssarg si ton reneerg no eht rehto edis"
console.log(input);
// convert to an array the string
let sep = " ";
let notSep = "";
let union = "";
const inputSeparated = input.split(sep);
// console.log(inputSeparated);

// reverse every word in the array 
const reversed = inputSeparated.map((el) =>{
  let words = el.split(union);
  return words.reverse().join(union);
});

// print the string reversed
console.log(reversed.join(sep));
