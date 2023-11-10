/* eslint-disable no-unused-vars */
import heroes, { owners } from '../data/heroes';


const getHeroesById = (id) => {
    return heroes.find(item => item.id === id);
}

//console.log(getHeroesById(3));

const getHeroesByOwner = (owner) => {
    return heroes.filter(heroe => heroe.owner === owner);
}

// console.log( getHeroesByOwner( 'DC' ) );

// console.log( owners );

export { getHeroesById, getHeroesByOwner };