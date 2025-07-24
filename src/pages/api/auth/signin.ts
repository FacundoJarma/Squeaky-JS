export const prerender = false;
import type { APIRoute } from "astro";
import { login } from "../../../lib/supabaseAuth.js";

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  const rawBody = await request.text();

  const form = new URLSearchParams(rawBody);
  const email = form.get("email")?.toString();
  const password = form.get("password")?.toString();

  if (!email || !password) {
    return new Response("Correo electrónico y contraseña obligatorios", {
      status: 400,
    });
  }
  const { auth, profile } = await login(email, password);

  const { access_token, refresh_token } = auth.session;
  cookies.set("sb-access-token", access_token, {
    path: "/",
  });
  cookies.set("sb-refresh-token", refresh_token, {
    path: "/",
  });

  return new Response(JSON.stringify({ auth: auth.user, profile: profile }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};
