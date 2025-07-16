import { supabase } from "./supabase/client";

export async function getUser() {
  const { data, error } = await supabase.auth.getUser();
  if (error) throw error;
  return data;
}

export async function getExercices() {
  const { data, error } = await supabase
    .from("user_completed_exercices")
    .select("*");
  if (error) throw error;
  return data;
}

export async function exerciceCompleted(exerciceId: string) {
  try {
    const user = await getUser();
    const { data, error } = await supabase
      .from("user_completed_exercices")
      .insert([
        {
          user_id: user.user.id,
          exercice_id: exerciceId,
        },
      ]);
    if (error) throw error;
    return data;
  } catch (e) {
    console.log(e);
    return [];
  }
}
