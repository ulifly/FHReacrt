import { getHeroesById } from "./08-imp-exp";
/*
const nuevaPromesa = new Promise((resolve, reject) => {
    setTimeout( () => {
        const personaje = getHeroesById(3);
        resolve(personaje);
        reject('No se encontro el heroe');
    }, 2000 );
})

nuevaPromesa.then( (heroe) => {
    console.log('el heroe es ', heroe);
})
.catch(err => console.warn(err) ); 

*/

const getHeroesByIdAsync = ( id ) => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            const hero = getHeroesById( id );
            
            if ( hero !== undefined )

            resolve ( hero );
            reject('No se encontró el heroe');
        },2000 )
    })

}

getHeroesByIdAsync(1)
    .then(console.log)
    .catch(console.warn);