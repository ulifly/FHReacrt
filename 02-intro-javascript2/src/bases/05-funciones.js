// funciones en js

/* function saludar(nombre){
    return`Hola ${nombre}`;
}
*/

// es mejor poner las funciones en una constante

const saludar = function ( nombre ) {
    return `Hola ${nombre}`;
};

const saludar2 = (nombre) => {
    return `Hola ${nombre}`;
};

const saludar3 = (nombre) => `Hola ${nombre}`;

const saludar4 = () => `Hola tarola`;


console.log(saludar("Ulises"));
console.log(saludar2("Ulises"));
console.log(saludar3("Ulises"));
console.log(saludar4());

const getUser = () => { 
    return { 
        id: 1123, 
        nombre: "Ulises", 
    }; 
};

console.log(getUser());

//Tarea
//1. transformar a una función flecha
//2. tiene que retornar un objeto implícito
//3. pruebas

function getActiveUser(nombre) {
    return {
        UID: 'SDT253',
        userName: nombre,
    }
};

const getActiveUser2 = (nombre) => (
    {
        UID: 'SDT253',
        userName: nombre,
    }
    );


const usuarioActivo = getActiveUser('Ulifly');
console.log(usuarioActivo);

const usuarioActivo2 = getActiveUser2('cara de mono');
console.log(usuarioActivo2);;