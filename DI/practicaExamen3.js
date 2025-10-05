//🔹 1. Calcular cuadrados
// Dado este array, crea un nuevo array con el cuadrado de cada número usando .map()
const nums1 = [2, 4, 6, 8];
const arry = () => {
    return nums1.map(item => Math.pow(item, 2));

};
console.log(arry());
// 🔹 2. Números pares
// Dado este array, crea un nuevo array con solo los números pares usando .filter()
console.log("-------------------------------");
const nums2 = [1, 2, 3, 4, 5, 6, 7];
const pares = () => {
    return nums2.filter(ele => ele % 2 === 0);
};
console.log(pares());

// 🔹 3. Suma de múltiplos de 3
// Dado este array, calcula la suma de todos los múltiplos de 3 usando .reduce()
console.log("-------------------------------");
const nums3 = [3, 5, 6, 9, 11, 12];
const suma = () => {
    return nums3.reduce((acu, ele) => acu += ele, 0);
}
console.log(suma());

// 🔹 4. Treure només noms
// Dado este array de alumnos, crea un array solo con los nombres usando .map()
console.log("-------------------------------");
const alumnes = [
    { nom: "Marta", edat: 21 },
    { nom: "Pau", edat: 19 },
    { nom: "Sofia", edat: 25 }
];
const nombres = () => {
    return alumnes.map(item => item.nom);
}
console.log(nombres());
// 🔹 5. Alumnos mayores de 20
// Dado el array anterior, filtra los alumnos que tengan más de 20 años usando .filter()
const masVeinte = () => {
    return alumnes.filter(edad => edad.edat > 20).map(ele => ele.nom);
}
console.log(masVeinte());
// 🔹 6. Media de edades
// Calcula la media de edades de los alumnos usando .reduce()
const media2 = () => {
    return alumnes.reduce((acu, e) => acu + e.edat, 0) / alumnes.length;
}
console.log(media2());
// 🔹 7. Transformar libros
// Dado este array de libros, crea un array con strings del tipo:
// "El senyor dels anells - Tolkien (1200 pàgines)" usando .map()
const llibres = [
    { titol: "El senyor dels anells", autor: "Tolkien", pagines: 1200 },
    { titol: "1984", autor: "Orwell", pagines: 300 },
    { titol: "El petit príncep", autor: "Exupéry", pagines: 100 }
];
const array2 = () => {
    return llibres.map(item =>  item.titol + " - " + item.autor + "(" + item.pagines + " pagines)");
}
console.log(array2());
// 🔹 8. Autores con libros de más de 200 páginas
// Filtra los libros con más de 200 páginas y devuelve un array con los nombres de los autores usando .filter() y .map()
const array3 = () => {
    return llibres.filter(item => item.pagines > 200).map(valor => valor.autor);
}
console.log(array3());
// 🔹 9. Total de páginas
// Calcula el total de páginas de todos los libros usando .reduce()
const conReduce = () => {
    return llibres.reduce((ac,e) => ac += e.pagines, 0);
}
console.log(conReduce());
// 🔹 10. Lista de productos comprados
// Dado este array de comandes, crea un único array con todos los productos de todas las comandes usando .map() y .reduce()
const comandes = [
    { client: "Anna", productes: ["Poma", "Plàtan"] },
    { client: "Joan", productes: ["Taronja"] },
    { client: "Marta", productes: ["Raïm", "Pera"] }
];
const todas = () => {
    return comandes.map(ele => ele.productes).reduce((acu, e) => acu.concat(e), []);
}
console.log(todas());