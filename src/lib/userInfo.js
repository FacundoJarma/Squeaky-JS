import { promises as fs } from 'fs';
import { join } from 'path';

const pathJSON = join("./src/lib/data/users.json");

export async function userDisplay(data) {
    try {
        const leido = await fs.readFile(pathJSON, 'utf-8');
        let jsonData = JSON.parse(leido);

        const usuario = jsonData.find(usuario => usuario.username === data.username); 
        if (!usuario) {
            console.error('Usuario no encontrado en userinfo.js');
            return;
        } else {
            console.log(usuario.racha)
            console.log('Usuario encontrado')
            let uData = {
                racha: usuario.racha,
                username: usuario.username,
                email: usuario.email,
                fechaDeNacimiento: usuario.fechaDeNacimiento,
                password: usuario.password
            }
            return usuario.racha;
            return usuario.username;
            return usuario.email;
            return usuario.fechaDeNacimiento;
            return usuario.password;

            console.log(uData)
            return uData;
        }
    } catch (err) {
        console.log(err);
    };
}

userDisplay({
    username: 'rafa'
})