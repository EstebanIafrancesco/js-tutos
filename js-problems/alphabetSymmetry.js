/*
    Consider the word "abode". We can see that the letter a is in position 1 and b is in position 2. 
    In the alphabet, a and b are also in positions 1 and 2. Notice also that d and e in abode occupy 
    the positions they would occupy in the alphabet, which are positions 4 and 5.
    Given an array of words, return an array of the number of letters that occupy their positions in 
    the alphabet for each word. For example,
    solve(["abode","ABc","xyzD"]) = [4, 3, 1]
    See test cases for more examples.
    Input will consist of alphabet characters, both uppercase and lowercase. No spaces.
*/

console.log('Alphabet symmetry running ...');
let arr = ["abode","ABc","xyzD"];
let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];


// convert the imput elements into lowercase and string
let lower = arr.map(el => {
    return el.toLowerCase();
});
console.log(lower);

// separate the array into individual arrays

let arrSep = lower.map(el => {
    return Array.from(el);
});
console.log(arrSep);

// compare every element of the array of arrays
let ans = [];
let compare = arrSep.map(el => {
    return el.map(e => {
        let count = 0;
        for (let i = 0; i < e.length; i++) {
          e[i] === alphabet[i] ? count++ : count;
        }
        return count;
    });
});

console.log(compare);



function solve(arr){  
    // return 'hello'; 
};

// console.log(solve(arr));