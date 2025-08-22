import { readFileSync, writeFileSync } from "fs";
import { join } from "path";

const pathJSON = join("./src/lib/data/users.json");


export function guardarUsuario(data) {

    console.log(data);
    let usuarios = [];
    try {
        const contenido = readFileSync(pathJSON, "utf-8");
        usuarios = JSON.parse(contenido);

        if (!Array.isArray(usuarios)) usuarios = [];
    } catch (e) {
        console.log("No se pudo leer el archivo JSON o no existe, creando uno nuevo.");
    }

    // Buscar usuario por id para actualizar
    // Buscar usuario por id para actualizar
    const index = usuarios.findIndex((u) => u.id === data.id);

    if (index !== -1) {
        // Actualizar solo las propiedades enviadas, conservando el resto
        usuarios[index] = {
            ...usuarios[index],
            username: data.username ?? usuarios[index].username,
            email: data.email ?? usuarios[index].email,
            password: data.password ?? usuarios[index].password,
            date: data.date ?? usuarios[index].date,
            fechaDeNacimiento: data.fechaDeNacimiento ?? usuarios[index].fechaDeNacimiento,
            favoritos: data.favoritos ?? usuarios[index].favoritos,
            racha: data.racha ?? usuarios[index].racha,
            leccionesHechas: data.leccionesHechas ?? usuarios[index].leccionesHechas,
            ejerciciosHechos: data.ejerciciosHechos ?? usuarios[index].ejerciciosHechos,
            description: data.description ?? usuarios[index].description
        };
    } else {
        // Si no existe, agrega el usuario completo (con id y propiedades)
        usuarios.push(data);
    }


    try {
        writeFileSync(pathJSON, JSON.stringify(usuarios, null, 2));
        console.log("Usuario guardado correctamente:", data.id);
        return { success: true };
    } catch (err) {
        console.error("Error guardando usuario:", err);
        return { success: false, error: err };
    }
}
