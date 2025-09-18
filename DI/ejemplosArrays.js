const num = [10,9,7];
let resultado = [];
// Con bucle for
for (let i = 0; i < num.length; i++){
    resultado.push(num[i]*2);
}

console.log(resultado);

// Con funcion map
let resulMap = [];
resulMap = num.map((unElemento) => unElemento * 2);
console.log(resulMap);

// Ejemplo 2 
const nombres = ['Pepe', 'juan','david'];
const mayusculas = nombres.map((elemento) => elemento.toUpperCase());
console.log(mayusculas);

// Manera de usar filter(), sirve pra filtrar cosas a partir de una condicion
// Ejemplo 1, que sea
const numeros = [1, 2, 3, 4, 5, 6];
const parells = numeros.filter(num => num % 2 === 0);
console.log(parells); // [2, 4, 6];

// Ejeplo 2, que sean mayores que 5
const numeros2 = [2, 7, 4, 10];
const majors = numeros2.filter(num => num > 5);
console.log(majors); // [7, 10];

// forEach() sirve para mostrar.
// Ejemplo 1 
const fruits = ["poma", "pera", "plàtan"];
fruits.forEach((fruit, index) => {
 console.log(index, fruit);
});

//1. Utilitza .filter() per quedar-te només amb els nombres parells de l’array [1, 2, 3, 4, 5, 6]
const numbers = [1, 2, 3, 4, 5, 6];
const pares = numbers.filter(e => e % 2 === 0);
console.log(pares);

// 2. Utilitza.filter() per trobar les paraules més llargues de 3 lletres en ["sol", "pluja", "mar"].
const largas = ["sol", "pluja", "mar"];
const masDe3 = largas.filter((pos) => pos.length > 3);
console.log(masDe3);

// . Utilitza.reduce() per multiplicar tots els números de [2, 3, 4]
const nu = [2, 3, 4];
const multi = nu.reduce((acc, num) => acc * num,1);
console.log(multi);

// Utilitza.reduce() per concatenar ['Hola', 'món']
const palabra = ['Hola', 'món'];
const conca = palabra.reduce((acc, el) =>  acc = el, '');
console.log(conca);


