const data = [
    {"id":1,"id_ano":2,"id_tema":1,"id_indicador":3,"cod_divipola":"02021","nombre_divipola":"Total 86 municipios","id_categoria":5,"categoria":"0 a 4  años","value":3,"porcentaje":0,"id_subcategoria":[1,2],"subcategoria":["Hombres","Mujeres"],"value_hombres":3,"porc_hombres":0,"value_mujeres":0,"porc_mujeres":0},
    {"id":2,"id_ano":2,"id_tema":1,"id_indicador":3,"cod_divipola":"02021","nombre_divipola":"Total 86 municipios","id_categoria":6,"categoria":"5 a 9 años","value":12,"porcentaje":0,"id_subcategoria":[1,2],"subcategoria":["Hombres","Mujeres"],"value_hombres":8,"porc_hombres":0,"value_mujeres":4,"porc_mujeres":0},
    {"id":3,"id_ano":2,"id_tema":1,"id_indicador":3,"cod_divipola":"02021","nombre_divipola":"Total 86 municipios","id_categoria":7,"categoria":"10 a 14 años","value":24,"porcentaje":0,"id_subcategoria":[1,2],"subcategoria":["Hombres","Mujeres"],"value_hombres":19,"porc_hombres":0,"value_mujeres":5,"porc_mujeres":0},
    {"id":4,"id_ano":2,"id_tema":1,"id_indicador":3,"cod_divipola":"02021","nombre_divipola":"Total 86 municipios","id_categoria":8,"categoria":"15 a 19 años","value":188,"porcentaje":0,"id_subcategoria":[1,2],"subcategoria":["Hombres","Mujeres"],"value_hombres":143,"porc_hombres":0,"value_mujeres":45,"porc_mujeres":0},
    {"id":5,"id_ano":2,"id_tema":1,"id_indicador":3,"cod_divipola":"02021","nombre_divipola":"Total 86 municipios","id_categoria":9,"categoria":"20 a 24 años","value":579,"porcentaje":0,"id_subcategoria":[1,2],"subcategoria":["Hombres","Mujeres"],"value_hombres":487,"porc_hombres":0,"value_mujeres":92,"porc_mujeres":0},
    {"id":6,"id_ano":2,"id_tema":1,"id_indicador":3,"cod_divipola":"02021","nombre_divipola":"Total 86 municipios","id_categoria":10,"categoria":"25 a 29 años","value":849,"porcentaje":0,"id_subcategoria":[1,2],"subcategoria":["Hombres","Mujeres"],"value_hombres":738,"porc_hombres":0,"value_mujeres":111,"porc_mujeres":0},
    {"id":7,"id_ano":2,"id_tema":1,"id_indicador":3,"cod_divipola":"02021","nombre_divipola":"Total 86 municipios","id_categoria":11,"categoria":"30 a 34 años","value":832,"porcentaje":0,"id_subcategoria":[1,2],"subcategoria":["Hombres","Mujeres"],"value_hombres":732,"porc_hombres":0,"value_mujeres":100,"porc_mujeres":0},
    {"id":8,"id_ano":2,"id_tema":1,"id_indicador":3,"cod_divipola":"02021","nombre_divipola":"Total 86 municipios","id_categoria":12,"categoria":"35 a 39 años","value":780,"porcentaje":0,"id_subcategoria":[1,2],"subcategoria":["Hombres","Mujeres"],"value_hombres":671,"porc_hombres":0,"value_mujeres":109,"porc_mujeres":0},
    {"id":9,"id_ano":2,"id_tema":1,"id_indicador":3,"cod_divipola":"02021","nombre_divipola":"Total 86 municipios","id_categoria":13,"categoria":"40 a 44 años","value":668,"porcentaje":0,"id_subcategoria":[1,2],"subcategoria":["Hombres","Mujeres"],"value_hombres":581,"porc_hombres":0,"value_mujeres":87,"porc_mujeres":0},
    {"id":10,"id_ano":2,"id_tema":1,"id_indicador":3,"cod_divipola":"02021","nombre_divipola":"Total 86 municipios","id_categoria":14,"categoria":"45 a 49 años","value":501,"porcentaje":0,"id_subcategoria":[1,2],"subcategoria":["Hombres","Mujeres"],"value_hombres":446,"porc_hombres":0,"value_mujeres":55,"porc_mujeres":0},
    {"id":11,"id_ano":2,"id_tema":1,"id_indicador":3,"cod_divipola":"02021","nombre_divipola":"Total 86 municipios","id_categoria":15,"categoria":"50 a 54 años","value":440,"porcentaje":0,"id_subcategoria":[1,2],"subcategoria":["Hombres","Mujeres"],"value_hombres":396,"porc_hombres":0,"value_mujeres":44,"porc_mujeres":0},
    {"id":12,"id_ano":2,"id_tema":1,"id_indicador":3,"cod_divipola":"02021","nombre_divipola":"Total 86 municipios","id_categoria":16,"categoria":"55 a 59 años","value":396,"porcentaje":0,"id_subcategoria":[1,2],"subcategoria":["Hombres","Mujeres"],"value_hombres":353,"porc_hombres":0,"value_mujeres":43,"porc_mujeres":0},
    {"id":13,"id_ano":2,"id_tema":1,"id_indicador":3,"cod_divipola":"02021","nombre_divipola":"Total 86 municipios","id_categoria":17,"categoria":"60 a 64 años","value":377,"porcentaje":0,"id_subcategoria":[1,2],"subcategoria":["Hombres","Mujeres"],"value_hombres":340,"porc_hombres":0,"value_mujeres":37,"porc_mujeres":0},
    {"id":14,"id_ano":2,"id_tema":1,"id_indicador":3,"cod_divipola":"02021","nombre_divipola":"Total 86 municipios","id_categoria":18,"categoria":"65 a 69 años","value":265,"porcentaje":0,"id_subcategoria":[1,2],"subcategoria":["Hombres","Mujeres"],"value_hombres":248,"porc_hombres":0,"value_mujeres":17,"porc_mujeres":0},
    {"id":15,"id_ano":2,"id_tema":1,"id_indicador":3,"cod_divipola":"02021","nombre_divipola":"Total 86 municipios","id_categoria":19,"categoria":"70 a 74 años","value":151,"porcentaje":0,"id_subcategoria":[1,2],"subcategoria":["Hombres","Mujeres"],"value_hombres":143,"porc_hombres":0,"value_mujeres":8,"porc_mujeres":0},
    {"id":16,"id_ano":2,"id_tema":1,"id_indicador":3,"cod_divipola":"02021","nombre_divipola":"Total 86 municipios","id_categoria":20,"categoria":"75 a 79 años","value":86,"porcentaje":0,"id_subcategoria":[1,2],"subcategoria":["Hombres","Mujeres"],"value_hombres":80,"porc_hombres":0,"value_mujeres":6,"porc_mujeres":0},
    {"id":17,"id_ano":2,"id_tema":1,"id_indicador":3,"cod_divipola":"02021","nombre_divipola":"Total 86 municipios","id_categoria":21,"categoria":"80 años y más años","value":97,"porcentaje":0,"id_subcategoria":[1,2],"subcategoria":["Hombres","Mujeres"],"value_hombres":87,"porc_hombres":0,"value_mujeres":10,"porc_mujeres":0},
];

