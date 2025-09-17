//Transforma els dies a majúscules
let dies = ["Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres", "Dissabte", "Diumenge"];

const diesMayus = (array, accion) => {
    const mayus = array.map(elem => elem.toUpperCase());
    mayus.forEach(dia => accion(dia));
}
diesMayus(dies, console.log);

// Intento de los ejercicios hechos en clase
console.log('.................................................................');
const ejer1 = (array, accion) => {
    array.forEach(el => accion(el));
}
ejer1(dies, console.log);

// Que cree un altre array on calcule el numero de caracters de cada dia de la setmana
// ex: numCar=[7,7,8,6,9,8,8] 
// i després que mostre el contingut dels dos arrays de la següent manera:
// Dilluns: 7
// Dimarts: 7
// Dimecres: 8
// ...
console.log('.................................................................');

const ejer2 = (array, accion) => {
    const numCar = array.map(elem => elem.length);
    array.forEach((dia, pos) => accion(dia, " : ", numCar[pos]));
}
ejer2(dies, console.log);

//Mostra els dies que ténen més de 7 caracters (filter)
console.log('.................................................................');

const diesMayor = dies.filter(dia => dia.length > 7)
console.log(diesMayor);

let final = "";
diesMayor.forEach(day => final += day + ",");
console.log(final);


