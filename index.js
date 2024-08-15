guardar();

function guardar() {
    let usuario = {
        ID: Math.round(Math.random() * Math.round()),
        username: "rafa",
        email: "asifoem@gmail.com",
        password: "dsokfmod",
        screen: 25,
        score: 3935,
        num_de_telefono: 911-242-2142,
        racha: 15,
        mejor_racha: 10,
        fecha_de_nacimiento: {
            dia: 10,
            mes: 4,
            año: 2009
        },
        nombre: "Juan",
        apellido: "AAAAA"
    };

    console.log(usuario);
    console.log("La fecha de nacimiento del usuario " + usuario.username + " es: " + usuario.fecha_de_nacimiento.dia + "/" + usuario.fecha_de_nacimiento.mes + "/" + usuario.fecha_de_nacimiento.año);
};

