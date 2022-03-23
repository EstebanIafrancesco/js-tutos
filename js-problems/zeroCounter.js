let a = [0,0,2,0,5,0,0,0,0,0,6,4];

zeroCounter = (arr) => {
    let counter = 0;
    arr.forEach(el => el === 0 ? counter++ : counter);
    return counter;
}

console.log(zeroCounter(a));