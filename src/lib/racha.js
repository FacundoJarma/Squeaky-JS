import { onEvent, sendEvent, startServer } from "soquetic";
import { writeFile, readFileSync, readFile, fstat, fdatasync, writeFileSync, ftruncateSync, read, write } from "fs";
import { join } from "path";

const pathJSON = join("./src/lib/data/users.json");

let racha;

let data = {
    racha: 10,
    username: "rafa"
}

export function nuevaRacha(data) {
    readFile(pathJSON, 'utf-8', (err, leido) => {
        if (err) {
            console.log(err);
            return;
        }

        let jsonData = [];
        try {
            jsonData = JSON.parse(leido);
        } catch (e) {
            console.log('Error al parsear en la racha ' + e)
        }

        let search = jsonData.filter(usuario => usuario.username.includes(data.username));
        search[0]["racha"] = data.racha;

        if (search.length > 0) {
            if (Array.isArray(search[0]["racha"])) {
                search[0]["racha"] = [...new Set([...search[0]["racha"], ...data.racha])];
            } else {
                search[0]["racha"] = data.racha;
            }

            const jsonString = JSON.stringify(jsonData, null, 2);
            writeFile(pathJSON, jsonString, (err) => {
                if (err) {
                    console.log('Error al escribir en el archivo racha.js ', err);
                } else {
                    console.log('Racha inicializada correctamente');
                }
            })
        }
    })
}

// nuevaRacha(data);

