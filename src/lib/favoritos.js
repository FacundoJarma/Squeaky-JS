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
        return jsonData;
    } catch (err) {
        console.error('Error:', err);
    }
}

export async function eliminarFavorito(data) {
    try {
        const leido = await fs.readFile(pathJSON, 'utf-8');
        let jsonData = JSON.parse(leido);

        const usuario = jsonData.find(usuario => usuario.username === data.username);
        if (!usuario) {
            console.error('Usuario no encontrado');
            return;
        }

        console.log('Favoritos actuales:', usuario.favoritos);
        console.log('Favorito a eliminar:', data.favorito);

        if (Array.isArray(usuario.favoritos)) {
            const favoritoAEliminar = data.favorito.trim().toLowerCase();
            usuario.favoritos = usuario.favoritos.filter(favorito =>
                favorito.trim().toLowerCase() !== favoritoAEliminar
            );

            console.log('Favoritos después de eliminar:', usuario.favoritos);
        } else {
            console.error('No hay favoritos para eliminar');
            return;
        }

        const jsonString = JSON.stringify(jsonData, null, 2);
        await fs.writeFile(pathJSON, jsonString, 'utf-8');

        console.log('Favorito eliminado correctamente');
        return jsonData;
    } catch (err) {
        console.error('Error:', err);
    }
}
