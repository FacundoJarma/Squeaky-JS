import { onEvent, sendEvent, startServer } from "soquetic";
import { writeFile, readFileSync, readFile, fstat, fdatasync, writeFileSync, ftruncateSync } from "fs";
import { join } from "path";
import { randomUUID } from "crypto";

const pathJSON = join("./src/lib/data/users.json");

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
                return usuario
            } else {
                return null
            }
        } catch (parseError) {
            console.error("Error al parsear el archivo JSON:", parseError);
        }
    });
}

// Ejemplo de uso
login("rafa");
