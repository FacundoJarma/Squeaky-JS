import { onEvent, sendEvent, startServer } from "soquetic";
import { writeFile, readFileSync, readFile } from "fs";
import { join } from "path";

const pathJSON = join('./data/users.json')

onEvent('enviarRegister', (data) => {
    let username = data.username;
    let email = data.email;
    let password = data.password;
    let userId = Math.floor(Math.random() * 10000000);
    

    const userData = {
        id: userId,
        username: username,
        email: email,
        password: password
    }
})

//const usuario = Object.create(userData);

const readJSON = () => {
    const data = readFileSync(pathJSON, "utf-8");
    return data;
}

const writeJSON = async (data) => {
    await writeFile(pathJSON, data);
};

const data = readJSON();

console.log(data);

sendEvent('userInfo', usuario);

TODO://https://www.youtube.com/watch?v=fxwIayn5_Dw
/**Tutorial JSON con FS y Node */