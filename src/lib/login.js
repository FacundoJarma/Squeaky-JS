export function loginUser(email, password) {
  console.log(email, password);
  let user_record = new Array();
  user_record = JSON.parse(localStorage.getItem("users"))
    ? JSON.parse(localStorage.getItem("users"))
    : [];
  if (
    user_record.some((v) => {
      return v.email == email && v.password == password;
    })
  ) {
    alert("Se ha iniciado sesión correctamente");
    let current_user = user_record.filter((v) => {
      return v.email == email && v.password == password;
    })[0];

    localStorage.setItem("name", current_user.name);
    localStorage.setItem("email", current_user.email);
    window.location.href = "/lecciones";
  } else {
    alert("Nombre de usuario y/o contraseña incorrecto(s)");
  }
}

export function logoutUser() {
  localStorage.removeItem("name");
  localStorage.removeItem("email");
  window.location.href = "/login";
}

export function registerUser(name, email, password) {
  console.log(name, email, password);

  // localStorage.setItem("name", name);
  // localStorage.setItem("email", email);
  // localStorage.setItem("password", password);

  let user_records = new Array();
  user_records = JSON.parse(localStorage.getItem("users"))
    ? JSON.parse(localStorage.getItem("users"))
    : [];
  if (
    user_records.some((v) => {
      return v.email == email;
    })
  ) {
    alert("Los datos están duplicados");
  } else {
    user_records.push({
      name: name,
      email: email,
      password: password,
    });
    localStorage.setItem("users", JSON.stringify(user_records));
  }
}
