
// desestructuraciòn o asignación desestructurante


const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    clave: 'Ironman'
}

// de esta forma se puede desestructurar un objeto, en este caso se hace implícita la asignación a la variable
// es decir la variable nombre corresponde a la clave nombre en el objeto desestructurado 
const {nombre, apellido, edad} = persona   

console.log(nombre, apellido, edad);

//si la variable no esta disponible en el scope o se desea usar otra variable se puede
// asignar otro nombre de variable en el desestructurante 
const {nombre: nombrePersona, apellido: apellidoPersona, edad: edadPersona} = persona 

console.log(nombrePersona, apellidoPersona, edadPersona);

// también se pude hacer desestruturacion en una función

const retornaUsuario = (usuario) => {

    const { edad, apellido, nombre } = usuario
    console.log( edad, apellido, nombre);

}

retornaUsuario  ( persona );

//también podemos hacer la desestructuracion directamente en los 
//argumentos de la función 

const retornaUsuario2 = ({ nombre, apellido, }) => {
    console.log(nombre, apellido);
}

retornaUsuario2 ( persona );

let a, b, rest;

[a, b] = [10, 20];

console.log(a);
console.log(b);

[a, b, ...rest] = [10, 20, 30, 40, 50, 60, 70];

console.log(rest);


//se puede pasar un valor por defecto si es que el objeto no contiene ese valor
//en el siguiente ejemplo se pasa un valor por defecto en caso de que el objeto no contenga la clave rango

const retornaUsuario3 = ({ nombre, apellido, rango = 'soldado razo' }) => {
    console.log(nombre, apellido, rango);

}

retornaUsuario3(persona);


//ejercicio

const usexContext = ({ clave, nombre, edad, rango }) => {
    return {
        nombreClave: clave,
        anios: edad,
    }
}

const {nombreClave, anios} = usexContext(persona);

console.log(nombreClave, anios);

//desestructuracion anidada
// se pueden desestructurar objetos dentro de objetos


const retornaUsuario4 = ({ nombre, apellido, edad, rango,}) => {

    return {
        nombreUsuario: nombre,
        edadUsuario: edad,
        apellidoUsuario: apellido,
        direccion: { 
            calle: 'av siempre viva', 
            pais: 'Estados unidos', 
            ciudad: 'New York',
         } 
    }
}

const { nombreUsuario, apellidoUsuario, direccion: {pais, ciudad}  } = retornaUsuario4(persona);
console.log(nombreUsuario, apellidoUsuario);
console.log(pais, ciudad);