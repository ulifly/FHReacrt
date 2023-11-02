const nombre = 'Ulises';
const apellido = 'Desentis';

let nombreCompleto = `${nombre} ${apellido}
${1 + 2}`;

console.log(nombreCompleto);

function getSaludo(nombre) {
    return 'bonjour pedazo de zoquetes ' + nombre + '  🥸';
}
console.log(`Willie dice: ${ getSaludo(nombre) }`);