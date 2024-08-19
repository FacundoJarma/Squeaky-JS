guardar();

export function guardar() {
    let usuario = {
        ID: undefined,
        username: undefined,
        email: undefined,
        password: undefined,
        score: 0,
        num_de_telefono: undefined,
        racha: 0,
        mejor_racha: 0,
        fecha_de_nacimiento: {
            dia: undefined,
            mes: undefined,
            año: undefined
        },
        nombre: undefined,
        apellido: undefined
    };
    
    localStorage.setItem("usuario", JSON.stringify(usuario));
    export { guardar };


    /** 
     * https://www.youtube.com/watch?v=UPp8Wb-X4AY
     * function signup(e) {
    event.preventDefault();

    var ID = document.getElementById("ID").value;
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var score = document.getElementById("score").value;
    var num_de_telefono = document.getElementById("num_de_telefono").value;
    var racha = document.getElementById("racha").value;
    var mejor_racha = document.getElementById("mejor_racha").value;
    var fecha_de_nacimiento = document.getElementById("fecha_de_nacimiento").value;
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;

    var usuario = {
        ID: ID,
        username: username,
        email: email,
        password: password,
        score: score,
        num_de_telefono: num_de_telefono,
        racha: racha,
        mejor_racha: mejor_racha,
        fecha_de_nacimiento: fecha_de_nacimiento,
        nombre: nombre,
        apellido: apellido
    };

    var json = JSON.stringify(usuario);
    localStorage.setItem(username, json);
    console.log("Usuario añadido");

};

function login(e) {
    event.preventDefault();
    
    var username
}
    */
};
