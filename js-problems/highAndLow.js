// In this little assignment you are given a string of space separated numbers, and have to
// return the highest and lowest number.

// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"

function highAndLow(numbers) {
  // convertir en un arreglo numerico
  // ordenar arreglo
  // retornar primero y ultimo valor del arreglo
  let sortNumb = numbers.split(' ').sort();
  let output = [];
  output.push(Number(sortNumb.pop()));
  output.push(Number(sortNumb[0]));
  return String(output.join(' '));
  // return (Number(sortNumb.pop()), Number(sortNumb[0]));
  // return {
  //   mayor: Number(sortNumb.pop()),
  //   menor: Number(sortNumb[0]),
  // };
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")); // return "9 -5"
