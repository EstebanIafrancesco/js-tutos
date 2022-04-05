// Write a function that takes a list of strings as an argument and returns a filtered list containing 
// the same elements but with the 'geese' removed.

// The geese are any strings in the following array, which is pre-populated in your solution:

//   ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
// For example, if this array were passed as an argument:

//  ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
// Your function would return the following array:

// ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]

// The elements in the returned array should be in the same order as in the initial array passed to your 
// function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those 
// provided, and some elements may be repeated.
let birds = ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"];

function gooseFilter (birds) {
    let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    // let geese = ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"];
    // console.log(birds);
    // console.log(geese);

    let filteredBirds = [...birds];
    // let iterate the elements of geese to see if they are in birds

    geese.map(g => {
        filteredBirds.map((b, index) => {
            b === g ? filteredBirds.splice(index, 1) : filteredBirds;
        });
    });

    return filteredBirds;
  }

console.log(gooseFilter(birds));
