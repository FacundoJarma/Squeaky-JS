import { promises as fs } from 'fs';
import { join } from 'path';

const pathJSON = join("./src/lib/data/users.json");

export async function leccionesHecha(data) {
    try {
        const leido = await fs.readFile(pathJSON, 'utf-8');
        let jsonData = JSON.parse(leido);

        const usuario = jsonData.find(usuario => usuario.username === data.username);
        if (!usuario) {
            console.error('Usuario no encontrado');
            return;
        }

        const nuevaHecha = Array.isArray(data.leccionesHechas) ? data.leccionesHechas : [data.leccionesHechas];

        if (Array.isArray(usuario.leccionesHechas)) {
            usuario.leccionesHechas = [...new Set([...usuario.leccionesHechas, ...nuevaHecha])];
        } else {
            usuario.leccionesHechas = nuevaHecha;
        }

        const jsonString = JSON.stringify(jsonData, null, 2);
        await fs.writeFile(pathJSON, jsonString, 'utf-8');

        console.log('Leccion hecha añadida correctamente');
        return usuario;
    } catch (err) {
        console.error('Error:', err);
    }
}

/*
leccionesHecha({
    username: "facujarma",
    leccionesHechas: ["dofanmoe", "jdnfoa"]
});
*/