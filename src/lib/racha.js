import { readFile, writeFile } from 'fs';
import { join } from 'path';

const pathJSON = join("./src/lib/data/users.json");

export function actualizarRacha(data) {
    readFile(pathJSON, 'utf-8', (err, leido) => {
        if (err) {
            console.error('Error al leer el archivo:', err);
            return;
        }

        let jsonData = [];
        try {
            jsonData = JSON.parse(leido);
        } catch (e) {
            console.error('Error al parsear JSON:', e);
            return;
        }

        const usuario = jsonData.find(usuario => usuario.username === data.username);
        if (!usuario) {
            console.error('Usuario no encontrado');
            return;
        }

        const hoy = new Date().setHours(0, 0, 0, 0); 
        const ultimaFecha = new Date(usuario.ultimaFecha || 0).setHours(0, 0, 0, 0);

        if (hoy === ultimaFecha) {
            console.log('Ya se registró la sesión de hoy.');
            return;
        }

        if (hoy - ultimaFecha === 86400000) { 
            usuario.racha = (usuario.racha || 0) + 1; 
        } else {
            usuario.racha = 1; 
        }

        usuario.ultimaFecha = new Date().toISOString(); 

        const jsonString = JSON.stringify(jsonData, null, 2);
        writeFile(pathJSON, jsonString, 'utf-8', (err) => {
            if (err) {
                console.error('Error al escribir en el archivo:', err);
            } else {
                console.log(`Racha actualizada: ${usuario.racha} días consecutivos.`);
            }
        });
    });
}
