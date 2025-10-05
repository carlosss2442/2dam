// 1️⃣ A partir d'un array d'objectes amb nom i edat, torna un array només amb els noms de les persones menors de 18 anys
const personesEdat = [
    { nom: "Marc", edat: 15 },
    { nom: "Clara", edat: 22 },
    { nom: "Joan", edat: 17 },
    { nom: "Anna", edat: 20 }
];
// Resultat esperat: ["Marc", "Joan"]
const menores = () => {
    return personesEdat.filter((ele) => ele.edat < 18).map((item => item.nom));
}
console.log(menores());


// 2️⃣ A partir d'un array d'objectes amb producte i quantitat, calcula el total de productes amb .reduce()
console.log("-------------------------------------");
let estoc = [
    { producte: "Llibre", quantitat: 3 },
    { producte: "Llapis", quantitat: 10 },
    { producte: "Goma", quantitat: 5 }
];
// Resultat esperat: 18
const cantidadProductos = () => {
    return estoc.reduce((acu, item) => acu + item.quantitat, 0);
}
console.log(cantidadProductos());


// 3️⃣ A partir d'un array d'objectes amb nom i puntuació, mostra en consola "Nom té PUNTS punts" per a cadascun
console.log("-------------------------------------");
let jugadors = [
    { nom: "Leo", punts: 12 },
    { nom: "Marta", punts: 20 },
    { nom: "Nil", punts: 15 }
];
// Resultat esperat:
// Leo té 12 punts
// Marta té 20 punts
// Nil té 15 punts
const nombrePuntos = () => {
    return jugadors.reduce((acc, item) => acc += "\n" + item.nom + " te " + item.punts + " puntos", "");
};
console.log(nombrePuntos());

// 4️⃣ A partir d'un array d'objectes amb nom i salari, crea un array amb el doble del salari
console.log("-------------------------------------");
let empleats = [
    { nom: "Sara", salari: 1000 },
    { nom: "Joan", salari: 2000 },
    { nom: "Pere", salari: 1500 }
];
// Resultat esperat: [2000, 4000, 3000]
const dobleSalari = () => {
    return empleats.map(ele => ele.salari * 2);
};
console.log(dobleSalari());

// 5️⃣ A partir d'un array d'objectes amb ciutat i habitants, filtra només les ciutats amb més de 100.000 habitants
console.log("-------------------------------------");
let ciutats = [
    { ciutat: "Barcelona", habitants: 1600000 },
    { ciutat: "Girona", habitants: 100000 },
    { ciutat: "Figueres", habitants: 45000 }
];
// Resultat esperat: [{ciutat: "Barcelona", ...}, {ciutat: "Girona", ...}]
const masHabitantes = () => {
    return ciutats.filter(item => item.habitants >= 100000).map(item => ({ ciutat: item.ciutat }));
}
console.log(masHabitantes());


// 6️⃣ A partir d'un array d'objectes amb nom i tecnologia, torna un array amb només els noms de les persones que saben "JavaScript"
console.log("-------------------------------------");
let programadors = [
    { nom: "Anna", tecnologia: "Python" },
    { nom: "Marc", tecnologia: "JavaScript" },
    { nom: "Lidia", tecnologia: "JavaScript" }
];
// Resultat esperat: ["Marc", "Lidia"]
const filtrarJs = () => {
    return programadors.filter(ele => ele.tecnologia === "JavaScript").map(item => item.nom);
}
console.log(filtrarJs());


// 7️⃣ A partir d'un array d'objectes amb id i títol, crea un objecte on cada id siga clau i el títol el valor
console.log("-------------------------------------");
let llibres = [
    { id: 1, titol: "El Quijote" },
    { id: 2, titol: "1984" },
    { id: 3, titol: "La Sombra del Viento" }
];

// Resultat esperat: {1: "El Quijote", 2: "1984", 3: "La Sombra del Viento"}
const libros = () => {
    return llibres.reduce((acc, item) => {
        acc[item.id] = item.titol
        return acc
    }, {});
};
console.log(libros());

// 8️⃣ A partir d'un array d'objectes amb producte i preu, torna un array amb només els productes més barats de 20 €
console.log("-------------------------------------");
let ofertes = [
    { producte: "Bolígraf", preu: 2 },
    { producte: "Auriculars", preu: 45 },
    { producte: "Llibre", preu: 15 }
];

// Resultat esperat: ["Bolígraf", "Llibre"]
const baratos = () => {
    return ofertes.filter(ele => ele.preu < 20).map(item => item.producte);
};
console.log(baratos());

// 9️⃣ A partir d'un array d'objectes amb usuari i correu, torna un array amb els usuaris que tenen correu electrònic que acaba amb ".com"
console.log("-------------------------------------");
let clients = [
    { usuari: "Pau", correu: "pau@gmail.com" },
    { usuari: "Carla", correu: "carla@yahoo.es" },
    { usuari: "Oriol", correu: "oriol@outlook.com" }
];
// Resultat esperat: [{usuari: "Pau", ...}, {usuari: "Oriol", ...}]
const correos = () => {
    return clients.filter(elem => elem.correu.endsWith(".com")).map(item => ({usuari: item.usuari}));
};
console.log(correos());

// 🔟 A partir d'un array d'objectes amb frase i autor, torna un sol string amb totes les frases concatenades separades per punt i espai
console.log("-------------------------------------");
let citacions = [
    { frase: "El saber és poder", autor: "Francis Bacon" },
    { frase: "La vida és curta", autor: "Proverbi" },
    { frase: "Carpe diem", autor: "Horaci" }
];
// Resultat esperat: "El saber és poder. La vida és curta. Carpe diem"
const tornaString = () => {
    return citacions.reduce((acu, valor) => acu += valor.frase + ". ","");
};

console.log(tornaString());
