export const prerender = false;
import type { APIRoute } from "astro";
import { logout } from "../../../lib/supabaseAuth";

export const GET: APIRoute = async ({ cookies, redirect }) => {
  cookies.delete("sb-access-token", { path: "/" });
  cookies.delete("sb-refresh-token", { path: "/" });
  await logout();
  return redirect("/signin");
};