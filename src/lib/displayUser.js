import { onEvent, sendEvent, startServer } from "soquetic";
import { writeFile, readFileSync, readFile, fstat, fdatasync, writeFileSync, ftruncateSync } from "fs";
import { join } from "path";
import { randomUUID } from "crypto";

const pathJSON = join("data/users.json");

function buscarUsuario(usernameBuscado) {
    readFile(pathJSON, "utf-8", (err, info) => {
        if (err) {
            console.error("Error al leer el archivo:", err);
            return;
        }
        try {
            const usuarios = JSON.parse(info);
            const usuario = usuarios.find(user => user.username === usernameBuscado);

            if (usuario) {
                sendEvent('informacion', (usuario) => {
                    //TODO: enviar datos del usuario al front-end
                })
            }
        } catch (parseError) {
            console.log(parseError);
        }
    })
}

onEvent('perfil', (data) => {
   
})