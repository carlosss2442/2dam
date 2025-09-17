// Ejercicio de practica 1
const numeros = [5,10,15];
let divicio = numeros.map((elemento) => elemento / 5);
console.log(divicio);

// Ejercicio de practica 2
const nombres = ["Anna", "Joan", "Maria"];
let  signo = nombres.map((nom1) => nom1 + "!");
console.log(signo);

// Ejercicio de practica 3
const numbers =  [2, 4, 6, 8];
let elevado = numbers.map((elem) => Math.pow(elem,2));
console.log(elevado);

// Ejercicio de practica 4
const nums = [2, 7, 4, 10];
const posImpares = nums.filter((ele, pos) => pos % 2 != 0);
console.log(posImpares);

// Ejercicio practica 5
const n = [2, 4, 6];
n.forEach(no => console.log(no * 3));

// Ejercicio practica 6 
const nombres2 =  ["Anna", "Joan", "Maria"];
nombres2.forEach(eleme => console.log("Hola,", eleme));

// Ejercicio practica 7 
const sumar = [5, 10, 15];
let sum = 0;
sumar.forEach(el => sum += el);
console.log(sum);