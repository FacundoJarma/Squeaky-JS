export const prerender = false;
import type { APIRoute } from "astro";
import { supabase } from "../../../lib/supabase/client.js";

export const POST: APIRoute = async ({ request, cookies }) => {
  const rawBody = await request.text();
  const form = new URLSearchParams(rawBody);

  const email = form.get("email")?.toString();
  const password = form.get("password")?.toString();
  const username = form.get("username")?.toString();
  const date = form.get("date")?.toString();

  if (!email || !password || !username || !date) {
    return new Response("Todos los campos son obligatorios", { status: 400 });
  }

  // Crear usuario con supabase.auth.signUp
  const { data: signupData, error: signupError } = await supabase.auth.signUp({
    email,
    password,
  });

  if (signupError || !signupData.user) {
    return new Response(signupError?.message || "Error al registrar usuario", {
      status: 500,
    });
  }

  // Crear perfil extra en tabla "profiles"
  const { error: profileError } = await supabase
    .from("profiles")
    .insert([
      {
        id: signupData.user.id,
        username,
        date,
      },
    ]);

  if (profileError) {
    return new Response(profileError.message, {
      status: 500,
    });
  }

  // Hacer login automático para devolver tokens y perfil actualizado
  const { data: loginData, error: loginError } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (loginError || !loginData.user) {
    return new Response(loginError?.message || "Error al iniciar sesión", {
      status: 500,
    });
  }

  // Obtener perfil actualizado (opcional, ya que acabamos de crear el perfil)
  const { data: perfil, error: perfilError } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", loginData.user.id)
    .single();

  if (perfilError) {
    return new Response(perfilError.message, {
      status: 500,
    });
  }

  // Setear cookies con tokens de sesión
  const { access_token, refresh_token } = loginData.session;

  cookies.set("sb-access-token", access_token, { path: "/" });
  cookies.set("sb-refresh-token", refresh_token, { path: "/" });

  // Responder con JSON para que el frontend pueda guardar en localStorage
  return new Response(
    JSON.stringify({ auth: loginData.user, profile: perfil }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
};
