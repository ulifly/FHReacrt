const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,   
    direccion: {
        ciudad: 'New York',
        zip: 52525252,
        lat: 14.5,
        lng: -12.5
    }
};

//console.table( persona );

const persona2 = { ...persona };
persona2.nombre = 'Peter';

console.log( persona );
console.log( persona2 );