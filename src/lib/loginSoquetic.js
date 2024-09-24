import { onEvent, sendEvent, startServer } from "soquetic";
import { writeFile, readFileSync, readFile, fstat, fdatasync, writeFileSync, ftruncateSync } from "fs";
import { join } from "path";
import { randomUUID } from "crypto";

const pathJSON = join("./data/users.json");

function error() {
    //TODO:función que haga que diga "nombre de usuario o contraseña incorrectos"
}

function confirmLogin() {
    //TODO:función para iniciar sesión
}

function login() {
    readFile(pathJSON, "utf-8", (err, info) => {
        onEvent("iniciarSesion", (data) => {
            if(data.username == info.username || data.email == info.data) {
                
            } if (data.password == info.password) {
                confirmLogin();
            } else {
                error();
            }
        })
    })

}

login();