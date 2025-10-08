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


// Ejercicio 1 – Mostrar nombres de todos los clientes
console.log("==========================");
const ejer1 = () => {
    return dadesClients.forEach(item => console.log(item.name))
}
console.log(ejer1());

// Ejercicio 2 – Mostrar nombre y ciudad
console.log("==============================");
const ejer2 = () => {
    return dadesClients.forEach(cliente => console.log(cliente.name + " Vive en: " + cliente.address.city))
}
console.log(ejer2());

// Ejercicio 3 – Crear un array de emails
console.log("==============================");
const ejer33 = () => {
    let emails = [];
    dadesClients.forEach( cliente => emails.push(cliente.email)) 
    return emails
}
console.log(ejer33());
// Ejercicio 4 – Clientes con website
// Ejercicio 5 – Mostrar información completa
// Ejercicio 6 – Sumar longitud de todos los nombres