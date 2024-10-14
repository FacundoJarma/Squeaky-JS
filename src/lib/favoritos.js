import { onEvent, sendEvent, startServer } from "soquetic";
import { writeFile, readFileSync, readFile } from "fs";
import { join } from "path";

const pathJSON = join("./src/lib/data/users.json");


export function añadirFavorito(data) {
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
        search[0]["favoritos"] = data.favoritos;
        //Agregar el nuevo valor a JsonDara

        if (search.length > 0) {
            if (Array.isArray(search[0]["favoritos"])) {
                search[0]["favoritos"] = [...new Set([...search[0]["favoritos"], ...data.favoritos])];
            } else {
                search[0]["favoritos"] = data.favoritos;
            }


        const jsonString = JSON.stringify(jsonData, null, 2);

        writeFile(pathJSON, jsonString, (err) => {
            if (err) {
                console.error('Error al escribir en el archivo favoritos', err);
            } else {console.log('Favorito añadido correctamente')};
        })
    }
    })
}

