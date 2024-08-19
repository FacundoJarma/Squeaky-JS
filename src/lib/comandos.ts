export const comandos = [
  {
    name: "Abrir lecciones",
    description: "Ir a la seccion Mis Lecciones",
    category: "Links",
    site: "todos",
    action: () => {
      window.open("/lecciones", "_self");
    },
  },
  {
    name: "Abrir ejercicios",
    description: "Ir a la seccion ejercicios",
    category: "Links",
    site: "todos",
    action: () => {
      window.open("/ejercicios", "_self");
    },
  },
  {
    name: "Abrir Perfil",
    description: "Ir a la pagina perfil",
    category: "Links",
    site: "todos",
    action: () => {
      window.open("/profile", "_self");
    },
  },
  {
    name: "Abrir Menu",
    description: "Desplegar el menu lateral",
    category: "Acciones",
    site: "exercices",
    action: () => {
      document.getElementById("menu-aside").dataset.open =
        document.getElementById("menu-aside").dataset.open === "true"
          ? "false"
          : "true";
    },
  },
  {
    name: "Cambiar de tema",
    description: "Cambiar entre los temas: Claro o Oscuro",
    category: "Acciones",
    site: "todos",
    action: () => {
      //TODO: Cambiar tema
    },
  },
  {
    name: "Volver a la leccion",
    description: "Regresa a la leccion de este ejercicio.",
    category: "Acciones",
    site: "exercices",
    action: () => {
      document.getElementById("volverALeccion")?.click();
    },
  },
  {
    name: "Abrir los ejercicios de esta leccion",
    description: "Empieza a resolver los ejercicios.",
    category: "Acciones",
    site: "leccion",
    action: () => {
      document.getElementById("goToExercises")?.click();
    },
  },
  {
    name: "Visitar el repositorio",
    description: "Este proyecto es de codigo abierto. Visitar el repositorio!",
    category: "Proyecto",
    site: "todos",
    action: () => {
      window.open("https://github.com/FacundoJarma/Squeaky-JS", "_blank");
    },
  },
  {
    name: "Abrir la ultima leccion que viste",
    description: "Sigue aprendiendo, continua por donde lo dejaste!",
    category: "Links",
    site: "todos",
    action: () => {
      //TODO: Abrir ultima leccion
    },
  },
  {
    name: "Enviar codigo",
    description: "Enviara el codigo que estas escribiendo para que se ejecute",
    category: "Acciones",
    site: "editor",
    action: () => {
      document.getElementById("submitCodeBtn")?.click()
    }
  }
];

export class Command {
  constructor(
    public name: string,
    public description: string,
    public site: string,
    public visibility: boolean = true,

    private action: () => void,
    private element?: HTMLLIElement
  ) {
    this.name = name;
    this.description = description;
    this.action = action;
    this.site = site;
    this.element = element;
  }

  run() {
    if (typeof this.action === "function") {
      this.action();
    }

    return Error("El comando no tiene una accion definida");
  }

  getElement() {
    return this.element;
  }

  setElement(element: HTMLLIElement) {
    this.element = element;
  }

  changeVisibility(value = true) {
    if (this.element) {
      this.element.style.display = value ? "block" : "none";
    }
    this.visibility = value;
  }

  setSelected(value: boolean) {
    if (this.element) {
      this.element.dataset.selected = value ? "true" : "false";
    }
  }
}

export let commands: Command[] = [];

for (const comando of comandos) {
  commands.push(
    new Command(
      comando.name,
      comando.description,
      comando.site,
      true,
      comando.action
    )
  );
}
