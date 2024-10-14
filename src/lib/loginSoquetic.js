import { onEvent, sendEvent, startServer } from "soquetic";
import { writeFile, readFileSync, readFile, fstat, fdatasync, writeFileSync, ftruncateSync } from "fs";
import { join } from "path";
import { randomUUID } from "crypto";

const pathJSON = join("./src/lib/data/users.json");

export function login(usernameBuscado) {
    return new Promise((resolve, reject) => {
        readFile(pathJSON, "utf-8", (err, info) => {
            if (err) {
                console.error("Error al leer el archivo:", err);
                reject(err);
                return;
            }
            try {
                const usuarios = JSON.parse(info);
                const usuario = usuarios.find(user => user.username === usernameBuscado);
                
                if (usuario) {
                    resolve(usuario);
                } else {
                    resolve(null);
                }
            } catch (parseError) {
                console.error("Error al parsear el archivo JSON:", parseError);
                reject(parseError);
            }
        });
    });
}

// Ejemplo de uso
login("rafa");
