//A partir d'un array de numeros, mostra la suma de tots ells
let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const suma = array1.reduce((acc, ele) => acc + ele, 0);
console.log(suma);
//45

//A partir d'un array d'strings i numeros, mostra un string que els continga tots
let array2 = ['a', 1, 'b', 2, 'c', 3];
const conca = array2.reduce((acc, vari) => acc + vari, "");
console.log(conca);
// a1b2c3

// A partir d'un array de dies, em torne un OBJECTE amb tants atributs com dies i la posició de cada dia
// És a dir per a l'array ['dilluns', 'dimarts', 'dimecres'] 
// torne un objecte {dilluns:0, dimarts:1, dimecres:2}
let dies = ['dilluns', 'dimarts', 'dimecres'];
const ob = dies.reduce((ac, undia, pos) => {
    ac[undia] = pos;
    return ac;
}, {});
console.log(ob);

//A partir d'un array amb objectes Musics (nom i instrument que toca)
//Que torne un array amb els noms de tots els components
// [ 'Joan', 'Pep', 'Vicent Lloret', 'Ariadna', 'Guillem' ]
let musics = [
    { 'nom': 'Joan', 'instrument': 'vocal' },
    { 'nom': 'Pep', 'instrument': 'guitarra' },
    { 'nom': 'Vicent Lloret', 'instrument': 'guitarra' },
    { 'nom': 'Ariadna', 'instrument': 'bateria' },
    { 'nom': 'Guillem', 'instrument': 'baix' }
]
let arrayMusicos = [];
const nombres = musics.forEach(ele => arrayMusicos.push(ele.nom));
console.log(arrayMusicos);

//Ara feu-ho utilitzant map()
const nombres2 = musics.map(unMusico => unMusico.nom);
console.log(nombres2);

//Ara que torne un array només amb els noms del musics que toquen la guitarra
//['Pep', 'Vicent Lloret']
let arrayGuitarra = [];
const tocanGuitarra = musics.filter(uno => uno.instrument === 'guitarra');
const resultado = tocanGuitarra.map(unMusico => unMusico.nom);
console.log(resultado);
//Amb reduce
//['Pep', 'Vicent Lloret']
const tocanGuitarra2 = musics.filter(uno => uno.instrument === 'guitarra');
const resul2 = tocanGuitarra.reduce((ac, variable) => ac += variable.nom + ", ", []);
console.log(resul2);
//----------------------------------------------------------------------------------

const users = [
    {
        id: 1,
        name: "Jonathon Haley",
        username: "Monte.Weber2",
        email: "Daphne43@yahoo.com",
        phone: "1-563-675-1857 x11708",
        website: "carmela.net",
        password: "hashed_password"
    },
    {
        id: 2,
        name: "Dean John",
        username: "dd.1",
        email: "deno@google.com",
        phone: "1-123-543-1857 123212",
        website: "dd.net",
        password: "Dean_hashed_password"
    }]

//Que torne un array d'objectes amb l'email, el tel i la web
/*[
    {
        email: 'Daphne43@yahoo.com',
        website: 'carmela.net',
        phone: '1-563-675-1857 x11708'
    },
    {
        email: 'deno@google.com',
        website: 'dd.net',
        phone: '1-123-543-1857 123212'
    }
]*/
// Forma uno
/*const retorno = users.map((email, website, phone) => ({ email, website, phone }));
console.log(retorno);*/
// Forma 2 
const retorn = users.map((elem) => ({
    email: elem.email,
    tel: elem.phone,
    web: elem.website
}));
console.log(retorn);
//-----------------------------------------------------
//A partir d'un arrar de comandes com el proporcionat
let comandes = [
    {
        client: {
            nom: "Manel Viel"
        },
        productes: [
            {
                id: 1,
                nom: "Taronges"
            }, {
                id: 2,
                nom: "Pomes"
            }
        ]
    }, {
        client: {
            nom: "Joan Mi"
        },
        productes: [
            {
                id: 3,
                nom: "Peres"
            }, {
                id: 2,
                nom: "Pomes"
            }
        ]
    }, {
        client: {
            nom: "Tomas Marin"
        },
        productes: [
            {
                id: 4,
                nom: "Freses"
            }, {
                id: 2,
                nom: "Peres"
            }, {
                id: 1,
                nom: "Platans"
            }
        ]
    }
]

// tornar un array anomenat llistat de comandes, on cada element siga un array d'objectes on
// aparega només el client i el producte de la seua comanda.
// Exemple:

//llistatDeComandes => [
//    [
//        { client: 'Manel Viel', productes: 'Taronges' },
//        { client: 'Manel Viel', productes: 'Pomes' }
//    ],
//    [
//        { client: 'Joan Mi', productes: 'Peres' },
//         { client: 'Joan Mi', productes: 'Pomes' }
//     ],
//     [
//         { client: 'Tomas Marin', productes: 'Freses' },
//         { client: 'Tomas Marin', productes: 'Peres' },
//         { client: 'Tomas Marin', productes: 'Platans' }
//     ]
// ]
const listado = comandes.map((elem) => ({

    client: elem.client,
    productes: elem.productes.map((ele) => ele.nom)
}));
console.log(listado);

// Forma 2

const listado2 = comandes.map((comanda) => {
    comandes.productes.map((producte) => {
        return { client: comanda.nom, productes: producte.nom }
    })
})
console.log(listado2);

