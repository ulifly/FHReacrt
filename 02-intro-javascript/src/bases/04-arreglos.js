
//const Arreglo = new Array(100);

const Arreglo = [1,2,3,4];

//Arreglo.push(1);
//Arreglo.push(2);
//Arreglo.push(3);

let arreglo2 = [...Arreglo, 5];
const arreglo3 = arreglo2.map( function (n) {
    return n * 2 
});

console.log(arreglo2);
console.log(arreglo3);