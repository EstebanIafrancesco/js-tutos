// In this simple Kata your task is to create a function that turns a string into a Mexican Wave. 
// You will be passed a string and you must return that string in an array where an uppercase letter
// is a person standing up. 

// Example
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

let str = "Hola";
let result = [];
for (let i = 0; i < str.length; i++) {
    let word = str.toLowerCase();
    result.push(word);
}
let resultWaved = result.map((el, index) => {
    return el.replace(charA);
});



console.log(resultWaved);
