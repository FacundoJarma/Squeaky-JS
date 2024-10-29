import { readFile, writeFile } from 'fs/promises';
import { join } from 'path';

const pathJSON = join("./src/lib/data/users.json");
export async function actualizarRacha(data) {
    try {
        const leido = await readFile(pathJSON, 'utf-8');
        const jsonData = JSON.parse(leido);

        const usuario = jsonData.find(usuario => usuario.username === data.username);
        if (!usuario) {
            console.error('Usuario no encontrado');
            return null;
        }

        const hoy = new Date().setHours(0, 0, 0, 0);
        const ultimaFecha = new Date(usuario.ultimaFecha || 0).setHours(0, 0, 0, 0);

        if (hoy === ultimaFecha) {
            console.log('Ya se registró la sesión de hoy.');
            return usuario.racha;
        }

        if (hoy - ultimaFecha === 86400000) {
            usuario.racha = (usuario.racha || 0) + 1;
        } else {
            usuario.racha = 1;
        }

        usuario.ultimaFecha = new Date().toISOString();

        const jsonString = JSON.stringify(jsonData, null, 2);
        await writeFile(pathJSON, jsonString, 'utf-8');

        console.log(`Racha actualizada: ${usuario.racha} días consecutivos.`);
        return usuario.racha;

    } catch (err) {
        console.error('Error al leer o escribir en el archivo:', err);
        return null;
    }
}
export async function getRacha(data) {
    try {
        const leido = await readFile(pathJSON, 'utf-8');
        const jsonData = JSON.parse(leido);

        const usuario = jsonData.find(usuario => usuario.username === data.username);
        if (!usuario) {
            console.error('Usuario no encontrado');
            return null;
        }
        return usuario.racha;
    } catch (err) {
        console.error('Error al leer o parsear el archivo:', err);
        return null;
    }
}