import { onEvent, sendEvent, startServer } from "soquetic";
import { writeFile, readFileSync, readFile, fstat, fdatasync, writeFileSync, ftruncateSync, read } from "fs";
import { join } from "path";

const pathJSON = join("./data/users.json");


function guardarLeccion(data) {
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
        search[0]["leccionesHechas"] = data.leccionesHechas;
        //Agregar el nuevo valor a JsonData

        if (search.length > 0) {
            if (Array.isArray(search[0]["leccionesHechas"])) {
                search[0]["leccionesHechas"] = [...new Set([...search[0]["leccionesHechas"], ...data.leccionesHechas])];
            } else {
                search[0]["leccionesHechas"] = data.leccionesHechas;
            }


        const jsonString = JSON.stringify(jsonData, null, 2);

        writeFile(pathJSON, jsonString, (err) => {
            if (err) {
                console.error('Error al escribir en el archivo leccionesHechas', err);
            } else {console.log('Favorito añadido correctamente')};
        })
    }
    })
}

onEvent("leccionHecha", (data) => {
     guardarLeccion(data);
 }) 