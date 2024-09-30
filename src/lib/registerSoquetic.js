
import {
  writeFile,
  readFileSync,
  readFile,
  fstat,
  fdatasync,
  writeFileSync,
} from "fs";
import { join } from "path";
import { randomUUID } from "crypto";

const pathJSON = join("src/lib/data/users.json");

const formato = {
  id: undefined,
  username: undefined,
  email: undefined,
  password: undefined,
  leccionActual: undefined,
  ejerciciosHechos: {},
  leccionesHechas: {},
  favoritos: {},
};

function enUso() {
  //TODO:función para decir que el nombre/email/contraseña está en uso
}

export function registrar(data) {
  const nuevoUsuario = Object.create(formato);

  nuevoUsuario.username = data.username;
  nuevoUsuario.id = randomUUID();
  nuevoUsuario.password = data.password;
  nuevoUsuario.email = data.email;
  nuevoUsuario.leccionActual = data.leccionActual;
  nuevoUsuario.ejerciciosHechos = data.ejerciciosHechos;
  nuevoUsuario.leccionesHechas = data.leccionesHechas;
  nuevoUsuario.favoritos = data.favoritos;

  let usuariosActuales = [];
  try {
    const datosJSON = readFileSync(pathJSON, 'utf-8');
    usuariosActuales = JSON.parse(datosJSON);

    // Asegurarse de que el archivo contenga un array
    if (!Array.isArray(usuariosActuales)) {
      usuariosActuales = [];
    }
  } catch (error) {
    console.log("Error al leer el archivo o archivo inexistente, creando uno nuevo.");
  }

  usuariosActuales.push(nuevoUsuario);

  const info = JSON.stringify(usuariosActuales, null, 2);
  writeFileSync(pathJSON, info);

  console.log("Nuevo usuario registrado:", nuevoUsuario);
}
  // if (
  //   info.username == data.username ||
  //   info.password == data.password ||
  //   info.email == data.email
  // ) {
  // }





//TODO:https://www.youtube.com/watch?v=fxwIayn5_Dw
/**Tutorial JSON con FS y Node */
