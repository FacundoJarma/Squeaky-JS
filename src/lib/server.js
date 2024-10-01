import { registrar } from "./registerSoquetic.js";
import { login } from "./loginSoquetic.js";
import { guardarLeccion } from "./leccionesHechas";
import { añadirFavorito } from "./favoritos";
import { nuevaRacha } from "./racha";

import { onEvent, sendEvent, startServer } from "soquetic";

onEvent("registrarUsuario", (data) => {
  registrar(data);
});

onEvent("iniciarSesion", (data) => {
  if (data.username == info.username || data.email == info.data) {
  }
  login()
  if (data.password == info.password) {
    confirmLogin();
  } else {
    error();
  }
});
startServer();


