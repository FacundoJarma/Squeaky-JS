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
}

function registrar() {

  const nuevoUsuario = Object.create(formato);

  nuevoUsuario.id = randomUUID();


  let info = JSON.stringify(nuevoUsuario)
  console.log(info);
  writeFileSync(pathJSON, info)
}

registrar()

onEvent('registrarUsuario', (data) => {

})

//TODO:https://www.youtube.com/watch?v=fxwIayn5_Dw
/**Tutorial JSON con FS y Node */
