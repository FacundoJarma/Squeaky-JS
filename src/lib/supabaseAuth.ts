import { supabase } from "./supabase/client";

export async function registrarUsuario(email: string, password: string) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) throw error;
  return data;
}

export async function agregarPerfilExtra(
  userId: string,
  username: string,
  date: string
) {
  const { data, error } = await supabase
    .from("profiles") // Asegurate de que esta tabla exista
    .insert([
      {
        id: userId, // debe coincidir con el ID del auth de Supabase
        username,
        date,
      },
    ]);

  if (error) throw error;
  return data;
}

export async function login(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw error;

  await actualizarRachaUsuario(data.user.id);

  // Obtener perfil desde la tabla 'profiles'
  const { data: perfil, error: profileError } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", data.user.id)
    .single();

  if (profileError) throw profileError;

  // Guardar en localStorage
  localStorage.setItem(
    "user",
    JSON.stringify({
      auth: data.user,
      profile: perfil,
    })
  );

  return { auth: data.user, profile: perfil };
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
}

export async function getProfile() {
  const { data: user } = await supabase.auth.getUser();
  const { data, error } = await supabase
    .from("profiles") // Asegurate de que esta tabla exista
    .select("*")
    .eq("id", user.user.id)
    .single();

  if (error) throw error;
  return data;
}

export async function actualizarRachaUsuario(userId: string) {
  const { data: perfil, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", userId)
    .single();

  if (error) throw error;

  const hoy = new Date();
  const ultimaFecha = perfil.lastSignIn ? new Date(perfil.lastSignIn) : null;

  let nuevaRacha = 1;

  if (ultimaFecha) {
    const diferenciaDias = Math.floor(
      (hoy.setHours(0, 0, 0, 0) - ultimaFecha.setHours(0, 0, 0, 0)) /
        (1000 * 60 * 60 * 24)
    );

    if (diferenciaDias === 0) {
      // Ya inició sesión hoy → no actualizamos nada
      return;
    } else if (diferenciaDias === 1) {
      nuevaRacha = (perfil.streak || 0) + 1; // Sumar a racha
    }
    // Si fue más de 1 día, se reinicia a 1 (ya está asignado arriba)
  }

  const { error: updateError } = await supabase
    .from("profiles")
    .update({
      lastSignIn: new Date().toISOString(),
      streak: nuevaRacha,
    })
    .eq("id", userId);

  if (updateError) throw updateError;
}

export async function getStreak() {
  const { data: user } = await supabase.auth.getUser();
  const { data, error } = await supabase
    .from("profiles") // Asegurate de que esta tabla exista
    .select("streak")
    .eq("id", user.user.id)
    .single();

  if (error) throw error;
  return data;
}
