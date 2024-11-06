import { promises as fs } from 'fs';
import { join } from 'path';

const pathJSON = join("./src/lib/data/users.json");

export async function ejercicioHecho(data) {
    try {
        const leido = await fs.readFile(pathJSON, 'utf-8');
        let jsonData = JSON.parse(leido);

        const usuario = jsonData.find(usuario => usuario.username === data.username);
        if (!usuario) {
            console.error('Usuario no encontrado');
            return;
        }

        const nuevaHecha = Array.isArray(data.ejerciciosHechos) ? data.ejerciciosHechos : [data.ejerciciosHechos];

        if (Array.isArray(usuario.ejerciciosHechos)) {
            usuario.ejerciciosHechos = [...new Set([...usuario.ejerciciosHechos, ...nuevaHecha])];
        } else {
            usuario.ejerciciosHechos = nuevaHecha;
        }

        const jsonString = JSON.stringify(jsonData, null, 2);
        await fs.writeFile(pathJSON, jsonString, 'utf-8');

        console.log('Ejercicio hecho añadido correctamente');
        return usuario;
    } catch (err) {
        console.error('Error:', err);
    }
}

/*

ejercicioHecho({
    username: "rafa",
    ejercicioHecho: ["dofanmoe", "jdnfoa"]
});

*/