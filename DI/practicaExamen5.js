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

// 🧠 EJERCICIOS DE PRÁCTICA
// 🟢 Nivel 1 — Básicos

// llistat_Id_Nom_Email_clients()
// Devuelve un array con objetos que contengan id, name y email de cada cliente (usa map).

const llistat_Id_Nom_Email_clients = () => {
    return dadesClients.map(datos => ({
        id: datos.id,
        name: datos.name,
        email: datos.email,
    }))
};
console.log(llistat_Id_Nom_Email_clients());
// llistaClientsSenseWeb()
// Devuelve un array con los nombres de los clientes que no tienen website (usa filter + map).
console.log("==========================");
const llistaClientsSenseWeb = () => {
    return dadesClients.filter(item => item.website === "").map(valor => valor.name);
};
console.log(llistaClientsSenseWeb());
// emailsDeMadrid()
// Devuelve un array con los emails de los clientes que viven en Madrid (usa filter + map).
console.log("==========================");
const emailsDeMadrid = () => {
    return dadesClients.filter(valor => valor.address.city === "Madrid").map(item => item.email);
};
console.log(emailsDeMadrid());
// 🟡 Nivel 2 — Intermedios

// llistaAmbAdrecesCompletes()
// Devuelve un array de objetos con id, name y address (string concatenando street, suite, zipcode, city).
console.log("==========================");
const llistaAmbAdrecesCompletes = () => {
    return dadesClients.map(valor => ({
        id: valor.id,
        name: valor.name,
        address: valor.address.street + " " + valor.address.suite + " " + valor.address.zipcode + " " + valor.address.city
    }))
};
console.log(llistaAmbAdrecesCompletes());

// idEmpresesSenseWeb()
// Devuelve un array de objetos { id: X } de los clientes que no tienen website (usa reduce).
console.log("==========================");
const idEmpresesSenseWeb = () => {
    return dadesClients.reduce((acu, ele) => {
        if (ele.website === "") {
            acu.push({id: ele.id})
        }
        return acu;
    },[])
}
console.log(idEmpresesSenseWeb());

// clientsAmbLatitudPositiva()
// Devuelve los nombres de los clientes cuya lat (latitud) sea positiva (usa filter dentro de un map o viceversa).
console.log("==========================");
const clientsAmbLatitudPositiva = () => {
    return dadesClients.filter(ele => ele.address.geo.lat >= 0).map(item => item.name);
}
console.log(clientsAmbLatitudPositiva());

// 🔵 Nivel 3 — Avanzados (máximo 2 métodos anidados)
// emailsEmpresesCloud()
// Devuelve los emails de los clientes cuya empresa (company.bs) contenga la palabra "cloud" (usa filter + map).
console.log("==========================");
const emailsEmpresesCloud = () => {
    return dadesClients.filter(ele => ele.company.bs.includes("cloud")).map(elem => elem.email);
}
console.log(emailsEmpresesCloud());

// nomsICiutatsSenseWeb()
// Devuelve un array de objetos { name, city } de los clientes que no tienen website (usa filter + map).
console.log("==========================");
const nomsICiutatsSenseWeb = () => {
    return dadesClients.filter(ele => ele.website === "").map(item => ({
        name: item.name,
        city: item.address.city,
    }))
}
console.log(nomsICiutatsSenseWeb());

// idsClientsEnLatitudOest()
// Devuelve los IDs de los clientes cuya longitud (lng) sea negativa (usa filter + map).
console.log("==========================");
const idsClientsEnLatitudOest = () => {
    return dadesClients.filter(e => e.address.geo.lng <= 0).map(valor => valor.id); 
}
console.log(idsClientsEnLatitudOest());

// clientsAmbWebIOmple()
// Devuelve un array con { name, website } pero solo si el website no está vacío y tiene más de 8 caracteres (usa filter + map).
console.log("==========================");
const clientsAmbWebIOmple = () => {
    return dadesClients.filter(ele => ele.website !== "" && ele.website.length > 8).map(vari => ({
        name: vari.name,
        website: vari.website,
    }))
}
console.log(clientsAmbWebIOmple());

// 💡 BONUS

// infoEmpresaClientSenseWeb()
// Devuelve un array con { name: nombreCliente, company: nombreEmpresa } de aquellos clientes sin website (usa reduce o filter + map).
console.log("========================FILTER + MAP=========================");
const infoEmpresaClientSenseWebFilter = () => {
    return dadesClients.filter(item => item.website === "").map(val => ({
        name: val.name,
        company: val.company.name,
    }))
}
console.log(infoEmpresaClientSenseWebFilter());
console.log("========================REDUCE=========================");
const infoEmpresaClientSenseWebReduce = () => {
    return dadesClients.reduce((acu, e) => {
        if (e.website === ""){
            acu.push({name: e.name, company: e.company.name})
        }
        return acu;
    },[])
}
console.log(infoEmpresaClientSenseWebReduce());

// ciutatsAmbClientsSenseWeb()
// Devuelve las ciudades donde haya clientes sin website (usa filter + map).
console.log("==========================");
const ciutatsAmbClientsSenseWeb = () => {
    return dadesClients.filter(ite => ite.website === "").map(ciu => ciu.address.city);
}
console.log(ciutatsAmbClientsSenseWeb());