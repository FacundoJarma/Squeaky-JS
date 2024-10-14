import { registrar } from "./registerSoquetic.js";
import { login } from "./loginSoquetic.js";
import { guardarLeccion } from "./leccionesHechas.js";
import { añadirFavorito } from "./favoritos.js";
import { nuevaRacha } from "./racha.js";
import { buscarUsuario } from "./displayUser.js";

import { onEvent, sendEvent, startServer } from "soquetic";

onEvent("registrarUsuario", (data) => {
  registrar(data);
});

sendEvent("")

onEvent("pedirRacha", (data) => {
  nuevaRacha(data);
});

onEvent("leccionHecha", (data) => {
  guardarLeccion(data);
});

onEvent("favorito", (data) => {
  añadirFavorito(data);
});

onEvent('login', async (data) => {
  const user = await login(data.username)
  console.log(user)
  return user
})

/*
onEvent("iniciarSesion", (data) => {
  const info = 
  if (data.username == info.username || data.email == info.data) {
    sendEvent('enviarUsuario', (data) => {
      return data.username;
      console.log('Login salio bien')
    })
  }
  if (data.password == info.password) {
    confirmLogin();
  } else {
    console.log('Login salió mal')
    error();
  }
});

onEvent("login", (data) => {
  if(data.username === usuario.username && data.password === usuario.password) {
      console.log('logueado')
      sendEvent('loguear', (data) => {
          //TODO: LOGIN | decir en la pagina que el usuario/contraseña es incorrecto
      })
  } else {
      console.log('no logueado')
      sendEvent('loginRechazado', (data) => {
      //TODO: función para decir que el register/login fue rechazado
      })
  }
})
*/
onEvent('perfil', (data) => {
  buscarUsuario(data);
})

startServer();
