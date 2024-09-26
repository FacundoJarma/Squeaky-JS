import { registrar } from "./registerSoquetic.js";
import { login } from "./loginSoquetic.js";
import { onEvent, sendEvent, startServer } from "soquetic";

onEvent("registrarUsuario", (data) => {
  registrar(data);
});

onEvent("iniciarSesion", (data) => {
  if (data.username == info.username || data.email == info.data) {
  }
  if (data.password == info.password) {
    confirmLogin();
  } else {
    error();
  }
});
startServer();
