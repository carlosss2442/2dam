//---------------------------------------------
// 1️⃣ A partir de un array de números, calcula el producto de todos ellos usando reduce().
// Ejemplo: [2,3,4,5] → 120
let array1 = [2,3,4,5];
const numeros = () => {
    return array1.reduce((acu, it) => acu * it, 1);
}
console.log(numeros());
//---------------------------------------------
// 2️⃣ A partir de un array de strings, devuelve un string con todas las palabras separadas por guiones (-).
// Ejemplo: ["JavaScript", "es", "genial"] → "JavaScript-es-genial"
console.log("-------------------------------------");
let array22 = ["JavaScript", "es", "genial"];
const cadena = () => {
    return array22.reduce((acu, ele) => acu + "-" + ele ,"");
}
console.log(cadena());
//---------------------------------------------
// 3️⃣ A partir de un array de frutas, crea un objeto donde la clave sea el nombre de la fruta y el valor su posición.
// Ejemplo: ["Manzana","Pera","Plátano"] → {Manzana:0, Pera:1, Plátano:2}
console.log("-------------------------------------");
let frutas = ["Manzana","Pera","Plátano"];
const ejer3 = () => {
    return frutas.reduce((acu, ele, indice) => {
        acu[ele] = indice;
        return acu;
    },{});
}
console.log(ejer3());
//---------------------------------------------
// 4️⃣ A partir de un array de objetos coches (marca y color), devuelve un array solo con las marcas.
console.log("-------------------------------------");
let coches = [
    { marca: "Toyota", color: "rojo" },
    { marca: "Ford", color: "azul" },
    { marca: "Renault", color: "verde" },
    { marca: "Seat", color: "rojo" }
];
const marcas = () => {
    return coches.map(item => item.marca);
}
console.log(marcas());
//---------------------------------------------
// 5️⃣ Devuelve un array con los coches de color rojo usando filter() y luego muestra sus marcas.
console.log("-------------------------------------");
const colorRojo = () => {
    return coches.filter(ele => ele.color === "rojo").map(item => item.marca);
}
console.log(colorRojo());
//---------------------------------------------
// 6️⃣ A partir de un array de personas, devuelve un nuevo array de objetos con su nombre y la edad multiplicada por 2.
// Ejemplo: [{nombre:'Ana',edad:20}] → [{nombre:'Ana',edad:40}]
console.log("-------------------------------------");
let personas = [
    { nombre: "Ana", edad: 20 },
    { nombre: "Luis", edad: 25 },
    { nombre: "Marta", edad: 30 }
];
const nueva = () => {
    return personas.map(item => ({
        nombre: item.nombre,
        edad: item.edad * 2
    }))
}
console.log(nueva());
//---------------------------------------------
// 7️⃣ A partir de un array de cursos con duración, devuelve la suma total de horas usando reduce().
console.log("-------------------------------------");
let cursos = [
    { titulo: "HTML", horas: 20 },
    { titulo: "CSS", horas: 15 },
    { titulo: "JavaScript", horas: 30 }
];
const totalHoras = () => {
    return cursos.reduce((acu, ele) => acu += ele.horas, 0);
}
console.log(totalHoras());
//---------------------------------------------
// 8️⃣ A partir de un array de pedidos, devuelve un array de objetos con cliente y nombre del producto.
// Usa map() y un map() anidado.
console.log("-------------------------------------");
let pedidos = [
    { cliente: "Juan", productos: [{ nombre: "Pan" }, { nombre: "Leche" }] },
    { cliente: "Lucía", productos: [{ nombre: "Huevos" }, { nombre: "Queso" }] }
];

const nuevo2 = () => {
    return pedidos.map(ele => ({
        clientes: ele.cliente,
        productos: ele.productos.map(item => item.nombre)
    }))
}
console.log(nuevo2());
