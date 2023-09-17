
const nombre = 'Ulifly';    
const apellido = 'Desentis';

const nombreCompleto = `${ nombre } ${ apellido }`;

console.log(nombreCompleto);

function saludar(nombre) {
  return 'Bonjour bola de zoquetes' +' ' + nombre;
}

console.log(`desde React ${saludar(nombre)}`);