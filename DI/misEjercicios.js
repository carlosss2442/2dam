//Transforma els dies a majúscules
/*let dies = ["Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres", "Dissabte", "Diumenge"];

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

*/

// PARTE 2 DE LA PRACTICA

const datos = [
    {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
            geo: {
                lat: "-37.3159",
                lng: "81.1496"
            }
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
            name: "Romaguera-Crona",
            catchPhrase: "Multi-layered client-server neural-net",
            bs: "harness real-time e-markets"
        }
    },
    {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv",
        address: {
            street: "Victor Plains",
            suite: "Suite 879",
            city: "Wisokyburgh",
            zipcode: "90566-7771",
            geo: {
                lat: "-43.9509",
                lng: "-34.4618"
            }
        },
        phone: "010-692-6593 x09125",
        website: "",
        company: {
            name: "Deckow-Crist",
            catchPhrase: "Proactive didactic contingency",
            bs: "synergize scalable supply-chains"
        }
    },
    {
        id: 3,
        name: "Clementine Bauch",
        username: "Samantha",
        email: "Nathan@yesenia.net",
        address: {
            street: "Douglas Extension",
            suite: "Suite 847",
            city: "McKenziehaven",
            zipcode: "59590-4157",
            geo: {
                lat: "-68.6102",
                lng: "-47.0653"
            }
        },
        phone: "1-463-123-4447",
        website: "ramiro.info",
        company: {
            name: "Romaguera-Jacobson",
            catchPhrase: "Face to face bifurcated interface",
            bs: "e-enable strategic applications"
        }
    },
    {
        id: 4,
        name: "Patricia Lebsack",
        username: "Karianne",
        email: "Julianne.OConner@kory.org",
        address: {
            street: "Hoeger Mall",
            suite: "Apt. 692",
            city: "South Elvis",
            zipcode: "53919-4257",
            geo: {
                lat: "29.4572",
                lng: "-164.2990"
            }
        },
        phone: "493-170-9623 x156",
        website: "kale.biz",
        company: {
            name: "Robel-Corkery",
            catchPhrase: "Multi-tiered zero tolerance productivity",
            bs: "transition cutting-edge web services"
        }
    },
    {
        id: 5,
        name: "Chelsey Dietrich",
        username: "Kamren",
        email: "Lucio_Hettinger@annie.ca",
        address: {
            street: "Skiles Walks",
            suite: "Suite 351",
            city: "Roscoeview",
            zipcode: "33263",
            geo: {
                lat: "-31.8129",
                lng: "62.5342"
            }
        },
        phone: "(254)954-1289",
        website: "",
        company: {
            name: "Keebler LLC",
            catchPhrase: "User-centric fault-tolerant solution",
            bs: "revolutionize end-to-end systems"
        }
    }
]

// Crear una funció que es diga llistat_Noms() 
// que ens torne un array només amb els noms dels usuaris.
const listaNombres = () => {
    return datos.map(vari =>  ({
        name: vari.name
    }));
}
console.log(listaNombres());
console.log("-------------------------");

// Crear una funció que es diga usuaris_Amb_Web() 
// que ens torne un array amb els usuaris que tenen la web definida.
const usuariosConWeb = () => {
    return datos.filter(el => el.website.length > 0).map(m => ({
        id: m.id
    }))
    
}
console.log(usuariosConWeb());
console.log("-------------------------");

// Crear una funció que es diga suma_Id() 
// que ens torne la suma de tots els id dels usuaris.
const sumaId = () => {
    return datos.reduce((ac,v) => ac + v.id, 0);
}
console.log(sumaId());
console.log("-------------------------");

// Crear una funció que es diga mostrar_Emails() 
// que mostre per consola el correu de cada usuari.
const mostrarEmails = (da, accion) => {
    return da.forEach(vari => accion(vari.id,vari.email));
}
mostrarEmails(datos,console.log);
console.log("-------------------------");

// Crear una funció que es diga noms_Majors_De_20() 
// que ens torne un array amb els noms dels usuaris que tinguen més de 20 anys 
// (suposant que cada usuari té una propietat edat).
/*const mayoresDe20 = () => {
    return datos.filter(e => e.edat > 20).map(ele => ({name: ele.name}));
}
console.log(mayoresDe20());*/

// Crear una funció que es diga total_Longitud_Noms() 
// que ens torne la suma de totes les lletres dels noms dels usuaris.
const total = () => {
    return datos.map(usu => usu.name.length).reduce((acc, longi) => acc + longi, 0);
}
console.log(total());
console.log("-------------------------");
// Crear una funció que es diga mostrar_Usuaris_Sense_Web() 
// que mostre per consola els noms dels usuaris que no tenen web.
const mostrarUsuarioSinWeb = (d,acionn) => {
    return d.filter(m => m.website == "").forEach(e => acionn(e.name));
}
mostrarUsuarioSinWeb(datos,console.log);

