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
    .from(" ") // Asegurate de que esta tabla exista
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
  return data;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
}

export async function getProfile(userId: string) {
  const { data, error } = await supabase
    .from("profiles") // Asegurate de que esta tabla exista
    .select("*")
    .eq("id", userId);

  if (error) throw error;
  return data;

}