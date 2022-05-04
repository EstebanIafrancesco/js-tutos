console.log("Key value extractor...");

let ob1 = {
  id: 6,
  id_ano: 2,
  id_tema: 4,
  id_indicador: 22,
  cod_divipola: "02021",
  nombre_divipola: "Total 86 municipios",
  id_categoria: 124,
  categoria: "De organizaciones religiosas",
  value: 467,
  porcentaje: 20.2,
};

let keys = Object.keys(ob1);
let values = Object.values(ob1);
let entries = Object.entries(ob1);

// console.table(keys);
// console.table(values);
// console.table(entries);

// console.log(ob1);

function valueRetriever(obj, keyIn) {
  // take the object and see if there is a category with the same name
    
    return 'The category ' + keyIn + mesagge; 
}

console.log(valueRetriever(ob1, 'categoria'));
