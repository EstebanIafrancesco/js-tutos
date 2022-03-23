let mensaje = 'Colombia tierra querida himno de fe y alegría';

let mensajeVolteado = mensaje.split(' ')
    .map(word => word.split('').reverse().join(''))
    .join(' ');


console.log(mensajeVolteado);