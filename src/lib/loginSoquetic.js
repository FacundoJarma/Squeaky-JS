import { onEvent, sendEvent, startServer } from "soquetic";
import { writeFile, readFileSync, readFile, fstat, fdatasync, writeFileSync, ftruncateSync } from "fs";
import { join } from "path";
import { randomUUID } from "crypto";

const pathJSON = join("data/users.json");

export function login(usernameBuscado) {
    readFile(pathJSON, "utf-8", (err, info) => {
        if (err) {
            console.error("Error al leer el archivo:", err);
            return;
        }
        try {
            const usuarios = JSON.parse(info);
            const usuario = usuarios.find(user => user.username === usernameBuscado);
            
            if (usuario) {
                console.log("Usuario encontrado:", usuario.username);
                console.log("Contraseña del usuario:", usuario.password);  // Mostrar la contraseña
            } else {
                console.log("Usuario no encontrado.");
            }
        } catch (parseError) {
            console.error("Error al parsear el archivo JSON:", parseError);
        }
    });
}

onEvent("login", (data) => {
    if(data.username === usuario.username && data.password === usuario.password) {
        sendEvent('loguear', () => {
            //TODO: LOGIN | decir en la pagina que el usuario/contraseña es incorrecto
        })
    } else {
        sendEvent('loginRechazado', () => {
        //TODO: función para decir que el register/login fue rechazado
        })
    }
})

// Ejemplo de uso
login("rafa");
