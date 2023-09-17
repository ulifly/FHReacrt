
const saludar = function (nombre) {
    return(`hola ${nombre}!`);
}

const saludar2 = (nombre) =>  {
    return(`hola ${nombre}!`);
}

const saludar3 = (nombre) =>  `hola ${nombre}!`;

const saludar4 = ()=> {
  return 'Bonjour bola de zoquetes'
}

console.log(saludar('Ulises'));
console.log(saludar2('Ulifly'));
console.log(saludar3('Renee'));
console.log(saludar4());

const getUser = () => 
({
  UID: 'ABC123',
  username: 'XXXXXX'
});

const user = (getUser());
console.log(user);

function getUsuarioActivo(nombre) {
  return {
    uid: 'ABC567',
    username: nombre
  };
}

const usuarioActivo = getUsuarioActivo('Ares');
console.log(usuarioActivo);


const getUsuarioActivo2 = (nombre) => ({
  uid: 'ABC567',
  username: nombre
});

const usuarioActivo2 = getUsuarioActivo2('Oscar');
console.log(usuarioActivo2);