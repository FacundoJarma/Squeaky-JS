import { onEvent, sendEvent, startServer } from "soquetic";
import { writeFile, readFileSync, readFile, fstat, fdatasync, writeFileSync } from "fs";
import { join } from "path";
import { randomUUID } from "crypto"

const pathJSON = join("./data/users.json")

const formato = {
  id: undefined,
  username: undefined,
  email: undefined,
  password: undefined,
  favoritos: {}
}

function enUso() {
  //TODO:función para decir que el nombre/email/contraseña está en uso
}

function registrar() {

  const nuevoUsuario = Object.create(formato);

  nuevoUsuario.username = data.username;
  nuevoUsuario.id = randomUUID();
  nuevoUsuario.password = data.password;
  nuevoUsuario.email = data.email;


  let info = JSON.stringify(nuevoUsuario)
  console.log(info);
  writeFileSync(pathJSON, info)

  if (info.username == data.username || info.password == data.password || info.email == data.email) {

  }

}

registrar();

onEvent('registrarUsuario', (data) => {
  registrar();
})

//TODO:https://www.youtube.com/watch?v=fxwIayn5_Dw
/**Tutorial JSON con FS y Node */
