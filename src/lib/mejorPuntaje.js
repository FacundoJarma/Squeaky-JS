import { onEvent, sendEvent, startServer } from "soquetic";
import { writeFile, readFileSync, readFile, fstat, fdatasync, writeFileSync, ftruncateSync, read } from "fs";
import { join } from "path";

const pathJSON = join("./data/users.json");

let mejor;

function mejorPuntaje(data, puntaje) {
    readFile(pathJSON, 'utf-8', (err, leido) => {
        if (err) {
            console.log(err);
            return;
        }

        let jsonData = [];
        try {
            jsonData = JSON.parse(leido);
        } catch (e) {
            console.log('Error al parsear, ' + e);
        }

        let search = jsonData.filter(usuario => usuario.username.includes(data.username));
        search[0]["mejorPuntaje"] = data.mejorPuntaje;
        //Agregar el nuevo valor a JsonDara

        if (search.length > 0) {
            if (Array.isArray(search[0]["mejorPuntaje"])) {
                search[0]["mejorPuntaje"] = [...new Set([...search[0]["mejorPuntaje"], ...data.favoritos])];
            } else {
                search[0]["mejorPuntaje"] = data.mejorPuntaje;
            }


        const jsonString = JSON.stringify(jsonData, null, 2);

        writeFile(pathJSON, jsonString, (err) => {
            if (err) {
                console.error('Error al escribir en el archivo mejor puntaje', err);
            } else {console.log('Mejor puntaje modificado correctamente')};
        })
    }
    })
}