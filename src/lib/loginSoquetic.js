import { onEvent, sendEvent, startServer } from "soquetic";
import { writeFile, readFileSync, readFile, fstat, fdatasync, writeFileSync, ftruncateSync } from "fs";
import { join } from "path";
import { randomUUID } from "crypto";

const pathJSON = join("./data/users.json");

export function error() {
    //TODO:función que haga que diga "nombre de usuario o contraseña incorrectos"
}

export function confirmLogin() {
    //TODO:función para iniciar sesión
}

export function login() {
    // readFile(pathJSON, "utf-8", (err, info) => {
      
    //     })
    // })

}
