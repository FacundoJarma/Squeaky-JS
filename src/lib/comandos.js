export const comandos = [
  {
    name: "Abrir lecciones",
    description: "Ir a la seccion Mis Lecciones",
    category: "Links",
    action: () => {
      window.open("/lecciones", "_self");
    },
  },
  {
    name: "Abrir ejercicios",
    description: "Ir a la seccion ejercicios",
    category: "Links",
    action: () => {
      window.open("/ejercicios", "_self");
    },
  },
  {
    name: "Abrir Perfil",
    description: "Ir a la pagina perfil",
    category: "Links",
    action: () => {
      window.open("/profile", "_self");
    },
  },
];
