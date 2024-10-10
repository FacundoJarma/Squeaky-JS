import { registrar } from "./registerSoquetic.js";
import { login } from "./loginSoquetic.js";
import { guardarLeccion } from "./leccionesHechas.js";
import { añadirFavorito } from "./favoritos.js";
import { nuevaRacha } from "./racha.js";

import { onEvent, sendEvent, startServer } from "soquetic";

onEvent("registrarUsuario", (data) => {
  registrar(data);
});

onEvent("pedirRacha", (data) => {
  nuevaRacha(data);
});

onEvent("leccionHecha", (data) => {
  guardarLeccion(data);
});

onEvent("favorito", (data) => {
  añadirFavorito(data);
});

onEvent("iniciarSesion", (data) => {
  if (data.username == info.username || data.email == info.data) {
  }
  login();
  if (data.password == info.password) {
    confirmLogin();
  } else {
    error();
  }
});
startServer();
