const dies = [
  "dilluns",
  "dimarts",
  "dimecres",
  "dijous",
  "divendres",
  "dissabte",
  "diumenge"
];

const dadesClients = [
    {
        id: 1,
        name: "Laura Martínez",
        username: "lauram",
        email: "laura.martinez@example.com",
        address: {
            street: "Gran Via",
            suite: "Piso 3B",
            city: "Barcelona",
            zipcode: "08010",
            geo: { lat: "41.3851", lng: "2.1734" }
        },
        phone: "934-112-223",
        website: "lauram.dev",
        company: {
            name: "TechNova",
            catchPhrase: "Innovating tomorrow’s code",
            bs: "develop smart digital ecosystems"
        }
    },
    {
        id: 2,
        name: "Carlos Ruiz",
        username: "carlosr",
        email: "carlos.ruiz@example.com",
        address: {
            street: "Calle Mayor",
            suite: "1ºA",
            city: "Madrid",
            zipcode: "28013",
            geo: { lat: "40.4168", lng: "-3.7038" }
        },
        phone: "915-789-321",
        website: "",
        company: {
            name: "DataFlow",
            catchPhrase: "Turning data into insights",
            bs: "optimize big data pipelines"
        }
    },
    {
        id: 3,
        name: "María López",
        username: "marial",
        email: "maria.lopez@example.com",
        address: {
            street: "Av. Libertad",
            suite: "Edificio Sol, 4ºD",
            city: "Valencia",
            zipcode: "46002",
            geo: { lat: "39.4699", lng: "-0.3763" }
        },
        phone: "963-441-112",
        website: "marialopez.io",
        company: {
            name: "WebWorks",
            catchPhrase: "Connecting creativity and technology",
            bs: "design scalable web platforms"
        }
    },
    {
        id: 4,
        name: "David Gómez",
        username: "davidg",
        email: "david.gomez@example.com",
        address: {
            street: "Ronda Norte",
            suite: "Bloque 12",
            city: "Sevilla",
            zipcode: "41015",
            geo: { lat: "37.3886", lng: "-5.9823" }
        },
        phone: "954-220-456",
        website: "",
        company: {
            name: "SoftVision",
            catchPhrase: "Empowering your digital presence",
            bs: "deliver cloud-based applications"
        }
    }
];


// mostraDiesMajuscules()
// Crea una función que, a partir del array dies, devuelva otro array con todos los nombres en mayúsculas usando map.
console.log("======================================");
const mostraDiesMajuscules = () => {
    return dies.map(ele => ele.toLocaleUpperCase());
}
console.log(mostraDiesMajuscules());

// mostraDiesAmbCaracters()
// Muestra por consola el nombre de cada día junto con su número de caracteres,
// pero solo para los que tengan más de 7 letras (usa filter + forEach).
console.log("======================================");
const mostraDiesAmbCaracters = () => {
    return dies.filter(item => item.length >= 7).forEach((item) => console.log(item + " Tiene " + item.length + " caracteres"))
}
console.log(mostraDiesAmbCaracters());

// sumaLongitudsDies()
// Calcula cuántos caracteres en total tienen todos los días de la semana (usa reduce).
console.log("======================================");
const sumaLongitudsDies = () => {
    return dies.reduce((acu, item) => acu += item.length, 0);
}
console.log(sumaLongitudsDies());


// diesAmbE()
// Devuelve un array con los días que contienen la letra "e" (usa filter + includes()).
console.log("======================================");
const diesAmbE = () => {
    return dies.filter(ele => ele.includes("e"));
}
console.log(diesAmbE());

// 🟡 NIVEL 2 — Basados en dadesUsuaris

// emailsUsuarisSenseWeb()
// Devuelve los emails de los usuarios que no tienen website (usa filter + map).
console.log("======================================");
const emailsUsuarisSenseWeb = () => {
    return dadesClients.filter(item => item.website === "").map(ele => ele.email);
};
console.log(emailsUsuarisSenseWeb());

// nomEmpresaCiutat()
// Devuelve un array con objetos que contengan:
// { empresa: nomEmpresa, ciutat: nomCiutat }
console.log("======================================");
const nomEmpresaCiutat = () => {
    return dadesClients.map(ele => ({
        name: ele.name,
        city: ele.address.city,
    }))
}
console.log(nomEmpresaCiutat());

// nomICiutatAmbSaltDeLinia()
// Crea un array de strings con el siguiente formato para cada usuario:
// Leanne Graham
// Gwenborough
// (usa map).
console.log("======================================");
const nomICiutatAmbSaltDeLinia = () => {
    return dadesClients.map(ele =>  ele.name + " " + ele.address.city);
}
console.log(nomICiutatAmbSaltDeLinia())


// llistatAmbTelefonCurt()
// Devuelve un array con los nombres de los usuarios cuyo teléfono tenga menos de 15 caracteres.
console.log("======================================");
const llistatAmbTelefonCurt = () => {
    return dadesClients.filter(ele => ele.phone.length <= 15).map(item => item.username);
}
console.log(llistatAmbTelefonCurt());

// 🔵 NIVEL 3 — Combinando métodos y creando estructuras nuevas

// llistaAmbEmpresaYSenseWeb()
// Devuelve un array con { id, name, companyName } solo de los usuarios que no tienen website.
// → Usa filter + map.
console.log("======================================");
const llistaAmbEmpresaYSenseWeb = () => {
    return dadesClients.filter(el => el.website === "").map(valor => ({
        id: valor.id,
        name: valor.name,
        company: valor.company.name,
    }));
};
console.log(llistaAmbEmpresaYSenseWeb());

// llistaCompletaAdreces()
// Devuelve un array con los datos combinados así:
// {
//   nom: "Ervin Howell",
//   ciutat: "Wisokyburgh",
//   address: "Victor Plains, Suite 879, 90566-7771"
// }
console.log("======================================");
const llistaCompletaAdreces = () => {
    return dadesClients.map(ele => ({
        name: ele.name,
        city: ele.address.city,
        address: ele.address.street + ", Suite " + "," + ele.address.suite + ele.address.zipcode
    }))
}
console.log(llistaCompletaAdreces());

// usuarisPerCiutat()
// Devuelve un objeto (no array) donde las claves sean las ciudades y los valores sean arrays con los nombres de las personas que viven ahí.
// Ejemplo:
// {
//   Gwenborough: ["Leanne Graham"],
//   Wisokyburgh: ["Ervin Howell"],
//   ...
// }
// (usa reduce).
console.log("======================================");
const usuarisPerCiutat = () => {
    return dadesClients.reduce((acu, elem) => {
        acu[elem.address.city] = [];
        acu[elem.address.city].push(elem.username)
        return acu;
    },[])
}
console.log(usuarisPerCiutat());

// emailsEmpresesAmbWord()
// Devuelve los emails de los usuarios cuya empresa (company.name) contenga la palabra "Romaguera".
// (usa filter + map + includes).
console.log("======================================");
const emailsEmpresesAmbWord = () => {
    return dadesClients.filter(elem => elem.company.name.includes("WebWorks")).map(item => item.email);
}
console.log(emailsEmpresesAmbWord());