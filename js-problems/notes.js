// Se quiere realizar un programa que lea por teclado las 5 notas obtenidas por un alumno
// (comprendidas entre 0 y 10). A continuación debe mostrar todas las notas, la nota media,
// la nota más alta que ha sacado y la menor.

// Introducir valores de 5 notas por teclado entre 0 y 10
var notes = [];
var regNumb = /^[0-9]*$/;

for (let i = 1; i <= 5; i++) {
  let currentNote = prompt("Introduce the note number: " + i, "Note");
  console.log(i);
  if (!regNumb.test(currentNote)) {
    alert("Note should be a number between 1 to 10 ");
    i--;
  } else {
    notes.push(parseInt(currentNote));
  }
}

console.log(notes);
