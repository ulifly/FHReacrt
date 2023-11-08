

// se puede hacer una desestructuración de un array de la siguiente forma

const personajesDb = ['Goku', 'Vegeta', 'Trunks'];

const [ pers1 ] = personajesDb

console.log(pers1);

// si queremos tomar una valor de una posición diferente a la posición 0
// debemos agregar las comas necesarias hasta la posición deseada
// en el siguiente ejemplo tomaremos la posición 2 del array 
// osea el 3er dato (recordemos que los array empiezan en la posición 0)

const [ , , personaje3 ] = personajesDb // nótese como aquí hay 2 comas para brincar 2 espacios en el array
console.log(personaje3);

// también podemos hacer desestructuración de una función que regresa un arreglo 

const retornaArreglo = () => {
    return [ 'ABC', 123];
}

const [ letras, numero ] = retornaArreglo();

console.log(letras, numero);

//se pueden llamar funciones dentro de un array con desestructuración 

const loco = ( valor ) => {
    return [ valor, () => { console.log('Hola Mundo') } ];
}

const arr = loco ( 'Goku' );

arr[1]() //aquí estamos diciendo que ejecute la función en la posición 1 del array

// es mas recomendable hacerlo de la siguiente forma

const [ nombre, funcionx ] = loco ( 'Goku' );

console.log(nombre);
funcionx();