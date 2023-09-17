const persona = {
  nombre: 'Tony',
  apellido: 'Stark',
  edad: 45,
  direccion: {
    ciudad: 'New York',
    zip: '00000', 
    lat: 14.5,
    lng: -12.5
  }
}

const persona2 = { ...persona };

persona2.nombre = 'Peter';
persona2.apellido = 'Parker';
console.log(persona);
console.log(persona2);
