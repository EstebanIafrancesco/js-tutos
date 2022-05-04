let deepArr = [[3,5],1,2,3,4,[5,6,[7,8,[9,0],[2]]]];

// let deepArr = ['hola', 'como', ['estas', 'mi'],['pez', ['de', 'mar']]];

// console.log(Array.isArray(deepArr.flat().flat().flat().flat()));
// console.log(deepArr.flat().flat().flat().flat());

function flattenedArr(arr){
    return arr.reduce((acc, cur) => Array.isArray(cur) ? acc.concat(flattenedArr(cur)) : acc.concat(cur), []);
}

const flatArr = flattenedArr(deepArr);

console.log(flatArr);