let arreglo = [

    {   "id": 1,   "id_ano": 2,   "id_tema": 5,   "id_indicador": 27,   "cod_divipola": "02021",   "nombre_divipola": "Total 86 municipios",   "id_categoria": 142,   "categoria": "Si teme por su vida",   "value": 2463,   "porcentaje": 46.1 },
    {   "id": 2,   "id_ano": 2,   "id_tema": 5,   "id_indicador": 27,   "cod_divipola": "02021",   "nombre_divipola": "Total 86 municipios",   "id_categoria": 143,   "categoria": "No temen por su vida",   "value": 2877,   "porcentaje": 53.9 },
    {   "id": 2,   "id_ano": 2,   "id_tema": 5,   "id_indicador": 28,   "cod_divipola": "02021",   "nombre_divipola": "Total 86 municipios",   "id_categoria": 145,   "categoria": "Persecusión por integrantes de una olla",   "value": 730,   "porcentaje": 32 },
    {   "id": 3,   "id_ano": 2,   "id_tema": 5,   "id_indicador": 28,   "cod_divipola": "02021",   "nombre_divipola": "Total 86 municipios",   "id_categoria": 146,   "categoria": "Ser forzado a cumplir con tareas en contra de su voluntad",   "value": 371,   "porcentaje": 16.3 },
    {   "id": 4,   "id_ano": 2,   "id_tema": 5,   "id_indicador": 28,   "cod_divipola": "02021",   "nombre_divipola": "Total 86 municipios",   "id_categoria": 147,   "categoria": "Abuso policial",   "value": 1578,   "porcentaje": 69.3 },
    {   "id": 5,   "id_ano": 2,   "id_tema": 5,   "id_indicador": 28,   "cod_divipola": "02021",   "nombre_divipola": "Total 86 municipios",   "id_categoria": 148,   "categoria": "Problemas con grupos juveniles (barras bravas. calvos)",   "value": 357,   "porcentaje": 15.7 },
    {   "id": 6,   "id_ano": 2,   "id_tema": 5,   "id_indicador": 28,   "cod_divipola": "02021",   "nombre_divipola": "Total 86 municipios",   "id_categoria": 149,   "categoria": "Problemas con la comunidad",   "value": 352,   "porcentaje": 15.5 },
    {   "id": 7,   "id_ano": 2,   "id_tema": 5,   "id_indicador": 28,   "cod_divipola": "02021",   "nombre_divipola": "Total 86 municipios",   "id_categoria": 150,   "categoria": "Otra situación",   "value": 132,   "porcentaje": 5.8 },
    {   "id": 2,   "id_ano": 2,   "id_tema": 5,   "id_indicador": 29,   "cod_divipola": "02021",   "nombre_divipola": "Total 86 municipios",   "id_categoria": 152,   "categoria": "Golpes",   "value": 968,   "porcentaje": 52.3 },
    {   "id": 3,   "id_ano": 2,   "id_tema": 5,   "id_indicador": 29,   "cod_divipola": "02021",   "nombre_divipola": "Total 86 municipios",   "id_categoria": 153,   "categoria": "Disparos",   "value": 193,   "porcentaje": 10.4 },
    {   "id": 4,   "id_ano": 2,   "id_tema": 5,   "id_indicador": 29,   "cod_divipola": "02021",   "nombre_divipola": "Total 86 municipios",   "id_categoria": 154,   "categoria": "Arma blanca",   "value": 465,   "porcentaje": 25.1 },
    {   "id": 5,   "id_ano": 2,   "id_tema": 5,   "id_indicador": 29,   "cod_divipola": "02021",   "nombre_divipola": "Total 86 municipios",   "id_categoria": 155,   "categoria": "Amenazas",   "value": 707,   "porcentaje": 38.2 },
    {   "id": 6,   "id_ano": 2,   "id_tema": 5,   "id_indicador": 29,   "cod_divipola": "02021",   "nombre_divipola": "Total 86 municipios",   "id_categoria": 156,   "categoria": "Insultos",   "value": 1229,   "porcentaje": 66.4 }
  
  ];
  let totales = [];
  let arregloFiltrado = arreglo.map(el => el.id_indicador === 28? totales.push(el) : totales);

//   console.log(totales);

  let a = arreglo.filter(el => el.id_indicador === 27);

  console.log(a);