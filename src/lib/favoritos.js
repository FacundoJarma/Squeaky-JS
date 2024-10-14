import { promises as fs } from 'fs';
import { join } from 'path';

const pathJSON = join("./src/lib/data/users.json");

export async function añadirFavorito(data) {
    try {
        const leido = await fs.readFile(pathJSON, 'utf-8');
        let jsonData = JSON.parse(leido);

        const usuario = jsonData.find(usuario => usuario.username === data.username);
        if (!usuario) {
            console.error('Usuario no encontrado');
            return;
        }

        const nuevosFavoritos = Array.isArray(data.favoritos) ? data.favoritos : [data.favoritos];

        if (Array.isArray(usuario.favoritos)) {
            usuario.favoritos = [...new Set([...usuario.favoritos, ...nuevosFavoritos])];
        } else {
            usuario.favoritos = nuevosFavoritos;
        }

        const jsonString = JSON.stringify(jsonData, null, 2);
        await fs.writeFile(pathJSON, jsonString, 'utf-8');

        console.log('Favorito añadido correctamente');
        return usuario.favoritos;
    } catch (err) {
        console.error('Error:', err);
    }
}
