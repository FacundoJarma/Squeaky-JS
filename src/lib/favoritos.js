import { promises as fs } from 'fs';
import { join } from 'path';

const pathJSON = join('./src/lib/data/users.json');

export async function añadirFavorito(data) {
    if (!data.username || !data.favoritos) {
        console.error('Datos insuficientes para añadir favorito');
        return;
    }

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
        return usuario;
    } catch (err) {
        if (err.code === 'ENOENT') {
            console.error('Archivo JSON no encontrado');
        } else {
            console.error('Error al añadir favorito:', err);
        }
    }
}

export async function eliminarFavorito(data) {
    if (!data.username || !data.favorito) {
        console.error('Datos insuficientes para eliminar favorito');
        return;
    }

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
                favorito && favorito.trim().toLowerCase() !== favoritoAEliminar
            );

            console.log('Favoritos después de eliminar:', usuario.favoritos);
        } else {
            console.error('No hay favoritos para eliminar');
            return;
        }

        const jsonString = JSON.stringify(jsonData, null, 2);
        await fs.writeFile(pathJSON, jsonString, 'utf-8');

        console.log('Favorito eliminado correctamente');
        return usuario;
    } catch (err) {
        if (err.code === 'ENOENT') {
            console.error('Archivo JSON no encontrado');
        } else {
            console.error('Error al eliminar favorito:', err);
        }
    }
}
export async function getFavoritos(username) {
    try {
        const leido = await fs.readFile(pathJSON, 'utf-8');
        const jsonData = JSON.parse(leido);

        const usuario = jsonData.find(user => user.username === username);
        if (usuario) {
            console.log('Favoritos del usuario', username, ':', usuario.favoritos || 'No hay favoritos');
            return usuario.favoritos || null;
        } else {
            console.log('Usuario no encontrado');
            return null;
        }
    } catch (err) {
        if (err.code === 'ENOENT') {
            console.error('Archivo JSON no encontrado');
        } else {
            console.error('Error al leer o parsear el archivo:', err);
        }
    }
}