const data1 = [
    {   "id": 1,   "id_ano": 2,   "id_tema": 1,   "id_indicador": 7,   "cod_divipola": "02021",   "nombre_divipola": "Total 86 municipios",   "id_categoria": 31,   "categoria": "Indígena",   "value": 57,   "porcentaje": 1.1 },
    {   "id": 2,   "id_ano": 2,   "id_tema": 1,   "id_indicador": 7,   "cod_divipola": "02021",   "nombre_divipola": "Total 86 municipios",   "id_categoria": 32,   "categoria": "Gitano(a)  o Rrom",   "value": 2,   "porcentaje": 0 },
    {   "id": 3,   "id_ano": 2,   "id_tema": 1,   "id_indicador": 7,   "cod_divipola": "02021",   "nombre_divipola": "Total 86 municipios",   "id_categoria": 33,   "categoria": "Raizal del Archipiélago de San Andrés. Providencia y Santa Catalina",   "value": 8,   "porcentaje": 0.1 },
    {   "id": 4,   "id_ano": 2,   "id_tema": 1,   "id_indicador": 7,   "cod_divipola": "02021",   "nombre_divipola": "Total 86 municipios",   "id_categoria": 34,   "categoria": "Palenquero(a) de San Basilio",   "value": 9,   "porcentaje": 0.2 },
    {   "id": 5,   "id_ano": 2,   "id_tema": 1,   "id_indicador": 7,   "cod_divipola": "02021",   "nombre_divipola": "Total 86 municipios",   "id_categoria": 35,   "categoria": "Negro(a). Mulato(a). Afrodescendiente. Afrocolombiano(a)",   "value": 563,   "porcentaje": 10.5 },
    {   "id": 6,   "id_ano": 2,   "id_tema": 1,   "id_indicador": 7,   "cod_divipola": "02021",   "nombre_divipo  la": "Total 86 municipios",   "id_categoria": 30,   "categoria": "No pertenece al grupo etnico ",   "value": 4704,   "porcentaje": 88 },
];


let grandTotal = data1.map(el => {
    let total = [];
    total.push(el.value);
    return total;
}).flat();

let total = grandTotal.reduce((acc, cur) => acc + cur);

let totalPorcentajes = grandTotal.map(el =>{
    let totalP = [];
    console.log(((el/total)*100).toFixed(2));
    totalP.push((el/total)*100);
    return totalP;
});


console.log(grandTotal);
console.log(total);
console.log(totalPorcentajes);

