import { getHeroesById } from "./bases/08-imp-exp";

const nuevaPromesa = new Promise((resolve, reject) => {
    setTimeout( () => {
        const heroe = getHeroesById(3);
        console.log(heroe);
        resolve();
    }, 2000 );
})

nuevaPromesa.then( () => {
    console.log('Todo ok then');
})