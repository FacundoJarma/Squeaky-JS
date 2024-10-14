import { readFile, writeFile } from 'fs';
import { join } from 'path';

const pathJSON = join("./src/lib/data/users.json");

export function añadirFavorito(data) {
    readFile(pathJSON, 'utf-8', (err, leido) => {
        if (err) return console.error('Error al leer el archivo:', err);

        let jsonData = [];
        try {
            jsonData = JSON.parse(leido);
        } catch (e) {
            return console.error('Error al parsear JSON:', e);
        }

        const usuario = jsonData.find(usuario => usuario.username === data.username);

        if (!usuario) {
            console.error('Usuario no encontrado');
            return;
        }

        if (Array.isArray(usuario.favoritos)) {
            usuario.favoritos = [...new Set([...usuario.favoritos, ...data.favoritos])];
        } else {
            usuario.favoritos = data.favoritos;
        }

        const jsonString = JSON.stringify(jsonData, null, 2);

        writeFile(pathJSON, jsonString, (err) => {
            if (err) console.error('Error al escribir en el archivo:', err);
            else console.log('Favorito añadido correctamente');
        });
    });
}

