
// desestructuraciòn o asignación desestructurante


const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45
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