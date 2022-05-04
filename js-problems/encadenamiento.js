// objetos profundamente anidados

const persona = {
    nombre: 'Esteban',
    pais: 'Colombia',
    edad: 39,
    lenguajes: {
        javascript: true,
        php: false,
        angular: {
            js: true,
            ng: false
        },
    },
    saludar(){
        return 'hi =)';
    }
}
// if (persona.lenguajes) {
//     console.log(persona.lenguajes.javascript);
// }else{
//     console.log(undefined);
// }

// const resultado = persona.lenguajes ? persona.lenguajes.javascript : undefined; 



console.log(persona.lenguajes?.angular.ng);